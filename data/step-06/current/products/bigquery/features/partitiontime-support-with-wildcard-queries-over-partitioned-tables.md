---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.866Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "_PARTITIONTIME support with wildcard queries over partitioned tables"
feature_slug: "partitiontime-support-with-wildcard-queries-over-partitioned-tables"
latest_feature_date: "2017-11-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/partitioned-tables"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-cmek"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-from-template"
keywords:
  - "partitiontime"
  - "wildcard"
  - "queries"
  - "over"
  - "partitioned"
  - "tables"
  - "bigquery"
  - "supports"
---

# _PARTITIONTIME support with wildcard queries over partitioned tables

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports the _PARTITIONTIME pseudocolumn in wildcard table queries over partitioned tables.

## Extended Definition

BigQuery supports the _PARTITIONTIME pseudocolumn in wildcard table queries over partitioned tables.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/partitioned-tables](https://docs.cloud.google.com/bigquery/docs/partitioned-tables)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-cmek](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-cmek)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-from-template](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-from-template)

## Supporting Pages

### "Copy a table with customer-managed encryption keys (CMEK) \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-cmek](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-cmek)
- Source ID: `site-docs-reference-required-15`
- Final score: 48
- Re-rank relevance: N/A

Evidence snippets:
- BigQuery bigquery = BigQueryOptions . getDefaultInstance (). getService (); TableId sourceTable = TableId . of ( sourceDatasetName , sourceTableId ); TableId destinationTable = TableId . of ( destinationDatasetName , destinationTableId ); // For more information on CopyJobConfiguration see: // https://googleapis.dev/java/google-cloud-clients/latest/com/google/cloud/bigquery/JobConfiguration.html CopyJobConfiguration configuration = CopyJobConfiguration . newBuilder ( destinationTable , sourceTable ) . setDestinationEncryptionConfiguration ( encryption ) . build (); // For more information on Job see: // https://googleapis.dev/java/google-cloud-clients/latest/index.html?com/google/cloud/bigquery/package-summary.html Job job = bigquery . create ( JobInfo . of ( configuration )); // Blocks until this job completes its execution, either failing or succeeding.
- Job completedJob = job . waitFor (); if ( completedJob == null ) { System . out . println ( "Job not executed since it no longer exists." ); return ; } else if ( completedJob . getStatus (). getError () != null ) { System . out . println ( "BigQuery was unable to copy table due to an error: \n" + job . getStatus (). getError ()); return ; } System . out . println ( "Table cmek copied successfully." ); } catch ( BigQueryException InterruptedException e ) { System . out . println ( "Table cmek copying job was interrupted. \n" + e . toString ()); } } } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- For more information, see Set up authentication for client libraries . import ( "context" "fmt" "cloud.google.com/go/bigquery" ) // copyTableWithCMEK demonstrates creating a copy of a table and ensuring the copied data is // protected with a customer managed encryption key. func copyTableWithCMEK ( projectID , datasetID , tableID string ) error { // projectID := "my-project-id" // datasetID := "mydataset" // tableID := "mytable" ctx := context .
- Explore further For detailed documentation that includes this code sample, see the following: Customer-managed Cloud KMS keys Code sample Go Before trying this sample, follow the Go setup instructions in the BigQuery quickstart using client libraries .

### Create a table using a template \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-from-template](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-from-template)
- Source ID: `site-docs-reference-required-15`
- Final score: 46
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for client libraries . import ( "context" "fmt" "cloud.google.com/go/bigquery" ) // createTableFromTemplateTable demonstrates how to use the properties of one // table (schema, partitioning, clustering) to create a new empty table with // the same configuration. func createTableFromTemplateTable ( srcProjectID , srcDatasetID , srcTableID , dstProjectID , dstDatasetID , dstTableID string ) error { // srcProjectID := "bigquery-public-data" // srcDatasetID := "samples" // srcTableID := "shakespeare" // dstProjectID := "my-project-id" // dstDatasetID := "mydataset" // dstTableID := "mytable" ctx := context .
- Home Documentation Data analytics BigQuery Samples Create a table using a template Stay organized with collections Save and categorize content based on your preferences.
- Other properties to consider include // attributes like expiration policy and managed encryption settings. dstMeta := & bigquery .
- Code sample Go Before trying this sample, follow the Go setup instructions in the BigQuery quickstart using client libraries .

### Introduction to partitioned tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/partitioned-tables](https://docs.cloud.google.com/bigquery/docs/partitioned-tables)
- Source ID: `site-docs-root`
- Final score: 43
- Re-rank relevance: N/A

Evidence snippets:
- Table pricing When you create and use partitioned tables in BigQuery, your charges are based on how much data is stored in the partitions and on the queries you run against the data: For information on storage pricing, see Storage pricing .
- Quotas and limits for jobs against partitioned tables Quotas and limits also apply to the different types of jobs you can run against partitioned tables, including: Loading data (load jobs) Exporting data (extract jobs) Querying data (query jobs) Copying tables (copy jobs) Number of partition modifications for column-partitioned tables quota errors BigQuery returns this error when your column-partitioned table reaches the quota of the number of partition modifications permitted per day.
- For best practices for controlling costs in BigQuery, see Controlling costs in BigQuery Table security Access control for partitioned tables is the same as access control for standard tables.
- Partitioning is recommended over table sharding, because partitioned tables perform better.

