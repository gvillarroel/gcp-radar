---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.087Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Lama Large Mask Inpainting in Model Garden"
feature_slug: "lama-large-mask-inpainting-in-model-garden"
latest_feature_date: "2024-02-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint"
  - "https://docs.cloud.google.com/vertex-ai/docs/start/introduction-unified-platform"
  - "https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials"
keywords:
  - "lama"
  - "large"
  - "mask"
  - "inpainting"
  - "model"
  - "garden"
  - "was"
  - "added"
---

# Lama Large Mask Inpainting in Model Garden

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Lama with large-mask inpainting was added to Model Garden for high-receptive-field image inpainting with resolution robustness.

## Extended Definition

Lama with large-mask inpainting was added to Model Garden for high-receptive-field image inpainting with resolution robustness.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint)
- [https://docs.cloud.google.com/vertex-ai/docs/start/introduction-unified-platform](https://docs.cloud.google.com/vertex-ai/docs/start/introduction-unified-platform)
- [https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials)

## Supporting Pages

### Vertex AI model evaluation notebook tutorials \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials)
- Source ID: `site-docs-reference-2`
- Final score: 93
- Re-rank relevance: N/A

Evidence snippets:
- Learn how to provide text input to Large Language Models available on Vertex AI to test, tune, and deploy generative AI language models.
- Tutorial steps Colab GitHub Vertex AI Workbench PaLM API Using the Vertex AI SDK with Large Language Models .
- In this tutorial, you use Vertex AI to get predictions from an RLHF-tuned large-language model.
- Colab Enterprise GitHub Vertex AI Workbench generative ai Distill a large language model .

### Overview of Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/start/introduction-unified-platform](https://docs.cloud.google.com/vertex-ai/docs/start/introduction-unified-platform)
- Source ID: `site-docs-root`
- Final score: 92
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Models : Vertex AI Model Garden is a centralized hub containing over 200 enterprise-ready models from Google, leading third-party partners (such as Anthropic's Claude), and popular open-source options (such as Llama).
- It provides access to the Model Garden, featuring a curated catalog of over 200 models—including Google's foundation models (such as Gemini) and a comprehensive selection of partner and open models—along with the underlying TPU/GPU infrastructure.
- Partner and open source models : Access a curated selection of leading models such as Anthropic's Claude, Mistral AI models, and Llama with superior price-performance.
- Generative AI capabilities Vertex AI brings together a comprehensive toolset with Google's advanced foundation models tools that you can use to build production-ready generative AI agents and applications, as follows: Prompting : Start with prompt design in Vertex AI Studio .

### "MCP Tools Reference: aiplatform.googleapis.com \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint)
- Source ID: `site-api-reference-2`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- Required except for Large Model Deploy use cases. prediction resources can be only one of the following: dedicatedResources object ( DedicatedResources ) A description of resources that are dedicated to the DeployedModel, and that need a higher degree of manual configuration. automaticResources object ( AutomaticResources ) A description of resources that to large degree are decided by Vertex AI, and require only a modest additional configuration. sharedResources string The resource name of the shared DeploymentResourcePool to deploy on.
- Runtime status of the deployed model. systemLabels map (key: string, value: string) System labels to apply to Model Garden deployments.
- If true, in addition to the original large model logs, logs will be converted in OTel schema format, and saved in otel log column.
- The current default version is "v1". enableOtelLogging boolean This field is used for large models.

