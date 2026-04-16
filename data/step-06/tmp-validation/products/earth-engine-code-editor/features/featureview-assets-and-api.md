---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:44:49.574Z"
product_name: "Earth Engine Code Editor"
product_slug: "earth-engine-code-editor"
feature_name: "FeatureView assets and API"
feature_slug: "featureview-assets-and-api"
latest_feature_date: "2022-05-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/guides/audit_logging"
  - "https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff"
  - "https://developers.google.com/earth-engine/guides/charts_feature"
keywords:
  - "featureview"
  - "serving"
  - "feature"
  - "launched"
  - "were"
  - "assets"
---

# FeatureView assets and API

Product: Earth Engine Code Editor
Coverage: MEDIUM

## Step 02 Summary

FeatureView assets and API were launched for serving feature data.

## Extended Definition

FeatureView assets and API were launched for serving feature data.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://developers.google.com/earth-engine/guides/audit_logging](https://developers.google.com/earth-engine/guides/audit_logging)
- [https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff](https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff)
- [https://developers.google.com/earth-engine/guides/charts_feature](https://developers.google.com/earth-engine/guides/charts_feature)

## Supporting Pages

### Earth Engine audit logging \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/audit_logging](https://developers.google.com/earth-engine/guides/audit_logging)
- Source ID: `site-docs-root-2`
- Final score: 76
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Permission type Methods ADMIN READ google.earthengine.v1.EarthEngine.GetIamPolicy google.earthengine.v1alpha.EarthEngine.GetIamPolicy google.earthengine.v1beta.EarthEngine.GetIamPolicy google.longrunning.Operations.GetOperation google.longrunning.Operations.ListOperations google.longrunning.Operations.WaitOperation ADMIN WRITE google.earthengine.v1.EarthEngine.SetIamPolicy google.earthengine.v1alpha.EarthEngine.SetIamPolicy google.earthengine.v1beta.EarthEngine.SetIamPolicy google.longrunning.Operations.CancelOperation google.longrunning.Operations.DeleteOperation DATA READ google.earthengine.v1.EarthEngine.ComputeFeatures google.earthengine.v1.EarthEngine.ComputeImages google.earthengine.v1.EarthEngine.ComputePixels google.earthengine.v1.EarthEngine.ComputeValue google.earthengine.v1.EarthEngine.CopyAsset google.earthengine.v1.EarthEngine.CreateFeatureView google.earthengine.v1.EarthEngine.CreateFilmstripThumbnail google.earthengine.v1.EarthEngine.CreateMap google.earthengine.v1.EarthEngine.CreateTable google.earthengine.v1.EarthEngine.CreateThumbnail google.earthengine.v1.EarthEngine.CreateVideoThumbnail google.earthengine.v1.EarthEngine.ExportClassifier (LRO) google.earthengine.v1.EarthEngine.ExportImage (LRO) google.earthengine.v1.EarthEngine.ExportMap (LRO) google.earthengine.v1.EarthEngine.ExportTable (LRO) google.earthengine.v1.EarthEngine.ExportVideo (LRO) google.earthengine.v1.EarthEngine.ExportVideoMap (LRO) google.earthengine.v1.EarthEngine.GetAsset google.earthengine.v1.EarthEngine.GetPixels google.earthengine.v1.EarthEngine.GetProjectConfig google.earthengine.v1.EarthEngine.ImportImage (LRO) google.earthengine.v1.EarthEngine.ImportTable (LRO) google.earthengine.v1.EarthEngine.ListAlgorithms google.earthengine.v1.EarthEngine.ListAssets google.earthengine.v1.EarthEngine.ListFeatures google.earthengine.v1alpha.EarthEngine.ComputeFeatures google.earthengine.v1alpha.EarthEngine.ComputeImages google.earthengine.v1alpha.EarthEngine.ComputePixels google.earthengine.v1alpha.EarthEngine.ComputeValue google.earthengine.v1alpha.EarthEngine.CopyAsset google.earthengine.v1alpha.EarthEngine.CreateFeatureView google.earthengine.v1alpha.EarthEngine.CreateFilmstripThumbnail google.earthengine.v1alpha.EarthEngine.CreateMap google.earthengine.v1alpha.EarthEngine.CreateTable google.earthengine.v1alpha.EarthEngine.CreateThumbnail google.earthengine.v1alpha.EarthEngine.CreateVideoThumbnail google.earthengine.v1alpha.EarthEngine.ExportClassifier (LRO) google.earthengine.v1alpha.EarthEngine.ExportImage (LRO) google.earthengine.v1alpha.EarthEngine.ExportMap (LRO) google.earthengine.v1alpha.EarthEngine.ExportTable (LRO) google.earthengine.v1alpha.EarthEngine.ExportVideo (LRO) google.earthengine.v1alpha.EarthEngine.ExportVideoMap (LRO) google.earthengine.v1alpha.EarthEngine.GetAsset google.earthengine.v1alpha.EarthEngine.GetPixels google.earthengine.v1alpha.EarthEngine.GetProjectConfig google.earthengine.v1alpha.EarthEngine.ImportExternalImage google.earthengine.v1alpha.EarthEngine.ImportImage (LRO) google.earthengine.v1alpha.EarthEngine.ImportTable (LRO) google.earthengine.v1alpha.EarthEngine.ListAlgorithms google.earthengine.v1alpha.EarthEngine.ListAssets google.earthengine.v1alpha.EarthEngine.ListFeatures google.earthengine.v1alpha.EarthEngine.ListImages google.earthengine.v1beta.EarthEngine.ComputeFeatures google.earthengine.v1beta.EarthEngine.ComputeImages google.earthengine.v1beta.EarthEngine.ComputePixels google.earthengine.v1beta.EarthEngine.ComputeValue google.earthengine.v1beta.EarthEngine.CopyAsset google.earthengine.v1beta.EarthEngine.CreateFeatureView google.earthengine.v1beta.EarthEngine.CreateFilmstripThumbnail google.earthengine.v1beta.EarthEngine.CreateMap google.earthengine.v1beta.EarthEngine.CreateTable google.earthengine.v1beta.EarthEngine.CreateThumbnail google.earthengine.v1beta.EarthEngine.CreateVideoThumbnail google.earthengine.v1beta.EarthEngine.ExportClassifier (LRO) google.earthengine.v1beta.EarthEngine.ExportImage (LRO) google.earthengine.v1beta.EarthEngine.ExportMap (LRO) google.earthengine.v1beta.EarthEngine.ExportTable (LRO) google.earthengine.v1beta.EarthEngine.ExportVideo (LRO) google.earthengine.v1beta.EarthEngine.ExportVideoMap (LRO) google.earthengine.v1beta.EarthEngine.GetAsset google.earthengine.v1beta.EarthEngine.GetPixels google.earthengine.v1beta.EarthEngine.GetProjectConfig google.earthengine.v1beta.EarthEngine.ImportImage (LRO) google.earthengine.v1beta.EarthEngine.ImportTable (LRO) google.earthengine.v1beta.EarthEngine.ListAlgorithms google.earthengine.v1beta.EarthEngine.ListAssets google.earthengine.v1beta.EarthEngine.ListFeatures DATA WRITE google.earthengine.v1.EarthEngine.CopyAsset google.earthengine.v1.EarthEngine.CreateAsset google.earthengine.v1.EarthEngine.DeleteAsset google.earthengine.v1.EarthEngine.ExportClassifier (LRO) google.earthengine.v1.EarthEngine.ImportImage (LRO) google.earthengine.v1.EarthEngine.ImportTable (LRO) google.earthengine.v1.EarthEngine.MoveAsset google.earthengine.v1.EarthEngine.UpdateAsset google.earthengine.v1.EarthEngine.UpdateProjectConfig google.earthengine.v1alpha.EarthEngine.CopyAsset google.earthengine.v1alpha.EarthEngine.CreateAsset google.earthengine.v1alpha.EarthEngine.DeleteAsset google.earthengine.v1alpha.EarthEngine.ExportClassifier (LRO) google.earthengine.v1alpha.EarthEngine.ExportImage (LRO) google.earthengine.v1alpha.EarthEngine.ImportImage (LRO) google.earthengine.v1alpha.EarthEngine.ImportTable (LRO) google.earthengine.v1alpha.EarthEngine.MoveAsset google.earthengine.v1alpha.EarthEngine.UpdateAsset google.earthengine.v1alpha.EarthEngine.UpdateProjectConfig google.earthengine.v1beta.EarthEngine.CopyAsset google.earthengine.v1beta.EarthEngine.CreateAsset google.earthengine.v1beta.EarthEngine.DeleteAsset google.earthengine.v1beta.EarthEngine.ExportClassifier (LRO) google.earthengine.v1beta.EarthEngine.ExportImage (LRO) google.earthengine.v1beta.EarthEngine.ImportImage (LRO) google.earthengine.v1beta.EarthEngine.ImportTable (LRO) google.earthengine.v1beta.EarthEngine.MoveAsset google.earthengine.v1beta.EarthEngine.UpdateAsset google.earthengine.v1beta.EarthEngine.UpdateProjectConfig API interface audit logs For information about how and which permissions are evaluated for each method, see the Cloud Identity and Access Management documentation for Cloud Earth Engine. google.earthengine.v1.EarthEngine The following audit logs are associated with methods belonging to google.earthengine.v1.EarthEngine .
- Filter for this method : protoPayload.methodName="google.earthengine.v1beta.EarthEngine.ListFeatures" MoveAsset Method : google.earthengine.v1beta.EarthEngine.MoveAsset Audit log type : Data access Permissions : earthengine.assets.create - DATA WRITE earthengine.assets.delete - DATA WRITE earthengine.assets.get - DATA READ Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="google.earthengine.v1.EarthEngine.ListFeatures" MoveAsset Method : google.earthengine.v1.EarthEngine.MoveAsset Audit log type : Data access Permissions : earthengine.assets.create - DATA WRITE earthengine.assets.delete - DATA WRITE earthengine.assets.get - DATA READ Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="google.earthengine.v1alpha.EarthEngine.CreateFeatureView" CreateFilmstripThumbnail Method : google.earthengine.v1alpha.EarthEngine.CreateFilmstripThumbnail Audit log type : Data access Permissions : earthengine.filmstripthumbnails.create - DATA READ Method is a long-running or streaming operation : No.

### "Feature and FeatureCollection Charts \_|\_ Google Earth Engine \_|\_ Google\

- URL: [https://developers.google.com/earth-engine/guides/charts_feature](https://developers.google.com/earth-engine/guides/charts_feature)
- Source ID: `site-docs-root-2`
- Final score: 69
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Chart . feature . byFeature ({ features : ecoregions , xProperty : 'label' , yProperties : [ '06 ppt' , '06 tmean' ] }) . setSeriesNames ([ 'Precipitation' , 'Temperature' ]) . setChartType ( 'ColumnChart' ) . setOptions ({ title : 'Average June Temperature and Precipitation by Ecoregion' , series : { 0 : { targetAxisIndex : 1 , type : 'bar' , color : '1d6b99' }, 1 : { targetAxisIndex : 0 , type : 'line' , lineWidth : 0 , pointSize : 10 , color : 'e37d05' } }, hAxis : { title : 'Ecoregion' , titleTextStyle : { italic : false , bold : true }}, vAxes : { 0 : { title : 'Temperature (°C)' , baseline : 0 , titleTextStyle : { italic : false , bold : true , color : 'e37d05' } }, 1 : { title : 'Precipitation (mm)' , titleTextStyle : { italic : false , bold : true , color : '1d6b99' } }, }, bar : { groupWidth : '40%' }, }); print ( chart ); ui.Chart.feature.byProperty Example setup The ui.Chart.feature.byProperty function accepts a dictionary that allows you to control the label and order of property names along the x-axis by assigning numerical values to them.
- FeatureCollection ( 'projects/google/charts feature example' ); // Define a dictionary that associates property names with values and labels. var precipInfo = { '01 ppt' : { v : 1 , f : 'Jan' }, '02 ppt' : { v : 2 , f : 'Feb' }, '03 ppt' : { v : 3 , f : 'Mar' }, '04 ppt' : { v : 4 , f : 'Apr' }, '05 ppt' : { v : 5 , f : 'May' }, '06 ppt' : { v : 6 , f : 'Jun' }, '07 ppt' : { v : 7 , f : 'Jul' }, '08 ppt' : { v : 8 , f : 'Aug' }, '09 ppt' : { v : 9 , f : 'Sep' }, '10 ppt' : { v : 10 , f : 'Oct' }, '11 ppt' : { v : 11 , f : 'Nov' }, '12 ppt' : { v : 12 , f : 'Dec' } }; // Organize property information into objects for defining x properties and // their tick labels. var xPropValDict = {}; // Dictionary to codify x-axis property names as values. var xPropLabels = []; // Holds dictionaries that label codified x-axis values. for ( var key in precipInfo ) { xPropValDict [ key ] = precipInfo [ key ]. v ; xPropLabels . push ( precipInfo [ key ]); } // Define the chart and print it to the console. var chart = ui .
- FeatureCollection ( 'projects/google/charts feature example' ); // Define a dictionary that associates property names with values and labels. var precipInfo = { '01 ppt' : { v : 1 , f : 'Jan' }, '02 ppt' : { v : 2 , f : 'Feb' }, '03 ppt' : { v : 3 , f : 'Mar' }, '04 ppt' : { v : 4 , f : 'Apr' }, '05 ppt' : { v : 5 , f : 'May' }, '06 ppt' : { v : 6 , f : 'Jun' }, '07 ppt' : { v : 7 , f : 'Jul' }, '08 ppt' : { v : 8 , f : 'Aug' }, '09 ppt' : { v : 9 , f : 'Sep' }, '10 ppt' : { v : 10 , f : 'Oct' }, '11 ppt' : { v : 11 , f : 'Nov' }, '12 ppt' : { v : 12 , f : 'Dec' } }; // Organize property information into objects for defining x properties and // their tick labels. var xPropValDict = {}; // Dictionary to codify x-axis property names as values. var xPropLabels = []; // Holds dictionaries that label codified x-axis values. for ( var key in precipInfo ) { xPropValDict [ key ] = precipInfo [ key ]. v ; xPropLabels . push ( precipInfo [ key ]); } // Define the chart and print it to the console. var chart = ui .
- FeatureCollection ( 'projects/google/charts feature example' ); // Define a dictionary that associates property names with values and labels. var precipInfo = { '01 ppt' : { v : 1 , f : 'Jan' }, '02 ppt' : { v : 2 , f : 'Feb' }, '03 ppt' : { v : 3 , f : 'Mar' }, '04 ppt' : { v : 4 , f : 'Apr' }, '05 ppt' : { v : 5 , f : 'May' }, '06 ppt' : { v : 6 , f : 'Jun' }, '07 ppt' : { v : 7 , f : 'Jul' }, '08 ppt' : { v : 8 , f : 'Aug' }, '09 ppt' : { v : 9 , f : 'Sep' }, '10 ppt' : { v : 10 , f : 'Oct' }, '11 ppt' : { v : 11 , f : 'Nov' }, '12 ppt' : { v : 12 , f : 'Dec' } }; // Organize property information into objects for defining x properties and // their tick labels. var xPropValDict = {}; // Dictionary to codify x-axis property names as values. var xPropLabels = []; // Holds dictionaries that label codified x-axis values. for ( var key in precipInfo ) { xPropValDict [ key ] = precipInfo [ key ]. v ; xPropLabels . push ( precipInfo [ key ]); } // Define the chart and print it to the console. var chart = ui .

### "Cloud GeoTiff-Backed Earth Engine Assets \_|\_ Google Earth Engine \_|\_\

- URL: [https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff](https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff)
- Source ID: `site-docs-reference`
- Final score: 59
- Re-rank relevance: N/A

Evidence snippets:
- For users with GDAL >= 3.11, the COG driver can produce files without having to worry about creating and preserving overviews. gdal translate in .tif out.tif \ -of COG \ -co OVERVIEWS = IGNORE EXISTING \ -co COMPRESS = ZSTD \ -co LEVEL = 22 \ -co PREDICTOR = 2 \ -co INTERLEAVE = BAND \ -co NUM THREADS = ALL CPUS \ Creating Cloud GeoTiff-Backed Assets using the REST API Note: The REST API contains new and advanced features that may not be suitable for all users.
- The band order of the resulting asset is mixed from the input COGs (e.g. output band 0 is from Tileset 0, while output band 1 is from Tileset 1). request = { 'imageManifest' : { 'name' : f 'projects/ { ee project } /assets/cogdemo2' , 'uriPrefix' : 'gs://ee-docs-demos/external image demo/' , 'tilesets' : [ { 'id' : '0' , 'sources' : [ { 'uris' : [ 'b4b3b2.tif' ] } ] }, { 'id' : '1' , 'sources' : [ { 'uris' : [ 'b5b6b7.tif' ] } ] }, ], 'bands' : [ { 'id' : 'red' , 'tilesetId' : '0' , 'tilesetBandIndex' : 0 }, { 'id' : 'rededge3' , 'tilesetId' : '1' , 'tilesetBandIndex' : 2 }, { 'id' : 'rededge2' , 'tilesetId' : '1' , 'tilesetBandIndex' : 1 }, { 'id' : 'green' , 'tilesetId' : '0' , 'tilesetBandIndex' : 1 }, { 'id' : 'blue' , 'tilesetId' : '1' , 'tilesetBandIndex' : 0 }, { 'id' : 'rededge1' , 'tilesetId' : '0' , 'tilesetBandIndex' : 2 }, ], }, } pprint ( request ) Details on COG-backed assets Location The Cloud Storage bucket location must be one of: The US multi-region Any US dual-region that includes US-CENTRAL1 The region US-CENTRAL1 Storage class The storage class of the bucket must be "Standard storage".
- If no bands are specified, the resulting asset will contain all the bands of the GeoTIFF with the band names encoded in the GeoTIFF (in this case, "vis-red", "vis-green", and "vis-blue"). request = { 'imageManifest' : { 'name' : f 'projects/ { ee project } /assets/cogdemo1' , 'tilesets' : [ { 'id' : '0' , 'sources' : [ { 'uris' : [ 'gs://ee-docs-demos/COG demo.tif' ] } ] } ], 'properties' : { 'version' : '1.1' }, 'startTime' : '2016-01-01T00:00:00.000000000Z' , 'endTime' : '2016-12-31T15:01:23.000000000Z' , }, } pprint ( request ) More than one Tileset It is possible to specify an ImageManifest with more than one Tileset where each band of the resulting asset is backed by one of the bands of a Tileset using the tilesetId and tilesetBandIndex fields.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-21 UTC."],[],["This document details how to create Earth Engine assets backed by Cloud Optimized GeoTIFFs (COGs).

