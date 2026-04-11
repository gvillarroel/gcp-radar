---
title: "Class BatchGetServicesRequest (1.16.0) \_|\_ Python client libraries \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/serviceusage/latest/google.cloud.service_usage_v1.types.BatchGetServicesRequest
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/serviceusage/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/serviceusage/latest/google.cloud.service_usage_v1.types.BatchGetServicesRequest
  title: "Class BatchGetServicesRequest (1.16.0) \_|\_ Python client libraries \_\
    |\_ Google Cloud Documentation"
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
Class BatchGetServicesRequest (1.16.0)
Stay organized with collections
Save and categorize content based on your preferences.
1.16.0 (latest)
1.15.0
1.14.0
1.13.0
1.12.0
1.11.1
1.10.5
1.9.0
1.7.2
1.6.1
1.5.0
1.4.3
1.3.2
1.2.1
1.1.0
1.0.1
0.2.2
0.1.0
BatchGetServicesRequest ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Request message for the BatchGetServices method.
Attributes
Name
Description
parent
str
Parent to retrieve services from. If this is set, the parent
of all of the services specified in names must match
this field. An example name would be: projects/123 where
123 is the project number. The BatchGetServices
method currently only supports projects.
names
MutableSequence[str]
Names of the services to retrieve.
An example name would be:
projects/123/services/serviceusage.googleapis.com where
123 is the project number. A single request can get a
maximum of 30 services at a time.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
