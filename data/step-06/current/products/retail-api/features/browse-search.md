---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:15.279Z"
product_name: "Retail API"
product_slug: "retail-api"
feature_name: "Browse search"
feature_slug: "browse-search"
latest_feature_date: "2023-01-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/retail/docs/data-quality"
  - "https://docs.cloud.google.com/retail/docs/boosting"
  - "https://docs.cloud.google.com/retail/docs/a-b-monitor"
  - "https://docs.cloud.google.com/retail/docs/conversational-commerce-dev-guide"
keywords:
  - "browse"
  - "search"
  - "uses"
  - "retail"
  - "to"
  - "rank"
  - "results"
  - "by"
---

# Browse search

Product: Retail API
Coverage: MEDIUM

## Step 02 Summary

Browse search uses Retail Search to rank browse results by popularity, buyability, and personalization.

## Extended Definition

Browse search uses Retail Search to rank browse results by popularity, buyability, and personalization.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/retail/docs/data-quality](https://docs.cloud.google.com/retail/docs/data-quality)
- [https://docs.cloud.google.com/retail/docs/boosting](https://docs.cloud.google.com/retail/docs/boosting)
- [https://docs.cloud.google.com/retail/docs/a-b-monitor](https://docs.cloud.google.com/retail/docs/a-b-monitor)
- [https://docs.cloud.google.com/retail/docs/conversational-commerce-dev-guide](https://docs.cloud.google.com/retail/docs/conversational-commerce-dev-guide)

## Supporting Pages

### Data quality \_|\_ Vertex AI Search for commerce \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/retail/docs/data-quality](https://docs.cloud.google.com/retail/docs/data-quality)
- Source ID: `site-docs-root`
- Final score: 252
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following performance tiers are available for both use cases, text query search and browse: Text query search TIER 1 Relevance Results are returned based on degree of relevance to the query, such as how black a dress is when a black dress is queried.
- At least 250,000 browse search user events followed by a detail-page-view , add-to-cart , or purchase event with the same visitor ID and with one of the products included in the search event over the last 90 days.
- Browse search , used when your shoppers land on a particular category page, such as the "Appliances" category web page of a home improvement store's retail site and browse the sorted items in that category.
- These retailers in these upper tiers can now make use of feature selection: For browse: Silver and Gold For search: Tiers 3 and 4 Why the ranking upgrade?

### Boost results \_|\_ Vertex AI Search for commerce \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/retail/docs/boosting](https://docs.cloud.google.com/retail/docs/boosting)
- Source ID: `site-docs-reference`
- Final score: 228
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To troubleshoot why a boosted product might not appear in search and browse results, check for: Multiple boost rules (including bury demotions) : Check boost mode configuration (sum or max) and determine the final score.
- You can control the result ranking by applying a boosting rule to prioritize or de-prioritize returned search items.
- Boosting is a multiplier function applied to search and browse results.
- Example dataset View example product dataset id title brands categories price info.price "nest mini 2nd gen" "Nest Mini (2nd gen)" ["Google", "Nest"] ["Nest > speakers and displays"] 49.00 "nest audio" "Nest Audio" ["Google", "Nest"] ["Nest > speakers and displays"] 99.99 "nest hub max" "Nest Hub Max" ["Google", "Nest"] ["Nest > speakers and displays"] 229.00 "nest hub" "Nest Hub" ["Google", "Nest"] ["Nest > speakers and displays"] 88.99 "google home max" "Google Home Max" ["Google", "Nest"] ["Nest > speakers and displays"] 299.00 "google home mini" "Google Home Mini" ["Google", "Nest"] ["Nest > speakers and displays"] 49.00 "google pixel 5" "Google Pixel 5" ["Google", "Pixel"] ["Pixel > phones"] 699.00 "google pixel 4a with 5g" "Google Pixel 4a with 5G" ["Google", "Pixel"] ["Pixel > phones"] 499.00 "google pixel 4a" "Google Pixel 4a Phones" ["Google", "Pixel"] ["Pixel > phones"] 349.00 "google pixel stand" "Google Pixel Stand" ["Google", "Pixel"] ["Pixel > featured accessories"] 79.00 "google pixel buds" "Google Pixel Buds" ["Google", "Pixel"] ["Pixel > featured accessories"] 179.00 "google pixel 5 case" "Google Pixel 5 Case" ["Google", "Pixel"] ["Pixel > featured accessories"] 40.00 "google pixel 4a 5g case" "Google Pixel 4a (5G) Case" ["Google", "Pixel"] ["Pixel > featured accessories"] 40.00 "google pixel 4a case" "Google Pixel 4a Case" ["Google", "Pixel"] ["Pixel > featured accessories"] 40.00 Configuration options In Vertex AI Search for commerce, boosting is applied as a multiplier to the base relevance score generated by the search algorithm.

### "Monitor and analyze A/B experiments \_|\_ Vertex AI Search for commerce\

- URL: [https://docs.cloud.google.com/retail/docs/a-b-monitor](https://docs.cloud.google.com/retail/docs/a-b-monitor)
- Source ID: `site-docs-reference`
- Final score: 222
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example 1: Two variant arms In this example, assume that you plan to set up an A/B experiment with: 20% of search requests sent to in-house search engines as the baseline control group 20% of search requests sent to Google Vertex AI Search for Retail API as the experiment group 60% as a holdout group that is not in the A/B test The request and user event configuration would be: Traffic type Discovery engine event.experimentIds event.attributionToken Traffic % Control traffic In-house CONTROL N/A 20% Experiment traffic Google Vertex AI Search for Retail API EXPERIMENT Attribution token from search response 20% Holdout traffic Either / both N/A Depends on discovery engine 60% Holdout traffic might be served by an in-house search engine, Vertex AI Search for commerce, or both.
- Variant arm name Traffic destination User event experiment ID Intended traffic % Example control arm External CONTROL 50% Example experiment arm 1 Google Vertex AI Search for Retail API EXP DF ON 25% Example experiment arm 2 Google Vertex AI Search for Retail API EXP DF OFF 25% Traffic metrics An experiment's Monitoring page shows if there are unintended traffic splits for the following metrics: Search/Browse event count per date Search/Browse visitor count per date Search/Browse event count per category When unintended traffic splits occur for one of these metrics, its card at the top of the Monitoring page shows the dates on which the unintended traffic split occurred.
- Select a serving traffic destination: Google Vertex AI Search for Retail API : If this variant arm monitors traffic for Vertex AI Search for commerce results.
- The requests and user events configurations would be: Variant arm name Traffic destination event.experimentIds event.attributionToken Traffic % Head queries control In-house CONTROL N/A 50% of head queries Head queries dynamic facets ON experiment Google Vertex AI Search for Retail API EXP DF ON Attribution token from search response 25% of head queries Head queries dynamic facets OFF experiment Google Vertex AI Search for Retail API EXP DF OFF Attribution token from search response 25% of head queries Non-head queries and other holdouts Google Vertex AI Search for Retail API N/A Depends on engine used N/A To set up monitoring for this example experiment, you would create corresponding variant arms in the console for each experiment group.

### "Conversational Commerce agent developer's guide \_|\_ Vertex AI Search for\

- URL: [https://docs.cloud.google.com/retail/docs/conversational-commerce-dev-guide](https://docs.cloud.google.com/retail/docs/conversational-commerce-dev-guide)
- Source ID: `site-docs-reference`
- Final score: 220
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- HTTP method and endpoint POST h tt ps : //retail.googleapis.com/v2/{placement=projects/ /locations/ /catalogs/ /servingConfigs/ }:search Core product Search API request: Initial query { "placement" : "projects/YOUR PROJECT ID/locations/global/catalogs/default catalog/servingConfigs/default search" , // Or if using legacy placements: // "placement": "projects/YOUR PROJECT ID/locations/global/catalogs/default catalog/placements/default search", "query" : "Help me plan a party" , // This is the original user query "visitorId" : "your visitor id" , "branch" : "projects/YOUR PROJECT ID/locations/global/catalogs/default catalog/branches/default branch" , "pageSize" : 20 , // Optional: Number of results to return per page "filter" : "categories:(\"Party Supplies\" OR \"Decorations\" OR \"Food & Drink\")" , // Mirroring the filter from the Conversational Commerce API "orderBy" : "relevance DESC" , // Optional "userInfo" : { // Optional: User information for enhanced personalization, should mirror Conversational Commerce API // "userId": "user123", "userAgent": "Chrome/120.0" }, "searchMode" : "PRODUCT SEARCH" // Typically for product searches } placement (Required) : The resource name of the Retail Search serving config or legacy placement.
- HTTP method and endpoint POST h tt ps : //retail.googleapis.com/v2/{placement=projects/ /locations/ /catalogs/ /placements/ }:conversationalSearch Conversational API request: Initial query { "query" : "Help me plan a party" , "branch" : "projects/{project id}/locations/{location id}/catalogs/default catalog/branches/default branch" , "placement" : "projects/{project id}/locations/global/catalogs/default catalog/placements/default search" , "visitorId" : "your visitor id" , "conversationId" : "" , // Leave empty for the first query "searchParams" : { // IMPORTANT: These search parameters should mirror the configuration // of your core Search API calls to ensure consistency between LLM answers and search results. "filter" : "categories:(\"Party Supplies\" OR \"Decorations\" OR \"Food & Drink\")" }, "userInfo" : { // Optional: User information for enhanced personalization // Example: "userId": "user123", "userAgent": "Chrome/120.0" }, "conversationalFilteringSpec" : { // Optional: Controls conversational filtering behavior.
- For core search experiences (such as the search results page) : You have the flexibility to use either the refined search.query from the API or the original query provided by the end-user, because it's more likely that the original query is already a precise product search term.
- The diagram shows how user events, product catalog data, and operational logs are processed, transformed, and integrated into a generative AI index and Retail Adapter service to handle search operations and fulfill user intents to return search results.

