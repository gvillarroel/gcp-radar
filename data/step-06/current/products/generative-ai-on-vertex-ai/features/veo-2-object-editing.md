---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.659Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "Veo 2 object editing"
feature_slug: "veo-2-object-editing"
latest_feature_date: "2025-10-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/img-gen-prompt-guide"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/video/video-gen-prompt-guide"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu"
keywords:
  - "veo"
  - "object"
  - "editing"
  - "can"
  - "add"
  - "and"
  - "remove"
  - "objects"
---

# Veo 2 object editing

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Veo 2 can add and remove objects from videos in Preview.

## Extended Definition

Veo 2 can add and remove objects from videos in Preview.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/img-gen-prompt-guide](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/img-gen-prompt-guide)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/video/video-gen-prompt-guide](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/video/video-gen-prompt-guide)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu)

## Supporting Pages

### "Deploy and inference Gemma using Model Garden and Vertex AI GPU-backed endpoints\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial)
- Source ID: `site-docs-root`
- Final score: 159
- Re-rank relevance: N/A

Evidence snippets:
- QUERY PARAMETERS " Select-Object -Expand Content You receive a JSON response similar to the following. { "publisherModels": [ { "name": "publishers/google/models/gemma3", "versionId": "gemma-3-1b-it", "openSourceCategory": "GOOGLE OWNED OSS WITH GOOGLE CHECKPOINT", "supportedActions": { "openNotebook": { "references": { "us-central1": { "uri": "https://colab.research.google.com/github/GoogleCloudPlatform/vertex-ai-samples/blob/main/notebooks/community/model garden/model garden gradio streaming chat completions.ipynb" } }, "resourceTitle": "Notebook", "resourceUseCase": "Chat Completion Playground", "resourceDescription": "Chat with deployed Gemma 2 endpoints via Gradio UI." }, "deploy": { "modelDisplayName": "gemma-3-1b-it", "containerSpec": { "imageUri": "us-docker.pkg.dev/vertex-ai/vertex-vision-model-garden-dockers/pytorch-vllm-serve:20250312 0916 RC01", "args": [ "python", "-m", "vllm.entrypoints.api server", "--host=0.0.0.0", "--port=8080", "--model=gs://vertex-model-garden-restricted-us/gemma3/gemma-3-1b-it", "--tensor-parallel-size=1", "--swap-space=16", "--gpu-memory-utilization=0.95", "--disable-log-stats" ], "env": [ { "name": "MODEL ID", "value": "google/gemma-3-1b-it" }, { "name": "DEPLOY SOURCE", "value": "UI NATIVE MODEL" } ], "ports": [ { "containerPort": 8080 } ], "predictRoute": "/generate", "healthRoute": "/ping" }, "dedicatedResources": { "machineSpec": { "machineType": "g2-standard-12", "acceleratorType": "NVIDIA L4", "acceleratorCount": 1 } }, "publicArtifactUri": "gs://vertex-model-garden-restricted-us/gemma3/gemma3.tar.gz", "deployTaskName": "vLLM 128K context", "deployMetadata": { "sampleRequest": "{\n \"instances\": [\n {\n \"@requestFormat\": \"chatCompletions\",\n \"messages\": [\n {\n \"role\": \"user\",\n \"content\": \"What is machine learning?\"\n }\n ],\n \"max tokens\": 100\n }\n ]\n}\n" } }, ...
- Run the following command in the terminal to create or overwrite this file in the current directory: @' { "publisher model name": " MODEL ID ", "deploy config": { "dedicated resources": { "machine spec": { "machine type": " MACHINE TYPE ", "accelerator type": " ACCELERATOR TYPE ", "accelerator count": ACCELERATOR COUNT , "reservation affinity": { "reservation affinity type": "ANY RESERVATION" } }, "spot": "false" } }, "model config": { "accept eula": "true", "container spec": { "image uri": " IMAGE URI ", "args": [ CONTAINER ARGS ], "ports": [ { "container port": CONTAINER PORT } ] } }, "deploy config": { "fast tryout enabled": false }, } '@ Out-File -FilePath request.json -Encoding utf8 Then execute the following command to send your REST request: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION :deploy" Select-Object -Expand Content You receive a JSON response similar to the following. { "name": "projects/ PROJECT ID /locations/ LOCATION /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.aiplatform.v1.DeployOperationMetadata", "genericMetadata": { "createTime": "2025-03-13T21:44:44.538780Z", "updateTime": "2025-03-13T21:44:44.538780Z" }, "publisherModel": "publishers/google/models/gemma3@gemma-3-1b-it", "destination": "projects/ PROJECT ID /locations/ LOCATION ", "projectNumber": " PROJECT ID " } } Console In the Google Cloud console, go to the Model Garden page.
- Run the following command in the terminal to create or overwrite this file in the current directory: @' { "hugging face model id": " MODEL ID ", "hugging face access token": " ACCESS TOKEN ", "model config": { "accept eula": "true" } } '@ Out-File -FilePath request.json -Encoding utf8 Then execute the following command to send your REST request: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION :deploy" Select-Object -Expand Content You receive a JSON response similar to the following. { "name": "projects/ PROJECT ID /locations/us-central1 LOCATION /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.aiplatform.v1.DeployOperationMetadata", "genericMetadata": { "createTime": "2025-03-13T21:44:44.538780Z", "updateTime": "2025-03-13T21:44:44.538780Z" }, "publisherModel": "publishers/ PUBLISHER NAME /model/ MODEL NAME ", "destination": "projects/ PROJECT ID /locations/ LOCATION ", "projectNumber": " PROJECT ID " } } Deploy a model with customizations Before using any of the request data, make the following replacements: LOCATION : A region where the model is deployed.
- Run the following command in the terminal to create or overwrite this file in the current directory: @' { "publisher model name": " MODEL ID ", "model config": { "accept eula": "true" } } '@ Out-File -FilePath request.json -Encoding utf8 Then execute the following command to send your REST request: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION :deploy" Select-Object -Expand Content You receive a JSON response similar to the following. { "name": "projects/ PROJECT ID /locations/ LOCATION /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.aiplatform.v1.DeployOperationMetadata", "genericMetadata": { "createTime": "2025-03-13T21:44:44.538780Z", "updateTime": "2025-03-13T21:44:44.538780Z" }, "publisherModel": "publishers/google/models/gemma3@gemma-3-1b-it", "destination": "projects/ PROJECT ID /locations/ LOCATION ", "projectNumber": " PROJECT ID " } } Deploy a Hugging Face model Before using any of the request data, make the following replacements: LOCATION : A region where the model is deployed.

