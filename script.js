console.log("script.js loaded");

var LANGS = ["ru", "en", "zh"];
var currentLang = localStorage.getItem("lang") || "ru";
if (LANGS.indexOf(currentLang) === -1) {
    currentLang = navigator.language.startsWith("ru")
        ? "ru"
        : (navigator.language.startsWith("zh") ? "zh" : "en");
}

var CATEGORY_GROUPS = {
    nature: ["nature", "water", "cave", "spring", "park"],
    history: ["history", "museums"],
    food: ["food"],
    kids: ["kids"]
};

var VYATSU_NEARBY_FOOD = [
    { name: { ru: "Кафе «У камина»", en: "Cafe U Kamina", zh: "壁炉咖啡馆" }, type: { ru: "Кафе", en: "Cafe", zh: "咖啡馆" }, image: "images/paprika_cafe.jpg" },
    { name: { ru: "Столовая №1", en: "Canteen No. 1", zh: "第一食堂" }, type: { ru: "Столовая", en: "Canteen", zh: "食堂" }, image: "images/kriollo.jpg" },
    { name: { ru: "Бистро «Кampus»", en: "Campus Bistro", zh: "校园小馆" }, type: { ru: "Ресторан", en: "Restaurant", zh: "餐厅" }, image: "images/paprika.webp" },
    { name: { ru: "Магазин «Пятёрочка»", en: "Pyaterochka Store", zh: "五店超市" }, type: { ru: "Магазин", en: "Grocery", zh: "食品店" }, image: "images/globus.jpg" }
];

var VYATSU_NEARBY_PRINT = [
    { name: { ru: "Копицентр «Печать+»", en: "Print+ Copy Center", zh: "Print+ 复印中心" }, type: { ru: "Копирование", en: "Copying", zh: "复印" }, image: "images/default.jpg" },
    { name: { ru: "Библиотека ВятГУ", en: "VyatSU Library", zh: "维亚特国立大学图书馆" }, type: { ru: "Печать документов", en: "Document printing", zh: "文件打印" }, image: "images/default.jpg" },
    { name: { ru: "Фото-салон «Момент»", en: "Moment Photo Salon", zh: "瞬间照相馆" }, type: { ru: "Печать фото", en: "Photo printing", zh: "照片打印" }, image: "images/default.jpg" }
];

const translations = {

    ru: {
        pageTitle: "Мини-гид по Кирову",
        mainTitle: "Мини-гид по Кирову",
        navHome: "Главная",
        navInteresting: "Интересно",
        navRoutes: "Маршруты",
        navCategories: "Категории",
        navStudents: "Студентам",
        navAbout: "О проекте",
        heroBadge: "Интересно",
        welcomeTitle: "Интересные места",
        welcomeText: "Куда обязательно стоит сходить в Кирове",
        welcomeButton: "Смотреть места",
        cardRoutesTitle: "Планы маршрутов",
        cardRoutesText: "Готовые маршруты для прогулок по городу",
        cardCategoriesTitle: "Категории",
        cardCategoriesText: "Места по интересам: музеи, парки, кафе и другое",
        popularPlaces: "Популярные места",
        showAll: "Смотреть все",
        interesting: "Интересные места",
        routesTitle: "Маршруты",
        categories: "Категории",
        foodCardText: "Кафе, рестораны и кофейни",
        natureCardText: "Парки, леса и места отдыха",
        historyCardText: "Исторические здания и места",
        kidsCardText: "Развлечения для всей семьи",
        campusText: "Учебные здания и адреса",
        dormsText: "Студенческие общежития",
        aboutText1: "Мини-гид помогает быстро найти интересные места Кирова, посмотреть подборки, готовые маршруты и полезные точки для студентов.",
        aboutText2: "Все разделы сделаны как короткие карточки: выберите тему, откройте место и постройте маршрут на карте.",
        routeHourText: "Быстрая прогулка по центру",
        routeWalkingText: "Красивые улицы и набережные",
        routeKidsText: "Интересно для всей семьи",
        routePhotoText: "Самые красивые места города",
        whereToEat: "Где поесть",
        whereToPrint: "Где распечатать",
        youAreHere: "Вы здесь",
        search: "Поиск мест...",
        clearSearch: "Очистить поиск",
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
        reviewSent: "Оценка отправлена!",
        thanksReview: "Спасибо за отзыв!",
        putStars: "Поставьте звёзды перед отправкой.",
        ratingError: "Не удалось отправить оценку. Попробуйте позже.",
        alreadyRated: "Вы уже оценили это место.",
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
        votes: "голосов",
        reviewsWord: "отзывов",
        students: "Студентам",
        print: "Печать",
        educ: "Образование",
        studentFood: "Где поесть",
        education: "Образование",
        vyatsu: "ВятГУ",
        campus: "Корпуса",
        dorms: "Общаги",
        about: "О проекте",
        back: "Назад",
        allRoutes: "Все маршруты",
        vgek: "ВГЭК",
        kpk: "КПК",
        kpias: "КПиАС",
        vemt: "ВЭМТ",
        vzt: "ВЖТ",
        kat: "КАТ",
        ratingLabel: "Рейтинг",
        popularNotFound: "Популярные места не найдены",
        emptyRoutePlan: "Пока что места не заданы. Добавьте места для этого плана маршрута.",
        placesNotFound: "Места не найдены",
        geoNotSupported: "Геолокация не поддерживается в этом браузере."
    },

    en: {
        pageTitle: "Mini Guide to Kirov",
        mainTitle: "Mini Guide to Kirov",
        navHome: "Home",
        navInteresting: "Highlights",
        navRoutes: "Routes",
        navCategories: "Categories",
        navStudents: "Students",
        navAbout: "About",
        heroBadge: "Highlights",
        welcomeTitle: "Interesting places",
        welcomeText: "Must-visit spots in Kirov",
        welcomeButton: "View places",
        cardRoutesTitle: "Route plans",
        cardRoutesText: "Ready-made walking routes around the city",
        cardCategoriesTitle: "Categories",
        cardCategoriesText: "Places by interest: museums, parks, cafes and more",
        popularPlaces: "Popular places",
        showAll: "View all",
        interesting: "Interesting places",
        routesTitle: "Routes",
        categories: "Categories",
        foodCardText: "Cafes, restaurants and coffee shops",
        natureCardText: "Parks, forests and outdoor spots",
        historyCardText: "Historic buildings and landmarks",
        kidsCardText: "Fun for the whole family",
        campusText: "University buildings and addresses",
        dormsText: "Student dormitories",
        aboutText1: "This mini guide helps you quickly find interesting places in Kirov, browse curated lists, ready-made routes and useful spots for students.",
        aboutText2: "Every section is built as short cards: pick a topic, open a place and build a route on the map.",
        routeHourText: "A quick walk through the center",
        routeWalkingText: "Beautiful streets and embankments",
        routeKidsText: "Fun for the whole family",
        routePhotoText: "The most scenic spots in the city",
        whereToEat: "Where to eat",
        whereToPrint: "Where to print",
        youAreHere: "You are here",
        search: "Search places...",
        clearSearch: "Clear search",
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
        reviewSent: "Rating submitted!",
        thanksReview: "Thanks for your review!",
        putStars: "Please select stars before sending.",
        ratingError: "Could not submit rating. Please try again later.",
        alreadyRated: "You have already rated this place.",
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
        sendReview: "Send review",
        close: "Close",
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
        vyatsu: "VyatSU",
        campus: "Campuses",
        dorms: "Dorms",
        about: "About",
        back: "Back",
        allRoutes: "All routes",
        vgek: "VGEC",
        kpk: "KPK",
        kpias: "KPiAS",
        vemt: "VEMT",
        vzt: "VZhT",
        kat: "KAT",
        ratingLabel: "Rating",
        popularNotFound: "Popular places not found",
        emptyRoutePlan: "No places added for this route plan yet.",
        placesNotFound: "Places not found",
        geoNotSupported: "Geolocation is not supported in this browser."
    },

    zh: {
        pageTitle: "基洛夫迷你指南",
        mainTitle: "基洛夫迷你指南",
        navHome: "首页",
        navInteresting: "精选",
        navRoutes: "路线",
        navCategories: "分类",
        navStudents: "学生",
        navAbout: "关于",
        heroBadge: "精选",
        welcomeTitle: "有趣的地方",
        welcomeText: "基洛夫值得一去的景点",
        welcomeButton: "查看地点",
        cardRoutesTitle: "路线规划",
        cardRoutesText: "现成的城市漫步路线",
        cardCategoriesTitle: "分类",
        cardCategoriesText: "按兴趣浏览：博物馆、公园、咖啡馆等",
        popularPlaces: "热门地点",
        showAll: "查看全部",
        interesting: "有趣的地方",
        routesTitle: "路线",
        categories: "分类",
        foodCardText: "咖啡馆、餐厅和甜品店",
        natureCardText: "公园、森林和休闲场所",
        historyCardText: "历史建筑与地标",
        kidsCardText: "适合全家人的娱乐",
        campusText: "教学楼与地址",
        dormsText: "学生宿舍",
        aboutText1: "迷你指南帮助您快速发现基洛夫的有趣地点、精选列表、现成路线以及学生实用信息。",
        aboutText2: "所有板块都以卡片形式呈现：选择主题，打开地点并在地图上规划路线。",
        routeHourText: "市中心快速漫步",
        routeWalkingText: "美丽的街道与河堤",
        routeKidsText: "适合全家人的行程",
        routePhotoText: "城市最美的拍照点",
        whereToEat: "在哪里吃饭",
        whereToPrint: "在哪里打印",
        youAreHere: "您在这里",
        search: "搜索地点...",
        clearSearch: "清除搜索",
        tradecenters: "购物中心",
        food: "美食",
        nature: "自然",
        water: "河流与湖泊",
        cave: "洞穴与岩石",
        spring: "泉水",
        history: "历史",
        museums: "博物馆与剧院",
        park: "自然景区",
        kids: "亲子",
        noReviews: "暂无评价",
        rate: "评分",
        reviewSent: "评分已提交！",
        thanksReview: "感谢您的评价！",
        putStars: "请先选择星级。",
        ratingError: "无法提交评分，请稍后再试。",
        alreadyRated: "您已经评价过此地点。",
        nothingFound: "未找到结果",
        noReviewsYet: "暂无评价",
        reviews: "评价",
        routePlansTitle: "路线规划",
        routePlansText: "选择现成的旅游路线。",
        buildRoute: "规划路线",
        buildingRoute: "正在规划路线...",
        routeHour: "一小时路线",
        routeKids: "亲子路线",
        routeWalking: "步行路线",
        routeCulture: "文化路线",
        routePhoto: "摄影路线",
        ratingNoReviews: "评分：暂无评价",
        sendReview: "提交评价",
        close: "关闭",
        next: "下一步",
        finishJourney: "结束行程",
        routeBuildError: "无法规划路线并显示标记。",
        geoError: "无法获取您的位置，将在地图上显示该地点。",
        routeCompleted: "您已完成路线！体验如何？",
        km: "公里",
        min: "分钟",
        votes: "票",
        reviewsWord: "条评价",
        students: "学生",
        print: "打印",
        educ: "教育",
        studentFood: "在哪里吃饭",
        education: "教育",
        vyatsu: "维亚特国立大学",
        campus: "校区",
        dorms: "宿舍",
        about: "关于项目",
        back: "返回",
        allRoutes: "全部路线",
        vgek: "经济学院",
        kpk: "师范学院",
        kpias: "工艺学院",
        vemt: "机械学院",
        vzt: "交通学院",
        kat: "汽车学院",
        ratingLabel: "评分",
        popularNotFound: "未找到热门地点",
        emptyRoutePlan: "此路线尚未添加地点。",
        placesNotFound: "未找到地点",
        geoNotSupported: "此浏览器不支持地理定位。"
    }
};

