---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.724Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "Stable Diffusion XL Lightning"
feature_slug: "stable-diffusion-xl-lightning"
latest_feature_date: "2024-05-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-create"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/quickstart-image-generate-console"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-use"
keywords:
  - "stable"
  - "diffusion"
  - "xl"
  - "lightning"
  - "is"
  - "text"
  - "to"
  - "image"
---

# Stable Diffusion XL Lightning

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Stable Diffusion XL Lightning is a text-to-image generation model based on SDXL that requires fewer inference iterations.

## Extended Definition

Stable Diffusion XL Lightning is a text-to-image generation model based on SDXL that requires fewer inference iterations.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-create](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-create)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/quickstart-image-generate-console](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/quickstart-image-generate-console)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-use](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-use)

## Supporting Pages

### "Deploy and inference Gemma using Model Garden and Vertex AI GPU-backed endpoints\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial)
- Source ID: `site-docs-root`
- Final score: 171
- Re-rank relevance: N/A

Evidence snippets:
- You can view the machine type, accelorator type, and container image URI that Model Garden supports for a particular model. gcloud ai model-garden models list-deployment-config \ --model = MODEL ID Replace MODEL ID with the model ID from the previous list command, such as google/gemma@gemma-2b or stabilityai/stable-diffusion-xl-base-1.0 .
- QUERY PARAMETERS " Select-Object -Expand Content You receive a JSON response similar to the following. { "publisherModels": [ { "name": "publishers/google/models/gemma3", "versionId": "gemma-3-1b-it", "openSourceCategory": "GOOGLE OWNED OSS WITH GOOGLE CHECKPOINT", "supportedActions": { "openNotebook": { "references": { "us-central1": { "uri": "https://colab.research.google.com/github/GoogleCloudPlatform/vertex-ai-samples/blob/main/notebooks/community/model garden/model garden gradio streaming chat completions.ipynb" } }, "resourceTitle": "Notebook", "resourceUseCase": "Chat Completion Playground", "resourceDescription": "Chat with deployed Gemma 2 endpoints via Gradio UI." }, "deploy": { "modelDisplayName": "gemma-3-1b-it", "containerSpec": { "imageUri": "us-docker.pkg.dev/vertex-ai/vertex-vision-model-garden-dockers/pytorch-vllm-serve:20250312 0916 RC01", "args": [ "python", "-m", "vllm.entrypoints.api server", "--host=0.0.0.0", "--port=8080", "--model=gs://vertex-model-garden-restricted-us/gemma3/gemma-3-1b-it", "--tensor-parallel-size=1", "--swap-space=16", "--gpu-memory-utilization=0.95", "--disable-log-stats" ], "env": [ { "name": "MODEL ID", "value": "google/gemma-3-1b-it" }, { "name": "DEPLOY SOURCE", "value": "UI NATIVE MODEL" } ], "ports": [ { "containerPort": 8080 } ], "predictRoute": "/generate", "healthRoute": "/ping" }, "dedicatedResources": { "machineSpec": { "machineType": "g2-standard-12", "acceleratorType": "NVIDIA L4", "acceleratorCount": 1 } }, "publicArtifactUri": "gs://vertex-model-garden-restricted-us/gemma3/gemma3.tar.gz", "deployTaskName": "vLLM 128K context", "deployMetadata": { "sampleRequest": "{\n \"instances\": [\n {\n \"@requestFormat\": \"chatCompletions\",\n \"messages\": [\n {\n \"role\": \"user\",\n \"content\": \"What is machine learning?\"\n }\n ],\n \"max tokens\": 100\n }\n ]\n}\n" } }, ...
- The ID uses the following format: publishers/ PUBLISHER NAME /models/ MODEL NAME @ MODEL VERSION , such as google/gemma@gemma-2b or stabilityai/stable-diffusion-xl-base-1.0 .
- For more information, see Set up authentication for a local development environment . async function gemma2PredictGpu ( predictionServiceClient ) { // Imports the Google Cloud Prediction Service Client library const { // TODO(developer): Uncomment PredictionServiceClient before running the sample. // PredictionServiceClient, helpers , } = require ( ' @google-cloud/aiplatform ' ); / TODO(developer): Update these variables before running the sample. / const projectId = 'your-project-id' ; const endpointRegion = 'your-vertex-endpoint-region' ; const endpointId = 'your-vertex-endpoint-id' ; // Default configuration const config = { maxOutputTokens : 1024 , temperature : 0.9 , topP : 1.0 , topK : 1 }; // Prompt used in the prediction const prompt = 'Why is the sky blue?' ; // Encapsulate the prompt in a correct format for GPUs // Example format: [{inputs: 'Why is the sky blue?', parameters: {temperature: 0.9}}] const input = { inputs : prompt , parameters : config , }; // Convert input message to a list of GAPIC instances for model input const instances = [ helpers . toValue ( input )]; // TODO(developer): Uncomment apiEndpoint and predictionServiceClient before running the sample. // const apiEndpoint = ${endpointRegion}-aiplatform.googleapis.com; // Create a client // predictionServiceClient = new PredictionServiceClient({apiEndpoint}); // Call the Gemma2 endpoint const gemma2Endpoint = projects/ ${ projectId } /locations/ ${ endpointRegion } /endpoints/ ${ endpointId } ; const [ response ] = await predictionServiceClient . predict ({ endpoint : gemma2Endpoint , instances , }); const predictions = response . predictions ; const text = predictions [ 0 ]. stringValue ; console . log ( 'Predictions:' , text ); return text ; } module . exports = gemma2PredictGpu ; // TODO(developer): Uncomment below lines before running the sample. // gemma2PredictGpu(...process.argv.slice(2)).catch(err => { // console.error(err.message); // process.exitCode = 1; // }); Java Before trying this sample, follow the Java setup instructions in the Vertex AI quickstart using client libraries .

### "Create a context cache \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-create](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-create)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- You always stick to the facts" + " in the sources provided, and never make up new facts. \n " + "Now look at these research papers, and answer the following questions." )); // Set pdf files Content contents = Content . fromParts ( Part . fromUri ( "gs://cloud-samples-data/generative-ai/pdf/2312.11805v3.pdf" , "application/pdf" ), Part . fromUri ( "gs://cloud-samples-data/generative-ai/pdf/2403.05530.pdf" , "application/pdf" )); // Configuration for cached content using pdfs files and text CreateCachedContentConfig config = CreateCachedContentConfig . builder () . systemInstruction ( systemInstruction ) . contents ( contents ) . displayName ( "example-cache" ) . ttl ( Duration . ofSeconds ( 86400 )) . build (); CachedContent cachedContent = client . caches . create ( modelId , config ); cachedContent . name () . ifPresent ( System . out :: println ); cachedContent . usageMetadata () . ifPresent ( System . out :: println ); // Example response : // projects / 111111111111 / locations / global / cachedContents / 1111111111111111111 // CachedContentUsageMetadata { audioDurationSeconds = Optional . empty , imageCount = Optional [ 167 ], // textCount = Optional [ 153 ], totalTokenCount = Optional [ 43125 ], // videoDurationSeconds = Optional . empty } return cachedContent . name (); } } } Node.js Install npm install @google/genai To learn more, see the SDK reference documentation .
- Now look at these research papers, and answer the following questions. """ contents = [ Content ( role = "user" , parts = [ Part . from uri ( file uri = "gs://cloud-samples-data/generative-ai/pdf/2312.11805v3.pdf" , mime type = "application/pdf" , ), Part . from uri ( file uri = "gs://cloud-samples-data/generative-ai/pdf/2403.05530.pdf" , mime type = "application/pdf" , ), ], ) ] content cache = client . caches . create ( model = "gemini-2.5-flash" , config = CreateCachedContentConfig ( contents = contents , system instruction = system instruction , (Optional) For enhanced security, the content cache can be encrypted using a Cloud KMS key kms key name = "projects/.../locations/.../keyRings/.../cryptoKeys/..." display name = "example-cache" , ttl = "86400s" , ), ) print ( content cache . name ) print ( content cache . usage metadata ) Example response: projects/111111111111/locations/.../cachedContents/1111111111111111111 CachedContentUsageMetadata(audio duration seconds=None, image count=167, text count=153, total token count=43130, video duration seconds=None) Go Learn how to install or update the Go .
- Now look at these research papers , and answer the following questions . ; const contents = [ { role : 'user' , parts : [ { fileData : { fileUri : 'gs://cloud-samples-data/generative-ai/pdf/2312.11805v3.pdf' , mimeType : 'application/pdf' , }, }, { fileData : { fileUri : 'gs://cloud-samples-data/generative-ai/pdf/2403.05530.pdf' , mimeType : 'application/pdf' , }, }, ], }, ]; const contentCache = await client . caches . create ({ model : 'gemini-2.5-flash' , config : { contents : contents , systemInstruction : systemInstruction , displayName : 'example-cache' , ttl : '86400s' , }, }); console . log ( contentCache ); console . log ( contentCache . name ); // Example response : // projects / 111111111111 / locations / us - central1 / cachedContents / 1111111111111111111 // CachedContentUsageMetadata ( audio duration seconds = None , image count = 167 , // text count = 153 , total token count = 43130 , video duration seconds = None ) return contentCache . name ; } REST You can use REST to create a context cache by using the Vertex AI API to send a POST request to the publisher model endpoint.
- Fprintln ( w , string ( cachedContent )) // Example response : // { // "name" : "projects/111111111111/locations/us-central1/cachedContents/1111111111111111111" , // "displayName" : "example-cache" , // "model" : "projects/111111111111/locations/us-central1/publishers/google/models/gemini-2.5-flash" , // "createTime" : "2025-02-18T15:05:08.29468Z" , // "updateTime" : "2025-02-18T15:05:08.29468Z" , // "expireTime" : "2025-02-19T15:05:08.280828Z" , // "usageMetadata" : { // "imageCount" : 167 , // "textCount" : 153 , // "totalTokenCount" : 43125 // } // } return res .

### "Generate and edit images on Vertex AI \_|\_ Generative AI on Vertex AI \_\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/quickstart-image-generate-console](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/quickstart-image-generate-console)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- Client () TODO(developer): Update and un-comment below line output file = "output-image.png" image = client . models . generate images ( model = "imagen-4.0-generate-001" , prompt = "A dog reading a newspaper" , config = GenerateImagesConfig ( image size = "2K" , ), ) image . generated images [ 0 ] . image . save ( output file ) print ( f "Created output image using { len ( image . generated images [ 0 ] . image . image bytes ) } bytes" ) Example response: Created output image using 1234567 bytes REST Set environment variables: export GOOGLE CLOUD PROJECT = GOOGLE CLOUD PROJECT # Replace with your Google Cloud project export GOOGLE CLOUD LOCATION = us-central1 # Replace with the appropriate location for your project Run the following: curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json; charset=utf-8" \ "https:// ${ GOOGLE CLOUD LOCATION } -aiplatform.googleapis.com/v1/projects/ ${ GOOGLE CLOUD PROJECT } /locations/ ${ GOOGLE CLOUD LOCATION } /publishers/google/models/imagen-4.0-generate-preview-05-20:predict" -d \ $'{ "instances": [ { "prompt": "a cat reading a book" } ], "parameters": { "sampleCount": 1 } }' The model returns a base64 image bytes object.
- Try more examples To learn more, run the following notebooks in the environment of your choice: "Gemini 3 Pro Image Generation in Vertex AI": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub "Gemini 2.5 Flash Image Generation in Vertex AI": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub "Imagen 4 Image Generation": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub "Imagen 3 Image Editing": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub For a full list of Jupyter notebook tutorials using Imagen, see the Generative AI on Vertex AI cookbook .
- With Gemini and Imagen on Vertex AI on Vertex AI, application developers can build next-generation AI products that transform their user's imagination into high-quality visual assets using AI generation, in seconds.
- Try image generation (Vertex AI Studio) Try Imagen in a Colab With Gemini and Imagen, you can do the following: Generate novel images using only a text prompt (text-to-image AI generation).

### "Use a context cache \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-use](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-use)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This client only needs to be created // once , and can be reused for multiple requests . try ( Client client = Client . builder () . location ( "global" ) . vertexAI ( true ) . httpOptions ( HttpOptions . builder () . apiVersion ( "v1" ) . build ()) . build ()) { GenerateContentResponse response = client . models . generateContent ( modelId , "Summarize the pdfs" , GenerateContentConfig . builder () . cachedContent ( cacheName ) . build ()); System . out . println ( response . text ()); // Example response // The Gemini family of multimodal models from Google DeepMind demonstrates remarkable // capabilities across various // modalities , including image , audio , video , and text .... return response . text (); } } } Node.js Install npm install @google/genai To learn more, see the SDK reference documentation .
- Response { "candidates": [ { "content": { "role": "model", "parts": [ { "text": " MODEL RESPONSE " } ] }, "finishReason": "STOP", "safetyRatings": [ { "category": "HARM CATEGORY HATE SPEECH", "probability": "NEGLIGIBLE", "probabilityScore": 0.21866937, "severity": "HARM SEVERITY NEGLIGIBLE", "severityScore": 0.19946389 }, { "category": "HARM CATEGORY DANGEROUS CONTENT", "probability": "MEDIUM", "probabilityScore": 0.6880493, "severity": "HARM SEVERITY MEDIUM", "severityScore": 0.43374163 }, { "category": "HARM CATEGORY HARASSMENT", "probability": "NEGLIGIBLE", "probabilityScore": 0.4442634, "severity": "HARM SEVERITY LOW", "severityScore": 0.37903354 }, { "category": "HARM CATEGORY SEXUALLY EXPLICIT", "probability": "NEGLIGIBLE", "probabilityScore": 0.10502681, "severity": "HARM SEVERITY LOW", "severityScore": 0.28170192 } ] } ], "usageMetadata": { "promptTokenCount": 55927, "candidatesTokenCount": 105, "totalTokenCount": 56032 } } Example curl command LOCATION = "us-central1" MODEL ID = "gemini-2.0-flash-001" PROJECT ID = "test-project" curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https:// ${ LOCATION } -aiplatform.googleapis.com/v1/projects/ ${ PROJECT ID } /locations/ ${ LOCATION } /publishers/google/models/ ${ MODEL ID } :generateContent" -d \ '{ "cachedContent": "projects/${PROJECT NUMBER}/locations/${LOCATION}/cachedContents/${CACHE ID}", "contents": [ {"role":"user","parts":[{"text":"What are the benefits of exercise?"}]} ], "generationConfig": { "maxOutputTokens": 8192, "temperature": 1, "topP": 0.95, }, "safetySettings": [ { "category": "HARM CATEGORY HATE SPEECH", "threshold": "BLOCK MEDIUM AND ABOVE" }, { "category": "HARM CATEGORY DANGEROUS CONTENT", "threshold": "BLOCK MEDIUM AND ABOVE" }, { "category": "HARM CATEGORY SEXUALLY EXPLICIT", "threshold": "BLOCK MEDIUM AND ABOVE" }, { "category": "HARM CATEGORY HARASSMENT", "threshold": "BLOCK MEDIUM AND ABOVE" } ], }' Learn how to update the expiration time of a context cache .
- HTTP method and URL: POST https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/gemini-2.0-flash-001:generateContent Request JSON body: { "cachedContent": "projects/ PROJECT NUMBER /locations/ LOCATION /cachedContents/ CACHE ID ", "contents": [ {"role":"user","parts":[{"text":" PROMPT TEXT "}]} ], "generationConfig": { "maxOutputTokens": 8192, "temperature": 1, "topP": 0.95, }, "safetySettings": [ { "category": "HARM CATEGORY HATE SPEECH", "threshold": "BLOCK MEDIUM AND ABOVE" }, { "category": "HARM CATEGORY DANGEROUS CONTENT", "threshold": "BLOCK MEDIUM AND ABOVE" }, { "category": "HARM CATEGORY SEXUALLY EXPLICIT", "threshold": "BLOCK MEDIUM AND ABOVE" }, { "category": "HARM CATEGORY HARASSMENT", "threshold": "BLOCK MEDIUM AND ABOVE" } ], } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Client ( http options = HttpOptions ( api version = "v1" )) Use content cache to generate text response E.g cache name = 'projects/.../locations/.../cachedContents/1111111111111111111' response = client . models . generate content ( model = "gemini-2.5-flash" , contents = "Summarize the pdfs" , config = GenerateContentConfig ( cached content = cache name , ), ) print ( response . text ) Example response The Gemini family of multimodal models from Google DeepMind demonstrates remarkable capabilities across various modalities, including image, audio, video, and text....

