---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.805Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Telephony Gateway"
feature_slug: "telephony-gateway"
latest_feature_date: "2018-07-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2"
  - "https://docs.cloud.google.com/dialogflow/es/docs/agents-mega"
keywords:
  - "telephone"
  - "connects"
  - "integrations"
  - "gateway"
  - "telephony"
  - "agents"
---

# Telephony Gateway

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Telephony Gateway connects Dialogflow agents to telephone integrations.

## Extended Definition

Telephony Gateway connects Dialogflow agents to telephone integrations.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- [https://docs.cloud.google.com/dialogflow/es/docs/agents-mega](https://docs.cloud.google.com/dialogflow/es/docs/agents-mega)

## Supporting Pages

### "Package com.google.cloud.dialogflow.v2 (4.94.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- Source ID: `site-java-reference`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- Telephony Connection Info The information about phone calls connected via phone gateway to the conversation. com. google. cloud. dialogflow. v2.
- Telephony Dtmf DTMF digit in Telephony Gateway. com. google. cloud. dialogflow. v2.
- We use QuerySource to distinguish queries directly entered by agents and suggested queries from Participants.SuggestKnowledgeAssist . com. google. cloud. dialogflow. v2.
- Sip Trunk SipTrunk is the resource that represents a SIP trunk to connect to Google Telephony platform SIP trunking service. com. google. cloud. dialogflow. v2.

### Agent settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- Source ID: `site-docs-root`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- If you are using telephony gateway, make sure the Dialogflow Service Agent service account service- PROJECT NUMBER @gcp-sa-dialogflow.iam.gserviceaccount.com is granted with "AutoML Predictor" in your custom voice project.
- If you are using telephony gateway, make sure the Dialogflow Service Agent service account service- PROJECT NUMBER @gcp-sa-dialogflow.iam.gserviceaccount.com is granted with "AutoML Predictor" in your custom voice project.
- DTMF settings link See DTMF for telephony integrations for more information.
- DTMF See DTMF for telephony integrations for more information.

### Mega agents \_|\_ Dialogflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/es/docs/agents-mega](https://docs.cloud.google.com/dialogflow/es/docs/agents-mega)
- Source ID: `site-iam-reference`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- Partner built-in telephony integrations ( AudioCodes , Avaya , SignalWire , Voximplant ) are not supported.
- For example, consider the following sub-agents: Sub-agent Intent Training Phrases Orders Books "I want to buy a book" "Add a book to my cart" Hats "I want to purchase a hat" "I want a hat" Account Balance "What is my balance?" "How much is left in my account?" Address "I want to change my address" "I have a new address" If an end-user says "I want to buy a hat please", a detect intent request sent to the mega agent will result in a match for the Hats intent in the Orders agent.
- For example, the REST JSON for this request would look like: { "queryInput": { "text": { "text": "reserve a meeting room for six people", "languageCode": "en-US" } }, "queryParams": { "subAgents": [ {"project": "projects/sub-agent-1-project-id"}, {"project": "projects/sub-agent-2-project-id"} ] } } Invoking events To invoke an event from a webhook service , you can specify the sub-agent for the intent you wish to trigger.
- If you plan on using any integrations for the mega agent, the automatically created service- project-number @gcp-sa-dialogflow.iam.gserviceaccount.com service account for the mega agent's project must have a role on that project that includes permission to make detect intent calls.

