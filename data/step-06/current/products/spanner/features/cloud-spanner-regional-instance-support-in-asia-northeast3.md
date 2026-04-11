---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:28:01.076Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Cloud Spanner regional instance support in asia-northeast3"
feature_slug: "cloud-spanner-regional-instance-support-in-asia-northeast3"
latest_feature_date: "2020-01-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/instances"
  - "https://docs.cloud.google.com/spanner/docs/rpc-endpoints"
  - "https://docs.cloud.google.com/spanner/docs/reference/libraries"
keywords:
  - "spanner"
  - "regional"
  - "instance"
  - "in"
  - "asia"
  - "northeast3"
  - "added"
  - "for"
---

# Cloud Spanner regional instance support in asia-northeast3

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Cloud Spanner added support for creating regional instances in the asia-northeast3 (Seoul) region.

## Extended Definition

Cloud Spanner added support for creating regional instances in the asia-northeast3 (Seoul) region.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/instances](https://docs.cloud.google.com/spanner/docs/instances)
- [https://docs.cloud.google.com/spanner/docs/rpc-endpoints](https://docs.cloud.google.com/spanner/docs/rpc-endpoints)
- [https://docs.cloud.google.com/spanner/docs/reference/libraries](https://docs.cloud.google.com/spanner/docs/reference/libraries)

## Supporting Pages

### Instances overview | Spanner | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/instances](https://docs.cloud.google.com/spanner/docs/instances)
- Source ID: `site-docs-root`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- Instances overview Spanner Google Cloud Documentation Source URL: https://docs.cloud.google.com/spanner/docs/instances Once an instance is created, you can list, edit, or delete it.
- Spanner is a fully managed database service which oversees its own underlying tasks and resources, including monitoring and restarting processes when necessary with zero downtime.

### Global and regional service endpoints | Spanner | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/rpc-endpoints](https://docs.cloud.google.com/spanner/docs/rpc-endpoints)
- Source ID: `site-docs-root`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- Global and regional service endpoints Spanner Google Cloud Documentation Source URL: https://docs.cloud.google.com/spanner/docs/rpc-endpoints This page describes Spanner RPC global and regional endpoints.

### Spanner client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/reference/libraries](https://docs.cloud.google.com/spanner/docs/reference/libraries)
- Source ID: `site-docs-reference`
- Final score: 102
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Spanner client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/spanner/docs/reference/libraries Imports the Google Cloud client library require &quot;google/cloud/spanner&quot; # Your Google Cloud Platform project ID project id = &quot;YOUR PROJECT ID&quot; # Instantiates a client spanner = Google::Cloud::Spanner.new project: project id # Your Cloud Spanner instance ID instance id = &quot;my-instance&quot; # Your Cloud Spanner database ID database id = &quot;my-database&quot; # Gets a reference to a Cloud Spanner instance database database client = spanner.client instance id, database id # Execute a simple SQL statement results = database client.execute query &quot;SELECT 1&quot; results.rows.each do row puts row end

