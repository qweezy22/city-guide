console.log("script.js loaded");

var currentLang =
    localStorage.getItem("lang") ||
    (navigator.language.startsWith("ru") ? "ru" : "en");

const translations = {

    ru: {
        welcomeTitle: "Мини-гид по Кирову",
        welcomeText: "Выберите категорию и откройте интересные места города.",
        welcomeButton: "В путешествие →",
        interesting: "Интересные места",
        routes: "Планы маршрутов",
        categories: "Категории",
        youAreHere: "Вы здесь",
        search: "Поиск мест...",
        showAll: "Показать все",
        tradecenters: "Торговые центры",
        food: "Еда",
        nature: "Природа",
        water: "Реки и озёра",
        cave: "Пещеры и скалы",
        spring: "Родники",
        history: "История",
        museums: "Музеи и театры",
        park: "Природные комплексы",
        kids: "Для детей",
        noReviews: "Нет отзывов",
        rate: "Оценить",
        reviewSent: "Отзыв оставлен!",
        thanksReview: "Спасибо за отзыв!",
        putStars: "Поставьте звёзды перед отправкой.",
        nothingFound: "Ничего не найдено",
        noReviewsYet: "Пока отзывов нет",
        reviews: "Отзывы",
        routePlansTitle: "Планы маршрутов",
        routePlansText: "Выберите готовый план маршрута для туристов.",
        buildRoute: "Построить маршрут",
        buildingRoute: "Строим маршрут...",
        routeHour: "Маршрут на час",
        routeKids: "Маршрут с детьми",
        routeWalking: "Пешеходный маршрут",
        routeCulture: "Культурный маршрут",
        routePhoto: "Фото-маршрут",
        ratingNoReviews: "Рейтинг: пока нет отзывов",
        sendReview: "Отправить отзыв",
        close: "Закрыть",
        next: "Далее",
        finishJourney: "Закончить путешествие",
        routeBuildError: "Не удалось построить маршрут и показать метки.",
        geoError: "Не удалось определить ваше местоположение. Покажу объект на карте.",
        routeCompleted: "Вы прошли маршрут! Каковы впечатления?",
        km: "КМ",
        min: "МИН",
        votes: "голос.",
        reviewsWord: "отзывов",
        students: "Студентам",
        print: "Печать",
        educ: "Образование",
        studentFood: "Где поесть",
        education: "Образование",
        vyatsu: "ВятГУ",
        vgek: "ВГЭК",
        kpk: "КПК",
        kpias: "КПиАС",
        vemt: "ВЭМТ",
        vzt: "ВЖТ",
        kat: "КАТ",
    },

    en: {
        welcomeTitle: "Mini Guide to Kirov",
        welcomeText: "Choose a category and discover interesting places in the city.",
        welcomeButton: "Start journey →",
        sendReview: "Send review",
        close: "Close",
        interesting: "Interesting places",
        routes: "Route plans",
        categories: "Categories",
        youAreHere: "You are here",
        search: "Search places...",
        showAll: "Show all",
        tradecenters: "Shopping malls",
        food: "Food",
        nature: "Nature",
        water: "Rivers and lakes",
        cave: "Caves and rocks",
        spring: "Springs",
        history: "History",
        museums: "Museums and theaters",
        park: "Nature parks",
        kids: "For children",
        noReviews: "No reviews",
        rate: "Rate",
        reviewSent: "Review sent!",
        thanksReview: "Thanks for your review!",
        putStars: "Please select stars before sending.",
        nothingFound: "Nothing found",
        noReviewsYet: "No reviews yet",
        reviews: "Reviews",
        routePlansTitle: "Route plans",
        routePlansText: "Choose a ready-made tourist route.",
        buildRoute: "Build route",
        buildingRoute: "Building route...",
        routeHour: "1-hour route",
        routeKids: "Route with children",
        routeWalking: "Walking route",
        routeCulture: "Cultural route",
        routePhoto: "Photo route",
        ratingNoReviews: "Rating: no reviews yet",
        next: "Next",
        finishJourney: "Finish journey",
        routeBuildError: "Failed to build route and show markers.",
        geoError: "Could not determine your location. Showing place on map.",
        routeCompleted: "You completed the route! What are your impressions?",
        km: "KM",
        min: "MIN",
        votes: "votes",
        reviewsWord: "reviews",
        students: "Students",
        print: "Printing",
        educ: "Education",
        studentFood: "Where to eat",
        education: "Education",
        vyatsu: "VyatSu",
        vgek: "VGEC",
        kpk: "KPK",
        kpias: "KPiAS",
        vemt: "VEMT",
        vzt: "VZhT",
        kat: "KAT",
    }

};

function applyTranslations() {

    const t = translations[currentLang];

    document.querySelector("#welcome h2").innerText =
        t.welcomeTitle;

    document.querySelector("#welcome p").innerText =
        t.welcomeText;

    document.getElementById("welcomeButton").innerText =
        t.welcomeButton;

    document.querySelector("#mainMenu button:nth-child(1) span").innerText =
        t.interesting;

    document.querySelector("#interesting h2").innerText =
        t.interesting;

    document.querySelector("#mainMenu button:nth-child(2) span").innerText =
        t.routes;

    document.querySelector("#mainMenu button:nth-child(3) span").innerText =
        t.categories;
    
    document.querySelector("#categories h2").innerText =
        t.categories;

    document.getElementById("searchInput").placeholder =
        t.search;

    document.getElementById("reviewsTitle").innerText =
        t.reviews;

    document.getElementById("reviews").innerText =
        t.noReviewsYet;

    document.getElementById("routePlannerTitle").innerText =
        t.routePlansTitle;
    
    document.querySelector("#routePlanner h2").innerText =
        t.routePlansTitle;

    document.getElementById("routePlannerText").innerText =
        t.routePlansText;

    document.getElementById("routeHour").innerText =
        t.routeHour;

    document.getElementById("routeKids").innerText =
        t.routeKids;

    document.getElementById("routeWalking").innerText =
        t.routeWalking;

    document.getElementById("routeCulture").innerText =
        t.routeCulture;

    document.getElementById("routePhoto").innerText =
        t.routePhoto;

    document.querySelector("#mainMenu button:nth-child(4) span").innerText =
        t.students;

    document.getElementById("studentsTitle").innerText =
        t.students;
        

    const studentButtons =
        document.querySelectorAll("#students button");

    studentButtons[0].innerText = t.print;
    studentButtons[1].innerText = t.educ;
    studentButtons[2].innerText = t.studentFood;

    var routeBtn = document.getElementById("routeButton");

    if (routeBtn) {
        routeBtn.innerText = t.buildRoute;
    }

    const categoryButtons =
        document.querySelectorAll("#categories button");
    categoryButtons[0].innerText = t.showAll;
    categoryButtons[1].innerText = t.tradecenters;
    categoryButtons[2].innerText = t.food;
    categoryButtons[3].innerText = t.nature;
    categoryButtons[4].innerText = t.water;
    categoryButtons[5].innerText = t.cave;
    categoryButtons[6].innerText = t.spring;
    categoryButtons[7].innerText = t.history;
    categoryButtons[8].innerText = t.museums;
    categoryButtons[9].innerText = t.park;
    categoryButtons[10].innerText = t.kids;
    updateLanguageButton();

}

function toggleLanguage() {

    currentLang =
        currentLang === "ru"
            ? "en"
            : "ru";

    localStorage.setItem("lang", currentLang);

    applyTranslations();

    updateLanguageButton();

}

function updateLanguageButton() {

    var btn =
        document.getElementById("langToggle");

    if (!btn) return;

    btn.innerText =
        currentLang === "ru"
            ? "EN"
            : "RU";

}

