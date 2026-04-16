---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.496Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Search index text analysis configuration"
feature_slug: "search-index-text-analysis-configuration"
latest_feature_date: "2024-03-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/information-schema-indexes"
  - "https://docs.cloud.google.com/bigquery/docs/facebook-ads-transformation"
  - "https://docs.cloud.google.com/bigquery/docs/timesfm-time-series-forecasting-tutorial"
keywords:
  - "search"
  - "index"
  - "text"
  - "analysis"
  - "configuration"
  - "bigquery"
  - "supports"
  - "options"
---

# Search index text analysis configuration

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports text analysis configuration options for CREATE SEARCH INDEX and related text analysis capabilities; BigQuery supports text analysis configuration options in CREATE SEARCH INDEX DDL.

## Extended Definition

BigQuery supports text analysis configuration options for CREATE SEARCH INDEX and related text analysis capabilities; BigQuery supports text analysis configuration options in CREATE SEARCH INDEX DDL.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/information-schema-indexes](https://docs.cloud.google.com/bigquery/docs/information-schema-indexes)
- [https://docs.cloud.google.com/bigquery/docs/facebook-ads-transformation](https://docs.cloud.google.com/bigquery/docs/facebook-ads-transformation)
- [https://docs.cloud.google.com/bigquery/docs/timesfm-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/timesfm-time-series-forecasting-tutorial)

## Supporting Pages

### Facebook Ads report transformation \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/facebook-ads-transformation](https://docs.cloud.google.com/bigquery/docs/facebook-ads-transformation)
- Source ID: `site-api-reference`
- Final score: 50
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- AdInsights report Meta API field name Mapped BigQuery field name Type Description Target String The Id of the Account to get insights for. date start DateStart Date The starting date to retrieve insights.
- Meta API field name Mapped BigQuery field name Type Description Target String The Id of the Account to get insights for. date start DateStart Date The starting date to retrieve insights for.
- Table mapping for Facebook Ads reports When your Facebook Ads reports are transferred to BigQuery, the reports are transformed into the following BigQuery tables and views.
- Facebook Ads report transformation This document describes how your Facebook Ads reports are transformed when you run a Facebook Ads transfer to BigQuery .

### "Forecast multiple time series with a TimesFM univariate model \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/timesfm-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/timesfm-time-series-forecasting-tutorial)
- Source ID: `site-docs-reference-2`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- FORECAST ( ( SELECT TIMESTAMP TRUNC ( start date , HOUR ) as trip hour , subscriber type , COUNT ( ) as num trips FROM bigquery-public-data.san francisco bikeshare.bikeshare trips WHERE start date >= TIMESTAMP ( '2018-01-01' ) GROUP BY TIMESTAMP TRUNC ( start date , HOUR ), subscriber type ), horizon => 720 , confidence level => 0.95 , timestamp col => 'trip hour' , data col => 'num trips' , id cols => [ 'subscriber type' ] ); The results look similar to the following: +---------------------+--------------------------+------------------+------------------+---------------------------------+---------------------------------+--------------------+ subscriber type forecast timestamp forecast value confidence level prediction interval lower bound prediction interval upper bound ai forecast status +---------------------+--------------------------+------------------+------------------+---------------------------------+---------------------------------+--------------------+ Subscriber 2018-05-01 00:00:00 UTC 26.3045959...
- FORECAST ( ( SELECT TIMESTAMP TRUNC ( start date , HOUR ) as trip hour , COUNT ( ) as num trips FROM bigquery-public-data.san francisco bikeshare.bikeshare trips WHERE subscriber type = 'Subscriber' AND start date >= TIMESTAMP ( '2018-01-01' ) GROUP BY TIMESTAMP TRUNC ( start date , HOUR ) ), horizon => 720 , confidence level => 0.95 , timestamp col => 'trip hour' , data col => 'num trips' ); The results look similar to the following: +-------------------------+-------------------+------------------+---------------------------------+---------------------------------+--------------------+ forecast timestamp forecast value confidence level prediction interval lower bound prediction interval upper bound ai forecast status +-------------------------+-------------------+------------------+---------------------------------+---------------------------------+--------------------+ 2018-05-01 00:00:00 UTC 26.3045959...
- FORECAST ( ( SELECT TIMESTAMP TRUNC ( start date , HOUR ) as trip hour , COUNT ( ) as num trips FROM bigquery-public-data.san francisco bikeshare.bikeshare trips WHERE subscriber type = 'Subscriber' AND start date >= TIMESTAMP ( '2018-01-01' ) GROUP BY TIMESTAMP TRUNC ( start date , HOUR ) ), horizon => 720 , confidence level => 0.95 , timestamp col => 'trip hour' , data col => 'num trips' , output historical time series => true ); When the query is finished running, click the Visualization tab in the Query results pane.
- Home Documentation Data analytics BigQuery Guides Send feedback Forecast multiple time series with a TimesFM univariate model Stay organized with collections Save and categorize content based on your preferences.

### SEARCH_INDEXES view \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/information-schema-indexes](https://docs.cloud.google.com/bigquery/docs/information-schema-indexes)
- Source ID: `site-docs-reference-3`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- 0% means the index is not usable in a SEARCH query, even if some data has already been indexed. unindexed row count INTEGER The number of rows in the base table that have not been indexed. total logical bytes INTEGER The number of billable logical bytes for the index. total storage bytes INTEGER The number of billable storage bytes for the index. analyzer STRING The text analyzer to use to generate tokens for the search index.
- Required permissions To see search index metadata, you need the bigquery.tables.get or bigquery.tables.list Identity and Access Management (IAM) permission on the table with the index.
- SEARCH INDEXES WHERE index status = 'ACTIVE' ; The results should look like the following: +-------------+-------------+--------------------------------------------------------------------------------------+---------------------+----------------+ table name index name ddl coverage percentage analyzer +-------------+-------------+--------------------------------------------------------------------------------------+---------------------+----------------+ small table names index CREATE SEARCH INDEX names index ON my project.my dataset.small table(names) 0 NO OP ANALYZER large table logs index CREATE SEARCH INDEX logs index ON my project.my dataset.large table(ALL COLUMNS) 100 LOG ANALYZER +-------------+-------------+--------------------------------------------------------------------------------------+---------------------+----------------+ Troubleshooting To enable this view, you can set the value of enable info schema storage to TRUE on your project or organization.
- The INFORMATION SCHEMA.SEARCH INDEXES view has the following schema: Column name Data type Value index catalog STRING The name of the project that contains the dataset. index schema STRING The name of the dataset that contains the index. table name STRING The name of the base table that the index is created on. index name STRING The name of the index. index status STRING The status of the index: ACTIVE , PENDING DISABLEMENT , TEMPORARILY DISABLED , or PERMANENTLY DISABLED .

