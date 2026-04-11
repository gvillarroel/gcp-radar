---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T06:18:42.598Z"
product_name: "Dataplex"
product_slug: "dataplex"
feature_name: "Data lineage path visualization"
feature_slug: "data-lineage-path-visualization"
latest_feature_date: "2025-01-20"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataplex/docs/use-lineage"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1"
  - "https://docs.cloud.google.com/dataplex/docs/catalog-overview"
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
Coverage: LOW

## Step 02 Summary

Dataplex can visualize lineage paths between two selected resources.

## Extended Definition

Dataplex can visualize lineage paths between two selected resources.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataplex/docs/use-lineage](https://docs.cloud.google.com/dataplex/docs/use-lineage)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1)
- [https://docs.cloud.google.com/dataplex/docs/catalog-overview](https://docs.cloud.google.com/dataplex/docs/catalog-overview)

## Supporting Pages

### "Use data lineage with Google Cloud systems \_|\_ Knowledge Catalog \_|\_\

- URL: [https://docs.cloud.google.com/dataplex/docs/use-lineage](https://docs.cloud.google.com/dataplex/docs/use-lineage)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In the focused Graph view, select a node, and then in the node's details panel, click Visualize Path to visualize the lineage path from the selected node back to the root entry (only in focused view).
- In the focused Graph view, select a node, and then in the node's details panel, click Visualize Path to visualize the lineage path from the selected node back to the root entry (only in focused view).
- In the focused Graph view, select a node, and then in the node's details panel, click Visualize Path to visualize the lineage path from the selected node back to the root entry (only in focused view).
- In the focused Graph view, select a node, and then in the node's details panel, click Visualize Path to visualize the lineage path from the selected node back to the root entry (only in focused view).

### "Package com.google.cloud.dataplex.v1 (1.86.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1)
- Source ID: `site-java-reference`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- Partition Style The structure of paths within the entity, which represent partitions. com. google. cloud. dataplex. v1.
- Multiple DataScan log events may exist, each with different publishing information depending on the type of publishing triggered. com. google. cloud. dataplex. v1.
- Multiple DataScan log events may exist, each with different publishing information depending on the type of publishing triggered. com. google. cloud. dataplex. v1.
- A GlossaryTerm holds a rich text description that can be attached to Entries or specific columns to enrich them. com. google. cloud. dataplex. v1.

### About metadata management in Knowledge Catalog \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataplex/docs/catalog-overview](https://docs.cloud.google.com/dataplex/docs/catalog-overview)
- Source ID: `site-docs-root`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- Data Catalog API method Dataplex API method projects.locations.entryGroups.entries.tags.create (REST) CreateTag (RPC) projects.locations.entryGroups.entries.patch (REST) UpdateEntry (RPC) projects.locations.entryGroups.entries.tags.list (REST) ListTags (RPC) projects.locations.entryGroups.entries.get (REST) GetEntry (RPC) Note: To limit the response to only the required aspects, use the views , aspect types , and paths parameters. projects.locations.entryGroups.entries.tags.patch (REST) UpdateTag (RPC) projects.locations.entryGroups.entries.patch (REST) UpdateEntry (RPC) projects.locations.entryGroups.entries.tags.delete (REST) DeleteTag (RPC) projects.locations.entryGroups.entries.patch (REST) UpdateEntry (RPC) Policy tags and taxonomies These APIs are not changing and therefore don't need to be migrated.
- Data Catalog API method Dataplex API method projects.locations.entryGroups.entries.create (REST) CreateEntry (RPC) projects.locations.entryGroups.entries.create (REST) CreateEntry (RPC) projects.locations.entryGroups.entries.get (REST) GetEntry (RPC) projects.locations.entryGroups.entries.get (REST) GetEntry (RPC) projects.locations.entryGroups.entries.patch (REST) UpdateEntry (RPC) projects.locations.entryGroups.entries.patch (REST) UpdateEntry (RPC) Note: You can also use the projects.locations.modifyEntry (REST) and ModifyEntry (RPC) methods to update system entries using source-system permissions instead of Knowledge Catalog permissions. projects.locations.entryGroups.entries.delete (REST) DeleteEntry (RPC) projects.locations.entryGroups.entries.delete (REST) DeleteEntry (RPC) projects.locations.entryGroups.entries.list (REST) ListEntries (RPC) projects.locations.entryGroups.entries.list (REST) ListEntries (RPC) entries.lookup (REST) LookupEntry (RPC) projects.locations.lookupEntry (REST) LookupEntry (RPC) Note: To use the projects.locations.lookupEntry (REST) and LookupEntry (RPC) methods, you must provide the Knowledge Catalog entry name.
- Data Catalog API method Dataplex API method projects.locations.tagTemplates.fields.create (REST) CreateTagTemplateField (RPC) projects.locations.aspectTypes.patch (REST) UpdateAspectType (RPC) projects.locations.tagTemplates.fields.patch (REST) UpdateTagTemplateField (RPC) projects.locations.aspectTypes.patch (REST) UpdateAspectType (RPC) projects.locations.tagTemplates.fields.rename (REST) RenameTagTemplateField (RPC) projects.locations.aspectTypes.patch (REST) UpdateAspectType (RPC) projects.locations.tagTemplates.fields.delete (REST) DeleteTagTemplateField (RPC) projects.locations.aspectTypes.patch (REST) UpdateAspectType (RPC) Tag template field enum values Similar to tag template fields, you can edit enum values in the Dataplex API by modifying the metadata template field in the corresponding aspect type.
- Search is performed over the following: All Google Cloud sources described in Entries and entry groups Custom entries that are created in Data Catalog Tags that are created in Data Catalog Data lineage Data lineage retrieves entry details for asset nodes by using the Dataplex API.