var menuOpened = true;
var panel;
var startY = 0;
var endY = 0;

function isMobile() {
    return window.innerWidth <= 768;
}

window.addEventListener("load", function () {
    applyTranslations();
    console.log("page loaded");
    panel = document.getElementById("menuPanel");
    startCategoriesCarousel();
    loadAllRatings();
    loadPlanRatings();
    if (!isMobile()) {

        panel.addEventListener("touchstart", function(e) {
            startY = e.touches[0].clientY;
        });
        panel.addEventListener("touchmove", function(e) {
            endY = e.touches[0].clientY;
        });
        panel.addEventListener("touchend", function() {
            if (startY - endY > 50) {
                closeMenu();
            }

            if (endY - startY > 50) {
                openMenu();
            }
        });

    }

    try {

        if (window.ymaps && typeof ymaps.ready === "function") {

            ymaps.ready(init);

        } else {

            console.warn("ymaps is not available at load time");

        }

    } catch (e) {

        console.error("Error while initializing ymaps:", e);

    }

    setTimeout(function () {

        var welcome = document.getElementById("welcome");

        if (welcome) {
            welcome.classList.add("show");
        }

    });
    try {

        window.renderPlaceRatingControls = renderPlaceRatingControls;

        window.ensurePlanNextButton = ensurePlanNextButton;

    } catch (e) {}

});

function getPlaceImage(place) {

    if (place.images && place.images.length) {
        return place.images[0];
    }

    if (place.image) {
        return place.image;
    }

    return "images/no-photo.jpg";

}

// проверка кнопки далее 
function ensurePlanNextButton() {
    try {
        if (!activePlan) return;
        var detailsContainer = document.querySelector('#placeDetails .place-details-container') || document.getElementById('placeDetails');
        var nextBtn = document.getElementById('planNextButton');
        if (!nextBtn) {
            nextBtn = document.createElement('button');
            nextBtn.id = 'planNextButton';
            nextBtn.style.marginTop = '12px';
            nextBtn.innerText = translations[currentLang].next;
            nextBtn.className = 'plan-next-btn';
            detailsContainer.appendChild(nextBtn);
        }
        try { nextBtn.replaceWith(nextBtn.cloneNode(true)); nextBtn = document.getElementById('planNextButton'); } catch(e) {}
        updatePlanNextButton();
        nextBtn.addEventListener('click', function(){
            if (!activePlan) return;
            if (activePlan.index >= activePlan.ids.length - 1) {
                try { var b = document.getElementById('planNextButton'); if (b) b.parentNode.removeChild(b); } catch(e) {}
                var finishedPlanId = activePlan.planId || planId || null;
                showPlanFinishDialog(finishedPlanId)
                activePlan = null;
                return;
            }
            activePlan.index++;
            var nextPlace = activePlan.ids[activePlan.index];
            openPlaceDetails(nextPlace);
            updatePlanNextButton();
        });
    } catch (e) { console.warn(e); }
}

// визуал рейтинга
function renderPlaceRatingControls(place) {
    try {
        var container = document.getElementById('placeRating');
        if (!container) return;
        container.innerHTML = '';
        if (!place._rating) place._rating = { avg: (place.rating || 0), votes: (place.votes || 0) };
        var avg = place._rating.avg || 0;
        var votes = place._rating.votes || 0;

        var header = document.createElement('div');
        header.style.display = 'flex';
        header.style.alignItems = 'center';
        header.style.gap = '8px';

        var txt = document.createElement('div');
        const t = translations[currentLang];

        txt.innerText = votes
            ? (avg.toFixed(1) + ' (' + votes + ')')
            : t.noReviews;
        txt.style.fontSize = '14px';
        txt.style.color = 'white';
        header.appendChild(txt);

        container.appendChild(header);

        var starsWrap = document.createElement('div');
        starsWrap.style.display = 'flex';
        starsWrap.style.gap = '6px';
        starsWrap.style.marginTop = '8px';
        var selected = 0;
        var starButtons = [];
        for (var s = 1; s <= 5; s++) {
            (function(val){
                var b = document.createElement('button');
                b.type = 'button';
                b.innerText = '☆';
                b.style.fontSize = '22px';
                b.style.background = 'transparent';
                b.style.border = 'none';
                b.style.color = 'gold';
                b.style.cursor = 'pointer';
                b.style.padding = '0';
                b.addEventListener('click', function(e){
                    selected = val; render();
                });
                starButtons.push(b);
                starsWrap.appendChild(b);
            })(s);
        }
        container.appendChild(starsWrap);

        function render() {
        const t = translations[currentLang];
            for (var i = 0; i < starButtons.length; i++) {
                starButtons[i].innerText = (i < selected) ? '★' : '☆';
            }
        }

        var submit = document.createElement('button');
        submit.type = 'button';
        if (place._rated) {

            submit.innerText = "Отзыв оставлен!";
            submit.disabled = true;
            submit.style.opacity = "0.6";

        } else {

            submit.innerText = t.rate;

        }
        submit.style.marginTop = '8px';
        submit.style.padding = '8px 12px';
        submit.style.borderRadius = '10px';
        submit.style.cursor = 'pointer';
        submit.addEventListener('click', function(){
            if (selected <= 0) {
            alert(t.putStars);
            return;
        }

            fetch("/rating/place", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    name: place.name[currentLang],
                    rating: selected
                })

            })
            .then(res => {
                if (!res.ok) {
                    console.warn("Rating load failed:", res.status);
                    return null;
                }
                return res.json();
            })
            .then(data => {
                if (!data) return;

                place._rating = {
                    avg: data.avg,
                    votes: data.votes
                };

                place._rated = true;

                submit.innerText = "Отзыв оставлен!";
                submit.disabled = true;
                submit.style.opacity = "0.6";
                submit.style.cursor = "default";
                renderPlaceRatingControls(place);
                refreshVisiblePlacesRatings();
                if (listOwner === "interesting") {
                    showInterestingPlaces();
                }

                if (listOwner === "search") {
                    var input = document.getElementById("searchInput");
                    if (input) {
                        searchPlaces(input.value);
                    }
}
            })
            .catch(err => {
                console.warn("Rating error:", err);
            });

        });   

        container.appendChild(submit);

} catch (e) {
    console.warn(e);
}

try {
    window.renderPlaceRatingControls = renderPlaceRatingControls;
    window.ensurePlanNextButton = ensurePlanNextButton;
} catch (e) {}

};

