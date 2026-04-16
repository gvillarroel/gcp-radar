---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:20.238Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "MODIS/MYD09GA_006_NDWI"
feature_slug: "modis-myd09ga-006-ndwi"
latest_feature_date: "2017-05-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/MODIS_MYD09GA_006_NDWI"
  - "https://developers.google.com/earth-engine/datasets/catalog/modis"
keywords:
  - "modis"
  - "myd09ga"
  - "006"
  - "ndwi"
  - "aqua"
  - "daily"
  - "normalized"
  - "difference"
---

# MODIS/MYD09GA_006_NDWI

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

MODIS Aqua daily normalized difference water index.

## Extended Definition

MODIS Aqua daily normalized difference water index.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/MODIS_MYD09GA_006_NDWI](https://developers.google.com/earth-engine/datasets/catalog/MODIS_MYD09GA_006_NDWI)
- [https://developers.google.com/earth-engine/datasets/catalog/modis](https://developers.google.com/earth-engine/datasets/catalog/modis)

## Supporting Pages

### MODIS Aqua Daily NDWI | Earth Engine Data Catalog | Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog/MODIS_MYD09GA_006_NDWI](https://developers.google.com/earth-engine/datasets/catalog/MODIS_MYD09GA_006_NDWI)
- Source ID: `feature-recovery-direct-http`
- Final score: 404
- Re-rank relevance: N/A

Evidence snippets:
- MODIS/MYD09GA_006_NDWI, aqua,daily,global,modis,ndwi,surface-reflectance,usgs,vegetation-indices 2002-07-04T00:00:00Z/2023-02-25T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets 의견을 전달하고 싶나요? [[["이해하기 쉬움","easyToUnderstand","thumb-up"],["문제가 해결됨","solvedMyProblem","thumb-up"],["기타","otherUp","thumb-up"]],[["필요한 정보가 없음","missingTheInformationINeed","thumb-down"],["너무 복잡함/단계 수가 너무 많음","tooComplicatedTooManySteps","thumb-down"],["오래됨","outOfDate","thumb-down"],["번역 문제","translationIssue","thumb-down"],["샘플/코드 문제","samplesCodeIssue","thumb-down"],["기타","otherDown","thumb-down"]],[],[],["The dataset, provided by Google, contains the Normalized Difference Water Index (NDWI) derived from MODIS/MYD09GA surface reflectance.
- MODIS Aqua Daily NDWI | Earth Engine Data Catalog | Google for Developers 기본 콘텐츠로 건너뛰기 Earth Engine Data Catalog / English Deutsch Español Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體 日本語 한국어 로그인 홈 카테고리 모든 데이터세트 모든 태그 Landsat MODIS Sentinel 게시자 커뮤니티 API 문서 데이터 세트 상태 변경 기록 Earth Engine Data Catalog 홈 카테고리 모든 데이터세트 모든 태그 Landsat MODIS Sentinel 게시자 커뮤니티 API 문서 데이터 세트 상태 변경 기록 홈 Earth Engine Data Catalog 카테고리 의견 보내기 MODIS Aqua Daily NDWI 컬렉션을 사용해 정리하기 내 환경설정을 기준으로 콘텐츠를 저장하고 분류하세요. 데이터 세트 제공 2002-07-04T00:00:00Z–2023-02-25T00:00:00Z 데이터 세트 출처 Google Earth Engine 스니펫 ee.ImageCollection("MODIS/MYD09GA_006_NDWI") open_in_new 주기 1일 태그 아쿠아 매일 전역 modis myd09ga ndwi 표면 반사율 usgs vegetation-indices 설명 정규화된 차이 물 지수 (NDWI)는 식생 캐노피의 액체 물 함량 변화에 민감합니다. 근적외선 대역과 두 번째 적외선 대역에서 파생됩니다. 두 번째 적외선 대역은 사용 가능한 경우 약 1.24μm이고, 그렇지 않은 경우 가장 가까운 적외선 대역입니다. 값의 범위는 -1.0~1.0입니다. 자세한 내용은 Gao (1996) 을 참고하세요. 이 제품은 MODIS/006/MYD09GA 표면 반사율 합성에서 생성됩니다. 대역 대역 픽셀 크기: 463.313m (모든 밴드) 이름 픽셀 크기 설명 NDWI 463.313미터 정규화된 차이 물 지수 이용약관 이용약관 LP DAAC를 통해 획득한 MODIS 데이터 및 제품에는 후속 사용, 판매 또는 재배포에 대한 제한이 없습니다.
- ImageCollection ( 'MODIS/MYD09GA_006_NDWI' ) . filter ( ee .
- Filter . date ( '2018-04-01' , '2018-06-01' )); var colorized = dataset . select ( 'NDWI' ); var colorizedVis = { min : 0.0 , max : 1.0 , palette : [ '0000ff' , '00ffff' , 'ffff00' , 'ff0000' , 'ffffff' ], }; Map . setCenter ( - 7.03125 , 31.0529339857 , 2 ); Map . addLayer ( colorized , colorizedVis , 'Colorized' ); 코드 편집기에서 열기 MODIS Aqua 일일 NDWI 정규화된 차이 물 지수 (NDWI)는 식물 덮개의 액체 물 함량 변화에 민감합니다. 근적외선 대역과 두 번째 적외선 대역에서 파생됩니다. 두 번째 적외선 대역은 사용 가능한 경우 약 1.24μm이고, 그렇지 않은 경우 사용 가능한 가장 가까운 적외선 대역입니다. 값의 범위는 -1.0~1.0입니다.

### "MODIS Collections in Earth Engine \_|\_ Earth Engine Data Catalog \_|\_\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/modis](https://developers.google.com/earth-engine/datasets/catalog/modis)
- Source ID: `site-docs-root`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- This product is generated from the MODIS/006/MYD09GA surface reflectance composites. photo library MODIS/MYD09GA 006 NDVI MODIS Aqua Daily NDWI The Normalized Difference Water Index (NDWI) is sensitive to changes in liquid water content of vegetation canopies.
- This product is generated from the MODIS/006/MYD09GA surface reflectance composites. photo library MODIS/MYD09GA 006 EVI MODIS Aqua Daily NDSI The Normalized Difference Snow Index is used to identify snow, based on its characteristically higher reflectance in the visible portion of the spectrum compared to the mid-IR.
- This product is generated from the MODIS/006/MYD09GA surface reflectance composites. photo library MODIS/MYD09GA 006 NDSI MODIS Aqua Daily NDVI The Normalized Difference Vegetation Index is generated from the Near-IR and Red bands of each scene as (NIR - Red) / (NIR + Red), and ranges in value from -1.0 to 1.0.
- This product is generated from the MODIS/006/MYD09GA surface reflectance composites. photo library MODIS/MYD09GA 006 NDWI MOD16A2: MODIS Global Terrestrial Evapotranspiration 8-Day Global 1km The MOD16A2 V105 product provides information about 8-day global terrestrial evapotranspiration at 1km pixel resolution.

### "Datasets tagged satellite-imagery in Earth Engine \_|\_ Earth Engine Data\

- URL: [https://developers.google.com/earth-engine/datasets/tags/satellite-imagery](https://developers.google.com/earth-engine/datasets/tags/satellite-imagery)
- Source ID: `site-docs-root-3`
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- The mosaic consists of pan-sharpened normalized surface reflectance scenes (Landsat ETM+ bands 1, 2, 3, and … antarctica ice landsat-derived lima mosaic satellite-imagery MCD19A1.061: Land Surface BRF Daily L2G Global 500m and 1km The MCD19A1 Version 6.1 data product is a Moderate Resolution Imaging Spectroradiometer (MODIS) Terra and Aqua combined Land Surface Bidirectional Reflectance Factor (BRF) gridded Level 2 product produced daily at 500 meter and 1 kilometer resolution.
- The MYD09CMG data … aqua brightness-temperature ozone satellite-imagery surface-reflectance MYD09GA.061 Aqua Surface Reflectance Daily Global 1km and 500m The MODIS Surface Reflectance products provide an estimate of the surface spectral reflectance as it would be measured at ground level in the absence of atmospheric scattering or absorption.
- MYD09GA version 6.1 provides bands 1-7 in … aqua daily global modis nasa satellite-imagery MYD09GQ.061 Aqua Surface Reflectance Daily Global 250m The MODIS Surface Reflectance products provide an estimate of the surface spectral reflectance as it would be measured at ground level in the absence of atmospheric scattering or absorption.
- Along with the seven reflectance bands is a quality layer and four observation … 8-day aqua global modis nasa satellite-imagery MYD09CMG.061 Aqua Surface Reflectance Daily L3 Global 0.05 Deg CMG The MYD09CMG Version 6.1 product provides an estimate of the surface spectral reflectance of Aqua Moderate Resolution Imaging Spectroradiometer (MODIS) Bands 1 through 7, resampled to 5600 meter pixel resolution and corrected for atmospheric conditions such as gasses, aerosols, and Rayleigh scattering.

