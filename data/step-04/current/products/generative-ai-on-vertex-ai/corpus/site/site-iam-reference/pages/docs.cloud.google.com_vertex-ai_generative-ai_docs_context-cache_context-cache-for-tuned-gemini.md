---
title: "Context Caching for Fine-tuned Gemini Models \_|\_ Generative AI on Vertex\
  \ AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini
  title: "Context Caching for Fine-tuned Gemini Models \_|\_ Generative AI on Vertex\
    \ AI \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI
Generative AI on Vertex AI
Guides
Send feedback
Context Caching for Fine-tuned Gemini Models
Stay organized with collections
Save and categorize content based on your preferences.
You can use context caching for your fine-tuned Gemini models to improve performance and reduce costs for prompts that include large amounts of context. By caching frequently used context, you avoid re-sending large amounts of data with each request to your fine-tuned model.
The management operations ( Read , Update , Delete ) of context cache for tuned Gemini remain consistent with base models. Only cached content creation and inference requires specific adjustment, which is detailed in the following.
Prerequisites
Fine-tuning a Gemini Model: You need a deployed fine-tuned
Gemini model based on a supported base model (see Context caching
overview ).
For details on how to fine-tune a Gemini model, see Fine-tune a
Gemini model .
To get the endpoint for your deployed tuned model, see Deploy a tuned model .
Make sure that you have the following information:
The ID and the version of the tuned Gemini model
The endpoint resource name for the deployed fine-tuned model
Supported versions
Fine-tuned Gemini models support implicit caching for the following
versions:
Gemini 3.1 Pro
Gemini 3.1 Flash-Lite
Gemini 3 Pro
Gemini 3 Flash
Gemini 2.5 Pro
Gemini 2.5 Flash
Gemini 2.5 Flash-Lite
Explicit caching is supported for the following versions:
Gemini 3.1 Pro
Gemini 3.1 Flash-Lite
Gemini 3 Pro
Gemini 3 Flash
Gemini 2.5 Pro
Gemini 2.5 Flash
Gemini 2.5 Flash-Lite
Gemini 2.0 Flash (note: not supported in gemini-2.0-flash-live-preview-04-09 )
Gemini 2.0 Flash-Lite
Create a context cache for a fine-tuned model
The procedure for creating a context cache for a fine-tuned model largely follows the steps outlined in Create a context cache . Consult the linked documentation for the general process; this guide focuses on the difference of creating context cache for fine-tuned Gemini models.
Instead of using the base model in the form of projects/{PROJECT}/locations/{LOCATION}/publishers/google/models/{MODEL} , you must use your fine-tuned model in the form of projects/{PROJECT}/locations/{LOCATION}/models/{MODEL}@{VERSION} .
The following examples show how to create a context cache with a tuned Gemini model.
REST
You can use REST to create a context cache by using the Vertex AI API to send a
POST request to the publisher model endpoint. The following example shows
how to create a context cache using a file stored in a Cloud Storage
bucket.
Before using any of the request data,
make the following replacements:
PROJECT_ID : Your project ID .
LOCATION : The region to process the request and where the cached content is stored.
For a list of supported regions, see Available regions .
MODEL_ID : The fine-tuned Gemini model ID.
MODEL_VERSION : The fine-tuned Gemini model version.
CACHE_DISPLAY_NAME : A
meaningful display name to describe and to help you identify each context
cache.
MIME_TYPE : The MIME type of the content to cache.
CONTENT_TO_CACHE_URI : The Cloud Storage URI of the content to cache.
HTTP method and URL:
POST https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /cachedContents
Request JSON body:
{
"model": "projects/ PROJECT_ID /locations/ LOCATION /models/ MODEL_ID @ MODEL_VERSION ",
"displayName": " CACHE_DISPLAY_NAME ",
"contents": [{
"role": "user",
"parts": [{
"fileData": {
"mimeType": " MIME_TYPE ",
"fileUri": " CONTENT_TO_CACHE_URI "
}
}]
}]
}
To send your request, choose one of these options:
curl
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /cachedContents"
PowerShell
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /cachedContents" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
Response
{
"name": "projects/ PROJECT_NUMBER /locations/us-central1/cachedContents/ CACHE_ID ",
"model": "projects/ PROJECT_ID /locations/ LOCATION /models/ MODEL_ID @ MODEL_VERSION ",
"createTime": "2024-06-04T01:11:50.808236Z",
"updateTime": "2024-06-04T01:11:50.808236Z",
"expireTime": "2024-06-04T02:11:50.794542Z"
}
Example curl command
LOCATION = "us-central1"
MODEL_ID = "model-id"
PROJECT_ID = "test-project"
MODEL_VERSION = 1
MIME_TYPE = "video/mp4"
CACHED_CONTENT_URI = "gs://path-to-bucket/video-file-name.mp4"
curl -X POST \
-H "Authorization: Bearer $( gcloud auth print-access-token ) " \
-H "Content-Type: application/json" \
https:// ${ LOCATION } -aiplatform.googleapis.com/v1/projects/ ${ PROJECT_ID } /locations/ ${ LOCATION } /cachedContents -d \
'{
"model":"projects/${PROJECT_ID}/locations/${LOCATION}/models/${MODEL_ID}@${MODEL_VERSION}",
"contents": [
{
"role": "user",
"parts": [
{
"fileData": {
"mimeType": "${MIME_TYPE}",
"fileUri": "${CACHED_CONTENT_URI}"
}
}
]
}
]
}'
Use a context cache for a fine-tuned model
The procedure for using a context cache for a fine-tuned model largely follows the steps outlined in Use a context cache . Consult the linked documentation for the general process; this guide focuses on the difference of using context cache for fine-tuned Gemini models.
Instead of sending the request to the base model endpoint in the form of projects/{PROJECT}/locations/{LOCATION}/publishers/google/models/{MODEL} , you must send it to the endpoint of your deployed fine-tuned model in the form of projects/{PROJECT}/locations/{LOCATION}/endpoints/{ENDPOINT_ID} .
The following code example shows how to use a context cache with a tuned Gemini model.
When you use a context cache,
you can't specify the following properties:
GenerativeModel.system_instructions
GenerativeModel.tool_config
GenerativeModel.tools
REST
You can use REST to specify a context cache with a prompt by using the
Vertex AI API to send a POST request to the publisher model endpoint.
Before using any of the request data,
make the following replacements:
PROJECT_ID : Your project ID .
LOCATION : The region where the request to
create the context cache
was processed.
ENDPOINT_ID : The endpoint where the fine-tuned model is deployed.
MIME_TYPE : The text prompt to submit to the model.
HTTP method and URL:
POST https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /endpoints/ ENDPOINT_ID :generateContent
Request JSON body:
{
"cachedContent": "projects/ PROJECT_NUMBER /locations/ LOCATION /cachedContents/ CACHE_ID ",
"contents": [
{"role":"user","parts":[{"text":" PROMPT_TEXT "}]}
],
"generationConfig": {
"maxOutputTokens": 8192,
"temperature": 1,
"topP": 0.95,
},
"safetySettings": [
{
"category": "HARM_CATEGORY_HATE_SPEECH",
"threshold": "BLOCK_MEDIUM_AND_ABOVE"
},
{
"category": "HARM_CATEGORY_DANGEROUS_CONTENT",
"threshold": "BLOCK_MEDIUM_AND_ABOVE"
},
{
"category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
"threshold": "BLOCK_MEDIUM_AND_ABOVE"
},
{
"category": "HARM_CATEGORY_HARASSMENT",
"threshold": "BLOCK_MEDIUM_AND_ABOVE"
}
],
}
To send your request, choose one of these options:
curl
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /endpoints/ ENDPOINT_ID :generateContent"
PowerShell
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /endpoints/ ENDPOINT_ID :generateContent" | Select-Object -Expand Content
You should receive a JSON response similar to the following.
Response
{
"candidates": [
{
"content": {
"role": "model",
"parts": [
{
"text": " MODEL_RESPONSE "
}
]
},
"finishReason": "STOP",
"safetyRatings": [
{
"category": "HARM_CATEGORY_HATE_SPEECH",
"probability": "NEGLIGIBLE",
"probabilityScore": 0.21866937,
"severity": "HARM_SEVERITY_NEGLIGIBLE",
"severityScore": 0.19946389
},
{
"category": "HARM_CATEGORY_DANGEROUS_CONTENT",
"probability": "MEDIUM",
"probabilityScore": 0.6880493,
"severity": "HARM_SEVERITY_MEDIUM",
"severityScore": 0.43374163
},
{
"category": "HARM_CATEGORY_HARASSMENT",
"probability": "NEGLIGIBLE",
"probabilityScore": 0.4442634,
"severity": "HARM_SEVERITY_LOW",
"severityScore": 0.37903354
},
{
"category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
"probability": "NEGLIGIBLE",
"probabilityScore": 0.10502681,
"severity": "HARM_SEVERITY_LOW",
"severityScore": 0.28170192
}
]
}
],
"usageMetadata": {
"promptTokenCount": 55927,
"candidatesTokenCount": 105,
"totalTokenCount": 56032
}
}
Example curl command
LOCATION = "us-central1"
PROJECT_ID = "test-project"
ENDPOINT_ID = 987654321
curl -X POST \
-H "Authorization: Bearer $( gcloud auth print-access-token ) " \
-H "Content-Type: application/json" \
"https:// ${ LOCATION } -aiplatform.googleapis.com/v1/projects/ ${ PROJECT_ID } /locations/ ${ LOCATION } /endpoints/ ${ ENDPOINT_ID } :generateContent" -d \
'{
"cachedContent": "projects/${PROJECT_NUMBER}/locations/${LOCATION}/cachedContents/${CACHE_ID}",
"contents": [
{"role":"user","parts":[{"text":"What are the benefits of exercise?"}]}
],
"generationConfig": {
"maxOutputTokens": 8192,
"temperature": 1,
"topP": 0.95,
},
"safetySettings": [
{
"category": "HARM_CATEGORY_HATE_SPEECH",
"threshold": "BLOCK_MEDIUM_AND_ABOVE"
},
{
"category": "HARM_CATEGORY_DANGEROUS_CONTENT",
"threshold": "BLOCK_MEDIUM_AND_ABOVE"
},
{
"category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
"threshold": "BLOCK_MEDIUM_AND_ABOVE"
},
{
"category": "HARM_CATEGORY_HARASSMENT",
"threshold": "BLOCK_MEDIUM_AND_ABOVE"
}
],
}'
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
