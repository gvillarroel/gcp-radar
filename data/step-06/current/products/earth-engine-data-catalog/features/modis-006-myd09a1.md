---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:20.199Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "MODIS/006/MYD09A1"
feature_slug: "modis-006-myd09a1"
latest_feature_date: "2017-06-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MYD09A1"
  - "https://developers.google.com/earth-engine/datasets/catalog/modis"
  - "https://developers.google.com/earth-engine/datasets/tags/satellite-imagery"
keywords:
  - "modis"
  - "006"
  - "myd09a1"
  - "aqua"
  - "surface"
  - "reflectance"
  - "composite"
---

# MODIS/006/MYD09A1

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

A MODIS Aqua surface reflectance composite product.

## Extended Definition

A MODIS Aqua surface reflectance composite product.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MYD09A1](https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MYD09A1)
- [https://developers.google.com/earth-engine/datasets/catalog/modis](https://developers.google.com/earth-engine/datasets/catalog/modis)
- [https://developers.google.com/earth-engine/datasets/tags/satellite-imagery](https://developers.google.com/earth-engine/datasets/tags/satellite-imagery)

## Supporting Pages

### MYD09A1.006 Aqua Surface Reflectance 8-Day Global 500m [deprecated] | Earth Engine Data Catalog | Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MYD09A1](https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MYD09A1)
- Source ID: `feature-recovery-direct-http`
- Final score: 313
- Re-rank relevance: N/A

Evidence snippets:
- MYD09A1.006 Aqua Surface Reflectance 8-Day Global 500m [deprecated] | Earth Engine Data Catalog | Google for Developers 跳至主要内容 Earth Engine Data Catalog / English Deutsch Español Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體 日本語 한국어 登录 首页 类别 所有数据集 所有标签 Landsat MODIS Sentinel 发布商 社区 API 文档 数据集状态 更新日志 Earth Engine Data Catalog 首页 类别 所有数据集 所有标签 Landsat MODIS Sentinel 发布商 社区 API 文档 数据集状态 更新日志 首页 Earth Engine Data Catalog 类别 发送反馈 MYD09A1.006 Aqua Surface Reflectance 8-Day Global 500m [deprecated] 使用集合让一切井井有条 根据您的偏好保存内容并对其进行分类。 注意 ：本数据集已被 MODIS/061/MYD09A1 取代。 数据集可用时间 2002-07-04T00:00:00Z–2023-02-18T00:00:00Z 数据集生产者 美国地质调查局地球资源观测与科学中心下属的美国国家航空航天局陆地过程分布式主动存档中心 Earth Engine 代码段 ee.ImageCollection("MODIS/006/MYD09A1") open_in_new 频率 8 天 标签 8 天 湖水绿 全局 modis myd09a1 nasa satellite-imagery sr surface-reflectance usgs 说明 MYD09A1 V6 产品提供 Aqua MODIS 波段 1-7 的地表光谱反射率估计值，分辨率为 500 米，并针对气体、气溶胶和瑞利散射等大气条件进行了校正。除了七个反射率波段外，还有一个质量层和四个观测波段。对于每个像素，系统会根据高观测覆盖率、低视角、无云或云影以及低气溶胶负荷等条件，从 8 天合成影像中的所有采集数据中选择一个值。 文档： 用户指南 算法理论基础文档 (ATBD) 常规文档 频段 波段 像素大小：500 米（所有波段） 名称 单位 最小值 最大值 缩放系数 像元大小 波长 说明 sur_refl_b01 -100 16000 0.0001 500 米 620-670nm 波段 1 的地表反射率 sur_refl_b02 -100 16000 0.0001 500 米 841-876nm 波段 2 的地表反射率 sur_refl_b03 -100 16000 0.0001 500 米 459-479nm 波段 3 的地表反射率 sur_refl_b04 -100 16000 0.0001 500 米 545-565nm 波段 4 的地表反射率 sur_refl_b05 -100 16000 0.0001 500 米 1230-1250nm 波段 5 的地表反射率 sur_refl_b06 -100 16000 0.0001 500 米 1628-1652nm 波段 6 的地表反射率 sur_refl_b07 -100 16000 0.0001 500 米 2105-2155nm 波段 7 的地表反射率 QA 500 米 无 地表反射率 500 米波段质量控制标志 质量保证位掩码 位 0-1：MODLAND 质量检查位 0：全波段校正产品达到理想质量 1：部分或全部波段校正产品质量未达理想标准 2：因云效应未能生成校正产品 - 所有波段 3：因其他原因未生成校正后产品 - 部分或全部波段可能为填充值 (11) [注意，值 (11) 会覆盖值 (01)] 位 2-5：波段 1 数据质量（四比特范围） 0：最高质量 7：探测器有噪声 8：探测器失效，在 L1B 级数据中采用插值 9：太阳天顶角 >= 86 度 10：太阳天顶角介于 85 度（含）到 86 度（不含）之间 11：缺少输入 12：至少一个大气参数使用内部常量替代气候数据 13：校正超出范围，像素限制为极值 14：L1B 数据有误 15：因深海或云层而未处理 位 6-9：波段 2 数据质量（四比特范围） 0：最高质量 7：探测器有噪声 8：探测器失效，在 L1B 级数据中采用插值 9：太阳天顶角 >= 86 度 10：太阳天顶角介于 85 度（含）到 86 度（不含）之间 11：缺少输入 12：至少一个大气参数使用内部常量替代气候数据 13：校正超出范围，像素限制为极值 14：L1B 数据有误 15：因深海或云层而未处理 位 10-13：波段 3 数据质量（四比特范围） 0：最高质量 7：探测器有噪声 8：探测器失效，在 L1B 级数据中采用插值 9：太阳天顶角 >= 86 度 10：太阳天顶角介于 85 度（含）到 86 度（不含）之间 11：缺少输入 12：至少一个大气参数使用内部常量替代气候数据 13：校正超出范围，像素限制为极值 14：L1B 数据有误 15：因深海或云层而未处理 位 14-17：波段 4 数据质量（四比特范围） 0：最高质量 7：探测器有噪声 8：探测器失效，在 L1B 级数据中采用插值 9：太阳天顶角 >= 86 度 10：太阳天顶角介于 85 度（含）到 86 度（不含）之间 11：缺少输入 12：至少一个大气参数使用内部常数替代气候数据 13：校正超出范围，像素限制为极值 14：L1B 数据有误 15：因深海或云层而未处理 位 18-21：波段 5 数据质量（四比特范围） 0：最高质量 7：探测器有噪声 8：探测器失效，在 L1B 级数据中采用插值 9：太阳天顶角 >= 86 度 10：太阳天顶角介于 85 度（含）到 86 度（不含）之间 11：缺少输入 12：至少一个大气参数使用内部常数替代气候数据 13：校正超出范围，像素限制为极值 14：L1B 数据有误 15：因深海或云层而未处理 位 22-25：波段 6 数据质量（四比特范围） 0：最高质量 7：探测器有噪声 8：探测器失效，在 L1B 级数据中采用插值 9：太阳天顶角 >= 86 度 10：太阳天顶角介于 85 度（含）到 86 度（不含）之间 11：缺少输入 12：至少一个大气参数使用内部常数替代气候数据 13：校正超出范围，像素限制为极值 14：L1B 数据有误 15：因深海或云层而未处理 位 26-29：波段 7 数据质量（四比特范围） 0：最高质量 7：探测器有噪声 8：探测器失效，在 L1B 级数据中采用插值 9：太阳天顶角 >= 86 度 10：太阳天顶角介于 85 度（含）到 86 度（不含）之间 11：缺少输入 12：至少一个大气参数使用内部常数替代气候数据 13：校正超出范围，像素限制为极值 14：L1B 数据有误 15：因深海或云层而未处理 位 30：是否已执行大气校正 0：否 1：是 位 31：是否已执行邻近度校正 0：否 1：是 SolarZenith 度 0 18000 0.01 500 米 无 MODIS 太阳天顶角 ViewZenith 度 0 18000 0.01 500 米 无 MODIS 观测天顶角 RelativeAzimuth 度 -18000 18000 0.01 500 米 无 MODIS 相对方位角 StateQA 500 米 无 地表反射率 500 米状态标志 StateQA 的位掩码 位 0-1：云状态 0：晴朗 1：多云 2：混合状态 3：未设置，默认为“晴朗” 位 2：是否有云阴影 0：否 1：是 位 3-5：陆地/水域标志 0：浅海 1：陆地 2：海洋海岸线和湖泊海岸线 3：浅水内陆水域 4：瞬时水域 5：深层内陆水 6：大陆性/温带海洋 7：深海 位 6-7：气溶胶数量 0：气候学 1：低 2：中 3：高 位 8-9：检测到卷云 0：无 1：小 2：中 3：高 位 10：内部云算法标志 0：没有云 1：有云 位 11：内部火灾算法标志 0：无火灾 1：有火灾 位 12：MOD35 雪/冰标志 0：否 1：是 位 13：像素是否与云相邻 0：否 1：是 位 14：是否已执行 BRDF 校正数据 0：否 1：是 位 15：内部雪掩码 0：无雪 1：有雪 DayOfYear 1 366 500 米 无 相应像素的儒略历年内日 使用条款 使用条款 通过 LP DAAC 获取的 MODIS 数据和产品在后续使用、销售或再分发方面没有任何限制。 引用 引用： 如需了解如何引用 LP DAAC 数据集，请访问 LP DAAC 的“引用我们的数据”页面 。 DOI https://doi.org/10.5067/MODIS/MYD09A1.006 通过 Earth Engine 探索 重要提示： Earth Engine 是一个平台，可用于对地理空间数据集进行 PB 级科学分析和可视化，既可用于公益用途，也可供企业和政府用户使用。Earth Engine 可免费用于研究、教育和公益用途。如需开始使用，请 注册以获取 Earth Engine 访问权限 。 代码编辑器 (JavaScript) var dataset = ee .
- Filter . date ( '2018-01-01' , '2018-05-01' )); var trueColor = dataset . select ([ 'sur_refl_b01' , 'sur_refl_b04' , 'sur_refl_b03' ]); var trueColorVis = { min : - 100.0 , max : 3000.0 , }; Map . setCenter ( 6.746 , 46.529 , 2 ); Map . addLayer ( trueColor , trueColorVis , 'True Color' ); 在代码编辑器中打开 MYD09A1.006 Aqua 地表反射率 8 天全球 500 米 [已弃用] MYD09A1 V6 产品提供 Aqua MODIS 波段 1-7 的地表光谱反射率估计值，分辨率为 500 米，并针对气体、气溶胶和瑞利散射等大气条件进行了校正。除了七个反射率波段外，还有一个质量层和四个观测波段。对于每个像素，… MODIS/006/MYD09A1, 8-day,aqua,global,modis,nasa,satellite-imagery,sr,surface-reflectance,usgs 2002-07-04T00:00:00Z/2023-02-18T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets https://doi.org/10.5067/MODIS/MYD09A1.006 https://doi.org/10.5067/MODIS/MYD09A1.006 需要向我们提供更多信息？ [[["易于理解","easyToUnderstand","thumb-up"],["解决了我的问题","solvedMyProblem","thumb-up"],["其他","otherUp","thumb-up"]],[["没有我需要的信息","missingTheInformationINeed","thumb-down"],["太复杂/步骤太多","tooComplicatedTooManySteps","thumb-down"],["内容需要更新","outOfDate","thumb-down"],["翻译问题","translationIssue","thumb-down"],["示例/代码问题","samplesCodeIssue","thumb-down"],["其他","otherDown","thumb-down"]],[],[],[]] GitHub Earth Engine on GitHub Medium Follow our blog on Medium GIS Stack Exchange Ask questions using the google-earth-engine tag Twitter Follow @googleearth on Twitter Videos Earth Engine on YouTube 关注 博客 Bluesky Instagram LinkedIn X (Twitter) YouTube 计划 Google Developer Program Google Developer Groups Google Developer Experts Accelerators Google Cloud & NVIDIA 开发者控制台 Google API Console Google Cloud Platform Console Google Play 管理中心 Firebase Console Actions on Google Console Cast SDK Developer Console Chrome Web Store Dashboard Google Home Developer Console Android Chrome Firebase Google Cloud Platform Google AI 所有产品 条款 隐私权政策 Manage cookies English Deutsch Español Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體 日本語 한국어
- ImageCollection ( 'MODIS/006/MYD09A1' ) . filter ( ee .

### "MODIS Collections in Earth Engine \_|\_ Earth Engine Data Catalog \_|\_\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/modis](https://developers.google.com/earth-engine/datasets/catalog/modis)
- Source ID: `site-docs-root`
- Final score: 157
- Re-rank relevance: N/A

Evidence snippets:
- For each pixel, a value is selected from all the acquisitions within the 8-day composite on the basis of high observation coverage, low view angle, the absence of clouds or cloud shadow, and aerosol loading. photo library MODIS/061/MYD09A1 MYD09GA.061 Aqua Surface Reflectance Daily Global 1km and 500m The MODIS Surface Reflectance products provide an estimate of the surface spectral reflectance as it would be measured at ground level in the absence of atmospheric scattering or absorption.
- The MODIS NDVI and EVI products are computed from atmospherically corrected bi-directional surface reflectances that have been masked for water, clouds, heavy aerosols, and cloud shadows. photo library MODIS/061/MYD13Q1 MYD14A1.061: Aqua Thermal Anomalies & Fire Daily Global 1km The MYD14A1 V6.1 dataset provides daily fire mask composites at 1km resolution derived from the MODIS 4- and 11-micrometer radiances.
- Below is a subset of the bands, for a complete list see the MOD08 Band List . photo library MODIS/061/MYD08 M3 MYD09A1.061 Aqua Surface Reflectance 8-Day Global 500m The MYD09A1 V6.1 product provides an estimate of the surface spectral reflectance of Aqua MODIS bands 1-7 at 500m resolution and corrected for atmospheric conditions such as gasses, aerosols, and Rayleigh scattering.
- This product is generated from the MODIS/006/MYD09GA surface reflectance composites. photo library MODIS/MYD09GA 006 EVI MODIS Aqua Daily NDSI The Normalized Difference Snow Index is used to identify snow, based on its characteristically higher reflectance in the visible portion of the spectrum compared to the mid-IR.

### "Datasets tagged satellite-imagery in Earth Engine \_|\_ Earth Engine Data\

- URL: [https://developers.google.com/earth-engine/datasets/tags/satellite-imagery](https://developers.google.com/earth-engine/datasets/tags/satellite-imagery)
- Source ID: `site-docs-root-3`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- The product is referred to as ocean reflectance, because bands 8-16 are used primarily to produce ocean products, but this is not an ocean product as the tiles … daily global modis nasa ocean reflectance MYD09A1.061 Aqua Surface Reflectance 8-Day Global 500m The MYD09A1 V6.1 product provides an estimate of the surface spectral reflectance of Aqua MODIS bands 1-7 at 500m resolution and corrected for atmospheric conditions such as gasses, aerosols, and Rayleigh scattering.
- Along with the seven reflectance bands is a quality layer and four observation … 8-day aqua global modis nasa satellite-imagery MYD09CMG.061 Aqua Surface Reflectance Daily L3 Global 0.05 Deg CMG The MYD09CMG Version 6.1 product provides an estimate of the surface spectral reflectance of Aqua Moderate Resolution Imaging Spectroradiometer (MODIS) Bands 1 through 7, resampled to 5600 meter pixel resolution and corrected for atmospheric conditions such as gasses, aerosols, and Rayleigh scattering.
- The mosaic consists of pan-sharpened normalized surface reflectance scenes (Landsat ETM+ bands 1, 2, 3, and … antarctica ice landsat-derived lima mosaic satellite-imagery MCD19A1.061: Land Surface BRF Daily L2G Global 500m and 1km The MCD19A1 Version 6.1 data product is a Moderate Resolution Imaging Spectroradiometer (MODIS) Terra and Aqua combined Land Surface Bidirectional Reflectance Factor (BRF) gridded Level 2 product produced daily at 500 meter and 1 kilometer resolution.
- The product is referred to as ocean reflectance, because bands 8-16 are used primarily to produce ocean products, but this is not an ocean product as the tiles … aqua daily global modis nasa ocean NEON Surface Bidirectional Reflectance The NEON AOP Surface Bidirectional Reflectance is a hyperspectral VSWIR (visible to shortwave infrared) data product, containing 426 bands spanning wavelengths from 380 nm to 2510 nm.

