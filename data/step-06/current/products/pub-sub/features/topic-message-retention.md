---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:10.315Z"
product_name: "Pub/Sub"
product_slug: "pub-sub"
feature_name: "Topic message retention"
feature_slug: "topic-message-retention"
latest_feature_date: "2021-12-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/get_subscription"
  - "https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_subscriptions"
  - "https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription"
  - "https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription"
keywords:
  - "topic"
  - "message"
  - "retention"
  - "extended"
  - "lets"
  - "pub"
  - "sub"
  - "retain"
---

# Topic message retention

Product: Pub/Sub
Coverage: MEDIUM

## Step 02 Summary

Extended topic retention lets Pub/Sub retain published messages for up to 31 days.

## Extended Definition

Extended topic retention lets Pub/Sub retain published messages for up to 31 days.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/get_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/get_subscription)
- [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_subscriptions](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_subscriptions)
- [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription)
- [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription)

## Supporting Pages

### "MCP Tools Reference: pubsub.googleapis.com \_|\_ Pub/Sub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/get_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/get_subscription)
- Source ID: `site-api-reference`
- Final score: 287
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Subscription JSON representation { "name" : string , "topic" : string , "pushConfig" : { object ( PushConfig ) } , "bigqueryConfig" : { object ( BigQueryConfig ) } , "cloudStorageConfig" : { object ( CloudStorageConfig ) } , "ackDeadlineSeconds" : integer , "retainAckedMessages" : boolean , "messageRetentionDuration" : string , "labels" : { string : string , ... } , "enableMessageOrdering" : boolean , "expirationPolicy" : { object ( ExpirationPolicy ) } , "filter" : string , "deadLetterPolicy" : { object ( DeadLetterPolicy ) } , "retryPolicy" : { object ( RetryPolicy ) } , "detached" : boolean , "enableExactlyOnceDelivery" : boolean , "topicMessageRetentionDuration" : string , "state" : enum ( State ) , "analyticsHubSubscriptionInfo" : { object ( AnalyticsHubSubscriptionInfo ) } , "messageTransforms" : [ { object ( MessageTransform ) } ] , "tags" : { string : string , ... } } Fields name string Required.
- These copies are considered distinct by Pub/Sub and have distinct message id values. topicMessageRetentionDuration string ( Duration format) Output only.
- If this field is set, messages published to the subscription's topic in the last topic message retention duration are always available to subscribers.
- Indicates the minimum duration for which a message is retained after it is published to the subscription's topic.

### "MCP Tools Reference: pubsub.googleapis.com \_|\_ Pub/Sub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_subscriptions](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_subscriptions)
- Source ID: `site-api-reference`
- Final score: 287
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Subscription JSON representation { "name" : string , "topic" : string , "pushConfig" : { object ( PushConfig ) } , "bigqueryConfig" : { object ( BigQueryConfig ) } , "cloudStorageConfig" : { object ( CloudStorageConfig ) } , "ackDeadlineSeconds" : integer , "retainAckedMessages" : boolean , "messageRetentionDuration" : string , "labels" : { string : string , ... } , "enableMessageOrdering" : boolean , "expirationPolicy" : { object ( ExpirationPolicy ) } , "filter" : string , "deadLetterPolicy" : { object ( DeadLetterPolicy ) } , "retryPolicy" : { object ( RetryPolicy ) } , "detached" : boolean , "enableExactlyOnceDelivery" : boolean , "topicMessageRetentionDuration" : string , "state" : enum ( State ) , "analyticsHubSubscriptionInfo" : { object ( AnalyticsHubSubscriptionInfo ) } , "messageTransforms" : [ { object ( MessageTransform ) } ] , "tags" : { string : string , ... } } Fields name string Required.
- These copies are considered distinct by Pub/Sub and have distinct message id values. topicMessageRetentionDuration string ( Duration format) Output only.
- If this field is set, messages published to the subscription's topic in the last topic message retention duration are always available to subscribers.
- Indicates the minimum duration for which a message is retained after it is published to the subscription's topic.

### "MCP Tools Reference: pubsub.googleapis.com \_|\_ Pub/Sub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription)
- Source ID: `site-api-reference`
- Final score: 283
- Re-rank relevance: N/A

