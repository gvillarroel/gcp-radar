---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.631Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ML inference on Vertex AI pretrained models"
feature_slug: "bigquery-ml-inference-on-vertex-ai-pretrained-models"
latest_feature_date: "2023-08-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/ai-application-overview"
keywords:
  - "Vision NLP Translation inference"
  - "NLP API integration"
  - "ML inferencing"
  - "pretrained Vertex AI models"
  - "pretrained models"
  - "Cloud Natural Language API"
  - "Cloud Vision API"
  - "Cloud Translation API"
---

# BigQuery ML inference on Vertex AI pretrained models

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery ML inference functions now support Vertex AI pretrained models for NLP, translation, and computer vision via Cloud Vision, Cloud Natural Language, and Cloud Translation APIs.

## Extended Definition

BigQuery ML supports inference via remote models that reference external Google Cloud AI APIs. For task-specific inference, you can create a remote model and set the remote service type to CLOUD AI NATURAL LANGUAGE V1, CLOUD AI TRANSLATE V3, or CLOUD AI VISION V1 to run natural language, translation, or computer vision workloads respectively. The provided evidence does not explicitly state that this pathway is “Vertex AI pretrained model” inference.

## Evidence Summary

The page details BigQuery AI integration using remote models and shows which remote service types map to Cloud Natural Language, Cloud Translation, and Cloud Vision inference tasks.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/ai-application-overview](https://docs.cloud.google.com/bigquery/docs/ai-application-overview)

## Supporting Pages

### Task-specific solutions overview \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/ai-application-overview](https://docs.cloud.google.com/bigquery/docs/ai-application-overview)
- Source ID: `site-docs-root-2`
- Final score: 36
- Re-rank relevance: STRONG
- Re-rank rationale: It explicitly states BigQuery ML can use remote models over Vertex AI/Cloud AI services, with inference occurring in Vertex AI across NLP and translation scenarios.

Evidence snippets:
- To perform natural language tasks, you can create a reference to the Cloud Natural Language API by creating a remote model and specifying CLOUD AI NATURAL LANGUAGE V1 for the REMOTE SERVICE TYPE value.
- To perform machine translation tasks, you can create a reference to the Cloud Translation API by creating a remote model and specifying CLOUD AI TRANSLATE V3 for the REMOTE SERVICE TYPE value.
- To perform computer vision tasks, you can create a reference to the Cloud Vision API by creating a remote model and specifying CLOUD AI VISION V1 for the REMOTE SERVICE TYPE value.

