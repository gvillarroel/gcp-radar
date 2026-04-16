---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.053Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "SEA-LION V4 models in Vertex AI Model Garden"
feature_slug: "sea-lion-v4-models-in-vertex-ai-model-garden"
latest_feature_date: "2025-09-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/start/introduction-unified-platform"
  - "https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials"
  - "https://docs.cloud.google.com/vertex-ai/docs/reference/rest"
keywords:
  - "sea"
  - "lion"
  - "v4"
  - "models"
  - "vertex"
  - "ai"
  - "model"
  - "garden"
---

# SEA-LION V4 models in Vertex AI Model Garden

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Vertex AI now makes AI Singapore SEA-LION V4 open models available in Model Garden, optimized for Southeast Asian languages with enhanced training efficiency and accuracy from Vertex AI training clusters.

## Extended Definition

Vertex AI now makes AI Singapore SEA-LION V4 open models available in Model Garden, optimized for Southeast Asian languages with enhanced training efficiency and accuracy from Vertex AI training clusters.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/start/introduction-unified-platform](https://docs.cloud.google.com/vertex-ai/docs/start/introduction-unified-platform)
- [https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials)
- [https://docs.cloud.google.com/vertex-ai/docs/reference/rest](https://docs.cloud.google.com/vertex-ai/docs/reference/rest)

## Supporting Pages

### Vertex AI API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/reference/rest](https://docs.cloud.google.com/vertex-ai/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- REST Resource: v1beta1.projects.locations Methods askContexts POST /v1beta1/{parent}:askContexts Agentic Retrieval Ask API for RAG. asyncRetrieveContexts POST /v1beta1/{parent}:asyncRetrieveContexts Asynchronous API to retrieves relevant contexts for a query. augmentPrompt POST /v1beta1/{parent}:augmentPrompt Given an input prompt, it returns augmented prompt from vertex rag store to guide LLM towards generating grounded responses. corroborateContent POST /v1beta1/{parent}:corroborateContent Given an input text, it returns a score that evaluates the factuality of the text. deploy POST /v1beta1/{destination}:deploy Deploys a model to a new endpoint. deployPublisherModel (deprecated) POST /v1beta1/{destination}:deployPublisherModel Deploys publisher models. evaluateDataset POST /v1beta1/{location}:evaluateDataset Evaluates a dataset based on a set of given metrics. evaluateInstances POST /v1beta1/{location}:evaluateInstances Evaluates instances based on a given metric. generateSyntheticData POST /v1beta1/{location}:generateSyntheticData Generates synthetic (artificial) data based on a description getRagEngineConfig GET /v1beta1/{name} Gets a RagEngineConfig. recommendSpec POST /v1beta1/{parent}:recommendSpec Gets a Model's spec recommendations. retrieveContexts POST /v1beta1/{parent}:retrieveContexts Retrieves relevant contexts for a query. updateRagEngineConfig PATCH /v1beta1/{ragEngineConfig.name} Updates a RagEngineConfig.
- REST Resource: v1beta1.projects.locations.models Methods copy POST /v1beta1/{parent}/models:copy Copies an already existing Vertex AI Model into the specified Location. delete DELETE /v1beta1/{name} Deletes a Model. deleteVersion DELETE /v1beta1/{name}:deleteVersion Deletes a Model version. export POST /v1beta1/{name}:export Exports a trained, exportable Model to a location specified by the user. get GET /v1beta1/{name} Gets a Model. getIamPolicy POST /v1beta1/{resource}:getIamPolicy Gets the access control policy for a resource. list GET /v1beta1/{parent}/models Lists Models in a Location. listCheckpoints GET /v1beta1/{name}:listCheckpoints Lists checkpoints of the specified model version. listVersions GET /v1beta1/{name}:listVersions Lists versions of the specified model. mergeVersionAliases POST /v1beta1/{name}:mergeVersionAliases Merges a set of aliases for a Model version. patch PATCH /v1beta1/{model.name} Updates a Model. setIamPolicy POST /v1beta1/{resource}:setIamPolicy Sets the access control policy on the specified resource. testIamPermissions POST /v1beta1/{resource}:testIamPermissions Returns permissions that a caller has on the specified resource. updateExplanationDataset POST /v1beta1/{model}:updateExplanationDataset Incrementally update the dataset used for an examples model. upload POST /v1beta1/{parent}/models:upload Uploads a Model artifact into Vertex AI.
- REST Resource: v1.projects.locations.models Methods copy POST /v1/{parent}/models:copy Copies an already existing Vertex AI Model into the specified Location. delete DELETE /v1/{name} Deletes a Model. deleteVersion DELETE /v1/{name}:deleteVersion Deletes a Model version. export POST /v1/{name}:export Exports a trained, exportable Model to a location specified by the user. get GET /v1/{name} Gets a Model. getIamPolicy POST /v1/{resource}:getIamPolicy Gets the access control policy for a resource. list GET /v1/{parent}/models Lists Models in a Location. listCheckpoints GET /v1/{name}:listCheckpoints Lists checkpoints of the specified model version. listVersions GET /v1/{name}:listVersions Lists versions of the specified model. mergeVersionAliases POST /v1/{name}:mergeVersionAliases Merges a set of aliases for a Model version. patch PATCH /v1/{model.name} Updates a Model. setIamPolicy POST /v1/{resource}:setIamPolicy Sets the access control policy on the specified resource. testIamPermissions POST /v1/{resource}:testIamPermissions Returns permissions that a caller has on the specified resource. updateExplanationDataset POST /v1/{model}:updateExplanationDataset Incrementally update the dataset used for an examples model. upload POST /v1/{parent}/models:upload Uploads a Model artifact into Vertex AI.
- REST Resource: v1beta1.projects.locations.publishers.models Methods countTokens POST /v1beta1/{endpoint}:countTokens Perform a token counting. embedContent POST /v1beta1/{model}:embedContent Embed content with multimodal inputs. export POST /v1beta1/{parent}/{name}:export Exports a publisher model to a user provided Google Cloud Storage bucket. fetchPublisherModelConfig GET /v1beta1/{name}:fetchPublisherModelConfig Fetches the configs of publisher models. getIamPolicy POST /v1beta1/{resource}:getIamPolicy Gets the access control policy for a resource. predict POST /v1beta1/{endpoint}:predict Perform an online prediction. predictLongRunning POST /v1beta1/{endpoint}:predictLongRunning rawPredict POST /v1beta1/{endpoint}:rawPredict Perform an online prediction with an arbitrary HTTP payload. serverStreamingPredict POST /v1beta1/{endpoint}:serverStreamingPredict Perform a server-side streaming online prediction request for Vertex LLM streaming. setPublisherModelConfig POST /v1beta1/{name}:setPublisherModelConfig Sets (creates or updates) configs of publisher models. streamRawPredict POST /v1beta1/{endpoint}:streamRawPredict Perform a streaming online prediction with an arbitrary HTTP payload.

### Overview of Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/start/introduction-unified-platform](https://docs.cloud.google.com/vertex-ai/docs/start/introduction-unified-platform)
- Source ID: `site-docs-root`
- Final score: 94
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Models : Vertex AI Model Garden is a centralized hub containing over 200 enterprise-ready models from Google, leading third-party partners (such as Anthropic's Claude), and popular open-source options (such as Llama).
- Generative AI capabilities Vertex AI brings together a comprehensive toolset with Google's advanced foundation models tools that you can use to build production-ready generative AI agents and applications, as follows: Prompting : Start with prompt design in Vertex AI Studio .
- It provides access to the Model Garden, featuring a curated catalog of over 200 models—including Google's foundation models (such as Gemini) and a comprehensive selection of partner and open models—along with the underlying TPU/GPU infrastructure.
- This ranges from Grounding with your enterprise data or Google Search to reduce hallucinations, to using Vertex AI Training for Supervised Fine-Tuning (SFT) or Parameter-Efficient Fine-Tuning (PEFT) of models like Gemini.

### Vertex AI model evaluation notebook tutorials \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials)
- Source ID: `site-docs-reference-2`
- Final score: 93
- Re-rank relevance: N/A

Evidence snippets:
- Tutorial steps Create utility functions to download data and prepare csv files for creating Vertex AI managed dataset Download Data Prepare CSV Files for creating managed dataset Create custom training Python package Create TensorFlow Serving container Run custom Python package training with managed text dataset Deploy a model and create an endpoint on Vertex AI Predict on the endpoint Create a Batch Prediction job on the model Colab Colab Enterprise GitHub Vertex AI Workbench Tabular Workflow for TabNet Vertex AI Explanations with TabNet models .
- Tutorial steps Download a pretrained image model from PyTorch Create a custom model handler Package model artifacts in a model archive file Upload model for deployment Deploy model for prediction Make online predictions Make batch predictions Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Inference Train and deploy PyTorch models with prebuilt containers on Vertex AI .
- Tutorial steps Execute module for preprocessing data Create a dataset artifact Log parameters Execute module for training the model Log parameters Create model artifact Assign tracking lineage to dataset, model and parameters Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Experiments Track parameters and metrics for locally trained models .
- Learn how to create several Prophet models using a training Vertex AI Pipeline from Google Cloud Pipeline Components , and then do a batch prediction using the corresponding prediction pipeline.

