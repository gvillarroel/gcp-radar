---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.159Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Vertex AI Model Evaluation"
feature_slug: "vertex-ai-model-evaluation"
latest_feature_date: "2022-10-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials"
  - "https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-evaluation-component"
  - "https://docs.cloud.google.com/vertex-ai/docs/evaluation/introduction"
keywords:
  - "vertex"
  - "ai"
  - "model"
  - "evaluation"
  - "now"
  - "offers"
  - "preview"
  - "providing"
---

# Vertex AI Model Evaluation

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Vertex AI now offers model evaluation in Preview, providing metrics such as precision and recall to assess model performance.

## Extended Definition

Vertex AI now offers model evaluation in Preview, providing metrics such as precision and recall to assess model performance.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials)
- [https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-evaluation-component](https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-evaluation-component)
- [https://docs.cloud.google.com/vertex-ai/docs/evaluation/introduction](https://docs.cloud.google.com/vertex-ai/docs/evaluation/introduction)

## Supporting Pages

### Vertex AI model evaluation notebook tutorials \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials)
- Source ID: `site-docs-reference-2`
- Final score: 226
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- List of notebooks Select a service AutoML BigQuery BigQuery ML Custom training Image Ray on Vertex AI Tabular Text Vector Search Vertex AI Experiments Vertex AI Feature Store Vertex AI Inference Vertex AI model evaluation Vertex AI Model Monitoring Vertex AI Model Registry Vertex AI Pipelines Vertex AI TensorBoard Vertex AI Vizier Vertex AI Workbench Vertex Explainable AI Vertex ML Metadata Services Description Open in Classification for tabular data AutoML tabular training and prediction .
- Tutorial steps log the model parameters log the loss and metrics on every epoch to Vertex AI TensorBoard log the evaluation metrics Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Experiments Vertex AI Pipelines Compare pipeline runs with Vertex AI Experiments .
- Learn how to train a Vertex AI AutoML Tabular classification model and learn how to evaluate it through a Vertex AI pipeline job using google cloud pipeline components : Learn more about Vertex AI Model Evaluation .
- Create and run a Vertex AI Pipeline that Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Model Evaluation Custom training Evaluating batch prediction results from custom tabular regression model .

### Model evaluation components \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-evaluation-component](https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-evaluation-component)
- Source ID: `site-api-reference`
- Final score: 174
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Vertex AI provides the following model evaluation components: ModelEvaluationClassificationOp ModelEvaluationForecastingOp ModelEvaluationRegressionOp Model type support The following table shows supported model types for each model evaluation component: Model evaluation component Supported model types ModelEvaluationClassificationOp AutoML tabular or image Custom tabular ModelEvaluationRegressionOp AutoML tabular Custom tabular ModelEvaluationForecastingOp AutoML tabular Remove the target field For some model types, the BatchPredictionJob component requires you to exclude the target column (ground truth) from your dataset.
- Home Documentation AI and ML Vertex AI Reference Send feedback Model evaluation components Stay organized with collections Save and categorize content based on your preferences.
- Model evaluations without Vertex AI-generated batch predictions You can use a model evaluation pipeline component with a batch prediction that you didn't generate in Vertex AI.
- Sliced metrics offers more granular evaluation metrics for AutoML tabular and custom training classification models.

### Model evaluation in Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/evaluation/introduction](https://docs.cloud.google.com/vertex-ai/docs/evaluation/introduction)
- Source ID: `site-docs-reference-3`
- Final score: 148
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Notebook tutorials AutoML: Tabular To learn more, run the following notebooks in the environment of your choice: "Vertex AI: Evaluating batch prediction results from an AutoML Tabular classification model": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub "Vertex AI Pipelines: Evaluating batch prediction results from AutoML Tabular regression model": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub Custom training: Tabular To learn more, run the following notebooks in the environment of your choice: "Vertex AI Pipelines: Evaluating BatchPrediction results from a Custom Tabular classification model": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub "Vertex AI Pipelines: Evaluating batch prediction results from custom tabular regression model": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub Vertex AI Model Registry To learn more, run the "Get started with importing a custom model evaluation to the Vertex AI Model Registry" notebook in one of the following environments: Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub What's next Learn how to perform model evaluation using Vertex AI .
- Vertex AI supports evaluation of the following model types: Image Classification You can view and download schema files from the following Cloud Storage location: gs://google-cloud-aiplatform/schema/modelevaluation/ AuPRC : The area under the precision-recall (PR) curve , also referred to as average precision.
- The model evaluation provided by Vertex AI can fit in the typical machine learning workflow in several ways: After you train your model, review model evaluation metrics before you deploy your model.
- Home Documentation AI and ML Vertex AI Send feedback Model evaluation in Vertex AI Stay organized with collections Save and categorize content based on your preferences.

