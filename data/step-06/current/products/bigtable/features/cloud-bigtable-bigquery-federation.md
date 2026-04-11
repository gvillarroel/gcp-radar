---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:35:45.365Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Cloud Bigtable-BigQuery federation"
feature_slug: "cloud-bigtable-bigquery-federation"
latest_feature_date: "2022-08-12"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users"
  - "https://docs.cloud.google.com/bigtable/docs/bigquery-analysis"
  - "https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/create_table"
keywords:
  - "federation"
  - "allowing"
  - "query"
  - "supports"
  - "bigtable"
  - "with"
  - "now"
  - "to"
---

# Cloud Bigtable-BigQuery federation

Product: Bigtable
Coverage: LOW

## Step 02 Summary

Cloud Bigtable now supports federation with BigQuery, allowing BigQuery to query Bigtable data and combine it with other sources.

## Extended Definition

Cloud Bigtable now supports federation with BigQuery, allowing BigQuery to query Bigtable data and combine it with other sources.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- [https://docs.cloud.google.com/bigtable/docs/bigquery-analysis](https://docs.cloud.google.com/bigtable/docs/bigquery-analysis)
- [https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/create_table](https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/create_table)

## Supporting Pages

### Bigtable for Cassandra users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- In a blog post (2012) , Ilya Grigorik writes the following: "An SSTable is a simple abstraction to efficiently store large numbers of key-value pairs while optimizing for high throughput, sequential read or write workloads." The following table outlines and describes shared concepts and the corresponding terminology that each product uses: Cassandra Bigtable primary key : a unique single or multi-field value that determines data placement and ordering. partition key : a single or multi-field value that determines data placement by consistent hash. clustering column : a single or multi-field value that determines the lexicographical data sorting within a partition. row key : a unique, single byte string that determines the placement of data by a lexicographical sort.
- With Bigtable, you can build applications with large, dynamic collections without the performance trade-offs required by Cassandra, for the following reasons: Bigtable stores collection elements as individual cells, so that operations on elements are highly granular.
- When querying Bigtable using SQL, column families are treated like Cassandra's maps . map key : key that uniquely identifies a key-value entry in a Cassandra map column qualifier : a label for a value stored in a table that's indexed by the unique row key.
- When querying Bigtable using SQL, columns are treated like keys of a map . column : the label for a value stored in a table that's indexed by the unique primary key. column : the label for a value stored in a table that's indexed by the unique row key.

### Query and analyze Bigtable data with BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/bigquery-analysis](https://docs.cloud.google.com/bigtable/docs/bigquery-analysis)
- Source ID: `site-docs-root-2`
- Final score: 162
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Examples in GoogleSQL syntax of limiting the query include the following: WHERE rowkey = "abc123" WHERE rowkey BETWEEN "abc123" PRECEDING AND "abc999" FOLLOWING WHERE rowkey > 999999 (if you read the row key as a string) Joins If you plan to use a join to analyze your Bigtable table data in conjunction with data from another source, you should create a subquery that extracts the relevant fields from Bigtable for the planned join.
- Recommended configurations We recommend the following best practices when you create your external table: To avoid impacting your application-serving traffic, use Data Boost serverless compute when you read Bigtable data with BigQuery external tables.
- Before you read this page you should be familiar with the Bigtable overview and BigQuery overview Using BigQuery to query a Bigtable table is ideal for tables that have the same column families and column qualifiers in every row.
- Query data in the external table After you have an external table for your Bigtable table, you can send SQL queries to it using one of the following methods: At the command line using bq , the BigQuery CLI Calls to the BigQuery API Any of the BigQuery client libraries To learn how to compose and run a query, see Run a query .

### "MCP Tools Reference: bigtableadmin.googleapis.com \_|\_ Bigtable \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/create_table](https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/create_table)
- Source ID: `site-docs-reference`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Databases Bigtable Reference Send feedback MCP Tools Reference: bigtableadmin.googleapis.com Stay organized with collections Save and categorize content based on your preferences.
- For example, if key = "some id#2024-04-30#\x00\x13\x00\xf3" with the following schema: { fields { field name: "id" type { string { encoding: utf8 bytes {} } } } fields { field name: "date" type { string { encoding: utf8 bytes {} } } } fields { field name: "product code" type { int64 { encoding: big endian bytes {} } } } encoding { delimited bytes { delimiter: "#" } } } The decoded key parts would be: id = "some id", date = "2024-04-30", product code = 1245427 The query "SELECT key, product code FROM table" will return two columns: /------------------------------------------------------\ key product code -------------------------------------- -------------- "some id#2024-04-30#\x00\x13\x00\xf3" 1245427 ------------------------------------------------------/ The schema has the following invariants: (1) The decoded field values are order-preserved.
- Curl Request curl --location 'https://bigtableadmin.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "create table", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema Request message for Bigtable.CreateTable CreateTableRequest JSON representation { "projectId" : string , "instanceId" : string , "tableId" : string , "columnFamilies" : [ string ] } Fields projectId string Required.
- Compatible with: Java Instant.truncatedTo() with ChronoUnit.MICROS Aggregate JSON representation { "inputType" : { object ( Type ) } , "stateType" : { object ( Type ) } , // Union field aggregator can be only one of the following: "sum" : { object ( Sum ) } , "hllppUniqueCount" : { object ( HyperLogLogPlusPlusUniqueCount ) } , "max" : { object ( Max ) } , "min" : { object ( Min ) } // End of list of possible types for union field aggregator . } Fields inputType object ( Type ) Type of the inputs that are accumulated by this Aggregate .

