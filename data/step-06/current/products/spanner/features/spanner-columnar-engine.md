---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.161Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner columnar engine"
feature_slug: "spanner-columnar-engine"
latest_feature_date: "2026-01-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/columnar-engine"
  - "https://docs.cloud.google.com/spanner/docs/configure-columnar-engine"
  - "https://docs.cloud.google.com/spanner/docs/query-execution-operators"
keywords:
  - "engine"
  - "columnar"
  - "launched"
  - "public"
  - "automatic"
  - "enable"
  - "preview"
---

# Spanner columnar engine

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner launched the Columnar engine in Public Preview to enable automatic columnar query execution and faster columnar scans with vectorized execution on live operational data; The Spanner columnar engine provides a preview storage and query acceleration technique for analytical workloads, improving scan performance on live operational data by up to 200x without impacting transactional workloads.

## Extended Definition

Spanner launched the Columnar engine in Public Preview to enable automatic columnar query execution and faster columnar scans with vectorized execution on live operational data; The Spanner columnar engine provides a preview storage and query acceleration technique for analytical workloads, improving scan performance on live operational data by up to 200x without impacting transactional workloads.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/columnar-engine](https://docs.cloud.google.com/spanner/docs/columnar-engine)
- [https://docs.cloud.google.com/spanner/docs/configure-columnar-engine](https://docs.cloud.google.com/spanner/docs/configure-columnar-engine)
- [https://docs.cloud.google.com/spanner/docs/query-execution-operators](https://docs.cloud.google.com/spanner/docs/query-execution-operators)

## Supporting Pages

### Spanner columnar engine overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/columnar-engine](https://docs.cloud.google.com/spanner/docs/columnar-engine)
- Source ID: `site-docs-root`
- Final score: 244
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Optimal columnar coverage After you enable columnar engine on a database that already contains data, Spanner's automatic compaction process converts data to columnar storage asynchronously in the background.
- Preview — Spanner columnar engine This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- After you enable the Spanner columnar engine and Spanner completes data compaction, storage usage increases to include the new columnar representation.
- Preview limitations Columnar engine only supports the GoogleSQL interface.

### Configure Spanner columnar engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/configure-columnar-engine](https://docs.cloud.google.com/spanner/docs/configure-columnar-engine)
- Source ID: `site-docs-root`
- Final score: 234
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you create a new database without data and enable columnar engine, Spanner stores data in columnar format as you insert it and as compactions occur in the background.
- Preview — Spanner columnar engine This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- When you enable Spanner columnar engine on an existing database that has data in it, Spanner provides a mechanism to manually trigger compactions.
- The columnar policy option has the following flags: 'enabled' or 'disabled' turns the columnar engine on or off for the specific schema object.

### Query execution operators \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/query-execution-operators](https://docs.cloud.google.com/spanner/docs/query-execution-operators)
- Source ID: `site-docs-reference`
- Final score: 76
- Re-rank relevance: N/A

