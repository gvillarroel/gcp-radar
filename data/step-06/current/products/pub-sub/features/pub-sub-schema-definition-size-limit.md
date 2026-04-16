---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:10.306Z"
product_name: "Pub/Sub"
product_slug: "pub-sub"
feature_name: "Pub/Sub schema definition size limit"
feature_slug: "pub-sub-schema-definition-size-limit"
latest_feature_date: "2024-08-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_topics"
  - "https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_subscriptions"
  - "https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription"
  - "https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription"
keywords:
  - "pub"
  - "sub"
  - "schema"
  - "definition"
  - "size"
  - "limit"
  - "increased"
  - "the"
---

# Pub/Sub schema definition size limit

Product: Pub/Sub
Coverage: MEDIUM

## Step 02 Summary

Pub/Sub increased the schema definition size limit to 300 KB.

## Extended Definition

Pub/Sub increased the schema definition size limit to 300 KB.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_topics](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_topics)
- [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_subscriptions](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_subscriptions)
- [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription)
- [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription)

## Supporting Pages

### "MCP Tools Reference: pubsub.googleapis.com \_|\_ Pub/Sub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_topics](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_topics)
- Source ID: `site-api-reference`
- Final score: 245
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Curl Request curl --location 'https://pubsub.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "list topics", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema Request for the ListTopics method.
- CloudStorage JSON representation { "state" : enum ( State ) , "bucket" : string , "minimumObjectCreateTime" : string , "matchGlob" : string , // Union field input format can be only one of the following: "textFormat" : { object ( TextFormat ) } , "avroFormat" : { object ( AvroFormat ) } , "pubsubAvroFormat" : { object ( PubSubAvroFormat ) } // End of list of possible types for union field input format . } Fields state enum ( State ) Output only.
- To transform a message return a map with the following keys: - (required) 'data' : {string} - (optional) 'attributes' : {Object<string, string>} Returning empty attributes will remove all attributes from the message. @param {(Object<string, (string Object<string, string>)>} Pub/Sub message.
- JavaScript code that contains a function function name with the below signature: / Transforms a Pub/Sub message. @return {(Object<string, (string Object<string, string>)> null)} - To filter a message, return null.

### "MCP Tools Reference: pubsub.googleapis.com \_|\_ Pub/Sub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_subscriptions](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_subscriptions)
- Source ID: `site-api-reference`
- Final score: 244
- Re-rank relevance: N/A

Evidence snippets:
- Curl Request curl --location 'https://pubsub.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "list subscriptions", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema Request for the ListSubscriptions method.
- The subscription name, message id, and publish time fields are put in their own fields while all other message properties other than data (for example, an ordering key, if present) are added as entries in the attributes map. useTopicSchema boolean Optional.
- PushConfig JSON representation { "pushEndpoint" : string , "attributes" : { string : string , ... } , // Union field authentication method can be only one of the following: "oidcToken" : { object ( OidcToken ) } // End of list of possible types for union field authentication method . // Union field wrapper can be only one of the following: "pubsubWrapper" : { object ( PubsubWrapper ) } , "noWrapper" : { object ( NoWrapper ) } // End of list of possible types for union field wrapper . } Fields pushEndpoint string Optional.
- To transform a message return a map with the following keys: - (required) 'data' : {string} - (optional) 'attributes' : {Object<string, string>} Returning empty attributes will remove all attributes from the message. @param {(Object<string, (string Object<string, string>)>} Pub/Sub message.

### "MCP Tools Reference: pubsub.googleapis.com \_|\_ Pub/Sub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription)
- Source ID: `site-api-reference`
- Final score: 243
- Re-rank relevance: N/A

Evidence snippets:
- Curl Request curl --location 'https://pubsub.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "create subscription", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema A subscription resource.
- The subscription name, message id, and publish time fields are put in their own fields while all other message properties other than data (for example, an ordering key, if present) are added as entries in the attributes map. useTopicSchema boolean Optional.
- The subscription name, message id, and publish time fields are put in their own fields while all other message properties other than data (for example, an ordering key, if present) are added as entries in the attributes map. useTopicSchema boolean Optional.
- PushConfig JSON representation { "pushEndpoint" : string , "attributes" : { string : string , ... } , // Union field authentication method can be only one of the following: "oidcToken" : { object ( OidcToken ) } // End of list of possible types for union field authentication method . // Union field wrapper can be only one of the following: "pubsubWrapper" : { object ( PubsubWrapper ) } , "noWrapper" : { object ( NoWrapper ) } // End of list of possible types for union field wrapper . } Fields pushEndpoint string Optional.

### "MCP Tools Reference: pubsub.googleapis.com \_|\_ Pub/Sub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription)
- Source ID: `site-api-reference`
- Final score: 243
- Re-rank relevance: N/A

Evidence snippets:
- Curl Request curl --location 'https://pubsub.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "update subscription", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema Request for the UpdateSubscription method.
- The subscription name, message id, and publish time fields are put in their own fields while all other message properties other than data (for example, an ordering key, if present) are added as entries in the attributes map. useTopicSchema boolean Optional.
- The subscription name, message id, and publish time fields are put in their own fields while all other message properties other than data (for example, an ordering key, if present) are added as entries in the attributes map. useTopicSchema boolean Optional.
- PushConfig JSON representation { "pushEndpoint" : string , "attributes" : { string : string , ... } , // Union field authentication method can be only one of the following: "oidcToken" : { object ( OidcToken ) } // End of list of possible types for union field authentication method . // Union field wrapper can be only one of the following: "pubsubWrapper" : { object ( PubsubWrapper ) } , "noWrapper" : { object ( NoWrapper ) } // End of list of possible types for union field wrapper . } Fields pushEndpoint string Optional.

