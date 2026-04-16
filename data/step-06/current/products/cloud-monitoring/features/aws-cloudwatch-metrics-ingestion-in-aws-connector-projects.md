---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.811Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "AWS CloudWatch metrics ingestion in AWS connector projects"
feature_slug: "aws-cloudwatch-metrics-ingestion-in-aws-connector-projects"
latest_feature_date: "2024-08-22"
deprecation_date: "2024-08-22"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/metrics-management"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/configuration"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp"
keywords:
  - "aws"
  - "cloudwatch"
  - "metrics"
  - "ingestion"
  - "connector"
  - "projects"
  - "feature"
  - "ingests"
---

# AWS CloudWatch metrics ingestion in AWS connector projects

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

This feature ingests AWS CloudWatch metrics into Cloud Monitoring by using AWS connector projects; This feature ingests AWS CloudWatch metrics into Cloud Monitoring by using AWS connector projects; deprecated on 2024-08-22.

## Extended Definition

This feature ingests AWS CloudWatch metrics into Cloud Monitoring by using AWS connector projects; This feature ingests AWS CloudWatch metrics into Cloud Monitoring by using AWS connector projects; deprecated on 2024-08-22.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/configuration](https://docs.cloud.google.com/monitoring/agent/ops-agent/configuration)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp](https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp)

## Supporting Pages

### View and manage metric usage \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- Source ID: `site-docs-reference`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- This chart can tell you which projects are sending the most data, and if any project is sending an increasing or decreasing amount of data. ( Billable samples only ) To find the namespaces that are sending metrics with the largest contributions to the billable values, use the Namespace Volume Ingestion chart.
- For examples that start with the Namespace Volume Ingestion chart and use Metrics Explorer to perform ingestion-volume attribution, see the following: Identify high-volume metrics Identify high-volume namespaces For more information about using Metrics Explorer to analyze data, including actions like comparing the current month's behavior to the last month's behavior, see Explore charted data .
- View summaries of metric usage To view summaries of the number of billable metrics, rates of metric ingestion, and error rate, do the following: In the Google Cloud console, go to the query stats Metrics management page: Go to Metrics management If you use the search bar to find this page, then select the result whose subheading is Monitoring .
- The following screenshot shows an example: To see a summary of how many billable metrics are currently active in the projects in your metrics scope, refer to the the Active Metrics scorecard.

### Configure the Ops Agent \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/configuration](https://docs.cloud.google.com/monitoring/agent/ops-agent/configuration)
- Source ID: `site-iam-reference`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- 27 common frames omitted The agent ingests each line from the log file into Cloud Logging in the following format: { "insertId": "...", "jsonPayload": { "line": "16", "message": "javax.servlet.ServletException: Something bad happened\n at com.example.myproject.OpenSessionInViewFilter.doFilter(OpenSessionInViewFilter.java:60)\n at org.mortbay.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1157)\n at com.example.myproject.ExceptionHandlerFilter.doFilter(ExceptionHandlerFilter.java:28)\n at org.mortbay.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1157)\n at com.example.myproject.OutputBufferFilter.doFilter(OutputBufferFilter.java:33)\nCaused by: com.example.myproject.MyProjectServletException\n at com.example.myproject.MyServlet.doPost(MyServlet.java:169)\n at javax.servlet.http.HttpServlet.service(HttpServlet.java:727)\n at javax.servlet.http.HttpServlet.service(HttpServlet.java:820)\n at org.mortbay.jetty.servlet.ServletHolder.handle(ServletHolder.java:511)\n at org.mortbay.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1166)\n at com.example.myproject.OpenSessionInViewFilter.doFilter(OpenSessionInViewFilter.java:30)\n ...
- To disable self-log collection, add a global section to your user-specified configuration file and set the default self log file collection option to the value false : logging: ... metrics: ... global: default self log file collection: false Log-rotation configuration Starting with Ops Agent version 2.31.0, you can also set up the agent's log-rotation feature by using the configuration files.
- Example metrics service configurations A service configuration has the following structure: service: log level: CUSTOM LOG LEVEL pipelines: PIPELINE ID : receivers: [...] processors: [...] PIPELINE ID 2 : receivers: [...] processors: [...] To turn off the built-in ingestion of host metrics, redefine the default pipeline with an empty receivers list and no processors.
- Group Metric iis Windows only Currently open connections to IIS Network bytes transferred by IIS Connections opened to IIS Requests made to IIS The mssql receiver (Windows only) The mssql receiver (Windows only) ingests metrics of the mssql group.

### "Collect OpenTelemetry Protocol (OTLP) metrics and traces \_|\_ Cloud Monitoring\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp](https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp)
- Source ID: `site-iam-reference`
- Final score: 93
- Re-rank relevance: N/A

Evidence snippets:
- The following tabs show the metric descriptor that each ingestion API creates: Prometheus API { "name": "projects/ PROJECT ID /metricDescriptors/prometheus.googleapis.com/otlp test cumulative/counter", "labels": [ { "key": "instance name" }, { "key": "machine type" } ], "metricKind": "CUMULATIVE", "valueType": "DOUBLE", "type": "prometheus.googleapis.com/otlp test cumulative/counter", "monitoredResourceTypes": [ "prometheus target" ] } Monitoring API { "name": "projects/ PROJECT ID /metricDescriptors/workload.googleapis.com/otlp.test.cumulative", "labels": [ { "key": "instrumentation source" } ], "metricKind": "CUMULATIVE", "valueType": "DOUBLE", "type": "workload.googleapis.com/otlp.test.cumulative", "monitoredResourceTypes": [ "gce instance", ...many other types deleted... ] } The following table summarizes some of the format differences imposed by the APIs used to ingest OTLP metrics: Prometheus API Monitoring API Metric domain prometheus.googleapis.com workload.googleapis.com OTLP metric name Modified during ingestion Used as provided Monitored resource prometheus target gce instance Ingestion formats and queries The metrics mode used in the OTLP receiver affects the way you query the resulting metrics in Cloud Monitoring when you build charts, dashboards, and alerting policies.
- The following tabs show the metric descriptor that each ingestion API creates: Prometheus API { "name": "projects/ PROJECT ID /metricDescriptors/prometheus.googleapis.com/otlp test gauge/gauge", "labels": [ { "key": "instance name" }, { "key": "machine type" } ], "metricKind": "GAUGE", "valueType": "DOUBLE", "type": "prometheus.googleapis.com/otlp test gauge/gauge", "monitoredResourceTypes": [ "prometheus target" ] } Monitoring API { "name": "projects/ PROJECT ID /metricDescriptors/workload.googleapis.com/otlp.test.gauge", "labels": [ { "key": "instrumentation source" } ], "metricKind": "GAUGE", "valueType": "DOUBLE", "type": "workload.googleapis.com/otlp.test.gauge", "monitoredResourceTypes": [ "gce instance", ...many other types deleted... ] } The application creates an OTLP counter metric, otlp.test.cumulative , that records increasing 64-bit floating-point values.
- To send data to the Monitoring API, set the value of the metrics mode option to googlecloudmonitoring , as shown in the following example: combined: receivers: otlp: type: otlp metrics mode: googlecloudmonitoring The ingestion format you use determines how the OTLP metrics are mapped into Cloud Monitoring.
- Pricing and quota The ingestion format you use determines how the OTLP metrics are charged: Prometheus API: When you use the Prometheus API to ingest your application's metrics, the data is subject to sample-based pricing, as if the metrics had come in by using Managed Service for Prometheus.

