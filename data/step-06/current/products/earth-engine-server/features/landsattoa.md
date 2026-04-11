---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:22:38.457Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "LandsatTOA"
feature_slug: "landsattoa"
latest_feature_date: "2013-02-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/guides/landsat"
  - "https://developers.google.com/earth-engine/docs/release-notes"
  - "https://developers.google.com/earth-engine/guides/charts_array"
keywords:
  - "landsattoa"
  - "calculates"
  - "landsat"
  - "top"
  - "of"
  - "atmosphere"
  - "reflectance"
  - "and"
---

# LandsatTOA

Product: Earth Engine Server
Coverage: LOW

## Step 02 Summary

Calculates Landsat top-of-atmosphere reflectance and brightness temperature.

## Extended Definition

Calculates Landsat top-of-atmosphere reflectance and brightness temperature.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/guides/landsat](https://developers.google.com/earth-engine/guides/landsat)
- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- [https://developers.google.com/earth-engine/guides/charts_array](https://developers.google.com/earth-engine/guides/charts_array)

## Supporting Pages

### Landsat Algorithms \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/landsat](https://developers.google.com/earth-engine/guides/landsat)
- Source ID: `site-docs-reference`
- Final score: 172
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Landsat . calibratedRadiance ( raw ); Map . addLayer ( radiance , { bands : [ 'B4' , 'B3' , 'B2' ], max : 90 }, 'radiance' ); // Convert the raw data to top-of-atmosphere reflectance. var toa = ee .
- Landsat . calibratedRadiance ( raw ) m . add layer ( radiance , { 'bands' : [ 'B4' , 'B3' , 'B2' ], 'max' : 90 }, 'radiance' ) Convert the raw data to top-of-atmosphere reflectance. toa = ee .
- In addition, for each collection that contains T1 or T2 images, TOA (top-of-atmosphere reflectance), SR (surface reflectance), and LST (land surface temperature) products are offered.
- Specifically, there are methods to compute at-sensor radiance, top-of-atmosphere (TOA) reflectance, surface reflectance (SR), cloud score and cloud-free composites.

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- Feature Added LandsatTOA() , which is used to calculate Landsat top-of-atmosphere reflectance and brightness temperature.
- October 17, 2023 Earth Engine Data Catalog Feature Added NASA/HLS/HLSL30/v002 : HLSL30: HLS-2 Landsat Operational Land Imager Surface Reflectance and TOA Brightness Daily Global 30m October 10, 2023 Earth Engine Data Catalog Feature Added JAXA/GPM L3/GSMaP/v7/operational : GSMaP Operational: Global Satellite Mapping of Precipitation - V7 Added JAXA/GPM L3/GSMaP/v8/operational : GSMaP Operational: Global Satellite Mapping of Precipitation - V8 Added projects/geoscience-aus-cat/assets/NIDEM (no longer available) Added projects/geoscience-aus-cat/assets/annual-water-obs (no longer available) Added projects/geoscience-aus-cat/assets/ga landcover (no longer available) Added projects/geoscience-aus-cat/assets/geomedians LS5 (no longer available) Added projects/geoscience-aus-cat/assets/geomedians LS7 (no longer available) Added projects/geoscience-aus-cat/assets/geomedians LS8 (no longer available) October 03, 2023 Earth Engine Data Catalog Feature Added GOOGLE/CLOUD SCORE PLUS/V1/S2 HARMONIZED : Cloud Score+ S2 HARMONIZED V1 Added MODIS/061/MYD13A3 : MYD13A3.061 Aqua Vegetation Indices Monthly L3 Global 1 km SIN Grid Added projects/sat-io/open-datasets/GLOBathy/GLOBathy bathymetry : GLOBathy Global lakes bathymetry dataset Added projects/sat-io/open-datasets/ORNL/LANDSCAN GLOBAL : LandScan Population Data Global 1km Added projects/sat-io/open-datasets/us-drought-monitor : United States Drought Monitor September 14, 2023 Earth Engine JavaScript Client Library 0.1.369 Fixed Fixed ee.data.getOperation() and ee.data.getTaskStatus() error handling.
- LandsatPathRowLimit() -> Landsat.pathRowLimit() LandsatTOA() -> Landsat.TOA() LANDSAT/CalibratedRadiance() -> Landsat.calibratedRadiance() LedapsSurfaceReflectance() -> Landsat.surfaceReflectance() SimpleLandsatCloudScore() -> Landsat.simpleCloudScore() TranslateLandsatMetadata() -> Landsat.translateMetadata() SimpleLandsatComposite() -> Landsat.simpleComposite() ReduceToVectors() -> Image.reduceToVectors() ClassifyImage() -> Image.classify() TrainClassifier() -> Image.trainClassifier() Filter.equals() -> Filter.eq() Filter.notEquals() -> Filter.neq() Filter.lessThan() -> Filter.lt() Filter.lessThanOrEquals() -> Filter.lte() Filter.greaterThan() -> Filter.gt() Filter.greaterThanOrEquals() -> Filter.gte() Filter.listContains() -> Filter.inList() Math.\<any method>() -> Number.\<same method>() Removed a number of old deprecated algorithm aiases.
- Specify a scale or crs plus crs transform to avoid the error Aggregations now use the image footprint (instead of the bounds of the first band of the image) when the aggregation region is not specified explicitly Improved the error message returned when attempting to set properties with illegal names August 08, 2014 Earth Engine Server Change Updated LandsatTOA to use REFLECTANCE metadata directly when it is available, as is the case for Landsat 8.

### Array and List Charts \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/charts_array](https://developers.google.com/earth-engine/guides/charts_array)
- Source ID: `site-docs-root`
- Final score: 116
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Chart . array . values ({ array : y , axis : 0 , xLabels : x }) . setChartType ( 'ScatterChart' ) . setOptions ({ title : 'Landsat 8 Image Collection Metadata (045030)' , colors : [ '96356f' ], hAxis : { title : 'Cloud cover (%)' , titleTextStyle : { italic : false , bold : true } }, vAxis : { title : 'Geometric RMSE (m)' , titleTextStyle : { italic : false , bold : true } }, pointSize : 5 , dataOpacity : 0.6 , legend : { position : 'none' }, }); print ( chart ); ee.List mapped function scatter & line plot Map a function over a list of x values to calculate a corresponding list of y values.
- Chart . array . values ({ array : y , axis : 0 , xLabels : x }). setOptions ({ title : 'Relationship Among Spectral Bands for Forest Pixels' , colors : [ 'cf513e' ], hAxis : { title : 'Red reflectance (x1e4)' , titleTextStyle : { italic : false , bold : true } }, vAxis : { title : 'SWIR reflectance (x1e4)' , titleTextStyle : { italic : false , bold : true } }, pointSize : 4 , dataOpacity : 0.4 , legend : { position : 'none' }, }); print ( chart ); ee.List transect line plot Image region reduction by ee.Reducer.toList() produces a dictionary of pixel value lists, one for each image band.
- Chart . array . values ({ array : yValues , axis : 1 , xLabels : xValues }) . setSeriesNames ([ 'NIR' , 'SWIR' ]) . setOptions ({ title : 'Relationship Among Spectral Bands for Forest Pixels' , colors : [ '1d6b99' , 'cf513e' ], pointSize : 4 , dataOpacity : 0.4 , hAxis : { 'title' : 'Red reflectance (x1e4)' , titleTextStyle : { italic : false , bold : true } }, vAxis : { 'title' : 'Reflectance (x1e4)' , titleTextStyle : { italic : false , bold : true } } }); print ( chart ); ee.List region scatter plot Two list objects can be plotted using the ui.Chart.array.values function.
- It can generate scatter plots and line plots using lists of pixel values from image band reductions, such as Red, NIR, and SWIR reflectance.

