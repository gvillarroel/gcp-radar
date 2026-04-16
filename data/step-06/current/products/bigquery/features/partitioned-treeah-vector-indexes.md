---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.326Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Partitioned TreeAH vector indexes"
feature_slug: "partitioned-treeah-vector-indexes"
latest_feature_date: "2025-06-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-range-partitioned"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-external-hivepartitioned"
keywords:
  - "partitioned"
  - "treeah"
  - "vector"
  - "indexes"
  - "partition"
  - "clause"
  - "create"
  - "index"
---

# Partitioned TreeAH vector indexes

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The PARTITION BY clause in CREATE VECTOR INDEX can partition TreeAH vector indexes for partition pruning and lower I/O costs.

## Extended Definition

The PARTITION BY clause in CREATE VECTOR INDEX can partition TreeAH vector indexes for partition pruning and lower I/O costs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-range-partitioned](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-range-partitioned)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-external-hivepartitioned](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-external-hivepartitioned)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 208
- Re-rank relevance: N/A

Evidence snippets:
- If table T contains a column declared as x INT64 NOT NULL , for example, CREATE TABLE dataset.newtable AS SELECT x FROM T creates a table named dataset.newtable in which x is NULLABLE . partition expression PARTITION BY is an optional clause that controls table and vector index partitioning. partition expression is an expression that determines how to partition the table or vector index.
- You can only partition TreeAH indexes. ( Preview ) index option list : The list of options to set on the vector index.
- Syntax CREATE [ OR REPLACE ] VECTOR INDEX [ IF NOT EXISTS ] index name ON table name ( column name ) [ STORING ( stored column name [ , ... ] ) ] [ PARTITION BY partition expression ] OPTIONS ( index option list ); Arguments OR REPLACE : Replaces any vector index with the same name if it exists.
- To create an externally partitioned table, use the WITH PARTITION COLUMNS clause to specify the partition schema details.

### "Create an integer-range partitioned table \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-range-partitioned](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-range-partitioned)
- Source ID: `site-docs-reference-required-15`
- Final score: 165
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for client libraries . require "google/cloud/bigquery" Creates a table with range partitioning. @param dataset id [String] The ID of the dataset to create the table in. @param table id [String] The ID of the table to create. def create range partitioned table dataset id , table id bigquery = Google :: Cloud :: Bigquery . new dataset = bigquery . dataset dataset id table = dataset . create table table id do t t . schema do s s . integer "integerField" , mode : :required s . string "stringField" , mode : :nullable s . boolean "booleanField" , mode : :nullable s . date "dateField" , mode : :nullable end t . range partitioning field = "integerField" t . range partitioning start = 1 t . range partitioning interval = 2 t . range partitioning end = 10 end puts "Created range-partitioned table: #{ table . table id } " end Terraform To learn how to apply or remove a Terraform configuration, see Basic Terraform commands .
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function createTableRangePartitioned () { // Creates a new integer range partitioned table named "my table" // in "my dataset". / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = "my dataset"; // const tableId = "my table"; const schema = [ { name : 'fullName' , type : 'STRING' }, { name : 'city' , type : 'STRING' }, { name : 'zipcode' , type : ' INTEGER ' }, ]; // To use integer range partitioning, select a top-level REQUIRED or // NULLABLE column with INTEGER / INT64 data type.
- Range . newBuilder () . setStart ( 1L ) . setInterval ( 2L ) . setEnd ( 10L ) . build ()) . build (); StandardTableDefinition tableDefinition = StandardTableDefinition . newBuilder () . setSchema ( schema ) . setRangePartitioning ( partitioning ) . build (); TableInfo tableInfo = TableInfo . newBuilder ( tableId , tableDefinition ). build (); bigquery . create ( tableInfo ); System . out . println ( "Range partitioned table created successfully" ); } catch ( BigQueryException e ) { System . out . println ( "Range partitioned table was not created. \n" + e . toString ()); } } } Node.js Before trying this sample, follow the Node.js setup instructions in the BigQuery quickstart using client libraries .
- For more information, see Set up authentication for client libraries . import ( "context" "fmt" "cloud.google.com/go/bigquery" ) // createTableRangeParitioned demonstrates creating a table and specifying a // range partitioning configuration. func createTableRangePartitioned ( projectID , datasetID , tableID string ) error { // projectID := "my-project-id" // datasetID := "mydatasetid" // tableID := "mytableid" ctx := context .

### "Create external table with hive partitioning \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-external-hivepartitioned](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-external-hivepartitioned)
- Source ID: `site-docs-reference-required-15`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- String datasetName = "MY DATASET NAME" ; String tableName = "MY TABLE NAME" ; String sourceUri = "gs://cloud-samples-data/bigquery/hive-partitioning-samples/customlayout/ " ; String sourceUriPrefix = "gs://cloud-samples-data/bigquery/hive-partitioning-samples/customlayout/{pkey:STRING}/" ; createTableExternalHivePartitioned ( datasetName , tableName , sourceUriPrefix , sourceUri ); } public static void createTableExternalHivePartitioned ( String datasetName , String tableName , String sourceUriPrefix , String sourceUri ) { try { // Initialize client that will be used to send requests.
- For more information, see Set up authentication for client libraries . import ( "context" "fmt" "cloud.google.com/go/bigquery" ) // createTableExternalHivePartitioned demonstrates creating an external table with hive partitioning. func createTableExternalHivePartitioned ( projectID , datasetID , tableID string ) error { // projectID := "my-project-id" // datasetID := "mydatasetid" // tableID := "mytableid" ctx := context .
- TableInfo ; // Sample to create external table using hive partitioning public class CreateTableExternalHivePartitioned { public static void main ( String [] args ) { // TODO(developer): Replace these variables before running the sample.
- BigQuery bigquery = BigQueryOptions . getDefaultInstance (). getService (); // Configuring partitioning options HivePartitioningOptions hivePartitioningOptions = HivePartitioningOptions . newBuilder () . setMode ( "CUSTOM" ) . setRequirePartitionFilter ( true ) . setSourceUriPrefix ( sourceUriPrefix ) . build (); TableId tableId = TableId . of ( datasetName , tableName ); ExternalTableDefinition customTable = ExternalTableDefinition . newBuilder ( sourceUri , FormatOptions . parquet ()) . setAutodetect ( true ) . setHivePartitioningOptions ( hivePartitioningOptions ) . build (); bigquery . create ( TableInfo . of ( tableId , customTable )); System . out . println ( "External table created using hivepartitioningoptions" ); } catch ( BigQueryException e ) { System . out . println ( "External table was not created" + e . toString ()); } } } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .

