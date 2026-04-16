---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:20.153Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "WRI/GFW/FORMA/alerts"
feature_slug: "wri-gfw-forma-alerts"
latest_feature_date: "2018-04-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/WRI_GFW_FORMA_alerts"
  - "https://developers.google.com/earth-engine/datasets/tags/forest-biomass"
  - "https://developers.google.com/earth-engine/datasets/catalog"
keywords:
  - "wri"
  - "gfw"
  - "forma"
  - "alerts"
  - "forest"
  - "monitoring"
---

# WRI/GFW/FORMA/alerts

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

FORMA alerts for forest monitoring.

## Extended Definition

FORMA alerts for forest monitoring.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/WRI_GFW_FORMA_alerts](https://developers.google.com/earth-engine/datasets/catalog/WRI_GFW_FORMA_alerts)
- [https://developers.google.com/earth-engine/datasets/tags/forest-biomass](https://developers.google.com/earth-engine/datasets/tags/forest-biomass)
- [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)

## Supporting Pages

### FORMA Alerts | Earth Engine Data Catalog | Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog/WRI_GFW_FORMA_alerts](https://developers.google.com/earth-engine/datasets/catalog/WRI_GFW_FORMA_alerts)
- Source ID: `feature-recovery-direct-http`
- Final score: 262
- Re-rank relevance: N/A

Evidence snippets:
- FORMA Alerts | Earth Engine Data Catalog | Google for Developers 跳至主要內容 Earth Engine Data Catalog / English Deutsch Español Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體 日本語 한국어 登入 首頁 類別 所有資料集 所有標記 Landsat MODIS Sentinel 發佈商 Community API 說明文件 資料集狀態 變更記錄 Earth Engine Data Catalog 首頁 類別 所有資料集 所有標記 Landsat MODIS Sentinel 發佈商 Community API 說明文件 資料集狀態 變更記錄 首頁 Earth Engine Data Catalog 所有資料集 提供意見 FORMA Alerts 透過集合功能整理內容 你可以依據偏好儲存及分類內容。 資料集開放期間 2012-01-01T00:00:00Z–2019-05-18T00:00:00Z 資料集產生者 世界資源研究所 / 全球森林監測 Earth Engine 程式碼片段 ee.Image("WRI/GFW/FORMA/alerts") open_in_new 標記 daily deforestation fire forest forma gfw modis monitoring wri 說明 世界資源研究所的注意事項 ：世界資源研究所決定停止更新 FORMA 快訊。目標是簡化 Global Forest Watch 使用者體驗，並減少多餘功能。我們發現 Terra-i 和 GLAD 的使用頻率較高。此外，以 GLAD 為標準進行比較後，發現 Terra-i 的全球表現優於 FORMA。 FORMA 警報是透過結合兩種 MODIS 產品偵測而得：NDVI (常態化差異植被指數) 和 FIRMS (資源管理系統火災資訊)。NDVI 更新每 16 天處理一次，火災更新則每天處理。我們會為每個生態群組分別開發模型，並使用 Hansen 年度樹木覆蓋損失資料訓練模型，將這兩項輸入內容與清除區域建立關聯。警報的最低門檻為 25% 的像素清除率，但各生態群組的門檻不同，以盡量減少誤報。以下是 範例指令碼 ，可快速瞭解 FORMA 資料集。 清除百分比的值為 0 (未偵測到清除作業)，或介於 [ecogroup_bound:100) 之間，其中 ecogroup_bound 由 WRI/GFW/FORMA/thresholds 提供。 資料收集的時間範圍會因 N 天而異，其中 N 是 alert_date 與上次 MODIS NDVI 更新之間的天數。 頻帶 波段 像素大小：250 公尺 (所有頻段) 名稱 單位 最小值 最大值 像素大小 說明 alert_delta % 0 100 250 公尺 在像素的相應 alert_date 值之前 6 個 MODIS 週期 (96 + N 天) 內，清除的百分比 alert_date 毫秒 250 公尺 自 1970 年 1 月 1 日起算的時間戳記 (毫秒) 圖片屬性 影像屬性 名稱 類型 說明 日期 STRING 這個資料集中最後可用的資料日期，格式為「YYYY-MM-DD」 last_firms_date STRING 以「YYYY-MM-DD」格式表示此資料集中包含的最後一筆 FIRMS 資料日期 last_modis_date STRING 以「YYYY-MM-DD」格式顯示的日期，代表這個資料集包含的最後一個可用 MODIS NDVI 資料 nday INT 自上次更新 MODIS NDVI 後經過的天數 年 INT 資料集中包含的最新資料年份 使用條款 使用條款 FORMA 資料集為公開，且使用或散布均不受任何限制。WRI 要求使用者適當註明出處，並在適用情況下將 WRI 和 GFW 標示為資料來源。 使用 Earth Engine 探索 重要事項： Earth Engine 平台可對地理空間資料集進行 PB 等級的科學分析和圖表/影像作業，適合用於促進公共福祉，或供企業和政府使用。 Earth Engine 可免費用於研究、教育和非營利用途。如有意使用，請 申請 Earth Engine 權限 。 程式碼編輯器 (JavaScript) var dataset = ee .
- Image ( 'WRI/GFW/FORMA/alerts' ); var formaAlerts = dataset . select ( 'alert_delta' ); var formaAlertsVis = { min : 25 , max : 75 , palette : [ 'd65898' , 'da68a2' ], }; Map . setCenter ( 6.746 , 46.529 , 6 ); Map . addLayer ( formaAlerts , formaAlertsVis , 'FORMA Alerts' ); 在程式碼編輯器開啟 FORMA 快訊 世界資源研究所 (WRI) 注意事項：WRI 決定停止更新 FORMA 快訊。目標是簡化 Global Forest Watch 的使用者體驗，並減少多餘功能。我們發現 Terra-i 和 GLAD 的使用頻率較高。此外，以 GLAD 為標準進行比較後，發現 Terra-i 的全球表現優於 FORMA。偵測到 FORMA 警報… WRI/GFW/FORMA/alerts, daily,deforestation,fire,forest,forma,gfw,modis,monitoring,wri 2012-01-01T00:00:00Z/2019-05-18T00:00:00Z -50 -120 40 180 Google Earth Engine https://developers.google.com/earth-engine/datasets 想進一步說明嗎？ [[["容易理解","easyToUnderstand","thumb-up"],["確實解決了我的問題","solvedMyProblem","thumb-up"],["其他","otherUp","thumb-up"]],[["缺少我需要的資訊","missingTheInformationINeed","thumb-down"],["過於複雜/步驟過多","tooComplicatedTooManySteps","thumb-down"],["過時","outOfDate","thumb-down"],["翻譯問題","translationIssue","thumb-down"],["示例/程式碼問題","samplesCodeIssue","thumb-down"],["其他","otherDown","thumb-down"]],[],[],["The WRI/GFW FORMA dataset, provided by the World Resources Institute/Global Forest Watch, offered daily deforestation alerts from 2012 to 2019.
- WRI stopped updating FORMA alerts because other tools were more often used.
- Using MODIS data (NDVI and FIRMS), the dataset detected forest clearing, with a minimum threshold of 25% pixel clearing.

### "Datasets tagged forest-biomass in Earth Engine \_|\_ Earth Engine Data Catalog\

- URL: [https://developers.google.com/earth-engine/datasets/tags/forest-biomass](https://developers.google.com/earth-engine/datasets/tags/forest-biomass)
- Source ID: `site-docs-root-3`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- It includes includes mainly old-growth, late-successional forests, but also some early seral stages and young forests that originated after natural disturbances … europe forest forest-biomass table FORMA Raw Output NDVI NOTE from WRI: WRI decided to stop updating FORMA alerts.
- Moreover, using GLAD as a standard, found that Terra-i outperformed FORMA … daily deforestation forest forest-biomass forma gfw FORMA Vegetation T-Statistics NOTE from WRI: WRI decided to stop updating FORMA alerts.
- Produced by the World Resources Institute (WRI) and Google DeepMind, the data were developed using a global neural network model (ResNet) trained on a set of samples collected … agriculture deforestation forest forest-biomass google landandcarbon Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
- It provides detailed spatial information on forest characteristics including number of live and dead trees, biomass, and carbon across the entire forested extent of the continental United States in 2016.

### Earth Engine Data Catalog \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- Source ID: `site-docs-root`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- Moreover, using GLAD as a standard, found that Terra-i outperformed FORMA … daily deforestation forest forest-biomass forma gfw FORMA Vegetation T-Statistics NOTE from WRI: WRI decided to stop updating FORMA alerts.
- Moreover, using GLAD as a standard, found that Terra-i outperformed FORMA … daily deforestation fire forest forma gfw FORMA Raw Output FIRMS NOTE from WRI: WRI decided to stop updating FORMA alerts.
- Moreover, using GLAD as a standard, found that Terra-i outperformed FORMA … daily deforestation fire forest forma gfw FORMA Raw Output NDVI NOTE from WRI: WRI decided to stop updating FORMA alerts.
- Moreover, using GLAD as a standard, found that Terra-i outperformed FORMA … daily deforestation fire forest forma gfw FORMA Alerts NOTE from WRI: WRI decided to stop updating FORMA alerts.

