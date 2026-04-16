---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.352Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Execution graph query text view"
feature_slug: "execution-graph-query-text-view"
latest_feature_date: "2025-05-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
  - "https://docs.cloud.google.com/bigquery/docs/column-data-masking-intro"
keywords:
  - "execution"
  - "graph"
  - "query"
  - "text"
  - "view"
  - "bigquery"
  - "graphs"
  - "now"
---

# Execution graph query text view

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery execution graphs now show query text sections that relate stage steps back to the original query text.

## Extended Definition

BigQuery execution graphs now show query text sections that relate stage steps back to the original query text.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer](https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- [https://docs.cloud.google.com/bigquery/docs/column-data-masking-intro](https://docs.cloud.google.com/bigquery/docs/column-data-masking-intro)

## Supporting Pages

### Use administrative jobs explorer \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer](https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer)
- Source ID: `site-docs-reference-2`
- Final score: 189
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can also select individual jobs to open the job details page , which provides query details such as execution graphs, SQL text, and execution history to help you diagnose and troubleshoot queries.
- The Performance tab compiles query information including the execution graph, the SQL text, and execution history.
- Before you begin To get the permissions that you need to work with BigQuery job details and system-level details, ask your administrator to grant you the following IAM roles on your organization or project: View job details: BigQuery Resource Viewer ( roles/bigquery.resourceViewer ) - the project where the queries were run View system-level details: BigQuery Resource Viewer ( roles/bigquery.resourceViewer ) - the administration project For more information about granting roles, see Manage access to projects, folders, and organizations .
- Before you begin To get the permissions that you need to work with BigQuery job details and system-level details, ask your administrator to grant you the following IAM roles on your organization or project: View job details: BigQuery Resource Viewer ( roles/bigquery.resourceViewer ) - the project where the queries were run View system-level details: BigQuery Resource Viewer ( roles/bigquery.resourceViewer ) - the administration project For more information about granting roles, see Manage access to projects, folders, and organizations .

### Query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `site-docs-reference`
- Final score: 173
- Re-rank relevance: N/A

Evidence snippets:
- The following examples illustrate the use of parentheses with set operations: -- Same set operations, no parentheses. query1 UNION ALL query2 UNION ALL query3 ; -- Different set operations, parentheses needed. query1 UNION ALL ( query2 UNION DISTINCT query3 ); -- Invalid query1 UNION ALL query2 UNION DISTINCT query3 ; -- Same set operations, no parentheses. query1 EXCEPT DISTINCT query2 EXCEPT DISTINCT query3 ; -- Equivalent query with optional parentheses, returns same results. ( query1 EXCEPT DISTINCT query2 ) EXCEPT DISTINCT query3 ; -- Different execution order with a subquery, parentheses needed. query1 EXCEPT DISTINCT ( query2 EXCEPT DISTINCT query3 ); Set operator behavior with duplicate rows Consider a given row R that appears exactly m times in the first input query and n times in the second input query, where m >= 0 and n >= 0 : For UNION ALL , row R appears exactly m + n times in the result.
- FROM clause FROM from clause [, ...] from clause : from item [ { pivot operator unpivot operator match recognize clause } ] [ tablesample operator ] from item : { table name [ as alias ] [ FOR SYSTEM TIME AS OF timestamp expression ] { join operation ( join operation ) } ( query expr ) [ as alias ] field path unnest operator cte name [ as alias ] graph table operator [ as alias ] } as alias : [ AS ] alias The FROM clause indicates the table or tables from which to retrieve rows, and specifies how to join those rows together to produce a single stream of rows for processing in the rest of the query. pivot operator See PIVOT operator . unpivot operator See UNPIVOT operator . tablesample operator See TABLESAMPLE operator . match recognize clause See MATCH RECOGNIZE clause . graph table operator See GRAPH TABLE operator . table name The name (optionally qualified) of an existing table.
- A and B reference each other, which creates a cycle: WITH A AS ( SELECT FROM B ), B AS ( SELECT FROM A ) SELECT FROM B -- Error AGGREGATION THRESHOLD clause Syntax for an aggregation threshold analysis rule–enforced query: WITH AGGREGATION THRESHOLD OPTIONS ( threshold = threshold amount , privacy unit column = column name ) Syntax for an aggregation threshold analysis rule–enforced view: WITH AGGREGATION THRESHOLD [ OPTIONS ( [ threshold = threshold amount ], [ privacy unit column = column name ] ) ] Description Use the AGGREGATION THRESHOLD clause to enforce an aggregation threshold.
- ExamView GROUP BY test id ; / ---------+---------------+----------------+ test id student count avg test score +---------+---------------+----------------+ P91 3 510.0 U25 4 516.0 +---------+---------------+---------------- / In the following example, an aggregation threshold analysis rule is enforced on the previous view, but the threshold is adjusted from 3 in the view to 4 in the query: SELECT WITH AGGREGATION THRESHOLD OPTIONS ( threshold = 4 ) test id , COUNT ( DISTINCT last name ) AS student count , AVG ( test score ) AS avg test score FROM mydataset .

### Introduction to data masking \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/column-data-masking-intro](https://docs.cloud.google.com/bigquery/docs/column-data-masking-intro)
- Source ID: `site-docs-reference-5`
- Final score: 169
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Roles for attaching policy tags to columns You need the datacatalog.taxonomies.get and bigquery.tables.setCategory permissions to attach policy tags to columns. datacatalog.taxonomies.get is included in the Data Catalog Policy Tags Admin and Viewer roles. bigquery.tables.setCategory is included in the BigQuery Admin ( roles/bigquery.admin ) and BigQuery Data Owner ( roles/bigquery.dataOwner ) roles.
- BigQuery redacting constants from execution details helps prevent salt exposure.
- Roles for creating and managing data policies You need one of the following BigQuery roles to create and manage data policies: Role/ID Permissions Description BigQuery Data Policy Admin ( bigquerydatapolicy.admin ) BigQuery Admin ( bigquery.admin ) BigQuery Data Owner ( bigquery.dataOwner ) bigquery.dataPolicies.create bigquery.dataPolicies.delete bigquery.dataPolicies.get bigquery.dataPolicies.getIamPolicy bigquery.dataPolicies.list bigquery.dataPolicies.setIamPolicy bigquery.dataPolicies.update The bigquery.dataPolicies.create and bigquery.dataPolicies.list permissions apply at the project level.
- The following results are returned: SSN Priority Lifetime value Creation date Email NULL "" Zmy9vydG5q= March 8, 1983 NULL NULL "" GhwTwq6Ynm= December 29, 2009 NULL NULL "" B6y7dsgaT9= July 14, 2021 NULL NULL "" Uh02hnR1sg= May 5, 1997 NULL All other users : Any user who does not belong to one of the listed groups gets an access denied error, because they haven't been granted the Data Catalog Fine-Grained Reader or BigQuery Masked Reader roles.

