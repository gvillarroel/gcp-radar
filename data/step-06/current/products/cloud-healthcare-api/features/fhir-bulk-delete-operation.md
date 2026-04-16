---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:44:19.020Z"
product_name: "Cloud Healthcare API"
product_slug: "cloud-healthcare-api"
feature_name: "FHIR bulk-delete operation"
feature_slug: "fhir-bulk-delete-operation"
latest_feature_date: "2026-02-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/healthcare-api/docs/concepts/fhir-import"
  - "https://docs.cloud.google.com/healthcare-api/docs/cmek"
  - "https://docs.cloud.google.com/healthcare-api/docs/best-practices-lros"
keywords:
  - "fhir"
  - "bulk"
  - "delete"
  - "operation"
  - "generally"
  - "available"
  - "healthcare"
  - "enabling"
---

# FHIR bulk-delete operation

Product: Cloud Healthcare API
Coverage: MEDIUM

## Step 02 Summary

The FHIR bulk-delete operation is generally available in Cloud Healthcare API, enabling deletion or purging of multiple FHIR resources in one long-running operation using filters such as resource type and last updated time; The FHIR bulk-delete operation is generally available in Cloud Healthcare API, enabling deletion or purging of multiple FHIR resources in one long-running operation using filters such as resource type and last updated time.

## Extended Definition

The FHIR bulk-delete operation is generally available in Cloud Healthcare API, enabling deletion or purging of multiple FHIR resources in one long-running operation using filters such as resource type and last updated time; The FHIR bulk-delete operation is generally available in Cloud Healthcare API, enabling deletion or purging of multiple FHIR resources in one long-running operation using filters such as resource type and last updated time.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/healthcare-api/docs/concepts/fhir-import](https://docs.cloud.google.com/healthcare-api/docs/concepts/fhir-import)
- [https://docs.cloud.google.com/healthcare-api/docs/cmek](https://docs.cloud.google.com/healthcare-api/docs/cmek)
- [https://docs.cloud.google.com/healthcare-api/docs/best-practices-lros](https://docs.cloud.google.com/healthcare-api/docs/best-practices-lros)

## Supporting Pages

### FHIR import options \_|\_ Cloud Healthcare API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/healthcare-api/docs/concepts/fhir-import](https://docs.cloud.google.com/healthcare-api/docs/concepts/fhir-import)
- Source ID: `site-docs-root-2`
- Final score: 134
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If the application managing the fhirStores.import operation doesn't have a good strategy for the following, use fhir.executeBundle : Handling bulk errors Addressing failures on a subset of FHIR resources or entire batches When not to use FHIR bundles Consider the following limitations of fhir.executeBundle when determining whether to use it to store FHIR resources: Bundles have the equivalent quota and billing applied to the operations inside the bundle as if the operations were executed outside of the bundle.
- Tip: If you're importing data from an external bulk FHIR server, consider using the Google open source Bulk FHIR Tools to load data directly into the Cloud Healthcare API.
- If you need to send Pub/Sub notifications when FHIR create, update, or delete operations occur, use fhir.executeBundle .
- For example, if a bundle has 10 POST operations, 5 GET operations, and 1 DELETE operation, the quota and billing applied to the bundle is the same as if those operations were executed independently.

### "Enable customer-managed encryption keys (CMEK) for Cloud Healthcare API\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/cmek](https://docs.cloud.google.com/healthcare-api/docs/cmek)
- Source ID: `site-docs-root-2`
- Final score: 131
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following process describes how key availability is checked, and how a dataset can be disabled and deleted: After a CMEK-encrypted Cloud Healthcare API dataset is created, the Cloud Healthcare API checks the key's status every five minutes to ensure the key is available.
- Key unavailability and data loss If a dataset is encrypted by a key, and that key becomes unavailable and remains unavailable, the Cloud Healthcare API disables and eventually deletes the dataset.
- CMEK operations Cloud KMS keys are used when a CMEK-encrypted resource is created, read, updated, or deleted, and for operational tasks like billing or ensuring the key is available.
- CMEK-encrypted Cloud Healthcare API datasets and their DICOM, FHIR, and HL7v2 stores consume these quotas for all operations except datasets.get .

### "Long-running operations best practices \_|\_ Cloud Healthcare API \_|\_\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/best-practices-lros](https://docs.cloud.google.com/healthcare-api/docs/best-practices-lros)
- Source ID: `site-docs-root-2`
- Final score: 127
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Quota impact LROs don't share quota with Cloud Healthcare API create, read, update, and delete (CRUD) methods that consume the following types of quota: fhir read ops fhir write ops fhir search ops fhir store ops dicom web ops dicom ops LRO quota is calculated using the fhir store lro ops and dicom store lro ops metrics.
- Home Documentation Industry solutions Cloud Healthcare API Guides Send feedback Long-running operations best practices Stay organized with collections Save and categorize content based on your preferences.
- LROs are background processes, so if the load from LROs interferes with higher-priority processes, such CRUD operations, the Cloud Healthcare API can reduce LRO throughput.
- Automatically retrying the import with the same data might generate many 409 ALREADY EXISTS errors because some FHIR resources were imported in the original operation.

