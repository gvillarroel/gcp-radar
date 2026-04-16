---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.686Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "DeepSeek-V3"
feature_slug: "deepseek-v3"
latest_feature_date: "2025-03-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/quickstart"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings"
keywords:
  - "deepseek"
  - "v3"
  - "can"
  - "be"
  - "deployed"
  - "in"
  - "model"
  - "garden"
---

# DeepSeek-V3

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

DeepSeek-V3 can be deployed in Model Garden with H200 GPUs and improved vLLM support; DeepSeek-V3 is available in Model Garden in preview.

## Extended Definition

DeepSeek-V3 can be deployed in Model Garden with H200 GPUs and improved vLLM support; DeepSeek-V3 is available in Model Garden in preview.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/quickstart](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/quickstart)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings)

## Supporting Pages

### "Deploy and inference Gemma using Model Garden and Vertex AI TPU-backed endpoints\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu)
- Source ID: `site-docs-root`
- Final score: 262
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: You can only delete the endpoint after all models have been undeployed from it.
- For more information, see the Python API reference documentation . """ Sample to run inference on a Gemma2 model deployed to a Vertex AI endpoint with TPU accellerators. """ from google.cloud import aiplatform from google.protobuf import json format from google.protobuf.struct pb2 import Value TODO(developer): Update & uncomment lines below PROJECT ID = "your-project-id" ENDPOINT REGION = "your-vertex-endpoint-region" ENDPOINT ID = "your-vertex-endpoint-id" Default configuration config = { "max tokens" : 1024 , "temperature" : 0.9 , "top p" : 1.0 , "top k" : 1 } Prompt used in the prediction prompt = "Why is the sky blue?" Encapsulate the prompt in a correct format for TPUs Example format: [{'prompt': 'Why is the sky blue?', 'temperature': 0.9}] input = { "prompt" : prompt } input . update ( config ) Convert input message to a list of GAPIC instances for model input instances = [ json format .
- Using endpoint [https://us-central1-aiplatform.googleapis.com/] artifactUri: [URI removed] baseModelSource: modelGardenSource: publicModelName: publishers/google/models/gemma2 ... deployedModels: - deployedModelId: '1234567891234567891' endpoint: projects/12345678912/locations/us-central1/endpoints/12345678912345 displayName: gemma2-2b-it-12345678912345 etag: [ETag removed] modelSourceInfo: sourceType: MODEL GARDEN name: projects/123456789123/locations/us-central1/models/gemma2-2b-it-12345678912345 ...
- Make a note of the ID of the model you deployed in this tutorial. gcloud ai models describe DEPLOYED MODEL NAME \ --project = PROJECT ID \ --region = LOCATION ID The abbreviated output looks like this.

### "Deploy and inference Gemma using Model Garden and Vertex AI GPU-backed endpoints\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial)
- Source ID: `site-docs-root`
- Final score: 254
- Re-rank relevance: N/A

Evidence snippets:
- To check the deployment status, you can try one of the following methods: 1) Look for endpoint ENDPOINT DISPLAY NAME at the [Vertex AI] -> [Online prediction] tab in Cloud Console 2) Use gcloud ai operations describe OPERATION ID --region= LOCATION to find the status of the deployment long-running operation To see details about your deployment, run the gcloud ai endpoints list --list-model-garden-endpoints-only command: gcloud ai endpoints list --list-model-garden-endpoints-only \ --region = LOCATION ID Replace LOCATION ID with the region where you deployed the model.
- You can view the machine type, accelerator type, and container image URI that Model Garden has verified for a particular model. import vertexai from vertexai import model garden TODO(developer): Update and un-comment below lines PROJECT ID = "your-project-id" model = "google/gemma3@gemma-3-1b-it" vertexai . init ( project = PROJECT ID , location = "us-central1" ) For Hugging Face modelsm the format is the Hugging Face model name, as in "meta-llama/Llama-3.3-70B-Instruct".
- Note: You can only delete the endpoint after all models have been undeployed from it.
- QUERY PARAMETERS " Select-Object -Expand Content You receive a JSON response similar to the following. { "publisherModels": [ { "name": "publishers/google/models/gemma3", "versionId": "gemma-3-1b-it", "openSourceCategory": "GOOGLE OWNED OSS WITH GOOGLE CHECKPOINT", "supportedActions": { "openNotebook": { "references": { "us-central1": { "uri": "https://colab.research.google.com/github/GoogleCloudPlatform/vertex-ai-samples/blob/main/notebooks/community/model garden/model garden gradio streaming chat completions.ipynb" } }, "resourceTitle": "Notebook", "resourceUseCase": "Chat Completion Playground", "resourceDescription": "Chat with deployed Gemma 2 endpoints via Gradio UI." }, "deploy": { "modelDisplayName": "gemma-3-1b-it", "containerSpec": { "imageUri": "us-docker.pkg.dev/vertex-ai/vertex-vision-model-garden-dockers/pytorch-vllm-serve:20250312 0916 RC01", "args": [ "python", "-m", "vllm.entrypoints.api server", "--host=0.0.0.0", "--port=8080", "--model=gs://vertex-model-garden-restricted-us/gemma3/gemma-3-1b-it", "--tensor-parallel-size=1", "--swap-space=16", "--gpu-memory-utilization=0.95", "--disable-log-stats" ], "env": [ { "name": "MODEL ID", "value": "google/gemma-3-1b-it" }, { "name": "DEPLOY SOURCE", "value": "UI NATIVE MODEL" } ], "ports": [ { "containerPort": 8080 } ], "predictRoute": "/generate", "healthRoute": "/ping" }, "dedicatedResources": { "machineSpec": { "machineType": "g2-standard-12", "acceleratorType": "NVIDIA L4", "acceleratorCount": 1 } }, "publicArtifactUri": "gs://vertex-model-garden-restricted-us/gemma3/gemma3.tar.gz", "deployTaskName": "vLLM 128K context", "deployMetadata": { "sampleRequest": "{\n \"instances\": [\n {\n \"@requestFormat\": \"chatCompletions\",\n \"messages\": [\n {\n \"role\": \"user\",\n \"content\": \"What is machine learning?\"\n }\n ],\n \"max tokens\": 100\n }\n ]\n}\n" } }, ...

