---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.484Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Incremental materialized views with LEFT OUTER JOIN"
feature_slug: "incremental-materialized-views-with-left-outer-join"
latest_feature_date: "2024-03-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/salesforce-quickstart"
keywords:
  - "incremental"
  - "materialized"
  - "views"
  - "left"
  - "outer"
  - "join"
  - "queries"
---

# Incremental materialized views with LEFT OUTER JOIN

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Incremental materialized views support LEFT OUTER JOIN queries.

## Extended Definition

Incremental materialized views support LEFT OUTER JOIN queries.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/salesforce-quickstart](https://docs.cloud.google.com/bigquery/docs/salesforce-quickstart)

## Supporting Pages

### Query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `site-docs-reference`
- Final score: 145
- Re-rank relevance: N/A

Evidence snippets:
- Examples The following example shows how to use the USING clause with one column name in the column name list: WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 9 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 9 UNION ALL SELECT 9 UNION ALL SELECT 5 ) SELECT FROM A INNER JOIN B USING ( x ); / Table A Table B Result +------+ +---+ +---+ x x = x +------+ +---+ +---+ 1 2 2 2 9 9 9 9 9 NULL 5 +---+ +------+ +---+ / The following example shows how to use the USING clause with multiple column names in the column name list: WITH A AS ( SELECT 1 as x , 15 as y UNION ALL SELECT 2 , 10 UNION ALL SELECT 9 , 16 UNION ALL SELECT NULL , 12 ), B AS ( SELECT 2 as x , 10 as y UNION ALL SELECT 9 , 17 UNION ALL SELECT 9 , 16 UNION ALL SELECT 5 , 15 ) SELECT FROM A INNER JOIN B USING ( x , y ); / Table A Table B Result +-----------+ +---------+ +---------+ x y x y = x y +-----------+ +---------+ +---------+ 1 15 2 10 2 10 2 10 9 17 9 16 9 16 9 16 +---------+ NULL 12 5 15 +-----------+ +---------+ / The following examples show additional ways in which to use the USING clause with one column name in the column name list: WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 9 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 9 UNION ALL SELECT 9 UNION ALL SELECT 5 ) SELECT x , A . x , B . x FROM A INNER JOIN B USING ( x ) / Table A Table B Result +------+ +---+ +--------------------+ x x = x A.x B.x +------+ +---+ +--------------------+ 1 2 2 2 2 2 9 9 9 9 9 9 9 9 9 NULL 5 +--------------------+ +------+ +---+ / WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 9 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 9 UNION ALL SELECT 9 UNION ALL SELECT 5 ) SELECT x , A . x , B . x FROM A LEFT OUTER JOIN B USING ( x ) / Table A Table B Result +------+ +---+ +--------------------+ x x = x A.x B.x +------+ +---+ +--------------------+ 1 2 1 1 NULL 2 9 2 2 2 9 9 9 9 9 NULL 5 9 9 9 +------+ +---+ NULL NULL NULL +--------------------+ / WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 2 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 9 UNION ALL SELECT 9 UNION ALL SELECT 5 ) SELECT x , A . x , B . x FROM A RIGHT OUTER JOIN B USING ( x ) / Table A Table B Result +------+ +---+ +--------------------+ x x = x A.x B.x +------+ +---+ +--------------------+ 1 2 2 2 2 2 9 2 2 2 2 9 9 NULL 9 NULL 5 9 NULL 9 +------+ +---+ 5 NULL 5 +--------------------+ / WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 2 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 9 UNION ALL SELECT 9 UNION ALL SELECT 5 ) SELECT x , A . x , B . x FROM A FULL OUTER JOIN B USING ( x ); / Table A Table B Result +------+ +---+ +--------------------+ x x = x A.x B.x +------+ +---+ +--------------------+ 1 2 1 1 NULL 2 9 2 2 2 2 9 2 2 2 NULL 5 NULL NULL NULL +------+ +---+ 9 NULL 9 9 NULL 9 5 NULL 5 +--------------------+ / The following example shows how to use the USING clause with only some column names in the column name list.
- WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 ) SELECT A . x FROM A INNER JOIN B ON A . x = B . x ; WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 ) SELECT x FROM A INNER JOIN B USING ( x ); / Table A Table B Result ON Result USING +------+ +---+ +---+ +---+ x x = x x +------+ +---+ +---+ +---+ 1 2 2 2 2 3 3 3 3 4 +---+ +---+ NULL 5 +------+ +---+ / WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 ) SELECT A . x FROM A LEFT OUTER JOIN B ON A . x = B . x ; WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 ) SELECT x FROM A LEFT OUTER JOIN B USING ( x ); / Table A Table B Result ON Result USING +------+ +---+ +------+ +------+ x x = x x +------+ +---+ +------+ +------+ 1 2 1 1 2 3 2 2 3 4 3 3 NULL 5 NULL NULL +------+ +---+ +------+ +------+ / WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 ) SELECT A . x FROM A FULL OUTER JOIN B ON A . x = B . x ; WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 ) SELECT x FROM A FULL OUTER JOIN B USING ( x ); / Table A Table B Result ON Result USING +------+ +---+ +------+ +------+ x x = x x +------+ +---+ +------+ +------+ 1 2 1 1 2 3 2 2 3 4 3 3 NULL 5 NULL NULL +------+ +---+ NULL 4 NULL 5 +------+ +------+ / WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 ) SELECT B . x FROM A FULL OUTER JOIN B ON A . x = B . x ; WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 ) SELECT x FROM A FULL OUTER JOIN B USING ( x ); / Table A Table B Result ON Result USING +------+ +---+ +------+ +------+ x x = x x +------+ +---+ +------+ +------+ 1 2 2 1 2 3 3 2 3 4 NULL 3 NULL 5 NULL NULL +------+ +---+ 4 4 5 5 +------+ +------+ / In the following example, observe what is returned when COALESCE is used with the ON clause.
- Examples The following examples show how to use the ON clause: WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 3 ), B AS ( SELECT 2 as x UNION ALL SELECT 3 UNION ALL SELECT 4 ) SELECT FROM A INNER JOIN B ON A . x = B . x ; WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 3 ), B AS ( SELECT 2 as x UNION ALL SELECT 3 UNION ALL SELECT 4 ) SELECT A . x , B . x FROM A INNER JOIN B ON A . x = B . x ; / Table A Table B Result (A.x, B.x) +---+ +---+ +-------+ x x = x x +---+ +---+ +-------+ 1 2 2 2 2 3 3 3 3 4 +-------+ +---+ +---+ / WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 ) SELECT FROM A LEFT OUTER JOIN B ON A . x = B . x ; WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 ) SELECT A . x , B . x FROM A LEFT OUTER JOIN B ON A . x = B . x ; / Table A Table B Result +------+ +---+ +-------------+ x x = x x +------+ +---+ +-------------+ 1 2 1 NULL 2 3 2 2 3 4 3 3 NULL 5 NULL NULL +------+ +---+ +-------------+ / WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 ) SELECT FROM A FULL OUTER JOIN B ON A . x = B . x ; WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 ) SELECT A . x , B . x FROM A FULL OUTER JOIN B ON A . x = B . x ; / Table A Table B Result +------+ +---+ +-------------+ x x = x x +------+ +---+ +-------------+ 1 2 1 NULL 2 3 2 2 3 4 3 3 NULL 5 NULL NULL +------+ +---+ NULL 4 NULL 5 +-------------+ / USING clause USING ( column name list ) column name list : column name [ , ... ] Description When you are joining two tables, USING performs an equality comparison operation on the columns named in column name list .
- WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 3 ), B AS ( SELECT 2 as x UNION ALL SELECT 3 UNION ALL SELECT 4 ) SELECT FROM A INNER JOIN B ON A . x = B . x ; WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 3 ), B AS ( SELECT 2 as x UNION ALL SELECT 3 UNION ALL SELECT 4 ) SELECT FROM A INNER JOIN B USING ( x ); / Table A Table B Result ON Result USING +---+ +---+ +-------+ +---+ x x = x x x +---+ +---+ +-------+ +---+ 1 2 2 2 2 2 3 3 3 3 3 4 +-------+ +---+ +---+ +---+ / WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 ) SELECT FROM A LEFT OUTER JOIN B ON A . x = B . x ; WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 ) SELECT FROM A LEFT OUTER JOIN B USING ( x ); / Table A Table B Result ON Result USING +------+ +---+ +-------------+ +------+ x x = x x x +------+ +---+ +-------------+ +------+ 1 2 1 NULL 1 2 3 2 2 2 3 4 3 3 3 NULL 5 NULL NULL NULL +------+ +---+ +-------------+ +------+ / WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 3 ), B AS ( SELECT 2 as x UNION ALL SELECT 3 UNION ALL SELECT 4 ) SELECT FROM A FULL OUTER JOIN B ON A . x = B . x ; WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 3 ), B AS ( SELECT 2 as x UNION ALL SELECT 3 UNION ALL SELECT 4 ) SELECT FROM A FULL OUTER JOIN B USING ( x ); / Table A Table B Result ON Result USING +---+ +---+ +-------------+ +---+ x x = x x x +---+ +---+ +-------------+ +---+ 1 2 1 NULL 1 2 3 2 2 2 3 4 3 3 3 +---+ +---+ NULL 4 4 +-------------+ +---+ / Although ON and USING aren't equivalent, they can return the same results in some situations if you specify the columns you want to return.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 135
- Re-rank relevance: N/A

