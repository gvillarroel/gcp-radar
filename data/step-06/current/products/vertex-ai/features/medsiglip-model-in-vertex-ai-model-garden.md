---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.061Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "MedSigLIP model in Vertex AI Model Garden"
feature_slug: "medsiglip-model-in-vertex-ai-model-garden"
latest_feature_date: "2025-07-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials"
  - "https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint"
  - "https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-bq-prediction"
keywords:
  - "medsiglip"
  - "model"
  - "vertex"
  - "ai"
  - "garden"
  - "now"
  - "available"
  - "through"
---

# MedSigLIP model in Vertex AI Model Garden

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

The MedSigLIP model is now available through Vertex AI Model Garden.

## Extended Definition

The MedSigLIP model is now available through Vertex AI Model Garden.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials)
- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint)
- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-bq-prediction](https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-bq-prediction)

## Supporting Pages

### Vertex AI model evaluation notebook tutorials \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials)
- Source ID: `site-docs-reference-2`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- In this tutorial, you train a scikit-learn RandomForest model, save the model in Vertex AI Model Registry and learn how to evaluate the model through a Vertex AI pipeline job using Google Cloud Pipeline Components Python SDK.
- Learn how to train a Vertex AI AutoML Tabular classification model and learn how to evaluate it through a Vertex AI pipeline job using google cloud pipeline components : Learn more about Vertex AI Model Evaluation .
- In this tutorial, you train a scikit-learn tabular classification model and create a batch prediction job for it through a Vertex AI pipeline using google cloud pipeline components.
- Learn how to evaluate a Vertex AI model resource through a Vertex AI pipeline job using google cloud pipeline components : Learn more about Vertex AI Model Evaluation .

### Train a model using Vertex AI and the Python SDK \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-bq-prediction](https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-bq-prediction)
- Source ID: `site-docs-reference-2`
- Final score: 87
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- What you accomplish This tutorial walks you through how to use the Vertex AI SDK for Python to do the following: Create a Cloud Storage bucket to store a dataset Preprocess data for training Use the processed data to create a dataset in BigQuery Use the BigQuery dataset to create a Vertex AI tabular dataset Create and train a custom-trained model Deploy the custom-trained model to an endpoint Generate a prediction Undeploy the model Delete all resources created in the tutorial so you don't incur further charges Billable resources used This tutorial uses billable resources associated with the Vertex AI, BigQuery, and Cloud Storage Google Cloud services.
- For more information, see the following: Vertex AI pricing and Free cloud features and trial offer BigQuery pricing and BigQuery free tier usage Cloud Storage pricing and Cloud Storage free tier usage Google Cloud pricing calculator To prevent further charges, the final step of this tutorial walks you through removing all billable Google Cloud resources you created.
- Home Documentation AI and ML Vertex AI Send feedback Train a model using Vertex AI and the Python SDK Stay organized with collections Save and categorize content based on your preferences.
- This tutorial is a start-to-finish guide that shows you how to use the Vertex AI SDK for Python to create a custom-trained model.

### "MCP Tools Reference: aiplatform.googleapis.com \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint)
- Source ID: `site-api-reference-2`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- RolloutOptions JSON representation { "previousDeployedModel" : string , "revisionNumber" : integer , // Union field max unavailable can be only one of the following: "maxUnavailableReplicas" : integer , "maxUnavailablePercentage" : integer // End of list of possible types for union field max unavailable . // Union field max surge can be only one of the following: "maxSurgeReplicas" : integer , "maxSurgePercentage" : integer // End of list of possible types for union field max surge . } Fields previousDeployedModel string ID of the DeployedModel that this deployment should replace. revisionNumber integer Output only.
- Required except for Large Model Deploy use cases. prediction resources can be only one of the following: dedicatedResources object ( DedicatedResources ) A description of resources that are dedicated to the DeployedModel, and that need a higher degree of manual configuration. automaticResources object ( AutomaticResources ) A description of resources that to large degree are decided by Vertex AI, and require only a modest additional configuration. sharedResources string The resource name of the shared DeploymentResourcePool to deploy on.
- Format: projects/{project}/locations/{location}/modelDeploymentMonitoringJobs/{model deployment monitoring job} predictRequestResponseLoggingConfig object ( PredictRequestResponseLoggingConfig ) Configures the request-response logging for online prediction. dedicatedEndpointEnabled boolean If true, the endpoint will be exposed through a dedicated DNS [Endpoint.dedicated endpoint dns].
- Runtime status of the deployed model. systemLabels map (key: string, value: string) System labels to apply to Model Garden deployments.

