---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:22:38.436Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "ee.Feature.setGeometry()"
feature_slug: "ee-feature-setgeometry"
latest_feature_date: "2016-06-02"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multigeometry"
  - "https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multilinestring"
  - "https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multipoint"
keywords:
  - "ee"
  - "setgeometry"
  - "sets"
  - "or"
  - "overrides"
  - "the"
  - "geometry"
  - "of"
---

# ee.Feature.setGeometry()

Product: Earth Engine Server
Coverage: LOW

## Step 02 Summary

Sets or overrides the geometry of an existing feature.

## Extended Definition

Sets or overrides the geometry of an existing feature.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multigeometry](https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multigeometry)
- [https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multilinestring](https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multilinestring)
- [https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multipoint](https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multipoint)

## Supporting Pages

### "ee.Algorithms.GeometryConstructors.MultiGeometry \_|\_ Google Earth Engine\

- URL: [https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multigeometry](https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multigeometry)
- Source ID: `site-docs-reference`
- Final score: 224
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Usage Returns ee.Algorithms.GeometryConstructors.MultiGeometry(geometries, crs , geodesic , maxError ) Geometry Argument Type Details geometries List The list of geometries for the MultiGeometry. crs Projection, default: null The coordinate reference system of the coordinates.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-07-13 UTC."],[],[]]
- The default is the geodesic state of the inputs, or true if the inputs are numbers. maxError ErrorMargin, default: null Max error when input geometry must be reprojected to an explicitly requested result projection or geodesic state.
- Home Products Google Earth Engine Reference Send feedback ee.Algorithms.GeometryConstructors.MultiGeometry Stay organized with collections Save and categorize content based on your preferences.

### "ee.Algorithms.GeometryConstructors.MultiLineString \_|\_ Google Earth Engine\

- URL: [https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multilinestring](https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multilinestring)
- Source ID: `site-docs-reference`
- Final score: 200
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-07-13 UTC."],[],["The function MultiLineString creates a geometry object from a list of coordinates.
- Usage Returns ee.Algorithms.GeometryConstructors.MultiLineString(coordinates, crs , geodesic , maxError ) Geometry Argument Type Details coordinates List The list of LineStrings, or to wrap a single LineString, the list of Points or pairs of Numbers in x,y order. crs Projection, default: null The coordinate reference system of the coordinates.
- The default is the geodesic state of the inputs, or true if the inputs are numbers. maxError ErrorMargin, default: null Max error when input geometry must be reprojected to an explicitly requested result projection or geodesic state.
- The function returns a Geometry object representing the constructed MultiLineString. coordinates can be a list of LineStrings, points or a list of number pairs in x,y order.\n"]]

### "ee.Algorithms.GeometryConstructors.MultiPoint \_|\_ Google Earth Engine\

- URL: [https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multipoint](https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multipoint)
- Source ID: `site-docs-reference`
- Final score: 200
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-07-13 UTC."],[],["This document describes how to create a MultiPoint geometry object.
- Usage Returns ee.Algorithms.GeometryConstructors.MultiPoint(coordinates, crs ) Geometry Argument Type Details coordinates List The list of Points or pairs of Numbers in x,y order. crs Projection, default: null The coordinate reference system of the coordinates.
- The ee.Algorithms.GeometryConstructors.MultiPoint function takes a list of coordinates as input, which can be either individual points or x,y number pairs.
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

