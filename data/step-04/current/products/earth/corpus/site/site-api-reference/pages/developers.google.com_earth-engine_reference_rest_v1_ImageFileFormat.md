---
title: "ImageFileFormat \_|\_ Google Earth Engine \_|\_ Google for Developers"
url: https://developers.google.com/earth-engine/reference/rest/v1/ImageFileFormat
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/earth-engine/reference/rest
source_metadata:
  url: https://developers.google.com/earth-engine/reference/rest/v1/ImageFileFormat
  title: "ImageFileFormat \_|\_ Google Earth Engine \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Earth Engine is introducing noncommercial quota tiers to safeguard shared compute resources and ensure reliable performance for everyone. All noncommercial projects will need to select a quota tier by April 27, 2026 or will use the Community Tier by default. Tier quotas will take effect for all projects (regardless of tier selection date) on April 27, 2026 . Learn more.
Home
Products
Google Earth Engine
Reference
Send feedback
ImageFileFormat
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The content describes how to select an image file format to return a block of pixel data.
Supported image file formats include JPEG, PNG, AUTO_JPEG_PNG, NPY, GEO_TIFF, TF_RECORD_IMAGE, ZIPPED_GEO_TIFF, and ZIPPED_GEO_TIFF_PER_BAND.
JPEG, PNG, and AUTO_JPEG_PNG are intended for display purposes and only support 8-bit RGB data or data converted to 8-bit RGB.
Some formats like ZIPPED_GEO_TIFF and ZIPPED_GEO_TIFF_PER_BAND are only available when using CreateThumbnail.
Selects an image file format in which to return a block of pixel data.
Enums
IMAGE_FILE_FORMAT_UNSPECIFIED
Unspecified.
JPEG
JPEG. Intended for display purposes. Only supported for 8-bit RGB data, or data that is converted to 8-bit RGB via visualization parameters.
PNG
PNG. Intended for display purposes. Only supported for 8-bit RGB data, or data that is converted to 8-bit RGB via visualization parameters.
AUTO_JPEG_PNG
Automatically select JPEG or PNG depending on whether or not there is any transparency. Intended for display purposes. Only supported for 8-bit RGB data, or data that is converted to 8-bit RGB via visualization parameters.
NPY
NumPy .npy format.
GEO_TIFF
GeoTIFF format.
TF_RECORD_IMAGE
TFRecord format. Only supported for image exports.
ZIPPED_GEO_TIFF
A format which returns a GeoTIFF file wrapped in a zip file. This is only available when using CreateThumbnail.
ZIPPED_GEO_TIFF_PER_BAND
A format which returns a GeoTIFF file for each band, wrapped in a zip file. This is only available when using CreateThumbnail.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2024-06-05 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-06-05 UTC."],[],["The system defines image file formats for returning pixel data. Available formats include `JPEG`, `PNG`, `AUTO_JPEG_PNG` (automatic selection), `NPY` (NumPy), `GEO_TIFF`, `TF_RECORD_IMAGE`, `ZIPPED_GEO_TIFF`, and `ZIPPED_GEO_TIFF_PER_BAND`. JPEG, PNG, and automatic formats are for display, supporting 8-bit RGB data. `ZIPPED_GEO_TIFF` and `ZIPPED_GEO_TIFF_PER_BAND` are for thumbnails. TF_RECORD_IMAGE is for image exports. `IMAGE_FILE_FORMAT_UNSPECIFIED` indicates an undefined type.\n"]]
