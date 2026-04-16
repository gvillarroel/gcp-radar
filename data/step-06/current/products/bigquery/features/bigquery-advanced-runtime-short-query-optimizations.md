---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.314Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery advanced runtime short query optimizations"
feature_slug: "bigquery-advanced-runtime-short-query-optimizations"
latest_feature_date: "2025-08-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/advanced-runtime"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
keywords:
  - "bigquery"
  - "advanced"
  - "runtime"
  - "short"
  - "query"
  - "optimizations"
  - "included"
  - "when"
---

# BigQuery advanced runtime short query optimizations

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Short query optimizations are included when the BigQuery advanced runtime is enabled.

## Extended Definition

Short query optimizations are included when the BigQuery advanced runtime is enabled.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/advanced-runtime](https://docs.cloud.google.com/bigquery/docs/advanced-runtime)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)

## Supporting Pages

### Use the BigQuery advanced runtime \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/advanced-runtime](https://docs.cloud.google.com/bigquery/docs/advanced-runtime)
- Source ID: `site-docs-reference-2`
- Final score: 247
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JOBS BY PROJECT WHERE EXTRACT ( DATE FROM creation time ) > DATE SUB ( CURRENT DATE (), INTERVAL 30 DAY ) AND creation time > = TIMESTAMP "2026-01-30" ), most recent jobs without advanced runtime AS ( SELECT FROM jobs WHERE NOT has advanced runtime QUALIFY ROW NUMBER () OVER ( PARTITION BY query hash ORDER BY end time DESC ) = 1 ) SELECT job . job id , 100 SAFE DIVIDE ( original job . elapsed ms - job . elapsed ms , original job . elapsed ms ) AS percent execution time saved , job . elapsed ms AS new elapsed ms , original job . elapsed ms AS original elapsed ms , FROM jobs AS job INNER JOIN most recent jobs without advanced runtime AS original job USING ( query hash ) WHERE job . has advanced runtime AND original job . end time < job . start time ORDER BY percent execution time saved DESC LIMIT 10 ; Note: You can only compare queries created on or after January 30, 2026, which is when the advanced runtime optimization indicators ( enhanced vectorization and short query optimization ) became consistently available in the INFORMATION SCHEMA.JOBS view.
- Estimate the impact of the advanced runtime To estimate the impact of the advanced runtime, you can use the following SQL query to identify project queries with the greatest estimated improvement to execution time: WITH jobs AS ( SELECT , query info . query hashes . normalized literals AS query hash , TIMESTAMP DIFF ( end time , start time , MILLISECOND ) AS elapsed ms , EXISTS ( SELECT 1 FROM UNNEST ( JSON QUERY ARRAY ( query info . optimization details . optimizations )) AS o WHERE JSON VALUE ( o , '$.enhanced vectorization' ) = 'applied' ) AS has advanced runtime FROM region - LOCATION .
- Use the BigQuery advanced runtime BigQuery advanced runtime is a set of performance enhancements designed to automatically accelerate analytical workloads without requiring user action or code changes.
- Short query optimizations BigQuery typically executes queries in a distributed environment using a shuffle intermediate layer.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 215
- Re-rank relevance: N/A

Evidence snippets:
- Use google SQL if the query dialect isn't specified at the job level. query runtime STRING Specifies whether the BigQuery query processor uses the advanced runtime .
- Example: region-us.default query optimizer options = 'adaptive=on' query runtime STRING Specifies whether the BigQuery query processor uses the advanced runtime .
- DROP : The query deleted the DDL target. ddlTargetTable : When you submit a CREATE TABLE/VIEW statement or a DROP TABLE/VIEW statement, the target table is returned as an object with 3 fields: "projectId": string "datasetId": string "tableId": string Java Call the BigQuery.create() method to start a query job.
- When this parameter is included, a minimum number of distinct entities must be present in a set of data in the view. threshold : The minimum number of distinct privacy units (privacy unit column values) that need to contribute to each row in the query results.

### Query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `site-docs-reference`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- Provided there are no comma cross joins in the FROM clause, joins don't require parenthesis, though parenthesis can help readability: FROM A JOIN B JOIN C JOIN D USING ( w ) ON B . x = C . y ON A . z = B . x If your clause contains comma cross joins, you must use parentheses: FROM A , B JOIN C JOIN D ON C . x = D . y ON B . z = C . x // INVALID FROM A , B JOIN ( C JOIN D ON C . x = D . y ) ON B . z = C . x // VALID When comma cross joins are present in a query with a sequence of JOINs, they group from left to right like other JOIN types: FROM A JOIN B USING ( x ) JOIN C USING ( x ), D -- A JOIN B USING (x) = result 1 -- result 1 JOIN C USING (x) = result 2 -- result 2 CROSS JOIN D = return value There can't be a RIGHT JOIN or FULL JOIN after a comma cross join unless it's parenthesized: FROM A , B RIGHT JOIN C ON TRUE // INVALID FROM A , B FULL JOIN C ON TRUE // INVALID FROM A , B JOIN C ON TRUE // VALID FROM A , ( B RIGHT JOIN C ON TRUE ) // VALID FROM A , ( B FULL JOIN C ON TRUE ) // VALID Correlated join operation A join operation is correlated when the right from item contains a reference to at least one range variable or column name introduced by the left from item .
- SELECT WITH DIFFERENTIAL PRIVACY OPTIONS ( epsilon = 1e20 , delta = .01 , privacy unit column = id ) item , AVG ( quantity , contribution bounds per group = > ( 0 , 100 )) AS average quantity FROM professors GROUP BY item ; -- The privacy unit column 123 was only included in the pen group in this example. -- Noise was removed from this query for demonstration purposes only. / ----------+------------------+ item average quantity +----------+------------------+ pencil 40 pen 18.5 scissors 8 +----------+------------------ / Using aliases An alias is a temporary name given to a table, column, or expression present in a query.
- In the example below, the result set is ordered first by SchoolID and then by LastName : SELECT LastName , PointsScored , OpponentID FROM PlayerStats ORDER BY SchoolID , LastName ; When used in conjunction with set operators , the ORDER BY clause applies to the result set of the entire query; it doesn't apply only to the closest SELECT statement.
- LEFT [OUTER] : Adjusts the BY NAME modifier so that all columns from the left input query are included in the results, even if some columns in the left query aren't present in the right query.

