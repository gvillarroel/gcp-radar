---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.120Z"
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
  - "register"
  - "call"
  - "remote"
  - "endpoint"
  - "model"
  - "management"
  - "lets"
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
- See Transform functions . google ml.alter model() The following shows how to call the google ml.alter model() SQL function used to update model endpoint metadata: CALL google ml . alter model ( model id = > ' MODEL ID ' , model request url = > ' REQUEST URL ' , model provider = > ' PROVIDER ID ' , model type = > ' MODEL TYPE ' , model qualified name = > ' MODEL QUALIFIED NAME ' , model auth type = > ' AUTH TYPE ' , model auth id = > ' AUTH ID ' , generate headers fn = > ' GENERATE HEADER FUNCTION ' , model in transform fn = > ' INPUT TRANSFORM FUNCTION ' , model out transform fn = > ' OUTPUT TRANSFORM FUNCTION ' ); For information about the values that you must set for each parameter, see Create a model . google ml.drop model() function The following shows how to call the google ml.drop model() SQL function used to drop a model endpoint: CALL google ml . drop model ( ' MODEL ID ' ); Parameter Description MODEL ID A unique ID for the model endpoint that you defined. google ml.list model() function The following shows how to call the google ml.list model() SQL function used to list model endpoint information: SELECT google ml . list model ( ' MODEL ID ' ); Parameter Description MODEL ID A unique ID for the model endpoint that you defined. google ml.model info view view The following shows how to call the google ml.model info view view that is used to list model endpoint information for all model endpoints: SELECT FROM google ml . model info view ; Secrets Use this reference to understand parameters for functions that let you manage secrets. google ml.create sm secret() function The following shows how to call the google ml.create sm secret() SQL function used to add the secret created in Secret Manager: CALL google ml . create sm secret ( secret id = > ' SECRET ID ' , secret path = > 'projects/ project-id /secrets/ SECRET MANAGER SECRET ID /versions/ VERSION NUMBER ' ); Parameter Description SECRET ID The secret ID that you set and is subsequently used when registering a model endpoint.
- The following example shows the header generation function that is used for this text embedding model endpoint when it is registered with model endpoint management: CREATE OR REPLACE FUNCTION header gen fn ( model id VARCHAR ( 100 ), input text TEXT ) RETURNS JSON LANGUAGE plpgsql AS $$ BEGIN RETURN json build object ( 'version' , '2024-01-01' ):: JSON ; END ; $$ ; Header generation function using API Key The following examples show how to set up authentication using the API key. embedding model CREATE OR REPLACE FUNCTION header gen func ( model id VARCHAR ( 100 ), input text TEXT ) RETURNS JSON LANGUAGE plpgsql AS $$ variable conflict use variable BEGIN RETURN json build object ( 'Authorization' , ' API KEY ' ):: JSON ; END ; $$ ; Replace the API KEY with the API key of the model provider. generic model CREATE OR REPLACE FUNCTION header gen func ( model id VARCHAR ( 100 ), response json JSON ) RETURNS JSON LANGUAGE plpgsql AS $$ variable conflict use variable DECLARE transformed output REAL []; BEGIN -- code to add Auth token to API request RETURN json build object ( 'x-api-key' , ' API KEY ' , 'anthropic-version' , '2023-06-01' ):: JSON ; END ; $$ ; Replace the API KEY with the API key of the model provider.
- The following table shows the auth types that you can set: Authentication method Set in function as… Model provider AlloyDB service agent alloydb service agent iam Vertex AI provider Secret Manager secret manager third-party providers, such as Anthropic, Hugging Face, or OpenAI Models Use this reference to understand parameters for functions that let you manage model endpoints. google ml.create model() function The following shows how to call the google ml.create model() SQL function used to register model endpoint metadata: CALL google ml . create model ( model id = > ' MODEL ID ' , model request url = > ' REQUEST URL ' , model provider = > ' PROVIDER ID ' , model type = > ' MODEL TYPE ' , model qualified name = > ' MODEL QUALIFIED NAME ' , model auth type = > ' AUTH TYPE ' , model auth id = > ' AUTH ID ' , generate headers fn = > ' GENERATE HEADER FUNCTION ' , model in transform fn = > ' INPUT TRANSFORM FUNCTION ' , model out transform fn = > ' OUTPUT TRANSFORM FUNCTION ' ); Parameter Required Description MODEL ID required for all model endpoints A unique ID for the model endpoint that you define.
- The following example shows the input and output transform functions that is used for this model endpoint when it is registered with model endpoint management: input transform function CREATE OR REPLACE FUNCTION cymbal text input transform ( model id VARCHAR ( 100 ), input text TEXT ) RETURNS JSON LANGUAGE plpgsql AS $$ DECLARE transformed input JSON ; model qualified name TEXT ; BEGIN SELECT json build object ( 'prompt' , json build array ( input text )):: JSON INTO transformed input ; RETURN transformed input ; END ; $$ ; output transform function CREATE OR REPLACE FUNCTION cymbal text output transform ( model id VARCHAR ( 100 ), response json JSON ) RETURNS REAL [] LANGUAGE plpgsql AS $$ DECLARE transformed output REAL []; BEGIN SELECT ARRAY ( SELECT json array elements text ( response json - > 0 )) INTO transformed output ; RETURN transformed output ; END ; $$ ; HTTP header generation function The following shows signature for the header generation function that can be used with the google ml.embedding() prediction function when registering other text embedding model endpoints.

### "Use model endpoint management in AlloyDB Studio \_|\_ AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/model-endpoint-console](https://docs.cloud.google.com/alloydb/docs/ai/model-endpoint-console)
- Source ID: `site-docs-root-required-3`
- Final score: 267
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For more information about registering a model endpoint, see Register and call remote AI models .
- What's next Learn more about model endpoint management Use sample templates for registering model endpoints Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Call pre-registered embedding model endpoints The supported pre-registered embedding models are listed in the Explorer pane of AlloyDB Studio.
- This document shows how to use AlloyDB Studio to register and call model endpoints.

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
- For instructions on registering other models, see Register a model endpoint with model endpoint management .

