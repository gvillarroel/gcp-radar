---
title: "Interface AlloyDbDatabaseReferenceOrBuilder (0.16.0) \_|\_ Java client libraries\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-geminidataanalytics/latest/com.google.cloud.geminidataanalytics.v1beta.AlloyDbDatabaseReferenceOrBuilder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-geminidataanalytics/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-geminidataanalytics/latest/com.google.cloud.geminidataanalytics.v1beta.AlloyDbDatabaseReferenceOrBuilder
  title: "Interface AlloyDbDatabaseReferenceOrBuilder (0.16.0) \_|\_ Java client libraries\
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
Interface AlloyDbDatabaseReferenceOrBuilder (0.16.0)
Stay organized with collections
Save and categorize content based on your preferences.
0.16.0 (latest)
0.15.0
0.13.0
0.11.0
0.10.0
0.9.0
0.8.0
0.6.0
0.4.0
0.3.0
0.2.0
0.1.0
public interface AlloyDbDatabaseReferenceOrBuilder extends MessageOrBuilder
Implements
MessageOrBuilder
Methods
getClusterId()
public abstract String getClusterId ()
Required. The cluster id.
string cluster_id = 3 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
String
The clusterId.
getClusterIdBytes()
public abstract ByteString getClusterIdBytes ()
Required. The cluster id.
string cluster_id = 3 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
ByteString
The bytes for clusterId.
getDatabaseId()
public abstract String getDatabaseId ()
Required. The database id.
string database_id = 5 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
String
The databaseId.
getDatabaseIdBytes()
public abstract ByteString getDatabaseIdBytes ()
Required. The database id.
string database_id = 5 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
ByteString
The bytes for databaseId.
getInstanceId()
public abstract String getInstanceId ()
Required. The instance id.
string instance_id = 4 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
String
The instanceId.
getInstanceIdBytes()
public abstract ByteString getInstanceIdBytes ()
Required. The instance id.
string instance_id = 4 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
ByteString
The bytes for instanceId.
getProjectId()
public abstract String getProjectId ()
Required. The project the instance belongs to.
string project_id = 1 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
String
The projectId.
getProjectIdBytes()
public abstract ByteString getProjectIdBytes ()
Required. The project the instance belongs to.
string project_id = 1 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
ByteString
The bytes for projectId.
getRegion()
public abstract String getRegion ()
Required. The region of the instance.
string region = 2 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
String
The region.
getRegionBytes()
public abstract ByteString getRegionBytes ()
Required. The region of the instance.
string region = 2 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
ByteString
The bytes for region.
getTableIds(int index)
public abstract String getTableIds ( int index )
Optional. The table ids. Denotes all tables if unset.
repeated string table_ids = 6 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
index
int The index of the element to return.
Returns
Type
Description
String
The tableIds at the given index.
getTableIdsBytes(int index)
public abstract ByteString getTableIdsBytes ( int index )
Optional. The table ids. Denotes all tables if unset.
repeated string table_ids = 6 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
index
int The index of the value to return.
Returns
Type
Description
ByteString
The bytes of the tableIds at the given index.
getTableIdsCount()
public abstract int getTableIdsCount ()
Optional. The table ids. Denotes all tables if unset.
repeated string table_ids = 6 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
int
The count of tableIds.
getTableIdsList()
public abstract List<String> getTableIdsList ()
Optional. The table ids. Denotes all tables if unset.
repeated string table_ids = 6 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
List < String >
A list containing the tableIds.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
