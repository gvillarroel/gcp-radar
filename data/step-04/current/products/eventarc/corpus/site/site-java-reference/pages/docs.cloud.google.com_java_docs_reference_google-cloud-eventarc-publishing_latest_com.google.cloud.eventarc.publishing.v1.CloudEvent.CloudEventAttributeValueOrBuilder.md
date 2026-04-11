---
title: "Interface CloudEvent.CloudEventAttributeValueOrBuilder (0.88.0) \_|\_ Java\
  \ client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-eventarc-publishing/latest/com.google.cloud.eventarc.publishing.v1.CloudEvent.CloudEventAttributeValueOrBuilder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-eventarc-publishing/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-eventarc-publishing/latest/com.google.cloud.eventarc.publishing.v1.CloudEvent.CloudEventAttributeValueOrBuilder
  title: "Interface CloudEvent.CloudEventAttributeValueOrBuilder (0.88.0) \_|\_ Java\
    \ client libraries \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Java
Client libraries
Send feedback
Interface CloudEvent.CloudEventAttributeValueOrBuilder (0.88.0)
Stay organized with collections
Save and categorize content based on your preferences.
0.88.0 (latest)
0.87.0
0.85.0
0.83.0
0.82.0
0.81.0
0.80.0
0.78.0
0.76.0
0.75.0
0.74.0
0.73.0
0.72.0
0.70.0
0.68.0
0.67.0
0.64.0
0.63.0
0.62.0
0.60.0
0.59.0
0.58.0
0.57.0
0.56.0
0.55.0
0.54.0
0.53.0
0.52.0
0.51.0
0.49.0
0.48.0
0.47.0
0.46.0
0.45.0
0.44.0
0.43.0
0.42.0
0.41.0
0.40.0
0.39.0
0.37.0
0.36.0
0.35.0
0.34.0
0.33.0
0.32.0
0.31.0
0.30.0
0.29.0
0.28.0
0.27.0
0.24.0
0.23.0
0.22.0
0.21.0
0.20.0
0.19.0
0.18.0
0.17.0
0.16.0
0.15.0
0.14.0
0.13.0
0.12.0
0.11.0
0.9.0
0.8.0
0.7.0
0.6.0
0.5.0
0.4.0
public static interface CloudEvent . CloudEventAttributeValueOrBuilder extends MessageOrBuilder
Implements
MessageOrBuilder
Methods
getAttrCase()
public abstract CloudEvent . CloudEventAttributeValue . AttrCase getAttrCase ()
Returns
Type
Description
CloudEvent.CloudEventAttributeValue.AttrCase
getCeBoolean()
public abstract boolean getCeBoolean ()
Boolean value.
bool ce_boolean = 1;
Returns
Type
Description
boolean
The ceBoolean.
getCeBytes()
public abstract ByteString getCeBytes ()
Bytes value.
bytes ce_bytes = 4;
Returns
Type
Description
ByteString
The ceBytes.
getCeInteger()
public abstract int getCeInteger ()
Integer value.
int32 ce_integer = 2;
Returns
Type
Description
int
The ceInteger.
getCeString()
public abstract String getCeString ()
String value.
string ce_string = 3;
Returns
Type
Description
String
The ceString.
getCeStringBytes()
public abstract ByteString getCeStringBytes ()
String value.
string ce_string = 3;
Returns
Type
Description
ByteString
The bytes for ceString.
getCeTimestamp()
public abstract Timestamp getCeTimestamp ()
Timestamp value.
.google.protobuf.Timestamp ce_timestamp = 7;
Returns
Type
Description
Timestamp
The ceTimestamp.
getCeTimestampOrBuilder()
public abstract TimestampOrBuilder getCeTimestampOrBuilder ()
Timestamp value.
.google.protobuf.Timestamp ce_timestamp = 7;
Returns
Type
Description
TimestampOrBuilder
getCeUri()
public abstract String getCeUri ()
URI value.
string ce_uri = 5;
Returns
Type
Description
String
The ceUri.
getCeUriBytes()
public abstract ByteString getCeUriBytes ()
URI value.
string ce_uri = 5;
Returns
Type
Description
ByteString
The bytes for ceUri.
getCeUriRef()
public abstract String getCeUriRef ()
URI-reference value.
string ce_uri_ref = 6;
Returns
Type
Description
String
The ceUriRef.
getCeUriRefBytes()
public abstract ByteString getCeUriRefBytes ()
URI-reference value.
string ce_uri_ref = 6;
Returns
Type
Description
ByteString
The bytes for ceUriRef.
hasCeBoolean()
public abstract boolean hasCeBoolean ()
Boolean value.
bool ce_boolean = 1;
Returns
Type
Description
boolean
Whether the ceBoolean field is set.
hasCeBytes()
public abstract boolean hasCeBytes ()
Bytes value.
bytes ce_bytes = 4;
Returns
Type
Description
boolean
Whether the ceBytes field is set.
hasCeInteger()
public abstract boolean hasCeInteger ()
Integer value.
int32 ce_integer = 2;
Returns
Type
Description
boolean
Whether the ceInteger field is set.
hasCeString()
public abstract boolean hasCeString ()
String value.
string ce_string = 3;
Returns
Type
Description
boolean
Whether the ceString field is set.
hasCeTimestamp()
public abstract boolean hasCeTimestamp ()
Timestamp value.
.google.protobuf.Timestamp ce_timestamp = 7;
Returns
Type
Description
boolean
Whether the ceTimestamp field is set.
hasCeUri()
public abstract boolean hasCeUri ()
URI value.
string ce_uri = 5;
Returns
Type
Description
boolean
Whether the ceUri field is set.
hasCeUriRef()
public abstract boolean hasCeUriRef ()
URI-reference value.
string ce_uri_ref = 6;
Returns
Type
Description
boolean
Whether the ceUriRef field is set.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
