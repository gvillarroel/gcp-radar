---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.307Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Data clean room query templates"
feature_slug: "data-clean-room-query-templates"
latest_feature_date: "2025-08-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/analysis-rules"
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-view-subscribe-listings"
  - "https://docs.cloud.google.com/bigquery/docs/information-schema-datasets-schemata-links"
keywords:
  - "clean"
  - "room"
  - "query"
  - "templates"
  - "bigquery"
  - "rooms"
  - "predefine"
  - "restrict"
---

# Data clean room query templates

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery data clean rooms support query templates to predefine and restrict runnable queries.

## Extended Definition

BigQuery data clean rooms support query templates to predefine and restrict runnable queries.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/analysis-rules](https://docs.cloud.google.com/bigquery/docs/analysis-rules)
- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-view-subscribe-listings](https://docs.cloud.google.com/bigquery/docs/analytics-hub-view-subscribe-listings)
- [https://docs.cloud.google.com/bigquery/docs/information-schema-datasets-schemata-links](https://docs.cloud.google.com/bigquery/docs/information-schema-datasets-schemata-links)

## Supporting Pages

### "Restrict data access using analysis rules \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/analysis-rules](https://docs.cloud.google.com/bigquery/docs/analysis-rules)
- Source ID: `site-docs-reference-2`
- Final score: 194
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Preview Parameter-driven privacy budgeting for differential privacy is in preview while differential privacy enforcement in BigQuery data clean rooms is now generally available (GA).
- You can define a differential privacy analysis rule for a view in a data clean room or with the CREATE VIEW statement: CREATE OR REPLACE VIEW VIEW NAME OPTIONS ( privacy policy = ' '' { "differential privacy policy": { "privacy unit column": " PRIVACY UNIT COLUMN ", "max epsilon per query": MAX EPSILON PER QUERY , "epsilon budget": EPSILON BUDGET , "delta per query": DELTA PER QUERY , "delta budget": DELTA BUDGET , "max groups contributed": MAX GROUPS CONTRIBUTED }, "join restriction policy": { "join condition": " JOIN CONDITION ", "join allowed columns": JOIN ALLOWED COLUMNS } } '' ' ) AS QUERY ; Definitions: differential privacy policy : The differential privacy policy for the differential privacy analysis rule.
- Define an aggregation threshold analysis rule for a view You can define an aggregation threshold analysis rule for a view in a data clean room or with the CREATE VIEW statement: CREATE OR REPLACE VIEW VIEW NAME OPTIONS ( privacy policy = ' '' { "aggregation threshold policy": { "threshold" : THRESHOLD , "privacy unit column": " PRIVACY UNIT COLUMN " }, "join restriction policy": { "join condition": " JOIN CONDITION ", "join allowed columns": JOIN ALLOWED COLUMNS } } '' ' ) AS QUERY ; Definitions: aggregation threshold policy : The aggregation threshold policy for the aggregation threshold analysis rule.
- Define a list overlap analysis rule for a view You can define a list overlap analysis rule for a view in a data clean room or with the CREATE VIEW statement: CREATE OR REPLACE VIEW VIEW NAME OPTIONS ( privacy policy = ' '' { "join restriction policy": { "join condition": " JOIN CONDITION ", "join allowed columns": JOIN ALLOWED COLUMNS } } '' ' ) AS QUERY ; Definitions: join restriction policy : The join restriction policy for the list overlap analysis rule.

### "View and subscribe to listings and data exchanges \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-view-subscribe-listings](https://docs.cloud.google.com/bigquery/docs/analytics-hub-view-subscribe-listings)
- Source ID: `site-docs-root-2`
- Final score: 160
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Subscribe to data exchanges : BigQuery User ( roles/bigquery.user ) To subscribe to data exchanges in the context of data clean room exchanges, you must also ask the BigQuery sharing exchange publisher to grant you the Analytics Hub Subscriber role ( roles/analyticshub.subscriber ) on the specific data clean room.
- In the Filters section, you can filter data clean room exchanges based on the following fields: Listings : select the Clean rooms checkbox to view the data clean rooms shared with you.
- Browse through the filtered data clean rooms.
- Required roles To get the permissions that you need to use listings, ask your BigQuery sharing administrator to grant you the following Identity and Access Management (IAM) roles on the BigQuery sharing subscriber project: Discover listings : Analytics Hub Viewer ( roles/analyticshub.viewer ) Discover data exchanges : Analytics Hub Viewer ( roles/analyticshub.viewer ) Subscribe to listings : BigQuery User ( roles/bigquery.user ) To subscribe to listings, you must also ask the BigQuery sharing listing publisher to grant you the Analytics Hub Subscriber role ( roles/analyticshub.subscriber ) on their listing, exchange, or project, depending on the scope that's most appropriate for your use case.

### SCHEMATA_LINKS view \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/information-schema-datasets-schemata-links](https://docs.cloud.google.com/bigquery/docs/information-schema-datasets-schemata-links)
- Source ID: `site-docs-reference-3`
- Final score: 150
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The dataset name is also referred to as the datasetId . linked schema creation time TIMESTAMP The time when the linked dataset was created. linked schema org display name STRING The display name of the organization in which the linked dataset is created. shared asset id STRING The ID of the asset that is shared using data clean rooms.
- Each of the following predefined IAM roles includes the permissions that you need in order to query the INFORMATION SCHEMA.SCHEMATA LINKS view: roles/bigquery.admin roles/bigquery.dataEditor roles/bigquery.dataOwner roles/bigquery.dataViewer For more information about BigQuery permissions, see Access control with IAM .
- This view also contains individual resources, such as tables or views, in a project that is shared using data clean rooms .
- Possible values are REGULAR or DCR (Data clean rooms).

