---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.109Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Imagen style model tuning"
feature_slug: "imagen-style-model-tuning"
latest_feature_date: "2023-08-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials"
  - "https://docs.cloud.google.com/vertex-ai/docs/generative-ai/image/usage-guidelines"
  - "https://docs.cloud.google.com/vertex-ai/docs/vizier/vizier-notebook-tutorials"
keywords:
  - "imagen"
  - "style"
  - "model"
  - "tuning"
  - "vertex"
  - "ai"
  - "added"
  - "generally"
---

# Imagen style model tuning

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Imagen on Vertex AI added generally available support for style model tuning.

## Extended Definition

Imagen on Vertex AI added generally available support for style model tuning.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials)
- [https://docs.cloud.google.com/vertex-ai/docs/generative-ai/image/usage-guidelines](https://docs.cloud.google.com/vertex-ai/docs/generative-ai/image/usage-guidelines)
- [https://docs.cloud.google.com/vertex-ai/docs/vizier/vizier-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/vizier/vizier-notebook-tutorials)

## Supporting Pages

### Vertex AI model evaluation notebook tutorials \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials)
- Source ID: `site-docs-reference-2`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- Colab Colab Enterprise GitHub Vertex AI Workbench Custom training Training, tuning and deploying a PyTorch text sentiment classification model on Vertex AI .
- Tutorial steps Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Hyperparameter Tuning Run hyperparameter tuning for a TensorFlow model .
- Colab Colab Enterprise GitHub Vertex AI Workbench Tune text models by using RLHF tuning Vertex AI LLM Reinforcement Learning from Human Feedback .
- Tutorial steps Colab Colab Enterprise GitHub Vertex AI Workbench Tune text models by using supervised tuning Vertex AI Tuning a PEFT model .

### "Responsible AI and usage guidelines for Imagen \_|\_ Generative AI on Vertex\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/generative-ai/image/usage-guidelines](https://docs.cloud.google.com/vertex-ai/docs/generative-ai/image/usage-guidelines)
- Source ID: `site-docs-reference-3`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- View Imagen for Generation model card View Imagen for Editing and Customization model card Imagen usage guidelines Read the following general product attributes and legal considerations before you use Imagen on Vertex AI.
- When Imagen on Vertex AI is integrated into a customer's unique use case and context, additional responsible AI considerations and model limitations may need to be considered.
- These code to category mappings are as follows: Error code Safety category Description Content filtered: prompt input or image output 58061214 17301594 Child Detects child content where it isn't allowed due to the API request settings or allowlisting. input (prompt): 58061214 output (image): 17301594 29310472 15236754 Celebrity Detects a photorealistic representation of a celebrity in the request. input (prompt): 29310472 output (image): 15236754 62263041 Dangerous content Detects content that's potentially dangerous in nature. input (prompt) 57734940 22137204 Hate Detects hate-related topics or content. input (prompt): 57734940 output (image): 22137204 74803281 29578790 42876398 Other Detects other miscellaneous safety issues with the request. input (prompt): 42876398 output (image): 29578790, 74803281 39322892 People/Face Detects a person or face when it isn't allowed due to the request safety settings. output (image) 92201652 Personal information Detects Personally Identifiable Information (PII) in the text, such as the mentioning a credit card number, home addresses, or other such information. input (prompt) 89371032 49114662 72817394 Prohibited content Detects the request of prohibited content in the request. input (prompt): 89371032 output (image): 49114662, 72817394 90789179 63429089 43188360 Sexual Detects content that's sexual in nature. input (prompt): 90789179 output (image): 63429089, 43188360 35561574 35561575 Third-party content Guardrails related to third-party content. input (prompt) output (image) 78610348 Toxic Detects toxic topics or content in the text. input (prompt) 61493863 56562880 Violence Detects violence-related content from the image or text. input (prompt): 61493863 output (image): 56562880 32635315 Vulgar Detects vulgar topics or content from the text. input (prompt) 64151117 Celebrity or child Detects photorealistic respresentation of a celebrity or of a child that violates Google's safety policies. input (prompt) output (image) Limitations The following limits apply to different tasks: Image generation and editing limitations Bias amplification : While Imagen on Vertex AI can generate high-quality images, there may be potential biases in the generated content.
- Safety filters Text prompts provided as inputs and images (generated or uploaded) through Imagen on Vertex AI are assessed against a list of safety filters, which include 'harmful categories' (for example, violence , sexual , derogatory , and toxic ).

### Vertex AI Vizier notebook tutorials \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/vizier/vizier-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/vizier/vizier-notebook-tutorials)
- Source ID: `site-docs-root`
- Final score: 83
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Colab Colab Enterprise GitHub Vertex AI Workbench Custom training Training, tuning and deploying a PyTorch text sentiment classification model on Vertex AI .
- Tutorial steps Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Hyperparameter Tuning Run hyperparameter tuning for a TensorFlow model .
- Colab Colab Enterprise GitHub Vertex AI Workbench Tune text models by using RLHF tuning Vertex AI LLM Reinforcement Learning from Human Feedback .
- Tutorial steps Colab Colab Enterprise GitHub Vertex AI Workbench Tune text models by using supervised tuning Vertex AI Tuning a PEFT model .