var MAP_DEFAULT_STATE = {
    center: [58.6035, 49.6679],
    zoom: 12
};

var ZH_TEXT_FALLBACKS = {
    "Museum.": "\u535a\u7269\u9986\u3002",
    "Theatre.": "\u5267\u9662\u3002",
    "Restaurant.": "\u9910\u5385\u3002",
    "University.": "\u5927\u5b66\u3002",
    "Planetarium.": "\u5929\u6587\u9986\u3002",
    "City park.": "\u57ce\u5e02\u516c\u56ed\u3002",
    "Interactive park.": "\u4ea4\u4e92\u5f0f\u516c\u56ed\u3002",
    "Popular place for autumn fishing.": "\u79cb\u5b63\u5782\u9493\u7684\u70ed\u95e8\u5730\u70b9\u3002",
    "Hydrological natural monument.": "\u6c34\u6587\u81ea\u7136\u7eaa\u5ff5\u5730\u3002",
    "Relic spring.": "\u9057\u5b58\u6cc9\u773c\u3002",
    "Holy spring.": "\u5723\u6cc9\u3002",
    "System of springs.": "\u6cc9\u7fa4\u7cfb\u7edf\u3002",
    "Ancient settlement.": "\u53e4\u4ee3\u805a\u843d\u9057\u5740\u3002",
    "Archaeological monument.": "\u8003\u53e4\u9057\u5740\u3002",
    "Pilgrimage center.": "\u671d\u5723\u4e2d\u5fc3\u3002",
    "Southern taiga reserve.": "\u5357\u6cf0\u52a0\u6797\u4fdd\u62a4\u533a\u3002",
    "Pine forest.": "\u677e\u6797\u3002",
    "Projected national park.": "\u62df\u5efa\u56fd\u5bb6\u516c\u56ed\u3002",
    "Natural monument.": "\u81ea\u7136\u7eaa\u5ff5\u5730\u3002",
    "Rare Ice Age plant.": "\u51b0\u6cb3\u65f6\u671f\u7a00\u6709\u690d\u7269\u3002",
    "Dinosaur park.": "\u6050\u9f99\u516c\u56ed\u3002",
    "Entertainment center.": "\u5a31\u4e50\u4e2d\u5fc3\u3002",
    "Horse club.": "\u9a6c\u672f\u4ff1\u4e50\u90e8\u3002",
    "Shopping mall.": "\u8d2d\u7269\u4e2d\u5fc3\u3002",
    "Copy center with low prices.": "\u4ef7\u683c\u5b9e\u60e0\u7684\u590d\u5370\u4e2d\u5fc3\u3002",
    "Student dormitory of VyatSU.": "\u7ef4\u4e9a\u7279\u56fd\u7acb\u5927\u5b66\u5b66\u751f\u5bbf\u820d\u3002",
    "Document printing": "\u6587\u4ef6\u6253\u5370",
    "Photo printing": "\u7167\u7247\u6253\u5370",
    "Copying": "\u590d\u5370",
    "Cafe": "\u5496\u5561\u9986",
    "Canteen": "\u98df\u5802",
    "Restaurant": "\u9910\u5385",
    "Grocery": "\u98df\u54c1\u5e97"
};

var ZH_TOKEN_REPLACEMENTS = [
    ["Kirov region", "\u57fa\u6d1b\u592b\u5dde"],
    ["Kirov Region", "\u57fa\u6d1b\u592b\u5dde"],
    ["Kirov", "\u57fa\u6d1b\u592b"],
    ["district", "\u533a"],
    ["District", "\u533a"],
    ["municipal district", "\u5e02\u8f96\u533a"],
    ["municipal area", "\u5e02\u8f96\u533a"],
    ["municipal округ", "\u5e02\u8f96\u533a"],
    ["rural settlement", "\u4e61\u9547"],
    ["urban settlement", "\u57ce\u9547"],
    ["settlement", "\u5b9a\u5c45\u70b9"],
    ["village", "\u6751"],
    ["town", "\u57ce\u9547"],
    ["city", "\u57ce\u5e02"],
    ["Street", "\u8857"],
    ["St.", "\u8857"],
    ["Road", "\u8def"],
    ["Avenue", "\u5927\u9053"],
    ["Boulevard", "\u6797\u836b\u5927\u9053"],
    ["Embankment", "\u6cb3\u5824"],
    ["Lake", "\u6e56"],
    ["River", "\u6cb3"],
    ["Park", "\u516c\u56ed"],
    ["Forest", "\u68ee\u6797"],
    ["Museum", "\u535a\u7269\u9986"],
    ["Theatre", "\u5267\u9662"],
    ["Theater", "\u5267\u9662"],
    ["Circus", "\u9a6c\u620f\u56e2"],
    ["Garden", "\u82b1\u56ed"],
    ["Cave", "\u6d1e\u7a74"],
    ["Springs", "\u6cc9"],
    ["Spring", "\u6cc9"],
    ["Waterfall", "\u7011\u5e03"],
    ["Reserve", "\u4fdd\u62a4\u533a"],
    ["Complex", "\u7efc\u5408\u4f53"],
    ["Dormitory", "\u5bbf\u820d"],
    ["building", "\u697c"],
    ["Building", "\u697c"],
    ["No.", "\u53f7"]
];

var currentMapLocale = null;
var ymapsLoadPromise = null;
var listHomeRegistry = {};
var MOBILE_BREAKPOINT = 768;
var panelState = {
    isHidden: false,
    routeControlEnabled: false
};
var routeJourneyState = {
    active: false,
    planId: null,
    currentPlaceId: null,
    arrivedByPlace: {},
    autoOpenedByPlace: {},
    dismissedByPlace: {}
};

function t(key) {
    var dict = translations[currentLang] || translations.ru;
    return dict[key] || translations.ru[key] || key;
}

function applyTokenReplacements(text, replacements) {
    var result = text;
    for (var i = 0; i < replacements.length; i++) {
        var from = replacements[i][0];
        var to = replacements[i][1];
        result = result.split(from).join(to);
    }
    return result;
}

function localizeChineseFallbackText(text) {
    if (!text) return "";

    var normalized = String(text).trim();
    if (!normalized) return "";
    if (/[\u4e00-\u9fff]/.test(normalized)) return normalized;
    if (ZH_TEXT_FALLBACKS[normalized]) return ZH_TEXT_FALLBACKS[normalized];

    var translated = applyTokenReplacements(normalized, ZH_TOKEN_REPLACEMENTS);

    translated = translated
        .replace(/\bNo\.\s*(\d+)/g, "$1\u53f7")
        .replace(/\b(\d+)\s*km\b/gi, "$1\u516c\u91cc")
        .replace(/\b(\d+)\s*m\b/gi, "$1\u7c73")
        .replace(/\b(\d+)\s*votes\b/gi, "$1\u6761\u8bc4\u4ef7")
        .replace(/\bof\b/gi, "")
        .replace(/\s{2,}/g, " ")
        .replace(/\s+,/g, ",")
        .trim();

    return translated;
}

function getLocalizedText(obj, lang) {
    if (!obj) return "";
    lang = lang || currentLang;

    if (obj[lang]) return obj[lang];

    if (lang === "zh") {
        return localizeChineseFallbackText(obj.en || obj.ru || "");
    }

    return obj.ru || obj.en || "";
}

function getClientId() {
    var id = localStorage.getItem("clientId");
    if (!id) {
        id = "c_" + Date.now() + "_" + Math.random().toString(36).slice(2, 10);
        localStorage.setItem("clientId", id);
    }
    return id;
}

