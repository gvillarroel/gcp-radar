---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:10:51.817Z"
product_name: "Earth Engine Python Client Library"
product_slug: "earth-engine-python-client-library"
feature_name: "Image export shardSize and fileDimensions options"
feature_slug: "image-export-shardsize-and-filedimensions-options"
latest_feature_date: "2016-10-27"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/docs/release-notes"
  - "https://developers.google.com/earth-engine/guides/command_line"
  - "https://developers.google.com/earth-engine/guides/charts_image"
keywords:
  - "image"
  - "export"
  - "shardsize"
  - "and"
  - "filedimensions"
  - "options"
  - "adds"
  - "arguments"
---

# Image export shardSize and fileDimensions options

Product: Earth Engine Python Client Library
Coverage: LOW

## Step 02 Summary

Adds shardSize and fileDimensions arguments for multi-file image exports to Drive or Cloud Storage.

## Extended Definition

Adds shardSize and fileDimensions arguments for multi-file image exports to Drive or Cloud Storage.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- [https://developers.google.com/earth-engine/guides/command_line](https://developers.google.com/earth-engine/guides/command_line)
- [https://developers.google.com/earth-engine/guides/charts_image](https://developers.google.com/earth-engine/guides/charts_image)

## Supporting Pages

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- October 27, 2016 Earth Engine JavaScript Client Library 0.1.99 Feature Added optional shardSize and fileDimensions arguments to Export.image.toDrive() and Export.image.toCloudStorage() , to specify the computation shard size and the output file dimensions for multi-file image exports.
- Earth Engine Python Client Library 0.1.99 Feature Added optional shardSize and fileDimensions arguments to Export.image.toDrive() and Export.image.toCloudStorage() , to specify the computation shard size and the output file dimensions for multi-file image exports.
- April 11, 2023 Earth Engine Data Catalog Feature Added MODIS/061/MCD19A2 GRANULES : MCD19A2.061: Terra & Aqua MAIAC Land Aerosol Optical Depth Daily 1km Added NOAA/VIIRS/001/VNP43IA2 : VNP43IA2: BRDF/Albedo Quality Daily L3 Global 500m SIN Grid Added WWF/HydroATLAS/v1/Basins/level03 : WWF HydroATLAS Basins Level 03 Added WWF/HydroATLAS/v1/Basins/level04 : WWF HydroATLAS Basins Level 04 Added WWF/HydroATLAS/v1/Basins/level05 : WWF HydroATLAS Basins Level 05 Added WWF/HydroATLAS/v1/Basins/level06 : WWF HydroATLAS Basins Level 06 Added WWF/HydroATLAS/v1/Basins/level07 : WWF HydroATLAS Basins Level 07 Added WWF/HydroATLAS/v1/Basins/level08 : WWF HydroATLAS Basins Level 08 Added WWF/HydroATLAS/v1/Basins/level09 : WWF HydroATLAS Basins Level 09 Added WWF/HydroATLAS/v1/Basins/level10 : WWF HydroATLAS Basins Level 10 Added WWF/HydroATLAS/v1/Basins/level11 : WWF HydroATLAS Basins Level 11 March 21, 2023 Earth Engine Data Catalog Feature Added NOAA/VIIRS/001/VNP15A2H (no longer available) March 14, 2023 Earth Engine Data Catalog Feature Added NASA/GDDP-CMIP6 : NEX-GDDP-CMIP6: NASA Earth Exchange Global Daily Downscaled Climate Projections March 09, 2023 Earth Engine Server Change Changed the default BIGTIFF parameter in the GeoTIFF image export options from IF SAFER to YES , which always generates a BigTiff unless the BIGTIFF parameter is overridden in the formatOptions dictionary parameter.
- April 07, 2026 Earth Engine Data Catalog Feature Added projects/openet/assets/disalexi/conus/gridmet/monthly/v2 0 : OpenET DisALEXI Monthly Evapotranspiration v2.0 Added projects/openet/assets/disalexi/conus/gridmet/monthly/v2 1 : OpenET DisALEXI Monthly Evapotranspiration v2.1 Added projects/openet/assets/eemetric/conus/gridmet/monthly/v2 0 : OpenET eeMETRIC Monthly Evapotranspiration v2.0 Added projects/openet/assets/eemetric/conus/gridmet/monthly/v2 1 : OpenET eeMETRIC Monthly Evapotranspiration v2.1 Added projects/openet/assets/ensemble/conus/gridmet/monthly/v2 0 : OpenET Ensemble Monthly Evapotranspiration v2.0 Added projects/openet/assets/ensemble/conus/gridmet/monthly/v2 1 : OpenET Ensemble Monthly Evapotranspiration v2.1 Added projects/openet/assets/geesebal/conus/gridmet/monthly/v2 0 : OpenET geeSEBAL Monthly Evapotranspiration v2.0 Added projects/openet/assets/geesebal/conus/gridmet/monthly/v2 1 : OpenET geeSEBAL Monthly Evapotranspiration v2.1 Added projects/openet/assets/ptjpl/conus/gridmet/monthly/v2 0 : OpenET PT-JPL Monthly Evapotranspiration v2.0 Added projects/openet/assets/ptjpl/conus/gridmet/monthly/v2 1 : OpenET PT-JPL Monthly Evapotranspiration v2.1 Added projects/openet/assets/sims/conus/gridmet/monthly/v2 0 : OpenET SIMS Monthly Evapotranspiration v2.0 Added projects/openet/assets/sims/conus/gridmet/monthly/v2 1 : OpenET SIMS Monthly Evapotranspiration v2.1 Added projects/openet/assets/ssebop/conus/gridmet/monthly/v2 0 : OpenET SSEBop Monthly Evapotranspiration v2.0 Added projects/openet/assets/ssebop/conus/gridmet/monthly/v2 1 : OpenET SSEBop Monthly Evapotranspiration v2.1 Added iNaturalist/MULTI SPECIES/LATEST : INaturalist Multispecies Open Range Maps March 31, 2026 Earth Engine Data Catalog Feature Added AIRBUS/SPOT 2 4 5/BRAZIL/2007 2009/MS/V1 : SPOT Multispectral Imagery 10-20m, Brazil Added AIRBUS/SPOT 2 4 5/BRAZIL/2007 2009/MS NC/V1 : SPOT Multispectral Pseudo Natural Color Imagery 10-20m, Brazil Added AIRBUS/SPOT 2 4 5/BRAZIL/2007 2009/PAN/V1 : SPOT Panchromatic Imagery 5-10m, Brazil Added AIRBUS/SPOT 2 4 5/BRAZIL/2007 2009/PMS NC/V1 : SPOT Pansharpened Pseudo Natural Color Imagery 5-10m, Brazil Added GOOGLE/BRAZIL FOREST 2008/V1/ANALYTIC : Brazil Forest Imagery Dataset 2008: Analytic Basemap Added GOOGLE/BRAZIL FOREST 2008/V1/VISUAL : Brazil Forest Imagery Dataset 2008: Visual Basemap Added USDA/SOLUS100/V0 : SOLUS: Soil properties of the conterminous United States at 100-m resolution March 30, 2026 Earth Engine Code Editor Announcement Code Editor Share Options Updated To enhance transparency and security, the options to Auto Run and Hide Code when sharing Earth Engine Code Editor script links have been removed.

### Command Line Tool \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/command_line](https://developers.google.com/earth-engine/guides/command_line)
- Source ID: `site-docs-reference`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- You can see a complete list of table upload options by visiting the Table Manifest guide or with: earthengine upload table -h external image To create an asset backed by an external image, run the upload image command with a manifest: earthengine upload external image --manifest /tmp/foo.json An example manifest is: { "name" : "projects/{project}/assets/cogdemo1" , "tilesets" : [ { "id" : "0" , "sources" : [{ "uris" : [ "gs://ee-docs-demos/COG demo.tif" ] }] } ], "properties" : { "source" : "https://code.earthengine.google.com/d541cf8b268b2f9d8f834c255698201d" }, "startTime" : "2016-01-01T00:00:00.000000000Z" , "endTime" : "2016-12-31T15:01:23.000000000Z" } See the Cloud GeoTIFF guide and the Image Manifest guide for more details on constructing the manifest.
- The options are also described in the Image Manifest guide. table To upload a Shapefile, CSV, or TFRecord from Google Cloud Storage to an Earth Engine table asset, you can use any of: earthengine upload table --asset id=projects/my-project/assets/myUploadedShapefile gs://bucket/foo.shp earthengine upload table --asset id=projects/my-project/assets/myUploadedCSV gs://bucket/foo.csv earthengine upload table --asset id=projects/my-project/assets/myUploadedTFRecord gs://bucket/foo.tfrecord Note: when uploading Shapefiles, you only need to specify the path to the .shp file.
- This will control how Earth Engine generates the pyramid of lower-resolution versions of your image: earthengine upload image --asset id=projects/my-project/assets/asset id --pyramiding policy=sample gs://bucket/image.tif You can use the --last band alpha to indicate that the mask for the image should be taken from an alpha channel in the last band: earthengine upload image --asset id=projects/my-project/assets/asset id --last band alpha gs://bucket/image.tif You can specify a no-data value using the --nodata value flag.
- Key actions include: authenticate to sign in; acl to manage asset access; asset to view/edit asset metadata; cp/mv to copy/move assets; create to make folders/collections; ls to list contents; model prepare for TensorFlow model transformation; project config to configure project settings; rm to delete assets; set project to set the default cloud project; task to manage long running tasks; and upload to add images or tables from Google Cloud Storage.\n"]]

### Image Charts \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/charts_image](https://developers.google.com/earth-engine/guides/charts_image)
- Source ID: `site-docs-root-2`
- Final score: 90
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Reducer . mean (), scale : 500 , xProperty : 'label' }) . setSeriesNames ([ 'Precipitation' , 'Temperature' ]) . setChartType ( 'ColumnChart' ) . setOptions ({ title : 'Average June Temperature and Precipitation by Ecoregion' , series : { 0 : { targetAxisIndex : 1 , type : 'bar' , color : '1d6b99' }, 1 : { targetAxisIndex : 0 , type : 'line' , lineWidth : 0 , pointSize : 10 , color : 'e37d05' } }, hAxis : { title : 'Ecoregion' , titleTextStyle : { italic : false , bold : true }}, vAxes : { 0 : { title : 'Temperature (°C)' , baseline : 0 , titleTextStyle : { italic : false , bold : true , color : 'e37d05' } }, 1 : { title : 'Precipitation (mm)' , titleTextStyle : { italic : false , bold : true , color : '1d6b99' } }, }, bar : { groupWidth : '40%' }, }); print ( chart ); ui.Chart.image.regions Example setup The ui.Chart.image.regions function accepts a list that allows you to control the label and order of band names along the x-axis by assigning numerical values to them.
- Reducer . mean (), scale : 500 , classLabels : [ 'Desert' , 'Forest' , 'Grassland' ], xLabels : wavelengths }) . setChartType ( 'ScatterChart' ) . setOptions ({ title : 'Ecoregion Spectral Signatures' , hAxis : { title : 'Wavelength (nm)' , titleTextStyle : { italic : false , bold : true }, viewWindow : { min : wavelengths [ 0 ], max : wavelengths [ 6 ]} }, vAxis : { title : 'Reflectance (x1e4)' , titleTextStyle : { italic : false , bold : true } }, colors : [ 'f0af07' , '0f8755' , '76b349' ], pointSize : 0 , lineSize : 5 , curveType : 'function' }); print ( chart ); ui.Chart.image.histogram A histogram of pixel values within a region surrounding Salt Lake City, Utah, USA are displayed for three MODIS surface reflectance bands.
- Chart . image . histogram ({ image : modisSr , region : histRegion , scale : 500 }) . setSeriesNames ([ 'Red' , 'NIR' , 'SWIR' ]) . setOptions ({ title : 'MODIS SR Reflectance Histogram' , hAxis : { title : 'Reflectance (x1e4)' , titleTextStyle : { italic : false , bold : true }, }, vAxis : { title : 'Count' , titleTextStyle : { italic : false , bold : true }}, colors : [ 'cf513e' , '1d6b99' , 'f0af07' ] }); print ( chart ); Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Reducer . mean (), scale : 5e3 , seriesProperty : 'label' , xLabels : monthNames }) . setChartType ( 'PieChart' ) . setOptions ({ title : 'Average Monthly Precipitation for Forest Ecoregion' , colors : [ '604791' , '1d6b99' , '39a8a7' , '0f8755' , '76b349' , 'f0af07' , 'e37d05' , 'cf513e' , '96356f' , '724173' , '9c4f97' , '696969' ], pieHole : 0.4 }); ui.Chart.image.byClass Line chart The ui.Chart.image.byClass function plots band value statistics for pixels within classified regions of a "class band".

