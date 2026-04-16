---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.706Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Scripting CASE search_expression statement"
feature_slug: "scripting-case-search-expression-statement"
latest_feature_date: "2021-11-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/procedural-language"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql"
keywords:
  - "scripting"
  - "case"
  - "search"
  - "expression"
  - "statement"
  - "executes"
  - "first"
  - "sql"
---

# Scripting CASE search_expression statement

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The scripting CASE search_expression statement executes the first SQL statement block whose WHEN expression matches the search expression.

## Extended Definition

The scripting CASE search_expression statement executes the first SQL statement block whose WHEN expression matches the search expression.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/procedural-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/procedural-language)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)

## Supporting Pages

### Procedural language \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/procedural-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/procedural-language)
- Source ID: `site-docs-reference`
- Final score: 170
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- DECLARE target product id INT64 DEFAULT 103 ; CASE WHEN EXISTS ( SELECT 1 FROM schema . products a WHERE product id = target product id ) THEN SELECT 'found product in products a table' ; WHEN EXISTS ( SELECT 1 FROM schema . products b WHERE product id = target product id ) THEN SELECT 'found product in products b table' ; ELSE SELECT 'did not find product' ; END CASE ; CASE search expression Syntax CASE search expression WHEN expression THEN sql statement list [...] [ ELSE sql statement list ] END CASE ; Description Executes the first sql statement list where the search expression is matches a WHEN expression.
- CREATE OR REPLACE PROCEDURE schema1 . proc1 () BEGIN SELECT 1 / 0 ; END ; CREATE OR REPLACE PROCEDURE schema1 . proc2 () BEGIN CALL schema1 . proc1 (); END ; BEGIN CALL schema1 . proc2 (); EXCEPTION WHEN ERROR THEN SELECT @@ error . message , @@ error . stack trace , @@ error . statement text , @@ error . formatted stack trace ; END ; When the exception handler runs, the variables will have the following values: Variable Value @@error.message "Query error: division by zero: 1 / 0 at <project>.schema1.proc1:2:3]" @@error.stack trace [ STRUCT(2 AS line, 3 AS column, NULL AS filename, "<project>.schema1.proc1:2:3" AS location), STRUCT(2 AS line, 3 AS column, NULL AS filename, "<project>.schema1.proc2:2:3" AS location), STRUCT(10 AS line, 3 AS column, NULL AS filename, NULL AS location), ] @@error.statement text "SELECT 1/0" @@error.formatted stack trace "At <project>.schema1.proc1[2:3]\nAt <project>.schema1.proc2[2:3]\nAt [10:3]" CASE Syntax CASE WHEN boolean expression THEN sql statement list [...] [ ELSE sql statement list ] END CASE ; Description Executes the THEN sql statement list where the boolean expression is true, or the optional ELSE sql statement list if no conditions match.
- DECLARE product id INT64 DEFAULT 1 ; CASE product id WHEN 1 THEN SELECT CONCAT ( 'Product one' ); WHEN 2 THEN SELECT CONCAT ( 'Product two' ); ELSE SELECT CONCAT ( 'Invalid product' ); END CASE ; IF Syntax IF condition THEN [ sql statement list ] [ ELSEIF condition THEN sql statement list ] [...] [ ELSE sql statement list ] END IF ; Description Executes the first sql statement list where the condition is true, or the optional ELSE sql statement list if no conditions match.
- DECLARE target word STRING DEFAULT 'methinks' ; DECLARE corpus count , word count INT64 ; SET ( corpus count , word count ) = ( SELECT AS STRUCT COUNT ( DISTINCT corpus ), SUM ( word count ) FROM bigquery - public - data . samples . shakespeare WHERE LOWER ( word ) = target word ); SELECT FORMAT ( 'Found %d occurrences of "%s" across %d Shakespeare works' , word count , target word , corpus count ) AS result ; This statement list outputs the following string: Found 151 occurrences of "methinks" across 38 Shakespeare works EXECUTE IMMEDIATE Syntax EXECUTE IMMEDIATE sql expression [ INTO variable [ , ... ] ] [ USING identifier [ , ... ] ] ; sql expression : { "query statement" expression ( "query statement" ) } identifier : { variable value } [ AS alias ] Description Executes a dynamic SQL statement on the fly. sql expression : An expression that can represent one of the following: A query statement An expression that you can use on a query statement A single DDL statement A single DML statement A single DCL statement This expression can't be a control statement like IF . expression : Can be a function , conditional expression , or expression subquery . query statement : Represents a valid standalone SQL statement to execute.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- Syntax CREATE [ OR REPLACE ] [ TEMP TEMPORARY ] TABLE [ IF NOT EXISTS ] table name [ ( column constraint definition [ , ... ] ) ] [ DEFAULT COLLATE collate specification ] [ PARTITION BY partition expression ] [ CLUSTER BY clustering column list ] [ WITH CONNECTION connection name ] [ OPTIONS ( table option list ) ] [ AS query statement ] column := column definition constraint definition := [ primary key ] [[ CONSTRAINT constraint name ] foreign key , ... ] primary key := PRIMARY KEY ( column name [ , ... ] ) NOT ENFORCED foreign key := FOREIGN KEY ( column name [ , ... ] ) foreign reference foreign reference := REFERENCES primary key table ( column name [ , ... ] ) NOT ENFORCED Arguments OR REPLACE : Replaces any table with the same name if it exists.
- Example The following example assigns the project my project to the prod reservation for query jobs: CREATE ASSIGNMENT admin project.region-us.prod.my assignment OPTIONS ( assignee = 'projects/my project' , job type = 'QUERY' ); The following example assigns an organization to the prod reservation for pipeline jobs, such as load and extract jobs: CREATE ASSIGNMENT admin project.region-us.prod.my assignment OPTIONS ( assignee = 'organizations/1234' , job type = 'PIPELINE' ); CREATE SEARCH INDEX statement Creates a new search index on one or more columns of a table.
- The constant expression cannot contain: A reference to a table Subqueries or SQL statements such as SELECT , CREATE , or UPDATE User-defined functions, aggregate functions, or analytic functions The following scalar functions: ARRAY TO STRING REPLACE REGEXP REPLACE RAND FORMAT LPAD RPAD REPEAT SESSION USER GENERATE ARRAY GENERATE DATE ARRAY If VALUE evaluates to NULL , the corresponding option NAME in the CREATE VIEW statement is ignored. privacy policy The following policies are available in the privacy policy view option to create analysis rules .
- The constant expression cannot contain: A reference to a table Subqueries or SQL statements such as SELECT , CREATE , or UPDATE User-defined functions, aggregate functions, or analytic functions The following scalar functions: ARRAY TO STRING REPLACE REGEXP REPLACE RAND FORMAT LPAD RPAD REPEAT SESSION USER GENERATE ARRAY GENERATE DATE ARRAY If VALUE evaluates to NULL , the corresponding option NAME in the CREATE TABLE statement is ignored. column option list Specify a column option list in the following format: NAME=VALUE, ...

