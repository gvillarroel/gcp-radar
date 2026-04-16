---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.468Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Logging usage and bill estimation"
feature_slug: "logging-usage-and-bill-estimation"
latest_feature_date: "2018-05-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/api/gcloud-logging"
  - "https://docs.cloud.google.com/logging/docs/reference/tools/gcloud-logging"
  - "https://docs.cloud.google.com/logging/docs/audit"
keywords:
  - "logging"
  - "usage"
  - "bill"
  - "estimation"
  - "shows"
  - "estimated"
  - "billing"
  - "under"
---

# Logging usage and bill estimation

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

Cloud Logging shows usage and estimated billing under the new Stackdriver pricing model.

## Extended Definition

Cloud Logging shows usage and estimated billing under the new Stackdriver pricing model.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/api/gcloud-logging](https://docs.cloud.google.com/logging/docs/api/gcloud-logging)
- [https://docs.cloud.google.com/logging/docs/reference/tools/gcloud-logging](https://docs.cloud.google.com/logging/docs/reference/tools/gcloud-logging)
- [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit)

## Supporting Pages

### Cloud Audit Logs overview \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit)
- Source ID: `site-docs-root`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- To read your Google Cloud project-level audit log entries, run the following command: gcloud logging read "logName : projects/ PROJECT ID /logs/cloudaudit.googleapis.com" \ --project= PROJECT ID To read your folder-level audit log entries, run the following command: gcloud logging read "logName : folders/ FOLDER ID /logs/cloudaudit.googleapis.com" \ --folder= FOLDER ID To read your organization-level audit log entries, run the following command: gcloud logging read "logName : organizations/ ORGANIZATION ID /logs/cloudaudit.googleapis.com" \ --organization= ORGANIZATION ID To read your Cloud Billing account-level audit log entries, run the following command: gcloud logging read "logName : billingAccounts/ BILLING ACCOUNT ID /logs/cloudaudit.googleapis.com" \ --billing-account= BILLING ACCOUNT ID Add the --freshness flag to your command to read logs that are more than 1 day old.
- For each billing account, Google Cloud project, folder, and organization, Logging automatically creates two log buckets, Required and Default , and correspondingly named sinks .
- The audit log name includes the resource identifier of the Google Cloud project, folder, billing account, or organization for which you want to view audit logging information.
- However, for audit logs related to billing, you can only use the Google Cloud CLI or the Logging API.

### Command-line interface \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/api/gcloud-logging](https://docs.cloud.google.com/logging/docs/api/gcloud-logging)
- Source ID: `site-docs-reference`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- Examples Write a log entry to log my-test-log in the current project with a plain-text payload and a severity of ERROR : gcloud logging write my - test - log "A simple entry" -- severity = ERROR Write a log entry with a structured (JSON) payload: gcloud logging write my - test - log '{ "message": "My second entry", "weather": "partly cloudy"}' -- payload - type = json Write a log entry to a folder, billing account, or organization.
- The full resource name for a log must be one of the following: projects/ PROJECT ID /logs/ LOG ID organizations/ ORGANIZATION ID /logs/ LOG ID folders/ FOLDER ID /logs/ LOG ID billingAccounts/ BILLING ACCOUNT ID /logs/ LOG ID LOG ID can only contain alphanumeric characters, forward-slash, underscore, hyphen, and period characters.
- Use the gcloud logging sinks command group, corresponding to the API methods projects.sinks , folders.sinks , billingAccounts.sinks , and organizations.sinks .
- You can only use gcloud logging logs list to list logs in projects; you can't use it to list logs in folders, billing accounts, or organizations.

### Command-line interface \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/reference/tools/gcloud-logging](https://docs.cloud.google.com/logging/docs/reference/tools/gcloud-logging)
- Source ID: `site-docs-reference`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- Examples Write a log entry to log my-test-log in the current project with a plain-text payload and a severity of ERROR : gcloud logging write my - test - log "A simple entry" -- severity = ERROR Write a log entry with a structured (JSON) payload: gcloud logging write my - test - log '{ "message": "My second entry", "weather": "partly cloudy"}' -- payload - type = json Write a log entry to a folder, billing account, or organization.
- The full resource name for a log must be one of the following: projects/ PROJECT ID /logs/ LOG ID organizations/ ORGANIZATION ID /logs/ LOG ID folders/ FOLDER ID /logs/ LOG ID billingAccounts/ BILLING ACCOUNT ID /logs/ LOG ID LOG ID can only contain alphanumeric characters, forward-slash, underscore, hyphen, and period characters.
- Use the gcloud logging sinks command group, corresponding to the API methods projects.sinks , folders.sinks , billingAccounts.sinks , and organizations.sinks .
- You can only use gcloud logging logs list to list logs in projects; you can't use it to list logs in folders, billing accounts, or organizations.

