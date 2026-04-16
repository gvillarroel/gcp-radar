---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:19.441Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "NEON Digital Elevation Model"
feature_slug: "neon-digital-elevation-model"
latest_feature_date: "2024-08-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/tags/elevation-topography"
  - "https://developers.google.com/earth-engine/datasets/catalog/AU_GA_DEM_1SEC_v10_DEM-H"
  - "https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_DEM_GLO30"
keywords:
  - "neon"
  - "digital"
  - "elevation"
  - "model"
  - "dataset"
---

# NEON Digital Elevation Model

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

A NEON digital elevation model dataset.

## Extended Definition

A NEON digital elevation model dataset.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/tags/elevation-topography](https://developers.google.com/earth-engine/datasets/tags/elevation-topography)
- [https://developers.google.com/earth-engine/datasets/catalog/AU_GA_DEM_1SEC_v10_DEM-H](https://developers.google.com/earth-engine/datasets/catalog/AU_GA_DEM_1SEC_v10_DEM-H)
- [https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_DEM_GLO30](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_DEM_GLO30)

## Supporting Pages

### "Datasets tagged elevation-topography in Earth Engine \_|\_ Earth Engine\

- URL: [https://developers.google.com/earth-engine/datasets/tags/elevation-topography](https://developers.google.com/earth-engine/datasets/tags/elevation-topography)
- Source ID: `site-docs-root-3`
- Final score: 188
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The model contains 3 bands of terrain data: a Digital Terrain Model (DTM), a first return Digital Surface Model (DSM), … dem elevation elevation-topography lidar GMTED2010: Global Multi-resolution Terrain Elevation Data 2010 The Global Multi-resolution Terrain Elevation Data 2010 (GMTED2010) dataset contains elevation data for the globe collected from various sources at 7.5 arc-seconds resolution.
- This SRTM V3 product (SRTM Plus) is provided by NASA JPL at a resolution of 1 arc-second … dem elevation elevation-topography geophysical nasa srtm NASADEM: NASA 30m Digital Elevation Model NASADEM is a reprocessing of SRTM data, with improved accuracy by incorporating auxiliary data from ASTER GDEM, ICESat GLAS, and PRISM datasets.
- Strip DEM files correspond to the overlapping area of the input stereoscopic imagery pair strips as they are collected by DigitalGlobe's … dem elevation-topography geophysical pgc rema umn RGE ALTI: IGN RGE ALTI Digital Elevation 1m The RGE ALTI dataset describes the digital elevation model (DEM) of France with the pixel size of 1m.
- The primary source dataset for GMTED2010 is NGA''s SRTM Digital Terrain Elevation Data (DTED®, … dem elevation elevation-topography geophysical srtm topography GTOPO30: Global 30 Arc-Second Elevation GTOPO30 is a global digital elevation model (DEM) with a horizontal grid spacing of 30 arc seconds (approximately 1 kilometer).

### "Copernicus DEM GLO-30: Global 30m Digital Elevation Model \_|\_ Earth Engine\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_DEM_GLO30](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_DEM_GLO30)
- Source ID: `site-docs-root-2`
- Final score: 165
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ImageCollection ( 'COPERNICUS/DEM/GLO30' ). mosaic (); Map . setCenter ( - 6.746 , 46.529 , 4 ); // Relative, vertical accuracy in form of the standard deviation of // the interferometric phase error. var hem = dataset . select ( 'HEM' ); var hemVis = { // Range of the values is 0.09 to 43.4. min : 0.0 , max : 4.0 , palette : [ 'blue' , 'green' , 'yellow' , 'orange' , 'darkorange' , 'red' ], }; Map . addLayer ( hem , hemVis , 'Height Error Mask (HEM; m)' , false ); var edm = dataset . select ( 'EDM' ); var edmVis = { min : 0 , max : 13 , palette : [ 'black' , // 0: Void (no data) 'white' , // 1: Not edited 'red' , // 2: Infill of external elevation data 'green' , // 3: Interpolated pixels 'orange' , // 4: Smoothed pixels 'yellow' , // 5: Airport editing 'magenta' , // 6: Raised negative elevation pixels 'cyan' , // 7: Flattened pixels 'blue' , // 8: Ocean pixels 'purple' , // 9: Lake pixels 'brown' , // 10: River pixels 'lightgray' , // 11: Shoreline pixels 'olive' , // 12: Morphed pixels 'steelblue' , // 13: Shifted pixels ], }; Map . addLayer ( edm , edmVis , 'Editing and Masking (EDM)' , false , 0.75 ); // Source data diagram. var flm = dataset . select ( 'FLM' ); var originalValues = [ 0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 100 , 101 ]; var remappedValues = [ 0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 ]; var flmRemapped = flm . remap ( originalValues , remappedValues ). rename ( 'FLM' ); var flmVis = { min : 0 , max : 11 , palette : [ 'black' , // 0: Void (no data) 'white' , // 1: Edited (except filled pixels) 'grey' , // 2: Not edited / not filled 'red' , // 3: ASTER 'green' , // 4: SRTM90 'blue' , // 5: SRTM30 'yellow' , // 6: GMTED2010 'cyan' , // 7: SRTM30plus 'magenta' , // 8: TerraSAR-X Radargrammetric DEM 'orange' , // 9: AW3D30 'purple' , // 100 -> remapped to 10: Norway DEM 'brown' , // 101 -> remapped to 11: DSM05 Spain ], }; Map . addLayer ( flmRemapped , flmVis , 'Fill and Lineage Mask (FLM)' , false , 0.75 ); var wbm = dataset . select ( 'WBM' ); var wbmVis = { min : 0 , max : 3 , palette : [ 'lightgray' , // 0: No water. 'cadetblue' , // 1: Ocean. 'darkblue' , // 2: Lake. 'blueviolet' , // 3: River. ], }; Map . addLayer ( wbm , wbmVis , 'Water Body Mask (WBM)' , false , 0.75 ); var dsm = dataset . select ( 'DEM' ) . setDefaultProjection ( 'EPSG:3857' , null , 30 ) . rename ( 'DSM' ); var dsmVis = { min : 0.0 , max : 3000.0 , palette : [ '333399' , '00a2e5' , '55dd77' , 'ffff99' , 'aa926b' , 'aa928d' , 'ffffff' ], }; Map . addLayer ( dsm , dsmVis , 'Digital Surface Model (DSM; m)' , true , 0.75 ); // Multiply by 20 to exaggerate the hillshade for a better visualization.
- Editing of shore- and coastlines, special … COPERNICUS/DEM/GLO30, copernicus,dem,elevation,elevation-topography,geophysical 2010-12-01T00:00:00Z/2015-01-31T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],["The Copernicus DEM GLO-30 dataset, available from 2010-12-01 to 2015-01-31, offers a 30-meter resolution Digital Surface Model derived from the WorldDEM.
- Dataset Availability 2010-12-01T00:00:00Z–2015-01-31T00:00:00Z Dataset Producer Copernicus Earth Engine Snippet ee.ImageCollection("COPERNICUS/DEM/GLO30") open in new Tags copernicus dem elevation elevation-topography geophysical Description The Copernicus DEM is a Digital Surface Model (DSM) which represents the surface of the Earth including buildings, infrastructure and vegetation.
- Home Earth Engine Data Catalog All Datasets Send feedback Copernicus DEM GLO-30: Global 30m Digital Elevation Model Stay organized with collections Save and categorize content based on your preferences.

### "DEM-H: Australian SRTM Hydrologically Enforced Digital Elevation Model \_\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/AU_GA_DEM_1SEC_v10_DEM-H](https://developers.google.com/earth-engine/datasets/catalog/AU_GA_DEM_1SEC_v10_DEM-H)
- Source ID: `site-docs-root-2`
- Final score: 165
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Image ( 'AU/GA/DEM 1SEC/v10/DEM-H' ); var elevation = dataset . select ( 'elevation' ); var elevationVis = { min : - 10.0 , max : 1300.0 , palette : [ '3ae237' , 'b5e22e' , 'd6e21f' , 'fff705' , 'ffd611' , 'ffb613' , 'ff8b13' , 'ff6e08' , 'ff500d' , 'ff0000' , 'de0101' , 'c21301' , '0602ff' , '235cb1' , '307ef3' , '269db1' , '30c8e2' , '32d3ef' , '3be285' , '3ff38f' , '86e26f' ], }; Map . setCenter ( 133.95 , - 24.69 , 5 ); Map . addLayer ( elevation , elevationVis , 'Elevation' ); Open in Code Editor DEM-H: Australian SRTM Hydrologically Enforced Digital Elevation Model The Hydrologically Enforced Digital Elevation Model (DEM-H) was derived from the SRTM data acquired by NASA in February 2000.
- Dataset Availability 2010-02-01T00:00:00Z–2010-02-01T00:00:00Z Dataset Producer Geoscience Australia Earth Engine Snippet ee.Image("AU/GA/DEM 1SEC/v10/DEM-H") open in new Tags australia dem elevation elevation-topography ga geophysical geoscience-australia smoothed srtm Description The Hydrologically Enforced Digital Elevation Model (DEM-H) was derived from the SRTM data acquired by NASA in February 2000.
- The dataset was derived from the 1 second smoothed Digital Elevation Model (DEM-S; ANZCW0703014016) by enforcing hydrological connectivity with the ANUDEM software, using selected AusHydro V1.6 (February 2010) 1:250,000 scale watercourse lines (ANZCW0503900101) and lines derived from DEM-S to define the watercourses.
- Home Earth Engine Data Catalog All Datasets Send feedback DEM-H: Australian SRTM Hydrologically Enforced Digital Elevation Model Stay organized with collections Save and categorize content based on your preferences.

