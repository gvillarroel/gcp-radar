---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:10.317Z"
product_name: "Pub/Sub"
product_slug: "pub-sub"
feature_name: "Pub/Sub message filtering"
feature_slug: "pub-sub-message-filtering"
latest_feature_date: "2020-11-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription"
  - "https://docs.cloud.google.com/pubsub/docs/publish-message-overview"
  - "https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_subscriptions"
  - "https://docs.cloud.google.com/pubsub/docs/create-cloudstorage-subscription"
keywords:
  - "pub"
  - "sub"
  - "message"
  - "filtering"
  - "lets"
  - "subscriptions"
  - "deliver"
  - "only"
---

# Pub/Sub message filtering

Product: Pub/Sub
Coverage: MEDIUM

## Step 02 Summary

Pub/Sub message filtering lets subscriptions deliver only messages that match filter expressions; Pub/Sub message filtering lets subscriptions deliver only messages that match filter expressions.

## Extended Definition

Pub/Sub message filtering lets subscriptions deliver only messages that match filter expressions; Pub/Sub message filtering lets subscriptions deliver only messages that match filter expressions.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription](https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription)
- [https://docs.cloud.google.com/pubsub/docs/publish-message-overview](https://docs.cloud.google.com/pubsub/docs/publish-message-overview)
- [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_subscriptions](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_subscriptions)
- [https://docs.cloud.google.com/pubsub/docs/create-cloudstorage-subscription](https://docs.cloud.google.com/pubsub/docs/create-cloudstorage-subscription)

## Supporting Pages

### Create BigQuery subscriptions \_|\_ Pub/Sub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription](https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription)
- Source ID: `site-docs-root-2`
- Final score: 277
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use the default Pub/Sub service agent that lets any user with the ability to create subscriptions in the project to create a subscription that writes to the table.
- Use table schema This option lets Pub/Sub use the schema of the BigQuery table to write the fields of a JSON message to the corresponding columns.
- When enabled, this option lets Pub/Sub drop any field that is present in the topic schema or message but not in the BigQuery schema.
- Write metadata This option lets Pub/Sub write the metadata of each message to additional columns in the BigQuery table.

### Publish message overview \_|\_ Pub/Sub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/pubsub/docs/publish-message-overview](https://docs.cloud.google.com/pubsub/docs/publish-message-overview)
- Source ID: `site-docs-root`
- Final score: 272
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Pub/Sub identifies subscribers with subscriptions matching the message's topic, and delivers a copy of the message to each.
- Messages with the same ordering key are expected to be delivered to a subscriber in the order they were published.
- The Pub/Sub service uses this topic name to route the message to all subscriptions attached to the topic.
- Pub/Sub offers at-least-once message delivery and best-effort ordering to existing subscribers.

### "MCP Tools Reference: pubsub.googleapis.com \_|\_ Pub/Sub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_subscriptions](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_subscriptions)
- Source ID: `site-api-reference`
- Final score: 263
- Re-rank relevance: N/A

Evidence snippets:
- Users should ensure that there is a subscription attached to this topic since messages published to a topic with no subscriptions are lost. maxDeliveryAttempts integer Optional.
- If non-empty, then only PubsubMessage s whose attributes field matches the filter are delivered on this subscription.
- Pattern: "projects/{project}/locations/{location}/subscriptions/{subscription}" MessageTransform JSON representation { "enabled" : boolean , "disabled" : boolean , // Union field transform can be only one of the following: "javascriptUdf" : { object ( JavaScriptUDF ) } , "aiInference" : { object ( AIInference ) } // End of list of possible types for union field transform . } Fields enabled (deprecated) boolean This item is deprecated!
- The Pub/Sub service account associated with this subscriptions's parent project (i.e., service-{project number}@gcp-sa-pubsub.iam.gserviceaccount.com) must have permission to Acknowledge() messages on this subscription. retryPolicy object ( RetryPolicy ) Optional.

### Create Cloud Storage subscriptions \_|\_ Pub/Sub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/pubsub/docs/create-cloudstorage-subscription](https://docs.cloud.google.com/pubsub/docs/create-cloudstorage-subscription)
- Source ID: `site-docs-root-2`
- Final score: 261
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To create a Cloud Storage subscription, run the gcloud pubsub subscriptions create command . gcloud pubsub subscriptions create SUBSCRIPTION ID \ --topic = TOPIC ID \ --cloud-storage-bucket = BUCKET NAME \ --cloud-storage-file-prefix = CLOUD STORAGE FILE PREFIX \ --cloud-storage-file-suffix = CLOUD STORAGE FILE SUFFIX \ --cloud-storage-file-datetime-format = CLOUD STORAGE FILE DATETIME FORMAT \ --cloud-storage-max-duration = CLOUD STORAGE MAX DURATION \ --cloud-storage-max-bytes = CLOUD STORAGE MAX BYTES \ --cloud-storage-max-messages = CLOUD STORAGE MAX MESSAGES \ --cloud-storage-output-format = CLOUD STORAGE OUTPUT FORMAT \ --cloud-storage-write-metadata --cloud-storage-use-topic-schema If you want to use a custom service account, provide it as an additional argument: gcloud pubsub subscriptions create SUBSCRIPTION ID \ --topic = TOPIC ID \ --cloud-storage-bucket = BUCKET NAME \ --cloud-storage-file-prefix = CLOUD STORAGE FILE PREFIX \ --cloud-storage-file-suffix = CLOUD STORAGE FILE SUFFIX \ --cloud-storage-file-datetime-format = CLOUD STORAGE FILE DATETIME FORMAT \ --cloud-storage-max-duration = CLOUD STORAGE MAX DURATION \ --cloud-storage-max-bytes = CLOUD STORAGE MAX BYTES \ --cloud-storage-max-messages = CLOUD STORAGE MAX MESSAGES \ --cloud-storage-output-format = CLOUD STORAGE OUTPUT FORMAT \ --cloud-storage-write-metadata --cloud-storage-use-topic-schema --cloud-storage-service-account-email = SERVICE ACCOUNT NAME In the command, only SUBSCRIPTION ID , the --topic flag, and the --cloud-storage-bucket flag are required.
- Here is the Avro schema for the output messages with write metadata disabled: { "type" : "record" , "namespace" : "com.google.pubsub" , "name" : "PubsubMessage" , "fields" : [ { "name" : "data" , "type" : "bytes" } ] } Here is the Avro schema for the output messages with write metadata enabled: { "type" : "record" , "namespace" : "com.google.pubsub" , "name" : "PubsubMessageWithMetadata" , "fields" : [ { "name" : "subscription name" , "type" : "string" }, { "name" : "message id" , "type" : "string" }, { "name" : "publish time" , "type" : { "type" : "long" , "logicalType" : "timestamp-micros" } }, { "name" : "attributes" , "type" : { "type" : "map" , "values" : "string" } }, { "name" : "data" , "type" : "bytes" } ] } Use topic schema : This option lets Pub/Sub use the schema of the Pub/Sub topic to which the subscription is attached when writing Avro files.
- Values are as follows: text : Messages are written as raw text, separated by a newline. avro : Messages are written as an Avro binary. --cloud-storage-write-metadata and --cloud-storage-use-topic-schema only affect subscriptions with output format avro .
- Use the default Pub/Sub service agent that lets any user with the ability to create subscriptions in the project to create a subscription that writes to the bucket.

