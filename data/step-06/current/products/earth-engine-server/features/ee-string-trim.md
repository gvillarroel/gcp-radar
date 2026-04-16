---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:27:28.225Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "ee.String.trim()"
feature_slug: "ee-string-trim"
latest_feature_date: "2016-03-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multilinestring"
  - "https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-linestring"
  - "https://developers.google.com/earth-engine/guides/computation_overview"
keywords:
  - "ee"
  - "string"
  - "trim"
  - "removes"
  - "leading"
  - "trailing"
  - "whitespace"
---

# ee.String.trim()

Product: Earth Engine Server
Coverage: MEDIUM

## Step 02 Summary

Removes leading and trailing whitespace from a string.

## Extended Definition

Removes leading and trailing whitespace from a string.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multilinestring](https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multilinestring)
- [https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-linestring](https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-linestring)
- [https://developers.google.com/earth-engine/guides/computation_overview](https://developers.google.com/earth-engine/guides/computation_overview)

## Supporting Pages

### "ee.Algorithms.GeometryConstructors.MultiLineString \_|\_ Google Earth Engine\

- URL: [https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multilinestring](https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multilinestring)
- Source ID: `site-docs-reference`
- Final score: 60
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-07-13 UTC."],[],["The function MultiLineString creates a geometry object from a list of coordinates.
- Usage Returns ee.Algorithms.GeometryConstructors.MultiLineString(coordinates, crs , geodesic , maxError ) Geometry Argument Type Details coordinates List The list of LineStrings, or to wrap a single LineString, the list of Points or pairs of Numbers in x,y order. crs Projection, default: null The coordinate reference system of the coordinates.
- Home Products Google Earth Engine Reference Send feedback ee.Algorithms.GeometryConstructors.MultiLineString Stay organized with collections Save and categorize content based on your preferences.
- It takes coordinates defining the LineStrings, and optionally, the crs (coordinate reference system), geodesic (true for curved edges, false for straight), and maxError (for reprojection errors).

### "ee.Algorithms.GeometryConstructors.LineString \_|\_ Google Earth Engine\

- URL: [https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-linestring](https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-linestring)
- Source ID: `site-docs-reference`
- Final score: 52
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Usage Returns ee.Algorithms.GeometryConstructors.LineString(coordinates, crs , geodesic , maxError ) Geometry Argument Type Details coordinates List The list of Points or pairs of Numbers in x,y order. crs Projection, default: null The coordinate reference system of the coordinates.
- Home Products Google Earth Engine Reference Send feedback ee.Algorithms.GeometryConstructors.LineString Stay organized with collections Save and categorize content based on your preferences.
- Constructs a LineString from the given coordinates.

### Computation Overview \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/computation_overview](https://developers.google.com/earth-engine/guides/computation_overview)
- Source ID: `site-docs-root`
- Final score: 43
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Number ( 3.14 ) . add ( 0.00159 ) . getInfo ()) print ( 'Output:' ) print ( out . getvalue ()) Here is a suggestion for turning the profile string into a table for easier analysis in Colab and Jupyter Notebooks (note that this is just one approach and may not be suitable for all cases): import re import pandas as pd lines = out . getvalue () . split ( ' \n ' ) column names = re . split ( r '\s{1,}' , lines [ 0 ]) column names = [ name . strip () for name in column names if name . strip ()] data = [ [ element for element in re . split ( r '\s{2,}' , line ) if element . strip ()] for line in lines [ 1 : - 1 ] ] df = pd .
- Metrics for failed requests Earth Engine doesn't provide performance metrics for failed requests/tasks, since these numbers would be inaccurate or misleading.
- To capture the profile as a string, write the profile to a string buffer: import io out = io .
- StringIO () with ee . profilePrinting ( destination = out ) as p : print ( ee .

