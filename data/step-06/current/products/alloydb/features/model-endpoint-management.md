---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:53:29.493Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Model endpoint management"
feature_slug: "model-endpoint-management"
latest_feature_date: "2024-11-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/reference/model-endpoint"
  - "https://docs.cloud.google.com/alloydb/docs/ai/model-endpoint-console"
  - "https://docs.cloud.google.com/alloydb/docs/ai/perform-time-series-forecasting"
keywords:
  - "model"
  - "endpoint"
  - "management"
  - "lets"
  - "alloydb"
  - "register"
  - "call"
  - "remote"
---

# Model endpoint management

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

Model endpoint management lets AlloyDB register and call remote AI model endpoints by using sample templates; Model endpoint management lets AlloyDB and AlloyDB Omni register and call remote AI models.

## Extended Definition

Model endpoint management lets AlloyDB register and call remote AI model endpoints by using sample templates; Model endpoint management lets AlloyDB and AlloyDB Omni register and call remote AI models.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/reference/model-endpoint](https://docs.cloud.google.com/alloydb/docs/reference/model-endpoint)
- [https://docs.cloud.google.com/alloydb/docs/ai/model-endpoint-console](https://docs.cloud.google.com/alloydb/docs/ai/model-endpoint-console)
- [https://docs.cloud.google.com/alloydb/docs/ai/perform-time-series-forecasting](https://docs.cloud.google.com/alloydb/docs/ai/perform-time-series-forecasting)

## Supporting Pages

### "Model endpoint management reference \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/model-endpoint](https://docs.cloud.google.com/alloydb/docs/reference/model-endpoint)
- Source ID: `site-api-reference`
- Final score: 271
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following table shows the auth types that you can set: Authentication method Set in function as… Model provider AlloyDB service agent alloydb service agent iam Vertex AI provider Secret Manager secret manager third-party providers, such as Anthropic, Hugging Face, or OpenAI Models Use this reference to understand parameters for functions that let you manage model endpoints. google ml.create model() function The following shows how to call the google ml.create model() SQL function used to register model endpoint metadata: CALL google ml . create model ( model id = > ' MODEL ID ' , model request url = > ' REQUEST URL ' , model provider = > ' PROVIDER ID ' , model type = > ' MODEL TYPE ' , model qualified name = > ' MODEL QUALIFIED NAME ' , model auth type = > ' AUTH TYPE ' , model auth id = > ' AUTH ID ' , generate headers fn = > ' GENERATE HEADER FUNCTION ' , model in transform fn = > ' INPUT TRANSFORM FUNCTION ' , model out transform fn = > ' OUTPUT TRANSFORM FUNCTION ' ); Parameter Required Description MODEL ID required for all model endpoints A unique ID for the model endpoint that you define.
- For example, to call the pre-registered gemini-embedding-001 model directly: SELECT google ml.embedding( model id => 'gemini-embedding-001', content => 'AlloyDB is a managed, cloud-hosted SQL database service'); Models with built-in support Model endpoints with built-in support benefit from automated integration.
- For more information, see Register and call remote AI models in AlloyDB overview .
- See Transform functions . google ml.alter model() The following shows how to call the google ml.alter model() SQL function used to update model endpoint metadata: CALL google ml . alter model ( model id = > ' MODEL ID ' , model request url = > ' REQUEST URL ' , model provider = > ' PROVIDER ID ' , model type = > ' MODEL TYPE ' , model qualified name = > ' MODEL QUALIFIED NAME ' , model auth type = > ' AUTH TYPE ' , model auth id = > ' AUTH ID ' , generate headers fn = > ' GENERATE HEADER FUNCTION ' , model in transform fn = > ' INPUT TRANSFORM FUNCTION ' , model out transform fn = > ' OUTPUT TRANSFORM FUNCTION ' ); For information about the values that you must set for each parameter, see Create a model . google ml.drop model() function The following shows how to call the google ml.drop model() SQL function used to drop a model endpoint: CALL google ml . drop model ( ' MODEL ID ' ); Parameter Description MODEL ID A unique ID for the model endpoint that you defined. google ml.list model() function The following shows how to call the google ml.list model() SQL function used to list model endpoint information: SELECT google ml . list model ( ' MODEL ID ' ); Parameter Description MODEL ID A unique ID for the model endpoint that you defined. google ml.model info view view The following shows how to call the google ml.model info view view that is used to list model endpoint information for all model endpoints: SELECT FROM google ml . model info view ; Secrets Use this reference to understand parameters for functions that let you manage secrets. google ml.create sm secret() function The following shows how to call the google ml.create sm secret() SQL function used to add the secret created in Secret Manager: CALL google ml . create sm secret ( secret id = > ' SECRET ID ' , secret path = > 'projects/ project-id /secrets/ SECRET MANAGER SECRET ID /versions/ VERSION NUMBER ' ); Parameter Description SECRET ID The secret ID that you set and is subsequently used when registering a model endpoint.

### "Use model endpoint management in AlloyDB Studio \_|\_ AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/model-endpoint-console](https://docs.cloud.google.com/alloydb/docs/ai/model-endpoint-console)
- Source ID: `site-docs-root-required-3`
- Final score: 267
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Call pre-registered embedding model endpoints The supported pre-registered embedding models are listed in the Explorer pane of AlloyDB Studio.
- For more information about registering a model endpoint, see Register and call remote AI models .
- This document shows how to use AlloyDB Studio to register and call model endpoints.
- What's next Learn more about model endpoint management Use sample templates for registering model endpoints Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Perform time-series forecasting \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/perform-time-series-forecasting](https://docs.cloud.google.com/alloydb/docs/ai/perform-time-series-forecasting)
- Source ID: `site-docs-reference-2`
- Final score: 181
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For detailed instructions on how to register different types of models, see Register and call remote AI models using model endpoint management .
- To construct the model request url for the SQL model creation call, replace the project and endpoint identifiers with the endpoint details from the preceding step as follows: CALL google ml . create model ( model id => 'timesfm v2' , model qualified name => 'timesfm v2' , model type => 'ts forecasting' , model provider => 'google' , model request url => 'https:// REGION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /endpoints/ ENDPOINT ID :predict' ); You need this model request url in the google ml.create model call when you register the TimesFM model in AlloyDB, as described in the following section.
- CALL google ml . create model ( model id = > ' MODEL ID ' , model qualified name = > ' MODEL QUALIFIED NAME ' , model type = > 'ts forecasting' , model provider = > 'google' , model request url = > 'https:// REGION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /endpoints/ ENDPOINT ID :predict' -- Example endpoint from Model Garden ); Replace the following: MODEL ID : a unique identifier for the registered model you want to use for forecasting—for example, vertex timesfm .
- You use this information in Register the TimesFM model in AlloyDB —for example, https://us-central1-aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /endpoints/ ENDPOINT ID :predict .