Evidence snippets:
- Subscription JSON representation { "name" : string , "topic" : string , "pushConfig" : { object ( PushConfig ) } , "bigqueryConfig" : { object ( BigQueryConfig ) } , "cloudStorageConfig" : { object ( CloudStorageConfig ) } , "ackDeadlineSeconds" : integer , "retainAckedMessages" : boolean , "messageRetentionDuration" : string , "labels" : { string : string , ... } , "enableMessageOrdering" : boolean , "expirationPolicy" : { object ( ExpirationPolicy ) } , "filter" : string , "deadLetterPolicy" : { object ( DeadLetterPolicy ) } , "retryPolicy" : { object ( RetryPolicy ) } , "detached" : boolean , "enableExactlyOnceDelivery" : boolean , "topicMessageRetentionDuration" : string , "state" : enum ( State ) , "analyticsHubSubscriptionInfo" : { object ( AnalyticsHubSubscriptionInfo ) } , "messageTransforms" : [ { object ( MessageTransform ) } ] , "tags" : { string : string , ... } } Fields name string Required.
- Subscription JSON representation { "name" : string , "topic" : string , "pushConfig" : { object ( PushConfig ) } , "bigqueryConfig" : { object ( BigQueryConfig ) } , "cloudStorageConfig" : { object ( CloudStorageConfig ) } , "ackDeadlineSeconds" : integer , "retainAckedMessages" : boolean , "messageRetentionDuration" : string , "labels" : { string : string , ... } , "enableMessageOrdering" : boolean , "expirationPolicy" : { object ( ExpirationPolicy ) } , "filter" : string , "deadLetterPolicy" : { object ( DeadLetterPolicy ) } , "retryPolicy" : { object ( RetryPolicy ) } , "detached" : boolean , "enableExactlyOnceDelivery" : boolean , "topicMessageRetentionDuration" : string , "state" : enum ( State ) , "analyticsHubSubscriptionInfo" : { object ( AnalyticsHubSubscriptionInfo ) } , "messageTransforms" : [ { object ( MessageTransform ) } ] , "tags" : { string : string , ... } } Fields name string Required.
- These copies are considered distinct by Pub/Sub and have distinct message id values. topicMessageRetentionDuration string ( Duration format) Output only.
- These copies are considered distinct by Pub/Sub and have distinct message id values. topicMessageRetentionDuration string ( Duration format) Output only.

### "MCP Tools Reference: pubsub.googleapis.com \_|\_ Pub/Sub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription)
- Source ID: `site-api-reference`
- Final score: 283
- Re-rank relevance: N/A

Evidence snippets:
- Subscription JSON representation { "name" : string , "topic" : string , "pushConfig" : { object ( PushConfig ) } , "bigqueryConfig" : { object ( BigQueryConfig ) } , "cloudStorageConfig" : { object ( CloudStorageConfig ) } , "ackDeadlineSeconds" : integer , "retainAckedMessages" : boolean , "messageRetentionDuration" : string , "labels" : { string : string , ... } , "enableMessageOrdering" : boolean , "expirationPolicy" : { object ( ExpirationPolicy ) } , "filter" : string , "deadLetterPolicy" : { object ( DeadLetterPolicy ) } , "retryPolicy" : { object ( RetryPolicy ) } , "detached" : boolean , "enableExactlyOnceDelivery" : boolean , "topicMessageRetentionDuration" : string , "state" : enum ( State ) , "analyticsHubSubscriptionInfo" : { object ( AnalyticsHubSubscriptionInfo ) } , "messageTransforms" : [ { object ( MessageTransform ) } ] , "tags" : { string : string , ... } } Fields name string Required.
- Subscription JSON representation { "name" : string , "topic" : string , "pushConfig" : { object ( PushConfig ) } , "bigqueryConfig" : { object ( BigQueryConfig ) } , "cloudStorageConfig" : { object ( CloudStorageConfig ) } , "ackDeadlineSeconds" : integer , "retainAckedMessages" : boolean , "messageRetentionDuration" : string , "labels" : { string : string , ... } , "enableMessageOrdering" : boolean , "expirationPolicy" : { object ( ExpirationPolicy ) } , "filter" : string , "deadLetterPolicy" : { object ( DeadLetterPolicy ) } , "retryPolicy" : { object ( RetryPolicy ) } , "detached" : boolean , "enableExactlyOnceDelivery" : boolean , "topicMessageRetentionDuration" : string , "state" : enum ( State ) , "analyticsHubSubscriptionInfo" : { object ( AnalyticsHubSubscriptionInfo ) } , "messageTransforms" : [ { object ( MessageTransform ) } ] , "tags" : { string : string , ... } } Fields name string Required.
- These copies are considered distinct by Pub/Sub and have distinct message id values. topicMessageRetentionDuration string ( Duration format) Output only.
- These copies are considered distinct by Pub/Sub and have distinct message id values. topicMessageRetentionDuration string ( Duration format) Output only.

