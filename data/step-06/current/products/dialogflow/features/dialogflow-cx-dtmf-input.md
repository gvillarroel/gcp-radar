---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.474Z"
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
  - "dialogflow"
  - "cx"
  - "dtmf"
  - "input"
  - "supports"
  - "telephony"
  - "partner"
  - "integrations"
---

# Dialogflow CX DTMF input

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX supports DTMF input for telephony partner integrations.

## Extended Definition

Dialogflow CX supports DTMF input for telephony partner integrations.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/dtmf](https://docs.cloud.google.com/dialogflow/cx/docs/concept/dtmf)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)

## Supporting Pages

### DTMF for telephony integrations \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/dtmf](https://docs.cloud.google.com/dialogflow/cx/docs/concept/dtmf)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Dialogflow Dialogflow CX Send feedback DTMF for telephony integrations Stay organized with collections Save and categorize content based on your preferences.
- If Dialogflow aborts DTMF processing, it provides the unconverted sequence captured up to that point to the agent as end-user input.
- You can enable and configure DTMF (Dual-tone multi-frequency signaling) for telephony integrations .
- If the end-user pauses entry for than the time set in endpointing timeout duration , Dialogflow aborts DTMF processing and converts the currently-matched sequence as it normally would.

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
- If you are using telephony gateway, make sure the Dialogflow Service Agent service account service- PROJECT NUMBER @gcp-sa-dialogflow.iam.gserviceaccount.com is granted with "AutoML Predictor" in your custom voice project.
- If you are using telephony gateway, make sure the Dialogflow Service Agent service account service- PROJECT NUMBER @gcp-sa-dialogflow.iam.gserviceaccount.com is granted with "AutoML Predictor" in your custom voice project.

