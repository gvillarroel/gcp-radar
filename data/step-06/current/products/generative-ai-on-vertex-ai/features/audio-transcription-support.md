---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.682Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "Audio transcription support"
feature_slug: "audio-transcription-support"
latest_feature_date: "2025-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/quickstart"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps"
keywords:
  - "audio"
  - "transcription"
  - "gemini"
  - "live"
  - "api"
  - "added"
  - "for"
  - "in"
---

# Audio transcription support

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Gemini Live API added transcription support for audio in and audio out.

## Extended Definition

Gemini Live API added transcription support for audio in and audio out.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/quickstart](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/quickstart)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps)

## Supporting Pages

### "Context Caching for Fine-tuned Gemini Models \_|\_ Generative AI on Vertex\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini)
- Source ID: `site-docs-root`
- Final score: 215
- Re-rank relevance: N/A

Evidence snippets:
- Make sure that you have the following information: The ID and the version of the tuned Gemini model The endpoint resource name for the deployed fine-tuned model Supported versions Fine-tuned Gemini models support implicit caching for the following versions: Gemini 3.1 Pro Gemini 3.1 Flash-Lite Gemini 3 Pro Gemini 3 Flash Gemini 2.5 Pro Gemini 2.5 Flash Gemini 2.5 Flash-Lite Explicit caching is supported for the following versions: Gemini 3.1 Pro Gemini 3.1 Flash-Lite Gemini 3 Pro Gemini 3 Flash Gemini 2.5 Pro Gemini 2.5 Flash Gemini 2.5 Flash-Lite Gemini 2.0 Flash (note: not supported in gemini-2.0-flash-live-preview-04-09 ) Gemini 2.0 Flash-Lite Create a context cache for a fine-tuned model The procedure for creating a context cache for a fine-tuned model largely follows the steps outlined in Create a context cache .
- Response { "candidates": [ { "content": { "role": "model", "parts": [ { "text": " MODEL RESPONSE " } ] }, "finishReason": "STOP", "safetyRatings": [ { "category": "HARM CATEGORY HATE SPEECH", "probability": "NEGLIGIBLE", "probabilityScore": 0.21866937, "severity": "HARM SEVERITY NEGLIGIBLE", "severityScore": 0.19946389 }, { "category": "HARM CATEGORY DANGEROUS CONTENT", "probability": "MEDIUM", "probabilityScore": 0.6880493, "severity": "HARM SEVERITY MEDIUM", "severityScore": 0.43374163 }, { "category": "HARM CATEGORY HARASSMENT", "probability": "NEGLIGIBLE", "probabilityScore": 0.4442634, "severity": "HARM SEVERITY LOW", "severityScore": 0.37903354 }, { "category": "HARM CATEGORY SEXUALLY EXPLICIT", "probability": "NEGLIGIBLE", "probabilityScore": 0.10502681, "severity": "HARM SEVERITY LOW", "severityScore": 0.28170192 } ] } ], "usageMetadata": { "promptTokenCount": 55927, "candidatesTokenCount": 105, "totalTokenCount": 56032 } } Example curl command LOCATION = "us-central1" PROJECT ID = "test-project" ENDPOINT ID = 987654321 curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https:// ${ LOCATION } -aiplatform.googleapis.com/v1/projects/ ${ PROJECT ID } /locations/ ${ LOCATION } /endpoints/ ${ ENDPOINT ID } :generateContent" -d \ '{ "cachedContent": "projects/${PROJECT NUMBER}/locations/${LOCATION}/cachedContents/${CACHE ID}", "contents": [ {"role":"user","parts":[{"text":"What are the benefits of exercise?"}]} ], "generationConfig": { "maxOutputTokens": 8192, "temperature": 1, "topP": 0.95, }, "safetySettings": [ { "category": "HARM CATEGORY HATE SPEECH", "threshold": "BLOCK MEDIUM AND ABOVE" }, { "category": "HARM CATEGORY DANGEROUS CONTENT", "threshold": "BLOCK MEDIUM AND ABOVE" }, { "category": "HARM CATEGORY SEXUALLY EXPLICIT", "threshold": "BLOCK MEDIUM AND ABOVE" }, { "category": "HARM CATEGORY HARASSMENT", "threshold": "BLOCK MEDIUM AND ABOVE" } ], }' Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /cachedContents" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "name": "projects/ PROJECT NUMBER /locations/us-central1/cachedContents/ CACHE ID ", "model": "projects/ PROJECT ID /locations/ LOCATION /models/ MODEL ID @ MODEL VERSION ", "createTime": "2024-06-04T01:11:50.808236Z", "updateTime": "2024-06-04T01:11:50.808236Z", "expireTime": "2024-06-04T02:11:50.794542Z" } Example curl command LOCATION = "us-central1" MODEL ID = "model-id" PROJECT ID = "test-project" MODEL VERSION = 1 MIME TYPE = "video/mp4" CACHED CONTENT URI = "gs://path-to-bucket/video-file-name.mp4" curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ https:// ${ LOCATION } -aiplatform.googleapis.com/v1/projects/ ${ PROJECT ID } /locations/ ${ LOCATION } /cachedContents -d \ '{ "model":"projects/${PROJECT ID}/locations/${LOCATION}/models/${MODEL ID}@${MODEL VERSION}", "contents": [ { "role": "user", "parts": [ { "fileData": { "mimeType": "${MIME TYPE}", "fileUri": "${CACHED CONTENT URI}" } } ] } ] }' Use a context cache for a fine-tuned model The procedure for using a context cache for a fine-tuned model largely follows the steps outlined in Use a context cache .
- HTTP method and URL: POST https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /endpoints/ ENDPOINT ID :generateContent Request JSON body: { "cachedContent": "projects/ PROJECT NUMBER /locations/ LOCATION /cachedContents/ CACHE ID ", "contents": [ {"role":"user","parts":[{"text":" PROMPT TEXT "}]} ], "generationConfig": { "maxOutputTokens": 8192, "temperature": 1, "topP": 0.95, }, "safetySettings": [ { "category": "HARM CATEGORY HATE SPEECH", "threshold": "BLOCK MEDIUM AND ABOVE" }, { "category": "HARM CATEGORY DANGEROUS CONTENT", "threshold": "BLOCK MEDIUM AND ABOVE" }, { "category": "HARM CATEGORY SEXUALLY EXPLICIT", "threshold": "BLOCK MEDIUM AND ABOVE" }, { "category": "HARM CATEGORY HARASSMENT", "threshold": "BLOCK MEDIUM AND ABOVE" } ], } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### "Get multimodal embeddings \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- EmbedContentConfig ( output dimensionality = 128 ), ) Normalize the output embedding. embedding values np = np . array ( response . embeddings [ 0 ] . values ) normed embedding = embedding values np / np . linalg . norm ( embedding values np ) print ( f "Normed embedding length: { len ( normed embedding ) } " ) print ( f "Norm of normed embedding: { np . linalg . norm ( normed embedding ) : .6f } " ) # Should be very close to 1 Get multimodal embeddings REST PROJECT ID = "YOUR PROJECT ID" LOCATION = "us-central1" curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https:// ${ LOCATION } -aiplatform.googleapis.com/v1/projects/ ${ PROJECT ID } /locations/ ${ LOCATION } /publishers/google/models/gemini-embedding-2-preview:embedContent" \ -d '{ "content": { "parts": [ { "text": "Whats this" }, { "file data": { "mime type": "video/mp4", "file uri": "gs://cloud-samples-data/generative-ai/video/pixel8.mp4" } } ] } }' Python from google import genai from google.genai import types Initialize the client. client = genai .
- Example usage in Python Generate embedding for a search query def prepare query ( query ): return f "task: search result query: { query } " Generate embedding for a search document def prepare document ( content , title = None ): if title is None : title = "none" return f "title: { title } text: { content } " Generate embedding for classification def prepare classification input ( content ): return f "task: classification query: { content } " API usage API limits The following limits apply when you use the gemini-embedding-2-preview model.
- Audio formats MP3, WAV Use multimodalembedding@001 The following limits apply when you use the multimodalembedding@001 model for text and image embeddings: Limit Value and description Text and image data Maximum number of API requests per minute per project 120-600 depending on region Maximum text length 32 tokens ( 32 words) The maximum text length is 32 tokens (approximately 32 words).
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample.\ (Not necessary if passing values as arguments) / // const project = 'YOUR PROJECT ID'; // const location = 'YOUR PROJECT LOCATION'; // const baseImagePath = 'YOUR BASE IMAGE PATH'; // const textPrompt = 'YOUR TEXT PROMPT'; const aiplatform = require ( ' @google-cloud/aiplatform ' ); // Imports the Google Cloud Prediction service client const { PredictionServiceClient } = aiplatform . v1 ; // Import the helper module for converting arbitrary protobuf.Value objects. const { helpers } = aiplatform ; // Specifies the location of the api endpoint const clientOptions = { apiEndpoint : 'us-central1-aiplatform.googleapis.com' , }; const publisher = 'google' ; const model = 'multimodalembedding@001' ; // Instantiates a client const predictionServiceClient = new PredictionServiceClient ( clientOptions ); async function predictImageFromImageAndText () { // Configure the parent resource const endpoint = projects/ ${ project } /locations/ ${ location } /publishers/ ${ publisher } /models/ ${ model } ; const fs = require ( 'fs' ); const imageFile = fs . readFileSync ( baseImagePath ); // Convert the image data to a Buffer and base64 encode it. const encodedImage = Buffer . from ( imageFile ). toString ( 'base64' ); const prompt = { text : textPrompt , image : { bytesBase64Encoded : encodedImage , }, }; const instanceValue = helpers . toValue ( prompt ); const instances = [ instanceValue ]; const parameter = { sampleCount : 1 , }; const parameters = helpers . toValue ( parameter ); const request = { endpoint , instances , parameters , }; // Predict request const [ response ] = await predictionServiceClient . predict ( request ); console . log ( 'Get image embedding response' ); const predictions = response . predictions ; console . log ( '\tPredictions :' ); for ( const prediction of predictions ) { console . log ( \t\tPrediction : ${ JSON . stringify ( prediction ) } ); } } await predictImageFromImageAndText (); Java Before trying this sample, follow the Java setup instructions in the Vertex AI quickstart using client libraries .

