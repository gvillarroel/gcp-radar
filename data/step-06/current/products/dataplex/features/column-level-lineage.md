---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:13:48.457Z"
product_name: "Dataplex"
product_slug: "dataplex"
feature_name: "Column-level lineage"
feature_slug: "column-level-lineage"
latest_feature_date: "2025-09-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataplex/docs/use-lineage"
  - "https://docs.cloud.google.com/dataplex/docs/about-data-lineage"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1"
  - "https://docs.cloud.google.com/dataplex/docs/catalog-overview"
keywords:
  - "column"
  - "level"
  - "lineage"
  - "dataplex"
  - "provides"
  - "tracking"
  - "between"
  - "individual"
---

# Column-level lineage

Product: Dataplex
Coverage: MEDIUM

## Step 02 Summary

Dataplex provides lineage tracking between individual columns in BigQuery tables; Dataplex provides lineage tracking between individual columns in BigQuery tables.

## Extended Definition

Dataplex provides lineage tracking between individual columns in BigQuery tables; Dataplex provides lineage tracking between individual columns in BigQuery tables.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataplex/docs/use-lineage](https://docs.cloud.google.com/dataplex/docs/use-lineage)
- [https://docs.cloud.google.com/dataplex/docs/about-data-lineage](https://docs.cloud.google.com/dataplex/docs/about-data-lineage)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1)
- [https://docs.cloud.google.com/dataplex/docs/catalog-overview](https://docs.cloud.google.com/dataplex/docs/catalog-overview)

## Supporting Pages

### "Use data lineage with Google Cloud systems \_|\_ Knowledge Catalog \_|\_\

- URL: [https://docs.cloud.google.com/dataplex/docs/use-lineage](https://docs.cloud.google.com/dataplex/docs/use-lineage)
- Source ID: `site-docs-root`
- Final score: 261
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following view types are available: Graph view : displays lineage as an interactive graph, letting you explore relationships between data assets and columns by expanding nodes.
- The List view offers simplified and detailed tabular representations of lineage for both table-level and column-level lineage, synchronized with the Graph view.
- The List view offers simplified and detailed tabular representations of lineage for both table-level and column-level lineage, synchronized with the Graph view.
- The List view offers simplified and detailed tabular representations of lineage for both table-level and column-level lineage, synchronized with the Graph view.

### About data lineage \_|\_ Knowledge Catalog \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataplex/docs/about-data-lineage](https://docs.cloud.google.com/dataplex/docs/about-data-lineage)
- Source ID: `site-docs-root`
- Final score: 217
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Column-level lineage limitations Column-level lineage has the following additional limitations: Column-level lineage isn't collected for BigQuery load jobs or for routines.
- Column-level lineage isn't collected if a job creates more than 1,500 column-level links.
- Column-level lineage is only fetched from the region where the root table is located.
- There is no API to create, read, update, delete, or search for column-level lineage.

### "Package com.google.cloud.dataplex.v1 (1.86.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1)
- Source ID: `site-java-reference`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- These are used for granting different levels of access (IAM roles) on the individual data product's data assets. com. google. cloud. dataplex. v1.
- These are used for granting different levels of access (IAM roles) on the individual data product's data assets. com. google. cloud. dataplex. v1.
- Data Quality Column Result DataQualityColumnResult provides a more detailed, per-column view of the results. com. google. cloud. dataplex. v1.
- Statistic Range Expectation Evaluates whether the column aggregate statistic lies between a specified range. com. google. cloud. dataplex. v1.

### About metadata management in Knowledge Catalog \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataplex/docs/catalog-overview](https://docs.cloud.google.com/dataplex/docs/catalog-overview)
- Source ID: `site-docs-root`
- Final score: 163
- Re-rank relevance: N/A

Evidence snippets:
- This section provides a mapping between the Data Catalog API and the Dataplex API.
- Search is performed over the following: All Google Cloud sources described in Entries and entry groups Custom entries that are created in Data Catalog Tags that are created in Data Catalog Data lineage Data lineage retrieves entry details for asset nodes by using the Dataplex API.
- As an administrator, to make glossaries and associated links between business terms and columns that you created in Data Catalog available in Knowledge Catalog, see Migrate glossaries to Knowledge Catalog .
- Streamline compliance: Automates data lineage tracking to map how sensitive information, including personally identifiable information (PII), flows across your organization.

