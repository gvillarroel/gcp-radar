---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:10.318Z"
product_name: "Pub/Sub"
product_slug: "pub-sub"
feature_name: "Pub/Sub message ordering"
feature_slug: "pub-sub-message-ordering"
latest_feature_date: "2020-10-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/pubsub/docs/publish-message-overview"
  - "https://docs.cloud.google.com/pubsub/docs/publisher"
  - "https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/get_subscription"
  - "https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_subscriptions"
keywords:
  - "pub"
  - "sub"
  - "message"
  - "ordering"
  - "preserves"
  - "the"
  - "order"
  - "of"
---

# Pub/Sub message ordering

Product: Pub/Sub
Coverage: MEDIUM

## Step 02 Summary

Pub/Sub message ordering preserves the order of messages within an ordering key; Pub/Sub message ordering preserves the order of messages within an ordering key.

## Extended Definition

Pub/Sub message ordering preserves the order of messages within an ordering key; Pub/Sub message ordering preserves the order of messages within an ordering key.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/pubsub/docs/publish-message-overview](https://docs.cloud.google.com/pubsub/docs/publish-message-overview)
- [https://docs.cloud.google.com/pubsub/docs/publisher](https://docs.cloud.google.com/pubsub/docs/publisher)
- [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/get_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/get_subscription)
- [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_subscriptions](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_subscriptions)

## Supporting Pages

### Publish message overview \_|\_ Pub/Sub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/pubsub/docs/publish-message-overview](https://docs.cloud.google.com/pubsub/docs/publish-message-overview)
- Source ID: `site-docs-root`
- Final score: 304
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Pub/Sub service adds the following fields to the message: A message ID unique to the topic A timestamp for when the Pub/Sub service receives the message For example, here is a message format in JSON : { "data" : "This is the core message content." , "attributes" : { "category" : "notification" , "user id" : "12345" , "priority" : "medium" }, "orderingKey" : "12345" } When publishing messages using Pub/Sub client libraries, provide the message data as a byte array, such as a Node.js Buffer .
- Messages with the same ordering key are expected to be delivered to a subscriber in the order they were published.
- Pub/Sub offers at-least-once message delivery and best-effort ordering to existing subscribers.
- Pub/Sub identifies subscribers with subscriptions matching the message's topic, and delivers a copy of the message to each.

### Publish messages to topics \_|\_ Pub/Sub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/pubsub/docs/publisher](https://docs.cloud.google.com/pubsub/docs/publisher)
- Source ID: `site-docs-root`
- Final score: 292
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Click Publish . gcloud To publish a message with an ordering key, use the gcloud pubsub topics publish command and the --ordering-key flag: gcloud pubsub topics publish TOPIC ID \ --message= MESSAGE DATA \ --ordering-key= ORDERING KEY Replace the following: TOPIC ID : the ID of the topic MESSAGE DATA : a string with the message data ORDERING KEY : a string with an ordering key REST To publish a message with an ordering key, send a POST request like the following: POST https://pubsub.googleapis.com/v1/projects/ PROJECT ID /topics/ TOPIC ID :publish Content-Type: application/json Authorization: Bearer $(gcloud auth application-default print-access-token) Replace the following: PROJECT ID : the project ID of the project with the topic TOPIC ID : the ID of the topic Specify the following fields in the request body: { "messages": [ { "attributes": { " KEY ": " VALUE ", ... }, "data": " MESSAGE DATA ", "ordering key": " ORDERING KEY ", } ] } Replace the following: KEY : the key of a message attribute VALUE : the value for the key of the message attribute MESSAGE DATA : a base64-encoded string with the message data ORDERING KEY : a string with an ordering key The message must contain either a non-empty data field or at least one attribute.
- For list of locational endpoints for Pub/Sub, see: // https://cloud.google.com/pubsub/docs/reference/service apis overview#list of locational endpoints const publishOptions = { messageOrdering : true , }; const topic = pubSubClient . topic ( topicNameOrId , publishOptions ); // Publishes the message const messageId = await topic . publishMessage ( message ); console . log ( Message ${ messageId } published. ); return messageId ; } Python Before trying this sample, follow the Python setup instructions in Quickstart: Using Client Libraries .
- For more information, see the Pub/Sub Ruby API reference documentation . topic id = "your-topic-id" pubsub = Google :: Cloud :: PubSub . new Start sending messages in one request once the size of all queued messages reaches 1 MB or the number of queued messages reaches 20 publisher = pubsub . publisher topic id , async : { max bytes : 1 000 000 , max messages : 20 } publisher . enable message ordering!
- Specify at least one of the following in the message: The message data An ordering key Attributes with additional metadata The Pub/Sub service adds the following fields to the message: A message ID unique to the topic A timestamp for when the Pub/Sub service receives the message To learn more about messages, see Message format .

### "MCP Tools Reference: pubsub.googleapis.com \_|\_ Pub/Sub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/get_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/get_subscription)
- Source ID: `site-api-reference`
- Final score: 290
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Keys: - (optional) 'message id' : {string} - (optional) 'publish time': {string} YYYY-MM-DDTHH:MM:SSZ format - (optional) 'ordering key': {string} / function <function name>(message, metadata) { } AIInference JSON representation { "endpoint" : string , "serviceAccountEmail" : string , // Union field inference mode can be only one of the following: "unstructuredInference" : { object ( UnstructuredInference ) } // End of list of possible types for union field inference mode . } Fields endpoint string Required.
- The subscription name, message id, and publish time fields are put in their own fields while all other message properties other than data (for example, an ordering key, if present) are added as entries in the attributes map. useTopicSchema boolean Optional.
- If true, messages published with the same ordering key in PubsubMessage will be delivered to the subscribers in the order in which they are received by the Pub/Sub system.
- When true, write the subscription name, message id, publish time, attributes, and ordering key to additional columns in the table.

### "MCP Tools Reference: pubsub.googleapis.com \_|\_ Pub/Sub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_subscriptions](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_subscriptions)
- Source ID: `site-api-reference`
- Final score: 290
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Keys: - (optional) 'message id' : {string} - (optional) 'publish time': {string} YYYY-MM-DDTHH:MM:SSZ format - (optional) 'ordering key': {string} / function <function name>(message, metadata) { } AIInference JSON representation { "endpoint" : string , "serviceAccountEmail" : string , // Union field inference mode can be only one of the following: "unstructuredInference" : { object ( UnstructuredInference ) } // End of list of possible types for union field inference mode . } Fields endpoint string Required.
- The subscription name, message id, and publish time fields are put in their own fields while all other message properties other than data (for example, an ordering key, if present) are added as entries in the attributes map. useTopicSchema boolean Optional.
- If true, messages published with the same ordering key in PubsubMessage will be delivered to the subscribers in the order in which they are received by the Pub/Sub system.
- When true, write the subscription name, message id, publish time, attributes, and ordering key to additional columns in the table.

