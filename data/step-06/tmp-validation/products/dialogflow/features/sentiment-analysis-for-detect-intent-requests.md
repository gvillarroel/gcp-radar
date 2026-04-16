---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.805Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Sentiment Analysis for Detect Intent Requests"
feature_slug: "sentiment-analysis-for-detect-intent-requests"
latest_feature_date: "2018-07-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/ConversationTurn"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings"
keywords:
  - "information"
  - "detection"
  - "returns"
  - "requests"
  - "sentiment"
  - "detect"
  - "analysis"
  - "intent"
---

# Sentiment Analysis for Detect Intent Requests

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Sentiment Analysis for detect intent requests returns sentiment information with intent detection results.

## Extended Definition

Sentiment Analysis for detect intent requests returns sentiment information with intent detection results.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/ConversationTurn](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/ConversationTurn)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)

## Supporting Pages

### ConversationTurn \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/ConversationTurn](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/ConversationTurn)
- Source ID: `site-docs-reference`
- Final score: 152
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- JSON representation { "input" : { object ( QueryInput ) } , "injectedParameters" : { object } , "isWebhookEnabled" : boolean , "enableSentimentAnalysis" : boolean } Fields input object ( QueryInput ) Supports text input , event input , dtmf input in the test case. injectedParameters object ( Struct format) Parameters that need to be injected into the conversation during intent detection. isWebhookEnabled boolean If webhooks should be allowed to trigger in response to the user utterance.
- For streaming audio detect intent, config must be provided in the first request and audio must be provided in all following requests.
- Barge-in phase: which follows the no barge-in phase and during which the API starts speech detection and may inform the client that an utterance has been detected.
- If true , Dialogflow returns SpeechWordInfo in StreamingRecognitionResult with information about the recognized speech words, e.g. start and end time offsets.

### "Package com.google.cloud.dialogflow.v2 (4.94.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- Source ID: `site-java-reference`
- Final score: 139
- Re-rank relevance: N/A

Evidence snippets:
- Sentiment analysis inspects user input and identifies the prevailing subjective opinion, especially to determine a user's attitude as positive, negative, or neutral. com. google. cloud. dialogflow. v2.
- Sentiment analysis inspects user input and identifies the prevailing subjective opinion, especially to determine a user's attitude as positive, negative, or neutral. com. google. cloud. dialogflow. v2.
- Original Detect Intent Request Represents the contents of the original request that was passed to the [Streaming]DetectIntent call. com. google. cloud. dialogflow. v2.
- It will get populated in StreamingDetectIntentResponse or StreamingAnalyzeContentResponse when the flag enable debugging info is com. google. cloud. dialogflow. v2.

### Agent settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- Source ID: `site-docs-root`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- This setting controls the minimum intent detection confidence required for an intent match .
- This setting controls the minimum intent detection confidence required for an intent match .
- Language auto detection When you configure language auto detection , your chat agent will automatically detect the end-user's language and switch to that language.
- Advanced settings Currently, the only advanced setting is for sentiment analysis .

