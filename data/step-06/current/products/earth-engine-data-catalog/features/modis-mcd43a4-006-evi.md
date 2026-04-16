---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:20.162Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "MODIS/MCD43A4_006_EVI"
feature_slug: "modis-mcd43a4-006-evi"
latest_feature_date: "2018-01-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/MODIS_MCD43A4_006_EVI"
  - "https://developers.google.com/earth-engine/datasets/catalog/modis"
keywords:
  - "modis"
  - "mcd43a4"
  - "006"
  - "evi"
  - "combined"
  - "16"
  - "day"
  - "enhanced"
---

# MODIS/MCD43A4_006_EVI

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

A MODIS combined 16-day enhanced vegetation index dataset.

## Extended Definition

A MODIS combined 16-day enhanced vegetation index dataset.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/MODIS_MCD43A4_006_EVI](https://developers.google.com/earth-engine/datasets/catalog/MODIS_MCD43A4_006_EVI)
- [https://developers.google.com/earth-engine/datasets/catalog/modis](https://developers.google.com/earth-engine/datasets/catalog/modis)

## Supporting Pages

### MODIS Combined 16-Day EVI | Earth Engine Data Catalog | Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog/MODIS_MCD43A4_006_EVI](https://developers.google.com/earth-engine/datasets/catalog/MODIS_MCD43A4_006_EVI)
- Source ID: `feature-recovery-direct-http`
- Final score: 336
- Re-rank relevance: N/A

Evidence snippets:
- MODIS Combined 16-Day EVI | Earth Engine Data Catalog | Google for Developers Перейти к основному контенту Earth Engine Data Catalog / English Deutsch Español Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體 日本語 한국어 Войти Главная Категории Все наборы данных Все теги Ландсат МОДИС Страж Издатель Сообщество Документация по API Статус набора данных Журнал изменений Earth Engine Data Catalog Главная Категории Все наборы данных Все теги Ландсат МОДИС Страж Издатель Сообщество Документация по API Статус набора данных Журнал изменений Эта страница переведена с помощью Cloud Translation API . Главная Earth Engine Data Catalog Категории Отправить отзыв MODIS Combined 16-Day EVI Оптимизируйте свои подборки Сохраняйте и классифицируйте контент в соответствии со своими настройками. Доступность набора данных 2000-02-24T00:00:00Z–2023-02-10T00:00:00Z Производитель наборов данных Google Фрагмент кода земляного двигателя ee.ImageCollection("MODIS/MCD43A4_006_EVI") open_in_new Каденция 1 день Теги альбедо brdf ежедневно еви глобальный mcd43a4 модис НАСА отражательная способность USGS индексы растительности Описание Повышенный индекс растительности (EVI) рассчитывается на основе ближнего ИК-диапазона, красного и синего диапазонов каждого изображения и принимает значения от -1,0 до 1,0. Подробности см. в работе Huete et al. (2002) . Данный продукт создан на основе композитных изображений поверхностного отражения MODIS/006/MCD43A4. Группы Группы Размер пикселя: 463,313 метра (все диапазоны) Имя Размер пикселя Описание EVI 463,313 метра Расширенный индекс растительности Условия эксплуатации Условия эксплуатации Данные и продукты MODIS, полученные через LP DAAC, не подлежат никаким ограничениям на последующее использование, продажу или распространение. Исследуйте мир с помощью Earth Engine. Важно: Earth Engine — это платформа для научного анализа и визуализации геопространственных наборов данных петабайтного масштаба, предназначенная как для общественного блага, так и для коммерческих и государственных пользователей.
- MODIS/MCD43A4_006_EVI, albedo,brdf,daily,evi,global,mcd43a4,modis,nasa,reflectance,usgs,vegetation-indices 2000-02-24T00:00:00Z/2023-02-10T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets Хотите рассказать подробнее? [[["Прост для понимания","easyToUnderstand","thumb-up"],["Помог мне решить мою проблему","solvedMyProblem","thumb-up"],["Другое","otherUp","thumb-up"]],[["Отсутствует нужная мне информация","missingTheInformationINeed","thumb-down"],["Слишком сложен/слишком много шагов","tooComplicatedTooManySteps","thumb-down"],["Устарел","outOfDate","thumb-down"],["Проблема с переводом текста","translationIssue","thumb-down"],["Проблемы образцов/кода","samplesCodeIssue","thumb-down"],["Другое","otherDown","thumb-down"]],[],[],["The dataset, MODIS/MCD43A4_006_EVI, provided by Google, offers the Enhanced Vegetation Index (EVI) from 2000-02-24 to 2023-02-10 with a 1-day cadence.
- ImageCollection ( 'MODIS/MCD43A4_006_EVI' ) . filter ( ee .
- Filter . date ( '2018-04-01' , '2018-06-01' )); var colorized = dataset . select ( 'EVI' ); var colorizedVis = { min : 0 , max : 1 , palette : [ 'ffffff' , 'ce7e45' , 'df923d' , 'f1b555' , 'fcd163' , '99b718' , '74a901' , '66a000' , '529400' , '3e8601' , '207401' , '056201' , '004c00' , '023b01' , '012e01' , '011d01' , '011301' ], }; Map . setCenter ( - 7.03125 , 31.0529339857 , 2 ); Map . addLayer ( colorized , colorizedVis , 'Colorized' ); Открыть в редакторе кода Сводный 16-дневный индекс EVI MODIS Повышенный индекс растительности (EVI) рассчитывается на основе ближнего ИК-диапазона, красного и синего диапазонов каждого изображения и принимает значения от -1,0 до 1,0. Подробности см. в работе Huete et al. (2002). Данный продукт создан на основе композитных изображений поверхностного отражения MODIS/006/MCD43A4.

### "MODIS Collections in Earth Engine \_|\_ Earth Engine Data Catalog \_|\_\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/modis](https://developers.google.com/earth-engine/datasets/catalog/modis)
- Source ID: `site-docs-root`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- This product is generated from the MODIS/006/MCD43A4 surface reflectance composites. photo library MODIS/MCD43A4 006 EVI MODIS Combined 16-Day NDSI The Normalized Difference Snow Index is used to identify snow, based on its characteristically higher reflectance in the visible portion of the spectrum compared to the mid-IR.
- This product is generated from the MODIS/006/MCD43A4 surface reflectance composites. photo library MODIS/MCD43A4 006 BAI MODIS Combined 16-Day EVI The Enhanced Vegetation Index (EVI) is generated from the Near-IR, Red and Blue bands of each scene, and ranges in value from -1.0 to 1.0.
- This product is generated from the MODIS/006/MCD43A4 surface reflectance composites. photo library MODIS/MCD43A4 006 NDSI MODIS Combined 16-Day NDVI The Normalized Difference Vegetation Index is generated from the Near-IR and Red bands of each scene as (NIR - Red) / (NIR + Red), and ranges in value from -1.0 to 1.0.
- This product is generated from the MODIS/006/MCD43A4 surface reflectance composites. photo library MODIS/MCD43A4 006 NDVI MODIS Combined 16-Day NDWI The Normalized Difference Water Index (NDWI) is sensitive to changes in liquid water content of vegetation canopies.

### Earth Engine Data Catalog \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- Source ID: `site-docs-root`
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- The MCD12Q2 Version 6.1 data product is derived from time series of the 2-band Enhanced Vegetation Index (EVI2) … evi global landuse-landcover modis onset-greenness phenology MCD15A3H.061 MODIS Leaf Area Index/FPAR 4-Day Global 500m The MCD15A3H Version 6.1 Moderate Resolution Imaging Spectroradiometer (MODIS) Level 4, Combined Fraction of Photosynthetically Active Radiation (FPAR), and Leaf Area Index (LAI) product is a 4-day composite data set with 500 meter pixel size.
- The Multivariate Adaptive Constructed Analogs (MACA) method is a statistical downscaling method which utilizes a training dataset (i.e. a meteorological observation dataset) to remove historical biases and match spatial patterns … climate conus geophysical idaho maca monthly MCD12C1.061 MODIS Land Cover Type Yearly Global 0.05 Deg CMG The Terra and Aqua combined Moderate Resolution Imaging Spectroradiometer (MODIS) Land Cover Climate Modeling Grid (CMG) (MCD12C1) Version 6.1 data product provides a spatially aggregated and reprojected version of the tiled MCD12Q1 Version 6.1 data product.
- It provides both directional hemispherical reflectance (black sky albedo) and bihemispherical reflectance (white sky albedo) for each of the MODIS surface reflectance bands (band 1 through band 7) as well as 3 broad spectrum … albedo black-sky daily global modis nasa MCD43A4.061 MODIS Nadir BRDF-Adjusted Reflectance Daily 500m The MCD43A4 V6.1 Nadir Bidirectional Reflectance Distribution Function Adjusted Reflectance (NBAR) product provides 500 meter reflectance data of the MODIS "land" bands 1-7.
- Based on the unique LUCAS 2018 Copernicus in-situ survey, this dataset represents the first … agriculture crop eu jrc lucas sentinel1-derived EVI: Malaria Atlas Project Gap-Filled Enhanced Vegetation Index (8-Daily 1km) The underlying dataset for this Enhanced Vegetation Index (EVI) product is MODIS BRDF-corrected imagery (MCD43B4), which was gap-filled using the approach outlined in Weiss et al. (2014) to eliminate missing data caused by factors such as cloud cover.

