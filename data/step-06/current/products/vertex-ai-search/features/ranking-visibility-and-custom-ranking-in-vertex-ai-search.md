---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:30:14.848Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Ranking visibility and custom ranking in Vertex AI Search"
feature_slug: "ranking-visibility-and-custom-ranking-in-vertex-ai-search"
latest_feature_date: "2025-03-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/custom-ranking"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/about-generic-search"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/bring-embeddings"
keywords:
  - "ranking"
  - "visibility"
  - "and"
  - "custom"
  - "in"
  - "vertex"
  - "ai"
  - "search"
---

# Ranking visibility and custom ranking in Vertex AI Search

Product: Vertex AI Search
Coverage: LOW

## Step 02 Summary

Vertex AI Search private preview exposes ranking signals for inspection and allows users to tune ranking by modifying predefined expressions or defining custom ranking expressions.

## Extended Definition

Vertex AI Search private preview exposes ranking signals for inspection and allows users to tune ranking by modifying predefined expressions or defining custom ranking expressions.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/custom-ranking](https://docs.cloud.google.com/generative-ai-app-builder/docs/custom-ranking)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis](https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/about-generic-search](https://docs.cloud.google.com/generative-ai-app-builder/docs/about-generic-search)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/bring-embeddings](https://docs.cloud.google.com/generative-ai-app-builder/docs/bring-embeddings)

## Supporting Pages

### "Customize search results ranking \_|\_ Vertex AI Search \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/custom-ranking](https://docs.cloud.google.com/generative-ai-app-builder/docs/custom-ranking)
- Source ID: `site-docs-root`
- Final score: 284
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation AI and ML Vertex AI Search Send feedback Customize search results ranking Stay organized with collections Save and categorize content based on your preferences.
- With custom ranking, you can achieve the following: Gain visibility : Understand which signals contribute to the final ranking of your search results.
- Standard signals Vertex AI Search offers a variety of signals that you can use to formulate custom ranking.
- Text fields for keyword similarity In structured data stores, to obtain the keywordSimilarityScore signal in your search response, you must update your schema to do the following: Map the text fields essential for keyword matching to the key properties title and description Update the annotation for the text fields as Searchable Customize ranking using ranking formula in search To customize the ranking for your documents in your search results, manually draft a formula and add it to your search API call.

### "Vertex AI APIs for building search and RAG experiences \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis](https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis)
- Source ID: `site-api-reference`
- Final score: 264
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Vertex AI Search works as an out-of-the-box semantic & keyword search engine for RAG with the ability to process a variety of document types and with connectors to a variety of source systems including BigQuery and many third party systems.
- Vertex AI Vector Search is a retrieval engine that can search from billions of semantically similar or semantically related items at scale, with high queries per second (QPS), high recall, low latency, and cost efficiency.
- Home Documentation AI and ML Vertex AI Search Send feedback Vertex AI APIs for building search and RAG experiences Stay organized with collections Save and categorize content based on your preferences.
- The grounding sources can be your Vertex AI Search data stores, custom data that you provide, or Google Search.

### "Introduction to custom search \_|\_ Vertex AI Search \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/about-generic-search](https://docs.cloud.google.com/generative-ai-app-builder/docs/about-generic-search)
- Source ID: `site-api-reference`
- Final score: 252
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Retrieval and ranking: There are several sub-components to retrieval and ranking of results: Query understanding for search: Vertex AI Search analyzes a search query using the following: Natural language processing: To understand the intent.
- Vertex AI Search for custom apps is a powerful, Google-quality search and content discovery engine that you can integrate into your applications that contain website data and other structured or unstructured data.
- Home Documentation AI and ML Vertex AI Search Send feedback Introduction to custom search Stay organized with collections Save and categorize content based on your preferences.
- Ranking: Vertex AI Search ranks the results based on the following factors: Relevance: A combination of keyword and semantic matching during search.

### Use custom embeddings \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/bring-embeddings](https://docs.cloud.google.com/generative-ai-app-builder/docs/bring-embeddings)
- Source ID: `site-api-reference`
- Final score: 246
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- However, if you've created your own embeddings for your data, you might prefer to use them instead of those generated by Vertex AI Search, especially if your custom embeddings contain additional context that can enrich your search retrieval and ranking.
- Home Documentation AI and ML Vertex AI Search Send feedback Use custom embeddings Stay organized with collections Save and categorize content based on your preferences.
- If you've already created your own custom vector embeddings for your data, you can upload them to Vertex AI Search and use them when querying with Vertex AI Search.
- If you aren't familiar with creating embeddings, Google recommends letting Vertex AI Search create and use embeddings for you.

