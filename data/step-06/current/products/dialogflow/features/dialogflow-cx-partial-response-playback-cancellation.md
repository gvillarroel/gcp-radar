---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.367Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Dialogflow CX partial response playback cancellation"
feature_slug: "dialogflow-cx-partial-response-playback-cancellation"
latest_feature_date: "2024-01-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/advanced-speech"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/DetectIntentResponse"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/fulfillment"
keywords:
  - "dialogflow"
  - "cx"
  - "partial"
  - "response"
  - "playback"
  - "cancellation"
  - "supports"
---

# Dialogflow CX partial response playback cancellation

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX supports cancellation of partial response playback.

## Extended Definition

Dialogflow CX supports cancellation of partial response playback.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/advanced-speech](https://docs.cloud.google.com/dialogflow/cx/docs/concept/advanced-speech)
- [https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/DetectIntentResponse](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/DetectIntentResponse)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/fulfillment](https://docs.cloud.google.com/dialogflow/cx/docs/concept/fulfillment)

## Supporting Pages

### Advanced speech settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/advanced-speech](https://docs.cloud.google.com/dialogflow/cx/docs/concept/advanced-speech)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Settings availability by level The following table indicates which advanced speech settings are available at each level: Setting name Agent Flow Page Fulfillment Model selection (Speech-to-Text) ✔ ✔ ✔ End of speech sensitivity ✔ ✔ ✔ Advanced timeout-based end of speech sensitivity ✔ ✔ ✔ Enable smart endpointing ✔ No speech timeout ✔ ✔ ✔ Barge-in ✔ ✔ ✔ Allow cancellation of partial response playback ✔ Audio export bucket ✔ ✔ DTMF ✔ ✔ ✔ Model selection (Speech-to-Text) Can be set at the agent, flow, and page levels.
- Allow cancellation of partial response playback Can be set at the fulfillment level only.
- This setting allows cancellation of a partial response playback.
- While the End of speech sensitivity setting supports only the phone call speech model for the en-US language tag by default, the Enable advanced timeout-based end of speech sensitivity setting allows for configuring end of speech sensitivity for all languages and speech models supported by Dialogflow.

### DetectIntentResponse \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/DetectIntentResponse](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/DetectIntentResponse)
- Source ID: `site-docs-reference`
- Final score: 113
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- A base64-encoded string. outputAudioConfig object ( OutputAudioConfig ) The config used by the speech synthesizer to generate the output audio. responseType enum ( ResponseType ) Response type. allowCancellation boolean Indicates whether the partial response can be cancelled when a later response arrives. e.g. if the agent specified some music as partial response, it can be cancelled.
- JSON representation { "responseId" : string , "queryResult" : { object ( QueryResult ) } , "outputAudio" : string , "outputAudioConfig" : { object ( OutputAudioConfig ) } , "responseType" : enum ( ResponseType ) , "allowCancellation" : boolean } Fields responseId string Output only.
- Home Documentation AI and ML Dialogflow Dialogflow CX Reference Send feedback DetectIntentResponse Stay organized with collections Save and categorize content based on your preferences.
- Aggregated responses in a Fulfillment that enables return partial response can be returned as partial response.

### Fulfillments \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/fulfillment](https://docs.cloud.google.com/dialogflow/cx/docs/concept/fulfillment)
- Source ID: `site-docs-root`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- Return partial response Allows cancellation of a partial response playback.
- Partial response for streaming API By default, Dialogflow CX only sends the ordered responses to the end-user once the agent's turn is over.
- If you enable partial response in the first fulfillment, Dialogflow CX returns the first fulfillment message quickly and calls the webhook.
- This makes Dialogflow CX flush the response queue and send all messages as a partial response before calling the webhook.

