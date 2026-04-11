---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:43.084Z"
product_name: "Manufacturing Data Engine"
product_slug: "manufacturing-data-engine"
feature_name: "Lookup buckets"
feature_slug: "lookup-buckets"
latest_feature_date: "2023-08-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/manufacturing-data-engine/docs/reference/bigquery-schemas"
  - "https://docs.cloud.google.com/manufacturing-data-engine/docs/reference/proto-record-schema"
keywords:
  - "lookup"
  - "buckets"
  - "lets"
  - "parsers"
  - "retrieve"
  - "reference"
---

# Lookup buckets

Product: Manufacturing Data Engine
Coverage: MEDIUM

## Step 02 Summary

Lets parsers retrieve reference data.

## Extended Definition

Lets parsers retrieve reference data.

## Evidence Summary

Fast-mode lexical matching selected 2 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/manufacturing-data-engine/docs/reference/bigquery-schemas](https://docs.cloud.google.com/manufacturing-data-engine/docs/reference/bigquery-schemas)
- [https://docs.cloud.google.com/manufacturing-data-engine/docs/reference/proto-record-schema](https://docs.cloud.google.com/manufacturing-data-engine/docs/reference/proto-record-schema)

## Supporting Pages

### BigQuery schemas | Manufacturing Data Engine | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/manufacturing-data-engine/docs/reference/bigquery-schemas](https://docs.cloud.google.com/manufacturing-data-engine/docs/reference/bigquery-schemas)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- BigQuery schemas Manufacturing Data Engine Google Cloud Documentation Source URL: https://docs.cloud.google.com/manufacturing-data-engine/docs/reference/bigquery-schemas Manufacturing Data Engine · Start free · Home · Documentation · Data analytics · Manufacturing Data Engine · Guides · Send feedback · Stay organized with collections Save and categorize content based on your preferences.

### Proto record schema | Manufacturing Data Engine | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/manufacturing-data-engine/docs/reference/proto-record-schema](https://docs.cloud.google.com/manufacturing-data-engine/docs/reference/proto-record-schema)
- Source ID: `site-docs-reference`
- Final score: 27
- Re-rank relevance: N/A

Evidence snippets:
- The following is an example of a schema for proto records in the numeric archetype family. { &quot;$schema&quot;: &quot;https://json-schema.org/draft/2020-12/schema&quot;, &quot;title&quot;: &quot;Proto record schema for parsers targeting the Numeric archetype family&quot;, &quot;type&quot;: &quot;object&quot;, &quot;properties&quot;: { &quot;tagName&quot;: { &quot;type&quot;: &quot;string&quot; }, &quot;data&quot;: { &quot;type&quot;: &quot;object&quot;, &quot;properties&quot;: { &quot;numeric&quot;: { &quot;type&quot;: &quot;number&quot; } }, &quot;description&quot;: &quot;Numeric measurement&quot;, &quot;required&quot;: [&quot;numeric&quot;] }, &quot;embeddedMetadata&quot;: { &quot;type&quot;: &quot;object&quot;, &quot;description&quot;: &quot;Rapidly changing metada
- Proto record schema Manufacturing Data Engine Google Cloud Documentation Source URL: https://docs.cloud.google.com/manufacturing-data-engine/docs/reference/proto-record-schema Schemas make dynamic references to the user-defined schemas at type-level.

