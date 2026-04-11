---
title: "Interface AccountConnectorOrBuilder (0.45.0) \_|\_ Java client libraries \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-developerconnect/latest/com.google.cloud.developerconnect.v1.AccountConnectorOrBuilder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-developerconnect/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-developerconnect/latest/com.google.cloud.developerconnect.v1.AccountConnectorOrBuilder
  title: "Interface AccountConnectorOrBuilder (0.45.0) \_|\_ Java client libraries\
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
Interface AccountConnectorOrBuilder (0.45.0)
Stay organized with collections
Save and categorize content based on your preferences.
0.45.0 (latest)
0.44.0
0.42.0
0.40.0
0.39.0
0.38.0
0.37.0
0.35.0
0.33.0
0.32.0
0.31.0
0.30.0
0.29.0
0.27.0
0.25.0
0.24.0
0.21.0
0.20.0
0.19.0
0.17.0
0.16.0
0.15.0
0.14.0
0.13.0
0.12.0
0.11.0
0.10.0
0.9.0
0.8.0
0.6.0
0.5.0
0.4.0
0.3.0
0.2.0
0.1.0
public interface AccountConnectorOrBuilder extends MessageOrBuilder
Implements
MessageOrBuilder
Methods
containsAnnotations(String key)
public abstract boolean containsAnnotations ( String key )
Optional. Allows users to store small amounts of arbitrary data.
map<string, string> annotations = 6 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
key
String
Returns
Type
Description
boolean
containsLabels(String key)
public abstract boolean containsLabels ( String key )
Optional. Labels as key value pairs
map<string, string> labels = 8 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
key
String
Returns
Type
Description
boolean
getAccountConnectorConfigCase()
public abstract AccountConnector . AccountConnectorConfigCase getAccountConnectorConfigCase ()
Returns
Type
Description
AccountConnector.AccountConnectorConfigCase
getAnnotations() (deprecated)
public abstract Map<String , String > getAnnotations ()
Use #getAnnotationsMap() instead.
Returns
Type
Description
Map < String , String >
getAnnotationsCount()
public abstract int getAnnotationsCount ()
Optional. Allows users to store small amounts of arbitrary data.
map<string, string> annotations = 6 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
int
getAnnotationsMap()
public abstract Map<String , String > getAnnotationsMap ()
Optional. Allows users to store small amounts of arbitrary data.
map<string, string> annotations = 6 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
Map < String , String >
getAnnotationsOrDefault(String key, String defaultValue)
public abstract String getAnnotationsOrDefault ( String key , String defaultValue )
Optional. Allows users to store small amounts of arbitrary data.
map<string, string> annotations = 6 [(.google.api.field_behavior) = OPTIONAL];
Parameters
Name
Description
key
String
defaultValue
String
Returns
Type
Description
String
getAnnotationsOrThrow(String key)
public abstract String getAnnotationsOrThrow ( String key )
Optional. Allows users to store small amounts of arbitrary data.
map<string, string> annotations = 6 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
key
String
Returns
Type
Description
String
getCreateTime()
public abstract Timestamp getCreateTime ()
Output only. The timestamp when the accountConnector was created.
.google.protobuf.Timestamp create_time = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
Timestamp
The createTime.
getCreateTimeOrBuilder()
public abstract TimestampOrBuilder getCreateTimeOrBuilder ()
Output only. The timestamp when the accountConnector was created.
.google.protobuf.Timestamp create_time = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
TimestampOrBuilder
getEtag()
public abstract String getEtag ()
Optional. This checksum is computed by the server based on the value of
other fields, and may be sent on update and delete requests to ensure the
client has an up-to-date value before proceeding.
string etag = 7 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
String
The etag.
getEtagBytes()
public abstract ByteString getEtagBytes ()
Optional. This checksum is computed by the server based on the value of
other fields, and may be sent on update and delete requests to ensure the
client has an up-to-date value before proceeding.
string etag = 7 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
ByteString
The bytes for etag.
getLabels() (deprecated)
public abstract Map<String , String > getLabels ()
Use #getLabelsMap() instead.
Returns
Type
Description
Map < String , String >
getLabelsCount()
public abstract int getLabelsCount ()
Optional. Labels as key value pairs
map<string, string> labels = 8 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
int
getLabelsMap()
public abstract Map<String , String > getLabelsMap ()
Optional. Labels as key value pairs
map<string, string> labels = 8 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
Map < String , String >
getLabelsOrDefault(String key, String defaultValue)
public abstract String getLabelsOrDefault ( String key , String defaultValue )
Optional. Labels as key value pairs
map<string, string> labels = 8 [(.google.api.field_behavior) = OPTIONAL];
Parameters
Name
Description
key
String
defaultValue
String
Returns
Type
Description
String
getLabelsOrThrow(String key)
public abstract String getLabelsOrThrow ( String key )
Optional. Labels as key value pairs
map<string, string> labels = 8 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
key
String
Returns
Type
Description
String
getName()
public abstract String getName ()
Identifier. The resource name of the accountConnector, in the format
projects/{project}/locations/{location}/accountConnectors/{account_connector_id} .
string name = 1 [(.google.api.field_behavior) = IDENTIFIER];
Returns
Type
Description
String
The name.
getNameBytes()
public abstract ByteString getNameBytes ()
Identifier. The resource name of the accountConnector, in the format
projects/{project}/locations/{location}/accountConnectors/{account_connector_id} .
string name = 1 [(.google.api.field_behavior) = IDENTIFIER];
Returns
Type
Description
ByteString
The bytes for name.
getOauthStartUri()
public abstract String getOauthStartUri ()
Output only. Start OAuth flow by clicking on this URL.
string oauth_start_uri = 10 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
String
The oauthStartUri.
getOauthStartUriBytes()
public abstract ByteString getOauthStartUriBytes ()
Output only. Start OAuth flow by clicking on this URL.
string oauth_start_uri = 10 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
ByteString
The bytes for oauthStartUri.
getProviderOauthConfig()
public abstract ProviderOAuthConfig getProviderOauthConfig ()
Optional. Provider OAuth config.
.google.cloud.developerconnect.v1.ProviderOAuthConfig provider_oauth_config = 5 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
ProviderOAuthConfig
The providerOauthConfig.
getProviderOauthConfigOrBuilder()
public abstract ProviderOAuthConfigOrBuilder getProviderOauthConfigOrBuilder ()
Optional. Provider OAuth config.
.google.cloud.developerconnect.v1.ProviderOAuthConfig provider_oauth_config = 5 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
ProviderOAuthConfigOrBuilder
getUpdateTime()
public abstract Timestamp getUpdateTime ()
Output only. The timestamp when the accountConnector was updated.
.google.protobuf.Timestamp update_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
Timestamp
The updateTime.
getUpdateTimeOrBuilder()
public abstract TimestampOrBuilder getUpdateTimeOrBuilder ()
Output only. The timestamp when the accountConnector was updated.
.google.protobuf.Timestamp update_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
TimestampOrBuilder
hasCreateTime()
public abstract boolean hasCreateTime ()
Output only. The timestamp when the accountConnector was created.
.google.protobuf.Timestamp create_time = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
boolean
Whether the createTime field is set.
hasProviderOauthConfig()
public abstract boolean hasProviderOauthConfig ()
Optional. Provider OAuth config.
.google.cloud.developerconnect.v1.ProviderOAuthConfig provider_oauth_config = 5 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
boolean
Whether the providerOauthConfig field is set.
hasUpdateTime()
public abstract boolean hasUpdateTime ()
Output only. The timestamp when the accountConnector was updated.
.google.protobuf.Timestamp update_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
boolean
Whether the updateTime field is set.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
