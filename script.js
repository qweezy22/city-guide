console.log("script.js loaded");

var panel;
var startY = 0;
var endY = 0;

window.addEventListener("load", function () {

    console.log("page loaded");

    panel = document.getElementById("menuPanel");

    // свайп панели
    if (panel) {

        panel.addEventListener("touchstart", function (e) {
            startY = e.touches[0].clientY;
        });

        panel.addEventListener("touchmove", function (e) {
            e.preventDefault(); // отменяем скролл страницы
            endY = e.touches[0].clientY;
        });

        panel.addEventListener("touchend", function (e) {
            var diff = endY - startY;
            if (diff > 50) collapseMenu(); // свайп вниз
            if (diff < -50) expandMenu();  // свайп вверх
        });

    }

    // твоя логика загрузки

    startCategoriesCarousel();

    loadAllRatings();

    loadPlanRatings();

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

    }, 200);

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

// Ensure Next button exists in details and is wired (used when opening details while plan active)
function ensurePlanNextButton() {
    try {
        if (!activePlan) return;
        var detailsContainer = document.querySelector('#placeDetails .place-details-container') || document.getElementById('placeDetails');
        var nextBtn = document.getElementById('planNextButton');
        if (!nextBtn) {
            nextBtn = document.createElement('button');
            nextBtn.id = 'planNextButton';
            nextBtn.style.marginTop = '12px';
            nextBtn.innerText = 'Далее';
            nextBtn.className = 'plan-next-btn';
            detailsContainer.appendChild(nextBtn);
        }
        // replace to remove previous handlers
        try { nextBtn.replaceWith(nextBtn.cloneNode(true)); nextBtn = document.getElementById('planNextButton'); } catch(e) {}
        updatePlanNextButton();
        nextBtn.addEventListener('click', function(){
            if (!activePlan) return;
            if (activePlan.index >= activePlan.ids.length - 1) {
                try { var b = document.getElementById('planNextButton'); if (b) b.parentNode.removeChild(b); } catch(e) {}
                var pid = activePlan.planId || null;
                activePlan = null;
                showPlanFinishDialog(pid);
                return;
            }
            activePlan.index++;
            var nextPlace = activePlan.ids[activePlan.index];
            openPlaceDetails(nextPlace);
            updatePlanNextButton();
        });
    } catch (e) { console.warn(e); }
}

// Render place rating controls (stars + submit) and show current avg/votes
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
        txt.innerText = votes ? (avg.toFixed(1) + ' (' + votes + ' гол.)') : 'Нет отзывов';
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

            submit.innerText = "Оценить";

        }
        submit.style.marginTop = '8px';
        submit.style.padding = '8px 12px';
        submit.style.borderRadius = '10px';
        submit.style.cursor = 'pointer';
        submit.addEventListener('click', function(){
            if (selected <= 0) {
            alert("Поставьте звёзды перед отправкой.");
            return;
        }

            fetch("/rating/place", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    name: place.name,
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

                // обновить блок рейтинга в деталях
                renderPlaceRatingControls(place);

                // обновить карточки в списке
                refreshVisiblePlacesRatings();
                // если пользователь сейчас в интересных местах — обновить список

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

        });   // ← ВАЖНО: закрываем addEventListener

        container.appendChild(submit);

} catch (e) {
    console.warn(e);
}

setTimeout(function() {
    var welcome = document.getElementById("welcome");
    if (welcome) {
        welcome.classList.add("show");
    }
}, 200);

// expose helpers created inside onload to global scope
try {
    window.renderPlaceRatingControls = renderPlaceRatingControls;
    window.ensurePlanNextButton = ensurePlanNextButton;
} catch (e) {}

};

// Show finish dialog when user completes plan
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

        var h = document.createElement('h3'); h.innerText = 'Вы прошли маршрут! Каковы впечатления?'; h.style.marginTop = '0';
        container.appendChild(h);

        // stars input
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
            var btns = starsWrap.querySelectorAll('button');
            for (var i = 0; i < btns.length; i++) {
                btns[i].innerText = (i < selected) ? '★' : '☆';
            }
        }

        var ok = document.createElement('button'); ok.innerText = 'Отправить отзыв'; ok.style.marginRight = '8px';
        ok.onclick = function(){

            if (selected <= 0) {
                alert("Поставьте звёзды перед отправкой.");
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

                // ВОТ ЭТО ДОБАВИТЬ

                if (currentScreen === "routePlanner") {

                    openRoutePlanner();

                }

                try {
                    container.parentNode.removeChild(container);
                } catch(e) {}

                alert("Спасибо за отзыв!");

            })

            .catch(function(err){
                console.warn("Plan rating error:", err);
            });

        };

        var cancel = document.createElement('button'); cancel.innerText = 'Закрыть';
        cancel.onclick = function(){ try { container.parentNode.removeChild(container); } catch(e) {} };

        var foot = document.createElement('div'); foot.style.marginTop = '12px'; foot.appendChild(ok); foot.appendChild(cancel);
        container.appendChild(foot);

        document.body.appendChild(container);
    } catch (e) { console.warn(e); }
}

