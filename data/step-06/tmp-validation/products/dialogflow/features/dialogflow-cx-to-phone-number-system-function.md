---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.733Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Dialogflow CX TO_PHONE_NUMBER system function"
feature_slug: "dialogflow-cx-to-phone-number-system-function"
latest_feature_date: "2023-06-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design"
  - "https://docs.cloud.google.com/dialogflow/es/docs/agents-design"
keywords:
  - "number"
  - "phone"
  - "provides"
  - "system"
---

# Dialogflow CX TO_PHONE_NUMBER system function

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX provides the TO_PHONE_NUMBER system function.

## Extended Definition

Dialogflow CX provides the TO_PHONE_NUMBER system function.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design)
- [https://docs.cloud.google.com/dialogflow/es/docs/agents-design](https://docs.cloud.google.com/dialogflow/es/docs/agents-design)

## Supporting Pages

### "Package com.google.cloud.dialogflow.v2 (4.94.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- Source ID: `site-java-reference`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- Conversation Phone Number Represents a phone number for telephony integration.
- Conversation Phone Number Or Builder com. google. cloud. dialogflow. v2.
- Builder Represents a phone number for telephony integration.
- Telephony Connection Info The information about phone calls connected via phone gateway to the conversation. com. google. cloud. dialogflow. v2.

### "General agent design best practices \_|\_ Dialogflow CX \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design)
- Source ID: `site-docs-root`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- Instead, you should select "7" for the annotation and use the @sys.number system entity.
- The following lists the conversation control granularity of agent resources in increasing granularity order: Agents (one agent handles all conversations) Flows (one flow handles one or more related conversation topics) Pages (one page handles one or more related conversation turns) Routes (one route handles a user intent or condition check) Intent parameters versus form parameters The main way in which your system gets structured data from the end-user is with parameters .
- There are many good naming schemes, but here is one example: phone-service.order.cancel phone-service.order.create phone-service.order.change tv-service.order.cancel tv-service.order.create tv-service.order.change account.balance.get account.balance.pay account.address.get account.address.update Transitions Transitions defined in state handlers provide control over the conversation by changing the active page.
- For example, the following table shows good and bad ways to annotate with the @sys.date system entity: Good Bad September 7th departure September 7th departure Leaving on July 4 Leaving on July 4 Use semantically meaningful annotations for system entities The semantic meaning of a training phrase part selected for an annotation can be affected by the rest of the text in a training phrase.

### "General agent design best practices \_|\_ Dialogflow ES \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dialogflow/es/docs/agents-design](https://docs.cloud.google.com/dialogflow/es/docs/agents-design)
- Source ID: `site-iam-reference`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- There are many good naming schemes, but here is one example: phone-service.order.cancel phone-service.order.create phone-service.order.change tv-service.order.cancel tv-service.order.create tv-service.order.change account.balance.get account.balance.pay account.address.get account.address.update Helpful intent features Best Practice Details Agents should support contextual requests.
- For example: I am 7 years old (semantic meaning of annotated text is a person's age) The contract is valid for 7 years (semantic meaning of annotated text is a time duration) Dialogflow's machine learning models consider semantic meaning when matching system entities.
- The complexity of your agent will determine the actual number of training phrases each intent should have, but 10-20 (depending on complexity of intent) is a good minimum.
- For example, if you are providing time values that should be parsed as @sys.time system entities in training phrases, do not provide the same time in all training phrases.