// конец плана
function showPlanFinishDialog(planId) {
    try {
        var container = document.createElement('div');
        container.className = 'plan-finish-dialog';
        container.style.position = 'fixed';
        container.style.left = '50%';
        container.style.top = '50%';
        container.style.transform = 'translate(-50%, -50%)';
        container.style.background = 'rgba(0,0,0,0.8)';
        container.style.color = 'white';
        container.style.padding = '18px';
        container.style.borderRadius = '12px';
        container.style.zIndex = 2000;

        var h = document.createElement('h3'); const t = translations[currentLang]; h.innerText = t.routeCompleted; h.style.marginTop = '0';
        container.appendChild(h);
        var starsWrap = document.createElement('div'); starsWrap.style.display = 'flex'; starsWrap.style.gap = '6px'; starsWrap.style.margin = '12px 0';
        var selected = 0;
        for (var s = 1; s <= 5; s++) {
            (function(val){
                var btn = document.createElement('button');
                btn.innerText = '☆';
                btn.style.fontSize = '22px';
                btn.style.background = 'transparent';
                btn.style.border = 'none';
                btn.style.color = 'gold';
                btn.onclick = function(){ selected = val; renderStars(); };
                starsWrap.appendChild(btn);
            })(s);
        }
        container.appendChild(starsWrap);

        function renderStars(){
        const t = translations[currentLang];
            var btns = starsWrap.querySelectorAll('button');
            for (var i = 0; i < btns.length; i++) {
                btns[i].innerText = (i < selected) ? '★' : '☆';
            }
        }

        var ok = document.createElement('button'); ok.innerText = t.sendReview; ok.style.marginRight = '8px';
        ok.onclick = function(){

            if (selected <= 0) {
                alert(t.putStars);
                return;
            }

            fetch("/rating/plan", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        planId: planId,
                        rating: selected
                    })
                }
            )

            .then(function(res){
                return res.json();
            })

            .then(function(data){

                if (!data) return;

                plansData[planId].rating = {
                    avg: data.avg,
                    votes: data.votes
                };

                updateRoutePlanRating(planId);

                if (currentScreen === "routePlanner") {

                    openRoutePlanner();

                }

                try {
                    container.parentNode.removeChild(container);
                } catch(e) {}
                activePlan = null;
                switchScreen("placeDetails", "routePlanner");
                currentScreen = "routePlanner";
                prevScreen = "routePlanner";
                alert(t.thanksReview);

            })

            .catch(function(err){
                console.warn("Plan rating error:", err);
            });

        };

        var cancel = document.createElement('button'); cancel.innerText = t.close;
        cancel.onclick = function(){

            activePlan = null;

            currentScreen = "routePlanner";

            prevScreen = "routePlanner";

            try {
                container.parentNode.removeChild(container);
            } catch(e) {}

            switchScreen("placeDetails", "routePlanner");
        };

        var foot = document.createElement('div'); foot.style.marginTop = '12px'; foot.appendChild(ok); foot.appendChild(cancel);
        container.appendChild(foot);

        document.body.appendChild(container);
    } catch (e) { console.warn(e); }
}

var map;
var currentCategory = null;
var prevScreen = null;
var prevCategory = null;
var listOpen = false;
var listOwner = null; 
var prevListOpenState = false;
var prevListOwnerState = null;
var screenStack = [];
var prevListWasActive = false;
var prevListParent = null;
var prevListNextSibling = null;
var listHiddenForDetails = false;
var listInsertedScreenId = null;
var lastRoute = null;
var lastMarkers = []; 
var activePlan = null;
var carouselTimer = null;
var searchOriginScreen = null;
var currentScreen = "welcome";
var plansData = {
    'hour': {
        title: 'Маршрут на час',
        places: [55, 59, 48, 52],
        rating: { avg: 0, votes: 0 }
    },
    'kids': {
        title: 'Маршрут с детьми',
        places: [34, 46, 60, 57, 61, 40, 41],
        rating: { avg: 0, votes: 0 }
    },
    'walking': {
        title: 'Пешеходный маршрут',
        places: [55, 58, 59, 57, 56, 48, 52],
        rating: { avg: 0, votes: 0 }
    },
    'culture': {
        title: 'Культурный маршрут',
        places: [56, 59, 58, 61, 62, 64, 63],
        rating: { avg: 0, votes: 0 }
    },
    'photo': {
        title: 'Фото-маршрут',
        places: [55, 48, 52, 26, 4, 43, 54],
        rating: { avg: 0, votes: 0 }
    }
};

var prevVisibleInlines = [];

// авто закрытие списка
function removeInlineLists(allowedScreenId) {
    try {
        var inlines = document.querySelectorAll('[data-inline="1"]');
        for (var i = 0; i < inlines.length; i++) {
            var el = inlines[i];
            try {
                var sc = el.closest && el.closest('.screen');
                var scid = sc ? sc.id : null;

                if (allowedScreenId && scid === allowedScreenId) continue;

                try {
                    hideList(el);
                } catch (e) {
                    if (el.parentNode) el.parentNode.removeChild(el);
                }

            } catch (e) {}
        }

    } catch (e) {
        console.warn(e);
    }
}

// кнопка закончить путеш
function updatePlanNextButton() {
    const t = translations[currentLang];
    try {
        var btn = document.getElementById('planNextButton');
        if (!btn) return;
        if (!activePlan) {
            btn.style.display = 'none';
            return;
        }
        if (activePlan.index >= activePlan.ids.length - 1) {
            btn.innerText = t.finishJourney;
        } else {
            btn.innerText = t.next;
        }
        btn.style.display = '';
    } catch (e) {}

}

// условия появления кнопки далее
window.startPlan = function(planId) {
    try {
        var pd = plansData[planId];
        var names = (pd && pd.places) ? pd.places : [];
        if (!names || !names.length) return;
        var list = [];
        for (var i = 0; i < names.length; i++) {
            for (var j = 0; j < places.length; j++) {
                if (places[j].id === names[i]) { list.push(places[j]); break; }
            }
        }
        if (!list.length) return;
        activePlan = { ids: list, index: 0, planId: planId };
        screenStack.push('routePlanner');  
        openPlaceDetails(list[0]);
        setTimeout(function(){
            try {
                var detailsContainer = document.querySelector('#placeDetails .place-details-container') || document.getElementById('placeDetails');
                var nextBtn = document.getElementById('planNextButton');
                if (!nextBtn) {
                    nextBtn = document.createElement('button');
                    nextBtn.id = 'planNextButton';
                    nextBtn.style.marginTop = '12px';
                    nextBtn.innerText = 'Далее';
                    detailsContainer.appendChild(nextBtn);
                }
                updatePlanNextButton();
                try { nextBtn.onclick = null; } catch(e) {}
                nextBtn.addEventListener('click', function(){
                    if (!activePlan) return;
                    if (activePlan.index >= activePlan.ids.length - 1) {
                        try { var b = document.getElementById('planNextButton'); if (b) b.parentNode.removeChild(b); } catch(e) {}
                        var finishedPlanId = activePlan.planId || planId || null;
                        showPlanFinishDialog(finishedPlanId);
                        activePlan = null;
                        return;
                    }
                    activePlan.index++;
                    var nextPlace = activePlan.ids[activePlan.index];
                    openPlaceDetails(nextPlace);
                    updatePlanNextButton();
                });
            } catch (e) { console.warn(e); }
        }, 400);
    } catch (e) { console.warn(e); }
};

// сохранение истории экранов
function navigate(toId) {
    try {
        if (currentScreen && currentScreen !== toId) {
            screenStack.push(currentScreen);
        }
    } catch (e) {}
    try { switchScreen(currentScreen, toId); } catch (e) { console.warn(e); }
    currentScreen = toId;
}


var watchId = null;
var userMarker = null;
var followUser = true;
function startTracking(enableFollow) {
    followUser = !!enableFollow;
    if (!navigator.geolocation) {
        alert('Геолокация не поддерживается в этом браузере.');
        return;
    }
    if (watchId !== null) return;

    watchId = navigator.geolocation.watchPosition(function(pos) {
        var coords = normalizeCoords([pos.coords.latitude, pos.coords.longitude]);

        if (!userMarker) {
            userMarker = new ymaps.Placemark(coords, { iconCaption: translations[currentLang].youAreHere }, { preset: 'islands#circleIcon', iconColor: '#3b82f6' });
            map.geoObjects.add(userMarker);
        } else {
            try { userMarker.geometry.setCoordinates(coords); } catch (e) { console.warn(e); }
        }

        if (followUser) {
            try {
                var currentZoom = map.getZoom ? map.getZoom() : 14;
                map.setCenter(coords, Math.max(currentZoom, 14), { duration: 300 });
            } catch (e) {}
        }
    }, function(err) {
        console.warn('watchPosition error', err);
    }, { enableHighAccuracy: false, maximumAge: 60000, timeout: 20000 });
}

