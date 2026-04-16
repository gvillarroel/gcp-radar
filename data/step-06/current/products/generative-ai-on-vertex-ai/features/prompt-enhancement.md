---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.694Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "Prompt enhancement"
feature_slug: "prompt-enhancement"
latest_feature_date: "2025-01-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/img-gen-prompt-guide"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/music/music-gen-prompt-guide"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu"
keywords:
  - "prompt"
  - "enhancement"
  - "an"
  - "llm"
  - "based"
  - "rewriter"
  - "that"
  - "adds"
---

# Prompt enhancement

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

An LLM-based prompt rewriter that adds descriptive detail to image prompts and is enabled by default.

## Extended Definition

An LLM-based prompt rewriter that adds descriptive detail to image prompts and is enabled by default.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/img-gen-prompt-guide](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/img-gen-prompt-guide)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/music/music-gen-prompt-guide](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/music/music-gen-prompt-guide)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu)

## Supporting Pages

### "Deploy and inference Gemma using Model Garden and Vertex AI GPU-backed endpoints\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial)
- Source ID: `site-docs-root`
- Final score: 151
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for a local development environment . async function gemma2PredictGpu ( predictionServiceClient ) { // Imports the Google Cloud Prediction Service Client library const { // TODO(developer): Uncomment PredictionServiceClient before running the sample. // PredictionServiceClient, helpers , } = require ( ' @google-cloud/aiplatform ' ); / TODO(developer): Update these variables before running the sample. / const projectId = 'your-project-id' ; const endpointRegion = 'your-vertex-endpoint-region' ; const endpointId = 'your-vertex-endpoint-id' ; // Default configuration const config = { maxOutputTokens : 1024 , temperature : 0.9 , topP : 1.0 , topK : 1 }; // Prompt used in the prediction const prompt = 'Why is the sky blue?' ; // Encapsulate the prompt in a correct format for GPUs // Example format: [{inputs: 'Why is the sky blue?', parameters: {temperature: 0.9}}] const input = { inputs : prompt , parameters : config , }; // Convert input message to a list of GAPIC instances for model input const instances = [ helpers . toValue ( input )]; // TODO(developer): Uncomment apiEndpoint and predictionServiceClient before running the sample. // const apiEndpoint = ${endpointRegion}-aiplatform.googleapis.com; // Create a client // predictionServiceClient = new PredictionServiceClient({apiEndpoint}); // Call the Gemma2 endpoint const gemma2Endpoint = projects/ ${ projectId } /locations/ ${ endpointRegion } /endpoints/ ${ endpointId } ; const [ response ] = await predictionServiceClient . predict ({ endpoint : gemma2Endpoint , instances , }); const predictions = response . predictions ; const text = predictions [ 0 ]. stringValue ; console . log ( 'Predictions:' , text ); return text ; } module . exports = gemma2PredictGpu ; // TODO(developer): Uncomment below lines before running the sample. // gemma2PredictGpu(...process.argv.slice(2)).catch(err => { // console.error(err.message); // process.exitCode = 1; // }); Java Before trying this sample, follow the Java setup instructions in the Vertex AI quickstart using client libraries .
- QUERY PARAMETERS " Select-Object -Expand Content You receive a JSON response similar to the following. { "publisherModels": [ { "name": "publishers/google/models/gemma3", "versionId": "gemma-3-1b-it", "openSourceCategory": "GOOGLE OWNED OSS WITH GOOGLE CHECKPOINT", "supportedActions": { "openNotebook": { "references": { "us-central1": { "uri": "https://colab.research.google.com/github/GoogleCloudPlatform/vertex-ai-samples/blob/main/notebooks/community/model garden/model garden gradio streaming chat completions.ipynb" } }, "resourceTitle": "Notebook", "resourceUseCase": "Chat Completion Playground", "resourceDescription": "Chat with deployed Gemma 2 endpoints via Gradio UI." }, "deploy": { "modelDisplayName": "gemma-3-1b-it", "containerSpec": { "imageUri": "us-docker.pkg.dev/vertex-ai/vertex-vision-model-garden-dockers/pytorch-vllm-serve:20250312 0916 RC01", "args": [ "python", "-m", "vllm.entrypoints.api server", "--host=0.0.0.0", "--port=8080", "--model=gs://vertex-model-garden-restricted-us/gemma3/gemma-3-1b-it", "--tensor-parallel-size=1", "--swap-space=16", "--gpu-memory-utilization=0.95", "--disable-log-stats" ], "env": [ { "name": "MODEL ID", "value": "google/gemma-3-1b-it" }, { "name": "DEPLOY SOURCE", "value": "UI NATIVE MODEL" } ], "ports": [ { "containerPort": 8080 } ], "predictRoute": "/generate", "healthRoute": "/ping" }, "dedicatedResources": { "machineSpec": { "machineType": "g2-standard-12", "acceleratorType": "NVIDIA L4", "acceleratorCount": 1 } }, "publicArtifactUri": "gs://vertex-model-garden-restricted-us/gemma3/gemma3.tar.gz", "deployTaskName": "vLLM 128K context", "deployMetadata": { "sampleRequest": "{\n \"instances\": [\n {\n \"@requestFormat\": \"chatCompletions\",\n \"messages\": [\n {\n \"role\": \"user\",\n \"content\": \"What is machine learning?\"\n }\n ],\n \"max tokens\": 100\n }\n ]\n}\n" } }, ...
- String projectId = "YOUR PROJECT ID" ; String endpointRegion = "us-east4" ; String endpointId = "YOUR ENDPOINT ID" ; PredictionServiceSettings predictionServiceSettings = PredictionServiceSettings . newBuilder () . setEndpoint ( String . format ( "%s-aiplatform.googleapis.com:443" , endpointRegion )) . build (); PredictionServiceClient predictionServiceClient = PredictionServiceClient . create ( predictionServiceSettings ); Gemma2PredictGpu creator = new Gemma2PredictGpu ( predictionServiceClient ); creator . gemma2PredictGpu ( projectId , endpointRegion , endpointId ); } // Demonstrates how to run inference on a Gemma2 model // deployed to a Vertex AI endpoint with GPU accelerators. public String gemma2PredictGpu ( String projectId , String region , String endpointId ) throws IOException { Map<String , Object > paramsMap = new HashMap <> (); paramsMap . put ( "temperature" , 0.9 ); paramsMap . put ( "maxOutputTokens" , 1024 ); paramsMap . put ( "topP" , 1.0 ); paramsMap . put ( "topK" , 1 ); Value parameters = mapToValue ( paramsMap ); // Prompt used in the prediction String instance = "{ \"inputs\": \"Why is the sky blue?\"}" ; Value .
- Run the following command in the terminal to create or overwrite this file in the current directory: cat > request.json MODEL ID ", "deploy config": { "dedicated resources": { "machine spec": { "machine type": " MACHINE TYPE ", "accelerator type": " ACCELERATOR TYPE ", "accelerator count": ACCELERATOR COUNT , "reservation affinity": { "reservation affinity type": "ANY RESERVATION" } }, "spot": "false" } }, "model config": { "accept eula": "true", "container spec": { "image uri": " IMAGE URI ", "args": [ CONTAINER ARGS ], "ports": [ { "container port": CONTAINER PORT } ] } }, "deploy config": { "fast tryout enabled": false }, } EOF Then execute the following command to send your REST request: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION :deploy" PowerShell Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .

