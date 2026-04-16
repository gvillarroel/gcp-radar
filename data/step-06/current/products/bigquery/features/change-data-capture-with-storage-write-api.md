---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.537Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Change data capture with Storage Write API"
feature_slug: "change-data-capture-with-storage-write-api"
latest_feature_date: "2023-10-31"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods"
  - "https://docs.cloud.google.com/bigquery/docs/timesfm-anomaly-detection-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function"
keywords:
  - "change"
  - "capture"
  - "storage"
  - "write"
  - "bigquery"
  - "supports"
  - "processing"
  - "applying"
---

# Change data capture with Storage Write API

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports change data capture by processing and applying streamed changes in real time with the BigQuery Storage Write API.

## Extended Definition

BigQuery supports change data capture by processing and applying streamed changes in real time with the BigQuery Storage Write API.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods)
- [https://docs.cloud.google.com/bigquery/docs/timesfm-anomaly-detection-tutorial](https://docs.cloud.google.com/bigquery/docs/timesfm-anomaly-detection-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function)

## Supporting Pages

### "Run queries using the BigQuery DataFrames bigframes.pandas APIs \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods)
- Source ID: `site-docs-reference-required-15`
- Final score: 92
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for client libraries . import bigframes.pandas as bpd Load data from BigQuery query or table = "bigquery-public-data.ml datasets.penguins" bq df = bpd . read gbq ( query or table ) Inspect one of the columns (or series) of the DataFrame: bq df [ "body mass g" ] Compute the mean of this series: average body mass = bq df [ "body mass g" ] . mean () print ( f "average body mass: { average body mass } " ) Find the heaviest species using the groupby operation to calculate the mean body mass g: ( bq df [ "body mass g" ] . groupby ( by = bq df [ "species" ]) . mean () . sort values ( ascending = False ) . head ( 10 ) ) What's next To search and filter code samples for other Google Cloud products, see the Google Cloud sample browser .
- Explore further For detailed documentation that includes this code sample, see the following: Use BigQuery DataFrames Code sample Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- Home Documentation Data analytics BigQuery Samples Run queries using the BigQuery DataFrames bigframes.pandas APIs Stay organized with collections Save and categorize content based on your preferences.
- Use the BigQuery DataFrames bigframes.pandas APIs to perform data analysis via the BigQuery Query engine.

### "Detect anomalies in multiple time series with the TimesFM model \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/timesfm-anomaly-detection-tutorial](https://docs.cloud.google.com/bigquery/docs/timesfm-anomaly-detection-tutorial)
- Source ID: `site-docs-reference-2`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- Go to BigQuery In the query editor, paste in the following query and click Run , the query takes 1-2 minutes to complete: WITH bike share trips AS ( SELECT TIMESTAMP TRUNC ( start date , HOUR ) AS trip hour , COUNT ( ) AS num trips FROM bigquery-public-data.san francisco bikeshare.bikeshare trips GROUP BY TIMESTAMP TRUNC ( start date , HOUR ) ) SELECT FROM AI .
- Go to BigQuery In the query editor, paste in the following query and click Run : WITH bike share trips AS ( SELECT TIMESTAMP TRUNC ( start date , HOUR ) AS trip hour , COUNT ( ) AS num trips , subscriber type FROM bigquery-public-data.san francisco bikeshare.bikeshare trips GROUP BY TIMESTAMP TRUNC ( start date , HOUR ), subscriber type ) SELECT FROM AI .
- Home Documentation Data analytics BigQuery Guides Send feedback Detect anomalies in multiple time series with the TimesFM model Stay organized with collections Save and categorize content based on your preferences.
- Costs This tutorial uses billable components of Google Cloud, including the following: BigQuery BigQuery ML For more information about BigQuery costs, see the BigQuery pricing page.

### "Deploy and apply a remote function using BigQuery DataFrames \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function)
- Source ID: `site-docs-reference-required-15`
- Final score: 72
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The BigQuery remote function created to support the BigQuery DataFrames remote function can be located via a property bigframes remote function set in the remote function object. print ( f "Created BQ remote function: { get bucket . bigframes remote function } " ) The cloud function can be located via another property bigframes cloud function set in the remote function object. print ( f "Created cloud function: { get bucket . bigframes cloud function } " ) Warning: The deployed cloud function may be visible to other users with sufficient privilege in the project, so the user should be careful about having any sensitive data in the code that will be deployed as a remote function.
- One can find more details about the usage and the requirements via help command. help ( bpd . remote function ) Read a table and inspect the column of interest. df = bpd . read gbq ( "bigquery-public-data.ml datasets.penguins" ) df [ "body mass g" ] . head ( 10 ) Define a custom function, and specify the intent to turn it into a remote function.
- For more information, see Set up authentication for client libraries . import bigframes.pandas as bpd Set BigQuery DataFrames options bpd . options . bigquery . project = your gcp project id bpd . options . bigquery . location = "US" BigQuery DataFrames gives you the ability to turn your custom scalar functions into a BigQuery remote function.
- For that, there is a google cloud function deployed by serializing the user code, and a BigQuery remote function created to call the cloud function via the latter's http endpoint on the data in the DataFrame.

