---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:19.397Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "HLSS30"
feature_slug: "hlss30"
latest_feature_date: "2024-12-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/NASA_HLS_HLSS30_v002"
keywords:
  - "hlss30"
  - "daily"
  - "global"
  - "30"
  - "surface"
  - "reflectance"
  - "dataset"
  - "sentinel"
---

# HLSS30

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

A daily global 30 m surface reflectance dataset from Sentinel-2 MSI.

## Extended Definition

A daily global 30 m surface reflectance dataset from Sentinel-2 MSI.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/NASA_HLS_HLSS30_v002](https://developers.google.com/earth-engine/datasets/catalog/NASA_HLS_HLSS30_v002)

## Supporting Pages

### HLSS30: HLS Sentinel-2 Multi-spectral Instrument Surface Reflectance Daily Global 30m | Earth Engine Data Catalog | Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog/NASA_HLS_HLSS30_v002](https://developers.google.com/earth-engine/datasets/catalog/NASA_HLS_HLSS30_v002)
- Source ID: `feature-recovery-direct-http`
- Final score: 73
- Re-rank relevance: N/A

Evidence snippets:
- La medición combinada permite realizar observaciones globales de la tierra cada 2 o 3 días con una resolución espacial de 30 metros (m)… NASA/HLS/HLSS30/v002, landsat,nasa,satellite-imagery,sentinel,usgs 2015-11-28T00:00:00Z/2026-04-12T23:57:39Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets https://doi.org/10.5067/HLS/HLSS30.002 https://doi.org/10.5067/HLS/HLSS30.002 ¿Quieres brindar más información? [[["Fácil de comprender","easyToUnderstand","thumb-up"],["Resolvió mi problema","solvedMyProblem","thumb-up"],["Otro","otherUp","thumb-up"]],[["Falta la información que necesito","missingTheInformationINeed","thumb-down"],["Muy complicado o demasiados pasos","tooComplicatedTooManySteps","thumb-down"],["Desactualizado","outOfDate","thumb-down"],["Problema de traducción","translationIssue","thumb-down"],["Problema con las muestras o los códigos","samplesCodeIssue","thumb-down"],["Otro","otherDown","thumb-down"]],[],[],["The NASA HLS project offers surface reflectance data from Landsat 8 and Sentinel-2A satellites, combining them for 2-3 day global land observations at a 30-meter resolution.
- HLSS30: HLS Sentinel-2 Multi-spectral Instrument Surface Reflectance Daily Global 30m | Earth Engine Data Catalog | Google for Developers Ir al contenido principal Earth Engine Data Catalog / English Deutsch Español Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體 日本語 한국어 Acceder Página principal Categorías Todos los conjuntos de datos All Tags Landsat MODIS Sentinel Publisher Comunidad Documentos de API Estado del conjunto de datos Registro de cambios Earth Engine Data Catalog Página principal Categorías Todos los conjuntos de datos All Tags Landsat MODIS Sentinel Publisher Comunidad Documentos de API Estado del conjunto de datos Registro de cambios Página principal Earth Engine Data Catalog Todos los conjuntos de datos Enviar comentarios HLSS30: HLS Sentinel-2 Multi-spectral Instrument Surface Reflectance Daily Global 30m Organiza tus páginas con colecciones Guarda y categoriza el contenido según tus preferencias.
- Disponibilidad del conjunto de datos 2015-11-28T00:00:00Z–2026-04-12T23:57:39Z Proveedor del conjunto de datos LP DAAC de la NASA Fragmento de Earth Engine ee.ImageCollection("NASA/HLS/HLSS30/v002") open_in_new Etiquetas landsat nasa satellite-imagery sentinel usgs Descripción El proyecto de Landsat y Sentinel-2 armonizados (HLS) proporciona datos coherentes de reflectancia de la superficie del Operational Land Imager (OLI) a bordo del satélite conjunto Landsat 8 de la NASA y el USGS, y del Multi-Spectral Instrument (MSI) a bordo de los satélites Sentinel-2A de Copernicus de Europa.
- ImageCollection ( "NASA/HLS/HLSS30/v002" ) . filter ( ee .

### "Copernicus DEM GLO-30: Global 30m Digital Elevation Model \_|\_ Earth Engine\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_DEM_GLO30](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_DEM_GLO30)
- Source ID: `site-docs-root-2`
- Final score: 68
- Re-rank relevance: N/A

Evidence snippets:
- ImageCollection ( 'COPERNICUS/DEM/GLO30' ). mosaic (); Map . setCenter ( - 6.746 , 46.529 , 4 ); // Relative, vertical accuracy in form of the standard deviation of // the interferometric phase error. var hem = dataset . select ( 'HEM' ); var hemVis = { // Range of the values is 0.09 to 43.4. min : 0.0 , max : 4.0 , palette : [ 'blue' , 'green' , 'yellow' , 'orange' , 'darkorange' , 'red' ], }; Map . addLayer ( hem , hemVis , 'Height Error Mask (HEM; m)' , false ); var edm = dataset . select ( 'EDM' ); var edmVis = { min : 0 , max : 13 , palette : [ 'black' , // 0: Void (no data) 'white' , // 1: Not edited 'red' , // 2: Infill of external elevation data 'green' , // 3: Interpolated pixels 'orange' , // 4: Smoothed pixels 'yellow' , // 5: Airport editing 'magenta' , // 6: Raised negative elevation pixels 'cyan' , // 7: Flattened pixels 'blue' , // 8: Ocean pixels 'purple' , // 9: Lake pixels 'brown' , // 10: River pixels 'lightgray' , // 11: Shoreline pixels 'olive' , // 12: Morphed pixels 'steelblue' , // 13: Shifted pixels ], }; Map . addLayer ( edm , edmVis , 'Editing and Masking (EDM)' , false , 0.75 ); // Source data diagram. var flm = dataset . select ( 'FLM' ); var originalValues = [ 0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 100 , 101 ]; var remappedValues = [ 0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 ]; var flmRemapped = flm . remap ( originalValues , remappedValues ). rename ( 'FLM' ); var flmVis = { min : 0 , max : 11 , palette : [ 'black' , // 0: Void (no data) 'white' , // 1: Edited (except filled pixels) 'grey' , // 2: Not edited / not filled 'red' , // 3: ASTER 'green' , // 4: SRTM90 'blue' , // 5: SRTM30 'yellow' , // 6: GMTED2010 'cyan' , // 7: SRTM30plus 'magenta' , // 8: TerraSAR-X Radargrammetric DEM 'orange' , // 9: AW3D30 'purple' , // 100 -> remapped to 10: Norway DEM 'brown' , // 101 -> remapped to 11: DSM05 Spain ], }; Map . addLayer ( flmRemapped , flmVis , 'Fill and Lineage Mask (FLM)' , false , 0.75 ); var wbm = dataset . select ( 'WBM' ); var wbmVis = { min : 0 , max : 3 , palette : [ 'lightgray' , // 0: No water. 'cadetblue' , // 1: Ocean. 'darkblue' , // 2: Lake. 'blueviolet' , // 3: River. ], }; Map . addLayer ( wbm , wbmVis , 'Water Body Mask (WBM)' , false , 0.75 ); var dsm = dataset . select ( 'DEM' ) . setDefaultProjection ( 'EPSG:3857' , null , 30 ) . rename ( 'DSM' ); var dsmVis = { min : 0.0 , max : 3000.0 , palette : [ '333399' , '00a2e5' , '55dd77' , 'ffff99' , 'aa926b' , 'aa928d' , 'ffffff' ], }; Map . addLayer ( dsm , dsmVis , 'Digital Surface Model (DSM; m)' , true , 0.75 ); // Multiply by 20 to exaggerate the hillshade for a better visualization.
- Editing of shore- and coastlines, special … COPERNICUS/DEM/GLO30, copernicus,dem,elevation,elevation-topography,geophysical 2010-12-01T00:00:00Z/2015-01-31T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],["The Copernicus DEM GLO-30 dataset, available from 2010-12-01 to 2015-01-31, offers a 30-meter resolution Digital Surface Model derived from the WorldDEM.
- Dataset Availability 2010-12-01T00:00:00Z–2015-01-31T00:00:00Z Dataset Producer Copernicus Earth Engine Snippet ee.ImageCollection("COPERNICUS/DEM/GLO30") open in new Tags copernicus dem elevation elevation-topography geophysical Description The Copernicus DEM is a Digital Surface Model (DSM) which represents the surface of the Earth including buildings, infrastructure and vegetation.
- Terrain . hillshade ( dsm . multiply ( 20.0 )), null , 'Digital Surface Model (DSM) Hillshade' , true , 0.75 ); Open in Code Editor Copernicus DEM GLO-30: Global 30m Digital Elevation Model The Copernicus DEM is a Digital Surface Model (DSM) which represents the surface of the Earth including buildings, infrastructure and vegetation.

### "Datasets tagged surface-ground-water in Earth Engine \_|\_ Earth Engine\

- URL: [https://developers.google.com/earth-engine/datasets/tags/surface-ground-water](https://developers.google.com/earth-engine/datasets/tags/surface-ground-water)
- Source ID: `site-docs-root-3`
- Final score: 68
- Re-rank relevance: N/A

Evidence snippets:
- DSWx-S1 provides near-global geographical mapping of surface water extent over land at a spatial resolution of 30 meters over the Military Grid reference System (MGRS) grid system, with a temporal revisit frequency between … geophysical nasa opera sentinel1-derived surface surface-ground-water GFPLAIN250m: Global 250m Floodplain Dataset The GFPLAIN250m includes raster data of Earth's floodplains identified using a geomorphic approach presented in Nardi et al. (2006, 2018).
- For more information see the associated journal article: High-resolution mapping of global surface water and its … geophysical google jrc landsat-derived surface surface-ground-water JRC Global Surface Water Mapping Layers, v1.4 This dataset contains maps of the location and temporal distribution of surface water from 1984 to 2021 and provides statistics on the extent and change of those water surfaces.
- For more information see the associated journal article: High-resolution mapping of global surface water and its … change-detection geophysical google jrc landsat-derived surface JRC Global Surface Water Metadata, v1.4 This dataset contains maps of the location and temporal distribution of surface water from 1984 to 2021 and provides statistics on the extent and change of those water surfaces.
- For more information see the associated journal article: High-resolution mapping of global surface water and its … geophysical google history jrc landsat-derived monthly JRC Yearly Water Classification History, v1.4 This dataset contains maps of the location and temporal distribution of surface water from 1984 to 2021 and provides statistics on the extent and change of those water surfaces.

