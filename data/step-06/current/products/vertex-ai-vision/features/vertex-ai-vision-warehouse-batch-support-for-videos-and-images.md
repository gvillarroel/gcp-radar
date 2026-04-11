---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T21:22:59.246Z"
product_name: "Vertex AI Vision"
product_slug: "vertex-ai-vision"
feature_name: "Vertex AI Vision Warehouse batch support for videos and images"
feature_slug: "vertex-ai-vision-warehouse-batch-support-for-videos-and-images"
latest_feature_date: "2023-11-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/vision-ai/docs/batch-video-warehouse-creation"
  - "https://docs.cloud.google.com/vision-ai/docs/batch-video-warehouse-search"
  - "https://docs.cloud.google.com/vision-ai/docs/batch-video-warehouse-overview"
  - "https://docs.cloud.google.com/vision-ai/docs/create-manage-streaming-warehouse"
keywords:
  - "vertex"
  - "ai"
  - "vision"
  - "warehouse"
  - "batch"
  - "for"
  - "videos"
  - "and"
---

# Vertex AI Vision Warehouse batch support for videos and images

Product: Vertex AI Vision
Coverage: LOW

## Step 02 Summary

Vertex AI Vision Warehouse introduced general availability of batch support for video and image data.

## Extended Definition

Vertex AI Vision Warehouse introduced general availability of batch support for video and image data.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/vision-ai/docs/batch-video-warehouse-creation](https://docs.cloud.google.com/vision-ai/docs/batch-video-warehouse-creation)
- [https://docs.cloud.google.com/vision-ai/docs/batch-video-warehouse-search](https://docs.cloud.google.com/vision-ai/docs/batch-video-warehouse-search)
- [https://docs.cloud.google.com/vision-ai/docs/batch-video-warehouse-overview](https://docs.cloud.google.com/vision-ai/docs/batch-video-warehouse-overview)
- [https://docs.cloud.google.com/vision-ai/docs/create-manage-streaming-warehouse](https://docs.cloud.google.com/vision-ai/docs/create-manage-streaming-warehouse)

## Supporting Pages

### "Create and update a Batch Video Warehouse \_|\_ Vertex AI Vision \_|\_ Google\

- URL: [https://docs.cloud.google.com/vision-ai/docs/batch-video-warehouse-creation](https://docs.cloud.google.com/vision-ai/docs/batch-video-warehouse-creation)
- Source ID: `site-docs-reference`
- Final score: 282
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation AI and ML Vertex AI Vision Guides Send feedback Create and update a Batch Video Warehouse Stay organized with collections Save and categorize content based on your preferences.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https:// warehouse-visionai.googleapis.com /v1/projects/ PROJECT NUMBER /locations/ LOCATION ID /corpora" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT NUMBER /locations/ LOCATION ID /warehouseoperations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.visionai.v1.CreateCorpusMetadata" }, "done": true, "response": { "@type": "type.googleapis.com/google.cloud.visionai.v1.Corpus", "name": "projects/ PROJECT NUMBER /locations/ LOCATION ID /corpora/ CORPUS ID ", "displayName": " DISPLAY NAME ", "description": " WAREHOUSE DESCRIPTION ", "type": "VIDEO ON DEMAND", "search capability setting": { "search capabilities": { "type": "EMBEDDING SEARCH" } } } } Create, upload, and analyze assets To add a video to Batch Video Warehouse, first create an asset.
- In this request, the value is added to the request URL in the form: https:// ENDPOINT /v1/ [...] /corpora/ CORPUS ID /assets/ ASSET ID /annotations ?annotation id= ANNOTATION ID HTTP method and URL: POST https:// warehouse-visionai.googleapis.com /v1/projects/ PROJECT NUMBER /locations/ LOCATION ID /corpora/ CORPUS ID /assets/ ASSET ID /annotations Request JSON body: { "user specified annotation": { "key": " object-detected ", "value": { "str value": " cat " }, "partition": { "relative temporal partition": { "start offset": { "seconds": " 60 " }, "end offset": { "seconds": " 300 " } } } } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https:// warehouse-visionai.googleapis.com /v1/projects/ PROJECT NUMBER /locations/ LOCATION ID /corpora/ CORPUS ID /assets/ ASSET ID :upload" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT NUMBER /locations/ LOCATION ID /corpora/ CORPUS ID /assets/ ASSET ID /operations/ OPERATION ID ", } The uploaded video needs to be analyzed before going into search indexes.

### "Search Batch Video Warehouse data \_|\_ Vertex AI Vision \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vision-ai/docs/batch-video-warehouse-search](https://docs.cloud.google.com/vision-ai/docs/batch-video-warehouse-search)
- Source ID: `site-docs-reference`
- Final score: 264
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation AI and ML Vertex AI Vision Guides Send feedback Search Batch Video Warehouse data Stay organized with collections Save and categorize content based on your preferences.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https:// warehouse-visionai.googleapis.com /v1/projects/ PROJECT NUMBER /locations/ LOCATION ID /indexEndpoints/ INDEX ENDPOINT ID :searchIndexEndpoint " Select-Object -Expand Content You should receive a JSON response similar to the following: { "searchResultItems": [ { "asset": "projects/ PROJECT NUMBER /locations/ LOCATION ID /corpora/ CORPUS ID /assets/ ASSET ID 1 " }, { "asset": "projects/ PROJECT NUMBER /locations/ LOCATION ID /corpora/ CORPUS ID /assets/ ASSET ID 2 " } ] } If you have an image of a sunset at a beach, you can also use it as a search query by sending the following request (input image is in base64 encoding format): REST & CMD LINE Before using any of the request data, make the following replacements: REGIONALIZED ENDPOINT : Endpoint might include a prefix matching the LOCATION ID such as europe-west4- .
- HTTP method and URL: POST https:// warehouse-visionai.googleapis.com /v1/projects/ PROJECT NUMBER /locations/ LOCATION ID /indexEndpoints/ INDEX ENDPOINT ID :searchIndexEndpoint Request JSON body: { "image query": { "input image": " IMAGE BYTES " }, "criteria": [ { "field": " state ", "text array": { "txt values": [ " California " ] } } ] } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: POST https:// warehouse-visionai.googleapis.com /v1/projects/ PROJECT NUMBER /locations/ LOCATION ID /indexEndpoints/ INDEX ENDPOINT ID :searchIndexEndpoint Request JSON body: { "text query": " sunset at beach ", "criteria": [ { "field": " state ", "text array": { "txt values": [ " California " ] } } ] } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### "Batch Video Warehouse Overview \_|\_ Vertex AI Vision \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vision-ai/docs/batch-video-warehouse-overview](https://docs.cloud.google.com/vision-ai/docs/batch-video-warehouse-overview)
- Source ID: `site-docs-reference`
- Final score: 238
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation AI and ML Vertex AI Vision Guides Send feedback Batch Video Warehouse Overview Stay organized with collections Save and categorize content based on your preferences.
- There are a few basic steps to use a Batch Video Warehouse: Upload and analyze videos : Create a corpus , upload video assets, generate video embeddings by analyze the video assets.
- Batch Video Warehouse provides two ways for updating video assets in the index: Incremental update : Use the IndexAsset or RemoveIndexAsset APIs to update one video at a time.
- Supported video formats Warehouse backends support popular formats such as MP4, AVI, FLV, MKV, MOV, MXF, WMV, and the formats decodable by FFmpeg .

### "Create and update a Streaming video warehouse \_|\_ Vertex AI Vision \_\

- URL: [https://docs.cloud.google.com/vision-ai/docs/create-manage-streaming-warehouse](https://docs.cloud.google.com/vision-ai/docs/create-manage-streaming-warehouse)
- Source ID: `site-docs-reference`
- Final score: 226
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation AI and ML Vertex AI Vision Guides Send feedback Create and update a Streaming video warehouse Stay organized with collections Save and categorize content based on your preferences.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https:// warehouse-visionai.googleapis.com /v1/projects/ PROJECT NUMBER /locations/ LOCATION ID /corpora" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT NUMBER /locations/ LOCATION ID /warehouseoperations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.visionai.v1.CreateCorpusMetadata" }, "done": true, "response": { "@type": "type.googleapis.com/google.cloud.visionai.v1.Corpus", "name": "projects/ PROJECT NUMBER /locations/ LOCATION ID /corpora/ CORPUS ID ", "displayName": " DISPLAY NAME ", "description": " WAREHOUSE DESCRIPTION ", "type": "STREAM VIDEO", "defaultTtl": " TIME TO LIVE " } } Update a streaming video warehouse Updates an existing corpus under the given project with the option to update display name, description, default TTL, or update all available fields.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https:// warehouse-visionai.googleapis.com /v1/projects/ PROJECT NUMBER /locations/ LOCATION ID /corpora/ CORPUS ID ?update mask= display name " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT ID /locations/ LOCATION ID /corpora/ CORPORA ID ", "displayName": " UPDATED FIELD VALUE ", "description": "Original description", "defaultTtl": "7800s" } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- HTTP method and URL: PATCH https:// warehouse-visionai.googleapis.com /v1/projects/ PROJECT NUMBER /locations/ LOCATION ID /corpora/ CORPUS ID ?update mask= display name Request JSON body: { "displayName": " UPDATED FIELD VALUE ", "description": "Original description", "defaultTtl": { "seconds": "7800" } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

