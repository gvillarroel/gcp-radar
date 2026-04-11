---
title: "Class Attestor (1.15.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/binaryauthorization/latest/google.cloud.binaryauthorization_v1.types.Attestor
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/binaryauthorization/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/binaryauthorization/latest/google.cloud.binaryauthorization_v1.types.Attestor
  title: "Class Attestor (1.15.0) \_|\_ Python client libraries \_|\_ Google Cloud\
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
Class Attestor (1.15.0)
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
1.15.0 (latest)
1.14.0
1.13.2
1.12.0
1.11.1
1.10.5
1.9.0
1.8.0
1.7.0
1.6.2
1.5.1
1.4.0
1.3.3
1.2.3
1.1.0
1.0.1
0.6.0
0.5.0
0.4.1
0.3.1
0.2.2
0.1.1
Attestor ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
An attestor that
attests to container image artifacts. An existing attestor cannot be
modified except where indicated.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
Attributes
Name
Description
name
str
Required. The resource name, in the format:
projects/*/attestors/* . This field may not be updated.
description
str
Optional. A descriptive comment. This field
may be updated. The field may be displayed in
chooser dialogs.
user_owned_grafeas_note
google.cloud.binaryauthorization_v1.types.UserOwnedGrafeasNote
This specifies how an attestation will be
read, and how it will be used during policy
enforcement.
This field is a member of oneof _ attestor_type .
update_time
google.protobuf.timestamp_pb2.Timestamp
Output only. Time when the attestor was last
updated.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
