---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.426Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Custom payload templates"
feature_slug: "custom-payload-templates"
latest_feature_date: "2023-01-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/fulfillment"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/Fulfillment"
keywords:
  - "custom"
  - "payload"
  - "templates"
  - "dialogflow"
  - "cx"
  - "supports"
  - "reusable"
  - "responses"
---

# Custom payload templates

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX supports reusable custom payload templates for responses.

## Extended Definition

Dialogflow CX supports reusable custom payload templates for responses.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/fulfillment](https://docs.cloud.google.com/dialogflow/cx/docs/concept/fulfillment)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- [https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/Fulfillment](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/Fulfillment)

## Supporting Pages

### Fulfillments \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/fulfillment](https://docs.cloud.google.com/dialogflow/cx/docs/concept/fulfillment)
- Source ID: `site-docs-root`
- Final score: 171
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Custom payloads are sometimes large and complex, so using templates can help make the agent creation process easier.
- Custom payload templates If you use custom payloads often, you should use custom payload templates .
- For example, the JSON payload for "yes" and "no" buttons can be defined as custom payload templates.
- Custom payload Some integrations support a custom payload response to handle rich responses.

### Agent settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- Source ID: `site-docs-root`
- Final score: 135
- Re-rank relevance: N/A

Evidence snippets:
- Connectivity Custom payload template link In this section, you can create descriptions and payloads for custom payload templates .
- Custom payload template In this section, you can create descriptions and payloads for custom payload templates .
- If you are using telephony gateway, make sure the Dialogflow Service Agent service account service- PROJECT NUMBER @gcp-sa-dialogflow.iam.gserviceaccount.com is granted with "AutoML Predictor" in your custom voice project.
- If you are using telephony gateway, make sure the Dialogflow Service Agent service account service- PROJECT NUMBER @gcp-sa-dialogflow.iam.gserviceaccount.com is granted with "AutoML Predictor" in your custom voice project.

### Fulfillment \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/Fulfillment](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/Fulfillment)
- Source ID: `site-docs-reference`
- Final score: 92
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The rich response message. message can be only one of the following: text object ( Text ) Returns a text response. payload object ( Struct format) Returns a response containing a custom, platform-specific payload. conversationSuccess object ( ConversationSuccess ) Indicates that the conversation succeeded. outputAudioText object ( OutputAudioText ) A text or ssml response that is preferentially used for TTS output audio synthesis, as described in the comment on the ResponseMessage message. liveAgentHandoff object ( LiveAgentHandoff ) Hands off conversation to a human agent. endInteraction object ( EndInteraction ) Output only.
- Format: projects/<ProjectID>/locations/<LocationID>/agents/<AgentID>/webhooks/<WebhookID> . returnPartialResponses boolean Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs.
- If the response contains generative knowledge prediction, Dialogflow will return a payload with Infobot Messenger compatible info card.
- An audio response message composed of both the synthesized Dialogflow agent responses and responses defined via playAudio .

