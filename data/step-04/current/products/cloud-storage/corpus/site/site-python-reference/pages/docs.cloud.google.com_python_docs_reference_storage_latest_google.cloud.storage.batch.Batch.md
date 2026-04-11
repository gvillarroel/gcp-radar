---
title: "Class Batch (3.10.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.batch.Batch
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/storage/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.batch.Batch
  title: "Class Batch (3.10.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
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
Class Batch (3.10.0)
Stay organized with collections
Save and categorize content based on your preferences.
3.10.0 (latest)
3.9.0
3.8.0
3.7.0
3.6.0
3.5.0
3.4.1
3.3.1
3.2.0
3.1.1
3.0.0
2.19.0
2.17.0
2.16.0
2.15.0
2.14.0
2.13.0
2.12.0
2.11.0
2.10.0
2.9.0
2.8.0
2.7.0
2.6.0
2.5.0
2.4.0
2.3.0
2.2.1
2.1.0
2.0.0
1.44.0
1.43.0
1.42.3
1.41.1
1.40.0
1.39.0
1.38.0
1.37.1
1.36.2
1.35.1
1.34.0
1.33.0
1.32.0
1.31.2
1.30.0
1.29.0
1.28.1
1.27.0
1.26.0
1.25.0
1.24.1
1.23.0
1.22.0
1.21.0
1.20.0
1.19.0
1.18.0
1.17.0
Batch ( client , raise_exception = True )
Proxy an underlying connection, batching up change operations.
Warning:
Cloud Storage does not support batch operations for uploading or downloading.
Additionally, the current batch design does not support library methods whose
return values depend on the response payload.
Parameters
Name
Description
client
Client
The client to use for making connections.
raise_exception
bool
(Optional) Defaults to True. If True, instead of adding exceptions to the list of return responses, the final exception will be raised. Note that exceptions are unwrapped after all operations are complete in success or failure, and only the last exception is raised.
Methods
current
current ()
Return the topmost batch, or None.
finish
finish ( raise_exception = True )
Submit a single multipart/mixed request with deferred requests.
Parameter
Name
Description
raise_exception
bool
(Optional) Defaults to True. If True, instead of adding exceptions to the list of return responses, the final exception will be raised. Note that exceptions are unwrapped after all operations are complete in success or failure, and only the last exception is raised.
Returns
Type
Description
list of tuples
one (headers, payload) tuple per deferred request.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-19 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-19 UTC."],[],[]]