### "Prompt and image attribute guide \_|\_ Generative AI on Vertex AI \_|\_\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/img-gen-prompt-guide](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/img-gen-prompt-guide)
- Source ID: `site-docs-root`
- Final score: 139
- Re-rank relevance: N/A

Evidence snippets:
- The following are some ideas of historical painting or art styles that you can try. "generate an image in the style of [art period or movement] : a wind farm" Prompt: generate an image in the style of an impressionist painting : a wind farm Prompt: generate an image in the style of a renaissance painting : a wind farm Prompt: generate an image in the style of pop art : a wind farm Image source: Each image was generated using its corresponding text prompt with the Imagen 3 model.
- Advanced prompt writing techniques Use the following examples to create more specific prompts based on the attributes: photography descriptors, shapes and materials, historical art movements, and image quality modifiers.
- Home Documentation AI and ML Vertex AI Generative AI on Vertex AI Guides Send feedback Prompt and image attribute guide Stay organized with collections Save and categorize content based on your preferences.
- Shapes and materials Prompt includes: "...made of..." , "...in the shape of..." One of the strengths of this technology is that you can create imagery that is otherwise difficult or impossible.

### "Lyria music generation prompt guide \_|\_ Generative AI on Vertex AI \_\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/music/music-gen-prompt-guide](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/music/music-gen-prompt-guide)
- Source ID: `site-docs-root`
- Final score: 133
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Lyria supports the following: Multimodal prompts, including support for image and text inputs Vocal generation for songs Audio generation Safety filters Lyria applies safety filters across Vertex AI to help ensure that generated audio doesn't contain offensive content or violate usage guidelines.
- Prompt Scenario Generated output Prompt: "A calm, relaxing piano piece for studying." (Without negative prompt) Description: The piano piece is generally calm, but might include some unexpected louder dynamics or complex runs that could be distracting for study.
- Home Documentation AI and ML Vertex AI Generative AI on Vertex AI Guides Send feedback Lyria music generation prompt guide Stay organized with collections Save and categorize content based on your preferences.
- This guide provides examples of the types of music and audio soundscapes that you can create using Lyria and shows you how to modify specific parts of a prompt to produce different results.

