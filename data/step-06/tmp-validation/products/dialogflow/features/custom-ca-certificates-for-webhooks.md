---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.756Z"
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
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-custom"
keywords:
  - "certificate"
  - "authority"
  - "certificates"
  - "webhooks"
  - "custom"
---

# Custom CA certificates for webhooks

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX webhooks support custom certificate authority certificates.

## Extended Definition

Dialogflow CX webhooks support custom certificate authority certificates.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/custom-ca](https://docs.cloud.google.com/dialogflow/cx/docs/concept/custom-ca)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-custom](https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-custom)

## Supporting Pages

### Custom CA certificates \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/custom-ca](https://docs.cloud.google.com/dialogflow/cx/docs/concept/custom-ca)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In this case, you can upload the custom certificates to Dialogflow CX when creating webhooks, and the uploaded certificates will override Google's default trust store.
- However, you may want to use custom CA certificates, which cannot be signed by a certificate authority recognized by Google's default trust store.
- Home Documentation AI and ML Dialogflow Dialogflow CX Send feedback Custom CA certificates Stay organized with collections Save and categorize content based on your preferences.
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

### Custom entities \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-custom](https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-custom)
- Source ID: `site-docs-root`
- Final score: 62
- Re-rank relevance: N/A

Evidence snippets:
- Go to the EntityType API reference Select a protocol and version for the EntityType reference: Protocol V3 V3beta1 REST EntityType resource EntityType resource RPC EntityType interface EntityType interface C++ EntityTypesClient Not available C# EntityTypesClient Not available Go EntityTypesClient Not available Java EntityTypesClient EntityTypesClient Node.js EntityTypesClient EntityTypesClient PHP Not available Not available Python EntityTypesClient EntityTypesClient Ruby Not available Not available Close Limitations The following limitations apply: Custom entity type display names are unique for each agent.
- Export and import custom entities Preview This product or feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Home Documentation AI and ML Dialogflow Dialogflow CX Send feedback Custom entities Stay organized with collections Save and categorize content based on your preferences.
- Create custom entities To create a custom entity: Console Open the Dialogflow CX console .

