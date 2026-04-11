---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:10:51.818Z"
product_name: "Earth Engine Python Client Library"
product_slug: "earth-engine-python-client-library"
feature_name: "Collection.map() opt_dropNulls option"
feature_slug: "collection-map-opt-dropnulls-option"
latest_feature_date: "2015-06-04"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/docs/release-notes"
  - "https://developers.google.com/earth-engine/guides/command_line"
  - "https://developers.google.com/earth-engine/guides/charts_feature"
keywords:
  - "collection"
  - "map"
  - "opt"
  - "dropnulls"
  - "option"
  - "adds"
  - "an"
  - "argument"
---

# Collection.map() opt_dropNulls option

Product: Earth Engine Python Client Library
Coverage: LOW

## Step 02 Summary

Adds an opt_dropNulls argument to Collection.map() to drop null results.

## Extended Definition

Adds an opt_dropNulls argument to Collection.map() to drop null results.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- [https://developers.google.com/earth-engine/guides/command_line](https://developers.google.com/earth-engine/guides/command_line)
- [https://developers.google.com/earth-engine/guides/charts_feature](https://developers.google.com/earth-engine/guides/charts_feature)

## Supporting Pages

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- Added an opt dropNulls argument to Collection.map() .
- Added an opt dropNulls argument to Collection.map() .
- Added an optional skipEmptyTiles argument to Export.map.toCloudStorage() to skip writing empty (fully-transparent) tiles.
- Added an optional skipEmptyTiles argument to Export.map.toCloudStorage() to skip writing empty (fully-transparent) tiles.

### Command Line Tool \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/command_line](https://developers.google.com/earth-engine/guides/command_line)
- Source ID: `site-docs-reference`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- You can see a complete list of table upload options by visiting the Table Manifest guide or with: earthengine upload table -h external image To create an asset backed by an external image, run the upload image command with a manifest: earthengine upload external image --manifest /tmp/foo.json An example manifest is: { "name" : "projects/{project}/assets/cogdemo1" , "tilesets" : [ { "id" : "0" , "sources" : [{ "uris" : [ "gs://ee-docs-demos/COG demo.tif" ] }] } ], "properties" : { "source" : "https://code.earthengine.google.com/d541cf8b268b2f9d8f834c255698201d" }, "startTime" : "2016-01-01T00:00:00.000000000Z" , "endTime" : "2016-12-31T15:01:23.000000000Z" } See the Cloud GeoTIFF guide and the Image Manifest guide for more details on constructing the manifest.
- The options are also described in the Image Manifest guide. table To upload a Shapefile, CSV, or TFRecord from Google Cloud Storage to an Earth Engine table asset, you can use any of: earthengine upload table --asset id=projects/my-project/assets/myUploadedShapefile gs://bucket/foo.shp earthengine upload table --asset id=projects/my-project/assets/myUploadedCSV gs://bucket/foo.csv earthengine upload table --asset id=projects/my-project/assets/myUploadedTFRecord gs://bucket/foo.tfrecord Note: when uploading Shapefiles, you only need to specify the path to the .shp file.
- Authenticate () Command execution To run command line utilities, like the Earth Engine CLI, you need to prepend command calls with an exclamation point. !earthengine -h Set a Cloud project Use the --project option to set a Cloud project for each individual earthengine command. !earthengine --project my-project <command> Alternatively, set a default project to be used by all earthengine calls using the set project command.
- You may specify --max items number (or -m for short) to limit the number of items from each folder or collection you list: earthengine ls -m 10 projects/my-project/assets/my large collection Running the ls command with no arguments will list the top-level folders that you own. model Tool with which to manipulate TensorFlow saved models. model prepare Prepare a saved model for serving in Earth Engine.

### "Feature and FeatureCollection Charts \_|\_ Google Earth Engine \_|\_ Google\

- URL: [https://developers.google.com/earth-engine/guides/charts_feature](https://developers.google.com/earth-engine/guides/charts_feature)
- Source ID: `site-docs-root-2`
- Final score: 116
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Chart . feature . byFeature ({ features : ecoregions , xProperty : 'label' , yProperties : [ '06 ppt' , '06 tmean' ] }) . setSeriesNames ([ 'Precipitation' , 'Temperature' ]) . setChartType ( 'ColumnChart' ) . setOptions ({ title : 'Average June Temperature and Precipitation by Ecoregion' , series : { 0 : { targetAxisIndex : 1 , type : 'bar' , color : '1d6b99' }, 1 : { targetAxisIndex : 0 , type : 'line' , lineWidth : 0 , pointSize : 10 , color : 'e37d05' } }, hAxis : { title : 'Ecoregion' , titleTextStyle : { italic : false , bold : true }}, vAxes : { 0 : { title : 'Temperature (°C)' , baseline : 0 , titleTextStyle : { italic : false , bold : true , color : 'e37d05' } }, 1 : { title : 'Precipitation (mm)' , titleTextStyle : { italic : false , bold : true , color : '1d6b99' } }, }, bar : { groupWidth : '40%' }, }); print ( chart ); ui.Chart.feature.byProperty Example setup The ui.Chart.feature.byProperty function accepts a dictionary that allows you to control the label and order of property names along the x-axis by assigning numerical values to them.
- Chart . feature . byFeature ({ features : ecoregions . select ( '[0-9][0-9] ppt label' ), xProperty : 'label' }) . setSeriesNames ([ 'Jan' , 'Feb' , 'Mar' , 'Apr' , 'May' , 'Jun' , 'Jul' , 'Aug' , 'Sep' , 'Oct' , 'Nov' , 'Dec' ]) . setChartType ( 'ColumnChart' ) . setOptions ({ title : 'Average Monthly Precipitation by Ecoregion' , hAxis : { title : 'Ecoregion' , titleTextStyle : { italic : false , bold : true }}, vAxis : { title : 'Precipitation (mm)' , titleTextStyle : { italic : false , bold : true } }, colors : [ '604791' , '1d6b99' , '39a8a7' , '0f8755' , '76b349' , 'f0af07' , 'e37d05' , 'cf513e' , '96356f' , '724173' , '9c4f97' , '696969' ], isStacked : 'percent' }); print ( chart ); Scatter chart Features are plotted along the x-axis, labeled by values of a selected property.
- Chart . feature . byFeature ({ features : ecoregions . select ( '[0-9][0-9] ppt label' ), xProperty : 'label' }) . setSeriesNames ([ 'Jan' , 'Feb' , 'Mar' , 'Apr' , 'May' , 'Jun' , 'Jul' , 'Aug' , 'Sep' , 'Oct' , 'Nov' , 'Dec' ]) . setChartType ( 'ColumnChart' ) . setOptions ({ title : 'Average Monthly Precipitation by Ecoregion' , hAxis : { title : 'Ecoregion' , titleTextStyle : { italic : false , bold : true }}, vAxis : { title : 'Precipitation (mm)' , titleTextStyle : { italic : false , bold : true } }, colors : [ '604791' , '1d6b99' , '39a8a7' , '0f8755' , '76b349' , 'f0af07' , 'e37d05' , 'cf513e' , '96356f' , '724173' , '9c4f97' , '696969' ], isStacked : 'absolute' }); print ( chart ); Relative Features are plotted along the x-axis, labeled by values of a selected property.
- Chart . feature . byFeature ({ features : ecoregions . select ( '[0-9][0-9] tmean label' ), xProperty : 'label' , }) . setSeriesNames ([ 'Jan' , 'Feb' , 'Mar' , 'Apr' , 'May' , 'Jun' , 'Jul' , 'Aug' , 'Sep' , 'Oct' , 'Nov' , 'Dec' ]) . setChartType ( 'BarChart' ) . setOptions ({ title : 'Average Monthly Temperature by Ecoregion' , hAxis : { title : 'Temperature (°C)' , titleTextStyle : { italic : false , bold : true } }, vAxis : { title : 'Ecoregion' , titleTextStyle : { italic : false , bold : true }}, colors : [ '604791' , '1d6b99' , '39a8a7' , '0f8755' , '76b349' , 'f0af07' , 'e37d05' , 'cf513e' , '96356f' , '724173' , '9c4f97' , '696969' ] }); print ( chart ); Stacked column chart Absolute Features are plotted along the x-axis, labeled by values of a selected property.

