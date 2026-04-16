---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.452Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Call transfer"
feature_slug: "call-transfer"
latest_feature_date: "2021-11-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/fulfillment"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/call-companion"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2"
keywords:
  - "call"
  - "transfer"
  - "dialogflow"
  - "cx"
  - "phone"
  - "gateway"
  - "supports"
---

# Call transfer

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX Phone Gateway supports call transfer.

## Extended Definition

Dialogflow CX Phone Gateway supports call transfer.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/fulfillment](https://docs.cloud.google.com/dialogflow/cx/docs/concept/fulfillment)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/call-companion](https://docs.cloud.google.com/dialogflow/cx/docs/concept/call-companion)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)

## Supporting Pages

### Fulfillments \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/fulfillment](https://docs.cloud.google.com/dialogflow/cx/docs/concept/fulfillment)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Telephony transfer call Note: Call transfer is only available for Dialogflow CX Phone Gateway .
- At runtime, when the Dialogflow CX virtual agent calls a fulfillment with call transfer, the call is transferred to the specified number and virtual agent handling is suspended.
- For some telephony integrations, you can specify a US phone number for call transfer.
- For example, see the requirements for Dialogflow CX Phone Gateway.

### Call companion \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/call-companion](https://docs.cloud.google.com/dialogflow/cx/docs/concept/call-companion)
- Source ID: `site-docs-root`
- Final score: 125
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enable call companion: For a new telephony integration: Follow the steps to enable Dialogflow CX Phone Gateway , and check the Enable call companion option for a new conversation profile.
- When you are using the Dialogflow CX Phone Gateway, it will only use the output audio text for voice output and will only use the text response for the call companion transcript.
- Limitations The following limitations apply: Call companion's built-in SMS functionality currently only works with Dialogflow CX Phone Gateway .
- Test call companion by calling the Dialogflow CX Phone Gateway number for which you have enabled call companion.

### "Package com.google.cloud.dialogflow.v2 (4.94.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- Source ID: `site-java-reference`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- Telephony Connection Info The information about phone calls connected via phone gateway to the conversation. com. google. cloud. dialogflow. v2.
- Builder The information about phone calls connected via phone gateway to the conversation. com. google. cloud. dialogflow. v2.
- Human Agent Handoff Config Defines the hand off to a live agent, typically on which external agent service provider to connect to a conversation. com. google. cloud. dialogflow. v2.
- Entity Type Each intent parameter has a type, called the entity type, which dictates exactly how data from an end-user expression is extracted. com. google. cloud. dialogflow. v2.

