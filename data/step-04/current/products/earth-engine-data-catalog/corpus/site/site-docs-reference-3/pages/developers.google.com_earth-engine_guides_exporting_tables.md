---
title: "Exporting Table and Vector Data \_|\_ Google Earth Engine \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/earth-engine/guides/exporting_tables
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://developers.google.com/earth-engine/guides
source_metadata:
  url: https://developers.google.com/earth-engine/guides/exporting_tables
  title: "Exporting Table and Vector Data \_|\_ Google Earth Engine \_|\_ Google for\
    \ Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Earth Engine is introducing noncommercial quota tiers to safeguard shared compute resources and ensure reliable performance for everyone. All noncommercial projects will need to select a quota tier by April 27, 2026 or will use the Community Tier by default. Tier quotas will take effect for all projects (regardless of tier selection date) on April 27, 2026 . Learn more.
Home
Products
Google Earth Engine
Guides
Send feedback
Exporting Table and Vector Data
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
A FeatureCollection can be exported as CSV, SHP, GeoJSON, KML, KMZ or TFRecord using Export.table.
Specific file formats like KML and SHP have constraints on geometry and data.
FeatureCollections can be exported to Cloud Storage, Earth Engine assets, BigQuery, or Google Drive.
Exporting to Drive allows for various file formats, including CSV for data without geometry.
You can export a FeatureCollection as CSV, SHP (shapefile), GeoJSON, KML, KMZ
or TFRecord using Export.table . The FeatureCollection may represent vectors
or simply a table of data. In the latter case, the features in the collection
will have null geometry.
Note some additional constraints when working with some file formats, including:
KML : A FeatureCollection exported to a KML file will have all the
geometries transformed to unprojected (WGS84) coordinates.
SHP : A FeatureCollection exported to a Shapefile must contain features
with the same geometry type and projection and must fit within the
Shapefile size
limits . Column
names are truncated to 10 characters or fewer, and this must not create
duplicate column names.
TFRecord : See this page .
Note: If you need control over the precision of geometries in your export,
map() a function over the collection to be exported:
map(function(f) { return f.transform(targetProj, maxErr); })
to Cloud Storage
To export a FeatureCollection to Cloud Storage, use
Export.table.toCloudStorage() . For example, using the features defined
previously:
Code Editor (JavaScript)
// Make a collection of points.
var features = ee . FeatureCollection ([
ee . Feature ( ee . Geometry . Point ( 30.41 , 59.933 ), { name : 'Voronoi' }),
ee . Feature ( ee . Geometry . Point ( - 73.96 , 40.781 ), { name : 'Thiessen' }),
ee . Feature ( ee . Geometry . Point ( 6.4806 , 50.8012 ), { name : 'Dirichlet' })
]);
// Export a KML file to Cloud Storage.
Export . table . toCloudStorage ({
collection : features ,
description : 'vectorsToCloudStorageExample' ,
bucket : 'your-bucket-name' ,
fileNamePrefix : 'exampleTableExport' ,
fileFormat : 'KML'
});
Python setup
See the
Python Environment page for information on the Python API and using
geemap for interactive development.
import ee
import geemap.core as geemap
Colab (Python)
# Make a collection of points.
features = ee . FeatureCollection ([
ee . Feature ( ee . Geometry . Point ( 30.41 , 59.933 ), { 'name' : 'Voronoi' }),
ee . Feature ( ee . Geometry . Point ( - 73.96 , 40.781 ), { 'name' : 'Thiessen' }),
ee . Feature ( ee . Geometry . Point ( 6.4806 , 50.8012 ), { 'name' : 'Dirichlet' }),
])
# Export a KML file to Cloud Storage.
task = ee . batch . Export . table . toCloudStorage (
collection = features ,
description = 'vectorsToCloudStorageExample' ,
bucket = 'your-bucket-name' ,
fileNamePrefix = 'exampleTableExport' ,
fileFormat = 'KML' ,
)
task . start ()
to Asset
To export a FeatureCollection as an Earth Engine asset, use
Export.table.toAsset() . For example, using the features defined previously:
Code Editor (JavaScript)
// Export an ee.FeatureCollection as an Earth Engine asset.
Export . table . toAsset ({
collection : features ,
description : 'exportToTableAssetExample' ,
assetId : 'exampleAssetId' ,
});
Python setup
See the
Python Environment page for information on the Python API and using
geemap for interactive development.
import ee
import geemap.core as geemap
Colab (Python)
# Export an ee.FeatureCollection as an Earth Engine asset.
task = ee . batch . Export . table . toAsset (
collection = features ,
description = 'exportToTableAssetExample' ,
assetId = 'projects/your-project/assets/exampleAssetId' ,
)
task . start ()
There are several limitations on the size and shape of Earth Engine table
assets:
Maximum of 100 million features
Maximum of 1,000 properties (columns)
Maximum of 100,000 vertices for each row's geometry
Maximum of 100,000 characters per string value
to BigQuery
You can export a FeatureCollection to a BigQuery table using
Export.table.toBigQuery() .
This lets you integrate your Earth Engine data with other data and tools
available in BigQuery. For more information, see the
Exporting to BigQuery guide .
Code Editor (JavaScript)
Export . table . toBigQuery ({
collection : features ,
table : 'myproject.mydataset.mytable' ,
description : 'put_my_data_in_bigquery' ,
append : true ,
overwrite : false
});
Python setup
See the
Python Environment page for information on the Python API and using
geemap for interactive development.
import ee
import geemap.core as geemap
Colab (Python)
task = ee . batch . Export . table . toBigQuery (
collection = features ,
table = 'myproject.mydataset.mytable' ,
description = 'put_my_data_in_bigquery' ,
append = True ,
overwrite = False ,
)
task . start ()
to Drive
To export a FeatureCollection to your Drive account, use
Export.table.toDrive() . For example:
Code Editor (JavaScript)
// Export the FeatureCollection to a KML file.
Export . table . toDrive ({
collection : features ,
description : 'vectorsToDriveExample' ,
fileFormat : 'KML'
});
Python setup
See the
Python Environment page for information on the Python API and using
geemap for interactive development.
import ee
import geemap.core as geemap
Colab (Python)
# Export the FeatureCollection to a KML file.
task = ee . batch . Export . table . toDrive (
collection = features , description = 'vectorsToDriveExample' , fileFormat = 'KML'
)
task . start ()
Note that the output format is specified as KML to handle geographic data (SHP
would also be appropriate for exporting a table with geometry). To export just a
table of data, without any geographic information, export features with null
geometry in CSV format. The following demonstrates using
Export.table.toDrive() to get the results of a potentially long running
reduction:
Code Editor (JavaScript)
// Load a Landsat image.
var image = ee . Image ( 'LANDSAT/LC08/C02/T1_TOA/LC08_044034_20140318' );
var projection = image . select ( 'B2' ). projection (). getInfo ();
// Create an arbitrary rectangle.
var region = ee . Geometry . Rectangle ( - 122.2806 , 37.1209 , - 122.0554 , 37.2413 );
// Get a dictionary of means in the region.
var means = image . reduceRegion ({
reducer : ee . Reducer . mean (),
geometry : region ,
crs : projection . crs ,
crsTransform : projection . transform ,
});
// Make a feature without geometry and set the properties to the dictionary of means.
var feature = ee . Feature ( null , means );
// Wrap the Feature in a FeatureCollection for export.
var featureCollection = ee . FeatureCollection ([ feature ]);
// Export the FeatureCollection.
Export . table . toDrive ({
collection : featureCollection ,
description : 'exportTableExample' ,
fileFormat : 'CSV'
});
Python setup
See the
Python Environment page for information on the Python API and using
geemap for interactive development.
import ee
import geemap.core as geemap
Colab (Python)
# Load a Landsat image.
image = ee . Image ( 'LANDSAT/LC08/C02/T1_TOA/LC08_044034_20140318' )
projection = image . select ( 'B2' ) . projection () . getInfo ()
# Create an arbitrary rectangle.
region = ee . Geometry . Rectangle ( - 122.2806 , 37.1209 , - 122.0554 , 37.2413 )
# Get a dictionary of means in the region.
means = image . reduceRegion (
reducer = ee . Reducer . mean (),
geometry = region ,
crs = projection [ 'crs' ],
crsTransform = projection [ 'transform' ],
)
# Make a feature without geometry and set the properties to the dictionary of means.
feature = ee . Feature ( None , means )
# Wrap the Feature in a FeatureCollection for export.
feature_collection = ee . FeatureCollection ([ feature ])
# Export the FeatureCollection.
task = ee . batch . Export . table . toDrive (
collection = feature_collection ,
description = 'exportTableExample' ,
fileFormat = 'CSV' ,
)
task . start ()
Note that the format is set to 'CSV' in this example since there is no geometry
in the output.
Caution: Depending on your Google Drive settings, CSV tables that you export
from Earth Engine can be converted to XSLX files with unintended effects, such
as data type conversions. The behavior can be modified with Google Drive
settings .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-22 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-22 UTC."],[],[]]
