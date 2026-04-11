---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:55:18.093Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Synthetic monitors restricted ingress support"
feature_slug: "synthetic-monitors-restricted-ingress-support"
latest_feature_date: "2024-05-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/release-notes"
  - "https://docs.cloud.google.com/monitoring/docs/custom-constraints"
  - "https://docs.cloud.google.com/monitoring/docs/monitoring-overview"
keywords:
  - "synthetic"
  - "monitors"
  - "restricted"
  - "ingress"
  - "this"
  - "allows"
  - "to"
  - "run"
---

# Synthetic monitors restricted ingress support

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

This feature allows synthetic monitors to run without requiring an allow-all ingress rule.

## Extended Definition

This feature allows synthetic monitors to run without requiring an allow-all ingress rule.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- [https://docs.cloud.google.com/monitoring/docs/custom-constraints](https://docs.cloud.google.com/monitoring/docs/custom-constraints)
- [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)

## Supporting Pages

### Monitoring release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- May 06, 2024 Feature Synthetic monitors no longer require that the ingress rule be set to allow all traffic.
- Compared to the Prometheus Stackdriver sidecar, this new pipeline is easy to set up, allows filtering to control cost, supports larger clusters, is fully managed, supports Autopilot and horizontal Pod autoscaling, and offers better pricing.
- July 17, 2023 Feature You can now create synthetic monitors, which let you continuously test the availability, consistency, and performance of your services and application web pages and APIs, by using automated script based tests.
- This feature is available for dashboards managed by Cloud Monitoring, and for the observability dashboards managed by Compute Engine, Google Kubernetes Engine and Cloud Run.

### "Use custom organization policies \_|\_ Cloud Monitoring \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/monitoring/docs/custom-constraints](https://docs.cloud.google.com/monitoring/docs/custom-constraints)
- Source ID: `site-docs-reference`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- When you have entered a value into each field, the equivalent YAML configuration for this custom constraint appears on the right. gcloud To create a custom constraint, create a YAML file using the following format: name : organizations/ ORGANIZATION ID /customConstraints/ CONSTRAINT NAME resourceTypes : RESOURCE NAME methodTypes : - CREATE - UPDATE condition : " CONDITION " actionType : ACTION displayName : DISPLAY NAME description : DESCRIPTION Replace the following: ORGANIZATION ID : your organization ID, such as 123456789 .
- This page shows you how to use Organization Policy Service custom constraints to restrict specific operations on the following Google Cloud resources: monitoring.googleapis.com/AlertPolicy monitoring.googleapis.com/NotificationChannel monitoring.googleapis.com/Snooze To learn more about Organization Policy, see Custom organization policies .
- The output is the following: Operation denied by custom org policies: ["customConstraints/alertDocHasProject": "Alerting policy documentation must include project name."] Example custom organization policies for common use cases This table provides syntax examples for some common custom constraints.
- However, if you want more granular, customizable control over the specific fields that are restricted in your organization policies, you can also create custom constraints and use those custom constraints in an organization policy.

### Cloud Monitoring overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)
- Source ID: `site-docs-reference`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- Proactive monitoring and validation To test the availability, consistency, and performance of your services, applications, web pages, and APIs, create synthetic monitors .
- You can create and manage synthetic monitors by using the Google Cloud console, the Cloud Monitoring API, the Google Cloud CLI, or Terraform.
- The scoping project stores the alerts , synthetic monitors , and dashboards that you configure.
- The following screenshot illustrates a chart with this configuration: Pricing To learn about pricing for Cloud Monitoring, see the Google Cloud Observability pricing page.

