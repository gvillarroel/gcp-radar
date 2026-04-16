---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:33.060Z"
product_name: "Cloud Key Management Service"
product_slug: "cloud-key-management-service"
feature_name: "Cloud KMS dual-region availability in nam4"
feature_slug: "cloud-kms-dual-region-availability-in-nam4"
latest_feature_date: "2018-11-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kms/docs/cmek-best-practices"
  - "https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory"
  - "https://docs.cloud.google.com/kms/docs/creating-managing-labels"
  - "https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.locations.keyRings.cryptoKeys/getProtectedResourcesSummary"
keywords:
  - "kms"
  - "dual"
  - "region"
  - "availability"
  - "in"
  - "nam4"
  - "resources"
  - "can"
---

# Cloud KMS dual-region availability in nam4

Product: Cloud Key Management Service
Coverage: MEDIUM

## Step 02 Summary

Cloud KMS resources can be created in the nam4 dual-region.

## Extended Definition

Cloud KMS resources can be created in the nam4 dual-region.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kms/docs/cmek-best-practices](https://docs.cloud.google.com/kms/docs/cmek-best-practices)
- [https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory](https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory)
- [https://docs.cloud.google.com/kms/docs/creating-managing-labels](https://docs.cloud.google.com/kms/docs/creating-managing-labels)
- [https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.locations.keyRings.cryptoKeys/getProtectedResourcesSummary](https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.locations.keyRings.cryptoKeys/getProtectedResourcesSummary)

## Supporting Pages

### "Best practices for using CMEKs \_|\_ Cloud Key Management Service \_|\_\

- URL: [https://docs.cloud.google.com/kms/docs/cmek-best-practices](https://docs.cloud.google.com/kms/docs/cmek-best-practices)
- Source ID: `site-iam-reference`
- Final score: 204
- Re-rank relevance: N/A

Evidence snippets:
- Operational overhead: Using highly granular keys might require administrative effort or additional tooling for automation to provision a large number of Cloud KMS resources and to manage access controls for service agents so they can only use the appropriate keys.
- For workloads that require high availability or disaster recovery capabilities across multiple locations, it's your responsibility to assess whether your workload is resilient in the event that Cloud KMS becomes unavailable in a certain region.
- Monitor key usage You can view key usage with the Cloud KMS inventory API to help you identify Google Cloud resources in your organization that are dependent on and protected by Cloud KMS keys.
- For example, a Compute Engine persistent disk encrypted with a Cloud KMS key from region A can't be recreated in region B in a disaster recovery scenario where region A is unavailable.

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

### Labeling keys \_|\_ Cloud Key Management Service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kms/docs/creating-managing-labels](https://docs.cloud.google.com/kms/docs/creating-managing-labels)
- Source ID: `site-iam-reference`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- You can also add labels to an existing key. gcloud kms keys create KEY NAME \ --keyring KEY RING \ --location LOCATION \ --purpose PURPOSE \ --labels " LABEL LIST " Replace the following: KEY NAME : the name of the key.
- For example: { "labels" : [] } Audit logging Cloud Audit Logs for Cloud KMS can be used to log label information when keys are created or updated.
- These limits apply to the key and value for each label, and to the individual Google Cloud resources that have labels.
- You can use labels with other Google Cloud resources, such as virtual machine resources and storage buckets .

### "Method: projects.locations.keyRings.cryptoKeys.getProtectedResourcesSummary\

- URL: [https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.locations.keyRings.cryptoKeys/getProtectedResourcesSummary](https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.locations.keyRings.cryptoKeys/getProtectedResourcesSummary)
- Source ID: `site-api-reference`
- Final score: 170
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example: projects/test-project/locations/us/keyRings/test-keyring/cryptoKeys/test-key/protectedResourcesSummary resourceCount string ( int64 format) The total number of protected resources in the same Cloud organization as the key. projectCount integer The number of distinct Cloud projects in the same Cloud organization as the key that have resources protected by the key. resourceTypes map (key: string, value: string ( int64 format)) The number of resources protected by the key grouped by resource type. cloudProducts map (key: string, value: string ( int64 format)) The number of resources protected by the key grouped by Cloud product. locations map (key: string, value: string ( int64 format)) The number of resources protected by the key grouped by region.
- Home Documentation Security Cloud KMS Reference Send feedback Method: projects.locations.keyRings.cryptoKeys.getProtectedResourcesSummary Stay organized with collections Save and categorize content based on your preferences.
- Response body If successful, the response body contains data with the following structure: Aggregate information about the resources protected by a Cloud KMS key in the same Cloud organization as the key.
- HTTP request GET https://kmsinventory.googleapis.com/v1/{name=projects/ /locations/ /keyRings/ /cryptoKeys/ }/protectedResourcesSummary The URL uses gRPC Transcoding syntax.

