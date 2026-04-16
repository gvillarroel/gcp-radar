---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:20.265Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "NOAA/CDR/ATMOS_NEAR_SURFACE/V2"
feature_slug: "noaa-cdr-atmos-near-surface-v2"
latest_feature_date: "2017-04-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/NOAA_CDR_ATMOS_NEAR_SURFACE_V2"
keywords:
  - "noaa"
  - "cdr"
  - "atmos"
  - "near"
  - "surface"
  - "v2"
  - "ocean"
  - "atmospheric"
---

# NOAA/CDR/ATMOS_NEAR_SURFACE/V2

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

NOAA CDR ocean near-surface atmospheric properties version 2.

## Extended Definition

NOAA CDR ocean near-surface atmospheric properties version 2.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/NOAA_CDR_ATMOS_NEAR_SURFACE_V2](https://developers.google.com/earth-engine/datasets/catalog/NOAA_CDR_ATMOS_NEAR_SURFACE_V2)

## Supporting Pages

### NOAA CDR: Ocean Near-Surface Atmospheric Properties, Version 2 | Earth Engine Data Catalog | Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog/NOAA_CDR_ATMOS_NEAR_SURFACE_V2](https://developers.google.com/earth-engine/datasets/catalog/NOAA_CDR_ATMOS_NEAR_SURFACE_V2)
- Source ID: `feature-recovery-direct-http`
- Final score: 475
- Re-rank relevance: N/A

Evidence snippets:
- These atmospheric properties are calculated based on brightness temperature data from the Special Sensor … NOAA/CDR/ATMOS_NEAR_SURFACE/V2, atmospheric,cdr,hourly,humidity,noaa,ocean,oceans,osb,wind 1988-01-01T00:00:00Z/2021-08-31T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets https://doi.org/10.7289/V55T3HH0 https://doi.org/10.7289/V55T3HH0 Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],["The NOAA Ocean Near-Surface Atmospheric Properties dataset (1988-2021) offers a Climate Data Record (CDR) of air temperature, wind speed, and specific humidity over ice-free oceans, available at a 3-hour cadence.
- Dataset Availability 1988-01-01T00:00:00Z–2021-08-31T00:00:00Z Dataset Producer NOAA Earth Engine Snippet ee.ImageCollection("NOAA/CDR/ATMOS_NEAR_SURFACE/V2") open_in_new Cadence 3 Hours Tags atmospheric cdr hourly humidity noaa ocean oceans osb wind air-temperature Description The Ocean Near-Surface Atmospheric Properties dataset is part of the NOAA Ocean Surface Bundle (OSB) and provides a high quality Climate Data Record (CDR) of air temperature, wind speed, and specific humidity over ice-free ocean surfaces.
- ImageCollection ( 'NOAA/CDR/ATMOS_NEAR_SURFACE/V2' ) . filter ( ee .
- Filter . date ( '2017-05-01' , '2017-05-02' )); var airTemperature = dataset . select ( 'air_temperature' ); var airTemperatureVis = { min : 0.0 , max : 30.0 , palette : [ '040274' , '040281' , '0502a3' , '0502b8' , '0502ce' , '0502e6' , '0602ff' , '235cb1' , '307ef3' , '269db1' , '30c8e2' , '32d3ef' , '3be285' , '3ff38f' , '86e26f' , '3ae237' , 'b5e22e' , 'd6e21f' , 'fff705' , 'ffd611' , 'ffb613' , 'ff8b13' , 'ff6e08' , 'ff500d' , 'ff0000' , 'de0101' , 'c21301' , 'a71001' , '911003' ], }; Map . setCenter ( 28.3 , - 28.1 , 1 ); Map . addLayer ( airTemperature , airTemperatureVis , 'Air Temperature' ); Open in Code Editor NOAA CDR: Ocean Near-Surface Atmospheric Properties, Version 2 The Ocean Near-Surface Atmospheric Properties dataset is part of the NOAA Ocean Surface Bundle (OSB) and provides a high quality Climate Data Record (CDR) of air temperature, wind speed, and specific humidity over ice-free ocean surfaces.

### "Datasets tagged atmosphere in Earth Engine \_|\_ Earth Engine Data Catalog\

- URL: [https://developers.google.com/earth-engine/datasets/tags/atmosphere](https://developers.google.com/earth-engine/datasets/tags/atmosphere)
- Source ID: `site-docs-root`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- The goal of this joint effort is to produce new atmospheric analyses using historical data as well as to … atmosphere climate geophysical ncep noaa reanalysis NOAA CDR AVHRR AOT: Daily Aerosol Optical Thickness Over Global Oceans, v04 The NOAA Climate Data Record (CDR) of Aerosol Optical Thickness (AOT) is a collection of global daily 0.1 degree derived data from the PATMOS-x AVHRR level-2b channel 1 (0.63 micron) orbital clear-sky radiance.
- The goal of this joint effort is to produce new atmospheric analyses using historical data as well as to … atmosphere climate geophysical ncep noaa pressure NCEP/NCAR Reanalysis Data, Surface Temperature [deprecated] The NCEP/NCAR Reanalysis Project is a joint project between the National Centers for Environmental Prediction (NCEP, formerly "NMC") and the National Center for Atmospheric Research (NCAR).
- The aerosol product is generated from AVHRR imagery in cloud-free conditions during … aerosol atmosphere atmospheric avhrr cdr daily RTMA: Real-Time Mesoscale Analysis The Real-Time Mesoscale Analysis (RTMA) is a high-spatial and temporal resolution analysis for near-surface weather conditions.
- These methane emission fluxes were produced using a point source detection and emissions quantification framework specialized to exploit the high spatial resolution, wide spatial coverage, and high precision of … atmosphere climate edf edf-methanesat-ee emissions ghg NCEP-DOE Reanalysis 2 (Gaussian Grid), Total Cloud Coverage NCEP-DOE Reanalysis 2 project is using a state-of-the-art analysis/forecast system to perform data assimilation using past data from 1979 through the previous year. atmosphere climate cloud geophysical ncep noaa NCEP/NCAR Reanalysis Data, Sea-Level Pressure [deprecated] The NCEP/NCAR Reanalysis Project is a joint project between the National Centers for Environmental Prediction (NCEP, formerly "NMC") and the National Center for Atmospheric Research (NCAR).

### "Datasets tagged oceans in Earth Engine \_|\_ Earth Engine Data Catalog \_\

- URL: [https://developers.google.com/earth-engine/datasets/tags/oceans](https://developers.google.com/earth-engine/datasets/tags/oceans)
- Source ID: `site-docs-root-3`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- This dataset is calculated from the OSB CDR parameters of near-surface atmospheric and sea … atmospheric cdr flux heat hourly noaa NOAA CDR: Ocean Near-Surface Atmospheric Properties, Version 2 The Ocean Near-Surface Atmospheric Properties dataset is part of the NOAA Ocean Surface Bundle (OSB) and provides a high quality Climate Data Record (CDR) of air temperature, wind speed, and specific humidity over ice-free ocean surfaces.
- NOAA offers Climate Data Records of sea surface temperature, ocean heat fluxes, and near-surface atmospheric properties over ice-free oceans.
- This product is generated … copernicus marine oceans NOAA AVHRR Pathfinder Version 5.3 Collated Global 4km Sea Surface Temperature The AVHRR Pathfinder Version 5.3 Sea Surface Temperature dataset (PFV53) is a collection of global, twice-daily 4km sea surface temperature data produced in a partnership by the NOAA National Oceanographic Data Center and the University of Miami's Rosenstiel School of Marine and Atmospheric Science.
- The SST values are found through modeling the diurnal variability in combination with … atmospheric cdr hourly noaa ocean oceans NOAA CDR: Ocean Heat Fluxes, Version 2 The Ocean Heat Fluxes dataset is part of the NOAA Ocean Surface Bundle (OSB) and provides a high quality Climate Data Record (CDR) of the air/ocean heat fluxes over ice-free oceans.

