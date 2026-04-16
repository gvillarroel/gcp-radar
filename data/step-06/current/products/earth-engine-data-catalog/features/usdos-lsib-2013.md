---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:20.248Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "USDOS/LSIB/2013"
feature_slug: "usdos-lsib-2013"
latest_feature_date: "2017-05-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/USDOS_LSIB_2013"
  - "https://developers.google.com/earth-engine/datasets/catalog"
  - "https://developers.google.com/earth-engine/guides/debugging"
keywords:
  - "usdos"
  - "lsib"
  - "2013"
  - "us"
  - "department"
  - "state"
  - "large"
  - "scale"
---

# USDOS/LSIB/2013

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

US Department of State large scale international boundary dataset.

## Extended Definition

US Department of State large scale international boundary dataset.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/USDOS_LSIB_2013](https://developers.google.com/earth-engine/datasets/catalog/USDOS_LSIB_2013)
- [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- [https://developers.google.com/earth-engine/guides/debugging](https://developers.google.com/earth-engine/guides/debugging)

## Supporting Pages

### LSIB 2013: Large Scale International Boundary Polygons, Detailed [deprecated] | Earth Engine Data Catalog | Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog/USDOS_LSIB_2013](https://developers.google.com/earth-engine/datasets/catalog/USDOS_LSIB_2013)
- Source ID: `feature-recovery-direct-http`
- Final score: 315
- Re-rank relevance: N/A

Evidence snippets:
- LSIB 2013: Large Scale International Boundary Polygons, Detailed [deprecated] | Earth Engine Data Catalog | Google for Developers メイン コンテンツにスキップ Earth Engine Data Catalog / English Deutsch Español Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體 日本語 한국어 ログイン ホーム カテゴリ All Datasets すべてのタグ Landsat MODIS Sentinel パブリッシャー Community API のドキュメント データセットのステータス 変更履歴 Earth Engine Data Catalog ホーム カテゴリ All Datasets すべてのタグ Landsat MODIS Sentinel パブリッシャー Community API のドキュメント データセットのステータス 変更履歴 ホーム Earth Engine Data Catalog カテゴリ フィードバックを送信 LSIB 2013: Large Scale International Boundary Polygons, Detailed [deprecated] コレクションでコンテンツを整理 必要に応じて、コンテンツの保存と分類を行います。 注意: このデータセットは USDOS/LSIB/2017 に置き換えられました。 データセットの利用可能な期間 2013-03-08T00:00:00Z–2013-03-08T00:00:00Z データセット プロデューサー 米国国務省地理情報局 Earth Engine スニペット FeatureCollection ee.FeatureCollection("USDOS/LSIB/2013") open_in_new FeatureView ui.Map.FeatureViewLayer("USDOS/LSIB/2013_FeatureView") open_in_new タグ ボーダー 実施国数 dos infrastructure-boundaries political（政治） テーブル usdos 説明 米国地理情報局は、大規模な国際境界（LSIB）データセットを提供しています。これは、LSIB ライン ベクトル ファイルと、米国国家地球空間情報局（NGA）の World Vector Shorelines（WVS）という 2 つのデータセットから派生したものです。内部境界は、境界、境界紛争、主権に関する米国政府の政策を反映しています。外側の境界は WVS から取得されますが、WVS の海岸線データは古く、一般的に数百メートルから 1 キロメートル以上ずれています。各フィーチャーは、内側の境界と外側の海岸線（該当する場合）で囲まれたポリゴンの領域です。多くの国は、複数のフィーチャー（切断されたリージョンごとに 1 つ）で構成されています。180,741 個の各フィーチャーは、このデータセットで説明されている 284 か国のいずれかのジオメトリの一部です。 テーブル スキーマ テーブル スキーマ 名前 型 説明 cc STRING 2 文字の FIPS 国コード iso_alpha2 STRING ISO 3166-1 alpha-2 の国コード iso_alpha3 STRING ISO 3166-1 alpha-3 の国コード iso_num DOUBLE 国レコード ID name STRING 米国で認められている国名 地域 STRING 大陸地域の略称（例: ヨーロッパ-南西アジア） tld STRING インターネット トップレベル ドメイン 利用規約 利用規約 この米国のパブリック ドメイン データには使用制限はありません。 Earth Engine で探索する 重要: Earth Engine は、公共の利益のため、および、ビジネス ユーザーや政府機関のユーザーのための、地理空間データセットのペタバイト規模の科学的分析と可視化を目的としたプラットフォームです。Earth Engine は、研究、教育、非営利目的の場合は無料でご使用いただけます。まず、 Earth Engine へのアクセスを登録 してください。 コードエディタ（JavaScript） var dataset = ee .
- FeatureViewLayer ( 'USDOS/LSIB/2013_FeatureView' ); var visParams = { color : { property : 'iso_num' , mode : 'linear' , palette : [ 'f5ff64' , 'b5ffb4' , 'beeaff' , 'ffc0e8' , '8e8dff' , 'adadad' ], min : 0 , max : 894 }, opacity : 0.8 , }; fvLayer . setVisParams ( visParams ); fvLayer . setName ( 'USDOS/LSIB/2013' ); Map . setCenter ( 16.35 , 48.83 , 4 ); Map . add ( fvLayer ); コードエディタで開く LSIB 2013: 大規模な国際境界ポリゴン、詳細 [非推奨] 米国地理情報局は、大規模な国際境界（LSIB）データセットを提供しています。このデータセットは、LSIB ライン ベクトル ファイルと、米国国家地球空間情報局（NGA）の World Vector Shorelines（WVS）という 2 つのデータセットから派生したものです。内部境界は、境界、境界紛争などに関する米国政府の政策を反映しています。 USDOS/LSIB/2013、境界、国、dos、インフラストラクチャの境界、政治、表、usdos 2013-03-08T00:00:00Z/2013-03-08T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets ご意見をお聞かせください [[["わかりやすい","easyToUnderstand","thumb-up"],["問題の解決に役立った","solvedMyProblem","thumb-up"],["その他","otherUp","thumb-up"]],[["必要な情報がない","missingTheInformationINeed","thumb-down"],["複雑すぎる / 手順が多すぎる","tooComplicatedTooManySteps","thumb-down"],["最新ではない","outOfDate","thumb-down"],["翻訳に関する問題","translationIssue","thumb-down"],["サンプル / コードに問題がある","samplesCodeIssue","thumb-down"],["その他","otherDown","thumb-down"]],[],[],[]] GitHub Earth Engine on GitHub Medium Follow our blog on Medium GIS Stack Exchange Ask questions using the google-earth-engine tag Twitter Follow @googleearth on Twitter Videos Earth Engine on YouTube つながる ブログ Bluesky Instagram LinkedIn X（Twitter） YouTube プログラム Google Developer Program Google Developer Groups Google Developer Experts Accelerators Google Cloud & NVIDIA デベロッパー コンソール Google API Console Google Cloud Platform Console Google Play Console Firebase Console Actions on Google Console Cast SDK Developer Console Chrome Web Store Dashboard Google Home Developer Console Android Chrome Firebase Google Cloud Platform Google AI すべてのプロダクト 利用規約 プライバシー Manage cookies English Deutsch Español Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體 日本語 한국어
- Image (). int16 (). paint ( dataset , 'iso_num' ); Map . setCenter ( 16.35 , 48.83 , 4 ); Map . addLayer ( image , visParams , 'USDOS/LSIB/2013' , true , 0.8 ); Map . addLayer ( dataset , null , 'for Inspector' , false ); コードエディタで開く FeatureView として可視化する FeatureView は、 FeatureCollection の高速表示専用の表現です。詳細については、 FeatureView のドキュメントをご覧ください。 重要: Earth Engine は、公共の利益のため、および、ビジネス ユーザーや政府機関のユーザーのための、地理空間データセットのペタバイト規模の科学的分析と可視化を目的としたプラットフォームです。Earth Engine は、研究、教育、非営利目的の場合は無料でご使用いただけます。まず、 Earth Engine へのアクセスを登録 してください。 コードエディタ（JavaScript） var fvLayer = ui .
- FeatureCollection ( 'USDOS/LSIB/2013' ); var visParams = { palette : [ 'f5ff64' , 'b5ffb4' , 'beeaff' , 'ffc0e8' , '8e8dff' , 'adadad' ], min : 0 , max : 894 , }; var image = ee .

### Earth Engine Data Catalog \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- Source ID: `site-docs-root`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- The interior boundaries reflect U.S. government … borders countries dos infrastructure-boundaries political table LSIB 2017: Large Scale International Boundary Polygons, Simplified The United States Office of the Geographer provides the Large Scale International Boundary (LSIB) dataset.
- Landfire (LF) Historical fire regimes, intervals, and … doi fire landfire nature-conservancy usda usgs LSIB 2017: Large Scale International Boundary Polygons, Detailed The United States Office of the Geographer provides the Large Scale International Boundary (LSIB) dataset.
- The surfaces are the outcomes from modelling that describe the spatial distribution of the soil attributes using existing soil data and environmental … australia csiro soil tern SOLUS: Soil properties of the conterminous United States at 100-m resolution SOLUS (Soil Landscapes of the United States) is a national map product developed by the National Cooperative Soil Survey that is focused on providing a consistent set of spatially continuous soil property maps to support large scope soil investigations and land use decisions.
- It shows LCMS-modeled change, land cover, and/or land use classes for each year and covers the Conterminous United States (CONUS) as well as areas outside the CONUS (OCONUS) including Alaska (AK), Puerto … change-detection forest gtac landcover landuse landuse-landcover USFS Tree Canopy Cover v2023-5 (CONUS and OCONUS) Overview The Tree Canopy Cover (TCC) data suite, produced by the United States Department of Agriculture, Forest Service (USFS), are annual remote sensing-based map outputs spanning from 1985-2023.

### Debugging guide \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/debugging](https://developers.google.com/earth-engine/guides/debugging)
- Source ID: `site-docs-reference-3`
- Final score: 112
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- FeatureCollection ( 'USDOS/LSIB SIMPLE/2017' ); // Error: collection.first(...).area is not a function var area = collection . first (). area (); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) collection = ee .
- Scaling errors, including computation timeouts, too many concurrent aggregations, and user memory limit exceeded, are often the most difficult to resolve and may require adjusting parameters like scale , maxPixels , or tileScale , or using Export for large computations.
- Point ([ - 122.27 , 37.87 ]) . buffer ( 1000 ), scale = 1 , bestEffort = True , ) ) print ( ok memory . getInfo ()) Unless necessary to resolve a memory error, you shouldn't set tileScale as smaller tiles also result in larger parallelization overhead.
- FeatureCollection ( 'USDOS/LSIB SIMPLE/2017' ) AttributeError: 'Element' object has no attribute 'area'. area = collection . first () . area () The solution in all cases is to cast the object of unknown type with the constructor of the known type.

