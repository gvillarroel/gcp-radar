---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.123Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Model evaluation with fairness and bias metrics"
feature_slug: "model-evaluation-with-fairness-and-bias-metrics"
latest_feature_date: "2023-07-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-evaluation-component"
  - "https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials"
  - "https://docs.cloud.google.com/vertex-ai/docs/evaluation/introduction"
keywords:
  - "model"
  - "evaluation"
  - "fairness"
  - "bias"
  - "metrics"
  - "vertex"
  - "ai"
  - "now"
---

# Model evaluation with fairness and bias metrics

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Vertex AI now supports fairness and bias metrics as part of model evaluation.

## Extended Definition

Vertex AI now supports fairness and bias metrics as part of model evaluation.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-evaluation-component](https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-evaluation-component)
- [https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials)
- [https://docs.cloud.google.com/vertex-ai/docs/evaluation/introduction](https://docs.cloud.google.com/vertex-ai/docs/evaluation/introduction)

## Supporting Pages

### Model evaluation components \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-evaluation-component](https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-evaluation-component)
- Source ID: `site-api-reference`
- Final score: 195
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example: ModelEvaluationClassificationOp(slicing specs=slicing specs) Format fairness metrics configuration slices To evaluate your model for fairness , use the following components: DetectDataBiasOp : returns data bias metrics for the slices you pass into the component.
- Vertex AI provides the following model evaluation components: ModelEvaluationClassificationOp ModelEvaluationForecastingOp ModelEvaluationRegressionOp Model type support The following table shows supported model types for each model evaluation component: Model evaluation component Supported model types ModelEvaluationClassificationOp AutoML tabular or image Custom tabular ModelEvaluationRegressionOp AutoML tabular Custom tabular ModelEvaluationForecastingOp AutoML tabular Remove the target field For some model types, the BatchPredictionJob component requires you to exclude the target column (ground truth) from your dataset.
- For example: from google.cloud.aiplatform v1.types.ModelEvaluation import BiasConfig from google.cloud.aiplatform v1.types.ModelEvaluationSlice.Slice import SliceSpec from google.cloud.aiplatform v1.types.ModelEvaluationSlice.Slice.SliceSpec import SliceConfig bias config = BiasConfig(bias slices=SliceSpec(configs={ 'feature a': SliceConfig(SliceSpec.Value(string value='label a') ) })) Create a list to store the bias configurations.
- For example: DetectDataBiasOp(bias configs=bias configs) DetectModelBiasOp(bias configs=bias configs) Required input parameters The required input parameters for model evaluation components vary based on the type of model you are evaluating.

### Vertex AI model evaluation notebook tutorials \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials)
- Source ID: `site-docs-reference-2`
- Final score: 155
- Re-rank relevance: N/A

Evidence snippets:
- Tutorial steps log the model parameters log the loss and metrics on every epoch to Vertex AI TensorBoard log the evaluation metrics Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Experiments Vertex AI Pipelines Compare pipeline runs with Vertex AI Experiments .
- List of notebooks Select a service AutoML BigQuery BigQuery ML Custom training Image Ray on Vertex AI Tabular Text Vector Search Vertex AI Experiments Vertex AI Feature Store Vertex AI Inference Vertex AI model evaluation Vertex AI Model Monitoring Vertex AI Model Registry Vertex AI Pipelines Vertex AI TensorBoard Vertex AI Vizier Vertex AI Workbench Vertex Explainable AI Vertex ML Metadata Services Description Open in Classification for tabular data AutoML tabular training and prediction .
- Tutorial steps Execute module for preprocessing data Create a dataset artifact Log parameters Execute module for training the model Log parameters Create model artifact Assign tracking lineage to dataset, model and parameters Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Experiments Track parameters and metrics for locally trained models .
- Tutorial steps Formalize model experiment in a script Run model traning using local script on Vertex AI Training Check out ML experiment parameters and metrics in Vertex AI Experiments Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Experiments Vertex ML Metadata Custom training Get started with Vertex AI Experiments .

### Model evaluation in Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/evaluation/introduction](https://docs.cloud.google.com/vertex-ai/docs/evaluation/introduction)
- Source ID: `site-docs-reference-3`
- Final score: 143
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The model evaluation provided by Vertex AI can fit in the typical machine learning workflow in several ways: After you train your model, review model evaluation metrics before you deploy your model.
- Note: Vertex AI provides model evaluation metrics for both predictive AI and generative AI models.
- Notebook tutorials AutoML: Tabular To learn more, run the following notebooks in the environment of your choice: "Vertex AI: Evaluating batch prediction results from an AutoML Tabular classification model": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub "Vertex AI Pipelines: Evaluating batch prediction results from AutoML Tabular regression model": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub Custom training: Tabular To learn more, run the following notebooks in the environment of your choice: "Vertex AI Pipelines: Evaluating BatchPrediction results from a Custom Tabular classification model": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub "Vertex AI Pipelines: Evaluating batch prediction results from custom tabular regression model": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub Vertex AI Model Registry To learn more, run the "Get started with importing a custom model evaluation to the Vertex AI Model Registry" notebook in one of the following environments: Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub What's next Learn how to perform model evaluation using Vertex AI .
- Vertex AI supports evaluation of the following model types: Image Classification You can view and download schema files from the following Cloud Storage location: gs://google-cloud-aiplatform/schema/modelevaluation/ AuPRC : The area under the precision-recall (PR) curve , also referred to as average precision.

