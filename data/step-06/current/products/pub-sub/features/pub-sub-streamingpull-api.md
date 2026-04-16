---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:10.327Z"
product_name: "Pub/Sub"
product_slug: "pub-sub"
feature_name: "Pub/Sub StreamingPull API"
feature_slug: "pub-sub-streamingpull-api"
latest_feature_date: "2017-08-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription"
  - "https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription"
  - "https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/get_subscription"
  - "https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_subscriptions"
keywords:
  - "pub"
  - "sub"
  - "streamingpull"
  - "api"
  - "entered"
  - "beta"
  - "to"
  - "improve"
---

# Pub/Sub StreamingPull API

Product: Pub/Sub
Coverage: MEDIUM

## Step 02 Summary

StreamingPull entered beta to improve end-to-end message latency and CPU utilization with updated client libraries.

## Extended Definition

StreamingPull entered beta to improve end-to-end message latency and CPU utilization with updated client libraries.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription)
- [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription)
- [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/get_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/get_subscription)
- [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_subscriptions](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_subscriptions)

## Supporting Pages

### "MCP Tools Reference: pubsub.googleapis.com \_|\_ Pub/Sub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription)
- Source ID: `site-api-reference`
- Final score: 292
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Curl Request curl --location 'https://pubsub.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "create subscription", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema A subscription resource.
- The only supported values for the x-goog-version attribute are: v1beta1 : uses the push format defined in the v1beta1 Pub/Sub API. v1 or v1beta2 : uses the push format defined in the v1 Pub/Sub API.
- The only supported values for the x-goog-version attribute are: v1beta1 : uses the push format defined in the v1beta1 Pub/Sub API. v1 or v1beta2 : uses the push format defined in the v1 Pub/Sub API.
- Home Documentation Data analytics Pub/Sub Reference Send feedback MCP Tools Reference: pubsub.googleapis.com Stay organized with collections Save and categorize content based on your preferences.

### "MCP Tools Reference: pubsub.googleapis.com \_|\_ Pub/Sub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription)
- Source ID: `site-api-reference`
- Final score: 292
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Curl Request curl --location 'https://pubsub.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "update subscription", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema Request for the UpdateSubscription method.
- The only supported values for the x-goog-version attribute are: v1beta1 : uses the push format defined in the v1beta1 Pub/Sub API. v1 or v1beta2 : uses the push format defined in the v1 Pub/Sub API.
- The only supported values for the x-goog-version attribute are: v1beta1 : uses the push format defined in the v1beta1 Pub/Sub API. v1 or v1beta2 : uses the push format defined in the v1 Pub/Sub API.
- Home Documentation Data analytics Pub/Sub Reference Send feedback MCP Tools Reference: pubsub.googleapis.com Stay organized with collections Save and categorize content based on your preferences.

### "MCP Tools Reference: pubsub.googleapis.com \_|\_ Pub/Sub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/get_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/get_subscription)
- Source ID: `site-api-reference`
- Final score: 280
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Curl Request curl --location 'https://pubsub.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "get subscription", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema Request for the GetSubscription method.
- The only supported values for the x-goog-version attribute are: v1beta1 : uses the push format defined in the v1beta1 Pub/Sub API. v1 or v1beta2 : uses the push format defined in the v1 Pub/Sub API.
- Home Documentation Data analytics Pub/Sub Reference Send feedback MCP Tools Reference: pubsub.googleapis.com Stay organized with collections Save and categorize content based on your preferences.
- If not present during the CreateSubscription call, it will default to the version of the Pub/Sub API used to make such call.

### "MCP Tools Reference: pubsub.googleapis.com \_|\_ Pub/Sub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_subscriptions](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_subscriptions)
- Source ID: `site-api-reference`
- Final score: 272
- Re-rank relevance: N/A

Evidence snippets:
- Curl Request curl --location 'https://pubsub.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "list subscriptions", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema Request for the ListSubscriptions method.
- The only supported values for the x-goog-version attribute are: v1beta1 : uses the push format defined in the v1beta1 Pub/Sub API. v1 or v1beta2 : uses the push format defined in the v1 Pub/Sub API.
- Home Documentation Data analytics Pub/Sub Reference Send feedback MCP Tools Reference: pubsub.googleapis.com Stay organized with collections Save and categorize content based on your preferences.
- If not present during the CreateSubscription call, it will default to the version of the Pub/Sub API used to make such call.

