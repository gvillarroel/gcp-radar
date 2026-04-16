---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:29:36.986Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Document-level relevance threshold filtering"
feature_slug: "document-level-relevance-threshold-filtering"
latest_feature_date: "2024-07-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/answer"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search"
keywords:
  - "document"
  - "level"
  - "relevance"
  - "threshold"
  - "filtering"
  - "search"
  - "results"
  - "can"
---

# Document-level relevance threshold filtering

Product: Vertex AI Search
Coverage: MEDIUM

## Step 02 Summary

Search results can be filtered by document-level estimated relevance using low, medium, or high thresholds in Vertex AI Search public preview.

## Extended Definition

Search results can be filtered by document-level estimated relevance using low, medium, or high thresholds in Vertex AI Search public preview.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results](https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search)

## Supporting Pages

### Get search results \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results](https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results)
- Source ID: `site-iam-reference`
- Final score: 189
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Consider document-relevance scores for these use cases: Post-search filtering based on the relevance score to remove irrelevant results Post-search ranking or as input to other applications Debugging: relevance scores can provide insight into why some search results are returned For each search result, a relevance score can be returned: "results": [ { "id": " DOCUMENT ID ", "document": { ... }, "modelScores": { "relevance score": { "values": [ DOCUMENT-RELEVANCE-SCORE ] } } }, ... ] Also see the example command in the procedure below.
- The remaining $100 million was received in the first quarter of 2019.", "pageNumber": "21" } ] } }, "modelScores": { "relevance score": { "values": [ 0.5 ] } } }, ... { "id": "e6bbd0d82dc2a2fc7ccf1bd82ac6334f", "document": { "name": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/e6bbd0d82dc2a2fc7ccf1bd82ac6334f", "id": "e6bbd0d82dc2a2fc7ccf1bd82ac6334f", "derivedStructData": { "title": "2021 Q1 Earnings Transcript", "link": "gs://cloud-samples-data/gen-app-builder/search/alphabet-investor-pdfs/2021 Q1 Earnings Transcript.pdf", "extractive answers": [ { "pageNumber": "2", "content": "Our strength in AI and ML is also helping Financial Services customers improve efficiency of payments, reduce fraud and risk, and deliver faster payment solutions." } ] } }, "modelScores": { "relevance score": { "values": [ 0 ] } } } ], "totalSize": 76, "attributionToken": "8QHw8AoLCIW4 b0GELHd3lgSJDY3YmU1ZGMwLTAwMDAtMmM1OC04NzcyLTc0NzQ0NjNiOGMyNSIHR0VORVJJQyqcAcb77TDHy MX8tntMI6-nRWK4uQwwvCeFYX77TDvifIwq8SKLauR3zCq-LMt0IrIMNSynRWc1rctv 7kML7l3zDZveQwkPeyMMP77TD12e0wpd hMIfi5DCRv9owgvvtMJWSxTCOkckwu-XfMK7Eii3sifIwqJHfMKjf4TCt-LMtlL aMJ Wty23t4wto4CXIs2KyDDcveQwwv7kMDABShIweDU3MGFkYWI4MzQ4NmY0MGE", "nextPageToken": "UjMjhjYzYDN0cDN30iM3cDOtgTNjJTLwADMw0iZiRWNlJ2N2QiGBUd0gWLEG4bjhWICMIBM1IgC", "summary": {}, "queryExpansionInfo": {} } Note: This document-relevance score is different from and more precise than the relevance level used to filter documents returned by a search.
- Example command and partial result curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/my-project-123/locations/global/collections/default collection/engines/my-app/servingConfigs/default search:search" \ -d '{ "servingConfig": "projects/my-project-123/locations/global/collections/default collection/engines/my-app/servingConfigs/default search", "query": "When was Verily founded and what is its mission?", "relevanceScoreSpec": { "returnRelevanceScore": true } }' { "results": [ { "id": "f1b0d98bd2a078a6dfb4f809c3028565", "document": { "name": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/f1b0d98bd2a078a6dfb4f809c3028565", "id": "f1b0d98bd2a078a6dfb4f809c3028565", "derivedStructData": { "link": "gs://cloud-samples-data/gen-app-builder/search/alphabet-investor-pdfs/2019 alphabet annual report.pdf", "extractive answers": [ { "pageNumber": "70", "content": "VERILY Verily is a life science and healthcare company with a mission to make the world's health data useful so that people enjoy healthier lives.
- You can iterate over elements, and API calls will be issued to fetch pages as needed. result . each do item Each element is of type ::Google::Cloud::DiscoveryEngine::V1beta::SearchResponse::SearchResult. p item end end Get document-relevance scores with search results Document-relevance scores are based on the similarity of the query to the document.

### Get answers and follow-ups \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer)
- Source ID: `site-docs-reference`
- Final score: 185
- Re-rank relevance: N/A

Evidence snippets:
- Example command and partial result curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/123456/locations/global/collections/default collection/engines/my-app/servingConfigs/default search:answer" \ -d '{ "query": { "text": "When can an NCD be made?"}, "groundingSpec": { "filtering level": "FILTERING LEVEL HIGH" } }' { answer { state: SUCCEEDED answer text: "We do not have a summary for your query." steps { state: SUCCEEDED description: "Rephrase the query and search." actions { search action { query: "test?" } observation { search results { document: "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/f7f5cfde02" uri: "gs://my-bucket-123/data/CoverageDocumentation.pdf" title: "ABC345 0101" chunk info { content: "This notice implements part of section 731 of the Medicare Prescription Drug, Improvement, and Modernization Act of 2003 by describing a method of developing, and making available to the public, guidance documents under the Medicare program… " } ... search results { document: "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/f7f5cfde02" uri: "gs://my-bucket-123/data/CoverageDocumentation.pdf" title: "ABC345 0101" chunk info { content: "For the purposes of this notice, the term guidance documents means documents prepared for our staff, potential requestors of National Coverage Determinations, and other interested parties explaining the NCD process… " } } } } } answer skipped reasons: LOW GROUNDED CONTENT } In this example, no answer is returned because the high threshold wasn't met.
- Additional information about the methodology used to aggregate the data is available upon request.\n\n## Contributors\n\nDavid Michael Tinsley Senior Economist, Bank of America Institute Joe Wadford Economist, Bank of America Institute Taylor Bowley Economist, Bank of America Institute Liz Everett Krisberg Head of Bank of America Institute\n\n## Sources\n\nLi Wei Director, Global Risk Analytics Kimberly Warren Director, Global Risk Analytics Ana Maxim Senior Vice President, Consumer and Small Business Mel Roasa Vice President, Digital and MarketingBANK OF AMERICA INSTITUTE11 March 2024 7", "relevanceScore": 0.3, "documentMetadata": { "document": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/719bfb7c1c0cde3888debd43542aabfe", "uri": "gs://yipeiw multimodal 0827/rzilleruelo multimodal datasets/20240806/Document Understanding Evaluation Dataset/Bank of America/1odEo6QRllsURLZRDwHNruCXK9bsWmhtR.pdf", "title": "1odEo6QRllsURLZRDwHNruCXK9bsWmhtR", "pageIdentifier": "6" } } } ], "steps": [ { "state": "SUCCEEDED", "description": "Rephrase the query and search.", "actions": [ { "searchAction": { "query": "Rank generations from highest to lowest based on their spending on holiday items using cards." }, "observation": { "searchResults": [ { "document": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/935c4e1f18ccff2b5fa51d6d00e40dc4", "uri": "gs://yipeiw multimodal 0827/rzilleruelo multimodal datasets/20240806/Document Understanding Evaluation Dataset/Bank of America/1baMNJuizoK7u3P2-gYRwpVz 46-uOhn4.pdf", "title": "1baMNJuizoK7u3P2-gYRwpVz 46-uOhn4", "snippetInfo": [ { "snippet": "## Exhibit 6: Credit and debit \u003cb\u003ecard spending\u003c/b\u003e per household on \u003cb\u003eholiday items\u003c/b\u003e by \u003cb\u003egeneration\u003c/b\u003e (index, Aug-Sep average=100 for each year, 7- day moving average) ...", "snippetStatus": "SUCCESS" } ] }, { "document": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/0b4c8cfb6f5ed9ef0df70ffcd79fe2c0", "uri": "gs://yipeiw multimodal 0827/rzilleruelo multimodal datasets/20240806/Document Understanding Evaluation Dataset/Bank of America/1pVkzcMDNAy-p7AlrE0LRlhpbbDzCNndJ.pdf", "title": "1pVkzcMDNAy-p7AlrE0LRlhpbbDzCNndJ", "snippetInfo": [ { "snippet": "Consumer \u003cb\u003espending\u003c/b\u003e finished solidly in 2023, \u003cb\u003ewith\u003c/b\u003e total \u003cb\u003ecard spending\u003c/b\u003e per household increasing by 0.2% year-over-year (YoY) in December, according to Bank of ...", "snippetStatus": "SUCCESS" } ] }, { "document": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/f8d7887862167c5daf6c7a30e1d464e0", "uri": "gs://yipeiw multimodal 0827/rzilleruelo multimodal datasets/20240806/Document Understanding Evaluation Dataset/Bank of America/1WkoquhDpqHphSnqIVKX45iers7kvmGjZ.pdf", "title": "1WkoquhDpqHphSnqIVKX45iers7kvmGjZ", "snippetInfo": [ { "snippet": "This could be due to an increasing customer \u003cb\u003ebase\u003c/b\u003e or inactive customers \u003cb\u003eusing their cards\u003c/b\u003e more frequently.
- Last updated 2024-08-29 UTC. ", "relevanceScore": 0.5, "documentMetadata": { "document": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/37935181d99a6ad3b4897e673a7a7986", "uri": "https://cloud.google.com/sql/docs", "title": "Cloud SQL documentation" } } } ], "steps": [ { "state": "SUCCEEDED", "description": "Rephrase the query and search.", "actions": [ { "searchAction": { "query": "What is SQL?" }, "observation": { "searchResults": [ { "document": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/7218ff4f57328d86059246d4af3a9953", "uri": "https://cloud.google.com/discover/what-are-sql-databases", "title": "SQL Databases Google Cloud", "snippetInfo": [ { "snippet": "\u003cb\u003eSQL\u003c/b\u003e (Structured Query Language) is a programming language used to store, retrieve, and manage data in a relational database. \u003cb\u003eSQL\u003c/b\u003e statements are English-like, ...", "snippetStatus": "SUCCESS" } ] }, { "document": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/f7cd9afab1282a9f57cdcee1885bb4c6", "uri": "https://cloud.google.com/learn/postgresql-vs-sql", "title": "PostgreSQL vs.
- Query ( text = "What is Vertex AI Search?" ), session = None , # Optional: include previous session ID to continue a conversation query understanding spec = query understanding spec , answer generation spec = answer generation spec , user pseudo id = "user-pseudo-id" , # Optional: Add user pseudo-identifier for queries. ) Make the request response = client . answer query ( request ) Handle the response print ( response ) return response Search phase commands: Search and answer with search result options This section shows how to specify options for the search phase portion of the answer method call, options such as setting the maximum number of documents returned, boosting, and filtering, and how to get an answer when you supply your own search results.

### "MCP Tools Reference: discoveryengine.googleapis.com \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search)
- Source ID: `site-docs-reference-2`
- Final score: 177
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In this case the filter would look like this: filter --> name:'ANY("king kong")' For more information about filtering including syntax and filter operators, see Filter boostSpec object ( BoostSpec ) Boost specification to boost certain documents in search results which may affect the answer query response.
- SearchResult JSON representation { "document" : string , "uri" : string , "title" : string , "snippetInfo" : [ { object ( SnippetInfo ) } ] , "chunkInfo" : [ { object ( ChunkInfo ) } ] , "structData" : { object } } Fields document string Document resource name. uri string URI for the document. title string Title. snippetInfo[] object ( SnippetInfo ) If citation type is DOCUMENT LEVEL CITATION, populate document level snippets. chunkInfo[] object ( ChunkInfo ) If citation type is CHUNK LEVEL CITATION and chunk mode is on, populate chunk info. structData object ( Struct format) Data representation.
- And results that are significantly more relevant to the search query can still trump your heavily favored but irrelevant documents.
- If this field is set to false , all search results are used regardless of relevance to generate answers.

