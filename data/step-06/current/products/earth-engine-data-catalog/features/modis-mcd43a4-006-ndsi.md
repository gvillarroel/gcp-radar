---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:20.163Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "MODIS/MCD43A4_006_NDSI"
feature_slug: "modis-mcd43a4-006-ndsi"
latest_feature_date: "2018-01-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/MODIS_MCD43A4_006_NDSI"
  - "https://developers.google.com/earth-engine/datasets/catalog/modis"
keywords:
  - "modis"
  - "mcd43a4"
  - "006"
  - "ndsi"
  - "combined"
  - "16"
  - "day"
  - "normalized"
---

# MODIS/MCD43A4_006_NDSI

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

A MODIS combined 16-day normalized difference snow index dataset.

## Extended Definition

A MODIS combined 16-day normalized difference snow index dataset.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/MODIS_MCD43A4_006_NDSI](https://developers.google.com/earth-engine/datasets/catalog/MODIS_MCD43A4_006_NDSI)
- [https://developers.google.com/earth-engine/datasets/catalog/modis](https://developers.google.com/earth-engine/datasets/catalog/modis)

## Supporting Pages

### MODIS Combined 16-Day NDSI | Earth Engine Data Catalog | Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog/MODIS_MCD43A4_006_NDSI](https://developers.google.com/earth-engine/datasets/catalog/MODIS_MCD43A4_006_NDSI)
- Source ID: `feature-recovery-direct-http`
- Final score: 370
- Re-rank relevance: N/A

Evidence snippets:
- Ketersediaan Set Data 2000-02-24T00:00:00Z–2023-02-10T00:00:00Z Produsen Set Data Google Cuplikan Earth Engine ee.ImageCollection("MODIS/MCD43A4_006_NDSI") open_in_new Frekuensi 1 Hari Tag albedo brdf harian global mcd43a4 modis nasa ndsi pantulan usgs indeks vegetasi Deskripsi Normalized Difference Snow Index digunakan untuk mengidentifikasi salju, berdasarkan reflektansinya yang lebih tinggi secara karakteristik dalam spektrum yang terlihat dibandingkan dengan mid-IR.
- Lihat Riggs et al. (1994) untuk … MODIS/MCD43A4_006_NDSI, albedo,brdf,daily,global,mcd43a4,modis,nasa,ndsi,reflectance,usgs,vegetation-indices 2000-02-24T00:00:00Z/2023-02-10T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets Ada masukan untuk kami? [[["Mudah dipahami","easyToUnderstand","thumb-up"],["Memecahkan masalah saya","solvedMyProblem","thumb-up"],["Lainnya","otherUp","thumb-up"]],[["Informasi yang saya butuhkan tidak ada","missingTheInformationINeed","thumb-down"],["Terlalu rumit/langkahnya terlalu banyak","tooComplicatedTooManySteps","thumb-down"],["Sudah usang","outOfDate","thumb-down"],["Masalah terjemahan","translationIssue","thumb-down"],["Masalah kode / contoh","samplesCodeIssue","thumb-down"],["Lainnya","otherDown","thumb-down"]],[],[],[]] GitHub Earth Engine on GitHub Medium Follow our blog on Medium GIS Stack Exchange Ask questions using the google-earth-engine tag Twitter Follow @googleearth on Twitter Videos Earth Engine on YouTube Hubungkan Blog Bluesky Instagram LinkedIn X (Twitter) YouTube Program Google Developer Program Google Developer Groups Google Developer Experts Accelerators Google Cloud & NVIDIA Konsol developer Google API Console Google Cloud Platform Console Konsol Google Play Firebase Console Actions on Google Console Cast SDK Developer Console Chrome Web Store Dashboard Google Home Developer Console Android Chrome Firebase Google Cloud Platform Google AI Semua produk Persyaratan Privasi Manage cookies English Deutsch Español Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體 日本語 한국어
- ImageCollection ( 'MODIS/MCD43A4_006_NDSI' ) . filter ( ee .
- Filter . date ( '2018-04-01' , '2018-06-01' )); var colorized = dataset . select ( 'NDSI' ); var colorizedVis = { palette : [ '000088' , '0000ff' , '8888ff' , 'ffffff' ], }; Map . setCenter ( - 7.03125 , 31.0529339857 , 2 ); Map . addLayer ( colorized , colorizedVis , 'Colorized' ); Buka di Editor Kode MODIS Combined 16-Day NDSI Normalized Difference Snow Index digunakan untuk mengidentifikasi salju, berdasarkan pantulan yang lebih tinggi secara karakteristik dalam bagian spektrum yang terlihat dibandingkan dengan mid-IR.

### "MODIS Collections in Earth Engine \_|\_ Earth Engine Data Catalog \_|\_\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/modis](https://developers.google.com/earth-engine/datasets/catalog/modis)
- Source ID: `site-docs-root`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- This product is generated from the MODIS/006/MCD43A4 surface reflectance composites. photo library MODIS/MCD43A4 006 NDSI MODIS Combined 16-Day NDVI The Normalized Difference Vegetation Index is generated from the Near-IR and Red bands of each scene as (NIR - Red) / (NIR + Red), and ranges in value from -1.0 to 1.0.
- This product is generated from the MODIS/006/MCD43A4 surface reflectance composites. photo library MODIS/MCD43A4 006 EVI MODIS Combined 16-Day NDSI The Normalized Difference Snow Index is used to identify snow, based on its characteristically higher reflectance in the visible portion of the spectrum compared to the mid-IR.
- This product is generated from the MODIS/006/MCD43A4 surface reflectance composites. photo library MODIS/MCD43A4 006 NDVI MODIS Combined 16-Day NDWI The Normalized Difference Water Index (NDWI) is sensitive to changes in liquid water content of vegetation canopies.
- Snow cover data are based on a snow mapping algorithm that employs a Normalized Difference Snow Index (NDSI) and other criteria tests. photo library MODIS/061/MOD10A1 MOD11A1.061 Terra Land Surface Temperature and Emissivity Daily Global 1km The MOD11A1 V6.1 product provides daily land surface temperature (LST) and emissivity values in a 1200 x 1200 kilometer grid.

### Earth Engine Data Catalog \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- Source ID: `site-docs-root`
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- The Multivariate Adaptive Constructed Analogs (MACA) method is a statistical downscaling method which utilizes a training dataset (i.e. a meteorological observation dataset) to remove historical biases and match spatial patterns … climate conus geophysical idaho maca monthly MCD12C1.061 MODIS Land Cover Type Yearly Global 0.05 Deg CMG The Terra and Aqua combined Moderate Resolution Imaging Spectroradiometer (MODIS) Land Cover Climate Modeling Grid (CMG) (MCD12C1) Version 6.1 data product provides a spatially aggregated and reprojected version of the tiled MCD12Q1 Version 6.1 data product.
- It provides both directional hemispherical reflectance (black sky albedo) and bihemispherical reflectance (white sky albedo) for each of the MODIS surface reflectance bands (band 1 through band 7) as well as 3 broad spectrum … albedo black-sky daily global modis nasa MCD43A4.061 MODIS Nadir BRDF-Adjusted Reflectance Daily 500m The MCD43A4 V6.1 Nadir Bidirectional Reflectance Distribution Function Adjusted Reflectance (NBAR) product provides 500 meter reflectance data of the MODIS "land" bands 1-7.
- The MCD12Q2 Version 6.1 data product is derived from time series of the 2-band Enhanced Vegetation Index (EVI2) … evi global landuse-landcover modis onset-greenness phenology MCD15A3H.061 MODIS Leaf Area Index/FPAR 4-Day Global 500m The MCD15A3H Version 6.1 Moderate Resolution Imaging Spectroradiometer (MODIS) Level 4, Combined Fraction of Photosynthetically Active Radiation (FPAR), and Leaf Area Index (LAI) product is a 4-day composite data set with 500 meter pixel size.
- DSR is incident solar radiation over land surfaces … climate par radiation MCD18C2.062 Photosynthetically Active Radiation Daily 3-Hour The MCD18C2 Version 6.2 is a Moderate Resolution Imaging Spectroradiometer (MODIS) Terra and Aqua combined Photosynthetically Active Radiation (PAR) gridded Level 3 product produced daily at 0.05 degree (5,600 meters at the equator) resolution with estimates of PAR every 3 hours.

