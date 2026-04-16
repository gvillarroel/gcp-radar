---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:33.011Z"
product_name: "Cloud Key Management Service"
product_slug: "cloud-key-management-service"
feature_name: "KMS Inventory REST API"
feature_slug: "kms-inventory-rest-api"
latest_feature_date: "2023-05-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kms/docs/reference/inventory/rest"
  - "https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory"
  - "https://docs.cloud.google.com/kms/docs/accessing-the-api"
  - "https://docs.cloud.google.com/kms/docs/reference/rest"
keywords:
  - "kms"
  - "inventory"
  - "rest"
  - "api"
  - "the"
  - "lets"
  - "you"
  - "programmatically"
---

# KMS Inventory REST API

Product: Cloud Key Management Service
Coverage: MEDIUM

## Step 02 Summary

The KMS Inventory REST API lets you programmatically view key inventory and usage information; The KMS Inventory REST API lets you programmatically view key inventory and usage information.

## Extended Definition

The KMS Inventory REST API lets you programmatically view key inventory and usage information; The KMS Inventory REST API lets you programmatically view key inventory and usage information.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kms/docs/reference/inventory/rest](https://docs.cloud.google.com/kms/docs/reference/inventory/rest)
- [https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory](https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory)
- [https://docs.cloud.google.com/kms/docs/accessing-the-api](https://docs.cloud.google.com/kms/docs/accessing-the-api)
- [https://docs.cloud.google.com/kms/docs/reference/rest](https://docs.cloud.google.com/kms/docs/reference/rest)

## Supporting Pages

### "KMS Inventory API \_|\_ Cloud Key Management Service \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kms/docs/reference/inventory/rest](https://docs.cloud.google.com/kms/docs/reference/inventory/rest)
- Source ID: `site-api-reference`
- Final score: 234
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://kmsinventory.googleapis.com REST Resource: v1.organizations.protectedResources Methods search GET /v1/{scope=organizations/ }/protectedResources:search Returns metadata about the resources protected by the given Cloud KMS CryptoKey in the given Cloud organization.
- This service provides the following discovery document: https://kmsinventory.googleapis.com/$discovery/rest?version=v1 Service endpoint A service endpoint is a base URL that specifies the network address of an API service.
- REST Resource: v1.organizations.protectedResources REST Resource: v1.projects.cryptoKeys REST Resource: v1.projects.locations.keyRings.cryptoKeys Service: kmsinventory.googleapis.com Discovery document A Discovery Document is a machine-readable specification for describing and consuming REST APIs.
- Home Documentation Security Cloud KMS Reference Send feedback KMS Inventory API Stay organized with collections Save and categorize content based on your preferences.

### "Cloud KMS Inventory Service audit logging \_|\_ Cloud Key Management Service\

- URL: [https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory](https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory)
- Source ID: `site-iam-reference`
- Final score: 193
- Re-rank relevance: N/A

Evidence snippets:
- Permission type Methods OTHER google.cloud.kms.inventory.v1.KeyDashboardService.ListCryptoKeys : To enable this log, enable ADMIN READ under the service cloudkms.googleapis.com . google.cloud.kms.inventory.v1.KeyTrackingService.GetProtectedResourcesSummary : To enable this log, enable ADMIN READ under the service cloudkms.googleapis.com . google.cloud.kms.inventory.v1.KeyTrackingService.SearchProtectedResources : To enable this log, enable ADMIN READ under the service cloudkms.googleapis.com .
- API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Cloud KMS Inventory Service. google.cloud.kms.inventory.v1.KeyDashboardService The following audit logs are associated with methods belonging to google.cloud.kms.inventory.v1.KeyDashboardService .
- For more information about Cloud Audit Logs, see the following: Types of audit logs Audit log entry structure Storing and routing audit logs Cloud Logging pricing summary Enable Data Access audit logs Service name Cloud KMS Inventory Service audit logs use the service name kmsinventory.googleapis.com .
- When you call a method, Cloud KMS Inventory Service generates an audit log whose category is dependent on the type property of the permission required to perform the method.

### "Accessing the API \_|\_ Cloud Key Management Service \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kms/docs/accessing-the-api](https://docs.cloud.google.com/kms/docs/accessing-the-api)
- Source ID: `site-iam-reference`
- Final score: 191
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Ensure that when you create an instance, you give it access to the https://www.googleapis.com/auth/cloudkms (preferred because it supports the principle of least privilege) or https://www.googleapis.com/auth/cloud-platform OAuth scope.
- Home Documentation Security Cloud KMS Guides Send feedback Accessing the API Stay organized with collections Save and categorize content based on your preferences.
- You can also specify the scope https://www.googleapis.com/auth/cloud-platform , but it includes broader scopes than just Cloud KMS.
- You may also access Cloud KMS via our REST API .

### Cloud Key Management Service (KMS) API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kms/docs/reference/rest](https://docs.cloud.google.com/kms/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 191
- Re-rank relevance: N/A

Evidence snippets:
- REST Resource: v1.folders REST Resource: v1.organizations REST Resource: v1.projects REST Resource: v1.projects.locations REST Resource: v1.projects.locations.ekmConfig REST Resource: v1.projects.locations.ekmConnections REST Resource: v1.projects.locations.keyHandles REST Resource: v1.projects.locations.keyRings REST Resource: v1.projects.locations.keyRings.cryptoKeys REST Resource: v1.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions REST Resource: v1.projects.locations.keyRings.importJobs REST Resource: v1.projects.locations.operations REST Resource: v1.projects.locations.retiredResources REST Resource: v1.projects.locations.singleTenantHsmInstances REST Resource: v1.projects.locations.singleTenantHsmInstances.proposals Service: cloudkms.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- Select a location to see its regional service endpoint for this service. global europe-west3 europe-west8 europe-west9 me-central2 us-east1 us-east4 us-west2 us-west1 us-east7 us-central1 us-west3 us-central2 us-west4 us-west8 us-east5 us-south1 us in ca https://cloudkms.googleapis.com REST Resource: v1.folders Methods getAutokeyConfig GET /v1/{name=folders/ /autokeyConfig} Returns the AutokeyConfig for a folder or project. getKajPolicyConfig GET /v1/{name=folders/ /kajPolicyConfig} Gets the KeyAccessJustificationsPolicyConfig for a given organization, folder, or project. updateAutokeyConfig PATCH /v1/{autokeyConfig.name=folders/ /autokeyConfig} Updates the AutokeyConfig for a folder or a project. updateKajPolicyConfig PATCH /v1/{keyAccessJustificationsPolicyConfig.name=folders/ /kajPolicyConfig} Updates the KeyAccessJustificationsPolicyConfig for a given organization, folder, or project.
- This service provides the following discovery document: https://cloudkms.googleapis.com/$discovery/rest?version=v1 Service endpoint A service endpoint is a base URL that specifies the network address of an API service.
- REST Resource: v1.projects Methods getAutokeyConfig GET /v1/{name=projects/ /autokeyConfig} Returns the AutokeyConfig for a folder or project. getKajPolicyConfig GET /v1/{name=projects/ /kajPolicyConfig} Gets the KeyAccessJustificationsPolicyConfig for a given organization, folder, or project. showEffectiveAutokeyConfig GET /v1/{parent=projects/ }:showEffectiveAutokeyConfig Returns the effective Cloud KMS Autokey configuration for a given project. showEffectiveKeyAccessJustificationsEnrollmentConfig GET /v1/{project=projects/ }:showEffectiveKeyAccessJustificationsEnrollmentConfig Returns the KeyAccessJustificationsEnrollmentConfig of the resource closest to the given project in hierarchy. showEffectiveKeyAccessJustificationsPolicyConfig GET /v1/{project=projects/ }:showEffectiveKeyAccessJustificationsPolicyConfig Returns the KeyAccessJustificationsPolicyConfig of the resource closest to the given project in hierarchy. updateAutokeyConfig PATCH /v1/{autokeyConfig.name=projects/ /autokeyConfig} Updates the AutokeyConfig for a folder or a project. updateKajPolicyConfig PATCH /v1/{keyAccessJustificationsPolicyConfig.name=projects/ /kajPolicyConfig} Updates the KeyAccessJustificationsPolicyConfig for a given organization, folder, or project.

