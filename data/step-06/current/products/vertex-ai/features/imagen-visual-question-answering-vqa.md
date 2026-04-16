---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.121Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Imagen Visual Question Answering (VQA)"
feature_slug: "imagen-visual-question-answering-vqa"
latest_feature_date: "2023-07-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/generative-ai/image/usage-guidelines"
  - "https://docs.cloud.google.com/vertex-ai/docs/vizier/vizier-notebook-tutorials"
  - "https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks"
keywords:
  - "imagen"
  - "visual"
  - "question"
  - "answering"
  - "vqa"
  - "vertex"
  - "ai"
  - "announced"
---

# Imagen Visual Question Answering (VQA)

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Imagen on Vertex AI announced general availability of Visual Question Answering (VQA).

## Extended Definition

Imagen on Vertex AI announced general availability of Visual Question Answering (VQA).

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/generative-ai/image/usage-guidelines](https://docs.cloud.google.com/vertex-ai/docs/generative-ai/image/usage-guidelines)
- [https://docs.cloud.google.com/vertex-ai/docs/vizier/vizier-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/vizier/vizier-notebook-tutorials)
- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks)

## Supporting Pages

### "Responsible AI and usage guidelines for Imagen \_|\_ Generative AI on Vertex\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/generative-ai/image/usage-guidelines](https://docs.cloud.google.com/vertex-ai/docs/generative-ai/image/usage-guidelines)
- Source ID: `site-docs-reference-3`
- Final score: 113
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Visual Question Answering (VQA) limitations Overconfidence and uncertainty : VQA models may sometimes provide answers with unwarranted confidence, even when the correct answer is uncertain or ambiguous.
- These code to category mappings are as follows: Error code Safety category Description Content filtered: prompt input or image output 58061214 17301594 Child Detects child content where it isn't allowed due to the API request settings or allowlisting. input (prompt): 58061214 output (image): 17301594 29310472 15236754 Celebrity Detects a photorealistic representation of a celebrity in the request. input (prompt): 29310472 output (image): 15236754 62263041 Dangerous content Detects content that's potentially dangerous in nature. input (prompt) 57734940 22137204 Hate Detects hate-related topics or content. input (prompt): 57734940 output (image): 22137204 74803281 29578790 42876398 Other Detects other miscellaneous safety issues with the request. input (prompt): 42876398 output (image): 29578790, 74803281 39322892 People/Face Detects a person or face when it isn't allowed due to the request safety settings. output (image) 92201652 Personal information Detects Personally Identifiable Information (PII) in the text, such as the mentioning a credit card number, home addresses, or other such information. input (prompt) 89371032 49114662 72817394 Prohibited content Detects the request of prohibited content in the request. input (prompt): 89371032 output (image): 49114662, 72817394 90789179 63429089 43188360 Sexual Detects content that's sexual in nature. input (prompt): 90789179 output (image): 63429089, 43188360 35561574 35561575 Third-party content Guardrails related to third-party content. input (prompt) output (image) 78610348 Toxic Detects toxic topics or content in the text. input (prompt) 61493863 56562880 Violence Detects violence-related content from the image or text. input (prompt): 61493863 output (image): 56562880 32635315 Vulgar Detects vulgar topics or content from the text. input (prompt) 64151117 Celebrity or child Detects photorealistic respresentation of a celebrity or of a child that violates Google's safety policies. input (prompt) output (image) Limitations The following limits apply to different tasks: Image generation and editing limitations Bias amplification : While Imagen on Vertex AI can generate high-quality images, there may be potential biases in the generated content.
- Safety filters Text prompts provided as inputs and images (generated or uploaded) through Imagen on Vertex AI are assessed against a list of safety filters, which include 'harmful categories' (for example, violence , sexual , derogatory , and toxic ).
- Read our blog, A shared agenda for responsible AI progress Give feedback on Imagen on Vertex AI If you receive an output or response that is inaccurate or that you feel is unsafe, you can let us know by submitting feedback .

### Vertex AI Vizier notebook tutorials \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/vizier/vizier-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/vizier/vizier-notebook-tutorials)
- Source ID: `site-docs-root`
- Final score: 71
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Vector Search Vertex AI embeddings for text Using Vertex AI Vector Search and Vertex AI embeddings for text for StackOverflow Questions .
- Execute the KFP pipeline using Vertex AI Pipelines Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Pipelines Metrics visualization and run comparison using the KFP SDK .
- Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Vector Search Using Vertex AI Vector Search for StackOverflow Questions .
- Visualize the results in Vertex AI TensorBoard's HParams dashboard.

### Custom training notebook tutorials \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks)
- Source ID: `site-docs-reference-2`
- Final score: 63
- Re-rank relevance: N/A

Evidence snippets:
- Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Vector Search Vertex AI embeddings for text Using Vertex AI Vector Search and Vertex AI embeddings for text for StackOverflow Questions .
- Execute the KFP pipeline using Vertex AI Pipelines Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Pipelines Metrics visualization and run comparison using the KFP SDK .
- Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Vector Search Using Vertex AI Vector Search for StackOverflow Questions .
- Visualize the results in Vertex AI TensorBoard's HParams dashboard.

