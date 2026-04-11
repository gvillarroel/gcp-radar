---
title: "Class CreateCustomClassRequest (2.38.0) \_|\_ Python client libraries \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/speech/latest/google.cloud.speech_v1.types.CreateCustomClassRequest
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/speech/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/speech/latest/google.cloud.speech_v1.types.CreateCustomClassRequest
  title: "Class CreateCustomClassRequest (2.38.0) \_|\_ Python client libraries \_\
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
Class CreateCustomClassRequest (2.38.0)
Stay organized with collections
Save and categorize content based on your preferences.
2.38.0 (latest)
2.37.0
2.36.1
2.35.0
2.34.0
2.33.0
2.32.0
2.31.0
2.30.0
2.29.0
2.28.1
2.27.0
2.26.1
2.25.1
2.24.1
2.23.0
2.22.0
2.21.1
2.20.1
2.19.0
2.18.0
2.17.3
2.16.2
2.15.1
2.14.1
2.13.1
2.12.0
2.11.1
2.10.0
2.9.3
2.8.0
2.7.0
2.6.0
2.5.1
2.4.1
2.3.0
2.2.1
2.1.0
2.0.1
1.3.4
1.2.0
1.1.0
CreateCustomClassRequest ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Message sent by the client for the CreateCustomClass method.
Attributes
Name
Description
parent
str
Required. The parent resource where this custom class will
be created. Format:
projects/{project}/locations/{location}/customClasses
Speech-to-Text supports three locations: global , us
(US North America), and eu (Europe). If you are calling
the speech.googleapis.com endpoint, use the global
location. To specify a region, use a `regional
endpoint
custom_class_id
str
Required. The ID to use for the custom class,
which will become the final component of the
custom class' resource name.
This value should restrict to letters, numbers,
and hyphens, with the first character a letter,
the last a letter or a number, and be 4-63
characters.
custom_class
google.cloud.speech_v1.types.CustomClass
Required. The custom class to create.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