function showToast(message, type) {
    var container = document.getElementById("toastContainer");
    if (!container) return;

    var toast = document.createElement("div");
    toast.className = "toast " + (type || "success");
    toast.innerText = message;
    container.appendChild(toast);

    setTimeout(function () {
        toast.classList.add("toast-out");
        setTimeout(function () {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 240);
    }, 3200);
}

function getPanelElement() {
    return document.querySelector(".content-panel");
}

function isMobile() {
    return window.matchMedia("(max-width: " + MOBILE_BREAKPOINT + "px)").matches;
}

function syncPanelUiState() {
    var panel = getPanelElement();
    var mobileMode = isMobile();
    var mobileRouteControlEnabled = mobileMode && !!panelState.routeControlEnabled;

    document.body.classList.toggle("panel-is-open", mobileRouteControlEnabled && !panelState.isHidden);
    document.body.classList.toggle("route-menu-control-active", mobileRouteControlEnabled);

    if (!panel) return;

    if (!mobileMode || !panelState.routeControlEnabled) {
        panelState.isHidden = false;
        panel.classList.remove("panel-hidden");
        panel.classList.remove("panel-dragging");
        panel.style.transform = "";
        panel.style.opacity = "";
        return;
    }

    panel.classList.toggle("panel-hidden", !!panelState.isHidden);
}

function setRouteMenuControlEnabled(enabled) {
    panelState.routeControlEnabled = !!enabled;
    if (!panelState.routeControlEnabled) {
        panelState.isHidden = false;
    }
    syncPanelUiState();
}

function markCurrentRoutePlaceDismissed() {
    var placeId = routeJourneyState.currentPlaceId;
    if (!placeId) return;
    if (!routeJourneyState.arrivedByPlace[placeId]) return;
    routeJourneyState.dismissedByPlace[placeId] = true;
}

function openMenu() {
    var panel = getPanelElement();
    panelState.isHidden = false;
    if (!panel) {
        syncPanelUiState();
        return;
    }

    if (!isMobile()) {
        syncPanelUiState();
        return;
    }

    panel.classList.remove("panel-dragging");
    panel.classList.remove("panel-hidden");
    panel.style.transform = "";
    panel.style.opacity = "";
    syncPanelUiState();
}

function closeMenu(reason) {
    var panel = getPanelElement();

    if (reason === "manual") {
        markCurrentRoutePlaceDismissed();
    }

    if (!isMobile()) {
        panelState.isHidden = false;
        syncPanelUiState();
        return;
    }

    panelState.isHidden = true;

    if (!panel) {
        syncPanelUiState();
        return;
    }

    panel.classList.remove("panel-dragging");
    panel.classList.add("panel-hidden");
    panel.style.transform = "";
    panel.style.opacity = "";
    syncPanelUiState();
}

function resetRouteJourneyState() {
    routeJourneyState.active = false;
    routeJourneyState.planId = null;
    routeJourneyState.currentPlaceId = null;
    routeJourneyState.arrivedByPlace = {};
    routeJourneyState.autoOpenedByPlace = {};
    routeJourneyState.dismissedByPlace = {};
}

function prepareRouteJourneyPlace(placeId) {
    if (!placeId) return;
    if (typeof routeJourneyState.arrivedByPlace[placeId] === "undefined") {
        routeJourneyState.arrivedByPlace[placeId] = false;
    }
    if (typeof routeJourneyState.autoOpenedByPlace[placeId] === "undefined") {
        routeJourneyState.autoOpenedByPlace[placeId] = false;
    }
    if (typeof routeJourneyState.dismissedByPlace[placeId] === "undefined") {
        routeJourneyState.dismissedByPlace[placeId] = false;
    }
}

function setRouteJourneyTarget(place, planId) {
    if (!place || !place.id) return;

    routeJourneyState.active = true;
    routeJourneyState.planId = planId || null;
    routeJourneyState.currentPlaceId = place.id;
    prepareRouteJourneyPlace(place.id);
}

function getPlaceById(placeId) {
    for (var i = 0; i < places.length; i++) {
        if (places[i].id === placeId) return places[i];
    }
    return null;
}

function haversineDistance(a, b) {
    if (!a || !b || a.length < 2 || b.length < 2) return Infinity;

    var toRad = function (x) { return x * Math.PI / 180; };
    var lat1 = Number(a[0]);
    var lon1 = Number(a[1]);
    var lat2 = Number(b[0]);
    var lon2 = Number(b[1]);
    var R = 6371000;
    var dLat = toRad(lat2 - lat1);
    var dLon = toRad(lon2 - lon1);
    var A = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var C = 2 * Math.atan2(Math.sqrt(A), Math.sqrt(1 - A));
    return R * C;
}

function getArrivalThresholdMeters(accuracy) {
    if (typeof accuracy !== "number" || isNaN(accuracy)) return 32;
    return Math.max(24, Math.min(42, accuracy * 0.45));
}

function handleRoutePlaceArrival(place) {
    if (!place || !place.id) return;

    if (!routeJourneyState.autoOpenedByPlace[place.id] && !routeJourneyState.dismissedByPlace[place.id]) {
        routeJourneyState.autoOpenedByPlace[place.id] = true;
        openPlaceDetails(place, currentScreen === "placeDetails");
        openMenu();
    }
}

function evaluateRouteArrival(coords, accuracy) {
    if (!routeJourneyState.active || !routeJourneyState.currentPlaceId) return;

    var place = getPlaceById(routeJourneyState.currentPlaceId);
    if (!place || !place.coords) return;

    var distance = haversineDistance(coords, normalizeCoords(place.coords));
    var threshold = getArrivalThresholdMeters(accuracy);

    if (distance <= threshold && !routeJourneyState.arrivedByPlace[place.id]) {
        routeJourneyState.arrivedByPlace[place.id] = true;
        handleRoutePlaceArrival(place);
    }
}

function getMapLocaleForLanguage(lang) {
    return lang === "ru" ? "ru_RU" : "en_US";
}

function getYmapsApiKey() {
    var config = document.getElementById("ymapsApiConfig");
    return config ? (config.getAttribute("data-apikey") || "") : "";
}

function loadYandexMapsApi(forceReload) {
    var targetLocale = getMapLocaleForLanguage(currentLang);

    if (!forceReload && window.ymaps && currentMapLocale === targetLocale) {
        return Promise.resolve(window.ymaps);
    }

    if (!forceReload && ymapsLoadPromise) {
        return ymapsLoadPromise;
    }

    ymapsLoadPromise = new Promise(function (resolve, reject) {
        var existingScript = document.getElementById("ymapsRuntimeScript");
        if (existingScript && existingScript.parentNode) {
            existingScript.parentNode.removeChild(existingScript);
        }

        try {
            if (window.ymaps && typeof window.ymaps.destroy === "function") {
                window.ymaps.destroy();
            }
        } catch (e) {}

        window.ymaps = undefined;

        var apiKey = getYmapsApiKey();
        var script = document.createElement("script");
        script.id = "ymapsRuntimeScript";
        script.type = "text/javascript";
        script.async = true;
        script.src = "https://api-maps.yandex.ru/2.1/?apikey=" + encodeURIComponent(apiKey) + "&lang=" + targetLocale;
        script.onload = function () {
            if (!window.ymaps || typeof ymaps.ready !== "function") {
                ymapsLoadPromise = null;
                reject(new Error("ymaps_unavailable"));
                return;
            }

            ymaps.ready(function () {
                currentMapLocale = targetLocale;
                ymapsLoadPromise = null;
                resolve(window.ymaps);
            });
        };
        script.onerror = function () {
            ymapsLoadPromise = null;
            reject(new Error("ymaps_script_error"));
        };

        document.head.appendChild(script);
    });

    return ymapsLoadPromise;
}

function refreshUserMarkerCaption() {
    try {
        if (userMarker && userMarker.properties) {
            userMarker.properties.set("iconCaption", t("youAreHere"));
        }
    } catch (e) {}
}

function destroyMapInstance() {
    var lastCenter = MAP_DEFAULT_STATE.center.slice();
    var lastZoom = MAP_DEFAULT_STATE.zoom;

    try {
        if (map && typeof map.getCenter === "function") {
            lastCenter = map.getCenter();
        }
        if (map && typeof map.getZoom === "function") {
            lastZoom = map.getZoom();
        }
    } catch (e) {}

    stopTracking();

    try {
        if (map && typeof map.destroy === "function") {
            map.destroy();
        }
    } catch (e) {}

    map = null;
    userMarker = null;
    lastRoute = null;
    lastMarkers = [];

    return {
        center: lastCenter,
        zoom: lastZoom
    };
}

function syncMapLanguage() {
    var targetLocale = getMapLocaleForLanguage(currentLang);
    var shouldReloadApi = currentMapLocale !== targetLocale || !window.ymaps;

    if (currentMapLocale === targetLocale && map) {
        refreshUserMarkerCaption();
        return Promise.resolve();
    }

    var preservedState = destroyMapInstance();

    return loadYandexMapsApi(shouldReloadApi)
        .then(function () {
            init(preservedState);
        })
        .catch(function (e) {
            console.error("Map language sync error:", e);
        });
}

function placeMatchesCategory(place, category) {
    var cat = place.category;
    var cats = Array.isArray(cat) ? cat : [cat];
    var group = CATEGORY_GROUPS[category];

    if (group) {
        for (var i = 0; i < group.length; i++) {
            if (cats.indexOf(group[i]) !== -1) return true;
        }
        return false;
    }

    return cats.indexOf(category) !== -1 || cat === category;
}

function isVyatsuBuilding(place) {
    if (!place || !place.category) return false;

    var cats = Array.isArray(place.category) ? place.category : [place.category];
    if (cats.indexOf("vyatsu") === -1) return false;

    var name = getLocalizedText(place.name, "ru");
    var match = name.match(/корпус\s*№?\s*(\d+)/i);
    if (!match) return false;

    var num = parseInt(match[1], 10);
    return num >= 1 && num <= 23;
}

function renderVyatsuExtraBlocks(place) {
    var container = document.getElementById("vyatsuExtraBlocks");
    if (!container) return;

    container.innerHTML = "";

    if (!isVyatsuBuilding(place)) return;

    container.className = "vyatsu-extra-blocks";

    var eatBlock = document.createElement("div");
    eatBlock.className = "vyatsu-block";
    eatBlock.innerHTML =
        '<h3 class="vyatsu-block-title">' + t("whereToEat") + "</h3>";
    eatBlock.appendChild(createNearbyCarousel(VYATSU_NEARBY_FOOD));
    container.appendChild(eatBlock);

    var printBlock = document.createElement("div");
    printBlock.className = "vyatsu-block";
    printBlock.innerHTML =
        '<h3 class="vyatsu-block-title">' + t("whereToPrint") + "</h3>";
    printBlock.appendChild(createNearbyCarousel(VYATSU_NEARBY_PRINT));
    container.appendChild(printBlock);
}

function createNearbyCarousel(items) {
    var wrapper = document.createElement("div");
    wrapper.className = "nearby-carousel";

    var prev = document.createElement("button");
    prev.type = "button";
    prev.className = "nearby-carousel-arrow";
    prev.setAttribute("aria-label", "Previous");
    prev.innerHTML = '<i class="ph-light ph-caret-left" aria-hidden="true"></i>';

    var carousel = document.createElement("div");
    carousel.className = "h-scroll-carousel";

    var next = document.createElement("button");
    next.type = "button";
    next.className = "nearby-carousel-arrow";
    next.setAttribute("aria-label", "Next");
    next.innerHTML = '<i class="ph-light ph-caret-right" aria-hidden="true"></i>';

    var loopCount = items.length > 1 ? 3 : 1;

    for (var loop = 0; loop < loopCount; loop++) {
        for (var i = 0; i < items.length; i++) {
            (function (item, baseIndex) {
                var card = document.createElement("div");
                card.className = "nearby-card";
                card.dataset.baseIndex = String(baseIndex);

                var img = document.createElement("img");
                img.src = item.image;
                img.alt = getLocalizedText(item.name);

                var info = document.createElement("div");
                info.className = "nearby-card-info";

                var title = document.createElement("h4");
                title.innerText = getLocalizedText(item.name);

                var type = document.createElement("p");
                type.innerText = getLocalizedText(item.type);

                info.appendChild(title);
                info.appendChild(type);
                card.appendChild(img);
                card.appendChild(info);
                carousel.appendChild(card);
            })(items[i], i);
        }
    }

    wrapper.appendChild(prev);
    wrapper.appendChild(carousel);
    wrapper.appendChild(next);

    setupSnapCarousel(wrapper, carousel, items.length);
    return wrapper;
}

function getCarouselNearestIndex(carousel) {
    var cards = carousel ? carousel.querySelectorAll(".nearby-card") : [];
    if (!cards.length) return 0;

    var carouselRect = carousel.getBoundingClientRect();
    var carouselCenter = carouselRect.left + carouselRect.width / 2;
    var closestIndex = 0;
    var closestDistance = Infinity;

    for (var i = 0; i < cards.length; i++) {
        var rect = cards[i].getBoundingClientRect();
        var center = rect.left + rect.width / 2;
        var distance = Math.abs(center - carouselCenter);
        if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = i;
        }
    }

    return closestIndex;
}

