---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:28.700Z"
product_name: "Google Cloud Managed Service for Apache Kafka"
product_slug: "google-cloud-managed-service-for-apache-kafka"
feature_name: "Managed Service for Apache Kafka remote MCP server"
feature_slug: "managed-service-for-apache-kafka-remote-mcp-server"
latest_feature_date: "2026-03-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/reference/mcp"
  - "https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/reference/mcp/tools_list/create_connector"
  - "https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/reference/mcp/tools_list/create_connect_cluster"
  - "https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/reference/mcp/tools_list/create_cluster"
keywords:
  - "managed"
  - "for"
  - "apache"
  - "kafka"
  - "remote"
  - "mcp"
  - "server"
  - "enables"
---

# Managed Service for Apache Kafka remote MCP server

Product: Google Cloud Managed Service for Apache Kafka
Coverage: MEDIUM

## Step 02 Summary

Remote MCP server enables LLM agents to create and manage Kafka clusters, Kafka Connect clusters, and related resources such as topics, consumer groups, connectors, and ACLs.

## Extended Definition

Remote MCP server enables LLM agents to create and manage Kafka clusters, Kafka Connect clusters, and related resources such as topics, consumer groups, connectors, and ACLs.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/reference/mcp](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/reference/mcp)
- [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/reference/mcp/tools_list/create_connector](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/reference/mcp/tools_list/create_connector)
- [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/reference/mcp/tools_list/create_connect_cluster](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/reference/mcp/tools_list/create_connect_cluster)
- [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/reference/mcp/tools_list/create_cluster](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/reference/mcp/tools_list/create_cluster)

## Supporting Pages

### "MCP Reference: managedkafka \_|\_ Google Cloud Managed Service for Apache\

- URL: [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/reference/mcp](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/reference/mcp)
- Source ID: `site-docs-reference`
- Final score: 330
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The managedkafka MCP server has the following tools: MCP Tools create cluster Create a new cluster for Google Cloud Managed service for Apache Kafka.
- The managedkafka MCP server has the following MCP endpoint: https://managedkafka.googleapis.com/mcp MCP Tools An MCP tool is a function or executable capability that an MCP server exposes to a LLM or AI application to perform an action in the real world.
- Home Documentation Data analytics Google Cloud Managed Service for Apache Kafka Reference Send feedback MCP Reference: managedkafka Stay organized with collections Save and categorize content based on your preferences.
- The structure of acl id defines the Resource Pattern (resource type, resource name, pattern type) of the acl. acl id is structured like one of the following: For ACLs on the cluster: cluster For ACLs on a single resource within the cluster: topic/{resource name} , consumerGroup/{resource name} , or transactionalId/{resource name} For ACLs on all resources that match a prefix: topicPrefixed/{resource name} , consumerGroupPrefixed/{resource name} , or transactionalIdPrefixed/{resource name} For ACLs on all resources of a given type (i.e. the wildcard literal " "): allTopics (represents topic/ ), allConsumerGroups (represents consumerGroup/ ), or allTransactionalIds (represents transactionalId/ ) get acl Get the details of an existing Google Cloud Managed Service for Apache Kafka ACL.

### "MCP Tools Reference: managedkafka \_|\_ Google Cloud Managed Service for\

- URL: [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/reference/mcp/tools_list/create_connector](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/reference/mcp/tools_list/create_connector)
- Source ID: `site-docs-reference`
- Final score: 303
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Data analytics Google Cloud Managed Service for Apache Kafka Reference Send feedback MCP Tools Reference: managedkafka Stay organized with collections Save and categorize content based on your preferences.
- Cloud Storage Sink connector Example Configuration: name : "GCS SINK CONNECTOR ID" connector.class (required): "io.aiven.kafka.connect.gcs.GcsSinkConnector" tasks.max : "1" topics (required): "TOPIC ID" gcs.bucket.name (required): "GCS BUCKET NAME" gcs.credentials.default : "true" format.output.type : "json" value.converter : "org.apache.kafka.connect.json.JsonConverter" value.converter.schemas.enable : "false" key.converter : "org.apache.kafka.connect.storage.StringConverter" Replace with these: TOPIC ID : The ID of the Managed Service for Apache Kafka topic from which the data flows to the Cloud Storage Sink connector.
- Curl Request curl --location 'https://managedkafka.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "create connector", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema Request for CreateConnector.
- TOPIC ID : The ID of the Managed Service for Apache Kafka topic from which the data flows to the BigQuery Sink connector.

### "MCP Tools Reference: managedkafka \_|\_ Google Cloud Managed Service for\

- URL: [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/reference/mcp/tools_list/create_connect_cluster](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/reference/mcp/tools_list/create_connect_cluster)
- Source ID: `site-docs-reference`
- Final score: 299
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Data analytics Google Cloud Managed Service for Apache Kafka Reference Send feedback MCP Tools Reference: managedkafka Stay organized with collections Save and categorize content based on your preferences.
- Curl Request curl --location 'https://managedkafka.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "create connect cluster", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema Request for CreateConnectCluster.
- Please see https://cloud.google.com/managed-service-for-apache-kafka/docs/connect-cluster/create-connect-cluster#worker-subnet for more information. dnsDomainNames[] string Optional.
- Tool: create connect cluster Create a new Google Cloud Managed Service for Apache Kafka Connect cluster.

### "MCP Tools Reference: managedkafka \_|\_ Google Cloud Managed Service for\

- URL: [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/reference/mcp/tools_list/create_cluster](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/reference/mcp/tools_list/create_cluster)
- Source ID: `site-docs-reference`
- Final score: 295
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Data analytics Google Cloud Managed Service for Apache Kafka Reference Send feedback MCP Tools Reference: managedkafka Stay organized with collections Save and categorize content based on your preferences.
- Curl Request curl --location 'https://managedkafka.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "create cluster", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema Request for CreateCluster.
- Tool: create cluster Create a new cluster for Google Cloud Managed service for Apache Kafka.
- Refer to the Apache Kafka documentation for ssl.principal.mapping.rules for the precise formatting details and syntax.

