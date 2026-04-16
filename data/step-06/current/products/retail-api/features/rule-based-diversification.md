---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:15.288Z"
product_name: "Retail API"
product_slug: "retail-api"
feature_name: "Rule-based diversification"
feature_slug: "rule-based-diversification"
latest_feature_date: "2022-10-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/retail/docs/configs"
  - "https://docs.cloud.google.com/retail/docs/create-configs"
  - "https://docs.cloud.google.com/retail/docs/boosting"
  - "https://docs.cloud.google.com/retail/docs/catalog"
keywords:
  - "rule"
  - "based"
  - "diversification"
  - "returns"
  - "results"
  - "from"
  - "different"
  - "product"
---

# Rule-based diversification

Product: Retail API
Coverage: MEDIUM

## Step 02 Summary

Rule-based diversification returns results from different product catalog categories within a single prediction request.

## Extended Definition

Rule-based diversification returns results from different product catalog categories within a single prediction request.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/retail/docs/configs](https://docs.cloud.google.com/retail/docs/configs)
- [https://docs.cloud.google.com/retail/docs/create-configs](https://docs.cloud.google.com/retail/docs/create-configs)
- [https://docs.cloud.google.com/retail/docs/boosting](https://docs.cloud.google.com/retail/docs/boosting)
- [https://docs.cloud.google.com/retail/docs/catalog](https://docs.cloud.google.com/retail/docs/catalog)

## Supporting Pages

### "About serving configs \_|\_ Vertex AI Search for commerce \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/retail/docs/configs](https://docs.cloud.google.com/retail/docs/configs)
- Source ID: `site-docs-reference`
- Final score: 181
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use rule-based diversity to recommend products from a variety of categories.
- Result diversification If you want to ensure that results returned from a single prediction request are more diversified rather than looking similar, you can enable diversification.
- Two types of diversification are available: rule-based diversity and data-driven diversity.
- Rule-based diversity Rule-based diversity relies on categories of your product catalog.

### "Create serving configs \_|\_ Vertex AI Search for commerce \_|\_ Google\

- URL: [https://docs.cloud.google.com/retail/docs/create-configs](https://docs.cloud.google.com/retail/docs/create-configs)
- Source ID: `site-docs-root`
- Final score: 181
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Select whether to use rule-based or data-driven result diversification: Ruled-based: Ruled-based result diversification affects whether results returned from a single prediction request are from different categories of your product catalog.
- Set to RULE BASED DIVERSITY to diversify recommendation results based on product category.
- Set to DATA DRIVEN DIVERSITY to diversify recommendations based on learning from product metadata to balances relevance and category diversity.
- Data-driven: Data-driven result diversification uses machine learning to balance category diversity and relevance in your prediction results.

### Boost results \_|\_ Vertex AI Search for commerce \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/retail/docs/boosting](https://docs.cloud.google.com/retail/docs/boosting)
- Source ID: `site-docs-reference`
- Final score: 156
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Filters : Filtering rules override any boost rule, and prevent boosted products from appearing in results.
- Configure boost To configure a dataset with boost or bury rules, you define conditions based on product attributes (such as brand or price) and assign a boost value between -1.0 (bury) and 1.0 (boost) to adjust the ranking score of matching items.
- To troubleshoot why a boosted product might not appear in search and browse results, check for: Multiple boost rules (including bury demotions) : Check boost mode configuration (sum or max) and determine the final score.
- When several boosting rules are applied to the same product, always check if another product's score has ousted the product from the top spot.

### "About catalogs and products \_|\_ Vertex AI Search for commerce \_|\_ Google\

- URL: [https://docs.cloud.google.com/retail/docs/catalog](https://docs.cloud.google.com/retail/docs/catalog)
- Source ID: `site-docs-reference`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- Based on how your product SKUs are designated, consider your options for setting up your product catalog: You want your SKU to be shown as an individual search result or recommendation : SKU=primary Your SKU should be part of a group of similar SKUs : SKU=variant, group of SKUs=primary A mixture of both combinations : SKU=primary, SKU=variant, group of SKUs=primary If your product detail page shows an option, size, or color selector, these options are typically uploaded as variants into your product catalog.
- Local inventory (region or store-specific pricing) : Use the price information from the local inventory in reranking at serving time Primary product attributes : Primary products must only include attributes common to all their associated variants.
- Products with a variant For products that have a variant, structure them as primary-variant, because there are multiple advantages, including: The search page has diverse results that can be displayed to the end users.
- Product schema When importing a catalog from BigQuery, use the following Vertex AI Search for commerce product schema to create a BigQuery table with the correct format and load it with your catalog data.

