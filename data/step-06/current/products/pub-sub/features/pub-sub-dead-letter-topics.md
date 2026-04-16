---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:10.320Z"
product_name: "Pub/Sub"
product_slug: "pub-sub"
feature_name: "Pub/Sub dead-letter topics"
feature_slug: "pub-sub-dead-letter-topics"
latest_feature_date: "2020-04-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription"
  - "https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/get_subscription"
  - "https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_subscriptions"
  - "https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription"
keywords:
  - "pub"
  - "sub"
  - "dead"
  - "letter"
  - "topics"
  - "route"
  - "undeliverable"
  - "messages"
---

# Pub/Sub dead-letter topics

Product: Pub/Sub
Coverage: MEDIUM

## Step 02 Summary

Dead-letter topics route undeliverable messages from subscriptions to a separate topic.

## Extended Definition

Dead-letter topics route undeliverable messages from subscriptions to a separate topic.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription)
- [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/get_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/get_subscription)
- [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_subscriptions](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_subscriptions)
- [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription)

## Supporting Pages

### "MCP Tools Reference: pubsub.googleapis.com \_|\_ Pub/Sub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription)
- Source ID: `site-api-reference`
- Final score: 255
- Re-rank relevance: N/A

Evidence snippets:
- Subscription JSON representation { "name" : string , "topic" : string , "pushConfig" : { object ( PushConfig ) } , "bigqueryConfig" : { object ( BigQueryConfig ) } , "cloudStorageConfig" : { object ( CloudStorageConfig ) } , "ackDeadlineSeconds" : integer , "retainAckedMessages" : boolean , "messageRetentionDuration" : string , "labels" : { string : string , ... } , "enableMessageOrdering" : boolean , "expirationPolicy" : { object ( ExpirationPolicy ) } , "filter" : string , "deadLetterPolicy" : { object ( DeadLetterPolicy ) } , "retryPolicy" : { object ( RetryPolicy ) } , "detached" : boolean , "enableExactlyOnceDelivery" : boolean , "topicMessageRetentionDuration" : string , "state" : enum ( State ) , "analyticsHubSubscriptionInfo" : { object ( AnalyticsHubSubscriptionInfo ) } , "messageTransforms" : [ { object ( MessageTransform ) } ] , "tags" : { string : string , ... } } Fields name string Required.
- Subscription JSON representation { "name" : string , "topic" : string , "pushConfig" : { object ( PushConfig ) } , "bigqueryConfig" : { object ( BigQueryConfig ) } , "cloudStorageConfig" : { object ( CloudStorageConfig ) } , "ackDeadlineSeconds" : integer , "retainAckedMessages" : boolean , "messageRetentionDuration" : string , "labels" : { string : string , ... } , "enableMessageOrdering" : boolean , "expirationPolicy" : { object ( ExpirationPolicy ) } , "filter" : string , "deadLetterPolicy" : { object ( DeadLetterPolicy ) } , "retryPolicy" : { object ( RetryPolicy ) } , "detached" : boolean , "enableExactlyOnceDelivery" : boolean , "topicMessageRetentionDuration" : string , "state" : enum ( State ) , "analyticsHubSubscriptionInfo" : { object ( AnalyticsHubSubscriptionInfo ) } , "messageTransforms" : [ { object ( MessageTransform ) } ] , "tags" : { string : string , ... } } Fields name string Required.
- A policy that specifies the conditions for dead lettering messages in this subscription.
- A policy that specifies the conditions for dead lettering messages in this subscription.

### "MCP Tools Reference: pubsub.googleapis.com \_|\_ Pub/Sub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/get_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/get_subscription)
- Source ID: `site-api-reference`
- Final score: 255
- Re-rank relevance: N/A

Evidence snippets:
- Subscription JSON representation { "name" : string , "topic" : string , "pushConfig" : { object ( PushConfig ) } , "bigqueryConfig" : { object ( BigQueryConfig ) } , "cloudStorageConfig" : { object ( CloudStorageConfig ) } , "ackDeadlineSeconds" : integer , "retainAckedMessages" : boolean , "messageRetentionDuration" : string , "labels" : { string : string , ... } , "enableMessageOrdering" : boolean , "expirationPolicy" : { object ( ExpirationPolicy ) } , "filter" : string , "deadLetterPolicy" : { object ( DeadLetterPolicy ) } , "retryPolicy" : { object ( RetryPolicy ) } , "detached" : boolean , "enableExactlyOnceDelivery" : boolean , "topicMessageRetentionDuration" : string , "state" : enum ( State ) , "analyticsHubSubscriptionInfo" : { object ( AnalyticsHubSubscriptionInfo ) } , "messageTransforms" : [ { object ( MessageTransform ) } ] , "tags" : { string : string , ... } } Fields name string Required.
- A policy that specifies the conditions for dead lettering messages in this subscription.
- The name of the topic to which dead letter messages should be published.
- The Pub/Sub service account associated with this subscriptions's parent project (i.e., service-{project number}@gcp-sa-pubsub.iam.gserviceaccount.com) must have permission to Acknowledge() messages on this subscription. retryPolicy object ( RetryPolicy ) Optional.

