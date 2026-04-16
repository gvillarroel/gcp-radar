---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:15.293Z"
product_name: "Retail API"
product_slug: "retail-api"
feature_name: "Retail Search"
feature_slug: "retail-search"
latest_feature_date: "2022-04-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/retail/docs/configs"
  - "https://docs.cloud.google.com/retail/docs/conversational-commerce-dev-guide"
  - "https://docs.cloud.google.com/retail/docs/conversational-filtering"
  - "https://docs.cloud.google.com/retail/docs/reference/rest"
keywords:
  - "retail"
  - "search"
  - "the"
  - "product"
  - "capability"
  - "became"
  - "generally"
  - "available"
---

# Retail Search

Product: Retail API
Coverage: MEDIUM

## Step 02 Summary

The Retail Search product capability became generally available.

## Extended Definition

The Retail Search product capability became generally available.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/retail/docs/configs](https://docs.cloud.google.com/retail/docs/configs)
- [https://docs.cloud.google.com/retail/docs/conversational-commerce-dev-guide](https://docs.cloud.google.com/retail/docs/conversational-commerce-dev-guide)
- [https://docs.cloud.google.com/retail/docs/conversational-filtering](https://docs.cloud.google.com/retail/docs/conversational-filtering)
- [https://docs.cloud.google.com/retail/docs/reference/rest](https://docs.cloud.google.com/retail/docs/reference/rest)

## Supporting Pages

### "About serving configs \_|\_ Vertex AI Search for commerce \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/retail/docs/configs](https://docs.cloud.google.com/retail/docs/configs)
- Source ID: `site-docs-reference`
- Final score: 182
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If a random serving config id is placed as part of the search request, search will default to essentially an empty or non-configured serving control, allowing Vertex AI Search for commerce to still work with default search capability.
- Generally, diversification reduces the likelihood that similar products are shown in a recommendation panel, at the risk of removing some good recommendations.
- Serving configurations are available as of Recommendations AI v2 and Retail Search v2alpha.
- Support for placements in Vertex AI Search for commerce The placement identifies the serving config name and the set of models to use for the search.

### "Conversational Commerce agent developer's guide \_|\_ Vertex AI Search for\

- URL: [https://docs.cloud.google.com/retail/docs/conversational-commerce-dev-guide](https://docs.cloud.google.com/retail/docs/conversational-commerce-dev-guide)
- Source ID: `site-docs-reference`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- HTTP method and endpoint POST h tt ps : //retail.googleapis.com/v2/{placement=projects/ /locations/ /catalogs/ /servingConfigs/ }:search Core product Search API request: Initial query { "placement" : "projects/YOUR PROJECT ID/locations/global/catalogs/default catalog/servingConfigs/default search" , // Or if using legacy placements: // "placement": "projects/YOUR PROJECT ID/locations/global/catalogs/default catalog/placements/default search", "query" : "Help me plan a party" , // This is the original user query "visitorId" : "your visitor id" , "branch" : "projects/YOUR PROJECT ID/locations/global/catalogs/default catalog/branches/default branch" , "pageSize" : 20 , // Optional: Number of results to return per page "filter" : "categories:(\"Party Supplies\" OR \"Decorations\" OR \"Food & Drink\")" , // Mirroring the filter from the Conversational Commerce API "orderBy" : "relevance DESC" , // Optional "userInfo" : { // Optional: User information for enhanced personalization, should mirror Conversational Commerce API // "userId": "user123", "userAgent": "Chrome/120.0" }, "searchMode" : "PRODUCT SEARCH" // Typically for product searches } placement (Required) : The resource name of the Retail Search serving config or legacy placement.
- This early detection of intent and immediate availability of search refinements allows your model to make prompt decisions on how to handle your user's query and how to manage your user's experience concerning latency from LLM responses: For query types that don't expect a conversational text response, such as SIMPLE PRODUCT SEARCH , RETAIL IRRELEVANT , BLOCKLISTED , QUERY TYPE UNSPECIFIED , ORDER SUPPORT , DEALS AND COUPONS , STORE RELEVANT : Because query types are in the first chunk, your system knows immediately that no LLM answer is coming.
- The diagram shows how user events, product catalog data, and operational logs are processed, transformed, and integrated into a generative AI index and Retail Adapter service to handle search operations and fulfill user intents to return search results.
- Option A: End conversational web interface : Many retailers choose to transition your user to a standard search results page once a SIMPLE PRODUCT SEARCH is detected, effectively closing the chat window.

### "Conversational product filtering overview \_|\_ Vertex AI Search for commerce\

- URL: [https://docs.cloud.google.com/retail/docs/conversational-filtering](https://docs.cloud.google.com/retail/docs/conversational-filtering)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Business use case The conversational product filtering capability in guided search is specifically designed to address broad, ambiguous or very nuanced search queries.
- Edit generative questions Conversational product filtering encourages a human-in-the-loop interaction with the generative AI questions by allowing retailers to preliminarily edit, overwrite, or deselect AI-generated questions according to their preferences, based on the uploaded catalog.
- When a site user performs a broad search (like coffee table or red dress) that returns thousands of results, conversational product filtering intelligently prompts them with follow-up questions to quickly narrow down their options.
- Vertex AI Search for commerce conversational product filtering is an AI-powered tool that transforms search into a guided experience to accompany shoppers when they interact with large product catalogs.

### Vertex AI Search for commerce API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/retail/docs/reference/rest](https://docs.cloud.google.com/retail/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 166
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: v2beta.projects REST Resource: v2beta.projects.locations.catalogs REST Resource: v2beta.projects.locations.catalogs.attributesConfig REST Resource: v2beta.projects.locations.catalogs.branches.operations REST Resource: v2beta.projects.locations.catalogs.branches.products REST Resource: v2beta.projects.locations.catalogs.completionData REST Resource: v2beta.projects.locations.catalogs.controls REST Resource: v2beta.projects.locations.catalogs.generativeQuestion REST Resource: v2beta.projects.locations.catalogs.generativeQuestions REST Resource: v2beta.projects.locations.catalogs.models REST Resource: v2beta.projects.locations.catalogs.operations REST Resource: v2beta.projects.locations.catalogs.placements REST Resource: v2beta.projects.locations.catalogs.servingConfigs REST Resource: v2beta.projects.locations.catalogs.userEvents REST Resource: v2beta.projects.locations.operations REST Resource: v2beta.projects.operations REST Resource: v2alpha.projects REST Resource: v2alpha.projects.locations.catalogs REST Resource: v2alpha.projects.locations.catalogs.attributesConfig REST Resource: v2alpha.projects.locations.catalogs.branches REST Resource: v2alpha.projects.locations.catalogs.branches.operations REST Resource: v2alpha.projects.locations.catalogs.branches.places.operations REST Resource: v2alpha.projects.locations.catalogs.branches.products REST Resource: v2alpha.projects.locations.catalogs.completionData REST Resource: v2alpha.projects.locations.catalogs.controls REST Resource: v2alpha.projects.locations.catalogs.generativeQuestion REST Resource: v2alpha.projects.locations.catalogs.generativeQuestions REST Resource: v2alpha.projects.locations.catalogs.merchantCenterAccountLinks REST Resource: v2alpha.projects.locations.catalogs.models REST Resource: v2alpha.projects.locations.catalogs.operations REST Resource: v2alpha.projects.locations.catalogs.placements REST Resource: v2alpha.projects.locations.catalogs.servingConfigs REST Resource: v2alpha.projects.locations.catalogs.userEvents REST Resource: v2alpha.projects.locations.operations REST Resource: v2alpha.projects.operations REST Resource: v2alpha.projects.retailProject REST Resource: v2.projects.locations.catalogs REST Resource: v2.projects.locations.catalogs.attributesConfig REST Resource: v2.projects.locations.catalogs.branches.operations REST Resource: v2.projects.locations.catalogs.branches.products REST Resource: v2.projects.locations.catalogs.completionData REST Resource: v2.projects.locations.catalogs.controls REST Resource: v2.projects.locations.catalogs.generativeQuestion REST Resource: v2.projects.locations.catalogs.generativeQuestions REST Resource: v2.projects.locations.catalogs.models REST Resource: v2.projects.locations.catalogs.operations REST Resource: v2.projects.locations.catalogs.placements REST Resource: v2.projects.locations.catalogs.servingConfigs REST Resource: v2.projects.locations.catalogs.userEvents REST Resource: v2.projects.locations.operations REST Resource: v2.projects.operations Service: retail.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- REST Resource: v2alpha.projects Methods enrollSolution POST /v2alpha/{project=projects/ }:enrollSolution The method enrolls a solution of type Retail Search into a project. getAlertConfig GET /v2alpha/{name=projects/ /alertConfig} Get the AlertConfig of the requested project. getLoggingConfig GET /v2alpha/{name=projects/ /loggingConfig} Gets the LoggingConfig of the requested project. getRetailProject GET /v2alpha/{name=projects/ /retailProject} Gets the project. listEnrolledSolutions GET /v2alpha/{parent=projects/ }:enrolledSolutions Lists all the retail API solutions the project has enrolled. updateAlertConfig PATCH /v2alpha/{alertConfig.name=projects/ /alertConfig} Update the alert config of the requested project. updateLoggingConfig PATCH /v2alpha/{loggingConfig.name=projects/ /loggingConfig} Updates the LoggingConfig of the requested project.
- REST Resource: v2alpha.projects.locations.catalogs Methods completeQuery GET /v2alpha/{catalog=projects/ /locations/ /catalogs/ }:completeQuery Completes the specified prefix with keyword suggestions. exportAnalyticsMetrics POST /v2alpha/{catalog=projects/ /locations/ /catalogs/ }:exportAnalyticsMetrics Exports analytics metrics. getAttributesConfig GET /v2alpha/{name=projects/ /locations/ /catalogs/ /attributesConfig} Gets an AttributesConfig . getCompletionConfig GET /v2alpha/{name=projects/ /locations/ /catalogs/ /completionConfig} Gets a CompletionConfig . getConversationalSearchCustomizationConfig GET /v2alpha/{name=projects/ /locations/ /catalogs/ }/conversationalSearchCustomizationConfig Returns the conversational search customization config for a given catalog. getDefaultBranch GET /v2alpha/{catalog=projects/ /locations/ /catalogs/ }:getDefaultBranch Get which branch is currently default branch set by CatalogService.SetDefaultBranch method under a specified parent catalog. getGenerativeQuestionFeature GET /v2alpha/{catalog=projects/ /locations/ /catalogs/ }/generativeQuestionFeature Manages overal generative question feature state -- enables toggling feature on and off. list GET /v2alpha/{parent=projects/ /locations/ }/catalogs Lists all the Catalog s associated with the project. patch PATCH /v2alpha/{catalog.name=projects/ /locations/ /catalogs/ } Updates the Catalog s. setDefaultBranch POST /v2alpha/{catalog=projects/ /locations/ /catalogs/ }:setDefaultBranch Set a specified branch id as default branch. updateAttributesConfig PATCH /v2alpha/{attributesConfig.name=projects/ /locations/ /catalogs/ /attributesConfig} Updates the AttributesConfig . updateCompletionConfig PATCH /v2alpha/{completionConfig.name=projects/ /locations/ /catalogs/ /completionConfig} Updates the CompletionConfig s. updateConversationalSearchCustomizationConfig PATCH /v2alpha/{conversationalSearchCustomizationConfig.catalog=projects/ /locations/ /catalogs/ }/conversationalSearchCustomizationConfig Updates the conversational search customization config for a given catalog. updateGenerativeQuestion PATCH /v2alpha/{generativeQuestionConfig.catalog=projects/ /locations/ /catalogs/ }/generativeQuestion Allows management of individual questions. updateGenerativeQuestionFeature PATCH /v2alpha/{generativeQuestionsFeatureConfig.catalog=projects/ /locations/ /catalogs/ }/generativeQuestionFeature Manages overal generative question feature state -- enables toggling feature on and off.
- REST Resource: v2beta.projects.locations.catalogs Methods completeQuery GET /v2beta/{catalog=projects/ /locations/ /catalogs/ }:completeQuery Completes the specified prefix with keyword suggestions. exportAnalyticsMetrics POST /v2beta/{catalog=projects/ /locations/ /catalogs/ }:exportAnalyticsMetrics Exports analytics metrics. getAttributesConfig GET /v2beta/{name=projects/ /locations/ /catalogs/ /attributesConfig} Gets an AttributesConfig . getCompletionConfig GET /v2beta/{name=projects/ /locations/ /catalogs/ /completionConfig} Gets a CompletionConfig . getConversationalSearchCustomizationConfig GET /v2beta/{name=projects/ /locations/ /catalogs/ }/conversationalSearchCustomizationConfig Returns the conversational search customization config for a given catalog. getDefaultBranch GET /v2beta/{catalog=projects/ /locations/ /catalogs/ }:getDefaultBranch Get which branch is currently default branch set by CatalogService.SetDefaultBranch method under a specified parent catalog. getGenerativeQuestionFeature GET /v2beta/{catalog=projects/ /locations/ /catalogs/ }/generativeQuestionFeature Manages overal generative question feature state -- enables toggling feature on and off. list GET /v2beta/{parent=projects/ /locations/ }/catalogs Lists all the Catalog s associated with the project. patch PATCH /v2beta/{catalog.name=projects/ /locations/ /catalogs/ } Updates the Catalog s. setDefaultBranch POST /v2beta/{catalog=projects/ /locations/ /catalogs/ }:setDefaultBranch Set a specified branch id as default branch. updateAttributesConfig PATCH /v2beta/{attributesConfig.name=projects/ /locations/ /catalogs/ /attributesConfig} Updates the AttributesConfig . updateCompletionConfig PATCH /v2beta/{completionConfig.name=projects/ /locations/ /catalogs/ /completionConfig} Updates the CompletionConfig s. updateConversationalSearchCustomizationConfig PATCH /v2beta/{conversationalSearchCustomizationConfig.catalog=projects/ /locations/ /catalogs/ }/conversationalSearchCustomizationConfig Updates the conversational search customization config for a given catalog. updateGenerativeQuestion PATCH /v2beta/{generativeQuestionConfig.catalog=projects/ /locations/ /catalogs/ }/generativeQuestion Allows management of individual questions. updateGenerativeQuestionFeature PATCH /v2beta/{generativeQuestionsFeatureConfig.catalog=projects/ /locations/ /catalogs/ }/generativeQuestionFeature Manages overal generative question feature state -- enables toggling feature on and off.

