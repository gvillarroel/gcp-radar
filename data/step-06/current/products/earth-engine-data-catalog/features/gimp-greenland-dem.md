---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T12:40:58.823Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "GIMP Greenland DEM"
feature_slug: "gimp-greenland-dem"
latest_feature_date: "2018-07-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/AU_GA_DEM_1SEC_v10_DEM-S"
  - "https://developers.google.com/earth-engine/datasets/catalog/AU_GA_DEM_1SEC_v10_DEM-H"
  - "https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_DEM_GLO30"
keywords:
  - "gimp"
  - "greenland"
  - "dem"
  - "digital"
  - "elevation"
  - "model"
  - "from"
  - "the"
---

# GIMP Greenland DEM

Product: Earth Engine Data Catalog
Coverage: LOW

## Step 02 Summary

A Greenland digital elevation model from the Greenland Mapping Project.

## Extended Definition

A Greenland digital elevation model from the Greenland Mapping Project.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/AU_GA_DEM_1SEC_v10_DEM-S](https://developers.google.com/earth-engine/datasets/catalog/AU_GA_DEM_1SEC_v10_DEM-S)
- [https://developers.google.com/earth-engine/datasets/catalog/AU_GA_DEM_1SEC_v10_DEM-H](https://developers.google.com/earth-engine/datasets/catalog/AU_GA_DEM_1SEC_v10_DEM-H)
- [https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_DEM_GLO30](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_DEM_GLO30)

## Supporting Pages

### "DEM-S: Australian Smoothed Digital Elevation Model \_|\_ Earth Engine Data\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/AU_GA_DEM_1SEC_v10_DEM-S](https://developers.google.com/earth-engine/datasets/catalog/AU_GA_DEM_1SEC_v10_DEM-S)
- Source ID: `site-docs-root-2`
- Final score: 216
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Image ( 'AU/GA/DEM 1SEC/v10/DEM-S' ); var elevation = dataset . select ( 'elevation' ); var elevationVis = { min : - 10.0 , max : 1300.0 , palette : [ '3ae237' , 'b5e22e' , 'd6e21f' , 'fff705' , 'ffd611' , 'ffb613' , 'ff8b13' , 'ff6e08' , 'ff500d' , 'ff0000' , 'de0101' , 'c21301' , '0602ff' , '235cb1' , '307ef3' , '269db1' , '30c8e2' , '32d3ef' , '3be285' , '3ff38f' , '86e26f' ], }; Map . setCenter ( 133.95 , - 24.69 , 5 ); Map . addLayer ( elevation , elevationVis , 'Elevation' ); Open in Code Editor DEM-S: Australian Smoothed Digital Elevation Model The Smoothed Digital Elevation Model (DEM-S) was derived from the SRTM data acquired by NASA in February 2000.
- Dataset Availability 2010-02-01T00:00:00Z–2010-02-01T00:00:00Z Dataset Producer Geoscience Australia Earth Engine Snippet ee.Image("AU/GA/DEM 1SEC/v10/DEM-S") open in new Tags australia dem elevation elevation-topography ga geophysical geoscience-australia smoothed srtm Description The Smoothed Digital Elevation Model (DEM-S) was derived from the SRTM data acquired by NASA in February 2000.
- Page Summary outlined flag The Smoothed Digital Elevation Model (DEM-S) is derived from SRTM data and represents ground surface topography, excluding vegetation.
- Home Earth Engine Data Catalog All Datasets Send feedback DEM-S: Australian Smoothed Digital Elevation Model Stay organized with collections Save and categorize content based on your preferences.

### "DEM-H: Australian SRTM Hydrologically Enforced Digital Elevation Model \_\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/AU_GA_DEM_1SEC_v10_DEM-H](https://developers.google.com/earth-engine/datasets/catalog/AU_GA_DEM_1SEC_v10_DEM-H)
- Source ID: `site-docs-root-2`
- Final score: 202
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Image ( 'AU/GA/DEM 1SEC/v10/DEM-H' ); var elevation = dataset . select ( 'elevation' ); var elevationVis = { min : - 10.0 , max : 1300.0 , palette : [ '3ae237' , 'b5e22e' , 'd6e21f' , 'fff705' , 'ffd611' , 'ffb613' , 'ff8b13' , 'ff6e08' , 'ff500d' , 'ff0000' , 'de0101' , 'c21301' , '0602ff' , '235cb1' , '307ef3' , '269db1' , '30c8e2' , '32d3ef' , '3be285' , '3ff38f' , '86e26f' ], }; Map . setCenter ( 133.95 , - 24.69 , 5 ); Map . addLayer ( elevation , elevationVis , 'Elevation' ); Open in Code Editor DEM-H: Australian SRTM Hydrologically Enforced Digital Elevation Model The Hydrologically Enforced Digital Elevation Model (DEM-H) was derived from the SRTM data acquired by NASA in February 2000.
- Dataset Availability 2010-02-01T00:00:00Z–2010-02-01T00:00:00Z Dataset Producer Geoscience Australia Earth Engine Snippet ee.Image("AU/GA/DEM 1SEC/v10/DEM-H") open in new Tags australia dem elevation elevation-topography ga geophysical geoscience-australia smoothed srtm Description The Hydrologically Enforced Digital Elevation Model (DEM-H) was derived from the SRTM data acquired by NASA in February 2000.
- The dataset was derived from the 1 second smoothed Digital Elevation Model (DEM-S; ANZCW0703014016) by enforcing hydrological connectivity with the ANUDEM software, using selected AusHydro V1.6 (February 2010) 1:250,000 scale watercourse lines (ANZCW0503900101) and lines derived from DEM-S to define the watercourses.
- Page Summary outlined flag The Hydrologically Enforced Digital Elevation Model (DEM-H) is derived from SRTM data and designed for hydrological analysis.

### "Copernicus DEM GLO-30: Global 30m Digital Elevation Model \_|\_ Earth Engine\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_DEM_GLO30](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_DEM_GLO30)
- Source ID: `site-docs-root-2`
- Final score: 192
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Editing of shore- and coastlines, special … COPERNICUS/DEM/GLO30, copernicus,dem,elevation,elevation-topography,geophysical 2010-12-01T00:00:00Z/2015-01-31T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],["The Copernicus DEM GLO-30 dataset, available from 2010-12-01 to 2015-01-31, offers a 30-meter resolution Digital Surface Model derived from the WorldDEM.
- ImageCollection ( 'COPERNICUS/DEM/GLO30' ). mosaic (); Map . setCenter ( - 6.746 , 46.529 , 4 ); // Relative, vertical accuracy in form of the standard deviation of // the interferometric phase error. var hem = dataset . select ( 'HEM' ); var hemVis = { // Range of the values is 0.09 to 43.4. min : 0.0 , max : 4.0 , palette : [ 'blue' , 'green' , 'yellow' , 'orange' , 'darkorange' , 'red' ], }; Map . addLayer ( hem , hemVis , 'Height Error Mask (HEM; m)' , false ); var edm = dataset . select ( 'EDM' ); var edmVis = { min : 0 , max : 13 , palette : [ 'black' , // 0: Void (no data) 'white' , // 1: Not edited 'red' , // 2: Infill of external elevation data 'green' , // 3: Interpolated pixels 'orange' , // 4: Smoothed pixels 'yellow' , // 5: Airport editing 'magenta' , // 6: Raised negative elevation pixels 'cyan' , // 7: Flattened pixels 'blue' , // 8: Ocean pixels 'purple' , // 9: Lake pixels 'brown' , // 10: River pixels 'lightgray' , // 11: Shoreline pixels 'olive' , // 12: Morphed pixels 'steelblue' , // 13: Shifted pixels ], }; Map . addLayer ( edm , edmVis , 'Editing and Masking (EDM)' , false , 0.75 ); // Source data diagram. var flm = dataset . select ( 'FLM' ); var originalValues = [ 0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 100 , 101 ]; var remappedValues = [ 0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 ]; var flmRemapped = flm . remap ( originalValues , remappedValues ). rename ( 'FLM' ); var flmVis = { min : 0 , max : 11 , palette : [ 'black' , // 0: Void (no data) 'white' , // 1: Edited (except filled pixels) 'grey' , // 2: Not edited / not filled 'red' , // 3: ASTER 'green' , // 4: SRTM90 'blue' , // 5: SRTM30 'yellow' , // 6: GMTED2010 'cyan' , // 7: SRTM30plus 'magenta' , // 8: TerraSAR-X Radargrammetric DEM 'orange' , // 9: AW3D30 'purple' , // 100 -> remapped to 10: Norway DEM 'brown' , // 101 -> remapped to 11: DSM05 Spain ], }; Map . addLayer ( flmRemapped , flmVis , 'Fill and Lineage Mask (FLM)' , false , 0.75 ); var wbm = dataset . select ( 'WBM' ); var wbmVis = { min : 0 , max : 3 , palette : [ 'lightgray' , // 0: No water. 'cadetblue' , // 1: Ocean. 'darkblue' , // 2: Lake. 'blueviolet' , // 3: River. ], }; Map . addLayer ( wbm , wbmVis , 'Water Body Mask (WBM)' , false , 0.75 ); var dsm = dataset . select ( 'DEM' ) . setDefaultProjection ( 'EPSG:3857' , null , 30 ) . rename ( 'DSM' ); var dsmVis = { min : 0.0 , max : 3000.0 , palette : [ '333399' , '00a2e5' , '55dd77' , 'ffff99' , 'aa926b' , 'aa928d' , 'ffffff' ], }; Map . addLayer ( dsm , dsmVis , 'Digital Surface Model (DSM; m)' , true , 0.75 ); // Multiply by 20 to exaggerate the hillshade for a better visualization.
- Dataset Availability 2010-12-01T00:00:00Z–2015-01-31T00:00:00Z Dataset Producer Copernicus Earth Engine Snippet ee.ImageCollection("COPERNICUS/DEM/GLO30") open in new Tags copernicus dem elevation elevation-topography geophysical Description The Copernicus DEM is a Digital Surface Model (DSM) which represents the surface of the Earth including buildings, infrastructure and vegetation.
- Terrain . hillshade ( dsm . multiply ( 20.0 )), null , 'Digital Surface Model (DSM) Hillshade' , true , 0.75 ); Open in Code Editor Copernicus DEM GLO-30: Global 30m Digital Elevation Model The Copernicus DEM is a Digital Surface Model (DSM) which represents the surface of the Earth including buildings, infrastructure and vegetation.

