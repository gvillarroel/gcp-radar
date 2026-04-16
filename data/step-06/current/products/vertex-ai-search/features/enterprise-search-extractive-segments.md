---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:29:37.150Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Enterprise Search extractive segments"
feature_slug: "enterprise-search-extractive-segments"
latest_feature_date: "2023-06-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/about-advanced-features"
keywords:
  - "enterprise"
  - "search"
  - "extractive"
  - "segments"
  - "introduced"
  - "preview"
  - "returning"
  - "verbatim"
---

# Enterprise Search extractive segments

Product: Vertex AI Search
Coverage: MEDIUM

## Step 02 Summary

Enterprise Search introduced extractive segments in preview, returning verbatim text per result for display, post-processing, or large-language-model input.

## Extended Definition

Enterprise Search introduced extractive segments in preview, returning verbatim text per result for display, post-processing, or large-language-model input.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results](https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/about-advanced-features](https://docs.cloud.google.com/generative-ai-app-builder/docs/about-advanced-features)

## Supporting Pages

### "MCP Tools Reference: discoveryengine.googleapis.com \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search)
- Source ID: `site-docs-reference-2`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- ExtractiveContentSpec JSON representation { "maxExtractiveAnswerCount" : integer , "maxExtractiveSegmentCount" : integer , "returnExtractiveSegmentScore" : boolean , "numPreviousSegments" : integer , "numNextSegments" : integer } Fields maxExtractiveAnswerCount integer The maximum number of extractive answers returned in each search result.
- Otherwise, return the max extractive segment count . returnExtractiveSegmentScore boolean Specifies whether to return the confidence score from the extractive segments in each search result.
- At most five answers are returned for each SearchResult . maxExtractiveSegmentCount integer The max number of extractive segments returned in each search result.
- An extractive answer is a verbatim answer extracted from the original document, which provides a precise and contextually relevant answer to the search query.

### About advanced features \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/about-advanced-features](https://docs.cloud.google.com/generative-ai-app-builder/docs/about-advanced-features)
- Source ID: `site-docs-reference`
- Final score: 83
- Re-rank relevance: N/A

Evidence snippets:
- Here are the advanced features that are available: Enterprise edition features Generative responses Advanced website indexing Overview The following table shows Vertex AI Search features and indicates the advanced settings that are required for each feature: Feature Requires Website search (basic website search and advanced website indexing) Enterprise edition CMEK (customer-managed encryption keys) Enterprise edition Snippets for unstructured search No requirements Extractive answers for unstructured search Enterprise edition Extractive segments for unstructured search Enterprise edition Core generative answer features Enterprise edition Advanced generative answer features † Advanced LLM features Search summarization without advanced generative answer features † Enterprise edition Search summarization with advanced generative answer features † Advanced LLM features Search tuning for unstructured data stores Enterprise edition Core generative answer features include all answer generation features except for advanced generative answer features, such as related questions, query simplification, multi-step queries, multi-turn queries, and multimodal answers that return images and charts. † Advanced generative answer features include all answer generation features including related questions, query simplification, multi-step queries, multi-turn queries, and multimodal answers that return images and charts.
- Feature Requires Search summarization using the answer or the search method Advanced LLM features and advanced website indexing Search with follow-ups using the answer or the converse method Advanced LLM features and advanced website indexing Extractive segments and answers Advanced website indexing Search for an image using an image query Advanced website indexing Sitemap-based index and refresh Advanced website indexing Automatic index refresh Advanced website indexing Manual web page refresh Advanced website indexing Add structured data to data store schema Advanced website indexing Lower search latency than basic website search Advanced website indexing Blended search (multiple data stores in a single app) Advanced website indexing Search tuning Advanced website indexing You have the option to turn on advanced website indexing when you create your data store and when you upgrade your data store.
- That is, Enterprise edition features are required for any Vertex AI Search app that uses website data (basic website search and advanced website indexing).
- Enterprise edition features are required for any Vertex AI Search app that uses website data for basic website search or advanced website indexing.

### Get search results \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results](https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results)
- Source ID: `site-iam-reference`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- For getting snippets, extractive answers, extractive segments, and search summaries.
- The remaining $100 million was received in the first quarter of 2019.", "pageNumber": "21" } ] } }, "modelScores": { "relevance score": { "values": [ 0.5 ] } } }, ... { "id": "e6bbd0d82dc2a2fc7ccf1bd82ac6334f", "document": { "name": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/e6bbd0d82dc2a2fc7ccf1bd82ac6334f", "id": "e6bbd0d82dc2a2fc7ccf1bd82ac6334f", "derivedStructData": { "title": "2021 Q1 Earnings Transcript", "link": "gs://cloud-samples-data/gen-app-builder/search/alphabet-investor-pdfs/2021 Q1 Earnings Transcript.pdf", "extractive answers": [ { "pageNumber": "2", "content": "Our strength in AI and ML is also helping Financial Services customers improve efficiency of payments, reduce fraud and risk, and deliver faster payment solutions." } ] } }, "modelScores": { "relevance score": { "values": [ 0 ] } } } ], "totalSize": 76, "attributionToken": "8QHw8AoLCIW4 b0GELHd3lgSJDY3YmU1ZGMwLTAwMDAtMmM1OC04NzcyLTc0NzQ0NjNiOGMyNSIHR0VORVJJQyqcAcb77TDHy MX8tntMI6-nRWK4uQwwvCeFYX77TDvifIwq8SKLauR3zCq-LMt0IrIMNSynRWc1rctv 7kML7l3zDZveQwkPeyMMP77TD12e0wpd hMIfi5DCRv9owgvvtMJWSxTCOkckwu-XfMK7Eii3sifIwqJHfMKjf4TCt-LMtlL aMJ Wty23t4wto4CXIs2KyDDcveQwwv7kMDABShIweDU3MGFkYWI4MzQ4NmY0MGE", "nextPageToken": "UjMjhjYzYDN0cDN30iM3cDOtgTNjJTLwADMw0iZiRWNlJ2N2QiGBUd0gWLEG4bjhWICMIBM1IgC", "summary": {}, "queryExpansionInfo": {} } Note: This document-relevance score is different from and more precise than the relevance level used to filter documents returned by a search.
- Example command and partial result curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/my-project-123/locations/global/collections/default collection/engines/my-app/servingConfigs/default search:search" \ -d '{ "servingConfig": "projects/my-project-123/locations/global/collections/default collection/engines/my-app/servingConfigs/default search", "query": "When was Verily founded and what is its mission?", "relevanceScoreSpec": { "returnRelevanceScore": true } }' { "results": [ { "id": "f1b0d98bd2a078a6dfb4f809c3028565", "document": { "name": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/f1b0d98bd2a078a6dfb4f809c3028565", "id": "f1b0d98bd2a078a6dfb4f809c3028565", "derivedStructData": { "link": "gs://cloud-samples-data/gen-app-builder/search/alphabet-investor-pdfs/2019 alphabet annual report.pdf", "extractive answers": [ { "pageNumber": "70", "content": "VERILY Verily is a life science and healthcare company with a mission to make the world's health data useful so that people enjoy healthier lives.
- The remaining $100 million was received in the first quarter of 2019." } ], "title": "2019 alphabet annual report" } }, "modelScores": { "relevance score": { "values": [ 0.7 ] } } }, { "id": "0371b29bfa18ac43896b86a7b63d00b0", "document": { "name": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/0371b29bfa18ac43896b86a7b63d00b0", "id": "0371b29bfa18ac43896b86a7b63d00b0", "derivedStructData": { "link": "gs://cloud-samples-data/gen-app-builder/search/alphabet-investor-pdfs/20190429 alphabet 10Q.pdf", "title": "GOOG 10-Q Q1 2019", "extractive answers": [ { "content": "Verily Verily is a life science company with a mission to make the world's health data useful so that people enjoy healthier lives.

