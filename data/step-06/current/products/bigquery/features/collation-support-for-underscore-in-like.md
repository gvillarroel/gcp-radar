---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.478Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Collation support for underscore in LIKE"
feature_slug: "collation-support-for-underscore-in-like"
latest_feature_date: "2024-04-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql"
keywords:
  - "collation"
  - "underscore"
  - "like"
  - "bigquery"
  - "supports"
  - "wildcard"
  - "operator"
---

# Collation support for underscore in LIKE

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery collation supports the underscore wildcard in the LIKE operator.

## Extended Definition

BigQuery collation supports the underscore wildcard in the LIKE operator.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)

## Supporting Pages

### Operators \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators)
- Source ID: `site-docs-root`
- Final score: 184
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Even though the number of code points is different, the two strings are considered equal when the collation units are considered the same. '\u0041\u030A' is 'Å' (two code points) '\u0061\u030A' is 'å' (two code points) '\u00C5' is 'Å' (one code point) In the following examples, the difference between '\u0061\u030A' and '\u00C5' is tertiary. -- Returns FALSE ' \ u0061 \ u030A' LIKE '% \ u00C5%' ; -- Returns TRUE COLLATE ( ' \ u0061 \ u030A' , 'und:ci' ) LIKE '% \ u00C5%' ; -- Returns TRUE COLLATE ( ' \ u0061 \ u030A' , 'und:ci' ) = COLLATE ( ' \ u00C5' , 'und:ci' ); In the following example, '\u0083' is a NO BREAK HERE character and is ignored. -- Returns FALSE ' \ u0083' LIKE '' ; -- Returns TRUE COLLATE ( ' \ u0083' , 'und:ci' ) LIKE '' ; Quantified LIKE operator The quantified LIKE operator supports the following syntax: search value [ NOT ] LIKE quantifier patterns quantifier : { ANY SOME ALL } patterns : { ( expression [ , ... ] ) UNNEST ( array expression ) } Description Checks search value for matches against several patterns.
- The LIKE operator with collation has the same behavior as the = operator when there are no wildcards in the strings.
- Clarity and security. +------------------------ / The following queries illustrate some of the semantic rules for the quantified LIKE operator: SELECT NULL LIKE ANY ( 'a' , 'b' ), -- NULL 'a' LIKE ANY ( 'a' , 'c' ), -- TRUE 'a' LIKE ANY ( 'b' , 'c' ), -- FALSE 'a' LIKE ANY ( 'a' , NULL ), -- TRUE 'a' LIKE ANY ( 'b' , NULL ), -- NULL NULL NOT LIKE ANY ( 'a' , 'b' ), -- NULL 'a' NOT LIKE ANY ( 'a' , 'b' ), -- TRUE 'a' NOT LIKE ANY ( 'a' , '%a%' ), -- FALSE 'a' NOT LIKE ANY ( 'a' , NULL ), -- NULL 'a' NOT LIKE ANY ( 'b' , NULL ); -- TRUE SELECT NULL LIKE SOME ( 'a' , 'b' ), -- NULL 'a' LIKE SOME ( 'a' , 'c' ), -- TRUE 'a' LIKE SOME ( 'b' , 'c' ), -- FALSE 'a' LIKE SOME ( 'a' , NULL ), -- TRUE 'a' LIKE SOME ( 'b' , NULL ), -- NULL NULL NOT LIKE SOME ( 'a' , 'b' ), -- NULL 'a' NOT LIKE SOME ( 'a' , 'b' ), -- TRUE 'a' NOT LIKE SOME ( 'a' , '%a%' ), -- FALSE 'a' NOT LIKE SOME ( 'a' , NULL ), -- NULL 'a' NOT LIKE SOME ( 'b' , NULL ); -- TRUE SELECT NULL LIKE ALL ( 'a' , 'b' ), -- NULL 'a' LIKE ALL ( 'a' , '%a%' ), -- TRUE 'a' LIKE ALL ( 'a' , 'c' ), -- FALSE 'a' LIKE ALL ( 'a' , NULL ), -- NULL 'a' LIKE ALL ( 'b' , NULL ), -- FALSE NULL NOT LIKE ALL ( 'a' , 'b' ), -- NULL 'a' NOT LIKE ALL ( 'b' , 'c' ), -- TRUE 'a' NOT LIKE ALL ( 'a' , 'c' ), -- FALSE 'a' NOT LIKE ALL ( 'a' , NULL ), -- FALSE 'a' NOT LIKE ALL ( 'b' , NULL ); -- NULL The following queries illustrate some of the semantic rules for the quantified LIKE operator and collation: SELECT COLLATE ( 'a' , 'und:ci' ) LIKE ALL ( 'a' , 'A' ), -- TRUE 'a' LIKE ALL ( COLLATE ( 'a' , 'und:ci' ), 'A' ), -- TRUE 'a' LIKE ALL ( '%A%' , COLLATE ( 'a' , 'und:ci' )); -- TRUE -- ERROR: BYTES and STRING values can't be used together.
- Clarity and security. +------------------------ / The following examples illustrate how collation can be used with the LIKE operator. -- Returns FALSE 'Foo' LIKE '%foo%' -- Returns TRUE COLLATE ( 'Foo' , 'und:ci' ) LIKE COLLATE ( '%foo%' , 'und:ci' ); -- Returns TRUE COLLATE ( 'Foo' , 'und:ci' ) = COLLATE ( 'foo' , 'und:ci' ); -- Produces an error COLLATE ( 'Foo' , 'und:ci' ) LIKE COLLATE ( '%foo%' , 'binary' ); -- Produces an error COLLATE ( 'Foo' , 'und:ci' ) LIKE COLLATE ( '%f o%' , 'und:ci' ); -- Returns TRUE COLLATE ( 'Foo ' , 'und:ci' ) LIKE COLLATE ( '%foo \\ %' , 'und:ci' ); There are two capital forms of ß .

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library and create a client const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function ddlCreateView () { // Creates a view via a DDL query / TODO(developer): Uncomment the following lines before running the sample. / // const projectId = "my project" // const datasetId = "my dataset" // const tableId = "my new view" const query = CREATE VIEW \ ${ projectId } . ${ datasetId } . ${ tableId } \ OPTIONS( expiration timestamp=TIMESTAMP ADD( CURRENT TIMESTAMP(), INTERVAL 48 HOUR), friendly name="new view", description="a view that expires in 2 days", labels=[("org unit", "development")] ) AS SELECT name, state, year, number FROM \bigquery-public-data.usa names.usa 1910 current\ WHERE state LIKE 'W%' ; // For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query const options = { query : query , }; // Run the query as a job const [ job ] = await bigquery . createQueryJob ( options ); job . on ( 'complete' , metadata = > { console . log ( Created new view ${ tableId } via job ${ metadata . id } ); }); } Python Call the Client.query() method to start a query job.
- For more information, see Set up authentication for client libraries . from google.cloud import bigquery project = 'my-project' dataset id = 'my dataset' table id = 'new view' client = bigquery.Client(project=project) sql = """ CREATE VIEW {} . {} . {} OPTIONS( expiration timestamp=TIMESTAMP ADD( CURRENT TIMESTAMP(), INTERVAL 48 HOUR), friendly name="new view", description="a view that expires in 2 days", labels=[("org unit", "development")] ) AS SELECT name, state, year, number FROM bigquery-public-data.usa names.usa 1910 current WHERE state LIKE 'W%' """ . format ( project , dataset id , table id ) job = client . query ( sql ) # API request. job . result () # Waits for the query to finish. print ( 'Created new view " {} . {} . {} ".' . format ( job . destination . project , job . destination . dataset id , job . destination . table id , ) ) On-demand query size calculation If you use on-demand billing, BigQuery charges for data definition language (DDL) queries based on the number of bytes processed by the query.
- String projectId = "MY PROJECT ID" ; String datasetId = "MY DATASET ID" ; String tableId = "MY VIEW ID" ; String ddl = "CREATE VIEW " + "" + projectId + "." + datasetId + "." + tableId + "" + " OPTIONS(" + " expiration timestamp=TIMESTAMP ADD(" + " CURRENT TIMESTAMP(), INTERVAL 48 HOUR)," + " friendly name=\"new view\"," + " description=\"a view that expires in 2 days\"," + " labels=[(\"org unit\", \"development\")]" + " )" + " AS SELECT name, state, year, number" + " FROM bigquery-public-data.usa names.usa 1910 current" + " WHERE state LIKE 'W%'" ; ddlCreateView ( ddl ); } public static void ddlCreateView ( String ddl ) { try { // Initialize client that will be used to send requests.
- A column name: Must contain only letters (a-z, A-Z), numbers (0-9), or underscores ( ) Must start with a letter or underscore Can be up to 300 characters column schema : Similar to a data type , but supports an optional NOT NULL constraint for types other than ARRAY . column schema also supports options on top-level columns and STRUCT fields. column schema can be used only in the column definition list of CREATE TABLE statements.

### "Legacy SQL Syntax, Functions and Operators \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- Source ID: `site-docs-reference`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- FLATTEN operator (FLATTEN( [project name:]datasetId.tableId , field to be flattened)) (FLATTEN(( subquery ), field to be flattened)) Unlike typical SQL-processing systems, BigQuery is designed to handle repeated data.
- JOIN operator BigQuery supports multiple JOIN operators in each FROM clause.
- Example: legacySQL SELECT state , / If 'is male' is True, return 'Male', / / otherwise return 'Female' / IF ( is male , 'Male' , 'Female' ) AS sex , / The count value is aliased as 'cnt' / / and used in the HAVING clause below. / COUNT ( ) AS cnt FROM [ bigquery - public - data : samples . natality ] WHERE state != '' GROUP BY state , sex HAVING cnt > 3000000 ORDER BY cnt DESC Returns: +-------+--------+---------+ state sex cnt +-------+--------+---------+ CA Male 7060826 CA Female 6733288 TX Male 5107542 TX Female 4879247 NY Male 4442246 NY Female 4227891 IL Male 3089555 +-------+--------+---------+ Arithmetic operators Arithmetic operators take numeric arguments and return a numeric result.
- Example: legacySQL SELECT / Replace white spaces in the title with underscores. / REGEXP REPLACE ( title , r '\s+' , ' ' ) AS regexp title , revisions FROM ( SELECT title , COUNT ( revision id ) as revisions FROM [ bigquery - public - data : samples . wikipedia ] WHERE wp namespace = 0 / Match titles that start with 'G', end with 'e', and contain at least two 'o's. / AND REGEXP MATCH ( title , r '^G. o. o. e$' ) GROUP BY title ORDER BY revisions DESC LIMIT 100 ); Using regular expressions on integer or float data While BigQuery's regular expression functions only work for string data, it's possible to use the STRING() function to cast integer or float data into string format.

