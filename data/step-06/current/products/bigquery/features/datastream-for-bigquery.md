---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.654Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Datastream for BigQuery"
feature_slug: "datastream-for-bigquery"
latest_feature_date: "2022-09-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
  - "https://docs.cloud.google.com/bigquery/docs/change-data-capture"
  - "https://docs.cloud.google.com/bigquery/docs/admin-resource-charts"
keywords:
  - "datastream"
  - "bigquery"
  - "replicates"
  - "schema"
  - "updates"
  - "operational"
  - "databases"
  - "directly"
---

# Datastream for BigQuery

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Datastream for BigQuery replicates data and schema updates from operational databases directly into BigQuery.

## Extended Definition

Datastream for BigQuery replicates data and schema updates from operational databases directly into BigQuery.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- [https://docs.cloud.google.com/bigquery/docs/change-data-capture](https://docs.cloud.google.com/bigquery/docs/change-data-capture)
- [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)

## Supporting Pages

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- Partner references Move your data to BigQuery with millisecond latency BigQuery materialization connector BigQuery Batch Query Connector Partner Advantage page Direct link Fivetran Fivetran Data Pipelines Solution Fivetran Data Pipelines Category ETL & Data Integration Description Fivetran is a leader in automated data integration and delivers ready-to-use connectors that automatically adapt as schemas and APIs change, ensuring consistent, reliable access to data.
- Partner references BigQuery agent BigQuery Agent Example Partner Advantage page Direct link Vanna.ai Solution Vanna.ai Category BI, ML, & Advanced Analytics Description Vanni.ai is the Leading open source Python package to query large SQL databases in natural language at production scale with access control that's auditable, accurate, fast, and locally deployable so that code is transparent, results are useful and immediate, and data never leaves your premise.
- Partner references SnapLogic with BigQuery SnapLogic and Google BigQuery - Bulk loading for high-speed Google analytics Automate Data-driven Insights with SnapLogic and Google BigQuery Partner Advantage page Direct link SqlDBM Solution SqlDBM Category ETL & Data Integration Description SqlDBM is a cloud-native database design and modeling tool that enables teams to develop, document, and manage database schemas collaboratively.
- Partner references Use BigQuery directly in a notebook Getting started with BigQuery in Deepnote BigQuery with Google OAuth Partner Advantage page Direct link DinMo Solution DinMo Category BI, ML, & Advanced Analytics Description DinMo transforms all customer touch points into high-value audiences and helps users leverage them in all activation platforms without code or engineering in less than 5 minutes.

### "Stream table updates with change data capture ingestion \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/change-data-capture](https://docs.cloud.google.com/bigquery/docs/change-data-capture)
- Source ID: `site-docs-reference-5`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- Learn how to use Datastream to replicate transactional databases to BigQuery with BigQuery CDC ingestion.
- When this option is set, BigQuery applies row modifications at least once within the interval defined by the max staleness value, letting you run queries without waiting for updates to be applied, at the cost of some data staleness.
- Stream table updates with change data capture ingestion BigQuery change data capture (CDC) ingestion updates your BigQuery tables by processing and applying streamed changes to existing data.
- BigQuery data ingestion pricing and BigQuery storage pricing are directly calculated by the amount of data that you ingest and store, including pseudocolumns.

### "Monitor health, resource utilization, and jobs \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)
- Source ID: `site-docs-reference-2`
- Final score: 79
- Re-rank relevance: N/A

Evidence snippets:
- BigQuery gathers the metrics by querying the following INFORMATION SCHEMA views : INFORMATION SCHEMA.JOBS INFORMATION SCHEMA.JOBS TIMELINE INFORMATION SCHEMA.RESERVATIONS INFORMATION SCHEMA.TABLE STORAGE For an example query that replicates the slot usage timeline chart found in administrative resource charts, see Match slot usage behavior from administrative resource charts .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to view all data in the operational health and resource utilization charts: To view all data in the operational health and resource utilization charts for an organization: bigquery.jobs.listExecutionMetadata or bigquery.jobs.listAll on the organization bigquery.reservationAssignments.list on the administration project used to create the reservations bigquery.capacityCommitments.list on the administration project used to create the reservations As an on-demand user, to view all data in the resource utilization charts for an organization: bigquery.jobs.listExecutionMetadata or bigquery.jobs.listAll on the organization To view operational health summary data for BigQuery table storage: bigquery.tables.get or bigquery.tables.list on the organization To view operational health and resource utilization charts at the reservation level: bigquery.reservations.list on the administration project used to create the reservations bigquery.reservationAssignments.list on the administration project used to create the reservations To view resource utilization charts at the project level: bigquery.jobs.listAll on the project You might also be able to get these permissions with custom roles or other predefined roles .
- Required roles To get the permissions that you need to view all data in the operational health and resource utilization charts, ask your administrator to grant you the following IAM roles on your organization: BigQuery Resource Viewer ( roles/bigquery.resourceViewer ) BigQuery Metadata Viewer ( roles/bigquery.metadataViewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Monitor health, resource utilization, and jobs As a BigQuery administrator, you can monitor your organization's health, slots use, and jobs performance over time with operational health and resource utilization charts.

