---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.910Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Stackdriver Monitoring"
feature_slug: "bigquery-stackdriver-monitoring"
latest_feature_date: "2016-09-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/admin-resource-charts"
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
  - "https://docs.cloud.google.com/bigquery/docs/admin-intro"
keywords:
  - "bigquery"
  - "stackdriver"
  - "monitoring"
  - "integrates"
  - "monitor"
  - "resources"
  - "create"
  - "charts"
---

# BigQuery Stackdriver Monitoring

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery integrates with Stackdriver Monitoring to monitor resources and create charts and alerts from BigQuery metrics.

## Extended Definition

BigQuery integrates with Stackdriver Monitoring to monitor resources and create charts and alerts from BigQuery metrics.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)
- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- [https://docs.cloud.google.com/bigquery/docs/admin-intro](https://docs.cloud.google.com/bigquery/docs/admin-intro)

## Supporting Pages

### "Monitor health, resource utilization, and jobs \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)
- Source ID: `site-docs-reference-2`
- Final score: 155
- Re-rank relevance: N/A

Evidence snippets:
- View operational health charts To view information about the operational health of your organization, follow these steps: In the Google Cloud console, go to the BigQuery Monitoring page.
- View and configure resource utilization charts To view and configure resource utilization charts, follow these steps: In the Google Cloud console, go to the BigQuery Monitoring page.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to view all data in the operational health and resource utilization charts: To view all data in the operational health and resource utilization charts for an organization: bigquery.jobs.listExecutionMetadata or bigquery.jobs.listAll on the organization bigquery.reservationAssignments.list on the administration project used to create the reservations bigquery.capacityCommitments.list on the administration project used to create the reservations As an on-demand user, to view all data in the resource utilization charts for an organization: bigquery.jobs.listExecutionMetadata or bigquery.jobs.listAll on the organization To view operational health summary data for BigQuery table storage: bigquery.tables.get or bigquery.tables.list on the organization To view operational health and resource utilization charts at the reservation level: bigquery.reservations.list on the administration project used to create the reservations bigquery.reservationAssignments.list on the administration project used to create the reservations To view resource utilization charts at the project level: bigquery.jobs.listAll on the project You might also be able to get these permissions with custom roles or other predefined roles .
- Monitor health, resource utilization, and jobs As a BigQuery administrator, you can monitor your organization's health, slots use, and jobs performance over time with operational health and resource utilization charts.

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- Partner references Google BigQuery resources Connect to BigQuery Understanding BigQuery costs Unravel for BigQuery datasheet Partner Advantage page Direct link Validio Solution Validio Platform Category Data Quality, Observability, & FinOps Description Validio is the next generation data quality and reliability platform and offers the only data quality solution on the market monitoring and validating both data in motion and data at rest on datapoint and pipeline metadata level.
- Partner references BigQuery Integration Query Results Save Detection Google Cloud Monitoring Partner Advantage page Direct link Datafold Solution Datafold Category Data Quality, Observability, & FinOps Description Datafold is the unified platform for proactive data quality that combines automated data testing, data reconciliation, and observability to help data teams prevent data quality issues and accelerate their development velocity.
- Partner references Google BigQuery integration Connect to BigQuery monitoring Partner Advantage page Direct link Unravel Data Solution Unravel Platform Category Data Quality, Observability, & FinOps Description Unravel is a DataOps platform that enables data teams to intelligently optimize, automatically troubleshoot, and proactively control the costs of data pipelines and applications.
- Partner references BigQuery Integration in Datafold OAuth integration into BigQuery Decube Solution Data Trust Platform Category Data Quality, Observability, & FinOps Description Decube is a unified platform that integrates with your data stack enabling you to effortlessly monitor, manage, and govern your data assets with its Data Observability, Catalog and Governance modules.

### Introduction to BigQuery administration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-intro](https://docs.cloud.google.com/bigquery/docs/admin-intro)
- Source ID: `site-docs-reference-2`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- Administration charts and alerts You can use Cloud Monitoring to create custom charts based on the resources, metrics, and any aggregation that you specify.
- Troubleshoot In addition to the features described in this document for monitoring and managing your organization's BigQuery system, the following resources are available for troubleshooting problems that might arise: BigQuery error messages BigQuery billing questions Troubleshoot quota errors If you need additional assistance, see Get support .
- Monitor resources Google Cloud provides the capability to monitor and audit your resources, including BigQuery resources.
- This section describes the Google Cloud monitoring and auditing capabilities that apply to BigQuery.

