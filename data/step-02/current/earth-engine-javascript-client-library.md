# Earth Engine JavaScript Client Library

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 32
Unique features: 35

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2025-11-30 | Overwrite parameter for asset exports |  | The Export.image.toAsset() and Export.table.toAsset() methods support an overwrite parameter to control replacement of existing destination assets. |
| 2023-12-08 | ee.Classifier.load() |  | Ee.Classifier.load() loads saved classifier assets such as ee.Classifier.smileCart and ee.Classifier.smileRandomForest. |
| 2023-12-08 | Export.classifier.toAsset() |  | Export.classifier.toAsset() exports trained classifiers as Earth Engine assets. |
| 2023-12-08 | getMap() method | 2023-12-08 | GetMap() is deprecated in favor of getMapId(); deprecated on 2023-12-08. |
| 2023-12-08 | getMapId() method |  | GetMapId() is available on ee.Image, ee.ImageCollection, ee.Feature, and ee.FeatureCollection and matches the Python client. |
| 2023-09-07 | ee.batch.ExportTask.start() submitted task ID |  | Ee.batch.ExportTask.start() returns the submitted task ID. |
| 2023-05-03 | GeoTIFF no_data field |  | GeoTIFF exports support the no_data field in the JavaScript and Python client libraries. |
| 2021-04-29 | maxVertices parameter for table exports |  | Table exports support a maxVertices parameter. |
| 2021-04-22 | OAuth2 scope override for authentication |  | The default OAuth2 scopes used by ee.data.authenticateViaOauth() and ee.data.authenticateViaPrivateKey() can be overridden. |
| 2020-10-15 | Export file format validation and normalization |  | Ee.batch.Export methods validate and normalize file formats, including support for synonyms such as JPG and JPEG. |
| 2020-09-25 | TaskStatus attempt count field |  | Ee.data.TaskStatus includes a field for the number of times a task was attempted. |
| 2017-06-12 | Shapefile upload support |  | The JavaScript client library supports uploading shapefiles. |
| 2017-03-02 | Image export skipEmptyTiles option |  | Adds a skipEmptyTiles option to Export.image.toDrive() and Export.image.toCloudStorage() to skip empty image tiles. |
| 2016-10-27 | Image export shardSize and fileDimensions arguments |  | Adds shardSize and fileDimensions arguments to Export.image.toDrive() and Export.image.toCloudStorage() for multi-file image exports. |
| 2016-10-27 | Map export skipEmptyTiles option |  | Adds a skipEmptyTiles option to Export.map.toCloudStorage() to skip writing empty map tiles. |
| 2016-09-29 | ee.FloatTileOverlay | 2016-09-29 | The legacy float tile overlay class was deprecated and replaced by newer layer overlays; deprecated on 2016-09-29. |
| 2016-09-29 | ee.layers.BinaryOverlay |  | An overlay class for displaying binary tiles on the map. |
| 2016-09-29 | ee.layers.ImageOverlay |  | An overlay class for displaying image tiles on the map; An overlay class for displaying image tiles on the map. |
| 2016-09-29 | ee.MapLayerOverlay | 2016-09-29 | The legacy map overlay class was deprecated and replaced by newer layer overlays; The legacy map overlay class was deprecated in favor of ee.layers.ImageOverlay; deprecated on 2016-09-29. |
| 2016-06-02 | ComputedObject.evaluate() |  | Evaluates a computed object asynchronously and returns the result via a callback. |
| 2016-02-18 | Asynchronous network request throttling |  | Adds throttling for asynchronous network requests made by the client library. |
| 2015-06-04 | Collection.map() opt_dropNulls argument |  | Collection.map() can drop null results with an opt_dropNulls argument. |
| 2015-06-04 | MapLayerOverlay naming support |  | Map layer overlays can now be assigned names. |
| 2015-04-30 | Video export support |  | The client library can export videos. |
| 2015-02-28 | Image.getThumbUrl() callback parameter |  | Adds an optional callback parameter to Image.getThumbUrl() for retrieving thumbnail URLs. |
| 2015-02-10 | ee.data.authenticate() |  | Authenticates API requests directly in the browser. |
| 2014-03-10 | Feature collection CSV download filename argument |  | You can specify a filename when downloading a feature collection as CSV. |
| 2014-02-13 | ee.Projection class |  | The ee.Projection class represents map projections. |
| 2013-12-20 | ee.Element class |  | The ee.Element class serves as the base class for ee.Image and ee.Feature. |
| 2013-07-24 | Service account credentials key data support |  | Ee.ServiceAccountCredentials() accepts key data in addition to key filenames. |
| 2013-07-24 | Unbound algorithm invocation |  | You can call unbound algorithms using the ee.Algorithms.algorithmName() syntax. |
| 2013-07-03 | GeoJSON geodesic field support |  | GeoJSON can include a geodesic field to distinguish geodesic lines from projected lines. |
| 2013-06-05 | ee.Kernel class |  | The ee.Kernel class provides kernel support in the JavaScript client library. |
| 2013-03-14 | Custom JSON API object specification | 2013-03-14 | Custom JSON objects should no longer be used to specify API objects such as error margins; deprecated on 2013-03-14. |
| 2013-01-31 | Static API method invocation |  | Static API methods can be called using the ClassName.methodName() syntax. |

Source file slug: `earth-engine-javascript-client-library.md`

