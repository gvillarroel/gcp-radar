---
title: "Operations \_|\_ Cloud Speech-to-Text \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/speech-to-text/docs/operations
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/speech-to-text/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/speech-to-text/docs/operations
  title: "Operations \_|\_ Cloud Speech-to-Text \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Cloud Speech-to-Text
Reference
Send feedback
Operations
Stay organized with collections
Save and categorize content based on your preferences.
For details on supported google.longrunning methods, see the
RPC
and
REST
documentation.
ListOperations
To return V2 operations:
The RPC Operations.ListOperations
method
must be called with the name field set to
projects/<project>/locations/<speech location> , with bracketed terms
indicating variable text.
The filter field must be set to is_v2(name) (literally, including
parentheses).
Operation ID
All Cloud Speech-to-Text V2 operations have a unique_id in the name field that starts with v2- .
This makes it possible to discern between Cloud Speech-to-Text
V2 and V1 operations.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
