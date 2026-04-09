---
title: "Interface BigQueryDateShardedSpecOrBuilder (1.94.0) \_|\_ Java client libraries\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-datacatalog/latest/com.google.cloud.datacatalog.v1.BigQueryDateShardedSpecOrBuilder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-datacatalog/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-datacatalog/latest/com.google.cloud.datacatalog.v1.BigQueryDateShardedSpecOrBuilder
  title: "Interface BigQueryDateShardedSpecOrBuilder (1.94.0) \_|\_ Java client libraries\
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
Interface BigQueryDateShardedSpecOrBuilder (1.94.0)
Stay organized with collections
Save and categorize content based on your preferences.
1.94.0 (latest)
1.93.0
1.91.0
1.89.0
1.88.0
1.87.0
1.86.0
1.84.0
1.82.0
1.81.0
1.80.0
1.79.0
1.78.0
1.76.0
1.74.0
1.73.0
1.70.0
1.69.0
1.68.0
1.66.0
1.65.0
1.64.0
1.63.0
1.62.0
1.61.0
1.60.0
1.59.0
1.58.0
1.57.0
1.55.0
1.54.0
1.53.0
1.52.0
1.51.0
1.50.0
1.49.0
1.48.0
1.47.0
1.46.0
1.45.0
1.43.0
1.42.0
1.41.0
1.40.0
1.39.0
1.38.0
1.37.0
1.36.0
1.35.0
1.34.0
1.33.0
1.30.0
1.29.0
1.28.0
1.27.0
1.26.0
1.25.0
1.24.0
1.23.0
1.22.0
1.21.0
1.20.0
1.19.0
1.18.0
1.17.0
1.15.0
1.14.0
1.13.0
1.12.0
1.11.0
1.10.0
1.9.5
1.8.4
1.7.2
1.6.2
1.5.4
public interface BigQueryDateShardedSpecOrBuilder extends MessageOrBuilder
Implements
MessageOrBuilder
Methods
getDataset()
public abstract String getDataset ()
Output only. The Data Catalog resource name of the dataset entry the
current table belongs to. For example:
projects/{PROJECT_ID}/locations/{LOCATION}/entrygroups/{ENTRY_GROUP_ID}/entries/{ENTRY_ID} .
string dataset = 1 [(.google.api.field_behavior) = OUTPUT_ONLY, (.google.api.resource_reference) = { ... }
Returns
Type
Description
String
The dataset.
getDatasetBytes()
public abstract ByteString getDatasetBytes ()
Output only. The Data Catalog resource name of the dataset entry the
current table belongs to. For example:
projects/{PROJECT_ID}/locations/{LOCATION}/entrygroups/{ENTRY_GROUP_ID}/entries/{ENTRY_ID} .
string dataset = 1 [(.google.api.field_behavior) = OUTPUT_ONLY, (.google.api.resource_reference) = { ... }
Returns
Type
Description
ByteString
The bytes for dataset.
getLatestShardResource()
public abstract String getLatestShardResource ()
Output only. BigQuery resource name of the latest shard.
string latest_shard_resource = 4 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
String
The latestShardResource.
getLatestShardResourceBytes()
public abstract ByteString getLatestShardResourceBytes ()
Output only. BigQuery resource name of the latest shard.
string latest_shard_resource = 4 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
ByteString
The bytes for latestShardResource.
getShardCount()
public abstract long getShardCount ()
Output only. Total number of shards.
int64 shard_count = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
long
The shardCount.
getTablePrefix()
public abstract String getTablePrefix ()
Output only. The table name prefix of the shards.
The name of any given shard is [table_prefix]YYYYMMDD .
For example, for the MyTable20180101 shard, the
table_prefix is MyTable .
string table_prefix = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
String
The tablePrefix.
getTablePrefixBytes()
public abstract ByteString getTablePrefixBytes ()
Output only. The table name prefix of the shards.
The name of any given shard is [table_prefix]YYYYMMDD .
For example, for the MyTable20180101 shard, the
table_prefix is MyTable .
string table_prefix = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
ByteString
The bytes for tablePrefix.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