Evidence snippets:
- NAME and VALUE must be one of the following combinations: NAME VALUE Details enable refresh BOOLEAN Example: enable refresh=false Default: true refresh interval minutes FLOAT64 Example: refresh interval minutes=20 Default: refresh interval minutes=30 expiration timestamp TIMESTAMP Example: expiration timestamp=TIMESTAMP "2025-01-01 00:00:00 UTC" This property is equivalent to the expirationTime table resource property. expiration timestamp is optional and not used by default. max staleness INTERVAL Example: max staleness=INTERVAL "4:0:0" HOUR TO SECOND The max staleness property provides consistently high performance with controlled costs when processing large, frequently changing datasets. max staleness is disabled by default. allow non incremental definition BOOLEAN Example: allow non incremental definition=true The allow non incremental definition property supports an expanded range of SQL queries to create materialized views. allow non incremental definition=true is disabled by default.
- NAME and VALUE must be one of the following combinations: NAME VALUE Details enable refresh BOOLEAN Example: enable refresh=false Default: true refresh interval minutes FLOAT64 Example: refresh interval minutes=20 Default: refresh interval minutes=30 expiration timestamp TIMESTAMP Example: expiration timestamp=TIMESTAMP "2025-01-01 00:00:00 UTC" This property is equivalent to the expirationTime table resource property. expiration timestamp is optional and not used by default. max staleness INTERVAL Example: max staleness=INTERVAL "4:0:0" HOUR TO SECOND The max staleness property provides consistently high performance with controlled costs when processing large, frequently changing datasets. max staleness is disabled by default. allow non incremental definition BOOLEAN Example: allow non incremental definition=true The allow non incremental definition property supports an expanded range of SQL queries to create materialized views. allow non incremental definition=true is disabled by default.
- Example The following example deletes the my cloud resource connection connection: DROP CONNECTION IF EXISTS us.my cloud resource connection ; Table path syntax Use the following syntax when specifying the path of a table resource , including standard tables, views, materialized views, external tables, and table snapshots. table path := [[ project name . ] dataset name . ] table name project name : The name of the project that contains the table resource.
- The allow non incremental definition property can't be changed after the materialized view is created. kms key name STRING Example: kms key name="projects/ project id /locations/ location /keyRings/ keyring /cryptoKeys/ key " This property is equivalent to the encryptionConfiguration.kmsKeyName table resource property.

