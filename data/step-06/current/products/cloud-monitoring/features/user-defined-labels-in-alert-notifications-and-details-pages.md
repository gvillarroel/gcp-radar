---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:55:18.117Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "User-defined labels in alert notifications and details pages"
feature_slug: "user-defined-labels-in-alert-notifications-and-details-pages"
latest_feature_date: "2022-03-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent"
  - "https://docs.cloud.google.com/monitoring/docs/release-notes"
  - "https://docs.cloud.google.com/monitoring/docs/metrics-management"
keywords:
  - "user"
  - "defined"
  - "labels"
  - "in"
  - "alert"
  - "notifications"
  - "and"
  - "details"
---

# User-defined labels in alert notifications and details pages

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

User-defined labels are included in PagerDuty, Pub/Sub, webhook, and email notifications and are visible on alerting policy and incident details pages.

## Extended Definition

User-defined labels are included in PagerDuty, Pub/Sub, webhook, and email notifications and are visible on alerting policy and incident details pages.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent](https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent)
- [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)

## Supporting Pages

### "User-defined metrics from the agent \_|\_ Cloud Monitoring \_|\_ Google\

- URL: [https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent](https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent)
- Source ID: `site-iam-reference`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- More details are available in User-defined metrics overview and Structure of time series .
- The default processing will write all metrics to Cloud Monitoring , which will drop any unrecognized metrics : ones that aren ' t in the list of curated metrics and don ' t have the user - defined metric metadata . < Rule "go back" > Target "return" < / Rule > < / Chain > Load the new configuration Restart your agent to pick up the new configuration by executing the following command on your VM instance: sudo service stackdriver-agent restart Your user-defined metric information begins to flow into Monitoring.
- The first five components make up the collectd identifier for the metric: Host, Plugin, Plugin-instance, Type, Type-instance, [value] In this example, the metrics you want to send as a user-defined metric have the following values: Component Expected value(s) Host any Plugin curl json Plugin instance nginx my service a or nginx my service b 1 Type gauge Type instance active-connections [value] any value 2 Notes : 1 In the example, this value encodes both the application (Nginx) and the connected service name.
- How Monitoring handles collectd metrics As background, the Monitoring agent processes collectd metrics and sends them to Monitoring, which treats each metric as a member of one of the following categories: User-defined metrics .

### Monitoring release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- March 28, 2022 Feature User-defined labels are now included in PagerDuty, Pub/Sub, Webhooks, and email notifications, and you can also view these labels on the details pages of alerting policies and incidents.
- To learn how you can create user-defined labels that contain severity information and attach those labels to alerting policies or incidents, see Add severity levels to an alerting policy .
- June 03, 2022 Feature You can now add, edit, and remove alerting policy user labels by using the Cloud console when you use the preview alerting interface.
- Feature You can now add user-defined labels to public and private Uptime checks.

### View and manage metric usage \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- Source ID: `site-docs-reference`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- What's next Use the Ops Agent to collect metrics: Configure the Ops Agent Monitor third-party applications Collect Prometheus metrics Collect OTLP telemetry Use the Google Cloud Managed Service for Prometheus to collect metrics: Use managed collection Use self-deployed collection Use the OpenTelemetry Collector Use custom metrics in Cloud Run Collect on-premises and hybrid-cloud metrics by using BindPlane Create user-defined metrics by using the Monitoring API Google Cloud Observability pricing Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Note: The Metrics Management page lists only alerting policies and custom dashboards defined in the current project; metrics listed with no alerting policies or custom dashboards might have alerting policies or custom dashboards in another project in your metrics scope.
- For example, to list active metrics that appear in no alerting policies and in no custom dashboards, add the following filters to the filter bar: Status: Active Alert Policies: (Empty) Custom Dashboards: (Empty) By default, when you add multiple filters, the table includes a row when the row meets all filters.
- Authorization To get the permissions that you need to view dashboards and create alerting policies by using the Google Cloud console or to create, edit, and delete metric-exclusion rules, ask your administrator to grant you the Monitoring Editor ( roles/monitoring.editor ) IAM role on your project.

