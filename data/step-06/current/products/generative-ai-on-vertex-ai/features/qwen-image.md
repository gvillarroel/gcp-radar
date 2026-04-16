---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.659Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "Qwen-Image"
feature_slug: "qwen-image"
latest_feature_date: "2025-10-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/quickstart"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings"
keywords:
  - "qwen"
  - "image"
  - "is"
  - "model"
  - "available"
  - "in"
  - "garden"
---

# Qwen-Image

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Qwen-Image is a model available in Model Garden.

## Extended Definition

Qwen-Image is a model available in Model Garden.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/quickstart](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/quickstart)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings)

## Supporting Pages

### "Deploy and inference Gemma using Model Garden and Vertex AI GPU-backed endpoints\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial)
- Source ID: `site-docs-root`
- Final score: 239
- Re-rank relevance: N/A

Evidence snippets:
- QUERY PARAMETERS " Select-Object -Expand Content You receive a JSON response similar to the following. { "publisherModels": [ { "name": "publishers/google/models/gemma3", "versionId": "gemma-3-1b-it", "openSourceCategory": "GOOGLE OWNED OSS WITH GOOGLE CHECKPOINT", "supportedActions": { "openNotebook": { "references": { "us-central1": { "uri": "https://colab.research.google.com/github/GoogleCloudPlatform/vertex-ai-samples/blob/main/notebooks/community/model garden/model garden gradio streaming chat completions.ipynb" } }, "resourceTitle": "Notebook", "resourceUseCase": "Chat Completion Playground", "resourceDescription": "Chat with deployed Gemma 2 endpoints via Gradio UI." }, "deploy": { "modelDisplayName": "gemma-3-1b-it", "containerSpec": { "imageUri": "us-docker.pkg.dev/vertex-ai/vertex-vision-model-garden-dockers/pytorch-vllm-serve:20250312 0916 RC01", "args": [ "python", "-m", "vllm.entrypoints.api server", "--host=0.0.0.0", "--port=8080", "--model=gs://vertex-model-garden-restricted-us/gemma3/gemma-3-1b-it", "--tensor-parallel-size=1", "--swap-space=16", "--gpu-memory-utilization=0.95", "--disable-log-stats" ], "env": [ { "name": "MODEL ID", "value": "google/gemma-3-1b-it" }, { "name": "DEPLOY SOURCE", "value": "UI NATIVE MODEL" } ], "ports": [ { "containerPort": 8080 } ], "predictRoute": "/generate", "healthRoute": "/ping" }, "dedicatedResources": { "machineSpec": { "machineType": "g2-standard-12", "acceleratorType": "NVIDIA L4", "acceleratorCount": 1 } }, "publicArtifactUri": "gs://vertex-model-garden-restricted-us/gemma3/gemma3.tar.gz", "deployTaskName": "vLLM 128K context", "deployMetadata": { "sampleRequest": "{\n \"instances\": [\n {\n \"@requestFormat\": \"chatCompletions\",\n \"messages\": [\n {\n \"role\": \"user\",\n \"content\": \"What is machine learning?\"\n }\n ],\n \"max tokens\": 100\n }\n ]\n}\n" } }, ...
- Run the following command in the terminal to create or overwrite this file in the current directory: @' { "publisher model name": " MODEL ID ", "deploy config": { "dedicated resources": { "machine spec": { "machine type": " MACHINE TYPE ", "accelerator type": " ACCELERATOR TYPE ", "accelerator count": ACCELERATOR COUNT , "reservation affinity": { "reservation affinity type": "ANY RESERVATION" } }, "spot": "false" } }, "model config": { "accept eula": "true", "container spec": { "image uri": " IMAGE URI ", "args": [ CONTAINER ARGS ], "ports": [ { "container port": CONTAINER PORT } ] } }, "deploy config": { "fast tryout enabled": false }, } '@ Out-File -FilePath request.json -Encoding utf8 Then execute the following command to send your REST request: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION :deploy" Select-Object -Expand Content You receive a JSON response similar to the following. { "name": "projects/ PROJECT ID /locations/ LOCATION /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.aiplatform.v1.DeployOperationMetadata", "genericMetadata": { "createTime": "2025-03-13T21:44:44.538780Z", "updateTime": "2025-03-13T21:44:44.538780Z" }, "publisherModel": "publishers/google/models/gemma3@gemma-3-1b-it", "destination": "projects/ PROJECT ID /locations/ LOCATION ", "projectNumber": " PROJECT ID " } } Console In the Google Cloud console, go to the Model Garden page.
- You can view the machine type, accelerator type, and container image URI that Model Garden has verified for a particular model. import vertexai from vertexai import model garden TODO(developer): Update and un-comment below lines PROJECT ID = "your-project-id" model = "google/gemma3@gemma-3-1b-it" vertexai . init ( project = PROJECT ID , location = "us-central1" ) For Hugging Face modelsm the format is the Hugging Face model name, as in "meta-llama/Llama-3.3-70B-Instruct".
- You can view the machine type, accelorator type, and container image URI that Model Garden supports for a particular model. gcloud ai model-garden models list-deployment-config \ --model = MODEL ID Replace MODEL ID with the model ID from the previous list command, such as google/gemma@gemma-2b or stabilityai/stable-diffusion-xl-base-1.0 .

