---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:28.701Z"
product_name: "Google Cloud Managed Service for Apache Kafka"
product_slug: "google-cloud-managed-service-for-apache-kafka"
feature_name: "Kafka Connect"
feature_slug: "kafka-connect"
latest_feature_date: "2025-10-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/connect-cluster/connectors-overview"
  - "https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/limitations"
  - "https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/reference/mcp/tools_list/create_connect_cluster"
  - "https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/choose-kafka-pubsub"
keywords:
  - "kafka"
  - "connect"
  - "lets"
  - "you"
  - "stream"
  - "at"
  - "scale"
  - "between"
---

# Kafka Connect

Product: Google Cloud Managed Service for Apache Kafka
Coverage: MEDIUM

## Step 02 Summary

Kafka Connect lets you stream data at scale between Managed Service for Apache Kafka clusters and other systems; Managed Service for Apache Kafka supports Kafka Connect with curated built-in connector plugins hosted in Connect clusters.

## Extended Definition

Kafka Connect lets you stream data at scale between Managed Service for Apache Kafka clusters and other systems; Managed Service for Apache Kafka supports Kafka Connect with curated built-in connector plugins hosted in Connect clusters.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/connect-cluster/connectors-overview](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/connect-cluster/connectors-overview)
- [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/limitations](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/limitations)
- [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/reference/mcp/tools_list/create_connect_cluster](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/reference/mcp/tools_list/create_connect_cluster)
- [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/choose-kafka-pubsub](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/choose-kafka-pubsub)

## Supporting Pages

### "Connectors overview \_|\_ Google Cloud Managed Service for Apache Kafka\

- URL: [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/connect-cluster/connectors-overview](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/connect-cluster/connectors-overview)
- Source ID: `site-iam-reference`
- Final score: 272
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, to configure a sink connector to disregard messages that contain a DoNotProcess header key, you would add the following configuration to your connector: transforms=dropMessage transforms.dropMessage.type=org.apache.kafka.connect.transforms.Filter transforms.dropMessage.predicate=hasKey predicates=hasKey predicates.hasKey.type=org.apache.kafka.connect.transforms.predicates.HasHeaderKey predicates.hasKey.name=DoNotProcess This configuration does the following: Configures a predicate named hasKey of type org.apache.kafka.connect.transforms.predicates.HasHeaderKey .
- The available connector types include: MirrorMaker 2.0 connectors Source connector Checkpoint connector Heartbeat connector BigQuery Sink connector Cloud Storage Sink connector Pub/Sub Source connector Pub/Sub Sink connector MirrorMaker 2.0 connectors are specifically designed for data replication and disaster recovery between Kafka clusters.
- Home Documentation Data analytics Google Cloud Managed Service for Apache Kafka Guides Send feedback Connectors overview Stay organized with collections Save and categorize content based on your preferences.
- Use the Pub/Sub Source connector for the following use cases: Real-time data ingestion, bringing data from cloud services or other applications and publishing to Pub/Sub into Kafka for stream processing.

### "Managed Service for Apache Kafka overview \_|\_ Google Cloud Managed Service\

- URL: [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/limitations](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/limitations)
- Source ID: `site-docs-root`
- Final score: 230
- Re-rank relevance: N/A

Evidence snippets:
- You can synchronize the data between two clusters by using tools such as MirrorMaker 2.0 from Kafka Connect.
- Home Documentation Data analytics Google Cloud Managed Service for Apache Kafka Guides Send feedback Managed Service for Apache Kafka overview Stay organized with collections Save and categorize content based on your preferences.
- These connectors let you connect your Managed Service for Apache Kafka clusters to various systems, including other Kafka deployments and Google Cloud services like BigQuery, Cloud Storage, and Pub/Sub.
- Compatible because we run Apache Kafka Finally, Managed Service for Apache Kafka runs the same open source software you may already run in your environment.

### "MCP Tools Reference: managedkafka \_|\_ Google Cloud Managed Service for\

- URL: [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/reference/mcp/tools_list/create_connect_cluster](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/reference/mcp/tools_list/create_connect_cluster)
- Source ID: `site-docs-reference`
- Final score: 230
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Curl Request curl --location 'https://managedkafka.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "create connect cluster", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema Request for CreateConnectCluster.
- Format: projects/<project-id>/secrets/<secret-name>/versions/<version-id> . config (optional): Key-value pairs for Kafka Connect worker configuration overrides. labels (optional): Key-value pairs to help you organize your Connect clusters.
- You must also specify the connect cluster configuration, including: kafka cluster (required): The full resource name of the Managed Service for Kafka cluster this Connect cluster will attach to.
- ConnectCluster JSON representation { "name" : string , "kafkaCluster" : string , "createTime" : string , "updateTime" : string , "labels" : { string : string , ... } , "capacityConfig" : { object ( CapacityConfig ) } , "state" : enum ( State ) , "config" : { string : string , ... } , // Union field platform config can be only one of the following: "gcpConfig" : { object ( ConnectGcpConfig ) } // End of list of possible types for union field platform config . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . } Fields name string Identifier.

### "Choose Cloud Managed Service for Apache Kafka or Pub/Sub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/choose-kafka-pubsub](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/choose-kafka-pubsub)
- Source ID: `site-iam-reference`
- Final score: 228
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Automatic storage management Yes Yes Automatic software upgrades Yes Yes Customer support Yes Yes Kafka Connect Service Not applicable With user-provided Connect services Schema support Yes With user-provided schema registry Compatible with ks qIDB, KSQL No Yes Support for OSS connectors Yes for Kafka and Flink connectors No Integration with Data Lake and Data Warehouse Yes Yes Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Data analytics Google Cloud Managed Service for Apache Kafka Guides Send feedback Choose Cloud Managed Service for Apache Kafka or Pub/Sub Stay organized with collections Save and categorize content based on your preferences.
- If you plan to use independent messaging systems in different on-premises or cloud-provider environments, Managed Service for Apache Kafka can give you a more consistent experience across your applications.
- Pub/Sub, with its built-in dead-letter queues (DLQs) and support for out-of-order message processing, lets your system remain operational even when encountering problematic messages.

