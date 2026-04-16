---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:07:33.890Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "AlloyDB vectorized joins"
feature_slug: "alloydb-vectorized-joins"
latest_feature_date: "2023-06-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/reference/columnar-engine-flags"
  - "https://docs.cloud.google.com/alloydb/docs/columnar-engine/configure"
  - "https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners"
  - "https://docs.cloud.google.com/alloydb/docs/optimize-database-performance-compare-snapshots"
keywords:
  - "vectorized join processing"
  - "vectorized join execution"
  - "vectorized join preview"
  - "vectorized joins"
  - "vectorized join"
  - "columnar join execution"
  - "join performance"
  - "columnar engine"
---

# AlloyDB vectorized joins

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB made vectorized joins available in preview as part of its columnar engine to improve join performance for qualifying queries.

## Extended Definition

AlloyDB made vectorized joins available in preview as part of its columnar engine to improve join performance for qualifying queries.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/reference/columnar-engine-flags](https://docs.cloud.google.com/alloydb/docs/reference/columnar-engine-flags)
- [https://docs.cloud.google.com/alloydb/docs/columnar-engine/configure](https://docs.cloud.google.com/alloydb/docs/columnar-engine/configure)
- [https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners](https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners)
- [https://docs.cloud.google.com/alloydb/docs/optimize-database-performance-compare-snapshots](https://docs.cloud.google.com/alloydb/docs/optimize-database-performance-compare-snapshots)

## Supporting Pages

### Columnar engine flags \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/columnar-engine-flags](https://docs.cloud.google.com/alloydb/docs/reference/columnar-engine-flags)
- Source ID: `site-api-reference`
- Final score: 103
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Enable vectorized joins . google columnar engine.vectorized join threads Preview This product or feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Vectorized join google columnar engine.enable vectorized join Type Boolean Default off Restarts instance No If on , then AlloyDB automatically uses multithreaded vectorized operations to improve the performance of queries that join multiple tables.
- Auto-columnarization google columnar engine.enable auto columnarization Type Boolean Default on Instance restarts No If on , enables the columnar engine's auto-columnarization features . google columnar engine.relations Type String Default An empty string Instance restarts No Specifies a list of columns for AlloyDB to add to your cluster's column store, apart from auto-columnarization.
- If this flag is off while google columnar engine.enabled is on , then the columnar engine stays enabled and retains its column store, but AlloyDB does not use columnar data when handling queries. google columnar engine.enable index caching Preview This product or feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .

### "Configure the columnar engine \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/columnar-engine/configure](https://docs.cloud.google.com/alloydb/docs/columnar-engine/configure)
- Source ID: `site-docs-reference-2`
- Final score: 95
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enable vectorized join The columnar engine has a vectorized join feature that can improve the performance of joins by applying vectorized processing to qualifying queries.
- You can increase the number of threads available to this feature by setting the google columnar engine.vectorized join threads flag to a larger value.
- To enable vectorized join on an instance, set the instance's google columnar engine.enable vectorized join flag to on .
- Instance tier Default columnar engine cache size N2 C4A Primary Replica pool Primary or replica pool 1 vCPU N/A N/A 0 2 vCPU 18.75 GB 37.5 GB N/A 4 vCPU 18.75 GB 37.5 GB 18.75 GB 8 vCPU 18.75 GB 37.5 GB 37.75 GB 16 vCPU 37.5 GB 37.5 GB 75 GB 32 vCPU 75 GB 75 GB 112.5 GB 48 vCPU N/A N/A 187.5 GB 64 vCPU 150 GB 150 GB 262.5 GB 72 vCPU N/A N/A 300 GB 96 vCPU 300 GB 300 GB N/A 128 vCPU 450 GB 450 GB N/A The google columnar engine.storage cache size flag lets you adjust the columnar engine storage cache, with the limitations of the minimum and maximum values listed in the following table: Instance tier Minimum columnar engine cache size Maximum columnar engine cache size N2 C4A Primary Replica pool Primary or replica pool 1 vCPU N/A N/A N/A 0 2 vCPU 0 187.5 GB 375 GB N/A 4 vCPU 0 187.5 GB 375 GB 187.5 GB 8 vCPU 0 187.5 GB 375 GB 375 GB 16 vCPU 0 375 GB 375 GB 750 GB 32 vCPU 0 750 GB 750 GB 1125 GB 48 vCPU N/A N/A N/A 1125 GB 64 vCPU 0 1500 GB 1500 GB 2625 GB 72 vCPU N/A N/A N/A 3000 GB 96 vCPU 0 3000 GB 3000 GB N/A 128 vCPU 0 4500 GB 4500 GB N/A Monitor storage cache data for the columnar engine To view and monitor data about the storage cache of the columnar engine, you can use the following commands: Command Description SELECT google columnar engine storage cache used(); Returns the size of the used columnar engine storage cache.

### "Google Cloud Ready - AlloyDB Partners \_|\_ AlloyDB for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners](https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners)
- Source ID: `site-docs-reference-2`
- Final score: 94
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### "Optimize database performance by comparing performance snapshots \_|\_ AlloyDB\

- URL: [https://docs.cloud.google.com/alloydb/docs/optimize-database-performance-compare-snapshots](https://docs.cloud.google.com/alloydb/docs/optimize-database-performance-compare-snapshots)
- Source ID: `site-docs-reference-2`
- Final score: 90
- Re-rank relevance: N/A

