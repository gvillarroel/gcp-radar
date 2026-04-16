---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:29:36.918Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Vertex AI Search autocomplete PII risk settings"
feature_slug: "vertex-ai-search-autocomplete-pii-risk-settings"
latest_feature_date: "2025-05-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-autocomplete"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-field-settings"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-advanced-autocomplete"
keywords:
  - "vertex"
  - "ai"
  - "search"
  - "autocomplete"
  - "pii"
  - "risk"
  - "settings"
  - "provides"
---

# Vertex AI Search autocomplete PII risk settings

Product: Vertex AI Search
Coverage: MEDIUM

## Step 02 Summary

Vertex AI Search provides adjustable autocomplete controls to lower the risk of returning suggestions that contain personally identifiable information when using search history or user event data.

## Extended Definition

Vertex AI Search provides adjustable autocomplete controls to lower the risk of returning suggestions that contain personally identifiable information when using search history or user event data.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-autocomplete](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-autocomplete)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-field-settings](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-field-settings)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-advanced-autocomplete](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-advanced-autocomplete)

## Supporting Pages

### Configure autocomplete \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-autocomplete](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-autocomplete)
- Source ID: `site-docs-reference`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- Vertex AI Search provides an advanced data model for autocomplete.
- Autocomplete features Vertex AI Search supports the following autocomplete features to show the most helpful predictions during search: Feature Description Example or more information Correct typos Correct word spellings that are typos.
- If there is an email address jeffersonloveshiking@gmail.com in the data store, Vertex AI Search won't return the email address as an autocomplete suggestion if the user types jef in the search bar.
- Home Documentation AI and ML Vertex AI Search Send feedback Configure autocomplete Stay organized with collections Save and categorize content based on your preferences.

### Configure field settings \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-field-settings](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-field-settings)
- Source ID: `site-docs-reference`
- Final score: 90
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Vertex AI Search Send feedback Configure field settings Stay organized with collections Save and categorize content based on your preferences.
- Field settings help determine how Vertex AI Search uses fields in its results.
- If the completable field is set for product name , brand , and category , when the user types Tech, the autocomplete suggestions can show: TechCo (from the brand field) TechCo UltraBook X1 (from the product name field) Technology GameMaster Pro (another product from the category field) Filterable Allows recommendations to use a field to filter recommended results, determining which search results your users see.
- Limitations Field settings have the following limitations: You can configure up to 50 fields as indexable, searchable, retrievable, or dynamic facetable.

### Configure advanced autocomplete \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-advanced-autocomplete](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-advanced-autocomplete)
- Source ID: `site-docs-reference`
- Final score: 87
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before reading this page, become familiar with Vertex AI Search's basic autocomplete.
- This page describes Vertex AI Search's advanced autocomplete feature.
- Key features of advanced autocomplete The key features of advanced autocomplete that distinguish it from the basic autocomplete are as follows: Blended search: Advanced autocomplete can be used with blended search apps , those are custom search apps that are connected to more than one data store.
- Access control: Advanced autocomplete respects access controls. (Access controls are also referred to as ACLs, access control lists.) Advanced autocomplete only suggests search queries that are related to documents that the searcher has access to.

