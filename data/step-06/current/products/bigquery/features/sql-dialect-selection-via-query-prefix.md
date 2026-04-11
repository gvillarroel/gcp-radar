---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.933Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "SQL dialect selection via query prefix"
feature_slug: "sql-dialect-selection-via-query-prefix"
latest_feature_date: "2016-11-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/introduction-sql"
  - "https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql"
  - "https://docs.cloud.google.com/bigquery/docs/arima-time-series-forecasting-with-limits-tutorial"
keywords:
  - "legacy SQL comment"
  - "dialect pragma"
  - "standard SQL comment"
  - "legacy/standard prefix"
  - "#standardSQL"
  - "#legacySQL"
  - "dialect prefix"
  - "SQL mode prefix"
---

# SQL dialect selection via query prefix

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery enabled selecting legacy SQL or standard SQL using a query prefix.

## Extended Definition

BigQuery enabled selecting legacy SQL or standard SQL using a query prefix.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/introduction-sql](https://docs.cloud.google.com/bigquery/docs/introduction-sql)
- [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- [https://docs.cloud.google.com/bigquery/docs/arima-time-series-forecasting-with-limits-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-time-series-forecasting-with-limits-tutorial)

## Supporting Pages

### Introduction to SQL in BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/introduction-sql](https://docs.cloud.google.com/bigquery/docs/introduction-sql)
- Source ID: `site-docs-reference`
- Final score: 32
- Re-rank relevance: WEAK
- Re-rank rationale: The page explains BigQuery dialect support and how to switch between GoogleSQL and legacy SQL, but does not clearly describe query-prefix-based selection.

Evidence snippets:
- You can set the SQL dialect by including the prefix #standardSQL or #legacySQL as part of your query.
- Switch to the legacy SQL dialect To use legacy SQL syntax in a query job, set the useLegacySql parameter to true . // Import the Google Cloud client library const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function queryLegacy () { // Queries the U.S. given names dataset for the state of Texas using legacy SQL. const query = 'SELECT word FROM [bigquery-public-data:samples.shakespeare] LIMIT 10;' ; // For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query const options = { query : query , // Location must match that of the dataset(s) referenced in the query. location : 'US' , useLegacySql : true , }; // Run the query as a job const [ job ] = await bigquery . createQueryJob ( options ); console . log ( Job ${ job . id } started. ); // Wait for the query to finish const [ rows ] = await job . getQueryResults (); // Print the results console . log ( 'Rows:' ); rows . forEach ( row = > console . log ( row )); } PHP Before trying this sample, follow the PHP setup instructions in the BigQuery quickstart using client libraries .
- Switch to the legacy SQL dialect To use legacy SQL syntax in a query job, set the useLegacySql parameter to true . use Google\Cloud\BigQuery\BigQueryClient; / Query using legacy sql @param string $projectId The project Id of your Google Cloud Project. / function query legacy(string $projectId): void { $query = 'SELECT corpus FROM [bigquery-public-data:samples.shakespeare] GROUP BY corpus'; $bigQuery = new BigQueryClient([ 'projectId' => $projectId, ]); $jobConfig = $bigQuery->query($query)->useLegacySql(true); $queryResults = $bigQuery->runQuery($jobConfig); $i = 0; foreach ($queryResults as $row) { printf('--- Row %s ---' .
- Switch to the legacy SQL dialect To use legacy SQL syntax in a query job, set the UseLegacySQL property within the query configuration to true . import ( "context" "fmt" "io" "cloud.google.com/go/bigquery" "google.golang.org/api/iterator" ) // queryLegacy demonstrates running a query using Legacy SQL. func queryLegacy ( w io .

### "Legacy SQL Syntax, Functions and Operators \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Example This query adds the GROUPING function to the previous example to better identify the rows added because of the ROLLUP function. legacySQL SELECT year , GROUPING ( year ) as rollup year , is male , GROUPING ( is male ) as rollup gender , COUNT ( 1 ) as count FROM [ bigquery - public - data : samples . natality ] WHERE year > = 2000 AND year < = 2002 GROUP BY ROLLUP ( year , is male ) ORDER BY year , is male ; These are the result the new query returns. +------+-------------+---------+---------------+----------+ year rollup year is male rollup gender count +------+-------------+---------+---------------+----------+ NULL 1 NULL 1 12122730 2000 0 NULL 1 4063823 2000 0 false 0 1984255 2000 0 true 0 2079568 2001 0 NULL 1 4031531 2001 0 false 0 1970770 2001 0 true 0 2060761 2002 0 NULL 1 4027376 2002 0 false 0 1966519 2002 0 true 0 2060857 +------+-------------+---------+---------------+----------+ Notes: Non-aggregated fields in the SELECT clause must be listed in the GROUP BY clause. legacySQL SELECT word , corpus , COUNT ( word ) FROM [ bigquery - public - data : samples . shakespeare ] WHERE word CONTAINS "th" GROUP BY word , corpus ; / Succeeds because all non-aggregated fields are group keys. / legacySQL SELECT word , corpus , COUNT ( word ) FROM [ bigquery - public - data : samples . shakespeare ] WHERE word CONTAINS "th" GROUP BY word ; / Fails because corpus is not aggregated nor is it a group key. / Expressions computed in the SELECT clause cannot be used in the corresponding GROUP BY clause. legacySQL SELECT word , corpus , COUNT ( word ) word count FROM [ bigquery - public - data : samples . shakespeare ] WHERE word CONTAINS "th" GROUP BY word , corpus , word count ; / Fails because word count is not visible to this GROUP BY clause. / Grouping by float and double values is not supported, because the equality function for those types is not well-defined.
- If the state does not appear as an option in one of the WHEN statements, the state value will default to "None." Example: legacySQL SELECT CASE WHEN state IN ( 'WA' , 'OR' , 'CA' , 'AK' , 'HI' , 'ID' , 'MT' , 'WY' , 'NV' , 'UT' , 'CO' , 'AZ' , 'NM' ) THEN 'West' WHEN state IN ( 'OK' , 'TX' , 'AR' , 'LA' , 'TN' , 'MS' , 'AL' , 'KY' , 'GA' , 'FL' , 'SC' , 'NC' , 'VA' , 'WV' , 'MD' , 'DC' , 'DE' ) THEN 'South' WHEN state IN ( 'ND' , 'SD' , 'NE' , 'KS' , 'MN' , 'IA' , 'MO' , 'WI' , 'IL' , 'IN' , 'MI' , 'OH' ) THEN 'Midwest' WHEN state IN ( 'NY' , 'PA' , 'NJ' , 'CT' , 'RI' , 'MA' , 'VT' , 'NH' , 'ME' ) THEN 'Northeast' ELSE 'None' END as region , average mother age , average father age , state , year FROM ( SELECT year , state , SUM ( mother age ) / COUNT ( mother age ) as average mother age , SUM ( father age ) / COUNT ( father age ) as average father age FROM [ bigquery - public - data : samples . natality ] WHERE father age < 99 GROUP BY year , state ) ORDER BY year LIMIT 5 ; Returns: +--------+--------------------+--------------------+-------+------+ region average mother age average father age state year +--------+--------------------+--------------------+-------+------+ South 24.342600163532296 27.683769419460344 AR 1969 West 25.185041908446163 28.268214055448098 AK 1969 West 24.780776677578217 27.831181063905248 CA 1969 West 25.005834769924412 27.942978384829598 AZ 1969 South 24.541730952905738 27.686430093306885 AL 1969 +--------+--------------------+--------------------+-------+------+ Simulating a Pivot Table Use conditional statements to organize the results of a subselect query into rows and columns.
- This window function requires ORDER BY in the OVER clause. legacySQL SELECT word , word count , RANK () OVER ( PARTITION BY corpus ORDER BY word count DESC ) rank , FROM [ bigquery - public - data : samples . shakespeare ] WHERE corpus = 'othello' and length ( word ) > 10 LIMIT 5 Returns: word word count rank handkerchief 29 1 satisfaction 5 2 displeasure 4 3 instruments 4 3 circumstance 3 5 RATIO TO REPORT( <column> ) Returns the ratio of each value to the sum of the values, as a double between 0 and 1. legacySQL SELECT word , word count , RATIO TO REPORT ( word count ) OVER ( PARTITION BY corpus ORDER BY word count DESC ) r to r , FROM [ bigquery - public - data : samples . shakespeare ] WHERE corpus = 'othello' and length ( word ) > 10 LIMIT 5 Returns: word word count r to r handkerchief 29 0.6444444444444445 satisfaction 5 0.1111111111111111 displeasure 4 0.08888888888888889 instruments 4 0.08888888888888889 circumstance 3 0.06666666666666667 ROW NUMBER() Returns the current row number of the query result over the window, starting with 1. legacySQL SELECT word , word count , ROW NUMBER () OVER ( PARTITION BY corpus ORDER BY word count DESC ) row num , FROM [ bigquery - public - data : samples . shakespeare ] WHERE corpus = 'othello' and length ( word ) > 10 LIMIT 5 Returns: word word count row num handkerchief 29 1 satisfaction 5 2 displeasure 4 3 instruments 4 4 circumstance 3 5 Other functions Syntax Other functions CASE WHEN ...
- For example: TIMESTAMP('2012-10-01 02:03:04') DATE ADD(CURRENT TIMESTAMP(), -7, 'DAY') Example: get tables between two days This example assumes the following tables exist: mydata.people20140325 mydata.people20140326 mydata.people20140327 legacySQL SELECT name FROM TABLE DATE RANGE ([ myproject - 1234 : mydata . people ], TIMESTAMP ( '2014-03-25' ), TIMESTAMP ( '2014-03-27' )) WHERE age > = 35 Matches the following tables: mydata.people20140325 mydata.people20140326 mydata.people20140327 Example: get tables in a two-day range up to "now" This example assumes the following tables exist in a project named myproject-1234 : mydata.people20140323 mydata.people20140324 mydata.people20140325 legacySQL SELECT name FROM ( TABLE DATE RANGE ([ myproject - 1234 : mydata . people ], DATE ADD ( CURRENT TIMESTAMP (), - 2 , 'DAY' ), CURRENT TIMESTAMP ())) WHERE age > = 35 Matches the following tables: mydata.people20140323 mydata.people20140324 mydata.people20140325 TABLE DATE RANGE STRICT( prefix , timestamp1 , timestamp2 ) This function is equivalent to TABLE DATE RANGE .

### "Limit forecasted values for an ARIMA_PLUS time series model \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/arima-time-series-forecasting-with-limits-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-time-series-forecasting-with-limits-tutorial)
- Source ID: `site-docs-root`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- This option causes the model to only forecast values that are greater than 0, based on the values in the column specified by the time series data col argument, in this case num trips . #standardSQL CREATE OR REPLACE MODEL bqml tutorial . nyc citibike arima model OPTIONS ( model type = 'ARIMA PLUS' , time series timestamp col = 'date' , time series data col = 'num trips' , time series id col = 'start station id' , forecast limit lower bound = 0 ) AS SELECT EXTRACT ( DATE FROM starttime ) AS date , COUNT ( ) AS num trips , start station id FROM bigquery-public-data . new york . citibike trips WHERE starttime > '2014-07-11' AND starttime '2015-02-11' GROUP BY date , start station id ; Run the CREATE MODEL query to create and train your model: In the Google Cloud console, click the Compose new query button.
- The CREATE MODEL statement creates and trains a model named bqml tutorial.nyc citibike arima model . #standardSQL CREATE OR REPLACE MODEL bqml tutorial . nyc citibike arima model OPTIONS ( model type = 'ARIMA PLUS' , time series timestamp col = 'date' , time series data col = 'num trips' , time series id col = 'start station id' ) AS SELECT EXTRACT ( DATE FROM starttime ) AS date , COUNT ( ) AS num trips , start station id FROM bigquery-public-data . new york . citibike trips WHERE starttime > '2014-07-11' AND starttime '2015-02-11' GROUP BY date , start station id ; The OPTIONS(model type='ARIMA PLUS', time series timestamp col='date', ...) clause indicates that you are creating an ARIMA -based time series model.
- Enter the following GoogleSQL query in the query editor. #standardSQL CREATE OR REPLACE MODEL bqml tutorial . nyc citibike arima model OPTIONS ( model type = 'ARIMA PLUS' , time series timestamp col = 'date' , time series data col = 'num trips' , time series id col = 'start station id' , forecast limit lower bound = 0 ) AS SELECT EXTRACT ( DATE FROM starttime ) AS date , COUNT ( ) AS num trips , start station id FROM bigquery-public-data . new york . citibike trips WHERE starttime > '2014-07-11' AND starttime '2015-02-11' GROUP BY date , start station id ; Click Run .
- Enter the following GoogleSQL query in the query editor. #standardSQL CREATE OR REPLACE MODEL bqml tutorial . nyc citibike arima model OPTIONS ( model type = 'ARIMA PLUS' , time series timestamp col = 'date' , time series data col = 'num trips' , time series id col = 'start station id' ) AS SELECT EXTRACT ( DATE FROM starttime ) AS date , COUNT ( ) AS num trips , start station id FROM bigquery-public-data . new york . citibike trips WHERE starttime > '2014-07-11' AND starttime '2015-02-11' GROUP BY date , start station id ; Click Run .

