---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.357Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ML AI.GENERATE_TABLE function"
feature_slug: "bigquery-ml-ai-generate-table-function"
latest_feature_date: "2025-11-18"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
keywords:
  - "unstructured input to table output"
  - "output_schema parameter"
  - "structured output_schema"
  - "table-valued function"
  - "AI.GENERATE_TABLE function"
  - "AI.GENERATE_TABLE"
---

# BigQuery ML AI.GENERATE_TABLE function

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery ML now supports the table-valued AI.GENERATE_TABLE function for generating tabular structured output from unstructured inputs; BigQuery ML now supports AI.GENERATE_TABLE for structured data generation with support for output_schema formatting against Gemini models.

## Extended Definition

AI.GENERATE TABLE is a BigQuery ML SQL function for generating structured, table-form output from model responses using Gemini foundation models. The feature supports Gemini 1.5 Pro, Gemini 1.5 Flash, and Gemini 2.0 Flash, and exposes an `output_schema` argument so you can format the returned structured output. Release notes also state you can provide field descriptions in a custom output schema when using AI.GENERATE_TABLE.

## Evidence Summary

The release notes confirm what AI.GENERATE TABLE does and how `output_schema`/field descriptions are used, while the query syntax reference lists it among BigQuery generative AI SQL functions.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)

## Supporting Pages

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 48
- Re-rank relevance: N/A

Evidence snippets:
- Feature You can now generate structured data by using BigQuery ML's AI.GENERATE TABLE function with Gemini 1.5 Pro, Gemini 1.5 Flash, and Gemini 2.0 Flash models.
- Feature You can now provide descriptions for the fields in your custom output schema when you use the AI.GENERATE and AI.GENERATE TABLE functions.
- You can use the AI.GENERATE TABLE function's output schema argument to more easily format the model's response.
- Try this feature with the Generate structured data by using the AI.GENERATE TABLE function tutorial.

### Query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `site-docs-reference`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- Conceptual example: -- Before PIVOT is used to rotate sales and quarter into Q1, Q2, Q3, Q4 columns: / ---------+-------+---------+------+ product sales quarter year +---------+-------+---------+------ Kale 51 Q1 2020 Kale 23 Q2 2020 Kale 45 Q3 2020 Kale 3 Q4 2020 Kale 70 Q1 2021 Kale 85 Q2 2021 Apple 77 Q1 2020 Apple 0 Q2 2020 Apple 1 Q1 2021 +---------+-------+---------+------ / -- After PIVOT is used to rotate sales and quarter into Q1, Q2, Q3, Q4 columns: / ---------+------+----+------+------+------+ product year Q1 Q2 Q3 Q4 +---------+------+----+------+------+------+ Apple 2020 77 0 NULL NULL Apple 2021 1 NULL NULL NULL Kale 2020 51 23 45 3 Kale 2021 70 85 NULL NULL +---------+------+----+------+------+------ / Definitions Top-level definitions: from item : The table, subquery, or table-valued function (TVF) on which to perform a pivot operation.
- Conceptual example: -- Before UNPIVOT is used to rotate Q1, Q2, Q3, Q4 into sales and quarter columns: / ---------+----+----+----+----+ product Q1 Q2 Q3 Q4 +---------+----+----+----+----+ Kale 51 23 45 3 Apple 77 0 25 2 +---------+----+----+----+---- / -- After UNPIVOT is used to rotate Q1, Q2, Q3, Q4 into sales and quarter columns: / ---------+-------+---------+ product sales quarter +---------+-------+---------+ Kale 51 Q1 Kale 23 Q2 Kale 45 Q3 Kale 3 Q4 Apple 77 Q1 Apple 0 Q2 Apple 25 Q3 Apple 2 Q4 +---------+-------+--------- / Definitions Top-level definitions: from item : The table, subquery, or table-valued function (TVF) on which to perform a pivot operation.
- WITH RECURSIVE T1 AS (( SELECT 1 AS n ) UNION ALL (( SELECT FROM T1 ) UNION ALL ( SELECT FROM T1 ))) SELECT FROM T1 -- Error The following recursive CTE is disallowed because the self-reference is inside an expression subquery WITH RECURSIVE T1 AS (( SELECT 1 AS n ) UNION ALL ( SELECT ( SELECT n FROM T1 ))) SELECT FROM T1 -- Error The following recursive CTE is disallowed because there is a self-reference as an argument to a table-valued function (TVF).
- Common items that this expression can represent include tables, value tables , subqueries , table-valued functions (TVFs) , joins , and parenthesized joins .

