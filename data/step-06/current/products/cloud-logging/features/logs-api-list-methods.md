---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.498Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Logs API list methods"
feature_slug: "logs-api-list-methods"
latest_feature_date: "2016-12-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/reference/v2/rest"
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
  - "https://docs.cloud.google.com/logging/docs/audit"
keywords:
  - "logs"
  - "list"
  - "methods"
  - "logging"
  - "provides"
  - "organizations"
  - "projects"
---

# Logs API list methods

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

The Logging API provides list logs methods for organizations and projects.

## Extended Definition

The Logging API provides list logs methods for organizations and projects.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/reference/v2/rest](https://docs.cloud.google.com/logging/docs/reference/v2/rest)
- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit)

## Supporting Pages

### Cloud Logging API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/reference/v2/rest](https://docs.cloud.google.com/logging/docs/reference/v2/rest)
- Source ID: `site-docs-reference`
- Final score: 160
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: v2.billingAccounts.logs Methods delete DELETE /v2/{logName=billingAccounts/ /logs/ } Deletes all the log entries in a log for the global Default Log Bucket. list GET /v2/{parent=billingAccounts/ }/logs Lists the logs in projects, organizations, folders, or billing accounts.
- REST Resource: v2.organizations.logs Methods delete DELETE /v2/{logName=organizations/ /logs/ } Deletes all the log entries in a log for the global Default Log Bucket. list GET /v2/{parent=organizations/ }/logs Lists the logs in projects, organizations, folders, or billing accounts.
- REST Resource: v2.projects.logs Methods delete DELETE /v2/{logName=projects/ /logs/ } Deletes all the log entries in a log for the global Default Log Bucket. list GET /v2/{parent=projects/ }/logs Lists the logs in projects, organizations, folders, or billing accounts.
- REST Resource: v2.folders.logs Methods delete DELETE /v2/{logName=folders/ /logs/ } Deletes all the log entries in a log for the global Default Log Bucket. list GET /v2/{parent=folders/ }/logs Lists the logs in projects, organizations, folders, or billing accounts.

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 157
- Re-rank relevance: N/A

Evidence snippets:
- Scroll or zoom to time In addition to the time controls previously listed, the timeline provides the Scroll to time and Zoom to time features to give you more in-depth control of the timeline and the data that you see in other panes in the Logs Explorer.
- You can also grant a role that contains the logging.logEntries.list permission, which lets a principal view and download logs.
- Troubleshoot logging issues This section provides instructions for troubleshooting common issues when using the Logs Explorer.
- For example, if a log entry similar to the following is displayed as a result of your query, then the service menu includes the service named myservice : { ... labels: { compute.googleapis.com/resource name: "mycluster1" k8s-pod/app: "myservice" k8s-pod/pod-template-hash: "5ffcd94fdd" } logName: "projects/my-project/logs/stdout" resource: { labels: {6} type: "k8s container" } ... } You have log data with labels for an App Hub service or workload.

### Cloud Audit Logs overview \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit)
- Source ID: `site-docs-root`
- Final score: 151
- Re-rank relevance: N/A

Evidence snippets:
- To read your Google Cloud project-level audit log entries, run the following command: gcloud logging read "logName : projects/ PROJECT ID /logs/cloudaudit.googleapis.com" \ --project= PROJECT ID To read your folder-level audit log entries, run the following command: gcloud logging read "logName : folders/ FOLDER ID /logs/cloudaudit.googleapis.com" \ --folder= FOLDER ID To read your organization-level audit log entries, run the following command: gcloud logging read "logName : organizations/ ORGANIZATION ID /logs/cloudaudit.googleapis.com" \ --organization= ORGANIZATION ID To read your Cloud Billing account-level audit log entries, run the following command: gcloud logging read "logName : billingAccounts/ BILLING ACCOUNT ID /logs/cloudaudit.googleapis.com" \ --billing-account= BILLING ACCOUNT ID Add the --freshness flag to your command to read logs that are more than 1 day old.
- The following are the audit log names, including variables for the resource identifiers: projects / PROJECT ID / logs / cloudaudit . googleapis . com % 2 Factivity projects / PROJECT ID / logs / cloudaudit . googleapis . com % 2 Fdata access projects / PROJECT ID / logs / cloudaudit . googleapis . com % 2 Fsystem event projects / PROJECT ID / logs / cloudaudit . googleapis . com % 2 Fpolicy folders / FOLDER ID / logs / cloudaudit . googleapis . com % 2 Factivity folders / FOLDER ID / logs / cloudaudit . googleapis . com % 2 Fdata access folders / FOLDER ID / logs / cloudaudit . googleapis . com % 2 Fsystem event folders / FOLDER ID / logs / cloudaudit . googleapis . com % 2 Fpolicy billingAccounts / BILLING ACCOUNT ID / logs / cloudaudit . googleapis . com % 2 Factivity billingAccounts / BILLING ACCOUNT ID / logs / cloudaudit . googleapis . com % 2 Fdata access billingAccounts / BILLING ACCOUNT ID / logs / cloudaudit . googleapis . com % 2 Fsystem event billingAccounts / BILLING ACCOUNT ID / logs / cloudaudit . googleapis . com % 2 Fpolicy organizations / ORGANIZATION ID / logs / cloudaudit . googleapis . com % 2 Factivity organizations / ORGANIZATION ID / logs / cloudaudit . googleapis . com % 2 Fdata access organizations / ORGANIZATION ID / logs / cloudaudit . googleapis . com % 2 Fsystem event organizations / ORGANIZATION ID / logs / cloudaudit . googleapis . com % 2 Fpolicy Caller identities in audit logs Audit logs record the identity that performed the logged operations on the Google Cloud resource.
- For more information about querying by using the Logs Explorer, see Build queries in the Logs Explorer . gcloud The Google Cloud CLI provides a command-line interface to the Logging API.
- Required roles To view audit logs, you must have the appropriate Identity and Access Management (IAM) permissions and roles: To get the permissions that you need to get read-only access to Admin Activity, Policy Denied, and System Event audit logs, ask your administrator to grant you the Logs Viewer ( roles/logging.viewer ) IAM role on your project.

