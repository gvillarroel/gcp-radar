---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.780Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Cost Explorer"
feature_slug: "cost-explorer"
latest_feature_date: "2025-07-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus"
  - "https://docs.cloud.google.com/monitoring/docs/metrics-management"
  - "https://docs.cloud.google.com/monitoring/docs/application-monitoring"
keywords:
  - "cost"
  - "explorer"
  - "lets"
  - "you"
  - "monitor"
  - "understand"
  - "resource"
  - "costs"
---

# Cost Explorer

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

Cost Explorer lets you monitor and understand resource costs and utilization for a Google Cloud project or App Hub application.

## Extended Definition

Cost Explorer lets you monitor and understand resource costs and utilization for a Google Cloud project or App Hub application.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus](https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus)
- [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)

## Supporting Pages

### View and manage metric usage \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- Source ID: `site-docs-reference`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- The following screenshot shows an example of the metrics table: Select the metrics to view To manage your costs, you need to understand which billable metrics are generating the most traffic.
- Manage costs : Create rules to exclude unneeded metrics from being ingested into Cloud Monitoring.
- View trends over time to understand the relative costs of your billable metrics.
- View the volume of excluded metrics To see the volume of excluded bytes or samples as a chart in Metrics Explorer, do the following: In the Google Cloud console, go to the query stats Metrics management page: Go to Metrics management If you use the search bar to find this page, then select the result whose subheading is Monitoring .

### View application telemetry \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- Source ID: `site-docs-reference-2`
- Final score: 161
- Re-rank relevance: N/A

Evidence snippets:
- Detached : Services or workloads that have been registered to an application, but that App Hub can't manage or monitor because their underlying Google Cloud resources are no longer part of the application management boundary that you have defined.
- Troubleshoot For information that might help you understand what data you are viewing, or why a dashboard doesn't display data, see Troubleshoot Application Monitoring .
- List registered and discovered services and workloads App Hub lets you register infrastructure resources as services or workloads.
- Discovered : Application Monitoring derives the resource type by using the asset name, as defined by Cloud Asset Inventory .

### Collect Prometheus metrics \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus](https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus)
- Source ID: `site-iam-reference`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- We recommend using the Ops Agent Prometheus receiver when the following are true: You have experience using Prometheus, rely on the Prometheus standard, and understand how factors like scraping interval and cardinality can affect your costs.
- The simplest way to verify that your Prometheus data is being ingested is to use the Cloud Monitoring Metrics Explorer page in the Google Cloud console: In the Google Cloud console, go to the leaderboard Metrics explorer page: Go to Metrics explorer If you use the search bar to find this page, then select the result whose subheading is Monitoring .
- If you keep the Ops Agent default sampling frequency of 60 seconds, the number of bytes ingested per day is 57,600 the number of hosts: 8 (bytes) 1440 (minutes per day) 5 (metrics) n (hosts), or 57,600 n (hosts) For more information about estimating costs, see Pricing examples based on bytes ingested .
- To filter for any metrics with an id label matching this pattern, use the following query: example value count{id= "id. "} For more information about using PromQL in Metrics Explorer and Cloud Monitoring charts, see PromQL in Cloud Monitoring .

