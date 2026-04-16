---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.423Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Dialogflow CX sentiment analysis"
feature_slug: "dialogflow-cx-sentiment-analysis"
latest_feature_date: "2023-03-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/ConversationTurn"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings"
keywords:
  - "dialogflow"
  - "cx"
  - "sentiment"
  - "analysis"
  - "supports"
  - "all"
  - "regions"
  - "more"
---

# Dialogflow CX sentiment analysis

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX sentiment analysis supports all Dialogflow CX regions and more than 70 new languages.

## Extended Definition

Dialogflow CX sentiment analysis supports all Dialogflow CX regions and more than 70 new languages.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- [https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/ConversationTurn](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/ConversationTurn)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)

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

### ConversationTurn \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/ConversationTurn](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/ConversationTurn)
- Source ID: `site-docs-reference`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "input" : { object ( QueryInput ) } , "injectedParameters" : { object } , "isWebhookEnabled" : boolean , "enableSentimentAnalysis" : boolean } Fields input object ( QueryInput ) Supports text input , event input , dtmf input in the test case. injectedParameters object ( Struct format) Parameters that need to be injected into the conversation during intent detection. isWebhookEnabled boolean If webhooks should be allowed to trigger in response to the user utterance.
- Often if parameters are injected, webhooks should not be enabled. enableSentimentAnalysis boolean Whether sentiment analysis is enabled.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-10 UTC."],[],[]]
- Each block starts with a byte containing the length of the block, in bytes, followed by one or more frames of Speex data, padded to an integral number of bytes (octets) as specified in RFC 5574.

### Agent settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- Source ID: `site-docs-root`
- Final score: 64
- Re-rank relevance: N/A

Evidence snippets:
- Advanced settings Currently, the only advanced setting is for sentiment analysis .
- It is available in all Dialogflow CX regions .
- It is available in all Dialogflow CX regions .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

