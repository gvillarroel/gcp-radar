---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:20.197Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "MODIS/006/MOD09Q1"
feature_slug: "modis-006-mod09q1"
latest_feature_date: "2017-06-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MOD09Q1"
  - "https://developers.google.com/earth-engine/datasets/catalog/modis"
  - "https://developers.google.com/earth-engine/datasets/catalog"
keywords:
  - "modis"
  - "006"
  - "mod09q1"
  - "terra"
  - "day"
  - "surface"
  - "reflectance"
  - "composite"
---

# MODIS/006/MOD09Q1

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

A MODIS Terra 8-day surface reflectance composite product.

## Extended Definition

A MODIS Terra 8-day surface reflectance composite product.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MOD09Q1](https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MOD09Q1)
- [https://developers.google.com/earth-engine/datasets/catalog/modis](https://developers.google.com/earth-engine/datasets/catalog/modis)
- [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)

## Supporting Pages

### MOD09Q1.006 Terra Surface Reflectance 8-Day Global 250m [deprecated] | Earth Engine Data Catalog | Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MOD09Q1](https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MOD09Q1)
- Source ID: `feature-recovery-direct-http`
- Final score: 305
- Re-rank relevance: N/A

Evidence snippets:
- MOD09Q1.006 Terra Surface Reflectance 8-Day Global 250m [deprecated] | Earth Engine Data Catalog | Google for Developers 기본 콘텐츠로 건너뛰기 Earth Engine Data Catalog / English Deutsch Español Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體 日本語 한국어 로그인 홈 카테고리 모든 데이터세트 모든 태그 Landsat MODIS Sentinel 게시자 커뮤니티 API 문서 데이터 세트 상태 변경 기록 Earth Engine Data Catalog 홈 카테고리 모든 데이터세트 모든 태그 Landsat MODIS Sentinel 게시자 커뮤니티 API 문서 데이터 세트 상태 변경 기록 홈 Earth Engine Data Catalog 카테고리 의견 보내기 MOD09Q1.006 Terra Surface Reflectance 8-Day Global 250m [deprecated] 컬렉션을 사용해 정리하기 내 환경설정을 기준으로 콘텐츠를 저장하고 분류하세요. 주의: 이 데이터 세트는 MODIS/061/MOD09Q1 로 대체되었습니다. 데이터 세트 제공 2000-02-18T00:00:00Z–2023-02-10T00:00:00Z 데이터 세트 출처 USGS EROS 센터 NASA LP DAAC Earth Engine 스니펫 ee.ImageCollection("MODIS/006/MOD09Q1") open_in_new 주기 8일 태그 8일 전역 mod09q1 modis nasa 위성 이미지 sr 표면 반사율 terra usgs 설명 MOD09Q1 제품은 250m 해상도에서 1번 및 2번 대역의 표면 스펙트럼 반사율을 추정하고 가스, 에어로졸, 레일리 산란과 같은 대기 조건에 대해 보정합니다. 두 개의 반사율 밴드와 함께 품질 레이어도 포함됩니다. 각 픽셀에 대해 관측 범위가 넓고, 시야각이 낮으며, 구름이나 구름 그림자가 없고, 에어로졸 로딩이 높은 8일 복합 내의 모든 획득에서 값이 선택됩니다. 문서: 사용자 가이드 Algorithm Theoretical Basis Document(ATBD) 일반 문서 대역 대역 픽셀 크기: 250미터 (모든 밴드) 이름 최소 최대 배율 픽셀 크기 Wavelength 설명 sur_refl_b01 -100 16000 0.0001 250미터 620~670nm 표면 반사율 밴드 1 sur_refl_b02 -100 16000 0.0001 250미터 841~876nm 밴드 2의 표면 반사율 State 250미터 없음 표면 반사율 250m 상태 플래그 상태의 비트마스크 비트 0~1: 구름 상태 0: 맑음 1: 흐림 2: 혼합 3: 설정되지 않음, 맑음으로 가정 비트 2: 구름 그림자 0: 아니요 1: 예 비트 3~5: 육지/물 플래그 0: 얕은 바다 1: 육지 2: 해안선과 호수 해안선 3: 얕은 내륙수 4: 일시적인 물 5: 깊은 내륙 수역 6: 대륙/중간 해양 7: 심해 비트 6~7: 에어로졸 양 0: 기후학 1: 낮음 2: 평균 3: 높음 비트 8~9: 권운 감지됨 0: 없음 1: 적음 2: 평균 3: 많음 비트 10: 내부 구름 알고리즘 플래그 0: 구름 없음 1: 구름 비트 11: 내부 화재 알고리즘 플래그 0: 화재 없음 1: 화재 비트 12: MOD35 눈/얼음 플래그 0: 아니요 1: 예 비트 13: 픽셀이 구름에 인접함 0: 아니요 1: 예 비트 14: BRDF 보정 실행됨 데이터 0: 아니요 1: 예 비트 15: 내부 눈 마스크 0: 눈 없음 1: 눈 QA 250미터 없음 표면 반사율 250m 밴드 품질 관리 플래그 QA의 비트 마스크 비트 0~1: MODLAND QA 비트 0: 이상적인 품질로 생성된 수정된 제품 - 모든 밴드 1: 품질이 이상적이지 않은 제품이 수정됨 - 일부 또는 모든 밴드 2: 클라우드 효과로 인해 수정된 제품이 생성되지 않음 - 모든 밴드 3: 다른 이유로 인해 수정된 제품이 생성되지 않음 - 일부 또는 모든 밴드가 채우기 값 (11)일 수 있음[값 (11)은 값 (01)을 재정의함] 비트 2~3: 예비 (사용되지 않음) 0: 해당 사항 없음 비트 4~7: 밴드 1 데이터 품질 0: 최고 품질 7: 노이즈가 많은 감지기 8: 감지기가 작동하지 않음, L1B에서 데이터가 보간됨 9: 태양 천정각이 86도 이상 10: 태양 천정각이 85도 이상 86도 미만 11: 입력 누락 12: 하나 이상의 대기 상수에서 기후학적 데이터를 대신하여 사용되는 내부 상수 13: 범위 외 보정, 픽셀이 허용되는 최대값으로 제한됨 14: L1B 데이터에 결함이 있음 15: 심해 또는 구름으로 인해 처리되지 않음 비트 8~11: 밴드 2 데이터 품질 0: 최고 품질 7: 노이즈가 많은 감지기 8: 감지기가 작동하지 않음, L1B에서 데이터가 보간됨 9: 태양 천정각이 86도 이상 10: 태양 천정각이 85도 이상 86도 미만 11: 입력 누락 12: 하나 이상의 대기 상수에서 기후학적 데이터를 대신하여 사용되는 내부 상수 13: 범위 외 보정, 픽셀이 허용되는 최대값으로 제한됨 14: L1B 데이터에 결함이 있음 15: 심해 또는 구름으로 인해 처리되지 않음 비트 12: 대기 보정 실행됨 0: 아니요 1: 예 비트 13: 인접성 보정 실행됨 0: 아니요 1: 예 비트 14: 500m와 다른 궤도 0: 아니요 1: 예 비트 15: 예비 (사용되지 않음) 0: 해당 사항 없음 이용약관 이용약관 LP DAAC를 통해 획득한 MODIS 데이터 및 제품은 후속 사용, 판매 또는 재배포에 제한이 없습니다. 인용 인용 LP DAAC 데이터 세트 인용에 관한 자세한 내용은 LP DAAC '데이터 인용' 페이지 를 참고하세요.
- MODIS/006/MOD09Q1, 8-day,global,mod09q1,modis,nasa,satellite-imagery,sr,surface-reflectance,terra,usgs 2000-02-18T00:00:00Z/2023-02-10T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets https://doi.org/10.5067/MODIS/MOD09Q1.006 https://doi.org/10.5067/MODIS/MOD09Q1.006 의견을 전달하고 싶나요? [[["이해하기 쉬움","easyToUnderstand","thumb-up"],["문제가 해결됨","solvedMyProblem","thumb-up"],["기타","otherUp","thumb-up"]],[["필요한 정보가 없음","missingTheInformationINeed","thumb-down"],["너무 복잡함/단계 수가 너무 많음","tooComplicatedTooManySteps","thumb-down"],["오래됨","outOfDate","thumb-down"],["번역 문제","translationIssue","thumb-down"],["샘플/코드 문제","samplesCodeIssue","thumb-down"],["기타","otherDown","thumb-down"]],[],[],[]] GitHub Earth Engine on GitHub Medium Follow our blog on Medium GIS Stack Exchange Ask questions using the google-earth-engine tag Twitter Follow @googleearth on Twitter Videos Earth Engine on YouTube 연결 블로그 Bluesky Instagram LinkedIn X(트위터) YouTube 프로그램 Google Developer Program Google Developer Groups Google Developer Experts Accelerators Google Cloud & NVIDIA 개발자 콘솔 Google API Console Google Cloud Platform Console Google Play Console Firebase Console Actions on Google Console Cast SDK Developer Console Chrome Web Store Dashboard Google Home Developer Console Android Chrome Firebase Google Cloud Platform Google AI 모든 제품 약관 개인정보처리방침 Manage cookies English Deutsch Español Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體 日本語 한국어
- ImageCollection ( 'MODIS/006/MOD09Q1' ) . filter ( ee .
- Filter . date ( '2018-01-01' , '2018-05-01' )); var falseColorVis = { min : - 100 , max : 8000 , bands : [ 'sur_refl_b02' , 'sur_refl_b02' , 'sur_refl_b01' ], }; Map . setCenter ( 6.746 , 46.529 , 2 ); Map . addLayer ( dataset , falseColorVis , 'False Color' ); 코드 편집기에서 열기 MOD09Q1.006 Terra 표면 반사율 8일 전 세계 250m [지원 중단됨] MOD09Q1 제품은 250m 해상도에서 1번 및 2번 대역의 표면 스펙트럼 반사율 추정치를 제공하며, 가스, 에어로졸, 레일리 산란과 같은 대기 조건에 대해 수정됩니다. 두 개의 반사율 밴드와 함께 품질 레이어도 포함됩니다. 각 픽셀에 대해 값이 선택됩니다.

### "MODIS Collections in Earth Engine \_|\_ Earth Engine Data Catalog \_|\_\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/modis](https://developers.google.com/earth-engine/datasets/catalog/modis)
- Source ID: `site-docs-root`
- Final score: 157
- Re-rank relevance: N/A

Evidence snippets:
- For each pixel, a value is selected from all the acquisitions within the 8-day composite on the basis of high observation coverage, low view angle, the absence of clouds or cloud shadow, and aerosol loading. photo library MODIS/061/MOD09A1 MOD09CMG.061 Surface Reflectance Daily L3 Global 0.05 Deg CMG The MOD09CMG Version 6.1 product provides an estimate of the surface spectral reflectance of Terra Moderate Resolution Imaging Spectroradiometer (MODIS) Bands 1 through 7, resampled to 5600 meter pixel resolution and corrected for atmospheric conditions such as gasses, aerosols, and Rayleigh scattering.
- This product is meant to be used in conjunction with the MOD09GA where important quality and viewing geometry information is stored. photo library MODIS/061/MOD09GQ MOD09Q1.061 Terra Surface Reflectance 8-Day Global 250m The MOD09Q1 product provides an estimate of the surface spectral reflectance of bands 1 and 2 at 250m resolution and corrected for atmospheric conditions such as gasses, aerosols, and Rayleigh scattering.
- The MODIS NDVI and EVI products are computed from atmospherically corrected bi-directional surface reflectances that have been masked for water, clouds, heavy aerosols, and cloud shadows. photo library MODIS/061/MOD13Q1 MOD14A1.061: Terra Thermal Anomalies & Fire Daily Global 1km The MOD14A1 V6.1 dataset provides daily fire mask composites at 1km resolution derived from the MODIS 4- and 11-micrometer radiances.
- This product is generated from the MODIS/006/MCD43A4 surface reflectance composites. photo library MODIS/MCD43A4 006 NDWI MODIS Terra Daily BAI The Burn Area Index (BAI) is generated from the Red and Near-IR bands, and measures the spectral distance of each pixel from a reference spectral point (the measured reflectance of charcoal).

### Earth Engine Data Catalog \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- Source ID: `site-docs-root`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- MOD09GQ version 6.1 provides bands 1 and … daily global modis nasa satellite-imagery sr MOD09Q1.061 Terra Surface Reflectance 8-Day Global 250m The MOD09Q1 product provides an estimate of the surface spectral reflectance of bands 1 and 2 at 250m resolution and corrected for atmospheric conditions such as gasses, aerosols, and Rayleigh scattering.
- Along with the seven reflectance bands is a quality layer and four observation … 8-day global modis nasa satellite-imagery sr MOD09CMG.061 Terra Surface Reflectance Daily L3 Global 0.05 Deg CMG The MOD09CMG Version 6.1 product provides an estimate of the surface spectral reflectance of Terra Moderate Resolution Imaging Spectroradiometer (MODIS) Bands 1 through 7, resampled to 5600 meter pixel resolution and corrected for atmospheric conditions such as gasses, aerosols, and Rayleigh scattering.
- The dataset was created using the MODIS 8-day TERRA and AQUA land surface temperature (LST) products, the Landscan urban extent … climate uhi urban yale YCEO Surface Urban Heat Islands: Spatially-Averaged Yearly Composites of Annual Daytime and Nighttime Intensity This dataset contains annual, summertime, and wintertime surface urban heat island (SUHI) intensities for day and night for over 10,000 urban clusters throughout the world.
- The dataset was created using the MODIS 8-day TERRA and AQUA land surface temperature (LST) products, the Landscan urban extent … climate uhi urban yale YCEO Surface Urban Heat Islands: Pixel-Level Composites of Yearly Summertime Daytime and Nighttime Intensity This dataset contains annual, summertime, and wintertime surface urban heat island (SUHI) intensities for day and night for over 10,000 urban clusters throughout the world.

