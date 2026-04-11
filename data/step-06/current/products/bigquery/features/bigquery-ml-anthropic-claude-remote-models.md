---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.495Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ML Anthropic Claude remote models"
feature_slug: "bigquery-ml-anthropic-claude-remote-models"
latest_feature_date: "2024-08-26"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
  - "https://docs.cloud.google.com/bigquery/docs/locations"
keywords:
  - "Anthropic Claude in Vertex AI"
  - "Anthropic Claude"
  - "generative text tasks"
  - "BigQuery ML remote model"
  - "Vertex AI integration"
  - "CREATE MODEL remote"
  - "remote models"
  - "REMOTE MODEL"
---

# BigQuery ML Anthropic Claude remote models

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery ML now supports creating remote models based on Anthropic Claude in Vertex AI for generative text tasks.

## Extended Definition

BigQuery ML supports creating remote models in Vertex AI that are based on the Anthropic Claude model, using a `CREATE MODEL` statement with the `REMOTE WITH CONNECTION` clause. The feature enables generative text workflows by using `ML.GENERATE_TEXT` with those remote models on text data stored in BigQuery tables. The provided documentation confirms this capability as a BigQuery ML feature addition in the release notes, and the tutorial confirms the supported creation mechanism.

## Evidence Summary

The release notes document Anthropic Claude support in BigQuery ML remote models on Vertex AI and generative text use with `ML.GENERATE_TEXT`, while the tutorial explains creating remote models via `CREATE MODEL ... REMOTE WITH CONNECTION`; the locations page only indicates additional region guidance for remote models without listing region values for this feature.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial](https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- [https://docs.cloud.google.com/bigquery/docs/locations](https://docs.cloud.google.com/bigquery/docs/locations)

## Supporting Pages

### "Make predictions with remote models on Vertex AI \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial](https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial)
- Source ID: `site-docs-root`
- Final score: 82
- Re-rank relevance: WEAK
- Re-rank rationale: The page explains how to use BigQuery ML remote models with Vertex AI generally, but it does not mention Anthropic Claude specifically.

Evidence snippets:
- Home Documentation Data analytics BigQuery Guides Send feedback Make predictions with remote models on Vertex AI Stay organized with collections Save and categorize content based on your preferences.
- For more information about using the CREATE MODEL statement for remote models, see The CREATE MODEL statement for remote models over custom models .
- Create a BigQuery ML remote model You create a BigQuery ML remote model by using the CREATE MODEL statement with the REMOTE WITH CONNECTION clause.
- For more information on the CREATE MODEL statement, see The CREATE MODEL statement for remote models over custom models .

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 66
- Re-rank relevance: N/A

Evidence snippets:
- March 20, 2025 Feature You can now create remote models in BigQuery ML based on the Anthropic Claude model in Vertex AI.
- May 21, 2025 Change You can now perform supervised tuning on a BigQuery ML remote model based on a Vertex AI gemini-2.0-flash-001 or gemini-2.0-flash-lite-001 model.
- Change You can now perform supervised tuning on a BigQuery ML remote model based on a Vertex AI gemini-2.5-pro or gemini-2.5-flash-lite model.
- Use the ML.GENERATE TEXT function with these remote models to perform generative natural language tasks for text stored in BigQuery tables.

### BigQuery locations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/locations](https://docs.cloud.google.com/bigquery/docs/locations)
- Source ID: `site-docs-root`
- Final score: 54
- Re-rank relevance: MODERATE
- Re-rank rationale: It provides location references for Claude-backed remote models in the BigQuery ML remote model section, but does not explicitly describe the specific Claude integration behavior.

Evidence snippets:
- Regional locations The following table contains information about supported locations for all model types other than remote models: Region description Region name Imported models Built-in model training DNN/Autoencoder/ Boosted Tree/ Wide-and-Deep models training AutoML model training Hyperparameter tuning Vertex AI Model Registry integration Americas Columbus, Ohio us-east5 ● ● Dallas us-south1 ● ● Iowa us-central1 ● ● ● ● ● ● Las Vegas us-west4 ● ● ● ● Los Angeles us-west2 ● ● ● ● Mexico northamerica-south1 ● ● Montréal northamerica-northeast1 ● ● ● ● ● ● Northern Virginia us-east4 ● ● ● ● ● ● Oregon us-west1 ● ● ● ● ● Salt Lake City us-west3 ● ● ● São Paulo southamerica-east1 ● ● ● ● Santiago southamerica-west1 ● ● South Carolina us-east1 ● ● ● ● ● Toronto northamerica-northeast2 ● ● ● Europe Belgium europe-west1 ● ● ● ● ● ● Berlin europe-west10 ● ● Finland europe-north1 ● ● ● Frankfurt europe-west3 ● ● ● ● ● ● London europe-west2 ● ● ● ● ● ● Madrid europe-southwest1 ● ● Milan europe-west8 ● ● Netherlands europe-west4 ● ● ● ● ● ● Paris europe-west9 ● ● Stockholm europe-north2 ● ● Turin europe-west12 ● Warsaw europe-central2 ● ● Zürich europe-west6 ● ● ● ● ● ● Asia Pacific Bangkok asia-southeast3 ● ● Delhi asia-south2 ● ● Hong Kong asia-east2 ● ● ● ● ● ● Jakarta asia-southeast2 ● ● ● Melbourne australia-southeast2 ● ● Mumbai asia-south1 ● ● ● ● ● Osaka asia-northeast2 ● ● ● Seoul asia-northeast3 ● ● ● ● ● ● Singapore asia-southeast1 ● ● ● ● ● ● Sydney australia-southeast1 ● ● ● ● ● ● Taiwan asia-east1 ● ● ● ● ● ● Tokyo asia-northeast1 ● ● ● ● ● ● Middle East Dammam me-central2 ● Doha me-central1 ● Tel Aviv me-west1 ● ● Africa Johannesburg africa-south1 ● ● Multi-regional locations All supported models other than remote models are supported in the US and EU multi-regions.
- Regional locations See the following documentation for supported locations for remote models over Google models and partner models: For Gemini model and embedding model supported regions, see Google model endpoint locations .
- Locations for non-remote models This section contains information about supported locations for models other than remote models, and about where model processing occurs.
- Locations for remote models This section contains information about supported locations for remote models , and about where remote model processing occurs.

