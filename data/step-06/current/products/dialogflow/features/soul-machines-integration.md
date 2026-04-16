---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.353Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Soul Machines integration"
feature_slug: "soul-machines-integration"
latest_feature_date: "2024-05-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/es/docs/tutorials/sequences/create-fulfillment-using-webhook"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design"
  - "https://docs.cloud.google.com/dialogflow/docs/basics"
keywords:
  - "soul"
  - "machines"
  - "integration"
  - "dialogflow"
  - "cx"
  - "can"
  - "integrate"
  - "create"
---

# Soul Machines integration

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX can integrate with Soul Machines to create 3-D avatars.

## Extended Definition

Dialogflow CX can integrate with Soul Machines to create 3-D avatars.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/es/docs/tutorials/sequences/create-fulfillment-using-webhook](https://docs.cloud.google.com/dialogflow/es/docs/tutorials/sequences/create-fulfillment-using-webhook)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design)
- [https://docs.cloud.google.com/dialogflow/docs/basics](https://docs.cloud.google.com/dialogflow/docs/basics)

## Supporting Pages

### "Create fulfillment using webhook \_|\_ Dialogflow ES \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dialogflow/es/docs/tutorials/sequences/create-fulfillment-using-webhook](https://docs.cloud.google.com/dialogflow/es/docs/tutorials/sequences/create-fulfillment-using-webhook)
- Source ID: `site-iam-reference`
- Final score: 81
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- See https://cloud.google.com/dialogflow/es/docs/reference/common-types#webhookrequest @param response: Express JS response object @param ssml: SSML string. @example: sendSSML(request, response, 'hello') Will call response.json() with SSML payload '<speak>hello</speak>' / function sendSSML ( request , response , ssml ) { ssml = <speak> ${ ssml } < /speak> ; if ( request . originalDetectIntentRequest . source == 'GOOGLE TELEPHONY' ) { // Dialogflow Phone Gateway Response // see https://cloud.google.com/dialogflow/es/docs/reference/rpc/google.cloud.dialogflow.v2beta1#google.cloud.dialogflow.v2beta1.Intent.Message.TelephonySynthesizeSpeech response . json ({ fulfillmentMessages : [{ platform : 'TELEPHONY' , telephonySynthesizeSpeech : { ssml : ssml } }] }); } else { // Some CCAI telephony partners accept SSML in a plain text response. // Check your specific integration and customize the payload here. response . json ({ fulfillmentText : ssml }); } } / Extract an output context from the incoming WebhookRequest. @param request: Dialogflow WebhookRequest JSON with camelCase keys.
- Create a webhook with the inline editor Dialogflow has an inline editor in the console that allows you to directly write NodeJS code, which then can be deployed to run as a webhook on Cloud Functions .
- If you haven't already, now would be a good time to set up one of the one-click telephony integrations from our partners, or set up the Dialogflow Phone Gateway to test your agent over the phone.
- Home Documentation AI and ML Dialogflow Dialogflow ES Send feedback Create fulfillment using webhook Stay organized with collections Save and categorize content based on your preferences.

### "General agent design best practices \_|\_ Dialogflow CX \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design)
- Source ID: `site-docs-root`
- Final score: 69
- Re-rank relevance: N/A

Evidence snippets:
- Integrations and connecting your services There are multiple ways to integrate with Dialogflow CX agents.
- Dialogflow CX API If none of the ready-to-use integrations are suitable, or you would like to customize the interface for your system, you can use the Dialogflow CX API directly .
- If you use an integration, you do not need to directly call the Dialogflow CX API, as integrations handle this for you.
- Integrations Dialogflow CX integrations provide a ready-to-use user interface for your agent.

### Dialogflow ES basics \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/docs/basics](https://docs.cloud.google.com/dialogflow/docs/basics)
- Source ID: `site-docs-root-2`
- Final score: 63
- Re-rank relevance: N/A

Evidence snippets:
- User interactions with integrations Dialogflow integrates with many popular conversation platforms like Google Assistant, Slack, and Facebook Messenger.
- The Dialogflow Console is used to manage Dialogflow agents, while the GCP Console is used to manage GCP-specific Dialogflow settings (for example, billing) and other GCP resources.
- Home Documentation AI and ML Dialogflow Dialogflow ES Send feedback Dialogflow ES basics Stay organized with collections Save and categorize content based on your preferences.
- When you create a follow-up intent, an output context is automatically added to the parent intent and an input context of the same name is added to the follow-up intent.