### Work with Salesforce Data Cloud data in BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/salesforce-quickstart](https://docs.cloud.google.com/bigquery/docs/salesforce-quickstart)
- Source ID: `site-docs-reference-2`
- Final score: 125
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cross cloud materialized views Cross Cloud Materialized Views ( CCMV ) transfer data from a BigQuery Omni region to a non-BigQuery Omni BigQuery region incrementally.
- CREATE MATERIALIZED VIEW us data.total sales replica AS REPLICA OF aws data.total sales ; Run a query on a replica materialized view The following example runs a query on a replica materialized view: -- Find total sales for the current month for the dashboard SELECT EXTRACT ( MONTH FROM CURRENT DATE ()) as month , SUM ( sales ) FROM us data . total sales replica WHERE month = EXTRACT ( MONTH FROM date ) GROUP BY 1 Using Data Cloud data with INFORMATION SCHEMA Data Cloud datasets support BigQuery INFORMATION SCHEMA views.
- Create a local materialized view To create a local materialized view: -- Create a local materialized view that keeps track of total sales by day CREATE MATERIALIZED VIEW aws data.total sales OPTIONS ( enable refresh = true , refresh interval minutes = 60 ) AS SELECT EXTRACT ( DAY FROM order time ) AS date , SUM ( order total ) as sales FROM listing nto john.nto orders dll GROUP BY 1 ; Authorize the materialized view You must authorize materialized views to create a CCMV.
- SELECT name c , age c FROM listing nto john.nto customers dll WHERE age > 40 LIMIT 1000 ; Run cross-cloud queries Cross-cloud queries let you join any of the tables in the BigQuery Omni region and tables in the BigQuery regions.

