---
title: "Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers"
url: https://developers.google.com/earth-engine/docs/release-notes
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/earth-engine/apidocs
source_metadata:
  url: https://developers.google.com/earth-engine/docs/release-notes
  title: "Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Earth Engine is introducing noncommercial quota tiers to safeguard shared compute resources and ensure reliable performance for everyone. All noncommercial projects will need to select a quota tier by April 27, 2026 or will use the Community Tier by default. Tier quotas will take effect for all projects (regardless of tier selection date) on April 27, 2026 . Learn more.
Home
Products
Google Earth Engine
Reference
Send feedback
Earth Engine release notes
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This webpage lists changes to Google Earth Engine's client libraries, server, and Code Editor, including new features and bug fixes, organized by date.
Notable updates include changes to authentication methods, additions of new algorithms for image processing and classification, improvements to geometry handling, and enhancements to the Code Editor interface and charting capabilities.
Several features and APIs were deprecated or removed over time to streamline the platform and encourage the use of newer functionalities.
Subscribe
to these release notes.
This page is updated with each notable change to Earth Engine. Specifically,
it lists releases by date and includes any new features, bug fixes, and significant
performance improvements. You can also browse and filter release notes for all
Google Cloud products in the Google Cloud console .
April 07, 2026
Earth Engine Data Catalog
Feature
Added projects/openet/assets/disalexi/conus/gridmet/monthly/v2_0 : OpenET DisALEXI Monthly Evapotranspiration v2.0
Added projects/openet/assets/disalexi/conus/gridmet/monthly/v2_1 : OpenET DisALEXI Monthly Evapotranspiration v2.1
Added projects/openet/assets/eemetric/conus/gridmet/monthly/v2_0 : OpenET eeMETRIC Monthly Evapotranspiration v2.0
Added projects/openet/assets/eemetric/conus/gridmet/monthly/v2_1 : OpenET eeMETRIC Monthly Evapotranspiration v2.1
Added projects/openet/assets/ensemble/conus/gridmet/monthly/v2_0 : OpenET Ensemble Monthly Evapotranspiration v2.0
Added projects/openet/assets/ensemble/conus/gridmet/monthly/v2_1 : OpenET Ensemble Monthly Evapotranspiration v2.1
Added projects/openet/assets/geesebal/conus/gridmet/monthly/v2_0 : OpenET geeSEBAL Monthly Evapotranspiration v2.0
Added projects/openet/assets/geesebal/conus/gridmet/monthly/v2_1 : OpenET geeSEBAL Monthly Evapotranspiration v2.1
Added projects/openet/assets/ptjpl/conus/gridmet/monthly/v2_0 : OpenET PT-JPL Monthly Evapotranspiration v2.0
Added projects/openet/assets/ptjpl/conus/gridmet/monthly/v2_1 : OpenET PT-JPL Monthly Evapotranspiration v2.1
Added projects/openet/assets/sims/conus/gridmet/monthly/v2_0 : OpenET SIMS Monthly Evapotranspiration v2.0
Added projects/openet/assets/sims/conus/gridmet/monthly/v2_1 : OpenET SIMS Monthly Evapotranspiration v2.1
Added projects/openet/assets/ssebop/conus/gridmet/monthly/v2_0 : OpenET SSEBop Monthly Evapotranspiration v2.0
Added projects/openet/assets/ssebop/conus/gridmet/monthly/v2_1 : OpenET SSEBop Monthly Evapotranspiration v2.1
Added iNaturalist/MULTI_SPECIES/LATEST : INaturalist Multispecies Open Range Maps
March 31, 2026
Earth Engine Data Catalog
Feature
Added AIRBUS/SPOT_2_4_5/BRAZIL/2007_2009/MS/V1 : SPOT Multispectral Imagery 10-20m, Brazil
Added AIRBUS/SPOT_2_4_5/BRAZIL/2007_2009/MS_NC/V1 : SPOT Multispectral Pseudo Natural Color Imagery 10-20m, Brazil
Added AIRBUS/SPOT_2_4_5/BRAZIL/2007_2009/PAN/V1 : SPOT Panchromatic Imagery 5-10m, Brazil
Added AIRBUS/SPOT_2_4_5/BRAZIL/2007_2009/PMS_NC/V1 : SPOT Pansharpened Pseudo Natural Color Imagery 5-10m, Brazil
Added GOOGLE/BRAZIL_FOREST_2008/V1/ANALYTIC : Brazil Forest Imagery Dataset 2008: Analytic Basemap
Added GOOGLE/BRAZIL_FOREST_2008/V1/VISUAL : Brazil Forest Imagery Dataset 2008: Visual Basemap
Added USDA/SOLUS100/V0 : SOLUS: Soil properties of the conterminous United States at 100-m resolution
March 30, 2026
Earth Engine Code Editor
Announcement
Code Editor Share Options Updated
To enhance transparency and security, the options to Auto Run and Hide Code when sharing Earth Engine Code Editor script links have been removed.
This change ensures that users are fully aware of the code they are running and must explicitly consent to its execution. This prevents unexpected usage of Earth Engine Compute Units (EECUs), which could potentially incur costs for commercial customers, and avoids potential browser performance issues from resource-intensive scripts.
Recommended Alternative: For sharing interactive applications without exposing the underlying code, we recommend using Earth Engine Apps . Apps provide a robust way to share polished, ready-to-use interfaces for your Earth Engine analyses.
March 24, 2026
Earth Engine Data Catalog
Feature
Added overture-maps/places_place : Overture Maps - Places: Place
March 17, 2026
Earth Engine Data Catalog
Feature
Added NASA/VIIRS/002/VNP64A1 : VNP64A1.002: Burned Area Monthly L4 Global 500m SIN Grid
Added projects/neon-prod-earthengine/assets/CNC/002 : NEON Canopy Nitrogen Content (CNC)
February 24, 2026
Earth Engine Data Catalog
Feature
Added OPERA/DSWX/L3_V1/HLS : Dynamic Surface Water Extent from Harmonized Landsat Sentinel-2 (DSWx-HLS) V1
Added OPERA/DSWX/L3_V1/S1 : Dynamic Surface Water Extent from Sentinel-1 (DSWx-S1) V1
Added projects/ee-kbas-in-gee/assets/current : WDKBA: World Database of Key Biodiversity Areas (KBAs) - September 2025
February 10, 2026
Earth Engine Data Catalog
Feature
Added JRC/GFC2020_subtypes/V1 : EC JRC global map of forest types 2020, V1
Added projects/pml_evapotranspiration/PML/OUTPUT/PML_V22a : PML_V2.2a: Coupled Evapotranspiration and Gross Primary Product (GPP)
February 03, 2026
Earth Engine Data Catalog
Feature
Added Earth_Big_Data/GLOBAL_SEASONAL_S1/V2019/BACKSCATTER : Global Seasonal Sentinel-1 Interferometric Coherence and Backscatter V2019 Backscatter
Added Earth_Big_Data/GLOBAL_SEASONAL_S1/V2019/COHERENCE : Global Seasonal Sentinel-1 Interferometric Coherence and Backscatter V2019 Coherence
Added Earth_Big_Data/GLOBAL_SEASONAL_S1/V2019/DECAY_MODEL_PARAMETERS : Global Seasonal Sentinel-1 Interferometric Coherence and Backscatter V2019 Decay Model Parameters
Added Earth_Big_Data/GLOBAL_SEASONAL_S1/V2019/INCIDENCE_LAYOVER_SHADOW : Global Seasonal Sentinel-1 Interferometric Coherence and Backscatter V2019 Incidence Layover Shadow
Added NOAA/CFSV2/FOR6H_HARMONIZED : CFSV2: NCEP Climate Forecast System Version 2, 6-Hourly Products Harmonized
Added projects/malariaatlasproject/assets/accessibility/accessibility_to_cities/2015_v1_0 : Malaria Atlas Project Accessibility to Cities 2015
Added projects/malariaatlasproject/assets/accessibility/accessibility_to_healthcare/2019 : Malaria Atlas Project Accessibility to Healthcare 2019
Added projects/malariaatlasproject/assets/accessibility/accessibility_to_healthcare/2019_walking_only : Malaria Atlas Project Accessibility to Healthcare 2019 (Walking Only)
Added projects/malariaatlasproject/assets/accessibility/friction_surface/2015_v1_0 : Malaria Atlas Project Global Friction Surface 2015
Added projects/malariaatlasproject/assets/accessibility/friction_surface/2019_v5_1 : Malaria Atlas Project Global Friction Surface 2019
Added projects/malariaatlasproject/assets/accessibility/friction_surface/2019_v5_1_walking_only : Malaria Atlas Project Global Friction Surface 2019 (Walking Only)
January 27, 2026
Earth Engine Data Catalog
Feature
Added IAHS/GFPLAIN250/v0 : GFPLAIN250m: Global 250m Floodplain Dataset
January 20, 2026
Earth Engine Code Editor
Announcement
Earth Engine is introducing
noncommercial quota tiers to
safeguard shared compute resources and ensure reliable performance for everyone.
All noncommercial projects will need to select a quota tier by April 27, 2026 or
will use the Community Tier by default. Tier quotas will take effect for all
projects (regardless of tier selection date) on April 27, 2026.
Learn more .
Earth Engine Server
Announcement
Earth Engine is introducing
noncommercial quota tiers to
safeguard shared compute resources and ensure reliable performance for everyone.
All noncommercial projects will need to select a quota tier by April 27, 2026 or
will use the Community Tier by default. Tier quotas will take effect for all
projects (regardless of tier selection date) on April 27, 2026.
Learn more .
January 13, 2026
Earth Engine Data Catalog
Feature
Added NASA/TEMPO/O3_L3_QA : TEMPO gridded ozone total column V03 (PROVISIONAL)
December 30, 2025
Earth Engine Data Catalog
Feature
Added UCSB-CHC/CHIRPS/V3/DAILY_RNL : CHIRPS Precipitation Daily Reanalysis: Climate Hazards Center InfraRed Precipitation With Station Data (Version 3.0, ERA5-based)
Added UCSB-CHC/CHIRPS/V3/DAILY_SAT : CHIRPS Precipitation Daily Near-Real-Time: Climate Hazards Center InfraRed Precipitation With Station Data (Version 3.0, IMERG-based)
December 16, 2025
Earth Engine Data Catalog
Feature
Added COPERNICUS/MARINE/INSITU_MULTI_4KM/ARGO : Copernicus Global In-situ Observations of Ocean Currents - Argo
Added COPERNICUS/MARINE/INSITU_MULTI_4KM/RADAR_RADIAL : Copernicus Global In-situ Observations of Ocean Currents - Radar Radial
Added COPERNICUS/MARINE/INSITU_MULTI_4KM/RADAR_TOTAL : Copernicus Global In-situ Observations of Ocean Currents - Radar Total
Added JRC/GFC2020/V3 : EC JRC global map of forest cover 2020, V3
Added projects/mapbiomas-public/assets/brazil/lulc/v1 : MapBiomas Land Use and Land Cover - Brazil V1.0
December 02, 2025
Earth Engine Data Catalog
Feature
Added JRC/LUCAS/THLOC/V1/2022 : LUCAS THLOC (Points with attributes, 2022) V1
November 30, 2025
Earth Engine JavaScript Client Library
1.7.3
Feature
Added support for the overwrite parameter in the
Export.image.toAsset()
and
Export.table.toAsset()
methods, which allows for control over overwriting data in preexisting
destination images or tables.
Earth Engine Python Client Library
1.7.3
Feature
Added support for the overwrite parameter in the
Export.image.toAsset()
and
Export.table.toAsset()
methods, which allows for control over overwriting data in preexisting
destination images or tables.
November 25, 2025
Earth Engine Data Catalog
Feature
Added COPERNICUS/MARINE/INSITU_MULTI_4KM/DRIFTER : Copernicus Global In-situ Observations of Ocean Currents - Drifter
November 18, 2025
Earth Engine Data Catalog
Feature
Added UCSB-CHC/CHIRPS/V3/PENTAD : CHIRPS Precipitation Pentad: Climate Hazards Center InfraRed Precipitation With Station Data (Version 3.0)
Added projects/gcp-public-data-weathernext/assets/weathernext_2_0_0 : WeatherNext 2
Added projects/global-precipitation-nowcast/assets/global_estimation : Oya: 5km Quasi-Global Precipitation Estimates
November 11, 2025
Earth Engine Data Catalog
Feature
Added LANDSAT/COMPOSITES/C02/T1_L2_32DAY : Landsat Collection 2 Tier 1 Level 2 32-Day Composite
Added LANDSAT/COMPOSITES/C02/T1_L2_8DAY : Landsat Collection 2 Tier 1 Level 2 8-Day Composite
Added LANDSAT/COMPOSITES/C02/T1_L2_ANNUAL : Landsat Collection 2 Tier 1 Level 2 Annual Composite
Added OREGONSTATE/PRISM/ANd : PRISM Daily Spatial Climate Dataset ANd
Added OREGONSTATE/PRISM/ANm : PRISM Monthly Spatial Climate Dataset ANm
Added projects/nature-trace/assets/species_distribution_models/australia_mammals/v0 : Species Distribution, Australia Mammals
October 21, 2025
Earth Engine Data Catalog
Feature
Added COPERNICUS/MARINE/GLOBAL_ANALYSISFORECAST_BGC_001_028/OPTICS : Copernicus Global Ocean Bio-Geo-Chemical Forecast - OPTICS
Added COPERNICUS/MARINE/GLOBAL_ANALYSISFORECAST_BGC_001_028/PFT : Copernicus Global Ocean Bio-Geo-Chemical Forecast - PFT
Added COPERNICUS/MARINE/GLOBAL_ANALYSISFORECAST_BGC_001_028/PLANKTON : Copernicus Global Ocean Bio-Geo-Chemical Forecast - PLANKTON
October 14, 2025
Earth Engine Data Catalog
Feature
Added COPERNICUS/MARINE/GLOBAL_ANALYSISFORECAST_BGC_001_028/CAR : Copernicus Global Ocean Bio-Geo-Chemical Forecast - CAR
Added COPERNICUS/MARINE/GLOBAL_ANALYSISFORECAST_BGC_001_028/CO2 : Copernicus Global Ocean Bio-Geo-Chemical Forecast - CO2
Added COPERNICUS/MARINE/GLOBAL_ANALYSISFORECAST_BGC_001_028/NUT : Copernicus Global Ocean Bio-Geo-Chemical Forecast - NUT
Added COPERNICUS/MARINE/WAV/ANFC_0_083DEG_PT3H : Global Ocean Waves Analysis and Forecast
Added COPERNICUS/MARINE/WAV/ANFC_0_083DEG_STATIC : Global Ocean Waves Static Bathymetry
October 13, 2025
Earth Engine Python Client Library
1.6.12
Fixed
ee.Authenticate() will now raise an error when called with auth_mode=colab and unsupported scopes .
October 07, 2025
Earth Engine Data Catalog
Feature
Added projects/gcpm041u-lemur/assets/scanfi_v12/SCANFI_v1_2 : SCANFI: the Spatialized CAnadian National Forest Inventory data product1.2
Added projects/global-pasture-watch/assets/gsvh-30m/v1/short-veg-height_m : GPW Annual short vegetation height v1
September 30, 2025
Earth Engine Data Catalog
Feature
Added COPERNICUS/MARINE/GLOBAL_ANALYSISFORECAST_BGC_001_028/BIO : Copernicus Global Ocean Bio-Geo-Chemical Forecast - BIO
Added COPERNICUS/MARINE/GLOBAL_SEA_SURFACE/NRT_DAILY : Multi Observation Global Ocean Sea Surface Salinity and Sea Surface Density : Daily, Near Real Time
Added COPERNICUS/MARINE/GLOBAL_SEA_SURFACE/REP_DAILY : Multi Observation Global Ocean Sea Surface Salinity and Sea Surface Density : Daily, Multi-Year Reprocessed
Added NASA/ECOSTRESS/L2T_STARS/V2 : ECOSTRESS Tiled Ancillary NDVI and Albedo L2 Global 70 m V002
September 16, 2025
Earth Engine Data Catalog
Feature
Added COPERNICUS/MARINE/GLOBAL_ANALYSISFORECAST_PHY_DAILY : Global Ocean Physics Analysis and Forecast Daily
September 09, 2025
Earth Engine Data Catalog
Feature
Added ECMWF/ERA5/HOURLY : ERA5 Hourly - ECMWF Climate Reanalysis
September 02, 2025
Earth Engine Data Catalog
Feature
Added JRC/CEMS_GLOFAS/FloodHazard/v2_1 : JRC Global River Flood Hazard Maps Version 2.1
August 26, 2025
Earth Engine Data Catalog
Feature
Added COPERNICUS/MARINE/OC_GLO_BGC/PLANKTON_MULTI_4KM : Global Ocean Colour: Bio-Geo-Chemical, L4, from Satellite Observations, Plankton, Multi-Sensor, 4KM
Added COPERNICUS/MARINE/OC_GLO_BGC/PLANKTON_OLCI_300M : Global Ocean Colour: Bio-Geo-Chemical, L4, from Satellite Observations, Plankton, OLCI, 300M
Added COPERNICUS/MARINE/OC_GLO_BGC/REFLECTANCE_OLCI_300M : Global Ocean Colour: Bio-Geo-Chemical, L4, from Satellite Observations, Reflectance, OLCI 300M
Added COPERNICUS/MARINE/OC_GLO_BGC/TRANSPARENCY_MULTI_4KM : Global Ocean Colour: Bio-Geo-Chemical, L4, from Satellite Observations, Transparency, Multi-Sensor, 4KM
Added COPERNICUS/MARINE/OC_GLO_BGC/TRANSPARENCY_OLCI_4KM : Global Ocean Colour: Bio-Geo-Chemical, L4, from Satellite Observations, Transparency, OLCI, 4KM
Added JRC/CEMS_GLOFAS/FloodHazard/v2 (no longer available)
Added projects/global-pasture-watch/assets/ggpp-30m/v1/ugpp_m : GPW Annual uncalibrated Gross Primary Productivity (uGPP) v1
Added projects/malariaatlasproject/assets/EVI_v061/1km/8-Daily : EVI: Malaria Atlas Project Gap-Filled Enhanced Vegetation Index (8-Daily 1km)
Added projects/malariaatlasproject/assets/EVI_v061/1km/Annual : EVI: Malaria Atlas Project Gap-Filled Enhanced Vegetation Index (Annual 1km)
Added projects/malariaatlasproject/assets/EVI_v061/1km/Monthly : EVI: Malaria Atlas Project Gap-Filled Enhanced Vegetation Index (Monthly 1km)
Added projects/malariaatlasproject/assets/LST_Day_v061/1km/8-Daily : LST Day: Malaria Atlas Project Gap-Filled Daytime Land Surface Temperature (8-Daily 1km)
Added projects/malariaatlasproject/assets/LST_Day_v061/1km/Annual : LST Day: Malaria Atlas Project Gap-Filled Daytime Land Surface Temperature (Annual 1km)
Added projects/malariaatlasproject/assets/LST_Day_v061/1km/Monthly : LST Day: Malaria Atlas Project Gap-Filled Daytime Land Surface Temperature (Monthly 1km)
Added projects/malariaatlasproject/assets/LST_Night_v061/1km/8-Daily : LST Night: Malaria Atlas Project Gap-Filled Nighttime Land Surface Temperature (8-Daily 1km)
Added projects/malariaatlasproject/assets/LST_Night_v061/1km/Annual : LST Night: Malaria Atlas Project Gap-Filled Nighttime Land Surface Temperature (Annual 1km)
Added projects/malariaatlasproject/assets/LST_Night_v061/1km/Monthly : LST Night: Malaria Atlas Project Gap-Filled Nighttime Land Surface Temperature (Monthly 1km)
Added projects/malariaatlasproject/assets/TCB_v061/1km/8-Daily : TCB: Malaria Atlas Project Gap-Filled Tasseled Cap Brightness (8-Daily 1km)
Added projects/malariaatlasproject/assets/TCB_v061/1km/Annual : TCB: Malaria Atlas Project Gap-Filled Tasseled Cap Brightness (Annual 1km)
Added projects/malariaatlasproject/assets/TCB_v061/1km/Monthly : TCB: Malaria Atlas Project Gap-Filled Tasseled Cap Brightness (Monthly 1km)
Added projects/malariaatlasproject/assets/TCW_v061/1km/8-Daily : TCW: Malaria Atlas Project Gap-Filled Tasseled Cap Wetness (8-Daily 1km)
Added projects/malariaatlasproject/assets/TCW_v061/1km/Annual : TCW: Malaria Atlas Project Gap-Filled Tasseled Cap Wetness (Annual 1km)
Added projects/malariaatlasproject/assets/TCW_v061/1km/Monthly : TCW: Malaria Atlas Project Gap-Filled Tasseled Cap Wetness (Monthly 1km)
August 19, 2025
Earth Engine Data Catalog
Feature
Added COPERNICUS/MARINE/OC_GLO_BGC/OPTICS_MULTI_4KM : Global Ocean Colour: Bio-Geo-Chemical, L4, from Satellite Observations, Optics, Multi-Sensor 4KM
Added COPERNICUS/MARINE/OC_GLO_BGC/PRIMARY_PRODUCTION_MULTI_4KM : Global Ocean Colour: Bio-Geo-Chemical, L4, from Satellite Observations, Primary Production, Multi-Sensor 4KM
Added COPERNICUS/MARINE/OC_GLO_BGC/REFLECTANCE_MULTI_4KM : Global Ocean Colour: Bio-Geo-Chemical, L4, from Satellite Observations, Reflectance, Multi-Sensor 4KM
Added USGS/3DEP/10m_collection : USGS 3DEP 10m National Map Seamless (1/3 Arc-Second)
August 05, 2025
Earth Engine Data Catalog
Feature
Added MODIS/061/MYD16A2 : MYD16A2.061: Aqua Net Evapotranspiration 8-Day L4 Global 500m SIN Grid V061
Added NASA/SMAP/SPL4SMGP/008 : SPL4SMGP.008 SMAP L4 Global 3-hourly 9-km Surface and Root Zone Soil Moisture
July 29, 2025
Earth Engine Data Catalog
Feature
Added USFS/GTAC/TreeMap/v2020 : USFS TreeMap v2020
Added USFS/GTAC/TreeMap/v2022 : USFS TreeMap v2022
Added projects/nature-trace/assets/farmscapes/england_v1_0 : Farmscapes 2020
Added projects/nature-trace/assets/forest_typology/natural_forest_2020_v1_0_collection : Natural Forests of the World 2020
July 22, 2025
Earth Engine Data Catalog
Feature
Added COPERNICUS/MARINE/SATELLITE_OCEAN_COLOR/V6 : Copernicus Satellite Ocean Color Daily Data
July 21, 2025
Earth Engine Server
Breaking
BACKWARD INCOMPATIBLE The Google Drive main OAuth scope , https://www.googleapis.com/auth/drive has to be requested explicitly for Earth Engine requests that interact with Google Drive. Consider upgrading your client library to v1.5.12 or newer, which includes this scope in the default list of scopes to use for authorization.
July 15, 2025
Earth Engine Data Catalog
Feature
Added FAO/WAPOR/3/L1_RET_E : WAPOR Daily Reference Evapotranspiration 3.0
July 10, 2025
Earth Engine Server
Announcement
Added the ability to set a daily limit on EECU-time usage for a Cloud project to help control usage and costs. See Cost controls for more information.
July 08, 2025
Earth Engine Data Catalog
Feature
Added FAO/WAPOR/3/L1_AETI_D : WAPOR Actual Evapotranspiration and Interception 3.0
Added FAO/WAPOR/3/L1_E_D : WAPOR Dekadal Evaporation 3.0
Added FAO/WAPOR/3/L1_I_D : WAPOR Dekadal Interception 3.0
Added FAO/WAPOR/3/L1_RET-E (no longer available)
Added FAO/WAPOR/3/L1_RET_D : WAPOR Dekadal Reference Evapotranspiration 3.0
Added FAO/WAPOR/3/L1_T_D : WAPOR Dekadal Transpiration 3.0
June 27, 2025
Earth Engine Server
Announcement
All noncommercial projects created before April 15, 2025 must verify noncommercial eligibility to maintain access to Earth Engine. Learn more if you need to take action in the Earth Engine Cloud Console .
June 24, 2025
Earth Engine Data Catalog
Feature
Added ECMWF/NRT_FORECAST/IFS/SCWV : ECMWF Near-Realtime IFS Wave (Short-Cutoff) Forecasts
Added ECMWF/NRT_FORECAST/IFS/WAVE : ECMWF Near-Realtime IFS Wave Forecasts
Added NASA/TEMPO/HCHO_L3 : TEMPO gridded HCHO vertical columns V03
Added NASA/TEMPO/HCHO_L3_QA : TEMPO gridded HCHO (QA filtered) vertical columns V03
June 17, 2025
Earth Engine Data Catalog
Feature
Added GOOGLE/SATELLITE_EMBEDDING/V1/ANNUAL : Satellite Embedding V1
Added projects/forestdatapartnership/assets/cocoa/model_2025a : Cocoa Probability model 2025a
Added projects/forestdatapartnership/assets/coffee/model_2025a : Coffee Probability model 2025a
Added projects/forestdatapartnership/assets/palm/model_2025a : Palm Probability model 2025a
Added projects/forestdatapartnership/assets/rubber/model_2025a : Rubber Tree Probability model 2025a
June 10, 2025
Earth Engine Data Catalog
Feature
Added projects/edf-methanesat-ee/assets/public-preview/L4area_v2 : MethaneSAT L4 Area Sources Public Preview V2.0.0
June 03, 2025
Earth Engine Data Catalog
Feature
Added JAXA/ALOS/AW3D30/V4_1 : ALOS DSM: Global 30m v4.1
Added UCSB/CHC/CMIP6/v1 : The Climate Hazards Center (CHC) Coupled Model Intercomparison Project Phase 6 (CHC-CMIP6)
Added UMD/hansen/global_forest_change_2024_v1_12 : Hansen Global Forest Change v1.12 (2000-2024)
Added projects/landandcarbon/assets/wri_gdm_drivers_forest_loss_1km/v1_1_2001_2023 : WRI/Google DeepMind Global Drivers of Forest Loss 2001-2023 v1.1
Added projects/landandcarbon/assets/wri_gdm_drivers_forest_loss_1km/v1_2001_2022 : WRI/Google DeepMind Global Drivers of Forest Loss 2001-2022 v1.0
Added projects/landandcarbon/assets/wri_gdm_drivers_forest_loss_1km/v1_2_2001_2024 : WRI/Google DeepMind Global Drivers of Forest Loss 2001-2024 v1.2
May 27, 2025
Earth Engine Data Catalog
Feature
Added NASA/TEMPO/NO2_L3_QA : TEMPO gridded NO2 (QA filtered) tropospheric and stratospheric columns V03
May 13, 2025
Earth Engine Data Catalog
Feature
Added USGS/NLCD_RELEASES/2023_REL/TCC/v2023-5 : USFS Tree Canopy Cover v2023-5 (CONUS and OCONUS)
May 06, 2025
Earth Engine Data Catalog
Feature
Added USFS/GTAC/LCMS/v2024-10 : USFS Landscape Change Monitoring System v2024.10 (CONUS and OCONUS)
April 29, 2025
Earth Engine Data Catalog
Feature
Added ISRIC/SoilGrids250m/v2_0 : SoilGrids250m 2.0 - Volumetric Water Content
Added NASA/TEMPO/NO2_L3 : TEMPO gridded NO2 tropospheric and stratospheric columns V03
Added UMN/PGC/ArcticDEM/V4/2m_mosaic : ArcticDEM Mosaic V4.1
April 22, 2025
Earth Engine JavaScript Client Library
1.5.12
Change
Added the Google Drive main OAuth scope , https://www.googleapis.com/auth/drive , to the default list of scopes to use for authorization. The Google Drive scope is currently not required, but in the future it will have to be requested explicitly for Earth Engine requests that interact with Google Drive.
Earth Engine Python Client Library
1.5.12
Change
Added the Google Drive main OAuth scope , https://www.googleapis.com/auth/drive , to the default list of scopes to use for authorization. The Google Drive scope is currently not required, but in the future it will have to be requested explicitly for Earth Engine requests that interact with Google Drive.
April 15, 2025
Earth Engine Data Catalog
Feature
Added ECMWF/NRT_FORECAST/IFS/OPER : ECMWF Near-Realtime IFS Atmospheric Forecasts
Added NOAA/GOES/19/FDCC : GOES-19 FDCC Series ABI Level 2 Fire/Hot Spot Characterization CONUS
Added NOAA/GOES/19/FDCF : GOES-19 FDCF Series ABI Level 2 Fire/Hot Spot Characterization Full Disk
Added NOAA/GOES/19/MCMIPC : GOES-19 MCMIPC Series ABI Level 2 Cloud and Moisture Imagery CONUS
Added NOAA/GOES/19/MCMIPF : GOES-19 MCMIPF Series ABI Level 2 Cloud and Moisture Imagery Full Disk
Added NOAA/GOES/19/MCMIPM : GOES-19 MCMIPM Series ABI Level 2 Cloud and Moisture Imagery Mesoscale
April 14, 2025
Earth Engine Code Editor
Feature
Added ui.Widget styling support for border-related CSS properties, including
borderColor , borderRadius , borderStyle , and borderWidth . This allows
users to set border styling per side in the format top right bottom left ,
and to round the corners.
April 09, 2025
Earth Engine Server
Announcement
Announced
Earth Engine in BigQuery
and added
ST_REGIONSTATS() ,
a new BigQuery geography function that invokes Earth Engine to efficiently
read and analyze geospatial raster data within a geographic area of interest
using SQL. In addition, Earth Engine datasets in
Analytics Hub
now give you access to a growing collection of Earth Engine datasets
directly within BigQuery, simplifying data discovery and access. See
BigQuery release notes
and learn more here.
April 01, 2025
Earth Engine Data Catalog
Feature
Added NASA/VIIRS/002/VNP46A2 : VNP46A2: VIIRS Lunar Gap-Filled BRDF Nighttime Lights Daily L3 Global 500m
Earth Engine Server
Feature
Added two new algorithms that allow reading data from BigQuery:
ee.FeatureCollection.loadBigQueryTable() and
ee.FeatureCollection.runBigQuery() . For more details see the
Read from BigQuery
documentation.
March 17, 2025
Earth Engine Python Client Library
1.5.7
Feature
Added --version to the Earth Engine CLI to return the client version.
March 11, 2025
Earth Engine Data Catalog
Feature
Added ISRIC/SoilGrids250m/v2_0 : SoilGrids250m 2.0 - Volumetric Water Content
Added NASA/VIIRS/002/VNP43IA4 : VNP43IA4: BRDF/Albedo Quality Daily L3 Global 500m SIN Grid
Added projects/edf-methanesat-ee/assets/public-preview/L3concentration : MethaneSAT L3 Concentration Public Preview V1.0.0
Added projects/edf-methanesat-ee/assets/public-preview/L4area : MethaneSAT L4 Area Sources Public Preview V1.0.0
Added projects/edf-methanesat-ee/assets/public-preview/L4point : MethaneSAT L4 Point Sources Public Preview V1.0.0
February 26, 2025
Earth Engine Server
Feature
Ingestion/upload of GeoTIFFs now supports internal masks
GMF_PER_DATASET .
Only binary masks are currently supported. If an ImageManifest contains
explicit mask bands, those bands take precedence over any internal masks.
ImageManifest cannot contain no-data values and GeoTIFFs with internal
masks. GeoTIFFs that fail to meet these conditions will not be ingested and
an error will be returned.
February 25, 2025
Earth Engine Data Catalog
Feature
Added WRI/SBTN/naturalLands/v1_1/2020 : SBTN Natural Lands Map v1.1
February 18, 2025
Earth Engine Data Catalog
Feature
Added MODIS/061/MOD44B : MOD44B.061 Terra Vegetation Continuous Fields Yearly Global 250m
Added WRI/SBTN/naturalLands/v1/2020 : SBTN Natural Lands Map v1
February 11, 2025
Earth Engine Data Catalog
Feature
Added MODIS/062/MCD18A1 : MCD18A1.062 Surface Radiation Daily/3-Hour
Added MODIS/062/MCD18C2 : MCD18C2.062 Photosynthetically Active Radiation Daily 3-Hour
February 04, 2025
Earth Engine Data Catalog
Feature
Added NASA/GRACE/MASS_GRIDS_V04/MASCON : GRACE Monthly Mass Grids Release 6.3 Version 4 - Global Mascons
Added NASA/GRACE/MASS_GRIDS_V04/MASCON_CRI : GRACE Monthly Mass Grids Version 04 - Global Mascon (CRI Filtered)
January 28, 2025
Earth Engine Data Catalog
Feature
Added CSIC/SPEI/2_10 : SPEIbase: Standardised Precipitation-Evapotranspiration Index database, Version 2.10
Added MODIS/061/MOD10A2 : MOD10A2.061 Terra Snow Cover 8-Day L3 Global 500m
Added NOAA/CDR/VIIRS/LAI_FAPAR/V1 : NOAA CDR VIIRS LAI FAPAR: Leaf Area Index and Fraction of Absorbed Photosynthetically Active Radiation, Version 1
Added NOAA/CDR/VIIRS/NDVI/V1 : NOAA CDR VIIRS NDVI: Normalized Difference Vegetation Index, Version 1
Added USDA/WRC/v0 : Wildfire Risk to Communities v0
Earth Engine Python Client Library
1.5.0
Change
The Earth Engine Python client library now requires a Cloud project when
initializing with localhost or gcloud-legacy
authentication modes .
January 22, 2025
Earth Engine Python Client Library
1.4.6
Fixed
Fixed the processing of keyword arguments (kwargs) in the ee.Geometry
constructors. Keyword arguments were passed to the ee.Geometry algorithm
as though they were positional arguments. Check your use of ee.Geometry if
you specified evenOdd , geodesic , or proj as keyword arguments.
January 14, 2025
Earth Engine Data Catalog
Feature
Added projects/gcp-public-data-weathernext/assets/126478713_1_0 : WeatherNext Gen Forecasts
January 07, 2025
Earth Engine Data Catalog
Feature
Added WRI/Aqueduct_Water_Risk/V4/baseline_annual : WRI Aqueduct Baseline Annual Version 4.0
Added WRI/Aqueduct_Water_Risk/V4/baseline_monthly : WRI Aqueduct Baseline Monthly Version 4.0
Added WRI/Aqueduct_Water_Risk/V4/future_annual : WRI Aqueduct Future Annual Version 4.0
January 06, 2025
Earth Engine Code Editor
Change
Updated Map.centerObject() to use ee.FeatureCollection.bounds() .
December 24, 2024
Earth Engine Data Catalog
Feature
Added AHN/AHN3 : AHN3: Netherlands AHN 0.5m
Added AHN/AHN4 : AHN4: Netherlands AHN 0.5m
Added NASA/HLS/HLSS30/v002 : HLSS30: HLS Sentinel-2 Multi-spectral Instrument Surface Reflectance Daily Global 30m
December 17, 2024
Earth Engine Data Catalog
Feature
Added projects/global-pasture-watch/assets/ggc-30m/v1/cultiv-grassland_p : GPW Annual Probabilities of Cultivated Grasslands v1
Added projects/global-pasture-watch/assets/ggc-30m/v1/grassland_c : GPW Annual Dominant Class of Grasslands v1
Added projects/global-pasture-watch/assets/ggc-30m/v1/nat-semi-grassland_p : GPW Annual Probabilities of Natural/Semi-natural Grasslands v1
December 16, 2024
Earth Engine Server
Feature
Added new algorithm to find the bounding box of a collection: ee.FeatureCollection.bounds() . This should be a more performant alternative to the idiom featureCollection.geometry().bounds() .
December 10, 2024
Earth Engine Data Catalog
Feature
Added projects/gcp-public-data-weathernext/assets/59572747_4_0 : WeatherNext Graph Forecasts
December 03, 2024
Earth Engine Data Catalog
Feature
Added JRC/GFC2020/V2 (no longer available)
Added projects/forestdatapartnership/assets/cocoa/model_2024a (no longer available)
Added projects/forestdatapartnership/assets/community_forests/ForestPersistence_2020 : Forest Persistence v0
Added projects/forestdatapartnership/assets/palm/model_2024a (no longer available)
Added projects/forestdatapartnership/assets/rubber/model_2024a (no longer available)
November 18, 2024
Earth Engine Python Client Library
1.4.0
Feature
Released the alpha upload external_image CLI command to Preview. For more
details, see the
CLI reference for external_image .
November 12, 2024
Earth Engine Data Catalog
Feature
Added NOAA/CPC/Precipitation : CPC Global Unified Gauge-Based Analysis of Daily Precipitation
Added NOAA/CPC/Temperature : CPC Global Unified Temperature
Added UCSB-CHG/CHIRTS/DAILY : CHIRTS Temperature Daily: Climate Hazards Center InfraRed Temperature with Stations daily data product
Added projects/geoscience-aus-cat/assets/ga_ls8cls9c_gm_cyear_3 (no longer available)
November 08, 2024
Earth Engine Server
Breaking
All Cloud Storage reads through the ee.Blob() and ee.Image.loadGeoTIFF()
algorithms must now meet the following criteria:
The bucket metadata must be accessible (check the storage.buckets.get
permission)
The bucket must be located in one of:
The US multi-region
A dual-region including US-CENTRAL1
The US-CENTRAL1 region
Any bucket used in the month of October 2024 not meeting the criteria
has been automatically allowed for future use.
November 05, 2024
Earth Engine Data Catalog
Feature
Added NASA/ORNL/global_forest_classification_2020/V1 : Global 2020 Forest Classification for IPCC Aboveground Biomass Tier 1 Estimates, V1
October 29, 2024
Earth Engine Data Catalog
Feature
Added JRC/GFC2020_subtypes/V0 (no longer available)
Added UN/Geodata/BNDA_simplified/current : United Nations Geospatial Data: BNDA_simplified
October 28, 2024
Earth Engine Python Client Library
1.2.0
Breaking
Dropped support for Python 3.8 now that it is end-of-life.
Fixed
Added ImageCollection.count() , a static method that returns the number of
images in the collection.
October 22, 2024
Earth Engine Data Catalog
Feature
Added IUCN/GlobalEcosystemTypology/current : IUCN Global Ecosystem Typology Level 3: 1.0
Added LARSE/GEDI/GRIDDEDVEG_002/COUNTS/V1/12KM : Gridded GEDI Vegetation Structure Metrics and Biomass Density with COUNTS metrics, 12KM pixel size
Added LARSE/GEDI/GRIDDEDVEG_002/COUNTS/V1/1KM : Gridded GEDI Vegetation Structure Metrics and Biomass Density with COUNTS metrics, 1KM pixel size
Added LARSE/GEDI/GRIDDEDVEG_002/COUNTS/V1/6KM : Gridded GEDI Vegetation Structure Metrics and Biomass Density with COUNTS metrics, 6KM pixel size
October 15, 2024
Earth Engine Data Catalog
Feature
Added JRC/GHSL/P2023A/GHS_SMOD_V2-0 : GHSL: Degree of Urbanization 1975-2030 V2-0 (P2023A)
October 08, 2024
Earth Engine Data Catalog
Feature
Added UK/NHM/BII/V1 (no longer available)
September 24, 2024
Earth Engine Data Catalog
Feature
Added BNETD/land_cover/v1 : Cote d'Ivoire BNETD 2020 Land Cover Map
Added GOOGLE/Research/open-buildings-temporal/v1 : Open Buildings Temporal V1
Added JRC/CEMS_GLOFAS/FloodHazard/v1 (no longer available)
September 03, 2024
Earth Engine Data Catalog
Feature
Added EDF/MethaneSAT/MethaneAIR/L3concentration : MethaneAIR L3 Concentration v1
Added EDF/OGIM/current : OGIM: Oil and Gas Infrastructure Mapping Database v2.5.1
Added NASA/EMIT/L2A/RFL : EMIT L2A Estimated Surface Reflectance and Uncertainty and Masks 60 m
Added WRI/SBTN/naturalLands/v1 (no longer available)
Earth Engine Python Client Library
0.1.419
Fixed
Fixed a bug where the quota project wasn't being set when authenticating
using the notebook auth mode. After this change, users must have the Service
Usage Consumer role ( roles/serviceusage.serviceUsageConsumer ) on the
authentication project in order to use the notebook authentication mode. See
the Earth Engine
Authentication and Initialization
guide for more details.
Earth Engine Server
Breaking
Fixed signed int8 for ingest and export. For
ingest, the system used to treat signed int8 as unsigned int8 with negative
values mapped to [128..255]. Those values are now correctly assigned their
negative value. For export, the system used to cast int8 to int16, while
correctly storing the negative values. Export will now write an int8 with
the correct values.
August 27, 2024
Earth Engine Data Catalog
Feature
Added EDF/MethaneSAT/MethaneAIR/L4area : MethaneAIR L4 Area Sources v1
Added EDF/MethaneSAT/MethaneAIR/L4point : MethaneAIR L4 Point Sources v1
Added LARSE/GEDI/GRIDDEDVEG_002/V1/12KM : Gridded GEDI Vegetation Structure Metrics and Biomass Density, 12KM pixel size
Added LARSE/GEDI/GRIDDEDVEG_002/V1/1KM : Gridded GEDI Vegetation Structure Metrics and Biomass Density, 1KM pixel size
Added LARSE/GEDI/GRIDDEDVEG_002/V1/6KM : Gridded GEDI Vegetation Structure Metrics and Biomass Density, 6KM pixel size
August 20, 2024
Earth Engine Data Catalog
Feature
Added Estonia/Maamet/orthos/mono_low_flying : Estonia mono low flying orthophotos
Added Estonia/Maamet/orthos/rgb_low_flying : Estonia RGB low flying orthophotos
Added NASA/VIIRS/002/VNP13A1 : VNP13A1.002: VIIRS Vegetation Indices 16-Day 500m
Added NASA/VIIRS/002/VNP14A1 : VNP14A1.002: Thermal Anomalies/Fire Daily L3 Global 1km SIN Grid
Added NASA/VIIRS/002/VNP21A1D : VNP21A1D.002: Day Land Surface Temperature and Emissivity Daily 1km
Added NASA/VIIRS/002/VNP21A1N : VNP21A1N.002: Night Land Surface Temperature and Emissivity Daily 1km
Added projects/neon-prod-earthengine/assets/DEM/001 : NEON Digital Elevation Model (DEM)
Added projects/neon-prod-earthengine/assets/HSI_REFL/001 : NEON Surface Directional Reflectance
Added projects/neon-prod-earthengine/assets/HSI_REFL/002 : NEON Surface Bidirectional Reflectance
Added projects/neon-prod-earthengine/assets/RGB/001 : NEON RGB Camera Imagery
August 13, 2024
Earth Engine Data Catalog
Feature
Added CAS/IGSNRR/PML/V2_v018 (no longer available)
Added WCMC/WDOECM/current/points : WDOECM: Other Effective Area-based Conservation Measures (points)
Added WCMC/WDOECM/current/polygons : WDOECM: Other Effective Area-based Conservation Measures (polygons)
August 06, 2024
Earth Engine Data Catalog
Feature
Added NASA/GPM_L3/IMERG_V07 : GPM: Global Precipitation Measurement (GPM) Release 07
Added NASA/VIIRS/002/VNP09H1 : VNP09H1: VIIRS Surface Reflectance 8-Day L3 Global 500m
Added NASA/VIIRS/002/VNP15A2H : VNP15A2H: LAI/FPAR 8-Day L4 Global 500m SIN Grid
July 24, 2024
Earth Engine Server
Fixed
Fixed a bug that caused GeoTIFF exports with cloudOptimized set to true to
fail if the output GeoTIFF was larger than 4gb. Earth Engine will now always
produce BigTIFF
regardless of the value of cloudOptimized .
July 23, 2024
Earth Engine Data Catalog
Feature
Added MODIS/061/MOD17A2HGF : MOD17A2HGF.061: Terra Gross Primary Productivity 8-Day Global 500m
Added NASA/EMIT/L1B/RAD : EMIT L1B At-Sensor Calibrated Radiance and Geolocation Data 60 m
Added projects/neon-prod-earthengine/assets/CHM/001 : NEON Canopy Height Model (CHM)
July 16, 2024
Earth Engine Code Editor
Breaking
Reduced the maximum allowable header size of a
GeoTIFF (produced by the ee.Image.loadGeoTIFF() algorithm or by
CreateAsset as a COG-backed asset) from 32mb to 10mb. This change does not
affect COG-backed assets with headers >10mb created prior to this date.
Fixed
Fixed a bug where specifying minWidth and minHeight style properties on
ui.Slider widgets had no effect. Setting these properties now allows for
horizontal sliders narrower than the default minWidth of 50px, and
vertical sliders shorter than the default minHeight of 100px.
July 10, 2024
Earth Engine Server
Fixed
Fixed a bug that caused GeoTIFF exports to ignore skipEmptyTiles if
formatOptions.cloudOptimized was true.
June 25, 2024
Earth Engine Data Catalog
Feature
Added CANADA/NFIS/NTEMS/CA_FOREST_AGE : Landsat-derived forest age for Canada 2019
Added LANDSAT/COMPOSITES/C02/T1_L2_32DAY_BAI : Landsat Collection 2 Tier 1 Level 2 32-Day BAI Composite
Added LANDSAT/COMPOSITES/C02/T1_L2_32DAY_EVI : Landsat Collection 2 Tier 1 Level 2 32-Day EVI Composite
Added LANDSAT/COMPOSITES/C02/T1_L2_32DAY_NBR : Landsat Collection 2 Tier 1 Level 2 32-Day NBR Composite
Added LANDSAT/COMPOSITES/C02/T1_L2_32DAY_NDVI : Landsat Collection 2 Tier 1 Level 2 32-Day NDVI Composite
Added LANDSAT/COMPOSITES/C02/T1_L2_32DAY_NDWI : Landsat Collection 2 Tier 1 Level 2 32-Day NDWI Composite
Added LANDSAT/COMPOSITES/C02/T1_L2_ANNUAL_BAI : Landsat Collection 2 Tier 1 Level 2 Annual BAI Composite
Added LANDSAT/COMPOSITES/C02/T1_L2_ANNUAL_EVI : Landsat Collection 2 Tier 1 Level 2 Annual EVI Composite
Added LANDSAT/COMPOSITES/C02/T1_L2_ANNUAL_NBR : Landsat Collection 2 Tier 1 Level 2 Annual NBR Composite
Added LANDSAT/COMPOSITES/C02/T1_L2_ANNUAL_NDVI : Landsat Collection 2 Tier 1 Level 2 Annual NDVI Composite
Added LANDSAT/COMPOSITES/C02/T1_L2_ANNUAL_NDWI : Landsat Collection 2 Tier 1 Level 2 Annual NDWI Composite
June 18, 2024
Earth Engine Data Catalog
Feature
Added HU_BERLIN/EPFD/V2/points : European Primary Forest Dataset - Points
Added HU_BERLIN/EPFD/V2/polygons : European Primary Forest Dataset - Polygons
Added NASA/VIIRS/002/VNP09GA : VNP09GA: VIIRS Surface Reflectance Daily 500m and 1km
Added NOAA/IBTrACS/v4 : International Best Track Archive for Climate Stewardship Project
June 11, 2024
Earth Engine Data Catalog
Feature
Added LANDSAT/COMPOSITES/C02/T1_L2_8DAY_BAI : Landsat Collection 2 Tier 1 Level 2 8-Day BAI Composite
Added LANDSAT/COMPOSITES/C02/T1_L2_8DAY_EVI : Landsat Collection 2 Tier 1 Level 2 8-Day EVI Composite
Added LANDSAT/COMPOSITES/C02/T1_L2_8DAY_NBR : Landsat Collection 2 Tier 1 Level 2 8-Day NBR Composite
Added LANDSAT/COMPOSITES/C02/T1_L2_8DAY_NDVI : Landsat Collection 2 Tier 1 Level 2 8-Day NDVI Composite
Added LANDSAT/COMPOSITES/C02/T1_L2_8DAY_NDWI : Landsat Collection 2 Tier 1 Level 2 8-Day NDWI Composite
June 07, 2024
Earth Engine Server
Breaking
Changed the way that the ee.Image.loadGeoTIFF()
algorithm and COG-backed assets select lower resolution overviews if a
GeoTIFF is missing pyramid levels. Earth Engine will now resample to the
nearest higher-resolution overview instead of the closest overview
regardless of resolution. This does not affect GeoTIFFs that are not missing
intermediate pyramid levels.
June 04, 2024
Earth Engine Data Catalog
Feature
Added MODIS/061/MYD09CMG : MYD09CMG.061 Aqua Surface Reflectance Daily L3 Global 0.05 Deg CMG
May 28, 2024
Earth Engine Data Catalog
Feature
Added IPCC/AR6/SLP : IPCC AR6 Sea Level Projections Regional (Medium Confidence)
Added NASA/GPM_L3/IMERG_MONTHLY_V07 : GPM: Monthly Global Precipitation Measurement (GPM) vRelease 07
May 14, 2024
Earth Engine Data Catalog
Feature
Added NASA/GRACE/MASS_GRIDS_V04/OCEAN : GRACE Monthly Mass Grids Release 06 Version 04 - Ocean
Added projects/forestdatapartnership/assets/community_palm/20240312 (no longer available)
May 10, 2024
Earth Engine Server
Feature
Added support for overwrite parameter in
Export.table.toBigQuery()
method, which allows for control over overwriting data in already existing
destination table.
May 07, 2024
Earth Engine Data Catalog
Feature
Added GOOGLE/GLOBAL_CCDC/V1 : Google Global Landsat-based CCDC Segments (1999-2019)
April 30, 2024
Earth Engine Data Catalog
Feature
Added NASA/GRACE/MASS_GRIDS_V03/MASCON (no longer available)
Added NASA/GRACE/MASS_GRIDS_V03/MASCON_CRI (no longer available)
April 23, 2024
Earth Engine Data Catalog
Feature
Added JRC/GHSL/P2023A/GHS_BUILT_S_10m : GHSL: Global built-up surface 10m (P2023A)
Added NASA/GRACE/MASS_GRIDS_V04/LAND : GRACE Monthly Mass Grids Release 06 Version 04 - Land
April 18, 2024
Earth Engine Server
Feature
Added support for the Bray-Curtis distance metric ( braycurtis ) to
ee.Classifier.smileKNN() .
April 16, 2024
Earth Engine Data Catalog
Feature
Added USFS/GTAC/LCMS/v2023-9 (no longer available)
April 09, 2024
Earth Engine Data Catalog
Feature
Added WRI/Aqueduct_Flood_Hazard_Maps/V2 : WRI Aqueduct Floods Hazard Maps Version 2
April 03, 2024
Earth Engine JavaScript Client Library
0.1.397
Fixed
Fixed a bug in ee.data.listAssets() and ee.data.listImages() that caused
only a single page of results (up to 1000 entries) to be returned. This now
matches the Python implementation, which returns all results by default. To
return a single page in either client, specify a pageSize value. The
documentation in both the JavaScript and Python clients has been updated to
reflect this behavior.
Earth Engine Python Client Library
0.1.397
Fixed
Updated the error handling logic for HTTP requests to convert
requests.exceptions.ConnectionError and
requests.exceptions.ChunkedEncodingError to httplib2-like errors. In some
cases, these errors were not being treated as retryable; now, the retry
logic should behave properly for these errors.
Feature
Added
ee.data.createFolder
to the Python client to match the JavaScript client. Note that the force
and callback parameters are not supported.
March 26, 2024
Earth Engine Data Catalog
Feature
Added UMD/hansen/global_forest_change_2023_v1_11 (no longer available)
March 25, 2024
Earth Engine Server
Change
Found and fixed a reprojection error which affected the correctness of some
Earth Engine results from Mar 7, 2024 to Mar 13, 2024. See the
announcement
for more details.
March 19, 2024
Earth Engine Data Catalog
Feature
Added WM/geoLab/geoBoundaries/600/ADM0 : geoBoundaries: Political administrative boundaries at Country level (ADM0), v6.0.0
Added WM/geoLab/geoBoundaries/600/ADM1 : geoBoundaries: Political administrative boundaries at District level (ADM1), v6.0.0
Added WM/geoLab/geoBoundaries/600/ADM2 : geoBoundaries: Political administrative boundaries at Municipality level (ADM2), v6.0.0
March 13, 2024
Earth Engine Code Editor
Feature
Added a new code annotation and warning message in the script editor to
highlight usage of
deprecated Landsat Collection 1 ,
which needs to be converted to Collection 2 as soon as possible.
March 12, 2024
Earth Engine Data Catalog
Feature
Added NASA/EMIT/L2B/CH4ENH : Earth Surface Mineral Dust Source Investigation- Methane Enhancement
Added NASA/EMIT/L2B/CH4PLM : Earth Surface Mineral Dust Source Investigation- Methane Plume Complexes
March 06, 2024
Earth Engine Server
Feature
Added
priority
to Earth Engine Export batch tasks. This feature is currently only
available when using a Cloud project that is registered for paid Earth
Engine access.
Feature
Added Geometry.fromS2CellId() and Geometry.fromS2CellToken() for working
with S2 (http://s2geometry.io/) polygons.
March 05, 2024
Earth Engine Data Catalog
Feature
Added GOOGLE/AirView/California_Unified_2015_2019 : Google Street View Air Quality: High Resolution Air Pollution Mapping in California
Added USGS/NLCD_RELEASES/2023_REL/RCMAP/V6/COVER : RCMAP Rangeland Component Timeseries (1985-2023), v06
Added USGS/NLCD_RELEASES/2023_REL/RCMAP/V6/TRENDS : RCMAP Rangeland Trends for Component Timeseries (1985-2023), v06
Added USGS/NLCD_RELEASES/2023_REL/RCMAP/V6/TRENDS_YEAR : RCMAP Rangeland Trends Year for Component Timeseries (1985-2023), v06
February 27, 2024
Earth Engine Data Catalog
Feature
Added GLIMS/20230607 : GLIMS 2023: Global Land Ice Measurements From Space
February 20, 2024
Earth Engine Data Catalog
Feature
Added NASA/LANCE/NOAA20_VIIRS/C2 : VJ114IMGTDL_NRT Daily Raster: VIIRS (NOAA-20) Band 375m Active Fire
Added NASA/LANCE/SNPP_VIIRS/C2 : VNP14IMGTDL_NRT Daily Raster: VIIRS (S-NPP) Band 375m Active Fire
Added NASA/SMAP/SPL3SMP_E/006 : SPL3SMP_E.006 SMAP L3 Radiometer Global Daily 9 km Soil Moisture
Added NOAA/VIIRS/DNB/ANNUAL_V22 : VIIRS Nighttime Day/Night Annual Band Composites V2.2
February 13, 2024
Earth Engine Data Catalog
Feature
Added EDF/MethaneSAT/MethaneAIR/methaneair-L4area-2021 (no longer available)
Added EDF/MethaneSAT/MethaneAIR/methaneair-L4point-2021 (no longer available)
Added EDF/OGIM/OGIM_v2-4_RF06_RF08 (no longer available)
February 06, 2024
Earth Engine Data Catalog
Feature
Added UK/EA/ENGLAND_1M_TERRAIN/2022 : England 1m Composite DTM/DSM (Environment Agency)
January 31, 2024
Earth Engine JavaScript Client Library
0.1.388
Change
Migrated the authorization workflow in the JavaScript library from the
Google API Client Library for JavaScript
to
Google Identity Services .
Earth Engine Python Client Library
0.1.388
Feature
Added __init__() for docstrings and argument type annotations to Array ,
ConfusionMatrix , DateRange , Model , Projection , and Reducer .
January 30, 2024
Earth Engine Data Catalog
Feature
Added NOAA/CDR/AVHRR/AOT/V4 : NOAA CDR AVHRR AOT: Daily Aerosol Optical Thickness Over Global Oceans, v04
Added USGS/GMTED2010_FULL : GMTED2010: Global Multi-resolution Terrain Elevation Data 2010
Added WM/geoLab/geoBoundaries/500/ADM0 (no longer available)
Added WM/geoLab/geoBoundaries/500/ADM1 (no longer available)
Added WM/geoLab/geoBoundaries/500/ADM2 (no longer available)
January 23, 2024
Earth Engine Data Catalog
Feature
Added USGS/LIMA/SR_METADATA : Landsat Image Mosaic of Antarctica (LIMA) - Processed Landsat Scenes (16 bit) Metadata
January 18, 2024
Earth Engine Python Client Library
0.1.386
Feature
Added __init__() for docstrings and argument type annotations to
ErrorMargin and Join .
Earth Engine Server
Breaking
Changed the behavior of ee.data.listOperations
to return only tasks created in the currently
selected Cloud project ,
including those started by other users. For more details, visit the
developer announcement .
January 16, 2024
Earth Engine Data Catalog
Feature
Added UMT/Climate/IrrMapper_RF/v1_2 : IrrMapper Irrigated Lands, Version 1.2
January 10, 2024
Earth Engine Python Client Library
0.1.385
Fixed
Fixed authentication issues for the gcloud auth application-default calls
to login and set-quota-project . Added the cloud-platform scope to the
default scopes used by ee.Authenticate() .
Feature
Added __init__() for docstrings and argument type annotations to
PixelType .
January 09, 2024
Earth Engine Data Catalog
Feature
Added JAXA/ALOS/PALSAR-2/Level2_1/StripMap_202401 : ALOS-2 PALSAR-2 StripMap Level 2.1
Added MODIS/061/MOD13C1 : MOD13C1.061: Terra Vegetation Indices 16-Day L3 Global 0.05 Deg Climate Modeling Grid
Added MODIS/061/MYD13C1 : MYD13C1.061: Aqua Vegetation Indices 16-Day L3 Global 0.05 Deg CMG
Added USGS/NLCD_RELEASES/2021_REL/TCC/v2021-4 (no longer available)
January 02, 2024
Earth Engine Data Catalog
Feature
Added CSIC/SPEI/2_9 (no longer available)
December 26, 2023
Earth Engine Data Catalog
Feature
Added USFS/GTAC/TreeMap/v2016 : USFS TreeMap v2016 (Conterminous United States)
December 12, 2023
Earth Engine Data Catalog
Feature
Added JRC/GFC2020/V1 (no longer available)
December 08, 2023
Earth Engine JavaScript Client Library
0.1.383
Feature
Added Export.classifier.toAsset and ee.Classifier.load for exporting and
loading saved ee.Classifier.smileCart and
ee.Classifier.smileRandomForest classifiers. The exported classifiers will
be visible and managed just like existing Earth Engine assets. More details
are available at our
supervised classification
and our
export reference page .
Feature
Added getMapId() to ee.Image , ee.ImageCollection ,
ee.Feature , and ee.FeatureCollection to match the Python client. Marked
getMap() as deprecated.
Earth Engine Python Client Library
0.1.383
Feature
Updated ee.Authenticate() and ee.Initialize() to support colab mode,
added new gcloud mode for remote machines (which makes the --quiet flag
no longer necessary), and introduced localhost mode. ee.Initialize() now
uses ambient google.auth.default() credentials if present.
ee.Authenticate(force=True) forces a refresh, but by default will now
reuse existing credentials. See the
auth page for the
revised documentation.
Change
Switched from setup.py to pyproject.toml for building and installation.
Drops support for installing with distutils .
Deprecated
Removed opt_ keyword for parameters, with backwards
compatibility with existing scripts that use opt_ arguments. Note that
some parameters needed to be renamed after removing opt_ since they
conflict with Python keywords:
ee.Collection.limit() : opt_property was converted to prop
ee.Image.expression() : opt_map was converted to map_
ee.Filter() : opt_filter which was converted to filter_
Feature
Added Export.classifier.toAsset and ee.Classifier.load for exporting and
loading saved ee.Classifier.smileCart and
ee.Classifier.smileRandomForest classifiers. The exported classifiers will
be visible and managed just like existing Earth Engine assets. More details
are available at our
supervised classification
and our
export reference page .
Feature
Added ee.Blob(url) to allow type checking of the url
argument and catch strings that don't start with gs:// when possible on
the client side.
December 05, 2023
Earth Engine Data Catalog
Feature
Added NASA/GSFC/MERRA/aer_nv/2 : MERRA-2 M2I3NVAER: Aerosol Mixing Ratio V5.12.4
November 29, 2023
Earth Engine Server
Fixed
Fixed a bug that prevented the download of large (more than 1000 elements)
collections.
Fixed
Fixed a bug that sometimes caused missing pixels in images that cross the
antimeridian (longitude 180°).
November 28, 2023
Earth Engine Data Catalog
Feature
Added MODIS/061/MCD12C1 : MCD12C1.061 MODIS Land Cover Type Yearly Global 0.05 Deg CMG
Added RUB/RUBCLIM/LCZ/global_lcz_map/latest : Global map of Local Climate Zones, latest version
November 15, 2023
Earth Engine Python Client Library
0.1.379
Change
Added a long-lived requests.Session object so that calls to
Earth Engine can share a connection pool. This should increase performance
and stability.
Change
Disallowed complex, rational, and integral numbers in ee.Number() .
Feature
Added
workload tag
support to ee.data.getPixels() .
November 14, 2023
Earth Engine Data Catalog
Feature
Added MODIS/061/MOD16A2GF : MOD16A2GF.061: Terra Net Evapotranspiration Gap-Filled 8-Day Global 500m
November 07, 2023
Earth Engine Data Catalog
Feature
Added MODIS/061/MCD18A1 (no longer available)
Added projects/geoscience-aus-cat/assets/ga_ls5t_nbart_gm_cyear_3 (no longer available)
Added projects/geoscience-aus-cat/assets/ga_ls7e_nbart_gm_cyear_3 (no longer available)
Added projects/geoscience-aus-cat/assets/ga_ls8c_nbart_gm_cyear_3 (no longer available)
Added projects/geoscience-aus-cat/assets/ga_ls_landcover_class_cyear_2 (no longer available)
Added projects/geoscience-aus-cat/assets/ga_ls_wo_fq_cyear_3 (no longer available)
November 01, 2023
Earth Engine Python Client Library
0.1.377
Fixed
This version of the client libraries introduced a Python
type annotation
incompatible with Python 3.7.
October 24, 2023
Earth Engine Code Editor
Fixed
Fixed linked drawing tools in Apps so that geometries are synced between two
drawing tools with setLinked(true) .
October 17, 2023
Earth Engine Data Catalog
Feature
Added NASA/HLS/HLSL30/v002 : HLSL30: HLS-2 Landsat Operational Land Imager Surface Reflectance and TOA Brightness Daily Global 30m
October 10, 2023
Earth Engine Data Catalog
Feature
Added JAXA/GPM_L3/GSMaP/v7/operational : GSMaP Operational: Global Satellite Mapping of Precipitation - V7
Added JAXA/GPM_L3/GSMaP/v8/operational : GSMaP Operational: Global Satellite Mapping of Precipitation - V8
Added projects/geoscience-aus-cat/assets/NIDEM (no longer available)
Added projects/geoscience-aus-cat/assets/annual-water-obs (no longer available)
Added projects/geoscience-aus-cat/assets/ga_landcover (no longer available)
Added projects/geoscience-aus-cat/assets/geomedians_LS5 (no longer available)
Added projects/geoscience-aus-cat/assets/geomedians_LS7 (no longer available)
Added projects/geoscience-aus-cat/assets/geomedians_LS8 (no longer available)
October 03, 2023
Earth Engine Data Catalog
Feature
Added GOOGLE/CLOUD_SCORE_PLUS/V1/S2_HARMONIZED : Cloud Score+ S2_HARMONIZED V1
Added MODIS/061/MYD13A3 : MYD13A3.061 Aqua Vegetation Indices Monthly L3 Global 1 km SIN Grid
Added projects/sat-io/open-datasets/GLOBathy/GLOBathy_bathymetry : GLOBathy Global lakes bathymetry dataset
Added projects/sat-io/open-datasets/ORNL/LANDSCAN_GLOBAL : LandScan Population Data Global 1km
Added projects/sat-io/open-datasets/us-drought-monitor : United States Drought Monitor
September 14, 2023
Earth Engine JavaScript Client Library
0.1.369
Fixed
Fixed ee.data.getOperation() and ee.data.getTaskStatus() error handling.
Operations that complete with an error are now returned as Operation objects
that include error details, instead of throwing an exception.
Earth Engine Python Client Library
0.1.369
Change
Migrated Python client library from deprecated
https://accounts.google.com/o/oauth2/token to
https://oauth2.googleapis.com/token for OAuth 2.0 authentication.
September 12, 2023
Earth Engine Data Catalog
Feature
Added MODIS/061/MOD13A3 : MOD13A3.061 Vegetation Indices Monthly L3 Global 1 km SIN Grid
Added USGS/NLCD_RELEASES/2021_REL/NLCD : NLCD 2021: USGS National Land Cover Database, 2021 release
September 07, 2023
Earth Engine JavaScript Client Library
0.1.368
Feature
Added documentation to ee.data.newTaskId() and ee.data.startProcessing()
to clarify unsubmitted versus submitted task IDs, and fixed
ee.batch.ExportTask.start() to return the submitted task ID.
September 05, 2023
Earth Engine Data Catalog
Feature
Added MODIS/061/MCD19A1_GRANULES : MCD19A1.061: Land Surface BRF Daily L2G Global 500m and 1km
August 24, 2023
Earth Engine Python Client Library
0.1.366
Breaking
Fixed construction of an ee.Date object from a
tzinfo -aware datetime object. Naive datetime objects are still treated
as UTC.
August 22, 2023
Earth Engine Data Catalog
Feature
Added JRC/GHSL/P2023A/GHS_BUILT_C : GHSL: Global settlement characteristics (10 m) 2018 (P2023A)
Added JRC/GHSL/P2023A/GHS_BUILT_V : GHSL: Global building volume 1975-2030 (P2023A)
Added USGS/NLCD_RELEASES/2019_REL/RCMAP/V5/TRENDS (no longer available)
Added USGS/NLCD_RELEASES/2019_REL/RCMAP/V5/TRENDS_YEAR (no longer available)
August 17, 2023
Earth Engine Server
Breaking
Added support for multidimensional arrays in
Export.table.toBigQuery() . The BigQuery array format changed from
ARRAY<INT64|FLOAT64> to STRUCT<ARRAY<INT64>, ARRAY<INT64|FLOAT64>> ,
where the first parameter is dimensions and the second parameter is
values .
August 15, 2023
Earth Engine Data Catalog
Feature
Added JRC/GHSL/P2023A/GHS_BUILT_H : GHSL: Global building height 2018 (P2023A)
Added JRC/GHSL/P2023A/GHS_BUILT_S : GHSL: Global built-up surface 1975-2030 (P2023A)
Added Netherlands/Beeldmateriaal/LUCHTFOTO_RGB : Netherlands orthophotos
Added UMT/Climate/IrrMapper_RF/v1_1 (no longer available)
August 09, 2023
Earth Engine Code Editor
Feature
Launched Project-owned Apps feature to support app collaboration under a new
project ID namespace.
See our app developer documentation for more information .
August 08, 2023
Earth Engine Data Catalog
Feature
Added NASA/GEOS-CF/v1/fcst/tavg1hr : GEOS-CF fcst tavg1hr v1: Goddard Earth Observing System Composition Forecast
August 01, 2023
Earth Engine Data Catalog
Feature
Added JRC/GHSL/P2023A/GHS_SMOD (no longer available)
July 27, 2023
Earth Engine JavaScript Client Library
0.1.361
Breaking
Upgraded the client libraries to use the v1 Earth Engine API. No changes required except for the following case:
In the Python client, for the ee.data.getAsset() method, the title and description fields are only accessible from the asset properties in the v1 API. Modify your code to reference my_asset['properties']['title'] and my_asset['properties']['description'] .
Earth Engine Python Client Library
0.1.361
Breaking
Upgraded the client libraries to use the v1 Earth Engine API. No changes required except for the following case:
In the Python client, for the ee.data.getAsset() method, the title and description fields are only accessible from the asset properties in the v1 API. Modify your code to reference my_asset['properties']['title'] and my_asset['properties']['description'] .
July 25, 2023
Earth Engine Data Catalog
Feature
Added ESA/WorldCereal/2021/MARKERS/v100 : ESA WorldCereal Active Cropland 10 m v100
Added ESA/WorldCereal/2021/MODELS/v100 : ESA WorldCereal 10 m v100
Added ESA/WorldCereal/AEZ/v100 : ESA WorldCereal AEZ v100
July 19, 2023
Earth Engine Python Client Library
0.1.360
Breaking
Added a Python version requirement (3.7.0) to the
client libs.
July 18, 2023
Earth Engine Data Catalog
Feature
Added JRC/GHSL/P2023A/GHS_POP : GHSL: Global population surfaces 1975-2030 (P2023A)
July 11, 2023
Earth Engine Data Catalog
Feature
Added MODIS/061/MOD17A2H : MOD17A2H.061: Terra Gross Primary Productivity 8-Day Global 500m
Added MODIS/061/MYD17A2H : MYD17A2H.061: Aqua Gross Primary Productivity 8-Day Global 500m
July 04, 2023
Earth Engine Data Catalog
Feature
Added Slovakia/orthos/25cm : Slovakia orthophotos
June 27, 2023
Earth Engine Data Catalog
Feature
Added GOOGLE/Research/open-buildings/v3/polygons : Open Buildings V3 Polygons
Added NOAA/VIIRS/DNB/ANNUAL_V21 : VIIRS Nighttime Day/Night Annual Band Composites V2.1
June 26, 2023
Earth Engine Server
Feature
Added ee.Filter.area() .
June 13, 2023
Earth Engine Data Catalog
Feature
Added MODIS/061/MOD10A1 : MOD10A1.061 Terra Snow Cover Daily Global 500m
Added MODIS/061/MOD16A2 : MOD16A2.061: Terra Net Evapotranspiration 8-Day Global 500m
Added MODIS/061/MYD10A1 : MYD10A1.061 Aqua Snow Cover Daily Global 500m
Added USGS/NLCD_RELEASES/2020_REL/NALCMS : Land Cover of North America at 30 meters, 2020
June 06, 2023
Earth Engine Data Catalog
Feature
Added CSIC/SPEI/2_8 (no longer available)
May 30, 2023
Earth Engine Data Catalog
Feature
Added Switzerland/SWISSIMAGE/orthos/10cm : SWISSIMAGE 10 cm RGB imagery
Added projects/ngis-cat/assets/DEA/NIDEM : Preview National Intertidal Digital Elevation Model 25m 1.0.0
May 23, 2023
Earth Engine Data Catalog
Feature
Added NOAA/VIIRS/001/VNP43IA1 : VNP43IA1: BRDF/Albedo Model Parameters Daily L3 Global 500m SIN Grid
Added UMD/hansen/global_forest_change_2022_v1_10 (no longer available)
May 16, 2023
Earth Engine Data Catalog
Feature
Added Latvia/Maamet/orthos/cir : Latvia Color InfraRed (CIR) orthophotos
Added Latvia/Maamet/orthos/rgb : Latvia RGB orthophotos
Added USFS/GTAC/LCMS/v2022-8 (no longer available)
May 15, 2023
Earth Engine Server
Feature
Added support for the geostationary satellite projection (geos) for Cloud
Optimized GeoTIFFs ( ee.Image.loadGeoTIFF() and the CreateAsset pathway).
May 04, 2023
Earth Engine Server
Change
Upgraded GDAL to
3.1.4 .
Affects import and export of GeoTIFFs including Cloud Optimized Geotiffs
(COGs).
May 03, 2023
Earth Engine JavaScript Client Library
0.1.352
Feature
Added support for the no_data field for GeoTIFF exports in both the Python
and JavaScript client libraries.
Earth Engine Python Client Library
0.1.352
Feature
Added support for the no_data field for GeoTIFF exports in both the Python
and JavaScript client libraries.
May 02, 2023
Earth Engine Data Catalog
Feature
Added NOAA/VIIRS/001/VNP46A1 : VNP46A1: VIIRS Daily Gridded Day Night Band 500m Linear Lat Lon Grid Night
Added OpenET/DISALEXI/CONUS/GRIDMET/MONTHLY/v2_0 : OpenET DisALEXI Monthly Evapotranspiration v2.0
Added OpenET/EEMETRIC/CONUS/GRIDMET/MONTHLY/v2_0 : OpenET eeMETRIC Monthly Evapotranspiration v2.0
Added OpenET/GEESEBAL/CONUS/GRIDMET/MONTHLY/v2_0 : OpenET geeSEBAL Monthly Evapotranspiration v2.0
Added OpenET/PTJPL/CONUS/GRIDMET/MONTHLY/v2_0 : OpenET PT-JPL Monthly Evapotranspiration v2.0
Added OpenET/SIMS/CONUS/GRIDMET/MONTHLY/v2_0 : OpenET SIMS Monthly Evapotranspiration v2.0
Added OpenET/SSEBOP/CONUS/GRIDMET/MONTHLY/v2_0 : OpenET SSEBop Monthly Evapotranspiration v2.0
April 25, 2023
Earth Engine Data Catalog
Feature
Added Estonia/Maamet/orthos/mono : Estonia mono orthophotos
Added Estonia/Maamet/orthos/rgb : Estonia RGB orthophotos
April 18, 2023
Earth Engine Data Catalog
Feature
Added ECMWF/ERA5_LAND/DAILY_AGGR : ERA5-Land Daily Aggregated - ECMWF Climate Reanalysis
April 14, 2023
Earth Engine JavaScript Client Library
0.1.349
Breaking
Removed support for dots (.) in
workload tags ,
which will now throw an error.
Earth Engine Python Client Library
0.1.349
Breaking
Removed support for dots (.) in
workload tags ,
which will now throw an error.
Earth Engine Server
Breaking
Changed server behavior for dealing with dots (.) in
workload tags .
Before, tags containing dots were removed from the request, now an error
will be thrown.
April 11, 2023
Earth Engine Data Catalog
Feature
Added MODIS/061/MCD19A2_GRANULES : MCD19A2.061: Terra & Aqua MAIAC Land Aerosol Optical Depth Daily 1km
Added NOAA/VIIRS/001/VNP43IA2 : VNP43IA2: BRDF/Albedo Quality Daily L3 Global 500m SIN Grid
Added WWF/HydroATLAS/v1/Basins/level03 : WWF HydroATLAS Basins Level 03
Added WWF/HydroATLAS/v1/Basins/level04 : WWF HydroATLAS Basins Level 04
Added WWF/HydroATLAS/v1/Basins/level05 : WWF HydroATLAS Basins Level 05
Added WWF/HydroATLAS/v1/Basins/level06 : WWF HydroATLAS Basins Level 06
Added WWF/HydroATLAS/v1/Basins/level07 : WWF HydroATLAS Basins Level 07
Added WWF/HydroATLAS/v1/Basins/level08 : WWF HydroATLAS Basins Level 08
Added WWF/HydroATLAS/v1/Basins/level09 : WWF HydroATLAS Basins Level 09
Added WWF/HydroATLAS/v1/Basins/level10 : WWF HydroATLAS Basins Level 10
Added WWF/HydroATLAS/v1/Basins/level11 : WWF HydroATLAS Basins Level 11
March 21, 2023
Earth Engine Data Catalog
Feature
Added NOAA/VIIRS/001/VNP15A2H (no longer available)
March 14, 2023
Earth Engine Data Catalog
Feature
Added NASA/GDDP-CMIP6 : NEX-GDDP-CMIP6: NASA Earth Exchange Global Daily Downscaled Climate Projections
March 09, 2023
Earth Engine Server
Change
Changed the default BIGTIFF parameter in the GeoTIFF image export
options from IF_SAFER to YES , which always generates a BigTiff
unless the BIGTIFF parameter is overridden in the formatOptions
dictionary parameter.
March 07, 2023
Earth Engine Data Catalog
Feature
Added NOAA/VIIRS/001/VNP46A2 (no longer available)
March 06, 2023
Earth Engine Server
Change
Upgraded GDAL to
ab9e803
and libgeotiff to
a6fb3d3 .
Earth Engine uses GDAL to ingest assets and to export
Cloud Optimized GeoTIFF (COG) files.
February 21, 2023
Earth Engine Data Catalog
Feature
Added NOAA/VIIRS/001/VNP09H1 (no longer available)
Added Spain/PNOA/PNOA10 : Spain RGB orthophotos 10 cm
February 15, 2023
Earth Engine Python Client Library
1.341
Feature
Added ee.data.getPixels() , ee.data.computePixels() ,
ee.data.listFeatures() , and ee.data.computeFeatures() to the Python
client. The new methods will help with getting pixels from assets or
ee.Image objects, and listing features from assets or
ee.FeatureCollection objects.
February 07, 2023
Earth Engine Data Catalog
Feature
Added ACA/reef_habitat/v2_0 : Allen Coral Atlas (ACA) - Geomorphic Zonation and Benthic Habitat - v2.0
Added COPERNICUS/DEM/GLO30 : Copernicus DEM GLO-30: Global 30m Digital Elevation Model
Added ECMWF/ERA5_LAND/DAILY_RAW (no longer available)
Added Germany/Brandenburg/orthos/20cm : Brandenburg (Germany) RGBN orthophotos 20 cm
Added NASA/GEOS-CF/v1/fcst/htf : GEOS-CF fcst htf v1: Goddard Earth Observing System Composition Forecast
Added USGS/NLCD_RELEASES/2019_REL/RCMAP/V5/COVER (no longer available)
January 31, 2023
Earth Engine Data Catalog
Feature
Added NOAA/VIIRS/001/VNP64A1 : VNP64A1: Burned Area Monthly L4 Global 500m SIN Grid
January 24, 2023
Earth Engine Data Catalog
Feature
Added ECMWF/ERA5_LAND/MONTHLY_AGGR : ERA5-Land Monthly Aggregated - ECMWF Climate Reanalysis
Added Germany/Brandenburg/20cm (no longer available)
Added NOAA/VIIRS/001/VNP21A1D (no longer available)
Added NOAA/VIIRS/001/VNP21A1N (no longer available)
January 17, 2023
Earth Engine Data Catalog
Feature
Added NASA/SMAP/SPL3SMP_E/005 : SPL3SMP_E.005 SMAP L3 Radiometer Global Daily 9 km Soil Moisture
Added NASA/SMAP/SPL4SMGP/007 (no longer available)
January 10, 2023
Earth Engine Data Catalog
Feature
Added Finland/MAVI/VV/50cm : Finland NRG NLS orthophotos 50 cm by Mavi
Added Finland/SMK/V/50cm : Finland RGB NLS orthophotos 50 cm by SMK
Added Finland/SMK/VV/50cm : Finland NRG NLS orthophotos 50 cm by SMK
Added MODIS/061/MOD21C1 : MOD21C1.061 Terra Land Surface Temperature and 3-Band Emissivity Daily L3 Global 0.05 Deg CMG
Added MODIS/061/MOD21C2 : MOD21C2.061 Terra Land Surface Temperature and 3-Band Emissivity 8-Day L3 Global 0.05 Deg CMG
Added MODIS/061/MOD21C3 : MOD21C3.061 Terra Land Surface Temperature and 3-Band Emissivity Monthly L3 Global 0.05 Deg CMG
Added MODIS/061/MYD17A3HGF : MYD17A3HGF.061: Aqua Net Primary Production Gap-Filled Yearly Global 500m
Added MODIS/061/MYD21C1 : MYD21C1.061 Aqua Land Surface Temperature and 3-Band Emissivity Daily L3 Global 0.05 Deg CMG
Added MODIS/061/MYD21C2 : MYD21C2.061 Aqua Land Surface Temperature and 3-Band Emissivity 8-Day L3 Global 0.05 Deg CMG
Added MODIS/061/MYD21C3 : MYD21C3.061 Aqua Land Surface Temperature and 3-Band Emissivity Monthly L3 Global 0.05 Deg CMG
Added OpenET/ENSEMBLE/CONUS/GRIDMET/MONTHLY/v2_0 : OpenET Ensemble Monthly Evapotranspiration v2.0
January 03, 2023
Earth Engine Data Catalog
Feature
Added MODIS/061/MOD09CMG : MOD09CMG.061 Terra Surface Reflectance Daily L3 Global 0.05 Deg CMG
Added MODIS/061/MOD17A3HGF : MOD17A3HGF.061: Terra Net Primary Production Gap-Filled Yearly Global 500m
Added MODIS/061/MOD21A1D : MOD21A1D.061 Terra Land Surface Temperature and 3-Band Emissivity Daily Global 1km
Added MODIS/061/MOD21A1N : MOD21A1N.061 Terra Land Surface Temperature and 3-Band Emissivity Daily Global 1km
Added MODIS/061/MYD21A1D : MYD21A1D.061 Aqua Land Surface Temperature and 3-Band Emissivity Daily Global 1km
Added MODIS/061/MYD21A1N : MYD21A1N.061 Aqua Land Surface Temperature and 3-Band Emissivity Daily Global 1km
December 27, 2022
Earth Engine Data Catalog
Feature
Added MODIS/061/MCD18C2 (no longer available)
Added MODIS/061/MCD43C3 : MCD43C3.061 BRDF/Albedo Daily L3 0.05 Deg CMG
December 20, 2022
Earth Engine Data Catalog
Feature
Added MODIS/061/MCD12Q1 : MCD12Q1.061 MODIS Land Cover Type Yearly Global 500m
Added MODIS/061/MCD12Q2 : MCD12Q2.006 Land Cover Dynamics Yearly Global 500m
Added MODIS/061/MCD43A2 : MCD43A2.061 MODIS BRDF-Albedo Quality Daily 500m
Added MODIS/061/MCD43A3 : MCD43A3.061 MODIS Albedo Daily 500m
Added MODIS/061/MCD43A4 : MCD43A4.061 MODIS Nadir BRDF-Adjusted Reflectance Daily 500m
Added NOAA/VIIRS/001/VNP14A1 (no longer available)
December 13, 2022
Earth Engine Data Catalog
Feature
Added LARSE/GEDI/GEDI04_A_002 : GEDI L4A Aboveground Biomass Density, Version 2.1
Added LARSE/GEDI/GEDI04_A_002_INDEX : GEDI L4A table index
Added LARSE/GEDI/GEDI04_A_002_MONTHLY : GEDI L4A Raster Aboveground Biomass Density, Version 2.1
November 17, 2022
Earth Engine Server
Change
Updated ee.Image.cumulativeCost
to be able to handle multi-band cost images.
November 08, 2022
Earth Engine Data Catalog
Feature
Added ESA/WorldCover/v200 : ESA WorldCover 10m v200
Added NASA/GSFC/MERRA/flx/2 : MERRA-2 M2T1NXFLX: Surface Flux Diagnostics V5.12.4
Added NASA/GSFC/MERRA/lnd/2 : MERRA-2 M2T1NXLND: Land Surface Diagnostics V5.12.4
Added NASA/GSFC/MERRA/rad/2 : MERRA-2 M2T1NXRAD: Radiation Diagnostics V5.12.4
Added OREGONSTATE/PRISM/Norm91m : PRISM Long-Term Average Climate Dataset Norm91m
November 02, 2022
Earth Engine Python Client Library
0.1.330
Change
Updated the HTTP client library in the Python client from httplib2 to
requests , which re-adds support for multi-threading following the
httplib2shim removal.
Change
Improved Python ee.Authenticate() error messages to give more guidance,
and fixed bugs.
November 01, 2022
Earth Engine Data Catalog
Feature
Added TIGER/2010/BG : TIGER: US Census Block Groups (BG) 2010
October 25, 2022
Earth Engine Data Catalog
Feature
Added JAXA/ALOS/PALSAR-2/Level2_2/ScanSAR : PALSAR-2 ScanSAR Level 2.2
Added NASA/GLDAS/V022/CLSM/G025/DA1D : GLDAS-2.2: Global Land Data Assimilation System
Added RUB/RUBCLIM/LCZ/global_lcz_map/v1 (no longer available)
October 18, 2022
Earth Engine Data Catalog
Feature
Added JAXA/ALOS/PALSAR/YEARLY/FNF4 : Global 4-class PALSAR-2/PALSAR Forest/Non-Forest Map
Added JRC/GSW1_4/GlobalSurfaceWater : JRC Global Surface Water Mapping Layers, v1.4
Added JRC/GSW1_4/Metadata : JRC Global Surface Water Metadata, v1.4
Added JRC/GSW1_4/MonthlyHistory : JRC Monthly Water History, v1.4
Added JRC/GSW1_4/MonthlyRecurrence : JRC Monthly Water Recurrence, v1.4
Added JRC/GSW1_4/YearlyHistory : JRC Yearly Water Classification History, v1.4
Added ORTHO/Switzerland/SWISSIMAGE/10cm (no longer available)
October 11, 2022
Earth Engine Data Catalog
Feature
Added FAO/SOFO/1/FPP : Forest proximate people (FPP) 1.0
Added FAO/SOFO/1/TPP : Tree proximate people (TPP) 1.0
Added GOOGLE/Research/open-buildings/v2/polygons (no longer available)
Added JAXA/ALOS/PALSAR/YEARLY/SAR_EPOCH : Global PALSAR-2/PALSAR Yearly Mosaic, version 2.5.0
October 01, 2022
Earth Engine Server
Change
For organizations with Google Workspace accounts, the organization
administrator was given control to enable or disable Earth Engine by
setting the Google Cloud on/off control. This control
can be set for the entire
organization or for specific workgroups. In August 2022, the
organization administrators were notified of this change via a
Mandatory Service Announcement (MSA), which included instructions for
allowing access to Earth Engine.
Who is my administrator?
September 28, 2022
Earth Engine JavaScript Client Library
0.1.326
Change
Upgraded the client libraries to use the Earth Engine v1 API parameters
instead of v1alpha only parameters, in preparation for a future migration
to the v1 API.
Change
Refactored ee.data.getList() and ee.data.listImages() to call through to
ee.data.listAssets() exclusively.
Earth Engine Python Client Library
0.1.326
Change
Upgraded the client libraries to use the Earth Engine v1 API parameters
instead of v1alpha only parameters, in preparation for a future migration
to the v1 API.
Change
Refactored ee.data.getList() and ee.data.listImages() to call through to
ee.data.listAssets() exclusively.
September 27, 2022
Earth Engine Data Catalog
Feature
Added IGN/RGE_ALTI/1M/2_0 : RGE ALTI: IGN RGE ALTI Digital Elevation 1m
Added USFS/GTAC/MTBS/annual_burn_severity_mosaics/v1 : Monitoring Trends in Burn Severity (MTBS) Burn Severity Images
September 20, 2022
Earth Engine Data Catalog
Feature
Added LARSE/GEDI/GEDI02_B_002_MONTHLY : GEDI L2B Raster Canopy Cover Vertical Profile Metrics (Version 2)
September 13, 2022
Earth Engine Data Catalog
Feature
Added LARSE/GEDI/GEDI02_B_002 : GEDI L2B Vector Canopy Cover Vertical Profile Metrics (Version 2)
Added LARSE/GEDI/GEDI02_B_002_INDEX : GEDI L2B table index
Added NASA/GEOS-CF/v1/rpl/tavg1hr : GEOS-CF rpl tavg1hr v1: Goddard Earth Observing System Composition Forecast
August 30, 2022
Earth Engine Data Catalog
Feature
Added LARSE/GEDI/GEDI02_A_002_INDEX : GEDI L2A table index
August 17, 2022
Earth Engine Server
Breaking
Fixed
ee.Image.sampleRectangle() to use current band names instead of any
original names.
August 16, 2022
Earth Engine Data Catalog
Feature
Added BNU/FGS/CCNL/v1 : CCNL: Consistent and Corrected Nighttime Light Dataset from DMSP-OLS (1992-2013) v1
Added NOAA/VIIRS/001/VNP22Q2 : VNP22Q2: Land Surface Phenology Yearly L3 Global 500m SIN Grid
August 09, 2022
Earth Engine Data Catalog
Feature
Added MODIS/061/MOD14A1 : MOD14A1.061: Terra Thermal Anomalies & Fire Daily Global 1km
Added MODIS/061/MYD14A1 : MYD14A1.061: Aqua Thermal Anomalies & Fire Daily Global 1km
Added NOAA/GOES/18/FDCC : GOES-18 FDCC Series ABI Level 2 Fire/Hot Spot Characterization CONUS
Added NOAA/GOES/18/FDCF : GOES-18 FDCF Series ABI Level 2 Fire/Hot Spot Characterization Full Disk
Added NOAA/GOES/18/MCMIPC : GOES-18 MCMIPC Series ABI Level 2 Cloud and Moisture Imagery CONUS
Added NOAA/GOES/18/MCMIPF : GOES-18 MCMIPF Series ABI Level 2 Cloud and Moisture Imagery Full Disk
Added NOAA/GOES/18/MCMIPM : GOES-18 MCMIPM Series ABI Level 2 Cloud and Moisture Imagery Mesoscale
July 13, 2022
Earth Engine Python Client Library
0.1.317
Change
Added support for Python 3.10 by removing the dependency on httplib2shim .
Feature
Added a localhost auth mode and introduced a ee.oauth.Flow class for
smoother integration with other client libraries.
July 12, 2022
Earth Engine Data Catalog
Feature
Added JRC/D5/EUCROPMAP/V1 : EUCROPMAP
Added JRC/LUCAS_HARMO/COPERNICUS_POLYGONS/V1/2018 : LUCAS Copernicus (Polygons with attributes, 2018) V1
Added LANDSAT/LM05/C02/T2 : USGS Landsat 5 MSS Collection 2 Tier 2 Raw Scenes
Added MODIS/061/MCD43A1 : MCD43A1.061 MODIS BRDF-Albedo Model Parameters Daily 500m
Added MODIS/061/MCD64A1 : MCD64A1.061 MODIS Burned Area Monthly Global 500m
Added USGS/3DEP/1m : USGS 3DEP 1m National Map
July 05, 2022
Earth Engine Data Catalog
Feature
Added USFS/GTAC/MTBS/burned_area_boundaries/v1 : MTBS Burned Area Boundaries
June 27, 2022
Earth Engine Code Editor
Breaking
Changed Export logic in the Code Editor to no
longer use the map bounds as a default region for the output. The Export
behavior now matches that of the Python API, and calls which specify the
projection parameters
will remain unchanged. To use the viewport bounds as an export region, use
Map.getBounds(true) as the region to get the geometry explicitly.
Earth Engine Server
Feature
Added Earth Engine as a Google Cloud product offering for commercial
customers. See details here .
June 22, 2022
Earth Engine Python Client Library
0.1.316
Feature
Added the workload tag API ( ee.data.getWorkloadTag() and
ee.data.setWorkloadTag() ) to label computation and exports with a workload
tag, which is viewable from the Google Cloud Console.
Earth Engine Server
Feature
Added the workload tag API ( ee.data.getWorkloadTag() and
ee.data.setWorkloadTag() ) to label computation and exports with a workload
tag, which is viewable from the Google Cloud Console.
June 21, 2022
Earth Engine Data Catalog
Feature
Added WWF/HydroATLAS/v1/Basins/level12 : WWF HydroATLAS Basins Level 12
June 14, 2022
Earth Engine Data Catalog
Feature
Added LANDSAT/LM01/C02/T1 : USGS Landsat 1 MSS Collection 2 Tier 1 Raw Scenes
Added LANDSAT/LM01/C02/T2 : USGS Landsat 1 MSS Collection 2 Tier 2 Raw Scenes
Added LANDSAT/LM02/C02/T1 : USGS Landsat 2 MSS Collection 2 Tier 1 Raw Scenes
Added LANDSAT/LM02/C02/T2 : USGS Landsat 2 MSS Collection 2 Tier 2 Raw Scenes
Added LANDSAT/LM03/C02/T1 : USGS Landsat 3 MSS Collection 2 Tier 1 Raw Scenes
Added LANDSAT/LM03/C02/T2 : USGS Landsat 3 MSS Collection 2 Tier 2 Raw Scenes
Added LANDSAT/LM04/C02/T1 : USGS Landsat 4 MSS Collection 2 Tier 1 Raw Scenes
Added LANDSAT/LM04/C02/T2 : USGS Landsat 4 MSS Collection 2 Tier 2 Raw Scenes
Added LANDSAT/LM05/C02/T1 : USGS Landsat 5 MSS Collection 2 Tier 1 Raw Scenes
Added LANDSAT/LT04/C02/T1 : USGS Landsat 4 TM Collection 2 Tier 1 Raw Scenes
Added LANDSAT/LT04/C02/T1_TOA : USGS Landsat 4 TM Collection 2 Tier 1 TOA Reflectance
Added LANDSAT/LT04/C02/T2 : USGS Landsat 4 TM Collection 2 Tier 2 Raw Scenes
Added LANDSAT/LT04/C02/T2_TOA : USGS Landsat 4 TM Collection 2 Tier 2 TOA Reflectance
June 07, 2022
Earth Engine Data Catalog
Feature
Added CAS/IGSNRR/PML/V2_v017 (no longer available)
Added TIGER/2020/BG : TIGER: US Census Block Groups (BG) 2020
Added TIGER/2020/TABBLOCK20 : TIGER: 2020 Tabulation (Census) Block
Added TIGER/2020/TRACT : TIGER: US Census Tracts
May 27, 2022
Earth Engine Code Editor
Feature
Added
EECU stats
on exports in the Code Editor and Tasks page.
Earth Engine Python Client Library
0.1.311
Breaking
Added
EECU stats
on exports in the CLI (via earthengine task list -l ).
May 17, 2022
Earth Engine Data Catalog
Feature
Added JCU/Murray/GIC/global_tidal_wetland_change/2019 : Murray Global Tidal Wetland Change v1.0 (1999-2019)
Added NASA/GSFC/MERRA/aer/2 : MERRA-2 M2T1NXAER: Aerosol Diagnostics V5.12.4
Added NASA/GSFC/MERRA/slv/2 : MERRA-2 M2T1NXSLV: Single-Level Diagnostics V5.12.4
May 10, 2022
Earth Engine Data Catalog
Feature
Added LANDSAT/LC09/C02/T2 : USGS Landsat 9 Collection 2 Tier 2 Raw Scenes
Added LANDSAT/LC09/C02/T2_TOA : USGS Landsat 9 Collection 2 Tier 2 TOA Reflectance
May 09, 2022
Earth Engine Code Editor
Feature
Launched FeatureView assets and API. For an overview, see
https://developers.google.com/earth-engine/guides/featureview_overview.
Earth Engine Python Client Library
0.1.310
Feature
Launched FeatureView assets and API. For an overview, see
https://developers.google.com/earth-engine/guides/featureview_overview.
May 03, 2022
Earth Engine Data Catalog
Feature
Added NASA/GEOS-CF/v1/rpl/htf : GEOS-CF rpl htf v1: Goddard Earth Observing System Composition Forecast
Added UMD/hansen/global_forest_change_2021_v1_9 (no longer available)
April 26, 2022
Earth Engine Data Catalog
Feature
Added MODIS/061/MOD13Q1 : MOD13Q1.061 Terra Vegetation Indices 16-Day Global 250m
Added MODIS/061/MYD09Q1 : MYD09Q1.061 Aqua Surface Reflectance 8-Day Global 250m
Added MODIS/061/MYD11A2 : MYD11A2.061 Aqua Land Surface Temperature and Emissivity 8-Day Global 1km
Added MODIS/061/MYD13A1 : MYD13A1.061 Aqua Vegetation Indices 16-Day Global 500m
Added MODIS/061/MYD13A2 : MYD13A2.061 Aqua Vegetation Indices 16-Day Global 1km
Added MODIS/061/MYD13Q1 : MYD13Q1.061 Aqua Vegetation Indices 16-Day Global 250m
Added MODIS/061/MYD14A2 : MYD14A2.061: Aqua Thermal Anomalies & Fire 8-Day Global 1km
Added MODIS/061/MYD15A2H : MYD15A2H.061: Aqua Leaf Area Index/FPAR 8-Day Global 500m
Added USFS/GTAC/LCMS/v2021-7 (no longer available)
April 19, 2022
Earth Engine Data Catalog
Feature
Added GOOGLE/DYNAMICWORLD/V1 : Dynamic World V1
Added LARSE/GEDI/GEDI04_B_002 : GEDI L4B Gridded Aboveground Biomass Density (Version 2)
Added MODIS/061/MCD15A3H : MCD15A3H.061 MODIS Leaf Area Index/FPAR 4-Day Global 500m
Added MODIS/061/MOD09A1 : MOD09A1.061 Terra Surface Reflectance 8-Day Global 500m
Added MODIS/061/MOD09Q1 : MOD09Q1.061 Terra Surface Reflectance 8-Day Global 250m
Added MODIS/061/MOD11A2 : MOD11A2.061 Terra Land Surface Temperature and Emissivity 8-Day Global 1km
Added MODIS/061/MOD13A1 : MOD13A1.061 Terra Vegetation Indices 16-Day Global 500m
Added MODIS/061/MOD13A2 : MOD13A2.061 Terra Vegetation Indices 16-Day Global 1km
Added MODIS/061/MOD14A2 : MOD14A2.061: Terra Thermal Anomalies & Fire 8-Day Global 1km
Added MODIS/061/MOD15A2H : MOD15A2H.061: Terra Leaf Area Index/FPAR 8-Day Global 500m
Added MODIS/061/MYD09A1 : MYD09A1.061 Aqua Surface Reflectance 8-Day Global 500m
April 13, 2022
Earth Engine Python Client Library
0.1.306
Change
Security upgrades to authentication in Python notebooks and command line.
This only applies if you use the Python libraries or the command line tool;
there are no changes to the Code Editor. For more details, visit the
developer announcement .
April 12, 2022
Earth Engine Data Catalog
Feature
Added GLIMS/20210914 (no longer available)
Added MODIS/061/MYD11A1 : MYD11A1.061 Aqua Land Surface Temperature and Emissivity Daily Global 1km
March 31, 2022
Earth Engine Server
Breaking
Removed legacy compatibility for enabling
computation profiling. If you are using the client library below version
v0.1.275 please upgrade to reenable profiling support.
March 29, 2022
Earth Engine Data Catalog
Feature
Added MODIS/061/MYD09GA : MYD09GA.061 Aqua Surface Reflectance Daily Global 1km and 500m
Added MODIS/061/MYD09GQ : MYD09GQ.061 Aqua Surface Reflectance Daily Global 250m
Added USGS/NLCD_RELEASES/2019_REL/RCMAP/V4/COVER (no longer available)
March 22, 2022
Earth Engine Data Catalog
Feature
Added LARSE/GEDI/GEDI02_A_002 : GEDI L2A Vector Canopy Top Height (Version 2)
March 08, 2022
Earth Engine Data Catalog
Feature
Added LANDSAT/LC09/C02/T1 : USGS Landsat 9 Collection 2 Tier 1 Raw Scenes
Added LANDSAT/LC09/C02/T1_L2 : USGS Landsat 9 Level 2, Collection 2, Tier 1
Added LANDSAT/LC09/C02/T1_RT (no longer available)
Added LANDSAT/LC09/C02/T1_RT_TOA (no longer available)
Added LANDSAT/LC09/C02/T1_TOA : USGS Landsat 9 Collection 2 Tier 1 TOA Reflectance
Added LANDSAT/LC09/C02/T2_L2 : USGS Landsat 9 Level 2, Collection 2, Tier 2
Added LARSE/GEDI/GEDI02_A_002_MONTHLY : GEDI L2A Raster Canopy Top Height (Version 2)
Added MODIS/061/MOD09GA : MOD09GA.061 Terra Surface Reflectance Daily Global 1km and 500m
Added MODIS/061/MOD09GQ : MOD09GQ.061 Terra Surface Reflectance Daily Global 250m
Added MODIS/061/MOD11A1 : MOD11A1.061 Terra Land Surface Temperature and Emissivity Daily Global 1km
March 01, 2022
Earth Engine Data Catalog
Feature
Added DOE/ORNL/LandScan_HD/Ukraine_202201 : LandScan High Definition Data for Ukraine, January 2022
February 22, 2022
Earth Engine Data Catalog
Feature
Added COPERNICUS/S2_SR_HARMONIZED : Harmonized Sentinel-2 MSI: MultiSpectral Instrument, Level-2A (SR)
Added USGS/NLCD_RELEASES/2019_REL/NLCD : NLCD 2019: USGS National Land Cover Database, 2019 release
February 18, 2022
Earth Engine Code Editor
Change
Improved the user interface for
Earth Engine App creation and management flows .
February 15, 2022
Earth Engine Data Catalog
Feature
Added COPERNICUS/S2_HARMONIZED : Harmonized Sentinel-2 MSI: MultiSpectral Instrument, Level-1C (TOA)
February 08, 2022
Earth Engine Data Catalog
Feature
Added LANDSAT/LT05/C02/T1 : USGS Landsat 5 TM Collection 2 Tier 1 Raw Scenes
Added LANDSAT/LT05/C02/T2 : USGS Landsat 5 TM Collection 2 Tier 2 Raw Scenes
February 01, 2022
Earth Engine Data Catalog
Feature
Added LANDSAT/LE07/C02/T1 : USGS Landsat 7 Collection 2 Tier 1 Raw Scenes
Added LANDSAT/LE07/C02/T1_RT : USGS Landsat 7 Collection 2 Tier 1 and Real-Time data Raw Scenes
Added LANDSAT/LE07/C02/T2 : USGS Landsat 7 Collection 2 Tier 2 Raw Scenes
January 25, 2022
Earth Engine Data Catalog
Feature
Added LANDSAT/LC08/C02/T1 : USGS Landsat 8 Collection 2 Tier 1 Raw Scenes
Added LANDSAT/LC08/C02/T1_RT : USGS Landsat 8 Collection 2 Tier 1 and Real-Time data Raw Scenes
Added LANDSAT/LC08/C02/T2 : USGS Landsat 8 Collection 2 Tier 2 Raw Scenes
Added TERN/AET/CMRSET_LANDSAT_V2_2 : Actual Evapotranspiration for Australia (CMRSET Landsat V2.2)
January 06, 2022
Earth Engine Server
Feature
Added ee.String.equals() .
December 14, 2021
Earth Engine Data Catalog
Feature
Added JAXA/GCOM-C/L3/LAND/LAI/V3 : GCOM-C/SGLI L3 Leaf Area Index (V3)
Added JAXA/GCOM-C/L3/LAND/LST/V3 : GCOM-C/SGLI L3 Land Surface Temperature (V3)
Added JAXA/GCOM-C/L3/OCEAN/CHLA/V3 : GCOM-C/SGLI L3 Chlorophyll-a Concentration (V3)
Added JAXA/GCOM-C/L3/OCEAN/SST/V3 : GCOM-C/SGLI L3 Sea Surface Temperature (V3)
Added LANDSAT/LC08/C02/T1_RT_TOA : USGS Landsat 8 Collection 2 Tier 1 and Real-Time data TOA Reflectance
Added LANDSAT/LC08/C02/T1_TOA : USGS Landsat 8 Collection 2 Tier 1 TOA Reflectance
Added LANDSAT/LC08/C02/T2_TOA : USGS Landsat 8 Collection 2 Tier 2 TOA Reflectance
Added LANDSAT/LE07/C02/T1_RT_TOA : USGS Landsat 7 Collection 2 Tier 1 and Real-Time data TOA Reflectance
Added LANDSAT/LE07/C02/T1_TOA : USGS Landsat 7 Collection 2 Tier 1 TOA Reflectance
Added LANDSAT/LE07/C02/T2_TOA : USGS Landsat 7 Collection 2 Tier 2 TOA Reflectance
Added LANDSAT/LT05/C02/T1_TOA : USGS Landsat 5 TM Collection 2 Tier 1 TOA Reflectance
Added LANDSAT/LT05/C02/T2_TOA : USGS Landsat 5 TM Collection 2 Tier 2 TOA Reflectance
Added USFS/GTAC/LCMS/v2020-6 (no longer available)
December 13, 2021
Earth Engine Code Editor
Change
Reinstated the allowHtml option for ui.Chart , while continuing to
disallow external image display. Images in data: URLs and
icons loaded from gstatic.com are
allowed.
Feature
Added imageUrl option to ui.Button and ui.Label . If provided, the
image will be shown instead of the label text, which will then be used as a
tooltip. As with ui.Chart , only images in data: URLs and
icons loaded from gstatic.com are
allowed.
November 24, 2021
Earth Engine Code Editor
Feature
Added an "Output URLs" list to the Task Manager, so that, when using
Export.map.toCloudStorage() , you can easily copy-and-paste to
add a tiled overlay to your Google Earth project ,
or for use with the Google Maps Platform JavaScript API.
Earth Engine Server
Feature
Added ee.Geometry.coveringGrid , which returns a collection of 1x1
rectangles that cover a geometry in a specified projection. This is useful
to generate e.g. all export tiles that cover a region of interest, and is
far faster than building such a tiling with client-side for -loops.
Feature
Added ee.Algorithm.TemporalSegmentation.StructuralChangeBreakpoints ,
modelled after R's wtrucchange.breakpoints . This looks for breakpoints in
a time series of images, based on a linear+harmonic model of pixel values.
November 23, 2021
Earth Engine Data Catalog
Feature
Added DLR/WSF/WSF2015/v1 : World Settlement Footprint 2015
November 16, 2021
Earth Engine Data Catalog
Feature
Added SNU/ESL/BESS/Rad/v1 : Breathing Earth System Simulator (BESS) Radiation v1
November 02, 2021
Earth Engine Data Catalog
Feature
Added ACA/reef_habitat/v1_0 (no longer available)
October 26, 2021
Earth Engine Data Catalog
Feature
Added ESA/WorldCover/v100 : ESA WorldCover 10m v100
October 19, 2021
Earth Engine Code Editor
Breaking
Removed the allowHtml option from the set of
allowed options in ui.Chart s. This was done as a security precaution.
October 12, 2021
Earth Engine Data Catalog
Feature
Added USGS/3DEP/10m (no longer available)
Added USGS/3DEP/10m_metadata : USGS 3DEP National Map Spatial Metadata 1/3 Arc-Second (10m)
September 15, 2021
Earth Engine Code Editor
Feature
Launched a standalone
Task Manager and a new
interface in the Code Editor's "Tasks" tab. See
our documentation
for details.
September 14, 2021
Earth Engine Data Catalog
Feature
Added Tsinghua/DESS/ChinaTerraceMap/v1 : DESS China Terrace Map v1
September 07, 2021
Earth Engine Data Catalog
Feature
Added LANDSAT/LC08/C02/T2_L2 : USGS Landsat 8 Level 2, Collection 2, Tier 2
Added LANDSAT/LE07/C02/T2_L2 : USGS Landsat 7 Level 2, Collection 2, Tier 2
Added LANDSAT/LT04/C02/T2_L2 : USGS Landsat 4 Level 2, Collection 2, Tier 2
Added LANDSAT/LT05/C02/T2_L2 : USGS Landsat 5 Level 2, Collection 2, Tier 2
Added projects/planet-nicfi/assets/basemaps/africa : NICFI Satellite Data Program Basemaps for Tropical Forest Monitoring - Africa
Added projects/planet-nicfi/assets/basemaps/americas : NICFI Satellite Data Program Basemaps for Tropical Forest Monitoring - Americas
Added projects/planet-nicfi/assets/basemaps/asia : NICFI Satellite Data Program Basemaps for Tropical Forest Monitoring - Asia
August 31, 2021
Earth Engine Data Catalog
Feature
Added ISDASOIL/Africa/v1/aluminium_extractable : iSDAsoil extractable Aluminium
Added ISDASOIL/Africa/v1/bedrock_depth : iSDAsoil Depth to Bedrock
Added ISDASOIL/Africa/v1/bulk_density : iSDAsoil Bulk Density, <2mm Fraction
Added ISDASOIL/Africa/v1/calcium_extractable : iSDAsoil Extractable Calcium
Added ISDASOIL/Africa/v1/carbon_organic : iSDAsoil Organic Carbon
Added ISDASOIL/Africa/v1/carbon_total : iSDAsoil Total Carbon
Added ISDASOIL/Africa/v1/cation_exchange_capacity : iSDAsoil Effective Cation Exchange Capacity
Added ISDASOIL/Africa/v1/clay_content : iSDAsoil Clay Content
Added ISDASOIL/Africa/v1/fcc : iSDAsoil Fertility Capability Classification
Added ISDASOIL/Africa/v1/iron_extractable : iSDAsoil Extractable Iron
Added ISDASOIL/Africa/v1/magnesium_extractable : iSDAsoil Extractable Magnesium
Added ISDASOIL/Africa/v1/nitrogen_total : iSDAsoil Total Nitrogen
Added ISDASOIL/Africa/v1/ph : iSDAsoil pH
Added ISDASOIL/Africa/v1/phosphorus_extractable : iSDAsoil Extractable Phosphorus
Added ISDASOIL/Africa/v1/potassium_extractable : iSDAsoil Extractable Potassium
Added ISDASOIL/Africa/v1/sand_content : iSDAsoil Sand Content
Added ISDASOIL/Africa/v1/silt_content : iSDAsoil Silt Content
Added ISDASOIL/Africa/v1/stone_content : iSDAsoil Stone Content
Added ISDASOIL/Africa/v1/sulphur_extractable : iSDAsoil Extractable Sulfur
Added ISDASOIL/Africa/v1/texture_class : iSDAsoil USDA Texture Class
Added ISDASOIL/Africa/v1/zinc_extractable : iSDAsoil Extractable Zinc
Earth Engine Server
Feature
Added ee.Reducer.circularMean() , ee.Reducer.circularStdDev() , and
ee.Reducer.circularVariance() .
August 24, 2021
Earth Engine Data Catalog
Feature
Added LANDSAT/LT04/C02/T1_L2 : USGS Landsat 4 Level 2, Collection 2, Tier 1
August 17, 2021
Earth Engine Data Catalog
Feature
Added TERN/AET/CMRSET_LANDSAT_V2_1 (no longer available)
August 12, 2021
Earth Engine JavaScript Client Library
0.1.278
Change
Improved error reporting for the case where the arguments of a function
passed to map() or iterate() are used in client-side operations that don't
contribute to the function return value. Since the function is executed
server-side, it may not have client-side effects. See the
debugging guide
for more details.
Earth Engine Python Client Library
0.1.278
Change
Improved error reporting for the case where the arguments of a function
passed to map() or iterate() are used in client-side operations that don't
contribute to the function return value. Since the function is executed
server-side, it may not have client-side effects. See the
debugging guide
for more details.
August 10, 2021
Earth Engine Data Catalog
Feature
Added LANDSAT/LT05/C02/T1_L2 : USGS Landsat 5 Level 2, Collection 2, Tier 1
August 03, 2021
Earth Engine Data Catalog
Feature
Added ISDASOIL/Africa/aluminium_extractable (no longer available)
July 27, 2021
Earth Engine Data Catalog
Feature
Added GOOGLE/Research/open-buildings/v1/polygons (no longer available)
Added JRC/LUCAS_HARMO/THLOC/V1 : LUCAS Harmonized (Theoretical Location, 2006-2018) V1
July 15, 2021
Earth Engine Python Client Library
0.1.273
Feature
Added ee.Filter.bounds() alias for ee.Filter.geometry() .
July 13, 2021
Earth Engine Data Catalog
Feature
Added GLOBAL_FLOOD_DB/MODIS_EVENTS/V1 : Global Flood Database v1 (2000-2018)
June 29, 2021
Earth Engine Data Catalog
Feature
Added GLOBAL_FLOOD_DB/MODIS_EVENTS/V1_0 (no longer available)
Added LANDSAT/LE07/C02/T1_L2 : USGS Landsat 7 Level 2, Collection 2, Tier 1
June 24, 2021
Earth Engine Server
Feature
Added an outputMultiplier option to ee.Model.fromAiPlatformPredictor() .
June 08, 2021
Earth Engine Data Catalog
Feature
Added JRC/GWIS/GlobFire/v2/DailyPerimeters : GlobFire Daily Fire Event Detection Based on MCD64A1
May 25, 2021
Earth Engine Data Catalog
Feature
Added JRC/GSW1_3/GlobalSurfaceWater (no longer available)
Added JRC/GSW1_3/Metadata (no longer available)
Added JRC/GSW1_3/MonthlyHistory (no longer available)
Added JRC/GSW1_3/MonthlyRecurrence (no longer available)
Added JRC/GSW1_3/YearlyHistory (no longer available)
May 19, 2021
Earth Engine Server
Feature
Added ee.Filter.hasType() .
May 12, 2021
Earth Engine Code Editor
Change
Replaced the JavaScript sandbox in the Code Editor with
JS-Interpreter , to provide
improved error reporting and cross-browser consistency. All of the
ES5 JavaScript
specification continues to be supported.
April 29, 2021
Earth Engine Code Editor
Feature
Added support for passing map IDs (from ee.Image.getMap() and elsewhere)
to Map.addLayer() .
Earth Engine JavaScript Client Library
0.1.263
Feature
Added support for maxVertices parameter for table exports.
Earth Engine Python Client Library
0.1.263
Feature
Added support for maxVertices parameter for table exports.
April 22, 2021
Earth Engine JavaScript Client Library
0.1.262
Feature
Added a mechanism for overriding the default OAuth2 scopes requested in
ee.data.authenticateViaOauth() and ee.data.authenticateViaPrivateKey() .
This can be used for requesting the
https://www.googleapis.com/auth/earthengine.readonly scope, rather than
the https://www.googleapis.com/auth/earthengine scope requested by
default.
April 15, 2021
Earth Engine Server
Feature
Added ee.List.unzip() .
April 13, 2021
Earth Engine Data Catalog
Feature
Added BIOPAMA/GlobalOilPalm/v1 : Global Map of Oil Palm Plantations
Added JRC/GWIS/GlobFire/v2/FinalPerimeters : GlobFire Final Fire Event Detection Based on MCD64A1
April 06, 2021
Earth Engine Data Catalog
Feature
Added UMD/hansen/global_forest_change_2020_v1_8 (no longer available)
April 01, 2021
Earth Engine Code Editor
Feature
Added a textDecoration property to ui.Widget.style() .
Feature
Added ui.Checkbox.getLabel() and ui.Checkbox.setLabel() to get and set
labels of ui.Checkbox .
March 30, 2021
Earth Engine Data Catalog
Feature
Added WorldPop/GP/100m/pop_age_sex_cons_unadj : WorldPop Global Project Population Data: Constrained Estimated Age and Sex Structures of Residential Population per 100x100m Grid Square
March 25, 2021
Earth Engine JavaScript Client Library
0.1.258
Breaking
Patched ee.data.setAssetProperties() to prevent
cases when setting system properties to null or zero causes unintentional
property deletion.
Earth Engine Server
Breaking
Required the update_mask or updateMask
parameters to be non-empty in ee.data.updateAsset() calls.
March 23, 2021
Earth Engine Data Catalog
Feature
Added LANDSAT/LC08/C02/T1_L2 : USGS Landsat 8 Level 2, Collection 2, Tier 1
Added NASA/ORNL/DAYMET_V4 : Daymet V4: Daily Surface Weather and Climatological Summaries
March 16, 2021
Earth Engine Data Catalog
Feature
Added USFS/GTAC/LCMS/v2020-5 (no longer available)
March 09, 2021
Earth Engine Data Catalog
Feature
Added NOAA/NCEP_DOE_RE2/total_cloud_coverage : NCEP-DOE Reanalysis 2 (Gaussian Grid), Total Cloud Coverage
February 23, 2021
Earth Engine Data Catalog
Feature
Added JAXA/ALOS/AW3D30/V3_2 (no longer available)
Added USGS/NLCD_RELEASES/2016_REL (no longer available)
February 12, 2021
Earth Engine Server
Change
Added ee.Number.signum() , ee.Image.signum() , and ee.Array.signum() .
Change
Added a "RAW_REGRESSION" output mode to the smileRandomForest classifier.
Fixed
Fixed a bug that could cause non-uniform sampling of points from small
(less than 300m) polygons.
February 09, 2021
Earth Engine Data Catalog
Feature
Added WorldPop/GP/100m/pop_age_sex : WorldPop Global Project Population Data: Estimated Age and Sex Structures of Residential Population per 100x100m Grid Square
January 26, 2021
Earth Engine Data Catalog
Feature
Added NASA_USDA/HSL/SMAP10KM_soil_moisture (no longer available)
January 20, 2021
Earth Engine JavaScript Client Library
0.1.248
Change
.evaluate() and other JavaScript functions that take callbacks will now
report exceptions that occurred within callback functions to the console (or
to the top level environment in Node.js). If your code has such an exception
you can handle or suppress it with catch in the callback.
January 19, 2021
Earth Engine Server
Feature
Added ee.Classifier.smileGradientTreeBoost()
( see more ) from the Smile
library.
January 12, 2021
Earth Engine Data Catalog
Feature
Added NASA/NASADEM_HGT/001 : NASADEM: NASA 30m Digital Elevation Model
December 03, 2020
Earth Engine Server
Change
Added a step option to ee.List.slice() .
Fixed
Fixed double-to-float precision loss in ee.Image.arrayReduce() .
December 01, 2020
Earth Engine Data Catalog
Feature
Added JAXA/GCOM-C/L3/LAND/LAI/V1 : GCOM-C/SGLI L3 Leaf Area Index (V1)
Added JAXA/GCOM-C/L3/LAND/LAI/V2 : GCOM-C/SGLI L3 Leaf Area Index (V2)
Added JAXA/GCOM-C/L3/LAND/LST/V1 : GCOM-C/SGLI L3 Land Surface Temperature (V1)
Added JAXA/GCOM-C/L3/LAND/LST/V2 : GCOM-C/SGLI L3 Land Surface Temperature (V2)
November 24, 2020
Earth Engine Data Catalog
Feature
Added JAXA/GCOM-C/L3/OCEAN/SST/V1 : GCOM-C/SGLI L3 Sea Surface Temperature (V1)
Added JAXA/GCOM-C/L3/OCEAN/SST/V2 : GCOM-C/SGLI L3 Sea Surface Temperature (V2)
November 19, 2020
Earth Engine Code Editor
Change
Expanded ui.DateSlider to accept ee.Date object arguments. Improved
ui.DateSlider sliding behavior, validation, and error reporting.
Fixed
Fixed ui.root.onResize() so that the callback is not fired after the
script is reset or replaced.
Earth Engine JavaScript Client Library
0.1.243
Change
Removed ee.data.getCloudApiEnabled and ee.data.setCloudApiEnabled
from the JavaScript client library.
Earth Engine Server
Feature
Improved the reporting and handling of internal errors.
Added a (request: ...) ID string to "internal error" messages returned
by the Earth Engine API. These IDs uniquely identify errors for
debugging by the Earth Engine team. When reporting internal errors,
please include this value.
Added a "Report error" link to errors in the Code Editor, making it
easier to send feedback.
November 17, 2020
Earth Engine Data Catalog
Feature
Added ECMWF/ERA5_LAND/HOURLY : ERA5-Land Hourly - ECMWF Climate Reanalysis
Added ECMWF/ERA5_LAND/MONTHLY (no longer available)
Added ECMWF/ERA5_LAND/MONTHLY_BY_HOUR : ERA5-Land Monthly Averaged by Hour of Day - ECMWF Climate Reanalysis
Added UMT/Climate/IrrMapper_RF/v1_0 (no longer available)
November 12, 2020
Earth Engine Python Client Library
0.1.242
Breaking
Removed functionality from the Python client
library which is no longer needed after the legacy API turndown.
Removed use_cloud_api parameter from ee.Initialize and data.initialize on the Python client library.
Removed the deprecated data.startProcessing method on the Python client library. Use exportImage , exportTable etc. instead.
Removed the use_cloud_api flag on the CLI tool.
November 10, 2020
Earth Engine Data Catalog
Feature
Added JAXA/GCOM-C/L3/OCEAN/CHLA/V1 : GCOM-C/SGLI L3 Chlorophyll-a Concentration (V1)
Added JAXA/GCOM-C/L3/OCEAN/CHLA/V2 : GCOM-C/SGLI L3 Chlorophyll-a Concentration (V2)
Added KNTU/LiDARLab/IranLandCover/V1 : Iran Land Cover Map v1 13-class (2017)
Added NOAA/GOES/16/MCMIPM : GOES-16 MCMIPM Series ABI Level 2 Cloud and Moisture Imagery Mesoscale
Added NOAA/GOES/17/MCMIPM : GOES-17 MCMIPM Series ABI Level 2 Cloud and Moisture Imagery Mesoscale
November 05, 2020
Earth Engine Code Editor
Change
Limit the minimum and maximum zoom level on Map or ui.Map objects by
setting the minZoom or maxZoom parameters on setLocked() .
Earth Engine Server
Change
The randomColumn and randomImage algorithms now take an optional
distribution argument, which may be "uniform" or "normal" .
Change
The loadGeoTIFF algorithm no longer rejects files with a
Header ghost area ,
such as those written by recent versions of GDAL.
October 29, 2020
Earth Engine Code Editor
Change
Improved error reporting for syntax errors, by highlighting the error line
in the editor and positioning the cursor at the location to fix. Syntax
checks are performed before a script starts executing.
Earth Engine JavaScript Client Library
0.1.240
Fixed
Fixes image export parsing of parameter skipEmptyTiles , which may have
caused skipEmptyTiles to be ignored.
Earth Engine Python Client Library
0.1.240
Change
Adds the task ID to the string representation of the task, compatible
with the repr() function.
October 27, 2020
Earth Engine Data Catalog
Feature
Added FAO/GHG/1/DROSA_A : UN FAO Drained Organic Soils Area (Annual) 1.0
Added FAO/GHG/1/DROSE_A : Drained Organic Soils Emissions (Annual) 1.0
October 15, 2020
Earth Engine Code Editor
Fixed
Fixed Map.centerObject when called with a single point. This now zooms to a
small region around the point, instead of doing nothing.
Earth Engine JavaScript Client Library
0.1.238
Feature
Added file format validation and normalization to the ee.batch.Export
methods on the JS client. Synonyms for file formats (e.g. "JPG" and "JPEG")
are supported.
October 06, 2020
Earth Engine Data Catalog
Feature
Added MERIT/Hydro_reduced/v1_0_1 : MERIT Hydro: Supplementary Visualization Layers
September 29, 2020
Earth Engine Data Catalog
Feature
Added MERIT/DEM/v1_0_3 : MERIT DEM: Multi-Error-Removed Improved-Terrain DEM
Added MERIT/Hydro/v1_0_1 : MERIT Hydro: Global Hydrography Datasets
Added Oxford/MAP/accessibility_to_healthcare_2019 (no longer available)
Added Oxford/MAP/friction_surface_2019 (no longer available)
Added YALE/YCEO/UHI/Summer_UHI_yearly_pixel/v4 : YCEO Surface Urban Heat Islands: Pixel-Level Composites of Yearly Summertime Daytime and Nighttime Intensity
Added YALE/YCEO/UHI/UHI_all_averaged/v4 : YCEO Surface Urban Heat Islands: Spatially-Averaged Daytime and Nighttime Intensity for Annual, Summer, and Winter
Added YALE/YCEO/UHI/UHI_monthly_averaged/v4 : YCEO Surface Urban Heat Islands: Spatially-Averaged Monthly Composites of Daytime and Nighttime Intensity
Added YALE/YCEO/UHI/UHI_yearly_averaged/v4 : YCEO Surface Urban Heat Islands: Spatially-Averaged Yearly Composites of Annual Daytime and Nighttime Intensity
Added YALE/YCEO/UHI/UHI_yearly_pixel/v4 : YCEO Surface Urban Heat Islands: Pixel-Level Annual Daytime and Nighttime Intensity
Added YALE/YCEO/UHI/Winter_UHI_yearly_pixel/v4 : YCEO Surface Urban Heat Islands: Pixel-Level Yearly Composites of Wintertime Daytime and Nighttime Intensity
September 25, 2020
Earth Engine Code Editor
Feature
Added an indicator for the number of times a task was attempted. Earth Engine
automatically attempts tasks a few times because some failures are sporadic.
Likely causes for retries include exceeding memory limit and a temporary
resource shortage.
Earth Engine JavaScript Client Library
0.1.236
Feature
Added an ee.data.TaskStatus field for the number of times a task was
attempted. This matches the value now shown in the Code Editor.
Earth Engine Python Client Library
0.1.236
Feature
Added an ee.data.TaskStatus field for the number of times a task was
attempted. This matches the value now shown in the Code Editor.
September 11, 2020
Earth Engine Server
Fixed
Added ee.Model.predictProperties() for making predictions over
FeatureCollections.
Eliminated one of the frequent causes of "Object too large" errors.
Fixed bug that sometimes caused failures when using ReduceResolution close
to projection singularities.
September 08, 2020
Earth Engine Data Catalog
Feature
Added COPERNICUS/Landcover/100m/Proba-V-C3/Global : Copernicus Global Land Cover Layers: CGLS-LC100 Collection 3
August 21, 2020
Earth Engine JavaScript Client Library
0.1.231
Change
Changed the object serialization format, so that x.serialize() returns an
updated format (which is already used in server requests). ee.Deserializer
supports both the new format and the old format. These changes apply to all
JavaScript and Python APIs. If you have code which serializes and
deserializes objects, we recommend that you either upgrade all parts of your
system at once, or proceed in stages by updating the deserialization code
first.
Earth Engine Python Client Library
0.1.231
Change
Changed the object serialization format, so that x.serialize() returns an
updated format (which is already used in server requests). ee.Deserializer
supports both the new format and the old format. These changes apply to all
JavaScript and Python APIs. If you have code which serializes and
deserializes objects, we recommend that you either upgrade all parts of your
system at once, or proceed in stages by updating the deserialization code
first.
Feature
Added a --long_format option (and -l shortcut) to the earthengine task
list CLI command, to show additional information about tasks. This change
enables callers to see start/end times for individual tasks.
Earth Engine Server
Feature
Added ee.Geometry.BBox() , which simplifies creation of rectangles of
latitude and longitude.
August 04, 2020
Earth Engine Data Catalog
Feature
Added MODIS/061/MOD08_M3 : MOD08_M3.061 Terra Atmosphere Monthly Global Product
Added MODIS/061/MYD08_M3 : MYD08_M3.061 Aqua Atmosphere Monthly Global Product
Added NASA/ORNL/biomass_carbon_density/v1 : Global Aboveground and Belowground Biomass Carbon Density Maps
Added NOAA/GOES/16/MCMIPC : GOES-16 MCMIPC Series ABI Level 2 Cloud and Moisture Imagery CONUS
Added NOAA/GOES/16/MCMIPF : GOES-16 MCMIPF Series ABI Level 2 Cloud and Moisture Imagery Full Disk
Added NOAA/GOES/17/MCMIPC : GOES-17 MCMIPC Series ABI Level 2 Cloud and Moisture Imagery CONUS
Added NOAA/GOES/17/MCMIPF : GOES-17 MCMIPF Series ABI Level 2 Cloud and Moisture Imagery Full Disk
July 21, 2020
Earth Engine Data Catalog
Feature
Added GRIDMET/DROUGHT : GRIDMET DROUGHT: CONUS Drought Indices
Added LANDFIRE/Fire/FRG/v1_2_0 : LANDFIRE FRG (Fire Regime Groups) v1.2.0
Added LANDFIRE/Fire/MFRI/v1_2_0 : LANDFIRE MFRI (Mean Fire Return Interval) v1.2.0
Added LANDFIRE/Fire/PLS/v1_2_0 : LANDFIRE PLS (Percent Low-severity Fire) v1.2.0
Added LANDFIRE/Fire/PMS/v1_2_0 : LANDFIRE PMS (Percent of Mixed-severity Fire) v1.2.0
Added LANDFIRE/Fire/PRS/v1_2_0 : LANDFIRE PRS (Percent of Replacement-severity Fire) v1.2.0
Added LANDFIRE/Fire/SClass/v1_4_0 : LANDFIRE SClass (Succession Classes) v1.4.0
Added LANDFIRE/Fire/VCC/v1_4_0 : LANDFIRE VCC (Vegetation Condition Class) v1.4.0
Added LANDFIRE/Fire/VDep/v1_4_0 : LANDFIRE VDep (Vegetation Departure) v1.4.0
Added LANDFIRE/Vegetation/BPS/v1_4_0 : LANDFIRE BPS (Biophysical Settings) v1.4.0
Added LANDFIRE/Vegetation/ESP/v1_2_0/AK : LANDFIRE ESP AK (Environmental Site Potential) v1.2.0
Added LANDFIRE/Vegetation/ESP/v1_2_0/CONUS : LANDFIRE ESP CONUS (Environmental Site Potential) v1.2.0
Added LANDFIRE/Vegetation/ESP/v1_2_0/HI : LANDFIRE ESP HI (Environmental Site Potential) v1.2.0
Added LANDFIRE/Vegetation/EVC/v1_4_0 : LANDFIRE EVC (Existing Vegetation Cover) v1.4.0
Added LANDFIRE/Vegetation/EVH/v1_4_0 : LANDFIRE EVH (Existing Vegetation Height) v1.4.0
Added LANDFIRE/Vegetation/EVT/v1_4_0 : LANDFIRE EVT (Existing Vegetation Type) v1.4.0
July 14, 2020
Earth Engine Data Catalog
Feature
Added ESA/CCI/FireCCI/5_1 : FireCCI51: MODIS Fire_cci Burned Area Pixel Product, Version 5.1
Added JRC/GSW1_2/GlobalSurfaceWater : JRC Global Surface Water Mapping Layers, v1.2 [deprecated]
Added JRC/GSW1_2/Metadata (no longer available)
Added JRC/GSW1_2/MonthlyHistory (no longer available)
Added JRC/GSW1_2/MonthlyRecurrence (no longer available)
Added JRC/GSW1_2/YearlyHistory (no longer available)
July 07, 2020
Earth Engine Server
Fixed
Added ee.Algorithms.ObjectType() , which returns the type of any computed
object.
Fixed bug that could cause export of an all-zero image to fail.
Fixed bugs in ee.Date.update() when working with fractions of a second.
June 30, 2020
Earth Engine Data Catalog
Feature
Added NASA/MEASURES/GFCC/TC/v3 : Global Forest Cover Change (GFCC) Tree Cover Multi-Year Global 30m
June 23, 2020
Earth Engine Data Catalog
Feature
Added COPERNICUS/S2_CLOUD_PROBABILITY : Sentinel-2: Cloud Probability
June 16, 2020
Earth Engine Data Catalog
Feature
Added MODIS/006/MCD43C3 (no longer available)
Added NASA/GPM_L3/IMERG_MONTHLY_V06 : GPM: Monthly Global Precipitation Measurement (GPM) v6
Added NOAA/CDR/OISST/V2_1 : NOAA CDR OISST v02r01: Optimum Interpolation Sea Surface Temperature
June 09, 2020
Earth Engine Data Catalog
Feature
Added MODIS/006/MOD17A3HGF (no longer available)
Added MODIS/006/MYD17A3HGF (no longer available)
June 02, 2020
Earth Engine Data Catalog
Feature
Added UMD/hansen/global_forest_change_2019_v1_7 (no longer available)
May 26, 2020
Earth Engine Data Catalog
Feature
Added COPERNICUS/S5P/OFFL/L3_O3_TCL : Sentinel-5P OFFL O3 TCL: Offline Tropospheric Ozone
Added ECMWF/CAMS/NRT : Copernicus Atmosphere Monitoring Service (CAMS) Global Near-Real-Time
May 19, 2020
Earth Engine Data Catalog
Feature
Added WCMC/biomass_carbon_density/v1_0 : WCMC Above and Below Ground Biomass Carbon Density
April 28, 2020
Earth Engine Data Catalog
Feature
Added Tsinghua/FROM-GLC/GAIA/v10 : Tsinghua FROM-GLC Year of Change to Impervious Surface
April 14, 2020
Earth Engine Data Catalog
Feature
Added FAO/WAPOR/2/L1_AETI_D : WAPOR Actual Evapotranspiration and Interception 2.0
Added FAO/WAPOR/2/L1_E_D : WAPOR Dekadal Evaporation 2.0
Added FAO/WAPOR/2/L1_I_D : WAPOR Dekadal Interception 2.0
Added FAO/WAPOR/2/L1_NPP_D : WAPOR Dekadal Net Primary Production 2.0
Added FAO/WAPOR/2/L1_RET_D : WAPOR Dekadal Reference Evapotranspiration 2.0
Added FAO/WAPOR/2/L1_RET_E : WAPOR Daily Reference Evapotranspiration 2.0
Added FAO/WAPOR/2/L1_T_D : WAPOR Dekadal Transpiration 2.0
Added USGS/GAP/PAD-US/v20/designation : Designation: USGS GAP PAD-US v2.0
Added USGS/GAP/PAD-US/v20/easement : Easement: USGS GAP PAD-US v2.0
Added USGS/GAP/PAD-US/v20/fee : Fee: USGS GAP PAD-US v2.0
Added USGS/GAP/PAD-US/v20/proclamation : Proclamation: USGS GAP PAD-US v2.0
March 31, 2020
Earth Engine Data Catalog
Feature
Added FAO/GAUL_SIMPLIFIED_500m/2015/level0 : FAO GAUL 500m Simplified: Global Administrative Unit Layers 2015, Country Boundaries
Added FAO/GAUL_SIMPLIFIED_500m/2015/level1 : FAO GAUL 500m Simplified: Global Administrative Unit Layers 2015, First-Level Administrative Units
Added FAO/GAUL_SIMPLIFIED_500m/2015/level2 : FAO GAUL 500m Simplified: Global Administrative Unit Layers 2015, Second-Level Administrative Units
March 12, 2020
Earth Engine Python Client Library
0.1.215
Fixed
Fixed bug with getVideoThumbURL() and getFilmstripThumbURL().
Earth Engine Server
Feature
Added ee.Image.directionalDistanceTransform() , which calculates the
distance to non-zero pixels in a given direction.
March 06, 2020
Earth Engine Code Editor
Change
Improved design of the assets dialog, with markdown support in the
description and smarter thumbnails.
Earth Engine JavaScript Client Library
0.1.214
Change
ee.Image.getDownloadURL is fully supported in Cloud API mode.
Band-level parameters take precedence over
top-level parameters when specified.
Band parameters are ignored for multiband GeoTIFFs.
image parameter may not be serialized, use an
ee.Image directly.
Limits on total image size.
ee.data.getTileUrl supports the urlFormat parameter supplied in the map
ID.
Earth Engine Python Client Library
0.1.214
Feature
Added PKCE support to earthengine authenticate .
Change
ee.Image.getDownloadURL is fully supported in Cloud API mode.
Band-level parameters take precedence over
top-level parameters when specified.
Band parameters are ignored for multiband GeoTIFFs.
image parameter may not be serialized, use an
ee.Image directly.
Limits on total image size.
ee.data.getTileUrl supports the urlFormat parameter supplied in the map
ID.
February 21, 2020
Earth Engine Code Editor
Change
Added ui.util.getCurrentPosition() API that gets the user's current geographic
position from the browser's geolocation service.
Now accepts named parameters in Map.setCenter() and Map.setOptions() .
Added drawing tools control to Map.setControlVisibility() and
ui.Map.setControlVisibility() .
Prevented chart from opening multiple times when clicking the popout button.
Accepted TFRecord and GeoTIFF file format selection in image export dialog.
Fixed upload errors when file names contained non-ascii UTF-8 characters.
Dismissed popup dialogs when the mouse scrolls elsewhere on the page.
February 18, 2020
Earth Engine Data Catalog
Feature
Added TUBerlin/BigEarthNet/v1 : TUBerlin/BigEarthNet/v1
February 04, 2020
Earth Engine Data Catalog
Feature
Added BLM/AIM/v1/TerrADat/TerrestrialAIM : BLM AIM TerrADat TerrestrialAIM Point v1
January 30, 2020
Earth Engine Python Client Library
0.1.212
Change
Updated the HTTP transport layer for the Earth Engine Python client library
from httplib2 to urllib3, which will make it more flexible (e.g., it's now
possible to make multiple simultaneous requests) and improve performance.
This improvement might not be realized if the earthengine-api package is
installed via the
conda-forge channel .
Earth Engine Server
Fixed
Fixed the explain() method of ee.Classifier.SmileRandomForest() to return
importance as a dictionary.
January 23, 2020
Earth Engine Code Editor
Change
Drawn geometries displayed in Code Editor display in newly published Apps.
Now prompts for a Cloud Project when re-publishing an App.
Feature
Added ui.url API for reading URL parameters. See our
blog post
for more details.
Added ui.Map.DrawingTools and ui.Map.GeometryLayer for programmatic
access to the drawing tools. See the official
documentation .
January 14, 2020
Earth Engine Data Catalog
Feature
Added COPERNICUS/CORINE/V20/100m : Copernicus CORINE Land Cover
January 09, 2020
Earth Engine Server
Feature
Added ee.Reducer.countRuns() , which computes the number of runs of
distinct, non-null inputs.
December 31, 2019
Earth Engine Data Catalog
Feature
Added COPERNICUS/S5P/NRTI/L3_AER_LH : Sentinel-5P NRTI AER LH: Near Real-Time UV Aerosol Layer Height
Added COPERNICUS/S5P/OFFL/L3_AER_LH : Sentinel-5P OFFL AER LH: Offline UV Aerosol Layer Height
Added JAXA/ALOS/AW3D30/V1_1 (no longer available)
Added JAXA/ALOS/AW3D30/V2_1 (no longer available)
Added JAXA/ALOS/AW3D30/V2_2 (no longer available)
Added NOAA/CDR/AVHRR/LAI_FAPAR/V5 : NOAA CDR AVHRR LAI FAPAR: Leaf Area Index and Fraction of Absorbed Photosynthetically Active Radiation, Version 5
Added NOAA/CDR/AVHRR/NDVI/V5 : NOAA CDR AVHRR NDVI: Normalized Difference Vegetation Index, Version 5
Added NOAA/CDR/AVHRR/SR/V5 : NOAA CDR AVHRR: Surface Reflectance, Version 5
Added NOAA/GOES/16/FDCC : GOES-16 FDCC Series ABI Level 2 Fire/Hot Spot Characterization CONUS
Added NOAA/GOES/17/FDCC : GOES-17 FDCC Series ABI Level 2 Fire/Hot Spot Characterization CONUS
December 24, 2019
Earth Engine Data Catalog
Feature
Added WWF/HydroSHEDS/v1/Basins/hybas_1 : WWF HydroSHEDS Basins Level 1
Added WWF/HydroSHEDS/v1/Basins/hybas_10 : WWF HydroSHEDS Basins Level 10
Added WWF/HydroSHEDS/v1/Basins/hybas_11 : WWF HydroSHEDS Basins Level 11
Added WWF/HydroSHEDS/v1/Basins/hybas_12 : WWF HydroSHEDS Basins Level 12
Added WWF/HydroSHEDS/v1/Basins/hybas_2 : WWF HydroSHEDS Basins Level 2
Added WWF/HydroSHEDS/v1/Basins/hybas_3 : WWF HydroSHEDS Basins Level 3
Added WWF/HydroSHEDS/v1/Basins/hybas_4 : WWF HydroSHEDS Basins Level 4
Added WWF/HydroSHEDS/v1/Basins/hybas_5 : WWF HydroSHEDS Basins Level 5
Added WWF/HydroSHEDS/v1/Basins/hybas_6 : WWF HydroSHEDS Basins Level 6
Added WWF/HydroSHEDS/v1/Basins/hybas_7 : WWF HydroSHEDS Basins Level 7
Added WWF/HydroSHEDS/v1/Basins/hybas_8 : WWF HydroSHEDS Basins Level 8
Added WWF/HydroSHEDS/v1/Basins/hybas_9 : WWF HydroSHEDS Basins Level 9
Added WWF/HydroSHEDS/v1/FreeFlowingRivers : WWF HydroSHEDS Free Flowing Rivers Network v1
December 10, 2019
Earth Engine Data Catalog
Feature
Added MODIS/006/MOD15A2H (no longer available)
Added MODIS/006/MYD15A2H (no longer available)
December 03, 2019
Earth Engine Data Catalog
Feature
Added COPERNICUS/Landcover/100m/Proba-V/Global (no longer available)
November 26, 2019
Earth Engine Data Catalog
Feature
Added LANDSAT/LO08/C01/T1 (no longer available)
Added LANDSAT/LO08/C01/T1_RT (no longer available)
Added LANDSAT/LO08/C01/T2 (no longer available)
Added LANDSAT/LT08/C01/T2 (no longer available)
November 22, 2019
Earth Engine Code Editor
Feature
Added feature to restrict access to Earth Engine Apps to members of a Google
Group. See the
announcement on the developers list
Earth Engine JavaScript Client Library
0.1.207
Change
Turned on Cloud API support by default for the JavaScript client library.
Developers with registered service accounts will need to
enable the API .
November 12, 2019
Earth Engine Code Editor
Feature
Launched ui.root.onResize() API with an
example script
for configuring user interface based on the device type and screen size.
Fixed
Expanded only exact matches on API documentation search in Code Editor.
Fixed Map.setZoom() so that it works after the map zoom is changed.
Earth Engine Python Client Library
0.1.206
Feature
Added new export parameters tileSize and maxWorkerCount in
_prepare_image_export_config() in ee/batch.py.
Earth Engine Server
Breaking
Changed the output bands produced by
ee.Algorithms.TemporalSegmentation.Ccdc() . See the
announcement on the developers list
for details.
Feature
Added Cloud API support to the JavaScript client library, and turned on Cloud
API support by default for the Python client library. Developers with
registered service accounts will need to
enable the API .
November 07, 2019
Earth Engine Server
Change
Added new versions of some classifiers:
ee.Classifier.smileCart() . This will eventually replace
ee.Classifier.cart() .
ee.Classifier.smileRandomForest() . This will eventually replace
ee.Classifier.randomForest() .
ee.Classifier.smileNaiveBayes() . This will eventually replace
ee.Classifier.naiveBayes() .
ee.Classifier.libsvm() . This will eventually replace
ee.Classifier.svm() .
November 05, 2019
Earth Engine Data Catalog
Feature
Added MODIS/006/MCD19A2_GRANULES (no longer available)
October 29, 2019
Earth Engine Data Catalog
Feature
Added NOAA/NHC/HURDAT2/atlantic : NOAA NHC HURDAT2 Atlantic Hurricane Catalog
Added NOAA/NHC/HURDAT2/pacific : NOAA NHC HURDAT2 Pacific Hurricane Catalog
October 23, 2019
Earth Engine JavaScript Client Library
0.1.204
Fixed
Improved the documentation for ee.Filter.not() .
Fixed the bug with clipToBoundsAndScale() . When clipping to bounds without
the scale parameter, the resulting image lost the native scale.
Earth Engine Python Client Library
0.1.204
Change
Supported a list of rectangle coordinates for the region parameter in
getThumbURL() .
October 22, 2019
Earth Engine Data Catalog
Feature
Added NOAA/NHC/HURDAT2/atlantic_v2019 (no longer available)
October 15, 2019
Earth Engine Data Catalog
Feature
Added MODIS/006/MOD44B (no longer available)
Added NOAA/GOES/16/FDCF : GOES-16 FDCF Series ABI Level 2 Fire/Hot Spot Characterization Full Disk
Added NOAA/GOES/17/FDCF : GOES-17 FDCF Series ABI Level 2 Fire/Hot Spot Characterization Full Disk
October 08, 2019
Earth Engine Data Catalog
Feature
Added ECMWF/ERA5/DAILY : ERA5 Daily Aggregates - Latest Climate Reanalysis Produced by ECMWF / Copernicus Climate Change Service
Added ECMWF/ERA5/MONTHLY : ERA5 Monthly Aggregates - Latest Climate Reanalysis Produced by ECMWF / Copernicus Climate Change Service
September 17, 2019
Earth Engine Data Catalog
Feature
Added OpenLandMap/CLM/CLM_LST_MOD11A2-DAYNIGHT_M/v01 : OpenLandMap Long-term Land Surface Temperature Monthly Day-Night Difference
Added OpenLandMap/CLM/CLM_LST_MOD11A2-DAY_M/v01 : OpenLandMap Long-term Land Surface Temperature Daytime Monthly Median
Added OpenLandMap/CLM/CLM_LST_MOD11A2-DAY_SD/v01 : OpenLandMap Long-term Land Surface Temperature Daytime Monthly Standard Deviation
Added OpenLandMap/CLM/CLM_PRECIPITATION_SM2RAIN_M/v01 : OpenLandMap Precipitation Monthly
Added OpenLandMap/PNV/PNV_BIOME-TYPE_BIOME00K_C/v01 : OpenLandMap Potential Distribution of Biomes
Added OpenLandMap/PNV/PNV_FAPAR_PROBA-V_D/v01 : OpenLandMap Potential FAPAR Monthly
Added OpenLandMap/SOL/SOL_BULKDENS-FINEEARTH_USDA-4A1H_M/v02 : OpenLandMap Soil Bulk Density
Added OpenLandMap/SOL/SOL_CLAY-WFRACTION_USDA-3A1A1A_M/v02 : OpenLandMap Clay Content
Added OpenLandMap/SOL/SOL_GRTGROUP_USDA-SOILTAX-HAPLUDALFS_P/v01 : OpenLandMap Predicted Hapludalfs Probability
Added OpenLandMap/SOL/SOL_GRTGROUP_USDA-SOILTAX_C/v01 : OpenLandMap USDA Soil Taxonomy Great Groups
Added OpenLandMap/SOL/SOL_ORGANIC-CARBON_USDA-6A1C_M/v02 : OpenLandMap Soil Organic Carbon Content
Added OpenLandMap/SOL/SOL_PH-H2O_USDA-4C1A2A_M/v02 : OpenLandMap Soil pH in H2O
Added OpenLandMap/SOL/SOL_SAND-WFRACTION_USDA-3A1A1A_M/v02 : OpenLandMap Sand Content
Added OpenLandMap/SOL/SOL_TEXTURE-CLASS_USDA-TT_M/v02 : OpenLandMap Soil Texture Class (USDA System)
Added OpenLandMap/SOL/SOL_WATERCONTENT-33KPA_USDA-4B1C_M/v01 : OpenLandMap Soil Water Content at 33kPa (Field Capacity)
September 13, 2019
Earth Engine Code Editor
Feature
Added support for uploading CSV files.
Earth Engine Server
Fixed
Added ee.Model.fromAiPlatformPredictor() , which returns an ee.Model from a
description of an AI Platform prediction model, and an
ee.Model.predictImage() algorithm, which makes predictions from pixel tiles
of an image. For more information, see the
Developer's Guide .
Added Image.sampleRectangle() algorithm, which extracts a rectangular region
of pixels from an image into a 2D array per band.
Added dotted and dashed line types to ee.FeatureCollection.style() .
Improved the performance of drawing complex polygons when zoomed in.
Fixed bug that sometimes caused Export.image.toAsset() to lose image
properties. Changed the behavior of ee.Image.reproject() to preserve image
properties.
September 10, 2019
Earth Engine Data Catalog
Feature
Added NASA/GPM_L3/IMERG_V06 (no longer available)
September 05, 2019
Earth Engine Server
Feature
Added ee.Filter.expression() to convert conditional and boolean string
expressions into filters and allow ee.Collection.filter() to take expression
strings.
September 03, 2019
Earth Engine Data Catalog
Feature
Added OpenLandMap/CLM/CLM_LST_MOD11A2-DAY_SD/v1 (no longer available)
Added OpenLandMap/PNV/PNV_BIOME-TYPE_BIOME00K_C/v1 (no longer available)
Added OpenLandMap/SOL/SOL_GRTGROUP_USDA-SOILTAX_C/v1 (no longer available)
Added UMN/PGC/REMA/V1/2m : REMA Strips 2m
Added UMN/PGC/REMA/V1/8m : REMA Strips 8m
Added UMN/PGC/REMA/V1_1/8m : REMA Mosaic
Added WorldPop/GP/100m/pop : WorldPop Global Project Population Data: Estimated Residential Population per 100x100m Grid Square
August 30, 2019
Earth Engine Code Editor
Change
Opened the shortcuts menu on ? key press when not in a text field.
Earth Engine JavaScript Client Library
0.1.193
Change
Refactored networking routines into apiclient.js .
Earth Engine Python Client Library
0.1.193
Feature
Added ee.Authenticate() to authorize access to Earth Engine via OAuth2.
August 20, 2019
Earth Engine Data Catalog
Feature
Added UMN/PGC/ArcticDEM/V3/2m : ArcticDEM Strips
Added UMN/PGC/ArcticDEM/V3/2m_mosaic (no longer available)
August 09, 2019
Earth Engine Server
Change
Allowed assignment (band naming) of ee.Image.expression() results with = .
For instance: ee.Image.expression('ndvi = (nir - red) / (nir + red)') .
August 06, 2019
Earth Engine Data Catalog
Feature
Added CIESIN/GPWv411/GPW_Basic_Demographic_Characteristics : GPWv411: Basic Demographic Characteristics (Gridded Population of the World Version 4.11)
Added CIESIN/GPWv411/GPW_Data_Context : GPWv411: Data Context (Gridded Population of the World Version 4.11)
Added CIESIN/GPWv411/GPW_Land_Area : GPWv411: Land Area (Gridded Population of the World Version 4.11)
Added CIESIN/GPWv411/GPW_Mean_Administrative_Unit_Area : GPWv411: Mean Administrative Unit Area (Gridded Population of the World Version 4.11)
Added CIESIN/GPWv411/GPW_National_Identifier_Grid : GPWv411: National Identifier Grid (Gridded Population of the World Version 4.11)
Added CIESIN/GPWv411/GPW_Population_Count : GPWv411: Population Count (Gridded Population of the World Version 4.11)
Added CIESIN/GPWv411/GPW_Population_Density : GPWv411: Population Density (Gridded Population of the World Version 4.11)
Added CIESIN/GPWv411/GPW_UNWPP-Adjusted_Population_Count : GPWv411: Adjusted to Match 2015 Revision of UN WPP Country Totals (Gridded Population of the World Version 4.11)
Added CIESIN/GPWv411/GPW_UNWPP-Adjusted_Population_Density : GPWv411: UN-Adjusted Population Density (Gridded Population of the World Version 4.11)
Added CIESIN/GPWv411/GPW_Water_Area : GPWv411: Water Area (Gridded Population of the World Version 4.11)
Added CIESIN/GPWv411/GPW_Water_Mask : GPWv411: Water Mask (Gridded Population of the World Version 4.11)
Added MODIS/006/MCD12Q2 (no longer available)
July 30, 2019
Earth Engine Data Catalog
Feature
Added JRC/GSW1_1/GlobalSurfaceWater (no longer available)
Added JRC/GSW1_1/Metadata (no longer available)
Added JRC/GSW1_1/MonthlyHistory (no longer available)
Added JRC/GSW1_1/MonthlyRecurrence (no longer available)
Added JRC/GSW1_1/YearlyHistory (no longer available)
July 29, 2019
Earth Engine Code Editor
Change
Enabled ui.Thumbnail() to accept ee.Geometry objects for the region parameter.
July 09, 2019
Earth Engine Data Catalog
Feature
Added USGS/GAP/AK/2001 : USGS GAP Alaska 2001
Added USGS/GAP/CONUS/2011 : USGS GAP CONUS 2011
Added USGS/GAP/HI/2001 : USGS GAP Hawaii 2001
Added USGS/GAP/PR/2001 : USGS GAP Puerto Rico 2001
June 25, 2019
Earth Engine Data Catalog
Feature
Added TIGER/2010/ZCTA5 (no longer available)
June 18, 2019
Earth Engine Data Catalog
Feature
Added COPERNICUS/S5P/OFFL/L3_CH4 : Sentinel-5P OFFL CH4: Offline Methane
Added TIGER/2018/Counties : TIGER: US Census Counties 2018
Added TIGER/2018/States : TIGER: US Census States 2018
June 13, 2019
Earth Engine Code Editor
Change
Added ui.Map.CloudStorageLayer() , a type of map layer which reads static
image tiles from Google Cloud Storage in the Code Editor and Earth Engine
Apps. For more information, see the
Developer's Guide .
Improved ui.Slider widget's onClick behavior.
Earth Engine Server
Feature
Added ee.Array.argMax() .
June 07, 2019
Earth Engine Code Editor
Change
Separated Help and Feedback menus and added link to Stack Exchange.
Added explicit "Save & Close" button when editing asset properties.
Enabled Ctrl-Drag to make copies of scripts.
Simplified login flow.
May 14, 2019
Earth Engine Data Catalog
Feature
Added NOAA/CFSR : CFSR: Climate Forecast System Reanalysis
May 10, 2019
Earth Engine Code Editor
Feature
Added a Manage Links page, on a menu next to Get Link. Links can be deleted
and downloaded in bulk.
April 16, 2019
Earth Engine Data Catalog
Feature
Added UMD/GLAD/PRIMARY_HUMID_TROPICAL_FORESTS/v1 : Primary Humid Tropical Forests
April 03, 2019
Earth Engine Code Editor
Feature
Added the ability to draw rectangles on the map (along with points, lines,
and polygons). Learn more in the
Developer's Guide .
Earth Engine Server
Change
Increased the maximum size of an ee.Kernel from 255 pixels to 512.
April 02, 2019
Earth Engine Data Catalog
Feature
Added COPERNICUS/S2_SR (no longer available)
March 29, 2019
Earth Engine Server
Feature
Added ee.ImageCollection.getVideoThumbURL() .
March 21, 2019
Earth Engine Server
Change
Removed the ee.Image.trainClassifier() and
ee.FeatureCollection.trainClassifier() functions that were deprecated in
September, 2016. Callers should be using ee.Classifier.train() instead.
March 19, 2019
Earth Engine Data Catalog
Feature
Added UMD/hansen/global_forest_change_2018_v1_6 (no longer available)
March 15, 2019
Earth Engine Code Editor
Change
Dataset listing page now redirects to
the public catalog .
Earth Engine Server
Fixed
Fixed a regression that caused assets in polar projections to be displayed
incorrectly.
February 26, 2019
Earth Engine Data Catalog
Feature
Added HYCOM/sea_surface_elevation : HYCOM: Hybrid Coordinate Ocean Model, Sea Surface Elevation
Added HYCOM/sea_temp_salinity : HYCOM: Hybrid Coordinate Ocean Model, Water Temperature and Salinity
Added HYCOM/sea_water_velocity : HYCOM: Hybrid Coordinate Ocean Model, Water Velocity
February 21, 2019
Earth Engine Code Editor
Change
Changed positioning of ui.Panel.Layout.absolute() widgets on maps. The new
positioning aligns better with other map controls such as the Layer Manager.
Also added support for multiple widgets in the same position.
February 19, 2019
Earth Engine Data Catalog
Feature
Added CAS/IGSNRR/PML/V2 (no longer available)
February 12, 2019
Earth Engine Data Catalog
Feature
Added COPERNICUS/S5P/NRTI/L3_CLOUD : Sentinel-5P NRTI CLOUD: Near Real-Time Cloud Properties
Added COPERNICUS/S5P/OFFL/L3_CLOUD : Sentinel-5P OFFL CLOUD: Offline Cloud Properties
Added NASA/FLDAS/NOAH01/C/GL/M/V001 : FLDAS: Famine Early Warning Systems Network (FEWS NET) Land Data Assimilation System
February 05, 2019
Earth Engine Data Catalog
Feature
Added COPERNICUS/S5P/NRTI/L3_CO : Sentinel-5P NRTI CO: Near Real-Time Carbon Monoxide
Added COPERNICUS/S5P/OFFL/L3_HCHO : Sentinel-5P OFFL HCHO: Offline Formaldehyde
Added COPERNICUS/S5P/OFFL/L3_SO2 : Sentinel-5P OFFL SO2: Offline Sulfur Dioxide
Added CSP/HM/GlobalHumanModification : CSP gHM: Global Human Modification
Earth Engine Server
Fixed
Fixed Image.reduceRegions internal server error.
Fixed rare issue with not sampling from all portions of some complex polygons
in FeatureCollection.randomPoints and Image.sample .
January 17, 2019
Earth Engine Code Editor
Fixed
Added KBDI dataset.
Fixed a bug in which the export/thumbnail region was generating an extra pixel
when the region has an edge that lies exactly along a pixel boundary line. For
example, in the past behavior, exporting a hemisphere might export one pixel
on the other side of the equator. This should now be fixed.
January 15, 2019
Earth Engine Data Catalog
Feature
Added UTOKYO/WTLAB/KBDI/v1 : KBDI: Keetch-Byram Drought Index
January 10, 2019
Earth Engine Server
Feature
Added ee.List.distinct() .
January 04, 2019
Earth Engine Code Editor
Feature
Added "Run With Profiler" option and removed sticky profiler setting.
Added ui.Map.onTileLoaded() notification.
December 25, 2018
Earth Engine Data Catalog
Feature
Added UQ/murray/Intertidal/v1_1/data_mask : Murray Global Intertidal Change Data Mask
Added UQ/murray/Intertidal/v1_1/global_intertidal : Murray Global Intertidal Change Classification
Added UQ/murray/Intertidal/v1_1/qa_pixel_count : Murray Global Intertidal Change QA Pixel Count
December 11, 2018
Earth Engine Data Catalog
Feature
Added COPERNICUS/S5P/NRTI/L3_HCHO : Sentinel-5P NRTI HCHO: Near Real-Time Formaldehyde
Added COPERNICUS/S5P/NRTI/L3_O3 : Sentinel-5P NRTI O3: Near Real-Time Ozone
Added COPERNICUS/S5P/NRTI/L3_SO2 : Sentinel-5P NRTI SO2: Near Real-Time Sulfur Dioxide
December 07, 2018
Earth Engine Server
Feature
Added optional mapsApiKey parameter to Export.map.toCloudStorage() , to
allow callers to specify a Google Maps API key for the map viewer in those
exports.
December 04, 2018
Earth Engine Data Catalog
Feature
Added COPERNICUS/S5P/OFFL/L3_O3 : Sentinel-5P OFFL O3: Offline Ozone
November 29, 2018
Earth Engine Server
Fixed
Operations that attempt to construct very complex geometries (more than 2M
edges) will now fail with a "Geometry has too many edges" error. Previously
they would sometimes succeed, sometimes fail with a "memory limit exceeded"
error, and sometimes cause an internal server error.
Fixed an error that sometimes caused ee.Image.resample() to fail to mask
invalid pixels in its output.
November 20, 2018
Earth Engine Data Catalog
Feature
Added COPERNICUS/S5P/NRTI/L3_AER_AI : Sentinel-5P NRTI AER AI: Near Real-Time UV Aerosol Index
Added COPERNICUS/S5P/NRTI/L3_NO2 : Sentinel-5P NRTI NO2: Near Real-Time Nitrogen Dioxide
November 15, 2018
Earth Engine Server
Feature
Added ee.Image.setDefaultProjection() and ee.Image.clipToBoundsAndScale() .
November 13, 2018
Earth Engine Data Catalog
Feature
Added COPERNICUS/S5P/OFFL/L3_AER_AI : Sentinel-5P OFFL AER AI: Offline UV Aerosol Index
Added COPERNICUS/S5P/OFFL/L3_CO : Sentinel-5P OFFL CO: Offline Carbon Monoxide
November 09, 2018
Earth Engine JavaScript Client Library
0.1.159
Change
Ensure JS client library can resolve export regions.
Earth Engine Python Client Library
0.1.159
Change
Ensure JS client library can resolve export regions.
November 06, 2018
Earth Engine Data Catalog
Feature
Added COPERNICUS/S5P/OFFL/L3_NO2 : Sentinel-5P OFFL NO2: Offline Nitrogen Dioxide
October 11, 2018
Earth Engine Code Editor
Feature
Added the ability to make a ui.Label() be a hyperlink.
Earth Engine Server
Fixed
Fix a formatting error in the "invalid asset ID" error message.
October 04, 2018
Earth Engine Server
Fixed
Fixed a bug introduced in the 2018-09-28 update which could cause spurious
"User memory limit exceeded" errors, e.g. when computing large aggregations.
October 02, 2018
Earth Engine Data Catalog
Feature
Added NOAA/VIIRS/001/VNP13A1 (no longer available)
September 28, 2018
Earth Engine Code Editor
Change
Released Earth Engine Apps , to enable developers to create dynamic, publicly
accessible user interfaces for Earth Engine analyses (see our
blog post
for more details).
Earth Engine JavaScript Client Library
0.1.149
Feature
Added and updated several UI API examples.
Earth Engine Python Client Library
0.1.149
Feature
Added and updated several UI API examples.
Earth Engine Server
Fixed
Fixed an overly restrictive error check in
ee.Algorithms.Image.Segmentation.KMeans() .
September 14, 2018
Earth Engine Code Editor
Feature
Added ui.DateSlider UI API widget, to allow simple selection of dates.
Added ui.SplitPanel UI API widget, to enable side-by-side maps in a panel.
Earth Engine Server
Feature
Changed ee.Image.reduceToVectors() labels to be 64-bit integer values, to
fix an overflow bug.
Added geometries option to ee.Image.sample() , ee.Image.sampleRegions()
and ee.Image.stratifiedSample() , to produce per-feature geometries.
August 23, 2018
Earth Engine Server
Feature
Added ee.List.filter() and ee.List.join() .
August 21, 2018
Earth Engine Data Catalog
Feature
Added GLIMS/current : GLIMS Current: Global Land Ice Measurements From Space
August 17, 2018
Earth Engine Code Editor
Feature
Added ui.Map.unlisten() .
Earth Engine Server
Change
Documented TFRecord and Shapefile as valid table export formats.
Standardized bit-masking throughout the "Cloud Masking" examples.
August 14, 2018
Earth Engine Data Catalog
Feature
Added GLIMS/20171027 (no longer available)
July 17, 2018
Earth Engine Data Catalog
Feature
Added CPOM/CryoSat2/ANTARCTICA_DEM : CryoSat-2 Antarctica 1km DEM
Added OSU/GIMP/2000_ICE_OCEAN_MASK : Greenland Ice & Ocean Mask - Greenland Mapping Project (GIMP)
Added OSU/GIMP/2000_IMAGERY_MOSAIC : 2000 Greenland Mosaic - Greenland Ice Mapping Project (GIMP)
Added OSU/GIMP/DEM : Greenland DEM - Greenland Mapping Project (GIMP)
Added OSU/GIMP/ICE_VELOCITY_OPT : MEaSUREs Greenland Ice Velocity: Selected Glacier Site Velocity Maps from Optical Images Version 2
Added TIGER/2016/Counties : TIGER: US Census Counties 2016
Added TIGER/2016/States : TIGER: US Census States 2016
Added USGS/LIMA/MOSAIC : Landsat Image Mosaic of Antarctica (LIMA) 16-Bit Pan-Sharpened Mosaic
Added USGS/LIMA/SR : Landsat Image Mosaic of Antarctica (LIMA) - Processed Landsat Scenes (16 bit)
July 10, 2018
Earth Engine Data Catalog
Feature
Added TRMM/3B43V7 : TRMM 3B43: Monthly Precipitation Estimates
July 03, 2018
Earth Engine Data Catalog
Feature
Added CSP/ERGo/1_0/Global/ALOS_CHILI : Global ALOS CHILI (Continuous Heat-Insolation Load Index)
Added CSP/ERGo/1_0/Global/ALOS_landforms : Global ALOS Landforms
Added CSP/ERGo/1_0/Global/ALOS_mTPI : Global ALOS mTPI (Multi-Scale Topographic Position Index)
Added CSP/ERGo/1_0/Global/ALOS_topoDiversity : Global ALOS Topographic Diversity
Added CSP/ERGo/1_0/Global/SRTM_CHILI : Global SRTM CHILI (Continuous Heat-Insolation Load Index)
Added CSP/ERGo/1_0/Global/SRTM_landforms : Global SRTM Landforms
Added CSP/ERGo/1_0/Global/SRTM_mTPI : Global SRTM mTPI (Multi-Scale Topographic Position Index)
Added CSP/ERGo/1_0/Global/SRTM_topoDiversity : Global SRTM Topographic Diversity
Added CSP/ERGo/1_0/US/CHILI : US NED CHILI (Continuous Heat-Insolation Load Index)
Added CSP/ERGo/1_0/US/landforms : US NED Landforms
Added CSP/ERGo/1_0/US/lithology : US Lithology
Added CSP/ERGo/1_0/US/mTPI : US NED mTPI (Multi-Scale Topographic Position Index)
Added CSP/ERGo/1_0/US/physioDiversity : US NED Physiographic Diversity
Added CSP/ERGo/1_0/US/physiography : US Physiography
Added CSP/ERGo/1_0/US/topoDiversity : US NED Topographic Diversity
Added JRC/GHSL/P2016/BUILT_LDSMT_GLOBE_V1 (no longer available)
Added JRC/GHSL/P2016/BUILT_LDS_GLOBE_V1 (no longer available)
Added JRC/GHSL/P2016/POP_GPW_GLOBE_V1 (no longer available)
Added JRC/GHSL/P2016/SMOD_POP_GLOBE_V1 (no longer available)
Added UMN/PGC/ArcticDEM/V2/2m (no longer available)
Added UMN/PGC/ArcticDEM/V2/5m (no longer available)
June 29, 2018
Earth Engine Server
Fixed
Added optional uniqueLabels parameter to ee.Algorithms.Image.Segmentation algorithms, which forces clusters to have unique IDs.
Fixed type promotion bug in ee.Image.reduceConnectedComponents() which occurred when processing array images.
June 26, 2018
Earth Engine Data Catalog
Feature
Added LANDSAT/LM01/C01/T1 (no longer available)
Added LANDSAT/LM01/C01/T2 (no longer available)
Added LANDSAT/LM02/C01/T1 (no longer available)
Added LANDSAT/LM02/C01/T2 (no longer available)
Added LANDSAT/LM03/C01/T1 (no longer available)
Added LANDSAT/LM03/C01/T2 (no longer available)
Added LANDSAT/LM04/C01/T1 (no longer available)
Added LANDSAT/LM04/C01/T2 (no longer available)
Added LANDSAT/LM05/C01/T1 (no longer available)
Added LANDSAT/LM05/C01/T2 (no longer available)
June 22, 2018
Earth Engine Server
Feature
Fixed NaN handling in ee.Image.spectralDistance() algorithm.
Added ee.Image.selfMask algorithm to streamline the process of masking an image with its own values.
June 19, 2018
Earth Engine Data Catalog
Feature
Added COPERNICUS/CORINE/V18_5_1/100m (no longer available)
Added JAXA/ALOS/PALSAR/YEARLY/SAR : Global PALSAR-2/PALSAR Yearly Mosaic, version 1
Added MODIS/006/MCD12Q1 (no longer available)
Added MODIS/006/MOD13A2 (no longer available)
Added MODIS/006/MYD13A2 (no longer available)
Added UMD/hansen/global_forest_change_2017_v1_5 (no longer available)
June 12, 2018
Earth Engine Data Catalog
Feature
Added UMT/NTSG/v2/LANDSAT/GPP : Landsat Gross Primary Production CONUS
Added UMT/NTSG/v2/LANDSAT/NPP : Landsat Net Primary Production CONUS
Added UMT/NTSG/v2/MODIS/GPP : MODIS Gross Primary Production CONUS
Added UMT/NTSG/v2/MODIS/NPP : MODIS Net Primary Production CONUS
June 08, 2018
Earth Engine Server
Feature
Added ee.Image.spectralGradient() , ee.Image.spectralMorphology() and ee.Image.spectralDistance() algorithms.
Added ee.Image.reduceConnectedComponents() algorithm.
Added ee.Image.Segmentation.KMeans() and ee.Image.Segmentation.GMeans() .
Added LandTrendr, EWMACD, VerDET and VCT temporal segmentation algorithms.
May 22, 2018
Earth Engine Data Catalog
Feature
Added NRCan/CDEM : Canadian Digital Elevation Model
May 18, 2018
Earth Engine Server
Feature
Added new superpixel segmentation algorithm ee.Algorithms.Image.Segmentation.SNIC() .
Added new filters ee.Filter.isContained() and ee.Filter.notNull() .
May 01, 2018
Earth Engine Data Catalog
Feature
Added FAO/GAUL/2015/level0 : FAO GAUL: Global Administrative Unit Layers 2015, Country Boundaries
Added FAO/GAUL/2015/level1 : FAO GAUL: Global Administrative Unit Layers 2015, First-Level Administrative Units
Added FAO/GAUL/2015/level2 : FAO GAUL: Global Administrative Unit Layers 2015, Second-Level Administrative Units
April 24, 2018
Earth Engine Data Catalog
Feature
Added AAFC/ACI : Canada AAFC Annual Crop Inventory
Added GFW/GFF/V1/fishing_hours : GFW (Global Fishing Watch) Daily Fishing Hours
Added GFW/GFF/V1/vessel_hours : GFW (Global Fishing Watch) Daily Vessel Hours
Added IDAHO_EPSCOR/TERRACLIMATE : TerraClimate: Monthly Climate and Climatic Water Balance for Global Terrestrial Surfaces, University of Idaho
Added JAXA/ALOS/AVNIR-2/ORI : ALOS/AVNIR-2 ORI
Added JAXA/ALOS/PALSAR/YEARLY/FNF : Global 3-class PALSAR-2/PALSAR Forest/Non-Forest Map
Added MODIS/006/MCD64A1 (no longer available)
Added MODIS/006/MOD13A1 (no longer available)
Added MODIS/006/MOD16A2 (no longer available)
Added MODIS/006/MOD44W : MOD44W.006 Terra Land Water Mask Derived From MODIS and SRTM Yearly Global 250m
Added MODIS/006/MYD13A1 (no longer available)
Added NASA/GRACE/MASS_GRIDS/LAND (no longer available)
Added NASA/GRACE/MASS_GRIDS/MASCON (no longer available)
Added NASA/GRACE/MASS_GRIDS/MASCON_CRI (no longer available)
Added NASA/GRACE/MASS_GRIDS/OCEAN (no longer available)
Added NASA/GRACE/MASS_GRIDS/OCEAN_EOFR : GRACE Monthly Mass Grids - Ocean EOFR
Added NASA_USDA/HSL/SMAP_soil_moisture (no longer available)
Added NASA_USDA/HSL/soil_moisture (no longer available)
Added Oxford/MAP/accessibility_to_cities_2015_v1_0 (no longer available)
Added Oxford/MAP/friction_surface_2015_v1_0 (no longer available)
Added RESOLVE/ECOREGIONS/2017 : RESOLVE Ecoregions 2017
Added WRI/GFW/FORMA/alerts : FORMA Alerts
Added WRI/GFW/FORMA/raw_output_firms : FORMA Raw Output FIRMS
Added WRI/GFW/FORMA/raw_output_ndvi : FORMA Raw Output NDVI
Added WRI/GFW/FORMA/thresholds : FORMA Alert Thresholds
Added WRI/GFW/FORMA/vegetation_tstats : FORMA Vegetation T-Statistics
Added WRI/GPPD/power_plants : Global Power Plant Database
April 13, 2018
Earth Engine Code Editor
Fixed
Fixed Cannot read property 'undefined' of undefined error.
Earth Engine Server
Fixed
Clarified skipEmptyTiles parameter default values for Map exports in
Python.
Fixed several small typographical errors.
April 06, 2018
Earth Engine Code Editor
Feature
Added time-related utility functions to ui.util :
ui.util.clear()
ui.util.clearTimeout()
ui.util.rateLimit()
ui.util.setInterval()
ui.util.setTimeout()
ui.util.throttle()
April 03, 2018
Earth Engine Data Catalog
Feature
Added LANDSAT/LC08/C01/T1_32DAY_BAI (no longer available)
Added LANDSAT/LC08/C01/T1_32DAY_EVI (no longer available)
Added LANDSAT/LC08/C01/T1_32DAY_NBRT (no longer available)
Added LANDSAT/LC08/C01/T1_32DAY_NDSI (no longer available)
Added LANDSAT/LC08/C01/T1_32DAY_NDVI (no longer available)
Added LANDSAT/LC08/C01/T1_32DAY_NDWI (no longer available)
Added LANDSAT/LC08/C01/T1_32DAY_RAW (no longer available)
Added LANDSAT/LC08/C01/T1_32DAY_TOA (no longer available)
Added LANDSAT/LC08/C01/T1_8DAY_BAI (no longer available)
Added LANDSAT/LC08/C01/T1_8DAY_EVI (no longer available)
Added LANDSAT/LC08/C01/T1_8DAY_NBRT (no longer available)
Added LANDSAT/LC08/C01/T1_8DAY_NDSI (no longer available)
Added LANDSAT/LC08/C01/T1_8DAY_NDVI (no longer available)
Added LANDSAT/LC08/C01/T1_8DAY_NDWI (no longer available)
Added LANDSAT/LC08/C01/T1_8DAY_RAW (no longer available)
Added LANDSAT/LC08/C01/T1_8DAY_TOA (no longer available)
Added LANDSAT/LC08/C01/T1_ANNUAL_BAI (no longer available)
Added LANDSAT/LC08/C01/T1_ANNUAL_EVI (no longer available)
Added LANDSAT/LC08/C01/T1_ANNUAL_NBRT (no longer available)
Added LANDSAT/LC08/C01/T1_ANNUAL_NDSI (no longer available)
Added LANDSAT/LC08/C01/T1_ANNUAL_NDVI (no longer available)
Added LANDSAT/LC08/C01/T1_ANNUAL_NDWI (no longer available)
Added LANDSAT/LC08/C01/T1_ANNUAL_RAW (no longer available)
Added LANDSAT/LC08/C01/T1_ANNUAL_TOA (no longer available)
Added LANDSAT/LE07/C01/T1_32DAY_BAI (no longer available)
Added LANDSAT/LE07/C01/T1_32DAY_EVI (no longer available)
Added LANDSAT/LE07/C01/T1_32DAY_NBRT (no longer available)
Added LANDSAT/LE07/C01/T1_32DAY_NDSI (no longer available)
Added LANDSAT/LE07/C01/T1_32DAY_NDVI (no longer available)
Added LANDSAT/LE07/C01/T1_32DAY_NDWI (no longer available)
Added LANDSAT/LE07/C01/T1_32DAY_RAW (no longer available)
Added LANDSAT/LE07/C01/T1_32DAY_TOA (no longer available)
Added LANDSAT/LE07/C01/T1_8DAY_BAI (no longer available)
Added LANDSAT/LE07/C01/T1_8DAY_EVI (no longer available)
Added LANDSAT/LE07/C01/T1_8DAY_NBRT (no longer available)
Added LANDSAT/LE07/C01/T1_8DAY_NDSI (no longer available)
Added LANDSAT/LE07/C01/T1_8DAY_NDVI (no longer available)
Added LANDSAT/LE07/C01/T1_8DAY_NDWI (no longer available)
Added LANDSAT/LE07/C01/T1_8DAY_RAW (no longer available)
Added LANDSAT/LE07/C01/T1_8DAY_TOA (no longer available)
Added LANDSAT/LE07/C01/T1_ANNUAL_BAI (no longer available)
Added LANDSAT/LE07/C01/T1_ANNUAL_EVI (no longer available)
Added LANDSAT/LE07/C01/T1_ANNUAL_NBRT (no longer available)
Added LANDSAT/LE07/C01/T1_ANNUAL_NDSI (no longer available)
Added LANDSAT/LE07/C01/T1_ANNUAL_NDVI (no longer available)
Added LANDSAT/LE07/C01/T1_ANNUAL_NDWI (no longer available)
Added LANDSAT/LE07/C01/T1_ANNUAL_RAW (no longer available)
Added LANDSAT/LE07/C01/T1_ANNUAL_TOA (no longer available)
Added LANDSAT/LT04/C01/T1_32DAY_BAI (no longer available)
Added LANDSAT/LT04/C01/T1_32DAY_EVI (no longer available)
Added LANDSAT/LT04/C01/T1_32DAY_NBRT (no longer available)
Added LANDSAT/LT04/C01/T1_32DAY_NDSI (no longer available)
Added LANDSAT/LT04/C01/T1_32DAY_NDVI (no longer available)
Added LANDSAT/LT04/C01/T1_32DAY_NDWI (no longer available)
Added LANDSAT/LT04/C01/T1_32DAY_RAW (no longer available)
Added LANDSAT/LT04/C01/T1_32DAY_TOA (no longer available)
Added LANDSAT/LT04/C01/T1_8DAY_BAI (no longer available)
Added LANDSAT/LT04/C01/T1_8DAY_EVI (no longer available)
Added LANDSAT/LT04/C01/T1_8DAY_NBRT (no longer available)
Added LANDSAT/LT04/C01/T1_8DAY_NDSI (no longer available)
Added LANDSAT/LT04/C01/T1_8DAY_NDVI (no longer available)
Added LANDSAT/LT04/C01/T1_8DAY_NDWI (no longer available)
Added LANDSAT/LT04/C01/T1_8DAY_RAW (no longer available)
Added LANDSAT/LT04/C01/T1_8DAY_TOA (no longer available)
Added LANDSAT/LT04/C01/T1_ANNUAL_BAI (no longer available)
Added LANDSAT/LT04/C01/T1_ANNUAL_EVI (no longer available)
Added LANDSAT/LT04/C01/T1_ANNUAL_NBRT (no longer available)
Added LANDSAT/LT04/C01/T1_ANNUAL_NDSI (no longer available)
Added LANDSAT/LT04/C01/T1_ANNUAL_NDVI (no longer available)
Added LANDSAT/LT04/C01/T1_ANNUAL_NDWI (no longer available)
Added LANDSAT/LT04/C01/T1_ANNUAL_RAW (no longer available)
Added LANDSAT/LT04/C01/T1_ANNUAL_TOA (no longer available)
Added LANDSAT/LT05/C01/T1_32DAY_BAI (no longer available)
Added LANDSAT/LT05/C01/T1_32DAY_EVI (no longer available)
Added LANDSAT/LT05/C01/T1_32DAY_NBRT (no longer available)
Added LANDSAT/LT05/C01/T1_32DAY_NDSI (no longer available)
Added LANDSAT/LT05/C01/T1_32DAY_NDVI (no longer available)
Added LANDSAT/LT05/C01/T1_32DAY_NDWI (no longer available)
Added LANDSAT/LT05/C01/T1_32DAY_RAW (no longer available)
Added LANDSAT/LT05/C01/T1_32DAY_TOA (no longer available)
Added LANDSAT/LT05/C01/T1_8DAY_BAI (no longer available)
Added LANDSAT/LT05/C01/T1_8DAY_EVI (no longer available)
Added LANDSAT/LT05/C01/T1_8DAY_NBRT (no longer available)
Added LANDSAT/LT05/C01/T1_8DAY_NDSI (no longer available)
Added LANDSAT/LT05/C01/T1_8DAY_NDVI (no longer available)
Added LANDSAT/LT05/C01/T1_8DAY_NDWI (no longer available)
Added LANDSAT/LT05/C01/T1_8DAY_RAW (no longer available)
Added LANDSAT/LT05/C01/T1_8DAY_TOA (no longer available)
Added LANDSAT/LT05/C01/T1_ANNUAL_BAI (no longer available)
Added LANDSAT/LT05/C01/T1_ANNUAL_EVI (no longer available)
Added LANDSAT/LT05/C01/T1_ANNUAL_NBRT (no longer available)
Added LANDSAT/LT05/C01/T1_ANNUAL_NDSI (no longer available)
Added LANDSAT/LT05/C01/T1_ANNUAL_NDVI (no longer available)
Added LANDSAT/LT05/C01/T1_ANNUAL_NDWI (no longer available)
Added LANDSAT/LT05/C01/T1_ANNUAL_RAW (no longer available)
Added LANDSAT/LT05/C01/T1_ANNUAL_TOA (no longer available)
March 21, 2018
Earth Engine Code Editor
Feature
Added wrap parameter for ui.Panel.Layout.Flow() , which causes widgets in the
layout to wrap if they overflow the available space.
Added the ability to specify an opacity for ui.Style color and background
color (using hex or rgba notation).
March 13, 2018
Earth Engine Data Catalog
Feature
Added LANDSAT/LC08/C01/T2_SR (no longer available)
Added LANDSAT/LE07/C01/T2_SR (no longer available)
Added LANDSAT/LT04/C01/T2_SR (no longer available)
Added LANDSAT/LT05/C01/T2_SR (no longer available)
March 01, 2018
Earth Engine Server
Change
Fixed ee.Geometry.transform() to report the projection a geometry cannot be transformed into, instead of returning an internal error.
Fixed bug introduced last week where the default visualizations of many assets in the public catalog were ignored.
Removed ee.Algorithms.Landsat.surfaceReflectance() , which was deprecated some time ago. Please use the SR collections instead.
February 07, 2018
Earth Engine Server
Change
Removed deprecated trainClassifier algorithms on images and feature
collections. Use Classifier.train() instead.
February 06, 2018
Earth Engine Data Catalog
Feature
Added LANDSAT/LC08/C01/T1_ANNUAL_GREENEST_TOA (no longer available)
Added LANDSAT/LC08/C01/T1_RT_ANNUAL_GREENEST_TOA (no longer available)
Added LANDSAT/LE07/C01/T1_ANNUAL_GREENEST_TOA (no longer available)
Added LANDSAT/LE07/C01/T1_RT_ANNUAL_GREENEST_TOA (no longer available)
Added LANDSAT/LT04/C01/T1_ANNUAL_GREENEST_TOA (no longer available)
Added LANDSAT/LT05/C01/T1_ANNUAL_GREENEST_TOA (no longer available)
January 09, 2018
Earth Engine Data Catalog
Feature
Added LANDSAT/LT04/C01/T1 (no longer available)
Added LANDSAT/LT04/C01/T1_TOA (no longer available)
Added LANDSAT/LT04/C01/T2 (no longer available)
Added LANDSAT/LT04/C01/T2_TOA (no longer available)
Added MODIS/MCD43A4_006_BAI : MODIS Combined 16-Day BAI
Added MODIS/MCD43A4_006_EVI : MODIS Combined 16-Day EVI
Added MODIS/MCD43A4_006_NDSI : MODIS Combined 16-Day NDSI
Added MODIS/MCD43A4_006_NDVI : MODIS Combined 16-Day NDVI
Added MODIS/MCD43A4_006_NDWI : MODIS Combined 16-Day NDWI
January 03, 2018
Earth Engine Server
Change
Calling image.paint() on an image with no bands now has no effect (it used
to cause an internal server error).
December 26, 2017
Earth Engine Data Catalog
Feature
Added NASA/GPM_L3/IMERG_V05 (no longer available)
Added UCSB-CHG/CHIRPS/DAILY : CHIRPS Precipitation Daily: Climate Hazards Center InfraRed Precipitation With Station Data (Version 2.0 Final)
December 20, 2017
Earth Engine Server
Deprecated
Deprecated trainClassifier algorithms are no longer documented and will be removed completely in February 2018. Use Classifier.train instead.
December 12, 2017
Earth Engine Data Catalog
Feature
Added JAXA/ALOS/AW3D30_V1_1 (no longer available)
Added OREGONSTATE/PRISM/AN81d (no longer available)
Added OREGONSTATE/PRISM/AN81m (no longer available)
Added OREGONSTATE/PRISM/Norm81m (no longer available)
December 05, 2017
Earth Engine Data Catalog
Feature
Added MODIS/006/MCD43A4 (no longer available)
Added USDOS/LSIB/2017 : LSIB 2017: Large Scale International Boundary Polygons, Detailed
December 04, 2017
Earth Engine Code Editor
Change
Improved the robustness of polygon handling in table upload. Previously-difficult polygons are now interpreted according to the rules used to draw them.
November 14, 2017
Earth Engine Data Catalog
Feature
Added LANDSAT/LC08/C01/T1_SR (no longer available)
November 07, 2017
Earth Engine Data Catalog
Feature
Added AU/GA/DEM_1SEC/v10/DEM-H : DEM-H: Australian SRTM Hydrologically Enforced Digital Elevation Model
Added AU/GA/DEM_1SEC/v10/DEM-S : DEM-S: Australian Smoothed Digital Elevation Model
Added COPERNICUS/S3/OLCI : Sentinel-3 OLCI EFR: Ocean and Land Color Instrument Earth Observation Full Resolution
October 26, 2017
Earth Engine Server
Feature
Added last reducers ee.Reducer.last() and ee.Reducer.lastNonNull() which select the last element.
October 24, 2017
Earth Engine Data Catalog
Feature
Added JAXA/GPM_L3/GSMaP/v6/operational : GSMaP Operational: Global Satellite Mapping of Precipitation - V6
Added JAXA/GPM_L3/GSMaP/v6/reanalysis : GSMaP Reanalysis: Global Satellite Mapping of Precipitation
October 19, 2017
Earth Engine Python Client Library
0.1.203
Fixed
Fixed the Python API's image.rename() method to properly handle a single string.
October 11, 2017
Earth Engine Code Editor
Fixed
Added an advanced table upload option to control the precision of geometry transformations performed during upload.
Added an advanced table upload option to enable spatially subdividing complex geometries.
Fixed a bug that prevented the legacy Script Manager from loading.
October 10, 2017
Earth Engine Data Catalog
Feature
Added HYCOM/GLBu0_08/sea_surface_elevation (no longer available)
Added UMD/hansen/global_forest_change_2016_v1_4 (no longer available)
October 03, 2017
Earth Engine Data Catalog
Feature
Added HYCOM/GLBu0_08/sea_temp_salinity (no longer available)
Added HYCOM/GLBu0_08/sea_water_velocity (no longer available)
Added LANDSAT/LE07/C01/T1_SR (no longer available)
Added LANDSAT/LT04/C01/T1_SR (no longer available)
Added LANDSAT/LT05/C01/T1_SR (no longer available)
September 19, 2017
Earth Engine Data Catalog
Feature
Added LANDSAT_COPY/LC8 (no longer available)
Added LANDSAT_COPY/LC8_L1T (no longer available)
Added LANDSAT_COPY/LE7 (no longer available)
Added LANDSAT_COPY/LE7_L1T (no longer available)
Added LANDSAT_COPY/LM1 (no longer available)
Added LANDSAT_COPY/LM1_L1T (no longer available)
Added LANDSAT_COPY/LM2 (no longer available)
Added LANDSAT_COPY/LM2_L1T (no longer available)
Added LANDSAT_COPY/LM3 (no longer available)
Added LANDSAT_COPY/LM3_L1T (no longer available)
Added LANDSAT_COPY/LM4 (no longer available)
Added LANDSAT_COPY/LM4_L1T (no longer available)
Added LANDSAT_COPY/LM5 (no longer available)
Added LANDSAT_COPY/LM5_L1T (no longer available)
Added LANDSAT_COPY/LT4 (no longer available)
Added LANDSAT_COPY/LT4_L1T (no longer available)
Added LANDSAT_COPY/LT5 (no longer available)
Added LANDSAT_COPY/LT5_L1T (no longer available)
September 18, 2017
Earth Engine Server
Feature
Added Image.blend() to do simple alpha blending between two images.
August 28, 2017
Earth Engine Server
Change
Added new algorithm ee.Image.random() to generate random pixels between 0 and 1.
Added new algorithm ee.Image.stratifiedSample() to evenly sample each distinct
class value in the image.
Added new algorithm ee.FeatureCollection.style() , to provide more style options,
and better per-feature overriding,
Added tileScale parameter to Image.sample and Image.sampleRegions .
Changed Export.image to set the description on each band of the output
GeoTIFF to the name of the source band of the ee.Image object. Use gdalinfo to
view the descriptions.
Changed weighted reducers such as Sum or Mean to use fractional masking
for aggregations ( reduceRegion and reduceRegions ). The weight is now the
minimum of the raster mask and the fraction of the pixel covered by the reducer
geometry. The behavior of unweighted reducers has not changed.
Changed Image.clipToCollection to use partial masks for polygon edges,
matching what Image.clip has been doing.
Changed Image.clip to retain points and lines, matching what
Image.clipToCollection has been doing. Points are masked as the full pixel,
while lines have anti-aliased partial masks (like polygon edges).
August 08, 2017
Earth Engine Data Catalog
Feature
Added LANDSAT/LT05/C01/T1 (no longer available)
Added LANDSAT/LT05/C01/T1_TOA (no longer available)
Added LANDSAT/LT05/C01/T2 (no longer available)
Added LANDSAT/LT05/C01/T2_TOA (no longer available)
Added USDOS/LSIB_SIMPLE/2017 : LSIB 2017: Large Scale International Boundary Polygons, Simplified
August 01, 2017
Earth Engine Data Catalog
Feature
Added NASA/OCEANDATA/SeaWiFS/L3SMI : Ocean Color SMI: Standard Mapped Image SeaWiFS Data
Added WCMC/WDPA/current/points : WDPA: World Database on Protected Areas (points)
Added WCMC/WDPA/current/polygons : WDPA: World Database on Protected Areas (polygons)
July 25, 2017
Earth Engine Data Catalog
Feature
Added NOAA/CDR/PATMOSX/V53 : NOAA CDR PATMOSX: Cloud Properties, Reflectance, and Brightness Temperatures, Version 5.3
July 18, 2017
Earth Engine Data Catalog
Feature
Added MODIS/006/MOD08_M3 (no longer available)
Added MODIS/006/MYD08_M3 (no longer available)
July 06, 2017
Earth Engine Server
Feature
Added ee.Classifier.gmoLinearRegression() , a regularizing linear regression classifier.
June 29, 2017
Earth Engine Server
Fixed
Fixed a bug that caused most errors in batch tasks to be erroneously reported
as "Internal Server Error".
Fixed a bug that could cause server issues when operating on tables with many
(2M+) small rows (point geometries and only a modest number of columns).
June 20, 2017
Earth Engine Data Catalog
Feature
Added MODIS/006/MOD09A1 (no longer available)
Added MODIS/006/MOD09Q1 (no longer available)
Added MODIS/006/MOD11A2 (no longer available)
Added MODIS/006/MYD09A1 (no longer available)
Added MODIS/006/MYD09Q1 (no longer available)
Added MODIS/006/MYD11A2 (no longer available)
Added NASA/OCEANDATA/MODIS-Terra/L3SMI : Ocean Color SMI: Standard Mapped Image MODIS Terra Data
June 13, 2017
Earth Engine Data Catalog
Feature
Added NASA/GPM_L3/IMERG_V04 (no longer available)
Added NASA/OCEANDATA (no longer available)
Added NASA/OCEANDATA/MODIS-Aqua/L3SMI : Ocean Color SMI: Standard Mapped Image MODIS Aqua Data
Added UMD/hansen/global_forest_change_2015_v1_3 (no longer available)
June 12, 2017
Earth Engine Code Editor
Fixed
Added support for uploading shapefiles.
ui.Map.addLayer() now returns the ui.Map.Layer instance.
Fix issue filtering Examples tab.
Earth Engine JavaScript Client Library
0.1.116
Feature
Added support for uploading shapefiles.
Earth Engine Python Client Library
0.1.116
Feature
Added support for uploading shapefiles.
Earth Engine Server
Change
Updated ee.Algorithms.Landsat.simpleComposite() to work with Landsat Collection 1 image data.
Improved stability of table asset query system.
May 30, 2017
Earth Engine Data Catalog
Feature
Added LANDSAT/LC08/C01/T2 (no longer available)
Added LANDSAT/LC08/C01/T2_TOA (no longer available)
Added LANDSAT/LE07/C01/T2 (no longer available)
Added LANDSAT/LE07/C01/T2_TOA (no longer available)
May 26, 2017
Earth Engine Server
Feature
Added a nearest-neighbor interpolation mode to the ee.Image.displace()
algorithm. This is useful, for example, when displacing images representing
ordinal data like classifications, to avoid interpolation.
Added ee.Reducer.autoHistogram() with ee.Array output suitable for use
per-pixel.
Added new Image and Array algorithms matrixCholeskyDecomposition and
matrixSingularValueDecomposition .
May 23, 2017
Earth Engine Data Catalog
Feature
Added MODIS/006/MCD43A1 (no longer available)
Added MODIS/006/MCD43A2 (no longer available)
Added MODIS/006/MCD43A3 (no longer available)
Added MODIS/006/MOD14A1 (no longer available)
Added MODIS/006/MYD14A1 (no longer available)
May 17, 2017
Earth Engine Server
Fixed
Fixed a bug that caused timeouts in queries involving ee.Image.displace() .
May 09, 2017
Earth Engine Data Catalog
Feature
Added LANDSAT/LC08/C01/T1 (no longer available)
Added LANDSAT/LC08/C01/T1_RT (no longer available)
Added LANDSAT/LC08/C01/T1_RT_TOA (no longer available)
Added LANDSAT/LC08/C01/T1_TOA (no longer available)
Added LANDSAT/LE07/C01/T1_RT (no longer available)
Added LANDSAT/LE07/C01/T1_RT_TOA (no longer available)
Added MODIS/006/MOD09GA (no longer available)
Added MODIS/006/MOD09GQ (no longer available)
Added MODIS/006/MOD11A1 (no longer available)
Added MODIS/006/MYD09GA (no longer available)
Added MODIS/006/MYD09GQ (no longer available)
Added MODIS/006/MYD11A1 (no longer available)
Added MODIS/MOD09GA_006_BAI : MODIS Terra Daily BAI
Added MODIS/MOD09GA_006_EVI : MODIS Terra Daily EVI
Added MODIS/MOD09GA_006_NDSI : MODIS Terra Daily NDSI
Added MODIS/MOD09GA_006_NDVI : MODIS Terra Daily NDVI
Added MODIS/MOD09GA_006_NDWI : MODIS Terra Daily NDWI
Added MODIS/MYD09GA_006_BAI : MODIS Aqua Daily BAI
Added MODIS/MYD09GA_006_EVI : MODIS Aqua Daily EVI
Added MODIS/MYD09GA_006_NDSI : MODIS Aqua Daily NDSI
Added MODIS/MYD09GA_006_NDVI : MODIS Aqua Daily NDVI
Added MODIS/MYD09GA_006_NDWI : MODIS Aqua Daily NDWI
May 02, 2017
Earth Engine Data Catalog
Feature
Added EPA/Ecoregions/2013/L3 : US EPA Ecoregions (Level III)
Added EPA/Ecoregions/2013/L4 : US EPA Ecoregions (Level IV)
Added GLIMS/2016 (no longer available)
Added NOAA/CDR/GRIDSAT-B1/V2 : NOAA CDR GRIDSAT-B1: Geostationary IR Channel Brightness Temperature
Added TIGER/2010/Blocks : TIGER: US Census Blocks
Added TIGER/2010/Tracts_DP1 : TIGER: US Census Tracts Demographic - Profile 1
Added TIGER/2016/Roads : TIGER: US Census Roads
Added USDOS/LSIB/2013 (no longer available)
Added USGS/WBD/2017/HUC02 : HUC02: USGS Watershed Boundary Dataset of Regions
Added USGS/WBD/2017/HUC04 : HUC04: USGS Watershed Boundary Dataset of Subregions
Added USGS/WBD/2017/HUC06 : HUC06: USGS Watershed Boundary Dataset of Basins
Added USGS/WBD/2017/HUC08 : HUC08: USGS Watershed Boundary Dataset of Subbasins
Added USGS/WBD/2017/HUC10 : HUC10: USGS Watershed Boundary Dataset of Watersheds
Added USGS/WBD/2017/HUC12 : HUC12: USGS Watershed Boundary Dataset of Subwatersheds
April 25, 2017
Earth Engine Data Catalog
Feature
Added MODIS/055/MOD17A3 (no longer available)
Added MODIS/NTSG/MOD16A2/105 : MOD16A2: MODIS Global Terrestrial Evapotranspiration 8-Day Global 1km
April 18, 2017
Earth Engine Data Catalog
Feature
Added MODIS/006/MODOCGA : MODOCGA.006 Terra Ocean Reflectance Daily Global 1km
Added MODIS/006/MYDOCGA : MYDOCGA.006 Aqua Ocean Reflectance Daily Global 1km
Added NOAA/CDR/SST_PATHFINDER/V53 : NOAA AVHRR Pathfinder Version 5.3 Collated Global 4km Sea Surface Temperature
Added NOAA/VIIRS/001/VNP09GA (no longer available)
April 11, 2017
Earth Engine Data Catalog
Feature
Added NOAA/CDR/ATMOS_NEAR_SURFACE/V2 : NOAA CDR: Ocean Near-Surface Atmospheric Properties, Version 2
Added NOAA/CDR/HEAT_FLUXES/V2 : NOAA CDR: Ocean Heat Fluxes, Version 2
Added NOAA/CDR/SST_WHOI/V2 : NOAA CDR WHOI: Sea Surface Temperature, Version 2
April 04, 2017
Earth Engine Data Catalog
Feature
Added NASA/GLDAS/V021/NOAH/G025/T3H : GLDAS-2.1: Global Land Data Assimilation System
Added NASA/NEX-GDDP : NEX-GDDP: NASA Earth Exchange Global Daily Downscaled Climate Projections
March 28, 2017
Earth Engine Data Catalog
Feature
Added NOAA/CDR/AVHRR/LAI_FAPAR/V4 (no longer available)
Added NOAA/CDR/AVHRR/NDVI/V4 (no longer available)
Added NOAA/CDR/AVHRR/SR/V4 (no longer available)
March 21, 2017
Earth Engine Data Catalog
Feature
Added NOAA/CDR/OISST/V2 (no longer available)
Added NOAA/VIIRS/VNP09GA/001 (no longer available)
March 16, 2017
Earth Engine Server
Change
Enable setting properties on image collection and folder assets.
March 14, 2017
Earth Engine Data Catalog
Feature
Added MODIS/006/MOD13Q1 (no longer available)
Added MODIS/006/MYD13Q1 (no longer available)
March 07, 2017
Earth Engine Data Catalog
Feature
Added NOAA/CDR/AVHRR/AOT/V3 (no longer available)
March 02, 2017
Earth Engine JavaScript Client Library
0.1.106
Feature
Added a skipEmptyTiles option to Export.image.toDrive() and Export.image.toCloudStorage() to skip generating empty (i.e. fully-masked) image tiles.
Feature
Added a Global Surface Water dataset tutorial to the examples.
Earth Engine Python Client Library
0.1.106
Feature
Added a skipEmptyTiles option to Export.image.toDrive() and Export.image.toCloudStorage() to skip generating empty (i.e. fully-masked) image tiles.
Change
Updated authentication to work with oauth2client v2+ and a JSON-formatted credentials file.
February 28, 2017
Earth Engine Data Catalog
Feature
Added LANDSAT/LE07/C01/T1 (no longer available)
Added LANDSAT/LE07/C01/T1_TOA (no longer available)
Added MODIS/006/MOD10A1 (no longer available)
Added MODIS/006/MYD10A1 (no longer available)
Added NOAA/CDR/OISST (no longer available)
February 14, 2017
Earth Engine Data Catalog
Feature
Added CSIRO/SLGA : SLGA: Soil and Landscape Grid of Australia (Soil Attributes)
February 07, 2017
Earth Engine Data Catalog
Feature
Added JRC/GSW1_0/GlobalSurfaceWater (no longer available)
Added JRC/GSW1_0/Metadata (no longer available)
Added JRC/GSW1_0/MonthlyHistory (no longer available)
Added JRC/GSW1_0/MonthlyRecurrence (no longer available)
Added JRC/GSW1_0/YearlyHistory (no longer available)
February 03, 2017
Earth Engine Python Client Library
0.1.103
Change
Updated OAuth scope to FULL_CONTROL for Cloud Storage, to enable actions that require OWNER permissions.
January 17, 2017
Earth Engine Data Catalog
Feature
Added NOAA/CDR/AVHRR/AOT (no longer available)
January 11, 2017
Earth Engine Server
Change
Landsat.calibratedRadiance() now uses Landsat-specific metadata instead of
google:calibration_bias and _gain per-band metadata. Output values may
have changed slightly due to float vs double precision differences.
January 10, 2017
Earth Engine Data Catalog
Feature
Added NOAA/VIIRS/DNB/MONTHLY_V1/VCMSLCFG : VIIRS Stray Light Corrected Nighttime Day/Night Band Composites Version 1
Added VITO/PROBAV/C1/S1_TOC_100M : PROBA-V C1 Top Of Canopy Daily Synthesis 100m
Added VITO/PROBAV/C1/S1_TOC_333M : PROBA-V C1 Top Of Canopy Daily Synthesis 333m
January 03, 2017
Earth Engine Data Catalog
Feature
Added NOAA/VIIRS/DNB/MONTHLY_V1/VCMCFG : VIIRS Nighttime Day/Night Band Composites Version 1
December 20, 2016
Earth Engine Data Catalog
Feature
Added WORLDCLIM/V1/BIO : WorldClim BIO Variables V1
Added WORLDCLIM/V1/MONTHLY : WorldClim Climatology V1
December 19, 2016
Earth Engine Server
Fixed
Added ee.Image.arrayCat() to easily concatenate two array images with the same number of dimensions.
Fixed issue using the pure GeoJSON ee.Geometry(string) constructor when given a
GeometryCollection. The elements may now have their own crs/geodesic/evenOdd
fields, so long as they all have the same values.
December 13, 2016
Earth Engine Data Catalog
Feature
Added CIESIN/GPWv4/ancillary-data-grids (no longer available)
Added CIESIN/GPWv4/population-count (no longer available)
Added CIESIN/GPWv4/population-density (no longer available)
Added CIESIN/GPWv4/unwpp-adjusted-population-count (no longer available)
Added CIESIN/GPWv4/unwpp-adjusted-population-density (no longer available)
Added NASA/ORNL/DAYMET_V3 (no longer available)
December 08, 2016
Earth Engine Code Editor
Fixed
Fixed bug with race conditions around Map.centerObject() calls.
December 06, 2016
Earth Engine Data Catalog
Feature
Added NOAA/DMSP-OLS/CALIBRATED_LIGHTS_V4 : DMSP OLS: Global Radiance-Calibrated Nighttime Lights Version 4, Defense Meteorological Program Operational Linescan System
November 29, 2016
Earth Engine JavaScript Client Library
0.1.101
Fixed
Fixed a typo in the "Airstrip Thumbnails" example script.
November 22, 2016
Earth Engine Server
Feature
Added support for uploading images with mask band of types other than byte,
interpreting integer types in the range [0, maxint] and float types in the
range [0.0, 1.0] .
November 18, 2016
Earth Engine Server
Fixed
Fixed ISE when Array.cat is given null input arrays.
November 15, 2016
Earth Engine Data Catalog
Feature
Added ASTER/AST_L1T_003 : ASTER L1T Radiance
November 03, 2016
Earth Engine Server
Fixed
Fixed a bug that sometimes caused ee.Image.reduceResolution() to overestimate the number of input pixels per output pixel.
October 27, 2016
Earth Engine JavaScript Client Library
0.1.99
Feature
Added optional shardSize and fileDimensions arguments to Export.image.toDrive() and Export.image.toCloudStorage() , to specify the computation shard size and the output file dimensions for multi-file image exports.
Added an optional skipEmptyTiles argument to Export.map.toCloudStorage() to skip writing empty (fully-transparent) tiles.
Earth Engine Python Client Library
0.1.99
Feature
Added optional shardSize and fileDimensions arguments to Export.image.toDrive() and Export.image.toCloudStorage() , to specify the computation shard size and the output file dimensions for multi-file image exports.
Added an optional skipEmptyTiles argument to Export.map.toCloudStorage() to skip writing empty (fully-transparent) tiles.
October 03, 2016
Earth Engine Server
Change
Changed ee.ErrorMargin() to require the value parameter for finite error margins.
September 29, 2016
Earth Engine JavaScript Client Library
0.1.97
Feature
Added ee.layers.ImageOverlay and ee.layers.BinaryOverlay to replace the now-deprecated ee.MapLayerOverlay and ee.FloatTileOverlay .
Earth Engine Server
Fixed
Added ee.Reducer.fixedHistogram() , a reducer which computes a histogram using fixed bins and returns the histogram as an ee.Array with two columns.
Fixed miscellaneous Internal Server Error messages to surface more useful information.
September 22, 2016
Earth Engine Code Editor
Feature
Added the ability to add a description and title to uploaded assets.
Earth Engine JavaScript Client Library
0.1.96
Feature
Added ee.layers.ImageOverlay and deprecated ee.MapLayerOverlay .
Earth Engine Server
Feature
Fixed several internal errors thrown by ee.List algorithms.
Fixed incorrect number comparisons in ee.List algorithms.
Fixed ee.Image.select() to throw an error if a new band name includes any forbidden characters.
Fixed ee.ImageCollection.toArray() errors with no-band image collections.
Added a helpful error message when ee.Collection.draw() is invoked with invalid point/line styles.
September 16, 2016
Earth Engine Server
Fixed
Fixed a bug where large exports failed with a "Number of pixels requested exceeds the maximum allowed" error.
September 08, 2016
Earth Engine Code Editor
Feature
Added maxFrames parameter to Export.video .
September 02, 2016
Earth Engine Code Editor
Change
Deleted deprecated methods addToMap() , centerMap() , and getMapBounds() .
Earth Engine Server
Fixed
Added ee.Dictionary.remove() .
Added ee.List.reduce() , an algorithm to reduce a list.
Added CSS color handling to ee.FeatureCollection.draw() .
Added ee.Clusterer for unsupervised clustering.
Added ee.ConfusionMatrix handling for values greater than 2^31.
Removed ee.Algorithms.TrainClassifier() and ee.Classifier.mahalanobis() classifier algorithms.
Fixed classification error triggered by having a class with no associated values.
August 24, 2016
Earth Engine Server
Feature
Added ee.Image.medialAxis() and ee.Image.fastDistanceTransform() .
Added optional sum-to-one and non-negative constraints to ee.Image.unmix() .
August 23, 2016
Earth Engine Data Catalog
Feature
Added VITO/PROBAV/S1_TOC_100M (no longer available)
Added VITO/PROBAV/S1_TOC_333M (no longer available)
August 03, 2016
Earth Engine Code Editor
Change
Updated documentation for the User Interface API .
Earth Engine Server
Change
Added ee.Image.clipToCollection() to clip an image to a FeatureCollection ; ee.Image.clip() should now be used only to clip an image to a Feature or a Geometry .
Modified aggregations so they may now exclude empty pixels outside the footprint of the source image.
August 02, 2016
Earth Engine Data Catalog
Feature
Added NASA/GPM_L3/IMERG (no longer available)
July 28, 2016
Earth Engine Code Editor
Change
Updated Export.map.toCloudStorage() to make the 'path' parameter default to the export task's description.
Earth Engine JavaScript Client Library
0.1.90
Fixed
Fixed an issue which caused the minified version Earth Engine JavaScript API to be excluded from the open-source release.
Earth Engine Python Client Library
0.1.90
Fixed
Fixed an issue which caused the minified version Earth Engine JavaScript API to be excluded from the open-source release.
July 21, 2016
Earth Engine Code Editor
Feature
Added the User Interface API .
July 13, 2016
Earth Engine Server
Feature
Fixed bad error messages when tessellation fails due to zero error-margin.
Fixed ee.FeatureCollection.randomPoints() to work with unusually small geometries.
Updated ee.Reducer.frequencyHistogram() and ee.Reducer.countDistinct() to ignore masked pixels.
Added ee.Reducer.firstNonNull() , a reducer that ignores null values and masked pixels.
July 12, 2016
Earth Engine Data Catalog
Feature
Added EEA/CORINE/CLC (no longer available)
July 01, 2016
Earth Engine Code Editor
Change
Updated the visualization dialog to allow new changes to be applied when the palette is updated.
Earth Engine Server
Fixed
Updated error messages in many functions, making the output clearer and more actionable.
Changed ee.Number.format() to allow for type coercion for integer and floating point types.
Changed the toDrive() functions under Export to create the specified Drive folder if it doesn't exist, rather than throwing an error.
Changed ee.Image.where() to always retain the footprint and metadata of the input image.
Fixed Geometry.bounds() and Feature.bounds() to always return results in the requested projection.
Fixed a bug where ee.Reducer.group() truncated inputs to integers when used with ee.Collection.reduceColumns() .
June 28, 2016
Earth Engine Data Catalog
Feature
Added MODIS/006/MCD15A3H (no longer available)
Added MODIS/006/MOD14A2 (no longer available)
Added MODIS/006/MYD14A2 (no longer available)
Added MODIS/051/MOD44B (no longer available)
June 14, 2016
Earth Engine Data Catalog
Feature
Added NASA/GLDAS/V20/NOAH/G025/T3H : Reprocessed GLDAS-2.0: Global Land Data Assimilation System
June 13, 2016
Earth Engine Code Editor
Change
Added a script performance profiling tool, enabled via the settings menu.
Update the series order in Chart.image.histogram() to be consistent with the band order in the image.
Earth Engine Server
Change
Added ee.Image.register() , ee.Image.displacement() , and ee.Image.displace() for registering images to one another and computing and applying displacements.
Add several correlation reducers: ee.Reducer.kendallsCorrelation() , ee.Reducer.pearsonsCorrelation() , ee.Reducer.spearmansCorrelation() , and ee.Reducer.sensSlope() .
Updated ee.String.match() to return a list of all matching groups when used without the global flag.
June 07, 2016
Earth Engine Data Catalog
Feature
Added LANDSAT/LC8_L1T_TOA_FMASK (no longer available)
Added LANDSAT/LE7_L1T_TOA_FMASK (no longer available)
Added LANDSAT/LT4_L1T_TOA_FMASK (no longer available)
Added LANDSAT/LT5_L1T_TOA_FMASK (no longer available)
Added MODIS/006/MOD17A2H (no longer available)
Added MODIS/006/MOD17A3H (no longer available)
Added MODIS/006/MYD17A2H (no longer available)
Added MODIS/006/MYD17A3H (no longer available)
Added MODIS/MCD12Q2 (no longer available)
June 02, 2016
Earth Engine Code Editor
Feature
Added ability to view quota usage for a root asset folder.
Added support for exporting an image from your script environment to an Earth Engine asset with Export.image.toAsset() .
Earth Engine JavaScript Client Library
0.1.83
Feature
Added computedObject.evaluate() .
Earth Engine Python Client Library
0.1.83
Feature
Added computedObject.evaluate() .
Earth Engine Server
Feature
Added ee.Feature.setGeometry() for setting or overriding the geometry of an existing Feature.
May 26, 2016
Earth Engine Server
Feature
Added ee.FeatureCollection.kriging() , a function which performs Kriging interpolation given a set of semivariogram parameters.
Added ee.Array.dotProduct() and ee.Image.arrayDotProduct() algorithms to compute the dot product between two 1-D arrays of equal length.
May 18, 2016
Earth Engine Code Editor
Change
Expanded Export functionality to support maps as an export type and Google Cloud Storage as a destination.
Earth Engine JavaScript Client Library
0.1.82
Change
Expanded Export functionality to support maps as an export type and Google Cloud Storage as a destination.
Earth Engine Python Client Library
0.1.82
Change
Expanded Export functionality to support maps as an export type and Google Cloud Storage as a destination.
April 26, 2016
Earth Engine Data Catalog
Feature
Added GLCF/GLS_TCC (no longer available)
Added GLCF/GLS_WATER : GLCF: Landsat Global Inland Water
April 12, 2016
Earth Engine Data Catalog
Feature
Added SKYSAT/GEN-A/PUBLIC/ORTHO/MULTISPECTRAL : Planet SkySat Public Ortho Imagery, Multispectral
Added SKYSAT/GEN-A/PUBLIC/ORTHO/RGB : Planet SkySat Public Ortho Imagery, RGB
April 08, 2016
Earth Engine Server
Feature
Added Image.reduceResolution , an algorithm to generate pixels in a (usually lower-resolution) output projection.
March 31, 2016
Earth Engine Server
Change
Added FeatureCollection.inverseDistance() , to do inverse-distance weighted interpolation. See the interpolation documentation for further details.
Changed the correlation scores in the ee.Algorithms.CrossCorrelation algorithm to allow negative correlation coefficients. Now, the correlationCoeff output band has a range of [-1, 1], rather than [0, 1].
Changed the ee.Algorithms.CrossCorrelation algorithm to accept a value of 0 for the maxGap parameter, to allow for a direct computation of correlation scores between two images.
March 24, 2016
Earth Engine Server
Fixed
Added new Image.cumulativeCost algorithm.
Added an ee.Blob class for accessing data blobs in Google Cloud Storage.
Added an ee.Classifier.decisionTree() algorithm for loading pre-existing decision trees as Classifier objects
Fixed singular value exceptions when computing the parameter stability test in Image.formaTrend() , to match behavior of original FORMA.
March 22, 2016
Earth Engine Data Catalog
Feature
Added COPERNICUS/S2 (no longer available)
March 17, 2016
Earth Engine Server
Feature
Added Image.arrayCat() to concatenate the pixels of two array images along a given array axis.
March 15, 2016
Earth Engine Data Catalog
Feature
Added NASA/GIMMS/3GV0 : GIMMS NDVI From AVHRR Sensors (3rd Generation)
March 10, 2016
Earth Engine Code Editor
Feature
Added Image.arrayCat() to concatenate the pixels of two array images along a given array axis.
Earth Engine Server
Feature
Added ee.Number.format() .
Added ee.String.toLowerCase() , ee.String.toUpperCase() , ee.String.trim() , and ee.String.compareTo() .
March 08, 2016
Earth Engine Data Catalog
Feature
Added NASA/GLDAS/V001/NOAH/G025/T3H (no longer available)
February 26, 2016
Earth Engine Code Editor
Feature
Added MIN , MAX , and MODE as reduction policy options for generating tile pyramids for ingested assets.
Added instructions for configuring a googlesource.com Git password to the script repository share dialog.
February 18, 2016
Earth Engine Code Editor
Feature
Geometry drawing keyboard shortcuts now require holding the shift key.
Added a refresh button to the asset list.
Earth Engine JavaScript Client Library
0.1.73
Feature
Added throttling of asynchronous network requests.
Earth Engine Server
Feature
Added new correlation reducers: Kendall, Spearman, Pearsons and Sen's slope.
February 08, 2016
Earth Engine Server
Change
Add a bitCount operator.
February 02, 2016
Earth Engine Code Editor
Feature
Added ability to edit asset metadata .
Earth Engine Data Catalog
Feature
Added COPERNICUS/S1_GRD : Sentinel-1 SAR GRD: C-band Synthetic Aperture Radar Ground Range Detected, log scaling
Added NASA/GLDAS/V020/NOAH/G025/T3H (no longer available)
Earth Engine Server
Feature
Added ee.Image.bitsToArrayImage() .
January 21, 2016
Earth Engine JavaScript Client Library
0.1.72
Change
Disable exporting to GME.
Earth Engine Python Client Library
0.1.72
Change
Disable exporting to GME.
Earth Engine Server
Change
Exports with a 'region' argument now accept geometry with any supported projection or geodesic state, instead of defaulting to planar WGS84.
Multi-file asset uploads that use "last band" masking mode should now work.
ee.Dictionary() can now be called with no arguments or with a list of alternating keys/values.
January 19, 2016
Earth Engine Data Catalog
Feature
Added EO1/HYPERION : EO-1 Hyperion Hyperspectral Imager
January 11, 2016
Earth Engine Code Editor
Change
ee.Dictionary() can now be called with no arguments or with a list of alternating keys/values.
Earth Engine Server
Change
Expanded Collection.remap() to allow mapping from strings to integers.
January 06, 2016
Earth Engine Server
Change
Added ee.Image.pixelCoordinates() , a generalization of ee.Image.pixelLonLat() .
Added ee.Dictionary.fromLists() .
Added ee.Kernel.inverse() .
Added ability to specify random seed in ee.Classifier.randomForest() .
Added optimization parameter in ee.Image.reduceNeighborhood() , which enables faster computation at the cost of using more memory.
Improved performance of ee.Image.distance() and added skipMasked parameter.
December 15, 2015
Earth Engine Data Catalog
Feature
Added LANDSAT/LC8_SR (no longer available)
Added LANDSAT/LE7_SR (no longer available)
Added LANDSAT/LT4_SR (no longer available)
Added LANDSAT/LT5_SR (no longer available)
December 10, 2015
Earth Engine Server
Fixed
Reduced the memory requirements of the ee.Terrain.fillMinima algorithm.
Added ee.Kernel.rectangle() , for constructing constant-valued rectangular kernels.
Fixed bug in ee.Classifier.continuousNaiveBayes() and added explain() method.
December 08, 2015
Earth Engine Data Catalog
Feature
Added AU/GA/AUSTRALIA_5M_DEM : Australian 5M DEM
December 02, 2015
Earth Engine Code Editor
Feature
Added support for tiled asset uploads with multiple files.
Earth Engine Server
Fixed
Added ee.Classifier.minimumDistance() .
Deprecated ee.Classifier.mahalanobis() .
Fixed Image.remap() to properly propagate the source image mask.
November 25, 2015
Earth Engine Server
Feature
Added ee.Geometry.cutLines() and ee.Feature.cutLines() , to cut the linear parts along a series of parameter distances in the result projection.
Added ee.Image.bitsToArray() and ee.Number.bitsToArray() .
November 24, 2015
Earth Engine Data Catalog
Feature
Added NOAA/PERSIANN-CDR : PERSIANN-CDR: Precipitation Estimation From Remotely Sensed Information Using Artificial Neural Networks-Climate Data Record
November 19, 2015
Earth Engine Code Editor
Feature
Added support for creating and sharing ImageCollection assets, and for adding and removing Image assets to and from those collections.
Earth Engine Server
Fixed
Fixed a bug in ee.Reducer.stdDev() that caused it to return NaN instead of zero in some cases.
Fixed a bug in ee.Algorithms.If() that caused it to treat NaN as true in the condition.
November 13, 2015
Earth Engine Code Editor
Feature
Added "Use last band as alpha" as a masking mode option for asset uploads.
Earth Engine Server
Feature
Fixed several Internal Server Errors when transforming geometries or image boundaries to very different projections.
Fix Image.reduceRegion() support for images with no bands.
Added support for masked pixels in CrossCorrelation algorithm.
November 05, 2015
Earth Engine Server
Fixed
Added bitwiseOr and bitwiseAnd reducers.
Fixed SampleImage dropping points for single band images. Additionally, this bug could have caused the generated properties to be incorrectly named "first".
October 29, 2015
Earth Engine Server
Fixed
Added ee.Classifier.spectralRegion() , to test if the inputs lie within a specified 2D polygon.
Improved ingestion of non-standard projections.
Fixed incorrect weights in the implementation of the Roberts cross kernel.
Fixed several internal errors that could occur when working with geometries that touch the poles.
Fixed some spurious out-of-memory errors from ImageCollection.combine() , ImageCollection.merge() , FeatureCollection.merge() , and ee.Terrain algorithms.
October 22, 2015
Earth Engine Server
Fixed
Improved the performance of negative geometry buffering.
Improved error reporting when invalid projections are supplied to image export.
Added Dictionary.select() , Dictionary.rename() and Dictionary.map() .
Fixed accidental creation of inside-out polygons at the poles in ee.Geometry.Polygon() , ee.Geometry.Rectangle() , and ee.Geometry.MultiPolygon() .
October 20, 2015
Earth Engine Data Catalog
Feature
Added UMD/hansen/global_forest_change_2015 (no longer available)
October 16, 2015
Earth Engine Server
Feature
Added an ee.Image.date() algorithm that returns an Image's acquisition time as an ee.Date object.
October 08, 2015
Earth Engine Server
Change
Updated Mahalanobis classifier to handle multiple classes.
October 06, 2015
Earth Engine Data Catalog
Feature
Added IDAHO_EPSCOR/MACAv2_METDATA_MONTHLY : MACAv2-METDATA Monthly Summaries: University of Idaho, Multivariate Adaptive Constructed Analogs Applied to Global Climate Models
October 02, 2015
Earth Engine Code Editor
Feature
Added support for asset renaming.
Resolved issue that prevented searching for "where".
Earth Engine Server
Fixed
Fixed geometry repair issue in the presence of extremely small polygons.
September 24, 2015
Earth Engine Code Editor
Fixed
Fixed a bug causing "Git protocol error" seen when saving scripts.
Earth Engine Server
Feature
Added Collection.size() algorithm.
Added Classifier.explain() to describe results from training a classifier. Currently only returns details for Cart.
September 13, 2015
Earth Engine Code Editor
Change
Fixed bug in which 'Clear Script' was not closing the current script.
September 10, 2015
Earth Engine Server
Fixed
Changed the name of single-file image exports from "foo-0000000000-0000000000.tif" to "foo.tif" .
Fixed a bug in ee.Image.remap() in which masked data with a remapped value could be unmasked.
September 03, 2015
Earth Engine Server
Fixed
Added GCS export support for videos and features.
Fixed Collection.classify() PROBABILITY output to match image results.
August 27, 2015
Earth Engine Code Editor
Feature
Added support for uploading files up to 10GB.
Fixed bug which broke chart popouts in Safari.
Earth Engine Server
Change
Added support for human-readable color names in palettes. Now any CSS 3.0 color name can be used in a palette (e.g., ['red', 'aquamarine', 'maroon'] ).
Fixed internal server errors when filtering images by point geometries on the WGS84 antimeridian.
Converted an internal server error into a helpful message when using matrixSolve with unsolvable matrices.
August 19, 2015
Earth Engine Server
Change
Add ContinuousNaiveBayes classifier.
Add ee.ConfusionMatrix.kappa()
Primary geometry of a feature is no longer considered a named property of the feature.
It cannot be retrieved with ee.Feature.get() ; use ee.Feature.geometry() instead.
It cannot be changed with ee.Feature.set() .
It's not included in the result of ee.Feature.propertyNames() and ee.Feature.toDictionary() .
To refer to the geometry in contexts like ee.Filter.intersects() , ee.Filter.equals() , and ee.FeatureCollection.getDownloadURL() , use a special value ".geo".
August 12, 2015
Earth Engine Server
Feature
Added numeric functions erf() , erfc() , erfInv() , erfcInv() , gamma() , digamma() , trigamma() and cbrt() (each is defined on ee.Image , ee.Number , and ee.Array ).
August 11, 2015
Earth Engine Data Catalog
Feature
Added AHN/AHN2_05M_INT : AHN Netherlands 0.5m DEM, Interpolated
Added AHN/AHN2_05M_NON : AHN Netherlands 0.5m DEM, Non-Interpolated
Added AHN/AHN2_05M_RUW : AHN Netherlands 0.5m DEM, Raw Samples
Added FORMA/FORMA_500m (no longer available)
Added NASA/JPL/global_forest_canopy_height_2005 : Global Forest Canopy Height, 2005
Added NOAA/GFS0P25 : GFS: Global Forecast System 384-Hour Predicted Atmosphere Data
August 07, 2015
Earth Engine Code Editor
Feature
Added support for asset upload and management within the UI.
Added Visualization Dialog to the Layer Manager.
Earth Engine JavaScript Client Library
0.1.55
Change
Switched to new read & write scope ('https://www.googleapis.com/auth/earthengine' instead of 'https://www.googleapis.com/auth/earthengine.readonly')
Earth Engine Python Client Library
0.1.55
Change
Switched to new read & write scope ('https://www.googleapis.com/auth/earthengine' instead of 'https://www.googleapis.com/auth/earthengine.readonly')
Earth Engine Server
Fixed
Fixed tile artifacts when using the countEvery reducer with FeatureCollection.reduceToImage .
Fixed TOA calculation for MSS bands on Landsat 4 and 5.
August 04, 2015
Earth Engine Data Catalog
Feature
Added IDAHO_EPSCOR/MACAv2-METDATA (no longer available)
Added IDAHO_EPSCOR/MACAv2_METDATA : MACAv2-METDATA: University of Idaho, Multivariate Adaptive Constructed Analogs Applied to Global Climate Models
Added LANDSAT/LE7_TOA_1YEAR (no longer available)
Added LANDSAT/LE7_TOA_3YEAR (no longer available)
Added LANDSAT/LE7_TOA_5YEAR (no longer available)
August 01, 2015
Earth Engine JavaScript Client Library
0.1.55
Change
Changed ee.Image([]) to create an Image with no bands.
Earth Engine Server
Deprecated
Added a new algorithm for Landsat TOA composites.
Deprecated ee.Image.hsvtorgb() and ee.Image.rgbtohsv() in favor of ee.Image.hsvToRgb() and ee.Image.rgbToHsv() .
July 28, 2015
Earth Engine Data Catalog
Feature
Added COPERNICUS/S1 (no longer available)
Added LANDSAT/LM1 (no longer available)
Added LANDSAT/LM1_L1T (no longer available)
Added LANDSAT/LM2 (no longer available)
Added LANDSAT/LM2_L1T (no longer available)
Added LANDSAT/LM3 (no longer available)
Added LANDSAT/LM3_L1T (no longer available)
Added LANDSAT/LM4 (no longer available)
Added LANDSAT/LM4_L1T (no longer available)
Added LANDSAT/LM5 (no longer available)
Added LANDSAT/LM5_L1T (no longer available)
July 23, 2015
Earth Engine Server
Change
JSON/JSONP format responses from the API now indicate errors in the HTTP status code as well as the response body.
July 14, 2015
Earth Engine Data Catalog
Feature
Added Oxford/MAP/EVI_5km_Monthly (no longer available)
Added Oxford/MAP/IGBP_Fractional_Landcover_5km_Annual : Oxford MAP: Malaria Atlas Project Fractional International Geosphere-Biosphere Programme Landcover
Added Oxford/MAP/LST_Day_5km_Monthly (no longer available)
Added Oxford/MAP/LST_Night_5km_Monthly (no longer available)
Added Oxford/MAP/TCB_5km_Monthly (no longer available)
Added Oxford/MAP/TCW_5km_Monthly (no longer available)
Added WorldPop/POP (no longer available)
June 30, 2015
Earth Engine Data Catalog
Feature
Added NOAA/NWS/RTMA : RTMA: Real-Time Mesoscale Analysis
Added WWF/HydroSHEDS/03CONDEM : WWF HydroSHEDS Hydrologically Conditioned DEM, 3 Arc-Seconds
Added WWF/HydroSHEDS/03DIR : WWF HydroSHEDS Drainage Direction, 3 Arc-Seconds
Added WWF/HydroSHEDS/03VFDEM : WWF HydroSHEDS Void-Filled DEM, 3 Arc-Seconds
Added WWF/HydroSHEDS/30ACC : WWF HydroSHEDS Flow Accumulation, 30 Arc-Seconds
Added WWF/HydroSHEDS/30CONDEM : WWF HydroSHEDS Hydrologically Conditioned DEM, 30 Arc-Seconds
Added WWF/HydroSHEDS/30DIR : WWF HydroSHEDS Drainage Direction, 30 Arc-Seconds
June 26, 2015
Earth Engine Code Editor
Fixed
Fixed a bug in some charts that used ee.Date .
Added support for custom date axis ticks in charts.
Fixed error that occurred when auth token refresh is attempted while the browser is offline.
Updated the link to User Documentation.
Added more HydroSHEDS datasets.
Earth Engine JavaScript Client Library
0.1.55
Feature
Fixed error that occurred when auth token refresh is attempted while the browser is offline.
Added demos directory and move AppEngine demos to it.
Added "Powered by Earth Engine" images.
Earth Engine Python Client Library
0.1.55
Feature
Fixed error that occurred when auth token refresh is attempted while the browser is offline.
Added demos directory and move AppEngine demos to it.
Added "Powered by Earth Engine" images.
Earth Engine Server
Feature
Updated ee.(Feature|Image).geometry() to ee.Element.geometry() .
Added dropNulls as a default to Image.sample.
June 19, 2015
Earth Engine Code Editor
Fixed
Fixed a bug that allowed drawing geometries with no layer selected.
Fixed a bug that could cause empty geometry imports to be loaded as code instead of editable layers.
Earth Engine JavaScript Client Library
0.1.55
Fixed
Added ee.data.setAuthToken() and ee.data.getAuthToken()
Fixed the default API URL in ee.data
Fixed ee.reset() so it no longer clears auth info.
Added tile event callback registration methods to ee.MapLayerOverlay .
Added ee.Image.rename() to make it easy to rename bands.
Updated App Engine app examples.
Fixed ee.Geometry.Rectangle when given a custom projection or geodesic state.
Earth Engine Python Client Library
0.1.55
Fixed
Added ee.data.setAuthToken() and ee.data.getAuthToken()
Fixed the default API URL in ee.data
Fixed ee.reset() so it no longer clears auth info.
Added tile event callback registration methods to ee.MapLayerOverlay .
Added ee.Image.rename() to make it easy to rename bands.
Updated App Engine app examples.
Fixed ee.Geometry.Rectangle when given a custom projection or geodesic state.
Earth Engine Server
Change
Added a set of new classification APIs. See ee.Classifier .
Added a ConfusionMatrix class, returned by ee.Classifier.confusionMatrix and ee.Collection.errorMatrix .
Fixed Classifier PROBABILITY mode for features to return floats.
Added more information to printed Kernel objects.
Removed deprecated algorithms: ClassifyImage , DrawVector , DropDuplicates , UnionFeatureCollection and FilterFeatureCollection .
Exporting complex images will sometimes be faster, and may succeed when it previously failed.
June 04, 2015
Earth Engine Code Editor
Feature
Added ee.data.authenticateViaPopup() and instructions on how to use it to avoid popup-blockers when doing client-side EE library authentication.
Earth Engine JavaScript Client Library
0.1.55
Feature
Allowed ee.MapLayerOverlays to be named.
Added an opt_dropNulls argument to Collection.map() .
Earth Engine Python Client Library
0.1.55
Feature
Allowed ee.MapLayerOverlays to be named.
Added an opt_dropNulls argument to Collection.map() .
Earth Engine Server
Change
Geometry constructors now handle computed coordinates. For example, ee.Geometry.Point(ee.Number(1).add(2), 3) , or ee.Geometry.Point([3,3], image.projection()) .
Image.mask(x) now sets the pixels that it unmasks to zero (or to the value closest to zero within the range of the pixel type of the input image).
Binary image operations (e.g. ee.Image.add ) now always match bands using their order (previously they matched them by name, falling back on matching by order only if not all names could be matched).
May 30, 2015
Earth Engine JavaScript Client Library
0.1.55
Change
Undeprecated ee.data.getInfo() .
Earth Engine Python Client Library
0.1.55
Change
Undeprecated ee.data.getInfo() .
Earth Engine Server
Change
Changed Image.arrayProject() to return null for empty input arrays, instead of throwing an error.
May 26, 2015
Earth Engine Data Catalog
Feature
Added MODIS/051/MCD45A1 (no longer available)
May 22, 2015
Earth Engine Server
Fixed
Added robust 2D polygon repair, alleviating the need to manually fix geometries.
Updated the Landsat 8 brightness temperature constants used for TOA products.
Updated the default ordering of feature collections loaded from Fusion Tables to now be the same as in the Fusion Tables UI.
Fixed Internal System Error in getRegion() .
Fixed spurious memory errors when buffering geometries.
May 15, 2015
Earth Engine Code Editor
Feature
Added a "Clear script" option to the "Reset" button.
Earth Engine JavaScript Client Library
0.1.54
Change
Renamed getThumbURL() 's 'size' param to 'dimensions'.
Earth Engine Python Client Library
0.1.54
Change
Renamed getThumbURL() 's 'size' param to 'dimensions'.
Earth Engine Server
Change
Added morphological Window.mean() , and updated Window.median() to output doubles.
Filters other than Filter.eq now return false when the property is null or missing (instead of causing internal errors).
May 08, 2015
Earth Engine Code Editor
Fixed
Added syntax highlighting to script diffs.
Added a "Clear script" option to the "Reset" button.
Increased the Playground map zoom limit from level 19 to level 24.
Fixed an issue that could cause the script manager to repeatedly ask for merging even if nothing has changed.
Fixed an issue with special character treatment in script names during migration.
Fixed support for Unicode script names.
Fixed scripts sometimes loading old versions after viewing a diff.
Fixed issues with handling of non-alphanumeric characters in script names during migration.
Earth Engine JavaScript Client Library
0.1.53
Change
ee.ImageCollection() now accepts ee.List arguments.
Earth Engine Python Client Library
0.1.53
Change
ee.ImageCollection() now accepts ee.List arguments.
April 30, 2015
Earth Engine Code Editor
Change
Added support for exporting video to Google Drive.
Added a new, Git-based script management tab.
Fixed task starting on Internet Explorer.
Fixed search in the documentation tab.
Added support for hiding of tasks older than one day in a collapsed zippy.
Earth Engine JavaScript Client Library
0.1.52
Feature
Added support for exporting videos.
Earth Engine Python Client Library
0.1.52
Feature
Added support for exporting videos.
Earth Engine Server
Fixed
Fixed internal server error when aggregating unbounded images.
Report an error when Array.project and Image.arrayProject are used to discard a length 0 axis.
Fixed Image.clip with geometry crossing the antimeridian.
April 23, 2015
Earth Engine Code Editor
Feature
Added Map.getCenter() .
Added the ability to override the playground map language and region localization using the map_language and map_region query parameters. E.g. https://ee-api.appspot.com/?map_region=ja&map_language=ja
Added auto-categorization of tasks older than one day.
April 14, 2015
Earth Engine Data Catalog
Feature
Added USGS/GMTED2010 (no longer available)
April 10, 2015
Earth Engine Code Editor
Change
Added the Playground Tour to discover new features.
Added a Report Error button to Internal Server Error messages in the console.
Fixed labels for series named (numerical) 0 to be rendered in chart legends.
Fixed byFeature() , series() , byRegion() , and doySeries() chart helpers to generate reliably ordered series (default order: alphabetical).
Fixed Chart CSV files to include column labels.
Earth Engine JavaScript Client Library
0.1.50
Fixed
Fixed ee.Geometry.Multi*() constructors to accept empty lists.
Earth Engine Python Client Library
0.1.50
Fixed
Fixed ee.Geometry.Multi*() constructors to accept empty lists.
Earth Engine Server
Fixed
Fixed FeatureCollection.remap to drop non-numeric values.
Fixed Provider links in datasets to now display properly.
April 07, 2015
Earth Engine Data Catalog
Feature
Added UCSB-CHG/CHIRPS/PENTAD : CHIRPS Precipitation Pentad: Climate Hazards Center InfraRed Precipitation With Station Data (Version 2.0 Final)
April 03, 2015
Earth Engine JavaScript Client Library
0.1.49
Feature
Added error handling improvements.
Earth Engine Python Client Library
0.1.49
Feature
Added error handling improvements.
Earth Engine Server
Fixed
Fixed ee.Reducer.frequencyHistogram() to work on non-string inputs.
Fixed a bug in classifiers when classifier_parameters=null.
March 26, 2015
Earth Engine Code Editor
Change
Added geometry editing tools.
Added Fusion Tables search.
Added an Imports section the editor.
Earth Engine Python Client Library
0.1.48
Change
Corrected the documentation for the ee.Date constructor.
Earth Engine Server
Change
Added Collection.randomColumn() algorithm that adds a column of deterministic pseudorandom values to a Collection .
Added Image.sample() algorithm that returns a sample of the image pixels as a FeatureCollection .
Extended the Algorithms.Landsat.TOA() function to support the MSS instrument on board Landsat 1-3.
Added new algorithms for working with array shapes: Image.arrayLength() , and Image.arrayDimensions() .
Added Feature.propertyNames() to return the property names of a Feature .
Improved the error message returned when attempting to load images into a projection that doesn't exist everywhere the image does.
Fixed an issue with some Reducer.group() aggregations.
Fixed an issue with array masking and sorting along length 1 axes.
Fixed a bug in Image.arrayFlatten mask handling.
Removed "impurityMeasure" option from Rifle classifier. Previously, "Gini" and "Hellinger" modes were supported, but now only "Gini" is available.
March 24, 2015
Earth Engine Data Catalog
Feature
Added NASA/ASTER_GED/AG100_003 : AG100: ASTER Global Emissivity Dataset 100-meter V003
Added NASA/ASTER_GED/AGNS100_003 (no longer available)
Added NASA/ASTER_GED/AGNW100_002 (no longer available)
March 17, 2015
Earth Engine Code Editor
Fixed
Fixed Map.addLayer() to stop silently dropping incorrectly-specified layer names.
Earth Engine Data Catalog
Feature
Added FIRMS : FIRMS: Fire Information for Resource Management System
Added MODIS/051/MCD12Q1 (no longer available)
Added MODIS/MOD10A1 (no longer available)
Added MODIS/MYD10A1 (no longer available)
Added NCEP_RE/sea_level_pressure : NCEP/NCAR Reanalysis Data, Sea-Level Pressure
Added NCEP_RE/surface_temp : NCEP/NCAR Reanalysis Data, Surface Temperature
Added NCEP_RE/surface_wv : NCEP/NCAR Reanalysis Data, Water Vapor
Added TOMS/MERGED : TOMS and OMI Merged Ozone Data
March 06, 2015
Earth Engine Code Editor
Change
Made Map.setStyle() case-insensitive with regards to map type names.
Earth Engine JavaScript Client Library
0.1.44
Fixed
Fixed bug with region parameter in getThumbURL() .
Earth Engine Python Client Library
0.1.44
Feature
Fixed bug with region parameter in getThumbURL() .
Added a callback option to getThumbURL() .
Earth Engine Server
Change
Fixed Reducer.countDistinct() to be compatible with Image.reduce() .
Modified Image.resample() to control resampling in all cases, not just when supersampling, using the nearest pyramid level.
Fusion Tables polygons will be repaired if invalid. If the repair process fails, we will now show an error instead of using invalid polygons.
February 28, 2015
Earth Engine Code Editor
Change
Fixed mishandling of date value declared as strings in Chart .
Fixed custom map styles persisting after Reset is clicked.
Improved the highlighting of deprecated Landsat assets.
Changed the Search Datasets shortcut from Ctrl+D to Ctrl+Alt+F to avoid conflicts.
Earth Engine JavaScript Client Library
0.1.46
Feature
Added an optional callback parameter to ee.Image.getThumbUrl() .
Earth Engine Server
Feature
Added ee.Reducer.countDistinct() .
February 24, 2015
Earth Engine Data Catalog
Feature
Added MODIS/MOD09Q1 (no longer available)
Added MODIS/MYD09Q1 (no longer available)
February 20, 2015
Earth Engine Code Editor
Change
Added a new feature that underlines code suggestions.
Added an editor settings menu with two toggle-able settings:
Underline code suggestions
Autocomplete pairs like "", (), {}
Added a shortcut to focus on the Dataset search bar, Ctrl+D.
Fixed Map.setCenter() silently failing on invalid inputs.
Fixed the Playground failing after the window is kept open for over 24 hours.
Earth Engine JavaScript Client Library
0.1.45
Fixed
Fixed keyword argument handling in ee.Algorithms.* functions.
Earth Engine Server
Change
Add Image.resample() and bicubic interpolation.
February 17, 2015
Earth Engine Data Catalog
Feature
Added IDAHO_EPSCOR/PDSI (no longer available)
February 10, 2015
Earth Engine Code Editor
Change
Changed Charts to use UTC as the default timezone.
Earth Engine Data Catalog
Feature
Added NOAA/CFSV2/FOR6H (no longer available)
Earth Engine JavaScript Client Library
0.1.44
Feature
Added ee.data.authenticate() which allows authenticating API requests directly in the browser.
Earth Engine Python Client Library
0.1.44
Feature
Added FeatureCollection.select() .
Earth Engine Server
Fixed
Added Reducer.robustLinearRegression() function to perform linear regression via iteratively-reweighted linear least squares.
Changed parameter 'crs' of Image.reproject() to accept a Projection , to more easily reproject an image to the projection of another.
Changed ImageCollection.getRegion() , Image.reduceToVectors() , Image.reduceRegion() , and Image.reduceRegions() to also accept a Projection , to provide more control over the projection to work in.
Fixed errors in LandTrendr algorithm.
Fixed rendering of some geodesic polygons (removed erroneous horizontal lines).
Fixed errors working with some polygons that cross the antimeridian.
February 05, 2015
Earth Engine Server
Change
Improved error message returned when export to Google Drive fails due to insufficient space.
January 27, 2015
Earth Engine Data Catalog
Feature
Added NASA/NEX-DCP30 : NEX-DCP30: NASA Earth Exchange Downscaled Climate Projections
Added NASA/NEX-DCP30_ENSEMBLE_STATS : NEX-DCP30: Ensemble Stats for NASA Earth Exchange Downscaled Climate Projections
Added UMD/hansen/global_forest_change_2014 (no longer available)
January 15, 2015
Earth Engine Code Editor
Change
Added Chart.image.byClass() .
Added support for Chart ticks specified as dates.
Fixed bug in Chart.array.values() triggered by axes with leading zeros.
Added better support for charting series of different data types.
Earth Engine JavaScript Client Library
0.1.42
Change
Image.parseExpression() is no longer available for general use. Image.expression should be used instead, and the documentation for accessing bands in expressions has been moved there.
Added support for computed geometries to Geometry.type() , but now returns a computed string rather than a concrete one.
Fixed the incorrect winding order of polygons generated by Image.reduceToVectors() .
Grouped Terrain algorithms into ee.Terrain .
Earth Engine Python Client Library
0.1.42
Change
Added ee.batch.Task.active() for checking whether the task is active.
Made deprecated methods emit warnings. It is highly recommended to enable this by running the Python interpreter with the -W default flag or calling "import warnings; warnings.simplefilter('default')" before interacting with the EE library.
Change
Image.parseExpression() is no longer available for general use. Image.expression should be used instead, and the documentation for accessing bands in expressions has been moved there.
Added support for computed geometries to Geometry.type() , but now returns a computed string rather than a concrete one.
Fixed the incorrect winding order of polygons generated by Image.reduceToVectors() .
Grouped Terrain algorithms into ee.Terrain .
Earth Engine Server
Fixed
Deprecated the "size" parameter to ee.Image.getThumbURL() in favor of "dimensions". If you have a script which provides a "size" argument to ee.Image.getThumbURL() , please switch to using "dimensions" instead.
Fixed an internal server error when exporting images that use Image.expression() .
Fixed Image.pixelArea() internal server errors when working in the WGS84 projection.
Fixed export of images with bandname_class_palette metadata.
Fixed a bug where setting multiple properties on an image would in rare cases ignore all but one property.
December 19, 2014
Earth Engine Server
Fixed
Fixed the incorrect winding order of polygons generated by Image.reduceToVectors() .
Fixed a bug in Collection.distinct() which sometimes caused it to return duplicate elements.
Fixed a bug that caused FeatureCollection.reduceToImage() to refuse integer properties.
Fixed a bug that sometimes caused large image exports to fail.
December 04, 2014
Earth Engine JavaScript Client Library
0.1.41
Change
Image.expression() allows expressions that do not refer to all the supplied input images.
Image.parseExpression() allows you to explicitly specify the expected input image names.
Earth Engine Python Client Library
0.1.41
Change
Added the ee.batch module to support batch task management and image and table export.
Change
Image.expression() allows expressions that do not refer to all the supplied input images.
Image.parseExpression() allows you to explicitly specify the expected input image names.
November 25, 2014
Earth Engine Data Catalog
Feature
Added MODIS/MOD13A1 (no longer available)
Added MODIS/MYD13A1 (no longer available)
November 24, 2014
Earth Engine Server
Fixed
Fix internal server error when using Reducer.group() .
November 17, 2014
Earth Engine Server
Change
Added new Geometry.dissolve() and Feature.dissolve() algorithms, to dissolve the interior boundaries between elements of a MultiGeometry .
Deprecated Image.stats() . Use Image.reduceRegion() instead.
Small bugfixes for Chart styling.
November 11, 2014
Earth Engine Data Catalog
Feature
Added NOAA/AVHRR_Pathfinder_V52_L3 (no longer available)
November 06, 2014
Earth Engine Server
Fixed
Fixed Geometry.intersects() and Geometry.contains() incorrectly returning false for some geometries crossing the antimeridian.
October 29, 2014
Earth Engine Server
Change
Updated Image.arraySlice() to support variable slice positions per pixel position.
October 24, 2014
Earth Engine Server
Fixed
Added array support to Image.mask() .
Added Feature.select() and FeatureCollection.select() to select the properties of Features.
Added Reducer.group() to group elements by a specific input, reducing all the other inputs with a given reducer.
Fixed an internal server error that could occur in Reducer.covariance() .
October 21, 2014
Earth Engine Data Catalog
Feature
Added USGS/GFSAD1000_V0 (no longer available)
Added USGS/GFSAD1000_V1 : GFSAD1000: Cropland Extent 1km Multi-Study Crop Mask, Global Food-Support Analysis Data
Added USGS/SRTMGL1_003 : NASA SRTM Digital Elevation 30m
October 14, 2014
Earth Engine Server
Fixed
Added Google Maps Engine as a destination for batch export of vector data (via Export.table ).
Added support for ee.List objects within chart.setSeriesNames() .
Added dictionary.combine() , a function which combines two dictionaries.
Added support for parsing of WKT definitions with EXTENSION elements, by ignoring the EXTENSION when the projection has a known canonical definition.
Fixed a bug that, in rare cases, caused an "Internal Error" when using Reducer.first() .
Fixed support for CSV exports containing no geometry data.
September 30, 2014
Earth Engine Data Catalog
Feature
Added MODIS/MCD43A1 (no longer available)
Earth Engine Server
Change
Reducer.covariance() renamed to Reducer.centeredCovariance() , for already mean-centered data.
Added Reducer.covariance() , a single-pass covariance algorithm that centers data not yet mean-centered.
Improved the error message generated when a Dictionary algorithm is given a key containing a space.
September 24, 2014
Earth Engine Python Client Library
0.1.38
Feature
Added support for Python API authentication using a Google account.
Earth Engine Server
Change
Unbounded geometry, such as the union of complementary hemispheres, is now returned to the client as the WGS84 geodesic rectangle from -180,-90 to 180,90.
September 23, 2014
Earth Engine Data Catalog
Feature
Added USDA/NASS/CDL : USDA NASS Cropland Data Layers
September 12, 2014
Earth Engine Server
Change
Added a size restriction of 10e5 x 10e5 pixels to ee.Image.getThumbURL() .
Added support for scalable (meter-based) kernels to ee.Image.connectedComponents() .
Added Chart.image.series() , along with an example. This function plots derived values of each band in a region across multiple images.
Changed the Playground code-suggestion behavior to not insert a function's argument list unless the cursor is within the function call.
Fixed a bug in reductions that was caused image projections to be ignored.
Improved the reporting of certain types of memory-consumption errors.
September 09, 2014
Earth Engine Data Catalog
Feature
Added USGS/NLCD (no longer available)
September 05, 2014
Earth Engine Server
Fixed
Added Feature.id() and Image.id() methods for accessing the ID of a given element within its collection.
Added Reducer.forEachElement() for distributing reducers over Array elements.
Fixed a bug in GeoJSON export. Now GeoJSON downloaded from Earth Engine is compatible with GDAL's ogr2ogr tool.
Fixed Filter.rangeContains() .
August 28, 2014
Earth Engine Server
Fixed
Added Image.sample() , which creates a Collection containing pixels randomly sampled from an image.
Added Image.mosaic() support for array images, as long as no array is partially masked.
Added Image.visualize() support for viewing array images, by just displaying the first array element at each pixel, or 0 for empty array pixels.
Improved precision of operations on DOUBLE images and arrays.
Reductions now require a scale or crs_transform when a crs is specified.
Changed ImageCollection.getRegion() to no longer skip pixels where a subset of bands is masked. The masked pixel values are returned as nulls.
Fixed Image.unmix() and Image.mask() not working properly when used inside ImageCollection.map() .
Fixed Image.addBands() issue with renaming bands.
Fixed Image.arraySort() and Image.arraySlice() to handle empty matrices.
Fixed Image.arrayGet() Internal Server Error when attempting to use a double or float band as the position argument.
Fixed ee.FeatureCollection() to show a helpful error when a column contains arrays of different dimension.
Fixed Image.mask() when used to retrieve the mask of an array image.
Fixed an error that could occur when applying geometry filters on join results.
August 21, 2014
Earth Engine Server
Change
Added Array() function to create an array from nested lists of numbers.
Added Array.toList() function to create a nested list of numbers from an array.
Extend Image.constant() to create images with array-valued pixels and to accept ee.List objects to produce multiple bands.
Added Image.toArray() function to concatenate pixels of image bands into an array per pixel.
Added ImageCollection.toArray() function to convert each pixel stack or time series to a single array per pixel.
Added ImageCollection.toArrayPerBand() function to convert the pixels of each band to an array per band per pixel.
Added Array.identity() , Image.arrayIdentity() , and Image.matrixIdentity() functions to create an identity matrix of the given size.
Added Feature.toArray() function to combine numeric feature properties into a 1D array.
Added FeatureCollection.makeArray() function to combine numeric feature properties into a 1D array for each feature in a FeatureCollection .
Added Image.arrayFlatten() function to convert an array back a regular scalar image by naming the array elements.
Added Reducer.covariance() function to compute the covariance of a collection or neighborhood as a 2D array.
Added Array.length() and Image.arrayLength() functions that return a 1D array of an array's lengths.
Added Array.get() and Image.arrayGet() functions that return a specific scalar array element.
Added Array.cat() function to concatenate a list of arrays along a given axis.
Added Array.cut() function to cut an array along one or more axes.
Added Array.sort() and Image.arraySort() functions that sort an array by the values of a given 'keys' array.
Added Array.slice() and Image.arraySlice() functions that slice out a subarray from regularly-spaced positions along one axis.
Added Array.mask() and Image.arrayMask() functions that eliminate array positions where a corresponding mask value is 0.
Added Array.transpose() and Image.arrayTranspose() functions to swap two array axes.
Added Array.reduce() and Image.arrayReduce() functions to apply a reducer to the elements of an array.
Added Array.accum() and Image.arrayAccum() functions to accumulate a reducer along a given array.
Added Array.project() and Image.arrayProject() functions to project an array into a lower dimension.
Added Array.repeat() and Image.arrayRepeat() functions to concatenate an array with itself a given number of times.
Added Array.matrixMultiply() and Image.matrixMultiply() functions to multiply two 2D arrays.
Added Array.matrixSolve() and Image.matrixSolve() functions to compute the 2D array X such that AX=B.
Added Array.matrixInverse() and Image.matrixInverse() functions to invert a 2D array.
Added Array.matrixPseudoInverse() and Image.matrixPseudoInverse() functions to compute the Moore-Penrose pseudoinverse.
Added Array.eigen() function to compute the eigenvectors and values of a 2D square array.
Added Array.matrixDeterminant() and Image.matrixDeterminant() functions to compute the determinant of a 2D array.
Added Array.matrixToDiag() and Image.matrixToDiag() functions to generate a square diagonal matrix from a 1D column.
Added Array.matrixDiagonal() and Image.matrixDiagonal() functions to extract the diagonal from a square 2D matrix.
Added Array.matrixFnorm() and Image.arrayFnorm() functions to compute the Frobenius norm of a matrix.
Added Array.matrixTrace() and Image.matrixTrace() functions to compute the trace of a matrix.
Modified Algorithms.if() function to avoid evaluating the unused branch.
August 14, 2014
Earth Engine Server
Change
Added String.toNumber() .
Added Collection.iterate() and List.iterate() .
Added new classifier type: ContinuousNaiveBayes
Aggregations now return an error when trying to aggregate with the default WGS84 projection. This most commonly happens when aggregating a mosaic image. Specify a scale or crs plus crs_transform to avoid the error
Aggregations now use the image footprint (instead of the bounds of the first band of the image) when the aggregation region is not specified explicitly
Improved the error message returned when attempting to set properties with illegal names
August 08, 2014
Earth Engine Server
Change
Updated LandsatTOA to use REFLECTANCE metadata directly when it is available, as is the case for Landsat 8.
Added Array Algorithms.
Added a robust least squares regression reducer to the API using iteratively reweighted least squares.
Add 'format' parameter to the ThumbnailServlet , to specify PNG/JPEG downloads.
August 05, 2014
Earth Engine Data Catalog
Feature
Added MODIS/MCD12Q1 (no longer available)
Added WHRC/biomass/tropical : WHRC Pantropical National Level Carbon Stock Dataset
August 01, 2014
Earth Engine Server
Feature
Added Collection.toList() , returning the contents of a collection as a list.
July 29, 2014
Earth Engine Data Catalog
Feature
Added ESA/GLOBCOVER_L4_200901_200912_V2_3 : GlobCover: Global Land Cover Map
Added USDA/NAIP/DOQQ : NAIP: National Agriculture Imagery Program
July 25, 2014
Earth Engine Server
Change
Improved error reporting for export tasks.
July 22, 2014
Earth Engine Data Catalog
Feature
Added MODIS/MYD09A1 (no longer available)
Added MODIS/MYD11A2 (no longer available)
Added NASA/ORNL/DAYMET (no longer available)
July 18, 2014
Earth Engine JavaScript Client Library
0.1.32
Fixed
Fixed casting of numbers when calling the ee.String constructor.
Earth Engine Python Client Library
0.1.32
Fixed
Fixed casting of numbers when calling the ee.String constructor.
Fixed
Added a __version__ property to the ee package .
Earth Engine Server
Change
Fixed an error thrown when visualizing empty ImageCollections.
Fixed Collection.union() returning partial results on large collections.
Fixed a filtering error that occurred when two intersecting time filters where applied on an ImageCollection .
Improved the performance of polygon rendering.
Improved the performance of large image collection reductions.
Improved the error message for invalid palettes passed to Image.visualize() .
June 30, 2014
Earth Engine Server
Change
Changed file extension on streaming download to lower case (myDownload.CSV -> myDownload.csv).
GME assets and layers now have name, description and tags properties.
June 20, 2014
Earth Engine JavaScript Client Library
0.1.311
Change
Allowed empty args list for Image.select() .
Earth Engine Python Client Library
0.1.31
Change
Allowed empty args list for Image.select() .
Change
Gave all API objects __eq__() and __hash__()
Earth Engine Server
Feature
Added a few helper methods to Projection :
Projection.atScale(projection, meters)
Projection.crs(projection)
Projection.scale(projection, x, y)
Projection.transform(projection)
Projection.translate(projection, x, y)
Projection.wkt(projection)
June 06, 2014
Earth Engine Server
Change
Added List.zip(other) function.
exportImage() can now create TERRAIN assets when exporting to Google Maps Engine. See gmeTerrain parameter.
Breaking
ee.Geometry.Polygon and ee.Geometry.Rectangle no longer fix polygon ordering for you, so when you use those functions, be sure to order the points such that the inside of the polygon or rectangle is on the left side of the given edges. This is only backward incompatible when you have a pre-existing script that specifies polygon vertices where the intended interior is on the right side of the given edges. This is easily tested by computing the centroid; if it is on the opposite side of the planet, reverse the order of your vertices.
June 03, 2014
Earth Engine Data Catalog
Feature
Added IDAHO_EPSCOR/GRIDMET : GRIDMET: University of Idaho Gridded Surface Meteorological Dataset
Added NOAA/NGDC/ETOPO1 : ETOPO1: Global 1 Arc-Minute Elevation
May 29, 2014
Earth Engine Server
Fixed
Added Geometry.coordinates() function.
Added Geometry.proj() function.
Added Geometry.edgesAreGeodesics() function.
Added Geometry.isUnbounded() function.
Added Geometry.geometries() function.
Improved error reporting for invalid Fusion Tables table ids.
Fixed a bug causing certain queries for feature IDs only from Fusion Tables to fail.
May 23, 2014
Earth Engine Server
Feature
Fixed bug in Image.reduceRegions() .
Added more information to error messages in Collection.map() .
May 20, 2014
Earth Engine Data Catalog
Feature
Added WWF/HydroSHEDS/15ACC : WWF HydroSHEDS Flow Accumulation, 15 Arc-Seconds
Added WWF/HydroSHEDS/15CONDEM : WWF HydroSHEDS Hydrologically Conditioned DEM, 15 Arc-Seconds
Added WWF/HydroSHEDS/15DIR : WWF HydroSHEDS Drainage Direction, 15 Arc-Seconds
May 16, 2014
Earth Engine Server
Change
Fixed addToMap 's handling of two band images.
Changed IsEqual to compare numbers by value, ignoring the type.
May 07, 2014
Earth Engine Server
Fixed
Fixed pixel masking in ImageCollection.formaTrend() when there are no valid samples.
Fixed a bug that could cause sub-computations in Image.expression() calls to incorrectly return null.
May 01, 2014
Earth Engine JavaScript Client Library
0.1.28
Change
Improved error reporting for CSV downloads.
Earth Engine Server
Feature
Added new algorithms for Dictionary : set() , contains() , size() , keys() , values() .
April 24, 2014
Earth Engine JavaScript Client Library
0.1.27
Change
Stopped assuming keyword args when a function's first arg is a dictionary.
Improved consistency in type casting of different classes.
Fixed Element variable promotion.
Started allowing ComputedObjects in Image.select() override wrapper.
Breaking
Rename ComputedObject.cast() to castInternal() to avoid conflict with the upcoming Image.cast() and ImageCollection.cast() .
Earth Engine Python Client Library
0.1.27
Fixed
Fixed Element variable promotion.- Improved consistency in type casting of different classes.
Fixed Element variable promotion.
Earth Engine Server
Change
Added image collection casting utilities including Image.bandTypes() , Image.cast() and ImageCollection.cast() . Also made PixelType() idempotent and adds the following methods:
PixelType.uint8()
PixelType.uint16()
PixelType.uint32()
PixelType.int8()
PixelType.int16()
PixelType.int32()
PixelType.int64()
PixelType.float()
PixelType.double()
Made Image.paint() respect line width for LineStrings.
April 15, 2014
Earth Engine Data Catalog
Feature
Added NASA/NLDAS/FORA0125_H002 : NLDAS-2: North American Land Data Assimilation System Forcing Fields
April 14, 2014
Earth Engine Server
Feature
Added collection.flatten() to flatten collections of collections.
April 07, 2014
Earth Engine JavaScript Client Library
0.1.25
Change
Bugfixes for MapProjection .
Earth Engine Server
Change
Bugfixes for MapProjection .
Bugfixes for Image.geometry() .
Change
Add ee.List.map() , a method for mapping a function over the elements of ee.List objects.
Changed geometry encoding in FeatureCollection export to be more GeoJson compatible.
Bugfixes for MapProjection .
Bugfixes for Image.geometry() .
Breaking
Remove the old Join API, deprecated Dec 2013. Includes Collection.innerJoin , Collection.groupedJoin and JoinCollections .
April 01, 2014
Earth Engine Server
Fixed
Fixed several minor errors around image geometry and property propagation.
March 28, 2014
Earth Engine JavaScript Client Library
0.1.24
Change
Improved automatic type casting logic and error messages.
Earth Engine Python Client Library
0.1.24
Change
Improved automatic type casting logic and error messages.
Earth Engine Server
Fixed
Added support for ImageCollections containing images with different band types. To use these in contexts that expect consistent band types (e.g. ImageCollection.mosaic() ), the image bands must be manually cast to the right type within a mapped function.
Added a rich set of methods to the List class.
Added a SelectorSet() constructor.
Fixed image bounding box calculations in Image.clip() and Image.mask() .
Fixed normalization of geometries loaded from Fusion Tables.
Fixed Image.mask() to ignore the masked pixels of an applied mask image.
March 25, 2014
Earth Engine Data Catalog
Feature
Added LANDSAT/GLS2005 : Landsat Global Land Survey 2005, Landsat 5+7 scenes
Added LANDSAT/GLS2005_L5 : Landsat Global Land Survey 2005, Landsat 5 scenes
Added LANDSAT/GLS2005_L7 : Landsat Global Land Survey 2005, Landsat 7 scenes
March 20, 2014
Earth Engine Server
Feature
Added new algorithm Image.bitwiseNot() .
Added camel-case aliases Image.firstNonZero() and bitwise operators ( Image.bitwiseAnd() ).
Added cast aliases on the primitive Number type (e.g. Number.toByte() ) to match those on Image .
March 14, 2014
Earth Engine Server
Fixed
Launch the CSV Download servlet.
Added Image.bilinearSample
Make VisualizationImage a little nicer, accepting either a list or a single value for all visualization parameters.
Fix bug in BinaryMath where only the type of the left argument is considered.
March 11, 2014
Earth Engine Data Catalog
Feature
Added LANDSAT/LE7 (no longer available)
Added LANDSAT/LE7_L1T (no longer available)
Added LANDSAT/LE7_L1T_32DAY_BAI (no longer available)
Added LANDSAT/LE7_L1T_32DAY_EVI (no longer available)
Added LANDSAT/LE7_L1T_32DAY_NBRT (no longer available)
Added LANDSAT/LE7_L1T_32DAY_NDSI (no longer available)
Added LANDSAT/LE7_L1T_32DAY_NDVI (no longer available)
Added LANDSAT/LE7_L1T_32DAY_NDWI (no longer available)
Added LANDSAT/LE7_L1T_32DAY_RAW (no longer available)
Added LANDSAT/LE7_L1T_32DAY_TOA (no longer available)
Added LANDSAT/LE7_L1T_8DAY_BAI (no longer available)
Added LANDSAT/LE7_L1T_8DAY_EVI (no longer available)
Added LANDSAT/LE7_L1T_8DAY_NBRT (no longer available)
Added LANDSAT/LE7_L1T_8DAY_NDSI (no longer available)
Added LANDSAT/LE7_L1T_8DAY_NDVI (no longer available)
Added LANDSAT/LE7_L1T_8DAY_NDWI (no longer available)
Added LANDSAT/LE7_L1T_8DAY_RAW (no longer available)
Added LANDSAT/LE7_L1T_8DAY_TOA (no longer available)
Added LANDSAT/LE7_L1T_ANNUAL_BAI (no longer available)
Added LANDSAT/LE7_L1T_ANNUAL_EVI (no longer available)
Added LANDSAT/LE7_L1T_ANNUAL_GREENEST_TOA (no longer available)
Added LANDSAT/LE7_L1T_ANNUAL_NBRT (no longer available)
Added LANDSAT/LE7_L1T_ANNUAL_NDSI (no longer available)
Added LANDSAT/LE7_L1T_ANNUAL_NDVI (no longer available)
Added LANDSAT/LE7_L1T_ANNUAL_NDWI (no longer available)
Added LANDSAT/LE7_L1T_ANNUAL_RAW (no longer available)
Added LANDSAT/LE7_L1T_ANNUAL_TOA (no longer available)
Added LANDSAT/LE7_L1T_TOA (no longer available)
Added LANDSAT/LT5 (no longer available)
Added LANDSAT/LT5_L1T (no longer available)
Added LANDSAT/LT5_L1T_32DAY_BAI (no longer available)
Added LANDSAT/LT5_L1T_32DAY_EVI (no longer available)
Added LANDSAT/LT5_L1T_32DAY_NBRT (no longer available)
Added LANDSAT/LT5_L1T_32DAY_NDSI (no longer available)
Added LANDSAT/LT5_L1T_32DAY_NDVI (no longer available)
Added LANDSAT/LT5_L1T_32DAY_NDWI (no longer available)
Added LANDSAT/LT5_L1T_32DAY_RAW (no longer available)
Added LANDSAT/LT5_L1T_32DAY_TOA (no longer available)
Added LANDSAT/LT5_L1T_8DAY_BAI (no longer available)
Added LANDSAT/LT5_L1T_8DAY_EVI (no longer available)
Added LANDSAT/LT5_L1T_8DAY_NBRT (no longer available)
Added LANDSAT/LT5_L1T_8DAY_NDSI (no longer available)
Added LANDSAT/LT5_L1T_8DAY_NDVI (no longer available)
Added LANDSAT/LT5_L1T_8DAY_NDWI (no longer available)
Added LANDSAT/LT5_L1T_8DAY_RAW (no longer available)
Added LANDSAT/LT5_L1T_8DAY_TOA (no longer available)
Added LANDSAT/LT5_L1T_ANNUAL_BAI (no longer available)
Added LANDSAT/LT5_L1T_ANNUAL_EVI (no longer available)
Added LANDSAT/LT5_L1T_ANNUAL_GREENEST_TOA (no longer available)
Added LANDSAT/LT5_L1T_ANNUAL_NBRT (no longer available)
Added LANDSAT/LT5_L1T_ANNUAL_NDSI (no longer available)
Added LANDSAT/LT5_L1T_ANNUAL_NDVI (no longer available)
Added LANDSAT/LT5_L1T_ANNUAL_NDWI (no longer available)
Added LANDSAT/LT5_L1T_ANNUAL_RAW (no longer available)
Added LANDSAT/LT5_L1T_ANNUAL_TOA (no longer available)
Added LANDSAT/LT5_L1T_TOA (no longer available)
Added LEDAPS/LE7_L1T_SR (no longer available)
Added LEDAPS/LT5_L1T_SR (no longer available)
Added MODIS/MYD08_M3_051 (no longer available)
March 10, 2014
Earth Engine JavaScript Client Library
0.1.21
Feature
Added filename argument for feature collection CSV download.
Earth Engine Server
Fixed
Fixed errors when applying number filters where some values are null.
Fixed specifying image 'dimensions' in ee.Image.getDownloadUrl() .
March 04, 2014
Earth Engine Data Catalog
Feature
Added NOAA/DMSP-OLS/NIGHTTIME_LIGHTS : DMSP OLS: Nighttime Lights Time Series Version 4, Defense Meteorological Program Operational Linescan System
February 25, 2014
Earth Engine Data Catalog
Feature
Added MODIS/MOD08_M3_051_SHORT (no longer available)
Added MODIS/MYD08_M3_051_SHORT (no longer available)
Added UMD/hansen/global_forest_change_2013 (no longer available)
February 24, 2014
Earth Engine Server
Fixed
Fixed bug in ee.FeatureCollection.getDownloadURL() breaking on some special characters.
Fixed bug that caused ee.Date.getFraction('year') to return (slightly) incorrect values between March and December of a leap year or the year before a leap year.
February 18, 2014
Earth Engine JavaScript Client Library
0.1.19
Change
Changed the missing end bound in the DateRange constructor to mean start bound + 1ms, not infinity.
Started to consistently interpret DateRange upper bounds as exclusive.
Earth Engine Python Client Library
0.1.19
Change
Changed the missing end bound in the DateRange constructor to mean start bound + 1ms, not infinity.
Started to consistently interpret DateRange upper bounds as exclusive.
Earth Engine Server
Change
Added Image.connectedComponents , which labels pixel clusters depending on connectedness defined by a kernel.
Added ee.Reducer.frequencyHistogram and ee.Reducer.first .
Added alpha band to Images exported to Google Maps Engine. The band is generated as the minimum of the masks of all bands of the Earth Engine image. The Earth Engine image must have exactly one or three bands when exporting to GME; other images will now cause the export to fail.
Improved performance of queries that include large numbers of mapped functions or Image.expression calls.
Breaking
Changed Image.focal_median - it now rounds averaged medians rather than truncating them.
February 13, 2014
Earth Engine JavaScript Client Library
0.1.18
Feature
Added an ee.Projection class to represent map projections.
Earth Engine Python Client Library
0.1.18
Feature
Added an ee.Projection class to represent map projections.
Earth Engine Server
Change
Added an Image.bandNames() function to return the bands of an image.
Added an Image.projection() function to return the projection of an image.
Added a Projection.nominalScale() function to return the nominal scale of a projection in meters.
In Image.connectedPixelCount() , set the upper limit of maxSize to 1024 pixels.
Correctly detect Fusion Tables with multiple columns of the same name.
February 11, 2014
Earth Engine Data Catalog
Feature
Added TRMM/3B42 : TRMM 3B42: 3-Hourly Precipitation Estimates
February 06, 2014
Earth Engine JavaScript Client Library
0.1.17
Fixed
Fixed inconsistent promotion logic for ee.Date parameters.
Fixed initialization failure when both synchronous and asynchronous paths are used.
Earth Engine Python Client Library
0.1.17
Fixed
Fixed inconsistent promotion logic for ee.Date parameters.
Earth Engine Server
Fixed
Fixed date filters failing on collections loaded from Fusion Tables.
Fixed ee.Join failing when only a subset of fields from the result is requested.
Fixed ImageCollection geometry filtering failing when given a degenerate (point-sized) rectangle.
February 04, 2014
Earth Engine Data Catalog
Feature
Added MODIS/MOD08_M3_051 (no longer available)
January 29, 2014
Earth Engine Server
Fixed
Fixed range filters on Fusion Tables collections.
January 22, 2014
Earth Engine Server
Change
Add Image.reduceRegions() , which augments each feature in a collection with the result of applying a reducer over the area of that feature.
January 21, 2014
Earth Engine Data Catalog
Feature
Added MODIS/MOD11A1 (no longer available)
Added MODIS/MYD11A1 (no longer available)
January 09, 2014
Earth Engine Server
Fixed
Updated min and max reducers to support ordered non-numeric types, such as strings.
Deprecated Image.get() and Feature.get() in favor of Element.get() .
Added a maxError parameter to Geometry.convexHull() and Feature.convexHull() to control the error tolerance when computing a convex hull in a particular projection.
Empty DateRange objects (end <= start) now preserve their start and end times.
Fixed handling of some edge cases in Geometry.convexHull() and Feature.convexHull() .
December 20, 2013
Earth Engine JavaScript Client Library
0.1.14
Feature
Added ee.Element , a base class for ee.Image and ee.Feature .
Earth Engine Python Client Library
0.1.14
Feature
Added ee.Element , a base class for ee.Image and ee.Feature .
Earth Engine Server
Fixed
Added a new ee.Join API to replace the now-deprecated Collection.innerJoin() and Collection.groupedJoin() .
Re-enabled the Landsat.surfaceReflectance() algorithm.
Re-enabled the L5_L1T_SR and L7_L1T_SR collections.
Deprecated Image.set() and Feature.set() in favor of Element.set() . This change should only be relevant for users of ee.call() and ee.apply() .
Changed LedapsSurfaceReflectance to work on single images instead of collections.
Fixed Image.convolve() for use in map() .
December 04, 2013
Earth Engine Python Client Library
0.1.12
Change
Improved the documentation for the AppEngine "Hello World" example.
November 19, 2013
Earth Engine JavaScript Client Library
0.1.11
Change
Added several examples for usage of new variable-size kernels.
Added an example for usage of the updated ReduceRegion algorithm.
Added an example for usage of a Mode reducer with a kernel given in meters.
Changed all reducer examples to match the Web API's switch to new reducers.
Improved documentation of the ee.data.send_() method.
Fixed client issues arising from the usage from a Caja JavaScript sandbox.
October 29, 2013
Earth Engine Server
Change
Improved performance of certain ImageCollection queries.
Changed pixel type descriptions to be simpler for common cases.
Removed support for the deprecated v1 JSON API.
October 24, 2013
Earth Engine Server
Change
Added a "units" argument to most ee.Kernel constructor methods that allows specifying kernels in meters.
Changed Collection.map() to allow dropping elements by returning null.
Removed the 5000 image limit when enumerating image collections, although overall performance is largely unchanged.
October 19, 2013
Earth Engine Server
Deprecated
Added schema description to the result of FeatureCollection.getInfo() .
Added DocID and table name to the properties of FeatureCollection loaded from Fusion Tables.
Deprecated Function.bind() . Binding should now always be done on the client side.
October 14, 2013
Earth Engine JavaScript Client Library
0.1.9
Fixed
Added an ee.Number class.
Added ee.Geometry.type() .
Added ee.ImageCollection.select() , equivalent to mapping Image.select() over a collection.
Removed ee.Collection.map_*() functions. Use ee.Collection.map(someJavaScriptFunction) .
Fixed ee.Image.set() and ee.Feature.set() to stop requiring {'properties': ...} wrapping.
Earth Engine Python Client Library
0.1.9
Fixed
Added ee.Geometry.type() .
Added ee.ImageCollection.select() , equivalent to mapping Image.select() over a collection.
Removed ee.Collection.map_*() functions. Use ee.Collection.map(somePythonFunction) .
Fixed ee.Algorithms entries referring to incorrect algorithms.
Fixed ee.Image.set() and ee.Feature.set() to stop requiring {'properties': ...} wrapping.
Earth Engine Server
Fixed
Added Image.randomVisualizer() .
Changed Collection.map() to run mapped functions in parallel.
Changed Collection.map() to no longer take dynamicArgs, constantArgs, and destination arguments.
Changed Collection.limit() to allow a 0 limit. Useful to query for the collection metadata without fetching any objects.
Removed support for ClientLogin authentication (previously deprecated).
Fixed Image.glcmTexture() to stop returning NaN for homogeneous regions.
Fixed error messages when API calls receive null images.
October 02, 2013
Earth Engine Server
Fixed
Added a tileScale parameter to Image.reduceRegion() .
Improved the error messages produced by Image.metadata() .
Fixed a bug which could cause an "incompatible type" error when two Collection.map() calls with different input types appeared in the query.
Fixed a bug that could cause aggregation results to be lost, resulting in failed downloads or map tiles.
Fixed a bug that caused ImageCollection.getRegion() to fail on large collections.
September 30, 2013
Earth Engine JavaScript Client Library
0.1.8
Fixed
Added support for automatically casting numbers to dates (interpreted as Unix timestamps).
Added ee.Deserializer , which can decode the output of ee.Serializer .
Improved ee.initialize() to allow multiple asynchronous initialization calls followed by a synchronous call.
Fixed handling of GeoJSON CRS specification in ee.Geometry .
Fixed accidental aggregation cache breaking in Collection.map() .
Fixed the example scripts to explicitly specify date timezones, rather than use the client's local timezone.
Earth Engine Python Client Library
0.1.8
Fixed
Added support for automatically casting numbers to dates (interpreted as Unix timestamps).
Added ee.Deserializer , which can decode the output of ee.Serializer .
Fixed handling of GeoJSON CRS specification in ee.Geometry .
Fixed accidental aggregation cache breaking in Collection.map() .
Earth Engine Server
Fixed
Changed the asset loading policy to prevent loading assets using non-constant strings.
Improved performance of requests containing deeply-nested queries.
Fixed an internal error encountered when mapped functions reached a certain size.
Fixed an error when a streaming download was attempted with format set to "jpeg".
Fixed an error that could make rerunning a timed out aggregation to start from scratch rather than pick up where the last attempt stopped.
Fixed FMask.matchClouds() to propagate the input footprint.
September 19, 2013
Earth Engine JavaScript Client Library
0.1.7
Change
Changed API functions to support keyword arguments - if a single, class-less JavaScript Object is passed to an API function, its keys are interpreted as keyword arguments.
Earth Engine Server
Change
Increased the maximum tile zoom level from 20 to 21.
Changed Image.trainClassifier() to explicitly disallow unscaled WGS84 images and improved the resulting error message.
Changed Image.clip() to preserve input metadata.
September 13, 2013
Earth Engine JavaScript Client Library
0.1.7
Fixed
Fixed a regression introduced in the previous update that could cause incorrect serialization.
Earth Engine Python Client Library
0.1.7
Change
Added type declarations for ee.data methods, so it can be used in Closure-compiled code.
Changed the interface of ee.CustomFunction() to require a function signature.
Fixed a regression introduced in the previous update that could cause incorrect serialization.
Earth Engine Server
Fixed
Updated algorithm naming to be more consistent:
Renamed a number of algorithms. The old names are deprecated.
LandsatPathRowLimit() -> Landsat.pathRowLimit()
LandsatTOA() -> Landsat.TOA()
LANDSAT/CalibratedRadiance() -> Landsat.calibratedRadiance()
LedapsSurfaceReflectance() -> Landsat.surfaceReflectance()
SimpleLandsatCloudScore() -> Landsat.simpleCloudScore()
TranslateLandsatMetadata() -> Landsat.translateMetadata()
SimpleLandsatComposite() -> Landsat.simpleComposite()
ReduceToVectors() -> Image.reduceToVectors()
ClassifyImage() -> Image.classify()
TrainClassifier() -> Image.trainClassifier()
Filter.equals() -> Filter.eq()
Filter.notEquals() -> Filter.neq()
Filter.lessThan() -> Filter.lt()
Filter.lessThanOrEquals() -> Filter.lte()
Filter.greaterThan() -> Filter.gt()
Filter.greaterThanOrEquals() -> Filter.gte()
Filter.listContains() -> Filter.inList()
Math.\<any method>() -> Number.\<same method>()
Removed a number of old deprecated algorithm aiases.
LANDSAT/LandsatTOA() . Use Landsat.TOA() .
Reproject() . Use Image.reproject() instead.
SimpleMosaic() . Use ImageCollection.mosaic() instead.
QualityBandMosaic() . Use ImageCollection.qualityMosaic() instead.
SelectBands() . Use Image.select() instead.
ExtractGeometry() . Use Collection.geometry() instead.
Filter.arrayContains() . Use Filter.inList() instead.
Deprecated a number of algorithm aliases.
ProjectionTransform() . Use Feature.transform() instead.
DropDuplicates() . Use Collection.distinct() instead.
MapAlgorithm() . Use Collection.map() instead.
JoinCollections() . Use Collection.join() instead.
UnionFeatureCollection() . Use Collection.union() instead.
DrawVector() . Use Collection.draw() instead.
Constant() . Use Image.constant() instead.
Added FeatureCollection.classify() .
Added a tileSize argument to Image.reduceToVectors() .
Changed Image.mask() to preserve the input's metadata.
Improved performance of Image.glcmTexture() .
Fixed incorrect handling of polygons that cross the anti-meridian.
September 06, 2013
Earth Engine JavaScript Client Library
0.1.6
Change
Optimized the performance of queries that involve repeated sub-queries.
Earth Engine Python Client Library
0.1.6
Change
Optimized the performance of queries that involve repeated sub-queries.
Earth Engine Server
Fixed
Improved performance of queries that involve a large number of small image operations.
Fixed incorrect point limit calculation in ImageCollection.getRegion() .
August 30, 2013
Earth Engine JavaScript Client Library
0.1.5
Fixed
Added a String class to represent computations that return string values.
Fixed Geometry methods not being present on computed geometries.
Earth Engine Python Client Library
0.1.5
Fixed
Restored compatibility with Python 2.6.
Added a String class to represent computations that return string values.
Fixed Geometry methods not being present on computed geometries.
Earth Engine Server
Change
Added Image.geometry() , which returns the image's footprint.
Added Image.get() and Image.set() to get and set image metadata, respectively.
Added If() , which allows expression lazy conditionals.
Added IsEqual() , which compares two objects.
Added a number of string manipulation methods:
String() , which casts a number to a string.
String.cat() , which concatenates two strings.
String.index() and String.rindex() , which search within a string.
String.length() , which calculates string length.
String.match() , which matches a regex against a string.
String.replace() , which replaces substrings hat match a regex.
String.slice() , which returns a specified substrings.
String.split() , which splits a string by a regex.
Removed the deprecated Feature.setProperty() alias of Feature.set() .
August 21, 2013
Earth Engine Server
Fixed
Added support for arbitrary geometry in the training region for Image.trainClassifier() .
Improved error messages shown when null arguments are passed to certain methods.
Improved error message about queries that require processing too many images.
Fixed a bug that could cause filters to be ignored in certain mapped collections.
August 15, 2013
Earth Engine Python Client Library
0.1.4
Fixed
Fixed handling of ascending=False in Collection.sort() .
Earth Engine Server
Change
Fixed handling of Landsat 5 metadata in ee.Algorithms.SimpleLandsatCloudScore() and ee.Algorithms.SimpleLandsatComposite() .
Fixed a bug in geometry tessellation near projection singularities (e.g. poles).
Removed support for defining ImageCollections using the "creator" field in the deprecated JSON API.
August 13, 2013
Earth Engine Data Catalog
Feature
Added MODIS/MCD43B3 (no longer available)
Added MODIS/MOD09A1 (no longer available)
Added MODIS/MOD13Q1 (no longer available)
Added MODIS/MOD44W/MOD44W_005_2000_02_24 : MOD44W.005 Land Water Mask Derived From MODIS and SRTM
Added MODIS/MYD09GA (no longer available)
Added MODIS/MYD09GA_BAI (no longer available)
Added MODIS/MYD09GA_EVI (no longer available)
Added MODIS/MYD09GA_NDSI (no longer available)
Added MODIS/MYD09GA_NDVI (no longer available)
Added MODIS/MYD09GA_NDWI (no longer available)
Added MODIS/MYD09GQ (no longer available)
Added MODIS/MYD13Q1 (no longer available)
August 07, 2013
Earth Engine Server
Fixed
Added Collection.first() , which returns the first element of a collection.
Changed the thumbnail endpoint to flip the Y axis of the default WGS84 projection.
Fixed an error message for unrecognized parameters being passed to certain methods.
July 31, 2013
Earth Engine Server
Fixed
Added support for hex (0x12AB) and binary (0b0110) literals in Image.expression() .
Changed the image division operator to always use float rather than integer division.
Removed the "system:index" property from GeoJSON Features.
Removed auto-tessellation of geodesic GeoJSON geometries on output.
Deprecated ExtractGeometry() . Use Collection.geometry() instead.
Fixed ImageCollection filtering on non-system properties.
July 24, 2013
Earth Engine JavaScript Client Library
0.1.3
Feature
Added support for calling unbound algorithms using ee.Algorithms.algorithmName(...) .
Added support for passing key data in addition to key filenames to ee.ServiceAccountCredentials() .
Change
Improved error messages returned when a request times out.
Earth Engine Python Client Library
0.1.3
Feature
Added support for calling unbound algorithms using ee.Algorithms.algorithmName(...) .
Added support for passing key data in addition to key filenames to ee.ServiceAccountCredentials() .
Earth Engine Server
Change
Fixed geometry corruption for 3-point Fusion Table polygons.
Fixed severe performance issue when filtering the results of mapping Feature.get() .
Improved the performance of Image.pixelArea() .
Improved documentation for Collection.groupedJoin() .
Improved error message for Collection.filter() .
Changed Collection.aggregate() methods to skip missing property values.
July 23, 2013
Earth Engine Data Catalog
Feature
Added LEDAPS/L5_L1T_SR (no longer available)
Added LEDAPS/L7_L1T_SR (no longer available)
July 18, 2013
Earth Engine Server
Fixed
Fixed an error that would cause classified image downloads to occasionally fail.
Fixed an error when trying to download images with an alpha channel in JPEG format.
Fixed incorrect handling of disjoint multi-polygon intersection.
Fixed a small precision bug in polyline distance calculations.
Fixed ID propagation when merging collections.
July 16, 2013
Earth Engine Data Catalog
Feature
Added LANDSAT/LC8 (no longer available)
Added LANDSAT/LC8_L1T (no longer available)
Added LANDSAT/LC8_L1T_32DAY_BAI (no longer available)
Added LANDSAT/LC8_L1T_32DAY_EVI (no longer available)
Added LANDSAT/LC8_L1T_32DAY_NBRT (no longer available)
Added LANDSAT/LC8_L1T_32DAY_NDSI (no longer available)
Added LANDSAT/LC8_L1T_32DAY_NDVI (no longer available)
Added LANDSAT/LC8_L1T_32DAY_NDWI (no longer available)
Added LANDSAT/LC8_L1T_32DAY_RAW (no longer available)
Added LANDSAT/LC8_L1T_32DAY_TOA (no longer available)
Added LANDSAT/LC8_L1T_8DAY_BAI (no longer available)
Added LANDSAT/LC8_L1T_8DAY_EVI (no longer available)
Added LANDSAT/LC8_L1T_8DAY_NBRT (no longer available)
Added LANDSAT/LC8_L1T_8DAY_NDSI (no longer available)
Added LANDSAT/LC8_L1T_8DAY_NDVI (no longer available)
Added LANDSAT/LC8_L1T_8DAY_NDWI (no longer available)
Added LANDSAT/LC8_L1T_8DAY_RAW (no longer available)
Added LANDSAT/LC8_L1T_8DAY_TOA (no longer available)
Added LANDSAT/LC8_L1T_ANNUAL_BAI (no longer available)
Added LANDSAT/LC8_L1T_ANNUAL_EVI (no longer available)
Added LANDSAT/LC8_L1T_ANNUAL_GREENEST_TOA (no longer available)
Added LANDSAT/LC8_L1T_ANNUAL_NBRT (no longer available)
Added LANDSAT/LC8_L1T_ANNUAL_NDSI (no longer available)
Added LANDSAT/LC8_L1T_ANNUAL_NDVI (no longer available)
Added LANDSAT/LC8_L1T_ANNUAL_NDWI (no longer available)
Added LANDSAT/LC8_L1T_ANNUAL_RAW (no longer available)
Added LANDSAT/LC8_L1T_ANNUAL_TOA (no longer available)
Added LANDSAT/LC8_L1T_TOA (no longer available)
July 11, 2013
Earth Engine Server
Fixed
Fixed the type name of Reducers.
Fixed ReduceToVectors() dropping all but the last polygon in multi-polygon vectors.
Fixed an error message in ReduceToVectors() when non-integer labels are supplied.
Fixed an error in Image.pixelArea() at low zoom levels.
July 03, 2013
Earth Engine JavaScript Client Library
0.1.2
Feature
Added support for the geodesic field in GeoJSON to differentiate geodesic and projected lines.
Earth Engine Python Client Library
0.1.2
Feature
Added support for the geodesic field in GeoJSON to differentiate geodesic and projected lines.
Earth Engine Server
Change
Removed the system:link field from assets.
July 02, 2013
Earth Engine Data Catalog
Feature
Added USGS/GTOPO30 : GTOPO30: Global 30 Arc-Second Elevation
June 26, 2013
Earth Engine Server
Fixed
Added Dictionary.get() and List.get() to get elements of dictionaries and lists.
Added an "id" attribute for GeoJSON Features fetched from collections.
Fixed dropping of empty "properties" attribute in GeoJSON Feature output.
Fixed an internal server error caused by training data containing NaNs.
June 24, 2013
Earth Engine Server
Fixed
Added support for Landsat 8 images to LandsatTOA() .
Added Image.copyProperties() , which copies the properties of one image to another.
Added FeatureCollection.trainClassifier() which allows training a classifier with features from a collection.
Renamed TrainClassifier() to Image.trainClassifier() . The old name is deprecated.
Fixed parsing of negative numbers in non-Image method arguments within Image.expression() strings.
June 05, 2013
Earth Engine JavaScript Client Library
0.1.2
Feature
Added an ee.Kernel class.
Earth Engine Python Client Library
0.1.2
Fixed
Fixed reading of binary auth keys on Windows.
Feature
Added an ee.Kernel class.
Earth Engine Server
Change
The main geometry property in a Feature now has a property name.
May 31, 2013
Earth Engine Server
Change
Added method name annotations to error messages.
Change
Improved an error message in binary band math operators.
May 22, 2013
Earth Engine Server
Fixed
Removed the deprecated LimitFeatureCollection() alias for Collection.limit() .
Added Math.*() methods to operate on primitives (e.g. in mapped functions). WARNING: These are likely to be renamed in an upcoming push.
Added ReduceToVectors() , which runs a reducer across all homogeneous regions in an image.
Fixed an internal error in Image.reduceBands() when passed an image with zero bands.
Fixed the behavior of Collection.limit() where if the result was drawn, the limit would apply on each tile separately.
Fixed usage of Feature.get() inside mapped functions.
May 15, 2013
Earth Engine JavaScript Client Library
0.1.1
Fixed
Added ee.Image.getThumbURL() .
Added ee.Filter.inList() , a convenience for ee.Filter.listContains() .
Changed ee.Image.getDownloadURL() to generate full rather than relative URLs.
Changed ee.Geometry.Point() to accept (x, y) arrays.
Changed the ee.Image constructor to allow calling with no arguments, returning the equivalent of ee.Image(0).mask(0) .
Deprecated ee.Collection.map_*() functions. Use ee.Collection.map(someJavaScriptFunction) .
Fixed type promotion of nulls and zeroes.
Earth Engine Python Client Library
0.1.1
Breaking
EE objects can no longer be initialized by providing JSON blocks (except GeoJSON). All of these can be converted to the new format using ee.call() and ee.apply() .
Collection.aggregate_*() functions no longer perform automatic server fetches. Users will need to call getInfo() on the result manually.
The string representation of EE objects can no longer be passed to eval() to recreate the object.
Added a new class, ee.Geometry , that represents GeoJSON geometries.
Added ee.Image.getThumbUrl() .
Added ee.Filter.inList() , a convenience for ee.Filter.listContains() .
Changed ee.Geometry.Point() to accept (x, y) tuples/lists.
Changed the ee.Image constructor to allow calling with no arguments, returning the equivalent of ee.Image(0).mask(0) .
Changed API version to 0.1.1.
Moved Filter functions onto ee.Filter as static methods.
Switched to a new, better optimized wire encoding of queries.
Deprecated ee.Collection.map_*() functions. Use ee.Collection.map(somePythonFunction) .
Earth Engine Server
Breaking
Removed the deprecated Feature.setProperties() method. Use Feature.set() instead.
Added Feature.get() .
Added FeatureCollection.randomPoints() .
Added world files to image downloads.
Renamed Constant() to Image.constant() . The old name is deprecated.
Improved performance of queries that include multiple asset lookups.
Fixed an Image.distance() regression.
Fixed an error message when enumerating image collection queries that return over 5000 items.
Fixed an internal server error when querying large Fusion Tables with no limit.
May 02, 2013
Earth Engine Server
Change
Renamed Filter.arrayContains() to Filter.listContains() . The old name is deprecated.
Fixed clamping of Landsat EVI images.
Fixed an Image.distance() regression.
Fixed minor reprojection precision errors that happened during image collection compositing.
Breaking
Removed old deprecated algorithms: Image.combineBands() , CombineBands() , Image.normalized_difference() , CombineCollectionBands() , LonLat() , SetProperties() and Feature.update() .
April 25, 2013
Earth Engine JavaScript Client Library
0.0.6
Breaking
The result of the toString() function of EE objects can no longer be passed to eval() to recreate the object.
Breaking
Collection.aggregate_*() functions no longer perform automatic server fetches. Users will need to call getInfo() on the result manually.
Change
Added a new class, ee.Geometry , that represents GeoJSON geometries.
Moved Filter functions onto ee.Filter as static methods.Switched to a new, better optimized wire encoding of queries.
Breaking
EE objects can no longer be initialized by providing JSON blocks (except GeoJSON). All of these can be converted to the new format using ee.call() and ee.apply() .
Earth Engine Server
Fixed
Changed OAuth2 authentication to no longer require an extra scope to access Google Maps Engine assets.
Improved performance of date/time filtering.
Improved performance of large queries whose call tree has a large number of shared subtrees.
Fixed Image.expression() calls sometimes failing within a Collection.map() call.
Fixed several mistakes in the return types of API functions.
April 17, 2013
Earth Engine Server
Fixed
Changed unary image operations to pass through the metadata of the input to the output.
Changed OAuth2 token verification to no longer require the Earth Builder scope to access Google Maps Engine assets.
Fixed behavior of Image.glcmTexture() inside mapped functions.
Fixed error messages when calling user-defined Earth Engine functions with invalid arguments.
Fixed grouped joins involving ImageCollections.
April 10, 2013
Earth Engine Server
Fixed
Fixed handling of differently formatted SPACECRAFT_IDs in LandsatTOA .
Fixed projection failures that happened near the edges of the MODIS Sinusoidal projection.
Fixed an internal server error when filtering image collections by nonexistent IDs.
Fixed handling of null regions in Image.reduceRegion() .
April 09, 2013
Earth Engine Data Catalog
Feature
Added USGS/NLCD/NLCD2001 (no longer available)
Added USGS/NLCD/NLCD2006 (no longer available)
Added USGS/NLCD1992 (no longer available)
April 06, 2013
Earth Engine Server
Fixed
Improved error messages that mention image and band types.
Breaking
Changed thumbnail sizing behavior when only a single size is specified: now it is used as a max size.
Fixed
Fixed ImageCollection.reduce() behavior when a zero-band image is passed in.
Breaking
Changed LandsatTOA() band order to be the same as the regular Landsat images.
March 28, 2013
Earth Engine Server
Fixed
Added Collection.reduceToImage() , an algorithm for reducing a set of Features that intersect each pixel.
Added Geometry methods that mirror the existing Feature methods.
Fixed several corner cases when handling near-global images.
Fixed the error message shown when a Fusion Table can't be found.
Fixed treatment of numeric results returned from function calls in Image.expression() .
March 25, 2013
Earth Engine Server
Fixed
Added Image.parseExpression() , a method similar to Image.expression() which returns a custom function. Most users should not need to use this directly.
Fixed the usage of Image.expression() inside mapped functions.
Fixed regression in decoding of a deprecated way to encode filtered ImageCollections (via start_time and end_time properties).
Fixed LandsatTOA to accept ETM+ scenes whose SENSOR_ID is simply "ETM", such as LE72332482008177ASN00.
Fixed error message formatting when user input includes nulls.
March 14, 2013
Earth Engine JavaScript Client Library
0.0.5
Deprecated
Deprecated specifying API objects using custom JSON (e.g. specifying error margins using {type: 'ErrorMargin', value: 5} ). Support will be removed in the next library update.
Earth Engine Python Client Library
0.0.5
Deprecated
Deprecated specifying API objects using custom JSON (e.g. specifying error margins using {type: 'ErrorMargin', value: 5} ). Support will be removed in the next library update.
Earth Engine Server
Fixed
Added a static Image.load(id, version) method, which is equivalent to ee.Image(id) .
Added a static ImageCollection.load(id, version) method, which is equivalent to ee.ImageCollection(id) .
Added a static ImageCollection.fromImages(images) method, which is equivalent to ee.ImageCollection(images) .
Changed Feature() to allow null metadata, interpreted as an empty dictionary.
Changed PixelType() to allow half-open ranges.
Changed MapProjection() to no longer have a wkt parameter. The crs parameter now allows both CRS ID codes and WKT strings.
Changed Image.stats() to allow calculations in the image's native projection and increased the maximum number of samples to 100 million.
Changed LandsatTOA() to handle L4 images as well as TM, ETM and ETM+ SENSOR_IDs.
Changed LandsatTOA() L5 coefficients from:
Chander, Gyanesh, Brian L. Markham, and Dennis L. Helder. "Summary of current radiometric calibration coefficients for Landsat MSS, TM, ETM+, and EO-1 ALI sensors." Remote sensing of environment 113.5 (2009): 893-903.
Removed support for specifying classifications using custom JSON. The TrainClassifier() and ClassifyImage() methods provide equivalent features.
Fixed error messages of methods that take Lists/Dictionaries of images when non-Image arguments are passed to them.
Fixed Collection.loadTable() .
March 05, 2013
Earth Engine Server
Fixed
Fixed Filter.calendarRange() .
February 26, 2013
Earth Engine Data Catalog
Feature
Added LANDSAT/L4 (no longer available)
Added LANDSAT/L4_L1T (no longer available)
Added LANDSAT/L4_L1T_32DAY_BAI (no longer available)
Added LANDSAT/L4_L1T_32DAY_EVI (no longer available)
Added LANDSAT/L4_L1T_32DAY_NBRT (no longer available)
Added LANDSAT/L4_L1T_32DAY_NDSI (no longer available)
Added LANDSAT/L4_L1T_32DAY_NDVI (no longer available)
Added LANDSAT/L4_L1T_32DAY_NDWI (no longer available)
Added LANDSAT/L4_L1T_32DAY_RAW (no longer available)
Added LANDSAT/L4_L1T_32DAY_TOA (no longer available)
Added LANDSAT/L4_L1T_8DAY_BAI (no longer available)
Added LANDSAT/L4_L1T_8DAY_EVI (no longer available)
Added LANDSAT/L4_L1T_8DAY_NBRT (no longer available)
Added LANDSAT/L4_L1T_8DAY_NDSI (no longer available)
Added LANDSAT/L4_L1T_8DAY_NDVI (no longer available)
Added LANDSAT/L4_L1T_8DAY_NDWI (no longer available)
Added LANDSAT/L4_L1T_8DAY_RAW (no longer available)
Added LANDSAT/L4_L1T_8DAY_TOA (no longer available)
Added LANDSAT/L4_L1T_ANNUAL_BAI (no longer available)
Added LANDSAT/L4_L1T_ANNUAL_EVI (no longer available)
Added LANDSAT/L4_L1T_ANNUAL_GREENEST_TOA (no longer available)
Added LANDSAT/L4_L1T_ANNUAL_NBRT (no longer available)
Added LANDSAT/L4_L1T_ANNUAL_NDSI (no longer available)
Added LANDSAT/L4_L1T_ANNUAL_NDVI (no longer available)
Added LANDSAT/L4_L1T_ANNUAL_NDWI (no longer available)
Added LANDSAT/L4_L1T_ANNUAL_RAW (no longer available)
Added LANDSAT/L4_L1T_ANNUAL_TOA (no longer available)
Added LANDSAT/L4_L1T_TOA (no longer available)
February 20, 2013
Earth Engine Server
Fixed
Fixed support of band names containing colons.
Change
Raised request size limit from 256KB to 4MB.
Fixed support of band names containing colons.support of band names containing colons.
February 13, 2013
Earth Engine JavaScript Client Library
0.0.5
Fixed
Fixed the Feature constructor to accept null geometries.
Earth Engine Python Client Library
0.0.5
Fixed
Fixed the Feature constructor to accept null geometries.
Earth Engine Server
Change
Fixed an Internal Server Error being thrown when a 3D CRS is passed to Earth Engine.
Fixed
Improved performance of operations that refer to the same FeatureCollection multiple times.
Fixed
Fixed statistical Reducers failing on floating point images.
Change
Changed the HTTP error code on requests that exceed the user's quota from 503 to 403.
Feature
Added Image.connectedPixelCount() , which annotates pixels with the number of equal neighbors.
Feature
Added LandsatTOA() , which is used to calculate Landsat top-of-atmosphere reflectance and brightness temperature.
February 12, 2013
Earth Engine Data Catalog
Feature
Added LANDSAT/LT4 (no longer available)
Added LANDSAT/LT4_L1T (no longer available)
Added LANDSAT/LT4_L1T_32DAY_BAI (no longer available)
Added LANDSAT/LT4_L1T_32DAY_EVI (no longer available)
Added LANDSAT/LT4_L1T_32DAY_NBRT (no longer available)
Added LANDSAT/LT4_L1T_32DAY_NDSI (no longer available)
Added LANDSAT/LT4_L1T_32DAY_NDVI (no longer available)
Added LANDSAT/LT4_L1T_32DAY_NDWI (no longer available)
Added LANDSAT/LT4_L1T_32DAY_RAW (no longer available)
Added LANDSAT/LT4_L1T_32DAY_TOA (no longer available)
Added LANDSAT/LT4_L1T_8DAY_BAI (no longer available)
Added LANDSAT/LT4_L1T_8DAY_EVI (no longer available)
Added LANDSAT/LT4_L1T_8DAY_NBRT (no longer available)
Added LANDSAT/LT4_L1T_8DAY_NDSI (no longer available)
Added LANDSAT/LT4_L1T_8DAY_NDVI (no longer available)
Added LANDSAT/LT4_L1T_8DAY_NDWI (no longer available)
Added LANDSAT/LT4_L1T_8DAY_RAW (no longer available)
Added LANDSAT/LT4_L1T_8DAY_TOA (no longer available)
Added LANDSAT/LT4_L1T_ANNUAL_BAI (no longer available)
Added LANDSAT/LT4_L1T_ANNUAL_EVI (no longer available)
Added LANDSAT/LT4_L1T_ANNUAL_GREENEST_TOA (no longer available)
Added LANDSAT/LT4_L1T_ANNUAL_NBRT (no longer available)
Added LANDSAT/LT4_L1T_ANNUAL_NDSI (no longer available)
Added LANDSAT/LT4_L1T_ANNUAL_NDVI (no longer available)
Added LANDSAT/LT4_L1T_ANNUAL_NDWI (no longer available)
Added LANDSAT/LT4_L1T_ANNUAL_RAW (no longer available)
Added LANDSAT/LT4_L1T_ANNUAL_TOA (no longer available)
Added LANDSAT/LT4_L1T_TOA (no longer available)
February 06, 2013
Earth Engine JavaScript Client Library
0.0.5
Change
Removed ImageCollection.combine_() , an internal method used to implement ImageCollection.mosaic() .
Earth Engine Python Client Library
0.0.5
Change
Removed ImageCollection.combine_() , an internal method used to implement ImageCollection.mosaic() .
Earth Engine Server
Change
Removed the undocumented WrappedFeatureCollection function.
Change
Renamed SetProperties() to Feature.setProperties() . The old name is deprecated.
January 31, 2013
Earth Engine JavaScript Client Library
0.0.5
Fixed
Fixed serialization of Collections with multiple filters.
Feature
Added support for calling static API methods using the ClassName.methodName() syntax.
Fixed
Fixed listing of static methods in the playground docs.
Fixed
Fixed ImageCollection.reduce() so it can be called as an instance method.
Change
Removed ImageCollection.mosaic_() , an internal method used to implement ImageCollection.mosaic() .
Breaking
Added support for fetching algorithm results using getInfo() for algorithms that return numbers, tables, and other non-geo objects. This may break scripts that relied on manually editing JSON produced by these algorithms and submitting it to ee.data.getValue() .
Fixed
Fixed listing of static methods in the playground docs.
Earth Engine Python Client Library
0.0.5
Fixed
Fixed serialization of Collections with multiple filters.
Feature
Added support for calling static API methods using the ClassName.methodName() syntax.
Fixed
Fixed listing of static methods in the playground docs.
Fixed
Fixed ImageCollection.reduce() so it can be called as an instance method.
Change
Removed ImageCollection.mosaic_() , an internal method used to implement ImageCollection.mosaic() .
Breaking
Added support for fetching algorithm results using getInfo() for algorithms that return numbers, tables, and other non-geo objects. This may break scripts that relied on manually editing JSON produced by these algorithms and submitting it to ee.data.getValue() .
Earth Engine Server
Deprecated
Renamed LonLat() to Image.pixelLonLat() . The old name is deprecated.
Feature
Added ImageCollection.qualityMosaic() to composite a collection using a quality band.
Feature
Added Image.reduceRegion() which applies a reducer to all the pixels in a specific region. See the Unbound section in the playground Docs tab for examples of reducers (e.g., Reducer.sum() , Reducer.mean() ).
Deprecated
Deprecated Image.normalized_difference() . Use Image.normalizedDifference() with Image.addBands() instead.
Deprecated
Renamed LimitFeatureCollection() to Collection.limit() . The old name is deprecated.
Fixed
Fixed the performance of queries referencing a Fusion Table multiple times.
January 24, 2013
Earth Engine JavaScript Client Library
0.0.4
Change
Changed Feature constructors to allow specifying algorithm calls as geometry or properties.
Earth Engine Python Client Library
0.0.4
Fixed
Fixed a bug that caused failing queries to raise NameError rather than EEException .
Earth Engine Server
Fixed
Fixed Collection.filter() to no longer cause an Internal Server Error. It is now preferred over FilterFeatureCollection() .
January 22, 2013
Earth Engine Data Catalog
Feature
Added MODIS/MOD44B (no longer available)
December 04, 2012
Earth Engine Data Catalog
Feature
Added LANDSAT/L5_L1T_TOA (no longer available)
Added LANDSAT/L7_L1T_TOA (no longer available)
November 27, 2012
Earth Engine Data Catalog
Feature
Added USGS/NED (no longer available)
November 20, 2012
Earth Engine Data Catalog
Feature
Added CGIAR/SRTM90_V4 : SRTM Digital Elevation Data Version 4
March 27, 2012
Earth Engine Data Catalog
Feature
Added LANDSAT/MANGROVE_FORESTS : Global Mangrove Forests Distribution, v1 (2000)
March 13, 2012
Earth Engine Data Catalog
Feature
Added LANDSAT/GLS1975 : Landsat Global Land Survey 1975
Added LANDSAT/GLS1975_MOSAIC : Landsat Global Land Survey 1975 Mosaic
December 20, 2011
Earth Engine Data Catalog
Feature
Added DG_GG_2002 (no longer available)
Added DG_GG_2003 (no longer available)
Added DG_GG_2004 (no longer available)
Added DG_GG_2005 (no longer available)
Added DG_GG_2006 (no longer available)
Added DG_GG_2007 (no longer available)
Added DG_GG_2008 (no longer available)
Added DG_GG_2009 (no longer available)
Added DG_GG_2010 (no longer available)
Added DG_GG_2011 (no longer available)
Added DG_GG_ANNUAL (no longer available)
July 26, 2011
Earth Engine Data Catalog
Feature
Added WHBU/NBAR_1YEAR : MODIS 1-year Nadir BRDF-Adjusted Reflectance (NBAR) Mosaic
Added WHBU/NBAR_2YEAR : MODIS 2-year Nadir BRDF-Adjusted Reflectance (NBAR) Mosaic
Added WHBU/NBAR_3YEAR : MODIS 3-year Nadir BRDF-Adjusted Reflectance (NBAR) Mosaic
May 17, 2011
Earth Engine Data Catalog
Feature
Added LANDSAT/L5_L1T_ANNUAL_GREENEST_TOA (no longer available)
Added LANDSAT/L7_L1T_ANNUAL_GREENEST_TOA (no longer available)
March 22, 2011
Earth Engine Data Catalog
Feature
Added LANDSAT/L5 (no longer available)
Added LANDSAT/L5_L1T (no longer available)
Added LANDSAT/L5_L1T_32DAY_BAI (no longer available)
Added LANDSAT/L5_L1T_32DAY_EVI (no longer available)
Added LANDSAT/L5_L1T_32DAY_NBRT (no longer available)
Added LANDSAT/L5_L1T_32DAY_NDSI (no longer available)
Added LANDSAT/L5_L1T_32DAY_NDVI (no longer available)
Added LANDSAT/L5_L1T_32DAY_NDWI (no longer available)
Added LANDSAT/L5_L1T_32DAY_RAW (no longer available)
Added LANDSAT/L5_L1T_32DAY_TOA (no longer available)
Added LANDSAT/L5_L1T_8DAY_BAI (no longer available)
Added LANDSAT/L5_L1T_8DAY_EVI (no longer available)
Added LANDSAT/L5_L1T_8DAY_NBRT (no longer available)
Added LANDSAT/L5_L1T_8DAY_NDSI (no longer available)
Added LANDSAT/L5_L1T_8DAY_NDVI (no longer available)
Added LANDSAT/L5_L1T_8DAY_NDWI (no longer available)
Added LANDSAT/L5_L1T_8DAY_RAW (no longer available)
Added LANDSAT/L5_L1T_8DAY_TOA (no longer available)
Added LANDSAT/L5_L1T_ANNUAL_BAI (no longer available)
Added LANDSAT/L5_L1T_ANNUAL_EVI (no longer available)
Added LANDSAT/L5_L1T_ANNUAL_NBRT (no longer available)
Added LANDSAT/L5_L1T_ANNUAL_NDSI (no longer available)
Added LANDSAT/L5_L1T_ANNUAL_NDVI (no longer available)
Added LANDSAT/L5_L1T_ANNUAL_NDWI (no longer available)
Added LANDSAT/L5_L1T_ANNUAL_RAW (no longer available)
Added LANDSAT/L5_L1T_ANNUAL_TOA (no longer available)
Added LANDSAT/L7 (no longer available)
Added LANDSAT/L7_L1T (no longer available)
Added LANDSAT/L7_L1T_32DAY_BAI (no longer available)
Added LANDSAT/L7_L1T_32DAY_EVI (no longer available)
Added LANDSAT/L7_L1T_32DAY_NBRT (no longer available)
Added LANDSAT/L7_L1T_32DAY_NDSI (no longer available)
Added LANDSAT/L7_L1T_32DAY_NDVI (no longer available)
Added LANDSAT/L7_L1T_32DAY_NDWI (no longer available)
Added LANDSAT/L7_L1T_32DAY_RAW (no longer available)
Added LANDSAT/L7_L1T_32DAY_TOA (no longer available)
Added LANDSAT/L7_L1T_8DAY_BAI (no longer available)
Added LANDSAT/L7_L1T_8DAY_EVI (no longer available)
Added LANDSAT/L7_L1T_8DAY_NBRT (no longer available)
Added LANDSAT/L7_L1T_8DAY_NDSI (no longer available)
Added LANDSAT/L7_L1T_8DAY_NDVI (no longer available)
Added LANDSAT/L7_L1T_8DAY_NDWI (no longer available)
Added LANDSAT/L7_L1T_8DAY_RAW (no longer available)
Added LANDSAT/L7_L1T_8DAY_TOA (no longer available)
Added LANDSAT/L7_L1T_ANNUAL_BAI (no longer available)
Added LANDSAT/L7_L1T_ANNUAL_EVI (no longer available)
Added LANDSAT/L7_L1T_ANNUAL_NBRT (no longer available)
Added LANDSAT/L7_L1T_ANNUAL_NDSI (no longer available)
Added LANDSAT/L7_L1T_ANNUAL_NDVI (no longer available)
Added LANDSAT/L7_L1T_ANNUAL_NDWI (no longer available)
Added LANDSAT/L7_L1T_ANNUAL_RAW (no longer available)
Added LANDSAT/L7_L1T_ANNUAL_TOA (no longer available)
Added MODIS/MCD43A2 (no longer available)
Added MODIS/MCD43A4 (no longer available)
Added MODIS/MCD43A4_BAI (no longer available)
Added MODIS/MCD43A4_EVI (no longer available)
Added MODIS/MCD43A4_NDSI (no longer available)
Added MODIS/MCD43A4_NDVI (no longer available)
Added MODIS/MCD43A4_NDWI (no longer available)
Added MODIS/MOD09GA (no longer available)
Added MODIS/MOD09GA_BAI (no longer available)
Added MODIS/MOD09GA_EVI (no longer available)
Added MODIS/MOD09GA_NDSI (no longer available)
Added MODIS/MOD09GA_NDVI (no longer available)
Added MODIS/MOD09GA_NDWI (no longer available)
Added MODIS/MOD09GQ (no longer available)
Added MODIS/MOD11A2 (no longer available)
Added SPOT/M10_MEX (no longer available)
Added SPOT/PAN_MEX (no longer available)
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
