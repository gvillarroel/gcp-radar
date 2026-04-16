---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.670Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Salesforce custom webhook templates"
feature_slug: "salesforce-custom-webhook-templates"
latest_feature_date: "2024-06-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/fulfillment"
keywords:
  - "salesforce"
  - "templates"
  - "webhook"
  - "integrations"
  - "custom"
  - "provides"
---

# Salesforce custom webhook templates

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX provides custom webhook templates for Salesforce integrations.

## Extended Definition

Dialogflow CX provides custom webhook templates for Salesforce integrations.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/fulfillment](https://docs.cloud.google.com/dialogflow/cx/docs/concept/fulfillment)

## Supporting Pages

### "General agent design best practices \_|\_ Dialogflow CX \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design)
- Source ID: `site-docs-root`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- Dialogflow CX API If none of the ready-to-use integrations are suitable, or you would like to customize the interface for your system, you can use the Dialogflow CX API directly .
- The following example shows good and bad annotations for a product entity type: Good Bad I want to buy a shirt I want to buy a shirt Order a new hat Order a new shirt Add a watch to my cart Add a shirt to my cart Custom entities should include variety Custom entities should cover a broad range of examples.
- For example: Parameter Value webhook-error-count 0 Create a webhook error page that handles webhook error events: The entry fulfillment should acknowledge the failure for the end-user, and it should increment an error counter session parameter using a fulfillment parameter preset .
- For example: Parameter Value webhook-error-count $sys.func.ADD($session.params.webhook-error-count, 1) Define a condition route that has a condition that the error count is less than the maximum allowed. (for example, $session.params.webhook-error-count <= 3 ).

### "Package com.google.cloud.dialogflow.v2 (4.94.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- Source ID: `site-java-reference`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- It provides more controls for customized ranking than the com. google. cloud. dialogflow. v2.
- It provides more controls for customized ranking than the com. google. cloud. dialogflow. v2.
- Answer Feedback Represents feedback the customer has about the quality & correctness of a certain answer in a conversation. com. google. cloud. dialogflow. v2.
- Conversation datasets contain raw conversation files and their customizable metadata that can be used for model training. com. google. cloud. dialogflow. v2.

### Fulfillments \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/fulfillment](https://docs.cloud.google.com/dialogflow/cx/docs/concept/fulfillment)
- Source ID: `site-docs-root`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- Custom payloads are sometimes large and complex, so using templates can help make the agent creation process easier.
- Custom payload templates If you use custom payloads often, you should use custom payload templates .
- For example, the JSON payload for "yes" and "no" buttons can be defined as custom payload templates.
- Custom payload Some integrations support a custom payload response to handle rich responses.

