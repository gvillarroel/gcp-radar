---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.902Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Read-only dashboard chart configuration view"
feature_slug: "read-only-dashboard-chart-configuration-view"
latest_feature_date: "2022-06-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/metrics-management"
  - "https://docs.cloud.google.com/monitoring/docs/application-monitoring"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus"
keywords:
  - "read"
  - "only"
  - "dashboard"
  - "chart"
  - "configuration"
  - "view"
  - "users"
  - "can"
---

# Read-only dashboard chart configuration view

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

Dashboard users can view chart configuration while a dashboard is in read-only mode.

## Extended Definition

Dashboard users can view chart configuration while a dashboard is in read-only mode.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus](https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus)

## Supporting Pages

### View and manage metric usage \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- Source ID: `site-docs-reference`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- Reads from Metrics Explorer or charts on custom dashboards are "console" reads, and API reads from other sources are "other".
- To view a chart showing the sources of metric reads over time, click the number of metric reads.
- You can modify the chart configuration, discard it, or you can add it to a custom dashboard.
- View the volume of excluded metrics To see the volume of excluded bytes or samples as a chart in Metrics Explorer, do the following: In the Google Cloud console, go to the query stats Metrics management page: Go to Metrics management If you use the search bar to find this page, then select the result whose subheading is Monitoring .

### View application telemetry \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- Source ID: `site-docs-reference-2`
- Final score: 147
- Re-rank relevance: N/A

Evidence snippets:
- View chart configuration To view details like the metric type and the aggregation options for a chart that displays metric data, go to the toolbar of a chart or table, and then click info Information .
- This is the project that you use to view your application's telemetry data: To get the permissions that you need to view log and metric data, and to create alerting policies and customize dashboards, ask your administrator to grant you the following IAM roles: Logs Viewer ( roles/logging.viewer ) on your App Hub host project or management project and any other projects listed in its default log scope.
- View summary information To view general information about the application along with a list of services and workloads, on the dashboard for the application, select the Overview tab: As shown, this tab provides general information about the application along with a list of services and workloads that are registered to the application.
- To open the flyout that displays both metric and log data, do one of the following: To filter log data only by the resource type and applicable variables, in the chart's toolbar, click more vert More chart options , and then select Inspect related logs .

### Collect Prometheus metrics \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus](https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus)
- Source ID: `site-iam-reference`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- For the JSON Exporter example, use the following procedure: Edit the Ops Agent configuration file, /etc/google-cloud-ops-agent/config.yaml , and add the following Prometheus receiver and pipeline entries: metrics: receivers: prometheus: type: prometheus config: scrape configs: - job name: 'json exporter' scrape interval: 10s metrics path: /probe params: module: [default] target: [http://localhost:8000/examples/data.json] static configs: - targets: ['localhost:7979'] service: pipelines: prometheus pipeline: receivers: - prometheus If you have other configuration entries in this file already, add the Prometheus receiver and pipeline to the existing metrics and service entries.
- For information about dashboards and the types of charts you can use, see Dashboards and charts .
- For information about creating dashboards, see Dashboards and charts .
- The full structure of the Prometheus receiver is shown in the following: metrics: receivers: prom application: type: prometheus config: scrape configs: - job name: ' STRING ' # must be unique across all Prometheus receivers scrape interval: # duration, like 10m or 15s scrape timeout: # duration, like 10m or 15s metrics path: # resource path for metrics, default = /metrics honor timestamps: # boolean, default = false scheme: # http or https, default = http params: - STRING : STRING basic auth: username: STRING password: SECRET password file: STRING authorization: type: STRING # default = Bearer credentials: SECRET credentials file: FILENAME oauth2: OAUTH2 # See Prometheus oauth2 follow redirects: # boolean, default = true enable http2: # boolean, default = true tls config: TLS CONFIG # See Prometheus tls config proxy url: STRING static configs: STATIC CONFIG # See Prometheus static config relabel configs: RELABEL CONFIG # See Prometheus relabel config metric relabel configs: METRIC RELABEL CONFIGS # See Prometheus metric relabel configs For examples of relabeling configs, see Additional receiver configuration .

