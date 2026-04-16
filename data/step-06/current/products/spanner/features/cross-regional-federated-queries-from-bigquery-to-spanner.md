---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.177Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Cross-regional federated queries from BigQuery to Spanner"
feature_slug: "cross-regional-federated-queries-from-bigquery-to-spanner"
latest_feature_date: "2025-05-27"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/columnar-engine"
  - "https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database"
  - "https://docs.cloud.google.com/spanner/docs/free-trial-quickstart"
keywords:
  - "federated"
  - "cross"
  - "querying"
  - "regional"
  - "supports"
  - "queries"
---

# Cross-regional federated queries from BigQuery to Spanner

Product: Spanner
Coverage: LOW

## Step 02 Summary

Spanner supports querying Spanner tables from BigQuery in a different region than the BigQuery region through cross-region federation.

## Extended Definition

Spanner supports querying Spanner tables from BigQuery in a different region than the BigQuery region through cross-region federation.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/columnar-engine](https://docs.cloud.google.com/spanner/docs/columnar-engine)
- [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database)
- [https://docs.cloud.google.com/spanner/docs/free-trial-quickstart](https://docs.cloud.google.com/spanner/docs/free-trial-quickstart)

## Supporting Pages

### Spanner columnar engine overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/columnar-engine](https://docs.cloud.google.com/spanner/docs/columnar-engine)
- Source ID: `site-docs-root`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- Use Data Boost for federated queries .
- Workload isolation There are two techniques that you can use to isolate analytical queries from transactions: Use directed reads to route reads to read-only replicas.
- Spanner's Ressi format uses a partition attributes across (PAX) column-wise layout for efficient scans within a data block.
- For smaller data scans or queries with quickly satisfied LIMIT clauses, row-based scans might be more efficient.

### "Best practices for using Spanner as a gaming database \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database)
- Source ID: `site-docs-root`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- The updated command for creating the table and index looks like this: CREATE TABLE Player ( PlayerID STRING ( 36 ) NOT NULL , IndexPartition INT64 NOT NULL Attribute INT64 NOT NULL ) PRIMARY KEY ( PlayerID ) CREATE INDEX idx attribute ON Player ( IndexPartition , Attribute ) The IndexPartition value needs to have a limited range for efficient querying, but it should also have range that is at least double the number of splits for efficient distribution.
- In load tests, this model does an acceptable job of distributing the secondary index read and write load across multiple Spanner splits, as illustrated in the following diagram: Although the synthetic data used in the load test is similar to the eventual steady state of the game where Attribute values are well distributed, the game design dictates that all players start with Attribute=50 .
- If you change the order of the previous index, you can solve this hotspot problem: CREATE INDEX idx score ranking ON Ranking ( Score DESC , GameMode ) This index won't create a significant hotspot from players competing in the same game mode, provided their scores are distributed across the possible range.
- In order to speed up queries that filter for the game mode, consider the following index: CREATE INDEX idx score ranking ON Ranking ( GameMode , Score DESC ) If everyone plays the same game mode called 1 , this index creates a hotspot where GameMode=1 .

### "Create a Spanner free trial instance and sample application \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/free-trial-quickstart](https://docs.cloud.google.com/spanner/docs/free-trial-quickstart)
- Source ID: `site-docs-root`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- For example, to create a free trial instance named trial-instance with the display name Trial Instance using the regional instance configuration regional-us-east5 , run the following: gcloud spanner instances create trial - instance -- config = regional - us - east5 \ -- instance - type = free - instance -- description = "Trial Instance" Note: Use the instance ID, not the display name, when referring to an instance in gcloud CLI commands.
- Note: A Spanner free trial instance supports Standard edition features, and Enterprise edition features, such as KNN vector distance functions , full-text search , and Spanner Graph .
- You can create a free trial instance in any of the Spanner regional instance configurations : INSTANCE DESCRIPTION : the name to display for the instance in the Google Cloud console.
- If an authentication error is returned, and you are using an external identity provider (IdP), confirm that you have signed in to the gcloud CLI with your federated identity .

