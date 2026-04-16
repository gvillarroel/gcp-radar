---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.747Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "JSON array extraction functions"
feature_slug: "json-array-extraction-functions"
latest_feature_date: "2021-03-31"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods"
  - "https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transformation"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-load-data-from-bigquery-job"
keywords:
  - "json"
  - "array"
  - "extraction"
  - "functions"
  - "bigquery"
  - "supports"
  - "extract"
  - "string"
---

# JSON array extraction functions

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports JSON_EXTRACT_STRING_ARRAY, JSON_QUERY_ARRAY, and JSON_VALUE_ARRAY for extracting arrays from JSON values.

## Extended Definition

BigQuery supports JSON_EXTRACT_STRING_ARRAY, JSON_QUERY_ARRAY, and JSON_VALUE_ARRAY for extracting arrays from JSON values.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods)
- [https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transformation](https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transformation)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-load-data-from-bigquery-job](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-load-data-from-bigquery-job)

## Supporting Pages

### "Run queries using the BigQuery DataFrames bigframes.pandas APIs \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods)
- Source ID: `site-docs-reference-required-15`
- Final score: 76
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for client libraries . import bigframes.pandas as bpd Load data from BigQuery query or table = "bigquery-public-data.ml datasets.penguins" bq df = bpd . read gbq ( query or table ) Inspect one of the columns (or series) of the DataFrame: bq df [ "body mass g" ] Compute the mean of this series: average body mass = bq df [ "body mass g" ] . mean () print ( f "average body mass: { average body mass } " ) Find the heaviest species using the groupby operation to calculate the mean body mass g: ( bq df [ "body mass g" ] . groupby ( by = bq df [ "species" ]) . mean () . sort values ( ascending = False ) . head ( 10 ) ) What's next To search and filter code samples for other Google Cloud products, see the Google Cloud sample browser .
- Explore further For detailed documentation that includes this code sample, see the following: Use BigQuery DataFrames Code sample Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- Home Documentation Data analytics BigQuery Samples Run queries using the BigQuery DataFrames bigframes.pandas APIs Stay organized with collections Save and categorize content based on your preferences.
- Use the BigQuery DataFrames bigframes.pandas APIs to perform data analysis via the BigQuery Query engine.

### "Campaign Manager report transformation \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transformation](https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transformation)
- Source ID: `site-api-reference`
- Final score: 68
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Campaign Manager file BigQuery table BigQuery view Data Transfer files impression p impression campaign manager id impression campaign manager id click p click campaign manager id click campaign manager id activity p activity campaign manager id activity campaign manager id rich media p rich media campaign manager id rich media campaign manager id Match Tables activity cats p match table activity cats campaign manager id match table activity cats campaign manager id activity types p match table activity types campaign manager id match table activity types campaign manager id ads p match table ads campaign manager id match table ads campaign manager id ad placement assignments p match table ad placement assignments campaign manager id match table ad placement assignments campaign manager id advertisers p match table advertisers campaign manager id match table advertisers campaign manager id assets p match table assets campaign manager id match table assets campaign manager id browsers p match table browsers campaign manager id match table browsers campaign manager id campaigns p match table campaigns campaign manager id match table campaigns campaign manager id cities p match table cities campaign manager id match table cities campaign manager id creatives p match table creatives campaign manager id match table creatives campaign manager id creative ad assignments p match table creative ad assignments campaign manager id match table creative ad assignments campaign manager id custom creative fields p match table custom creative fields campaign manager id match table custom creative fields campaign manager id paid search p match table paid search campaign manager id match table paid search campaign manager id designated market areas p match table designated market areas campaign manager id match table designated market areas campaign manager id keyword value p match table keyword value campaign manager id match table keyword value campaign manager id null user ID reason categories Unsupported Unsupported rich media standard event and event type IDs Unsupported Unsupported custom rich media p match table custom rich media campaign manager id match table custom rich media campaign manager id operating systems p match table operating systems campaign manager id match table operating systems campaign manager id placements p match table placements campaign manager id match table placements campaign manager id placement cost p match table placement cost campaign manager id match table placement cost campaign manager id sites p match table sites campaign manager id match table sites campaign manager id states p match table states campaign manager id match table states campaign manager id custom floodlight variables p match table custom floodlight variables campaign manager id match table custom floodlight variables campaign manager id landing page url p match table landing page url campaign manager id match table landing page url campaign manager id Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Campaign Manager report transformation When your Campaign Manager (formerly known as DoubleClick Campaign Manager) data transfer files are transferred to BigQuery, the files are transformed into the following BigQuery tables and views.
- Home Documentation Data analytics BigQuery Reference Send feedback Stay organized with collections Save and categorize content based on your preferences.
- When you view the tables and views in BigQuery, the value for campaign manager id is your Campaign Manager Network, Advertiser, or Floodlight ID.

### "Create a BigQuery DataFrame from a finished query job \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-load-data-from-bigquery-job](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-load-data-from-bigquery-job)
- Source ID: `site-docs-reference-required-15`
- Final score: 68
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Client ( project = project , location = location ) Job ID inserted based on the query results selcted to explore job id = JOB ID job = client . get job ( job id ) destination = str ( job . destination ) Load data from a BigQuery table using BigFrames DataFrames: bq df = bpd . read gbq table ( destination ) What's next To search and filter code samples for other Google Cloud products, see the Google Cloud sample browser .
- For more information, see Set up authentication for client libraries . from google.cloud import bigquery import bigframes.pandas as bpd Project ID inserted based on the query results selected to explore project = your project id Location inserted based on the query results selected to explore location = "us" client = bigquery .
- Home Documentation Data analytics BigQuery Samples Create a BigQuery DataFrame from a finished query job Stay organized with collections Save and categorize content based on your preferences.
- Use the BigQuery DataFrames API to explore the results of a query job that may have been started elsewhere, such as from the BigQuery Console or bq CLI.

