---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.393Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery advanced runtime"
feature_slug: "bigquery-advanced-runtime"
latest_feature_date: "2025-09-15"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/advanced-runtime"
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "enable advanced runtime"
  - "advanced runtime option"
  - "advanced runtime mode"
  - "advanced runtime"
  - "Advanced Runtime"
  - "runtime setting"
  - "query execution time"
  - "slot usage"
---

# BigQuery advanced runtime

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery now allows enabling the advanced runtime to improve query execution time and slot usage; BigQuery added an advanced runtime option intended to improve query execution time and slot usage.

## Extended Definition

BigQuery advanced runtime is a BigQuery query processor runtime mode that applies performance enhancements to accelerate analytical workloads and improve query execution time and slot usage without requiring code changes. It can be enabled by setting the query runtime value to `advanced` (for example in query optimization options) before it became the default runtime, and it exposes JOBS view indicators (such as enhanced vectorization and short query optimization) for estimating impact, which are estimates only.

## Evidence Summary

The pages together define advanced runtime’s purpose and performance goals, document its rollout and defaulting timeline, and provide supported SQL configuration (`query runtime = advanced`) plus metadata-based estimation guidance.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/advanced-runtime](https://docs.cloud.google.com/bigquery/docs/advanced-runtime)
- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### Use the BigQuery advanced runtime \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/advanced-runtime](https://docs.cloud.google.com/bigquery/docs/advanced-runtime)
- Source ID: `site-docs-root-2`
- Final score: 84
- Re-rank relevance: STRONG
- Re-rank rationale: The page is specifically about the BigQuery advanced runtime and describes it as performance enhancements that improve analytical query execution.

Evidence snippets:
- JOBS BY PROJECT WHERE EXTRACT ( DATE FROM creation time ) > DATE SUB ( CURRENT DATE (), INTERVAL 30 DAY ) AND creation time > = TIMESTAMP "2026-01-30" ), most recent jobs without advanced runtime AS ( SELECT FROM jobs WHERE NOT has advanced runtime QUALIFY ROW NUMBER () OVER ( PARTITION BY query hash ORDER BY end time DESC ) = 1 ) SELECT job . job id , 100 SAFE DIVIDE ( original job . elapsed ms - job . elapsed ms , original job . elapsed ms ) AS percent execution time saved , job . elapsed ms AS new elapsed ms , original job . elapsed ms AS original elapsed ms , FROM jobs AS job INNER JOIN most recent jobs without advanced runtime AS original job USING ( query hash ) WHERE job . has advanced runtime AND original job . end time < job . start time ORDER BY percent execution time saved DESC LIMIT 10 ; Note: You can only compare queries created on or after January 30, 2026, which is when the advanced runtime optimization indicators ( enhanced vectorization and short query optimization ) became consistently available in the INFORMATION SCHEMA.JOBS view.
- Replace the following: LOCATION : the location in which job performance should be measured If the advanced runtime was applied, the results of this query may be similar to the following: / --------------+----------------------------+----------------+--------------------- job id percent elapsed time saved new elapsed ms original elapsed ms +--------------+----------------------------+----------------+---------------------+ sample job1 45.38834951456311 225 412 sample job2 45.19480519480519 211 385 sample job3 33.246753246753244 257 385 sample job4 29.28802588996764 1311 1854 sample job5 28.18181818181818 1027 1430 sample job6 25.804195804195807 1061 1430 sample job7 25.734265734265733 1062 1430 sample job8 25.454545454545453 1066 1430 sample job9 25.384615384615383 1067 1430 sample job10 25.034965034965033 1072 1430 --------------+----------------------------+----------------+--------------------- / The results of this query are only an estimate of the advanced runtime's impact.
- Estimate the impact of the advanced runtime To estimate the impact of the advanced runtime, you can use the following SQL query to identify project queries with the greatest estimated improvement to execution time: WITH jobs AS ( SELECT , query info . query hashes . normalized literals AS query hash , TIMESTAMP DIFF ( end time , start time , MILLISECOND ) AS elapsed ms , EXISTS ( SELECT 1 FROM UNNEST ( JSON QUERY ARRAY ( query info . optimization details . optimizations )) AS o WHERE JSON VALUE ( o , '$.enhanced vectorization' ) = 'applied' ) AS has advanced runtime FROM region - LOCATION .
- Use the BigQuery advanced runtime BigQuery advanced runtime is a set of performance enhancements designed to automatically accelerate analytical workloads without requiring user action or code changes.

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 68
- Re-rank relevance: N/A

Evidence snippets:
- Feature You can now enable the BigQuery advanced runtime to improve query execution time and slot usage.
- Feature You can now use the BigQuery advanced runtime to improve query execution time and slot usage.
- Between September 15, 2025 and early 2026, the BigQuery advanced runtime will become the default runtime for all projects.
- March 12, 2026 Change BigQuery advanced runtime is now enabled as the default runtime for all projects.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Use google SQL if the query dialect isn't specified at the job level. query runtime STRING Specifies whether the BigQuery query processor uses the advanced runtime .
- Example: region-us.default query optimizer options = 'adaptive=on' query runtime STRING Specifies whether the BigQuery query processor uses the advanced runtime .
- Set the query runtime value to advanced to enable the advanced runtime before it's rolled out as the default runtime.
- Set the query runtime value to advanced to enable the advanced runtime before it's rolled out as the default runtime.

