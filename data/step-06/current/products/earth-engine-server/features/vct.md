---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:22:38.427Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "VCT"
feature_slug: "vct"
latest_feature_date: "2018-06-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/docs/release-notes"
  - "https://developers.google.com/earth-engine/guides/charts_image_collection"
  - "https://developers.google.com/earth-engine/guides/best_practices"
keywords:
  - "vct"
  - "performs"
  - "temporal"
  - "segmentation"
  - "for"
  - "vegetation"
  - "change"
  - "tracking"
---

# VCT

Product: Earth Engine Server
Coverage: LOW

## Step 02 Summary

Performs temporal segmentation for vegetation change tracking.

## Extended Definition

Performs temporal segmentation for vegetation change tracking.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- [https://developers.google.com/earth-engine/guides/charts_image_collection](https://developers.google.com/earth-engine/guides/charts_image_collection)
- [https://developers.google.com/earth-engine/guides/best_practices](https://developers.google.com/earth-engine/guides/best_practices)

## Supporting Pages

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- May 03, 2022 Earth Engine Data Catalog Feature Added NASA/GEOS-CF/v1/rpl/htf : GEOS-CF rpl htf v1: Goddard Earth Observing System Composition Forecast Added UMD/hansen/global forest change 2021 v1 9 (no longer available) April 26, 2022 Earth Engine Data Catalog Feature Added MODIS/061/MOD13Q1 : MOD13Q1.061 Terra Vegetation Indices 16-Day Global 250m Added MODIS/061/MYD09Q1 : MYD09Q1.061 Aqua Surface Reflectance 8-Day Global 250m Added MODIS/061/MYD11A2 : MYD11A2.061 Aqua Land Surface Temperature and Emissivity 8-Day Global 1km Added MODIS/061/MYD13A1 : MYD13A1.061 Aqua Vegetation Indices 16-Day Global 500m Added MODIS/061/MYD13A2 : MYD13A2.061 Aqua Vegetation Indices 16-Day Global 1km Added MODIS/061/MYD13Q1 : MYD13Q1.061 Aqua Vegetation Indices 16-Day Global 250m Added MODIS/061/MYD14A2 : MYD14A2.061: Aqua Thermal Anomalies & Fire 8-Day Global 1km Added MODIS/061/MYD15A2H : MYD15A2H.061: Aqua Leaf Area Index/FPAR 8-Day Global 500m Added USFS/GTAC/LCMS/v2021-7 (no longer available) April 19, 2022 Earth Engine Data Catalog Feature Added GOOGLE/DYNAMICWORLD/V1 : Dynamic World V1 Added LARSE/GEDI/GEDI04 B 002 : GEDI L4B Gridded Aboveground Biomass Density (Version 2) Added MODIS/061/MCD15A3H : MCD15A3H.061 MODIS Leaf Area Index/FPAR 4-Day Global 500m Added MODIS/061/MOD09A1 : MOD09A1.061 Terra Surface Reflectance 8-Day Global 500m Added MODIS/061/MOD09Q1 : MOD09Q1.061 Terra Surface Reflectance 8-Day Global 250m Added MODIS/061/MOD11A2 : MOD11A2.061 Terra Land Surface Temperature and Emissivity 8-Day Global 1km Added MODIS/061/MOD13A1 : MOD13A1.061 Terra Vegetation Indices 16-Day Global 500m Added MODIS/061/MOD13A2 : MOD13A2.061 Terra Vegetation Indices 16-Day Global 1km Added MODIS/061/MOD14A2 : MOD14A2.061: Terra Thermal Anomalies & Fire 8-Day Global 1km Added MODIS/061/MOD15A2H : MOD15A2H.061: Terra Leaf Area Index/FPAR 8-Day Global 500m Added MODIS/061/MYD09A1 : MYD09A1.061 Aqua Surface Reflectance 8-Day Global 500m April 13, 2022 Earth Engine Python Client Library 0.1.306 Change Security upgrades to authentication in Python notebooks and command line.
- Feature Added ee.Algorithm.TemporalSegmentation.StructuralChangeBreakpoints , modelled after R's wtrucchange.breakpoints .
- Earth Engine Server Breaking Changed the output bands produced by ee.Algorithms.TemporalSegmentation.Ccdc() .
- Added LandTrendr, EWMACD, VerDET and VCT temporal segmentation algorithms.

### ImageCollection Charts \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/charts_image_collection](https://developers.google.com/earth-engine/guides/charts_image_collection)
- Source ID: `site-docs-root`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- Page Summary outlined flag The ui.Chart.image module provides functions to create charts from spatiotemporal reductions of image collections, with different functions dictating the arrangement of data for x-axis, y-axis, and series. ui.Chart.image.series charts image time series for a region with series defined by image bands, while ui.Chart.image.seriesByRegion charts a single band time series for multiple regions with series defined by regions. ui.Chart.image.doySeries charts a day-of-year time series for a region with series defined by image bands, reducing observations on the same day across years. ui.Chart.image.doySeriesByYear charts a day-of-year time series for a region and band, with series defined by years, useful for comparing annual profiles. ui.Chart.image.doySeriesByRegion charts a single band day-of-year time series for multiple regions, with series defined by regions, allowing comparison of annual single-band time series among regions.
- Reducer . mean (), startDay : 1 , endDay : 365 }) . setSeriesNames ([ 'EVI' , 'NDVI' ]) . setOptions ({ title : 'Average Vegetation Index Value by Day of Year for Grassland' , hAxis : { title : 'Day of year' , titleTextStyle : { italic : false , bold : true } }, vAxis : { title : 'Vegetation index (x1e4)' , titleTextStyle : { italic : false , bold : true } }, lineWidth : 5 , colors : [ 'e37d05' , '1d6b99' ], }); print ( chart ); ui.Chart.image.doySeriesByYear Use ui.Chart.image.doySeriesByYear to display a day-of-year time series for a given region and image band, where each distinct year in the image collection is presented as a unique series.
- Reducer . mean (), scale : 500 , xProperty : 'system:time start' }) . setSeriesNames ([ 'EVI' , 'NDVI' ]) . setOptions ({ title : 'Average Vegetation Index Value by Date for Forest' , hAxis : { title : 'Date' , titleTextStyle : { italic : false , bold : true }}, vAxis : { title : 'Vegetation index (x1e4)' , titleTextStyle : { italic : false , bold : true } }, lineWidth : 5 , colors : [ 'e37d05' , '1d6b99' ], curveType : 'function' }); print ( chart ); ui.Chart.image.seriesByRegion Use ui.Chart.image.seriesByRegion to display a single image band time series for multiple regions; each region is presented as a unique series.
- The ui.Chart.image module contains a set of functions for rendering charts from the results of spatiotemporal reduction of images within an ImageCollection .

