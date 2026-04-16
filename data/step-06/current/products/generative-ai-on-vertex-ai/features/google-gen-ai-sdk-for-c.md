---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.661Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "Google Gen AI SDK for C#"
feature_slug: "google-gen-ai-sdk-for-c"
latest_feature_date: "2025-10-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/web-grounding-enterprise"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/batch-prediction-genai-embeddings"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai"
keywords:
  - "gen"
  - "ai"
  - "sdk"
  - "for"
  - "the"
  - "is"
  - "available"
  - "in"
---

# Google Gen AI SDK for C#

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

The Google Gen AI SDK is available in C# Preview with support for content generation, image generation, and Live API methods.

## Extended Definition

The Google Gen AI SDK is available in C# Preview with support for content generation, image generation, and Live API methods.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/web-grounding-enterprise](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/web-grounding-enterprise)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/batch-prediction-genai-embeddings](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/batch-prediction-genai-embeddings)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai)

## Supporting Pages

### "Grounding with Google Maps in Vertex AI \_|\_ Generative AI on Vertex AI\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps)
- Source ID: `site-docs-root`
- Final score: 353
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Routing tool supports the following: Modes of transportation : Routing for driving, walking, bicycling, transit, and two-wheeled motorized vehicles (not all travel modes are available in all countries) Multiple waypoints : Up to 13 intermediate stops between origin and destination Real-time traffic : Accounting for current traffic conditions to provide accurate "live" travel times rather than static averages The following are examples of the types of questions that the Routing tool supports: Proximity based on travel time : "What are some American restaurants within a 10-minute walk from the Hilton Hotel on 1335 6th Ave in NYC?" Commute estimation : "How long does it take to take public transit from Pike Place Market to Capitol Hill in Seattle?" Understand the response When a prompt triggers the Routing tool, the model generates a natural language answer backed by structured metadata.
- HTTP method and URL: POST https:// LOCATION -aiplatform.googleapis.com/v1beta1/projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/ MODEL ID :generateContent Request JSON body: { "contents": [{ "role": "user", "parts": [{ "text": " PROMPT " }] }], "tools": [{ "googleMaps": { "enableWidget": " ENABLE WIDGET " } }], "toolConfig": { "retrievalConfig": { "latLng": { "latitude": LATITUDE , "longitude": LONGITUDE }, "languageCode": "en US" } }, "model": "projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/ MODEL ID " } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https:// LOCATION -aiplatform.googleapis.com/v1beta1/projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/ MODEL ID :generateContent" Select-Object -Expand Content You should receive a JSON response similar to the following: { "candidates": [ { "content": { "role": "model", "parts": [ { "text": "\"The Italian Place\" in Alexandria, VA, is good for children and offers takeout.
- Save the request body in a file named request.json , and execute the following command: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https:// LOCATION -aiplatform.googleapis.com/v1beta1/projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/ MODEL ID :generateContent" PowerShell (Windows) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .

### "Web Grounding for Enterprise \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/web-grounding-enterprise](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/web-grounding-enterprise)
- Source ID: `site-docs-root`
- Final score: 349
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- PROMPT : Your prompt. curl -X POST -H "Authorization: Bearer $( gcloud auth print-access-token ) " -H "Content-Type: application/json" -H "x-server-timeout: 60" https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT NUMBER /locations/ LOCATION /publishers/google/models/gemini-2.0-flash:generateContent -d ' { "contents": [{ "role": "user", "parts": [{ "text": PROMPT }] }], "tools": [{ "enterpriseWebSearch": { } }] } ' Use Google Search suggestions When you use Web Grounding for Enterprise, and you receive Search suggestions in your response, you must display the Search suggestions in production and in your applications.
- Set environment variables to use the Gen AI SDK with Vertex AI: Replace the GOOGLE CLOUD PROJECT and GOOGLE CLOUD LOCATION values with appropriate values for your project. export GOOGLE CLOUD PROJECT = GOOGLE CLOUD PROJECT export GOOGLE CLOUD LOCATION = global export GOOGLE GENAI USE VERTEXAI = True from google import genai from google.genai.types import ( EnterpriseWebSearch , GenerateContentConfig , HttpOptions , Tool , ) client = genai .
- The indexed content is a subset of what's available on Google Search and suitable for customers in highly-regulated industries, such as finance, healthcare, and the public sector.
- Home Documentation AI and ML Vertex AI Generative AI on Vertex AI Guides Send feedback Web Grounding for Enterprise Stay organized with collections Save and categorize content based on your preferences.

