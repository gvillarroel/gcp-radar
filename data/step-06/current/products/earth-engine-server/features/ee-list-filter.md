---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:22:38.422Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "ee.List.filter()"
feature_slug: "ee-list-filter"
latest_feature_date: "2018-08-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/docs/release-notes"
  - "https://developers.google.com/earth-engine/guides/best_practices"
  - "https://developers.google.com/earth-engine/guides/debugging"
keywords:
  - "ee"
  - "list"
  - "filter"
  - "filters"
  - "elements"
  - "using"
  - "predicate"
---

# ee.List.filter()

Product: Earth Engine Server
Coverage: LOW

## Step 02 Summary

Filters list elements using a predicate.

## Extended Definition

Filters list elements using a predicate.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- [https://developers.google.com/earth-engine/guides/best_practices](https://developers.google.com/earth-engine/guides/best_practices)
- [https://developers.google.com/earth-engine/guides/debugging](https://developers.google.com/earth-engine/guides/debugging)

## Supporting Pages

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- June 24, 2025 Earth Engine Data Catalog Feature Added ECMWF/NRT FORECAST/IFS/SCWV : ECMWF Near-Realtime IFS Wave (Short-Cutoff) Forecasts Added ECMWF/NRT FORECAST/IFS/WAVE : ECMWF Near-Realtime IFS Wave Forecasts Added NASA/TEMPO/HCHO L3 : TEMPO gridded HCHO vertical columns V03 Added NASA/TEMPO/HCHO L3 QA : TEMPO gridded HCHO (QA filtered) vertical columns V03 June 17, 2025 Earth Engine Data Catalog Feature Added GOOGLE/SATELLITE EMBEDDING/V1/ANNUAL : Satellite Embedding V1 Added projects/forestdatapartnership/assets/cocoa/model 2025a : Cocoa Probability model 2025a Added projects/forestdatapartnership/assets/coffee/model 2025a : Coffee Probability model 2025a Added projects/forestdatapartnership/assets/palm/model 2025a : Palm Probability model 2025a Added projects/forestdatapartnership/assets/rubber/model 2025a : Rubber Tree Probability model 2025a June 10, 2025 Earth Engine Data Catalog Feature Added projects/edf-methanesat-ee/assets/public-preview/L4area v2 : MethaneSAT L4 Area Sources Public Preview V2.0.0 June 03, 2025 Earth Engine Data Catalog Feature Added JAXA/ALOS/AW3D30/V4 1 : ALOS DSM: Global 30m v4.1 Added UCSB/CHC/CMIP6/v1 : The Climate Hazards Center (CHC) Coupled Model Intercomparison Project Phase 6 (CHC-CMIP6) Added UMD/hansen/global forest change 2024 v1 12 : Hansen Global Forest Change v1.12 (2000-2024) Added projects/landandcarbon/assets/wri gdm drivers forest loss 1km/v1 1 2001 2023 : WRI/Google DeepMind Global Drivers of Forest Loss 2001-2023 v1.1 Added projects/landandcarbon/assets/wri gdm drivers forest loss 1km/v1 2001 2022 : WRI/Google DeepMind Global Drivers of Forest Loss 2001-2022 v1.0 Added projects/landandcarbon/assets/wri gdm drivers forest loss 1km/v1 2 2001 2024 : WRI/Google DeepMind Global Drivers of Forest Loss 2001-2024 v1.2 May 27, 2025 Earth Engine Data Catalog Feature Added NASA/TEMPO/NO2 L3 QA : TEMPO gridded NO2 (QA filtered) tropospheric and stratospheric columns V03 May 13, 2025 Earth Engine Data Catalog Feature Added USGS/NLCD RELEASES/2023 REL/TCC/v2023-5 : USFS Tree Canopy Cover v2023-5 (CONUS and OCONUS) May 06, 2025 Earth Engine Data Catalog Feature Added USFS/GTAC/LCMS/v2024-10 : USFS Landscape Change Monitoring System v2024.10 (CONUS and OCONUS) April 29, 2025 Earth Engine Data Catalog Feature Added ISRIC/SoilGrids250m/v2 0 : SoilGrids250m 2.0 - Volumetric Water Content Added NASA/TEMPO/NO2 L3 : TEMPO gridded NO2 tropospheric and stratospheric columns V03 Added UMN/PGC/ArcticDEM/V4/2m mosaic : ArcticDEM Mosaic V4.1 April 22, 2025 Earth Engine JavaScript Client Library 1.5.12 Change Added the Google Drive main OAuth scope , https://www.googleapis.com/auth/drive , to the default list of scopes to use for authorization.
- September 10, 2019 Earth Engine Data Catalog Feature Added NASA/GPM L3/IMERG V06 (no longer available) September 05, 2019 Earth Engine Server Feature Added ee.Filter.expression() to convert conditional and boolean string expressions into filters and allow ee.Collection.filter() to take expression strings.
- Filters other than Filter.eq now return false when the property is null or missing (instead of causing internal errors).
- Change Add ee.List.map() , a method for mapping a function over the elements of ee.List objects.

### Coding Best Practices \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/best_practices](https://developers.google.com/earth-engine/guides/best_practices)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- Filter . eq ( 'country na' , 'Chad' ))); As shown in this tutorial , a functional programming approach using filters is the correct way to apply one logic to some elements of a collection and another logic to the other elements of the collection.
- Unless you need random access to collection elements (i.e. you need to get the i'th element of a collection), use filters on the collection to access individual collection elements.
- The following example illustrates the difference between type conversion (not recommended) and filtering (recommended) to access an element in a collection: Don't convert to list unnecessarily! var table = ee .
- The safer way is to use filter() : Use filter() ! print(table.filter(ee.Filter.eq('country na', 'Niger')).first()); Note that you should use filters as early as possible in your analysis .

### Debugging guide \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/debugging](https://developers.google.com/earth-engine/guides/debugging)
- Source ID: `site-docs-root`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- ImageCollection ( 'MODIS/006/MOD44B' ); var okMap2 = collection . map ( function ( image ) { return image . set ( 'date' , image . date ()); }); print ( okMap2 ); // Get a list of the dates. var datesList = okMap2 . aggregate array ( 'date' ); print ( datesList ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) collection = ee .
- Number ( dictionary . get ( 'B5' )) . divide ( dictionary . get ( 'B4' )) }); }; var noProblem = someFeatures . filterBounds ( image . geometry ()) . map ( functionToMap ); print ( noProblem ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) def function to map ( feature ): dictionary = image . reduceRegion ( reducer = ee .
- Point ([ - 12.29 , 168.83 ])) . aside ( print ) . filterDate ( '2011-01-01' , '2016-12-31' ) . first ()); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) image = ee .
- Point ([ 106.91 , 47.91 ])) . map ( function ( image ) { return image . addBands ( image . normalizedDifference ([ 'B5' , 'B4' ])); }) . aside ( Map . addLayer , { bands : [ 'B4' , 'B3' , 'B2' ], max : 0.3 }, 'collection' ) . qualityMosaic ( 'nd' ); Map . setCenter ( 106.91 , 47.91 , 11 ); Map . addLayer ( composite , { bands : [ 'B4' , 'B3' , 'B2' ], max : 0.3 }, 'composite' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) m = geemap .

