---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.307Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Data insights generated descriptions"
feature_slug: "data-insights-generated-descriptions"
latest_feature_date: "2025-08-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/gemini-overview"
  - "https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini"
  - "https://docs.cloud.google.com/bigquery/docs/colab-data-science-agent"
keywords:
  - "insights"
  - "generated"
  - "descriptions"
  - "bigquery"
  - "can"
  - "use"
  - "gemini"
  - "generate"
---

# Data insights generated descriptions

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery data insights can use Gemini to generate table and column descriptions from table metadata.

## Extended Definition

BigQuery data insights can use Gemini to generate table and column descriptions from table metadata.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/gemini-overview](https://docs.cloud.google.com/bigquery/docs/gemini-overview)
- [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini)
- [https://docs.cloud.google.com/bigquery/docs/colab-data-science-agent](https://docs.cloud.google.com/bigquery/docs/colab-data-science-agent)

## Supporting Pages

### Gemini in BigQuery overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/gemini-overview](https://docs.cloud.google.com/bigquery/docs/gemini-overview)
- Source ID: `site-docs-root`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- Enhanced features in Gemini in BigQuery are the following: SQL generation tool Prompt to generate SQL queries Convert comments to SQL Complete a SQL query Explain a SQL query Generate python code Python code completion Data canvas Data preparation Data insights Locations For information about where Gemini in BigQuery processes your data, see Where Gemini in BigQuery processes your data .
- Where to interact with Gemini in BigQuery After you set up Gemini in BigQuery , you can use Gemini in BigQuery to do the following in BigQuery Studio: To generate data insights , go to the Insights tab for a table entry, where you can identify patterns, assess quality, and run statistical analysis across your BigQuery data.
- To learn how to generate, complete, and summarize code, see the following documentation: SQL code assist Use the SQL generation tool Prompt to generate SQL queries Generate SQL queries with Gemini Cloud Assist ( Preview ) Convert comments to SQL ( Preview ) Complete a SQL query ( Preview ) Explain a SQL query Python code assist Generate Python code with the code generation tool Generate Python code with Gemini Cloud Assist ( Preview ) Python code completion Generate BigQuery DataFrames Python code ( Preview ) Prepare data for analysis .
- Data insights offers an automated, intuitive way to uncover patterns and perform statistical analysis by using insightful queries that are generated from the metadata of your tables.

### "Generate text by using a Gemini model and the AI.GENERATE_TEXT function\

- URL: [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini)
- Source ID: `site-docs-reference`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- GENERATE TEXT ( MODEL bqml tutorial.gemini model , ( SELECT CONCAT ( " "" Perform sentiment analysis on the following text and return one the following categories: positive, negative: "" " , review ) AS prompt , FROM bigquery-public-data.imdb.reviews LIMIT 5 ), STRUCT ( 0.2 AS temperature , 100 AS max output tokens )); The output is similar to the following: +----------+----------+------------------------------------------------+ title result review +----------+----------+------------------------------------------------+ Quitting Positive This movie is amazing because the fact that...
- Home Documentation Data analytics BigQuery Guides Send feedback Generate text by using a Gemini model and the AI.GENERATE TEXT function Stay organized with collections Save and categorize content based on your preferences.
- CONNECTION ID OPTIONS ( ENDPOINT = 'gemini-2.5-flash' ); Replace the following: LOCATION : the connection location CONNECTION ID : the ID of your BigQuery connection When you view the connection details in the Google Cloud console, this is the value in the last section of the fully qualified connection ID that is shown in Connection ID , for example projects/myproject/locations/connection location/connections/ myconnection The query takes several seconds to complete, after which the model gemini model appears in the bqml tutorial dataset.
- Generic Cinematography and boring, there's really nothing... ... ... ... +--------------+------------------+----------------------------------------+ Perform sentiment analysis Perform sentiment analysis on IMDB movie reviews by using the remote model and the AI.GENERATE TEXT function: In the Google Cloud console, go to the BigQuery page.

### "Use the Colab Enterprise Data Science Agent with BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/colab-data-science-agent](https://docs.cloud.google.com/bigquery/docs/colab-data-science-agent)
- Source ID: `site-docs-reference-5`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- Python prompts Python code is generated by default unless you use a specific keyword in the prompt such as "BigQuery ML" or "SQL".
- For example: "Help me perform exploratory data analysis and get insights about the data in this table: project id : dataset . table ." Replace the following: project id : your project ID dataset : the name of the dataset that contains the table you're analyzing table : the name of the table you're analyzing Type @ to search for a BigQuery table in your current project.
- The Data Science Agent (DSA) for Colab Enterprise and BigQuery lets you automate exploratory data analysis, perform machine learning tasks, and deliver insights all within a Colab Enterprise notebook.
- Generating a plan : Generate and modify a plan to complete a particular task using common tools such as Python, SQL, Managed Service for Apache Spark, and BigQuery DataFrames.

