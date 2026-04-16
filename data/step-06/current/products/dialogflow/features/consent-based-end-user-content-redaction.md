---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.343Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Consent-based end-user content redaction"
feature_slug: "consent-based-end-user-content-redaction"
latest_feature_date: "2024-07-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/call-companion"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/AdvancedSettings"
keywords:
  - "consent"
  - "based"
  - "end"
  - "user"
  - "content"
  - "redaction"
  - "dialogflow"
  - "cx"
---

# Consent-based end-user content redaction

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX can redact end-user input and parameters from conversation history and Cloud Logging based on consent.

## Extended Definition

Dialogflow CX can redact end-user input and parameters from conversation history and Cloud Logging based on consent.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/call-companion](https://docs.cloud.google.com/dialogflow/cx/docs/concept/call-companion)
- [https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/AdvancedSettings](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/AdvancedSettings)

## Supporting Pages

### Agent settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- Enable consent-based end-user input redaction If this setting is enabled, it lets you use a special session parameter to control whether end-user input and parameters are redacted from conversation history and Cloud logging , by default the session parameter is true .
- Enable consent-based end-user input redaction If this setting is enabled, it lets you use a special session parameter to control whether end-user input and parameters are redacted from conversation history and Cloud logging .
- Home Documentation AI and ML Dialogflow Dialogflow CX Send feedback Agent settings Stay organized with collections Save and categorize content based on your preferences.
- User consent is collected using a boolean session parameter: $session.params.conversation-redaction .

### Call companion \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/call-companion](https://docs.cloud.google.com/dialogflow/cx/docs/concept/call-companion)
- Source ID: `site-docs-root`
- Final score: 122
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Dialogflow Dialogflow CX Send feedback Call companion Stay organized with collections Save and categorize content based on your preferences.
- Settings You can customize the following fields for the Dialogflow CX Messenger UI or call companion UI: Company name or title Font Logo (must be stored in a Google Cloud bucket, format: gs://<bucket name>/<object name> ) Text color (select the color or enter hex code) Background color (select the color or enter hex code) User input background color (select the color or enter hex code) Agent response background color (select the color or enter hex code) Customize the UI Select an agent with call companion enabled and click Agent Settings , then the Multimodal tab.
- Agent design recommendations The following recommendations apply to call companion: For turns requiring interactive end-user input (text input, chip tapping, and so on), adjust the no speech timeout on the page, flow, or agent level to allow the user enough time to input the required content.
- This will be shared across all Dialogflow users for this feature, but you can add your company name to the SMS.

### AdvancedSettings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/AdvancedSettings](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/AdvancedSettings)
- Source ID: `site-docs-reference`
- Final score: 114
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation { "enableStackdriverLogging" : boolean , "enableInteractionLogging" : boolean , "enableConsentBasedRedaction" : boolean } Fields enableStackdriverLogging boolean Enables Google Cloud Logging. enableInteractionLogging boolean Enables DF Interaction logging. enableConsentBasedRedaction boolean Enables consent-based end-user input redaction, if true, a pre-defined session parameter $session.params.conversation-redaction will be used to determine if the utterance should be redacted.
- Home Documentation AI and ML Dialogflow Dialogflow CX Reference Send feedback AdvancedSettings Stay organized with collections Save and categorize content based on your preferences.
- For example, if the caller presses a button on their telephone keypad and DTMF processing is enabled, Dialogflow will detect the event (e.g. a "3" was pressed) in the incoming audio and pass the event to the bot to drive business logic (e.g. when 3 is pressed, return the account balance). maxDigits integer Max length of DTMF digits. finishDigit string The digit that terminates a DTMF digit sequence. interdigitTimeoutDuration string ( Duration format) Interdigit timeout setting for matching dtmf input to regex.
- JSON representation { "audioExportGcsDestination" : { object ( GcsDestination ) } , "speechSettings" : { object ( SpeechSettings ) } , "dtmfSettings" : { object ( DtmfSettings ) } , "loggingSettings" : { object ( LoggingSettings ) } } Fields audioExportGcsDestination object ( GcsDestination ) If present, incoming audio is exported by Dialogflow to the configured Google Cloud Storage destination.

