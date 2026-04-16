---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:19.595Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "Copernicus DEM GLO-30"
feature_slug: "copernicus-dem-glo-30"
latest_feature_date: "2023-02-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_DEM_GLO30"
  - "https://developers.google.com/earth-engine/datasets/tags/elevation"
  - "https://developers.google.com/earth-engine/datasets/tags/geophysical"
keywords:
  - "copernicus"
  - "dem"
  - "glo"
  - "30"
  - "dataset"
  - "provides"
  - "global"
  - "digital"
---

# Copernicus DEM GLO-30

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

This dataset provides a global 30 m Copernicus digital elevation model.

## Extended Definition

This dataset provides a global 30 m Copernicus digital elevation model.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_DEM_GLO30](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_DEM_GLO30)
- [https://developers.google.com/earth-engine/datasets/tags/elevation](https://developers.google.com/earth-engine/datasets/tags/elevation)
- [https://developers.google.com/earth-engine/datasets/tags/geophysical](https://developers.google.com/earth-engine/datasets/tags/geophysical)

## Supporting Pages

### "Copernicus DEM GLO-30: Global 30m Digital Elevation Model \_|\_ Earth Engine\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_DEM_GLO30](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_DEM_GLO30)
- Source ID: `site-docs-root-2`
- Final score: 209
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Earth Engine Data Catalog All Datasets Send feedback Copernicus DEM GLO-30: Global 30m Digital Elevation Model Stay organized with collections Save and categorize content based on your preferences.
- ImageCollection ( 'COPERNICUS/DEM/GLO30' ). mosaic (); Map . setCenter ( - 6.746 , 46.529 , 4 ); // Relative, vertical accuracy in form of the standard deviation of // the interferometric phase error. var hem = dataset . select ( 'HEM' ); var hemVis = { // Range of the values is 0.09 to 43.4. min : 0.0 , max : 4.0 , palette : [ 'blue' , 'green' , 'yellow' , 'orange' , 'darkorange' , 'red' ], }; Map . addLayer ( hem , hemVis , 'Height Error Mask (HEM; m)' , false ); var edm = dataset . select ( 'EDM' ); var edmVis = { min : 0 , max : 13 , palette : [ 'black' , // 0: Void (no data) 'white' , // 1: Not edited 'red' , // 2: Infill of external elevation data 'green' , // 3: Interpolated pixels 'orange' , // 4: Smoothed pixels 'yellow' , // 5: Airport editing 'magenta' , // 6: Raised negative elevation pixels 'cyan' , // 7: Flattened pixels 'blue' , // 8: Ocean pixels 'purple' , // 9: Lake pixels 'brown' , // 10: River pixels 'lightgray' , // 11: Shoreline pixels 'olive' , // 12: Morphed pixels 'steelblue' , // 13: Shifted pixels ], }; Map . addLayer ( edm , edmVis , 'Editing and Masking (EDM)' , false , 0.75 ); // Source data diagram. var flm = dataset . select ( 'FLM' ); var originalValues = [ 0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 100 , 101 ]; var remappedValues = [ 0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 ]; var flmRemapped = flm . remap ( originalValues , remappedValues ). rename ( 'FLM' ); var flmVis = { min : 0 , max : 11 , palette : [ 'black' , // 0: Void (no data) 'white' , // 1: Edited (except filled pixels) 'grey' , // 2: Not edited / not filled 'red' , // 3: ASTER 'green' , // 4: SRTM90 'blue' , // 5: SRTM30 'yellow' , // 6: GMTED2010 'cyan' , // 7: SRTM30plus 'magenta' , // 8: TerraSAR-X Radargrammetric DEM 'orange' , // 9: AW3D30 'purple' , // 100 -> remapped to 10: Norway DEM 'brown' , // 101 -> remapped to 11: DSM05 Spain ], }; Map . addLayer ( flmRemapped , flmVis , 'Fill and Lineage Mask (FLM)' , false , 0.75 ); var wbm = dataset . select ( 'WBM' ); var wbmVis = { min : 0 , max : 3 , palette : [ 'lightgray' , // 0: No water. 'cadetblue' , // 1: Ocean. 'darkblue' , // 2: Lake. 'blueviolet' , // 3: River. ], }; Map . addLayer ( wbm , wbmVis , 'Water Body Mask (WBM)' , false , 0.75 ); var dsm = dataset . select ( 'DEM' ) . setDefaultProjection ( 'EPSG:3857' , null , 30 ) . rename ( 'DSM' ); var dsmVis = { min : 0.0 , max : 3000.0 , palette : [ '333399' , '00a2e5' , '55dd77' , 'ffff99' , 'aa926b' , 'aa928d' , 'ffffff' ], }; Map . addLayer ( dsm , dsmVis , 'Digital Surface Model (DSM; m)' , true , 0.75 ); // Multiply by 20 to exaggerate the hillshade for a better visualization.
- Editing of shore- and coastlines, special … COPERNICUS/DEM/GLO30, copernicus,dem,elevation,elevation-topography,geophysical 2010-12-01T00:00:00Z/2015-01-31T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],["The Copernicus DEM GLO-30 dataset, available from 2010-12-01 to 2015-01-31, offers a 30-meter resolution Digital Surface Model derived from the WorldDEM.
- Dataset Availability 2010-12-01T00:00:00Z–2015-01-31T00:00:00Z Dataset Producer Copernicus Earth Engine Snippet ee.ImageCollection("COPERNICUS/DEM/GLO30") open in new Tags copernicus dem elevation elevation-topography geophysical Description The Copernicus DEM is a Digital Surface Model (DSM) which represents the surface of the Earth including buildings, infrastructure and vegetation.

### "Datasets tagged elevation in Earth Engine \_|\_ Earth Engine Data Catalog\

- URL: [https://developers.google.com/earth-engine/datasets/tags/elevation](https://developers.google.com/earth-engine/datasets/tags/elevation)
- Source ID: `site-docs-root`
- Final score: 161
- Re-rank relevance: N/A

Evidence snippets:
- The Conservation Science Partners (CSP) Ecologically Relevant … aspect csp elevation elevation-topography ergo geophysical Global SRTM Landforms The SRTM Landform dataset provides landform classes created by combining the Continuous Heat-Insolation Load Index (SRTM CHILI) and the multi-scale Topographic Position Index (SRTM mTPI) datasets.
- The primary source dataset for GMTED2010 is NGA''s SRTM Digital Terrain Elevation Data (DTED®, … dem elevation elevation-topography geophysical srtm topography GTOPO30: Global 30 Arc-Second Elevation GTOPO30 is a global digital elevation model (DEM) with a horizontal grid spacing of 30 arc seconds (approximately 1 kilometer).
- The CDEM is comprised of multiple DEMs with … canada dem elevation elevation-topography geophysical topography Copernicus DEM GLO-30: Global 30m Digital Elevation Model The Copernicus DEM is a Digital Surface Model (DSM) which represents the surface of the Earth including buildings, infrastructure and vegetation.
- The Conservation Science … aspect csp elevation elevation-topography ergo geophysical Global ALOS Landforms The ALOS Landform dataset provides landform classes created by combining the Continuous Heat-Insolation Load Index (ALOS CHILI) and the multi-scale Topographic Position Index (ALOS mTPI) datasets.

### "Datasets tagged geophysical in Earth Engine \_|\_ Earth Engine Data Catalog\

- URL: [https://developers.google.com/earth-engine/datasets/tags/geophysical](https://developers.google.com/earth-engine/datasets/tags/geophysical)
- Source ID: `site-docs-root`
- Final score: 159
- Re-rank relevance: N/A

Evidence snippets:
- 2020) is a quasi global, high-resolution gridded dataset (0.05° × 0.05° resolution, 60°S - 70°N) that provides daily minimum (Tmin) and maximum 2-meter temperatures (Tmax) and four derived variables: saturation vapor … chg climate daily era5 geophysical reanalysis Canadian Digital Elevation Model The Canadian Digital Elevation Model (CDEM) is part of Natural Resources Canada's (NRCan) altimetry system and stems from the existing Canadian Digital Elevation Data (CDED).
- For more information see the associated journal article: High-resolution mapping of global surface water and its … geophysical google jrc landsat-derived surface surface-ground-water JRC Global Surface Water Mapping Layers, v1.4 This dataset contains maps of the location and temporal distribution of surface water from 1984 to 2021 and provides statistics on the extent and change of those water surfaces.
- For more information see the associated journal article: High-resolution mapping of global surface water and its … change-detection geophysical google jrc landsat-derived surface JRC Global Surface Water Metadata, v1.4 This dataset contains maps of the location and temporal distribution of surface water from 1984 to 2021 and provides statistics on the extent and change of those water surfaces.
- For more information see the associated journal article: High-resolution mapping of global surface water and its … geophysical google history jrc landsat-derived monthly JRC Yearly Water Classification History, v1.4 This dataset contains maps of the location and temporal distribution of surface water from 1984 to 2021 and provides statistics on the extent and change of those water surfaces.

