---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:15.273Z"
product_name: "Retail API"
product_slug: "retail-api"
feature_name: "Facet controls"
feature_slug: "facet-controls"
latest_feature_date: "2023-10-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/retail/docs/attribute-config"
  - "https://docs.cloud.google.com/retail/docs/completion-overview"
  - "https://docs.cloud.google.com/retail/docs/create-controls"
  - "https://docs.cloud.google.com/retail/docs/boosting"
keywords:
  - "facet"
  - "controls"
  - "let"
  - "you"
  - "control"
  - "values"
  - "and"
  - "numerical"
---

# Facet controls

Product: Retail API
Coverage: MEDIUM

## Step 02 Summary

Facet controls let you control facet values and numerical facet intervals for search and browse operations without editing your catalog.

## Extended Definition

Facet controls let you control facet values and numerical facet intervals for search and browse operations without editing your catalog.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/retail/docs/attribute-config](https://docs.cloud.google.com/retail/docs/attribute-config)
- [https://docs.cloud.google.com/retail/docs/completion-overview](https://docs.cloud.google.com/retail/docs/completion-overview)
- [https://docs.cloud.google.com/retail/docs/create-controls](https://docs.cloud.google.com/retail/docs/create-controls)
- [https://docs.cloud.google.com/retail/docs/boosting](https://docs.cloud.google.com/retail/docs/boosting)

## Supporting Pages

### "About product attributes \_|\_ Vertex AI Search for commerce \_|\_ Google\

- URL: [https://docs.cloud.google.com/retail/docs/attribute-config](https://docs.cloud.google.com/retail/docs/attribute-config)
- Source ID: `site-docs-reference`
- Final score: 210
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Best practices for naming and structuring custom attributes When extending your product data beyond the predefined schema, how you name and format your custom attributes directly impacts Vertex AI Search for commerce's ability to index, retrieve, and facet your products.
- Faceting consideration: If you want to use a numerical attribute as a dynamicFacet , you must cast the numerical data type to a Text string in your data pipeline before ingestion (such as passing 10.99 as "10.99" ).
- Configure attributes in the console You can globally set attribute options across all products from the Search for commerce console Controls page , on the Site-wide controls tab.
- To ensure predictable and accurate filtering behavior, maintain consistency and completeness in your filterable attribute definitions across primary and variant products.

### "Autocomplete for search \_|\_ Vertex AI Search for commerce \_|\_ Google\

- URL: [https://docs.cloud.google.com/retail/docs/completion-overview](https://docs.cloud.google.com/retail/docs/completion-overview)
- Source ID: `site-docs-reference`
- Final score: 200
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, if the search query is "shoe", the returned Autocomplete suggestions might be: womens shoes mens shoes Furthermore, if the facet key of interest is color , a product count and product count by color is also returned with each Autocomplete suggestion: womens shoes (32) black (10) taupe (16) white (10) mens shoes (43) black (10) brown (5) green (17) As a retailer, you don't need to present the product count to the shopper, but you might decide to order the list of suggestions based on product count instead of the order returned in completeQuery.completionResults .
- For data import, you can use Google Cloud console > Controls > Autocomplete Controls > Do Not Remove list or use CompletionData:import in the API.
- To import a denylist, you can use Google Cloud console > Controls > Autocomplete Controls > Deny list or use API CompletionData:import .
- Autocomplete options and controls This section explains what options and controls are available for autocomplete.

### "Create serving controls \_|\_ Vertex AI Search for commerce \_|\_ Google\

- URL: [https://docs.cloud.google.com/retail/docs/create-controls](https://docs.cloud.google.com/retail/docs/create-controls)
- Source ID: `site-docs-root`
- Final score: 189
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For field details, see the Controls API reference and the Controls.create API reference . curl -X POST \ -H "Authorization: Bearer $( gcloud auth application-default print-access-token ) " \ -H "Content-Type: application/json; charset=utf-8" \ -H "X-Goog-User-Project: PROJECT NUMBER " \ --data '{ "displayName": " DisplayName ", "solutionTypes": "SOLUTION TYPE SEARCH", "searchSolutionUseCase": [" SEARCH SOLUTION USE CASE SEARCH "], "rule": { "condition": { "queryTerms": [ { "value": " Term1 ", "fullMatch": " boolean: true / false " }, { "value": " Term2 ", "fullMatch": " boolean: true / false " }, ], "activeTimeRange": [ { "startTime": timestamp1 , "endTime": timestamp2 }, { "startTime": timestamp3 , "endTime": timestamp4 } ] }, "pinAction": { "pinMap" : { " pin position1 ": " product id ", " pin position2 ": " product id >" } } } }' \ "https://retail.googleapis.com/v2alpha/projects/ PROJECT NUMBER /locations/ LOCATION /catalogs/default catalog/controls?controlId= CONTROL ID " The pin position should be an integer between [1,10] inclusive and product id must exist in your catalog.
- For example, suppose you have created two controls: a control called gShoe Sale that boosts results for the brand gShoe when shoes is searched for and a control called More shoes that expands queries using the term running shoes to include sport shoes.
- You can now find the new control listed on the Serving controls tab of the Controls page. curl Make a Control.create request with a control ID and an instance of Control contained in the request body.
- Home Documentation Industry solutions Vertex AI Search for commerce Guides Send feedback Create serving controls Stay organized with collections Save and categorize content based on your preferences.

### Boost results \_|\_ Vertex AI Search for commerce \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/retail/docs/boosting](https://docs.cloud.google.com/retail/docs/boosting)
- Source ID: `site-docs-reference`
- Final score: 182
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Configure your controls, taking into account the following: Control Type : Boost or bury Product Selection : Recommendation Action : Filter Expression : ratingCount > 100 Boost Value : 0.5 This control ensures that popular, well-rated items are prioritized in the recommendation list, while still maintaining personalization relevance for the user.
- For this reason, you typically configure recommendations by attaching boost or bury serving controls to the serving config, rather than passing a boosting specification in the request.
- The following products are available for configuring boost or bury controls: Search : Topicality filter plus any other user-applied filters such as on-site facets.
- You can use operations like greater-than and less-than for numerical fields in boosting conditions, which are not available in standard strict filtering.

