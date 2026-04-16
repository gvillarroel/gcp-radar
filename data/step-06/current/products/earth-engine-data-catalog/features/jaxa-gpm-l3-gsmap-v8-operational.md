---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:19.528Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "JAXA/GPM_L3/GSMaP/v8/operational"
feature_slug: "jaxa-gpm-l3-gsmap-v8-operational"
latest_feature_date: "2023-10-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/JAXA_GPM_L3_GSMaP_v8_operational"
keywords:
  - "jaxa"
  - "gpm"
  - "l3"
  - "gsmap"
  - "v8"
  - "operational"
  - "provides"
  - "global"
---

# JAXA/GPM_L3/GSMaP/v8/operational

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

GSMaP Operational V8 provides global satellite precipitation estimates.

## Extended Definition

GSMaP Operational V8 provides global satellite precipitation estimates.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/JAXA_GPM_L3_GSMaP_v8_operational](https://developers.google.com/earth-engine/datasets/catalog/JAXA_GPM_L3_GSMaP_v8_operational)

## Supporting Pages

### GSMaP Operational: Global Satellite Mapping of Precipitation - V8 | Earth Engine Data Catalog | Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog/JAXA_GPM_L3_GSMaP_v8_operational](https://developers.google.com/earth-engine/datasets/catalog/JAXA_GPM_L3_GSMaP_v8_operational)
- Source ID: `feature-recovery-direct-http`
- Final score: 394
- Re-rank relevance: N/A

Evidence snippets:
- Dataset Availability 1998-01-01T00:00:00Z–2026-04-13T15:00:00Z Dataset Producer JAXA Earth Observation Research Center Earth Engine Snippet ee.ImageCollection("JAXA/GPM_L3/GSMaP/v8/operational") open_in_new Cadence 1 Hour Tags climate geophysical gpm hourly jaxa precipitation weather Description Global Satellite Mapping of Precipitation (GSMaP) provides a global hourly rain rate with a 0.1 x 0.1 degree resolution.
- Values are estimated using multi-band passive microwave and infrared radiometers from … JAXA/GPM_L3/GSMaP/v8/operational, climate,geophysical,gpm,hourly,jaxa,precipitation,weather 1998-01-01T00:00:00Z/2026-04-13T15:00:00Z -60 -180 60 180 Google Earth Engine https://developers.google.com/earth-engine/datasets https://doi.org/10.57746/EO.01gs73bkt358gfpy92y2qns5e9 https://doi.org/10.57746/EO.01gs73bkt358gfpy92y2qns5e9 Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]] GitHub Earth Engine on GitHub Medium Follow our blog on Medium GIS Stack Exchange Ask questions using the google-earth-engine tag Twitter Follow @googleearth on Twitter Videos Earth Engine on YouTube Connect Blog Bluesky Instagram LinkedIn X (Twitter) YouTube Programs Google Developer Program Google Developer Groups Google Developer Experts Accelerators Google Cloud & NVIDIA Developer consoles Google API Console Google Cloud Platform Console Google Play Console Firebase Console Actions on Google Console Cast SDK Developer Console Chrome Web Store Dashboard Google Home Developer Console Android Chrome Firebase Google Cloud Platform Google AI All products Terms Privacy Manage cookies English Deutsch Español Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體 日本語 한국어
- ImageCollection ( 'JAXA/GPM_L3/GSMaP/v8/operational' ) . filter ( ee .
- Filter . date ( '2023-09-12' , '2023-09-13' )); var precipitation = dataset . select ( 'hourlyPrecipRate' ); var precipitationVis = { min : 0.0 , max : 10.0 , palette : [ '1621a2' , 'ffffff' , '03ffff' , '13ff03' , 'efff00' , 'ffb103' , 'ff2300' ], }; Map . setCenter ( - 90.7 , 26.12 , 3 ); Map . addLayer ( precipitation , precipitationVis , 'Precipitation' ); Open in Code Editor GSMaP Operational: Global Satellite Mapping of Precipitation - V8 Global Satellite Mapping of Precipitation (GSMaP) provides a global hourly rain rate with a 0.1 x 0.1 degree resolution.

### "Datasets tagged precipitation in Earth Engine \_|\_ Earth Engine Data Catalog\

- URL: [https://developers.google.com/earth-engine/datasets/tags/precipitation](https://developers.google.com/earth-engine/datasets/tags/precipitation)
- Source ID: `site-docs-root-3`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- Values are estimated using multi-band passive … climate geophysical gpm hourly jaxa precipitation GSMaP Operational: Global Satellite Mapping of Precipitation - V7 Global Satellite Mapping of Precipitation (GSMaP) provides a global hourly rain rate with a 0.1 x 0.1 degree resolution.
- Values are estimated using multi-band passive … climate geophysical gpm hourly jaxa precipitation GSMaP Operational: Global Satellite Mapping of Precipitation - V8 Global Satellite Mapping of Precipitation (GSMaP) provides a global hourly rain rate with a 0.1 x 0.1 degree resolution.
- The dataset blends the high resolution spatial data from PRISM with the high temporal resolution data from the … climate gridmet humidity merced metdata precipitation GSMaP Operational: Global Satellite Mapping of Precipitation - V6 Global Satellite Mapping of Precipitation (GSMaP) provides a global hourly rain rate with a 0.1 x 0.1 degree resolution.
- Values are estimated using multi-band passive … climate geophysical gpm hourly jaxa precipitation GSMaP Reanalysis: Global Satellite Mapping of Precipitation Global Satellite Mapping of Precipitation (GSMaP) provides a global hourly rain rate with a 0.1 x 0.1 degree resolution.

### "Datasets tagged climate in Earth Engine \_|\_ Earth Engine Data Catalog\

- URL: [https://developers.google.com/earth-engine/datasets/tags/climate](https://developers.google.com/earth-engine/datasets/tags/climate)
- Source ID: `site-docs-root`
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- Values are estimated using multi-band passive … climate geophysical gpm hourly jaxa precipitation GSMaP Operational: Global Satellite Mapping of Precipitation - V7 Global Satellite Mapping of Precipitation (GSMaP) provides a global hourly rain rate with a 0.1 x 0.1 degree resolution.
- Values are estimated using multi-band passive … climate geophysical gpm hourly jaxa precipitation GSMaP Operational: Global Satellite Mapping of Precipitation - V8 Global Satellite Mapping of Precipitation (GSMaP) provides a global hourly rain rate with a 0.1 x 0.1 degree resolution.
- The dataset blends the high resolution spatial data from PRISM with the high temporal resolution data from the … climate gridmet humidity merced metdata precipitation GSMaP Operational: Global Satellite Mapping of Precipitation - V6 Global Satellite Mapping of Precipitation (GSMaP) provides a global hourly rain rate with a 0.1 x 0.1 degree resolution.
- Values are estimated using multi-band passive … climate geophysical gpm hourly jaxa precipitation GSMaP Reanalysis: Global Satellite Mapping of Precipitation Global Satellite Mapping of Precipitation (GSMaP) provides a global hourly rain rate with a 0.1 x 0.1 degree resolution.

