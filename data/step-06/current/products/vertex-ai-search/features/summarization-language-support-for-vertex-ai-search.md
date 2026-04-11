---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:30:14.959Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Summarization language support for Vertex AI Search"
feature_slug: "summarization-language-support-for-vertex-ai-search"
latest_feature_date: "2023-09-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/about-generic-search"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search"
keywords:
  - "summarization"
  - "language"
  - "for"
  - "vertex"
  - "ai"
  - "search"
  - "expanded"
  - "enterprise"
---

# Summarization language support for Vertex AI Search

Product: Vertex AI Search
Coverage: LOW

## Step 02 Summary

Expanded Vertex AI Search Enterprise Search summarization to support languages beyond English, including German, Spanish, Italian, French, Dutch, Portuguese, and Swedish.

## Extended Definition

Expanded Vertex AI Search Enterprise Search summarization to support languages beyond English, including German, Spanish, Italian, French, Dutch, Portuguese, and Swedish.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis](https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results](https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/about-generic-search](https://docs.cloud.google.com/generative-ai-app-builder/docs/about-generic-search)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search)

## Supporting Pages

### "Vertex AI APIs for building search and RAG experiences \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis](https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis)
- Source ID: `site-api-reference`
- Final score: 210
- Re-rank relevance: N/A

Evidence snippets:
- Retrieval Choose the best retrieval method for your needs: Vertex AI Search: Vertex AI Search is a Google Search-quality information retrieval engine that can be a component of any generative AI application that uses your enterprise data.
- Vertex AI Search works as an out-of-the-box semantic & keyword search engine for RAG with the ability to process a variety of document types and with connectors to a variety of source systems including BigQuery and many third party systems.
- Home Documentation AI and ML Vertex AI Search Send feedback Vertex AI APIs for building search and RAG experiences Stay organized with collections Save and categorize content based on your preferences.
- Vertex AI RAG Engine : Vertex AI RAG Engine provides a fully-managed runtime for RAG orchestration, which lets developers build RAG for use in production and enterprise-ready contexts.

### Get search results \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results](https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results)
- Source ID: `site-iam-reference`
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client, please see the apiEndpoint client configuration option for more details. / function callSample(): void { $formattedServingConfig = SearchServiceClient::servingConfigName( '[PROJECT]', '[LOCATION]', '[DATA STORE]', '[SERVING CONFIG]' ); search sample($formattedServingConfig); } Python For more information, see the Vertex AI Search Python API reference documentation .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client, please see the apiEndpoint client configuration option for more details. / function callSample(): void { $formattedServingConfig = SearchServiceClient::servingConfigName( '[PROJECT]', '[LOCATION]', '[DATA STORE]', '[SERVING CONFIG]' ); search sample($formattedServingConfig); } Python For more information, see the Vertex AI Search Python API reference documentation .
- In this example response, the color green was used to refine search results by issuing a new search request with the filter field specified as gs.color: ANY("green") : { "guidedSearchResult" : { "refinementAttributes" : [ { "attributeKey" : " gs.color" , "attributeValue" : "green" }, { "attributeKey" : " gs.category" , "attributeValue" : "shoe" } ] } } C# For more information, see the Vertex AI Search C# API reference documentation .
- AUTO ), Optional: Use fine-tuned model for this request custom fine tuning spec=discoveryengine.CustomFineTuningSpec( enable search adaptor=True ), ) page result = client . search ( request ) Handle the response for response in page result : print ( response ) return page result Ruby For more information, see the Vertex AI Search Ruby API reference documentation .

### "Introduction to custom search \_|\_ Vertex AI Search \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/about-generic-search](https://docs.cloud.google.com/generative-ai-app-builder/docs/about-generic-search)
- Source ID: `site-api-reference`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- Retrieval and ranking: There are several sub-components to retrieval and ranking of results: Query understanding for search: Vertex AI Search analyzes a search query using the following: Natural language processing: To understand the intent.
- Data ingestion : Vertex AI Search offers different types of ingestion for data from different sources, such as: Crawling for website data Ingesting structured and unstructured data from Cloud Storage and BigQuery or through the REST API Search and browse configuration : Field settings : Control how fields are configured for search and answer generation, such as searchable, retrievable, or indexable.
- Different components of custom search The components of Vertex AI Search for custom search can be explained as follows: Data store : Your content from different data sources is stored in a Vertex AI Search data store.
- Vertex AI Search for custom apps is a powerful, Google-quality search and content discovery engine that you can integrate into your applications that contain website data and other structured or unstructured data.

### "MCP Tools Reference: discoveryengine.googleapis.com \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search)
- Source ID: `site-docs-reference-2`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- NumberConstraint JSON representation { "fieldName" : string , "comparison" : enum ( Comparison ) , "value" : number , "querySegment" : string } Fields fieldName string Name of the numerical field as defined in the schema. comparison enum ( Comparison ) The comparison operation performed between the field value and the value specified in the constraint. value number The value specified in the numerical constraint. querySegment string Identifies the keywords within the search query that match a filter.
- Curl Request curl --location 'https://discoveryengine.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "search", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema Request message for SearchService.Search method.
- This field is only returned if SearchRequest.ContentSearchSpec.summary spec is set. appliedControls[] string Controls applied as part of the Control service. geoSearchDebugInfo[] object ( GeoSearchDebugInfo ) queryExpansionInfo object ( QueryExpansionInfo ) Query expansion information for the returned results. naturalLanguageQueryUnderstandingInfo object ( NaturalLanguageQueryUnderstandingInfo ) Output only.
- For engines with a single data store, the specs directly under SearchRequest should be used. filter string The filter syntax consists of an expression language for constructing a predicate from one or more fields of the documents being filtered.