### "Test model capabilities in Model Garden \_|\_ Generative AI on Vertex AI\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/quickstart](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/quickstart)
- Source ID: `site-docs-root`
- Final score: 218
- Re-rank relevance: N/A

Evidence snippets:
- Model Garden deploys your selected model in Vertex AI and deploys the sample app on a Cloud Run instance that uses the deployed model's endpoint.
- Required roles for users To get the permissions that you need to test model capabilities in Model Garden, ask your administrator to grant you the following IAM roles on your Google Cloud project: Service Usage Admin ( roles/serviceusage.serviceUsageAdmin ) Artifact Registry Administrator ( roles/artifactregistry.admin ) Cloud Run Admin ( roles/run.admin ) Storage Admin ( roles/storage.admin ) Vertex AI User ( roles/aiplatform.user ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Home Documentation AI and ML Vertex AI Generative AI on Vertex AI Guides Send feedback Test model capabilities in Model Garden Stay organized with collections Save and categorize content based on your preferences.
- Roles required to select or create a project Select a project : Selecting a project doesn't require a specific IAM role—you can select any project that you've been granted a role on.

### "Get multimodal embeddings \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- 128 dimensions: { "predictions": [ { "imageEmbedding": [ 0.0279239565, [...128 dimension vector...] 0.00403284049 ], "textEmbedding": [ 0.202921599, [...128 dimension vector...] -0.0365431122 ] } ], "deployedModelId": " DEPLOYED MODEL ID " } 256 dimensions: { "predictions": [ { "imageEmbedding": [ 0.248620048, [...256 dimension vector...] -0.0646447465 ], "textEmbedding": [ 0.0757875815, [...256 dimension vector...] -0.02749932 ] } ], "deployedModelId": " DEPLOYED MODEL ID " } 512 dimensions: { "predictions": [ { "imageEmbedding": [ -0.0523675755, [...512 dimension vector...] -0.0444030389 ], "textEmbedding": [ -0.0592851527, [...512 dimension vector...] 0.0350437127 ] } ], "deployedModelId": " DEPLOYED MODEL ID " } Python import vertexai from vertexai.vision models import Image , MultiModalEmbeddingModel TODO(developer): Update & uncomment line below PROJECT ID = "your-project-id" vertexai . init ( project = PROJECT ID , location = "us-central1" ) TODO(developer): Try different dimenions: 128, 256, 512, 1408 embedding dimension = 128 model = MultiModalEmbeddingModel . from pretrained ( "multimodalembedding@001" ) image = Image . load from file ( "gs://cloud-samples-data/vertex-ai/llm/prompts/landmark1.png" ) embeddings = model . get embeddings ( image = image , contextual text = "Colosseum" , dimension = embedding dimension , ) print ( f "Image Embedding: { embeddings . image embedding } " ) print ( f "Text Embedding: { embeddings . text embedding } " ) Example response: Image Embedding: [0.0622573346, -0.0406507477, 0.0260440577, ...] Text Embedding: [0.27469793, -0.146258667, 0.0222803634, ...] Go import ( "context" "encoding/json" "fmt" "io" aiplatform "cloud.google.com/go/aiplatform/apiv1beta1" aiplatformpb "cloud.google.com/go/aiplatform/apiv1beta1/aiplatformpb" "google.golang.org/api/option" "google.golang.org/protobuf/encoding/protojson" "google.golang.org/protobuf/types/known/structpb" ) // generateWithLowerDimension shows how to generate lower-dimensional embeddings for text and image inputs. func generateWithLowerDimension ( w io .
- Response (7 second video, no videoSegmentConfig specified): { "predictions": [ { "videoEmbeddings": [ { "endOffsetSec": 7, "embedding": [ -0.0045467657, 0.0258095954, 0.0146885719, 0.00945400633, [...] -0.0023291884, -0.00493789, 0.00975185353, 0.0168156829 ], "startOffsetSec": 0 } ] } ], "deployedModelId": " DEPLOYED MODEL ID " } Response (59 second video, with the following video segment config: "videoSegmentConfig": { "startOffsetSec": 0, "endOffsetSec": 60, "intervalSec": 10 } ): { "predictions": [ { "videoEmbeddings": [ { "endOffsetSec": 10, "startOffsetSec": 0, "embedding": [ -0.00683252793, 0.0390476175, [...] 0.00657121744, 0.013023301 ] }, { "startOffsetSec": 10, "endOffsetSec": 20, "embedding": [ -0.0104404651, 0.0357737206, [...] 0.00509833824, 0.0131902946 ] }, { "startOffsetSec": 20, "embedding": [ -0.0113538112, 0.0305239167, [...] -0.00195809244, 0.00941874553 ], "endOffsetSec": 30 }, { "embedding": [ -0.00299320649, 0.0322436653, [...] -0.00993082579, 0.00968887936 ], "startOffsetSec": 30, "endOffsetSec": 40 }, { "endOffsetSec": 50, "startOffsetSec": 40, "embedding": [ -0.00591270532, 0.0368893594, [...] -0.00219071587, 0.0042470959 ] }, { "embedding": [ -0.00458270218, 0.0368121453, [...] -0.00317760976, 0.00595594104 ], "endOffsetSec": 59, "startOffsetSec": 50 } ] } ], "deployedModelId": " DEPLOYED MODEL ID " } Python To learn how to install or update the Vertex AI SDK for Python, see Install the Vertex AI SDK for Python .
- The following sample response is shortened for space. { "predictions": [ { "textEmbedding": [ 0.0105433334, -0.00302835181, 0.00656806398, 0.00603460241, [...] 0.00445805816, 0.0139605571, -0.00170318608, -0.00490092579 ], "videoEmbeddings": [ { "startOffsetSec": 0, "endOffsetSec": 7, "embedding": [ -0.00673126569, 0.0248149596, 0.0128901172, 0.0107588246, [...] -0.00180952181, -0.0054573305, 0.0117037306, 0.0169312079 ] } ], "imageEmbedding": [ -0.00728622358, 0.031021487, -0.00206603738, 0.0273937676, [...] -0.00204976718, 0.00321615417, 0.0121978866, 0.0193375275 ] } ], "deployedModelId": " DEPLOYED MODEL ID " } Python To learn how to install or update the Vertex AI SDK for Python, see Install the Vertex AI SDK for Python .
- This client only needs to be created // once, and can be reused for multiple requests. try ( PredictionServiceClient predictionServiceClient = PredictionServiceClient . create ( predictionServiceSettings )) { final EndpointName endpointName = EndpointName . ofProjectLocationPublisherModelName ( project , location , publisher , model ); // Convert the image to Base64 byte [] imageData = Base64 . getEncoder (). encode ( Files . readAllBytes ( Paths . get ( baseImagePath ))); String encodedImage = new String ( imageData , StandardCharsets .

