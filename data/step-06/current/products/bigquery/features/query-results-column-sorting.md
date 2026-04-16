---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.603Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Query results column sorting"
feature_slug: "query-results-column-sorting"
latest_feature_date: "2023-05-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
  - "https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-add-column-query-append"
keywords:
  - "query"
  - "results"
  - "column"
  - "sorting"
  - "lets"
  - "users"
  - "sort"
  - "menu"
---

# Query results column sorting

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Query results column sorting lets users sort query results from the menu next to a column name.

## Extended Definition

Query results column sorting lets users sort query results from the menu next to a column name.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-add-column-query-append](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-add-column-query-append)

## Supporting Pages

### Query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `site-docs-reference`
- Final score: 187
- Re-rank relevance: N/A

Evidence snippets:
- ExamView GROUP BY test id ; Differential privacy clause WITH DIFFERENTIAL PRIVACY OPTIONS( privacy parameters ) privacy parameters : epsilon = expression , delta = expression , [ max groups contributed = expression ], privacy unit column = column name Description This clause lets you transform the results of a query with differentially private aggregations .
- SELECT item , purchases , category , LAST VALUE ( item ) OVER ( item window ) AS most popular FROM Produce WINDOW item window AS ( PARTITION BY category ORDER BY purchases ROWS BETWEEN 2 PRECEDING AND 2 FOLLOWING ) SELECT item , purchases , category , LAST VALUE ( item ) OVER ( d ) AS most popular FROM Produce WINDOW a AS ( PARTITION BY category ), b AS ( a ORDER BY purchases ), c AS ( b ROWS BETWEEN 2 PRECEDING AND 2 FOLLOWING ), d AS ( c ) SELECT item , purchases , category , LAST VALUE ( item ) OVER ( c ROWS BETWEEN 2 PRECEDING AND 2 FOLLOWING ) AS most popular FROM Produce WINDOW a AS ( PARTITION BY category ), b AS ( a ORDER BY purchases ), c AS b Set operators query expr [ { INNER [ { FULL LEFT } [ OUTER ] ] } ] { UNION { ALL DISTINCT } INTERSECT DISTINCT EXCEPT DISTINCT } [ { BY NAME [ ON ( column list ) ] [ STRICT ] CORRESPONDING [ BY ( column list ) ] } ] query expr Set operators combine or filter results from two or more input queries into a single result set.
- Smaller epsilons and more noise will provide greater privacy protection. -- This gets the average number of items requested per professor and adds -- noise to the results SELECT WITH DIFFERENTIAL PRIVACY OPTIONS ( epsilon = 10 , delta = .01 , max groups contributed = 2 , privacy unit column = id ) item , AVG ( quantity , contribution bounds per group = > ( 0 , 100 )) AS average quantity FROM professors GROUP BY item ; -- These results will change each time you run the query. -- The scissors group was removed this time, but might not be -- removed the next time. / ----------+------------------+ item average quantity +----------+------------------+ pencil 38.5038356810269 pen 13.4725028762032 +----------+------------------ / Remove noise Removing noise removes privacy protection.
- WITH NumbersTable AS ( SELECT 1 AS one digit , 10 AS two digit UNION ALL SELECT 2 , 20 UNION ALL SELECT 3 , 30 ) SELECT one digit , two digit FROM NumbersTable EXCEPT DISTINCT SELECT 10 AS two digit , 1 AS one digit ; -- No values excluded because columns aren't recognized as the same. / -----------+-----------+ one digit two digit +-----------+-----------+ 1 10 2 20 3 30 +-----------+----------- / To resolve this ordering issue, the following example uses the BY NAME modifier to match the columns by name instead of by position in the query results.

