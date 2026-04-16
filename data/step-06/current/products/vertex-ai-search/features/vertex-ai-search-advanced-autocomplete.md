---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:29:36.949Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Vertex AI Search advanced autocomplete"
feature_slug: "vertex-ai-search-advanced-autocomplete"
latest_feature_date: "2024-10-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-advanced-autocomplete"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-autocomplete"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/about-advanced-features"
keywords:
  - "vertex"
  - "ai"
  - "search"
  - "advanced"
  - "autocomplete"
  - "enables"
  - "functionality"
  - "blended"
---

# Vertex AI Search advanced autocomplete

Product: Vertex AI Search
Coverage: MEDIUM

## Step 02 Summary

Advanced autocomplete enables autocomplete functionality for blended search apps with options such as access control, language boosting, and rich suggestions (document or recent-search suggestions).

## Extended Definition

Advanced autocomplete enables autocomplete functionality for blended search apps with options such as access control, language boosting, and rich suggestions (document or recent-search suggestions).

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-advanced-autocomplete](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-advanced-autocomplete)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-autocomplete](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-autocomplete)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/about-advanced-features](https://docs.cloud.google.com/generative-ai-app-builder/docs/about-advanced-features)

## Supporting Pages

### Configure advanced autocomplete \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-advanced-autocomplete](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-advanced-autocomplete)
- Source ID: `site-docs-reference`
- Final score: 174
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Key features of advanced autocomplete The key features of advanced autocomplete that distinguish it from the basic autocomplete are as follows: Blended search: Advanced autocomplete can be used with blended search apps , those are custom search apps that are connected to more than one data store.
- This page describes Vertex AI Search's advanced autocomplete feature.
- Access control: Advanced autocomplete respects access controls. (Access controls are also referred to as ACLs, access control lists.) Advanced autocomplete only suggests search queries that are related to documents that the searcher has access to.
- Before reading this page, become familiar with Vertex AI Search's basic autocomplete.

### Configure autocomplete \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-autocomplete](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-autocomplete)
- Source ID: `site-docs-reference`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- To use autocomplete with search apps that are connected to multiple data stores (blended search) or have documents with access control or to boost specific languages within autocomplete, see Configure advanced autocomplete .
- Vertex AI Search provides an advanced data model for autocomplete.
- Autocomplete features Vertex AI Search supports the following autocomplete features to show the most helpful predictions during search: Feature Description Example or more information Correct typos Correct word spellings that are typos.
- If there is an email address jeffersonloveshiking@gmail.com in the data store, Vertex AI Search won't return the email address as an autocomplete suggestion if the user types jef in the search bar.

### About advanced features \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/about-advanced-features](https://docs.cloud.google.com/generative-ai-app-builder/docs/about-advanced-features)
- Source ID: `site-docs-reference`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- Here are the advanced features that are available: Enterprise edition features Generative responses Advanced website indexing Overview The following table shows Vertex AI Search features and indicates the advanced settings that are required for each feature: Feature Requires Website search (basic website search and advanced website indexing) Enterprise edition CMEK (customer-managed encryption keys) Enterprise edition Snippets for unstructured search No requirements Extractive answers for unstructured search Enterprise edition Extractive segments for unstructured search Enterprise edition Core generative answer features Enterprise edition Advanced generative answer features † Advanced LLM features Search summarization without advanced generative answer features † Enterprise edition Search summarization with advanced generative answer features † Advanced LLM features Search tuning for unstructured data stores Enterprise edition Core generative answer features include all answer generation features except for advanced generative answer features, such as related questions, query simplification, multi-step queries, multi-turn queries, and multimodal answers that return images and charts. † Advanced generative answer features include all answer generation features including related questions, query simplification, multi-step queries, multi-turn queries, and multimodal answers that return images and charts.
- Feature Requires Search summarization using the answer or the search method Advanced LLM features and advanced website indexing Search with follow-ups using the answer or the converse method Advanced LLM features and advanced website indexing Extractive segments and answers Advanced website indexing Search for an image using an image query Advanced website indexing Sitemap-based index and refresh Advanced website indexing Automatic index refresh Advanced website indexing Manual web page refresh Advanced website indexing Add structured data to data store schema Advanced website indexing Lower search latency than basic website search Advanced website indexing Blended search (multiple data stores in a single app) Advanced website indexing Search tuning Advanced website indexing You have the option to turn on advanced website indexing when you create your data store and when you upgrade your data store.
- Home Documentation AI and ML Vertex AI Search Send feedback About advanced features Stay organized with collections Save and categorize content based on your preferences.
- That is, Enterprise edition features are required for any Vertex AI Search app that uses website data (basic website search and advanced website indexing).

