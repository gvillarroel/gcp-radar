---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.732Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Access management DCL statements"
feature_slug: "access-management-dcl-statements"
latest_feature_date: "2021-06-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/display-video-transformation"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function"
keywords:
  - "access"
  - "management"
  - "dcl"
  - "statements"
  - "bigquery"
  - "supports"
  - "control"
  - "language"
---

# Access management DCL statements

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports data control language statements for access management, including GRANT and REVOKE.

## Extended Definition

BigQuery supports data control language statements for access management, including GRANT and REVOKE.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/display-video-transformation](https://docs.cloud.google.com/bigquery/docs/display-video-transformation)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function)

## Supporting Pages

### "Deploy and apply a remote function using BigQuery DataFrames \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function)
- Source ID: `site-docs-reference-required-15`
- Final score: 56
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The BigQuery remote function created to support the BigQuery DataFrames remote function can be located via a property bigframes remote function set in the remote function object. print ( f "Created BQ remote function: { get bucket . bigframes remote function } " ) The cloud function can be located via another property bigframes cloud function set in the remote function object. print ( f "Created cloud function: { get bucket . bigframes cloud function } " ) Warning: The deployed cloud function may be visible to other users with sufficient privilege in the project, so the user should be careful about having any sensitive data in the code that will be deployed as a remote function.
- One can find more details about the usage and the requirements via help command. help ( bpd . remote function ) Read a table and inspect the column of interest. df = bpd . read gbq ( "bigquery-public-data.ml datasets.penguins" ) df [ "body mass g" ] . head ( 10 ) Define a custom function, and specify the intent to turn it into a remote function.
- For more information, see Set up authentication for client libraries . import bigframes.pandas as bpd Set BigQuery DataFrames options bpd . options . bigquery . project = your gcp project id bpd . options . bigquery . location = "US" BigQuery DataFrames gives you the ability to turn your custom scalar functions into a BigQuery remote function.
- For that, there is a google cloud function deployed by serializing the user code, and a BigQuery remote function created to call the cloud function via the latter's http endpoint on the data in the DataFrame.

### "Display & Video 360 data transformation \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/display-video-transformation](https://docs.cloud.google.com/bigquery/docs/display-video-transformation)
- Source ID: `site-api-reference`
- Final score: 56
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Display & Video 360 resource BigQuery table BigQuery view Data Transfer files Impression p Impression displayvideo id Impression displayvideo id Click p Click displayvideo id Click displayvideo id Activity p Activity displayvideo id Activity displayvideo id DV360 API Resource (v3) Partner p Partner displayvideo id Partner displayvideo id Advertiser p Advertiser displayvideo id Advertiser displayvideo id LineItem p LineItem displayvideo id LineItem displayvideo id LineItemTargeting p LineItemTargeting displayvideo id LineItemTargeting displayvideo id Campaign p Campaign displayvideo id Campaign displayvideo id CampaignTargeting p CampaignTargeting displayvideo id CampaignTargeting displayvideo id InsertionOrder p InsertionOrder displayvideo id InsertionOrder displayvideo id InsertionOrderTargeting p InsertionOrderTargeting displayvideo id InsertionOrderTargeting displayvideo id AdGroup p AdGroup displayvideo id AdGroup displayvideo id AdGroupTargeting p AdGroupTargeting displayvideo id AdGroupTargeting displayvideo id AdGroupAd p AdGroupAd displayvideo id AdGroupAd displayvideo id Creative p Creative displayvideo id Creative displayvideo id Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Display & Video 360 data transformation When your Display & Video 360 data are transferred to BigQuery, they are transformed into the following BigQuery tables and views.
- Home Documentation Data analytics BigQuery Reference Send feedback Stay organized with collections Save and categorize content based on your preferences.
- When you view the tables and views in BigQuery, the value for displayvideo id is your Display & Video 360 partner or advertiser ID.

### "Run queries using the BigQuery DataFrames bigframes.pandas APIs \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods)
- Source ID: `site-docs-reference-required-15`
- Final score: 56
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for client libraries . import bigframes.pandas as bpd Load data from BigQuery query or table = "bigquery-public-data.ml datasets.penguins" bq df = bpd . read gbq ( query or table ) Inspect one of the columns (or series) of the DataFrame: bq df [ "body mass g" ] Compute the mean of this series: average body mass = bq df [ "body mass g" ] . mean () print ( f "average body mass: { average body mass } " ) Find the heaviest species using the groupby operation to calculate the mean body mass g: ( bq df [ "body mass g" ] . groupby ( by = bq df [ "species" ]) . mean () . sort values ( ascending = False ) . head ( 10 ) ) What's next To search and filter code samples for other Google Cloud products, see the Google Cloud sample browser .
- Explore further For detailed documentation that includes this code sample, see the following: Use BigQuery DataFrames Code sample Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- Home Documentation Data analytics BigQuery Samples Run queries using the BigQuery DataFrames bigframes.pandas APIs Stay organized with collections Save and categorize content based on your preferences.
- Use the BigQuery DataFrames bigframes.pandas APIs to perform data analysis via the BigQuery Query engine.

