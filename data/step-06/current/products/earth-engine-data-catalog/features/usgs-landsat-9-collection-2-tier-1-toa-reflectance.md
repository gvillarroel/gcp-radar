---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T12:40:58.631Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "USGS Landsat 9 Collection 2 Tier 1 TOA Reflectance"
feature_slug: "usgs-landsat-9-collection-2-tier-1-toa-reflectance"
latest_feature_date: "2022-03-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/guides/landsat"
  - "https://developers.google.com/earth-engine/datasets/catalog"
  - "https://developers.google.com/earth-engine/docs/release-notes"
keywords:
  - "usgs"
  - "landsat"
  - "collection"
  - "tier"
  - "toa"
  - "reflectance"
  - "top"
  - "of"
---

# USGS Landsat 9 Collection 2 Tier 1 TOA Reflectance

Product: Earth Engine Data Catalog
Coverage: LOW

## Step 02 Summary

Top-of-atmosphere reflectance for Landsat 9 Collection 2, Tier 1.

## Extended Definition

Top-of-atmosphere reflectance for Landsat 9 Collection 2, Tier 1.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/guides/landsat](https://developers.google.com/earth-engine/guides/landsat)
- [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)

## Supporting Pages

### Landsat Algorithms \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/landsat](https://developers.google.com/earth-engine/guides/landsat)
- Source ID: `site-docs-reference-2`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- TOA ( raw ) m . add layer ( toa , { 'bands' : [ 'B4' , 'B3' , 'B2' ], 'max' : 0.2 }, 'toa reflectance' ) m Surface reflectance Landsat surface reflectance (SR) data are available in Earth Engine as a copy of the USGS Collection 2, Level 2 archive.
- Landsat . calibratedRadiance ( raw ); Map . addLayer ( radiance , { bands : [ 'B4' , 'B3' , 'B2' ], max : 90 }, 'radiance' ); // Convert the raw data to top-of-atmosphere reflectance. var toa = ee .
- Landsat . calibratedRadiance ( raw ) m . add layer ( radiance , { 'bands' : [ 'B4' , 'B3' , 'B2' ], 'max' : 90 }, 'radiance' ) Convert the raw data to top-of-atmosphere reflectance. toa = ee .
- In addition, for each collection that contains T1 or T2 images, TOA (top-of-atmosphere reflectance), SR (surface reflectance), and LST (land surface temperature) products are offered.

### Earth Engine Data Catalog \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- This includes Systematic terrain (L1GT) and Systematic (L1GS) processed scenes, as well as any L1TP scenes that do … c2 global l4 landsat lt4 radiance USGS Landsat 4 TM Collection 2 Tier 2 TOA Reflectance Landsat 4 TM Collection 2 Tier 2 calibrated top-of-atmosphere (TOA) reflectance.
- This includes Systematic terrain (L1GT) and Systematic (L1GS) processed scenes, as well as any L1TP scenes that do … c2 global l5 landsat lt5 radiance USGS Landsat 5 TM Collection 2 Tier 2 TOA Reflectance Landsat 5 TM Collection 2 Tier 2 calibrated top-of-atmosphere (TOA) reflectance.
- This includes Systematic terrain (L1GT) and Systematic (L1GS) processed scenes, as well as any L1TP scenes that do not … c2 global l8 landsat lc8 oli-tirs USGS Landsat 8 Collection 2 Tier 2 TOA Reflectance Landsat 8 Collection 2 Tier 2 calibrated top-of-atmosphere (TOA) reflectance.
- This includes Systematic terrain (L1GT) and Systematic (L1GS) processed scenes, as well as any L1TP scenes that do not … c2 global l9 landsat lc9 oli-tirs USGS Landsat 9 Collection 2 Tier 2 TOA Reflectance Landsat 9 Collection 2 Tier 2 calibrated top-of-atmosphere (TOA) reflectance.

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference-2`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- March 29, 2022 Earth Engine Data Catalog Feature Added MODIS/061/MYD09GA : MYD09GA.061 Aqua Surface Reflectance Daily Global 1km and 500m Added MODIS/061/MYD09GQ : MYD09GQ.061 Aqua Surface Reflectance Daily Global 250m Added USGS/NLCD RELEASES/2019 REL/RCMAP/V4/COVER (no longer available) March 22, 2022 Earth Engine Data Catalog Feature Added LARSE/GEDI/GEDI02 A 002 : GEDI L2A Vector Canopy Top Height (Version 2) March 08, 2022 Earth Engine Data Catalog Feature Added LANDSAT/LC09/C02/T1 : USGS Landsat 9 Collection 2 Tier 1 Raw Scenes Added LANDSAT/LC09/C02/T1 L2 : USGS Landsat 9 Level 2, Collection 2, Tier 1 Added LANDSAT/LC09/C02/T1 RT (no longer available) Added LANDSAT/LC09/C02/T1 RT TOA (no longer available) Added LANDSAT/LC09/C02/T1 TOA : USGS Landsat 9 Collection 2 Tier 1 TOA Reflectance Added LANDSAT/LC09/C02/T2 L2 : USGS Landsat 9 Level 2, Collection 2, Tier 2 Added LARSE/GEDI/GEDI02 A 002 MONTHLY : GEDI L2A Raster Canopy Top Height (Version 2) Added MODIS/061/MOD09GA : MOD09GA.061 Terra Surface Reflectance Daily Global 1km and 500m Added MODIS/061/MOD09GQ : MOD09GQ.061 Terra Surface Reflectance Daily Global 250m Added MODIS/061/MOD11A1 : MOD11A1.061 Terra Land Surface Temperature and Emissivity Daily Global 1km March 01, 2022 Earth Engine Data Catalog Feature Added DOE/ORNL/LandScan HD/Ukraine 202201 : LandScan High Definition Data for Ukraine, January 2022 February 22, 2022 Earth Engine Data Catalog Feature Added COPERNICUS/S2 SR HARMONIZED : Harmonized Sentinel-2 MSI: MultiSpectral Instrument, Level-2A (SR) Added USGS/NLCD RELEASES/2019 REL/NLCD : NLCD 2019: USGS National Land Cover Database, 2019 release February 18, 2022 Earth Engine Code Editor Change Improved the user interface for Earth Engine App creation and management flows .
- May 09, 2017 Earth Engine Data Catalog Feature Added LANDSAT/LC08/C01/T1 (no longer available) Added LANDSAT/LC08/C01/T1 RT (no longer available) Added LANDSAT/LC08/C01/T1 RT TOA (no longer available) Added LANDSAT/LC08/C01/T1 TOA (no longer available) Added LANDSAT/LE07/C01/T1 RT (no longer available) Added LANDSAT/LE07/C01/T1 RT TOA (no longer available) Added MODIS/006/MOD09GA (no longer available) Added MODIS/006/MOD09GQ (no longer available) Added MODIS/006/MOD11A1 (no longer available) Added MODIS/006/MYD09GA (no longer available) Added MODIS/006/MYD09GQ (no longer available) Added MODIS/006/MYD11A1 (no longer available) Added MODIS/MOD09GA 006 BAI : MODIS Terra Daily BAI Added MODIS/MOD09GA 006 EVI : MODIS Terra Daily EVI Added MODIS/MOD09GA 006 NDSI : MODIS Terra Daily NDSI Added MODIS/MOD09GA 006 NDVI : MODIS Terra Daily NDVI Added MODIS/MOD09GA 006 NDWI : MODIS Terra Daily NDWI Added MODIS/MYD09GA 006 BAI : MODIS Aqua Daily BAI Added MODIS/MYD09GA 006 EVI : MODIS Aqua Daily EVI Added MODIS/MYD09GA 006 NDSI : MODIS Aqua Daily NDSI Added MODIS/MYD09GA 006 NDVI : MODIS Aqua Daily NDVI Added MODIS/MYD09GA 006 NDWI : MODIS Aqua Daily NDWI May 02, 2017 Earth Engine Data Catalog Feature Added EPA/Ecoregions/2013/L3 : US EPA Ecoregions (Level III) Added EPA/Ecoregions/2013/L4 : US EPA Ecoregions (Level IV) Added GLIMS/2016 (no longer available) Added NOAA/CDR/GRIDSAT-B1/V2 : NOAA CDR GRIDSAT-B1: Geostationary IR Channel Brightness Temperature Added TIGER/2010/Blocks : TIGER: US Census Blocks Added TIGER/2010/Tracts DP1 : TIGER: US Census Tracts Demographic - Profile 1 Added TIGER/2016/Roads : TIGER: US Census Roads Added USDOS/LSIB/2013 (no longer available) Added USGS/WBD/2017/HUC02 : HUC02: USGS Watershed Boundary Dataset of Regions Added USGS/WBD/2017/HUC04 : HUC04: USGS Watershed Boundary Dataset of Subregions Added USGS/WBD/2017/HUC06 : HUC06: USGS Watershed Boundary Dataset of Basins Added USGS/WBD/2017/HUC08 : HUC08: USGS Watershed Boundary Dataset of Subbasins Added USGS/WBD/2017/HUC10 : HUC10: USGS Watershed Boundary Dataset of Watersheds Added USGS/WBD/2017/HUC12 : HUC12: USGS Watershed Boundary Dataset of Subwatersheds April 25, 2017 Earth Engine Data Catalog Feature Added MODIS/055/MOD17A3 (no longer available) Added MODIS/NTSG/MOD16A2/105 : MOD16A2: MODIS Global Terrestrial Evapotranspiration 8-Day Global 1km April 18, 2017 Earth Engine Data Catalog Feature Added MODIS/006/MODOCGA : MODOCGA.006 Terra Ocean Reflectance Daily Global 1km Added MODIS/006/MYDOCGA : MYDOCGA.006 Aqua Ocean Reflectance Daily Global 1km Added NOAA/CDR/SST PATHFINDER/V53 : NOAA AVHRR Pathfinder Version 5.3 Collated Global 4km Sea Surface Temperature Added NOAA/VIIRS/001/VNP09GA (no longer available) April 11, 2017 Earth Engine Data Catalog Feature Added NOAA/CDR/ATMOS NEAR SURFACE/V2 : NOAA CDR: Ocean Near-Surface Atmospheric Properties, Version 2 Added NOAA/CDR/HEAT FLUXES/V2 : NOAA CDR: Ocean Heat Fluxes, Version 2 Added NOAA/CDR/SST WHOI/V2 : NOAA CDR WHOI: Sea Surface Temperature, Version 2 April 04, 2017 Earth Engine Data Catalog Feature Added NASA/GLDAS/V021/NOAH/G025/T3H : GLDAS-2.1: Global Land Data Assimilation System Added NASA/NEX-GDDP : NEX-GDDP: NASA Earth Exchange Global Daily Downscaled Climate Projections March 28, 2017 Earth Engine Data Catalog Feature Added NOAA/CDR/AVHRR/LAI FAPAR/V4 (no longer available) Added NOAA/CDR/AVHRR/NDVI/V4 (no longer available) Added NOAA/CDR/AVHRR/SR/V4 (no longer available) March 21, 2017 Earth Engine Data Catalog Feature Added NOAA/CDR/OISST/V2 (no longer available) Added NOAA/VIIRS/VNP09GA/001 (no longer available) March 16, 2017 Earth Engine Server Change Enable setting properties on image collection and folder assets.
- June 21, 2022 Earth Engine Data Catalog Feature Added WWF/HydroATLAS/v1/Basins/level12 : WWF HydroATLAS Basins Level 12 June 14, 2022 Earth Engine Data Catalog Feature Added LANDSAT/LM01/C02/T1 : USGS Landsat 1 MSS Collection 2 Tier 1 Raw Scenes Added LANDSAT/LM01/C02/T2 : USGS Landsat 1 MSS Collection 2 Tier 2 Raw Scenes Added LANDSAT/LM02/C02/T1 : USGS Landsat 2 MSS Collection 2 Tier 1 Raw Scenes Added LANDSAT/LM02/C02/T2 : USGS Landsat 2 MSS Collection 2 Tier 2 Raw Scenes Added LANDSAT/LM03/C02/T1 : USGS Landsat 3 MSS Collection 2 Tier 1 Raw Scenes Added LANDSAT/LM03/C02/T2 : USGS Landsat 3 MSS Collection 2 Tier 2 Raw Scenes Added LANDSAT/LM04/C02/T1 : USGS Landsat 4 MSS Collection 2 Tier 1 Raw Scenes Added LANDSAT/LM04/C02/T2 : USGS Landsat 4 MSS Collection 2 Tier 2 Raw Scenes Added LANDSAT/LM05/C02/T1 : USGS Landsat 5 MSS Collection 2 Tier 1 Raw Scenes Added LANDSAT/LT04/C02/T1 : USGS Landsat 4 TM Collection 2 Tier 1 Raw Scenes Added LANDSAT/LT04/C02/T1 TOA : USGS Landsat 4 TM Collection 2 Tier 1 TOA Reflectance Added LANDSAT/LT04/C02/T2 : USGS Landsat 4 TM Collection 2 Tier 2 Raw Scenes Added LANDSAT/LT04/C02/T2 TOA : USGS Landsat 4 TM Collection 2 Tier 2 TOA Reflectance June 07, 2022 Earth Engine Data Catalog Feature Added CAS/IGSNRR/PML/V2 v017 (no longer available) Added TIGER/2020/BG : TIGER: US Census Block Groups (BG) 2020 Added TIGER/2020/TABBLOCK20 : TIGER: 2020 Tabulation (Census) Block Added TIGER/2020/TRACT : TIGER: US Census Tracts May 27, 2022 Earth Engine Code Editor Feature Added EECU stats on exports in the Code Editor and Tasks page.
- December 14, 2021 Earth Engine Data Catalog Feature Added JAXA/GCOM-C/L3/LAND/LAI/V3 : GCOM-C/SGLI L3 Leaf Area Index (V3) Added JAXA/GCOM-C/L3/LAND/LST/V3 : GCOM-C/SGLI L3 Land Surface Temperature (V3) Added JAXA/GCOM-C/L3/OCEAN/CHLA/V3 : GCOM-C/SGLI L3 Chlorophyll-a Concentration (V3) Added JAXA/GCOM-C/L3/OCEAN/SST/V3 : GCOM-C/SGLI L3 Sea Surface Temperature (V3) Added LANDSAT/LC08/C02/T1 RT TOA : USGS Landsat 8 Collection 2 Tier 1 and Real-Time data TOA Reflectance Added LANDSAT/LC08/C02/T1 TOA : USGS Landsat 8 Collection 2 Tier 1 TOA Reflectance Added LANDSAT/LC08/C02/T2 TOA : USGS Landsat 8 Collection 2 Tier 2 TOA Reflectance Added LANDSAT/LE07/C02/T1 RT TOA : USGS Landsat 7 Collection 2 Tier 1 and Real-Time data TOA Reflectance Added LANDSAT/LE07/C02/T1 TOA : USGS Landsat 7 Collection 2 Tier 1 TOA Reflectance Added LANDSAT/LE07/C02/T2 TOA : USGS Landsat 7 Collection 2 Tier 2 TOA Reflectance Added LANDSAT/LT05/C02/T1 TOA : USGS Landsat 5 TM Collection 2 Tier 1 TOA Reflectance Added LANDSAT/LT05/C02/T2 TOA : USGS Landsat 5 TM Collection 2 Tier 2 TOA Reflectance Added USFS/GTAC/LCMS/v2020-6 (no longer available) December 13, 2021 Earth Engine Code Editor Change Reinstated the allowHtml option for ui.Chart , while continuing to disallow external image display.

