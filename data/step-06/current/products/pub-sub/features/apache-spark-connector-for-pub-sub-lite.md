---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:10.317Z"
product_name: "Pub/Sub"
product_slug: "pub-sub"
feature_name: "Apache Spark connector for Pub/Sub Lite"
feature_slug: "apache-spark-connector-for-pub-sub-lite"
latest_feature_date: "2021-02-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/pubsub/docs/choose-pubsub-kafka"
  - "https://docs.cloud.google.com/pubsub/docs/connect_kafka"
  - "https://docs.cloud.google.com/pubsub/docs/create-amazon-msk-import-topic"
  - "https://docs.cloud.google.com/pubsub/docs/overview"
keywords:
  - "apache"
  - "spark"
  - "connector"
  - "for"
  - "pub"
  - "sub"
  - "lite"
  - "an"
---

# Apache Spark connector for Pub/Sub Lite

Product: Pub/Sub
Coverage: MEDIUM

## Step 02 Summary

An Apache Spark connector is available for Pub/Sub Lite.

## Extended Definition

An Apache Spark connector is available for Pub/Sub Lite.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/pubsub/docs/choose-pubsub-kafka](https://docs.cloud.google.com/pubsub/docs/choose-pubsub-kafka)
- [https://docs.cloud.google.com/pubsub/docs/connect_kafka](https://docs.cloud.google.com/pubsub/docs/connect_kafka)
- [https://docs.cloud.google.com/pubsub/docs/create-amazon-msk-import-topic](https://docs.cloud.google.com/pubsub/docs/create-amazon-msk-import-topic)
- [https://docs.cloud.google.com/pubsub/docs/overview](https://docs.cloud.google.com/pubsub/docs/overview)

## Supporting Pages

### "Choose Pub/Sub or Cloud Managed Service for Apache Kafka \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/docs/choose-pubsub-kafka](https://docs.cloud.google.com/pubsub/docs/choose-pubsub-kafka)
- Source ID: `site-docs-root-2`
- Final score: 279
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Feature Pub/Sub Managed Service for Apache Kafka Ease of use Easier to set up and maintain Requires more operational effort Cost model Pay-for-use Pay-for-capacity for compute Pay-for-use for networking and storage.
- Home Documentation Data analytics Pub/Sub Guides Send feedback Choose Pub/Sub or Cloud Managed Service for Apache Kafka Stay organized with collections Save and categorize content based on your preferences.
- Integration with Cloud products Both Google Managed Service for Apache Kafka and Pub/Sub integrates with various Google Cloud services like Dataflow, BigQuery, Cloud Storage, and more.
- Portability of Managed Service for Apache Kafka While Pub/Sub's autoscaling and global data distribution make it easier to operate, Apache Kafka APIs are much more broadly adopted.

### Connect Pub/Sub to Apache Kafka \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/pubsub/docs/connect_kafka](https://docs.cloud.google.com/pubsub/docs/connect_kafka)
- Source ID: `site-docs-root-2`
- Final score: 258
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- About the Pub/Sub Group Kafka Connector Apache Kafka is an open source platform for streaming events.
- The struct contains one field for each attribute, and a field named "message" whose value is the Pub/Sub message body (stored as bytes): { "message": "<Pub/Sub message body>", "<attribute-1>": "<value-1>", "<attribute-2>": "<value-2>", .... } In this case, you must use a value.converter that is compatible with struct schemas, such as org.apache.kafka.connect.json.JsonConverter .
- Use the gcloud CLI to read the events from Pub/Sub. gcloud pubsub subscriptions pull PUBSUB SUBSCRIPTION --auto-ack Forward messages from Pub/Sub to Kafka This section describes how to start the source connector, publish messages to Pub/Sub, and read the forwarded messages from Kafka.
- Example: offset.storage.file.filename = /tmp/connect.offsets Forward events from Kafka to Pub/Sub This section describes how to start the sink connector, publish events to Kafka, and then read the forwarded messages from Pub/Sub.

### "Create a Amazon Managed Streaming for Apache Kafka import topic \_|\_ Pub/Sub\

- URL: [https://docs.cloud.google.com/pubsub/docs/create-amazon-msk-import-topic](https://docs.cloud.google.com/pubsub/docs/create-amazon-msk-import-topic)
- Source ID: `site-docs-root-2`
- Final score: 240
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Data analytics Pub/Sub Guides Send feedback Create a Amazon Managed Streaming for Apache Kafka import topic Stay organized with collections Save and categorize content based on your preferences.
- An Amazon Managed Streaming for Apache Kafka (Amazon MSK) import topic lets you continuously ingest data from Amazon MSK as an external source and into Pub/Sub.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create and manage Amazon MSK import topics: Create an import topic: pubsub.topics.create Delete an import topic: pubsub.topics.delete Get an import topic: pubsub.topics.get List an import topic: pubsub.topics.list Publish to an import topic: pubsub.topics.publish and pubsub.serviceAgent Update an import topic: pubsub.topics.update Get the IAM policy for an import topic: pubsub.topics.getIamPolicy Configure the IAM policy for an import topic: pubsub.topics.setIamPolicy You might also be able to get these permissions with custom roles or other predefined roles .
- For Action allowed , select the following: List > DescribeTopic This action grants permission to allow the Pub/Sub ingestion topic to get details about the Amazon MSK Kafka topic.

### What is Pub/Sub? \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/pubsub/docs/overview](https://docs.cloud.google.com/pubsub/docs/overview)
- Source ID: `site-api-reference`
- Final score: 234
- Re-rank relevance: N/A

Evidence snippets:
- Comparing Pub/Sub to other messaging technologies Pub/Sub combines the horizontal scalability of Apache Kafka and Pulsar with features found in messaging middleware such as Apache ActiveMQ and RabbitMQ.
- Compare Service-to-service and service-to-client communication Pub/Sub is intended for service-to-service communication rather than communication with end-user or IoT clients.
- Dataflow templates for moving data from Pub/Sub to Cloud Storage, BigQuery, and other products are available in the Pub/Sub and Dataflow UIs in the Google Cloud console.
- Pub/Sub relies on a standard OAuth authentication used by other Google Cloud products and supports granular IAM, enabling access control for individual resources.

