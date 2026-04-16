---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:15.274Z"
product_name: "Retail API"
product_slug: "retail-api"
feature_name: "Search performance tiers"
feature_slug: "search-performance-tiers"
latest_feature_date: "2023-08-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/retail/docs/data-quality"
  - "https://docs.cloud.google.com/retail/docs/catalog"
  - "https://docs.cloud.google.com/retail/docs/attribution-tokens"
  - "https://docs.cloud.google.com/retail/docs/attribute-config"
keywords:
  - "search"
  - "performance"
  - "tiers"
  - "define"
  - "increasing"
  - "levels"
  - "of"
  - "quality"
---

# Search performance tiers

Product: Retail API
Coverage: MEDIUM

## Step 02 Summary

Search performance tiers define increasing levels of search quality based on uploaded user event and catalog data requirements.

## Extended Definition

Search performance tiers define increasing levels of search quality based on uploaded user event and catalog data requirements.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/retail/docs/data-quality](https://docs.cloud.google.com/retail/docs/data-quality)
- [https://docs.cloud.google.com/retail/docs/catalog](https://docs.cloud.google.com/retail/docs/catalog)
- [https://docs.cloud.google.com/retail/docs/attribution-tokens](https://docs.cloud.google.com/retail/docs/attribution-tokens)
- [https://docs.cloud.google.com/retail/docs/attribute-config](https://docs.cloud.google.com/retail/docs/attribute-config)

## Supporting Pages

### Data quality \_|\_ Vertex AI Search for commerce \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/retail/docs/data-quality](https://docs.cloud.google.com/retail/docs/data-quality)
- Source ID: `site-docs-root`
- Final score: 225
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This page describes search use cases, their respective performance tiers, and how to check the Search for commerce console for an assessment of your data quality and which performance tiers you have unlocked.
- How to see which attributes are being used If a customer has the higher tiers enabled with sufficient user event data points, the new custom attributes information is now visible in the Console, listed under the Text search and/or Browse search tab in the Data quality page of the Search for commerce.
- The following performance tiers are available for both use cases, text query search and browse: Text query search TIER 1 Relevance Results are returned based on degree of relevance to the query, such as how black a dress is when a black dress is queried.
- Unlock search performance tiers Text query search and browse search have different performance tiers that increasingly improve your search results.

### "About catalogs and products \_|\_ Vertex AI Search for commerce \_|\_ Google\

- URL: [https://docs.cloud.google.com/retail/docs/catalog](https://docs.cloud.google.com/retail/docs/catalog)
- Source ID: `site-docs-reference`
- Final score: 201
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Catalog data quality metrics The Data quality page in the Search for commerce console assesses if you need to update catalog data to improve the quality of search results and unlock search performance tiers.
- For details about how to view data quality metrics and search performance tiers in the Search for commerce console, see Unlock search performance tiers .
- The catalog data you import into Vertex AI Search for commerce has a direct effect on the quality of the resulting model, and therefore on the quality of search and recommendation results.
- All product information you provide can be used to improve the quality of recommendations and search results.

### "Attribution tokens \_|\_ Vertex AI Search for commerce \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/retail/docs/attribution-tokens](https://docs.cloud.google.com/retail/docs/attribution-tokens)
- Source ID: `site-docs-reference`
- Final score: 143
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Attribution token data quality The Data quality dashboard in the Search for commerce console will show a Critical or a Blocking non-compliance error Status if the percentage of events with attribution tokens is under 95%.
- They enable Vertex AI Search for commerce to associate a search request with its matching search event, which allows re-ranking models to improve the quality of search responses.
- Errors reported in the Data quality dashboard in the Search for commerce if the percentage of events with attribution tokens is less than 95%.
- For more information, see the Data quality section on how to unlock perforance tiers see the Data quality page of this documentation.

### "About product attributes \_|\_ Vertex AI Search for commerce \_|\_ Google\

- URL: [https://docs.cloud.google.com/retail/docs/attribute-config](https://docs.cloud.google.com/retail/docs/attribute-config)
- Source ID: `site-docs-reference`
- Final score: 140
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You might use inventory-level attributes for products whose properties vary significantly between stores and regions, such as grocery items, or for products that have store-specific promotions. inventories.price and inventories.originalPrice are numeric system attributes predefined by Vertex AI Search for commerce.
- Best practices for naming and structuring custom attributes When extending your product data beyond the predefined schema, how you name and format your custom attributes directly impacts Vertex AI Search for commerce's ability to index, retrieve, and facet your products.
- Primary-variant behavior in search versus recommendations While only primary items are returned in search and recommendation results, Vertex AI Search for commerce optimizes search and recommendation quality.
- Take product availability: A primary product can be marked out-of-stock , but if at least one of its variants is in-stock , the primary is available for search results if an in-stock filter is applied.

