---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.973Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "VM dashboard Explore tab"
feature_slug: "vm-dashboard-explore-tab"
latest_feature_date: "2020-08-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus"
  - "https://docs.cloud.google.com/monitoring/docs/monitoring-overview"
  - "https://docs.cloud.google.com/monitoring/docs/application-monitoring"
keywords:
  - "vm"
  - "dashboard"
  - "explore"
  - "tab"
  - "instances"
  - "summarizes"
  - "additional"
  - "metrics"
---

# VM dashboard Explore tab

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

The VM Instances dashboard Explore tab summarizes additional metrics and links to related metric types.

## Extended Definition

The VM Instances dashboard Explore tab summarizes additional metrics and links to related metric types.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus](https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus)
- [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)
- [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)

## Supporting Pages

### Cloud Monitoring overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)
- Source ID: `site-docs-reference`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- System and application metrics that the Ops Agent collects about system resources and applications running on Compute Engine instances.
- The chart service, Metrics Explorer , lets you quickly visualize and explore time-series data.
- The metricKind field describes the relationship between adjacent measurements within a time series: GAUGE metrics store the value of the thing being measured at a given moment in time—for example, an hourly temperature record.
- Monitor metrics for multiple Google Cloud projects To view and monitor the time-series data for multiple Google Cloud projects and AWS accounts through a single interface, configure a multi-project metrics scope .

### Collect Prometheus metrics \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus](https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus)
- Source ID: `site-iam-reference`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- The following sections describe the query tools available in Cloud Monitoring with Metrics Explorer: PromQL Monitoring filters You can create Cloud Monitoring dashboards and alerting policies for your metrics.
- The full structure of the Prometheus receiver is shown in the following: metrics: receivers: prom application: type: prometheus config: scrape configs: - job name: ' STRING ' # must be unique across all Prometheus receivers scrape interval: # duration, like 10m or 15s scrape timeout: # duration, like 10m or 15s metrics path: # resource path for metrics, default = /metrics honor timestamps: # boolean, default = false scheme: # http or https, default = http params: - STRING : STRING basic auth: username: STRING password: SECRET password file: STRING authorization: type: STRING # default = Bearer credentials: SECRET credentials file: FILENAME oauth2: OAUTH2 # See Prometheus oauth2 follow redirects: # boolean, default = true enable http2: # boolean, default = true tls config: TLS CONFIG # See Prometheus tls config proxy url: STRING static configs: STATIC CONFIG # See Prometheus static config relabel configs: RELABEL CONFIG # See Prometheus relabel config metric relabel configs: METRIC RELABEL CONFIGS # See Prometheus metric relabel configs For examples of relabeling configs, see Additional receiver configuration .
- The simplest way to verify that your Prometheus data is being ingested is to use the Cloud Monitoring Metrics Explorer page in the Google Cloud console: In the Google Cloud console, go to the leaderboard Metrics explorer page: Go to Metrics explorer If you use the search bar to find this page, then select the result whose subheading is Monitoring .
- To filter for any metrics with an id label matching this pattern, use the following query: example value count{id= "id. "} For more information about using PromQL in Metrics Explorer and Cloud Monitoring charts, see PromQL in Cloud Monitoring .

### View application telemetry \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- Source ID: `site-docs-reference-2`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- Explore trace data Note: If your dashboards aren't displaying the trace data that you expect, then you might need to configure the default trace scope or you might need additional Identity and Access Management permissions.
- Explore log data Note: If your dashboards aren't displaying the log data that you expect, then you might need to configure the default log scope or you might need additional Identity and Access Management permissions.
- Explore metric data The charts and tables on your dashboard display golden signals and other metric data that is relevant for the resources used by your application, service, or workload.
- However, the flyout retains your current context and lets you save your exploration results to a custom dashboard: To open a flyout, click query stats Explore data .

