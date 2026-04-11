---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.857Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery DML MERGE statement support"
feature_slug: "bigquery-dml-merge-statement-support"
latest_feature_date: "2019-02-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax"
  - "https://docs.cloud.google.com/bigquery/docs/data-manipulation-language"
keywords:
  - "WHEN NOT MATCHED"
  - "WHEN MATCHED"
  - "UPSERT"
  - "MERGE INTO SELECT"
  - "BigQuery DML syntax"
  - "MERGE statement"
  - "DML MERGE"
  - "MERGE INTO"
---

# BigQuery DML MERGE statement support

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery added general availability of DML MERGE statements.

## Extended Definition

BigQuery added general availability of DML MERGE statements.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax)
- [https://docs.cloud.google.com/bigquery/docs/data-manipulation-language](https://docs.cloud.google.com/bigquery/docs/data-manipulation-language)

## Supporting Pages

### "Data manipulation language (DML) statements in GoogleSQL \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax)
- Source ID: `site-docs-reference`
- Final score: 80
- Re-rank relevance: MODERATE
- Re-rank rationale: It documents MERGE as part of supported DML statements, which is useful for defining availability but does not specify GA timing.

Evidence snippets:
- MERGE [ INTO ] target name [[ AS ] alias ] USING source name [[ AS ] alias ] ON merge condition { when clause } + when clause ::= matched clause not matched by target clause not matched by source clause matched clause ::= WHEN MATCHED [ AND search condition ] THEN { merge update clause merge delete clause } not matched by target clause ::= WHEN NOT MATCHED [ BY TARGET ] [ AND search condition ] THEN merge insert clause not matched by source clause ::= WHEN NOT MATCHED BY SOURCE [ AND search condition ] THEN { merge update clause merge delete clause } merge condition ::= bool expression search condition ::= bool expression merge update clause ::= UPDATE SET update item [ , update item ] update item ::= column name = expression merge delete clause ::= DELETE merge insert clause ::= INSERT [ ( column 1 [ , ..., column n ] ) ] input input ::= VALUES ( expr 1 [ , ..., expr n ] ) ROW expr ::= expression DEFAULT Where: target name target name is the name of the table you’re changing. source name source name is a table name or subquery. merge condition A MERGE statement performs a JOIN between the target and the source.
- NewArrivals S ON T . product = S . product WHEN MATCHED THEN UPDATE SET quantity = T . quantity + S . quantity WHEN NOT MATCHED THEN INSERT ( product , quantity ) VALUES ( product , quantity ) These are the tables before you run the query: NewArrivals +-----------------+----------+--------------+ product quantity warehouse +-----------------+----------+--------------+ dryer 20 warehouse #2 oven 30 warehouse #3 refrigerator 25 warehouse #2 top load washer 10 warehouse #1 +-----------------+----------+--------------+ Inventory +-------------------+----------+--------------------+ product quantity supply constrained +-------------------+----------+--------------------+ dishwasher 30 false dryer 30 false front load washer 20 false microwave 20 false oven 5 true top load washer 10 true +-------------------+----------+--------------------+ This is the Inventory table after you run the query: Inventory +-------------------+----------+--------------------+ product quantity supply constrained +-------------------+----------+--------------------+ dishwasher 30 false dryer 50 false front load washer 20 false microwave 20 false oven 35 true refrigerator 25 NULL top load washer 20 true +-------------------+----------+--------------------+ Example 3 In the following example, the query increases the quantity of products from warehouse #1 by 20 in the NewArrivals table.
- Inventory S ON T . product = S . product WHEN NOT MATCHED AND quantity < 20 THEN INSERT ( product , quantity , supply constrained , comments ) VALUES ( product , quantity , true , ARRAY<STRUCT<created DATE , comment STRING >> [ ( DATE ( '2016-01-01' ), 'comment1' ) ] ) WHEN NOT MATCHED THEN INSERT ( product , quantity , supply constrained ) VALUES ( product , quantity , false ) These are the tables before you run the query: Inventory +-------------------+----------+ product quantity +-------------------+----------+ dishwasher 30 dryer 30 front load washer 20 microwave 20 oven 5 top load washer 10 +-------------------+----------+ DetailedInventory +----------------------+----------+--------------------+----------+----------------+ product quantity supply constrained comments specifications +----------------------+----------+--------------------+----------+----------------+ countertop microwave 20 NULL [] NULL front load washer 20 false [] NULL microwave 20 false [] NULL refrigerator 10 false [] NULL +----------------------+----------+--------------------+----------+----------------+ This is the DetailedInventory table after you run the query: DetailedInventory +----------------------+----------+--------------------+-------------------------------------------------+----------------+ product quantity supply constrained comments specifications +----------------------+----------+--------------------+-------------------------------------------------+----------------+ countertop microwave 20 NULL [] NULL dishwasher 30 false [] NULL dryer 30 false [] NULL front load washer 20 false [] NULL microwave 20 false [] NULL oven 5 true [{"created":"2016-01-01","comment":"comment1"}] NULL refrigerator 10 false [] NULL top load washer 10 true [{"created":"2016-01-01","comment":"comment1"}] NULL +----------------------+----------+--------------------+-------------------------------------------------+----------------+ Example 2 In the following example, the query merges items from the NewArrivals table into the Inventory table.
- Warehouse ON NewArrivals . warehouse = Warehouse . warehouse WHERE DetailedInventory . product = NewArrivals . product AND Warehouse . state = 'WA' Before: DetailedInventory +----------------------+----------+--------------------+----------+----------------+ product quantity supply constrained comments specifications +----------------------+----------+--------------------+----------+----------------+ countertop microwave 20 NULL [] NULL dishwasher 30 false [] NULL dryer 30 false [] NULL front load washer 20 false [] NULL microwave 20 false [] NULL oven 5 false [] NULL refrigerator 10 false [] NULL top load washer 10 false [] NULL +----------------------+----------+--------------------+----------+----------------+ New arrivals +-----------------+----------+--------------+ product quantity warehouse +-----------------+----------+--------------+ dryer 200 warehouse #2 oven 300 warehouse #3 top load washer 100 warehouse #1 +-----------------+----------+--------------+ Warehouse +--------------+-------+ warehouse state +--------------+-------+ warehouse #1 WA warehouse #2 CA warehouse #3 WA +--------------+-------+ After: +----------------------+----------+--------------------+----------+----------------+ product quantity supply constrained comments specifications +----------------------+----------+--------------------+----------+----------------+ countertop microwave 20 NULL [] NULL dishwasher 30 false [] NULL dryer 30 false [] NULL front load washer 20 false [] NULL microwave 20 false [] NULL oven 5 true [] NULL refrigerator 10 false [] NULL top load washer 10 true [] NULL +----------------------+----------+--------------------+----------+----------------+ MERGE statement A MERGE statement is a DML statement that can combine INSERT , UPDATE , and DELETE operations into a single statement and perform the operations atomically.

### "Transform data with data manipulation language (DML) \_|\_ BigQuery \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/data-manipulation-language](https://docs.cloud.google.com/bigquery/docs/data-manipulation-language)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- MERGE statement The MERGE statement combines the INSERT , UPDATE , and DELETE operations into a single statement and performs the operations atomically to merge data from one table to another.
- Fine-grained DML is a performance enhancement designed to optimize the execution of UPDATE , DELETE , and MERGE statements (also known as mutating DML statements).
- Correlated subqueries within a when clause , search condition , merge update clause or merge insert clause are not supported for MERGE statements.
- You can't create a table snapshot or table clone of a table with fine-grained DML enabled after executing an UPDATE , DELETE , or MERGE statement.

