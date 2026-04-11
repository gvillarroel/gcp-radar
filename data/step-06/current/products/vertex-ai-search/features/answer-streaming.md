---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:30:14.850Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Answer streaming"
feature_slug: "answer-streaming"
latest_feature_date: "2025-02-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/answer"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search"
keywords:
  - "answer"
  - "streaming"
  - "adds"
  - "so"
  - "generated"
  - "answers"
  - "are"
  - "delivered"
---

# Answer streaming

Product: Vertex AI Search
Coverage: LOW

## Step 02 Summary

Adds answer streaming so generated answers are delivered in sequential parts, improving perceived latency during response generation.

## Extended Definition

Adds answer streaming so generated answers are delivered in sequential parts, improving perceived latency during response generation.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search)

## Supporting Pages

### Get answers and follow-ups \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer)
- Source ID: `site-api-reference`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- Example command and partial result curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json" "https://discoveryengine.googleapis.com/v1/projects/my-project-123/locations/global/collections/default collection/engines/my-app/servingConfigs/default search:answer" \ -d '{ "query": { "text": "Hello"}, "answerGenerationSpec": { "ignoreAdversarialQuery": true , "ignoreNonAnswerSeekingQuery": true } }' { "answer": { "state": "SUCCEEDED", "answerText": " A summary could not be generated for your search query.
- Example command and result curl -X GET -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json" "https://discoveryengine.googleapis.com/v1/projects/123456/locations/global/collections/default collection/engines/my-app/sessions" { "sessions": [ { "name": "projects/123456/locations/global/collections/default collection/engines/my-app/sessions/10000135306311111817", "state": "IN PROGRESS", "turns": [ { "query": { "queryId": "projects/123456/locations/global/questions/10000135306311114276", "text": "bugs reported by tiktok on grounding" } } ], "startTime": "2024-09-03T00:38:40.338623Z", "endTime": "2024-09-03T00:38:40.338623Z" }, { "name": "projects/123456/locations/global/collections/default collection/engines/my-app/sessions/10000827040519035859", "state": "IN PROGRESS", "turns": [ { "query": { "queryId": "projects/123456/locations/global/questions/10000827040519033518", "text": "GDM models" } } ], "startTime": "2024-07-19T15:53:06.521775Z" }, { "name": "projects/123456/locations/global/collections/default collection/engines/my-app/sessions/10003910515245149877", "state": "IN PROGRESS", "turns": [ { "query": { "queryId": "projects/123456/locations/global/questions/10003910515245148378", "text": "gyorgyattila" }, "answer": "projects/123456/locations/global/collections/default collection/engines/my-app/sessions/10003910515245149877/answers/17036357111873257990" } ], "startTime": "2024-08-08T11:40:04.632463Z", "endTime": "2024-08-08T11:40:04.632463Z" }, ... { "name": "projects/123456/locations/global/collections/default collection/engines/my-app/sessions/10198752942940073431", "state": "IN PROGRESS", "turns": [ { "query": { "queryId": "projects/123456/locations/global/questions/10198752942940071818", "text": "hello" }, "answer": "projects/123456/locations/global/collections/default collection/engines/my-app/sessions/10198752942940073431/answers/13411441797796265380" } ], "startTime": "2024-08-14T17:30:21.203439Z", "endTime": "2024-08-14T17:30:21.203439Z" } ], "nextPageToken": "IDEDgIwL vuieLC" } The response contains a list of sessions and the nextPageToken.
- Example command and result curl -X GET -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json" "https://discoveryengine.googleapis.com/v1/projects/123456/locations/global/collections/default collection/engines/my-app/sessions?filter=userPseudoId=test user%20AND%20state=IN PROGRESS" { "sessions": [ { "name": "projects/123456/locations/global/collections/default collection/engines/my-app/sessions/16002628354770206943", "state": "IN PROGRESS", "userPseudoId": "test user", "turns": [ { "query": { "queryId": "projects/123456/locations/global/questions/741830", "text": "Compare bigquery with spanner database?" }, "answer": "projects/123456/locations/global/collections/default collection/engines/my-app/sessions/16002628354770206943/answers/4861507376861383072" } ], "startTime": "2024-09-13T18:47:10.465311Z", "endTime": "2024-09-13T18:49:41.579151Z" } ] } Python For more information, see the Vertex AI Search Python API reference documentation .
- NoSQL dichotomy may no longer be relevant." The \u 003cb \u 003eSpanner \u 003c/b \u 003e SQL query processor, while recognizable as a standard implementation, has unique ... ", " snippetStatus ": " SUCCESS " } ] } ] } } ] } ] }, " session ": { " name ": " projects/123456/locations/global/collections/default collection/engines/my-app/sessions/16002628354770206943 ", " state ": " IN PROGRESS ", " userPseudoId ": " test user ", " turns ": [ { " query ": { " queryId ": " projects/123456/locations/global/questions/741830 ", " text ": " Compare bigquery with spanner database? " }, " answer ": " projects/123456/locations/global/collections/default collection/engines/my-app/sessions/16002628354770206943/answers/4861507376861383072 " } ], " startTime ": " 2024 -09-13T18:47:10.465311Z ", " endTime ": " 2024 -09-13T18:47:10.465311Z " }, " answerQueryToken ": " NMwKDAjFkpK3BhDU24uZAhIkNjZlNDIyZWYtMDAwMC0yMjVmLWIxMmQtZjQwMzA0M2FkYmNj " } Repeat step 3 for each new query in the session.

