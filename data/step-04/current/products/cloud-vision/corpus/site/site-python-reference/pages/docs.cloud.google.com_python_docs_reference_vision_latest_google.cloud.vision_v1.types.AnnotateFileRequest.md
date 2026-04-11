---
title: "Class AnnotateFileRequest (3.13.0) \_|\_ Python client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/vision/latest/google.cloud.vision_v1.types.AnnotateFileRequest
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/vision/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/vision/latest/google.cloud.vision_v1.types.AnnotateFileRequest
  title: "Class AnnotateFileRequest (3.13.0) \_|\_ Python client libraries \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Python
Client libraries
Send feedback
Class AnnotateFileRequest (3.13.0)
Stay organized with collections
Save and categorize content based on your preferences.
3.13.0 (latest)
3.12.1
3.11.0
3.10.2
3.9.0
3.8.1
3.7.4
3.6.0
3.5.0
3.4.5
3.3.1
3.2.0
3.1.4
3.0.0
2.8.0
2.7.3
2.6.3
2.5.0
2.4.4
2.3.2
2.2.0
2.1.0
2.0.0
1.0.2
0.42.0
0.41.0
0.40.0
0.39.0
0.38.1
AnnotateFileRequest ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
A request to annotate one single file, e.g. a PDF, TIFF or
GIF file.
Attributes
Name
Description
input_config
google.cloud.vision_v1.types.InputConfig
Required. Information about the input file.
features
MutableSequence[ google.cloud.vision_v1.types.Feature ]
Required. Requested features.
image_context
google.cloud.vision_v1.types.ImageContext
Additional context that may accompany the
image(s) in the file.
pages
MutableSequence[int]
Pages of the file to perform image
annotation.
Pages starts from 1, we assume the first page of
the file is page 1. At most 5 pages are
supported per request. Pages can be negative.
Page 1 means the first page.
Page 2 means the second page.
Page -1 means the last page.
Page -2 means the second to the last page.
If the file is GIF instead of PDF or TIFF, page
refers to GIF frames.
If this field is empty, by default the service
performs image annotation for the first 5 pages
of the file.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
