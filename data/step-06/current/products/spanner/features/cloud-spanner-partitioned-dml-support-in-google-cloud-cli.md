---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.353Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Cloud Spanner Partitioned DML support in Google Cloud CLI"
feature_slug: "cloud-spanner-partitioned-dml-support-in-google-cloud-cli"
latest_feature_date: "2018-10-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/backfill-embeddings"
  - "https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database"
  - "https://docs.cloud.google.com/python/docs/reference/spanner/latest"
keywords:
  - "inserting"
  - "partitioned"
  - "beta"
  - "includes"
---

# Cloud Spanner Partitioned DML support in Google Cloud CLI

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Google Cloud CLI now includes beta support for inserting, updating, and deleting Cloud Spanner table rows using Partitioned DML.

## Extended Definition

Google Cloud CLI now includes beta support for inserting, updating, and deleting Cloud Spanner table rows using Partitioned DML.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/backfill-embeddings](https://docs.cloud.google.com/spanner/docs/backfill-embeddings)
- [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database)
- [https://docs.cloud.google.com/python/docs/reference/spanner/latest](https://docs.cloud.google.com/python/docs/reference/spanner/latest)

## Supporting Pages

### "Generate vector embeddings for textual data in bulk using partitioned DML\

- URL: [https://docs.cloud.google.com/spanner/docs/backfill-embeddings](https://docs.cloud.google.com/spanner/docs/backfill-embeddings)
- Source ID: `site-docs-root`
- Final score: 60
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Databases Spanner Guides Send feedback Generate vector embeddings for textual data in bulk using partitioned DML Stay organized with collections Save and categorize content based on your preferences.
- If the Vertex AI API requests are throttled due to Vertex AI API quota limits, then Spanner retries these failures under the partitioned DML transaction mode for a maximum of 20 times.
- Backfill embeddings Finally, execute the following UPDATE statement using partitioned DML to generate embeddings for the textual data column and store the embeddings in your database.
- Depending on the amount of embeddings you are backfilling, you might need to increase this timeout to ensure that the UPDATE partitioned DML has sufficient time to complete.

### "Best practices for using Spanner as a gaming database \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database)
- Source ID: `site-docs-root`
- Final score: 54
- Re-rank relevance: N/A

Evidence snippets:
- Updating the previous query to use this improved index looks like the following: SELECT PlayerID FROM Player @ { force index = idx attribute } WHERE IndexPartition BETWEEN 1 and 6 AND Attribute = 23 LIMIT 10 Because no beta test was run, the studio didn't realize they were testing by using data with incorrect assumptions.
- Although synthetic load tests are a good way to validate how many queries per second (QPS) your instance can handle, a beta test with real players is necessary to validate your schema and prepare a successful launch.
- Personally identifiable information (PII) In games, information that typically includes email address and payment account information, such as a credit card number and billing address.
- Based on the data you gathered during load testing or from any public beta testing, you can estimate the number of nodes required to handle requests at launch.

### "Python Client for Cloud Spanner \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/spanner/latest](https://docs.cloud.google.com/python/docs/reference/spanner/latest)
- Source ID: `site-python-reference`
- Final score: 52
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

