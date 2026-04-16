---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.379Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Gemini in BigQuery Python code completion"
feature_slug: "gemini-in-bigquery-python-code-completion"
latest_feature_date: "2025-03-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/gemini-overview"
  - "https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini"
  - "https://docs.cloud.google.com/bigquery/docs/batch-sql-translator"
keywords:
  - "gemini"
  - "bigquery"
  - "python"
  - "code"
  - "completion"
  - "provides"
  - "context"
  - "aware"
---

# Gemini in BigQuery Python code completion

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Gemini in BigQuery provides context-aware Python code completion in the query editor; Gemini in BigQuery provides Python code completion for BigQuery projects.

## Extended Definition

Gemini in BigQuery provides context-aware Python code completion in the query editor; Gemini in BigQuery provides Python code completion for BigQuery projects.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/gemini-overview](https://docs.cloud.google.com/bigquery/docs/gemini-overview)
- [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini)
- [https://docs.cloud.google.com/bigquery/docs/batch-sql-translator](https://docs.cloud.google.com/bigquery/docs/batch-sql-translator)

## Supporting Pages

### Gemini in BigQuery overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/gemini-overview](https://docs.cloud.google.com/bigquery/docs/gemini-overview)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To learn how to generate, complete, and summarize code, see the following documentation: SQL code assist Use the SQL generation tool Prompt to generate SQL queries Generate SQL queries with Gemini Cloud Assist ( Preview ) Convert comments to SQL ( Preview ) Complete a SQL query ( Preview ) Explain a SQL query Python code assist Generate Python code with the code generation tool Generate Python code with Gemini Cloud Assist ( Preview ) Python code completion Generate BigQuery DataFrames Python code ( Preview ) Prepare data for analysis .
- Enhanced features in Gemini in BigQuery are the following: SQL generation tool Prompt to generate SQL queries Convert comments to SQL Complete a SQL query Explain a SQL query Generate python code Python code completion Data canvas Data preparation Data insights Locations For information about where Gemini in BigQuery processes your data, see Where Gemini in BigQuery processes your data .
- You can use Gemini in BigQuery to generate or suggest code in either SQL or Python, and to explain an existing SQL query.
- Gemini in BigQuery overview This document describes how Gemini in BigQuery, which is part of the Gemini for Google Cloud product suite, provides AI-powered assistance to help you work with your data.

### "Generate text by using a Gemini model and the AI.GENERATE_TEXT function\

- URL: [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini)
- Source ID: `site-docs-reference`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- GENERATE TEXT ( MODEL bqml tutorial.gemini model , ( SELECT CONCAT ( " "" Perform sentiment analysis on the following text and return one the following categories: positive, negative: "" " , review ) AS prompt , FROM bigquery-public-data.imdb.reviews LIMIT 5 ), STRUCT ( 0.2 AS temperature , 100 AS max output tokens )); The output is similar to the following: +----------+----------+------------------------------------------------+ title result review +----------+----------+------------------------------------------------+ Quitting Positive This movie is amazing because the fact that...
- CONNECTION ID OPTIONS ( ENDPOINT = 'gemini-2.5-flash' ); Replace the following: LOCATION : the connection location CONNECTION ID : the ID of your BigQuery connection When you view the connection details in the Google Cloud console, this is the value in the last section of the fully qualified connection ID that is shown in Connection ID , for example projects/myproject/locations/connection location/connections/ myconnection The query takes several seconds to complete, after which the model gemini model appears in the bqml tutorial dataset.
- CONNECTION ID {"serviceAccountId": "connection-1234-9u56h9@gcp-sa-bigquery-condel.iam.gserviceaccount.com"} Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- Home Documentation Data analytics BigQuery Guides Send feedback Generate text by using a Gemini model and the AI.GENERATE TEXT function Stay organized with collections Save and categorize content based on your preferences.

### "Migrate code with the batch SQL translator \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/batch-sql-translator](https://docs.cloud.google.com/bigquery/docs/batch-sql-translator)
- Source ID: `site-docs-reference-5`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- Migrate code with the batch SQL translator Note: For API-based translations, including new batch translations, we recommend that you use the BigQuery Migration API to translate your SQL scripts.
- The BigQuery Migration API works much like the batch SQL translator, but without the need to install or use client code.
- The following example shows a translation configuration YAML file for a Teradata to BigQuery translation: tasks: translation task: type: Teradata2BigQuery Translation translationDetails: sourceTargetMapping: - sourceSpec: baseUri: gs://bq-translations/input targetSpec: relativePath: output targetBaseUri: gs://bq-translations targetTypes: - sql sourceEnvironment: defaultDatabase: default db schemaSearchPath: - foo The following example shows a translation configuration JSON file for a Teradata to BigQuery translation: { "tasks" : { "translation task" : { "type" : "Teradata2BigQuery Translation" , "translationDetails" : { "sourceTargetMapping" : [ { "sourceSpec" : { "literal" : { "literalString" : "sel 1" , "relativePath" : "my input 1" } , "encoding" : "UTF-8" } } , { "sourceSpec" : { "literal" : { "literalString" : "sel 2" , "relativePath" : "my input 2" } , "encoding" : "UTF-8" } } ] , "targetReturnLiterals" : [ "sql/my input 1" , "sql/my input 2" ] } } } } Once the translation configuration is created, run the following command to run the translation job. bq mk --migration workflow --location = LOCATION --config file = CONFIG FILE NAME .json Replace the following: LOCATION : the location of the Google Cloud project that is running this translation job.
- Required permissions You must have the following permissions on the project to enable the BigQuery Migration Service: resourcemanager.projects.get serviceusage.services.enable serviceusage.services.get You need the following permissions on the project to access and use the BigQuery Migration Service: bigquerymigration.workflows.create bigquerymigration.workflows.get bigquerymigration.workflows.list bigquerymigration.workflows.delete bigquerymigration.subtasks.get bigquerymigration.subtasks.list Alternatively, you can use the following roles to get the same permissions: bigquerymigration.viewer - Read only access. bigquerymigration.editor - Read/write access.

