---
title: "Before you begin \_|\_ Maps Datasets API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/datasets/prerequisites
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/datasets/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/datasets/prerequisites
  title: "Before you begin \_|\_ Maps Datasets API \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Google Maps Platform
Documentation
Maps Datasets API
Send feedback
Before you begin
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This document outlines prerequisites, best practices, and common errors for working with datasets in Google Cloud's Maps Datasets API.
Datasets support CSV, GeoJSON, and KML file formats with a maximum file size of 500 MB, and require unique display names within a Google Cloud project.
For optimal performance, it's recommended to simplify geometries, minimize feature properties, and use simple data types when preparing data for upload.
Common errors during data uploads can arise from issues with GeoJSON types, unsupported KML features, or missing or incorrect values in CSV files.
Refer to the documentation for detailed guidance on GeoJSON, KML, and CSV requirements, as well as best practices for visualizing data using datasets and BigQuery.
This document describes the prerequisites, best practices, and common errors
when working with datasets.
Prerequisites
When creating a dataset:
Display names must be unique within your Google Cloud project.
Display names must be less than 64 bytes (Because these characters are represented in UTF-8,
in some languages each character can be represented by multiple bytes).
Descriptions must be less than 1000 bytes.
When uploading data:
The supported file types are CSV, GeoJSON, and KML.
The maximum supported file size is 500 MB.
Attribute column names cannot begin with the string "?_".
Three-dimensional geometries are not supported. This includes the "Z" suffix in the WKT format,
and the altitude coordinate in the GeoJSON format.
Note: Depending on the size of the data file, the upload
can take minutes or even hours to complete. If there is an error with the upload, you will
get an error message. Don't attempt to delete the dataset until it has returned a response from
the upload operation.
Note: Map tiles created with data uploaded using the
Maps Datasets API may drop or simplify dense or complex data at low zoom levels. For example, when a
user zooms out to a state or country (for example, zoom level 5-12), the tiled data may look
different than when zoomed into a city or neighborhood (for example, zoom level 13-18). This happens
in order to keep tiles slim and performant using the tiles with a map renderer.
Tip: If your data file is large and has many attributes in
it that you don't need for styling, and you would like to optimize rendering performance, edit the
file to remove the unneeded attributes. Reducing the number of
attributes reduces the size of the map's tiles, thereby improving rendering performance.
Data preparation best practices
If your source data is complex or large, such as dense points, long linestrings or polygons
(often source file sizes larger than 50 MB fall into this category), consider simplifying your data
before uploading to achieve the best performance in a visual map.
Here are some best practices for preparing your data:
Minimize feature properties . Only keep feature properties needed to style
your map, for example "id" and "category". You can join additional properties to a feature in a client
application using data-driven styles on a unique identifier key. For example, see
See your data in real time with Data-driven styling .
Use simple data types for property objects where possible, such as integers,
to minimize tile size and improve map performance.
Simplify complex geometries prior to uploading a file. You can do this in a
geospatial tool of your choice, such as the open source
Mapshaper.org utility, or in BigQuery using
ST_Simplify
on complex polygon geometries.
Cluster very dense points prior to uploading a file. You can do this in a
geospatial tool of your choice, such as the open source
turf.js cluster functions , or in BigQuery
using ST_CLUSTERDBSCAN
on dense point geometries.
See additional guidance about datasets best practices in
Visualize your data with Datasets and BigQuery .
GeoJSON requirements
Maps Datasets API supports the current
GeoJSON specification .
Maps Datasets API also support GeoJSON files that contain any of the following object types:
Geometry objects . A geometry object is a spatial shape, described as a union
of points, lines, and polygons with optional holes.
Feature objects . A feature object contains a geometry plus additional
name/value pairs, whose meaning is application-specific.
Feature collections . A feature collection is a set of feature objects.
Maps Datasets API does not support GeoJSON files that have data in a coordinate reference system
(CRS) other than WGS84 .
For more information on GeoJSON, see
RFC 7946 compliant .
KML requirements
Maps Datasets API has the following requirements:
All URLs must be local (or relative) to the file itself.
Point, line, and polygon geometries supported.
All data attributes are considered strings.
The following KML features are not supported:
Icons or <styleUrl> defined outside of the file.
Network links, such as <NetworkLink>
Ground overlays, such as <GroundOverlay>
3D geometries or any altitude-related tags such as <altitudeMode>
Camera specifications such as <LookAt>
Styles defined inside the KML file.
CSV requirements
For CSV files, the supported column names are listed below in order of priority:
latitude , longitude
lat , long
x , y
wkt (Well-Known Text)
address , city , state , zip
address
A single column containing all address information, such as
1600 Amphitheatre Parkway Mountain View, CA 94043
For example, your file contains columns named x , y , and wkt .
Because x and y have a higher priority, as determined by the order of
supported column names in the list above, the values in the x and y columns
are used and the wkt column is ignored.
In addition:
Each column name must belong to a single column. That is, you cannot have a column named
xy that contains both x and y coordinate data. The x and y coordinates must be in
separate columns.
Column names are case-insensitive.
The order of the column names does not matter. For example, if your CSV file contains
lat and long columns, they can occur in any order.
Handle data upload errors
When uploading data to a dataset, you might experience one of the common errors described in this
section.
GeoJSON errors
Common GeoJSON errors include:
Missing type field, or the type is not a string. The uploaded
GeoJSON data file must contain a string field named type as part of each
Feature object and Geometry object definition.
KML errors
Common KML errors include:
The data file must not contain any of the unsupported KML features listed above, otherwise the
data import might fail.
CSV errors
Common CSV errors include:
Some rows are missing values for a geometry column. All rows in a CSV file must contain
non-empty values for the geometry columns. The geometry columns include:
latitude , longitude
lat , long
x , y
wkt
address , city , state , zip
address
A single column containing all address information, such as
1600 Amphitheatre Parkway Mountain View, CA 94043
Note: This error is often described by a message in the
form "Unable to convert ' ' to a double" or "Could not parse input to geography.: Geography
value is missing".
If x and y are your geometry columns, ensure that the units are
longitude and latitude. Some public datasets use different coordinate systems under the headers
x and y . If the wrong units are used, the dataset might import
successfully, but the rendered data can show the dataset points in unexpected locations.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
