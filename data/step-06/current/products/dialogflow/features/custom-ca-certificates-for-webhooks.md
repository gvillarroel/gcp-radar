---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.453Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Custom CA certificates for webhooks"
feature_slug: "custom-ca-certificates-for-webhooks"
latest_feature_date: "2021-11-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/custom-ca"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2"
  - "https://docs.cloud.google.com/dialogflow/es/docs/entities-custom"
keywords:
  - "custom"
  - "ca"
  - "certificates"
  - "webhooks"
  - "dialogflow"
  - "cx"
  - "certificate"
  - "authority"
---

# Custom CA certificates for webhooks

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX webhooks support custom certificate authority certificates.

## Extended Definition

Dialogflow CX webhooks support custom certificate authority certificates.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/custom-ca](https://docs.cloud.google.com/dialogflow/cx/docs/concept/custom-ca)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- [https://docs.cloud.google.com/dialogflow/es/docs/entities-custom](https://docs.cloud.google.com/dialogflow/es/docs/entities-custom)

## Supporting Pages

### Custom CA certificates \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/custom-ca](https://docs.cloud.google.com/dialogflow/cx/docs/concept/custom-ca)
- Source ID: `site-docs-root`
- Final score: 184
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In this case, you can upload the custom certificates to Dialogflow CX when creating webhooks, and the uploaded certificates will override Google's default trust store.
- Home Documentation AI and ML Dialogflow Dialogflow CX Send feedback Custom CA certificates Stay organized with collections Save and categorize content based on your preferences.
- However, you may want to use custom CA certificates, which cannot be signed by a certificate authority recognized by Google's default trust store.
- Dialogflow CX webhooks require HTTPS endpoints that present valid TLS certificates when they are verified using Google's default trust store.

### "Package com.google.cloud.dialogflow.v2 (4.94.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- Source ID: `site-java-reference`
- Final score: 67
- Re-rank relevance: N/A

Evidence snippets:
- Answer Feedback Represents feedback the customer has about the quality & correctness of a certain answer in a conversation. com. google. cloud. dialogflow. v2.
- Conversation datasets contain raw conversation files and their customizable metadata that can be used for model training. com. google. cloud. dialogflow. v2.
- Conversation datasets contain raw conversation files and their customizable metadata that can be used for model training. com. google. cloud. dialogflow. v2.
- Conversation datasets contain raw conversation files and their customizable metadata that can be used for model training. com. google. cloud. dialogflow. v2.

### Custom entities \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/es/docs/entities-custom](https://docs.cloud.google.com/dialogflow/es/docs/entities-custom)
- Source ID: `site-iam-reference`
- Final score: 66
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Dialogflow Dialogflow ES Send feedback Custom entities Stay organized with collections Save and categorize content based on your preferences.
- To access custom entity data: Go to the Dialogflow ES console .
- Where to find this data When building an agent, it is most common to use the Dialogflow ES console ( visit documentation , open console ).
- Limitations The following limitations apply: Custom entity type names are unique for each agent.

