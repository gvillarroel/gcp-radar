---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.338Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Studio configuration settings"
feature_slug: "bigquery-studio-configuration-settings"
latest_feature_date: "2025-06-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
  - "https://docs.cloud.google.com/bigquery/docs/admin-resource-charts"
  - "https://docs.cloud.google.com/bigquery/docs/batch-sql-translator"
keywords:
  - "bigquery"
  - "studio"
  - "configuration"
  - "settings"
  - "let"
  - "administrators"
  - "customize"
  - "experience"
---

# BigQuery Studio configuration settings

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Configuration settings let administrators customize the BigQuery Studio experience by showing or hiding user interface elements for a project or organization.

## Extended Definition

Configuration settings let administrators customize the BigQuery Studio experience by showing or hiding user interface elements for a project or organization.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)
- [https://docs.cloud.google.com/bigquery/docs/batch-sql-translator](https://docs.cloud.google.com/bigquery/docs/batch-sql-translator)

## Supporting Pages

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- Partner references BigQuery configurations Setting up DBT Partner Advantage page Direct link Dell Boomi Solution Boomi Category ETL & Data Integration Description Experience the power of connectedness with a single platform that integrates applications, APIs, data, and AI agents.
- Partner references BigQuery Export Integration BigQuery Import Integration BigQuery Version 2 Export Partner Advantage page Direct link Union.ai Solution Union AI orchestrator Category BI, ML, & Advanced Analytics Description The Union platform empowers AI development teams to rapidly ship high-quality code to production by offering optimized performance, unparalleled resource efficiency, and a delightful workflow authoring experience.
- Partner references Magnitude Simba Google BigQuery JDBC Data Connector: Installation and Configuration Guide Drivers for Google BigQuery Partner Advantage page Direct link Simba ODBC Driver Solution Simba ODBC Driver Category Connectors & Developer Tools Description Google has collaborated with Magnitude Simba to provide ODBC and JDBC drivers that leverage the power of BigQuery's GoogleSQL.
- Partner references Automic BigQuery Agent Automic Automation Cloud Integrations: BigQuery Agent Integration Partner Advantage page Direct link CaliberMind Solution CaliberMind Category ETL & Data Integration Description CaliberMind is a centralized database and workflow engine for your enterprise business, allowing savvy marketers to unlock revenue and better customer experiences.

### "Monitor health, resource utilization, and jobs \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)
- Source ID: `site-docs-reference-2`
- Final score: 93
- Re-rank relevance: N/A

Evidence snippets:
- Each metric has the following default settings, which you can edit in the Chart configuration pane by clicking the metric's name: The default usage data is from the reservation resource and the capacity data is from the edition resource.
- Each metric has the following default settings, which you can edit in the Chart configuration pane by clicking the metric's name: The default usage data is from the reservation resources.
- Each metric has the following default settings, which you can edit in the Chart configuration pane by clicking the metric's name: The default resource is the reservation resource.
- Each metric has the following default settings, which you can edit in the Chart configuration pane by clicking the metric's name: The default resource is the job resource.

### "Migrate code with the batch SQL translator \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/batch-sql-translator](https://docs.cloud.google.com/bigquery/docs/batch-sql-translator)
- Source ID: `site-docs-reference-5`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- The following example shows a translation configuration YAML file for a Teradata to BigQuery translation: tasks: translation task: type: Teradata2BigQuery Translation translationDetails: sourceTargetMapping: - sourceSpec: baseUri: gs://bq-translations/input targetSpec: relativePath: output targetBaseUri: gs://bq-translations targetTypes: - sql sourceEnvironment: defaultDatabase: default db schemaSearchPath: - foo The following example shows a translation configuration JSON file for a Teradata to BigQuery translation: { "tasks" : { "translation task" : { "type" : "Teradata2BigQuery Translation" , "translationDetails" : { "sourceTargetMapping" : [ { "sourceSpec" : { "literal" : { "literalString" : "sel 1" , "relativePath" : "my input 1" } , "encoding" : "UTF-8" } } , { "sourceSpec" : { "literal" : { "literalString" : "sel 2" , "relativePath" : "my input 2" } , "encoding" : "UTF-8" } } ] , "targetReturnLiterals" : [ "sql/my input 1" , "sql/my input 2" ] } } } } Once the translation configuration is created, run the following command to run the translation job. bq mk --migration workflow --location = LOCATION --config file = CONFIG FILE NAME .json Replace the following: LOCATION : the location of the Google Cloud project that is running this translation job.
- Decide how to submit the translation job You have three options for submitting a batch translation job: Batch translation client : Configure a job by changing settings in a configuration file, and submit the job using the command line.
- After you complete a batch translation job, BigQuery generates a translation configuration ID that contains information about the job's metadata, the object mapping, or the schema search path, as applicable to the query.
- If you want to use the Google Cloud console or the BigQuery Migration API for a batch translation job, you can upload the configuration YAML file to the Cloud Storage bucket containing the source files .

