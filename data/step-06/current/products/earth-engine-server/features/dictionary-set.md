---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:22:38.452Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "Dictionary.set"
feature_slug: "dictionary-set"
latest_feature_date: "2014-05-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/docs/release-notes"
  - "https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff"
  - "https://developers.google.com/earth-engine/guides/exporting_images"
keywords:
  - "dictionary"
  - "set"
  - "sets"
  - "value"
  - "in"
  - "by"
  - "key"
---

# Dictionary.set

Product: Earth Engine Server
Coverage: LOW

## Step 02 Summary

Sets a value in a dictionary by key.

## Extended Definition

Sets a value in a dictionary by key.

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
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- Multi-file asset uploads that use "last band" masking mode should now work. ee.Dictionary() can now be called with no arguments or with a list of alternating keys/values.
- Earth Engine Server Feature Added new algorithms for Dictionary : set() , contains() , size() , keys() , values() .
- March 24, 2026 Earth Engine Data Catalog Feature Added overture-maps/places place : Overture Maps - Places: Place March 17, 2026 Earth Engine Data Catalog Feature Added NASA/VIIRS/002/VNP64A1 : VNP64A1.002: Burned Area Monthly L4 Global 500m SIN Grid Added projects/neon-prod-earthengine/assets/CNC/002 : NEON Canopy Nitrogen Content (CNC) February 24, 2026 Earth Engine Data Catalog Feature Added OPERA/DSWX/L3 V1/HLS : Dynamic Surface Water Extent from Harmonized Landsat Sentinel-2 (DSWx-HLS) V1 Added OPERA/DSWX/L3 V1/S1 : Dynamic Surface Water Extent from Sentinel-1 (DSWx-S1) V1 Added projects/ee-kbas-in-gee/assets/current : WDKBA: World Database of Key Biodiversity Areas (KBAs) - September 2025 February 10, 2026 Earth Engine Data Catalog Feature Added JRC/GFC2020 subtypes/V1 : EC JRC global map of forest types 2020, V1 Added projects/pml evapotranspiration/PML/OUTPUT/PML V22a : PML V2.2a: Coupled Evapotranspiration and Gross Primary Product (GPP) February 03, 2026 Earth Engine Data Catalog Feature Added Earth Big Data/GLOBAL SEASONAL S1/V2019/BACKSCATTER : Global Seasonal Sentinel-1 Interferometric Coherence and Backscatter V2019 Backscatter Added Earth Big Data/GLOBAL SEASONAL S1/V2019/COHERENCE : Global Seasonal Sentinel-1 Interferometric Coherence and Backscatter V2019 Coherence Added Earth Big Data/GLOBAL SEASONAL S1/V2019/DECAY MODEL PARAMETERS : Global Seasonal Sentinel-1 Interferometric Coherence and Backscatter V2019 Decay Model Parameters Added Earth Big Data/GLOBAL SEASONAL S1/V2019/INCIDENCE LAYOVER SHADOW : Global Seasonal Sentinel-1 Interferometric Coherence and Backscatter V2019 Incidence Layover Shadow Added NOAA/CFSV2/FOR6H HARMONIZED : CFSV2: NCEP Climate Forecast System Version 2, 6-Hourly Products Harmonized Added projects/malariaatlasproject/assets/accessibility/accessibility to cities/2015 v1 0 : Malaria Atlas Project Accessibility to Cities 2015 Added projects/malariaatlasproject/assets/accessibility/accessibility to healthcare/2019 : Malaria Atlas Project Accessibility to Healthcare 2019 Added projects/malariaatlasproject/assets/accessibility/accessibility to healthcare/2019 walking only : Malaria Atlas Project Accessibility to Healthcare 2019 (Walking Only) Added projects/malariaatlasproject/assets/accessibility/friction surface/2015 v1 0 : Malaria Atlas Project Global Friction Surface 2015 Added projects/malariaatlasproject/assets/accessibility/friction surface/2019 v5 1 : Malaria Atlas Project Global Friction Surface 2019 Added projects/malariaatlasproject/assets/accessibility/friction surface/2019 v5 1 walking only : Malaria Atlas Project Global Friction Surface 2019 (Walking Only) January 27, 2026 Earth Engine Data Catalog Feature Added IAHS/GFPLAIN250/v0 : GFPLAIN250m: Global 250m Floodplain Dataset January 20, 2026 Earth Engine Code Editor Announcement Earth Engine is introducing noncommercial quota tiers to safeguard shared compute resources and ensure reliable performance for everyone.
- July 23, 2024 Earth Engine Data Catalog Feature Added MODIS/061/MOD17A2HGF : MOD17A2HGF.061: Terra Gross Primary Productivity 8-Day Global 500m Added NASA/EMIT/L1B/RAD : EMIT L1B At-Sensor Calibrated Radiance and Geolocation Data 60 m Added projects/neon-prod-earthengine/assets/CHM/001 : NEON Canopy Height Model (CHM) July 16, 2024 Earth Engine Code Editor Breaking Reduced the maximum allowable header size of a GeoTIFF (produced by the ee.Image.loadGeoTIFF() algorithm or by CreateAsset as a COG-backed asset) from 32mb to 10mb.

