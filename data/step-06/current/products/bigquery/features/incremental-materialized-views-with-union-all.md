---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.485Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Incremental materialized views with UNION ALL"
feature_slug: "incremental-materialized-views-with-union-all"
latest_feature_date: "2024-03-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/salesforce-quickstart"
  - "https://docs.cloud.google.com/bigquery/docs/authorized-views"
keywords:
  - "incremental"
  - "materialized"
  - "views"
  - "union"
  - "all"
  - "queries"
---

# Incremental materialized views with UNION ALL

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Incremental materialized views support UNION ALL queries.

## Extended Definition

Incremental materialized views support UNION ALL queries.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/salesforce-quickstart](https://docs.cloud.google.com/bigquery/docs/salesforce-quickstart)
- [https://docs.cloud.google.com/bigquery/docs/authorized-views](https://docs.cloud.google.com/bigquery/docs/authorized-views)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- NAME and VALUE must be one of the following combinations: NAME VALUE Details enable refresh BOOLEAN Example: enable refresh=false Default: true refresh interval minutes FLOAT64 Example: refresh interval minutes=20 Default: refresh interval minutes=30 expiration timestamp TIMESTAMP Example: expiration timestamp=TIMESTAMP "2025-01-01 00:00:00 UTC" This property is equivalent to the expirationTime table resource property. expiration timestamp is optional and not used by default. max staleness INTERVAL Example: max staleness=INTERVAL "4:0:0" HOUR TO SECOND The max staleness property provides consistently high performance with controlled costs when processing large, frequently changing datasets. max staleness is disabled by default. allow non incremental definition BOOLEAN Example: allow non incremental definition=true The allow non incremental definition property supports an expanded range of SQL queries to create materialized views. allow non incremental definition=true is disabled by default.
- NAME and VALUE must be one of the following combinations: NAME VALUE Details enable refresh BOOLEAN Example: enable refresh=false Default: true refresh interval minutes FLOAT64 Example: refresh interval minutes=20 Default: refresh interval minutes=30 expiration timestamp TIMESTAMP Example: expiration timestamp=TIMESTAMP "2025-01-01 00:00:00 UTC" This property is equivalent to the expirationTime table resource property. expiration timestamp is optional and not used by default. max staleness INTERVAL Example: max staleness=INTERVAL "4:0:0" HOUR TO SECOND The max staleness property provides consistently high performance with controlled costs when processing large, frequently changing datasets. max staleness is disabled by default. allow non incremental definition BOOLEAN Example: allow non incremental definition=true The allow non incremental definition property supports an expanded range of SQL queries to create materialized views. allow non incremental definition=true is disabled by default.
- Example The following example deletes the my cloud resource connection connection: DROP CONNECTION IF EXISTS us.my cloud resource connection ; Table path syntax Use the following syntax when specifying the path of a table resource , including standard tables, views, materialized views, external tables, and table snapshots. table path := [[ project name . ] dataset name . ] table name project name : The name of the project that contains the table resource.
- The allow non incremental definition property can't be changed after the materialized view is created. kms key name STRING Example: kms key name="projects/ project id /locations/ location /keyRings/ keyring /cryptoKeys/ key " This property is equivalent to the encryptionConfiguration.kmsKeyName table resource property.

### Work with Salesforce Data Cloud data in BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/salesforce-quickstart](https://docs.cloud.google.com/bigquery/docs/salesforce-quickstart)
- Source ID: `site-docs-reference-2`
- Final score: 118
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cross cloud materialized views Cross Cloud Materialized Views ( CCMV ) transfer data from a BigQuery Omni region to a non-BigQuery Omni BigQuery region incrementally.
- CREATE MATERIALIZED VIEW us data.total sales replica AS REPLICA OF aws data.total sales ; Run a query on a replica materialized view The following example runs a query on a replica materialized view: -- Find total sales for the current month for the dashboard SELECT EXTRACT ( MONTH FROM CURRENT DATE ()) as month , SUM ( sales ) FROM us data . total sales replica WHERE month = EXTRACT ( MONTH FROM date ) GROUP BY 1 Using Data Cloud data with INFORMATION SCHEMA Data Cloud datasets support BigQuery INFORMATION SCHEMA views.
- Create a local materialized view To create a local materialized view: -- Create a local materialized view that keeps track of total sales by day CREATE MATERIALIZED VIEW aws data.total sales OPTIONS ( enable refresh = true , refresh interval minutes = 60 ) AS SELECT EXTRACT ( DAY FROM order time ) AS date , SUM ( order total ) as sales FROM listing nto john.nto orders dll GROUP BY 1 ; Authorize the materialized view You must authorize materialized views to create a CCMV.
- Learn about materialized views .

### Authorized views \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/authorized-views](https://docs.cloud.google.com/bigquery/docs/authorized-views)
- Source ID: `site-docs-reference-5`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- Combine row-level security with authorized views The data displayed in a logical view or a materialized view is filtered according to the underlying source table's row-level access policies.
- High-level steps for creating authorized views To create and share a view, review these high-level steps, which are the same for authorized logical views and authorized materialized views.
- Before you begin Grant Identity and Access Management (IAM) roles that give users the necessary permissions to query the authorized views or authorized materialized views that you share.
- For details about how row-level security interacts with materialized views, see Use row-level security with other BigQuery features .

