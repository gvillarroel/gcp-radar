---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.304Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Data Science Agent DataFrames prompt references"
feature_slug: "data-science-agent-dataframes-prompt-references"
latest_feature_date: "2025-09-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/colab-data-science-agent"
  - "https://docs.cloud.google.com/bigquery/docs/ai-introduction"
  - "https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial"
keywords:
  - "science"
  - "agent"
  - "dataframes"
  - "prompt"
  - "references"
  - "bigquery"
  - "notebooks"
  - "can"
---

# Data Science Agent DataFrames prompt references

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The Data Science Agent in BigQuery notebooks can reference DataFrames in prompts.

## Extended Definition

The Data Science Agent in BigQuery notebooks can reference DataFrames in prompts.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/colab-data-science-agent](https://docs.cloud.google.com/bigquery/docs/colab-data-science-agent)
- [https://docs.cloud.google.com/bigquery/docs/ai-introduction](https://docs.cloud.google.com/bigquery/docs/ai-introduction)
- [https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial](https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial)

## Supporting Pages

### "Use the Colab Enterprise Data Science Agent with BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/colab-data-science-agent](https://docs.cloud.google.com/bigquery/docs/colab-data-science-agent)
- Source ID: `site-docs-reference-5`
- Final score: 208
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: To provide feedback, to ask questions, or to request to opt out of this Preview feature, contact vertex-notebooks-previews-external@google.com or fill out the Data Science Agent Public Preview Opt-out form .
- The Data Science Agent (DSA) for Colab Enterprise and BigQuery lets you automate exploratory data analysis, perform machine learning tasks, and deliver insights all within a Colab Enterprise notebook.
- Use the Colab Enterprise Data Science Agent with BigQuery Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- The Data Science Agent supports the following data sources: CSV files BigQuery tables The code produced by the Data Science Agent only runs in your notebook's runtime.

### Introduction to AI in BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/ai-introduction](https://docs.cloud.google.com/bigquery/docs/ai-introduction)
- Source ID: `site-docs-reference-2`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- You can use built-in agents or create your own agents to help you process, manage, analyze, and visualize your data: Use the Data Science Agent to automate exploratory data analysis, data processing, ML tasks, and visualization insights within a Colab Enterprise notebook.
- You can work with BigQuery ML capabilities through the Google Cloud console, the bq command-line tool, the REST API, or in Colab Enterprise notebooks .
- Home Documentation Data analytics BigQuery Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Use the Data Engineering Agent to build, modify, and manage data pipelines to load and process data in BigQuery.

### "Analyze multimodal data with SQL and BigQuery DataFrames \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial](https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial)
- Source ID: `site-docs-reference-2`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up ADC for a local development environment . df prompt = bbq . obj . get access url ( df products mm [ "image" ], "R" ) . to frame () df prompt [ "prompt0" ] = "For the image of a pet product, concisely generate the following metadata: 1) animal type and 2) 5 SEO search keywords, and 3) product subcategory." df products mm [ "prompt" ] = bbq . struct ( df prompt [[ "prompt0" , "image" ]]) df products mm = df products mm . drop ( columns = [ "animal type" , "search keywords" , "subcategory" ] ) df products mm = bbq . ai . generate table ( gemini model , df products mm , output schema = "animal type STRING, search keywords ARRAY<STRING>, subcategory STRING" , ) Run the following to view the generated data: SQL SELECT product name , image description , animal type , search keywords , subcategory , FROM cymbal pets . products mm ; BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .
- GET ACCESS URL ( image , 'r' ), description ) AS prompt , image . uri AS uri , FROM cymbal pets . products mm ), STRUCT ( 'animal type STRING, search keywords ARRAY<STRING>, subcategory STRING' AS output schema , 100 AS max output tokens )) ) s WHERE p . image . uri = s . uri ; BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .
- GET ACCESS URL ( image , 'r' )), ' ' , ARRAY AGG ( description ), ' ' , ARRAY AGG ( category ), ' ' , ARRAY AGG ( subcategory )) AS prompt FROM cymbal pets . products mm GROUP BY brand ), STRUCT ( 'brand description STRING' AS output schema )) ORDER BY cnt DESC ; BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .
- The pages are provided in serial order' , ObjectRefRuntimeArray ) AS prompt , FROM ordered output objrefruntime array ), STRUCT ( 'page1 summary STRING, page2 summary STRING, page3 summary STRING' AS output schema )); BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .

