---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:22:38.417Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "ee.List.distinct()"
feature_slug: "ee-list-distinct"
latest_feature_date: "2019-01-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/docs/release-notes"
  - "https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multilinestring"
  - "https://developers.google.com/earth-engine/guides/playground"
keywords:
  - "ee"
  - "list"
  - "distinct"
  - "returns"
  - "the"
  - "unique"
  - "elements"
  - "of"
---

# ee.List.distinct()

Product: Earth Engine Server
Coverage: LOW

## Step 02 Summary

Returns the unique elements of a list.

## Extended Definition

Returns the unique elements of a list.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- [https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multilinestring](https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multilinestring)
- [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground)

## Supporting Pages

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- Change Add ee.List.map() , a method for mapping a function over the elements of ee.List objects.
- June 24, 2025 Earth Engine Data Catalog Feature Added ECMWF/NRT FORECAST/IFS/SCWV : ECMWF Near-Realtime IFS Wave (Short-Cutoff) Forecasts Added ECMWF/NRT FORECAST/IFS/WAVE : ECMWF Near-Realtime IFS Wave Forecasts Added NASA/TEMPO/HCHO L3 : TEMPO gridded HCHO vertical columns V03 Added NASA/TEMPO/HCHO L3 QA : TEMPO gridded HCHO (QA filtered) vertical columns V03 June 17, 2025 Earth Engine Data Catalog Feature Added GOOGLE/SATELLITE EMBEDDING/V1/ANNUAL : Satellite Embedding V1 Added projects/forestdatapartnership/assets/cocoa/model 2025a : Cocoa Probability model 2025a Added projects/forestdatapartnership/assets/coffee/model 2025a : Coffee Probability model 2025a Added projects/forestdatapartnership/assets/palm/model 2025a : Palm Probability model 2025a Added projects/forestdatapartnership/assets/rubber/model 2025a : Rubber Tree Probability model 2025a June 10, 2025 Earth Engine Data Catalog Feature Added projects/edf-methanesat-ee/assets/public-preview/L4area v2 : MethaneSAT L4 Area Sources Public Preview V2.0.0 June 03, 2025 Earth Engine Data Catalog Feature Added JAXA/ALOS/AW3D30/V4 1 : ALOS DSM: Global 30m v4.1 Added UCSB/CHC/CMIP6/v1 : The Climate Hazards Center (CHC) Coupled Model Intercomparison Project Phase 6 (CHC-CMIP6) Added UMD/hansen/global forest change 2024 v1 12 : Hansen Global Forest Change v1.12 (2000-2024) Added projects/landandcarbon/assets/wri gdm drivers forest loss 1km/v1 1 2001 2023 : WRI/Google DeepMind Global Drivers of Forest Loss 2001-2023 v1.1 Added projects/landandcarbon/assets/wri gdm drivers forest loss 1km/v1 2001 2022 : WRI/Google DeepMind Global Drivers of Forest Loss 2001-2022 v1.0 Added projects/landandcarbon/assets/wri gdm drivers forest loss 1km/v1 2 2001 2024 : WRI/Google DeepMind Global Drivers of Forest Loss 2001-2024 v1.2 May 27, 2025 Earth Engine Data Catalog Feature Added NASA/TEMPO/NO2 L3 QA : TEMPO gridded NO2 (QA filtered) tropospheric and stratospheric columns V03 May 13, 2025 Earth Engine Data Catalog Feature Added USGS/NLCD RELEASES/2023 REL/TCC/v2023-5 : USFS Tree Canopy Cover v2023-5 (CONUS and OCONUS) May 06, 2025 Earth Engine Data Catalog Feature Added USFS/GTAC/LCMS/v2024-10 : USFS Landscape Change Monitoring System v2024.10 (CONUS and OCONUS) April 29, 2025 Earth Engine Data Catalog Feature Added ISRIC/SoilGrids250m/v2 0 : SoilGrids250m 2.0 - Volumetric Water Content Added NASA/TEMPO/NO2 L3 : TEMPO gridded NO2 tropospheric and stratospheric columns V03 Added UMN/PGC/ArcticDEM/V4/2m mosaic : ArcticDEM Mosaic V4.1 April 22, 2025 Earth Engine JavaScript Client Library 1.5.12 Change Added the Google Drive main OAuth scope , https://www.googleapis.com/auth/drive , to the default list of scopes to use for authorization.
- April 07, 2026 Earth Engine Data Catalog Feature Added projects/openet/assets/disalexi/conus/gridmet/monthly/v2 0 : OpenET DisALEXI Monthly Evapotranspiration v2.0 Added projects/openet/assets/disalexi/conus/gridmet/monthly/v2 1 : OpenET DisALEXI Monthly Evapotranspiration v2.1 Added projects/openet/assets/eemetric/conus/gridmet/monthly/v2 0 : OpenET eeMETRIC Monthly Evapotranspiration v2.0 Added projects/openet/assets/eemetric/conus/gridmet/monthly/v2 1 : OpenET eeMETRIC Monthly Evapotranspiration v2.1 Added projects/openet/assets/ensemble/conus/gridmet/monthly/v2 0 : OpenET Ensemble Monthly Evapotranspiration v2.0 Added projects/openet/assets/ensemble/conus/gridmet/monthly/v2 1 : OpenET Ensemble Monthly Evapotranspiration v2.1 Added projects/openet/assets/geesebal/conus/gridmet/monthly/v2 0 : OpenET geeSEBAL Monthly Evapotranspiration v2.0 Added projects/openet/assets/geesebal/conus/gridmet/monthly/v2 1 : OpenET geeSEBAL Monthly Evapotranspiration v2.1 Added projects/openet/assets/ptjpl/conus/gridmet/monthly/v2 0 : OpenET PT-JPL Monthly Evapotranspiration v2.0 Added projects/openet/assets/ptjpl/conus/gridmet/monthly/v2 1 : OpenET PT-JPL Monthly Evapotranspiration v2.1 Added projects/openet/assets/sims/conus/gridmet/monthly/v2 0 : OpenET SIMS Monthly Evapotranspiration v2.0 Added projects/openet/assets/sims/conus/gridmet/monthly/v2 1 : OpenET SIMS Monthly Evapotranspiration v2.1 Added projects/openet/assets/ssebop/conus/gridmet/monthly/v2 0 : OpenET SSEBop Monthly Evapotranspiration v2.0 Added projects/openet/assets/ssebop/conus/gridmet/monthly/v2 1 : OpenET SSEBop Monthly Evapotranspiration v2.1 Added iNaturalist/MULTI SPECIES/LATEST : INaturalist Multispecies Open Range Maps March 31, 2026 Earth Engine Data Catalog Feature Added AIRBUS/SPOT 2 4 5/BRAZIL/2007 2009/MS/V1 : SPOT Multispectral Imagery 10-20m, Brazil Added AIRBUS/SPOT 2 4 5/BRAZIL/2007 2009/MS NC/V1 : SPOT Multispectral Pseudo Natural Color Imagery 10-20m, Brazil Added AIRBUS/SPOT 2 4 5/BRAZIL/2007 2009/PAN/V1 : SPOT Panchromatic Imagery 5-10m, Brazil Added AIRBUS/SPOT 2 4 5/BRAZIL/2007 2009/PMS NC/V1 : SPOT Pansharpened Pseudo Natural Color Imagery 5-10m, Brazil Added GOOGLE/BRAZIL FOREST 2008/V1/ANALYTIC : Brazil Forest Imagery Dataset 2008: Analytic Basemap Added GOOGLE/BRAZIL FOREST 2008/V1/VISUAL : Brazil Forest Imagery Dataset 2008: Visual Basemap Added USDA/SOLUS100/V0 : SOLUS: Soil properties of the conterminous United States at 100-m resolution March 30, 2026 Earth Engine Code Editor Announcement Code Editor Share Options Updated To enhance transparency and security, the options to Auto Run and Hide Code when sharing Earth Engine Code Editor script links have been removed.
- August 04, 2020 Earth Engine Data Catalog Feature Added MODIS/061/MOD08 M3 : MOD08 M3.061 Terra Atmosphere Monthly Global Product Added MODIS/061/MYD08 M3 : MYD08 M3.061 Aqua Atmosphere Monthly Global Product Added NASA/ORNL/biomass carbon density/v1 : Global Aboveground and Belowground Biomass Carbon Density Maps Added NOAA/GOES/16/MCMIPC : GOES-16 MCMIPC Series ABI Level 2 Cloud and Moisture Imagery CONUS Added NOAA/GOES/16/MCMIPF : GOES-16 MCMIPF Series ABI Level 2 Cloud and Moisture Imagery Full Disk Added NOAA/GOES/17/MCMIPC : GOES-17 MCMIPC Series ABI Level 2 Cloud and Moisture Imagery CONUS Added NOAA/GOES/17/MCMIPF : GOES-17 MCMIPF Series ABI Level 2 Cloud and Moisture Imagery Full Disk July 21, 2020 Earth Engine Data Catalog Feature Added GRIDMET/DROUGHT : GRIDMET DROUGHT: CONUS Drought Indices Added LANDFIRE/Fire/FRG/v1 2 0 : LANDFIRE FRG (Fire Regime Groups) v1.2.0 Added LANDFIRE/Fire/MFRI/v1 2 0 : LANDFIRE MFRI (Mean Fire Return Interval) v1.2.0 Added LANDFIRE/Fire/PLS/v1 2 0 : LANDFIRE PLS (Percent Low-severity Fire) v1.2.0 Added LANDFIRE/Fire/PMS/v1 2 0 : LANDFIRE PMS (Percent of Mixed-severity Fire) v1.2.0 Added LANDFIRE/Fire/PRS/v1 2 0 : LANDFIRE PRS (Percent of Replacement-severity Fire) v1.2.0 Added LANDFIRE/Fire/SClass/v1 4 0 : LANDFIRE SClass (Succession Classes) v1.4.0 Added LANDFIRE/Fire/VCC/v1 4 0 : LANDFIRE VCC (Vegetation Condition Class) v1.4.0 Added LANDFIRE/Fire/VDep/v1 4 0 : LANDFIRE VDep (Vegetation Departure) v1.4.0 Added LANDFIRE/Vegetation/BPS/v1 4 0 : LANDFIRE BPS (Biophysical Settings) v1.4.0 Added LANDFIRE/Vegetation/ESP/v1 2 0/AK : LANDFIRE ESP AK (Environmental Site Potential) v1.2.0 Added LANDFIRE/Vegetation/ESP/v1 2 0/CONUS : LANDFIRE ESP CONUS (Environmental Site Potential) v1.2.0 Added LANDFIRE/Vegetation/ESP/v1 2 0/HI : LANDFIRE ESP HI (Environmental Site Potential) v1.2.0 Added LANDFIRE/Vegetation/EVC/v1 4 0 : LANDFIRE EVC (Existing Vegetation Cover) v1.4.0 Added LANDFIRE/Vegetation/EVH/v1 4 0 : LANDFIRE EVH (Existing Vegetation Height) v1.4.0 Added LANDFIRE/Vegetation/EVT/v1 4 0 : LANDFIRE EVT (Existing Vegetation Type) v1.4.0 July 14, 2020 Earth Engine Data Catalog Feature Added ESA/CCI/FireCCI/5 1 : FireCCI51: MODIS Fire cci Burned Area Pixel Product, Version 5.1 Added JRC/GSW1 2/GlobalSurfaceWater : JRC Global Surface Water Mapping Layers, v1.2 [deprecated] Added JRC/GSW1 2/Metadata (no longer available) Added JRC/GSW1 2/MonthlyHistory (no longer available) Added JRC/GSW1 2/MonthlyRecurrence (no longer available) Added JRC/GSW1 2/YearlyHistory (no longer available) July 07, 2020 Earth Engine Server Fixed Added ee.Algorithms.ObjectType() , which returns the type of any computed object.

