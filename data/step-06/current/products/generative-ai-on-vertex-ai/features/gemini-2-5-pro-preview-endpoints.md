---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.675Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "Gemini 2.5 Pro preview endpoints"
feature_slug: "gemini-2-5-pro-preview-endpoints"
latest_feature_date: "2025-06-17"
deprecation_date: "2025-07-15"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/gemini-3-prompting-guide"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/quickstart"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/flex-paygo"
keywords:
  - "gemini"
  - "pro"
  - "preview"
  - "endpoints"
  - "for"
  - "were"
  - "scheduled"
  - "to"
---

# Gemini 2.5 Pro preview endpoints

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Preview endpoints for Gemini 2.5 Pro were scheduled to shut down after July 15, 2025; deprecated on 2025-07-15.

## Extended Definition

Preview endpoints for Gemini 2.5 Pro were scheduled to shut down after July 15, 2025; deprecated on 2025-07-15.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/gemini-3-prompting-guide](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/gemini-3-prompting-guide)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/quickstart](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/quickstart)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/flex-paygo](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/flex-paygo)

## Supporting Pages

### "Context Caching for Fine-tuned Gemini Models \_|\_ Generative AI on Vertex\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- Response { "candidates": [ { "content": { "role": "model", "parts": [ { "text": " MODEL RESPONSE " } ] }, "finishReason": "STOP", "safetyRatings": [ { "category": "HARM CATEGORY HATE SPEECH", "probability": "NEGLIGIBLE", "probabilityScore": 0.21866937, "severity": "HARM SEVERITY NEGLIGIBLE", "severityScore": 0.19946389 }, { "category": "HARM CATEGORY DANGEROUS CONTENT", "probability": "MEDIUM", "probabilityScore": 0.6880493, "severity": "HARM SEVERITY MEDIUM", "severityScore": 0.43374163 }, { "category": "HARM CATEGORY HARASSMENT", "probability": "NEGLIGIBLE", "probabilityScore": 0.4442634, "severity": "HARM SEVERITY LOW", "severityScore": 0.37903354 }, { "category": "HARM CATEGORY SEXUALLY EXPLICIT", "probability": "NEGLIGIBLE", "probabilityScore": 0.10502681, "severity": "HARM SEVERITY LOW", "severityScore": 0.28170192 } ] } ], "usageMetadata": { "promptTokenCount": 55927, "candidatesTokenCount": 105, "totalTokenCount": 56032 } } Example curl command LOCATION = "us-central1" PROJECT ID = "test-project" ENDPOINT ID = 987654321 curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https:// ${ LOCATION } -aiplatform.googleapis.com/v1/projects/ ${ PROJECT ID } /locations/ ${ LOCATION } /endpoints/ ${ ENDPOINT ID } :generateContent" -d \ '{ "cachedContent": "projects/${PROJECT NUMBER}/locations/${LOCATION}/cachedContents/${CACHE ID}", "contents": [ {"role":"user","parts":[{"text":"What are the benefits of exercise?"}]} ], "generationConfig": { "maxOutputTokens": 8192, "temperature": 1, "topP": 0.95, }, "safetySettings": [ { "category": "HARM CATEGORY HATE SPEECH", "threshold": "BLOCK MEDIUM AND ABOVE" }, { "category": "HARM CATEGORY DANGEROUS CONTENT", "threshold": "BLOCK MEDIUM AND ABOVE" }, { "category": "HARM CATEGORY SEXUALLY EXPLICIT", "threshold": "BLOCK MEDIUM AND ABOVE" }, { "category": "HARM CATEGORY HARASSMENT", "threshold": "BLOCK MEDIUM AND ABOVE" } ], }' Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- HTTP method and URL: POST https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /endpoints/ ENDPOINT ID :generateContent Request JSON body: { "cachedContent": "projects/ PROJECT NUMBER /locations/ LOCATION /cachedContents/ CACHE ID ", "contents": [ {"role":"user","parts":[{"text":" PROMPT TEXT "}]} ], "generationConfig": { "maxOutputTokens": 8192, "temperature": 1, "topP": 0.95, }, "safetySettings": [ { "category": "HARM CATEGORY HATE SPEECH", "threshold": "BLOCK MEDIUM AND ABOVE" }, { "category": "HARM CATEGORY DANGEROUS CONTENT", "threshold": "BLOCK MEDIUM AND ABOVE" }, { "category": "HARM CATEGORY SEXUALLY EXPLICIT", "threshold": "BLOCK MEDIUM AND ABOVE" }, { "category": "HARM CATEGORY HARASSMENT", "threshold": "BLOCK MEDIUM AND ABOVE" } ], } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Make sure that you have the following information: The ID and the version of the tuned Gemini model The endpoint resource name for the deployed fine-tuned model Supported versions Fine-tuned Gemini models support implicit caching for the following versions: Gemini 3.1 Pro Gemini 3.1 Flash-Lite Gemini 3 Pro Gemini 3 Flash Gemini 2.5 Pro Gemini 2.5 Flash Gemini 2.5 Flash-Lite Explicit caching is supported for the following versions: Gemini 3.1 Pro Gemini 3.1 Flash-Lite Gemini 3 Pro Gemini 3 Flash Gemini 2.5 Pro Gemini 2.5 Flash Gemini 2.5 Flash-Lite Gemini 2.0 Flash (note: not supported in gemini-2.0-flash-live-preview-04-09 ) Gemini 2.0 Flash-Lite Create a context cache for a fine-tuned model The procedure for creating a context cache for a fine-tuned model largely follows the steps outlined in Create a context cache .
- Save the request body in a file named request.json , and execute the following command: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /endpoints/ ENDPOINT ID :generateContent" PowerShell Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .

