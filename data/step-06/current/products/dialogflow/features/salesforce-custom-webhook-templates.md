---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.350Z"
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
  - "custom"
  - "webhook"
  - "templates"
  - "dialogflow"
  - "cx"
  - "provides"
  - "integrations"
---

# Salesforce custom webhook templates

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX provides custom webhook templates for Salesforce integrations.

## Extended Definition

Dialogflow CX provides custom webhook templates for Salesforce integrations.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

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
- If you use an integration, you do not need to directly call the Dialogflow CX API, as integrations handle this for you.
- Integrations and connecting your services There are multiple ways to integrate with Dialogflow CX agents.
- Integrations Dialogflow CX integrations provide a ready-to-use user interface for your agent.

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
- If you enable partial response in the first fulfillment, Dialogflow CX returns the first fulfillment message quickly and calls the webhook.
- This makes Dialogflow CX flush the response queue and send all messages as a partial response before calling the webhook.
- Custom payloads are sometimes large and complex, so using templates can help make the agent creation process easier.
- Custom payload templates If you use custom payloads often, you should use custom payload templates .

