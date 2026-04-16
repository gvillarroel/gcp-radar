---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.710Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "SQL column-level encryption with Cloud KMS"
feature_slug: "sql-column-level-encryption-with-cloud-kms"
latest_feature_date: "2021-10-27"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts"
  - "https://docs.cloud.google.com/bigquery/docs/api-sql-translator"
  - "https://docs.cloud.google.com/bigquery/docs/remote-functions-translation-tutorial"
keywords:
  - "sql"
  - "column"
  - "level"
  - "encryption"
  - "kms"
  - "bigquery"
  - "supports"
  - "encrypt"
---

# SQL column-level encryption with Cloud KMS

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports SQL column-level encryption using Cloud KMS to encrypt keysets within AEAD functions.

## Extended Definition

BigQuery supports SQL column-level encryption using Cloud KMS to encrypt keysets within AEAD functions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts](https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts)
- [https://docs.cloud.google.com/bigquery/docs/api-sql-translator](https://docs.cloud.google.com/bigquery/docs/api-sql-translator)
- [https://docs.cloud.google.com/bigquery/docs/remote-functions-translation-tutorial](https://docs.cloud.google.com/bigquery/docs/remote-functions-translation-tutorial)

## Supporting Pages

### "Translate SQL queries with the translation API \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/api-sql-translator](https://docs.cloud.google.com/bigquery/docs/api-sql-translator)
- Source ID: `site-docs-reference-5`
- Final score: 52
- Re-rank relevance: N/A

Evidence snippets:
- If the task succeeds, you will find the translated SQL in the response message: { "name" : "projects/123456789/locations/us/workflows/12345678-9abc-def1-2345-6789abcdef00" , "tasks" : { "string" : { "id" : "0fedba98-7654-3210-1234-56789abcdef" , "type" : "HiveQL2BigQuery Translation" , / ... / "taskResult" : { "translationTaskResult" : { "translatedLiterals" : [ { "relativePath" : "sql/input file" , "literalString" : "-- Translation time: 2023-10-05T21:50:49.885839Z\n-- Translation job ID: projects/123456789/locations/us/workflows/12345678-9abc-def1-2345-6789abcdef00\n-- Source: input file\n-- Translated from: Hive\n-- Translated to: BigQuery\n\nSELECT\n 1\n;\n" } ], "reportLogMessages" : [ ... ] } }, / ... / } }, "state" : "COMPLETED" , "createTime" : "2023-10-05T21:50:49.543221Z" , "lastUpdateTime" : "2023-10-05T21:50:50.462758Z" } Explore the translation output After running the translation job, retrieve the results by specifying the translation job workflow ID using the following command: curl \ -H "Content-Type:application/json" \ -H "Authorization:Bearer TOKEN " -X GET https://bigquerymigration.googleapis.com/v2alpha/projects/ PROJECT ID /locations/ LOCATION /workflows/ WORKFLOW ID Replace the following: TOKEN : the token for authentication.
- Supported task types The translation API can translate the following SQL dialects into GoogleSQL: Amazon Redshift SQL - Redshift2BigQuery Translation Apache HiveQL and Beeline CLI - HiveQL2BigQuery Translation Apache Impala - Impala2BigQuery Translation Apache Spark SQL - SparkSQL2BigQuery Translation Azure Synapse T-SQL - AzureSynapse2BigQuery Translation GoogleSQL (BigQuery) - Bigquery2Bigquery Translation Greenplum SQL - Greenplum2BigQuery Translation IBM Db2 SQL - Db22BigQuery Translation IBM Netezza SQL and NZPLSQL - Netezza2BigQuery Translation MySQL SQL - MySQL2BigQuery Translation Oracle SQL, PL/SQL, Exadata - Oracle2BigQuery Translation PostgreSQL SQL - Postgresql2BigQuery Translation Presto or Trino SQL - Presto2BigQuery Translation Snowflake SQL - Snowflake2BigQuery Translation SQLite - SQLite2BigQuery Translation SQL Server T-SQL - SQLServer2BigQuery Translation Teradata and Teradata Vantage - Teradata2BigQuery Translation Vertica SQL - Vertica2BigQuery Translation Handling unsupported SQL functions with helper UDFs When translating SQL from a source dialect to BigQuery, some functions might not have a direct equivalent.
- The following example translates the Teradata SQL scripts located in the gs://my data bucket/teradata/input/ Cloud Storage directory and stores results in the Cloud Storage directory gs://my data bucket/teradata/output/ with additional AI suggestion: { "tasks" : { "task name" : { "type" : "Teradata2BigQuery Translation" , "translation details" : { "target base uri" : "gs://my data bucket/teradata/output/" , "source target mapping" : { "source spec" : { "base uri" : "gs://my data bucket/teradata/input/" } }, "target types" : "suggestion" , } } } } Note: To generate AI suggestions, the Cloud Storage source directory must contain at least one configuration YAML file with a suffix of .ai config.yaml .
- The source target mapping field contains a list that maps the source directories to an optional relative path for the target output. curl -d "{ \"tasks\": { string: { \"type\": \" TYPE \", \"translation details\": { \"source target mapping\": { \"source spec\": { \"literal\": { \"relative path\": \" PATH \", \"literal string\": \" STRING \" } } }, \"target return literals\": \" TARGETS \", } } } }" \ -H "Content-Type:application/json" \ -H "Authorization: Bearer TOKEN " -X POST https://bigquerymigration.googleapis.com/v2alpha/projects/ PROJECT ID /locations/ LOCATION /workflows Replace the following: TYPE : the task type of the translation, which determines the source and target dialect.

### "Remote functions and Translation API tutorial \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/remote-functions-translation-tutorial](https://docs.cloud.google.com/bigquery/docs/remote-functions-translation-tutorial)
- Source ID: `site-docs-reference-2`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- Args: request: HTTP request from BigQuery https://cloud.google.com/bigquery/docs/reference/standard-sql/remote-functions#input format Returns: HTTP response to BigQuery https://cloud.google.com/bigquery/docs/reference/standard-sql/remote-functions#output format """ try : Parse request data as JSON request json = request . get json () Get the project of the query caller = request json [ "caller" ] project = extract project from caller ( caller ) if project is None : return flask . make response ( flask . jsonify ( { "errorMessage" : ( 'project can \' t be extracted from "caller":' f " { caller } ." ) } ), 400 , ) Get the target language code, default is Spanish ("es") context = request json . get ( "userDefinedContext" , {}) target = context . get ( "target language" , "es" ) calls = request json [ "calls" ] translated = translate text ([ call [ 0 ] for call in calls ], project , target ) return flask . jsonify ({ "replies" : translated }) except Exception as err : return flask . make response ( flask . jsonify ({ "errorMessage" : f "Unexpected error { type ( err ) } : { err } " }), 400 , ) def extract project from caller ( job : str ) - > str : """Extract project id from full resource name of a BigQuery job.
- Enable the APIs Required roles for your account To get the permissions that you need to perform the tasks in this tutorial, ask your administrator to grant you the following IAM roles on your project: BigQuery Data Owner ( roles/bigquery.dataOwner ) BigQuery Connection Admin ( roles/bigquery.connectionAdmin ) Cloud Functions Developer ( roles/cloudfunctions.developer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Args: job: full resource name of a BigQuery job, like "//bigquery.googleapi.com/projects/<project>/jobs/<job id>" Returns: project id which is contained in the full resource name of the job. """ path = job . split ( "/" ) return path [ 4 ] if len ( path ) > 4 else None def translate text ( calls : list [ str ], project : str , target language code : str ) - > list [ str ]: """Translates the input text to specified language using Translation API.
- SELECT text , remote function test . translate text ( text ) AS translated text FROM ( SELECT text FROM bigquery-public-data.hacker news.full LIMIT 3 ); The results are similar to the following: +---------------------------------------------------------------------------+ text translated text +---------------------------------------------------------------------------+ These benchmarks look good.

### AEAD encryption concepts \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts](https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts)
- Source ID: `site-docs-reference-2`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- GoogleSQL for BigQuery supports Authenticated Encryption with Associated Data (AEAD) encryption.
- For more information, see SQL column-level encryption with Cloud KMS keys .
- Home Documentation Data analytics BigQuery Guides Send feedback AEAD encryption concepts Stay organized with collections Save and categorize content based on your preferences.
- BigQuery also provides support for customer managed encryption keys (CMEKs), which lets you encrypt tables using specific encryption keys.

