---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:28.702Z"
product_name: "Google Cloud Managed Service for Apache Kafka"
product_slug: "google-cloud-managed-service-for-apache-kafka"
feature_name: "Organization Policy Service custom constraints"
feature_slug: "organization-policy-service-custom-constraints"
latest_feature_date: "2025-09-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/authentication"
  - "https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/access-control"
  - "https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/authentication-kafka-mtls"
  - "https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/reference/mcp"
keywords:
  - "organization"
  - "policy"
  - "custom"
  - "constraints"
  - "managed"
  - "for"
  - "apache"
  - "kafka"
---

# Organization Policy Service custom constraints

Product: Google Cloud Managed Service for Apache Kafka
Coverage: MEDIUM

## Step 02 Summary

Managed Service for Apache Kafka supports Organization Policy Service custom constraints to restrict specific resource operations.

## Extended Definition

Managed Service for Apache Kafka supports Organization Policy Service custom constraints to restrict specific resource operations.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/authentication](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/authentication)
- [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/access-control](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/access-control)
- [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/authentication-kafka-mtls](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/authentication-kafka-mtls)
- [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/reference/mcp](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/reference/mcp)

## Supporting Pages

### "Authenticate to Managed Service for Apache Kafka \_|\_ Google Cloud Managed\

- URL: [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/authentication](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/authentication)
- Source ID: `site-iam-reference`
- Final score: 268
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can access the API in the following ways: Client libraries Google Cloud CLI REST Client libraries The Managed Service for Apache Kafka client libraries provide high-level language support for authenticating to Managed Service for Apache Kafka programmatically.
- Home Documentation Data analytics Google Cloud Managed Service for Apache Kafka Guides Send feedback Authenticate to Managed Service for Apache Kafka Stay organized with collections Save and categorize content based on your preferences.
- Google Cloud CLI When you use the gcloud CLI to access Managed Service for Apache Kafka, you log in to the gcloud CLI with a user account, which provides the credentials used by the gcloud CLI commands.
- How you authenticate to Google Cloud Managed Service for Apache Kafka depends on the interface you use to access the API and the environment where your code is running.

### "Access control with IAM \_|\_ Google Cloud Managed Service for Apache Kafka\

- URL: [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/access-control](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/access-control)
- Source ID: `site-iam-reference`
- Final score: 266
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Data analytics Google Cloud Managed Service for Apache Kafka Guides Send feedback Access control with IAM Stay organized with collections Save and categorize content based on your preferences.
- IAM controls access at the Google Cloud resource level: IAM controls determine who can manage your Managed Service for Apache Kafka resources like clusters, topics, or ACLs using Google Cloud APIs and tools.
- The Managed Service for Apache Kafka service agent requires the Managed Kafka Service Agent ( roles/managedkafka.serviceAgent ) role on the project to manage Managed Service for Apache Kafka resources.
- A special principal—The Managed Kafka Service Agent Google Cloud Managed Service for Apache Kafka uses a Google Cloud managed service account known as a service agent to access your resources.

### "Configure mTLS authentication \_|\_ Google Cloud Managed Service for Apache\

- URL: [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/authentication-kafka-mtls](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/authentication-kafka-mtls)
- Source ID: `site-iam-reference`
- Final score: 253
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Run the gcloud managed-kafka acls add-entry command to grant WRITE permission on the orders-topic . gcloud managed-kafka acls add-entry topic/orders-topic \ --cluster = CLUSTER ID \ --location = REGION \ --principal = User:order-processing-app \ --operation = WRITE \ --permission-type = ALLOW \ --host = " " Replace the following: CLUSTER ID : the ID of the Managed Service for Apache Kafka cluster that you are creating.
- For more information about how to set up a client, see Quickstart: Create a Managed Service for Apache Kafka cluster and connect a client . security.protocol = SSL ssl.keystore.location = KEYSTORE LOCATION ssl.keystore.password = KEYSTORE PASSWORD bootstrap.servers = CLUSTER BOOTSTRAP ADDRESS Replace the following: KEYSTORE LOCATION : the path to the .jks file.
- To update your cluster, use the gcloud managed-kafka clusters update command with the --ssl-principal-mapping-rules flag. gcloud managed-kafka clusters update CLUSTER ID \ --location = REGION \ --ssl-principal-mapping-rules = ' MAPPING RULE ' Replace the following: CLUSTER ID : the ID of the Managed Service for Apache Kafka cluster that you are creating.
- Grant the service agent access to CA pools If your CA Service CA pool and your Managed Service for Apache Kafka cluster are in different Google Cloud projects, you must grant the cluster's service agent permission to access the CA pool.

### "MCP Reference: managedkafka \_|\_ Google Cloud Managed Service for Apache\

- URL: [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/reference/mcp](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/reference/mcp)
- Source ID: `site-docs-reference`
- Final score: 252
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The structure of acl id defines the Resource Pattern (resource type, resource name, pattern type) of the acl. acl id is structured like one of the following: For ACLs on the cluster: cluster For ACLs on a single resource within the cluster: topic/{resource name} , consumerGroup/{resource name} , or transactionalId/{resource name} For ACLs on all resources that match a prefix: topicPrefixed/{resource name} , consumerGroupPrefixed/{resource name} , or transactionalIdPrefixed/{resource name} For ACLs on all resources of a given type (i.e. the wildcard literal " "): allTopics (represents topic/ ), allConsumerGroups (represents consumerGroup/ ), or allTransactionalIds (represents transactionalId/ ) get acl Get the details of an existing Google Cloud Managed Service for Apache Kafka ACL.
- Cloud Storage Sink connector Example Configuration: name : "GCS SINK CONNECTOR ID" connector.class (required): "io.aiven.kafka.connect.gcs.GcsSinkConnector" tasks.max : "1" topics (required): "TOPIC ID" gcs.bucket.name (required): "GCS BUCKET NAME" gcs.credentials.default : "true" format.output.type : "json" value.converter : "org.apache.kafka.connect.json.JsonConverter" value.converter.schemas.enable : "false" key.converter : "org.apache.kafka.connect.storage.StringConverter" Replace with these: TOPIC ID : The ID of the Managed Service for Apache Kafka topic from which the data flows to the Cloud Storage Sink connector.
- Cloud Storage Sink connector Example Configuration: name : "GCS SINK CONNECTOR ID" connector.class (required): "io.aiven.kafka.connect.gcs.GcsSinkConnector" tasks.max : "1" topics (required): "TOPIC ID" gcs.bucket.name (required): "GCS BUCKET NAME" gcs.credentials.default : "true" format.output.type : "json" value.converter : "org.apache.kafka.connect.json.JsonConverter" value.converter.schemas.enable : "false" key.converter : "org.apache.kafka.connect.storage.StringConverter" Replace with these: TOPIC ID : The ID of the Managed Service for Apache Kafka topic from which the data flows to the Cloud Storage Sink connector.
- A value of will overwrite all fields. topic : The topic configuration, including the required partition count and replication factor . topic.name : The name of the topic to be updated in the format projects/{project}/locations/{location}/clusters/{cluster}/topics/{topic} . delete topic Deletes a Google Cloud Managed Service for Apache Kafka topic.

