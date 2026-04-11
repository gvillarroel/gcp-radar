---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:30:14.979Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Enterprise Search extractive segments"
feature_slug: "enterprise-search-extractive-segments"
latest_feature_date: "2023-06-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/about-generic-search"
keywords:
  - "enterprise"
  - "search"
  - "extractive"
  - "segments"
  - "introduced"
  - "in"
  - "preview"
  - "returning"
---

# Enterprise Search extractive segments

Product: Vertex AI Search
Coverage: LOW

## Step 02 Summary

Enterprise Search introduced extractive segments in preview, returning verbatim text per result for display, post-processing, or large-language-model input.

## Extended Definition

Enterprise Search introduced extractive segments in preview, returning verbatim text per result for display, post-processing, or large-language-model input.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results](https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/about-generic-search](https://docs.cloud.google.com/generative-ai-app-builder/docs/about-generic-search)

## Supporting Pages

### "MCP Tools Reference: discoveryengine.googleapis.com \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search)
- Source ID: `site-docs-reference-2`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- ExtractiveContentSpec JSON representation { "maxExtractiveAnswerCount" : integer , "maxExtractiveSegmentCount" : integer , "returnExtractiveSegmentScore" : boolean , "numPreviousSegments" : integer , "numNextSegments" : integer } Fields maxExtractiveAnswerCount integer The maximum number of extractive answers returned in each search result.
- Otherwise, return the max extractive segment count . returnExtractiveSegmentScore boolean Specifies whether to return the confidence score from the extractive segments in each search result.
- At most five answers are returned for each SearchResult . maxExtractiveSegmentCount integer The max number of extractive segments returned in each search result.
- ContentSearchSpec JSON representation { "snippetSpec" : { object ( SnippetSpec ) } , "summarySpec" : { object ( SummarySpec ) } , "extractiveContentSpec" : { object ( ExtractiveContentSpec ) } , "searchResultMode" : enum ( SearchResultMode ) , "chunkSpec" : { object ( ChunkSpec ) } } Fields snippetSpec object ( SnippetSpec ) If snippetSpec is not specified, snippets are not included in the search response. summarySpec object ( SummarySpec ) If summarySpec is not specified, summaries are not included in the search response. extractiveContentSpec object ( ExtractiveContentSpec ) If there is no extractive content spec provided, there will be no extractive answer in the search response. searchResultMode enum ( SearchResultMode ) Specifies the search result mode.

### Get search results \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results](https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results)
- Source ID: `site-iam-reference`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- For getting snippets, extractive answers, extractive segments, and search summaries.
- The remaining $100 million was received in the first quarter of 2019.", "pageNumber": "21" } ] } }, "modelScores": { "relevance score": { "values": [ 0.5 ] } } }, ... { "id": "e6bbd0d82dc2a2fc7ccf1bd82ac6334f", "document": { "name": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/e6bbd0d82dc2a2fc7ccf1bd82ac6334f", "id": "e6bbd0d82dc2a2fc7ccf1bd82ac6334f", "derivedStructData": { "title": "2021 Q1 Earnings Transcript", "link": "gs://cloud-samples-data/gen-app-builder/search/alphabet-investor-pdfs/2021 Q1 Earnings Transcript.pdf", "extractive answers": [ { "pageNumber": "2", "content": "Our strength in AI and ML is also helping Financial Services customers improve efficiency of payments, reduce fraud and risk, and deliver faster payment solutions." } ] } }, "modelScores": { "relevance score": { "values": [ 0 ] } } } ], "totalSize": 76, "attributionToken": "8QHw8AoLCIW4 b0GELHd3lgSJDY3YmU1ZGMwLTAwMDAtMmM1OC04NzcyLTc0NzQ0NjNiOGMyNSIHR0VORVJJQyqcAcb77TDHy MX8tntMI6-nRWK4uQwwvCeFYX77TDvifIwq8SKLauR3zCq-LMt0IrIMNSynRWc1rctv 7kML7l3zDZveQwkPeyMMP77TD12e0wpd hMIfi5DCRv9owgvvtMJWSxTCOkckwu-XfMK7Eii3sifIwqJHfMKjf4TCt-LMtlL aMJ Wty23t4wto4CXIs2KyDDcveQwwv7kMDABShIweDU3MGFkYWI4MzQ4NmY0MGE", "nextPageToken": "UjMjhjYzYDN0cDN30iM3cDOtgTNjJTLwADMw0iZiRWNlJ2N2QiGBUd0gWLEG4bjhWICMIBM1IgC", "summary": {}, "queryExpansionInfo": {} } Note: This document-relevance score is different from and more precise than the relevance level used to filter documents returned by a search.
- Example command and partial result curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/my-project-123/locations/global/collections/default collection/engines/my-app/servingConfigs/default search:search" \ -d '{ "servingConfig": "projects/my-project-123/locations/global/collections/default collection/engines/my-app/servingConfigs/default search", "query": "When was Verily founded and what is its mission?", "relevanceScoreSpec": { "returnRelevanceScore": true } }' { "results": [ { "id": "f1b0d98bd2a078a6dfb4f809c3028565", "document": { "name": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/f1b0d98bd2a078a6dfb4f809c3028565", "id": "f1b0d98bd2a078a6dfb4f809c3028565", "derivedStructData": { "link": "gs://cloud-samples-data/gen-app-builder/search/alphabet-investor-pdfs/2019 alphabet annual report.pdf", "extractive answers": [ { "pageNumber": "70", "content": "VERILY Verily is a life science and healthcare company with a mission to make the world's health data useful so that people enjoy healthier lives.
- The remaining $100 million was received in the first quarter of 2019." } ], "title": "2019 alphabet annual report" } }, "modelScores": { "relevance score": { "values": [ 0.7 ] } } }, { "id": "0371b29bfa18ac43896b86a7b63d00b0", "document": { "name": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/0371b29bfa18ac43896b86a7b63d00b0", "id": "0371b29bfa18ac43896b86a7b63d00b0", "derivedStructData": { "link": "gs://cloud-samples-data/gen-app-builder/search/alphabet-investor-pdfs/20190429 alphabet 10Q.pdf", "title": "GOOG 10-Q Q1 2019", "extractive answers": [ { "content": "Verily Verily is a life science company with a mission to make the world's health data useful so that people enjoy healthier lives.

### "MCP Tools Reference: discoveryengine.googleapis.com \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search)
- Source ID: `site-docs-reference-2`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- UnstructuredDocumentInfo JSON representation { "document" : string , "uri" : string , "title" : string , "documentContexts" : [ { object ( DocumentContext ) } ] , "extractiveSegments" : [ { object ( ExtractiveSegment ) } ] , "extractiveAnswers" : [ { object ( ExtractiveAnswer ) } ] } Fields document string Document resource name. uri string URI for the document. title string Title. documentContexts[] object ( DocumentContext ) List of document contexts.
- This is supposed to be the main content of the document that can be long and comprehensive. extractiveSegments[] object ( ExtractiveSegment ) List of extractive segments. extractiveAnswers[] (deprecated) object ( ExtractiveAnswer ) This item is deprecated!
- AnswerQueryRequest JSON representation { "servingConfig" : string , "query" : { object ( Query ) } , "session" : string , "safetySpec" : { object ( SafetySpec ) } , "relatedQuestionsSpec" : { object ( RelatedQuestionsSpec ) } , "groundingSpec" : { object ( GroundingSpec ) } , "answerGenerationSpec" : { object ( AnswerGenerationSpec ) } , "searchSpec" : { object ( SearchSpec ) } , "queryUnderstandingSpec" : { object ( QueryUnderstandingSpec ) } , "asynchronousMode" : boolean , "userPseudoId" : string , "userLabels" : { string : string , ... } , "endUserSpec" : { object ( EndUserSpec ) } } Fields servingConfig string Required.
- SearchResult JSON representation { "document" : string , "uri" : string , "title" : string , "snippetInfo" : [ { object ( SnippetInfo ) } ] , "chunkInfo" : [ { object ( ChunkInfo ) } ] , "structData" : { object } } Fields document string Document resource name. uri string URI for the document. title string Title. snippetInfo[] object ( SnippetInfo ) If citation type is DOCUMENT LEVEL CITATION, populate document level snippets. chunkInfo[] object ( ChunkInfo ) If citation type is CHUNK LEVEL CITATION and chunk mode is on, populate chunk info. structData object ( Struct format) Data representation.

### "Introduction to custom search \_|\_ Vertex AI Search \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/about-generic-search](https://docs.cloud.google.com/generative-ai-app-builder/docs/about-generic-search)
- Source ID: `site-api-reference`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- Results and answer generation: Search results: A ranked list of relevant documents or chunks is returned with optional features, such as snippets, extractive answers, and extractive segments.
- Search tuning (Preview) : Further train the model based on query and text extract pairs.
- Data ingestion : Vertex AI Search offers different types of ingestion for data from different sources, such as: Crawling for website data Ingesting structured and unstructured data from Cloud Storage and BigQuery or through the REST API Search and browse configuration : Field settings : Control how fields are configured for search and answer generation, such as searchable, retrievable, or indexable.
- Retrieval and ranking: There are several sub-components to retrieval and ranking of results: Query understanding for search: Vertex AI Search analyzes a search query using the following: Natural language processing: To understand the intent.

