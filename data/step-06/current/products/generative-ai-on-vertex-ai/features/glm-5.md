---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.645Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "GLM 5"
feature_slug: "glm-5"
latest_feature_date: "2026-02-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/quickstart"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/task-types"
keywords:
  - "glm"
  - "is"
  - "available"
  - "in"
  - "model"
  - "garden"
  - "as"
  - "an"
---

# GLM 5

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

GLM 5 is available in Model Garden as an experimental managed API launch.

## Extended Definition

GLM 5 is available in Model Garden as an experimental managed API launch.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/quickstart](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/quickstart)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/task-types](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/task-types)

## Supporting Pages

### "Deploy and inference Gemma using Model Garden and Vertex AI GPU-backed endpoints\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial)
- Source ID: `site-docs-root`
- Final score: 308
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- QUERY PARAMETERS " Select-Object -Expand Content You receive a JSON response similar to the following. { "publisherModels": [ { "name": "publishers/google/models/gemma3", "versionId": "gemma-3-1b-it", "openSourceCategory": "GOOGLE OWNED OSS WITH GOOGLE CHECKPOINT", "supportedActions": { "openNotebook": { "references": { "us-central1": { "uri": "https://colab.research.google.com/github/GoogleCloudPlatform/vertex-ai-samples/blob/main/notebooks/community/model garden/model garden gradio streaming chat completions.ipynb" } }, "resourceTitle": "Notebook", "resourceUseCase": "Chat Completion Playground", "resourceDescription": "Chat with deployed Gemma 2 endpoints via Gradio UI." }, "deploy": { "modelDisplayName": "gemma-3-1b-it", "containerSpec": { "imageUri": "us-docker.pkg.dev/vertex-ai/vertex-vision-model-garden-dockers/pytorch-vllm-serve:20250312 0916 RC01", "args": [ "python", "-m", "vllm.entrypoints.api server", "--host=0.0.0.0", "--port=8080", "--model=gs://vertex-model-garden-restricted-us/gemma3/gemma-3-1b-it", "--tensor-parallel-size=1", "--swap-space=16", "--gpu-memory-utilization=0.95", "--disable-log-stats" ], "env": [ { "name": "MODEL ID", "value": "google/gemma-3-1b-it" }, { "name": "DEPLOY SOURCE", "value": "UI NATIVE MODEL" } ], "ports": [ { "containerPort": 8080 } ], "predictRoute": "/generate", "healthRoute": "/ping" }, "dedicatedResources": { "machineSpec": { "machineType": "g2-standard-12", "acceleratorType": "NVIDIA L4", "acceleratorCount": 1 } }, "publicArtifactUri": "gs://vertex-model-garden-restricted-us/gemma3/gemma3.tar.gz", "deployTaskName": "vLLM 128K context", "deployMetadata": { "sampleRequest": "{\n \"instances\": [\n {\n \"@requestFormat\": \"chatCompletions\",\n \"messages\": [\n {\n \"role\": \"user\",\n \"content\": \"What is machine learning?\"\n }\n ],\n \"max tokens\": 100\n }\n ]\n}\n" } }, ...
- Run the following command in the terminal to create or overwrite this file in the current directory: @' { "publisher model name": " MODEL ID ", "deploy config": { "dedicated resources": { "machine spec": { "machine type": " MACHINE TYPE ", "accelerator type": " ACCELERATOR TYPE ", "accelerator count": ACCELERATOR COUNT , "reservation affinity": { "reservation affinity type": "ANY RESERVATION" } }, "spot": "false" } }, "model config": { "accept eula": "true", "container spec": { "image uri": " IMAGE URI ", "args": [ CONTAINER ARGS ], "ports": [ { "container port": CONTAINER PORT } ] } }, "deploy config": { "fast tryout enabled": false }, } '@ Out-File -FilePath request.json -Encoding utf8 Then execute the following command to send your REST request: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION :deploy" Select-Object -Expand Content You receive a JSON response similar to the following. { "name": "projects/ PROJECT ID /locations/ LOCATION /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.aiplatform.v1.DeployOperationMetadata", "genericMetadata": { "createTime": "2025-03-13T21:44:44.538780Z", "updateTime": "2025-03-13T21:44:44.538780Z" }, "publisherModel": "publishers/google/models/gemma3@gemma-3-1b-it", "destination": "projects/ PROJECT ID /locations/ LOCATION ", "projectNumber": " PROJECT ID " } } Console In the Google Cloud console, go to the Model Garden page.
- To run the command asynchronously, include the --asynchronous flag. gcloud ai model-garden models deploy \ --model = MODEL ID \ [ --machine-type = MACHINE TYPE ] \ [ --accelerator-type = ACCELERATOR TYPE ] \ [ --endpoint-display-name = ENDPOINT NAME ] \ [ --hugging-face-access-token = HF ACCESS TOKEN ] \ [ --reservation-affinity reservation-affinity-type = any-reservation ] \ [ --reservation-affinity reservation-affinity-type = specific-reservation, key = "compute.googleapis.com/reservation-name" , values = RESERVATION RESOURCE NAME ] \ [ --asynchronous ] Replace the following placeholders: MODEL ID : The model ID from the previous list command.
- Objectives This tutorial shows you how to perform the following tasks: Deploy the Gemma 3 1B open model to a GPU backed endpoint by using Model Garden Use the PredictionServiceClient to get online predictions Costs In this document, you use the following billable components of Google Cloud: A g2-standard-12 machine type with one NVIDIA L4 accelerator Vertex AI prediction and explanation To generate a cost estimate based on your projected usage, use the pricing calculator .

