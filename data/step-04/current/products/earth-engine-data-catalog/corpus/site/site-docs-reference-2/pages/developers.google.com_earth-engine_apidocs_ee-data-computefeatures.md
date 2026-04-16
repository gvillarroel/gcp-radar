---
title: "ee.data.computeFeatures (Python only) \_|\_ Google Earth Engine \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/earth-engine/apidocs/ee-data-computefeatures
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/earth-engine/apidocs/ee-data-computefeatures
source_metadata:
  url: https://developers.google.com/earth-engine/apidocs/ee-data-computefeatures
  title: "ee.data.computeFeatures (Python only) \_|\_ Google Earth Engine \_|\_ Google\
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
ee.data.computeFeatures (Python only)
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The ee.data.computeFeatures function computes a list of features by applying a computation to features.
It returns a list of GeoJSON features reprojected to EPSG:4326 with planar edges.
The function takes an object of parameters which can include expression , pageSize , fileFormat , pageToken , and workloadTag .
Supported output formats for tabular data include PANDAS_DATAFRAME and GEOPANDAS_GEODATAFRAME .
Computes a list of features by applying a computation to features.
Returns:
A list of GeoJSON features reprojected to EPSG:4326 with planar edges.
Usage Returns
ee.data.computeFeatures(params) List
Argument Type Details
params Object An object containing parameters with the following possible values:
expression - The expression to compute.
pageSize - The maximum number of results per page. The server may return
fewer images than requested. If unspecified, the page size
default is 1000 results per page.
fileFormat - If present, specifies an output format for the
tabular data. The function makes a network request for each page until
the entire table has been fetched. The number of fetches depends on the
number of rows in the table and pageSize .
pageToken is ignored. Supported formats are:
PANDAS_DATAFRAME for a Pandas DataFrame and
GEOPANDAS_GEODATAFRAME for a GeoPandas GeoDataFrame.
pageToken - A token identifying a page of results the server should
return.
workloadTag - User supplied tag to track this computation.
Examples
Python setup
See the
Python Environment page for information on the Python API and using
geemap for interactive development.
import ee
import geemap.core as geemap
Colab (Python)
# Region of interest.
pt = ee . Geometry . Point ([ - 122.0679107870136 , 36.983302098145906 ])
# Imagery of interest.
images = ( ee . ImageCollection ( 'LANDSAT/LC08/C02/T1_L2' )
. filterBounds ( pt ) . filterDate ( '2021-01-01' , '2021-12-31' ))
def point_overlay ( image ):
"""Extracts image band values for pixel-point intersection."""
return ee . Feature ( pt , image . reduceRegion ( 'first' , pt , 30 ))
# Convert an ImageCollection to a FeatureCollection.
features = images . map ( point_overlay )
features_dict = ee . data . computeFeatures ({ 'expression' : features })
display ( features_dict )
# Do something with the features...
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2024-06-03 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-06-03 UTC."],[],["The `ee.data.computeFeatures` function computes and returns a list of GeoJSON features, reprojected to EPSG:4326. It applies a user-defined computation (specified in the `expression` parameter) to features. Key parameters include `pageSize` for controlling results per page, `fileFormat` for specifying tabular output formats like Pandas or GeoPandas DataFrames, `pageToken` for paginated results, and `workloadTag` for computation tracking. The provided example demonstrates extracting band values from an `ImageCollection` using a point's intersection.\n"]]
