const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = new sqlite3.Database("./database.db");

//
// ПОЛУЧИТЬ РЕЙТИНГ МЕСТА
//

app.get("/rating/place/:name", (req, res) => {

    const name = req.params.name;

    db.get(
        "SELECT avg, votes FROM place_ratings WHERE place_name = ?",
        [name],
        (err, row) => {

            if (!row) {

                res.json({
                    avg: 0,
                    votes: 0
                });

                return;

            }

            res.json(row);

        }
    );

});

//
// ДОБАВИТЬ ОЦЕНКУ МЕСТА
//

app.post("/rating/place", (req, res) => {

    const name = req.body.name;
    const rating = req.body.rating;

    db.get(
        "SELECT avg, votes FROM place_ratings WHERE place_name = ?",
        [name],
        (err, row) => {

            let avg = 0;
            let votes = 0;

            if (row) {

                avg = row.avg;
                votes = row.votes;

            }

            const total =
                avg * votes + rating;

            votes += 1;

            avg =
                total / votes;

            db.run(
                `
                INSERT OR REPLACE INTO place_ratings
                (place_name, avg, votes)
                VALUES (?, ?, ?)
                `,
                [name, avg, votes],
                () => {

                    res.json({
                        avg,
                        votes
                    });

                }
            );

        }
    );

});

//
// РЕЙТИНГ ПЛАНА
//

app.post("/rating/plan", (req, res) => {

    const planId =
        req.body.planId;

    const rating =
        req.body.rating;

    db.get(
        "SELECT avg, votes FROM plan_ratings WHERE plan_id = ?",
        [planId],
        (err, row) => {

            let avg = 0;
            let votes = 0;

            if (row) {

                avg = row.avg;
                votes = row.votes;

            }

            const total =
                avg * votes + rating;

            votes += 1;

            avg =
                total / votes;

            db.run(
                `
                INSERT OR REPLACE INTO plan_ratings
                (plan_id, avg, votes)
                VALUES (?, ?, ?)
                `,
                [planId, avg, votes],
                () => {

                    res.json({
                        avg,
                        votes
                    });

                }
            );

        }
    );

});

app.get("/rating/plan/:id", (req, res) => {

    const id = req.params.id;

    db.get(
        "SELECT avg, votes FROM plan_ratings WHERE plan_id = ?",
        [id],
        (err, row) => {

            if (!row) {

                res.json({
                    avg: 0,
                    votes: 0
                });

                return;

            }

            res.json(row);

        }
    );

});

app.use(express.static(__dirname));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
});
