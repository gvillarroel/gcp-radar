---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.491Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Gemini Data insights"
feature_slug: "bigquery-gemini-data-insights"
latest_feature_date: "2024-08-28"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/gemini-overview"
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "automated insights"
  - "insight generation"
  - "AI-generated insights"
  - "BigQuery Gemini insights"
  - "Gemini Data Insights"
  - "Gemini insights"
  - "Data insights"
---

# BigQuery Gemini Data insights

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery Gemini features now include Data insights capabilities.

## Extended Definition

BigQuery Gemini Data insights is an AI-assisted BigQuery feature that uses metadata from tables to automatically generate insightful queries and uncover patterns, assess data quality, and perform statistical analysis through an automated process. It also supports AI-generated recommendations, including generating table and column descriptions from table metadata (in supported Gemini languages) and producing query recommendations that can be published to Dataplex Universal Catalog.

## Evidence Summary

The Gemini overview page defines Data insights as AI-generated, automated pattern and quality/statistical analysis within BigQuery, while the release notes add that insights can generate metadata-derived table/column descriptions and query recommendations.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/gemini-overview](https://docs.cloud.google.com/bigquery/docs/gemini-overview)
- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### Gemini in BigQuery overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/gemini-overview](https://docs.cloud.google.com/bigquery/docs/gemini-overview)
- Source ID: `site-docs-root`
- Final score: 46
- Re-rank relevance: STRONG
- Re-rank rationale: The page directly introduces Data Insights as a core Gemini in BigQuery capability and explains its purpose and behavior.

Evidence snippets:
- Enhanced features in Gemini in BigQuery are the following: SQL generation tool Prompt to generate SQL queries Convert comments to SQL Complete a SQL query Explain a SQL query Generate python code Python code completion Data canvas Data preparation Data insights Locations For information about where Gemini in BigQuery processes your data, see Where Gemini in BigQuery processes your data .
- Where to interact with Gemini in BigQuery After you set up Gemini in BigQuery , you can use Gemini in BigQuery to do the following in BigQuery Studio: To generate data insights , go to the Insights tab for a table entry, where you can identify patterns, assess quality, and run statistical analysis across your BigQuery data.
- Data insights offers an automated, intuitive way to uncover patterns and perform statistical analysis by using insightful queries that are generated from the metadata of your tables.
- AI assistance with Gemini in BigQuery Gemini in BigQuery provides AI assistance to help you do the following: Explore and understand your data with data insights .

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- Feature You can now publish data insights , including query recommendations and auto-generated table and column descriptions, to the Dataplex Universal Catalog.
- Feature You can now generate table and column descriptions in all supported Gemini languages when you generate data insights.
- Feature You can now use data insights to have Gemini generate table and column descriptions from table metadata .
- Feature You can now use data insights to have Gemini generate table and column descriptions from table metadata .

