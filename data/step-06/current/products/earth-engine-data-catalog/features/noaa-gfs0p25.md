---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:20.337Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "NOAA/GFS0P25"
feature_slug: "noaa-gfs0p25"
latest_feature_date: "2015-08-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/NOAA_GFS0P25"
  - "https://developers.google.com/earth-engine/datasets/catalog"
  - "https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_ANALYSISFORECAST_PHY_DAILY"
keywords:
  - "noaa"
  - "gfs0p25"
  - "global"
  - "forecast"
  - "system"
  - "384"
  - "hour"
  - "predicted"
---

# NOAA/GFS0P25

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

Global Forecast System 384-hour predicted atmosphere data at 0.25-degree resolution.

## Extended Definition

Global Forecast System 384-hour predicted atmosphere data at 0.25-degree resolution.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/NOAA_GFS0P25](https://developers.google.com/earth-engine/datasets/catalog/NOAA_GFS0P25)
- [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- [https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_ANALYSISFORECAST_PHY_DAILY](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_ANALYSISFORECAST_PHY_DAILY)

## Supporting Pages

### GFS: Global Forecast System 384-Hour Predicted Atmosphere Data | Earth Engine Data Catalog | Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog/NOAA_GFS0P25](https://developers.google.com/earth-engine/datasets/catalog/NOAA_GFS0P25)
- Source ID: `feature-recovery-direct-http`
- Final score: 340
- Re-rank relevance: N/A

Evidence snippets:
- GFS: Global Forecast System 384-Hour Predicted Atmosphere Data | Earth Engine Data Catalog | Google for Developers 跳至主要內容 Earth Engine Data Catalog / English Deutsch Español Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體 日本語 한국어 登入 首頁 類別 所有資料集 所有標記 Landsat MODIS Sentinel 發佈商 Community API 說明文件 資料集狀態 變更記錄 Earth Engine Data Catalog 首頁 類別 所有資料集 所有標記 Landsat MODIS Sentinel 發佈商 Community API 說明文件 資料集狀態 變更記錄 首頁 Earth Engine Data Catalog 所有資料集 提供意見 GFS: Global Forecast System 384-Hour Predicted Atmosphere Data 透過集合功能整理內容 你可以依據偏好儲存及分類內容。 資料集開放期間 2015-07-01T00:00:00Z–2026-04-14T06:00:00Z 資料集產生者 NOAA/NCEP/EMC Earth Engine 程式碼片段 ee.ImageCollection("NOAA/GFS0P25") open_in_new 更新頻率 6 小時 標記 climate cloud flux forecast geophysical humidity ncep noaa precipitation radiation temperature vapor weather wind emc gfs 說明 全球預報系統 (GFS) 是由美國國家環境預報中心 (NCEP) 製作的天氣預報模型。GFS 資料集包含選取的模型輸出內容 (如下所述)，以格狀預報變數的形式呈現。384 小時的預報資料會以 6 小時的時間解析度提供 (也就是每天更新四次)，預報間隔為 1 小時 (最多 120 小時) 和 3 小時 (120 小時後)。使用「creation_time」和「forecast_time」屬性選取感興趣的資料。 GFS 是耦合模型，由大氣模型、海洋模型、陸地/土壤模型和海冰模型組成，可共同提供準確的天氣狀況。請注意，這個模型可能會變更。詳情請參閱 全球預報/分析系統的近期修改記錄 和 說明文件 。每小時和每天的波動可能很大，因此在分析前，需要對頻帶套用降噪技術。 請注意，可用的預測時數和間隔會隨時間變更： 2015 年 4 月 1 日至 2017 年 7 月 9 日：36 小時天氣預報，不含第 0 小時，每 3 小時間隔一次。 2017 年 7 月 9 日至 2021 年 6 月 11 日：384 小時天氣預報，第 0 至 120 小時每 1 小時預報一次，第 120 至 240 小時每 3 小時預報一次，第 240 至 384 小時每 12 小時預報一次。 2021 年 6 月 12 日起：384 小時預報，第 0 至 120 小時每小時預報一次，第 120 至 384 小時每 3 小時預報一次。 部分樂團僅在 2025 年 1 月 15 日後提供，詳情請參閱樂團說明。 頻帶 波段 像素大小：27830 公尺 (所有頻段) 名稱 單位 最小值 最大值 像素大小 說明 temperature_2m_above_ground °C -69.18* 52.25* 27830 公尺 離地 2 公尺處的溫度 specific_humidity_2m_above_ground 質量分數 0* 0.03* 27830 公尺 地面以上 2 公尺處的比濕 dew_point_temperature_2m_above_ground °C -81.05* 29.05* 27830 公尺 離地 2 公尺處的露點溫度 (2025 年 1 月 15 日起提供) relative_humidity_2m_above_ground % 1* 100.05* 27830 公尺 地面 2 公尺處的相對濕度 maximum_temperature_2m_above_ground °C -60.73* 59.28* 27830 公尺 地面以上 2 公尺處的最高溫度 (2025 年 1 月 15 日起提供，但僅適用於 forecast_hours > 0 的資產) minimum_temperature_2m_above_ground °C -63.78* 59.39* 27830 公尺 地面以上 2 公尺的最低溫度 (2025 年 1 月 15 日起提供，但僅適用於 forecast_hours > 0 的資產) u_component_of_wind_10m_above_ground 公尺/秒 -60.73* 59.28* 27830 公尺 地面以上 10 公尺處的風速 U 分量 v_component_of_wind_10m_above_ground 公尺/秒 -63.78* 59.39* 27830 公尺 地面以上 10 公尺處的風速 V 分量 total_precipitation_surface 公斤/公尺^2 0* 626.75* 27830 公尺 前 1 到 6 小時的地表累積降水量，取決於「forecast_hours」屬性的值，計算公式為 ((F - 1) % 6) + 1 (僅適用於 forecast_hours > 0 的資產)。 因此，如要計算 X 時的總降水量，請只加總 forecast_hours 的值，這些值是 6 的倍數，加上任何餘數即為 X，這樣就能避免重複計算。這也表示，如要判斷 X 小時的降水量，必須減去前一小時的值，除非 X 是 6 小時時間範圍內的第一個小時。 precipitable_water_entire_atmosphere 公斤/公尺^2 0* 100* 27830 公尺 整個大氣層的可降水量 u_component_of_wind_planetary_boundary_layer 公尺/秒 -66.8* 62.18* 27830 公尺 風行星界層的 U 分量 (2025 年 1 月 15 日起提供) v_component_of_wind_planetary_boundary_layer 公尺/秒 -63.08* 57.6* 27830 公尺 風行星界層的 V 分量 (2025 年 1 月 15 日起提供) gust 公尺/秒 0* 57.41* 27830 公尺 風速 (陣風) (2025 年 1 月 15 日起提供) precipitation_rate kg/m^2/s 0* 0.032* 27830 公尺 降水率 (2025 年 1 月 15 日起提供) haines_index 2* 6* 27830 公尺 海恩斯指數 (2025 年 1 月 15 日起提供) ventilation_rate m^2/s 0* 234000* 27830 公尺 通風率 (2025 年 1 月 15 日起提供) total_cloud_cover_entire_atmosphere % 0* 100* 27830 公尺 整個大氣層的總雲量 (先前僅適用於 forecast_hours > 0 的資產，但自 2025 年 1 月 15 日起，也適用於 forecast_hours == 0 的資產) downward_shortwave_radiation_flux W/m^2 0* 1230* 27830 公尺 向下短波輻射通量 (僅適用於 forecast_hours > 0 的資產) downward_longwave_radiation_flux W/m^2 0* 100* 27830 公尺 向下長波輻射通量 (2025 年 1 月 15 日起提供，但僅適用於 forecast_hours > 0 的資產) upward_shortwave_radiation_flux W/m^2 0* 1230* 27830 公尺 向上短波輻射通量 (2025 年 1 月 15 日起提供，但僅適用於 forecast_hours > 0 的資產) upward_longwave_radiation_flux W/m^2 0* 100* 27830 公尺 向上長波輻射通量 (2025 年 1 月 15 日起提供，但僅適用於 forecast_hours > 0 的資產) planetary_boundary_layer_height 公尺 7.77* 6312.67* 27830 公尺 行星邊界層高度 (2025 年 1 月 15 日起提供) * 預估最小或最大值 圖片屬性 影像屬性 名稱 類型 說明 creation_time DOUBLE 建立時間 forecast_hours DOUBLE 預測時數 forecast_time DOUBLE 預測時間 使用條款 使用條款 無論傳送方式為何，NOAA 資料、資訊和產品均不受著作權限制，可供大眾隨意使用，且取得前述資源後，可用於合法用途。上述資料屬於公有領域內容，提供時未限制使用和散布。 參考資料 參考資料： Alpert, J.、2006 年 NCEP 第 20 屆會議，次網格尺度山區阻擋。WAF/16 會議 NWP P2.4。 Alpert, J.
- Filter . date ( '2018-03-01' , '2018-03-02' )); var temperatureAboveGround = dataset . select ( 'temperature_2m_above_ground' ); var visParams = { min : - 40.0 , max : 35.0 , palette : [ 'blue' , 'purple' , 'cyan' , 'green' , 'yellow' , 'red' ], }; Map . setCenter ( 71.72 , 52.48 , 3.0 ); Map . addLayer ( temperatureAboveGround , visParams , 'Temperature Above Ground' ); 在程式碼編輯器開啟 GFS：全球預報系統 384 小時預測大氣資料 全球預報系統 (GFS) 是由美國國家環境預報中心 (NCEP) 製作的天氣預報模型。GFS 資料集包含選取的模型輸出內容 (如下所述)，以格狀預報變數的形式呈現。384 小時預報的預報間隔為 1 小時 (最多 120 小時)，以及 3 小時 (120 小時後)，… NOAA/GFS0P25, climate,cloud,flux,forecast,geophysical,humidity,ncep,noaa,precipitation,radiation,temperature,vapor,weather,wind 2015-07-01T00:00:00Z/2026-04-14T06:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets https://doi.org/10.1016/j.jqsrt.2004.05.058 https://doi.org/10.1016/j.jqsrt.2004.05.058 想進一步說明嗎？ [[["容易理解","easyToUnderstand","thumb-up"],["確實解決了我的問題","solvedMyProblem","thumb-up"],["其他","otherUp","thumb-up"]],[["缺少我需要的資訊","missingTheInformationINeed","thumb-down"],["過於複雜/步驟過多","tooComplicatedTooManySteps","thumb-down"],["過時","outOfDate","thumb-down"],["翻譯問題","translationIssue","thumb-down"],["示例/程式碼問題","samplesCodeIssue","thumb-down"],["其他","otherDown","thumb-down"]],[],[],["The NOAA/NCEP/EMC provides the Global Forecast System (GFS) dataset, accessible via Earth Engine.
- ImageCollection ( 'NOAA/GFS0P25' ) . filter ( ee .
- Johansson, Ake, 2008: Convectively Forced Gravity Wave Drag in the NCEP Global Weather and Climate Forecast Systems, SAIC/Environmental Modelling Center internal report.

### Earth Engine Data Catalog \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- Source ID: `site-docs-root`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- The 250m floodplain dataset is derived by processing the NASA SRTM Digital Elevation model gathered from http://srtm.csi.cgiar.org/, and in particular the 250-m SRTM version 4.1 … flood monitoring surface-ground-water GFS: Global Forecast System 384-Hour Predicted Atmosphere Data The Global Forecast System (GFS) is a weather forecast model produced by the National Centers for Environmental Prediction (NCEP).
- A series of methods was used to mitigate the impact of inter-annual inconsistency, saturation, and blooming effects and to improve data … dmsp eog imagery lights nighttime ols CFSR: Climate Forecast System Reanalysis The National Centers for Environmental Prediction (NCEP) Climate Forecast System Reanalysis (CFSR) was designed and executed as a global, high-resolution, coupled atmosphere-ocean-land surface-sea ice system to provide the best estimate of the state of these coupled domains over the 32-year period of record from January … climate daylight flux forecast geophysical ncep CFSV2: NCEP Climate Forecast System Version 2, 6-Hourly Products Harmonized The National Centers for Environmental Prediction (NCEP) Climate Forecast System (CFS) is a fully coupled model representing the interaction between the Earth's atmosphere, oceans, land, and sea ice.
- This dataset includes hourly analyses at 2.5 km for CONUS. atmosphere climate cloud geophysical humidity noaa Reprocessed GLDAS-2.0: Global Land Data Assimilation System NASA Global Land Data Assimilation System Version 2 (GLDAS-2) has three components: GLDAS-2.0, GLDAS-2.1, and GLDAS-2.2.
- This product includes 3-hourly instantaneous fields of integrated wave parameters from the total spectrum … copernicus forecast hourly marine oceans Global Ocean Waves Static Bathymetry Static bathymetry for the Global Ocean Waves Analysis and Forecast system.

### "Global Ocean Physics Analysis and Forecast Daily \_|\_ Earth Engine Data\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_ANALYSISFORECAST_PHY_DAILY](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_ANALYSISFORECAST_PHY_DAILY)
- Source ID: `site-docs-root-2`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- The Operational Mercator global ocean analysis and forecast system is providing 10 days of 2D global ocean forecasts updated daily.
- The Operational Mercator global ocean analysis and forecast system is providing 10 days of 2D global ocean forecasts updated daily.
- Bands Bands Pixel size: 9276.62 meters (all bands) Name Units Pixel Size Description sialb % 9276.62 meters Mean albedo over sea ice siage y 9276.62 meters Mean sea ice age siconc Dimensionless 9276.62 meters Sea Ice Concentration ist °C 9276.62 meters Sea Ice Surface Temperature sivelo m/s 9276.62 meters Sea Ice Velocity sithick m 9276.62 meters Sea Ice Thickness sisnthick m 9276.62 meters Sea Ice Surface Snow Thickness mlotst m 9276.62 meters Mixed Layer Depth pbo Pa 9276.62 meters Sea Water Pressure at Sea floor sob psu 9276.62 meters Sea Bottom Salinity zos m 9276.62 meters Sea Surface Height tob °C 9276.62 meters Sea Bottom Temperature usi m/s 9276.62 meters Sea Ice Eastward Velocity vsi m/s 9276.62 meters Sea Ice Northward Velocity Image Properties Image Properties Name Type Description lag hours DOUBLE For observations in the past, the number of hours between the observation and run times. forecast hours DOUBLE For observations in the future, the number of hours between the observation and run times. observation time DOUBLE The valid time of the observation, in milliseconds. observation type STRING Observation type: forecast : Future model prediction hindcast : Past model reconstruction nowcast : Best estimate of the current state run time DOUBLE The time the observation was produced, in milliseconds.
- The time series is aggregated in time in order to reach … COPERNICUS/MARINE/GLOBAL ANALYSISFORECAST PHY DAILY, copernicus,daily,forecast,marine,oceans 2022-06-01T00:00:00Z/2026-04-19T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]

