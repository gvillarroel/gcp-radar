# Earth Engine Server

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 73
Unique features: 131

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2025-04-01 | ee.FeatureCollection.loadBigQueryTable |  | This algorithm reads data from a BigQuery table into a feature collection. |
| 2025-04-01 | ee.FeatureCollection.runBigQuery |  | This algorithm runs a BigQuery query and loads the results into a feature collection. |
| 2025-02-26 | GeoTIFF internal mask ingestion |  | GeoTIFF uploads and ingestion can now use internal binary masks, with explicit mask bands taking precedence when present. |
| 2024-12-16 | ee.FeatureCollection.bounds |  | This algorithm returns the bounding box of a feature collection. |
| 2024-05-10 | Export.table.toBigQuery overwrite parameter |  | This parameter controls whether an export overwrites an existing destination BigQuery table. |
| 2024-04-18 | ee.Classifier.smileKNN Bray-Curtis distance metric |  | This classifier now supports the Bray-Curtis distance metric. |
| 2024-03-06 | Earth Engine export task priority |  | Export batch tasks can now be assigned a priority value when using a paid Earth Engine project. |
| 2024-03-06 | Geometry.fromS2CellId and Geometry.fromS2CellToken |  | These algorithms create geometries from S2 cell IDs or S2 cell tokens. |
| 2023-06-26 | ee.Filter.area |  | This filter evaluates features using their area. |
| 2023-05-15 | GeoTIFF geostationary projection support |  | Cloud Optimized GeoTIFFs now support the geostationary satellite projection during loading and asset creation. |
| 2022-06-27 | Earth Engine commercial offering |  | Earth Engine is available as a Google Cloud product offering for commercial customers. |
| 2022-06-22 | Workload tag API |  | This API labels computations and exports with a workload tag that is visible in Google Cloud Console. |
| 2022-01-06 | ee.String.equals |  | This method compares two strings for equality. |
| 2021-11-24 | ee.Algorithm.TemporalSegmentation.StructuralChangeBreakpoints |  | Detects breakpoints in an image time series using a linear-plus-harmonic model of pixel values. |
| 2021-11-24 | ee.Geometry.coveringGrid |  | Returns a collection of 1x1 rectangles that cover a geometry in a specified projection. |
| 2021-08-31 | ee.Reducer.circularMean |  | Computes the circular mean of values. |
| 2021-08-31 | ee.Reducer.circularStdDev |  | Computes the circular standard deviation of values. |
| 2021-08-31 | ee.Reducer.circularVariance |  | Computes the circular variance of values. |
| 2021-06-24 | ee.Model.fromAiPlatformPredictor.outputMultiplier |  | Adds an outputMultiplier option to ee.Model.fromAiPlatformPredictor. |
| 2021-05-19 | ee.Filter.hasType |  | Checks whether a filter has a given type. |
| 2021-04-15 | ee.List.unzip |  | Splits a list of pairs into two lists. |
| 2021-01-19 | ee.Classifier.smileGradientTreeBoost |  | Adds the Smile library's gradient tree boost classifier. |
| 2020-11-19 | Code Editor Report error link |  | Adds a Report error link to Code Editor errors to make feedback submission easier. |
| 2020-11-19 | Earth Engine API internal error request IDs |  | Adds a request ID string to internal error messages for debugging. |
| 2020-08-21 | ee.Geometry.BBox |  | Simplifies creation of latitude-longitude rectangles. |
| 2020-03-12 | ee.Image.directionalDistanceTransform |  | Calculates the distance to non-zero pixels in a specified direction. |
| 2020-01-09 | ee.Reducer.countRuns |  | Computes the number of runs of distinct, non-null inputs. |
| 2019-11-12 | Earth Engine Cloud API support |  | Adds Cloud API support to the JavaScript client library and enables it by default for the Python client library. |
| 2019-09-05 | ee.Collection.filter() expression-string support |  | Allows ee.Collection.filter() to accept expression strings. |
| 2019-09-05 | ee.Filter.expression() |  | Converts conditional and boolean string expressions into filters. |
| 2019-06-13 | ee.Array.argMax() |  | Returns the index of the maximum value in an array. |
| 2019-03-29 | ee.ImageCollection.getVideoThumbURL() |  | Generates a video thumbnail URL for an image collection. |
| 2019-01-10 | ee.List.distinct() |  | Returns the unique elements of a list. |
| 2018-12-07 | Export.map.toCloudStorage() mapsApiKey parameter |  | Lets map exports specify a Google Maps API key for the export viewer. |
| 2018-11-15 | ee.Image.clipToBoundsAndScale() |  | Clips an image to bounds and scales it in one operation. |
| 2018-11-15 | ee.Image.setDefaultProjection() |  | Sets the default projection for an image. |
| 2018-09-14 | ee.Image.reduceToVectors() |  | Uses 64-bit integer labels to avoid overflow when converting image regions to vectors. |
| 2018-09-14 | ee.Image.sample() geometries option |  | Includes per-feature geometries in sampled outputs. |
| 2018-09-14 | ee.Image.sampleRegions() geometries option |  | Includes per-feature geometries in sampled outputs. |
| 2018-09-14 | ee.Image.stratifiedSample() geometries option |  | Includes per-feature geometries in sampled outputs. |
| 2018-08-23 | ee.List.filter() |  | Filters list elements using a predicate. |
| 2018-08-23 | ee.List.join() |  | Concatenates list elements into a joined value. |
| 2018-06-22 | ee.Image.selfMask() |  | Masks an image using its own pixel values. |
| 2018-06-22 | ee.Image.spectralDistance() |  | Computes spectral distance with corrected NaN handling; Computes spectral distance between image spectra. |
| 2018-06-08 | ee.Image.reduceConnectedComponents() |  | Reduces connected components in images. |
| 2018-06-08 | ee.Image.Segmentation.GMeans() |  | Performs image segmentation using G-means clustering. |
| 2018-06-08 | ee.Image.Segmentation.KMeans() |  | Performs image segmentation using k-means clustering. |
| 2018-06-08 | ee.Image.spectralGradient() |  | Computes spectral gradients for images. |
| 2018-06-08 | ee.Image.spectralMorphology() |  | Applies spectral morphology operations to images. |
| 2018-06-08 | EWMACD |  | Performs temporal segmentation using an exponentially weighted moving average change detection approach. |
| 2018-06-08 | LandTrendr |  | Performs temporal segmentation for land cover change analysis. |
| 2018-06-08 | VCT |  | Performs temporal segmentation for vegetation change tracking. |
| 2018-06-08 | VerDET |  | Performs temporal segmentation for detecting vegetation change events. |
| 2018-05-18 | ee.Algorithms.Image.Segmentation.SNIC() |  | Performs superpixel segmentation using SNIC. |
| 2018-05-18 | ee.Filter.isContained() |  | Tests whether one geometry or feature is contained within another. |
| 2018-05-18 | ee.Filter.notNull() |  | Filters values or features where specified fields are not null. |
| 2017-12-20 | trainClassifier algorithms | 2017-12-20 | The trainClassifier algorithms are deprecated and should be replaced with Classifier.train; deprecated on 2017-12-20. |
| 2017-10-26 | ee.Reducer.last() |  | Returns the last element in a sequence. |
| 2017-10-26 | ee.Reducer.lastNonNull() |  | Returns the last non-null element in a sequence. |
| 2017-09-18 | Image.blend() |  | Performs simple alpha blending between two images. |
| 2017-07-06 | ee.Classifier.gmoLinearRegression() |  | Provides a regularizing linear regression classifier. |
| 2017-05-26 | ee.Image.displace() |  | Adds nearest-neighbor interpolation for displaced images, which is useful for ordinal data such as classifications. |
| 2017-05-26 | ee.Reducer.autoHistogram() |  | Produces an ee.Array output histogram suitable for per-pixel use. |
| 2017-05-26 | matrixCholeskyDecomposition |  | Computes the Cholesky decomposition for image and array data. |
| 2017-05-26 | matrixSingularValueDecomposition |  | Computes the singular value decomposition for image and array data. |
| 2016-11-22 | Image upload mask band support |  | Allows uploaded images to use mask bands with types other than byte. |
| 2016-08-24 | ee.Image.fastDistanceTransform() |  | Computes a fast distance transform for an image. |
| 2016-08-24 | ee.Image.medialAxis() |  | Computes the medial axis of an image. |
| 2016-08-24 | ee.Image.unmix() |  | Supports optional sum-to-one and non-negative constraints for unmixing. |
| 2016-07-13 | ee.Reducer.countDistinct() |  | Ignores masked pixels when counting distinct values; Counts the number of distinct values. |
| 2016-07-13 | ee.Reducer.firstNonNull() |  | Returns the first value that is not null or masked. |
| 2016-07-13 | ee.Reducer.frequencyHistogram() |  | Ignores masked pixels when building a frequency histogram. |
| 2016-06-02 | ee.Feature.setGeometry() |  | Sets or overrides the geometry of an existing feature. |
| 2016-04-08 | Image.reduceResolution |  | Generates pixels in a lower-resolution output projection. |
| 2016-03-17 | Image.arrayCat() |  | Concatenates the pixels of two array images along a specified array axis. |
| 2016-03-10 | ee.Number.format() |  | Formats a number as a string. |
| 2016-03-10 | ee.String.compareTo() |  | Compares two strings lexicographically. |
| 2016-03-10 | ee.String.toLowerCase() |  | Converts a string to lowercase. |
| 2016-03-10 | ee.String.toUpperCase() |  | Converts a string to uppercase. |
| 2016-03-10 | ee.String.trim() |  | Removes leading and trailing whitespace from a string. |
| 2016-02-18 | Kendall correlation reducer |  | Computes Kendall's rank correlation coefficient. |
| 2016-02-18 | Pearson's correlation reducer |  | Computes Pearson correlation. |
| 2016-02-18 | Sen's slope reducer |  | Estimates a Sen's slope trend. |
| 2016-02-18 | Spearman correlation reducer |  | Computes Spearman rank correlation. |
| 2016-02-02 | ee.Image.bitsToArrayImage() |  | Converts an image's bits into an array image. |
| 2015-11-25 | ee.Feature.cutLines() |  | Cuts linear parts along parameter distances in the result projection. |
| 2015-11-25 | ee.Geometry.cutLines() |  | Cuts linear parts along parameter distances in the result projection. |
| 2015-11-25 | ee.Image.bitsToArray() |  | Converts an image's bits into an array. |
| 2015-11-25 | ee.Number.bitsToArray() |  | Converts a number's bits into an array. |
| 2015-11-13 | CrossCorrelation algorithm |  | Supports masked pixels in the CrossCorrelation algorithm. |
| 2015-11-13 | ee.Image.reduceRegion() |  | Reduces an image even when it has no bands. |
| 2015-10-16 | ee.Image.date() |  | Returns an image's acquisition time as an ee.Date. |
| 2015-09-24 | Classifier.explain() |  | Describes classifier training results, currently for Cart only. |
| 2015-09-24 | Collection.size() |  | Returns the number of elements in a collection. |
| 2015-08-12 | cbrt() |  | Computes the cube root on ee.Image, ee.Number, and ee.Array values. |
| 2015-08-12 | digamma() |  | Computes the digamma function on ee.Image, ee.Number, and ee.Array values. |
| 2015-08-12 | erf() |  | Computes the error function on ee.Image, ee.Number, and ee.Array values. |
| 2015-08-12 | erfc() |  | Computes the complementary error function on ee.Image, ee.Number, and ee.Array values. |
| 2015-08-12 | erfcInv() |  | Computes the inverse complementary error function on ee.Image, ee.Number, and ee.Array values. |
| 2015-08-12 | erfInv() |  | Computes the inverse error function on ee.Image, ee.Number, and ee.Array values. |
| 2015-08-12 | gamma() |  | Computes the gamma function on ee.Image, ee.Number, and ee.Array values. |
| 2015-08-12 | trigamma() |  | Computes the trigamma function on ee.Image, ee.Number, and ee.Array values. |
| 2015-08-01 | ee.Image.hsvtorgb() | 2015-08-01 | Converts HSV imagery to RGB; deprecated on 2015-08-01. |
| 2015-08-01 | ee.Image.rgbtohsv() | 2015-08-01 | Converts RGB imagery to HSV; deprecated on 2015-08-01. |
| 2015-08-01 | Landsat TOA composites algorithm |  | Creates Landsat top-of-atmosphere composites. |
| 2014-08-01 | Collection.toList() |  | Returns the contents of a collection as a list. |
| 2014-06-20 | Projection.atScale |  | Returns a projection scaled to a specified meter resolution. |
| 2014-06-20 | Projection.crs |  | Returns the coordinate reference system for a projection. |
| 2014-06-20 | Projection.scale |  | Returns a projection scaled by the given x and y factors. |
| 2014-06-20 | Projection.transform |  | Returns the affine transform for a projection. |
| 2014-06-20 | Projection.translate |  | Returns a translated projection. |
| 2014-06-20 | Projection.wkt |  | Returns the projection in WKT format. |
| 2014-05-23 | Image.reduceRegions |  | Reduces image values over multiple regions. |
| 2014-05-01 | Dictionary.contains |  | Tests whether a dictionary contains a key. |
| 2014-05-01 | Dictionary.keys |  | Returns the keys in a dictionary. |
| 2014-05-01 | Dictionary.set |  | Sets a value in a dictionary by key. |
| 2014-05-01 | Dictionary.size |  | Returns the number of entries in a dictionary. |
| 2014-05-01 | Dictionary.values |  | Returns the values in a dictionary. |
| 2014-04-14 | Collection.flatten |  | Flattens a collection of collections into a single collection. |
| 2014-03-20 | Image.bitwiseAnd |  | Performs a bitwise AND operation on image pixels. |
| 2014-03-20 | Image.bitwiseNot |  | Performs a bitwise NOT operation on image pixels. |
| 2014-03-20 | Image.firstNonZero |  | Returns the first non-zero value in an image. |
| 2014-03-20 | Number cast aliases |  | Adds Number casting aliases that match the Image casting helpers. |
| 2013-10-19 | Function.bind | 2013-10-19 | Binds a function to a specific context; deprecated on 2013-10-19. |
| 2013-02-13 | Image.connectedPixelCount |  | Annotates pixels with the number of equal neighbors. |
| 2013-02-13 | LandsatTOA |  | Calculates Landsat top-of-atmosphere reflectance and brightness temperature. |
| 2013-01-31 | Image.normalized_difference | 2013-01-31 | Renamed to Image.normalizedDifference for computing normalized differences; deprecated on 2013-01-31. |
| 2013-01-31 | Image.reduceRegion |  | Applies a reducer to all pixels in a specified region. |
| 2013-01-31 | ImageCollection.qualityMosaic |  | ImageCollection.qualityMosaic composites an image collection using a quality band. |
| 2013-01-31 | LimitFeatureCollection | 2013-01-31 | Renamed to Collection.limit for limiting feature collections; deprecated on 2013-01-31. |
| 2013-01-31 | LonLat | 2013-01-31 | Renamed to Image.pixelLonLat for generating pixel longitude and latitude values; deprecated on 2013-01-31. |

Source file slug: `earth-engine-server.md`

