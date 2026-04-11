---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.455Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery set operations BY NAME and CORRESPONDING"
feature_slug: "bigquery-set-operations-by-name-and-corresponding"
latest_feature_date: "2025-02-03"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
keywords:
  - "name-aligned set operations"
  - "INTERSECT BY NAME"
  - "EXCEPT CORRESPONDING"
  - "name-based set operations"
  - "UNION BY NAME"
  - "set operations BY NAME"
  - "CORRESPONDING"
  - "BY NAME"
---

# BigQuery set operations BY NAME and CORRESPONDING

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery now supports BY NAME and CORRESPONDING modifiers for set operations to align columns by name instead of position.

## Extended Definition

BigQuery standard SQL set operators (UNION, INTERSECT, EXCEPT) support optional BY NAME and CORRESPONDING modifiers to align columns between queries by column name rather than strictly by position. The query syntax grammar shows forms like `EXCEPT BY NAME ...`, `INTERSECT CORRESPONDING`, and variants with `ON (...)`, `BY (...)`, `STRICT`, and mode prefixes, and documented examples show BY NAME producing equivalent results to STRICT CORRESPONDING and returning aligned rows when input columns are reordered. The syntax also distinguishes behavior when input columns do not match, with strict matching required in the BY NAME/STRICT CORRESPONDING case shown.

## Evidence Summary

The BigQuery query-syntax reference explicitly documents BY NAME/CORRESPONDING set-operator modifiers, their syntax options, and equivalent/behavioral examples demonstrating name-based column matching.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)

## Supporting Pages

### Query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `site-docs-reference`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- SELECT item , purchases , category , LAST VALUE ( item ) OVER ( item window ) AS most popular FROM Produce WINDOW item window AS ( PARTITION BY category ORDER BY purchases ROWS BETWEEN 2 PRECEDING AND 2 FOLLOWING ) SELECT item , purchases , category , LAST VALUE ( item ) OVER ( d ) AS most popular FROM Produce WINDOW a AS ( PARTITION BY category ), b AS ( a ORDER BY purchases ), c AS ( b ROWS BETWEEN 2 PRECEDING AND 2 FOLLOWING ), d AS ( c ) SELECT item , purchases , category , LAST VALUE ( item ) OVER ( c ROWS BETWEEN 2 PRECEDING AND 2 FOLLOWING ) AS most popular FROM Produce WINDOW a AS ( PARTITION BY category ), b AS ( a ORDER BY purchases ), c AS b Set operators query expr [ { INNER [ { FULL LEFT } [ OUTER ] ] } ] { UNION { ALL DISTINCT } INTERSECT DISTINCT EXCEPT DISTINCT } [ { BY NAME [ ON ( column list ) ] [ STRICT ] CORRESPONDING [ BY ( column list ) ] } ] query expr Set operators combine or filter results from two or more input queries into a single result set.
- The following table shows the equivalent syntaxes between the BY NAME and CORRESPONDING modifiers, using the UNION ALL set operator as an example: BY NAME syntax Equivalent CORRESPONDING syntax UNION ALL BY NAME UNION ALL STRICT CORRESPONDING INNER UNION ALL BY NAME UNION ALL CORRESPONDING {LEFT FULL} [OUTER] UNION ALL BY NAME {LEFT FULL} [OUTER] UNION ALL CORRESPONDING [FULL] OUTER UNION ALL BY NAME [FULL] OUTER UNION ALL CORRESPONDING UNION ALL BY NAME ON (col1, col2, ...) UNION ALL STRICT CORRESPONDING BY (col1, col2, ...) The following table shows the behavior of the mode prefixes for the BY NAME and CORRESPONDING modifiers when left and right input columns don't match: Mode prefix and modifier Behavior when left and right input columns don't match BY NAME (no prefix) or STRICT CORRESPONDING Error, all columns must match in both inputs.
- WITH NumbersTable AS ( SELECT 1 AS one digit , 10 AS two digit UNION ALL SELECT 2 , 20 UNION ALL SELECT 3 , 30 ) SELECT one digit , two digit FROM NumbersTable EXCEPT DISTINCT BY NAME SELECT 10 AS two digit , 1 AS one digit ; / -----------+-----------+ one digit two digit +-----------+-----------+ 2 20 3 30 +-----------+----------- / The previous set operation with BY NAME is equivalent to using the STRICT CORRESPONDING modifier.
- WITH NumbersTable AS ( SELECT 1 AS one digit , 10 AS two digit UNION ALL SELECT 2 , 20 UNION ALL SELECT 3 , 30 ) SELECT one digit , two digit FROM NumbersTable INTERSECT DISTINCT BY NAME SELECT 10 AS two digit , 1 AS one digit ; / -----------+-----------+ one digit two digit +-----------+-----------+ 1 10 +-----------+----------- / The previous set operation with BY NAME is equivalent to using the STRICT CORRESPONDING modifier.