function stopTracking() {
    try {
        if (watchId !== null) {
            navigator.geolocation.clearWatch(watchId);
            watchId = null;
        }
    } catch (e) {}
    
}
// удаление маршрутов и маркеров мест
function clearRoute() {

    try {
        if (lastRoute) {
            map.geoObjects.remove(lastRoute);
            lastRoute = null;
        }
    } catch (e) {}

    try {
        if (lastMarkers && lastMarkers.length) {

            for (var i = 0; i < lastMarkers.length; i++) {

                var marker = lastMarkers[i];

                if (marker === userMarker) continue;

                try {
                    map.geoObjects.remove(marker);
                } catch (e) {}

            }

            lastMarkers = lastMarkers.filter(function(m) {
                return m === userMarker;
            });

        }
    } catch (e) {}

}

// нормальные координаты
function normalizeCoords(coord) {
    if (!coord || coord.length < 2) return coord;
    var a = Number(coord[0]);
    var b = Number(coord[1]);
    if (isNaN(a) || isNaN(b)) return coord;
    if (Math.abs(a) > 90 && Math.abs(b) <= 90) {
        return [b, a];
    }
    return [a, b];
}

// список мест
function showListBelowButton(list, button) {
    if (!list) list = document.getElementById('placesList');
    try {
        if (button && button.parentNode) {
            try {
                button.parentNode.insertBefore(list, button.nextSibling);
            } catch (e) {
                var menu = document.getElementById('menu');
                if (menu && list.parentNode !== menu) menu.appendChild(list);
            }
        } else {
            var menu = document.getElementById('menu');
            if (menu && list.parentNode !== menu) menu.appendChild(list);
        }
        list.style.display = '';
        list.style.overflowY = 'auto';
        return list;
    } catch (e) {
        console.warn('showListBelowButton failed', e);
        return list;
    }
}

function hideList(list) {
    if (!list) return;
    try {
        prevListWasActive = list.classList.contains('active');
        list.classList.remove('active');
        setTimeout(function() {
            try {
                if (list.getAttribute && list.getAttribute('data-inline') === '1') {
                    try {
                        list.style.display = 'none';
                        list.style.overflowY = '';
                    } catch(e) {}
                } else {
                    list.style.display = 'none';
                    list.style.overflowY = '';
                    if (prevListParent && list.parentNode !== prevListParent) {
                        if (prevListNextSibling) prevListParent.insertBefore(list, prevListNextSibling);
                        else prevListParent.appendChild(list);
                    }
                }
            } catch (e) {}
            prevListParent = null;
            prevListNextSibling = null;
            listInsertedScreenId = null;
        }, 360);
    } catch (e) {}
}

function init() {

    map = new ymaps.Map("map", {
        center: [58.6035, 49.6679],
        zoom: 12,
        controls: []
    });

    // авто отслеживание
    setTimeout(function () {
        try {
            startTracking(true);
            console.log("гео запущено");
        } catch (e) {
            console.warn("Tracking start error", e);
        }
    }, 1000);

}

// экспорт функций
window.showAll = showAll;
window.showCategory = showCategory;
window.getRatingStars = getRatingStars;
window.goBack = goBack;
window.openMainMenu = openMainMenu;
window.openCategories = openCategories;
window.openInterestingPlaces = openInterestingPlaces;
window.openRoutePlanner = openRoutePlanner;
window.openPlaceDetails = openPlaceDetails;
window.setupRouteButton = setupRouteButton;
window.switchScreen = switchScreen;
window.showPhotos = showPhotos;
window.startTracking = startTracking;
window.stopTracking = stopTracking;
window.openStudents = openStudents;

// поиск мест
function searchPlaces(query) {
    const t = translations[currentLang];
    if (!searchOriginScreen) {
    searchOriginScreen = currentScreen;
    }
    var list =
    document.getElementById('placesList') ||
    document.querySelector('.inline-places-list');
    var searchInput = document.getElementById('searchInput');
    list = showListBelowButton(null, searchInput);
    if (!list) return;
    query = (query || '').trim().toLowerCase();
    if (!query) {
        hideList(list);
        searchOriginScreen = null;
        try { removeInlineLists(); } catch (e) {}
        currentScreen = 'categories';
        return;
    }

    clearRoute();
    try { list.classList.remove('active'); } catch (e) {}
    list.innerHTML = "";
    listOwner = 'search';
    listOpen = true;
    var found = false;
    for (var i = 0; i < places.length; i++) {
        var p = places[i];
        var text = (p.name[currentLang] + ' ' + (p.address[currentLang]||'') + ' ' + (p.description[currentLang]||'')).toLowerCase();
        var cat = p.category;
        if (Array.isArray(cat)) cat = cat.join(' ');
        if (text.indexOf(query) !== -1 || (cat && cat.toLowerCase().indexOf(query) !== -1)) {
            found = true;
            var card = document.createElement('div');
            card.className = 'place-card';
            card.innerHTML = "<img src='" + (p.images && p.images.length ? getPlaceImage(p) : p.image) + "'>" +
                "<h3>" + p.name[currentLang] + "</h3>" +
                "<p>" + p.address[currentLang] + "</p>" +
                "<p class='description'>" + (p.description[currentLang] || '') + "</p>" +
                "<span class='rating'>" + getRatingStars(
                    p._rating ? p._rating.avg : p.rating
                ) + "</span>";
            (function(pp){
                card.onclick = function(){

                    var list =
                    document.getElementById('placesList') ||
                    document.querySelector('.inline-places-list');

                    if (list) hideList(list);

                    openPlaceDetails(pp);

                };
            })(p);
            list.appendChild(card);
        }
    }
    if (!found) list.innerHTML = '<p>' + t.nothingFound + '</p>';
    void list.offsetWidth;
    list.classList.add('active');
    currentScreen = 'list';
}

// категория показать все
function showAll(button) {
    if (currentCategory === 'all') {
        var maybeInline = button && button.nextSibling && button.nextSibling.getAttribute && button.nextSibling.getAttribute('data-inline') === '1' ? button.nextSibling : null;
        if (maybeInline) hideList(maybeInline); else { var canonical = document.getElementById('placesList'); if (canonical) hideList(canonical); }
        currentCategory = null; currentScreen = 'categories'; listOpen = false; listOwner = null; return;
    }

    currentCategory = 'all';
    clearRoute();
    var list =
    document.getElementById('placesList') ||
    document.querySelector('.inline-places-list');
    showListBelowButton(list, button);
    listOwner = 'all'; listOpen = true;
    try { list.classList.remove('active'); } catch (e) {}
    list.innerHTML = "";
    for (var i = 0; i < places.length; i++) {
        var place = places[i];
        var card = document.createElement('div');
        card.className = 'place-card';
        card.innerHTML = "<img src='" + (place.images && place.images.length ? place.images[0] : place.image) + "'>" +
            "<h3>" + place.name[currentLang] + "</h3>" +
            "<p>" + place.address[currentLang] + "</p>" +
            "<p class='description'>" + (place.description[currentLang] || '') + "</p>" +
            "<span class='rating'>" + getRatingStars(place._rating ? place._rating.avg : place.rating) + "</span>";
        (function(pp){ card.onclick = function(){ openPlaceDetails(pp); }; })(place);
        list.appendChild(card);
    }
    void list.offsetWidth;
    list.classList.add('active');
    currentScreen = 'list';

}

