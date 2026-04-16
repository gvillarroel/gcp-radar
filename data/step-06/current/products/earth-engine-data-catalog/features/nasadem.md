---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:19.858Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "NASADEM"
feature_slug: "nasadem"
latest_feature_date: "2021-01-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/NASA_NASADEM_HGT_001"
keywords:
  - "nasadem"
  - "nasa"
  - "30"
  - "digital"
  - "elevation"
  - "model"
  - "derived"
  - "srtm"
---

# NASADEM

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

NASA's 30 m digital elevation model derived from SRTM and auxiliary datasets.

## Extended Definition

NASA's 30 m digital elevation model derived from SRTM and auxiliary datasets.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/NASA_NASADEM_HGT_001](https://developers.google.com/earth-engine/datasets/catalog/NASA_NASADEM_HGT_001)

## Supporting Pages

### "SRTM Digital Elevation Data Version 4 \_|\_ Earth Engine Data Catalog \_\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/CGIAR_SRTM90_V4](https://developers.google.com/earth-engine/datasets/catalog/CGIAR_SRTM90_V4)
- Source ID: `site-docs-root-2`
- Final score: 78
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Dataset Availability 2000-02-11T00:00:00Z–2000-02-22T00:00:00Z Dataset Producer NASA/CGIAR Earth Engine Snippet ee.Image("CGIAR/SRTM90 V4") open in new Tags dem elevation elevation-topography geophysical srtm topography cgiar Description The Shuttle Radar Topography Mission (SRTM) digital elevation dataset was originally produced to provide consistent, high-quality elevation data at near global scope.
- Map () m . set center ( - 112.8598 , 36.2841 , 10 ) m . add layer ( slope , { 'min' : 0 , 'max' : 60 }, 'slope' ) m Open in Code Editor SRTM Digital Elevation Data Version 4 The Shuttle Radar Topography Mission (SRTM) digital elevation dataset was originally produced to provide consistent, high-quality elevation data at near global scope.
- Page Summary outlined flag The CGIAR/SRTM90 V4 dataset provides consistent, high-quality digital elevation data from the Shuttle Radar Topography Mission, processed to fill voids and enhance usability.
- Home Earth Engine Data Catalog All Datasets Send feedback SRTM Digital Elevation Data Version 4 Stay organized with collections Save and categorize content based on your preferences.

### NASADEM: NASA 30m Digital Elevation Model | Earth Engine Data Catalog | Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog/NASA_NASADEM_HGT_001](https://developers.google.com/earth-engine/datasets/catalog/NASA_NASADEM_HGT_001)
- Source ID: `feature-recovery-direct-http`
- Final score: 73
- Re-rank relevance: N/A

Evidence snippets:
- Documentation: User's Guide NASA/NASADEM_HGT/001, dem,elevation,elevation-topography,geophysical,nasa,srtm,topography,usgs 2000-02-11T00:00:00Z/2000-02-22T00:00:00Z -56 -180 60 180 Google Earth Engine https://developers.google.com/earth-engine/datasets Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],["The NASADEM dataset, provided by NASA/USGS/JPL-Caltech, offers reprocessed SRTM elevation data from February 11-22, 2000, with 30-meter pixel resolution.
- Dataset Availability 2000-02-11T00:00:00Z–2000-02-22T00:00:00Z Dataset Producer NASA / USGS / JPL-Caltech Earth Engine Snippet ee.Image("NASA/NASADEM_HGT/001") open_in_new Tags dem elevation elevation-topography geophysical nasa srtm topography usgs nasadem Description NASADEM is a reprocessing of SRTM data, with improved accuracy by incorporating auxiliary data from ASTER GDEM, ICESat GLAS, and PRISM datasets.
- Map . addLayer ( elevation . updateMask ( elevation . gt ( 0 )), elevationVis , 'Elevation' ); Map . setCenter ( 17.93 , 7.71 , 2 ); Open in Code Editor NASADEM: NASA 30m Digital Elevation Model NASADEM is a reprocessing of SRTM data, with improved accuracy by incorporating auxiliary data from ASTER GDEM, ICESat GLAS, and PRISM datasets.
- Image ( 'NASA/NASADEM_HGT/001' ); var elevation = dataset . select ( 'elevation' ); // Add a white background image to the map. var background = ee .

