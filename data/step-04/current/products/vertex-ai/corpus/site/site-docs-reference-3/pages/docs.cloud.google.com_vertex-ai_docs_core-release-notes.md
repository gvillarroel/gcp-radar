---
title: "Vertex AI release notes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/docs/core-release-notes
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/docs/core-release-notes
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/docs/core-release-notes
  title: "Vertex AI release notes \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI
Resources
Send feedback
Vertex AI release notes
Stay organized with collections
Save and categorize content based on your preferences.
This page documents production updates to Vertex AI.
You can periodically check this page for announcements about new or updated
features, bug fixes, known issues, and deprecated functionality.
You can see the latest product updates for all of Google Cloud on the
Google Cloud page, browse and filter all release notes in the
Google Cloud console ,
or programmatically access release notes in
BigQuery .
To get the latest product updates delivered to you, add the URL of this page to your
feed
reader , or add the
feed URL directly.
March 16, 2026
Deprecated
Vertex Explainable AI is deprecated. For details, see Vertex AI deprecations .
March 05, 2026
Announcement
Vector Search 2.0 is generally available (GA)
Vector Search 2.0 is generally available ( GA ).
Vector Search 2.0 is a retrieval engine designed to streamline AI development
and serve as the knowledge core for AI applications.
Available features:
Collections
unifying data and vectors.
Auto-embeddings for populating vector fields automatically.
Hybrid search and ranking combining vector, full-text, and built-in semantic
re-ranking in a single parallel query.
Private Service Connect (PSC), Private Google Accesss (PGA), and VPC Service
Controls support.
For more information, see the Vector Search 2.0 documentation .
February 17, 2026
Deprecated
Vertex AI Feature Store Optimized online serving is deprecated. For details, see Vertex AI deprecations .
Deprecated
Vertex AI Feature Store (Legacy/V1) is deprecated. For details, see Vertex AI deprecations .
September 30, 2025
Feature
DeepSeek-V3.2-Exp is available through Model Garden.
September 22, 2025
Feature
DeepSeek-V3.1-Terminus is available through Model Garden.
September 15, 2025
Feature
Vector Search indexes optimized for storage (Preview)
Storage-optimized Vector Search offers a cost-effective solution for searching massive datasets. This new tier is ideal for large-scale RAG and semantic search applications, and simplifies development with a new auto-tuning feature that eliminates the need to manage the underlying index configuration. This feature is available in Preview.
For more information, see Storage-optimized Vector Search .
September 10, 2025
Feature
Vertex AI Agent Engine
Agent Engine now supports the following features:
Agent Engine Code Execution , now in Preview, lets your agent run code in an isolated sandbox environment. For more information, see Code Execution .
You can now develop, deploy, and use agents that support the Agent-to-Agent (A2A) protocol on Agent Engine. For more information, see Develop an Agent2Agent agent .
Agent Engine now supports bidirectional streaming . For more information, see Bidirectional streaming .
The Vertex AI Agent Engine page in the Google Cloud console has a Memory Bank tab for displaying and managing memories.
Breaking
Vertex AI Agent Engine
In version v1.112.0 of the Vertex AI SDK for Python, the agent_engines module has been refactored to a client-based design . For information about updating your existing code to the new design, see the Migration guide .
September 09, 2025
Feature
AI Singapore's SEA-LION V4 models are available through Model Garden. They are open models for Southeast Asian languages, built by leveraging Vertex AI training clusters for enhanced training efficiency and model accuracy.
Feature
EmbeddingGemma and DeepSeek-V3.1 models are available through Model Garden.
August 21, 2025
Feature
Vertex AI Agent Engine
Agent Engine now supports the following enterprise security features:
You can now deploy your agents in a private VPC environment, configuring a Private Service Connect interface, to ensure data privacy and meet security and compliance requirements. For more information, see Configure Private Service Connect interface .
You can now use your own customer-managed encryption keys (CMEK) to protect data at rest.
You can now specify customized resource controls , such as the minimum and maximum number of application instances, resource limits for each container, and concurrency for each container.
As a part of Vertex AI, Vertex AI Agent Engine supports HIPAA workloads.
For more information, see Agent Engine overview .
August 14, 2025
Feature
Gemma 3 270M , Wan 2.2 and Wan 2.1 models are available through Model Garden.
August 13, 2025
Feature
Qwen3 Coder and Qwen3 235B are available as Model as a Service (MaaS) models in Model Garden.
Feature
OpenAI's gpt-oss-120b and gpt-oss-20b are available as Model as a Service (MaaS) models in Model Garden.
August 06, 2025
Feature
OpenAI's gpt-oss models are available through Model Garden.
July 16, 2025
Feature
Added Gemma 3 fine-tuning notebook using Axolotl docker with support for 1b, 4b, 12b, and 27b variants.
July 14, 2025
Feature
Multimodal MedGemma 27B IT , MedSigLIP , and T5Gemma models are available through Model Garden.
July 11, 2025
Feature
To reduce the cost of running your inference jobs, you can use flex-start VMs, which are powered by Dynamic Workload Scheduler . Flex-start VMs offer significant discounts and are well-suited for
short-duration workloads. This feature is available in Preview .
For more information, see Use DWS flex-start VMs with inference .
July 01, 2025
Feature
The global endpoint is generally available (GA) for Anthropic's Claude Opus 4. For details, see Global endpoint .
June 30, 2025
Deprecated
Mistral Nemo, which is offered as a Model as a Service (MaaS) model in Model Garden, is deprecated. For details, see Model as a Service (MaaS) deprecations .
Deprecated
Anthropic's Claude 3 Opus, which is offered as a Model as a Service (MaaS) model in Model Garden, is deprecated. For details, see Model as a Service (MaaS) deprecations .
Feature
Vertex AI now offers GA support of Private Service Connect Interface and includes Private DNS Peering. For more information, see Use Private Service Connect interface for Vertex AI Training .
Feature
Private Service Connect interface (PSC-I) support for ML pipeline runs in Vertex AI Pipelines is now generally available . PSC-I is recommended for private connectivity because it reduces the chance of IP exhaustion, allows for transitive peering, and includes Private DNS Peering.
For more information, see Configure Private Service Connect interface for a pipeline .
Feature
Vertex AI online inference now offers Preview support of PSC service automation that can automatically create PSC endpoints for dedicated private endpoints. For more information, see Create the online inference endpoint with PSC automation .
June 27, 2025
Feature
Gemma 3n models are available through Model Garden.
June 24, 2025
Deprecated
The Generative AI module in the Vertex AI SDK is deprecated. For information about migrating to the Google Gen AI SDK, see the migration guide .
June 10, 2025
Feature
Vector Search custom constraints with Organization Policy
You can use custom constraints with the Organization Policy Service to provide more granular control over specific fields for indexes and index endpoints in Vector Search.
For more information, see Create custom constraints for Vector Search .
May 15, 2025
Announcement
Vertex AI custom training supports the following accelerators:
A3 Ultra
A4
Vertex AI online prediction supports the following accelerators:
A3 Mega
A4
For regional availability of accelerators, see Using accelerators .
April 16, 2025
Announcement
Persistent resources for custom training is generally available ( GA ) and supports rebooting.
March 27, 2025
Feature
Generally available : To reduce the cost of running your training and prediction jobs, you can use Spot VMs. Spot VMs are virtual machine (VM) instances that are excess Compute Engine capacity. Spot VMs have significant discounts, but Compute Engine might preemptively stop or delete Spot VMs to reclaim the capacity at any time.
For more information, see Use Spot VMs with training and Use Spot VMs with prediction .
March 26, 2025
Feature
Generally available : You can consume reservations of VMs that have GPUs attached with your custom training jobs or prediction jobs. Reservations of Compute Engine zonal resources help you gain a high level of assurance that your jobs have the necessary resources to run. For more information, see the following:
Use reservations with training
Use reservations with prediction
January 31, 2025
Feature
Dedicated Public Endpoints and Private Service Connect Endpoints (PSC-E) for Vertex AI Prediction are generally available (GA).
December 20, 2024
Feature
Vector Search hybrid search and sparse embeddings are generally available (GA)
Vector Search hybrid search and sparse embeddings are generally available ( GA ).
Hybrid search uses both dense and sparse embeddings, which lets you search based on a combination of keyword search and semantic search. For more information about hybrid search, see About hybrid search .
December 17, 2024
Feature
You can copy tuned Gemini 1.5 Pro 002 and Gemini 1.5 Flash 002 adapter models across projects. For details, see Copy a model in Vertex AI Model Registry .
December 02, 2024
Feature
Preview : You can consume reservations of VMs that have GPUs attached with your custom training jobs or prediction jobs. Reservations of Compute Engine zonal resources help you gain a high level of assurance that your jobs have the necessary resources to run. For more information, see the following:
Use reservations with training
Use reservations with prediction
October 31, 2024
Feature
PSC-I Egress is supported for Ray clusters Vertex AI. PSC-I is recommended for private connectivity since it reduces the chance of IP exhaustion, and allows for transitive peering. Check out Private Service Connect interface for Ray on Vertex AI . This feature is available in Preview .
Feature
Private Service Connect interface (PSC-I) is now supported for ML pipeline runs in Vertex AI Pipelines. PSC-I is recommended for private connectivity, since it reduces the chance of IP exhaustion, and allows for transitive peering.
For more information, see Configure Private Service Connect interface for a pipeline . This feature is available in Preview .
October 08, 2024
Feature
Vector Search Private Service Connect automation
Deploying an index with Private Service Connect automation is generally available ( GA ). You can set up a service connection policy so that you don't have to manually create a compute address and forwarding rule after each index deployment.
For more information, see Set up Vector Search with Private Service Connect .
September 17, 2024
Feature
To ensure that VM resources are available when your custom training and prediction jobs need them, you can now use Compute Engine reservations. Reservations provide a high level of assurance in obtaining capacity for Compute Engine resources. This feature is available in Preview for A2 and A3 machine series reservations.
For more information, see Use reservations with training and Use reservations with prediction .
Feature
To reduce the cost of running your training and prediction jobs, you can now use Spot VMs. Spot VMs are virtual machine (VM) instances that are excess Compute Engine capacity. Spot VMs have significant discounts, but Compute Engine might preemptively stop or delete Spot VMs to reclaim the capacity at any time. This feature is available in Preview .
For more information, see Use Spot VMs with training and Use Spot VMs with prediction .
September 16, 2024
Feature
Schedule Vertex AI custom training jobs based on resource availability. For details, see the Vertex AI documentation .
September 09, 2024
Feature
Ray cluster's autoscaling feature is now supported. See Scale Ray clusters on Vertex AI
August 11, 2024
Change
Generative AI on Vertex AI supports CMEK, VPC Service Controls, and Data Residency. For more information, see Security controls .
August 02, 2024
Feature
The Vertex AI Model Registry now offers Preview support for model copy across different projects. For information about how to copy your model projects and regions, see Copy models in Model Registry .
June 28, 2024
Announcement
Vertex AI custom training on TPU VMs support customer managed encryption keys (CMEK) .
June 20, 2024
Announcement
Vertex AI custom training supports TPU v5e in us-central1 . For details, see Vertex AI locations .
June 18, 2024
Deprecated
Starting on September 15, 2024, you can only customize
classification, entity extraction,
and sentiment analysis objectives by moving to Vertex AI Gemini prompts and tuning. Training or updating
models for Vertex AI AutoML for Text classification, entity extraction, and sentiment analysis
objectives will no longer be available. You can continue using existing Vertex AI AutoML Text models
until June 15, 2025. For more information about how Gemini offers enhanced user experience through
improved prompting capabilities, see Overview of model tuning for
Gemini .
May 31, 2024
Change
Vertex AI Regional APIs
Vertex AI regional APIs are available in the following seven regions :
us-east5
us-south1
africa-south1
europe-southwest1
europe-west12
me-central1
me-central2
Feature
Model Monitoring v2 is in Preview , which centralizes model monitoring configuration and visualization on a model version and enables monitoring models being served outside of Vertex AI. For more information, see Vertex AI Model Monitoring overview .
May 28, 2024
Announcement
Vector Search sparse embeddings and hybrid search in Public preview
Vector Search supports sparse embeddings and hybrid search in Public preview. Hybrid search uses both dense and sparse embeddings, which lets you search based on a combination of keyword search and semantic search. For how to format dense, sparse, and hybrid embeddings, see Input data and structure .
May 14, 2024
Change
For Ray on Vertex AI, Ray version 2.4 is no longer supported. Migrate your code to support Ray 2.9.3 or later and then delete Ray clusters that are running 2.4.
Announcement
Ray on Vertex AI is now generally available ( GA ) and includes the following updates:
Ray version 2.9.3 and Python 3.10 are supported. For information about Ray image support policies, see Supported versions .
VPC peering connection is no longer required if you use public endpoints.
Custom images are supported with Ray on Vertex AI.
You can use custom service accounts with Ray on Vertex AI.
A Colab template is not automatically created when you create a Ray Cluster. Instead, you can connect directly to Ray on Vertex AI clusters from Colab Enterprise's side panel .
April 30, 2024
Feature
Vertex AI custom training supports TPU v5e. For details, see Training with TPU accelerators .
April 15, 2024
Announcement
Persistent resource for Vertex AI custom training is generally available ( GA ).
Feature
Vertex AI Feature Store
The following features of Vertex AI Feature Store are now generally available ( GA ):
Optimized online serving : Serve features at ultra-low latencies. For more information, see Optimized online serving .
Search using embeddings : Perform vector similarity searches to retrieve semantically similar or related features for real-time serving. You can search using embeddings if your online store is configured to support embeddings. For more information, see Search using embeddings .
Feature view sync : Refresh or synchronize the feature data in a feature view within an online store from the feature data source in BigQuery. For more information, see Sync feature data to online store .
March 18, 2024
Change
Vector Search heuristics-based compaction
Vector Search uses heuristics-based metrics assess whether to trigger compaction. This prevents unnecessary compaction, and thus reduces cost. For general information about compaction, see Compaction .
March 08, 2024
Feature
Vertex AI Feature Store
The following features of Vertex AI Feature Store are now available in Preview :
Integration of Vertex AI Feature Store with Dataplex: Online store instances, feature views, and feature groups are now automatically registered as data assets in Data Catalog, a Dataplex feature that catalogs metadata from these resources. You can use the metadata search capability of Dataplex to search for and view the metadata of these resources. For more information, see Search for resource metadata in Data Catalog .
Service account configuration for feature views: You can configure a feature view to use a dedicated service account. By default, every feature view uses the service account configured for your project. For more information, see Configure the service account for a feature view .
Multiple entity IDs for a feature view: While creating or updating a feature view, you can specify multiple entity ID columns. For more information, see Create a feature view .
March 05, 2024
Feature
Create an empty index with Vector Search
You can create an empty index in Vector Search for batch and for streaming. No embedding data is required at index creation time, which enables faster startup time. To learn more, see Manage indexes .
March 04, 2024
Feature
Vertex AI Prediction
You can now use A3 machine types to serve predictions.
February 29, 2024
Feature
Vector Search feature launch
Update streaming index metadata : With this launch, you can directly update restricts and numeric restricts of data points inside StreamUpdate indexes without the compaction cost of a full update. To learn more, see Update dynamic metadata .
February 26, 2024
Feature
Structured logging support for Vertex AI custom training. For details, see Write code to return container logs .
Feature
Ground Multimodal Models
Model grounding for gemini-pro is available in Preview . Use grounding to
connect the gemini-pro model to unstructured text data stores in Vertex AI Search. Grounding lets models access and use the information in the data repositories to generate more enhanced and nuanced responses.
For more information, see Ground multimodal models .
February 21, 2024
Feature
Gemma open models are available
Gemma models, a family of lightweight, open models built from the same research and technology used to create the Gemini models, are available to run on your hardware, mobile devices, or hosted services. To learn more, see Use Gemma open models and the Gemma Model Garden card .
February 15, 2024
Change
The Vertex AI Gemini 1.0 Pro and Gemini 1.0 Pro Vision multimodal language models are generally available ( GA ). They have also been made available in the following regions: europe-west1, europe-west2, europe-west3, europe-west4, and europe-west9.
For more information, see the following topics:
Overview of multimodal models
Multimodal prompt design
Vertex AI Gemini API reference
Gemini Python SDK reference
Migrate from PaLM API to Gemini API
February 09, 2024
Feature
Multimodal embeddings video support is generally available
Embeddings for video data is now generally available ( GA ) using the multimodal embedding model ( multimodalembedding ). For more information, see the product documentation .
This features incurs pricing based on the mode you use. For more information,
see pricing .
February 07, 2024
Feature
The following models have been added to Model Garden :
Stable Diffusion XL LCM: The Latent Consistency Model (LCM) enhances
text-to-image generation in Latent Diffusion Models by enabling faster
and high-quality image creation with fewer steps.
LLaVA 1.5: Deploy LLaVA 1.5 models.
PyTorch-ZipNeRF: The Pytorch-ZipNeRF model is a state-of-the-art
implementation of the ZipNeRF algorithm in the Pytorch framework,
designed for efficient and accurate 3D reconstruction from 2D images.
LLaMA 2 (Quantized): A quantized version of Meta's Llama 2 models.
WizardLM: WizardLM is a large language model (LLM) developed by Microsoft,
fine-tuned on complex instructions by adapting the Evol-Instruct method.
WizardCoder: WizardCoder is a large language model (LLM) developed by
Microsoft, fine-tuned on complex instructions by adapting the Evol-Instruct
method to the domain of code.
AutoGluon: With AutoGluon you can train and deploy high-accuracy machine
learning and deep learning models for tabular data.
Lama (Large mask inpainting): Use Large Mask Inpainting with fast Fourier
convolutions (FFCs), a high receptive field perceptual loss, and large
training masks for resolution-robust image inpainting.
Change
The following changes have been made to Model Garden :
Added one-click tuning button, and dedicated
deployment, tuning, quantization, and evaluation notebooks for Llama 2.
Added one-click deployment button for more than 20 models with pre-trained
OSS artifacts, including Salesforce/blip-image-captioning-base and
timbrooks/instruct-pix2pix .
Supported CodeLlaMA70b with notebooks and the one-click deployment button.
Added tuning notebooks for Mistral models.
Added serving notebooks for Stable Video Diffusion Img2Vid XT. These notebooks
are used for research purposes.
February 05, 2024
Feature
Query an index from the Vector Search console
Vector Search has launched an improved console experience for querying both private and public deployed indexes, now available in Preview . From the console, you can create an index and endpoint, deploy the index to the endpoint, and query the index for nearest neighbors. For more information, see Manage indexes .
January 29, 2024
Feature
Vertex Prediction
You can now customize more deployment parameters when uploading your models, such as shared memory allocation and custom startup and readiness probes. These parameters may be useful when deploying LLMs.
For more information, see Deploy generative AI models , Custom container requirements for prediction , and ModelContainerSpec .
January 12, 2024
Feature
Model tuning for the textembedding-gecko and textembedding-gecko-multilingual
models is available in GA .
You can use supervised fine-tuning to tune the textembedding-gecko model.
For more information, see Tune text embeddings .
January 08, 2024
Change
AutoSxS evaluates LLMs side by side
The automatic side-by-side (AutoSxS) evaluation
tool
is available in Preview to A/B test the performance of your LLMs or pre-generated
predictions. It's comparable to human evaluators, yet faster, available
on-demand, and more cost-efficient.
January 05, 2024
Change
Generative AI on Vertex AI regional expansion
Generative AI on Vertex AI features for Batch Prediction and Model Evaluation are available in 12 additional Google Cloud regions .
December 29, 2023
Change
Vertex AI regional expansion
Vertex AI features for AutoML Forecasting, AutoML Tabular, Batch Prediction, Online Prediction, Pipelines, Training, Vector Search, and Vizier are available in 10 additional Google Cloud regions .
December 27, 2023
Change
Vertex Prediction
Quota for Custom model serving is now calculated based on your deployed model's real-time usage of compute resources.
Previously, compute resources, such as the number of Nvidia A100 GPUs being used, were deducted from your project's quota based on the deployed model's maxReplicaCount .
This change lets you deploy models based on actual compute usage rather than max usage, but it can prevent your deployed models from autoscaling if your quota is exhausted.
December 18, 2023
Announcement
Model Garden supports:
Hyperparameter tuning and customized datasets for OpenLLaMA models using the dataset format used by supervised tuning in Vertex AI.
GPTQ conversions for falcon-instruct models .
Latent Consistent Models , and research purpose only SDXL-Turbo models to stable diffusion XL notebooks.
Mixtral 8x7B models in the Mistral notebook .
December 14, 2023
Feature
Vertex AI Prediction
You can now use Cloud TPU v5e to serve online predictions. For more information, see Use Cloud TPUs for online prediction .
December 13, 2023
Feature
Vertex AI Gemini models
Vertex AI Gemini Pro and Gemini Pro Vision multimodal language models are available in Preview . For more information, see the following topics:
Overview of multimodal models
Multimodal prompt design
Vertex AI Gemini API reference
Gemini Python SDK reference
Migrate from PaLM API to Gemini API
Feature
Imagen 2 General Availability
The 005 version of Imagen's image generation model ( imagegeneration@005 ) is now generally available ( GA ) for image generation tasks. This model version is now the default for image generation tasks. For more information, see the product documentation .
For general information about Imagen models and versions, see Imagen model versions and lifecycle .
December 12, 2023
Feature
Text embedding model 003 (textembedding-gecko@003) available
The updated stable version of the text embedding foundation model, textembedding-gecko@003 , is available. textembedding-gecko@003 features improved quality compared to the previous stable versions, textembedding-gecko@001 and textembedding-gecko@002 . For more information on model versions, see Model versions and lifecycle .
December 08, 2023
Change
Generative AI on Vertex AI security control update
The Access Transparency (AXT) security control is available for the following features:
Embeddings for Multimodal online prediction
Imagen on Vertex AI online prediction
Imagen on Vertex AI tuning
December 06, 2023
Feature
Version @002 of the models for text, chat, code, and code chat are
available. The @002 model versions include improved prompt responses.
The @002 models are:
text-bison@002
chat-bison@002
code-bison@002
codechat-bison@002
To ensure that you always use the stable model version, specify the model
identifier with the version number. For example, text-bison@002 . For more
information, see Model versions and lifecycle .
Feature
Version 2 of the stable version of the Codey code completion foundation model, named code-gecko@002 , is available. code-gecko@002 features improved quality and reduced latency compared to the previous stable version, code-gecko@001 . These improvements can lead to a higher rate of acceptance.
December 05, 2023
Feature
Grounding with Vertex AI Search
Model grounding is available in ( Preview ). Use grounding to
connect the text-bison and chat-bison models to unstructured data stores in Vertex AI Search.
Grounding lets models access and use the information in the data repositories to generate more enhanced and nuanced responses.
For more information, see the Grounding Overview .
December 01, 2023
Change
The following Vertex AI Model Garden updates are available:
Updated default model deployment settings with L4 GPUs, such as LLaMA2, falcon-instruct, openllama, Stable Diffusion 1.5, 2.1, and XL models.
Support for hyperparameter tuning and customized datasets for LLaMA2 models using the dataset format used by supervised tuning in Vertex AI.
Recommended LoRA and QLoRA settings for large language model tuning in Vertex AI. For details, see LoRA and QLoRA recommendations for LLMs .
Support for AWQ and GPTQ conversions for LLaMA2 and OpenLLaMA models.
Benchmark reports for ViT pytorch and JAX training , OpenLLaMA 3b/7b/13b hyperparameter tuning , and Stable Diffusion 1.5 tuning and serving .
November 30, 2023
Feature
The Unicorn model size for PaLM 2 for Text is generally available ( GA ). The text-unicorn model provides improved response quality and reasoning capability compared to the text-bison model. For details, see Model information .
Announcement
Vertex AI's integration of model and dataset metadata into Dataplex's Data Catalog service is now generally available ( GA ). Search and discover these assets across projects and regions in Dataplex. Learn more at Use Data Catalog to search for model and dataset resources .
Note : For datasets of type TEXT_PROMPT , navigating in the UI from Data Catalog back to Vertex AI (via the Open in Vertex AI button, or using the Resource URL link) results in a blank page. This is a known issue and is expected to be fixed in the near future. To directly view TEXT_PROMPT datasets in Vertex AI, navigate to the Generative AI My Prompts tab.
November 24, 2023
Feature
ComputeToken API now available in Preview
The ComputeToken API is now available in ( Preview ).
You can use this API to get a list of tokens for a given prompt. A token is a way to represent a common sequence of characters found in a text input. To learn more, see Get a list of tokens .
November 17, 2023
Feature
Vertex AI Feature Store
The following features of the new and improved Vertex AI Feature Store are now generally available ( GA ):
Feature Registry : Register your feature data sources in BigQuery by creating feature groups and features. For more information, see Create a feature group and Create a feature .
Cloud Bigtable online serving : Serve features from one or more BigQuery data sources. You can set up Cloud Bigtable online serving by defining online serving clusters called online store instances and creating feature views within the online store instances.
Note that the following features of Vertex AI Feature Store are still in Preview :
Serve features at ultra-low latencies with Optimized online serving .
Sync data in a feature view within an online store.
Retrieve vector embeddings for real-time serving.
For more information, see About Vertex AI Feature Store .
November 13, 2023
Feature
Numerical filtering available in Vertex AI Vector Search
With Vector Search you can restrict results by "filtering" your index results. In addition to filtering by using categorical restrictions, you can now use numeric filtering.
To learn more, see Filter vector matches .
November 10, 2023
Feature
Generative AI on Vertex AI
Security controls are available for additional Generative AI on Vertex AI features.
November 07, 2023
Announcement
Training on TPU VMs is generally available ( GA ).
November 03, 2023
Feature
The following models have been added to Model Garden :
ImageBind: Multimodal embedding model.
Vicuna v1.5: LLM finetuned based on llama2.
OWL-ViT v2: SoTA Open Vocabulary Object Detection model.
DITO: SoTA Open Vocabulary Object Detection model.
NLLB: Multi-language translation model.
Mistral-7B: SoTA LLM at small size.
BioGPT: LLM finetuned for biomedical domain.
BiomedCILP: Multimodal foundational model finetuned for biomedical domain.
To see a list of all available models, see Explore models in Model Garden .
Announcement
New textembedding-gecko and textembedding-gecko-multilingual stable model versions
The following stable model versions are available in Generative AI on Vertex AI:
textembedding-gecko@002
textembedding-gecko-multilingual@001
For more information on model versions, see Model versions and lifecycle .
Change
Model Garden
Improved language model serving throughput. For details, see
Serving open source large language models efficiently on Model Garden .
Notebooks in the relevant model cards have been updated accordingly.
Inference speed up to 2 times faster compared with original implementation
for Stable Diffusion 1.5, 2.1, and XL models.
Improved the workflow of the Deploy button in all supported model cards.
Updated notebooks for Llama2, OpenLlama, and Falcon Instruct with suggested
machine specs for model serving, and
EleutherAI's evaluation harness
dockers for model evaluation.
November 02, 2023
Change
Generative AI support on Vertex AI
Generative AI on Vertex AI can be accessed through 12 regional APIs in North America, Europe, and Asia. Regional APIs let customers control where data is stored at-rest.
October 30, 2023
Security
Deep Learning VM Images is a set of prepackaged virtual machine images with a deep learning framework that are ready to be run out of the box. Recently, an out-of-bounds write vulnerability was discovered in the ReadHuffmanCodes() function in the libwebp library. This might impact images that use this library.
Google Cloud continuously scans its publicly published images and updates the packages to assure patched distros are included in the latest releases available for customer adoption. Deep Learning VM Images have been updated to ensure that the latest VM images include the patched distros. Customers adopting the latest VM images are not exposed to this vulnerability.
For more information, see the Vertex AI security bulletin .
October 17, 2023
Announcement
Vertex AI Vector Search Improvements
Vector Search has improved the initial index creation process for smaller indexes (<100MB), reducing time to build from about 1 hour to about 5 mins. To get started, see Vector Search quickstart to create an index.
Feature
New Vertex AI Vector Search Console
Vector Search has launched a console experience in Google Cloud for creating and deploying indexes, now available in Preview . From the console, you can create indexes, and create public or VPC endpoints for your indexes, and deploy. For more information, see Manage indexes .
October 05, 2023
Feature
Ray on Vertex AI is now available in Preview
Ray is an open-source framework for scaling AI and
Python applications. Ray provides the infrastructure to perform distributed
computing and parallel processing for your machine learning workflow.
You can now create Ray clusters and develop your Ray applications on Vertex AI. This feature is in Preview . For more information, see Ray on Vertex AI overview .
October 04, 2023
Feature
Model tuning for the textembedding-gecko model is now available in Preview
You can now use supervised fine-tuning to tune the textembedding-gecko model. This feature is in ( Preview ).
For more information, see Tune text embeddings .
Feature
Vertex AI Feature Store
The new and improved Vertex AI Feature Store is now available in Preview . With the new Vertex AI Feature Store you can streamline your feature management in the following ways:
Store and maintain your offline feature data in BigQuery, taking advantage of the data management capabilities of BigQuery. In the new Vertex AI Feature Store, BigQuery serves as the offline store. You don't need to copy or import feature data to an offline store in Vertex AI.
Register your feature data sources in BigQuery by creating feature groups and features.
Define online serving clusters called online store instances; and then serve features from one or more BigQuery data sources, by aggregating them in a feature view within an online store instance. Use Optimized online serving for ultra-low latency needs and Cloud Bigtable online serving for high data volumes.
Retrieve vector embeddings stored in BigQuery for real-time serving.
For more information, see About Vertex AI Feature Store .
Feature
Vertex AI Prediction
You can now use C3 machine types to serve predictions.
October 03, 2023
Security
TorchServe is used to host PyTorch machine learning models for online prediction. Vertex AI provides pre-built PyTorch model serving containers which depend on TorchServe. Vulnerabilities were recently discovered in TorchServe which would allow an attacker to take control of a TorchServe deployment if its model management API is exposed. Customers with PyTorch models deployed to Vertex AI online prediction are not affected by these vulnerabilities, since Vertex AI does not expose TorchServe's model management API. Customers using TorchServe outside of Vertex AI should take precautions to ensure their deployments are set up securely.
For more information, see the Vertex AI security bulletin .
September 08, 2023
Feature
Vertex AI Prediction
You can now use A2 Ultra machines to serve predictions in us-central1 , us-east4 , europe-west4 , and asia-southeast1 . Each A2 Ultra machine has a fixed number of NVIDIA A100 80GB GPUs attached.
September 06, 2023
Change
Vertex AI Prediction
The following prebuilt containers for prediction have been updated:
tf2-cpu.2-12
tf2-gpu.2-12
tf2-cpu.2-11
tf2-gpu.2-11
tf2-cpu.2-10
tf2-gpu.2-10
tf2-cpu.2-9
tf2-gpu.2-9
tf2-cpu.2-8
tf2-gpu.2-8
sklearn-cpu.1-2
xgboost-cpu.1-7
pytorch-cpu.2-0
pytorch-gpu.2-0
pytorch-cpu.1-13
pytorch-gpu.1-13
To update your containers, redeploy your models. To learn more, see Vertex AI framework support policy and Prebuilt containers for prediction .
September 01, 2023
Change
Pricing update
The pricing for text-bison has been reduced to $0.0005 per 1,000 input and output characters. For details, see Vertex AI Pricing .
August 31, 2023
Feature
Experiment management: The Google Cloud console supports visualization of your model's performance changes over steps during training, and shows advanced run comparisons. To learn more, see Compare and analyze runs: Google Cloud console .
August 29, 2023
Feature
Model tuning for the chat-bison model is now available in Preview
You can now use supervised fine-tuning to tune the chat-bison model. This feature is in ( Preview ).
For more information, see Tune text models .
Feature
New embedding model now available in Preview
Generative AI support on Vertex AI users can now create embeddings using a new model trained on a wide range of non-English languages in ( Preview ).
textembedding-gecko-multilingual
To learn more, see Get text embeddings .
Feature
New Generative AI support on Vertex AI models and expanded language support
Generative AI support on Vertex AI has been updated to include new language
model candidates ( latest models), language models that support input and
output tokens up to 32k, and more supported languages.
For details, see Available models
and Model versions and lifecycle .
Feature
Model tuning for the text-bison model is now Generally Available (GA)
Tuning the text-bison model with supervised fine-tuning (SFT) is now Generally Available (GA) .
For more information, see Tune text models .
Feature
Stream responses from Generative AI models
Generative AI model streaming support is now Generally Available (GA) . After you send a prompt, the model returns response tokens as they're generated instead of waiting for the entire output to be available.
Supported models are:
text-bison
chat-bison
code-bison
codechat-bison
To learn more, see Stream responses from Generative AI models .
Feature
Imagen on Vertex AI now offers the following Generally Available (GA) features:
Subject model tuning (standard) *
Style model tuning *
* Restricted access feature.
For more information about Imagen or how to get access to restricted GA features, see the
Imagen on Vertex AI overview .
Feature
Metrics-based model evaluation
You can evaluate the performance of foundation models and tuned models against an evaluation dataset for classification, summarization, question answering, and general text generation. This feature is available in ( Preview ).
To learn more, see Evaluate model performance .
Feature
Vertex AI Codey APIs language support
Vertex AI Codey APIs now support additional programming languages. For more information, see Supported coding languages
Announcement
Vertex AI Vector Search is the new product name for Vertex AI Matching Engine .
Feature
Vertex AI Codey APIs now support supervised fine-tuning (SFT)
The code chat ( codechat-bison ) and code generation ( code-bison ) Vertex AI Codey APIs models now support supervised fine-tuning (SFT). The supervised-fine tuning for Vertex AI Codey APIs models feature is in ( Preview ). For more information, see Tune code models .
Feature
Reinforcement learning from human feedback (RLHF) tuning for text-bison
The Generative AI text generation foundation model ( text-bison ) now supports RLHF tuning. The RLHF tuning feature is in ( Preview ).
For more information, see Use RLHF model tuning .
Feature
The Vertex AI Pipelines Template Gallery is now generally available ( GA ). The Template Gallery contains Google-authored pipeline and component templates to bootstrap your MLOps practice. Customize and run the templates as-is or embed them into your own pipelines. For more information, see Use a prebuilt template from the Template Gallery .
Feature
Vertex AI Model Registry Models and managed datasets are now synced to Dataplex's Data Catalog service. Data Catalog enables organization-wide search and discovery of data artifacts, while still maintaining IAM boundaries. The sync and search of these assets is available in Preview . For more information, see Data Catalog documentation .
Feature
CountToken API now available in Preview
The CountToken API is now available in ( Preview ). You can use this API to get the token count and the number of billable characters for a prompt. To learn more, see Get token count .
August 28, 2023
Feature
Tabular Workflow for Forecasting is available in Preview . For documentation, refer to Tabular Workflow for Forecasting .
August 22, 2023
Feature
Vertex AI custom training has launched persistent resources in Preview . A persistent resource is a long-running cluster of machines that you can use to run custom training jobs. Once created, the persistent resource remains available for future training jobs, so you don't have to wait for compute resources to be provisioned each time you want to train a model.
August 18, 2023
Feature
The Vertex AI Matching Engine public endpoint is now generally available ( GA ). For information about how to get started, see Matching Engine Setup .
August 11, 2023
Change
Generative AI on Vertex AI supports CMEK, VPC Service Controls, Data Residency, and Access Transparency. For more information, see Security controls .
August 09, 2023
Feature
Imagen Multimodal embeddings available in GA
Imagen on Vertex AI now offers the following GA feature:
Multimodal embeddings
This feature incurs different pricing
based on if you use image input or text input. For more information, see the
multimodal embeddings
feature page.
August 02, 2023
Change
Updated prebuilt images for Tensorflow 2.11 are now available.
Change
Prebuilt containers to perform custom training with TensorFlow 2.12 are now generally available (GA) .
August 01, 2023
Feature
The schedules API for Vertex AI Pipelines is now generally available ( GA ). You can schedule recurring pipeline runs in Vertex AI by specifying a frequency in cron syntax, and optionally the start time and/or end time. Additionally, you can pause, resume, update, and delete schedules.For more information, see Schedule a pipeline run with scheduler API .
Announcement
Vertex AI Tensorboard pricing has changed from a per-user monthly license of $300 per month to $10 GiB per month for storage of your logs. This means no more subscription fees. You only pay for the storage you've used. See the Vertex AI Tensorboard: Delete Outdated Tensorboard Experiments tutorial for how to manage storage.
July 28, 2023
Change
The learning_rate parameter in generative AI model tuning is now learning_rate_multiplier .
To use the model's or tuning method's default learning rate, use the default
learning_rate_multiplier value of 1.0 .
If you haven't configured learning_rate before, no action is needed.
If using tuning_method=tune_v2 with the v2.0.0 pipeline template
(Python SDK v1.28.1+), the recommended learning rate is 0.0002. To convert your
custom learning_rate to learning_rate_multiplier , calculate as follows:
learning_rate_multiplier = custom_learning_rate_value / 0.0002
July 18, 2023
Feature
Model tuning updates for text-bison:
Upgraded tuning pipeline now offers more efficient tuning and better
performance on text-bison.
New learning_rate parameter lets you adjust the step size at each
iteration.
For details, see
Tune language foundation models .
July 17, 2023
Feature
Imagen on Vertex AI now offers the following Generally Available (GA) features:
Image generation (text-to-image generation) *
Image editing *
Image visual captioning
Visual Question Answering (VQA)
* Restricted access feature.
For more information about Imagen or how to get access to restricted GA or Preview features, see the
Imagen on Vertex AI overview .
Feature
The Vertex AI PaLM API has added support for the following languages:
Spanish (es)
Korean (ko)
Hindi (hi)
Chinese (zh)
For the complete list of supported languages, see
Supported languages .
Feature
Imagen now supports human face generation for the following features:
Image generation (text-to-image generation) *
Image editing *
* Restricted access feature.
Human face generation is enabled by default, except for images with children
and/or celebrities. For more information, see the
usage guidelines .
July 13, 2023
Feature
Support for batch text ( text-bison ) requests
is now available in ( GA ).
You can review pricing for the chat-bison model at
Vertex AI pricing page .
July 10, 2023
Feature
Support for PaLM 2 for Chat ( chat-bison )
is now available in ( GA ).
You can review pricing for the chat-bison model at
Vertex AI pricing page .
July 07, 2023
Announcement
GCSFuse support for custom training is generally available ( GA ).
July 06, 2023
Feature
Vertex AI model evaluation is now generally available ( GA ) with the following new Preview features:
Model evaluation with sliced metrics.
Model evaluation with fairness and bias metrics.
Vision error analysis for AutoML image classification models.
June 30, 2023
Feature
Vertex Explainable AI
Support for example-based explanations is now generally available ( GA ).
Deprecated
Vertex AI data labeling is deprecated and will no longer be available on Google Cloud after July 1, 2024. For new labeling tasks, you can use add labels using the Google Cloud console or access data labeling solutions from our partners in the Google Cloud console marketplace , such as Labelbox and Snorkel.
June 29, 2023
Feature
Vertex AI Codey APIs
The Vertex AI Codey APIs are now generally available ( GA ).
Use the Codey APIs to create solutions with code generation, code completion, and code chat. Because the Vertex AI Codey APIs are GA, you incur usage costs if you use them. To learn about pricing, see the Generative AI support on Vertex AI pricing page .
The models in this release include:
code-bison (code generation)
codechat-bison (multi-turn code chat)
code-gecko (code completion)
The maximum tokens for input was increased from 4,096 to 6,144 tokens for code-bison and codechat-bison to allow longer prompts and chat history. The maximum tokens for output was increased from 1,024 to 2,048 for code-bison and codechat-bison to allow for longer responses.
Additional programming languages are supported. For more information, see Supported coding languages .
Several fine-tuning datasets were removed from the code-bison and codechat-bison models to implement the following improvements:
Excessive chattiness.
Artifacting, such as NBSP (non-breaking space) characters.
Low quality code responses.
To learn about cloud horizontals, please see Vertex AI certifications .
Feature
Vertex AI Pipeline task-level logs are now generally available ( GA ) in Cloud Logging. Additionally, from Cloud Logging you can route pipeline logs to a Pub/Sub sink to power your event-driven architecture. For more information, see View pipeline job logs .
June 20, 2023
Feature
A100 80GB accelerators are now generally available ( GA ) for custom training jobs in the following regions:
asia-southeast1
europe-west4
us-central1
us-east4
For more information, see Locations .
Announcement
The Kubeflow Pipelines (KFP) SDK v2 is now generally available ( GA ). KFP SDK v2 introduces several improvements for authoring pipelines and is fully supported by Vertex AI Pipelines.
To learn more about the changes in KFP v2, see the KFP v2 Release Notes and KFP v2 migration guide .
Announcement
The Google Cloud Pipeline Components (GCPC) SDK v2 is now generally available ( GA ). GCPC v2 introduces support for the KFP v2 SDK and is fully supported by Vertex AI Pipelines.
To learn more about the updates in the latest version of the GCPC SDK, see the Google Cloud Pipelines Components Release Notes .
June 15, 2023
Feature
The chat-bison@001 model has been updated to better follow instructions in the context field. For details, on how to create chat prompts for chat-bison@001 , see Design chat prompts .
June 09, 2023
Announcement
HIPAA compliance for Generative AI on Vertex AI
Generative AI support on Vertex AI now supports HIPAA compliance. The coverage includes components of the Model Garden and Generative AI Studio .
To learn more about Vertex certifications, see Vertex AI features and Vertex AI certifications .
June 07, 2023
Feature
Vertex AI Codey APIs
The Vertex AI Codey APIs are now in Preview .
With the Codey API, code generation, code completion, and code chat APIs can be used from any Google Cloud project without allowlisting. The APIs can be accessed from the
us-central1 region. The Codey APIs can be used in the Generative AI studio or
programmatically in REST commands.
To get started, see the Code models overview .
Feature
Vertex AI Model Garden
The Vertex AI Model Garden is generally available (GA) ). Model Garden is a platform that helps you to discover, test, customize, and deploy Vertex AI and select OSS models. These models range from tunable to task-specific. You can find these models on the Model Garden page in the Google Cloud console.
To get started, see Explore AI models and APIs in Model Garden .
Feature
PaLM Text and Embeddings APIs, and Generative AI Studio
The Generative AI support on Vertex AI is now generally available ( GA ).
With this feature launch, you can leverage the PaLM API to generate
AI models that you can test, tune, and deploy in your AI-powered applications.
With the GA of these features, you will incur usage costs if you use the
text-bison and textembedding-gecko PaLM APIs. To learn about pricing, see
the Vertex AI pricing page .
Features and models in this release include:
PaLM 2 for Text: text-bison
Embedding for Text: textembedding-gecko
Generative AI Studio for Language
Important: With this GA launch, standard security and compliance for
Vertex AI is not yet available to Generative AI. To learn more, see
Vertex AI features and Vertex AI certifications .
June 01, 2023
Feature
Vertex Prediction
You can now specify a multi-region BigQuery table as the input or output to a batch prediction request .
May 18, 2023
Feature
Vertex Prediction
You can co-host models on the same VM from the Google Cloud console. Previously, this capability was available only from the REST API. For more information, see Share resources across deployments .
May 16, 2023
Feature
Vertex AI custom training now supports deep integration with Vertex AI Experiments. You can submit training jobs with autologging enabled to automatically log parameters and model performance metrics. For more information, see Run training job with experiment tracking
Feature
The scheduler API for Vertex AI Pipelines is now available in Preview . You can schedule recurring pipeline runs in Vertex AI by specifying a frequency, start time (optional), and end time (optional). For more information, see Schedule a pipeline run with scheduler API .
May 10, 2023
Feature
Vertex AI Model Garden
The Vertex AI Model Garden is available in Preview . The Model Garden is a platform that helps you to discover, test, customize, and deploy Vertex AI and select OSS models. These models range from tunable to task-specific. You can find these models on the Model Garden page in the Google Cloud console.
To get started, see Explore AI models and APIs in Model Garden .
Feature
Generative AI Support for Vertex AI
Generative AI Support for Vertex AI is now available in Preview . With this feature launch, you can leverage the Vertex AI PaLM API to generate AI models that you can test, tune, and deploy in your AI-powered applications.
Features and models in this release include:
PaLM 2 for Text: text-bison@001
PaLM 2 for Chat: chat-bison@001
Embedding for Text: textembedding-gecko@001
Generative AI Studio for Language
Tuning for PaLM 2
Vertex AI SDK v1.25, which includes new features such as TextGenerationModel(text-bison@001), ChatModel(chat-bison@001), TextEmbeddingModel(textembedding-gecko@001)
You can interact with the generative AI features on Vertex AI by using Vertex AI Studio in the Google Cloud console, the Vertex AI API, and the Vertex AI SDK for Python.
Learn more about Generative AI Support for Vertex AI
See an Introduction to Generative AI Studio
Get started with a Generative AI Studio quickstart
May 09, 2023
Feature
Vertex AI Prediction
You can now use G2 accelerator-optimized machine types to serve predictions. Each G2 machine has a fixed number of NVIDIA L4 GPUs attached.
April 14, 2023
Feature
Vertex AI Prediction
You can now update some scaling and container logging configuration settings on a DeployedModel without undeploying and redeploying it to an endpoint.
For more information, see update the scaling configuration and container logging .
April 13, 2023
Announcement
The Timeseries Insights API is now generally available ( GA ). With the Timeseries Insights API, you can forecast and detect anomalies over billions of events in real time. For more information, see Timeseries Insights .
April 04, 2023
Feature
Vertex AI Pipelines is now integrated with Cloud Asset Inventory service. You can use Cloud Asset Inventory to search, export, monitor, and analyze pipeline resources and metadata, and also view the resource history.
Feature
Vertex AI Prediction
You can now view logs for Vertex AI Batch Prediction jobs in Cloud Logging .
Feature
The Vertex AI Matching Engine service now offers Preview support for deploying an index to a public endpoint. For information about how to get started, see Matching Engine Setup .
April 03, 2023
Feature
The Vertex AI Model Registry now offers Preview support for model copy between regions. For information about how to copy your model between regions, see Copy models in Model Registry .
March 28, 2023
Feature
Vertex AI Pipelines cost showback with billing labels is now generally available ( GA ). You can now use billing labels to review the cost of a pipeline run, along with the cost of individual resources generated from Google Cloud Pipeline Components in the pipeline run. For more information, see Understand pipeline run costs .
March 21, 2023
Feature
Vertex AI supports running Explainable AI on certain types of BQML models when they are added to the Vertex AI Model Registry (GA) . To learn more, see Explainable AI for BigQuery ML models .
Feature
Vertex AI Feature Store
The ability to delete feature values from an entity type is now generally available ( GA ). The following features are available:
Delete feature values from specified entities
Delete feature values from specified features within a time range
Links to additional resources:
Learn more about the delete_feature_values method in the Vertex AI SDK for Python.
View the Python code sample on GitHub
View the Python (Async) code sample on GitHub
March 20, 2023
Feature
Vertex AI Prediction
You can now use N2, N2D, C2, and C2D machine types to serve predictions.
March 03, 2023
Change
Pre-built containers to perform custom training with TensorFlow 2.11 , PyTorch 1.12 , or PyTorch 1.13 are now generally available ( GA ).
February 28, 2023
Change
A new custom training overview page is available. The new overview page covers the following topics:
What is custom training?
Benefits of custom training on Vertex AI.
How custom training works.
Custom training workflow.
February 14, 2023
Feature
Vertex AI Prediction
Pre-built PyTorch containers for serving predictions from PyTorch models is generally available ( GA ).
Feature
Vertex AI Matching Engine now supports Private Service Connect in Preview . To learn how to set up a
a Private Service Connect instance, see Using Private Service Connect .
February 13, 2023
Feature
Support for resource-level IAM policies for Vertex AI featurestore and entityType resources is generally available ( GA ). For more information, see Control access to resources .
February 10, 2023
Fixed
When performing distributed training, Vertex AI properly sets the primary replica in CLUSTER_SPEC as workerpool0 instead of chief . For details, see Format CLUSTER_SPEC .
February 06, 2023
Feature
The Vertex AI Pipelines Template Gallery is now available in Preview . You can bootstrap your MLOps workflows with Google-authored pipeline and component templates. For more information, see Use a prebuilt template from the Template Gallery .
January 26, 2023
Feature
Tabular Workflow for End-to-End AutoML is generally available ( GA ). For documentation, refer to Tabular Workflow for End-to-End AutoML .
January 18, 2023
Change
Vertex AI Explainability
When uploading TensorFlow 2 models, the ExplanationMetadata field is now optional, making it easier to configure your model for explainability. For more information, see Import a model with an explanationSpec field .
January 11, 2023
Change
Vertex AI Matching Engine is available in the following regions:
us-west2 – (Los Angeles)
us-west3 – (Salt Lake City)
northamerica-northeast1 – (Montréal)
northamerica-northeast2 – (Toronto)
europe-central2 – (Warsaw)
europe-west2 – (London)
europe-west3 – (Frankfurt)
europe-west6 – (Zurich)
asia-east1 – (Taiwan)
Asia-east2 – (Hong Kong)
me-west1 – (Tel aviv)
To see all of the available locations for Matching Engine, see the Vertex AI Locations page .
December 20, 2022
Feature
Vertex AI TensorFlow Profiler
Vertex AI TensorFlow Profiler is generally available GA . You can use TensorFlow Profiler to debug model training performance for your custom training jobs.
For details, see Profile model training performance using Profiler .
Feature
Vertex AI Matching Engine
Vertex AI Matching Engine now offers General Availability support for updating your indices using Streaming Update, which is real-time indexing for the Approximate Nearest Neighbor (ANN) service.
Feature
Vertex AI Feature Store streaming ingestion is now generally available ( GA ).
Change
You can now override the default data retention limit of 4000 days for the online store and the offline store in Vertex AI Feature Store.
You can set the data retention limit for the online store at the featurestore level.
You can set the data retention limit for the offline store at the entity type level.
December 05, 2022
Feature
The Pipeline Templates feature is now generally available ( GA ). The Your Templates tab is supported by Artifact Registry and allows you to publish and curate pipeline and component templatess. For documentation, refer to Create, upload, and use a pipeline template .
November 30, 2022
Feature
AutoML image model updates
AutoML image classification and object detection now support a higher-accuracy model type. This model is available in Preview .
For information about how to train a model using the higher accuracy model type, see Begin AutoML model training .
Batch prediction is currently not supported for this model type.
Feature
Cloud Logging for Vertex AI Pipelines is now generally available ( GA ). For more information, see View pipeline job logs .
November 18, 2022
Feature
Vertex AI Prediction
You can now perform some simple filtering and transformation on the batch input in your BatchPredictionJob requests without having to write any code in the prediction container. This feature is in Preview . For more information, see Filter and transform input data .
November 17, 2022
Feature
The Vertex AI Pipelines email notification component is now generally available ( GA ). This component enables you to configure your pipeline to send up to three emails upon success or failure of a pipeline run. For more information, see Configure email notifications and the Email notification component .
November 16, 2022
Feature
Vertex AI has added support for the following regions:
us-west3 (Salt Lake City)
europe-central2 (Warsaw)
asia-southeast2 (Jakarta)
me-west1 (Tel aviv)
Some features of Vertex AI are not supported in these regions. Check feature availability for all regions on the Vertex AI Locations page .
November 10, 2022
Feature
AutoML Image Classification Error Analysis
Error analysis allows you to examine error cases after training a model from within the model evaluation page. This feature is available in Preview .
For each image you can inspect similar images from the training set to help identify the following:
Label inconsistencies between visually similar images
Outliers if a test sample has no visually similar images in the training set
After fixing any data issues, you can retrain the model to improve model performance.
November 09, 2022
Feature
Feature Transform Engine is available in Preview . For documentation, refer to Feature engineering .
November 04, 2022
Feature
Vertex ML Metadata
You can now filter contexts, executions, and artifacts by association and attribution .
Feature
Vertex AI Prediction
You can now use A2 machine types to serve predictions.
Feature
Custom training on Vertex AI now supports NVIDIA A100 80GB GPUs on a2-ultragpu-1g/2g/4g/8g machines. For details, see Configure compute resources for custom training .
November 03, 2022
Feature
Vertex AI Prediction
Custom prediction routines (CPR) are now Generally Available . CPR lets you easily build custom containers for prediction with pre/post processing support.
October 27, 2022
Feature
Vertex AI Prediction
You can now use E2 machine types to serve predictions.
October 12, 2022
Feature
Tabular Workflow for TabNet Training is available in Preview . For documentation, refer to Tabular Workflows for TabNet Training .
Tabular Workflow for Wide & Deep Training is available in Preview . For documentation, refer to Tabular Workflow for Wide & Deep Training .
October 11, 2022
Feature
Vertex AI Feature Store streaming ingestion is available in Preview .
October 10, 2022
Feature
The Vertex AI Model Registry and BigQuery ML integration is generally available ( GA ). With this integration, BigQuery ML models can be managed alongside other ML models in Vertex AI to easily version, evaluate, and deploy for prediction.
Feature
The Vertex AI Model Registry is generally available ( GA ). Vertex AI Model Registry is a searchable repository where you can manage the lifecycle of your ML models. From the Vertex AI Model Registry, you can better organize your models, train new versions, and deploy directly to endpoints.
October 06, 2022
Feature
Incrementally train an AutoML model
You can now incrementally train an AutoML image classification or object detection model by selecting a previously trained model. This feature is in Preview . For more information, see Train an AutoML image classification model .
October 05, 2022
Feature
Vertex AI Feature Store
The ability to delete feature values from an entity type is now available in Preview . The following features are available:
Delete feature values from specified entities
Delete feature values from specified features within a time range
Links to additional resources:
Learn more about the delete_feature_values method in the Vertex AI SDK for Python.
View the Python code sample on GitHub
View the Python (Async) code sample on GitHub
October 04, 2022
Feature
Vertex AI model evaluation is now available in Preview. Model evaluation provides model evaluation metrics, such as precision and recall, to help you
determine the performance of your models.
September 26, 2022
Feature
Vertex AI Model Monitoring
Vertex AI Model Monitoring now offers Preview support for batch prediction jobs. For more details, see Vertex AI Model Monitoring for batch predictions .
Feature
Vertex AI Feature Store
Feature value monitoring is now generally available ( GA ).
September 22, 2022
Feature
Vertex AI Matching Engine
Vertex AI Matching Engine now offers Preview support for updating your indices using Streaming Update, which is real-time indexing for the Approximate Nearest Neighbor (ANN) service.
September 20, 2022
Feature
The option to configure pipeline run caching, ( enable_caching ), is available in the Google Cloud console.
September 14, 2022
Feature
You can now limit the number of concurrent or parallel task runs in a pipeline run using dsl.ParallelFor . For more information, see the Kubeflow Pipelines SDK Documentation .
Change
The performance of the ListPipelineJobs API has been improved via a new readMask that lets you filter out large fields. To leverage this in the Python SDK, use the new enable_simple_view .
August 12, 2022
Feature
Vertex Explainable AI
Vertex Explainable AI now offers Preview support for example-based explanations. For more information, see Configure example-based explanations for custom training .
August 01, 2022
Feature
TensorFlow Profiler integration : Debug model training performance for your custom training jobs. For details, see Profile model training performance using Profiler .
July 29, 2022
Feature
Vertex AI now offers Preview support for Custom prediction routines (CPR) . CPR lets you easily build custom containers for prediction with pre/post processing support.
July 18, 2022
Feature
NFS support for custom training is GA. For details, see Mount an NFS share for custom training .
July 14, 2022
Feature
The Pipeline Templates feature is available in Preview . For documentation, refer to Create, upload, and use a pipeline template .
The features supported by pipeline templates include the following:
Create a template registry using Artifact Registry (AR).
Compile and publish a pipeline template.
Create a pipeline run using the template and filter the runs.
Manage (create, update, or delete) the pipeline template resources.
July 12, 2022
Change
You can now use a pre-built container to perform custom training with TensorFlow 2.9
July 11, 2022
Feature
Vertex AI Pipelines now lets you configure task-level retries. You can set the number of times a task is retried before it fails. For more information about this option, see the Kubeflow Pipelines SDK Documentation .
July 06, 2022
Feature
Tabular Workflows is available in Preview . For documentation, refer to Tabular Workflows on Vertex AI .
End-to-End AutoML workflow is available in Public Preview . For documentation, refer to End-to-End AutoML .
June 30, 2022
Feature
Feature: Vertex AI Experiments is generally available ( GA ). Vertex AI Experiments helps users track and compare multiple experiment runs and analyze key model metrics.
Features supported by Experiments include:
Vary and track parameters and metrics.
Compare parameters, metrics, and artifacts between pipeline runs.
Track steps and artifacts to capture the lineage of experiments.
Compare vertex pipelines against Notebook experiments.
June 28, 2022
Feature
Vertex AI Forecasting is available in GA . The following features are available:
Forecasting with ARIMA+
Explainable AI for Forecasting
Hierarchical Forecasting
Model training with AutoML or Seq2Seq+
Forecasting window configuration during model training
Holiday effect modeling during model training
June 17, 2022
Feature
Support for IAM resource-level policies for Vertex AI featurestore and entityType resources is available in Preview .
May 24, 2022
Feature
You can now configure the failure policy for a pipeline run.
May 18, 2022
Feature
The ability to configure Vertex AI private endpoints is now general available ( GA ). Vertex AI private endpoints provide a low-latency, secure connection to the Vertex AI online prediction service. You can configure Vertex AI private endpoints by using VPC Network Peering. For more information, see Use private endpoints for online prediction .
April 26, 2022
Feature
You can now train your custom models using Cloud TPU Architecture (TPU VMs) .
April 21, 2022
Feature
You can now use a pre-built container to perform custom training with PyTorch 1.11 .
April 06, 2022
Feature
Vertex AI Model Registry is available in Preview . Vertex AI Model Registry is a searchable repository where you can manage the lifecycle of your ML models. From the Vertex AI Model Registry, you can better organize your models, train new versions, and deploy directly to endpoints.
March 07, 2022
Feature
Google Cloud Pipeline Components SDK v1.0 is now generally available.
Feature
Vertex AI Feature Store online store autoscaling is available in Preview . The online store nodes automatically scale to balance performance and cost with different traffic patterns. The offline store already scales automatically.
Feature
You can now mount Network File System (NFS)
shares to access remote files when you run a custom training job. For more information, see Mount an NFS share for custom training .
This feature is in Preview .
February 16, 2022
Feature
You can now use a pre-built container to perform custom training with TensorFlow 2.8 .
February 10, 2022
Change
For Vertex AI featurestore resources, the online store is optional. You can set the number of online nodes to 0 . For more information, see Manage featurestores .
January 04, 2022
Feature
You can now use a pre-built container to perform custom training with PyTorch 1.10 .
December 23, 2021
Change
There are now three Vertex AI release note feeds. Add any of the following to your feed
reader :
For both Vertex AI and Vertex AI Workbench:
https://cloud.google.com/feeds/vertex-ai-product-group-release-notes.xml
For Vertex AI only:
https://cloud.google.com/feeds/vertex-ai-release-notes.xml
For Vertex AI Workbench only:
https://cloud.google.com/feeds/aiplatformnotebooks-release-notes.xml
December 02, 2021
Feature
You can now use a pre-built container to perform custom training with TensorFlow 2.7 .
December 01, 2021
Feature
Vertex AI TensorBoard is generally available ( GA ).
November 19, 2021
Feature
The autopackaging feature of the gcloud ai custom-jobs create command is generally available ( GA ). Autopackaging lets you use a single command to run code on your local computer as a custom training job in Vertex AI.
Feature
The gcloud ai customs-jobs local-run command is generally available ( GA ). You can use this command to containerize and run training code locally .
November 09, 2021
Feature
Vertex AI Pipelines is generally available ( GA ).
November 02, 2021
Feature
Using interactive shells to inspect custom training jobs is generally available ( GA ).
You can use these interactive shells with VPC Service Controls .
October 25, 2021
Feature
Vertex ML Metadata is generally available ( GA ).
October 05, 2021
Feature
Vertex Feature Store is generally available ( GA ).
September 24, 2021
Feature
Vertex Matching Engine is generally available ( GA ).
September 21, 2021
Feature
Vertex AI Vizier is generally available ( GA ).
September 15, 2021
Feature
Vertex Explainable AI is generally available ( GA ).
September 13, 2021
Feature
You can use a pre-built container to serve predictions from TensorFlow 2.6 models .
September 10, 2021
Feature
Vertex Model Monitoring is generally available ( GA ).
Feature
When you perform custom training, you can access Cloud Storage buckets by reading and writing to the local filesystem . This feature, based on Cloud Storage Fuse , is available in Preview .
August 30, 2021
Feature
You can now use a pre-built container to perform custom training with TensorFlow 2.6 and PyTorch 1.9 .
August 24, 2021
Feature
The following tools for creating embeddings to use with Vertex Matching Engine are available in Preview :
the Two Tower built-in algorithm
the Swivel pipeline template
August 02, 2021
Change
Vertex Pipelines is available in the following regions:
us-east1 (South Carolina)
europe-west2 (London)
asia-southeast1 (Singapore)
See all the locations where Vertex Pipelines is available .
July 28, 2021
Feature
You can use the Reduction Server algorithm ( Preview ) to increase throughput and reduce latency during distributed custom training.
July 27, 2021
Feature
The following features are generally available ( GA ):
Access Transparency for Vertex AI
Using a custom service account for custom training and prediction
Using VPC Service Controls with Vertex AI
Setting up VPC Network Peering with Vertex AI and using private IP for custom training (Using private IP for prediction and vector matching with Matching Engine remains in preview.)
July 20, 2021
Feature
Private endpoints for online prediction are now available in preview.
After you set up VPC Network Peering with Vertex AI , you can create private endpoints for low-latency online prediction within your private network.
Additionally, the documentation for VPC Network Peering with custom training has moved. The general instructions for setting up VPC Network Peering with Vertex AI are available at the original link, https://cloud.google.com/vertex-ai/docs/general/vpc-peering. The documentation for custom training is now available here: Using private IP with custom training .
July 19, 2021
Feature
You can now use an interactive shell to inspect your custom training container while it runs. The interactive shell can be helpful for monitoring and debugging training.
This feature is available in preview.
July 14, 2021
Feature
You can now use the gcloud beta ai custom-jobs create command to build a Docker image based on local training code, push the image to Container Registry, and create a CustomJob resource.
July 08, 2021
Feature
You can now containerize and run your training code locally by using the new gcloud beta ai custom-jobs local-run command. This feature is available in preview.
June 25, 2021
Feature
You can now use NVIDIA A100 GPUs and several accelerator-optimized (A2) machine types for training. You must use A100 GPUs and A2 machine types together. Learn about their pricing .
June 11, 2021
Feature
You can now use a pre-built container to serve predictions from TensorFlow 2.5 models .
Feature
You can now use a pre-built container to serve predictions from XGBoost 1.4 models .
May 18, 2021
Announcement
AI Platform (Unified) is now Vertex AI .
Feature
Vertex AI now supports forecasting with time series data for AutoML tabular models, in Preview . You can use forecasting to predict a series of numeric values that extend into the future.
Feature
Vertex AI has added support for custom model training, custom model batch prediction, custom model online prediction, and a limited number of other services in the following regions :
us-west1
us-east1
us-east4
northamerica-northeast1
europe-west2
europe-west1
asia-southeast1
asia-northeast1
australia-southeast1
asia-northeast3
Feature
Vertex Pipelines is now available in Preview . Vertex Pipelines helps you to automate, monitor, and govern your ML systems by orchestrating your ML workflow.
Feature
Vertex Matching Engine is now available in Preview . Vertex Matching Engine enables vector similarity search.
Feature
Vertex Model Monitoring is now available in Preview . Vertex Model Monitoring enables you to monitor model quality over time.
Feature
Vertex Feature Store is now available in Preview . Vertex Feature Store provides a centralized repository for organizing, storing, and serving ML features.
Feature
Vertex TensorBoard is now available in Preview . Vertex TensorBoard enables you to track, visualize, and compare ML experiments.
Feature
Vertex ML Metadata is now available in Preview . Vertex ML Metadata lets you record the metadata and artifacts produced by your ML system so you can analyze the performance of your ML system.
May 03, 2021
Feature
You can now use a pre-built container to serve predictions from XGBoost 1.3 models .
Feature
You can now use a pre-built container to serve predictions from scikit-learn 0.24 models .
Feature
You can now use a pre-built container to serve predictions from TensorFlow 2.4 models .
April 27, 2021
Feature
AI Platform Vizier is now available in preview. Vizier is a feature of AI Platform (Unified) that you can use to perform black-box optimization. You can use Vizier to tune hyperparameters or optimize any evaluable system.
April 15, 2021
Feature
The Python client library for AI Platform (Unified) is now called the
AI Platform (Unified) SDK. With the release of version 0.7
( Preview ), the AI Platform (Unified) SDK provides two levels of support.
The high-level aiplatform library
is designed to simplify common data
science workflows by using wrapper classes and opinionated defaults. The
lower-level aiplatform.gapic library remains
available for those times when you need more flexibility or control.
Learn more .
March 31, 2021
Announcement
AI Platform (Unified) is now available in General Availability (GA).
Change
AI Platform (Unified) has added support for the following regions for custom model training, as well as batch and online prediction for custom-trained models:
us-west1 (Oregon)
us-east1 (South Carolina)
us-east4 (N. Virginia)
northamerica-northeast1 (Montreal)
europe-west2 (London)
europe-west1 (Belgium)
asia-southeast1 (Singapore)
asia-northeast1 (Tokyo)
australia-southeast1 (Sydney)
asia-northeast3 (Seoul)
March 15, 2021
Feature
You can now use a pre-built container to perform custom training with PyTorch 1.7 .
March 02, 2021
Change
CMEK compliance using the client libraries
You can now use the client libraries to create resources with a customer-managed encryption key (CMEK).
For more information on creating a resource with an encryption key using the client libraries, see Using customer-managed encryption keys (CMEK) .
March 01, 2021
Change
The client library for Java now includes enhancements to improve usage of training and prediction features. The client library includes additional types and utility functions for sending training requests, sending prediction requests, and reading prediction results.
To use these enhancements, you must install the latest version of the client library .
February 25, 2021
Feature
AI Platform (Unified) now supports Access Transparency in beta. Google Cloud organizations with certain support packages can use this feature. Learn more about using Access Transparency with AI Platform (Unified) .
Change
The client libraries for Node.js and Python now include enhancements to improve usage of training and prediction features. These client libraries include additional types and utility functions for sending training requests, sending prediction requests, and reading prediction results.
To use these enhancements, you must install the latest version of the
client libraries .
Change
The predict and explain method calls no longer require the use of a different service endpoint (for example, https://us-central1-prediction-aiplatform.googleapis.com ). These methods are now available on the same endpoint as all other methods.
Feature
In addition to Docker images hosted on Container Registry , you can now use Docker images hosted on Artifact Registry and Docker Hub for custom container training on AI Platform .
Change
The Docker images for pre-built training containers and pre-built prediction containers are now available on Artifact Registry.
Feature
You can now use a pre-built container to serve predictions from XGBoost 1.2 models .
Feature
You can now use a pre-built container to perform custom training with TensorFlow 2.4 .
Feature
You can now use a pre-built container to serve predictions from TensorFlow 2.3 models .
February 01, 2021
Feature
You can now use a pre-built container to perform custom training with PyTorch 1.6 .
January 19, 2021
Feature
Preview : Select AI Platform (Unified) resources can now be configured to use Customer-managed encryption keys (CMEK) .
Currently you can only create resources with a CMEK key in the UI; this functionality is not currently available using the client libraries.
January 11, 2021
Breaking
The default boot disk type for virtual machine instances used for custom training has changed from pd-standard to pd-ssd . Learn more about disk types for custom training and read about pricing for different disk types .
If you previously used the default disk type for custom training and want to continue training with the same disk type, make sure to explicitly specify the pd-standard boot disk type when you perform custom training.
January 06, 2021
Feature
You can now use a pre-built container to perform custom training with TensorFlow 2.3 .
December 17, 2020
Feature
AI Platform (Unified) now stores and
processes your data only in the region you specify for most features.
Learn more .
November 16, 2020
Feature
Preview release
AI Platform (Unified) is now available in Preview .
For more information, see the product documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
