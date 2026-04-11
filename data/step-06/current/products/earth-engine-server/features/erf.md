---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:22:38.445Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "erf()"
feature_slug: "erf"
latest_feature_date: "2015-08-12"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-polygon"
  - "https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multipolygon"
  - "https://developers.google.com/earth-engine/guides/ee-vertex-image-predictions"
keywords:
  - "erf"
  - "computes"
  - "the"
  - "error"
  - "function"
  - "on"
  - "ee"
  - "image"
---

# erf()

Product: Earth Engine Server
Coverage: LOW

## Step 02 Summary

Computes the error function on ee.Image, ee.Number, and ee.Array values.

## Extended Definition

Computes the error function on ee.Image, ee.Number, and ee.Array values.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-polygon](https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-polygon)
- [https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multipolygon](https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multipolygon)
- [https://developers.google.com/earth-engine/guides/ee-vertex-image-predictions](https://developers.google.com/earth-engine/guides/ee-vertex-image-predictions)

## Supporting Pages

### "ee.Algorithms.GeometryConstructors.Polygon \_|\_ Google Earth Engine \_\

- URL: [https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-polygon](https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-polygon)
- Source ID: `site-docs-reference`
- Final score: 170
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Usage Returns ee.Algorithms.GeometryConstructors.Polygon(coordinates, crs , geodesic , maxError , evenOdd ) Geometry Argument Type Details coordinates List A list of LinearRings where the first is the shell and the rest are holes, or for a simple polygon, a list of Points or pairs of Numbers in x,y order. crs Projection, default: null The coordinate reference system of the coordinates.
- Page Summary outlined flag The ee.Algorithms.GeometryConstructors.Polygon function constructs a Polygon from given coordinates.
- The function takes several arguments including coordinates, crs, geodesic, maxError, and evenOdd.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-07-13 UTC."],[],[]]

### "ee.Algorithms.GeometryConstructors.MultiPolygon \_|\_ Google Earth Engine\

- URL: [https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multipolygon](https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multipolygon)
- Source ID: `site-docs-reference`
- Final score: 166
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Usage Returns ee.Algorithms.GeometryConstructors.MultiPolygon(coordinates, crs , geodesic , maxError , evenOdd ) Geometry Argument Type Details coordinates List A list of Polygons, or for one simple polygon, a list of Points or pairs of Numbers in x,y order. crs Projection, default: null The coordinate reference system of the coordinates.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-07-13 UTC."],[],["The MultiPolygon constructor creates a geometry from a list of polygon coordinates.
- The default is the geodesic state of the inputs, or true if the inputs are numbers. maxError ErrorMargin, default: null Max error when input geometry must be reprojected to an explicitly requested result projection or geodesic state. evenOdd Boolean, default: true If true, polygon interiors will be determined by the even/odd rule, where a point is inside if it crosses an odd number of edges to reach a point at infinity.
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Image Predictions \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/ee-vertex-image-predictions](https://developers.google.com/earth-engine/guides/ee-vertex-image-predictions)
- Source ID: `site-docs-root-2`
- Final score: 162
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example if you are computing "slope" by mapping the ee.Terrain.slope function over a collection you will need to specify the output type of "slope" in our inference inputs like so: inputTypeOverride = { "slope" : { "type" : "PixelType" , "precision" : "float" , "dimensions" : 0 , "min" : - 100.0 , "max" : 100.0 } } TIP: If you encounter the error message that a band or property "cannot be converted to a tensor," a possible solution is to use a type override to force the input to a given type. inputShapes inputShapes is a dictionary of band names and array-pixel shape.
- Page Summary outlined flag Earth Engine's ee.Model connects to Vertex AI to send image or table data for online predictions, returning results as Earth Engine images or tables. model.predictImage() is used to perform inference on an ee.Image by sending image patches to a hosted model, with the output being an ee.Image .
- Input Options When performing inference using on a ee.Image there are a number of parameters used in the ee.Model connector.
- The model outputs are then returned as Earth Engine images or tables. ee.Model.predictImage Use model.predictImage() to make predictions on an ee.Image using a hosted model.

