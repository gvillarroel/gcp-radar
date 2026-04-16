---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:33.067Z"
product_name: "Cloud Key Management Service"
product_slug: "cloud-key-management-service"
feature_name: "Cloud KMS regional availability in northamerica-northeast1"
feature_slug: "cloud-kms-regional-availability-in-northamerica-northeast1"
latest_feature_date: "2018-04-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory"
  - "https://docs.cloud.google.com/kms/docs/cmek-best-practices"
  - "https://docs.cloud.google.com/kms/docs/create-resource-with-autokey"
  - "https://docs.cloud.google.com/kms/docs/importing-a-key"
keywords:
  - "kms"
  - "regional"
  - "availability"
  - "in"
  - "northamerica"
  - "northeast1"
  - "resources"
  - "can"
---

# Cloud KMS regional availability in northamerica-northeast1

Product: Cloud Key Management Service
Coverage: MEDIUM

## Step 02 Summary

Cloud KMS resources can be created in the northamerica-northeast1 region.

## Extended Definition

Cloud KMS resources can be created in the northamerica-northeast1 region.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory](https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory)
- [https://docs.cloud.google.com/kms/docs/cmek-best-practices](https://docs.cloud.google.com/kms/docs/cmek-best-practices)
- [https://docs.cloud.google.com/kms/docs/create-resource-with-autokey](https://docs.cloud.google.com/kms/docs/create-resource-with-autokey)
- [https://docs.cloud.google.com/kms/docs/importing-a-key](https://docs.cloud.google.com/kms/docs/importing-a-key)

## Supporting Pages

### "Cloud KMS Inventory Service audit logging \_|\_ Cloud Key Management Service\

- URL: [https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory](https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory)
- Source ID: `site-iam-reference`
- Final score: 179
- Re-rank relevance: N/A

Evidence snippets:
- Permission type Methods OTHER google.cloud.kms.inventory.v1.KeyDashboardService.ListCryptoKeys : To enable this log, enable ADMIN READ under the service cloudkms.googleapis.com . google.cloud.kms.inventory.v1.KeyTrackingService.GetProtectedResourcesSummary : To enable this log, enable ADMIN READ under the service cloudkms.googleapis.com . google.cloud.kms.inventory.v1.KeyTrackingService.SearchProtectedResources : To enable this log, enable ADMIN READ under the service cloudkms.googleapis.com .
- Filter for this method : protoPayload.methodName="google.cloud.kms.inventory.v1.KeyTrackingService.GetProtectedResourcesSummary" SearchProtectedResources Method : google.cloud.kms.inventory.v1.KeyTrackingService.SearchProtectedResources Audit log type : Data access Permissions : cloudkms.cryptoKeys.get - ADMIN READ cloudkms.protectedResources.search - ADMIN READ Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="google.cloud.kms.inventory.v1.KeyTrackingService.SearchProtectedResources" Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Filter for this service: protoPayload . serviceName = "kmsinventory.googleapis.com" Methods by permission type Each IAM permission has a type property, whose value is an enum that can be one of four values: ADMIN READ , ADMIN WRITE , DATA READ , or DATA WRITE .

### "Best practices for using CMEKs \_|\_ Cloud Key Management Service \_|\_\

- URL: [https://docs.cloud.google.com/kms/docs/cmek-best-practices](https://docs.cloud.google.com/kms/docs/cmek-best-practices)
- Source ID: `site-iam-reference`
- Final score: 175
- Re-rank relevance: N/A

Evidence snippets:
- Operational overhead: Using highly granular keys might require administrative effort or additional tooling for automation to provision a large number of Cloud KMS resources and to manage access controls for service agents so they can only use the appropriate keys.
- Monitor key usage You can view key usage with the Cloud KMS inventory API to help you identify Google Cloud resources in your organization that are dependent on and protected by Cloud KMS keys.
- This dashboard can be used to monitor the state, usage, and availability of your key versions and corresponding resources they protect.
- Multi-region resources can't use a regional key ring.

### "Create protected resources using Cloud KMS Autokey \_|\_ Cloud Key Management\

- URL: [https://docs.cloud.google.com/kms/docs/create-resource-with-autokey](https://docs.cloud.google.com/kms/docs/create-resource-with-autokey)
- Source ID: `site-iam-reference`
- Final score: 167
- Re-rank relevance: N/A

Evidence snippets:
- Before you begin Before you can create protected resources using Autokey, you must complete the following steps to prepare: If you don't already have a project where Autokey is enabled for either centralized or delegated key management, then you must first complete the setup steps in Enable Cloud KMS Autokey , and then return to this document.
- Home Documentation Security Cloud KMS Guides Send feedback Create protected resources using Cloud KMS Autokey Stay organized with collections Save and categorize content based on your preferences.
- Make sure the edition of BigQuery that you are using is compatible with Cloud KMS before you try to use Autokey to protect BigQuery resources.
- Secret Manager is only compatible with Cloud KMS Autokey when creating resources using Terraform or the REST API.

### "Import a key version into Cloud KMS \_|\_ Cloud Key Management Service \_\

- URL: [https://docs.cloud.google.com/kms/docs/importing-a-key](https://docs.cloud.google.com/kms/docs/importing-a-key)
- Source ID: `site-docs-root`
- Final score: 161
- Re-rank relevance: N/A

Evidence snippets:
- KeyManagementServiceClient () Retrieve the fully-qualified key ring string. key ring name = client . key ring path ( project id , location id , key ring id ) Set paramaters for the import job, allowed values for ImportMethod and ProtectionLevel found here: https://googleapis.dev/python/cloudkms/latest/ modules/google/cloud/kms v1/types/resources.html import method = kms .
- To check the state of an import job, use the ImportJobs.get method: curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /keyRings/ KEY RING /importJobs/ IMPORT JOB ID " \ --request "GET" \ --header "authorization: Bearer TOKEN " As soon as the import job is active, you can make a request to import a key .
- If the user is not the project owner, you can assign both of the following two predefined roles to the user: roles/editor roles/cloudkms.importer For more information about available IAM roles and permissions for Cloud KMS, refer to Permissions and roles .
- For more information regarding allowed values of these fields, see: https://googleapis.dev/python/cloudkms/latest/ modules/google/cloud/kms v1/types/resources.html purpose = kms .

