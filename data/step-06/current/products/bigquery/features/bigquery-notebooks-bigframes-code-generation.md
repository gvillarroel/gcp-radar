---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.441Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Notebooks BigFrames code generation"
feature_slug: "bigquery-notebooks-bigframes-code-generation"
latest_feature_date: "2025-04-02"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
  - "https://docs.cloud.google.com/bigquery/docs/dataframes-quickstart"
  - "https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial"
keywords:
  - "notebook codegen"
  - "bigframes integration"
  - "BigFrames"
  - "BigQuery DataFrames"
  - "notebook export"
  - "generated code"
  - "BigQuery Notebooks"
  - "code generation"
---

# BigQuery Notebooks BigFrames code generation

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery Notebooks now supports code generation for BigQuery DataFrames using the BigFrames library.

## Extended Definition

BigQuery Notebooks now supports code generation that can produce code using the BigFrames library for BigQuery DataFrames workflows. The feature is explicitly triggered by including the term “BigFrames” in the code generation prompt, allowing generated notebook code to target BigQuery DataFrames operations.

## Evidence Summary

The release notes confirm BigQuery Notebooks BigFrames code generation capability, while the BigQuery DataFrames quickstart and ARIMA tutorial provide operational context that BigFrames code is used inside BigQuery notebooks.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- [https://docs.cloud.google.com/bigquery/docs/dataframes-quickstart](https://docs.cloud.google.com/bigquery/docs/dataframes-quickstart)
- [https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial)

## Supporting Pages

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 52
- Re-rank relevance: N/A

Evidence snippets:
- In your code generation prompt, include the word BigFrames to generate code that uses BigQuery DataFrames .
- Feature You can now generate Dataframes code in BigQuery Notebooks that use BigFrames libraries.
- Feature You can now use BigQuery DataFrames version 2.0 , which makes security and performance improvements to the BigQuery DataFrames API, adds new features, and introduces breaking changes.
- Use generative AI to analyze multimodal data and generate embeddings by using BigQuery ML SQL functions or BigQuery DataFrames methods with Gemini and multimodal embedding models.

### Try BigQuery DataFrames \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/dataframes-quickstart](https://docs.cloud.google.com/bigquery/docs/dataframes-quickstart)
- Source ID: `site-docs-root`
- Final score: 44
- Re-rank relevance: WEAK
- Re-rank rationale: The page mentions running BigQuery DataFrames in a BigQuery notebook, but does not describe code generation capabilities.

Evidence snippets:
- Add the following code to the code cell: import bigframes.pandas as bpd Set BigQuery DataFrames options Note: The project option is not required in all environments.
- Create a new code cell in the notebook and add the following code: Create the Linear Regression model from bigframes.ml.linear model import LinearRegression Filter down to the data we want to analyze adelie data = df [ df . species == "Adelie Penguin (Pygoscelis adeliae)" ] Drop the columns we don't care about adelie data = adelie data . drop ( columns = [ "species" ]) Drop rows with nulls to get our training data training data = adelie data . dropna () Pick feature columns and label column X = training data [ [ "island" , "culmen length mm" , "culmen depth mm" , "flipper length mm" , "sex" , ] ] y = training data [[ "body mass g" ]] model = LinearRegression ( fit intercept = False ) model . fit ( X , y ) model . score ( X , y ) Run the code cell.
- Try BigQuery DataFrames Use this quickstart to perform the following analysis and machine learning (ML) tasks by using the BigQuery DataFrames API in a BigQuery notebook : Create a DataFrame over the bigquery-public-data.ml datasets.penguins public dataset.
- Try BigQuery DataFrames Try BigQuery DataFrames by following these steps: Create a new code cell in the notebook.

### "Forecast a single time series with an ARIMA_PLUS univariate model \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial)
- Source ID: `site-docs-reference`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- Create a dataset named bqml tutorial with the data location set to US . bq mk --dataset \ --location=US \ --description "BigQuery ML tutorial dataset." \ bqml tutorial Confirm that the dataset was created: bq ls API Call the datasets.insert method with a defined dataset resource . { "datasetReference" : { "datasetId" : "bqml tutorial" } } BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .
- For more information, see Set up ADC for a local development environment . from bigframes.ml import forecasting import bigframes.pandas as bpd Create a time series model to forecast total site visits: The auto arima option defaults to True, so the auto.ARIMA algorithm automatically tunes the hyperparameters in the model.
- ARIMA EVALUATE ( MODEL bqml tutorial.ga arima model ); The results should look similar to the following: BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .
- FORECAST ( MODEL bqml tutorial.ga arima model , STRUCT ( 30 AS horizon , 0.8 AS confidence level )); The results should look similar to the following: BigQuery DataFrames Forecast future time series values by using the predict function.

