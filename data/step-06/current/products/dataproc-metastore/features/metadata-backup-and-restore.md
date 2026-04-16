---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:00.724Z"
product_name: "Dataproc Metastore"
product_slug: "dataproc-metastore"
feature_name: "Metadata backup and restore"
feature_slug: "metadata-backup-and-restore"
latest_feature_date: "2021-07-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc-metastore/docs/backup-metadata"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/troubleshooting"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/reference/rest"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/reference/rpc"
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
Coverage: MEDIUM

## Step 02 Summary

Metadata backup and restore supports cross-service restoration of Dataproc Metastore metadata; Metadata backup and restore lets Dataproc Metastore back up and restore service metadata.

## Extended Definition

Metadata backup and restore supports cross-service restoration of Dataproc Metastore metadata; Metadata backup and restore lets Dataproc Metastore back up and restore service metadata.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc-metastore/docs/backup-metadata](https://docs.cloud.google.com/dataproc-metastore/docs/backup-metadata)
- [https://docs.cloud.google.com/dataproc-metastore/docs/troubleshooting](https://docs.cloud.google.com/dataproc-metastore/docs/troubleshooting)
- [https://docs.cloud.google.com/dataproc-metastore/docs/reference/rest](https://docs.cloud.google.com/dataproc-metastore/docs/reference/rest)
- [https://docs.cloud.google.com/dataproc-metastore/docs/reference/rpc](https://docs.cloud.google.com/dataproc-metastore/docs/reference/rpc)

## Supporting Pages

### Back up a Dataproc Metastore service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/backup-metadata](https://docs.cloud.google.com/dataproc-metastore/docs/backup-metadata)
- Source ID: `site-iam-reference`
- Final score: 172
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to back up a Dataproc Metastore service: To back up a metadata service: metastore.backups.create To use the Cloud Storage object: orgpolicy.policy.get resourcemanager.projects.get resourcemanager.projects.list storage.managedFolders.create storage.managedFolders.delete storage.managedFolders.get storage.managedFolders.list storage.multipartUploads. storage.objects.create storage.objects.delete storage.objects.get storage.objects.list storage.objects.restore storage.objects.update You might also be able to get these permissions with custom roles or other predefined roles .
- To grant read and modify access to specific metadata of databases and tables: Dataproc Metastore Metadata Operator ( roles/metastore.metadataOperator ) on the metadata service To use the Cloud Storage object that stores scheduled backups: Cloud Storage Object User ( roles/storage.objectUser ) on the Dataproc Metastore service agent For more information about granting roles, see Manage access to projects, folders, and organizations .
- What's next Restore a Dataproc Metastore service from a backup Update and delete a Dataproc Metastore service Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- A backup takes a snapshot of your service saves its current configuration settings and all stored metadata.

### Troubleshooting \_|\_ Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/troubleshooting](https://docs.cloud.google.com/dataproc-metastore/docs/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- To restore metadata, you must request an IAM role containing the metastore.services.restore and metastore.backups.use IAM permissions.
- Job fails because the service metadata file is too big If your service metadata file is too large, it can take more than the one hour job timeout limit to complete the backup or restore process.
- Backup and restore error scenarios This section outlines common Dataproc Metastore backup and restore issues.
- Cross-project deployment fails where service account may not exist To create a Dataproc Metastore service that is accessible in a network belonging to a different project than the one the service belongs to, you must grant roles/metastore.serviceAgent to the service project's Dataproc Metastore service agent ( service- SERVICE PROJECT NUMBER @gcp-sa-metastore.iam.gserviceaccount.com ) in the network project's IAM policy. gcloud projects add-iam-policy-binding NETWORK PROJECT ID \ --role "roles/metastore.serviceAgent" \ --member "serviceAccount:service- SERVICE PROJECT NUMBER @gcp-sa-metastore.iam.gserviceaccount.com" Caution: This IAM policy change indirectly allows Dataproc Metastore users with metastore.services.create permission in the service project to control the addresses and peerings in the network project.

### Dataproc Metastore API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/reference/rest](https://docs.cloud.google.com/dataproc-metastore/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 152
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: v1alpha.projects.locations.services Methods alterLocation POST /v1alpha/{service}:alterLocation Alter metadata resource location. alterTableProperties POST /v1alpha/{service}:alterTableProperties Alter metadata table properties. cancelMigration POST /v1alpha/{service}:cancelMigration Cancels the ongoing Managed Migration process. completeMigration POST /v1alpha/{service}:completeMigration Completes the managed migration process. create POST /v1alpha/{parent}/services Creates a metastore service in a project and location. delete DELETE /v1alpha/{name} Deletes a single service. exportMetadata POST /v1alpha/{service}:exportMetadata Exports metadata from a service. get GET /v1alpha/{name} Gets the details of a single service. getIamPolicy GET /v1alpha/{resource}:getIamPolicy Gets the access control policy for a resource. list GET /v1alpha/{parent}/services Lists services in a project and location. moveTableToDatabase POST /v1alpha/{service}:moveTableToDatabase Move a table to another database. patch PATCH /v1alpha/{service.name} Updates the parameters of a single service. queryMetadata POST /v1alpha/{service}:queryMetadata Query Dataproc Metastore metadata. removeIamPolicy POST /v1alpha/{resource}:removeIamPolicy Removes the attached IAM policies for a resource restore POST /v1alpha/{service}:restore Restores a service from a backup. setIamPolicy POST /v1alpha/{resource}:setIamPolicy Sets the access control policy on the specified resource. startMigration POST /v1alpha/{service}:startMigration Starts the Managed Migration process. testIamPermissions POST /v1alpha/{resource}:testIamPermissions Returns permissions that a caller has on the specified resource.
- REST Resource: v1beta.projects.locations.services Methods alterLocation POST /v1beta/{service}:alterLocation Alter metadata resource location. alterTableProperties POST /v1beta/{service}:alterTableProperties Alter metadata table properties. cancelMigration POST /v1beta/{service}:cancelMigration Cancels the ongoing Managed Migration process. completeMigration POST /v1beta/{service}:completeMigration Completes the managed migration process. create POST /v1beta/{parent}/services Creates a metastore service in a project and location. delete DELETE /v1beta/{name} Deletes a single service. exportMetadata POST /v1beta/{service}:exportMetadata Exports metadata from a service. get GET /v1beta/{name} Gets the details of a single service. getIamPolicy GET /v1beta/{resource}:getIamPolicy Gets the access control policy for a resource. list GET /v1beta/{parent}/services Lists services in a project and location. moveTableToDatabase POST /v1beta/{service}:moveTableToDatabase Move a table to another database. patch PATCH /v1beta/{service.name} Updates the parameters of a single service. queryMetadata POST /v1beta/{service}:queryMetadata Query Dataproc Metastore metadata. removeIamPolicy POST /v1beta/{resource}:removeIamPolicy Removes the attached IAM policies for a resource restore POST /v1beta/{service}:restore Restores a service from a backup. setIamPolicy POST /v1beta/{resource}:setIamPolicy Sets the access control policy on the specified resource. startMigration POST /v1beta/{service}:startMigration Starts the Managed Migration process. testIamPermissions POST /v1beta/{resource}:testIamPermissions Returns permissions that a caller has on the specified resource.
- REST Resource: v1.projects.locations.services Methods alterLocation POST /v1/{service}:alterLocation Alter metadata resource location. alterTableProperties POST /v1/{service}:alterTableProperties Alter metadata table properties. cancelMigration POST /v1/{service}:cancelMigration Cancels the ongoing Managed Migration process. completeMigration POST /v1/{service}:completeMigration Completes the managed migration process. create POST /v1/{parent}/services Creates a metastore service in a project and location. delete DELETE /v1/{name} Deletes a single service. exportMetadata POST /v1/{service}:exportMetadata Exports metadata from a service. get GET /v1/{name} Gets the details of a single service. getIamPolicy GET /v1/{resource}:getIamPolicy Gets the access control policy for a resource. list GET /v1/{parent}/services Lists services in a project and location. moveTableToDatabase POST /v1/{service}:moveTableToDatabase Move a table to another database. patch PATCH /v1/{service.name} Updates the parameters of a single service. queryMetadata POST /v1/{service}:queryMetadata Query Dataproc Metastore metadata. restore POST /v1/{service}:restore Restores a service from a backup. setIamPolicy POST /v1/{resource}:setIamPolicy Sets the access control policy on the specified resource. startMigration POST /v1/{service}:startMigration Starts the Managed Migration process. testIamPermissions POST /v1/{resource}:testIamPermissions Returns permissions that a caller has on the specified resource.
- REST Resource: v1alpha.projects.locations.services.backups Methods create POST /v1alpha/{parent}/backups Creates a new backup in a given project and location. delete DELETE /v1alpha/{name} Deletes a single backup. get GET /v1alpha/{name} Gets details of a single backup. getIamPolicy GET /v1alpha/{resource}:getIamPolicy Gets the access control policy for a resource. list GET /v1alpha/{parent}/backups Lists backups in a service. setIamPolicy POST /v1alpha/{resource}:setIamPolicy Sets the access control policy on the specified resource. testIamPermissions POST /v1alpha/{resource}:testIamPermissions Returns permissions that a caller has on the specified resource.

### Dataproc Metastore API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/reference/rpc](https://docs.cloud.google.com/dataproc-metastore/docs/reference/rpc)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- UpdateService Updates the parameters of a single service. google.cloud.metastore.v1alpha.DataprocMetastoreFederation Methods CreateFederation Creates a metastore federation in a project and location.
- UpdateService Updates the parameters of a single service. google.cloud.metastore.v1beta.DataprocMetastoreFederation Methods CreateFederation Creates a metastore federation in a project and location.
- UpdateService Updates the parameters of a single service. google.cloud.metastore.v1.DataprocMetastoreFederation Methods CreateFederation Creates a metastore federation in a project and location.
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

