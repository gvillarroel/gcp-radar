---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.942Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Previous query results in Browser Tool"
feature_slug: "previous-query-results-in-browser-tool"
latest_feature_date: "2012-02-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/migration/teradata-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
keywords:
  - "previous"
  - "query"
  - "results"
  - "browser"
  - "tool"
  - "bigquery"
  - "let"
  - "users"
---

# Previous query results in Browser Tool

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Previous query results in the BigQuery Browser Tool let users reopen earlier query outputs from the query panel.

## Extended Definition

Previous query results in the BigQuery Browser Tool let users reopen earlier query outputs from the query panel.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/migration/teradata-tutorial](https://docs.cloud.google.com/bigquery/docs/migration/teradata-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- Examples The following table function takes an INT64 parameter that is used to filter the results of a query: CREATE OR REPLACE TABLE FUNCTION mydataset . names by year ( y INT64 ) AS SELECT year , name , SUM ( number ) AS total FROM bigquery-public-data.usa names.usa 1910 current WHERE year = y GROUP BY year , name The following example specifies the return TABLE type in the RETURNS clause: CREATE OR REPLACE TABLE FUNCTION mydataset . names by year ( y INT64 ) RETURNS TABLE<name STRING , year INT64 , total INT64 > AS SELECT year , name , SUM ( number ) AS total FROM bigquery-public-data.usa names.usa 1910 current WHERE year = y GROUP BY year , name The following example computes total sales for items with the name item name from the orders table: CREATE TABLE FUNCTION mydataset . compute sales ( orders TABLE<item STRING , sales INT64 > , item name STRING ) AS ( SELECT SUM ( sales ) AS total sales , item FROM orders WHERE item = item name GROUP BY item ); CREATE PROCEDURE statement Creates a new procedure , which is a block of statements that can be called from other queries.
- Run DDL statements You can run DDL statements by using the Google Cloud console, by using the bq command-line tool, by calling the jobs.query REST API, or programmatically using the BigQuery API client libraries .
- Sets the default connection to connection 1 in the us region. default sql dialect option STRING The default sql query dialect for executing query jobs using the bq command-line tool or BigQuery API.
- If all of the invoked functions are DETERMINISTIC , BigQuery tries to cache the result, unless the results can't be cached for other reasons.

### Migrating Teradata to BigQuery tutorial \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/migration/teradata-tutorial](https://docs.cloud.google.com/bigquery/docs/migration/teradata-tutorial)
- Source ID: `site-api-reference`
- Final score: 155
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following listing shows the complete query: SELECT nation , o year , SUM ( amount ) AS sum profit FROM ( SELECT n name AS nation , EXTRACT ( YEAR FROM o orderdate ) AS o year , ( l extendedprice ( 1 - l discount ) - ps supplycost l quantity ) / 1e+3 AS amount FROM tpch . part , tpch . supplier , tpch . lineitem , tpch . partsupp , tpch . orders , tpch . nation WHERE s suppkey = l suppkey AND ps suppkey = l suppkey AND ps partkey = l partkey AND p partkey = l partkey AND o orderkey = l orderkey AND s nationkey = n nationkey AND p name like '%blue%' ) AS profit GROUP BY nation , o year ORDER BY nation , o year DESC ; Run the query in Teradata BTEQ and in the BigQuery console as described in the previous section.
- The following listing shows the complete query: SELECT n name AS nation , SUM ( l extendedprice ( 1 - l discount ) / 1000 ) AS revenue FROM tpch . customer , tpch . orders , tpch . lineitem , tpch . supplier , tpch . nation , tpch . region WHERE c custkey = o custkey AND l orderkey = o orderkey AND l suppkey = s suppkey AND c nationkey = s nationkey AND s nationkey = n nationkey AND n regionkey = r regionkey AND r name = 'EUROPE' AND o orderdate > = '1996-01-01' AND o orderdate < '1997-01-01' GROUP BY n name ORDER BY revenue DESC ; Run the query in Teradata BTEQ and in the BigQuery console as described in the previous section.
- Verifying query results At this point you've created sample data, uploaded the data to Teradata, and then migrated it to BigQuery using the BigQuery Data Transfer Service, as explained in the separate tutorial.
- This is the result returned by Teradata: This is the result returned by BigQuery: Both Teradata and BigQuery return the same results, although Teradata uses scientific notation for the sum.

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- For example, this command specifies false for the boolean flag --use legacy sql by placing no at the front of the flag: bq query --nouse legacy sql \ 'SELECT COUNT( ) FROM bigquery-public-data.samples.shakespeare' Alternatively, to specify false as the flag's argument, you can enter the following: bq query --use legacy sql = false \ 'SELECT COUNT( ) FROM bigquery-public-data.samples.shakespeare' Run commands in a script You can run the bq command-line tool in a script, as you would run a Google Cloud CLI command .
- Home Documentation Data analytics BigQuery Reference Send feedback Stay organized with collections Save and categorize content based on your preferences. bq command-line tool reference This document describes the syntax, commands, flags, and arguments for bq , the Python-based command-line tool for BigQuery.
- To stop running bq commands from a service account, run the following command: gcloud config unset auth/impersonate service account Set default values for command-line flags You can set default values for command-line flags by including them in the bq command-line tool's configuration file, .bigqueryrc .
- To specify flags from a file, use the --bigqueryrc flag. --flagfile= PATH When specified, flag definitions from the supplied file are inserted into the bq command-line tool.

