---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.653Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "DTMF support"
feature_slug: "dtmf-support"
latest_feature_date: "2025-03-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/dtmf"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/ConversationTurn"
keywords:
  - "dtmf"
  - "playbooks"
  - "input"
---

# DTMF support

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX playbooks now support DTMF input.

## Extended Definition

Dialogflow CX playbooks now support DTMF input.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/dtmf](https://docs.cloud.google.com/dialogflow/cx/docs/concept/dtmf)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents](https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents)
- [https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/ConversationTurn](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/ConversationTurn)

## Supporting Pages

### DTMF for telephony integrations \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/dtmf](https://docs.cloud.google.com/dialogflow/cx/docs/concept/dtmf)
- Source ID: `site-docs-root`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- Match to a system entity type You can associate DTMF patterns with individual intents and entities to trigger a match to end-user input sequences.
- If Dialogflow aborts DTMF processing, it provides the unconverted sequence captured up to that point to the agent as end-user input.
- Finish digit This setting controls the keypress that will immediately terminate DTMF input, without waiting for any more input.
- Disable speech detection With this setting enabled, the agent ignores speech inputs and uses DTMF-only input mode.

### "Conversational Agents console overview \_|\_ Dialogflow CX \_|\_ Google\

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents](https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents)
- Source ID: `site-docs-root`
- Final score: 67
- Re-rank relevance: N/A

Evidence snippets:
- DTMF : Send dual-tone multi-frequency signaling (Touch-Tone) input for telephony interactions.
- Simulator settings When you first open the simulator, you can configure the following settings: Agent environment Start resource, which can be a playbook or flow which receives the first input.
- Simulator input When interacting with the simulator, you provide end-user input as text or audio from your microphone, then press enter or click the send send button.
- Using the Conversational Agents console, you can create interactive agents that use generative playbooks , generative data stores , and deterministic flows .

### ConversationTurn \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/ConversationTurn](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/ConversationTurn)
- Source ID: `site-docs-reference`
- Final score: 57
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation UserInput JSON representation QueryInput JSON representation TextInput JSON representation IntentInput JSON representation AudioInput JSON representation InputAudioConfig JSON representation AudioEncoding SpeechModelVariant BargeInConfig JSON representation EventInput JSON representation DtmfInput JSON representation ToolCallResult JSON representation Error JSON representation VirtualAgentOutput JSON representation TestRunDifference JSON representation DiffType One interaction between a human and virtual agent.
- JSON representation { "input" : { object ( QueryInput ) } , "injectedParameters" : { object } , "isWebhookEnabled" : boolean , "enableSentimentAnalysis" : boolean } Fields input object ( QueryInput ) Supports text input , event input , dtmf input in the test case. injectedParameters object ( Struct format) Parameters that need to be injected into the conversation during intent detection. isWebhookEnabled boolean If webhooks should be allowed to trigger in response to the user utterance.
- The input specification. input can be only one of the following: text object ( TextInput ) The natural language text to be processed. intent object ( IntentInput ) The intent to be triggered. audio object ( AudioInput ) The natural language speech audio to be processed. event object ( EventInput ) The event to be triggered. dtmf object ( DtmfInput ) The DTMF event to be handled. toolCallResult object ( ToolCallResult ) The results of a tool executed by the client.
- JSON representation { "languageCode" : string , // Union field input can be only one of the following: "text" : { object ( TextInput ) } , "intent" : { object ( IntentInput ) } , "audio" : { object ( AudioInput ) } , "event" : { object ( EventInput ) } , "dtmf" : { object ( DtmfInput ) } , "toolCallResult" : { object ( ToolCallResult ) } // End of list of possible types for union field input . } Fields languageCode string Required.