### "Deploy and inference Gemma using Model Garden and Vertex AI TPU-backed endpoints\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- Using endpoint [https://us-central1-aiplatform.googleapis.com/] artifactUri: [URI removed] baseModelSource: modelGardenSource: publicModelName: publishers/google/models/gemma2 ... deployedModels: - deployedModelId: '1234567891234567891' endpoint: projects/12345678912/locations/us-central1/endpoints/12345678912345 displayName: gemma2-2b-it-12345678912345 etag: [ETag removed] modelSourceInfo: sourceType: MODEL GARDEN name: projects/123456789123/locations/us-central1/models/gemma2-2b-it-12345678912345 ...
- Objectives This tutorial shows you how to perform the following tasks: Deploy the Gemma 2 2B open model to a TPU backed endpoint by using Model Garden Use the PredictionServiceClient to get online predictions Costs In this document, you use the following billable components of Google Cloud: A ct5lp-hightpu-1t machine type with one TPU V5 accelerator Vertex AI prediction and explanation To generate a cost estimate based on your projected usage, use the pricing calculator .
- The aiplatform Go client library Go support for Protocol Buffers Google API Extensions for Go (gax-go) go get cloud.google.com/go/aiplatform go get google.golang.org/protobuf go get github.com/googleapis/gax-go/v2 Deploy Gemma using Model Garden You deploy the Gemma 2 2B model to a ct5lp-hightpu-1t Compute Engine machine type that is optimized for small to medium scale training.
- In this tutorial, you deploy the instruction-tuned Gemma 2 2B open model by using the model card in Model Garden.

### "Test model capabilities in Model Garden \_|\_ Generative AI on Vertex AI\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/quickstart](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/quickstart)
- Source ID: `site-docs-root`
- Final score: 203
- Re-rank relevance: N/A

