---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:27:28.062Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "ee.Filter.expression()"
feature_slug: "ee-filter-expression"
latest_feature_date: "2019-09-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/guides/charts_array"
  - "https://developers.google.com/earth-engine/guides/client_server"
  - "https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multilinestring"
keywords:
  - "ee"
  - "filter"
  - "expression"
  - "converts"
  - "conditional"
  - "boolean"
  - "string"
  - "expressions"
---

# ee.Filter.expression()

Product: Earth Engine Server
Coverage: MEDIUM

## Step 02 Summary

Converts conditional and boolean string expressions into filters.

## Extended Definition

Converts conditional and boolean string expressions into filters.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/guides/charts_array](https://developers.google.com/earth-engine/guides/charts_array)
- [https://developers.google.com/earth-engine/guides/client_server](https://developers.google.com/earth-engine/guides/client_server)
- [https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multilinestring](https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multilinestring)

## Supporting Pages

### Client vs. Server \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/client_server](https://developers.google.com/earth-engine/guides/client_server)
- Source ID: `site-docs-root`
- Final score: 89
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) if server boolean : client conditional = True else : client conditional = False print ( 'Should be False:' , client conditional ) # True!
- To correctly check a server-side boolean, use a server-side function: Not recommended — client-side conditional Code Editor (JavaScript) var clientConditional ; if ( serverBoolean ) { clientConditional = true ; } else { clientConditional = false ; } print ( 'Should be false:' , clientConditional ); // True!
- List ([ 1 , 2 , 3 ]) server boolean = my list . contains ( 5 ) print ( server boolean . getInfo ()) # False As shown in the following example, the variable does not behave in a client-side conditional because it is a server-side object.
- Use server functions for operations like loops and conditionals, using ee.Algorithms.If or filters, when working with server objects to avoid blocking the code.\n"]]

### Array and List Charts \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/charts_array](https://developers.google.com/earth-engine/guides/charts_array)
- Source ID: `site-docs-root`
- Final score: 64
- Re-rank relevance: N/A

Evidence snippets:
- Filter . expression ( 'WRS PATH == 45 && WRS ROW == 30' )); // Reduce image properties to a series of lists; one for each selected property. var propVals = col . reduceColumns ({ reducer : ee .
- Filter . date ( '2018-06-01' , '2018-09-01' )) . select ( 'sur refl b0[0-7]' ) . mean (); // Reduce MODIS reflectance bands by forest region; get a dictionary with // band names as keys, pixel values as lists. var pixelVals = modisSr . reduceRegion ( { reducer : ee .
- LineString ([[ - 122.8 , 47.8 ], [ - 124.5 , 47.8 ]]); // Define a pixel coordinate image. var latLonImg = ee .
- Code Editor (JavaScript) // Import a Landsat 8 collection and filter to a single path/row. var col = ee .

### "ee.Algorithms.GeometryConstructors.MultiLineString \_|\_ Google Earth Engine\

- URL: [https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multilinestring](https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multilinestring)
- Source ID: `site-docs-reference`
- Final score: 61
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-07-13 UTC."],[],["The function MultiLineString creates a geometry object from a list of coordinates.
- Usage Returns ee.Algorithms.GeometryConstructors.MultiLineString(coordinates, crs , geodesic , maxError ) Geometry Argument Type Details coordinates List The list of LineStrings, or to wrap a single LineString, the list of Points or pairs of Numbers in x,y order. crs Projection, default: null The coordinate reference system of the coordinates.
- Home Products Google Earth Engine Reference Send feedback ee.Algorithms.GeometryConstructors.MultiLineString Stay organized with collections Save and categorize content based on your preferences.
- It takes coordinates defining the LineStrings, and optionally, the crs (coordinate reference system), geodesic (true for curved edges, false for straight), and maxError (for reprojection errors).

