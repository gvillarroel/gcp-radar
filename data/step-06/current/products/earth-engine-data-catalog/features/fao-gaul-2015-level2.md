---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:20.125Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "FAO/GAUL/2015/level2"
feature_slug: "fao-gaul-2015-level2"
latest_feature_date: "2018-05-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/FAO_GAUL_2015_level2"
  - "https://developers.google.com/earth-engine/datasets/tags/infrastructure-boundaries"
  - "https://developers.google.com/earth-engine/datasets/catalog"
keywords:
  - "fao"
  - "gaul"
  - "2015"
  - "level2"
  - "second"
  - "level"
  - "administrative"
  - "boundaries"
---

# FAO/GAUL/2015/level2

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

The FAO GAUL 2015 second-level administrative boundaries dataset.

## Extended Definition

The FAO GAUL 2015 second-level administrative boundaries dataset.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/FAO_GAUL_2015_level2](https://developers.google.com/earth-engine/datasets/catalog/FAO_GAUL_2015_level2)
- [https://developers.google.com/earth-engine/datasets/tags/infrastructure-boundaries](https://developers.google.com/earth-engine/datasets/tags/infrastructure-boundaries)
- [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)

## Supporting Pages

### FAO GAUL: Global Administrative Unit Layers 2015, Second-Level Administrative Units | Earth Engine Data Catalog | Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog/FAO_GAUL_2015_level2](https://developers.google.com/earth-engine/datasets/catalog/FAO_GAUL_2015_level2)
- Source ID: `feature-recovery-direct-http`
- Final score: 404
- Re-rank relevance: N/A

Evidence snippets:
- FAO GAUL: Global Administrative Unit Layers 2015, Second-Level Administrative Units | Earth Engine Data Catalog | Google for Developers 跳至主要內容 Earth Engine Data Catalog / English Deutsch Español Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體 日本語 한국어 登入 首頁 類別 所有資料集 所有標記 Landsat MODIS Sentinel 發佈商 Community API 說明文件 資料集狀態 變更記錄 Earth Engine Data Catalog 首頁 類別 所有資料集 所有標記 Landsat MODIS Sentinel 發佈商 Community API 說明文件 資料集狀態 變更記錄 首頁 Earth Engine Data Catalog 所有資料集 提供意見 FAO GAUL: Global Administrative Unit Layers 2015, Second-Level Administrative Units 透過集合功能整理內容 你可以依據偏好儲存及分類內容。 資料集開放期間 2014-12-19T16:45:00Z–2014-12-19T16:45:00Z 資料集產生者 FAO UN Earth Engine 程式碼片段 FeatureCollection ee.FeatureCollection("FAO/GAUL/2015/level2") open_in_new FeatureView ui.Map.FeatureViewLayer("FAO/GAUL/2015/level2_FeatureView") open_in_new 標記 borders county districts fao gaul infrastructure-boundaries table un 說明 全球行政單位層級 (GAUL) 會彙整並發布全球各國行政單位的最佳可用資訊，有助於行政單位空間資料集的標準化。GAUL 一律會維護全球層級，並在國家/地區、第一 (例如部門) 和第二行政層級 (例如區) 採用統一的編碼系統。如果資料可用，系統會依國家/地區提供層級，最低可到第三、第四層和更低層級。整體方法包括：a) 從最可靠的來源收集最佳可用資料；b) 建立地理特徵的驗證週期 (如有可能)；c) 根據聯合國製圖組 (UNCS) 提供的最新國家/地區界線地圖，將選取的資料新增至全球圖層；d) 使用 GAUL 編碼系統產生代碼；e) 將資料發布給使用者 (請參閱「 GAUL 發布集技術層面 」)。請注意，部分行政區是多邊形特徵。 資料表結構定義 資料表結構定義 名稱 類型 說明 ADM0_CODE INT GAUL 國家/地區代碼 ADM0_NAME STRING 聯合國國家/地區名稱 DISP_AREA STRING 未定居的地域：「是」或「否」 狀態 STRING 國家/地區狀態 Shape_Area DOUBLE 形狀區域 Shape_Leng DOUBLE 形狀長度 ADM1_CODE INT 第一層行政單位的 GAUL 代碼 ADM1_NAME STRING 第一層行政單位的名稱 ADM2_CODE INT 第 2 級行政單位的 GAUL 代碼 ADM2_NAME STRING 第二層行政單位的名稱 EXP2_YEAR INT 管理單位的到期年份 STR2_YEAR INT 行政單位的成立年份 使用條款 使用條款 GAUL 資料集會發布給聯合國和其他授權的國際和國家機構/機關。糧農組織授予使用、下載及列印 GAUL 資料集所含資料的授權，但僅限非商業用途，且須遵守資料授權中指定的條件。 您可以下載完整的 GAUL 資料授權文件 。另請參閱 免責事項 。 使用 Earth Engine 探索 重要事項： Earth Engine 平台可對地理空間資料集進行 PB 等級的科學分析，並以圖表呈現，適合用於促進公共福祉，或供企業和政府使用。 Earth Engine 可免費用於研究、教育和非營利用途。如要開始使用，請 申請 Earth Engine 存取權 。 程式碼編輯器 (JavaScript) var dataset = ee .
- FeatureViewLayer ( 'FAO/GAUL/2015/level2_FeatureView' ); var visParams = { color : '00909F' , fillColor : 'b5ffb4' , opacity : 1 , width : 1 , pointSize : 1 }; fvLayer . setVisParams ( visParams ); fvLayer . setName ( 'Second Level Administrative Units' ); Map . setCenter ( 7.82 , 49.1 , 4 ); Map . add ( fvLayer ); 在程式碼編輯器中開啟 FAO GAUL：2015 年全球行政單位層級，第二層行政單位 全球行政區層級 (GAUL) 會彙整並發布全球各國行政區的最佳可用資訊，有助於行政區空間資料集的標準化。GAUL 一律會維護全球圖層，並在國家/地區、第一級行政區等層級採用統一的編碼系統。 FAO/GAUL/2015/level2, borders,county,districts,fao,gaul,infrastructure-boundaries,table,un 2014-12-19T16:45:00Z/2014-12-19T16:45:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets 想進一步說明嗎？ [[["容易理解","easyToUnderstand","thumb-up"],["確實解決了我的問題","solvedMyProblem","thumb-up"],["其他","otherUp","thumb-up"]],[["缺少我需要的資訊","missingTheInformationINeed","thumb-down"],["過於複雜/步驟過多","tooComplicatedTooManySteps","thumb-down"],["過時","outOfDate","thumb-down"],["翻譯問題","translationIssue","thumb-down"],["示例/程式碼問題","samplesCodeIssue","thumb-down"],["其他","otherDown","thumb-down"]],[],[],[]] GitHub Earth Engine on GitHub Medium Follow our blog on Medium GIS Stack Exchange Ask questions using the google-earth-engine tag Twitter Follow @googleearth on Twitter Videos Earth Engine on YouTube 論壇 網誌 Bluesky Instagram LinkedIn X (Twitter) YouTube 計劃 Google Developer Program Google Developer Groups Google Developer Experts Accelerators Google Cloud & NVIDIA 開發人員控制台 Google API Console Google Cloud Platform Console Google Play 管理中心 Firebase Console Actions on Google Console Cast SDK Developer Console Chrome Web Store Dashboard Google Home Developer Console Android Chrome Firebase Google Cloud Platform Google AI 所有產品 條款 隱私權 Manage cookies English Deutsch Español Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體 日本語 한국어
- FeatureCollection ( 'FAO/GAUL/2015/level2' ); Map . setCenter ( 12.876 , 42.682 , 5 ); var styleParams = { fillColor : 'b5ffb4' , color : '00909F' , width : 1.0 , }; dataset = dataset . style ( styleParams ); Map . addLayer ( dataset , {}, 'Second Level Administrative Units' ); 在程式碼編輯器中開啟 以 FeatureView 形式呈現 FeatureView 是 FeatureCollection 的加速表示法，只能用來檢視。詳情請參閱 FeatureView 說明文件。 重要事項： Earth Engine 平台可對地理空間資料集進行 PB 等級的科學分析，並以圖表呈現，適合用於促進公共福祉，或供企業和政府使用。 Earth Engine 可免費用於研究、教育和非營利用途。如要開始使用，請 申請 Earth Engine 存取權 。 程式碼編輯器 (JavaScript) var fvLayer = ui .

