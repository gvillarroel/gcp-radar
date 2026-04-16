---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.569Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Protobuf export with user-defined functions"
feature_slug: "protobuf-export-with-user-defined-functions"
latest_feature_date: "2023-08-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/user-defined-functions"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/remote-functions-translation-tutorial"
keywords:
  - "protobuf"
  - "export"
  - "user"
  - "defined"
  - "functions"
  - "can"
  - "bigquery"
  - "protocol"
---

# Protobuf export with user-defined functions

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

User-defined functions can export BigQuery data as Protocol Buffer columns.

## Extended Definition

User-defined functions can export BigQuery data as Protocol Buffer columns.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/user-defined-functions](https://docs.cloud.google.com/bigquery/docs/user-defined-functions)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/remote-functions-translation-tutorial](https://docs.cloud.google.com/bigquery/docs/remote-functions-translation-tutorial)

## Supporting Pages

### User-defined functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/user-defined-functions](https://docs.cloud.google.com/bigquery/docs/user-defined-functions)
- Source ID: `site-docs-reference`
- Final score: 178
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example: SELECT id , my utils . my function ( value ) FROM sales ; Limitations The following limitations apply to temporary and persistent user-defined functions: The DOM objects Window , Document , and Node , and functions that require them, are not supported.
- For example: CREATE FUNCTION mydataset.referringFunction() AS (mydataset.referencedFunction()); The following limitations apply to temporary user-defined functions.
- The following limitations apply to persistent user-defined functions: Each dataset can only contain one persistent UDF with the same name.
- User-defined functions A user-defined function (UDF) lets you create a function by using a SQL expression or JavaScript code.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- You can use DDL commands to create, alter, and delete resources, such as the following: Datasets Tables Table schemas Table clones Table snapshots Views Connections User-defined functions (UDFs) Indexes Capacity commitments and reservations Row-level access policies Default configuration settings Required permissions To create a job that runs a DDL statement, you must have the bigquery.jobs.create permission for the project where you are running the job.
- The constant expression cannot contain: A reference to a table Subqueries or SQL statements such as SELECT , CREATE , or UPDATE User-defined functions, aggregate functions, or analytic functions The following scalar functions: ARRAY TO STRING REPLACE REGEXP REPLACE RAND FORMAT LPAD RPAD REPEAT SESSION USER GENERATE ARRAY GENERATE DATE ARRAY If VALUE evaluates to NULL , the corresponding option NAME in the CREATE VIEW statement is ignored. privacy policy The following policies are available in the privacy policy view option to create analysis rules .
- The constant expression cannot contain: A reference to a table Subqueries or SQL statements such as SELECT , CREATE , or UPDATE User-defined functions, aggregate functions, or analytic functions The following scalar functions: ARRAY TO STRING REPLACE REGEXP REPLACE RAND FORMAT LPAD RPAD REPEAT SESSION USER GENERATE ARRAY GENERATE DATE ARRAY If VALUE evaluates to NULL , the corresponding option NAME in the CREATE TABLE statement is ignored. column option list Specify a column option list in the following format: NAME=VALUE, ...
- The constant expression cannot contain: A reference to a table Subqueries or SQL statements such as SELECT , CREATE , and UPDATE User-defined functions, aggregate functions, or analytic functions The following scalar functions: ARRAY TO STRING REPLACE REGEXP REPLACE RAND FORMAT LPAD RPAD REPEAT SESSION USER GENERATE ARRAY GENERATE DATE ARRAY If VALUE evaluates to NULL , the corresponding option NAME in the CREATE SNAPSHOT TABLE statement is ignored.

### "Remote functions and Translation API tutorial \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/remote-functions-translation-tutorial](https://docs.cloud.google.com/bigquery/docs/remote-functions-translation-tutorial)
- Source ID: `site-docs-reference-2`
- Final score: 114
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Args: request: HTTP request from BigQuery https://cloud.google.com/bigquery/docs/reference/standard-sql/remote-functions#input format Returns: HTTP response to BigQuery https://cloud.google.com/bigquery/docs/reference/standard-sql/remote-functions#output format """ try : Parse request data as JSON request json = request . get json () Get the project of the query caller = request json [ "caller" ] project = extract project from caller ( caller ) if project is None : return flask . make response ( flask . jsonify ( { "errorMessage" : ( 'project can \' t be extracted from "caller":' f " { caller } ." ) } ), 400 , ) Get the target language code, default is Spanish ("es") context = request json . get ( "userDefinedContext" , {}) target = context . get ( "target language" , "es" ) calls = request json [ "calls" ] translated = translate text ([ call [ 0 ] for call in calls ], project , target ) return flask . jsonify ({ "replies" : translated }) except Exception as err : return flask . make response ( flask . jsonify ({ "errorMessage" : f "Unexpected error { type ( err ) } : { err } " }), 400 , ) def extract project from caller ( job : str ) - > str : """Extract project id from full resource name of a BigQuery job.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to perform the tasks in this tutorial: bigquery.datasets.create bigquery.connections.create bigquery.connections.get cloudfunctions.functions.create You might also be able to get these permissions with custom roles or other predefined roles .
- Enable the APIs Required roles for your account To get the permissions that you need to perform the tasks in this tutorial, ask your administrator to grant you the following IAM roles on your project: BigQuery Data Owner ( roles/bigquery.dataOwner ) BigQuery Connection Admin ( roles/bigquery.connectionAdmin ) Cloud Functions Developer ( roles/cloudfunctions.developer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Go to BigQuery In the query editor, enter the following query: CREATE OR REPLACE FUNCTION remote function test.translate text ( x STRING ) RETURNS STRING REMOTE WITH CONNECTION us.remote-function-connection OPTIONS ( endpoint = ' TRIGGER URL ' , max batching rows = 10 ); Replace TRIGGER URL with the trigger URL that you saved earlier when you created a Cloud Run functions function.

