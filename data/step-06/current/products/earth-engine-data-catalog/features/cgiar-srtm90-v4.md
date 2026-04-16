---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:20.419Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "CGIAR/SRTM90_V4"
feature_slug: "cgiar-srtm90-v4"
latest_feature_date: "2012-11-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/CGIAR_SRTM90_V4"
keywords:
  - "cgiar"
  - "srtm90"
  - "v4"
  - "srtm"
  - "digital"
  - "elevation"
  - "version"
  - "provides"
---

# CGIAR/SRTM90_V4

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

SRTM Digital Elevation Data Version 4 provides global elevation data.

## Extended Definition

SRTM Digital Elevation Data Version 4 provides global elevation data.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/CGIAR_SRTM90_V4](https://developers.google.com/earth-engine/datasets/catalog/CGIAR_SRTM90_V4)

## Supporting Pages

### "SRTM Digital Elevation Data Version 4 \_|\_ Earth Engine Data Catalog \_\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/CGIAR_SRTM90_V4](https://developers.google.com/earth-engine/datasets/catalog/CGIAR_SRTM90_V4)
- Source ID: `site-docs-root-2`
- Final score: 394
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CGIAR/SRTM90 V4, dem,elevation,elevation-topography,geophysical,srtm,topography 2000-02-11T00:00:00Z/2000-02-22T00:00:00Z -56 -180 60 180 Google Earth Engine https://developers.google.com/earth-engine/datasets Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],["The CGIAR-CSI SRTM Version 4 dataset, available from February 11th to 22nd, 2000, provides near-global elevation data processed to fill voids.
- Page Summary outlined flag The CGIAR/SRTM90 V4 dataset provides consistent, high-quality digital elevation data from the Shuttle Radar Topography Mission, processed to fill voids and enhance usability.
- Dataset Availability 2000-02-11T00:00:00Z–2000-02-22T00:00:00Z Dataset Producer NASA/CGIAR Earth Engine Snippet ee.Image("CGIAR/SRTM90 V4") open in new Tags dem elevation elevation-topography geophysical srtm topography cgiar Description The Shuttle Radar Topography Mission (SRTM) digital elevation dataset was originally produced to provide consistent, high-quality elevation data at near global scope.
- Image ( 'CGIAR/SRTM90 V4' ); var elevation = dataset . select ( 'elevation' ); var slope = ee .

### "Copernicus DEM GLO-30: Global 30m Digital Elevation Model \_|\_ Earth Engine\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_DEM_GLO30](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_DEM_GLO30)
- Source ID: `site-docs-root-2`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- ImageCollection ( 'COPERNICUS/DEM/GLO30' ). mosaic (); Map . setCenter ( - 6.746 , 46.529 , 4 ); // Relative, vertical accuracy in form of the standard deviation of // the interferometric phase error. var hem = dataset . select ( 'HEM' ); var hemVis = { // Range of the values is 0.09 to 43.4. min : 0.0 , max : 4.0 , palette : [ 'blue' , 'green' , 'yellow' , 'orange' , 'darkorange' , 'red' ], }; Map . addLayer ( hem , hemVis , 'Height Error Mask (HEM; m)' , false ); var edm = dataset . select ( 'EDM' ); var edmVis = { min : 0 , max : 13 , palette : [ 'black' , // 0: Void (no data) 'white' , // 1: Not edited 'red' , // 2: Infill of external elevation data 'green' , // 3: Interpolated pixels 'orange' , // 4: Smoothed pixels 'yellow' , // 5: Airport editing 'magenta' , // 6: Raised negative elevation pixels 'cyan' , // 7: Flattened pixels 'blue' , // 8: Ocean pixels 'purple' , // 9: Lake pixels 'brown' , // 10: River pixels 'lightgray' , // 11: Shoreline pixels 'olive' , // 12: Morphed pixels 'steelblue' , // 13: Shifted pixels ], }; Map . addLayer ( edm , edmVis , 'Editing and Masking (EDM)' , false , 0.75 ); // Source data diagram. var flm = dataset . select ( 'FLM' ); var originalValues = [ 0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 100 , 101 ]; var remappedValues = [ 0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 ]; var flmRemapped = flm . remap ( originalValues , remappedValues ). rename ( 'FLM' ); var flmVis = { min : 0 , max : 11 , palette : [ 'black' , // 0: Void (no data) 'white' , // 1: Edited (except filled pixels) 'grey' , // 2: Not edited / not filled 'red' , // 3: ASTER 'green' , // 4: SRTM90 'blue' , // 5: SRTM30 'yellow' , // 6: GMTED2010 'cyan' , // 7: SRTM30plus 'magenta' , // 8: TerraSAR-X Radargrammetric DEM 'orange' , // 9: AW3D30 'purple' , // 100 -> remapped to 10: Norway DEM 'brown' , // 101 -> remapped to 11: DSM05 Spain ], }; Map . addLayer ( flmRemapped , flmVis , 'Fill and Lineage Mask (FLM)' , false , 0.75 ); var wbm = dataset . select ( 'WBM' ); var wbmVis = { min : 0 , max : 3 , palette : [ 'lightgray' , // 0: No water. 'cadetblue' , // 1: Ocean. 'darkblue' , // 2: Lake. 'blueviolet' , // 3: River. ], }; Map . addLayer ( wbm , wbmVis , 'Water Body Mask (WBM)' , false , 0.75 ); var dsm = dataset . select ( 'DEM' ) . setDefaultProjection ( 'EPSG:3857' , null , 30 ) . rename ( 'DSM' ); var dsmVis = { min : 0.0 , max : 3000.0 , palette : [ '333399' , '00a2e5' , '55dd77' , 'ffff99' , 'aa926b' , 'aa928d' , 'ffffff' ], }; Map . addLayer ( dsm , dsmVis , 'Digital Surface Model (DSM; m)' , true , 0.75 ); // Multiply by 20 to exaggerate the hillshade for a better visualization.
- EDM Class Table Value Color Description 0 None Void (no data) 1 None Not edited 2 None Infill of external elevation data 3 None Interpolated pixels 4 None Smoothed pixels 5 None Airport editing 6 None Raised negative elevation pixels 7 None Flattened pixels 8 None Ocean pixels 9 None Lake pixels 10 None River pixels 11 None Shoreline pixels 12 None Morphed pixels (series of pixels manually set) 13 None Shifted pixels FLM Class Table Value Color Description 0 None Void (no data) 1 None Edited (except filled pixels) 2 None Not edited / not filled 3 None ASTER 4 None SRTM90 5 None SRTM30 6 None GMTED2010 7 None SRTM30plus 8 None TerraSAR-X Radargrammetric DEM 9 None AW3D30 100 None Norway DEM 101 None DSM05 Spain WBM Class Table Value Color Description 0 None No water 1 None Ocean 2 None Lake 3 None River Terms of Use Terms of Use The GLO-30 dataset is available worldwide with a free license with the exception of two countries (Armenia and Azerbaijan).
- Editing of shore- and coastlines, special … COPERNICUS/DEM/GLO30, copernicus,dem,elevation,elevation-topography,geophysical 2010-12-01T00:00:00Z/2015-01-31T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],["The Copernicus DEM GLO-30 dataset, available from 2010-12-01 to 2015-01-31, offers a 30-meter resolution Digital Surface Model derived from the WorldDEM.
- Dataset Availability 2010-12-01T00:00:00Z–2015-01-31T00:00:00Z Dataset Producer Copernicus Earth Engine Snippet ee.ImageCollection("COPERNICUS/DEM/GLO30") open in new Tags copernicus dem elevation elevation-topography geophysical Description The Copernicus DEM is a Digital Surface Model (DSM) which represents the surface of the Earth including buildings, infrastructure and vegetation.

### "Datasets tagged elevation in Earth Engine \_|\_ Earth Engine Data Catalog\

- URL: [https://developers.google.com/earth-engine/datasets/tags/elevation](https://developers.google.com/earth-engine/datasets/tags/elevation)
- Source ID: `site-docs-root`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- This version of the SRTM digital elevation data has been processed to fill data voids, and to facilitate its ease of use. dem elevation elevation-topography geophysical srtm topography US Lithology The Lithology dataset provides classes of the general types of parent material of soil on the surface.
- The vertical … dem elevation elevation-topography geophysical SRTM Digital Elevation Data Version 4 The Shuttle Radar Topography Mission (SRTM) digital elevation dataset was originally produced to provide consistent, high-quality elevation data at near global scope.
- The Global Ecosystem Dynamics Investigation GEDI mission … elevation forest-biomass gedi larse nasa table GEDI L4B Gridded Aboveground Biomass Density (Version 2) This Global Ecosystem Dynamics Investigation (GEDI) L4B product provides 1 km x 1 km estimates of mean aboveground biomass density (AGBD) based on observations from mission week 19 starting on 2019-04-18 to mission week 138 ending on 2021-08-04.
- The model contains 3 bands of terrain data: a Digital Terrain Model (DTM), a first return Digital Surface Model (DSM), … dem elevation elevation-topography lidar GEDI L2A Raster Canopy Top Height (Version 2) GEDI's Level 2A Geolocated Elevation and Height Metrics Product (GEDI02 A) is primarily composed of 100 Relative Height (RH) metrics, which collectively describe the waveform collected by GEDI.

