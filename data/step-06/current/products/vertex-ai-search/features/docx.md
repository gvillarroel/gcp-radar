---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:29:37.155Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "DOCX"
feature_slug: "docx"
latest_feature_date: "2023-06-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/create-datastore-ingest"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search"
keywords:
  - "docx"
  - "enterprise"
  - "search"
  - "adds"
  - "preview"
  - "searching"
  - "unstructured"
  - "content"
---

# DOCX

Product: Vertex AI Search
Coverage: MEDIUM

## Step 02 Summary

Enterprise Search adds preview support for searching unstructured content in PPTX, DOCX, and TXT files (in addition to HTML and PDF).

## Extended Definition

Enterprise Search adds preview support for searching unstructured content in PPTX, DOCX, and TXT files (in addition to HTML and PDF).

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-datastore-ingest](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-datastore-ingest)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search)

## Supporting Pages

### "Configure results for the search widget \_|\_ Vertex AI Search \_|\_ Google\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-widget-attributes](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-widget-attributes)
- Source ID: `site-docs-reference`
- Final score: 76
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Configure search results for unstructured or website data The search widget for unstructured and website data offers the following search customizations: Search (single-turn) Search with an answer (single-turn search with summarization) Search with follow-ups (multi-turn search) For search with an answer and search with follow-ups, you need turn on some advanced settings: For search apps with unstructured data: Generative responses For website search apps: Generative responses and Advanced website indexing To configure how the widget displays search results for unstructured data: In the Google Cloud console, go to the AI Applications page.
- Image in answers : This feature returns the following kinds of images with the answers: Charts generated from information in the answer Images selected from an unstructured data store that a layout parser parses Use this feature with Search with an answer or Search with follow-ups and the stable large language model or any Gemini model 2.0 or later.
- Next steps Get search results Add the search widget to a web page Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation AI and ML Vertex AI Search Send feedback Configure results for the search widget Stay organized with collections Save and categorize content based on your preferences.

### "MCP Tools Reference: discoveryengine.googleapis.com \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search)
- Source ID: `site-docs-reference-2`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- Supported types: application/pdf (PDF, only native PDFs are supported for now) text/html (HTML) text/plain (TXT) application/xml or text/xml (XML) application/json (JSON) application/vnd.openxmlformats-officedocument.wordprocessingml.document (DOCX) application/vnd.openxmlformats-officedocument.presentationml.presentation (PPTX) application/vnd.openxmlformats-officedocument.spreadsheetml.sheet (XLSX) application/vnd.ms-excel.sheet.macroenabled.12 (XLSM) The following types are supported only if layout parser is enabled in the data store: image/bmp (BMP) image/gif (GIF) image/jpeg (JPEG) image/png (PNG) image/tiff (TIFF) See https://www.iana.org/assignments/media-types/media-types.xhtml .
- SearchRequest JSON representation { "servingConfig" : string , "branch" : string , "query" : string , "pageCategories" : [ string ] , "imageQuery" : { object ( ImageQuery ) } , "pageSize" : integer , "pageToken" : string , "offset" : integer , "oneBoxPageSize" : integer , "dataStoreSpecs" : [ { object ( DataStoreSpec ) } ] , "filter" : string , "canonicalFilter" : string , "orderBy" : string , "userInfo" : { object ( UserInfo ) } , "languageCode" : string , "regionCode" : string , "facetSpecs" : [ { object ( FacetSpec ) } ] , "boostSpec" : { object ( BoostSpec ) } , "params" : { string : value , ... } , "queryExpansionSpec" : { object ( QueryExpansionSpec ) } , "spellCorrectionSpec" : { object ( SpellCorrectionSpec ) } , "userPseudoId" : string , "useLatestData" : boolean , "contentSearchSpec" : { object ( ContentSearchSpec ) } , "embeddingSpec" : { object ( EmbeddingSpec ) } , "rankingExpression" : string , "rankingExpressionBackend" : enum ( RankingExpressionBackend ) , "safeSearch" : boolean , "userLabels" : { string : string , ... } , "naturalLanguageQueryUnderstandingSpec" : { object ( NaturalLanguageQueryUnderstandingSpec ) } , "searchAsYouTypeSpec" : { object ( SearchAsYouTypeSpec ) } , "customFineTuningSpec" : { object ( CustomFineTuningSpec ) } , "displaySpec" : { object ( DisplaySpec ) } , "crowdingSpecs" : [ { object ( CrowdingSpec ) } ] , "session" : string , "sessionSpec" : { object ( SessionSpec ) } , "relevanceThreshold" : enum ( RelevanceThreshold ) , "relevanceFilterSpec" : { object ( RelevanceFilterSpec ) } , "personalizationSpec" : { object ( PersonalizationSpec ) } , "relevanceScoreSpec" : { object ( RelevanceScoreSpec ) } , "searchAddonSpec" : { object ( SearchAddonSpec ) } } Fields servingConfig string Required.
- ContentSearchSpec JSON representation { "snippetSpec" : { object ( SnippetSpec ) } , "summarySpec" : { object ( SummarySpec ) } , "extractiveContentSpec" : { object ( ExtractiveContentSpec ) } , "searchResultMode" : enum ( SearchResultMode ) , "chunkSpec" : { object ( ChunkSpec ) } } Fields snippetSpec object ( SnippetSpec ) If snippetSpec is not specified, snippets are not included in the search response. summarySpec object ( SummarySpec ) If summarySpec is not specified, summaries are not included in the search response. extractiveContentSpec object ( ExtractiveContentSpec ) If there is no extractive content spec provided, there will be no extractive answer in the search response. searchResultMode enum ( SearchResultMode ) Specifies the search result mode.
- This score is calculated using a probabilistic model to estimate the probability that a document is relevant to a given query. relevance score : semantic relevance adjustment that uses a proprietary Google model to determine the meaning and intent behind a user's query in context with the content in the documents. pctr rank : predicted conversion rate adjustment as a rank use predicted Click-through rate (pCTR) to gauge the relevance and attractiveness of a search result from a user's perspective.

### About apps and data stores \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-datastore-ingest](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-datastore-ingest)
- Source ID: `site-docs-root`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- Unstructured data stores support documents in TXT, PDF, HTML, DOCX, PPTX, XLSX, and XLSM formats.
- A document is a file in any of the following formats: TXT, PDF, HTML, DOCX, PPTX, XLSX, and XLSM.
- Blended search allows the following fields in search requests : boostSpec contentSearchSpec dataStoreSpecs facetSpecs filter languageCode offset oneBoxPageSize orderBy query pageSize pageToken relevanceScoreSpec relevanceThreshold session sessionSpec spellCorrectionSpec userInfo userPseudoId Blended search allows the following fields in DataStoreSpec : dataStore boostSpec : If there are boost specs specified for both SearchRequest and dataStoreSpecs , both boost specs are applied to search results filter : If there are filters specified for both SearchRequest and dataStoreSpecs , both filters are applied to search results Create, Read, Update, and Delete (CRUD) operations on serving configs are supported for blended apps.
- Only the following fields can be added or updated in a serving config: boostControlIds displayName filterControlIds genericConfig : contentSearchSpec name solutionType synonymsControlIds CRUD operations on the following controls are supported for blended search apps: boostAction synonymAction filterAction There is a limit of 50 data stores per search app.

