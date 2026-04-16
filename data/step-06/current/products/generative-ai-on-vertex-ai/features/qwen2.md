---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.718Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "Qwen2"
feature_slug: "qwen2"
latest_feature_date: "2024-07-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/web-grounding-enterprise"
keywords:
  - "qwen2"
  - "is"
  - "an"
  - "llm"
  - "series"
  - "by"
  - "alibaba"
  - "available"
---

# Qwen2

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Qwen2 is an LLM series by Alibaba Cloud available in Model Garden.

## Extended Definition

Qwen2 is an LLM series by Alibaba Cloud available in Model Garden.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/web-grounding-enterprise](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/web-grounding-enterprise)

## Supporting Pages

### "Deploy and inference Gemma using Model Garden and Vertex AI GPU-backed endpoints\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- QUERY PARAMETERS " Select-Object -Expand Content You receive a JSON response similar to the following. { "publisherModels": [ { "name": "publishers/google/models/gemma3", "versionId": "gemma-3-1b-it", "openSourceCategory": "GOOGLE OWNED OSS WITH GOOGLE CHECKPOINT", "supportedActions": { "openNotebook": { "references": { "us-central1": { "uri": "https://colab.research.google.com/github/GoogleCloudPlatform/vertex-ai-samples/blob/main/notebooks/community/model garden/model garden gradio streaming chat completions.ipynb" } }, "resourceTitle": "Notebook", "resourceUseCase": "Chat Completion Playground", "resourceDescription": "Chat with deployed Gemma 2 endpoints via Gradio UI." }, "deploy": { "modelDisplayName": "gemma-3-1b-it", "containerSpec": { "imageUri": "us-docker.pkg.dev/vertex-ai/vertex-vision-model-garden-dockers/pytorch-vllm-serve:20250312 0916 RC01", "args": [ "python", "-m", "vllm.entrypoints.api server", "--host=0.0.0.0", "--port=8080", "--model=gs://vertex-model-garden-restricted-us/gemma3/gemma-3-1b-it", "--tensor-parallel-size=1", "--swap-space=16", "--gpu-memory-utilization=0.95", "--disable-log-stats" ], "env": [ { "name": "MODEL ID", "value": "google/gemma-3-1b-it" }, { "name": "DEPLOY SOURCE", "value": "UI NATIVE MODEL" } ], "ports": [ { "containerPort": 8080 } ], "predictRoute": "/generate", "healthRoute": "/ping" }, "dedicatedResources": { "machineSpec": { "machineType": "g2-standard-12", "acceleratorType": "NVIDIA L4", "acceleratorCount": 1 } }, "publicArtifactUri": "gs://vertex-model-garden-restricted-us/gemma3/gemma3.tar.gz", "deployTaskName": "vLLM 128K context", "deployMetadata": { "sampleRequest": "{\n \"instances\": [\n {\n \"@requestFormat\": \"chatCompletions\",\n \"messages\": [\n {\n \"role\": \"user\",\n \"content\": \"What is machine learning?\"\n }\n ],\n \"max tokens\": 100\n }\n ]\n}\n" } }, ...
- Run the following command in the terminal to create or overwrite this file in the current directory: cat > request.json MODEL ID ", "deploy config": { "dedicated resources": { "machine spec": { "machine type": " MACHINE TYPE ", "accelerator type": " ACCELERATOR TYPE ", "accelerator count": ACCELERATOR COUNT , "reservation affinity": { "reservation affinity type": "ANY RESERVATION" } }, "spot": "false" } }, "model config": { "accept eula": "true", "container spec": { "image uri": " IMAGE URI ", "args": [ CONTAINER ARGS ], "ports": [ { "container port": CONTAINER PORT } ] } }, "deploy config": { "fast tryout enabled": false }, } EOF Then execute the following command to send your REST request: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION :deploy" PowerShell Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .
- HTTP method and URL: POST https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION :deploy Request JSON body: { "publisher model name": " MODEL ID ", "deploy config": { "dedicated resources": { "machine spec": { "machine type": " MACHINE TYPE ", "accelerator type": " ACCELERATOR TYPE ", "accelerator count": ACCELERATOR COUNT , "reservation affinity": { "reservation affinity type": "ANY RESERVATION" } }, "spot": "false" } }, "model config": { "accept eula": "true", "container spec": { "image uri": " IMAGE URI ", "args": [ CONTAINER ARGS ], "ports": [ { "container port": CONTAINER PORT } ] } }, "deploy config": { "fast tryout enabled": false }, } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Run the following command in the terminal to create or overwrite this file in the current directory: cat > request.json MODEL ID ", "hugging face access token": " ACCESS TOKEN ", "model config": { "accept eula": "true" } } EOF Then execute the following command to send your REST request: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION :deploy" PowerShell Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .

