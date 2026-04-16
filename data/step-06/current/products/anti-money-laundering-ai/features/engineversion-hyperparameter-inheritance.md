---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:08:22.045Z"
product_name: "Anti Money Laundering AI"
product_slug: "anti-money-laundering-ai"
feature_name: "EngineVersion hyperparameter inheritance"
feature_slug: "engineversion-hyperparameter-inheritance"
latest_feature_date: "2024-03-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/train-models-to-detect-money-laundering"
  - "https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/rest/v1/projects.locations.instances.engineConfigs"
  - "https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/engine-versions"
keywords:
  - "hyperparameter"
  - "engineversions"
  - "engineversion"
  - "inheritance"
  - "including"
  - "allows"
  - "v003"
  - "v004"
---

# EngineVersion hyperparameter inheritance

Product: Anti Money Laundering AI
Coverage: MEDIUM

## Step 02 Summary

Allows new EngineVersions (including v003 and v004) to inherit hyperparameters from an existing EngineVersion configuration, enabling faster setup without additional tuning costs.

## Extended Definition

Allows new EngineVersions (including v003 and v004) to inherit hyperparameters from an existing EngineVersion configuration, enabling faster setup without additional tuning costs.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/train-models-to-detect-money-laundering](https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/train-models-to-detect-money-laundering)
- [https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/rest/v1/projects.locations.instances.engineConfigs](https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/rest/v1/projects.locations.instances.engineConfigs)
- [https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/engine-versions](https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/engine-versions)

## Supporting Pages

### "Train and test models designed to detect money laundering \_|\_ Anti Money\

