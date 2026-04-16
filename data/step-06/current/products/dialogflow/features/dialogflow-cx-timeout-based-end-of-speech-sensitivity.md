---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.401Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Dialogflow CX timeout-based end-of-speech sensitivity"
feature_slug: "dialogflow-cx-timeout-based-end-of-speech-sensitivity"
latest_feature_date: "2023-08-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/advanced-speech"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/AdvancedSettings"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings"
keywords:
  - "dialogflow"
  - "cx"
  - "timeout"
  - "based"
  - "end"
  - "speech"
  - "sensitivity"
  - "provides"
---

# Dialogflow CX timeout-based end-of-speech sensitivity

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX provides a timeout-based end-of-speech sensitivity setting.

## Extended Definition

Dialogflow CX provides a timeout-based end-of-speech sensitivity setting.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/advanced-speech](https://docs.cloud.google.com/dialogflow/cx/docs/concept/advanced-speech)
- [https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/AdvancedSettings](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/AdvancedSettings)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)

## Supporting Pages

### Advanced speech settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/advanced-speech](https://docs.cloud.google.com/dialogflow/cx/docs/concept/advanced-speech)
- Source ID: `site-docs-root`
- Final score: 163
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- While the End of speech sensitivity setting supports only the phone call speech model for the en-US language tag by default, the Enable advanced timeout-based end of speech sensitivity setting allows for configuring end of speech sensitivity for all languages and speech models supported by Dialogflow.
- Settings availability by level The following table indicates which advanced speech settings are available at each level: Setting name Agent Flow Page Fulfillment Model selection (Speech-to-Text) ✔ ✔ ✔ End of speech sensitivity ✔ ✔ ✔ Advanced timeout-based end of speech sensitivity ✔ ✔ ✔ Enable smart endpointing ✔ No speech timeout ✔ ✔ ✔ Barge-in ✔ ✔ ✔ Allow cancellation of partial response playback ✔ Audio export bucket ✔ ✔ DTMF ✔ ✔ ✔ Model selection (Speech-to-Text) Can be set at the agent, flow, and page levels.
- Note: This setting only supports the phone call speech model for the en-US language tag unless you check the Enable advanced timeout-based end of speech sensitivity setting.
- Advanced timeout-based end of speech sensitivity Can be set at the agent level and disabled at the flow and page levels.

### AdvancedSettings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/AdvancedSettings](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/AdvancedSettings)
- Source ID: `site-docs-reference`
- Final score: 125
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation { "endpointerSensitivity" : integer , "noSpeechTimeout" : string , "useTimeoutBasedEndpointing" : boolean , "models" : { string : string , ... } } Fields endpointerSensitivity integer Sensitivity of the speech model that detects the end of speech.
- Example: "3.5s" . useTimeoutBasedEndpointing boolean Use timeout based endpointing, interpreting endpointer sensitivity as seconds of timeout value. models map (key: string, value: string) Mapping from language to Speech-to-Text model.
- For example, if the caller presses a button on their telephone keypad and DTMF processing is enabled, Dialogflow will detect the event (e.g. a "3" was pressed) in the incoming audio and pass the event to the bot to drive business logic (e.g. when 3 is pressed, return the account balance). maxDigits integer Max length of DTMF digits. finishDigit string The digit that terminates a DTMF digit sequence. interdigitTimeoutDuration string ( Duration format) Interdigit timeout setting for matching dtmf input to regex.
- JSON representation { "audioExportGcsDestination" : { object ( GcsDestination ) } , "speechSettings" : { object ( SpeechSettings ) } , "dtmfSettings" : { object ( DtmfSettings ) } , "loggingSettings" : { object ( LoggingSettings ) } } Fields audioExportGcsDestination object ( GcsDestination ) If present, incoming audio is exported by Dialogflow to the configured Google Cloud Storage destination.

### Agent settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation AI and ML Dialogflow Dialogflow CX Send feedback Agent settings Stay organized with collections Save and categorize content based on your preferences.
- Dangerous content Promotes or enables access to harmful goods, services, and/or activities Sexually explicit content Contains references to sexual acts and/or other lewd content Harassment Malicious, intimidating, bullying, and/or abusive comments targeting another individual Content is blocked based on the probability that it's harmful.
- Dangerous content Promotes or enables access to harmful goods, services, and activities Sexually explicit content Contains references to sexual acts or other lewd content Harassment Malicious, intimidating, bullying, or abusive comments targeting another individual Content is blocked based on the probability that it's harmful.
- Dangerous content Promotes or enables access to harmful goods, services, and activities Sexually explicit content Contains references to sexual acts or other lewd content Harassment Malicious, intimidating, bullying, or abusive comments targeting another individual Content is blocked based on the probability that it's harmful.

