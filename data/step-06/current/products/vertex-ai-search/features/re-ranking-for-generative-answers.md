---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:29:36.974Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Re-ranking for generative answers"
feature_slug: "re-ranking-for-generative-answers"
latest_feature_date: "2024-08-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/answer"
keywords:
  - "re"
  - "ranking"
  - "generative"
  - "answers"
  - "was"
  - "updated"
  - "lower"
  - "response"
---

# Re-ranking for generative answers

Product: Vertex AI Search
Coverage: MEDIUM

## Step 02 Summary

Re-ranking for generative answers was updated to lower response latency.

## Extended Definition

Re-ranking for generative answers was updated to lower response latency.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis](https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer)

## Supporting Pages

### "MCP Tools Reference: discoveryengine.googleapis.com \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search)
- Source ID: `site-docs-reference-2`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- A higher pCTR suggests that the result is more likely to satisfy the user's query and intent, making it a valuable signal for ranking. freshness rank : freshness adjustment as a rank document age : The time in hours elapsed since the document was last updated, a floating-point number (e.g., 0.25 means 15 minutes). topicality rank : topicality adjustment as a rank.
- If true, disables event re-ranking and personalization to optimize KPIs & personalize results. disableGenerativeAnswerAddOn boolean Optional.
- Generative answer add-on includes natural language to filters and simple answers.
- SearchRequest JSON representation { "servingConfig" : string , "branch" : string , "query" : string , "pageCategories" : [ string ] , "imageQuery" : { object ( ImageQuery ) } , "pageSize" : integer , "pageToken" : string , "offset" : integer , "oneBoxPageSize" : integer , "dataStoreSpecs" : [ { object ( DataStoreSpec ) } ] , "filter" : string , "canonicalFilter" : string , "orderBy" : string , "userInfo" : { object ( UserInfo ) } , "languageCode" : string , "regionCode" : string , "facetSpecs" : [ { object ( FacetSpec ) } ] , "boostSpec" : { object ( BoostSpec ) } , "params" : { string : value , ... } , "queryExpansionSpec" : { object ( QueryExpansionSpec ) } , "spellCorrectionSpec" : { object ( SpellCorrectionSpec ) } , "userPseudoId" : string , "useLatestData" : boolean , "contentSearchSpec" : { object ( ContentSearchSpec ) } , "embeddingSpec" : { object ( EmbeddingSpec ) } , "rankingExpression" : string , "rankingExpressionBackend" : enum ( RankingExpressionBackend ) , "safeSearch" : boolean , "userLabels" : { string : string , ... } , "naturalLanguageQueryUnderstandingSpec" : { object ( NaturalLanguageQueryUnderstandingSpec ) } , "searchAsYouTypeSpec" : { object ( SearchAsYouTypeSpec ) } , "customFineTuningSpec" : { object ( CustomFineTuningSpec ) } , "displaySpec" : { object ( DisplaySpec ) } , "crowdingSpecs" : [ { object ( CrowdingSpec ) } ] , "session" : string , "sessionSpec" : { object ( SessionSpec ) } , "relevanceThreshold" : enum ( RelevanceThreshold ) , "relevanceFilterSpec" : { object ( RelevanceFilterSpec ) } , "personalizationSpec" : { object ( PersonalizationSpec ) } , "relevanceScoreSpec" : { object ( RelevanceScoreSpec ) } , "searchAddonSpec" : { object ( SearchAddonSpec ) } } Fields servingConfig string Required.

### "Vertex AI APIs for building search and RAG experiences \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis](https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis)
- Source ID: `site-docs-reference`
- Final score: 164
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Compared to embeddings that look purely at the semantic similarity of a document and a query, the ranking API can give you a more precise score for how well a document answers a given query.
- You can also ground responses to your Vertex AI Search data using Generative AI on Vertex AI.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
- The Document AI Layout Parser transforms documents in various formats into structured representations, making content like paragraphs, tables, lists, and structural elements like headings, page headers, and footers accessible, and creating context-aware chunks that facilitate information retrieval in a range of generative AI and discovery apps.

### Get answers and follow-ups \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer)
- Source ID: `site-docs-reference`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- Generative responses : This gives you access to the advanced generative answer features that require multi-step reasoning, query simplification, multi-turn queries, related questions, and multimodal answers that return images and charts.
- To get charts in the returned answers, you must turn on the Generative responses option.
- Example command and result curl -X GET -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json" "https://discoveryengine.googleapis.com/v1/projects/123456/locations/global/collections/default collection/engines/my-app/sessions" { "sessions": [ { "name": "projects/123456/locations/global/collections/default collection/engines/my-app/sessions/10000135306311111817", "state": "IN PROGRESS", "turns": [ { "query": { "queryId": "projects/123456/locations/global/questions/10000135306311114276", "text": "bugs reported by tiktok on grounding" } } ], "startTime": "2024-09-03T00:38:40.338623Z", "endTime": "2024-09-03T00:38:40.338623Z" }, { "name": "projects/123456/locations/global/collections/default collection/engines/my-app/sessions/10000827040519035859", "state": "IN PROGRESS", "turns": [ { "query": { "queryId": "projects/123456/locations/global/questions/10000827040519033518", "text": "GDM models" } } ], "startTime": "2024-07-19T15:53:06.521775Z" }, { "name": "projects/123456/locations/global/collections/default collection/engines/my-app/sessions/10003910515245149877", "state": "IN PROGRESS", "turns": [ { "query": { "queryId": "projects/123456/locations/global/questions/10003910515245148378", "text": "gyorgyattila" }, "answer": "projects/123456/locations/global/collections/default collection/engines/my-app/sessions/10003910515245149877/answers/17036357111873257990" } ], "startTime": "2024-08-08T11:40:04.632463Z", "endTime": "2024-08-08T11:40:04.632463Z" }, ... { "name": "projects/123456/locations/global/collections/default collection/engines/my-app/sessions/10198752942940073431", "state": "IN PROGRESS", "turns": [ { "query": { "queryId": "projects/123456/locations/global/questions/10198752942940071818", "text": "hello" }, "answer": "projects/123456/locations/global/collections/default collection/engines/my-app/sessions/10198752942940073431/answers/13411441797796265380" } ], "startTime": "2024-08-14T17:30:21.203439Z", "endTime": "2024-08-14T17:30:21.203439Z" } ], "nextPageToken": "IDEDgIwL vuieLC" } The response contains a list of sessions and the nextPageToken.
- Query ( text = "What is Vertex AI Search?" ), session = None , # Optional: include previous session ID to continue a conversation query understanding spec = query understanding spec , answer generation spec = answer generation spec , user pseudo id = "user-pseudo-id" , # Optional: Add user pseudo-identifier for queries. ) Make the request response = client . answer query ( request ) Handle the response print ( response ) return response Personalize answers If there is specific information about the user available—for example, data in a profile, you can specify that information in the endUserMetadata object so that the query results can be personalized for the user.

