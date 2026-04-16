---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.358Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Dialogflow CX phone gateway"
feature_slug: "dialogflow-cx-phone-gateway"
latest_feature_date: "2024-04-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/call-companion"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/conversation-profiles"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/advanced-speech"
keywords:
  - "dialogflow"
  - "cx"
  - "phone"
  - "gateway"
  - "generally"
  - "available"
---

# Dialogflow CX phone gateway

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX phone gateway is generally available.

## Extended Definition

Dialogflow CX phone gateway is generally available.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/call-companion](https://docs.cloud.google.com/dialogflow/cx/docs/concept/call-companion)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/conversation-profiles](https://docs.cloud.google.com/dialogflow/cx/docs/concept/conversation-profiles)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/advanced-speech](https://docs.cloud.google.com/dialogflow/cx/docs/concept/advanced-speech)

## Supporting Pages

### Call companion \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/call-companion](https://docs.cloud.google.com/dialogflow/cx/docs/concept/call-companion)
- Source ID: `site-docs-root`
- Final score: 136
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enable call companion: For a new telephony integration: Follow the steps to enable Dialogflow CX Phone Gateway , and check the Enable call companion option for a new conversation profile.
- When you are using the Dialogflow CX Phone Gateway, it will only use the output audio text for voice output and will only use the text response for the call companion transcript.
- Limitations The following limitations apply: Call companion's built-in SMS functionality currently only works with Dialogflow CX Phone Gateway .
- Test call companion by calling the Dialogflow CX Phone Gateway number for which you have enabled call companion.

### Conversation profiles \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/conversation-profiles](https://docs.cloud.google.com/dialogflow/cx/docs/concept/conversation-profiles)
- Source ID: `site-docs-root`
- Final score: 112
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- They can be created in conjunction with either Dialogflow CX Phone Gateway integration or Agent Assist .
- The Dialogflow CX Phone Gateway conversation profiles are relevant if you want to use Call companion .
- Enable Call companion : Enable this to use call companion for Dialogflow CX Phone Gateway.
- You can create the conversation profile without enabling this field, but the conversation profile will only be available for use with Agent Assist, not the Dialogflow CX agent.

### Advanced speech settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/advanced-speech](https://docs.cloud.google.com/dialogflow/cx/docs/concept/advanced-speech)
- Source ID: `site-docs-root`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- To the service account of the format service- PROJECT NUMBER @gcp-sa-dialogflow.iam.gserviceaccount.com if you use the Dialogflow CX Phone Gateway integration.
- For Dialogflow CX Phone Gateway, see limitations .
- While the End of speech sensitivity setting supports only the phone call speech model for the en-US language tag by default, the Enable advanced timeout-based end of speech sensitivity setting allows for configuring end of speech sensitivity for all languages and speech models supported by Dialogflow.
- Settings availability by level The following table indicates which advanced speech settings are available at each level: Setting name Agent Flow Page Fulfillment Model selection (Speech-to-Text) ✔ ✔ ✔ End of speech sensitivity ✔ ✔ ✔ Advanced timeout-based end of speech sensitivity ✔ ✔ ✔ Enable smart endpointing ✔ No speech timeout ✔ ✔ ✔ Barge-in ✔ ✔ ✔ Allow cancellation of partial response playback ✔ Audio export bucket ✔ ✔ DTMF ✔ ✔ ✔ Model selection (Speech-to-Text) Can be set at the agent, flow, and page levels.

