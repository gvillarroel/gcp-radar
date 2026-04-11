---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:10:51.812Z"
product_name: "Earth Engine Python Client Library"
product_slug: "earth-engine-python-client-library"
feature_name: "Workload tags for ee.data.getPixels"
feature_slug: "workload-tags-for-ee-data-getpixels"
latest_feature_date: "2023-11-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/docs/release-notes"
  - "https://developers.google.com/earth-engine/apidocs/ee-algorithms-cannyedgedetector"
  - "https://developers.google.com/earth-engine/guides/cost_controls"
keywords:
  - "workload"
  - "tags"
  - "for"
  - "ee"
  - "getpixels"
  - "adds"
  - "tag"
  - "to"
---

# Workload tags for ee.data.getPixels

Product: Earth Engine Python Client Library
Coverage: LOW

## Step 02 Summary

Adds workload tag support to ee.data.getPixels().

## Extended Definition

Adds workload tag support to ee.data.getPixels().

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- [https://developers.google.com/earth-engine/apidocs/ee-algorithms-cannyedgedetector](https://developers.google.com/earth-engine/apidocs/ee-algorithms-cannyedgedetector)
- [https://developers.google.com/earth-engine/guides/cost_controls](https://developers.google.com/earth-engine/guides/cost_controls)

## Supporting Pages

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- May 02, 2023 Earth Engine Data Catalog Feature Added NOAA/VIIRS/001/VNP46A1 : VNP46A1: VIIRS Daily Gridded Day Night Band 500m Linear Lat Lon Grid Night Added OpenET/DISALEXI/CONUS/GRIDMET/MONTHLY/v2 0 : OpenET DisALEXI Monthly Evapotranspiration v2.0 Added OpenET/EEMETRIC/CONUS/GRIDMET/MONTHLY/v2 0 : OpenET eeMETRIC Monthly Evapotranspiration v2.0 Added OpenET/GEESEBAL/CONUS/GRIDMET/MONTHLY/v2 0 : OpenET geeSEBAL Monthly Evapotranspiration v2.0 Added OpenET/PTJPL/CONUS/GRIDMET/MONTHLY/v2 0 : OpenET PT-JPL Monthly Evapotranspiration v2.0 Added OpenET/SIMS/CONUS/GRIDMET/MONTHLY/v2 0 : OpenET SIMS Monthly Evapotranspiration v2.0 Added OpenET/SSEBOP/CONUS/GRIDMET/MONTHLY/v2 0 : OpenET SSEBop Monthly Evapotranspiration v2.0 April 25, 2023 Earth Engine Data Catalog Feature Added Estonia/Maamet/orthos/mono : Estonia mono orthophotos Added Estonia/Maamet/orthos/rgb : Estonia RGB orthophotos April 18, 2023 Earth Engine Data Catalog Feature Added ECMWF/ERA5 LAND/DAILY AGGR : ERA5-Land Daily Aggregated - ECMWF Climate Reanalysis April 14, 2023 Earth Engine JavaScript Client Library 0.1.349 Breaking Removed support for dots (.) in workload tags , which will now throw an error.
- Feature Added workload tag support to ee.data.getPixels() .
- June 22, 2022 Earth Engine Python Client Library 0.1.316 Feature Added the workload tag API ( ee.data.getWorkloadTag() and ee.data.setWorkloadTag() ) to label computation and exports with a workload tag, which is viewable from the Google Cloud Console.
- Earth Engine Server Feature Added the workload tag API ( ee.data.getWorkloadTag() and ee.data.setWorkloadTag() ) to label computation and exports with a workload tag, which is viewable from the Google Cloud Console.

### "ee.Algorithms.CannyEdgeDetector \_|\_ Google Earth Engine \_|\_ Google for\

- URL: [https://developers.google.com/earth-engine/apidocs/ee-algorithms-cannyedgedetector](https://developers.google.com/earth-engine/apidocs/ee-algorithms-cannyedgedetector)
- Source ID: `site-docs-reference`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2023-10-06 UTC."],[],[]]
- Usage Returns ee.Algorithms.CannyEdgeDetector(image, threshold, sigma ) Image Argument Type Details image Image The image on which to apply edge detection. threshold Float Threshold value.
- Home Products Google Earth Engine Reference Send feedback ee.Algorithms.CannyEdgeDetector Stay organized with collections Save and categorize content based on your preferences.
- Earth Engine is introducing noncommercial quota tiers to safeguard shared compute resources and ensure reliable performance for everyone.

### Cost controls \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/cost_controls](https://developers.google.com/earth-engine/guides/cost_controls)
- Source ID: `site-docs-root-2`
- Final score: 118
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Fine-grained monitoring and alerting for EECU-time usage can be configured in Cloud Monitoring, including alerts based on workload tags or total in-progress time.
- Recipe: Chat notification for workload tag usage This example shows how to wire up a chat notification (e.g., a Google Chat message or a Slack message) if the Earth Engine compute usage for a given workload tag exceeds a threshold.
- Recipe: Get email alerts for total in-progress EECU-time Follow the recipe for chat notifications, but make two changes: Skip the step for adding a workload tag filter, so that you can see all values.
- Fine-grained monitoring and alerting If you need to control and monitor costs at a finer-grain than the daily limit , the following recipes require more set-up but enable alerting and cancelation at the workload tag and batch task level.

