---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:15.265Z"
product_name: "Retail API"
product_slug: "retail-api"
feature_name: "Conversational product filtering"
feature_slug: "conversational-product-filtering"
latest_feature_date: "2025-09-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/retail/docs/conversational-filtering-dev-guide"
  - "https://docs.cloud.google.com/retail/docs/conversational-filtering"
  - "https://docs.cloud.google.com/retail/docs/conversational-commerce-dev-guide"
  - "https://docs.cloud.google.com/retail/docs/conversational-filtering-ux-guide"
keywords:
  - "conversational"
  - "product"
  - "filtering"
  - "uses"
  - "llm"
  - "generated"
  - "questions"
  - "to"
---

# Conversational product filtering

Product: Retail API
Coverage: MEDIUM

## Step 02 Summary

Conversational product filtering uses LLM-generated questions to narrow search results based on enabled catalog attributes; Conversational product filtering uses LLM-generated questions to narrow search results based on enabled catalog attributes.

## Extended Definition

Conversational product filtering uses LLM-generated questions to narrow search results based on enabled catalog attributes; Conversational product filtering uses LLM-generated questions to narrow search results based on enabled catalog attributes.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/retail/docs/conversational-filtering-dev-guide](https://docs.cloud.google.com/retail/docs/conversational-filtering-dev-guide)
- [https://docs.cloud.google.com/retail/docs/conversational-filtering](https://docs.cloud.google.com/retail/docs/conversational-filtering)
- [https://docs.cloud.google.com/retail/docs/conversational-commerce-dev-guide](https://docs.cloud.google.com/retail/docs/conversational-commerce-dev-guide)
- [https://docs.cloud.google.com/retail/docs/conversational-filtering-ux-guide](https://docs.cloud.google.com/retail/docs/conversational-filtering-ux-guide)

## Supporting Pages

### "Conversational filtering developer's guide \_|\_ Vertex AI Search for commerce\

- URL: [https://docs.cloud.google.com/retail/docs/conversational-filtering-dev-guide](https://docs.cloud.google.com/retail/docs/conversational-filtering-dev-guide)
- Source ID: `site-docs-reference`
- Final score: 317
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Service enabled by conversational product filtering The generative questions service ( service GenerativeQuestionService{...} ) is used for managing LLM-generated questions.
- Use generative questions in conversational product filtering The generative question service API provides controls to mitigate potential inconsistencies in the LLM output.
- API integration Objects : GenerativeQuestionsFeatureConfig GenerativeQuestionConfig GenerativeQuestions Service UpdateGenerativeQuestionsFeatureConfiguration UpdateGenerativeQuestionConfig ListGenerativeQuestionConfigs GetGenerativeQuestionFeatureConfig BatchUpdateGenerativeQuestionConfigs The core to integrating conversational product filtering is defining the question resource.
- Administrator experience Manage the generative questions and conversational product filtering directly in the API, or in the Search for commerce console , and set it up in the Data quality and Evaluate sections of the Search for commerce console.

### "Conversational product filtering overview \_|\_ Vertex AI Search for commerce\

- URL: [https://docs.cloud.google.com/retail/docs/conversational-filtering](https://docs.cloud.google.com/retail/docs/conversational-filtering)
- Source ID: `site-docs-root`
- Final score: 301
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Edit generative questions Conversational product filtering encourages a human-in-the-loop interaction with the generative AI questions by allowing retailers to preliminarily edit, overwrite, or deselect AI-generated questions according to their preferences, based on the uploaded catalog.
- Businesses use conversational filtering to: Accelerate product discovery : Help shoppers quickly narrow down vast product selections (such as going from 5,000 area rugs to a few hundred targeted results) by asking relevant questions.
- When a site user performs a broad search (like coffee table or red dress) that returns thousands of results, conversational product filtering intelligently prompts them with follow-up questions to quickly narrow down their options.
- Conversational product filtering runs out of AI-generated questions.

### "Conversational Commerce agent developer's guide \_|\_ Vertex AI Search for\

- URL: [https://docs.cloud.google.com/retail/docs/conversational-commerce-dev-guide](https://docs.cloud.google.com/retail/docs/conversational-commerce-dev-guide)
- Source ID: `site-docs-reference`
- Final score: 279
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Conversational Commerce agent uses search query categories to determine whether an LLM-based answer is generated and how end-user queries are handled by the Conversational and Search APIs for these scenarios: Categories Query classifications #1.
- Send user query Example user input : Help me plan a party To enable both conversational commerce agent and conversational product filtering, ensure that your ConversationalSearchRequest includes this configuration: Conversational Commerce API request—Initial query { "query" : "Help me plan a party" , "branch" : "projects/{project id}/locations/{location id}/catalogs/{catalog id}/branches/default branch" , "placement" : "projects/YOUR PROJECT ID/locations/global/catalogs/default catalog/placements/default search" , "visitorId" : "your visitor id" , "conversationId" : "" , // Leave empty for the first query, or populate for ongoing conversation "searchParams" : { // IMPORTANT: These search parameters should mirror the configuration // of your Commerce Search API calls to ensure consistency. "filter" : "categories:(\"Party Supplies\" OR \"Decorations\" OR \"Food & Drink\")" }, "userInfo" : { // Optional: User information for enhanced personalization }, "conversationalFilteringSpec" : { "conversationalFilteringMode" : "ENABLED" // Crucial for enabling product filtering } } The key configurations are: conversationalFilteringMode: ENABLED : Setting this field to ENABLED in your conversationalFilteringSpec informs the API that your system can handle conversational product filtering, allowing the API to provide relevant filtering-specific responses.
- Example user input (Clicking a suggested answer) : Balloons Simple product search Code snippets Conversational Commerce API request—Continue filtering { "query" : "princess birthday decorations" , // original query. optional. "placement" : "projects/YOUR PROJECT ID/locations/global/catalogs/default catalog/placements/default search" , "branch" : "projects/{project id}/locations/{location id}/catalogs/{catalog id}/branches/default branch" , "visitorId" : "your visitor id" , "conversationId" : "1577511e-36ed-4054-8e07-48d1ca016bcb" , // Maintain conversation ID "searchParams" : {}, "userInfo" : {}, "conversationalFilteringSpec" : { "conversationalFilteringMode" : "ENABLED" , "userAnswer" : { "selectedAnswer" : { "productAttributeValue" : { "name" : "attributes.type" , "value" : "Balloons" // user selected value } } } } } Conversational Commerce API response—Continue filtering { "userQueryTypes" : [ "SIMPLE PRODUCT SEARCH" ], "conversationId" : "1577511e-36ed-4054-8e07-48d1ca016bcb" , "refinedSearch" : [ { "query" : "princess birthday balloons" } ], "state" : "SUCCEEDED" } Action The API responds with a SIMPLE PRODUCT SEARCH query but without the conversationalFilteringResult field, indicating that the guided filtering flow has concluded.
- HTTP method and endpoint POST h tt ps : //retail.googleapis.com/v2/{placement=projects/ /locations/ /catalogs/ /placements/ }:conversationalSearch Conversational API request: Initial query { "query" : "Help me plan a party" , "branch" : "projects/{project id}/locations/{location id}/catalogs/default catalog/branches/default branch" , "placement" : "projects/{project id}/locations/global/catalogs/default catalog/placements/default search" , "visitorId" : "your visitor id" , "conversationId" : "" , // Leave empty for the first query "searchParams" : { // IMPORTANT: These search parameters should mirror the configuration // of your core Search API calls to ensure consistency between LLM answers and search results. "filter" : "categories:(\"Party Supplies\" OR \"Decorations\" OR \"Food & Drink\")" }, "userInfo" : { // Optional: User information for enhanced personalization // Example: "userId": "user123", "userAgent": "Chrome/120.0" }, "conversationalFilteringSpec" : { // Optional: Controls conversational filtering behavior.

### "Conversational filtering user experience guide \_|\_ Vertex AI Search for\

- URL: [https://docs.cloud.google.com/retail/docs/conversational-filtering-ux-guide](https://docs.cloud.google.com/retail/docs/conversational-filtering-ux-guide)
- Source ID: `site-docs-reference`
- Final score: 249
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Recommendation : The core idea behind conversational filtering lets you quickly deploy dynamic experiences like these across all your products, not just for the few top queries that the visual elements were designed for.
- Replacing static, hard-coded filter elements with dynamic conversational filtering to liberate screen space for more targeted products is recommended.
- Filter types Conversational product filtering enables the option to use both multiple choice selections on the site.
- User interaction with filters This section describes how to configure conversational product filtering.

