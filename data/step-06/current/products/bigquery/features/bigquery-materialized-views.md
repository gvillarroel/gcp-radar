---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.796Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery materialized views"
feature_slug: "bigquery-materialized-views"
latest_feature_date: "2021-02-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/salesforce-quickstart"
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "precomputed query results"
  - "periodic refresh"
  - "MVs"
  - "incremental refresh"
  - "CREATE MATERIALIZED VIEW"
  - "materialized query view"
  - "materialized views"
  - "materialized view"
---

# BigQuery materialized views

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery materialized views became generally available as precomputed, periodically refreshed query-result caches; BigQuery materialized views became available in beta.

## Extended Definition

BigQuery materialized views became generally available as precomputed, periodically refreshed query-result caches; BigQuery materialized views became available in beta.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/salesforce-quickstart](https://docs.cloud.google.com/bigquery/docs/salesforce-quickstart)
- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 68
- Re-rank relevance: N/A

Evidence snippets:
- NAME and VALUE must be one of the following combinations: NAME VALUE Details enable refresh BOOLEAN Example: enable refresh=false Default: true refresh interval minutes FLOAT64 Example: refresh interval minutes=20 Default: refresh interval minutes=30 expiration timestamp TIMESTAMP Example: expiration timestamp=TIMESTAMP "2025-01-01 00:00:00 UTC" This property is equivalent to the expirationTime table resource property. expiration timestamp is optional and not used by default. max staleness INTERVAL Example: max staleness=INTERVAL "4:0:0" HOUR TO SECOND The max staleness property provides consistently high performance with controlled costs when processing large, frequently changing datasets. max staleness is disabled by default. allow non incremental definition BOOLEAN Example: allow non incremental definition=true The allow non incremental definition property supports an expanded range of SQL queries to create materialized views. allow non incremental definition=true is disabled by default.
- NAME and VALUE must be one of the following combinations: NAME VALUE Details enable refresh BOOLEAN Example: enable refresh=false Default: true refresh interval minutes FLOAT64 Example: refresh interval minutes=20 Default: refresh interval minutes=30 expiration timestamp TIMESTAMP Example: expiration timestamp=TIMESTAMP "2025-01-01 00:00:00 UTC" This property is equivalent to the expirationTime table resource property. expiration timestamp is optional and not used by default. max staleness INTERVAL Example: max staleness=INTERVAL "4:0:0" HOUR TO SECOND The max staleness property provides consistently high performance with controlled costs when processing large, frequently changing datasets. max staleness is disabled by default. allow non incremental definition BOOLEAN Example: allow non incremental definition=true The allow non incremental definition property supports an expanded range of SQL queries to create materialized views. allow non incremental definition=true is disabled by default.
- CREATE MATERIALIZED VIEW IF NOT EXISTS myproject . mydataset . new mv OPTIONS ( expiration timestamp = TIMESTAMP ADD ( CURRENT TIMESTAMP (), INTERVAL 48 HOUR ), friendly name = "new mv" , description = "a view that expires in 2 days" , labels =[ ( "org unit" , "development" ) ] , enable refresh = false ) AS SELECT column 1 , column 2 , column 3 FROM myproject.mydataset.mytable The materialized view is defined using the following GoogleSQL query: SELECT column 1, column 2, column 3 FROM myproject.mydataset.mytable The materialized view option list specifies the: Expiration time: 48 hours from the time the view is created Friendly name: new mv Description: A view that expires in 2 days Label: org unit = development Refresh enabled: false Creating a materialized view with partitioning and clustering The following example creates a materialized view named new mv in mydataset , partitioned by the col datetime column and clustered by the col int column: CREATE MATERIALIZED VIEW myproject . mydataset . new mv PARTITION BY DATE ( col datetime ) CLUSTER BY col int AS SELECT col int , col datetime , COUNT ( 1 ) as cnt FROM myproject . mydataset . mv base table GROUP BY col int , col datetime The base table, mv base table , must also be partitioned by the col datetime column.
- Examples Creating a new materialized view The following example creates a materialized view named new mv in mydataset : CREATE MATERIALIZED VIEW myproject . mydataset . new mv OPTIONS ( expiration timestamp = TIMESTAMP ADD ( CURRENT TIMESTAMP (), INTERVAL 48 HOUR ), friendly name = "new mv" , description = "a materialized view that expires in 2 days" , labels =[ ( "org unit" , "development" ) ] , enable refresh = true , refresh interval minutes = 20 ) AS SELECT column 1 , SUM ( column 2 ) AS sum 2 , AVG ( column 3 ) AS avg 3 FROM myproject.mydataset.mytable GROUP BY column 1 If the materialized view name exists in the dataset, the following error is returned: Already Exists: project id:dataset.materialized view When you use a DDL statement to create a materialized view, you must specify the project, dataset, and materialized view in the following format: project id.dataset.materialized view (including the backticks if project id contains special characters); for example, myproject.mydataset.new mv .

### Work with Salesforce Data Cloud data in BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/salesforce-quickstart](https://docs.cloud.google.com/bigquery/docs/salesforce-quickstart)
- Source ID: `site-docs-root-2`
- Final score: 56
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create a local materialized view To create a local materialized view: -- Create a local materialized view that keeps track of total sales by day CREATE MATERIALIZED VIEW aws data.total sales OPTIONS ( enable refresh = true , refresh interval minutes = 60 ) AS SELECT EXTRACT ( DAY FROM order time ) AS date , SUM ( order total ) as sales FROM listing nto john.nto orders dll GROUP BY 1 ; Authorize the materialized view You must authorize materialized views to create a CCMV.
- CREATE MATERIALIZED VIEW us data.total sales replica AS REPLICA OF aws data.total sales ; Run a query on a replica materialized view The following example runs a query on a replica materialized view: -- Find total sales for the current month for the dashboard SELECT EXTRACT ( MONTH FROM CURRENT DATE ()) as month , SUM ( sales ) FROM us data . total sales replica WHERE month = EXTRACT ( MONTH FROM date ) GROUP BY 1 Using Data Cloud data with INFORMATION SCHEMA Data Cloud datasets support BigQuery INFORMATION SCHEMA views.
- Cross cloud materialized views Cross Cloud Materialized Views ( CCMV ) transfer data from a BigQuery Omni region to a non-BigQuery Omni BigQuery region incrementally.
- Learn about materialized views .

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 48
- Re-rank relevance: N/A

Evidence snippets:
- This pricing update applies to the following third-party connectors when they are generally available (GA) : Facebook Ads MySQL Oracle PostgreSQL Salesforce Salesforce Marketing Cloud ServiceNow Other third-party connectors planned for future releases August 18, 2025 Libraries Java 2.54.1 (2025-08-13) Bug Fixes Adapt graalvm config to arrow update ( #3928 ) ( ecfabc4 ) Dependencies Update dependency com.google.cloud:sdk-platform-java-config to v3.51.0 ( #3924 ) ( cb66be5 ) Feature In the BigQuery console, you can now use the Reference panel to do the following: In the query editor, you can use the Reference panel to preview the schema details of tables, snapshots, views, and materialized views, or open these resources in a new tab.
- June 09, 2025 Libraries Java 2.51.0 (2025-06-06) Features bigquery: Job creation mode GA ( #3804 ) ( a21cde8 ) bigquery: Support Fine Grained ACLs for Datasets ( #3803 ) ( bebf1c6 ) Dependencies Rollback netty.version to v4.1.119.Final ( #3827 ) ( 94c71a0 ) Update dependency com.google.api.grpc:proto-google-cloud-bigqueryconnection-v1 to v2.65.0 ( #3787 ) ( 0574ecc ) Update dependency com.google.apis:google-api-services-bigquery to v2-rev20250511-2.0.0 ( #3794 ) ( d3bf724 ) Update dependency com.google.cloud:sdk-platform-java-config to v3.49.0 ( #3811 ) ( 2c5ede4 ) Feature You can reference Iceberg external tables in materialized views instead of migrating that data to BigQuery-managed storage.
- In the notebook editor, you can use the Reference panel to preview the schema details of tables, snapshots, views, or materialized views, or open these resources in a new tab.
- Feature Smart-tuning is now supported for materialized views when they are in the same project as one of their base tables, or when they are in the project running the query.

