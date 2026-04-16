---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T14:11:56.867Z"
product_name: "Earth Engine Python Client Library"
product_slug: "earth-engine-python-client-library"
feature_name: "Static API method invocation"
feature_slug: "static-api-method-invocation"
latest_feature_date: "2013-01-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/guides/debugging"
  - "https://developers.google.com/earth-engine/guides/app_engine_intro"
  - "https://developers.google.com/earth-engine/guides/auth"
keywords:
  - "methodname"
  - "classname"
  - "methods"
  - "static"
  - "method"
  - "invocation"
  - "calling"
  - "added"
---

# Static API method invocation

Product: Earth Engine Python Client Library
Coverage: MEDIUM

## Step 02 Summary

Added support for calling static API methods with the ClassName.methodName() syntax.

## Extended Definition

Added support for calling static API methods with the ClassName.methodName() syntax.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/guides/debugging](https://developers.google.com/earth-engine/guides/debugging)
- [https://developers.google.com/earth-engine/guides/app_engine_intro](https://developers.google.com/earth-engine/guides/app_engine_intro)
- [https://developers.google.com/earth-engine/guides/auth](https://developers.google.com/earth-engine/guides/auth)

## Supporting Pages

### Debugging guide | Google Earth Engine | Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/debugging](https://developers.google.com/earth-engine/guides/debugging)
- Source ID: `site-docs-reference-required-6-http`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- Debugging guide | Google Earth Engine | Google for Developers Skip to main content Earth Engine / English Deutsch Español Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體 日本語 한국어 Sign in Home Guides Reference Support Community Data Catalog Earth Engine Home Guides Reference Support Community Data Catalog Discover Product overview BigQuery integrations Get started Earth Engine access Authentication and initialization Quickstarts Python client JavaScript Code Editor Video tutorials Development environments Earth Engine Code Editor Python installation Concepts Client versus server Processing environments Computation overview Deferred execution Scale Projections Resampling and reducing resolution Analyze data Objects and methods overview Image Image overview Image visualization Image information and metadata Mathematical operations Relational, conditional and boolean operations Convolutions Morphological operations Gradients Edge detection Spectral transformations Texture Object-based methods Cumulative cost mapping Registering images ImageCollection ImageCollection overview ImageCollection visualization ImageCollection information and metadata Filtering an ImageCollection Mapping over an ImageCollection Reducing an ImageCollection Compositing and mosaicking Iterating over an ImageCollection Geometry Geometry overview Geodesic versus planar geometries Geometry visualization and information Geometric operations Feature & FeatureCollection Feature overview FeatureCollection overview Feature and FeatureCollection visualization FeatureCollection information and metadata Filtering a FeatureCollection Mapping over a FeatureCollection Reducing a FeatureCollection Vector to raster interpolation Read tables from BigQuery FeatureView FeatureView overview FeatureView optimization FeatureView styling Reducer Reducer overview ImageCollection reductions Image reductions Statistics of an image region Statistics of image regions Statistics of image neighborhoods Statistics of FeatureCollection columns Raster to vector conversion Vector to raster conversion Grouped reductions and zonal statistics Weighted reductions Linear regression Join Join overview Simple joins Inverted joins Inner joins Save-all joins Save-best joins Save-first joins Spatial joins Array Array overview Array and array images Array transformations Eigen analysis Array sorting and reducing Visualize data Earth Engine Code Editor Charts Chart overview Feature and FeatureCollection charts Image charts ImageCollection charts Array and list charts DataTable charts Chart styling Earth Engine apps About Earth Engine apps User interface API overview Widgets Panels and layouts Events Machine learning Overview of ML in Earth Engine Supervised classification Unsupervised classification Custom Models in Vertex AI Custom models overview Hosting a model in Vertex AI Prediction payload formats Image predictions Property predictions Example workflows notebooks TFRecord data format Cloud AI Platform Migration Guide Import data Importing raster data Image manifest upload Importing table data Table manifest upload Export data Overview Exporting images Exporting table and vector data Exporting video and animations Exporting map tiles Exporting to BigQuery Extracting image data programmatically Manage Control access to resources Managing assets Usage quota and limits Monitoring usage Cost controls Computation benchmarks Service accounts Audit logs Troubleshoot Coding best practices Debugging Archive Custom applications App Engine and Earth Engine overview App Engine example apps NPM installation Samples Overview Introduction to JavaScript for Earth Engine Introduction Earth Engine objects and methods Functional programming concepts The Earth Engine API Introduction Visualizing images and image bands Computations using images Image collections Compositing, masking, and mosaicking NDVI, mapping a function over a collection, quality mosaicking Exporting charts and images Global forest change Introduction Introduction to Hansen global forest change data Quantifying forest change Charting yearly forest loss Introduction to forest monitoring for action (FORMA) data Global Surface Water Introduction Water occurrence (1984-2015) Water occurrence change intensity Water class transition Earth Engine is introducing noncommercial quota tiers to safeguard shared compute resources and ensure reliable performance for everyone.
- ImageCollection ( 'MODIS/006/MOD44B' ); // Error: User-defined methods must return a value. var badMap1 = collection . map ( function ( image ) { // Do nothing. }); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) collection = ee .
- ImageCollection ( 'MODIS/006/MOD44B' ) # Error: User-defined methods must return a value. bad_map_1 = collection . map ( lambda image : None ) The possibly obvious solution is to return something.
- Debugging methods You coded up your analysis, ran it, and got an error.

### App Engine & Earth Engine Overview | Google Earth Engine | Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/app_engine_intro](https://developers.google.com/earth-engine/guides/app_engine_intro)
- Source ID: `site-docs-root-2-http`
- Final score: 61
- Re-rank relevance: N/A

Evidence snippets:
- App Engine & Earth Engine Overview | Google Earth Engine | Google for Developers Skip to main content Earth Engine / English Deutsch Español Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體 日本語 한국어 Sign in Home Guides Reference Support Community Data Catalog Earth Engine Home Guides Reference Support Community Data Catalog Discover Product overview BigQuery integrations Get started Earth Engine access Authentication and initialization Quickstarts Python client JavaScript Code Editor Video tutorials Development environments Earth Engine Code Editor Python installation Concepts Client versus server Processing environments Computation overview Deferred execution Scale Projections Resampling and reducing resolution Analyze data Objects and methods overview Image Image overview Image visualization Image information and metadata Mathematical operations Relational, conditional and boolean operations Convolutions Morphological operations Gradients Edge detection Spectral transformations Texture Object-based methods Cumulative cost mapping Registering images ImageCollection ImageCollection overview ImageCollection visualization ImageCollection information and metadata Filtering an ImageCollection Mapping over an ImageCollection Reducing an ImageCollection Compositing and mosaicking Iterating over an ImageCollection Geometry Geometry overview Geodesic versus planar geometries Geometry visualization and information Geometric operations Feature & FeatureCollection Feature overview FeatureCollection overview Feature and FeatureCollection visualization FeatureCollection information and metadata Filtering a FeatureCollection Mapping over a FeatureCollection Reducing a FeatureCollection Vector to raster interpolation Read tables from BigQuery FeatureView FeatureView overview FeatureView optimization FeatureView styling Reducer Reducer overview ImageCollection reductions Image reductions Statistics of an image region Statistics of image regions Statistics of image neighborhoods Statistics of FeatureCollection columns Raster to vector conversion Vector to raster conversion Grouped reductions and zonal statistics Weighted reductions Linear regression Join Join overview Simple joins Inverted joins Inner joins Save-all joins Save-best joins Save-first joins Spatial joins Array Array overview Array and array images Array transformations Eigen analysis Array sorting and reducing Visualize data Earth Engine Code Editor Charts Chart overview Feature and FeatureCollection charts Image charts ImageCollection charts Array and list charts DataTable charts Chart styling Earth Engine apps About Earth Engine apps User interface API overview Widgets Panels and layouts Events Machine learning Overview of ML in Earth Engine Supervised classification Unsupervised classification Custom Models in Vertex AI Custom models overview Hosting a model in Vertex AI Prediction payload formats Image predictions Property predictions Example workflows notebooks TFRecord data format Cloud AI Platform Migration Guide Import data Importing raster data Image manifest upload Importing table data Table manifest upload Export data Overview Exporting images Exporting table and vector data Exporting video and animations Exporting map tiles Exporting to BigQuery Extracting image data programmatically Manage Control access to resources Managing assets Usage quota and limits Monitoring usage Cost controls Computation benchmarks Service accounts Audit logs Troubleshoot Coding best practices Debugging Archive Custom applications App Engine and Earth Engine overview App Engine example apps NPM installation Samples Overview Introduction to JavaScript for Earth Engine Introduction Earth Engine objects and methods Functional programming concepts The Earth Engine API Introduction Visualizing images and image bands Computations using images Image collections Compositing, masking, and mosaicking NDVI, mapping a function over a collection, quality mosaicking Exporting charts and images Global forest change Introduction Introduction to Hansen global forest change data Quantifying forest change Charting yearly forest loss Introduction to forest monitoring for action (FORMA) data Global Surface Water Introduction Water occurrence (1984-2015) Water occurrence change intensity Water class transition Earth Engine is introducing noncommercial quota tiers to safeguard shared compute resources and ensure reliable performance for everyone.
- Update static/script.js (or an equivalent file in your source code) to use your client ID.
- Ensure ee_api_js.js is available in the /static/ directory (or equivalent).

### Authentication and Initialization | Google Earth Engine | Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/auth](https://developers.google.com/earth-engine/guides/auth)
- Source ID: `site-docs-reference-required-3-http`
- Final score: 61
- Re-rank relevance: N/A

Evidence snippets:
- Authentication and Initialization | Google Earth Engine | Google for Developers Skip to main content Earth Engine / English Deutsch Español Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體 日本語 한국어 Sign in Home Guides Reference Support Community Data Catalog Earth Engine Home Guides Reference Support Community Data Catalog Discover Product overview BigQuery integrations Get started Earth Engine access Authentication and initialization Quickstarts Python client JavaScript Code Editor Video tutorials Development environments Earth Engine Code Editor Python installation Concepts Client versus server Processing environments Computation overview Deferred execution Scale Projections Resampling and reducing resolution Analyze data Objects and methods overview Image Image overview Image visualization Image information and metadata Mathematical operations Relational, conditional and boolean operations Convolutions Morphological operations Gradients Edge detection Spectral transformations Texture Object-based methods Cumulative cost mapping Registering images ImageCollection ImageCollection overview ImageCollection visualization ImageCollection information and metadata Filtering an ImageCollection Mapping over an ImageCollection Reducing an ImageCollection Compositing and mosaicking Iterating over an ImageCollection Geometry Geometry overview Geodesic versus planar geometries Geometry visualization and information Geometric operations Feature & FeatureCollection Feature overview FeatureCollection overview Feature and FeatureCollection visualization FeatureCollection information and metadata Filtering a FeatureCollection Mapping over a FeatureCollection Reducing a FeatureCollection Vector to raster interpolation Read tables from BigQuery FeatureView FeatureView overview FeatureView optimization FeatureView styling Reducer Reducer overview ImageCollection reductions Image reductions Statistics of an image region Statistics of image regions Statistics of image neighborhoods Statistics of FeatureCollection columns Raster to vector conversion Vector to raster conversion Grouped reductions and zonal statistics Weighted reductions Linear regression Join Join overview Simple joins Inverted joins Inner joins Save-all joins Save-best joins Save-first joins Spatial joins Array Array overview Array and array images Array transformations Eigen analysis Array sorting and reducing Visualize data Earth Engine Code Editor Charts Chart overview Feature and FeatureCollection charts Image charts ImageCollection charts Array and list charts DataTable charts Chart styling Earth Engine apps About Earth Engine apps User interface API overview Widgets Panels and layouts Events Machine learning Overview of ML in Earth Engine Supervised classification Unsupervised classification Custom Models in Vertex AI Custom models overview Hosting a model in Vertex AI Prediction payload formats Image predictions Property predictions Example workflows notebooks TFRecord data format Cloud AI Platform Migration Guide Import data Importing raster data Image manifest upload Importing table data Table manifest upload Export data Overview Exporting images Exporting table and vector data Exporting video and animations Exporting map tiles Exporting to BigQuery Extracting image data programmatically Manage Control access to resources Managing assets Usage quota and limits Monitoring usage Cost controls Computation benchmarks Service accounts Audit logs Troubleshoot Coding best practices Debugging Archive Custom applications App Engine and Earth Engine overview App Engine example apps NPM installation Samples Overview Introduction to JavaScript for Earth Engine Introduction Earth Engine objects and methods Functional programming concepts The Earth Engine API Introduction Visualizing images and image bands Computations using images Image collections Compositing, masking, and mosaicking NDVI, mapping a function over a collection, quality mosaicking Exporting charts and images Global forest change Introduction Introduction to Hansen global forest change data Quantifying forest change Charting yearly forest loss Introduction to forest monitoring for action (FORMA) data Global Surface Water Introduction Water occurrence (1984-2015) Water occurrence change intensity Water class transition Earth Engine is introducing noncommercial quota tiers to safeguard shared compute resources and ensure reliable performance for everyone.
- Other methods include authenticate_service_account in the Colab auth module and the methods described in the Cloud guide to authenticating as a service account .
- It then initializes the Python client library with methods that the backend server supports.
- Command line invocations will initialize on each call, and you may use the --project argument to set the project.

