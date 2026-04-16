---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:07:33.890Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "AlloyDB columnar engine data type support"
feature_slug: "alloydb-columnar-engine-data-type-support"
latest_feature_date: "2023-06-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/quickstart/create-and-connect"
  - "https://docs.cloud.google.com/alloydb/docs/columnar-engine/about"
  - "https://docs.cloud.google.com/alloydb/docs/choose-machine-type"
  - "https://docs.cloud.google.com/alloydb/docs/ai/data-agent-overview"
keywords:
  - "boolean data type"
  - "columnar supported data types"
  - "bytea"
  - "enum"
  - "uuid"
  - "alloydb columnar types"
  - "columnar data types"
  - "columnar engine"
---

# AlloyDB columnar engine data type support

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

The AlloyDB columnar engine added support for boolean, bytea, enum, and uuid column data types.

## Extended Definition

The AlloyDB columnar engine added support for boolean, bytea, enum, and uuid column data types.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/quickstart/create-and-connect](https://docs.cloud.google.com/alloydb/docs/quickstart/create-and-connect)
- [https://docs.cloud.google.com/alloydb/docs/columnar-engine/about](https://docs.cloud.google.com/alloydb/docs/columnar-engine/about)
- [https://docs.cloud.google.com/alloydb/docs/choose-machine-type](https://docs.cloud.google.com/alloydb/docs/choose-machine-type)
- [https://docs.cloud.google.com/alloydb/docs/ai/data-agent-overview](https://docs.cloud.google.com/alloydb/docs/ai/data-agent-overview)

## Supporting Pages

### "Create and query an AlloyDB database using the Google Cloud console \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/quickstart/create-and-connect](https://docs.cloud.google.com/alloydb/docs/quickstart/create-and-connect)
- Source ID: `site-docs-root`
- Final score: 104
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### "About the AlloyDB columnar engine \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/columnar-engine/about](https://docs.cloud.google.com/alloydb/docs/columnar-engine/about)
- Source ID: `site-docs-root`
- Final score: 102
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The columnar engine supports only columns with the following built-in data types: array bigint boolean bytea char date decimal double precision enum float4 float8 integer json jsonb numeric real serial short smallint text timestamp timestamptz uuid varchar vector The columnar engine ignores any attempts to manually add columns with unsupported data types to the column store.
- Unsupported data sources The columnar engine does not support tables or materialized views with the following attributes as data sources: Non-leaf partitioned tables Foreign tables Columnar engine limitations If you're running an analytical query on a column that has an index, the AlloyDB optimizer may choose to use row-store.
- The AlloyDB columnar engine accelerates SQL query processing of scans, joins, and aggregates by providing these components: A column store that contains table and materialized-view data for selected columns, reorganized into a column-oriented format.
- For tables or views with a small number of rows, typically fewer than 5,000, the query planner might choose to use the row-store instead of the column store for better performance, even if the data is successfully loaded into the columnar engine.

### "Choose an AlloyDB machine type \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/choose-machine-type](https://docs.cloud.google.com/alloydb/docs/choose-machine-type)
- Source ID: `site-docs-reference-2`
- Final score: 94
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### QueryData overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/data-agent-overview](https://docs.cloud.google.com/alloydb/docs/ai/data-agent-overview)
- Source ID: `site-docs-reference-2`
- Final score: 94
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

