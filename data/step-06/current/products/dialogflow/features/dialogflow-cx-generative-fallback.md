---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.389Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Dialogflow CX generative fallback"
feature_slug: "dialogflow-cx-generative-fallback"
latest_feature_date: "2023-08-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/Fulfillment"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler"
keywords:
  - "dialogflow"
  - "cx"
  - "generative"
  - "fallback"
  - "uses"
  - "ai"
  - "respond"
  - "when"
---

# Dialogflow CX generative fallback

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX generative fallback uses generative AI to respond when standard matching does not resolve an input; Dialogflow CX generative fallback uses generative AI when standard matching does not resolve an input.

## Extended Definition

Dialogflow CX generative fallback uses generative AI to respond when standard matching does not resolve an input; Dialogflow CX generative fallback uses generative AI when standard matching does not resolve an input.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- [https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/Fulfillment](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/Fulfillment)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler)

## Supporting Pages

### Agent settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- Source ID: `site-docs-root`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- ML settings Dialogflow CX uses machine learning (ML) algorithms to understand end-user inputs, match them to intents, and extract structured data.
- Generative Fallback Text prompt configuration link See Generative fallback: define your own prompt .
- Generative Fallback Text prompt configuration See Generative fallback: define your own prompt .
- Override request-level synthesized speech configuration link When enabled, the synthesized speech configuration specified in the agent settings overrides the one specified in the API, partner integration, or the conversation profile.

### Fulfillment \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/Fulfillment](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/Fulfillment)
- Source ID: `site-docs-reference`
- Final score: 108
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation { "messages" : [ { object ( ResponseMessage ) } ] , "webhook" : string , "returnPartialResponses" : boolean , "tag" : string , "setParameterActions" : [ { object ( SetParameterAction ) } ] , "conditionalCases" : [ { object ( ConditionalCases ) } ] , "advancedSettings" : { object ( AdvancedSettings ) } , "enableGenerativeFallback" : boolean , "generators" : [ { object ( GeneratorSettings ) } ] } Fields messages[] object ( ResponseMessage ) The list of rich message responses to present to the user. webhook string The webhook to call.
- You may only want to apply it to fulfillments that have slow webhooks. tag string The value of this field will be populated in the WebhookRequest fulfillmentInfo.tag field by Dialogflow when the associated webhook is called.
- The settings exposed at the lower level overrides the settings exposed at the higher level. enableGenerativeFallback boolean If the flag is true, the agent will utilize LLM to generate a text response.
- Dialogflow only uses this to determine which conversations should be counted as successful and doesn't process the metadata in this message in any way.

### Data store tools \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler)
- Source ID: `site-docs-root`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- The following is a example of a userMetadata parameter value to refine search results relevant to a specific: "userMetadata": { "favoriteColor": "blue", ... } The fallback parameter provides an answer that the data store tool should respond with if there is no valid summarized answer for the query.
- When creating data store tool examples, the tool input parameter requestBody provides three optional inputs together with the required query string - a filter string, a userMetadata structured object, and a fallback string.
- Optionally, you can click the Generative fallback checkbox to try to use AI to generate a response before using the static fallback response.
- The agent can provide instructions on how to proceed with the answer from the data stores or how to respond when there is no answer.

