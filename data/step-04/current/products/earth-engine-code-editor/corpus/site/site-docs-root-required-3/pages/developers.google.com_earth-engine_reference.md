---
title: "Overview \_|\_ Google Earth Engine \_|\_ Google for Developers"
url: https://developers.google.com/earth-engine/reference
knowledge_key: corpus
source_id: site-docs-root-required-3
source_type: site
entrypoint: https://developers.google.com/earth-engine
source_metadata:
  url: https://developers.google.com/earth-engine/reference
  title: "Overview \_|\_ Google Earth Engine \_|\_ Google for Developers"
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
Overview
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Earth Engine REST API provides access to a large catalog of geospatial data for analysis in Google Cloud Platform.
The API allows filtering and fetching pixel data from various datasets including satellite, geophysical, weather, climate, and demographic information.
There are quotas and limits on the size and dimensions of individual requests for pixel data.
While the API itself doesn't require attribution, individual datasets may have specific attribution requirements from their owners.
Introduction
This REST API allows you to access Earth Engine's multi-petabyte Public Data Catalog from analysis jobs running in Google Cloud Platform.
The Earth Engine Public Data Catalog includes a range of geospatial data, including satellite data like Landsat, Sentinel-2, and MODIS, as well as geophysical, weather, climate and demographic data. You can use this API to filter these data collections to identify the data you need for your analysis, and then to fetch the pixels you need from any of these datasets on demand. To get started, you can search for and view documentation about specific datasets .
Audience
The REST API contains new and advanced features that may not be suitable for all users. If you are new to Earth Engine, please get started with the JavaScript guide .
Quota and Limits
You can see your quota usage in the Cloud Console .
Individual requests for pixel data are also limited to 16MB in uncompressed data per request, computed as the product of the request dimensions in pixels, the number of image bands requested, and the number of bytes per pixel for each band. Requests are also limited to at most 10000 pixels in either dimension and at most 100 bands.
Attribution Requirements
You are not required to attribute your use of the Earth Engine API in your application. However, individual datasets may be subject to attribution requirements from the dataset owner. See each dataset's documentation page for details. It is recommended to include legal notices as an independent menu item or as part of an "About" menu item.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2024-06-05 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-06-05 UTC."],[],["The REST API enables access to Earth Engine's Public Data Catalog, a vast collection of geospatial data like satellite imagery (Landsat, Sentinel-2, MODIS), geophysical, weather, climate, and demographic data. Users can filter datasets to find needed information and fetch specific pixels. Pixel data requests are limited to 16MB uncompressed, 10,000 pixels per dimension, and 100 bands. While API attribution is not required, individual datasets might necessitate attribution to their owners. Quota usage can be monitored in the Cloud Console.\n"]]
