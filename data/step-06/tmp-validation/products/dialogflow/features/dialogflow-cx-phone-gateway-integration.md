---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.762Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Dialogflow CX Phone Gateway integration"
feature_slug: "dialogflow-cx-phone-gateway-integration"
latest_feature_date: "2021-04-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/advanced-speech"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/call-companion"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings"
keywords:
  - "gateway"
  - "telephony"
  - "integration"
  - "access"
  - "phone"
  - "includes"
---

# Dialogflow CX Phone Gateway integration

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX includes an integration with Phone Gateway for telephony access.

## Extended Definition

Dialogflow CX includes an integration with Phone Gateway for telephony access.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/advanced-speech](https://docs.cloud.google.com/dialogflow/cx/docs/concept/advanced-speech)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/call-companion](https://docs.cloud.google.com/dialogflow/cx/docs/concept/call-companion)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)

## Supporting Pages

### Call companion \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/call-companion](https://docs.cloud.google.com/dialogflow/cx/docs/concept/call-companion)
- Source ID: `site-docs-root`
- Final score: 131
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Enable call companion: For a new telephony integration: Follow the steps to enable Dialogflow CX Phone Gateway , and check the Enable call companion option for a new conversation profile.
- For an existing telephony integration: On the Manage tab, click Integrations , then click Manage for CX Phone Gateway.
- When you are using the Dialogflow CX Phone Gateway, it will only use the output audio text for voice output and will only use the text response for the call companion transcript.
- Limitations The following limitations apply: Call companion's built-in SMS functionality currently only works with Dialogflow CX Phone Gateway .

### Advanced speech settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/advanced-speech](https://docs.cloud.google.com/dialogflow/cx/docs/concept/advanced-speech)
- Source ID: `site-docs-root`
- Final score: 129
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To the service account of the format service- PROJECT NUMBER @gcp-sa-dialogflow.iam.gserviceaccount.com if you use the Dialogflow CX Phone Gateway integration.
- If supplied, any audio data associated with a request will be saved to the Cloud Storage bucket: Audio Saved Applicable requests End-user audio input DetectIntent, StreamingDetectIntent, AnalyzeContent, StreamingAnalyzeContent Text-to-Speech (TTS) audio synthesized for a response AnalyzeContent, StreamingAnalyzeContent Grant the Storage Object Creator role to the following service accounts in your project: To the service account of the format one-click@df-cx- ALPHANUMERIC VALUE - ALPHANUMERIC VALUE .iam.gserviceaccount.com if you use a partner built-in telephony integration .
- Note: Advanced speech settings are only supported by telephony integrations .
- For Dialogflow CX Phone Gateway, see limitations .

### Agent settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- Source ID: `site-docs-root`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- If you are using telephony gateway, make sure the Dialogflow Service Agent service account service- PROJECT NUMBER @gcp-sa-dialogflow.iam.gserviceaccount.com is granted with "AutoML Predictor" in your custom voice project.
- If you are using telephony gateway, make sure the Dialogflow Service Agent service account service- PROJECT NUMBER @gcp-sa-dialogflow.iam.gserviceaccount.com is granted with "AutoML Predictor" in your custom voice project.
- DTMF settings link See DTMF for telephony integrations for more information.
- DTMF See DTMF for telephony integrations for more information.