### "Copernicus DEM GLO-30: Global 30m Digital Elevation Model \_|\_ Earth Engine\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_DEM_GLO30](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_DEM_GLO30)
- Source ID: `site-docs-root-2`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- ImageCollection ( 'COPERNICUS/DEM/GLO30' ). mosaic (); Map . setCenter ( - 6.746 , 46.529 , 4 ); // Relative, vertical accuracy in form of the standard deviation of // the interferometric phase error. var hem = dataset . select ( 'HEM' ); var hemVis = { // Range of the values is 0.09 to 43.4. min : 0.0 , max : 4.0 , palette : [ 'blue' , 'green' , 'yellow' , 'orange' , 'darkorange' , 'red' ], }; Map . addLayer ( hem , hemVis , 'Height Error Mask (HEM; m)' , false ); var edm = dataset . select ( 'EDM' ); var edmVis = { min : 0 , max : 13 , palette : [ 'black' , // 0: Void (no data) 'white' , // 1: Not edited 'red' , // 2: Infill of external elevation data 'green' , // 3: Interpolated pixels 'orange' , // 4: Smoothed pixels 'yellow' , // 5: Airport editing 'magenta' , // 6: Raised negative elevation pixels 'cyan' , // 7: Flattened pixels 'blue' , // 8: Ocean pixels 'purple' , // 9: Lake pixels 'brown' , // 10: River pixels 'lightgray' , // 11: Shoreline pixels 'olive' , // 12: Morphed pixels 'steelblue' , // 13: Shifted pixels ], }; Map . addLayer ( edm , edmVis , 'Editing and Masking (EDM)' , false , 0.75 ); // Source data diagram. var flm = dataset . select ( 'FLM' ); var originalValues = [ 0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 100 , 101 ]; var remappedValues = [ 0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 ]; var flmRemapped = flm . remap ( originalValues , remappedValues ). rename ( 'FLM' ); var flmVis = { min : 0 , max : 11 , palette : [ 'black' , // 0: Void (no data) 'white' , // 1: Edited (except filled pixels) 'grey' , // 2: Not edited / not filled 'red' , // 3: ASTER 'green' , // 4: SRTM90 'blue' , // 5: SRTM30 'yellow' , // 6: GMTED2010 'cyan' , // 7: SRTM30plus 'magenta' , // 8: TerraSAR-X Radargrammetric DEM 'orange' , // 9: AW3D30 'purple' , // 100 -> remapped to 10: Norway DEM 'brown' , // 101 -> remapped to 11: DSM05 Spain ], }; Map . addLayer ( flmRemapped , flmVis , 'Fill and Lineage Mask (FLM)' , false , 0.75 ); var wbm = dataset . select ( 'WBM' ); var wbmVis = { min : 0 , max : 3 , palette : [ 'lightgray' , // 0: No water. 'cadetblue' , // 1: Ocean. 'darkblue' , // 2: Lake. 'blueviolet' , // 3: River. ], }; Map . addLayer ( wbm , wbmVis , 'Water Body Mask (WBM)' , false , 0.75 ); var dsm = dataset . select ( 'DEM' ) . setDefaultProjection ( 'EPSG:3857' , null , 30 ) . rename ( 'DSM' ); var dsmVis = { min : 0.0 , max : 3000.0 , palette : [ '333399' , '00a2e5' , '55dd77' , 'ffff99' , 'aa926b' , 'aa928d' , 'ffffff' ], }; Map . addLayer ( dsm , dsmVis , 'Digital Surface Model (DSM; m)' , true , 0.75 ); // Multiply by 20 to exaggerate the hillshade for a better visualization.
- Editing of shore- and coastlines, special … COPERNICUS/DEM/GLO30, copernicus,dem,elevation,elevation-topography,geophysical 2010-12-01T00:00:00Z/2015-01-31T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],["The Copernicus DEM GLO-30 dataset, available from 2010-12-01 to 2015-01-31, offers a 30-meter resolution Digital Surface Model derived from the WorldDEM.
- Dataset Availability 2010-12-01T00:00:00Z–2015-01-31T00:00:00Z Dataset Producer Copernicus Earth Engine Snippet ee.ImageCollection("COPERNICUS/DEM/GLO30") open in new Tags copernicus dem elevation elevation-topography geophysical Description The Copernicus DEM is a Digital Surface Model (DSM) which represents the surface of the Earth including buildings, infrastructure and vegetation.
- Terrain . hillshade ( dsm . multiply ( 20.0 )), null , 'Digital Surface Model (DSM) Hillshade' , true , 0.75 ); Open in Code Editor Copernicus DEM GLO-30: Global 30m Digital Elevation Model The Copernicus DEM is a Digital Surface Model (DSM) which represents the surface of the Earth including buildings, infrastructure and vegetation.

