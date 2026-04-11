---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:22:38.408Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "Geometry.fromS2CellId and Geometry.fromS2CellToken"
feature_slug: "geometry-froms2cellid-and-geometry-froms2celltoken"
latest_feature_date: "2024-03-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/docs/release-notes"
  - "https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multigeometry"
  - "https://developers.google.com/earth-engine/guides/classification"
keywords:
  - "geometry"
  - "froms2cellid"
  - "and"
  - "froms2celltoken"
  - "these"
  - "algorithms"
  - "create"
  - "geometries"
---

# Geometry.fromS2CellId and Geometry.fromS2CellToken

Product: Earth Engine Server
Coverage: LOW

## Step 02 Summary

These algorithms create geometries from S2 cell IDs or S2 cell tokens.

## Extended Definition

These algorithms create geometries from S2 cell IDs or S2 cell tokens.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- [https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multigeometry](https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multigeometry)
- [https://developers.google.com/earth-engine/guides/classification](https://developers.google.com/earth-engine/guides/classification)

## Supporting Pages

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- Feature Added Geometry.fromS2CellId() and Geometry.fromS2CellToken() for working with S2 (http://s2geometry.io/) polygons.
- November 11, 2014 Earth Engine Data Catalog Feature Added NOAA/AVHRR Pathfinder V52 L3 (no longer available) November 06, 2014 Earth Engine Server Fixed Fixed Geometry.intersects() and Geometry.contains() incorrectly returning false for some geometries crossing the antimeridian.
- Notable updates include changes to authentication methods, additions of new algorithms for image processing and classification, improvements to geometry handling, and enhancements to the Code Editor interface and charting capabilities.
- November 17, 2014 Earth Engine Server Change Added new Geometry.dissolve() and Feature.dissolve() algorithms, to dissolve the interior boundaries between elements of a MultiGeometry .

### "ee.Algorithms.GeometryConstructors.MultiGeometry \_|\_ Google Earth Engine\

- URL: [https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multigeometry](https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multigeometry)
- Source ID: `site-docs-reference`
- Final score: 136
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Usage Returns ee.Algorithms.GeometryConstructors.MultiGeometry(geometries, crs , geodesic , maxError ) Geometry Argument Type Details geometries List The list of geometries for the MultiGeometry. crs Projection, default: null The coordinate reference system of the coordinates.
- Home Products Google Earth Engine Reference Send feedback ee.Algorithms.GeometryConstructors.MultiGeometry Stay organized with collections Save and categorize content based on your preferences.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-07-13 UTC."],[],[]]
- The default is the geodesic state of the inputs, or true if the inputs are numbers. maxError ErrorMargin, default: null Max error when input geometry must be reprojected to an explicitly requested result projection or geodesic state.

### Supervised Classification \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/classification](https://developers.google.com/earth-engine/guides/classification)
- Source ID: `site-docs-root`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- ImageCollection ( 'LANDSAT/LC08/C02/T1 L2' ) . filterDate ( '2018-01-01' , '2019-01-01' ) . map ( prepSrL8 ) . median (); // Use these bands for prediction. var bands = [ 'SR B2' , 'SR B3' , 'SR B4' , 'SR B5' , 'SR B6' , 'SR B7' ]; // Manually created polygons. var forest1 = ee .
- ImageCollection ( 'LANDSAT/LC08/C02/T1 L2' ) . filterDate ( '2018-01-01' , '2019-01-01' ) . map ( prep sr l8 ) . median ()) Use these bands for prediction. bands = [ 'SR B2' , 'SR B3' , 'SR B4' , 'SR B5' , 'SR B6' , 'SR B7' ] Manually created polygons. forest1 = ee .
- Join . inverted (); // Apply the join. training = join . apply ( training , validation , distFilter ); print ( 'Training size after spatial filtering:' , training . size ()); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Sample the input imagery to get a FeatureCollection of training data. sample = input image . addBands ( modis ) . sample ( region = roi , numPixels = 5000 , seed = 0 , geometries = True , tileScale = 16 ) The randomColumn() method will add a column of uniform random numbers in a column named 'random' by default. sample = sample . randomColumn () split = 0.7 # Roughly 70% training, 30% testing. training = sample . filter ( ee .
- This can be accomplished with a spatial join: Code Editor (JavaScript) // Sample the input imagery to get a FeatureCollection of training data. var sample = input . addBands ( modis ). sample ({ region : roi , numPixels : 5000 , seed : 0 , geometries : true , tileScale : 16 }); // The randomColumn() method will add a column of uniform random // numbers in a column named 'random' by default. sample = sample . randomColumn (); var split = 0.7 ; // Roughly 70% training, 30% testing. var training = sample . filter ( ee .

