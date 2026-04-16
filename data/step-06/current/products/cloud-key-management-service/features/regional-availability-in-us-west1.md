---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:33.076Z"
product_name: "Cloud Key Management Service"
product_slug: "cloud-key-management-service"
feature_name: "Regional availability in us-west1"
feature_slug: "regional-availability-in-us-west1"
latest_feature_date: "2017-04-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kms/docs/cmek-best-practices"
  - "https://docs.cloud.google.com/kms/docs/create-resource-with-autokey"
  - "https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory"
  - "https://docs.cloud.google.com/kms/docs/reference/rest"
keywords:
  - "regional"
  - "availability"
  - "in"
  - "us"
  - "west1"
  - "kms"
  - "resources"
  - "can"
---

# Regional availability in us-west1

Product: Cloud Key Management Service
Coverage: MEDIUM

## Step 02 Summary

Cloud KMS resources can be created in the us-west1 region.

## Extended Definition

Cloud KMS resources can be created in the us-west1 region.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kms/docs/cmek-best-practices](https://docs.cloud.google.com/kms/docs/cmek-best-practices)
- [https://docs.cloud.google.com/kms/docs/create-resource-with-autokey](https://docs.cloud.google.com/kms/docs/create-resource-with-autokey)
- [https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory](https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory)
- [https://docs.cloud.google.com/kms/docs/reference/rest](https://docs.cloud.google.com/kms/docs/reference/rest)

## Supporting Pages

### "Best practices for using CMEKs \_|\_ Cloud Key Management Service \_|\_\

- URL: [https://docs.cloud.google.com/kms/docs/cmek-best-practices](https://docs.cloud.google.com/kms/docs/cmek-best-practices)
- Source ID: `site-iam-reference`
- Final score: 218
- Re-rank relevance: N/A

Evidence snippets:
- Operational overhead: Using highly granular keys might require administrative effort or additional tooling for automation to provision a large number of Cloud KMS resources and to manage access controls for service agents so they can only use the appropriate keys.
- Monitor key usage You can view key usage with the Cloud KMS inventory API to help you identify Google Cloud resources in your organization that are dependent on and protected by Cloud KMS keys.
- This dashboard can be used to monitor the state, usage, and availability of your key versions and corresponding resources they protect.
- Multi-region resources can't use a regional key ring.

### "Create protected resources using Cloud KMS Autokey \_|\_ Cloud Key Management\

- URL: [https://docs.cloud.google.com/kms/docs/create-resource-with-autokey](https://docs.cloud.google.com/kms/docs/create-resource-with-autokey)
- Source ID: `site-iam-reference`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- Before you begin Before you can create protected resources using Autokey, you must complete the following steps to prepare: If you don't already have a project where Autokey is enabled for either centralized or delegated key management, then you must first complete the setup steps in Enable Cloud KMS Autokey , and then return to this document.
- Home Documentation Security Cloud KMS Guides Send feedback Create protected resources using Cloud KMS Autokey Stay organized with collections Save and categorize content based on your preferences.
- Make sure the edition of BigQuery that you are using is compatible with Cloud KMS before you try to use Autokey to protect BigQuery resources.
- Secret Manager is only compatible with Cloud KMS Autokey when creating resources using Terraform or the REST API.

### "Cloud KMS Inventory Service audit logging \_|\_ Cloud Key Management Service\

- URL: [https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory](https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory)
- Source ID: `site-iam-reference`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- Permission type Methods OTHER google.cloud.kms.inventory.v1.KeyDashboardService.ListCryptoKeys : To enable this log, enable ADMIN READ under the service cloudkms.googleapis.com . google.cloud.kms.inventory.v1.KeyTrackingService.GetProtectedResourcesSummary : To enable this log, enable ADMIN READ under the service cloudkms.googleapis.com . google.cloud.kms.inventory.v1.KeyTrackingService.SearchProtectedResources : To enable this log, enable ADMIN READ under the service cloudkms.googleapis.com .
- Filter for this method : protoPayload.methodName="google.cloud.kms.inventory.v1.KeyTrackingService.GetProtectedResourcesSummary" SearchProtectedResources Method : google.cloud.kms.inventory.v1.KeyTrackingService.SearchProtectedResources Audit log type : Data access Permissions : cloudkms.cryptoKeys.get - ADMIN READ cloudkms.protectedResources.search - ADMIN READ Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="google.cloud.kms.inventory.v1.KeyTrackingService.SearchProtectedResources" Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For more information about Cloud Audit Logs, see the following: Types of audit logs Audit log entry structure Storing and routing audit logs Cloud Logging pricing summary Enable Data Access audit logs Service name Cloud KMS Inventory Service audit logs use the service name kmsinventory.googleapis.com .

### Cloud Key Management Service (KMS) API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kms/docs/reference/rest](https://docs.cloud.google.com/kms/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- Select a location to see its regional service endpoint for this service. global europe-west3 europe-west8 europe-west9 me-central2 us-east1 us-east4 us-west2 us-west1 us-east7 us-central1 us-west3 us-central2 us-west4 us-west8 us-east5 us-south1 us in ca https://cloudkms.googleapis.com REST Resource: v1.folders Methods getAutokeyConfig GET /v1/{name=folders/ /autokeyConfig} Returns the AutokeyConfig for a folder or project. getKajPolicyConfig GET /v1/{name=folders/ /kajPolicyConfig} Gets the KeyAccessJustificationsPolicyConfig for a given organization, folder, or project. updateAutokeyConfig PATCH /v1/{autokeyConfig.name=folders/ /autokeyConfig} Updates the AutokeyConfig for a folder or a project. updateKajPolicyConfig PATCH /v1/{keyAccessJustificationsPolicyConfig.name=folders/ /kajPolicyConfig} Updates the KeyAccessJustificationsPolicyConfig for a given organization, folder, or project.
- REST Resource: v1.folders REST Resource: v1.organizations REST Resource: v1.projects REST Resource: v1.projects.locations REST Resource: v1.projects.locations.ekmConfig REST Resource: v1.projects.locations.ekmConnections REST Resource: v1.projects.locations.keyHandles REST Resource: v1.projects.locations.keyRings REST Resource: v1.projects.locations.keyRings.cryptoKeys REST Resource: v1.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions REST Resource: v1.projects.locations.keyRings.importJobs REST Resource: v1.projects.locations.operations REST Resource: v1.projects.locations.retiredResources REST Resource: v1.projects.locations.singleTenantHsmInstances REST Resource: v1.projects.locations.singleTenantHsmInstances.proposals Service: cloudkms.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- REST Resource: v1.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions Methods asymmetricDecrypt POST /v1/{name=projects/ /locations/ /keyRings/ /cryptoKeys/ /cryptoKeyVersions/ }:asymmetricDecrypt Decrypts data that was encrypted with a public key retrieved from GetPublicKey corresponding to a CryptoKeyVersion with CryptoKey.purpose ASYMMETRIC DECRYPT. asymmetricSign POST /v1/{name=projects/ /locations/ /keyRings/ /cryptoKeys/ /cryptoKeyVersions/ }:asymmetricSign Signs data using a CryptoKeyVersion with CryptoKey.purpose ASYMMETRIC SIGN, producing a signature that can be verified with the public key retrieved from GetPublicKey . create POST /v1/{parent=projects/ /locations/ /keyRings/ /cryptoKeys/ }/cryptoKeyVersions Create a new CryptoKeyVersion in a CryptoKey . decapsulate POST /v1/{name=projects/ /locations/ /keyRings/ /cryptoKeys/ /cryptoKeyVersions/ }:decapsulate Decapsulates data that was encapsulated with a public key retrieved from GetPublicKey corresponding to a CryptoKeyVersion with CryptoKey.purpose KEY ENCAPSULATION. delete DELETE /v1/{name=projects/ /locations/ /keyRings/ /cryptoKeys/ /cryptoKeyVersions/ } Permanently deletes the given CryptoKeyVersion . destroy POST /v1/{name=projects/ /locations/ /keyRings/ /cryptoKeys/ /cryptoKeyVersions/ }:destroy Schedule a CryptoKeyVersion for destruction. get GET /v1/{name=projects/ /locations/ /keyRings/ /cryptoKeys/ /cryptoKeyVersions/ } Returns metadata for a given CryptoKeyVersion . getPublicKey GET /v1/{name=projects/ /locations/ /keyRings/ /cryptoKeys/ /cryptoKeyVersions/ }/publicKey Returns the public key for the given CryptoKeyVersion . import POST /v1/{parent=projects/ /locations/ /keyRings/ /cryptoKeys/ }/cryptoKeyVersions:import Import wrapped key material into a CryptoKeyVersion . list GET /v1/{parent=projects/ /locations/ /keyRings/ /cryptoKeys/ }/cryptoKeyVersions Lists CryptoKeyVersions . macSign POST /v1/{name=projects/ /locations/ /keyRings/ /cryptoKeys/ /cryptoKeyVersions/ }:macSign Signs data using a CryptoKeyVersion with CryptoKey.purpose MAC, producing a tag that can be verified by another source with the same key. macVerify POST /v1/{name=projects/ /locations/ /keyRings/ /cryptoKeys/ /cryptoKeyVersions/ }:macVerify Verifies MAC tag using a CryptoKeyVersion with CryptoKey.purpose MAC, and returns a response that indicates whether or not the verification was successful. patch PATCH /v1/{cryptoKeyVersion.name=projects/ /locations/ /keyRings/ /cryptoKeys/ /cryptoKeyVersions/ } Update a CryptoKeyVersion 's metadata. rawDecrypt POST /v1/{name=projects/ /locations/ /keyRings/ /cryptoKeys/ /cryptoKeyVersions/ }:rawDecrypt Decrypts data that was originally encrypted using a raw cryptographic mechanism. rawEncrypt POST /v1/{name=projects/ /locations/ /keyRings/ /cryptoKeys/ /cryptoKeyVersions/ }:rawEncrypt Encrypts data using portable cryptographic primitives. restore POST /v1/{name=projects/ /locations/ /keyRings/ /cryptoKeys/ /cryptoKeyVersions/ }:restore Restore a CryptoKeyVersion in the DESTROY SCHEDULED state.
- REST Resource: v1.projects.locations.keyRings.cryptoKeys Methods create POST /v1/{parent=projects/ /locations/ /keyRings/ }/cryptoKeys Create a new CryptoKey within a KeyRing . decrypt POST /v1/{name=projects/ /locations/ /keyRings/ /cryptoKeys/ }:decrypt Decrypts data that was protected by Encrypt . delete DELETE /v1/{name=projects/ /locations/ /keyRings/ /cryptoKeys/ } Permanently deletes the given CryptoKey . encrypt POST /v1/{name=projects/ /locations/ /keyRings/ /cryptoKeys/ }:encrypt Encrypts data, so that it can only be recovered by a call to Decrypt . get GET /v1/{name=projects/ /locations/ /keyRings/ /cryptoKeys/ } Returns metadata for a given CryptoKey , as well as its primary CryptoKeyVersion . getIamPolicy GET /v1/{resource=projects/ /locations/ /keyRings/ /cryptoKeys/ }:getIamPolicy Gets the access control policy for a resource. list GET /v1/{parent=projects/ /locations/ /keyRings/ }/cryptoKeys Lists CryptoKeys . patch PATCH /v1/{cryptoKey.name=projects/ /locations/ /keyRings/ /cryptoKeys/ } Update a CryptoKey . setIamPolicy POST /v1/{resource=projects/ /locations/ /keyRings/ /cryptoKeys/ }:setIamPolicy Sets the access control policy on the specified resource. testIamPermissions POST /v1/{resource=projects/ /locations/ /keyRings/ /cryptoKeys/ }:testIamPermissions Returns permissions that a caller has on the specified resource. updatePrimaryVersion POST /v1/{name=projects/ /locations/ /keyRings/ /cryptoKeys/ }:updatePrimaryVersion Update the version of a CryptoKey that will be used in Encrypt .