function updateActiveSnapCard(carousel) {
    if (!carousel) return 0;
    var cards = carousel.querySelectorAll(".nearby-card");
    if (!cards.length) return 0;

    var activeIndex = getCarouselNearestIndex(carousel);

    for (var i = 0; i < cards.length; i++) {
        cards[i].classList.toggle("is-active", i === activeIndex);
    }

    return activeIndex;
}

function jumpCarouselToIndex(state, index, smooth) {
    if (!state.cards.length || !state.cards[index]) return;

    state.currentIndex = index;
    state.viewport.scrollTo({
        left: state.cards[index].offsetLeft,
        behavior: smooth ? "smooth" : "auto"
    });

    updateActiveSnapCard(state.viewport);
}

function normalizeLoopedCarouselPosition(state) {
    if (!state || state.itemCount <= 1) return;

    var nearestIndex = updateActiveSnapCard(state.viewport);
    var adjustedIndex = nearestIndex;

    if (nearestIndex < state.itemCount) {
        adjustedIndex = nearestIndex + state.itemCount;
    } else if (nearestIndex >= state.itemCount * 2) {
        adjustedIndex = nearestIndex - state.itemCount;
    }

    state.currentIndex = adjustedIndex;

    if (adjustedIndex !== nearestIndex) {
        jumpCarouselToIndex(state, adjustedIndex, false);
    }
}

function stepCarousel(state, direction) {
    if (!state || !state.cards.length) return;

    if (state.itemCount <= 1) {
        jumpCarouselToIndex(state, 0, true);
        return;
    }

    normalizeLoopedCarouselPosition(state);

    var nextIndex = state.currentIndex + direction;
    if (nextIndex < 0) nextIndex = state.cards.length - 1;
    if (nextIndex >= state.cards.length) nextIndex = 0;
    jumpCarouselToIndex(state, nextIndex, true);
}

function setCarouselPaused(state, paused) {
    if (!state) return;
    state.isPaused = paused;
}

function setupSnapCarousel(wrapper, carousel, itemCount) {
    if (!wrapper || !carousel || carousel.dataset.snapReady === "1") return;
    carousel.dataset.snapReady = "1";

    var state = {
        wrapper: wrapper,
        viewport: carousel,
        cards: Array.prototype.slice.call(carousel.querySelectorAll(".nearby-card")),
        itemCount: itemCount,
        currentIndex: itemCount > 1 ? itemCount : 0,
        isPaused: false,
        scrollTimer: null,
        autoTimer: null
    };

    var prev = wrapper.querySelector(".nearby-carousel-arrow:first-child");
    var next = wrapper.querySelector(".nearby-carousel-arrow:last-child");

    if (prev) {
        prev.disabled = itemCount <= 1;
        prev.addEventListener("click", function () {
            stepCarousel(state, -1);
        });
    }

    if (next) {
        next.disabled = itemCount <= 1;
        next.addEventListener("click", function () {
            stepCarousel(state, 1);
        });
    }

    carousel.addEventListener("scroll", function () {
        updateActiveSnapCard(carousel);
        clearTimeout(state.scrollTimer);
        state.scrollTimer = setTimeout(function () {
            normalizeLoopedCarouselPosition(state);
        }, 120);
    }, { passive: true });

    wrapper.addEventListener("pointerenter", function (event) {
        if (event.pointerType !== "touch") setCarouselPaused(state, true);
    });

    wrapper.addEventListener("pointerleave", function (event) {
        if (event.pointerType !== "touch") setCarouselPaused(state, false);
    });

    carousel.addEventListener("touchstart", function () {
        setCarouselPaused(state, true);
    }, { passive: true });

    carousel.addEventListener("touchend", function () {
        setTimeout(function () {
            setCarouselPaused(state, false);
        }, 900);
    }, { passive: true });

    if (itemCount > 1) {
        state.autoTimer = setInterval(function () {
            if (!document.body.contains(state.wrapper)) {
                clearInterval(state.autoTimer);
                state.autoTimer = null;
                return;
            }
            if (state.isPaused || document.hidden) return;
            stepCarousel(state, 1);
        }, 3400);
    }

    setTimeout(function () {
        jumpCarouselToIndex(state, state.currentIndex, false);
        updateActiveSnapCard(carousel);
    }, 0);
}

function setText(id, text) {
    var el = document.getElementById(id);
    if (el) el.innerText = text;
}

function applyTranslations() {
    document.documentElement.lang = currentLang;
    document.title = t("pageTitle");

    var i18nNodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < i18nNodes.length; i++) {
        var node = i18nNodes[i];
        var key = node.getAttribute("data-i18n");
        if (key) node.innerText = t(key);
    }

    var placeholderNodes = document.querySelectorAll("[data-i18n-placeholder]");
    for (var j = 0; j < placeholderNodes.length; j++) {
        var pNode = placeholderNodes[j];
        var pKey = pNode.getAttribute("data-i18n-placeholder");
        if (pKey) pNode.placeholder = t(pKey);
    }

    var ariaNodes = document.querySelectorAll("[data-i18n-aria]");
    for (var k = 0; k < ariaNodes.length; k++) {
        var aNode = ariaNodes[k];
        var aKey = aNode.getAttribute("data-i18n-aria");
        if (aKey) aNode.setAttribute("aria-label", t(aKey));
    }

    if (currentScreen === "categoryResults" && currentCategory) {
        var title = document.getElementById("categoryResultsTitle");
        if (title) title.innerText = getCategoryLabel(currentCategory);
    }

    if (currentScreen === "routePlanScreen" && window._activeRoutePlanId) {
        updateRoutePlanScreenTitle(window._activeRoutePlanId);
    }
}

function toggleLanguage() {
    var index = LANGS.indexOf(currentLang);
    currentLang = LANGS[(index + 1) % LANGS.length];
    localStorage.setItem("lang", currentLang);
    applyTranslations();
    updateLanguageButton();
    loadAllRatings();
    renderAboutProjectContent();
    syncMapLanguage();

    if (currentSearchQuery) {
        renderSearchResults(currentSearchQuery);
    } else if (currentScreen === "mainMenu") {
        renderMainPopularPlaces();
    } else if (currentScreen === "interesting") {
        showInterestingPlaces();
    } else if (currentScreen === "categoryResults" && currentCategory) {
        showCategory(currentCategory, null, currentCategoryOwner);
    } else if (currentScreen === "placeDetails" && window._currentPlaceDetails) {
        openPlaceDetails(window._currentPlaceDetails, true);
    }
}

function updateLanguageButton() {
    var btn = document.getElementById("langToggle");
    var index = LANGS.indexOf(currentLang);
    var nextLabel = LANGS[(index + 1) % LANGS.length].toUpperCase();

    if (btn) btn.innerText = nextLabel;

    var mobileBtn = document.getElementById("mobileLangToggle");
    if (mobileBtn) mobileBtn.innerText = nextLabel;
}

function setupPanelInteractions() {
    var panel = getPanelElement();
    var handle = document.getElementById("menuHandle");
    if (!panel || !handle || handle.dataset.ready === "1") return;

    handle.dataset.ready = "1";

    handle.addEventListener("click", function () {
        if (!isMobile() || !panelState.routeControlEnabled) return;
        if (panelState.isHidden) openMenu();
        else closeMenu("manual");
    });

    var dragState = null;

    function finishDrag(clientY) {
        if (!dragState) return;

        var hiddenOffset = panel.offsetHeight + 24;
        var deltaY = clientY - dragState.startY;
        var finalOffset = Math.max(0, Math.min(hiddenOffset, dragState.startOffset + deltaY));
        var shouldHide = finalOffset > hiddenOffset * 0.42;

        panel.classList.remove("panel-dragging");
        panel.style.transform = "";
        dragState = null;

        if (shouldHide) closeMenu("manual");
        else openMenu();
    }

    handle.addEventListener("pointerdown", function (event) {
        if (!isMobile() || !panelState.routeControlEnabled) return;

        var hiddenOffset = panel.offsetHeight + 24;
        dragState = {
            startY: event.clientY,
            startOffset: panelState.isHidden ? hiddenOffset : 0
        };

        handle.setPointerCapture(event.pointerId);
        panel.classList.remove("panel-hidden");
        panel.classList.add("panel-dragging");
    });

    handle.addEventListener("pointermove", function (event) {
        if (!dragState) return;

        var hiddenOffset = panel.offsetHeight + 24;
        var deltaY = event.clientY - dragState.startY;
        var nextOffset = Math.max(0, Math.min(hiddenOffset, dragState.startOffset + deltaY));
        panel.style.transform = "translateY(" + nextOffset + "px)";
    });

    handle.addEventListener("pointerup", function (event) {
        finishDrag(event.clientY);
    });

    handle.addEventListener("pointercancel", function (event) {
        finishDrag(event.clientY);
    });

    window.addEventListener("resize", syncPanelUiState, { passive: true });
}

