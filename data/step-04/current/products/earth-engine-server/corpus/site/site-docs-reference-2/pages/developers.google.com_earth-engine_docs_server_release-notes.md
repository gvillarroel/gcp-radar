---
title: "Earth Engine server release notes \_|\_ Google Earth Engine \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/earth-engine/docs/server/release-notes
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/earth-engine/docs/server/release-notes
source_metadata:
  url: https://developers.google.com/earth-engine/docs/server/release-notes
  title: "Earth Engine server release notes \_|\_ Google Earth Engine \_|\_ Google\
    \ for Developers"
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
Earth Engine server release notes
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Google Earth Engine server release notes list new features, bug fixes, and performance improvements by date.
Users can subscribe to these release notes or browse and filter them in the Google Cloud console.
Recent notable changes include a backward-incompatible change for Google Drive scope requests, the ability to set daily EECU-time usage limits for cost control, and new features for interacting with BigQuery.
Subscribe
to these release notes.
This page is updated with each notable change to Earth Engine server. Specifically,
it lists releases by date and includes any new features, bug fixes, and significant
performance improvements. You can also browse and filter release notes for all
Google Cloud products in the Google Cloud console .
January 20, 2026
Announcement
Earth Engine is introducing
noncommercial quota tiers to
safeguard shared compute resources and ensure reliable performance for everyone.
All noncommercial projects will need to select a quota tier by April 27, 2026 or
will use the Community Tier by default. Tier quotas will take effect for all
projects (regardless of tier selection date) on April 27, 2026.
Learn more .
July 21, 2025
Breaking
BACKWARD INCOMPATIBLE The Google Drive main OAuth scope , https://www.googleapis.com/auth/drive has to be requested explicitly for Earth Engine requests that interact with Google Drive. Consider upgrading your client library to v1.5.12 or newer, which includes this scope in the default list of scopes to use for authorization.
July 10, 2025
Announcement
Added the ability to set a daily limit on EECU-time usage for a Cloud project to help control usage and costs. See Cost controls for more information.
June 27, 2025
Announcement
All noncommercial projects created before April 15, 2025 must verify noncommercial eligibility to maintain access to Earth Engine. Learn more if you need to take action in the Earth Engine Cloud Console .
April 09, 2025
Announcement
Announced
Earth Engine in BigQuery
and added
ST_REGIONSTATS() ,
a new BigQuery geography function that invokes Earth Engine to efficiently
read and analyze geospatial raster data within a geographic area of interest
using SQL. In addition, Earth Engine datasets in
Analytics Hub
now give you access to a growing collection of Earth Engine datasets
directly within BigQuery, simplifying data discovery and access. See
BigQuery release notes
and learn more here.
April 01, 2025
Feature
Added two new algorithms that allow reading data from BigQuery:
ee.FeatureCollection.loadBigQueryTable() and
ee.FeatureCollection.runBigQuery() . For more details see the
Read from BigQuery
documentation.
February 26, 2025
Feature
Ingestion/upload of GeoTIFFs now supports internal masks
GMF_PER_DATASET .
Only binary masks are currently supported. If an ImageManifest contains
explicit mask bands, those bands take precedence over any internal masks.
ImageManifest cannot contain no-data values and GeoTIFFs with internal
masks. GeoTIFFs that fail to meet these conditions will not be ingested and
an error will be returned.
December 16, 2024
Feature
Added new algorithm to find the bounding box of a collection: ee.FeatureCollection.bounds() . This should be a more performant alternative to the idiom featureCollection.geometry().bounds() .
November 08, 2024
Breaking
All Cloud Storage reads through the ee.Blob() and ee.Image.loadGeoTIFF()
algorithms must now meet the following criteria:
The bucket metadata must be accessible (check the storage.buckets.get
permission)
The bucket must be located in one of:
The US multi-region
A dual-region including US-CENTRAL1
The US-CENTRAL1 region
Any bucket used in the month of October 2024 not meeting the criteria
has been automatically allowed for future use.
September 03, 2024
Breaking
Fixed signed int8 for ingest and export. For
ingest, the system used to treat signed int8 as unsigned int8 with negative
values mapped to [128..255]. Those values are now correctly assigned their
negative value. For export, the system used to cast int8 to int16, while
correctly storing the negative values. Export will now write an int8 with
the correct values.
July 24, 2024
Fixed
Fixed a bug that caused GeoTIFF exports with cloudOptimized set to true to
fail if the output GeoTIFF was larger than 4gb. Earth Engine will now always
produce BigTIFF
regardless of the value of cloudOptimized .
July 10, 2024
Fixed
Fixed a bug that caused GeoTIFF exports to ignore skipEmptyTiles if
formatOptions.cloudOptimized was true.
June 07, 2024
Breaking
Changed the way that the ee.Image.loadGeoTIFF()
algorithm and COG-backed assets select lower resolution overviews if a
GeoTIFF is missing pyramid levels. Earth Engine will now resample to the
nearest higher-resolution overview instead of the closest overview
regardless of resolution. This does not affect GeoTIFFs that are not missing
intermediate pyramid levels.
May 10, 2024
Feature
Added support for overwrite parameter in
Export.table.toBigQuery()
method, which allows for control over overwriting data in already existing
destination table.
April 18, 2024
Feature
Added support for the Bray-Curtis distance metric ( braycurtis ) to
ee.Classifier.smileKNN() .
March 25, 2024
Change
Found and fixed a reprojection error which affected the correctness of some
Earth Engine results from Mar 7, 2024 to Mar 13, 2024. See the
announcement
for more details.
March 06, 2024
Feature
Added
priority
to Earth Engine Export batch tasks. This feature is currently only
available when using a Cloud project that is registered for paid Earth
Engine access.
Feature
Added Geometry.fromS2CellId() and Geometry.fromS2CellToken() for working
with S2 (http://s2geometry.io/) polygons.
January 18, 2024
Breaking
Changed the behavior of ee.data.listOperations
to return only tasks created in the currently
selected Cloud project ,
including those started by other users. For more details, visit the
developer announcement .
November 29, 2023
Fixed
Fixed a bug that prevented the download of large (more than 1000 elements)
collections.
Fixed
Fixed a bug that sometimes caused missing pixels in images that cross the
antimeridian (longitude 180°).
August 17, 2023
Breaking
Added support for multidimensional arrays in
Export.table.toBigQuery() . The BigQuery array format changed from
ARRAY<INT64|FLOAT64> to STRUCT<ARRAY<INT64>, ARRAY<INT64|FLOAT64>> ,
where the first parameter is dimensions and the second parameter is
values .
June 26, 2023
Feature
Added ee.Filter.area() .
May 15, 2023
Feature
Added support for the geostationary satellite projection (geos) for Cloud
Optimized GeoTIFFs ( ee.Image.loadGeoTIFF() and the CreateAsset pathway).
May 04, 2023
Change
Upgraded GDAL to
3.1.4 .
Affects import and export of GeoTIFFs including Cloud Optimized Geotiffs
(COGs).
April 14, 2023
Breaking
Changed server behavior for dealing with dots (.) in
workload tags .
Before, tags containing dots were removed from the request, now an error
will be thrown.
March 09, 2023
Change
Changed the default BIGTIFF parameter in the GeoTIFF image export
options from IF_SAFER to YES , which always generates a BigTiff
unless the BIGTIFF parameter is overridden in the formatOptions
dictionary parameter.
March 06, 2023
Change
Upgraded GDAL to
ab9e803
and libgeotiff to
a6fb3d3 .
Earth Engine uses GDAL to ingest assets and to export
Cloud Optimized GeoTIFF (COG) files.
November 17, 2022
Change
Updated ee.Image.cumulativeCost
to be able to handle multi-band cost images.
October 01, 2022
Change
For organizations with Google Workspace accounts, the organization
administrator was given control to enable or disable Earth Engine by
setting the Google Cloud on/off control. This control
can be set for the entire
organization or for specific workgroups. In August 2022, the
organization administrators were notified of this change via a
Mandatory Service Announcement (MSA), which included instructions for
allowing access to Earth Engine.
Who is my administrator?
August 17, 2022
Breaking
Fixed
ee.Image.sampleRectangle() to use current band names instead of any
original names.
June 27, 2022
Feature
Added Earth Engine as a Google Cloud product offering for commercial
customers. See details here .
June 22, 2022
Feature
Added the workload tag API ( ee.data.getWorkloadTag() and
ee.data.setWorkloadTag() ) to label computation and exports with a workload
tag, which is viewable from the Google Cloud Console.
March 31, 2022
Breaking
Removed legacy compatibility for enabling
computation profiling. If you are using the client library below version
v0.1.275 please upgrade to reenable profiling support.
January 06, 2022
Feature
Added ee.String.equals() .
November 24, 2021
Feature
Added ee.Geometry.coveringGrid , which returns a collection of 1x1
rectangles that cover a geometry in a specified projection. This is useful
to generate e.g. all export tiles that cover a region of interest, and is
far faster than building such a tiling with client-side for -loops.
Feature
Added ee.Algorithm.TemporalSegmentation.StructuralChangeBreakpoints ,
modelled after R's wtrucchange.breakpoints . This looks for breakpoints in
a time series of images, based on a linear+harmonic model of pixel values.
August 31, 2021
Feature
Added ee.Reducer.circularMean() , ee.Reducer.circularStdDev() , and
ee.Reducer.circularVariance() .
June 24, 2021
Feature
Added an outputMultiplier option to ee.Model.fromAiPlatformPredictor() .
May 19, 2021
Feature
Added ee.Filter.hasType() .
April 15, 2021
Feature
Added ee.List.unzip() .
March 25, 2021
Breaking
Required the update_mask or updateMask
parameters to be non-empty in ee.data.updateAsset() calls.
February 12, 2021
Change
Added ee.Number.signum() , ee.Image.signum() , and ee.Array.signum() .
Change
Added a "RAW_REGRESSION" output mode to the smileRandomForest classifier.
Fixed
Fixed a bug that could cause non-uniform sampling of points from small
(less than 300m) polygons.
January 19, 2021
Feature
Added ee.Classifier.smileGradientTreeBoost()
( see more ) from the Smile
library.
December 03, 2020
Change
Added a step option to ee.List.slice() .
Fixed
Fixed double-to-float precision loss in ee.Image.arrayReduce() .
November 19, 2020
Feature
Improved the reporting and handling of internal errors.
Added a (request: ...) ID string to "internal error" messages returned
by the Earth Engine API. These IDs uniquely identify errors for
debugging by the Earth Engine team. When reporting internal errors,
please include this value.
Added a "Report error" link to errors in the Code Editor, making it
easier to send feedback.
November 05, 2020
Change
The randomColumn and randomImage algorithms now take an optional
distribution argument, which may be "uniform" or "normal" .
Change
The loadGeoTIFF algorithm no longer rejects files with a
Header ghost area ,
such as those written by recent versions of GDAL.
September 11, 2020
Fixed
Added ee.Model.predictProperties() for making predictions over
FeatureCollections.
Eliminated one of the frequent causes of "Object too large" errors.
Fixed bug that sometimes caused failures when using ReduceResolution close
to projection singularities.
August 21, 2020
Feature
Added ee.Geometry.BBox() , which simplifies creation of rectangles of
latitude and longitude.
July 07, 2020
Fixed
Added ee.Algorithms.ObjectType() , which returns the type of any computed
object.
Fixed bug that could cause export of an all-zero image to fail.
Fixed bugs in ee.Date.update() when working with fractions of a second.
March 12, 2020
Feature
Added ee.Image.directionalDistanceTransform() , which calculates the
distance to non-zero pixels in a given direction.
January 30, 2020
Fixed
Fixed the explain() method of ee.Classifier.SmileRandomForest() to return
importance as a dictionary.
January 09, 2020
Feature
Added ee.Reducer.countRuns() , which computes the number of runs of
distinct, non-null inputs.
November 12, 2019
Breaking
Changed the output bands produced by
ee.Algorithms.TemporalSegmentation.Ccdc() . See the
announcement on the developers list
for details.
Feature
Added Cloud API support to the JavaScript client library, and turned on Cloud
API support by default for the Python client library. Developers with
registered service accounts will need to
enable the API .
November 07, 2019
Change
Added new versions of some classifiers:
ee.Classifier.smileCart() . This will eventually replace
ee.Classifier.cart() .
ee.Classifier.smileRandomForest() . This will eventually replace
ee.Classifier.randomForest() .
ee.Classifier.smileNaiveBayes() . This will eventually replace
ee.Classifier.naiveBayes() .
ee.Classifier.libsvm() . This will eventually replace
ee.Classifier.svm() .
September 13, 2019
Fixed
Added ee.Model.fromAiPlatformPredictor() , which returns an ee.Model from a
description of an AI Platform prediction model, and an
ee.Model.predictImage() algorithm, which makes predictions from pixel tiles
of an image. For more information, see the
Developer's Guide .
Added Image.sampleRectangle() algorithm, which extracts a rectangular region
of pixels from an image into a 2D array per band.
Added dotted and dashed line types to ee.FeatureCollection.style() .
Improved the performance of drawing complex polygons when zoomed in.
Fixed bug that sometimes caused Export.image.toAsset() to lose image
properties. Changed the behavior of ee.Image.reproject() to preserve image
properties.
September 05, 2019
Feature
Added ee.Filter.expression() to convert conditional and boolean string
expressions into filters and allow ee.Collection.filter() to take expression
strings.
August 09, 2019
Change
Allowed assignment (band naming) of ee.Image.expression() results with = .
For instance: ee.Image.expression('ndvi = (nir - red) / (nir + red)') .
June 13, 2019
Feature
Added ee.Array.argMax() .
April 03, 2019
Change
Increased the maximum size of an ee.Kernel from 255 pixels to 512.
March 29, 2019
Feature
Added ee.ImageCollection.getVideoThumbURL() .
March 21, 2019
Change
Removed the ee.Image.trainClassifier() and
ee.FeatureCollection.trainClassifier() functions that were deprecated in
September, 2016. Callers should be using ee.Classifier.train() instead.
March 15, 2019
Fixed
Fixed a regression that caused assets in polar projections to be displayed
incorrectly.
February 05, 2019
Fixed
Fixed Image.reduceRegions internal server error.
Fixed rare issue with not sampling from all portions of some complex polygons
in FeatureCollection.randomPoints and Image.sample .
January 10, 2019
Feature
Added ee.List.distinct() .
December 07, 2018
Feature
Added optional mapsApiKey parameter to Export.map.toCloudStorage() , to
allow callers to specify a Google Maps API key for the map viewer in those
exports.
November 29, 2018
Fixed
Operations that attempt to construct very complex geometries (more than 2M
edges) will now fail with a "Geometry has too many edges" error. Previously
they would sometimes succeed, sometimes fail with a "memory limit exceeded"
error, and sometimes cause an internal server error.
Fixed an error that sometimes caused ee.Image.resample() to fail to mask
invalid pixels in its output.
November 15, 2018
Feature
Added ee.Image.setDefaultProjection() and ee.Image.clipToBoundsAndScale() .
October 11, 2018
Fixed
Fix a formatting error in the "invalid asset ID" error message.
October 04, 2018
Fixed
Fixed a bug introduced in the 2018-09-28 update which could cause spurious
"User memory limit exceeded" errors, e.g. when computing large aggregations.
September 28, 2018
Fixed
Fixed an overly restrictive error check in
ee.Algorithms.Image.Segmentation.KMeans() .
September 14, 2018
Feature
Changed ee.Image.reduceToVectors() labels to be 64-bit integer values, to
fix an overflow bug.
Added geometries option to ee.Image.sample() , ee.Image.sampleRegions()
and ee.Image.stratifiedSample() , to produce per-feature geometries.
August 23, 2018
Feature
Added ee.List.filter() and ee.List.join() .
August 17, 2018
Change
Documented TFRecord and Shapefile as valid table export formats.
Standardized bit-masking throughout the "Cloud Masking" examples.
June 29, 2018
Fixed
Added optional uniqueLabels parameter to ee.Algorithms.Image.Segmentation algorithms, which forces clusters to have unique IDs.
Fixed type promotion bug in ee.Image.reduceConnectedComponents() which occurred when processing array images.
June 22, 2018
Feature
Fixed NaN handling in ee.Image.spectralDistance() algorithm.
Added ee.Image.selfMask algorithm to streamline the process of masking an image with its own values.
June 08, 2018
Feature
Added ee.Image.spectralGradient() , ee.Image.spectralMorphology() and ee.Image.spectralDistance() algorithms.
Added ee.Image.reduceConnectedComponents() algorithm.
Added ee.Image.Segmentation.KMeans() and ee.Image.Segmentation.GMeans() .
Added LandTrendr, EWMACD, VerDET and VCT temporal segmentation algorithms.
May 18, 2018
Feature
Added new superpixel segmentation algorithm ee.Algorithms.Image.Segmentation.SNIC() .
Added new filters ee.Filter.isContained() and ee.Filter.notNull() .
April 13, 2018
Fixed
Clarified skipEmptyTiles parameter default values for Map exports in
Python.
Fixed several small typographical errors.
March 01, 2018
Change
Fixed ee.Geometry.transform() to report the projection a geometry cannot be transformed into, instead of returning an internal error.
Fixed bug introduced last week where the default visualizations of many assets in the public catalog were ignored.
Removed ee.Algorithms.Landsat.surfaceReflectance() , which was deprecated some time ago. Please use the SR collections instead.
February 07, 2018
Change
Removed deprecated trainClassifier algorithms on images and feature
collections. Use Classifier.train() instead.
January 03, 2018
Change
Calling image.paint() on an image with no bands now has no effect (it used
to cause an internal server error).
December 20, 2017
Deprecated
Deprecated trainClassifier algorithms are no longer documented and will be removed completely in February 2018. Use Classifier.train instead.
October 26, 2017
Feature
Added last reducers ee.Reducer.last() and ee.Reducer.lastNonNull() which select the last element.
September 18, 2017
Feature
Added Image.blend() to do simple alpha blending between two images.
August 28, 2017
Change
Added new algorithm ee.Image.random() to generate random pixels between 0 and 1.
Added new algorithm ee.Image.stratifiedSample() to evenly sample each distinct
class value in the image.
Added new algorithm ee.FeatureCollection.style() , to provide more style options,
and better per-feature overriding,
Added tileScale parameter to Image.sample and Image.sampleRegions .
Changed Export.image to set the description on each band of the output
GeoTIFF to the name of the source band of the ee.Image object. Use gdalinfo to
view the descriptions.
Changed weighted reducers such as Sum or Mean to use fractional masking
for aggregations ( reduceRegion and reduceRegions ). The weight is now the
minimum of the raster mask and the fraction of the pixel covered by the reducer
geometry. The behavior of unweighted reducers has not changed.
Changed Image.clipToCollection to use partial masks for polygon edges,
matching what Image.clip has been doing.
Changed Image.clip to retain points and lines, matching what
Image.clipToCollection has been doing. Points are masked as the full pixel,
while lines have anti-aliased partial masks (like polygon edges).
July 06, 2017
Feature
Added ee.Classifier.gmoLinearRegression() , a regularizing linear regression classifier.
June 29, 2017
Fixed
Fixed a bug that caused most errors in batch tasks to be erroneously reported
as "Internal Server Error".
Fixed a bug that could cause server issues when operating on tables with many
(2M+) small rows (point geometries and only a modest number of columns).
June 12, 2017
Change
Updated ee.Algorithms.Landsat.simpleComposite() to work with Landsat Collection 1 image data.
Improved stability of table asset query system.
May 26, 2017
Feature
Added a nearest-neighbor interpolation mode to the ee.Image.displace()
algorithm. This is useful, for example, when displacing images representing
ordinal data like classifications, to avoid interpolation.
Added ee.Reducer.autoHistogram() with ee.Array output suitable for use
per-pixel.
Added new Image and Array algorithms matrixCholeskyDecomposition and
matrixSingularValueDecomposition .
May 17, 2017
Fixed
Fixed a bug that caused timeouts in queries involving ee.Image.displace() .
March 16, 2017
Change
Enable setting properties on image collection and folder assets.
January 11, 2017
Change
Landsat.calibratedRadiance() now uses Landsat-specific metadata instead of
google:calibration_bias and _gain per-band metadata. Output values may
have changed slightly due to float vs double precision differences.
December 19, 2016
Fixed
Added ee.Image.arrayCat() to easily concatenate two array images with the same number of dimensions.
Fixed issue using the pure GeoJSON ee.Geometry(string) constructor when given a
GeometryCollection. The elements may now have their own crs/geodesic/evenOdd
fields, so long as they all have the same values.
November 22, 2016
Feature
Added support for uploading images with mask band of types other than byte,
interpreting integer types in the range [0, maxint] and float types in the
range [0.0, 1.0] .
November 18, 2016
Fixed
Fixed ISE when Array.cat is given null input arrays.
November 03, 2016
Fixed
Fixed a bug that sometimes caused ee.Image.reduceResolution() to overestimate the number of input pixels per output pixel.
October 03, 2016
Change
Changed ee.ErrorMargin() to require the value parameter for finite error margins.
September 29, 2016
Fixed
Added ee.Reducer.fixedHistogram() , a reducer which computes a histogram using fixed bins and returns the histogram as an ee.Array with two columns.
Fixed miscellaneous Internal Server Error messages to surface more useful information.
September 22, 2016
Feature
Fixed several internal errors thrown by ee.List algorithms.
Fixed incorrect number comparisons in ee.List algorithms.
Fixed ee.Image.select() to throw an error if a new band name includes any forbidden characters.
Fixed ee.ImageCollection.toArray() errors with no-band image collections.
Added a helpful error message when ee.Collection.draw() is invoked with invalid point/line styles.
September 16, 2016
Fixed
Fixed a bug where large exports failed with a "Number of pixels requested exceeds the maximum allowed" error.
September 02, 2016
Fixed
Added ee.Dictionary.remove() .
Added ee.List.reduce() , an algorithm to reduce a list.
Added CSS color handling to ee.FeatureCollection.draw() .
Added ee.Clusterer for unsupervised clustering.
Added ee.ConfusionMatrix handling for values greater than 2^31.
Removed ee.Algorithms.TrainClassifier() and ee.Classifier.mahalanobis() classifier algorithms.
Fixed classification error triggered by having a class with no associated values.
August 24, 2016
Feature
Added ee.Image.medialAxis() and ee.Image.fastDistanceTransform() .
Added optional sum-to-one and non-negative constraints to ee.Image.unmix() .
August 03, 2016
Change
Added ee.Image.clipToCollection() to clip an image to a FeatureCollection ; ee.Image.clip() should now be used only to clip an image to a Feature or a Geometry .
Modified aggregations so they may now exclude empty pixels outside the footprint of the source image.
July 13, 2016
Feature
Fixed bad error messages when tessellation fails due to zero error-margin.
Fixed ee.FeatureCollection.randomPoints() to work with unusually small geometries.
Updated ee.Reducer.frequencyHistogram() and ee.Reducer.countDistinct() to ignore masked pixels.
Added ee.Reducer.firstNonNull() , a reducer that ignores null values and masked pixels.
July 01, 2016
Fixed
Updated error messages in many functions, making the output clearer and more actionable.
Changed ee.Number.format() to allow for type coercion for integer and floating point types.
Changed the toDrive() functions under Export to create the specified Drive folder if it doesn't exist, rather than throwing an error.
Changed ee.Image.where() to always retain the footprint and metadata of the input image.
Fixed Geometry.bounds() and Feature.bounds() to always return results in the requested projection.
Fixed a bug where ee.Reducer.group() truncated inputs to integers when used with ee.Collection.reduceColumns() .
June 13, 2016
Change
Added ee.Image.register() , ee.Image.displacement() , and ee.Image.displace() for registering images to one another and computing and applying displacements.
Add several correlation reducers: ee.Reducer.kendallsCorrelation() , ee.Reducer.pearsonsCorrelation() , ee.Reducer.spearmansCorrelation() , and ee.Reducer.sensSlope() .
Updated ee.String.match() to return a list of all matching groups when used without the global flag.
June 02, 2016
Feature
Added ee.Feature.setGeometry() for setting or overriding the geometry of an existing Feature.
May 26, 2016
Feature
Added ee.FeatureCollection.kriging() , a function which performs Kriging interpolation given a set of semivariogram parameters.
Added ee.Array.dotProduct() and ee.Image.arrayDotProduct() algorithms to compute the dot product between two 1-D arrays of equal length.
April 08, 2016
Feature
Added Image.reduceResolution , an algorithm to generate pixels in a (usually lower-resolution) output projection.
March 31, 2016
Change
Added FeatureCollection.inverseDistance() , to do inverse-distance weighted interpolation. See the interpolation documentation for further details.
Changed the correlation scores in the ee.Algorithms.CrossCorrelation algorithm to allow negative correlation coefficients. Now, the correlationCoeff output band has a range of [-1, 1], rather than [0, 1].
Changed the ee.Algorithms.CrossCorrelation algorithm to accept a value of 0 for the maxGap parameter, to allow for a direct computation of correlation scores between two images.
March 24, 2016
Fixed
Added new Image.cumulativeCost algorithm.
Added an ee.Blob class for accessing data blobs in Google Cloud Storage.
Added an ee.Classifier.decisionTree() algorithm for loading pre-existing decision trees as Classifier objects
Fixed singular value exceptions when computing the parameter stability test in Image.formaTrend() , to match behavior of original FORMA.
March 17, 2016
Feature
Added Image.arrayCat() to concatenate the pixels of two array images along a given array axis.
March 10, 2016
Feature
Added ee.Number.format() .
Added ee.String.toLowerCase() , ee.String.toUpperCase() , ee.String.trim() , and ee.String.compareTo() .
February 18, 2016
Feature
Added new correlation reducers: Kendall, Spearman, Pearsons and Sen's slope.
February 08, 2016
Change
Add a bitCount operator.
February 02, 2016
Feature
Added ee.Image.bitsToArrayImage() .
January 21, 2016
Change
Exports with a 'region' argument now accept geometry with any supported projection or geodesic state, instead of defaulting to planar WGS84.
Multi-file asset uploads that use "last band" masking mode should now work.
ee.Dictionary() can now be called with no arguments or with a list of alternating keys/values.
January 11, 2016
Change
Expanded Collection.remap() to allow mapping from strings to integers.
January 06, 2016
Change
Added ee.Image.pixelCoordinates() , a generalization of ee.Image.pixelLonLat() .
Added ee.Dictionary.fromLists() .
Added ee.Kernel.inverse() .
Added ability to specify random seed in ee.Classifier.randomForest() .
Added optimization parameter in ee.Image.reduceNeighborhood() , which enables faster computation at the cost of using more memory.
Improved performance of ee.Image.distance() and added skipMasked parameter.
December 10, 2015
Fixed
Reduced the memory requirements of the ee.Terrain.fillMinima algorithm.
Added ee.Kernel.rectangle() , for constructing constant-valued rectangular kernels.
Fixed bug in ee.Classifier.continuousNaiveBayes() and added explain() method.
December 02, 2015
Fixed
Added ee.Classifier.minimumDistance() .
Deprecated ee.Classifier.mahalanobis() .
Fixed Image.remap() to properly propagate the source image mask.
November 25, 2015
Feature
Added ee.Geometry.cutLines() and ee.Feature.cutLines() , to cut the linear parts along a series of parameter distances in the result projection.
Added ee.Image.bitsToArray() and ee.Number.bitsToArray() .
November 19, 2015
Fixed
Fixed a bug in ee.Reducer.stdDev() that caused it to return NaN instead of zero in some cases.
Fixed a bug in ee.Algorithms.If() that caused it to treat NaN as true in the condition.
November 13, 2015
Feature
Fixed several Internal Server Errors when transforming geometries or image boundaries to very different projections.
Fix Image.reduceRegion() support for images with no bands.
Added support for masked pixels in CrossCorrelation algorithm.
November 05, 2015
Fixed
Added bitwiseOr and bitwiseAnd reducers.
Fixed SampleImage dropping points for single band images. Additionally, this bug could have caused the generated properties to be incorrectly named "first".
October 29, 2015
Fixed
Added ee.Classifier.spectralRegion() , to test if the inputs lie within a specified 2D polygon.
Improved ingestion of non-standard projections.
Fixed incorrect weights in the implementation of the Roberts cross kernel.
Fixed several internal errors that could occur when working with geometries that touch the poles.
Fixed some spurious out-of-memory errors from ImageCollection.combine() , ImageCollection.merge() , FeatureCollection.merge() , and ee.Terrain algorithms.
October 22, 2015
Fixed
Improved the performance of negative geometry buffering.
Improved error reporting when invalid projections are supplied to image export.
Added Dictionary.select() , Dictionary.rename() and Dictionary.map() .
Fixed accidental creation of inside-out polygons at the poles in ee.Geometry.Polygon() , ee.Geometry.Rectangle() , and ee.Geometry.MultiPolygon() .
October 16, 2015
Feature
Added an ee.Image.date() algorithm that returns an Image's acquisition time as an ee.Date object.
October 08, 2015
Change
Updated Mahalanobis classifier to handle multiple classes.
October 02, 2015
Fixed
Fixed geometry repair issue in the presence of extremely small polygons.
September 24, 2015
Feature
Added Collection.size() algorithm.
Added Classifier.explain() to describe results from training a classifier. Currently only returns details for Cart.
September 10, 2015
Fixed
Changed the name of single-file image exports from "foo-0000000000-0000000000.tif" to "foo.tif" .
Fixed a bug in ee.Image.remap() in which masked data with a remapped value could be unmasked.
September 03, 2015
Fixed
Added GCS export support for videos and features.
Fixed Collection.classify() PROBABILITY output to match image results.
August 27, 2015
Change
Added support for human-readable color names in palettes. Now any CSS 3.0 color name can be used in a palette (e.g., ['red', 'aquamarine', 'maroon'] ).
Fixed internal server errors when filtering images by point geometries on the WGS84 antimeridian.
Converted an internal server error into a helpful message when using matrixSolve with unsolvable matrices.
August 19, 2015
Change
Add ContinuousNaiveBayes classifier.
Add ee.ConfusionMatrix.kappa()
Primary geometry of a feature is no longer considered a named property of the feature.
It cannot be retrieved with ee.Feature.get() ; use ee.Feature.geometry() instead.
It cannot be changed with ee.Feature.set() .
It's not included in the result of ee.Feature.propertyNames() and ee.Feature.toDictionary() .
To refer to the geometry in contexts like ee.Filter.intersects() , ee.Filter.equals() , and ee.FeatureCollection.getDownloadURL() , use a special value ".geo".
August 12, 2015
Feature
Added numeric functions erf() , erfc() , erfInv() , erfcInv() , gamma() , digamma() , trigamma() and cbrt() (each is defined on ee.Image , ee.Number , and ee.Array ).
August 07, 2015
Fixed
Fixed tile artifacts when using the countEvery reducer with FeatureCollection.reduceToImage .
Fixed TOA calculation for MSS bands on Landsat 4 and 5.
August 01, 2015
Deprecated
Added a new algorithm for Landsat TOA composites.
Deprecated ee.Image.hsvtorgb() and ee.Image.rgbtohsv() in favor of ee.Image.hsvToRgb() and ee.Image.rgbToHsv() .
July 23, 2015
Change
JSON/JSONP format responses from the API now indicate errors in the HTTP status code as well as the response body.
June 26, 2015
Feature
Updated ee.(Feature|Image).geometry() to ee.Element.geometry() .
Added dropNulls as a default to Image.sample.
June 19, 2015
Change
Added a set of new classification APIs. See ee.Classifier .
Added a ConfusionMatrix class, returned by ee.Classifier.confusionMatrix and ee.Collection.errorMatrix .
Fixed Classifier PROBABILITY mode for features to return floats.
Added more information to printed Kernel objects.
Removed deprecated algorithms: ClassifyImage , DrawVector , DropDuplicates , UnionFeatureCollection and FilterFeatureCollection .
Exporting complex images will sometimes be faster, and may succeed when it previously failed.
June 04, 2015
Change
Geometry constructors now handle computed coordinates. For example, ee.Geometry.Point(ee.Number(1).add(2), 3) , or ee.Geometry.Point([3,3], image.projection()) .
Image.mask(x) now sets the pixels that it unmasks to zero (or to the value closest to zero within the range of the pixel type of the input image).
Binary image operations (e.g. ee.Image.add ) now always match bands using their order (previously they matched them by name, falling back on matching by order only if not all names could be matched).
May 30, 2015
Change
Changed Image.arrayProject() to return null for empty input arrays, instead of throwing an error.
May 22, 2015
Fixed
Added robust 2D polygon repair, alleviating the need to manually fix geometries.
Updated the Landsat 8 brightness temperature constants used for TOA products.
Updated the default ordering of feature collections loaded from Fusion Tables to now be the same as in the Fusion Tables UI.
Fixed Internal System Error in getRegion() .
Fixed spurious memory errors when buffering geometries.
May 15, 2015
Change
Added morphological Window.mean() , and updated Window.median() to output doubles.
Filters other than Filter.eq now return false when the property is null or missing (instead of causing internal errors).
April 30, 2015
Fixed
Fixed internal server error when aggregating unbounded images.
Report an error when Array.project and Image.arrayProject are used to discard a length 0 axis.
Fixed Image.clip with geometry crossing the antimeridian.
April 10, 2015
Fixed
Fixed FeatureCollection.remap to drop non-numeric values.
Fixed Provider links in datasets to now display properly.
April 03, 2015
Fixed
Fixed ee.Reducer.frequencyHistogram() to work on non-string inputs.
Fixed a bug in classifiers when classifier_parameters=null.
March 26, 2015
Change
Added Collection.randomColumn() algorithm that adds a column of deterministic pseudorandom values to a Collection .
Added Image.sample() algorithm that returns a sample of the image pixels as a FeatureCollection .
Extended the Algorithms.Landsat.TOA() function to support the MSS instrument on board Landsat 1-3.
Added new algorithms for working with array shapes: Image.arrayLength() , and Image.arrayDimensions() .
Added Feature.propertyNames() to return the property names of a Feature .
Improved the error message returned when attempting to load images into a projection that doesn't exist everywhere the image does.
Fixed an issue with some Reducer.group() aggregations.
Fixed an issue with array masking and sorting along length 1 axes.
Fixed a bug in Image.arrayFlatten mask handling.
Removed "impurityMeasure" option from Rifle classifier. Previously, "Gini" and "Hellinger" modes were supported, but now only "Gini" is available.
March 06, 2015
Change
Fixed Reducer.countDistinct() to be compatible with Image.reduce() .
Modified Image.resample() to control resampling in all cases, not just when supersampling, using the nearest pyramid level.
Fusion Tables polygons will be repaired if invalid. If the repair process fails, we will now show an error instead of using invalid polygons.
February 28, 2015
Feature
Added ee.Reducer.countDistinct() .
February 20, 2015
Change
Add Image.resample() and bicubic interpolation.
February 10, 2015
Fixed
Added Reducer.robustLinearRegression() function to perform linear regression via iteratively-reweighted linear least squares.
Changed parameter 'crs' of Image.reproject() to accept a Projection , to more easily reproject an image to the projection of another.
Changed ImageCollection.getRegion() , Image.reduceToVectors() , Image.reduceRegion() , and Image.reduceRegions() to also accept a Projection , to provide more control over the projection to work in.
Fixed errors in LandTrendr algorithm.
Fixed rendering of some geodesic polygons (removed erroneous horizontal lines).
Fixed errors working with some polygons that cross the antimeridian.
February 05, 2015
Change
Improved error message returned when export to Google Drive fails due to insufficient space.
January 15, 2015
Fixed
Deprecated the "size" parameter to ee.Image.getThumbURL() in favor of "dimensions". If you have a script which provides a "size" argument to ee.Image.getThumbURL() , please switch to using "dimensions" instead.
Fixed an internal server error when exporting images that use Image.expression() .
Fixed Image.pixelArea() internal server errors when working in the WGS84 projection.
Fixed export of images with bandname_class_palette metadata.
Fixed a bug where setting multiple properties on an image would in rare cases ignore all but one property.
December 19, 2014
Fixed
Fixed the incorrect winding order of polygons generated by Image.reduceToVectors() .
Fixed a bug in Collection.distinct() which sometimes caused it to return duplicate elements.
Fixed a bug that caused FeatureCollection.reduceToImage() to refuse integer properties.
Fixed a bug that sometimes caused large image exports to fail.
November 24, 2014
Fixed
Fix internal server error when using Reducer.group() .
November 17, 2014
Change
Added new Geometry.dissolve() and Feature.dissolve() algorithms, to dissolve the interior boundaries between elements of a MultiGeometry .
Deprecated Image.stats() . Use Image.reduceRegion() instead.
Small bugfixes for Chart styling.
November 06, 2014
Fixed
Fixed Geometry.intersects() and Geometry.contains() incorrectly returning false for some geometries crossing the antimeridian.
October 29, 2014
Change
Updated Image.arraySlice() to support variable slice positions per pixel position.
October 24, 2014
Fixed
Added array support to Image.mask() .
Added Feature.select() and FeatureCollection.select() to select the properties of Features.
Added Reducer.group() to group elements by a specific input, reducing all the other inputs with a given reducer.
Fixed an internal server error that could occur in Reducer.covariance() .
October 14, 2014
Fixed
Added Google Maps Engine as a destination for batch export of vector data (via Export.table ).
Added support for ee.List objects within chart.setSeriesNames() .
Added dictionary.combine() , a function which combines two dictionaries.
Added support for parsing of WKT definitions with EXTENSION elements, by ignoring the EXTENSION when the projection has a known canonical definition.
Fixed a bug that, in rare cases, caused an "Internal Error" when using Reducer.first() .
Fixed support for CSV exports containing no geometry data.
September 30, 2014
Change
Reducer.covariance() renamed to Reducer.centeredCovariance() , for already mean-centered data.
Added Reducer.covariance() , a single-pass covariance algorithm that centers data not yet mean-centered.
Improved the error message generated when a Dictionary algorithm is given a key containing a space.
September 24, 2014
Change
Unbounded geometry, such as the union of complementary hemispheres, is now returned to the client as the WGS84 geodesic rectangle from -180,-90 to 180,90.
September 12, 2014
Change
Added a size restriction of 10e5 x 10e5 pixels to ee.Image.getThumbURL() .
Added support for scalable (meter-based) kernels to ee.Image.connectedComponents() .
Added Chart.image.series() , along with an example. This function plots derived values of each band in a region across multiple images.
Changed the Playground code-suggestion behavior to not insert a function's argument list unless the cursor is within the function call.
Fixed a bug in reductions that was caused image projections to be ignored.
Improved the reporting of certain types of memory-consumption errors.
September 05, 2014
Fixed
Added Feature.id() and Image.id() methods for accessing the ID of a given element within its collection.
Added Reducer.forEachElement() for distributing reducers over Array elements.
Fixed a bug in GeoJSON export. Now GeoJSON downloaded from Earth Engine is compatible with GDAL's ogr2ogr tool.
Fixed Filter.rangeContains() .
August 28, 2014
Fixed
Added Image.sample() , which creates a Collection containing pixels randomly sampled from an image.
Added Image.mosaic() support for array images, as long as no array is partially masked.
Added Image.visualize() support for viewing array images, by just displaying the first array element at each pixel, or 0 for empty array pixels.
Improved precision of operations on DOUBLE images and arrays.
Reductions now require a scale or crs_transform when a crs is specified.
Changed ImageCollection.getRegion() to no longer skip pixels where a subset of bands is masked. The masked pixel values are returned as nulls.
Fixed Image.unmix() and Image.mask() not working properly when used inside ImageCollection.map() .
Fixed Image.addBands() issue with renaming bands.
Fixed Image.arraySort() and Image.arraySlice() to handle empty matrices.
Fixed Image.arrayGet() Internal Server Error when attempting to use a double or float band as the position argument.
Fixed ee.FeatureCollection() to show a helpful error when a column contains arrays of different dimension.
Fixed Image.mask() when used to retrieve the mask of an array image.
Fixed an error that could occur when applying geometry filters on join results.
August 21, 2014
Change
Added Array() function to create an array from nested lists of numbers.
Added Array.toList() function to create a nested list of numbers from an array.
Extend Image.constant() to create images with array-valued pixels and to accept ee.List objects to produce multiple bands.
Added Image.toArray() function to concatenate pixels of image bands into an array per pixel.
Added ImageCollection.toArray() function to convert each pixel stack or time series to a single array per pixel.
Added ImageCollection.toArrayPerBand() function to convert the pixels of each band to an array per band per pixel.
Added Array.identity() , Image.arrayIdentity() , and Image.matrixIdentity() functions to create an identity matrix of the given size.
Added Feature.toArray() function to combine numeric feature properties into a 1D array.
Added FeatureCollection.makeArray() function to combine numeric feature properties into a 1D array for each feature in a FeatureCollection .
Added Image.arrayFlatten() function to convert an array back a regular scalar image by naming the array elements.
Added Reducer.covariance() function to compute the covariance of a collection or neighborhood as a 2D array.
Added Array.length() and Image.arrayLength() functions that return a 1D array of an array's lengths.
Added Array.get() and Image.arrayGet() functions that return a specific scalar array element.
Added Array.cat() function to concatenate a list of arrays along a given axis.
Added Array.cut() function to cut an array along one or more axes.
Added Array.sort() and Image.arraySort() functions that sort an array by the values of a given 'keys' array.
Added Array.slice() and Image.arraySlice() functions that slice out a subarray from regularly-spaced positions along one axis.
Added Array.mask() and Image.arrayMask() functions that eliminate array positions where a corresponding mask value is 0.
Added Array.transpose() and Image.arrayTranspose() functions to swap two array axes.
Added Array.reduce() and Image.arrayReduce() functions to apply a reducer to the elements of an array.
Added Array.accum() and Image.arrayAccum() functions to accumulate a reducer along a given array.
Added Array.project() and Image.arrayProject() functions to project an array into a lower dimension.
Added Array.repeat() and Image.arrayRepeat() functions to concatenate an array with itself a given number of times.
Added Array.matrixMultiply() and Image.matrixMultiply() functions to multiply two 2D arrays.
Added Array.matrixSolve() and Image.matrixSolve() functions to compute the 2D array X such that AX=B.
Added Array.matrixInverse() and Image.matrixInverse() functions to invert a 2D array.
Added Array.matrixPseudoInverse() and Image.matrixPseudoInverse() functions to compute the Moore-Penrose pseudoinverse.
Added Array.eigen() function to compute the eigenvectors and values of a 2D square array.
Added Array.matrixDeterminant() and Image.matrixDeterminant() functions to compute the determinant of a 2D array.
Added Array.matrixToDiag() and Image.matrixToDiag() functions to generate a square diagonal matrix from a 1D column.
Added Array.matrixDiagonal() and Image.matrixDiagonal() functions to extract the diagonal from a square 2D matrix.
Added Array.matrixFnorm() and Image.arrayFnorm() functions to compute the Frobenius norm of a matrix.
Added Array.matrixTrace() and Image.matrixTrace() functions to compute the trace of a matrix.
Modified Algorithms.if() function to avoid evaluating the unused branch.
August 14, 2014
Change
Added String.toNumber() .
Added Collection.iterate() and List.iterate() .
Added new classifier type: ContinuousNaiveBayes
Aggregations now return an error when trying to aggregate with the default WGS84 projection. This most commonly happens when aggregating a mosaic image. Specify a scale or crs plus crs_transform to avoid the error
Aggregations now use the image footprint (instead of the bounds of the first band of the image) when the aggregation region is not specified explicitly
Improved the error message returned when attempting to set properties with illegal names
August 08, 2014
Change
Updated LandsatTOA to use REFLECTANCE metadata directly when it is available, as is the case for Landsat 8.
Added Array Algorithms.
Added a robust least squares regression reducer to the API using iteratively reweighted least squares.
Add 'format' parameter to the ThumbnailServlet , to specify PNG/JPEG downloads.
August 01, 2014
Feature
Added Collection.toList() , returning the contents of a collection as a list.
July 25, 2014
Change
Improved error reporting for export tasks.
July 18, 2014
Change
Fixed an error thrown when visualizing empty ImageCollections.
Fixed Collection.union() returning partial results on large collections.
Fixed a filtering error that occurred when two intersecting time filters where applied on an ImageCollection .
Improved the performance of polygon rendering.
Improved the performance of large image collection reductions.
Improved the error message for invalid palettes passed to Image.visualize() .
June 30, 2014
Change
Changed file extension on streaming download to lower case (myDownload.CSV -> myDownload.csv).
GME assets and layers now have name, description and tags properties.
June 20, 2014
Feature
Added a few helper methods to Projection :
Projection.atScale(projection, meters)
Projection.crs(projection)
Projection.scale(projection, x, y)
Projection.transform(projection)
Projection.translate(projection, x, y)
Projection.wkt(projection)
June 06, 2014
Change
Added List.zip(other) function.
exportImage() can now create TERRAIN assets when exporting to Google Maps Engine. See gmeTerrain parameter.
Breaking
ee.Geometry.Polygon and ee.Geometry.Rectangle no longer fix polygon ordering for you, so when you use those functions, be sure to order the points such that the inside of the polygon or rectangle is on the left side of the given edges. This is only backward incompatible when you have a pre-existing script that specifies polygon vertices where the intended interior is on the right side of the given edges. This is easily tested by computing the centroid; if it is on the opposite side of the planet, reverse the order of your vertices.
May 29, 2014
Fixed
Added Geometry.coordinates() function.
Added Geometry.proj() function.
Added Geometry.edgesAreGeodesics() function.
Added Geometry.isUnbounded() function.
Added Geometry.geometries() function.
Improved error reporting for invalid Fusion Tables table ids.
Fixed a bug causing certain queries for feature IDs only from Fusion Tables to fail.
May 23, 2014
Feature
Fixed bug in Image.reduceRegions() .
Added more information to error messages in Collection.map() .
May 16, 2014
Change
Fixed addToMap 's handling of two band images.
Changed IsEqual to compare numbers by value, ignoring the type.
May 07, 2014
Fixed
Fixed pixel masking in ImageCollection.formaTrend() when there are no valid samples.
Fixed a bug that could cause sub-computations in Image.expression() calls to incorrectly return null.
May 01, 2014
Feature
Added new algorithms for Dictionary : set() , contains() , size() , keys() , values() .
April 24, 2014
Change
Added image collection casting utilities including Image.bandTypes() , Image.cast() and ImageCollection.cast() . Also made PixelType() idempotent and adds the following methods:
PixelType.uint8()
PixelType.uint16()
PixelType.uint32()
PixelType.int8()
PixelType.int16()
PixelType.int32()
PixelType.int64()
PixelType.float()
PixelType.double()
Made Image.paint() respect line width for LineStrings.
April 14, 2014
Feature
Added collection.flatten() to flatten collections of collections.
April 07, 2014
Change
Bugfixes for MapProjection .
Bugfixes for Image.geometry() .
Change
Add ee.List.map() , a method for mapping a function over the elements of ee.List objects.
Changed geometry encoding in FeatureCollection export to be more GeoJson compatible.
Bugfixes for MapProjection .
Bugfixes for Image.geometry() .
Breaking
Remove the old Join API, deprecated Dec 2013. Includes Collection.innerJoin , Collection.groupedJoin and JoinCollections .
April 01, 2014
Fixed
Fixed several minor errors around image geometry and property propagation.
March 28, 2014
Fixed
Added support for ImageCollections containing images with different band types. To use these in contexts that expect consistent band types (e.g. ImageCollection.mosaic() ), the image bands must be manually cast to the right type within a mapped function.
Added a rich set of methods to the List class.
Added a SelectorSet() constructor.
Fixed image bounding box calculations in Image.clip() and Image.mask() .
Fixed normalization of geometries loaded from Fusion Tables.
Fixed Image.mask() to ignore the masked pixels of an applied mask image.
March 20, 2014
Feature
Added new algorithm Image.bitwiseNot() .
Added camel-case aliases Image.firstNonZero() and bitwise operators ( Image.bitwiseAnd() ).
Added cast aliases on the primitive Number type (e.g. Number.toByte() ) to match those on Image .
March 14, 2014
Fixed
Launch the CSV Download servlet.
Added Image.bilinearSample
Make VisualizationImage a little nicer, accepting either a list or a single value for all visualization parameters.
Fix bug in BinaryMath where only the type of the left argument is considered.
March 10, 2014
Fixed
Fixed errors when applying number filters where some values are null.
Fixed specifying image 'dimensions' in ee.Image.getDownloadUrl() .
February 24, 2014
Fixed
Fixed bug in ee.FeatureCollection.getDownloadURL() breaking on some special characters.
Fixed bug that caused ee.Date.getFraction('year') to return (slightly) incorrect values between March and December of a leap year or the year before a leap year.
February 18, 2014
Change
Added Image.connectedComponents , which labels pixel clusters depending on connectedness defined by a kernel.
Added ee.Reducer.frequencyHistogram and ee.Reducer.first .
Added alpha band to Images exported to Google Maps Engine. The band is generated as the minimum of the masks of all bands of the Earth Engine image. The Earth Engine image must have exactly one or three bands when exporting to GME; other images will now cause the export to fail.
Improved performance of queries that include large numbers of mapped functions or Image.expression calls.
Breaking
Changed Image.focal_median - it now rounds averaged medians rather than truncating them.
February 13, 2014
Change
Added an Image.bandNames() function to return the bands of an image.
Added an Image.projection() function to return the projection of an image.
Added a Projection.nominalScale() function to return the nominal scale of a projection in meters.
In Image.connectedPixelCount() , set the upper limit of maxSize to 1024 pixels.
Correctly detect Fusion Tables with multiple columns of the same name.
February 06, 2014
Fixed
Fixed date filters failing on collections loaded from Fusion Tables.
Fixed ee.Join failing when only a subset of fields from the result is requested.
Fixed ImageCollection geometry filtering failing when given a degenerate (point-sized) rectangle.
January 29, 2014
Fixed
Fixed range filters on Fusion Tables collections.
January 22, 2014
Change
Add Image.reduceRegions() , which augments each feature in a collection with the result of applying a reducer over the area of that feature.
January 09, 2014
Fixed
Updated min and max reducers to support ordered non-numeric types, such as strings.
Deprecated Image.get() and Feature.get() in favor of Element.get() .
Added a maxError parameter to Geometry.convexHull() and Feature.convexHull() to control the error tolerance when computing a convex hull in a particular projection.
Empty DateRange objects (end <= start) now preserve their start and end times.
Fixed handling of some edge cases in Geometry.convexHull() and Feature.convexHull() .
December 20, 2013
Fixed
Added a new ee.Join API to replace the now-deprecated Collection.innerJoin() and Collection.groupedJoin() .
Re-enabled the Landsat.surfaceReflectance() algorithm.
Re-enabled the L5_L1T_SR and L7_L1T_SR collections.
Deprecated Image.set() and Feature.set() in favor of Element.set() . This change should only be relevant for users of ee.call() and ee.apply() .
Changed LedapsSurfaceReflectance to work on single images instead of collections.
Fixed Image.convolve() for use in map() .
October 29, 2013
Change
Improved performance of certain ImageCollection queries.
Changed pixel type descriptions to be simpler for common cases.
Removed support for the deprecated v1 JSON API.
October 24, 2013
Change
Added a "units" argument to most ee.Kernel constructor methods that allows specifying kernels in meters.
Changed Collection.map() to allow dropping elements by returning null.
Removed the 5000 image limit when enumerating image collections, although overall performance is largely unchanged.
October 19, 2013
Deprecated
Added schema description to the result of FeatureCollection.getInfo() .
Added DocID and table name to the properties of FeatureCollection loaded from Fusion Tables.
Deprecated Function.bind() . Binding should now always be done on the client side.
October 14, 2013
Fixed
Added Image.randomVisualizer() .
Changed Collection.map() to run mapped functions in parallel.
Changed Collection.map() to no longer take dynamicArgs, constantArgs, and destination arguments.
Changed Collection.limit() to allow a 0 limit. Useful to query for the collection metadata without fetching any objects.
Removed support for ClientLogin authentication (previously deprecated).
Fixed Image.glcmTexture() to stop returning NaN for homogeneous regions.
Fixed error messages when API calls receive null images.
October 02, 2013
Fixed
Added a tileScale parameter to Image.reduceRegion() .
Improved the error messages produced by Image.metadata() .
Fixed a bug which could cause an "incompatible type" error when two Collection.map() calls with different input types appeared in the query.
Fixed a bug that could cause aggregation results to be lost, resulting in failed downloads or map tiles.
Fixed a bug that caused ImageCollection.getRegion() to fail on large collections.
September 30, 2013
Fixed
Changed the asset loading policy to prevent loading assets using non-constant strings.
Improved performance of requests containing deeply-nested queries.
Fixed an internal error encountered when mapped functions reached a certain size.
Fixed an error when a streaming download was attempted with format set to "jpeg".
Fixed an error that could make rerunning a timed out aggregation to start from scratch rather than pick up where the last attempt stopped.
Fixed FMask.matchClouds() to propagate the input footprint.
September 19, 2013
Change
Increased the maximum tile zoom level from 20 to 21.
Changed Image.trainClassifier() to explicitly disallow unscaled WGS84 images and improved the resulting error message.
Changed Image.clip() to preserve input metadata.
September 13, 2013
Fixed
Updated algorithm naming to be more consistent:
Renamed a number of algorithms. The old names are deprecated.
LandsatPathRowLimit() -> Landsat.pathRowLimit()
LandsatTOA() -> Landsat.TOA()
LANDSAT/CalibratedRadiance() -> Landsat.calibratedRadiance()
LedapsSurfaceReflectance() -> Landsat.surfaceReflectance()
SimpleLandsatCloudScore() -> Landsat.simpleCloudScore()
TranslateLandsatMetadata() -> Landsat.translateMetadata()
SimpleLandsatComposite() -> Landsat.simpleComposite()
ReduceToVectors() -> Image.reduceToVectors()
ClassifyImage() -> Image.classify()
TrainClassifier() -> Image.trainClassifier()
Filter.equals() -> Filter.eq()
Filter.notEquals() -> Filter.neq()
Filter.lessThan() -> Filter.lt()
Filter.lessThanOrEquals() -> Filter.lte()
Filter.greaterThan() -> Filter.gt()
Filter.greaterThanOrEquals() -> Filter.gte()
Filter.listContains() -> Filter.inList()
Math.\<any method>() -> Number.\<same method>()
Removed a number of old deprecated algorithm aiases.
LANDSAT/LandsatTOA() . Use Landsat.TOA() .
Reproject() . Use Image.reproject() instead.
SimpleMosaic() . Use ImageCollection.mosaic() instead.
QualityBandMosaic() . Use ImageCollection.qualityMosaic() instead.
SelectBands() . Use Image.select() instead.
ExtractGeometry() . Use Collection.geometry() instead.
Filter.arrayContains() . Use Filter.inList() instead.
Deprecated a number of algorithm aliases.
ProjectionTransform() . Use Feature.transform() instead.
DropDuplicates() . Use Collection.distinct() instead.
MapAlgorithm() . Use Collection.map() instead.
JoinCollections() . Use Collection.join() instead.
UnionFeatureCollection() . Use Collection.union() instead.
DrawVector() . Use Collection.draw() instead.
Constant() . Use Image.constant() instead.
Added FeatureCollection.classify() .
Added a tileSize argument to Image.reduceToVectors() .
Changed Image.mask() to preserve the input's metadata.
Improved performance of Image.glcmTexture() .
Fixed incorrect handling of polygons that cross the anti-meridian.
September 06, 2013
Fixed
Improved performance of queries that involve a large number of small image operations.
Fixed incorrect point limit calculation in ImageCollection.getRegion() .
August 30, 2013
Change
Added Image.geometry() , which returns the image's footprint.
Added Image.get() and Image.set() to get and set image metadata, respectively.
Added If() , which allows expression lazy conditionals.
Added IsEqual() , which compares two objects.
Added a number of string manipulation methods:
String() , which casts a number to a string.
String.cat() , which concatenates two strings.
String.index() and String.rindex() , which search within a string.
String.length() , which calculates string length.
String.match() , which matches a regex against a string.
String.replace() , which replaces substrings hat match a regex.
String.slice() , which returns a specified substrings.
String.split() , which splits a string by a regex.
Removed the deprecated Feature.setProperty() alias of Feature.set() .
August 21, 2013
Fixed
Added support for arbitrary geometry in the training region for Image.trainClassifier() .
Improved error messages shown when null arguments are passed to certain methods.
Improved error message about queries that require processing too many images.
Fixed a bug that could cause filters to be ignored in certain mapped collections.
August 15, 2013
Change
Fixed handling of Landsat 5 metadata in ee.Algorithms.SimpleLandsatCloudScore() and ee.Algorithms.SimpleLandsatComposite() .
Fixed a bug in geometry tessellation near projection singularities (e.g. poles).
Removed support for defining ImageCollections using the "creator" field in the deprecated JSON API.
August 07, 2013
Fixed
Added Collection.first() , which returns the first element of a collection.
Changed the thumbnail endpoint to flip the Y axis of the default WGS84 projection.
Fixed an error message for unrecognized parameters being passed to certain methods.
July 31, 2013
Fixed
Added support for hex (0x12AB) and binary (0b0110) literals in Image.expression() .
Changed the image division operator to always use float rather than integer division.
Removed the "system:index" property from GeoJSON Features.
Removed auto-tessellation of geodesic GeoJSON geometries on output.
Deprecated ExtractGeometry() . Use Collection.geometry() instead.
Fixed ImageCollection filtering on non-system properties.
July 24, 2013
Change
Fixed geometry corruption for 3-point Fusion Table polygons.
Fixed severe performance issue when filtering the results of mapping Feature.get() .
Improved the performance of Image.pixelArea() .
Improved documentation for Collection.groupedJoin() .
Improved error message for Collection.filter() .
Changed Collection.aggregate() methods to skip missing property values.
July 18, 2013
Fixed
Fixed an error that would cause classified image downloads to occasionally fail.
Fixed an error when trying to download images with an alpha channel in JPEG format.
Fixed incorrect handling of disjoint multi-polygon intersection.
Fixed a small precision bug in polyline distance calculations.
Fixed ID propagation when merging collections.
July 11, 2013
Fixed
Fixed the type name of Reducers.
Fixed ReduceToVectors() dropping all but the last polygon in multi-polygon vectors.
Fixed an error message in ReduceToVectors() when non-integer labels are supplied.
Fixed an error in Image.pixelArea() at low zoom levels.
July 03, 2013
Change
Removed the system:link field from assets.
June 26, 2013
Fixed
Added Dictionary.get() and List.get() to get elements of dictionaries and lists.
Added an "id" attribute for GeoJSON Features fetched from collections.
Fixed dropping of empty "properties" attribute in GeoJSON Feature output.
Fixed an internal server error caused by training data containing NaNs.
June 24, 2013
Fixed
Added support for Landsat 8 images to LandsatTOA() .
Added Image.copyProperties() , which copies the properties of one image to another.
Added FeatureCollection.trainClassifier() which allows training a classifier with features from a collection.
Renamed TrainClassifier() to Image.trainClassifier() . The old name is deprecated.
Fixed parsing of negative numbers in non-Image method arguments within Image.expression() strings.
June 05, 2013
Change
The main geometry property in a Feature now has a property name.
May 31, 2013
Change
Added method name annotations to error messages.
Change
Improved an error message in binary band math operators.
May 22, 2013
Fixed
Removed the deprecated LimitFeatureCollection() alias for Collection.limit() .
Added Math.*() methods to operate on primitives (e.g. in mapped functions). WARNING: These are likely to be renamed in an upcoming push.
Added ReduceToVectors() , which runs a reducer across all homogeneous regions in an image.
Fixed an internal error in Image.reduceBands() when passed an image with zero bands.
Fixed the behavior of Collection.limit() where if the result was drawn, the limit would apply on each tile separately.
Fixed usage of Feature.get() inside mapped functions.
May 15, 2013
Breaking
Removed the deprecated Feature.setProperties() method. Use Feature.set() instead.
Added Feature.get() .
Added FeatureCollection.randomPoints() .
Added world files to image downloads.
Renamed Constant() to Image.constant() . The old name is deprecated.
Improved performance of queries that include multiple asset lookups.
Fixed an Image.distance() regression.
Fixed an error message when enumerating image collection queries that return over 5000 items.
Fixed an internal server error when querying large Fusion Tables with no limit.
May 02, 2013
Change
Renamed Filter.arrayContains() to Filter.listContains() . The old name is deprecated.
Fixed clamping of Landsat EVI images.
Fixed an Image.distance() regression.
Fixed minor reprojection precision errors that happened during image collection compositing.
Breaking
Removed old deprecated algorithms: Image.combineBands() , CombineBands() , Image.normalized_difference() , CombineCollectionBands() , LonLat() , SetProperties() and Feature.update() .
April 25, 2013
Fixed
Changed OAuth2 authentication to no longer require an extra scope to access Google Maps Engine assets.
Improved performance of date/time filtering.
Improved performance of large queries whose call tree has a large number of shared subtrees.
Fixed Image.expression() calls sometimes failing within a Collection.map() call.
Fixed several mistakes in the return types of API functions.
April 17, 2013
Fixed
Changed unary image operations to pass through the metadata of the input to the output.
Changed OAuth2 token verification to no longer require the Earth Builder scope to access Google Maps Engine assets.
Fixed behavior of Image.glcmTexture() inside mapped functions.
Fixed error messages when calling user-defined Earth Engine functions with invalid arguments.
Fixed grouped joins involving ImageCollections.
April 10, 2013
Fixed
Fixed handling of differently formatted SPACECRAFT_IDs in LandsatTOA .
Fixed projection failures that happened near the edges of the MODIS Sinusoidal projection.
Fixed an internal server error when filtering image collections by nonexistent IDs.
Fixed handling of null regions in Image.reduceRegion() .
April 06, 2013
Fixed
Improved error messages that mention image and band types.
Breaking
Changed thumbnail sizing behavior when only a single size is specified: now it is used as a max size.
Fixed
Fixed ImageCollection.reduce() behavior when a zero-band image is passed in.
Breaking
Changed LandsatTOA() band order to be the same as the regular Landsat images.
March 28, 2013
Fixed
Added Collection.reduceToImage() , an algorithm for reducing a set of Features that intersect each pixel.
Added Geometry methods that mirror the existing Feature methods.
Fixed several corner cases when handling near-global images.
Fixed the error message shown when a Fusion Table can't be found.
Fixed treatment of numeric results returned from function calls in Image.expression() .
March 25, 2013
Fixed
Added Image.parseExpression() , a method similar to Image.expression() which returns a custom function. Most users should not need to use this directly.
Fixed the usage of Image.expression() inside mapped functions.
Fixed regression in decoding of a deprecated way to encode filtered ImageCollections (via start_time and end_time properties).
Fixed LandsatTOA to accept ETM+ scenes whose SENSOR_ID is simply "ETM", such as LE72332482008177ASN00.
Fixed error message formatting when user input includes nulls.
March 14, 2013
Fixed
Added a static Image.load(id, version) method, which is equivalent to ee.Image(id) .
Added a static ImageCollection.load(id, version) method, which is equivalent to ee.ImageCollection(id) .
Added a static ImageCollection.fromImages(images) method, which is equivalent to ee.ImageCollection(images) .
Changed Feature() to allow null metadata, interpreted as an empty dictionary.
Changed PixelType() to allow half-open ranges.
Changed MapProjection() to no longer have a wkt parameter. The crs parameter now allows both CRS ID codes and WKT strings.
Changed Image.stats() to allow calculations in the image's native projection and increased the maximum number of samples to 100 million.
Changed LandsatTOA() to handle L4 images as well as TM, ETM and ETM+ SENSOR_IDs.
Changed LandsatTOA() L5 coefficients from:
Chander, Gyanesh, Brian L. Markham, and Dennis L. Helder. "Summary of current radiometric calibration coefficients for Landsat MSS, TM, ETM+, and EO-1 ALI sensors." Remote sensing of environment 113.5 (2009): 893-903.
Removed support for specifying classifications using custom JSON. The TrainClassifier() and ClassifyImage() methods provide equivalent features.
Fixed error messages of methods that take Lists/Dictionaries of images when non-Image arguments are passed to them.
Fixed Collection.loadTable() .
March 05, 2013
Fixed
Fixed Filter.calendarRange() .
February 20, 2013
Fixed
Fixed support of band names containing colons.
Change
Raised request size limit from 256KB to 4MB.
Fixed support of band names containing colons.support of band names containing colons.
February 13, 2013
Change
Fixed an Internal Server Error being thrown when a 3D CRS is passed to Earth Engine.
Fixed
Improved performance of operations that refer to the same FeatureCollection multiple times.
Fixed
Fixed statistical Reducers failing on floating point images.
Change
Changed the HTTP error code on requests that exceed the user's quota from 503 to 403.
Feature
Added Image.connectedPixelCount() , which annotates pixels with the number of equal neighbors.
Feature
Added LandsatTOA() , which is used to calculate Landsat top-of-atmosphere reflectance and brightness temperature.
February 06, 2013
Change
Removed the undocumented WrappedFeatureCollection function.
Change
Renamed SetProperties() to Feature.setProperties() . The old name is deprecated.
January 31, 2013
Deprecated
Renamed LonLat() to Image.pixelLonLat() . The old name is deprecated.
Feature
Added ImageCollection.qualityMosaic() to composite a collection using a quality band.
Feature
Added Image.reduceRegion() which applies a reducer to all the pixels in a specific region. See the Unbound section in the playground Docs tab for examples of reducers (e.g., Reducer.sum() , Reducer.mean() ).
Deprecated
Deprecated Image.normalized_difference() . Use Image.normalizedDifference() with Image.addBands() instead.
Deprecated
Renamed LimitFeatureCollection() to Collection.limit() . The old name is deprecated.
Fixed
Fixed the performance of queries referencing a Fusion Table multiple times.
January 24, 2013
Fixed
Fixed Collection.filter() to no longer cause an Internal Server Error. It is now preferred over FilterFeatureCollection() .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-10 UTC."],[],["Earth Engine updates include new features and bug fixes across various functionalities. Key actions involve adding `ee.FeatureCollection.bounds()` for bounding box calculations and `braycurtis` metric in `ee.Classifier.smileKNN()`. Restrictions were implemented for Cloud Storage access with `ee.Blob()` and `ee.Image.loadGeoTIFF()`. Several GeoTIFF handling enhancements were introduced, such as automatic BigTIFF format for large files, fixed handling of int8, and overview selection improvements. `Export.table.toBigQuery()` received `overwrite` support and multidimensional array capacity. Numerous algorithm enhancements and bug fixes across images, reducers, classifiers, filters, and exports were also made.\n"]]
