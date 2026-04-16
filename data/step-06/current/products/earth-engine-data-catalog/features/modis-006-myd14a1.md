---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:20.216Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "MODIS/006/MYD14A1"
feature_slug: "modis-006-myd14a1"
latest_feature_date: "2017-05-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MYD14A1"
  - "https://developers.google.com/earth-engine/datasets/catalog/modis"
  - "https://developers.google.com/earth-engine/datasets/tags/fire"
keywords:
  - "modis"
  - "006"
  - "myd14a1"
  - "aqua"
  - "daily"
  - "thermal"
  - "anomalies"
  - "fire"
---

# MODIS/006/MYD14A1

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

MODIS Aqua daily thermal anomalies and fire product.

## Extended Definition

MODIS Aqua daily thermal anomalies and fire product.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MYD14A1](https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MYD14A1)
- [https://developers.google.com/earth-engine/datasets/catalog/modis](https://developers.google.com/earth-engine/datasets/catalog/modis)
- [https://developers.google.com/earth-engine/datasets/tags/fire](https://developers.google.com/earth-engine/datasets/tags/fire)

## Supporting Pages

### MYD14A1.006: Aqua Thermal Anomalies & Fire Daily Global 1km [deprecated] | Earth Engine Data Catalog | Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MYD14A1](https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MYD14A1)
- Source ID: `feature-recovery-direct-http`
- Final score: 357
- Re-rank relevance: N/A

Evidence snippets:
- MYD14A1.006: Aqua Thermal Anomalies & Fire Daily Global 1km [deprecated] | Earth Engine Data Catalog | Google for Developers 跳至主要内容 Earth Engine Data Catalog / English Deutsch Español Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體 日本語 한국어 登录 首页 类别 所有数据集 所有标签 Landsat MODIS Sentinel 发布商 社区 API 文档 数据集状态 更新日志 Earth Engine Data Catalog 首页 类别 所有数据集 所有标签 Landsat MODIS Sentinel 发布商 社区 API 文档 数据集状态 更新日志 首页 Earth Engine Data Catalog 类别 发送反馈 MYD14A1.006: Aqua Thermal Anomalies & Fire Daily Global 1km [deprecated] 使用集合让一切井井有条 根据您的偏好保存内容并对其进行分类。 注意 ：本数据集已被 MODIS/061/MYD14A1 取代。 数据集可用时间 2002-07-04T00:00:00Z–2023-02-25T00:00:00Z 数据集生产者 美国地质调查局地球资源观测与科学中心下属的美国国家航空航天局陆地过程分布式主动存档中心 Earth Engine 代码段 ee.ImageCollection("MODIS/006/MYD14A1") open_in_new 时间分辨率 1 天 标签 湖水绿 每天 火 全局 modis myd14a1 nasa usgs 说明 MYD14A1 V6 数据集提供每日火灾掩膜合成数据，分辨率为 1 公里，源自 MODIS 4 微米和 11 微米辐射亮度。火灾检测策略基于对火灾的绝对检测（当火灾强度足以检测时）以及相对于背景的检测（以考虑表面温度和阳光反射的变化）。该产品可区分火灾、无火灾和无观测结果。此信息用于监控不同生态系统中火灾的空间和时间分布，检测火灾分布的变化，以及识别新的火灾前沿、野火以及火灾频率或相对强度的变化。 文档： 用户指南 算法理论基础文档 (ATBD) 常规文档 频段 波段 像素大小：1,000 米（所有波段） 名称 单位 最小值 最大值 缩放系数 像素尺寸 说明 FireMask 1000 米 火灾置信度 FireMask 的位掩码 位 0-3：火点掩模像素类别 1：未处理（已过时；自 Collection 1 起未使用） 2：未处理（其他原因） 3：非火焰水像素 4：云（陆地或水体） 5：非火灾陆地像素 6：未知（陆地或水上） 7：火（置信度较低，陆地或水上） 8：火灾（名义置信度，陆地或水域） 9：火灾（高置信度，陆地或水上） MaxFRP MW 0 180000 0.1 1000 米 最大火点辐射功率 sample 0 1353 1000 米 扫描中火焰像素的位置 QA 1000 米 像素质量指标 质量保证位掩码 位 0-1：陆地/水域状态 0：水 1：海岸 2：陆地 3：缺少数据 位 2：夜间/白天 0：夜间 1：天数 使用条款 使用条款 通过 LP DAAC 获取的 MODIS 数据和产品在后续使用、销售或再分发方面没有任何限制。 引用 引用： 如需了解如何引用 LP DAAC 数据集，请访问 LP DAAC 的“引用我们的数据”页面 。 DOI https://doi.org/10.5067/MODIS/MYD14A1.006 通过 Earth Engine 探索 重要提示： Earth Engine 是一个平台，可用于对地理空间数据集进行 PB 级科学分析和可视化，既可用于公益用途，也可供企业和政府用户使用。Earth Engine 可免费用于研究、教育和公益用途。如需开始使用，请 注册以获取 Earth Engine 访问权限 。 代码编辑器 (JavaScript) var dataset = ee .
- Filter . date ( '2018-01-01' , '2018-05-01' )); var fireMaskVis = { min : 0.0 , max : 6000.0 , bands : [ 'MaxFRP' , 'FireMask' , 'FireMask' ], }; Map . setCenter ( 6.746 , 46.529 , 2 ); Map . addLayer ( dataset , fireMaskVis , 'Fire Mask' ); 在代码编辑器中打开 MYD14A1.006：Aqua 热异常和火灾每日全球 1 公里 [已弃用] MYD14A1 V6 数据集提供每日火灾掩膜合成数据，分辨率为 1 公里，源自 MODIS 4 微米和 11 微米辐射率。火灾检测策略基于对火灾的绝对检测（当火势足以检测到时）以及相对于背景的检测（以考虑… MODIS/006/MYD14A1, aqua,daily,fire,global,modis,nasa,usgs 2002-07-04T00:00:00Z/2023-02-25T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets https://doi.org/10.5067/MODIS/MYD14A1.006 https://doi.org/10.5067/MODIS/MYD14A1.006 需要向我们提供更多信息？ [[["易于理解","easyToUnderstand","thumb-up"],["解决了我的问题","solvedMyProblem","thumb-up"],["其他","otherUp","thumb-up"]],[["没有我需要的信息","missingTheInformationINeed","thumb-down"],["太复杂/步骤太多","tooComplicatedTooManySteps","thumb-down"],["内容需要更新","outOfDate","thumb-down"],["翻译问题","translationIssue","thumb-down"],["示例/代码问题","samplesCodeIssue","thumb-down"],["其他","otherDown","thumb-down"]],[],[],["The MYD14A1 V6 dataset offers daily 1km resolution fire mask composites from MODIS radiances, available from 2002-07-04 to 2023-02-25.
- ImageCollection ( 'MODIS/006/MYD14A1' ) . filter ( ee .
- The data is now superseded by a newer dataset: MODIS/061/MYD14A1.\n"]] GitHub Earth Engine on GitHub Medium Follow our blog on Medium GIS Stack Exchange Ask questions using the google-earth-engine tag Twitter Follow @googleearth on Twitter Videos Earth Engine on YouTube 关注 博客 Bluesky Instagram LinkedIn X (Twitter) YouTube 计划 Google Developer Program Google Developer Groups Google Developer Experts Accelerators Google Cloud & NVIDIA 开发者控制台 Google API Console Google Cloud Platform Console Google Play 管理中心 Firebase Console Actions on Google Console Cast SDK Developer Console Chrome Web Store Dashboard Google Home Developer Console Android Chrome Firebase Google Cloud Platform Google AI 所有产品 条款 隐私权政策 Manage cookies English Deutsch Español Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體 日本語 한국어

### "MODIS Collections in Earth Engine \_|\_ Earth Engine Data Catalog \_|\_\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/modis](https://developers.google.com/earth-engine/datasets/catalog/modis)
- Source ID: `site-docs-root`
- Final score: 173
- Re-rank relevance: N/A

Evidence snippets:
- The MODIS NDVI and EVI products are computed from atmospherically corrected bi-directional surface reflectances that have been masked for water, clouds, heavy aerosols, and cloud shadows. photo library MODIS/061/MYD13Q1 MYD14A1.061: Aqua Thermal Anomalies & Fire Daily Global 1km The MYD14A1 V6.1 dataset provides daily fire mask composites at 1km resolution derived from the MODIS 4- and 11-micrometer radiances.
- This information is used for monitoring the spatial and temporal distribution of fires in different ecosystems, detecting changes in fire distribution and identifying new fire frontiers, wild fires, and changes in the frequency of the fires or their relative strength. photo library MODIS/061/MYD14A1 MYD14A2.061: Aqua Thermal Anomalies & Fire 8-Day Global 1km The MYD14A2 V6.1 dataset provides 8-day fire mask composites at 1km resolution.
- The MODIS NDVI and EVI products are computed from atmospherically corrected bi-directional surface reflectances that have been masked for water, clouds, heavy aerosols, and cloud shadows. photo library MODIS/061/MOD13Q1 MOD14A1.061: Terra Thermal Anomalies & Fire Daily Global 1km The MOD14A1 V6.1 dataset provides daily fire mask composites at 1km resolution derived from the MODIS 4- and 11-micrometer radiances.
- This information is used for monitoring the spatial and temporal distribution of fires in different ecosystems, detecting changes in fire distribution and identifying new fire frontiers, wild fires, and changes in the frequency of the fires or their relative strength. photo library MODIS/061/MOD14A1 MOD14A2.061: Terra Thermal Anomalies & Fire 8-Day Global 1km The MOD14A2 V6.1 dataset provides 8-day fire mask composites at 1km resolution.

### "Datasets tagged fire in Earth Engine \_|\_ Earth Engine Data Catalog \_\

- URL: [https://developers.google.com/earth-engine/datasets/tags/fire](https://developers.google.com/earth-engine/datasets/tags/fire)
- Source ID: `site-docs-root-3`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Below NBR stands for "Normalized Burn Ratio", while dNBR stands … eros fire gtac mtbs table usda MYD14A1.061: Aqua Thermal Anomalies & Fire Daily Global 1km The MYD14A1 V6.1 dataset provides daily fire mask composites at 1km resolution derived from the MODIS 4- and 11-micrometer radiances.
- The fire detection strategy is based on absolute detection of a fire (when the fire strength is sufficient to detect), and on detection relative to … aqua daily fire global modis nasa MYD14A2.061: Aqua Thermal Anomalies & Fire 8-Day Global 1km The MYD14A2 V6.1 dataset provides 8-day fire mask composites at 1km resolution.
- The fire detection strategy is based on absolute detection of a fire (when the fire strength is sufficient to detect), and on detection relative to … daily fire global modis nasa terra MOD14A2.061: Terra Thermal Anomalies & Fire 8-Day Global 1km The MOD14A2 V6.1 dataset provides 8-day fire mask composites at 1km resolution.
- The algorithm … burn change-detection fire geophysical global mcd64a1 MOD14A1.061: Terra Thermal Anomalies & Fire Daily Global 1km The MOD14A1 V6.1 dataset provides daily fire mask composites at 1km resolution derived from the MODIS 4- and 11-micrometer radiances.