### "Quickstart: Send text prompts to Gemini using Vertex AI Studio \_|\_ Generative\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/quickstart](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/quickstart)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- In this quickstart, you: Send these prompts to the Gemini API using samples from the generative AI prompt gallery, including the following: A summarization text prompt A code generation prompt View the code used to generate the responses Before you begin prompting in Vertex AI Studio This quickstart requires you to complete the following steps to set up a Google Cloud project and enable the Vertex AI API.
- To get the permissions that you need to complete the tasks in this quickstart, ask your administrator to grant you the following IAM roles on your project: To enable the Vertex AI API if it isn't already enabled: serviceusage.serviceUsageAdmin To run prompts in Vertex AI Studio: Vertex AI User ( roles/aiplatform.user ) Sign in to your Google Cloud account.
- You can use Vertex AI Studio to design, test, and manage prompts for Google's Gemini large language models (LLMs) and third-party models.
- Test the Gemini flash model using a summarization text prompt Send a summarization text prompt to the Gemini API in Vertex AI.

### "Grounding with Google Maps in Vertex AI \_|\_ Generative AI on Vertex AI\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps)
- Source ID: `site-docs-root`
- Final score: 163
- Re-rank relevance: N/A

Evidence snippets:
- The Routing tool supports the following: Modes of transportation : Routing for driving, walking, bicycling, transit, and two-wheeled motorized vehicles (not all travel modes are available in all countries) Multiple waypoints : Up to 13 intermediate stops between origin and destination Real-time traffic : Accounting for current traffic conditions to provide accurate "live" travel times rather than static averages The following are examples of the types of questions that the Routing tool supports: Proximity based on travel time : "What are some American restaurants within a 10-minute walk from the Hilton Hotel on 1335 6th Ave in NYC?" Commute estimation : "How long does it take to take public transit from Pike Place Market to Capitol Hill in Seattle?" Understand the response When a prompt triggers the Routing tool, the model generates a natural language answer backed by structured metadata.
- HTTP method and URL: POST https:// LOCATION -aiplatform.googleapis.com/v1beta1/projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/ MODEL ID :generateContent Request JSON body: { "contents": [{ "role": "user", "parts": [{ "text": " PROMPT " }] }], "tools": [{ "googleMaps": { "enableWidget": " ENABLE WIDGET " } }], "toolConfig": { "retrievalConfig": { "latLng": { "latitude": LATITUDE , "longitude": LONGITUDE }, "languageCode": "en US" } }, "model": "projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/ MODEL ID " } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https:// LOCATION -aiplatform.googleapis.com/v1beta1/projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/ MODEL ID :generateContent" Select-Object -Expand Content You should receive a JSON response similar to the following: { "candidates": [ { "content": { "role": "model", "parts": [ { "text": "\"The Italian Place\" in Alexandria, VA, is good for children and offers takeout.
- Save the request body in a file named request.json , and execute the following command: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https:// LOCATION -aiplatform.googleapis.com/v1beta1/projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/ MODEL ID :generateContent" PowerShell (Windows) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .

