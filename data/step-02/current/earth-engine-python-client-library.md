# Earth Engine Python Client Library

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 43
Unique features: 52

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2025-11-30 | Overwrite parameter for asset exports |  | Adds an overwrite parameter to Export.image.toAsset() and Export.table.toAsset() so exports can overwrite existing destination assets. |
| 2025-03-17 | Earth Engine CLI version flag |  | Adds the --version flag to the Earth Engine CLI to print the client version. |
| 2024-11-18 | external_image upload command |  | Promotes the alpha external_image upload command in the Earth Engine CLI to Preview. |
| 2024-04-03 | ee.data.createFolder |  | Adds ee.data.createFolder to the Python client for creating folders. |
| 2024-01-31 | Constructor docstrings and type annotations for core value classes |  | Adds __init__ docstrings and argument type annotations for Array, ConfusionMatrix, DateRange, Model, Projection, and Reducer. |
| 2024-01-18 | Constructor docstrings and type annotations for ErrorMargin and Join |  | Adds __init__ docstrings and argument type annotations for ErrorMargin and Join. |
| 2024-01-10 | Constructor docstrings and type annotations for PixelType |  | Adds __init__ docstrings and argument type annotations for PixelType. |
| 2023-12-08 | Ambient default credentials support |  | Makes ee.Initialize() use ambient google.auth.default() credentials when available. |
| 2023-12-08 | Classifier export to asset |  | Adds Export.classifier.toAsset for exporting saved classifiers as Earth Engine assets. |
| 2023-12-08 | Classifier loading from asset |  | Adds ee.Classifier.load for loading saved classifiers from Earth Engine assets. |
| 2023-12-08 | Colab authentication mode |  | Adds Colab mode support to ee.Authenticate() and ee.Initialize(). |
| 2023-12-08 | Default credential reuse and forced refresh |  | Makes ee.Authenticate() reuse existing credentials by default while allowing force=True to refresh them. |
| 2023-12-08 | ee.Blob URL validation |  | Adds ee.Blob(url) so the client can validate URL arguments and reject invalid non-gs:// strings earlier. |
| 2023-12-08 | gcloud authentication mode |  | Adds gcloud mode for remote machines to ee.Authenticate() and ee.Initialize(). |
| 2023-12-08 | localhost authentication mode |  | Introduces localhost mode for ee.Authenticate() and ee.Initialize(); Adds a localhost authentication mode for client library integration. |
| 2023-12-08 | opt_ keyword parameters | 2023-12-08 | Removes the opt_ keyword prefix from parameters while preserving backwards compatibility for existing scripts; deprecated on 2023-12-08. |
| 2023-11-15 | Workload tags for ee.data.getPixels |  | Adds workload tag support to ee.data.getPixels(). |
| 2023-05-03 | GeoTIFF export no_data field |  | Adds support for the no_data field in GeoTIFF exports. |
| 2023-02-15 | ee.data.computeFeatures() |  | Computes features from assets or ee.FeatureCollection objects. |
| 2023-02-15 | ee.data.computePixels() |  | Computes pixel data from assets or ee.Image objects. |
| 2023-02-15 | ee.data.getPixels() |  | Retrieves pixel data from assets or ee.Image objects. |
| 2023-02-15 | ee.data.listFeatures() |  | Lists features from assets or ee.FeatureCollection objects. |
| 2022-07-13 | ee.oauth.Flow class |  | Introduces the ee.oauth.Flow class for OAuth flow integration. |
| 2022-06-22 | Workload tag API |  | Labels computations and exports with a workload tag visible in Google Cloud Console. |
| 2022-05-09 | FeatureView assets and API |  | Provides FeatureView assets and API support. |
| 2021-07-15 | ee.Filter.bounds() |  | Provides an alias for ee.Filter.geometry(). |
| 2021-04-29 | maxVertices table export parameter |  | Adds support for the maxVertices parameter in table exports. |
| 2020-09-25 | TaskStatus attempted count |  | Adds a TaskStatus field for the number of times a task was attempted. |
| 2020-08-21 | task list long_format option |  | Adds a long_format option to the earthengine task list CLI command. |
| 2020-03-06 | PKCE support |  | Adds PKCE support to earthengine authenticate. |
| 2019-11-12 | maxWorkerCount export parameter |  | Adds a maxWorkerCount parameter to image export configuration. |
| 2019-11-12 | tileSize export parameter |  | Adds a tileSize parameter to image export configuration. |
| 2019-08-30 | ee.Authenticate() |  | Provides OAuth2 authorization for access to Earth Engine. |
| 2017-06-12 | Shapefile uploads |  | Allows uploading shapefiles. |
| 2017-03-02 | skipEmptyTiles for image exports |  | Skips generating empty image tiles during exports to Drive or Cloud Storage. |
| 2016-10-27 | Image export shardSize and fileDimensions options |  | Adds shardSize and fileDimensions arguments for multi-file image exports to Drive or Cloud Storage. |
| 2016-10-27 | skipEmptyTiles for map exports |  | Skips writing empty tiles during map export to Cloud Storage. |
| 2016-06-02 | ComputedObject.evaluate() |  | Evaluates a computed object client-side and returns the result. |
| 2015-06-04 | Collection.map() opt_dropNulls option |  | Adds an opt_dropNulls argument to Collection.map() to drop null results. |
| 2015-06-04 | Named map layer overlays |  | Allows map layer overlays to be named. |
| 2015-04-30 | Video exports |  | Allows exporting videos from Earth Engine. |
| 2015-03-06 | getThumbURL() callback option |  | Adds a callback option to getThumbURL(). |
| 2015-02-10 | FeatureCollection.select() |  | Selects columns from a FeatureCollection. |
| 2014-09-24 | Google account authentication |  | Supports authentication with a Google account in the Python API. |
| 2014-02-13 | Projection class |  | Introduced ee.Projection to represent map projections. |
| 2013-12-20 | Element base class |  | Introduced ee.Element as the base class for ee.Image and ee.Feature. |
| 2013-07-24 | Service account credential key data support |  | Added support for passing key data directly to ee.ServiceAccountCredentials() in addition to key filenames. |
| 2013-07-24 | Unbound algorithm invocation |  | Added support for calling unbound algorithms with ee.Algorithms.algorithmName(...). |
| 2013-07-03 | GeoJSON geodesic field support |  | Added support for the geodesic field in GeoJSON to distinguish geodesic and projected lines. |
| 2013-06-05 | Kernel class |  | Introduced an ee.Kernel class. |
| 2013-03-14 | Custom JSON API object specification | 2013-03-14 | Deprecated specifying API objects with custom JSON structures; deprecated on 2013-03-14. |
| 2013-01-31 | Static API method invocation |  | Added support for calling static API methods with the ClassName.methodName() syntax. |

Source file slug: `earth-engine-python-client-library.md`

