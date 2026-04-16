---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:27:28.302Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "Image.bitwiseAnd"
feature_slug: "image-bitwiseand"
latest_feature_date: "2014-03-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/guides/classification"
  - "https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image"
  - "https://developers.google.com/earth-engine/guides/charts_image"
keywords:
  - "image"
  - "bitwiseand"
  - "performs"
  - "bitwise"
  - "operation"
  - "pixels"
---

# Image.bitwiseAnd

Product: Earth Engine Server
Coverage: MEDIUM

## Step 02 Summary

Performs a bitwise AND operation on image pixels.

## Extended Definition

Performs a bitwise AND operation on image pixels.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/guides/classification](https://developers.google.com/earth-engine/guides/classification)
- [https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image](https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image)
- [https://developers.google.com/earth-engine/guides/charts_image](https://developers.google.com/earth-engine/guides/charts_image)

## Supporting Pages

### Supervised Classification \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/classification](https://developers.google.com/earth-engine/guides/classification)
- Source ID: `site-docs-root`
- Final score: 96
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Map . setCenter ( - 122.0877 , 37.7880 , 11 ); Map . addLayer ( image , { bands : [ 'SR B4' , 'SR B3' , 'SR B2' ], min : 0 , max : 0.25 }, 'image' ); Map . addLayer ( classified , { min : 0 , max : 2 , palette : [ 'orange' , 'green' , 'blue' ]}, 'classification' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Define a function that scales and masks Landsat 8 surface reflectance images. def prep sr l8 ( image ): """Scales and masks Landsat 8 surface reflectance images.""" Develop masks for unwanted pixels (fill, cloud, cloud shadow). qa mask = image . select ( 'QA PIXEL' ) . bitwiseAnd ( 0b11111 ) . eq ( 0 ) saturation mask = image . select ( 'QA RADSAT' ) . eq ( 0 ) Apply the scaling factors to the appropriate bands. def get factor img ( factor names ): factor list = image . toDictionary () . select ( factor names ) . values () return ee .
- Map . setCenter ( - 62.836 , - 9.2399 , 9 ); Map . addLayer ( image , { bands : [ 'SR B4' , 'SR B3' , 'SR B2' ], min : 0 , max : 0.25 }, 'image' ); Map . addLayer ( polygons , { color : 'yellow' }, 'training polygons' ); Map . addLayer ( classified , { min : 0 , max : 1 , palette : [ 'orange' , 'green' ]}, 'deforestation' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Define a function that scales and masks Landsat 8 surface reflectance images. def prep sr l8 ( image ): Develop masks for unwanted pixels (fill, cloud, cloud shadow). qa mask = image . select ( 'QA PIXEL' ) . bitwiseAnd ( 0b11111 ) . eq ( 0 ) saturation mask = image . select ( 'QA RADSAT' ) . eq ( 0 ) Apply the scaling factors to the appropriate bands. def get factor img ( factor names ): factor list = image . toDictionary () . select ( factor names ) . values () return ee .
- You can use polygons to train as illustrated in the following example: Code Editor (JavaScript) // Define a function that scales and masks Landsat 8 surface reflectance images. function prepSrL8 ( image ) { // Develop masks for unwanted pixels (fill, cloud, cloud shadow). var qaMask = image . select ( 'QA PIXEL' ). bitwiseAnd ( parseInt ( '11111' , 2 )). eq ( 0 ); var saturationMask = image . select ( 'QA RADSAT' ). eq ( 0 ); // Apply the scaling factors to the appropriate bands. var getFactorImg = function ( factorNames ) { var factorList = image . toDictionary (). select ( factorNames ). values (); return ee .
- 1984 ) to predict three simple classes: Code Editor (JavaScript) // Define a function that scales and masks Landsat 8 surface reflectance images. function prepSrL8 ( image ) { // Develop masks for unwanted pixels (fill, cloud, cloud shadow). var qaMask = image . select ( 'QA PIXEL' ). bitwiseAnd ( parseInt ( '11111' , 2 )). eq ( 0 ); var saturationMask = image . select ( 'QA RADSAT' ). eq ( 0 ); // Apply the scaling factors to the appropriate bands. var getFactorImg = function ( factorNames ) { var factorList = image . toDictionary (). select ( factorNames ). values (); return ee .

### "Image computations with the Earth Engine REST API \_|\_ Google Earth Engine\

- URL: [https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image](https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image)
- Source ID: `site-docs-reference`
- Final score: 83
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Here the coordinate system is geographic, so the transform is specified with scale in degrees and geographic coordinates of the upper left corner of the requested image patch. import json url = 'https://earthengine.googleapis.com/v1beta/projects/ {} /image:computePixels' url = url . format ( PROJECT ) response = session . post ( url = url , data = json . dumps ({ 'expression' : serialized , 'fileFormat' : 'PNG' , 'bandIds' : [ 'B4' , 'B3' , 'B2' ], 'grid' : { 'dimensions' : { 'width' : 640 , 'height' : 640 }, 'affineTransform' : { 'scaleX' : scale x , 'shearX' : 0 , 'translateX' : coords [ 0 ], 'shearY' : 0 , 'scaleY' : scale y , 'translateY' : coords [ 1 ] }, 'crsCode' : 'EPSG:4326' , }, 'visualizationOptions' : { 'ranges' : [{ 'min' : 0 , 'max' : 3000 }]}, }) ) image content = response . content If you are running this in a notebook, you can display the results using the IPython image display widget.
- ImageCollection (' COPERNICUS / S2 ') collection = collection . filterBounds ( region ) collection = collection . filterDate (' 2020 - 04 - 01 ', ' 2020 - 09 - 01 ') image = collection . median () Serialize the expression graph This will create an object that represents the Earth Engine expression graph (specifically, an Expression ).
- Import the Image function from the IPython.display module. from IPython.display import Image Image ( image content ) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Make a projection to discover the scale in degrees. proj = ee.Projection('EPSG:4326').atScale(10).getInfo() Get scales out of the transform. scale x = proj['transform'][0] scale y = -proj['transform'][4] Send the request Make a POST request to the computePixels endpoint.

### Image Charts \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/charts_image](https://developers.google.com/earth-engine/guides/charts_image)
- Source ID: `site-docs-root`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- Reducer . mean (), scale : 5e3 , seriesProperty : 'label' , xLabels : monthNames }) . setChartType ( 'PieChart' ) . setOptions ({ title : 'Average Monthly Precipitation for Forest Ecoregion' , colors : [ '604791' , '1d6b99' , '39a8a7' , '0f8755' , '76b349' , 'f0af07' , 'e37d05' , 'cf513e' , '96356f' , '724173' , '9c4f97' , '696969' ], pieHole : 0.4 }); ui.Chart.image.byClass Line chart The ui.Chart.image.byClass function plots band value statistics for pixels within classified regions of a "class band".
- Filter . eq ( 'NAME' , 'Colorado' )); // Draw a random sample of elevation points from within Colorado. var samp = elev . sample ( { region : colorado , scale : 30 , numPixels : 500 , geometries : true }); // Load PRISM climate normals image collection; convert images to bands. var normClim = ee .
- X-axis : histogram buckets for values of selected bands Y-axis : frequency of pixels qualified for each histogram bucket Example data The following examples rely on a FeatureCollection composed of three ecoregion features that define regions by which to reduce image data.
- Learn how this asset was created . ui.Chart.image.byRegion Column chart In this example, image bands representing average monthly temperature are reduced to the mean among pixels intersecting each of three ecoregions.

