---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:13:48.454Z"
product_name: "Dataplex"
product_slug: "dataplex"
feature_name: "Data lineage ingestion from BigQuery sources"
feature_slug: "data-lineage-ingestion-from-bigquery-sources"
latest_feature_date: "2026-03-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataplex/docs/about-data-lineage"
  - "https://docs.cloud.google.com/dataplex/docs/use-lineage"
  - "https://docs.cloud.google.com/dataplex/docs/catalog-overview"
  - "https://docs.cloud.google.com/dataplex/docs/ingest-custom-sources"
keywords:
  - "lineage"
  - "ingestion"
  - "from"
  - "sources"
  - "dataplex"
  - "can"
  - "ingest"
  - "information"
---

# Data lineage ingestion from BigQuery sources

Product: Dataplex
Coverage: MEDIUM

## Step 02 Summary

Dataplex can ingest data lineage information from BigQuery sources.

## Extended Definition

Dataplex can ingest data lineage information from BigQuery sources.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataplex/docs/about-data-lineage](https://docs.cloud.google.com/dataplex/docs/about-data-lineage)
- [https://docs.cloud.google.com/dataplex/docs/use-lineage](https://docs.cloud.google.com/dataplex/docs/use-lineage)
- [https://docs.cloud.google.com/dataplex/docs/catalog-overview](https://docs.cloud.google.com/dataplex/docs/catalog-overview)
- [https://docs.cloud.google.com/dataplex/docs/ingest-custom-sources](https://docs.cloud.google.com/dataplex/docs/ingest-custom-sources)

## Supporting Pages

### About data lineage \_|\_ Knowledge Catalog \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataplex/docs/about-data-lineage](https://docs.cloud.google.com/dataplex/docs/about-data-lineage)
- Source ID: `site-docs-root`
- Final score: 254
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Data lineage workflow The data lineage workflow includes the following steps: Data sources and ingestion : lineage information from your data sources initiates the entire process.
- Lineage sources You can populate lineage information in Knowledge Catalog in the following ways: Automatically from integrated Google Cloud services Manually, by using the Data Lineage API for custom sources By importing events from OpenLineage BigQuery When you enable data lineage in your BigQuery project, Knowledge Catalog automatically records lineage information for the following: Note: Data lineage is automatically recorded only for BigQuery tables and views.
- OpenLineage If you already use OpenLineage to collect lineage information from other data sources, you can import OpenLineage events into Knowledge Catalog and view these events in the Google Cloud console.
- Other services Data lineage supports integration with the following Google Cloud services: Cloud Composer Cloud Data Fusion Dataflow Managed Service for Apache Spark for Apache Spark Managed Service for Apache Spark for Apache Hive Managed Service for Apache Spark Managed Service for Apache Spark Looker (Google Cloud core) ( Preview ) Vertex AI Vertex AI Feature Store Data lineage for custom data sources You can use the Data Lineage API to manually record lineage information for any data source that integrated systems don't support.

### "Use data lineage with Google Cloud systems \_|\_ Knowledge Catalog \_|\_\

- URL: [https://docs.cloud.google.com/dataplex/docs/use-lineage](https://docs.cloud.google.com/dataplex/docs/use-lineage)
- Source ID: `site-docs-root`
- Final score: 250
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Get current configuration . curl -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ -H "X-Goog-User-Project: CLIENT PROJECT ID " \ -X PATCH \ "https://datalineage.googleapis.com/v1/projects/ PROJECT ID /locations/global/config" \ --data-binary @- { "ingestion": { "rules": [{ "integrationSelector": { "integration": "DATAPROC" }, "lineageEnablement": { "enabled": false } }] }, "etag": " ETAG " } EOF Replace the following: CLIENT PROJECT ID : The ID of your client project used for billing or quotas.
- For more information, see Get current configuration . curl -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ -H "X-Goog-User-Project: CLIENT PROJECT ID " \ -X PATCH \ "https://datalineage.googleapis.com/v1/projects/ PROJECT ID /locations/global/config" \ --data-binary @- { "ingestion": { "rules": [{ "integrationSelector": { "integration": "DATAPROC" }, "lineageEnablement": { "enabled": true } }] }, "etag": " ETAG " } EOF Replace the following: CLIENT PROJECT ID : The ID of your client project used for billing or quotas.
- For more information about controlling lineage ingestion including how the configuration is applied hierarchically, see Control lineage ingestion .
- You can then selectively enable or disable lineage ingestion for specific integrations at the project, folder, or organization level.

### About metadata management in Knowledge Catalog \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataplex/docs/catalog-overview](https://docs.cloud.google.com/dataplex/docs/catalog-overview)
- Source ID: `site-docs-root`
- Final score: 226
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported sources Automatic discovery of Cloud Storage data Metadata from the following Google Cloud sources is automatically ingested into Knowledge Catalog: BigQuery sharing (formerly Analytics Hub) exchanges and listings BigQuery datasets, tables, views, models, routines, connections, and linked datasets Bigtable instances, clusters, and tables (including column family details) Dataform repositories and code assets Dataproc Metastore services, databases, and tables Looker (Google Cloud core) instances, dashboards, dashboard elements, Looks, LookML projects, models, Explores, and views ( Preview ) Pub/Sub topics Spanner instances, databases, tables, and views Vertex AI models, datasets, feature groups, feature views, and online store instances If Knowledge Catalog integration is enabled, then metadata from the following Google Cloud sources is automatically ingested into Knowledge Catalog: AlloyDB for PostgreSQL clusters, instances, databases, schemas, tables, views—see Enable the AlloyDB for PostgreSQL integration ( Preview ) Cloud SQL instances, databases, schemas, tables, views—see Enable the Cloud SQL integration To import metadata from a third-party source into Knowledge Catalog, you can use a managed connectivity pipeline.
- Search is performed over the following: All Google Cloud sources described in Entries and entry groups Custom entries that are created in Data Catalog Tags that are created in Data Catalog Data lineage Data lineage retrieves entry details for asset nodes by using the Dataplex API.
- You can enforce minimal metadata standards by defining the required metadata content for custom entries User-configurable metamodel for custom entries, which helps to make custom ingestion more robust and improves custom metadata consistency and comprehensiveness.
- Custom sources ingestion Ingestion into custom entries with governed structure, defined by entry types.

### "Manage entries and ingest custom sources \_|\_ Knowledge Catalog \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataplex/docs/ingest-custom-sources](https://docs.cloud.google.com/dataplex/docs/ingest-custom-sources)
- Source ID: `site-docs-root`
- Final score: 222
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Required roles To get the permissions that you need to create and manage entries, ask your administrator to grant you the following IAM roles on the resource: Full set of permissions on entries, entry groups, and entry types: Dataplex Catalog Admin ( roles/dataplex.catalogAdmin ) Create and manage metadata resources in Knowledge Catalog, including entries, entry groups, and entry types: Dataplex Catalog Editor ( roles/dataplex.catalogEditor ) Full access to entry-related operations: Dataplex Entry and EntryLink Owner ( roles/dataplex.entryOwner ) View entries, entry groups, and entry types, and IAM policies associated with them: Dataplex Catalog Viewer ( roles/dataplex.catalogViewer ) Use aspect types to create aspects of those types, when creating custom entries: Dataplex Aspect Type User ( roles/dataplex.aspectTypeUser ) Create and manage entry groups: Dataplex Entry Group Owner ( roles/dataplex.entryGroupOwner ) Create and manage entry types: Dataplex Entry Type Owner ( roles/dataplex.entryTypeOwner ) Use entry types to create and modify entries of those types: Dataplex Entry Type User ( roles/dataplex.entryTypeUser ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- The Show from all projects toggle is on by default, and the list includes Knowledge Catalog resources from your selected organization and Data Catalog resources from all the organizations that you can access.
- This document explains how to bring information about your unique, custom data sources into Knowledge Catalog (formerly Dataplex Universal Catalog).
- For more information, see Set up authentication for a local development environment . using Google.Api.Gax ; using Google.Api.Gax.ResourceNames ; using Google.Cloud.Dataplex.V1 ; using System ; public sealed partial class GeneratedCatalogServiceClientSnippets { /// <summary>Snippet for ListEntryGroups</summary> /// <remarks> /// This snippet has been automatically generated and should be regarded as a code template only. /// It will require modifications to work: /// - It may require correct/in-range values for request initialization. /// - It may require specifying regional endpoints when creating the service client as shown in /// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint. /// </remarks> public void ListEntryGroupsRequestObject () { // Create client CatalogServiceClient catalogServiceClient = CatalogServiceClient .

