---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:35:45.353Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "EXPORT DATA to Cloud Bigtable"
feature_slug: "export-data-to-cloud-bigtable"
latest_feature_date: "2023-08-31"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/release-notes"
  - "https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/create_table"
  - "https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/get_table"
keywords:
  - "exported"
  - "directly"
  - "export"
  - "be"
  - "bigtable"
  - "can"
  - "now"
  - "to"
---

# EXPORT DATA to Cloud Bigtable

Product: Bigtable
Coverage: LOW

## Step 02 Summary

BigQuery data can now be exported directly into Cloud Bigtable using EXPORT DATA statements.

## Extended Definition

BigQuery data can now be exported directly into Cloud Bigtable using EXPORT DATA statements.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/release-notes](https://docs.cloud.google.com/bigtable/docs/release-notes)
- [https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/create_table](https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/create_table)
- [https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/get_table](https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/get_table)

## Supporting Pages

### Bigtable release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/release-notes](https://docs.cloud.google.com/bigtable/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- Java Changes for google-cloud-bigtable 2.51.0 (2024-12-17) Features Introduce java.time ( #2415 ) ( bb96c3e ) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.51.0 ( a5444a5 ) Move resource detection to the first export to avoid slow start ( #2450 ) ( cec010a ) Dependencies Update sdk-platform-java dependencies ( #2448 ) ( 825e717 ) December 18, 2024 Feature You can now enable 2x node scaling when you create a new Bigtable cluster.
- August 31, 2023 Feature You can now use EXPORT DATA statements to directly export BigQuery data to Cloud Bigtable .
- December 22, 2025 Libraries Python 2.35.0 (2025-12-16) Features add basic interceptor to client (#1206) ( 6561cfac ) Add encodings for STRUCT and the Timestamp type ( 72dfdc44 ) add PeerInfo proto in Bigtable API ( 72dfdc44 ) Add Type API updates needed to support structured keys in materialized views ( 72dfdc44 ) support mTLS certificates when available (#1249) ( ca20219c ) Bug Fixes re-export AddToCell for consistency (#1241) ( 2a5baf11 ) async client uses fixed grace period (#1236) ( 544db1cd ) Deprecate credentials file argument ( 72dfdc44 ) Add ReadRows/SampleRowKeys bindings for materialized views ( 72dfdc44 ) retry cancelled errors (#1235) ( e3fd5d86 ) Java 2.71.0-rc1 (2025-12-19) Features update with latest from main ( #2740 ) ( 90e1a02 ) feat: Upgrade protobuf gen code to 4.33 ( #2741 ) ( 2b1d201 ) Dependencies update sdk-platform-java-config to 3.55.0-rc1 ( #2738 ) ( 136f164 ) Go 1.41.0 (2025-12-15) Features add PeerInfo proto in Bigtable API (PiperOrigin-RevId: 829585900) ( 185951b3 ) precompute featureflags in client and reuse (#13297) ( 3b3253ac ) Add experimental Bigtable connection pool with custom load balancing strategy. (#12882) ( 7aa96127 ) Enable ALTS hard bound token in Bigtable w/ direct access (#13153) ( 90239341 ) Enable routing cookie and attempt headers for enhanced retries (#12964) ( 96cfd47a ) Bug Fixes fix project id sent in otel (#13286) ( 4865868c ) screaming uppercase metric status (#13484) ( b35ee8fd ) Performance Improvements parallelize the exportTimeSeries function (#13004) ( bafd691d ) December 15, 2025 Libraries Java 2.70.1 (2025-12-12) Dependencies Update shared dependencies ( #2734 ) ( 2823705 ) December 12, 2025 Feature In the Google Cloud console, you can import data into Bigtable using the Dataflow job builder , a web interface for building and running Dataflow pipelines.
- Node.js Changes for @google-cloud/bigtable 5.1.1 (2024-07-11) Bug Fixes Ensure that during resumption of a scan, rows that have not been observed by the caller are re-requested ( #1444 ) ( 2d8de32 ) Remove custom readrows retry logic and rely on gax for retries ( #1422 ) ( 3e0a46e ) Java Changes for google-cloud-bigtable 2.40.0 (2024-06-28) Features Add String type with Utf8Raw encoding to Bigtable API ( #2191 ) ( e7f03fc ) Bug Fixes Add getServiceName() to EnhancedBigTableStubSettings ( #2256 ) ( da703db ) Remove grpclb ( #2033 ) ( 7355375 ) Dependencies Update dependency com.google.truth.extensions:truth-proto-extension to v1.4.3 ( #2268 ) ( 4573220 ) Update dependency org.junit.vintage:junit-vintage-engine to v5.10.3 ( #2269 ) ( 69fef96 ) Update shared dependencies ( #2265 ) ( 61014ca ) June 17, 2024 Feature The Python client library for Bigtable now offers an asynchronous API for use with asynchronous applications.

### "MCP Tools Reference: bigtableadmin.googleapis.com \_|\_ Bigtable \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/create_table](https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/create_table)
- Source ID: `site-docs-reference`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- The kind of type that this represents. kind can be only one of the following: bytesType object ( Bytes ) Bytes stringType object ( String ) String int64Type object ( Int64 ) Int64 float32Type object ( Float32 ) Float32 float64Type object ( Float64 ) Float64 boolType object ( Bool ) Bool timestampType object ( Timestamp ) Timestamp dateType object ( Date ) Date aggregateType object ( Aggregate ) Aggregate structType object ( Struct ) Struct arrayType object ( Array ) Array mapType object ( Map ) Map protoType object ( Proto ) Proto enumType object ( Enum ) Enum geographyType object ( Geography ) Geography Bytes JSON representation { "encoding" : { object ( Encoding ) } } Fields encoding object ( Encoding ) The encoding to use when converting to or from lower level types.
- Table JSON representation { "name" : string , "clusterStates" : { string : { object ( ClusterState ) } , ... } , "columnFamilies" : { string : { object ( ColumnFamily ) } , ... } , "granularity" : enum ( TimestampGranularity ) , "restoreInfo" : { object ( RestoreInfo ) } , "changeStreamConfig" : { object ( ChangeStreamConfig ) } , "deletionProtection" : boolean , "stats" : { object ( TableStats ) } , "tieredStorageConfig" : { object ( TieredStorageConfig ) } , "rowKeySchema" : { object ( Struct ) } , // Union field automated backup config can be only one of the following: "automatedBackupPolicy" : { object ( AutomatedBackupPolicy ) } // End of list of possible types for union field automated backup config . } Fields name string The unique name of the table.
- Type JSON representation { // Union field kind can be only one of the following: "bytesType" : { object ( Bytes ) } , "stringType" : { object ( String ) } , "int64Type" : { object ( Int64 ) } , "float32Type" : { object ( Float32 ) } , "float64Type" : { object ( Float64 ) } , "boolType" : { object ( Bool ) } , "timestampType" : { object ( Timestamp ) } , "dateType" : { object ( Date ) } , "aggregateType" : { object ( Aggregate ) } , "structType" : { object ( Struct ) } , "arrayType" : { object ( Array ) } , "mapType" : { object ( Map ) } , "protoType" : { object ( Proto ) } , "enumType" : { object ( Enum ) } , "geographyType" : { object ( Geography ) } // End of list of possible types for union field kind . } Fields Union field kind .
- Compatible with: Java Instant.truncatedTo() with ChronoUnit.MICROS Aggregate JSON representation { "inputType" : { object ( Type ) } , "stateType" : { object ( Type ) } , // Union field aggregator can be only one of the following: "sum" : { object ( Sum ) } , "hllppUniqueCount" : { object ( HyperLogLogPlusPlusUniqueCount ) } , "max" : { object ( Max ) } , "min" : { object ( Min ) } // End of list of possible types for union field aggregator . } Fields inputType object ( Type ) Type of the inputs that are accumulated by this Aggregate .

### "MCP Tools Reference: bigtableadmin.googleapis.com \_|\_ Bigtable \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/get_table](https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/get_table)
- Source ID: `site-docs-reference`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- The kind of type that this represents. kind can be only one of the following: bytesType object ( Bytes ) Bytes stringType object ( String ) String int64Type object ( Int64 ) Int64 float32Type object ( Float32 ) Float32 float64Type object ( Float64 ) Float64 boolType object ( Bool ) Bool timestampType object ( Timestamp ) Timestamp dateType object ( Date ) Date aggregateType object ( Aggregate ) Aggregate structType object ( Struct ) Struct arrayType object ( Array ) Array mapType object ( Map ) Map protoType object ( Proto ) Proto enumType object ( Enum ) Enum geographyType object ( Geography ) Geography Bytes JSON representation { "encoding" : { object ( Encoding ) } } Fields encoding object ( Encoding ) The encoding to use when converting to or from lower level types.
- Table JSON representation { "name" : string , "clusterStates" : { string : { object ( ClusterState ) } , ... } , "columnFamilies" : { string : { object ( ColumnFamily ) } , ... } , "granularity" : enum ( TimestampGranularity ) , "restoreInfo" : { object ( RestoreInfo ) } , "changeStreamConfig" : { object ( ChangeStreamConfig ) } , "deletionProtection" : boolean , "stats" : { object ( TableStats ) } , "tieredStorageConfig" : { object ( TieredStorageConfig ) } , "rowKeySchema" : { object ( Struct ) } , // Union field automated backup config can be only one of the following: "automatedBackupPolicy" : { object ( AutomatedBackupPolicy ) } // End of list of possible types for union field automated backup config . } Fields name string The unique name of the table.
- Type JSON representation { // Union field kind can be only one of the following: "bytesType" : { object ( Bytes ) } , "stringType" : { object ( String ) } , "int64Type" : { object ( Int64 ) } , "float32Type" : { object ( Float32 ) } , "float64Type" : { object ( Float64 ) } , "boolType" : { object ( Bool ) } , "timestampType" : { object ( Timestamp ) } , "dateType" : { object ( Date ) } , "aggregateType" : { object ( Aggregate ) } , "structType" : { object ( Struct ) } , "arrayType" : { object ( Array ) } , "mapType" : { object ( Map ) } , "protoType" : { object ( Proto ) } , "enumType" : { object ( Enum ) } , "geographyType" : { object ( Geography ) } // End of list of possible types for union field kind . } Fields Union field kind .
- Compatible with: Java Instant.truncatedTo() with ChronoUnit.MICROS Aggregate JSON representation { "inputType" : { object ( Type ) } , "stateType" : { object ( Type ) } , // Union field aggregator can be only one of the following: "sum" : { object ( Sum ) } , "hllppUniqueCount" : { object ( HyperLogLogPlusPlusUniqueCount ) } , "max" : { object ( Max ) } , "min" : { object ( Min ) } // End of list of possible types for union field aggregator . } Fields inputType object ( Type ) Type of the inputs that are accumulated by this Aggregate .

