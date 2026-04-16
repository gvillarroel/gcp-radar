---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:20.247Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "TIGER/2016/Roads"
feature_slug: "tiger-2016-roads"
latest_feature_date: "2017-05-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/TIGER_2016_Roads"
  - "https://developers.google.com/earth-engine/datasets/tags/infrastructure-boundaries"
  - "https://developers.google.com/earth-engine/datasets/catalog"
keywords:
  - "tiger"
  - "2016"
  - "roads"
  - "us"
  - "census"
---

# TIGER/2016/Roads

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

US Census roads.

## Extended Definition

US Census roads.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/TIGER_2016_Roads](https://developers.google.com/earth-engine/datasets/catalog/TIGER_2016_Roads)
- [https://developers.google.com/earth-engine/datasets/tags/infrastructure-boundaries](https://developers.google.com/earth-engine/datasets/tags/infrastructure-boundaries)
- [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)

## Supporting Pages

### TIGER: US Census Roads | Earth Engine Data Catalog | Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog/TIGER_2016_Roads](https://developers.google.com/earth-engine/datasets/catalog/TIGER_2016_Roads)
- Source ID: `feature-recovery-direct-http`
- Final score: 304
- Re-rank relevance: N/A

Evidence snippets:
- Each feature represents a road segment geometry (a single navigable linear path connected … TIGER/2016/Roads, census,infrastructure-boundaries,roads,table,tiger,us 2016-01-01T00:00:00Z/2017-01-02T00:00:00Z -14.69 -180 71.567 -64.435 Google Earth Engine https://developers.google.com/earth-engine/datasets Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]] GitHub Earth Engine on GitHub Medium Follow our blog on Medium GIS Stack Exchange Ask questions using the google-earth-engine tag Twitter Follow @googleearth on Twitter Videos Earth Engine on YouTube Connect Blog Bluesky Instagram LinkedIn X (Twitter) YouTube Programs Google Developer Program Google Developer Groups Google Developer Experts Accelerators Google Cloud & NVIDIA Developer consoles Google API Console Google Cloud Platform Console Google Play Console Firebase Console Actions on Google Console Cast SDK Developer Console Chrome Web Store Dashboard Google Home Developer Console Android Chrome Firebase Google Cloud Platform Google AI All products Terms Privacy Manage cookies English Deutsch Español Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體 日本語 한국어
- Dataset Availability 2016-01-01T00:00:00Z–2017-01-02T00:00:00Z Dataset Producer United States Census Bureau Earth Engine Snippet FeatureCollection ee.FeatureCollection("TIGER/2016/Roads") open_in_new FeatureView ui.Map.FeatureViewLayer("TIGER/2016/Roads_FeatureView") open_in_new Tags census infrastructure-boundaries roads table tiger us Description This United States Census Bureau TIGER dataset contains all road segments from the 2016 release, containing more than 19 million individual line features covering the United States, the District of Columbia, Puerto Rico, and the Island Areas .
- FeatureViewLayer ( 'TIGER/2016/Roads_FeatureView' ); var visParams = { color : '4285f4' }; fvLayer . setVisParams ( visParams ); fvLayer . setName ( 'US census roads' ); Map . setCenter ( - 73.99172 , 40.74101 , 14 ); Map . add ( fvLayer ); Open in Code Editor TIGER: US Census Roads This United States Census Bureau TIGER dataset contains all road segments from the 2016 release, containing more than 19 million individual line features covering the United States, the District of Columbia, Puerto Rico, and the Island Areas.
- FeatureCollection ( 'TIGER/2016/Roads' ); var roads = dataset . style ({ color : '#4285F4' , width : 1 }); Map . setCenter ( - 73.99172 , 40.74101 , 12 ); Map . addLayer ( roads , {}, 'TIGER/2016/Roads' ); Open in Code Editor Visualize as a FeatureView A FeatureView is a view-only, accelerated representation of a FeatureCollection .

### "Datasets tagged infrastructure-boundaries in Earth Engine \_|\_ Earth Engine\

- URL: [https://developers.google.com/earth-engine/datasets/tags/infrastructure-boundaries](https://developers.google.com/earth-engine/datasets/tags/infrastructure-boundaries)
- Source ID: `site-docs-root-3`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- Alaska has governmental entities called "boroughs" which fill a similar governmental … census county infrastructure-boundaries table tiger us TIGER: US Census Roads This United States Census Bureau TIGER dataset contains all road segments from the 2016 release, containing more than 19 million individual line features covering the United States, the District of Columbia, Puerto Rico, and the Island Areas.
- Each feature represents a road segment geometry (a … census infrastructure-boundaries roads table tiger us TIGER: US Census States 2016 The United States Census Bureau TIGER dataset contains the 2016 boundaries for the primary governmental divisions of the United States.
- There are just over 11 million polygon features covering the United States, the District of Columbia, Puerto Rico, and the Island … census city infrastructure-boundaries neighborhood table tiger TIGER: US Census Counties 2016 The United States Census Bureau TIGER dataset contains the 2016 boundaries for primary legal divisions of US states.
- In addition to the fifty states, the Census Bureau treats the District of Columbia, Puerto Rico, and each of the island areas (American Samoa, the … census infrastructure-boundaries state states table tiger TIGER: US Census States 2018 The United States Census Bureau TIGER dataset contains the 2018 boundaries for the primary governmental divisions of the United States.

### Earth Engine Data Catalog \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- Source ID: `site-docs-root`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- Alaska has governmental entities called "boroughs" which fill a similar governmental … census county infrastructure-boundaries table tiger us TIGER: US Census Roads This United States Census Bureau TIGER dataset contains all road segments from the 2016 release, containing more than 19 million individual line features covering the United States, the District of Columbia, Puerto Rico, and the Island Areas.
- Each feature represents a road segment geometry (a … census infrastructure-boundaries roads table tiger us TIGER: US Census States 2016 The United States Census Bureau TIGER dataset contains the 2016 boundaries for the primary governmental divisions of the United States.
- There are just over 11 million polygon features covering the United States, the District of Columbia, Puerto Rico, and the Island … census city infrastructure-boundaries neighborhood table tiger TIGER: US Census Counties 2016 The United States Census Bureau TIGER dataset contains the 2016 boundaries for primary legal divisions of US states.
- In addition to the fifty states, the Census Bureau treats the District of Columbia, Puerto Rico, and each of the island areas (American Samoa, the … census infrastructure-boundaries state states table tiger TIGER: US Census States 2018 The United States Census Bureau TIGER dataset contains the 2018 boundaries for the primary governmental divisions of the United States.

