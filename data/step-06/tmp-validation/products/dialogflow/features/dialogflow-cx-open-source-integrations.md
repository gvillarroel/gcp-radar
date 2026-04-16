---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.722Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Dialogflow CX open source integrations"
feature_slug: "dialogflow-cx-open-source-integrations"
latest_feature_date: "2023-08-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/fulfillment"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design"
keywords:
  - "sourced"
  - "open"
  - "integrations"
  - "multiple"
  - "source"
---

# Dialogflow CX open source integrations

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Google open sourced a set of Dialogflow CX integrations for multiple external platforms.

## Extended Definition

Google open sourced a set of Dialogflow CX integrations for multiple external platforms.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/fulfillment](https://docs.cloud.google.com/dialogflow/cx/docs/concept/fulfillment)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design)

## Supporting Pages

### Fulfillments \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/fulfillment](https://docs.cloud.google.com/dialogflow/cx/docs/concept/fulfillment)
- Source ID: `site-docs-root`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- Go to the Session API reference Select a protocol and version for the Session reference: Protocol V3 V3beta1 REST Session resource Session resource RPC Session interface Session interface C++ SessionsClient Not available C# SessionsClient Not available Go SessionsClient Not available Java SessionsClient SessionsClient Node.js SessionsClient SessionsClient PHP Not available Not available Python SessionsClient SessionsClient Ruby Not available Not available Close If no channel is defined in a request, or no matching channel is found in fulfillment, the default response message will be returned by Dialogflow CX.
- Fulfillment use cases Fulfillment is used everywhere that a response message is needed: Page entry fulfillment Routes Event handlers Initial prompts for forms Reprompt handlers for forms For each of these use cases, the console will open a fulfillment editing panel.
- Channel-specific response messages When defining fulfillment, you can create channel-specific response messages , so you can create targeted responses for text chat, voice, SMS, specific integrations that support channels, and so on.
- Response queue During an agent's turn, it is possible (and sometimes desirable) to call multiple fulfillments, each of which may generate a response message.

### "Package com.google.cloud.dialogflow.v2 (4.94.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- Source ID: `site-java-reference`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- Minimal Conversation The minimum amount of information required to generate a Summary without having a Conversation resource created. com. google. cloud. dialogflow. v2.
- We use QuerySource to distinguish queries directly entered by agents and suggested queries from Participants.SuggestKnowledgeAssist . com. google. cloud. dialogflow. v2.
- Sip Trunk SipTrunk is the resource that represents a SIP trunk to connect to Google Telephony platform SIP trunking service. com. google. cloud. dialogflow. v2.
- The generator resources will be used inside a conversation and will be triggered by TriggerEvent to query LLM for answers. com. google. cloud. dialogflow. v2.

### "General agent design best practices \_|\_ Dialogflow CX \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design)
- Source ID: `site-docs-root`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- Integrations and connecting your services There are multiple ways to integrate with Dialogflow CX agents.
- The following lists the conversation control granularity of agent resources in increasing granularity order: Agents (one agent handles all conversations) Flows (one flow handles one or more related conversation topics) Pages (one page handles one or more related conversation turns) Routes (one route handles a user intent or condition check) Intent parameters versus form parameters The main way in which your system gets structured data from the end-user is with parameters .
- If you do use this entity type, avoid annotating multiple parts of a single training phrase with this entity type, as this creates an ambiguity, and the agent behavior will be undefined.
- Dialogflow CX API If none of the ready-to-use integrations are suitable, or you would like to customize the interface for your system, you can use the Dialogflow CX API directly .

