---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.107Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Customer-managed encryption keys on Cloud Storage"
feature_slug: "customer-managed-encryption-keys-on-cloud-storage"
latest_feature_date: "2018-08-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc-metastore/docs/cmek"
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
  - "https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial"
keywords:
  - "customer"
  - "managed"
  - "encryption"
  - "keys"
  - "on"
  - "storage"
  - "let"
  - "users"
---

# Customer-managed encryption keys on Cloud Storage

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Customer-managed encryption keys on Cloud Storage let users manage the encryption key for the bucket used by Dataproc for cluster metadata and job driver output.

## Extended Definition

Customer-managed encryption keys on Cloud Storage let users manage the encryption key for the bucket used by Dataproc for cluster metadata and job driver output.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc-metastore/docs/cmek](https://docs.cloud.google.com/dataproc-metastore/docs/cmek)
- [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- [https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial](https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial)

## Supporting Pages

### "Encrypt data with customer-managed encryption keys \_|\_ Dataproc Metastore\

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/cmek](https://docs.cloud.google.com/dataproc-metastore/docs/cmek)
- Source ID: `site-docs-root-2`
- Final score: 208
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Data analytics Dataproc Metastore Guides Send feedback Encrypt data with customer-managed encryption keys Stay organized with collections Save and categorize content based on your preferences.
- If you want to control your encryption keys, then you can use customer-managed encryption keys (CMEKs) in Cloud KMS with CMEK-integrated services including Dataproc Metastore.
- For more information about your encryption options, see Customer-managed encryption keys (CMEK) .
- Grant Cloud KMS key permissions Use the following commands to grant Cloud KMS key permissions for Dataproc Metastore: Grant permissions to the Dataproc Metastore Service Agent service account: gcloud kms keys add-iam-policy-binding KEY NAME \ --location LOCATION \ --keyring KEY RING \ --member=serviceAccount:$(gcloud beta services identity create \ --service=metastore.googleapis.com 2>&1 awk '{print $4}') \ --role=roles/cloudkms.cryptoKeyEncrypterDecrypter Grant permissions to the Cloud Storage service account: gcloud storage service-agent --authorize-cmek projects/ KEY PROJECT /locations/ LOCATION /keyRings/ KEY RING /cryptoKeys/ KEY NAME Create a single-region service with a CMEK key Use the following steps to configure CMEK encryption for a single-region Dataproc Metastore service.

### Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- February 09, 2025 Announcement New Dataproc Serverless for Spark runtime versions : 1.1.91 1.2.35 2.2.35 February 07, 2025 Change New Dataproc on Compute Engine subminor image versions: 2.0.131-debian10, 2.0.131-rocky8, 2.0.131-ubuntu18 2.1.79-debian11, 2.1.79-rocky8, 2.1.79-ubuntu20, 2.1.79-ubuntu20-arm 2.2.45-debian12, 2.2.45-rocky9, 2.2.45-ubuntu22 Announcement Spark UI for Dataproc Serverless Batches and Interactive sessions , which lets you to monitor and debug your serverless Spark workloads, is now available for CMEK (Customer-Managed Encryption Keys) and Assured Workloads .
- June 27, 2018 Feature Announcing the Beta release of Cloud Dataproc Customer Managed Encryption Keys (CMEK) , a feature that allows you to create, use, and revoke the key encryption key (KEK) for Compute Engine VMs in your cluster and the Cloud Storage bucket used with Cloud Dataproc.
- Cloud Dataproc users can now use Customer-Managed Encryption Keys (CMEK) to access protected BigQuery datasets and tables (see Writing a MapReduce Job with the BigQuery Connector for an example).
- August 30, 2018 Feature Announcing the General Availability (GA) release of Cloud Dataproc Customer Managed Encryption Keys on Cloud Storage .

### "Use the Cloud Storage connector with Apache Spark \_|\_ Managed Service\

- URL: [https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial](https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Costs In this document, you use the following billable components of Google Cloud: Compute Engine Managed Service for Apache Spark Cloud Storage To generate a cost estimate based on your projected usage, use the pricing calculator .
- Home Documentation Data analytics Managed Service for Apache Spark Guides Send feedback Use the Cloud Storage connector with Apache Spark Stay organized with collections Save and categorize content based on your preferences.
- If necessary, set up a project with the Managed Service for Apache Spark, Compute Engine, and Cloud Storage APIs enabled and the Google Cloud CLI installed on your local machine.
- Delete the Managed Service for Apache Spark cluster Instead of deleting your project, you might want to only delete your cluster within the project.

