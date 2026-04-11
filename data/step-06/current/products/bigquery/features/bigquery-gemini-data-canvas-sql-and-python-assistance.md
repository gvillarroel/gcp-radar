---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.490Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Gemini Data Canvas SQL and Python assistance"
feature_slug: "bigquery-gemini-data-canvas-sql-and-python-assistance"
latest_feature_date: "2024-08-28"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/gemini-overview"
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "Python assistant"
  - "SQL assistant"
  - "Data Canvas Python"
  - "Gemini Data Canvas"
  - "Data Canvas SQL"
  - "Canvas Python"
  - "Data Canvas"
  - "Canvas SQL"
---

# BigQuery Gemini Data Canvas SQL and Python assistance

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery Gemini now offers Data Canvas assistance for SQL and Python workflows.

## Extended Definition

BigQuery Gemini includes a data-canvas assistant that can perform SQL and Python assistance within BigQuery analytics workflows, including SQL query generation, SQL completion, SQL explanation, Python code generation, and Python code completion. It is presented as an agent-like tool in BigQuery data canvas that can help construct or modify a data canvas from natural-language prompting to discover, transform, query, and visualize data.

## Evidence Summary

The Gemini overview defines the feature set (SQL/Python tooling and data canvas capabilities), while the BigQuery release notes confirm the availability of a Gemini-powered assistant in data canvas.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/gemini-overview](https://docs.cloud.google.com/bigquery/docs/gemini-overview)
- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### Gemini in BigQuery overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/gemini-overview](https://docs.cloud.google.com/bigquery/docs/gemini-overview)
- Source ID: `site-docs-root`
- Final score: 36
- Re-rank relevance: MODERATE
- Re-rank rationale: It combines Data Canvas workflows with assisted SQL/Python analysis, but does not explicitly say the assistance is only or specifically tied to Data Canvas in all cases.

Evidence snippets:
- Enhanced features in Gemini in BigQuery are the following: SQL generation tool Prompt to generate SQL queries Convert comments to SQL Complete a SQL query Explain a SQL query Generate python code Python code completion Data canvas Data preparation Data insights Locations For information about where Gemini in BigQuery processes your data, see Where Gemini in BigQuery processes your data .
- To use data canvas, create a data canvas or use data canvas from a table or query to explore data assets with natural language and share your canvases.
- Discover, transform, query, and visualize data with BigQuery data canvas .
- For more information, see Analyze with data canvas .

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- November 17, 2025 Feature You can use folders to organize and control access to single file code assets, such as notebooks, saved queries, data canvases, and data preparation files.
- The data canvas assistant is an agent-like tool, capable of constructing and modifying a data canvas to answer data analytics questions from user prompting.
- Feature You can now add comments to notebooks , data canvases , data preparation files , or saved queries .
- April 24, 2025 Feature You can now work with a Gemini powered assistant in a BigQuery data canvas.

