---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:29:37.081Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Filter search with follow-ups"
feature_slug: "filter-search-with-follow-ups"
latest_feature_date: "2023-12-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/answer"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/browse-generic-search"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/boost-search-results"
keywords:
  - "filter"
  - "search"
  - "follow"
  - "ups"
  - "vertex"
  - "ai"
  - "adds"
  - "up"
---

# Filter search with follow-ups

Product: Vertex AI Search
Coverage: MEDIUM

## Step 02 Summary

Vertex AI Search adds follow-up query filtering, allowing search results to be filtered during follow-up interactions for website and structured data.

## Extended Definition

Vertex AI Search adds follow-up query filtering, allowing search results to be filtered during follow-up interactions for website and structured data.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/browse-generic-search](https://docs.cloud.google.com/generative-ai-app-builder/docs/browse-generic-search)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/boost-search-results](https://docs.cloud.google.com/generative-ai-app-builder/docs/boost-search-results)

## Supporting Pages

### Get answers and follow-ups \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer)
- Source ID: `site-docs-reference`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- Example command and result curl -X GET -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json" "https://discoveryengine.googleapis.com/v1/projects/123456/locations/global/collections/default collection/engines/my-app/sessions?filter=userPseudoId=test user%20AND%20state=IN PROGRESS" { "sessions": [ { "name": "projects/123456/locations/global/collections/default collection/engines/my-app/sessions/16002628354770206943", "state": "IN PROGRESS", "userPseudoId": "test user", "turns": [ { "query": { "queryId": "projects/123456/locations/global/questions/741830", "text": "Compare bigquery with spanner database?" }, "answer": "projects/123456/locations/global/collections/default collection/engines/my-app/sessions/16002628354770206943/answers/4861507376861383072" } ], "startTime": "2024-09-13T18:47:10.465311Z", "endTime": "2024-09-13T18:49:41.579151Z" } ] } Python For more information, see the Vertex AI Search Python API reference documentation .
- The following command shows how to call the answer method and specify various options for how the search result is returned. (The search results are independent of the answer.) REST To set various options related to which and how search results are returned, do the following: Run the following curl command: curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/engines/ APP ID /servingConfigs/default search:answer" \ -d '{ "query": { "text": " QUERY "}, "searchSpec": { "searchParams": { "maxReturnResults": MAX RETURN RESULTS , "filter": " FILTER ", "boostSpec": BOOST SPEC , "orderBy": " ORDER BY ", "searchResultMode": SEARCH RESULT MODE } } }' Replace the following: PROJECT ID : the ID of your Google Cloud project.
- Example command and partial result curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/123456/locations/global/collections/default collection/engines/my-app/servingConfigs/default search:answer" \ -d '{ "query": { "text": "what kinds of data can I import into Vertex AI Search?"}, "session": "projects/123456/locations/global/collections/default collection/engines/my-app/sessions/10291252835232308789", "searchSpec":{ "searchParams": {"filter": ""} }, "relatedQuestionsSpec": { "enable": true } }' { "answer": { "state": "SUCCEEDED", "answerText": "You can import various kinds of data into Vertex AI Search, depending on the type of data store you create.
- Query ( text = "What is Vertex AI Search?" ), session = None , # Optional: include previous session ID to continue a conversation query understanding spec = query understanding spec , answer generation spec = answer generation spec , user pseudo id = "user-pseudo-id" , # Optional: Add user pseudo-identifier for queries. ) Make the request response = client . answer query ( request ) Handle the response print ( response ) return response Search phase commands: Search and answer with search result options This section shows how to specify options for the search phase portion of the answer method call, options such as setting the maximum number of documents returned, boosting, and filtering, and how to get an answer when you supply your own search results.

### "Get personalized browse results \_|\_ Vertex AI Search \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/browse-generic-search](https://docs.cloud.google.com/generative-ai-app-builder/docs/browse-generic-search)
- Source ID: `site-docs-reference`
- Final score: 83
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Call the engines.servingConfigs.search method with an empty query or no query as follows: REST Key Term: In Vertex AI Search, the term app can be used interchangeably with the term engine in the context of APIs. curl -X POST -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/engines/ APP ID /servingConfigs/default search:search" \ -d '{ "servingConfig": "projects/ PROJECT ID /locations/global/collections/default collection/engines/ APP ID /servingConfigs/default search", "orderBy": " ORDER BY ", "params": { "searchType": "0" }, "filter": " FILTER ", "boostSpec": " BOOST SPEC ", }' Replace the following: PROJECT ID : the ID of your Google Cloud project.
- All user events must include the following: eventType such as search for search and browse, view-item , and conversion . userPseudoId , which is a consistent pseudonymized user identifier. eventTime , which is an ISO 8601 timestamp (UTC) for when the event was recorded. documents.id shown in the order they appear to the user that matches document IDs. searchInfo.searchQuery to register the user's search query. pageInfo.pageCategory that adds a context, such as "HomepageCarousel", "Properties > VIC > Richmond". filter that describes the filter logic used to generate the impression list.
- Some important features are as follows: Ranking: The model ranks items based on predicted performance against your defined objective that's subject to the configured search parameters, such as filters, custom ranking, and serving controls (like boost, promote, or synonyms).
- Feature Search Browse Purpose Find specific information Explore and discover content Example Searching for "best Korean restaurants in Vancouver" on Google Search Browsing for a restaurant based on the categories where it might belong, such as "Restaurants > Korean > Vancouver > 4 star and above" User Intent Typically goal-oriented Exploratory Starting point A query or keyword typically in a search bar A specific website or platform typically using a menu, breadcrumbs, links, or other navigation methods like facets Method Entering keywords or phrases and applying search and serving configuration Searching with an empty query, applying search and serving configuration Results A list of relevant results All the documents in the data store that match the filters Workflow and best practices Personalized browse is a Google-managed service and Google handles the underlying deep learning models and data pipelines.

### Boost search results \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/boost-search-results](https://docs.cloud.google.com/generative-ai-app-builder/docs/boost-search-results)
- Source ID: `site-docs-reference`
- Final score: 83
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To specify a boost specification using custom numerical attributes, do the following: Specify the boost specification in the boostSpec field when you send a servingConfigs.search request. { "boostSpec": { "conditionBoostSpecs": { "condition": " BOOST CONDITION ", "boostControlSpec": { "attributeType": "NUMERICAL", "interpolationType": "LINEAR", "fieldName": " CUSTOM ATTRIBUTE FIELD NAME ", "controlPoints": [ { "attributeValue": " CUSTOM ATTRIBUTE VALUE 1 ", "boostAmount": BOOST AMOUNT 1 }, { "attributeValue": " CUSTOM ATTRIBUTE VALUE 2 ", "boostAmount": BOOST AMOUNT 2 } ] } } } } The specification contains the following parameters: BOOST CONDITION : a text filter expression to select the documents to which boost is applied.
- To specify a boost specification using custom datetime attributes, do the following: Specify the boost specification in the boostSpec field when you send a servingConfigs.search request. { "boostSpec": { "conditionBoostSpecs": { "condition": " BOOST CONDITION ", "boostControlSpec": { "fieldName": " DATETIME FIELD NAME ", "attributeType": "FRESHNESS", "interpolationType": "LINEAR", "controlPoints": [ { "attributeValue": " DURATION VALUE 1 ", "boostAmount": BOOST AMOUNT 1 }, { "attributeValue": " DURATION VALUE 2 ", "boostAmount": BOOST AMOUNT 2 } ] } } } } The specification contains the following parameters: BOOST CONDITION : a text filter expression to select the documents to which boost is applied.
- Boost with a fixed condition To boost results by a fixed amount based on whether they satisfy a condition, do the following: Specify the boost specification in the boostSpec field when you send a servingConfigs.search request. { "boostSpec": { "conditionBoostSpecs": { "condition": " BOOST CONDITION ", "boost": BOOST VALUE } } } The specification contains the following parameters: BOOST CONDITION : a text filter expression to select the documents to which boost is applied.
- Document Published date Relevance Ranking A Feb 1, 2024 High #1 B Mar 1, 2024 High #2 C Apr 1, 2024 Lowest #3 D May 1, 2024 Medium #4 E Jun 1, 2024 Low #5 On Jun 6, 2024, you add the following search conditions in your search request: Relevance filter set to LOW .

