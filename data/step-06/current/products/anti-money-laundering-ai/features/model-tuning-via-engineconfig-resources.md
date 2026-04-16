---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:08:22.047Z"
product_name: "Anti Money Laundering AI"
product_slug: "anti-money-laundering-ai"
feature_name: "Model tuning via engineConfig resources"
feature_slug: "model-tuning-via-engineconfig-resources"
latest_feature_date: "2023-06-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/train-models-to-detect-money-laundering"
  - "https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/concepts/glossary"
  - "https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/schemas/aml-input-data-model"
keywords:
  - "engineconfig"
  - "through"
  - "models"
  - "resources"
  - "tuning"
  - "model"
  - "adds"
---

# Model tuning via engineConfig resources

Product: Anti Money Laundering AI
Coverage: MEDIUM

## Step 02 Summary

Adds API support for tuning models through engineConfig resources.

## Extended Definition

Adds API support for tuning models through engineConfig resources.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/train-models-to-detect-money-laundering](https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/train-models-to-detect-money-laundering)
- [https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/concepts/glossary](https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/concepts/glossary)
- [https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/schemas/aml-input-data-model](https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/schemas/aml-input-data-model)

## Supporting Pages

### "Train and test models designed to detect money laundering \_|\_ Anti Money\

- URL: [https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/train-models-to-detect-money-laundering](https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/train-models-to-detect-money-laundering)
- Source ID: `site-docs-root`
- Final score: 194
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- These roles fulfill the following required permissions: Required permissions The following permissions are required to complete this quickstart: Permission Description resourcemanager.projects.get Get a Google Cloud project resourcemanager.projects.list List Google Cloud projects cloudkms.keyRings.create Create a Cloud KMS key ring cloudkms.cryptoKeys.create Create a Cloud KMS key financialservices.v1instances.create Create an AML AI instance financialservices.operations.get Get an AML AI operation cloudkms.cryptoKeys.getIamPolicy Get the IAM policy on a Cloud KMS key cloudkms.cryptoKeys.setIamPolicy Set the IAM policy on a Cloud KMS key bigquery.datasets.create Create a BigQuery dataset bigquery.datasets.get Get a BigQuery dataset bigquery.transfers.get Get a BigQuery Data Transfer Service transfer bigquery.transfers.update Create or delete a BigQuery Data Transfer Service transfer bigquery.datasets.setIamPolicy Set the IAM policy on a BigQuery dataset bigquery.datasets.update Update a BigQuery dataset financialservices.v1datasets.create Create an AML AI dataset financialservices.v1engineconfigs.create Create an AML AI engine config financialservices.v1models.copyFrom Copy from an AML AI model financialservices.v1models.copyTo Copy to an AML AI instance financialservices.v1models.create Create an AML AI model financialservices.v1backtests.create Create an AML AI backtest result financialservices.v1backtests.exportMetadata Export metadata from an AML AI backtest result financialservices.v1instances.importRegisteredParties Import registered parties into an AML AI instance financialservices.v1predictions.create Create an AML AI prediction result bigquery.jobs.create Create a BigQuery job bigquery.tables.getData Get data from a BigQuery table financialservices.v1predictions.delete Delete an AML AI prediction result financialservices.v1backtests.delete Delete an AML AI backtest result financialservices.v1models.delete Delete an AML AI model financialservices.v1engineconfigs.delete Delete an AML AI engine config financialservices.v1datasets.delete Delete an AML AI dataset financialservices.v1instances.delete Delete an AML AI instance bigquery.datasets.delete Delete a BigQuery dataset The API requests in this guide use the same Google Cloud project and location and hard-coded resource IDs to make the guide easier to complete.
- Run the following command in the terminal to create or overwrite this file in the current directory: @' { "engineVersion": "projects/ PROJECT ID /locations/ LOCATION /instances/my-instance/engineVersions/aml-commercial.default.v004.008.202411-001", "tuning": { "primaryDataset": "projects/ PROJECT ID /locations/ LOCATION /instances/my-instance/datasets/my-dataset", "endTime": "2021-07-01T00:00:00Z" }, "performanceTarget": { "partyInvestigationsPerPeriodHint": "30" } } '@ Out-File -FilePath request.json -Encoding utf8 Then execute the following command to send your REST request: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://financialservices.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /instances/my-instance/engineConfigs?engine config id=my-engine-config" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT ID /locations/ LOCATION /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.financialservices.v1.OperationMetadata", "createTime": CREATE TIME , "target": "projects/ PROJECT ID /locations/ LOCATION /instances/my-instance/engineConfigs/my-engine-config", "verb": "create", "requestedCancellation": false, "apiVersion": "v1" }, "done": false } Create a model In this step, you train an AML AI model by using 12 months of data leading up to 2021-07-01.
- Run the following command in the terminal to create or overwrite this file in the current directory: @' { "engineConfig": "projects/ PROJECT ID /locations/ LOCATION /instances/my-instance/engineConfigs/my-engine-config", "primaryDataset": "projects/ PROJECT ID /locations/ LOCATION /instances/my-instance/datasets/my-dataset", "endTime": "2021-07-01T00:00:00Z" } '@ Out-File -FilePath request.json -Encoding utf8 Then execute the following command to send your REST request: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://financialservices.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /instances/my-instance/models?model id=my-model" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT ID /locations/ LOCATION /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.financialservices.v1.OperationMetadata", "createTime": CREATE TIME , "target": "projects/ PROJECT ID /locations/ LOCATION /instances/my-instance/models/my-model", "verb": "create", "requestedCancellation": false, "apiVersion": "v1" }, "done": false } Create a backtest result Backtest prediction uses the trained model on existing historical data.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method DELETE -Headers $headers -Uri "https://financialservices.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /instances/my-instance/models/my-model" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT ID /locations/ LOCATION /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.financialservices.v1.OperationMetadata", "createTime": CREATE TIME , "target": "projects/ PROJECT ID /locations/ LOCATION /instances/my-instance/models/my-model", "verb": "delete", "requestedCancellation": false, "apiVersion": "v1" }, "done": false } Delete the engine config To delete an engine config, use the projects.locations.instances.engineConfigs.delete method.

