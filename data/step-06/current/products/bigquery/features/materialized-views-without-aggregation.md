---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.700Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Materialized views without aggregation"
feature_slug: "materialized-views-without-aggregation"
latest_feature_date: "2022-01-31"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/biglake-intro"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
  - "https://docs.cloud.google.com/bigquery/docs/controlling-costs"
keywords:
  - "materialized"
  - "views"
  - "without"
  - "aggregation"
  - "bigquery"
  - "supports"
  - "do"
  - "not"
---

# Materialized views without aggregation

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports materialized views that do not require aggregation.

## Extended Definition

BigQuery supports materialized views that do not require aggregation.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)

## Supporting Pages

### "Introduction to BigLake external tables \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- Source ID: `site-docs-reference-5`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- These materialized views function like materialized views over BigQuery-managed storage tables, including the benefits of automatic refresh and smart tuning .
- Cache-enabled tables with materialized views You can use materialized views over BigLake metadata cache-enabled tables to improve performance and efficiency when querying structured data stored in Cloud Storage or Amazon Simple Storage Service (Amazon S3).
- Authorized views and authorized routines referencing BigQuery Omni tables or views are only supported in BigQuery Omni regions.
- Aggregations might not be pushed down to the BigQuery Omni regions if the query contains JOIN statements.

### Estimate and control costs \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)
- Source ID: `site-docs-root`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- BigQuery supports the following data preview options: In the Google Cloud console, on the table details page, click the Preview tab to sample the data.
- BigQuery supports storage billing using logical (uncompressed) or physical (compressed) bytes, or a combination of both.
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function queryDryRun () { // Runs a dry query of the U.S. given names dataset for the state of Texas. const query = SELECT name FROM \bigquery-public-data.usa names.usa 1910 2013\ WHERE state = 'TX' LIMIT 100 ; // For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query const options = { query : query , // Location must match that of the dataset(s) referenced in the query. location : 'US' , dryRun : true , }; // Run the query as a job const [ job ] = await bigquery . createQueryJob ( options ); // Print the status and statistics console . log ( 'Status:' ); console . log ( job . metadata . status ); console . log ( '\nJob Statistics:' ); console . log ( job . metadata . statistics ); } PHP Before trying this sample, follow the PHP setup instructions in the BigQuery quickstart using client libraries .
- Unexpected storage charges Scenarios that could lead to storage charge increases: Increases in the amount of data that is stored in your tables—use the INFORMATION SCHEMA.TABLE STORAGE USAGE TIMELINE view to monitor the change in bytes for your tables Changing dataset billing models Increasing the time-travel window for physical billing model datasets Modification of tables that have data in long-term storage , causing them to become active storage Deletion of table(s) or dataset(s) resulted in higher BigQuery storage costs The BigQuery time travel feature retains deleted data for duration of the configured time-travel window and an additional 7 days for fail-safe recovery.

### Query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- This function can be used with or without aggregation, because it returns the same value for every row in a match.
- WITH RECURSIVE isn't allowed in materialized views.
- For example: -- GROUP BY with GROUPING SETS and CUBE WITH Products AS ( SELECT 'shirt' AS product type , 't-shirt' AS product name , 3 AS product count UNION ALL SELECT 'shirt' , 't-shirt' , 8 UNION ALL SELECT 'shirt' , 'polo' , 25 UNION ALL SELECT 'pants' , 'jeans' , 6 ) SELECT product type , product name , SUM ( product count ) AS product sum FROM Products GROUP BY GROUPING SET S ( product type , CUBE ( product type , product name )) ORDER BY product type , product name ; / --------------+--------------+-------------+ product type product name product sum +--------------+--------------+-------------+ NULL NULL 42 NULL jeans 6 NULL polo 25 NULL t-shirt 11 pants NULL 6 pants NULL 6 pants jeans 6 shirt NULL 36 shirt NULL 36 shirt polo 25 shirt t-shirt 11 +--------------+--------------+------------- / -- GROUP BY with GROUPING SETS, but without CUBE -- (produces the same results as GROUPING SETS with CUBE) WITH Products AS ( SELECT 'shirt' AS product type , 't-shirt' AS product name , 3 AS product count UNION ALL SELECT 'shirt' , 't-shirt' , 8 UNION ALL SELECT 'shirt' , 'polo' , 25 UNION ALL SELECT 'pants' , 'jeans' , 6 ) SELECT product type , product name , SUM ( product count ) AS product sum FROM Products GROUP BY GROUPING SET S ( product type , ( product type , product name ), product type , product name , ()) ORDER BY product type , product name ; Group rows by ROLLUP GROUP BY ROLLUP ( grouping list ) grouping list : { groupable item groupable item set }[, ...] groupable item set : ( groupable item [, ...] ) Description The GROUP BY ROLLUP clause produces aggregated data for rolled up grouping sets .
- Examples The following queries produce the same subtotals and a grand total, but the first one uses GROUP BY with ROLLUP and the second one doesn't: -- GROUP BY with ROLLUP WITH Products AS ( SELECT 'shirt' AS product type , 't-shirt' AS product name , 3 AS product count UNION ALL SELECT 'shirt' , 't-shirt' , 8 UNION ALL SELECT 'shirt' , 'polo' , 25 UNION ALL SELECT 'pants' , 'jeans' , 6 ) SELECT product type , product name , SUM ( product count ) AS product sum FROM Products GROUP BY ROLLUP ( product type , product name ) ORDER BY product type , product name ; / --------------+--------------+-------------+ product type product name product sum +--------------+--------------+-------------+ NULL NULL 42 pants NULL 6 pants jeans 6 shirt NULL 36 shirt t-shirt 11 shirt polo 25 +--------------+--------------+------------- / -- GROUP BY without ROLLUP (produces the same results as ROLLUP) WITH Products AS ( SELECT 'shirt' AS product type , 't-shirt' AS product name , 3 AS product count UNION ALL SELECT 'shirt' , 't-shirt' , 8 UNION ALL SELECT 'shirt' , 'polo' , 25 UNION ALL SELECT 'pants' , 'jeans' , 6 ) SELECT product type , product name , SUM ( product count ) AS product sum FROM Products GROUP BY product type , product name UNION ALL SELECT product type , NULL , SUM ( product count ) FROM Products GROUP BY product type UNION ALL SELECT NULL , NULL , SUM ( product count ) FROM Products ORDER BY product type , product name ; You can include groupable item sets in a GROUP BY ROLLUP clause.

