---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:20.115Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "UMD/hansen/global_forest_change_2017_v1_5"
feature_slug: "umd-hansen-global-forest-change-2017-v1-5"
latest_feature_date: "2018-06-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/UMD_hansen_global_forest_change_2017_v1_5"
  - "https://developers.google.com/earth-engine/datasets/tags/forest-biomass"
  - "https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_Landcover_100m_Proba-V-C3_Global"
keywords:
  - "umd"
  - "hansen"
  - "global"
  - "forest"
  - "change"
  - "2017"
  - "v1"
  - "dataset"
---

# UMD/hansen/global_forest_change_2017_v1_5

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

A global forest change dataset for 2017.

## Extended Definition

A global forest change dataset for 2017.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/UMD_hansen_global_forest_change_2017_v1_5](https://developers.google.com/earth-engine/datasets/catalog/UMD_hansen_global_forest_change_2017_v1_5)
- [https://developers.google.com/earth-engine/datasets/tags/forest-biomass](https://developers.google.com/earth-engine/datasets/tags/forest-biomass)
- [https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_Landcover_100m_Proba-V-C3_Global](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_Landcover_100m_Proba-V-C3_Global)

## Supporting Pages

### Hansen Global Forest Change v1.5 (2000-2017) [deprecated] | Earth Engine Data Catalog | Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog/UMD_hansen_global_forest_change_2017_v1_5](https://developers.google.com/earth-engine/datasets/catalog/UMD_hansen_global_forest_change_2017_v1_5)
- Source ID: `feature-recovery-direct-http`
- Final score: 414
- Re-rank relevance: N/A

Evidence snippets:
- Hansen Global Forest Change v1.5 (2000-2017) [deprecated] | Earth Engine Data Catalog | Google for Developers メイン コンテンツにスキップ Earth Engine Data Catalog / English Deutsch Español Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體 日本語 한국어 ログイン ホーム カテゴリ All Datasets すべてのタグ Landsat MODIS Sentinel パブリッシャー Community API のドキュメント データセットのステータス 変更履歴 Earth Engine Data Catalog ホーム カテゴリ All Datasets すべてのタグ Landsat MODIS Sentinel パブリッシャー Community API のドキュメント データセットのステータス 変更履歴 ホーム Earth Engine Data Catalog カテゴリ フィードバックを送信 Hansen Global Forest Change v1.5 (2000-2017) [deprecated] コレクションでコンテンツを整理 必要に応じて、コンテンツの保存と分類を行います。 注意: このデータセットは UMD/hansen/global_forest_change_2024_v1_12 に置き換えられました。 利用可能なデータセットの期間 2000-01-01T00:00:00Z–2018-01-01T00:00:00Z データセット プロデューサー Hansen/UMD/Google/USGS/NASA Earth Engine スニペット ee.Image("UMD/hansen/global_forest_change_2017_v1_5") open_in_new タグ 森 forest-biomass 地球物理学 Hansen landsat-derived umd 説明 世界の森林の範囲と変化を特徴づける Landsat 画像の時系列分析の結果。 「最初」と「最後」のバンドは、Landsat スペクトル バンド 3、4、5、7 の最初の利用可能な年と最後の利用可能な年の参照マルチスペクトル画像です。参照複合画像は、これらの各バンドの品質評価済みの生育期観測のセットからの中央値の観測を表します。 このバージョン 1.5 の更新については、 ユーザーノート と、関連するジャーナル記事（Hansen、Potapov、Moore、Hancher 他、「21 世紀における森林被覆の変化を示す高解像度の世界地図」）をご覧ください。Science 342.6160（2013）: 850-853。 このデータの更新バージョンが利用可能です。最新バージョンであるバージョン 1.9（2021 年までのデータで作成）は、UMD/hansen/global_forest_change_2021_v1_9 として利用できます。 バンド バンド ピクセルサイズ: 30.92 メートル（すべてのバンド） 名前 単位 最小 最大 ピクセルサイズ 波長 説明 treecover2000 % 0 100 30.92 メートル なし 2000 年の樹木エリアの割合。高さ 5 m を超えるすべての植生の樹冠閉鎖として定義されます。 loss 30.92 メートル なし 調査期間中の森林の損失。森林から非森林の状態への変化である、スタンド置換撹乱として定義されます。 損失のビットマスク ビット 0: 調査期間中の森林損失。 0: 損失なし 1: 損失 gain 30.92 メートル なし 2000 ～ 2012 年の森林増加量。損失の逆数として定義されます（森林以外の土地から森林への変化が調査期間内に完全に発生した場合）。なお、この問題は後続のバージョンでは更新されていません。 ゲインのビットマスク ビット 0: 2000 ～ 2012 年の森林増加量。 0: ゲインなし 1: ゲイン first_b30 30.92 メートル 0.63 ～ 0.69 µm Landsat 7 バンド 3（赤）の雲のない画像合成。利用可能な最初の年（通常は 2000 年）の参照マルチスペクトル画像。 first_b40 30.92 メートル 0.77 ～ 0.90 µm Landsat 7 バンド 4（NIR）の雲のない画像合成。利用可能な最初の年（通常は 2000 年）の参照マルチスペクトル画像。 first_b50 30.92 メートル 1.55 ～ 1.75 µm Landsat 7 バンド 5（SWIR）の雲のない画像合成。利用可能な最初の年（通常は 2000 年）の参照マルチスペクトル画像。 first_b70 30.92 メートル 2.09 ～ 2.35 µm Landsat 7 バンド 7（SWIR）の雲のない画像合成。利用可能な最初の年（通常は 2000 年）の参照マルチスペクトル画像。 last_b30 30.92 メートル 0.63 ～ 0.69 µm Landsat 7 バンド 3（赤）の雲のない画像合成。利用可能な最新年のマルチスペクトル画像（通常は調査期間の最終年）を参照します。 last_b40 30.92 メートル 0.77 ～ 0.90 µm Landsat 7 バンド 4（NIR）の雲のない画像合成。利用可能な最新年のマルチスペクトル画像（通常は調査期間の最終年）を参照します。 last_b50 30.92 メートル 1.55 ～ 1.75 µm Landsat 7 バンド 5（SWIR）の雲のない画像合成。利用可能な最新年のマルチスペクトル画像（通常は調査期間の最終年）を参照します。 last_b70 30.92 メートル 2.09 ～ 2.35 µm Landsat 7 バンド 7（SWIR）の雲のない画像合成。利用可能な最新年のマルチスペクトル画像（通常は調査期間の最終年）を参照します。 datamask 30.92 メートル なし データがない領域、地図上の陸地、恒久的な水域を表す 3 つの値。 データマスクのビットマスク ビット 0 ～ 1: データなしの領域、マッピングされた地表面、恒久的な水域を表す 3 つの値。 0: データなし 1: マッピングされた地表 2: 恒久的な水域 lossyear 0 17 30.92 メートル なし 森林被覆の総損失イベントの年。調査期間中の森林損失。森林の更新撹乱、または森林から非森林状態への変化として定義されます。0（損失なし）または 1 ～ 17 の範囲の値としてエンコードされます。この値は、主に 2001 ～ 2017 年に検出された損失をそれぞれ表します。 利用規約 利用規約 CC-BY-4.0 引用 引用: Hansen, M.
- Image ( 'UMD/hansen/global_forest_change_2017_v1_5' ); var treeCanopyCover = dataset . select ( 'treecover2000' ); var treeCanopyCoverVis = { min : 0.0 , max : 100.0 , palette : [ '3d3d3d' , '080a02' , '080a02' , '080a02' , '106e12' , '37a930' , '03ff17' ], }; Map . setCenter ( - 60.5 , - 20.0 , 2 ); Map . addLayer ( treeCanopyCover , treeCanopyCoverVis , 'Tree Canopy Cover' ); コードエディタで開く Hansen Global Forest Change v1.5（2000 ～ 2017 年）[非推奨] Landsat 画像の時系列分析の結果。世界の森林の範囲と変化を特徴づけています。「first」バンドと「last」バンドは、Landsat スペクトル バンド 3、4、5、7 の最初の利用可能な年と最後の利用可能な年の参照マルチスペクトル画像です。参照複合画像は、品質評価済みの … の一連の観測値の中央値を表します。 UMD/hansen/global_forest_change_2017_v1_5, forest,forest-biomass,geophysical,landsat-derived,umd 2000-01-01T00:00:00Z/2018-01-01T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets ご意見をお聞かせください [[["わかりやすい","easyToUnderstand","thumb-up"],["問題の解決に役立った","solvedMyProblem","thumb-up"],["その他","otherUp","thumb-up"]],[["必要な情報がない","missingTheInformationINeed","thumb-down"],["複雑すぎる / 手順が多すぎる","tooComplicatedTooManySteps","thumb-down"],["最新ではない","outOfDate","thumb-down"],["翻訳に関する問題","translationIssue","thumb-down"],["サンプル / コードに問題がある","samplesCodeIssue","thumb-down"],["その他","otherDown","thumb-down"]],[],[],[]] GitHub Earth Engine on GitHub Medium Follow our blog on Medium GIS Stack Exchange Ask questions using the google-earth-engine tag Twitter Follow @googleearth on Twitter Videos Earth Engine on YouTube つながる ブログ Bluesky Instagram LinkedIn X（Twitter） YouTube プログラム Google Developer Program Google Developer Groups Google Developer Experts Accelerators Google Cloud & NVIDIA デベロッパー コンソール Google API Console Google Cloud Platform Console Google Play Console Firebase Console Actions on Google Console Cast SDK Developer Console Chrome Web Store Dashboard Google Home Developer Console Android Chrome Firebase Google Cloud Platform Google AI すべてのプロダクト 利用規約 プライバシー Manage cookies English Deutsch Español Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體 日本語 한국어
- G. タウンゼント。2013 年。「21 世紀における森林被覆の変化を示す高解像度の世界地図。」 Science 342（11 月 15 日）: 850-53。データはオンラインで入手できます: https://glad.earthengine.app/view/global-forest-change 。 Earth Engine で探索する 重要: Earth Engine は、公共の利益のため、および、ビジネス ユーザーや政府機関のユーザーのための、地理空間データセットのペタバイト規模の科学的分析と可視化を目的としたプラットフォームです。Earth Engine は、研究、教育、非営利目的の場合は無料でご使用いただけます。まず、 Earth Engine への登録 を行ってください。 コードエディタ（JavaScript） var dataset = ee .

### "Datasets tagged forest-biomass in Earth Engine \_|\_ Earth Engine Data Catalog\

- URL: [https://developers.google.com/earth-engine/datasets/tags/forest-biomass](https://developers.google.com/earth-engine/datasets/tags/forest-biomass)
- Source ID: `site-docs-root-3`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- This dataset provides a comprehensive representation of near-global vegetation structure that is inclusive of the … biomass canopy forest forest-biomass gedi larse Hansen Global Forest Change v1.12 (2000-2024) Results from time-series analysis of Landsat images in characterizing global forest extent and change.
- The data support generating Tier 1 estimates for Aboveground dry woody Biomass Density (AGBD) in natural forests in the 2019 Refinement to the 2006 IPCC Guidelines for National Greenhouse … aboveground biomass carbon classification forest forest-biomass Global 3-class PALSAR-2/PALSAR Forest/Non-Forest Map A newer version of this dataset with 4 classes for 2017-2020 can be found in JAXA/ALOS/PALSAR/YEARLY/FNF4 The global forest/non-forest map (FNF) is generated by classifying the SAR image (backscattering coefficient) in the global 25m resolution PALSAR-2/PALSAR SAR mosaic so that strong and low backscatter pixels … alos alos2 classification eroc forest forest-biomass Global 4-class PALSAR-2/PALSAR Forest/Non-Forest Map The global forest/non-forest map (FNF) is generated by classifying the SAR image (backscattering coefficient) in the global 25m resolution PALSAR-2/PALSAR SAR mosaic so that strong and low backscatter pixels are assigned as "forest" and "non-forest", respectively.
- This dataset provides a comprehensive representation of near-global vegetation structure that is inclusive of the … biomass canopy forest forest-biomass gedi larse Gridded GEDI Vegetation Structure Metrics and Biomass Density with COUNTS metrics, 1KM pixel size This dataset consists of near-global, analysis-ready, multi-resolution gridded vegetation structure metrics derived from NASA Global Ecosystem Dynamics Investigation (GEDI) Level 2 and 4A products associated with 25-m diameter lidar footprints.
- This dataset provides a comprehensive representation of near-global vegetation structure that is inclusive of the … biomass canopy forest forest-biomass gedi larse Gridded GEDI Vegetation Structure Metrics and Biomass Density with COUNTS metrics, 6KM pixel size This dataset consists of near-global, analysis-ready, multi-resolution gridded vegetation structure metrics derived from NASA Global Ecosystem Dynamics Investigation (GEDI) Level 2 and 4A products associated with 25-m diameter lidar footprints.

### "Copernicus Global Land Cover Layers: CGLS-LC100 Collection 3 \_|\_ Earth\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_Landcover_100m_Proba-V-C3_Global](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_Landcover_100m_Proba-V-C3_Global)
- Source ID: `site-docs-root-2`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- Can be either fresh or salt-water bodies. forest type Class Table Value Color Description 0 #282828 Unknown 1 #666000 Evergreen needle leaf 2 #009900 Evergreen broad leaf 3 #70663e Deciduous needle leaf 4 #a0dc00 Deciduous broad leaf 5 #929900 Mix of forest types Image Properties Image Properties Name Type Description discrete classification class names STRING LIST Land cover class names discrete classification class palette STRING LIST Land cover class palette discrete classification class values INT LIST Value of the land cover classification. forest type class names STRING LIST forest cover class names forest type class palette STRING LIST forest cover class palette forest type class values INT LIST forest cover class values Terms of Use Terms of Use As official product of the global component of the Copernicus Land Service, access to this land cover dataset is fully free and open to all users.
- See also: Algorithm Theoretical Basis Document Product User Manual Validation Report Bands Bands Pixel size: 100 meters (all bands) Name Units Min Max Pixel Size Description discrete classification 0 200 100 meters Land cover classification discrete classification-proba % 0 100 100 meters Quality indicator (classification probability) of the discrete classification forest type 0 5 100 meters Forest type for all pixels with tree percentage vegetation cover bigger than 1 % bare-coverfraction % 0 100 100 meters Percent vegetation cover for bare-sparse-vegetation land cover class crops-coverfraction % 0 100 100 meters Percent vegetation cover for cropland land cover class grass-coverfraction % 0 100 100 meters Percent vegetation cover for herbaceous vegetation land cover class moss-coverfraction % 0 100 100 meters Percent vegetation cover for moss and lichen land cover class shrub-coverfraction % 0 100 100 meters Percent vegetation cover for shrubland land cover class tree-coverfraction % 0 100 100 meters Percent vegetation cover for forest land cover class snow-coverfraction % 0 100 100 meters Percent ground cover for snow and ice land cover class urban-coverfraction % 0 100 100 meters Percent ground cover for built-up land cover class water-permanent-coverfraction % 0 100 100 meters Percent ground cover for permanent water land cover class water-seasonal-coverfraction % 0 100 100 meters Percent ground cover for seasonal water land cover class data-density-indicator 0 100 100 meters Data density indicator for algorithm input data change-confidence 0 3 100 meters This layer is only provided for years after the BaseYear 2015.
- The Dynamic Land Cover map at 100 m resolution (CGLS-LC100) is … COPERNICUS/Landcover/100m/Proba-V-C3/Global, copernicus,eea,esa,eu,landcover,landuse-landcover,proba,probav,vito 2015-01-01T00:00:00Z/2019-12-31T23:59:59Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets https://doi.org/10.5281/zenodo.3939050 https://doi.org/10.5281/zenodo.3939050 Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],["The Copernicus Global Land Service provides global land cover maps (CGLS-LC100) at 100m resolution from 2015 to 2019, derived from PROBA-V 100m time-series data.
- Dataset Availability 2015-01-01T00:00:00Z–2019-12-31T23:59:59Z Dataset Producer Copernicus Earth Engine Snippet ee.ImageCollection("COPERNICUS/Landcover/100m/Proba-V-C3/Global") open in new Tags copernicus eea esa eu landcover landuse-landcover proba probav vito Description The Copernicus Global Land Service (CGLS) is earmarked as a component of the Land service to operate a multi-purpose service component that provides a series of bio-geophysical products on the status and evolution of land surface at global scale.

