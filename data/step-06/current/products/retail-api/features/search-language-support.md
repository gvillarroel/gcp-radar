---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:15.265Z"
product_name: "Retail API"
product_slug: "retail-api"
feature_name: "Search language support"
feature_slug: "search-language-support"
latest_feature_date: "2025-09-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/retail/docs/catalog"
  - "https://docs.cloud.google.com/retail/docs/conversational-search"
  - "https://docs.cloud.google.com/retail/docs/completion-overview"
  - "https://docs.cloud.google.com/retail/docs/conversational-commerce-dev-guide"
keywords:
  - "search"
  - "language"
  - "for"
  - "commerce"
  - "adds"
  - "additional"
  - "languages"
  - "including"
---

# Search language support

Product: Retail API
Coverage: MEDIUM

## Step 02 Summary

Search for commerce adds support for additional languages, including Urdu and Serbian (Cyrillic).

## Extended Definition

Search for commerce adds support for additional languages, including Urdu and Serbian (Cyrillic).

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/retail/docs/catalog](https://docs.cloud.google.com/retail/docs/catalog)
- [https://docs.cloud.google.com/retail/docs/conversational-search](https://docs.cloud.google.com/retail/docs/conversational-search)
- [https://docs.cloud.google.com/retail/docs/completion-overview](https://docs.cloud.google.com/retail/docs/completion-overview)
- [https://docs.cloud.google.com/retail/docs/conversational-commerce-dev-guide](https://docs.cloud.google.com/retail/docs/conversational-commerce-dev-guide)

## Supporting Pages

### "About catalogs and products \_|\_ Vertex AI Search for commerce \_|\_ Google\

- URL: [https://docs.cloud.google.com/retail/docs/catalog](https://docs.cloud.google.com/retail/docs/catalog)
- Source ID: `site-docs-reference`
- Final score: 215
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Language settings Vertex AI Search for commerce supports multiple languages.
- Vertex AI Search for commerce product schema BigQuery [ { "name" : "name" , "type" : "STRING" , "mode" : "NULLABLE" }, { "name" : "id" , "type" : "STRING" , "mode" : "REQUIRED" }, { "name" : "type" , "type" : "STRING" , "mode" : "NULLABLE" }, { "name" : "primaryProductId" , "type" : "STRING" , "mode" : "NULLABLE" }, { "name" : "collectionMemberIds" , "type" : "STRING" , "mode" : "REPEATED" }, { "name" : "gtin" , "type" : "STRING" , "mode" : "NULLABLE" }, { "name" : "categories" , "type" : "STRING" , "mode" : "REPEATED" }, { "name" : "title" , "type" : "STRING" , "mode" : "REQUIRED" }, { "name" : "brands" , "type" : "STRING" , "mode" : "REPEATED" }, { "name" : "description" , "type" : "STRING" , "mode" : "NULLABLE" }, { "name" : "languageCode" , "type" : "STRING" , "mode" : "NULLABLE" }, { "name" : "attributes" , "type" : "RECORD" , "mode" : "REPEATED" , "fields" : [ { "name" : "key" , "type" : "STRING" , "mode" : "NULLABLE" }, { "name" : "value" , "type" : "RECORD" , "mode" : "NULLABLE" , "fields" : [ { "name" : "text" , "type" : "STRING" , "mode" : "REPEATED" }, { "name" : "numbers" , "type" : "FLOAT" , "mode" : "REPEATED" } ] } ] }, { "name" : "tags" , "type" : "STRING" , "mode" : "REPEATED" }, { "name" : "priceInfo" , "type" : "RECORD" , "mode" : "NULLABLE" , "fields" : [ { "name" : "currencyCode" , "type" : "STRING" , "mode" : "NULLABLE" }, { "name" : "price" , "type" : "FLOAT" , "mode" : "NULLABLE" }, { "name" : "originalPrice" , "type" : "FLOAT" , "mode" : "NULLABLE" }, { "name" : "cost" , "type" : "FLOAT" , "mode" : "NULLABLE" }, { "name" : "priceEffectiveTime" , "type" : "STRING" , "mode" : "NULLABLE" }, { "name" : "priceExpireTime" , "type" : "STRING" , "mode" : "NULLABLE" } ] }, { "name" : "rating" , "type" : "RECORD" , "mode" : "NULLABLE" , "fields" : [ { "name" : "ratingCount" , "type" : "INTEGER" , "mode" : "NULLABLE" }, { "name" : "averageRating" , "type" : "FLOAT" , "mode" : "NULLABLE" }, { "name" : "ratingHistogram" , "type" : "INTEGER" , "mode" : "REPEATED" } ] }, { "name" : "expireTime" , "type" : "STRING" , "mode" : "NULLABLE" }, { "name" : "ttl" , "type" : "RECORD" , "mode" : "NULLABLE" , "fields" : [ { "name" : "seconds" , "type" : "INTEGER" , "mode" : "NULLABLE" }, { "name" : "nanos" , "type" : "INTEGER" , "mode" : "NULLABLE" } ] }, { "name" : "availableTime" , "type" : "STRING" , "mode" : "NULLABLE" }, { "name" : "availability" , "type" : "STRING" , "mode" : "NULLABLE" }, { "name" : "availableQuantity" , "type" : "INTEGER" , "mode" : "NULLABLE" }, { "name" : "fulfillmentInfo" , "type" : "RECORD" , "mode" : "REPEATED" , "fields" : [ { "name" : "type" , "type" : "STRING" , "mode" : "NULLABLE" }, { "name" : "placeIds" , "type" : "STRING" , "mode" : "REPEATED" } ] }, { "name" : "uri" , "type" : "STRING" , "mode" : "NULLABLE" }, { "name" : "images" , "type" : "RECORD" , "mode" : "REPEATED" , "fields" : [ { "name" : "uri" , "type" : "STRING" , "mode" : "REQUIRED" }, { "name" : "height" , "type" : "INTEGER" , "mode" : "NULLABLE" }, { "name" : "width" , "type" : "INTEGER" , "mode" : "NULLABLE" } ] }, { "name" : "audience" , "type" : "RECORD" , "mode" : "NULLABLE" , "fields" : [ { "name" : "genders" , "type" : "STRING" , "mode" : "REPEATED" }, { "name" : "ageGroups" , "type" : "STRING" , "mode" : "REPEATED" } ] }, { "name" : "colorInfo" , "type" : "RECORD" , "mode" : "NULLABLE" , "fields" : [ { "name" : "colorFamilies" , "type" : "STRING" , "mode" : "REPEATED" }, { "name" : "colors" , "type" : "STRING" , "mode" : "REPEATED" } ] }, { "name" : "sizes" , "type" : "STRING" , "mode" : "REPEATED" }, { "name" : "materials" , "type" : "STRING" , "mode" : "REPEATED" }, { "name" : "patterns" , "type" : "STRING" , "mode" : "REPEATED" }, { "name" : "conditions" , "type" : "STRING" , "mode" : "REPEATED" }, { "name" : "publishTime" , "type" : "STRING" , "mode" : "NULLABLE" }, { "name" : "promotions" , "type" : "RECORD" , "mode" : "REPEATED" , "fields" : [ { "name" : "promotionId" , "type" : "STRING" , "mode" : "NULLABLE" } ] } ] Note: For reranking on inventory prices, use placeId in the search request.
- For more information about product-level inventory, including how to maintain inventory data, see Update inventory for Vertex AI Search for commerce .
- Product URLs enhance catalogs by: Enriching product data : Vertex AI Search for commerce extracts supplemental information by crawling the product's URI, the unique resource identifier behind the exact location of each product on the web (URL).

### "Conversational Commerce agent overview \_|\_ Vertex AI Search for commerce\

- URL: [https://docs.cloud.google.com/retail/docs/conversational-search](https://docs.cloud.google.com/retail/docs/conversational-search)
- Source ID: `site-docs-root`
- Final score: 213
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Conversational Commerce agent capabilities Conversational Commerce agent adds to the Vertex AI Search for commerce experience in the following ways: Narrows user queries effectively : Conversational Commerce agent filters 10,000 products down to less than 100 products, increasing the likelihood that the user decides to make a purchase.
- Vertex AI Search for commerce processes these variations while accounting for variables like accents, background noise and "um's," "uh's" and "like's." For mobile, voice search is not only easier to input, but it can also take up less screen space, allowing more real estate product visuals.
- Instead of searching with keywords, users utilize natural language to ask for what they need, which includes follow up questions, multimodal interactions, improved intent understanding, and grounding with data beyond the product catalog.
- Home Documentation Industry solutions Vertex AI Search for commerce Guides Send feedback Conversational Commerce agent overview Stay organized with collections Save and categorize content based on your preferences.

### "Autocomplete for search \_|\_ Vertex AI Search for commerce \_|\_ Google\

- URL: [https://docs.cloud.google.com/retail/docs/completion-overview](https://docs.cloud.google.com/retail/docs/completion-overview)
- Source ID: `site-docs-reference`
- Final score: 211
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example: cURL curl -H "Authorization: Bearer $(gcloud auth application-default print-access-token)" \ "https://retail.googleapis.com/v2/projects/ PROJECT NUMBER /locations/global/catalogs/default catalog:completeQuery?query=sho&dataset=user-data&deviceType=DESKTOP&maxSuggestions=5" Implement filtering on suggestion results When using the cloud-retail dataset, Vertex AI Search for commerce can return matched attributes — such as popular brands and categories — alongside the standard text suggestions.
- Home Documentation Industry solutions Vertex AI Search for commerce Guides Send feedback Autocomplete for search Stay organized with collections Save and categorize content based on your preferences.
- Vertex AI Search for commerce returns up to five popular categories and brands related to each query suggestion in the completeQuery.completionResults.attributes API response.
- For example, if the search query is "shoe", the returned Autocomplete suggestions might be: womens shoes mens shoes Furthermore, if the facet key of interest is color , a product count and product count by color is also returned with each Autocomplete suggestion: womens shoes (32) black (10) taupe (16) white (10) mens shoes (43) black (10) brown (5) green (17) As a retailer, you don't need to present the product count to the shopper, but you might decide to order the list of suggestions based on product count instead of the order returned in completeQuery.completionResults .

### "Conversational Commerce agent developer's guide \_|\_ Vertex AI Search for\

- URL: [https://docs.cloud.google.com/retail/docs/conversational-commerce-dev-guide](https://docs.cloud.google.com/retail/docs/conversational-commerce-dev-guide)
- Source ID: `site-docs-reference`
- Final score: 209
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Send user query Example user input : Help me plan a party To enable both conversational commerce agent and conversational product filtering, ensure that your ConversationalSearchRequest includes this configuration: Conversational Commerce API request—Initial query { "query" : "Help me plan a party" , "branch" : "projects/{project id}/locations/{location id}/catalogs/{catalog id}/branches/default branch" , "placement" : "projects/YOUR PROJECT ID/locations/global/catalogs/default catalog/placements/default search" , "visitorId" : "your visitor id" , "conversationId" : "" , // Leave empty for the first query, or populate for ongoing conversation "searchParams" : { // IMPORTANT: These search parameters should mirror the configuration // of your Commerce Search API calls to ensure consistency. "filter" : "categories:(\"Party Supplies\" OR \"Decorations\" OR \"Food & Drink\")" }, "userInfo" : { // Optional: User information for enhanced personalization }, "conversationalFilteringSpec" : { "conversationalFilteringMode" : "ENABLED" // Crucial for enabling product filtering } } The key configurations are: conversationalFilteringMode: ENABLED : Setting this field to ENABLED in your conversationalFilteringSpec informs the API that your system can handle conversational product filtering, allowing the API to provide relevant filtering-specific responses.
- HTTP method and endpoint POST h tt ps : //retail.googleapis.com/v2/{placement=projects/ /locations/ /catalogs/ /servingConfigs/ }:search Core product Search API request: Initial query { "placement" : "projects/YOUR PROJECT ID/locations/global/catalogs/default catalog/servingConfigs/default search" , // Or if using legacy placements: // "placement": "projects/YOUR PROJECT ID/locations/global/catalogs/default catalog/placements/default search", "query" : "Help me plan a party" , // This is the original user query "visitorId" : "your visitor id" , "branch" : "projects/YOUR PROJECT ID/locations/global/catalogs/default catalog/branches/default branch" , "pageSize" : 20 , // Optional: Number of results to return per page "filter" : "categories:(\"Party Supplies\" OR \"Decorations\" OR \"Food & Drink\")" , // Mirroring the filter from the Conversational Commerce API "orderBy" : "relevance DESC" , // Optional "userInfo" : { // Optional: User information for enhanced personalization, should mirror Conversational Commerce API // "userId": "user123", "userAgent": "Chrome/120.0" }, "searchMode" : "PRODUCT SEARCH" // Typically for product searches } placement (Required) : The resource name of the Retail Search serving config or legacy placement.
- Example user input : Princess theme Conversational Commerce API request—Follow-up query { "query" : "Princess theme" , "placement" : "projects/YOUR PROJECT ID/locations/global/catalogs/default catalog/placements/default search" , "branch" : "projects/{project id}/locations/{location id}/catalogs/{catalog id}/branches/default branch" , "visitorId" : "your visitor id" , "conversationId" : "1577511e-36ed-4054-8e07-48d1ca016bcb" , "searchParams" : {}, "userInfo" : {}, "conversationalFilteringSpec" : { "conversationalFilteringMode" : "ENABLED" } } Possible outcomes for core product search When a query is classified as SIMPLE PRODUCT SEARCH , there are two possible API responses, depending on whether Conversational Product Filtering is triggered.
- Conversational Commerce API response—Transition to product filtering: { "userQueryTypes" : [ "SIMPLE PRODUCT SEARCH" ], "conversationId" : "1577511e-36ed-4054-8e07-48d1ca016bcb" , "refinedSearch" : [ { "query" : "princess birthday decorations" } ], "conversationalFilteringResult" : { "followupQuestion" : "What specific type of princess decoration are you looking for?" , "suggestedAnswers" : [ { "productAttributeValue" : { "name" : "attributes.type" , "value" : "Balloons" } }, { "productAttributeValue" : { "name" : "attributes.type" , "value" : "Streamers" } }, { "productAttributeValue" : { "name" : "attributes.type" , "value" : "Tablecloths" } } ] }, "state" : "SUCCEEDED" } Action The query has now been classified as SIMPLE PRODUCT SEARCH .