window.addEventListener("load", function () {
    applyTranslations();
    updateLanguageButton();
    console.log("page loaded");
    startCategoriesCarousel();
    rememberListHome(document.getElementById("placesList"));
    rememberListHome(document.getElementById("interestingList"));
    rememberListHome(document.getElementById("categoryResultsList"));
    loadAllRatings();
    loadPlanRatings();
    currentScreen = "mainMenu";
    setBackButtonVisible(false);
    renderMainPopularPlaces();
    startHeroPlacesCarousel();
    syncSearchClearButton();
    syncPanelUiState();
    setupPanelInteractions();

    try {

        syncMapLanguage()
            .catch(function (e) {
                console.warn("ymaps is not available at load time", e);
            });

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

    return "images/default.jpg";

}

function setBackButtonVisible(visible) {
    var button = document.getElementById("backButton");
    if (!button) return;
    button.classList.toggle("is-visible", !!visible);
    button.setAttribute("aria-hidden", visible ? "false" : "true");
}

function getNavIdForScreen(screenId) {
    if (screenId === "routePlanScreen") return "nav-routes";
    if (screenId === "categoryResults") {
        return currentCategoryOwner === "students" ? "nav-students" : "nav-categories";
    }
    if (screenId === "placeDetails") {
        if (prevScreen === "routePlanScreen" || prevScreen === "routePlanner") return "nav-routes";
        if (prevScreen === "categoryResults") {
            return currentCategoryOwner === "students" ? "nav-students" : "nav-categories";
        }
        if (prevScreen === "interesting") return "nav-interesting";
        if (prevScreen === "aboutProject") return "nav-about";
        if (prevScreen === "students") return "nav-students";
        if (prevScreen === "categories") return "nav-categories";
        return "nav-home";
    }
    if (screenId === "interesting") return "nav-interesting";
    if (screenId === "routePlanner") return "nav-routes";
    if (screenId === "categories") return "nav-categories";
    if (screenId === "students") return "nav-students";
    if (screenId === "aboutProject") return "nav-about";
    return "nav-home";
}

function syncNavigationState(screenId) {
    var activeNavId = getNavIdForScreen(screenId);
    var buttons = document.querySelectorAll(".nav-btn");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.toggle("active", buttons[i].getAttribute("data-nav-key") === activeNavId);
    }
}

function renderAboutProjectContent() {
    var container = document.querySelector("#aboutProject .about-project");
    if (!container) return;
    container.innerHTML =
        '<p><a href="https://t.me/distortvision" target="_blank" rel="noopener noreferrer">Telegram - @distortvision</a></p>';
}

function getPopularPlaces(limit) {
    var result = [];

    for (var i = 0; i < POPULAR_PLACE_IDS.length; i++) {
        var id = POPULAR_PLACE_IDS[i];

        for (var j = 0; j < places.length; j++) {
            if (places[j].id === id) {
                result.push(places[j]);
                break;
            }
        }

        if (limit && result.length >= limit) break;
    }

    return result;
}

function createPlaceCard(place, extraClass) {
    var card = document.createElement("div");
    card.className = "place-card" + (extraClass ? " " + extraClass : "");

    var img = document.createElement("img");
    img.src = getPlaceImage(place);
    img.alt = getLocalizedText(place.name);

    var info = document.createElement("div");
    info.className = "place-info";

    var title = document.createElement("h3");
    title.innerText = getLocalizedText(place.name);

    var address = document.createElement("p");
    address.innerText = getLocalizedText(place.address);

    var description = document.createElement("p");
    description.className = "description";
    description.innerText = getLocalizedText(place.description);

    var rating = document.createElement("span");
    rating.className = "rating";
    rating.innerText = getRatingStars(place._rating ? place._rating.avg : place.rating);

    info.appendChild(title);
    info.appendChild(address);
    info.appendChild(description);
    info.appendChild(rating);

    card.appendChild(img);
    card.appendChild(info);

    card.onclick = function () {
        openPlaceDetails(place);
    };

    card.setAttribute("data-place-id", place.id);

    return card;
}

function renderPlacesInto(container, placeList, emptyText) {
    if (!container) return;

    container.innerHTML = "";

    if (!placeList.length) {
        var empty = document.createElement("p");
        empty.className = "empty-state";
        empty.innerText = emptyText;
        container.appendChild(empty);
        return;
    }

    for (var i = 0; i < placeList.length; i++) {
        container.appendChild(createPlaceCard(placeList[i]));
    }
}

function renderMainPopularPlaces() {
    var list = document.getElementById("placesList");
    if (!list) return;

    renderPlacesInto(
        list,
        getPopularPlaces(8),
        t("popularNotFound")
    );
    list.style.display = "";
    list.classList.add("active");
}

function startHeroPlacesCarousel() {
    var stack = document.getElementById("heroPhotoStack");
    if (!stack) return;

    var slots = stack.querySelectorAll(".hero-image");
    if (slots.length < 2) return;

    var heroPlaces = getPopularPlaces(10);
    var images = heroPlaces
        .map(function(place) {
            return getPlaceImage(place);
        })
        .filter(Boolean);

    if (!images.length) return;

    if (heroPlacesTimer) {
        clearInterval(heroPlacesTimer);
    }

    heroPhotoIndex = 0;
    slots[0].src = images[0];
    slots[0].classList.add("active");
    slots[1].src = images[1 % images.length];
    slots[1].classList.remove("active");

    var activeSlot = 0;

    heroPlacesTimer = setInterval(function() {
        heroPhotoIndex = (heroPhotoIndex + 1) % images.length;
        var nextSlot = activeSlot === 0 ? 1 : 0;

        slots[nextSlot].src = images[heroPhotoIndex];
        slots[nextSlot].classList.add("active");
        slots[activeSlot].classList.remove("active");

        activeSlot = nextSlot;
    }, 3200);
}

// проверка кнопки далее 
function ensurePlanNextButton() {
    try {
        if (!activePlan) return;

        var actions = document.querySelector(".place-actions");
        if (!actions) return;

        var nextBtn = document.getElementById("planNextButton");
        if (!nextBtn) {
            nextBtn = document.createElement("button");
            nextBtn.id = "planNextButton";
            nextBtn.className = "hero-button plan-next-btn";
            actions.appendChild(nextBtn);
        }

        try {
            nextBtn.replaceWith(nextBtn.cloneNode(true));
            nextBtn = document.getElementById("planNextButton");
        } catch (e) {}

        updatePlanNextButton();

        nextBtn.addEventListener("click", function () {
            if (!activePlan) return;

            if (activePlan.index >= activePlan.ids.length - 1) {
                try {
                    var b = document.getElementById("planNextButton");
                    if (b) b.parentNode.removeChild(b);
                } catch (e) {}

                var finishedPlanId = activePlan.planId || planId || null;
                clearRoute();
                showPlanFinishDialog(finishedPlanId);
                activePlan = null;
                return;
            }

            activePlan.index++;
            var nextPlace = activePlan.ids[activePlan.index];
            clearRoute({ preserveJourney: true });
            setRouteJourneyTarget(nextPlace, activePlan.planId);
            openPlaceDetails(nextPlace);
            updatePlanNextButton();
        });
    } catch (e) {
        console.warn(e);
    }
}

// визуал рейтинга
function renderPlaceRatingControls(place) {
    try {
        var container = document.getElementById("placeRating");
        if (!container) return;

        container.innerHTML = "";
        container.className = "place-rating-block";

        if (!place._rating) {
            place._rating = {
                avg: place.rating || 0,
                votes: place.votes || 0
            };
        }

        var avg = place._rating.avg || 0;
        var votes = place._rating.votes || 0;
        var selected = 0;
        var isRated = !!place._rated;

        var header = document.createElement("div");
        header.className = "place-rating-header";

        var label = document.createElement("div");
        label.className = "place-rating-label";
        label.innerText = t("ratingLabel");

        var valueWrap = document.createElement("div");
        valueWrap.className = "place-rating-value";

        var score = document.createElement("div");
        score.className = "place-rating-score";
        score.innerText = votes ? avg.toFixed(1) : "—";

        var starsDisplay = document.createElement("div");
        starsDisplay.className = "place-rating-stars-display";
        starsDisplay.innerText = votes ? getRatingStars(avg).replace(/\s*\([0-9.]+\)/, "") : t("noReviews");

        valueWrap.appendChild(score);
        valueWrap.appendChild(starsDisplay);
        header.appendChild(label);
        header.appendChild(valueWrap);
        container.appendChild(header);

        if (votes) {
            var votesText = document.createElement("div");
            votesText.className = "place-rating-votes";
            votesText.innerText = votes + " " + t("reviewsWord");
            container.appendChild(votesText);
        }

        var starsWrap = document.createElement("div");
        starsWrap.className = "rating-stars-input";
        var starButtons = [];

        for (var s = 1; s <= 5; s++) {
            (function (val) {
                var b = document.createElement("button");
                b.type = "button";
                b.className = "rating-star-btn";
                b.innerText = "☆";
                b.disabled = isRated;

                b.addEventListener("click", function () {
                    if (isRated) return;
                    selected = val;
                    renderStars();
                });

                starButtons.push(b);
                starsWrap.appendChild(b);
            })(s);
        }

        container.appendChild(starsWrap);

        function renderStars() {
            for (var i = 0; i < starButtons.length; i++) {
                starButtons[i].innerText = i < selected ? "★" : "☆";
                starButtons[i].classList.toggle("active", i < selected);
            }
        }

        var submit = document.createElement("button");
        submit.type = "button";
        submit.className = "hero-button";
        submit.style.width = "100%";
        submit.style.marginTop = "4px";

        if (isRated) {
            submit.innerText = t("reviewSent");
            submit.disabled = true;
        } else {
            submit.innerText = t("rate");
        }

        submit.addEventListener("click", function () {
            if (isRated || submit.disabled) return;

            if (selected <= 0) {
                showToast(t("putStars"), "error");
                return;
            }

            submit.disabled = true;
            submit.innerText = t("buildingRoute");

            fetch("/rating/place", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-Client-Id": getClientId()
                },
                body: JSON.stringify({
                    placeId: place.id,
                    name: getLocalizedText(place.name, "ru"),
                    rating: selected,
                    clientId: getClientId()
                })
            })
            .then(function (res) {
                if (res.status === 409) {
                    throw new Error("already_rated");
                }
                if (!res.ok) {
                    throw new Error("request_failed");
                }
                return res.json();
            })
            .then(function (data) {
                if (!data) return;

                place._rating = {
                    avg: data.avg,
                    votes: data.votes
                };
                place._rated = true;

                showToast(t("reviewSent"), "success");
                renderPlaceRatingControls(place);
                refreshVisiblePlacesRatings();

                if (listOwner === "interesting") {
                    showInterestingPlaces();
                }

                if (listOwner === "search") {
                    var input = document.getElementById("searchInput");
                    if (input) searchPlaces(input.value);
                }
            })
            .catch(function (err) {
                submit.disabled = false;
                submit.innerText = t("rate");

                if (err && err.message === "already_rated") {
                    place._rated = true;
                    showToast(t("alreadyRated"), "error");
                    renderPlaceRatingControls(place);
                    return;
                }

                showToast(t("ratingError"), "error");
            });
        });

        container.appendChild(submit);
    } catch (e) {
        console.warn(e);
    }
}