Evidence snippets:
- Required roles for users To get the permissions that you need to test model capabilities in Model Garden, ask your administrator to grant you the following IAM roles on your Google Cloud project: Service Usage Admin ( roles/serviceusage.serviceUsageAdmin ) Artifact Registry Administrator ( roles/artifactregistry.admin ) Cloud Run Admin ( roles/run.admin ) Storage Admin ( roles/storage.admin ) Vertex AI User ( roles/aiplatform.user ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Enable the APIs If you want to try Model Garden Spaces, then verify that the Compute Engine default service account has the required permissions to launch Spaces.
- Home Documentation AI and ML Vertex AI Generative AI on Vertex AI Guides Send feedback Test model capabilities in Model Garden Stay organized with collections Save and categorize content based on your preferences.
- Required roles To test model capabilities in Model Garden, ensure that both you and the Compute Engine default service account have the required IAM roles.

### "Get multimodal embeddings \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings)
- Source ID: `site-docs-root`
- Final score: 169
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample.\ (Not necessary if passing values as arguments) / // const project = 'YOUR PROJECT ID'; // const location = 'YOUR PROJECT LOCATION'; // const baseImagePath = 'YOUR BASE IMAGE PATH'; // const textPrompt = 'YOUR TEXT PROMPT'; const aiplatform = require ( ' @google-cloud/aiplatform ' ); // Imports the Google Cloud Prediction service client const { PredictionServiceClient } = aiplatform . v1 ; // Import the helper module for converting arbitrary protobuf.Value objects. const { helpers } = aiplatform ; // Specifies the location of the api endpoint const clientOptions = { apiEndpoint : 'us-central1-aiplatform.googleapis.com' , }; const publisher = 'google' ; const model = 'multimodalembedding@001' ; // Instantiates a client const predictionServiceClient = new PredictionServiceClient ( clientOptions ); async function predictImageFromImageAndText () { // Configure the parent resource const endpoint = projects/ ${ project } /locations/ ${ location } /publishers/ ${ publisher } /models/ ${ model } ; const fs = require ( 'fs' ); const imageFile = fs . readFileSync ( baseImagePath ); // Convert the image data to a Buffer and base64 encode it. const encodedImage = Buffer . from ( imageFile ). toString ( 'base64' ); const prompt = { text : textPrompt , image : { bytesBase64Encoded : encodedImage , }, }; const instanceValue = helpers . toValue ( prompt ); const instances = [ instanceValue ]; const parameter = { sampleCount : 1 , }; const parameters = helpers . toValue ( parameter ); const request = { endpoint , instances , parameters , }; // Predict request const [ response ] = await predictionServiceClient . predict ( request ); console . log ( 'Get image embedding response' ); const predictions = response . predictions ; console . log ( '\tPredictions :' ); for ( const prediction of predictions ) { console . log ( \t\tPrediction : ${ JSON . stringify ( prediction ) } ); } } await predictImageFromImageAndText (); Java Before trying this sample, follow the Java setup instructions in the Vertex AI quickstart using client libraries .
- 128 dimensions: { "predictions": [ { "imageEmbedding": [ 0.0279239565, [...128 dimension vector...] 0.00403284049 ], "textEmbedding": [ 0.202921599, [...128 dimension vector...] -0.0365431122 ] } ], "deployedModelId": " DEPLOYED MODEL ID " } 256 dimensions: { "predictions": [ { "imageEmbedding": [ 0.248620048, [...256 dimension vector...] -0.0646447465 ], "textEmbedding": [ 0.0757875815, [...256 dimension vector...] -0.02749932 ] } ], "deployedModelId": " DEPLOYED MODEL ID " } 512 dimensions: { "predictions": [ { "imageEmbedding": [ -0.0523675755, [...512 dimension vector...] -0.0444030389 ], "textEmbedding": [ -0.0592851527, [...512 dimension vector...] 0.0350437127 ] } ], "deployedModelId": " DEPLOYED MODEL ID " } Python import vertexai from vertexai.vision models import Image , MultiModalEmbeddingModel TODO(developer): Update & uncomment line below PROJECT ID = "your-project-id" vertexai . init ( project = PROJECT ID , location = "us-central1" ) TODO(developer): Try different dimenions: 128, 256, 512, 1408 embedding dimension = 128 model = MultiModalEmbeddingModel . from pretrained ( "multimodalembedding@001" ) image = Image . load from file ( "gs://cloud-samples-data/vertex-ai/llm/prompts/landmark1.png" ) embeddings = model . get embeddings ( image = image , contextual text = "Colosseum" , dimension = embedding dimension , ) print ( f "Image Embedding: { embeddings . image embedding } " ) print ( f "Text Embedding: { embeddings . text embedding } " ) Example response: Image Embedding: [0.0622573346, -0.0406507477, 0.0260440577, ...] Text Embedding: [0.27469793, -0.146258667, 0.0222803634, ...] Go import ( "context" "encoding/json" "fmt" "io" aiplatform "cloud.google.com/go/aiplatform/apiv1beta1" aiplatformpb "cloud.google.com/go/aiplatform/apiv1beta1/aiplatformpb" "google.golang.org/api/option" "google.golang.org/protobuf/encoding/protojson" "google.golang.org/protobuf/types/known/structpb" ) // generateWithLowerDimension shows how to generate lower-dimensional embeddings for text and image inputs. func generateWithLowerDimension ( w io .
- For more information, see the Python API reference documentation . import vertexai from vertexai.vision models import Image , MultiModalEmbeddingModel , Video from vertexai.vision models import VideoSegmentConfig TODO(developer): Update & uncomment line below PROJECT ID = "your-project-id" vertexai . init ( project = PROJECT ID , location = "us-central1" ) model = MultiModalEmbeddingModel . from pretrained ( "multimodalembedding@001" ) image = Image . load from file ( "gs://cloud-samples-data/vertex-ai/llm/prompts/landmark1.png" ) video = Video . load from file ( "gs://cloud-samples-data/vertex-ai-vision/highway vehicles.mp4" ) embeddings = model . get embeddings ( image = image , video = video , video segment config = VideoSegmentConfig ( end offset sec = 1 ), contextual text = "Cars on Highway" , ) print ( f "Image Embedding: { embeddings . image embedding } " ) Video Embeddings are segmented based on the video segment config. print ( "Video Embeddings:" ) for video embedding in embeddings . video embeddings : print ( f "Video Segment: { video embedding . start offset sec } - { video embedding . end offset sec } " ) print ( f "Embedding: { video embedding . embedding } " ) print ( f "Text Embedding: { embeddings . text embedding } " ) Example response: Image Embedding: [-0.0123144267, 0.0727186054, 0.000201397663, ...] Video Embeddings: Video Segment: 0.0 - 1.0 Embedding: [-0.0206376351, 0.0345234685, ...] Text Embedding: [-0.0207006838, -0.00251058186, ...] Go Before trying this sample, follow the Go setup instructions in the Vertex AI quickstart using client libraries .
- String project = "YOUR PROJECT ID" ; String textPrompt = "YOUR TEXT PROMPT" ; String baseImagePath = "YOUR BASE IMAGE PATH" ; // Learn how to use text prompts to update an image: // https://cloud.google.com/vertex-ai/docs/generative-ai/image/edit-images Map<String , Object > parameters = new HashMap<String , Object > (); parameters . put ( "sampleCount" , 1 ); String location = "us-central1" ; String publisher = "google" ; String model = "multimodalembedding@001" ; predictImageFromImageAndText ( project , location , publisher , model , textPrompt , baseImagePath , parameters ); } // Update images using text prompts public static void predictImageFromImageAndText ( String project , String location , String publisher , String model , String textPrompt , String baseImagePath , Map<String , Object > parameters ) throws IOException { final String endpoint = String . format ( "%s-aiplatform.googleapis.com:443" , location ); final PredictionServiceSettings predictionServiceSettings = PredictionServiceSettings . newBuilder (). setEndpoint ( endpoint ). build (); // Initialize client that will be used to send requests.

