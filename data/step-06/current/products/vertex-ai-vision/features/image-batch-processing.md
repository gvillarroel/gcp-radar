---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T21:22:59.248Z"
product_name: "Vertex AI Vision"
product_slug: "vertex-ai-vision"
feature_name: "Image batch processing"
feature_slug: "image-batch-processing"
latest_feature_date: "2023-05-26"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/vision-ai/docs/batch-image"
  - "https://docs.cloud.google.com/vision-ai/docs/release-notes"
  - "https://docs.cloud.google.com/vision-ai/docs/batch-video-warehouse-search"
  - "https://docs.cloud.google.com/vision-ai/docs/reference/cpp/struct/visionai/service-connection-options"
keywords:
  - "image"
  - "batch"
  - "processing"
  - "vertex"
  - "ai"
  - "vision"
  - "introduced"
  - "preview"
---

# Image batch processing

Product: Vertex AI Vision
Coverage: LOW

## Step 02 Summary

Vertex AI Vision introduced a preview batch image processing feature that accepts a Cloud Storage input path of images and writes processed batch results to a Cloud Storage output path.

## Extended Definition

Vertex AI Vision introduced a preview batch image processing feature that accepts a Cloud Storage input path of images and writes processed batch results to a Cloud Storage output path.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/vision-ai/docs/batch-image](https://docs.cloud.google.com/vision-ai/docs/batch-image)
- [https://docs.cloud.google.com/vision-ai/docs/release-notes](https://docs.cloud.google.com/vision-ai/docs/release-notes)
- [https://docs.cloud.google.com/vision-ai/docs/batch-video-warehouse-search](https://docs.cloud.google.com/vision-ai/docs/batch-video-warehouse-search)
- [https://docs.cloud.google.com/vision-ai/docs/reference/cpp/struct/visionai/service-connection-options](https://docs.cloud.google.com/vision-ai/docs/reference/cpp/struct/visionai/service-connection-options)

## Supporting Pages

### Image batch processing \_|\_ Vertex AI Vision \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vision-ai/docs/batch-image](https://docs.cloud.google.com/vision-ai/docs/batch-image)
- Source ID: `site-docs-reference`
- Final score: 280
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation AI and ML Vertex AI Vision Guides Send feedback Image batch processing Stay organized with collections Save and categorize content based on your preferences.
- User journey To batch process image data, complete the following general steps: Enable the Vertex AI Vision API.
- Request body ( instances.json ): { "applicationInstances" : [ { "instance" : { "instanceType" : "BATCH PREDICTION" , "inputResources" : [ { "consumerNode" : "universal-input-0" , "dataType" : "IMAGE" , "inputResource" : " gs://product recognition input " } ] }, "instanceId" : " instance1 " }, { "instance" : { "instanceType" : "BATCH PREDICTION" , "inputResources" : [ { "consumerNode" : "universal-input-0" , "dataType" : "IMAGE" , "inputResource" : " gs://product recognition input2 " } ] }, "instanceId" : " instance2 " } ] } Request: curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ -d @instances.json \ 'https://visionai.googleapis.com/v1alpha1/projects/ PROJECT ID /locations/ LOCATION ID /applications/ product-recognition-app :createApplicationInstances' Deploy the application. curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ -d '{}' \ 'https://visionai.googleapis.com/v1alpha1/projects/ PROJECT ID /locations/ LOCATION ID /applications/ product-recognition-app :deploy' Get app instances.
- Request body ( instances.json ): { "applicationInstances" : [ { "instance" : { "instanceType" : "BATCH PREDICTION" , "inputResources" : [ { "consumerNode" : "universal-input-0" , "dataType" : "IMAGE" , "inputResource" : " gs://tag recognition input " } ] }, "instanceId" : " instance1 " }, { "instance" : { "instanceType" : "BATCH PREDICTION" , "inputResources" : [ { "consumerNode" : "universal-input-0" , "dataType" : "IMAGE" , "inputResource" : " gs://tag recognition input2 " } ] }, "instanceId" : " instance2 " } ] } Request: curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ -d @instances.json \ 'https://visionai.googleapis.com/v1alpha1/projects/ PROJECT ID /locations/ LOCATION ID /applications/ tag-recognition-app :createApplicationInstances' Deploy the application. curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ -d '{}' \ 'https://visionai.googleapis.com/v1alpha1/projects/ PROJECT ID /locations/ LOCATION ID /applications/ tag-recognition-app :deploy' Get app instances.

### Vertex AI Vision release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vision-ai/docs/release-notes](https://docs.cloud.google.com/vision-ai/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 212
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For more information, see Vision Warehouse overview May 26, 2023 Feature Image batch processing now available as a Preview feature Vertex AI Vision now offers batch image processing as a Preview feature .
- November 15, 2023 Feature Batch video and image support in Vertex AI Vision Warehouse is Generally Available .
- March 22, 2023 Feature Model event management with Cloud Functions and Pub/Sub The Vertex AI Vision event management feature lets you generate and send event notifications through Pub/Sub topics by: Enabling supported models to output to Cloud Function for data processing and events generation.
- Vertex AI Vision Warehouse now supports semantic searches and similarity searches on video and images.

### "Search Batch Video Warehouse data \_|\_ Vertex AI Vision \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vision-ai/docs/batch-video-warehouse-search](https://docs.cloud.google.com/vision-ai/docs/batch-video-warehouse-search)
- Source ID: `site-docs-reference`
- Final score: 184
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation AI and ML Vertex AI Vision Guides Send feedback Search Batch Video Warehouse data Stay organized with collections Save and categorize content based on your preferences.
- Search Batch Video Warehouse data in the console Console Open the Warehouses tab of the Vertex AI Vision dashboard.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https:// warehouse-visionai.googleapis.com /v1/projects/ PROJECT NUMBER /locations/ LOCATION ID /indexEndpoints/ INDEX ENDPOINT ID :searchIndexEndpoint " Select-Object -Expand Content You should receive a JSON response similar to the following: { "searchResultItems": [ { "asset": "projects/ PROJECT NUMBER /locations/ LOCATION ID /corpora/ CORPUS ID /assets/ ASSET ID 1 " }, { "asset": "projects/ PROJECT NUMBER /locations/ LOCATION ID /corpora/ CORPUS ID /assets/ ASSET ID 2 " } ] } If you have an image of a sunset at a beach, you can also use it as a search query by sending the following request (input image is in base64 encoding format): REST & CMD LINE Before using any of the request data, make the following replacements: REGIONALIZED ENDPOINT : Endpoint might include a prefix matching the LOCATION ID such as europe-west4- .
- HTTP method and URL: POST https:// warehouse-visionai.googleapis.com /v1/projects/ PROJECT NUMBER /locations/ LOCATION ID /indexEndpoints/ INDEX ENDPOINT ID :searchIndexEndpoint Request JSON body: { "image query": { "input image": " IMAGE BYTES " }, "criteria": [ { "field": " state ", "text array": { "txt values": [ " California " ] } } ] } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### "visionai::ServiceConnectionOptions Struct Reference \_|\_ Vertex AI Vision\

- URL: [https://docs.cloud.google.com/vision-ai/docs/reference/cpp/struct/visionai/service-connection-options](https://docs.cloud.google.com/vision-ai/docs/reference/cpp/struct/visionai/service-connection-options)
- Source ID: `site-python-reference`
- Final score: 176
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Summary For example, if you have a Vision AI cluster created at visionai.googleapis.com/projects/my-project/locations/us-central1-a/clusters/my-cluster then you will set the following: service endpoint = "visionai.googleapis.com" project id = "my-project" location id = "us-central1-a" cluster id = "my-cluster" Public attributes cluster id std::string The specific cluster-id of Vertex AI Vision. location id std::string The Google Cloud location-id. project id std::string The Google Cloud project-id. service endpoint std::string The service endpoint of Vertex AI Vision.
- Clusters are automatically created the first time you deploy a Vertex AI Vision application. location id std :: string visionai :: ServiceConnectionOptions :: location id The Google Cloud location-id. project id std :: string visionai :: ServiceConnectionOptions :: project id The Google Cloud project-id. service endpoint std :: string visionai :: ServiceConnectionOptions :: service endpoint The service endpoint of Vertex AI Vision.
- Home Documentation AI and ML Vertex AI Vision Reference Send feedback Stay organized with collections Save and categorize content based on your preferences. visionai:: ServiceConnectionOptions #include <streams.h> ServiceConnectionOptions is a structure that contains options to connect to the Vertex AI Vision service.
- Public attributes cluster id std :: string visionai :: ServiceConnectionOptions :: cluster id The specific cluster-id of Vertex AI Vision.

