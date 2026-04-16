---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.348Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "User-managed service accounts for log sinks"
feature_slug: "user-managed-service-accounts-for-log-sinks"
latest_feature_date: "2023-06-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/reference/v2/rest"
  - "https://docs.cloud.google.com/logging/docs/buckets"
  - "https://docs.cloud.google.com/logging/docs/audit"
keywords:
  - "user"
  - "managed"
  - "accounts"
  - "log"
  - "sinks"
  - "logging"
  - "can"
  - "created"
---

# User-managed service accounts for log sinks

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

Cloud Logging log sinks can be created with user-managed service accounts.

## Extended Definition

Cloud Logging log sinks can be created with user-managed service accounts.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/reference/v2/rest](https://docs.cloud.google.com/logging/docs/reference/v2/rest)
- [https://docs.cloud.google.com/logging/docs/buckets](https://docs.cloud.google.com/logging/docs/buckets)
- [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit)

## Supporting Pages

### Cloud Logging API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/reference/v2/rest](https://docs.cloud.google.com/logging/docs/reference/v2/rest)
- Source ID: `site-docs-reference`
- Final score: 130
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: v2 REST Resource: v2.billingAccounts REST Resource: v2.billingAccounts.exclusions REST Resource: v2.billingAccounts.locations.buckets REST Resource: v2.billingAccounts.locations.buckets.links REST Resource: v2.billingAccounts.locations.buckets.views REST Resource: v2.billingAccounts.locations.buckets.views.logs REST Resource: v2.billingAccounts.locations.operations REST Resource: v2.billingAccounts.locations.recentQueries REST Resource: v2.billingAccounts.locations.savedQueries REST Resource: v2.billingAccounts.logs REST Resource: v2.billingAccounts.sinks REST Resource: v2.entries REST Resource: v2.exclusions REST Resource: v2.folders REST Resource: v2.folders.exclusions REST Resource: v2.folders.locations.buckets REST Resource: v2.folders.locations.buckets.links REST Resource: v2.folders.locations.buckets.views REST Resource: v2.folders.locations.buckets.views.logs REST Resource: v2.folders.locations.logScopes REST Resource: v2.folders.locations.operations REST Resource: v2.folders.locations.recentQueries REST Resource: v2.folders.locations.savedQueries REST Resource: v2.folders.logs REST Resource: v2.folders.sinks REST Resource: v2.locations.buckets REST Resource: v2.locations.buckets.links REST Resource: v2.locations.buckets.views REST Resource: v2.locations.operations REST Resource: v2.logs REST Resource: v2.monitoredResourceDescriptors REST Resource: v2.organizations REST Resource: v2.organizations.exclusions REST Resource: v2.organizations.locations.buckets REST Resource: v2.organizations.locations.buckets.links REST Resource: v2.organizations.locations.buckets.views REST Resource: v2.organizations.locations.buckets.views.logs REST Resource: v2.organizations.locations.logScopes REST Resource: v2.organizations.locations.operations REST Resource: v2.organizations.locations.recentQueries REST Resource: v2.organizations.locations.savedQueries REST Resource: v2.organizations.logs REST Resource: v2.organizations.sinks REST Resource: v2.projects REST Resource: v2.projects.exclusions REST Resource: v2.projects.locations.buckets REST Resource: v2.projects.locations.buckets.links REST Resource: v2.projects.locations.buckets.views REST Resource: v2.projects.locations.buckets.views.logs REST Resource: v2.projects.locations.logScopes REST Resource: v2.projects.locations.operations REST Resource: v2.projects.locations.recentQueries REST Resource: v2.projects.locations.savedQueries REST Resource: v2.projects.logs REST Resource: v2.projects.metrics REST Resource: v2.projects.sinks REST Resource: v2.sinks Service: logging.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- REST Resource: v2.billingAccounts.locations.savedQueries Methods create POST /v2/{parent=billingAccounts/ /locations/ }/savedQueries Creates a new SavedQuery for the user making the request. delete DELETE /v2/{name=billingAccounts/ /locations/ /savedQueries/ } Deletes an existing SavedQuery that was created by the user making the request. get GET /v2/{name=billingAccounts/ /locations/ /savedQueries/ } Returns all data associated with the requested query. list GET /v2/{parent=billingAccounts/ /locations/ }/savedQueries Lists the SavedQueries that were created by the user making the request. patch PATCH /v2/{savedQuery.name=billingAccounts/ /locations/ /savedQueries/ } Updates an existing SavedQuery.
- REST Resource: v2.billingAccounts.locations.recentQueries Methods list GET /v2/{parent=billingAccounts/ /locations/ }/recentQueries Lists the RecentQueries that were created by the user making the request.
- REST Resource: v2.organizations.locations.savedQueries Methods create POST /v2/{parent=organizations/ /locations/ }/savedQueries Creates a new SavedQuery for the user making the request. delete DELETE /v2/{name=organizations/ /locations/ /savedQueries/ } Deletes an existing SavedQuery that was created by the user making the request. get GET /v2/{name=organizations/ /locations/ /savedQueries/ } Returns all data associated with the requested query. list GET /v2/{parent=organizations/ /locations/ }/savedQueries Lists the SavedQueries that were created by the user making the request. patch PATCH /v2/{savedQuery.name=organizations/ /locations/ /savedQueries/ } Updates an existing SavedQuery.

### Configure log buckets \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/buckets](https://docs.cloud.google.com/logging/docs/buckets)
- Source ID: `site-docs-root`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- For example, the following command reports the details of the Default bucket: gcloud logging buckets describe Default --location=global You see the following attributes for the log bucket: createTime : A timestamp that indicates when the bucket was created. description : The description of the log bucket. lifecycleState : Indicates whether the bucket is pending deletion by Cloud Logging. name : The name of the log bucket. retentionDays : The number of days that the bucket's data will be stored by Cloud Logging. updateTime : A timestamp that indicates when the bucket was last modified.
- To create a user-defined log bucket for your Google Cloud project, do the following: Google Cloud console To create a log bucket in your Google Cloud project, do the following: In the Google Cloud console, go to the Logs Storage page: Go to Logs Storage If you use the search bar to find this page, then select the result whose subheading is Logging .
- To create an alerting policy that triggers when the number of log bytes written to your log buckets exceeds your user-defined limit for Cloud Logging , use the following settings.
- After the log bucket is created, Logging upgrades the bucket and creates the dataset link, if these options were selected.

### Cloud Audit Logs overview \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit)
- Source ID: `site-docs-root`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- You can also route your audit log entries to user-defined Cloud Logging buckets at the Google Cloud project level or to supported destinations outside of Logging using sinks.
- To read your Google Cloud project-level audit log entries, run the following command: gcloud logging read "logName : projects/ PROJECT ID /logs/cloudaudit.googleapis.com" \ --project= PROJECT ID To read your folder-level audit log entries, run the following command: gcloud logging read "logName : folders/ FOLDER ID /logs/cloudaudit.googleapis.com" \ --folder= FOLDER ID To read your organization-level audit log entries, run the following command: gcloud logging read "logName : organizations/ ORGANIZATION ID /logs/cloudaudit.googleapis.com" \ --organization= ORGANIZATION ID To read your Cloud Billing account-level audit log entries, run the following command: gcloud logging read "logName : billingAccounts/ BILLING ACCOUNT ID /logs/cloudaudit.googleapis.com" \ --billing-account= BILLING ACCOUNT ID Add the --freshness flag to your command to read logs that are more than 1 day old.
- For each billing account, Google Cloud project, folder, and organization, Logging automatically creates two log buckets, Required and Default , and correspondingly named sinks .
- When configuring your log sinks' filters, you need to specify the audit log types you want to route; for filtering examples, see Security logging queries .