### "Deploy and inference Gemma using Model Garden and Vertex AI TPU-backed endpoints\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu)
- Source ID: `site-docs-root`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for a local development environment . // Imports the Google Cloud Prediction Service Client library const { // TODO(developer): Uncomment PredictionServiceClient before running the sample. // PredictionServiceClient, helpers , } = require ( ' @google-cloud/aiplatform ' ); / TODO(developer): Update these variables before running the sample. / const projectId = 'your-project-id' ; const endpointRegion = 'your-vertex-endpoint-region' ; const endpointId = 'your-vertex-endpoint-id' ; // Prompt used in the prediction const prompt = 'Why is the sky blue?' ; // Encapsulate the prompt in a correct format for TPUs // Example format: [{prompt: 'Why is the sky blue?', temperature: 0.9}] const input = { prompt , // Parameters for default configuration maxOutputTokens : 1024 , temperature : 0.9 , topP : 1.0 , topK : 1 , }; // Convert input message to a list of GAPIC instances for model input const instances = [ helpers . toValue ( input )]; // TODO(developer): Uncomment apiEndpoint and predictionServiceClient before running the sample. // const apiEndpoint = ${endpointRegion}-aiplatform.googleapis.com; // Create a client // predictionServiceClient = new PredictionServiceClient({apiEndpoint}); // Call the Gemma2 endpoint const gemma2Endpoint = projects/ ${ projectId } /locations/ ${ endpointRegion } /endpoints/ ${ endpointId } ; const [ response ] = await predictionServiceClient . predict ({ endpoint : gemma2Endpoint , instances , }); const predictions = response . predictions ; const text = predictions [ 0 ]. stringValue ; console . log ( 'Predictions:' , text ); Java Before trying this sample, follow the Java setup instructions in the Vertex AI quickstart using client libraries .
- String projectId = "YOUR PROJECT ID" ; String endpointRegion = "us-west1" ; String endpointId = "YOUR ENDPOINT ID" ; PredictionServiceSettings predictionServiceSettings = PredictionServiceSettings . newBuilder () . setEndpoint ( String . format ( "%s-aiplatform.googleapis.com:443" , endpointRegion )) . build (); PredictionServiceClient predictionServiceClient = PredictionServiceClient . create ( predictionServiceSettings ); Gemma2PredictTpu creator = new Gemma2PredictTpu ( predictionServiceClient ); creator . gemma2PredictTpu ( projectId , endpointRegion , endpointId ); } // Demonstrates how to run inference on a Gemma2 model // deployed to a Vertex AI endpoint with TPU accelerators. public String gemma2PredictTpu ( String projectId , String region , String endpointId ) throws IOException { Map<String , Object > paramsMap = new HashMap <> (); paramsMap . put ( "temperature" , 0.9 ); paramsMap . put ( "maxOutputTokens" , 1024 ); paramsMap . put ( "topP" , 1.0 ); paramsMap . put ( "topK" , 1 ); Value parameters = mapToValue ( paramsMap ); // Prompt used in the prediction String instance = "{ \"prompt\": \"Why is the sky blue?\"}" ; Value .
- For more information, see the Python API reference documentation . """ Sample to run inference on a Gemma2 model deployed to a Vertex AI endpoint with TPU accellerators. """ from google.cloud import aiplatform from google.protobuf import json format from google.protobuf.struct pb2 import Value TODO(developer): Update & uncomment lines below PROJECT ID = "your-project-id" ENDPOINT REGION = "your-vertex-endpoint-region" ENDPOINT ID = "your-vertex-endpoint-id" Default configuration config = { "max tokens" : 1024 , "temperature" : 0.9 , "top p" : 1.0 , "top k" : 1 } Prompt used in the prediction prompt = "Why is the sky blue?" Encapsulate the prompt in a correct format for TPUs Example format: [{'prompt': 'Why is the sky blue?', 'temperature': 0.9}] input = { "prompt" : prompt } input . update ( config ) Convert input message to a list of GAPIC instances for model input instances = [ json format .
- Builder instanceValue = Value . newBuilder (); JsonFormat . parser (). merge ( instance , instanceValue ); // Encapsulate the prompt in a correct format for TPUs // Example format: [{'prompt': 'Why is the sky blue?', 'temperature': 0.9}] List<Value> instances = new ArrayList <> (); instances . add ( instanceValue . build ()); EndpointName endpointName = EndpointName . of ( projectId , region , endpointId ); PredictResponse predictResponse = this . predictionServiceClient . predict ( endpointName , instances , parameters ); String textResponse = predictResponse . getPredictions ( 0 ). getStringValue (); System . out . println ( textResponse ); return textResponse ; } private static Value mapToValue ( Map<String , Object > map ) throws InvalidProtocolBufferException { Gson gson = new Gson (); String json = gson . toJson ( map ); Value .

