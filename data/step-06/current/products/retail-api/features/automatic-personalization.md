---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:15.278Z"
product_name: "Retail API"
product_slug: "retail-api"
feature_name: "Automatic personalization"
feature_slug: "automatic-personalization"
latest_feature_date: "2023-01-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/retail/docs/data-quality"
  - "https://docs.cloud.google.com/iam/docs/federated-identity-supported-services"
  - "https://docs.cloud.google.com/retail/docs/conversational-commerce-dev-guide"
  - "https://docs.cloud.google.com/retail/docs/conversational-commerce-ux-guide"
keywords:
  - "automatic"
  - "personalization"
  - "delivers"
  - "personalized"
  - "text"
  - "query"
  - "and"
  - "browse"
---

# Automatic personalization

Product: Retail API
Coverage: MEDIUM

## Step 02 Summary

Automatic personalization delivers personalized text query and browse search results based on each end user's behavior.

## Extended Definition

Automatic personalization delivers personalized text query and browse search results based on each end user's behavior.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/retail/docs/data-quality](https://docs.cloud.google.com/retail/docs/data-quality)
- [https://docs.cloud.google.com/iam/docs/federated-identity-supported-services](https://docs.cloud.google.com/iam/docs/federated-identity-supported-services)
- [https://docs.cloud.google.com/retail/docs/conversational-commerce-dev-guide](https://docs.cloud.google.com/retail/docs/conversational-commerce-dev-guide)
- [https://docs.cloud.google.com/retail/docs/conversational-commerce-ux-guide](https://docs.cloud.google.com/retail/docs/conversational-commerce-ux-guide)

## Supporting Pages

### Data quality \_|\_ Vertex AI Search for commerce \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/retail/docs/data-quality](https://docs.cloud.google.com/retail/docs/data-quality)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following performance tiers are available for both use cases, text query search and browse: Text query search TIER 1 Relevance Results are returned based on degree of relevance to the query, such as how black a dress is when a black dress is queried.
- Unlock search performance tiers Text query search and browse search have different performance tiers that increasingly improve your search results.
- Ideally, similar to search events, search requests should have either the query (text) and the page category (browse) filled.
- This metric is calculated over the last 60 days. (Recommended: < 10.0%) For every 1,000 add-to-cart events, there should be at least 25 purchase events from the last 90 days. (Recommended: > 0.02) For every 1,000 detail-page-view events, there should be at least 20 add-to-cart events from the last 90 days. (Recommended: > 0.025) PLATINUM Personalized revenue-optimized ranking This tier provides personalized product ranking within browsed categories, aiming to optimize revenue based on individual user behavior and preferences.

### "Identity federation: products and limitations \_|\_ Identity and Access\

- URL: [https://docs.cloud.google.com/iam/docs/federated-identity-supported-services](https://docs.cloud.google.com/iam/docs/federated-identity-supported-services)
- Source ID: `site-iam-reference`
- Final score: 150
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Assured Workloads GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Backup and DR Service GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Batch GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations BigQuery GA Console (federated): Saving queries isn't supported.
- List of products and limitations Launch stage GA Preview Unsupported Product Identity federation launch stage Limitations Access Approval GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Access Context Manager GA Console (federated): No known limitations Google Cloud API: v1alpha APIs aren't available for federated identities.
- As a result, when federated identities analyze access for a principal, the query results don't include permissions and roles that the principal has due to their membership in a group.
- Google Cloud API: No known limitations Other: The following features don't support Workforce Identity Federation with BigQuery: Connected Sheets Google Drive Recommendations Slot estimator The following operations don't support Workforce Identity Federation: Loading data from Amazon S3 , Apache Spark , or Azure Blob Storage through the Connection API Loading data from Google Drive Bigtable GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Binary Authorization GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Blockchain Analytics GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Blockchain Node Engine GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Carbon Footprint GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Certificate Authority Service GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Certificate Manager GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Channel Services GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Cloud Asset Inventory GA Console (federated): In the IAM policy tab, the Analyze Full Access button is unavailable for Workforce Identity Federation users.

### "Conversational Commerce agent developer's guide \_|\_ Vertex AI Search for\

- URL: [https://docs.cloud.google.com/retail/docs/conversational-commerce-dev-guide](https://docs.cloud.google.com/retail/docs/conversational-commerce-dev-guide)
- Source ID: `site-docs-reference`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- Send user query Example user input : Help me plan a party To enable both conversational commerce agent and conversational product filtering, ensure that your ConversationalSearchRequest includes this configuration: Conversational Commerce API request—Initial query { "query" : "Help me plan a party" , "branch" : "projects/{project id}/locations/{location id}/catalogs/{catalog id}/branches/default branch" , "placement" : "projects/YOUR PROJECT ID/locations/global/catalogs/default catalog/placements/default search" , "visitorId" : "your visitor id" , "conversationId" : "" , // Leave empty for the first query, or populate for ongoing conversation "searchParams" : { // IMPORTANT: These search parameters should mirror the configuration // of your Commerce Search API calls to ensure consistency. "filter" : "categories:(\"Party Supplies\" OR \"Decorations\" OR \"Food & Drink\")" }, "userInfo" : { // Optional: User information for enhanced personalization }, "conversationalFilteringSpec" : { "conversationalFilteringMode" : "ENABLED" // Crucial for enabling product filtering } } The key configurations are: conversationalFilteringMode: ENABLED : Setting this field to ENABLED in your conversationalFilteringSpec informs the API that your system can handle conversational product filtering, allowing the API to provide relevant filtering-specific responses.
- HTTP method and endpoint POST h tt ps : //retail.googleapis.com/v2/{placement=projects/ /locations/ /catalogs/ /servingConfigs/ }:search Core product Search API request: Initial query { "placement" : "projects/YOUR PROJECT ID/locations/global/catalogs/default catalog/servingConfigs/default search" , // Or if using legacy placements: // "placement": "projects/YOUR PROJECT ID/locations/global/catalogs/default catalog/placements/default search", "query" : "Help me plan a party" , // This is the original user query "visitorId" : "your visitor id" , "branch" : "projects/YOUR PROJECT ID/locations/global/catalogs/default catalog/branches/default branch" , "pageSize" : 20 , // Optional: Number of results to return per page "filter" : "categories:(\"Party Supplies\" OR \"Decorations\" OR \"Food & Drink\")" , // Mirroring the filter from the Conversational Commerce API "orderBy" : "relevance DESC" , // Optional "userInfo" : { // Optional: User information for enhanced personalization, should mirror Conversational Commerce API // "userId": "user123", "userAgent": "Chrome/120.0" }, "searchMode" : "PRODUCT SEARCH" // Typically for product searches } placement (Required) : The resource name of the Retail Search serving config or legacy placement.
- HTTP method and endpoint POST h tt ps : //retail.googleapis.com/v2/{placement=projects/ /locations/ /catalogs/ /placements/ }:conversationalSearch Conversational API request: Initial query { "query" : "Help me plan a party" , "branch" : "projects/{project id}/locations/{location id}/catalogs/default catalog/branches/default branch" , "placement" : "projects/{project id}/locations/global/catalogs/default catalog/placements/default search" , "visitorId" : "your visitor id" , "conversationId" : "" , // Leave empty for the first query "searchParams" : { // IMPORTANT: These search parameters should mirror the configuration // of your core Search API calls to ensure consistency between LLM answers and search results. "filter" : "categories:(\"Party Supplies\" OR \"Decorations\" OR \"Food & Drink\")" }, "userInfo" : { // Optional: User information for enhanced personalization // Example: "userId": "user123", "userAgent": "Chrome/120.0" }, "conversationalFilteringSpec" : { // Optional: Controls conversational filtering behavior.
- HTTP method and endpoint (same as initial query) POST h tt ps : //retail.googleapis.com/v2/{placement=projects/ /locations/ /catalogs/ /placements/ }:conversationalSearch Conversational API request: Follow-up query { "query" : "A birthday party" , // New query continuing the conversation from the previous turn "placement" : "projects/799252947591/locations/global/catalogs/default catalog/placements/default search" , "branch" : "projects/{project id}/locations/{location id}/catalogs/{catalog id}/branches/default branch" , "visitorId" : "test" , // Or your actual visitor id "conversationId" : "1577511e-36ed-4054-8e07-48d1ca016bcb" , // conversation id from previous response "searchParams" : { "filter" : "categories:(\"Birthday Party Supplies\")" } } Conversational API response: Follow-up response { "conversationId" : "1577511e-36ed-4054-8e07-48d1ca016bcb" , "userQueryTypes" : [ "INTENT REFINEMENT" ], "conversationalTextResponse" : "Great!

### "Conversational Commerce agent user experience guide \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/retail/docs/conversational-commerce-ux-guide](https://docs.cloud.google.com/retail/docs/conversational-commerce-ux-guide)
- Source ID: `site-docs-reference`
- Final score: 127
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Accessibility tools Multimodal input support Voice-to-text correction Screen reader compatibility Real-time transcription Clear semantic structuring Predictive text assist Voiceovers for image-based content Autocorrect Use targeted questions to ensure graceful error handling Inevitably, there are instances when a query produces no results on a particular site.
- Controls to ensure context and continuity across sessions Rather than treating every query in isolation, contextual awareness allows for more efficient searches without repeating previous inputs.
- Dropdown prediction list : A dynamic list appears below the search bar, showcasing suggested queries, popular searches, and recent history Contextual filtering chips : Filters display below the search bar as users type, providing relevant filter options such as categories, price ranges, or brands.
- Integrate accessibility and inclusivity considerations Whether site visitors interact through voice, text, or images, Vertex AI Search for commerce must provide inclusive solutions that support individuals with varying abilities, preferences, or technological constraints.

