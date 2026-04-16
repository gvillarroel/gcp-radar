---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.663Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Journey Voices LINEAR16-only output support"
feature_slug: "journey-voices-linear16-only-output-support"
latest_feature_date: "2024-08-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/ConversationTurn"
  - "https://docs.cloud.google.com/dialogflow/docs/contexts-input-output"
keywords:
  - "only"
  - "linear16"
  - "journey"
  - "voices"
  - "output"
  - "speech"
  - "text"
---

# Journey Voices LINEAR16-only output support

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Text-to-Speech Journey Voices in Dialogflow CX and ES were updated to support only LINEAR16 output audio encoding.

## Extended Definition

Text-to-Speech Journey Voices in Dialogflow CX and ES were updated to support only LINEAR16 output audio encoding.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- [https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/ConversationTurn](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/ConversationTurn)
- [https://docs.cloud.google.com/dialogflow/docs/contexts-input-output](https://docs.cloud.google.com/dialogflow/docs/contexts-input-output)

## Supporting Pages

### Agent settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- Source ID: `site-docs-root`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- Speech and IVR settings The following speech and IVR settings are available: Text-to-Speech Voice selection Note: SSML Tags are not supported for Chirp3-HD voices.
- Speech and IVR Speech options Text-to-Speech link Languages and voices link You can select the language and voice used for speech synthesis.
- Conversation history made up of user and agent utterances, flow and playbook transition context, tool calls and outputs in the same session from all previous turns sequentially handled by the current playbook.
- Conversation history made up of user and agent utterances, flow and playbook transition context, tool calls and outputs in the same session from all previous turns sequentially handled by the current playbook.

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
- JSON representation { "languageCode" : string , // Union field input can be only one of the following: "text" : { object ( TextInput ) } , "intent" : { object ( IntentInput ) } , "audio" : { object ( AudioInput ) } , "event" : { object ( EventInput ) } , "dtmf" : { object ( DtmfInput ) } , "toolCallResult" : { object ( ToolCallResult ) } // End of list of possible types for union field input . } Fields languageCode string Required.

### Input and output contexts \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/docs/contexts-input-output](https://docs.cloud.google.com/dialogflow/docs/contexts-input-output)
- Source ID: `site-docs-root-2`
- Final score: 114
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, consider the following intents: Intent name Training phrases Parameters Input contexts Output contexts Response pet-init "What do they look like?" - - - "What kind of pet do you like?" pet-select-dogs "I like dogs" - - dogs "What do you want to know about dogs?" pet-select-cats "I like cats" - - cats "What do you want to know about cats?" dog-show "What do they look like?" - dogs - "Here is a picture of a dog." cat-show "What do they look like?" - cats - "Here is a picture of a cat." When the end-user says I like dogs : The pet-select-dogs intent is matched.
- For example, consider the following variation of the pet example above: Intent name Training phrases Parameters Input contexts Output contexts Response pet-init "What do they look like?" - - - "What kind of pet do you like?" pet-select "I like dogs ", "I like cats " pet - pet-chosen "What do you want to know about $pet?" pet-show "What do they look like?" - pet-chosen - "Here is a picture of a #pet-chosen.pet." When the end-user says I like dogs or I like cats : The pet-select intent is matched.
- For example, consider the following intent descriptions for a pet information agent: Intent name Training phrases Parameters Input contexts Output contexts Response pet-init "What do they look like?", "What do they sound like?", "How big are they?" - - - "What kind of pet do you like?" pet-select "I like dogs ", "I like cats " pet - pet-chosen (lifespan = 2) "What do you want to know about $pet?" pet-show "What do they look like?" - pet-chosen - "Here is a picture of a #pet-chosen.pet.
- Parameter references for active contexts When an intent with output context is matched, its collected parameter values can serve as temporary storage with parameter references for active contexts .

