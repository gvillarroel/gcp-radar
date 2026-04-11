---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:22:38.443Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "cbrt()"
feature_slug: "cbrt"
latest_feature_date: "2015-08-12"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multipolygon"
  - "https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-polygon"
  - "https://developers.google.com/earth-engine/guides/ee-vertex-image-predictions"
keywords:
  - "cbrt"
  - "computes"
  - "the"
  - "cube"
  - "root"
  - "on"
  - "ee"
  - "image"
---

# cbrt()

Product: Earth Engine Server
Coverage: LOW

## Step 02 Summary

Computes the cube root on ee.Image, ee.Number, and ee.Array values.

## Extended Definition

Computes the cube root on ee.Image, ee.Number, and ee.Array values.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multipolygon](https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multipolygon)
- [https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-polygon](https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-polygon)
- [https://developers.google.com/earth-engine/guides/ee-vertex-image-predictions](https://developers.google.com/earth-engine/guides/ee-vertex-image-predictions)

## Supporting Pages

### "ee.Algorithms.GeometryConstructors.MultiPolygon \_|\_ Google Earth Engine\

- URL: [https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multipolygon](https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multipolygon)
- Source ID: `site-docs-reference`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-07-13 UTC."],[],["The MultiPolygon constructor creates a geometry from a list of polygon coordinates.
- Usage Returns ee.Algorithms.GeometryConstructors.MultiPolygon(coordinates, crs , geodesic , maxError , evenOdd ) Geometry Argument Type Details coordinates List A list of Polygons, or for one simple polygon, a list of Points or pairs of Numbers in x,y order. crs Projection, default: null The coordinate reference system of the coordinates.
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- All noncommercial projects will need to select a quota tier by April 27, 2026 or will use the Community Tier by default.

### "ee.Algorithms.GeometryConstructors.Polygon \_|\_ Google Earth Engine \_\

- URL: [https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-polygon](https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-polygon)
- Source ID: `site-docs-reference`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-07-13 UTC."],[],[]]
- Usage Returns ee.Algorithms.GeometryConstructors.Polygon(coordinates, crs , geodesic , maxError , evenOdd ) Geometry Argument Type Details coordinates List A list of LinearRings where the first is the shell and the rest are holes, or for a simple polygon, a list of Points or pairs of Numbers in x,y order. crs Projection, default: null The coordinate reference system of the coordinates.
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Page Summary outlined flag The ee.Algorithms.GeometryConstructors.Polygon function constructs a Polygon from given coordinates.

### Image Predictions \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/ee-vertex-image-predictions](https://developers.google.com/earth-engine/guides/ee-vertex-image-predictions)
- Source ID: `site-docs-root-2`
- Final score: 142
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Page Summary outlined flag Earth Engine's ee.Model connects to Vertex AI to send image or table data for online predictions, returning results as Earth Engine images or tables. model.predictImage() is used to perform inference on an ee.Image by sending image patches to a hosted model, with the output being an ee.Image .
- The model outputs are then returned as Earth Engine images or tables. ee.Model.predictImage Use model.predictImage() to make predictions on an ee.Image using a hosted model.
- Input Options When performing inference using on a ee.Image there are a number of parameters used in the ee.Model connector.
- The return type of predictImage() is an ee.Image which can be added to the map, exported, or used in other computations.

