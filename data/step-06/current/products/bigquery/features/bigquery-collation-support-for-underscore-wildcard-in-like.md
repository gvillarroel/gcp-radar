---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.572Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery collation support for underscore wildcard in LIKE"
feature_slug: "bigquery-collation-support-for-underscore-wildcard-in-like"
latest_feature_date: "2024-04-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "underscore wildcard in LIKE"
  - "LIKE underscore wildcard"
  - "wildcard matching"
  - "collation support in LIKE"
  - "LIKE '_' pattern"
  - "string collation"
  - "STRING LIKE"
  - "LIKE _"
---

# BigQuery collation support for underscore wildcard in LIKE

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery collation now supports the underscore wildcard in LIKE expressions.

## Extended Definition

The feature is defined as BigQuery LIKE operator pattern matching behavior for strings (with collation context), specifically around support for wildcard patterns. Based on the provided excerpts, LIKE returns TRUE/FALSE when a string matches a pattern, but the evidence does not explicitly confirm underscore (`_`) wildcard behavior under collation as of the cited text.

## Evidence Summary

The cited pages describe LIKE as a boolean string-pattern operator and show pattern-matching examples, but they do not explicitly document collation-specific underscore wildcard support in the extracted snippets.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### Operators \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators)
- Source ID: `site-docs-root`
- Final score: 40
- Re-rank relevance: WEAK
- Re-rank rationale: LIKE is referenced as an operator, but the page excerpt does not mention collation rules or underscore wildcard specifics.

Evidence snippets:
- Return type BOOL Examples The following examples illustrate how you can check to see if the string in the first operand matches a pattern specified by the second operand. -- Returns TRUE SELECT 'apple' LIKE 'a%' ; -- Returns FALSE SELECT '%a' LIKE 'apple' ; -- Returns FALSE SELECT 'apple' NOT LIKE 'a%' ; -- Returns TRUE SELECT '%a' NOT LIKE 'apple' ; -- Produces an error SELECT NULL LIKE 'a%' ; -- Produces an error SELECT 'apple' LIKE NULL ; The following example illustrates how to search multiple patterns in an array to find a match with the LIKE operator: WITH Words AS ( SELECT 'Intend with clarity.' as value UNION ALL SELECT 'Secure with intention.' UNION ALL SELECT 'Clarity and security.' ) SELECT value FROM Words WHERE EXISTS ( SELECT value FROM UNNEST ( [ '%ity%' , '%and%' ] ) AS pattern WHERE value LIKE pattern ); / ------------------------+ value +------------------------+ Intend with clarity.
- Return type BOOL Examples These return TRUE : SELECT 1 IS DISTINCT FROM 2 SELECT 1 IS DISTINCT FROM NULL SELECT 1 IS NOT DISTINCT FROM 1 SELECT NULL IS NOT DISTINCT FROM NULL These return FALSE : SELECT NULL IS DISTINCT FROM NULL SELECT 1 IS DISTINCT FROM 1 SELECT 1 IS NOT DISTINCT FROM 2 SELECT 1 IS NOT DISTINCT FROM NULL LIKE operator expression [ NOT ] LIKE pattern Description LIKE returns TRUE if the string in the first operand expression matches a pattern specified by the second operand pattern , otherwise returns FALSE .
- Returns FALSE if search value LIKE pattern is FALSE for at least one value in patterns .
- Returns TRUE if search value LIKE pattern is FALSE for at least one value in patterns .

