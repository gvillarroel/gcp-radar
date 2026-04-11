---
title: "Class CreateSecretRequest (2.27.0) \_|\_ Python client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.types.CreateSecretRequest
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/secretmanager/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.types.CreateSecretRequest
  title: "Class CreateSecretRequest (2.27.0) \_|\_ Python client libraries \_|\_ Google\
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
Class CreateSecretRequest (2.27.0)
Stay organized with collections
Save and categorize content based on your preferences.
2.27.0 (latest)
2.26.0
2.25.0
2.23.3
2.22.1
2.21.1
2.20.2
2.19.0
2.18.3
2.17.0
2.16.3
2.15.1
2.14.0
2.13.0
2.12.6
2.11.1
2.10.0
2.9.2
2.8.0
2.7.3
2.6.0
2.5.0
2.4.0
2.3.0
2.2.0
2.1.0
2.0.0
1.0.2
0.2.0
0.1.1
CreateSecretRequest ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Request message for
SecretManagerService.CreateSecret .
Attributes
Name
Description
parent
str
Required. The resource name of the project to associate with
the Secret , in the
format projects/* or projects/*/locations/* .
secret_id
str
Required. This must be unique within the project.
A secret ID is a string with a maximum length of 255
characters and can contain uppercase and lowercase letters,
numerals, and the hyphen ( - ) and underscore ( _ )
characters.
secret
google.cloud.secretmanager_v1.types.Secret
Required. A Secret
with initial field values.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
