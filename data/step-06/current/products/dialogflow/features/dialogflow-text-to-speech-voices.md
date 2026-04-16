---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.329Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Dialogflow text-to-speech voices"
feature_slug: "dialogflow-text-to-speech-voices"
latest_feature_date: "2025-02-24"
deprecation_date: "2025-02-24"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/Fulfillment"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2"
keywords:
  - "dialogflow"
  - "text"
  - "speech"
  - "voices"
  - "can"
  - "synthesize"
  - "responses"
  - "deprecated"
---

# Dialogflow text-to-speech voices

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow can synthesize responses using supported text-to-speech voices; deprecated on 2025-02-24.

## Extended Definition

Dialogflow can synthesize responses using supported text-to-speech voices; deprecated on 2025-02-24.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- [https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/Fulfillment](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/Fulfillment)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)

## Supporting Pages

### Agent settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- Source ID: `site-docs-root`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- Speech and IVR settings The following speech and IVR settings are available: Text-to-Speech Voice selection Note: SSML Tags are not supported for Chirp3-HD voices.
- Speech and IVR Speech options Text-to-Speech link Languages and voices link You can select the language and voice used for speech synthesis.
- Override request-level synthesized speech configuration link When enabled, the synthesized speech configuration specified in the agent settings overrides the one specified in the API, partner integration, or the conversation profile.
- Speech-to-Text link Enable auto speech adaptation link See Auto speech adaptation .

### Fulfillment \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/Fulfillment](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/Fulfillment)
- Source ID: `site-docs-reference`
- Final score: 112
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- An audio response message composed of both the synthesized Dialogflow agent responses and responses defined via playAudio .
- JSON representation ResponseMessage JSON representation ConversationSuccess JSON representation OutputAudioText JSON representation LiveAgentHandoff JSON representation EndInteraction PlayAudio JSON representation MixedAudio JSON representation Segment JSON representation TelephonyTransferCall JSON representation KnowledgeInfoCard ToolCall JSON representation ResponseType SetParameterAction JSON representation ConditionalCases JSON representation Case JSON representation CaseContent JSON representation GeneratorSettings JSON representation A fulfillment can do one or more of the following actions at the same time: Generate rich message responses.
- Format: projects/<ProjectID>/locations/<LocationID>/agents/<AgentID>/webhooks/<WebhookID> . returnPartialResponses boolean Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs.
- Content of the segment. content can be only one of the following: audio string ( bytes format) Raw audio synthesized from the Dialogflow agent's response using the output config specified in the request.

### "Package com.google.cloud.dialogflow.v2 (4.94.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- Source ID: `site-java-reference`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- Text To Speech Settings Instructs the speech synthesizer on how to generate the output audio content. com. google. cloud. dialogflow. v2.
- If this audio config is supplied in a request, it overrides all existing text-to-speech settings applied to the agent. com. google. cloud. dialogflow. v2.
- If this audio config is supplied in a request, it overrides all existing text-to-speech settings applied to the agent. com. google. cloud. dialogflow. v2.
- Speech Context Hints for the speech recognizer to help with recognition in a specific conversation state. com. google. cloud. dialogflow. v2.

