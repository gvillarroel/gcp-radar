---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.284Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Gemini Cloud Assist SQL apply to editor"
feature_slug: "gemini-cloud-assist-sql-apply-to-editor"
latest_feature_date: "2025-10-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/gemini-overview"
  - "https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini"
  - "https://docs.cloud.google.com/bigquery/docs/batch-sql-translator"
keywords:
  - "gemini"
  - "assist"
  - "sql"
  - "apply"
  - "editor"
  - "bigquery"
  - "can"
  - "generated"
---

# Gemini Cloud Assist SQL apply to editor

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery can apply SQL generated in Gemini Cloud Assist chat to the query open in the editor.

## Extended Definition

BigQuery can apply SQL generated in Gemini Cloud Assist chat to the query open in the editor.

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
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- To learn how to generate, complete, and summarize code, see the following documentation: SQL code assist Use the SQL generation tool Prompt to generate SQL queries Generate SQL queries with Gemini Cloud Assist ( Preview ) Convert comments to SQL ( Preview ) Complete a SQL query ( Preview ) Explain a SQL query Python code assist Generate Python code with the code generation tool Generate Python code with Gemini Cloud Assist ( Preview ) Python code completion Generate BigQuery DataFrames Python code ( Preview ) Prepare data for analysis .
- Gemini in BigQuery overview This document describes how Gemini in BigQuery, which is part of the Gemini for Google Cloud product suite, provides AI-powered assistance to help you work with your data.
- AI assistance with Gemini in BigQuery Gemini in BigQuery provides AI assistance to help you do the following: Explore and understand your data with data insights .
- Quotas and limits For quotas and limits that apply to Gemini in BigQuery, see Gemini for Google Cloud quotas and limits .

### "Generate text by using a Gemini model and the AI.GENERATE_TEXT function\

- URL: [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini)
- Source ID: `site-docs-reference`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- Go to BigQuery In the query editor, run the following statement: CREATE OR REPLACE MODEL bqml tutorial.gemini model REMOTE WITH CONNECTION LOCATION .
- GENERATE TEXT ( MODEL bqml tutorial.gemini model , ( SELECT CONCAT ( " "" Perform sentiment analysis on the following text and return one the following categories: positive, negative: "" " , review ) AS prompt , FROM bigquery-public-data.imdb.reviews LIMIT 5 ), STRUCT ( 0.2 AS temperature , 100 AS max output tokens )); The output is similar to the following: +----------+----------+------------------------------------------------+ title result review +----------+----------+------------------------------------------------+ Quitting Positive This movie is amazing because the fact that...
- CONNECTION ID OPTIONS ( ENDPOINT = 'gemini-2.5-flash' ); Replace the following: LOCATION : the connection location CONNECTION ID : the ID of your BigQuery connection When you view the connection details in the Google Cloud console, this is the value in the last section of the fully qualified connection ID that is shown in Connection ID , for example projects/myproject/locations/connection location/connections/ myconnection The query takes several seconds to complete, after which the model gemini model appears in the bqml tutorial dataset.
- Note: The cloud resource nested object has only one output field - serviceAccountId. resource "google bigquery connection" "default" { connection id = "my cloud resource connection" project = data.google project.default.project id location = "US" cloud resource {} } To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.

### "Migrate code with the batch SQL translator \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/batch-sql-translator](https://docs.cloud.google.com/bigquery/docs/batch-sql-translator)
- Source ID: `site-docs-reference-5`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- Required permissions You must have the following permissions on the project to enable the BigQuery Migration Service: resourcemanager.projects.get serviceusage.services.enable serviceusage.services.get You need the following permissions on the project to access and use the BigQuery Migration Service: bigquerymigration.workflows.create bigquerymigration.workflows.get bigquerymigration.workflows.list bigquerymigration.workflows.delete bigquerymigration.subtasks.get bigquerymigration.subtasks.list Alternatively, you can use the following roles to get the same permissions: bigquerymigration.viewer - Read only access. bigquerymigration.editor - Read/write access.
- Select one of the following options: Apply or Apply and rerun : Click Apply to copy the generated schema file from the output directory to the input directory.
- Click Apply and rerun to copy the generated schema file from the output directory to the input directory and opens a rerun window.
- Quota and limits BigQuery Migration API quotas apply.

