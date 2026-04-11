---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.912Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Standard SQL IGNORE NULLS/RESPECT NULLS in ARRAY_AGG"
feature_slug: "bigquery-standard-sql-ignore-nulls-respect-nulls-in-array-agg"
latest_feature_date: "2017-03-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
keywords:
  - "ARRAY_AGG RESPECT NULLS"
  - "RESPECT NULLS ARRAY_AGG"
  - "ARRAY_AGG IGNORE NULLS"
  - "IGNORE NULLS ARRAY_AGG"
  - "IGNORE NULLS array_agg"
  - "null handling in ARRAY_AGG"
  - "ARRAY_AGG null handling"
  - "ARRAY_AGG"
---

# BigQuery Standard SQL IGNORE NULLS/RESPECT NULLS in ARRAY_AGG

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery Standard SQL now supports IGNORE NULLS and RESPECT NULLS modifiers for ARRAY_AGG.

## Extended Definition

BigQuery Standard SQL now supports IGNORE NULLS and RESPECT NULLS modifiers for ARRAY_AGG.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial](https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)

## Supporting Pages

### "Analyze multimodal data with SQL and BigQuery DataFrames \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial](https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial)
- Source ID: `site-docs-root-2`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up ADC for a local development environment . bbq . create external table ( "cymbal pets.product manuals all" , replace = True , connection name = "us.cymbal conn" , options = { "object metadata" : "SIMPLE" , "uris" : [ "gs://cloud-samples-data/bigquery/tutorials/cymbal-pets/documents/ .pdf" , "gs://cloud-samples-data/bigquery/tutorials/cymbal-pets/document chunks/ .pdf" , ], }, ) Run the following to write PDF data to the map manual to chunks table: SQL -- Extract the file and chunks into a single table. -- Store the chunks in the chunks column as array of ObjectRefs (ordered by page number) CREATE OR REPLACE TABLE cymbal pets . map manual to chunks AS SELECT ARRAY AGG ( m1 . ref ) [ 0 ] manual , ARRAY AGG ( m2 . ref ORDER BY m2 . ref . uri ) chunks FROM cymbal pets . product manuals m1 JOIN cymbal pets . product manuals m2 ON REGEXP EXTRACT ( m1 . uri , r '. /([^.] ).[^/]+' ) = REGEXP EXTRACT ( m2 . uri , r '. /([^.] ) page[0-9]+.[^/]+' ) GROUP BY m1 . uri ; BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .
- For more information, see Set up ADC for a local development environment . df1 = bpd . read gbq ( "SELECT FROM cymbal pets.product manuals all" ) . sort values ( "uri" ) df2 = df1 . copy () df1 [ "name" ] = df1 [ "uri" ] . str . extract ( r ". /([^.] ).[^/]+" ) df2 [ "name" ] = df2 [ "uri" ] . str . extract ( r ". /([^.] ) page[0-9]+.[^/]+" ) df manuals all = df1 . merge ( df2 , on = "name" ) df manuals agg = ( bbq . array agg ( df manuals all [[ "ref x" , "uri x" ]] . groupby ( "uri x" ))[ "ref x" ] . str [ 0 ] . to frame () ) df manuals agg [ "chunks" ] = bbq . array agg ( df manuals all [[ "ref y" , "uri x" ]] . groupby ( "uri x" ) )[ "ref y" ] Run the following to view the PDF data in the map manual to chunks table: SQL SELECT FROM cymbal pets . map manual to chunks ; BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .
- For more information, see Set up ADC for a local development environment . df agg = df products mm [ [ "image" , "description" , "category" , "subcategory" , "brand" ] ] df agg [ "image" ] = bbq . obj . get access url ( df products mm [ "image" ], "R" ) df agg = bbq . array agg ( df agg . groupby ( by = [ "brand" ])) df agg [ "cnt" ] = bbq . array length ( df agg [ "image" ]) df prompt = df agg [[ "image" , "description" , "category" , "subcategory" ]] df prompt [ "prompt0" ] = "Use the images and text to give one concise brand description for a website brand page.
- GET ACCESS URL ( chunk ref , 'r' ) AS ObjectRefRuntime FROM input chunked objrefs ), valid get access urls AS ( SELECT FROM get access urls WHERE ObjectRefRuntime [ 'runtime errors' ] IS NULL ), ordered output objrefruntime array AS ( SELECT ARRAY AGG ( ObjectRefRuntime ORDER BY offset ) AS ObjectRefRuntimeArray FROM valid get access urls GROUP BY row id ) SELECT page1 summary , page2 summary , page3 summary FROM AI .

