---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.171Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "gcloud ai customs-jobs local-run command"
feature_slug: "gcloud-ai-customs-jobs-local-run-command"
latest_feature_date: "2021-11-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores"
  - "https://docs.cloud.google.com/vertex-ai/docs/general/cmek"
  - "https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featureview"
keywords:
  - "gcloud"
  - "ai"
  - "customs"
  - "jobs"
  - "local"
  - "run"
  - "command"
  - "now"
---

# gcloud ai customs-jobs local-run command

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

The `gcloud ai customs-jobs local-run` command is now generally available for containerizing and running custom training code locally.

## Extended Definition

The `gcloud ai customs-jobs local-run` command is now generally available for containerizing and running custom training code locally.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores](https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores)
- [https://docs.cloud.google.com/vertex-ai/docs/general/cmek](https://docs.cloud.google.com/vertex-ai/docs/general/cmek)
- [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featureview](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featureview)

## Supporting Pages

### Manage featurestores \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores](https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores)
- Source ID: `site-docs-reference-3`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https:// LOCATION ID -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION ID /featurestores" Select-Object -Expand Content You should receive a JSON response similar to the following: { "featurestores": [ { "name": "projects/ PROJECT NUMBER /locations/ LOCATION ID /featurestores/test", "createTime": "2021-02-26T00:44:44.216805Z", "updateTime": "2021-02-26T00:44:44.364916Z", "etag": "AMEw9yNL0s7qZh8lZVZ5T3BEuhoEgFR7JmjbbCSAkRZjeKDXkkIYnxxA4POe5BWT8cCn", "labels": { "environment": "testing" }, "onlineServingConfig": { "fixedNodeCount": 2 }, "state": "STABLE" }, { "name": "projects/ PROJECT NUMBER /locations/ LOCATION ID /featurestores/featurestore demo", "createTime": "2021-02-25T00:39:40.598781Z", "updateTime": "2021-02-25T00:39:40.744038Z", "etag": "AMEw9yO e0vm-9W yeCz4rJm-XnnEMYQ-vQesevxya sz-FckuysnDwo3cEXHdWWSeda", "labels": { "environment": "testing" }, "onlineServingConfig": { "fixedNodeCount": 3 }, "state": "STABLE" } ] } Java Before trying this sample, follow the Java setup instructions in the Vertex AI quickstart using client libraries .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method DELETE -Headers $headers -Uri "https:// LOCATION ID -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION ID /featurestores/ FEATURESTORE ID ?force= BOOLEAN " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT NUMBER /locations/ LOCATION ID /operations/ OPERATIONS ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.aiplatform.v1.DeleteOperationMetadata", "genericMetadata": { "createTime": "2021-05-03T17:50:21.813112Z", "updateTime": "2021-05-03T17:50:21.813112Z" } }, "done": true, "response": { "@type": "type.googleapis.com/google.protobuf.Empty" } } Python To learn how to install or update the Vertex AI SDK for Python, see Install the Vertex AI SDK for Python .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https:// LOCATION ID -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION ID /featurestores/ FEATURESTORE ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT NUMBER /locations/ LOCATION ID /featurestores/ FEATURESTORE ID ", "createTime": "2021-02-25T00:39:40.598781Z", "updateTime": "2021-02-25T00:39:40.744038Z", "etag": "AMEw9yNy b4IaMIvw1803ZT38cpUtjfwlyLkR709oBCY6pQrm6dHophLcqhrvsNqkQQZ", "onlineServingConfig": { "fixedNodeCount": 3 }, "state": "STABLE" } Java Before trying this sample, follow the Java setup instructions in the Vertex AI quickstart using client libraries .
- HTTP method and URL: POST https:// LOCATION ID -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION ID /featurestores?featurestoreId= FEATURESTORE ID Request JSON body: { "online serving config": { "fixed node count": 1 }, "encryption spec":{ "kms key name": "projects/ CMEK PROJECT /locations/ LOCATION ID /keyRings/ KEY RING /cryptoKeys/ KEY NAME " } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### Create a feature view instance \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featureview](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featureview)
- Source ID: `site-docs-reference-3`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https:// LOCATION ID -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION ID /featureOnlineStores/ FEATUREONLINESTORE NAME /featureViews?feature view id= FEATUREVIEW NAME " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT NUMBER /locations/ LOCATION ID /featureOnlineStores/ FEATUREONLINESTORE NAME /featureViews/ FEATUREVIEW NAME /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.aiplatform.v1.CreateFeatureViewOperationMetadata", "genericMetadata": { "createTime": "2023-09-15T02:11:29.458820Z", "updateTime": "2023-09-15T02:11:29.458820Z" } } } Create a feature view with a dedicated service account and without embedding management Use the following sample to create a feature view without embedding support by directly associating a BigQuery data source and specifying a service account configuration.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https:// LOCATION ID -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION ID /featureOnlineStores/ FEATUREONLINESTORE NAME /featureViews?feature view id= FEATUREVIEW NAME " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT NUMBER /locations/ LOCATION ID /featureOnlineStores/ FEATUREONLINESTORE NAME /featureViews/ FEATUREVIEW NAME /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.aiplatform.v1.CreateFeatureViewOperationMetadata", "genericMetadata": { "createTime": "2023-09-15T02:11:29.458820Z", "updateTime": "2023-09-15T02:11:29.458820Z" } } } Create a feature view that uses the default service account and supports embeddings Use the following samples to create a feature view with embedding support by directly associating a BigQuery data source and with the default service account configuration.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https:// LOCATION ID -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION ID /featureOnlineStores/ FEATUREONLINESTORE NAME /featureViews?feature view id= FEATUREVIEW NAME " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT NUMBER /locations/ LOCATION ID /featureOnlineStores/ FEATUREONLINESTORE NAME /featureViews/ FEATUREVIEW NAME /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.aiplatform.v1.CreateFeatureViewOperationMetadata", "genericMetadata": { "createTime": "2023-09-15T02:11:29.458820Z", "updateTime": "2023-09-15T02:11:29.458820Z" } } } Create a feature view with embedding management and a dedicated service account Use the following sample to create a feature view with embedding support by directly associating a BigQuery data source and specifying a service account configuration.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https:// LOCATION ID -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION ID /featureOnlineStores/ FEATUREONLINESTORE NAME /featureViews?feature view id= FEATUREVIEW NAME " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT NUMBER /locations/ LOCATION ID /featureOnlineStores/ FEATUREONLINESTORE NAME /featureViews/ FEATUREVIEW NAME /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.aiplatform.v1.CreateFeatureViewOperationMetadata", "genericMetadata": { "createTime": "2023-09-15T02:11:29.458820Z", "updateTime": "2023-09-15T02:11:29.458820Z" } } } Create a feature view from a BigQuery source If you want to serve features online without registering your BigQuery data source using feature groups and features, you can create a feature view by specifying the URI of the BigQuery data source.

### "Customer-managed encryption keys (CMEK) \_|\_ Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/general/cmek](https://docs.cloud.google.com/vertex-ai/docs/general/cmek)
- Source ID: `site-docs-reference-3`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- Click Save . gcloud Run the following command: gcloud kms keys add-iam-policy-binding KEY NAME \ --keyring = KEY RING NAME \ --location = REGION \ --project = KMS PROJECT ID \ --member = serviceAccount:service- AI PLATFORM PROJECT NUMBER @gcp-sa-aiplatform.iam.gserviceaccount.com \ --role = roles/cloudkms.cryptoKeyEncrypterDecrypter In this command, replace the following placeholders: KEY NAME : The name of the key that you created in a preceding section of this guide .
- After installation, initialize the Google Cloud CLI by running the following command: gcloud init If you're using an external identity provider (IdP), you must first sign in to the gcloud CLI with your federated identity .
- CMEK for Vertex AI resources The following sections describe basic information about CMEK for Vertex AI resources that you must understand before configuring CMEK for your jobs.
- In addition, some training jobs export trained model artifacts (for example, a TensorFlow SaveModel directory) to a Cloud Storage bucket as part of their output.

