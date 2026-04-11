---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.397Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery table-valued function table parameters"
feature_slug: "bigquery-table-valued-function-table-parameters"
latest_feature_date: "2025-09-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
keywords:
  - "table parameter in TVF"
  - "TVF table parameter"
  - "TVF parameters"
  - "BigQuery table-valued function"
  - "table function parameter"
  - "table-valued function"
  - "CREATE TABLE FUNCTION"
---

# BigQuery table-valued function table parameters

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery now supports including table parameters when creating table-valued functions.

## Extended Definition

In BigQuery Standard SQL, a table-valued function (TVF) is a function that can be used as a table source in queries, including in PIVOT/UNPIVOT operations that accept a table, subquery, or TVF as input. The documented CREATE TABLE FUNCTION behavior also includes validation constraints (for example, restrictions on constant expressions and argument usage), but the provided excerpts do not directly show the exact syntax for defining table parameters on TVF creation.

## Evidence Summary

The cited BigQuery query syntax documentation confirms TVFs are used as table-like inputs and can participate in expressions with specific validation rules, but it does not explicitly document table-valued function table-parameter syntax in the excerpts shown.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)

## Supporting Pages

### Query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `site-docs-reference`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- The source table in a CREATE TABLE FUNCTION statement creating a new table-valued function timestamp expression must be a constant expression.
- Conceptual example: -- Before PIVOT is used to rotate sales and quarter into Q1, Q2, Q3, Q4 columns: / ---------+-------+---------+------+ product sales quarter year +---------+-------+---------+------ Kale 51 Q1 2020 Kale 23 Q2 2020 Kale 45 Q3 2020 Kale 3 Q4 2020 Kale 70 Q1 2021 Kale 85 Q2 2021 Apple 77 Q1 2020 Apple 0 Q2 2020 Apple 1 Q1 2021 +---------+-------+---------+------ / -- After PIVOT is used to rotate sales and quarter into Q1, Q2, Q3, Q4 columns: / ---------+------+----+------+------+------+ product year Q1 Q2 Q3 Q4 +---------+------+----+------+------+------+ Apple 2020 77 0 NULL NULL Apple 2021 1 NULL NULL NULL Kale 2020 51 23 45 3 Kale 2021 70 85 NULL NULL +---------+------+----+------+------+------ / Definitions Top-level definitions: from item : The table, subquery, or table-valued function (TVF) on which to perform a pivot operation.
- Conceptual example: -- Before UNPIVOT is used to rotate Q1, Q2, Q3, Q4 into sales and quarter columns: / ---------+----+----+----+----+ product Q1 Q2 Q3 Q4 +---------+----+----+----+----+ Kale 51 23 45 3 Apple 77 0 25 2 +---------+----+----+----+---- / -- After UNPIVOT is used to rotate Q1, Q2, Q3, Q4 into sales and quarter columns: / ---------+-------+---------+ product sales quarter +---------+-------+---------+ Kale 51 Q1 Kale 23 Q2 Kale 45 Q3 Kale 3 Q4 Apple 77 Q1 Apple 0 Q2 Apple 25 Q3 Apple 2 Q4 +---------+-------+--------- / Definitions Top-level definitions: from item : The table, subquery, or table-valued function (TVF) on which to perform a pivot operation.
- WITH RECURSIVE T1 AS (( SELECT 1 AS n ) UNION ALL (( SELECT FROM T1 ) UNION ALL ( SELECT FROM T1 ))) SELECT FROM T1 -- Error The following recursive CTE is disallowed because the self-reference is inside an expression subquery WITH RECURSIVE T1 AS (( SELECT 1 AS n ) UNION ALL ( SELECT ( SELECT n FROM T1 ))) SELECT FROM T1 -- Error The following recursive CTE is disallowed because there is a self-reference as an argument to a table-valued function (TVF).

