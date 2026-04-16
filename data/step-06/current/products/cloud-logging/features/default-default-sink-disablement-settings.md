---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.401Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Default _Default Sink Disablement Settings"
feature_slug: "default-default-sink-disablement-settings"
latest_feature_date: "2022-02-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Settings"
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
  - "https://docs.cloud.google.com/logging/docs/reference/v2/rest"
keywords:
  - "default"
  - "sink"
  - "disablement"
  - "settings"
  - "organizations"
  - "can"
  - "disable"
  - "projects"
---

# Default _Default Sink Disablement Settings

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

Organizations can disable the default _Default sink for new projects and folders.

## Extended Definition

Organizations can disable the default _Default sink for new projects and folders.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Settings](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Settings)
- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- [https://docs.cloud.google.com/logging/docs/reference/v2/rest](https://docs.cloud.google.com/logging/docs/reference/v2/rest)

## Supporting Pages

### Settings \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Settings](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Settings)
- Source ID: `site-docs-reference`
- Final score: 163
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If set to true, the Default sink in newly created projects and folders will created in a disabled state.
- JSON representation { "name" : string , "kmsKeyName" : string , "kmsServiceAccountId" : string , "storageLocation" : string , "disableDefaultSink" : boolean , "defaultSinkConfig" : { object ( DefaultSinkConfig ) } , "loggingServiceAccountId" : string } Fields name string Output only.
- DefaultSinkConfig Describes the custom Default sink configuration that is used to override the built-in Default sink configuration in newly created resource containers, such as projects or folders.
- Note: this setting does not affect the location of resources where a location is explicitly provided when created, such as custom log buckets. disableDefaultSink boolean Optional.

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- To select which parts of the timestamp to display, click the settings Preferences menu, select Format , and then select one of the following options: Date, time, and timezone Date and time (default) Time only Find patterns in your logs by using summary fields Suppose you're looking through the log entries in your query results and want to quickly skim the results by a certain LogEntry field.
- For information about how to get access only to a specific log view, see Control access to a log view For more information about granting roles, see Manage access to projects, folders, and organizations .
- When projects are searched, the search results include the log entries that are routed to the project by a sink in another project, and then stored in a log bucket.
- For projects, the search results include the log entries that are routed to the project by a sink in another project, and then stored in a log bucket.

### Cloud Logging API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/reference/v2/rest](https://docs.cloud.google.com/logging/docs/reference/v2/rest)
- Source ID: `site-docs-reference`
- Final score: 141
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: v2 REST Resource: v2.billingAccounts REST Resource: v2.billingAccounts.exclusions REST Resource: v2.billingAccounts.locations.buckets REST Resource: v2.billingAccounts.locations.buckets.links REST Resource: v2.billingAccounts.locations.buckets.views REST Resource: v2.billingAccounts.locations.buckets.views.logs REST Resource: v2.billingAccounts.locations.operations REST Resource: v2.billingAccounts.locations.recentQueries REST Resource: v2.billingAccounts.locations.savedQueries REST Resource: v2.billingAccounts.logs REST Resource: v2.billingAccounts.sinks REST Resource: v2.entries REST Resource: v2.exclusions REST Resource: v2.folders REST Resource: v2.folders.exclusions REST Resource: v2.folders.locations.buckets REST Resource: v2.folders.locations.buckets.links REST Resource: v2.folders.locations.buckets.views REST Resource: v2.folders.locations.buckets.views.logs REST Resource: v2.folders.locations.logScopes REST Resource: v2.folders.locations.operations REST Resource: v2.folders.locations.recentQueries REST Resource: v2.folders.locations.savedQueries REST Resource: v2.folders.logs REST Resource: v2.folders.sinks REST Resource: v2.locations.buckets REST Resource: v2.locations.buckets.links REST Resource: v2.locations.buckets.views REST Resource: v2.locations.operations REST Resource: v2.logs REST Resource: v2.monitoredResourceDescriptors REST Resource: v2.organizations REST Resource: v2.organizations.exclusions REST Resource: v2.organizations.locations.buckets REST Resource: v2.organizations.locations.buckets.links REST Resource: v2.organizations.locations.buckets.views REST Resource: v2.organizations.locations.buckets.views.logs REST Resource: v2.organizations.locations.logScopes REST Resource: v2.organizations.locations.operations REST Resource: v2.organizations.locations.recentQueries REST Resource: v2.organizations.locations.savedQueries REST Resource: v2.organizations.logs REST Resource: v2.organizations.sinks REST Resource: v2.projects REST Resource: v2.projects.exclusions REST Resource: v2.projects.locations.buckets REST Resource: v2.projects.locations.buckets.links REST Resource: v2.projects.locations.buckets.views REST Resource: v2.projects.locations.buckets.views.logs REST Resource: v2.projects.locations.logScopes REST Resource: v2.projects.locations.operations REST Resource: v2.projects.locations.recentQueries REST Resource: v2.projects.locations.savedQueries REST Resource: v2.projects.logs REST Resource: v2.projects.metrics REST Resource: v2.projects.sinks REST Resource: v2.sinks Service: logging.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- REST Resource: v2.organizations.exclusions Methods create POST /v2/{parent=organizations/ }/exclusions Creates a new exclusion in the Default sink in a specified parent resource. delete DELETE /v2/{name=organizations/ /exclusions/ } Deletes an exclusion in the Default sink. get GET /v2/{name=organizations/ /exclusions/ } Gets the description of an exclusion in the Default sink. list GET /v2/{parent=organizations/ }/exclusions Lists all the exclusions on the Default sink in a parent resource. patch PATCH /v2/{name=organizations/ /exclusions/ } Changes one or more properties of an existing exclusion in the Default sink.
- REST Resource: v2.projects.exclusions Methods create POST /v2/{parent=projects/ }/exclusions Creates a new exclusion in the Default sink in a specified parent resource. delete DELETE /v2/{name=projects/ /exclusions/ } Deletes an exclusion in the Default sink. get GET /v2/{name=projects/ /exclusions/ } Gets the description of an exclusion in the Default sink. list GET /v2/{parent=projects/ }/exclusions Lists all the exclusions on the Default sink in a parent resource. patch PATCH /v2/{name=projects/ /exclusions/ } Changes one or more properties of an existing exclusion in the Default sink.
- REST Resource: v2.billingAccounts.logs Methods delete DELETE /v2/{logName=billingAccounts/ /logs/ } Deletes all the log entries in a log for the global Default Log Bucket. list GET /v2/{parent=billingAccounts/ }/logs Lists the logs in projects, organizations, folders, or billing accounts.

