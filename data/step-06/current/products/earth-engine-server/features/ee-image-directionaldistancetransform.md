---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:22:38.415Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "ee.Image.directionalDistanceTransform"
feature_slug: "ee-image-directionaldistancetransform"
latest_feature_date: "2020-03-12"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/apidocs/ee-algorithms-cannyedgedetector"
  - "https://developers.google.com/earth-engine/docs/release-notes"
  - "https://developers.google.com/earth-engine/guides/exporting_to_bigquery"
keywords:
  - "ee"
  - "image"
  - "directionaldistancetransform"
  - "calculates"
  - "the"
  - "distance"
  - "to"
  - "non"
---

# ee.Image.directionalDistanceTransform

Product: Earth Engine Server
Coverage: LOW

## Step 02 Summary

Calculates the distance to non-zero pixels in a specified direction.

## Extended Definition

Calculates the distance to non-zero pixels in a specified direction.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/apidocs/ee-algorithms-cannyedgedetector](https://developers.google.com/earth-engine/apidocs/ee-algorithms-cannyedgedetector)
- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- [https://developers.google.com/earth-engine/guides/exporting_to_bigquery](https://developers.google.com/earth-engine/guides/exporting_to_bigquery)

## Supporting Pages

### "ee.Algorithms.CannyEdgeDetector \_|\_ Google Earth Engine \_|\_ Google for\

- URL: [https://developers.google.com/earth-engine/apidocs/ee-algorithms-cannyedgedetector](https://developers.google.com/earth-engine/apidocs/ee-algorithms-cannyedgedetector)
- Source ID: `site-docs-reference`
- Final score: 144
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Usage Returns ee.Algorithms.CannyEdgeDetector(image, threshold, sigma ) Image Argument Type Details image Image The image on which to apply edge detection. threshold Float Threshold value.
- All noncommercial projects will need to select a quota tier by April 27, 2026 or will use the Community Tier by default.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2023-10-06 UTC."],[],[]]
- The output is an image whose bands have the same names as the input bands, and in which non-zero values indicate edges, and the magnitude of the value is the gradient magnitude.

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Earth Engine Server Feature Added ee.Image.directionalDistanceTransform() , which calculates the distance to non-zero pixels in a given direction.
- November 01, 2022 Earth Engine Data Catalog Feature Added TIGER/2010/BG : TIGER: US Census Block Groups (BG) 2010 October 25, 2022 Earth Engine Data Catalog Feature Added JAXA/ALOS/PALSAR-2/Level2 2/ScanSAR : PALSAR-2 ScanSAR Level 2.2 Added NASA/GLDAS/V022/CLSM/G025/DA1D : GLDAS-2.2: Global Land Data Assimilation System Added RUB/RUBCLIM/LCZ/global lcz map/v1 (no longer available) October 18, 2022 Earth Engine Data Catalog Feature Added JAXA/ALOS/PALSAR/YEARLY/FNF4 : Global 4-class PALSAR-2/PALSAR Forest/Non-Forest Map Added JRC/GSW1 4/GlobalSurfaceWater : JRC Global Surface Water Mapping Layers, v1.4 Added JRC/GSW1 4/Metadata : JRC Global Surface Water Metadata, v1.4 Added JRC/GSW1 4/MonthlyHistory : JRC Monthly Water History, v1.4 Added JRC/GSW1 4/MonthlyRecurrence : JRC Monthly Water Recurrence, v1.4 Added JRC/GSW1 4/YearlyHistory : JRC Yearly Water Classification History, v1.4 Added ORTHO/Switzerland/SWISSIMAGE/10cm (no longer available) October 11, 2022 Earth Engine Data Catalog Feature Added FAO/SOFO/1/FPP : Forest proximate people (FPP) 1.0 Added FAO/SOFO/1/TPP : Tree proximate people (TPP) 1.0 Added GOOGLE/Research/open-buildings/v2/polygons (no longer available) Added JAXA/ALOS/PALSAR/YEARLY/SAR EPOCH : Global PALSAR-2/PALSAR Yearly Mosaic, version 2.5.0 October 01, 2022 Earth Engine Server Change For organizations with Google Workspace accounts, the organization administrator was given control to enable or disable Earth Engine by setting the Google Cloud on/off control.
- March 24, 2026 Earth Engine Data Catalog Feature Added overture-maps/places place : Overture Maps - Places: Place March 17, 2026 Earth Engine Data Catalog Feature Added NASA/VIIRS/002/VNP64A1 : VNP64A1.002: Burned Area Monthly L4 Global 500m SIN Grid Added projects/neon-prod-earthengine/assets/CNC/002 : NEON Canopy Nitrogen Content (CNC) February 24, 2026 Earth Engine Data Catalog Feature Added OPERA/DSWX/L3 V1/HLS : Dynamic Surface Water Extent from Harmonized Landsat Sentinel-2 (DSWx-HLS) V1 Added OPERA/DSWX/L3 V1/S1 : Dynamic Surface Water Extent from Sentinel-1 (DSWx-S1) V1 Added projects/ee-kbas-in-gee/assets/current : WDKBA: World Database of Key Biodiversity Areas (KBAs) - September 2025 February 10, 2026 Earth Engine Data Catalog Feature Added JRC/GFC2020 subtypes/V1 : EC JRC global map of forest types 2020, V1 Added projects/pml evapotranspiration/PML/OUTPUT/PML V22a : PML V2.2a: Coupled Evapotranspiration and Gross Primary Product (GPP) February 03, 2026 Earth Engine Data Catalog Feature Added Earth Big Data/GLOBAL SEASONAL S1/V2019/BACKSCATTER : Global Seasonal Sentinel-1 Interferometric Coherence and Backscatter V2019 Backscatter Added Earth Big Data/GLOBAL SEASONAL S1/V2019/COHERENCE : Global Seasonal Sentinel-1 Interferometric Coherence and Backscatter V2019 Coherence Added Earth Big Data/GLOBAL SEASONAL S1/V2019/DECAY MODEL PARAMETERS : Global Seasonal Sentinel-1 Interferometric Coherence and Backscatter V2019 Decay Model Parameters Added Earth Big Data/GLOBAL SEASONAL S1/V2019/INCIDENCE LAYOVER SHADOW : Global Seasonal Sentinel-1 Interferometric Coherence and Backscatter V2019 Incidence Layover Shadow Added NOAA/CFSV2/FOR6H HARMONIZED : CFSV2: NCEP Climate Forecast System Version 2, 6-Hourly Products Harmonized Added projects/malariaatlasproject/assets/accessibility/accessibility to cities/2015 v1 0 : Malaria Atlas Project Accessibility to Cities 2015 Added projects/malariaatlasproject/assets/accessibility/accessibility to healthcare/2019 : Malaria Atlas Project Accessibility to Healthcare 2019 Added projects/malariaatlasproject/assets/accessibility/accessibility to healthcare/2019 walking only : Malaria Atlas Project Accessibility to Healthcare 2019 (Walking Only) Added projects/malariaatlasproject/assets/accessibility/friction surface/2015 v1 0 : Malaria Atlas Project Global Friction Surface 2015 Added projects/malariaatlasproject/assets/accessibility/friction surface/2019 v5 1 : Malaria Atlas Project Global Friction Surface 2019 Added projects/malariaatlasproject/assets/accessibility/friction surface/2019 v5 1 walking only : Malaria Atlas Project Global Friction Surface 2019 (Walking Only) January 27, 2026 Earth Engine Data Catalog Feature Added IAHS/GFPLAIN250/v0 : GFPLAIN250m: Global 250m Floodplain Dataset January 20, 2026 Earth Engine Code Editor Announcement Earth Engine is introducing noncommercial quota tiers to safeguard shared compute resources and ensure reliable performance for everyone.
- April 07, 2026 Earth Engine Data Catalog Feature Added projects/openet/assets/disalexi/conus/gridmet/monthly/v2 0 : OpenET DisALEXI Monthly Evapotranspiration v2.0 Added projects/openet/assets/disalexi/conus/gridmet/monthly/v2 1 : OpenET DisALEXI Monthly Evapotranspiration v2.1 Added projects/openet/assets/eemetric/conus/gridmet/monthly/v2 0 : OpenET eeMETRIC Monthly Evapotranspiration v2.0 Added projects/openet/assets/eemetric/conus/gridmet/monthly/v2 1 : OpenET eeMETRIC Monthly Evapotranspiration v2.1 Added projects/openet/assets/ensemble/conus/gridmet/monthly/v2 0 : OpenET Ensemble Monthly Evapotranspiration v2.0 Added projects/openet/assets/ensemble/conus/gridmet/monthly/v2 1 : OpenET Ensemble Monthly Evapotranspiration v2.1 Added projects/openet/assets/geesebal/conus/gridmet/monthly/v2 0 : OpenET geeSEBAL Monthly Evapotranspiration v2.0 Added projects/openet/assets/geesebal/conus/gridmet/monthly/v2 1 : OpenET geeSEBAL Monthly Evapotranspiration v2.1 Added projects/openet/assets/ptjpl/conus/gridmet/monthly/v2 0 : OpenET PT-JPL Monthly Evapotranspiration v2.0 Added projects/openet/assets/ptjpl/conus/gridmet/monthly/v2 1 : OpenET PT-JPL Monthly Evapotranspiration v2.1 Added projects/openet/assets/sims/conus/gridmet/monthly/v2 0 : OpenET SIMS Monthly Evapotranspiration v2.0 Added projects/openet/assets/sims/conus/gridmet/monthly/v2 1 : OpenET SIMS Monthly Evapotranspiration v2.1 Added projects/openet/assets/ssebop/conus/gridmet/monthly/v2 0 : OpenET SSEBop Monthly Evapotranspiration v2.0 Added projects/openet/assets/ssebop/conus/gridmet/monthly/v2 1 : OpenET SSEBop Monthly Evapotranspiration v2.1 Added iNaturalist/MULTI SPECIES/LATEST : INaturalist Multispecies Open Range Maps March 31, 2026 Earth Engine Data Catalog Feature Added AIRBUS/SPOT 2 4 5/BRAZIL/2007 2009/MS/V1 : SPOT Multispectral Imagery 10-20m, Brazil Added AIRBUS/SPOT 2 4 5/BRAZIL/2007 2009/MS NC/V1 : SPOT Multispectral Pseudo Natural Color Imagery 10-20m, Brazil Added AIRBUS/SPOT 2 4 5/BRAZIL/2007 2009/PAN/V1 : SPOT Panchromatic Imagery 5-10m, Brazil Added AIRBUS/SPOT 2 4 5/BRAZIL/2007 2009/PMS NC/V1 : SPOT Pansharpened Pseudo Natural Color Imagery 5-10m, Brazil Added GOOGLE/BRAZIL FOREST 2008/V1/ANALYTIC : Brazil Forest Imagery Dataset 2008: Analytic Basemap Added GOOGLE/BRAZIL FOREST 2008/V1/VISUAL : Brazil Forest Imagery Dataset 2008: Visual Basemap Added USDA/SOLUS100/V0 : SOLUS: Soil properties of the conterminous United States at 100-m resolution March 30, 2026 Earth Engine Code Editor Announcement Code Editor Share Options Updated To enhance transparency and security, the options to Auto Run and Hide Code when sharing Earth Engine Code Editor script links have been removed.

### Exporting to BigQuery \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/exporting_to_bigquery](https://developers.google.com/earth-engine/guides/exporting_to_bigquery)
- Source ID: `site-docs-root-2`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- Earth Engine type BigQuery type Notes ee.String STRING ee.Number FLOAT or INTEGER ee.Geometry GEOGRAPHY ee.Date TIMESTAMP ee.ByteString BYTES ee.Array STRUCT<ARRAY<INT64>, ARRAY<INT64 FLOAT64>> See the section on arrays Other ee. types not supported See the section on JSON values Arrays Earth Engine exports any multi-dimensional ee.Array to STRUCT<ARRAY<INT64> dimensions, ARRAY<INT64 FLOAT64> values> , similar to the format used by BigQuery's ML.DECODE IMAGE function.
- To avoid any renaming, ensure that your ee.Feature objects have properties that are valid column names and none are named "geo" (since this name is used for the feature's geometry, which has no name in Earth Engine).
- All noncommercial projects will need to select a quota tier by April 27, 2026 or will use the Community Tier by default.
- To have finer control over this transformation process, you can manually map over the features and transform their geometries, e.g.: Code Editor (JavaScript) var transformedCollection = originalCollection . map ( function transformGeo ( e ) { var myErrorMargin = 10 1000 ; // meters return e . setGeometry ( e . geometry ( myErrorMargin , 'EPSG:4326' , true )); }); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) def transform geo ( e ): my error margin = 10 1000 # meters return e . setGeometry ( e . geometry ( my error margin , 'EPSG:4326' , True )) transformed collection = original collection . map ( transform geo ) Caution: Polygons larger than a hemisphere may have their orientation reversed during export.

