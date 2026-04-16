---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:13:48.463Z"
product_name: "Dataplex"
product_slug: "dataplex"
feature_name: "Data lineage path visualization"
feature_slug: "data-lineage-path-visualization"
latest_feature_date: "2025-01-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataplex/docs/use-lineage"
  - "https://docs.cloud.google.com/dataplex/docs/track-lineage-quickstart"
  - "https://docs.cloud.google.com/dataplex/docs/catalog-overview"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1"
keywords:
  - "lineage"
  - "path"
  - "visualization"
  - "dataplex"
  - "can"
  - "visualize"
  - "paths"
  - "between"
---

# Data lineage path visualization

Product: Dataplex
Coverage: MEDIUM

## Step 02 Summary

Dataplex can visualize lineage paths between two selected resources.

## Extended Definition

Dataplex can visualize lineage paths between two selected resources.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataplex/docs/use-lineage](https://docs.cloud.google.com/dataplex/docs/use-lineage)
- [https://docs.cloud.google.com/dataplex/docs/track-lineage-quickstart](https://docs.cloud.google.com/dataplex/docs/track-lineage-quickstart)
- [https://docs.cloud.google.com/dataplex/docs/catalog-overview](https://docs.cloud.google.com/dataplex/docs/catalog-overview)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1)

## Supporting Pages

### "Use data lineage with Google Cloud systems \_|\_ Knowledge Catalog \_|\_\

- URL: [https://docs.cloud.google.com/dataplex/docs/use-lineage](https://docs.cloud.google.com/dataplex/docs/use-lineage)
- Source ID: `site-docs-root`
- Final score: 226
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the focused Graph view, select a node, and then in the node's details panel, click Visualize Path to visualize the lineage path from the selected node back to the root entry (only in focused view).
- In the focused Graph view, select a node, and then in the node's details panel, click Visualize Path to visualize the lineage path from the selected node back to the root entry (only in focused view).
- In the focused Graph view, select a node, and then in the node's details panel, click Visualize Path to visualize the lineage path from the selected node back to the root entry (only in focused view).
- In the focused Graph view, select a node, and then in the node's details panel, click Visualize Path to visualize the lineage path from the selected node back to the root entry (only in focused view).

### "Track data lineage for a BigQuery table \_|\_ Knowledge Catalog \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataplex/docs/track-lineage-quickstart](https://docs.cloud.google.com/dataplex/docs/track-lineage-quickstart)
- Source ID: `site-docs-root`
- Final score: 145
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Required roles To get the permissions that you need to view lineage visualization graphs, ask your administrator to grant you the following IAM roles: Dataplex Catalog Viewer ( roles/dataplex.catalogViewer ) on the Knowledge Catalog (formerly Dataplex Universal Catalog) resource project Data Lineage Viewer ( roles/datalineage.viewer ) on the project where you use BigQuery BigQuery Data Viewer ( roles/bigquery.dataViewer ) on the project where you use BigQuery For more information about granting roles, see Manage access to projects, folders, and organizations .
- View a lineage visualization graph for all three operations.
- Enable the Dataplex, BigQuery, and Data Lineage APIs.
- Enable the Dataplex, BigQuery, and Data Lineage APIs.

### About metadata management in Knowledge Catalog \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataplex/docs/catalog-overview](https://docs.cloud.google.com/dataplex/docs/catalog-overview)
- Source ID: `site-docs-root`
- Final score: 145
- Re-rank relevance: N/A

Evidence snippets:
- Data Catalog API method Dataplex API method projects.locations.entryGroups.entries.tags.create (REST) CreateTag (RPC) projects.locations.entryGroups.entries.patch (REST) UpdateEntry (RPC) projects.locations.entryGroups.entries.tags.list (REST) ListTags (RPC) projects.locations.entryGroups.entries.get (REST) GetEntry (RPC) Note: To limit the response to only the required aspects, use the views , aspect types , and paths parameters. projects.locations.entryGroups.entries.tags.patch (REST) UpdateTag (RPC) projects.locations.entryGroups.entries.patch (REST) UpdateEntry (RPC) projects.locations.entryGroups.entries.tags.delete (REST) DeleteTag (RPC) projects.locations.entryGroups.entries.patch (REST) UpdateEntry (RPC) Policy tags and taxonomies These APIs are not changing and therefore don't need to be migrated.
- Data Catalog API method Dataplex API method projects.locations.entryGroups.entries.create (REST) CreateEntry (RPC) projects.locations.entryGroups.entries.create (REST) CreateEntry (RPC) projects.locations.entryGroups.entries.get (REST) GetEntry (RPC) projects.locations.entryGroups.entries.get (REST) GetEntry (RPC) projects.locations.entryGroups.entries.patch (REST) UpdateEntry (RPC) projects.locations.entryGroups.entries.patch (REST) UpdateEntry (RPC) Note: You can also use the projects.locations.modifyEntry (REST) and ModifyEntry (RPC) methods to update system entries using source-system permissions instead of Knowledge Catalog permissions. projects.locations.entryGroups.entries.delete (REST) DeleteEntry (RPC) projects.locations.entryGroups.entries.delete (REST) DeleteEntry (RPC) projects.locations.entryGroups.entries.list (REST) ListEntries (RPC) projects.locations.entryGroups.entries.list (REST) ListEntries (RPC) entries.lookup (REST) LookupEntry (RPC) projects.locations.lookupEntry (REST) LookupEntry (RPC) Note: To use the projects.locations.lookupEntry (REST) and LookupEntry (RPC) methods, you must provide the Knowledge Catalog entry name.
- Data Catalog API method Dataplex API method projects.locations.tagTemplates.fields.create (REST) CreateTagTemplateField (RPC) projects.locations.aspectTypes.patch (REST) UpdateAspectType (RPC) projects.locations.tagTemplates.fields.patch (REST) UpdateTagTemplateField (RPC) projects.locations.aspectTypes.patch (REST) UpdateAspectType (RPC) projects.locations.tagTemplates.fields.rename (REST) RenameTagTemplateField (RPC) projects.locations.aspectTypes.patch (REST) UpdateAspectType (RPC) projects.locations.tagTemplates.fields.delete (REST) DeleteTagTemplateField (RPC) projects.locations.aspectTypes.patch (REST) UpdateAspectType (RPC) Tag template field enum values Similar to tag template fields, you can edit enum values in the Dataplex API by modifying the metadata template field in the corresponding aspect type.
- Search is performed over the following: All Google Cloud sources described in Entries and entry groups Custom entries that are created in Data Catalog Tags that are created in Data Catalog Data lineage Data lineage retrieves entry details for asset nodes by using the Dataplex API.

### "Package com.google.cloud.dataplex.v1 (1.86.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1)
- Source ID: `site-java-reference`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Partition Style The structure of paths within the entity, which represent partitions. com. google. cloud. dataplex. v1.
- Multiple DataScan log events may exist, each with different publishing information depending on the type of publishing triggered. com. google. cloud. dataplex. v1.
- Multiple DataScan log events may exist, each with different publishing information depending on the type of publishing triggered. com. google. cloud. dataplex. v1.
- A GlossaryTerm holds a rich text description that can be attached to Entries or specific columns to enrich them. com. google. cloud. dataplex. v1.

