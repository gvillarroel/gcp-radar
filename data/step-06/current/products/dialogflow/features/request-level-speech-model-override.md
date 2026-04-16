---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.360Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Request-level speech model override"
feature_slug: "request-level-speech-model-override"
latest_feature_date: "2024-03-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/advanced-speech"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/AdvancedSettings"
keywords:
  - "request"
  - "level"
  - "speech"
  - "model"
  - "override"
  - "dialogflow"
  - "cx"
  - "can"
---

# Request-level speech model override

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX can override the speech model specified in a runtime API request through advanced speech settings.

## Extended Definition

Dialogflow CX can override the speech model specified in a runtime API request through advanced speech settings.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/advanced-speech](https://docs.cloud.google.com/dialogflow/cx/docs/concept/advanced-speech)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- [https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/AdvancedSettings](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/AdvancedSettings)

## Supporting Pages

### Advanced speech settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/advanced-speech](https://docs.cloud.google.com/dialogflow/cx/docs/concept/advanced-speech)
- Source ID: `site-docs-root`
- Final score: 167
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can also check Override request-level speech model , which will cause the selected model to be used even if a runtime API call specifies a different model.
- Settings availability by level The following table indicates which advanced speech settings are available at each level: Setting name Agent Flow Page Fulfillment Model selection (Speech-to-Text) ✔ ✔ ✔ End of speech sensitivity ✔ ✔ ✔ Advanced timeout-based end of speech sensitivity ✔ ✔ ✔ Enable smart endpointing ✔ No speech timeout ✔ ✔ ✔ Barge-in ✔ ✔ ✔ Allow cancellation of partial response playback ✔ Audio export bucket ✔ ✔ DTMF ✔ ✔ ✔ Model selection (Speech-to-Text) Can be set at the agent, flow, and page levels.
- While the End of speech sensitivity setting supports only the phone call speech model for the en-US language tag by default, the Enable advanced timeout-based end of speech sensitivity setting allows for configuring end of speech sensitivity for all languages and speech models supported by Dialogflow.
- If supplied, any audio data associated with a request will be saved to the Cloud Storage bucket: Audio Saved Applicable requests End-user audio input DetectIntent, StreamingDetectIntent, AnalyzeContent, StreamingAnalyzeContent Text-to-Speech (TTS) audio synthesized for a response AnalyzeContent, StreamingAnalyzeContent Grant the Storage Object Creator role to the following service accounts in your project: To the service account of the format one-click@df-cx- ALPHANUMERIC VALUE - ALPHANUMERIC VALUE .iam.gserviceaccount.com if you use a partner built-in telephony integration .

### "Package com.google.cloud.dialogflow.v2 (4.94.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- Source ID: `site-java-reference`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- If this audio config is supplied in a request, it overrides all existing text-to-speech settings applied to the agent. com. google. cloud. dialogflow. v2.
- If this audio config is supplied in a request, it overrides all existing text-to-speech settings applied to the agent. com. google. cloud. dialogflow. v2.
- Streaming Recognition Result Contains a speech recognition result corresponding to a portion of the audio that is currently being processed or an indication that this is the end of the single requested utterance. com. google. cloud. dialogflow. v2.
- Builder Contains a speech recognition result corresponding to a portion of the audio that is currently being processed or an indication that this is the end of the single requested utterance. com. google. cloud. dialogflow. v2.

### AdvancedSettings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/AdvancedSettings](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/AdvancedSettings)
- Source ID: `site-docs-reference`
- Final score: 129
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The mapped Speech-to-Text model will be selected for requests from its corresponding language.
- JSON representation { "audioExportGcsDestination" : { object ( GcsDestination ) } , "speechSettings" : { object ( SpeechSettings ) } , "dtmfSettings" : { object ( DtmfSettings ) } , "loggingSettings" : { object ( LoggingSettings ) } } Fields audioExportGcsDestination object ( GcsDestination ) If present, incoming audio is exported by Dialogflow to the configured Google Cloud Storage destination.
- JSON representation { "endpointerSensitivity" : integer , "noSpeechTimeout" : string , "useTimeoutBasedEndpointing" : boolean , "models" : { string : string , ... } } Fields endpointerSensitivity integer Sensitivity of the speech model that detects the end of speech.
- Example: "3.5s" . useTimeoutBasedEndpointing boolean Use timeout based endpointing, interpreting endpointer sensitivity as seconds of timeout value. models map (key: string, value: string) Mapping from language to Speech-to-Text model.

