---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:22:38.410Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "ee.Geometry.coveringGrid"
feature_slug: "ee-geometry-coveringgrid"
latest_feature_date: "2021-11-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multigeometry"
  - "https://developers.google.com/earth-engine/docs/release-notes"
  - "https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multilinestring"
keywords:
  - "ee"
  - "geometry"
  - "coveringgrid"
  - "returns"
  - "collection"
  - "of"
  - "1x1"
  - "rectangles"
---

# ee.Geometry.coveringGrid

Product: Earth Engine Server
Coverage: LOW

## Step 02 Summary

Returns a collection of 1x1 rectangles that cover a geometry in a specified projection.

## Extended Definition

Returns a collection of 1x1 rectangles that cover a geometry in a specified projection.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multigeometry](https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multigeometry)
- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- [https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multilinestring](https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multilinestring)

## Supporting Pages

### "ee.Algorithms.GeometryConstructors.MultiGeometry \_|\_ Google Earth Engine\

- URL: [https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multigeometry](https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multigeometry)
- Source ID: `site-docs-reference`
- Final score: 144
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Usage Returns ee.Algorithms.GeometryConstructors.MultiGeometry(geometries, crs , geodesic , maxError ) Geometry Argument Type Details geometries List The list of geometries for the MultiGeometry. crs Projection, default: null The coordinate reference system of the coordinates.
- Home Products Google Earth Engine Reference Send feedback ee.Algorithms.GeometryConstructors.MultiGeometry Stay organized with collections Save and categorize content based on your preferences.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-07-13 UTC."],[],[]]
- The default is the geodesic state of the inputs, or true if the inputs are numbers. maxError ErrorMargin, default: null Max error when input geometry must be reprojected to an explicitly requested result projection or geodesic state.

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- Earth Engine Server Feature Added ee.Geometry.coveringGrid , which returns a collection of 1x1 rectangles that cover a geometry in a specified projection.
- Earth Engine Server Feature Added ee.Geometry.BBox() , which simplifies creation of rectangles of latitude and longitude.
- October 07, 2025 Earth Engine Data Catalog Feature Added projects/gcpm041u-lemur/assets/scanfi v12/SCANFI v1 2 : SCANFI: the Spatialized CAnadian National Forest Inventory data product1.2 Added projects/global-pasture-watch/assets/gsvh-30m/v1/short-veg-height m : GPW Annual short vegetation height v1 September 30, 2025 Earth Engine Data Catalog Feature Added COPERNICUS/MARINE/GLOBAL ANALYSISFORECAST BGC 001 028/BIO : Copernicus Global Ocean Bio-Geo-Chemical Forecast - BIO Added COPERNICUS/MARINE/GLOBAL SEA SURFACE/NRT DAILY : Multi Observation Global Ocean Sea Surface Salinity and Sea Surface Density : Daily, Near Real Time Added COPERNICUS/MARINE/GLOBAL SEA SURFACE/REP DAILY : Multi Observation Global Ocean Sea Surface Salinity and Sea Surface Density : Daily, Multi-Year Reprocessed Added NASA/ECOSTRESS/L2T STARS/V2 : ECOSTRESS Tiled Ancillary NDVI and Albedo L2 Global 70 m V002 September 16, 2025 Earth Engine Data Catalog Feature Added COPERNICUS/MARINE/GLOBAL ANALYSISFORECAST PHY DAILY : Global Ocean Physics Analysis and Forecast Daily September 09, 2025 Earth Engine Data Catalog Feature Added ECMWF/ERA5/HOURLY : ERA5 Hourly - ECMWF Climate Reanalysis September 02, 2025 Earth Engine Data Catalog Feature Added JRC/CEMS GLOFAS/FloodHazard/v2 1 : JRC Global River Flood Hazard Maps Version 2.1 August 26, 2025 Earth Engine Data Catalog Feature Added COPERNICUS/MARINE/OC GLO BGC/PLANKTON MULTI 4KM : Global Ocean Colour: Bio-Geo-Chemical, L4, from Satellite Observations, Plankton, Multi-Sensor, 4KM Added COPERNICUS/MARINE/OC GLO BGC/PLANKTON OLCI 300M : Global Ocean Colour: Bio-Geo-Chemical, L4, from Satellite Observations, Plankton, OLCI, 300M Added COPERNICUS/MARINE/OC GLO BGC/REFLECTANCE OLCI 300M : Global Ocean Colour: Bio-Geo-Chemical, L4, from Satellite Observations, Reflectance, OLCI 300M Added COPERNICUS/MARINE/OC GLO BGC/TRANSPARENCY MULTI 4KM : Global Ocean Colour: Bio-Geo-Chemical, L4, from Satellite Observations, Transparency, Multi-Sensor, 4KM Added COPERNICUS/MARINE/OC GLO BGC/TRANSPARENCY OLCI 4KM : Global Ocean Colour: Bio-Geo-Chemical, L4, from Satellite Observations, Transparency, OLCI, 4KM Added JRC/CEMS GLOFAS/FloodHazard/v2 (no longer available) Added projects/global-pasture-watch/assets/ggpp-30m/v1/ugpp m : GPW Annual uncalibrated Gross Primary Productivity (uGPP) v1 Added projects/malariaatlasproject/assets/EVI v061/1km/8-Daily : EVI: Malaria Atlas Project Gap-Filled Enhanced Vegetation Index (8-Daily 1km) Added projects/malariaatlasproject/assets/EVI v061/1km/Annual : EVI: Malaria Atlas Project Gap-Filled Enhanced Vegetation Index (Annual 1km) Added projects/malariaatlasproject/assets/EVI v061/1km/Monthly : EVI: Malaria Atlas Project Gap-Filled Enhanced Vegetation Index (Monthly 1km) Added projects/malariaatlasproject/assets/LST Day v061/1km/8-Daily : LST Day: Malaria Atlas Project Gap-Filled Daytime Land Surface Temperature (8-Daily 1km) Added projects/malariaatlasproject/assets/LST Day v061/1km/Annual : LST Day: Malaria Atlas Project Gap-Filled Daytime Land Surface Temperature (Annual 1km) Added projects/malariaatlasproject/assets/LST Day v061/1km/Monthly : LST Day: Malaria Atlas Project Gap-Filled Daytime Land Surface Temperature (Monthly 1km) Added projects/malariaatlasproject/assets/LST Night v061/1km/8-Daily : LST Night: Malaria Atlas Project Gap-Filled Nighttime Land Surface Temperature (8-Daily 1km) Added projects/malariaatlasproject/assets/LST Night v061/1km/Annual : LST Night: Malaria Atlas Project Gap-Filled Nighttime Land Surface Temperature (Annual 1km) Added projects/malariaatlasproject/assets/LST Night v061/1km/Monthly : LST Night: Malaria Atlas Project Gap-Filled Nighttime Land Surface Temperature (Monthly 1km) Added projects/malariaatlasproject/assets/TCB v061/1km/8-Daily : TCB: Malaria Atlas Project Gap-Filled Tasseled Cap Brightness (8-Daily 1km) Added projects/malariaatlasproject/assets/TCB v061/1km/Annual : TCB: Malaria Atlas Project Gap-Filled Tasseled Cap Brightness (Annual 1km) Added projects/malariaatlasproject/assets/TCB v061/1km/Monthly : TCB: Malaria Atlas Project Gap-Filled Tasseled Cap Brightness (Monthly 1km) Added projects/malariaatlasproject/assets/TCW v061/1km/8-Daily : TCW: Malaria Atlas Project Gap-Filled Tasseled Cap Wetness (8-Daily 1km) Added projects/malariaatlasproject/assets/TCW v061/1km/Annual : TCW: Malaria Atlas Project Gap-Filled Tasseled Cap Wetness (Annual 1km) Added projects/malariaatlasproject/assets/TCW v061/1km/Monthly : TCW: Malaria Atlas Project Gap-Filled Tasseled Cap Wetness (Monthly 1km) August 19, 2025 Earth Engine Data Catalog Feature Added COPERNICUS/MARINE/OC GLO BGC/OPTICS MULTI 4KM : Global Ocean Colour: Bio-Geo-Chemical, L4, from Satellite Observations, Optics, Multi-Sensor 4KM Added COPERNICUS/MARINE/OC GLO BGC/PRIMARY PRODUCTION MULTI 4KM : Global Ocean Colour: Bio-Geo-Chemical, L4, from Satellite Observations, Primary Production, Multi-Sensor 4KM Added COPERNICUS/MARINE/OC GLO BGC/REFLECTANCE MULTI 4KM : Global Ocean Colour: Bio-Geo-Chemical, L4, from Satellite Observations, Reflectance, Multi-Sensor 4KM Added USGS/3DEP/10m collection : USGS 3DEP 10m National Map Seamless (1/3 Arc-Second) August 05, 2025 Earth Engine Data Catalog Feature Added MODIS/061/MYD16A2 : MYD16A2.061: Aqua Net Evapotranspiration 8-Day L4 Global 500m SIN Grid V061 Added NASA/SMAP/SPL4SMGP/008 : SPL4SMGP.008 SMAP L4 Global 3-hourly 9-km Surface and Root Zone Soil Moisture July 29, 2025 Earth Engine Data Catalog Feature Added USFS/GTAC/TreeMap/v2020 : USFS TreeMap v2020 Added USFS/GTAC/TreeMap/v2022 : USFS TreeMap v2022 Added projects/nature-trace/assets/farmscapes/england v1 0 : Farmscapes 2020 Added projects/nature-trace/assets/forest typology/natural forest 2020 v1 0 collection : Natural Forests of the World 2020 July 22, 2025 Earth Engine Data Catalog Feature Added COPERNICUS/MARINE/SATELLITE OCEAN COLOR/V6 : Copernicus Satellite Ocean Color Daily Data July 21, 2025 Earth Engine Server Breaking BACKWARD INCOMPATIBLE The Google Drive main OAuth scope , https://www.googleapis.com/auth/drive has to be requested explicitly for Earth Engine requests that interact with Google Drive.
- August 04, 2020 Earth Engine Data Catalog Feature Added MODIS/061/MOD08 M3 : MOD08 M3.061 Terra Atmosphere Monthly Global Product Added MODIS/061/MYD08 M3 : MYD08 M3.061 Aqua Atmosphere Monthly Global Product Added NASA/ORNL/biomass carbon density/v1 : Global Aboveground and Belowground Biomass Carbon Density Maps Added NOAA/GOES/16/MCMIPC : GOES-16 MCMIPC Series ABI Level 2 Cloud and Moisture Imagery CONUS Added NOAA/GOES/16/MCMIPF : GOES-16 MCMIPF Series ABI Level 2 Cloud and Moisture Imagery Full Disk Added NOAA/GOES/17/MCMIPC : GOES-17 MCMIPC Series ABI Level 2 Cloud and Moisture Imagery CONUS Added NOAA/GOES/17/MCMIPF : GOES-17 MCMIPF Series ABI Level 2 Cloud and Moisture Imagery Full Disk July 21, 2020 Earth Engine Data Catalog Feature Added GRIDMET/DROUGHT : GRIDMET DROUGHT: CONUS Drought Indices Added LANDFIRE/Fire/FRG/v1 2 0 : LANDFIRE FRG (Fire Regime Groups) v1.2.0 Added LANDFIRE/Fire/MFRI/v1 2 0 : LANDFIRE MFRI (Mean Fire Return Interval) v1.2.0 Added LANDFIRE/Fire/PLS/v1 2 0 : LANDFIRE PLS (Percent Low-severity Fire) v1.2.0 Added LANDFIRE/Fire/PMS/v1 2 0 : LANDFIRE PMS (Percent of Mixed-severity Fire) v1.2.0 Added LANDFIRE/Fire/PRS/v1 2 0 : LANDFIRE PRS (Percent of Replacement-severity Fire) v1.2.0 Added LANDFIRE/Fire/SClass/v1 4 0 : LANDFIRE SClass (Succession Classes) v1.4.0 Added LANDFIRE/Fire/VCC/v1 4 0 : LANDFIRE VCC (Vegetation Condition Class) v1.4.0 Added LANDFIRE/Fire/VDep/v1 4 0 : LANDFIRE VDep (Vegetation Departure) v1.4.0 Added LANDFIRE/Vegetation/BPS/v1 4 0 : LANDFIRE BPS (Biophysical Settings) v1.4.0 Added LANDFIRE/Vegetation/ESP/v1 2 0/AK : LANDFIRE ESP AK (Environmental Site Potential) v1.2.0 Added LANDFIRE/Vegetation/ESP/v1 2 0/CONUS : LANDFIRE ESP CONUS (Environmental Site Potential) v1.2.0 Added LANDFIRE/Vegetation/ESP/v1 2 0/HI : LANDFIRE ESP HI (Environmental Site Potential) v1.2.0 Added LANDFIRE/Vegetation/EVC/v1 4 0 : LANDFIRE EVC (Existing Vegetation Cover) v1.4.0 Added LANDFIRE/Vegetation/EVH/v1 4 0 : LANDFIRE EVH (Existing Vegetation Height) v1.4.0 Added LANDFIRE/Vegetation/EVT/v1 4 0 : LANDFIRE EVT (Existing Vegetation Type) v1.4.0 July 14, 2020 Earth Engine Data Catalog Feature Added ESA/CCI/FireCCI/5 1 : FireCCI51: MODIS Fire cci Burned Area Pixel Product, Version 5.1 Added JRC/GSW1 2/GlobalSurfaceWater : JRC Global Surface Water Mapping Layers, v1.2 [deprecated] Added JRC/GSW1 2/Metadata (no longer available) Added JRC/GSW1 2/MonthlyHistory (no longer available) Added JRC/GSW1 2/MonthlyRecurrence (no longer available) Added JRC/GSW1 2/YearlyHistory (no longer available) July 07, 2020 Earth Engine Server Fixed Added ee.Algorithms.ObjectType() , which returns the type of any computed object.

### "ee.Algorithms.GeometryConstructors.MultiLineString \_|\_ Google Earth Engine\

- URL: [https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multilinestring](https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multilinestring)
- Source ID: `site-docs-reference`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Usage Returns ee.Algorithms.GeometryConstructors.MultiLineString(coordinates, crs , geodesic , maxError ) Geometry Argument Type Details coordinates List The list of LineStrings, or to wrap a single LineString, the list of Points or pairs of Numbers in x,y order. crs Projection, default: null The coordinate reference system of the coordinates.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-07-13 UTC."],[],["The function MultiLineString creates a geometry object from a list of coordinates.
- Home Products Google Earth Engine Reference Send feedback ee.Algorithms.GeometryConstructors.MultiLineString Stay organized with collections Save and categorize content based on your preferences.
- The function returns a Geometry object representing the constructed MultiLineString. coordinates can be a list of LineStrings, points or a list of number pairs in x,y order.\n"]]

