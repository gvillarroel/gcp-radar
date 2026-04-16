---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.286Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Spanner non-incremental materialized views"
feature_slug: "spanner-non-incremental-materialized-views"
latest_feature_date: "2025-09-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-materialized-view"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/salesforce-quickstart"
keywords:
  - "spanner"
  - "non"
  - "incremental"
  - "materialized"
  - "views"
  - "bigquery"
  - "can"
  - "create"
---

# Spanner non-incremental materialized views

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery can create non-incremental materialized views over Spanner data to periodically cache query results.

## Extended Definition

BigQuery can create non-incremental materialized views over Spanner data to periodically cache query results.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-materialized-view](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-materialized-view)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/salesforce-quickstart](https://docs.cloud.google.com/bigquery/docs/salesforce-quickstart)

## Supporting Pages

### Create materialized view \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-materialized-view](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-materialized-view)
- Source ID: `site-docs-reference-required-15`
- Final score: 146
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see the Terraform provider reference documentation . resource "google bigquery dataset" "default" { dataset id = "mydataset" default partition expiration ms = 2592000000 # 30 days default table expiration ms = 31536000000 # 365 days description = "dataset description" location = "US" max time travel hours = 96 # 4 days labels = { billing group = "accounting" , pii = "sensitive" } } resource "google bigquery table" "default" { dataset id = google bigquery dataset.default.dataset id table id = "my materialized view" materialized view { query = "SELECT ID, description, date created FROM myproject.orders.items" enable refresh = "true" refresh interval ms = 172800000 # 2 days allow non incremental definition = "false" } } What's next To search and filter code samples for other Google Cloud products, see the Google Cloud sample browser .
- Explore further For detailed documentation that includes this code sample, see the following: Create materialized views Code sample Go Before trying this sample, follow the Go setup instructions in the BigQuery quickstart using client libraries .
- BigQuery bigquery = BigQueryOptions . getDefaultInstance (). getService (); TableId tableId = TableId . of ( datasetName , materializedViewName ); MaterializedViewDefinition materializedViewDefinition = MaterializedViewDefinition . newBuilder ( query ). build (); bigquery . create ( TableInfo . of ( tableId , materializedViewDefinition )); System . out . println ( "Materialized view created successfully" ); } catch ( BigQueryException e ) { System . out . println ( "Materialized view was not created. \n" + e . toString ()); } } } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- For more information, see Set up authentication for client libraries . import ( "context" "fmt" "cloud.google.com/go/bigquery" ) // createMaterializedView demonstrates generated a materialized view based on an existing // base table. func createMaterializedView ( projectID , datasetID , baseTableID , viewID string ) error { // projectID := "my-project-id" // datasetID := "mydatasetid" // baseTableID := "mytableid" // viewID := "myviewid" ctx := context .

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- NAME and VALUE must be one of the following combinations: NAME VALUE Details enable refresh BOOLEAN Example: enable refresh=false Default: true refresh interval minutes FLOAT64 Example: refresh interval minutes=20 Default: refresh interval minutes=30 expiration timestamp TIMESTAMP Example: expiration timestamp=TIMESTAMP "2025-01-01 00:00:00 UTC" This property is equivalent to the expirationTime table resource property. expiration timestamp is optional and not used by default. max staleness INTERVAL Example: max staleness=INTERVAL "4:0:0" HOUR TO SECOND The max staleness property provides consistently high performance with controlled costs when processing large, frequently changing datasets. max staleness is disabled by default. allow non incremental definition BOOLEAN Example: allow non incremental definition=true The allow non incremental definition property supports an expanded range of SQL queries to create materialized views. allow non incremental definition=true is disabled by default.
- NAME and VALUE must be one of the following combinations: NAME VALUE Details enable refresh BOOLEAN Example: enable refresh=false Default: true refresh interval minutes FLOAT64 Example: refresh interval minutes=20 Default: refresh interval minutes=30 expiration timestamp TIMESTAMP Example: expiration timestamp=TIMESTAMP "2025-01-01 00:00:00 UTC" This property is equivalent to the expirationTime table resource property. expiration timestamp is optional and not used by default. max staleness INTERVAL Example: max staleness=INTERVAL "4:0:0" HOUR TO SECOND The max staleness property provides consistently high performance with controlled costs when processing large, frequently changing datasets. max staleness is disabled by default. allow non incremental definition BOOLEAN Example: allow non incremental definition=true The allow non incremental definition property supports an expanded range of SQL queries to create materialized views. allow non incremental definition=true is disabled by default.
- Example: replication interval seconds=900 Required permissions This statement requires the following IAM permissions : bigquery.tables.create bigquery.tables.get bigquery.tables.getData bigquery.tables.replicateData bigquery.jobs.create Example The following example creates a materialized view replica named mv replica in bq dataset : CREATE MATERIALIZED VIEW myproject . bq dataset . mv replica OPTIONS ( replication interval seconds = 600 ) AS REPLICA OF myproject.s3 dataset.my s3 mv CREATE EXTERNAL SCHEMA statement Creates a new federated dataset.
- You can use DDL commands to create, alter, and delete resources, such as the following: Datasets Tables Table schemas Table clones Table snapshots Views Connections User-defined functions (UDFs) Indexes Capacity commitments and reservations Row-level access policies Default configuration settings Required permissions To create a job that runs a DDL statement, you must have the bigquery.jobs.create permission for the project where you are running the job.

### Work with Salesforce Data Cloud data in BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/salesforce-quickstart](https://docs.cloud.google.com/bigquery/docs/salesforce-quickstart)
- Source ID: `site-docs-reference-2`
- Final score: 110
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CREATE MATERIALIZED VIEW us data.total sales replica AS REPLICA OF aws data.total sales ; Run a query on a replica materialized view The following example runs a query on a replica materialized view: -- Find total sales for the current month for the dashboard SELECT EXTRACT ( MONTH FROM CURRENT DATE ()) as month , SUM ( sales ) FROM us data . total sales replica WHERE month = EXTRACT ( MONTH FROM date ) GROUP BY 1 Using Data Cloud data with INFORMATION SCHEMA Data Cloud datasets support BigQuery INFORMATION SCHEMA views.
- Cross cloud materialized views Cross Cloud Materialized Views ( CCMV ) transfer data from a BigQuery Omni region to a non-BigQuery Omni BigQuery region incrementally.
- Create a local materialized view To create a local materialized view: -- Create a local materialized view that keeps track of total sales by day CREATE MATERIALIZED VIEW aws data.total sales OPTIONS ( enable refresh = true , refresh interval minutes = 60 ) AS SELECT EXTRACT ( DAY FROM order time ) AS date , SUM ( order total ) as sales FROM listing nto john.nto orders dll GROUP BY 1 ; Authorize the materialized view You must authorize materialized views to create a CCMV.
- In this example, we retrieve total sales for a customer named john . -- Get combined sales for a customer from both offline and online sales USING ( SELECT total price FROM listing nto john.nto orders dll WHERE customer name = 'john' UNION ALL SELECT total price FROM listing nto john.nto orders dll WHERE customer name = 'john' ) a SELECT SUM ( total price ); Cross Cloud Data Transfer through CTAS You can use Create Table As Select (CTAS) to move data from Data Cloud tables in the BigQuery Omni region to the US region. -- Move all the orders for March to the US region CREATE OR REPLACE TABLE us data . online orders march AS SELECT FROM listing nto john . nto orders dll WHERE EXTRACT ( MONTH FROM order time ) = 3 The destination table is a BigQuery managed table in the US region.

