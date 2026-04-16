---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.409Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "In-database merge queries"
feature_slug: "in-database-merge-queries"
latest_feature_date: "2026-02-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-general-labs"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-general-preview-features"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-database-connections"
keywords:
  - "database"
  - "merge"
  - "queries"
  - "same"
  - "bigquery"
  - "connection"
  - "can"
  - "now"
---

# In-database merge queries

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Merge queries on the same BigQuery connection can now be joined in the database instead of in Looker memory.

## Extended Definition

Merge queries on the same BigQuery connection can now be joined in the database instead of in Looker memory.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-general-labs](https://docs.cloud.google.com/looker/docs/admin-panel-general-labs)
- [https://docs.cloud.google.com/looker/docs/admin-panel-general-preview-features](https://docs.cloud.google.com/looker/docs/admin-panel-general-preview-features)
- [https://docs.cloud.google.com/looker/docs/admin-panel-database-connections](https://docs.cloud.google.com/looker/docs/admin-panel-database-connections)

## Supporting Pages

### Admin settings - Preview Features \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-general-labs](https://docs.cloud.google.com/looker/docs/admin-panel-general-labs)
- Source ID: `site-docs-reference`
- Final score: 151
- Re-rank relevance: N/A

Evidence snippets:
- When the In-database merge queries feature is enabled and both queries are from the same BigQuery connection, the join of the queries is run in the BigQuery database itself.
- This feature improves performance and allows for unlimited rows of data being joined for merged queries when both queries being merged use the same BigQuery connection.
- In-database merge queries This Labs feature is disabled by default.
- When the BI Engine Symmetric Aggregates feature is enabled, for queries that use symmetric aggregates , Looker generates experimental SQL patterns that execute faster on the BigQuery BI Engine.

### Admin settings - Preview Features \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-general-preview-features](https://docs.cloud.google.com/looker/docs/admin-panel-general-preview-features)
- Source ID: `site-docs-reference`
- Final score: 151
- Re-rank relevance: N/A

Evidence snippets:
- When the In-database merge queries feature is enabled and both queries are from the same BigQuery connection, the join of the queries is run in the BigQuery database itself.
- This feature improves performance and allows for unlimited rows of data being joined for merged queries when both queries being merged use the same BigQuery connection.
- In-database merge queries This Labs feature is disabled by default.
- When the BI Engine Symmetric Aggregates feature is enabled, for queries that use symmetric aggregates , Looker generates experimental SQL patterns that execute faster on the BigQuery BI Engine.

### Admin settings - Connections \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-database-connections](https://docs.cloud.google.com/looker/docs/admin-panel-database-connections)
- Source ID: `site-docs-reference-required-4`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- The same page that you use to create a connection will appear (described on the Connecting Looker to your database documentation page), but with the relevant information already filled out.
- Show Databases This option brings you to a Looker Explore page that lets you create Looker Explore queries based on the metadata of your connection.
- Database connections that use OAuth, such as Snowflake and Google BigQuery , require a user login.
- Actions available for some connections Depending on the connection dialect, the gear drop-down menu to the right of the connection may offer the following additional options: Option Description Show Tables This option brings you to a Looker Explore page that lets you create Looker Explore queries based on the metadata of your connection.

