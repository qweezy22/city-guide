console.log("places.js загружен");
var places = [

{
    id: 1,
    name: {ru: "Заповедник Нургуш",
           en: "Nurgush Nature Reserve"},
    category: "nature",
    coords: [58.020964, 48.446023],
    address: {ru: "Кировская область, Котельничский район, Морозовское сельское поселение, государственный природный заповедник Нургуш.",
              en: "Kirov region, Kotelnich district, Morozovskoye rural settlement, Nurgush Nature Reserve."},
    rating: null,
    images: [
    "images/nurgush.jpg",
    "images/nurgush2.webp",
    "images/nurgush3.webp",
    "images/nurgush4.webp"
    ],
    description: {ru: "Особо охраняемая природная территория с экотропами.",
                  en: "A specially protected natural area with eco-trails."}
},

{
    id: 2,
    name: {ru: "Скальный массив Камень",
           en: "Kamen Rock Massif"},
    category: "cave",
    coords: [57.428887, 48.948001],
    address: {ru: "Кировская область, Советский район, Родыгинское сельское поселение, Берег реки Немды.",
              en: "Kirov region, Sovetsky district, Rodyginskoye rural settlement, bank of the Nemda river."},
    rating: null,
    images: [ 
    "images/scalniy_massive_kamen.jpg",
    "images/kamen2.webp",
    "images/kamen3.webp",
    "images/kamen4.webp"
    ],
    description: {ru: "Известняковые скалы с гротами и пещерами.",
                  en: "Limestone rocks with grottoes and caves."}
},

{
    id: 3,        
    name: {ru: "Озеро Шайтан",
           en: "Shaitan Lake"},
    category: "water",
    coords: [57.096172, 49.462219],
    address: {ru: "озеро Шайтан, Буйское сельское поселение, Уржумский муниципальный район, Кировская область.",
              en: "Shaitan Lake, Buyskoe rural settlement, Urzhumsky municipal district, Kirov region."},
    rating: null,
    images: [
    "images/ozero_shaitan.jpg",
    "images/shaitan.jpg"
    ],
    description: {ru: "Озеро с плавающими островами.",
                  en: "A lake with floating islands."}
},

{
    id: 4,
    name: {ru: "Ежовский озерно-родниковый комплекс",
           en: "Ezhovsky Lake and Spring Complex"},
    category: "spring",
    coords: [58.591619, 49.690516],
    address: {ru: "Киров, Первомайский район.",
              en: "Kirov, Pervomaysky district."},
    rating: null,
    images: [
    "images/ezhovkiy_rodnik.jpg",
    "images/ezhov.webp",
    "images/ezhov2.webp",
    "images/ezhov3.webp"
    ],
    description: {ru: "Гидрологический памятник природы.",
                  en: "Hydrological natural monument."}
},

{        
    id: 5,
    name: {ru: "Река Немда",
           en: "Nemda River"},
    category: "water",
    coords: [57.165403, 48.947592],
    address: {ru: "река Немда, Кировская область, Немский район.",
              en: "Nemda River, Kirov region, Nemsky district."},   
    rating: null,
    images: [
    "images/nemda.jpg",
    "images/nemda2.jpg",
    "images/nemda3.jpg",
    "images/nemda4.jpg"
    ],
    description: {ru: "Живописная река среди скал.",
                  en: "A picturesque river among the rocks."}
},

{
    id: 6,
    name: {ru: "Озеро Лежнинское",
           en: "Lezhninskoe Lake"},
    category: "water",
    coords: [57.535767, 48.593045],
    address: {ru: "озеро Лежнинское, Пижанский муниципальный округ, Кировская область.",
              en: "Lezhninskoe Lake, Pizhansky municipal district, Kirov region."},
    rating: null,
    images: [
    "images/ozero_lezhnitskoe.jpg",
    "images/lezhnitskoe2.jpg",
    "images/lezhnitskoe3.jpg",
    "images/lezhnitskoe4.jpg"
    ],
    description: {ru: "Самое глубокое озеро региона.",
                  en: "The deepest lake in the region."}
},

{
    id: 7,
    name: {ru: "Береснятский водопад",
           en: "Beresnyatsky Waterfall"},
    category: "water",
    coords: [57.387997, 49.029146],
    address: {ru: "Кировская область, Советский район, 20 км от Советска.",
              en: "Kirov region, Sovetsky district, 20 km from Sovetsk."},
    rating: null,
    images: [
    "images/beresnyatskiy_vodopad.jpg",
    "images/beresv2.jpg",
    "images/beresv3.jpg",
    "images/beresv.jpg"
    ],
    description: {ru: "Красивый водопад из трёх каскадов.",
                  en: "A beautiful waterfall with three cascades."}
},

{
    id: 8,
    name: {ru: "Пруд Белохолуницкий",
           en: "Belokholunitsky Pond"},
    category: "water",
    coords: [58.879300, 50.903395],
    address: {ru: "Белохолуницкий пруд, Белохолуницкое городское поселение, Кировская область.",
              en: "Belokholunitsky Pond, Belokholunitskoye urban settlement, Kirov region."},
    rating: null,
    images:  [
    "images/beloholonitskiy_prud.jpg",
    "images/belhol.jpg",
    "images/belhol2.jpg"
    ],
    description: {ru: "Белохолуницкий пруд - крупнейшее искусственное водохранилище Кировской области.",
                  en: "Belokholunitsky Pond is the largest artificial reservoir in the Kirov region."}
},

{
    id: 9,
    name: {ru: "Озеро Чваниха",
           en: "Chvaniha Lake"},
    category: "water",
    coords: [57.398329, 50.103176],
    address: {ru: "Озеро Чваниха, Медведский Бор, Медведское сельское поселение, Нолинский муниципальный район, Кировская область.",
              en: "Chvaniha Lake, Medvedsky Bor, Medvedskoye rural settlement, Nolinsky municipal district, Kirov region."},
    rating: null,
    images: [
    "images/ozero_chvaniha.jpg",
    "images/chaniha.jpg",
    "images/chaniha2.jpg",
    "images/chaniha3.jpg"
    ],
    description: {ru: "Карстовое озеро с изумрудной водой.",
                  en: "Karst lake with emerald water."}
},

{
    id: 10,
    name: {ru: "Бошляковское озеро",
           en: "Boshlyakovskoe Lake"},
    category: "water",
    coords: [57.922950, 49.674073],
    address: {ru: "озеро Бошляковское, Большевистское сельское поселение, Сунский муниципальный район, Кировская область.",
              en: "Boshlyakovskoe Lake, Bolshevistskoye rural settlement, Sunsky municipal district, Kirov region."},
    rating: null,
    images: [
    "images/boshlyak_ozero.jpg",
    "images/boshlyak2.jpg",
    "images/boshlyak3.jpg"
    ],
    description: {ru: "Озеро с бурлящей водой.",
                  en: "Lake with bubbling water."}
},

{
    id: 11,
    name: {ru: "Озеро Холуново",
           en: "Holunovo Lake"},
    category: "water",
    coords: [58.536557, 49.770512],
    address: {ru: "озеро Холуново, муниципальное образование Киров.",
              en: "Holunovo Lake, Kirov municipality."},
    rating: null,
    images: [
    "images/holunovo_ozero.jpg",
    "images/holunovo.jpg",
    "images/holunovo3.jpg",
    "images/holunovo2.jpg"
    ],  
    description: {ru: "Популярное место для осенней рыбалки.",
                  en: "A popular spot for autumn fishing."}
},

{
    id: 12,
    name: {ru: "Озеро Падун",
           en: "Padun Lake"},
    category: "water",
    coords: [59.778276, 52.300634],
    address: {ru: "озеро Падун, Верхнекамский муниципальный округ, Кировская область.",
              en: "Padun Lake, Verkhnekamsky municipal district, Kirov region."},
    rating: null,
    images: [
    "images/padun_ozero.jpg",
    "images/padun.jpg",
    "images/padun2.jpg"
    ],
    description: {ru: "Озеро с прозрачной водой, \"Вятский Байкал\".",
                  en: "Lake with clear water, \"Vyatka Baikal\"."}
},

{
    id: 13,
    name: {ru: "Водопад Помяловка",
           en: "Pomyalevka Waterfall"},
    category: "water",
    coords: [56.188703, 51.242643],
    address: {ru: "д. Куршино.",
              en: "v. Kurshino."},
    rating: null,
    image: "images/pomyalovka_vodopad.jpg",
    description: {ru: "Небольшой родниковый водопад.",
                  en: "A small spring waterfall."}    
},

{
    id: 14,
    name: {ru: "Озеро Акшубень",
           en: "Akshuben Lake"},
    category: "water",
    coords: [57.642762, 47.956454],
    address: {ru: "озеро Акшубень, Тужинское городское поселение, Кировская область.",
              en: "Akshuben Lake, Tuzhinskoye urban settlement, Kirov region."},
    rating: null,
    images: [
    "images/akshuben.jpg",
    "images/akshuben2.jpg",
    "images/akshuben3.jpg"
    ],
    description: {ru: "Самое большое озеро области.",
                  en: "The largest lake in the region."}
},

{
    id: 15,
    name: {ru: "Скала Часовой",
           en: "Chasovoy Rock"},
    category: "cave",
    coords: [57.426111, 48.939480],
    address: {ru: "Чимбулатский комплекс.",
              en: "Chimbulat Complex."},
    rating: null,
    image: "images/skala_chasovoy.jpg",
    description: {ru: "Известняковая скала высотой 8 м.",
                  en: "Limestone rock 8 m high."}
},

{
    id: 16,
    name: {ru: "Зараменская пещера",
           en: "Zaramen Cave"},
    category: "cave",
    coords: [57.541853, 48.938562],
    address: {ru: "Кировская область, Советский район, Родыгинское сельское поселение.",
              en: "Kirov region, Sovetsky district, Rodyginskoye rural settlement."},
    rating: null,
    images: [
    "images/zaramen_peshera.jpg",
    "images/zaramen.jpg",
    "images/zaramen2.jpg",
    "images/zaramen3.jpg"
    ],  
    description: {ru: "Ее второе название Чертова печь, ведь именно на печной горн похож вход.",
                  en: "Its second name is Devil's Furnace, as the entrance resembles a furnace."}    
},

{
    id: 17,
    name: {ru: "Мухинская пещера",
           en: "Mukhinskaya Cave"},
    category: "cave",
    coords: [56.258433, 51.060537],
    address: {ru: "д. Мухино, рядом с г. Вятские Поляны",
              en: "v. Mukhino, near Vyatskiye Polyany"},
    rating: null,
    image: "images/muhinskaya_peshera.jpg",
    description: {ru: "Пещера на берегу реки Вятки.",
                  en: "Cave on the bank of the Vyatka River."}    
},

{
    id: 18,
    name: {ru: "Нижнеивкинские источники",
           en: "Nizhneivkinskiye Springs"},
    category: "spring",
    coords: [58.199611, 49.523056],
    address: {ru: "Кировская область, Кумёнский район, пгт Нижнеивкино, ул. Курортная, д. 11 (санаторий «Нижне-Ивкино»).",
              en: "Kirov region, Kumen district, Nizhneivkino, Kurortnaya St., 11 (Nizhne-Ivkino sanatorium)."},
    rating: null,
    images: [
    "images/nizhneiv_istoch.jpg",
    "images/nizhneiv.webp",
    "images/nizhneiv2.webp"
    ],
    description: {ru: "Минеральные источники.",
                  en: "Mineral springs."}    
},

{
    id: 19,
    name: {ru: "Родник под Сокольей горой",
           en: "Spring under Sokolya Mountain"},
    category: "spring",
    coords: [58.161564, 48.347921],
    address: {ru: "Кировская область.",
              en: "Kirov region."}, 
    rating: null,
    images: [
    "images/rodnik_soloiya_gora.jpg",
    "images/rodniksokol.jpg"
    ],
    description: {ru: "Реликтовый источник.", 
                  en: "The Relict Source."}
},

{
    id: 20,
    name: {ru: "Святые источники Аджим",
           en: "Holy Springs of Adzhim"},
    category: "spring",
    coords: [56.740278, 50.276667],
    address: {ru: "село Аджим.",
              en: "village Adzhim."},
    rating: null,
    image: "images/adshim_istochnik.jpg",
    description: {ru: "Система родников.",
                  en: "System of springs."}    
},

{
    id: 21,
    name: {ru: "Кугерский родник",
           en: "Kugersky Spring"},
    category: "spring",
    coords: [57.101465, 49.858545],
    address: {ru: "Кировская область, Уржумский район, деревня Кугерь.",
              en: "Kirov region, Urzhum district, village Kuger."},
    rating: null,
    image: "images/kuger_rodnik.jpg",
    description: {ru: "Святой источник.",
                  en: "The holy spring."}
},

{
    id: 22,
    name: {ru: "Жуковлянские валуны",
           en: "Zhukovlyansky Boulders"},
    category: "history",
    coords: [58.304727, 48.018566],
    address: {ru: "Кировская область, Котельничский район, Александровское сельское поселение.",
              en: "Kirov region, Kotelnichsky district, Alexandrovskoye rural settlement."},
    rating: null,
    images: [
    "images/zhukov_valun.jpg",
    "images/zhukov.webp",
    "images/zhukov2.webp",
    "images/zhukov3.webp",
    "images/zhukov4.webp"
    ],
    description: {ru: "Крупные камни неизвестного происхождения.",
                  en: "Large stones of unknown origin."}    
},

{
    id: 23,
    name: {ru: "Ковровское городище",
           en: "Kovrov Settlement"},
    category: "history",
    coords: [58.349286, 48.478476],
    address: {ru: "д. Ковровы.",
              en: "v. Kovrovy."},
    rating: null,
    images: [
    "images/kovrov_gorodishe.jpg",
    "images/kovrov.jpg",
    "images/kovrov2.jpg"
    ],
    description: {ru: "Древнее поселение.",
                  en: "Ancient settlement."}    
},

{
    id: 24,
    name: {ru: "Кладбище парейазавров",
           en: "Pareiasaur Cemetery"},
    category: "history",
    coords: [58.162390, 48.356391],
    address: {ru: "г. Котельнич",
              en: "c. Kotelnich"},
    rating: null,
    image: "images/pareivazavr.jpg",
    description: {ru: "Место находок древних животных.",
                  en: "Place of ancient animal findings."}
},

{
    id: 25,
    name: {ru: "Истобенское городище",
           en: "Istobensk Settlement"},
    category: "history",
    coords: [58.425827, 48.826946],
    address: {ru: "с. Истобенск, Кировская область.",
              en: "v. Istobensk, Kirov region."},
    rating: null,
    images: [
    "images/istoben_gorodishe.jpg",
    "images/istoben.jpg"
    ],
    description: {ru: "Памятник археологии.",
                  en: "Archaeological monument."}
},

{
    id: 26,
    name: {ru: "Кировский ботанический сад",
           en: "Kirov Botanical Garden"},
    category: "park",
    coords: [58.597146, 49.668111],
    address: {ru: "Киров, Владимирская ул., 95.",
              en: "Kirov, Vladimirskaya St., 95."},
    rating: null,
    images: [
    "images/botanic_garden.jpg",
    "images/botsad.webp",
    "images/botsad2.webp",
    "images/botsad3.webp"
    ],
    description: {ru: "Более 400 видов растений.",
                  en: "More than 400 species of plants."}    
},

{
    id: 27,
    name: {ru: "Комплекс Великорецкое",
           en: "Velikoretskoe Complex"},
    category: "park",
    coords: [58.892707, 49.032493],
    address: {ru: "село Великорецкое.",
              en: "village Velikoretskoe."},
    rating: null,
    images: [
    "images/velikoretskoe.jpg",
    "images/velikor.jpg",
    "images/velikor2.jpg",
    "images/velikor3.webp", 
    "images/velikor4.webp"
    ],
    description: {ru: "Паломнический центр.",
                  en: "Pilgrimage center."}
},

{
    id: 28, 
    name: {ru: "Бушковский лес",
           en: "Bushkovsky forest."},
    category: "park",
    coords: [57.107242, 49.517720],
    address: {ru: "Кировская область.",
              en: "Kirov region."},
    rating: null,
    image: "images/bushkov_les.jpg",
    description: {ru: "Заказник южной тайги.",
                  en: "Southern taiga reserve."}
},

{
    id: 29,
    name: {ru: "Медведский бор",
           en: "Medvedsky Bor"},
    category: "park",
    coords: [57.393152, 50.094310],
    address: {ru: "Кировская область.",
              en: "Kirov region."},
    rating: null,
    images: [
    "images/medved_bor.jpg",
    "images/medbor.jpg",
    "images/medbor2.jpg"
    ],
    description: {ru: "Сосновый бор.",
                  en: "Pine forest."}    
},

{
    id: 30,
    name: {ru: "Атарская лука",
           en: "Atarskaya Luka"},
    category: "park",
    coords: [57.521667, 49.290000],
    address: {ru: "Кировская область, Лебяжский муниципальный округ.",
              en: "Kirov region, Lebyazhsky municipal district."},
    rating: null,
    images: [
    "images/atar_luka.jpg",
    "images/atar.jpg"
    ],
    description: {ru: "Проектируемый национальный парк.",
                  en: "Projected national park."}    
},

{
    id: 31,
    name: {ru: "Комплекс Ошеть",
           en: "Oshet Complex"},
    category: "park",
    coords: [58.005450, 50.054304],
    address: {ru: "Кировская область, Верхошижемский район, Зоновское сельское поселение, памятник природы Южно-таежный комплекс елово-пихтовых лесов Ошеть.",
              en: "Kirov region, Verkhoshizhemsky district, Zonovskoe rural settlement, natural monument South Taiga complex of spruce-fir forests Oshet."},
    rating: null,
    image: "images/oshet.jpg",
    description: {ru: "Природный памятник.",
                  en: "Natural monument."}    
},

{
    id: 32,
    name: {ru: "Популяция кортузы Маттиоли",
           en: "Population of Cortusa Matthioli"},
    category: "park",
    coords: [58.649087, 49.609907],
    address: {ru: "Филейка м-н, Октябрьский район, Киров.",
              en: "Fileyka m-n, Oktyabrsky district, Kirov."},
    rating: null,
    image: "images/mattioli.jpg",
    description: {ru: "Редкое растение ледникового периода.",
                  en: "Rare plant of the glacial period."}    
},

{
    id: 33,
    name: {ru: "Динопарк",
           en: "Dinopark"},
    category: ["kids", "park"],
    coords: [58.306059, 48.353075],
    address: {ru: "Котельнич, ул. Володарского, 10.",
              en: "Kotel'nich, ul. Volodarskogo, 10."},
    rating: null,
    images: [
    "images/dinopark.jpg",
    "images/dinopark2.webp",
    "images/dinopark3.webp"
    ],
    description: {ru: "Парк динозавров.",
                  en: "Dinosaur park."}    
},

{
    id: 34,     
    name: {ru: "Юркин парк",
           en: "Yurkin Park"},
    category: ["kids", "park"],
    coords: [58.612854, 49.781534],
    address: {ru: "Киров, село Талица, 50/1.",
              en: "Kirov, village Talitsa, 50/1."},
    rating: null,
    images: [
    "images/urkin_park.jpg",
    "images/urkin2.webp",
    "images/urkin3.webp",
    "images/urkin.webp"
    ],
    description: {ru: "Интерактивный парк.",
                  en: "Interactive park."}    
},

{
    id: 35,
    name: {ru: "Комплекс Порошино",
           en: "Poroshino Complex"},
    category: ["kids", "park"],
    coords: [58.605667, 49.809466],
    address: {ru: "село Порошино",
              en: "Poroshino village"},
    rating: null,
    image: "images/poroshino.jpg",
    description: {ru: "Активный отдых.",
                  en: "Active recreation."}   
},

{
    id: 36,
    name: {ru: "Кафе Паприка",
           en: "Cafe Paprika"},
    category: ["kids", "food"],
    coords: [58.580350, 49.563626],
    address: {ru: "Киров, ул. Капитана Дорофеева, 26",
              en: "Kirov, Kapitana Dorofeev St., 26"},
    rating: null,
    images: [
    "images/paprika_cafe.jpg",
    "images/paprika.webp",
    "images/paprika2.webp",
    "images/paprika3.webp"
    ],
    description: {ru: "Кафе доставка еды и обедов.",
                  en: "Cafe food and lunch delivery."}      
},

{
    id: 37,
    name: {ru: "Динки Парк",
           en: "Dinki Park"},
    category: ["kids", "tradecenters", "food"],         
    coords: [58.591601, 49.595233],
    address: {ru: "Киров, микрорайон Юго-Западный, ул. Космонавта Владислава Волкова, 6А, ТЦ Фестиваль.",
              en: "Kirov, Yugo-Zapadny microdistrict, Kosmonavta Vladislava Volkova St., 6A, TC Festival."},
    rating: null,
    images: [
    "images/dinki_park.jpg",
    "images/dinki.webp",
    "images/dinki2.webp",
    "images/dinki3.webp",
    "images/dinki4.webp"
    ],
    description: {ru: "Развлекательный центр.",
                  en: "Entertainment center."}    
},

{
    id: 38,
    name: {ru: "Ипподром",
           en: "Hippodrome"},
    category: ["kids", "park"],
    coords: [58.587687, 49.582191],
    address: {ru: "Киров, Ленинский район.",
              en: "Kirov, Leninsky district."},
    rating: null,
    images: [
    "images/ipodrom.jpg",
    "images/ipod.webp",
    "images/ipod2.webp"
    ],
    description: {ru: "Конный клуб.",
                  en: "Equestrian club."}     
},

{
    id: 39,
    name: {ru: "Зубаревский лес",
           en: "Zubarevsky Forest"},
    category: ["kids", "park"],
    coords: [58.593530, 49.575988],
    address: {ru: "Киров, Зубаревский лес.",
              en: "Kirov, Zubarevsky Forest."},
    rating: null,
    images: [
    "images/zub_les.jpg",   
    "images/zubles.webp",
    "images/zubles2.webp",
    "images/zubles3.webp",
    "images/zubles4.webp"
    ],
    description: {ru: "Лесопарк.",
                  en: "Forest park."}   
},

{
    id: 40,
    name: {ru: "Кочуровский парк",
           en: "Kochurovsky Park"}, 
    category: ["kids", "park"],
    coords: [58.593361, 49.602712],
    address: {ru: "Киров, Кочуровский парк.",
              en: "Kirov, Kochurovsky Park."},
    rating: null,
    images: [
    "images/kochur_park.jpg",
    "images/koch.webp",
    "images/koch4.webp",
    "images/koch3.webp",
    "images/koch2.webp"
    ],
    description: {ru: "Городской парк.",
                  en: "City park."}    
},

{
    id: 41,
    name: {ru: "ТЦ Глобус",
           en: "Globus Shopping Center"},
    category: ["kids", "tradecenters", "food"],
    coords: [58.598077, 49.607028],
    address: {ru: "Киров, ул. Воровского, 135.",
              en: "Kirov, Vorovskogo St., 135."},
    rating: null,
    image: "images/globus.jpg",
    description: {ru: "Развлекательный торговый центр.",
                  en: "Entertainment shopping center."}    
},

{
    id: 42,
    name: {ru: "ТЦ Макси",
           en: "TC Maxi"},
    category: ["kids", "tradecenters", "food"],
    coords: [58.616505, 49.594573],
    address: {ru: "Киров, Луганская ул., 53/2.",
              en: "Kirov, Luganskaya St., 53/2."},
    rating: null,
    image: "images/maksi.jpg",
    description: {ru: "Развлекательный торговый центр.",
                  en: "Entertainment shopping center."}    
},

{
    id: 43,
    name: {ru: "Парк Победы",
           en: "Victory Park"},
    category: ["kids", "park"],
    coords: [58.609566, 49.611205],
    address: {ru: "Киров, парк Победы.",
              en: "Kirov, Victory Park."},
    rating: null,
    images: [
    "images/park_pobedy.jpg",
    "images/parkpobed2.webp",
    "images/parkpobed3.webp",
    "images/parkpobed.webp",
    ],
    description: {ru: "Городской парк.",
                  en: "City park."}
},

{
    id: 44,
    name: {ru: "Парк имени 50-летия ВЛКСМ",
           en: "Park named after the 50th anniversary of the VLKSM"},    
    category: ["kids", "park"],
    coords: [58.584987, 49.634166],
    address: {ru: "Киров, ул. Сурикова, 21.",
              en: "Kirov, Surikova St., 21."},
    rating: null,
    images: [
    "images/park50.webp",
    "images/park501.webp",
    "images/park502.webp"
    ],
    description: {ru: "Городской парк.",
                  en: "City park."}    
},

{
    id: 45,
    name: {ru: "Море парк",
           en: "More Park"},
    category: ["kids", "tradecenters"],
    coords: [58.582653, 49.631654],
    address: {ru: "Киров, ул. Некрасова, 49.",
              en: "Kirov, Nekrasova St., 49."},
    rating: null,
    images: [
    "images/more_park.jpg",
    "images/morepark.webp",
    "images/morepark3.webp",
    "images/morepark2.webp"
    ],
    description: {ru: "Оздоровительный центр.",
                  en: "Wellness center."}    
},

{       
    id: 46,
    name: {ru: "Кировский государственный цирк",
           en: "Kirov State Circus"},
    category: "kids",
    coords: [58.588125, 49.655795],
    address: {ru: "Киров, парк имени Кирова.",
              en: "Kirov, Kirov Park."},    
    rating: null,
    image: "images/circ.jpg",
    description: {ru: "Цирк.",
                  en: "Circus."}
},

{
    id: 47,
    name: {ru: "Вятка-ЦУМ",
           en: "Vyatka TSUM"},
    category: ["kids", "tradecenters", "food"],     
    coords: [58.594043, 49.656317],
    address: {ru: "Киров, ул. Воровского, 77.",
              en: "Kirov, Vorovskogo St., 77."},
    rating: null,
    image: "images/tsum.jpg",
    description: {ru: "Торговый центр.",
                  en: "Trade center."}
},

{
    id: 48,
    name: {ru: "Сквер Алые Паруса",
           en: "Scarlet Sails Square"},
    category: ["kids", "park"],
    coords: [58.603731, 49.653322],
    address: {ru: "Киров, сквер Алые Паруса.",
              en: "Kirov, Scarlet Sails Square."},
    rating: null,
    image: "images/alye_parusa_skver.jpg",
    description: {ru: "Городской парк.",
                  en: "City park."}
},

{
    id: 49,
    name: {ru: "ТЦ Европейский",
           en: "European Shopping Center"},
    category: ["kids", "tradecenters", "food"],
    coords: [58.594450, 49.666501],
    address: {ru: "Киров, ул. Воровского, 43.",
              en: "Kirov, Vorovskogo St., 43."},
    rating: null,
    image: "images/evrop_tc.jpg",
    description: {ru: "Городской парк.",
                  en: "City park."}
},

{
    id: 50,
    name: {ru: "Сквер 60-летия СССР",
           en: "60th Anniversary of the USSR Square"},
    category: ["kids", "park"],
    coords: [58.597222, 49.670845],
    address: {ru: "Киров, сквер 60-летия СССР.",
              en: "Kirov, 60th Anniversary of the USSR Square."},
    rating: null,
    images: [
    "images/skver_60.jpg",
    "images/60let.webp",
    "images/60let2.webp"
    ],
    description: {ru: "Городской парк.",
                  en: "City park."}     
},

{
    id: 51,
    name: {ru: "Аполло",
           en: "Apollo"},
    category: ["kids", "park"],
    coords: [58.601004, 49.674048],
    address: {ru: "Киров, Первомайский район, ул. Володарского, 106.",
              en: "Kirov, Pervomaysky District, Volodarskogo St., 106."},
    rating: null,
    images: [
    "images/apollo.jpg",
    "images/apollo2.webp",
    "images/apollo3.webp",
    "images/apollo4.webp"
    ],
    description: {ru: "Городской парк.",
                  en: "City park."}   
},

{
    id: 52,
    name: {ru: "Парк имени С. М. Кирова",
           en: "S. M. Kirov Park"},
    category: ["kids", "park"],
    coords: [58.588046, 49.652520],
    address: {ru: "Киров, парк имени С. М. Кирова.",
              en: "Kirov, S. M. Kirov Park."},      
    rating: null,
    images: [
    "images/kirova.webp",
    "images/kirova2.webp",
    "images/kirova3.webp",
    "images/kirova4.webp",
    "images/kirova5.webp",
    "images/kirova6.webp"
    ],
    description: {ru: "Городской парк.",
                  en: "City park."}    
},

{
    id: 53,
    name: {ru: "Сквер Трудовой славы",
           en: "Labor Glory Square"},
    category: ["kids", "park"],
    coords: [58.615612, 49.664394],
    address: {ru: "Киров, сквер Трудовой славы.",
              en: "Kirov, Labor Glory Square."},
    rating: null,
    images: [
    "images/skver_trud_slava.jpg",
    "images/trud.webp",
    "images/trud2.webp"
    ],
    description: {ru: "Городской парк.",
                  en: "City park."}   
},

{
    id: 54,
    name: {ru: "Филейский парк",
           en: "Fileysky Park"},
    category: ["kids", "park"],
    coords: [58.651521, 49.612323],
    address: {ru: "Киров, Филейский парк.",
              en: "Kirov, Fileysky Park."},
    rating: null,
    images: [
    "images/fil_park.jpg",
    "images/filpark.webp",
    "images/filpark2.webp",
    "images/filpark3.webp"
    ],
    description: {ru: "Городской парк.",
                  en: "City park."}   
},

{
    id: 55,
    name: {ru: "Александровский сад",
           en: "Alexandrovsky Garden"},
    category: ["kids", "park"],
    coords: [58.607916, 49.686325],
    address: {ru: "Киров, Александровский сад.",
              en: "Kirov, Alexandrovsky Garden."},
    rating: null,
    images: [
    "images/aleks_sad.jpg",
    "images/aleks.webp",
    "images/aleks2.webp",
    "images/aleks3.webp",
    "images/aleks4.webp",
    "images/aleks5.webp",
    "images/aleks6.webp",
    "images/aleks7.webp"
    ],
    description: {ru: "Городской парк.",
                  en: "City park."}   
},

{
    id: 56, 
    name: {ru: "Музей К.Э. Циолковского, авиации и космонавтики",
           en: "K. E. Tsiolkovsky Museum of Aviation and Cosmonautics"},
    category: ["kids", "museums"],
    coords: [58.605327, 49.679048],
    address: {ru: "Киров, Октябрьский район, Преображенская ул., 16.",
              en: "Kirov, Oktyabrsky District, Preobrazhenskaya St., 16."},
    rating: null,
    images: [
    "images/cosmo_museum.jpg",
    "images/cosmo.webp",
    "images/cosmo2.webp",
    "images/cosmo3.webp",
    "images/cosmo4.webp"
    ],
    description: {ru: "Планетарий.",
                  en: "Planetarium."}   
},

{
    id: 57, 
    name: {ru: "Криолло",
           en: "Criollo"},
    category: ["kids", "museums"],
    coords: [58.602301, 49.682914],
    address: {ru: "Киров, Спасская ул., 15.",
              en: "Kirov, Spasskaya St., 15."},
    rating: null,
    images: [
    "images/kriollo.jpg",
    "images/kriollo2.webp",
    "images/kriollo3.webp",
    "images/kriollo4.webp"
    ],
    description: {ru: "Музей шоколада.",
                  en: "Chocolate Museum."}   
},

{
    id: 58,
    name: {ru: "Музей истории Хлынова",
           en: "Museum of the History of Khlynov"},
    category: ["kids", "museums"],
    coords: [58.600602, 49.676293],
    address: {ru: "Киров, ул. Герцена, 15В.",
              en: "Kirov, Herzen St., 15V."},
    rating: null,
    images: [
    "images/hlinov_museum.jpg",
    "images/hlinov.webp",
    "images/hlinov2.webp",
    "images/hlinov3.webp",
    "images/hlinov5.webp"
    ],
    description: {ru: "Музей.", 
                  en: "Museum."}
},

{
    id: 59,
    name: {ru: "Кировский областной краеведческий музей имени П. В. Алабина",
           en: "Kirov Regional Museum of Local Lore named after P. V. Alabin"},
    category: ["kids", "museums"],
    coords: [58.602087, 49.683457],
    address: {ru: "Киров, Спасская ул., 6.",
              en: "Kirov, Spasskaya St., 6."},
    rating: null,
    images: [
    "images/kraev_museum.jpg",
    "images/kraev.webp",
    "images/kraev2.webp",
    "images/kraev3.webp",
    "images/kraev4.webp",
    "images/kraev5.webp",
    ],
    description: {ru: "Музей.",
                  en: "Museum."}
},

{
    id: 60, 
    name: {ru: "Музей истории мороженого Артико",
           en: "Artico Ice Cream Museum"},
    category: ["kids", "museums"],
    coords: [58.602449, 49.684122],
    address: {ru: "Киров, Спасская ул., 15.",
              en: "Kirov, Spasskaya St., 15."},
    rating: null,
    images: [
    "images/icream_museum.jpg",
    "images/artiko.webp",
    "images/artiko2.webp",
    "images/artiko3.webp",
    "images/artiko4.webp"
    ],
    description: {ru: "Музей.",
                  en: "Museum."}   
},

{
    id: 61,
    name: {ru: "Дымковская игрушка",
           en: "Dymkovo Toy"},
    category: ["kids", "museums"],
    coords: [58.602943, 49.676439],
    address: {ru: "Киров, ул. Свободы, 67.",
              en: "Kirov, Svobody St., 67."},
    rating: null,
    images: [
    "images/dim_toy.jpg",
    "images/dim.webp",
    "images/dim2.webp",
    "images/dim3.webp"
    ],
    description: {ru: "Музей.",
                  en: "Museum."}   
},

{
    id: 62, 
    name: {ru: "Кировский государственный театр юного зрителя театр на Спасской",
           en: "Kirov State Youth Theatre on Spasskaya"},
    category: ["kids", "museums"],
    coords: [58.602307, 49.681962],
    address: {ru: "Киров, Спасская ул., 17.",
              en: "Kirov, Spasskaya St., 17."},
    rating: null,
    images: [
    "images/theatre_unzrit.jpg",
    "images/unzrit.webp",
    "images/unzrit2.webp",
    "images/unzrit3.webp"
    ],
    description: {ru: "Театр.",
                  en: "Theatre."}    
},

{
    id: 63, 
    name: {ru: "Кировский областной ордена Трудового Красного Знамени драматический театр имени С. М. Кирова",
           en: "Kirov Regional Order of the Red Banner of Labor Drama Theater named after S. M. Kirov"},
    category: ["kids", "museums"],
    coords: [58.604605, 49.667966],
    address: {ru: "Киров, Московская ул., 37.",
              en: "Kirov, Moskovskaya St., 37."},
    rating: null,
    images: [
    "images/dram_thet.jpg",
    "images/dram.webp",
    "images/dram2.webp",
    "images/dram3.webp",
    "images/dram4.webp"
    ],
    description: {ru: "Театр.",
                  en: "Theatre."}    
},

{
    id: 64,
    name: {ru: "Кировский театр кукол имени А. Н. Афанасьева",
           en: "Kirov Puppet Theater named after A. N. Afanasyev"},
    category: ["kids", "museums"],
    coords: [58.601610, 49.671731],
    address: {ru: "Киров, Спасская ул., 22.",
              en: "Kirov, Spasskaya St., 22."},
    rating: null,
    images: [
    "images/thet_kukl.jpg",
    "images/kukl.webp",
    "images/kukl2.webp",
    "images/kukl3.webp"
    ],
    description: {ru: "Театр.",
                  en: "Theatre."}    
},

{
    id: 65,
    name: {ru: "Академия Кавказской Кухни",
           en: "Academy of Caucasian Cuisine"},
    category: ["kids", "food"],
    coords: [58.611641, 49.789392],
    address: {ru: "Киров, село Талица, ул. Янтарная Слобода, 14В.",
              en: "Kirov, Talitsa village, Yantarnaya Sloboda St., 14V."},
    rating: null,
    images: [
    "images/akk.jpg",
    "images/akk2.webp",
    "images/akk3.webp",
    "images/akk4.webp"
    ],
    description: {ru: "Ресторан.",
                  en: "Restaurant."}    
},

{
    id: 66,
    name: {ru: "Академия Кавказской Кухни",
           en: "Academy of Caucasian Cuisine"},
    category: ["kids", "food"],
    coords: [58.611641, 49.789392],
    address: {ru: "Киров, село Талица, ул. Янтарная Слобода, 14В.",
              en: "Kirov, Talitsa village, Yantarnaya Sloboda St., 14V."},
    rating: null,
    images: [
    "images/akk.jpg",
    "images/akk2.webp",
    "images/akk3.webp",
    "images/akk4.webp"
    ],
    description: {ru: "Ресторан.",
                  en: "Restaurant."}    
},

{
    id: 67,
    name: {ru: "ФотоКопиЦентр",
           en: "Photocopying Center"},
    category: ["students", "print"],
    coords: [58.589734, 49.669066],
    address: {ru: "Киров, Владимирская ул., 129.",
              en: "Kirov, Vladimirskaya St., 129."},
    rating: null,
    images: [
    "images/67(1).webp",
    "images/67(2).webp",
    "images/67(3).webp"
    ],
    description: {ru: "Копировальный центр, низкие цены.",
                  en: "Copy Center, low prices."}    
},

{
    id: 68,
    name: {ru: "Вятский государственный университет, корпус №1",
           en: "Vyatka State University, building No. 1"},
    category: ["students", "educ", "vyatsu"],
    coords: [58.602619, 49.666602],
    address: {ru: "Киров, Московская ул., 36.",
              en: "Kirov, Moskovskaya St., 36."},
    rating: null,
    images: [
    "images/68(1).jpg"
    ],
    description: {ru: "ВУЗ.",
                  en: "University."}    
},

{
    id: 69,
    name: {ru: "Вятский государственный университет, корпус №2",
           en: "Vyatka State University, building No. 2"},
    category: ["students", "educ", "vyatsu"],
    coords: [58.604311, 49.665920],
    address: {ru: "Киров, Московская ул., 39.",
              en: "Kirov, Moskovskaya St., 39."},
    rating: null,
    images: [
    "images/69(1).jpg"
    ],
    description: {ru: "ВУЗ.",
                  en: "University."}    
},

{
    id: 70,
    name: {ru: "Вятский государственный университет, корпус №3",
           en: "Vyatka State University, building No. 3"},
    category: ["students", "educ", "vyatsu"],
    coords: [58.604275, 49.673887],
    address: {ru: "Киров, Московская ул., 29.",
              en: "Kirov, Moskovskaya St., 29."},
    rating: null,
    images: [
    "images/70(1).jpg"
    ],
    description: {ru: "ВУЗ.",
                  en: "University."}    
},

{
    id: 71,
    name: {ru: "Вятский государственный университет, корпус №4",
           en: "Vyatka State University, building No. 4"},
    category: ["students", "educ", "vyatsu"],
    coords: [58.602090, 49.665445],
    address: {ru: "Киров, ул. Защитников Отечества, 76.",
              en: "Kirov, Zashchitnikov Otechestva St., 76."},
    rating: null,
    images: [
    "images/71.jpg"
    ],
    description: {ru: "ВУЗ.",
                  en: "University."}    
},

{
    id: 72,
    name: {ru: "Вятский государственный университет, корпус №5",
           en: "Vyatka State University, building No. 5"},
    category: ["students", "educ", "vyatsu"],
    coords: [58.599888, 49.667922],
    address: {ru: "Киров, ул. Карла Маркса, 77.",
              en: "Kirov, Zashchitnikov Otechestva St., 76."},
    rating: null,
    images: [
    "images/72.jpg"
    ],
    description: {ru: "ВУЗ.",
                  en: "University."}    
},

{
    id: 73,
    name: {ru: "Вятский государственный университет, корпус №6",
           en: "Vyatka State University, building No. 6"},
    category: ["students", "educ", "vyatsu"],
    coords: [58.605176, 49.618084],
    address: {ru: "Киров, Студенческий пр., 9.",
              en: "Kirov, Studenchesky ave., 9."},
    rating: null,
    images: [
    "images/73.jpg"
    ],
    description: {ru: "ВУЗ.",
                  en: "University."}    
},

{
    id: 74,
    name: {ru: "Вятский государственный университет, корпус №7",
           en: "Vyatka State University, building No. 7"},
    category: ["students", "educ", "vyatsu"],
    coords: [58.605260, 49.673673],
    address: {ru: "Киров, Октябрьский район, Преображенская ул., 32.",
              en: "Kirov, Oktyabrisky district, Preobrazhenskaya St., 32."},
    rating: null,
    images: [
    "images/74.jpg"
    ],
    description: {ru: "ВУЗ.",
                  en: "University."}    
},

{
    id: 75,
    name: {ru: "Вятский государственный университет, корпус №8",
           en: "Vyatka State University, building No. 8"},
    category: ["students", "educ", "vyatsu"],
    coords: [58.604543, 49.618067],
    address: {ru: "Киров, Студенческий пр., 11.",
              en: "Kirov, Studencheskiy ave., 11."},
    rating: null,
    images: [
    "images/75.jpg"
    ],
    description: {ru: "ВУЗ.",
                  en: "University."}    
},

{
    id: 76,
    name: {ru: "Вятский государственный университет, корпус №9",
           en: "Vyatka State University, building No. 9"},
    category: ["students", "educ", "vyatsu"],
    coords: [58.604614, 49.617471],
    address: {ru: "Киров, Студенческий пр., 11А.",
              en: "Kirov, Studencheskiy ave., 11А."},
    rating: null,
    images: [
    "images/76.jpg"
    ],
    description: {ru: "ВУЗ, спортивный комплекс.",
                  en: "University, sport complex."}    
},

{
    id: 77,
    name: {ru: "Вятский государственный университет, корпус №10",
           en: "Vyatka State University, building No. 10"},
    category: ["students", "educ", "vyatsu"],
    coords: [58.604573, 49.615650],
    address: {ru: "Киров, ул. Ломоносова, 18а.",
              en: "Kirov, Lomonosova St., 18a."},
    rating: null,
    images: [
    "images/77.jpg"
    ],
    description: {ru: "ВУЗ.",
                  en: "University."}    
},

{
    id: 78,
    name: {ru: "Вятский государственный университет, корпус №11",
           en: "Vyatka State University, building No. 11"},
    category: ["students", "educ", "vyatsu"],
    coords: [58.604573, 49.615650],
    address: {ru: "Киров, ул. Преображенская, 41.",
              en: "Kirov, Preobrazhenskaya St., 41."},
    rating: null,
    images: [
    "images/78.jpg"
    ],
    description: {ru: "ВУЗ.",
                  en: "University."}    
},

{
    id: 78,
    name: {ru: "Вятский государственный университет, корпус №12",
           en: "Vyatka State University, building No. 12"},
    category: ["students", "educ", "vyatsu"],
    coords: [58.586844, 49.681767],
    address: {ru: "Киров, ул. Ленина, 127.",
              en: "Kirov, Lenina St., 127."},
    rating: null,
    images: [
    "images/79.jpg"
    ],
    description: {ru: "ВУЗ.",
                  en: "University."}    
},

{
    id: 79,
    name: {ru: "Вятский государственный университет, корпус №13",
           en: "Vyatka State University, building No. 13"},
    category: ["students", "educ", "vyatsu"],
    coords: [58.591336, 49.676773],
    address: {ru: "Киров, Красноармейская ул., 26.",
              en: "Kirov, Krasnoarmeyskaya St., 26."},
    rating: null,
    images: [
    "images/80.jpg"
    ],
    description: {ru: "ВУЗ.",
                  en: "University."}    
},

{
    id: 80,
    name: {ru: "Вятский государственный университет, корпус №14",
           en: "Vyatka State University, building No. 14"},
    category: ["students", "educ", "vyatsu"],
    coords: [58.591651, 49.681016],
    address: {ru: "Киров, Красноармейская ул., 16.",
              en: "Kirov, Krasnoarmeyskaya St., 16."},
    rating: null,
    images: [
    "images/81.jpg"
    ],
    description: {ru: "ВУЗ.",
                  en: "University."}    
},

{
    id: 81,
    name: {ru: "Вятский государственный университет, корпус №15",
           en: "Vyatka State University, building No. 15"},
    category: ["students", "educ", "vyatsu"],
    coords: [58.567201, 49.686897],
    address: {ru: "Киров, ул. Ленина, 198.",
              en: "Kirov, Lenina St., 198."},
    rating: null,
    images: [
    "images/82.jpg"
    ],
    description: {ru: "ВУЗ.",
                  en: "University."}    
},

{
    id: 82,
    name: {ru: "Вятский государственный университет, корпус №16",
           en: "Vyatka State University, building No. 16"},
    category: ["students", "educ", "vyatsu"],
    coords: [58.591229, 49.678197],
    address: {ru: "Киров, ул. Свободы, 122.",
              en: "Kirov, Svobody St., 198."},
    rating: null,
    images: [
    "images/83.jpg"
    ],
    description: {ru: "ВУЗ.",
                  en: "University."}    
},

{
    id: 83,
    name: {ru: "Вятский государственный университет, корпус №17",
           en: "Vyatka State University, building No. 17"},
    category: ["students", "educ", "vyatsu"],
    coords: [58.590937, 49.680163],
    address: {ru: "Киров, ул. Ленина, 111А.",
              en: "Kirov, Lenina St., 111A."},
    rating: null,
    images: [
    "images/84.jpg"
    ],
    description: {ru: "ВУЗ.",
                  en: "University."}    
},

{
    id: 84,
    name: {ru: "Вятский государственный университет, корпус №18",
           en: "Vyatka State University, building No. 18"},
    category: ["students", "educ", "vyatsu"],
    coords: [58.598941, 49.686836],
    address: {ru: "Киров, ул. Молодой Гвардии, 13.",
              en: "Kirov, Molodaya Gvardiya St., 13."},
    rating: null,
    images: [
    "images/85.jpg"
    ],
    description: {ru: "ВУЗ.",
                  en: "University."}    
},

{
    id: 85,
    name: {ru: "Вятский государственный университет, корпус №19",
           en: "Vyatka State University, building No. 19"},
    category: ["students", "educ", "vyatsu"],
    coords: [58.596035, 49.687023],
    address: {ru: "Киров, Орловская ул., 12.",
              en: "Kirov, Orlovskaya St., 12."},
    rating: null,
    images: [
    "images/86.jpg"
    ],
    description: {ru: "ВУЗ.",
                  en: "University."}    
},

{
    id: 86,
    name: {ru: "Вятский государственный университет, корпус №20",
           en: "Vyatka State University, building No. 20"},
    category: ["students", "educ", "vyatsu"],
    coords: [58.590704, 49.681571],
    address: {ru: "Киров, ул. Ленина, 113.",
              en: "Kirov, Lenina St., 113."},
    rating: null,
    images: [
    "images/87.jpg"
    ],
    description: {ru: "ВУЗ.",
                  en: "University."}    
},

{
    id: 87,
    name: {ru: "Вятский государственный университет, корпус №21",
           en: "Vyatka State University, building No. 21"},
    category: ["students", "educ", "vyatsu"],
    coords: [58.590937, 49.680163],
    address: {ru: "Киров, ул. Ленина, 111A.",
              en: "Kirov, Lenina St., 111A."},
    rating: null,
    images: [
    "images/84.jpg"
    ],
    description: {ru: "ВУЗ.",
                  en: "University."}    
},

{
    id: 88,
    name: {ru: "Вятский государственный университет, корпус №22",
           en: "Vyatka State University, building No. 22"},
    category: ["students", "educ", "vyatsu"],
    coords: [58.590937, 49.680163],
    address: {ru: "Киров, ул. Ленина, 111A.",
              en: "Kirov, Lenina St., 111A."},
    rating: null,
    images: [
    "images/84.jpg"
    ],
    description: {ru: "ВУЗ.",
                  en: "University."}    
},

{
    id: 89,
    name: {ru: "Вятский государственный университет, корпус №23",
           en: "Vyatka State University, building No. 23"},
    category: ["students", "educ", "vyatsu"],
    coords: [58.616200, 49.671650],
    address: {ru: "Киров, Первомайский район, ул. Володарского, 2.",
              en: "Kirov, Pervomaysky District, Volodarskogo St., 2."},
    rating: null,
    images: [
    "images/90.jpg"
    ],
    description: {ru: "ВУЗ.",
                  en: "University."}    
},

{
    id: 90,
    name: {ru: "Общежитие ВятГУ №1",
           en: "VyatSU Dormitory No. 1",
           zh: "维亚特国立大学宿舍1号"},
    category: ["students", "dorms"],
    coords: [58.606258, 49.656327],
    address: {ru: "Октябрьский пр-кт, д. 113",
              en: "Oktyabrsky Ave., 113",
              zh: "十月大街113号"},
    rating: null,
    image: "images/obsh1.jpg",
    description: {ru: "Студенческое общежитие ВятГУ.",
                  en: "VyatSU student dormitory.",
                  zh: "维亚特国立大学学生宿舍。"}
},

{
    id: 91,
    name: {ru: "Общежитие ВятГУ №2",
           en: "VyatSU Dormitory No. 2",
           zh: "维亚特国立大学宿舍2号"},
    category: ["students", "dorms"],
    coords: [58.606854, 49.613926],
    address: {ru: "г. Киров, ул. Ломоносова, 12",
              en: "Kirov, Lomonosova St., 12",
              zh: "基洛夫市，罗蒙诺索夫街12号"},
    rating: null,
    image: "images/obsh2.jpg",
    description: {ru: "Студенческое общежитие ВятГУ.",
                  en: "VyatSU student dormitory.",
                  zh: "维亚特国立大学学生宿舍。"}
},

{
    id: 92,
    name: {ru: "Общежитие ВятГУ №3",
           en: "VyatSU Dormitory No. 3",
           zh: "维亚特国立大学宿舍3号"},
    category: ["students", "dorms"],
    coords: [58.606891, 49.614914],
    address: {ru: "г. Киров, ул. Ломоносова, 12а",
              en: "Kirov, Lomonosova St., 12a",
              zh: "基洛夫市，罗蒙诺索夫街12a号"},
    rating: null,
    image: "images/obsh3.jpg",
    description: {ru: "Студенческое общежитие ВятГУ.",
                  en: "VyatSU student dormitory.",
                  zh: "维亚特国立大学学生宿舍。"}
},

{
    id: 93,
    name: {ru: "Общежитие ВятГУ №4",
           en: "VyatSU Dormitory No. 4",
           zh: "维亚特国立大学宿舍4号"},
    category: ["students", "dorms"],
    coords: [58.605044, 49.615750],
    address: {ru: "ул. Ломоносова, 16а, корпус 1",
              en: "Lomonosova St., 16a, building 1",
              zh: "罗蒙诺索夫街16a号，1号楼"},
    rating: null,
    image: "images/obsh4.jpg",
    description: {ru: "Студенческое общежитие ВятГУ.",
                  en: "VyatSU student dormitory.",
                  zh: "维亚特国立大学学生宿舍。"}
},

{
    id: 94,
    name: {ru: "Общежитие ВятГУ №5",
           en: "VyatSU Dormitory No. 5",
           zh: "维亚特国立大学宿舍5号"},
    category: ["students", "dorms"],
    coords: [58.604992, 49.616774],
    address: {ru: "г. Киров, ул. Ломоносова, д. 16а, корпус 2",
              en: "Kirov, Lomonosova St., 16a, building 2",
              zh: "基洛夫市，罗蒙诺索夫街16a号，2号楼"},
    rating: null,
    image: "images/obsh5.jpg",
    description: {ru: "Студенческое общежитие ВятГУ.",
                  en: "VyatSU student dormitory.",
                  zh: "维亚特国立大学学生宿舍。"}
},

{
    id: 95,
    name: {ru: "Общежитие ВятГУ №6",
           en: "VyatSU Dormitory No. 6",
           zh: "维亚特国立大学宿舍6号"},
    category: ["students", "dorms"],
    coords: [58.590334, 49.681569],
    address: {ru: "Киров, ул. Ленина, д. 113а",
              en: "Kirov, Lenina St., 113a",
              zh: "基洛夫市，列宁街113a号"},
    rating: null,
    image: "images/obsh6.jpg",
    description: {ru: "Студенческое общежитие ВятГУ.",
                  en: "VyatSU student dormitory.",
                  zh: "维亚特国立大学学生宿舍。"}
},

{
    id: 96,
    name: {ru: "Общежитие ВятГУ №7",
           en: "VyatSU Dormitory No. 7",
           zh: "维亚特国立大学宿舍7号"},
    category: ["students", "dorms"],
    coords: [58.567204, 49.688199],
    address: {ru: "Киров, ул. Ленина, д. 198/5",
              en: "Kirov, Lenina St., 198/5",
              zh: "基洛夫市，列宁街198/5号"},
    rating: null,
    image: "images/obsh7.jpg",
    description: {ru: "Студенческое общежитие ВятГУ.",
                  en: "VyatSU student dormitory.",
                  zh: "维亚特国立大学学生宿舍。"}
},

{
    id: 97,
    name: {ru: "Общежитие ВятГУ №8",
           en: "VyatSU Dormitory No. 8",
           zh: "维亚特国立大学宿舍8号"},
    category: ["students", "dorms"],
    coords: [58.590601, 49.677141],
    address: {ru: "Киров, ул. Свободы, д. 133",
              en: "Kirov, Svobody St., 133",
              zh: "基洛夫市，自由街133号"},
    rating: null,
    image: "images/obsh8.jpg",
    description: {ru: "Студенческое общежитие ВятГУ.",
                  en: "VyatSU student dormitory.",
                  zh: "维亚特国立大学学生宿舍。"}
},

{
    id: 98,
    name: {ru: "Пятёрочка",
           en: "Pyatorochka",
           zh: "维亚特国立大学宿舍8号"},
    category: ["students", "dorms"],
    coords: [58.5912, 49.6782],
    address: {ru: "Киров, ул. Свободы, д. 133",
              en: "Kirov, Svobody St., 133",
              zh: "基洛夫市，自由街133号"},
    rating: null,
    image: "images/obsh8.jpg",
    description: {ru: "Студенческое общежитие ВятГУ.",
                  en: "VyatSU student dormitory.",
                  zh: "维亚特国立大学学生宿舍。"}
},







];


