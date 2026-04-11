---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:22:38.406Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "GeoTIFF internal mask ingestion"
feature_slug: "geotiff-internal-mask-ingestion"
latest_feature_date: "2025-02-26"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/docs/release-notes"
  - "https://developers.google.com/earth-engine/guides/classification"
  - "https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff"
keywords:
  - "geotiff"
  - "internal"
  - "mask"
  - "ingestion"
  - "uploads"
  - "and"
  - "can"
  - "now"
---

# GeoTIFF internal mask ingestion

Product: Earth Engine Server
Coverage: LOW

## Step 02 Summary

GeoTIFF uploads and ingestion can now use internal binary masks, with explicit mask bands taking precedence when present.

## Extended Definition

GeoTIFF uploads and ingestion can now use internal binary masks, with explicit mask bands taking precedence when present.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- [https://developers.google.com/earth-engine/guides/classification](https://developers.google.com/earth-engine/guides/classification)
- [https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff](https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff)

## Supporting Pages

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- March 11, 2025 Earth Engine Data Catalog Feature Added ISRIC/SoilGrids250m/v2 0 : SoilGrids250m 2.0 - Volumetric Water Content Added NASA/VIIRS/002/VNP43IA4 : VNP43IA4: BRDF/Albedo Quality Daily L3 Global 500m SIN Grid Added projects/edf-methanesat-ee/assets/public-preview/L3concentration : MethaneSAT L3 Concentration Public Preview V1.0.0 Added projects/edf-methanesat-ee/assets/public-preview/L4area : MethaneSAT L4 Area Sources Public Preview V1.0.0 Added projects/edf-methanesat-ee/assets/public-preview/L4point : MethaneSAT L4 Point Sources Public Preview V1.0.0 February 26, 2025 Earth Engine Server Feature Ingestion/upload of GeoTIFFs now supports internal masks GMF PER DATASET .
- Multi-file asset uploads that use "last band" masking mode should now work. ee.Dictionary() can now be called with no arguments or with a list of alternating keys/values.
- ImageManifest cannot contain no-data values and GeoTIFFs with internal masks.
- June 25, 2024 Earth Engine Data Catalog Feature Added CANADA/NFIS/NTEMS/CA FOREST AGE : Landsat-derived forest age for Canada 2019 Added LANDSAT/COMPOSITES/C02/T1 L2 32DAY BAI : Landsat Collection 2 Tier 1 Level 2 32-Day BAI Composite Added LANDSAT/COMPOSITES/C02/T1 L2 32DAY EVI : Landsat Collection 2 Tier 1 Level 2 32-Day EVI Composite Added LANDSAT/COMPOSITES/C02/T1 L2 32DAY NBR : Landsat Collection 2 Tier 1 Level 2 32-Day NBR Composite Added LANDSAT/COMPOSITES/C02/T1 L2 32DAY NDVI : Landsat Collection 2 Tier 1 Level 2 32-Day NDVI Composite Added LANDSAT/COMPOSITES/C02/T1 L2 32DAY NDWI : Landsat Collection 2 Tier 1 Level 2 32-Day NDWI Composite Added LANDSAT/COMPOSITES/C02/T1 L2 ANNUAL BAI : Landsat Collection 2 Tier 1 Level 2 Annual BAI Composite Added LANDSAT/COMPOSITES/C02/T1 L2 ANNUAL EVI : Landsat Collection 2 Tier 1 Level 2 Annual EVI Composite Added LANDSAT/COMPOSITES/C02/T1 L2 ANNUAL NBR : Landsat Collection 2 Tier 1 Level 2 Annual NBR Composite Added LANDSAT/COMPOSITES/C02/T1 L2 ANNUAL NDVI : Landsat Collection 2 Tier 1 Level 2 Annual NDVI Composite Added LANDSAT/COMPOSITES/C02/T1 L2 ANNUAL NDWI : Landsat Collection 2 Tier 1 Level 2 Annual NDWI Composite June 18, 2024 Earth Engine Data Catalog Feature Added HU BERLIN/EPFD/V2/points : European Primary Forest Dataset - Points Added HU BERLIN/EPFD/V2/polygons : European Primary Forest Dataset - Polygons Added NASA/VIIRS/002/VNP09GA : VNP09GA: VIIRS Surface Reflectance Daily 500m and 1km Added NOAA/IBTrACS/v4 : International Best Track Archive for Climate Stewardship Project June 11, 2024 Earth Engine Data Catalog Feature Added LANDSAT/COMPOSITES/C02/T1 L2 8DAY BAI : Landsat Collection 2 Tier 1 Level 2 8-Day BAI Composite Added LANDSAT/COMPOSITES/C02/T1 L2 8DAY EVI : Landsat Collection 2 Tier 1 Level 2 8-Day EVI Composite Added LANDSAT/COMPOSITES/C02/T1 L2 8DAY NBR : Landsat Collection 2 Tier 1 Level 2 8-Day NBR Composite Added LANDSAT/COMPOSITES/C02/T1 L2 8DAY NDVI : Landsat Collection 2 Tier 1 Level 2 8-Day NDVI Composite Added LANDSAT/COMPOSITES/C02/T1 L2 8DAY NDWI : Landsat Collection 2 Tier 1 Level 2 8-Day NDWI Composite June 07, 2024 Earth Engine Server Breaking Changed the way that the ee.Image.loadGeoTIFF() algorithm and COG-backed assets select lower resolution overviews if a GeoTIFF is missing pyramid levels.

### Supervised Classification \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/classification](https://developers.google.com/earth-engine/guides/classification)
- Source ID: `site-docs-root`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- You can use polygons to train as illustrated in the following example: Code Editor (JavaScript) // Define a function that scales and masks Landsat 8 surface reflectance images. function prepSrL8 ( image ) { // Develop masks for unwanted pixels (fill, cloud, cloud shadow). var qaMask = image . select ( 'QA PIXEL' ). bitwiseAnd ( parseInt ( '11111' , 2 )). eq ( 0 ); var saturationMask = image . select ( 'QA RADSAT' ). eq ( 0 ); // Apply the scaling factors to the appropriate bands. var getFactorImg = function ( factorNames ) { var factorList = image . toDictionary (). select ( factorNames ). values (); return ee .
- Classifier . load ( classifierAssetId ); // We can perform classification just as before with the saved classifier now. var classified = input . classify ( savedClassifier ); Map . addLayer ( classified . clip ( roi ), { palette : igbpPalette , min : 0 , max : 17 }, 'classification' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Once the classifier export finishes, we can load our saved classifier. saved classifier = ee .
- Map . setCenter ( - 122.0877 , 37.7880 , 11 ); Map . addLayer ( image , { bands : [ 'SR B4' , 'SR B3' , 'SR B2' ], min : 0 , max : 0.25 }, 'image' ); Map . addLayer ( classified , { min : 0 , max : 2 , palette : [ 'orange' , 'green' , 'blue' ]}, 'classification' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Define a function that scales and masks Landsat 8 surface reflectance images. def prep sr l8 ( image ): """Scales and masks Landsat 8 surface reflectance images.""" Develop masks for unwanted pixels (fill, cloud, cloud shadow). qa mask = image . select ( 'QA PIXEL' ) . bitwiseAnd ( 0b11111 ) . eq ( 0 ) saturation mask = image . select ( 'QA RADSAT' ) . eq ( 0 ) Apply the scaling factors to the appropriate bands. def get factor img ( factor names ): factor list = image . toDictionary () . select ( factor names ) . values () return ee .
- Map . setCenter ( - 62.836 , - 9.2399 , 9 ); Map . addLayer ( image , { bands : [ 'SR B4' , 'SR B3' , 'SR B2' ], min : 0 , max : 0.25 }, 'image' ); Map . addLayer ( polygons , { color : 'yellow' }, 'training polygons' ); Map . addLayer ( classified , { min : 0 , max : 1 , palette : [ 'orange' , 'green' ]}, 'deforestation' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Define a function that scales and masks Landsat 8 surface reflectance images. def prep sr l8 ( image ): Develop masks for unwanted pixels (fill, cloud, cloud shadow). qa mask = image . select ( 'QA PIXEL' ) . bitwiseAnd ( 0b11111 ) . eq ( 0 ) saturation mask = image . select ( 'QA RADSAT' ) . eq ( 0 ) Apply the scaling factors to the appropriate bands. def get factor img ( factor names ): factor list = image . toDictionary () . select ( factor names ) . values () return ee .

### "Cloud GeoTiff-Backed Earth Engine Assets \_|\_ Google Earth Engine \_|\_\

- URL: [https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff](https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff)
- Source ID: `site-docs-reference`
- Final score: 86
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For users with GDAL >= 3.11, the COG driver can produce files without having to worry about creating and preserving overviews. gdal translate in .tif out.tif \ -of COG \ -co OVERVIEWS = IGNORE EXISTING \ -co COMPRESS = ZSTD \ -co LEVEL = 22 \ -co PREDICTOR = 2 \ -co INTERLEAVE = BAND \ -co NUM THREADS = ALL CPUS \ Creating Cloud GeoTiff-Backed Assets using the REST API Note: The REST API contains new and advanced features that may not be suitable for all users.
- If no bands are specified, the resulting asset will contain all the bands of the GeoTIFF with the band names encoded in the GeoTIFF (in this case, "vis-red", "vis-green", and "vis-blue"). request = { 'imageManifest' : { 'name' : f 'projects/ { ee project } /assets/cogdemo1' , 'tilesets' : [ { 'id' : '0' , 'sources' : [ { 'uris' : [ 'gs://ee-docs-demos/COG demo.tif' ] } ] } ], 'properties' : { 'version' : '1.1' }, 'startTime' : '2016-01-01T00:00:00.000000000Z' , 'endTime' : '2016-12-31T15:01:23.000000000Z' , }, } pprint ( request ) More than one Tileset It is possible to specify an ImageManifest with more than one Tileset where each band of the resulting asset is backed by one of the bands of a Tileset using the tilesetId and tilesetBandIndex fields.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-21 UTC."],[],["This document details how to create Earth Engine assets backed by Cloud Optimized GeoTIFFs (COGs).
- The following gdal translate command will convert a raster into a band-interleaved, zstd-compressed, Cloud Optimized GeoTIFF that will perform well in Earth Engine: gdal translate in .tif out.tif \ -co COPY SRC OVERVIEWS = YES \ -co TILED = YES \ -co BLOCKXSIZE = 512 \ -co BLOCKYSIZE = 512 \ -co COMPRESS = ZSTD \ -co ZSTD LEVEL = 22 \ -co INTERLEAVE = BAND \ -co NUM THREADS = ALL CPUS It may be possible to reduce the output file size further by specifying a predictor ( -co PREDICTOR=2 for integer data types and -co PREDICTOR=3 for floating point data types).

