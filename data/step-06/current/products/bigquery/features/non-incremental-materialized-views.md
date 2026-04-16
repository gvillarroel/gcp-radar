---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.611Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Non-incremental materialized views"
feature_slug: "non-incremental-materialized-views"
latest_feature_date: "2023-04-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/salesforce-quickstart"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-materialized-view"
keywords:
  - "non"
  - "incremental"
  - "materialized"
  - "views"
  - "broader"
  - "set"
  - "sql"
  - "queries"
---

# Non-incremental materialized views

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Non-incremental materialized views support a broader set of SQL queries including OUTER JOIN, UNION, HAVING, and analytic functions.

## Extended Definition

Non-incremental materialized views support a broader set of SQL queries including OUTER JOIN, UNION, HAVING, and analytic functions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/salesforce-quickstart](https://docs.cloud.google.com/bigquery/docs/salesforce-quickstart)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-materialized-view](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-materialized-view)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- NAME and VALUE must be one of the following combinations: NAME VALUE Details enable refresh BOOLEAN Example: enable refresh=false Default: true refresh interval minutes FLOAT64 Example: refresh interval minutes=20 Default: refresh interval minutes=30 expiration timestamp TIMESTAMP Example: expiration timestamp=TIMESTAMP "2025-01-01 00:00:00 UTC" This property is equivalent to the expirationTime table resource property. expiration timestamp is optional and not used by default. max staleness INTERVAL Example: max staleness=INTERVAL "4:0:0" HOUR TO SECOND The max staleness property provides consistently high performance with controlled costs when processing large, frequently changing datasets. max staleness is disabled by default. allow non incremental definition BOOLEAN Example: allow non incremental definition=true The allow non incremental definition property supports an expanded range of SQL queries to create materialized views. allow non incremental definition=true is disabled by default.
- NAME and VALUE must be one of the following combinations: NAME VALUE Details enable refresh BOOLEAN Example: enable refresh=false Default: true refresh interval minutes FLOAT64 Example: refresh interval minutes=20 Default: refresh interval minutes=30 expiration timestamp TIMESTAMP Example: expiration timestamp=TIMESTAMP "2025-01-01 00:00:00 UTC" This property is equivalent to the expirationTime table resource property. expiration timestamp is optional and not used by default. max staleness INTERVAL Example: max staleness=INTERVAL "4:0:0" HOUR TO SECOND The max staleness property provides consistently high performance with controlled costs when processing large, frequently changing datasets. max staleness is disabled by default. allow non incremental definition BOOLEAN Example: allow non incremental definition=true The allow non incremental definition property supports an expanded range of SQL queries to create materialized views. allow non incremental definition=true is disabled by default.
- Example The following example deletes the my cloud resource connection connection: DROP CONNECTION IF EXISTS us.my cloud resource connection ; Table path syntax Use the following syntax when specifying the path of a table resource , including standard tables, views, materialized views, external tables, and table snapshots. table path := [[ project name . ] dataset name . ] table name project name : The name of the project that contains the table resource.
- The allow non incremental definition property can't be changed after the materialized view is created. kms key name STRING Example: kms key name="projects/ project id /locations/ location /keyRings/ keyring /cryptoKeys/ key " This property is equivalent to the encryptionConfiguration.kmsKeyName table resource property.

### Work with Salesforce Data Cloud data in BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/salesforce-quickstart](https://docs.cloud.google.com/bigquery/docs/salesforce-quickstart)
- Source ID: `site-docs-reference-2`
- Final score: 106
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cross cloud materialized views Cross Cloud Materialized Views ( CCMV ) transfer data from a BigQuery Omni region to a non-BigQuery Omni BigQuery region incrementally.
- CREATE MATERIALIZED VIEW us data.total sales replica AS REPLICA OF aws data.total sales ; Run a query on a replica materialized view The following example runs a query on a replica materialized view: -- Find total sales for the current month for the dashboard SELECT EXTRACT ( MONTH FROM CURRENT DATE ()) as month , SUM ( sales ) FROM us data . total sales replica WHERE month = EXTRACT ( MONTH FROM date ) GROUP BY 1 Using Data Cloud data with INFORMATION SCHEMA Data Cloud datasets support BigQuery INFORMATION SCHEMA views.
- Create a local materialized view To create a local materialized view: -- Create a local materialized view that keeps track of total sales by day CREATE MATERIALIZED VIEW aws data.total sales OPTIONS ( enable refresh = true , refresh interval minutes = 60 ) AS SELECT EXTRACT ( DAY FROM order time ) AS date , SUM ( order total ) as sales FROM listing nto john.nto orders dll GROUP BY 1 ; Authorize the materialized view You must authorize materialized views to create a CCMV.
- Learn about materialized views .

### Create materialized view \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-materialized-view](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-materialized-view)
- Source ID: `site-docs-reference-required-15`
- Final score: 94
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see the Terraform provider reference documentation . resource "google bigquery dataset" "default" { dataset id = "mydataset" default partition expiration ms = 2592000000 # 30 days default table expiration ms = 31536000000 # 365 days description = "dataset description" location = "US" max time travel hours = 96 # 4 days labels = { billing group = "accounting" , pii = "sensitive" } } resource "google bigquery table" "default" { dataset id = google bigquery dataset.default.dataset id table id = "my materialized view" materialized view { query = "SELECT ID, description, date created FROM myproject.orders.items" enable refresh = "true" refresh interval ms = 172800000 # 2 days allow non incremental definition = "false" } } What's next To search and filter code samples for other Google Cloud products, see the Google Cloud sample browser .
- Explore further For detailed documentation that includes this code sample, see the following: Create materialized views Code sample Go Before trying this sample, follow the Go setup instructions in the BigQuery quickstart using client libraries .
- BigQuery bigquery = BigQueryOptions . getDefaultInstance (). getService (); TableId tableId = TableId . of ( datasetName , materializedViewName ); MaterializedViewDefinition materializedViewDefinition = MaterializedViewDefinition . newBuilder ( query ). build (); bigquery . create ( TableInfo . of ( tableId , materializedViewDefinition )); System . out . println ( "Materialized view created successfully" ); } catch ( BigQueryException e ) { System . out . println ( "Materialized view was not created. \n" + e . toString ()); } } } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- String datasetName = "MY DATASET NAME" ; String tableName = "MY TABLE NAME" ; String materializedViewName = "MY MATERIALIZED VIEW NAME" ; String query = String . format ( "SELECT MAX(TimestampField) AS TimestampField, StringField, " + "MAX(BooleanField) AS BooleanField " + "FROM %s.%s GROUP BY StringField" , datasetName , tableName ); createMaterializedView ( datasetName , materializedViewName , query ); } public static void createMaterializedView ( String datasetName , String materializedViewName , String query ) { try { // Initialize client that will be used to send requests.

