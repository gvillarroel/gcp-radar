---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.805Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery scripting"
feature_slug: "bigquery-scripting"
latest_feature_date: "2019-10-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/biglake-intro"
  - "https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql"
keywords:
  - "bigquery"
  - "scripting"
  - "lets"
  - "users"
  - "execute"
  - "multi"
  - "statement"
  - "sql"
---

# BigQuery scripting

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery scripting lets users execute multi-statement SQL scripts.

## Extended Definition

BigQuery scripting lets users execute multi-statement SQL scripts.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- The table schema contains 2 columns: transaction id: An integer transaction date: A date The table option list specifies the: Partition expiration: Three days Description: A table partitioned by transaction date Creating a partitioned table from the result of a query The following example creates a partitioned table named days with rain in mydataset using a DATE column: CREATE TABLE mydataset . days with rain PARTITION BY date OPTIONS ( partition expiration days = 365 , description = "weather stations with precipitation, partitioned by day" ) AS SELECT DATE ( CAST ( year AS INT64 ), CAST ( mo AS INT64 ), CAST ( da AS INT64 )) AS date , ( SELECT ANY VALUE ( name ) FROM bigquery-public-data.noaa gsod.stations AS stations WHERE stations . usaf = stn ) AS station name , -- Stations can have multiple names prcp FROM bigquery-public-data.noaa gsod.gsod2017 AS weather WHERE prcp != 99.9 -- Filter unknown values AND prcp > 0 -- Filter stations/days with no precipitation If you haven't configured a default project, prepend a project ID to the dataset name in the example SQL, and enclose the name in backticks if project id contains special characters: project id.dataset.table .
- Examples The following table function takes an INT64 parameter that is used to filter the results of a query: CREATE OR REPLACE TABLE FUNCTION mydataset . names by year ( y INT64 ) AS SELECT year , name , SUM ( number ) AS total FROM bigquery-public-data.usa names.usa 1910 current WHERE year = y GROUP BY year , name The following example specifies the return TABLE type in the RETURNS clause: CREATE OR REPLACE TABLE FUNCTION mydataset . names by year ( y INT64 ) RETURNS TABLE<name STRING , year INT64 , total INT64 > AS SELECT year , name , SUM ( number ) AS total FROM bigquery-public-data.usa names.usa 1910 current WHERE year = y GROUP BY year , name The following example computes total sales for items with the name item name from the orders table: CREATE TABLE FUNCTION mydataset . compute sales ( orders TABLE<item STRING , sales INT64 > , item name STRING ) AS ( SELECT SUM ( sales ) AS total sales , item FROM orders WHERE item = item name GROUP BY item ); CREATE PROCEDURE statement Creates a new procedure , which is a block of statements that can be called from other queries.
- Syntax To create a GoogleSQL stored procedure , use the following syntax: CREATE [ OR REPLACE ] PROCEDURE [ IF NOT EXISTS ] [[ project name . ] dataset name . ] procedure name ( procedure argument [ , ... ] ) [ OPTIONS ( procedure option list ) ] BEGIN multi statement query END ; procedure argument : [ procedure argument mode ] argument name argument type procedure argument mode : IN OUT INOUT To create a stored procedure for Apache Spark , use the following syntax: CREATE [ OR REPLACE ] PROCEDURE [ IF NOT EXISTS ] [[ project name . ] dataset name . ] procedure name ( procedure argument [ , ... ] ) [ EXTERNAL SECURITY external security ] WITH CONNECTION connection project id . connection region . connection id [ OPTIONS ( procedure option list ) ] LANGUAGE language [ AS pyspark code ] procedure argument : [ procedure argument mode ] argument name argument type procedure argument mode : IN OUT INOUT external security : INVOKER Arguments OR REPLACE : Replaces any procedure with the same name if it exists.
- Required permissions This statement requires the following IAM permissions : Permission Resource bigquery.bireservations.update BI Engine reservation Examples Allocating BI Engine capacity without preferred tables ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( size gb = 250 ) Deallocating BI capacity ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( size gb = 0 ) Removing a set of preferred tables from reservation ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( preferred tables = NULL ) Allocating BI Capacity with preferred tables list ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( size gb = 250 , preferred tables = [ "data project1.dataset1.table1" , "data project2.dataset2.table2" ] ) Overwriting list of preferred tables without changing the size ALTER BI CAPACITY region-us.default SET OPTIONS ( preferred tables = [ "dataset1.table1" , "data project2.dataset2.table2" ] ) ALTER CAPACITY SET OPTIONS statement Alters an existing capacity commitment.

