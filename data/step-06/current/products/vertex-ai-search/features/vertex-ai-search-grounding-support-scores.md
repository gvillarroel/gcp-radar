---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:29:36.950Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Vertex AI Search grounding support scores"
feature_slug: "vertex-ai-search-grounding-support-scores"
latest_feature_date: "2024-10-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/answer"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/check-grounding"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search"
keywords:
  - "vertex"
  - "ai"
  - "search"
  - "grounding"
  - "scores"
  - "answer"
  - "can"
  - "return"
---

# Vertex AI Search grounding support scores

Product: Vertex AI Search
Coverage: MEDIUM

## Step 02 Summary

The answer API can return aggregated grounding scores for answers and per-claim grounding scores, including support for summaries and follow-up answers.

## Extended Definition

The answer API can return aggregated grounding scores for answers and per-claim grounding scores, including support for summaries and follow-up answers.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/check-grounding](https://docs.cloud.google.com/generative-ai-app-builder/docs/check-grounding)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search)

## Supporting Pages

### Get answers and follow-ups \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer)
- Source ID: `site-docs-reference`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- Query ( text = "What is Vertex AI Search?" ), session = None , # Optional: include previous session ID to continue a conversation query understanding spec = query understanding spec , answer generation spec = answer generation spec , user pseudo id = "user-pseudo-id" , # Optional: Add user pseudo-identifier for queries. ) Make the request response = client . answer query ( request ) Handle the response print ( response ) return response Return grounding support scores The following command shows how to return grounding support scores for answers and claims.
- Example command and partial result curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/123456/locations/global/collections/default collection/engines/my-app/servingConfigs/default search:answer" \ -d '{ "query": { "text": "When can an NCD be made?"}, "groundingSpec": { "filtering level": "FILTERING LEVEL HIGH" } }' { answer { state: SUCCEEDED answer text: "We do not have a summary for your query." steps { state: SUCCEEDED description: "Rephrase the query and search." actions { search action { query: "test?" } observation { search results { document: "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/f7f5cfde02" uri: "gs://my-bucket-123/data/CoverageDocumentation.pdf" title: "ABC345 0101" chunk info { content: "This notice implements part of section 731 of the Medicare Prescription Drug, Improvement, and Modernization Act of 2003 by describing a method of developing, and making available to the public, guidance documents under the Medicare program… " } ... search results { document: "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/f7f5cfde02" uri: "gs://my-bucket-123/data/CoverageDocumentation.pdf" title: "ABC345 0101" chunk info { content: "For the purposes of this notice, the term guidance documents means documents prepared for our staff, potential requestors of National Coverage Determinations, and other interested parties explaining the NCD process… " } } } } } answer skipped reasons: LOW GROUNDED CONTENT } In this example, no answer is returned because the high threshold wasn't met.
- Query ( text = "What is Vertex AI Search?" ), session = None , # Optional: include previous session ID to continue a conversation query understanding spec = query understanding spec , answer generation spec = answer generation spec , user pseudo id = "user-pseudo-id" , # Optional: Add user pseudo-identifier for queries. ) Make the request response = client . answer query ( request ) Handle the response print ( response ) return response Search phase commands: Search and answer with search result options This section shows how to specify options for the search phase portion of the answer method call, options such as setting the maximum number of documents returned, boosting, and filtering, and how to get an answer when you supply your own search results.
- Query ( text = "What is Vertex AI Search?" ), session = None , # Optional: include previous session ID to continue a conversation query understanding spec = query understanding spec , answer generation spec = answer generation spec , user pseudo id = "user-pseudo-id" , # Optional: Add user pseudo-identifier for queries. ) Make the request response = client . answer query ( request ) Handle the response print ( response ) return response Personalize answers If there is specific information about the user available—for example, data in a profile, you can specify that information in the endUserMetadata object so that the query results can be personalized for the user.

### Check grounding with RAG \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/check-grounding](https://docs.cloud.google.com/generative-ai-app-builder/docs/check-grounding)
- Source ID: `site-docs-reference`
- Final score: 140
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- As part of your Retrieval Augmented Generation (RAG) experience in Vertex AI Search, you can check grounding to determine how grounded a piece of text (called an answer candidate ) is in a given set of reference texts (called facts ).
- Output data The check grounding API returns the following for an answer candidate: Support score: The support score is a number from 0 to 1 that indicates how grounded an answer candidate is in the provided set of facts.
- Home Documentation AI and ML Vertex AI Search Send feedback Check grounding with RAG Stay organized with collections Save and categorize content based on your preferences.
- When the grounding-check-required returns as true , it means that a grounding check was performed and support scores, citations, if any, are returned.

### "MCP Tools Reference: discoveryengine.googleapis.com \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search)
- Source ID: `site-docs-reference-2`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- AnswerQueryRequest JSON representation { "servingConfig" : string , "query" : { object ( Query ) } , "session" : string , "safetySpec" : { object ( SafetySpec ) } , "relatedQuestionsSpec" : { object ( RelatedQuestionsSpec ) } , "groundingSpec" : { object ( GroundingSpec ) } , "answerGenerationSpec" : { object ( AnswerGenerationSpec ) } , "searchSpec" : { object ( SearchSpec ) } , "queryUnderstandingSpec" : { object ( QueryUnderstandingSpec ) } , "asynchronousMode" : boolean , "userPseudoId" : string , "userLabels" : { string : string , ... } , "endUserSpec" : { object ( EndUserSpec ) } } Fields servingConfig string Required.
- Grounding specification. answerGenerationSpec object ( AnswerGenerationSpec ) Answer generation specification. searchSpec object ( SearchSpec ) Search specification. queryUnderstandingSpec object ( QueryUnderstandingSpec ) Query understanding specification. asynchronousMode (deprecated) boolean This item is deprecated!
- When this field is set to true , returned answer will have grounding score and will contain GroundingSupports for each claim. filteringLevel enum ( FilteringLevel ) Optional.
- No answer is returned if the search query is classified as a non-answer seeking query.