var fullDescriptions = {

"Заповедник Нургуш": `Государственный природный заповедник «Нургуш» расположен в Кировской области и является одной из самых ценных природных территорий региона. Здесь охраняются редкие виды животных и растений, типичные для таёжной зоны. Территория заповедника включает леса, болота и озёра. Он используется для научных исследований и экологического туризма.`,

"Скальный массив Камень": `Скальный массив Камень представляет собой живописные известняковые выходы на берегу реки. Это популярное место среди туристов и любителей природы. Скалы имеют причудливую форму и служат отличной смотровой площадкой. Территория считается природным памятником.`,

"Озеро Шайтан": `Озеро Шайтан — карстовое озеро с необычной формой и глубиной. Оно известно своими подводными источниками и прозрачной водой. Вокруг озера растут хвойные леса, создающие живописный пейзаж. Место привлекает туристов и исследователей природы.`,

"Ежовский озерно-родниковый комплекс": `Этот природный комплекс включает несколько озёр и родников с чистой питьевой водой. Он имеет важное значение для сохранения природных экосистем региона. Территория используется для отдыха и экологического туризма. Здесь можно наблюдать разнообразную флору и фауну.`,

"Река Немда": `Река Немда — одна из самых красивых рек Кировской области. Она известна своими крутыми берегами, скалами и чистой водой. По реке проходят туристические маршруты для сплава. Вдоль берегов расположены живописные природные памятники.`,

"Озеро Лежнинское": `Лежнинское озеро считается самым глубоким в Кировской области. Оно образовалось в результате карстовых процессов. Вода в озере прозрачная и холодная. Это популярное место для отдыха и рыбалки.`,

"Береснятский водопад": `Береснятский водопад — один из немногих водопадов региона. Он расположен на небольшой реке среди леса. Высота водопада составляет несколько метров, но он выглядит очень эффектно. Место привлекает туристов и фотографов.`,

"Пруд Белохолуницкий": `Белохолуницкий пруд — крупный искусственный водоём, созданный для хозяйственных нужд. Сегодня он используется для отдыха и рыбалки. Вокруг пруда расположены зоны отдыха. Это популярное место среди местных жителей.`,

"Озеро Чваниха": `Озеро Чваниха — небольшое лесное озеро с чистой водой. Оно окружено хвойными деревьями и болотистой местностью. Здесь обитают водоплавающие птицы. Место подходит для тихого отдыха на природе.`,

"Бошляковское озеро": `Бошляковское озеро расположено в лесной зоне и отличается спокойной атмосферой. Вода в озере прозрачная, берега покрыты растительностью. Здесь часто отдыхают туристы и рыбаки. Территория считается природным памятником.`,

"Озеро Холуново": `Озеро Холуново — живописный водоём среди лесов Кировской области. Оно известно своей чистой водой и богатой рыбой. Вокруг озера оборудованы места для отдыха. Место популярно среди любителей природы.`,

"Озеро Падун": `Озеро Падун — небольшое природное озеро с живописными берегами. Оно окружено густыми лесами. Вода в озере прохладная и прозрачная. Здесь можно встретить разнообразных птиц и животных.`,

"Водопад Помяловка": `Водопад Помяловка — природный водопад, расположенный в лесной местности. Он образуется на ручье и особенно красив весной. Вокруг водопада растёт густая растительность. Это популярное место для прогулок и фотографий.`,

"Озеро Акшубень": `Озеро Акшубень — природный водоём карстового происхождения. Оно отличается чистой водой и спокойной атмосферой. Вокруг озера растут хвойные леса. Место используется для отдыха и рыбалки.`,

"Скала Часовой": `Скала Часовой — высокая известняковая скала на берегу реки. Она служит ориентиром для туристов и путешественников. С вершины открывается красивый вид на окружающую местность. Скала считается природным памятником.`,

"Зараменская пещера": `Зараменская пещера — природная карстовая пещера. Она образовалась в известняковых породах. Внутри пещеры можно увидеть сталактиты и другие интересные образования. Место привлекает спелеологов и туристов.`,

"Мухинская пещера": `Мухинская пещера — ещё один карстовый объект региона. Она имеет сложную систему ходов и залов. Пещера используется для научных исследований. Посещение возможно только с соблюдением мер безопасности.`,

"Нижнеивкинские источники": `Нижнеивкинские источники — известные минеральные источники с лечебной водой. Они используются в санаторно-курортном лечении. Вода содержит полезные минералы. Место популярно среди туристов и отдыхающих.`,

"Родник под Сокольей горой": `Этот родник считается одним из самых чистых источников воды в регионе. Вода в нём холодная и прозрачная. Родник расположен в живописной местности. Местные жители часто набирают здесь питьевую воду.`,

"Святые источники Аджим": `Святые источники Аджим имеют религиозное значение. Считается, что вода из них обладает целебными свойствами. Здесь часто проходят паломничества. Территория благоустроена для посетителей.`,

"Кугерский родник": 'Кугерский родник — природный источник чистой воды. Он расположен в лесной зоне. Вода из родника используется для питья. Место известно своей экологической чистотой.',

"Жуковлянские валуны": 'Жуковлянские валуны — крупные каменные глыбы ледникового происхождения. Они являются геологическим памятником природы. Камни имеют необычную форму и размеры. Место привлекает туристов и исследователей.',

"Ковровское городище": 'Ковровское городище — археологический памятник древнего поселения. Здесь найдены остатки укреплений и предметы быта. Учёные изучают историю древних народов региона. Место имеет историческую ценность.',

"Кладбище парейазавров": 'Это уникальное место, где были обнаружены останки древних животных — парейазавров. Находки относятся к древнему геологическому периоду. Территория имеет научное значение. Здесь проводятся исследования палеонтологов.',

"Истобенское городище": 'Истобенское городище — археологический памятник древнего поселения. Оно расположено на возвышенности возле реки. Здесь обнаружены следы жизни древних людей. Место изучается историками и археологами.',

"Кировский ботанический сад": 'Ботанический сад — научное и образовательное учреждение. Здесь выращиваются различные виды растений. Сад используется для исследований и отдыха. Посетители могут познакомиться с редкими видами флоры.',

"Комплекс Великорецкое": 'Великорецкий комплекс связан с православной историей региона. Здесь проходит знаменитый Великорецкий крестный ход. Место имеет религиозное значение. Территория привлекает паломников со всей России.',

"Бушковский лес": 'Бушковский лес — природная территория с богатой флорой и фауной. Здесь растут хвойные и лиственные деревья. Лес используется для прогулок и отдыха. Место считается экологически чистым.',

"Медведеский бор": 'Медведский бор — крупный сосновый лес. Он известен своими высокими деревьями и свежим воздухом. Территория используется для туризма и отдыха. Здесь можно встретить различных животных.',

"Атарская лука": 'Атарская лука — живописный изгиб реки с красивыми пейзажами. Место популярно среди туристов. Здесь можно заниматься рыбалкой и отдыхать на природе. Территория имеет природоохранное значение.',

"Комплекс Ошеть": 'Комплекс Ошеть — природно-историческая территория. Он включает леса, поля и водоёмы. Здесь расположены памятники природы. Место используется для туризма и отдыха.',

"Популяция кортузы Маттиоли": 'Кортуза Маттиоли — редкое растение, занесённое в Красную книгу. В Кировской области существует его природная популяция. Растение растёт в определённых условиях. Территория охраняется государством.',

"Динопарк": 'Динопарк — развлекательный парк с фигурами динозавров. Он предназначен для семейного отдыха. Здесь проводятся экскурсии и игровые программы. Место особенно популярно среди детей.',  

"Юркин парк": 'Юркин парк — тематический парк развлечений. Он включает аттракционы, игровые площадки и зоны отдыха. Парк подходит для семейных прогулок. Здесь часто проходят праздники и мероприятия.',

"Комплекс Порошино": 'Порошино — крупный спортивно-развлекательный комплекс. Здесь есть трассы для лыж, велосипедов и прогулок. Территория используется круглый год. Это популярное место активного отдыха.',

"Кафе Паприка": 'Кафе «Паприка» — популярное заведение общественного питания. Здесь подают блюда европейской и русской кухни. Интерьер уютный и современный. Место подходит для встреч и отдыха.',

"Динки Парк": 'Динки Парк — парк развлечений для детей и взрослых. Здесь расположены игровые зоны и аттракционы. Парк используется для семейного отдыха. Он популярен среди жителей города.',

"Ипподром": 'Кировский ипподром — спортивный объект для проведения конных соревнований. Здесь проходят скачки и тренировки лошадей. Территория используется для спортивных мероприятий. Посетители могут наблюдать за соревнованиями.',

"Зубаревский лес": 'Зубаревский лес — природная зона отдыха. Здесь проходят прогулочные маршруты. Лес известен своей экологической чистотой. Место популярно среди жителей города.',

"Кочуровский парк": 'Кочуровский парк — городской парк для отдыха и прогулок. Здесь есть детские площадки и спортивные зоны. Парк благоустроен и озеленён. Это популярное место отдыха горожан.',

"ТЦ Глобус": 'Торговый центр «Глобус» — крупный торгово-развлекательный комплекс. В нём расположены магазины, кафе и развлечения. Посетители могут совершать покупки и отдыхать. Центр пользуется популярностью среди жителей.',

"ТЦ Макси": 'Торговый центр «Макси» — современный торговый комплекс. Здесь представлены различные магазины и услуги. В центре есть зоны отдыха и развлечений. Он является одним из крупнейших ТЦ города.',

"Парк Победы": 'Парк Победы посвящён памяти участников Великой Отечественной войны. Здесь установлены памятники и мемориалы. Парк используется для прогулок и проведения мероприятий. Это важное историческое место города.',

"Парк имени 50-летия ВЛКСМ": 'Этот парк был создан в честь юбилея комсомольской организации. Здесь есть аллеи, площадки и зоны отдыха. Парк благоустроен и озеленён. Он используется для прогулок жителей.',

"Море парк": 'Море парк — современный центр отдыха и развлечений. Здесь расположены бассейны, сауны и зоны отдыха. Комплекс подходит для семейного посещения. Это популярное место досуга.',

"Парк имени С. М. Кирова": 'Парк имени Кирова — один из старейших парков города. Он расположен в центре и имеет развитую инфраструктуру. Здесь проходят культурные мероприятия. Парк является любимым местом отдыха жителей.',

"Кировский государственный цирк": 'Кировский цирк — культурное учреждение города. Здесь проходят цирковые представления и шоу. Здание цирка является архитектурной достопримечательностью. Место популярно среди семей с детьми.',

"Вятка-ЦУМ": 'Вятка-ЦУМ — центральный универсальный магазин города. В нём представлены различные товары и услуги. Здание расположено в центре города. Это важный торговый объект.',

"Сквер Алые Паруса": 'Сквер «Алые Паруса» — уютное место для прогулок. Здесь установлены скамейки и декоративные элементы. Сквер озеленён и благоустроен. Место популярно среди жителей.',

"ТЦ Европейский": 'Торговый центр «Европейский» — современный торговый комплекс. Здесь расположены магазины и кафе. Центр удобен для покупок. Он привлекает множество посетителей.',

"Сквер 60-летия СССР": 'Этот сквер создан в честь юбилея Советского Союза. Здесь расположены аллеи и зелёные зоны. Сквер используется для отдыха. Он является частью городской инфраструктуры.',

"Аполло": '«Аполло» — торгово-развлекательный центр. Здесь находятся магазины, кафе и кинотеатр. Центр подходит для семейного отдыха. Он пользуется популярностью среди жителей.',

"Сквер Трудовой славы": 'Сквер Трудовой славы посвящён трудовым достижениям жителей региона. Здесь установлены памятные знаки. Сквер используется для прогулок и мероприятий. Он имеет историческое значение.',

"Филейский парк": 'Филейский парк — зелёная зона отдыха в городе. Здесь есть прогулочные дорожки и детские площадки. Парк подходит для семейного отдыха. Он популярен среди жителей района.',

"Александровский сад": 'Александровский сад — один из старейших парков города. Он расположен на набережной реки. Здесь проходят культурные мероприятия и прогулки. Парк является историческим местом.',

"Музей К. Э. Циолковского, авиации и космонавтики": 'Этот музей посвящён развитию авиации и космонавтики. Здесь представлены модели самолётов и космической техники. Экспозиция рассказывает о жизни учёного Циолковского. Музей имеет образовательное значение.',

"Криолло": '«Криолло» — кафе-кондитерская, известная своими десертами. Здесь подают кофе и сладости. Интерьер современный и уютный. Заведение популярно среди жителей.',

"Музей истории Хлынова": 'Музей истории Хлынова рассказывает о прошлом города Кирова. Здесь представлены исторические документы и предметы. Экспозиция охватывает разные эпохи. Музей интересен туристам и школьникам.',

"Кировский областной краеведческий музей имени П. В. Алабина": 'Краеведческий музей — главный музей региона. В нём собраны археологические и исторические экспонаты. Экспозиция рассказывает о природе и культуре области. Музей является важным культурным центром.',

"Музей истории мороженого Артико": 'Этот музей посвящён истории производства мороженого. Здесь можно увидеть старинное оборудование и упаковки. Посетители узнают о технологиях изготовления. В музее проводят дегустации.',

"Дымковская игрушка": 'Дымковская игрушка — традиционный народный промысел Кировской области. Игрушки изготавливаются из глины и расписываются вручную. Они имеют яркие цвета и узоры. Промысел является символом региона.',

"Кировский государственный театр юного зрителя театр на Спасской": 'Театр на Спасской — культурное учреждение для детей и подростков. Здесь ставят спектакли по сказкам и литературным произведениям. Театр участвует в фестивалях. Он играет важную роль в культурной жизни города.',

"Кировский областной ордена Трудового Красного Знамени драматический театр имени С. М. Кирова": 'Драматический театр — один из старейших театров региона. Здесь проходят спектакли классического и современного репертуара. Здание театра является архитектурным памятником. Театр пользуется популярностью среди зрителей.',

"Кировский театр кукол имени А. Н. Афанасьева": 'Театр кукол — детский театр с богатой историей. Здесь ставят спектакли для детей разных возрастов. Представления отличаются яркими декорациями. Театр является важным культурным объектом города.',

"Академия Кавказской Кухни": '«Академия Кавказской Кухни» — ресторан, специализирующийся на блюдах кавказской кухни. Здесь подают шашлык, хачапури и другие национальные блюда. Интерьер оформлен в национальном стиле. Заведение популярно среди посетителей.',

"Музей К.Э. Циолковского, авиации и космонавтики": 'Музей К. Э. Циолковского, авиации и космонавтики в Кирове — это комплекс, посвящённый основоположнику отечественной космонавтики и освоению космоса. Расположен в историческом здании, где семья Циолковского жила в 1870‑х годах. В экспозиции — предметы быта XIX века, физические приборы, макеты дирижабля и аэродинамической трубы, прижизненные издания трудов учёного. С 2018 года музей объединён с Детским космическим центром им. В. П. Савиных, где есть планетарий и интерактивные залы.'

};


for (var i = 0; i < places.length; i++) {

    var name = places[i].name.ru;

    if (fullDescriptions[name]) {

        places[i].description_full = {
            ru: fullDescriptions[name],
            en: places[i].description.en || "",
            zh: places[i].description.en || ""
        };

    }

    if (!places[i].description_full) {

        places[i].description_full = {
            ru: "",
            en: ""
        };

    }
}

console.log("Подробные описания применены");