// список для планов
function openRoutePlan(planId) {
    const t = translations[currentLang];

    var container = document.getElementById('routePlanDetails');

    container.innerHTML = '';
    container.style.display = 'block';

    var ratingBlock =
        document.createElement("p");

    ratingBlock.id = "planRating";

    var pd =
        plansData[planId].rating;

    if (!pd.votes) {

        ratingBlock.innerText =
            t.ratingNoReviews;

    } else {

        ratingBlock.innerText =
            "Рейтинг: " +
            pd.avg.toFixed(1) +
            " (" +
            pd.votes +
            " отзывов)";

    }

    container.appendChild(ratingBlock);
    var ids = plansData[planId].places || [];
    if (!ids.length) {
        var p = document.createElement('p');
        p.innerText =
            'Пока что места не заданы. Добавьте места для этого плана маршрута.';
        container.appendChild(p);
        return;
    }
    // создание элементов инта
    var buildBtn = document.createElement('button');
    buildBtn.innerText = t.buildRoute;
    buildBtn.style.margin = '12px 0';
    buildBtn.onclick = function(){ try { if (window.startPlan) window.startPlan(planId); else startPlan(planId); } catch(e){ console.warn('startPlan call failed', e); } };
    container.appendChild(buildBtn);

    for (var i = 0; i < ids.length; i++) {
        var pid = ids[i];
        var placeObj = null;
        for (var j = 0; j < places.length; j++) {
            if (places[j].id === pid) { placeObj = places[j]; break; }
        }
        if (!placeObj) continue;
        var card = document.createElement('div');
        card.className = 'place-card route-plan-card';
        var timeline = document.createElement('div');
        timeline.className = 'route-line';
        var dot = document.createElement('div'); dot.className = 'route-dot';
        var vline = document.createElement('div'); vline.className = 'route-vline';
        timeline.appendChild(dot); timeline.appendChild(vline);
        var content = document.createElement('div'); content.className = 'route-content';
        content.style.display = 'flex'; content.style.gap = '12px'; content.style.alignItems = 'center';
        var img = document.createElement('img');

        img.src = (placeObj.images && placeObj.images.length)
            ? placeObj.images[0]
            : placeObj.image;
        var meta = document.createElement('div');
        var hh = document.createElement('h4'); hh.innerText = placeObj.name[currentLang]; hh.style.margin = '0 0 6px 0'; hh.style.fontSize = '15px';
        var dd = document.createElement('p'); dd.innerText = placeObj.address[currentLang] || ''; dd.style.margin = '0'; dd.style.fontSize = '13px'; dd.className = 'description';
        meta.appendChild(hh); meta.appendChild(dd);
        content.appendChild(img); content.appendChild(meta);
        var rmeta = document.createElement('div'); rmeta.className = 'route-meta';
        var dist = document.createElement('div'); dist.innerText = '— ' + t.km; dist.className = 'route-dist';
        var time = document.createElement('div'); time.innerText = '— ' + t.min; time.className = 'route-time';
        rmeta.appendChild(dist); rmeta.appendChild(time);

        card.appendChild(timeline);
        card.appendChild(content);
        card.appendChild(rmeta);
        (function(p){ card.onclick = function(){ openPlaceDetails(p); }; })(placeObj);
        container.appendChild(card);
    }
}

function showCategory(category, button, owner) {
    if (currentCategory === category) {
        const t = translations[currentLang];
        var list =
            document.getElementById('placesList') ||
            document.querySelector('.inline-places-list');

        if (!list) {
            console.error("placesList not found");
            return;
        }
        var maybeInline = button && button.nextElementSibling && button.nextElementSibling.getAttribute && button.nextElementSibling.getAttribute('data-inline') === '1' ? button.nextElementSibling : null;
        if (maybeInline) hideList(maybeInline);
        else {
            var canonical = document.getElementById('placesList');
            if (canonical) hideList(canonical);
        }
        currentCategory = null;
        currentScreen = 'categories';
        listOpen = false;
        listOwner = null;
        if (owner) {
            listOwner = owner;
        }
        return;
    }

    console.log("clicked category:", category);
    console.log("places:", places);
    clearRoute();
    currentCategory = category;
    listOwner = owner || 'categories';
    var list = button?.nextElementSibling;

    if (
        !list ||
        !list.classList.contains("inline-places-list")
    ) {

        list = document.createElement("div");

        list.className = "inline-places-list";

        list.setAttribute("data-inline", "1");

        button.parentNode.insertBefore(
            list,
            button.nextSibling
        );
    }
    showListBelowButton(list, button);
    list.innerHTML = "";

    var found = false;

    for (var i = 0; i < places.length; i++) {

        var place = places[i];

        var cat = place.category;

        if (
            cat === category ||
            (Array.isArray(cat) && cat.includes(category))
        ) {

            found = true;   

            var card = document.createElement("div");

            card.className = "place-card";

            card.innerHTML =
                "<img src='" + getPlaceImage(place) + "'>" +
                "<h3>" + place.name[currentLang] + "</h3>" +
                "<p>" + place.address[currentLang] + "</p>" +
                "<p class='description'>" +
                (place.description[currentLang] || "") +
                "</p>" +
                "<span class='rating'>" +
                getRatingStars(place._rating ? place._rating.avg : place.rating) +
                "</span>";

            card.onclick = (function(p) {
                return function() {
                    openPlaceDetails(p);
                };
            })(place);

            list.appendChild(card);
        }
    }

    if (!found) {

        list.innerHTML =
            "<p>Места не найдены</p>";

    }
    void list.offsetWidth;
    list.classList.add('active');

    currentScreen = 'list';

}

function getRatingStars(rating) {
    const t = translations[currentLang];

    if (rating === 0 || rating === undefined || rating === null) {
        return t.noReviews;
    }

    var stars = "";

    var full = Math.floor(rating);
    var half = (rating - full) >= 0.5;

    for (var i = 0; i < full; i++) {
        stars += "★";
    }

    if (half) {
        stars += "☆";
    }

    return stars + " (" + rating.toFixed(1) + ")";
}

function goBack() {

    var list =
        document.getElementById("placesList");

    if (currentScreen === "placeDetails" && searchOriginScreen) {

        var target = searchOriginScreen;

        searchOriginScreen = null;

        if (target === "interesting") {
            openInterestingPlaces();
            return;
        }

        if (target === "categories") {
            openCategories();
            return;
        }

        if (target === "routePlanner") {
            openRoutePlanner();
            return;
        }

        if (target === "mainMenu") {
            openMainMenu();
            return;
        }

        if (target === "students") {
            openStudents();
            return;
        }

        switchScreen(currentScreen, target);
        currentScreen = target;

        return;
    }

    if (currentScreen === "placeDetails") {

        clearRoute();

        let target = prevScreen || "categories";

        switchScreen("placeDetails", target);

        currentScreen = target;

        try {
            var listEl = document.getElementById('placesList');

            if (listEl) {

                listEl.style.display = '';

                if (prevListOpenState) {

                    listEl.classList.add('active');

                } else {

                    listEl.classList.remove('active');

                }
            }

        } catch (e) {}

        listOpen = prevListOpenState;
        listOwner = prevListOwnerState;

        try {

            for (var i = 0; i < prevVisibleInlines.length; i++) {

                var el = prevVisibleInlines[i];

                if (el && el.parentNode) {

                    el.style.display = '';

                    void el.offsetWidth;

                    el.classList.add('active');

                    el.style.overflowY = 'auto';

                }
            }

        } catch (e) {}

        prevVisibleInlines = [];

        return;
    }

    if (currentScreen === "list") {
        hideList(list);

        currentCategory = null;

        if (listOwner === 'interesting') {

            switchScreen('list', 'interesting');
            currentScreen = 'interesting';

        } else if (listOwner === 'students') {

            switchScreen('list', 'students');
            currentScreen = 'students';

        } else if (listOwner === 'search') {

            switchScreen('list', 'categories');
            currentScreen = 'categories';

        } else {

            switchScreen('list', 'categories');
            currentScreen = 'categories';

        }

        listOpen = false;
        listOwner = null;

        return;

    }

    if (
        currentScreen === "categories" ||
        currentScreen === "interesting" ||
        currentScreen === "routePlanner" ||
        currentScreen === "students"
    ) {

        switchScreen(currentScreen, 'mainMenu');

        currentScreen = 'mainMenu';

        return;
    }

    if (currentScreen === "mainMenu") {

        switchScreen(
            "mainMenu",
            "welcome"
        );

        document
            .getElementById("backButton")
            .style.display =
            "none";

        currentScreen =
            "welcome";

        return;
    }
}
function openMainMenu() {
    var input = document.getElementById("searchInput");
    if (input) input.value = "";
    navigate('mainMenu');
    document.getElementById("backButton").style.display = "block";
    document.getElementById("searchWrapper").style.display = "block";

}

