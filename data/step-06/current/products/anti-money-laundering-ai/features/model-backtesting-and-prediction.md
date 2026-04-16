---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:08:22.047Z"
product_name: "Anti Money Laundering AI"
product_slug: "anti-money-laundering-ai"
feature_name: "Model backtesting and prediction"
feature_slug: "model-backtesting-and-prediction"
latest_feature_date: "2023-06-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/overview-model-preparation"
  - "https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/train-models-to-detect-money-laundering"
  - "https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/schemas/aml-input-data-model"
keywords:
  - "backtesting"
  - "predictions"
  - "performing"
  - "making"
  - "prediction"
  - "model"
  - "adds"
---

# Model backtesting and prediction

Product: Anti Money Laundering AI
Coverage: MEDIUM

## Step 02 Summary

Adds API support for performing backtesting and making predictions using a model.

## Extended Definition

Adds API support for performing backtesting and making predictions using a model.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/overview-model-preparation](https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/overview-model-preparation)
- [https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/train-models-to-detect-money-laundering](https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/train-models-to-detect-money-laundering)
- [https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/schemas/aml-input-data-model](https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/schemas/aml-input-data-model)

## Supporting Pages

### "Overview of model preparation \_|\_ Anti Money Laundering AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/overview-model-preparation](https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/overview-model-preparation)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you reference regularly updated tables, AML AI operations read the BigQuery tables each time an operation uses the AML AI dataset, so changes to the underlying BigQuery tables could impact tuning, training, backtesting, and predictions.
- Dataset time ranges Each dataset used for tuning, training, backtesting and prediction operations should contain valid data for a time range ending at the end of the last full calendar month prior to the end time specified in the API call.
- For example, removing a field that was populated during model training can cause features that the model relies on to be skewed or missing during evaluation or prediction.
- Similarly, for a high-quality risk score , the dataset used to create prediction results with a model should be consistent with the dataset used to train that model.

### "Train and test models designed to detect money laundering \_|\_ Anti Money\

- URL: [https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/train-models-to-detect-money-laundering](https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/train-models-to-detect-money-laundering)
- Source ID: `site-docs-root`
- Final score: 122
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- These roles fulfill the following required permissions: Required permissions The following permissions are required to complete this quickstart: Permission Description resourcemanager.projects.get Get a Google Cloud project resourcemanager.projects.list List Google Cloud projects cloudkms.keyRings.create Create a Cloud KMS key ring cloudkms.cryptoKeys.create Create a Cloud KMS key financialservices.v1instances.create Create an AML AI instance financialservices.operations.get Get an AML AI operation cloudkms.cryptoKeys.getIamPolicy Get the IAM policy on a Cloud KMS key cloudkms.cryptoKeys.setIamPolicy Set the IAM policy on a Cloud KMS key bigquery.datasets.create Create a BigQuery dataset bigquery.datasets.get Get a BigQuery dataset bigquery.transfers.get Get a BigQuery Data Transfer Service transfer bigquery.transfers.update Create or delete a BigQuery Data Transfer Service transfer bigquery.datasets.setIamPolicy Set the IAM policy on a BigQuery dataset bigquery.datasets.update Update a BigQuery dataset financialservices.v1datasets.create Create an AML AI dataset financialservices.v1engineconfigs.create Create an AML AI engine config financialservices.v1models.copyFrom Copy from an AML AI model financialservices.v1models.copyTo Copy to an AML AI instance financialservices.v1models.create Create an AML AI model financialservices.v1backtests.create Create an AML AI backtest result financialservices.v1backtests.exportMetadata Export metadata from an AML AI backtest result financialservices.v1instances.importRegisteredParties Import registered parties into an AML AI instance financialservices.v1predictions.create Create an AML AI prediction result bigquery.jobs.create Create a BigQuery job bigquery.tables.getData Get data from a BigQuery table financialservices.v1predictions.delete Delete an AML AI prediction result financialservices.v1backtests.delete Delete an AML AI backtest result financialservices.v1models.delete Delete an AML AI model financialservices.v1engineconfigs.delete Delete an AML AI engine config financialservices.v1datasets.delete Delete an AML AI dataset financialservices.v1instances.delete Delete an AML AI instance bigquery.datasets.delete Delete a BigQuery dataset The API requests in this guide use the same Google Cloud project and location and hard-coded resource IDs to make the guide easier to complete.
- Register parties and make model predictions.
- Run the following command in the terminal to create or overwrite this file in the current directory: @' { "model": "projects/ PROJECT ID /locations/ LOCATION /instances/my-instance/models/my-model", "dataset": "projects/ PROJECT ID /locations/ LOCATION /instances/my-instance/datasets/my-dataset", "endTime": "2023-01-01T00:00:00Z", "predictionPeriods": "12", "outputs": { "predictionDestination": { "tableUri": "bq:// PROJECT ID .my bq output dataset.my prediction results", "writeDisposition": "WRITE TRUNCATE" }, "explainabilityDestination": { "tableUri": "bq:// PROJECT ID .my bq output dataset.my prediction results explainability", "writeDisposition": "WRITE TRUNCATE" } } } '@ Out-File -FilePath request.json -Encoding utf8 Then execute the following command to send your REST request: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://financialservices.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /instances/my-instance/predictionResults?prediction result id=my-prediction-results" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT ID /locations/ LOCATION /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.financialservices.v1.OperationMetadata", "createTime": CREATE TIME , "target": "projects/ PROJECT ID /locations/ LOCATION /instances/my-instance/predictionResults/my-prediction-results", "verb": "create", "requestedCancellation": false, "apiVersion": "v1" }, "done": false } Analyze a single structuring case in the Google Cloud console Note: Due to differences in engine versions and the evolution of synthetic data over time, these results may not exactly match your outputs.
- Run the following command in the terminal to create or overwrite this file in the current directory: @' { "engineConfig": "projects/ PROJECT ID /locations/ LOCATION /instances/my-instance/engineConfigs/my-engine-config", "primaryDataset": "projects/ PROJECT ID /locations/ LOCATION /instances/my-instance/datasets/my-dataset", "endTime": "2021-07-01T00:00:00Z" } '@ Out-File -FilePath request.json -Encoding utf8 Then execute the following command to send your REST request: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://financialservices.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /instances/my-instance/models?model id=my-model" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT ID /locations/ LOCATION /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.financialservices.v1.OperationMetadata", "createTime": CREATE TIME , "target": "projects/ PROJECT ID /locations/ LOCATION /instances/my-instance/models/my-model", "verb": "create", "requestedCancellation": false, "apiVersion": "v1" }, "done": false } Create a backtest result Backtest prediction uses the trained model on existing historical data.

### AML input data model \_|\_ Anti Money Laundering AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/schemas/aml-input-data-model](https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/schemas/aml-input-data-model)
- Source ID: `site-docs-root`
- Final score: 118
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Ensure that the same party supplementary data id values with the same logic are provided for datasets used in all stages of AML modeling (that is, engine config, model, prediction results, and backtesting).
- Purpose for AML : Creation of training labels for training, tuning, and backtesting of models Understanding previously identified money laundering risk Scope : includes all AML investigation-related events related to a risk case and party for which the AML PROCESS START (start of investigation) occurs within the required time range Note : This time period can include events with an event time after the dataset dateRange , in order to create more complete labels for model training and evaluation.
- For example, unpredictable outcomes occur if you use different IDs for the same supplementary data field, or if you drop supplementary data fields between tuning, training and prediction, or backtesting.
- This ID should match between Datasets used for the same modeling process (for example, for tuning, training, predict and backtesting steps).