### Add a column using a query job \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-add-column-query-append](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-add-column-query-append)
- Source ID: `site-docs-reference-required-15`
- Final score: 185
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client libraries const { BigQuery } = require ( ' @google-cloud/bigquery ' ); // Instantiate client const bigquery = new BigQuery (); async function addColumnQueryAppend () { // Adds a new column to a BigQuery table while appending rows via a query job. / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = 'my dataset'; // const tableId = 'my table'; // Retrieve destination table reference const [ table ] = await bigquery . dataset ( datasetId ). table ( tableId ). get (); const destinationTableRef = table . metadata . tableReference ; // In this example, the existing table contains only the 'name' column. // 'REQUIRED' fields cannot be added to an existing schema, // so the additional column must be 'NULLABLE'. const query = SELECT name, year FROM \bigquery-public-data.usa names.usa 1910 2013\ WHERE state = 'TX' LIMIT 10 ; // Set load job options const options = { query : query , schemaUpdateOptions : [ 'ALLOW FIELD ADDITION' ], writeDisposition : 'WRITE APPEND' , destinationTable : destinationTableRef , // Location must match that of the dataset(s) referenced in the query. location : 'US' , }; const [ job ] = await bigquery . createQueryJob ( options ); console . log ( Job ${ job . id } started. ); // Wait for the query to finish const [ rows ] = await job . getQueryResults (); console . log ( Job ${ job . id } completed. ); // Print the results console . log ( 'Rows:' ); rows . forEach ( row = > console . log ( row )); } PHP Before trying this sample, follow the PHP setup instructions in the BigQuery quickstart using client libraries .
- For more information, see Set up authentication for client libraries . import ( "context" "fmt" "cloud.google.com/go/bigquery" ) // createTableAndWidenQuery demonstrates how the schema of a table can be modified to add columns by appending // query results that include the new columns. func createTableAndWidenQuery ( projectID , datasetID , tableID string ) error { // projectID := "my-project-id" // datasetID := "mydataset" // tableID := "mytable" ctx := context .
- Client () TODO(developer): Set table id to the ID of the destination table. table id = "your-project.your dataset.your table name" Retrieves the destination table and checks the length of the schema. table = client . get table ( table id ) # Make an API request. print ( "Table {} contains {} columns" . format ( table id , len ( table . schema ))) Configures the query to append the results to a destination table, allowing field addition. job config = bigquery .
- WRITE APPEND , ) Start the query, passing in the extra configuration. client . query and wait ( In this example, the existing table contains only the 'full name' and 'age' columns, while the results of this query will contain an additional 'favorite color' column. 'SELECT "Timmy" as full name, 85 as age, "Blue" as favorite color;' , job config = job config , ) # Make an API request and wait for job to complete.