### "Cloud GeoTiff-Backed Earth Engine Assets \_|\_ Google Earth Engine \_|\_\

- URL: [https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff](https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff)
- Source ID: `site-docs-reference`
- Final score: 174
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If no bands are specified, the resulting asset will contain all the bands of the GeoTIFF with the band names encoded in the GeoTIFF (in this case, "vis-red", "vis-green", and "vis-blue"). request = { 'imageManifest' : { 'name' : f 'projects/ { ee project } /assets/cogdemo1' , 'tilesets' : [ { 'id' : '0' , 'sources' : [ { 'uris' : [ 'gs://ee-docs-demos/COG demo.tif' ] } ] } ], 'properties' : { 'version' : '1.1' }, 'startTime' : '2016-01-01T00:00:00.000000000Z' , 'endTime' : '2016-12-31T15:01:23.000000000Z' , }, } pprint ( request ) More than one Tileset It is possible to specify an ImageManifest with more than one Tileset where each band of the resulting asset is backed by one of the bands of a Tileset using the tilesetId and tilesetBandIndex fields.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-21 UTC."],[],["This document details how to create Earth Engine assets backed by Cloud Optimized GeoTIFFs (COGs).
- Page Summary outlined flag Earth Engine supports assets backed by Cloud Optimized GeoTIFFs (COGs), which improve performance in collections by indexing spatial and metadata fields at creation time.
- Sharing COG-backed assets requires granting read access to both the Earth Engine asset and the underlying COG files in Google Cloud Storage by assigning appropriate permissions.

### Exporting Images \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/exporting_images](https://developers.google.com/earth-engine/guides/exporting_images)
- Source ID: `site-docs-root-2`
- Final score: 170
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Export . image . toAsset ( image = band 4 , description = 'imageToAssetExample' , assetId = 'projects/your-project/assets/exampleExport' , crs = projection [ 'crs' ], crsTransform = projection [ 'transform' ], region = geometry , pyramidingPolicy = { 'b4 mean' : 'mean' , 'b4 sample' : 'sample' , 'b4 max' : 'max' , }, ) task . start () You can provide a default pyramiding policy for every band that isn't explicitly specified by using the '.default' key.
- You can specify image output format (if the destination is not toAsset() ) with the fileFormat parameter ( 'GeoTIFF' by default). formatOptions parameter Other configuration options are set with the formatOptions parameter, which should be a dictionary keyed by other format options, specific to each fileFormat as described below.
- For example: Code Editor (JavaScript) // Set a nodata value and replace masked pixels around the image edge with it. var noDataVal = - 9999 ; landsat = landsat . unmask ( noDataVal ); Export . image . toDrive ({ image : landsat , description : 'imageNoDataExample' , crs : projection . crs , scale : 2000 , // large scale for minimal demo region : landsat . geometry (), // full image bounds fileFormat : 'GeoTIFF' , formatOptions : { noData : noDataVal , } }); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Set a nodata value and replace masked pixels around the image edge with it. no data val = - 9999 landsat = landsat . unmask ( no data val ) task = ee . batch .
- The reason for the potential shift is that the scale parameter is used to populate the xScale and yScale values of the crsTransform , but the xTranslation and yTranslation values are calculated so that if they are divided by the corresponding xScale and yScale values the remainder will be zero.