var map;
var currentCategory = null;
var prevScreen = null;
var prevCategory = null;
// состояние видимости списка мест
var listOpen = false;
var listOwner = null; // 'categories' | 'interesting' | 'search' | etc
var prevListOpenState = false;
var prevListOwnerState = null;
// navigation stack for proper back behavior
var screenStack = [];
// remember if placesList was active before opening details
var prevListWasActive = false;
var prevListParent = null;
var prevListNextSibling = null;
var listHiddenForDetails = false;
var listInsertedScreenId = null;
// keep reference to last route so we remove it cleanly
var lastRoute = null;
var lastMarkers = []; // markers added as part of routing/fallback
var activePlan = null; // { ids: [placeObjs], index: 0 }
var carouselTimer = null;
var searchOriginScreen = null;
var currentScreen = "welcome";

// Plans metadata: names and place lists and ratings
var plansData = {
    'hour': {
        title: 'Маршрут на час',
        places: [
            'Александровский сад',
            'Кировский областной краеведческий музей имени П. В. Алабина',
            'Сквер Алые Паруса',
            'Парк имени С. М. Кирова'
        ],
        rating: { avg: 0, votes: 0 }
    },
    'kids': {
        title: 'Маршрут с детьми',
        places: [
            'Юркин парк',
            'Кировский государственный цирк',
            'Музей истории мороженого Артико',
            'Криолло',
            'Дымковская игрушка',
            'Кочуровский парк',
            'ТЦ Глобус'
        ],
        rating: { avg: 0, votes: 0 }
    },
    'walking': {
        title: 'Пешеходный маршрут',
        places: [
            'Александровский сад',
            'Музей истории Хлынова',
            'Кировский областной краеведческий музей имени П. В. Алабина',
            'Криолло',
            'Музей К.Э. Циолковского, авиации и космонавтики',
            'Сквер Алые Паруса',
            'Парк имени С. М. Кирова'
        ],
        rating: { avg: 0, votes: 0 }
    },
    'culture': {
        title: 'Культурный маршрут',
        places: [
            'Музей К.Э. Циолковского, авиации и космонаватики',
            'Кировский областной краеведческий музей имени П. В. Алабина',
            'Музей истории Хлынова',
            'Дымковская игрушка',
            'Кировский государственный театр юного зрителя театр на Спасской',
            'Кировский театр кукол имени А. Н. Афанасьева',
            'Кировский областной ордена Трудового Красного Знамени драматический театр имени С. М. Кирова'
        ],
        rating: { avg: 0, votes: 0 }
    },
    'photo': {
        title: 'Фото-маршрут',
        places: [
            'Александровский сад',
            'Сквер Алые Паруса',
            'Парк имени С. М. Кирова',
            'Кировский ботанический сад',
            'Ежовский озерно-родниковый комплекс',
            'Парк Победы',
            'Филейский парк'
        ],
        rating: { avg: 0, votes: 0 }
    }
};

// references to inline container elements that were visible before opening details
var prevVisibleInlines = [];
// Start executing a plan: builds UI state and opens first place details

// Remove all temporary inline lists that were inserted under buttons
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

// Start executing a plan: builds UI state and opens first place details
// startPlan function removed; use window.startPlan wrapper to manage plans consistently

// update Next button text based on activePlan state
function updatePlanNextButton() {
    try {
        var btn = document.getElementById('planNextButton');
        if (!btn) return;
        if (!activePlan) {
            btn.style.display = 'none';
            return;
        }
        if (activePlan.index >= activePlan.ids.length - 1) {
            btn.innerText = 'Закончить путешествие';
        } else {
            btn.innerText = 'Далее';
        }
        btn.style.display = '';
    } catch (e) {}
}

