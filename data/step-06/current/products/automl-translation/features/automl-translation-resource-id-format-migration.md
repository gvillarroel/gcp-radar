---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:52:53.932Z"
product_name: "AutoML Translation"
product_slug: "automl-translation"
feature_name: "AutoML Translation resource ID format migration"
feature_slug: "automl-translation-resource-id-format-migration"
latest_feature_date: "2018-07-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/translate/docs/advanced/automl-upgrade"
  - "https://docs.cloud.google.com/translate/docs/advanced/custom-translation-quickstart"
  - "https://docs.cloud.google.com/translate/docs/advanced/custom-nmt-datasets"
keywords:
  - "migration"
  - "resource"
  - "changed"
  - "format"
  - "id"
  - "dataset"
  - "translation"
  - "automl"
---

# AutoML Translation resource ID format migration

Product: AutoML Translation
Coverage: LOW

## Step 02 Summary

AutoML Translation changed dataset, model, and operation ID formats, requiring hardcoded resource IDs to be refreshed using get/list operations.

## Extended Definition

AutoML Translation changed dataset, model, and operation ID formats, requiring hardcoded resource IDs to be refreshed using get/list operations.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/translate/docs/advanced/automl-upgrade](https://docs.cloud.google.com/translate/docs/advanced/automl-upgrade)
- [https://docs.cloud.google.com/translate/docs/advanced/custom-translation-quickstart](https://docs.cloud.google.com/translate/docs/advanced/custom-translation-quickstart)
- [https://docs.cloud.google.com/translate/docs/advanced/custom-nmt-datasets](https://docs.cloud.google.com/translate/docs/advanced/custom-nmt-datasets)

## Supporting Pages

### Upgrade AutoML resources \_|\_ Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/advanced/automl-upgrade](https://docs.cloud.google.com/translate/docs/advanced/automl-upgrade)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Model evaluation Supports running evaluations against a new test set or from an existing dataset Supports running evaluations against a new test set only Cancel operations Supports canceling dataset import and model creation operations You cannot cancel long-running operations Google Cloud console behavior post upgrade If you upgrade at least one resource, the Google Cloud console switches to using the Cloud Translation API instead of the deprecated AutoML API.
- For example, if you have commands that call the deprecated AutoML API and reference legacy resource IDs, you need to update those commands to call the Cloud Translation API and reference the native resource IDs.
- During the upgrade, Cloud Translation copies your AutoML (legacy) resources, such as datasets and models, and creates new Cloud Translation (native) resources through the Cloud Translation API.
- For more information about the Cloud Translation API, see the projects.locations.datasets and projects.locations.models resources.

### "Create a custom translation model \_|\_ Cloud Translation \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/translate/docs/advanced/custom-translation-quickstart](https://docs.cloud.google.com/translate/docs/advanced/custom-translation-quickstart)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Before you begin Before you can start using AutoML Translation, your project must have the Cloud Translation API enabled, and you must have the permissions that are granted by the following roles: Viewer role to view existing resources in your project Cloud Translation API Editor role to create and manage datasets and models Storage Admin role to upload training data to a Cloud Storage bucket Create a translation dataset and import segment pairs Download the archive file that contains the sample data for training the model, and extract the files.
- The following example uses AutoML Translation to train an English-to-Spanish translation model by using a dataset that contains technology-oriented segment pairs from software localization.
- Note: The following tutorial assumes that, for your project, the Google Cloud console is using the Cloud Translation API instead of the AutoML API to create datasets.
- This condition is true if you have at least one native Cloud Translation resource or no legacy AutoML resources in your project.

### Create and manage datasets \_|\_ Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/advanced/custom-nmt-datasets](https://docs.cloud.google.com/translate/docs/advanced/custom-nmt-datasets)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT ID " } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://translation.googleapis.com/v3/projects/ PROJECT ID /locations/ LOCATION /datasets" Select-Object -Expand Content You should receive a JSON response similar to the following: { "datasets": [ { "name": "projects/ PROJECT NUMBER /locations/us-central1/datasets/ DATASET ID ", "displayName": " DATASET NAME ", "sourceLanguageCode": " SOURCE LANG CODE ", "targetLanguageCode": " TARGET LANG CODE ", "exampleCount": 8720, "createTime": "2022-10-19T23:24:34.734549Z", "updateTime": "2022-10-19T23:24:35.357525Z" }, ... ] } Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Cloud Translation reference documentation for .NET.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://translation.googleapis.com/v3/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID :importData" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT NUMBER /locations/ LOCATION /operations/ OPERATION ID " } Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Cloud Translation reference documentation for .NET.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://translation.googleapis.com/v3/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID :exportData" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT NUMBER /locations/ LOCATION /operations/ OPERATION ID " } Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Cloud Translation reference documentation for .NET.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT ID " } Invoke-WebRequest -Method DELETE -Headers $headers ` -Uri "https://translation.googleapis.com/v3/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT NUMBER /locations/ LOCATION /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.translation.v3.DeleteDatasetMetadata" }, "done": true } Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Cloud Translation reference documentation for .NET.