- URL: [https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/train-models-to-detect-money-laundering](https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/train-models-to-detect-money-laundering)
- Source ID: `site-docs-root`
- Final score: 82
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Run the following command in the terminal to create or overwrite this file in the current directory: @' { "engineVersion": "projects/ PROJECT ID /locations/ LOCATION /instances/my-instance/engineVersions/aml-commercial.default.v004.008.202411-001", "tuning": { "primaryDataset": "projects/ PROJECT ID /locations/ LOCATION /instances/my-instance/datasets/my-dataset", "endTime": "2021-07-01T00:00:00Z" }, "performanceTarget": { "partyInvestigationsPerPeriodHint": "30" } } '@ Out-File -FilePath request.json -Encoding utf8 Then execute the following command to send your REST request: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://financialservices.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /instances/my-instance/engineConfigs?engine config id=my-engine-config" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT ID /locations/ LOCATION /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.financialservices.v1.OperationMetadata", "createTime": CREATE TIME , "target": "projects/ PROJECT ID /locations/ LOCATION /instances/my-instance/engineConfigs/my-engine-config", "verb": "create", "requestedCancellation": false, "apiVersion": "v1" }, "done": false } Create a model In this step, you train an AML AI model by using 12 months of data leading up to 2021-07-01.
- Run the following command in the terminal to create or overwrite this file in the current directory: cat > request.json PROJECT ID /locations/ LOCATION /instances/my-instance/engineVersions/aml-commercial.default.v004.008.202411-001", "tuning": { "primaryDataset": "projects/ PROJECT ID /locations/ LOCATION /instances/my-instance/datasets/my-dataset", "endTime": "2021-07-01T00:00:00Z" }, "performanceTarget": { "partyInvestigationsPerPeriodHint": "30" } } EOF Then execute the following command to send your REST request: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://financialservices.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /instances/my-instance/engineConfigs?engine config id=my-engine-config" PowerShell Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .
- Request JSON body: { "engineVersion": "projects/ PROJECT ID /locations/ LOCATION /instances/my-instance/engineVersions/aml-commercial.default.v004.008.202411-001", "tuning": { "primaryDataset": "projects/ PROJECT ID /locations/ LOCATION /instances/my-instance/datasets/my-dataset", "endTime": "2021-07-01T00:00:00Z" }, "performanceTarget": { "partyInvestigationsPerPeriodHint": "30" } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Run the following command in the terminal to create or overwrite this file in the current directory: @' { "tableSpecs": { "party": "bq:// PROJECT ID .my bq input dataset.party", "account party link": "bq:// PROJECT ID .my bq input dataset.account party link", "transaction": "bq:// PROJECT ID .my bq input dataset.transaction", "risk case event": "bq:// PROJECT ID .my bq input dataset.risk case event", "party supplementary data": "bq:// PROJECT ID .my bq input dataset.party supplementary data" }, "dateRange": { "startTime": "2020-01-01T00:00:0.00Z", "endTime": "2023-01-01T00:00:0.00Z" }, "timeZone": { "id": "UTC" } } '@ Out-File -FilePath request.json -Encoding utf8 Then execute the following command to send your REST request: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://financialservices.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /instances/my-instance/datasets?dataset id=my-dataset" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT ID /locations/ LOCATION /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.financialservices.v1.OperationMetadata", "createTime": CREATE TIME , "target": "projects/ PROJECT ID /locations/ LOCATION /instances/my-instance/datasets/my-dataset", "verb": "create", "requestedCancellation": false, "apiVersion": "v1" }, "done": false } You can check for the result of the operation using the new operation ID. (You can do this for the remaining API requests used in this guide.) Create an engine config Create an AML AI engine config to automatically tune hyperparameters based on a given engine version and the data provided.

### "REST Resource: projects.locations.instances.engineConfigs \_|\_ Anti Money\

- URL: [https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/rest/v1/projects.locations.instances.engineConfigs](https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/rest/v1/projects.locations.instances.engineConfigs)
- Source ID: `site-api-reference`
- Final score: 70
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- JSON representation { "name" : string , "createTime" : string , "updateTime" : string , "labels" : { string : string , ... } , "state" : enum ( State ) , "engineVersion" : string , "tuning" : { object ( Tuning ) } , "performanceTarget" : { object ( PerformanceTarget ) } , "lineOfBusiness" : enum ( LineOfBusiness ) , "hyperparameterSourceType" : enum ( HyperparameterSourceType ) , "hyperparameterSource" : { object ( HyperparameterSource ) } , "satisfiesPzi" : boolean , "satisfiesPzs" : boolean } Fields name string Output only.
- Format: /projects/{project num}/locations/{location}/instances/{instance}/engineVersions/{engineVersion} Methods create Creates an engine config. delete Deletes an engine config. exportMetadata Export governance information for an EngineConfig resource. get Gets an engine config. list Lists engine configs. patch Updates the parameters of a single EngineConfig.
- The resource name of the EngineVersion used in this model tuning. format: /projects/{project num}/locations/{location}/instances/{instance}/engineVersions/{engineVersion} tuning object ( Tuning ) Optional.
- Determined by EngineVersion, cannot be set by user. hyperparameterSourceType enum ( HyperparameterSourceType ) Optional.

### Engine versions \_|\_ Anti Money Laundering AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/engine-versions](https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/engine-versions)
- Source ID: `site-api-reference`
- Final score: 63
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- April 25, 2024 LIMITED 000 (DEPRECATED) 202401-001 More reliable tuning performance, in particular for small datasets March 13, 2024 LIMITED 202401-000 Adds feature family Importance metric to the model metadata March 12, 2024 DECOMMISSIONED 202312-001 Improves usability of party supplementary data by allowing use of human readable party supplementary data IDs Adds support for inheriting hyperparameters instead of re-tuning March 1, 2024 DECOMMISSIONED 202312-000 Supports datasets containing up to 130 million parties Performance neutral versus the previous version December 1, 2023 LIMITED v003 000 202502-000 Fixes a known issue where prediction results may occasionally contain duplicate entries April 10, 2025 ACTIVE 202312-000 Improves usability of party supplementary data by allowing use of human readable party supplementary data IDs Adds support for inheriting hyperparameters instead of re-tuning March 1, 2024 LIMITED 202311-000 Supports datasets containing up to 20 million parties V003 adds improved labeling methodology versus previous versions November 15, 2023 LIMITED Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- April 25, 2024 LIMITED 000 (DEPRECATED) 202401-000 Adds feature family Importance metric to the model metadata March 12, 2024 LIMITED 202312-001 Improves usability of party supplementary data by allowing use of human readable party supplementary data IDs Adds support for inheriting hyperparameters instead of re-tuning March 1, 2024 DECOMMISSIONED 202312-000 Supports datasets containing up to 130 million parties Adds KYC and tenure features versus the previous version December 1, 2023 LIMITED v003 000 202502-000 Fixes a known issue where prediction results may occasionally contain duplicate entries April 10, 2025 ACTIVE 202312-000 Improves usability of party supplementary data by allowing use of human readable party supplementary data IDs Adds support for inheriting hyperparameters instead of re-tuning March 1, 2024 LIMITED 202311-000 Supports datasets containing up to 20 million parties V003 adds improved labeling methodology versus previous versions November 15, 2023 LIMITED aml-commercial.default This table lists the commercial-specific engine versions.
- Tuning Major Minor Description Release date Lifecycle stage v004 010 Latest version : 202603-000 Higher data validation threshold for number of accounts per party April 2, 2026 ACTIVE 202507-000 More reliable training performance when using optional enum input fields.
- Tuning Major Minor Description Release date Lifecycle stage v004 010 Latest version : 202507-000 More reliable training performance when using optional enum input fields.

