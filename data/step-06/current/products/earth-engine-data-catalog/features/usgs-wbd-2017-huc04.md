---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:20.251Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "USGS/WBD/2017/HUC04"
feature_slug: "usgs-wbd-2017-huc04"
latest_feature_date: "2017-05-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/USGS_WBD_2017_HUC04"
  - "https://developers.google.com/earth-engine/datasets/catalog"
  - "https://developers.google.com/earth-engine/datasets/tags/surface-ground-water"
keywords:
  - "usgs"
  - "wbd"
  - "2017"
  - "huc04"
  - "watershed"
  - "boundary"
  - "dataset"
  - "level"
---

# USGS/WBD/2017/HUC04

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

USGS Watershed Boundary Dataset level HUC04 subregions.

## Extended Definition

USGS Watershed Boundary Dataset level HUC04 subregions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/USGS_WBD_2017_HUC04](https://developers.google.com/earth-engine/datasets/catalog/USGS_WBD_2017_HUC04)
- [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- [https://developers.google.com/earth-engine/datasets/tags/surface-ground-water](https://developers.google.com/earth-engine/datasets/tags/surface-ground-water)

## Supporting Pages

### HUC04: USGS Watershed Boundary Dataset of Subregions | Earth Engine Data Catalog | Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog/USGS_WBD_2017_HUC04](https://developers.google.com/earth-engine/datasets/catalog/USGS_WBD_2017_HUC04)
- Source ID: `feature-recovery-direct-http`
- Final score: 380
- Re-rank relevance: N/A

Evidence snippets:
- HUC04: USGS Watershed Boundary Dataset of Subregions | Earth Engine Data Catalog | Google for Developers 跳至主要內容 Earth Engine Data Catalog / English Deutsch Español Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體 日本語 한국어 登入 首頁 類別 所有資料集 所有標記 Landsat MODIS Sentinel 發佈商 Community API 說明文件 資料集狀態 變更記錄 Earth Engine Data Catalog 首頁 類別 所有資料集 所有標記 Landsat MODIS Sentinel 發佈商 Community API 說明文件 資料集狀態 變更記錄 首頁 Earth Engine Data Catalog 所有資料集 提供意見 HUC04: USGS Watershed Boundary Dataset of Subregions 透過集合功能整理內容 你可以依據偏好儲存及分類內容。 資料集開放期間 2017-04-22T00:00:00Z–2017-04-23T00:00:00Z 資料集產生者 美國地質調查局 Earth Engine 程式碼片段 FeatureCollection ee.FeatureCollection("USGS/WBD/2017/HUC04") open_in_new FeatureView ui.Map.FeatureViewLayer("USGS/WBD/2017/HUC04_FeatureView") open_in_new 標記 hydrology surface-ground-water table usgs water watershed wbd 說明 流域邊界資料集 (WBD) 是水文單元 (HU) 資料的綜合彙整集合，符合國家劃分和解析度標準。根據 美國國家流域邊界資料集聯邦標準和程序 ，流域是指地表水排入某個點的面積範圍，但沿海或湖岸地區可能有多個出口。流域邊界完全是根據科學水文原理劃定，不會偏向任何行政邊界或特殊計畫，也不會偏向特定計畫或機構。定義 WBD 的水文單元，是為了建立基準排水邊界架構，涵蓋所有陸地和地表區域。 在美國本土，HU 的劃分比例為 1:24,000；在夏威夷和加勒比海地區，劃分比例為 1:25,000；在阿拉斯加，劃分比例為 1:63,360，符合美國國家地圖準確度標準 (NMAS)。WBD 會以多邊形表示，定義 HU 的邊界。水文單元會獲得水文單元代碼 (HUC)，範圍從 2 位數到 12 位數。這些代碼說明該單位在國內的位置和層級。HUC 的位數與 WBD 的 6 個詳細程度相關：較低層級的多邊形涵蓋的區域大於較高層級的多邊形。層級越高，HUC 的位數就越多，因為先前的層級會巢狀內嵌在其中。 WBD 多邊形屬性包括 HUC、大小 (以英畝和平方公里為單位)、名稱、下游 HUC、流域類型、非貢獻區域和流量變化。WBD 線條屬性包含每個邊界的最高水文單元、線條來源資訊和流量修改。 名稱 等級 數字 HU 代碼 區域 1 2 2 子區域 2 4 4 Basin 3 6 6 子流域 4 8 8 分水嶺 5 10 10 子流域 6 12 12 *由資料供應商計算。 資料表結構定義 資料表結構定義 名稱 類型 說明 areaacres STRING 特徵大小 (以英畝為單位) areasqkm STRING 特徵的大小 (平方公里) gnis_id STRING 用來將水文單元名稱與 GNIS 名稱資料庫建立關聯的專屬號碼 (一律為空白) loaddate STRING 資料載入官方供應商資料庫的日期 metasource STRING 將元素連結至中繼資料表的專屬 ID 名稱 STRING 水文單元所在地理區域的 GNIS 名稱 shape_area STRING 以內部單位平方表示的特徵面積 shape_leng STRING 以內部單位表示的特徵長度 sourcedata STRING 這個空間用於簡要說明用來更新或變更目前 WBD 的基礎資料類型 (一律為空白) sourcefeat STRING 如果特徵是分割或合併的結果，則識別特徵的父項 (一律為空白) sourceorig STRING 建立用於改善 WBD 的基礎資料的機構說明 (一律為空白) 州 STRING 識別水文單元所屬或觸及的州/省或邊遠地區 tnmid STRING 這個 40 個字元的欄位是資料庫中每個元素的專屬 ID huc4 STRING 水文單元專屬代碼 使用條款 使用條款 美國地質調查局 (USGS) 的大部分資訊都屬於公有領域，可不受限制地使用。如要進一步瞭解如何 註明或出處 USGS 做為資訊來源 ，請參閱這篇文章。 參考資料 參考資料： 由美國農業部自然資源保護局 (USDA-NRCS)、美國地質調查局 (USGS) 和美國環保署 (EPA) 共同合作。流域邊界資料集 (WBD) 是根據各州的多種來源建立，並匯總為標準的國家/地區層，可用於策略規劃和問責。Watershed Boundary Dataset for HUC# [Online WWW]。Available URL: (https://datagateway.nrcs.usda.gov) [Accessed 22/04/2017]。 使用 Earth Engine 探索 重要事項： Earth Engine 平台可對地理空間資料集進行 PB 等級的科學分析，並以圖表呈現，適合用於促進公共福祉，或供企業和政府使用。 Earth Engine 可免費用於研究、教育和非營利用途。如要開始使用，請 申請 Earth Engine 存取權 。 程式碼編輯器 (JavaScript) var dataset = ee .
- FeatureViewLayer ( 'USGS/WBD/2017/HUC04_FeatureView' ); var visParams = { color : '808080' , lineWidth : 1 }; fvLayer . setVisParams ( visParams ); fvLayer . setName ( 'Basins' ); Map . setCenter ( - 105.861 , 39.529 , 7 ); Map . add ( fvLayer ); 在程式碼編輯器中開啟 HUC04：美國地質調查局子區域流域邊界資料集 流域邊界資料集 (WBD) 是水文單元 (HU) 資料的完整彙整集合，符合全國劃分和解析度標準。除了沿海或湖岸地區可能有多個出水口外，流域會定義地表水排入某個點的面積範圍， USGS/WBD/2017/HUC04, hydrology,surface-ground-water,table,usgs,water,watershed,wbd 2017-04-22T00:00:00Z/2017-04-23T00:00:00Z -14.69 -180 71.567 180 Google Earth Engine https://developers.google.com/earth-engine/datasets 想進一步說明嗎？ [[["容易理解","easyToUnderstand","thumb-up"],["確實解決了我的問題","solvedMyProblem","thumb-up"],["其他","otherUp","thumb-up"]],[["缺少我需要的資訊","missingTheInformationINeed","thumb-down"],["過於複雜/步驟過多","tooComplicatedTooManySteps","thumb-down"],["過時","outOfDate","thumb-down"],["翻譯問題","translationIssue","thumb-down"],["示例/程式碼問題","samplesCodeIssue","thumb-down"],["其他","otherDown","thumb-down"]],[],[],["The Watershed Boundary Dataset (WBD) from the USGS provides hydrologic unit (HU) data, defining surface water drainage areas.
- FeatureCollection ( 'USGS/WBD/2017/HUC04' ); var visualization = { color : '808080' , strokeWidth : 1 }; dataset = dataset . draw ( visualization ); Map . setCenter ( - 105.861 , 39.529 , 7 ); Map . addLayer ( dataset , null , 'Basins' ); 在程式碼編輯器中開啟 以 FeatureView 形式呈現 FeatureView 是 FeatureCollection 的加速表示法，只能用來檢視。詳情請參閱 FeatureView 說明文件。 重要事項： Earth Engine 平台可對地理空間資料集進行 PB 等級的科學分析，並以圖表呈現，適合用於促進公共福祉，或供企業和政府使用。 Earth Engine 可免費用於研究、教育和非營利用途。如要開始使用，請 申請 Earth Engine 存取權 。 程式碼編輯器 (JavaScript) var fvLayer = ui .
- The dataset, spanning from April 22 to 23, 2017, delineates watersheds at various scales, from regions to subwatersheds, indicated by 2 to 12-digit Hydrologic Unit Codes (HUCs).

### Earth Engine Data Catalog \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- It defines the areal extent of surface water drainage to a point except in coastal or lake front areas where there … hydrology surface-ground-water table usgs water watershed HUC04: USGS Watershed Boundary Dataset of Subregions The Watershed Boundary Dataset (WBD) is a comprehensive aggregated collection of hydrologic unit (HU) data consistent with the national criteria for delineation and resolution.
- It defines the areal extent of surface water drainage to a point except in coastal or lake front areas where there … hydrology surface-ground-water table usgs water watershed HUC12: USGS Watershed Boundary Dataset of Subwatersheds The Watershed Boundary Dataset (WBD) is a comprehensive aggregated collection of hydrologic unit (HU) data consistent with the national criteria for delineation and resolution.
- It defines the areal extent of surface water drainage to a point except in coastal or lake front areas where there … hydrology surface-ground-water table usgs water watershed HUC10: USGS Watershed Boundary Dataset of Watersheds The Watershed Boundary Dataset (WBD) is a comprehensive aggregated collection of hydrologic unit (HU) data consistent with the national criteria for delineation and resolution.
- It defines the areal extent of surface water drainage to a point except in coastal or lake front areas where there … hydrology surface-ground-water table usgs water watershed HUC08: USGS Watershed Boundary Dataset of Subbasins The Watershed Boundary Dataset (WBD) is a comprehensive aggregated collection of hydrologic unit (HU) data consistent with the national criteria for delineation and resolution.

### "Datasets tagged surface-ground-water in Earth Engine \_|\_ Earth Engine\

- URL: [https://developers.google.com/earth-engine/datasets/tags/surface-ground-water](https://developers.google.com/earth-engine/datasets/tags/surface-ground-water)
- Source ID: `site-docs-root-3`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- It defines the areal extent of surface water drainage to a point except in coastal or lake front areas where there … hydrology surface-ground-water table usgs water watershed HUC04: USGS Watershed Boundary Dataset of Subregions The Watershed Boundary Dataset (WBD) is a comprehensive aggregated collection of hydrologic unit (HU) data consistent with the national criteria for delineation and resolution.
- It defines the areal extent of surface water drainage to a point except in coastal or lake front areas where there … hydrology surface-ground-water table usgs water watershed HUC12: USGS Watershed Boundary Dataset of Subwatersheds The Watershed Boundary Dataset (WBD) is a comprehensive aggregated collection of hydrologic unit (HU) data consistent with the national criteria for delineation and resolution.
- It defines the areal extent of surface water drainage to a point except in coastal or lake front areas where there … hydrology surface-ground-water table usgs water watershed HUC10: USGS Watershed Boundary Dataset of Watersheds The Watershed Boundary Dataset (WBD) is a comprehensive aggregated collection of hydrologic unit (HU) data consistent with the national criteria for delineation and resolution.
- It defines the areal extent of surface water drainage to a point except in coastal or lake front areas where there … hydrology surface-ground-water table usgs water watershed HUC08: USGS Watershed Boundary Dataset of Subbasins The Watershed Boundary Dataset (WBD) is a comprehensive aggregated collection of hydrologic unit (HU) data consistent with the national criteria for delineation and resolution.

