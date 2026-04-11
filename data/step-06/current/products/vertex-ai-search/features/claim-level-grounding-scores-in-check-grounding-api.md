---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:30:14.845Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Claim-level grounding scores in Check Grounding API"
feature_slug: "claim-level-grounding-scores-in-check-grounding-api"
latest_feature_date: "2025-04-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/check-grounding"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/answer"
keywords:
  - "claim"
  - "level"
  - "grounding"
  - "scores"
  - "in"
  - "check"
  - "api"
  - "vertex"
---

# Claim-level grounding scores in Check Grounding API

Product: Vertex AI Search
Coverage: LOW

## Step 02 Summary

Vertex AI Search added Generally Available claim-level grounding scores from the Check Grounding API, returning a support score for each claim in an answer candidate.

## Extended Definition

Vertex AI Search added Generally Available claim-level grounding scores from the Check Grounding API, returning a support score for each claim in an answer candidate.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/check-grounding](https://docs.cloud.google.com/generative-ai-app-builder/docs/check-grounding)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis](https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer)

## Supporting Pages

### Check grounding with RAG \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/check-grounding](https://docs.cloud.google.com/generative-ai-app-builder/docs/check-grounding)
- Source ID: `site-api-reference`
- Final score: 252
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Call the check method, using the following curl command: curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/groundingConfigs/default grounding config:check" \ -d '{ "answerCandidate": " CANDIDATE ", "facts": [ { "factText": " TEXT 0 ", "attributes": {" ATTRIBUTE A ": " VALUE A0 "," ATTRIBUTE B ": " VALUE B0 "} }, { "factText": " TEXT 1 ", "attributes": {" ATTRIBUTE A ": " VALUE A1 "," ATTRIBUTE B ": " VALUE B1 "} }, { "factText": " TEXT 2 ", "attributes": {" ATTRIBUTE A ": " VALUE A2 "," ATTRIBUTE B ": " VALUE B2 "} }, ], "groundingSpec": { "citationThreshold": " CITATION THRESHOLD ", "enableClaimLevelScore": " ENABLE CLAIM LEVEL SCORE ", } }' Replace the following: PROJECT ID : the project number or ID of your Google Cloud project.
- Replace the CANDIDATE field with different strings whose per-claim grounding you want to check. curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/groundingConfigs/default grounding config:check" \ -d '{ "answerCandidate": " CANDIDATE ", "facts": [ { "factText": "Titanic is a 1997 American epic romantic disaster movie.
- In this version of the check grounding API, a sentence is considered a single claim.
- Call the check method using the following code: REST curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ -H "X-Goog-User-Project: PROJECT ID " \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/groundingConfigs/default grounding config:check" \ -d '{ "answerCandidate": " CANDIDATE ", "facts": [ { "factText": " TEXT 0 ", "attributes": {" ATTRIBUTE A ": " VALUE A0 "," ATTRIBUTE B ": " VALUE B0 "} }, { "factText": " TEXT 1 ", "attributes": {" ATTRIBUTE A ": " VALUE A1 "," ATTRIBUTE B ": " VALUE B1 "} }, { "factText": " TEXT 2 ", "attributes": {" ATTRIBUTE A ": " VALUE A2 "," ATTRIBUTE B ": " VALUE B2 "} } ], "groundingSpec": { "citationThreshold": " CITATION THRESHOLD " } }' Replace the following: PROJECT ID : the project number or ID of your Google Cloud project.

### "MCP Tools Reference: discoveryengine.googleapis.com \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search)
- Source ID: `site-docs-reference-2`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- Union field grounding check required . grounding check required can be only one of the following: groundingCheckRequired boolean Indicates that this claim required grounding check.
- When this field is set to true , returned answer will have grounding score and will contain GroundingSupports for each claim. filteringLevel enum ( FilteringLevel ) Optional.
- In that case, no grounding check was done for the claim and therefore grounding score , sources is not returned.
- When the system decided this claim didn't require attribution/grounding check, this field is set to false.

### "Vertex AI APIs for building search and RAG experiences \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis](https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis)
- Source ID: `site-api-reference`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- Using these lower-level APIs gives you full flexibility on the design of your retriever while at the same time offering accelerated time to market and high quality by relying on lower-level Vertex AI APIs.
- Using those APIs gives you full flexibility on the design of your RAG application while at the same time offering accelerated time to market and high quality by relying on these lower-level Vertex AI APIs.
- The check grounding API determines how grounded a given piece of text is in a given set of reference texts.
- The grounded generation API uses specialized, fine-tuned Gemini models and is an effective way to reduce hallucinations and provide responses grounded to your sources or third-party sources including references to grounding support content.

### Get answers and follow-ups \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer)
- Source ID: `site-api-reference`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- Query ( text = "What is Vertex AI Search?" ), session = None , # Optional: include previous session ID to continue a conversation query understanding spec = query understanding spec , answer generation spec = answer generation spec , user pseudo id = "user-pseudo-id" , # Optional: Add user pseudo-identifier for queries. ) Make the request response = client . answer query ( request ) Handle the response print ( response ) return response Return grounding support scores The following command shows how to return grounding support scores for answers and claims.
- Example command and partial result curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/123456/locations/global/collections/default collection/engines/my-app/servingConfigs/default search:answer" \ -d '{ "query": { "text": "When can an NCD be made?"}, "groundingSpec": { "filtering level": "FILTERING LEVEL HIGH" } }' { answer { state: SUCCEEDED answer text: "We do not have a summary for your query." steps { state: SUCCEEDED description: "Rephrase the query and search." actions { search action { query: "test?" } observation { search results { document: "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/f7f5cfde02" uri: "gs://my-bucket-123/data/CoverageDocumentation.pdf" title: "ABC345 0101" chunk info { content: "This notice implements part of section 731 of the Medicare Prescription Drug, Improvement, and Modernization Act of 2003 by describing a method of developing, and making available to the public, guidance documents under the Medicare program… " } ... search results { document: "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/f7f5cfde02" uri: "gs://my-bucket-123/data/CoverageDocumentation.pdf" title: "ABC345 0101" chunk info { content: "For the purposes of this notice, the term guidance documents means documents prepared for our staff, potential requestors of National Coverage Determinations, and other interested parties explaining the NCD process… " } } } } } answer skipped reasons: LOW GROUNDED CONTENT } In this example, no answer is returned because the high threshold wasn't met.
- REST To return a support score for each claim (sentence in the answer) and an aggregated support score for the answer, do the following: Run the following curl command: curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/engines/ APP ID /servingConfigs/default search:answer" \ -d '{ "query": { "text": " QUERY "}, "groundingSpec": { "includeGroundingSupports": true, } }' Replace the following: PROJECT ID : the ID of your Google Cloud project.
- REST To return an answer only if it meets a support-score threshold, do the following: Run the following curl command: curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/engines/ APP ID /servingConfigs/default search:answer" \ -d '{ "query": { "text": " QUERY "}, "groundingSpec": { "filteringLevel": " FILTER LEVEL " } }' Replace the following: PROJECT ID : the ID of your Google Cloud project.

