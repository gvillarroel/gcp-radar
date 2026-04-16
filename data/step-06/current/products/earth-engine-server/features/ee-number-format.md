---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:27:28.217Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "ee.Number.format()"
feature_slug: "ee-number-format"
latest_feature_date: "2016-03-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/guides/ee-vertex-payload-formats"
  - "https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multilinestring"
  - "https://developers.google.com/earth-engine/guides/computation_overview"
keywords:
  - "ee"
  - "number"
  - "format"
  - "formats"
  - "string"
---

# ee.Number.format()

Product: Earth Engine Server
Coverage: MEDIUM

## Step 02 Summary

Formats a number as a string.

## Extended Definition

Formats a number as a string.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/guides/ee-vertex-payload-formats](https://developers.google.com/earth-engine/guides/ee-vertex-payload-formats)
- [https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multilinestring](https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multilinestring)
- [https://developers.google.com/earth-engine/guides/computation_overview](https://developers.google.com/earth-engine/guides/computation_overview)

## Supporting Pages

### "Hosted Model Payload Formats Supported on Earth Engine \_|\_ Google Earth\

- URL: [https://developers.google.com/earth-engine/guides/ee-vertex-payload-formats](https://developers.google.com/earth-engine/guides/ee-vertex-payload-formats)
- Source ID: `site-docs-root-2`
- Final score: 142
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Earth Engine also supports HTTP API payloads with formats like SERIALIZED TF TENSORS (default for TensorFlow), RAW JSON (flexible for other frameworks like PyTorch and AutoML but converts numbers to strings), and ND ARRAYS (similar to RAW JSON but without keys, suitable for PyTorch).
- Users configure the payload format using payloadFormat in ee.Model.fromVertexAi. gRPC is preferred for lower latency and higher reliability, using formats like GRPC TF TENSORS, GRPC SERIALIZED TF TENSORS, or GRPC SERIALIZED TF EXAMPLES.
- HTTP API payloads are also supported, including SERIALIZED TF TENSORS (default for TensorFlow), RAW JSON (for PyTorch/AutoML, converting numbers to strings), and ND ARRAYS (similar to RAW JSON, but without keys).
- Home Products Google Earth Engine Guides Send feedback Hosted Model Payload Formats Supported on Earth Engine Stay organized with collections Save and categorize content based on your preferences.

### "ee.Algorithms.GeometryConstructors.MultiLineString \_|\_ Google Earth Engine\

- URL: [https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multilinestring](https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multilinestring)
- Source ID: `site-docs-reference`
- Final score: 83
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-07-13 UTC."],[],["The function MultiLineString creates a geometry object from a list of coordinates.
- Usage Returns ee.Algorithms.GeometryConstructors.MultiLineString(coordinates, crs , geodesic , maxError ) Geometry Argument Type Details coordinates List The list of LineStrings, or to wrap a single LineString, the list of Points or pairs of Numbers in x,y order. crs Projection, default: null The coordinate reference system of the coordinates.
- The function returns a Geometry object representing the constructed MultiLineString. coordinates can be a list of LineStrings, points or a list of number pairs in x,y order.\n"]]
- The default is the geodesic state of the inputs, or true if the inputs are numbers. maxError ErrorMargin, default: null Max error when input geometry must be reprojected to an explicitly requested result projection or geodesic state.

### Computation Overview \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/computation_overview](https://developers.google.com/earth-engine/guides/computation_overview)
- Source ID: `site-docs-root`
- Final score: 79
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Number ( 3.14 ) . add ( 0.00159 ) . getInfo ()) print ( 'Output:' ) print ( out . getvalue ()) Here is a suggestion for turning the profile string into a table for easier analysis in Colab and Jupyter Notebooks (note that this is just one approach and may not be suitable for all cases): import re import pandas as pd lines = out . getvalue () . split ( ' \n ' ) column names = re . split ( r '\s{1,}' , lines [ 0 ]) column names = [ name . strip () for name in column names if name . strip ()] data = [ [ element for element in re . split ( r '\s{2,}' , line ) if element . strip ()] for line in lines [ 1 : - 1 ] ] df = pd .
- Common drivers of differences include: caching , such as reusing the results of previous computations (including partial or intermediate results) different underlying data , such as varying numbers of satellite images, geometries of different complexity, etc. algorithm changes on the EE platform, including performance optimizations, bugfixes, etc. changes to client libraries , particularly if you depend on other users' EE code or packages Benchmarks Explore sample Earth Engine computation benchmarks .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-01-21 UTC."],[],[]]
- Profiler The profiler provides information about EECU-time and memory usage (per algorithm and asset) resulting from the computation performed while it's enabled.

