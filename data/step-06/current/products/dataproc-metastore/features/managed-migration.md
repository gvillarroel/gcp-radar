---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:49:01.296Z"
product_name: "Dataproc Metastore"
product_slug: "dataproc-metastore"
feature_name: "Managed migration"
feature_slug: "managed-migration"
latest_feature_date: "2024-04-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc-metastore/docs/about-managed-migration"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/migrate-mysql-metastore"
  - "https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient"
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
Coverage: LOW

## Step 02 Summary

Managed migration automates migration from a self-managed Hive Metastore to a Dataproc Metastore service with minimal downtime.

## Extended Definition

Managed migration automates migration from a self-managed Hive Metastore to a Dataproc Metastore service with minimal downtime.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc-metastore/docs/about-managed-migration](https://docs.cloud.google.com/dataproc-metastore/docs/about-managed-migration)
- [https://docs.cloud.google.com/dataproc-metastore/docs/migrate-mysql-metastore](https://docs.cloud.google.com/dataproc-metastore/docs/migrate-mysql-metastore)
- [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient)

## Supporting Pages

### About managed migration \_|\_ Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/about-managed-migration](https://docs.cloud.google.com/dataproc-metastore/docs/about-managed-migration)
- Source ID: `site-iam-reference`
- Final score: 244
- Re-rank relevance: N/A

Evidence snippets:
- Managed migration is an automated feature that helps you migrate data from a self-managed Hive Metastore to a Dataproc Metastore service, without any sizable downtime (otherwise known as a flag day ).
- Home Documentation Data analytics Dataproc Metastore Guides Send feedback About managed migration Stay organized with collections Save and categorize content based on your preferences.
- When a complete migration process is called, the following occurs: Dataproc Metastore transitions into a read-only mode until the complete migration process finishes.
- Managed migration flow To complete a managed migration, your service runs through two migration processes— start migration and complete migration .

### "Quickstart: Migrate a self-managed MySQL metastore to Dataproc Metastore\

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/migrate-mysql-metastore](https://docs.cloud.google.com/dataproc-metastore/docs/migrate-mysql-metastore)
- Source ID: `site-docs-root`
- Final score: 240
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Migrate a self-managed MySQL metastore to Dataproc Metastore This page shows you how to migrate your external self-managed MySQL metastore to Dataproc Metastore by creating a MySQL dump file and importing the metadata into an existing Dataproc Metastore service.
- Create and attach a Managed Service for Apache Spark cluster After you import your metadata into your Dataproc Metastore example-service service, create and attach a Managed Service for Apache Spark cluster that uses the service as its Hive metastore.
- Prepare for migration You must now prepare the metadata stored in your Hive metastore database for import by making a MySQL dump file and placing it into a Cloud Storage bucket.
- Import metadata into a service Attach a Managed Service for Apache Spark cluster or self-managed cluster Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Class DataprocMetastoreAsyncClient (1.22.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient)
- Source ID: `site-python-reference`
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import metastore v1 async def sample alter metadata resource location(): Create a client client = metastore v1.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import metastore v1 async def sample create metadata import(): Create a client client = metastore v1.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import metastore v1 async def sample move table to database(): Create a client client = metastore v1.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import metastore v1 async def sample update metadata import(): Create a client client = metastore v1.

