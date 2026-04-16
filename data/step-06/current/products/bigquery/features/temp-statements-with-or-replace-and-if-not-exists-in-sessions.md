---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.638Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "TEMP statements with OR REPLACE and IF NOT EXISTS in sessions"
feature_slug: "temp-statements-with-or-replace-and-if-not-exists-in-sessions"
latest_feature_date: "2023-01-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax"
keywords:
  - "temp"
  - "statements"
  - "replace"
  - "if"
  - "not"
  - "exists"
  - "sessions"
  - "session"
---

# TEMP statements with OR REPLACE and IF NOT EXISTS in sessions

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Session statements that use the TEMP keyword can also use OR REPLACE and IF NOT EXISTS.

## Extended Definition

Session statements that use the TEMP keyword can also use OR REPLACE and IF NOT EXISTS.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 159
- Re-rank relevance: N/A

Evidence snippets:
- Syntax To create a SQL UDF, use the following syntax: CREATE [ OR REPLACE ] [ TEMPORARY TEMP ] FUNCTION [ IF NOT EXISTS ] [[ project name . ] dataset name . ] function name ( [ named parameter [ , ... ]] ) ( [ named parameter [ , ... ]] ) [ RETURNS data type ] AS ( sql expression ) [ OPTIONS ( function option list ) ] named parameter : param name param type To create a JavaScript UDF, use the following syntax: CREATE [ OR REPLACE ] [ TEMPORARY TEMP ] FUNCTION [ IF NOT EXISTS ] [[ project name . ] dataset name . ] function name ( [ named parameter [ , ... ]] ) RETURNS data type [ determinism specifier ] LANGUAGE js [ OPTIONS ( function option list ) ] AS javascript code named parameter : param name param type determinism specifier : { DETERMINISTIC NOT DETERMINISTIC } To create a Python UDF, use the following syntax: Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Syntax CREATE [ OR REPLACE ] [ TEMP TEMPORARY ] TABLE [ IF NOT EXISTS ] table name [ ( column constraint definition [ , ... ] ) ] [ DEFAULT COLLATE collate specification ] [ PARTITION BY partition expression ] [ CLUSTER BY clustering column list ] [ WITH CONNECTION connection name ] [ OPTIONS ( table option list ) ] [ AS query statement ] column := column definition constraint definition := [ primary key ] [[ CONSTRAINT constraint name ] foreign key , ... ] primary key := PRIMARY KEY ( column name [ , ... ] ) NOT ENFORCED foreign key := FOREIGN KEY ( column name [ , ... ] ) foreign reference foreign reference := REFERENCES primary key table ( column name [ , ... ] ) NOT ENFORCED Arguments OR REPLACE : Replaces any table with the same name if it exists.
- CREATE [ OR REPLACE ] FUNCTION [ IF NOT EXISTS ] [ project name .] dataset name . function name ([ named parameter [, ...]]) RETURNS data type LANGUAGE python [ WITH CONNECTION connection path ] OPTIONS ( function option list ) AS python code named parameter : param name param type To create a remote function, use the following syntax: CREATE [ OR REPLACE ] [ TEMPORARY TEMP ] FUNCTION [ IF NOT EXISTS ] [[ project name . ] dataset name . ] function name ( [ named parameter [ , ... ]] ) RETURNS data type REMOTE WITH CONNECTION connection path [ OPTIONS ( function option list ) ] named parameter : param name param type Routine names must contain only letters, numbers, and underscores, and be at most 256 characters long.
- The constant expression cannot contain: A reference to a table Subqueries or SQL statements such as SELECT , CREATE , or UPDATE User-defined functions, aggregate functions, or analytic functions The following scalar functions: ARRAY TO STRING REPLACE REGEXP REPLACE RAND FORMAT LPAD RPAD REPEAT SESSION USER GENERATE ARRAY GENERATE DATE ARRAY If VALUE evaluates to NULL , the corresponding option NAME in the CREATE VIEW statement is ignored. privacy policy The following policies are available in the privacy policy view option to create analysis rules .

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- Synopsis bq insert [ FLAGS ] TABLE FILE Examples bq insert --ignore unknown values --template suffix = insert myDataset.myTable /tmp/myData.json echo '{"a":1, "b":2}' bq insert myDataset.myTable Flags and arguments The bq insert command uses the following flags and arguments: --ignore unknown values={true false} or -i={true false} When set to true , BigQuery ignores any key-value pairs that don't match the table's schema, and inserts the row with the data that does match the schema.
- For example: bq --location=us mk --reservation --project id=project reservation name You can specify command arguments in the following ways: -- FLAG ARGUMENT (as shown in the previous examples) -- FLAG = ARGUMENT -- FLAG =' ARGUMENT ' -- FLAG =" ARGUMENT " -- FLAG ' ARGUMENT ' -- FLAG " ARGUMENT " Replace the following: FLAG : a global or command-specific flag ARGUMENT : the flag's argument Some commands require the use of quotes around arguments.
- If --autodetect is false , and no schema is specified by using the --schema flag, and the destination table exists, then the schema of the destination table is used. --clustering fields= COLUMNS A comma-separated list of up to four column names that specifies the fields to use for table clustering . --column name character map= SCOPE Defines the scope and handling of characters in column names, with the option of enabling flexible column names .
- Synopsis bq rm [ FLAGS ] RESOURCE Flags and arguments The bq rm command uses the following flags and arguments: --capacity commitment={false true} To delete a capacity commitment, set to true , specify the location of the commitment you want to remove by using the --location flag, and replace RESOURCE with the ID of the commitment you want to remove. --dataset={true false} or -d={true false} To delete a dataset, set to true .