### Coding Best Practices \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/best_practices](https://developers.google.com/earth-engine/guides/best_practices)
- Source ID: `site-docs-root`
- Final score: 64
- Re-rank relevance: N/A

Evidence snippets:
- Use forward differencing for neighbors in time Suppose you have a temporally sorted ImageCollection (i.e. a time series) and you want to compare each image to the previous (or next) image.
- Use array-based forward differencing instead of iterate() for comparing temporally sorted images with their neighbors.
- Image ( 'UMD/hansen/global forest change 2018 v1 6' ); var geometry = ee .
- Polygon ( [[[ - 48.86726050085349 , - 3.0475996402515717 ], [ - 48.86726050085349 , - 3.9248707849303295 ], [ - 47.46101050085349 , - 3.9248707849303295 ], [ - 47.46101050085349 , - 3.0475996402515717 ]]], null , false ); // Forest loss in 2016, to stratify a sample. var loss = image . select ( 'lossyear' ); var loss16 = loss . eq ( 16 ). rename ( 'loss16' ); // Scales and masks Landsat 8 surface reflectance images. function prepSrL8 ( image ) { var qaMask = image . select ( 'QA PIXEL' ). bitwiseAnd ( parseInt ( '11111' , 2 )). eq ( 0 ); var opticalBands = image . select ( 'SR B.' ). multiply ( 0.0000275 ). add ( - 0.2 ); var thermalBands = image . select ( 'ST B. ' ). multiply ( 0.00341802 ). add ( 149.0 ); return image . addBands ( opticalBands , null , true ) . addBands ( thermalBands , null , true ) . updateMask ( qaMask ); } var collection = ee .

