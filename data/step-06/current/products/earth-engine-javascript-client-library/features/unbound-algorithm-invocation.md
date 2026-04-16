---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T14:11:21.000Z"
product_name: "Earth Engine JavaScript Client Library"
product_slug: "earth-engine-javascript-client-library"
feature_name: "Unbound algorithm invocation"
feature_slug: "unbound-algorithm-invocation"
latest_feature_date: "2013-07-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/guides/landsat"
  - "https://developers.google.com/earth-engine/apidocs/ee-algorithms-date"
  - "https://developers.google.com/earth-engine/apidocs/ee-algorithms-describe"
keywords:
  - "unbound"
  - "algorithm"
  - "invocation"
  - "you"
  - "can"
  - "call"
  - "algorithms"
  - "ee"
---

# Unbound algorithm invocation

Product: Earth Engine JavaScript Client Library
Coverage: MEDIUM

## Step 02 Summary

You can call unbound algorithms using the ee.Algorithms.algorithmName() syntax.

## Extended Definition

You can call unbound algorithms using the ee.Algorithms.algorithmName() syntax.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/guides/landsat](https://developers.google.com/earth-engine/guides/landsat)
- [https://developers.google.com/earth-engine/apidocs/ee-algorithms-date](https://developers.google.com/earth-engine/apidocs/ee-algorithms-date)
- [https://developers.google.com/earth-engine/apidocs/ee-algorithms-describe](https://developers.google.com/earth-engine/apidocs/ee-algorithms-describe)

## Supporting Pages

### Landsat Algorithms \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/landsat](https://developers.google.com/earth-engine/guides/landsat)
- Source ID: `site-docs-reference`
- Final score: 107
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ImageCollection ( 'LANDSAT/LC09/C02/T1 L2' ) Simple cloud score For scoring Landsat pixels by their relative cloudiness, Earth Engine provides a rudimentary cloud scoring algorithm in the ee.Algorithms.Landsat.simpleCloudScore() method. (For details on the implementation, see this Code Editor sample script ).
- Home Products Google Earth Engine Reference Send feedback Landsat Algorithms Stay organized with collections Save and categorize content based on your preferences.
- Simple composite For creating simple cloud-free Landsat composites, Earth Engine provides the ee.Algorithms.Landsat.simpleComposite() method.
- The ee.Algorithms.Landsat.calibratedRadiance() method performs this conversion.

### ee.Algorithms.Date \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/apidocs/ee-algorithms-date](https://developers.google.com/earth-engine/apidocs/ee-algorithms-date)
- Source ID: `site-docs-reference`
- Final score: 93
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-07-13 UTC."],[],["The ee.Algorithms.Date function creates a Date object.
- Usage Returns ee.Algorithms.Date(value, timeZone ) Date Argument Type Details value Object A number (interpreted as milliseconds since 1970-01-01T00:00:00Z), or string such as '1996-01-01' or '1996-001' or '1996-01-01T08:00'. timeZone String, default: null The time zone (e.g., 'America/Los Angeles'); defaults to UTC.
- Home Products Google Earth Engine Reference Send feedback ee.Algorithms.Date Stay organized with collections Save and categorize content based on your preferences.

### ee.Algorithms.Describe \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/apidocs/ee-algorithms-describe](https://developers.google.com/earth-engine/apidocs/ee-algorithms-describe)
- Source ID: `site-docs-reference`
- Final score: 93
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2023-10-06 UTC."],[],["The ee.Algorithms.Describe(input) function analyzes an object.
- Home Products Google Earth Engine Reference Send feedback ee.Algorithms.Describe Stay organized with collections Save and categorize content based on your preferences.
- Usage Returns ee.Algorithms.Describe(input) Object Argument Type Details input Object The object to describe.

