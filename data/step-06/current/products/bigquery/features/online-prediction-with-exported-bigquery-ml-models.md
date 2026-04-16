---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.787Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Online prediction with exported BigQuery ML models"
feature_slug: "online-prediction-with-exported-bigquery-ml-models"
latest_feature_date: "2020-04-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/export-model-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-single-time-series-forecasting-tutorial"
keywords:
  - "online"
  - "prediction"
  - "exported"
  - "bigquery"
  - "ml"
  - "models"
  - "can"
  - "used"
---

# Online prediction with exported BigQuery ML models

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Exported BigQuery ML models can be used for online prediction.

## Extended Definition

Exported BigQuery ML models can be used for online prediction.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/export-model-tutorial](https://docs.cloud.google.com/bigquery/docs/export-model-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial](https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-single-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-single-time-series-forecasting-tutorial)

## Supporting Pages

### Export a BigQuery ML model for online prediction \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/export-model-tutorial](https://docs.cloud.google.com/bigquery/docs/export-model-tutorial)
- Source ID: `site-docs-reference`
- Final score: 177
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Download the exported model files to a temporary directory mkdir tmp dir gcloud storage cp gs://some/gcs/path/iris model tmp dir --recursive Create a version subdirectory This step sets a version number (1 in this case) for the model. mkdir -p serving dir/iris model/1 cp -r tmp dir/iris model/ serving dir/iris model/1 rm -r tmp dir Pull the Docker image docker pull tensorflow/serving Run the Docker container docker run - p 8500 : 8500 -- network = "host" -- mount type = bind , source = pwd / serving dir / iris model , target =/ models / iris model - e MODEL NAME = iris model - t tensorflow / serving & Run the prediction curl -d '{"instances": [{"sepal length":5.0, "sepal width":2.0, "petal length":3.5, "petal width":1.0}]}' -X POST http://localhost:8501/v1/models/iris model:predict Online deployment and serving This section uses the Google Cloud CLI to deploy and run predictions against the exported model.
- Costs This tutorial uses billable components of Google Cloud, including: BigQuery ML Cloud Storage Vertex AI (optional, used for online prediction) For more information about BigQuery ML costs, see BigQuery ML pricing .
- 3) (optional) Get information about your new version: gcloud ai-platform versions describe $VERSION NAME --model $MODEL NAME You should see output similar to this: createTime: '2020-02-28T16:30:45Z' deploymentUri: gs://your bucket name framework: TENSORFLOW machineType: mls1-c1-m2 name: projects/[YOUR-PROJECT-ID]/models/IRIS MODEL/versions/v1 pythonVersion: '2.7' runtimeVersion: '1.15' state: READY Online prediction For more information about running online predictions against a deployed model, see Get online inferences from a custom trained model .
- Copy exported model files to a local directory mkdir automl serving dir gcloud storage cp gs://some/gcs/path/automl iris model/ automl serving dir/ --recursive Pull AutoML Docker image docker pull gcr.io/cloud-automl-tables-public/model server Start Docker container docker run - v pwd / automl serving dir :/ models / default / 0000001 - p 8080 : 8080 - it gcr . io / cloud - automl - tables - public / model server Run the prediction 1) Create a newline-delimited JSON file for inputs.

### "Make predictions with remote models on Vertex AI \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial](https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial)
- Source ID: `site-docs-reference`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Data analytics BigQuery Guides Send feedback Make predictions with remote models on Vertex AI Stay organized with collections Save and categorize content based on your preferences.
- PREDICT ( MODEL PROJECT ID .bqml tutorial.bert sentiment , ( SELECT review as text FROM bigquery-public-data.imdb.reviews LIMIT 10000 ) ) The query results should look similar to the following: bq Enter this command to run the query that uses ML.PREDICT . bq query --use legacy sql=false \ 'SELECT FROM ML.PREDICT ( MODEL PROJECT ID .bqml tutorial.bert sentiment , ( SELECT review as text FROM bigquery-public-data.imdb.reviews LIMIT 10000 ) )' Clean up To avoid incurring charges to your Google Cloud account for the resources used in this tutorial, either delete the project that contains the resources, or keep the project and delete the individual resources.
- You can use remote models when a model is too large to import into BigQuery.
- Click the Vertex AI Models: BigQuery Federation solution card.

### "Forecast a single time series with a multivariate model \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-single-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-single-time-series-forecasting-tutorial)
- Source ID: `site-docs-reference`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- To create the model, you need the following permissions: bigquery.jobs.create bigquery.models.create bigquery.models.getData bigquery.models.updateData To run inference, you need the following permissions: bigquery.models.getData bigquery.jobs.create For more information about IAM roles and permissions in BigQuery, see Introduction to IAM .
- Similar to the ML.FORECAST function, the STRUCT(30 AS horizon, 0.8 AS confidence level) clause used in the ML.EXPLAIN FORECAST function indicates that the query forecasts 30 future time points and generates a prediction interval with 80% confidence.
- Go to BigQuery In the query editor, paste in the following query and click Run : CREATE TABLE bqml tutorial.seattle air quality daily AS WITH pm25 daily AS ( SELECT avg ( arithmetic mean ) AS pm25 , date local AS date FROM bigquery-public-data.epa historical air quality.pm25 nonfrm daily summary WHERE city name = 'Seattle' AND parameter name = 'Acceptable PM2.5 AQI & Speciation Mass' GROUP BY date local ), wind speed daily AS ( SELECT avg ( arithmetic mean ) AS wind speed , date local AS date FROM bigquery-public-data.epa historical air quality.wind daily summary WHERE city name = 'Seattle' AND parameter name = 'Wind Speed - Resultant' GROUP BY date local ), temperature daily AS ( SELECT avg ( first max value ) AS temperature , date local AS date FROM bigquery-public-data.epa historical air quality.temperature daily summary WHERE city name = 'Seattle' AND parameter name = 'Outdoor Temperature' GROUP BY date local ) SELECT pm25 daily . date AS date , pm25 , wind speed , temperature FROM pm25 daily JOIN wind speed daily USING ( date ) JOIN temperature daily USING ( date ); Visualize the input data Before creating the model, you can optionally visualize your input time series data to get a sense of the distribution.
- Go to BigQuery In the query editor, paste in the following query and click Run : CREATE OR REPLACE MODEL bqml tutorial.seattle pm25 xreg model OPTIONS ( MODEL TYPE = 'ARIMA PLUS XREG' , time series timestamp col = 'date' , # Identifies the column that contains time points time series data col = 'pm25' ) # Identifies the column to forecast AS SELECT date , # The column that contains time points pm25 , # The column to forecast temperature , # Temperature input to use in forecasting wind speed # Wind speed input to use in forecasting FROM bqml tutorial.seattle air quality daily WHERE date BETWEEN DATE ( '2012-01-01' ) AND DATE ( '2020-12-31' ); The query takes about 20 seconds to complete, after which you can access the seattle pm25 xreg model model.

