---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.934Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Window functions"
feature_slug: "window-functions"
latest_feature_date: "2013-06-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "window"
  - "functions"
  - "let"
  - "bigquery"
  - "perform"
  - "analytic"
  - "calculations"
  - "across"
---

# Window functions

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Window functions let BigQuery perform analytic calculations across related rows in query results.

## Extended Definition

Window functions let BigQuery perform analytic calculations across related rows in query results.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "Legacy SQL Syntax, Functions and Operators \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- Source ID: `site-docs-reference`
- Final score: 198
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This example displays the top TLDs that are not in a list of common examples. legacySQL SELECT TLD ( repository homepage ) AS user tld , COUNT ( ) AS activity count FROM [ bigquery - public - data : samples . github timeline ] GROUP BY user tld HAVING / Only consider TLDs that are NOT NULL / / or in our list of common TLDs / user tld IS NOT NULL AND NOT user tld IN ( '' , '.com' , '.net' , '.org' , '.info' , '.edu' ) ORDER BY activity count DESC LIMIT 5 ; Returns: +----------+----------------+ user tld activity count +----------+----------------+ .de 22934 .io 17528 .me 13652 .fr 12895 .co.uk 9135 +----------+----------------+ Window functions Window functions, also known as analytic functions, enable calculations on a specific subset, or "window", of a result set.
- This window function requires ORDER BY in the OVER clause. legacySQL SELECT word , word count , RANK () OVER ( PARTITION BY corpus ORDER BY word count DESC ) rank , FROM [ bigquery - public - data : samples . shakespeare ] WHERE corpus = 'othello' and length ( word ) > 10 LIMIT 5 Returns: word word count rank handkerchief 29 1 satisfaction 5 2 displeasure 4 3 instruments 4 3 circumstance 3 5 RATIO TO REPORT( <column> ) Returns the ratio of each value to the sum of the values, as a double between 0 and 1. legacySQL SELECT word , word count , RATIO TO REPORT ( word count ) OVER ( PARTITION BY corpus ORDER BY word count DESC ) r to r , FROM [ bigquery - public - data : samples . shakespeare ] WHERE corpus = 'othello' and length ( word ) > 10 LIMIT 5 Returns: word word count r to r handkerchief 29 0.6444444444444445 satisfaction 5 0.1111111111111111 displeasure 4 0.08888888888888889 instruments 4 0.08888888888888889 circumstance 3 0.06666666666666667 ROW NUMBER() Returns the current row number of the query result over the window, starting with 1. legacySQL SELECT word , word count , ROW NUMBER () OVER ( PARTITION BY corpus ORDER BY word count DESC ) row num , FROM [ bigquery - public - data : samples . shakespeare ] WHERE corpus = 'othello' and length ( word ) > 10 LIMIT 5 Returns: word word count row num handkerchief 29 1 satisfaction 5 2 displeasure 4 3 instruments 4 4 circumstance 3 5 Other functions Syntax Other functions CASE WHEN ...
- It would be visible to a HAVING clause. legacySQL SELECT word AS word alias , LENGTH ( word ) AS len FROM [ bigquery - public - data : samples . shakespeare ] WHERE word CONTAINS 'th' ORDER BY len ; WITHIN modifier for aggregate functions aggregate function WITHIN RECORD [ [ AS ] alias ] The WITHIN keyword causes the aggregate function to aggregate across repeated values within each record.
- AVG( numeric expr ) COUNT( ) COUNT([DISTINCT] field ) MAX( field ) MIN( field ) STDDEV( numeric expr ) SUM( field ) These window functions perform the same operation as the corresponding Aggregate functions , but are computed over a window defined by the OVER clause.

### Query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `site-docs-reference`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- WITH PlayerStats AS ( SELECT 'Adams' as LastName , 'Noam' as FirstName , 3 as PointsScored UNION ALL SELECT 'Buchanan' , 'Jie' , 0 UNION ALL SELECT 'Coolidge' , 'Kiran' , 1 UNION ALL SELECT 'Adams' , 'Noam' , 4 UNION ALL SELECT 'Buchanan' , 'Jie' , 13 ) SELECT SUM ( PointsScored ) AS total points , FirstName AS first name , LastName AS last name FROM PlayerStats GROUP BY ALL ; / --------------+------------+-----------+ total points first name last name +--------------+------------+-----------+ 7 Noam Adams 13 Jie Buchanan 1 Kiran Coolidge +--------------+------------+----------- / If the select list contains an analytic function, the query groups rows by first name and last name . total people is excluded because it contains a window function.
- Example - the following two queries are equivalent: SELECT SUM ( PointsScored ), LastName FROM PlayerStats GROUP BY LastName ORDER BY LastName ; SELECT SUM ( PointsScored ), LastName FROM PlayerStats GROUP BY 2 ORDER BY 2 ; QUALIFY clause QUALIFY bool expression The QUALIFY clause filters the results of window functions.
- The expression can't contain floating point types, non-groupable types, constants, or window functions. order expr : An orderable column or expression used to order the rows before matching. measures expr : An aggregate expression that is evaluated per partition and match.
- Home Documentation Data analytics BigQuery Reference Send feedback Query syntax Stay organized with collections Save and categorize content based on your preferences.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- The constant expression cannot contain: A reference to a table Subqueries or SQL statements such as SELECT , CREATE , or UPDATE User-defined functions, aggregate functions, or analytic functions The following scalar functions: ARRAY TO STRING REPLACE REGEXP REPLACE RAND FORMAT LPAD RPAD REPEAT SESSION USER GENERATE ARRAY GENERATE DATE ARRAY If VALUE evaluates to NULL , the corresponding option NAME in the CREATE VIEW statement is ignored. privacy policy The following policies are available in the privacy policy view option to create analysis rules .
- The constant expression cannot contain: A reference to a table Subqueries or SQL statements such as SELECT , CREATE , or UPDATE User-defined functions, aggregate functions, or analytic functions The following scalar functions: ARRAY TO STRING REPLACE REGEXP REPLACE RAND FORMAT LPAD RPAD REPEAT SESSION USER GENERATE ARRAY GENERATE DATE ARRAY If VALUE evaluates to NULL , the corresponding option NAME in the CREATE TABLE statement is ignored. column option list Specify a column option list in the following format: NAME=VALUE, ...
- You can use DDL commands to create, alter, and delete resources, such as the following: Datasets Tables Table schemas Table clones Table snapshots Views Connections User-defined functions (UDFs) Indexes Capacity commitments and reservations Row-level access policies Default configuration settings Required permissions To create a job that runs a DDL statement, you must have the bigquery.jobs.create permission for the project where you are running the job.
- The constant expression cannot contain: A reference to a table Subqueries or SQL statements such as SELECT , CREATE , and UPDATE User-defined functions, aggregate functions, or analytic functions The following scalar functions: ARRAY TO STRING REPLACE REGEXP REPLACE RAND FORMAT LPAD RPAD REPEAT SESSION USER GENERATE ARRAY GENERATE DATE ARRAY If VALUE evaluates to NULL , the corresponding option NAME in the CREATE SNAPSHOT TABLE statement is ignored.