### "Get batch text embeddings inferences \_|\_ Generative AI on Vertex AI \_\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/batch-prediction-genai-embeddings](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/batch-prediction-genai-embeddings)
- Source ID: `site-docs-root`
- Final score: 345
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Once created , it can be reused for multiple requests . try ( Client client = Client . builder () . location ( "us-central1" ) . vertexAI ( true ) . httpOptions ( HttpOptions . builder () . apiVersion ( "v1" ) . build ()) . build ()) { // See the documentation : // https : // googleapis . github . io / java - genai / javadoc / com / google / genai / Batches . html BatchJobSource batchJobSource = BatchJobSource . builder () // Source link : // https : // storage . cloud . google . com / cloud - samples - data / generative - ai / embeddings / embeddings input . jsonl . gcsUri ( "gs://cloud-samples-data/generative-ai/embeddings/embeddings input.jsonl" ) . format ( "jsonl" ) . build (); CreateBatchJobConfig batchJobConfig = CreateBatchJobConfig . builder () . displayName ( "your-display-name" ) . dest ( BatchJobDestination . builder () . gcsUri ( outputGcsUri ) . format ( "jsonl" ) . build ()) . build (); BatchJob batchJob = client . batches . create ( modelId , batchJobSource , batchJobConfig ); String jobName = batchJob . name () . orElseThrow (() - > new IllegalStateException ( "Missing job name" )); JobState jobState = batchJob . state () . orElseThrow (() - > new IllegalStateException ( "Missing job state" )); System . out . println ( "Job name: " + jobName ); System . out . println ( "Job state: " + jobState ); // Job name : projects /.../ locations /.../ batchPredictionJobs / 6205497615459549184 // Job state : JOB STATE PENDING // See the documentation : // https : // googleapis . github . io / java - genai / javadoc / com / google / genai / types / BatchJob . html Set<JobState .
- Batches . html let job = await client . batches . create ({ model : 'text-embedding-005' , // Source link : https : // storage . cloud . google . com / cloud - samples - data / batch / prompt for batch gemini predict . jsonl src : 'gs://cloud-samples-data/generative-ai/embeddings/embeddings input.jsonl' , config : { dest : outputUri , }, }); console . log ( Job name : $ { job . name } ); console . log ( Job state : $ { job . state } ); // Example response : // Job name : projects /% PROJECT ID %/ locations / us - central1 / batchPredictionJobs / 9876453210000000000 // Job state : JOB STATE PENDING const completedStates = new Set ([ 'JOB STATE SUCCEEDED' , 'JOB STATE FAILED' , 'JOB STATE CANCELLED' , 'JOB STATE PAUSED' , ]); while ( ! completedStates . has ( job . state )) { await new Promise ( resolve = > setTimeout ( resolve , 30000 )); job = await client . batches . get ({ name : job . name }); console . log ( Job state : $ { job . state } ); } // Example response : // Job state : JOB STATE PENDING // Job state : JOB STATE RUNNING // Job state : JOB STATE RUNNING // ... // Job state : JOB STATE SUCCEEDED return job . state ; } Java Learn how to install or update the Java .
- Set environment variables to use the Gen AI SDK with Vertex AI: Replace the GOOGLE CLOUD PROJECT and GOOGLE CLOUD LOCATION values with appropriate values for your project. export GOOGLE CLOUD PROJECT = GOOGLE CLOUD PROJECT export GOOGLE CLOUD LOCATION = us-central1 export GOOGLE GENAI USE VERTEXAI = True import ( "context" "fmt" "io" "time" "google.golang.org/genai" ) // generateBatchEmbeddings shows how to run a batch embeddings prediction job . func generateBatchEmbeddings ( w io .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://us-central1-aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/us-central1/batchPredictionJobs" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/123456789012/locations/us-central1/batchPredictionJobs/1234567890123456789", "displayName": "BP sample publisher BQ 20230712 134650", "model": "projects/{PROJECT ID}/locations/us-central1/models/textembedding-gecko", "inputConfig": { "instancesFormat": "bigquery", "bigquerySource": { "inputUri": "bq://project name.dataset name.text input" } }, "modelParameters": {}, "outputConfig": { "predictionsFormat": "bigquery", "bigqueryDestination": { "outputUri": "bq://project name.llm dataset.embedding out BP sample publisher BQ 20230712 134650" } }, "state": "JOB STATE PENDING", "createTime": "2023-07-12T20:46:52.148717Z", "updateTime": "2023-07-12T20:46:52.148717Z", "labels": { "owner": "sample owner", "product": "llm" }, "modelVersionId": "1", "modelMonitoringStatus": {} } The response includes a unique identifier for the batch job.

### "Generative AI glossary \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai)
- Source ID: `site-docs-root`
- Final score: 341
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- However, for generative tasks like summarization and text generation, other metrics like Rough-L score might be more appropriate. feature In machine learning (ML), a feature is a characteristic or attribute of an instance or entity that's used as an input to train an ML model or to make inferences. feature extraction In the context of generative AI, feature extraction refers to the process of identifying and selecting relevant features from input data to be used in model training.
- Bidirectional Encoder Representations from Transformers (BERT) BERT is a method of pre-training language representations, meaning that we train a general-purpose "language understanding" model on a large text corpus (like Wikipedia), and then use that model for downstream NLP tasks that we care about (like question answering).
- By understanding the relationships between words, generative AI models can create new content that is both coherent and relevant. zero-shot prompt (direct prompting) In generative AI, a zero-shot prompt is a prompt that enables a large language model (LLM) to perform a task without any additional training or examples.
- Ray on Vertex AI SDK for Python Ray on Vertex AI SDK for Python is a version of the Vertex AI SDK for Python that includes the functionality of the Ray Client, Ray BigQuery connector, Ray cluster management on Vertex AI, and inferences on Vertex AI.

