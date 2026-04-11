---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:43.085Z"
product_name: "Manufacturing Data Engine"
product_slug: "manufacturing-data-engine"
feature_name: "Metadata natural keys"
feature_slug: "metadata-natural-keys"
latest_feature_date: "2023-08-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/manufacturing-data-engine/docs/reference/proto-record-schema"
  - "https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/operate/how-to-monitor-mde-services"
  - "https://docs.cloud.google.com/manufacturing-data-engine/docs/concepts/key-concepts"
keywords:
  - "metadata"
  - "natural"
  - "keys"
  - "adds"
  - "key"
  - "to"
  - "instances"
  - "for"
---

# Metadata natural keys

Product: Manufacturing Data Engine
Coverage: MEDIUM

## Step 02 Summary

Adds a natural key to metadata instances for business-friendly retrieval and centralized shared-instance management.

## Extended Definition

Adds a natural key to metadata instances for business-friendly retrieval and centralized shared-instance management.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/manufacturing-data-engine/docs/reference/proto-record-schema](https://docs.cloud.google.com/manufacturing-data-engine/docs/reference/proto-record-schema)
- [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/operate/how-to-monitor-mde-services](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/operate/how-to-monitor-mde-services)
- [https://docs.cloud.google.com/manufacturing-data-engine/docs/concepts/key-concepts](https://docs.cloud.google.com/manufacturing-data-engine/docs/concepts/key-concepts)

## Supporting Pages

### Proto record schema | Manufacturing Data Engine | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/manufacturing-data-engine/docs/reference/proto-record-schema](https://docs.cloud.google.com/manufacturing-data-engine/docs/reference/proto-record-schema)
- Source ID: `site-docs-reference`
- Final score: 69
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following is an example of a schema for proto records in the numeric archetype family. { &quot;$schema&quot;: &quot;https://json-schema.org/draft/2020-12/schema&quot;, &quot;title&quot;: &quot;Proto record schema for parsers targeting the Numeric archetype family&quot;, &quot;type&quot;: &quot;object&quot;, &quot;properties&quot;: { &quot;tagName&quot;: { &quot;type&quot;: &quot;string&quot; }, &quot;data&quot;: { &quot;type&quot;: &quot;object&quot;, &quot;properties&quot;: { &quot;numeric&quot;: { &quot;type&quot;: &quot;number&quot; } }, &quot;description&quot;: &quot;Numeric measurement&quot;, &quot;required&quot;: [&quot;numeric&quot;] }, &quot;embeddedMetadata&quot;: { &quot;type&quot;: &quot;object&quot;, &quot;description&quot;: &quot;Rapidly changing metada
- Proto record schema Manufacturing Data Engine Google Cloud Documentation Source URL: https://docs.cloud.google.com/manufacturing-data-engine/docs/reference/proto-record-schema Schemas make dynamic references to the user-defined schemas at type-level.

### Monitor services | Manufacturing Data Engine | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/operate/how-to-monitor-mde-services](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/operate/how-to-monitor-mde-services)
- Source ID: `site-docs-root`
- Final score: 66
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Monitor services Manufacturing Data Engine Google Cloud Documentation Source URL: https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/operate/how-to-monitor-mde-services This guide describes how to use the underlying Google Cloud services and Manufacturing Data Engine (MDE) metrics to proactively identify processing pipeline issues, diagnose configuration or system problems, and monitor system scaling in response to current load.

### Key concepts | Manufacturing Data Engine | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/manufacturing-data-engine/docs/concepts/key-concepts](https://docs.cloud.google.com/manufacturing-data-engine/docs/concepts/key-concepts)
- Source ID: `site-docs-root`
- Final score: 53
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Key concepts Manufacturing Data Engine Google Cloud Documentation Source URL: https://docs.cloud.google.com/manufacturing-data-engine/docs/concepts/key-concepts This page describes the key concepts for understanding the components of Manufacturing Data Engine (MDE).

