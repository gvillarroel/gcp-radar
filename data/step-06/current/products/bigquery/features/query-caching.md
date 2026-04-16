---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.934Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Query caching"
feature_slug: "query-caching"
latest_feature_date: "2013-06-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/biglake-intro"
  - "https://docs.cloud.google.com/bigquery/docs/column-data-masking-intro"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "query"
  - "caching"
  - "lets"
  - "bigquery"
  - "reuse"
  - "prior"
  - "results"
  - "improve"
---

# Query caching

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Query caching lets BigQuery reuse prior query results to improve performance and reduce repeated processing.

## Extended Definition

Query caching lets BigQuery reuse prior query results to improve performance and reduce repeated processing.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- [https://docs.cloud.google.com/bigquery/docs/column-data-masking-intro](https://docs.cloud.google.com/bigquery/docs/column-data-masking-intro)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "Introduction to BigLake external tables \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- Source ID: `site-docs-reference-5`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- CREATE OR REPLACE TABLE temp table AS ( SELECT l shipmode , l linenumber , l orderkey FROM aws dataset . lineitem WHERE l shipmode IN ( 'AIR' , 'REG AIR' ) AND l commitdate l receiptdate AND l shipdate l commitdate AND l receiptdate >= DATE '1997-01-01' AND l receiptdate DATE '1997-02-01' ); After the temporary table is created, the JOIN operation completes, and the following query is run: SELECT l shipmode , o orderpriority , count ( l linenumber ) AS num lineitems FROM bigquery dataset . orders JOIN temp table ON orders . o orderkey = lineitem . l orderkey GROUP BY l shipmode , o orderpriority ORDER BY l shipmode , o orderpriority ; As another example, consider the following cross-cloud join: SELECT c mktsegment , c name FROM bigquery dataset . customer WHERE c mktsegment = 'BUILDING' UNION ALL SELECT c mktsegment , c name FROM aws dataset . customer WHERE c mktsegment = 'FURNITURE' LIMIT 10 ; In this query, the LIMIT clause is not pushed down to the BigQuery Omni region.
- Cross-cloud join examples The following query joins an orders table in a BigQuery region with a lineitem table in a BigQuery Omni region: SELECT l shipmode , o orderpriority , count ( l linenumber ) AS num lineitems FROM bigquery dataset . orders JOIN aws dataset . lineitem ON orders . o orderkey = lineitem . l orderkey WHERE l shipmode IN ( 'AIR' , 'REG AIR' ) AND l commitdate l receiptdate AND l shipdate l commitdate AND l receiptdate >= DATE '1997-01-01' AND l receiptdate DATE '1997-02-01' GROUP BY l shipmode , o orderpriority ORDER BY l shipmode , o orderpriority ; This query is broken into local and remote parts.
- While using a shared slot pool incurs no extra cost, using BACKGROUND reservations instead provides more consistent performance by allocating a dedicated resource pool, and improves the reliability of refresh jobs and overall query efficiency in BigQuery.
- For example, the following diagram demonstrates how the BigQuery Storage API lets users access authorized data using open source query engines such as Apache Spark: For more information about connectors supported by BigQuery, see BigQuery connectors .

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- Examples The following table function takes an INT64 parameter that is used to filter the results of a query: CREATE OR REPLACE TABLE FUNCTION mydataset . names by year ( y INT64 ) AS SELECT year , name , SUM ( number ) AS total FROM bigquery-public-data.usa names.usa 1910 current WHERE year = y GROUP BY year , name The following example specifies the return TABLE type in the RETURNS clause: CREATE OR REPLACE TABLE FUNCTION mydataset . names by year ( y INT64 ) RETURNS TABLE<name STRING , year INT64 , total INT64 > AS SELECT year , name , SUM ( number ) AS total FROM bigquery-public-data.usa names.usa 1910 current WHERE year = y GROUP BY year , name The following example computes total sales for items with the name item name from the orders table: CREATE TABLE FUNCTION mydataset . compute sales ( orders TABLE<item STRING , sales INT64 > , item name STRING ) AS ( SELECT SUM ( sales ) AS total sales , item FROM orders WHERE item = item name GROUP BY item ); CREATE PROCEDURE statement Creates a new procedure , which is a block of statements that can be called from other queries.
- Cannot appear with main file uri in procedure option list . argument type : Any valid BigQuery type . procedure argument mode : Specifies whether an argument is an input, an output, or both. procedure option list The procedure option list lets you specify procedure options.
- If all of the invoked functions are DETERMINISTIC , BigQuery tries to cache the result, unless the results can't be cached for other reasons.
- For example, if the functionj add random(i) returns i + rand() , the function is not deterministic and BigQuery does not use cached results.

### Introduction to data masking \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/column-data-masking-intro](https://docs.cloud.google.com/bigquery/docs/column-data-masking-intro)
- Source ID: `site-docs-reference-5`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- The following results are returned: SSN Priority Lifetime value Creation date Email NULL "" Zmy9vydG5q= March 8, 1983 NULL NULL "" GhwTwq6Ynm= December 29, 2009 NULL NULL "" B6y7dsgaT9= July 14, 2021 NULL NULL "" Uh02hnR1sg= May 5, 1997 NULL All other users : Any user who does not belong to one of the listed groups gets an access denied error, because they haven't been granted the Data Catalog Fine-Grained Reader or BigQuery Masked Reader roles.
- The following results are returned: SSN Priority Lifetime value Creation date Email NULL High 90,000 March 8, 1983 NULL NULL High 84,875 December 29, 2009 NULL NULL Medium 38,000 July 14, 2021 NULL NULL Low 245 May 5, 1997 NULL fin-dev@example.com : This group has been granted the BigQuery Masked Reader role on the Financial policy tag.
- Given the tags that are associated with the columns, running SELECT FROM Accounts; leads to the following results for the different groups: data-users@example.com : This group has been granted the BigQuery Masked Reader role on both the PII and Confidential policy tags.
- BigQuery caches query results for approximately 24 hours, although the cache is invalidated if changes are made to the table data or schema before that.

