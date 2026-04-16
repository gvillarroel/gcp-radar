---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:20.245Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "TIGER/2010/Blocks"
feature_slug: "tiger-2010-blocks"
latest_feature_date: "2017-05-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/TIGER_2010_Blocks"
  - "https://developers.google.com/earth-engine/datasets/catalog"
  - "https://developers.google.com/earth-engine/datasets/tags/infrastructure-boundaries"
keywords:
  - "tiger"
  - "2010"
  - "blocks"
  - "us"
  - "census"
---

# TIGER/2010/Blocks

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

US Census blocks.

## Extended Definition

US Census blocks.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/TIGER_2010_Blocks](https://developers.google.com/earth-engine/datasets/catalog/TIGER_2010_Blocks)
- [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- [https://developers.google.com/earth-engine/datasets/tags/infrastructure-boundaries](https://developers.google.com/earth-engine/datasets/tags/infrastructure-boundaries)

## Supporting Pages

### TIGER: US Census Blocks | Earth Engine Data Catalog | Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog/TIGER_2010_Blocks](https://developers.google.com/earth-engine/datasets/catalog/TIGER_2010_Blocks)
- Source ID: `feature-recovery-direct-http`
- Final score: 304
- Re-rank relevance: N/A

Evidence snippets:
- For full technical details … TIGER/2010/Blocks, census,city,infrastructure-boundaries,neighborhood,table,tiger,urban,us 2010-01-01T00:00:00Z/2010-01-02T00:00:00Z -14.69 -180 71.567 -64.435 Google Earth Engine https://developers.google.com/earth-engine/datasets Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],["The United States Census Bureau provides the TIGER dataset, which includes 2010 census blocks, containing over 11 million polygon features for the US, D.C., Puerto Rico, and Island areas.
- FeatureViewLayer ( 'TIGER/2010/Blocks_FeatureView' ); var visParams = { opacity : 1 , color : { property : 'pop10' , mode : 'linear' , palette : [ 'black' , 'brown' , 'yellow' , 'orange' , 'red' ], min : 0 , max : 700 } }; fvLayer . setVisParams ( visParams ); fvLayer . setName ( 'US census blocks' ); Map . setCenter ( - 73.99172 , 40.74101 , 13 ); Map . add ( fvLayer ); Open in Code Editor TIGER: US Census Blocks The United States Census Bureau regularly releases a geodatabase named TIGER.
- Dataset Availability 2010-01-01T00:00:00Z–2010-01-02T00:00:00Z Dataset Producer United States Census Bureau Earth Engine Snippet FeatureCollection ee.FeatureCollection("TIGER/2010/Blocks") open_in_new FeatureView ui.Map.FeatureViewLayer("TIGER/2010/Blocks_FeatureView") open_in_new Tags census city infrastructure-boundaries neighborhood table tiger urban us Description The United States Census Bureau regularly releases a geodatabase named TIGER.
- Image (). float (). paint ( dataset , 'pop10' ); Map . setCenter ( - 73.99172 , 40.74101 , 13 ); Map . addLayer ( image , visParams , 'TIGER/2010/Blocks' ); Map . addLayer ( dataset , null , 'for Inspector' , false ); Open in Code Editor Visualize as a FeatureView A FeatureView is a view-only, accelerated representation of a FeatureCollection .

### Earth Engine Data Catalog \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- Source ID: `site-docs-root`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- There are just over eight million polygon features covering the United States, the District of Columbia, Puerto Rico, and the Island … census city infrastructure-boundaries neighborhood table tiger TIGER: US Census Block Groups (BG) 2010 The United States Census Bureau regularly releases a geodatabase named TIGER.
- This dataset contains the 2010 census block groups, which is a cluster of blocks within the same census tract that have the same first digit of their four-digit census block number.
- There are just … census city infrastructure-boundaries neighborhood table tiger TIGER: US Census Blocks The United States Census Bureau regularly releases a geodatabase named TIGER.
- This dataset contains the 2010 census blocks, roughly equivalent to a city block.

### "Datasets tagged infrastructure-boundaries in Earth Engine \_|\_ Earth Engine\

- URL: [https://developers.google.com/earth-engine/datasets/tags/infrastructure-boundaries](https://developers.google.com/earth-engine/datasets/tags/infrastructure-boundaries)
- Source ID: `site-docs-root-3`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- There are just over eight million polygon features covering the United States, the District of Columbia, Puerto Rico, and the Island … census city infrastructure-boundaries neighborhood table tiger TIGER: US Census Block Groups (BG) 2010 The United States Census Bureau regularly releases a geodatabase named TIGER.
- This dataset contains the 2010 census block groups, which is a cluster of blocks within the same census tract that have the same first digit of their four-digit census block number.
- There are just … census city infrastructure-boundaries neighborhood table tiger TIGER: US Census Blocks The United States Census Bureau regularly releases a geodatabase named TIGER.
- This dataset contains the 2010 census blocks, roughly equivalent to a city block.