### "Gemini 3 prompting guide \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/gemini-3-prompting-guide](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/gemini-3-prompting-guide)
- Source ID: `site-docs-root`
- Final score: 179
- Re-rank relevance: N/A

Evidence snippets:
- Preview This product or feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms , and the Additional Terms for Generative AI Preview Products .
- This guide provides a variety of prompting strategies to help you get the most from Gemini 3 on Vertex AI for a variety of use cases.
- To see an example of Gemini 3.1 Pro, run the "Intro to Gemini 3.1 Pro" notebook in one of the following environments: Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub Prompting is a key part of working with any Gemini model and the new features of Gemini 3 models can be prompted to help solve complex problems and achieve other tasks, such as interpreting large amounts of text, solving complex mathematical problems, or even creating images and videos.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

### "Quickstart: Send text prompts to Gemini using Vertex AI Studio \_|\_ Generative\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/quickstart](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/quickstart)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- In this quickstart, you: Send these prompts to the Gemini API using samples from the generative AI prompt gallery, including the following: A summarization text prompt A code generation prompt View the code used to generate the responses Before you begin prompting in Vertex AI Studio This quickstart requires you to complete the following steps to set up a Google Cloud project and enable the Vertex AI API.
- You can use Vertex AI Studio to design, test, and manage prompts for Google's Gemini large language models (LLMs) and third-party models.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- To get the permissions that you need to complete the tasks in this quickstart, ask your administrator to grant you the following IAM roles on your project: To enable the Vertex AI API if it isn't already enabled: serviceusage.serviceUsageAdmin To run prompts in Vertex AI Studio: Vertex AI User ( roles/aiplatform.user ) Sign in to your Google Cloud account.

### Flex PayGo \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/flex-paygo](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/flex-paygo)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- Flex PayGo doesn't support regional or multi-regional endpoints. gemini-3.1-flash-lite-preview gemini-3.1-flash-image-preview gemini-3.1-pro-preview gemini-3-flash-preview gemini-3-pro-image-preview Request payload limit Flex PayGo requests have a total payload size limit of 20 MB for requests where the payload is included directly in the request body.
- The following are example use cases: Offline analysis of text, documents, image, audio and video files Evaluation of model qualities Data annotation and labeling Document translation Building a product catalog Note: For large workloads that can tolerate 24-hour turnaround times and process hundreds of billions of tokens daily, we recommend Batch inference with Gemini for improved throughput and success rate.
- The timeout is specified in seconds. curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json; charset=utf-8" \ -H "X-Server-Timeout: 600" \ -H "X-Vertex-AI-LLM-Request-Type: shared" \ -H "X-Vertex-AI-LLM-Shared-Request-Type: flex" \ "https://aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/global/publishers/google/models/ MODEL ID :generateContent" -d \ $'{ "contents": { "role": "model", "parts": { "text": " PROMPT TEXT " } } }' You should receive a JSON response similar to the following. { "candidates" : [ { "content" : { "role" : "model" , "parts" : [ { "text" : "Response to sample request." } ] } , "finishReason" : "STOP" } ] , "usageMetadata" : { "promptTokenCount" : 3 , "candidatesTokenCount" : 900 , "totalTokenCount" : 1957 , "trafficType" : "ON DEMAND FLEX" , "thoughtsTokenCount" : 1054 } } Note the following in the URL for this sample: Use the generateContent method to request that the response is returned after it's fully generated.
- The timeout is specified in seconds. curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json; charset=utf-8" \ -H "X-Server-Timeout: 600" \ -H "X-Vertex-AI-LLM-Shared-Request-Type: flex" \ "https://aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/global/publishers/google/models/ MODEL ID :generateContent" -d \ $'{ "contents": { "role": "model", "parts": { "text": " PROMPT TEXT " } } }' You should receive a JSON response similar to the following. { "candidates" : [ { "content" : { "role" : "model" , "parts" : [ { "text" : "Response to sample request." } ] } , "finishReason" : "STOP" } ] , "usageMetadata" : { "promptTokenCount" : 3 , "candidatesTokenCount" : 900 , "totalTokenCount" : 1957 , "trafficType" : "ON DEMAND FLEX" , "thoughtsTokenCount" : 1054 } } Note the following in the URL for this sample: Use the generateContent method to request that the response is returned after it's fully generated.

