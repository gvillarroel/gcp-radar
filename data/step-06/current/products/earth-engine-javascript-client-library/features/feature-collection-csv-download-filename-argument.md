---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T14:11:20.996Z"
product_name: "Earth Engine JavaScript Client Library"
product_slug: "earth-engine-javascript-client-library"
feature_name: "Feature collection CSV download filename argument"
feature_slug: "feature-collection-csv-download-filename-argument"
latest_feature_date: "2014-03-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/apidocs/ee-algorithms-collection"
  - "https://developers.google.com/earth-engine/apidocs/ee-algorithms-feature"
  - "https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_table"
keywords:
  - "feature"
  - "collection"
  - "csv"
  - "download"
  - "filename"
  - "argument"
  - "you"
  - "can"
---

# Feature collection CSV download filename argument

Product: Earth Engine JavaScript Client Library
Coverage: MEDIUM

## Step 02 Summary

You can specify a filename when downloading a feature collection as CSV.

## Extended Definition

You can specify a filename when downloading a feature collection as CSV.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/apidocs/ee-algorithms-collection](https://developers.google.com/earth-engine/apidocs/ee-algorithms-collection)
- [https://developers.google.com/earth-engine/apidocs/ee-algorithms-feature](https://developers.google.com/earth-engine/apidocs/ee-algorithms-feature)
- [https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_table](https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_table)

## Supporting Pages

### ee.Algorithms.Collection \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/apidocs/ee-algorithms-collection](https://developers.google.com/earth-engine/apidocs/ee-algorithms-collection)
- Source ID: `site-docs-reference`
- Final score: 86
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Usage Returns ee.Algorithms.Collection(features) FeatureCollection Argument Type Details features List The features comprising the collection.
- Returns a Collection containing the specified features.
- Home Products Google Earth Engine Reference Send feedback ee.Algorithms.Collection Stay organized with collections Save and categorize content based on your preferences.

### ee.Algorithms.Feature \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/apidocs/ee-algorithms-feature](https://developers.google.com/earth-engine/apidocs/ee-algorithms-feature)
- Source ID: `site-docs-reference`
- Final score: 68
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Usage Returns ee.Algorithms.Feature( geometry , metadata , geometryKey ) Feature Argument Type Details geometry Geometry, default: null The geometry of the feature. metadata Dictionary, default: {} The properties of the feature. geometryKey String, default: null Obsolete; has no effect.
- Home Products Google Earth Engine Reference Send feedback ee.Algorithms.Feature Stay organized with collections Save and categorize content based on your preferences.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2023-10-06 UTC."],[],["Creates a Feature object, which represents a spatial entity with associated data.
- The function ee.Algorithms.Feature accepts a geometry (spatial definition) and metadata (a dictionary of properties) as input.

### "Table computations with the Earth Engine REST API \_|\_ Google Earth Engine\

- URL: [https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_table](https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_table)
- Source ID: `site-docs-reference`
- Final score: 53
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note that the request contains the Expression , which is the serialized computation. import json url = 'https://earthengine.googleapis.com/v1beta/projects/ {} /table:computeFeatures' response = session . post ( url = url . format ( PROJECT ), data = json . dumps ({ 'expression' : serialized }) ) import json pprint ( json . loads ( response . content )) The response contains the resultant FeatureCollection as GeoJSON, which can be consumed by other apps or processes.
- Page Summary outlined flag The Earth Engine REST API can be used to apply computations to data and obtain results, as demonstrated by calculating the mean of pixels in an ImageCollection within features of a FeatureCollection.
- This example demonstrates getting the mean of pixels in each image of an ImageCollection in each feature of a FeatureCollection .
- FeatureCollection ( 'TIGER/2018/States' ) maine = states . filter ( ee .

