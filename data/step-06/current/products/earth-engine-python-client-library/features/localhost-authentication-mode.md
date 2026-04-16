---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T14:11:56.811Z"
product_name: "Earth Engine Python Client Library"
product_slug: "earth-engine-python-client-library"
feature_name: "localhost authentication mode"
feature_slug: "localhost-authentication-mode"
latest_feature_date: "2023-12-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/guides/auth"
  - "https://developers.google.com/earth-engine/guides/python_install"
  - "https://developers.google.com/earth-engine/guides/app_engine_intro"
keywords:
  - "localhost"
  - "introduces"
  - "authentication"
  - "initialize"
  - "authenticate"
  - "mode"
  - "adds"
---

# localhost authentication mode

Product: Earth Engine Python Client Library
Coverage: MEDIUM

## Step 02 Summary

Introduces localhost mode for ee.Authenticate() and ee.Initialize(); Adds a localhost authentication mode for client library integration.

## Extended Definition

Introduces localhost mode for ee.Authenticate() and ee.Initialize(); Adds a localhost authentication mode for client library integration.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/guides/auth](https://developers.google.com/earth-engine/guides/auth)
- [https://developers.google.com/earth-engine/guides/python_install](https://developers.google.com/earth-engine/guides/python_install)
- [https://developers.google.com/earth-engine/guides/app_engine_intro](https://developers.google.com/earth-engine/guides/app_engine_intro)

## Supporting Pages

### Authentication and Initialization | Google Earth Engine | Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/auth](https://developers.google.com/earth-engine/guides/auth)
- Source ID: `site-docs-reference-required-3-http`
- Final score: 147
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Project Needed Scopes Settable Local CLI Needed Project Owner localhost local Y Y N N colab remote Y N N N gcloud both Y Y N N notebook both Y Y N Y Credentials for Service Accounts and Compute Engine ee.Initialize() will use Earth Engine credentials (which ee.Authenticate() stores in ~/.config/earthengine/credentials ) or retrieve credentials from google.auth.default() , but if necessary you can pass a credentials= argument to use credentials from elsewhere, bypassing these defaults.
- If you or other users have set up an OAuth client on the project for other reasons, it cannot be removed and you will see an error saying "incompatible OAuth2 client configuration." You will need to use a different project for authentication, or use the colab, localhost or gcloud modes above.
- If you are working in a web-only environment without access to a local terminal, and you still need to use a remote terminal, you can still initialize the command line tool by triggering the notebook mode by running the earthengine authenticate --auth_mode=notebook command.
- If you are using the JavaScript API (outside of the Code Editor), use one of the authentication helpers in ee.data (for example, ee.data.authenticateViaPopup() ) followed by ee.initialize() as shown in this example .

### Python Installation | Google Earth Engine | Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/python_install](https://developers.google.com/earth-engine/guides/python_install)
- Source ID: `site-docs-reference-required-5-http`
- Final score: 104
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It must be imported and initialized for each new Python session and script: import ee Authentication and Initialization Prior to using the Earth Engine Python client library, you need to authenticate and use the resultant credentials to initialize the Python client.
- Initialize ( project = 'my-project' ) See the authentication guide for troubleshooting and to learn more about authentication modes and Cloud projects.
- Authenticate () This will select the best authentication mode for your environment, and prompt you to confirm access for your scripts.
- Python Installation | Google Earth Engine | Google for Developers Skip to main content Earth Engine / English Deutsch Español Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體 日本語 한국어 Sign in Home Guides Reference Support Community Data Catalog Earth Engine Home Guides Reference Support Community Data Catalog Discover Product overview BigQuery integrations Get started Earth Engine access Authentication and initialization Quickstarts Python client JavaScript Code Editor Video tutorials Development environments Earth Engine Code Editor Python installation Concepts Client versus server Processing environments Computation overview Deferred execution Scale Projections Resampling and reducing resolution Analyze data Objects and methods overview Image Image overview Image visualization Image information and metadata Mathematical operations Relational, conditional and boolean operations Convolutions Morphological operations Gradients Edge detection Spectral transformations Texture Object-based methods Cumulative cost mapping Registering images ImageCollection ImageCollection overview ImageCollection visualization ImageCollection information and metadata Filtering an ImageCollection Mapping over an ImageCollection Reducing an ImageCollection Compositing and mosaicking Iterating over an ImageCollection Geometry Geometry overview Geodesic versus planar geometries Geometry visualization and information Geometric operations Feature & FeatureCollection Feature overview FeatureCollection overview Feature and FeatureCollection visualization FeatureCollection information and metadata Filtering a FeatureCollection Mapping over a FeatureCollection Reducing a FeatureCollection Vector to raster interpolation Read tables from BigQuery FeatureView FeatureView overview FeatureView optimization FeatureView styling Reducer Reducer overview ImageCollection reductions Image reductions Statistics of an image region Statistics of image regions Statistics of image neighborhoods Statistics of FeatureCollection columns Raster to vector conversion Vector to raster conversion Grouped reductions and zonal statistics Weighted reductions Linear regression Join Join overview Simple joins Inverted joins Inner joins Save-all joins Save-best joins Save-first joins Spatial joins Array Array overview Array and array images Array transformations Eigen analysis Array sorting and reducing Visualize data Earth Engine Code Editor Charts Chart overview Feature and FeatureCollection charts Image charts ImageCollection charts Array and list charts DataTable charts Chart styling Earth Engine apps About Earth Engine apps User interface API overview Widgets Panels and layouts Events Machine learning Overview of ML in Earth Engine Supervised classification Unsupervised classification Custom Models in Vertex AI Custom models overview Hosting a model in Vertex AI Prediction payload formats Image predictions Property predictions Example workflows notebooks TFRecord data format Cloud AI Platform Migration Guide Import data Importing raster data Image manifest upload Importing table data Table manifest upload Export data Overview Exporting images Exporting table and vector data Exporting video and animations Exporting map tiles Exporting to BigQuery Extracting image data programmatically Manage Control access to resources Managing assets Usage quota and limits Monitoring usage Cost controls Computation benchmarks Service accounts Audit logs Troubleshoot Coding best practices Debugging Archive Custom applications App Engine and Earth Engine overview App Engine example apps NPM installation Samples Overview Introduction to JavaScript for Earth Engine Introduction Earth Engine objects and methods Functional programming concepts The Earth Engine API Introduction Visualizing images and image bands Computations using images Image collections Compositing, masking, and mosaicking NDVI, mapping a function over a collection, quality mosaicking Exporting charts and images Global forest change Introduction Introduction to Hansen global forest change data Quantifying forest change Charting yearly forest loss Introduction to forest monitoring for action (FORMA) data Global Surface Water Introduction Water occurrence (1984-2015) Water occurrence change intensity Water class transition Earth Engine is introducing noncommercial quota tiers to safeguard shared compute resources and ensure reliable performance for everyone.

### App Engine & Earth Engine Overview | Google Earth Engine | Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/app_engine_intro](https://developers.google.com/earth-engine/guides/app_engine_intro)
- Source ID: `site-docs-root-2-http`
- Final score: 99
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- App Engine & Earth Engine Overview | Google Earth Engine | Google for Developers Skip to main content Earth Engine / English Deutsch Español Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體 日本語 한국어 Sign in Home Guides Reference Support Community Data Catalog Earth Engine Home Guides Reference Support Community Data Catalog Discover Product overview BigQuery integrations Get started Earth Engine access Authentication and initialization Quickstarts Python client JavaScript Code Editor Video tutorials Development environments Earth Engine Code Editor Python installation Concepts Client versus server Processing environments Computation overview Deferred execution Scale Projections Resampling and reducing resolution Analyze data Objects and methods overview Image Image overview Image visualization Image information and metadata Mathematical operations Relational, conditional and boolean operations Convolutions Morphological operations Gradients Edge detection Spectral transformations Texture Object-based methods Cumulative cost mapping Registering images ImageCollection ImageCollection overview ImageCollection visualization ImageCollection information and metadata Filtering an ImageCollection Mapping over an ImageCollection Reducing an ImageCollection Compositing and mosaicking Iterating over an ImageCollection Geometry Geometry overview Geodesic versus planar geometries Geometry visualization and information Geometric operations Feature & FeatureCollection Feature overview FeatureCollection overview Feature and FeatureCollection visualization FeatureCollection information and metadata Filtering a FeatureCollection Mapping over a FeatureCollection Reducing a FeatureCollection Vector to raster interpolation Read tables from BigQuery FeatureView FeatureView overview FeatureView optimization FeatureView styling Reducer Reducer overview ImageCollection reductions Image reductions Statistics of an image region Statistics of image regions Statistics of image neighborhoods Statistics of FeatureCollection columns Raster to vector conversion Vector to raster conversion Grouped reductions and zonal statistics Weighted reductions Linear regression Join Join overview Simple joins Inverted joins Inner joins Save-all joins Save-best joins Save-first joins Spatial joins Array Array overview Array and array images Array transformations Eigen analysis Array sorting and reducing Visualize data Earth Engine Code Editor Charts Chart overview Feature and FeatureCollection charts Image charts ImageCollection charts Array and list charts DataTable charts Chart styling Earth Engine apps About Earth Engine apps User interface API overview Widgets Panels and layouts Events Machine learning Overview of ML in Earth Engine Supervised classification Unsupervised classification Custom Models in Vertex AI Custom models overview Hosting a model in Vertex AI Prediction payload formats Image predictions Property predictions Example workflows notebooks TFRecord data format Cloud AI Platform Migration Guide Import data Importing raster data Image manifest upload Importing table data Table manifest upload Export data Overview Exporting images Exporting table and vector data Exporting video and animations Exporting map tiles Exporting to BigQuery Extracting image data programmatically Manage Control access to resources Managing assets Usage quota and limits Monitoring usage Cost controls Computation benchmarks Service accounts Audit logs Troubleshoot Coding best practices Debugging Archive Custom applications App Engine and Earth Engine overview App Engine example apps NPM installation Samples Overview Introduction to JavaScript for Earth Engine Introduction Earth Engine objects and methods Functional programming concepts The Earth Engine API Introduction Visualizing images and image bands Computations using images Image collections Compositing, masking, and mosaicking NDVI, mapping a function over a collection, quality mosaicking Exporting charts and images Global forest change Introduction Introduction to Hansen global forest change data Quantifying forest change Charting yearly forest loss Introduction to forest monitoring for action (FORMA) data Global Surface Water Introduction Water occurrence (1984-2015) Water occurrence change intensity Water class transition Earth Engine is introducing noncommercial quota tiers to safeguard shared compute resources and ensure reliable performance for everyone.
- If installation fails, check that a recent version of Node.js is installed . const ee = require ( '@google/earthengine' ); ee . data . authenticateViaPrivateKey ( '.private-key.json' ); ee . initialize (); OAuth 2.0 Client ID If you want users to authenticate as themselves (rather than using a service account), you need to set up an OAuth Client ID from your Cloud Project.
- Run locally Once your service account is registered for Earth Engine access , you can use it to authenticate (see config.py ) when you test the examples.
- To set up authentication with a service account, follow these instructions to create the service account and private key file.

