---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:40:14.483Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "Cloud Monitoring integration for Application Integration"
feature_slug: "cloud-monitoring-integration-for-application-integration"
latest_feature_date: "2023-06-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/cloud-monitoring"
  - "https://docs.cloud.google.com/application-integration/docs/alerts"
  - "https://docs.cloud.google.com/application-integration/docs/autoscaling"
keywords:
  - "performance"
  - "monitoring"
  - "integrates"
  - "alerts"
  - "usage"
---

# Cloud Monitoring integration for Application Integration

Product: Application Integration
Coverage: MEDIUM

## Step 02 Summary

Application Integration now integrates with Cloud Monitoring for usage, performance, alerts, and health visibility of integration resources.

## Extended Definition

Application Integration now integrates with Cloud Monitoring for usage, performance, alerts, and health visibility of integration resources.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/cloud-monitoring](https://docs.cloud.google.com/application-integration/docs/cloud-monitoring)
- [https://docs.cloud.google.com/application-integration/docs/alerts](https://docs.cloud.google.com/application-integration/docs/alerts)
- [https://docs.cloud.google.com/application-integration/docs/autoscaling](https://docs.cloud.google.com/application-integration/docs/autoscaling)

## Supporting Pages

### Use Cloud Monitoring \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/cloud-monitoring](https://docs.cloud.google.com/application-integration/docs/cloud-monitoring)
- Source ID: `site-docs-root-2`
- Final score: 102
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This means that for all your published integrations, the integration metrics, usage data, and alerts are automatically ingested during the execution of your integrations.
- All the performance metric data that is diaplayed in the Monitoring dashboards are for informational purpose only.
- Access metrics using custom dashboards To create custom monitoring dashboards for your Application Integration resources in your Google Cloud project, do the following: In the Google Cloud console, go to the Cloud Monitoring > Dashboard Overview page: Go to Dashboard Overview page Click Create dashboard .
- To create a chart using the Application Integration resource metrics, do the following: In the Google Cloud console, go to the Cloud Monitoring > Metrics explorer page: Go to Metrics explorer page In the Select a metric pane, expand the Metric menu and select Integration Version as the Active resource .

### Configure alerts \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/alerts](https://docs.cloud.google.com/application-integration/docs/alerts)
- Source ID: `site-docs-root-2`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- You can set alerts in the following two ways: Alerts in Cloud Monitoring Alerts in Cloud Logging Alerts in Cloud Monitoring You can create and configure Cloud Monitoring alerts to notify you when an Application Integration resource exceeds a specified threshold.
- Create an alert You can create log-based alerts from the Logs Explorer page in the Google Cloud console or by using the Monitoring API.
- For detailed instructions, see the following sections: Create a log-based alert by using the Logs Explorer Create a log-based alert by using the Monitoring API Note: You may incur additional charges for using Cloud Monitoring API directly.
- Alerts in Cloud Logging You can create and configure log-based alerts to notify you whenever a specific message appears in your included logs.

### About autoscaling in Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/autoscaling](https://docs.cloud.google.com/application-integration/docs/autoscaling)
- Source ID: `site-docs-root-2`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- Observability and monitoring Application Integration automatically exports a rich set of metrics to Cloud Monitoring, providing deep insights into the usage, performance, and health of your integrations.
- Benefits The autoscaling features of Application Integration provide the following advantages: Performance at scale: Automatically adjust to changes in traffic and usage.
- While a single, pre-built dashboard for all metrics across projects isn't directly available within the Application Integration platform, you can leverage Cloud Monitoring to create custom dashboards tailored to your specific needs.
- To ensure smooth and reliable performance during anticipated traffic surges (such as marketing campaigns or seasonal peaks), it's recommended to plan ahead and request resource scaling in advance.

