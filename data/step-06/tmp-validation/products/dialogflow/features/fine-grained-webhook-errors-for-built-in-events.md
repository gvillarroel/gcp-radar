---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.748Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Fine-grained webhook errors for built-in events"
feature_slug: "fine-grained-webhook-errors-for-built-in-events"
latest_feature_date: "2022-05-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/tutorials/deploy/webhook"
  - "https://docs.cloud.google.com/dialogflow/es/docs/tutorials/deploy/webhook"
keywords:
  - "grained"
  - "errors"
  - "events"
  - "fine"
  - "webhook"
  - "built"
---

# Fine-grained webhook errors for built-in events

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX supports fine-grained webhook error handling for built-in events.

## Extended Definition

Dialogflow CX supports fine-grained webhook error handling for built-in events.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design)
- [https://docs.cloud.google.com/dialogflow/cx/docs/tutorials/deploy/webhook](https://docs.cloud.google.com/dialogflow/cx/docs/tutorials/deploy/webhook)
- [https://docs.cloud.google.com/dialogflow/es/docs/tutorials/deploy/webhook](https://docs.cloud.google.com/dialogflow/es/docs/tutorials/deploy/webhook)

## Supporting Pages

### "General agent design best practices \_|\_ Dialogflow CX \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design)
- Source ID: `site-docs-root`
- Final score: 136
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You achieve this by defining event handlers for the webhook-specific built-in events .
- For example: Parameter Value webhook-error-count 0 Create a webhook error page that handles webhook error events: The entry fulfillment should acknowledge the failure for the end-user, and it should increment an error counter session parameter using a fulfillment parameter preset .
- For example: Parameter Value webhook-error-count $sys.func.ADD($session.params.webhook-error-count, 1) Define a condition route that has a condition that the error count is less than the maximum allowed. (for example, $session.params.webhook-error-count <= 3 ).
- Here is a recommended approach to handling webhook errors: Do not supply a transition target from the state handler that triggers the webhook call , otherwise, the webhook error event handler will not be invoked.

### Create a webhook service \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/tutorials/deploy/webhook](https://docs.cloud.google.com/dialogflow/cx/docs/tutorials/deploy/webhook)
- Source ID: `site-docs-root`
- Final score: 107
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Note that // not all members need to be defined -- just those that you need to process . // As an alternative , you could use the types provided by the Dialogflow protocol buffers : // https : // pkg . go . dev / google . golang . org / genproto / googleapis / cloud / dialogflow / cx / v3 #WebhookResponse type webhookResponse struct { FulfillmentResponse fulfillmentResponse json : "fulfillmentResponse" SessionInfo sessionInfo json : "sessionInfo" } // detectCustomerAnomaly handles same - named tag . func detectCustomerAnomaly ( ctx context .
- Context , request webhookRequest ) ( webhookResponse , error ) { // Create session parameters that are populated in the response . // This example hard codes values , but a real system // might look up this value in a database . p := map [ string ] any { "monthly cost" : 70 , "daily cost" : 100 , "suggested plan" : "monthly" , } // Build and return the response . response := webhookResponse { SessionInfo : sessionInfo { Parameters : p , }, } return response , nil } // Define a type for handler functions . type handlerFn func ( ctx context .
- Note that // not all members need to be defined -- just those that you need to process . // As an alternative , you could use the types provided by the Dialogflow protocol buffers : // https : // pkg . go . dev / google . golang . org / genproto / googleapis / cloud / dialogflow / cx / v3 #WebhookRequest type webhookRequest struct { FulfillmentInfo fulfillmentInfo json : "fulfillmentInfo" SessionInfo sessionInfo json : "sessionInfo" } // webhookResponse is used to marshal a WebhookResponse JSON object .
- Context , request webhookRequest ) ( webhookResponse , error ) // Create a map from tag to handler function . var handlers map [ string ] handlerFn = map [ string ] handlerFn { "detectCustomerAnomaly" : detectCustomerAnomaly , "validatePhoneLine" : validatePhoneLine , "cruisePlanCoverage" : cruisePlanCoverage , "internationalCoverage" : internationalCoverage , "cheapestPlan" : cheapestPlan , } // handleError handles internal errors . func handleError ( w http .

### Create a webhook service \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/es/docs/tutorials/deploy/webhook](https://docs.cloud.google.com/dialogflow/es/docs/tutorials/deploy/webhook)
- Source ID: `site-iam-reference`
- Final score: 105
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Note that // not all members need to be defined -- just those that you need to process . // As an alternative , you could use the types provided by // the Dialogflow protocol buffers : // https : // godoc . org / google . golang . org / genproto / googleapis / cloud / dialogflow / v2 #WebhookRequest type webhookRequest struct { Session string json : "session" ResponseID string json : "responseId" QueryResult queryResult json : "queryResult" } // webhookResponse is used to marshal a WebhookResponse JSON object .
- Note that // not all members need to be defined -- just those that you need to process . // As an alternative , you could use the types provided by // the Dialogflow protocol buffers : // https : // godoc . org / google . golang . org / genproto / googleapis / cloud / dialogflow / v2 #WebhookResponse type webhookResponse struct { FulfillmentMessages [] message json : "fulfillmentMessages" } // accountBalanceCheck handles the similar named action func accountBalanceCheck ( ctx context .
- Context , request webhookRequest ) ( webhookResponse , error ) // Create a map from action to handler function . var handlers map [ string ] handlerFn = map [ string ] handlerFn { "account.balance.check" : accountBalanceCheck , } // handleError handles internal errors . func handleError ( w http .
- Sprintf ( "Your balance is $ %.2f " , float64 ( balance ) / 100.0 ) } } response := webhookResponse { FulfillmentMessages : [] message { { Text : text { Text : [] string { s }, }, }, }, } return response , nil } // Define a type for handler functions . type handlerFn func ( ctx context .

