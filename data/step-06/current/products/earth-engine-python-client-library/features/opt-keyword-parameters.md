---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:10:51.812Z"
product_name: "Earth Engine Python Client Library"
product_slug: "earth-engine-python-client-library"
feature_name: "opt_ keyword parameters"
feature_slug: "opt-keyword-parameters"
latest_feature_date: "2023-12-08"
deprecation_date: "2023-12-08"
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/docs/release-notes"
  - "https://developers.google.com/earth-engine/guides/playground"
  - "https://developers.google.com/earth-engine/guides/auth"
keywords:
  - "opt"
  - "keyword"
  - "parameters"
  - "removes"
  - "the"
  - "prefix"
  - "from"
  - "while"
---

# opt_ keyword parameters

Product: Earth Engine Python Client Library
Coverage: LOW

## Step 02 Summary

Removes the opt_ keyword prefix from parameters while preserving backwards compatibility for existing scripts; deprecated on 2023-12-08.

## Extended Definition

Removes the opt_ keyword prefix from parameters while preserving backwards compatibility for existing scripts; deprecated on 2023-12-08.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground)
- [https://developers.google.com/earth-engine/guides/auth](https://developers.google.com/earth-engine/guides/auth)

## Supporting Pages

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- Note that some parameters needed to be renamed after removing opt since they conflict with Python keywords: ee.Collection.limit() : opt property was converted to prop ee.Image.expression() : opt map was converted to map ee.Filter() : opt filter which was converted to filter Feature Added Export.classifier.toAsset and ee.Classifier.load for exporting and loading saved ee.Classifier.smileCart and ee.Classifier.smileRandomForest classifiers.
- October 07, 2025 Earth Engine Data Catalog Feature Added projects/gcpm041u-lemur/assets/scanfi v12/SCANFI v1 2 : SCANFI: the Spatialized CAnadian National Forest Inventory data product1.2 Added projects/global-pasture-watch/assets/gsvh-30m/v1/short-veg-height m : GPW Annual short vegetation height v1 September 30, 2025 Earth Engine Data Catalog Feature Added COPERNICUS/MARINE/GLOBAL ANALYSISFORECAST BGC 001 028/BIO : Copernicus Global Ocean Bio-Geo-Chemical Forecast - BIO Added COPERNICUS/MARINE/GLOBAL SEA SURFACE/NRT DAILY : Multi Observation Global Ocean Sea Surface Salinity and Sea Surface Density : Daily, Near Real Time Added COPERNICUS/MARINE/GLOBAL SEA SURFACE/REP DAILY : Multi Observation Global Ocean Sea Surface Salinity and Sea Surface Density : Daily, Multi-Year Reprocessed Added NASA/ECOSTRESS/L2T STARS/V2 : ECOSTRESS Tiled Ancillary NDVI and Albedo L2 Global 70 m V002 September 16, 2025 Earth Engine Data Catalog Feature Added COPERNICUS/MARINE/GLOBAL ANALYSISFORECAST PHY DAILY : Global Ocean Physics Analysis and Forecast Daily September 09, 2025 Earth Engine Data Catalog Feature Added ECMWF/ERA5/HOURLY : ERA5 Hourly - ECMWF Climate Reanalysis September 02, 2025 Earth Engine Data Catalog Feature Added JRC/CEMS GLOFAS/FloodHazard/v2 1 : JRC Global River Flood Hazard Maps Version 2.1 August 26, 2025 Earth Engine Data Catalog Feature Added COPERNICUS/MARINE/OC GLO BGC/PLANKTON MULTI 4KM : Global Ocean Colour: Bio-Geo-Chemical, L4, from Satellite Observations, Plankton, Multi-Sensor, 4KM Added COPERNICUS/MARINE/OC GLO BGC/PLANKTON OLCI 300M : Global Ocean Colour: Bio-Geo-Chemical, L4, from Satellite Observations, Plankton, OLCI, 300M Added COPERNICUS/MARINE/OC GLO BGC/REFLECTANCE OLCI 300M : Global Ocean Colour: Bio-Geo-Chemical, L4, from Satellite Observations, Reflectance, OLCI 300M Added COPERNICUS/MARINE/OC GLO BGC/TRANSPARENCY MULTI 4KM : Global Ocean Colour: Bio-Geo-Chemical, L4, from Satellite Observations, Transparency, Multi-Sensor, 4KM Added COPERNICUS/MARINE/OC GLO BGC/TRANSPARENCY OLCI 4KM : Global Ocean Colour: Bio-Geo-Chemical, L4, from Satellite Observations, Transparency, OLCI, 4KM Added JRC/CEMS GLOFAS/FloodHazard/v2 (no longer available) Added projects/global-pasture-watch/assets/ggpp-30m/v1/ugpp m : GPW Annual uncalibrated Gross Primary Productivity (uGPP) v1 Added projects/malariaatlasproject/assets/EVI v061/1km/8-Daily : EVI: Malaria Atlas Project Gap-Filled Enhanced Vegetation Index (8-Daily 1km) Added projects/malariaatlasproject/assets/EVI v061/1km/Annual : EVI: Malaria Atlas Project Gap-Filled Enhanced Vegetation Index (Annual 1km) Added projects/malariaatlasproject/assets/EVI v061/1km/Monthly : EVI: Malaria Atlas Project Gap-Filled Enhanced Vegetation Index (Monthly 1km) Added projects/malariaatlasproject/assets/LST Day v061/1km/8-Daily : LST Day: Malaria Atlas Project Gap-Filled Daytime Land Surface Temperature (8-Daily 1km) Added projects/malariaatlasproject/assets/LST Day v061/1km/Annual : LST Day: Malaria Atlas Project Gap-Filled Daytime Land Surface Temperature (Annual 1km) Added projects/malariaatlasproject/assets/LST Day v061/1km/Monthly : LST Day: Malaria Atlas Project Gap-Filled Daytime Land Surface Temperature (Monthly 1km) Added projects/malariaatlasproject/assets/LST Night v061/1km/8-Daily : LST Night: Malaria Atlas Project Gap-Filled Nighttime Land Surface Temperature (8-Daily 1km) Added projects/malariaatlasproject/assets/LST Night v061/1km/Annual : LST Night: Malaria Atlas Project Gap-Filled Nighttime Land Surface Temperature (Annual 1km) Added projects/malariaatlasproject/assets/LST Night v061/1km/Monthly : LST Night: Malaria Atlas Project Gap-Filled Nighttime Land Surface Temperature (Monthly 1km) Added projects/malariaatlasproject/assets/TCB v061/1km/8-Daily : TCB: Malaria Atlas Project Gap-Filled Tasseled Cap Brightness (8-Daily 1km) Added projects/malariaatlasproject/assets/TCB v061/1km/Annual : TCB: Malaria Atlas Project Gap-Filled Tasseled Cap Brightness (Annual 1km) Added projects/malariaatlasproject/assets/TCB v061/1km/Monthly : TCB: Malaria Atlas Project Gap-Filled Tasseled Cap Brightness (Monthly 1km) Added projects/malariaatlasproject/assets/TCW v061/1km/8-Daily : TCW: Malaria Atlas Project Gap-Filled Tasseled Cap Wetness (8-Daily 1km) Added projects/malariaatlasproject/assets/TCW v061/1km/Annual : TCW: Malaria Atlas Project Gap-Filled Tasseled Cap Wetness (Annual 1km) Added projects/malariaatlasproject/assets/TCW v061/1km/Monthly : TCW: Malaria Atlas Project Gap-Filled Tasseled Cap Wetness (Monthly 1km) August 19, 2025 Earth Engine Data Catalog Feature Added COPERNICUS/MARINE/OC GLO BGC/OPTICS MULTI 4KM : Global Ocean Colour: Bio-Geo-Chemical, L4, from Satellite Observations, Optics, Multi-Sensor 4KM Added COPERNICUS/MARINE/OC GLO BGC/PRIMARY PRODUCTION MULTI 4KM : Global Ocean Colour: Bio-Geo-Chemical, L4, from Satellite Observations, Primary Production, Multi-Sensor 4KM Added COPERNICUS/MARINE/OC GLO BGC/REFLECTANCE MULTI 4KM : Global Ocean Colour: Bio-Geo-Chemical, L4, from Satellite Observations, Reflectance, Multi-Sensor 4KM Added USGS/3DEP/10m collection : USGS 3DEP 10m National Map Seamless (1/3 Arc-Second) August 05, 2025 Earth Engine Data Catalog Feature Added MODIS/061/MYD16A2 : MYD16A2.061: Aqua Net Evapotranspiration 8-Day L4 Global 500m SIN Grid V061 Added NASA/SMAP/SPL4SMGP/008 : SPL4SMGP.008 SMAP L4 Global 3-hourly 9-km Surface and Root Zone Soil Moisture July 29, 2025 Earth Engine Data Catalog Feature Added USFS/GTAC/TreeMap/v2020 : USFS TreeMap v2020 Added USFS/GTAC/TreeMap/v2022 : USFS TreeMap v2022 Added projects/nature-trace/assets/farmscapes/england v1 0 : Farmscapes 2020 Added projects/nature-trace/assets/forest typology/natural forest 2020 v1 0 collection : Natural Forests of the World 2020 July 22, 2025 Earth Engine Data Catalog Feature Added COPERNICUS/MARINE/SATELLITE OCEAN COLOR/V6 : Copernicus Satellite Ocean Color Daily Data July 21, 2025 Earth Engine Server Breaking BACKWARD INCOMPATIBLE The Google Drive main OAuth scope , https://www.googleapis.com/auth/drive has to be requested explicitly for Earth Engine requests that interact with Google Drive.
- March 24, 2026 Earth Engine Data Catalog Feature Added overture-maps/places place : Overture Maps - Places: Place March 17, 2026 Earth Engine Data Catalog Feature Added NASA/VIIRS/002/VNP64A1 : VNP64A1.002: Burned Area Monthly L4 Global 500m SIN Grid Added projects/neon-prod-earthengine/assets/CNC/002 : NEON Canopy Nitrogen Content (CNC) February 24, 2026 Earth Engine Data Catalog Feature Added OPERA/DSWX/L3 V1/HLS : Dynamic Surface Water Extent from Harmonized Landsat Sentinel-2 (DSWx-HLS) V1 Added OPERA/DSWX/L3 V1/S1 : Dynamic Surface Water Extent from Sentinel-1 (DSWx-S1) V1 Added projects/ee-kbas-in-gee/assets/current : WDKBA: World Database of Key Biodiversity Areas (KBAs) - September 2025 February 10, 2026 Earth Engine Data Catalog Feature Added JRC/GFC2020 subtypes/V1 : EC JRC global map of forest types 2020, V1 Added projects/pml evapotranspiration/PML/OUTPUT/PML V22a : PML V2.2a: Coupled Evapotranspiration and Gross Primary Product (GPP) February 03, 2026 Earth Engine Data Catalog Feature Added Earth Big Data/GLOBAL SEASONAL S1/V2019/BACKSCATTER : Global Seasonal Sentinel-1 Interferometric Coherence and Backscatter V2019 Backscatter Added Earth Big Data/GLOBAL SEASONAL S1/V2019/COHERENCE : Global Seasonal Sentinel-1 Interferometric Coherence and Backscatter V2019 Coherence Added Earth Big Data/GLOBAL SEASONAL S1/V2019/DECAY MODEL PARAMETERS : Global Seasonal Sentinel-1 Interferometric Coherence and Backscatter V2019 Decay Model Parameters Added Earth Big Data/GLOBAL SEASONAL S1/V2019/INCIDENCE LAYOVER SHADOW : Global Seasonal Sentinel-1 Interferometric Coherence and Backscatter V2019 Incidence Layover Shadow Added NOAA/CFSV2/FOR6H HARMONIZED : CFSV2: NCEP Climate Forecast System Version 2, 6-Hourly Products Harmonized Added projects/malariaatlasproject/assets/accessibility/accessibility to cities/2015 v1 0 : Malaria Atlas Project Accessibility to Cities 2015 Added projects/malariaatlasproject/assets/accessibility/accessibility to healthcare/2019 : Malaria Atlas Project Accessibility to Healthcare 2019 Added projects/malariaatlasproject/assets/accessibility/accessibility to healthcare/2019 walking only : Malaria Atlas Project Accessibility to Healthcare 2019 (Walking Only) Added projects/malariaatlasproject/assets/accessibility/friction surface/2015 v1 0 : Malaria Atlas Project Global Friction Surface 2015 Added projects/malariaatlasproject/assets/accessibility/friction surface/2019 v5 1 : Malaria Atlas Project Global Friction Surface 2019 Added projects/malariaatlasproject/assets/accessibility/friction surface/2019 v5 1 walking only : Malaria Atlas Project Global Friction Surface 2019 (Walking Only) January 27, 2026 Earth Engine Data Catalog Feature Added IAHS/GFPLAIN250/v0 : GFPLAIN250m: Global 250m Floodplain Dataset January 20, 2026 Earth Engine Code Editor Announcement Earth Engine is introducing noncommercial quota tiers to safeguard shared compute resources and ensure reliable performance for everyone.
- April 11, 2023 Earth Engine Data Catalog Feature Added MODIS/061/MCD19A2 GRANULES : MCD19A2.061: Terra & Aqua MAIAC Land Aerosol Optical Depth Daily 1km Added NOAA/VIIRS/001/VNP43IA2 : VNP43IA2: BRDF/Albedo Quality Daily L3 Global 500m SIN Grid Added WWF/HydroATLAS/v1/Basins/level03 : WWF HydroATLAS Basins Level 03 Added WWF/HydroATLAS/v1/Basins/level04 : WWF HydroATLAS Basins Level 04 Added WWF/HydroATLAS/v1/Basins/level05 : WWF HydroATLAS Basins Level 05 Added WWF/HydroATLAS/v1/Basins/level06 : WWF HydroATLAS Basins Level 06 Added WWF/HydroATLAS/v1/Basins/level07 : WWF HydroATLAS Basins Level 07 Added WWF/HydroATLAS/v1/Basins/level08 : WWF HydroATLAS Basins Level 08 Added WWF/HydroATLAS/v1/Basins/level09 : WWF HydroATLAS Basins Level 09 Added WWF/HydroATLAS/v1/Basins/level10 : WWF HydroATLAS Basins Level 10 Added WWF/HydroATLAS/v1/Basins/level11 : WWF HydroATLAS Basins Level 11 March 21, 2023 Earth Engine Data Catalog Feature Added NOAA/VIIRS/001/VNP15A2H (no longer available) March 14, 2023 Earth Engine Data Catalog Feature Added NASA/GDDP-CMIP6 : NEX-GDDP-CMIP6: NASA Earth Exchange Global Daily Downscaled Climate Projections March 09, 2023 Earth Engine Server Change Changed the default BIGTIFF parameter in the GeoTIFF image export options from IF SAFER to YES , which always generates a BigTiff unless the BIGTIFF parameter is overridden in the formatOptions dictionary parameter.

### Earth Engine Code Editor \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground)
- Source ID: `site-docs-root`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- If the task is fully specified at creation time (that is, the call to Export has all necessary parameters), hold ctrl or ⌘ while clicking Run to submit the task without showing the dialog.
- The control options include preventing the script from automatically running, and hiding the code pane when someone opens the shared link.
- The search tool is the text box at the top of the Code Editor that says 'Search places and datasets...' Type the name of a data product, sensor, or other keyword into the search bar and click the search button to see a list of matching places, raster and table datasets.
- Click the Palette radio button and specify a custom palette by adding colors ( add ), removing colors ( remove ) or manually entering a comma separated list of hex strings ( edit ) Click Apply to apply the visualization parameters to the current display.

### "Authentication and Initialization \_|\_ Google Earth Engine \_|\_ Google\

- URL: [https://developers.google.com/earth-engine/guides/auth](https://developers.google.com/earth-engine/guides/auth)
- Source ID: `site-docs-root-2`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- Project Needed Scopes Settable Local CLI Needed Project Owner localhost local Y Y N N colab remote Y N N N gcloud both Y Y N N notebook both Y Y N Y Credentials for Service Accounts and Compute Engine ee.Initialize() will use Earth Engine credentials (which ee.Authenticate() stores in /.config/earthengine/credentials ) or retrieve credentials from google.auth.default() , but if necessary you can pass a credentials= argument to use credentials from elsewhere, bypassing these defaults.
- Authentication details The aim of the Earth Engine authentication flows is to get a security "token" from your signed-in account which can be stored to give your scripts permission to access your data.
- Technical notes For the technically curious: the need for these different credential creation mechanisms comes from the need to pass credentials to a known and trusted environment.
- If the Google Cloud troubleshooting options don't work, try running earthengine set project YOUR PROJECT ID or gcloud auth application-default set-quota-project YOUR PROJECT ID .

