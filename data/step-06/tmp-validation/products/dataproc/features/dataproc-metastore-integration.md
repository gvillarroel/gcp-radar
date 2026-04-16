---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.154Z"
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
  - "external"
  - "integration"
  - "metastore"
  - "clusters"
---

# Dataproc Metastore integration

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc clusters can use a Dataproc Metastore service as an external metastore.

## Extended Definition

Dataproc clusters can use a Dataproc Metastore service as an external metastore.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc-metastore/docs/hive-metastore](https://docs.cloud.google.com/dataproc-metastore/docs/hive-metastore)
- [https://docs.cloud.google.com/dataproc-metastore/docs/overview](https://docs.cloud.google.com/dataproc-metastore/docs/overview)
- [https://docs.cloud.google.com/dataproc-metastore/docs/migrate-mysql-metastore](https://docs.cloud.google.com/dataproc-metastore/docs/migrate-mysql-metastore)

## Supporting Pages

### Hive metastore \_|\_ Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/hive-metastore](https://docs.cloud.google.com/dataproc-metastore/docs/hive-metastore)
- Source ID: `site-docs-root-2`
- Final score: 105
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Meaning, the metadata that you store in a Dataproc Metastore service can exist in both internal and external tables.
- When modifying data, a Dataproc Metastore service (Hive) treats internal and external tables differently.
- If the Hive warehouse directory is not in the same project as the Dataproc Metastore, ensure that the Dataproc Metastore service agent has permission to access the Hive warehouse directory.
- Change the Hive warehouse directory To use your own Cloud Storage bucket with Dataproc Metastore, set a Hive Metastore configuration override to point to the new bucket location.

### Dataproc Metastore overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/overview](https://docs.cloud.google.com/dataproc-metastore/docs/overview)
- Source ID: `site-docs-root-2`
- Final score: 100
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Integrations with Google Cloud All integrations listed in this section are supported by Dataproc Metastore 1 and Dataproc Metastore 2, unless otherwise noted.
- This integration lets you keep your table information between jobs or make metadata available to other clusters and other processing engines.
- Import existing metadata stored in an external Hive Metastore metastore into a Dataproc Metastore service.
- Home Documentation Data analytics Dataproc Metastore Guides Send feedback Dataproc Metastore overview Stay organized with collections Save and categorize content based on your preferences.

### "Quickstart: Migrate a self-managed MySQL metastore to Dataproc Metastore\

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/migrate-mysql-metastore](https://docs.cloud.google.com/dataproc-metastore/docs/migrate-mysql-metastore)
- Source ID: `site-docs-root-2`
- Final score: 89
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Migrate a self-managed MySQL metastore to Dataproc Metastore This page shows you how to migrate your external self-managed MySQL metastore to Dataproc Metastore by creating a MySQL dump file and importing the metadata into an existing Dataproc Metastore service.
- Enable the API Required Roles To get the permissions that you need to create a Dataproc Metastore and import a MySQL metastore, ask your administrator to grant you the following IAM roles: To create a service and import metadata: Dataproc Metastore Editor ( roles/metastore.editor ) on the project Dataproc Metastore Admin ( roles/metastore.admin ) on the project.
- Your new service appears in the Service list. gcloud Run the following gcloud metastore services create command to create a service: gcloud metastore services create example-service \ --location= LOCATION Replace LOCATION with the Compute Engine region where you plan to create the service.
- Your service no longer appears in the Service list. gcloud Run the following gcloud metastore services delete command to delete a service: gcloud metastore services delete example-service \ --location= LOCATION Replace LOCATION with the Compute Engine region where you created the service.

