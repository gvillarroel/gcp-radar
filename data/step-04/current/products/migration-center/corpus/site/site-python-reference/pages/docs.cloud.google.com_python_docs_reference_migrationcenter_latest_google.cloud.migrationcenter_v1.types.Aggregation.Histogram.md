---
title: "Class Histogram (0.4.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.types.Aggregation.Histogram
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.types.Aggregation.Histogram
  title: "Class Histogram (0.4.0) \_|\_ Python client libraries \_|\_ Google Cloud\
    \ Documentation"
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
Class Histogram (0.4.0)
Stay organized with collections
Save and categorize content based on your preferences.
0.4.0 (latest)
0.3.0
0.2.0
0.1.15
Histogram ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Histogram of bucketed assets counts by field value.
Attribute
Name
Description
lower_bounds
MutableSequence[float]
Lower bounds of buckets. The response will contain n+1
buckets for n bounds. The first bucket will count all
assets for which the field value is smaller than the first
bound. Subsequent buckets will count assets for which the
field value is greater or equal to a lower bound and smaller
than the next one. The last bucket will count assets for
which the field value is greater or equal to the final lower
bound. You can define up to 20 lower bounds.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
