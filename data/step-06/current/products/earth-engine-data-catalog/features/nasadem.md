---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T12:40:58.703Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "NASADEM"
feature_slug: "nasadem"
latest_feature_date: "2021-01-12"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_DEM_GLO30"
  - "https://developers.google.com/earth-engine/datasets/tags/elevation"
  - "https://developers.google.com/earth-engine/datasets/tags/elevation-topography"
keywords:
  - "nasadem"
  - "nasa"
  - "30"
  - "digital"
  - "elevation"
  - "model"
  - "derived"
  - "from"
---

# NASADEM

Product: Earth Engine Data Catalog
Coverage: LOW

## Step 02 Summary

NASA's 30 m digital elevation model derived from SRTM and auxiliary datasets.

## Extended Definition

NASA's 30 m digital elevation model derived from SRTM and auxiliary datasets.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_DEM_GLO30](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_DEM_GLO30)
- [https://developers.google.com/earth-engine/datasets/tags/elevation](https://developers.google.com/earth-engine/datasets/tags/elevation)
- [https://developers.google.com/earth-engine/datasets/tags/elevation-topography](https://developers.google.com/earth-engine/datasets/tags/elevation-topography)

## Supporting Pages

### "Copernicus DEM GLO-30: Global 30m Digital Elevation Model \_|\_ Earth Engine\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_DEM_GLO30](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_DEM_GLO30)
- Source ID: `site-docs-root-2`
- Final score: 206
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Editing of shore- and coastlines, special … COPERNICUS/DEM/GLO30, copernicus,dem,elevation,elevation-topography,geophysical 2010-12-01T00:00:00Z/2015-01-31T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],["The Copernicus DEM GLO-30 dataset, available from 2010-12-01 to 2015-01-31, offers a 30-meter resolution Digital Surface Model derived from the WorldDEM.
- ImageCollection ( 'COPERNICUS/DEM/GLO30' ). mosaic (); Map . setCenter ( - 6.746 , 46.529 , 4 ); // Relative, vertical accuracy in form of the standard deviation of // the interferometric phase error. var hem = dataset . select ( 'HEM' ); var hemVis = { // Range of the values is 0.09 to 43.4. min : 0.0 , max : 4.0 , palette : [ 'blue' , 'green' , 'yellow' , 'orange' , 'darkorange' , 'red' ], }; Map . addLayer ( hem , hemVis , 'Height Error Mask (HEM; m)' , false ); var edm = dataset . select ( 'EDM' ); var edmVis = { min : 0 , max : 13 , palette : [ 'black' , // 0: Void (no data) 'white' , // 1: Not edited 'red' , // 2: Infill of external elevation data 'green' , // 3: Interpolated pixels 'orange' , // 4: Smoothed pixels 'yellow' , // 5: Airport editing 'magenta' , // 6: Raised negative elevation pixels 'cyan' , // 7: Flattened pixels 'blue' , // 8: Ocean pixels 'purple' , // 9: Lake pixels 'brown' , // 10: River pixels 'lightgray' , // 11: Shoreline pixels 'olive' , // 12: Morphed pixels 'steelblue' , // 13: Shifted pixels ], }; Map . addLayer ( edm , edmVis , 'Editing and Masking (EDM)' , false , 0.75 ); // Source data diagram. var flm = dataset . select ( 'FLM' ); var originalValues = [ 0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 100 , 101 ]; var remappedValues = [ 0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 ]; var flmRemapped = flm . remap ( originalValues , remappedValues ). rename ( 'FLM' ); var flmVis = { min : 0 , max : 11 , palette : [ 'black' , // 0: Void (no data) 'white' , // 1: Edited (except filled pixels) 'grey' , // 2: Not edited / not filled 'red' , // 3: ASTER 'green' , // 4: SRTM90 'blue' , // 5: SRTM30 'yellow' , // 6: GMTED2010 'cyan' , // 7: SRTM30plus 'magenta' , // 8: TerraSAR-X Radargrammetric DEM 'orange' , // 9: AW3D30 'purple' , // 100 -> remapped to 10: Norway DEM 'brown' , // 101 -> remapped to 11: DSM05 Spain ], }; Map . addLayer ( flmRemapped , flmVis , 'Fill and Lineage Mask (FLM)' , false , 0.75 ); var wbm = dataset . select ( 'WBM' ); var wbmVis = { min : 0 , max : 3 , palette : [ 'lightgray' , // 0: No water. 'cadetblue' , // 1: Ocean. 'darkblue' , // 2: Lake. 'blueviolet' , // 3: River. ], }; Map . addLayer ( wbm , wbmVis , 'Water Body Mask (WBM)' , false , 0.75 ); var dsm = dataset . select ( 'DEM' ) . setDefaultProjection ( 'EPSG:3857' , null , 30 ) . rename ( 'DSM' ); var dsmVis = { min : 0.0 , max : 3000.0 , palette : [ '333399' , '00a2e5' , '55dd77' , 'ffff99' , 'aa926b' , 'aa928d' , 'ffffff' ], }; Map . addLayer ( dsm , dsmVis , 'Digital Surface Model (DSM; m)' , true , 0.75 ); // Multiply by 20 to exaggerate the hillshade for a better visualization.
- Dataset Availability 2010-12-01T00:00:00Z–2015-01-31T00:00:00Z Dataset Producer Copernicus Earth Engine Snippet ee.ImageCollection("COPERNICUS/DEM/GLO30") open in new Tags copernicus dem elevation elevation-topography geophysical Description The Copernicus DEM is a Digital Surface Model (DSM) which represents the surface of the Earth including buildings, infrastructure and vegetation.
- Terrain . hillshade ( dsm . multiply ( 20.0 )), null , 'Digital Surface Model (DSM) Hillshade' , true , 0.75 ); Open in Code Editor Copernicus DEM GLO-30: Global 30m Digital Elevation Model The Copernicus DEM is a Digital Surface Model (DSM) which represents the surface of the Earth including buildings, infrastructure and vegetation.

### "Datasets tagged elevation in Earth Engine \_|\_ Earth Engine Data Catalog\

- URL: [https://developers.google.com/earth-engine/datasets/tags/elevation](https://developers.google.com/earth-engine/datasets/tags/elevation)
- Source ID: `site-docs-root`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- This SRTM V3 product (SRTM Plus) is provided by NASA JPL at a resolution of 1 arc-second … dem elevation elevation-topography geophysical nasa srtm NASADEM: NASA 30m Digital Elevation Model NASADEM is a reprocessing of SRTM data, with improved accuracy by incorporating auxiliary data from ASTER GDEM, ICESat GLAS, and PRISM datasets.
- The DEM is formed from spatio-temporal fits to elevation measurements accumulated within 1, … antarctica dem elevation elevation-topography polar DEM-H: Australian SRTM Hydrologically Enforced Digital Elevation Model The Hydrologically Enforced Digital Elevation Model (DEM-H) was derived from the SRTM data acquired by NASA in February 2000.
- The DEM-H captures flow paths based on SRTM elevations and mapped stream lines, and supports delineation of … australia dem elevation elevation-topography ga geophysical DEM-S: Australian Smoothed Digital Elevation Model The Smoothed Digital Elevation Model (DEM-S) was derived from the SRTM data acquired by NASA in February 2000.
- More details are … alos dem elevation elevation-topography geophysical jaxa Australian 5M DEM The Digital Elevation Model (DEM) 5 meter Grid of Australia derived from LiDAR model represents a National 5 meter (bare earth) DEM which has been derived from some 236 individual LiDAR surveys between 2001 and 2015 covering an area in excess of 245,000 square kilometers. … australia dem elevation elevation-topography ga geophysical Canadian Digital Elevation Model The Canadian Digital Elevation Model (CDEM) is part of Natural Resources Canada's (NRCan) altimetry system and stems from the existing Canadian Digital Elevation Data (CDED).

### "Datasets tagged elevation-topography in Earth Engine \_|\_ Earth Engine\

- URL: [https://developers.google.com/earth-engine/datasets/tags/elevation-topography](https://developers.google.com/earth-engine/datasets/tags/elevation-topography)
- Source ID: `site-docs-root-3`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- This SRTM V3 product (SRTM Plus) is provided by NASA JPL at a resolution of 1 arc-second … dem elevation elevation-topography geophysical nasa srtm NASADEM: NASA 30m Digital Elevation Model NASADEM is a reprocessing of SRTM data, with improved accuracy by incorporating auxiliary data from ASTER GDEM, ICESat GLAS, and PRISM datasets.
- It is based on the 30m … aspect csp elevation elevation-topography ergo geophysical Greenland DEM - Greenland Mapping Project (GIMP) This Digital Elevation Model (DEM) is constructed from a combination of ASTER and SPOT-5 DEM's for the ice sheet periphery and margin (i.e. below the equilbrium line elevation) south of approximately 82.5°N and AVHRR photoclinometry in the ice sheet interior and far north (Scambos and … arctic elevation-topography gimp greenland nasa polar MERIT DEM: Multi-Error-Removed Improved-Terrain DEM MERIT DEM a high accuracy global DEM at 3 arc second resolution ( 90 m at the equator) produced by eliminating major error components from existing DEMs (NASA SRTM3 DEM, JAXA AW3D DEM, Viewfinder Panoramas DEM).
- The DEM is formed from spatio-temporal fits to elevation measurements accumulated within 1, … antarctica dem elevation elevation-topography polar DEM-H: Australian SRTM Hydrologically Enforced Digital Elevation Model The Hydrologically Enforced Digital Elevation Model (DEM-H) was derived from the SRTM data acquired by NASA in February 2000.
- The DEM-H captures flow paths based on SRTM elevations and mapped stream lines, and supports delineation of … australia dem elevation elevation-topography ga geophysical DEM-S: Australian Smoothed Digital Elevation Model The Smoothed Digital Elevation Model (DEM-S) was derived from the SRTM data acquired by NASA in February 2000.

