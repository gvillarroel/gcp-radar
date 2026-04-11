---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.673Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ML Cloud AI service table-valued functions"
feature_slug: "bigquery-ml-cloud-ai-service-table-valued-functions"
latest_feature_date: "2023-03-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "BigQuery ML TVF"
  - "TVF"
  - "Natural Language API table function"
  - "Vision API table function"
  - "Translation API table function"
  - "table-valued functions"
  - "table-valued function"
  - "Cloud AI service functions"
---

# BigQuery ML Cloud AI service table-valued functions

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery ML now supports table-valued functions for inference with Google Cloud pretrained models, including Vision, Natural Language, and Translation APIs.

## Extended Definition

A table-valued function (TVF) in BigQuery is a table-like SQL item that can be referenced like a table (for example in `FROM`) and can be created with table parameters. Official release notes state that support for table parameters in TVFs was added, later temporarily disabled in October 2025, and restored in January 2026. The provided excerpts do not directly confirm Cloud AI service/BQML-specific TVFs or the Vision, Natural Language, and Translation API function details.

## Evidence Summary

The query syntax reference defines TVFs as valid table-like query items, while release notes document feature-level changes for table-parameter support in TVFs.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### Query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `site-docs-reference`
- Final score: 48
- Re-rank relevance: N/A

Evidence snippets:
- Common items that this expression can represent include tables, value tables , subqueries , table-valued functions (TVFs) , joins , and parenthesized joins .
- Conceptual example: -- Before PIVOT is used to rotate sales and quarter into Q1, Q2, Q3, Q4 columns: / ---------+-------+---------+------+ product sales quarter year +---------+-------+---------+------ Kale 51 Q1 2020 Kale 23 Q2 2020 Kale 45 Q3 2020 Kale 3 Q4 2020 Kale 70 Q1 2021 Kale 85 Q2 2021 Apple 77 Q1 2020 Apple 0 Q2 2020 Apple 1 Q1 2021 +---------+-------+---------+------ / -- After PIVOT is used to rotate sales and quarter into Q1, Q2, Q3, Q4 columns: / ---------+------+----+------+------+------+ product year Q1 Q2 Q3 Q4 +---------+------+----+------+------+------+ Apple 2020 77 0 NULL NULL Apple 2021 1 NULL NULL NULL Kale 2020 51 23 45 3 Kale 2021 70 85 NULL NULL +---------+------+----+------+------+------ / Definitions Top-level definitions: from item : The table, subquery, or table-valued function (TVF) on which to perform a pivot operation.
- Conceptual example: -- Before UNPIVOT is used to rotate Q1, Q2, Q3, Q4 into sales and quarter columns: / ---------+----+----+----+----+ product Q1 Q2 Q3 Q4 +---------+----+----+----+----+ Kale 51 23 45 3 Apple 77 0 25 2 +---------+----+----+----+---- / -- After UNPIVOT is used to rotate Q1, Q2, Q3, Q4 into sales and quarter columns: / ---------+-------+---------+ product sales quarter +---------+-------+---------+ Kale 51 Q1 Kale 23 Q2 Kale 45 Q3 Kale 3 Q4 Apple 77 Q1 Apple 0 Q2 Apple 25 Q3 Apple 2 Q4 +---------+-------+--------- / Definitions Top-level definitions: from item : The table, subquery, or table-valued function (TVF) on which to perform a pivot operation.
- WITH RECURSIVE T1 AS (( SELECT 1 AS n ) UNION ALL (( SELECT FROM T1 ) UNION ALL ( SELECT FROM T1 ))) SELECT FROM T1 -- Error The following recursive CTE is disallowed because the self-reference is inside an expression subquery WITH RECURSIVE T1 AS (( SELECT 1 AS n ) UNION ALL ( SELECT ( SELECT n FROM T1 ))) SELECT FROM T1 -- Error The following recursive CTE is disallowed because there is a self-reference as an argument to a table-valued function (TVF).

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- Feature You can now include table parameters when you create a table-valued function (TVF).
- January 22, 2026 Fixed Support for table parameters in table-valued functions is restored.
- October 22, 2025 Issue Support for table parameters in table-value functions (TVFs) has been temporarily disabled.