### "Legacy SQL Syntax, Functions and Operators \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- Source ID: `site-docs-reference`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- If the state does not appear as an option in one of the WHEN statements, the state value will default to "None." Example: legacySQL SELECT CASE WHEN state IN ( 'WA' , 'OR' , 'CA' , 'AK' , 'HI' , 'ID' , 'MT' , 'WY' , 'NV' , 'UT' , 'CO' , 'AZ' , 'NM' ) THEN 'West' WHEN state IN ( 'OK' , 'TX' , 'AR' , 'LA' , 'TN' , 'MS' , 'AL' , 'KY' , 'GA' , 'FL' , 'SC' , 'NC' , 'VA' , 'WV' , 'MD' , 'DC' , 'DE' ) THEN 'South' WHEN state IN ( 'ND' , 'SD' , 'NE' , 'KS' , 'MN' , 'IA' , 'MO' , 'WI' , 'IL' , 'IN' , 'MI' , 'OH' ) THEN 'Midwest' WHEN state IN ( 'NY' , 'PA' , 'NJ' , 'CT' , 'RI' , 'MA' , 'VT' , 'NH' , 'ME' ) THEN 'Northeast' ELSE 'None' END as region , average mother age , average father age , state , year FROM ( SELECT year , state , SUM ( mother age ) / COUNT ( mother age ) as average mother age , SUM ( father age ) / COUNT ( father age ) as average father age FROM [ bigquery - public - data : samples . natality ] WHERE father age < 99 GROUP BY year , state ) ORDER BY year LIMIT 5 ; Returns: +--------+--------------------+--------------------+-------+------+ region average mother age average father age state year +--------+--------------------+--------------------+-------+------+ South 24.342600163532296 27.683769419460344 AR 1969 West 25.185041908446163 28.268214055448098 AK 1969 West 24.780776677578217 27.831181063905248 CA 1969 West 25.005834769924412 27.942978384829598 AZ 1969 South 24.541730952905738 27.686430093306885 AL 1969 +--------+--------------------+--------------------+-------+------+ Simulating a Pivot Table Use conditional statements to organize the results of a subselect query into rows and columns.
- Example This query computes the most common first words in the ngram sample dataset that contain the letter a and occur at most 10,000 times. legacySQL SELECT first , COUNT ( ngram ) ngram count FROM [ bigquery - public - data : samples . trigrams ] GROUP BY 1 HAVING first contains "a" AND ngram count < 10000 ORDER BY 2 DESC LIMIT 10 ; ORDER BY clause The ORDER BY clause sorts the results of a query in ascending or descending order using one or more key fields.
- This window function requires ORDER BY in the OVER clause. legacySQL SELECT word , word count , RANK () OVER ( PARTITION BY corpus ORDER BY word count DESC ) rank , FROM [ bigquery - public - data : samples . shakespeare ] WHERE corpus = 'othello' and length ( word ) > 10 LIMIT 5 Returns: word word count rank handkerchief 29 1 satisfaction 5 2 displeasure 4 3 instruments 4 3 circumstance 3 5 RATIO TO REPORT( <column> ) Returns the ratio of each value to the sum of the values, as a double between 0 and 1. legacySQL SELECT word , word count , RATIO TO REPORT ( word count ) OVER ( PARTITION BY corpus ORDER BY word count DESC ) r to r , FROM [ bigquery - public - data : samples . shakespeare ] WHERE corpus = 'othello' and length ( word ) > 10 LIMIT 5 Returns: word word count r to r handkerchief 29 0.6444444444444445 satisfaction 5 0.1111111111111111 displeasure 4 0.08888888888888889 instruments 4 0.08888888888888889 circumstance 3 0.06666666666666667 ROW NUMBER() Returns the current row number of the query result over the window, starting with 1. legacySQL SELECT word , word count , ROW NUMBER () OVER ( PARTITION BY corpus ORDER BY word count DESC ) row num , FROM [ bigquery - public - data : samples . shakespeare ] WHERE corpus = 'othello' and length ( word ) > 10 LIMIT 5 Returns: word word count row num handkerchief 29 1 satisfaction 5 2 displeasure 4 3 instruments 4 4 circumstance 3 5 Other functions Syntax Other functions CASE WHEN ...
- Here we present the full grammar of SELECT statements in a compact form with links back to the individual sections. query : SELECT { field path . expression } [ [ AS ] alias ] [ , ... ] [ FROM from body [ WHERE bool expression ] [ OMIT RECORD IF bool expression ] [ GROUP [ EACH ] BY [ ROLLUP ] { field name or alias } [ , ... ] ] [ HAVING bool expression ] [ ORDER BY field name or alias [ { DESC ASC } ] [, ... ] ] [ LIMIT n ] ]; from body : { from item [, ...] # Warning : Comma means UNION ALL here from item [ join type ] JOIN [ EACH ] from item [ ON join predicate ] ( FLATTEN ( { table name ( query ) } , field name or alias )) table wildcard function } from item : { table name ( query ) } [ [ AS ] alias ] join type : { INNER [ FULL ] [ OUTER ] RIGHT [ OUTER ] LEFT [ OUTER ] CROSS } join predicate : field from one side of the join = field from the other side of the join [ AND ...] expression : { literal value field name or alias function call } bool expression : { expression which results in a boolean value bool expression AND bool expression bool expression OR bool expression NOT bool expression } Notation: Square brackets "[ ]" indicate optional clauses.

