---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:07:33.841Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Model endpoint management in AlloyDB and AlloyDB Omni"
feature_slug: "model-endpoint-management-in-alloydb-and-alloydb-omni"
latest_feature_date: "2024-11-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/reference/model-endpoint"
  - "https://docs.cloud.google.com/alloydb/docs/ai/alloydb-ai-use-cases"
  - "https://docs.cloud.google.com/alloydb/docs/ai/secure-agent-interactions-mcp"
  - "https://docs.cloud.google.com/alloydb/docs/connect-ide-using-mcp-toolbox"
keywords:
  - "call remote AI model"
  - "register remote model"
  - "model endpoint templates"
  - "model endpoints"
  - "remote model endpoint"
  - "model endpoint management"
  - "AlloyDB Omni model endpoint"
  - "AI model management"
---

# Model endpoint management in AlloyDB and AlloyDB Omni

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

Model endpoint management is now generally available in AlloyDB and AlloyDB Omni, including registering and calling remote AI models with sample templates.

## Extended Definition

Model endpoint management is now generally available in AlloyDB and AlloyDB Omni, including registering and calling remote AI models with sample templates.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/reference/model-endpoint](https://docs.cloud.google.com/alloydb/docs/reference/model-endpoint)
- [https://docs.cloud.google.com/alloydb/docs/ai/alloydb-ai-use-cases](https://docs.cloud.google.com/alloydb/docs/ai/alloydb-ai-use-cases)
- [https://docs.cloud.google.com/alloydb/docs/ai/secure-agent-interactions-mcp](https://docs.cloud.google.com/alloydb/docs/ai/secure-agent-interactions-mcp)
- [https://docs.cloud.google.com/alloydb/docs/connect-ide-using-mcp-toolbox](https://docs.cloud.google.com/alloydb/docs/connect-ide-using-mcp-toolbox)

## Supporting Pages

### "Model endpoint management reference \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/model-endpoint](https://docs.cloud.google.com/alloydb/docs/reference/model-endpoint)
- Source ID: `site-api-reference`
- Final score: 119
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following example shows the input and output transform functions that is used for this model endpoint when it is registered with model endpoint management: input transform function CREATE OR REPLACE FUNCTION cymbal text input transform ( model id VARCHAR ( 100 ), input text TEXT ) RETURNS JSON LANGUAGE plpgsql AS $$ DECLARE transformed input JSON ; model qualified name TEXT ; BEGIN SELECT json build object ( 'prompt' , json build array ( input text )):: JSON INTO transformed input ; RETURN transformed input ; END ; $$ ; output transform function CREATE OR REPLACE FUNCTION cymbal text output transform ( model id VARCHAR ( 100 ), response json JSON ) RETURNS REAL [] LANGUAGE plpgsql AS $$ DECLARE transformed output REAL []; BEGIN SELECT ARRAY ( SELECT json array elements text ( response json - > 0 )) INTO transformed output ; RETURN transformed output ; END ; $$ ; HTTP header generation function The following shows signature for the header generation function that can be used with the google ml.embedding() prediction function when registering other text embedding model endpoints.
- This page lists functions and their parameters, which are provided by the google ml integration extension to register and manage model endpoints, and manage secrets with model endpoint management.
- See Transform functions . google ml.alter model() The following shows how to call the google ml.alter model() SQL function used to update model endpoint metadata: CALL google ml . alter model ( model id = > ' MODEL ID ' , model request url = > ' REQUEST URL ' , model provider = > ' PROVIDER ID ' , model type = > ' MODEL TYPE ' , model qualified name = > ' MODEL QUALIFIED NAME ' , model auth type = > ' AUTH TYPE ' , model auth id = > ' AUTH ID ' , generate headers fn = > ' GENERATE HEADER FUNCTION ' , model in transform fn = > ' INPUT TRANSFORM FUNCTION ' , model out transform fn = > ' OUTPUT TRANSFORM FUNCTION ' ); For information about the values that you must set for each parameter, see Create a model . google ml.drop model() function The following shows how to call the google ml.drop model() SQL function used to drop a model endpoint: CALL google ml . drop model ( ' MODEL ID ' ); Parameter Description MODEL ID A unique ID for the model endpoint that you defined. google ml.list model() function The following shows how to call the google ml.list model() SQL function used to list model endpoint information: SELECT google ml . list model ( ' MODEL ID ' ); Parameter Description MODEL ID A unique ID for the model endpoint that you defined. google ml.model info view view The following shows how to call the google ml.model info view view that is used to list model endpoint information for all model endpoints: SELECT FROM google ml . model info view ; Secrets Use this reference to understand parameters for functions that let you manage secrets. google ml.create sm secret() function The following shows how to call the google ml.create sm secret() SQL function used to add the secret created in Secret Manager: CALL google ml . create sm secret ( secret id = > ' SECRET ID ' , secret path = > 'projects/ project-id /secrets/ SECRET MANAGER SECRET ID /versions/ VERSION NUMBER ' ); Parameter Description SECRET ID The secret ID that you set and is subsequently used when registering a model endpoint.
- The following example shows the header generation function that is used for this text embedding model endpoint when it is registered with model endpoint management: CREATE OR REPLACE FUNCTION header gen fn ( model id VARCHAR ( 100 ), input text TEXT ) RETURNS JSON LANGUAGE plpgsql AS $$ BEGIN RETURN json build object ( 'version' , '2024-01-01' ):: JSON ; END ; $$ ; Header generation function using API Key The following examples show how to set up authentication using the API key. embedding model CREATE OR REPLACE FUNCTION header gen func ( model id VARCHAR ( 100 ), input text TEXT ) RETURNS JSON LANGUAGE plpgsql AS $$ variable conflict use variable BEGIN RETURN json build object ( 'Authorization' , ' API KEY ' ):: JSON ; END ; $$ ; Replace the API KEY with the API key of the model provider. generic model CREATE OR REPLACE FUNCTION header gen func ( model id VARCHAR ( 100 ), response json JSON ) RETURNS JSON LANGUAGE plpgsql AS $$ variable conflict use variable DECLARE transformed output REAL []; BEGIN -- code to add Auth token to API request RETURN json build object ( 'x-api-key' , ' API KEY ' , 'anthropic-version' , '2023-06-01' ):: JSON ; END ; $$ ; Replace the API KEY with the API key of the model provider.

### "Build generative AI applications \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/alloydb-ai-use-cases](https://docs.cloud.google.com/alloydb/docs/ai/alloydb-ai-use-cases)
- Source ID: `site-docs-root`
- Final score: 78
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Register and call remote AI models using model endpoint management .
- Codelab: Generate SQL using AlloyDB AI natural language Apply semantic filters and rerank vector search results to improve search quality This codelab shows you how to use AlloyDB AI features like AI Query Operators, model endpoint management , and vector search to help you improve your search quality and use semantic filters.
- Codelab: Installing and Setting-up Toolbox for your Generative AI & Agentic Applications on AlloyDB Build and deploy a personalized fashion styling assistant The following codelabs show you how to build and deploy a personalized style assistant with Gemini, model endpoint management, vector search, Vertex AI, and agents.
- Notebook: Multimodal Hybrid Product Search on AlloyDB - With Data Prep Use a similarity search using a vector index to find relevant products This codelab shows you how to use AlloyDB AI features like model endpoint management and vector search to help you find relevant products.

### "Best practices for securing agent interactions with Model Context Protocol\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/secure-agent-interactions-mcp](https://docs.cloud.google.com/alloydb/docs/ai/secure-agent-interactions-mcp)
- Source ID: `site-docs-reference-2`
- Final score: 76
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### "Use AlloyDB for PostgreSQL with MCP, Gemini CLI, and other agents \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/connect-ide-using-mcp-toolbox](https://docs.cloud.google.com/alloydb/docs/connect-ide-using-mcp-toolbox)
- Source ID: `site-docs-reference-2`
- Final score: 74
- Re-rank relevance: N/A

