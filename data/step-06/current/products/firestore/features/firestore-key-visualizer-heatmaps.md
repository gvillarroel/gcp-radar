---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:17.882Z"
product_name: "Firestore"
product_slug: "firestore"
feature_name: "Firestore Key Visualizer heatmaps"
feature_slug: "firestore-key-visualizer-heatmaps"
latest_feature_date: "2023-08-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/firestore/docs/key-visualizer"
  - "https://docs.cloud.google.com/firestore/docs/keyvis-patterns-index"
  - "https://docs.cloud.google.com/firestore/docs/query-data/indexing"
keywords:
  - "firestore"
  - "key"
  - "visualizer"
  - "heatmaps"
  - "you"
  - "can"
  - "visualize"
  - "heatmap"
---

# Firestore Key Visualizer heatmaps

Product: Firestore
Coverage: MEDIUM

## Step 02 Summary

You can visualize heatmap patterns for index keys to help predict workload patterns, and the feature is in Preview.

## Extended Definition

You can visualize heatmap patterns for index keys to help predict workload patterns, and the feature is in Preview.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firestore/docs/key-visualizer](https://docs.cloud.google.com/firestore/docs/key-visualizer)
- [https://docs.cloud.google.com/firestore/docs/keyvis-patterns-index](https://docs.cloud.google.com/firestore/docs/keyvis-patterns-index)
- [https://docs.cloud.google.com/firestore/docs/query-data/indexing](https://docs.cloud.google.com/firestore/docs/query-data/indexing)

## Supporting Pages

### "Overview of Key Visualizer \_|\_ Firestore in Native mode \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/firestore/docs/key-visualizer](https://docs.cloud.google.com/firestore/docs/key-visualizer)
- Source ID: `site-docs-reference`
- Final score: 183
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Heatmaps The core of a Key Visualizer scan is the heatmap, which shows the value of a metric over time, broken down into up to 1000 contiguous key buckets .
- Understand the document key patterns or index key patterns you might see in Key Visualizer heatmaps.
- See Getting started with Key Visualizer and Exploring heatmaps .
- Limits Although Key Visualizer shows a variety of metrics, it doesn't display every single metric that can affect the performance of Firestore.

### "Heatmap patterns for index keys \_|\_ Firestore in Native mode \_|\_ Google\

- URL: [https://docs.cloud.google.com/firestore/docs/keyvis-patterns-index](https://docs.cloud.google.com/firestore/docs/keyvis-patterns-index)
- Source ID: `site-docs-reference`
- Final score: 106
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Understand the index key structure Before you understand the structure of index keys that you see in Key Visualizer tool, learn about indexes in Firestore.
- Heatmap patterns for index keys This page shows examples of patterns that you might see in a Key Visualizer heatmap.
- COLLECTION: projects/ PROJECT ID /databases/(default)/documents/Users PROPERTIES: (Timestamp: ASC, name DESC) VALUES: (16500000000000001) DOCUMENT: projects/ PROJECT ID /databases/(default)/documents/Users/5000000000000001 What's next Learn how to get started with Key Visualizer .
- Some examples of common hotspots on index are as follows: Note: In the following heatmap example, for Firestore, the x-axis of the heatmap represents time, and the y-axis represents index keys.

### "Manage Standard edition indexes \_|\_ Firestore in Native mode \_|\_ Google\

- URL: [https://docs.cloud.google.com/firestore/docs/query-data/indexing](https://docs.cloud.google.com/firestore/docs/query-data/indexing)
- Source ID: `site-docs-reference`
- Final score: 76
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, consider this google datastore index resource: datastore.tf resource "google datastore index" "legacy" { kind = "foo" properties { name = "property a" direction = "ASCENDING" } properties { name = "property b" direction = "ASCENDING" } } The equivalent google firestore index resource would be: resource "google firestore index" "new" { // note: defaults to the provider project project = project // note: defaults to the (default) database database = "(default)" collection = "foo" api scope = "DATASTORE MODE API" // since there was no "ancestor" property set above, use COLLECTION GROUP here query scope = "COLLECTION GROUP" fields { field path = "property a" order = "ASCENDING" } fields { field path = "property b" order = "ASCENDING" } } Index build time To build an index, Firestore Standard edition must set up the index and then backfill the index with existing data.
- Datastore mode indexes You can also create Datastore Mode indexes using Terraform. datastore.tf resource "google firestore index" "datastore-mode-index" { project = " project-id " database = " database-id " collection = "chatrooms" fields { field path = "name" order = "ASCENDING" } fields { field path = "description" order = "DESCENDING" } query scope = "COLLECTION GROUP" api scope = "DATASTORE MODE API" } Migrate from google datastore index The google datastore index resource is deprecated and will be unavailable in terraform-provider-google version 6.0.0 and later.
- Single-field (automatic) index The following example Terraform configuration file creates a single-field index on the name field in the chatrooms collection: firestore.tf resource "random id" "variable"{ byte length = 8 } resource "google firestore field" "single-index" { project = " project-id " database = " database-id " collection = "chatrooms ${random id.variable.hex}" field = "name" index config { indexes { order = "ASCENDING" query scope = "COLLECTION GROUP" } indexes { array config = "CONTAINS" } } ttl config {} } Replace project-id with your project ID.
- For example, here is the progress status of an index build: { "operations": [ { "name": "projects/ project-id /operations/AyAyMDBiM2U5NTgwZDAtZGIyYi0zYjc0LTIzYWEtZjg1ZGdWFmZWQHEjF0c2Flc3UtcmV4ZWRuaS1uaW1kYRUKSBI", "metadata": { "@type": "type.googleapis.com/google.firestore.admin.v1.IndexOperationMetadata", "common": { "operationType": "CREATE INDEX", "startTime": "2020-06-23T16:52:25.697539Z", "state": "PROCESSING" }, "progressDocuments": { "workCompleted": "219327", "workEstimated": "2198182" } }, }, ...

