---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.937Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Connector for Excel"
feature_slug: "bigquery-connector-for-excel"
latest_feature_date: "2012-08-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
  - "https://docs.cloud.google.com/bigquery/docs/biglake-intro"
  - "https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transfer"
keywords:
  - "bigquery"
  - "connector"
  - "excel"
  - "lets"
  - "users"
  - "run"
  - "queries"
  - "microsoft"
---

# BigQuery Connector for Excel

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Connector for Excel lets users run BigQuery queries from Microsoft Excel.

## Extended Definition

BigQuery Connector for Excel lets users run BigQuery queries from Microsoft Excel.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- [https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transfer](https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transfer)

## Supporting Pages

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- Its built-in connector for BigQuery lets users directly query their data warehouse, create interactive dashboards, and share insights without needing to write complex SQL.
- Partner references Zing Data + BigQuery Configure Google BigQuery with Zing Data Partner Advantage page Direct link Connectors & Developer Tools CData Solution Google BigQuery ODBC Driver Category Connectors & Developer Tools Description The Google BigQuery ODBC Driver is a powerful tool that lets you connect with live BigQuery data directly from any applications that support ODBC connectivity.
- Partner references Import BigQuery Data into Amplitude Export data to BigQuery AskYourDatabase Solution AskYourDatabase Category BI, ML, & Advanced Analytics Description AskYourDatabase is an AI-powered tool that lets users ask questions in plain English and get instant answers from their database.
- It lets users create, explore, and share interactive dashboards directly from cloud data warehouses like Google BigQuery, leveraging live data without extracts and offering embedded analytics capabilities.

### "Introduction to BigLake external tables \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- Source ID: `site-docs-reference-5`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- For example, the following diagram demonstrates how the BigQuery Storage API lets users access authorized data using open source query engines such as Apache Spark: For more information about connectors supported by BigQuery, see BigQuery connectors .
- You can reference BigLake tables anywhere in a SELECT statement as if they were standard BigQuery tables, including in data manipulation language (DML) and data definition language (DDL) statements that use subqueries to retrieve data.
- The BigQuery Storage API enforces row- and column-level governance policies on all data access to BigLake tables, including through connectors.
- Connectors You can access data in BigLake tables based on Cloud Storage from other data processing tools by using BigQuery connectors.

### Load Campaign Manager data into BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transfer](https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transfer)
- Source ID: `site-api-reference`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- START DATE = DATE ADD(CURRENT DATE(), INTERVAL -31 DAY) END DATE = DATE ADD(CURRENT DATE(), INTERVAL -1 DAY) SELECT Campaign , Campaign ID , Date FROM ( SELECT Campaign , Campaign ID FROM dataset .match table campaigns campaign manager id WHERE DATA DATE = LATEST DATE ), ( SELECT date AS Date FROM bigquery-public-data.utility us.date greg WHERE Date BETWEEN start date AND end date ) ORDER BY Campaign ID , Date Impressions and distinct users by campaign within a date range The following SQL sample query analyzes the number of impressions and distinct users by campaign between start date and end date .
- Data transfer options Support Supported reports The Campaign Manager connector supports the transfer of data from the following reports: Data Transfer v2 (Campaign Manager DTv2) files Data Transfer v2 (Campaign Manager DTv2) match tables For information on how Campaign Manager reports are transformed into BigQuery tables and views, see Campaign Manager report transformations .
- The automatically triggered backfill runs will either overwrite or incrementally update your BigQuery destination table, depending on whether or not incremental updates are supported in the BigQuery Data Transfer Service connector.
- Load Campaign Manager data into BigQuery You can load data from Campaign Manager to BigQuery using the BigQuery Data Transfer Service for Campaign Manager connector.

