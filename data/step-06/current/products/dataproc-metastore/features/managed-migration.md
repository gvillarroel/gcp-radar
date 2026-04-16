---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:00.718Z"
product_name: "Dataproc Metastore"
product_slug: "dataproc-metastore"
feature_name: "Managed migration"
feature_slug: "managed-migration"
latest_feature_date: "2024-04-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc-metastore/docs/about-managed-migration"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/migrate-mysql-metastore"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/reference/rest"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/reference/rpc"
keywords:
  - "managed"
  - "migration"
  - "automates"
  - "from"
  - "self"
  - "hive"
  - "metastore"
  - "to"
---

# Managed migration

Product: Dataproc Metastore
Coverage: MEDIUM

## Step 02 Summary

Managed migration automates migration from a self-managed Hive Metastore to a Dataproc Metastore service with minimal downtime.

## Extended Definition

Managed migration automates migration from a self-managed Hive Metastore to a Dataproc Metastore service with minimal downtime.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc-metastore/docs/about-managed-migration](https://docs.cloud.google.com/dataproc-metastore/docs/about-managed-migration)
- [https://docs.cloud.google.com/dataproc-metastore/docs/migrate-mysql-metastore](https://docs.cloud.google.com/dataproc-metastore/docs/migrate-mysql-metastore)
- [https://docs.cloud.google.com/dataproc-metastore/docs/reference/rest](https://docs.cloud.google.com/dataproc-metastore/docs/reference/rest)
- [https://docs.cloud.google.com/dataproc-metastore/docs/reference/rpc](https://docs.cloud.google.com/dataproc-metastore/docs/reference/rpc)

## Supporting Pages

### About managed migration \_|\_ Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/about-managed-migration](https://docs.cloud.google.com/dataproc-metastore/docs/about-managed-migration)
- Source ID: `site-iam-reference`
- Final score: 306
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Managed migration is an automated feature that helps you migrate data from a self-managed Hive Metastore to a Dataproc Metastore service, without any sizable downtime (otherwise known as a flag day ).
- Home Documentation Data analytics Dataproc Metastore Guides Send feedback About managed migration Stay organized with collections Save and categorize content based on your preferences.
- When a complete migration process is called, the following occurs: Dataproc Metastore transitions into a read-only mode until the complete migration process finishes.
- Managed migration flow To complete a managed migration, your service runs through two migration processes— start migration and complete migration .

### "Quickstart: Migrate a self-managed MySQL metastore to Dataproc Metastore\

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/migrate-mysql-metastore](https://docs.cloud.google.com/dataproc-metastore/docs/migrate-mysql-metastore)
- Source ID: `site-docs-root`
- Final score: 284
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Migrate a self-managed MySQL metastore to Dataproc Metastore This page shows you how to migrate your external self-managed MySQL metastore to Dataproc Metastore by creating a MySQL dump file and importing the metadata into an existing Dataproc Metastore service.
- Create and attach a Managed Service for Apache Spark cluster After you import your metadata into your Dataproc Metastore example-service service, create and attach a Managed Service for Apache Spark cluster that uses the service as its Hive metastore.
- Prepare for migration You must now prepare the metadata stored in your Hive metastore database for import by making a MySQL dump file and placing it into a Cloud Storage bucket.
- Import metadata into a service Attach a Managed Service for Apache Spark cluster or self-managed cluster Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Dataproc Metastore API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/reference/rest](https://docs.cloud.google.com/dataproc-metastore/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 228
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: v1alpha.projects.locations.services Methods alterLocation POST /v1alpha/{service}:alterLocation Alter metadata resource location. alterTableProperties POST /v1alpha/{service}:alterTableProperties Alter metadata table properties. cancelMigration POST /v1alpha/{service}:cancelMigration Cancels the ongoing Managed Migration process. completeMigration POST /v1alpha/{service}:completeMigration Completes the managed migration process. create POST /v1alpha/{parent}/services Creates a metastore service in a project and location. delete DELETE /v1alpha/{name} Deletes a single service. exportMetadata POST /v1alpha/{service}:exportMetadata Exports metadata from a service. get GET /v1alpha/{name} Gets the details of a single service. getIamPolicy GET /v1alpha/{resource}:getIamPolicy Gets the access control policy for a resource. list GET /v1alpha/{parent}/services Lists services in a project and location. moveTableToDatabase POST /v1alpha/{service}:moveTableToDatabase Move a table to another database. patch PATCH /v1alpha/{service.name} Updates the parameters of a single service. queryMetadata POST /v1alpha/{service}:queryMetadata Query Dataproc Metastore metadata. removeIamPolicy POST /v1alpha/{resource}:removeIamPolicy Removes the attached IAM policies for a resource restore POST /v1alpha/{service}:restore Restores a service from a backup. setIamPolicy POST /v1alpha/{resource}:setIamPolicy Sets the access control policy on the specified resource. startMigration POST /v1alpha/{service}:startMigration Starts the Managed Migration process. testIamPermissions POST /v1alpha/{resource}:testIamPermissions Returns permissions that a caller has on the specified resource.
- REST Resource: v1beta.projects.locations.services Methods alterLocation POST /v1beta/{service}:alterLocation Alter metadata resource location. alterTableProperties POST /v1beta/{service}:alterTableProperties Alter metadata table properties. cancelMigration POST /v1beta/{service}:cancelMigration Cancels the ongoing Managed Migration process. completeMigration POST /v1beta/{service}:completeMigration Completes the managed migration process. create POST /v1beta/{parent}/services Creates a metastore service in a project and location. delete DELETE /v1beta/{name} Deletes a single service. exportMetadata POST /v1beta/{service}:exportMetadata Exports metadata from a service. get GET /v1beta/{name} Gets the details of a single service. getIamPolicy GET /v1beta/{resource}:getIamPolicy Gets the access control policy for a resource. list GET /v1beta/{parent}/services Lists services in a project and location. moveTableToDatabase POST /v1beta/{service}:moveTableToDatabase Move a table to another database. patch PATCH /v1beta/{service.name} Updates the parameters of a single service. queryMetadata POST /v1beta/{service}:queryMetadata Query Dataproc Metastore metadata. removeIamPolicy POST /v1beta/{resource}:removeIamPolicy Removes the attached IAM policies for a resource restore POST /v1beta/{service}:restore Restores a service from a backup. setIamPolicy POST /v1beta/{resource}:setIamPolicy Sets the access control policy on the specified resource. startMigration POST /v1beta/{service}:startMigration Starts the Managed Migration process. testIamPermissions POST /v1beta/{resource}:testIamPermissions Returns permissions that a caller has on the specified resource.
- REST Resource: v1.projects.locations.services Methods alterLocation POST /v1/{service}:alterLocation Alter metadata resource location. alterTableProperties POST /v1/{service}:alterTableProperties Alter metadata table properties. cancelMigration POST /v1/{service}:cancelMigration Cancels the ongoing Managed Migration process. completeMigration POST /v1/{service}:completeMigration Completes the managed migration process. create POST /v1/{parent}/services Creates a metastore service in a project and location. delete DELETE /v1/{name} Deletes a single service. exportMetadata POST /v1/{service}:exportMetadata Exports metadata from a service. get GET /v1/{name} Gets the details of a single service. getIamPolicy GET /v1/{resource}:getIamPolicy Gets the access control policy for a resource. list GET /v1/{parent}/services Lists services in a project and location. moveTableToDatabase POST /v1/{service}:moveTableToDatabase Move a table to another database. patch PATCH /v1/{service.name} Updates the parameters of a single service. queryMetadata POST /v1/{service}:queryMetadata Query Dataproc Metastore metadata. restore POST /v1/{service}:restore Restores a service from a backup. setIamPolicy POST /v1/{resource}:setIamPolicy Sets the access control policy on the specified resource. startMigration POST /v1/{service}:startMigration Starts the Managed Migration process. testIamPermissions POST /v1/{resource}:testIamPermissions Returns permissions that a caller has on the specified resource.
- REST Resource: v1beta.projects.locations REST Resource: v1beta.projects.locations.federations REST Resource: v1beta.projects.locations.operations REST Resource: v1beta.projects.locations.services REST Resource: v1beta.projects.locations.services.backups REST Resource: v1beta.projects.locations.services.databases REST Resource: v1beta.projects.locations.services.databases.tables REST Resource: v1beta.projects.locations.services.metadataImports REST Resource: v1beta.projects.locations.services.migrationExecutions REST Resource: v1alpha.projects.locations REST Resource: v1alpha.projects.locations.federations REST Resource: v1alpha.projects.locations.operations REST Resource: v1alpha.projects.locations.services REST Resource: v1alpha.projects.locations.services.backups REST Resource: v1alpha.projects.locations.services.databases REST Resource: v1alpha.projects.locations.services.databases.tables REST Resource: v1alpha.projects.locations.services.metadataImports REST Resource: v1alpha.projects.locations.services.migrationExecutions REST Resource: v1.projects.locations REST Resource: v1.projects.locations.federations REST Resource: v1.projects.locations.operations REST Resource: v1.projects.locations.services REST Resource: v1.projects.locations.services.backups REST Resource: v1.projects.locations.services.databases REST Resource: v1.projects.locations.services.databases.tables REST Resource: v1.projects.locations.services.metadataImports REST Resource: v1.projects.locations.services.migrationExecutions Service: metastore.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .

### Dataproc Metastore API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/reference/rpc](https://docs.cloud.google.com/dataproc-metastore/docs/reference/rpc)
- Source ID: `site-docs-root`
- Final score: 228
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Service: metastore.googleapis.com The Service name metastore.googleapis.com is needed to create RPC client stubs. google.cloud.location.Locations Methods GetLocation Gets information about a location.
- UpdateService Updates the parameters of a single service. google.cloud.metastore.v1alpha.DataprocMetastoreFederation Methods CreateFederation Creates a metastore federation in a project and location.
- UpdateService Updates the parameters of a single service. google.cloud.metastore.v1beta.DataprocMetastoreFederation Methods CreateFederation Creates a metastore federation in a project and location.
- ListLocations Lists information about the supported locations for this service. google.cloud.metastore.v1.DataprocMetastore Methods AlterMetadataResourceLocation Alter metadata resource location.

