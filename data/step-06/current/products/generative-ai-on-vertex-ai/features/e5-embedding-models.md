---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.723Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "E5 embedding models"
feature_slug: "e5-embedding-models"
latest_feature_date: "2024-05-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-text-embeddings"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/batch-prediction-genai-embeddings"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings"
keywords:
  - "e5"
  - "embedding"
  - "models"
  - "is"
  - "text"
  - "model"
  - "series"
  - "that"
---

# E5 embedding models

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

E5 is a text embedding model series that can be served with a GPU or CPU.

## Extended Definition

E5 is a text embedding model series that can be served with a GPU or CPU.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-text-embeddings](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-text-embeddings)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/batch-prediction-genai-embeddings](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/batch-prediction-genai-embeddings)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings)

## Supporting Pages

### "Get text embeddings \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-text-embeddings](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-text-embeddings)
- Source ID: `site-docs-root`
- Final score: 259
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- HTTP method and URL: POST https://us-central1-aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/us-central1/publishers/google/models/gemini-embedding-001:predict Request JSON body: { "instances": [ { "content": " TEXT "} ], "parameters": { "autoTruncate": AUTO TRUNCATE } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Response { "predictions": [ { "embeddings": { "statistics": { "truncated": false, "token count": 6 }, "values": [ ... ] } } ] } Example curl command MODEL ID= "gemini-embedding-001" PROJECT ID= PROJECT ID curl \ - X POST \ - H "Authorization: Bearer $(gcloud auth print-access-token)" \ - H "Content-Type: application/json" \ h tt ps : //us-central1-aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/us-central1/publishers/google/models/${MODEL ID}:predict -d \ $' { "instances" : [ { "content" : "What is life?" } ], } ' Supported models The following tables show the available Google and open text embedding models.
- Save the request body in a file named request.json , and execute the following command: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://us-central1-aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/us-central1/publishers/google/models/gemini-embedding-001:predict" PowerShell Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .
- To get batch predictions for embeddings, see Get batch text embeddings predictions To learn more about multimodal embeddings, see Get multimodal embeddings To tune an embedding, see Tune text embeddings To learn more about the research behind text-embedding-005 and text-multilingual-embedding-002 , see the research paper Gecko: Versatile Text Embeddings Distilled from Large Language Models .

### "Get batch text embeddings inferences \_|\_ Generative AI on Vertex AI \_\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/batch-prediction-genai-embeddings](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/batch-prediction-genai-embeddings)
- Source ID: `site-docs-root`
- Final score: 212
- Re-rank relevance: N/A