### "Legacy SQL Syntax, Functions and Operators \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- Source ID: `site-docs-reference`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- If the state does not appear as an option in one of the WHEN statements, the state value will default to "None." Example: legacySQL SELECT CASE WHEN state IN ( 'WA' , 'OR' , 'CA' , 'AK' , 'HI' , 'ID' , 'MT' , 'WY' , 'NV' , 'UT' , 'CO' , 'AZ' , 'NM' ) THEN 'West' WHEN state IN ( 'OK' , 'TX' , 'AR' , 'LA' , 'TN' , 'MS' , 'AL' , 'KY' , 'GA' , 'FL' , 'SC' , 'NC' , 'VA' , 'WV' , 'MD' , 'DC' , 'DE' ) THEN 'South' WHEN state IN ( 'ND' , 'SD' , 'NE' , 'KS' , 'MN' , 'IA' , 'MO' , 'WI' , 'IL' , 'IN' , 'MI' , 'OH' ) THEN 'Midwest' WHEN state IN ( 'NY' , 'PA' , 'NJ' , 'CT' , 'RI' , 'MA' , 'VT' , 'NH' , 'ME' ) THEN 'Northeast' ELSE 'None' END as region , average mother age , average father age , state , year FROM ( SELECT year , state , SUM ( mother age ) / COUNT ( mother age ) as average mother age , SUM ( father age ) / COUNT ( father age ) as average father age FROM [ bigquery - public - data : samples . natality ] WHERE father age < 99 GROUP BY year , state ) ORDER BY year LIMIT 5 ; Returns: +--------+--------------------+--------------------+-------+------+ region average mother age average father age state year +--------+--------------------+--------------------+-------+------+ South 24.342600163532296 27.683769419460344 AR 1969 West 25.185041908446163 28.268214055448098 AK 1969 West 24.780776677578217 27.831181063905248 CA 1969 West 25.005834769924412 27.942978384829598 AZ 1969 South 24.541730952905738 27.686430093306885 AL 1969 +--------+--------------------+--------------------+-------+------+ Simulating a Pivot Table Use conditional statements to organize the results of a subselect query into rows and columns.
- Here we present the full grammar of SELECT statements in a compact form with links back to the individual sections. query : SELECT { field path . expression } [ [ AS ] alias ] [ , ... ] [ FROM from body [ WHERE bool expression ] [ OMIT RECORD IF bool expression ] [ GROUP [ EACH ] BY [ ROLLUP ] { field name or alias } [ , ... ] ] [ HAVING bool expression ] [ ORDER BY field name or alias [ { DESC ASC } ] [, ... ] ] [ LIMIT n ] ]; from body : { from item [, ...] # Warning : Comma means UNION ALL here from item [ join type ] JOIN [ EACH ] from item [ ON join predicate ] ( FLATTEN ( { table name ( query ) } , field name or alias )) table wildcard function } from item : { table name ( query ) } [ [ AS ] alias ] join type : { INNER [ FULL ] [ OUTER ] RIGHT [ OUTER ] LEFT [ OUTER ] CROSS } join predicate : field from one side of the join = field from the other side of the join [ AND ...] expression : { literal value field name or alias function call } bool expression : { expression which results in a boolean value bool expression AND bool expression bool expression OR bool expression NOT bool expression } Notation: Square brackets "[ ]" indicate optional clauses.
- First, it uses an exclusionary condition, which means that records are omitted if the expression returns true , but kept if the expression returns false or null .
- Any string or integer expression is supported and the function respects IGNORE CASE for strings, returning case invariant values.

