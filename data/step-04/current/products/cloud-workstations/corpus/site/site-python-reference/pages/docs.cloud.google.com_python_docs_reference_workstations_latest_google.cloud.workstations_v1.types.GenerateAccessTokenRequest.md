---
title: "Class GenerateAccessTokenRequest (0.8.0) \_|\_ Python client libraries \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.types.GenerateAccessTokenRequest
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/workstations/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.types.GenerateAccessTokenRequest
  title: "Class GenerateAccessTokenRequest (0.8.0) \_|\_ Python client libraries \_\
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
Class GenerateAccessTokenRequest (0.8.0)
Stay organized with collections
Save and categorize content based on your preferences.
0.8.0 (latest)
0.7.0
0.6.0
0.5.13
0.4.1
0.3.0
0.2.1
0.1.1
GenerateAccessTokenRequest ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Request message for GenerateAccessToken.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
Attributes
Name
Description
expire_time
google.protobuf.timestamp_pb2.Timestamp
Desired expiration time of the access token.
This value must be at most 24 hours in the
future. If a value is not specified, the token's
expiration time will be set to a default value
of 1 hour in the future.
This field is a member of oneof _ expiration .
ttl
google.protobuf.duration_pb2.Duration
Desired lifetime duration of the access
token. This value must be at most 24 hours. If a
value is not specified, the token's lifetime
will be set to a default value of 1 hour.
This field is a member of oneof _ expiration .
workstation
str
Required. Name of the workstation for which
the access token should be generated.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
