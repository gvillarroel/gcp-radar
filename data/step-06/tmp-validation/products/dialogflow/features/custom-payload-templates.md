---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.739Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Custom payload templates"
feature_slug: "custom-payload-templates"
latest_feature_date: "2023-01-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/fulfillment"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2"
keywords:
  - "payload"
  - "templates"
  - "reusable"
  - "responses"
  - "custom"
  - "supports"
---

# Custom payload templates

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX supports reusable custom payload templates for responses.

## Extended Definition

Dialogflow CX supports reusable custom payload templates for responses.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/fulfillment](https://docs.cloud.google.com/dialogflow/cx/docs/concept/fulfillment)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)

## Supporting Pages

### Fulfillments \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/fulfillment](https://docs.cloud.google.com/dialogflow/cx/docs/concept/fulfillment)
- Source ID: `site-docs-root`
- Final score: 159
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Custom payloads are sometimes large and complex, so using templates can help make the agent creation process easier.
- Custom payload templates If you use custom payloads often, you should use custom payload templates .
- For example, the JSON payload for "yes" and "no" buttons can be defined as custom payload templates.
- Custom payload Some integrations support a custom payload response to handle rich responses.

### Agent settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- Source ID: `site-docs-root`
- Final score: 135
- Re-rank relevance: N/A

Evidence snippets:
- Connectivity Custom payload template link In this section, you can create descriptions and payloads for custom payload templates .
- Custom payload template In this section, you can create descriptions and payloads for custom payload templates .
- The sensitivity level can be customized by choosing one of Block none (disabling RAI checks), Block few (blocking only high-probability instances of harmful content), Block some (medium and high probability instances), and Block most (low, medium, and high probability) for each category.
- If you are using telephony gateway, make sure the Dialogflow Service Agent service account service- PROJECT NUMBER @gcp-sa-dialogflow.iam.gserviceaccount.com is granted with "AutoML Predictor" in your custom voice project.

### "Package com.google.cloud.dialogflow.v2 (4.94.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- Source ID: `site-java-reference`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- Browse Carousel Card Browse Carousel Card for Actions on Google. https://developers.google.com/actions/assistant/responses#browsing carousel com. google. cloud. dialogflow. v2.
- Builder Browse Carousel Card for Actions on Google. https://developers.google.com/actions/assistant/responses#browsing carousel com. google. cloud. dialogflow. v2.
- Answer Feedback Represents feedback the customer has about the quality & correctness of a certain answer in a conversation. com. google. cloud. dialogflow. v2.
- Conversation datasets contain raw conversation files and their customizable metadata that can be used for model training. com. google. cloud. dialogflow. v2.

