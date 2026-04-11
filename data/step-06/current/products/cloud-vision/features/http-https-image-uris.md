---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:26:36.722Z"
product_name: "Cloud Vision"
product_slug: "cloud-vision"
feature_name: "HTTP/HTTPS image URIs"
feature_slug: "http-https-image-uris"
latest_feature_date: "2017-05-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/vision/docs/ocr"
  - "https://docs.cloud.google.com/vision/docs/handwriting"
  - "https://docs.cloud.google.com/python/docs/reference/vision/latest/google.cloud.vision_v1.services.image_annotator.ImageAnnotatorAsyncClient"
keywords:
  - "http"
  - "https"
  - "image"
  - "uris"
  - "vision"
  - "can"
  - "process"
  - "images"
---

# HTTP/HTTPS image URIs

Product: Cloud Vision
Coverage: LOW

## Step 02 Summary

Cloud Vision can process images directly from publicly accessible HTTP and HTTPS URLs.

## Extended Definition

Cloud Vision can process images directly from publicly accessible HTTP and HTTPS URLs.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/vision/docs/ocr](https://docs.cloud.google.com/vision/docs/ocr)
- [https://docs.cloud.google.com/vision/docs/handwriting](https://docs.cloud.google.com/vision/docs/handwriting)
- [https://docs.cloud.google.com/python/docs/reference/vision/latest/google.cloud.vision_v1.services.image_annotator.ImageAnnotatorAsyncClient](https://docs.cloud.google.com/python/docs/reference/vision/latest/google.cloud.vision_v1.services.image_annotator.ImageAnnotatorAsyncClient)

## Supporting Pages

### "Detect and extract text from images \_|\_ Cloud Vision API \_|\_ Google\

- URL: [https://docs.cloud.google.com/vision/docs/ocr](https://docs.cloud.google.com/vision/docs/ocr)
- Source ID: `site-docs-root`
- Final score: 218
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, to store and process your data in the European Union only, use the URI eu-vision.googleapis.com in place of vision.googleapis.com for your REST API calls: https:// eu- vision.googleapis.com/v1/projects/ PROJECT ID /locations/ eu /images:annotate https:// eu- vision.googleapis.com/v1/projects/ PROJECT ID /locations/ eu /images:asyncBatchAnnotate https:// eu- vision.googleapis.com/v1/projects/ PROJECT ID /locations/ eu /files:annotate https:// eu- vision.googleapis.com/v1/projects/ PROJECT ID /locations/ eu /files:asyncBatchAnnotate To store and process your data in the United States only, use the US endpoint ( us-vision.googleapis.com ) with the preceding methods.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https:// REGION ID -vision.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION ID /images:annotate" Select-Object -Expand Content If the request is successful, the server returns a 200 OK HTTP status code and the response in JSON format.
- HTTP method and URL: POST https:// REGION ID -vision.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION ID /images:annotate Request JSON body: { "requests": [ { "image": { "source": { "imageUri": " CLOUD STORAGE IMAGE URI " } }, "features": [ { "type": "TEXT DETECTION" } ] } ] } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Save the request body in a file named request.json , and execute the following command: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "x-goog-user-project: PROJECT ID " \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https:// REGION ID -vision.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION ID /images:annotate" PowerShell Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .

### Detect handwriting in images \_|\_ Cloud Vision API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vision/docs/handwriting](https://docs.cloud.google.com/vision/docs/handwriting)
- Source ID: `site-docs-root`
- Final score: 218
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, to store and process your data in the European Union only, use the URI eu-vision.googleapis.com in place of vision.googleapis.com for your REST API calls: https:// eu- vision.googleapis.com/v1/projects/ PROJECT ID /locations/ eu /images:annotate https:// eu- vision.googleapis.com/v1/projects/ PROJECT ID /locations/ eu /images:asyncBatchAnnotate https:// eu- vision.googleapis.com/v1/projects/ PROJECT ID /locations/ eu /files:annotate https:// eu- vision.googleapis.com/v1/projects/ PROJECT ID /locations/ eu /files:asyncBatchAnnotate To store and process your data in the United States only, use the US endpoint ( us-vision.googleapis.com ) with the preceding methods.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https:// REGION ID -vision.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION ID /images:annotate" Select-Object -Expand Content If the request is successful, the server returns a 200 OK HTTP status code and the response in JSON format.
- HTTP method and URL: POST https:// REGION ID -vision.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION ID /images:annotate Request JSON body: { "requests": [ { "image": { "source": { "imageUri": " CLOUD STORAGE IMAGE URI " } }, "features": [ { "type": "DOCUMENT TEXT DETECTION" } ] } ] } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Save the request body in a file named request.json , and execute the following command: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "x-goog-user-project: PROJECT ID " \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https:// REGION ID -vision.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION ID /images:annotate" PowerShell Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .

### "Class ImageAnnotatorAsyncClient (3.13.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/vision/latest/google.cloud.vision_v1.services.image_annotator.ImageAnnotatorAsyncClient](https://docs.cloud.google.com/python/docs/reference/vision/latest/google.cloud.vision_v1.services.image_annotator.ImageAnnotatorAsyncClient)
- Source ID: `site-python-reference`
- Final score: 194
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import vision v1 async def sample async batch annotate images(): Create a client client = vision v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import vision v1 async def sample batch annotate images(): Create a client client = vision v1 .
- Returns Type Description google.cloud.vision v1.types.BatchAnnotateImagesResponse Response to a batch image annotation request. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. from service account file from service account file ( filename : str , args , kwargs ) Creates an instance of this client using the provided credentials file.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import vision v1 async def sample async batch annotate files(): Create a client client = vision v1 .

