---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:28.702Z"
product_name: "Google Cloud Managed Service for Apache Kafka"
product_slug: "google-cloud-managed-service-for-apache-kafka"
feature_name: "VPC Service Controls integration"
feature_slug: "vpc-service-controls-integration"
latest_feature_date: "2025-09-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/overview"
  - "https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/limitations"
  - "https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/choose-kafka-pubsub"
  - "https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/reference/mcp"
keywords:
  - "vpc"
  - "controls"
  - "integration"
  - "managed"
  - "for"
  - "apache"
  - "kafka"
  - "integrates"
---

# VPC Service Controls integration

Product: Google Cloud Managed Service for Apache Kafka
Coverage: MEDIUM

## Step 02 Summary

Managed Service for Apache Kafka integrates with VPC Service Controls; Managed Service for Apache Kafka integrates with VPC Service Controls.

## Extended Definition

Managed Service for Apache Kafka integrates with VPC Service Controls; Managed Service for Apache Kafka integrates with VPC Service Controls.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/overview](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/overview)
- [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/limitations](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/limitations)
- [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/choose-kafka-pubsub](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/choose-kafka-pubsub)
- [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/reference/mcp](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/reference/mcp)

## Supporting Pages

### "Managed Service for Apache Kafka overview \_|\_ Google Cloud Managed Service\

- URL: [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/overview](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 302
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Data integration with Kafka Connect Managed Service for Apache Kafka simplifies data integration through Kafka Connect.
- Home Documentation Data analytics Google Cloud Managed Service for Apache Kafka Guides Send feedback Managed Service for Apache Kafka overview Stay organized with collections Save and categorize content based on your preferences.
- These connectors let you connect your Managed Service for Apache Kafka clusters to various systems, including other Kafka deployments and Google Cloud services like BigQuery, Cloud Storage, and Pub/Sub.
- Transparent cost The pricing model for Managed Service for Apache Kafka is similar to the charges you see when you run Apache Kafka yourself on Compute Engine .

### "Managed Service for Apache Kafka overview \_|\_ Google Cloud Managed Service\

- URL: [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/limitations](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/limitations)
- Source ID: `site-docs-root`
- Final score: 302
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Data integration with Kafka Connect Managed Service for Apache Kafka simplifies data integration through Kafka Connect.
- Home Documentation Data analytics Google Cloud Managed Service for Apache Kafka Guides Send feedback Managed Service for Apache Kafka overview Stay organized with collections Save and categorize content based on your preferences.
- These connectors let you connect your Managed Service for Apache Kafka clusters to various systems, including other Kafka deployments and Google Cloud services like BigQuery, Cloud Storage, and Pub/Sub.
- Transparent cost The pricing model for Managed Service for Apache Kafka is similar to the charges you see when you run Apache Kafka yourself on Compute Engine .

### "Choose Cloud Managed Service for Apache Kafka or Pub/Sub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/choose-kafka-pubsub](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/choose-kafka-pubsub)
- Source ID: `site-iam-reference`
- Final score: 248
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Integration with Cloud products Both Google Managed Service for Apache Kafka and Pub/Sub integrates with various Google Cloud services like Dataflow, BigQuery, Cloud Storage, and more.
- Automatic storage management Yes Yes Automatic software upgrades Yes Yes Customer support Yes Yes Kafka Connect Service Not applicable With user-provided Connect services Schema support Yes With user-provided schema registry Compatible with ks qIDB, KSQL No Yes Support for OSS connectors Yes for Kafka and Flink connectors No Integration with Data Lake and Data Warehouse Yes Yes Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Data analytics Google Cloud Managed Service for Apache Kafka Guides Send feedback Choose Cloud Managed Service for Apache Kafka or Pub/Sub Stay organized with collections Save and categorize content based on your preferences.
- Feature Pub/Sub Managed Service for Apache Kafka Ease of use Easier to set up and maintain Requires more operational effort Cost model Pay-for-use Pay-for-capacity for compute Pay-for-use for networking and storage.

### "MCP Reference: managedkafka \_|\_ Google Cloud Managed Service for Apache\

- URL: [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/reference/mcp](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/reference/mcp)
- Source ID: `site-docs-reference`
- Final score: 244
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The structure of acl id defines the Resource Pattern (resource type, resource name, pattern type) of the acl. acl id is structured like one of the following: For ACLs on the cluster: cluster For ACLs on a single resource within the cluster: topic/{resource name} , consumerGroup/{resource name} , or transactionalId/{resource name} For ACLs on all resources that match a prefix: topicPrefixed/{resource name} , consumerGroupPrefixed/{resource name} , or transactionalIdPrefixed/{resource name} For ACLs on all resources of a given type (i.e. the wildcard literal " "): allTopics (represents topic/ ), allConsumerGroups (represents consumerGroup/ ), or allTransactionalIds (represents transactionalId/ ) get acl Get the details of an existing Google Cloud Managed Service for Apache Kafka ACL.
- Cloud Storage Sink connector Example Configuration: name : "GCS SINK CONNECTOR ID" connector.class (required): "io.aiven.kafka.connect.gcs.GcsSinkConnector" tasks.max : "1" topics (required): "TOPIC ID" gcs.bucket.name (required): "GCS BUCKET NAME" gcs.credentials.default : "true" format.output.type : "json" value.converter : "org.apache.kafka.connect.json.JsonConverter" value.converter.schemas.enable : "false" key.converter : "org.apache.kafka.connect.storage.StringConverter" Replace with these: TOPIC ID : The ID of the Managed Service for Apache Kafka topic from which the data flows to the Cloud Storage Sink connector.
- Cloud Storage Sink connector Example Configuration: name : "GCS SINK CONNECTOR ID" connector.class (required): "io.aiven.kafka.connect.gcs.GcsSinkConnector" tasks.max : "1" topics (required): "TOPIC ID" gcs.bucket.name (required): "GCS BUCKET NAME" gcs.credentials.default : "true" format.output.type : "json" value.converter : "org.apache.kafka.connect.json.JsonConverter" value.converter.schemas.enable : "false" key.converter : "org.apache.kafka.connect.storage.StringConverter" Replace with these: TOPIC ID : The ID of the Managed Service for Apache Kafka topic from which the data flows to the Cloud Storage Sink connector.
- A value of will overwrite all fields. topic : The topic configuration, including the required partition count and replication factor . topic.name : The name of the topic to be updated in the format projects/{project}/locations/{location}/clusters/{cluster}/topics/{topic} . delete topic Deletes a Google Cloud Managed Service for Apache Kafka topic.