### "Introduction to BigLake external tables \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- Source ID: `site-docs-reference-5`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- For example, the following diagram demonstrates how the BigQuery Storage API lets users access authorized data using open source query engines such as Apache Spark: For more information about connectors supported by BigQuery, see BigQuery connectors .
- Cross-cloud join required permissions To get the permissions that you need to run a cross-cloud join, ask your administrator to grant you the following IAM roles on the project where the join is executed: BigQuery Data Viewer ( roles/bigquery.dataViewer ) BigQuery Job User ( roles/bigquery.jobUser ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- You can reference BigLake tables anywhere in a SELECT statement as if they were standard BigQuery tables, including in data manipulation language (DML) and data definition language (DDL) statements that use subqueries to retrieve data.
- Cross-cloud joins are only supported in colocated BigQuery regions with their corresponding BigQuery Omni regions and in the US and EU multi-regions.

### "Legacy SQL Syntax, Functions and Operators \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- Source ID: `site-docs-reference`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- The EACH modifier The EACH modifier is a hint that tells BigQuery to execute the GROUP BY using multiple partitions.
- EACH modifier The EACH modifier is a hint that tells BigQuery to execute the JOIN using multiple partitions.
- If the state does not appear as an option in one of the WHEN statements, the state value will default to "None." Example: legacySQL SELECT CASE WHEN state IN ( 'WA' , 'OR' , 'CA' , 'AK' , 'HI' , 'ID' , 'MT' , 'WY' , 'NV' , 'UT' , 'CO' , 'AZ' , 'NM' ) THEN 'West' WHEN state IN ( 'OK' , 'TX' , 'AR' , 'LA' , 'TN' , 'MS' , 'AL' , 'KY' , 'GA' , 'FL' , 'SC' , 'NC' , 'VA' , 'WV' , 'MD' , 'DC' , 'DE' ) THEN 'South' WHEN state IN ( 'ND' , 'SD' , 'NE' , 'KS' , 'MN' , 'IA' , 'MO' , 'WI' , 'IL' , 'IN' , 'MI' , 'OH' ) THEN 'Midwest' WHEN state IN ( 'NY' , 'PA' , 'NJ' , 'CT' , 'RI' , 'MA' , 'VT' , 'NH' , 'ME' ) THEN 'Northeast' ELSE 'None' END as region , average mother age , average father age , state , year FROM ( SELECT year , state , SUM ( mother age ) / COUNT ( mother age ) as average mother age , SUM ( father age ) / COUNT ( father age ) as average father age FROM [ bigquery - public - data : samples . natality ] WHERE father age < 99 GROUP BY year , state ) ORDER BY year LIMIT 5 ; Returns: +--------+--------------------+--------------------+-------+------+ region average mother age average father age state year +--------+--------------------+--------------------+-------+------+ South 24.342600163532296 27.683769419460344 AR 1969 West 25.185041908446163 28.268214055448098 AK 1969 West 24.780776677578217 27.831181063905248 CA 1969 West 25.005834769924412 27.942978384829598 AZ 1969 South 24.541730952905738 27.686430093306885 AL 1969 +--------+--------------------+--------------------+-------+------+ Simulating a Pivot Table Use conditional statements to organize the results of a subselect query into rows and columns.
- Example: legacySQL SELECT / Multiply timestamp by 1000000 and convert / / into a more human-readable format. / TOP ( FORMAT UTC USEC ( timestamp 1000000 ), 5 ) AS top revision time , COUNT ( ) AS revision count FROM [ bigquery - public - data : samples . wikipedia ]; Returns: +----------------------------+----------------+ top revision time revision count +----------------------------+----------------+ 2002-02-25 15:51:15.000000 20976 2002-02-25 15:43:11.000000 15974 2010-02-02 03:34:51.000000 3 2010-02-02 01:04:59.000000 3 2010-02-01 23:55:05.000000 3 +----------------------------+----------------+ Bucketing Results by Timestamp It's useful to use date and time functions to group query results into buckets corresponding to particular years, months, or days.

