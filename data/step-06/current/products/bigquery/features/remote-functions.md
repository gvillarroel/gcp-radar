---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.650Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Remote functions"
feature_slug: "remote-functions"
latest_feature_date: "2022-10-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/remote-functions-translation-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas"
keywords:
  - "remote"
  - "functions"
  - "let"
  - "bigquery"
  - "googlesql"
  - "queries"
  - "invoke"
  - "hosted"
---

# Remote functions

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Remote functions let BigQuery GoogleSQL queries invoke functions hosted in Cloud Functions or Cloud Run; Remote functions let BigQuery call functions implemented outside SQL and JavaScript, including external libraries and services.

## Extended Definition

Remote functions let BigQuery GoogleSQL queries invoke functions hosted in Cloud Functions or Cloud Run; Remote functions let BigQuery call functions implemented outside SQL and JavaScript, including external libraries and services.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/remote-functions-translation-tutorial](https://docs.cloud.google.com/bigquery/docs/remote-functions-translation-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas](https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- Example: "https://us-east1-your-project.cloudfunctions.net/foo" For more information, see Create a remote function . user defined context ARRAY <STRUCT <STRING,STRING>> A list of key-value pairs that will be sent with every HTTP request when the function is invoked.
- If all of the invoked functions are DETERMINISTIC , BigQuery tries to cache the result, unless the results can't be cached for other reasons.
- Examples The following table function takes an INT64 parameter that is used to filter the results of a query: CREATE OR REPLACE TABLE FUNCTION mydataset . names by year ( y INT64 ) AS SELECT year , name , SUM ( number ) AS total FROM bigquery-public-data.usa names.usa 1910 current WHERE year = y GROUP BY year , name The following example specifies the return TABLE type in the RETURNS clause: CREATE OR REPLACE TABLE FUNCTION mydataset . names by year ( y INT64 ) RETURNS TABLE<name STRING , year INT64 , total INT64 > AS SELECT year , name , SUM ( number ) AS total FROM bigquery-public-data.usa names.usa 1910 current WHERE year = y GROUP BY year , name The following example computes total sales for items with the name item name from the orders table: CREATE TABLE FUNCTION mydataset . compute sales ( orders TABLE<item STRING , sales INT64 > , item name STRING ) AS ( SELECT SUM ( sales ) AS total sales , item FROM orders WHERE item = item name GROUP BY item ); CREATE PROCEDURE statement Creates a new procedure , which is a block of statements that can be called from other queries.
- For more information, see Set up authentication for client libraries . from google.cloud import bigquery project = 'my-project' dataset id = 'my dataset' table id = 'new view' client = bigquery.Client(project=project) sql = """ CREATE VIEW {} . {} . {} OPTIONS( expiration timestamp=TIMESTAMP ADD( CURRENT TIMESTAMP(), INTERVAL 48 HOUR), friendly name="new view", description="a view that expires in 2 days", labels=[("org unit", "development")] ) AS SELECT name, state, year, number FROM bigquery-public-data.usa names.usa 1910 current WHERE state LIKE 'W%' """ . format ( project , dataset id , table id ) job = client . query ( sql ) # API request. job . result () # Waits for the query to finish. print ( 'Created new view " {} . {} . {} ".' . format ( job . destination . project , job . destination . dataset id , job . destination . table id , ) ) On-demand query size calculation If you use on-demand billing, BigQuery charges for data definition language (DDL) queries based on the number of bytes processed by the query.

### "Remote functions and Translation API tutorial \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/remote-functions-translation-tutorial](https://docs.cloud.google.com/bigquery/docs/remote-functions-translation-tutorial)
- Source ID: `site-docs-reference-2`
- Final score: 178
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Remote functions and Translation API tutorial This tutorial describes how to create a BigQuery remote function , invoke the Cloud Translation API , and perform content translation from any language to Spanish using SQL and Python.
- Args: request: HTTP request from BigQuery https://cloud.google.com/bigquery/docs/reference/standard-sql/remote-functions#input format Returns: HTTP response to BigQuery https://cloud.google.com/bigquery/docs/reference/standard-sql/remote-functions#output format """ try : Parse request data as JSON request json = request . get json () Get the project of the query caller = request json [ "caller" ] project = extract project from caller ( caller ) if project is None : return flask . make response ( flask . jsonify ( { "errorMessage" : ( 'project can \' t be extracted from "caller":' f " { caller } ." ) } ), 400 , ) Get the target language code, default is Spanish ("es") context = request json . get ( "userDefinedContext" , {}) target = context . get ( "target language" , "es" ) calls = request json [ "calls" ] translated = translate text ([ call [ 0 ] for call in calls ], project , target ) return flask . jsonify ({ "replies" : translated }) except Exception as err : return flask . make response ( flask . jsonify ({ "errorMessage" : f "Unexpected error { type ( err ) } : { err } " }), 400 , ) def extract project from caller ( job : str ) - > str : """Extract project id from full resource name of a BigQuery job.
- Go to BigQuery In the query editor, enter the following query: CREATE OR REPLACE FUNCTION remote function test.translate text ( x STRING ) RETURNS STRING REMOTE WITH CONNECTION us.remote-function-connection OPTIONS ( endpoint = ' TRIGGER URL ' , max batching rows = 10 ); Replace TRIGGER URL with the trigger URL that you saved earlier when you created a Cloud Run functions function.
- Grant permissions to the BigQuery service account The service account that you created in the previous step needs permission to use Cloud Run so that the BigQuery remote function can use the Cloud Run functions function.

### Troubleshoot quota and limit errors \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas](https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- Maximum number of concurrent queries that contain remote functions BigQuery returns this error when the number of concurrent queries that contain remote functions exceeds the limit.
- Error message Exceeded rate limits: too many concurrent queries with remote functions for this project This limit can be increased.
- Diagnosis To see limits for concurrent queries that contain remote functions , see Remote function limits .
- If you run high-volume interactive queries, especially in scenarios that involve automated triggers like Cloud Run functions, first monitor the behavior of, and stop, the Cloud Run function causing the error, and then use one of the following recommended strategies for avoiding this limit: Increase slots in your reservation .

