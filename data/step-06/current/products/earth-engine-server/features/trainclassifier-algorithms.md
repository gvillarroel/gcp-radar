---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:22:38.429Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "trainClassifier algorithms"
feature_slug: "trainclassifier-algorithms"
latest_feature_date: "2017-12-20"
deprecation_date: "2017-12-20"
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/docs/release-notes"
  - "https://developers.google.com/earth-engine/guides/best_practices"
  - "https://developers.google.com/earth-engine/guides/landsat"
keywords:
  - "trainclassifier"
  - "algorithms"
  - "the"
  - "are"
  - "deprecated"
  - "and"
  - "should"
  - "be"
---

# trainClassifier algorithms

Product: Earth Engine Server
Coverage: LOW

## Step 02 Summary

The trainClassifier algorithms are deprecated and should be replaced with Classifier.train; deprecated on 2017-12-20.

## Extended Definition

The trainClassifier algorithms are deprecated and should be replaced with Classifier.train; deprecated on 2017-12-20.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- [https://developers.google.com/earth-engine/guides/best_practices](https://developers.google.com/earth-engine/guides/best_practices)
- [https://developers.google.com/earth-engine/guides/landsat](https://developers.google.com/earth-engine/guides/landsat)

## Supporting Pages

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- August 04, 2020 Earth Engine Data Catalog Feature Added MODIS/061/MOD08 M3 : MOD08 M3.061 Terra Atmosphere Monthly Global Product Added MODIS/061/MYD08 M3 : MYD08 M3.061 Aqua Atmosphere Monthly Global Product Added NASA/ORNL/biomass carbon density/v1 : Global Aboveground and Belowground Biomass Carbon Density Maps Added NOAA/GOES/16/MCMIPC : GOES-16 MCMIPC Series ABI Level 2 Cloud and Moisture Imagery CONUS Added NOAA/GOES/16/MCMIPF : GOES-16 MCMIPF Series ABI Level 2 Cloud and Moisture Imagery Full Disk Added NOAA/GOES/17/MCMIPC : GOES-17 MCMIPC Series ABI Level 2 Cloud and Moisture Imagery CONUS Added NOAA/GOES/17/MCMIPF : GOES-17 MCMIPF Series ABI Level 2 Cloud and Moisture Imagery Full Disk July 21, 2020 Earth Engine Data Catalog Feature Added GRIDMET/DROUGHT : GRIDMET DROUGHT: CONUS Drought Indices Added LANDFIRE/Fire/FRG/v1 2 0 : LANDFIRE FRG (Fire Regime Groups) v1.2.0 Added LANDFIRE/Fire/MFRI/v1 2 0 : LANDFIRE MFRI (Mean Fire Return Interval) v1.2.0 Added LANDFIRE/Fire/PLS/v1 2 0 : LANDFIRE PLS (Percent Low-severity Fire) v1.2.0 Added LANDFIRE/Fire/PMS/v1 2 0 : LANDFIRE PMS (Percent of Mixed-severity Fire) v1.2.0 Added LANDFIRE/Fire/PRS/v1 2 0 : LANDFIRE PRS (Percent of Replacement-severity Fire) v1.2.0 Added LANDFIRE/Fire/SClass/v1 4 0 : LANDFIRE SClass (Succession Classes) v1.4.0 Added LANDFIRE/Fire/VCC/v1 4 0 : LANDFIRE VCC (Vegetation Condition Class) v1.4.0 Added LANDFIRE/Fire/VDep/v1 4 0 : LANDFIRE VDep (Vegetation Departure) v1.4.0 Added LANDFIRE/Vegetation/BPS/v1 4 0 : LANDFIRE BPS (Biophysical Settings) v1.4.0 Added LANDFIRE/Vegetation/ESP/v1 2 0/AK : LANDFIRE ESP AK (Environmental Site Potential) v1.2.0 Added LANDFIRE/Vegetation/ESP/v1 2 0/CONUS : LANDFIRE ESP CONUS (Environmental Site Potential) v1.2.0 Added LANDFIRE/Vegetation/ESP/v1 2 0/HI : LANDFIRE ESP HI (Environmental Site Potential) v1.2.0 Added LANDFIRE/Vegetation/EVC/v1 4 0 : LANDFIRE EVC (Existing Vegetation Cover) v1.4.0 Added LANDFIRE/Vegetation/EVH/v1 4 0 : LANDFIRE EVH (Existing Vegetation Height) v1.4.0 Added LANDFIRE/Vegetation/EVT/v1 4 0 : LANDFIRE EVT (Existing Vegetation Type) v1.4.0 July 14, 2020 Earth Engine Data Catalog Feature Added ESA/CCI/FireCCI/5 1 : FireCCI51: MODIS Fire cci Burned Area Pixel Product, Version 5.1 Added JRC/GSW1 2/GlobalSurfaceWater : JRC Global Surface Water Mapping Layers, v1.2 [deprecated] Added JRC/GSW1 2/Metadata (no longer available) Added JRC/GSW1 2/MonthlyHistory (no longer available) Added JRC/GSW1 2/MonthlyRecurrence (no longer available) Added JRC/GSW1 2/YearlyHistory (no longer available) July 07, 2020 Earth Engine Server Fixed Added ee.Algorithms.ObjectType() , which returns the type of any computed object.
- December 26, 2017 Earth Engine Data Catalog Feature Added NASA/GPM L3/IMERG V05 (no longer available) Added UCSB-CHG/CHIRPS/DAILY : CHIRPS Precipitation Daily: Climate Hazards Center InfraRed Precipitation With Station Data (Version 2.0 Final) December 20, 2017 Earth Engine Server Deprecated Deprecated trainClassifier algorithms are no longer documented and will be removed completely in February 2018.
- November 12, 2024 Earth Engine Data Catalog Feature Added NOAA/CPC/Precipitation : CPC Global Unified Gauge-Based Analysis of Daily Precipitation Added NOAA/CPC/Temperature : CPC Global Unified Temperature Added UCSB-CHG/CHIRTS/DAILY : CHIRTS Temperature Daily: Climate Hazards Center InfraRed Temperature with Stations daily data product Added projects/geoscience-aus-cat/assets/ga ls8cls9c gm cyear 3 (no longer available) November 08, 2024 Earth Engine Server Breaking All Cloud Storage reads through the ee.Blob() and ee.Image.loadGeoTIFF() algorithms must now meet the following criteria: The bucket metadata must be accessible (check the storage.buckets.get permission) The bucket must be located in one of: The US multi-region A dual-region including US-CENTRAL1 The US-CENTRAL1 region Any bucket used in the month of October 2024 not meeting the criteria has been automatically allowed for future use.
- March 21, 2019 Earth Engine Server Change Removed the ee.Image.trainClassifier() and ee.FeatureCollection.trainClassifier() functions that were deprecated in September, 2016.

### Coding Best Practices \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/best_practices](https://developers.google.com/earth-engine/guides/best_practices)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Rectangle ([ - 2.15 , 48.55 , - 1.83 , 48.72 ]), scale : 10 , bestEffort : true // Use maxPixels if you care about scale. }); print ( stats ); // Extract means and SDs to images. var meansImage = stats . toImage (). select ( '. mean' ); var sdsImage = stats . toImage (). select ( '. stdDev' ); In this example, note that the mean reducer is combined with the standard deviation reducer and sharedInputs is true to enable a single pass through the input pixels.
- This is because the timeouts are longer and the allowable memory footprint is larger when running in the batch system (where exports run). (There are other approaches you may want to try first as detailed in the debugging doc ).
- As the following example illustrates, ee.Algorithms.If() can be memory intensive and is not recommended: Don't use If() ! var table = ee .
- Code Editor) and batch ( Export ) computations, though generally long running computations should be run in the batch system.

### Landsat Algorithms \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/landsat](https://developers.google.com/earth-engine/guides/landsat)
- Source ID: `site-docs-reference`
- Final score: 142
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Landsat . simpleCloudScore ( cloudy scene ) Create a mask from the cloud score and combine it with the image mask. mask = scored . select ([ 'cloud' ]) . lte ( 20 ) Apply the mask to the image and display the result. masked = cloudy scene . updateMask ( mask ) m . add layer ( masked , { 'bands' : [ 'B4' , 'B3' , 'B2' ], 'max' : 0.4 }, 'masked' ) m If you run this example in the Code Editor, try toggling the visibility of the TOA layers to compare the difference between the masked and unmasked imagery. (See the Layer Manager section of the Code Editor docs for instructions on how to do that).
- ID Description LT04 Landsat 4, Thematic Mapper (TM) LT05 Landsat 5, Thematic Mapper (TM) LE07 Landsat 7, Enhanced Thematic Mapper Plus (ETM+) LC08 Landsat 8, Operational Land Imager (OLI) LC09 Landsat 9, Operational Land Imager 2 (OLI-2) Landsat collection status Pre-Collection 1 : no longer produced or distributed by USGS, unsupported by Earth Engine, to be removed from the Data Catalog in 2024.
- Landsat collection structure The USGS produces data in 3 tiers (categories) for each satellite: Tier 1 (T1) - Data that meets geometric and radiometric quality requirements Tier 2 (T2) - Data that doesn't meet the Tier 1 requirements Real Time (RT) - Data that hasn't yet been evaluated (it takes as much as a month).
- ImageCollection ( 'LANDSAT/LC09/C02/T1 L2' ) Simple cloud score For scoring Landsat pixels by their relative cloudiness, Earth Engine provides a rudimentary cloud scoring algorithm in the ee.Algorithms.Landsat.simpleCloudScore() method. (For details on the implementation, see this Code Editor sample script ).

