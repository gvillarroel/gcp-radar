---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:30:14.958Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Adjacent segments for extractive segments (preview)"
feature_slug: "adjacent-segments-for-extractive-segments-preview"
latest_feature_date: "2023-09-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es"
keywords:
  - "adjacent"
  - "segments"
  - "for"
  - "extractive"
  - "preview"
  - "added"
  - "allowlist"
  - "based"
---

# Adjacent segments for extractive segments (preview)

Product: Vertex AI Search
Coverage: LOW

## Step 02 Summary

Added a preview, allowlist-based option to return up to three adjacent text segments before and after the relevant extractive segment for better context, with potential latency increase.

## Extended Definition

Added a preview, allowlist-based option to return up to three adjacent text segments before and after the relevant extractive segment for better context, with potential latency increase.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results](https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es)

## Supporting Pages

### "MCP Tools Reference: discoveryengine.googleapis.com \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search)
- Source ID: `site-docs-reference-2`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- At most five answers are returned for each SearchResult . maxExtractiveSegmentCount integer The max number of extractive segments returned in each search result.
- ExtractiveContentSpec JSON representation { "maxExtractiveAnswerCount" : integer , "maxExtractiveSegmentCount" : integer , "returnExtractiveSegmentScore" : boolean , "numPreviousSegments" : integer , "numNextSegments" : integer } Fields maxExtractiveAnswerCount integer The maximum number of extractive answers returned in each search result.
- If both are set then the global boost is ignored and the more fine-grained boost control spec is applied. boostControlSpec object ( BoostControlSpec ) Complex specification for custom ranking based on customer defined attribute value.
- Server behavior defaults to DISABLED . geoSearchQueryDetectionFieldNames[] string Field names used for location-based filtering, where geolocation filters are detected in natural language search queries.

### "MCP Tools Reference: discoveryengine.googleapis.com \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search)
- Source ID: `site-docs-reference-2`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- UnstructuredDocumentInfo JSON representation { "document" : string , "uri" : string , "title" : string , "documentContexts" : [ { object ( DocumentContext ) } ] , "extractiveSegments" : [ { object ( ExtractiveSegment ) } ] , "extractiveAnswers" : [ { object ( ExtractiveAnswer ) } ] } Fields document string Document resource name. uri string URI for the document. title string Title. documentContexts[] object ( DocumentContext ) List of document contexts.
- Segment JSON representation { "startIndex" : string , "endIndex" : string , "referenceIndices" : [ integer ] , "groundingScore" : number , "text" : string } Fields startIndex string ( int64 format) Zero-based index indicating the start of the segment, measured in bytes of a UTF-8 string (i.e. characters encoded on multiple bytes have a length of more than one). endIndex string ( int64 format) End of the segment, exclusive. referenceIndices[] integer References for the segment. groundingScore number Score for the segment. text string The text segment itself.
- TextGroundingMetadata JSON representation { "segments" : [ { object ( Segment ) } ] , "references" : [ { object ( Reference ) } ] } Fields segments[] object ( Segment ) Grounding information for parts of the text. references[] object ( Reference ) References for the grounded text.
- This is supposed to be the main content of the document that can be long and comprehensive. extractiveSegments[] object ( ExtractiveSegment ) List of extractive segments. extractiveAnswers[] (deprecated) object ( ExtractiveAnswer ) This item is deprecated!

### Get search results \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results](https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results)
- Source ID: `site-iam-reference`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- For getting snippets, extractive answers, extractive segments, and search summaries.
- Consider document-relevance scores for these use cases: Post-search filtering based on the relevance score to remove irrelevant results Post-search ranking or as input to other applications Debugging: relevance scores can provide insight into why some search results are returned For each search result, a relevance score can be returned: "results": [ { "id": " DOCUMENT ID ", "document": { ... }, "modelScores": { "relevance score": { "values": [ DOCUMENT-RELEVANCE-SCORE ] } } }, ... ] Also see the example command in the procedure below.
- SearchRequest ( serving config = serving config , query = search query , ) page result = client . search lite ( request ) Handle the response for response in page result : print ( response ) return page result Get search results for an app with structured or unstructured data You can preview search results from the Google Cloud console or get search results using the API.
- Get search results for an app with website data Console To use the Google Cloud console to preview search results for an app with website data, follow these steps: In the Google Cloud console, go to the AI Applications page.

### Create a search data store \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es)
- Source ID: `site-docs-root`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- This page describes how to create a data store and ingest data for custom search apps in Vertex AI Search. go to the section for the source you plan to use: Create a data store using website content Import from BigQuery Import from Cloud Storage Sync from Google Drive Sync from Gmail (Public preview) Sync from Google Sites (Public preview) Sync from Google Calendar (Public preview) Sync from Google Groups (Public preview) Import from Cloud SQL Import from Spanner (Public preview) Import from Firestore Import from Bigtable (Public Preview) Import from AlloyDB for PostgreSQL (Public Preview) Upload structured JSON data with the API Create a data store using Terraform To sync data from a third-party data source instead, see Connect a third-party data source .
- Here is how to wait for a response. result . wait until done! timeout : 60 if result . response? p result . response else puts "No response received." end end Connect to Cloud Storage with periodic syncing Note: This feature is a Preview offering, subject to the "Pre-GA Offerings Terms" of the GCP Service Specific Terms .
- Here is how to wait for a response. result . wait until done! timeout : 60 if result . response? p result . response else puts "No response received." end end Connect to BigQuery with periodic syncing Note: This feature is a Preview offering, subject to the "Pre-GA Offerings Terms" of the GCP Service Specific Terms .
- For this feature, you can process personal data as outlined in the Cloud Data Processing Addendum , subject to applicable restrictions and obligations in the Agreement (as defined in the Preview Terms).

