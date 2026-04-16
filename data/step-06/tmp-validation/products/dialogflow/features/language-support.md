---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.743Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Language support"
feature_slug: "language-support"
latest_feature_date: "2022-11-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-multilingual"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/ConversationTurn"
keywords:
  - "additional"
  - "generally"
  - "languages"
  - "available"
  - "language"
  - "supports"
---

# Language support

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX supports additional generally available languages for agent interactions; Dialogflow ES supports additional preview languages for agent interactions.

## Extended Definition

Dialogflow CX supports additional generally available languages for agent interactions; Dialogflow ES supports additional preview languages for agent interactions.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-multilingual](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-multilingual)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- [https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/ConversationTurn](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/ConversationTurn)

## Supporting Pages

### Agent settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- Source ID: `site-docs-root`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- Languages settings Add additional language support to your agent.
- Speech and IVR Speech options Text-to-Speech link Languages and voices link You can select the language and voice used for speech synthesis.
- This is to accommodate different languages performing best at different classification thresholds.
- This is to accommodate different languages performing best at different classification thresholds.

### Multilingual agents \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-multilingual](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-multilingual)
- Source ID: `site-docs-root`
- Final score: 131
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Note: At the moment, language detection only supports identifying languages with major structural differences, and not variants of the same language.
- Add a language Note: As a best practice, you should complete your agent in the default language before adding additional languages.
- The language you choose when creating an agent is set as the default language, and you can add additional languages.
- See the language reference page for a list of languages available for this feature.

### ConversationTurn \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/ConversationTurn](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/ConversationTurn)
- Source ID: `site-docs-reference`
- Final score: 103
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "input" : { object ( QueryInput ) } , "injectedParameters" : { object } , "isWebhookEnabled" : boolean , "enableSentimentAnalysis" : boolean } Fields input object ( QueryInput ) Supports text input , event input , dtmf input in the test case. injectedParameters object ( Struct format) Parameters that need to be injected into the conversation during intent detection. isWebhookEnabled boolean If webhooks should be allowed to trigger in response to the user utterance.
- The input specification. input can be only one of the following: text object ( TextInput ) The natural language text to be processed. intent object ( IntentInput ) The intent to be triggered. audio object ( AudioInput ) The natural language speech audio to be processed. event object ( EventInput ) The event to be triggered. dtmf object ( DtmfInput ) The DTMF event to be handled. toolCallResult object ( ToolCallResult ) The results of a tool executed by the client.
- JSON representation { "sessionParameters" : { object } , "differences" : [ { object ( TestRunDifference ) } ] , "diagnosticInfo" : { object } , "triggeredIntent" : { object ( Intent ) } , "currentPage" : { object ( Page ) } , "textResponses" : [ { object ( Text ) } ] , "status" : { object ( Status ) } } Fields sessionParameters object ( Struct format) The session parameters available to the bot at this point. differences[] object ( TestRunDifference ) Output only.
- JSON representation { "languageCode" : string , // Union field input can be only one of the following: "text" : { object ( TextInput ) } , "intent" : { object ( IntentInput ) } , "audio" : { object ( AudioInput ) } , "event" : { object ( EventInput ) } , "dtmf" : { object ( DtmfInput ) } , "toolCallResult" : { object ( ToolCallResult ) } // End of list of possible types for union field input . } Fields languageCode string Required.

