---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.277Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "dbt-bigquery support for BigQuery DataFrames Python"
feature_slug: "dbt-bigquery-support-for-bigquery-dataframes-python"
latest_feature_date: "2025-10-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-clustering-model"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function"
keywords:
  - "dbt"
  - "bigquery"
  - "dataframes"
  - "python"
  - "adapter"
  - "can"
  - "run"
  - "code"
---

# dbt-bigquery support for BigQuery DataFrames Python

Product: BigQuery
Coverage: LOW

## Step 02 Summary

The dbt-bigquery adapter can run Python code defined in BigQuery DataFrames.

## Extended Definition

The dbt-bigquery adapter can run Python code defined in BigQuery DataFrames.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-clustering-model](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-clustering-model)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function)

## Supporting Pages

### Create a clustering model with BigQuery DataFrames \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-clustering-model](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-clustering-model)
- Source ID: `site-docs-reference-required-15`
- Final score: 37
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Explore further For detailed documentation that includes this code sample, see the following: Use BigQuery DataFrames Code sample Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- For more information, see Set up authentication for client libraries . from bigframes.ml.cluster import KMeans import bigframes.pandas as bpd Load data from BigQuery query or table = "bigquery-public-data.ml datasets.penguins" bq df = bpd . read gbq ( query or table ) Create the KMeans model cluster model = KMeans ( n clusters = 10 ) cluster model . fit ( bq df [ "culmen length mm" ], bq df [ "sex" ]) Predict using the model result = cluster model . predict ( bq df ) Score the model score = cluster model . score ( bq df ) What's next To search and filter code samples for other Google Cloud products, see the Google Cloud sample browser .
- Home Documentation Data analytics BigQuery Samples Create a clustering model with BigQuery DataFrames Stay organized with collections Save and categorize content based on your preferences.
- Create a k-means clustering model on the lengths and sex of penguins using the BigQuery DataFrames API.

### "Run queries using the BigQuery DataFrames bigframes.pandas APIs \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods)
- Source ID: `site-docs-reference-required-15`
- Final score: 31
- Re-rank relevance: N/A

Evidence snippets:
- Explore further For detailed documentation that includes this code sample, see the following: Use BigQuery DataFrames Code sample Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- For more information, see Set up authentication for client libraries . import bigframes.pandas as bpd Load data from BigQuery query or table = "bigquery-public-data.ml datasets.penguins" bq df = bpd . read gbq ( query or table ) Inspect one of the columns (or series) of the DataFrame: bq df [ "body mass g" ] Compute the mean of this series: average body mass = bq df [ "body mass g" ] . mean () print ( f "average body mass: { average body mass } " ) Find the heaviest species using the groupby operation to calculate the mean body mass g: ( bq df [ "body mass g" ] . groupby ( by = bq df [ "species" ]) . mean () . sort values ( ascending = False ) . head ( 10 ) ) What's next To search and filter code samples for other Google Cloud products, see the Google Cloud sample browser .
- Home Documentation Data analytics BigQuery Samples Run queries using the BigQuery DataFrames bigframes.pandas APIs Stay organized with collections Save and categorize content based on your preferences.
- Use the BigQuery DataFrames bigframes.pandas APIs to perform data analysis via the BigQuery Query engine.

### "Deploy and apply a remote function using BigQuery DataFrames \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function)
- Source ID: `site-docs-reference-required-15`
- Final score: 29
- Re-rank relevance: N/A

Evidence snippets:
- The BigQuery remote function created to support the BigQuery DataFrames remote function can be located via a property bigframes remote function set in the remote function object. print ( f "Created BQ remote function: { get bucket . bigframes remote function } " ) The cloud function can be located via another property bigframes cloud function set in the remote function object. print ( f "Created cloud function: { get bucket . bigframes cloud function } " ) Warning: The deployed cloud function may be visible to other users with sufficient privilege in the project, so the user should be careful about having any sensitive data in the code that will be deployed as a remote function.
- Code sample Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- Use the BigQuery DataFrames API to deploy a Python function as a Cloud Function and use it as a remote function.
- For more information, see Set up authentication for client libraries . import bigframes.pandas as bpd Set BigQuery DataFrames options bpd . options . bigquery . project = your gcp project id bpd . options . bigquery . location = "US" BigQuery DataFrames gives you the ability to turn your custom scalar functions into a BigQuery remote function.

