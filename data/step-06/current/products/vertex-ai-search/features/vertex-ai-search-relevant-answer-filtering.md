---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:29:36.999Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Vertex AI Search relevant answer filtering"
feature_slug: "vertex-ai-search-relevant-answer-filtering"
latest_feature_date: "2024-06-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/answer"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search"
keywords:
  - "vertex"
  - "ai"
  - "search"
  - "relevant"
  - "answer"
  - "filtering"
  - "adds"
  - "option"
---

# Vertex AI Search relevant answer filtering

Product: Vertex AI Search
Coverage: MEDIUM

## Step 02 Summary

Adds an option for the answer method to return responses only when search results are sufficiently relevant, otherwise showing a fallback message.

## Extended Definition

Adds an option for the answer method to return responses only when search results are sufficiently relevant, otherwise showing a fallback message.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search)

## Supporting Pages

### Get answers and follow-ups \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer)
- Source ID: `site-docs-reference`
- Final score: 161
- Re-rank relevance: N/A

Evidence snippets:
- Query ( text = "What is Vertex AI Search?" ), session = None , # Optional: include previous session ID to continue a conversation query understanding spec = query understanding spec , answer generation spec = answer generation spec , user pseudo id = "user-pseudo-id" , # Optional: Add user pseudo-identifier for queries. ) Make the request response = client . answer query ( request ) Handle the response print ( response ) return response Search phase commands: Search and answer with search result options This section shows how to specify options for the search phase portion of the answer method call, options such as setting the maximum number of documents returned, boosting, and filtering, and how to get an answer when you supply your own search results.
- Query ( text = "What is Vertex AI Search?" ), session = None , # Optional: include previous session ID to continue a conversation query understanding spec = query understanding spec , answer generation spec = answer generation spec , user pseudo id = "user-pseudo-id" , # Optional: Add user pseudo-identifier for queries. ) Make the request response = client . answer query ( request ) Handle the response print ( response ) return response Show only relevant answers Vertex AI Search can assess how relevant the results are to a query.
- Query ( text = "What is Vertex AI Search?" ), session = None , # Optional: include previous session ID to continue a conversation query understanding spec = query understanding spec , answer generation spec = answer generation spec , user pseudo id = "user-pseudo-id" , # Optional: Add user pseudo-identifier for queries. ) Make the request response = client . answer query ( request ) Handle the response print ( response ) return response Personalize answers If there is specific information about the user available—for example, data in a profile, you can specify that information in the endUserMetadata object so that the query results can be personalized for the user.
- Query ( text = "What is Vertex AI Search?" ), session = None , # Optional: include previous session ID to continue a conversation query understanding spec = query understanding spec , answer generation spec = answer generation spec , user pseudo id = "user-pseudo-id" , # Optional: Add user pseudo-identifier for queries. ) Make the request response = client . answer query ( request ) Handle the response print ( response ) return response Search and answer with query classification The following command shows how to call the answer method to inquire whether a query is adversarial, non-answer seeking, or neither.

### "MCP Tools Reference: discoveryengine.googleapis.com \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search)
- Source ID: `site-docs-reference-2`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- In this case the filter would look like this: filter --> name:'ANY("king kong")' For more information about filtering including syntax and filter operators, see Filter boostSpec object ( BoostSpec ) Boost specification to boost certain documents in search results which may affect the answer query response.
- In ConversationalSearchService.GetSession API, if GetSessionRequest.include answer details is set to true, this field will be populated when getting assistant session. queryConfig map (key: string, value: string) Optional.
- Filtering in Vertex AI Search is done by mapping the LHS filter key to a key property defined in the Vertex AI Search backend -- this mapping is defined by the customer in their schema.
- When this field is set to true , returned answer will have grounding score and will contain GroundingSupports for each claim. filteringLevel enum ( FilteringLevel ) Optional.

### "MCP Tools Reference: discoveryengine.googleapis.com \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search)
- Source ID: `site-docs-reference-2`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- Note: This is an experimental feature. modelSpec object ( ModelSpec ) If specified, the spec will be used to modify the model specification provided to the LLM. useSemanticChunks boolean If true, answer will be generated from most relevant chunks from top search results.
- SearchAddonSpec JSON representation { "disableSemanticAddOn" : boolean , "disableKpiPersonalizationAddOn" : boolean , "disableGenerativeAnswerAddOn" : boolean } Fields disableSemanticAddOn boolean Optional.
- Filtering in Vertex AI Search is done by mapping the LHS filter key to a key property defined in the Vertex AI Search backend -- this mapping is defined by the customer in their schema.
- An extractive segment is a text segment extracted from the original document that is relevant to the search query, and, in general, more verbose than an extractive answer.

