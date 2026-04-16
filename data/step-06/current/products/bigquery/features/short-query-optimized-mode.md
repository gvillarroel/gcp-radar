---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.430Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Short query optimized mode"
feature_slug: "short-query-optimized-mode"
latest_feature_date: "2024-08-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
  - "https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas"
keywords:
  - "short"
  - "query"
  - "optimized"
  - "mode"
  - "lowers"
  - "latency"
  - "small"
  - "queries"
---

# Short query optimized mode

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Short query optimized mode lowers latency for small queries by automatically accelerating eligible queries.

## Extended Definition

Short query optimized mode lowers latency for small queries by automatically accelerating eligible queries.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- [https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas](https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas)

## Supporting Pages

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- Partner references Connect to a Google BigQuery database from Preset PuppyGraph Solution PuppyGraph Category BI, ML, & Advanced Analytics Description PuppyGraph is the first and only graph analytics engine in the market, empowering companies to transform existing relational data stores into a unified graph model in under 10 minutes, bypassing traditional graph database costs, latency, and maintenance hurdles.
- Partner references Move your data to BigQuery with millisecond latency BigQuery materialization connector BigQuery Batch Query Connector Partner Advantage page Direct link Fivetran Fivetran Data Pipelines Solution Fivetran Data Pipelines Category ETL & Data Integration Description Fivetran is a leader in automated data integration and delivers ready-to-use connectors that automatically adapt as schemas and APIs change, ensuring consistent, reliable access to data.
- Partner references Prophecy BigQuery Integration Read and write to catalog tables in BigQuery Partner Advantage page Direct link Qlik Solution Qlik Replicate Category ETL & Data Integration Description Qlik Replicate (formerly Attunity Replicate) is a high-performance data-replication tool offering optimized data ingestion from a broad array of data sources and platforms and seamless integration with all major big data analytics platforms.
- Partner references BigQuery Export Integration BigQuery Import Integration BigQuery Version 2 Export Partner Advantage page Direct link Union.ai Solution Union AI orchestrator Category BI, ML, & Advanced Analytics Description The Union platform empowers AI development teams to rapidly ship high-quality code to production by offering optimized performance, unparalleled resource efficiency, and a delightful workflow authoring experience.

### Query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `site-docs-reference`
- Final score: 185
- Re-rank relevance: N/A

Evidence snippets:
- SELECT item , purchases , category , LAST VALUE ( item ) OVER ( item window ) AS most popular FROM Produce WINDOW item window AS ( PARTITION BY category ORDER BY purchases ROWS BETWEEN 2 PRECEDING AND 2 FOLLOWING ) SELECT item , purchases , category , LAST VALUE ( item ) OVER ( d ) AS most popular FROM Produce WINDOW a AS ( PARTITION BY category ), b AS ( a ORDER BY purchases ), c AS ( b ROWS BETWEEN 2 PRECEDING AND 2 FOLLOWING ), d AS ( c ) SELECT item , purchases , category , LAST VALUE ( item ) OVER ( c ROWS BETWEEN 2 PRECEDING AND 2 FOLLOWING ) AS most popular FROM Produce WINDOW a AS ( PARTITION BY category ), b AS ( a ORDER BY purchases ), c AS b Set operators query expr [ { INNER [ { FULL LEFT } [ OUTER ] ] } ] { UNION { ALL DISTINCT } INTERSECT DISTINCT EXCEPT DISTINCT } [ { BY NAME [ ON ( column list ) ] [ STRICT ] CORRESPONDING [ BY ( column list ) ] } ] query expr Set operators combine or filter results from two or more input queries into a single result set.
- Smaller epsilons and more noise will provide greater privacy protection. -- This gets the average number of items requested per professor and adds -- noise to the results SELECT WITH DIFFERENTIAL PRIVACY OPTIONS ( epsilon = 10 , delta = .01 , max groups contributed = 2 , privacy unit column = id ) item , AVG ( quantity , contribution bounds per group = > ( 0 , 100 )) AS average quantity FROM professors GROUP BY item ; -- These results will change each time you run the query. -- The scissors group was removed this time, but might not be -- removed the next time. / ----------+------------------+ item average quantity +----------+------------------+ pencil 38.5038356810269 pen 13.4725028762032 +----------+------------------ / Remove noise Removing noise removes privacy protection.
- SELECT 1 AS one digit , 10 AS two digit , 100 AS three digit FULL OUTER UNION ALL BY NAME SELECT 20 AS two digit , 2 AS one digit , 1000 AS four digit ; / -----------+-----------+-------------+------------+ one digit two digit three digit four digit +-----------+-----------+-------------+------------+ 1 10 100 NULL 2 20 NULL 1000 +-----------+-----------+-------------+------------ / Similarly, the following example uses the LEFT OUTER mode prefix to include the new column from only the left input query and populate a NULL value for the missing column in the right input query.
- Examples In this example, a WITH clause defines two non-recursive CTEs that are referenced in the related set operation, where one CTE is referenced by each of the set operation's input query expressions: WITH subQ1 AS ( SELECT SchoolID FROM Roster ), subQ2 AS ( SELECT OpponentID FROM PlayerStats ) SELECT FROM subQ1 UNION ALL SELECT FROM subQ2 You can break up more complex queries into a WITH clause and WITH SELECT statement instead of writing nested table subqueries.

### Troubleshoot quota and limit errors \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas](https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Run queries in dry run mode , which estimates the number of bytes read but does not actually process the query.
- It is not optimized for an infinite number of small queries.
- While running a cached query does still count against your concurrent query limit, queries that use cached results are significantly faster than queries that don't use cached results because BigQuery does not need to compute the result set.
- Maximum number of concurrent queries that contain remote functions BigQuery returns this error when the number of concurrent queries that contain remote functions exceeds the limit.

