---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.366Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Pipe syntax"
feature_slug: "pipe-syntax"
latest_feature_date: "2025-04-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/pipe-syntax-guide"
  - "https://docs.cloud.google.com/bigquery/docs/introduction-sql"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
keywords:
  - "pipe"
  - "syntax"
  - "bigquery"
  - "provides"
  - "linear"
  - "query"
  - "structure"
  - "intended"
---

# Pipe syntax

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery pipe syntax provides a linear query structure intended to improve query readability and maintainability.

## Extended Definition

BigQuery pipe syntax provides a linear query structure intended to improve query readability and maintainability.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/pipe-syntax-guide](https://docs.cloud.google.com/bigquery/docs/pipe-syntax-guide)
- [https://docs.cloud.google.com/bigquery/docs/introduction-sql](https://docs.cloud.google.com/bigquery/docs/introduction-sql)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)

## Supporting Pages

### Work with pipe query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/pipe-syntax-guide](https://docs.cloud.google.com/bigquery/docs/pipe-syntax-guide)
- Source ID: `site-docs-reference-2`
- Final score: 266
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Pipe syntax provides a familiar structure that simplifies onboarding for those users to Observability Analytics and BigQuery.
- The linear structure of pipe syntax lets you write queries so that the order of the query syntax matches the order of logical steps taken to build the result table.
- Pipe query syntax is an extension to GoogleSQL that supports a linear query structure designed to make your queries easier to read, write, and maintain.
- Home Documentation Data analytics BigQuery Guides Send feedback Work with pipe query syntax Stay organized with collections Save and categorize content based on your preferences.

### Query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `site-docs-reference`
- Final score: 161
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Data analytics BigQuery Reference Send feedback Query syntax Stay organized with collections Save and categorize content based on your preferences.
- This topic describes the syntax for SQL queries in GoogleSQL for BigQuery.
- Angle brackets <> Literal angle brackets SQL syntax query statement : query expr query expr : [ WITH [ RECURSIVE ] { non recursive cte recursive cte }[, ...] ] { select ( query expr ) set operation } [ ORDER BY expression [{ ASC DESC }] [, ...] ] [ LIMIT count [ OFFSET skip rows ] ] select : SELECT [ WITH differential privacy clause ] [ { ALL DISTINCT } ] [ AS { STRUCT VALUE } ] select list [ FROM from clause [, ...] ] [ WHERE bool expression ] [ GROUP BY group by specification ] [ HAVING bool expression ] [ QUALIFY bool expression ] [ WINDOW window clause ] SELECT statement SELECT [ WITH differential privacy clause ] [ { ALL DISTINCT } ] [ AS { STRUCT VALUE } ] select list select list : { select all select expression } [, ...] select all : [ expression . ] [ EXCEPT ( column name [, ...] ) ] [ REPLACE ( expression AS column name [, ...] ) ] select expression : expression [ [ AS ] alias ] The SELECT list defines the columns that the query will return.
- A and B reference each other, which creates a cycle: WITH A AS ( SELECT FROM B ), B AS ( SELECT FROM A ) SELECT FROM B -- Error AGGREGATION THRESHOLD clause Syntax for an aggregation threshold analysis rule–enforced query: WITH AGGREGATION THRESHOLD OPTIONS ( threshold = threshold amount , privacy unit column = column name ) Syntax for an aggregation threshold analysis rule–enforced view: WITH AGGREGATION THRESHOLD [ OPTIONS ( [ threshold = threshold amount ], [ privacy unit column = column name ] ) ] Description Use the AGGREGATION THRESHOLD clause to enforce an aggregation threshold.

### Introduction to SQL in BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/introduction-sql](https://docs.cloud.google.com/bigquery/docs/introduction-sql)
- Source ID: `site-docs-reference`
- Final score: 158
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Switch to the legacy SQL dialect To use legacy SQL syntax in a query job, set the useLegacySql parameter to true . // Import the Google Cloud client library const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function queryLegacy () { // Queries the U.S. given names dataset for the state of Texas using legacy SQL. const query = 'SELECT word FROM [bigquery-public-data:samples.shakespeare] LIMIT 10;' ; // For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query const options = { query : query , // Location must match that of the dataset(s) referenced in the query. location : 'US' , useLegacySql : true , }; // Run the query as a job const [ job ] = await bigquery . createQueryJob ( options ); console . log ( Job ${ job . id } started. ); // Wait for the query to finish const [ rows ] = await job . getQueryResults (); // Print the results console . log ( 'Rows:' ); rows . forEach ( row = > console . log ( row )); } PHP Before trying this sample, follow the PHP setup instructions in the BigQuery quickstart using client libraries .
- Switch to the legacy SQL dialect To use legacy SQL syntax in a query job, pass the option legacy sql: true with your query. require "google/cloud/bigquery" def query legacy bigquery = Google :: Cloud :: Bigquery . new sql = "SELECT name FROM [bigquery-public-data:usa names.usa 1910 2013] " \ "WHERE state = 'TX' " \ "LIMIT 100" results = bigquery . query sql , legacy sql : true do config Location must match that of the dataset(s) referenced in the query. config . location = "US" end results . each do row puts row . inspect end end What's next For information about how to run a SQL query in BigQuery, see Running interactive and batch query jobs .
- Switch to the legacy SQL dialect To use legacy SQL syntax in a query job, set the useLegacySql parameter to true . use Google\Cloud\BigQuery\BigQueryClient; / Query using legacy sql @param string $projectId The project Id of your Google Cloud Project. / function query legacy(string $projectId): void { $query = 'SELECT corpus FROM [bigquery-public-data:samples.shakespeare] GROUP BY corpus'; $bigQuery = new BigQueryClient([ 'projectId' => $projectId, ]); $jobConfig = $bigQuery->query($query)->useLegacySql(true); $queryResults = $bigQuery->runQuery($jobConfig); $i = 0; foreach ($queryResults as $row) { printf('--- Row %s ---' .
- Switch to the GoogleSQL dialect To use GoogleSQL syntax in a query job, set the use legacy sql parameter to false . bq query \ --use legacy sql = false \ 'SELECT word FROM bigquery-public-data.samples.shakespeare' Set GoogleSQL as the default dialect You can set GoogleSQL as the default dialect for the command-line tool and the interactive shell by editing the command-line tool's configuration file: .bigqueryrc .

