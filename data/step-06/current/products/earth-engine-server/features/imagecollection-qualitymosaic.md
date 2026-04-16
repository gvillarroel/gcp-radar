---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:27:28.315Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "ImageCollection.qualityMosaic"
feature_slug: "imagecollection-qualitymosaic"
latest_feature_date: "2013-01-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/apidocs/ee-imagecollection-qualitymosaic"
  - "https://developers.google.com/earth-engine/guides/charts_image_collection"
  - "https://developers.google.com/earth-engine/guides/debugging"
keywords:
  - "imagecollection"
  - "qualitymosaic"
  - "composites"
  - "image"
  - "collection"
  - "quality"
  - "band"
---

# ImageCollection.qualityMosaic

Product: Earth Engine Server
Coverage: MEDIUM

## Step 02 Summary

ImageCollection.qualityMosaic composites an image collection using a quality band.

## Extended Definition

ImageCollection.qualityMosaic composites an image collection using a quality band.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/apidocs/ee-imagecollection-qualitymosaic](https://developers.google.com/earth-engine/apidocs/ee-imagecollection-qualitymosaic)
- [https://developers.google.com/earth-engine/guides/charts_image_collection](https://developers.google.com/earth-engine/guides/charts_image_collection)
- [https://developers.google.com/earth-engine/guides/debugging](https://developers.google.com/earth-engine/guides/debugging)

## Supporting Pages

### ee.ImageCollection.qualityMosaic | Google Earth Engine | Google for Developers

- URL: [https://developers.google.com/earth-engine/apidocs/ee-imagecollection-qualitymosaic](https://developers.google.com/earth-engine/apidocs/ee-imagecollection-qualitymosaic)
- Source ID: `feature-recovery-http`
- Final score: 352
- Re-rank relevance: N/A

Evidence snippets:
- Nutzung Ausgabe ImageCollection. qualityMosaic (qualityBand) Bild Argument Typ Details So gehts: collection ImageCollection Die Sammlung, die mosaikiert werden soll. qualityBand String Der Name des Qualitätsbereichs in der Sammlung.
- ee.ImageCollection.qualityMosaic | Google Earth Engine | Google for Developers Zum Hauptinhalt springen Earth Engine / English Deutsch Español Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體 日本語 한국어 Anmelden Startseite Leitfäden Referenzen Support Community Data Catalog Earth Engine Startseite Leitfäden Referenzen Support Community Data Catalog API-Referenz Übersicht Clientbibliotheken JavaScript/Python ee.Algorithms CannyEdgeDetector Sammlung CrossCorrelation Datum Beschreiben Wörterbuch FMask.fillMinima FMask.matchClouds Funktion GeometryConstructors.BBox GeometryConstructors.LineString GeometryConstructors.LinearRing GeometryConstructors.MultiGeometry GeometryConstructors.MultiLineString GeometryConstructors.MultiPoint GeometryConstructors.MultiPolygon GeometryConstructors.Point GeometryConstructors.Polygon GeometryConstructors.Rectangle HillShadow HoughTransform Wenn Image.Segmentation.GMeans Image.Segmentation.KMeans Image.Segmentation.SNIC Image.Segmentation.seedGrid Ist gleich Landsat.TOA Landsat.calibratedRadiance Landsat.pathRowLimit Landsat.simpleCloudScore Landsat.simpleComposite Objekttyp ProjectionTransform Sentinel2.CDI String TemporalSegmentation.C2c TemporalSegmentation.Ccdc TemporalSegmentation.Ewmacd TemporalSegmentation.LandTrendr TemporalSegmentation.LandTrendrFit TemporalSegmentation.StructuralChangeBreakpoints TemporalSegmentation.VCT TemporalSegmentation.Verdet Gelände ee.Array ee.Array abs accum acos Hinzufügen und argmax asin atan atan2 bitCount bitsToArray bitwiseAnd bitwiseNot bitwiseOr bitwiseXor Byte Katze CBRT Ceil cos Cosh Cut Digamma divide dotProduct Doppelt eigen eq (Gleich) ERF erfInv ErFC erfcInv exp erste/r/s firstNonZero Gleitkommazahl Boden Gamma gammainc get gt (Größer) gte (Größer-gleich) Hypot identity int int16 int32 int64 int8 lanczos leftShift length log log10 lang lt LTE Maske matrixCholeskyDecomposition matrixDeterminant matrixDiagonal matrixFnorm matrixInverse matrixLUDecomposition matrixMultiply matrixPseudoInverse matrixQRDecomposition matrixSingularValueDecomposition matrixSolve matrixToDiag matrixTrace matrixTranspose max.
- Here, an inverting function is mapped over the // image collection, the inverted MSK_CLDPRB band is added as a "quality" band. col = col . map ( function ( img ) { var cldProb = img . select ( 'MSK_CLDPRB' ); var cldProbInv = cldProb . multiply ( - 1 ). rename ( 'quality' ); return img . addBands ( cldProbInv ); }); // Image visualization settings. var visParams = { bands : [ 'B4' , 'B3' , 'B2' ], min : 0 , max : 4500 }; Map . setCenter ( - 103.19 , 40.14 , 9 ); Map . addLayer ( col , visParams , 'Collection (for series inspection)' , false ); // Generate a best-pixel mosaic from the image collection. var img = col . qualityMosaic ( 'quality' ); Map . addLayer ( img , visParams , 'Best-pixel mosaic (by cloud score)' ); // To build the worst-pixel mosaic, according to cloud probability, use the // MSK_CLDPRB band as the quality band (the worst pixels have HIGHEST cloud // probability score). var img = col . qualityMosaic ( 'MSK_CLDPRB' ); Map . addLayer ( img , visParams , 'Worst-pixel mosaic (by cloud score)' , false ); Python einrichten Informationen zur Python API und zur Verwendung von geemap für die interaktive Entwicklung finden Sie auf der Seite Python-Umgebung . import ee import geemap.core as geemap Colab (Python) # The goal is to generate a best-pixel mosaic from a collection of # Sentinel-2 images where pixel quality is based on a cloud probability score. # The qualityMosaic() function selects the image (per-pixel) with the HIGHEST # quality-band-score to contribute to the resulting mosaic.
- Map () m . set_center ( - 103.19 , 40.14 , 9 ) m . add_layer ( col , vis_params , 'Collection (for series inspection)' , False ) # Generate a best-pixel mosaic from the image collection. img = col . qualityMosaic ( 'quality' ) m . add_layer ( img , vis_params , 'Best-pixel mosaic (by cloud score)' ) # To build the worst-pixel mosaic, according to cloud probability, use the # MSK_CLDPRB band as the quality band (the worst pixels have HIGHEST cloud # probability score). img = col . qualityMosaic ( 'MSK_CLDPRB' ) m . add_layer ( img , vis_params , 'Worst-pixel mosaic (by cloud score)' , False ) m Feedback geben Sofern nicht anders angegeben, sind die Inhalte dieser Seite unter der Creative Commons Attribution 4.0 License und Codebeispiele unter der Apache 2.0 License lizenziert.

### ImageCollection Charts \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/charts_image_collection](https://developers.google.com/earth-engine/guides/charts_image_collection)
- Source ID: `site-docs-root`
- Final score: 163
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Chart . image . doySeriesByRegion ({ imageCollection : vegIndices , bandName : 'NDVI' , regions : ecoregions , regionReducer : ee .
- Chart . image . doySeriesByYear ({ imageCollection : vegIndices , bandName : 'NDVI' , region : grassland , regionReducer : ee .
- Chart . image . seriesByRegion ({ imageCollection : vegIndices , band : 'NDVI' , regions : ecoregions , reducer : ee .
- Page Summary outlined flag The ui.Chart.image module provides functions to create charts from spatiotemporal reductions of image collections, with different functions dictating the arrangement of data for x-axis, y-axis, and series. ui.Chart.image.series charts image time series for a region with series defined by image bands, while ui.Chart.image.seriesByRegion charts a single band time series for multiple regions with series defined by regions. ui.Chart.image.doySeries charts a day-of-year time series for a region with series defined by image bands, reducing observations on the same day across years. ui.Chart.image.doySeriesByYear charts a day-of-year time series for a region and band, with series defined by years, useful for comparing annual profiles. ui.Chart.image.doySeriesByRegion charts a single band day-of-year time series for multiple regions, with series defined by regions, allowing comparison of annual single-band time series among regions.

### Debugging guide \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/debugging](https://developers.google.com/earth-engine/guides/debugging)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Point ([ 106.91 , 47.91 ])) . map ( lambda image : image . addBands ( image . normalizedDifference ([ 'B5' , 'B4' ]))) . aside ( m . add layer , { 'bands' : [ 'B4' , 'B3' , 'B2' ], 'max' : 0.3 }, 'collection' ) . qualityMosaic ( 'nd' ) ) m . add layer ( composite , { 'bands' : [ 'B4' , 'B3' , 'B2' ], 'max' : 0.3 }, 'composite' ) m Running a function on first() Printing and visualizing are useful for debugging when available, but when you're debugging a function mapped over a collection, then you can't print in the function, as described in the mapped functions section .
- Point ([ 106.91 , 47.91 ])) . map ( function ( image ) { return image . addBands ( image . normalizedDifference ([ 'B5' , 'B4' ])); }) . aside ( Map . addLayer , { bands : [ 'B4' , 'B3' , 'B2' ], max : 0.3 }, 'collection' ) . qualityMosaic ( 'nd' ); Map . setCenter ( 106.91 , 47.91 , 11 ); Map . addLayer ( composite , { bands : [ 'B4' , 'B3' , 'B2' ], max : 0.3 }, 'composite' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) m = geemap .
- ImageCollection ( 'MODIS/006/MOD44B' ) ok map 2 = collection . map ( lambda image : image . set ( 'date' , image . date ())) print ( ok map 2 . getInfo ()) Get a list of the dates. dates list = ok map 2 . aggregate array ( 'date' ) print ( dates list . getInfo ()) Procedural errors Pattern was applied to an Image with no bands The "Pattern 'my band' was applied to an Image with no bands" error means there is an ee.Image.select() call for an Image with an empty band list.
- Here's what you can do to address this: If the image is produced from an ImageCollection with a reducer or using the first() or toBands() calls, make sure the source collection is not empty.

