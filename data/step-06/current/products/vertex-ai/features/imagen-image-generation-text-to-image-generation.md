---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.120Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Imagen image generation (text-to-image generation)"
feature_slug: "imagen-image-generation-text-to-image-generation"
latest_feature_date: "2023-07-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/generative-ai/image/usage-guidelines"
  - "https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials"
  - "https://docs.cloud.google.com/vertex-ai/docs/ml-metadata/ml-metadata-notebook-tutorials"
keywords:
  - "imagen"
  - "image"
  - "generation"
  - "text"
  - "vertex"
  - "ai"
  - "announced"
  - "availability"
---

# Imagen image generation (text-to-image generation)

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Imagen on Vertex AI announced general availability of text-to-image generation.

## Extended Definition

Imagen on Vertex AI announced general availability of text-to-image generation.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/generative-ai/image/usage-guidelines](https://docs.cloud.google.com/vertex-ai/docs/generative-ai/image/usage-guidelines)
- [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials)
- [https://docs.cloud.google.com/vertex-ai/docs/ml-metadata/ml-metadata-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/ml-metadata/ml-metadata-notebook-tutorials)

## Supporting Pages

### "Responsible AI and usage guidelines for Imagen \_|\_ Generative AI on Vertex\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/generative-ai/image/usage-guidelines](https://docs.cloud.google.com/vertex-ai/docs/generative-ai/image/usage-guidelines)
- Source ID: `site-docs-reference-3`
- Final score: 170
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- These code to category mappings are as follows: Error code Safety category Description Content filtered: prompt input or image output 58061214 17301594 Child Detects child content where it isn't allowed due to the API request settings or allowlisting. input (prompt): 58061214 output (image): 17301594 29310472 15236754 Celebrity Detects a photorealistic representation of a celebrity in the request. input (prompt): 29310472 output (image): 15236754 62263041 Dangerous content Detects content that's potentially dangerous in nature. input (prompt) 57734940 22137204 Hate Detects hate-related topics or content. input (prompt): 57734940 output (image): 22137204 74803281 29578790 42876398 Other Detects other miscellaneous safety issues with the request. input (prompt): 42876398 output (image): 29578790, 74803281 39322892 People/Face Detects a person or face when it isn't allowed due to the request safety settings. output (image) 92201652 Personal information Detects Personally Identifiable Information (PII) in the text, such as the mentioning a credit card number, home addresses, or other such information. input (prompt) 89371032 49114662 72817394 Prohibited content Detects the request of prohibited content in the request. input (prompt): 89371032 output (image): 49114662, 72817394 90789179 63429089 43188360 Sexual Detects content that's sexual in nature. input (prompt): 90789179 output (image): 63429089, 43188360 35561574 35561575 Third-party content Guardrails related to third-party content. input (prompt) output (image) 78610348 Toxic Detects toxic topics or content in the text. input (prompt) 61493863 56562880 Violence Detects violence-related content from the image or text. input (prompt): 61493863 output (image): 56562880 32635315 Vulgar Detects vulgar topics or content from the text. input (prompt) 64151117 Celebrity or child Detects photorealistic respresentation of a celebrity or of a child that violates Google's safety policies. input (prompt) output (image) Limitations The following limits apply to different tasks: Image generation and editing limitations Bias amplification : While Imagen on Vertex AI can generate high-quality images, there may be potential biases in the generated content.
- Safety filters Text prompts provided as inputs and images (generated or uploaded) through Imagen on Vertex AI are assessed against a list of safety filters, which include 'harmful categories' (for example, violence , sexual , derogatory , and toxic ).
- View Imagen for Generation model card View Imagen for Editing and Customization model card Imagen usage guidelines Read the following general product attributes and legal considerations before you use Imagen on Vertex AI.
- Text addition supported on certain model versions: Imagen does not support adding text to images (uploaded or generated) using a text prompt when using the imagegeneration@004 or lower model versions.

### "Vertex Explainable AI notebook tutorials \_|\_ Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials)
- Source ID: `site-docs-reference-2`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- List of notebooks Select a service AutoML BigQuery BigQuery ML Custom training Image Ray on Vertex AI Tabular Text Vector Search Vertex AI Experiments Vertex AI Feature Store Vertex AI Inference Vertex AI model evaluation Vertex AI Model Monitoring Vertex AI Model Registry Vertex AI Pipelines Vertex AI TensorBoard Vertex AI Vizier Vertex AI Workbench Vertex Explainable AI Vertex ML Metadata Services Description Open in Classification for tabular data AutoML tabular training and prediction .
- Tutorial steps Train an image model Export the image model as an edge model Train a tabular model Export the tabular model as a cloud model Train a text model Colab Colab Enterprise GitHub Vertex AI Workbench Hierarchical forecasting for tabular data Vertex AI AutoML training hierarchical forecasting for batch prediction .
- Tutorial steps Create utility functions to download data and prepare csv files for creating Vertex AI managed dataset Download Data Prepare CSV Files for creating managed dataset Create custom training Python package Create TensorFlow Serving container Run custom Python package training with managed text dataset Deploy a model and create an endpoint on Vertex AI Predict on the endpoint Create a Batch Prediction job on the model Colab Colab Enterprise GitHub Vertex AI Workbench Tabular Workflow for TabNet Vertex AI Explanations with TabNet models .
- Tutorial steps Create custom Ray on Vertex AI container image Create a Ray cluster on Vertex AI using custom container image Run Spark interactively on the cluster using RayDP Run Spark application on cluster via Ray Job API Read files from Google Cloud Storage in Spark application Pandas UDF in Spark application on Ray on Vertex AI Delete the Ray cluster on Vertex AI Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Training Vertex AI Reduction Server PyTorch distributed training with Vertex AI Reduction Server .

### "Vertex ML Metadata notebook tutorials \_|\_ Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/ml-metadata/ml-metadata-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/ml-metadata/ml-metadata-notebook-tutorials)
- Source ID: `site-docs-reference-2`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- List of notebooks Select a service AutoML BigQuery BigQuery ML Custom training Image Ray on Vertex AI Tabular Text Vector Search Vertex AI Experiments Vertex AI Feature Store Vertex AI Inference Vertex AI model evaluation Vertex AI Model Monitoring Vertex AI Model Registry Vertex AI Pipelines Vertex AI TensorBoard Vertex AI Vizier Vertex AI Workbench Vertex Explainable AI Vertex ML Metadata Services Description Open in Classification for tabular data AutoML tabular training and prediction .
- Tutorial steps Train an image model Export the image model as an edge model Train a tabular model Export the tabular model as a cloud model Train a text model Colab Colab Enterprise GitHub Vertex AI Workbench Hierarchical forecasting for tabular data Vertex AI AutoML training hierarchical forecasting for batch prediction .
- Tutorial steps Create utility functions to download data and prepare csv files for creating Vertex AI managed dataset Download Data Prepare CSV Files for creating managed dataset Create custom training Python package Create TensorFlow Serving container Run custom Python package training with managed text dataset Deploy a model and create an endpoint on Vertex AI Predict on the endpoint Create a Batch Prediction job on the model Colab Colab Enterprise GitHub Vertex AI Workbench Tabular Workflow for TabNet Vertex AI Explanations with TabNet models .
- Tutorial steps Create custom Ray on Vertex AI container image Create a Ray cluster on Vertex AI using custom container image Run Spark interactively on the cluster using RayDP Run Spark application on cluster via Ray Job API Read files from Google Cloud Storage in Spark application Pandas UDF in Spark application on Ray on Vertex AI Delete the Ray cluster on Vertex AI Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Training Vertex AI Reduction Server PyTorch distributed training with Vertex AI Reduction Server .

