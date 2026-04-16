---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.627Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Dataproc Metastore integration"
feature_slug: "dataproc-metastore-integration"
latest_feature_date: "2020-08-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc-metastore/docs/hive-metastore"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/overview"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/migrate-mysql-metastore"
keywords:
  - "dataproc"
  - "metastore"
  - "integration"
  - "clusters"
  - "can"
  - "use"
  - "external"
---

# Dataproc Metastore integration

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc clusters can use a Dataproc Metastore service as an external metastore.

## Extended Definition

Dataproc clusters can use a Dataproc Metastore service as an external metastore.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc-metastore/docs/hive-metastore](https://docs.cloud.google.com/dataproc-metastore/docs/hive-metastore)
- [https://docs.cloud.google.com/dataproc-metastore/docs/overview](https://docs.cloud.google.com/dataproc-metastore/docs/overview)
- [https://docs.cloud.google.com/dataproc-metastore/docs/migrate-mysql-metastore](https://docs.cloud.google.com/dataproc-metastore/docs/migrate-mysql-metastore)

## Supporting Pages

### Hive metastore \_|\_ Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/hive-metastore](https://docs.cloud.google.com/dataproc-metastore/docs/hive-metastore)
- Source ID: `site-docs-root-2`
- Final score: 117
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Meaning, the metadata that you store in a Dataproc Metastore service can exist in both internal and external tables.
- When modifying data, a Dataproc Metastore service (Hive) treats internal and external tables differently.
- If the Hive warehouse directory is not in the same project as the Dataproc Metastore, ensure that the Dataproc Metastore service agent has permission to access the Hive warehouse directory.
- Change the Hive warehouse directory To use your own Cloud Storage bucket with Dataproc Metastore, set a Hive Metastore configuration override to point to the new bucket location.

### Dataproc Metastore overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/overview](https://docs.cloud.google.com/dataproc-metastore/docs/overview)
- Source ID: `site-docs-root-2`
- Final score: 112
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Integrations with Google Cloud All integrations listed in this section are supported by Dataproc Metastore 1 and Dataproc Metastore 2, unless otherwise noted.
- Import existing metadata stored in an external Hive Metastore metastore into a Dataproc Metastore service.
- Home Documentation Data analytics Dataproc Metastore Guides Send feedback Dataproc Metastore overview Stay organized with collections Save and categorize content based on your preferences.
- Dataproc Metastore versions When you create a Dataproc Metastore service, you can choose to use a Dataproc Metastore 2 service or a Dataproc Metastore 1 service .

### "Quickstart: Migrate a self-managed MySQL metastore to Dataproc Metastore\

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/migrate-mysql-metastore](https://docs.cloud.google.com/dataproc-metastore/docs/migrate-mysql-metastore)
- Source ID: `site-docs-root-2`
- Final score: 101
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Migrate a self-managed MySQL metastore to Dataproc Metastore This page shows you how to migrate your external self-managed MySQL metastore to Dataproc Metastore by creating a MySQL dump file and importing the metadata into an existing Dataproc Metastore service.
- Enable the API Required Roles To get the permissions that you need to create a Dataproc Metastore and import a MySQL metastore, ask your administrator to grant you the following IAM roles: To create a service and import metadata: Dataproc Metastore Editor ( roles/metastore.editor ) on the project Dataproc Metastore Admin ( roles/metastore.admin ) on the project.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create a Dataproc Metastore and import a MySQL metastore: To create a service: metastore.services.create on the project.
- Create and attach a Managed Service for Apache Spark cluster After you import your metadata into your Dataproc Metastore example-service service, create and attach a Managed Service for Apache Spark cluster that uses the service as its Hive metastore.

