---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:10.321Z"
product_name: "Pub/Sub"
product_slug: "pub-sub"
feature_name: "Pub/Sub customer-managed encryption keys (CMEK)"
feature_slug: "pub-sub-customer-managed-encryption-keys-cmek"
latest_feature_date: "2019-09-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/pubsub/docs/create-topic"
  - "https://docs.cloud.google.com/pubsub/docs/choose-pubsub-kafka"
  - "https://docs.cloud.google.com/pubsub/docs/topic-properties"
  - "https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription"
keywords:
  - "pub"
  - "sub"
  - "customer"
  - "managed"
  - "encryption"
  - "keys"
  - "cmek"
  - "supports"
---

# Pub/Sub customer-managed encryption keys (CMEK)

Product: Pub/Sub
Coverage: MEDIUM

## Step 02 Summary

Pub/Sub supports customer-managed encryption keys for encrypting data with Cloud KMS keys; Pub/Sub supports customer-managed encryption keys for encrypting data with Cloud KMS keys.

## Extended Definition

Pub/Sub supports customer-managed encryption keys for encrypting data with Cloud KMS keys; Pub/Sub supports customer-managed encryption keys for encrypting data with Cloud KMS keys.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/pubsub/docs/create-topic](https://docs.cloud.google.com/pubsub/docs/create-topic)
- [https://docs.cloud.google.com/pubsub/docs/choose-pubsub-kafka](https://docs.cloud.google.com/pubsub/docs/choose-pubsub-kafka)
- [https://docs.cloud.google.com/pubsub/docs/topic-properties](https://docs.cloud.google.com/pubsub/docs/topic-properties)
- [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription)

## Supporting Pages

### Create a topic \_|\_ Pub/Sub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/pubsub/docs/create-topic](https://docs.cloud.google.com/pubsub/docs/create-topic)
- Source ID: `site-docs-root`
- Final score: 247
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Pub/Sub encrypts messages with Google-owned and Google-managed encryption keys by default, so choosing this option maintains the default behavior.
- Pub/Sub encrypts messages with Google-owned and Google-managed encryption keys by default.
- Cloud KMS key Specifies if the topic is encrypted with a customer-managed encryption key (CMEK).
- Instead, Cloud KMS encrypts the Data Encryption Keys (DEKs) that Pub/Sub creates for each topic.

### "Choose Pub/Sub or Cloud Managed Service for Apache Kafka \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/docs/choose-pubsub-kafka](https://docs.cloud.google.com/pubsub/docs/choose-pubsub-kafka)
- Source ID: `site-docs-root-2`
- Final score: 217
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Feature Pub/Sub Managed Service for Apache Kafka Ease of use Easier to set up and maintain Requires more operational effort Cost model Pay-for-use Pay-for-capacity for compute Pay-for-use for networking and storage.
- Home Documentation Data analytics Pub/Sub Guides Send feedback Choose Pub/Sub or Cloud Managed Service for Apache Kafka Stay organized with collections Save and categorize content based on your preferences.
- Integration with Cloud products Both Google Managed Service for Apache Kafka and Pub/Sub integrates with various Google Cloud services like Dataflow, BigQuery, Cloud Storage, and more.
- Portability of Managed Service for Apache Kafka While Pub/Sub's autoscaling and global data distribution make it easier to operate, Apache Kafka APIs are much more broadly adopted.

### Topic properties \_|\_ Pub/Sub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/pubsub/docs/topic-properties](https://docs.cloud.google.com/pubsub/docs/topic-properties)
- Source ID: `site-api-reference`
- Final score: 207
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Pub/Sub encrypts messages with Google-owned and Google-managed encryption keys by default.
- Default = Not enabled Minimum value = 10 minutes Maximum value = 31 days Use a customer-managed encryption key (CMEK) Specifies if the topic is encrypted with a CMEK.
- Instead, Cloud KMS encrypts the Data Encryption Keys (DEKs) that Pub/Sub creates for each topic.
- If you specify this option, Pub/Sub uses the envelope encryption pattern with CMEK.

### "MCP Tools Reference: pubsub.googleapis.com \_|\_ Pub/Sub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription)
- Source ID: `site-api-reference`
- Final score: 175
- Re-rank relevance: N/A

Evidence snippets:
- To transform a message return a map with the following keys: - (required) 'data' : {string} - (optional) 'attributes' : {Object<string, string>} Returning empty attributes will remove all attributes from the message. @param {(Object<string, (string Object<string, string>)>} Pub/Sub message.
- To transform a message return a map with the following keys: - (required) 'data' : {string} - (optional) 'attributes' : {Object<string, string>} Returning empty attributes will remove all attributes from the message. @param {(Object<string, (string Object<string, string>)>} Pub/Sub message.
- Keys: - (required) 'data' : {string} - (required) 'attributes' : {Object<string, string>} @param {Object<string, any>} metadata - Pub/Sub message metadata.
- Keys: - (required) 'data' : {string} - (required) 'attributes' : {Object<string, string>} @param {Object<string, any>} metadata - Pub/Sub message metadata.