Evidence snippets:
- HTTP method and URL: POST https://us-central1-aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/us-central1/batchPredictionJobs Request JSON body: { "name": " BP JOB NAME ", "displayName": " BP JOB NAME ", "model": " publishers/google/models/textembedding-gecko ", "inputConfig": { "instancesFormat":"bigquery", "bigquerySource":{ "inputUri" : " INPUT URI " } }, "outputConfig": { "predictionsFormat":"bigquery", "bigqueryDestination":{ "outputUri": " OUTPUT URI " } } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://us-central1-aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/us-central1/batchPredictionJobs" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/123456789012/locations/us-central1/batchPredictionJobs/1234567890123456789", "displayName": "BP sample publisher BQ 20230712 134650", "model": "projects/{PROJECT ID}/locations/us-central1/models/textembedding-gecko", "inputConfig": { "instancesFormat": "bigquery", "bigquerySource": { "inputUri": "bq://project name.dataset name.text input" } }, "modelParameters": {}, "outputConfig": { "predictionsFormat": "bigquery", "bigqueryDestination": { "outputUri": "bq://project name.llm dataset.embedding out BP sample publisher BQ 20230712 134650" } }, "state": "JOB STATE PENDING", "createTime": "2023-07-12T20:46:52.148717Z", "updateTime": "2023-07-12T20:46:52.148717Z", "labels": { "owner": "sample owner", "product": "llm" }, "modelVersionId": "1", "modelMonitoringStatus": {} } The response includes a unique identifier for the batch job.
- Text embeddings models that support batch inferences All stable versions of text embedding models support batch inferences with the exception of Gemini embeddings (gemini-embedding-001).
- Batches . html let job = await client . batches . create ({ model : 'text-embedding-005' , // Source link : https : // storage . cloud . google . com / cloud - samples - data / batch / prompt for batch gemini predict . jsonl src : 'gs://cloud-samples-data/generative-ai/embeddings/embeddings input.jsonl' , config : { dest : outputUri , }, }); console . log ( Job name : $ { job . name } ); console . log ( Job state : $ { job . state } ); // Example response : // Job name : projects /% PROJECT ID %/ locations / us - central1 / batchPredictionJobs / 9876453210000000000 // Job state : JOB STATE PENDING const completedStates = new Set ([ 'JOB STATE SUCCEEDED' , 'JOB STATE FAILED' , 'JOB STATE CANCELLED' , 'JOB STATE PAUSED' , ]); while ( ! completedStates . has ( job . state )) { await new Promise ( resolve = > setTimeout ( resolve , 30000 )); job = await client . batches . get ({ name : job . name }); console . log ( Job state : $ { job . state } ); } // Example response : // Job state : JOB STATE PENDING // Job state : JOB STATE RUNNING // Job state : JOB STATE RUNNING // ... // Job state : JOB STATE SUCCEEDED return job . state ; } Java Learn how to install or update the Java .

### "Embeddings APIs overview \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Vertex AI supports two types of embeddings models, text and multimodal.
- The embeddings in this example could be comprised of thousands of book titles with summaries and their genre, and it might have representations for books like Wuthering Heights by Emily Brontë and Persuasion by Jane Austen that are similar to each other (small distance between numerical representation).
- To learn how to get embeddings, see the following documents: Get text embeddings Get multimodal embeddings Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- By merging these image and text embeddings into a unified search and recommendation engine, the store can offer personalized recommendations of visually similar items based on a customer's browsing history and preferences.

### "Get multimodal embeddings \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- HTTP method and URL: POST https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/multimodalembedding@001:predict Request JSON body: { "instances": [ { "text": " TEXT ", "image": { "gcsUri": " IMAGE URI " }, "video": { "gcsUri": " VIDEO URI ", "videoSegmentConfig": { "startOffsetSec": START SECOND , "endOffsetSec": END SECOND , "intervalSec": INTERVAL SECONDS } } } ] } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: POST https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/multimodalembedding@001:predict Request JSON body: { "instances": [ { "image": { "gcsUri": " IMAGE URI " }, "text": " TEXT " } ], "parameters": { "dimension": EMBEDDING DIMENSION } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: POST https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/multimodalembedding@001:predict Request JSON body: { "instances": [ { "text": " TEXT ", "image": { "bytesBase64Encoded": " B64 ENCODED IMG " } } ] } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample.\ (Not necessary if passing values as arguments) / // const project = 'YOUR PROJECT ID'; // const location = 'YOUR PROJECT LOCATION'; // const baseImagePath = 'YOUR BASE IMAGE PATH'; // const textPrompt = 'YOUR TEXT PROMPT'; const aiplatform = require ( ' @google-cloud/aiplatform ' ); // Imports the Google Cloud Prediction service client const { PredictionServiceClient } = aiplatform . v1 ; // Import the helper module for converting arbitrary protobuf.Value objects. const { helpers } = aiplatform ; // Specifies the location of the api endpoint const clientOptions = { apiEndpoint : 'us-central1-aiplatform.googleapis.com' , }; const publisher = 'google' ; const model = 'multimodalembedding@001' ; // Instantiates a client const predictionServiceClient = new PredictionServiceClient ( clientOptions ); async function predictImageFromImageAndText () { // Configure the parent resource const endpoint = projects/ ${ project } /locations/ ${ location } /publishers/ ${ publisher } /models/ ${ model } ; const fs = require ( 'fs' ); const imageFile = fs . readFileSync ( baseImagePath ); // Convert the image data to a Buffer and base64 encode it. const encodedImage = Buffer . from ( imageFile ). toString ( 'base64' ); const prompt = { text : textPrompt , image : { bytesBase64Encoded : encodedImage , }, }; const instanceValue = helpers . toValue ( prompt ); const instances = [ instanceValue ]; const parameter = { sampleCount : 1 , }; const parameters = helpers . toValue ( parameter ); const request = { endpoint , instances , parameters , }; // Predict request const [ response ] = await predictionServiceClient . predict ( request ); console . log ( 'Get image embedding response' ); const predictions = response . predictions ; console . log ( '\tPredictions :' ); for ( const prediction of predictions ) { console . log ( \t\tPrediction : ${ JSON . stringify ( prediction ) } ); } } await predictImageFromImageAndText (); Java Before trying this sample, follow the Java setup instructions in the Vertex AI quickstart using client libraries .

