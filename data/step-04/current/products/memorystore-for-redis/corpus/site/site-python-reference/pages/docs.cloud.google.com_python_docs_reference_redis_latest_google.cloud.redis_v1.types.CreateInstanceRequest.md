---
title: "Class CreateInstanceRequest (2.21.0) \_|\_ Python client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/redis/latest/google.cloud.redis_v1.types.CreateInstanceRequest
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/redis/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/redis/latest/google.cloud.redis_v1.types.CreateInstanceRequest
  title: "Class CreateInstanceRequest (2.21.0) \_|\_ Python client libraries \_|\_\
    \ Google Cloud Documentation"
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
Class CreateInstanceRequest (2.21.0)
Stay organized with collections
Save and categorize content based on your preferences.
2.21.0 (latest)
2.20.0
2.19.0
2.18.0
2.17.0
2.16.1
2.15.5
2.14.0
2.13.1
2.12.1
2.11.1
2.10.0
2.9.3
2.8.1
2.7.1
2.6.0
2.5.1
2.4.1
2.3.0
2.2.4
2.1.1
2.0.0
1.0.2
0.4.0
0.3.0
CreateInstanceRequest ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Request for
CreateInstance .
Attributes
Name
Description
parent
str
Required. The resource name of the instance location using
the form: projects/{project_id}/locations/{location_id}
where location_id refers to a GCP region.
instance_id
str
Required. The logical name of the Redis instance in the
customer project with the following restrictions:
- Must contain only lowercase letters, numbers, and hyphens.
- Must start with a letter.
- Must be between 1-40 characters.
- Must end with a number or a letter.
- Must be unique within the customer project / location
instance
google.cloud.redis_v1.types.Instance
Required. A Redis [Instance] resource
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
