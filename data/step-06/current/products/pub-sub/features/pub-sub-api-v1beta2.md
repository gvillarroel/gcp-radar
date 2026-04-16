---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:10.329Z"
product_name: "Pub/Sub"
product_slug: "pub-sub"
feature_name: "Pub/Sub API v1beta2"
feature_slug: "pub-sub-api-v1beta2"
latest_feature_date: "2015-02-01"
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
  - "api"
  - "v1beta2"
  - "was"
  - "released"
  - "as"
  - "beta"
---

# Pub/Sub API v1beta2

Product: Pub/Sub
Coverage: MEDIUM

## Step 02 Summary

Pub/Sub API v1beta2 was released as a beta version.

## Extended Definition

Pub/Sub API v1beta2 was released as a beta version.

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
- Final score: 282
- Re-rank relevance: N/A

Evidence snippets:
- The only supported values for the x-goog-version attribute are: v1beta1 : uses the push format defined in the v1beta1 Pub/Sub API. v1 or v1beta2 : uses the push format defined in the v1 Pub/Sub API.
- The only supported values for the x-goog-version attribute are: v1beta1 : uses the push format defined in the v1beta1 Pub/Sub API. v1 or v1beta2 : uses the push format defined in the v1 Pub/Sub API.
- Home Documentation Data analytics Pub/Sub Reference Send feedback MCP Tools Reference: pubsub.googleapis.com Stay organized with collections Save and categorize content based on your preferences.
- Note that subscribers may still receive multiple copies of a message when enable exactly once delivery is true if the message was published multiple times by a publisher client.

### "MCP Tools Reference: pubsub.googleapis.com \_|\_ Pub/Sub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription)
- Source ID: `site-api-reference`
- Final score: 282
- Re-rank relevance: N/A

Evidence snippets:
- The only supported values for the x-goog-version attribute are: v1beta1 : uses the push format defined in the v1beta1 Pub/Sub API. v1 or v1beta2 : uses the push format defined in the v1 Pub/Sub API.
- The only supported values for the x-goog-version attribute are: v1beta1 : uses the push format defined in the v1beta1 Pub/Sub API. v1 or v1beta2 : uses the push format defined in the v1 Pub/Sub API.
- Home Documentation Data analytics Pub/Sub Reference Send feedback MCP Tools Reference: pubsub.googleapis.com Stay organized with collections Save and categorize content based on your preferences.
- Note that subscribers may still receive multiple copies of a message when enable exactly once delivery is true if the message was published multiple times by a publisher client.

### "MCP Tools Reference: pubsub.googleapis.com \_|\_ Pub/Sub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/get_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/get_subscription)
- Source ID: `site-api-reference`
- Final score: 262
- Re-rank relevance: N/A

Evidence snippets:
- The only supported values for the x-goog-version attribute are: v1beta1 : uses the push format defined in the v1beta1 Pub/Sub API. v1 or v1beta2 : uses the push format defined in the v1 Pub/Sub API.
- Home Documentation Data analytics Pub/Sub Reference Send feedback MCP Tools Reference: pubsub.googleapis.com Stay organized with collections Save and categorize content based on your preferences.
- Note that subscribers may still receive multiple copies of a message when enable exactly once delivery is true if the message was published multiple times by a publisher client.
- Curl Request curl --location 'https://pubsub.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "get subscription", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema Request for the GetSubscription method.

### "MCP Tools Reference: pubsub.googleapis.com \_|\_ Pub/Sub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_subscriptions](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_subscriptions)
- Source ID: `site-api-reference`
- Final score: 262
- Re-rank relevance: N/A

Evidence snippets:
- The only supported values for the x-goog-version attribute are: v1beta1 : uses the push format defined in the v1beta1 Pub/Sub API. v1 or v1beta2 : uses the push format defined in the v1 Pub/Sub API.
- Home Documentation Data analytics Pub/Sub Reference Send feedback MCP Tools Reference: pubsub.googleapis.com Stay organized with collections Save and categorize content based on your preferences.
- Note that subscribers may still receive multiple copies of a message when enable exactly once delivery is true if the message was published multiple times by a publisher client.
- Curl Request curl --location 'https://pubsub.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "list subscriptions", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema Request for the ListSubscriptions method.