### AML AI glossary \_|\_ Anti Money Laundering AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/concepts/glossary](https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/concepts/glossary)
- Source ID: `site-iam-reference`
- Final score: 122
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- A significant change in Missingness for any feature family between tuning, training, evaluation, and prediction can indicate inconsistency in the datasets used. model An AML AI Model resource (also known as a "model") represents a trained model that can be used to generate risk scores and explainability. mutable entity AML AI needs to be able to recreate views of the data at different points in time for tuning, training, and backtesting.
- Example versions include: aml-retail.default.v004.008.202411-001 aml-commercial.default.v004.008.202411-001 For more information on managing engine versions, see Manage engine versions . evaluation See also backtesting . explainability AML AI models are used to identify parties exhibiting behaviors or characteristics with high risk for money laundering.
- See the RiskCaseEvent table. risk investigation data Risk investigation data is used by AML AI to understand your risk investigation process and outcomes and to generate training labels. risk score AML AI models are used to identify parties exhibiting behaviors or characteristics with high risk for money laundering.
- For more information, see Configure an engine . engine version An AML AI EngineVersion resource (also known as an "engine version") defines aspects of how AML AI detects risk, which encompasses model tuning, training, and evaluation, as well as the overall AML data model and feature families.

### AML input data model \_|\_ Anti Money Laundering AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/schemas/aml-input-data-model](https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/schemas/aml-input-data-model)
- Source ID: `site-docs-root`
- Final score: 116
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Purpose for AML : Creation of training labels for training, tuning, and backtesting of models Understanding previously identified money laundering risk Scope : includes all AML investigation-related events related to a risk case and party for which the AML PROCESS START (start of investigation) occurs within the required time range Note : This time period can include events with an event time after the dataset dateRange , in order to create more complete labels for model training and evaluation.
- Purpose for AML : helps the models understand the flow of money Scope : All transactions into or out of accounts in the AccountPartyLink table at any point in the required time range for the Transaction table Transactions between two accounts in the AccountPartyLink table require a pair of rows in the Transaction table with separate values for the transaction id field, one with a direction of DEBIT and one with a direction of CREDIT .
- Best practice : Use the date of the move, however, not knowing when the bank received this information introduces some risk of leakage and overfitting in AML models.
- This allows the system to use data that accurately represents the bank's records to train models, based on the time of the events used for model training.

