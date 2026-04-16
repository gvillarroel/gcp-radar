---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.671Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Soul Machines integration"
feature_slug: "soul-machines-integration"
latest_feature_date: "2024-05-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design"
  - "https://docs.cloud.google.com/dialogflow/es/docs/tutorials/sequences/create-fulfillment-using-webhook"
  - "https://docs.cloud.google.com/dialogflow/docs/basics"
keywords:
  - "machines"
  - "soul"
  - "integrate"
  - "create"
  - "integration"
---

# Soul Machines integration

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX can integrate with Soul Machines to create 3-D avatars.

## Extended Definition

Dialogflow CX can integrate with Soul Machines to create 3-D avatars.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design)
- [https://docs.cloud.google.com/dialogflow/es/docs/tutorials/sequences/create-fulfillment-using-webhook](https://docs.cloud.google.com/dialogflow/es/docs/tutorials/sequences/create-fulfillment-using-webhook)
- [https://docs.cloud.google.com/dialogflow/docs/basics](https://docs.cloud.google.com/dialogflow/docs/basics)

## Supporting Pages

### "Create fulfillment using webhook \_|\_ Dialogflow ES \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dialogflow/es/docs/tutorials/sequences/create-fulfillment-using-webhook](https://docs.cloud.google.com/dialogflow/es/docs/tutorials/sequences/create-fulfillment-using-webhook)
- Source ID: `site-iam-reference`
- Final score: 69
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

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
- For example, consider end-user input like: "How can I make an international call with Plan A?" "Using international data roaming with Plan B." Do not create entity types for both the actions and the plans, like the following: Actions entity type Plans entity type "How can I make an international call" "Plan A" "Using international data roaming" "Plan B" Instead, you should use training phrases and intent matching to capture the actions and entities to capture the plans.
- There are many good naming schemes, but here is one example: phone-service.order.cancel phone-service.order.create phone-service.order.change tv-service.order.cancel tv-service.order.create tv-service.order.change account.balance.get account.balance.pay account.address.get account.address.update Transitions Transitions defined in state handlers provide control over the conversation by changing the active page.
- For example: Parameter Value webhook-error-count 0 Create a webhook error page that handles webhook error events: The entry fulfillment should acknowledge the failure for the end-user, and it should increment an error counter session parameter using a fulfillment parameter preset .

### Dialogflow ES basics \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/docs/basics](https://docs.cloud.google.com/dialogflow/docs/basics)
- Source ID: `site-docs-root-2`
- Final score: 63
- Re-rank relevance: N/A

Evidence snippets:
- User interactions with integrations Dialogflow integrates with many popular conversation platforms like Google Assistant, Slack, and Facebook Messenger.
- When you create a follow-up intent, an output context is automatically added to the parent intent and an input context of the same name is added to the follow-up intent.
- User interactions with the API If you are not using one of the integration options, you must write code that directly interacts with the end-user.
- Each integration handles end-user interactions in a platform-specific way, so see the documentation for your integration platform for details.

