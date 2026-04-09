---
title: "Class CreateKeyRequest (0.7.0) \_|\_ Python client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/apikeys/latest/google.cloud.api_keys_v2.types.CreateKeyRequest
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/apikeys/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/apikeys/latest/google.cloud.api_keys_v2.types.CreateKeyRequest
  title: "Class CreateKeyRequest (0.7.0) \_|\_ Python client libraries \_|\_ Google\
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
Class CreateKeyRequest (0.7.0)
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
CreateKeyRequest ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Request message for CreateKey method.
Attributes
Name
Description
parent
str
Required. The project in which the API key is
created.
key
google.cloud.api_keys_v2.types.Key
Required. The API key fields to set at creation time. You
can configure only the display_name , restrictions ,
and annotations fields.
key_id
str
User specified key id (optional). If specified, it will
become the final component of the key resource name.
The id must be unique within the project, must conform with
RFC-1034, is restricted to lower-cased letters, and has a
maximum length of 63 characters. In another word, the id
must match the regular expression:
[a-z]([a-z0-9-]{0,61}[a-z0-9])? .
The id must NOT be a UUID-like string.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
