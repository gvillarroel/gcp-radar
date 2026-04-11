---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:38:24.579Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Non-project audit log export sinks"
feature_slug: "non-project-audit-log-export-sinks"
latest_feature_date: "2017-02-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/logging/docs/central-log-storage"
  - "https://docs.cloud.google.com/logging/docs/audit"
  - "https://docs.cloud.google.com/logging/docs/release-notes"
keywords:
  - "non"
  - "project"
  - "audit"
  - "log"
  - "export"
  - "sinks"
  - "the"
  - "gcloud"
---

# Non-project audit log export sinks

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

The gcloud tool and API can create log sinks to export audit logs from organizations, folders, and billing accounts.

## Extended Definition

The gcloud tool and API can create log sinks to export audit logs from organizations, folders, and billing accounts.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/logging/docs/central-log-storage](https://docs.cloud.google.com/logging/docs/central-log-storage)
- [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit)
- [https://docs.cloud.google.com/logging/docs/release-notes](https://docs.cloud.google.com/logging/docs/release-notes)

## Supporting Pages

### "Aggregate and store your organization's logs \_|\_ Cloud Logging \_|\_ Google\

- URL: [https://docs.cloud.google.com/logging/docs/central-log-storage](https://docs.cloud.google.com/logging/docs/central-log-storage)
- Source ID: `site-docs-root`
- Final score: 194
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Execute the gcloud logging sinks create command: gcloud logging sinks create PROJECT LEVEL SINK NAME SINK DESTINATION --project= PROJECT ID --log-filter='logName:cloudaudit.googleapis.com' \ --description=" Audit logs from my organization " \ Create the aggregated sink Aggregated sinks combine and route log entries from the resources contained by an organization or folder to a destination.
- Execute the gcloud logging sinks create command: gcloud logging sinks create SINK NAME \ logging.googleapis.com/projects/ PROJECT ID \ --log-filter='logName:cloudaudit.googleapis.com' \ --description=" Audit logs from my organization " \ --organization= ORGANIZATION ID \ --include-children The --include-children option is important.
- Set up the sink at the organization level To create an aggregated sink that is non-intercepting and that routes log entries to a project, complete the following steps: Run the gcloud logging sinks create command.
- For example, an audit log that originates in a project is routed by the aggregated sink and the sinks in that project.

### Cloud Audit Logs overview \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To read your Google Cloud project-level audit log entries, run the following command: gcloud logging read "logName : projects/ PROJECT ID /logs/cloudaudit.googleapis.com" \ --project= PROJECT ID To read your folder-level audit log entries, run the following command: gcloud logging read "logName : folders/ FOLDER ID /logs/cloudaudit.googleapis.com" \ --folder= FOLDER ID To read your organization-level audit log entries, run the following command: gcloud logging read "logName : organizations/ ORGANIZATION ID /logs/cloudaudit.googleapis.com" \ --organization= ORGANIZATION ID To read your Cloud Billing account-level audit log entries, run the following command: gcloud logging read "logName : billingAccounts/ BILLING ACCOUNT ID /logs/cloudaudit.googleapis.com" \ --billing-account= BILLING ACCOUNT ID Add the --freshness flag to your command to read logs that are more than 1 day old.
- You can also route your audit log entries to user-defined Cloud Logging buckets at the Google Cloud project level or to supported destinations outside of Logging using sinks.
- The following are the audit log names, including variables for the resource identifiers: projects / PROJECT ID / logs / cloudaudit . googleapis . com % 2 Factivity projects / PROJECT ID / logs / cloudaudit . googleapis . com % 2 Fdata access projects / PROJECT ID / logs / cloudaudit . googleapis . com % 2 Fsystem event projects / PROJECT ID / logs / cloudaudit . googleapis . com % 2 Fpolicy folders / FOLDER ID / logs / cloudaudit . googleapis . com % 2 Factivity folders / FOLDER ID / logs / cloudaudit . googleapis . com % 2 Fdata access folders / FOLDER ID / logs / cloudaudit . googleapis . com % 2 Fsystem event folders / FOLDER ID / logs / cloudaudit . googleapis . com % 2 Fpolicy billingAccounts / BILLING ACCOUNT ID / logs / cloudaudit . googleapis . com % 2 Factivity billingAccounts / BILLING ACCOUNT ID / logs / cloudaudit . googleapis . com % 2 Fdata access billingAccounts / BILLING ACCOUNT ID / logs / cloudaudit . googleapis . com % 2 Fsystem event billingAccounts / BILLING ACCOUNT ID / logs / cloudaudit . googleapis . com % 2 Fpolicy organizations / ORGANIZATION ID / logs / cloudaudit . googleapis . com % 2 Factivity organizations / ORGANIZATION ID / logs / cloudaudit . googleapis . com % 2 Fdata access organizations / ORGANIZATION ID / logs / cloudaudit . googleapis . com % 2 Fsystem event organizations / ORGANIZATION ID / logs / cloudaudit . googleapis . com % 2 Fpolicy Caller identities in audit logs Audit logs record the identity that performed the logged operations on the Google Cloud resource.
- Required roles To view audit logs, you must have the appropriate Identity and Access Management (IAM) permissions and roles: To get the permissions that you need to get read-only access to Admin Activity, Policy Denied, and System Event audit logs, ask your administrator to grant you the Logs Viewer ( roles/logging.viewer ) IAM role on your project.

### Logging release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/release-notes](https://docs.cloud.google.com/logging/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- Feature Exporting logs from organizations, folders, and billing accounts : The gcloud logging command-line tool now supports creating log sinks to export audit logs from organizations, folders, and billing accounts.
- In addition, sinks can now export log entries to destinations in other projects.
- The following audit log components now have shortened field names when they are exported to BigQuery: protoPayload , protoPayload.serviceData , protoPayload.request , and protoPayload.response .
- August 23, 2017 Feature Aggregated Exports : Organizations and folders can now export selected log entries from all of their projects with a single sink created in the organization or folder.

