---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:22:38.410Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "ee.String.equals"
feature_slug: "ee-string-equals"
latest_feature_date: "2022-01-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/docs/release-notes"
  - "https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multilinestring"
  - "https://developers.google.com/earth-engine/guides/debugging"
keywords:
  - "ee"
  - "string"
  - "equals"
  - "this"
  - "method"
  - "compares"
  - "two"
  - "strings"
---

# ee.String.equals

Product: Earth Engine Server
Coverage: LOW

## Step 02 Summary

This method compares two strings for equality.

## Extended Definition

This method compares two strings for equality.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- [https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multilinestring](https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multilinestring)
- [https://developers.google.com/earth-engine/guides/debugging](https://developers.google.com/earth-engine/guides/debugging)

## Supporting Pages

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- February 15, 2022 Earth Engine Data Catalog Feature Added COPERNICUS/S2 HARMONIZED : Harmonized Sentinel-2 MSI: MultiSpectral Instrument, Level-1C (TOA) February 08, 2022 Earth Engine Data Catalog Feature Added LANDSAT/LT05/C02/T1 : USGS Landsat 5 TM Collection 2 Tier 1 Raw Scenes Added LANDSAT/LT05/C02/T2 : USGS Landsat 5 TM Collection 2 Tier 2 Raw Scenes February 01, 2022 Earth Engine Data Catalog Feature Added LANDSAT/LE07/C02/T1 : USGS Landsat 7 Collection 2 Tier 1 Raw Scenes Added LANDSAT/LE07/C02/T1 RT : USGS Landsat 7 Collection 2 Tier 1 and Real-Time data Raw Scenes Added LANDSAT/LE07/C02/T2 : USGS Landsat 7 Collection 2 Tier 2 Raw Scenes January 25, 2022 Earth Engine Data Catalog Feature Added LANDSAT/LC08/C02/T1 : USGS Landsat 8 Collection 2 Tier 1 Raw Scenes Added LANDSAT/LC08/C02/T1 RT : USGS Landsat 8 Collection 2 Tier 1 and Real-Time data Raw Scenes Added LANDSAT/LC08/C02/T2 : USGS Landsat 8 Collection 2 Tier 2 Raw Scenes Added TERN/AET/CMRSET LANDSAT V2 2 : Actual Evapotranspiration for Australia (CMRSET Landsat V2.2) January 06, 2022 Earth Engine Server Feature Added ee.String.equals() .
- September 10, 2019 Earth Engine Data Catalog Feature Added NASA/GPM L3/IMERG V06 (no longer available) September 05, 2019 Earth Engine Server Feature Added ee.Filter.expression() to convert conditional and boolean string expressions into filters and allow ee.Collection.filter() to take expression strings.
- Also made PixelType() idempotent and adds the following methods: PixelType.uint8() PixelType.uint16() PixelType.uint32() PixelType.int8() PixelType.int16() PixelType.int32() PixelType.int64() PixelType.float() PixelType.double() Made Image.paint() respect line width for LineStrings.
- Feature Added ee.Blob(url) to allow type checking of the url argument and catch strings that don't start with gs:// when possible on the client side.

### "ee.Algorithms.GeometryConstructors.MultiLineString \_|\_ Google Earth Engine\

- URL: [https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multilinestring](https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multilinestring)
- Source ID: `site-docs-reference`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- Usage Returns ee.Algorithms.GeometryConstructors.MultiLineString(coordinates, crs , geodesic , maxError ) Geometry Argument Type Details coordinates List The list of LineStrings, or to wrap a single LineString, the list of Points or pairs of Numbers in x,y order. crs Projection, default: null The coordinate reference system of the coordinates.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-07-13 UTC."],[],["The function MultiLineString creates a geometry object from a list of coordinates.
- Home Products Google Earth Engine Reference Send feedback ee.Algorithms.GeometryConstructors.MultiLineString Stay organized with collections Save and categorize content based on your preferences.
- It takes coordinates defining the LineStrings, and optionally, the crs (coordinate reference system), geodesic (true for curved edges, false for straight), and maxError (for reprojection errors).

### Debugging guide \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/debugging](https://developers.google.com/earth-engine/guides/debugging)
- Source ID: `site-docs-root`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- Point ([ - 123 , 43 ]) ) def apply mean aggregation ( image ): return image . set ( image . reduceRegion ( reducer = 'mean' , geometry = image . geometry (), scale = 30 , maxPixels = int ( 1e9 ), ) ) terrible aggregations = collection . map ( apply mean aggregation ) EEException: Computation timed out. print ( terrible aggregations . getInfo ()) Assuming that the purpose of this code is to get image statistics for each image, one possible solution is to Export the result.
- Image ( 'COPERNICUS/S2 HARMONIZED/20160625T100617 20160625T170310 T33UVR' ); s2image . set ( 'myProperty' , 'This image is not assigned to a variable' ); // This will not result in an error, but will not find 'myProperty'. print ( s2image . get ( 'myProperty' )); // null Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) s2image = ee .
- Image ( 'USGS/SRTMGL1 003' ); // Error: "bandNames" is not defined in this scope. var display = image . visualize ({ bands : bandNames , min : 0 , max : 9000 }); // Error: image.selfAnalyze is not a function var silly = image . selfAnalyze (); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Load a Sentinel-2 image. image = ee .
- Image ( 'USGS/SRTMGL1 003' ); var nonsense = image + 2 ; // You can print this, but it's not what you were hoping for. print ( nonsense ); // Error: g.eeObject.name is not a function Map . addLayer ( nonsense ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Don't mix EE objects and Python objects. image = ee .

