---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.736Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery batch and interactive translation"
feature_slug: "bigquery-batch-and-interactive-translation"
latest_feature_date: "2022-06-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
  - "https://docs.cloud.google.com/bigquery/docs/migration-intro"
keywords:
  - "major SQL dialects"
  - "dialect conversion"
  - "interactive translation"
  - "translation service GA"
  - "batch translation"
  - "query translation"
  - "SQL translation"
---

# BigQuery batch and interactive translation

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery batch and interactive SQL translation services are generally available and support most major SQL dialects.

## Extended Definition

BigQuery provides SQL translation services through an interactive SQL translator, a batch SQL translator, and a SQL translation API (also available via the BigQuery Migration Service MCP server), which automate conversion of SQL workloads to GoogleSQL. The service is used to translate queries (and also assist with DDL/DML handling and schema-mapping/migration workflows) from other dialects, with Apache Impala SQL explicitly called out among supported dialect inputs. The migration docs describe these translation services as covering a variety of SQL dialects, though the exact full dialect list is not fully enumerated in the provided snippets.

## Evidence Summary

These official BigQuery docs confirm the existence of interactive, batch, and API/MCP SQL translation paths to GoogleSQL, including Impala and multiple-dialect migration support.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- [https://docs.cloud.google.com/bigquery/docs/migration-intro](https://docs.cloud.google.com/bigquery/docs/migration-intro)

## Supporting Pages

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- Feature You can now use the interactive SQL translator , the translation API , and the batch SQL translator to translate the following SQL dialects into GoogleSQL: Apache Impala SQL GoogleSQL (BigQuery) Impala SQL translation can be used to migrate Cloudera and Apache Hadoop SQL workloads that use Impala as a query engine.
- Feature You can now use the BigQuery Migration Service MCP server to perform SQL translation tasks, including translating SQL queries into GoogleSQL syntax, generating DDL statements from SQL input queries, and getting explanations of SQL translations.
- Feature BigQuery now offers the following Gemini-enhanced SQL translation features: Create Gemini-based configuration YAML files to generate AI suggestions for batch or interactive SQL translations.
- Feature When you migrate Teradata data to BigQuery using the BigQuery Data Transfer Service, you can now specify the outputs of the BigQuery translation engine to use as schema mapping .

### Introduction to BigQuery Migration Service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/migration-intro](https://docs.cloud.google.com/bigquery/docs/migration-intro)
- Source ID: `site-docs-root`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- It includes features that help you with each phase of migration, including assessment and planning, SQL translation for a variety of SQL dialects , data transfer, and data validation.
- The tool uses the BigQuery Data Transfer Service, the BigQuery translation services, and the data validation tool to transfer data, translate and validate DDL, DML, and SQL queries.
- SQL translation services : The translation services automate the conversion of your SQL queries into GoogleSQL, including Gemini-enhanced SQL customization.
- You can also use the SQL translation API to migrate your workloads to BigQuery.

