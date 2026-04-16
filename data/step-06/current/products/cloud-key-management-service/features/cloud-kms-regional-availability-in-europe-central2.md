---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:33.035Z"
product_name: "Cloud Key Management Service"
product_slug: "cloud-key-management-service"
feature_name: "Cloud KMS regional availability in europe-central2"
feature_slug: "cloud-kms-regional-availability-in-europe-central2"
latest_feature_date: "2021-03-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory"
  - "https://docs.cloud.google.com/kms/docs/reference/rest"
  - "https://docs.cloud.google.com/kms/docs/cmek-best-practices"
  - "https://docs.cloud.google.com/kms/docs/create-resource-with-autokey"
keywords:
  - "kms"
  - "regional"
  - "availability"
  - "in"
  - "europe"
  - "central2"
  - "resources"
  - "are"
---

# Cloud KMS regional availability in europe-central2

Product: Cloud Key Management Service
Coverage: MEDIUM

## Step 02 Summary

Cloud KMS resources are available in the europe-central2 region.

## Extended Definition

Cloud KMS resources are available in the europe-central2 region.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory](https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory)
- [https://docs.cloud.google.com/kms/docs/reference/rest](https://docs.cloud.google.com/kms/docs/reference/rest)
- [https://docs.cloud.google.com/kms/docs/cmek-best-practices](https://docs.cloud.google.com/kms/docs/cmek-best-practices)
- [https://docs.cloud.google.com/kms/docs/create-resource-with-autokey](https://docs.cloud.google.com/kms/docs/create-resource-with-autokey)

## Supporting Pages

### "Cloud KMS Inventory Service audit logging \_|\_ Cloud Key Management Service\

- URL: [https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory](https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory)
- Source ID: `site-iam-reference`
- Final score: 195
- Re-rank relevance: N/A

Evidence snippets:
- Filter for this method : protoPayload.methodName="google.cloud.kms.inventory.v1.KeyTrackingService.SearchProtectedResources" Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Permission type Methods OTHER google.cloud.kms.inventory.v1.KeyDashboardService.ListCryptoKeys : To enable this log, enable ADMIN READ under the service cloudkms.googleapis.com . google.cloud.kms.inventory.v1.KeyTrackingService.GetProtectedResourcesSummary : To enable this log, enable ADMIN READ under the service cloudkms.googleapis.com . google.cloud.kms.inventory.v1.KeyTrackingService.SearchProtectedResources : To enable this log, enable ADMIN READ under the service cloudkms.googleapis.com .
- Filter for this method : protoPayload.methodName="google.cloud.kms.inventory.v1.KeyTrackingService.GetProtectedResourcesSummary" SearchProtectedResources Method : google.cloud.kms.inventory.v1.KeyTrackingService.SearchProtectedResources Audit log type : Data access Permissions : cloudkms.cryptoKeys.get - ADMIN READ cloudkms.protectedResources.search - ADMIN READ Method is a long-running or streaming operation : No.
- API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Cloud KMS Inventory Service. google.cloud.kms.inventory.v1.KeyDashboardService The following audit logs are associated with methods belonging to google.cloud.kms.inventory.v1.KeyDashboardService .

### Cloud Key Management Service (KMS) API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kms/docs/reference/rest](https://docs.cloud.google.com/kms/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- Select a location to see its regional service endpoint for this service. global europe-west3 europe-west8 europe-west9 me-central2 us-east1 us-east4 us-west2 us-west1 us-east7 us-central1 us-west3 us-central2 us-west4 us-west8 us-east5 us-south1 us in ca https://cloudkms.googleapis.com REST Resource: v1.folders Methods getAutokeyConfig GET /v1/{name=folders/ /autokeyConfig} Returns the AutokeyConfig for a folder or project. getKajPolicyConfig GET /v1/{name=folders/ /kajPolicyConfig} Gets the KeyAccessJustificationsPolicyConfig for a given organization, folder, or project. updateAutokeyConfig PATCH /v1/{autokeyConfig.name=folders/ /autokeyConfig} Updates the AutokeyConfig for a folder or a project. updateKajPolicyConfig PATCH /v1/{keyAccessJustificationsPolicyConfig.name=folders/ /kajPolicyConfig} Updates the KeyAccessJustificationsPolicyConfig for a given organization, folder, or project.
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://cloudkms.googleapis.com Regional service endpoint A regional service endpoint is a base URL that specifies the network address of an API service in a single region.
- REST Resource: v1.projects Methods getAutokeyConfig GET /v1/{name=projects/ /autokeyConfig} Returns the AutokeyConfig for a folder or project. getKajPolicyConfig GET /v1/{name=projects/ /kajPolicyConfig} Gets the KeyAccessJustificationsPolicyConfig for a given organization, folder, or project. showEffectiveAutokeyConfig GET /v1/{parent=projects/ }:showEffectiveAutokeyConfig Returns the effective Cloud KMS Autokey configuration for a given project. showEffectiveKeyAccessJustificationsEnrollmentConfig GET /v1/{project=projects/ }:showEffectiveKeyAccessJustificationsEnrollmentConfig Returns the KeyAccessJustificationsEnrollmentConfig of the resource closest to the given project in hierarchy. showEffectiveKeyAccessJustificationsPolicyConfig GET /v1/{project=projects/ }:showEffectiveKeyAccessJustificationsPolicyConfig Returns the KeyAccessJustificationsPolicyConfig of the resource closest to the given project in hierarchy. updateAutokeyConfig PATCH /v1/{autokeyConfig.name=projects/ /autokeyConfig} Updates the AutokeyConfig for a folder or a project. updateKajPolicyConfig PATCH /v1/{keyAccessJustificationsPolicyConfig.name=projects/ /kajPolicyConfig} Updates the KeyAccessJustificationsPolicyConfig for a given organization, folder, or project.
- REST Resource: v1.projects.locations.ekmConnections Methods create POST /v1/{parent=projects/ /locations/ }/ekmConnections Creates a new EkmConnection in a given Project and Location. get GET /v1/{name=projects/ /locations/ /ekmConnections/ } Returns metadata for a given EkmConnection . getIamPolicy GET /v1/{resource=projects/ /locations/ /ekmConnections/ }:getIamPolicy Gets the access control policy for a resource. list GET /v1/{parent=projects/ /locations/ }/ekmConnections Lists EkmConnections . patch PATCH /v1/{ekmConnection.name=projects/ /locations/ /ekmConnections/ } Updates an EkmConnection 's metadata. setIamPolicy POST /v1/{resource=projects/ /locations/ /ekmConnections/ }:setIamPolicy Sets the access control policy on the specified resource. testIamPermissions POST /v1/{resource=projects/ /locations/ /ekmConnections/ }:testIamPermissions Returns permissions that a caller has on the specified resource. verifyConnectivity GET /v1/{name=projects/ /locations/ /ekmConnections/ }:verifyConnectivity Verifies that Cloud KMS can successfully connect to the external key manager specified by an EkmConnection .

### "Best practices for using CMEKs \_|\_ Cloud Key Management Service \_|\_\

- URL: [https://docs.cloud.google.com/kms/docs/cmek-best-practices](https://docs.cloud.google.com/kms/docs/cmek-best-practices)
- Source ID: `site-iam-reference`
- Final score: 173
- Re-rank relevance: N/A

Evidence snippets:
- The following table lists which IAM roles are typically associated with which job function: IAM role Description NIST SP 800-152 designation roles/cloudkms.admin Provides access to Cloud KMS resources, except for access to restricted resource types and cryptographic operations.
- Monitor key usage You can view key usage with the Cloud KMS inventory API to help you identify Google Cloud resources in your organization that are dependent on and protected by Cloud KMS keys.
- Cloud KMS key rings and keys are provisioned in the Cloud KMS key project, and these keys are used to encrypt resources in the application projects.
- If you use Cloud KMS Autokey, key rings are created for you in the same location as the resources you protect.

### "Create protected resources using Cloud KMS Autokey \_|\_ Cloud Key Management\

- URL: [https://docs.cloud.google.com/kms/docs/create-resource-with-autokey](https://docs.cloud.google.com/kms/docs/create-resource-with-autokey)
- Source ID: `site-iam-reference`
- Final score: 167
- Re-rank relevance: N/A

Evidence snippets:
- Before you begin Before you can create protected resources using Autokey, you must complete the following steps to prepare: If you don't already have a project where Autokey is enabled for either centralized or delegated key management, then you must first complete the setup steps in Enable Cloud KMS Autokey , and then return to this document.
- Make sure the edition of BigQuery that you are using is compatible with Cloud KMS before you try to use Autokey to protect BigQuery resources.
- API Request a new Cloud KMS key by creating a KeyHandle : curl -H "Content-Type: application/json" \ -H "X-Goog-User-Project: USER PROJECT " \ -H "Authorization: Bearer TOKEN " \ -X POST https://cloudkms.googleapis.com/v1/projects/ RESOURCE PROJECT ID /locations/ LOCATION /keyHandles \ -d '{"resource type selector": "dataflow.googleapis.com/Job"}' Replace the following: USER PROJECT : the project to be billed for charges associated with this request.
- API Request a new Cloud KMS key by creating a KeyHandle : curl -H "Content-Type: application/json" \ -H "X-Goog-User-Project: USER PROJECT " \ -H "Authorization: Bearer TOKEN " \ -X POST https://cloudkms.googleapis.com/v1/projects/ RESOURCE PROJECT ID /locations/ LOCATION /keyHandles \ -d '{"resource type selector": " RESOURCE TYPE "}' Replace the following: USER PROJECT : the project to be billed for charges associated with this request.

