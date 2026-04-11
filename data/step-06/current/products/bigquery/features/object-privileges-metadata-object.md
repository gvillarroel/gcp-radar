---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.781Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "OBJECT_PRIVILEGES metadata object"
feature_slug: "object-privileges-metadata-object"
latest_feature_date: "2021-06-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/tables"
  - "https://docs.cloud.google.com/bigquery/docs/controlling-costs"
  - "https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas"
keywords:
  - "INFORMATION_SCHEMA.OBJECT_PRIVILEGES"
  - "object privileges metadata"
  - "object-level privileges"
  - "metadata privileges table"
  - "OBJECT_PRIVILEGES table"
  - "OBJECT_PRIVILEGES view"
  - "OBJECT_PRIVILEGES"
  - "INFORMATION_SCHEMA view"
---

# OBJECT_PRIVILEGES metadata object

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery exposed OBJECT_PRIVILEGES as an INFORMATION_SCHEMA view and corresponding table for visibility into object-level privileges.

## Extended Definition

BigQuery exposed OBJECT_PRIVILEGES as an INFORMATION_SCHEMA view and corresponding table for visibility into object-level privileges.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)
- [https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas](https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas)

## Supporting Pages

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- TABLE STORAGE BY PROJECT WHERE total physical bytes + fail safe physical bytes > 0 -- Base the forecast on base tables only for highest precision results AND table type = 'BASE TABLE' GROUP BY 1 ) SELECT dataset name , -- Logical ROUND ( active logical gib , 2 ) AS active logical gib , ROUND ( long term logical gib , 2 ) AS long term logical gib , -- Physical ROUND ( active physical gib , 2 ) AS active physical gib , ROUND ( long term physical gib , 2 ) AS long term physical gib , ROUND ( time travel physical gib , 2 ) AS time travel physical gib , ROUND ( fail safe physical gib , 2 ) AS fail safe physical gib , -- Compression ratio ROUND ( SAFE DIVIDE ( active logical gib , active no tt physical gib ), 2 ) AS active compression ratio , ROUND ( SAFE DIVIDE ( long term logical gib , long term physical gib ), 2 ) AS long term compression ratio , -- Forecast costs logical ROUND ( active logical gib active logical gib price , 2 ) AS forecast active logical cost , ROUND ( long term logical gib long term logical gib price , 2 ) AS forecast long term logical cost , -- Forecast costs physical ROUND (( active no tt physical gib + time travel physical gib + fail safe physical gib ) active physical gib price , 2 ) AS forecast active physical cost , ROUND ( long term physical gib long term physical gib price , 2 ) AS forecast long term physical cost , -- Forecast costs total ROUND ((( active logical gib active logical gib price ) + ( long term logical gib long term logical gib price )) - ((( active no tt physical gib + time travel physical gib + fail safe physical gib ) active physical gib price ) + ( long term physical gib long term physical gib price )), 2 ) AS forecast total cost difference FROM storage sizes ORDER BY ( forecast active logical cost + forecast active physical cost ) DESC ; Note: INFORMATION SCHEMA view names are case-sensitive.
- The following column is excluded from the query results: IS UPDATABLE Note: INFORMATION SCHEMA view names are case-sensitive.
- Note: INFORMATION SCHEMA view names are case-sensitive.
- Note: INFORMATION SCHEMA view names are case-sensitive.

### Estimate and control costs \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- INFORMATION SCHEMA storage calculations don't match billing Use the INFORMATION SCHEMA.TABLE STORAGE USAGE TIMELINE view instead of INFORMATION SCHEMA.TABLE STORAGE - TABLE STORAGE USAGE TIMELINE provides more accurate and granular data to correctly calculate storage costs The queries run on INFORMATION SCHEMA views don't include taxes, adjustments, and rounding errors—take these into account when comparing the data.
- After identifying the corresponding SKUs, use the INFORMATION SCHEMA views to identify the specific resources associated with these charges, for example: If you are charged for on-demand analysis, look into the INFORMATION SCHEMA.JOBS view examples to determine jobs driving costs and users who launched them.
- Data presented in the INFORMATION SCHEMA views is in UTC, whereas billing report data is reported in the US and Canadian Pacific Time (UTC-8).
- You can use the INFORMATION SCHEMA views to determine the storage billing model that works best based on your usage patterns .

### Troubleshoot quota and limit errors \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas](https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- Diagnosis To diagnose issues, do the following: Use INFORMATION SCHEMA views along with a region qualifier to analyze the underlying issue.
- To monitor the number of modified partitions on a table, use the INFORMATION SCHEMA view .
- To monitor the number of modified partitions on a table, use the INFORMATION SCHEMA view .
- To monitor the number of modified partitions on a table, use the INFORMATION SCHEMA view .