function openCategories() {
    var input = document.getElementById("searchInput");
    if (input) input.value = "";
    navigate('categories');

}

function openStudents() {
    var input = document.getElementById("searchInput");
    if (input) input.value = "";
    navigate('students');

}

function openInterestingPlaces() {
    var input = document.getElementById("searchInput");
    if (input) input.value = "";
    switchScreen('mainMenu', 'interesting');
    document.getElementById('backButton').style.display = 'block';
    showInterestingPlaces();
    currentScreen = 'interesting';

}

function showInterestingPlaces() {
    var popularIds = [57, 56, 55, 53, 52, 51, 50, 47, 46, 45, 42, 41, 38, 39, 37, 36, 18, 22, 26, 27, 33, 35, 34];

    clearRoute();
    var header = document.querySelector('#interesting h2');
    if (!header) header = document.querySelector('#categories h2');
    var list =
    document.getElementById('placesList') ||
    document.querySelector('.inline-places-list');
    showListBelowButton(list, header);
    try { list.classList.remove('active'); } catch (e) {}
    list.innerHTML = "";
    listOwner = 'interesting';
    listOpen = true;

    var found = false;
    for (var i = 0; i < places.length; i++) {
        var p = places[i];
        if (popularIds.includes(p.id) || popularIds.some(function(n){ return p.name[currentLang].indexOf(n) !== -1; })) {
            found = true;
            var card = document.createElement('div');
            card.className = 'place-card';
            card.innerHTML = "<img src='"+(p.images && p.images.length ? getPlaceImage(p) : p.image)+"'>"+
                "<h3>"+p.name[currentLang]+"</h3>"+
                "<p>"+p.address[currentLang]+"</p>"+
                "<p class='description'>"+(p.description[currentLang]||'')+"</p>"+
                "<span class='rating'>" + getRatingStars(
                    p._rating ? p._rating.avg : p.rating
                ) + "</span>";
            (function(pp){ card.onclick = function(){ openPlaceDetails(pp); }; })(p);
            list.appendChild(card);
        }
    }
    if (!found) list.innerHTML = '<p>Популярные места не найдены</p>';
    void list.offsetWidth;
    list.classList.add('active');
}

function openRoutePlanner() {
    switchScreen('mainMenu', 'routePlanner');
    document.getElementById('routePlanDetails').style.display = 'none';
    document.getElementById('backButton').style.display = 'block';
    currentScreen = 'routePlanner';
    listOpen = false;
    listOwner = null;

}

function openPlaceDetails(place) {
    var from = currentScreen || 'categories';
    screenStack = [];
    if (from === 'list') {

        prevScreen = listOwner || 'categories';

    } else {

        prevScreen = from;

    }
    try {
        var listEl = document.getElementById('placesList');
        if (listEl) {
            prevListOpenState = listEl.classList.contains('active');
            prevListOwnerState = listOwner;
            hideList(listEl);
            listHiddenForDetails = true;
        }
        try {
            prevVisibleInlines = [];
            var inlines = document.querySelectorAll('[data-inline="1"]');
            for (var ii = 0; ii < inlines.length; ii++) {
                var el = inlines[ii];
                try {
                    if (el.style.display !== 'none' && el.classList.contains('active')) {
                        prevVisibleInlines.push(el);
                    }
                    hideList(el);
                } catch (e) {}
            }
        } catch (e) {}
    } catch (e) {}
    setTimeout(function() {
        try { switchScreen(prevScreen, 'placeDetails'); } catch (e) { console.warn(e); }
    }, 360);

    document.getElementById("placeTitle").innerText = place.name[currentLang];

    document.getElementById("placeDescription").innerText = place.description_full[currentLang] || place.description[currentLang] || '';

    showPhotos(place);

    setupRouteButton(place);

    try { renderPlaceRatingControls(place); } catch (e) {}
    try { ensurePlanNextButton(); } catch(e) {}

    currentScreen = "placeDetails";

    fetch("/rating/place/" + encodeURIComponent(place.name[currentLang]))
    .then(function(res) {

        if (!res.ok) {
            console.warn("Rating load failed:", res.status);
            return null;
        }

        return res.json();

    })
    .then(function(data) {

        if (!data) return;

        place._rating = {
            avg: data.avg,
            votes: data.votes
        };

        renderPlaceRatingControls(place);

    })
    .catch(function(err) {

        console.warn("Rating load error:", err);

    });
}

function showPhotos(place) {

    var container =
        document.getElementById("photoCarousel");

    if (!container) return;

    container.innerHTML = "";

    if (carouselTimer) {
        clearInterval(carouselTimer);
    }

    var images =
        place.images && place.images.length
            ? place.images
            : (place.image ? [place.image] : []);

    if (images.length === 0) return;

    currentSlideIndex = 0;

    var track =
        document.createElement("div");

    track.className =
        "carousel-track";

    container.appendChild(track);

    function goToSlide(index) {

        if (index < 0)
            index = images.length - 1;

        if (index >= images.length)
            index = 0;

        currentSlideIndex = index;

        track.style.transform =
            "translateX(-" +
            (index * 100) +
            "%)";
    }

    function nextSlide() {
        goToSlide(currentSlideIndex + 1);
    }

    function prevSlide() {
        goToSlide(currentSlideIndex - 1);
    }

    for (var i = 0; i < images.length; i++) {

        var img =
            document.createElement("img");

        img.src =
            images[i];

        img.style.cursor =
            "pointer";

        img.onclick = function(i) {
            return function() {
                openPhotoModal(images, i);
            };
        }(i);

        track.appendChild(img);
    }

    if (images.length > 1) {

        var left =
            document.createElement("div");

        left.className =
            "carousel-arrow left";

        left.onclick =
            prevSlide;

        container.appendChild(left);

        var right =
            document.createElement("div");

        right.className =
            "carousel-arrow right";

        right.onclick =
            nextSlide;

        container.appendChild(right);

        carouselTimer =
            setInterval(nextSlide, 3000);
    }
}