### "Generative AI glossary \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai)
- Source ID: `site-docs-root`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- By understanding the relationships between words, generative AI models can create new content that is both coherent and relevant. zero-shot prompt (direct prompting) In generative AI, a zero-shot prompt is a prompt that enables a large language model (LLM) to perform a task without any additional training or examples.
- Automatic side-by-side (AutoSxS) Automatic side-by-side (AutoSxS) is a model-assisted evaluation tool that compares two large language models (LLMs) side by side.
- In sequence-to-sequence tasks, a decoder starts with the internal state generated by the encoder to predict the next sequence. deep neural network (DNN) A neural network with multiple hidden layers, typically programmed through deep learning techniques. depth The sum of the following in a neural network: 1. the number of hidden layers 2. the number of output layers, which is typically one 3. the number of any embedding layers.
- This is done by transforming existing examples to create additional, varied examples, which can improve model performance, especially when the original dataset is limited. bounding box A bounding box for an object in the video frame can be specified in either of two ways (i) Using 2 vertices consisting of a set of x,y coordinates if they are diagonally opposite points of the rectangle.

### "Get multimodal embeddings \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings)
- Source ID: `site-docs-root`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample.\ (Not necessary if passing values as arguments) / // const project = 'YOUR PROJECT ID'; // const location = 'YOUR PROJECT LOCATION'; // const baseImagePath = 'YOUR BASE IMAGE PATH'; // const textPrompt = 'YOUR TEXT PROMPT'; const aiplatform = require ( ' @google-cloud/aiplatform ' ); // Imports the Google Cloud Prediction service client const { PredictionServiceClient } = aiplatform . v1 ; // Import the helper module for converting arbitrary protobuf.Value objects. const { helpers } = aiplatform ; // Specifies the location of the api endpoint const clientOptions = { apiEndpoint : 'us-central1-aiplatform.googleapis.com' , }; const publisher = 'google' ; const model = 'multimodalembedding@001' ; // Instantiates a client const predictionServiceClient = new PredictionServiceClient ( clientOptions ); async function predictImageFromImageAndText () { // Configure the parent resource const endpoint = projects/ ${ project } /locations/ ${ location } /publishers/ ${ publisher } /models/ ${ model } ; const fs = require ( 'fs' ); const imageFile = fs . readFileSync ( baseImagePath ); // Convert the image data to a Buffer and base64 encode it. const encodedImage = Buffer . from ( imageFile ). toString ( 'base64' ); const prompt = { text : textPrompt , image : { bytesBase64Encoded : encodedImage , }, }; const instanceValue = helpers . toValue ( prompt ); const instances = [ instanceValue ]; const parameter = { sampleCount : 1 , }; const parameters = helpers . toValue ( parameter ); const request = { endpoint , instances , parameters , }; // Predict request const [ response ] = await predictionServiceClient . predict ( request ); console . log ( 'Get image embedding response' ); const predictions = response . predictions ; console . log ( '\tPredictions :' ); for ( const prediction of predictions ) { console . log ( \t\tPrediction : ${ JSON . stringify ( prediction ) } ); } } await predictImageFromImageAndText (); Java Before trying this sample, follow the Java setup instructions in the Vertex AI quickstart using client libraries .
- 128 dimensions: { "predictions": [ { "imageEmbedding": [ 0.0279239565, [...128 dimension vector...] 0.00403284049 ], "textEmbedding": [ 0.202921599, [...128 dimension vector...] -0.0365431122 ] } ], "deployedModelId": " DEPLOYED MODEL ID " } 256 dimensions: { "predictions": [ { "imageEmbedding": [ 0.248620048, [...256 dimension vector...] -0.0646447465 ], "textEmbedding": [ 0.0757875815, [...256 dimension vector...] -0.02749932 ] } ], "deployedModelId": " DEPLOYED MODEL ID " } 512 dimensions: { "predictions": [ { "imageEmbedding": [ -0.0523675755, [...512 dimension vector...] -0.0444030389 ], "textEmbedding": [ -0.0592851527, [...512 dimension vector...] 0.0350437127 ] } ], "deployedModelId": " DEPLOYED MODEL ID " } Python import vertexai from vertexai.vision models import Image , MultiModalEmbeddingModel TODO(developer): Update & uncomment line below PROJECT ID = "your-project-id" vertexai . init ( project = PROJECT ID , location = "us-central1" ) TODO(developer): Try different dimenions: 128, 256, 512, 1408 embedding dimension = 128 model = MultiModalEmbeddingModel . from pretrained ( "multimodalembedding@001" ) image = Image . load from file ( "gs://cloud-samples-data/vertex-ai/llm/prompts/landmark1.png" ) embeddings = model . get embeddings ( image = image , contextual text = "Colosseum" , dimension = embedding dimension , ) print ( f "Image Embedding: { embeddings . image embedding } " ) print ( f "Text Embedding: { embeddings . text embedding } " ) Example response: Image Embedding: [0.0622573346, -0.0406507477, 0.0260440577, ...] Text Embedding: [0.27469793, -0.146258667, 0.0222803634, ...] Go import ( "context" "encoding/json" "fmt" "io" aiplatform "cloud.google.com/go/aiplatform/apiv1beta1" aiplatformpb "cloud.google.com/go/aiplatform/apiv1beta1/aiplatformpb" "google.golang.org/api/option" "google.golang.org/protobuf/encoding/protojson" "google.golang.org/protobuf/types/known/structpb" ) // generateWithLowerDimension shows how to generate lower-dimensional embeddings for text and image inputs. func generateWithLowerDimension ( w io .
- For more information, see the Python API reference documentation . import vertexai from vertexai.vision models import Image , MultiModalEmbeddingModel , Video from vertexai.vision models import VideoSegmentConfig TODO(developer): Update & uncomment line below PROJECT ID = "your-project-id" vertexai . init ( project = PROJECT ID , location = "us-central1" ) model = MultiModalEmbeddingModel . from pretrained ( "multimodalembedding@001" ) image = Image . load from file ( "gs://cloud-samples-data/vertex-ai/llm/prompts/landmark1.png" ) video = Video . load from file ( "gs://cloud-samples-data/vertex-ai-vision/highway vehicles.mp4" ) embeddings = model . get embeddings ( image = image , video = video , video segment config = VideoSegmentConfig ( end offset sec = 1 ), contextual text = "Cars on Highway" , ) print ( f "Image Embedding: { embeddings . image embedding } " ) Video Embeddings are segmented based on the video segment config. print ( "Video Embeddings:" ) for video embedding in embeddings . video embeddings : print ( f "Video Segment: { video embedding . start offset sec } - { video embedding . end offset sec } " ) print ( f "Embedding: { video embedding . embedding } " ) print ( f "Text Embedding: { embeddings . text embedding } " ) Example response: Image Embedding: [-0.0123144267, 0.0727186054, 0.000201397663, ...] Video Embeddings: Video Segment: 0.0 - 1.0 Embedding: [-0.0206376351, 0.0345234685, ...] Text Embedding: [-0.0207006838, -0.00251058186, ...] Go Before trying this sample, follow the Go setup instructions in the Vertex AI quickstart using client libraries .
- UTF 8 ); JsonObject jsonInstance = new JsonObject (); jsonInstance . addProperty ( "text" , textPrompt ); JsonObject jsonImage = new JsonObject (); jsonImage . addProperty ( "bytesBase64Encoded" , encodedImage ); jsonInstance . add ( "image" , jsonImage ); Value instanceValue = stringToValue ( jsonInstance . toString ()); List<Value> instances = new ArrayList <> (); instances . add ( instanceValue ); Gson gson = new Gson (); String gsonString = gson . toJson ( parameters ); Value parameterValue = stringToValue ( gsonString ); PredictResponse predictResponse = predictionServiceClient . predict ( endpointName , instances , parameterValue ); System . out . println ( "Predict Response" ); System . out . println ( predictResponse ); for ( Value prediction : predictResponse . getPredictionsList ()) { System . out . format ( "\tPrediction: %s\n" , prediction ); } } } // Convert a Json string to a protobuf.Value static Value stringToValue ( String value ) throws InvalidProtocolBufferException { Value .

### "Web Grounding for Enterprise \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/web-grounding-enterprise](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/web-grounding-enterprise)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- For example, in the following code snippet, Gemini responds to a Search grounded prompt, which asks about a type of tropical plant. "predictions" : [ { "content" : "Monstera is a type of vine that thrives in bright indirect light…" , "groundingMetadata" : { "webSearchQueries" : [ "What's a monstera?" ], } } ] You can take this output, and display it by using Search suggestions.
- To use the API, you must set the following fields: Contents.parts.text : The text query users want to send to the API. tools.enterpriseWebSearch : When this tool is provided, Web Grounding for Enterprise can be used by Gemini.
- Note: The provided HTML and CSS provided in the API response automatically adapts to your device settings, which displays in either light or dark mode based on the your preference indicated by @media(prefers-color-scheme) .
- The indexed content is a subset of what's available on Google Search and suitable for customers in highly-regulated industries, such as finance, healthcare, and the public sector.

