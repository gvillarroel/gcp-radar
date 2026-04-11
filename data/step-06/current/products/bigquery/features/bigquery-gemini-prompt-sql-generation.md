---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.492Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Gemini Prompt SQL generation"
feature_slug: "bigquery-gemini-prompt-sql-generation"
latest_feature_date: "2024-08-28"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/gemini-overview"
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "Gemini prompt tool"
  - "Gemini Prompt"
  - "SQL generation tool"
  - "Prompt SQL"
  - "SQL prompt"
  - "SQL generation"
  - "Prompt"
  - "generate SQL"
---

# BigQuery Gemini Prompt SQL generation

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery Gemini provides the Prompt tool to generate SQL queries.

## Extended Definition

BigQuery Gemini’s Prompt feature is the SQL generation tool in Gemini in BigQuery that lets users generate SQL queries from natural language prompts. It can be used through prompt text or in-code comments, and users can further describe desired edits to generated SQL (including pattern-based find-and-replace guidance) using natural language.

## Evidence Summary

The Gemini in BigQuery overview defines Prompt as the SQL generation tool for natural-language-to-SQL workflows, and the release notes note prompt-related feature enhancements in that tool.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/gemini-overview](https://docs.cloud.google.com/bigquery/docs/gemini-overview)
- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### Gemini in BigQuery overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/gemini-overview](https://docs.cloud.google.com/bigquery/docs/gemini-overview)
- Source ID: `site-docs-root`
- Final score: 82
- Re-rank relevance: STRONG
- Re-rank rationale: The page explicitly describes the Prompt-based SQL generation workflow in Gemini in BigQuery and links to SQL query generation tools.

Evidence snippets:
- To learn how to generate, complete, and summarize code, see the following documentation: SQL code assist Use the SQL generation tool Prompt to generate SQL queries Generate SQL queries with Gemini Cloud Assist ( Preview ) Convert comments to SQL ( Preview ) Complete a SQL query ( Preview ) Explain a SQL query Python code assist Generate Python code with the code generation tool Generate Python code with Gemini Cloud Assist ( Preview ) Python code completion Generate BigQuery DataFrames Python code ( Preview ) Prepare data for analysis .
- Enhanced features in Gemini in BigQuery are the following: SQL generation tool Prompt to generate SQL queries Convert comments to SQL Complete a SQL query Explain a SQL query Generate python code Python code completion Data canvas Data preparation Data insights Locations For information about where Gemini in BigQuery processes your data, see Where Gemini in BigQuery processes your data .
- To use natural language to generate SQL queries or Python code , use comments in code or the SQL generation tool .
- You can describe changes to the SQL translation output using natural language prompts or specify SQL patterns to find and replace.

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- September 11, 2025 Feature Gemini now recommends natural language prompts for you in the SQL generation tool .
- This plugin captures comprehensive logs of your agent's prompts, tool usage, and responses, enabling you to analyze and visualize agent performance metrics.
- The data canvas assistant is an agent-like tool, capable of constructing and modifying a data canvas to answer data analytics questions from user prompting.
- Feature You can now reference BigQuery ML and DataFrames in your prompts when you use the Data Science Agent in a BigQuery notebook.

### "Generate text by using a Gemma open model and the AI.GENERATE_TEXT function\

- URL: [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemma](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemma)
- Source ID: `site-docs-root-2`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- 2 AS temperature , 100 AS max output tokens )); The output is similar to the following, with non-generated columns omitted for clarity: +----------------------------------------------+-------------------------+-----------------------------+-----+ result status prompt ... +----------------------------------------------+-------------------------+-----------------------------+-----+ Here are some key words from the Extract the key words from movie review: Romance: the movie review below: "romantic tryst," "elope" Comedy: Linda Arvidson (as Jennie) "Contrived Comedy" Burglary: and Harry Solter (as Frank) "burglar," "rob," "booty" Chase: are enjoying a romantic "chases," "escape" Director: "D.W. tryst, when in walks her...
- 2 AS temperature , 128 AS max output tokens )); The output is similar to the following, with non-generated columns omitted for clarity: +-----------------------------+-------------------------+-----------------------------+-----+ result status prompt ... +-----------------------------+-------------------------+-----------------------------+-----+ NEGATIVE Analyze the sentiment of movie review and classify it as either POSITIVE or NEGATIVE.
- GENERATE TEXT ( MODEL bqml tutorial . gemma model , ( SELECT 'Analyze the sentiment of the following movie review and classify it as either POSITIVE or NEGATIVE. \nMovie Review: ' review AS prompt , FROM bigquery - public - data . imdb . reviews LIMIT 10 ), STRUCT ( 0 .
- GENERATE TEXT ( MODEL bqml tutorial . gemma model , ( SELECT 'Extract the key words from the movie review below: ' review AS prompt , FROM bigquery - public - data . imdb . reviews LIMIT 10 ), STRUCT ( 0 .