### "Data manipulation language (DML) statements in GoogleSQL \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax)
- Source ID: `site-docs-reference`
- Final score: 119
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Warehouse t2 ON t1 . warehouse = t2 . warehouse ) S ON T . product = S . product WHEN MATCHED AND state = 'CA' THEN UPDATE SET quantity = T . quantity + S . quantity WHEN MATCHED THEN DELETE These are the tables before you run the query: Warehouse +--------------+-------+ warehouse state +--------------+-------+ warehouse #1 WA warehouse #2 CA warehouse #3 WA +--------------+-------+ NewArrivals +-----------------+----------+--------------+ product quantity warehouse +-----------------+----------+--------------+ dryer 20 warehouse #2 refrigerator 25 warehouse #2 top load washer 30 warehouse #1 +-----------------+----------+--------------+ Inventory +-----------------+----------+ product quantity +-----------------+----------+ dryer 50 microwave 20 oven 35 refrigerator 25 top load washer 30 +-----------------+----------+ This is the Inventory table after you run the query: Inventory +--------------+----------+ product quantity +--------------+----------+ dryer 70 microwave 20 oven 35 refrigerator 50 +--------------+----------+ Example 7 In the following example, a runtime error is returned because the query attempts to update a target table when the source contains more than one matched row.
- NewArrivals WHERE warehouse <> 'warehouse #2' ) S ON T . product = S . product WHEN MATCHED AND T . warehouse = 'warehouse #1' THEN UPDATE SET quantity = T . quantity + 20 WHEN MATCHED THEN DELETE This is the NewArrivals table before you run the query: NewArrivals +-----------------+----------+--------------+ product quantity warehouse +-----------------+----------+--------------+ dryer 20 warehouse #2 oven 30 warehouse #3 refrigerator 25 warehouse #2 top load washer 10 warehouse #1 +-----------------+----------+--------------+ This is the NewArrivals table after you run the query: NewArrivals +-----------------+----------+--------------+ product quantity warehouse +-----------------+----------+--------------+ dryer 20 warehouse #2 refrigerator 25 warehouse #2 top load washer 30 warehouse #1 +-----------------+----------+--------------+ Example 4 In the following example, the query replaces all products like '%washer%' in the Inventory table by using the values in the NewArrivals table.
- NewArrivals ) Before: Inventory +-------------------+----------+--------------------+ product quantity supply constrained +-------------------+----------+--------------------+ dishwasher 30 NULL dryer 30 NULL front load washer 20 NULL microwave 20 NULL oven 5 NULL refrigerator 10 NULL top load washer 10 NULL +-------------------+----------+--------------------+ NewArrivals +-----------------+----------+--------------+ product quantity warehouse +-----------------+----------+--------------+ dryer 200 warehouse #2 oven 300 warehouse #3 top load washer 100 warehouse #1 +-----------------+----------+--------------+ After: Inventory +-----------------+----------+--------------------+ product quantity supply constrained +-----------------+----------+--------------------+ dryer 30 NULL oven 5 NULL top load washer 10 NULL +-----------------+----------+--------------------+ Alternately, you can use DELETE with the EXISTS clause: DELETE dataset .
- NewArrivals S ON T . product = S . product WHEN MATCHED THEN UPDATE SET quantity = T . quantity + S . quantity These are the tables before you run the query: NewArrivals +-----------------+----------+--------------+ product quantity warehouse +-----------------+----------+--------------+ dryer 10 warehouse #2 dryer 20 warehouse #1 refrigerator 25 warehouse #2 top load washer 30 warehouse #1 +-----------------+----------+--------------+ Inventory +--------------+----------+ product quantity +--------------+----------+ dryer 70 microwave 20 oven 35 refrigerator 50 +--------------+----------+ When you run the query, the following error is returned: UPDATE/MERGE must match at most one source row for each target row Example 8 In the following example, all of the products in the NewArrivals table are replaced with values from the subquery.