### "ee.Algorithms.GeometryConstructors.MultiLineString \_|\_ Google Earth Engine\

- URL: [https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multilinestring](https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multilinestring)
- Source ID: `site-docs-reference`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- Usage Returns ee.Algorithms.GeometryConstructors.MultiLineString(coordinates, crs , geodesic , maxError ) Geometry Argument Type Details coordinates List The list of LineStrings, or to wrap a single LineString, the list of Points or pairs of Numbers in x,y order. crs Projection, default: null The coordinate reference system of the coordinates.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-07-13 UTC."],[],["The function MultiLineString creates a geometry object from a list of coordinates.
- The function returns a Geometry object representing the constructed MultiLineString. coordinates can be a list of LineStrings, points or a list of number pairs in x,y order.\n"]]
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Earth Engine Code Editor \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground)
- Source ID: `site-docs-root`
- Final score: 116
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The search tool is the text box at the top of the Code Editor that says 'Search places and datasets...' Type the name of a data product, sensor, or other keyword into the search bar and click the search button to see a list of matching places, raster and table datasets.
- Click the help button in the upper right of the Code Editor to see links to this Developer's Guide, other help forums, a guided tour of the Code Editor and a list of keyboard shortcuts that help with coding, running code, and displaying data on the Map .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-08-05 UTC."],[],["The Earth Engine Code Editor, a web-based IDE, allows geospatial workflow development.
- The Code Editor has the following elements (illustrated in Figure 1): JavaScript code editor Map display for visualizing geospatial datasets API reference documentation (Docs tab) Git -based Script Manager (Scripts tab) Console output (Console tab) Task Manager (Tasks tab) to handle long-running queries Interactive map query (Inspector tab) Search of the data archive or saved scripts Geometry drawing tools Figure 1.

