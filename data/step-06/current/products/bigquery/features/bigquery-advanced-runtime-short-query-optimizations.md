---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.405Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery advanced runtime short query optimizations"
feature_slug: "bigquery-advanced-runtime-short-query-optimizations"
latest_feature_date: "2025-08-06"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/advanced-runtime"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "short query optimizer"
  - "short query optimization"
  - "short query mode"
  - "advanced runtime option"
  - "runtime optimization"
  - "advanced runtime"
  - "query optimization"
---

# BigQuery advanced runtime short query optimizations

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

Enabling the advanced runtime in BigQuery includes short query optimizations.

## Extended Definition

BigQuery short query optimization is part of the BigQuery advanced runtime feature, which can be enabled for query execution. It dynamically identifies eligible queries that can run as a single stage, lowering latency and slot usage, with eligibility influenced by factors such as predicted data scan size. BigQuery also exposes a query configuration option (`query runtime`) that controls whether the query processor uses the advanced runtime.

## Evidence Summary

The advanced-runtime guide details short query optimization behavior and timing, the SQL reference shows how advanced runtime is selected via query options, and release notes confirm feature availability and rollout milestones.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/advanced-runtime](https://docs.cloud.google.com/bigquery/docs/advanced-runtime)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### Use the BigQuery advanced runtime \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/advanced-runtime](https://docs.cloud.google.com/bigquery/docs/advanced-runtime)
- Source ID: `site-docs-root-2`
- Final score: 106
- Re-rank relevance: STRONG
- Re-rank rationale: The page explicitly defines short query optimizations as part of the BigQuery advanced runtime and explains how they reduce latency and slot consumption.

Evidence snippets:
- JOBS BY PROJECT WHERE EXTRACT ( DATE FROM creation time ) > DATE SUB ( CURRENT DATE (), INTERVAL 30 DAY ) AND creation time > = TIMESTAMP "2026-01-30" ), most recent jobs without advanced runtime AS ( SELECT FROM jobs WHERE NOT has advanced runtime QUALIFY ROW NUMBER () OVER ( PARTITION BY query hash ORDER BY end time DESC ) = 1 ) SELECT job . job id , 100 SAFE DIVIDE ( original job . elapsed ms - job . elapsed ms , original job . elapsed ms ) AS percent execution time saved , job . elapsed ms AS new elapsed ms , original job . elapsed ms AS original elapsed ms , FROM jobs AS job INNER JOIN most recent jobs without advanced runtime AS original job USING ( query hash ) WHERE job . has advanced runtime AND original job . end time < job . start time ORDER BY percent execution time saved DESC LIMIT 10 ; Note: You can only compare queries created on or after January 30, 2026, which is when the advanced runtime optimization indicators ( enhanced vectorization and short query optimization ) became consistently available in the INFORMATION SCHEMA.JOBS view.
- Eligibility for short query optimizations is dynamic and influenced by the following factors: The predicted size of the data scan.
- Short query optimizations dynamically identify queries that can be run as a single stage, reducing latency and slot consumption.
- Short query optimizations BigQuery typically executes queries in a distributed environment using a shuffle intermediate layer.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 48
- Re-rank relevance: N/A

Evidence snippets:
- Use google SQL if the query dialect isn't specified at the job level. query runtime STRING Specifies whether the BigQuery query processor uses the advanced runtime .
- Example: region-us.default query optimizer options = 'adaptive=on' query runtime STRING Specifies whether the BigQuery query processor uses the advanced runtime .
- Sets the default queue timeout for batch queries in the us region to 30 minutes. default query optimizer options STRING The history-based query optimizations.
- Sets the default queue timeout for batch queries in the us region to 30 minutes. default query optimizer options STRING The history-based query optimizations.

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- August 06, 2025 Feature Enabling the advanced runtime now includes short query optimizations .
- Between September 15, 2025 and early 2026, the BigQuery advanced runtime will become the default runtime for all projects.
- Feature You can now enable the BigQuery advanced runtime to improve query execution time and slot usage.
- March 12, 2026 Change BigQuery advanced runtime is now enabled as the default runtime for all projects.

