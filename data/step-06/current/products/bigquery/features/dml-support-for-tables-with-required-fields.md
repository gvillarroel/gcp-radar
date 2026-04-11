---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.896Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "DML support for tables with required fields"
feature_slug: "dml-support-for-tables-with-required-fields"
latest_feature_date: "2017-07-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/tables"
  - "https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas"
keywords:
  - "required field DML"
  - "REQUIRED mode DML"
  - "required fields"
  - "required columns"
  - "mode=REQUIRED"
  - "INSERT statement"
  - "UPDATE statement"
  - "DML statements"
---

# DML support for tables with required fields

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery added support for modifying tables that contain required fields using DML statements.

## Extended Definition

BigQuery added support for modifying tables that contain required fields using DML statements.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- [https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas](https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas)

## Supporting Pages

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for client libraries . use Google\Cloud\BigQuery\BigQueryClient; / Uncomment and populate these variables in your code / // $projectId = 'The Google project ID'; // $datasetId = 'The BigQuery dataset ID'; // $tableId = 'The BigQuery table ID'; // $fields = [ // [ // 'name' => 'field1', // 'type' => 'string', // 'mode' => 'required' // ], // [ // 'name' => 'field2', // 'type' => 'integer' // ], //]; $bigQuery = new BigQueryClient([ 'projectId' => $projectId, ]); $dataset = $bigQuery->dataset($datasetId); $schema = ['fields' => $fields]; $table = $dataset->createTable($tableId, ['schema' => $schema]); printf('Created table %s' .
- The managed table type; one of the following: NATIVE : A standard table BIGLAKE : A BigLake table for Apache Iceberg in BigQuery is insertable into STRING YES or NO depending on whether the table supports DML INSERT statements is fine grained mutations enabled STRING YES or NO depending on whether fine-grained DML mutations are enabled on the table is typed STRING The value is always NO is change history enabled STRING YES or NO depending on whether change history is enabled creation time TIMESTAMP The table's creation time base table catalog STRING For table clones and table snapshots , the base table's project.
- SchemaField ( "age" , "INTEGER" , mode = "REQUIRED" ), ] table = bigquery .
- SchemaField ( "full name" , "STRING" , mode = "REQUIRED" ), bigquery .

### Troubleshoot quota and limit errors \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas](https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas)
- Source ID: `site-docs-root`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- Too many DML statements outstanding against table This error means that the number of concurrent mutating DML statements ( UPDATE , DELETE , MERGE ) running against the same table has exceeded the data manipulation language (DML) quota limit .
- This quota limit is per table, and applies to mutating DML statements only, which does not include INSERT .
- Resolution Batch the DML jobs by following Best practices for DML statements .

