---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.512Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Query plan visibility for federated query SQL pushdowns"
feature_slug: "query-plan-visibility-for-federated-query-sql-pushdowns"
latest_feature_date: "2024-02-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
  - "https://docs.cloud.google.com/bigquery/docs/alloydb-federated-queries"
keywords:
  - "query"
  - "plan"
  - "visibility"
  - "federated"
  - "sql"
  - "pushdowns"
  - "bigquery"
  - "plans"
---

# Query plan visibility for federated query SQL pushdowns

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery query plans can show details of SQL pushdowns in federated queries.

## Extended Definition

BigQuery query plans can show details of SQL pushdowns in federated queries.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- [https://docs.cloud.google.com/bigquery/docs/alloydb-federated-queries](https://docs.cloud.google.com/bigquery/docs/alloydb-federated-queries)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- Example: replication interval seconds=900 Required permissions This statement requires the following IAM permissions : bigquery.tables.create bigquery.tables.get bigquery.tables.getData bigquery.tables.replicateData bigquery.jobs.create Example The following example creates a materialized view replica named mv replica in bq dataset : CREATE MATERIALIZED VIEW myproject . bq dataset . mv replica OPTIONS ( replication interval seconds = 600 ) AS REPLICA OF myproject.s3 dataset.my s3 mv CREATE EXTERNAL SCHEMA statement Creates a new federated dataset.
- Required permissions This statement requires the following IAM permissions : Permission Resource bigquery.datasets.create The project where you create the federated dataset. bigquery.connections.use The project where you create the federated dataset. bigquery.connections.delegate The project where you create the federated dataset.
- A federated dataset is a connection between BigQuery and an external data source at the dataset level.
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library and create a client const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function ddlCreateView () { // Creates a view via a DDL query / TODO(developer): Uncomment the following lines before running the sample. / // const projectId = "my project" // const datasetId = "my dataset" // const tableId = "my new view" const query = CREATE VIEW \ ${ projectId } . ${ datasetId } . ${ tableId } \ OPTIONS( expiration timestamp=TIMESTAMP ADD( CURRENT TIMESTAMP(), INTERVAL 48 HOUR), friendly name="new view", description="a view that expires in 2 days", labels=[("org unit", "development")] ) AS SELECT name, state, year, number FROM \bigquery-public-data.usa names.usa 1910 current\ WHERE state LIKE 'W%' ; // For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query const options = { query : query , }; // Run the query as a job const [ job ] = await bigquery . createQueryJob ( options ); job . on ( 'complete' , metadata = > { console . log ( Created new view ${ tableId } via job ${ metadata . id } ); }); } Python Call the Client.query() method to start a query job.

### Query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `site-docs-reference`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- CTE visibility The visibility of a common table expression (CTE) within a query expression is determined by whether or not you add the RECURSIVE keyword to the WITH clause where the CTE was defined.
- Home Documentation Data analytics BigQuery Reference Send feedback Query syntax Stay organized with collections Save and categorize content based on your preferences.
- Alias visibility After you introduce an explicit alias in a query, there are restrictions on where else in the query you can reference that alias.
- This topic describes the syntax for SQL queries in GoogleSQL for BigQuery.

### AlloyDB federated queries \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/alloydb-federated-queries](https://docs.cloud.google.com/bigquery/docs/alloydb-federated-queries)
- Source ID: `site-docs-reference-2`
- Final score: 122
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- SELECT FROM EXTERNAL QUERY ( "region.connection id" , "select from information schema.columns where table name='x';" ); Track BigQuery federated queries When you run a federated query against AlloyDB, BigQuery annotates the query with a comment similar to the following: / Federated query from BigQuery.
- Project ID: PROJECT ID , BigQuery Job ID: JOB ID / YYYY-MM-DD hh:mm:ss.millis UTC [3210532]: [2-1] db= DATABASE , user= USER ACCOUNT STATEMENT: SELECT "company id", "company type id" FROM (SELECT FROM company name table) t; / Federated query from BigQuery.
- Go to the Logs Explorer In the Query tab, enter the following query: resource.type="alloydb.googleapis.com/Instance" textPayload= "Federated query from BigQuery" Click Run query .
- YYYY-MM-DD hh:mm:ss.millis UTC [3210064]: [4-1] db= DATABASE , user= USER ACCOUNT STATEMENT: SELECT 1 FROM (SELECT FROM company name table) t; / Federated query from BigQuery.

