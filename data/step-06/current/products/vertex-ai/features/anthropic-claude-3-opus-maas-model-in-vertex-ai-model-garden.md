---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.062Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Anthropic Claude 3 Opus MaaS model in Vertex AI Model Garden"
feature_slug: "anthropic-claude-3-opus-maas-model-in-vertex-ai-model-garden"
latest_feature_date: "2025-06-30"
deprecation_date: "2025-06-30"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/start/introduction-unified-platform"
  - "https://docs.cloud.google.com/vertex-ai/docs/generative-ai/start/quickstarts/quickstart"
  - "https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-bq-prediction/train-and-deploy-model"
keywords:
  - "anthropic"
  - "claude"
  - "opus"
  - "maas"
  - "model"
  - "vertex"
  - "ai"
  - "garden"
---

# Anthropic Claude 3 Opus MaaS model in Vertex AI Model Garden

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Anthropic's Claude 3 Opus is offered as a Model as a Service (MaaS) model in Vertex AI Model Garden; deprecated on 2025-06-30.

## Extended Definition

Anthropic's Claude 3 Opus is offered as a Model as a Service (MaaS) model in Vertex AI Model Garden; deprecated on 2025-06-30.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/start/introduction-unified-platform](https://docs.cloud.google.com/vertex-ai/docs/start/introduction-unified-platform)
- [https://docs.cloud.google.com/vertex-ai/docs/generative-ai/start/quickstarts/quickstart](https://docs.cloud.google.com/vertex-ai/docs/generative-ai/start/quickstarts/quickstart)
- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-bq-prediction/train-and-deploy-model](https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-bq-prediction/train-and-deploy-model)

## Supporting Pages

### Overview of Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/start/introduction-unified-platform](https://docs.cloud.google.com/vertex-ai/docs/start/introduction-unified-platform)
- Source ID: `site-docs-root`
- Final score: 103
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Models : Vertex AI Model Garden is a centralized hub containing over 200 enterprise-ready models from Google, leading third-party partners (such as Anthropic's Claude), and popular open-source options (such as Llama).
- Partner and open source models : Access a curated selection of leading models such as Anthropic's Claude, Mistral AI models, and Llama with superior price-performance.
- Generative AI capabilities Vertex AI brings together a comprehensive toolset with Google's advanced foundation models tools that you can use to build production-ready generative AI agents and applications, as follows: Prompting : Start with prompt design in Vertex AI Studio .
- It provides access to the Model Garden, featuring a curated catalog of over 200 models—including Google's foundation models (such as Gemini) and a comprehensive selection of partner and open models—along with the underlying TPU/GPU infrastructure.

### "Quickstart: Send text prompts to Gemini using Vertex AI Studio \_|\_ Generative\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/generative-ai/start/quickstarts/quickstart](https://docs.cloud.google.com/vertex-ai/docs/generative-ai/start/quickstarts/quickstart)
- Source ID: `site-docs-reference-3`
- Final score: 76
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Vertex AI Studio supports certain third-party models that are offered on Vertex AI as models as a service (MaaS) , such as Anthropic Claude models and Meta's Llama models.
- Enable the API Sample prompts in Vertex AI Studio A prompt is a natural language request submitted to a language model that generates a response.
- You can use Vertex AI Studio to design, test, and manage prompts for Google's Gemini large language models (LLMs) and third-party models.
- Test the Gemini flash model using a summarization text prompt Send a summarization text prompt to the Gemini API in Vertex AI.

### Train and deploy your model \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-bq-prediction/train-and-deploy-model](https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-bq-prediction/train-and-deploy-model)
- Source ID: `site-docs-reference-2`
- Final score: 69
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CustomTrainingJob ( display name = JOB NAME , script path = "task.py" , container uri = "us-docker.pkg.dev/vertex-ai/training/tf-cpu.2-8:latest" , requirements =[ "google-cloud-bigquery>=2.20.0" , "db-dtypes" , "protobuf<3.20.0" ], model serving container image uri = "us-docker.pkg.dev/vertex-ai/prediction/tf2-cpu.2-8:latest" , ) Create and train your model In the previous step you created a CustomTrainingJob named job .
- Home Documentation AI and ML Vertex AI Send feedback Train and deploy your model Stay organized with collections Save and categorize content based on your preferences.
- In previous steps in this tutorial, you prepared your data for training and created a script that Vertex AI uses to train your model.
- Vertex AI uses the training pipeline and the code in your Python training script to train and create your model.

