---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.661Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Journey Voices MULAW output encoding"
feature_slug: "journey-voices-mulaw-output-encoding"
latest_feature_date: "2024-09-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/ConversationTurn"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2"
keywords:
  - "mulaw"
  - "journey"
  - "encoding"
  - "voices"
  - "output"
  - "speech"
  - "text"
---

# Journey Voices MULAW output encoding

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Text-to-Speech Journey Voices in Dialogflow CX and ES support MULAW output audio encoding in addition to LINEAR16.

## Extended Definition

Text-to-Speech Journey Voices in Dialogflow CX and ES support MULAW output audio encoding in addition to LINEAR16.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/ConversationTurn](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/ConversationTurn)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)

## Supporting Pages

### ConversationTurn \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/ConversationTurn](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/ConversationTurn)
- Source ID: `site-docs-reference`
- Final score: 117
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- JSON representation UserInput JSON representation QueryInput JSON representation TextInput JSON representation IntentInput JSON representation AudioInput JSON representation InputAudioConfig JSON representation AudioEncoding SpeechModelVariant BargeInConfig JSON representation EventInput JSON representation DtmfInput JSON representation ToolCallResult JSON representation Error JSON representation VirtualAgentOutput JSON representation TestRunDifference JSON representation DiffType One interaction between a human and virtual agent.
- The input specification. input can be only one of the following: text object ( TextInput ) The natural language text to be processed. intent object ( IntentInput ) The intent to be triggered. audio object ( AudioInput ) The natural language speech audio to be processed. event object ( EventInput ) The event to be triggered. dtmf object ( DtmfInput ) The DTMF event to be handled. toolCallResult object ( ToolCallResult ) The results of a tool executed by the client.
- JSON representation { "sessionParameters" : { object } , "differences" : [ { object ( TestRunDifference ) } ] , "diagnosticInfo" : { object } , "triggeredIntent" : { object ( Intent ) } , "currentPage" : { object ( Page ) } , "textResponses" : [ { object ( Text ) } ] , "status" : { object ( Status ) } } Fields sessionParameters object ( Struct format) The session parameters available to the bot at this point. differences[] object ( TestRunDifference ) Output only.
- JSON representation { "audioEncoding" : enum ( AudioEncoding ) , "sampleRateHertz" : integer , "enableWordInfo" : boolean , "phraseHints" : [ string ] , "model" : string , "modelVariant" : enum ( SpeechModelVariant ) , "singleUtterance" : boolean , "bargeInConfig" : { object ( BargeInConfig ) } , "optOutConformerModelMigration" : boolean } Fields audioEncoding enum ( AudioEncoding ) Required.

### Agent settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- Source ID: `site-docs-root`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- Speech and IVR settings The following speech and IVR settings are available: Text-to-Speech Voice selection Note: SSML Tags are not supported for Chirp3-HD voices.
- Speech and IVR Speech options Text-to-Speech link Languages and voices link You can select the language and voice used for speech synthesis.
- Conversation history made up of user and agent utterances, flow and playbook transition context, tool calls and outputs in the same session from all previous turns sequentially handled by the current playbook.
- Conversation history made up of user and agent utterances, flow and playbook transition context, tool calls and outputs in the same session from all previous turns sequentially handled by the current playbook.

### "Package com.google.cloud.dialogflow.v2 (4.94.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- Source ID: `site-java-reference`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- Output Audio Encoding Audio encoding of the output audio format in Text-To-Speech. com. google. cloud. dialogflow. v2.
- Text To Speech Settings Instructs the speech synthesizer on how to generate the output audio content. com. google. cloud. dialogflow. v2.
- If this audio config is supplied in a request, it overrides all existing text-to-speech settings applied to the agent. com. google. cloud. dialogflow. v2.
- If this audio config is supplied in a request, it overrides all existing text-to-speech settings applied to the agent. com. google. cloud. dialogflow. v2.

