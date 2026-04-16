---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.490Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Fulfillment settings API updates"
feature_slug: "fulfillment-settings-api-updates"
latest_feature_date: "2020-02-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/fulfillment"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/Fulfillment"
keywords:
  - "fulfillment"
  - "settings"
  - "updates"
  - "dialogflow"
  - "allows"
  - "updated"
  - "through"
---

# Fulfillment settings API updates

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow allows fulfillment settings to be updated through the API.

## Extended Definition

Dialogflow allows fulfillment settings to be updated through the API.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/fulfillment](https://docs.cloud.google.com/dialogflow/cx/docs/concept/fulfillment)
- [https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/Fulfillment](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/Fulfillment)

## Supporting Pages

### "Package com.google.cloud.dialogflow.v2 (4.94.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- Source ID: `site-java-reference`
- Final score: 168
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Builder Builder for FulfillmentsSettings. com. google. cloud. dialogflow. v2.
- Automated expansion allows an agent to recognize values that have not been explicitly listed in the entity (for example, new kinds of shopping list items). com. google. cloud. dialogflow. v2.
- Link Out Suggestion The suggestion chip message that allows the user to jump out to the app or website associated with this agent. com. google. cloud. dialogflow. v2.
- The curve defined through these control points can only be monotonically increasing or decreasing(constant values are acceptable). com. google. cloud. dialogflow. v2.

### Fulfillments \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/fulfillment](https://docs.cloud.google.com/dialogflow/cx/docs/concept/fulfillment)
- Source ID: `site-docs-root`
- Final score: 131
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Go to the Session API reference Select a protocol and version for the Session reference: Protocol V3 V3beta1 REST Session resource Session resource RPC Session interface Session interface C++ SessionsClient Not available C# SessionsClient Not available Go SessionsClient Not available Java SessionsClient SessionsClient Node.js SessionsClient SessionsClient PHP Not available Not available Python SessionsClient SessionsClient Ruby Not available Not available Close If no channel is defined in a request, or no matching channel is found in fulfillment, the default response message will be returned by Dialogflow CX.
- At runtime, when the Dialogflow CX virtual agent calls a fulfillment with call transfer, the call is transferred to the specified number and virtual agent handling is suspended.
- Home Documentation AI and ML Dialogflow Dialogflow CX Send feedback Fulfillments Stay organized with collections Save and categorize content based on your preferences.
- You can provide these templates in your agent settings, which makes them available for selection whenever you create fulfillment for your agent.

### Fulfillment \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/Fulfillment](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/Fulfillment)
- Source ID: `site-docs-reference`
- Final score: 127
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation ResponseMessage JSON representation ConversationSuccess JSON representation OutputAudioText JSON representation LiveAgentHandoff JSON representation EndInteraction PlayAudio JSON representation MixedAudio JSON representation Segment JSON representation TelephonyTransferCall JSON representation KnowledgeInfoCard ToolCall JSON representation ResponseType SetParameterAction JSON representation ConditionalCases JSON representation Case JSON representation CaseContent JSON representation GeneratorSettings JSON representation A fulfillment can do one or more of the following actions at the same time: Generate rich message responses.
- This field is required if webhook is specified. setParameterActions[] object ( SetParameterAction ) Set parameter values before executing the webhook. conditionalCases[] object ( ConditionalCases ) Conditional cases for this fulfillment. advancedSettings object ( AdvancedSettings ) Hierarchical advanced settings for this fulfillment.
- You may only want to apply it to fulfillments that have slow webhooks. tag string The value of this field will be populated in the WebhookRequest fulfillmentInfo.tag field by Dialogflow when the associated webhook is called.
- Format: projects/<ProjectID>/locations/<LocationID>/agents/<AgentID>/webhooks/<WebhookID> . returnPartialResponses boolean Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs.

