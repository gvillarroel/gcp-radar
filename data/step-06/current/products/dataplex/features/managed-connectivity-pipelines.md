---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T06:18:42.599Z"
product_name: "Dataplex"
product_slug: "dataplex"
feature_name: "Managed connectivity pipelines"
feature_slug: "managed-connectivity-pipelines"
latest_feature_date: "2024-09-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataplex/docs/import-using-workflows-custom-source"
  - "https://docs.cloud.google.com/dataplex/docs/develop-custom-connector"
  - "https://docs.cloud.google.com/dataplex/docs/import-metadata"
keywords:
  - "managed"
  - "connectivity"
  - "pipelines"
  - "import"
  - "metadata"
  - "from"
  - "third"
  - "party"
---

# Managed connectivity pipelines

Product: Dataplex
Coverage: LOW

## Step 02 Summary

Managed connectivity pipelines import metadata from third-party sources into Dataplex Catalog using custom connectors and Workflows orchestration.

## Extended Definition

Managed connectivity pipelines import metadata from third-party sources into Dataplex Catalog using custom connectors and Workflows orchestration.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataplex/docs/import-using-workflows-custom-source](https://docs.cloud.google.com/dataplex/docs/import-using-workflows-custom-source)
- [https://docs.cloud.google.com/dataplex/docs/develop-custom-connector](https://docs.cloud.google.com/dataplex/docs/develop-custom-connector)
- [https://docs.cloud.google.com/dataplex/docs/import-metadata](https://docs.cloud.google.com/dataplex/docs/import-metadata)

## Supporting Pages

### "Import metadata from a custom source using Workflows \_|\_ Knowledge Catalog\

- URL: [https://docs.cloud.google.com/dataplex/docs/import-using-workflows-custom-source](https://docs.cloud.google.com/dataplex/docs/import-using-workflows-custom-source)
- Source ID: `site-docs-root-2`
- Final score: 182
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This document describes how to import metadata from third-party sources into Knowledge Catalog (formerly Dataplex Universal Catalog) by setting up and running a managed connectivity pipeline in Workflows.
- If you want to schedule the pipeline, grant the service account the following role: gcloud projects add-iam-policy-binding PROJECT ID \ --member=" SERVICE ACCOUNT ID " \ --role=roles/workflows.invoker Import metadata To import metadata, create and then execute a workflow that runs the managed connectivity pipeline.
- Build a custom connector that extracts metadata from your third-party source.
- Home Documentation Data analytics Knowledge Catalog Guides Send feedback Import metadata from a custom source using Workflows Stay organized with collections Save and categorize content based on your preferences.

### "Develop a custom connector for metadata import \_|\_ Knowledge Catalog \_\

- URL: [https://docs.cloud.google.com/dataplex/docs/develop-custom-connector](https://docs.cloud.google.com/dataplex/docs/develop-custom-connector)
- Source ID: `site-docs-root-2`
- Final score: 166
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- How connectors work A connector extracts metadata from a third-party data source, transforms the metadata to Knowledge Catalog ImportItem format, and generates metadata import files that can be imported by Knowledge Catalog.
- Optional: To improve the security, performance, and functionality of your managed connectivity pipeline, consider doing the following things: Use Secret Manager to store the credentials for your third-party data source.
- This document provides a reference template to build a custom connector for extracting metadata from third-party sources, such as MySQL, SQL Server, and Oracle.
- The managed connectivity pipeline runs the connector and performs other tasks in the import workflow, such as running a metadata import job and capturing logs.

### "Import metadata using a custom pipeline \_|\_ Knowledge Catalog \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataplex/docs/import-metadata](https://docs.cloud.google.com/dataplex/docs/import-metadata)
- Source ID: `site-docs-root-2`
- Final score: 142
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This document describes how to import metadata from a third-party system into Knowledge Catalog (formerly Dataplex Universal Catalog) by using the metadata import API methods and your own pipeline.
- With a managed connectivity pipeline, you bring your own connector that extracts metadata and generates output in a format that can be used as input by the metadata import API methods (the metadata import file).
- If you instead want to use a Google Cloud-managed orchestration pipeline to extract and import metadata, we suggest using a managed connectivity pipeline .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataplex v1 def sample create metadata job (): Create a client client = dataplex v1 .

