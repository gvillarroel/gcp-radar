---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:13:48.465Z"
product_name: "Dataplex"
product_slug: "dataplex"
feature_name: "Data lineage list view"
feature_slug: "data-lineage-list-view"
latest_feature_date: "2024-08-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataplex/docs/use-lineage"
  - "https://docs.cloud.google.com/dataplex/docs/catalog-overview"
  - "https://docs.cloud.google.com/dataplex/docs/track-lineage-quickstart"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1"
keywords:
  - "lineage"
  - "list"
  - "view"
  - "dataplex"
  - "provides"
  - "table"
  - "based"
  - "that"
---

# Data lineage list view

Product: Dataplex
Coverage: MEDIUM

## Step 02 Summary

Dataplex provides a table-based lineage list view that shows full lineage information in one place.

## Extended Definition

Dataplex provides a table-based lineage list view that shows full lineage information in one place.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataplex/docs/use-lineage](https://docs.cloud.google.com/dataplex/docs/use-lineage)
- [https://docs.cloud.google.com/dataplex/docs/catalog-overview](https://docs.cloud.google.com/dataplex/docs/catalog-overview)
- [https://docs.cloud.google.com/dataplex/docs/track-lineage-quickstart](https://docs.cloud.google.com/dataplex/docs/track-lineage-quickstart)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1)

## Supporting Pages

### "Use data lineage with Google Cloud systems \_|\_ Knowledge Catalog \_|\_\

- URL: [https://docs.cloud.google.com/dataplex/docs/use-lineage](https://docs.cloud.google.com/dataplex/docs/use-lineage)
- Source ID: `site-docs-root`
- Final score: 230
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To get the permissions that you need to view data lineage, ask your administrator to grant you the following IAM roles: Data Lineage Viewer ( roles/datalineage.viewer ) on the project where lineage is recorded, and the project where lineage is viewed View BigQuery table details: BigQuery Data Viewer ( roles/bigquery.dataViewer ) on the table's storage project View BigQuery job details: BigQuery Resource Viewer ( roles/bigquery.resourceViewer ) on the job's compute project View details for other cataloged assets: Dataplex Catalog Viewer ( roles/dataplex.catalogViewer ) on the project where catalog entries are stored For more information about granting roles, see Manage access to projects, folders, and organizations .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to view data lineage: View BigQuery table details: bigquery.tables.get - the table's storage project View BigQuery job details: bigquery.jobs.get - the job's compute project You might also be able to get these permissions with custom roles or other predefined roles .
- The List view offers simplified and detailed tabular representations of lineage for both table-level and column-level lineage, synchronized with the Graph view.
- The List view offers simplified and detailed tabular representations of lineage for both table-level and column-level lineage, synchronized with the Graph view.

### About metadata management in Knowledge Catalog \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataplex/docs/catalog-overview](https://docs.cloud.google.com/dataplex/docs/catalog-overview)
- Source ID: `site-docs-root`
- Final score: 226
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported sources Automatic discovery of Cloud Storage data Metadata from the following Google Cloud sources is automatically ingested into Knowledge Catalog: BigQuery sharing (formerly Analytics Hub) exchanges and listings BigQuery datasets, tables, views, models, routines, connections, and linked datasets Bigtable instances, clusters, and tables (including column family details) Dataform repositories and code assets Dataproc Metastore services, databases, and tables Looker (Google Cloud core) instances, dashboards, dashboard elements, Looks, LookML projects, models, Explores, and views ( Preview ) Pub/Sub topics Spanner instances, databases, tables, and views Vertex AI models, datasets, feature groups, feature views, and online store instances If Knowledge Catalog integration is enabled, then metadata from the following Google Cloud sources is automatically ingested into Knowledge Catalog: AlloyDB for PostgreSQL clusters, instances, databases, schemas, tables, views—see Enable the AlloyDB for PostgreSQL integration ( Preview ) Cloud SQL instances, databases, schemas, tables, views—see Enable the Cloud SQL integration To import metadata from a third-party source into Knowledge Catalog, you can use a managed connectivity pipeline.
- Data Catalog API method Dataplex API method projects.locations.entryGroups.entries.tags.create (REST) CreateTag (RPC) projects.locations.entryGroups.entries.patch (REST) UpdateEntry (RPC) projects.locations.entryGroups.entries.tags.list (REST) ListTags (RPC) projects.locations.entryGroups.entries.get (REST) GetEntry (RPC) Note: To limit the response to only the required aspects, use the views , aspect types , and paths parameters. projects.locations.entryGroups.entries.tags.patch (REST) UpdateTag (RPC) projects.locations.entryGroups.entries.patch (REST) UpdateEntry (RPC) projects.locations.entryGroups.entries.tags.delete (REST) DeleteTag (RPC) projects.locations.entryGroups.entries.patch (REST) UpdateEntry (RPC) Policy tags and taxonomies These APIs are not changing and therefore don't need to be migrated.
- Search is performed over the following: All Google Cloud sources described in Entries and entry groups Custom entries that are created in Data Catalog Tags that are created in Data Catalog Data lineage Data lineage retrieves entry details for asset nodes by using the Dataplex API.
- Note that, to search for entries, you need at least one of the following IAM roles on the project that is used for search: Dataplex Catalog Admin, Dataplex Catalog Editor, or Dataplex Catalog Viewer.

### "Track data lineage for a BigQuery table \_|\_ Knowledge Catalog \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataplex/docs/track-lineage-quickstart](https://docs.cloud.google.com/dataplex/docs/track-lineage-quickstart)
- Source ID: `site-docs-root`
- Final score: 224
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Required roles To get the permissions that you need to view lineage visualization graphs, ask your administrator to grant you the following IAM roles: Dataplex Catalog Viewer ( roles/dataplex.catalogViewer ) on the Knowledge Catalog (formerly Dataplex Universal Catalog) resource project Data Lineage Viewer ( roles/datalineage.viewer ) on the project where you use BigQuery BigQuery Data Viewer ( roles/bigquery.dataViewer ) on the project where you use BigQuery For more information about granting roles, see Manage access to projects, folders, and organizations .
- CREATE TABLE PROJECT ID . data lineage demo . total green trips 22 21 AS SELECT vendor id , COUNT ( ) AS number of trips FROM ( SELECT vendor id FROM PROJECT ID . data lineage demo . nyc green trips 2022 UNION ALL SELECT vendor id FROM PROJECT ID . data lineage demo . nyc green trips 2021 ) GROUP BY vendor id Click play circle Run .
- CREATE TABLE PROJECT ID . data lineage demo . nyc green trips 2021 COPY bigquery - public - data . new york taxi trips . tlc green trips 2021 Click play circle Run .
- CREATE TABLE PROJECT ID . data lineage demo . nyc green trips 2022 COPY bigquery - public - data . new york taxi trips . tlc green trips 2022 Click play circle Run .

### "Package com.google.cloud.dataplex.v1 (1.86.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1)
- Source ID: `site-java-reference`
- Final score: 219
- Re-rank relevance: N/A

Evidence snippets:
- Cmek Service Client Service Description: Dataplex Universal Catalog Customer Managed Encryption Keys (CMEK) Service This class provides the ability to make remote calls to the backing service through method calls that map to API methods.
- Data Quality Dimension Result DataQualityDimensionResult provides a more detailed, per-dimension view of the results. com. google. cloud. dataplex. v1.
- Data Quality Column Result DataQualityColumnResult provides a more detailed, per-column view of the results. com. google. cloud. dataplex. v1.
- Data Quality Rule Result DataQualityRuleResult provides a more detailed, per-rule view of the results. com. google. cloud. dataplex. v1.

