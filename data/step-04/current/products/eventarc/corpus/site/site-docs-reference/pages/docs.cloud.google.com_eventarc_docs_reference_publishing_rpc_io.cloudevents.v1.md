---
title: "Package io.cloudevents.v1 \_|\_ Eventarc \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/eventarc/docs/reference/publishing/rpc/io.cloudevents.v1
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/eventarc/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/eventarc/docs/reference/publishing/rpc/io.cloudevents.v1
  title: "Package io.cloudevents.v1 \_|\_ Eventarc \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Eventarc
Reference
Send feedback
Package io.cloudevents.v1
Stay organized with collections
Save and categorize content based on your preferences.
Index
CloudEvent (message)
CloudEvent.CloudEventAttributeValue (message)
CloudEvent
-- CloudEvent Context Attributes
Fields
id
string
Required Attributes
source
string
URI-reference
spec_version
string
type
string
attributes
map<string, CloudEventAttributeValue >
Optional & Extension Attributes
Union field data . -- CloudEvent Data (Bytes, Text, or Proto) data can be only one of the following:
binary_data
bytes
text_data
string
proto_data
Any
CloudEventAttributeValue
Fields
Union field attr .
attr can be only one of the following:
ce_boolean
bool
ce_integer
int32
ce_string
string
ce_bytes
bytes
ce_uri
string
ce_uri_ref
string
ce_timestamp
Timestamp
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-13 UTC."],[],[]]
