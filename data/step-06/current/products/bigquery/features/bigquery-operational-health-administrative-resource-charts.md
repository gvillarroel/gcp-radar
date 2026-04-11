---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.598Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Operational Health administrative resource charts"
feature_slug: "bigquery-operational-health-administrative-resource-charts"
latest_feature_date: "2023-12-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/admin-resource-charts"
keywords:
  - "Operational Health charts"
  - "BigQuery Operational Health"
  - "administrative resource charts"
  - "job concurrency chart"
  - "shuffle usage chart"
  - "admin resource charts"
  - "slot usage chart"
  - "error chart"
---

# BigQuery Operational Health administrative resource charts

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Operational Health now provides administrative resource charts for slot usage, shuffle usage, job concurrency, errors, and related metrics.

## Extended Definition

BigQuery Operational Health administrative resource charts is a monitoring feature accessed from the BigQuery Monitoring page in Google Cloud Console that shows operational health metrics for an organization through administrative resource charts. The charts are generated from BigQuery INFORMATION_SCHEMA telemetry views (JOBS, JOBS TIMELINE, RESERVATIONS, and TABLE STORAGE), and the docs provide an example of a slot-usage timeline chart and note how slot usage is smoothed when monitoring autoscaling.

## Evidence Summary

The official page confirms the existence of BigQuery operational health/admin resource charts, where to access them, and the underlying INFORMATION_SCHEMA sources used to produce at least one chart type (slot usage timeline).

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)

## Supporting Pages

### "Monitor health, resource utilization, and jobs \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)
- Source ID: `site-docs-root-2`
- Final score: 58
- Re-rank relevance: MODERATE
- Re-rank rationale: The page defines operational health charting for organizations across locations, but it does not enumerate the specific administrative chart types listed in the feature summary.

Evidence snippets:
- BigQuery gathers the metrics by querying the following INFORMATION SCHEMA views : INFORMATION SCHEMA.JOBS INFORMATION SCHEMA.JOBS TIMELINE INFORMATION SCHEMA.RESERVATIONS INFORMATION SCHEMA.TABLE STORAGE For an example query that replicates the slot usage timeline chart found in administrative resource charts, see Match slot usage behavior from administrative resource charts .
- Monitor autoscaling When you monitor slot usage with administrative resource charts , you might see significantly more scaled slots than your slot usage because the charts smooth the number of used slots over the alignment period.
- View operational health charts To view information about the operational health of your organization, follow these steps: In the Google Cloud console, go to the BigQuery Monitoring page.
- For an example query that replicates the slot usage timeline chart found in administrative resource charts, see Match slot usage behavior from administrative resource charts .

