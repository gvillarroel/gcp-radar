---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:55:18.111Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "User-defined labels for uptime checks"
feature_slug: "user-defined-labels-for-uptime-checks"
latest_feature_date: "2022-07-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/release-notes"
  - "https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent"
  - "https://docs.cloud.google.com/monitoring/docs/metrics-management"
keywords:
  - "user"
  - "defined"
  - "labels"
  - "for"
  - "uptime"
  - "checks"
  - "public"
  - "and"
---

# User-defined labels for uptime checks

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

Public and private uptime checks support user-defined labels.

## Extended Definition

Public and private uptime checks support user-defined labels.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- [https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent](https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent)
- [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)

## Supporting Pages

### Monitoring release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Feature You can now add user-defined labels to public and private Uptime checks.
- To learn how you can create user-defined labels that contain severity information and attach those labels to alerting policies or incidents, see Add severity levels to an alerting policy .
- August 10, 2022 Change You can now create uptime checks for Cloud Run public endpoints by using the Monitoring API and specifying the Cloud Run Revision monitored-resource type.
- For private uptime checks, the Public Preview flow lets you create the Service Directory service and perform other prerequisite steps by using the Google Cloud console.

### "User-defined metrics from the agent \_|\_ Cloud Monitoring \_|\_ Google\

- URL: [https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent](https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent)
- Source ID: `site-iam-reference`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- The default processing will write all metrics to Cloud Monitoring , which will drop any unrecognized metrics : ones that aren ' t in the list of curated metrics and don ' t have the user - defined metric metadata . < Rule "go back" > Target "return" < / Rule > < / Chain > Load the new configuration Restart your agent to pick up the new configuration by executing the following command on your VM instance: sudo service stackdriver-agent restart Your user-defined metric information begins to flow into Monitoring.
- The first five components make up the collectd identifier for the metric: Host, Plugin, Plugin-instance, Type, Type-instance, [value] In this example, the metrics you want to send as a user-defined metric have the following values: Component Expected value(s) Host any Plugin curl json Plugin instance nginx my service a or nginx my service b 1 Type gauge Type instance active-connections [value] any value 2 Notes : 1 In the example, this value encodes both the application (Nginx) and the connected service name.
- Monitoring metric descriptor and time series On the Monitoring side, design a metric descriptor for your user-defined metric.
- TypeInstance "^active-connections$" # Match on type instance . < / Match > < Target "set" > Specify the metric descriptor type : MetaData "stackdriver metric type" "custom.googleapis.com/nginx/active connections" Specify a value for the "service name" label ; clean it up in the next Target : MetaData "label:service name" "%{plugin instance}" < / Target > < Target "replace" > Remove the "nginx " prefix in the service name to get the real service name : MetaData "label:service name" "nginx " "" < / Target > < / Rule > The following rule is run after rewriting your metric , or if the metric wasn ' t one of your user - defined metrics .

### View and manage metric usage \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- Source ID: `site-docs-reference`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- What's next Use the Ops Agent to collect metrics: Configure the Ops Agent Monitor third-party applications Collect Prometheus metrics Collect OTLP telemetry Use the Google Cloud Managed Service for Prometheus to collect metrics: Use managed collection Use self-deployed collection Use the OpenTelemetry Collector Use custom metrics in Cloud Run Collect on-premises and hybrid-cloud metrics by using BindPlane Create user-defined metrics by using the Monitoring API Google Cloud Observability pricing Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Changes in billable volume mean you are ingesting more data, and if the changes are sudden or unexpected, the cause might be a change in the the number of labels associated with a metric or a change in the way the values for the labels are set.
- In Cloud Monitoring, cardinality refers to the number of time series associated a metric and a resource, and is related to the labels and their values; there is one time series for each combination of label values.
- The metrics table also shows the domain of the metric, the set of labels for the metric, the project from which the metric was ingested, and the cardinality of the metric.

