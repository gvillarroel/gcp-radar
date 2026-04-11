---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:10:51.816Z"
product_name: "Earth Engine Python Client Library"
product_slug: "earth-engine-python-client-library"
feature_name: "maxWorkerCount export parameter"
feature_slug: "maxworkercount-export-parameter"
latest_feature_date: "2019-11-12"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/guides/playground"
  - "https://developers.google.com/earth-engine/docs/release-notes"
  - "https://developers.google.com/earth-engine/guides/command_line"
keywords:
  - "maxworkercount"
  - "export"
  - "parameter"
  - "adds"
  - "to"
  - "image"
  - "configuration"
---

# maxWorkerCount export parameter

Product: Earth Engine Python Client Library
Coverage: LOW

## Step 02 Summary

Adds a maxWorkerCount parameter to image export configuration.

## Extended Definition

Adds a maxWorkerCount parameter to image export configuration.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground)
- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- [https://developers.google.com/earth-engine/guides/command_line](https://developers.google.com/earth-engine/guides/command_line)

## Supporting Pages

### Earth Engine Code Editor \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground)
- Source ID: `site-docs-root`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- If the task is fully specified at creation time (that is, the call to Export has all necessary parameters), hold ctrl or ⌘ while clicking Run to submit the task without showing the dialog.
- A configuration dialog will appear that allows you to specify a variety of parameters for the task.
- It also contains a bar object representing the current date. @module Modules/FooModule / / Returns a greeting string. @param {ee.String} arg The name to which the greeting should be addressed @return {ee.String} The complete greeting. / exports . foo = function ( arg ) { return 'Hello, ' + arg + '!
- Click the Palette radio button and specify a custom palette by adding colors ( add ), removing colors ( remove ) or manually entering a comma separated list of hex strings ( edit ) Click Apply to apply the visualization parameters to the current display.

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- January 13, 2026 Earth Engine Data Catalog Feature Added NASA/TEMPO/O3 L3 QA : TEMPO gridded ozone total column V03 (PROVISIONAL) December 30, 2025 Earth Engine Data Catalog Feature Added UCSB-CHC/CHIRPS/V3/DAILY RNL : CHIRPS Precipitation Daily Reanalysis: Climate Hazards Center InfraRed Precipitation With Station Data (Version 3.0, ERA5-based) Added UCSB-CHC/CHIRPS/V3/DAILY SAT : CHIRPS Precipitation Daily Near-Real-Time: Climate Hazards Center InfraRed Precipitation With Station Data (Version 3.0, IMERG-based) December 16, 2025 Earth Engine Data Catalog Feature Added COPERNICUS/MARINE/INSITU MULTI 4KM/ARGO : Copernicus Global In-situ Observations of Ocean Currents - Argo Added COPERNICUS/MARINE/INSITU MULTI 4KM/RADAR RADIAL : Copernicus Global In-situ Observations of Ocean Currents - Radar Radial Added COPERNICUS/MARINE/INSITU MULTI 4KM/RADAR TOTAL : Copernicus Global In-situ Observations of Ocean Currents - Radar Total Added JRC/GFC2020/V3 : EC JRC global map of forest cover 2020, V3 Added projects/mapbiomas-public/assets/brazil/lulc/v1 : MapBiomas Land Use and Land Cover - Brazil V1.0 December 02, 2025 Earth Engine Data Catalog Feature Added JRC/LUCAS/THLOC/V1/2022 : LUCAS THLOC (Points with attributes, 2022) V1 November 30, 2025 Earth Engine JavaScript Client Library 1.7.3 Feature Added support for the overwrite parameter in the Export.image.toAsset() and Export.table.toAsset() methods, which allows for control over overwriting data in preexisting destination images or tables.
- April 11, 2023 Earth Engine Data Catalog Feature Added MODIS/061/MCD19A2 GRANULES : MCD19A2.061: Terra & Aqua MAIAC Land Aerosol Optical Depth Daily 1km Added NOAA/VIIRS/001/VNP43IA2 : VNP43IA2: BRDF/Albedo Quality Daily L3 Global 500m SIN Grid Added WWF/HydroATLAS/v1/Basins/level03 : WWF HydroATLAS Basins Level 03 Added WWF/HydroATLAS/v1/Basins/level04 : WWF HydroATLAS Basins Level 04 Added WWF/HydroATLAS/v1/Basins/level05 : WWF HydroATLAS Basins Level 05 Added WWF/HydroATLAS/v1/Basins/level06 : WWF HydroATLAS Basins Level 06 Added WWF/HydroATLAS/v1/Basins/level07 : WWF HydroATLAS Basins Level 07 Added WWF/HydroATLAS/v1/Basins/level08 : WWF HydroATLAS Basins Level 08 Added WWF/HydroATLAS/v1/Basins/level09 : WWF HydroATLAS Basins Level 09 Added WWF/HydroATLAS/v1/Basins/level10 : WWF HydroATLAS Basins Level 10 Added WWF/HydroATLAS/v1/Basins/level11 : WWF HydroATLAS Basins Level 11 March 21, 2023 Earth Engine Data Catalog Feature Added NOAA/VIIRS/001/VNP15A2H (no longer available) March 14, 2023 Earth Engine Data Catalog Feature Added NASA/GDDP-CMIP6 : NEX-GDDP-CMIP6: NASA Earth Exchange Global Daily Downscaled Climate Projections March 09, 2023 Earth Engine Server Change Changed the default BIGTIFF parameter in the GeoTIFF image export options from IF SAFER to YES , which always generates a BigTiff unless the BIGTIFF parameter is overridden in the formatOptions dictionary parameter.
- Note that some parameters needed to be renamed after removing opt since they conflict with Python keywords: ee.Collection.limit() : opt property was converted to prop ee.Image.expression() : opt map was converted to map ee.Filter() : opt filter which was converted to filter Feature Added Export.classifier.toAsset and ee.Classifier.load for exporting and loading saved ee.Classifier.smileCart and ee.Classifier.smileRandomForest classifiers.
- Earth Engine Python Client Library 1.7.3 Feature Added support for the overwrite parameter in the Export.image.toAsset() and Export.table.toAsset() methods, which allows for control over overwriting data in preexisting destination images or tables.

### Command Line Tool \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/command_line](https://developers.google.com/earth-engine/guides/command_line)
- Source ID: `site-docs-reference`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- The following settings can be configured: max concurrent exports , to control the project's maximum batch task parallelism requires the correct permissions For example, to configure a project to only ever allow 10 tasks to run in parallel for the given project: earthengine alpha project config set --max concurrent exports=10 The output displays the updated project configuration, identical to what get returns.
- Before using this command, be sure to set a project using set project . get To view a project configuration, use the get sub-command: earthengine alpha project config get If you have permission to view the project's batch task settings , the output contains: maxConcurrentExports : a number indicating the maximum number of batch tasks that can run in parallel across all users for the given project.
- Additionally, if you have permission to view the plan configuration , the output contains: planMaxConcurrentExports , a number indicating the maximum number of batch tasks that can run in parallel across all users and projects that use the billing account. set To update the project's configuration, use the set sub-command.
- You can see a complete list of table upload options by visiting the Table Manifest guide or with: earthengine upload table -h external image To create an asset backed by an external image, run the upload image command with a manifest: earthengine upload external image --manifest /tmp/foo.json An example manifest is: { "name" : "projects/{project}/assets/cogdemo1" , "tilesets" : [ { "id" : "0" , "sources" : [{ "uris" : [ "gs://ee-docs-demos/COG demo.tif" ] }] } ], "properties" : { "source" : "https://code.earthengine.google.com/d541cf8b268b2f9d8f834c255698201d" }, "startTime" : "2016-01-01T00:00:00.000000000Z" , "endTime" : "2016-12-31T15:01:23.000000000Z" } See the Cloud GeoTIFF guide and the Image Manifest guide for more details on constructing the manifest.

