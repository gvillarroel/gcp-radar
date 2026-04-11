---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:10:51.819Z"
product_name: "Earth Engine Python Client Library"
product_slug: "earth-engine-python-client-library"
feature_name: "FeatureCollection.select()"
feature_slug: "featurecollection-select"
latest_feature_date: "2015-02-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/docs/release-notes"
  - "https://developers.google.com/earth-engine/guides/charts_feature"
  - "https://developers.google.com/earth-engine/guides/charts_image"
keywords:
  - "featurecollection"
  - "select"
  - "selects"
  - "columns"
  - "from"
---

# FeatureCollection.select()

Product: Earth Engine Python Client Library
Coverage: LOW

## Step 02 Summary

Selects columns from a FeatureCollection.

## Extended Definition

Selects columns from a FeatureCollection.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- [https://developers.google.com/earth-engine/guides/charts_feature](https://developers.google.com/earth-engine/guides/charts_feature)
- [https://developers.google.com/earth-engine/guides/charts_image](https://developers.google.com/earth-engine/guides/charts_image)

## Supporting Pages

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- August 14, 2018 Earth Engine Data Catalog Feature Added GLIMS/20171027 (no longer available) July 17, 2018 Earth Engine Data Catalog Feature Added CPOM/CryoSat2/ANTARCTICA DEM : CryoSat-2 Antarctica 1km DEM Added OSU/GIMP/2000 ICE OCEAN MASK : Greenland Ice & Ocean Mask - Greenland Mapping Project (GIMP) Added OSU/GIMP/2000 IMAGERY MOSAIC : 2000 Greenland Mosaic - Greenland Ice Mapping Project (GIMP) Added OSU/GIMP/DEM : Greenland DEM - Greenland Mapping Project (GIMP) Added OSU/GIMP/ICE VELOCITY OPT : MEaSUREs Greenland Ice Velocity: Selected Glacier Site Velocity Maps from Optical Images Version 2 Added TIGER/2016/Counties : TIGER: US Census Counties 2016 Added TIGER/2016/States : TIGER: US Census States 2016 Added USGS/LIMA/MOSAIC : Landsat Image Mosaic of Antarctica (LIMA) 16-Bit Pan-Sharpened Mosaic Added USGS/LIMA/SR : Landsat Image Mosaic of Antarctica (LIMA) - Processed Landsat Scenes (16 bit) July 10, 2018 Earth Engine Data Catalog Feature Added TRMM/3B43V7 : TRMM 3B43: Monthly Precipitation Estimates July 03, 2018 Earth Engine Data Catalog Feature Added CSP/ERGo/1 0/Global/ALOS CHILI : Global ALOS CHILI (Continuous Heat-Insolation Load Index) Added CSP/ERGo/1 0/Global/ALOS landforms : Global ALOS Landforms Added CSP/ERGo/1 0/Global/ALOS mTPI : Global ALOS mTPI (Multi-Scale Topographic Position Index) Added CSP/ERGo/1 0/Global/ALOS topoDiversity : Global ALOS Topographic Diversity Added CSP/ERGo/1 0/Global/SRTM CHILI : Global SRTM CHILI (Continuous Heat-Insolation Load Index) Added CSP/ERGo/1 0/Global/SRTM landforms : Global SRTM Landforms Added CSP/ERGo/1 0/Global/SRTM mTPI : Global SRTM mTPI (Multi-Scale Topographic Position Index) Added CSP/ERGo/1 0/Global/SRTM topoDiversity : Global SRTM Topographic Diversity Added CSP/ERGo/1 0/US/CHILI : US NED CHILI (Continuous Heat-Insolation Load Index) Added CSP/ERGo/1 0/US/landforms : US NED Landforms Added CSP/ERGo/1 0/US/lithology : US Lithology Added CSP/ERGo/1 0/US/mTPI : US NED mTPI (Multi-Scale Topographic Position Index) Added CSP/ERGo/1 0/US/physioDiversity : US NED Physiographic Diversity Added CSP/ERGo/1 0/US/physiography : US Physiography Added CSP/ERGo/1 0/US/topoDiversity : US NED Topographic Diversity Added JRC/GHSL/P2016/BUILT LDSMT GLOBE V1 (no longer available) Added JRC/GHSL/P2016/BUILT LDS GLOBE V1 (no longer available) Added JRC/GHSL/P2016/POP GPW GLOBE V1 (no longer available) Added JRC/GHSL/P2016/SMOD POP GLOBE V1 (no longer available) Added UMN/PGC/ArcticDEM/V2/2m (no longer available) Added UMN/PGC/ArcticDEM/V2/5m (no longer available) June 29, 2018 Earth Engine Server Fixed Added optional uniqueLabels parameter to ee.Algorithms.Image.Segmentation algorithms, which forces clusters to have unique IDs.
- April 01, 2025 Earth Engine Data Catalog Feature Added NASA/VIIRS/002/VNP46A2 : VNP46A2: VIIRS Lunar Gap-Filled BRDF Nighttime Lights Daily L3 Global 500m Earth Engine Server Feature Added two new algorithms that allow reading data from BigQuery: ee.FeatureCollection.loadBigQueryTable() and ee.FeatureCollection.runBigQuery() .
- Fixed some spurious out-of-memory errors from ImageCollection.combine() , ImageCollection.merge() , FeatureCollection.merge() , and ee.Terrain algorithms.
- The new methods will help with getting pixels from assets or ee.Image objects, and listing features from assets or ee.FeatureCollection objects.

### "Feature and FeatureCollection Charts \_|\_ Google Earth Engine \_|\_ Google\

- URL: [https://developers.google.com/earth-engine/guides/charts_feature](https://developers.google.com/earth-engine/guides/charts_feature)
- Source ID: `site-docs-root-2`
- Final score: 87
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- X-axis : histogram buckets for values of a selected property Y-axis : frequency of features qualified for each histogram bucket Example data The following examples rely on a FeatureCollection composed of three ecoregion features with properties that describe climate normals.
- FeatureCollection ( 'projects/google/charts feature example' ); // Subset the forest ecoregion feature and select the monthly precipitation // properties, rename them as abbreviated months. var thisForest = ecoregions . filter ( ee .
- FeatureCollection ( 'projects/google/charts feature example' ); // Subset the forest ecoregion feature and select the monthly precipitation // properties, rename them as abbreviated months. var thisForest = ecoregions . filter ( ee .
- Page Summary outlined flag The ui.Chart.feature module provides functions to create charts from Feature and FeatureCollection objects.

### Image Charts \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/charts_image](https://developers.google.com/earth-engine/guides/charts_image)
- Source ID: `site-docs-root-2`
- Final score: 71
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- X-axis : histogram buckets for values of selected bands Y-axis : frequency of pixels qualified for each histogram bucket Example data The following examples rely on a FeatureCollection composed of three ecoregion features that define regions by which to reduce image data.
- Image ( 'CGIAR/SRTM90 V4' ). select ( 'elevation' ); // Subset Colorado from the TIGER States feature collection. var colorado = ee .
- Reducer . mean (), scale : 500 , xProperty : 'label' }) . setSeriesNames ([ 'Jan' , 'Feb' , 'Mar' , 'Apr' , 'May' , 'Jun' , 'Jul' , 'Aug' , 'Sep' , 'Oct' , 'Nov' , 'Dec' ]) . setChartType ( 'ColumnChart' ) . setOptions ({ title : 'Average Monthly Precipitation by Ecoregion' , hAxis : { title : 'Ecoregion' , titleTextStyle : { italic : false , bold : true }}, vAxis : { title : 'Precipitation (mm)' , titleTextStyle : { italic : false , bold : true } }, colors : [ '604791' , '1d6b99' , '39a8a7' , '0f8755' , '76b349' , 'f0af07' , 'e37d05' , 'cf513e' , '96356f' , '724173' , '9c4f97' , '696969' ], isStacked : 'absolute' }); print ( chart ); Relative Convert the previous absolute stacked bar chart to a relative stacked bar chart by changing the isStacked chart option from 'absolute' to 'relative' .
- Reducer . mean (), scale : 500 , xProperty : 'label' }) . setSeriesNames ([ 'Jan' , 'Feb' , 'Mar' , 'Apr' , 'May' , 'Jun' , 'Jul' , 'Aug' , 'Sep' , 'Oct' , 'Nov' , 'Dec' ]) . setChartType ( 'ColumnChart' ) . setOptions ({ title : 'Average Monthly Temperature by Ecoregion' , hAxis : { title : 'Ecoregion' , titleTextStyle : { italic : false , bold : true }}, vAxis : { title : 'Temperature (°C)' , titleTextStyle : { italic : false , bold : true } }, colors : [ '604791' , '1d6b99' , '39a8a7' , '0f8755' , '76b349' , 'f0af07' , 'e37d05' , 'cf513e' , '96356f' , '724173' , '9c4f97' , '696969' ] }); print ( chart ); Bar chart The previous column chart can be rendered as a bar chart by changing the .setChartType() input from 'ColumnChart' to 'BarChart' . var chart = ui .

