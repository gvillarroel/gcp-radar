---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.393Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "CMEK Organization Policies for Cloud Logging"
feature_slug: "cmek-organization-policies-for-cloud-logging"
latest_feature_date: "2022-03-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Settings"
  - "https://docs.cloud.google.com/logging/docs/reference/v2/rpc"
  - "https://docs.cloud.google.com/logging/docs/reference/v2/rest"
keywords:
  - "cmek"
  - "organization"
  - "policies"
  - "logging"
  - "supports"
  - "enforce"
  - "customer"
  - "managed"
---

# CMEK Organization Policies for Cloud Logging

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

Cloud Logging supports organization policies that enforce customer-managed encryption key protection.

## Extended Definition

Cloud Logging supports organization policies that enforce customer-managed encryption key protection.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Settings](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Settings)
- [https://docs.cloud.google.com/logging/docs/reference/v2/rpc](https://docs.cloud.google.com/logging/docs/reference/v2/rpc)
- [https://docs.cloud.google.com/logging/docs/reference/v2/rest](https://docs.cloud.google.com/logging/docs/reference/v2/rest)

## Supporting Pages

### Cloud Logging API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/reference/v2/rpc](https://docs.cloud.google.com/logging/docs/reference/v2/rpc)
- Source ID: `site-docs-root`
- Final score: 38
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- GetCmekSettings Gets the Logging CMEK settings for the given resource.
- UpdateLogMetric Creates or updates a logs-based metric. google.logging.v2.RoutingConfigService Methods google.longrunning.Operations Methods CancelOperation Starts asynchronous cancellation on a long-running operation.
- TestIamPermissions Returns permissions that a caller has on the specified resource. google.logging.v2.ConfigServiceV2 Methods CopyLogEntries Copies a set of log entries from a log bucket to a Cloud Storage bucket.
- Service: logging.googleapis.com The Service name logging.googleapis.com is needed to create RPC client stubs. google.iam.v1.IAMPolicy Methods GetIamPolicy Gets the access control policy for a resource.

### Settings \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Settings](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Settings)
- Source ID: `site-docs-reference`
- Final score: 38
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- See Configure CMEK for Cloud Logging for more information. kmsServiceAccountId string Output only.
- See Configure CMEK for Cloud Logging for more information. storageLocation string Optional.
- KMS key name format: "projects/[PROJECT ID]/locations/[LOCATION]/keyRings/[KEYRING]/cryptoKeys/[KEY]" For example: "projects/my-project/locations/us-central1/keyRings/my-ring/cryptoKeys/my-key" To enable CMEK, set this field to a valid kmsKeyName for which the associated service account has the required roles/cloudkms.cryptoKeyEncrypterDecrypter role assigned for the key.
- JSON representation { "name" : string , "kmsKeyName" : string , "kmsServiceAccountId" : string , "storageLocation" : string , "disableDefaultSink" : boolean , "defaultSinkConfig" : { object ( DefaultSinkConfig ) } , "loggingServiceAccountId" : string } Fields name string Output only.

### Cloud Logging API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/reference/v2/rest](https://docs.cloud.google.com/logging/docs/reference/v2/rest)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- REST Resource: v2.organizations Methods getCmekSettings GET /v2/{name=organizations/ }/cmekSettings Gets the Logging CMEK settings for the given resource. getSettings GET /v2/{name=organizations/ }/settings Gets the settings for the given resource. updateCmekSettings PATCH /v2/{name=organizations/ }/cmekSettings Updates the Log Router CMEK settings for the given resource. updateSettings PATCH /v2/{name=organizations/ }/settings Updates the settings for the given resource.
- REST Resource: v2 REST Resource: v2.billingAccounts REST Resource: v2.billingAccounts.exclusions REST Resource: v2.billingAccounts.locations.buckets REST Resource: v2.billingAccounts.locations.buckets.links REST Resource: v2.billingAccounts.locations.buckets.views REST Resource: v2.billingAccounts.locations.buckets.views.logs REST Resource: v2.billingAccounts.locations.operations REST Resource: v2.billingAccounts.locations.recentQueries REST Resource: v2.billingAccounts.locations.savedQueries REST Resource: v2.billingAccounts.logs REST Resource: v2.billingAccounts.sinks REST Resource: v2.entries REST Resource: v2.exclusions REST Resource: v2.folders REST Resource: v2.folders.exclusions REST Resource: v2.folders.locations.buckets REST Resource: v2.folders.locations.buckets.links REST Resource: v2.folders.locations.buckets.views REST Resource: v2.folders.locations.buckets.views.logs REST Resource: v2.folders.locations.logScopes REST Resource: v2.folders.locations.operations REST Resource: v2.folders.locations.recentQueries REST Resource: v2.folders.locations.savedQueries REST Resource: v2.folders.logs REST Resource: v2.folders.sinks REST Resource: v2.locations.buckets REST Resource: v2.locations.buckets.links REST Resource: v2.locations.buckets.views REST Resource: v2.locations.operations REST Resource: v2.logs REST Resource: v2.monitoredResourceDescriptors REST Resource: v2.organizations REST Resource: v2.organizations.exclusions REST Resource: v2.organizations.locations.buckets REST Resource: v2.organizations.locations.buckets.links REST Resource: v2.organizations.locations.buckets.views REST Resource: v2.organizations.locations.buckets.views.logs REST Resource: v2.organizations.locations.logScopes REST Resource: v2.organizations.locations.operations REST Resource: v2.organizations.locations.recentQueries REST Resource: v2.organizations.locations.savedQueries REST Resource: v2.organizations.logs REST Resource: v2.organizations.sinks REST Resource: v2.projects REST Resource: v2.projects.exclusions REST Resource: v2.projects.locations.buckets REST Resource: v2.projects.locations.buckets.links REST Resource: v2.projects.locations.buckets.views REST Resource: v2.projects.locations.buckets.views.logs REST Resource: v2.projects.locations.logScopes REST Resource: v2.projects.locations.operations REST Resource: v2.projects.locations.recentQueries REST Resource: v2.projects.locations.savedQueries REST Resource: v2.projects.logs REST Resource: v2.projects.metrics REST Resource: v2.projects.sinks REST Resource: v2.sinks Service: logging.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://logging.googleapis.com REST Resource: v2 Methods getCmekSettings GET /v2/{name= / }/cmekSettings Gets the Logging CMEK settings for the given resource. getSettings GET /v2/{name= / }/settings Gets the settings for the given resource. updateCmekSettings PATCH /v2/{name= / }/cmekSettings Updates the Log Router CMEK settings for the given resource. updateSettings PATCH /v2/{name= / }/settings Updates the settings for the given resource.
- REST Resource: v2.folders Methods getCmekSettings GET /v2/{name=folders/ }/cmekSettings Gets the Logging CMEK settings for the given resource. getSettings GET /v2/{name=folders/ }/settings Gets the settings for the given resource. updateSettings PATCH /v2/{name=folders/ }/settings Updates the settings for the given resource.

