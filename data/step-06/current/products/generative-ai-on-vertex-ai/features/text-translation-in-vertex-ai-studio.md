---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.731Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "Text translation in Vertex AI Studio"
feature_slug: "text-translation-in-vertex-ai-studio"
latest_feature_date: "2024-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-vertex-ai-search"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/express-mode/vertex-ai-studio-express-mode-quickstart"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/batch-prediction-genai-embeddings"
keywords:
  - "text"
  - "translation"
  - "in"
  - "vertex"
  - "ai"
  - "studio"
  - "can"
  - "translate"
---

# Text translation in Vertex AI Studio

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Vertex AI Studio can translate text in Preview.

## Extended Definition

Vertex AI Studio can translate text in Preview.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-vertex-ai-search](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-vertex-ai-search)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/express-mode/vertex-ai-studio-express-mode-quickstart](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/express-mode/vertex-ai-studio-express-mode-quickstart)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/batch-prediction-genai-embeddings](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/batch-prediction-genai-embeddings)

## Supporting Pages

### "Grounding with Vertex AI Search \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-vertex-ai-search](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-vertex-ai-search)
- Source ID: `site-docs-root`
- Final score: 329
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https:// LOCATION -aiplatform.googleapis.com/v1beta1/projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/ MODEL ID :generateContent" Select-Object -Expand Content You should receive a JSON response similar to the following: { "candidates": [ { "content": { "role": "model", "parts": [ { "text": "You can make an appointment on the website https://dmv.gov/" } ] }, "finishReason": "STOP", "safetyRatings": [ "..." ], "groundingMetadata": { "retrievalQueries": [ "How to make appointment to renew driving license?" ], "groundingChunks": [ { "retrievedContext": { "uri": "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AXiHM.....QTN92V5ePQ==", "title": "dmv" } } ], "groundingSupport": [ { "segment": { "startIndex": 25, "endIndex": 147 }, "segment text": "ipsum lorem ...", "supportChunkIndices": [1, 2], "confidenceScore": [0.9541752, 0.97726375] }, { "segment": { "startIndex": 294, "endIndex": 439 }, "segment text": "ipsum lorem ...", "supportChunkIndices": [1], "confidenceScore": [0.9541752, 0.9325467] } ] } } ], "usageMetadata": { "..." } } Understand your response The response from both APIs include the LLM-generated text, which is called a candidate .
- Client ( http options = HttpOptions ( api version = "v1" )) Replace with your Vertex AI Search data store details DATASTORE PATH = "projects/ PROJECT ID /locations/global/collections/default collection/dataStores/DATASTORE ID" tool = Tool ( retrieval = Retrieval ( vertex ai search = VertexAISearch ( datastore = DATASTORE PATH ) ) ) response = client . models . generate content ( model = "gemini-2.5-flash" , # Or another supported model contents = "What information can you find about topic X in the provided documents?" , # Your query config = GenerateContentConfig ( tools = [ tool ], ), ) print ( response . text ) REST To test a text prompt by using the Vertex AI API, send a POST request to the publisher model endpoint.
- HTTP method and URL: POST https:// LOCATION -aiplatform.googleapis.com/v1beta1/projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/ MODEL ID :generateContent Request JSON body: { "contents": [{ "role": "user", "parts": [{ "text": " PROMPT " }] }], "tools": [{ "retrieval": { "vertexAiSearch": { "datastore": projects/ PROJECT ID /locations/global/collections/default collection/dataStores/ DATASTORE ID } } }], "model": "projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/ MODEL ID " } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Console To ground your model output to AI Applications by using Vertex AI Studio in the Google Cloud console, follow these steps: In the Google Cloud console, go to the Vertex AI Studio page.

### "Grounding with Google Maps in Vertex AI \_|\_ Generative AI on Vertex AI\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps)
- Source ID: `site-docs-root`
- Final score: 327
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The contextual widget is rendered using the context token, googleMapsWidgetContextToken , which is returned in the Vertex AI API response and can be used to render visual content.
- This page describes how Grounding with Google Maps with Vertex AI can help to enhance your generative AI applications by providing geospatial context.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https:// LOCATION -aiplatform.googleapis.com/v1beta1/projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/ MODEL ID :generateContent" Select-Object -Expand Content You should receive a JSON response similar to the following: { "candidates": [ { "content": { "role": "model", "parts": [ { "text": "\"The Italian Place\" in Alexandria, VA, is good for children and offers takeout.
- This data gives you access to information on over 250 million places that can be used to ground your model's responses, enabling your AI applications and agents to provide local data and geospatial context.

### "Tutorial: Vertex AI Studio in express mode \_|\_ Generative AI on Vertex\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/express-mode/vertex-ai-studio-express-mode-quickstart](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/express-mode/vertex-ai-studio-express-mode-quickstart)
- Source ID: `site-docs-root`
- Final score: 317
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- A response like the following is returned in the Response box: the best dreams HAPPEN when you are awake Design a chatbot and get the code To design a chatbot in Vertex AI Studio and get the code for it, do the following: In the Vertex AI section of the Google Cloud console, go to the Vertex AI Studio page.
- Home Documentation AI and ML Vertex AI Generative AI on Vertex AI Guides Send feedback Tutorial: Vertex AI Studio in express mode Stay organized with collections Save and categorize content based on your preferences.
- View and try a list of sample prompts To view and try a sample prompt in Vertex AI Studio, do the following: In the Vertex AI section of the Google Cloud console, go to the Vertex AI Studio page.
- This quickstart shows you how to perform the following tasks in Vertex AI Studio in express mode: View and try a list of sample prompts.

### "Get batch text embeddings inferences \_|\_ Generative AI on Vertex AI \_\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/batch-prediction-genai-embeddings](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/batch-prediction-genai-embeddings)
- Source ID: `site-docs-root`
- Final score: 300
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Once created , it can be reused for multiple requests . try ( Client client = Client . builder () . location ( "us-central1" ) . vertexAI ( true ) . httpOptions ( HttpOptions . builder () . apiVersion ( "v1" ) . build ()) . build ()) { // See the documentation : // https : // googleapis . github . io / java - genai / javadoc / com / google / genai / Batches . html BatchJobSource batchJobSource = BatchJobSource . builder () // Source link : // https : // storage . cloud . google . com / cloud - samples - data / generative - ai / embeddings / embeddings input . jsonl . gcsUri ( "gs://cloud-samples-data/generative-ai/embeddings/embeddings input.jsonl" ) . format ( "jsonl" ) . build (); CreateBatchJobConfig batchJobConfig = CreateBatchJobConfig . builder () . displayName ( "your-display-name" ) . dest ( BatchJobDestination . builder () . gcsUri ( outputGcsUri ) . format ( "jsonl" ) . build ()) . build (); BatchJob batchJob = client . batches . create ( modelId , batchJobSource , batchJobConfig ); String jobName = batchJob . name () . orElseThrow (() - > new IllegalStateException ( "Missing job name" )); JobState jobState = batchJob . state () . orElseThrow (() - > new IllegalStateException ( "Missing job state" )); System . out . println ( "Job name: " + jobName ); System . out . println ( "Job state: " + jobState ); // Job name : projects /.../ locations /.../ batchPredictionJobs / 6205497615459549184 // Job state : JOB STATE PENDING // See the documentation : // https : // googleapis . github . io / java - genai / javadoc / com / google / genai / types / BatchJob . html Set<JobState .
- Batches . html let job = await client . batches . create ({ model : 'text-embedding-005' , // Source link : https : // storage . cloud . google . com / cloud - samples - data / batch / prompt for batch gemini predict . jsonl src : 'gs://cloud-samples-data/generative-ai/embeddings/embeddings input.jsonl' , config : { dest : outputUri , }, }); console . log ( Job name : $ { job . name } ); console . log ( Job state : $ { job . state } ); // Example response : // Job name : projects /% PROJECT ID %/ locations / us - central1 / batchPredictionJobs / 9876453210000000000 // Job state : JOB STATE PENDING const completedStates = new Set ([ 'JOB STATE SUCCEEDED' , 'JOB STATE FAILED' , 'JOB STATE CANCELLED' , 'JOB STATE PAUSED' , ]); while ( ! completedStates . has ( job . state )) { await new Promise ( resolve = > setTimeout ( resolve , 30000 )); job = await client . batches . get ({ name : job . name }); console . log ( Job state : $ { job . state } ); } // Example response : // Job state : JOB STATE PENDING // Job state : JOB STATE RUNNING // Job state : JOB STATE RUNNING // ... // Job state : JOB STATE SUCCEEDED return job . state ; } Java Learn how to install or update the Java .
- Set environment variables to use the Gen AI SDK with Vertex AI: Replace the GOOGLE CLOUD PROJECT and GOOGLE CLOUD LOCATION values with appropriate values for your project. export GOOGLE CLOUD PROJECT = GOOGLE CLOUD PROJECT export GOOGLE CLOUD LOCATION = us-central1 export GOOGLE GENAI USE VERTEXAI = True import ( "context" "fmt" "io" "time" "google.golang.org/genai" ) // generateBatchEmbeddings shows how to run a batch embeddings prediction job . func generateBatchEmbeddings ( w io .
- Home Documentation AI and ML Vertex AI Generative AI on Vertex AI Guides Send feedback Get batch text embeddings inferences Stay organized with collections Save and categorize content based on your preferences.

