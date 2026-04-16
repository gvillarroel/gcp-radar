---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:07:33.849Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Gemini in Databases assistance for AlloyDB for PostgreSQL"
feature_slug: "gemini-in-databases-assistance-for-alloydb-for-postgresql"
latest_feature_date: "2024-07-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/reference/index-advisor-flags"
  - "https://docs.cloud.google.com/alloydb/docs/reference/indexing-strategies"
  - "https://docs.cloud.google.com/alloydb/docs/overview"
  - "https://docs.cloud.google.com/alloydb/docs/ai/manage-data-agents"
keywords:
  - "Gemini assistance"
  - "GenAI insights"
  - "index advisor"
  - "Gemini in Databases"
  - "system insights"
  - "AlloyDB for PostgreSQL"
  - "active queries"
  - "Gemini preview"
---

# Gemini in Databases assistance for AlloyDB for PostgreSQL

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

Gemini in Databases assistance is available in preview for standard and enhanced query insights, system insights, index advisor, and active queries in AlloyDB for PostgreSQL.

## Extended Definition

Gemini in Databases assistance is available in preview for standard and enhanced query insights, system insights, index advisor, and active queries in AlloyDB for PostgreSQL.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/reference/index-advisor-flags](https://docs.cloud.google.com/alloydb/docs/reference/index-advisor-flags)
- [https://docs.cloud.google.com/alloydb/docs/reference/indexing-strategies](https://docs.cloud.google.com/alloydb/docs/reference/indexing-strategies)
- [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)
- [https://docs.cloud.google.com/alloydb/docs/ai/manage-data-agents](https://docs.cloud.google.com/alloydb/docs/ai/manage-data-agents)

## Supporting Pages

### Index advisor flags \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/index-advisor-flags](https://docs.cloud.google.com/alloydb/docs/reference/index-advisor-flags)
- Source ID: `site-api-reference`
- Final score: 104
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Databases AlloyDB for PostgreSQL Reference Send feedback Index advisor flags Stay organized with collections Save and categorize content based on your preferences.
- This page describes the database flags that AlloyDB for PostgreSQL uses to enable and manage features specific to its index advisor extension .
- Requires the google ml integration extension to be enabled. google db advisor.enabled Type Boolean Default on Restart required Yes Controls whether the AlloyDB index advisor is enabled. google db advisor.max index width Type Integer Default 2 Restart required No The maximum number of columns that a recommended index can contain. google db advisor.max num indexable columns Type Integer Default 1000 Restart required No The maximum number of indexable columns that index advisor tracks. google db advisor.max statement length Type Integer Default 102400 Restart required No The maximum length, in bytes, of queries that the index advisor tracks. google db advisor.max storage size in mb Type Integer Default 0 Restart required No The maximum total size, in megabytes, of the indexes that the index advisor recommends.
- If set to 0 , then AlloyDB uses the current database size as the upper limit on the total size of recommended indexes. google db advisor.recommend indexes on partitions Type Boolean Default off Restart required No Controls whether to enable recommending indexes on individual table partitions. google db advisor.recommendation max time in seconds Type Integer Default 600 Restart required No The maximum time, in seconds, that the index advisor spends running an analysis of its tracked queries. google db advisor.top k slowest statements Type Integer Default 100 Restart required No The index advisor bases its recommendations on the slowest-executing statements out of all the queries it tracks.

### "AlloyDB database indexing strategies \_|\_ AlloyDB for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/indexing-strategies](https://docs.cloud.google.com/alloydb/docs/reference/indexing-strategies)
- Source ID: `site-api-reference`
- Final score: 90
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information on how to tune the ScaNN index, see the following resources: Tune vector query performance in AlloyDB for PostgreSQL AlloyDB ScaNN Index reference Understanding the ScaNN index in AlloyDB The following is an example of how to tune the ScaNN index: CREATE INDEX posts scann on posts using scann ( body embeddings cosine ) with ( num leaves = 275 , quantizer = 'sq8' ); CREATE INDEX Time : 3963 .
- Home Documentation Databases AlloyDB for PostgreSQL Reference Send feedback AlloyDB database indexing strategies Stay organized with collections Save and categorize content based on your preferences.
- For more information on how to tune the IVFFlat index, see Tune vector query performance in AlloyDB for PostgreSQL .
- For more information on how to tune the HNSW index, see Tune vector query performance in AlloyDB for PostgreSQL .

### AlloyDB overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)
- Source ID: `site-api-reference`
- Final score: 84
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Automatic and adaptive database features The fully PostgreSQL-compatible database engine that powers every AlloyDB node has several features that continuously analyze the structure and frequency of the queries that your instances handle, using this information to suggest schema improvements or automatically apply optimizations: An index advisor helps you find opportunities to optimize your database schema using new indexes based on your usage patterns.
- Home Documentation Databases AlloyDB for PostgreSQL Guides Send feedback AlloyDB overview Stay organized with collections Save and categorize content based on your preferences.
- For more detailed information, see the AlloyDB for PostgreSQL pricing How AlloyDB works An application connects to AlloyDB instances using standard PostgreSQL protocols.
- Query optimization: improve database performance using an index advisor that suggests schema improvements and a columnar engine that accelerates analytical queries.

### "Manage context sets in AlloyDB Studio \_|\_ AlloyDB for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/manage-data-agents](https://docs.cloud.google.com/alloydb/docs/ai/manage-data-agents)
- Source ID: `site-docs-root-2`
- Final score: 83
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Grant executesql permission to AlloyDB for PostgreSQL instance To grant the executesql permission to the AlloyDB for PostgreSQL instance and set the data api access instance setting to the value ALLOW DATA API , use the following curl command : curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ https://alloydb.googleapis.com/v1alpha/projects/ PROJECT ID /locations/ LOCATION /clusters/ CLUSTER ID /instances/ INSTANCE ID ?updateMask=dataApiAccess \ -d '{ "dataApiAccess": "ENABLED", }' Replace the following: PROJECT ID : The ID of your Google Cloud project.
- Enable required services Enable the following services for your project: Data Analytics API with Gemini Gemini for Google Cloud API Knowledge Catalog API Prepare an AlloyDB for PostgreSQL cluster, instance, and database Make sure that you have access to an existing AlloyDB cluster and instance or create a new one .
- Home Documentation Databases AlloyDB for PostgreSQL Guides Send feedback Manage context sets in AlloyDB Studio Stay organized with collections Save and categorize content based on your preferences.
- This document describes how to create context sets in AlloyDB for PostgreSQL Studio using a context set file.

