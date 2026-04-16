---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.111Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Vertex AI Codey APIs language support"
feature_slug: "vertex-ai-codey-apis-language-support"
latest_feature_date: "2023-08-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/count_tokens"
  - "https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime"
  - "https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime_template"
keywords:
  - "vertex"
  - "ai"
  - "codey"
  - "apis"
  - "language"
  - "expanded"
  - "additional"
  - "programming"
---

# Vertex AI Codey APIs language support

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Vertex AI Codey APIs expanded support to additional programming languages.

## Extended Definition

Vertex AI Codey APIs expanded support to additional programming languages.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/count_tokens](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/count_tokens)
- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime)
- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime_template](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime_template)

## Supporting Pages

### "MCP Tools Reference: aiplatform.googleapis.com \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/count_tokens](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/count_tokens)
- Source ID: `site-api-reference`
- Final score: 110
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Vertex AI Reference Send feedback MCP Tools Reference: aiplatform.googleapis.com Stay organized with collections Save and categorize content based on your preferences.
- Programming language of the code . code string Required.
- Schema JSON representation { "type" : enum ( Type ) , "format" : string , "title" : string , "description" : string , "nullable" : boolean , "default" : value , "items" : { object ( Schema ) } , "minItems" : string , "maxItems" : string , "enum" : [ string ] , "properties" : { string : { object ( Schema ) } , ... } , "propertyOrdering" : [ string ] , "required" : [ string ] , "minProperties" : string , "maxProperties" : string , "minimum" : number , "maximum" : number , "minLength" : string , "maxLength" : string , "pattern" : string , "example" : value , "anyOf" : [ { object ( Schema ) } ] , "additionalProperties" : value , "ref" : string , "defs" : { string : { object ( Schema ) } , ... } } Fields type enum ( Type ) Optional.
- For more information on filtering, see Filtering VertexRagStore JSON representation { "ragCorpora" : [ string ] , "ragResources" : [ { object ( RagResource ) } ] , "ragRetrievalConfig" : { object ( RagRetrievalConfig ) } , "storeContext" : boolean , // Union field similarity top k can be only one of the following: "similarityTopK" : integer // End of list of possible types for union field similarity top k . // Union field vector distance threshold can be only one of the following: "vectorDistanceThreshold" : number // End of list of possible types for union field vector distance threshold . } Fields ragCorpora[] (deprecated) string This item is deprecated!

### "MCP Tools Reference: aiplatform.googleapis.com \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime)
- Source ID: `site-api-reference`
- Final score: 91
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Following system labels exist for NotebookRuntime: "aiplatform.googleapis.com/notebook runtime gce instance id": output only, its value is the Compute Engine instance id. "aiplatform.googleapis.com/colab enterprise entry service": its value is either "bigquery" or "vertex"; if absent, it should be "vertex".
- Home Documentation AI and ML Vertex AI Reference Send feedback MCP Tools Reference: aiplatform.googleapis.com Stay organized with collections Save and categorize content based on your preferences.
- Curl Request curl --location 'https://aiplatform.googleapis.com/mcp/generate' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "colab enterprise create notebook runtime", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema Request message for NotebookService.AssignNotebookRuntime .
- All type URL strings must be legal URI references with the additional restriction (for the text format) that the content of the reference must consist only of alphanumeric characters, percent-encoded escapes, and characters in the following set (not including the outer backticks): /-. !$&() +,;= .

### "MCP Tools Reference: aiplatform.googleapis.com \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime_template](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime_template)
- Source ID: `site-api-reference`
- Final score: 91
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Vertex AI Reference Send feedback MCP Tools Reference: aiplatform.googleapis.com Stay organized with collections Save and categorize content based on your preferences.
- Curl Request curl --location 'https://aiplatform.googleapis.com/mcp/generate' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "colab enterprise create notebook runtime template", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema Request message for NotebookService.CreateNotebookRuntimeTemplate .
- All type URL strings must be legal URI references with the additional restriction (for the text format) that the content of the reference must consist only of alphanumeric characters, percent-encoded escapes, and characters in the following set (not including the outer backticks): /-. !$&() +,;= .
- The prefix is arbitrary and Protobuf implementations are expected to simply strip off everything up to and including the last / to identify the type. type.googleapis.com/ is a common default prefix that some legacy implementations require.

