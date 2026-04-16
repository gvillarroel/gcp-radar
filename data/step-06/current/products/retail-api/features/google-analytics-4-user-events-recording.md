---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:15.283Z"
product_name: "Retail API"
product_slug: "retail-api"
feature_name: "Google Analytics 4 user events recording"
feature_slug: "google-analytics-4-user-events-recording"
latest_feature_date: "2022-10-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/retail/docs/setting-up"
  - "https://docs.cloud.google.com/retail/docs/conversational-commerce-dev-guide"
  - "https://docs.cloud.google.com/iam/docs/federated-identity-supported-services"
  - "https://docs.cloud.google.com/retail/docs/create-models"
keywords:
  - "analytics"
  - "user"
  - "events"
  - "recording"
  - "lets"
  - "you"
  - "send"
  - "ga4"
---

# Google Analytics 4 user events recording

Product: Retail API
Coverage: MEDIUM

## Step 02 Summary

Google Analytics 4 user events recording lets you send GA4-format user event data directly to the Retail API.

## Extended Definition

Google Analytics 4 user events recording lets you send GA4-format user event data directly to the Retail API.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/retail/docs/setting-up](https://docs.cloud.google.com/retail/docs/setting-up)
- [https://docs.cloud.google.com/retail/docs/conversational-commerce-dev-guide](https://docs.cloud.google.com/retail/docs/conversational-commerce-dev-guide)
- [https://docs.cloud.google.com/iam/docs/federated-identity-supported-services](https://docs.cloud.google.com/iam/docs/federated-identity-supported-services)
- [https://docs.cloud.google.com/retail/docs/create-models](https://docs.cloud.google.com/retail/docs/create-models)

## Supporting Pages

### "Setup prerequisites \_|\_ Vertex AI Search for commerce \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/retail/docs/setting-up](https://docs.cloud.google.com/retail/docs/setting-up)
- Source ID: `site-docs-reference`
- Final score: 153
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Google Analytics 360 : Use for Google Analytics 360 events, unless you are importing events only home-page-views from Google Analytics 360 (in that case, use Retail User Events Schema ).
- Before you can set up Vertex AI Search for commerce for a new project, you must: Create a new project or set up your existing project Enable Vertex AI Search for commerce Import your product catalog and user events Create a Google Cloud project On the Manage resources page in the Google Cloud console, select or create a Google Cloud project .
- Go to the Search for commerce console Create an API key An API key is required if you use a JavaScript pixel or a Tag Manager tag to capture user events from users' browsers.
- Retail User Events Schema : Use for importing events from sources other than Google Analytics and for importing events only home-page-views from Google Analytics 360 .

### "Conversational Commerce agent developer's guide \_|\_ Vertex AI Search for\

- URL: [https://docs.cloud.google.com/retail/docs/conversational-commerce-dev-guide](https://docs.cloud.google.com/retail/docs/conversational-commerce-dev-guide)
- Source ID: `site-docs-reference`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- Send user query Example user input : Help me plan a party To enable both conversational commerce agent and conversational product filtering, ensure that your ConversationalSearchRequest includes this configuration: Conversational Commerce API request—Initial query { "query" : "Help me plan a party" , "branch" : "projects/{project id}/locations/{location id}/catalogs/{catalog id}/branches/default branch" , "placement" : "projects/YOUR PROJECT ID/locations/global/catalogs/default catalog/placements/default search" , "visitorId" : "your visitor id" , "conversationId" : "" , // Leave empty for the first query, or populate for ongoing conversation "searchParams" : { // IMPORTANT: These search parameters should mirror the configuration // of your Commerce Search API calls to ensure consistency. "filter" : "categories:(\"Party Supplies\" OR \"Decorations\" OR \"Food & Drink\")" }, "userInfo" : { // Optional: User information for enhanced personalization }, "conversationalFilteringSpec" : { "conversationalFilteringMode" : "ENABLED" // Crucial for enabling product filtering } } The key configurations are: conversationalFilteringMode: ENABLED : Setting this field to ENABLED in your conversationalFilteringSpec informs the API that your system can handle conversational product filtering, allowing the API to provide relevant filtering-specific responses.
- Search API request: Follow-up query { "placement" : "projects/118220807021/locations/global/catalogs/default catalog/placements/default search" , "query" : "Decorations" , "visitorId" : "test" } Events to send to Vertex AI Search for commerce It's important to accurately attribute search queries to conversational interactions and use full analytics capabilities within Vertex AI Search for commerce using proper event tagging : Retrieve conversation id .
- This is where you would apply any filters that mirror what you send in searchParams to the Conversational Commerce API for consistency. orderBy (Optional) : Specifies the order in which products are returned (such as by relevance or by price). userInfo (Optional) : User information for personalization, should be consistent with the Conversational Commerce API call. searchMode (Optional) : Defines the search behavior.
- Option 2: Show search results based on conversational output If your user experience design is more dynamic and you only want to display search results depending on the Conversational API's response, such as only for SIMPLE PRODUCT SEARCH queries or whenever refined search suggestions are provided, wait for the Conversational API's response before sending any queries to the core Product Search API.

### "Identity federation: products and limitations \_|\_ Identity and Access\

- URL: [https://docs.cloud.google.com/iam/docs/federated-identity-supported-services](https://docs.cloud.google.com/iam/docs/federated-identity-supported-services)
- Source ID: `site-iam-reference`
- Final score: 146
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Workforce Identity Federation Workforce Identity Federation lets your workforce—employees, vendors, partners, and other users—access Google Cloud products by using an identity provider (IdP).
- Google Cloud API: No known limitations Other: The following features don't support Workforce Identity Federation with BigQuery: Connected Sheets Google Drive Recommendations Slot estimator The following operations don't support Workforce Identity Federation: Loading data from Amazon S3 , Apache Spark , or Azure Blob Storage through the Connection API Loading data from Google Drive Bigtable GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Binary Authorization GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Blockchain Analytics GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Blockchain Node Engine GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Carbon Footprint GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Certificate Authority Service GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Certificate Manager GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Channel Services GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Cloud Asset Inventory GA Console (federated): In the IAM policy tab, the Analyze Full Access button is unavailable for Workforce Identity Federation users.
- Google Cloud API: The following methods don't support identity federtation: UpdateCatalog ImportCompletionData TuneModel ImportProducts PurgeProducts ImportUserEvents ImportUserEvents PurgeUserEvents RejoinUserEvents Other: No known limitations Secret Manager GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Secure Source Manager GA Console (federated): No known limitations Google Cloud API: Identity federation users must sign in through the Secure Source Manager instance web interface before running any of the following commands: Git CLI commands API calls to data plane endpoints Identity federation users must sign in through the Secure Source Manager instance web interface after every session expiry to continue using Git SSH CLI commands with user SSH keys.
- Other: No known limitations Document AI GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Endpoint Verification Unsupported Alternatives: No alternatives available Enterprise Knowledge Graph Unsupported Alternatives: No alternatives available Error Reporting GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Eventarc GA Console (federated): Although you can use an existing workflow as an Eventarc trigger destination, Workforce Identity Federation users can't create new workflows.

### "Create recommendation models \_|\_ Vertex AI Search for commerce \_|\_ Google\

- URL: [https://docs.cloud.google.com/retail/docs/create-models](https://docs.cloud.google.com/retail/docs/create-models)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Start recording user events to Vertex AI Search for commerce, if you haven't already, making sure to follow the best practices for recording user event data .
- Model type Optimization objective Supported user event types Minimum data requirement Data collection window Recommended for You Click-through rate detail-page-view home-page-view 7 days of detail-page-view events in the last 90 days AND 10 occurrences per catalog item on average (with a 90 days window) of detail-page-view events OR 60 days of detail-page-view events in the last 90 days 100 unique catalog items for the detail-page-view event in the last 90 days 10,000 detail-page-view events in the last 90 days AND 7 days of home-page-view events in the last 90 days 10,000 home-page-view events in the last 90 days 3 months Recommended for You Conversion rate add-to-cart detail-page-view home-page-view 7 days of add-to-cart events in the last 90 days AND 10 occurrences per catalog item on average (with a 90 days window) of add-to-cart events OR 60 days of add-to-cart events in the last 90 days 100 unique catalog items for the add-to-cart event in the last 90 days 10,000 add-to-cart events in the last 90 days AND 7 days of detail-page-view events in the last 90 days AND 10 occurrences per catalog item on average (with a 90 days window) of detail-page-view events OR 60 days of detail-page-view events in the last 90 days 100 unique catalog items for the detail-page-view event in the last 90 days 10,000 detail-page-view events in the last 90 days AND 7 days of home-page-view events in the last 90 days 10,000 home-page-view events in the last 90 days 3 months Recommended for You Revenue per session add-to-cart detail-page-view home-page-view 7 days of add-to-cart events in the last 90 days AND 10 occurrences per catalog item on average (with a 90 days window) of add-to-cart events OR 60 days of add-to-cart events in the last 90 days 100 unique catalog items for the add-to-cart event in the last 90 days 10,000 add-to-cart events in the last 90 days AND 7 days of home-page-view events in the last 90 days 10,000 home-page-view events in the last 90 days 3 months Others You May Like Click-through rate detail-page-view 7 days of detail-page-view events in the last 90 days AND 10 occurrences per catalog item on average (with a 90 days window) of detail-page-view events OR 60 days of detail-page-view events in the last 90 days 100 unique catalog items for the detail-page-view event in the last 90 days 10,000 detail-page-view events in the last 90 days 3 months Others You May Like Conversion rate add-to-cart detail-page-view 7 days of add-to-cart events in the last 90 days AND 10 occurrences per catalog item on average (with a 90 days window) of add-to-cart events OR 60 days of add-to-cart events in the last 90 days 100 unique catalog items for the add-to-cart event in the last 90 days 10,000 add-to-cart events in the last 90 days AND 7 days of detail-page-view events in the last 90 days AND 10 occurrences per catalog item on average (with a 90 days window) of detail-page-view events OR 60 days of detail-page-view events in the last 90 days 100 unique catalog items for the detail-page-view event in the last 90 days 10,000 detail-page-view events in the last 90 days 3 months Others You May Like Revenue per session add-to-cart detail-page-view 7 days of add-to-cart events in the last 90 days AND 10 occurrences per catalog item on average (with a 90 days window) of add-to-cart events OR 60 days of add-to-cart events in the last 90 days 100 unique catalog items for the add-to-cart event in the last 90 days 10,000 add-to-cart events in the last 90 days AND 7 days of detail-page-view events in the last 90 days AND 10 occurrences per catalog item on average (with a 90 days window) of detail-page-view events OR 60 days of detail-page-view events in the last 90 days 100 unique catalog items for the detail-page-view event in the last 90 days 10,000 detail-page-view events in the last 90 days 3 months Frequently Bought Together Revenue per session purchase-complete 10 occurrences per catalog item on average (with a 1 year window of purchase-complete events) OR 90 days of purchase-complete events in the last 1 year 100 unique catalog items for the purchase-complete event in the last 1 year 1,000 purchase-complete events in the last 1 year 3 months We recommend uploading events at least daily to maintain good data quality.
- If you need to upload more data, carefully review the data requirements listed to make sure whether some or all of them need to be fulfilled for that model, then import the user events or products required to create the model For how to import, see Import historical user events and Import catalog information .
- Set up event recording for detail-page-view events and events that match the page type you will deploy the Page-Level Optimization model on (for example, if you deploy the model on a home page, make sure you set up recording for home-page-view events).

