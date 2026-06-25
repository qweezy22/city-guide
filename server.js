const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

const db = new sqlite3.Database(path.join(__dirname, "database.db"));

db.serialize(function () {
    db.all("PRAGMA table_info(place_ratings)", function (err, columns) {
        var hasTable = columns && columns.length > 0;
        var hasPlaceId = hasTable && columns.some(function (col) {
            return col.name === "place_id";
        });

        if (!hasTable || !hasPlaceId) {
            db.serialize(function () {
                db.run("DROP TABLE IF EXISTS place_ratings");
                db.run(`
                    CREATE TABLE place_ratings (
                        place_id INTEGER PRIMARY KEY,
                        place_name TEXT,
                        avg REAL DEFAULT 0,
                        votes INTEGER DEFAULT 0
                    )
                `);
            });
        }

        db.run(`
            CREATE TABLE IF NOT EXISTS user_place_ratings (
                place_id INTEGER,
                client_id TEXT,
                rating INTEGER,
                created_at TEXT DEFAULT CURRENT_TIMESTAMP,
                PRIMARY KEY (place_id, client_id)
            )
        `);

        db.run(`
            CREATE TABLE IF NOT EXISTS plan_ratings (
                plan_id TEXT PRIMARY KEY,
                avg REAL DEFAULT 0,
                votes INTEGER DEFAULT 0
            )
        `);

        db.run(`
            CREATE TABLE IF NOT EXISTS user_plan_ratings (
                plan_id TEXT,
                client_id TEXT,
                rating INTEGER,
                created_at TEXT DEFAULT CURRENT_TIMESTAMP,
                PRIMARY KEY (plan_id, client_id)
            )
        `);
    });
});

function getClientId(req) {
    return req.headers["x-client-id"] || req.body.clientId || "anonymous";
}

app.get("/rating/place/:id", function (req, res) {
    var placeId = parseInt(req.params.id, 10);

    if (isNaN(placeId)) {
        res.status(400).json({ error: "Invalid place id" });
        return;
    }

    db.get(
        "SELECT avg, votes FROM place_ratings WHERE place_id = ?",
        [placeId],
        function (err, row) {
            if (err) {
                res.status(500).json({ error: "Database error" });
                return;
            }

            if (!row) {
                res.json({ avg: 0, votes: 0, userRated: false });
                return;
            }

            var clientId = getClientId(req);

            db.get(
                "SELECT rating FROM user_place_ratings WHERE place_id = ? AND client_id = ?",
                [placeId, clientId],
                function (err2, userRow) {
                    res.json({
                        avg: row.avg,
                        votes: row.votes,
                        userRated: !!userRow,
                        userRating: userRow ? userRow.rating : null
                    });
                }
            );
        }
    );
});

app.post("/rating/place", function (req, res) {
    var placeId = parseInt(req.body.placeId || req.body.id, 10);
    var rating = parseInt(req.body.rating, 10);
    var placeName = req.body.name || "";
    var clientId = getClientId(req);

    if (isNaN(placeId) || isNaN(rating) || rating < 1 || rating > 5) {
        res.status(400).json({ error: "Invalid rating data" });
        return;
    }

    db.get(
        "SELECT rating FROM user_place_ratings WHERE place_id = ? AND client_id = ?",
        [placeId, clientId],
        function (err, existing) {
            if (err) {
                res.status(500).json({ error: "Database error" });
                return;
            }

            if (existing) {
                res.status(409).json({
                    error: "already_rated",
                    message: "You have already rated this place"
                });
                return;
            }

            db.get(
                "SELECT avg, votes FROM place_ratings WHERE place_id = ?",
                [placeId],
                function (err2, row) {
                    var avg = 0;
                    var votes = 0;

                    if (row) {
                        avg = row.avg;
                        votes = row.votes;
                    }

                    var total = avg * votes + rating;
                    votes += 1;
                    avg = total / votes;

                    db.run(
                        `
                        INSERT OR REPLACE INTO place_ratings
                        (place_id, place_name, avg, votes)
                        VALUES (?, ?, ?, ?)
                        `,
                        [placeId, placeName, avg, votes],
                        function (err3) {
                            if (err3) {
                                res.status(500).json({ error: "Database error" });
                                return;
                            }

                            db.run(
                                `
                                INSERT INTO user_place_ratings
                                (place_id, client_id, rating)
                                VALUES (?, ?, ?)
                                `,
                                [placeId, clientId, rating],
                                function (err4) {
                                    if (err4) {
                                        res.status(500).json({ error: "Database error" });
                                        return;
                                    }

                                    res.json({
                                        avg: avg,
                                        votes: votes,
                                        userRated: true
                                    });
                                }
                            );
                        }
                    );
                }
            );
        }
    );
});

app.post("/rating/plan", function (req, res) {
    var planId = req.body.planId;
    var rating = parseInt(req.body.rating, 10);
    var clientId = getClientId(req);

    if (!planId || isNaN(rating) || rating < 1 || rating > 5) {
        res.status(400).json({ error: "Invalid rating data" });
        return;
    }

    db.get(
        "SELECT rating FROM user_plan_ratings WHERE plan_id = ? AND client_id = ?",
        [planId, clientId],
        function (err, existing) {
            if (err) {
                res.status(500).json({ error: "Database error" });
                return;
            }

            if (existing) {
                res.status(409).json({
                    error: "already_rated",
                    message: "You have already rated this route"
                });
                return;
            }

            db.get(
                "SELECT avg, votes FROM plan_ratings WHERE plan_id = ?",
                [planId],
                function (err2, row) {
                    var avg = 0;
                    var votes = 0;

                    if (row) {
                        avg = row.avg;
                        votes = row.votes;
                    }

                    var total = avg * votes + rating;
                    votes += 1;
                    avg = total / votes;

                    db.run(
                        `
                        INSERT OR REPLACE INTO plan_ratings
                        (plan_id, avg, votes)
                        VALUES (?, ?, ?)
                        `,
                        [planId, avg, votes],
                        function (err3) {
                            if (err3) {
                                res.status(500).json({ error: "Database error" });
                                return;
                            }

                            db.run(
                                `
                                INSERT INTO user_plan_ratings
                                (plan_id, client_id, rating)
                                VALUES (?, ?, ?)
                                `,
                                [planId, clientId, rating],
                                function (err4) {
                                    if (err4) {
                                        res.status(500).json({ error: "Database error" });
                                        return;
                                    }

                                    res.json({
                                        avg: avg,
                                        votes: votes,
                                        userRated: true
                                    });
                                }
                            );
                        }
                    );
                }
            );
        }
    );
});

app.get("/rating/plan/:id", function (req, res) {
    var id = req.params.id;

    db.get(
        "SELECT avg, votes FROM plan_ratings WHERE plan_id = ?",
        [id],
        function (err, row) {
            if (err) {
                res.status(500).json({ error: "Database error" });
                return;
            }

            if (!row) {
                res.json({ avg: 0, votes: 0 });
                return;
            }

            res.json(row);
        }
    );
});

app.use(express.static(__dirname));

var PORT = process.env.PORT || 3001;

app.listen(PORT, function () {
    console.log("Server is running on port", PORT);
});
