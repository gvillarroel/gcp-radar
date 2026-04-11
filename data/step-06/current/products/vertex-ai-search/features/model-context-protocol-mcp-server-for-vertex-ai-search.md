---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:30:14.830Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Model Context Protocol (MCP) server for Vertex AI Search"
feature_slug: "model-context-protocol-mcp-server-for-vertex-ai-search"
latest_feature_date: "2026-02-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis"
keywords:
  - "model"
  - "context"
  - "protocol"
  - "mcp"
  - "server"
  - "for"
  - "vertex"
  - "ai"
---

# Model Context Protocol (MCP) server for Vertex AI Search

Product: Vertex AI Search
Coverage: LOW

## Step 02 Summary

Vertex AI Search introduces a hosted Model Context Protocol (MCP) server available at discoveryengine.googleapis.com/mcp in Public Preview.

## Extended Definition

Vertex AI Search introduces a hosted Model Context Protocol (MCP) server available at discoveryengine.googleapis.com/mcp in Public Preview.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis](https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis)

## Supporting Pages

### "MCP Tools Reference: discoveryengine.googleapis.com \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search)
- Source ID: `site-docs-reference-2`
- Final score: 212
- Re-rank relevance: N/A

Evidence snippets:
- Curl Request curl --location 'https://discoveryengine.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "search", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema Request message for SearchService.Search method.
- Home Documentation AI and ML Vertex AI Search Reference Send feedback MCP Tools Reference: discoveryengine.googleapis.com Stay organized with collections Save and categorize content based on your preferences.
- Supported types: application/pdf (PDF, only native PDFs are supported for now) text/html (HTML) text/plain (TXT) application/xml or text/xml (XML) application/json (JSON) application/vnd.openxmlformats-officedocument.wordprocessingml.document (DOCX) application/vnd.openxmlformats-officedocument.presentationml.presentation (PPTX) application/vnd.openxmlformats-officedocument.spreadsheetml.sheet (XLSX) application/vnd.ms-excel.sheet.macroenabled.12 (XLSM) The following types are supported only if layout parser is enabled in the data store: image/bmp (BMP) image/gif (GIF) image/jpeg (JPEG) image/png (PNG) image/tiff (TIFF) See https://www.iana.org/assignments/media-types/media-types.xhtml .
- SummarySpec JSON representation { "summaryResultCount" : integer , "includeCitations" : boolean , "ignoreAdversarialQuery" : boolean , "ignoreNonSummarySeekingQuery" : boolean , "ignoreLowRelevantContent" : boolean , "ignoreJailBreakingQuery" : boolean , "multimodalSpec" : { object ( MultiModalSpec ) } , "modelPromptSpec" : { object ( ModelPromptSpec ) } , "languageCode" : string , "modelSpec" : { object ( ModelSpec ) } , "useSemanticChunks" : boolean } Fields summaryResultCount integer The number of top results to generate the summary from.

### "MCP Tools Reference: discoveryengine.googleapis.com \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search)
- Source ID: `site-docs-reference-2`
- Final score: 204
- Re-rank relevance: N/A

Evidence snippets:
- AnswerGenerationSpec JSON representation { "modelSpec" : { object ( ModelSpec ) } , "promptSpec" : { object ( PromptSpec ) } , "includeCitations" : boolean , "answerLanguageCode" : string , "ignoreAdversarialQuery" : boolean , "ignoreNonAnswerSeekingQuery" : boolean , "ignoreJailBreakingQuery" : boolean , "multimodalSpec" : { object ( MultimodalSpec ) } , // Union field ignore low relevant content can be only one of the following: "ignoreLowRelevantContent" : boolean // End of list of possible types for union field ignore low relevant content . } Fields modelSpec object ( ModelSpec ) Answer generation model specification. promptSpec object ( PromptSpec ) Answer generation prompt specification. includeCitations boolean Specifies whether to include citation metadata in the answer.
- Curl Request curl --location 'https://discoveryengine.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "conversational search", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema Request message for ConversationalSearchService.AnswerQuery method.
- It can be either an error or a detailed information about the policy enforcement result. enforcement result can be only one of the following: bannedPhraseEnforcementResult object ( BannedPhraseEnforcementResult ) The policy enforcement result for the banned phrase policy. modelArmorEnforcementResult object ( ModelArmorEnforcementResult ) The policy enforcement result for the Model Armor policy.
- The Model Armor policy result. result can be only one of the following: modelArmorViolation string The Model Armor violation that was found. error object ( Status ) The error returned by Model Armor if the policy enforcement failed for some reason.

### "MCP Reference: discoveryengine.googleapis.com \_|\_ Vertex AI Search \_\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp)
- Source ID: `site-docs-reference-2`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- A Model Context Protocol (MCP) server acts as a proxy between an external service that provides context, data, or capabilities to a Large Language Model (LLM) or AI application.
- This is an MCP server which provides discoveryengine tools Server Endpoints An MCP service endpoint is the network address and communication interface (usually a URL) of the MCP server that an AI application (the Host for the MCP client) uses to establish a secure, standardized connection.
- The discoveryengine.googleapis.com MCP server has the following MCP endpoint: https://discoveryengine.googleapis.com/mcp MCP Tools An MCP tool is a function or executable capability that an MCP server exposes to a LLM or AI application to perform an action in the real world.
- MCP servers connect AI applications to external systems such as databases and web services, translating their responses into a format that the AI application can understand.

### "Vertex AI APIs for building search and RAG experiences \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis](https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis)
- Source ID: `site-api-reference`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- Vertex AI RAG Engine : Vertex AI RAG Engine provides a fully-managed runtime for RAG orchestration, which lets developers build RAG for use in production and enterprise-ready contexts.
- Model Garden: If you want full control and the model of your choice, you can use any of the models in Vertex AI Model Garden for generation.
- The Document AI Layout Parser transforms documents in various formats into structured representations, making content like paragraphs, tables, lists, and structural elements like headings, page headers, and footers accessible, and creating context-aware chunks that facilitate information retrieval in a range of generative AI and discovery apps.
- Vertex AI Search works as an out-of-the-box semantic & keyword search engine for RAG with the ability to process a variety of document types and with connectors to a variety of source systems including BigQuery and many third party systems.

