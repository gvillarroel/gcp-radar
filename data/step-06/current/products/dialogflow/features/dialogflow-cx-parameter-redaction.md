---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.474Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Dialogflow CX parameter redaction"
feature_slug: "dialogflow-cx-parameter-redaction"
latest_feature_date: "2020-12-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/AdvancedSettings"
  - "https://docs.cloud.google.com/dialogflow/docs/intents-actions-parameters"
keywords:
  - "dialogflow"
  - "cx"
  - "parameter"
  - "redaction"
  - "can"
  - "redact"
  - "end"
  - "user"
---

# Dialogflow CX parameter redaction

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX can redact end-user parameter data from logs.

## Extended Definition

Dialogflow CX can redact end-user parameter data from logs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- [https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/AdvancedSettings](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/AdvancedSettings)
- [https://docs.cloud.google.com/dialogflow/docs/intents-actions-parameters](https://docs.cloud.google.com/dialogflow/docs/intents-actions-parameters)

## Supporting Pages

### Agent settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- Source ID: `site-docs-root`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- Enable consent-based end-user input redaction If this setting is enabled, it lets you use a special session parameter to control whether end-user input and parameters are redacted from conversation history and Cloud logging , by default the session parameter is true .
- Enable consent-based end-user input redaction If this setting is enabled, it lets you use a special session parameter to control whether end-user input and parameters are redacted from conversation history and Cloud logging .
- User consent is collected using a boolean session parameter: $session.params.conversation-redaction .
- User consent is collected using a boolean session parameter: $session.params.conversation-redaction .

### AdvancedSettings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/AdvancedSettings](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/AdvancedSettings)
- Source ID: `site-docs-reference`
- Final score: 94
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation { "enableStackdriverLogging" : boolean , "enableInteractionLogging" : boolean , "enableConsentBasedRedaction" : boolean } Fields enableStackdriverLogging boolean Enables Google Cloud Logging. enableInteractionLogging boolean Enables DF Interaction logging. enableConsentBasedRedaction boolean Enables consent-based end-user input redaction, if true, a pre-defined session parameter $session.params.conversation-redaction will be used to determine if the utterance should be redacted.
- For example, if the caller presses a button on their telephone keypad and DTMF processing is enabled, Dialogflow will detect the event (e.g. a "3" was pressed) in the incoming audio and pass the event to the bot to drive business logic (e.g. when 3 is pressed, return the account balance). maxDigits integer Max length of DTMF digits. finishDigit string The digit that terminates a DTMF digit sequence. interdigitTimeoutDuration string ( Duration format) Interdigit timeout setting for matching dtmf input to regex.
- JSON representation { "audioExportGcsDestination" : { object ( GcsDestination ) } , "speechSettings" : { object ( SpeechSettings ) } , "dtmfSettings" : { object ( DtmfSettings ) } , "loggingSettings" : { object ( LoggingSettings ) } } Fields audioExportGcsDestination object ( GcsDestination ) If present, incoming audio is exported by Dialogflow to the configured Google Cloud Storage destination.
- JSON representation GcsDestination JSON representation SpeechSettings JSON representation DtmfSettings JSON representation LoggingSettings JSON representation Hierarchical advanced settings for agent/flow/page/fulfillment/parameter.

### Actions and parameters \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/docs/intents-actions-parameters](https://docs.cloud.google.com/dialogflow/docs/intents-actions-parameters)
- Source ID: `site-docs-root-2`
- Final score: 91
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can retrieve the explicit partial match, where Dialogflow substitutes the unknown part with U s using the following format: $parameter-name.partial You can retrieve the nearest date in the past using the following format: $parameter-name.recent For example, if today's date is August 11, 2021, your parameter name is date , and the user says "August 13": Parameter reference Resolved value $date 2021-08-13 $date.partial UUUU-08-13 $date.recent 2020-08-13 Parameter reference for a composite entity Composite entities are entities that contain other sub-entities.
- Parameter reference for ambiguous dates When a parameter is associated with the @sys.date system entity, and the end-user supplies a partial date (not specifying month, day, and year), Dialogflow will match to the nearest date in the future.
- User : Medium Agent : Got it, that was three black t-shirts in medium If the end-user supplies data for more than one parameter in a single expression, Dialogflow collects the data provided and continues asking for the missing data.
- When an intent is matched at runtime, the Dialogflow agent continues collecting information from the end-user until the end-user has provided data for each of the required parameters.

