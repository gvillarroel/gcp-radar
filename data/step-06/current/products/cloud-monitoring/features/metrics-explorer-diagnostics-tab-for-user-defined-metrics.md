---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.920Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Metrics Explorer Diagnostics tab for user-defined metrics"
feature_slug: "metrics-explorer-diagnostics-tab-for-user-defined-metrics"
latest_feature_date: "2022-02-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/metrics-management"
  - "https://docs.cloud.google.com/monitoring/docs/application-monitoring"
  - "https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent"
keywords:
  - "metrics"
  - "explorer"
  - "diagnostics"
  - "tab"
  - "user"
  - "defined"
  - "provides"
  - "summary"
---

# Metrics Explorer Diagnostics tab for user-defined metrics

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

The Metrics Explorer Diagnostics tab provides summary, usage, audit log, and detailed views for user-defined metrics.

## Extended Definition

The Metrics Explorer Diagnostics tab provides summary, usage, audit log, and detailed views for user-defined metrics.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- [https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent](https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent)

## Supporting Pages

### View and manage metric usage \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- Source ID: `site-docs-reference`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- What's next Use the Ops Agent to collect metrics: Configure the Ops Agent Monitor third-party applications Collect Prometheus metrics Collect OTLP telemetry Use the Google Cloud Managed Service for Prometheus to collect metrics: Use managed collection Use self-deployed collection Use the OpenTelemetry Collector Use custom metrics in Cloud Run Collect on-premises and hybrid-cloud metrics by using BindPlane Create user-defined metrics by using the Monitoring API Google Cloud Observability pricing Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Other billable metrics The Metrics Management page does not report user-defined log-based metrics .
- For more information, see the User-defined-metrics section in the Monitoring quotas document.
- For more information, see the User-defined-metrics section in the Monitoring quotas document.

### "User-defined metrics from the agent \_|\_ Cloud Monitoring \_|\_ Google\

- URL: [https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent](https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent)
- Source ID: `site-iam-reference`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Monitoring provides a default configuration that maps StatsD metrics to user-defined metrics.
- TypeInstance "^active-connections$" # Match on type instance . < / Match > < Target "set" > Specify the metric descriptor type : MetaData "stackdriver metric type" "custom.googleapis.com/nginx/active connections" Specify a value for the "service name" label ; clean it up in the next Target : MetaData "label:service name" "%{plugin instance}" < / Target > < Target "replace" > Remove the "nginx " prefix in the service name to get the real service name : MetaData "label:service name" "nginx " "" < / Target > < / Rule > The following rule is run after rewriting your metric , or if the metric wasn ' t one of your user - defined metrics .
- The default processing will write all metrics to Cloud Monitoring , which will drop any unrecognized metrics : ones that aren ' t in the list of curated metrics and don ' t have the user - defined metric metadata . < Rule "go back" > Target "return" < / Rule > < / Chain > Load the new configuration Restart your agent to pick up the new configuration by executing the following command on your VM instance: sudo service stackdriver-agent restart Your user-defined metric information begins to flow into Monitoring.
- The first five components make up the collectd identifier for the metric: Host, Plugin, Plugin-instance, Type, Type-instance, [value] In this example, the metrics you want to send as a user-defined metric have the following values: Component Expected value(s) Host any Plugin curl json Plugin instance nginx my service a or nginx my service b 1 Type gauge Type instance active-connections [value] any value 2 Notes : 1 In the example, this value encodes both the application (Nginx) and the connected service name.

### View application telemetry \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- Source ID: `site-docs-reference-2`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- View summary information To view general information about the application along with a list of services and workloads, on the dashboard for the application, select the Overview tab: As shown, this tab provides general information about the application along with a list of services and workloads that are registered to the application.
- To view the chart or table in the Metrics Explorer, go to the toolbar, click more vert More , and then select View in Metrics Explorer .
- Explore data To explore a chart or table in more detail, either open a flyout or open the Metrics Explorer page.
- Detached : Services or workloads that have been registered to an application, but that App Hub can't manage or monitor because their underlying Google Cloud resources are no longer part of the application management boundary that you have defined.

