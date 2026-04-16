---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:29:36.940Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Grounded answer generation inputs for language and location"
feature_slug: "grounded-answer-generation-inputs-for-language-and-location"
latest_feature_date: "2024-12-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/answer"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis"
keywords:
  - "grounded"
  - "answer"
  - "generation"
  - "inputs"
  - "language"
  - "location"
  - "agent"
  - "builder"
---

# Grounded answer generation inputs for language and location

Product: Vertex AI Search
Coverage: MEDIUM

## Step 02 Summary

The Agent Builder grounded generation API now accepts an explicit language code and latitude/longitude values to localize answers and support location-based queries.

## Extended Definition

The Agent Builder grounded generation API now accepts an explicit language code and latitude/longitude values to localize answers and support location-based queries.

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
- Final score: 217
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example command and result curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/my-project-123/locations/global/collections/default collection/engines/my-app/servingConfigs/default search:answer" \ -d '{"query": { "text": "What is SQL"}, "answerGenerationSpec": { "answerLanguageCode": "es" } }' { "answer": { "state": "SUCCEEDED", "answerText": "SQL, que significa Structured Query Language, es un lenguaje de programación utilizado para almacenar, recuperar y administrar datos en una base de datos relacional.
- Example command and partial result curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/my-project-123/locations/global/collections/default collection/engines/my-app/servingConfigs/default search:answer" \ -d '{"query": { "text": "What is SQL"}, "answerGenerationSpec": { "includeCitations": true } }' { "answer": { "state": "SUCCEEDED", "answerText": "SQL stands for Structured Query Language and is a programming language used to manage, query, and retrieve data in a relational database.
- REST To generate an answer using a model different from the default model, do the following: Run the following curl command: curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/engines/ APP ID /servingConfigs/default search:answer" \ -d '{ "query": { "text": " QUERY "}, "answerGenerationSpec": { "answerLanguageCode": " ANSWER LANGUAGE CODE " } }' Replace the following: PROJECT ID : the ID of your Google Cloud project.
- Example command and partial result curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/123456/locations/global/collections/default collection/engines/my-app/servingConfigs/default search:answer" \ -d '{ "query": { "text": "When can an NCD be made?"}, "groundingSpec": { "filtering level": "FILTERING LEVEL HIGH" } }' { answer { state: SUCCEEDED answer text: "We do not have a summary for your query." steps { state: SUCCEEDED description: "Rephrase the query and search." actions { search action { query: "test?" } observation { search results { document: "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/f7f5cfde02" uri: "gs://my-bucket-123/data/CoverageDocumentation.pdf" title: "ABC345 0101" chunk info { content: "This notice implements part of section 731 of the Medicare Prescription Drug, Improvement, and Modernization Act of 2003 by describing a method of developing, and making available to the public, guidance documents under the Medicare program… " } ... search results { document: "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/f7f5cfde02" uri: "gs://my-bucket-123/data/CoverageDocumentation.pdf" title: "ABC345 0101" chunk info { content: "For the purposes of this notice, the term guidance documents means documents prepared for our staff, potential requestors of National Coverage Determinations, and other interested parties explaining the NCD process… " } } } } } answer skipped reasons: LOW GROUNDED CONTENT } In this example, no answer is returned because the high threshold wasn't met.

### "MCP Tools Reference: discoveryengine.googleapis.com \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search)
- Source ID: `site-docs-reference-2`
- Final score: 163
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- AnswerGenerationSpec JSON representation { "modelSpec" : { object ( ModelSpec ) } , "promptSpec" : { object ( PromptSpec ) } , "includeCitations" : boolean , "answerLanguageCode" : string , "ignoreAdversarialQuery" : boolean , "ignoreNonAnswerSeekingQuery" : boolean , "ignoreJailBreakingQuery" : boolean , "multimodalSpec" : { object ( MultimodalSpec ) } , // Union field ignore low relevant content can be only one of the following: "ignoreLowRelevantContent" : boolean // End of list of possible types for union field ignore low relevant content . } Fields modelSpec object ( ModelSpec ) Answer generation model specification. promptSpec object ( PromptSpec ) Answer generation prompt specification. includeCitations boolean Specifies whether to include citation metadata in the answer.
- Format: projects/{project}/locations/{location}/collections/{collection}/engines/{engine}/sessions/{session}/assistAnswers/{assist answer} This field must be a UTF-8 encoded string with a length limit of 1024 characters. state enum ( State ) State of the answer generation. replies[] object ( Reply ) Replies of the assistant. assistSkippedReasons[] enum ( AssistSkippedReason ) Reasons for not answering the assist call. customerPolicyEnforcementResult object ( CustomerPolicyEnforcementResult ) Optional.
- Fully qualified name projects/{project}/locations/global/collections/{collection}/engines/{engine}/sessions/ /answers/ state enum ( State ) The state of the answer generation. answerText string The textual answer. citations[] object ( Citation ) Citations. groundingSupports[] object ( GroundingSupport ) Optional.
- AnswerQueryRequest JSON representation { "servingConfig" : string , "query" : { object ( Query ) } , "session" : string , "safetySpec" : { object ( SafetySpec ) } , "relatedQuestionsSpec" : { object ( RelatedQuestionsSpec ) } , "groundingSpec" : { object ( GroundingSpec ) } , "answerGenerationSpec" : { object ( AnswerGenerationSpec ) } , "searchSpec" : { object ( SearchSpec ) } , "queryUnderstandingSpec" : { object ( QueryUnderstandingSpec ) } , "asynchronousMode" : boolean , "userPseudoId" : string , "userLabels" : { string : string , ... } , "endUserSpec" : { object ( EndUserSpec ) } } Fields servingConfig string Required.

### "Vertex AI APIs for building search and RAG experiences \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis](https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis)
- Source ID: `site-docs-reference`
- Final score: 156
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Retrieval and generation RAG is a methodology that enables Large Language Models (LLMs) to generate responses that are grounded to your data source of choice.
- Generation Choose the best generation method for your needs: Ground with your data : Generate well-grounded answers to a user's query.
- Generate grounded answers based on the top-ranked chunks using the grounded generation API or using the generate content API .
- Use the grounded generation API to generate well-grounded answers to a user's prompt.

