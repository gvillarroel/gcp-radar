---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.488Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "SignalWire telephony integration"
feature_slug: "signalwire-telephony-integration"
latest_feature_date: "2020-04-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/dtmf"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/fulfillment"
  - "https://docs.cloud.google.com/dialogflow/es/docs/agents-mega"
keywords:
  - "signalwire"
  - "telephony"
  - "integration"
  - "dialogflow"
  - "includes"
  - "one"
  - "click"
  - "partner"
---

# SignalWire telephony integration

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow includes a one-click integration with the SignalWire telephony partner.

## Extended Definition

Dialogflow includes a one-click integration with the SignalWire telephony partner.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/dtmf](https://docs.cloud.google.com/dialogflow/cx/docs/concept/dtmf)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/fulfillment](https://docs.cloud.google.com/dialogflow/cx/docs/concept/fulfillment)
- [https://docs.cloud.google.com/dialogflow/es/docs/agents-mega](https://docs.cloud.google.com/dialogflow/es/docs/agents-mega)

## Supporting Pages

### DTMF for telephony integrations \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/dtmf](https://docs.cloud.google.com/dialogflow/cx/docs/concept/dtmf)
- Source ID: `site-docs-root`
- Final score: 106
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Dialogflow Dialogflow CX Send feedback DTMF for telephony integrations Stay organized with collections Save and categorize content based on your preferences.
- You can enable and configure DTMF (Dual-tone multi-frequency signaling) for telephony integrations .
- In the Dialogflow Console, click Test Agent in the upper right hand corner of the screen.
- If the end-user pauses entry for than the time set in endpointing timeout duration , Dialogflow aborts DTMF processing and converts the currently-matched sequence as it normally would.

### Fulfillments \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/fulfillment](https://docs.cloud.google.com/dialogflow/cx/docs/concept/fulfillment)
- Source ID: `site-docs-root`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- For partner telephony integrations , the URL for the audio file must be accessible by the partner.
- Partner telephony integrations may or may not support partial response at this time.
- Telephony transfer call Note: Call transfer is only available for Dialogflow CX Phone Gateway .
- For some telephony integrations, you can specify a US phone number for call transfer.

### Mega agents \_|\_ Dialogflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/es/docs/agents-mega](https://docs.cloud.google.com/dialogflow/es/docs/agents-mega)
- Source ID: `site-iam-reference`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- Partner built-in telephony integrations ( AudioCodes , Avaya , SignalWire , Voximplant ) are not supported.
- If you plan on using any integrations for the mega agent, the automatically created service- project-number @gcp-sa-dialogflow.iam.gserviceaccount.com service account for the mega agent's project must have a role on that project that includes permission to make detect intent calls.
- You can use the Dialogflow Messenger integration as an easy way to do this, or you could setup your desired integration for the mega agent prior to configuring sub-agents.
- The Hangouts Chat, Dialogflow Messenger, Facebook Messenger, and Facebook Workplace integrations each automatically create this special service account.

