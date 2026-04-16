---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.217Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Clickable Cloud Storage error links"
feature_slug: "clickable-cloud-storage-error-links"
latest_feature_date: "2015-12-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc-metastore/docs/error-messages"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-best-practices"
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig"
keywords:
  - "clickable"
  - "messages"
  - "error"
  - "paths"
  - "shown"
  - "links"
  - "bucket"
  - "storage"
---

# Clickable Cloud Storage error links

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Cloud Storage bucket paths shown in error messages are rendered as clickable links.

## Extended Definition

Cloud Storage bucket paths shown in error messages are rendered as clickable links.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc-metastore/docs/error-messages](https://docs.cloud.google.com/dataproc-metastore/docs/error-messages)
- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-best-practices](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-best-practices)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)

## Supporting Pages

### Error messages \_|\_ Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/error-messages](https://docs.cloud.google.com/dataproc-metastore/docs/error-messages)
- Source ID: `site-docs-root-2`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Please make sure the service agent is granted roles/metastore.serviceAgent in the project [PROJECT NUMBER]." "Dataproc Metastore Service Agent cannot access Cloud Storage URI [GCS URI] with permissions [SERVICE AGENT PERMISSIONS]; Please check permissions or VPC Service Controls service perimeter." "The provided warehouse directory's Cloud Storage bucket [GCS URI] is not readable and writable by the Dataproc Metastore service agent." Errors relating to import and export: Import and export Cloud Storage permissions: ""Dataproc Metastore Service Agent" or "Caller" does not have enough permissions of the Cloud Storage URI for import/export ([SERVICE AGENT] cannot access Cloud Storage URI [GCS URI] with permissions [SERVICE AGENT PERMISSIONS])." Run Avro import or export on an unsupported Hive version: "Importing from Avro files is not supported for Hive version [HIVE METASTORE VERSION], supported versions are [SUPPORT HIVE VERSIONS]." Missing import tables: "Avro source files not found for tables [MISSING TABLE LIST]." "Hive schema validation failed, missing tables: [MISSING TABLE LIST]." Errors relating to backup and restore: Backup not found for restore: "Backup [BACKUP ID] not found." Cannot delete a backup: "Cannot delete a backup in a state [RESOURCE STATE]." General errors This section explains general errors.
- Home Documentation Data analytics Dataproc Metastore Guides Send feedback Error messages Stay organized with collections Save and categorize content based on your preferences.
- You provided a custom data warehouse Cloud Storage bucket, but you didn't grant the Dataproc Metastore service agent permission to access it.
- The provided warehouse directory's Cloud Storage bucket [GCS URI] is not readable and writable by the Dataproc Metastore service agent.

### "Managed Service for Apache Spark best practices for production \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-best-practices](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-best-practices)
- Source ID: `site-docs-root`
- Final score: 90
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Typically, the staging bucket Cloud Storage location is shown in error messages, as shown in the bold text in the following sample error message: ERROR: (gcloud.dataproc.clusters.create) Operation ... failed: ... - Initialization action failed.
- View the staging bucket to investigate failures Look at your cluster's staging bucket to investigate cluster and job error messages.
- Failed action ... see output in: gs://dataproc-<BUCKETID>-us-central1/google-cloud-dataproc-metainfo/CLUSTERID/<CLUSTER ID>\dataproc-initialization-script-0 output Use the gcloud CLI to view staging bucket contents: gcloud storage cat gs:// STAGING BUCKET Sample output: + readonly RANGER VERSION=1.2.0 ...
- For production environments, associate your cluster with a specific major.minor Managed Service for Apache Spark image version, as shown in the following gcloud CLI command. gcloud dataproc clusters create CLUSTER NAME \ --region= region \ --image-version=2.0 Dataproc resolves the major.minor version to the latest sub-minor version version ( 2.0 is resolved to 2.0.x ).

### "ClusterConfig \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- Source ID: `site-docs-reference`
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- If you do not specify a staging bucket, Cloud Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's staging bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket (see Dataproc staging and temp buckets ).
- If you do not specify a temp bucket, Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's temp bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket.
- A Cloud Storage bucket used to store ephemeral cluster and jobs data, such as Spark and MapReduce history files.
- A Cloud Storage bucket used to stage job dependencies, config files, and job driver console output.

