---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:38:24.557Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Log-Based Alerts"
feature_slug: "log-based-alerts"
latest_feature_date: "2021-07-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/logging/docs/release-notes"
  - "https://docs.cloud.google.com/logging/docs/logs-based-metrics"
  - "https://docs.cloud.google.com/logging/docs/logging-gce-quickstart"
keywords:
  - "log"
  - "based"
  - "alerts"
  - "logging"
  - "supports"
  - "that"
  - "trigger"
  - "when"
---

# Log-Based Alerts

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

Cloud Logging supports alerts that trigger when log contents match specified conditions and create incidents in Cloud Monitoring.

## Extended Definition

Cloud Logging supports alerts that trigger when log contents match specified conditions and create incidents in Cloud Monitoring.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/logging/docs/release-notes](https://docs.cloud.google.com/logging/docs/release-notes)
- [https://docs.cloud.google.com/logging/docs/logs-based-metrics](https://docs.cloud.google.com/logging/docs/logs-based-metrics)
- [https://docs.cloud.google.com/logging/docs/logging-gce-quickstart](https://docs.cloud.google.com/logging/docs/logging-gce-quickstart)

## Supporting Pages

### Logging release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/release-notes](https://docs.cloud.google.com/logging/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 222
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- April 06, 2021 Change Cloud Logging now supports 22 regions in which you can create a log bucket so that you can meet compliance and audit requirements when storing your logs.
- When triggered, a log-based alert notifies you that a match has appeared in your logs and opens an incident in Cloud Monitoring.
- When triggered, a log-based alert notifies you that a match has appeared in your logs and opens an incident in Cloud Monitoring.
- Feature Preview : Cloud Logging now supports alerts based on matching the content of your logs.

### Log-based metrics overview \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/logs-based-metrics](https://docs.cloud.google.com/logging/docs/logs-based-metrics)
- Source ID: `site-docs-root`
- Final score: 204
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For each stream, the backend system for log-based metrics uses the following rules to determine what value to write to the time series stored by Monitoring: When the aggregated count for an interval is non-zero, that value is written to the time series.
- In Cloud Monitoring, log-based metrics use the following naming patterns: System: logging.googleapis.com/ SYSTEM METRIC NAME User-defined: logging.googleapis.com/user/ USER METRIC NAME Note that user-defined log-based metrics include the string user .
- By default, user-defined log-based metrics are calculated from all logs received by the Logging API for the Google Cloud project, regardless of any inclusion filters or exclusion filters that might apply to the Google Cloud project.
- Handling of late-arriving and future log entries When log entries arrive with a timestamp for an interval that has been processed, the Logging backend generates historical data.

### "Quickstart: Collect logs from Apache with the Ops Agent \_|\_ Cloud Logging\

- URL: [https://docs.cloud.google.com/logging/docs/logging-gce-quickstart](https://docs.cloud.google.com/logging/docs/logging-gce-quickstart)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- In this section, you create a log-based alert so that you are notified when a 404 Not Found message appears in your log entries.
- Enable the APIs Required roles To get the permissions that you need to create a Compute Engine instance, install Apache, and to view metric data, ask your administrator to grant you the following IAM roles on your project: Compute Instance Admin (v1) ( roles/compute.instanceAdmin.v1 ) Logs Viewer ( roles/logging.viewer ) Monitoring Editor ( roles/monitoring.editor ) OSPolicyAssignment Admin ( roles/osconfig.osPolicyAssignmentAdmin ) Service Account User ( roles/iam.serviceAccountUser ) Service Usage Admin ( roles/serviceusage.serviceUsageAdmin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Restart the Ops Agent: To restart the agent, run the following command on your instance: sudo systemctl restart google-cloud-ops-agent To confirm that the agent restarted, run the following command and verify that the components "Metrics Agent" and "Logging Agent" started: sudo systemctl status "google-cloud-ops-agent " View Apache web server logs To view your logs in the Google Cloud console, use the Logs Explorer: In the Google Cloud console, go to the segment Logs Explorer page: Go to Logs Explorer If you use the search bar to find this page, then select the result whose subheading is Logging .
- Home Documentation Observability Cloud Logging Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.

