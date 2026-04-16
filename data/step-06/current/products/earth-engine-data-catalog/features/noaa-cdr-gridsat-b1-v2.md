---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:20.243Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "NOAA/CDR/GRIDSAT-B1/V2"
feature_slug: "noaa-cdr-gridsat-b1-v2"
latest_feature_date: "2017-05-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/NOAA_CDR_GRIDSAT-B1_V2"
  - "https://developers.google.com/earth-engine/datasets/tags/satellite-imagery"
  - "https://developers.google.com/earth-engine/datasets/tags/climate"
keywords:
  - "noaa"
  - "cdr"
  - "gridsat"
  - "b1"
  - "v2"
  - "gridded"
  - "satellite"
  - "brightness"
---

# NOAA/CDR/GRIDSAT-B1/V2

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

NOAA CDR Gridded Satellite brightness temperatures from geostationary infrared channels.

## Extended Definition

NOAA CDR Gridded Satellite brightness temperatures from geostationary infrared channels.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/NOAA_CDR_GRIDSAT-B1_V2](https://developers.google.com/earth-engine/datasets/catalog/NOAA_CDR_GRIDSAT-B1_V2)
- [https://developers.google.com/earth-engine/datasets/tags/satellite-imagery](https://developers.google.com/earth-engine/datasets/tags/satellite-imagery)
- [https://developers.google.com/earth-engine/datasets/tags/climate](https://developers.google.com/earth-engine/datasets/tags/climate)

## Supporting Pages

### NOAA CDR GRIDSAT-B1: Geostationary IR Channel Brightness Temperature | Earth Engine Data Catalog | Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog/NOAA_CDR_GRIDSAT-B1_V2](https://developers.google.com/earth-engine/datasets/catalog/NOAA_CDR_GRIDSAT-B1_V2)
- Source ID: `feature-recovery-direct-http`
- Final score: 281
- Re-rank relevance: N/A

Evidence snippets:
- NOAA CDR GRIDSAT-B1: Geostationary IR Channel Brightness Temperature | Earth Engine Data Catalog | Google for Developers Перейти к основному контенту Earth Engine Data Catalog / English Deutsch Español Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體 日本語 한국어 Войти Главная Категории Все наборы данных Все теги Ландсат МОДИС Страж Издатель Сообщество Документация по API Статус набора данных Журнал изменений Earth Engine Data Catalog Главная Категории Все наборы данных Все теги Ландсат МОДИС Страж Издатель Сообщество Документация по API Статус набора данных Журнал изменений Эта страница переведена с помощью Cloud Translation API . Главная Earth Engine Data Catalog Все наборы данных Отправить отзыв NOAA CDR GRIDSAT-B1: Geostationary IR Channel Brightness Temperature Оптимизируйте свои подборки Сохраняйте и классифицируйте контент в соответствии со своими настройками. Доступность набора данных 1980-01-01T00:00:00Z–2024-09-30T21:00:00Z Производитель наборов данных НОАА Фрагмент кода земляного двигателя ee.ImageCollection("NOAA/CDR/GRIDSAT-B1/V2") open_in_new Каденция 3 часа Теги яркость cdr климат инфракрасный noaa отражательная способность sr фундаментальный геостационарный isccp Описание Примечание: Данный набор данных не обновлялся поставщиком с 31 марта 2024 года в связи с текущими обновлениями инфраструктуры. Сроки возобновления обновлений набора данных пока неизвестны. Этот набор данных представляет собой высококачественную запись климатических данных (CDR), содержащую глобальные инфракрасные измерения, полученные с геостационарных спутников. Данные геостационарного спутника (GridSat-B1) предоставляют информацию по 3 каналам: инфракрасному окну качества CDR (IRWIN) (около 11 мкм), видимому каналу (около 0,6 мкм) и инфракрасному каналу водяного пара (IRWVP) (около 6,7 мкм). Данные GridSat-B1 проецируются на глобальную сетку с шагом 0,07 градуса по широте с охватом данных с 1980 года по настоящее время. Эти данные получены из данных Международного проекта по климатологии облаков со спутников (ISCCP) B1 с интервалом в 3 часа. Список спутников, включенных в этот набор данных, и их долготное покрытие во времени можно посмотреть здесь . В областях перекрытия методология CDR объединяет данные со спутников, выбирая наблюдения в надире для каждой точки сетки. Примечания: Сопоставление спутниковых данных с их названиями содержится в свойствах изображения в виде satid_number: "satellite_name", например, satid_0: GOES-13, satid_1: GOES-15 и satid_2: GOES-16. Данные IRWIN скорректированы с учетом зенитного угла обзора, но эта коррекция не идеальна. Кроме того, она обрабатывает все спутники одинаково, тогда как зависимость от зенитного угла обзора будет различаться для каждого спутника. Будет заметен некоторый остаточный эффект в зависимости от зенитного угла обзора. Данные IRWVP не содержат коррекции зенитного угла обзора и не соответствуют качеству CDR. Данные VSCHN не содержат поправок на зенитный угол обзора и не соответствуют качеству CDR. Удалить коррекцию угла зенита для каналов IRWIN можно следующим образом: Original_temperature_observed = irwin_cdr - irwin_vza_adj Группы Группы Размер пикселя: 7792 метра (все диапазоны) Имя Единицы Мин Макс Шкала Компенсировать Размер пикселя Описание irwin_cdr К -2093* 13615* 0,01 200 7792 метра Яркостная температура вблизи 11 мкм, наблюдение в надире. irwin_2 К -4123* 13579* 0,01 200 7792 метра Яркостная температура вблизи 11 мкм, второе наилучшее наблюдение (на основе зенитного угла обзора). irwin_3 К -1624* 14240* 0,01 200 7792 метра Яркостная температура, третье лучшее наблюдение, основанное на зенитном угле обзора. irwvp К -5907* 10219* 0,01 200 7792 метра Яркостная температура вблизи 6,7 мкм, наблюдение в надире. irwvp_2 К -5081* 10260* 0,01 200 7792 метра Яркостная температура вблизи 6,7 мкм, второе наилучшее наблюдение, основанное на зенитном угле обзора. vschn -25000* 4275* 4e-05 1 7792 метра Отражательная способность в видимом диапазоне вблизи 0,6 мкм, наблюдение в надире. vschn_2 -25000* 3800* 4e-05 1 7792 метра Отражательная способность в видимом диапазоне около 0,6 мкм, второе наилучшее наблюдение, основанное на угле зенита обзора. irwin_vza_adj К 36* 171* 0,25 -10 7792 метра Внесены корректировки во все каналы IRWIN. Это позволяет пользователям отменить коррекцию зенита для переменной irwin_cdr. satid_ir1 0* 5* 7792 метра Значения satid для irwin_cdr. Для этого и других диапазонов satid соответствие satid имени спутника указано в свойствах каждого изображения. satid_ir2 0* 5* 7792 метра насыщенные значения для каждого пикселя для irwin_2 satid_ir3 0* 5* 7792 метра насыщенные значения для каждого пикселя для irwin_3 satid_wv1 0* 5* 7792 метра насыщенные значения для каждого пикселя для irwvp satid_wv2 0* 5* 7792 метра d-значения для каждого пикселя для irwvp2 satid_vs1 0* 5* 7792 метра насыщенные значения для каждого пикселя для vischn satid_vs2 0* 5* 7792 метра насыщенные значения для каждого пикселя для vischn2 * расчетное минимальное или максимальное значение Свойства изображения Свойства изображения Имя Тип Описание satid_0 НИТЬ Название спутника (см. примечания) satid_1 НИТЬ Название спутника (см. примечания) satid_2 НИТЬ Название спутника (см. примечания) satid_3 НИТЬ Название спутника (см. примечания) satid_4 НИТЬ Название спутника (см. примечания) satid_5 НИТЬ Название спутника (см. примечания) Условия эксплуатации Условия эксплуатации Официальным пунктом распространения данных CDR в рамках программы NOAA является Национальный климатический центр NOAA, который обеспечивает постоянный открытый доступ и активное управление данными пакетов CDR и связанной с ними информацией в соответствии с политикой и практикой открытых данных Соединенных Штатов, описанной в Меморандуме президента о «Политике открытых данных» и в соответствии с указом президента от 9 мая 2013 года «Об установлении нового стандарта для государственной информации в открытом и машиночитаемом формате». В соответствии с этой политикой, наборы данных CDR являются непатентованными, общедоступными, и на их использование не накладывается никаких ограничений. Для получения дополнительной информации см. документ «Добросовестное использование наборов данных CDR, алгоритмов и документации NOAA» в формате PDF. Цитаты Ссылки: Кеннет Р. Кнапп и программа NOAA CDR (2014): Запись климатических данных NOAA (CDR) на основе сеточных спутниковых данных ISCCP B1 (GridSat-B1) с яркостной температурой на длине волны 11 микрон, версия 2. [укажите использованный подмножество]. Национальный климатический центр NOAA. doi:10.7289/V59P2ZKR [дата доступа]. Кнапп, К.Р., С. Ансари, К.Л. Бейн, М.А. Бурасса, М.Дж. Дикинсон, К.Функ, К.Н. Хелмс, К.С. Хеннон, К.Д. Холмс, Г.Дж. Хаффман, Дж.П. Коссин, Х.-Т. Ли, А. Лоу и Г. Магнусдоттир, 2011: Глобальные спутниковые наблюдения (GridSat) для климатических исследований. Бюллетень Американского метеорологического общества, 92, 893-907. doi:10.1175/2011BAMS3039.1 DOI https://doi.org/10.1175/2011BAMS3039.1 https://doi.org/10.7289/V59P2ZKR Исследуйте мир с помощью Earth Engine. Важно: Earth Engine — это платформа для научного анализа и визуализации геопространственных наборов данных петабайтного масштаба, предназначенная как для общественного блага, так и для коммерческих и государственных пользователей.
- Filter . date ( '2017-05-01' , '2017-05-14' )); var brightnessTemp = dataset . select ([ 'irwin_cdr' , 'vschn' , 'irwvp' ]); var brightnessTempVis = { min : 500.0 , max : 10000.0 , }; Map . setCenter ( 7.71 , 17.93 , 2 ); Map . addLayer ( brightnessTemp , brightnessTempVis , 'Brightness Temperature' ); Открыть в редакторе кода NOAA CDR GRIDSAT-B1: Яркостная температура ИК-канала геостационарной станции. Примечание: Данный набор данных не обновлялся поставщиком с 31 марта 2024 года в связи с текущими обновлениями инфраструктуры. Сроки возобновления обновлений набора данных пока неизвестны. Этот набор данных представляет собой высококачественный климатический регистр (CDR) глобальных инфракрасных измерений с геостационарных спутников. Данные геостационарных спутников (GridSat-B1)… NOAA/CDR/GRIDSAT-B1/V2, яркость, cdr, климат, инфракрасный, noaa, отражательная способность, sr 1980-01-01T00:00:00Z/2024-09-30T21:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets https://doi.org/10.7289/V59P2ZKR https://doi.org/10.7289/V59P2ZKR Хотите рассказать подробнее? [[["Прост для понимания","easyToUnderstand","thumb-up"],["Помог мне решить мою проблему","solvedMyProblem","thumb-up"],["Другое","otherUp","thumb-up"]],[["Отсутствует нужная мне информация","missingTheInformationINeed","thumb-down"],["Слишком сложен/слишком много шагов","tooComplicatedTooManySteps","thumb-down"],["Устарел","outOfDate","thumb-down"],["Проблема с переводом текста","translationIssue","thumb-down"],["Проблемы образцов/кода","samplesCodeIssue","thumb-down"],["Другое","otherDown","thumb-down"]],[],[],["The NOAA CDR GridSat-B1 dataset offers global infrared measurements from geostationary satellites, spanning from 1980 to March 31, 2024, provided by NOAA.
- ImageCollection ( 'NOAA/CDR/GRIDSAT-B1/V2' ) . filter ( ee .

### "Datasets tagged satellite-imagery in Earth Engine \_|\_ Earth Engine Data\

- URL: [https://developers.google.com/earth-engine/datasets/tags/satellite-imagery](https://developers.google.com/earth-engine/datasets/tags/satellite-imagery)
- Source ID: `site-docs-root-3`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- Wavelengths between 1340-1445 nm and 1790-1955 nm are set to … airborne forest hyperspectral neon neon-prod-earthengine publisher-dataset NICFI Satellite Data Program Basemaps for Tropical Forest Monitoring - Africa This image collection provides access to high-resolution satellite monitoring of the tropics for the primary purpose of reducing and reversing the loss of tropical forests, contributing to combating climate change, conserving biodiversity, contributing to forest regrowth, restoration and enhancement, and facilitating sustainable development, all of … basemaps forest nicfi planet planet-nicfi publisher-dataset NICFI Satellite Data Program Basemaps for Tropical Forest Monitoring - Americas This image collection provides access to high-resolution satellite monitoring of the tropics for the primary purpose of reducing and reversing the loss of tropical forests, contributing to combating climate change, conserving biodiversity, contributing to forest regrowth, restoration and enhancement, and facilitating sustainable development, all of … basemaps forest nicfi planet planet-nicfi publisher-dataset NICFI Satellite Data Program Basemaps for Tropical Forest Monitoring - Asia This image collection provides access to high-resolution satellite monitoring of the tropics for the primary purpose of reducing and reversing the loss of tropical forests, contributing to combating climate change, conserving biodiversity, contributing to forest regrowth, restoration and enhancement, and facilitating sustainable development, all of … basemaps forest nicfi planet planet-nicfi publisher-dataset NOAA CDR AVHRR: Surface Reflectance, Version 5 The NOAA Climate Data Record (CDR) of AVHRR Surface Reflectance contains gridded daily surface reflectance and brightness temperatures derived from the Advanced Very High Resolution Radiometer (AVHRR) sensors onboard seven NOAA polar orbiting satellites.
- The VNP43IA4 product is produced daily using 16 days of VIIRS data … brdf land nasa noaa satellite-imagery surface Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
- Data are provided for three imagery bands (I1, I2, I3) at nominal 500 meter resolution ( 463 meter) … daily nasa noaa npp reflectance satellite-imagery VNP09H1: VIIRS Surface Reflectance 8-Day L3 Global 500m The 8-day Visible Infrared Imaging Radiometer Suite (VIIRS) Surface Reflectance (VNP09H1) Version 1 composite product provides an estimate of land surface reflectance from the Suomi National Polar-orbiting Partnership (Suomi NPP) VIIRS sensor for three imagery bands (I1, I2, I3) at nominal 500m resolution ( 463m).
- The mosaic consists of pan-sharpened normalized surface reflectance scenes (Landsat ETM+ bands 1, 2, 3, and … antarctica ice landsat-derived lima mosaic satellite-imagery MCD19A1.061: Land Surface BRF Daily L2G Global 500m and 1km The MCD19A1 Version 6.1 data product is a Moderate Resolution Imaging Spectroradiometer (MODIS) Terra and Aqua combined Land Surface Bidirectional Reflectance Factor (BRF) gridded Level 2 product produced daily at 500 meter and 1 kilometer resolution.

### "Datasets tagged climate in Earth Engine \_|\_ Earth Engine Data Catalog\

- URL: [https://developers.google.com/earth-engine/datasets/tags/climate](https://developers.google.com/earth-engine/datasets/tags/climate)
- Source ID: `site-docs-root`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- This dataset provides a high quality Climate Data Record (CDR) of global infrared measurements from geostationary satellites. … brightness cdr climate infrared noaa reflectance NOAA CDR PATMOSX: Cloud Properties, Reflectance, and Brightness Temperatures, Version 5.3 This dataset provides high quality Climate Data Record (CDR) of multiple cloud properties along with Advanced Very High Resolution Radiometer (AVHRR) Pathfinder Atmospheres Extended (PATMOS-x) brightness temperatures and reflectances.
- This dataset is the primary (default) forcing file (File A) for Phase … climate evaporation forcing geophysical hourly humidity NOAA CDR GRIDSAT-B1: Geostationary IR Channel Brightness Temperature Note: This dataset has not been updated by the provider since 2024-03-31 due to ongoing infrastructure updates.
- CHIRPS incorporates 0.05° resolution satellite imagery with in-situ station data to create gridded rainfall time series for trend analysis and seasonal drought monitoring. chg climate geophysical precipitation ucsb weather CHIRPS Precipitation Pentad: Climate Hazards Center InfraRed Precipitation With Station Data (Version 3.0) The Climate Hazards Center Infrared Precipitation with Stations (CHIRPS v3) is a 40+ year, high-resolution quasi-global rainfall dataset.
- CHIRPS incorporates 0.05° resolution satellite imagery with in-situ station data to create gridded rainfall time series for trend analysis and seasonal drought monitoring. chg climate geophysical precipitation ucsb weather CHIRPS Precipitation Pentad: Climate Hazards Center InfraRed Precipitation With Station Data (Version 2.0 Final) Climate Hazards Center InfraRed Precipitation with Station data (CHIRPS) is a 30+ year quasi-global rainfall dataset.

