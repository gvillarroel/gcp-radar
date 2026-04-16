---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:29:37.074Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Advanced website indexing"
feature_slug: "advanced-website-indexing"
latest_feature_date: "2023-12-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/add-website-metadata"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/about-advanced-features"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/create-datastore-ingest"
keywords:
  - "advanced"
  - "website"
  - "indexing"
  - "vertex"
  - "ai"
  - "search"
  - "allows"
  - "existing"
---

# Advanced website indexing

Product: Vertex AI Search
Coverage: MEDIUM

## Step 02 Summary

Vertex AI Search allows existing data stores to be upgraded to use advanced website indexing.

## Extended Definition

Vertex AI Search allows existing data stores to be upgraded to use advanced website indexing.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/add-website-metadata](https://docs.cloud.google.com/generative-ai-app-builder/docs/add-website-metadata)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/about-advanced-features](https://docs.cloud.google.com/generative-ai-app-builder/docs/about-advanced-features)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-datastore-ingest](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-datastore-ingest)

## Supporting Pages

### "Use structured data for advanced website indexing \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/add-website-metadata](https://docs.cloud.google.com/generative-ai-app-builder/docs/add-website-metadata)
- Source ID: `site-docs-reference`
- Final score: 213
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Such tags can be used with advanced indexing when you add custom structured data attributes to the data store schema . <!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Your web page title</title> <!-- Robots instructions for crawlers and for Vertex AI Search. --> <meta name="robots" content="index,follow"> <!-- Vertex AI Search can use custom datetime fields to filter, boost, and order. --> <meta name="lastModified" content="2024-09-06"> <!-- Vertex AI Search can filter by category or tags. --> <meta name="category" content="archived"> <meta name="tags" content="legacy,interesting,faq"> <!-- Vertex AI Search can index these common HTML tags. --> <meta name="description" content="A description of your web page's content."> <meta name="author" content="Your name or organization"> <meta name="keywords" content="relevant,keywords,separated,by,commas"> <link rel="canonical" href="https://www.yourwebsite.com/this-page"> <meta property="og:title" content="Your Webpage Title"> <meta property="og:description" content="A description of your webpage's content."> <meta property="og:image" content="https://www.yourwebsite.com/image.jpg"> <meta property="og:url" content="https://www.yourwebsite.com/this-page"> <meta property="og:type" content="website"> <meta name="twitter:card" content="summary large image"> <meta name="twitter:title" content="Your customized Webpage Title"> <meta name="twitter:description" content="A description of your webpage's content."> <meta name="twitter:image" content="https://www.yourwebsite.com/image.jpg"> </head> <body> ... </body> </html> Example use case for PageMaps Suppose you have several web pages that contain food recipes.
- Home Documentation AI and ML Vertex AI Search Send feedback Use structured data for advanced website indexing Stay organized with collections Save and categorize content based on your preferences.
- If advanced website indexing is enabled in your data store, you can use the following types of structured data to enrich your indexing: Predefined, Google-inferred page dates Custom structured data attributes Metadata using meta tags PageMaps Schema.org data This page introduces both these types of structured data for your web pages and describes how to add custom structured attributes to your data store schema.
- Before you begin Before you update the data store schema, do the following: Turn on advanced website indexing for the data store.

### About advanced features \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/about-advanced-features](https://docs.cloud.google.com/generative-ai-app-builder/docs/about-advanced-features)
- Source ID: `site-docs-reference`
- Final score: 195
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Here are the advanced features that are available: Enterprise edition features Generative responses Advanced website indexing Overview The following table shows Vertex AI Search features and indicates the advanced settings that are required for each feature: Feature Requires Website search (basic website search and advanced website indexing) Enterprise edition CMEK (customer-managed encryption keys) Enterprise edition Snippets for unstructured search No requirements Extractive answers for unstructured search Enterprise edition Extractive segments for unstructured search Enterprise edition Core generative answer features Enterprise edition Advanced generative answer features † Advanced LLM features Search summarization without advanced generative answer features † Enterprise edition Search summarization with advanced generative answer features † Advanced LLM features Search tuning for unstructured data stores Enterprise edition Core generative answer features include all answer generation features except for advanced generative answer features, such as related questions, query simplification, multi-step queries, multi-turn queries, and multimodal answers that return images and charts. † Advanced generative answer features include all answer generation features including related questions, query simplification, multi-step queries, multi-turn queries, and multimodal answers that return images and charts.
- That is, Enterprise edition features are required for any Vertex AI Search app that uses website data (basic website search and advanced website indexing).
- Enterprise edition features are required for any Vertex AI Search app that uses website data for basic website search or advanced website indexing.
- Feature Requires Search summarization using the answer or the search method Advanced LLM features and advanced website indexing Search with follow-ups using the answer or the converse method Advanced LLM features and advanced website indexing Extractive segments and answers Advanced website indexing Search for an image using an image query Advanced website indexing Sitemap-based index and refresh Advanced website indexing Automatic index refresh Advanced website indexing Manual web page refresh Advanced website indexing Add structured data to data store schema Advanced website indexing Lower search latency than basic website search Advanced website indexing Blended search (multiple data stores in a single app) Advanced website indexing Search tuning Advanced website indexing You have the option to turn on advanced website indexing when you create your data store and when you upgrade your data store.

### About apps and data stores \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-datastore-ingest](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-datastore-ingest)
- Source ID: `site-docs-root`
- Final score: 169
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Advanced website indexing : Provides advanced search capabilities over an index that's generated based on either of the following: The Vertex AI Search app owners can control which web pages are indexed by submitting sitemaps and maintaining them.
- The Vertex AI Search app owners can perform an initial indexing that mirrors the Google Search index and then expand the index's coverage by recrawling the websites whenever necessary, keeping it fresh.
- Website data stores need to have advanced website indexing turned on in order to be used for blended search.
- In addition to media documents, media data stores also contain the user event information that allows Vertex AI Search to customize recommendations and search for your users.

