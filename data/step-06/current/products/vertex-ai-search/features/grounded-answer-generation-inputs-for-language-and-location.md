---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:30:14.856Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Grounded answer generation inputs for language and location"
feature_slug: "grounded-answer-generation-inputs-for-language-and-location"
latest_feature_date: "2024-12-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/answer"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/answer-generation-models"
keywords:
  - "grounded"
  - "answer"
  - "generation"
  - "inputs"
  - "for"
  - "language"
  - "and"
  - "location"
---

# Grounded answer generation inputs for language and location

Product: Vertex AI Search
Coverage: LOW

## Step 02 Summary

The Agent Builder grounded generation API now accepts an explicit language code and latitude/longitude values to localize answers and support location-based queries.

## Extended Definition

The Agent Builder grounded generation API now accepts an explicit language code and latitude/longitude values to localize answers and support location-based queries.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis](https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer-generation-models](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer-generation-models)

## Supporting Pages

### Get answers and follow-ups \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer)
- Source ID: `site-api-reference`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- Example command and partial result curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/my-project-123/locations/global/collections/default collection/engines/my-app/servingConfigs/default search:answer" \ -d '{"query": { "text": "What is SQL"}, "answerGenerationSpec": { "includeCitations": true } }' { "answer": { "state": "SUCCEEDED", "answerText": "SQL stands for Structured Query Language and is a programming language used to manage, query, and retrieve data in a relational database.
- Example command and partial result curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/123456/locations/global/collections/default collection/engines/my-app/servingConfigs/default search:answer" \ -d '{ "query": { "text": "When can an NCD be made?"}, "groundingSpec": { "filtering level": "FILTERING LEVEL HIGH" } }' { answer { state: SUCCEEDED answer text: "We do not have a summary for your query." steps { state: SUCCEEDED description: "Rephrase the query and search." actions { search action { query: "test?" } observation { search results { document: "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/f7f5cfde02" uri: "gs://my-bucket-123/data/CoverageDocumentation.pdf" title: "ABC345 0101" chunk info { content: "This notice implements part of section 731 of the Medicare Prescription Drug, Improvement, and Modernization Act of 2003 by describing a method of developing, and making available to the public, guidance documents under the Medicare program… " } ... search results { document: "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/f7f5cfde02" uri: "gs://my-bucket-123/data/CoverageDocumentation.pdf" title: "ABC345 0101" chunk info { content: "For the purposes of this notice, the term guidance documents means documents prepared for our staff, potential requestors of National Coverage Determinations, and other interested parties explaining the NCD process… " } } } } } answer skipped reasons: LOW GROUNDED CONTENT } In this example, no answer is returned because the high threshold wasn't met.
- Example command and result curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/my-project-123/locations/global/collections/default collection/engines/my-app/servingConfigs/default search:answer" \ -d '{"query": { "text": "foobar"}, "answerGenerationSpec": { "ignoreLowRelevantContent": true } }' { "answer": { "state": "SUCCEEDED", "answerText": "We do not have a summary for your query.", "steps": [ { "state": "SUCCEEDED", "description": "Rephrase the query and search.", "actions": [ { "searchAction": { "query": "foobar" }, "observation": { "searchResults": [ { "document": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/719b79786f0c143717c569eade5305d9", "uri": "https://support.google.com/websearch/thread/261714267/google-foobar-bug-console-disappeared?hl=en", "title": "Google Foobar Bug - Console Disappeared", "snippetInfo": [ { "snippet": "Google \u003cb\u003eFoobar\u003c/b\u003e Bug - Console Disappeared.
- Example command and partial result curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1beta/projects/my-project-123/locations/global/collections/default collection/engines/my-app/servingConfigs/default search:answer" \ -d '{ "query": { "text": "Plot composition of net cash used in investing activities"}, "answerGenerationSpec": { "model spec": { "model version": "gemini-2.0-flash-001/answer gen/v1" }, "multimodalSpec": { "image source": "FIGURE GENERATION ONLY" } } }' { "answer": { "state": "SUCCEEDED", "answerText": "The composition of net cash used in investing activities for the nine months ended September 30, 2020 and 2019 includes several categories.

### "Vertex AI APIs for building search and RAG experiences \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis](https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis)
- Source ID: `site-api-reference`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- Retrieval and generation RAG is a methodology that enables Large Language Models (LLMs) to generate responses that are grounded to your data source of choice.
- Generation Choose the best generation method for your needs: Ground with your data : Generate well-grounded answers to a user's query.
- The grounded generation API uses specialized, fine-tuned Gemini models and is an effective way to reduce hallucinations and provide responses grounded to your sources or third-party sources including references to grounding support content.
- Compared to embeddings that look purely at the semantic similarity of a document and a query, the ranking API can give you a more precise score for how well a document answers a given query.

### "MCP Tools Reference: discoveryengine.googleapis.com \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search)
- Source ID: `site-docs-reference-2`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- AnswerGenerationSpec JSON representation { "modelSpec" : { object ( ModelSpec ) } , "promptSpec" : { object ( PromptSpec ) } , "includeCitations" : boolean , "answerLanguageCode" : string , "ignoreAdversarialQuery" : boolean , "ignoreNonAnswerSeekingQuery" : boolean , "ignoreJailBreakingQuery" : boolean , "multimodalSpec" : { object ( MultimodalSpec ) } , // Union field ignore low relevant content can be only one of the following: "ignoreLowRelevantContent" : boolean // End of list of possible types for union field ignore low relevant content . } Fields modelSpec object ( ModelSpec ) Answer generation model specification. promptSpec object ( PromptSpec ) Answer generation prompt specification. includeCitations boolean Specifies whether to include citation metadata in the answer.
- Format: projects/{project}/locations/{location}/collections/{collection}/engines/{engine}/sessions/{session}/assistAnswers/{assist answer} This field must be a UTF-8 encoded string with a length limit of 1024 characters. state enum ( State ) State of the answer generation. replies[] object ( Reply ) Replies of the assistant. assistSkippedReasons[] enum ( AssistSkippedReason ) Reasons for not answering the assist call. customerPolicyEnforcementResult object ( CustomerPolicyEnforcementResult ) Optional.
- Grounding supports. references[] object ( Reference ) References. blobAttachments[] object ( BlobAttachment ) List of blob attachments in the answer. relatedQuestions[] string Suggested related questions. steps[] object ( Step ) Answer generation steps. queryUnderstandingInfo object ( QueryUnderstandingInfo ) Query understanding information. answerSkippedReasons[] enum ( AnswerSkippedReason ) Additional answer-skipped reasons.
- Answer JSON representation { "name" : string , "state" : enum ( State ) , "answerText" : string , "citations" : [ { object ( Citation ) } ] , "groundingSupports" : [ { object ( GroundingSupport ) } ] , "references" : [ { object ( Reference ) } ] , "blobAttachments" : [ { object ( BlobAttachment ) } ] , "relatedQuestions" : [ string ] , "steps" : [ { object ( Step ) } ] , "queryUnderstandingInfo" : { object ( QueryUnderstandingInfo ) } , "answerSkippedReasons" : [ enum ( AnswerSkippedReason ) ] , "createTime" : string , "completeTime" : string , "safetyRatings" : [ { object ( SafetyRating ) } ] , // Union field grounding score can be only one of the following: "groundingScore" : number // End of list of possible types for union field grounding score . } Fields name string Immutable.

### "Answer generation model versions and lifecycle \_|\_ Vertex AI Search \_\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer-generation-models](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer-generation-models)
- Source ID: `site-api-reference`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- Available models Vertex AI Search uses two types of models for question and answering use cases: Vertex AI LLM models that have been tested on question and answering tasks Vertex AI Search models that are based on Vertex AI LLM models and further trained to address question and answering tasks Vertex AI Search models share the same discontinuation date as their base Vertex AI LLM models.
- Home Documentation AI and ML Vertex AI Search Send feedback Answer generation model versions and lifecycle Stay organized with collections Save and categorize content based on your preferences.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- Vertex AI Search offers multiple model versions for you to choose when generating answers.

