---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.639Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Cloud SQL private connectivity"
feature_slug: "cloud-sql-private-connectivity"
latest_feature_date: "2022-12-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
  - "https://docs.cloud.google.com/bigquery/docs/analysis-rules"
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
keywords:
  - "sql"
  - "private"
  - "connectivity"
  - "bigquery"
  - "can"
  - "access"
  - "query"
  - "over"
---

# Cloud SQL private connectivity

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery can access and query Cloud SQL data over a private connection.

## Extended Definition

BigQuery can access and query Cloud SQL data over a private connection.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- [https://docs.cloud.google.com/bigquery/docs/analysis-rules](https://docs.cloud.google.com/bigquery/docs/analysis-rules)
- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)

## Supporting Pages

### Query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `site-docs-reference`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- SELECT item , purchases , category , LAST VALUE ( item ) OVER ( item window ) AS most popular FROM Produce WINDOW item window AS ( PARTITION BY category ORDER BY purchases ROWS BETWEEN 2 PRECEDING AND 2 FOLLOWING ) SELECT item , purchases , category , LAST VALUE ( item ) OVER ( d ) AS most popular FROM Produce WINDOW a AS ( PARTITION BY category ), b AS ( a ORDER BY purchases ), c AS ( b ROWS BETWEEN 2 PRECEDING AND 2 FOLLOWING ), d AS ( c ) SELECT item , purchases , category , LAST VALUE ( item ) OVER ( c ROWS BETWEEN 2 PRECEDING AND 2 FOLLOWING ) AS most popular FROM Produce WINDOW a AS ( PARTITION BY category ), b AS ( a ORDER BY purchases ), c AS b Set operators query expr [ { INNER [ { FULL LEFT } [ OUTER ] ] } ] { UNION { ALL DISTINCT } INTERSECT DISTINCT EXCEPT DISTINCT } [ { BY NAME [ ON ( column list ) ] [ STRICT ] CORRESPONDING [ BY ( column list ) ] } ] query expr Set operators combine or filter results from two or more input queries into a single result set.
- Additionally, if implicit clamping is used for an aggregate differentially private function, then half of the function's epsilon is applied towards computing implicit bounds, and half of the function's epsilon is applied towards the differentially private aggregation itself. delta The delta differential privacy parameter represents the probability that any row fails to be epsilon -differentially private in the result of a differentially private query. max groups contributed The max groups contributed differential privacy parameter is a positive integer that, if specified, scales the noise and limits the number of groups that each entity can contribute to. max groups contributed is set by default, even if you don't specify it.
- Tables for examples The examples in this section reference the following tables: CREATE OR REPLACE TABLE professors AS ( SELECT 101 AS id , "pencil" AS item , 24 AS quantity UNION ALL SELECT 123 , "pen" , 16 UNION ALL SELECT 123 , "pencil" , 10 UNION ALL SELECT 123 , "pencil" , 38 UNION ALL SELECT 101 , "pen" , 19 UNION ALL SELECT 101 , "pen" , 23 UNION ALL SELECT 130 , "scissors" , 8 UNION ALL SELECT 150 , "pencil" , 72 ); CREATE OR REPLACE TABLE students AS ( SELECT 1 AS id , "pencil" AS item , 5 AS quantity UNION ALL SELECT 1 , "pen" , 2 UNION ALL SELECT 2 , "pen" , 1 UNION ALL SELECT 3 , "pen" , 4 ); Add noise You can add noise to a differentially private query.
- ExamView GROUP BY test id ; Differential privacy clause WITH DIFFERENTIAL PRIVACY OPTIONS( privacy parameters ) privacy parameters : epsilon = expression , delta = expression , [ max groups contributed = expression ], privacy unit column = column name Description This clause lets you transform the results of a query with differentially private aggregations .

### "Restrict data access using analysis rules \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/analysis-rules](https://docs.cloud.google.com/bigquery/docs/analysis-rules)
- Source ID: `site-docs-reference-2`
- Final score: 144
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Restrict data access using analysis rules This document provides general information about analysis rules in GoogleSQL for BigQuery.
- ExamView ; Block a query with no join operation and no required column If the query must have a join operation and the join operation must have at least one required column, include the following parts in your list overlap analysis rule: "join restriction policy" : { "join condition" : "JOIN NOT REQUIRED" , "join allowed columns" : [ "column name" , ... ] } Example: In the following query, the query is blocked because the join operation does not include a column in the ExamView join allowed columns array: -- Create a view that includes a table called ExamTable.
- Block a query with no join operation If the query must have a join operation, you can block the query if no join operation is present by using one of the following list overlap analysis rules: "join restriction policy" : { "join condition" : "JOIN NOT REQUIRED" } "join restriction policy" : { "join condition" : "JOIN NOT REQUIRED" , "join allowed columns" : [] } Example: In the following query, the query is blocked because there is no join operation with ExamView in the query: -- Create a view that includes a table called ExamTable.
- Define a list overlap analysis rule for a view You can define a list overlap analysis rule for a view in a data clean room or with the CREATE VIEW statement: CREATE OR REPLACE VIEW VIEW NAME OPTIONS ( privacy policy = ' '' { "join restriction policy": { "join condition": " JOIN CONDITION ", "join allowed columns": JOIN ALLOWED COLUMNS } } '' ' ) AS QUERY ; Definitions: join restriction policy : The join restriction policy for the list overlap analysis rule.

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Partner references Connect Google BigQuery to Privacera Privacera Enhances Data Access Governance Add Google BigQuery (GBQ) data source on Privacera Platform Partner Advantage page Direct link Reltio Solution Reltio Connected Data Platform Category Data Governance, Security, & MDM Description The Reltio Connected Data Platform is a cloud-based data management platform that lets organizations create a unified, trusted real-time source for their core data.
- Partner references Secoda + BigQuery integration Connect to BigQuery from Secoda BigQuery integration guides Partner Advantage page Direct link SecuPi Solution SecuPi Platform Category Data Governance, Security, & MDM Description SecuPi offers a Data Centric, Privacy, Governance and Security Platform and helps protect, monitor and manage access to sensitive data over on-premise and cloud platforms.
- Partner references DataHub BigQuery Integration BigQuery Ingestion Guide Immuta Solution Immuta Data Security Platform Category Data Governance, Security, & MDM Description Immuta provides data access and security mechanisms to complex data policies.
- Partner references Connect your BigQuery tables to Openlayer for data quality monitoring Privacera Solution PrivaceraCloud Category Data Governance, Security, & MDM Description Privacera simplifies BigQuery access control capabilities.

