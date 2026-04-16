---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.500Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Organization-owned sinks"
feature_slug: "organization-owned-sinks"
latest_feature_date: "2016-11-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/audit"
  - "https://docs.cloud.google.com/logging/docs/central-log-storage"
  - "https://docs.cloud.google.com/logging/docs/reference/v2/rest"
keywords:
  - "organization"
  - "owned"
  - "sinks"
  - "logging"
  - "allows"
  - "organizations"
  - "well"
  - "projects"
---

# Organization-owned sinks

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

The Logging API allows organizations as well as projects to own sinks and export logs to destinations in other projects.

## Extended Definition

The Logging API allows organizations as well as projects to own sinks and export logs to destinations in other projects.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit)
- [https://docs.cloud.google.com/logging/docs/central-log-storage](https://docs.cloud.google.com/logging/docs/central-log-storage)
- [https://docs.cloud.google.com/logging/docs/reference/v2/rest](https://docs.cloud.google.com/logging/docs/reference/v2/rest)

## Supporting Pages

### Cloud Audit Logs overview \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit)
- Source ID: `site-docs-root`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- To read your Google Cloud project-level audit log entries, run the following command: gcloud logging read "logName : projects/ PROJECT ID /logs/cloudaudit.googleapis.com" \ --project= PROJECT ID To read your folder-level audit log entries, run the following command: gcloud logging read "logName : folders/ FOLDER ID /logs/cloudaudit.googleapis.com" \ --folder= FOLDER ID To read your organization-level audit log entries, run the following command: gcloud logging read "logName : organizations/ ORGANIZATION ID /logs/cloudaudit.googleapis.com" \ --organization= ORGANIZATION ID To read your Cloud Billing account-level audit log entries, run the following command: gcloud logging read "logName : billingAccounts/ BILLING ACCOUNT ID /logs/cloudaudit.googleapis.com" \ --billing-account= BILLING ACCOUNT ID Add the --freshness flag to your command to read logs that are more than 1 day old.
- The following are the audit log names, including variables for the resource identifiers: projects / PROJECT ID / logs / cloudaudit . googleapis . com % 2 Factivity projects / PROJECT ID / logs / cloudaudit . googleapis . com % 2 Fdata access projects / PROJECT ID / logs / cloudaudit . googleapis . com % 2 Fsystem event projects / PROJECT ID / logs / cloudaudit . googleapis . com % 2 Fpolicy folders / FOLDER ID / logs / cloudaudit . googleapis . com % 2 Factivity folders / FOLDER ID / logs / cloudaudit . googleapis . com % 2 Fdata access folders / FOLDER ID / logs / cloudaudit . googleapis . com % 2 Fsystem event folders / FOLDER ID / logs / cloudaudit . googleapis . com % 2 Fpolicy billingAccounts / BILLING ACCOUNT ID / logs / cloudaudit . googleapis . com % 2 Factivity billingAccounts / BILLING ACCOUNT ID / logs / cloudaudit . googleapis . com % 2 Fdata access billingAccounts / BILLING ACCOUNT ID / logs / cloudaudit . googleapis . com % 2 Fsystem event billingAccounts / BILLING ACCOUNT ID / logs / cloudaudit . googleapis . com % 2 Fpolicy organizations / ORGANIZATION ID / logs / cloudaudit . googleapis . com % 2 Factivity organizations / ORGANIZATION ID / logs / cloudaudit . googleapis . com % 2 Fdata access organizations / ORGANIZATION ID / logs / cloudaudit . googleapis . com % 2 Fsystem event organizations / ORGANIZATION ID / logs / cloudaudit . googleapis . com % 2 Fpolicy Caller identities in audit logs Audit logs record the identity that performed the logged operations on the Google Cloud resource.
- For each billing account, Google Cloud project, folder, and organization, Logging automatically creates two log buckets, Required and Default , and correspondingly named sinks .
- The audit log name includes the resource identifier of the Google Cloud project, folder, billing account, or organization for which you want to view audit logging information.

### "Aggregate and store your organization's logs \_|\_ Cloud Logging \_|\_ Google\

- URL: [https://docs.cloud.google.com/logging/docs/central-log-storage](https://docs.cloud.google.com/logging/docs/central-log-storage)
- Source ID: `site-docs-root`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- Before you begin Ensure the following: To get the permissions that you need to configure an aggregated sink, ask your administrator to grant you the following IAM roles on your organization: To create log buckets and sinks in a project: Logs Configuration Writer ( roles/logging.configWriter ) - your project To create an aggregated sink: Logs Configuration Writer ( roles/logging.configWriter ) - your organization To grant roles to principals: Owner ( roles/owner ) - your project For more information about granting roles, see Manage access to projects, folders, and organizations .
- Execute the gcloud logging sinks create command: gcloud logging sinks create SINK NAME \ logging.googleapis.com/projects/ PROJECT ID \ --log-filter='logName:cloudaudit.googleapis.com' \ --description=" Audit logs from my organization " \ --organization= ORGANIZATION ID \ --include-children The --include-children option is important.
- Verify that the sink was created: gcloud logging sinks list --organization= ORGANIZATION ID Get the name of the service account: gcloud logging sinks describe SINK NAME --organization= ORGANIZATION ID The output looks similar to the following: writerIdentity: serviceAccount:o1234567890- ORGANIZATION ID @gcp-sa-logging.iam.gserviceaccount.com Copy the value of the serviceAccount field into your clipboard.
- Execute the gcloud logging sinks create command: gcloud logging sinks create PROJECT LEVEL SINK NAME SINK DESTINATION --project= PROJECT ID --log-filter='logName:cloudaudit.googleapis.com' \ --description=" Audit logs from my organization " \ Create the aggregated sink Aggregated sinks combine and route log entries from the resources contained by an organization or folder to a destination.

### Cloud Logging API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/reference/v2/rest](https://docs.cloud.google.com/logging/docs/reference/v2/rest)
- Source ID: `site-docs-reference`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- REST Resource: v2 REST Resource: v2.billingAccounts REST Resource: v2.billingAccounts.exclusions REST Resource: v2.billingAccounts.locations.buckets REST Resource: v2.billingAccounts.locations.buckets.links REST Resource: v2.billingAccounts.locations.buckets.views REST Resource: v2.billingAccounts.locations.buckets.views.logs REST Resource: v2.billingAccounts.locations.operations REST Resource: v2.billingAccounts.locations.recentQueries REST Resource: v2.billingAccounts.locations.savedQueries REST Resource: v2.billingAccounts.logs REST Resource: v2.billingAccounts.sinks REST Resource: v2.entries REST Resource: v2.exclusions REST Resource: v2.folders REST Resource: v2.folders.exclusions REST Resource: v2.folders.locations.buckets REST Resource: v2.folders.locations.buckets.links REST Resource: v2.folders.locations.buckets.views REST Resource: v2.folders.locations.buckets.views.logs REST Resource: v2.folders.locations.logScopes REST Resource: v2.folders.locations.operations REST Resource: v2.folders.locations.recentQueries REST Resource: v2.folders.locations.savedQueries REST Resource: v2.folders.logs REST Resource: v2.folders.sinks REST Resource: v2.locations.buckets REST Resource: v2.locations.buckets.links REST Resource: v2.locations.buckets.views REST Resource: v2.locations.operations REST Resource: v2.logs REST Resource: v2.monitoredResourceDescriptors REST Resource: v2.organizations REST Resource: v2.organizations.exclusions REST Resource: v2.organizations.locations.buckets REST Resource: v2.organizations.locations.buckets.links REST Resource: v2.organizations.locations.buckets.views REST Resource: v2.organizations.locations.buckets.views.logs REST Resource: v2.organizations.locations.logScopes REST Resource: v2.organizations.locations.operations REST Resource: v2.organizations.locations.recentQueries REST Resource: v2.organizations.locations.savedQueries REST Resource: v2.organizations.logs REST Resource: v2.organizations.sinks REST Resource: v2.projects REST Resource: v2.projects.exclusions REST Resource: v2.projects.locations.buckets REST Resource: v2.projects.locations.buckets.links REST Resource: v2.projects.locations.buckets.views REST Resource: v2.projects.locations.buckets.views.logs REST Resource: v2.projects.locations.logScopes REST Resource: v2.projects.locations.operations REST Resource: v2.projects.locations.recentQueries REST Resource: v2.projects.locations.savedQueries REST Resource: v2.projects.logs REST Resource: v2.projects.metrics REST Resource: v2.projects.sinks REST Resource: v2.sinks Service: logging.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- REST Resource: v2.organizations.sinks Methods create POST /v2/{parent=organizations/ }/sinks Creates a sink that exports specified log entries to a destination. delete DELETE /v2/{sinkName=organizations/ /sinks/ } Deletes a sink. get GET /v2/{sinkName=organizations/ /sinks/ } Gets a sink. list GET /v2/{parent=organizations/ }/sinks Lists sinks. patch PATCH /v2/{sinkName=organizations/ /sinks/ } Updates a sink. update PUT /v2/{sinkName=organizations/ /sinks/ } Updates a sink.
- REST Resource: v2.organizations Methods getCmekSettings GET /v2/{name=organizations/ }/cmekSettings Gets the Logging CMEK settings for the given resource. getSettings GET /v2/{name=organizations/ }/settings Gets the settings for the given resource. updateCmekSettings PATCH /v2/{name=organizations/ }/cmekSettings Updates the Log Router CMEK settings for the given resource. updateSettings PATCH /v2/{name=organizations/ }/settings Updates the settings for the given resource.
- REST Resource: v2.billingAccounts.logs Methods delete DELETE /v2/{logName=billingAccounts/ /logs/ } Deletes all the log entries in a log for the global Default Log Bucket. list GET /v2/{parent=billingAccounts/ }/logs Lists the logs in projects, organizations, folders, or billing accounts.

