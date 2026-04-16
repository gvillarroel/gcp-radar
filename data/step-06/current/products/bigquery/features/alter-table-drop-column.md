---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.622Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "ALTER TABLE DROP COLUMN"
feature_slug: "alter-table-drop-column"
latest_feature_date: "2023-02-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/column-data-masking"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
keywords:
  - "alter"
  - "table"
  - "drop"
  - "column"
  - "lets"
  - "users"
  - "remove"
  - "columns"
---

# ALTER TABLE DROP COLUMN

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

ALTER TABLE DROP COLUMN lets users remove columns from BigQuery tables; The ALTER TABLE DROP COLUMN statement lets BigQuery remove columns from tables through SQL.

## Extended Definition

ALTER TABLE DROP COLUMN lets users remove columns from BigQuery tables; The ALTER TABLE DROP COLUMN statement lets BigQuery remove columns from tables through SQL.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/column-data-masking](https://docs.cloud.google.com/bigquery/docs/column-data-masking)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 250
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Examples The following example sets a new description on a table column called price : ALTER TABLE mydataset . mytable ALTER COLUMN price SET OPTIONS ( description = 'Price per unit' ); The following example sets a new description on a view column called total : ALTER VIEW mydataset . myview ALTER COLUMN total SET OPTIONS ( description = 'Total sales of the product' ); ALTER COLUMN DROP NOT NULL statement Removes a NOT NULL constraint from a column in a table in BigQuery.
- The following example swaps the names of columnA and columnB : ALTER TABLE mydataset . mytable RENAME COLUMN columnA TO temp col , RENAME COLUMN columnB TO columnA , RENAME COLUMN temp col TO columnB ALTER TABLE DROP COLUMN statement Drops one or more columns from an existing table schema.
- Examples The following example removes the NOT NULL constraint from a column called mycolumn : ALTER TABLE mydataset . mytable ALTER COLUMN mycolumn DROP NOT NULL ALTER COLUMN SET DATA TYPE statement Changes the data type of a column in a table in BigQuery to a less restrictive data type.
- Examples Dropping columns The following example drops the following columns from an existing table named mytable : Column A Column B ALTER TABLE mydataset . mytable DROP COLUMN A , DROP COLUMN IF EXISTS B If the column named A does not exist, then the statement fails.

### Mask column data \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/column-data-masking](https://docs.cloud.google.com/bigquery/docs/column-data-masking)
- Source ID: `site-docs-reference-5`
- Final score: 208
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following example uses the ALTER COLUMN SET OPTIONS to remove all data policies from an existing column on a table: ALTER TABLE myproject . table1 ALTER COLUMN column name SET OPTIONS ( data policies = []); The following example uses the ALTER COLUMN SET OPTIONS to replace data policies from an existing column on a table: ALTER TABLE myproject . table1 ALTER COLUMN column name SET OPTIONS ( data policies = [ "{'name':'myproject.region-us.new data policy name'}" ]); API To unassign a data policy to a column, call the patch method on the table and update the table schema empty or updated data policies.
- The following example uses the CREATE TABLE statement and sets data policies on a column: CREATE TABLE myproject . table1 ( name INT64 OPTIONS ( data policies = [ "{'name':'myproject.region-us.data policy name1'}" , "{'name':'myproject.region-us.data policy name2'}" ]) ); The following example uses the ALTER COLUMN SET OPTIONS to add a data policy to an existing column on a table: ALTER TABLE myproject . table1 ALTER COLUMN column name SET OPTIONS ( data policies += [ "{'name':'myproject.region-us.data policy name1'}" , "{'name':'myproject.region-us.data policy name2'}" ]); API To assign a data policy to a column, call the patch method on the table and update the table schema with the applicable data policies.
- Assign a data policy To assign a data policy directly on a column, do one of the following: SQL To attach a data policy to a column, use the CREATE TABLE , ALTER TABLE ADD COLUMN , or ALTER COLUMN SET OPTIONS DDL statements.
- If you overwrite a destination table, the system removes any existing policy tags from the table, unless you use the --destination schema flag to specify a schema with column data policies.

### Query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `site-docs-reference`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- It looks like this: / -----------------------+ LastName SchoolID +-----------------------+ Adams 50 Buchanan 52 Coolidge 52 Davis 51 Eisenhower 77 +----------------------- / You can use this WITH clause to emulate a temporary table name for the examples in this reference: WITH Roster AS ( SELECT 'Adams' as LastName , 50 as SchoolID UNION ALL SELECT 'Buchanan' , 52 UNION ALL SELECT 'Coolidge' , 52 UNION ALL SELECT 'Davis' , 51 UNION ALL SELECT 'Eisenhower' , 77 ) SELECT FROM Roster PlayerStats table The PlayerStats table includes a list of player names ( LastName ) and the unique ID assigned to the opponent they played in a given game ( OpponentID ) and the number of points scored by the athlete in that game ( PointsScored ). / ----------------------------------------+ LastName OpponentID PointsScored +----------------------------------------+ Adams 51 3 Buchanan 77 0 Coolidge 77 1 Adams 52 4 Buchanan 50 13 +---------------------------------------- / You can use this WITH clause to emulate a temporary table name for the examples in this reference: WITH PlayerStats AS ( SELECT 'Adams' as LastName , 51 as OpponentID , 3 as PointsScored UNION ALL SELECT 'Buchanan' , 77 , 0 UNION ALL SELECT 'Coolidge' , 77 , 1 UNION ALL SELECT 'Adams' , 52 , 4 UNION ALL SELECT 'Buchanan' , 50 , 13 ) SELECT FROM PlayerStats TeamMascot table The TeamMascot table includes a list of unique school IDs ( SchoolID ) and the mascot for that school ( Mascot ). / ---------------------+ SchoolID Mascot +---------------------+ 50 Jaguars 51 Knights 52 Lakers 53 Mustangs +--------------------- / You can use this WITH clause to emulate a temporary table name for the examples in this reference: WITH TeamMascot AS ( SELECT 50 as SchoolID , 'Jaguars' as Mascot UNION ALL SELECT 51 , 'Knights' UNION ALL SELECT 52 , 'Lakers' UNION ALL SELECT 53 , 'Mustangs' ) SELECT FROM TeamMascot GROUP BY clause Example: SELECT LastName , SUM ( PointsScored ) FROM PlayerStats GROUP BY LastName ; LastName SUM Adams 7 Buchanan 13 Coolidge 1 UNION The UNION operator combines the result sets of two or more SELECT statements by pairing columns from the result set of each SELECT statement and vertically concatenating them.
- Examples The following examples show how to use the ON clause: WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 3 ), B AS ( SELECT 2 as x UNION ALL SELECT 3 UNION ALL SELECT 4 ) SELECT FROM A INNER JOIN B ON A . x = B . x ; WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 3 ), B AS ( SELECT 2 as x UNION ALL SELECT 3 UNION ALL SELECT 4 ) SELECT A . x , B . x FROM A INNER JOIN B ON A . x = B . x ; / Table A Table B Result (A.x, B.x) +---+ +---+ +-------+ x x = x x +---+ +---+ +-------+ 1 2 2 2 2 3 3 3 3 4 +-------+ +---+ +---+ / WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 ) SELECT FROM A LEFT OUTER JOIN B ON A . x = B . x ; WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 ) SELECT A . x , B . x FROM A LEFT OUTER JOIN B ON A . x = B . x ; / Table A Table B Result +------+ +---+ +-------------+ x x = x x +------+ +---+ +-------------+ 1 2 1 NULL 2 3 2 2 3 4 3 3 NULL 5 NULL NULL +------+ +---+ +-------------+ / WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 ) SELECT FROM A FULL OUTER JOIN B ON A . x = B . x ; WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 ) SELECT A . x , B . x FROM A FULL OUTER JOIN B ON A . x = B . x ; / Table A Table B Result +------+ +---+ +-------------+ x x = x x +------+ +---+ +-------------+ 1 2 1 NULL 2 3 2 2 3 4 3 3 NULL 5 NULL NULL +------+ +---+ NULL 4 NULL 5 +-------------+ / USING clause USING ( column name list ) column name list : column name [ , ... ] Description When you are joining two tables, USING performs an equality comparison operation on the columns named in column name list .
- WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 3 ), B AS ( SELECT 2 as x UNION ALL SELECT 3 UNION ALL SELECT 4 ) SELECT FROM A INNER JOIN B ON A . x = B . x ; WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 3 ), B AS ( SELECT 2 as x UNION ALL SELECT 3 UNION ALL SELECT 4 ) SELECT FROM A INNER JOIN B USING ( x ); / Table A Table B Result ON Result USING +---+ +---+ +-------+ +---+ x x = x x x +---+ +---+ +-------+ +---+ 1 2 2 2 2 2 3 3 3 3 3 4 +-------+ +---+ +---+ +---+ / WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 ) SELECT FROM A LEFT OUTER JOIN B ON A . x = B . x ; WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 ) SELECT FROM A LEFT OUTER JOIN B USING ( x ); / Table A Table B Result ON Result USING +------+ +---+ +-------------+ +------+ x x = x x x +------+ +---+ +-------------+ +------+ 1 2 1 NULL 1 2 3 2 2 2 3 4 3 3 3 NULL 5 NULL NULL NULL +------+ +---+ +-------------+ +------+ / WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 3 ), B AS ( SELECT 2 as x UNION ALL SELECT 3 UNION ALL SELECT 4 ) SELECT FROM A FULL OUTER JOIN B ON A . x = B . x ; WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 3 ), B AS ( SELECT 2 as x UNION ALL SELECT 3 UNION ALL SELECT 4 ) SELECT FROM A FULL OUTER JOIN B USING ( x ); / Table A Table B Result ON Result USING +---+ +---+ +-------------+ +---+ x x = x x x +---+ +---+ +-------------+ +---+ 1 2 1 NULL 1 2 3 2 2 2 3 4 3 3 3 +---+ +---+ NULL 4 4 +-------------+ +---+ / Although ON and USING aren't equivalent, they can return the same results in some situations if you specify the columns you want to return.
- Examples The following examples reference a table called Produce that looks like this: WITH Produce AS ( SELECT 'Kale' as product , 51 as sales , 'Q1' as quarter , 2020 as year UNION ALL SELECT 'Kale' , 23 , 'Q2' , 2020 UNION ALL SELECT 'Kale' , 45 , 'Q3' , 2020 UNION ALL SELECT 'Kale' , 3 , 'Q4' , 2020 UNION ALL SELECT 'Kale' , 70 , 'Q1' , 2021 UNION ALL SELECT 'Kale' , 85 , 'Q2' , 2021 UNION ALL SELECT 'Apple' , 77 , 'Q1' , 2020 UNION ALL SELECT 'Apple' , 0 , 'Q2' , 2020 UNION ALL SELECT 'Apple' , 1 , 'Q1' , 2021 ) SELECT FROM Produce / ---------+-------+---------+------+ product sales quarter year +---------+-------+---------+------ Kale 51 Q1 2020 Kale 23 Q2 2020 Kale 45 Q3 2020 Kale 3 Q4 2020 Kale 70 Q1 2021 Kale 85 Q2 2021 Apple 77 Q1 2020 Apple 0 Q2 2020 Apple 1 Q1 2021 +---------+-------+---------+------ / With the PIVOT operator, the rows in the quarter column are rotated into these new columns: Q1 , Q2 , Q3 , Q4 .

