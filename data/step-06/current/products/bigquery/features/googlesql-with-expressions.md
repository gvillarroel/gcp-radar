---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.313Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "GoogleSQL WITH expressions"
feature_slug: "googlesql-with-expressions"
latest_feature_date: "2025-08-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators"
keywords:
  - "googlesql"
  - "expressions"
  - "supports"
  - "creating"
  - "temporary"
  - "variables"
  - "queries"
---

# GoogleSQL WITH expressions

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

GoogleSQL supports WITH expressions for creating temporary variables in queries.

## Extended Definition

GoogleSQL supports WITH expressions for creating temporary variables in queries.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 181
- Re-rank relevance: N/A

Evidence snippets:
- You can reuse persistent UDFs across multiple queries, whereas you can only use temporary UDFs in a single query, script, session, or procedure. project name : For persistent functions, the name of the project where you are creating the function.
- CREATE MATERIALIZED VIEW IF NOT EXISTS myproject . mydataset . new mv OPTIONS ( expiration timestamp = TIMESTAMP ADD ( CURRENT TIMESTAMP (), INTERVAL 48 HOUR ), friendly name = "new mv" , description = "a view that expires in 2 days" , labels =[ ( "org unit" , "development" ) ] , enable refresh = false ) AS SELECT column 1 , column 2 , column 3 FROM myproject.mydataset.mytable The materialized view is defined using the following GoogleSQL query: SELECT column 1, column 2, column 3 FROM myproject.mydataset.mytable The materialized view option list specifies the: Expiration time: 48 hours from the time the view is created Friendly name: new mv Description: A view that expires in 2 days Label: org unit = development Refresh enabled: false Creating a materialized view with partitioning and clustering The following example creates a materialized view named new mv in mydataset , partitioned by the col datetime column and clustered by the col int column: CREATE MATERIALIZED VIEW myproject . mydataset . new mv PARTITION BY DATE ( col datetime ) CLUSTER BY col int AS SELECT col int , col datetime , COUNT ( 1 ) as cnt FROM myproject . mydataset . mv base table GROUP BY col int , col datetime The base table, mv base table , must also be partitioned by the col datetime column.
- Examples Creating a new view The following example creates a view named newview in mydataset : CREATE VIEW myproject.mydataset.newview OPTIONS ( expiration timestamp = TIMESTAMP ADD ( CURRENT TIMESTAMP (), INTERVAL 48 HOUR ), friendly name = "newview" , description = "a view that expires in 2 days" , labels =[ ( "org unit" , "development" ) ] ) AS SELECT column 1 , column 2 , column 3 FROM myproject.mydataset.mytable If the view name exists in the dataset, the following error is returned: Already Exists: project id:dataset.table The view is defined using the following GoogleSQL query: SELECT column 1, column 2, column 3 FROM myproject.mydataset.mytable The view option list specifies the: Expiration time: 48 hours from the time the view is created Friendly name: newview Description: A view that expires in 2 days Label: org unit = development Creating a view only if the view doesn't exist The following example creates a view named newview in mydataset only if no view named newview exists in mydataset .
- NAME and VALUE must be one of the following combinations: NAME VALUE Details enable refresh BOOLEAN Example: enable refresh=false Default: true refresh interval minutes FLOAT64 Example: refresh interval minutes=20 Default: refresh interval minutes=30 expiration timestamp TIMESTAMP Example: expiration timestamp=TIMESTAMP "2025-01-01 00:00:00 UTC" This property is equivalent to the expirationTime table resource property. expiration timestamp is optional and not used by default. max staleness INTERVAL Example: max staleness=INTERVAL "4:0:0" HOUR TO SECOND The max staleness property provides consistently high performance with controlled costs when processing large, frequently changing datasets. max staleness is disabled by default. allow non incremental definition BOOLEAN Example: allow non incremental definition=true The allow non incremental definition property supports an expanded range of SQL queries to create materialized views. allow non incremental definition=true is disabled by default.

### Query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `site-docs-reference`
- Final score: 169
- Re-rank relevance: N/A

Evidence snippets:
- Examples In this example, a WITH clause defines two non-recursive CTEs that are referenced in the related set operation, where one CTE is referenced by each of the set operation's input query expressions: WITH subQ1 AS ( SELECT SchoolID FROM Roster ), subQ2 AS ( SELECT OpponentID FROM PlayerStats ) SELECT FROM subQ1 UNION ALL SELECT FROM subQ2 You can break up more complex queries into a WITH clause and WITH SELECT statement instead of writing nested table subqueries.
- To force the path to be interpreted as a table name, wrap the path using . unnest operator See UNNEST operator . cte name Common table expressions (CTEs) in a WITH Clause act like temporary tables that you can reference anywhere in the FROM clause.
- WITH Grid AS ( SELECT 1 x , 2 y ) SELECT Coordinate FROM Grid AS Coordinate ; / --------------+ Coordinate +--------------+ {x: 1, y: 2} +-------------- / Value tables In addition to standard SQL tables , GoogleSQL supports value tables .
- Visibility in the FROM clause GoogleSQL processes aliases in a FROM clause from left to right, and aliases are visible only to subsequent path expressions in a FROM clause.

### Operators \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators)
- Source ID: `site-docs-root`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- Examples The examples in this section reference a table called entry table : / -------+ entry +-------+ a b c NULL +------- / SELECT 'a' FROM entry table WHERE entry = 'a' -- a => 'a' = 'a' => TRUE -- b => 'b' = 'a' => FALSE -- NULL => NULL = 'a' => NULL / -------+ entry +-------+ a +------- / SELECT entry FROM entry table WHERE NOT ( entry = 'a' ) -- a => NOT('a' = 'a') => NOT(TRUE) => FALSE -- b => NOT('b' = 'a') => NOT(FALSE) => TRUE -- NULL => NOT(NULL = 'a') => NOT(NULL) => NULL / -------+ entry +-------+ b c +------- / SELECT entry FROM entry table WHERE entry IS NULL -- a => 'a' IS NULL => FALSE -- b => 'b' IS NULL => FALSE -- NULL => NULL IS NULL => TRUE / -------+ entry +-------+ NULL +------- / Graph logical operators GoogleSQL supports the following logical operators in element pattern label expressions : Name Syntax Description NOT !X Returns TRUE if X isn't included, otherwise, returns FALSE .
- Graph predicates GoogleSQL supports the following graph-specific predicates in graph expressions.
- Logical operators GoogleSQL supports the AND , OR , and NOT logical operators.
- GoogleSQL for BigQuery supports operators.