### Query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `site-docs-reference`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- SELECT FROM Sales MATCH RECOGNIZE ( PARTITION BY customer ORDER BY sale date MEASURES MATCH NUMBER () AS match number , ARRAY AGG ( STRUCT ( MATCH ROW NUMBER () AS row , CLASSIFIER () AS symbol , sale date , product category )) AS sales PATTERN ( low + mid + high + ) DEFINE low AS amount < 50 , mid AS amount > = 50 AND amount < = 100 , high AS amount > 100 ); / ----------+--------------+-----------+--------------+-----------------+------------------------+ customer match number sales.row sales.symbol sales.sale date sales.product category +----------+--------------+-----------+--------------+-----------------+------------------------+ Ian 1 1 low 2024-02-01 Books 2 low 2024-02-08 Clothing 3 mid 2024-02-10 Clothing 4 high 2024-03-15 Electronics 5 high 2024-03-15 Electronics Ian 2 1 low 2024-03-21 Software 2 mid 2024-04-07 Books 3 high 2024-07-07 Clothing +----------+--------------+-----------+--------------+-----------------+------------------------ / The following example is similar to the previous one, except it allows overlapping matches: SELECT FROM Sales MATCH RECOGNIZE ( PARTITION BY customer ORDER BY sale date MEASURES MATCH NUMBER () AS match number , ARRAY AGG ( STRUCT ( MATCH ROW NUMBER () AS row , CLASSIFIER () AS symbol , sale date , product category )) AS sales AFTER MATCH SKIP TO NEXT ROW PATTERN ( low + mid + high + ) DEFINE low AS amount < 50 , mid AS amount > = 50 AND amount < = 100 , high AS amount > 100 ); / ----------+--------------+-----------+--------------+-----------------+------------------------+ customer match number sales.row sales.symbol sales.sale date sales.product category +----------+--------------+-----------+--------------+-----------------+------------------------+ Ian 1 1 low 2024-02-01 Books 2 low 2024-02-08 Clothing 3 mid 2024-02-10 Clothing 4 high 2024-03-15 Electronics 5 high 2024-03-15 Electronics Ian 2 1 low 2024-02-08 Clothing 2 mid 2024-02-10 Clothing 3 high 2024-03-15 Electronics 4 high 2024-03-15 Electronics Ian 3 1 low 2024-03-21 Software 2 mid 2024-04-07 Books 3 high 2024-07-07 Clothing +----------+--------------+-----------+--------------+-----------------+------------------------ / Best practices To scale the performance of queries that contain the MATCH RECOGNIZE clause, use the following best practices: Use the PARTITION BY clause.
- SELECT FROM ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 3 ) MATCH RECOGNIZE ( ORDER BY x MEASURES ARRAY AGG ( high . x ) AS high agg , ARRAY AGG ( low . x ) AS low agg AFTER MATCH SKIP TO NEXT ROW PATTERN ( low high + ) DEFINE low AS x < = 2 , high AS x > = 2 OPTIONS ( use longest match = TRUE ) ); / ----------+---------+ high agg low agg +----------+---------+ NULL [1] [2,3] NULL [3] NULL +----------+--------- / The following examples reference a table called Sales : WITH Sales AS ( SELECT 'Daisy' AS customer , DATE '2024-01-03' AS sale date , 'Electronics' AS product category , 500 AS amount UNION ALL SELECT 'Daisy' , DATE '2024-01-04' , 'Software' , 30 UNION ALL SELECT 'Ian' , DATE '2024-02-01' , 'Books' , 20 UNION ALL SELECT 'Ian' , DATE '2024-02-08' , 'Clothing' , 30 UNION ALL SELECT 'Ian' , DATE '2024-02-10' , 'Clothing' , 90 UNION ALL SELECT 'Daisy' , DATE '2024-03-15' , 'Software' , 40 UNION ALL SELECT 'Ian' , DATE '2024-03-15' , 'Electronics' , 300 UNION ALL SELECT 'Ian' , DATE '2024-03-15' , 'Electronics' , 400 UNION ALL SELECT 'Ian' , DATE '2024-03-21' , 'Software' , 30 UNION ALL SELECT 'Ian' , DATE '2024-04-07' , 'Books' , 50 UNION ALL SELECT 'Daisy' , DATE '2024-06-28' , 'Electronics' , 400 UNION ALL SELECT 'Daisy' , DATE '2024-06-29' , 'Clothing' , 100 UNION ALL SELECT 'Daisy' , DATE '2024-06-30' , 'Software' , 30 UNION ALL SELECT 'Ian' , DATE '2024-07-07' , 'Clothing' , 110 ) SELECT FROM Sales ; / ----------+------------+------------------+--------+ customer sale date product category amount +----------+------------+------------------+--------+ Daisy 2024-01-03 Electronics 500 Daisy 2024-01-04 Software 30 Ian 2024-02-01 Books 20 Ian 2024-02-08 Clothing 30 Ian 2024-02-10 Clothing 90 Daisy 2024-03-15 Software 40 Ian 2024-03-15 Electronics 300 Ian 2024-03-15 Electronics 400 Ian 2024-03-21 Software 30 Ian 2024-04-07 Books 50 Daisy 2024-06-28 Electronics 400 Daisy 2024-06-29 Clothing 100 Daisy 2024-06-30 Software 30 Ian 2024-07-07 Clothing 110 +----------+------------+------------------+-------- / The following example finds electronics purchases, followed by any number of other purchases of other types, followed by software purchases.
- The MEASURES clause aggregates the data in each match and computes total sales and software sales: SELECT FROM Sales MATCH RECOGNIZE ( PARTITION BY customer ORDER BY sale date MEASURES ARRAY AGG ( STRUCT ( sale date , product category , amount )) AS sales , SUM ( amount ) AS total sale amount , SUM ( software . amount ) AS software sale amount PATTERN ( electronics + any category ? software + ) DEFINE electronics AS product category = 'Electronics' , software AS product category = 'Software' , any category AS TRUE ); / ----------+-----------------+------------------------+--------------+-------------------+----------------------+ customer sales.sale date sales.product category sales.amount total sale amount software sale amount +----------+-----------------+------------------------+--------------+-------------------+----------------------+ Daisy 2024-01-03 Electronics 500 570 70 2024-01-04 Software 30 2024-03-15 Software 40 Daisy 2024-06-28 Electronics 400 530 30 2024-06-29 Clothing 100 2024-06-30 Software 30 Ian 2024-03-15 Electronics 300 730 30 2024-03-15 Electronics 400 2024-03-21 Software 30 +----------+-----------------+------------------------+--------------+-------------------+---------------------- / The following example, like the previous example, matches electronics purchases that were eventually followed by software purchases.
- SELECT FROM ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 3 ) MATCH RECOGNIZE ( ORDER BY x MEASURES ARRAY AGG ( high . x ) AS high agg , ARRAY AGG ( low . x ) AS low agg AFTER MATCH SKIP TO NEXT ROW PATTERN ( low high ) DEFINE low AS x < = 2 , high AS x > = 2 ); / ----------+---------+ high agg low agg +----------+---------+ NULL [1] NULL [2] [3] NULL +----------+--------- / The following example is similar to the preceding example, except that the pattern is changed to low high+ and the use longest match option is set to TRUE .

