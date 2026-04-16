---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:10.325Z"
product_name: "Pub/Sub"
product_slug: "pub-sub"
feature_name: "Cloud Pub/Sub audit logging"
feature_slug: "cloud-pub-sub-audit-logging"
latest_feature_date: "2018-05-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/pubsub/docs/audit-logging"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsub/latest/com.google.cloud.pubsub.v1"
  - "https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription"
  - "https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription"
keywords:
  - "pub"
  - "sub"
  - "audit"
  - "logging"
  - "provides"
  - "ga"
  - "for"
---

# Cloud Pub/Sub audit logging

Product: Pub/Sub
Coverage: MEDIUM

## Step 02 Summary

Provides GA audit logging for Cloud Pub/Sub.

## Extended Definition

Provides GA audit logging for Cloud Pub/Sub.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/pubsub/docs/audit-logging](https://docs.cloud.google.com/pubsub/docs/audit-logging)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsub/latest/com.google.cloud.pubsub.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsub/latest/com.google.cloud.pubsub.v1)
- [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription)
- [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription)

## Supporting Pages

### Pub/Sub audit logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/pubsub/docs/audit-logging](https://docs.cloud.google.com/pubsub/docs/audit-logging)
- Source ID: `site-docs-root-2`
- Final score: 265
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information about Cloud Audit Logs, see the following: Types of audit logs Audit log entry structure Storing and routing audit logs Cloud Logging pricing summary Enable Data Access audit logs Notes Pub/Sub does not currently write Data Access audit logs for message operations, such as Publish, Subscribe, and Acknowledge.
- Home Documentation Data analytics Pub/Sub Guides Send feedback Pub/Sub audit logging Stay organized with collections Save and categorize content based on your preferences.
- This document describes audit logging for Pub/Sub.
- Permission type Methods ADMIN READ google.iam.v1.IAMPolicy.GetIamPolicy google.pubsub.v1.SchemaService.GetSchema google.pubsub.v1.SchemaService.ListSchemaRevisions google.pubsub.v1.SchemaService.ListSchemas google.pubsub.v1.SchemaService.ValidateMessage google.pubsub.v1.SchemaService.ValidateSchema google.pubsub.v1.Subscriber.GetSnapshot google.pubsub.v1.Subscriber.ListSnapshots google.pubsub.v1.Subscriber.Seek ADMIN WRITE google.iam.v1.IAMPolicy.SetIamPolicy google.pubsub.v1.Publisher.CreateTopic google.pubsub.v1.Publisher.DeleteTopic google.pubsub.v1.Publisher.DetachSubscription google.pubsub.v1.Publisher.UpdateTopic google.pubsub.v1.SchemaService.CommitSchema google.pubsub.v1.SchemaService.CreateSchema google.pubsub.v1.SchemaService.DeleteSchema google.pubsub.v1.SchemaService.DeleteSchemaRevision google.pubsub.v1.SchemaService.RollbackSchema google.pubsub.v1.Subscriber.CreateSnapshot google.pubsub.v1.Subscriber.CreateSubscription google.pubsub.v1.Subscriber.DeleteSnapshot google.pubsub.v1.Subscriber.DeleteSubscription google.pubsub.v1.Subscriber.ModifyPushConfig google.pubsub.v1.Subscriber.UpdateSnapshot google.pubsub.v1.Subscriber.UpdateSubscription DATA READ google.pubsub.v1.Publisher.GetTopic google.pubsub.v1.Publisher.ListTopicSnapshots google.pubsub.v1.Publisher.ListTopicSubscriptions google.pubsub.v1.Publisher.ListTopics google.pubsub.v1.Subscriber.GetSubscription google.pubsub.v1.Subscriber.ListSubscriptions API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Pub/Sub. google.iam.v1.IAMPolicy The following audit logs are associated with methods belonging to google.iam.v1.IAMPolicy .

### "Package com.google.cloud.pubsub.v1 (1.149.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsub/latest/com.google.cloud.pubsub.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsub/latest/com.google.cloud.pubsub.v1)
- Source ID: `site-java-reference`
- Final score: 224
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Open Census Util Utilities for propagating OpenCensus TagContext and SpanContext from publishers to subscribers. com. google. cloud. pubsub. v1.
- This class allows customization of how the subscriber handles outstanding messages during shutdown, including whether to wait for processing to complete or to immediately nack messages, com. google. cloud. pubsub. v1.
- Pubsub Message Wrapper A wrapper class for a PubsubMessage object that handles creation and tracking of OpenTelemetry Span objects for different operations that occur during publishing. com. google. cloud. pubsub. v1.
- Home Documentation Developer tools Java Client libraries Send feedback Package com.google.cloud.pubsub.v1 (1.149.0) Stay organized with collections Save and categorize content based on your preferences.

### "MCP Tools Reference: pubsub.googleapis.com \_|\_ Pub/Sub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription)
- Source ID: `site-api-reference`
- Final score: 217
- Re-rank relevance: N/A

Evidence snippets:
- If true, Pub/Sub provides the following guarantees for the delivery of a message with a given value of message id on this subscription: The message sent to a subscriber is guaranteed not to be resent before the message's acknowledgment deadline expires.
- If true, Pub/Sub provides the following guarantees for the delivery of a message with a given value of message id on this subscription: The message sent to a subscriber is guaranteed not to be resent before the message's acknowledgment deadline expires.
- PushConfig JSON representation { "pushEndpoint" : string , "attributes" : { string : string , ... } , // Union field authentication method can be only one of the following: "oidcToken" : { object ( OidcToken ) } // End of list of possible types for union field authentication method . // Union field wrapper can be only one of the following: "pubsubWrapper" : { object ( PubsubWrapper ) } , "noWrapper" : { object ( NoWrapper ) } // End of list of possible types for union field wrapper . } Fields pushEndpoint string Optional.
- PushConfig JSON representation { "pushEndpoint" : string , "attributes" : { string : string , ... } , // Union field authentication method can be only one of the following: "oidcToken" : { object ( OidcToken ) } // End of list of possible types for union field authentication method . // Union field wrapper can be only one of the following: "pubsubWrapper" : { object ( PubsubWrapper ) } , "noWrapper" : { object ( NoWrapper ) } // End of list of possible types for union field wrapper . } Fields pushEndpoint string Optional.

### "MCP Tools Reference: pubsub.googleapis.com \_|\_ Pub/Sub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription)
- Source ID: `site-api-reference`
- Final score: 217
- Re-rank relevance: N/A

Evidence snippets:
- If true, Pub/Sub provides the following guarantees for the delivery of a message with a given value of message id on this subscription: The message sent to a subscriber is guaranteed not to be resent before the message's acknowledgment deadline expires.
- If true, Pub/Sub provides the following guarantees for the delivery of a message with a given value of message id on this subscription: The message sent to a subscriber is guaranteed not to be resent before the message's acknowledgment deadline expires.
- PushConfig JSON representation { "pushEndpoint" : string , "attributes" : { string : string , ... } , // Union field authentication method can be only one of the following: "oidcToken" : { object ( OidcToken ) } // End of list of possible types for union field authentication method . // Union field wrapper can be only one of the following: "pubsubWrapper" : { object ( PubsubWrapper ) } , "noWrapper" : { object ( NoWrapper ) } // End of list of possible types for union field wrapper . } Fields pushEndpoint string Optional.
- PushConfig JSON representation { "pushEndpoint" : string , "attributes" : { string : string , ... } , // Union field authentication method can be only one of the following: "oidcToken" : { object ( OidcToken ) } // End of list of possible types for union field authentication method . // Union field wrapper can be only one of the following: "pubsubWrapper" : { object ( PubsubWrapper ) } , "noWrapper" : { object ( NoWrapper ) } // End of list of possible types for union field wrapper . } Fields pushEndpoint string Optional.

