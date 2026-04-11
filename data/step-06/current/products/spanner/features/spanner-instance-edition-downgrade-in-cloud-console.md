---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:28:00.829Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner instance edition downgrade in Cloud Console"
feature_slug: "spanner-instance-edition-downgrade-in-cloud-console"
latest_feature_date: "2026-02-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/instances"
  - "https://docs.cloud.google.com/spanner/docs/editions-overview"
  - "https://docs.cloud.google.com/spanner/docs/reference/libraries"
keywords:
  - "spanner"
  - "instance"
  - "edition"
  - "downgrade"
  - "in"
  - "console"
  - "allows"
  - "users"
---

# Spanner instance edition downgrade in Cloud Console

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner allows users to downgrade a Spanner instance's edition from the Google Cloud console.

## Extended Definition

Spanner allows users to downgrade a Spanner instance's edition from the Google Cloud console.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/instances](https://docs.cloud.google.com/spanner/docs/instances)
- [https://docs.cloud.google.com/spanner/docs/editions-overview](https://docs.cloud.google.com/spanner/docs/editions-overview)
- [https://docs.cloud.google.com/spanner/docs/reference/libraries](https://docs.cloud.google.com/spanner/docs/reference/libraries)

## Supporting Pages

### Instances overview | Spanner | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/instances](https://docs.cloud.google.com/spanner/docs/instances)
- Source ID: `site-docs-root`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Instances overview Spanner Google Cloud Documentation Source URL: https://docs.cloud.google.com/spanner/docs/instances Once an instance is created, you can list, edit, or delete it.
- Spanner is a fully managed database service which oversees its own underlying tasks and resources, including monitoring and restarting processes when necessary with zero downtime.

### Spanner editions overview | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/editions-overview](https://docs.cloud.google.com/spanner/docs/editions-overview)
- Source ID: `site-docs-root`
- Final score: 103
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Spanner editions is a tier-based pricing model that provides different capabilities at different price points....
- Spanner editions overview Google Cloud Documentation Source URL: https://docs.cloud.google.com/spanner/docs/editions-overview Spanner · Start free · Home · ... and its key features.

### Spanner client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/reference/libraries](https://docs.cloud.google.com/spanner/docs/reference/libraries)
- Source ID: `site-docs-reference`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- Spanner client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/spanner/docs/reference/libraries Imports the Google Cloud client library require &quot;google/cloud/spanner&quot; # Your Google Cloud Platform project ID project id = &quot;YOUR PROJECT ID&quot; # Instantiates a client spanner = Google::Cloud::Spanner.new project: project id # Your Cloud Spanner instance ID instance id = &quot;my-instance&quot; # Your Cloud Spanner database ID database id = &quot;my-database&quot; # Gets a reference to a Cloud Spanner instance database database client = spanner.client instance id, database id # Execute a simple SQL statement results = database client.execute query &quot;SELECT 1&quot; results.rows.each do row puts row end

