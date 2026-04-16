---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.186Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner end-to-end tracing"
feature_slug: "spanner-end-to-end-tracing"
latest_feature_date: "2025-04-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.executor.spanner.CloudExecutor.OutcomeSender"
  - "https://docs.cloud.google.com/python/docs/reference/spanner/latest/client-usage"
  - "https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database"
keywords:
  - "tracing"
  - "including"
  - "offers"
  - "generally"
  - "available"
---

# Spanner end-to-end tracing

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner now offers generally available end-to-end tracing, including client-side tracing support in Node.js and Python client libraries in addition to existing Java and Go tracing support; Spanner added end-to-end tracing support in preview, including client-side tracing in the Java and Go client libraries.

## Extended Definition

Spanner now offers generally available end-to-end tracing, including client-side tracing support in Node.js and Python client libraries in addition to existing Java and Go tracing support; Spanner added end-to-end tracing support in preview, including client-side tracing in the Java and Go client libraries.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.executor.spanner.CloudExecutor.OutcomeSender](https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.executor.spanner.CloudExecutor.OutcomeSender)
- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/client-usage](https://docs.cloud.google.com/python/docs/reference/spanner/latest/client-usage)
- [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database)

## Supporting Pages

### "Class CloudExecutor.OutcomeSender (6.111.1) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.executor.spanner.CloudExecutor.OutcomeSender](https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.executor.spanner.CloudExecutor.OutcomeSender)
- Source ID: `site-java-reference`
- Final score: 84
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

### Spanner Client Usage \_|\_ Python client libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/spanner/latest/client-usage](https://docs.cloud.google.com/python/docs/reference/spanner/latest/client-usage)
- Source ID: `site-python-reference`
- Final score: 82
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

### "Best practices for using Spanner as a gaming database \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database)
- Source ID: `site-docs-root`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- For more information about schema updates, including how to perform a schema update that requires data validation , see Spanner schema update documentation Consider database access and size When you develop your game server and platform services to use Spanner, consider how your game accesses the database and how to size the database to avoid unnecessary costs.
- Even when using Spanner to hold all of your game data worldwide, it offers read-write transactions with even stronger than conventional atomicity, consistency, isolation, and durability (ACID) properties.
- In the following diagram, adding an IndexPartition column to the schema after the launch resolves the hotspot issue, and players are evenly distributed across the available Spanner splits.
- All queries against the old schema are returned (although they might return less quickly than usual), and queries against the new schema are returned as they become available.

