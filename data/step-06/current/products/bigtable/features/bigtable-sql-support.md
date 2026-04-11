---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:35:45.332Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Bigtable SQL support"
feature_slug: "bigtable-sql-support"
latest_feature_date: "2025-04-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/list_tables"
  - "https://docs.cloud.google.com/bigtable/docs/release-notes"
  - "https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/create_table"
keywords:
  - "generally"
  - "sql"
  - "available"
  - "bigtable"
  - "now"
  - "is"
---

# Bigtable SQL support

Product: Bigtable
Coverage: LOW

## Step 02 Summary

Bigtable SQL support is now generally available.

## Extended Definition

Bigtable SQL support is now generally available.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/list_tables](https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/list_tables)
- [https://docs.cloud.google.com/bigtable/docs/release-notes](https://docs.cloud.google.com/bigtable/docs/release-notes)
- [https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/create_table](https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/create_table)

## Supporting Pages

### "MCP Tools Reference: bigtableadmin.googleapis.com \_|\_ Bigtable \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/list_tables](https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/list_tables)
- Source ID: `site-docs-reference`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- If it could not be determined whether or not the table has data in a particular cluster (for example, if its zone is unavailable), then there will be an entry for the cluster with UNKNOWN replication status .
- Curl Request curl --location 'https://bigtableadmin.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "list tables", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema Request message for google.bigtable.admin.v2.BigtableTableAdmin.ListTables ListTablesRequest JSON representation { "parent" : string , "view" : enum ( View ) , "pageSize" : integer , "pageToken" : string } Fields parent string Required.
- Output Schema Response message for google.bigtable.admin.v2.BigtableTableAdmin.ListTables ListTablesResponse JSON representation { "tables" : [ { object ( Table ) } ] , "nextPageToken" : string } Fields tables[] object ( Table ) The tables present in the requested instance. nextPageToken string Set if not all tables could be returned in a single response.
- Therefore, binary compatibility needs to be preserved on changes to types. (Use versioned type names to manage breaking changes.) Note: this functionality is not currently available in the official protobuf release, and it is not used for type URLs beginning with type.googleapis.com.

### Bigtable release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/release-notes](https://docs.cloud.google.com/bigtable/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- Node.js Changes for @google-cloud/bigtable 4.1.0 (2022-09-26) Features Publish the RequestStats proto ( #1177 ) ( 89dfc83 ) 4.0.5 (2022-09-23) Bug Fixes Test is less restrictive to allow changes ( #1160 ) ( 7d05b96 ) Java Changes for google-cloud-bigtable 2.13.0 (2022-09-27) Features Add gRPC RLS dependency ( #1248 ) ( e829b92 ) Bug Fixes Add a UUID in the task value ( #1430 ) ( 3bfc7bc ) Dependencies Update dependency com.google.cloud:google-cloud-monitoring-bom to v3.4.5 ( #1406 ) ( d906729 ) Update dependency org.graalvm.buildtools:junit-platform-native to v0.9.14 ( #1411 ) ( ef7d741 ) Update dependency org.graalvm.buildtools:native-maven-plugin to v0.9.14 ( #1412 ) ( dcae319 ) Update dependency org.junit.vintage:junit-vintage-engine to v5.9.1 ( #1409 ) ( c1e195d ) September 29, 2022 Feature The Cloud Bigtable observability metric high-granularity CPU utilization of hottest node is now generally available (GA) .
- Java Changes for google-cloud-bigtable 2.10.3 (2022-08-08) Bug Fixes Declare 2 http libraries as runtime ( #1341 ) ( 8071de6 ) 2.10.2 (2022-08-03) Bug Fixes Add a ReadFirstRow callable to set future in onComplete ( #1326 ) ( cb539b5 ) The metadata could be returned in trailer or header depends on i… ( #1337 ) ( c4b8c03 ) Dependencies Update dependency com.google.cloud:google-cloud-shared-dependencies to v3 ( #1328 ) ( bee0ca0 ) Upgrade shared config to 1.5.3, exclude google-http-client and google-http-client-gson from gax in google-cloud-bigtable-stats ( #1336 ) ( 98b3349 ) Python Changes for google-cloud-bigtable 2.11.1 (2022-08-08) Bug Fixes Retry the RST Stream error in mutate rows and read rows( #624 ) ( d24574a ) August 12, 2022 Feature Cloud Bigtable-BigQuery federation is now generally available (GA) .
- Libraries Java 2.63.0 (2025-07-30) Features Add Idempotency to Cloud Bigtable MutateRowsRequest API ( bc58b4f ) Add port as a parameter for the bigtable emulator ( #2645 ) ( 5acd3dc ) Add type support for Proto and Enum ( bc58b4f ) Publish Proto and Enum types to CBT data API ( ace12d5 ) Selective GAPIC autogeneration for Python Bigtable Admin ( e219c38 ) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.60.2 ( e219c38 ) Update routing parameters.path template ( e219c38 ) Dependencies Update sdk-platorm-java-config to 3.50.2 ( #2646 ) ( 03e6961 ) Documentation Sync generated comments from the API Protos ( bc58b4f ) July 31, 2025 Feature Logical views for Bigtable are now generally available ( GA ).
- March 03, 2025 Libraries Python 2.29.0 (2025-02-26) Features Add support for array and float32 SQL query params ( #1078 ) ( 89b8da8 ) Bug Fixes Grpc channel refresh ( #1087 ) ( f44b36b ) Java 2.53.0 (2025-02-21) Features Skip large rows ( #2482 ) ( cd7f82e ) February 24, 2025 Feature Bigtable Data Boost , a serverless compute service designed for high-throughput read jobs and queries, is generally available (GA) .

### "MCP Tools Reference: bigtableadmin.googleapis.com \_|\_ Bigtable \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/create_table](https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/create_table)
- Source ID: `site-docs-reference`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- If it could not be determined whether or not the table has data in a particular cluster (for example, if its zone is unavailable), then there will be an entry for the cluster with UNKNOWN replication status .
- Curl Request curl --location 'https://bigtableadmin.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "create table", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema Request message for Bigtable.CreateTable CreateTableRequest JSON representation { "projectId" : string , "instanceId" : string , "tableId" : string , "columnFamilies" : [ string ] } Fields projectId string Required.
- Therefore, binary compatibility needs to be preserved on changes to types. (Use versioned type names to manage breaking changes.) Note: this functionality is not currently available in the official protobuf release, and it is not used for type URLs beginning with type.googleapis.com.
- Home Documentation Databases Bigtable Reference Send feedback MCP Tools Reference: bigtableadmin.googleapis.com Stay organized with collections Save and categorize content based on your preferences.

