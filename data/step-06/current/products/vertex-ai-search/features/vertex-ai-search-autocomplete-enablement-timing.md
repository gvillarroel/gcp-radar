---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:29:36.997Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Vertex AI Search autocomplete enablement timing"
feature_slug: "vertex-ai-search-autocomplete-enablement-timing"
latest_feature_date: "2024-06-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/check-media-data-quality"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/before-you-begin"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-autocomplete"
keywords:
  - "vertex"
  - "ai"
  - "search"
  - "autocomplete"
  - "enablement"
  - "timing"
  - "allows"
  - "enabling"
---

# Vertex AI Search autocomplete enablement timing

Product: Vertex AI Search
Coverage: MEDIUM

## Step 02 Summary

Allows enabling autocomplete early before enough usage data is collected, trading initial suggestion coverage and quality for faster rollout.

## Extended Definition

Allows enabling autocomplete early before enough usage data is collected, trading initial suggestion coverage and quality for faster rollout.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/check-media-data-quality](https://docs.cloud.google.com/generative-ai-app-builder/docs/check-media-data-quality)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/before-you-begin](https://docs.cloud.google.com/generative-ai-app-builder/docs/before-you-begin)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-autocomplete](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-autocomplete)

## Supporting Pages

### "Check data quality for media recommendations \_|\_ Vertex AI Search \_|\_\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/check-media-data-quality](https://docs.cloud.google.com/generative-ai-app-builder/docs/check-media-data-quality)
- Source ID: `site-docs-reference`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation AI and ML Vertex AI Search Send feedback Check data quality for media recommendations Stay organized with collections Save and categorize content based on your preferences.
- DATA STORE ID : the ID of the Vertex AI Search data store.
- DATA STORE ID : the ID of the Vertex AI Search data store.

### Before you begin \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/before-you-begin](https://docs.cloud.google.com/generative-ai-app-builder/docs/before-you-begin)
- Source ID: `site-docs-reference`
- Final score: 72
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- What's next Authenticate to Vertex AI Search Access control with IAM Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Create a project To create a Google Cloud project for your Vertex AI Search apps and data stores, follow these steps: In the Google Cloud console, on the project selector page , select or create a Google Cloud project .
- To grant access to Vertex AI Search, follow the instructions at Grant a single role in the IAM documentation using the following guidance: Select the project that contains the Vertex AI Search engine.
- To grant access to Vertex AI Search using the console, grant the Discovery Engine Admin role to a principal for the project that contains the Vertex AI Search engine.

### Configure autocomplete \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-autocomplete](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-autocomplete)
- Source ID: `site-docs-reference`
- Final score: 65
- Re-rank relevance: N/A

Evidence snippets:
- Autocomplete features Vertex AI Search supports the following autocomplete features to show the most helpful predictions during search: Feature Description Example or more information Correct typos Correct word spellings that are typos.
- If there is an email address jeffersonloveshiking@gmail.com in the data store, Vertex AI Search won't return the email address as an autocomplete suggestion if the user types jef in the search bar.
- Home Documentation AI and ML Vertex AI Search Send feedback Configure autocomplete Stay organized with collections Save and categorize content based on your preferences.
- As a result, Vertex AI Search can't guarantee that PII won't be returned in autocomplete suggestions.

