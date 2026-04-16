---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.775Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Dialogflow CX DTMF input"
feature_slug: "dialogflow-cx-dtmf-input"
latest_feature_date: "2020-12-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/dtmf"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings"
keywords:
  - "integrations"
  - "partner"
  - "dtmf"
  - "telephony"
  - "input"
  - "supports"
---

# Dialogflow CX DTMF input

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX supports DTMF input for telephony partner integrations.

## Extended Definition

Dialogflow CX supports DTMF input for telephony partner integrations.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/dtmf](https://docs.cloud.google.com/dialogflow/cx/docs/concept/dtmf)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)

## Supporting Pages

### DTMF for telephony integrations \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/dtmf](https://docs.cloud.google.com/dialogflow/cx/docs/concept/dtmf)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation AI and ML Dialogflow Dialogflow CX Send feedback DTMF for telephony integrations Stay organized with collections Save and categorize content based on your preferences.
- You can enable and configure DTMF (Dual-tone multi-frequency signaling) for telephony integrations .
- Match to a system entity type You can associate DTMF patterns with individual intents and entities to trigger a match to end-user input sequences.
- If Dialogflow aborts DTMF processing, it provides the unconverted sequence captured up to that point to the agent as end-user input.

### "Package com.google.cloud.dialogflow.v2 (4.94.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- Source ID: `site-java-reference`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- Telephony Dtmf Events A wrapper of repeated TelephonyDtmf digits. com. google. cloud. dialogflow. v2.
- Builder A wrapper of repeated TelephonyDtmf digits. com. google. cloud. dialogflow. v2.
- Telephony Dtmf DTMF digit in Telephony Gateway. com. google. cloud. dialogflow. v2.
- Telephony Dtmf Events Or Builder com. google. cloud. dialogflow. v2.

### Agent settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- Source ID: `site-docs-root`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- DTMF settings link See DTMF for telephony integrations for more information.
- DTMF See DTMF for telephony integrations for more information.
- Enable consent-based end-user input redaction If this setting is enabled, it lets you use a special session parameter to control whether end-user input and parameters are redacted from conversation history and Cloud logging , by default the session parameter is true .
- Override request-level synthesized speech configuration link When enabled, the synthesized speech configuration specified in the agent settings overrides the one specified in the API, partner integration, or the conversation profile.

