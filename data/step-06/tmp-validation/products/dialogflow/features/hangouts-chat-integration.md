---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.798Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Hangouts Chat Integration"
feature_slug: "hangouts-chat-integration"
latest_feature_date: "2019-05-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/es/docs/agents-mega"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2"
  - "https://docs.cloud.google.com/dialogflow/es/docs/agents-design"
keywords:
  - "hangouts"
  - "connect"
  - "allows"
  - "integration"
  - "chat"
  - "agents"
---

# Hangouts Chat Integration

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Hangouts Chat Integration allows Dialogflow agents to connect with Hangouts Chat.

## Extended Definition

Hangouts Chat Integration allows Dialogflow agents to connect with Hangouts Chat.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dialogflow/es/docs/agents-mega](https://docs.cloud.google.com/dialogflow/es/docs/agents-mega)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- [https://docs.cloud.google.com/dialogflow/es/docs/agents-design](https://docs.cloud.google.com/dialogflow/es/docs/agents-design)

## Supporting Pages

### Mega agents \_|\_ Dialogflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/es/docs/agents-mega](https://docs.cloud.google.com/dialogflow/es/docs/agents-mega)
- Source ID: `site-iam-reference`
- Final score: 105
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The Hangouts Chat, Dialogflow Messenger, Facebook Messenger, and Facebook Workplace integrations each automatically create this special service account.
- You can use the Dialogflow Messenger integration as an easy way to do this, or you could setup your desired integration for the mega agent prior to configuring sub-agents.
- For example, consider the following sub-agents: Sub-agent Intent Training Phrases Orders Books "I want to buy a book" "Add a book to my cart" Hats "I want to purchase a hat" "I want a hat" Account Balance "What is my balance?" "How much is left in my account?" Address "I want to change my address" "I have a new address" If an end-user says "I want to buy a hat please", a detect intent request sent to the mega agent will result in a match for the Hats intent in the Orders agent.
- For example, the REST JSON for this request would look like: { "queryInput": { "text": { "text": "reserve a meeting room for six people", "languageCode": "en-US" } }, "queryParams": { "subAgents": [ {"project": "projects/sub-agent-1-project-id"}, {"project": "projects/sub-agent-2-project-id"} ] } } Invoking events To invoke an event from a webhook service , you can specify the sub-agent for the intent you wish to trigger.

### "Package com.google.cloud.dialogflow.v2 (4.94.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- Source ID: `site-java-reference`
- Final score: 103
- Re-rank relevance: N/A

Evidence snippets:
- Connector Tool A ConnectorTool enabling using Integration Connectors Connections as tools. com. google. cloud. dialogflow. v2.
- Builder A ConnectorTool enabling using Integration Connectors Connections as tools. com. google. cloud. dialogflow. v2.
- It allows for connecting a particular conversation over telephony. com. google. cloud. dialogflow. v2.
- It allows for connecting a particular conversation over telephony. com. google. cloud. dialogflow. v2.

### "General agent design best practices \_|\_ Dialogflow ES \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dialogflow/es/docs/agents-design](https://docs.cloud.google.com/dialogflow/es/docs/agents-design)
- Source ID: `site-iam-reference`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- For customized fulfillment, agents should have an intent that allows users to repeat information.
- There are many good naming schemes, but here is one example: phone-service.order.cancel phone-service.order.create phone-service.order.change tv-service.order.cancel tv-service.order.create tv-service.order.change account.balance.get account.balance.pay account.address.get account.address.update Helpful intent features Best Practice Details Agents should support contextual requests.
- For example, if the initial prompt is "What color do you want?" and the user replies with "jungle parrot", a fallback/follow-up intent should rephrase the question, like "Sorry, what color was that?" Agents should have customized, brand-specific responses in the default fallback intent.
- Previous arrow back Integrations Next Voice agent design best practices arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