### "MCP Tools Reference: pubsub.googleapis.com \_|\_ Pub/Sub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_subscriptions](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_subscriptions)
- Source ID: `site-api-reference`
- Final score: 255
- Re-rank relevance: N/A

Evidence snippets:
- Subscription JSON representation { "name" : string , "topic" : string , "pushConfig" : { object ( PushConfig ) } , "bigqueryConfig" : { object ( BigQueryConfig ) } , "cloudStorageConfig" : { object ( CloudStorageConfig ) } , "ackDeadlineSeconds" : integer , "retainAckedMessages" : boolean , "messageRetentionDuration" : string , "labels" : { string : string , ... } , "enableMessageOrdering" : boolean , "expirationPolicy" : { object ( ExpirationPolicy ) } , "filter" : string , "deadLetterPolicy" : { object ( DeadLetterPolicy ) } , "retryPolicy" : { object ( RetryPolicy ) } , "detached" : boolean , "enableExactlyOnceDelivery" : boolean , "topicMessageRetentionDuration" : string , "state" : enum ( State ) , "analyticsHubSubscriptionInfo" : { object ( AnalyticsHubSubscriptionInfo ) } , "messageTransforms" : [ { object ( MessageTransform ) } ] , "tags" : { string : string , ... } } Fields name string Required.
- A policy that specifies the conditions for dead lettering messages in this subscription.
- The name of the topic to which dead letter messages should be published.
- The Pub/Sub service account associated with this subscriptions's parent project (i.e., service-{project number}@gcp-sa-pubsub.iam.gserviceaccount.com) must have permission to Acknowledge() messages on this subscription. retryPolicy object ( RetryPolicy ) Optional.

### "MCP Tools Reference: pubsub.googleapis.com \_|\_ Pub/Sub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription)
- Source ID: `site-api-reference`
- Final score: 255
- Re-rank relevance: N/A

Evidence snippets:
- Subscription JSON representation { "name" : string , "topic" : string , "pushConfig" : { object ( PushConfig ) } , "bigqueryConfig" : { object ( BigQueryConfig ) } , "cloudStorageConfig" : { object ( CloudStorageConfig ) } , "ackDeadlineSeconds" : integer , "retainAckedMessages" : boolean , "messageRetentionDuration" : string , "labels" : { string : string , ... } , "enableMessageOrdering" : boolean , "expirationPolicy" : { object ( ExpirationPolicy ) } , "filter" : string , "deadLetterPolicy" : { object ( DeadLetterPolicy ) } , "retryPolicy" : { object ( RetryPolicy ) } , "detached" : boolean , "enableExactlyOnceDelivery" : boolean , "topicMessageRetentionDuration" : string , "state" : enum ( State ) , "analyticsHubSubscriptionInfo" : { object ( AnalyticsHubSubscriptionInfo ) } , "messageTransforms" : [ { object ( MessageTransform ) } ] , "tags" : { string : string , ... } } Fields name string Required.
- Subscription JSON representation { "name" : string , "topic" : string , "pushConfig" : { object ( PushConfig ) } , "bigqueryConfig" : { object ( BigQueryConfig ) } , "cloudStorageConfig" : { object ( CloudStorageConfig ) } , "ackDeadlineSeconds" : integer , "retainAckedMessages" : boolean , "messageRetentionDuration" : string , "labels" : { string : string , ... } , "enableMessageOrdering" : boolean , "expirationPolicy" : { object ( ExpirationPolicy ) } , "filter" : string , "deadLetterPolicy" : { object ( DeadLetterPolicy ) } , "retryPolicy" : { object ( RetryPolicy ) } , "detached" : boolean , "enableExactlyOnceDelivery" : boolean , "topicMessageRetentionDuration" : string , "state" : enum ( State ) , "analyticsHubSubscriptionInfo" : { object ( AnalyticsHubSubscriptionInfo ) } , "messageTransforms" : [ { object ( MessageTransform ) } ] , "tags" : { string : string , ... } } Fields name string Required.
- A policy that specifies the conditions for dead lettering messages in this subscription.
- A policy that specifies the conditions for dead lettering messages in this subscription.

