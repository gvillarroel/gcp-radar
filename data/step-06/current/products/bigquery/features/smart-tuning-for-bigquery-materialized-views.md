---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.440Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Smart tuning for BigQuery materialized views"
feature_slug: "smart-tuning-for-bigquery-materialized-views"
latest_feature_date: "2025-04-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "smart-tuned views"
  - "automatic maintenance"
  - "smart tuning"
  - "same project as base table"
  - "BigQuery materialized views"
  - "automatic tuning"
  - "materialized view"
  - "query-project"
---

# Smart tuning for BigQuery materialized views

Product: BigQuery
Coverage: LOW

## Step 02 Summary

Smart-tuning is now available for BigQuery materialized views when they are in the same project as a base table or in the query-project.

## Extended Definition

BigQuery materialized views expose options for automatic maintenance, including `enable refresh` (defaulting to true), configurable refresh interval values (default 30 minutes), and `max staleness` in SQL DDL and CLI settings. These controls are part of materialized view configuration and behavior for performance/cost management. Based on the provided excerpts, there is insufficient direct evidence that specifically describes "smart tuning," automatic tuning by name, or the cross-project/same-project constraints stated in the feature summary.

## Evidence Summary

The DDL and bq CLI docs confirm materialized view maintenance options (refresh enablement, refresh interval, max staleness), while the provided release-notes snippets do not include explicit mentions of smart tuning or project-placement requirements.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- CREATE MATERIALIZED VIEW IF NOT EXISTS myproject . mydataset . new mv OPTIONS ( expiration timestamp = TIMESTAMP ADD ( CURRENT TIMESTAMP (), INTERVAL 48 HOUR ), friendly name = "new mv" , description = "a view that expires in 2 days" , labels =[ ( "org unit" , "development" ) ] , enable refresh = false ) AS SELECT column 1 , column 2 , column 3 FROM myproject.mydataset.mytable The materialized view is defined using the following GoogleSQL query: SELECT column 1, column 2, column 3 FROM myproject.mydataset.mytable The materialized view option list specifies the: Expiration time: 48 hours from the time the view is created Friendly name: new mv Description: A view that expires in 2 days Label: org unit = development Refresh enabled: false Creating a materialized view with partitioning and clustering The following example creates a materialized view named new mv in mydataset , partitioned by the col datetime column and clustered by the col int column: CREATE MATERIALIZED VIEW myproject . mydataset . new mv PARTITION BY DATE ( col datetime ) CLUSTER BY col int AS SELECT col int , col datetime , COUNT ( 1 ) as cnt FROM myproject . mydataset . mv base table GROUP BY col int , col datetime The base table, mv base table , must also be partitioned by the col datetime column.
- Examples Creating a new materialized view The following example creates a materialized view named new mv in mydataset : CREATE MATERIALIZED VIEW myproject . mydataset . new mv OPTIONS ( expiration timestamp = TIMESTAMP ADD ( CURRENT TIMESTAMP (), INTERVAL 48 HOUR ), friendly name = "new mv" , description = "a materialized view that expires in 2 days" , labels =[ ( "org unit" , "development" ) ] , enable refresh = true , refresh interval minutes = 20 ) AS SELECT column 1 , SUM ( column 2 ) AS sum 2 , AVG ( column 3 ) AS avg 3 FROM myproject.mydataset.mytable GROUP BY column 1 If the materialized view name exists in the dataset, the following error is returned: Already Exists: project id:dataset.materialized view When you use a DDL statement to create a materialized view, you must specify the project, dataset, and materialized view in the following format: project id.dataset.materialized view (including the backticks if project id contains special characters); for example, myproject.mydataset.new mv .
- NAME and VALUE must be one of the following combinations: NAME VALUE Details enable refresh BOOLEAN Example: enable refresh=false Default: true refresh interval minutes FLOAT64 Example: refresh interval minutes=20 Default: refresh interval minutes=30 expiration timestamp TIMESTAMP Example: expiration timestamp=TIMESTAMP "2025-01-01 00:00:00 UTC" This property is equivalent to the expirationTime table resource property. expiration timestamp is optional and not used by default. max staleness INTERVAL Example: max staleness=INTERVAL "4:0:0" HOUR TO SECOND The max staleness property provides consistently high performance with controlled costs when processing large, frequently changing datasets. max staleness is disabled by default. allow non incremental definition BOOLEAN Example: allow non incremental definition=true The allow non incremental definition property supports an expanded range of SQL queries to create materialized views. allow non incremental definition=true is disabled by default.
- NAME and VALUE must be one of the following combinations: NAME VALUE Details enable refresh BOOLEAN Example: enable refresh=false Default: true refresh interval minutes FLOAT64 Example: refresh interval minutes=20 Default: refresh interval minutes=30 expiration timestamp TIMESTAMP Example: expiration timestamp=TIMESTAMP "2025-01-01 00:00:00 UTC" This property is equivalent to the expirationTime table resource property. expiration timestamp is optional and not used by default. max staleness INTERVAL Example: max staleness=INTERVAL "4:0:0" HOUR TO SECOND The max staleness property provides consistently high performance with controlled costs when processing large, frequently changing datasets. max staleness is disabled by default. allow non incremental definition BOOLEAN Example: allow non incremental definition=true The allow non incremental definition property supports an expanded range of SQL queries to create materialized views. allow non incremental definition=true is disabled by default.

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Your selection specifies the type of resource to create. --capacity commitment : Purchase a capacity commitment. --connection : Create a connection. --dataset or -d : Create a dataset. --materialized view : Create a materialized view. --reservation : Create a reservation. --reservation assignment .
- For more information, see Idle slots . --max staleness= INTERVAL Specifies an INTERVAL value that determines the maximum staleness allowed when querying a materialized view or an external table.
- The default when creating a materialized view is true . --refresh interval ms= MILLISECONDS Specifies the number of milliseconds for the refresh interval of a materialized view.
- If this flag is not specified, then the default refresh interval for a materialized view that has refresh enabled is 1,800,000 milliseconds, which is 30 minutes.

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- Features Add property for allowNonIncrementalDefinition for materialized view ( #2084 ) ( 3359ef3 ) Add property for maxStaleness in table definitions ( #2087 ) ( 729322c ) Add type hints to Client ( #2044 ) ( 40529de ) Adds ExternalCatalogDatasetOptions and tests ( #2111 ) ( b929a90 ) Adds ForeignTypeInfo class and tests ( #2110 ) ( 55ca63c ) Adds new input validation function similar to isinstance. ( #2107 ) ( a2bebb9 ) Adds StorageDescriptor and tests ( #2109 ) ( 6be0272 ) Adds the SerDeInfo class and tests ( #2108 ) ( 62960f2 ) Migrate to pyproject.toml ( #2041 ) ( 1061611 ) Preserve unknown fields from the REST API representation in SchemaField ( #2097 ) ( aaf1eb8 ) Resource tags in dataset ( #2090 ) ( 3e13016 ) Support setting max stream count when fetching query result ( #2051 ) ( d461297 ) Bug Fixes Allow geopandas 1.x ( #2065 ) ( f2ab8cb ) Documentation Render fields correctly for update calls ( #2055 ) ( a4d9534 ) Libraries Java 2.46.0 (2025-01-11) Features bigquery: Support IAM conditions in datasets in Java client. ( #3602 ) ( 6696a9c ) Bug Fixes NPE when reading BigQueryResultSet from empty tables ( #3627 ) ( 9a0b05a ) test: Force usage of ReadAPI ( #3625 ) ( 5ca7d4a ) Dependencies Update actions/upload-artifact action to v4.5.0 ( #3620 ) ( cc25099 ) Update actions/upload-artifact action to v4.6.0 ( #3633 ) ( ca20aa4 ) Update dependency com.google.api.grpc:proto-google-cloud-bigqueryconnection-v1 to v2.57.0 ( #3617 ) ( 51370a9 ) Update dependency com.google.api.grpc:proto-google-cloud-bigqueryconnection-v1 to v2.58.0 ( #3631 ) ( b0ea0d5 ) Update dependency com.google.apis:google-api-services-bigquery to v2-rev20241222-2.0.0 ( #3623 ) ( 4061922 ) Update dependency com.google.cloud:google-cloud-datacatalog-bom to v1.61.0 ( #3618 ) ( 6cba626 ) Update dependency com.google.cloud:google-cloud-datacatalog-bom to v1.62.0 ( #3632 ) ( e9ff265 ) Update dependency com.google.cloud:sdk-platform-java-config to v3.41.1 ( #3628 ) ( 442d217 ) Update dependency com.google.oauth-client:google-oauth-client-java6 to v1.37.0 ( #3614 ) ( f5faa69 ) Update dependency com.google.oauth-client:google-oauth-client-jetty to v1.37.0 ( #3615 ) ( a6c7944 ) Update github/codeql-action action to v2.27.9 ( #3608 ) ( 567ce01 ) Update github/codeql-action action to v2.28.0 ( #3621 ) ( e0e09ec ) January 17, 2025 Feature In the navigation menu , you can now go to the Settings page to set default settings that are applied when you start a session in BigQuery Studio.
- This pricing update applies to the following third-party connectors when they are generally available (GA) : Facebook Ads MySQL Oracle PostgreSQL Salesforce Salesforce Marketing Cloud ServiceNow Other third-party connectors planned for future releases August 18, 2025 Libraries Java 2.54.1 (2025-08-13) Bug Fixes Adapt graalvm config to arrow update ( #3928 ) ( ecfabc4 ) Dependencies Update dependency com.google.cloud:sdk-platform-java-config to v3.51.0 ( #3924 ) ( cb66be5 ) Feature In the BigQuery console, you can now use the Reference panel to do the following: In the query editor, you can use the Reference panel to preview the schema details of tables, snapshots, views, and materialized views, or open these resources in a new tab.
- June 09, 2025 Libraries Java 2.51.0 (2025-06-06) Features bigquery: Job creation mode GA ( #3804 ) ( a21cde8 ) bigquery: Support Fine Grained ACLs for Datasets ( #3803 ) ( bebf1c6 ) Dependencies Rollback netty.version to v4.1.119.Final ( #3827 ) ( 94c71a0 ) Update dependency com.google.api.grpc:proto-google-cloud-bigqueryconnection-v1 to v2.65.0 ( #3787 ) ( 0574ecc ) Update dependency com.google.apis:google-api-services-bigquery to v2-rev20250511-2.0.0 ( #3794 ) ( d3bf724 ) Update dependency com.google.cloud:sdk-platform-java-config to v3.49.0 ( #3811 ) ( 2c5ede4 ) Feature You can reference Iceberg external tables in materialized views instead of migrating that data to BigQuery-managed storage.
- In the notebook editor, you can use the Reference panel to preview the schema details of tables, snapshots, views, or materialized views, or open these resources in a new tab.