### "Datasets tagged infrastructure-boundaries in Earth Engine \_|\_ Earth Engine\

- URL: [https://developers.google.com/earth-engine/datasets/tags/infrastructure-boundaries](https://developers.google.com/earth-engine/datasets/tags/infrastructure-boundaries)
- Source ID: `site-docs-root-3`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- The Global Administrative Unit Layers (GAUL) compiles and disseminates the best available information on administrative units for all the countries in the world, providing a contribution to the standardization of the spatial dataset representing administrative units. … borders departments fao gaul infrastructure-boundaries provinces FAO GAUL 500m Simplified: Global Administrative Unit Layers 2015, Second-Level Administrative Units This version of GAUL dataset is simplified at 500m.
- The GAUL always maintains global layers with a unified … borders departments fao gaul infrastructure-boundaries provinces FAO GAUL: Global Administrative Unit Layers 2015, Second-Level Administrative Units The Global Administrative Unit Layers (GAUL) compiles and disseminates the best available information on administrative units for all the countries in the world, providing a contribution to the standardization of the spatial dataset representing administrative units.
- The Global Administrative Unit Layers (GAUL) compiles and disseminates the best available information on administrative units for all the countries in the world, providing a contribution to the standardization of the spatial dataset representing administrative units. … borders countries fao gaul infrastructure-boundaries table FAO GAUL 500m Simplified: Global Administrative Unit Layers 2015, First-Level Administrative Units This version of GAUL dataset is simplified at 500m.
- The GAUL always maintains global layers with a unified … borders countries fao gaul infrastructure-boundaries table FAO GAUL: Global Administrative Unit Layers 2015, First-Level Administrative Units The Global Administrative Unit Layers (GAUL) compiles and disseminates the best available information on administrative units for all the countries in the world, providing a contribution to the standardization of the spatial dataset representing administrative units.

### Earth Engine Data Catalog \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- Source ID: `site-docs-root`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- The Global Administrative Unit Layers (GAUL) compiles and disseminates the best available information on administrative units for all the countries in the world, providing a contribution to the standardization of the spatial dataset representing administrative units. … borders departments fao gaul infrastructure-boundaries provinces FAO GAUL 500m Simplified: Global Administrative Unit Layers 2015, Second-Level Administrative Units This version of GAUL dataset is simplified at 500m.
- The GAUL always maintains global layers with a unified … borders departments fao gaul infrastructure-boundaries provinces FAO GAUL: Global Administrative Unit Layers 2015, Second-Level Administrative Units The Global Administrative Unit Layers (GAUL) compiles and disseminates the best available information on administrative units for all the countries in the world, providing a contribution to the standardization of the spatial dataset representing administrative units.
- The Global Administrative Unit Layers (GAUL) compiles and disseminates the best available information on administrative units for all the countries in the world, providing a contribution to the standardization of the spatial dataset representing administrative units. … borders countries fao gaul infrastructure-boundaries table FAO GAUL 500m Simplified: Global Administrative Unit Layers 2015, First-Level Administrative Units This version of GAUL dataset is simplified at 500m.
- The GAUL always maintains global layers with a unified … borders countries fao gaul infrastructure-boundaries table FAO GAUL: Global Administrative Unit Layers 2015, First-Level Administrative Units The Global Administrative Unit Layers (GAUL) compiles and disseminates the best available information on administrative units for all the countries in the world, providing a contribution to the standardization of the spatial dataset representing administrative units.

