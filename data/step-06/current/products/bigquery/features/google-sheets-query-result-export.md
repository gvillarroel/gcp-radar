---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.916Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Google Sheets query result export"
feature_slug: "google-sheets-query-result-export"
latest_feature_date: "2016-05-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
  - "https://docs.cloud.google.com/bigquery/docs/connected-sheets"
  - "https://docs.cloud.google.com/bigquery/docs/exporting-data"
keywords:
  - "sheets"
  - "query"
  - "result"
  - "export"
  - "lets"
  - "bigquery"
  - "save"
  - "results"
---

# Google Sheets query result export

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Google Sheets query result export lets BigQuery save query results directly to Google Sheets.

## Extended Definition

Google Sheets query result export lets BigQuery save query results directly to Google Sheets.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- [https://docs.cloud.google.com/bigquery/docs/connected-sheets](https://docs.cloud.google.com/bigquery/docs/connected-sheets)
- [https://docs.cloud.google.com/bigquery/docs/exporting-data](https://docs.cloud.google.com/bigquery/docs/exporting-data)

## Supporting Pages

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 226
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Partner references BigQuery Integration Query Results Save Detection Google Cloud Monitoring Partner Advantage page Direct link Datafold Solution Datafold Category Data Quality, Observability, & FinOps Description Datafold is the unified platform for proactive data quality that combines automated data testing, data reconciliation, and observability to help data teams prevent data quality issues and accelerate their development velocity.
- Partner references BigQuery agent BigQuery Agent Example Partner Advantage page Direct link Vanna.ai Solution Vanna.ai Category BI, ML, & Advanced Analytics Description Vanni.ai is the Leading open source Python package to query large SQL databases in natural language at production scale with access control that's auditable, accurate, fast, and locally deployable so that code is transparent, results are useful and immediate, and data never leaves your premise.
- Partner references Configuring BigQuery Data Transformation in BigQuery Partner Advantage page Direct link Databricks Solution Databricks Lakehouse Category BI, ML, & Advanced Analytics Description Databricks SQL provides an easy-to-use platform for analysts who want to run SQL queries on their data lake, create multiple visualization types to explore query results from different perspectives, and build and share dashboards.
- Partner references SSIS BigQuery Export Data from SQL Server to BigQuery through SSIS Partner Advantage page Direct link Census Solution Census Reverse ETL Category ETL & Data Integration Description Census is a reverse ETL tool and operational analytics platform that lets you sync your trusted analytics data from your hub into operational tools that your business teams use on a daily basis.

### Using Connected Sheets \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/connected-sheets](https://docs.cloud.google.com/bigquery/docs/connected-sheets)
- Source ID: `site-docs-reference-5`
- Final score: 220
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To open a saved query in Connected Sheets, follow these steps: In the Google Cloud console, go to the BigQuery page.
- Optional: To refresh the query results in Connected Sheets, click refresh Refresh .
- An egress rule to allow query results to be copied to users' spreadsheets.
- The result looks similar to the following: +---------------------+---------------+--------------------+-----------------+ user email total queries total bytes billed total slot ms +---------------------+---------------+--------------------+-----------------+ alice@example.com 152 12000000000 3500000 bob@example.com 45 8500000000 2100000 charles@example.com 210 1100000000 1800000 +---------------------+---------------+--------------------+-----------------+ Find job logs of Connected Sheets queries at the project-level If you don't have organization-level permissions or only need to monitor a specific project, run the following query to see a detailed log of all Connected Sheets queries for the current project: SELECT job id , creation time , user email , total bytes billed , total slot ms , query FROM -- This view queries the project you are currently running the query in. region- REGION NAME .INFORMATION SCHEMA.JOBS BY PROJECT WHERE creation time > = TIMESTAMP SUB ( CURRENT TIMESTAMP (), INTERVAL 30 DAY ) AND job id LIKE 'sheets dataconnector%' AND state = 'DONE' AND ( statement type IS NULL OR statement type <> 'SCRIPT' ) ORDER BY creation time DESC ; Replace REGION NAME with the region for your project.

### Export table data to Cloud Storage \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/exporting-data](https://docs.cloud.google.com/bigquery/docs/exporting-data)
- Source ID: `site-docs-root`
- Final score: 212
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Export query results You can export your query results to Cloud Storage in the Google Cloud console with the following steps: Open the BigQuery page in the Google Cloud console.
- For better decoupling of BigQuery export and report generation, results should be persisted to disk.
- Click Save to export the query results.
- DatasetReference ( project , dataset id ) table ref = dataset ref . table ( table id ) extract job = client . extract table ( table ref , destination uri , Location must match that of the source table. location = "US" , ) # API request extract job . result () # Waits for job to complete. print ( "Exported {} : {} . {} to {} " . format ( project , dataset id , table id , destination uri ) ) Ruby Before trying this sample, follow the Ruby setup instructions in the BigQuery quickstart using client libraries .

