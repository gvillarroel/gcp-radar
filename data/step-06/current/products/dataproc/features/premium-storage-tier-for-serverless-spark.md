---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.031Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Premium storage tier for Serverless Spark"
feature_slug: "premium-storage-tier-for-serverless-spark"
latest_feature_date: "2023-06-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-best-practices"
keywords:
  - "premium"
  - "storage"
  - "tier"
  - "for"
  - "serverless"
  - "spark"
  - "dataproc"
  - "workloads"
---

# Premium storage tier for Serverless Spark

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Dataproc Serverless Spark workloads support a premium storage tier for higher throughput and IOPS.

## Extended Definition

Dataproc Serverless Spark workloads support a premium storage tier for higher throughput and IOPS.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-best-practices](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-best-practices)

## Supporting Pages

### Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- July 06, 2023 Announcement New Dataproc Serverless for Spark runtime versions : 1.1.22 2.0.30 2.1.9 June 29, 2023 Feature Added support for Premium compute and storage pricing tiers for Dataproc Serverless Spark workloads.
- August 11, 2023 Announcement New Dataproc on Compute Engine subminor image versions : 2.0.73-debian10, 2.0.73-rocky8, 2.0.73-ubuntu18 2.1.21-debian11, 2.1.21-rocky8, 2.1.21-ubuntu20, 2.1.21-ubuntu20-arm Announcement New Dataproc Serverless for Spark runtime versions : 1.1.27 2.0.35 2.1.14 Announcement Added new Dataproc Serverless Templates for batch workload creation: Cloud Spanner to Cloud Storage Cloud Storage to JDBC Cloud Storage to Cloud Storage Hive to BigQuery JDBC to Cloud Spanner JDBC to JDBC Pub/Sub to Cloud Storage Feature Improved the reliability of Dataproc Serverless compute node initialization with a Premium disk tier option.
- Features and improvements: Regional and multi-zonal workloads are used by default to increase obtainability of compute resources Faster startup than previous runtimes Fast resource cleanup that allows faster release of VPC IPs after workload completion End-user credentials are used for all workloads by default New bigquery Spark catalog, pre-configured for out-of-the-box BigQuery native table interactions New Spark Serverless-specific IAM roles New dataproc-rm.googleapis.com API enablement is required November 22, 2025 Announcement New Dataproc on Compute Engine subminor image versions : 2.0.154-debian10, 2.0.154-ubuntu18, 2.0.154-rocky8 2.1.103-debian11, 2.1.103-ubuntu20, 2.1.103-ubuntu20-arm, 2.1.103-rocky8 2.2.71-debian12, 2.2.71-ubuntu22, 2.2.71-ubuntu22-arm, 2.2.71-rocky9 2.3.18-debian12, 2.3.18-ubuntu22, 2.3.18-ubuntu22-arm, 2.3.18-ml-ubuntu22, 2.3.18-rocky9 Change Dataproc on Compute Engine : Updated Cloud Storage connector: Updated to 3.1.10 in image version 2.3.18 .
- September 21, 2024 Announcement Blocklisted the following Dataproc on Compute Engine subminor image versions : 2.0.119-debian10, 2.0.103-rocky8, 2.0.103-ubuntu18 2.1.67-debian11, 2.1.51-rocky8, 2.1.51-ubuntu20, 2.1.51-ubuntu20-arm 2.2.33-debian12, 2.2.17-rocky9, 2.2.17-ubuntu22 September 16, 2024 Announcement New Dataproc on Compute Engine subminor image versions : 2.0.118-debian10, 2.0.118-rocky8, 2.0.118-ubuntu18 2.1.66-debian11, 2.1.66-rocky8, 2.1.66-ubuntu20, 2.1.66-ubuntu20-arm 2.2.32-debian12, 2.2.32-rocky9, 2.2.32-ubuntu22 September 13, 2024 Announcement New Dataproc Serverless for Spark runtime versions : 1.1.78 1.2.22 2.2.22 Fixed Dataproc Serverless for Spark: Fixed a bug that caused some batches and sessions to fail to start when using the premium compute tier.

### "ClusterConfig \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- Source ID: `site-docs-reference`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- If you do not specify a staging bucket, Cloud Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's staging bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket (see Dataproc staging and temp buckets ).
- If you do not specify a temp bucket, Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's temp bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket.
- CLUSTER TIER PREMIUM Premium Dataproc cluster.

### "Managed Service for Apache Spark best practices for production \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-best-practices](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-best-practices)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- For production environments, associate your cluster with a specific major.minor Managed Service for Apache Spark image version, as shown in the following gcloud CLI command. gcloud dataproc clusters create CLUSTER NAME \ --region= region \ --image-version=2.0 Dataproc resolves the major.minor version to the latest sub-minor version version ( 2.0 is resolved to 2.0.x ).
- Control initialization action locations Initialization actions allow you to automatically run scripts or install components when you create a Managed Service for Apache Spark cluster (see the dataproc-initialization-actions GitHub repository for common Managed Service for Apache Spark initialization actions).
- Failed action ... see output in: gs://dataproc-<BUCKETID>-us-central1/google-cloud-dataproc-metainfo/CLUSTERID/<CLUSTER ID>\dataproc-initialization-script-0 output Use the gcloud CLI to view staging bucket contents: gcloud storage cat gs:// STAGING BUCKET Sample output: + readonly RANGER VERSION=1.2.0 ...

