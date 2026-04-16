---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.742Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Sentiment analysis regional support"
feature_slug: "sentiment-analysis-regional-support"
latest_feature_date: "2022-12-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/ConversationTurn"
keywords:
  - "sentiment"
  - "regional"
  - "additional"
  - "analysis"
  - "available"
  - "regions"
---

# Sentiment analysis regional support

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX sentiment analysis is available in additional regions for several supported languages.

## Extended Definition

Dialogflow CX sentiment analysis is available in additional regions for several supported languages.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- [https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/ConversationTurn](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/ConversationTurn)

## Supporting Pages

### "Package com.google.cloud.dialogflow.v2 (4.94.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- Source ID: `site-java-reference`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- Sentiment analysis inspects user input and identifies the prevailing subjective opinion, especially to determine a user's attitude as positive, negative, or neutral. com. google. cloud. dialogflow. v2.
- Sentiment analysis inspects user input and identifies the prevailing subjective opinion, especially to determine a user's attitude as positive, negative, or neutral. com. google. cloud. dialogflow. v2.
- See: https://cloud.google.com/natural-language/docs/basics#interpreting sentiment analysis values com. google. cloud. dialogflow. v2.
- See: https://cloud.google.com/natural-language/docs/basics#interpreting sentiment analysis values com. google. cloud. dialogflow. v2.

### Agent settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- Source ID: `site-docs-root`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- Advanced settings Currently, the only advanced setting is for sentiment analysis .
- It is available in all Dialogflow CX regions .
- It is available in all Dialogflow CX regions .
- Go to the Agent API reference Select a protocol and version for the Agent reference: Protocol V3 V3beta1 REST Agent resource Agent resource RPC Agent interface Agent interface C++ AgentsClient Not available C# AgentsClient Not available Go AgentsClient Not available Java AgentsClient AgentsClient Node.js AgentsClient AgentsClient PHP Not available Not available Python AgentsClient AgentsClient Ruby Not available Not available Close General settings The following general settings are available for agents: Display name A human-readable name for your agent.

### ConversationTurn \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/ConversationTurn](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/ConversationTurn)
- Source ID: `site-docs-reference`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "input" : { object ( QueryInput ) } , "injectedParameters" : { object } , "isWebhookEnabled" : boolean , "enableSentimentAnalysis" : boolean } Fields input object ( QueryInput ) Supports text input , event input , dtmf input in the test case. injectedParameters object ( Struct format) Parameters that need to be injected into the conversation during intent detection. isWebhookEnabled boolean If webhooks should be allowed to trigger in response to the user utterance.
- Often if parameters are injected, webhooks should not be enabled. enableSentimentAnalysis boolean Whether sentiment analysis is enabled.
- JSON representation { "sessionParameters" : { object } , "differences" : [ { object ( TestRunDifference ) } ] , "diagnosticInfo" : { object } , "triggeredIntent" : { object ( Intent ) } , "currentPage" : { object ( Page ) } , "textResponses" : [ { object ( Text ) } ] , "status" : { object ( Status ) } } Fields sessionParameters object ( Struct format) The session parameters available to the bot at this point. differences[] object ( TestRunDifference ) Output only.
- USE BEST AVAILABLE Use the best available variant of the [Speech model][InputAudioConfig.model] that the caller is eligible for.

