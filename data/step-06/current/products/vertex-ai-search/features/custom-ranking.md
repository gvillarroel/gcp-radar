---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:30:14.839Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Custom ranking"
feature_slug: "custom-ranking"
latest_feature_date: "2025-08-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/custom-ranking"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/about-generic-search"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/boost-search-results"
keywords:
  - "custom"
  - "ranking"
  - "vertex"
  - "ai"
  - "search"
  - "enables"
  - "results"
  - "using"
---

# Custom ranking

Product: Vertex AI Search
Coverage: LOW

## Step 02 Summary

Vertex AI Search custom ranking enables ranking search results using mathematical expressions over model signals and document fields.

## Extended Definition

Vertex AI Search custom ranking enables ranking search results using mathematical expressions over model signals and document fields.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/custom-ranking](https://docs.cloud.google.com/generative-ai-app-builder/docs/custom-ranking)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results](https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/about-generic-search](https://docs.cloud.google.com/generative-ai-app-builder/docs/about-generic-search)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/boost-search-results](https://docs.cloud.google.com/generative-ai-app-builder/docs/boost-search-results)

## Supporting Pages

### "Customize search results ranking \_|\_ Vertex AI Search \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/custom-ranking](https://docs.cloud.google.com/generative-ai-app-builder/docs/custom-ranking)
- Source ID: `site-docs-root`
- Final score: 290
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Text fields for keyword similarity In structured data stores, to obtain the keywordSimilarityScore signal in your search response, you must update your schema to do the following: Map the text fields essential for keyword matching to the key properties title and description Update the annotation for the text fields as Searchable Customize ranking using ranking formula in search To customize the ranking for your documents in your search results, manually draft a formula and add it to your search API call.
- Home Documentation AI and ML Vertex AI Search Send feedback Customize search results ranking Stay organized with collections Save and categorize content based on your preferences.
- To see an example of custom ranking using a tuned formula, run the "Custom ranking tuning" notebook in one of the following environments: Open in Colab View on GitHub Convert the formula from the training results into a ranking expression, which you can then use in your API calls.
- With custom ranking, you can achieve the following: Gain visibility : Understand which signals contribute to the final ranking of your search results.

### Get search results \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results](https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results)
- Source ID: `site-iam-reference`
- Final score: 246
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Run the following curl command to get search results: Key Term: In Vertex AI Search, the term app can be used interchangeably with the term engine in the context of APIs. curl -X POST -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/engines/ APP ID /servingConfigs/default search:searchLite?key= API KEY " \ -d '{ "servingConfig": "projects/ PROJECT ID /locations/global/collections/default collection/engines/ APP ID /servingConfigs/default search", "query": " QUERY ", "userPseudoId": " USER PSEUDO ID " }' Replace the following: PROJECT ID : the ID of your Google Cloud project.
- In this example response, the color green was used to refine search results by issuing a new search request with the filter field specified as gs.color: ANY("green") : { "guidedSearchResult" : { "refinementAttributes" : [ { "attributeKey" : " gs.color" , "attributeValue" : "green" }, { "attributeKey" : " gs.category" , "attributeValue" : "shoe" } ] } } C# For more information, see the Vertex AI Search C# API reference documentation .
- AUTO ), Optional: Use fine-tuned model for this request custom fine tuning spec=discoveryengine.CustomFineTuningSpec( enable search adaptor=True ), ) page result = client . search ( request ) Handle the response for response in page result : print ( response ) return page result Ruby For more information, see the Vertex AI Search Ruby API reference documentation .
- AUTO ), Optional: Use fine-tuned model for this request custom fine tuning spec=discoveryengine.CustomFineTuningSpec( enable search adaptor=True ), ) page result = client . search ( request ) Handle the response for response in page result : print ( response ) return page result Ruby For more information, see the Vertex AI Search Ruby API reference documentation .

### "Introduction to custom search \_|\_ Vertex AI Search \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/about-generic-search](https://docs.cloud.google.com/generative-ai-app-builder/docs/about-generic-search)
- Source ID: `site-api-reference`
- Final score: 238
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Retrieval and ranking: There are several sub-components to retrieval and ranking of results: Query understanding for search: Vertex AI Search analyzes a search query using the following: Natural language processing: To understand the intent.
- Ranking: Vertex AI Search ranks the results based on the following factors: Relevance: A combination of keyword and semantic matching during search.
- Different components of custom search The components of Vertex AI Search for custom search can be explained as follows: Data store : Your content from different data sources is stored in a Vertex AI Search data store.
- Vertex AI Search for custom apps is a powerful, Google-quality search and content discovery engine that you can integrate into your applications that contain website data and other structured or unstructured data.

### Boost search results \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/boost-search-results](https://docs.cloud.google.com/generative-ai-app-builder/docs/boost-search-results)
- Source ID: `site-api-reference`
- Final score: 238
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To specify a boost specification using custom numerical attributes, do the following: Specify the boost specification in the boostSpec field when you send a servingConfigs.search request. { "boostSpec": { "conditionBoostSpecs": { "condition": " BOOST CONDITION ", "boostControlSpec": { "attributeType": "NUMERICAL", "interpolationType": "LINEAR", "fieldName": " CUSTOM ATTRIBUTE FIELD NAME ", "controlPoints": [ { "attributeValue": " CUSTOM ATTRIBUTE VALUE 1 ", "boostAmount": BOOST AMOUNT 1 }, { "attributeValue": " CUSTOM ATTRIBUTE VALUE 2 ", "boostAmount": BOOST AMOUNT 2 } ] } } } } The specification contains the following parameters: BOOST CONDITION : a text filter expression to select the documents to which boost is applied.
- To specify a boost specification using custom datetime attributes, do the following: Specify the boost specification in the boostSpec field when you send a servingConfigs.search request. { "boostSpec": { "conditionBoostSpecs": { "condition": " BOOST CONDITION ", "boostControlSpec": { "fieldName": " DATETIME FIELD NAME ", "attributeType": "FRESHNESS", "interpolationType": "LINEAR", "controlPoints": [ { "attributeValue": " DURATION VALUE 1 ", "boostAmount": BOOST AMOUNT 1 }, { "attributeValue": " DURATION VALUE 2 ", "boostAmount": BOOST AMOUNT 2 } ] } } } } The specification contains the following parameters: BOOST CONDITION : a text filter expression to select the documents to which boost is applied.
- When a document in the search result meets the specified condition, a boost amount is applied as follows: Duration value Boost amount Less than the first control point Is equal to the boost amount of the first control point Equal to a given control point Is equal to the mapped boost amount Between control points Is calculated by linear interpolation Greater than the last control point Is equal to the boost amount of the last control point Example use case using a custom datetime attribute Suppose your data store contains structured data where each document has a publication date.
- This page describes the following types of boost specifications: Boost with a fixed condition Boost using custom numerical attributes Boost according to freshness You can apply these boost specifications to query media search apps and custom search apps that contain structured, unstructured, and website data.

