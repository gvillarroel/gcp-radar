---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.322Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "WITH pipe operator"
feature_slug: "with-pipe-operator"
latest_feature_date: "2025-07-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/pipe-syntax-guide"
  - "https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
keywords:
  - "pipe"
  - "operator"
  - "defines"
  - "common"
  - "table"
  - "expressions"
  - "syntax"
  - "queries"
---

# WITH pipe operator

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The WITH pipe operator defines common table expressions in pipe syntax queries.

## Extended Definition

The WITH pipe operator defines common table expressions in pipe syntax queries.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/pipe-syntax-guide](https://docs.cloud.google.com/bigquery/docs/pipe-syntax-guide)
- [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)

## Supporting Pages

### Work with pipe query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/pipe-syntax-guide](https://docs.cloud.google.com/bigquery/docs/pipe-syntax-guide)
- Source ID: `site-docs-reference-2`
- Final score: 219
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Produce AS ( SELECT 'apples' AS item , 2 AS sales , 'fruit' AS category UNION ALL SELECT 'apples' AS item , 7 AS sales , 'fruit' AS category UNION ALL SELECT 'carrots' AS item , 0 AS sales , 'vegetable' AS category UNION ALL SELECT 'bananas' AS item , 15 AS sales , 'fruit' AS category ); The following queries each contain valid pipe syntax that shows how you can build a query sequentially.
- Use cases Common use cases for pipe syntax include the following: Ad-hoc analysis and incremental query building : The logical order of operations makes it easier to write and debug queries.
- The linear structure of pipe syntax lets you write queries so that the order of the query syntax matches the order of logical steps taken to build the result table.
- Pipe syntax works anywhere standard syntax is supported: in queries, views, table-valued functions, and other contexts.

### "Legacy SQL Syntax, Functions and Operators \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- Source ID: `site-docs-reference`
- Final score: 218
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- BigQuery queries can execute directly over tables, over subqueries, over joined tables, and over tables modified by special-purpose operators described below.
- Syntax Logical operators expr AND expr Returns true if both expressions are true. expr OR expr Returns true if one or both expressions are true.
- Syntax Table wildcard functions TABLE DATE RANGE() Queries multiple daily tables that span a date range.
- Example: match tables whose names contain "oo" and have a length greater than 4 This example assumes the following tables exist: mydata.boo mydata.fork mydata.ooze mydata.spoon legacySQL SELECT speed FROM ( TABLE QUERY ([ myproject - 1234 : mydata ], 'table id CONTAINS "oo" AND length(table id) >= 4' )) Matches the following tables: mydata.ooze mydata.spoon Example: match tables whose names start with "boo", followed by 3-5 numeric digits This example assumes the following tables exist in a project named myproject-1234 : mydata.book4 mydata.book418 mydata.boom12345 mydata.boom123456789 mydata.taboo999 legacySQL SELECT speed FROM TABLE QUERY ([ myproject - 1234 : mydata ], 'REGEXP MATCH(table id, r"^boo[\d]{3,5}")' ) Matches the following tables: mydata.book418 mydata.boom12345 URL functions Syntax URL functions HOST() Given a URL, returns the host name as a string.

### Query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `site-docs-reference`
- Final score: 214
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Examples In this example, a WITH clause defines two non-recursive CTEs that are referenced in the related set operation, where one CTE is referenced by each of the set operation's input query expressions: WITH subQ1 AS ( SELECT SchoolID FROM Roster ), subQ2 AS ( SELECT OpponentID FROM PlayerStats ) SELECT FROM subQ1 UNION ALL SELECT FROM subQ2 You can break up more complex queries into a WITH clause and WITH SELECT statement instead of writing nested table subqueries.
- To force the path to be interpreted as a table name, wrap the path using . unnest operator See UNNEST operator . cte name Common table expressions (CTEs) in a WITH Clause act like temporary tables that you can reference anywhere in the FROM clause.
- The following table shows the equivalent syntaxes between the BY NAME and CORRESPONDING modifiers, using the UNION ALL set operator as an example: BY NAME syntax Equivalent CORRESPONDING syntax UNION ALL BY NAME UNION ALL STRICT CORRESPONDING INNER UNION ALL BY NAME UNION ALL CORRESPONDING {LEFT FULL} [OUTER] UNION ALL BY NAME {LEFT FULL} [OUTER] UNION ALL CORRESPONDING [FULL] OUTER UNION ALL BY NAME [FULL] OUTER UNION ALL CORRESPONDING UNION ALL BY NAME ON (col1, col2, ...) UNION ALL STRICT CORRESPONDING BY (col1, col2, ...) The following table shows the behavior of the mode prefixes for the BY NAME and CORRESPONDING modifiers when left and right input columns don't match: Mode prefix and modifier Behavior when left and right input columns don't match BY NAME (no prefix) or STRICT CORRESPONDING Error, all columns must match in both inputs.
- WITH RECURSIVE T1 AS (( SELECT 1 AS n ) UNION ALL ( SELECT n + 1 FROM T1 ORDER BY n )) SELECT FROM T1 ; -- Error The following recursive CTE is disallowed because table T1 can't be recursively referenced from inside an inner WITH clause WITH RECURSIVE T1 AS (( SELECT 1 AS n ) UNION ALL ( WITH t AS ( SELECT n FROM T1 ) SELECT FROM t )) SELECT FROM T1 -- Error CTE rules and constraints Common table expressions (CTEs) can be referenced inside the query expression that contains the WITH clause.

