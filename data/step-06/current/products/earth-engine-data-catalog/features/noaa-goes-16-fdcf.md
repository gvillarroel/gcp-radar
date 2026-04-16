---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:19.981Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "NOAA/GOES/16/FDCF"
feature_slug: "noaa-goes-16-fdcf"
latest_feature_date: "2019-10-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/NOAA_GOES_16_FDCF"
  - "https://developers.google.com/earth-engine/datasets/tags/fire"
  - "https://developers.google.com/earth-engine/datasets/catalog"
keywords:
  - "noaa"
  - "goes"
  - "16"
  - "fdcf"
  - "abi"
  - "level"
  - "fire"
  - "hot"
---

# NOAA/GOES/16/FDCF

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

GOES-16 ABI Level 2 Fire/Hot Spot Characterization Full Disk.

## Extended Definition

GOES-16 ABI Level 2 Fire/Hot Spot Characterization Full Disk.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/NOAA_GOES_16_FDCF](https://developers.google.com/earth-engine/datasets/catalog/NOAA_GOES_16_FDCF)
- [https://developers.google.com/earth-engine/datasets/tags/fire](https://developers.google.com/earth-engine/datasets/tags/fire)
- [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)

## Supporting Pages

### GOES-16 FDCF Series ABI Level 2 Fire/Hot Spot Characterization Full Disk | Earth Engine Data Catalog | Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog/NOAA_GOES_16_FDCF](https://developers.google.com/earth-engine/datasets/catalog/NOAA_GOES_16_FDCF)
- Source ID: `feature-recovery-direct-http`
- Final score: 341
- Re-rank relevance: N/A

Evidence snippets:
- GOES-16 FDCF Series ABI Level 2 Fire/Hot Spot Characterization Full Disk | Earth Engine Data Catalog | Google for Developers Перейти к основному контенту Earth Engine Data Catalog / English Deutsch Español Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體 日本語 한국어 Войти Главная Категории Все наборы данных Все теги Ландсат МОДИС Страж Издатель Сообщество Документация по API Статус набора данных Журнал изменений Earth Engine Data Catalog Главная Категории Все наборы данных Все теги Ландсат МОДИС Страж Издатель Сообщество Документация по API Статус набора данных Журнал изменений Эта страница переведена с помощью Cloud Translation API . Главная Earth Engine Data Catalog Все наборы данных Отправить отзыв GOES-16 FDCF Series ABI Level 2 Fire/Hot Spot Characterization Full Disk Оптимизируйте свои подборки Сохраняйте и классифицируйте контент в соответствии со своими настройками. Доступность набора данных 2017-05-24T00:00:00Z–2025-04-07T18:30:20.600000Z Производитель наборов данных НОАА Фрагмент кода земляного двигателя ee.ImageCollection("NOAA/GOES/16/FDCF") open_in_new Каденция 10 минут Теги abi fdc fire goes goes-16 goes-east goes-r hotspot nesdis noaa ospo wildfire Описание Продукт Fire (HSC) содержит четыре изображения: одно в виде маски пожара, а три других содержат значения пикселей, определяющие температуру пожара, площадь пожара и мощность излучения пожара. Метаданные маски ABI L2+ FHS присваивают каждому пикселю, полученному с помощью навигации по Земле, флаг, указывающий на его расположение относительно алгоритма FHS. Пользователям, которые наименее терпимы к ложным срабатываниям, следует сосредоточиться на категориях «обработанные» и «насыщенные» (коды масок 10, 11, 30 и 31), но даже в этих категориях могут возникать ложные срабатывания. Ранее известный как "GOES East"; с 7 апреля 2025 года его заменил GOES-19 .
- Buffer fires based on area to make them stand out. var fireAreaFeatureCollection = fireAreaVectors . map ( function ( feature ) { return feature . buffer ( feature . getNumber ( 'area' ). add ( 1 ). pow ( 1.76 )); }); Map . addLayer ( fireAreaFeatureCollection , { color : 'orange' }, 'Fire area (orange)' ); var temperatureVector = temperatureImage . reduceToVectors ({ geometry : geometry , scale : 2000 , geometryType : 'centroid' , labelProperty : 'temp' , maxPixels : 1e10 , }); // Buffer fires based on temperature to make them stand out. var temperature = temperatureVector . map ( function ( feature ) { return feature . buffer ( feature . getNumber ( 'temp' ). add ( 2 ). pow ( 1.3 )); }); Map . addLayer ( temperature , { color : 'red' }, 'Temperature (red)' ); Открыть в редакторе кода Полнодисковая характеристика очагов возгорания/горячих точек серии GOES-16 FDCF с уровнем ABI 2 ABI. Продукт Fire (HSC) содержит четыре изображения: одно в виде маски пожара, а три других содержат значения пикселей, определяющие температуру пожара, площадь пожара и мощность излучения пожара. Метаданные маски ABI L2+ FHS присваивают каждому пикселю, находящемуся в зоне видимости Земли, флаг, указывающий на его расположение относительно… NOAA/GOES/16/FDCF, abi,fdc,fire,goes,goes-16,goes-east,goes-r,hotspot,nesdis,noaa,ospo,wildfire 2017-05-24T00:00:00Z/2025-04-07T18:30:20.600000Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets https://doi.org/10.1175/BAMS-D-15-00230.1 https://doi.org/10.1175/BAMS-D-15-00230.1 Хотите рассказать подробнее? [[["Прост для понимания","easyToUnderstand","thumb-up"],["Помог мне решить мою проблему","solvedMyProblem","thumb-up"],["Другое","otherUp","thumb-up"]],[["Отсутствует нужная мне информация","missingTheInformationINeed","thumb-down"],["Слишком сложен/слишком много шагов","tooComplicatedTooManySteps","thumb-down"],["Устарел","outOfDate","thumb-down"],["Проблема с переводом текста","translationIssue","thumb-down"],["Проблемы образцов/кода","samplesCodeIssue","thumb-down"],["Другое","otherDown","thumb-down"]],[],[],[]] GitHub Earth Engine on GitHub Medium Follow our blog on Medium GIS Stack Exchange Ask questions using the google-earth-engine tag Twitter Follow @googleearth on Twitter Videos Earth Engine on YouTube Соцсети Блог Bluesky Instagram LinkedIn X (Твиттер) YouTube Программы Google Developer Program Google Developer Groups Google Developer Experts Accelerators Google Cloud & NVIDIA Консоли разработчика Google API Console Google Cloud Platform Console Google Play Console Firebase Console Actions on Google Console Cast SDK Developer Console Chrome Web Store Dashboard Google Home Developer Console Android Chrome Firebase Google Cloud Platform Google AI Все продукты Условия использования Конфиденциальность Manage cookies English Deutsch Español Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體 日本語 한국어
- Image ( 'NOAA/GOES/16/FDCF/2019167024053900000' ); var fireAreaImage = image . select ( 'Area' ); var temperatureImage = image . select ( 'Temp' ); var dataQualityFlagsImage = image . select ( 'DQF' ); var xMin = - 142 ; // On station as GOES-E var xMax = xMin + 135 ; Map . setCenter (( xMin + xMax ) / 2 , 15 , 3 ); var geometry = ee .
- README NOAA предоставляет следующие скрипты для предлагаемых категорий, цветовых карт и визуализаций: GOES-16-17_FireDetection.js GOES-16-17_FireReclassification.js Управление спутниковых и продуктовых операций NOAA ведет канал общих сообщений о состоянии спутниковых систем , где публикуются обновления статуса. Группы Группы Размер пикселя: 2000 метров (все диапазоны) Имя Единицы Мин Макс Шкала Компенсировать Размер пикселя Описание Area м^2 0* 16723* 60.98 4000 2000 метров Пожарная зона Temp К 0* 32642* 0.0549367 400 2000 метров Температура огня Mask 2000 метров Категории маски пожара. Значения пикселей на изображении маски пожара определяют категорию пожара и диагностическую информацию, связанную с выполнением алгоритма. Шесть категорий пожара включают: пиксель пожара хорошего качества или пиксель пожара хорошего качества, прошедший временную фильтрацию; насыщенный пиксель пожара или пиксель пожара насыщенного качества, прошедший временную фильтрацию; пиксель пожара, загрязненный облаками или пиксель пожара, загрязненный облаками, прошедший временную фильтрацию; пиксель пожара высокой вероятности или пиксель пожара высокой вероятности, прошедший временную фильтрацию; пиксель пожара средней вероятности или пиксель пожара высокой вероятности, прошедший временную фильтрацию; пиксель пожара низкой вероятности или пиксель пожара высокой вероятности, прошедший временную фильтрацию. Пиксели пожара, прошедшие временную фильтрацию, — это пиксели пожара, находящиеся в непосредственной близости друг от друга как в пространстве, так и во времени.

### "Datasets tagged fire in Earth Engine \_|\_ Earth Engine Data Catalog \_\

- URL: [https://developers.google.com/earth-engine/datasets/tags/fire](https://developers.google.com/earth-engine/datasets/tags/fire)
- Source ID: `site-docs-root-3`
- Final score: 159
- Re-rank relevance: N/A

Evidence snippets:
- The ABI L2+ FHS metadata mask assigns a flag to every earth-navigated pixel that … abi fdc fire goes goes-16 goes-east GOES-16 FDCF Series ABI Level 2 Fire/Hot Spot Characterization Full Disk The Fire (HSC) product contains four images: one in the form of a fire mask and the other three with pixel values identifying fire temperature, fire area, and fire radiative power.
- The ABI L2+ FHS metadata mask assigns a flag to every earth-navigated pixel that … abi fdc fire goes goes-17 goes-s GOES-17 FDCF Series ABI Level 2 Fire/Hot Spot Characterization Full Disk The Fire (HSC) product contains four images: one in the form of a fire mask and the other three with pixel values identifying fire temperature, fire area, and fire radiative power.
- The ABI L2+ FHS metadata mask assigns a flag to every earth-navigated pixel that … abi fdc fire goes goes-18 goes-t GOES-18 FDCF Series ABI Level 2 Fire/Hot Spot Characterization Full Disk The Fire (HSC) product contains four images: one in the form of a fire mask and the other three with pixel values identifying fire temperature, fire area, and fire radiative power.
- The ABI L2+ FHS metadata … abi fdc fire goes goes-19 goes-east GOES-19 FDCF Series ABI Level 2 Fire/Hot Spot Characterization Full Disk The Fire (HSC) product contains four images: one in the form of a fire mask and the other three with pixel values identifying fire temperature, fire area, and fire radiative power.

### Earth Engine Data Catalog \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- Source ID: `site-docs-root`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- The ABI L2+ FHS metadata mask assigns a flag to every earth-navigated pixel that … abi fdc fire goes goes-16 goes-east GOES-16 FDCF Series ABI Level 2 Fire/Hot Spot Characterization Full Disk The Fire (HSC) product contains four images: one in the form of a fire mask and the other three with pixel values identifying fire temperature, fire area, and fire radiative power.
- The ABI L2+ FHS metadata mask assigns a flag to every earth-navigated pixel that … abi fdc fire goes goes-17 goes-s GOES-17 FDCF Series ABI Level 2 Fire/Hot Spot Characterization Full Disk The Fire (HSC) product contains four images: one in the form of a fire mask and the other three with pixel values identifying fire temperature, fire area, and fire radiative power.
- The ABI L2+ FHS metadata mask assigns a flag to every earth-navigated pixel that … abi fdc fire goes goes-18 goes-t GOES-18 FDCF Series ABI Level 2 Fire/Hot Spot Characterization Full Disk The Fire (HSC) product contains four images: one in the form of a fire mask and the other three with pixel values identifying fire temperature, fire area, and fire radiative power.
- The ABI L2+ FHS metadata … abi fdc fire goes goes-19 goes-east GOES-19 FDCF Series ABI Level 2 Fire/Hot Spot Characterization Full Disk The Fire (HSC) product contains four images: one in the form of a fire mask and the other three with pixel values identifying fire temperature, fire area, and fire radiative power.