### "Prompt and image attribute guide \_|\_ Generative AI on Vertex AI \_|\_\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/img-gen-prompt-guide](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/img-gen-prompt-guide)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- Use case Lens type Focal lengths Additional details People (portraits) Prime, zoom 24-35mm black and white film, Film noir, Depth of field, duotone (mention two colors) Food, insects, plants (objects, still life) Macro 60-105mm High detail, precise focusing, controlled lighting Sports, wildlife (motion) Telephoto zoom 100-400mm Fast shutter speed, Action or movement tracking Astronomical, landscape (wide-angle) Wide-angle 10-24mm Long exposure times, sharp focus, long exposure, smooth water or clouds Portraits Use case Lens type Focal lengths Additional details People (portraits) Prime, zoom 24-35mm black and white film, Film noir, Depth of field, duotone (mention two colors) Using several keywords from the table, Imagen can generate the following portraits.
- Prompt: A woman, 35mm portrait, blue and grey duotones Model: Imagen 3 ( imagen-3.0-generate-002 ) Prompt: A woman, 35mm portrait, film noir Model: Imagen 3 ( imagen-3.0-generate-002 ) Objects Use case Lens type Focal lengths Additional details Food, insects, plants (objects, still life) Macro 60-105mm High detail, precise focusing, controlled lighting Using several keywords from the table, Imagen can generate the following object images.
- Prompt: a winning touchdown, fast shutter speed, movement tracking Model: Imagen 3 ( imagen-3.0-generate-002 ) Prompt: A deer running in the forest, fast shutter speed, movement tracking Model: Imagen 3 ( imagen-3.0-generate-002 ) Wide-angle Use case Lens type Focal lengths Additional details Astronomical, landscape (wide-angle) Wide-angle 10-24mm Long exposure times, sharp focus, long exposure, smooth water or clouds Using several keywords from the table, Imagen can generate the following wide-angle images.
- Camera Proximity - Close up, taken from far away Prompt: A close-up photo of coffee beans Prompt: A zoomed out photo of a small bag of coffee beans in a messy kitchen Camera Position - aerial, from below Prompt: aerial photo of urban city with skyscrapers Prompt: A photo of a forest canopy with blue skies from below Lighting - natural, dramatic, warm, cold Prompt: studio photo of a modern arm chair, natural lighting Prompt: studio photo of a modern arm chair, dramatic lighting Camera Settings - motion blur, soft focus, bokeh, portrait Prompt: photo of a city with skyscrapers from the inside of a car with motion blur Prompt: soft focus photograph of a bridge in an urban city at night Lens types - 35mm, 50mm, fisheye, wide angle, macro Prompt: photo of a leaf, macro lens Prompt: street photography, new york city, fisheye lens Film types - black and white, polaroid Prompt: a polaroid portrait of a dog wearing sunglasses Prompt: black and white photo of a dog wearing sunglasses Image source: Each image was generated using its corresponding text prompt with the Imagen 3 model.

### "Veo on Vertex AI video generation prompt guide \_|\_ Generative AI on Vertex\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/video/video-gen-prompt-guide](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/video/video-gen-prompt-guide)
- Source ID: `site-docs-root`
- Final score: 155
- Re-rank relevance: N/A

