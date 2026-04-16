---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:29:37.012Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Answer API with summaries and follow-ups"
feature_slug: "answer-api-with-summaries-and-follow-ups"
latest_feature_date: "2024-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/answer"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search"
keywords:
  - "answer"
  - "summaries"
  - "follow"
  - "ups"
  - "adds"
  - "public"
  - "preview"
  - "generating"
---

# Answer API with summaries and follow-ups

Product: Vertex AI Search
Coverage: MEDIUM

## Step 02 Summary

The Answer API adds Public Preview support for generating answers with summaries and follow-up search interactions to handle more complex, multi-step retrieval queries.

## Extended Definition

The Answer API adds Public Preview support for generating answers with summaries and follow-up search interactions to handle more complex, multi-step retrieval queries.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results](https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search)

## Supporting Pages

### Get answers and follow-ups \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer)
- Source ID: `site-docs-reference`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- If no results are determined to be sufficiently relevant, then instead of generating an answer from non-relevant or minimally-relevant results, you can choose to return a fallback answer: " We do not have a summary for your query. " The following command shows how to return the fallback answer in the case of irrelevant results when calling the answer method.
- Example command and partial result curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/123456/locations/global/collections/default collection/engines/my-app/servingConfigs/default search:answer" \ -d '{ "query": { "text": "When can an NCD be made?"}, "groundingSpec": { "filtering level": "FILTERING LEVEL HIGH" } }' { answer { state: SUCCEEDED answer text: "We do not have a summary for your query." steps { state: SUCCEEDED description: "Rephrase the query and search." actions { search action { query: "test?" } observation { search results { document: "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/f7f5cfde02" uri: "gs://my-bucket-123/data/CoverageDocumentation.pdf" title: "ABC345 0101" chunk info { content: "This notice implements part of section 731 of the Medicare Prescription Drug, Improvement, and Modernization Act of 2003 by describing a method of developing, and making available to the public, guidance documents under the Medicare program… " } ... search results { document: "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/f7f5cfde02" uri: "gs://my-bucket-123/data/CoverageDocumentation.pdf" title: "ABC345 0101" chunk info { content: "For the purposes of this notice, the term guidance documents means documents prepared for our staff, potential requestors of National Coverage Determinations, and other interested parties explaining the NCD process… " } } } } } answer skipped reasons: LOW GROUNDED CONTENT } In this example, no answer is returned because the high threshold wasn't met.
- Example command and partial result curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1beta/projects/my-project-123//locations/global/collections/default collection/engines/my-app/servingConfigs/default search:answer" -d '{ "query": { "text": "Display the ranking of generations from highest to lowest based on their spending on holiday items using cards."}, "answerGenerationSpec": {"includeCitations": true, "model spec": { "model version": "gemini-2.0-flash-001/answer gen/v1" }, "multimodalSpec": { "imageSource": "CORPUS IMAGE ONLY" } }, "searchSpec": { "searchParams": { "maxReturnResults": 5 } } }' { "answer": { "state": "SUCCEEDED", "answerText": "Holiday spending over November-December was weakest among Gen Xers, followed by Millennials, while Baby Boomer spending was relatively more solid.
- The following command shows how to call the answer method and specify various options for how the search result is returned. (The search results are independent of the answer.) REST To set various options related to which and how search results are returned, do the following: Run the following curl command: curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/engines/ APP ID /servingConfigs/default search:answer" \ -d '{ "query": { "text": " QUERY "}, "searchSpec": { "searchParams": { "maxReturnResults": MAX RETURN RESULTS , "filter": " FILTER ", "boostSpec": BOOST SPEC , "orderBy": " ORDER BY ", "searchResultMode": SEARCH RESULT MODE } } }' Replace the following: PROJECT ID : the ID of your Google Cloud project.

### Get search results \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results](https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results)
- Source ID: `site-iam-reference`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- Get search results for an app with website data Console To use the Google Cloud console to preview search results for an app with website data, follow these steps: In the Google Cloud console, go to the AI Applications page.
- To use the Google Cloud console to preview search results for an app with structured or unstructured data, follow these steps: Open the Preview page in the console.
- Select Search with follow-ups to enable conversation search with generative summaries and follow-up questions.
- This field is in Public preview; to use it, change v1 to v1alpha in the curl command.

### "MCP Tools Reference: discoveryengine.googleapis.com \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search)
- Source ID: `site-docs-reference-2`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Answer generation model versions and lifecycle . preview : string. (Public preview) Uses a preview model.
- ContentSearchSpec JSON representation { "snippetSpec" : { object ( SnippetSpec ) } , "summarySpec" : { object ( SummarySpec ) } , "extractiveContentSpec" : { object ( ExtractiveContentSpec ) } , "searchResultMode" : enum ( SearchResultMode ) , "chunkSpec" : { object ( ChunkSpec ) } } Fields snippetSpec object ( SnippetSpec ) If snippetSpec is not specified, snippets are not included in the search response. summarySpec object ( SummarySpec ) If summarySpec is not specified, summaries are not included in the search response. extractiveContentSpec object ( ExtractiveContentSpec ) If there is no extractive content spec provided, there will be no extractive answer in the search response. searchResultMode enum ( SearchResultMode ) Specifies the search result mode.
- If this field is set to true , we skip generating summaries for adversarial queries and return fallback messages instead. ignoreNonSummarySeekingQuery boolean Specifies whether to filter out queries that are not summary-seeking.
- If this field is set to true , we skip generating summaries for non-summary seeking queries and return fallback messages instead. ignoreLowRelevantContent boolean Specifies whether to filter out queries that have low relevance.