function setupRouteButton(place) {

    var button =
        document.getElementById("routeButton");

    if (!button) return;

    button.onclick = function () {
        if (isMobile()) {
            closeMenu();
        }

        if (!navigator.geolocation) {
            alert('Геолокация не поддерживается в этом браузере.');
            return;
        }

        button.disabled = true;
        var originalText = button.innerText;
        button.innerText = translations[currentLang].buildingRoute;

        var geoSuccess = function(pos) {
            var userCoords = [pos.coords.latitude, pos.coords.longitude];
            userCoords = normalizeCoords(userCoords);
            var destCoords = normalizeCoords(place.coords);
            console.log('userCoords', userCoords, 'place.coords', destCoords);
            function haversineDistance(a, b) {
                var toRad = function(x) { return x * Math.PI / 180; };
                var lat1 = a[0], lon1 = a[1];
                var lat2 = b[0], lon2 = b[1];
                var R = 6371000; 
                var dLat = toRad(lat2 - lat1);
                var dLon = toRad(lon2 - lon1);
                var A = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon/2) * Math.sin(dLon/2);
                var C = 2 * Math.atan2(Math.sqrt(A), Math.sqrt(1-A));
                return R * C;
            }

            try {
                var dist = haversineDistance(userCoords, destCoords);
                console.log('distance meters:', dist);
                if (dist < 50) {
                    console.log('Points are very close — skipping routing.');
                    var markPlace = new ymaps.Placemark(destCoords, { hintContent: place.name[currentLang] });
                    map.geoObjects.add(markPlace);
                    lastMarkers.push(markPlace);
                    map.setCenter(destCoords, 14, { duration: 600 });
                    button.disabled = false;
                    button.innerText = originalText;
                    return;
                }
            } catch (e) {
                console.warn('distance calc failed', e);
            }

            function tryBuildRoute(start, end, mode) {
                return ymaps.route([start, end], { mapStateAutoApply: true, routingMode: mode });
            }

            function onRoute(route) {
                clearRoute();
                map.geoObjects.add(route);
                lastRoute = route;
                setTimeout(function () {
                    try {
                        var wayPoints =
                            route.getWayPoints();
                        if (wayPoints &&
                            wayPoints.get &&
                            wayPoints.get(0)) {

                            wayPoints
                                .get(0)
                                .options
                                .set("visible", false);
                        }

                    } catch (e) {
                        console.warn(e);
                    }
                }, 100);
                try { startTracking(true); } catch (e) {}
                try {
                    if (wayPoints && wayPoints.get && wayPoints.get(1)) {
                        wayPoints.get(1).properties.set('iconCaption', place.name[currentLang]);
                    }
                } catch (e) {}
                button.disabled = false;
                button.innerText = originalText;
            }

            tryBuildRoute(userCoords, destCoords, 'auto').then(onRoute, function(err) {
                console.warn('auto failed, retry pedestrian', err);
                tryBuildRoute(userCoords, destCoords, 'pedestrian').then(onRoute, function(err2) {
                    console.warn('pedestrian failed, try swapping coords', err2);
                    var swappedStart = [userCoords[1], userCoords[0]];
                    var swappedEnd = [destCoords[1], destCoords[0]];
                    tryBuildRoute(swappedStart, swappedEnd, 'auto').then(onRoute, function(err3) {
                        console.warn('swapped coords failed', err3);
                        try {
                            console.warn('All routing attempts failed, showing markers and fitting bounds');
                            try { if (lastRoute) map.geoObjects.remove(lastRoute); } catch (e) {}
                            lastRoute = null;
                            var markUserF = new ymaps.Placemark(userCoords, { iconCaption: 'Вы здесь' });
                            var markPlaceF = new ymaps.Placemark(destCoords, { hintContent: place.name[currentLang] });
                            map.geoObjects.add(markUserF);
                            map.geoObjects.add(markPlaceF);
                            lastMarkers.push(markUserF);
                            lastMarkers.push(markPlaceF);
                            try {
                                map.setBounds([userCoords, destCoords], { checkZoomRange: true, duration: 600 });
                            } catch (e) {
                                map.setCenter(destCoords, 12, { duration: 600 });
                            }
                            button.disabled = false; button.innerText = originalText;
                        } catch (e) {
                            console.error('final fallback failed', e, err, err2, err3);
                            alert(translations[currentLang].routeBuildError);
                            button.disabled = false; button.innerText = originalText;
                        }
                    });
                });
            });
        };

        var geoError = function(err) {
            console.warn('Geolocation error', err);
            alert(translations[currentLang].geoError);
            try { clearRoute(); } catch (e) {}
            var dest = normalizeCoords(place.coords);
            var mark = new ymaps.Placemark(dest, { hintContent: place.name[currentLang]  });
            try { map.geoObjects.add(mark); lastMarkers.push(mark); map.setCenter(dest, 14, { duration: 600 }); } catch (e) {}
            button.disabled = false;
            button.innerText = originalText;
        };

        if (userMarker) {

                var coords =
                    userMarker.geometry.getCoordinates();

                geoSuccess({
                    coords: {
                        latitude: coords[0],
                        longitude: coords[1]
                    }
                });

            } else {

                navigator.geolocation.getCurrentPosition(
                    geoSuccess,
                    geoError,
                    {
                        enableHighAccuracy: false,
                        timeout: 20000
                    }
                );

}

    };
}

function switchScreen(fromId, toId) {

    var list =
    document.getElementById('placesList') ||
    document.querySelector('.inline-places-list');

    if (list && toId !== 'interesting') {
        hideList(list);
    }

    var screens = document.querySelectorAll(".screen");

    for (var i = 0; i < screens.length; i++) {
        screens[i].style.display = "none";
    }

    var to = document.getElementById(toId);

    if (to) {
        to.style.display = "block";
    }


    try {
        var searchWrap = document.getElementById('searchWrapper');
        if (searchWrap) {
            if (toId === 'welcome' || toId === 'mainMenu') {
                searchWrap.style.display = 'none';
            } else {
                searchWrap.style.display = 'block';
            }
        }
    } catch (e) {}

    try {
        var backBtn = document.getElementById('backButton');
        if (backBtn) {
            backBtn.style.display = (toId === 'welcome') ? 'none' : 'block';
        }
    } catch (e) {}

    try {
        var placesList = document.getElementById('placesList');
        if (placesList) {
            if (toId === 'placeDetails') {
                placesList.style.display = 'none';
            } else {
                if (!listHiddenForDetails) placesList.style.display = '';
                if (placesList.classList.contains('active'))
                    placesList.style.overflowY = 'auto';
                else
                    placesList.style.overflowY = '';
            }
        }
    } catch (e) {}

    var search = document.getElementById("searchWrapper");

    if (search) {

        if (toId === "welcome") {
            search.style.display = "none";
        } else {
            search.style.display = "block";
        }

}

}

var modalImages = [];
var modalIndex = 0;

function openPhotoModal(images, index) {

    modalImages = images;
    modalIndex = index;

    var modal =
        document.createElement("div");

    modal.className =
        "photo-modal";

    var content =
        document.createElement("div");

    content.className =
        "photo-modal-content";

    var slider =
        document.createElement("div");

    slider.className =
        "photo-modal-slider";

    content.appendChild(slider);

    for (var i = 0; i < modalImages.length; i++) {

        var img =
            document.createElement("img");

        img.src =
            modalImages[i];

        slider.appendChild(img);
    }

    function update() {

        var slide =
            slider.children[modalIndex];

        if (!slide) return;

        var slideWidth =
            slide.offsetWidth;

        var containerWidth =
            content.clientWidth;

        var slideLeft =
            slide.offsetLeft;

        var offset =
            slideLeft -
            (containerWidth - slideWidth) / 2;

        slider.style.transform =
            "translateX(" +
            (-offset) +
            "px)";
    }


    if (modalImages.length > 1) {

        var left =
            document.createElement("div");

        left.className =
            "photo-arrow left";

        left.onclick = function () {

            modalIndex--;

            if (modalIndex < 0)
                modalIndex =
                    modalImages.length - 1;

            update();
        };

        content.appendChild(left);

        var right =
            document.createElement("div");

        right.className =
            "photo-arrow right";

        right.onclick = function () {

            modalIndex++;

            if (modalIndex >= modalImages.length)
                modalIndex = 0;

            update();
        };

        content.appendChild(right);
    }


    var close =
        document.createElement("div");

    close.className =
        "photo-close";

    close.onclick =
        function () {
            document.body.removeChild(modal);
        };

    content.appendChild(close);

    modal.appendChild(content);

    modal.onclick = function (e) {

        if (e.target === modal)
            document.body.removeChild(modal);
    };

    document.body.appendChild(modal);

    update();
}

