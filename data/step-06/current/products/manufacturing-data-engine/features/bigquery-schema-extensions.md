---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:43.081Z"
product_name: "Manufacturing Data Engine"
product_slug: "manufacturing-data-engine"
feature_name: "BigQuery schema extensions"
feature_slug: "bigquery-schema-extensions"
latest_feature_date: "2023-08-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/manufacturing-data-engine/docs/reference/proto-record-schema"
  - "https://docs.cloud.google.com/manufacturing-data-engine/docs/resources/bigquery-schema-changes"
  - "https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/operate/how-to-monitor-mde-services"
keywords:
  - "schema"
  - "extensions"
  - "extends"
  - "the"
  - "with"
  - "new"
  - "fields"
  - "to"
---

# BigQuery schema extensions

Product: Manufacturing Data Engine
Coverage: MEDIUM

## Step 02 Summary

Extends the BigQuery schema with new fields to better support analytics use cases.

## Extended Definition

Extends the BigQuery schema with new fields to better support analytics use cases.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/manufacturing-data-engine/docs/reference/proto-record-schema](https://docs.cloud.google.com/manufacturing-data-engine/docs/reference/proto-record-schema)
- [https://docs.cloud.google.com/manufacturing-data-engine/docs/resources/bigquery-schema-changes](https://docs.cloud.google.com/manufacturing-data-engine/docs/resources/bigquery-schema-changes)
- [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/operate/how-to-monitor-mde-services](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/operate/how-to-monitor-mde-services)

## Supporting Pages

### Proto record schema | Manufacturing Data Engine | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/manufacturing-data-engine/docs/reference/proto-record-schema](https://docs.cloud.google.com/manufacturing-data-engine/docs/reference/proto-record-schema)
- Source ID: `site-docs-reference`
- Final score: 120
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following is an example of a schema for proto records in the numeric archetype family. { &quot;$schema&quot;: &quot;https://json-schema.org/draft/2020-12/schema&quot;, &quot;title&quot;: &quot;Proto record schema for parsers targeting the Numeric archetype family&quot;, &quot;type&quot;: &quot;object&quot;, &quot;properties&quot;: { &quot;tagName&quot;: { &quot;type&quot;: &quot;string&quot; }, &quot;data&quot;: { &quot;type&quot;: &quot;object&quot;, &quot;properties&quot;: { &quot;numeric&quot;: { &quot;type&quot;: &quot;number&quot; } }, &quot;description&quot;: &quot;Numeric measurement&quot;, &quot;required&quot;: [&quot;numeric&quot;] }, &quot;embeddedMetadata&quot;: { &quot;type&quot;: &quot;object&quot;, &quot;description&quot;: &quot;Rapidly changing metada
- Proto record schema Manufacturing Data Engine Google Cloud Documentation Source URL: https://docs.cloud.google.com/manufacturing-data-engine/docs/reference/proto-record-schema Schemas make dynamic references to the user-defined schemas at type-level.

### BigQuery schema changes | Manufacturing Data Engine | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/manufacturing-data-engine/docs/resources/bigquery-schema-changes](https://docs.cloud.google.com/manufacturing-data-engine/docs/resources/bigquery-schema-changes)
- Source ID: `site-docs-root`
- Final score: 90
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- BigQuery schema changes Manufacturing Data Engine Google Cloud Documentation Source URL: https://docs.cloud.google.com/manufacturing-data-engine/docs/resources/bigquery-schema-changes This guide shows any updates on data schema changes when releasing new Manufacturing Data Engine (MDE) versions.
- Some BigQuery table schema changes from v1.2 to v1.3 are not backwards-compatible.
- In MDE v1.3, records are stored in tables per Type (record tables) where each Type is tied to a specific Archetype.
- All records in MDE v1.2 were stored in one of three archetype tables.

### Monitor services | Manufacturing Data Engine | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/operate/how-to-monitor-mde-services](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/operate/how-to-monitor-mde-services)
- Source ID: `site-docs-root`
- Final score: 71
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Monitor services Manufacturing Data Engine Google Cloud Documentation Source URL: https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/operate/how-to-monitor-mde-services This guide describes how to use the underlying Google Cloud services and Manufacturing Data Engine (MDE) metrics to proactively identify processing pipeline issues, diagnose configuration or system problems, and monitor system scaling in response to current load.

