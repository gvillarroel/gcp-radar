---
title: "Class ApiTarget (0.7.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/apikeys/latest/google.cloud.api_keys_v2.types.ApiTarget
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/apikeys/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/apikeys/latest/google.cloud.api_keys_v2.types.ApiTarget
  title: "Class ApiTarget (0.7.0) \_|\_ Python client libraries \_|\_ Google Cloud\
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
Class ApiTarget (0.7.0)
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
0.7.0 (latest)
0.6.0
0.5.17
0.4.1
0.3.0
0.2.2
0.1.0
ApiTarget ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
A restriction for a specific service and optionally one or
multiple specific methods. Both fields are case insensitive.
Attributes
Name
Description
service
str
The service for this restriction. It should be the canonical
service name, for example: translate.googleapis.com . You
can use
`` gcloud services list __
to get a list of services that are enabled in the project.
methods
MutableSequence[str]
Optional. List of one or more methods that can be called. If
empty, all methods for the service are allowed. A wildcard
(\*) can be used as the last symbol. Valid examples:
google.cloud.translate.v2.TranslateService.GetSupportedLanguage
TranslateText Get* translate.googleapis.com.Get*
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
