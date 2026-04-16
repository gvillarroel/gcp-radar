---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:29:36.923Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Chart generation in Vertex AI Search answers"
feature_slug: "chart-generation-in-vertex-ai-search-answers"
latest_feature_date: "2025-03-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/answer"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest/v1/AdvancedCompleteQueryResponse"
keywords:
  - "chart"
  - "generation"
  - "vertex"
  - "ai"
  - "search"
  - "answers"
  - "can"
  - "automatically"
---

# Chart generation in Vertex AI Search answers

Product: Vertex AI Search
Coverage: MEDIUM

## Step 02 Summary

Vertex AI Search can automatically generate and return charts in answer responses and follow-up interactions when query intent or response complexity indicates visual output is useful.

## Extended Definition

Vertex AI Search can automatically generate and return charts in answer responses and follow-up interactions when query intent or response complexity indicates visual output is useful.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest/v1/AdvancedCompleteQueryResponse](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest/v1/AdvancedCompleteQueryResponse)

## Supporting Pages

### Get answers and follow-ups \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer)
- Source ID: `site-docs-reference`
- Final score: 135
- Re-rank relevance: N/A

Evidence snippets:
- Query ( text = "What is Vertex AI Search?" ), session = None , # Optional: include previous session ID to continue a conversation query understanding spec = query understanding spec , answer generation spec = answer generation spec , user pseudo id = "user-pseudo-id" , # Optional: Add user pseudo-identifier for queries. ) Make the request response = client . answer query ( request ) Handle the response print ( response ) return response Personalize answers If there is specific information about the user available—for example, data in a profile, you can specify that information in the endUserMetadata object so that the query results can be personalized for the user.
- Query ( text = "What is Vertex AI Search?" ), session = None , # Optional: include previous session ID to continue a conversation query understanding spec = query understanding spec , answer generation spec = answer generation spec , user pseudo id = "user-pseudo-id" , # Optional: Add user pseudo-identifier for queries. ) Make the request response = client . answer query ( request ) Handle the response print ( response ) return response Return grounding support scores The following command shows how to return grounding support scores for answers and claims.
- Query ( text = "What is Vertex AI Search?" ), session = None , # Optional: include previous session ID to continue a conversation query understanding spec = query understanding spec , answer generation spec = answer generation spec , user pseudo id = "user-pseudo-id" , # Optional: Add user pseudo-identifier for queries. ) Make the request response = client . answer query ( request ) Handle the response print ( response ) return response Set the answer language code The following command shows how to set the language code for answers.
- Query ( text = "What is Vertex AI Search?" ), session = None , # Optional: include previous session ID to continue a conversation query understanding spec = query understanding spec , answer generation spec = answer generation spec , user pseudo id = "user-pseudo-id" , # Optional: Add user pseudo-identifier for queries. ) Make the request response = client . answer query ( request ) Handle the response print ( response ) return response Show only relevant answers Vertex AI Search can assess how relevant the results are to a query.

### "AdvancedCompleteQueryResponse \_|\_ Vertex AI Search \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest/v1/AdvancedCompleteQueryResponse](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest/v1/AdvancedCompleteQueryResponse)
- Source ID: `site-docs-reference-2`
- Final score: 80
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Vertex AI Search Reference Send feedback AdvancedCompleteQueryResponse Stay organized with collections Save and categorize content based on your preferences.
- JSON representation { "querySuggestions" : [ { object ( QuerySuggestion ) } ] , "tailMatchTriggered" : boolean , "peopleSuggestions" : [ { object ( PersonSuggestion ) } ] , "contentSuggestions" : [ { object ( ContentSuggestion ) } ] , "recentSearchSuggestions" : [ { object ( RecentSearchSuggestion ) } ] } Fields querySuggestions[] object ( QuerySuggestion ) Results of the matched query suggestions.
- JSON representation QuerySuggestion JSON representation PersonSuggestion JSON representation PersonType ContentSuggestion JSON representation ContentType RecentSearchSuggestion JSON representation Response message for CompletionService.AdvancedCompleteQuery method.
- JSON representation { "suggestion" : string , "recentSearchTime" : string , "score" : number } Fields suggestion string The suggestion for the query. recentSearchTime string ( Timestamp format) The time when this recent rearch happened.

### "MCP Tools Reference: discoveryengine.googleapis.com \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search)
- Source ID: `site-docs-reference-2`
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- AnswerGenerationSpec JSON representation { "modelSpec" : { object ( ModelSpec ) } , "promptSpec" : { object ( PromptSpec ) } , "includeCitations" : boolean , "answerLanguageCode" : string , "ignoreAdversarialQuery" : boolean , "ignoreNonAnswerSeekingQuery" : boolean , "ignoreJailBreakingQuery" : boolean , "multimodalSpec" : { object ( MultimodalSpec ) } , // Union field ignore low relevant content can be only one of the following: "ignoreLowRelevantContent" : boolean // End of list of possible types for union field ignore low relevant content . } Fields modelSpec object ( ModelSpec ) Answer generation model specification. promptSpec object ( PromptSpec ) Answer generation prompt specification. includeCitations boolean Specifies whether to include citation metadata in the answer.
- AnswerQueryRequest JSON representation { "servingConfig" : string , "query" : { object ( Query ) } , "session" : string , "safetySpec" : { object ( SafetySpec ) } , "relatedQuestionsSpec" : { object ( RelatedQuestionsSpec ) } , "groundingSpec" : { object ( GroundingSpec ) } , "answerGenerationSpec" : { object ( AnswerGenerationSpec ) } , "searchSpec" : { object ( SearchSpec ) } , "queryUnderstandingSpec" : { object ( QueryUnderstandingSpec ) } , "asynchronousMode" : boolean , "userPseudoId" : string , "userLabels" : { string : string , ... } , "endUserSpec" : { object ( EndUserSpec ) } } Fields servingConfig string Required.
- Format: projects/{project}/locations/{location}/collections/{collection}/engines/{engine}/sessions/{session}/assistAnswers/{assist answer} This field must be a UTF-8 encoded string with a length limit of 1024 characters. state enum ( State ) State of the answer generation. replies[] object ( Reply ) Replies of the assistant. assistSkippedReasons[] enum ( AssistSkippedReason ) Reasons for not answering the assist call. customerPolicyEnforcementResult object ( CustomerPolicyEnforcementResult ) Optional.
- Grounding supports. references[] object ( Reference ) References. blobAttachments[] object ( BlobAttachment ) List of blob attachments in the answer. relatedQuestions[] string Suggested related questions. steps[] object ( Step ) Answer generation steps. queryUnderstandingInfo object ( QueryUnderstandingInfo ) Query understanding information. answerSkippedReasons[] enum ( AnswerSkippedReason ) Additional answer-skipped reasons.

