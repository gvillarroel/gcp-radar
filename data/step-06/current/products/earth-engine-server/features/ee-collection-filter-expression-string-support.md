---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:22:38.416Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "ee.Collection.filter() expression-string support"
feature_slug: "ee-collection-filter-expression-string-support"
latest_feature_date: "2019-09-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/docs/release-notes"
  - "https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multilinestring"
  - "https://developers.google.com/earth-engine/guides/exporting_to_bigquery"
keywords:
  - "ee"
  - "collection"
  - "filter"
  - "expression"
  - "string"
  - "allows"
  - "to"
  - "accept"
---

# ee.Collection.filter() expression-string support

Product: Earth Engine Server
Coverage: LOW

## Step 02 Summary

Allows ee.Collection.filter() to accept expression strings.

## Extended Definition

Allows ee.Collection.filter() to accept expression strings.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- [https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multilinestring](https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multilinestring)
- [https://developers.google.com/earth-engine/guides/exporting_to_bigquery](https://developers.google.com/earth-engine/guides/exporting_to_bigquery)

## Supporting Pages

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- September 10, 2019 Earth Engine Data Catalog Feature Added NASA/GPM L3/IMERG V06 (no longer available) September 05, 2019 Earth Engine Server Feature Added ee.Filter.expression() to convert conditional and boolean string expressions into filters and allow ee.Collection.filter() to take expression strings.
- Note that some parameters needed to be renamed after removing opt since they conflict with Python keywords: ee.Collection.limit() : opt property was converted to prop ee.Image.expression() : opt map was converted to map ee.Filter() : opt filter which was converted to filter Feature Added Export.classifier.toAsset and ee.Classifier.load for exporting and loading saved ee.Classifier.smileCart and ee.Classifier.smileRandomForest classifiers.
- February 15, 2022 Earth Engine Data Catalog Feature Added COPERNICUS/S2 HARMONIZED : Harmonized Sentinel-2 MSI: MultiSpectral Instrument, Level-1C (TOA) February 08, 2022 Earth Engine Data Catalog Feature Added LANDSAT/LT05/C02/T1 : USGS Landsat 5 TM Collection 2 Tier 1 Raw Scenes Added LANDSAT/LT05/C02/T2 : USGS Landsat 5 TM Collection 2 Tier 2 Raw Scenes February 01, 2022 Earth Engine Data Catalog Feature Added LANDSAT/LE07/C02/T1 : USGS Landsat 7 Collection 2 Tier 1 Raw Scenes Added LANDSAT/LE07/C02/T1 RT : USGS Landsat 7 Collection 2 Tier 1 and Real-Time data Raw Scenes Added LANDSAT/LE07/C02/T2 : USGS Landsat 7 Collection 2 Tier 2 Raw Scenes January 25, 2022 Earth Engine Data Catalog Feature Added LANDSAT/LC08/C02/T1 : USGS Landsat 8 Collection 2 Tier 1 Raw Scenes Added LANDSAT/LC08/C02/T1 RT : USGS Landsat 8 Collection 2 Tier 1 and Real-Time data Raw Scenes Added LANDSAT/LC08/C02/T2 : USGS Landsat 8 Collection 2 Tier 2 Raw Scenes Added TERN/AET/CMRSET LANDSAT V2 2 : Actual Evapotranspiration for Australia (CMRSET Landsat V2.2) January 06, 2022 Earth Engine Server Feature Added ee.String.equals() .
- To refer to the geometry in contexts like ee.Filter.intersects() , ee.Filter.equals() , and ee.FeatureCollection.getDownloadURL() , use a special value ".geo".

### "ee.Algorithms.GeometryConstructors.MultiLineString \_|\_ Google Earth Engine\

- URL: [https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multilinestring](https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multilinestring)
- Source ID: `site-docs-reference`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Home Products Google Earth Engine Reference Send feedback ee.Algorithms.GeometryConstructors.MultiLineString Stay organized with collections Save and categorize content based on your preferences.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-07-13 UTC."],[],["The function MultiLineString creates a geometry object from a list of coordinates.
- Usage Returns ee.Algorithms.GeometryConstructors.MultiLineString(coordinates, crs , geodesic , maxError ) Geometry Argument Type Details coordinates List The list of LineStrings, or to wrap a single LineString, the list of Points or pairs of Numbers in x,y order. crs Projection, default: null The coordinate reference system of the coordinates.
- All noncommercial projects will need to select a quota tier by April 27, 2026 or will use the Community Tier by default.

### Exporting to BigQuery \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/exporting_to_bigquery](https://developers.google.com/earth-engine/guides/exporting_to_bigquery)
- Source ID: `site-docs-root-2`
- Final score: 138
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To have finer control over this transformation process, you can manually map over the features and transform their geometries, e.g.: Code Editor (JavaScript) var transformedCollection = originalCollection . map ( function transformGeo ( e ) { var myErrorMargin = 10 1000 ; // meters return e . setGeometry ( e . geometry ( myErrorMargin , 'EPSG:4326' , true )); }); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) def transform geo ( e ): my error margin = 10 1000 # meters return e . setGeometry ( e . geometry ( my error margin , 'EPSG:4326' , True )) transformed collection = original collection . map ( transform geo ) Caution: Polygons larger than a hemisphere may have their orientation reversed during export.
- The total number of values in the flattened array is $\sum {i=1}^n d i$, and the value at index $(i i, \ldots, i n)$ in the original Earth Engine array corresponds to the value at the following index in the flattened array: \[ \sum {j=1}^n \left( i j \cdot \prod {k=j+1}^n d k \right) \] For common cases, the indexing expression for the values array is as follows: Array Size Dimensions Indexing Expression 1-dimensional d1 [i1] 2-dimensional d1, d2 [(i1 d2) + i2] 3-dimensional d1, d2, d3 [(i1 d2 d3) + (i2 d3) + i3] For example, consider a 2x3x4 Earth Engine array: ee .
- Earth Engine type BigQuery type Notes ee.String STRING ee.Number FLOAT or INTEGER ee.Geometry GEOGRAPHY ee.Date TIMESTAMP ee.ByteString BYTES ee.Array STRUCT<ARRAY<INT64>, ARRAY<INT64 FLOAT64>> See the section on arrays Other ee. types not supported See the section on JSON values Arrays Earth Engine exports any multi-dimensional ee.Array to STRUCT<ARRAY<INT64> dimensions, ARRAY<INT64 FLOAT64> values> , similar to the format used by BigQuery's ML.DECODE IMAGE function.
- Export configuration Syntax Code Editor (JavaScript) Export . table . toBigQuery ({ collection : features , table : 'myproject.mydataset.mytable' , description : 'put my data in bigquery' , append : true , overwrite : false }); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) task = ee . batch .

