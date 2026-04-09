---
title: "Interface MetadataExchangeRequestOrBuilder (0.66.0) \_|\_ Java client libraries\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-alloydb-connectors/latest/com.google.cloud.alloydb.connectors.v1alpha.MetadataExchangeRequestOrBuilder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-alloydb-connectors/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-alloydb-connectors/latest/com.google.cloud.alloydb.connectors.v1alpha.MetadataExchangeRequestOrBuilder
  title: "Interface MetadataExchangeRequestOrBuilder (0.66.0) \_|\_ Java client libraries\
    \ \_|\_ Google Cloud Documentation"
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
Interface MetadataExchangeRequestOrBuilder (0.66.0)
Stay organized with collections
Save and categorize content based on your preferences.
0.66.0 (latest)
0.65.0
0.63.0
0.61.0
0.60.0
0.59.0
0.58.0
0.56.0
0.54.0
0.53.0
0.52.0
0.51.0
0.50.0
0.48.0
0.46.0
0.45.0
0.42.0
0.41.0
0.40.0
0.38.0
0.37.0
0.36.0
0.35.0
0.34.0
0.33.0
0.32.0
0.31.0
0.30.0
0.29.0
0.27.0
0.26.0
0.25.0
0.24.0
0.23.0
0.22.0
0.21.0
0.20.0
0.19.0
0.18.0
0.17.0
0.15.0
0.14.0
0.13.0
0.12.0
0.11.0
0.10.0
0.9.0
0.8.0
0.7.0
0.6.0
0.5.0
0.2.0
0.1.0
public interface MetadataExchangeRequestOrBuilder extends MessageOrBuilder
Implements
MessageOrBuilder
Methods
getAuthType()
public abstract MetadataExchangeRequest . AuthType getAuthType ()
Authentication type.
.google.cloud.alloydb.connectors.v1alpha.MetadataExchangeRequest.AuthType auth_type = 2;
Returns
Type
Description
MetadataExchangeRequest.AuthType
The authType.
getAuthTypeValue()
public abstract int getAuthTypeValue ()
Authentication type.
.google.cloud.alloydb.connectors.v1alpha.MetadataExchangeRequest.AuthType auth_type = 2;
Returns
Type
Description
int
The enum numeric value on the wire for authType.
getOauth2Token()
public abstract String getOauth2Token ()
IAM token used for both IAM user authentiation and
alloydb.instances.connect permission check.
string oauth2_token = 3;
Returns
Type
Description
String
The oauth2Token.
getOauth2TokenBytes()
public abstract ByteString getOauth2TokenBytes ()
IAM token used for both IAM user authentiation and
alloydb.instances.connect permission check.
string oauth2_token = 3;
Returns
Type
Description
ByteString
The bytes for oauth2Token.
getUserAgent()
public abstract String getUserAgent ()
Optional. Connector information.
string user_agent = 1 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
String
The userAgent.
getUserAgentBytes()
public abstract ByteString getUserAgentBytes ()
Optional. Connector information.
string user_agent = 1 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
ByteString
The bytes for userAgent.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-29 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-29 UTC."],[],[]]
