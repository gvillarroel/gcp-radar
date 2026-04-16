---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:10.302Z"
product_name: "Pub/Sub"
product_slug: "pub-sub"
feature_name: "Pub/Sub remote MCP server"
feature_slug: "pub-sub-remote-mcp-server"
latest_feature_date: "2026-03-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/pubsub/docs/reference/mcp"
  - "https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/publish"
  - "https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription"
  - "https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription"
keywords:
  - "pub"
  - "sub"
  - "remote"
  - "mcp"
  - "server"
  - "the"
  - "lets"
  - "you"
---

# Pub/Sub remote MCP server

Product: Pub/Sub
Coverage: MEDIUM

## Step 02 Summary

The Pub/Sub remote MCP server lets you manage Pub/Sub topics, subscriptions, and snapshots, and publish messages to topics.

## Extended Definition

The Pub/Sub remote MCP server lets you manage Pub/Sub topics, subscriptions, and snapshots, and publish messages to topics.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/pubsub/docs/reference/mcp](https://docs.cloud.google.com/pubsub/docs/reference/mcp)
- [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/publish](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/publish)
- [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription)
- [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription)

## Supporting Pages

### MCP Reference: pubsub.googleapis.com \_|\_ Pub/Sub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/pubsub/docs/reference/mcp](https://docs.cloud.google.com/pubsub/docs/reference/mcp)
- Source ID: `site-api-reference`
- Final score: 287
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This is an MCP server that provides Cloud Pub/Sub tools Server Endpoints An MCP service endpoint is the network address and communication interface (usually a URL) of the MCP server that an AI application (the Host for the MCP client) uses to establish a secure, standardized connection.
- The pubsub.googleapis.com MCP server has the following MCP endpoint: https://pubsub.googleapis.com/mcp MCP Tools An MCP tool is a function or executable capability that an MCP server exposes to a LLM or AI application to perform an action in the real world.
- The pubsub.googleapis.com MCP server has the following tools: MCP Tools create topic Create a new Cloud Pub/Sub topic.
- Curl Request curl --location 'https://pubsub.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/list", "jsonrpc": "2.0", "id": 1 }' Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "MCP Tools Reference: pubsub.googleapis.com \_|\_ Pub/Sub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/publish](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/publish)
- Source ID: `site-api-reference`
- Final score: 272
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Curl Request curl --location 'https://pubsub.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "publish", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema Request for the Publish method.
- Home Documentation Data analytics Pub/Sub Reference Send feedback MCP Tools Reference: pubsub.googleapis.com Stay organized with collections Save and categorize content based on your preferences.
- If a Subscription has enable message ordering set to true , messages published with the same non-empty ordering key value will be delivered to subscribers in the order in which they are received by the Pub/Sub system.
- It must not be populated by the publisher in a Publish call. publishTime string ( Timestamp format) The time at which the message was published, populated by the server when it receives the Publish call.

### "MCP Tools Reference: pubsub.googleapis.com \_|\_ Pub/Sub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription)
- Source ID: `site-api-reference`
- Final score: 268
- Re-rank relevance: N/A

Evidence snippets:
- Curl Request curl --location 'https://pubsub.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "create subscription", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema A subscription resource.
- Home Documentation Data analytics Pub/Sub Reference Send feedback MCP Tools Reference: pubsub.googleapis.com Stay organized with collections Save and categorize content based on your preferences.
- PushConfig JSON representation { "pushEndpoint" : string , "attributes" : { string : string , ... } , // Union field authentication method can be only one of the following: "oidcToken" : { object ( OidcToken ) } // End of list of possible types for union field authentication method . // Union field wrapper can be only one of the following: "pubsubWrapper" : { object ( PubsubWrapper ) } , "noWrapper" : { object ( NoWrapper ) } // End of list of possible types for union field wrapper . } Fields pushEndpoint string Optional.
- PushConfig JSON representation { "pushEndpoint" : string , "attributes" : { string : string , ... } , // Union field authentication method can be only one of the following: "oidcToken" : { object ( OidcToken ) } // End of list of possible types for union field authentication method . // Union field wrapper can be only one of the following: "pubsubWrapper" : { object ( PubsubWrapper ) } , "noWrapper" : { object ( NoWrapper ) } // End of list of possible types for union field wrapper . } Fields pushEndpoint string Optional.

### "MCP Tools Reference: pubsub.googleapis.com \_|\_ Pub/Sub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription)
- Source ID: `site-api-reference`
- Final score: 268
- Re-rank relevance: N/A

Evidence snippets:
- Curl Request curl --location 'https://pubsub.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "update subscription", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema Request for the UpdateSubscription method.
- Home Documentation Data analytics Pub/Sub Reference Send feedback MCP Tools Reference: pubsub.googleapis.com Stay organized with collections Save and categorize content based on your preferences.
- PushConfig JSON representation { "pushEndpoint" : string , "attributes" : { string : string , ... } , // Union field authentication method can be only one of the following: "oidcToken" : { object ( OidcToken ) } // End of list of possible types for union field authentication method . // Union field wrapper can be only one of the following: "pubsubWrapper" : { object ( PubsubWrapper ) } , "noWrapper" : { object ( NoWrapper ) } // End of list of possible types for union field wrapper . } Fields pushEndpoint string Optional.
- PushConfig JSON representation { "pushEndpoint" : string , "attributes" : { string : string , ... } , // Union field authentication method can be only one of the following: "oidcToken" : { object ( OidcToken ) } // End of list of possible types for union field authentication method . // Union field wrapper can be only one of the following: "pubsubWrapper" : { object ( PubsubWrapper ) } , "noWrapper" : { object ( NoWrapper ) } // End of list of possible types for union field wrapper . } Fields pushEndpoint string Optional.