### Discovery Engine API \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest)
- Source ID: `site-docs-reference-2`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- REST Resource: v1alpha.projects.locations.collections.dataStores.servingConfigs Methods answer POST /v1alpha/{servingConfig=projects/ /locations/ /collections/ /dataStores/ /servingConfigs/ }:answer Answer query method. create POST /v1alpha/{parent=projects/ /locations/ /collections/ /dataStores/ }/servingConfigs Creates a ServingConfig. delete DELETE /v1alpha/{name=projects/ /locations/ /collections/ /dataStores/ /servingConfigs/ } Deletes a ServingConfig. get GET /v1alpha/{name=projects/ /locations/ /collections/ /dataStores/ /servingConfigs/ } Gets a ServingConfig. list GET /v1alpha/{parent=projects/ /locations/ /collections/ /dataStores/ }/servingConfigs Lists all ServingConfigs linked to this dataStore. patch PATCH /v1alpha/{servingConfig.name=projects/ /locations/ /collections/ /dataStores/ /servingConfigs/ } Updates a ServingConfig. recommend POST /v1alpha/{servingConfig=projects/ /locations/ /collections/ /dataStores/ /servingConfigs/ }:recommend Makes a recommendation, which requires a contextual user event. search POST /v1alpha/{servingConfig=projects/ /locations/ /collections/ /dataStores/ /servingConfigs/ }:search Performs a search. searchLite POST /v1alpha/{servingConfig=projects/ /locations/ /collections/ /dataStores/ /servingConfigs/ }:searchLite Performs a search. streamAnswer POST /v1alpha/{servingConfig=projects/ /locations/ /collections/ /dataStores/ /servingConfigs/ }:streamAnswer Answer query method (streaming).
- REST Resource: v1beta.projects.locations.collections.dataStores.servingConfigs Methods answer POST /v1beta/{servingConfig=projects/ /locations/ /collections/ /dataStores/ /servingConfigs/ }:answer Answer query method. create POST /v1beta/{parent=projects/ /locations/ /collections/ /dataStores/ }/servingConfigs Creates a ServingConfig. delete DELETE /v1beta/{name=projects/ /locations/ /collections/ /dataStores/ /servingConfigs/ } Deletes a ServingConfig. get GET /v1beta/{name=projects/ /locations/ /collections/ /dataStores/ /servingConfigs/ } Gets a ServingConfig. list GET /v1beta/{parent=projects/ /locations/ /collections/ /dataStores/ }/servingConfigs Lists all ServingConfigs linked to this dataStore. patch PATCH /v1beta/{servingConfig.name=projects/ /locations/ /collections/ /dataStores/ /servingConfigs/ } Updates a ServingConfig. recommend POST /v1beta/{servingConfig=projects/ /locations/ /collections/ /dataStores/ /servingConfigs/ }:recommend Makes a recommendation, which requires a contextual user event. search POST /v1beta/{servingConfig=projects/ /locations/ /collections/ /dataStores/ /servingConfigs/ }:search Performs a search. searchLite POST /v1beta/{servingConfig=projects/ /locations/ /collections/ /dataStores/ /servingConfigs/ }:searchLite Performs a search. streamAnswer POST /v1beta/{servingConfig=projects/ /locations/ /collections/ /dataStores/ /servingConfigs/ }:streamAnswer Answer query method (streaming).
- REST Resource: v1alpha.projects.locations.collections.engines.servingConfigs Methods answer POST /v1alpha/{servingConfig=projects/ /locations/ /collections/ /engines/ /servingConfigs/ }:answer Answer query method. create POST /v1alpha/{parent=projects/ /locations/ /collections/ /engines/ }/servingConfigs Creates a ServingConfig. delete DELETE /v1alpha/{name=projects/ /locations/ /collections/ /engines/ /servingConfigs/ } Deletes a ServingConfig. get GET /v1alpha/{name=projects/ /locations/ /collections/ /engines/ /servingConfigs/ } Gets a ServingConfig. list GET /v1alpha/{parent=projects/ /locations/ /collections/ /engines/ }/servingConfigs Lists all ServingConfigs linked to this dataStore. patch PATCH /v1alpha/{servingConfig.name=projects/ /locations/ /collections/ /engines/ /servingConfigs/ } Updates a ServingConfig. recommend POST /v1alpha/{servingConfig=projects/ /locations/ /collections/ /engines/ /servingConfigs/ }:recommend Makes a recommendation, which requires a contextual user event. search POST /v1alpha/{servingConfig=projects/ /locations/ /collections/ /engines/ /servingConfigs/ }:search Performs a search. searchLite POST /v1alpha/{servingConfig=projects/ /locations/ /collections/ /engines/ /servingConfigs/ }:searchLite Performs a search. streamAnswer POST /v1alpha/{servingConfig=projects/ /locations/ /collections/ /engines/ /servingConfigs/ }:streamAnswer Answer query method (streaming).
- REST Resource: v1beta.projects.locations.collections.engines.servingConfigs Methods answer POST /v1beta/{servingConfig=projects/ /locations/ /collections/ /engines/ /servingConfigs/ }:answer Answer query method. create POST /v1beta/{parent=projects/ /locations/ /collections/ /engines/ }/servingConfigs Creates a ServingConfig. delete DELETE /v1beta/{name=projects/ /locations/ /collections/ /engines/ /servingConfigs/ } Deletes a ServingConfig. get GET /v1beta/{name=projects/ /locations/ /collections/ /engines/ /servingConfigs/ } Gets a ServingConfig. list GET /v1beta/{parent=projects/ /locations/ /collections/ /engines/ }/servingConfigs Lists all ServingConfigs linked to this dataStore. patch PATCH /v1beta/{servingConfig.name=projects/ /locations/ /collections/ /engines/ /servingConfigs/ } Updates a ServingConfig. recommend POST /v1beta/{servingConfig=projects/ /locations/ /collections/ /engines/ /servingConfigs/ }:recommend Makes a recommendation, which requires a contextual user event. search POST /v1beta/{servingConfig=projects/ /locations/ /collections/ /engines/ /servingConfigs/ }:search Performs a search. searchLite POST /v1beta/{servingConfig=projects/ /locations/ /collections/ /engines/ /servingConfigs/ }:searchLite Performs a search. streamAnswer POST /v1beta/{servingConfig=projects/ /locations/ /collections/ /engines/ /servingConfigs/ }:streamAnswer Answer query method (streaming).

