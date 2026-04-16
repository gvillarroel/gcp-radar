---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.252Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Interactive SQL translator"
feature_slug: "interactive-sql-translator"
latest_feature_date: "2025-11-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/batch-sql-translator"
  - "https://docs.cloud.google.com/bigquery/docs/config-yaml-translation"
  - "https://docs.cloud.google.com/bigquery/docs/locations"
keywords:
  - "interactive"
  - "sql"
  - "translator"
  - "converts"
  - "dialects"
  - "such"
  - "apache"
  - "impala"
---

# Interactive SQL translator

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The interactive SQL translator converts supported SQL dialects such as Apache Impala SQL into GoogleSQL in an interactive workflow; BigQuery Migration Service includes an Interactive SQL Translator for translating SQL interactively.

## Extended Definition

The interactive SQL translator converts supported SQL dialects such as Apache Impala SQL into GoogleSQL in an interactive workflow; BigQuery Migration Service includes an Interactive SQL Translator for translating SQL interactively.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/batch-sql-translator](https://docs.cloud.google.com/bigquery/docs/batch-sql-translator)
- [https://docs.cloud.google.com/bigquery/docs/config-yaml-translation](https://docs.cloud.google.com/bigquery/docs/config-yaml-translation)
- [https://docs.cloud.google.com/bigquery/docs/locations](https://docs.cloud.google.com/bigquery/docs/locations)

## Supporting Pages

### "Migrate code with the batch SQL translator \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/batch-sql-translator](https://docs.cloud.google.com/bigquery/docs/batch-sql-translator)
- Source ID: `site-docs-reference-5`
- Final score: 209
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The batch SQL translator can translate the following SQL dialects into GoogleSQL: Amazon Redshift SQL Apache HiveQL and Beeline CLI IBM Netezza SQL and NZPLSQL Teradata and Teradata Vantage: SQL Basic Teradata Query (BTEQ) Teradata Parallel Transport (TPT) Additionally, translation of the following SQL dialects is supported in preview : Apache Impala SQL Apache Spark SQL Azure Synapse T-SQL GoogleSQL (BigQuery) Greenplum SQL IBM DB2 SQL MySQL SQL Oracle SQL, PL/SQL, Exadata PostgreSQL SQL Trino or PrestoSQL Snowflake SQL SQL Server T-SQL SQLite Vertica SQL Important: Translation is done on a best effort basis.
- What's next Learn more about the following steps in data warehouse migration: Migration overview Migration assessment Schema and data transfer overview Data pipelines Interactive SQL translation Data security and governance Data validation tool Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Debug batch translated SQL queries with the interactive SQL translator You can use the BigQuery interactive SQL translator to review or debug a SQL query using the same metadata or object mapping information as your source database.
- To debug a batch translation file in the interactive SQL translator, follow these steps: In the Google Cloud console, go to the SQL Translation page.

### "Transform SQL translations using configuration YAML files \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/config-yaml-translation](https://docs.cloud.google.com/bigquery/docs/config-yaml-translation)
- Source ID: `site-docs-reference-5`
- Final score: 179
- Re-rank relevance: N/A

Evidence snippets:
- This configuration is enabled by default for the Snowflake Dialect. type : optimizer transformations : - name : REWRITE ZERO SCALE NUMERIC AS INTEGER parameters : bigint : 38 A SQL translation with this optimization might look like the following: snowflake-input.sql CREATE TABLE numbers ( i INTEGER , n NUMERIC ( 10 , 0 )); bq-output.sql CREATE TABLE numbers ( i INT64 , n INT64 ); The following configuration disables the optimization in dialects, such as Snowflake, where it is enabled by default.
- You can specify a configuration YAML file to use in a SQL translation in the following ways: If you are using the interactive SQL translator, specify the file path to the configuration file or batch translation job ID in the translation settings .
- The interactive SQL translator, BigQuery Migration API, the batch SQL translator, and the batch translation Python client supports the use of multiple configuration YAML files in a single translation job.
- When using the BigQuery interactive SQL translator , using the BigQuery Migration API , or performing a batch SQL translation , you can provide configuration YAML files to modify a SQL query translation.

### BigQuery locations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/locations](https://docs.cloud.google.com/bigquery/docs/locations)
- Source ID: `site-docs-root`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- BigQuery SQL translator locations When migrating data from your legacy data warehouse into BigQuery, you can use several SQL translators to translate your SQL queries into GoogleSQL or other supported SQL dialects.
- These include the interactive SQL translator , the SQL translation API , and the batch SQL translator .
- The BigQuery SQL translators are available in the following processing locations: Region description Region name Details Asia Pacific Bangkok asia-southeast3 Delhi asia-south2 Hong Kong asia-east2 Jakarta asia-southeast2 Melbourne australia-southeast2 Mumbai asia-south1 Osaka asia-northeast2 Seoul asia-northeast3 Singapore asia-southeast1 Sydney australia-southeast1 Taiwan asia-east1 Tokyo asia-northeast1 Europe Belgium europe-west1 Low CO 2 Berlin europe-west10 EU multi-region eu Finland europe-north1 Low CO 2 Frankfurt europe-west3 London europe-west2 Low CO 2 Madrid europe-southwest1 Low CO 2 Milan europe-west8 Netherlands europe-west4 Low CO 2 Paris europe-west9 Low CO 2 Stockholm europe-north2 Low CO 2 Turin europe-west12 Warsaw europe-central2 Zürich europe-west6 Low CO 2 Americas Columbus, Ohio us-east5 Dallas us-south1 Low CO 2 Iowa us-central1 Low CO 2 Las Vegas us-west4 Los Angeles us-west2 Mexico northamerica-south1 Northern Virginia us-east4 Oregon us-west1 Low CO 2 Québec northamerica-northeast1 Low CO 2 São Paulo southamerica-east1 Low CO 2 Salt Lake City us-west3 Santiago southamerica-west1 Low CO 2 South Carolina us-east1 Toronto northamerica-northeast2 Low CO 2 US multi-region us Africa Johannesburg africa-south1 MiddleEast Dammam me-central2 Doha me-central1 Israel me-west1 BigQuery continuous query locations The following table lists the regions where continuous queries are supported: Region description Region name Details Americas US multi-region us Columbus us-east5 Dallas us-south1 Low CO 2 Iowa us-central1 Low CO 2 Las Vegas us-west4 Los Angeles us-west2 Mexico northamerica-south1 Montréal northamerica-northeast1 Low CO 2 Northern Virginia us-east4 Oklahoma us-central2 Low CO 2 Oregon us-west1 Low CO 2 Salt Lake City us-west3 Santiago southamerica-west1 Low CO 2 São Paulo southamerica-east1 Low CO 2 South Carolina us-east1 Toronto northamerica-northeast2 Low CO 2 Asia Pacific Delhi asia-south2 Hong Kong asia-east2 Jakarta asia-southeast2 Melbourne australia-southeast2 Mumbai asia-south1 Osaka asia-northeast2 Seoul asia-northeast3 Singapore asia-southeast1 Sydney australia-southeast1 Taiwan asia-east1 Tokyo asia-northeast1 Europe EU multi-region eu Belgium europe-west1 Low CO 2 Berlin europe-west10 Finland europe-north1 Low CO 2 Frankfurt europe-west3 London europe-west2 Low CO 2 Madrid europe-southwest1 Low CO 2 Milan europe-west8 Netherlands europe-west4 Low CO 2 Paris europe-west9 Low CO 2 Stockholm europe-north2 Low CO 2 Turin europe-west12 Warsaw europe-central2 Zurich europe-west6 Low CO 2 Middle East Doha me-central1 Dammam me-central2 Tel Aviv me-west1 Africa Johannesburg africa-south1 BigQuery partition and cluster recommender locations The BigQuery partitioning and clustering recommender generates partition or cluster recommendations to optimize your BigQuery tables.
- Analysis tools Colocate your BigQuery dataset with your analysis tools : Managed Service for Apache Spark : When you query BigQuery datasets using a BigQuery connector , your BigQuery dataset should be colocated with your Managed Service for Apache Spark cluster.

