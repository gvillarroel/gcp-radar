---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.081Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Vertex AI Feature Store Dataplex metadata integration"
feature_slug: "vertex-ai-feature-store-dataplex-metadata-integration"
latest_feature_date: "2024-03-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/search-feature-metadata"
  - "https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores"
  - "https://docs.cloud.google.com/vertex-ai/docs/ml-metadata/ml-metadata-notebook-tutorials"
keywords:
  - "vertex"
  - "ai"
  - "feature"
  - "store"
  - "dataplex"
  - "metadata"
  - "integration"
  - "registers"
---

# Vertex AI Feature Store Dataplex metadata integration

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Registers Feature Store online store instances, feature views, and feature groups as Data Catalog assets so Dataplex metadata search can find and inspect them.

## Extended Definition

Registers Feature Store online store instances, feature views, and feature groups as Data Catalog assets so Dataplex metadata search can find and inspect them.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/search-feature-metadata](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/search-feature-metadata)
- [https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores](https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores)
- [https://docs.cloud.google.com/vertex-ai/docs/ml-metadata/ml-metadata-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/ml-metadata/ml-metadata-notebook-tutorials)

## Supporting Pages

### Manage featurestores \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores](https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores)
- Source ID: `site-docs-reference-3`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method DELETE -Headers $headers -Uri "https:// LOCATION ID -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION ID /featurestores/ FEATURESTORE ID ?force= BOOLEAN " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT NUMBER /locations/ LOCATION ID /operations/ OPERATIONS ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.aiplatform.v1.DeleteOperationMetadata", "genericMetadata": { "createTime": "2021-05-03T17:50:21.813112Z", "updateTime": "2021-05-03T17:50:21.813112Z" } }, "done": true, "response": { "@type": "type.googleapis.com/google.protobuf.Empty" } } Python To learn how to install or update the Vertex AI SDK for Python, see Install the Vertex AI SDK for Python .
- You can use the OPERATION ID in the response to get the status of the operation. { "name": "projects/ PROJECT NUMBER /locations/ LOCATION ID /featurestores/ FEATURESTORE ID /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.aiplatform.v1.UpdateFeaturestoreOperationMetadata", "genericMetadata": { "createTime": "2021-03-18T21:12:08.373664Z", "updateTime": "2021-03-18T21:12:08.373664Z" } } } Java Before trying this sample, follow the Java setup instructions in the Vertex AI quickstart using client libraries .
- You can use the OPERATION ID in the response to get the status of the operation. { "name": "projects/ PROJECT NUMBER /locations/ LOCATION ID /featurestores/ FEATURESTORE ID /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.aiplatform.v1.CreateFeaturestoreOperationMetadata", "genericMetadata": { "createTime": "2021-02-26T00:44:40.722474Z", "updateTime": "2021-02-26T00:44:40.722474Z" } } } Python To learn how to install or update the Vertex AI SDK for Python, see Install the Vertex AI SDK for Python .
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample.\ (Not necessary if passing values as arguments) / // const project = 'YOUR PROJECT ID'; // const featurestoreId = 'YOUR FEATURESTORE ID'; // const minNodeCount = <MINIMUM NO OF NODES>; // const maxNodeCount = <MAXIMUM NO OF NODES>; // const location = 'YOUR PROJECT LOCATION'; // const apiEndpoint = 'YOUR API ENDPOINT'; // const timeout = <TIMEOUT IN MILLI SECONDS>; // Imports the Google Cloud Featurestore Service Client library const { FeaturestoreServiceClient } = require ( ' @google-cloud/aiplatform ' ). v1beta1 ; // Specifies the location of the api endpoint const clientOptions = { apiEndpoint : apiEndpoint , }; // Instantiates a client const featurestoreServiceClient = new FeaturestoreServiceClient ( clientOptions ); async function updateFeaturestore () { // Configure the parent resource const parent = projects/ ${ project } /locations/ ${ location } /featurestores/ ${ featurestoreId } ; const featurestore = { name : parent , onlineServingConfig : { scaling : { minNodeCount : minNodeCount , maxNodeCount : maxNodeCount , }, }, }; const request = { featurestore : featurestore , }; // Update Featurestore request const [ operation ] = await featurestoreServiceClient . updateFeaturestore ( request , { timeout : Number ( timeout )} ); const [ response ] = await operation . promise (); console . log ( 'Update featurestore response' ); console . log ( Name : ${ response . name } ); console . log ( 'Raw response:' ); console . log ( JSON . stringify ( response , null , 2 )); } updateFeaturestore (); Additional languages To learn how to install and use the Vertex AI SDK for Python, see Use the Vertex AI SDK for Python .

### "Search for resource metadata in Data Catalog \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/search-feature-metadata](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/search-feature-metadata)
- Source ID: `site-docs-reference-3`
- Final score: 148
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Data Catalog catalogs metadata from Vertex AI Feature Store resources.
- The following Vertex AI Feature Store resources are categorized as data types in the Knowledge Catalog search filter: FeatureOnlineStore FeatureView Note: If your project name contains : , Knowledge Catalog catalogs FeatureOnlineStore resources, but doesn't catalog FeatureView and Feature resources created in the project.
- IAM permissions required Using the Knowledge Catalog search, you can view Vertex AI Feature Store resources if you have the IAM permissions to view those Vertex AI Feature Store resources in your Google Cloud project.
- View metadata for an online store To search for a FeatureOnlineStore resource, follow these steps: Console To launch a search query in the Google Cloud console, go to the Knowledge Catalog Search page.

### "Vertex ML Metadata notebook tutorials \_|\_ Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/ml-metadata/ml-metadata-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/ml-metadata/ml-metadata-notebook-tutorials)
- Source ID: `site-docs-reference-2`
- Final score: 145
- Re-rank relevance: N/A

Evidence snippets:
- List of notebooks Select a service AutoML BigQuery BigQuery ML Custom training Image Ray on Vertex AI Tabular Text Vector Search Vertex AI Experiments Vertex AI Feature Store Vertex AI Inference Vertex AI model evaluation Vertex AI Model Monitoring Vertex AI Model Registry Vertex AI Pipelines Vertex AI TensorBoard Vertex AI Vizier Vertex AI Workbench Vertex Explainable AI Vertex ML Metadata Services Description Open in Classification for tabular data AutoML tabular training and prediction .
- Tutorial steps Build and train a TensorFlow text classification model Upload model for deployment Deploy model for online prediction Make online prediction with explanations Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Feature Store Online feature serving and fetching of BigQuery data with Vertex AI Feature Store .
- Learn how to create and use an online feature store instance to host and serve data in BigQuery with Vertex AI Feature Store in an end to end workflow of features serving and vector retrieval user journey.
- Learn how to create and use an online feature store instance to host and serve data in BigQuery with Vertex AI Feature Store in an end to end workflow of features serving and vector retrieval user journey.

