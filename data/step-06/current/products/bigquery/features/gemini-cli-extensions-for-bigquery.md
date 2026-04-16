---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.290Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Gemini CLI extensions for BigQuery"
feature_slug: "gemini-cli-extensions-for-bigquery"
latest_feature_date: "2025-09-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini"
  - "https://docs.cloud.google.com/bigquery/docs/gemini-overview"
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
keywords:
  - "gemini"
  - "cli"
  - "extensions"
  - "bigquery"
  - "integrates"
  - "enable"
  - "agentic"
  - "natural"
---

# Gemini CLI extensions for BigQuery

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery integrates with Gemini CLI extensions to enable agentic natural-language workflows from the command line.

## Extended Definition

BigQuery integrates with Gemini CLI extensions to enable agentic natural-language workflows from the command line.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini)
- [https://docs.cloud.google.com/bigquery/docs/gemini-overview](https://docs.cloud.google.com/bigquery/docs/gemini-overview)
- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)

## Supporting Pages

### "Generate text by using a Gemini model and the AI.GENERATE_TEXT function\

- URL: [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini)
- Source ID: `site-docs-reference`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- GENERATE TEXT ( MODEL bqml tutorial.gemini model , ( SELECT CONCAT ( " "" Perform sentiment analysis on the following text and return one the following categories: positive, negative: "" " , review ) AS prompt , FROM bigquery-public-data.imdb.reviews LIMIT 5 ), STRUCT ( 0.2 AS temperature , 100 AS max output tokens )); The output is similar to the following: +----------+----------+------------------------------------------------+ title result review +----------+----------+------------------------------------------------+ Quitting Positive This movie is amazing because the fact that...
- CONNECTION ID OPTIONS ( ENDPOINT = 'gemini-2.5-flash' ); Replace the following: LOCATION : the connection location CONNECTION ID : the ID of your BigQuery connection When you view the connection details in the Google Cloud console, this is the value in the last section of the fully qualified connection ID that is shown in Connection ID , for example projects/myproject/locations/connection location/connections/ myconnection The query takes several seconds to complete, after which the model gemini model appears in the bqml tutorial dataset.
- Enable the BigQuery, BigQuery Connection, and Vertex AI APIs: Roles required to enable APIs To enable APIs, you need the Service Usage Admin IAM role ( roles/serviceusage.serviceUsageAdmin ), which contains the serviceusage.services.enable permission.
- Enable the BigQuery, BigQuery Connection, and Vertex AI APIs: Roles required to enable APIs To enable APIs, you need the Service Usage Admin IAM role ( roles/serviceusage.serviceUsageAdmin ), which contains the serviceusage.services.enable permission.

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- The integration with BigQuery enables it to translate natural language into SQL queries that run against your BigQuery data, making data analysis accessible to business users without any SQL knowledge.
- Partner references BigQuery agent BigQuery Agent Example Partner Advantage page Direct link Vanna.ai Solution Vanna.ai Category BI, ML, & Advanced Analytics Description Vanni.ai is the Leading open source Python package to query large SQL databases in natural language at production scale with access control that's auditable, accurate, fast, and locally deployable so that code is transparent, results are useful and immediate, and data never leaves your premise.
- Partner references BigQuery Continuous Query Keboola Integration with BigQuery Partner Advantage page Direct link Matillion Solution Matillion ETL Category ETL & Data Integration Description Matillion is a data integration and transformation tool for cloud data warehouses that enables data journey by extracting, migrating, and transforming data in the cloud, allowing businesses to obtain new insights and make better business decisions.
- Partner references SnapLogic with BigQuery SnapLogic and Google BigQuery - Bulk loading for high-speed Google analytics Automate Data-driven Insights with SnapLogic and Google BigQuery Partner Advantage page Direct link SqlDBM Solution SqlDBM Category ETL & Data Integration Description SqlDBM is a cloud-native database design and modeling tool that enables teams to develop, document, and manage database schemas collaboratively.

### Gemini in BigQuery overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/gemini-overview](https://docs.cloud.google.com/bigquery/docs/gemini-overview)
- Source ID: `site-docs-root`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- You can use natural language with Gemini in BigQuery, to find, join, and query table assets, visualize results, and seamlessly collaborate with others throughout the entire process.
- To learn how to generate, complete, and summarize code, see the following documentation: SQL code assist Use the SQL generation tool Prompt to generate SQL queries Generate SQL queries with Gemini Cloud Assist ( Preview ) Convert comments to SQL ( Preview ) Complete a SQL query ( Preview ) Explain a SQL query Python code assist Generate Python code with the code generation tool Generate Python code with Gemini Cloud Assist ( Preview ) Python code completion Generate BigQuery DataFrames Python code ( Preview ) Prepare data for analysis .
- Enhanced features in Gemini in BigQuery are the following: SQL generation tool Prompt to generate SQL queries Convert comments to SQL Complete a SQL query Explain a SQL query Generate python code Python code completion Data canvas Data preparation Data insights Locations For information about where Gemini in BigQuery processes your data, see Where Gemini in BigQuery processes your data .
- Where to interact with Gemini in BigQuery After you set up Gemini in BigQuery , you can use Gemini in BigQuery to do the following in BigQuery Studio: To generate data insights , go to the Insights tab for a table entry, where you can identify patterns, assess quality, and run statistical analysis across your BigQuery data.