// Expose startPlan to global scope (wrapper) so onclick handlers always find it
window.startPlan = function(planId) {
    try {
        var pd = plansData[planId];
        var names = (pd && pd.places) ? pd.places : [];
        if (!names || !names.length) return;
        var list = [];
        for (var i = 0; i < names.length; i++) {
            for (var j = 0; j < places.length; j++) {
                if (places[j].name === names[i]) { list.push(places[j]); break; }
            }
        }
        if (!list.length) return;
        activePlan = { ids: list, index: 0, planId: planId };
        screenStack.push('routePlanner');   // ← ДОБАВИТЬ
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
                // update label
                updatePlanNextButton();
                // ensure single listener
                try { nextBtn.onclick = null; } catch(e) {}
                nextBtn.addEventListener('click', function(){
                    if (!activePlan) return;
                    if (activePlan.index >= activePlan.ids.length - 1) {
                        try { var b = document.getElementById('planNextButton'); if (b) b.parentNode.removeChild(b); } catch(e) {}
                        var pid = activePlan.planId || planId || null;
                        activePlan = null;
                        showPlanFinishDialog(pid);
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

// Central navigation helper: records history and switches screens
function navigate(toId) {
    try {
        if (currentScreen && currentScreen !== toId) {
            screenStack.push(currentScreen);
        }
    } catch (e) {}
    try { switchScreen(currentScreen, toId); } catch (e) { console.warn(e); }
    currentScreen = toId;
}

// Хелперы для отслеживания позиции пользователя (в верхней области)
var watchId = null;
var userMarker = null;
var followUser = true;

function startTracking(enableFollow) {
    followUser = !!enableFollow;
    if (!navigator.geolocation) {
        alert('Геолокация не поддерживается в этом браузере.');
        return;
    }
    if (watchId !== null) return; // already tracking

    watchId = navigator.geolocation.watchPosition(function(pos) {
        var coords = normalizeCoords([pos.coords.latitude, pos.coords.longitude]);

        if (!userMarker) {
            userMarker = new ymaps.Placemark(coords, { iconCaption: 'Вы здесь' }, { preset: 'islands#circleIcon', iconColor: '#3b82f6' });
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
    // keep the marker on map until clearRoute() called; if you want to remove it now, call clearRoute()
}
// удаление маршрутов и маркеров мест
function clearRoute() {

    // удалить только маршрут

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

// Нормализуем массив координат в формат [lat, lon]
function normalizeCoords(coord) {
    if (!coord || coord.length < 2) return coord;
    var a = Number(coord[0]);
    var b = Number(coord[1]);
    if (isNaN(a) || isNaN(b)) return coord;
    // if first value is outside valid latitude range, likely swapped -> swap
    if (Math.abs(a) > 90 && Math.abs(b) <= 90) {
        return [b, a];
    }
    // otherwise return as [lat, lon]
    return [a, b];
}

// Хелпер для показа/скрытия списка мест с CSS-переходами
function showListBelowButton(list, button) {
    // Always use canonical #placesList for consistent behavior across screens.
    if (!list) list = document.getElementById('placesList');
    try {
        // If a button (or header) is provided, move the canonical list directly after that element
        if (button && button.parentNode) {
            try {
                button.parentNode.insertBefore(list, button.nextSibling);
            } catch (e) {
                // fallback to appending to menu
                var menu = document.getElementById('menu');
                if (menu && list.parentNode !== menu) menu.appendChild(list);
            }
        } else {
            var menu = document.getElementById('menu');
            if (menu && list.parentNode !== menu) menu.appendChild(list);
        }
        list.style.display = '';
        // caller is expected to populate list before adding 'active' to trigger animation
        list.style.overflowY = 'auto';
        return list;
    } catch (e) {
        console.warn('showListBelowButton failed', e);
        return list;
    }
}

function hideList(list) {
    if (!list) return;
    // убираем класс active, чтобы началcя эффект сворачивания
    try {
        prevListWasActive = list.classList.contains('active');
        // remove only 'active' to trigger CSS transition;
        // keep 'inline-places-list' class until after transition so CSS rules remain available
        list.classList.remove('active');
        // wait for CSS transition to finish before hiding and restoring parent
        setTimeout(function() {
            try {
                // For inline temporary containers: hide but keep in DOM so they can be restored
                if (list.getAttribute && list.getAttribute('data-inline') === '1') {
                    try {
                        list.style.display = 'none';
                        list.style.overflowY = '';
                        // keep data-inline marker so showListBelowButton can reuse it
                    } catch(e) {}
                } else {
                    // canonical list: hide and restore parent if it was moved
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

// Экспортируем функции в глобальную область, чтобы inline onclick работал
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

// Поиск мест по запросу
function searchPlaces(query) {
    if (!searchOriginScreen) {
    searchOriginScreen = currentScreen;
    }
    // use canonical list container
    var list = document.getElementById('placesList');
    var searchInput = document.getElementById('searchInput');
    list = showListBelowButton(null, searchInput);
    if (!list) return;
    query = (query || '').trim().toLowerCase();
    if (!query) {
        // сброс поиска и нач. экрана
        hideList(list);
        searchOriginScreen = null;
        // remove inline search container if present
        try { removeInlineLists(); } catch (e) {}
        currentScreen = 'categories';
        return;
    }

    clearRoute();
    // reset active to allow re-triggering animation
    try { list.classList.remove('active'); } catch (e) {}
    list.innerHTML = "";

    listOwner = 'search';
    listOpen = true;

    var found = false;
    for (var i = 0; i < places.length; i++) {
        var p = places[i];
        var text = (p.name + ' ' + (p.address||'') + ' ' + (p.description||'')).toLowerCase();
        var cat = p.category;
        if (Array.isArray(cat)) cat = cat.join(' ');
        if (text.indexOf(query) !== -1 || (cat && cat.toLowerCase().indexOf(query) !== -1)) {
            found = true;
            var card = document.createElement('div');
            card.className = 'place-card';
            card.innerHTML = "<img src='" + (p.images && p.images.length ? getPlaceImage(p) : p.image) + "'>" +
                "<h3>" + p.name + "</h3>" +
                "<p>" + p.address + "</p>" +
                "<p class='description'>" + (p.description || '') + "</p>" +
                "<span class='rating'>" + getRatingStars(
                    p._rating ? p._rating.avg : p.rating
                ) + "</span>";
            (function(pp){
                card.onclick = function(){

                    var list = document.getElementById('placesList');

                    if (list) hideList(list);

                    screenStack.push(currentScreen);

                    openPlaceDetails(pp);

                };
            })(p);
            list.appendChild(card);
        }
    }
    if (!found) list.innerHTML = '<p>Ничего не найдено</p>';
    // trigger appear animation
    void list.offsetWidth;
    list.classList.add('active');
    currentScreen = 'list';
}

function showAll(button) {

    // toggle: if already showing 'all' category, close it
    if (currentCategory === 'all') {
        // try to find inline under this button and hide
        var maybeInline = button && button.nextSibling && button.nextSibling.getAttribute && button.nextSibling.getAttribute('data-inline') === '1' ? button.nextSibling : null;
        if (maybeInline) hideList(maybeInline); else { var canonical = document.getElementById('placesList'); if (canonical) hideList(canonical); }
        currentCategory = null; currentScreen = 'categories'; listOpen = false; listOwner = null; return;
    }

    currentCategory = 'all';
    clearRoute();
    // use canonical list
    var list = document.getElementById('placesList');
    showListBelowButton(list, button);
    listOwner = 'all'; listOpen = true;
    screenStack.push(currentScreen);
    try { list.classList.remove('active'); } catch (e) {}
    list.innerHTML = "";
    for (var i = 0; i < places.length; i++) {
        var place = places[i];
        var card = document.createElement('div');
        card.className = 'place-card';
        card.innerHTML = "<img src='" + (place.images && place.images.length ? place.images[0] : place.image) + "'>" +
            "<h3>" + place.name + "</h3>" +
            "<p>" + place.address + "</p>" +
            "<p class='description'>" + (place.description || '') + "</p>" +
            "<span class='rating'>" + getRatingStars(place._rating ? place._rating.avg : place.rating) + "</span>";
        (function(pp){ card.onclick = function(){ openPlaceDetails(pp); }; })(place);
        list.appendChild(card);
    }
    void list.offsetWidth;
    list.classList.add('active');
    currentScreen = 'list';

}

// Открыть детали плана маршрута
function openRoutePlan(planId) {

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
            "Рейтинг: пока нет отзывов";

    } else {

        ratingBlock.innerText =
            "Рейтинг: " +
            pd.avg.toFixed(1) +
            " (" +
            pd.votes +
            " отзывов)";

    }

    container.appendChild(ratingBlock);
    // build list of place objects for each plan
    var plans = {
        'hour': [
            'Александровский сад',
            'Кировский областной краеведческий музей имени П. В. Алабина',
            'Сквер Алые Паруса',
            'Парк имени С. М. Кирова'
        ],
        'kids': [
            'Юркин парк',
            'Кировский государственный цирк',
            'Музей истории мороженого Артико',
            'Криолло',
            'Дымковская игрушка',
            'Кочуровский парк',
            'ТЦ Глобус'
        ],
        'walking': [
            'Александровский сад',
            'Музей истории Хлынова',
            'Кировский областной краеведческий музей имени П. В. Алабина',
            'Криолло',
            'Музей К.Э. Циолковского, авиации и космонавтики',
            'Сквер Алые Паруса',
            'Парк имени С. М. Кирова'
        ],
        'culture': [
            'Музей К.Э. Циолковского, авиации и космонаватики',
            'Кировский областной краеведческий музей имени П. В. Алабина',
            'Музей истории Хлынова',
            'Дымковская игрушка',
            'Кировский государственный театр юного зрителя театр на Спасской',
            'Кировский театр кукол имени А. Н. Афанасьева',
            'Кировский областной ордена Трудового Красного Знамени драматический театр имени С. М. Кирова'
        ],
        'photo': [
            'Александровский сад',
            'Сквер Алые Паруса',
            'Парк имени С. М. Кирова',
            'Кировский ботанический сад',
            'Ежовский озерно-родниковый комплекс',
            'Парк Победы',
            'Филейский парк'
        ]
    };

    var names = plans[planId] || [];

    if (!names.length) {
        var p = document.createElement('p'); p.innerText = 'Пока что места не заданы. Добавьте места для этого плана маршрута.'; container.appendChild(p);
        return;
    }

    // add Build Route button
    var buildBtn = document.createElement('button');
    buildBtn.innerText = 'Построить маршрут';
    buildBtn.style.margin = '12px 0';
    buildBtn.onclick = function(){ try { if (window.startPlan) window.startPlan(planId); else startPlan(planId); } catch(e){ console.warn('startPlan call failed', e); } };
    container.appendChild(buildBtn);

    // For each name, find place object and render route card
    for (var i = 0; i < names.length; i++) {
        var pname = names[i];
        var placeObj = null;
        for (var j = 0; j < places.length; j++) {
            if (places[j].name === pname) { placeObj = places[j]; break; }
        }
        if (!placeObj) continue;
        var card = document.createElement('div');
        card.className = 'place-card route-plan-card';

        // timeline column (dot + vertical line)
        var timeline = document.createElement('div');
        timeline.className = 'route-line';
        var dot = document.createElement('div'); dot.className = 'route-dot';
        var vline = document.createElement('div'); vline.className = 'route-vline';
        timeline.appendChild(dot); timeline.appendChild(vline);

        // main content: thumbnail + meta
        var content = document.createElement('div'); content.className = 'route-content';
        content.style.display = 'flex'; content.style.gap = '12px'; content.style.alignItems = 'center';
        var img = document.createElement('img');

        img.src = (placeObj.images && placeObj.images.length)
            ? placeObj.images[0]
            : placeObj.image;
        var meta = document.createElement('div');
        var hh = document.createElement('h4'); hh.innerText = placeObj.name; hh.style.margin = '0 0 6px 0'; hh.style.fontSize = '15px';
        var dd = document.createElement('p'); dd.innerText = placeObj.address || ''; dd.style.margin = '0'; dd.style.fontSize = '13px'; dd.className = 'description';
        meta.appendChild(hh); meta.appendChild(dd);
        content.appendChild(img); content.appendChild(meta);

        // meta column: distance and time, always right-aligned
        var rmeta = document.createElement('div'); rmeta.className = 'route-meta';
        var dist = document.createElement('div'); dist.innerText = '— KM'; dist.className = 'route-dist';
        var time = document.createElement('div'); time.innerText = '— МИН'; time.className = 'route-time';
        rmeta.appendChild(dist); rmeta.appendChild(time);

        card.appendChild(timeline);
        card.appendChild(content);
        card.appendChild(rmeta);

        // store coords for later routing; clicking opens details
        (function(p){ card.onclick = function(){ openPlaceDetails(p); }; })(placeObj);
        container.appendChild(card);
    }
}

function showCategory(category, button) {
    // if already opened the same category — close it
    if (currentCategory === category) {
        // find any inline container under this button (next element sibling) and hide it
        var maybeInline = button && button.nextElementSibling && button.nextElementSibling.getAttribute && button.nextElementSibling.getAttribute('data-inline') === '1' ? button.nextElementSibling : null;
        if (maybeInline) hideList(maybeInline);
        else {
            // fallback: hide canonical list
            var canonical = document.getElementById('placesList');
            if (canonical) hideList(canonical);
        }
        currentCategory = null;
        currentScreen = 'categories';
        listOpen = false;
        listOwner = null;
        return;
    }

    console.log("clicked category:", category);
    console.log("places:", places);

    // clear any existing route/markers when opening categories
    clearRoute();

    currentCategory = category;

    // use canonical list for categories as well
    var list = document.getElementById('placesList');
    showListBelowButton(list, button);
    // помечаем, что список активен для категории
    listOwner = 'category';
    listOpen = true;
    try { list.classList.remove('active'); } catch (e) {}
    list.innerHTML = "";
    // remember history so back button returns correctly
    screenStack.push(currentScreen);

    var found = false;

    for (var i = 0; i < places.length; i++) {

        var place = places[i];

        var cat = place.category;

        if (
            cat === category ||
            (Array.isArray(cat) && cat.includes(category))
        ) {

            found = true;   // ВОТ ЭТА СТРОКА

            var card = document.createElement("div");

            card.className = "place-card";

            card.innerHTML =
                "<img src='" + getPlaceImage(place) + "'>" +
                "<h3>" + place.name + "</h3>" +
                "<p>" + place.address + "</p>" +
                "<p class='description'>" +
                (place.description || "") +
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

    // trigger appear animation
    void list.offsetWidth;
    list.classList.add('active');

    currentScreen = 'list';

}

function getRatingStars(rating) {

    if (rating === 0 || rating === undefined || rating === null) {
        return "Нет отзывов";
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

        switchScreen(currentScreen, target);
        currentScreen = target;

        return;
    }

    if (currentScreen === "placeDetails") {

        // remove route/markers when leaving place details
        clearRoute();

        // возвращаемся на предыдущий экран (prevScreen), если он записан
        var target = screenStack.length
            ? screenStack.pop()
            : (prevScreen || 'categories');

        // защита от мусора в стеке
        var validScreens = [
            'welcome',
            'mainMenu',
            'categories',
            'interesting',
            'routePlanner'
        ];

        if (!validScreens.includes(target)) {
            target = 'categories';
        }

        // если вдруг получили list — идём ещё назад
        if (target === 'list') {
            target = screenStack.length
                ? screenStack.pop()
                : 'categories';
        }
        // переключаемся обратно на target
        switchScreen('placeDetails', target);
        currentScreen = target;

        // восстановим список мест, если он был открыт до перехода в детали
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

        // восстановим сохранённое состояние списка
        listOpen = prevListOpenState;
        listOwner = prevListOwnerState;

        // restore any inline containers that were visible before opening details
        try {
            for (var i = 0; i < prevVisibleInlines.length; i++) {
                var el = prevVisibleInlines[i];
                if (el && el.parentNode) {
                    try {
                        el.style.display = '';
                        void el.offsetWidth;
                        el.classList.add('active');
                        el.style.overflowY = 'auto';
                    } catch (e) {}
                }
            }
        } catch (e) {}
        prevVisibleInlines = [];

        return;

    }

    if (currentScreen === "list") {
        // при возврате из списка просто скрываем его и возвращаемся к родительскому экрану
        hideList(list);

        currentCategory = null;

        if (listOwner === 'interesting') {
            switchScreen('list', 'interesting');
            currentScreen = 'interesting';
        } else if (listOwner === 'search') {
            // при поиске возвращаемся в категории (убираем список)
            switchScreen('list', 'categories');
            currentScreen = 'categories';
        } else {
            switchScreen('list', 'categories');
            currentScreen = 'categories';
        }

        // сбросим статус списка
        listOpen = false;
        listOwner = null;

        return;

    }

    if (currentScreen === "categories" || currentScreen === "interesting" || currentScreen === "routePlanner") {

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



function openInterestingPlaces() {
    var input = document.getElementById("searchInput");
    if (input) input.value = "";
    // Переключаемся на отдельный экран "интересные места" и показываем список
    switchScreen('mainMenu', 'interesting');
    document.getElementById('backButton').style.display = 'block';
    screenStack.push(currentScreen);
    showInterestingPlaces();
    currentScreen = 'interesting';

}

// Показать список популярных/интересных мест (по имени из списка)
function showInterestingPlaces() {
    var popularNames = [
        'Криолло',
        'Музей К.Э. Циолковского, авиации и космонавтики',
        'Александровский сад',
        'Сквер Трудовой славы',
        'Парк имени С. М. Кирова',
        'Аполло',
        'Сквер 60-летия СССР',
        'Вятка-ЦУМ',
        'Кировский государственный цирк',
        'Парк имени С. М. Кирова',
        'Море парк',
        'ТЦ Макси',
        'ТЦ Глобус',
        'Ипподром',
        'Зубаревский лес',
        'Динки Парк',
        'Кафе Паприка',
        'Нижнеивкинские источники',
        'Жуковлянские валуны',
        'Кировский ботанический сад',
        'Комплекс Великорецкое',
        'Динопарк',
        'Комплекс Порошино',
        'Юркин парк'
    ];

    clearRoute();
    // use canonical list and place it after the interesting header
    var header = document.querySelector('#interesting h2');
    if (!header) header = document.querySelector('#categories h2');
    var list = document.getElementById('placesList');
    showListBelowButton(list, header);
    // reset animation and content
    try { list.classList.remove('active'); } catch (e) {}
    list.innerHTML = "";
    listOwner = 'interesting';
    listOpen = true;

    var found = false;
    for (var i = 0; i < places.length; i++) {
        var p = places[i];
        if (popularNames.includes(p.name) || popularNames.some(function(n){ return p.name.indexOf(n) !== -1; })) {
            found = true;
            var card = document.createElement('div');
            card.className = 'place-card';
            card.innerHTML = "<img src='"+(p.images && p.images.length ? getPlaceImage(p) : p.image)+"'>"+
                "<h3>"+p.name+"</h3>"+
                "<p>"+p.address+"</p>"+
                "<p class='description'>"+(p.description||'')+"</p>"+
                "<span class='rating'>" + getRatingStars(
                    p._rating ? p._rating.avg : p.rating
                ) + "</span>";
            (function(pp){ card.onclick = function(){ openPlaceDetails(pp); }; })(p);
            list.appendChild(card);
        }
    }
    if (!found) list.innerHTML = '<p>Популярные места не найдены</p>';
    // trigger appear animation
    void list.offsetWidth;
    list.classList.add('active');
}

function openRoutePlanner() {

    // Показываем экран планировщика маршрутов
    switchScreen('mainMenu', 'routePlanner');
    document.getElementById('routePlanDetails').style.display = 'none';
    document.getElementById('backButton').style.display = 'block';
    screenStack.push(currentScreen);
    currentScreen = 'routePlanner';
    listOpen = false;
    listOwner = null;

}

function openPlaceDetails(place) {
    // определяем откуда были открыты детали (чтобы корректно возвращаться)
    var from = currentScreen || 'categories';
    if (from === 'list') {

        // возвращаемся туда, откуда реально пришли
        if (screenStack.length) {
            prevScreen = screenStack[screenStack.length - 1];
        } else {
            prevScreen = 'categories';
        }

    } else {

        prevScreen = from;

    if (currentScreen !== "placeDetails") {
    screenStack.push(currentScreen);
    }

    }
    // перед показом деталей: сохраним состояние и удалим/скроем все inline-списки
    try {
        // save canonical list state
        var listEl = document.getElementById('placesList');
        if (listEl) {
            prevListOpenState = listEl.classList.contains('active');
            prevListOwnerState = listOwner;
            // hide canonical with animation
            hideList(listEl);
            // mark that lists are hidden due to details
            listHiddenForDetails = true;
        }
        // Remember currently visible inline container elements so we can restore them on Back
        try {
            prevVisibleInlines = [];
            var inlines = document.querySelectorAll('[data-inline="1"]');
            for (var ii = 0; ii < inlines.length; ii++) {
                var el = inlines[ii];
                try {
                    if (el.style.display !== 'none' && el.classList.contains('active')) {
                        prevVisibleInlines.push(el);
                    }
                    // hide inline with animation (keeps element in DOM)
                    hideList(el);
                } catch (e) {}
            }
        } catch (e) {}
    } catch (e) {}
    // push previous screen so back returns correctly
    if (!activePlan) {
    screenStack.push(prevScreen || currentScreen);
    }
    // переключаемся на экран деталей после анимации скрытия списков
    setTimeout(function() {
        try { switchScreen(prevScreen, 'placeDetails'); } catch (e) { console.warn(e); }
    }, 360);

    document.getElementById("placeTitle").innerText = place.name;

    // показываем подробное описание (description_full из places.js)
    document.getElementById("placeDescription").innerText = place.description_full || place.description || '';

    showPhotos(place);

    setupRouteButton(place);

    // render rating controls for this place
    try { renderPlaceRatingControls(place); } catch (e) {}
    // ensure plan next button exists/updated when viewing place details during a plan
    try { ensurePlanNextButton(); } catch(e) {}

    currentScreen = "placeDetails";

    fetch("/rating/place/" + encodeURIComponent(place.name))
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
        collapseMenu();

        // Try to get user's current position
        if (!navigator.geolocation) {
            alert('Геолокация не поддерживается в этом браузере.');
            return;
        }

        // show simple feedback
        button.disabled = true;
        var originalText = button.innerText;
        button.innerText = 'Строим маршрут...';

        var geoSuccess = function(pos) {
            var userCoords = [pos.coords.latitude, pos.coords.longitude];

            // нормализуем координаты (гарантируем формат [lat, lon])
            userCoords = normalizeCoords(userCoords);
            var destCoords = normalizeCoords(place.coords);

            // Попробуем построить маршрут и выполнить несколько fallback'ов при ошибке
            console.log('userCoords', userCoords, 'place.coords', destCoords);

            // помощник: расстояние в метрах между двумя координатами
            function haversineDistance(a, b) {
                var toRad = function(x) { return x * Math.PI / 180; };
                var lat1 = a[0], lon1 = a[1];
                var lat2 = b[0], lon2 = b[1];
                var R = 6371000; // meters
                var dLat = toRad(lat2 - lat1);
                var dLon = toRad(lon2 - lon1);
                var A = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon/2) * Math.sin(dLon/2);
                var C = 2 * Math.atan2(Math.sqrt(A), Math.sqrt(1-A));
                return R * C;
            }

            // если точки очень близко — не строим маршрут, просто показываем метки
            try {
                var dist = haversineDistance(userCoords, destCoords);
                console.log('distance meters:', dist);
                if (dist < 50) {
                    console.log('Points are very close — skipping routing.');
                    var markPlace = new ymaps.Placemark(destCoords, { hintContent: place.name });
                    map.geoObjects.add(markPlace);
                    // track markers so they can be cleared later
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
                // clear previous route and markers
                clearRoute();
                // добавить маршрут на карту
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
                // запускаем отслеживание пользователя пока маршрут активен
                try { startTracking(true); } catch (e) {}
                // пометить точки
                try {
                    if (wayPoints && wayPoints.get && wayPoints.get(1)) {
                        wayPoints.get(1).properties.set('iconCaption', place.name);
                    }
                } catch (e) {}
                // вернуть кнопку
                button.disabled = false;
                button.innerText = originalText;
            }

            // Основная попытка: авто
            tryBuildRoute(userCoords, destCoords, 'auto').then(onRoute, function(err) {
                console.warn('auto failed, retry pedestrian', err);
                // Попробовать пеший маршрут
                tryBuildRoute(userCoords, destCoords, 'pedestrian').then(onRoute, function(err2) {
                    console.warn('pedestrian failed, try swapping coords', err2);
                    // попробовать переставить порядок координат (на случай формата [lon,lat])
                    var swappedStart = [userCoords[1], userCoords[0]];
                    var swappedEnd = [destCoords[1], destCoords[0]];
                    tryBuildRoute(swappedStart, swappedEnd, 'auto').then(onRoute, function(err3) {
                        console.warn('swapped coords failed', err3);
                        // последний вариант: попробовать MultiRoute (multiRouter)
                        try {
                            console.warn('All routing attempts failed, showing markers and fitting bounds');
                            // remove previous route only
                            try { if (lastRoute) map.geoObjects.remove(lastRoute); } catch (e) {}
                            lastRoute = null;
                            var markUserF = new ymaps.Placemark(userCoords, { iconCaption: 'Вы здесь' });
                            var markPlaceF = new ymaps.Placemark(destCoords, { hintContent: place.name });
                            map.geoObjects.add(markUserF);
                            map.geoObjects.add(markPlaceF);
                            lastMarkers.push(markUserF);
                            lastMarkers.push(markPlaceF);
                            // fit map to both points
                            try {
                                map.setBounds([userCoords, destCoords], { checkZoomRange: true, duration: 600 });
                            } catch (e) {
                                // fallback to center on destination
                                map.setCenter(destCoords, 12, { duration: 600 });
                            }
                            button.disabled = false; button.innerText = originalText;
                        } catch (e) {
                            console.error('final fallback failed', e, err, err2, err3);
                            alert('Не удалось построить маршрут и показать метки.');
                            button.disabled = false; button.innerText = originalText;
                        }
                    });
                });
            });
        };

        var geoError = function(err) {
            console.warn('Geolocation error', err);
            alert('Не удалось определить ваше местоположение. Покажу объект на карте.');
            // fallback: just show the place
            try { clearRoute(); } catch (e) {}
            var dest = normalizeCoords(place.coords);
            var mark = new ymaps.Placemark(dest, { hintContent: place.name });
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

    var list = document.getElementById('placesList');

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

    // ↓ ВСЁ ЭТО ДОЛЖНО БЫТЬ ВНУТРИ ФУНКЦИИ

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

    // управление поиском
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

    // СЛАЙДЕР

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

        // реальная позиция элемента
        var slideLeft =
            slide.offsetLeft;

        // центрирование
        var offset =
            slideLeft -
            (containerWidth - slideWidth) / 2;

        slider.style.transform =
            "translateX(" +
            (-offset) +
            "px)";
    }

    // стрелка влево

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

    // кнопка закрытия

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

    fetch("/rating/place/" + encodeURIComponent(place.name))
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

            var request = fetch("/rating/place/" + encodeURIComponent(place.name))

            .then(function(res){

                if (!res.ok) return null;

                return res.json();

            })

            .then(function(data){

                if (!data) return;

                // ВАЖНО: сохраняем рейтинг в place

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

    // Когда все рейтинги загрузились — обновляем карточки

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

            if (places[j].name === name) {

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

function collapseMenu() {
    var menu = document.getElementById("menu");
    if (menu) menu.style.transform = "translateX(-50%) translateY(100%)";
}

function expandMenu() {
    var menu = document.getElementById("menu");
    if (menu) menu.style.transform = "translateX(-50%) translateY(0)";
}