### "Deploy and inference Gemma using Model Garden and Vertex AI TPU-backed endpoints\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu)
- Source ID: `site-docs-root`
- Final score: 300
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Objectives This tutorial shows you how to perform the following tasks: Deploy the Gemma 2 2B open model to a TPU backed endpoint by using Model Garden Use the PredictionServiceClient to get online predictions Costs In this document, you use the following billable components of Google Cloud: A ct5lp-hightpu-1t machine type with one TPU V5 accelerator Vertex AI prediction and explanation To generate a cost estimate based on your projected usage, use the pricing calculator .
- String projectId = "YOUR PROJECT ID" ; String endpointRegion = "us-west1" ; String endpointId = "YOUR ENDPOINT ID" ; PredictionServiceSettings predictionServiceSettings = PredictionServiceSettings . newBuilder () . setEndpoint ( String . format ( "%s-aiplatform.googleapis.com:443" , endpointRegion )) . build (); PredictionServiceClient predictionServiceClient = PredictionServiceClient . create ( predictionServiceSettings ); Gemma2PredictTpu creator = new Gemma2PredictTpu ( predictionServiceClient ); creator . gemma2PredictTpu ( projectId , endpointRegion , endpointId ); } // Demonstrates how to run inference on a Gemma2 model // deployed to a Vertex AI endpoint with TPU accelerators. public String gemma2PredictTpu ( String projectId , String region , String endpointId ) throws IOException { Map<String , Object > paramsMap = new HashMap <> (); paramsMap . put ( "temperature" , 0.9 ); paramsMap . put ( "maxOutputTokens" , 1024 ); paramsMap . put ( "topP" , 1.0 ); paramsMap . put ( "topK" , 1 ); Value parameters = mapToValue ( paramsMap ); // Prompt used in the prediction String instance = "{ \"prompt\": \"Why is the sky blue?\"}" ; Value .
- Using endpoint [https://us-central1-aiplatform.googleapis.com/] artifactUri: [URI removed] baseModelSource: modelGardenSource: publicModelName: publishers/google/models/gemma2 ... deployedModels: - deployedModelId: '1234567891234567891' endpoint: projects/12345678912/locations/us-central1/endpoints/12345678912345 displayName: gemma2-2b-it-12345678912345 etag: [ETag removed] modelSourceInfo: sourceType: MODEL GARDEN name: projects/123456789123/locations/us-central1/models/gemma2-2b-it-12345678912345 ...
- The aiplatform Go client library Go support for Protocol Buffers Google API Extensions for Go (gax-go) go get cloud.google.com/go/aiplatform go get google.golang.org/protobuf go get github.com/googleapis/gax-go/v2 Deploy Gemma using Model Garden You deploy the Gemma 2 2B model to a ct5lp-hightpu-1t Compute Engine machine type that is optimized for small to medium scale training.

### "Test model capabilities in Model Garden \_|\_ Generative AI on Vertex AI\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/quickstart](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/quickstart)
- Source ID: `site-docs-root`
- Final score: 242
- Re-rank relevance: N/A

Evidence snippets:
- Required roles for users To get the permissions that you need to test model capabilities in Model Garden, ask your administrator to grant you the following IAM roles on your Google Cloud project: Service Usage Admin ( roles/serviceusage.serviceUsageAdmin ) Artifact Registry Administrator ( roles/artifactregistry.admin ) Cloud Run Admin ( roles/run.admin ) Storage Admin ( roles/storage.admin ) Vertex AI User ( roles/aiplatform.user ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Enable the APIs If you want to try Model Garden Spaces, then verify that the Compute Engine default service account has the required permissions to launch Spaces.
- Home Documentation AI and ML Vertex AI Generative AI on Vertex AI Guides Send feedback Test model capabilities in Model Garden Stay organized with collections Save and categorize content based on your preferences.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

### "Choose an embeddings task type \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/task-types](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/task-types)
- Source ID: `site-docs-root`
- Final score: 208
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see the Python API reference documentation . from vertexai.language models import TextEmbeddingInput , TextEmbeddingModel MODEL NAME = "gemini-embedding-001" DIMENSIONALITY = 3072 def embed text ( texts : list [ str ] = [ "Retrieve a function that adds two numbers" ], task : str = "CODE RETRIEVAL QUERY" , model name : str = "gemini-embedding-001" , dimensionality : int None = 3072 , ) - > list [ list [ float ]]: """Embeds texts with a pre-trained, foundational model.""" model = TextEmbeddingModel . from pretrained ( model name ) kwargs = dict ( output dimensionality = dimensionality ) if dimensionality else {} embeddings = [] gemini-embedding-001 takes one input at a time for text in texts : text input = TextEmbeddingInput ( text , task ) embedding = model . get embeddings ([ text input ], kwargs ) print ( embedding ) Example response: [[0.006135190837085247, -0.01462465338408947, 0.004978656303137541, ...]] embeddings . append ( embedding [ 0 ] . values ) return embeddings if name == " main " : Embeds code block with a pre-trained, foundational model.
- Supported task types Embeddings models that use task types support the following task types: Task type Description CLASSIFICATION Used to generate embeddings that are optimized to classify texts according to preset labels CLUSTERING Used to generate embeddings that are optimized to cluster texts based on their similarities RETRIEVAL DOCUMENT , RETRIEVAL QUERY , QUESTION ANSWERING , and FACT VERIFICATION Used to generate embeddings that are optimized for document search or information retrieval CODE RETRIEVAL QUERY Used to retrieve a code block based on a natural language query, such as sort an array or reverse a linked list .
- Here is an example: REST PROJECT ID= PROJECT ID curl \ - X POST \ - H "Authorization: Bearer $(gcloud auth print-access-token)" \ - H "Content-Type: application/json" \ h tt ps : //us-central1-aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/us-central1/publishers/google/models/text-embedding-005:predict -d \ $' { "instances" : [ { "task type" : "CODE RETRIEVAL QUERY" , "content" : "Function to add two numbers" } ], } ' Python To learn how to install or update the Vertex AI SDK for Python, see Install the Vertex AI SDK for Python .
- Using this function to calculate the embedding for query. texts = [ "def func(a, b): return a + b" , "def func(a, b): return a - b" , "def func(a, b): return (a 2 + b 2) 0.5" , ] task = "RETRIEVAL DOCUMENT" code query embeddings = embed text ( texts = texts , task = task , model name = MODEL NAME , dimensionality = DIMENSIONALITY ) Assess text similarity If you want to use embeddings to assess text similarity, use the SEMANTIC SIMILARITY task type.

