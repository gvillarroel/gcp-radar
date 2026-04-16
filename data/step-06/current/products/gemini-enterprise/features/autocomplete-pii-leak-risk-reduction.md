---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:13.720Z"
product_name: "Gemini Enterprise"
product_slug: "gemini-enterprise"
feature_name: "Autocomplete PII leak risk reduction"
feature_slug: "autocomplete-pii-leak-risk-reduction"
latest_feature_date: "2025-06-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/enterprise/docs/configure-autocomplete"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/configure-advanced-autocomplete"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/before-you-begin"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/configure-field-settings"
keywords:
  - "autocomplete"
  - "pii"
  - "leak"
  - "risk"
  - "reduction"
  - "can"
  - "be"
  - "configured"
---

# Autocomplete PII leak risk reduction

Product: Gemini Enterprise
Coverage: MEDIUM

## Step 02 Summary

Autocomplete can be configured to reduce the risk of returning search suggestions that contain personally identifiable information.

## Extended Definition

Autocomplete can be configured to reduce the risk of returning search suggestions that contain personally identifiable information.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/enterprise/docs/configure-autocomplete](https://docs.cloud.google.com/gemini/enterprise/docs/configure-autocomplete)
- [https://docs.cloud.google.com/gemini/enterprise/docs/configure-advanced-autocomplete](https://docs.cloud.google.com/gemini/enterprise/docs/configure-advanced-autocomplete)
- [https://docs.cloud.google.com/gemini/enterprise/docs/before-you-begin](https://docs.cloud.google.com/gemini/enterprise/docs/before-you-begin)
- [https://docs.cloud.google.com/gemini/enterprise/docs/configure-field-settings](https://docs.cloud.google.com/gemini/enterprise/docs/configure-field-settings)

## Supporting Pages

### Configure autocomplete \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/configure-autocomplete](https://docs.cloud.google.com/gemini/enterprise/docs/configure-autocomplete)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- If you use the search history or user events model and there is a likelihood of your users typing PII into the search bar, then you can reduce PII leaks by adjusting the following parameters: queryFrequencyThreshold : Before a query can be returned as an autocomplete suggestion, it must have been entered this many times. numUniqueUsersThreshold : Before a query can be returned as an autocomplete suggestion, it must have been entered by this many unique users.
- As a result, Gemini Enterprise can't guarantee that PII won't be returned in autocomplete suggestions.
- Protect against PII leaks The definition of PII is broad, and PII can be difficult to detect.
- Gemini Enterprise can't guarantee that PII won't be returned in autocomplete suggestions.

### "Configure advanced autocomplete \_|\_ Gemini Enterprise \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/configure-advanced-autocomplete](https://docs.cloud.google.com/gemini/enterprise/docs/configure-advanced-autocomplete)
- Source ID: `site-docs-root`
- Final score: 147
- Re-rank relevance: N/A

Evidence snippets:
- If your data stores contain any personally identifiable information (PII) or if you use the search history or user events query suggestions model, review Protect against PII leaks and set up data loss prevention (DLP) safeguards that might be needed to prevent leaks of PII.
- Key features of advanced autocomplete The key features of advanced autocomplete that distinguish it from the basic autocomplete are as follows: Blended search: Advanced autocomplete can be used with apps that are connected to more than one data store.
- Language boost: Advanced autocomplete can be set to boost suggestions in one or more languages.
- Example command curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/my-project-123/locations/global/collections/default collection/engines/my-app/completionConfig:completeQuery" \ -d '{ "query": "hol", "boostSpec": { "conditionBoostSpecs": [{ "condition": "(langCode: ANY(\"es\", \"fr\"))", "boost": 0.75 }, { "condition": "(langCode: ANY(\"en\"))", "boost": -1 }] } }' In this example, the autocomplete suggestions for the query Co are boosted (placed higher in the autosuggestion list) if they are in French or Spanish and buried (placed lower in the autosuggestion list) if they are in English.

### Before you begin \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/before-you-begin](https://docs.cloud.google.com/gemini/enterprise/docs/before-you-begin)
- Source ID: `site-docs-root`
- Final score: 90
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Gemini Enterprise Send feedback Before you begin Stay organized with collections Save and categorize content based on your preferences.
- This page describes the basic start-up tasks that you must complete before using Gemini Enterprise.
- Access control You can configure access control for Gemini Enterprise at the project level.

### Configure field settings \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/configure-field-settings](https://docs.cloud.google.com/gemini/enterprise/docs/configure-field-settings)
- Source ID: `site-docs-root`
- Final score: 77
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Dynamic facets can be automatically added to a search based on previous user behavior such as facet clicks and views.
- To configure a field as dynamic facetable, it must first be configured as indexable.
- For example, numerical fields cannot be set to Searchable .
- Only fields with text values can be set to Searchable .

