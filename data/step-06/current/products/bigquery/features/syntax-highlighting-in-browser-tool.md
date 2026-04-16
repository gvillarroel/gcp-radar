---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.939Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Syntax highlighting in Browser Tool"
feature_slug: "syntax-highlighting-in-browser-tool"
latest_feature_date: "2012-07-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
  - "https://docs.cloud.google.com/bigquery/docs/bq-command-line-tool"
keywords:
  - "syntax"
  - "highlighting"
  - "browser"
  - "tool"
  - "bigquery"
  - "improves"
  - "query"
  - "editing"
---

# Syntax highlighting in Browser Tool

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Syntax highlighting in the BigQuery Browser Tool improves query editing readability.

## Extended Definition

Syntax highlighting in the BigQuery Browser Tool improves query editing readability.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- [https://docs.cloud.google.com/bigquery/docs/bq-command-line-tool](https://docs.cloud.google.com/bigquery/docs/bq-command-line-tool)

## Supporting Pages

### Query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `site-docs-reference`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Data analytics BigQuery Reference Send feedback Query syntax Stay organized with collections Save and categorize content based on your preferences.
- This topic describes the syntax for SQL queries in GoogleSQL for BigQuery.
- Angle brackets <> Literal angle brackets SQL syntax query statement : query expr query expr : [ WITH [ RECURSIVE ] { non recursive cte recursive cte }[, ...] ] { select ( query expr ) set operation } [ ORDER BY expression [{ ASC DESC }] [, ...] ] [ LIMIT count [ OFFSET skip rows ] ] select : SELECT [ WITH differential privacy clause ] [ { ALL DISTINCT } ] [ AS { STRUCT VALUE } ] select list [ FROM from clause [, ...] ] [ WHERE bool expression ] [ GROUP BY group by specification ] [ HAVING bool expression ] [ QUALIFY bool expression ] [ WINDOW window clause ] SELECT statement SELECT [ WITH differential privacy clause ] [ { ALL DISTINCT } ] [ AS { STRUCT VALUE } ] select list select list : { select all select expression } [, ...] select all : [ expression . ] [ EXCEPT ( column name [, ...] ) ] [ REPLACE ( expression AS column name [, ...] ) ] select expression : expression [ [ AS ] alias ] The SELECT list defines the columns that the query will return.
- A and B reference each other, which creates a cycle: WITH A AS ( SELECT FROM B ), B AS ( SELECT FROM A ) SELECT FROM B -- Error AGGREGATION THRESHOLD clause Syntax for an aggregation threshold analysis rule–enforced query: WITH AGGREGATION THRESHOLD OPTIONS ( threshold = threshold amount , privacy unit column = column name ) Syntax for an aggregation threshold analysis rule–enforced view: WITH AGGREGATION THRESHOLD [ OPTIONS ( [ threshold = threshold amount ], [ privacy unit column = column name ] ) ] Description Use the AGGREGATION THRESHOLD clause to enforce an aggregation threshold.

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Data analytics BigQuery Reference Send feedback Stay organized with collections Save and categorize content based on your preferences. bq command-line tool reference This document describes the syntax, commands, flags, and arguments for bq , the Python-based command-line tool for BigQuery.
- For example, this command specifies false for the boolean flag --use legacy sql by placing no at the front of the flag: bq query --nouse legacy sql \ 'SELECT COUNT( ) FROM bigquery-public-data.samples.shakespeare' Alternatively, to specify false as the flag's argument, you can enter the following: bq query --use legacy sql = false \ 'SELECT COUNT( ) FROM bigquery-public-data.samples.shakespeare' Run commands in a script You can run the bq command-line tool in a script, as you would run a Google Cloud CLI command .
- To stop running bq commands from a service account, run the following command: gcloud config unset auth/impersonate service account Set default values for command-line flags You can set default values for command-line flags by including them in the bq command-line tool's configuration file, .bigqueryrc .
- To specify flags from a file, use the --bigqueryrc flag. --flagfile= PATH When specified, flag definitions from the supplied file are inserted into the bq command-line tool.

### Use the bq tool \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bq-command-line-tool](https://docs.cloud.google.com/bigquery/docs/bq-command-line-tool)
- Source ID: `site-docs-root`
- Final score: 126
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use the bq tool In this tutorial, you learn how to use bq , the Python-based command-line interface (CLI) tool for BigQuery to create a dataset, load sample data, and query tables.
- Required roles To get the permissions that you need to create a dataset, create a table, load data, and query data, ask your administrator to grant you the following IAM roles on the project: Run load jobs and query jobs: BigQuery Job User ( roles/bigquery.jobUser ) Create a dataset, create a table, load data into a table, and query a table: BigQuery Data Editor ( roles/bigquery.dataEditor ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Delete the project If you used the BigQuery sandbox to query the public dataset, then billing is not enabled for your project, and you don't need to delete the project.
- Home Documentation Data analytics BigQuery Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.

