---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.624Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Case-insensitive datasets and tables"
feature_slug: "case-insensitive-datasets-and-tables"
latest_feature_date: "2023-02-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/tables"
  - "https://docs.cloud.google.com/bigquery/docs/managing-datasets"
keywords:
  - "case"
  - "insensitive"
  - "datasets"
  - "tables"
  - "let"
  - "users"
  - "configure"
  - "dataset"
---

# Case-insensitive datasets and tables

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Case-insensitive datasets and tables let users configure dataset and table names to behave case-insensitively.

## Extended Definition

Case-insensitive datasets and tables let users configure dataset and table names to behave case-insensitively.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- [https://docs.cloud.google.com/bigquery/docs/managing-datasets](https://docs.cloud.google.com/bigquery/docs/managing-datasets)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 187
- Re-rank relevance: N/A

Evidence snippets:
- You can use DDL commands to create, alter, and delete resources, such as the following: Datasets Tables Table schemas Table clones Table snapshots Views Connections User-defined functions (UDFs) Indexes Capacity commitments and reservations Row-level access policies Default configuration settings Required permissions To create a job that runs a DDL statement, you must have the bigquery.jobs.create permission for the project where you are running the job.
- Tables: mytable and MyTable can coexist in the same dataset if case-sensitivity for the dataset is turned on. is primary BOOLEAN Declares if the dataset is the primary replica. labels <ARRAY<STRUCT<STRING, STRING>>> An array of labels for the dataset, expressed as key-value pairs. max time travel hours SMALLINT Specifies the duration in hours of the time travel window for the dataset.
- You can override this value when you create a table. description STRING The description of the dataset. failover reservation STRING Associates the dataset to a reservation in the case of a failover scenario. friendly name STRING A descriptive name for the dataset. is case insensitive BOOL TRUE if the dataset and its table names are case-insensitive, otherwise FALSE .
- You can override this value when you create a table. description STRING The description of the dataset. failover reservation STRING Associates the dataset to a reservation in the case of a failover scenario. friendly name STRING A descriptive name for the dataset. is case insensitive BOOL TRUE if the dataset and its table names are case-insensitive, otherwise FALSE .

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- TABLE STORAGE BY PROJECT WHERE total physical bytes + fail safe physical bytes > 0 -- Base the forecast on base tables only for highest precision results AND table type = 'BASE TABLE' GROUP BY 1 ) SELECT dataset name , -- Logical ROUND ( active logical gib , 2 ) AS active logical gib , ROUND ( long term logical gib , 2 ) AS long term logical gib , -- Physical ROUND ( active physical gib , 2 ) AS active physical gib , ROUND ( long term physical gib , 2 ) AS long term physical gib , ROUND ( time travel physical gib , 2 ) AS time travel physical gib , ROUND ( fail safe physical gib , 2 ) AS fail safe physical gib , -- Compression ratio ROUND ( SAFE DIVIDE ( active logical gib , active no tt physical gib ), 2 ) AS active compression ratio , ROUND ( SAFE DIVIDE ( long term logical gib , long term physical gib ), 2 ) AS long term compression ratio , -- Forecast costs logical ROUND ( active logical gib active logical gib price , 2 ) AS forecast active logical cost , ROUND ( long term logical gib long term logical gib price , 2 ) AS forecast long term logical cost , -- Forecast costs physical ROUND (( active no tt physical gib + time travel physical gib + fail safe physical gib ) active physical gib price , 2 ) AS forecast active physical cost , ROUND ( long term physical gib long term physical gib price , 2 ) AS forecast long term physical cost , -- Forecast costs total ROUND ((( active logical gib active logical gib price ) + ( long term logical gib long term logical gib price )) - ((( active no tt physical gib + time travel physical gib + fail safe physical gib ) active physical gib price ) + ( long term physical gib long term physical gib price )), 2 ) AS forecast total cost difference FROM storage sizes ORDER BY ( forecast active logical cost + forecast active physical cost ) DESC ; Note: INFORMATION SCHEMA view names are case-sensitive.
- Go to Logging Use the following query to access the audit data: logName = "projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Factivity" AND resource.type = "bigquery dataset" AND timestamp >= " STARTING TIMESTAMP " AND protoPayload.@type = "type.googleapis.com/google.cloud.audit.AuditLog" AND ( protoPayload.metadata.tableCreation : OR protoPayload.metadata.tableChange : OR protoPayload.metadata.tableDeletion : ) AND protoPayload.resourceName : "projects/ PROJECT ID /datasets/ DATASET ID /tables/" Replace the following: PROJECT ID : the project that contains datasets and tables you are interested in.
- Control access to tables To configure access to tables and views, you can grant an IAM role to an entity at the following levels, listed in order of range of resources allowed (largest to smallest): a high level in the Google Cloud resource hierarchy such as the project, folder, or organization level the dataset level the table or view level You can also restrict data access within tables, by using the following methods: column-level security column data masking row-level security Access with any resource protected by IAM is additive.
- View table properties print ( "Got table ' {} . {} . {} '." . format ( table . project , table . dataset id , table . table id ) ) print ( "Table schema: {} " . format ( table . schema )) print ( "Table description: {} " . format ( table . description )) print ( "Table has {} rows" . format ( table . num rows )) Get table information using INFORMATION SCHEMA INFORMATION SCHEMA is a series of views that provide access to metadata about datasets, routines, tables, views, jobs, reservations, and streaming data.

### Manage datasets \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/managing-datasets](https://docs.cloud.google.com/bigquery/docs/managing-datasets)
- Source ID: `site-docs-reference-required-11`
- Final score: 163
- Re-rank relevance: N/A

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to copy datasets: bigquery.transfers.update on the destination project bigquery.jobs.create on the destination project bigquery.datasets.get on the source and destination dataset bigquery.tables.list on the source and destination dataset bigquery.datasets.update on the destination dataset bigquery.tables.create on the destination dataset You might also be able to get these permissions with custom roles or other predefined roles .
- See the License for the specific language governing permissions and limitations under the License. require "google/cloud/bigquery" def delete dataset and contents dataset id = "my dataset with tables" bigquery = Google :: Cloud :: Bigquery . new Use the force parameter to delete a dataset and its contents dataset = bigquery . dataset dataset id dataset . delete force : true puts "Dataset #{ dataset id } and contents deleted." end Restore tables from deleted datasets You can restore tables from a deleted dataset that are within the dataset's time travel window .
- To copy a dataset to a project in another VPC Service Controls service perimeter , you need to set the following egress rules: In the destination project's VPC Service Controls service perimeter configuration, the IAM principal must have the following methods: bigquery.datasets.get bigquery.tables.list bigquery.tables.get , bigquery.tables.getData In the source project's VPC Service Controls service perimeter configuration, the IAM principal being used must have the method set to All Methods .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to delete datasets: bigquery.datasets.delete on the project bigquery.tables.delete on the project You might also be able to get these permissions with custom roles or other predefined roles .

