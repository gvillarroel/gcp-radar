---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:30:14.847Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Vertex AI Search answer responses with corpus images"
feature_slug: "vertex-ai-search-answer-responses-with-corpus-images"
latest_feature_date: "2025-03-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/answer"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/about-generic-search"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-widget-attributes"
keywords:
  - "vertex"
  - "ai"
  - "search"
  - "answer"
  - "responses"
  - "with"
  - "corpus"
  - "images"
---

# Vertex AI Search answer responses with corpus images

Product: Vertex AI Search
Coverage: LOW

## Step 02 Summary

In Public Preview, Vertex AI Search answer and follow-up responses can include a retrieved image from the data store for applicable unstructured data store queries using the layout parser via API.

## Extended Definition

In Public Preview, Vertex AI Search answer and follow-up responses can include a retrieved image from the data store for applicable unstructured data store queries using the layout parser via API.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis](https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/about-generic-search](https://docs.cloud.google.com/generative-ai-app-builder/docs/about-generic-search)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-widget-attributes](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-widget-attributes)

## Supporting Pages

### Get answers and follow-ups \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer)
- Source ID: `site-api-reference`
- Final score: 242
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Example command and result curl -X GET -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json" "https://discoveryengine.googleapis.com/v1/projects/123456/locations/global/collections/default collection/engines/my-app/sessions?filter=userPseudoId=test user%20AND%20state=IN PROGRESS" { "sessions": [ { "name": "projects/123456/locations/global/collections/default collection/engines/my-app/sessions/16002628354770206943", "state": "IN PROGRESS", "userPseudoId": "test user", "turns": [ { "query": { "queryId": "projects/123456/locations/global/questions/741830", "text": "Compare bigquery with spanner database?" }, "answer": "projects/123456/locations/global/collections/default collection/engines/my-app/sessions/16002628354770206943/answers/4861507376861383072" } ], "startTime": "2024-09-13T18:47:10.465311Z", "endTime": "2024-09-13T18:49:41.579151Z" } ] } Python For more information, see the Vertex AI Search Python API reference documentation .
- Query ( text = "What is Vertex AI Search?" ), session = None , # Optional: include previous session ID to continue a conversation query understanding spec = query understanding spec , answer generation spec = answer generation spec , user pseudo id = "user-pseudo-id" , # Optional: Add user pseudo-identifier for queries. ) Make the request response = client . answer query ( request ) Handle the response print ( response ) return response Search phase commands: Search and answer with search result options This section shows how to specify options for the search phase portion of the answer method call, options such as setting the maximum number of documents returned, boosting, and filtering, and how to get an answer when you supply your own search results.
- Query ( text = "What is Vertex AI Search?" ), session = None , # Optional: include previous session ID to continue a conversation query understanding spec = query understanding spec , answer generation spec = answer generation spec , user pseudo id = "user-pseudo-id" , # Optional: Add user pseudo-identifier for queries. ) Make the request response = client . answer query ( request ) Handle the response print ( response ) return response Search and answer with query classification The following command shows how to call the answer method to inquire whether a query is adversarial, non-answer seeking, or neither.
- Home Documentation AI and ML Vertex AI Search Send feedback Get answers and follow-ups Stay organized with collections Save and categorize content based on your preferences.

### "Vertex AI APIs for building search and RAG experiences \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis](https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis)
- Source ID: `site-api-reference`
- Final score: 228
- Re-rank relevance: N/A

Evidence snippets:
- Vertex AI Search works as an out-of-the-box semantic & keyword search engine for RAG with the ability to process a variety of document types and with connectors to a variety of source systems including BigQuery and many third party systems.
- Vertex AI Vector Search is a retrieval engine that can search from billions of semantically similar or semantically related items at scale, with high queries per second (QPS), high recall, low latency, and cost efficiency.
- Home Documentation AI and ML Vertex AI Search Send feedback Vertex AI APIs for building search and RAG experiences Stay organized with collections Save and categorize content based on your preferences.
- For more information, see Grounding with Google Search in the Generative AI on Vertex AI documentation.

### "Introduction to custom search \_|\_ Vertex AI Search \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/about-generic-search](https://docs.cloud.google.com/generative-ai-app-builder/docs/about-generic-search)
- Source ID: `site-api-reference`
- Final score: 208
- Re-rank relevance: N/A

Evidence snippets:
- Data ingestion : Vertex AI Search offers different types of ingestion for data from different sources, such as: Crawling for website data Ingesting structured and unstructured data from Cloud Storage and BigQuery or through the REST API Search and browse configuration : Field settings : Control how fields are configured for search and answer generation, such as searchable, retrievable, or indexable.
- Key capabilities The key capabilities of Vertex AI Search are as follows: High-quality search: Leverages Google's search expertise to understand user intent, even with complex queries and natural language queries.
- Home Documentation AI and ML Vertex AI Search Send feedback Introduction to custom search Stay organized with collections Save and categorize content based on your preferences.
- The page also provides links to the available features, tutorials, and checklists, to get you started with Vertex AI Search for custom apps.

### "Configure results for the search widget \_|\_ Vertex AI Search \_|\_ Google\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-widget-attributes](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-widget-attributes)
- Source ID: `site-api-reference`
- Final score: 200
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Configure search results for unstructured or website data The search widget for unstructured and website data offers the following search customizations: Search (single-turn) Search with an answer (single-turn search with summarization) Search with follow-ups (multi-turn search) For search with an answer and search with follow-ups, you need turn on some advanced settings: For search apps with unstructured data: Generative responses For website search apps: Generative responses and Advanced website indexing To configure how the widget displays search results for unstructured data: In the Google Cloud console, go to the AI Applications page.
- Image in answers : This feature returns the following kinds of images with the answers: Charts generated from information in the answer Images selected from an unstructured data store that a layout parser parses Use this feature with Search with an answer or Search with follow-ups and the stable large language model or any Gemini model 2.0 or later.
- In the Search type list, select one of the following: Search : to perform a single-turn search Search with an answer : to perform a single-turn search with a generative AI generated answer If you selected Search with an answer , in the Large language models for summarization section, select one of the models that is supported for healthcare.
- Configure search results for healthcare data The search widget for healthcare data offers the following search customizations: Search Search with an answer For search with an answer, turn on the Generative responses option.

