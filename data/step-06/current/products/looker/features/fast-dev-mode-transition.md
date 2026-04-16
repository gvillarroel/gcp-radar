---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.459Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Fast Dev Mode Transition"
feature_slug: "fast-dev-mode-transition"
latest_feature_date: "2025-06-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-general-preview-features"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-general-labs"
  - "https://docs.cloud.google.com/bigquery/docs/information-schema-jobs"
keywords:
  - "fast"
  - "dev"
  - "mode"
  - "transition"
  - "feature"
  - "improves"
  - "development"
  - "performance"
---

# Fast Dev Mode Transition

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

This feature improves Development Mode performance by loading LookML projects in read-only mode until a developer creates a developer copy; This feature improves Development Mode performance by loading LookML projects in read-only mode until a developer creates a developer copy.

## Extended Definition

This feature improves Development Mode performance by loading LookML projects in read-only mode until a developer creates a developer copy; This feature improves Development Mode performance by loading LookML projects in read-only mode until a developer creates a developer copy.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-general-preview-features](https://docs.cloud.google.com/looker/docs/admin-panel-general-preview-features)
- [https://docs.cloud.google.com/looker/docs/admin-panel-general-labs](https://docs.cloud.google.com/looker/docs/admin-panel-general-labs)
- [https://docs.cloud.google.com/bigquery/docs/information-schema-jobs](https://docs.cloud.google.com/bigquery/docs/information-schema-jobs)

## Supporting Pages

### Admin settings - Preview Features \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-general-preview-features](https://docs.cloud.google.com/looker/docs/admin-panel-general-preview-features)
- Source ID: `site-docs-reference`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- This feature improves performance and allows for unlimited rows of data being joined for merged queries when both queries being merged use the same BigQuery connection.
- This feature allows admins to set limits on tiles per dashboard and per tab to optimize performance, which is configured on the Content Guardrails page in the Performance Center section of the Admin panel.
- When the BI Engine Symmetric Aggregates feature is enabled, for queries that use symmetric aggregates , Looker generates experimental SQL patterns that execute faster on the BigQuery BI Engine.
- When this feature is enabled, users can download a dashboard only if they have the download with limit or download without limit permission on every model that the dashboard includes.

### Admin settings - Preview Features \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-general-labs](https://docs.cloud.google.com/looker/docs/admin-panel-general-labs)
- Source ID: `site-docs-reference`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- This feature improves performance and allows for unlimited rows of data being joined for merged queries when both queries being merged use the same BigQuery connection.
- This feature allows admins to set limits on tiles per dashboard and per tab to optimize performance, which is configured on the Content Guardrails page in the Performance Center section of the Admin panel.
- When the BI Engine Symmetric Aggregates feature is enabled, for queries that use symmetric aggregates , Looker generates experimental SQL patterns that execute faster on the BigQuery BI Engine.
- When this feature is enabled, users can download a dashboard only if they have the download with limit or download without limit permission on every model that the dashboard includes.

### JOBS view \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/information-schema-jobs](https://docs.cloud.google.com/bigquery/docs/information-schema-jobs)
- Source ID: `site-docs-reference-required-6`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- This allows BigQuery to prune partitions, which improves query performance and reduces costs.
- JOBS j , UNNEST ( query info . performance insights . stage performance standalone insights ) i WHERE ( j . statement type != "SCRIPT" OR j . statement type IS NULL ) AND i IS NOT NULL AND i . slot contention The output shows different performance insights about jobs, including slot contention: +------------+-------------------------+-------------------------------------------------+----------------------------------------------------------------------------+ job id creation time performance insights.avg previous execution ms performance insightsstage performance standalone insights.slot contention +------------+-------------------------+-------------------------------------------------+----------------------------------------------------------------------------+ bquxjob 1 2025-08-08 00:00:00 UTC null true bquxjob 2 2025-08-08 00:00:00 UTC 42689 true bquxjob 3 2025-08-08 00:00:00 UTC 42896 true +------------+-------------------------+-------------------------------------------------+----------------------------------------------------------------------------+ Get jobs with the same query hash The following query returns the job IDs with the same query hash as a specific job: SELECT j . job id , j . creation time , j . query FROM region- REGION NAME .
- JOBS WHERE state != "DONE" AND creation time TIMESTAMP SUB ( CURRENT TIMESTAMP (), INTERVAL 30 MINUTE ) ORDER BY creation time ASC ; The result is similar to the following: +-----------+----------+---------+--------------------------------+--------------------------------+------------------+ job id job type state creation time start time user email +-----------+----------+---------+--------------------------------+--------------------------------+------------------+ bquxjob 1 QUERY RUNNING 2023-05-03 05:07:22.818000 UTC 2023-05-03 05:07:22.905000 UTC abc@example.com bquxjob 2 QUERY PENDING 2023-05-01 02:05:47.925000 UTC 2023-05-01 02:05:47.998000 UTC xyz@example.com bquxjob 3 QUERY PENDING 2023-05-01 02:05:47.925000 UTC 2023-05-01 02:05:47.998000 UTC abc@example.com +-----------+----------+---------+--------------------------------+--------------------------------+------------------+ Queries using optional job creation mode The following example shows a list of queries that were executed in optional job creation mode for which BigQuery did not create jobs.
- The results should look like the following: +-----------+----------------+-------------+-----------+--------------------------+--------------------+---------------------+---------------+-------+----------------------+ job id statement type priority cache hit job creation reason code total bytes billed total bytes processed total slot ms state error result message +-----------+----------------+-------------+-----------+--------------------------+--------------------+---------------------+---------------+-------+----------------------+ bquxjob 1 SELECT INTERACTIVE false null 161480704 161164718 3106 DONE null +-----------+----------------+-------------+-----------+--------------------------+--------------------+---------------------+---------------+-------+----------------------+ The following example shows a list of queries that were executed in optional job creation mode for which BigQuery did create jobs.

