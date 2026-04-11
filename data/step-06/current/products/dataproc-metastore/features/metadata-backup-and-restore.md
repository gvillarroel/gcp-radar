---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:49:01.302Z"
product_name: "Dataproc Metastore"
product_slug: "dataproc-metastore"
feature_name: "Metadata backup and restore"
feature_slug: "metadata-backup-and-restore"
latest_feature_date: "2021-07-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc-metastore/docs/release-notes"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/backup-metadata"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/troubleshooting"
keywords:
  - "metadata"
  - "backup"
  - "and"
  - "restore"
  - "supports"
  - "cross"
  - "restoration"
  - "of"
---

# Metadata backup and restore

Product: Dataproc Metastore
Coverage: LOW

## Step 02 Summary

Metadata backup and restore supports cross-service restoration of Dataproc Metastore metadata; Metadata backup and restore lets Dataproc Metastore back up and restore service metadata.

## Extended Definition

Metadata backup and restore supports cross-service restoration of Dataproc Metastore metadata; Metadata backup and restore lets Dataproc Metastore back up and restore service metadata.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc-metastore/docs/release-notes](https://docs.cloud.google.com/dataproc-metastore/docs/release-notes)
- [https://docs.cloud.google.com/dataproc-metastore/docs/backup-metadata](https://docs.cloud.google.com/dataproc-metastore/docs/backup-metadata)
- [https://docs.cloud.google.com/dataproc-metastore/docs/troubleshooting](https://docs.cloud.google.com/dataproc-metastore/docs/troubleshooting)

## Supporting Pages

### Dataproc Metastore release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/release-notes](https://docs.cloud.google.com/dataproc-metastore/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- July 30, 2021 v1 Feature Dataproc Metastore backups and restores support cross-service restoration of metadata. v1 Change Dataproc Metastore is available in the following regions: asia-southeast1 (Singapore) europe-west1 (Belgium) northamerica-northeast1 (Montréal) For more information, see Locations .
- February 11, 2022 v1beta1 Fixed Performing import, export, backup, or restore on Spanner-backed services now returns a 4XX error since these operations aren't supported. v1beta1 Change Added additional mutual exclusion validation for Data Catalog and Spanner-backed services. v1 Fixed Fixed the issue causing request count metric spikes due to a bug in the logic of our metrics reporting pipeline.
- Metadata changes introduced through imports and backups will not be reflected in Data Catalog until batch sync is restored.
- February 03, 2021 v1beta1 Feature You can create Dataproc Metastore services in cross-product networks (shared VPC) . v1beta1 Feature New Cloud Monitoring service metric is available: metastore.googleapis.com/service/request count v1beta1 Feature Dataproc Metastore suppports the use of non-RFC 1918 private IP address ranges in metastore services. v1beta1 Feature You can update the description of metadata imports under a Dataproc Metastore service. v1beta1 Fixed Fixed an issue in which a service could get stuck in the UPDATING state. v1beta1 Fixed Fixed an issue where Cloud Storage buckets with single character directories would fail request validation.

### Back up a Dataproc Metastore service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/backup-metadata](https://docs.cloud.google.com/dataproc-metastore/docs/backup-metadata)
- Source ID: `site-iam-reference`
- Final score: 126
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to back up a Dataproc Metastore service: To back up a metadata service: metastore.backups.create To use the Cloud Storage object: orgpolicy.policy.get resourcemanager.projects.get resourcemanager.projects.list storage.managedFolders.create storage.managedFolders.delete storage.managedFolders.get storage.managedFolders.list storage.multipartUploads. storage.objects.create storage.objects.delete storage.objects.get storage.objects.list storage.objects.restore storage.objects.update You might also be able to get these permissions with custom roles or other predefined roles .
- To grant read and modify access to specific metadata of databases and tables: Dataproc Metastore Metadata Operator ( roles/metastore.metadataOperator ) on the metadata service To use the Cloud Storage object that stores scheduled backups: Cloud Storage Object User ( roles/storage.objectUser ) on the Dataproc Metastore service agent For more information about granting roles, see Manage access to projects, folders, and organizations .
- What's next Restore a Dataproc Metastore service from a backup Update and delete a Dataproc Metastore service Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- A backup takes a snapshot of your service saves its current configuration settings and all stored metadata.

### Troubleshooting \_|\_ Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/troubleshooting](https://docs.cloud.google.com/dataproc-metastore/docs/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 118
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To restore metadata, you must request an IAM role containing the metastore.services.restore and metastore.backups.use IAM permissions.
- Job fails because the service metadata file is too big If your service metadata file is too large, it can take more than the one hour job timeout limit to complete the backup or restore process.
- Backup and restore error scenarios This section outlines common Dataproc Metastore backup and restore issues.
- Cross-project deployment fails where service account may not exist To create a Dataproc Metastore service that is accessible in a network belonging to a different project than the one the service belongs to, you must grant roles/metastore.serviceAgent to the service project's Dataproc Metastore service agent ( service- SERVICE PROJECT NUMBER @gcp-sa-metastore.iam.gserviceaccount.com ) in the network project's IAM policy. gcloud projects add-iam-policy-binding NETWORK PROJECT ID \ --role "roles/metastore.serviceAgent" \ --member "serviceAccount:service- SERVICE PROJECT NUMBER @gcp-sa-metastore.iam.gserviceaccount.com" Caution: This IAM policy change indirectly allows Dataproc Metastore users with metastore.services.create permission in the service project to control the addresses and peerings in the network project.

