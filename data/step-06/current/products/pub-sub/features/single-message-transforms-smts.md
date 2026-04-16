---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:10.303Z"
product_name: "Pub/Sub"
product_slug: "pub-sub"
feature_name: "Single Message Transforms (SMTs)"
feature_slug: "single-message-transforms-smts"
latest_feature_date: "2025-06-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/pubsub/docs/create-topic"
  - "https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription"
  - "https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription"
  - "https://docs.cloud.google.com/pubsub/docs/topic-properties"
keywords:
  - "single"
  - "message"
  - "transforms"
  - "smts"
  - "let"
  - "you"
  - "make"
  - "lightweight"
---

# Single Message Transforms (SMTs)

Product: Pub/Sub
Coverage: MEDIUM

## Step 02 Summary

Single Message Transforms let you make lightweight modifications to message data and attributes within Pub/Sub topics or subscriptions.

## Extended Definition

Single Message Transforms let you make lightweight modifications to message data and attributes within Pub/Sub topics or subscriptions.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/pubsub/docs/create-topic](https://docs.cloud.google.com/pubsub/docs/create-topic)
- [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription)
- [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription)
- [https://docs.cloud.google.com/pubsub/docs/topic-properties](https://docs.cloud.google.com/pubsub/docs/topic-properties)

## Supporting Pages

### Create a topic \_|\_ Pub/Sub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/pubsub/docs/create-topic](https://docs.cloud.google.com/pubsub/docs/create-topic)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Transforms Topic SMTs allow for lightweight modifications to message data and attributes directly within Pub/Sub.
- Under Transforms , add one or more Single Message Transforms (SMTs) to manipulate and filter message data.
- Message storage fees are charged for storing all messages published to the topic Default = Not enabled Minimum value = 10 minutes Maximum value = 31 days Export message data to BigQuery Enabling this property lets you create a BigQuery subscription that writes messages to an existing BigQuery table as they are received.
- Backup message data to Cloud Storage Enabling this property lets you create a Cloud Storage subscription that writes messages to an existing Cloud Storage table as they are received.

### "MCP Tools Reference: pubsub.googleapis.com \_|\_ Pub/Sub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription)
- Source ID: `site-api-reference`
- Final score: 151
- Re-rank relevance: N/A

Evidence snippets:
- Subscription JSON representation { "name" : string , "topic" : string , "pushConfig" : { object ( PushConfig ) } , "bigqueryConfig" : { object ( BigQueryConfig ) } , "cloudStorageConfig" : { object ( CloudStorageConfig ) } , "ackDeadlineSeconds" : integer , "retainAckedMessages" : boolean , "messageRetentionDuration" : string , "labels" : { string : string , ... } , "enableMessageOrdering" : boolean , "expirationPolicy" : { object ( ExpirationPolicy ) } , "filter" : string , "deadLetterPolicy" : { object ( DeadLetterPolicy ) } , "retryPolicy" : { object ( RetryPolicy ) } , "detached" : boolean , "enableExactlyOnceDelivery" : boolean , "topicMessageRetentionDuration" : string , "state" : enum ( State ) , "analyticsHubSubscriptionInfo" : { object ( AnalyticsHubSubscriptionInfo ) } , "messageTransforms" : [ { object ( MessageTransform ) } ] , "tags" : { string : string , ... } } Fields name string Required.
- Subscription JSON representation { "name" : string , "topic" : string , "pushConfig" : { object ( PushConfig ) } , "bigqueryConfig" : { object ( BigQueryConfig ) } , "cloudStorageConfig" : { object ( CloudStorageConfig ) } , "ackDeadlineSeconds" : integer , "retainAckedMessages" : boolean , "messageRetentionDuration" : string , "labels" : { string : string , ... } , "enableMessageOrdering" : boolean , "expirationPolicy" : { object ( ExpirationPolicy ) } , "filter" : string , "deadLetterPolicy" : { object ( DeadLetterPolicy ) } , "retryPolicy" : { object ( RetryPolicy ) } , "detached" : boolean , "enableExactlyOnceDelivery" : boolean , "topicMessageRetentionDuration" : string , "state" : enum ( State ) , "analyticsHubSubscriptionInfo" : { object ( AnalyticsHubSubscriptionInfo ) } , "messageTransforms" : [ { object ( MessageTransform ) } ] , "tags" : { string : string , ... } } Fields name string Required.
- JavaScript code that contains a function function name with the below signature: / Transforms a Pub/Sub message. @return {(Object<string, (string Object<string, string>)> null)} - To filter a message, return null.
- JavaScript code that contains a function function name with the below signature: / Transforms a Pub/Sub message. @return {(Object<string, (string Object<string, string>)> null)} - To filter a message, return null.

### "MCP Tools Reference: pubsub.googleapis.com \_|\_ Pub/Sub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription)
- Source ID: `site-api-reference`
- Final score: 151
- Re-rank relevance: N/A

Evidence snippets:
- Subscription JSON representation { "name" : string , "topic" : string , "pushConfig" : { object ( PushConfig ) } , "bigqueryConfig" : { object ( BigQueryConfig ) } , "cloudStorageConfig" : { object ( CloudStorageConfig ) } , "ackDeadlineSeconds" : integer , "retainAckedMessages" : boolean , "messageRetentionDuration" : string , "labels" : { string : string , ... } , "enableMessageOrdering" : boolean , "expirationPolicy" : { object ( ExpirationPolicy ) } , "filter" : string , "deadLetterPolicy" : { object ( DeadLetterPolicy ) } , "retryPolicy" : { object ( RetryPolicy ) } , "detached" : boolean , "enableExactlyOnceDelivery" : boolean , "topicMessageRetentionDuration" : string , "state" : enum ( State ) , "analyticsHubSubscriptionInfo" : { object ( AnalyticsHubSubscriptionInfo ) } , "messageTransforms" : [ { object ( MessageTransform ) } ] , "tags" : { string : string , ... } } Fields name string Required.
- Subscription JSON representation { "name" : string , "topic" : string , "pushConfig" : { object ( PushConfig ) } , "bigqueryConfig" : { object ( BigQueryConfig ) } , "cloudStorageConfig" : { object ( CloudStorageConfig ) } , "ackDeadlineSeconds" : integer , "retainAckedMessages" : boolean , "messageRetentionDuration" : string , "labels" : { string : string , ... } , "enableMessageOrdering" : boolean , "expirationPolicy" : { object ( ExpirationPolicy ) } , "filter" : string , "deadLetterPolicy" : { object ( DeadLetterPolicy ) } , "retryPolicy" : { object ( RetryPolicy ) } , "detached" : boolean , "enableExactlyOnceDelivery" : boolean , "topicMessageRetentionDuration" : string , "state" : enum ( State ) , "analyticsHubSubscriptionInfo" : { object ( AnalyticsHubSubscriptionInfo ) } , "messageTransforms" : [ { object ( MessageTransform ) } ] , "tags" : { string : string , ... } } Fields name string Required.
- JavaScript code that contains a function function name with the below signature: / Transforms a Pub/Sub message. @return {(Object<string, (string Object<string, string>)> null)} - To filter a message, return null.
- JavaScript code that contains a function function name with the below signature: / Transforms a Pub/Sub message. @return {(Object<string, (string Object<string, string>)> null)} - To filter a message, return null.

### Topic properties \_|\_ Pub/Sub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/pubsub/docs/topic-properties](https://docs.cloud.google.com/pubsub/docs/topic-properties)
- Source ID: `site-api-reference`
- Final score: 148
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Single Message Transforms (SMTs) Specifies lightweight modifications to message attributes and data directly within Pub/Sub.
- Topic schemas help standardize message types and permissions to allow them to be consumed by different teams in your organization.
- Before you begin Learn about topics and the publish messages workflow.
- The default subscription has the following properties: Subscription ID of -sub Pull delivery type Message retention duration of seven days Expiration after 31 days of inactivity Acknowledgment deadline of 10 seconds Immediate retry policy Schema A schema is a format that the message data field must follow.

