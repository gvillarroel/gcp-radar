---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.312Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery resource utilization charts"
feature_slug: "bigquery-resource-utilization-charts"
latest_feature_date: "2025-08-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/admin-resource-charts"
  - "https://docs.cloud.google.com/bigquery/docs/admin-intro"
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
keywords:
  - "bigquery"
  - "resource"
  - "utilization"
  - "charts"
  - "provides"
  - "monitoring"
  - "usage"
  - "provide"
---

# BigQuery resource utilization charts

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery provides resource utilization charts for monitoring usage; BigQuery resource utilization charts provide metric views and additional chart configuration options.

## Extended Definition

BigQuery provides resource utilization charts for monitoring usage; BigQuery resource utilization charts provide metric views and additional chart configuration options.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)
- [https://docs.cloud.google.com/bigquery/docs/admin-intro](https://docs.cloud.google.com/bigquery/docs/admin-intro)
- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)

## Supporting Pages

### "Monitor health, resource utilization, and jobs \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)
- Source ID: `site-docs-reference-2`
- Final score: 309
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- View and configure resource utilization charts To view and configure resource utilization charts, follow these steps: In the Google Cloud console, go to the BigQuery Monitoring page.
- Chart options BigQuery provides the following metric types to display in the charts: Slot Usage.
- Metric view BigQuery provides pre-configured views of resource utilization metrics.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to view all data in the operational health and resource utilization charts: To view all data in the operational health and resource utilization charts for an organization: bigquery.jobs.listExecutionMetadata or bigquery.jobs.listAll on the organization bigquery.reservationAssignments.list on the administration project used to create the reservations bigquery.capacityCommitments.list on the administration project used to create the reservations As an on-demand user, to view all data in the resource utilization charts for an organization: bigquery.jobs.listExecutionMetadata or bigquery.jobs.listAll on the organization To view operational health summary data for BigQuery table storage: bigquery.tables.get or bigquery.tables.list on the organization To view operational health and resource utilization charts at the reservation level: bigquery.reservations.list on the administration project used to create the reservations bigquery.reservationAssignments.list on the administration project used to create the reservations To view resource utilization charts at the project level: bigquery.jobs.listAll on the project You might also be able to get these permissions with custom roles or other predefined roles .

### Introduction to BigQuery administration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-intro](https://docs.cloud.google.com/bigquery/docs/admin-intro)
- Source ID: `site-docs-reference-2`
- Final score: 171
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Monitor resources Google Cloud provides the capability to monitor and audit your resources, including BigQuery resources.
- The Cloud Monitoring dashboard Cloud Monitoring provides a dashboard for monitoring BigQuery.
- BigQuery provides views for each resource type.
- Troubleshoot In addition to the features described in this document for monitoring and managing your organization's BigQuery system, the following resources are available for troubleshooting problems that might arise: BigQuery error messages BigQuery billing questions Troubleshoot quota errors If you need additional assistance, see Get support .

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Partner references BigQuery and Monte Carlo How Resident Reduced Data Issues with Monte Carlo New Relic Solution New Relic Infrastructure Monitoring Category Data Quality, Observability, & FinOps Description New Relic provides performance, availability, and monitoring services that improve your product, improve your business, and keep your customers happy.
- Partner references Google BigQuery resources Connect to BigQuery Understanding BigQuery costs Unravel for BigQuery datasheet Partner Advantage page Direct link Validio Solution Validio Platform Category Data Quality, Observability, & FinOps Description Validio is the next generation data quality and reliability platform and offers the only data quality solution on the market monitoring and validating both data in motion and data at rest on datapoint and pipeline metadata level.
- Partner references Incorta unified data & analytics platform Incorta Google BigQuery Connector Partner Advantage page Direct link Informatica Solution Informatica IICS Category ETL & Data Integration Description Informatica Intelligent Cloud Services (IICS) is a cloud-based data integration platform that provides a variety of features such as business data integration, application integration, and API management between cloud and local applications.
- Partner references Configuring BigQuery Data Transformation in BigQuery Partner Advantage page Direct link Databricks Solution Databricks Lakehouse Category BI, ML, & Advanced Analytics Description Databricks SQL provides an easy-to-use platform for analysts who want to run SQL queries on their data lake, create multiple visualization types to explore query results from different perspectives, and build and share dashboards.