// конец плана
function showPlanFinishDialog(planId) {
    try {
        var overlay = document.createElement("div");
        overlay.className = "plan-finish-overlay";

        var container = document.createElement("div");
        container.className = "plan-finish-dialog";

        var h = document.createElement("h3");
        h.innerText = t("routeCompleted");
        container.appendChild(h);

        var starsWrap = document.createElement("div");
        starsWrap.className = "rating-stars-input";
        var selected = 0;
        var starButtons = [];

        for (var s = 1; s <= 5; s++) {
            (function (val) {
                var btn = document.createElement("button");
                btn.type = "button";
                btn.className = "rating-star-btn";
                btn.innerText = "☆";
                btn.onclick = function () {
                    selected = val;
                    renderStars();
                };
                starButtons.push(btn);
                starsWrap.appendChild(btn);
            })(s);
        }

        container.appendChild(starsWrap);

        function renderStars() {
            for (var i = 0; i < starButtons.length; i++) {
                starButtons[i].innerText = i < selected ? "★" : "☆";
                starButtons[i].classList.toggle("active", i < selected);
            }
        }

        function closeDialog() {
            overlay.classList.add("modal-closing");
            setTimeout(function () {
                if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
            }, 220);
        }

        var foot = document.createElement("div");
        foot.className = "plan-finish-actions";

        var ok = document.createElement("button");
        ok.className = "hero-button";
        ok.innerText = t("sendReview");
        ok.onclick = function () {
            if (selected <= 0) {
                showToast(t("putStars"), "error");
                return;
            }

            ok.disabled = true;

            fetch("/rating/plan", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-Client-Id": getClientId()
                },
                body: JSON.stringify({
                    planId: planId,
                    rating: selected,
                    clientId: getClientId()
                })
            })
            .then(function (res) {
                if (res.status === 409) throw new Error("already_rated");
                if (!res.ok) throw new Error("request_failed");
                return res.json();
            })
            .then(function (data) {
                if (!data) return;

                plansData[planId].rating = {
                    avg: data.avg,
                    votes: data.votes
                };

                updateRoutePlanRating(planId);
                closeDialog();
                activePlan = null;
                clearRoute();
                switchScreen("placeDetails", "routePlanner");
                currentScreen = "routePlanner";
                prevScreen = "routePlanner";
                showToast(t("thanksReview"), "success");

                if (currentScreen === "routePlanner") {
                    openRoutePlanner();
                }
            })
            .catch(function (err) {
                ok.disabled = false;

                if (err && err.message === "already_rated") {
                    showToast(t("alreadyRated"), "error");
                    return;
                }

                showToast(t("ratingError"), "error");
            });
        };

        var cancel = document.createElement("button");
        cancel.className = "secondary-button";
        cancel.innerText = t("close");
        cancel.onclick = function () {
            activePlan = null;
            clearRoute();
            currentScreen = "routePlanner";
            prevScreen = "routePlanner";
            closeDialog();
            switchScreen("placeDetails", "routePlanner");
        };

        foot.appendChild(ok);
        foot.appendChild(cancel);
        container.appendChild(foot);
        overlay.appendChild(container);
        overlay.onclick = function (e) {
            if (e.target === overlay) cancel.onclick();
        };

        document.body.appendChild(overlay);
    } catch (e) {
        console.warn(e);
    }
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
var currentSearchQuery = "";
var currentScreen = "mainMenu";
var currentCategoryOwner = "categories";
var heroPlacesTimer = null;
var heroPhotoIndex = 0;
var POPULAR_PLACE_IDS = [57, 56, 55, 53, 52, 51, 50, 47, 46, 45, 42, 41, 38, 39, 37, 36, 18, 22, 26, 27, 33, 35, 34];
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
    try {
        var btn = document.getElementById("planNextButton");
        if (!btn) return;

        if (!activePlan) {
            btn.style.display = "none";
            return;
        }

        btn.style.display = "inline-flex";

        if (activePlan.index >= activePlan.ids.length - 1) {
            btn.innerText = t("finishJourney");
        } else {
            btn.innerText = t("next");
        }
    } catch (e) {
        console.warn(e);
    }
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
        resetRouteJourneyState();
        setRouteJourneyTarget(list[0], planId);
        screenStack.push("routePlanner");
        openPlaceDetails(list[0]);
        setTimeout(function () {
            try {
                ensurePlanNextButton();
            } catch (e) {
                console.warn(e);
            }
        }, 400);
    } catch (e) {
        console.warn(e);
    }
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
        alert(t("geoNotSupported"));
        return;
    }
    if (watchId !== null) return;

    watchId = navigator.geolocation.watchPosition(function(pos) {
        var coords = normalizeCoords([pos.coords.latitude, pos.coords.longitude]);

        if (!userMarker) {
            userMarker = new ymaps.Placemark(coords, { iconCaption: t("youAreHere") }, { preset: "islands#circleIcon", iconColor: "#3b82f6" });
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

        evaluateRouteArrival(coords, pos.coords.accuracy);
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
function clearRoute(options) {
    options = options || {};

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

    if (!options.preserveJourney) {
        resetRouteJourneyState();
    }

    if (!options.keepMenuControl) {
        setRouteMenuControlEnabled(false);
        openMenu();
    }
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
function rememberListHome(list) {
    if (!list || !list.id || listHomeRegistry[list.id]) return;

    listHomeRegistry[list.id] = {
        parent: list.parentNode,
        nextSibling: list.nextSibling
    };
}

function restoreListHome(list) {
    if (!list || !list.id) return;

    var home = listHomeRegistry[list.id];
    if (!home || !home.parent || list.parentNode === home.parent) return;

    if (home.nextSibling && home.nextSibling.parentNode === home.parent) {
        home.parent.insertBefore(list, home.nextSibling);
    } else {
        home.parent.appendChild(list);
    }
}

function showListBelowButton(list, button) {
    if (!list) list = document.getElementById('placesList');
    rememberListHome(list);
    try {
        if (button && button.parentNode) {
            try {
                button.parentNode.insertBefore(list, button.nextSibling);
            } catch (e) {
                var menu = document.querySelector('.content-panel');
                if (menu && list.parentNode !== menu) menu.appendChild(list);
            }
        } else {
            var menu = document.querySelector('.content-panel');
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

function init(options) {
    options = options || {};

    map = new ymaps.Map("map", {
        center: options.center || MAP_DEFAULT_STATE.center,
        zoom: typeof options.zoom === "number" ? options.zoom : MAP_DEFAULT_STATE.zoom,
        controls: []
    });
    console.log("map initialized");
    renderAboutProjectContent();
    syncNavigationState(currentScreen);
    setBackButtonVisible(false);
    refreshUserMarkerCaption();

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
window.openAboutProject = openAboutProject;
window.returnToCategoryOwner = returnToCategoryOwner;
window.setupRouteButton = setupRouteButton;
window.switchScreen = switchScreen;
window.showPhotos = showPhotos;
window.startTracking = startTracking;
window.stopTracking = stopTracking;
window.openStudents = openStudents;
window.clearSearchInput = clearSearchInput;

function syncSearchClearButton() {
    var input = document.getElementById("searchInput");
    var button = document.getElementById("searchClearButton");
    if (!input || !button) return;

    button.classList.toggle("is-visible", !!input.value.trim());
}

function setMainMenuSearchState(active) {
    var defaultContent = document.getElementById("mainMenuDefaultContent");
    var results = document.getElementById("searchResultsList");
    if (defaultContent) defaultContent.style.display = active ? "none" : "block";
    if (results) results.style.display = active ? "block" : "none";
}

function resetSearchState(clearInput) {
    currentSearchQuery = "";
    searchOriginScreen = null;
    if (listOwner === "search") listOwner = null;
    var input = document.getElementById("searchInput");
    if (input && clearInput) input.value = "";
    var results = document.getElementById("searchResultsList");
    if (results) {
        results.classList.remove("active");
        results.innerHTML = "";
    }
    setMainMenuSearchState(false);
    syncSearchClearButton();
}

function clearSearchInput() {
    if (currentScreen !== "mainMenu") {
        switchScreen(currentScreen, "mainMenu");
        currentScreen = "mainMenu";
    }

    resetSearchState(true);
    renderMainPopularPlaces();
    syncNavigationState("mainMenu");

    var input = document.getElementById("searchInput");
    if (input) input.focus();
}

function renderSearchResults(query) {
    var normalized = (query || "").trim().toLowerCase();
    var results = document.getElementById("searchResultsList");
    if (!results) return;

    if (!normalized) {
        resetSearchState(false);
        renderMainPopularPlaces();
        syncNavigationState("mainMenu");
        return;
    }

    currentSearchQuery = normalized;
    searchOriginScreen = "mainMenu";
    listOwner = "search";
    listOpen = true;
    clearRoute();
    setMainMenuSearchState(true);
    results.innerHTML = "";

    var found = false;
    for (var i = 0; i < places.length; i++) {
        var p = places[i];
        var text = (
            getLocalizedText(p.name) + " " +
            getLocalizedText(p.address) + " " +
            getLocalizedText(p.description)
        ).toLowerCase();
        var cat = p.category;
        if (Array.isArray(cat)) cat = cat.join(" ");

        if (text.indexOf(normalized) !== -1 || (cat && cat.toLowerCase().indexOf(normalized) !== -1)) {
            found = true;
            results.appendChild(createPlaceCard(p));
        }
    }

    if (!found) {
        var empty = document.createElement("p");
        empty.className = "empty-state";
        empty.innerText = t("nothingFound");
        results.appendChild(empty);
    }

    results.classList.add("active");
    currentScreen = "mainMenu";
    syncNavigationState(currentScreen);
}

// поиск мест
function searchPlaces(query) {
    var normalized = (query || "").trim();
    syncSearchClearButton();

    if (!normalized) {
        resetSearchState(false);
        renderMainPopularPlaces();
        return;
    }

    if (currentScreen !== "mainMenu") {
        switchScreen(currentScreen, "mainMenu");
        currentScreen = "mainMenu";
    }

    renderSearchResults(normalized);
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
        card.innerHTML = "<img src='" + getPlaceImage(place) + "'>" +
            "<h3>" + getLocalizedText(place.name) + "</h3>" +
            "<p>" + getLocalizedText(place.address) + "</p>" +
            "<p class='description'>" + getLocalizedText(place.description) + "</p>" +
            "<span class='rating'>" + getRatingStars(place._rating ? place._rating.avg : place.rating) + "</span>";
        (function(pp){ card.onclick = function(){ openPlaceDetails(pp); }; })(place);
        list.appendChild(card);
    }
    void list.offsetWidth;
    list.classList.add('active');
    currentScreen = 'list';

}

// список для планов
function updateRoutePlanScreenTitle(planId) {
    var titleMap = {
        hour: t("routeHour"),
        kids: t("routeKids"),
        walking: t("routeWalking"),
        culture: t("routeCulture"),
        photo: t("routePhoto")
    };

    var title = document.getElementById("routePlanScreenTitle");
    if (title) {
        title.innerText = titleMap[planId] || (plansData[planId] && plansData[planId].title) || t("routesTitle");
    }
}

function openRoutePlan(planId) {
    var plan = plansData[planId];
    if (!plan) return;

    window._activeRoutePlanId = planId;

    switchScreen(currentScreen, "routePlanScreen");
    currentScreen = "routePlanScreen";
    setBackButtonVisible(true);
    updateRoutePlanScreenTitle(planId);

    var container = document.getElementById('routePlanDetails');
    if (!container) return;

    container.innerHTML = '';
    container.style.display = 'block';

    var ratingBlock =
        document.createElement("p");

    ratingBlock.id = "planRating";

    var pd =
        plan.rating;

    if (!pd.votes) {
        ratingBlock.innerText = t("ratingNoReviews");
    } else {
        ratingBlock.innerText =
            t("ratingLabel") +
            ": " +
            pd.avg.toFixed(1) +
            " (" +
            pd.votes +
            " " +
            t("reviewsWord") +
            ")";
    }

    container.appendChild(ratingBlock);
    var ids = plan.places || [];
    if (!ids.length) {
        var p = document.createElement("p");
        p.innerText = t("emptyRoutePlan");
        container.appendChild(p);
        return;
    }

    var buildBtn = document.createElement("button");
    buildBtn.className = "hero-button route-build-button";
    buildBtn.innerText = t("buildRoute");
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

        img.src = getPlaceImage(placeObj);
        var meta = document.createElement('div');
        var hh = document.createElement("h4");
        hh.innerText = getLocalizedText(placeObj.name);
        hh.style.margin = "0 0 6px 0";
        hh.style.fontSize = "15px";
        var dd = document.createElement("p");
        dd.innerText = getLocalizedText(placeObj.address);
        dd.style.margin = "0";
        dd.style.fontSize = "13px";
        dd.className = "description";
        meta.appendChild(hh);
        meta.appendChild(dd);
        content.appendChild(img);
        content.appendChild(meta);
        var rmeta = document.createElement("div");
        rmeta.className = "route-meta";
        var dist = document.createElement("div");
        dist.innerText = "— " + t("km");
        dist.className = "route-dist";
        var time = document.createElement("div");
        time.innerText = "— " + t("min");
        time.className = "route-time";
        rmeta.appendChild(dist); rmeta.appendChild(time);

        card.appendChild(timeline);
        card.appendChild(content);
        card.appendChild(rmeta);
        (function(p){ card.onclick = function(){ openPlaceDetails(p); }; })(placeObj);
        container.appendChild(card);
    }
}

function getCategoryLabel(category) {
    var labels = {
        all: t("showAll"),
        tradecenters: t("tradecenters"),
        food: t("food"),
        nature: t("nature"),
        water: t("water"),
        cave: t("cave"),
        spring: t("spring"),
        history: t("history"),
        museums: t("museums"),
        park: t("park"),
        kids: t("kids"),
        print: t("print"),
        educ: t("educ"),
        vyatsu: t("campus"),
        dorms: t("dorms")
    };

    return labels[category] || category;
}

function getPlacesByCategory(category) {
    if (category === "all") {
        return places.slice();
    }

    return places.filter(function (place) {
        return placeMatchesCategory(place, category);
    });
}

function returnToCategoryOwner() {
    var target = currentCategoryOwner === "students" ? "students" : "categories";
    currentCategory = null;
    listOpen = false;
    listOwner = null;
    switchScreen(currentScreen, target);
    currentScreen = target;
}

function showCategory(category, button, owner) {
    clearRoute();
    removeInlineLists();

    currentCategory = category;
    currentCategoryOwner = owner || "categories";
    listOwner = currentCategoryOwner;
    listOpen = true;

    var title = document.getElementById("categoryResultsTitle");
    if (title) {
        title.innerText = getCategoryLabel(category);
    }

    var list = document.getElementById("categoryResultsList");
    renderPlacesInto(
        list,
        getPlacesByCategory(category),
        t("placesNotFound")
    );

    switchScreen(currentScreen, "categoryResults");
    setBackButtonVisible(true);
    currentScreen = "categoryResults";
}

function getRatingStars(rating) {
    if (rating === 0 || rating === undefined || rating === null) {
        return t("noReviews");
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

    if (currentScreen === "routePlanScreen") {
        switchScreen("routePlanScreen", "routePlanner");
        currentScreen = "routePlanner";
        return;
    }

    if (currentScreen === "categoryResults") {
        returnToCategoryOwner();
        return;
    }

    if (currentScreen === "aboutProject") {
        openMainMenu();
        return;
    }

    if (currentScreen === "placeDetails") {
        clearRoute();
        if (prevListOwnerState === "search" && currentSearchQuery) {
            switchScreen("placeDetails", "mainMenu");
            currentScreen = "mainMenu";
            renderSearchResults(currentSearchQuery);
            return;
        }

        var target = prevScreen || "categories";
        if (target === "mainMenu") {
            openMainMenu();
            return;
        }

        switchScreen("placeDetails", target);
        currentScreen = target;
        syncNavigationState(currentScreen);
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
        openMainMenu();
        return;
    }

    if (currentScreen === "mainMenu") {
        setBackButtonVisible(false);

        return;
    }
}
function openMainMenu() {
    clearRoute();
    resetSearchState(true);
    currentCategory = null;
    listOwner = null;
    listOpen = false;
    removeInlineLists("mainMenu");
    navigate('mainMenu');
    setBackButtonVisible(false);
    restoreListHome(document.getElementById("placesList"));
    renderMainPopularPlaces();
    var searchWrapper = document.getElementById("searchWrapper");
    if (searchWrapper) searchWrapper.style.display = "block";

}

function openCategories() {
    clearRoute();
    resetSearchState(true);
    currentCategory = null;
    currentCategoryOwner = "categories";
    navigate('categories');

}

function openStudents() {
    clearRoute();
    resetSearchState(true);
    currentCategory = null;
    currentCategoryOwner = "students";
    navigate('students');

}

function openAboutProject() {
    clearRoute();
    resetSearchState(true);
    renderAboutProjectContent();
    navigate('aboutProject');
}

function openInterestingPlaces() {
    clearRoute();
    resetSearchState(true);
    navigate('interesting');
    showInterestingPlaces();
}

function showInterestingPlaces() {
    clearRoute();

    var list = document.getElementById("interestingList");
    if (!list) return;

    listOwner = "interesting";
    listOpen = true;

    renderPlacesInto(list, getPopularPlaces(), t("popularNotFound"));
    list.classList.add("active");
}

function openRoutePlanner() {
    clearRoute();
    resetSearchState(true);
    navigate('routePlanner');
    var details = document.getElementById('routePlanDetails');
    if (details) {
        details.innerHTML = "";
        details.style.display = 'none';
    }
    listOpen = false;
    listOwner = null;

}

function openPlaceDetails(place, skipNavigation) {
    window._currentPlaceDetails = place;

    var from = currentScreen || "categories";
    screenStack = [];

    if (from === "list") {
        prevScreen = listOwner || "categories";
    } else {
        prevScreen = from;
    }

    try {
        var listEl = document.getElementById("placesList");
        if (listEl) {
            prevListOpenState = listEl.classList.contains("active");
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
                    if (el.style.display !== "none" && el.classList.contains("active")) {
                        prevVisibleInlines.push(el);
                    }
                    hideList(el);
                } catch (e) {}
            }
        } catch (e) {}
    } catch (e) {}

    if (!skipNavigation) {
        try {
            switchScreen(prevScreen, "placeDetails");
        } catch (e) {
            console.warn(e);
        }
    }

    document.getElementById("placeTitle").innerText = getLocalizedText(place.name);

    document.getElementById("placeDescription").innerText =
        getLocalizedText(place.description_full) ||
        getLocalizedText(place.description) ||
        "";

    showPhotos(place);
    setupRouteButton(place);

    try {
        renderPlaceRatingControls(place);
    } catch (e) {}

    try {
        ensurePlanNextButton();
    } catch (e) {}

    try {
        renderVyatsuExtraBlocks(place);
    } catch (e) {}

    currentScreen = "placeDetails";

    fetch("/rating/place/" + encodeURIComponent(place.id), {
        headers: {
            "X-Client-Id": getClientId()
        }
    })
    .then(function (res) {
        if (!res.ok) {
            console.warn("Rating load failed:", res.status);
            return null;
        }
        return res.json();
    })
    .then(function (data) {
        if (!data) return;

        place._rating = {
            avg: data.avg,
            votes: data.votes
        };

        if (data.userRated) {
            place._rated = true;
        }

        renderPlaceRatingControls(place);
    })
    .catch(function (err) {
        console.warn("Rating load error:", err);
    });
}

function showPhotos(place) {
    var container = document.getElementById("photoCarousel");
    if (!container) return;

    container.innerHTML = "";

    if (carouselTimer) {
        clearInterval(carouselTimer);
        carouselTimer = null;
    }

    var images =
        place.images && place.images.length
            ? place.images
            : (place.image ? [place.image] : []);

    if (images.length === 0) return;

    var currentSlideIndex = 0;

    function createPhosphorIcon(iconClass) {
        var icon = document.createElement("i");
        icon.className = "ph-light " + iconClass;
        icon.setAttribute("aria-hidden", "true");
        return icon;
    }

    var track = document.createElement("div");
    track.className = "carousel-track";
    container.appendChild(track);

    function goToSlide(index, animate) {
        if (index < 0) index = images.length - 1;
        if (index >= images.length) index = 0;
        currentSlideIndex = index;

        track.style.transition = animate === false
            ? "none"
            : "transform .45s cubic-bezier(.22, 1, .36, 1)";
        track.style.transform = "translateX(-" + (index * 100) + "%)";

        if (dotsWrap) {
            var dots = dotsWrap.querySelectorAll(".carousel-dot");
            for (var d = 0; d < dots.length; d++) {
                dots[d].classList.toggle("active", d === index);
            }
        }
    }

    function nextSlide() {
        goToSlide(currentSlideIndex + 1);
    }

    function prevSlide() {
        goToSlide(currentSlideIndex - 1);
    }

    for (var i = 0; i < images.length; i++) {
        var img = document.createElement("img");
        img.src = images[i];
        img.alt = getLocalizedText(place.name);
        img.style.cursor = "pointer";
        img.onclick = (function (idx) {
            return function () {
                openPhotoModal(images, idx);
            };
        })(i);
        track.appendChild(img);
    }

    var dotsWrap = null;

    if (images.length > 1) {
        var left = document.createElement("div");
        left.className = "carousel-arrow left";
        left.innerHTML = "‹";
        left.onclick = prevSlide;
        container.appendChild(left);

        var right = document.createElement("div");
        right.className = "carousel-arrow right";
        right.innerHTML = "›";
        right.onclick = nextSlide;
        container.appendChild(right);

        left.textContent = "";
        left.appendChild(createPhosphorIcon("ph-caret-left"));
        right.textContent = "";
        right.appendChild(createPhosphorIcon("ph-caret-right"));

        dotsWrap = document.createElement("div");
        dotsWrap.className = "carousel-dots";

        for (var j = 0; j < images.length; j++) {
            (function (idx) {
                var dot = document.createElement("div");
                dot.className = "carousel-dot" + (idx === 0 ? " active" : "");
                dot.onclick = function () {
                    goToSlide(idx);
                };
                dotsWrap.appendChild(dot);
            })(j);
        }

        container.appendChild(dotsWrap);

        var touchStartX = 0;
        var touchDeltaX = 0;

        container.addEventListener("touchstart", function (e) {
            touchStartX = e.touches[0].clientX;
            touchDeltaX = 0;
        }, { passive: true });

        container.addEventListener("touchmove", function (e) {
            touchDeltaX = e.touches[0].clientX - touchStartX;
        }, { passive: true });

        container.addEventListener("touchend", function () {
            if (Math.abs(touchDeltaX) > 40) {
                if (touchDeltaX < 0) nextSlide();
                else prevSlide();
            }
        });

        carouselTimer = setInterval(nextSlide, 4000);
    }

    goToSlide(0, false);
}

function setupRouteButton(place) {

    var button =
        document.getElementById("routeButton");

    if (!button) return;

    button.onclick = function () {
        if (!navigator.geolocation) {
            alert(t("geoNotSupported"));
            return;
        }

        button.disabled = true;
        var originalText = button.innerText;
        button.innerText = t("buildingRoute");

        var geoSuccess = function(pos) {
            var userCoords = [pos.coords.latitude, pos.coords.longitude];
            userCoords = normalizeCoords(userCoords);
            var destCoords = normalizeCoords(place.coords);
            console.log('userCoords', userCoords, 'place.coords', destCoords);

            try {
                var dist = haversineDistance(userCoords, destCoords);
                console.log('distance meters:', dist);
                if (dist < 50) {
                    clearRoute({ preserveJourney: true, keepMenuControl: true });
                    console.log('Points are very close — skipping routing.');
                    var markPlace = new ymaps.Placemark(destCoords, { hintContent: getLocalizedText(place.name) });
                    map.geoObjects.add(markPlace);
                    lastMarkers.push(markPlace);
                    map.setCenter(destCoords, 14, { duration: 600 });
                    setRouteJourneyTarget(place, activePlan ? activePlan.planId : null);
                    routeJourneyState.arrivedByPlace[place.id] = true;
                    setRouteMenuControlEnabled(true);
                    openMenu();
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
                clearRoute({ preserveJourney: true, keepMenuControl: true });
                map.geoObjects.add(route);
                lastRoute = route;
                var wayPoints = null;
                setTimeout(function () {
                    try {
                        wayPoints =
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
                setRouteJourneyTarget(place, activePlan ? activePlan.planId : null);
                setRouteMenuControlEnabled(true);
                closeMenu("route-build");
                try {
                    if (wayPoints && wayPoints.get && wayPoints.get(1)) {
                        wayPoints.get(1).properties.set("iconCaption", getLocalizedText(place.name));
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
                            clearRoute({ preserveJourney: true, keepMenuControl: true });
                            var markUserF = new ymaps.Placemark(userCoords, { iconCaption: t("youAreHere") });
                            var markPlaceF = new ymaps.Placemark(destCoords, { hintContent: getLocalizedText(place.name) });
                            map.geoObjects.add(markUserF);
                            map.geoObjects.add(markPlaceF);
                            lastMarkers.push(markUserF);
                            lastMarkers.push(markPlaceF);
                            try { startTracking(true); } catch (e) {}
                            setRouteJourneyTarget(place, activePlan ? activePlan.planId : null);
                            setRouteMenuControlEnabled(true);
                            closeMenu("route-build");
                            try {
                                map.setBounds([userCoords, destCoords], { checkZoomRange: true, duration: 600 });
                            } catch (e) {
                                map.setCenter(destCoords, 12, { duration: 600 });
                            }
                            button.disabled = false; button.innerText = originalText;
                        } catch (e) {
                            console.error('final fallback failed', e, err, err2, err3);
                            alert(t("routeBuildError"));
                            button.disabled = false; button.innerText = originalText;
                        }
                    });
                });
            });
        };

        var geoError = function(err) {
            console.warn('Geolocation error', err);
            alert(t("geoError"));
            try { clearRoute(); } catch (e) {}
            var dest = normalizeCoords(place.coords);
            var mark = new ymaps.Placemark(dest, { hintContent: getLocalizedText(place.name) });
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
    var inlineList = document.querySelector(".inline-places-list");
    if (inlineList && toId !== "mainMenu") {
        hideList(inlineList);
    }

    var fromEl = fromId ? document.getElementById(fromId) : null;
    var toEl = document.getElementById(toId);

    function showTargetScreen() {
        var screens = document.querySelectorAll(".screen");
        for (var i = 0; i < screens.length; i++) {
            screens[i].style.display = "none";
            screens[i].classList.remove("screen-exit");
        }

        if (toEl) {
            toEl.style.display = "block";
            toEl.classList.remove("screen-exit");
            void toEl.offsetWidth;
        }

        try {
            var searchWrap = document.getElementById("searchWrapper");
            if (searchWrap) {
                searchWrap.style.display = toId === "mainMenu" ? "block" : "none";
            }
        } catch (e) {}

        setBackButtonVisible(toId !== "mainMenu");

        try {
            var placesList = document.getElementById("placesList");
            if (placesList) {
                if (toId !== "mainMenu") {
                    placesList.style.display = "none";
                } else {
                    placesList.style.display = "";
                    if (placesList.classList.contains("active")) {
                        placesList.style.overflowY = "auto";
                    } else {
                        placesList.style.overflowY = "";
                    }
                }
            }
        } catch (e) {}

        syncNavigationState(toId);
    }

    if (fromEl && fromId !== toId && fromEl.style.display !== "none") {
        fromEl.classList.add("screen-exit");
    }

    showTargetScreen();
}

var modalImages = [];
var modalIndex = 0;

function closePhotoModal(modal) {
    modal.classList.add("modal-closing");
    setTimeout(function () {
        if (modal.parentNode) modal.parentNode.removeChild(modal);
    }, 220);
}

function openPhotoModal(images, index) {
    modalImages = images;
    modalIndex = index;

    var modal = document.createElement("div");
    modal.className = "photo-modal";

    var content = document.createElement("div");
    content.className = "photo-modal-content";

    var slider = document.createElement("div");
    slider.className = "photo-modal-slider";
    content.appendChild(slider);

    for (var i = 0; i < modalImages.length; i++) {
        var img = document.createElement("img");
        img.src = modalImages[i];
        slider.appendChild(img);
    }

    function update() {
        slider.style.transform = "translateX(-" + (modalIndex * 100) + "%)";
    }

    function createPhosphorIcon(iconClass) {
        var icon = document.createElement("i");
        icon.className = "ph-light " + iconClass;
        icon.setAttribute("aria-hidden", "true");
        return icon;
    }

    if (modalImages.length > 1) {
        var left = document.createElement("div");
        left.className = "photo-arrow left";
        left.innerHTML = "‹";
        left.onclick = function () {
            modalIndex--;
            if (modalIndex < 0) modalIndex = modalImages.length - 1;
            update();
        };
        content.appendChild(left);

        var right = document.createElement("div");
        right.className = "photo-arrow right";
        right.innerHTML = "›";
        right.onclick = function () {
            modalIndex++;
            if (modalIndex >= modalImages.length) modalIndex = 0;
            update();
        };
        content.appendChild(right);

        left.textContent = "";
        left.appendChild(createPhosphorIcon("ph-caret-left"));
        right.textContent = "";
        right.appendChild(createPhosphorIcon("ph-caret-right"));
    }

    var close = document.createElement("div");
    close.className = "photo-close";
    close.textContent = "";
    close.appendChild(createPhosphorIcon("ph-x"));
    close.onclick = function () {
        closePhotoModal(modal);
    };
    content.appendChild(close);

    modal.appendChild(content);

    modal.onclick = function (e) {
        if (e.target === modal) closePhotoModal(modal);
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
    fetch("/rating/place/" + encodeURIComponent(place.id), {
        headers: {
            "X-Client-Id": getClientId()
        }
    })
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        place._rating = {
            avg: data.avg,
            votes: data.votes
        };

        if (data.userRated) {
            place._rated = true;
        }
    })
    .catch(function () {});
}

function loadAllRatings() {
    var promises = [];

    for (var i = 0; i < places.length; i++) {
        (function (place) {
            var request = fetch("/rating/place/" + encodeURIComponent(place.id), {
                headers: {
                    "X-Client-Id": getClientId()
                }
            })
            .then(function (res) {
                if (!res.ok) return null;
                return res.json();
            })
            .then(function (data) {
                if (!data) return;

                place._rating = {
                    avg: data.avg,
                    votes: data.votes
                };

                if (data.userRated) {
                    place._rated = true;
                }
            })
            .catch(function (err) {
                console.warn("Rating load error:", err);
            });

            promises.push(request);
        })(places[i]);
    }

    Promise.all(promises).then(function () {
        refreshVisiblePlacesRatings();

        if (listOwner === "interesting") {
            showInterestingPlaces();
        }

        if (currentScreen === "mainMenu") {
            renderMainPopularPlaces();
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
    var ratingBlock = document.getElementById("planRating");
    if (!ratingBlock) return;

    var pd = plansData[planId].rating;

    if (!pd.votes) {
        ratingBlock.innerText = t("noReviewsYet");
        return;
    }

    ratingBlock.innerText =
        t("ratingLabel") +
        ": " +
        pd.avg.toFixed(1) +
        " (" +
        pd.votes +
        " " +
        t("votes") +
        ")";
}

function refreshVisiblePlacesRatings() {
    var lists = [
        document.getElementById("placesList"),
        document.getElementById("interestingList"),
        document.getElementById("categoryResultsList")
    ];

    for (var l = 0; l < lists.length; l++) {
        var list = lists[l];
        if (!list) continue;

        var cards = list.querySelectorAll(".place-card");

        for (var i = 0; i < cards.length; i++) {
            var placeId = cards[i].getAttribute("data-place-id");
            var place = null;

            if (placeId) {
                for (var j = 0; j < places.length; j++) {
                    if (String(places[j].id) === String(placeId)) {
                        place = places[j];
                        break;
                    }
                }
            }

            if (!place) {
                var title = cards[i].querySelector("h3");
                if (!title) continue;
                var name = title.innerText;
                for (var k = 0; k < places.length; k++) {
                    if (getLocalizedText(places[k].name) === name) {
                        place = places[k];
                        break;
                    }
                }
            }

            if (!place) continue;

            var ratingSpan = cards[i].querySelector(".rating");
            if (ratingSpan) {
                ratingSpan.innerText = getRatingStars(
                    place._rating ? place._rating.avg : place.rating
                );
            }
        }
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

window.addEventListener("load", () => {
    console.log("YMAPS:", window.ymaps);
});
