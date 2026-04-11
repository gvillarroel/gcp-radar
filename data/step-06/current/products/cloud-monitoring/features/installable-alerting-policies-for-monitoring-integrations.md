---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:55:18.107Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Installable alerting policies for Monitoring integrations"
feature_slug: "installable-alerting-policies-for-monitoring-integrations"
latest_feature_date: "2023-02-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/monitoring/agent/integrations"
  - "https://docs.cloud.google.com/monitoring/docs/release-notes"
  - "https://docs.cloud.google.com/monitoring/docs/monitoring-overview"
keywords:
  - "installable"
  - "alerting"
  - "policies"
  - "for"
  - "monitoring"
  - "integrations"
  - "provides"
  - "pre"
---

# Installable alerting policies for Monitoring integrations

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

Cloud Monitoring provides installable pre-defined alerting policies for integrated services and GKE observability views.

## Extended Definition

Cloud Monitoring provides installable pre-defined alerting policies for integrated services and GKE observability views.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/monitoring/agent/integrations](https://docs.cloud.google.com/monitoring/agent/integrations)
- [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)

## Supporting Pages

### Manage integrations \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/integrations](https://docs.cloud.google.com/monitoring/agent/integrations)
- Source ID: `site-iam-reference`
- Final score: 190
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Install alerting policies If Cloud Monitoring alerting policies are available for an integration, then the details pane displays an Alerts tab.
- To view the descriptions of available alerting policies, do the following: From the Integrations page, click View details for an integration.
- The Alerts tab provides a list of available alerting policies and provides an interface for installing them.
- For more information about alerting policies in Cloud Monitoring, see Introduction to alerting .

### Monitoring release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- February 17, 2023 Feature You can now install pre-defined alerting policies for services integrated with Cloud Monitoring from the Monitoring Integrations page and from the Observability tab on the pages for Kubernetes Engine clusters and workloads.
- May 17, 2023 Change Cloud Monitoring now provides GA support to prevent alerting policies from sending notifications and creating incidents during specific time periods.
- For more information about SQL-based alerting policies, see the following documents: Monitor your SQL query results with an alerting policy Incidents for SQL-based alerting policies October 14, 2024 Feature You can now use the Monitoring API to configure a metric-based alerting policy to send notifications when incidents are closed.
- For more information, see the following pages: Incidents for metric-based alerting policies gcloud documentation API documentation October 02, 2025 Feature Application Monitoring is now generally available (GA) .

### Cloud Monitoring overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)
- Source ID: `site-docs-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- You can create and manage alerting policies by using the Google Cloud console, the Cloud Monitoring API, the Google Cloud CLI, or Terraform.
- Query languages for Cloud Monitoring When you create an alerting policy or a chart, you must provide a query that describes the data that you want to monitor or chart: Google Cloud console: You can build your query by making selections from menus, or you can write a query.
- Cloud Monitoring services Cloud Monitoring provides different services that you can use to understand the health and performance of your applications, and of the other Google Cloud services that you use.
- Charts and tables that show metric data Log data and error groups Charts for alerting policies Information about alerts Text Events , such as a reboot or a crash, that affects the operation of a system.

