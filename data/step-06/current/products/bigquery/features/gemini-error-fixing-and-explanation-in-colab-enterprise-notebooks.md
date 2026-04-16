---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.329Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Gemini error fixing and explanation in Colab Enterprise notebooks"
feature_slug: "gemini-error-fixing-and-explanation-in-colab-enterprise-notebooks"
latest_feature_date: "2025-06-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/colab-data-science-agent"
  - "https://docs.cloud.google.com/bigquery/docs/ai-introduction"
  - "https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini"
keywords:
  - "gemini"
  - "error"
  - "fixing"
  - "explanation"
  - "colab"
  - "enterprise"
  - "notebooks"
  - "assistance"
---

# Gemini error fixing and explanation in Colab Enterprise notebooks

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Gemini assistance in Colab Enterprise notebooks can fix errors and explain them.

## Extended Definition

Gemini assistance in Colab Enterprise notebooks can fix errors and explain them.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/colab-data-science-agent](https://docs.cloud.google.com/bigquery/docs/colab-data-science-agent)
- [https://docs.cloud.google.com/bigquery/docs/ai-introduction](https://docs.cloud.google.com/bigquery/docs/ai-introduction)
- [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini)

## Supporting Pages

### "Use the Colab Enterprise Data Science Agent with BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/colab-data-science-agent](https://docs.cloud.google.com/bigquery/docs/colab-data-science-agent)
- Source ID: `site-docs-reference-5`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- If you're new to Colab Enterprise in BigQuery, see the setup steps on the Create notebooks page.
- The Data Science Agent (DSA) for Colab Enterprise and BigQuery lets you automate exploratory data analysis, perform machine learning tasks, and deliver insights all within a Colab Enterprise notebook.
- Use the Colab Enterprise Data Science Agent with BigQuery Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Note: To opt out of using the Data Science Agent Preview without turning off other Gemini features, contact vertex-notebooks-previews-external@google.com .

### Introduction to AI in BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/ai-introduction](https://docs.cloud.google.com/bigquery/docs/ai-introduction)
- Source ID: `site-docs-reference-2`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- You can work with BigQuery ML capabilities through the Google Cloud console, the bq command-line tool, the REST API, or in Colab Enterprise notebooks .
- Create Colab Enterprise notebooks to perform ML workflows.
- You can use built-in agents or create your own agents to help you process, manage, analyze, and visualize your data: Use the Data Science Agent to automate exploratory data analysis, data processing, ML tasks, and visualization insights within a Colab Enterprise notebook.
- Assistive AI features AI-powered assistance features in BigQuery, collectively referred to as Gemini in BigQuery , help you discover, prepare, query, and visualize your data.

### "Generate text by using a Gemini model and the AI.GENERATE_TEXT function\

- URL: [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini)
- Source ID: `site-docs-reference`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- GENERATE TEXT ( MODEL bqml tutorial.gemini model , ( SELECT CONCAT ( " "" Perform sentiment analysis on the following text and return one the following categories: positive, negative: "" " , review ) AS prompt , FROM bigquery-public-data.imdb.reviews LIMIT 5 ), STRUCT ( 0.2 AS temperature , 100 AS max output tokens )); The output is similar to the following: +----------+----------+------------------------------------------------+ title result review +----------+----------+------------------------------------------------+ Quitting Positive This movie is amazing because the fact that...
- CONNECTION ID OPTIONS ( ENDPOINT = 'gemini-2.5-flash' ); Replace the following: LOCATION : the connection location CONNECTION ID : the ID of your BigQuery connection When you view the connection details in the Google Cloud console, this is the value in the last section of the fully qualified connection ID that is shown in Connection ID , for example projects/myproject/locations/connection location/connections/ myconnection The query takes several seconds to complete, after which the model gemini model appears in the bqml tutorial dataset.
- AlreadyExists : print ( f "Connection with ID ' { connection id } ' already exists." ) print ( "Please use a different connection ID." ) except Exception as e : print ( f "An unexpected error occurred while creating the connection: { e } " ) Node.js Before trying this sample, follow the Node.js setup instructions in the BigQuery quickstart using client libraries .
- ALREADY EXISTS ) { console . log ( Connection ' ${ connectionId } ' already exists. ); } else { console . error ( Error creating connection: ${ err . message } ); } } } Terraform Use the google bigquery connection resource.

