---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:15.268Z"
product_name: "Retail API"
product_slug: "retail-api"
feature_name: "Conversational search"
feature_slug: "conversational-search"
latest_feature_date: "2024-09-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/retail/docs/conversational-filtering-dev-guide"
  - "https://docs.cloud.google.com/retail/docs/conversational-commerce-dev-guide"
  - "https://docs.cloud.google.com/retail/docs/conversational-filtering"
  - "https://docs.cloud.google.com/retail/docs/reference/rest"
keywords:
  - "conversational"
  - "search"
  - "uses"
  - "llm"
  - "generated"
  - "questions"
  - "for"
  - "enabled"
---

# Conversational search

Product: Retail API
Coverage: MEDIUM

## Step 02 Summary

Conversational search uses LLM-generated questions for enabled catalog attributes to help users refine search results.

## Extended Definition

Conversational search uses LLM-generated questions for enabled catalog attributes to help users refine search results.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/retail/docs/conversational-filtering-dev-guide](https://docs.cloud.google.com/retail/docs/conversational-filtering-dev-guide)
- [https://docs.cloud.google.com/retail/docs/conversational-commerce-dev-guide](https://docs.cloud.google.com/retail/docs/conversational-commerce-dev-guide)
- [https://docs.cloud.google.com/retail/docs/conversational-filtering](https://docs.cloud.google.com/retail/docs/conversational-filtering)
- [https://docs.cloud.google.com/retail/docs/reference/rest](https://docs.cloud.google.com/retail/docs/reference/rest)

## Supporting Pages

### "Conversational filtering developer's guide \_|\_ Vertex AI Search for commerce\

- URL: [https://docs.cloud.google.com/retail/docs/conversational-filtering-dev-guide](https://docs.cloud.google.com/retail/docs/conversational-filtering-dev-guide)
- Source ID: `site-docs-reference`
- Final score: 308
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Service enabled by conversational product filtering The generative questions service ( service GenerativeQuestionService{...} ) is used for managing LLM-generated questions.
- These are: 1,000 queries per day : After you reach this first threshold, a conversation plan is generated that evaluates your inputs and outputs: Inputs : filter count in events Outputs : conversational coverage 25% conversational coverage : Calculated by Vertex AI Search for commerce models, conversational coverage means the percentage of queries that have one question.
- Administrator experience Manage the generative questions and conversational product filtering directly in the API, or in the Search for commerce console , and set it up in the Data quality and Evaluate sections of the Search for commerce console.
- The AI that drives the LLM-generated questions learns from the queries and changes the weighting for every query, so that "shirt", for example, weighs the category very heavily, but "XL red shirt" weighs category, size and color.

### "Conversational Commerce agent developer's guide \_|\_ Vertex AI Search for\

- URL: [https://docs.cloud.google.com/retail/docs/conversational-commerce-dev-guide](https://docs.cloud.google.com/retail/docs/conversational-commerce-dev-guide)
- Source ID: `site-docs-reference`
- Final score: 284
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Conversational Commerce agent uses search query categories to determine whether an LLM-based answer is generated and how end-user queries are handled by the Conversational and Search APIs for these scenarios: Categories Query classifications #1.
- Send user query Example user input : Help me plan a party To enable both conversational commerce agent and conversational product filtering, ensure that your ConversationalSearchRequest includes this configuration: Conversational Commerce API request—Initial query { "query" : "Help me plan a party" , "branch" : "projects/{project id}/locations/{location id}/catalogs/{catalog id}/branches/default branch" , "placement" : "projects/YOUR PROJECT ID/locations/global/catalogs/default catalog/placements/default search" , "visitorId" : "your visitor id" , "conversationId" : "" , // Leave empty for the first query, or populate for ongoing conversation "searchParams" : { // IMPORTANT: These search parameters should mirror the configuration // of your Commerce Search API calls to ensure consistency. "filter" : "categories:(\"Party Supplies\" OR \"Decorations\" OR \"Food & Drink\")" }, "userInfo" : { // Optional: User information for enhanced personalization }, "conversationalFilteringSpec" : { "conversationalFilteringMode" : "ENABLED" // Crucial for enabling product filtering } } The key configurations are: conversationalFilteringMode: ENABLED : Setting this field to ENABLED in your conversationalFilteringSpec informs the API that your system can handle conversational product filtering, allowing the API to provide relevant filtering-specific responses.
- HTTP method and endpoint POST h tt ps : //retail.googleapis.com/v2/{placement=projects/ /locations/ /catalogs/ /placements/ }:conversationalSearch Conversational API request: Initial query { "query" : "Help me plan a party" , "branch" : "projects/{project id}/locations/{location id}/catalogs/default catalog/branches/default branch" , "placement" : "projects/{project id}/locations/global/catalogs/default catalog/placements/default search" , "visitorId" : "your visitor id" , "conversationId" : "" , // Leave empty for the first query "searchParams" : { // IMPORTANT: These search parameters should mirror the configuration // of your core Search API calls to ensure consistency between LLM answers and search results. "filter" : "categories:(\"Party Supplies\" OR \"Decorations\" OR \"Food & Drink\")" }, "userInfo" : { // Optional: User information for enhanced personalization // Example: "userId": "user123", "userAgent": "Chrome/120.0" }, "conversationalFilteringSpec" : { // Optional: Controls conversational filtering behavior.
- Sample API request placement : "projects/118220807021/locations/global/catalogs/default catalog/placements/default search" branch : "projects/118220807021/locations/global/catalogs/default catalog/branches/default branch" conversation id : "1577511e-36ed-4054-8e07-48d1ca016bcb" query : "Help me plan a party" conversational filtering spec { conversationalFilteringMode : ENABLED } visitor id : "test" Sample API response user query types : "INTENT REFINEMENT" conversational text response : "To plan a party, you\'ll need decorations, snacks, party supplies, drinks, and a cake." followup question { followup question : "What kind of party are you planning?" } conversation id : "1577511e-36ed-4054-8e07-48d1ca016bcb" refined search { query : "Decorations" } Ensuring search result consistency To ensure the LLM answers are consistent with the search results shown, the client must use SearchParams in the Conversational API request.

### "Conversational product filtering overview \_|\_ Vertex AI Search for commerce\

- URL: [https://docs.cloud.google.com/retail/docs/conversational-filtering](https://docs.cloud.google.com/retail/docs/conversational-filtering)
- Source ID: `site-docs-root`
- Final score: 234
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When a site user performs a broad search (like coffee table or red dress) that returns thousands of results, conversational product filtering intelligently prompts them with follow-up questions to quickly narrow down their options.
- Edit generative questions Conversational product filtering encourages a human-in-the-loop interaction with the generative AI questions by allowing retailers to preliminarily edit, overwrite, or deselect AI-generated questions according to their preferences, based on the uploaded catalog.
- If conversational product filtering is enabled, follow-up questions on the site drive a conversation that ensues until one of the three following scenarios occur: A preconfigured minimum product count is reached (a conversation is not useful when only two products show up).
- Home Documentation Industry solutions Vertex AI Search for commerce Guides Send feedback Conversational product filtering overview Stay organized with collections Save and categorize content based on your preferences.

### Vertex AI Search for commerce API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/retail/docs/reference/rest](https://docs.cloud.google.com/retail/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 226
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: v2alpha.projects.locations.catalogs Methods completeQuery GET /v2alpha/{catalog=projects/ /locations/ /catalogs/ }:completeQuery Completes the specified prefix with keyword suggestions. exportAnalyticsMetrics POST /v2alpha/{catalog=projects/ /locations/ /catalogs/ }:exportAnalyticsMetrics Exports analytics metrics. getAttributesConfig GET /v2alpha/{name=projects/ /locations/ /catalogs/ /attributesConfig} Gets an AttributesConfig . getCompletionConfig GET /v2alpha/{name=projects/ /locations/ /catalogs/ /completionConfig} Gets a CompletionConfig . getConversationalSearchCustomizationConfig GET /v2alpha/{name=projects/ /locations/ /catalogs/ }/conversationalSearchCustomizationConfig Returns the conversational search customization config for a given catalog. getDefaultBranch GET /v2alpha/{catalog=projects/ /locations/ /catalogs/ }:getDefaultBranch Get which branch is currently default branch set by CatalogService.SetDefaultBranch method under a specified parent catalog. getGenerativeQuestionFeature GET /v2alpha/{catalog=projects/ /locations/ /catalogs/ }/generativeQuestionFeature Manages overal generative question feature state -- enables toggling feature on and off. list GET /v2alpha/{parent=projects/ /locations/ }/catalogs Lists all the Catalog s associated with the project. patch PATCH /v2alpha/{catalog.name=projects/ /locations/ /catalogs/ } Updates the Catalog s. setDefaultBranch POST /v2alpha/{catalog=projects/ /locations/ /catalogs/ }:setDefaultBranch Set a specified branch id as default branch. updateAttributesConfig PATCH /v2alpha/{attributesConfig.name=projects/ /locations/ /catalogs/ /attributesConfig} Updates the AttributesConfig . updateCompletionConfig PATCH /v2alpha/{completionConfig.name=projects/ /locations/ /catalogs/ /completionConfig} Updates the CompletionConfig s. updateConversationalSearchCustomizationConfig PATCH /v2alpha/{conversationalSearchCustomizationConfig.catalog=projects/ /locations/ /catalogs/ }/conversationalSearchCustomizationConfig Updates the conversational search customization config for a given catalog. updateGenerativeQuestion PATCH /v2alpha/{generativeQuestionConfig.catalog=projects/ /locations/ /catalogs/ }/generativeQuestion Allows management of individual questions. updateGenerativeQuestionFeature PATCH /v2alpha/{generativeQuestionsFeatureConfig.catalog=projects/ /locations/ /catalogs/ }/generativeQuestionFeature Manages overal generative question feature state -- enables toggling feature on and off.
- REST Resource: v2beta.projects.locations.catalogs Methods completeQuery GET /v2beta/{catalog=projects/ /locations/ /catalogs/ }:completeQuery Completes the specified prefix with keyword suggestions. exportAnalyticsMetrics POST /v2beta/{catalog=projects/ /locations/ /catalogs/ }:exportAnalyticsMetrics Exports analytics metrics. getAttributesConfig GET /v2beta/{name=projects/ /locations/ /catalogs/ /attributesConfig} Gets an AttributesConfig . getCompletionConfig GET /v2beta/{name=projects/ /locations/ /catalogs/ /completionConfig} Gets a CompletionConfig . getConversationalSearchCustomizationConfig GET /v2beta/{name=projects/ /locations/ /catalogs/ }/conversationalSearchCustomizationConfig Returns the conversational search customization config for a given catalog. getDefaultBranch GET /v2beta/{catalog=projects/ /locations/ /catalogs/ }:getDefaultBranch Get which branch is currently default branch set by CatalogService.SetDefaultBranch method under a specified parent catalog. getGenerativeQuestionFeature GET /v2beta/{catalog=projects/ /locations/ /catalogs/ }/generativeQuestionFeature Manages overal generative question feature state -- enables toggling feature on and off. list GET /v2beta/{parent=projects/ /locations/ }/catalogs Lists all the Catalog s associated with the project. patch PATCH /v2beta/{catalog.name=projects/ /locations/ /catalogs/ } Updates the Catalog s. setDefaultBranch POST /v2beta/{catalog=projects/ /locations/ /catalogs/ }:setDefaultBranch Set a specified branch id as default branch. updateAttributesConfig PATCH /v2beta/{attributesConfig.name=projects/ /locations/ /catalogs/ /attributesConfig} Updates the AttributesConfig . updateCompletionConfig PATCH /v2beta/{completionConfig.name=projects/ /locations/ /catalogs/ /completionConfig} Updates the CompletionConfig s. updateConversationalSearchCustomizationConfig PATCH /v2beta/{conversationalSearchCustomizationConfig.catalog=projects/ /locations/ /catalogs/ }/conversationalSearchCustomizationConfig Updates the conversational search customization config for a given catalog. updateGenerativeQuestion PATCH /v2beta/{generativeQuestionConfig.catalog=projects/ /locations/ /catalogs/ }/generativeQuestion Allows management of individual questions. updateGenerativeQuestionFeature PATCH /v2beta/{generativeQuestionsFeatureConfig.catalog=projects/ /locations/ /catalogs/ }/generativeQuestionFeature Manages overal generative question feature state -- enables toggling feature on and off.
- REST Resource: v2.projects.locations.catalogs Methods completeQuery GET /v2/{catalog=projects/ /locations/ /catalogs/ }:completeQuery Completes the specified prefix with keyword suggestions. exportAnalyticsMetrics POST /v2/{catalog=projects/ /locations/ /catalogs/ }:exportAnalyticsMetrics Exports analytics metrics. getAttributesConfig GET /v2/{name=projects/ /locations/ /catalogs/ /attributesConfig} Gets an AttributesConfig . getCompletionConfig GET /v2/{name=projects/ /locations/ /catalogs/ /completionConfig} Gets a CompletionConfig . getConversationalSearchCustomizationConfig GET /v2/{name=projects/ /locations/ /catalogs/ }/conversationalSearchCustomizationConfig Returns the conversational search customization config for a given catalog. getDefaultBranch GET /v2/{catalog=projects/ /locations/ /catalogs/ }:getDefaultBranch Get which branch is currently default branch set by CatalogService.SetDefaultBranch method under a specified parent catalog. getGenerativeQuestionFeature GET /v2/{catalog=projects/ /locations/ /catalogs/ }/generativeQuestionFeature Manages overal generative question feature state -- enables toggling feature on and off. list GET /v2/{parent=projects/ /locations/ }/catalogs Lists all the Catalog s associated with the project. patch PATCH /v2/{catalog.name=projects/ /locations/ /catalogs/ } Updates the Catalog s. setDefaultBranch POST /v2/{catalog=projects/ /locations/ /catalogs/ }:setDefaultBranch Set a specified branch id as default branch. updateAttributesConfig PATCH /v2/{attributesConfig.name=projects/ /locations/ /catalogs/ /attributesConfig} Updates the AttributesConfig . updateCompletionConfig PATCH /v2/{completionConfig.name=projects/ /locations/ /catalogs/ /completionConfig} Updates the CompletionConfig s. updateConversationalSearchCustomizationConfig PATCH /v2/{conversationalSearchCustomizationConfig.catalog=projects/ /locations/ /catalogs/ }/conversationalSearchCustomizationConfig Updates the conversational search customization config for a given catalog. updateGenerativeQuestion PATCH /v2/{generativeQuestionConfig.catalog=projects/ /locations/ /catalogs/ }/generativeQuestion Allows management of individual questions. updateGenerativeQuestionFeature PATCH /v2/{generativeQuestionsFeatureConfig.catalog=projects/ /locations/ /catalogs/ }/generativeQuestionFeature Manages overal generative question feature state -- enables toggling feature on and off.
- REST Resource: v2alpha.projects.locations.catalogs.servingConfigs Methods addControl POST /v2alpha/{servingConfig=projects/ /locations/ /catalogs/ /servingConfigs/ }:addControl Enables a Control on the specified ServingConfig. conversationalSearch POST /v2alpha/{placement=projects/ /locations/ /catalogs/ /servingConfigs/ }:conversationalSearch Performs a conversational search. create POST /v2alpha/{parent=projects/ /locations/ /catalogs/ }/servingConfigs Creates a ServingConfig. delete DELETE /v2alpha/{name=projects/ /locations/ /catalogs/ /servingConfigs/ } Deletes a ServingConfig. get GET /v2alpha/{name=projects/ /locations/ /catalogs/ /servingConfigs/ } Gets a ServingConfig. list GET /v2alpha/{parent=projects/ /locations/ /catalogs/ }/servingConfigs Lists all ServingConfigs linked to this catalog. patch PATCH /v2alpha/{servingConfig.name=projects/ /locations/ /catalogs/ /servingConfigs/ } Updates a ServingConfig. predict POST /v2alpha/{placement=projects/ /locations/ /catalogs/ /servingConfigs/ }:predict Makes a recommendation prediction. removeControl POST /v2alpha/{servingConfig=projects/ /locations/ /catalogs/ /servingConfigs/ }:removeControl Disables a Control on the specified ServingConfig. search POST /v2alpha/{placement=projects/ /locations/ /catalogs/ /servingConfigs/ }:search Performs a search.

