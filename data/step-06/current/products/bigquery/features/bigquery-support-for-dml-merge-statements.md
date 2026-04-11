---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.877Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery support for DML MERGE statements"
feature_slug: "bigquery-support-for-dml-merge-statements"
latest_feature_date: "2018-04-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax"
  - "https://docs.cloud.google.com/bigquery/docs/data-manipulation-language"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "UPSERT (MERGE)"
  - "WHEN MATCHED"
  - "BigQuery DML merge"
  - "MERGE statement"
  - "DML MERGE"
  - "MERGE INTO"
  - "MERGE"
---

# BigQuery support for DML MERGE statements

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery added support for DML MERGE statements, initially in beta.

## Extended Definition

BigQuery added support for DML MERGE statements, initially in beta.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax)
- [https://docs.cloud.google.com/bigquery/docs/data-manipulation-language](https://docs.cloud.google.com/bigquery/docs/data-manipulation-language)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "Data manipulation language (DML) statements in GoogleSQL \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax)
- Source ID: `site-docs-reference`
- Final score: 82
- Re-rank relevance: MODERATE
- Re-rank rationale: The page includes MERGE in the DML syntax and billing formulas, confirming MERGE support, but it does not discuss beta launch status.

Evidence snippets:
- MERGE [ INTO ] target name [[ AS ] alias ] USING source name [[ AS ] alias ] ON merge condition { when clause } + when clause ::= matched clause not matched by target clause not matched by source clause matched clause ::= WHEN MATCHED [ AND search condition ] THEN { merge update clause merge delete clause } not matched by target clause ::= WHEN NOT MATCHED [ BY TARGET ] [ AND search condition ] THEN merge insert clause not matched by source clause ::= WHEN NOT MATCHED BY SOURCE [ AND search condition ] THEN { merge update clause merge delete clause } merge condition ::= bool expression search condition ::= bool expression merge update clause ::= UPDATE SET update item [ , update item ] update item ::= column name = expression merge delete clause ::= DELETE merge insert clause ::= INSERT [ ( column 1 [ , ..., column n ] ) ] input input ::= VALUES ( expr 1 [ , ..., expr n ] ) ROW expr ::= expression DEFAULT Where: target name target name is the name of the table you’re changing. source name source name is a table name or subquery. merge condition A MERGE statement performs a JOIN between the target and the source.
- Warehouse ON NewArrivals . warehouse = Warehouse . warehouse WHERE DetailedInventory . product = NewArrivals . product AND Warehouse . state = 'WA' Before: DetailedInventory +----------------------+----------+--------------------+----------+----------------+ product quantity supply constrained comments specifications +----------------------+----------+--------------------+----------+----------------+ countertop microwave 20 NULL [] NULL dishwasher 30 false [] NULL dryer 30 false [] NULL front load washer 20 false [] NULL microwave 20 false [] NULL oven 5 false [] NULL refrigerator 10 false [] NULL top load washer 10 false [] NULL +----------------------+----------+--------------------+----------+----------------+ New arrivals +-----------------+----------+--------------+ product quantity warehouse +-----------------+----------+--------------+ dryer 200 warehouse #2 oven 300 warehouse #3 top load washer 100 warehouse #1 +-----------------+----------+--------------+ Warehouse +--------------+-------+ warehouse state +--------------+-------+ warehouse #1 WA warehouse #2 CA warehouse #3 WA +--------------+-------+ After: +----------------------+----------+--------------------+----------+----------------+ product quantity supply constrained comments specifications +----------------------+----------+--------------------+----------+----------------+ countertop microwave 20 NULL [] NULL dishwasher 30 false [] NULL dryer 30 false [] NULL front load washer 20 false [] NULL microwave 20 false [] NULL oven 5 true [] NULL refrigerator 10 false [] NULL top load washer 10 true [] NULL +----------------------+----------+--------------------+----------+----------------+ MERGE statement A MERGE statement is a DML statement that can combine INSERT , UPDATE , and DELETE operations into a single statement and perform the operations atomically.
- NewArrivals S ON T . product = S . product WHEN MATCHED THEN UPDATE SET quantity = T . quantity + S . quantity These are the tables before you run the query: NewArrivals +-----------------+----------+--------------+ product quantity warehouse +-----------------+----------+--------------+ dryer 10 warehouse #2 dryer 20 warehouse #1 refrigerator 25 warehouse #2 top load washer 30 warehouse #1 +-----------------+----------+--------------+ Inventory +--------------+----------+ product quantity +--------------+----------+ dryer 70 microwave 20 oven 35 refrigerator 50 +--------------+----------+ When you run the query, the following error is returned: UPDATE/MERGE must match at most one source row for each target row Example 8 In the following example, all of the products in the NewArrivals table are replaced with values from the subquery.
- DML statement Bytes processed INSERT q' UPDATE q' + t' DELETE q' + t' MERGE If there are only INSERT clauses in the MERGE statement: q' .

### "Transform data with data manipulation language (DML) \_|\_ BigQuery \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/data-manipulation-language](https://docs.cloud.google.com/bigquery/docs/data-manipulation-language)
- Source ID: `site-docs-reference`
- Final score: 66
- Re-rank relevance: STRONG
- Re-rank rationale: The page includes MERGE as a DML type and lists MERGE-specific limitations, directly confirming MERGE statement support.

Evidence snippets:
- MERGE statement The MERGE statement combines the INSERT , UPDATE , and DELETE operations into a single statement and performs the operations atomically to merge data from one table to another.
- Fine-grained DML is a performance enhancement designed to optimize the execution of UPDATE , DELETE , and MERGE statements (also known as mutating DML statements).
- Correlated subqueries within a when clause , search condition , merge update clause or merge insert clause are not supported for MERGE statements.
- You can't create a table snapshot or table clone of a table with fine-grained DML enabled after executing an UPDATE , DELETE , or MERGE statement.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- WeightedAverage ( x INT64 , weight FLOAT64 , initialSum FLOAT64 NOT AGGREGATE ) RETURNS INT64 LANGUAGE js AS ' '' export function initialState(initialSum) { return {count: 0, sum: initialSum} } export function aggregate(state, x, weight) { state.count += 1; state.sum += Number(x) weight; } export function merge(state, partialState) { state.sum += partialState.sum; state.count += partialState.count; } export function finalize(state) { return state.sum / state.count; } '' ' ; SELECT my project . my dataset .
- The JavaScript UDAF body is quoted within a raw string: CREATE TEMP AGGREGATE FUNCTION SumPositive ( x FLOAT64 ) RETURNS FLOAT64 LANGUAGE js AS r ' '' export function initialState() { return {sum: 0} } export function aggregate(state, x) { if (x > 0) { state.sum += x; } } export function merge(state, partialState) { state.sum += partialState.sum; } export function finalize(state) { return state.sum; } '' ' ; -- Call the JavaScript UDAF.
- Syntax: export function merge ( state , partialState [, nonAggregateParam ]){...} Parameters: state : The state into which partialState is merged. partialState : The second aggregation state to merge. nonAggregateParam : Replace with a NOT AGGREGATE function parameter name.
- Example: export function aggregate ( currentState , aggX , aggWeight , initialSum ) merge function: Combines two aggregation states from a prior call to the aggregate , merge , or initialState function.

