---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.870Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Repeated notifications for metric-based alerting policies"
feature_slug: "repeated-notifications-for-metric-based-alerting-policies"
latest_feature_date: "2023-04-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/metrics-management"
  - "https://docs.cloud.google.com/monitoring/docs/troubleshoot-application-monitoring"
  - "https://docs.cloud.google.com/monitoring/docs/monitoring-overview"
keywords:
  - "repeated"
  - "notifications"
  - "metric"
  - "based"
  - "alerting"
  - "policies"
  - "can"
  - "send"
---

# Repeated notifications for metric-based alerting policies

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

Metric-based alerting policies can send repeated notifications for open and acknowledged incidents.

## Extended Definition

Metric-based alerting policies can send repeated notifications for open and acknowledged incidents.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- [https://docs.cloud.google.com/monitoring/docs/troubleshoot-application-monitoring](https://docs.cloud.google.com/monitoring/docs/troubleshoot-application-monitoring)
- [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)

## Supporting Pages

### View and manage metric usage \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- Source ID: `site-docs-reference`
- Final score: 165
- Re-rank relevance: N/A

Evidence snippets:
- For example, to list active metrics that appear in no alerting policies and in no custom dashboards, add the following filters to the filter bar: Status: Active Alert Policies: (Empty) Custom Dashboards: (Empty) By default, when you add multiple filters, the table includes a row when the row meets all filters.
- Authorization To get the permissions that you need to view dashboards and create alerting policies by using the Google Cloud console or to create, edit, and delete metric-exclusion rules, ask your administrator to grant you the Monitoring Editor ( roles/monitoring.editor ) IAM role on your project.
- Note: The Metrics Management page lists only alerting policies and custom dashboards defined in the current project; metrics listed with no alerting policies or custom dashboards might have alerting policies or custom dashboards in another project in your metrics scope.
- It is possible have charts and alerting policies that refer to metrics with no data (inactive metrics) and to query such metrics; on the Metrics Management page, these metrics are considered used metrics, even though any read operations return no data.

### Troubleshoot Application Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/troubleshoot-application-monitoring](https://docs.cloud.google.com/monitoring/docs/troubleshoot-application-monitoring)
- Source ID: `site-docs-reference`
- Final score: 140
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To associate an alerting policy with a workload or service by using the Google Cloud console, do the following: In the Google Cloud console, go to the notifications Alerting page: Go to Alerting If you use the search bar to find this page, then select the result whose subheading is Monitoring .
- Your alerting policies are missing For an alerting policy to be shown on an Application Monitoring dashboard, you must associate the alerting policy with a service or workload by adding specific labels to the policy.
- Home Documentation Observability Cloud Monitoring Guides Send feedback Troubleshoot Application Monitoring Stay organized with collections Save and categorize content based on your preferences.
- For example, for metric-absence policies, you might get notified because the change in labels might cause a monitored time series to stop reporting samples.

### Cloud Monitoring overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)
- Source ID: `site-docs-reference`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- Charts and tables that show metric data Log data and error groups Charts for alerting policies Information about alerts Text Events , such as a reboot or a crash, that affects the operation of a system.
- Incidents and notifications in Cloud Monitoring To be notified when the value of a performance metric meets criteria that you define, create an alerting policy .
- Home Documentation Observability Cloud Monitoring Guides Send feedback Cloud Monitoring overview Stay organized with collections Save and categorize content based on your preferences.
- Google-defined log-based metrics include counts of the errors that your service detects and the total number of log entries received by your Google Cloud project.

