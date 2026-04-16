---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.788Z"
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
  - "updates"
  - "updated"
  - "fulfillment"
  - "through"
  - "allows"
  - "settings"
---

# Fulfillment settings API updates

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow allows fulfillment settings to be updated through the API.

## Extended Definition

Dialogflow allows fulfillment settings to be updated through the API.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/fulfillment](https://docs.cloud.google.com/dialogflow/cx/docs/concept/fulfillment)
- [https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/Fulfillment](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/Fulfillment)

## Supporting Pages

### "Package com.google.cloud.dialogflow.v2 (4.94.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- Source ID: `site-java-reference`
- Final score: 156
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Fulfillments Settings Settings class to configure an instance of FulfillmentsClient .
- Builder Builder for FulfillmentsSettings. com. google. cloud. dialogflow. v2.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
- Automated expansion allows an agent to recognize values that have not been explicitly listed in the entity (for example, new kinds of shopping list items). com. google. cloud. dialogflow. v2.

### Fulfillments \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/fulfillment](https://docs.cloud.google.com/dialogflow/cx/docs/concept/fulfillment)
- Source ID: `site-docs-root`
- Final score: 119
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can provide these templates in your agent settings, which makes them available for selection whenever you create fulfillment for your agent.
- The following describes webhook settings for fulfillment: Term Definition Enable webhook This enables webhook for the fulfillment.
- If the [response] relies on the session state, it is resolved based on the updated session state at the end of fulfillment.
- Go to the Session API reference Select a protocol and version for the Session reference: Protocol V3 V3beta1 REST Session resource Session resource RPC Session interface Session interface C++ SessionsClient Not available C# SessionsClient Not available Go SessionsClient Not available Java SessionsClient SessionsClient Node.js SessionsClient SessionsClient PHP Not available Not available Python SessionsClient SessionsClient Ruby Not available Not available Close If no channel is defined in a request, or no matching channel is found in fulfillment, the default response message will be returned by Dialogflow CX.

### Fulfillment \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/Fulfillment](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/Fulfillment)
- Source ID: `site-docs-reference`
- Final score: 115
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- JSON representation ResponseMessage JSON representation ConversationSuccess JSON representation OutputAudioText JSON representation LiveAgentHandoff JSON representation EndInteraction PlayAudio JSON representation MixedAudio JSON representation Segment JSON representation TelephonyTransferCall JSON representation KnowledgeInfoCard ToolCall JSON representation ResponseType SetParameterAction JSON representation ConditionalCases JSON representation Case JSON representation CaseContent JSON representation GeneratorSettings JSON representation A fulfillment can do one or more of the following actions at the same time: Generate rich message responses.
- This field is required if webhook is specified. setParameterActions[] object ( SetParameterAction ) Set parameter values before executing the webhook. conditionalCases[] object ( ConditionalCases ) Conditional cases for this fulfillment. advancedSettings object ( AdvancedSettings ) Hierarchical advanced settings for this fulfillment.
- This flag is only useful for fulfillments associated with no-match event handlers. generators[] object ( GeneratorSettings ) A list of Generators to be called during this fulfillment.
- JSON representation { "messages" : [ { object ( ResponseMessage ) } ] , "webhook" : string , "returnPartialResponses" : boolean , "tag" : string , "setParameterActions" : [ { object ( SetParameterAction ) } ] , "conditionalCases" : [ { object ( ConditionalCases ) } ] , "advancedSettings" : { object ( AdvancedSettings ) } , "enableGenerativeFallback" : boolean , "generators" : [ { object ( GeneratorSettings ) } ] } Fields messages[] object ( ResponseMessage ) The list of rich message responses to present to the user. webhook string The webhook to call.

