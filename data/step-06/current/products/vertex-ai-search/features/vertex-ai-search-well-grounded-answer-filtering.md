---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:29:36.952Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Vertex AI Search well-grounded answer filtering"
feature_slug: "vertex-ai-search-well-grounded-answer-filtering"
latest_feature_date: "2024-10-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/answer"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis"
keywords:
  - "vertex"
  - "ai"
  - "search"
  - "well"
  - "grounded"
  - "answer"
  - "filtering"
  - "can"
---

# Vertex AI Search well-grounded answer filtering

Product: Vertex AI Search
Coverage: MEDIUM

## Step 02 Summary

Vertex AI Search can return only well-grounded answers using configurable grounding-score filters to suppress poorly grounded responses, with options for stricter or more inclusive answer selection.

## Extended Definition

Vertex AI Search can return only well-grounded answers using configurable grounding-score filters to suppress poorly grounded responses, with options for stricter or more inclusive answer selection.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis](https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis)

## Supporting Pages

### Get answers and follow-ups \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer)
- Source ID: `site-docs-reference`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- Example command and partial result curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/123456/locations/global/collections/default collection/engines/my-app/servingConfigs/default search:answer" \ -d '{ "query": { "text": "When can an NCD be made?"}, "groundingSpec": { "filtering level": "FILTERING LEVEL HIGH" } }' { answer { state: SUCCEEDED answer text: "We do not have a summary for your query." steps { state: SUCCEEDED description: "Rephrase the query and search." actions { search action { query: "test?" } observation { search results { document: "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/f7f5cfde02" uri: "gs://my-bucket-123/data/CoverageDocumentation.pdf" title: "ABC345 0101" chunk info { content: "This notice implements part of section 731 of the Medicare Prescription Drug, Improvement, and Modernization Act of 2003 by describing a method of developing, and making available to the public, guidance documents under the Medicare program… " } ... search results { document: "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/f7f5cfde02" uri: "gs://my-bucket-123/data/CoverageDocumentation.pdf" title: "ABC345 0101" chunk info { content: "For the purposes of this notice, the term guidance documents means documents prepared for our staff, potential requestors of National Coverage Determinations, and other interested parties explaining the NCD process… " } } } } } answer skipped reasons: LOW GROUNDED CONTENT } In this example, no answer is returned because the high threshold wasn't met.
- Query ( text = "What is Vertex AI Search?" ), session = None , # Optional: include previous session ID to continue a conversation query understanding spec = query understanding spec , answer generation spec = answer generation spec , user pseudo id = "user-pseudo-id" , # Optional: Add user pseudo-identifier for queries. ) Make the request response = client . answer query ( request ) Handle the response print ( response ) return response Search phase commands: Search and answer with search result options This section shows how to specify options for the search phase portion of the answer method call, options such as setting the maximum number of documents returned, boosting, and filtering, and how to get an answer when you supply your own search results.
- Example command and result curl -X GET -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json" "https://discoveryengine.googleapis.com/v1/projects/123456/locations/global/collections/default collection/engines/my-app/sessions?filter=userPseudoId=test user%20AND%20state=IN PROGRESS" { "sessions": [ { "name": "projects/123456/locations/global/collections/default collection/engines/my-app/sessions/16002628354770206943", "state": "IN PROGRESS", "userPseudoId": "test user", "turns": [ { "query": { "queryId": "projects/123456/locations/global/questions/741830", "text": "Compare bigquery with spanner database?" }, "answer": "projects/123456/locations/global/collections/default collection/engines/my-app/sessions/16002628354770206943/answers/4861507376861383072" } ], "startTime": "2024-09-13T18:47:10.465311Z", "endTime": "2024-09-13T18:49:41.579151Z" } ] } Python For more information, see the Vertex AI Search Python API reference documentation .
- Example command and partial result curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/123456/locations/global/collections/default collection/engines/my-app/servingConfigs/default search:answer" \ -d '{ "query": { "text": "what kinds of data can I import into Vertex AI Search?"}, "session": "projects/123456/locations/global/collections/default collection/engines/my-app/sessions/10291252835232308789", "searchSpec":{ "searchParams": {"filter": ""} }, "relatedQuestionsSpec": { "enable": true } }' { "answer": { "state": "SUCCEEDED", "answerText": "You can import various kinds of data into Vertex AI Search, depending on the type of data store you create.

### "MCP Tools Reference: discoveryengine.googleapis.com \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search)
- Source ID: `site-docs-reference-2`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- In this case the filter would look like this: filter --> name:'ANY("king kong")' For more information about filtering including syntax and filter operators, see Filter boostSpec object ( BoostSpec ) Boost specification to boost certain documents in search results which may affect the answer query response.
- Filtering in Vertex AI Search is done by mapping the LHS filter key to a key property defined in the Vertex AI Search backend -- this mapping is defined by the customer in their schema.
- AnswerQueryRequest JSON representation { "servingConfig" : string , "query" : { object ( Query ) } , "session" : string , "safetySpec" : { object ( SafetySpec ) } , "relatedQuestionsSpec" : { object ( RelatedQuestionsSpec ) } , "groundingSpec" : { object ( GroundingSpec ) } , "answerGenerationSpec" : { object ( AnswerGenerationSpec ) } , "searchSpec" : { object ( SearchSpec ) } , "queryUnderstandingSpec" : { object ( QueryUnderstandingSpec ) } , "asynchronousMode" : boolean , "userPseudoId" : string , "userLabels" : { string : string , ... } , "endUserSpec" : { object ( EndUserSpec ) } } Fields servingConfig string Required.
- Curl Request curl --location 'https://discoveryengine.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "conversational search", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema Request message for ConversationalSearchService.AnswerQuery method.

### "Vertex AI APIs for building search and RAG experiences \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis](https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis)
- Source ID: `site-docs-reference`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- Generation Choose the best generation method for your needs: Ground with your data : Generate well-grounded answers to a user's query.
- Use the grounded generation API to generate well-grounded answers to a user's prompt.
- Use the generate content API to generate well-grounded answers to a user's prompt.
- Vertex AI Search works as an out-of-the-box semantic & keyword search engine for RAG with the ability to process a variety of document types and with connectors to a variety of source systems including BigQuery and many third party systems.

