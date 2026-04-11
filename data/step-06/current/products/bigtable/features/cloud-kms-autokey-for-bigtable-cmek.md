---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:35:45.332Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Cloud KMS Autokey for Bigtable CMEK"
feature_slug: "cloud-kms-autokey-for-bigtable-cmek"
latest_feature_date: "2025-03-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/cmek"
  - "https://docs.cloud.google.com/bigtable/docs/release-notes"
  - "https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/create_table"
keywords:
  - "automate"
  - "autokey"
  - "kms"
  - "cmek"
  - "bigtable"
  - "can"
  - "for"
  - "now"
---

# Cloud KMS Autokey for Bigtable CMEK

Product: Bigtable
Coverage: LOW

## Step 02 Summary

Cloud KMS Autokey can now automate creation and use of customer-managed encryption keys (CMEK) in Bigtable clusters, and this support is generally available.

## Extended Definition

Cloud KMS Autokey can now automate creation and use of customer-managed encryption keys (CMEK) in Bigtable clusters, and this support is generally available.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/cmek](https://docs.cloud.google.com/bigtable/docs/cmek)
- [https://docs.cloud.google.com/bigtable/docs/release-notes](https://docs.cloud.google.com/bigtable/docs/release-notes)
- [https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/create_table](https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/create_table)

## Supporting Pages

### "Customer-managed encryption keys (CMEK) \_|\_ Bigtable \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigtable/docs/cmek](https://docs.cloud.google.com/bigtable/docs/cmek)
- Source ID: `site-docs-root-2`
- Final score: 182
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- CMEK with Cloud KMS Autokey You can either create CMEKs manually to protect your Bigtable clusters or use Cloud KMS Autokey.
- Logging You can audit the requests that Bigtable sends to Cloud KMS on your behalf in Cloud Logging , if you have enabled Cloud KMS audit logs for the Cloud KMS API in your project.
- If you want to control your encryption keys, then you can use customer-managed encryption keys (CMEKs) in Cloud KMS with CMEK-integrated services including Bigtable.
- You can use the following when you work with CMEK for Bigtable.

### Bigtable release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/release-notes](https://docs.cloud.google.com/bigtable/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- March 24, 2025 Libraries Java 2.56.0 (2025-03-18) Features bigtable: Add support for Logical Views in Admin API ( #2519 ) ( 6dac3fd ) bigtable: Add support for Materialized Views in Admin API ( #2511 ) ( 55cd719 ) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.55.1 ( 7992af0 ) Dependencies Sdk-platform-java-config 3.45.1 ( #2517 ) ( b2af258 ) Python 2.30.0 (2025-03-18) Features Update ExecuteQuery to use Prepare ( #1100 ) ( 8a7abc1 ) Bug Fixes Allow protobuf 6.x ( #1092 ) ( 1015fa8 ) Remove setup.cfg configuration for creating universal wheels ( #1097 ) ( 95f4b82 ) March 17, 2025 Libraries Java 2.55.0 (2025-03-11) Features Add MaterializedViewName to ReadRows and SampleRowKeys ( 1763c6e ) Add MaterializedViews and LogicalViews APIs ( 1763c6e ) Add MaterializedViews and LogicalViews APIs ( 7340527 ) Add PrepareQuery api and update ExecuteQuery to support it ( 1763c6e ) bigtable: Add support for data APIs for materialized views ( #2508 ) ( 6310a63 ) large-row-skip: Added large-row-skip-callable with configurable rowadapter ( #2509 ) ( ba193ef ) Next release from main branch is 2.55.0 ( #2506 ) ( 4e45837 ) Publish row key schema fields in table proto and relevant admin APIs to setup a table with a row key schema ( 7340527 ) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.54.0 ( 91e4369 ) Documentation Fixed formatting of resource path strings ( 7340527 ) March 11, 2025 Feature You can use Cloud KMS Autokey to automate the creation and use of customer-managed encryption keys (CMEK) in Bigtable clusters.
- Node.js Changes for @google-cloud/bigtable 4.6.0 (2023-05-26) Features Add ChangeStreamConfig to CreateTable and UpdateTable ( #1269 ) ( 2b05fa4 ) 4.5.2 (2023-05-24) Bug Fixes Parsing for qualifiers with colon characters ( #1277 ) ( b80f533 ) May 23, 2023 Change You can now view information about which customer-managed encryption keys (CMEK) are used to protect your Cloud Bigtable resources and projects using Cloud Key Management Service (KMS).
- October 28, 2025 Feature You can use Cloud KMS Autokey in the Google Cloud console to automate the creation and use of customer-managed encryption keys (CMEK) in Bigtable clusters.
- Node.js Changes for @google-cloud/bigtable 5.1.1 (2024-07-11) Bug Fixes Ensure that during resumption of a scan, rows that have not been observed by the caller are re-requested ( #1444 ) ( 2d8de32 ) Remove custom readrows retry logic and rely on gax for retries ( #1422 ) ( 3e0a46e ) Java Changes for google-cloud-bigtable 2.40.0 (2024-06-28) Features Add String type with Utf8Raw encoding to Bigtable API ( #2191 ) ( e7f03fc ) Bug Fixes Add getServiceName() to EnhancedBigTableStubSettings ( #2256 ) ( da703db ) Remove grpclb ( #2033 ) ( 7355375 ) Dependencies Update dependency com.google.truth.extensions:truth-proto-extension to v1.4.3 ( #2268 ) ( 4573220 ) Update dependency org.junit.vintage:junit-vintage-engine to v5.10.3 ( #2269 ) ( 69fef96 ) Update shared dependencies ( #2265 ) ( 61014ca ) June 17, 2024 Feature The Python client library for Bigtable now offers an asynchronous API for use with asynchronous applications.

### "MCP Tools Reference: bigtableadmin.googleapis.com \_|\_ Bigtable \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/create_table](https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/create_table)
- Source ID: `site-docs-reference`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- Table JSON representation { "name" : string , "clusterStates" : { string : { object ( ClusterState ) } , ... } , "columnFamilies" : { string : { object ( ColumnFamily ) } , ... } , "granularity" : enum ( TimestampGranularity ) , "restoreInfo" : { object ( RestoreInfo ) } , "changeStreamConfig" : { object ( ChangeStreamConfig ) } , "deletionProtection" : boolean , "stats" : { object ( TableStats ) } , "tieredStorageConfig" : { object ( TieredStorageConfig ) } , "rowKeySchema" : { object ( Struct ) } , // Union field automated backup config can be only one of the following: "automatedBackupPolicy" : { object ( AutomatedBackupPolicy ) } // End of list of possible types for union field automated backup config . } Fields name string The unique name of the table.
- Union field automated backup config . automated backup config can be only one of the following: automatedBackupPolicy object ( AutomatedBackupPolicy ) If specified, automated backups are enabled for this table.
- Type JSON representation { // Union field kind can be only one of the following: "bytesType" : { object ( Bytes ) } , "stringType" : { object ( String ) } , "int64Type" : { object ( Int64 ) } , "float32Type" : { object ( Float32 ) } , "float64Type" : { object ( Float64 ) } , "boolType" : { object ( Bool ) } , "timestampType" : { object ( Timestamp ) } , "dateType" : { object ( Date ) } , "aggregateType" : { object ( Aggregate ) } , "structType" : { object ( Struct ) } , "arrayType" : { object ( Array ) } , "mapType" : { object ( Map ) } , "protoType" : { object ( Proto ) } , "enumType" : { object ( Enum ) } , "geographyType" : { object ( Geography ) } // End of list of possible types for union field kind . } Fields Union field kind .
- Curl Request curl --location 'https://bigtableadmin.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "create table", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema Request message for Bigtable.CreateTable CreateTableRequest JSON representation { "projectId" : string , "instanceId" : string , "tableId" : string , "columnFamilies" : [ string ] } Fields projectId string Required.