### "MCP Tools Reference: discoveryengine.googleapis.com \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search)
- Source ID: `site-docs-reference-2`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- Answer JSON representation { "name" : string , "state" : enum ( State ) , "answerText" : string , "citations" : [ { object ( Citation ) } ] , "groundingSupports" : [ { object ( GroundingSupport ) } ] , "references" : [ { object ( Reference ) } ] , "blobAttachments" : [ { object ( BlobAttachment ) } ] , "relatedQuestions" : [ string ] , "steps" : [ { object ( Step ) } ] , "queryUnderstandingInfo" : { object ( QueryUnderstandingInfo ) } , "answerSkippedReasons" : [ enum ( AnswerSkippedReason ) ] , "createTime" : string , "completeTime" : string , "safetyRatings" : [ { object ( SafetyRating ) } ] , // Union field grounding score can be only one of the following: "groundingScore" : number // End of list of possible types for union field grounding score . } Fields name string Immutable.
- AnswerGenerationSpec JSON representation { "modelSpec" : { object ( ModelSpec ) } , "promptSpec" : { object ( PromptSpec ) } , "includeCitations" : boolean , "answerLanguageCode" : string , "ignoreAdversarialQuery" : boolean , "ignoreNonAnswerSeekingQuery" : boolean , "ignoreJailBreakingQuery" : boolean , "multimodalSpec" : { object ( MultimodalSpec ) } , // Union field ignore low relevant content can be only one of the following: "ignoreLowRelevantContent" : boolean // End of list of possible types for union field ignore low relevant content . } Fields modelSpec object ( ModelSpec ) Answer generation model specification. promptSpec object ( PromptSpec ) Answer generation prompt specification. includeCitations boolean Specifies whether to include citation metadata in the answer.
- Format: projects/{project}/locations/{location}/collections/{collection}/engines/{engine}/sessions/{session}/assistAnswers/{assist answer} This field must be a UTF-8 encoded string with a length limit of 1024 characters. state enum ( State ) State of the answer generation. replies[] object ( Reply ) Replies of the assistant. assistSkippedReasons[] enum ( AssistSkippedReason ) Reasons for not answering the assist call. customerPolicyEnforcementResult object ( CustomerPolicyEnforcementResult ) Optional.
- UnstructuredDocumentInfo JSON representation { "document" : string , "uri" : string , "title" : string , "documentContexts" : [ { object ( DocumentContext ) } ] , "extractiveSegments" : [ { object ( ExtractiveSegment ) } ] , "extractiveAnswers" : [ { object ( ExtractiveAnswer ) } ] } Fields document string Document resource name. uri string URI for the document. title string Title. documentContexts[] object ( DocumentContext ) List of document contexts.

### "MCP Tools Reference: discoveryengine.googleapis.com \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search)
- Source ID: `site-docs-reference-2`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- ContentSearchSpec JSON representation { "snippetSpec" : { object ( SnippetSpec ) } , "summarySpec" : { object ( SummarySpec ) } , "extractiveContentSpec" : { object ( ExtractiveContentSpec ) } , "searchResultMode" : enum ( SearchResultMode ) , "chunkSpec" : { object ( ChunkSpec ) } } Fields snippetSpec object ( SnippetSpec ) If snippetSpec is not specified, snippets are not included in the search response. summarySpec object ( SummarySpec ) If summarySpec is not specified, summaries are not included in the search response. extractiveContentSpec object ( ExtractiveContentSpec ) If there is no extractive content spec provided, there will be no extractive answer in the search response. searchResultMode enum ( SearchResultMode ) Specifies the search result mode.
- ExtractiveContentSpec JSON representation { "maxExtractiveAnswerCount" : integer , "maxExtractiveSegmentCount" : integer , "returnExtractiveSegmentScore" : boolean , "numPreviousSegments" : integer , "numNextSegments" : integer } Fields maxExtractiveAnswerCount integer The maximum number of extractive answers returned in each search result.
- At most five answers are returned for each SearchResult . maxExtractiveSegmentCount integer The max number of extractive segments returned in each search result.
- If this field is set to false , all search results are used regardless of relevance to generate answers.