var categoriesCarouselStarted = false;

function startCategoriesCarousel() {

    if (categoriesCarouselStarted) return;

    categoriesCarouselStarted = true;

    var track =
        document.getElementById("categoriesCarousel");

    if (!track) return;

    var slides = track.children;

    if (slides.length <= 1) return;

    var index = 0;

    setInterval(function () {

        index++;

        if (index >= slides.length) {
            index = 0;
        }

        track.style.transform =
            "translateX(-" + (index * 100) + "%)";

    }, 3000);

}

function loadRatingForPlace(place) {

    fetch("/rating/place/" + encodeURIComponent(place.name[currentLang]))
    .then(res => res.json())
    .then(data => {

        place._rating = {
            avg: data.avg,
            votes: data.votes
        };

    })
    .catch(() => {});

}

function loadAllRatings() {

    var promises = [];

    for (var i = 0; i < places.length; i++) {

        (function(place){

            var request = fetch("/rating/place/" + encodeURIComponent(place.name[currentLang]))

            .then(function(res){

                if (!res.ok) return null;

                return res.json();

            })

            .then(function(data){

                if (!data) return;

                place._rating = {
                    avg: data.avg,
                    votes: data.votes
                };

            })

            .catch(function(err){
                console.warn("Rating load error:", err);
            });

            promises.push(request);

        })(places[i]);

    }


    Promise.all(promises).then(function(){

        refreshVisiblePlacesRatings();

        if (listOwner === "interesting") {
            showInterestingPlaces();
        }

        if (listOwner === "search") {
            var input = document.getElementById("searchInput");
            if (input) {
                searchPlaces(input.value);
            }
        }

    });

}

function loadPlanRatings() {

    for (var planId in plansData) {

        (function(id){

            fetch("/rating/plan/" + id)

                .then(function(res){
                    if (!res.ok) {
                        console.warn("Plan rating load failed:", res.status);
                        return null;
                    }
                    return res.json();
                })

                .then(function(data){

                    if (!data) return;

                    plansData[id].rating = {
                        avg: data.avg,
                        votes: data.votes
                    };

                    updateRoutePlanRating(id);

                })

                .catch(function(err){
                    console.warn("Rating load error:", err);
                });

        })(planId);

    }

}

function updateRoutePlanRating(planId) {

    var ratingBlock =
        document.getElementById("planRating");

    if (!ratingBlock) return;

    var pd =
        plansData[planId].rating;

    if (!pd.votes) {

        ratingBlock.innerText =
            "Рейтинг: пока нет отзывов";

        return;

    }

    ratingBlock.innerText =
        "Рейтинг: " +
        pd.avg.toFixed(1) +
        " (" +
        pd.votes +
        " голос.)";

}

function refreshVisiblePlacesRatings() {

    var list = document.getElementById("placesList");

    if (!list) return;

    var cards = list.querySelectorAll(".place-card");

    for (var i = 0; i < cards.length; i++) {

        var title = cards[i].querySelector("h3");

        if (!title) continue;

        var name = title.innerText;

        for (var j = 0; j < places.length; j++) {

            if (places[j].name[currentLang] === name) {

                var ratingSpan =
                    cards[i].querySelector(".rating");

                if (ratingSpan) {

                    ratingSpan.innerText =
                        getRatingStars(
                            places[j]._rating
                                ? places[j]._rating.avg
                                : places[j].rating
                        );

                }

                break;

            }

        }

    }

}

function openMenu() {

    var menu = document.getElementById("menu");

    if (isMobile()) {
        menu.style.transform = "translate(-50%, -50%)";
    }

    document.body.classList.remove("menu-closed");
    document.body.classList.add("menu-open");

    menuOpened = true;

}

function closeMenu() {

    var menu = document.getElementById("menu");

    if (isMobile()) {
        menu.style.transform = "translate(-50%, calc(100% - 80px))";
    }

    document.body.classList.remove("menu-open");
    document.body.classList.add("menu-closed");

    menuOpened = false;

}


window.addEventListener("load", function () {

    document.body.classList.add("menu-open");

    var toggleBtn = document.getElementById("menuToggleBtn");

    toggleBtn.addEventListener("click", toggleMenu);

});

function toggleMenu() {

    if (menuOpened) {

        closeMenu();

    } else {

        openMenu();

    }

}

function toggleEducation(button) {

    const wrapper = button.parentNode;

    let panel =
        wrapper.querySelector(".education-side-panel");

    // ЗАКРЫТИЕ
    if (panel) {

        // удалить списки мест
        const inline =
            wrapper.querySelector(".inline-places-list");

        if (inline) {
            inline.remove();
        }

        // вернуть кнопки
        const eduButtons =
            panel.querySelectorAll("button");

        eduButtons.forEach(btn => {

            btn.classList.remove(
                "education-active"
            );

            btn.classList.remove(
                "education-hidden"
            );

        });

        panel.classList.add(
            "education-closing"
        );

        setTimeout(() => {

            panel.remove();

        }, 350);

        return;
    }

    // СОЗДАНИЕ
    panel = document.createElement("div");

    panel.className =
        "education-side-panel";

    const t = translations[currentLang];

    panel.innerHTML = `
        <button onclick="showCategory('vyatsu', this, 'students')">
            ${t.vyatsu}
        </button>

        <button onclick="showCategory('vgek', this, 'students')">
            ${t.vgek}
        </button>

        <button onclick="showCategory('kpk', this, 'students')">
            ${t.kpk}
        </button>

        <button onclick="showCategory('kpias', this, 'students')">
            ${t.kpias}
        </button>

        <button onclick="showCategory('vemt', this, 'students')">
            ${t.vemt}
        </button>

        <button onclick="showCategory('vzt', this, 'students')">
            ${t.vzt}
        </button>

        <button onclick="showCategory('kat', this, 'students')">
            ${t.kat}
        </button>
    `;

    const eduButtons =
        panel.querySelectorAll("button");

    eduButtons.forEach(btn => {

        btn.addEventListener("click", function () {

            // ЕСЛИ уже активна → вернуть всё назад
            if (btn.classList.contains("education-active")) {

                eduButtons.forEach(b => {

                    b.classList.remove(
                        "education-active"
                    );

                    b.classList.remove(
                        "education-hidden"
                    );

                });

                // удалить список мест
                const inline =
                    wrapper.querySelector(
                        ".inline-places-list"
                    );

                if (inline) {
                    inline.remove();
                }

                currentCategory = null;

                return;
            }

            // обычное открытие
            eduButtons.forEach(b => {

                b.classList.remove(
                    "education-active"
                );

                b.classList.remove(
                    "education-hidden"
                );

            });

            eduButtons.forEach(b => {

                if (b !== btn) {

                    b.classList.add(
                        "education-hidden"
                    );

                }

            });

            btn.classList.add(
                "education-active"
            );

        });

    });

    wrapper.appendChild(panel);
}