---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:28:00.846Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner CLI"
feature_slug: "spanner-cli"
latest_feature_date: "2025-10-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerClient"
  - "https://docs.cloud.google.com/spanner/docs/reference/libraries"
keywords:
  - "spanner"
  - "cli"
  - "the"
  - "command"
  - "line"
  - "interface"
  - "is"
  - "now"
---

# Spanner CLI

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

The Spanner command-line interface is now generally available and can open interactive sessions or run SQL from shell commands and input files; Provides an interactive Spanner shell integrated into the Google Cloud CLI for running interactive sessions and automating SQL execution from the shell or input files.

## Extended Definition

The Spanner command-line interface is now generally available and can open interactive sessions or run SQL from shell commands and input files; Provides an interactive Spanner shell integrated into the Google Cloud CLI for running interactive sessions and automating SQL execution from the shell or input files.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerAsyncClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerClient)
- [https://docs.cloud.google.com/spanner/docs/reference/libraries](https://docs.cloud.google.com/spanner/docs/reference/libraries)

## Supporting Pages

### Class SpannerAsyncClient (3.63.0) | Python client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerAsyncClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerAsyncClient)
- Source ID: `site-python-reference`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- Class SpannerAsyncClient (3.63.0) Python client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner v1.services.spanner.SpannerAsyncClient The Cloud Spanner API can be used to manage sessions and execute transactions on data stored in Cloud Spanner databases.

### Class SpannerClient (3.62.0) | Python client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerClient)
- Source ID: `site-python-reference`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- Class SpannerClient (3.62.0) Python client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner v1.services.spanner.SpannerClient The Cloud Spanner API can be used to manage sessions and execute transactions on data stored in Cloud Spanner databases.

### Spanner client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/reference/libraries](https://docs.cloud.google.com/spanner/docs/reference/libraries)
- Source ID: `site-docs-reference`
- Final score: 118
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Spanner client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/spanner/docs/reference/libraries Imports the Google Cloud client library require &quot;google/cloud/spanner&quot; # Your Google Cloud Platform project ID project id = &quot;YOUR PROJECT ID&quot; # Instantiates a client spanner = Google::Cloud::Spanner.new project: project id # Your Cloud Spanner instance ID instance id = &quot;my-instance&quot; # Your Cloud Spanner database ID database id = &quot;my-database&quot; # Gets a reference to a Cloud Spanner instance database database client = spanner.client instance id, database id # Execute a simple SQL statement results = database client.execute query &quot;SELECT 1&quot; results.rows.each do row puts row end

