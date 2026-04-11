---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:22:38.409Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "GeoTIFF geostationary projection support"
feature_slug: "geotiff-geostationary-projection-support"
latest_feature_date: "2023-05-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/docs/release-notes"
  - "https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff"
  - "https://developers.google.com/earth-engine/guides/exporting_images"
keywords:
  - "geotiff"
  - "geostationary"
  - "projection"
  - "optimized"
  - "geotiffs"
  - "now"
  - "the"
  - "satellite"
---

# GeoTIFF geostationary projection support

Product: Earth Engine Server
Coverage: LOW

## Step 02 Summary

Cloud Optimized GeoTIFFs now support the geostationary satellite projection during loading and asset creation.

## Extended Definition

Cloud Optimized GeoTIFFs now support the geostationary satellite projection during loading and asset creation.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- [https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff](https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff)
- [https://developers.google.com/earth-engine/guides/exporting_images](https://developers.google.com/earth-engine/guides/exporting_images)

## Supporting Pages

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- June 13, 2023 Earth Engine Data Catalog Feature Added MODIS/061/MOD10A1 : MOD10A1.061 Terra Snow Cover Daily Global 500m Added MODIS/061/MOD16A2 : MOD16A2.061: Terra Net Evapotranspiration 8-Day Global 500m Added MODIS/061/MYD10A1 : MYD10A1.061 Aqua Snow Cover Daily Global 500m Added USGS/NLCD RELEASES/2020 REL/NALCMS : Land Cover of North America at 30 meters, 2020 June 06, 2023 Earth Engine Data Catalog Feature Added CSIC/SPEI/2 8 (no longer available) May 30, 2023 Earth Engine Data Catalog Feature Added Switzerland/SWISSIMAGE/orthos/10cm : SWISSIMAGE 10 cm RGB imagery Added projects/ngis-cat/assets/DEA/NIDEM : Preview National Intertidal Digital Elevation Model 25m 1.0.0 May 23, 2023 Earth Engine Data Catalog Feature Added NOAA/VIIRS/001/VNP43IA1 : VNP43IA1: BRDF/Albedo Model Parameters Daily L3 Global 500m SIN Grid Added UMD/hansen/global forest change 2022 v1 10 (no longer available) May 16, 2023 Earth Engine Data Catalog Feature Added Latvia/Maamet/orthos/cir : Latvia Color InfraRed (CIR) orthophotos Added Latvia/Maamet/orthos/rgb : Latvia RGB orthophotos Added USFS/GTAC/LCMS/v2022-8 (no longer available) May 15, 2023 Earth Engine Server Feature Added support for the geostationary satellite projection (geos) for Cloud Optimized GeoTIFFs ( ee.Image.loadGeoTIFF() and the CreateAsset pathway).
- August 27, 2024 Earth Engine Data Catalog Feature Added EDF/MethaneSAT/MethaneAIR/L4area : MethaneAIR L4 Area Sources v1 Added EDF/MethaneSAT/MethaneAIR/L4point : MethaneAIR L4 Point Sources v1 Added LARSE/GEDI/GRIDDEDVEG 002/V1/12KM : Gridded GEDI Vegetation Structure Metrics and Biomass Density, 12KM pixel size Added LARSE/GEDI/GRIDDEDVEG 002/V1/1KM : Gridded GEDI Vegetation Structure Metrics and Biomass Density, 1KM pixel size Added LARSE/GEDI/GRIDDEDVEG 002/V1/6KM : Gridded GEDI Vegetation Structure Metrics and Biomass Density, 6KM pixel size August 20, 2024 Earth Engine Data Catalog Feature Added Estonia/Maamet/orthos/mono low flying : Estonia mono low flying orthophotos Added Estonia/Maamet/orthos/rgb low flying : Estonia RGB low flying orthophotos Added NASA/VIIRS/002/VNP13A1 : VNP13A1.002: VIIRS Vegetation Indices 16-Day 500m Added NASA/VIIRS/002/VNP14A1 : VNP14A1.002: Thermal Anomalies/Fire Daily L3 Global 1km SIN Grid Added NASA/VIIRS/002/VNP21A1D : VNP21A1D.002: Day Land Surface Temperature and Emissivity Daily 1km Added NASA/VIIRS/002/VNP21A1N : VNP21A1N.002: Night Land Surface Temperature and Emissivity Daily 1km Added projects/neon-prod-earthengine/assets/DEM/001 : NEON Digital Elevation Model (DEM) Added projects/neon-prod-earthengine/assets/HSI REFL/001 : NEON Surface Directional Reflectance Added projects/neon-prod-earthengine/assets/HSI REFL/002 : NEON Surface Bidirectional Reflectance Added projects/neon-prod-earthengine/assets/RGB/001 : NEON RGB Camera Imagery August 13, 2024 Earth Engine Data Catalog Feature Added CAS/IGSNRR/PML/V2 v018 (no longer available) Added WCMC/WDOECM/current/points : WDOECM: Other Effective Area-based Conservation Measures (points) Added WCMC/WDOECM/current/polygons : WDOECM: Other Effective Area-based Conservation Measures (polygons) August 06, 2024 Earth Engine Data Catalog Feature Added NASA/GPM L3/IMERG V07 : GPM: Global Precipitation Measurement (GPM) Release 07 Added NASA/VIIRS/002/VNP09H1 : VNP09H1: VIIRS Surface Reflectance 8-Day L3 Global 500m Added NASA/VIIRS/002/VNP15A2H : VNP15A2H: LAI/FPAR 8-Day L4 Global 500m SIN Grid July 24, 2024 Earth Engine Server Fixed Fixed a bug that caused GeoTIFF exports with cloudOptimized set to true to fail if the output GeoTIFF was larger than 4gb.
- April 11, 2023 Earth Engine Data Catalog Feature Added MODIS/061/MCD19A2 GRANULES : MCD19A2.061: Terra & Aqua MAIAC Land Aerosol Optical Depth Daily 1km Added NOAA/VIIRS/001/VNP43IA2 : VNP43IA2: BRDF/Albedo Quality Daily L3 Global 500m SIN Grid Added WWF/HydroATLAS/v1/Basins/level03 : WWF HydroATLAS Basins Level 03 Added WWF/HydroATLAS/v1/Basins/level04 : WWF HydroATLAS Basins Level 04 Added WWF/HydroATLAS/v1/Basins/level05 : WWF HydroATLAS Basins Level 05 Added WWF/HydroATLAS/v1/Basins/level06 : WWF HydroATLAS Basins Level 06 Added WWF/HydroATLAS/v1/Basins/level07 : WWF HydroATLAS Basins Level 07 Added WWF/HydroATLAS/v1/Basins/level08 : WWF HydroATLAS Basins Level 08 Added WWF/HydroATLAS/v1/Basins/level09 : WWF HydroATLAS Basins Level 09 Added WWF/HydroATLAS/v1/Basins/level10 : WWF HydroATLAS Basins Level 10 Added WWF/HydroATLAS/v1/Basins/level11 : WWF HydroATLAS Basins Level 11 March 21, 2023 Earth Engine Data Catalog Feature Added NOAA/VIIRS/001/VNP15A2H (no longer available) March 14, 2023 Earth Engine Data Catalog Feature Added NASA/GDDP-CMIP6 : NEX-GDDP-CMIP6: NASA Earth Exchange Global Daily Downscaled Climate Projections March 09, 2023 Earth Engine Server Change Changed the default BIGTIFF parameter in the GeoTIFF image export options from IF SAFER to YES , which always generates a BigTiff unless the BIGTIFF parameter is overridden in the formatOptions dictionary parameter.
- November 12, 2024 Earth Engine Data Catalog Feature Added NOAA/CPC/Precipitation : CPC Global Unified Gauge-Based Analysis of Daily Precipitation Added NOAA/CPC/Temperature : CPC Global Unified Temperature Added UCSB-CHG/CHIRTS/DAILY : CHIRTS Temperature Daily: Climate Hazards Center InfraRed Temperature with Stations daily data product Added projects/geoscience-aus-cat/assets/ga ls8cls9c gm cyear 3 (no longer available) November 08, 2024 Earth Engine Server Breaking All Cloud Storage reads through the ee.Blob() and ee.Image.loadGeoTIFF() algorithms must now meet the following criteria: The bucket metadata must be accessible (check the storage.buckets.get permission) The bucket must be located in one of: The US multi-region A dual-region including US-CENTRAL1 The US-CENTRAL1 region Any bucket used in the month of October 2024 not meeting the criteria has been automatically allowed for future use.

### "Cloud GeoTiff-Backed Earth Engine Assets \_|\_ Google Earth Engine \_|\_\

- URL: [https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff](https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff)
- Source ID: `site-docs-reference`
- Final score: 98
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-21 UTC."],[],["This document details how to create Earth Engine assets backed by Cloud Optimized GeoTIFFs (COGs).
- The following gdal translate command will convert a raster into a band-interleaved, zstd-compressed, Cloud Optimized GeoTIFF that will perform well in Earth Engine: gdal translate in .tif out.tif \ -co COPY SRC OVERVIEWS = YES \ -co TILED = YES \ -co BLOCKXSIZE = 512 \ -co BLOCKYSIZE = 512 \ -co COMPRESS = ZSTD \ -co ZSTD LEVEL = 22 \ -co INTERLEAVE = BAND \ -co NUM THREADS = ALL CPUS It may be possible to reduce the output file size further by specifying a predictor ( -co PREDICTOR=2 for integer data types and -co PREDICTOR=3 for floating point data types).
- Page Summary outlined flag Earth Engine supports assets backed by Cloud Optimized GeoTIFFs (COGs), which improve performance in collections by indexing spatial and metadata fields at creation time.
- Run in Google Colab View source on GitHub Earth Engine supports assets backed by Cloud Optimized GeoTIFFs (COGs).

### Exporting Images \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/exporting_images](https://developers.google.com/earth-engine/guides/exporting_images)
- Source ID: `site-docs-root-2`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- Export . image . toDrive ({ image : landsat , description : 'imageToCOGeoTiffExample' , crs : projection . crs , crsTransform : projection . transform , region : geometry , fileFormat : 'GeoTIFF' , formatOptions : { cloudOptimized : true } }); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Export a cloud-optimized GeoTIFF. task = ee . batch .
- Export . image . toDrive ( image = landsat , description = 'imageToCOGeoTiffExample' , crs = projection [ 'crs' ], crsTransform = projection [ 'transform' ], region = geometry , fileFormat = 'GeoTIFF' , formatOptions = { 'cloudOptimized' : True }, ) task . start () Cloud optimized GeoTIFFs can be reloaded from Cloud Storage into an Image .
- For example: Code Editor (JavaScript) // Set a nodata value and replace masked pixels around the image edge with it. var noDataVal = - 9999 ; landsat = landsat . unmask ( noDataVal ); Export . image . toDrive ({ image : landsat , description : 'imageNoDataExample' , crs : projection . crs , scale : 2000 , // large scale for minimal demo region : landsat . geometry (), // full image bounds fileFormat : 'GeoTIFF' , formatOptions : { noData : noDataVal , } }); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Set a nodata value and replace masked pixels around the image edge with it. no data val = - 9999 landsat = landsat . unmask ( no data val ) task = ee . batch .
- Export . image . toDrive ( image = landsat , description = 'imageNoDataExample' , crs = projection [ 'crs' ], scale = 2000 , # large scale for minimal demo region = landsat . geometry (), # full image bounds fileFormat = 'GeoTIFF' , formatOptions = { 'noData' : no data val }, ) task . start () Note that the nodata value should be inside the valid range for the image's PixelType .

