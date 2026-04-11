---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:58:55.729Z"
product_name: "Anthos clusters on Azure"
product_slug: "anthos-clusters-on-azure"
feature_name: "Automatic Cloud Logging and Cloud Monitoring integration"
feature_slug: "automatic-cloud-logging-and-cloud-monitoring-integration"
latest_feature_date: "2021-12-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/azure/concepts/requirements"
keywords:
  - "built-in logging and monitoring"
  - "observability integration"
  - "automatic container monitoring"
  - "Stackdriver Logging"
  - "Stackdriver Monitoring"
  - "automatic system logging"
  - "Cloud Logging"
  - "Cloud Monitoring"
---

# Automatic Cloud Logging and Cloud Monitoring integration

Product: Anthos clusters on Azure
Coverage: MEDIUM

## Step 02 Summary

Anthos clusters on Azure now include automatic container monitoring and system logging through Cloud Logging and Cloud Monitoring.

## Extended Definition

For Anthos clusters on Azure, Google Cloud documentation indicates the managed control plane/cluster components connect to Cloud Logging and Cloud Monitoring endpoints to deliver telemetry. Specifically, the cluster can send logs to `logging.googleapis.com` and send metrics plus resource metadata to `monitoring.googleapis.com`/`opsconfigmonitoring.googleapis.com`, which is the documented mechanism for observability integration.

## Evidence Summary

The referenced requirements page documents the outbound Google APIs used by GKE on Azure, including explicit endpoints for Cloud Logging and Cloud Monitoring telemetry export.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/azure/concepts/requirements](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/azure/concepts/requirements)

## Supporting Pages

### Access requirements \_|\_ GKE on Azure \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/azure/concepts/requirements](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/azure/concepts/requirements)
- Source ID: `site-iam-reference`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- Outbound host names GKE on Azure might connect to the following endpoints: Endpoint Reason storage.googleapis.com For fetching binary dependencies from Cloud Storage during installation. .gcr.io For fetching binary dependencies during installation from Container Registry. gkeconnect.googleapis.com For GKE multi-cluster management . oauth2.googleapis.com sts.googleapis.com For cluster authentication. logging.googleapis.com For sending logs to Cloud Logging. monitoring.googleapis.com For sending metrics to Cloud Monitoring. opsconfigmonitoring.googleapis.com For sending resource metadata to Cloud Monitoring. servicecontrol.googleapis.com For Cloud Audit Logging.

