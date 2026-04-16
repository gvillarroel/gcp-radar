---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:08:22.046Z"
product_name: "Anti Money Laundering AI"
product_slug: "anti-money-laundering-ai"
feature_name: "Metadata export from modeling resources"
feature_slug: "metadata-export-from-modeling-resources"
latest_feature_date: "2023-06-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/train-models-to-detect-money-laundering"
  - "https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/schemas/aml-output-data-model"
  - "https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/concepts/glossary"
keywords:
  - "metadata"
  - "modeling"
  - "ability"
  - "export"
  - "engine"
  - "config"
  - "resources"
  - "adds"
---

# Metadata export from modeling resources

Product: Anti Money Laundering AI
Coverage: MEDIUM

## Step 02 Summary

Adds the ability to export metadata from engine config, model, backtest, and prediction resources via the API.

## Extended Definition

Adds the ability to export metadata from engine config, model, backtest, and prediction resources via the API.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/train-models-to-detect-money-laundering](https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/train-models-to-detect-money-laundering)
- [https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/schemas/aml-output-data-model](https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/schemas/aml-output-data-model)
- [https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/concepts/glossary](https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/concepts/glossary)

## Supporting Pages

### "Train and test models designed to detect money laundering \_|\_ Anti Money\

- URL: [https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/train-models-to-detect-money-laundering](https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/train-models-to-detect-money-laundering)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- These roles fulfill the following required permissions: Required permissions The following permissions are required to complete this quickstart: Permission Description resourcemanager.projects.get Get a Google Cloud project resourcemanager.projects.list List Google Cloud projects cloudkms.keyRings.create Create a Cloud KMS key ring cloudkms.cryptoKeys.create Create a Cloud KMS key financialservices.v1instances.create Create an AML AI instance financialservices.operations.get Get an AML AI operation cloudkms.cryptoKeys.getIamPolicy Get the IAM policy on a Cloud KMS key cloudkms.cryptoKeys.setIamPolicy Set the IAM policy on a Cloud KMS key bigquery.datasets.create Create a BigQuery dataset bigquery.datasets.get Get a BigQuery dataset bigquery.transfers.get Get a BigQuery Data Transfer Service transfer bigquery.transfers.update Create or delete a BigQuery Data Transfer Service transfer bigquery.datasets.setIamPolicy Set the IAM policy on a BigQuery dataset bigquery.datasets.update Update a BigQuery dataset financialservices.v1datasets.create Create an AML AI dataset financialservices.v1engineconfigs.create Create an AML AI engine config financialservices.v1models.copyFrom Copy from an AML AI model financialservices.v1models.copyTo Copy to an AML AI instance financialservices.v1models.create Create an AML AI model financialservices.v1backtests.create Create an AML AI backtest result financialservices.v1backtests.exportMetadata Export metadata from an AML AI backtest result financialservices.v1instances.importRegisteredParties Import registered parties into an AML AI instance financialservices.v1predictions.create Create an AML AI prediction result bigquery.jobs.create Create a BigQuery job bigquery.tables.getData Get data from a BigQuery table financialservices.v1predictions.delete Delete an AML AI prediction result financialservices.v1backtests.delete Delete an AML AI backtest result financialservices.v1models.delete Delete an AML AI model financialservices.v1engineconfigs.delete Delete an AML AI engine config financialservices.v1datasets.delete Delete an AML AI dataset financialservices.v1instances.delete Delete an AML AI instance bigquery.datasets.delete Delete a BigQuery dataset The API requests in this guide use the same Google Cloud project and location and hard-coded resource IDs to make the guide easier to complete.
- Run the following command in the terminal to create or overwrite this file in the current directory: @' { "model": "projects/ PROJECT ID /locations/ LOCATION /instances/my-instance/models/my-model", "dataset": "projects/ PROJECT ID /locations/ LOCATION /instances/my-instance/datasets/my-dataset", "endTime": "2023-01-01T00:00:00Z", "predictionPeriods": "12", "outputs": { "predictionDestination": { "tableUri": "bq:// PROJECT ID .my bq output dataset.my prediction results", "writeDisposition": "WRITE TRUNCATE" }, "explainabilityDestination": { "tableUri": "bq:// PROJECT ID .my bq output dataset.my prediction results explainability", "writeDisposition": "WRITE TRUNCATE" } } } '@ Out-File -FilePath request.json -Encoding utf8 Then execute the following command to send your REST request: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://financialservices.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /instances/my-instance/predictionResults?prediction result id=my-prediction-results" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT ID /locations/ LOCATION /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.financialservices.v1.OperationMetadata", "createTime": CREATE TIME , "target": "projects/ PROJECT ID /locations/ LOCATION /instances/my-instance/predictionResults/my-prediction-results", "verb": "create", "requestedCancellation": false, "apiVersion": "v1" }, "done": false } Analyze a single structuring case in the Google Cloud console Note: Due to differences in engine versions and the evolution of synthetic data over time, these results may not exactly match your outputs.
- Run the following command in the terminal to create or overwrite this file in the current directory: @' { "tableSpecs": { "party": "bq:// PROJECT ID .my bq input dataset.party", "account party link": "bq:// PROJECT ID .my bq input dataset.account party link", "transaction": "bq:// PROJECT ID .my bq input dataset.transaction", "risk case event": "bq:// PROJECT ID .my bq input dataset.risk case event", "party supplementary data": "bq:// PROJECT ID .my bq input dataset.party supplementary data" }, "dateRange": { "startTime": "2020-01-01T00:00:0.00Z", "endTime": "2023-01-01T00:00:0.00Z" }, "timeZone": { "id": "UTC" } } '@ Out-File -FilePath request.json -Encoding utf8 Then execute the following command to send your REST request: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://financialservices.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /instances/my-instance/datasets?dataset id=my-dataset" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT ID /locations/ LOCATION /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.financialservices.v1.OperationMetadata", "createTime": CREATE TIME , "target": "projects/ PROJECT ID /locations/ LOCATION /instances/my-instance/datasets/my-dataset", "verb": "create", "requestedCancellation": false, "apiVersion": "v1" }, "done": false } You can check for the result of the operation using the new operation ID. (You can do this for the remaining API requests used in this guide.) Create an engine config Create an AML AI engine config to automatically tune hyperparameters based on a given engine version and the data provided.
- Run the following command in the terminal to create or overwrite this file in the current directory: @' { "engineVersion": "projects/ PROJECT ID /locations/ LOCATION /instances/my-instance/engineVersions/aml-commercial.default.v004.008.202411-001", "tuning": { "primaryDataset": "projects/ PROJECT ID /locations/ LOCATION /instances/my-instance/datasets/my-dataset", "endTime": "2021-07-01T00:00:00Z" }, "performanceTarget": { "partyInvestigationsPerPeriodHint": "30" } } '@ Out-File -FilePath request.json -Encoding utf8 Then execute the following command to send your REST request: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://financialservices.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /instances/my-instance/engineConfigs?engine config id=my-engine-config" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT ID /locations/ LOCATION /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.financialservices.v1.OperationMetadata", "createTime": CREATE TIME , "target": "projects/ PROJECT ID /locations/ LOCATION /instances/my-instance/engineConfigs/my-engine-config", "verb": "create", "requestedCancellation": false, "apiVersion": "v1" }, "done": false } Create a model In this step, you train an AML AI model by using 12 months of data leading up to 2021-07-01.

