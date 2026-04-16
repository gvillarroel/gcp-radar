---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.786Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Avaya telephony integration"
feature_slug: "avaya-telephony-integration"
latest_feature_date: "2020-04-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/es/docs/agents-mega"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/fulfillment"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings"
keywords:
  - "avaya"
  - "partner"
  - "click"
  - "telephony"
  - "integration"
  - "includes"
---

# Avaya telephony integration

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow includes a one-click integration with the Avaya telephony partner.

## Extended Definition

Dialogflow includes a one-click integration with the Avaya telephony partner.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dialogflow/es/docs/agents-mega](https://docs.cloud.google.com/dialogflow/es/docs/agents-mega)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/fulfillment](https://docs.cloud.google.com/dialogflow/cx/docs/concept/fulfillment)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)

## Supporting Pages

### Fulfillments \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/fulfillment](https://docs.cloud.google.com/dialogflow/cx/docs/concept/fulfillment)
- Source ID: `site-docs-root`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- For partner telephony integrations , the URL for the audio file must be accessible by the partner.
- Partner telephony integrations may or may not support partial response at this time.
- For some telephony integrations, you can specify a US phone number for call transfer.
- Channel-specific response messages When defining fulfillment, you can create channel-specific response messages , so you can create targeted responses for text chat, voice, SMS, specific integrations that support channels, and so on.

### Mega agents \_|\_ Dialogflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/es/docs/agents-mega](https://docs.cloud.google.com/dialogflow/es/docs/agents-mega)
- Source ID: `site-iam-reference`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- Partner built-in telephony integrations ( AudioCodes , Avaya , SignalWire , Voximplant ) are not supported.
- If you plan on using any integrations for the mega agent, the automatically created service- project-number @gcp-sa-dialogflow.iam.gserviceaccount.com service account for the mega agent's project must have a role on that project that includes permission to make detect intent calls.
- Click Create Agent in the left sidebar menu. (If you already have other agents, click the agent name, scroll to the bottom and click Create new agent .) Enter your agent's name, default language, default time zone and Google Cloud project.
- You can use the Dialogflow Messenger integration as an easy way to do this, or you could setup your desired integration for the mega agent prior to configuring sub-agents.

### Agent settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- Source ID: `site-docs-root`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- Override request-level synthesized speech configuration link When enabled, the synthesized speech configuration specified in the agent settings overrides the one specified in the API, partner integration, or the conversation profile.
- DTMF settings link See DTMF for telephony integrations for more information.
- DTMF See DTMF for telephony integrations for more information.
- If you are using telephony gateway, make sure the Dialogflow Service Agent service account service- PROJECT NUMBER @gcp-sa-dialogflow.iam.gserviceaccount.com is granted with "AutoML Predictor" in your custom voice project.

