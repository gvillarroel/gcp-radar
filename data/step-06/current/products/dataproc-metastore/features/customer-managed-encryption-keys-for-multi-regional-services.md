---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:49:01.294Z"
product_name: "Dataproc Metastore"
product_slug: "dataproc-metastore"
feature_name: "Customer-managed encryption keys for multi-regional services"
feature_slug: "customer-managed-encryption-keys-for-multi-regional-services"
latest_feature_date: "2025-04-22"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc-metastore/docs/cmek"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/create-service"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/release-notes"
keywords:
  - "customer"
  - "managed"
  - "encryption"
  - "keys"
  - "for"
  - "multi"
  - "regional"
  - "services"
---

# Customer-managed encryption keys for multi-regional services

Product: Dataproc Metastore
Coverage: LOW

## Step 02 Summary

This capability lets multi-regional Dataproc Metastore services use customer-managed encryption keys.

## Extended Definition

This capability lets multi-regional Dataproc Metastore services use customer-managed encryption keys.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc-metastore/docs/cmek](https://docs.cloud.google.com/dataproc-metastore/docs/cmek)
- [https://docs.cloud.google.com/dataproc-metastore/docs/create-service](https://docs.cloud.google.com/dataproc-metastore/docs/create-service)
- [https://docs.cloud.google.com/dataproc-metastore/docs/release-notes](https://docs.cloud.google.com/dataproc-metastore/docs/release-notes)

## Supporting Pages

### "Encrypt data with customer-managed encryption keys \_|\_ Dataproc Metastore\

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/cmek](https://docs.cloud.google.com/dataproc-metastore/docs/cmek)
- Source ID: `site-iam-reference`
- Final score: 182
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you want to control your encryption keys, then you can use customer-managed encryption keys (CMEKs) in Cloud KMS with CMEK-integrated services including Dataproc Metastore.
- For more information about your encryption options, see Customer-managed encryption keys (CMEK) .
- Grant Cloud KMS key permissions Use the following commands to grant Cloud KMS key permissions for Dataproc Metastore: Grant permissions to the Dataproc Metastore Service Agent service account: gcloud kms keys add-iam-policy-binding KEY NAME \ --location LOCATION \ --keyring KEY RING \ --member=serviceAccount:$(gcloud beta services identity create \ --service=metastore.googleapis.com 2>&1 awk '{print $4}') \ --role=roles/cloudkms.cryptoKeyEncrypterDecrypter Grant permissions to the Cloud Storage service account: gcloud storage service-agent --authorize-cmek projects/ KEY PROJECT /locations/ LOCATION /keyRings/ KEY RING /cryptoKeys/ KEY NAME Create a single-region service with a CMEK key Use the following steps to configure CMEK encryption for a single-region Dataproc Metastore service.
- Home Documentation Data analytics Dataproc Metastore Guides Send feedback Encrypt data with customer-managed encryption keys Stay organized with collections Save and categorize content based on your preferences.

### Create a Dataproc Metastore service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/create-service](https://docs.cloud.google.com/dataproc-metastore/docs/create-service)
- Source ID: `site-docs-root`
- Final score: 136
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For more information, see Using customer-managed encryption keys .
- For Dataproc Metastore services configured with the Thrift endpoint protocol, make sure your Dataproc Metastore service and the Managed Service for Apache Spark cluster it's attached to are using the same Shared VPC network.
- After you create your Dataproc Metastore service, you can import metadata and connect to any of the following services: A Managed Service for Apache Spark cluster .
- Use your Dataproc Metastore service with other Google Cloud services, such as Managed Service for Apache Spark cluster.

### Dataproc Metastore release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/release-notes](https://docs.cloud.google.com/dataproc-metastore/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- April 22, 2025 v1beta1 Feature Dataproc Metastore multi-regional services now support the use of customer-managed encryption keys (CMEKs) -- (in preview ).
- March 31, 2025 v1 Feature Dataproc Metastore federation now supports multi-regional Dataproc Metastore services.
- February 11, 2022 v1beta1 Fixed Performing import, export, backup, or restore on Spanner-backed services now returns a 4XX error since these operations aren't supported. v1beta1 Change Added additional mutual exclusion validation for Data Catalog and Spanner-backed services. v1 Fixed Fixed the issue causing request count metric spikes due to a bug in the logic of our metrics reporting pipeline.
- June 30, 2024 v1 Change Dataproc Metastore managed migrations is generally available ( GA ) v1 Change Dataproc Metastore autoscaling is generally available ( GA ) May 27, 2024 v1 Feature Dataproc Metastore services can now enable deletion-protection to prevent the accidental removal of new or existing services.