### Estimate and control costs \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)
- Source ID: `site-docs-root`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- QueryJobConfiguration ; // Sample to run dry query on the table public class QueryDryRun { public static void runQueryDryRun () { String query = "SELECT name, COUNT( ) as name count " + "FROM bigquery-public-data.usa names.usa 1910 2013 " + "WHERE state = 'WA' " + "GROUP BY name" ; queryDryRun ( query ); } public static void queryDryRun ( String query ) { try { // Initialize client that will be used to send requests.
- Troubleshooting BigQuery cost discrepancies and unexpected charges Follow these steps to troubleshoot unexpected BigQuery charges or cost discrepancies: To understand where the charges for BigQuery are coming from when looking at the Cloud Billing report, the first recommendation is grouping charges by SKU so that it is easier to observe the usage and charges for the corresponding BigQuery services.
- QueryJobConfig ( dry run = True , use query cache = False ) Start the query, passing in the extra configuration. query job = client . query ( ( "SELECT name, COUNT( ) as name count " "FROM bigquery-public-data.usa names.usa 1910 2013 " "WHERE state = 'WA' " "GROUP BY name" ), job config = job config , ) # Make an API request.
- After identifying the corresponding SKUs, use the INFORMATION SCHEMA views to identify the specific resources associated with these charges, for example: If you are charged for on-demand analysis, look into the INFORMATION SCHEMA.JOBS view examples to determine jobs driving costs and users who launched them.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- The constant expression cannot contain: A reference to a table Subqueries or SQL statements such as SELECT , CREATE , or UPDATE User-defined functions, aggregate functions, or analytic functions The following scalar functions: ARRAY TO STRING REPLACE REGEXP REPLACE RAND FORMAT LPAD RPAD REPEAT SESSION USER GENERATE ARRAY GENERATE DATE ARRAY If VALUE evaluates to NULL , the corresponding option NAME in the CREATE VIEW statement is ignored. privacy policy The following policies are available in the privacy policy view option to create analysis rules .
- The constant expression cannot contain: A reference to a table Subqueries or SQL statements such as SELECT , CREATE , or UPDATE User-defined functions, aggregate functions, or analytic functions The following scalar functions: ARRAY TO STRING REPLACE REGEXP REPLACE RAND FORMAT LPAD RPAD REPEAT SESSION USER GENERATE ARRAY GENERATE DATE ARRAY If VALUE evaluates to NULL , the corresponding option NAME in the CREATE TABLE statement is ignored. column option list Specify a column option list in the following format: NAME=VALUE, ...
- The constant expression cannot contain: A reference to a table Subqueries or SQL statements such as SELECT , CREATE , and UPDATE User-defined functions, aggregate functions, or analytic functions The following scalar functions: ARRAY TO STRING REPLACE REGEXP REPLACE RAND FORMAT LPAD RPAD REPEAT SESSION USER GENERATE ARRAY GENERATE DATE ARRAY If VALUE evaluates to NULL , the corresponding option NAME in the CREATE SNAPSHOT TABLE statement is ignored.
- Applies to Parquet data. enable logical types BOOL If true , convert Avro logical types into their corresponding SQL types.

