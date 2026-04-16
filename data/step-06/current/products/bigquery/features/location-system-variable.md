---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.324Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "@@location system variable"
feature_slug: "location-system-variable"
latest_feature_date: "2025-07-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/locations"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "location"
  - "system"
  - "variable"
  - "sets"
  - "where"
  - "query"
  - "runs"
  - "lets"
---

# @@location system variable

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The @@location system variable sets the location where a query runs; The @@location system variable lets you set the location where a query runs.

## Extended Definition

The @@location system variable sets the location where a query runs; The @@location system variable lets you set the location where a query runs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/locations](https://docs.cloud.google.com/bigquery/docs/locations)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### Query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `site-docs-reference`
- Final score: 257
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example: SELECT FROM UNNEST ( ARRAY < STRUCT < x INT64 , y STRING , z STRUCT<a INT64 , b INT64 >>> [ ( 1 , 'foo' , ( 10 , 11 )), ( 3 , 'bar' , ( 20 , 21 )) ] ); / ---+-----+----------+ x y z +---+-----+----------+ 1 foo {10, 11} 3 bar {20, 21} +---+-----+---------- / Because the UNNEST operator returns a value table , you can alias UNNEST to define a range variable that you can reference elsewhere in the query.
- The query uses the LAST and FIRST functions that are unique to the MEASURES clause to compute the number of days between the final electronics purchase in a match and the first following software purchase: SELECT FROM Sales MATCH RECOGNIZE ( PARTITION BY customer ORDER BY sale date MEASURES LAST ( electronics . sale date ) AS last electronics sale date , FIRST ( software . sale date ) AS first software sale date , DATE DIFF ( FIRST ( software . sale date ), LAST ( electronics . sale date ), day ) AS date gap PATTERN ( electronics + any category ? software + ) DEFINE electronics AS product category = 'Electronics' , software AS product category = 'Software' , any category AS TRUE ); / ----------+----------------------------+--------------------------+----------+ customer last electronics sale date first software sale date date gap +----------+----------------------------+--------------------------+----------+ Daisy 2024-01-03 2024-01-04 1 Daisy 2024-06-28 2024-06-30 2 Ian 2024-03-15 2024-03-21 6 +----------+----------------------------+--------------------------+---------- / The following example matches a sequence of rows where amount is less than 50, followed by rows where amount is between 50 and 100, followed by rows where amount is greater than 100.
- Provided there are no comma cross joins in the FROM clause, joins don't require parenthesis, though parenthesis can help readability: FROM A JOIN B JOIN C JOIN D USING ( w ) ON B . x = C . y ON A . z = B . x If your clause contains comma cross joins, you must use parentheses: FROM A , B JOIN C JOIN D ON C . x = D . y ON B . z = C . x // INVALID FROM A , B JOIN ( C JOIN D ON C . x = D . y ) ON B . z = C . x // VALID When comma cross joins are present in a query with a sequence of JOINs, they group from left to right like other JOIN types: FROM A JOIN B USING ( x ) JOIN C USING ( x ), D -- A JOIN B USING (x) = result 1 -- result 1 JOIN C USING (x) = result 2 -- result 2 CROSS JOIN D = return value There can't be a RIGHT JOIN or FULL JOIN after a comma cross join unless it's parenthesized: FROM A , B RIGHT JOIN C ON TRUE // INVALID FROM A , B FULL JOIN C ON TRUE // INVALID FROM A , B JOIN C ON TRUE // VALID FROM A , ( B RIGHT JOIN C ON TRUE ) // VALID FROM A , ( B FULL JOIN C ON TRUE ) // VALID Correlated join operation A join operation is correlated when the right from item contains a reference to at least one range variable or column name introduced by the left from item .
- Angle brackets <> Literal angle brackets SQL syntax query statement : query expr query expr : [ WITH [ RECURSIVE ] { non recursive cte recursive cte }[, ...] ] { select ( query expr ) set operation } [ ORDER BY expression [{ ASC DESC }] [, ...] ] [ LIMIT count [ OFFSET skip rows ] ] select : SELECT [ WITH differential privacy clause ] [ { ALL DISTINCT } ] [ AS { STRUCT VALUE } ] select list [ FROM from clause [, ...] ] [ WHERE bool expression ] [ GROUP BY group by specification ] [ HAVING bool expression ] [ QUALIFY bool expression ] [ WINDOW window clause ] SELECT statement SELECT [ WITH differential privacy clause ] [ { ALL DISTINCT } ] [ AS { STRUCT VALUE } ] select list select list : { select all select expression } [, ...] select all : [ expression . ] [ EXCEPT ( column name [, ...] ) ] [ REPLACE ( expression AS column name [, ...] ) ] select expression : expression [ [ AS ] alias ] The SELECT list defines the columns that the query will return.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 245
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can use DDL commands to create, alter, and delete resources, such as the following: Datasets Tables Table schemas Table clones Table snapshots Views Connections User-defined functions (UDFs) Indexes Capacity commitments and reservations Row-level access policies Default configuration settings Required permissions To create a job that runs a DDL statement, you must have the bigquery.jobs.create permission for the project where you are running the job.
- If you don't specify this option, the dataset is created in the location where the query runs.
- If you don't specify this option, the dataset is created in the location where the query runs.
- Required permissions This statement requires the following IAM permissions : Permission Resource bigquery.datasets.create The project where you create the federated dataset. bigquery.connections.use The project where you create the federated dataset. bigquery.connections.delegate The project where you create the federated dataset.

### BigQuery locations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/locations](https://docs.cloud.google.com/bigquery/docs/locations)
- Source ID: `site-docs-root`
- Final score: 239
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- BigQuery Studio locations BigQuery Studio lets you save, share, and manage versions of code assets such as notebooks and saved queries .
- When you write a SQL query, set the @@location system variable in the first statement of your query.
- The BigQuery SQL translators are available in the following processing locations: Region description Region name Details Asia Pacific Bangkok asia-southeast3 Delhi asia-south2 Hong Kong asia-east2 Jakarta asia-southeast2 Melbourne australia-southeast2 Mumbai asia-south1 Osaka asia-northeast2 Seoul asia-northeast3 Singapore asia-southeast1 Sydney australia-southeast1 Taiwan asia-east1 Tokyo asia-northeast1 Europe Belgium europe-west1 Low CO 2 Berlin europe-west10 EU multi-region eu Finland europe-north1 Low CO 2 Frankfurt europe-west3 London europe-west2 Low CO 2 Madrid europe-southwest1 Low CO 2 Milan europe-west8 Netherlands europe-west4 Low CO 2 Paris europe-west9 Low CO 2 Stockholm europe-north2 Low CO 2 Turin europe-west12 Warsaw europe-central2 Zürich europe-west6 Low CO 2 Americas Columbus, Ohio us-east5 Dallas us-south1 Low CO 2 Iowa us-central1 Low CO 2 Las Vegas us-west4 Los Angeles us-west2 Mexico northamerica-south1 Northern Virginia us-east4 Oregon us-west1 Low CO 2 Québec northamerica-northeast1 Low CO 2 São Paulo southamerica-east1 Low CO 2 Salt Lake City us-west3 Santiago southamerica-west1 Low CO 2 South Carolina us-east1 Toronto northamerica-northeast2 Low CO 2 US multi-region us Africa Johannesburg africa-south1 MiddleEast Dammam me-central2 Doha me-central1 Israel me-west1 BigQuery continuous query locations The following table lists the regions where continuous queries are supported: Region description Region name Details Americas US multi-region us Columbus us-east5 Dallas us-south1 Low CO 2 Iowa us-central1 Low CO 2 Las Vegas us-west4 Los Angeles us-west2 Mexico northamerica-south1 Montréal northamerica-northeast1 Low CO 2 Northern Virginia us-east4 Oklahoma us-central2 Low CO 2 Oregon us-west1 Low CO 2 Salt Lake City us-west3 Santiago southamerica-west1 Low CO 2 São Paulo southamerica-east1 Low CO 2 South Carolina us-east1 Toronto northamerica-northeast2 Low CO 2 Asia Pacific Delhi asia-south2 Hong Kong asia-east2 Jakarta asia-southeast2 Melbourne australia-southeast2 Mumbai asia-south1 Osaka asia-northeast2 Seoul asia-northeast3 Singapore asia-southeast1 Sydney australia-southeast1 Taiwan asia-east1 Tokyo asia-northeast1 Europe EU multi-region eu Belgium europe-west1 Low CO 2 Berlin europe-west10 Finland europe-north1 Low CO 2 Frankfurt europe-west3 London europe-west2 Low CO 2 Madrid europe-southwest1 Low CO 2 Milan europe-west8 Netherlands europe-west4 Low CO 2 Paris europe-west9 Low CO 2 Stockholm europe-north2 Low CO 2 Turin europe-west12 Warsaw europe-central2 Zurich europe-west6 Low CO 2 Middle East Doha me-central1 Dammam me-central2 Tel Aviv me-west1 Africa Johannesburg africa-south1 BigQuery partition and cluster recommender locations The BigQuery partitioning and clustering recommender generates partition or cluster recommendations to optimize your BigQuery tables.
- The following table lists the regions where BigQuery Studio is available: Region description Region name Details Africa Johannesburg africa-south1 Americas Columbus us-east5 Dallas us-south1 Low CO 2 Iowa us-central1 Low CO 2 Las Vegas us-west4 Los Angeles us-west2 Mexico northamerica-south1 Montréal northamerica-northeast1 Low CO 2 North Virginia us-east4 Oklahoma us-central2 Low CO 2 Oregon us-west1 Low CO 2 Salt Lake City us-west3 Santiago southamerica-west1 Low CO 2 São Paulo southamerica-east1 Low CO 2 South Carolina us-east1 Toronto northamerica-northeast2 Low CO 2 Asia Pacific Bangkok asia-southeast3 Delhi asia-south2 Hong Kong asia-east2 Jakarta asia-southeast2 Melbourne australia-southeast2 Mumbai asia-south1 Osaka asia-northeast2 Seoul asia-northeast3 Singapore asia-southeast1 Sydney australia-southeast1 Taiwan asia-east1 Tokyo asia-northeast1 Europe Belgium europe-west1 Low CO 2 Berlin europe-west10 Finland europe-north1 Low CO 2 Frankfurt europe-west3 London europe-west2 Low CO 2 Madrid europe-southwest1 Low CO 2 Milan europe-west8 Netherlands europe-west4 Low CO 2 Paris europe-west9 Low CO 2 Stockholm europe-north2 Low CO 2 Turin europe-west12 Warsaw europe-central2 Zürich europe-west6 Low CO 2 Middle East Dammam me-central2 Doha me-central1 Tel Aviv me-west1 BigQuery Omni locations BigQuery Omni processes queries in the same location as the dataset that contains the tables you're querying.

