---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T12:40:59.082Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "AU/GA/AUSTRALIA_5M_DEM"
feature_slug: "au-ga-australia-5m-dem"
latest_feature_date: "2015-12-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/AU_GA_AUSTRALIA_5M_DEM"
  - "https://developers.google.com/earth-engine/datasets/catalog/AU_GA_DEM_1SEC_v10_DEM-H"
  - "https://developers.google.com/earth-engine/datasets/catalog/AU_GA_DEM_1SEC_v10_DEM-S"
keywords:
  - "au"
  - "ga"
  - "australia"
  - "5m"
  - "dem"
  - "australian"
  - "meter"
  - "digital"
---

# AU/GA/AUSTRALIA_5M_DEM

Product: Earth Engine Data Catalog
Coverage: LOW

## Step 02 Summary

Australian 5-meter digital elevation model.

## Extended Definition

Australian 5-meter digital elevation model.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/AU_GA_AUSTRALIA_5M_DEM](https://developers.google.com/earth-engine/datasets/catalog/AU_GA_AUSTRALIA_5M_DEM)
- [https://developers.google.com/earth-engine/datasets/catalog/AU_GA_DEM_1SEC_v10_DEM-H](https://developers.google.com/earth-engine/datasets/catalog/AU_GA_DEM_1SEC_v10_DEM-H)
- [https://developers.google.com/earth-engine/datasets/catalog/AU_GA_DEM_1SEC_v10_DEM-S](https://developers.google.com/earth-engine/datasets/catalog/AU_GA_DEM_1SEC_v10_DEM-S)

## Supporting Pages

### Australian 5M DEM \_|\_ Earth Engine Data Catalog \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog/AU_GA_AUSTRALIA_5M_DEM](https://developers.google.com/earth-engine/datasets/catalog/AU_GA_AUSTRALIA_5M_DEM)
- Source ID: `site-docs-root-2`
- Final score: 300
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- ImageCollection ( 'AU/GA/AUSTRALIA 5M DEM' ); var elevation = dataset . select ( 'elevation' ); var elevationVis = { min : 0.0 , max : 150.0 , palette : [ '0000ff' , '00ffff' , 'ffff00' , 'ff0000' , 'ffffff' ], }; Map . setCenter ( 140.1883 , - 35.9113 , 8 ); Map . addLayer ( elevation , elevationVis , 'Elevation' ); Open in Code Editor Australian 5M DEM The Digital Elevation Model (DEM) 5 meter Grid of Australia derived from LiDAR model represents a National 5 meter (bare earth) DEM which has been derived from some 236 individual LiDAR surveys between 2001 and 2015 covering an area in excess of 245,000 square kilometers.
- These surveys cover Australia's populated … AU/GA/AUSTRALIA 5M DEM, australia,dem,elevation,elevation-topography,ga,geophysical,geoscience-australia,lidar 2015-12-01T00:00:00Z/2015-12-01T00:00:00Z -43.45 114.09 -9.88 153.64 Google Earth Engine https://developers.google.com/earth-engine/datasets https://doi.org/10.4225/25/5652419862E23 https://doi.org/10.4225/25/5652419862E23 Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],["Geoscience Australia provides a 5-meter Digital Elevation Model (DEM) of Australia, derived from 236 LiDAR surveys conducted between 2001 and 2015.
- Dataset Availability 2015-12-01T00:00:00Z–2015-12-01T00:00:00Z Dataset Producer Geoscience Australia Earth Engine Snippet ee.ImageCollection("AU/GA/AUSTRALIA 5M DEM") open in new Tags australia dem elevation elevation-topography ga geophysical geoscience-australia lidar Description The Digital Elevation Model (DEM) 5 meter Grid of Australia derived from LiDAR model represents a National 5 meter (bare earth) DEM which has been derived from some 236 individual LiDAR surveys between 2001 and 2015 covering an area in excess of 245,000 square kilometers.
- Home Earth Engine Data Catalog All Datasets Send feedback Australian 5M DEM Stay organized with collections Save and categorize content based on your preferences.

### "DEM-H: Australian SRTM Hydrologically Enforced Digital Elevation Model \_\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/AU_GA_DEM_1SEC_v10_DEM-H](https://developers.google.com/earth-engine/datasets/catalog/AU_GA_DEM_1SEC_v10_DEM-H)
- Source ID: `site-docs-root-2`
- Final score: 240
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Image ( 'AU/GA/DEM 1SEC/v10/DEM-H' ); var elevation = dataset . select ( 'elevation' ); var elevationVis = { min : - 10.0 , max : 1300.0 , palette : [ '3ae237' , 'b5e22e' , 'd6e21f' , 'fff705' , 'ffd611' , 'ffb613' , 'ff8b13' , 'ff6e08' , 'ff500d' , 'ff0000' , 'de0101' , 'c21301' , '0602ff' , '235cb1' , '307ef3' , '269db1' , '30c8e2' , '32d3ef' , '3be285' , '3ff38f' , '86e26f' ], }; Map . setCenter ( 133.95 , - 24.69 , 5 ); Map . addLayer ( elevation , elevationVis , 'Elevation' ); Open in Code Editor DEM-H: Australian SRTM Hydrologically Enforced Digital Elevation Model The Hydrologically Enforced Digital Elevation Model (DEM-H) was derived from the SRTM data acquired by NASA in February 2000.
- Home Earth Engine Data Catalog All Datasets Send feedback DEM-H: Australian SRTM Hydrologically Enforced Digital Elevation Model Stay organized with collections Save and categorize content based on your preferences.
- Dataset Availability 2010-02-01T00:00:00Z–2010-02-01T00:00:00Z Dataset Producer Geoscience Australia Earth Engine Snippet ee.Image("AU/GA/DEM 1SEC/v10/DEM-H") open in new Tags australia dem elevation elevation-topography ga geophysical geoscience-australia smoothed srtm Description The Hydrologically Enforced Digital Elevation Model (DEM-H) was derived from the SRTM data acquired by NASA in February 2000.
- The DEM-H captures flow paths based on SRTM elevations and mapped stream lines, and supports delineation of catchments and related hydrological attributes. … AU/GA/DEM 1SEC/v10/DEM-H, australia,dem,elevation,elevation-topography,ga,geophysical,geoscience-australia,smoothed,srtm 2010-02-01T00:00:00Z/2010-02-01T00:00:00Z -44.06 112.99 -9.99 154 Google Earth Engine https://developers.google.com/earth-engine/datasets Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]

### "DEM-S: Australian Smoothed Digital Elevation Model \_|\_ Earth Engine Data\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/AU_GA_DEM_1SEC_v10_DEM-S](https://developers.google.com/earth-engine/datasets/catalog/AU_GA_DEM_1SEC_v10_DEM-S)
- Source ID: `site-docs-root-2`
- Final score: 240
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Image ( 'AU/GA/DEM 1SEC/v10/DEM-S' ); var elevation = dataset . select ( 'elevation' ); var elevationVis = { min : - 10.0 , max : 1300.0 , palette : [ '3ae237' , 'b5e22e' , 'd6e21f' , 'fff705' , 'ffd611' , 'ffb613' , 'ff8b13' , 'ff6e08' , 'ff500d' , 'ff0000' , 'de0101' , 'c21301' , '0602ff' , '235cb1' , '307ef3' , '269db1' , '30c8e2' , '32d3ef' , '3be285' , '3ff38f' , '86e26f' ], }; Map . setCenter ( 133.95 , - 24.69 , 5 ); Map . addLayer ( elevation , elevationVis , 'Elevation' ); Open in Code Editor DEM-S: Australian Smoothed Digital Elevation Model The Smoothed Digital Elevation Model (DEM-S) was derived from the SRTM data acquired by NASA in February 2000.
- Home Earth Engine Data Catalog All Datasets Send feedback DEM-S: Australian Smoothed Digital Elevation Model Stay organized with collections Save and categorize content based on your preferences.
- Dataset Availability 2010-02-01T00:00:00Z–2010-02-01T00:00:00Z Dataset Producer Geoscience Australia Earth Engine Snippet ee.Image("AU/GA/DEM 1SEC/v10/DEM-S") open in new Tags australia dem elevation elevation-topography ga geophysical geoscience-australia smoothed srtm Description The Smoothed Digital Elevation Model (DEM-S) was derived from the SRTM data acquired by NASA in February 2000.
- An adaptive process applied more smoothing in flatter areas than … AU/GA/DEM 1SEC/v10/DEM-S, australia,dem,elevation,elevation-topography,ga,geophysical,geoscience-australia,smoothed,srtm 2010-02-01T00:00:00Z/2010-02-01T00:00:00Z -44.06 112.99 -9.99 154 Google Earth Engine https://developers.google.com/earth-engine/datasets Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]

