---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:22:38.414Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "ee.Geometry.BBox"
feature_slug: "ee-geometry-bbox"
latest_feature_date: "2020-08-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-bbox"
  - "https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multigeometry"
  - "https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multilinestring"
keywords:
  - "ee"
  - "geometry"
  - "bbox"
  - "simplifies"
  - "creation"
  - "of"
  - "latitude"
  - "longitude"
---

# ee.Geometry.BBox

Product: Earth Engine Server
Coverage: LOW

## Step 02 Summary

Simplifies creation of latitude-longitude rectangles.

## Extended Definition

Simplifies creation of latitude-longitude rectangles.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-bbox](https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-bbox)
- [https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multigeometry](https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multigeometry)
- [https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multilinestring](https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multilinestring)

## Supporting Pages

### "ee.Algorithms.GeometryConstructors.BBox \_|\_ Google Earth Engine \_|\_\

- URL: [https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-bbox](https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-bbox)
- Source ID: `site-docs-reference`
- Final score: 179
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-07-13 UTC."],[],["This describes creating a WGS84 rectangle using latitude and longitude.
- Usage Returns ee.Algorithms.GeometryConstructors.BBox(west, south, east, north) Geometry Argument Type Details west Float The westernmost enclosed longitude.
- Home Products Google Earth Engine Reference Send feedback ee.Algorithms.GeometryConstructors.BBox Stay organized with collections Save and categorize content based on your preferences.
- Constructs a rectangle whose edges are lines of latitude and longitude.

### "ee.Algorithms.GeometryConstructors.MultiGeometry \_|\_ Google Earth Engine\

- URL: [https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multigeometry](https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multigeometry)
- Source ID: `site-docs-reference`
- Final score: 129
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
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-07-13 UTC."],[],["The function MultiLineString creates a geometry object from a list of coordinates.
- Usage Returns ee.Algorithms.GeometryConstructors.MultiLineString(coordinates, crs , geodesic , maxError ) Geometry Argument Type Details coordinates List The list of LineStrings, or to wrap a single LineString, the list of Points or pairs of Numbers in x,y order. crs Projection, default: null The coordinate reference system of the coordinates.
- The default is the geodesic state of the inputs, or true if the inputs are numbers. maxError ErrorMargin, default: null Max error when input geometry must be reprojected to an explicitly requested result projection or geodesic state.
- Home Products Google Earth Engine Reference Send feedback ee.Algorithms.GeometryConstructors.MultiLineString Stay organized with collections Save and categorize content based on your preferences.

