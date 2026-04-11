---
title: "Image Data Extraction \_|\_ Google Earth Engine \_|\_ Google for Developers"
url: https://developers.google.com/earth-engine/guides/data_extraction
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/earth-engine/guides
source_metadata:
  url: https://developers.google.com/earth-engine/guides/data_extraction
  title: "Image Data Extraction \_|\_ Google Earth Engine \_|\_ Google for Developers"
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
Image Data Extraction
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Export function handles image data export from Earth Engine to Google Drive, Cloud Storage, or Earth Engine assets, but manual methods using getPixels and computePixels can handle larger workloads and offer more control.
getPixels is used to extract image data directly from existing Earth Engine assets without prior computation on the pixels.
computePixels is used to extract image data from computed images, such as composites, allowing for an ee.Image object to be passed through the expression parameter.
For larger workflows requiring parallelization, using the Earth Engine high volume endpoint and leveraging multi-threading or frameworks like Apache Beam can help manage concurrent requests.
Getting image data from Earth Engine
To get image data from Earth Engine to Google Drive, Cloud Storage, or an Earth Engine asset,
you can use Export and the job
is handled entirely by Earth Engine. If your export jobs have scaling issues (e.g.
take longer than a day, return memory or timeout errors) or you're already familiar
with a framework like Apache Beam ,
Spark or Dask ,
you may prefer the data extraction methods described here. Workflows implemented in these
frameworks can be scaled using Google Cloud tools such as
Dataflow or
Dataproc .
Specifically, this guide describes methods for manually making requests
for image data using
getPixels or
computePixels .
Here, "image data" means multi-dimensional arrays of pixel values with consistent
scale and projection. The region, scale, projection and/or dimensions are specified
in the request. The
ImageFileFormat page lists
possible output formats. Output destinations include Cloud Storage or any locally mounted
directory. Manual requests add complexity, but can scale to larger workloads.
Getting image data from existing assets
Use getPixels
to get image data from existing Earth Engine assets. You
pass the asset ID directly to the request, so you can't do any computation on the pixels
prior to extracting them. A block of pixels in the specified region, scale, projection
and format is returned. The following example demonstrates getting time series of NDVI
from a MODIS image collection using getPixels .
Run in Google Colab
View source on GitHub
Getting image data from computed images
Use computePixels
to get image data from a computed image, for example a composite. With
computePixels ,
you pass a computed ee.Image object through the expression
parameter. A block of computed pixels in the specified region, scale, projection and
format is returned. The following example shows getting patches of multispectral data
from a cloud-free Sentinel-2 composite.
Run in Google Colab
View source on GitHub
Manual parallelization of requests
Though you can make requests for any purpose in any volume, you may want to parallelize
requests for larger workflows. To make many such requests in parallel, you should use
the Earth Engine high volume endpoint .
The number of parallel requests you can have is set by your
concurrent
interactive request quota . See the Earth
Engine high volume page for details on when to use the high volume endpoint.
Multi-threading
You can use threads to make concurrrent requests. This approach is demonstrated in the
getPixels and computePixels example notebooks.
Apache Beam
You can use Apache Beam pipelines to parallelize
requests. These pipelines can be run locally or as Google Dataflow jobs. For examples, see
this Geo for Good training or
this People, Planet and AI demonstration . Alternatively, other parallelization
libraries include Dask and
Apache Spark .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2023-08-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2023-08-10 UTC."],[],[]]
