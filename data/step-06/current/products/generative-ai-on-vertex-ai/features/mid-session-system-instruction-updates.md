---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.684Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "Mid-session system instruction updates"
feature_slug: "mid-session-system-instruction-updates"
latest_feature_date: "2025-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/faq"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/gemini-3-prompting-guide"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/bounding-box-detection"
keywords:
  - "mid"
  - "session"
  - "system"
  - "instruction"
  - "updates"
  - "gemini"
  - "live"
  - "api"
---

# Mid-session system instruction updates

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Gemini Live API added support for changing or updating system instructions mid-session.

## Extended Definition

Gemini Live API added support for changing or updating system instructions mid-session.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/faq](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/faq)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/gemini-3-prompting-guide](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/gemini-3-prompting-guide)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/bounding-box-detection](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/bounding-box-detection)

## Supporting Pages

### "Frequently asked questions \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/faq](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/faq)
- Source ID: `site-docs-root`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- The following table shows the comparison between our Gemini 2 models: Model name Description Upgrade path for Gemini 2.5 Pro Strongest model quality (especially for code and world knowledge), with a 1M token-long context window Gemini 1.5 Pro users who want better quality, or who are particularly invested in long context and code Gemini 2.0 Flash Workhorse model for all daily tasks and features enhanced performance and supports real-time Live API Gemini 1.5 Flash users who want a model with significantly better quality that's slightly slower Gemini 1.5 Pro users who want slightly better quality and real-time latency Gemini 2.0 Flash-Lite Our most cost effective offering to support high throughput Gemini 1.5 Flash users who want better quality for the same price and speed Customers looking for the fastest model in the Gemini 2 family To see all benchmark capabilities for Gemini 2, visit the Google DeepMind documentation .
- Add this to the end of your system instructions: When thinking silently: ALWAYS start the thought with a brief (one sentence) recap of the current progress on the task.
- To migrate your work to Vertex AI, import and upload your existing data to Vertex AI Studio and use the Gemini API with Vertex AI.
- Try adding instructions like the following to your system prompt: FOR TABLE HEADINGS, IMMEDIATELY ADD ' ' AFTER THE TABLE HEADING.

### "Gemini 3 prompting guide \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/gemini-3-prompting-guide](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/gemini-3-prompting-guide)
- Source ID: `site-docs-root`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- Distinguishing between deduction and external information In some cases, providing open-ended system instructions like do not infer or do not guess may cause the model to over-index on that instruction and fail to perform basic logic or arithmetic or synthesize information found in different parts of a document.
- Lowering response latency For lower latency responses, try setting the thinking level to LOW and using system instructions like think silently .
- To see an example of Gemini 3.1 Pro, run the "Intro to Gemini 3.1 Pro" notebook in one of the following environments: Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub Prompting is a key part of working with any Gemini model and the new features of Gemini 3 models can be prompted to help solve complex problems and achieve other tasks, such as interpreting large amounts of text, solving complex mathematical problems, or even creating images and videos.
- Using split-step verification When the model encounters a topic it doesn't have sufficient information for (such as an obscure place) or is asked to perform an action it doesn't have capability for (such as accessing a specific live URL), it may generate seemingly plausible but incorrect information in an attempt to satisfy the request.

