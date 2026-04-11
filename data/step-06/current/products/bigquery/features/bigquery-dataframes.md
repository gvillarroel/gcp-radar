---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.565Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery DataFrames"
feature_slug: "bigquery-dataframes"
latest_feature_date: "2024-04-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/dataframes-quickstart"
  - "https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial"
keywords:
  - "scikit-learn integration"
  - "server-side DataFrame processing"
  - "bigframes.pandas"
  - "pandas API for BigQuery"
  - "BigQuery DataFrame API"
  - "Python DataFrames on BigQuery"
  - "bigframes.ml"
  - "bigframes"
---

# BigQuery DataFrames

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery DataFrames is now generally available as open-source Python libraries implementing pandas and scikit-learn APIs with server-side processing; BigQuery DataFrames, a preview Python API for data analysis and machine learning with bigframes.pandas and bigframes.ml, is now available.

## Extended Definition

BigQuery DataFrames is a Python interface for BigQuery that uses the `bigframes` APIs (`bigframes.pandas` and `bigframes.ml`) in notebook workflows. Based on Google Cloud samples, it supports loading/manipulating BigQuery data as DataFrames and running machine-learning workflows in Python, including model fitting and scoring with `bigframes.ml` (for example, linear regression and forecasting examples).

## Evidence Summary

These pages contribute concrete usage examples showing BigQuery DataFrames setup and Python API usage (`bigframes.pandas` and `bigframes.ml`) across DataFrame manipulation, multimodal BigQuery workflows, and ML model workflows.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/dataframes-quickstart](https://docs.cloud.google.com/bigquery/docs/dataframes-quickstart)
- [https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial](https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial)

## Supporting Pages

### Try BigQuery DataFrames \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/dataframes-quickstart](https://docs.cloud.google.com/bigquery/docs/dataframes-quickstart)
- Source ID: `site-docs-root`
- Final score: 78
- Re-rank relevance: STRONG
- Re-rank rationale: The page is a BigQuery DataFrames quickstart showing how to create DataFrames, perform ML tasks, train and score models, which directly defines the feature’s core usage.

Evidence snippets:
- Create a new code cell in the notebook and add the following code: Create the Linear Regression model from bigframes.ml.linear model import LinearRegression Filter down to the data we want to analyze adelie data = df [ df . species == "Adelie Penguin (Pygoscelis adeliae)" ] Drop the columns we don't care about adelie data = adelie data . drop ( columns = [ "species" ]) Drop rows with nulls to get our training data training data = adelie data . dropna () Pick feature columns and label column X = training data [ [ "island" , "culmen length mm" , "culmen depth mm" , "flipper length mm" , "sex" , ] ] y = training data [[ "body mass g" ]] model = LinearRegression ( fit intercept = False ) model . fit ( X , y ) model . score ( X , y ) Run the code cell.
- Add the following code to the code cell: import bigframes.pandas as bpd Set BigQuery DataFrames options Note: The project option is not required in all environments.

### "Analyze multimodal data with SQL and BigQuery DataFrames \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial](https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial)
- Source ID: `site-docs-root-2`
- Final score: 64
- Re-rank relevance: MODERATE
- Re-rank rationale: It shows practical use of BigQuery DataFrames in a worked example, but does not define the broader BigQuery DataFrames platform details such as API maturity or library implementation.

Evidence snippets:
- For more information, see Set up ADC for a local development environment . import bigframes.bigquery as bbq import bigframes.pandas as bpd bbq . load data ( "cymbal pets.products" , write disposition = "OVERWRITE" , from files options = { "format" : "avro" , "uris" : [ "gs://cloud-samples-data/bigquery/tutorials/cymbal-pets/tables/products/products .avro" ], }, ) Create the product images table Create an object table that contains the Cymbal pets product images: Run the following to create the product images table: SQL CREATE OR REPLACE EXTERNAL TABLE cymbal pets . product images WITH CONNECTION us.cymbal conn OPTIONS ( object metadata = 'SIMPLE' , uris = [ 'gs://cloud-samples-data/bigquery/tutorials/cymbal-pets/images/ .png' ] , max staleness = INTERVAL 30 MINUTE , metadata cache mode = AUTOMATIC ); BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .

### "Forecast multiple time series with an ARIMA_PLUS univariate model \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial)
- Source ID: `site-docs-reference`
- Final score: 54
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up ADC for a local development environment . from bigframes.ml import forecasting import bigframes.pandas as bpd model = forecasting .
- For more information, see Set up ADC for a local development environment . import bigframes.pandas as bpd df = bpd . read gbq ( "bigquery-public-data.new york.citibike trips" ) features = bpd .

