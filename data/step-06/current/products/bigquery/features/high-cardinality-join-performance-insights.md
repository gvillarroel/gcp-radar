---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.569Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "High cardinality join performance insights"
feature_slug: "high-cardinality-join-performance-insights"
latest_feature_date: "2023-08-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
  - "https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer"
keywords:
  - "high"
  - "cardinality"
  - "join"
  - "performance"
  - "insights"
  - "query"
  - "can"
  - "identify"
---

# High cardinality join performance insights

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Query performance insights can identify performance issues related to high cardinality joins.

## Extended Definition

Query performance insights can identify performance issues related to high cardinality joins.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- [https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer](https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer)

## Supporting Pages

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- Partner references Prophecy BigQuery Integration Read and write to catalog tables in BigQuery Partner Advantage page Direct link Qlik Solution Qlik Replicate Category ETL & Data Integration Description Qlik Replicate (formerly Attunity Replicate) is a high-performance data-replication tool offering optimized data ingestion from a broad array of data sources and platforms and seamless integration with all major big data analytics platforms.
- Partner references BigQuery Export Integration BigQuery Import Integration BigQuery Version 2 Export Partner Advantage page Direct link Union.ai Solution Union AI orchestrator Category BI, ML, & Advanced Analytics Description The Union platform empowers AI development teams to rapidly ship high-quality code to production by offering optimized performance, unparalleled resource efficiency, and a delightful workflow authoring experience.
- Partner references SnapLogic with BigQuery SnapLogic and Google BigQuery - Bulk loading for high-speed Google analytics Automate Data-driven Insights with SnapLogic and Google BigQuery Partner Advantage page Direct link SqlDBM Solution SqlDBM Category ETL & Data Integration Description SqlDBM is a cloud-native database design and modeling tool that enables teams to develop, document, and manage database schemas collaboratively.
- Partner references WisdomAI and Google Cloud Join Forces to Turn Enterprise Data into Instant Insights How to connect to BigQuery from Wisdom Partner Advantage page Direct link Zenlytic Solution Zenlytic Category BI, ML, & Advanced Analytics Description Zenlytic is an LLM-powered business intelligence platform that makes self-serve analytics possible through a conversational interface to your data.

### Query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `site-docs-reference`
- Final score: 159
- Re-rank relevance: N/A