Evidence snippets:
- The following are examples of subjects that you can use: People : Generic descriptors : man, woman, elderly person Specific professions : "a seasoned detective", "a joyful baker", "a futuristic astronaut" Historical figures Mythical beings : a "mischievous fairy", "a stoic knight" Animals or creatures : Specific breeds of animals : "a playful Golden Retriever puppy", "a majestic bald eagle", "a sleek black panther" Fantastical creatures : "a miniature dragon with iridescent scales", "a wise, ancient talking tree" Objects : Everyday items : "a vintage typewriter", "a steaming cup of coffee", "a worn leather-bound book" Vehicles : "a classic 1960s muscle car", "a futuristic hovercraft", "a weathered pirate ship" Abstract shapes : "glowing orbs", "crystalline structures" You can combine people, animals, objects, or any mix of them in the same video (for example, "A group of diverse friends laughing around a campfire while a curious fox watches from the shadows", "a busy marketplace scene with vendors and shoppers").
- The following are examples of ambiance effects that you can use: Color palettes : "monochromatic black and white", "vibrant and saturated tropical colors", "muted earthy tones", "cool blue and silver futuristic palette", "warm autumnal oranges and browns" Atmospheric effects : "thick fog rolling across a moor", "swirling desert sands", "gentle falling snow creating a soft blanket", "heat haze shimmering above asphalt", "magical glowing particles in the air", "subsurface scattering on a translucent object" Textural qualities : "rough-hewn stone walls", "smooth, polished chrome surfaces", "soft, velvety fabric", "dewdrops clinging to a spiderweb" Temporal elements Temporal elements affect the flow of time in a video, which you can use to highlight changes even in short clips.
- The only other sounds are the slow, rhythmic ticking of a wall clock and the faint sound of rain against the window" Cinematic terms You can use cinematic terms for editing style and specific techniques.
- You don't need to use all elements in every prompt, but understanding how each element works can help you apply them effectively in your Veo prompts.

### "Deploy and inference Gemma using Model Garden and Vertex AI TPU-backed endpoints\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu)
- Source ID: `site-docs-root`
- Final score: 147
- Re-rank relevance: N/A

Evidence snippets:
- Maven with BOM Add the following HTML to your pom.xml : <dependencyManagement> <dependencies> <dependency> <artifactId>libraries-bom</artifactId> <groupId>com.google.cloud</groupId> <scope>import</scope> <type>pom</type> <version>26.34.0</version> </dependency> </dependencies> </dependencyManagement> <dependencies> <dependency> <groupId>com.google.cloud</groupId> <artifactId>google-cloud-aiplatform</artifactId> </dependency> <dependency> <groupId>com.google.protobuf</groupId> <artifactId>protobuf-java-util</artifactId> </dependency> <dependency> <groupId>com.google.code.gson</groupId> <artifactId>gson</artifactId> </dependency> </dependencies> Maven without BOM Add the following to your pom.xml : <dependency> <groupId>com.google.cloud</groupId> <artifactId>google-cloud-aiplatform</artifactId> <version>1.1.0</version> </dependency> <dependency> <groupId>com.google.protobuf</groupId> <artifactId>protobuf-java-util</artifactId> <version>5.28</version> </dependency> <dependency> <groupId>com.google.code.gson</groupId> <artifactId>gson</artifactId> <version>2.11.0</version> </dependency> Gradle without BOM Add the following to your build.gradle : implementation 'com.google.cloud:google-cloud-aiplatform:1.1.0' Go Install these Go packages by running the following commands.
- Builder instanceValue = Value . newBuilder (); JsonFormat . parser (). merge ( instance , instanceValue ); // Encapsulate the prompt in a correct format for TPUs // Example format: [{'prompt': 'Why is the sky blue?', 'temperature': 0.9}] List<Value> instances = new ArrayList <> (); instances . add ( instanceValue . build ()); EndpointName endpointName = EndpointName . of ( projectId , region , endpointId ); PredictResponse predictResponse = this . predictionServiceClient . predict ( endpointName , instances , parameters ); String textResponse = predictResponse . getPredictions ( 0 ). getStringValue (); System . out . println ( textResponse ); return textResponse ; } private static Value mapToValue ( Map<String , Object > map ) throws InvalidProtocolBufferException { Gson gson = new Gson (); String json = gson . toJson ( map ); Value .
- Objectives This tutorial shows you how to perform the following tasks: Deploy the Gemma 2 2B open model to a TPU backed endpoint by using Model Garden Use the PredictionServiceClient to get online predictions Costs In this document, you use the following billable components of Google Cloud: A ct5lp-hightpu-1t machine type with one TPU V5 accelerator Vertex AI prediction and explanation To generate a cost estimate based on your projected usage, use the pricing calculator .
- Install and update the Vertex AI SDK for Python by running this command. pip3 install --upgrade "google-cloud-aiplatform>=1.64" Install the Protocol Buffers library for Python by running this command. pip3 install --upgrade "protobuf>=5.28" Node.js Install or update the aiplatform SDK for Node.js by running the following command. npm install @google-cloud/aiplatform Java To add google-cloud-aiplatform as a dependency, add the appropriate code for your environment.

