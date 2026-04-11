---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:52:53.931Z"
product_name: "AutoML Translation"
product_slug: "automl-translation"
feature_name: "AutoML Translation EAP-to-Beta model continuity"
feature_slug: "automl-translation-eap-to-beta-model-continuity"
latest_feature_date: "2018-07-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/translate/docs/advanced/custom-translation-quickstart"
  - "https://docs.cloud.google.com/translate/docs/advanced/automl-upgrade"
  - "https://docs.cloud.google.com/translate/docs/advanced/custom-nmt-models"
keywords:
  - "continuity"
  - "preserves"
  - "beta"
  - "eap"
  - "to"
  - "translation"
  - "model"
  - "automl"
---

# AutoML Translation EAP-to-Beta model continuity

Product: AutoML Translation
Coverage: LOW

## Step 02 Summary

AutoML Translation preserves models created during EAP so they remain valid when moving into the Beta phase without retraining.

## Extended Definition

AutoML Translation preserves models created during EAP so they remain valid when moving into the Beta phase without retraining.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/translate/docs/advanced/custom-translation-quickstart](https://docs.cloud.google.com/translate/docs/advanced/custom-translation-quickstart)
- [https://docs.cloud.google.com/translate/docs/advanced/automl-upgrade](https://docs.cloud.google.com/translate/docs/advanced/automl-upgrade)
- [https://docs.cloud.google.com/translate/docs/advanced/custom-nmt-models](https://docs.cloud.google.com/translate/docs/advanced/custom-nmt-models)

## Supporting Pages

### "Create a custom translation model \_|\_ Cloud Translation \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/translate/docs/advanced/custom-translation-quickstart](https://docs.cloud.google.com/translate/docs/advanced/custom-translation-quickstart)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Before you begin Before you can start using AutoML Translation, your project must have the Cloud Translation API enabled, and you must have the permissions that are granted by the following roles: Viewer role to view existing resources in your project Cloud Translation API Editor role to create and manage datasets and models Storage Admin role to upload training data to a Cloud Storage bucket Create a translation dataset and import segment pairs Download the archive file that contains the sample data for training the model, and extract the files.
- The following example uses AutoML Translation to train an English-to-Spanish translation model by using a dataset that contains technology-oriented segment pairs from software localization.
- Train a model Go to the AutoML Translation console.
- Note: The following tutorial assumes that, for your project, the Google Cloud console is using the Cloud Translation API instead of the AutoML API to create datasets.

### Upgrade AutoML resources \_|\_ Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/advanced/automl-upgrade](https://docs.cloud.google.com/translate/docs/advanced/automl-upgrade)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Model evaluation Supports running evaluations against a new test set or from an existing dataset Supports running evaluations against a new test set only Cancel operations Supports canceling dataset import and model creation operations You cannot cancel long-running operations Google Cloud console behavior post upgrade If you upgrade at least one resource, the Google Cloud console switches to using the Cloud Translation API instead of the deprecated AutoML API.
- During the upgrade, Cloud Translation copies your AutoML (legacy) resources, such as datasets and models, and creates new Cloud Translation (native) resources through the Cloud Translation API.
- Upgrade AutoML resources If you have existing resources that were created by using the deprecated AutoML API, you can upgrade those resources to manage them through the Cloud Translation - Advanced API without any service interruptions or additional costs.
- For example, if you have commands that call the deprecated AutoML API and reference legacy resource IDs, you need to update those commands to call the Cloud Translation API and reference the native resource IDs.

### Create and manage models \_|\_ Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/advanced/custom-nmt-models](https://docs.cloud.google.com/translate/docs/advanced/custom-nmt-models)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT ID " } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://translation.googleapis.com/v3/projects/ PROJECT ID /locations/ LOCATION /models" Select-Object -Expand Content You should receive a JSON response similar to the following: { "models": [ { "name": "projects/ PROJECT NUMBER /locations/us-central1/models/ MODEL ID ", "displayName": " MODEL DISPLAY NAME ", "dataset": "projects/ PROJECT NUMBER /locations/us-central1/datasets/ DATASET ID " "sourceLanguageCode": " SOURCE LANG CODE ", "targetLanguageCode": " TARGET LANG CODE ", "trainExampleCount": NUM TRAINING SEGMENTS , "validateExampleCount": NUM VALIDATION SEGMENTS , "createTime": "2022-12-02T21:53:26.788521838Z", "updateTime": "2022-12-03T00:42:27.946594016Z" }, ... ] } Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Cloud Translation reference documentation for .NET.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT ID " } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://translation.googleapis.com/v3/projects/ PROJECT ID /locations/ LOCATION /models/ MODEL ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT NUMBER /locations/us-central1/models/ MODEL ID ", "displayName": " MODEL DISPLAY NAME ", "dataset": "projects/ PROJECT NUMBER /locations/us-central1/datasets/ DATASET ID " "sourceLanguageCode": " SOURCE LANG CODE ", "targetLanguageCode": " TARGET LANG CODE ", "trainExampleCount": NUM TRAINING SEGMENTS , "validateExampleCount": NUM VALIDATION SEGMENTS , "createTime": "2022-12-02T21:53:26.788521838Z", "updateTime": "2022-12-03T00:42:27.946594016Z" } Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Cloud Translation reference documentation for .NET.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://translation.googleapis.com/v3/projects/ PROJECT ID /locations/ LOCATION /models" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT NUMBER /locations/ LOCATION /operations/ OPERATION ID " } Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Cloud Translation reference documentation for .NET.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT ID " } Invoke-WebRequest -Method DELETE -Headers $headers ` -Uri "https://translation.googleapis.com/v3/projects/ PROJECT ID /locations/ LOCATION /models/ MODEL ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT NUMBER /locations/ LOCATION /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.translation.v3.DeleteModelMetadata" }, "done": true } Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Cloud Translation reference documentation for .NET.