### "AML output data model \_|\_ Anti Money Laundering AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/schemas/aml-output-data-model](https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/schemas/aml-output-data-model)
- Source ID: `site-docs-root`
- Final score: 131
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Column Type Description resource type STRING Type of AML AI resource, such as an engine config or prediction results resource id STRING Name of the resource name STRING Name of the metadata entry, such as a metric (see the following table) value JSON Value of the metadata entry Metric name Metric description Example metric value ExpectedRecallPreTuning Recall metric measured on a test set when using default hyperparameters of the engine version.
- Column Type Description resource type STRING Type of AML AI resource, such as an engine config or prediction results resource id STRING Name of the resource name STRING Name of the metadata entry, such as a metric (see the following table) value JSON Value of the metadata entry Metric name Metric description Example metric value ObservedRecallValues Recall metric measured on the dataset specified for backtesting.
- Column Type Description resource type STRING Type of AML AI resource, such as an engine config or prediction results resource id STRING Name of the resource name STRING Name of the metadata entry, such as a metric (see the following table) value JSON Value of the metadata entry Metric name Metric description Example metric value Missingness Share of missing values across all features in each feature family.
- Column Type Description resource type STRING Type of AML AI resource, such as an engine config or prediction results resource id STRING Name of the resource name STRING Name of the metadata entry, such as a metric (see the following table) value JSON Value of the metadata entry Metric name Metric description Example metric value Missingness Share of missing values across all features in each feature family.

### AML AI glossary \_|\_ Anti Money Laundering AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/concepts/glossary](https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/concepts/glossary)
- Source ID: `site-iam-reference`
- Final score: 130
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This time period is within the date range of the dataset. engine config An AML AI EngineConfig resource (also known as an "engine config") specifies parameters in generating and evaluating an AML AI model and in generating risk scores and explainability.
- See also prediction . export metadata Several AML AI resources store additional information relating to performance and data quality which can be accessed using the export metadata operation.
- M missingness The missingness metric is computed for all feature families when creating the following AML AI resources: engine config, model, backtest results, and prediction results.
- The engine version is then used to train and evaluate models with that engine config and to generate risk scores and explainability.