### "Legacy SQL Syntax, Functions and Operators \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- Source ID: `site-docs-reference`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- The expr can be a string like '45.78' , but the function returns NULL for non-numeric values.
- Examples: PARSE PACKED IP('48.49.50.51') returns 'MDEyMw==' PARSE PACKED IP('3031:3233:3435:3637:3839:4041:4243:4445') returns 'MDEyMzQ1Njc4OUBBQkNERQ==' JSON functions BigQuery's JSON functions give you the ability to find values within your stored JSON data, by using JSONPath -like expressions.
- FLATTEN operator (FLATTEN( [project name:]datasetId.tableId , field to be flattened)) (FLATTEN(( subquery ), field to be flattened)) Unlike typical SQL-processing systems, BigQuery is designed to handle repeated data.
- Instead, the query returns an error like the following: Querying tables partitioned on a field is not supported in Legacy SQL Using subqueries A subquery is a nested SELECT statement wrapped in parentheses.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library and create a client const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function ddlCreateView () { // Creates a view via a DDL query / TODO(developer): Uncomment the following lines before running the sample. / // const projectId = "my project" // const datasetId = "my dataset" // const tableId = "my new view" const query = CREATE VIEW \ ${ projectId } . ${ datasetId } . ${ tableId } \ OPTIONS( expiration timestamp=TIMESTAMP ADD( CURRENT TIMESTAMP(), INTERVAL 48 HOUR), friendly name="new view", description="a view that expires in 2 days", labels=[("org unit", "development")] ) AS SELECT name, state, year, number FROM \bigquery-public-data.usa names.usa 1910 current\ WHERE state LIKE 'W%' ; // For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query const options = { query : query , }; // Run the query as a job const [ job ] = await bigquery . createQueryJob ( options ); job . on ( 'complete' , metadata = > { console . log ( Created new view ${ tableId } via job ${ metadata . id } ); }); } Python Call the Client.query() method to start a query job.
- For more information, see Set up authentication for client libraries . from google.cloud import bigquery project = 'my-project' dataset id = 'my dataset' table id = 'new view' client = bigquery.Client(project=project) sql = """ CREATE VIEW {} . {} . {} OPTIONS( expiration timestamp=TIMESTAMP ADD( CURRENT TIMESTAMP(), INTERVAL 48 HOUR), friendly name="new view", description="a view that expires in 2 days", labels=[("org unit", "development")] ) AS SELECT name, state, year, number FROM bigquery-public-data.usa names.usa 1910 current WHERE state LIKE 'W%' """ . format ( project , dataset id , table id ) job = client . query ( sql ) # API request. job . result () # Waits for the query to finish. print ( 'Created new view " {} . {} . {} ".' . format ( job . destination . project , job . destination . dataset id , job . destination . table id , ) ) On-demand query size calculation If you use on-demand billing, BigQuery charges for data definition language (DDL) queries based on the number of bytes processed by the query.
- When new data is available, append the data of the 1993 year to the destination table using the INSERT INTO SELECT statement: INSERT INTO myotherdataset . orders SELECT FROM myawsdataset . orders WHERE EXTRACT ( YEAR FROM l commitdate ) = 1993 ; Example 2 The following example inserts data into an ingestion-time partitioned table: CREATE TABLE mydataset . orders ( id String , numeric id INT64 ) PARTITION BY PARTITIONDATE ; After creating a partitioned table, you can insert data into the ingestion-time partitioned table: INSERT INTO mydataset . orders ( PARTITIONTIME , id , numeric id ) SELECT TIMESTAMP ( "2023-01-01" ), id , numeric id , FROM mydataset . ordersof23 WHERE numeric id > 4000000 ; CREATE TABLE LIKE statement Creates a new table with all of the same metadata of another table.
- String projectId = "MY PROJECT ID" ; String datasetId = "MY DATASET ID" ; String tableId = "MY VIEW ID" ; String ddl = "CREATE VIEW " + "" + projectId + "." + datasetId + "." + tableId + "" + " OPTIONS(" + " expiration timestamp=TIMESTAMP ADD(" + " CURRENT TIMESTAMP(), INTERVAL 48 HOUR)," + " friendly name=\"new view\"," + " description=\"a view that expires in 2 days\"," + " labels=[(\"org unit\", \"development\")]" + " )" + " AS SELECT name, state, year, number" + " FROM bigquery-public-data.usa names.usa 1910 current" + " WHERE state LIKE 'W%'" ; ddlCreateView ( ddl ); } public static void ddlCreateView ( String ddl ) { try { // Initialize client that will be used to send requests.