### "Context Caching for Fine-tuned Gemini Models \_|\_ Generative AI on Vertex\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini)
- Source ID: `site-docs-root`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- When you use a context cache, you can't specify the following properties: GenerativeModel.system instructions GenerativeModel.tool config GenerativeModel.tools REST You can use REST to specify a context cache with a prompt by using the Vertex AI API to send a POST request to the publisher model endpoint.
- Make sure that you have the following information: The ID and the version of the tuned Gemini model The endpoint resource name for the deployed fine-tuned model Supported versions Fine-tuned Gemini models support implicit caching for the following versions: Gemini 3.1 Pro Gemini 3.1 Flash-Lite Gemini 3 Pro Gemini 3 Flash Gemini 2.5 Pro Gemini 2.5 Flash Gemini 2.5 Flash-Lite Explicit caching is supported for the following versions: Gemini 3.1 Pro Gemini 3.1 Flash-Lite Gemini 3 Pro Gemini 3 Flash Gemini 2.5 Pro Gemini 2.5 Flash Gemini 2.5 Flash-Lite Gemini 2.0 Flash (note: not supported in gemini-2.0-flash-live-preview-04-09 ) Gemini 2.0 Flash-Lite Create a context cache for a fine-tuned model The procedure for creating a context cache for a fine-tuned model largely follows the steps outlined in Create a context cache .
- Response { "candidates": [ { "content": { "role": "model", "parts": [ { "text": " MODEL RESPONSE " } ] }, "finishReason": "STOP", "safetyRatings": [ { "category": "HARM CATEGORY HATE SPEECH", "probability": "NEGLIGIBLE", "probabilityScore": 0.21866937, "severity": "HARM SEVERITY NEGLIGIBLE", "severityScore": 0.19946389 }, { "category": "HARM CATEGORY DANGEROUS CONTENT", "probability": "MEDIUM", "probabilityScore": 0.6880493, "severity": "HARM SEVERITY MEDIUM", "severityScore": 0.43374163 }, { "category": "HARM CATEGORY HARASSMENT", "probability": "NEGLIGIBLE", "probabilityScore": 0.4442634, "severity": "HARM SEVERITY LOW", "severityScore": 0.37903354 }, { "category": "HARM CATEGORY SEXUALLY EXPLICIT", "probability": "NEGLIGIBLE", "probabilityScore": 0.10502681, "severity": "HARM SEVERITY LOW", "severityScore": 0.28170192 } ] } ], "usageMetadata": { "promptTokenCount": 55927, "candidatesTokenCount": 105, "totalTokenCount": 56032 } } Example curl command LOCATION = "us-central1" PROJECT ID = "test-project" ENDPOINT ID = 987654321 curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https:// ${ LOCATION } -aiplatform.googleapis.com/v1/projects/ ${ PROJECT ID } /locations/ ${ LOCATION } /endpoints/ ${ ENDPOINT ID } :generateContent" -d \ '{ "cachedContent": "projects/${PROJECT NUMBER}/locations/${LOCATION}/cachedContents/${CACHE ID}", "contents": [ {"role":"user","parts":[{"text":"What are the benefits of exercise?"}]} ], "generationConfig": { "maxOutputTokens": 8192, "temperature": 1, "topP": 0.95, }, "safetySettings": [ { "category": "HARM CATEGORY HATE SPEECH", "threshold": "BLOCK MEDIUM AND ABOVE" }, { "category": "HARM CATEGORY DANGEROUS CONTENT", "threshold": "BLOCK MEDIUM AND ABOVE" }, { "category": "HARM CATEGORY SEXUALLY EXPLICIT", "threshold": "BLOCK MEDIUM AND ABOVE" }, { "category": "HARM CATEGORY HARASSMENT", "threshold": "BLOCK MEDIUM AND ABOVE" } ], }' Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /cachedContents" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "name": "projects/ PROJECT NUMBER /locations/us-central1/cachedContents/ CACHE ID ", "model": "projects/ PROJECT ID /locations/ LOCATION /models/ MODEL ID @ MODEL VERSION ", "createTime": "2024-06-04T01:11:50.808236Z", "updateTime": "2024-06-04T01:11:50.808236Z", "expireTime": "2024-06-04T02:11:50.794542Z" } Example curl command LOCATION = "us-central1" MODEL ID = "model-id" PROJECT ID = "test-project" MODEL VERSION = 1 MIME TYPE = "video/mp4" CACHED CONTENT URI = "gs://path-to-bucket/video-file-name.mp4" curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ https:// ${ LOCATION } -aiplatform.googleapis.com/v1/projects/ ${ PROJECT ID } /locations/ ${ LOCATION } /cachedContents -d \ '{ "model":"projects/${PROJECT ID}/locations/${LOCATION}/models/${MODEL ID}@${MODEL VERSION}", "contents": [ { "role": "user", "parts": [ { "fileData": { "mimeType": "${MIME TYPE}", "fileUri": "${CACHED CONTENT URI}" } } ] } ] }' Use a context cache for a fine-tuned model The procedure for using a context cache for a fine-tuned model largely follows the steps outlined in Use a context cache .

