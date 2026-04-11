---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:22:38.453Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "Collection.flatten"
feature_slug: "collection-flatten"
latest_feature_date: "2014-04-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/docs/release-notes"
  - "https://developers.google.com/earth-engine/guides/charts_image_collection"
  - "https://developers.google.com/earth-engine/guides/best_practices"
keywords:
  - "collection"
  - "flatten"
  - "flattens"
  - "of"
  - "collections"
  - "into"
  - "single"
---

# Collection.flatten

Product: Earth Engine Server
Coverage: LOW

## Step 02 Summary

Flattens a collection of collections into a single collection.

## Extended Definition

Flattens a collection of collections into a single collection.

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
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- April 15, 2014 Earth Engine Data Catalog Feature Added NASA/NLDAS/FORA0125 H002 : NLDAS-2: North American Land Data Assimilation System Forcing Fields April 14, 2014 Earth Engine Server Feature Added collection.flatten() to flatten collections of collections.
- Changed LedapsSurfaceReflectance to work on single images instead of collections.
- December 05, 2023 Earth Engine Data Catalog Feature Added NASA/GSFC/MERRA/aer nv/2 : MERRA-2 M2I3NVAER: Aerosol Mixing Ratio V5.12.4 November 29, 2023 Earth Engine Server Fixed Fixed a bug that prevented the download of large (more than 1000 elements) collections.
- Fixed regression in decoding of a deprecated way to encode filtered ImageCollections (via start time and end time properties).

### ImageCollection Charts \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/charts_image_collection](https://developers.google.com/earth-engine/guides/charts_image_collection)
- Source ID: `site-docs-root`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- Page Summary outlined flag The ui.Chart.image module provides functions to create charts from spatiotemporal reductions of image collections, with different functions dictating the arrangement of data for x-axis, y-axis, and series. ui.Chart.image.series charts image time series for a region with series defined by image bands, while ui.Chart.image.seriesByRegion charts a single band time series for multiple regions with series defined by regions. ui.Chart.image.doySeries charts a day-of-year time series for a region with series defined by image bands, reducing observations on the same day across years. ui.Chart.image.doySeriesByYear charts a day-of-year time series for a region and band, with series defined by years, useful for comparing annual profiles. ui.Chart.image.doySeriesByRegion charts a single band day-of-year time series for multiple regions, with series defined by regions, allowing comparison of annual single-band time series among regions.
- Reducer . mean (), startDay : 1 , endDay : 365 }) . setSeriesNames ([ 'EVI' , 'NDVI' ]) . setOptions ({ title : 'Average Vegetation Index Value by Day of Year for Grassland' , hAxis : { title : 'Day of year' , titleTextStyle : { italic : false , bold : true } }, vAxis : { title : 'Vegetation index (x1e4)' , titleTextStyle : { italic : false , bold : true } }, lineWidth : 5 , colors : [ 'e37d05' , '1d6b99' ], }); print ( chart ); ui.Chart.image.doySeriesByYear Use ui.Chart.image.doySeriesByYear to display a day-of-year time series for a given region and image band, where each distinct year in the image collection is presented as a unique series.
- Reducer . mean (), startDay : 1 , endDay : 365 }) . setOptions ({ title : 'Average NDVI Value by Day of Year for Grassland' , hAxis : { title : 'Day of year' , titleTextStyle : { italic : false , bold : true } }, vAxis : { title : 'NDVI (x1e4)' , titleTextStyle : { italic : false , bold : true } }, lineWidth : 5 , colors : [ '39a8a7' , '9c4f97' ], }); print ( chart ); ui.Chart.image.doySeriesByRegion Use ui.Chart.image.doySeriesByRegion to display a single image band day-of-year time series for multiple regions, where each distinct region is presented as a unique series.
- Y-axis values are the reduction of images, by date, for a single image band. ui.Chart.image.doySeries Image day-of-year is plotted along the x-axis according to the system:time start property.

### Coding Best Practices \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/best_practices](https://developers.google.com/earth-engine/guides/best_practices)
- Source ID: `site-docs-root`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- FeatureCollection ( 'projects/google/demo landcover labels' ); // Increase the data a little bit, possibly introducing noise. labels = labels . map ( function ( f ) { return f . buffer ( 100 , 10 ); }); var bands = [ 'B2' , 'B3' , 'B4' , 'B5' , 'B6' , 'B7' ]; var data = composite . select ( bands ). sampleRegions ({ collection : labels , properties : [ 'landcover' ], scale : 30 }); // Add a column of uniform random numbers called 'random'. data = data . randomColumn (); // Partition into training and testing. var training = data . filter ( ee .
- Use filter() or limit() instead of converting collections to lists unnecessarily, as this can cause errors.
- Filter . eq ( 'BIOME NAME' , 'Tropical & Subtropical Moist Broadleaf Forests' )); Map . addLayer ( complexCollection , {}, 'complexCollection' ); var clippedTheRightWay = image . select ( 'AVE' ) . clipToCollection ( complexCollection ); Map . addLayer ( clippedTheRightWay , {}, 'clippedTheRightWay' , false ); Do NOT use featureCollection.geometry() or featureCollection.union() on large and/or complex collections, which can be more memory intensive.
- ImageCollection ( 'LANDSAT/LC08/C02/T1 L2' ) . map ( prepSrL8 ); // Create two annual cloud-free composites. var composite1 = collection . filterDate ( '2015-01-01' , '2015-12-31' ). median (); var composite2 = collection . filterDate ( '2017-01-01' , '2017-12-31' ). median (); // We want a strtatified sample of this stack. var stack = composite1 . addBands ( composite2 ) . float (); // Export the smallest size possible. // Export the image.

