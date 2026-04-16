---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:15.266Z"
product_name: "Retail API"
product_slug: "retail-api"
feature_name: "Conversational Commerce agent"
feature_slug: "conversational-commerce-agent"
latest_feature_date: "2025-09-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/retail/docs/conversational-commerce-dev-guide"
  - "https://docs.cloud.google.com/retail/docs/conversational-commerce-ux-guide"
  - "https://docs.cloud.google.com/retail/docs/conversational-search"
  - "https://docs.cloud.google.com/retail/docs/conversational-agents-both-features"
keywords:
  - "conversational"
  - "commerce"
  - "agent"
  - "the"
  - "uses"
  - "llms"
  - "and"
  - "product"
---

# Conversational Commerce agent

Product: Retail API
Coverage: MEDIUM

## Step 02 Summary

The Conversational Commerce agent uses LLMs and conversational product filtering to provide an ongoing conversational shopping experience; The Conversational Commerce agent uses LLMs and conversational product filtering to provide an ongoing conversational experience.

## Extended Definition

The Conversational Commerce agent uses LLMs and conversational product filtering to provide an ongoing conversational shopping experience; The Conversational Commerce agent uses LLMs and conversational product filtering to provide an ongoing conversational experience.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/retail/docs/conversational-commerce-dev-guide](https://docs.cloud.google.com/retail/docs/conversational-commerce-dev-guide)
- [https://docs.cloud.google.com/retail/docs/conversational-commerce-ux-guide](https://docs.cloud.google.com/retail/docs/conversational-commerce-ux-guide)
- [https://docs.cloud.google.com/retail/docs/conversational-search](https://docs.cloud.google.com/retail/docs/conversational-search)
- [https://docs.cloud.google.com/retail/docs/conversational-agents-both-features](https://docs.cloud.google.com/retail/docs/conversational-agents-both-features)

## Supporting Pages

### "Conversational Commerce agent developer's guide \_|\_ Vertex AI Search for\

- URL: [https://docs.cloud.google.com/retail/docs/conversational-commerce-dev-guide](https://docs.cloud.google.com/retail/docs/conversational-commerce-dev-guide)
- Source ID: `site-docs-reference`
- Final score: 315
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Send user query Example user input : Help me plan a party To enable both conversational commerce agent and conversational product filtering, ensure that your ConversationalSearchRequest includes this configuration: Conversational Commerce API request—Initial query { "query" : "Help me plan a party" , "branch" : "projects/{project id}/locations/{location id}/catalogs/{catalog id}/branches/default branch" , "placement" : "projects/YOUR PROJECT ID/locations/global/catalogs/default catalog/placements/default search" , "visitorId" : "your visitor id" , "conversationId" : "" , // Leave empty for the first query, or populate for ongoing conversation "searchParams" : { // IMPORTANT: These search parameters should mirror the configuration // of your Commerce Search API calls to ensure consistency. "filter" : "categories:(\"Party Supplies\" OR \"Decorations\" OR \"Food & Drink\")" }, "userInfo" : { // Optional: User information for enhanced personalization }, "conversationalFilteringSpec" : { "conversationalFilteringMode" : "ENABLED" // Crucial for enabling product filtering } } The key configurations are: conversationalFilteringMode: ENABLED : Setting this field to ENABLED in your conversationalFilteringSpec informs the API that your system can handle conversational product filtering, allowing the API to provide relevant filtering-specific responses.
- HTTP method and endpoint POST h tt ps : //retail.googleapis.com/v2/{placement=projects/ /locations/ /catalogs/ /servingConfigs/ }:search Core product Search API request: Initial query { "placement" : "projects/YOUR PROJECT ID/locations/global/catalogs/default catalog/servingConfigs/default search" , // Or if using legacy placements: // "placement": "projects/YOUR PROJECT ID/locations/global/catalogs/default catalog/placements/default search", "query" : "Help me plan a party" , // This is the original user query "visitorId" : "your visitor id" , "branch" : "projects/YOUR PROJECT ID/locations/global/catalogs/default catalog/branches/default branch" , "pageSize" : 20 , // Optional: Number of results to return per page "filter" : "categories:(\"Party Supplies\" OR \"Decorations\" OR \"Food & Drink\")" , // Mirroring the filter from the Conversational Commerce API "orderBy" : "relevance DESC" , // Optional "userInfo" : { // Optional: User information for enhanced personalization, should mirror Conversational Commerce API // "userId": "user123", "userAgent": "Chrome/120.0" }, "searchMode" : "PRODUCT SEARCH" // Typically for product searches } placement (Required) : The resource name of the Retail Search serving config or legacy placement.
- Sample API request placement : "projects/118220807021/locations/global/catalogs/default catalog/placements/default search" branch : "projects/118220807021/locations/global/catalogs/default catalog/branches/default branch" query : "show me some monster energy drinks" visitor id : "test" conversational filtering spec { conversationalFilteringMode : DISABLED } Sample API response user query types : "SIMPLE PRODUCT SEARCH" conversation id : "479fd093-c701-4899-bcc3-9e711233bdf9" refined search { query : "monster energy drinks" } ENABLED : In this mode, the client implements all conversational capabilities, which includes Conversational Commerce agent search and conversational product filtering.
- The conversational commerce agent handles broad inquiries, provides AI-generated responses, and refines initial intents, while conversational product filtering guides users through specific product attribute selections using a simplified chip- or tile-based interaction model.

### "Conversational Commerce agent user experience guide \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/retail/docs/conversational-commerce-ux-guide](https://docs.cloud.google.com/retail/docs/conversational-commerce-ux-guide)
- Source ID: `site-docs-reference`
- Final score: 307
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- User interface recommendations and design choices The interaction between conversational commerce agent and conversational product filtering offers significant flexibility.
- Clarity and transparency Configure your site in such a way that your users get the results they want, and have the ability to refine or adjust search parameters, enabled by: Ambiguous queries When encountering a vague search, the Conversational Commerce agent proactively seeks clarification.
- Design calls-to-action to end conversations gracefully To prevent user abandonment, Conversational Commerce agent ends conversations with clear, actionable pathways, maximizing user satisfaction and boosting the likelihood of conversion by maintaining momentum.
- Search input and enhancement As the entry point for Conversational Commerce agent, the search box must balance clarity and functionality and, particularly on mobile where screen space is limited, it must do so with minimal disruption.

### "Conversational Commerce agent overview \_|\_ Vertex AI Search for commerce\

- URL: [https://docs.cloud.google.com/retail/docs/conversational-search](https://docs.cloud.google.com/retail/docs/conversational-search)
- Source ID: `site-docs-root`
- Final score: 305
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Conversational Commerce agent capabilities Conversational Commerce agent adds to the Vertex AI Search for commerce experience in the following ways: Narrows user queries effectively : Conversational Commerce agent filters 10,000 products down to less than 100 products, increasing the likelihood that the user decides to make a purchase.
- Impact of Conversational Commerce agent As a central part of the guided search package, Conversational Commerce agent improves search result relevance and reduces user friction.
- Adapted to commerce use case : Conversational Commerce agent covers ecommerce, product discovery, and support.
- Conversational Commerce agent is an AI-driven guided search and product discovery tool.

### "Conversational commerce \_|\_ Vertex AI Search for commerce \_|\_ Google\

- URL: [https://docs.cloud.google.com/retail/docs/conversational-agents-both-features](https://docs.cloud.google.com/retail/docs/conversational-agents-both-features)
- Source ID: `site-docs-root`
- Final score: 283
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Vertex AI Search for commerce offers two conversational capabilities: conversational product filtering and the conversational commerce agent.
- This architecture is fundamental to both product filtering and the conversational commerce agent.
- Conversational product filtering guides users with structured questions to refine searches, while the conversational commerce agent enables open-ended chat experiences.
- Set up and use the conversational commerce agent .

