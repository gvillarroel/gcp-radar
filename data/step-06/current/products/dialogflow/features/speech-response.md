---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.503Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Speech Response"
feature_slug: "speech-response"
latest_feature_date: "2019-05-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/DetectIntentResponse"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/ConversationTurn"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/DetectIntentResponseView"
keywords:
  - "speech"
  - "response"
  - "returns"
  - "spoken"
  - "responses"
  - "detect"
  - "intent"
  - "requests"
---

# Speech Response

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Speech Response returns spoken responses from detect intent requests.

## Extended Definition

Speech Response returns spoken responses from detect intent requests.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/DetectIntentResponse](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/DetectIntentResponse)
- [https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/ConversationTurn](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/ConversationTurn)
- [https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/DetectIntentResponseView](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/DetectIntentResponseView)

## Supporting Pages

### DetectIntentResponse \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/DetectIntentResponse](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/DetectIntentResponse)
- Source ID: `site-docs-reference`
- Final score: 178
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Dialogflow Dialogflow CX Reference Send feedback DetectIntentResponse Stay organized with collections Save and categorize content based on your preferences.
- JSON representation ResponseType The message returned from the DetectIntent method.
- ResponseType Represents different DetectIntentResponse types.
- A base64-encoded string. outputAudioConfig object ( OutputAudioConfig ) The config used by the speech synthesizer to generate the output audio. responseType enum ( ResponseType ) Response type. allowCancellation boolean Indicates whether the partial response can be cancelled when a later response arrives. e.g. if the agent specified some music as partial response, it can be cancelled.

### DetectIntentResponseView \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/DetectIntentResponseView](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/DetectIntentResponseView)
- Source ID: `site-docs-reference`
- Final score: 164
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- DETECT INTENT RESPONSE VIEW BASIC Basic response view omits the following fields: - QueryResult.diagnostic info DETECT INTENT RESPONSE VIEW DEFAULT Default response view omits the following fields: - QueryResult.trace blocks Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation AI and ML Dialogflow Dialogflow CX Reference Send feedback DetectIntentResponseView Stay organized with collections Save and categorize content based on your preferences.
- DETECT INTENT RESPONSE VIEW FULL Full response view includes all fields.
- Enums DETECT INTENT RESPONSE VIEW UNSPECIFIED Not specified.

### ConversationTurn \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/ConversationTurn](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/ConversationTurn)
- Source ID: `site-docs-reference`
- Final score: 158
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation { "input" : { object ( QueryInput ) } , "injectedParameters" : { object } , "isWebhookEnabled" : boolean , "enableSentimentAnalysis" : boolean } Fields input object ( QueryInput ) Supports text input , event input , dtmf input in the test case. injectedParameters object ( Struct format) Parameters that need to be injected into the conversation during intent detection. isWebhookEnabled boolean If webhooks should be allowed to trigger in response to the user utterance.
- JSON representation { "sessionParameters" : { object } , "differences" : [ { object ( TestRunDifference ) } ] , "diagnosticInfo" : { object } , "triggeredIntent" : { object ( Intent ) } , "currentPage" : { object ( Page ) } , "textResponses" : [ { object ( Text ) } ] , "status" : { object ( Status ) } } Fields sessionParameters object ( Struct format) The session parameters available to the bot at this point. differences[] object ( TestRunDifference ) Output only.
- For streaming audio detect intent, config must be provided in the first request and audio must be provided in all following requests.
- The diagnostic [info][Session.DetectIntentResponse.QueryResult.diagnostic info] output for the turn.