Evidence snippets:
- SELECT FROM Sales MATCH RECOGNIZE ( PARTITION BY customer ORDER BY sale date MEASURES MATCH NUMBER () AS match number , ARRAY AGG ( STRUCT ( MATCH ROW NUMBER () AS row , CLASSIFIER () AS symbol , sale date , product category )) AS sales PATTERN ( low + mid + high + ) DEFINE low AS amount < 50 , mid AS amount > = 50 AND amount < = 100 , high AS amount > 100 ); / ----------+--------------+-----------+--------------+-----------------+------------------------+ customer match number sales.row sales.symbol sales.sale date sales.product category +----------+--------------+-----------+--------------+-----------------+------------------------+ Ian 1 1 low 2024-02-01 Books 2 low 2024-02-08 Clothing 3 mid 2024-02-10 Clothing 4 high 2024-03-15 Electronics 5 high 2024-03-15 Electronics Ian 2 1 low 2024-03-21 Software 2 mid 2024-04-07 Books 3 high 2024-07-07 Clothing +----------+--------------+-----------+--------------+-----------------+------------------------ / The following example is similar to the previous one, except it allows overlapping matches: SELECT FROM Sales MATCH RECOGNIZE ( PARTITION BY customer ORDER BY sale date MEASURES MATCH NUMBER () AS match number , ARRAY AGG ( STRUCT ( MATCH ROW NUMBER () AS row , CLASSIFIER () AS symbol , sale date , product category )) AS sales AFTER MATCH SKIP TO NEXT ROW PATTERN ( low + mid + high + ) DEFINE low AS amount < 50 , mid AS amount > = 50 AND amount < = 100 , high AS amount > 100 ); / ----------+--------------+-----------+--------------+-----------------+------------------------+ customer match number sales.row sales.symbol sales.sale date sales.product category +----------+--------------+-----------+--------------+-----------------+------------------------+ Ian 1 1 low 2024-02-01 Books 2 low 2024-02-08 Clothing 3 mid 2024-02-10 Clothing 4 high 2024-03-15 Electronics 5 high 2024-03-15 Electronics Ian 2 1 low 2024-02-08 Clothing 2 mid 2024-02-10 Clothing 3 high 2024-03-15 Electronics 4 high 2024-03-15 Electronics Ian 3 1 low 2024-03-21 Software 2 mid 2024-04-07 Books 3 high 2024-07-07 Clothing +----------+--------------+-----------+--------------+-----------------+------------------------ / Best practices To scale the performance of queries that contain the MATCH RECOGNIZE clause, use the following best practices: Use the PARTITION BY clause.
- Provided there are no comma cross joins in the FROM clause, joins don't require parenthesis, though parenthesis can help readability: FROM A JOIN B JOIN C JOIN D USING ( w ) ON B . x = C . y ON A . z = B . x If your clause contains comma cross joins, you must use parentheses: FROM A , B JOIN C JOIN D ON C . x = D . y ON B . z = C . x // INVALID FROM A , B JOIN ( C JOIN D ON C . x = D . y ) ON B . z = C . x // VALID When comma cross joins are present in a query with a sequence of JOINs, they group from left to right like other JOIN types: FROM A JOIN B USING ( x ) JOIN C USING ( x ), D -- A JOIN B USING (x) = result 1 -- result 1 JOIN C USING (x) = result 2 -- result 2 CROSS JOIN D = return value There can't be a RIGHT JOIN or FULL JOIN after a comma cross join unless it's parenthesized: FROM A , B RIGHT JOIN C ON TRUE // INVALID FROM A , B FULL JOIN C ON TRUE // INVALID FROM A , B JOIN C ON TRUE // VALID FROM A , ( B RIGHT JOIN C ON TRUE ) // VALID FROM A , ( B FULL JOIN C ON TRUE ) // VALID Correlated join operation A join operation is correlated when the right from item contains a reference to at least one range variable or column name introduced by the left from item .
- FROM clause FROM from clause [, ...] from clause : from item [ { pivot operator unpivot operator match recognize clause } ] [ tablesample operator ] from item : { table name [ as alias ] [ FOR SYSTEM TIME AS OF timestamp expression ] { join operation ( join operation ) } ( query expr ) [ as alias ] field path unnest operator cte name [ as alias ] graph table operator [ as alias ] } as alias : [ AS ] alias The FROM clause indicates the table or tables from which to retrieve rows, and specifies how to join those rows together to produce a single stream of rows for processing in the rest of the query. pivot operator See PIVOT operator . unpivot operator See UNPIVOT operator . tablesample operator See TABLESAMPLE operator . match recognize clause See MATCH RECOGNIZE clause . graph table operator See GRAPH TABLE operator . table name The name (optionally qualified) of an existing table.
- FROM A FULL OUTER JOIN B ON A . w = B . y / Table A Table B Result +-------+ +-------+ +---------------------------+ w x y z = w x y z +-------+ +-------+ +---------------------------+ 1 a 2 k 1 a NULL NULL 2 b 3 m 2 b 2 k 3 c 3 n 3 c 3 m 3 d 4 p 3 c 3 n +-------+ +-------+ 3 d 3 m 3 d 3 n NULL NULL 4 p +---------------------------+ / FROM A FULL OUTER JOIN B USING ( x ) / Table A Table B Result +-------+ +-------+ +--------------------+ x y x z = x y z +-------+ +-------+ +--------------------+ 1 a 2 k 1 a NULL 2 b 3 m 2 b k 3 c 3 n 3 c m 3 d 4 p 3 c n +-------+ +-------+ 3 d m 3 d n 4 NULL p +--------------------+ / Example This query performs a FULL JOIN on the Roster and TeamMascot tables.

### Use administrative jobs explorer \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer](https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer)
- Source ID: `site-docs-reference-2`
- Final score: 155
- Re-rank relevance: N/A

Evidence snippets:
- The job performance comparison lets you compare your baseline job to targeted jobs, and the query analysis highlights job details that differ significantly between the two jobs.
- For information about how to interpret insights, see Interpret query performance insights .
- For more information, see Get query performance insights .
- BigQuery provides job details and insights through the following INFORMATION SCHEMA views: INFORMATION SCHEMA.JOBS BY PROJECT INFORMATION SCHEMA.JOBS BY ORGANIZATION INFORMATION SCHEMA.JOBS BY USER Note: If you use organization restrictions, see Enable access to Google-owned resources .