### "Bounding box detection \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/bounding-box-detection](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/bounding-box-detection)
- Source ID: `site-docs-root`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- Once created , it can be reused for multiple requests . try ( Client client = Client . builder () . location ( "global" ) . httpOptions ( HttpOptions . builder () . apiVersion ( "v1" ) . build ()) . vertexAI ( true ) . build ()) { String systemInstruction = "Return bounding boxes as an array with labels. \n " + " Never return masks.
- Client ( http options = HttpOptions ( api version = "v1" )) config = GenerateContentConfig ( system instruction = """ Return bounding boxes as an array with labels.
- GOOGLE CLOUD LOCATION 'global' ; async function fetchImageAsBase64 ( uri ) { const response = await fetch ( uri ); const buffer = await response . buffer (); return buffer . toString ( 'base64' ); } async function plotBoundingBoxes ( imageUri , boundingBoxes ) { console . log ( 'Creating bounding boxes' ); const image = await loadImage ( imageUri ); const canvas = createCanvas ( image . width , image . height ); const ctx = canvas . getContext ( '2d' ); ctx . drawImage ( image , 0 , 0 ); const colors = [ 'red' , 'blue' , 'green' , 'orange' ]; boundingBoxes . forEach (( bbox , i ) = > { const [ yMin , xMin , yMax , xMax ] = bbox . box 2d ; const absYMin = Math . floor (( yMin / 1000 ) image . height ); const absXMin = Math . floor (( xMin / 1000 ) image . width ); const absYMax = Math . floor (( yMax / 1000 ) image . height ); const absXMax = Math . floor (( xMax / 1000 ) image . width ); ctx . strokeStyle = colors [ i % colors . length ]; ctx . lineWidth = 4 ; ctx . strokeRect ( absXMin , absYMin , absXMax - absXMin , absYMax - absYMin ); ctx . fillStyle = colors [ i % colors . length ]; ctx . font = '20px Arial' ; ctx . fillText ( bbox . label , absXMin + 8 , absYMin + 20 ); }); fs . writeFileSync ( 'output.png' , canvas . toBuffer ( 'image/png' )); console . log ( 'Saved output to file: output.png' ); } async function createBoundingBox ( projectId = GOOGLE CLOUD PROJECT , location = GOOGLE CLOUD LOCATION ) { const client = new GoogleGenAI ({ vertexai : true , project : projectId , location : location , }); const systemInstruction = Return bounding boxes as an array with labels .
- If an object is present multiple times , give each object a unique label according to its distinct characteristics ( colors , size , position , etc ) . ; const safetySettings = [ { category : 'HARM CATEGORY DANGEROUS CONTENT' , threshold : 'BLOCK ONLY HIGH' , }, ]; const imageUri = 'https://storage.googleapis.com/generativeai-downloads/images/socks.jpg' ; const base64Image = await fetchImageAsBase64 ( imageUri ); const boundingBoxSchema = { type : 'ARRAY' , description : 'List of bounding boxes for detected objects' , items : { type : 'OBJECT' , title : 'BoundingBox' , description : 'Represents a bounding box with coordinates and label' , properties : { box 2d : { type : 'ARRAY' , description : 'Bounding box coordinates in format [y min, x min, y max, x max]' , items : { type : 'INTEGER' , format : 'int32' , }, minItems : 4 , maxItems : 4 , }, label : { type : 'STRING' , description : 'Label describing the object within the bounding box' , }, }, required : [ 'box 2d' , 'label' ], }, }; const response = await client . models . generateContent ({ model : 'gemini-2.5-flash' , contents : [ { role : 'user' , parts : [ { text : 'Output the positions of the socks with a face.

