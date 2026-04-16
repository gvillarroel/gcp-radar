---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:20.237Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "MODIS/MYD09GA_006_NDVI"
feature_slug: "modis-myd09ga-006-ndvi"
latest_feature_date: "2017-05-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/MODIS_MYD09GA_006_NDVI"
  - "https://developers.google.com/earth-engine/datasets/catalog/modis"
keywords:
  - "modis"
  - "myd09ga"
  - "006"
  - "ndvi"
  - "aqua"
  - "daily"
  - "normalized"
  - "difference"
---

# MODIS/MYD09GA_006_NDVI

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

MODIS Aqua daily normalized difference vegetation index.

## Extended Definition

MODIS Aqua daily normalized difference vegetation index.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/MODIS_MYD09GA_006_NDVI](https://developers.google.com/earth-engine/datasets/catalog/MODIS_MYD09GA_006_NDVI)
- [https://developers.google.com/earth-engine/datasets/catalog/modis](https://developers.google.com/earth-engine/datasets/catalog/modis)

## Supporting Pages

### MODIS Aqua Daily NDVI | Earth Engine Data Catalog | Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog/MODIS_MYD09GA_006_NDVI](https://developers.google.com/earth-engine/datasets/catalog/MODIS_MYD09GA_006_NDVI)
- Source ID: `feature-recovery-direct-http`
- Final score: 392
- Re-rank relevance: N/A

Evidence snippets:
- MODIS/MYD09GA_006_NDVI, aqua,daily,global,modis,ndvi,surface-reflectance,usgs,vegetation-indices 2002-07-04T00:00:00Z/2023-02-25T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets 의견을 전달하고 싶나요? [[["이해하기 쉬움","easyToUnderstand","thumb-up"],["문제가 해결됨","solvedMyProblem","thumb-up"],["기타","otherUp","thumb-up"]],[["필요한 정보가 없음","missingTheInformationINeed","thumb-down"],["너무 복잡함/단계 수가 너무 많음","tooComplicatedTooManySteps","thumb-down"],["오래됨","outOfDate","thumb-down"],["번역 문제","translationIssue","thumb-down"],["샘플/코드 문제","samplesCodeIssue","thumb-down"],["기타","otherDown","thumb-down"]],[],[],[]] GitHub Earth Engine on GitHub Medium Follow our blog on Medium GIS Stack Exchange Ask questions using the google-earth-engine tag Twitter Follow @googleearth on Twitter Videos Earth Engine on YouTube 연결 블로그 Bluesky Instagram LinkedIn X(트위터) YouTube 프로그램 Google Developer Program Google Developer Groups Google Developer Experts Accelerators Google Cloud & NVIDIA 개발자 콘솔 Google API Console Google Cloud Platform Console Google Play Console Firebase Console Actions on Google Console Cast SDK Developer Console Chrome Web Store Dashboard Google Home Developer Console Android Chrome Firebase Google Cloud Platform Google AI 모든 제품 약관 개인정보처리방침 Manage cookies English Deutsch Español Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體 日本語 한국어
- MODIS Aqua Daily NDVI | Earth Engine Data Catalog | Google for Developers 기본 콘텐츠로 건너뛰기 Earth Engine Data Catalog / English Deutsch Español Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體 日本語 한국어 로그인 홈 카테고리 모든 데이터세트 모든 태그 Landsat MODIS Sentinel 게시자 커뮤니티 API 문서 데이터 세트 상태 변경 기록 Earth Engine Data Catalog 홈 카테고리 모든 데이터세트 모든 태그 Landsat MODIS Sentinel 게시자 커뮤니티 API 문서 데이터 세트 상태 변경 기록 홈 Earth Engine Data Catalog 카테고리 의견 보내기 MODIS Aqua Daily NDVI 컬렉션을 사용해 정리하기 내 환경설정을 기준으로 콘텐츠를 저장하고 분류하세요. 데이터 세트 제공 2002-07-04T00:00:00Z–2023-02-25T00:00:00Z 데이터 세트 출처 Google Earth Engine 스니펫 ee.ImageCollection("MODIS/MYD09GA_006_NDVI") open_in_new 주기 1일 태그 아쿠아 매일 전역 modis myd09ga ndvi 표면 반사율 usgs vegetation-indices 설명 정규화된 차이 식생 지수는 각 장면의 근적외선 및 적색 밴드에서 (NIR - Red) / (NIR + Red)로 생성되며 값 범위는 -1.0~1.0입니다. 이 제품은 MODIS/006/MYD09GA 표면 반사율 합성에서 생성됩니다. 대역 대역 픽셀 크기: 463.313m (모든 밴드) 이름 최소 최대 픽셀 크기 설명 NDVI -1* 1* 463.313미터 정규 식생 지수 * 예상 최솟값 또는 최댓값 이용약관 이용약관 LP DAAC를 통해 획득한 MODIS 데이터 및 제품에는 후속 사용, 판매 또는 재배포에 대한 제한이 없습니다.
- ImageCollection ( 'MODIS/MYD09GA_006_NDVI' ) . filter ( ee .
- Filter . date ( '2018-04-01' , '2018-06-01' )); var colorized = dataset . select ( 'NDVI' ); var colorizedVis = { min : 0 , max : 1 , palette : [ 'ffffff' , 'ce7e45' , 'df923d' , 'f1b555' , 'fcd163' , '99b718' , '74a901' , '66a000' , '529400' , '3e8601' , '207401' , '056201' , '004c00' , '023b01' , '012e01' , '011d01' , '011301' ], }; Map . setCenter ( - 7.03125 , 31.0529339857 , 2 ); Map . addLayer ( colorized , colorizedVis , 'Colorized' ); 코드 편집기에서 열기 MODIS Aqua 일일 NDVI 정규화된 차이 식생 지수는 각 장면의 근적외선 및 적색 밴드에서 (NIR - Red) / (NIR + Red)로 생성되며 값 범위는 -1.0~1.0입니다. 이 제품은 MODIS/006/MYD09GA 표면 반사율 합성에서 생성됩니다.

### "MODIS Collections in Earth Engine \_|\_ Earth Engine Data Catalog \_|\_\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/modis](https://developers.google.com/earth-engine/datasets/catalog/modis)
- Source ID: `site-docs-root`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- This product is generated from the MODIS/006/MYD09GA surface reflectance composites. photo library MODIS/MYD09GA 006 NDVI MODIS Aqua Daily NDWI The Normalized Difference Water Index (NDWI) is sensitive to changes in liquid water content of vegetation canopies.
- This product is generated from the MODIS/006/MYD09GA surface reflectance composites. photo library MODIS/MYD09GA 006 NDSI MODIS Aqua Daily NDVI The Normalized Difference Vegetation Index is generated from the Near-IR and Red bands of each scene as (NIR - Red) / (NIR + Red), and ranges in value from -1.0 to 1.0.
- This product is generated from the MODIS/006/MYD09GA surface reflectance composites. photo library MODIS/MYD09GA 006 EVI MODIS Aqua Daily NDSI The Normalized Difference Snow Index is used to identify snow, based on its characteristically higher reflectance in the visible portion of the spectrum compared to the mid-IR.
- The MODIS NDVI and EVI products are computed from atmospherically corrected bi-directional surface reflectances that have been masked for water, clouds, heavy aerosols, and cloud shadows. photo library MODIS/061/MYD13A1 MYD13A2.061 Aqua Vegetation Indices 16-Day Global 1km The MYD13A2 V6.1 product provides two Vegetation Indices (VI): the Normalized Difference Vegetation Index (NDVI) and the Enhanced Vegetation Index (EVI).

### Earth Engine Data Catalog \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- Source ID: `site-docs-root`
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- The first is the Normalized Difference Vegetation Index (NDVI) which is referred to as the continuity index to the existing National Oceanic and Atmospheric … 16-day aqua evi global modis nasa MYD14A1.061: Aqua Thermal Anomalies & Fire Daily Global 1km The MYD14A1 V6.1 dataset provides daily fire mask composites at 1km resolution derived from the MODIS 4- and 11-micrometer radiances.
- The first is the Normalized Difference Vegetation Index (NDVI) which is referred to as the continuity index to the existing National Oceanic and Atmospheric … 16-day aqua evi global modis nasa MYD13A2.061 Aqua Vegetation Indices 16-Day Global 1km The MYD13A2 V6.1 product provides two Vegetation Indices (VI): the Normalized Difference Vegetation Index (NDVI) and the Enhanced Vegetation Index (EVI).
- The first is the Normalized Difference Vegetation Index (NDVI) which is referred to as the continuity index to the existing National Oceanic and Atmospheric … 16-day evi global modis nasa ndvi MOD14A1.061: Terra Thermal Anomalies & Fire Daily Global 1km The MOD14A1 V6.1 dataset provides daily fire mask composites at 1km resolution derived from the MODIS 4- and 11-micrometer radiances.
- The first is the Normalized Difference Vegetation Index (NDVI) which is referred to as the continuity index to the existing National Oceanic and Atmospheric … 16-day evi global modis nasa ndvi MOD13A2.061 Terra Vegetation Indices 16-Day Global 1km The MOD13A2 V6.1 product provides two Vegetation Indices (VI): the Normalized Difference Vegetation Index (NDVI) and the Enhanced Vegetation Index (EVI).

