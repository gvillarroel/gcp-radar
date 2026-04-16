---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:20.155Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "WRI/GFW/FORMA/raw_output_ndvi"
feature_slug: "wri-gfw-forma-raw-output-ndvi"
latest_feature_date: "2018-04-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/WRI_GFW_FORMA_raw_output_ndvi"
  - "https://developers.google.com/earth-engine/datasets/catalog"
  - "https://developers.google.com/earth-engine/guides/arrays_transformations"
keywords:
  - "wri"
  - "gfw"
  - "forma"
  - "raw"
  - "output"
  - "ndvi"
---

# WRI/GFW/FORMA/raw_output_ndvi

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

FORMA raw output for NDVI.

## Extended Definition

FORMA raw output for NDVI.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/WRI_GFW_FORMA_raw_output_ndvi](https://developers.google.com/earth-engine/datasets/catalog/WRI_GFW_FORMA_raw_output_ndvi)
- [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- [https://developers.google.com/earth-engine/guides/arrays_transformations](https://developers.google.com/earth-engine/guides/arrays_transformations)

## Supporting Pages

### FORMA Raw Output NDVI | Earth Engine Data Catalog | Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog/WRI_GFW_FORMA_raw_output_ndvi](https://developers.google.com/earth-engine/datasets/catalog/WRI_GFW_FORMA_raw_output_ndvi)
- Source ID: `feature-recovery-direct-http`
- Final score: 292
- Re-rank relevance: N/A

Evidence snippets:
- Filter . date ( '2018-01-01' , '2018-01-02' )); var percentOfClearing = dataset . select ( 'clearing' ); var visParams = { min : 0 , max : 1 , }; Map . setCenter ( 26 , - 8 , 3 ); Map . addLayer ( percentOfClearing , visParams , 'Percent of clearing in the last 365 days' ); 在代码编辑器中打开 FORMA 原始输出 NDVI WRI 的注意事项：WRI 决定停止更新 FORMA 提醒。目标是简化 Global Forest Watch 用户体验并减少冗余。我们发现，Terra-i 和 GLAD 的使用频率更高。此外，研究人员还使用 GLAD 作为标准，发现 Terra-i 在全球范围内优于 FORMA。系统检测到 FORMA 提醒… WRI/GFW/FORMA/raw_output_ndvi, daily,deforestation,forest,forest-biomass,forma,gfw,modis,monitoring,wri 2012-01-01T00:00:00Z/2019-04-23T00:00:00Z -50 -120 40 180 Google Earth Engine https://developers.google.com/earth-engine/datasets 需要向我们提供更多信息？ [[["易于理解","easyToUnderstand","thumb-up"],["解决了我的问题","solvedMyProblem","thumb-up"],["其他","otherUp","thumb-up"]],[["没有我需要的信息","missingTheInformationINeed","thumb-down"],["太复杂/步骤太多","tooComplicatedTooManySteps","thumb-down"],["内容需要更新","outOfDate","thumb-down"],["翻译问题","translationIssue","thumb-down"],["示例/代码问题","samplesCodeIssue","thumb-down"],["其他","otherDown","thumb-down"]],[],[],[]] GitHub Earth Engine on GitHub Medium Follow our blog on Medium GIS Stack Exchange Ask questions using the google-earth-engine tag Twitter Follow @googleearth on Twitter Videos Earth Engine on YouTube 关注 博客 Bluesky Instagram LinkedIn X (Twitter) YouTube 计划 Google Developer Program Google Developer Groups Google Developer Experts Accelerators Google Cloud & NVIDIA 开发者控制台 Google API Console Google Cloud Platform Console Google Play 管理中心 Firebase Console Actions on Google Console Cast SDK Developer Console Chrome Web Store Dashboard Google Home Developer Console Android Chrome Firebase Google Cloud Platform Google AI 所有产品 条款 隐私权政策 Manage cookies English Deutsch Español Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體 日本語 한국어
- FORMA Raw Output NDVI | Earth Engine Data Catalog | Google for Developers 跳至主要内容 Earth Engine Data Catalog / English Deutsch Español Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體 日本語 한국어 登录 首页 类别 所有数据集 所有标签 Landsat MODIS Sentinel 发布商 社区 API 文档 数据集状态 更新日志 Earth Engine Data Catalog 首页 类别 所有数据集 所有标签 Landsat MODIS Sentinel 发布商 社区 API 文档 数据集状态 更新日志 首页 Earth Engine Data Catalog 所有数据集 发送反馈 FORMA Raw Output NDVI 使用集合让一切井井有条 根据您的偏好保存内容并对其进行分类。 数据集可用时间 2012-01-01T00:00:00Z–2019-04-23T00:00:00Z 数据集生产者 世界资源研究所 / 全球森林观察 Earth Engine 代码段 ee.ImageCollection("WRI/GFW/FORMA/raw_output_ndvi") open_in_new 标签 每日 森林砍伐 森林 森林生物质 FORMA gfw MODIS 监测 WRI 说明 WRI 的注意事项 ：WRI 决定停止更新 FORMA 提醒。目标是简化 Global Forest Watch 用户体验并减少冗余。 我们发现， Terra-i 和 GLAD 的使用频率更高。 此外，使用 GLAD 作为标准，发现 Terra-i 在全球范围内优于 FORMA。 FORMA 警报是结合使用两种 MODIS 产品（即 NDVI [归一化差值植被指数] 和 FIRMS [资源管理系统火灾信息]）检测到的。NDVI 更新每 16 天处理一次，而火灾更新每天处理一次。我们针对每个生态群组单独开发模型，以将这两个输入与森林砍伐面积相关联，并使用 Hansen 年度树木覆盖率损失数据来训练模型。触发警报的最低阈值为 25% 的像素被清除，不过阈值会因生态群组而异，以最大限度地减少误报。 以下是一个 脚本示例 ，可用于快速了解 FORMA 数据集。 此 ImageCollection 中的图片包含在新的 MODIS NDVI 数据可用后计算出的原始 FORMA 数据，大约每 16 天更新一次。 该图片包含 4 个波段。“delta”“near_term_delta”和“clearing”频段都给出了不同累积期内的清仓百分比（从 0 到 100）。准确度可衡量这些预测的置信度（0 = 置信度很低，100 = 置信度很高）。 频段 波段 像素大小：250 米（所有波段） 名称 单位 最小值 最大值 像素大小 说明 delta % 0 100 250 米 过去 96 天内的清仓百分比 near_term_delta % 0 100 250 米 过去 32 天的清空百分比 accuracy % 0 100 250 米 预测的置信度 clearing % 0 100 250 米 过去 365 天内的清空百分比 图片属性 图像属性 名称 类型 说明 年 INT 数据集中包含的最新数据的年份 两周一次 INT 一年中每 16 天一次的周期 日期 STRING 此数据集中包含的最后一次 MODIS NDVI 数据的日期，格式为“YYYY-MM-DD” 使用条款 使用条款 FORMA 数据集可免费使用或分发。WRI 要求用户在适当情况下注明出处，并指明 WRI 和 GFW 是数据来源。 通过 Earth Engine 探索 重要提示： Earth Engine 是一个平台，可用于对地理空间数据集进行 PB 级科学分析和可视化，既可用于公益用途，也可供企业和政府用户使用。Earth Engine 可免费用于研究、教育和公益用途。如需开始使用，请 注册以获取 Earth Engine 访问权限 。 代码编辑器 (JavaScript) var dataset = ee .
- ImageCollection ( 'WRI/GFW/FORMA/raw_output_ndvi' ) . filter ( ee .

### Earth Engine Data Catalog \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- Source ID: `site-docs-root`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- Moreover, using GLAD as a standard, found that Terra-i outperformed FORMA … daily deforestation fire forest forma gfw FORMA Raw Output NDVI NOTE from WRI: WRI decided to stop updating FORMA alerts.
- For more information, please see the Spain orthophotos documentation orthophotos rgb Species Distribution, Australia Mammals These species distribution model outputs, developed by Google in collaboration with QCIF and EcoCommons, represent estimates of species’ relative occurrence likelihoods (i.e., higher values indicate a higher likelihood that the species would be detected at a location, for a given survey methodology and given survey … biodiversity conservation ecosystems nature-trace pre-review publisher-dataset TCB: Malaria Atlas Project Gap-Filled Tasseled Cap Brightness (8-Daily 1km) This gap-filled Tasseled Cap Brightness (TCB) dataset was created by applying the tasseled-cap equations defined in Lobser and Cohen (2007) to MODIS BRDF-corrected imagery (MCD43B4).
- The VNP13 data products are designed … 16-day evi nasa ndvi noaa npp VNP14A1.002: Thermal Anomalies/Fire Daily L3 Global 1km SIN Grid The daily Suomi National Polar-Orbiting Partnership NASA Visible Infrared Imaging Radiometer Suite (VIIRS) Thermal Anomalies/Fire (VNP14A1) Version 1 data product provides daily information about active fires and other thermal anomalies.
- They encompass diverse areas such as: land cover, elevation models, vegetation indices (NDVI, EVI), soil properties, water resources (evapotranspiration, floods), climate data (temperature, precipitation), atmospheric properties, fire detection, population density, administrative boundaries, and agricultural information.

### Array Transformations \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/arrays_transformations](https://developers.google.com/earth-engine/guides/arrays_transformations)
- Source ID: `site-docs-reference-3`
- Final score: 81
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Image ( 1 )) // 0. constant . addBands ( year . rename ( 't' )) // 1. linear trend . addBands ( season . sin (). rename ( 'sin' )) // 2. seasonal . addBands ( season . cos (). rename ( 'cos' )) // 3. seasonal . addBands ( image . normalizedDifference (). rename ( 'NDVI' )) // 4. response . toFloat (); }; // Define the axes of variation in the collection array. var imageAxis = 0 ; var bandAxis = 1 ; // Convert the collection to an array. var array = collection . map ( makeVariables ). toArray (); // Check the length of the image axis (number of images). var arrayLength = array . arrayLength ( imageAxis ); // Update the mask to ensure that the number of images is greater than or // equal to the number of predictors (the linear model is solvable). array = array . updateMask ( arrayLength . gt ( 4 )); // Get slices of the array according to positions along the band axis. var predictors = array . arraySlice ( bandAxis , 0 , 4 ); var response = array . arraySlice ( bandAxis , 4 ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) import math Scales and masks Landsat 8 surface reflectance images. def prep sr l8 ( image ): Develop masks for unwanted pixels (fill, cloud, cloud shadow). qa mask = image . select ( 'QA PIXEL' ) . bitwiseAnd ( int ( '11111' , 2 )) . eq ( 0 ) saturation mask = image . select ( 'QA RADSAT' ) . eq ( 0 ) Apply the scaling factors to the appropriate bands. optical bands = image . select ( 'SR B.' ) . multiply ( 0.0000275 ) . add ( - 0.2 ) thermal bands = image . select ( 'ST B. ' ) . multiply ( 0.00341802 ) . add ( 149.0 ) Replace the original bands with the scaled ones and apply the masks. return ( image . addBands ( optical bands , None , True ) . addBands ( thermal bands , None , True ) . updateMask ( qa mask ) . updateMask ( saturation mask ) ) Load a Landsat 8 surface reflectance image collection. collection = ( ee .
- The solve() function determines how to best solve the system from characteristics of the inputs, using the pseudo-inverse for overdetermined systems, the inverse for square matrices and special techniques for nearly singular matrices: Code Editor (JavaScript) // Compute coefficients the easiest way. var coefficients3 = predictors . matrixSolve ( response ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Compute coefficients the easiest way. coefficients 3 = predictors . matrixSolve ( response ) To get a multi-band image, project the array image into a lower dimensional space, then flatten it: Code Editor (JavaScript) // Turn the results into a multi-band image. var coefficientsImage = coefficients3 // Get rid of the extra dimensions. . arrayProject ([ 0 ]) . arrayFlatten ([ [ 'constant' , 'trend' , 'sin' , 'cos' ] ]); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Turn the results into a multi-band image. coefficients image = ( coefficients 3 Get rid of the extra dimensions. . arrayProject ([ 0 ]) . arrayFlatten ([[ 'constant' , 'trend' , 'sin' , 'cos' ]]) ) Examine the outputs of the three methods and observe that the resultant matrix of coefficients is the same regardless of the solver.
- Image ( 1 )) # 0. constant . addBands ( year . rename ( 't' )) # 1. linear trend . addBands ( season . sin () . rename ( 'sin' )) # 2. seasonal . addBands ( season . cos () . rename ( 'cos' )) # 3. seasonal . addBands ( image . normalizedDifference () . rename ( 'NDVI' )) # 4. response . toFloat () ) Define the axes of variation in the collection array. image axis = 0 band axis = 1 Convert the collection to an array. array = collection . map ( make variables ) . toArray () Check the length of the image axis (number of images). array length = array . arrayLength ( image axis ) Update the mask to ensure that the number of images is greater than or equal to the number of predictors (the linear model is solvable). array = array . updateMask ( array length . gt ( 4 )) Get slices of the array according to positions along the band axis. predictors = array . arraySlice ( band axis , 0 , 4 ) response = array . arraySlice ( band axis , 4 ) Note that arraySlice() returns all the images in the time series for the range of indices specified along the bandAxis (the 1-axis).
- At this point, matrix algebra can be used to solve for the OLS coefficients: Code Editor (JavaScript) // Compute coefficients the hard way. var coefficients1 = predictors . arrayTranspose (). matrixMultiply ( predictors ) . matrixInverse (). matrixMultiply ( predictors . arrayTranspose ()) . matrixMultiply ( response ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Compute coefficients the hard way. coefficients 1 = ( predictors . arrayTranspose () . matrixMultiply ( predictors ) . matrixInverse () . matrixMultiply ( predictors . arrayTranspose ()) . matrixMultiply ( response ) ) Although this method works, it is inefficient and makes for difficult to read code.

