---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:15.274Z"
product_name: "Retail API"
product_slug: "retail-api"
feature_name: "Data quality page"
feature_slug: "data-quality-page"
latest_feature_date: "2023-06-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/retail/docs/catalog"
  - "https://docs.cloud.google.com/retail/docs/data-quality"
  - "https://docs.cloud.google.com/retail/docs/conversational-filtering-dev-guide"
  - "https://docs.cloud.google.com/iam/docs/federated-identity-supported-services"
keywords:
  - "quality"
  - "page"
  - "the"
  - "assesses"
  - "product"
  - "catalog"
  - "and"
  - "user"
---

# Data quality page

Product: Retail API
Coverage: MEDIUM

## Step 02 Summary

The Data quality page assesses product catalog and user event data and shows which search performance tiers are unlocked.

## Extended Definition

The Data quality page assesses product catalog and user event data and shows which search performance tiers are unlocked.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/retail/docs/catalog](https://docs.cloud.google.com/retail/docs/catalog)
- [https://docs.cloud.google.com/retail/docs/data-quality](https://docs.cloud.google.com/retail/docs/data-quality)
- [https://docs.cloud.google.com/retail/docs/conversational-filtering-dev-guide](https://docs.cloud.google.com/retail/docs/conversational-filtering-dev-guide)
- [https://docs.cloud.google.com/iam/docs/federated-identity-supported-services](https://docs.cloud.google.com/iam/docs/federated-identity-supported-services)

## Supporting Pages

### "About catalogs and products \_|\_ Vertex AI Search for commerce \_|\_ Google\

- URL: [https://docs.cloud.google.com/retail/docs/catalog](https://docs.cloud.google.com/retail/docs/catalog)
- Source ID: `site-docs-reference`
- Final score: 285
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Catalog data quality metrics The Data quality page in the Search for commerce console assesses if you need to update catalog data to improve the quality of search results and unlock search performance tiers.
- It's probably the first information that the end users would see and interact with in the Detail page view, so it's good practice to keep the product.title unique and have text information that is most relevant to the product.
- The deeper understanding of products gained through URI crawling directly contributes to the quality of the catalog's data.
- Based on how your product SKUs are designated, consider your options for setting up your product catalog: You want your SKU to be shown as an individual search result or recommendation : SKU=primary Your SKU should be part of a group of similar SKUs : SKU=variant, group of SKUs=primary A mixture of both combinations : SKU=primary, SKU=variant, group of SKUs=primary If your product detail page shows an option, size, or color selector, these options are typically uploaded as variants into your product catalog.

### Data quality \_|\_ Vertex AI Search for commerce \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/retail/docs/data-quality](https://docs.cloud.google.com/retail/docs/data-quality)
- Source ID: `site-docs-root`
- Final score: 269
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Additional data requirement information For more about Vertex AI Search for commerce data requirements, see the documentation: General Vertex AI Search for commerce requirements when uploading user event data: Requirements for user events Minimum user event requirements to get results for search: Search requirements Catalog data requirements: Catalog data quality metrics What's next Import historical user events Import catalog information Starter A/B checklist Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- This metric is calculated over the last 60 days. (Recommended: < 10.0%) For every 1,000 add-to-cart events, there should be at least 25 purchase events from the last 90 days. (Recommended: > 0.02) For every 1,000 detail-page-view events, there should be at least 20 add-to-cart events from the last 90 days. (Recommended: > 0.025) PLATINUM Personalized revenue-optimized ranking This tier provides personalized product ranking within browsed categories, aiming to optimize revenue based on individual user behavior and preferences.
- How to see which attributes are being used If a customer has the higher tiers enabled with sufficient user event data points, the new custom attributes information is now visible in the Console, listed under the Text search and/or Browse search tab in the Data quality page of the Search for commerce.
- At least 250,000 search events must be associated with user interaction (followed by a detail-page-view , add-to-cart , or purchase event with the same visitor ID and one of the products included in the search event) in the last 90 days.

### "Conversational filtering developer's guide \_|\_ Vertex AI Search for commerce\

- URL: [https://docs.cloud.google.com/retail/docs/conversational-filtering-dev-guide](https://docs.cloud.google.com/retail/docs/conversational-filtering-dev-guide)
- Source ID: `site-docs-reference`
- Final score: 225
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Administrator experience Manage the generative questions and conversational product filtering directly in the API, or in the Search for commerce console , and set it up in the Data quality and Evaluate sections of the Search for commerce console.
- Data requirements To find out if your search data is ready for conversational product filtering, in the console, under Conversational product filtering and browse , or under Data quality > Conversation , go to the Coverage checks tab.
- Assuming conversational product filtering is enabled on the website, the user journey and subsequent interaction with Vertex AI Search for commerce follows this path: Step 1 .
- To control how generative questions are served, go to the Conversational product filtering and browse page in the Vertex AI Search for commerce console.

### "Identity federation: products and limitations \_|\_ Identity and Access\

- URL: [https://docs.cloud.google.com/iam/docs/federated-identity-supported-services](https://docs.cloud.google.com/iam/docs/federated-identity-supported-services)
- Source ID: `site-iam-reference`
- Final score: 212
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Google Cloud API: The following methods don't support identity federtation: UpdateCatalog ImportCompletionData TuneModel ImportProducts PurgeProducts ImportUserEvents ImportUserEvents PurgeUserEvents RejoinUserEvents Other: No known limitations Secret Manager GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Secure Source Manager GA Console (federated): No known limitations Google Cloud API: Identity federation users must sign in through the Secure Source Manager instance web interface before running any of the following commands: Git CLI commands API calls to data plane endpoints Identity federation users must sign in through the Secure Source Manager instance web interface after every session expiry to continue using Git SSH CLI commands with user SSH keys.
- Other: No known limitations Managed Service for Apache Spark GA Console (federated): Workforce Identity Federation users can perform create, view, update, and delete operations in Cluster, Jobs, and Batches list pages.
- Overview This page provides details of limitations and the level of support for each Google Cloud product that can use Workforce Identity Federation or Workload Identity Federation , collectively identity federation .
- Workforce Identity Federation Workforce Identity Federation lets your workforce—employees, vendors, partners, and other users—access Google Cloud products by using an identity provider (IdP).

