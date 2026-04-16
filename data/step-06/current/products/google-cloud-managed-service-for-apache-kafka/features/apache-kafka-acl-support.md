---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:28.705Z"
product_name: "Google Cloud Managed Service for Apache Kafka"
product_slug: "google-cloud-managed-service-for-apache-kafka"
feature_name: "Apache Kafka ACL support"
feature_slug: "apache-kafka-acl-support"
latest_feature_date: "2025-05-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/access-control-kafka-acls"
  - "https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/authn-types-kafka"
  - "https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/reference/mcp"
  - "https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/overview"
keywords:
  - "apache"
  - "kafka"
  - "acl"
  - "managed"
  - "for"
  - "supports"
  - "configuring"
  - "standard"
---

# Apache Kafka ACL support

Product: Google Cloud Managed Service for Apache Kafka
Coverage: MEDIUM

## Step 02 Summary

Managed Service for Apache Kafka supports configuring standard Apache Kafka ACLs through REST, gRPC, and gcloud CLI.

## Extended Definition

Managed Service for Apache Kafka supports configuring standard Apache Kafka ACLs through REST, gRPC, and gcloud CLI.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/access-control-kafka-acls](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/access-control-kafka-acls)
- [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/authn-types-kafka](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/authn-types-kafka)
- [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/reference/mcp](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/reference/mcp)
- [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/overview](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/overview)

## Supporting Pages

### "Access control with Kafka ACLs \_|\_ Google Cloud Managed Service for Apache\

- URL: [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/access-control-kafka-acls](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/access-control-kafka-acls)
- Source ID: `site-iam-reference`
- Final score: 336
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, to re-allow topic deletion: gcloud managed-kafka acls remove-acl-entry allTopics \ --cluster = CLUSTER ID \ --location = LOCATION --principal = 'User:test-kafka-client@test-project.iam.gserviceaccount.com' \ --operation = DELETE \ --permission-type = DENY \ --host = ' ' Troubleshooting ACLs The Apache Kafka Standard Authorizer writes audit logs by default on authorization denials.
- Managed Service for Apache Kafka enables the out-of-the-box StandardAuthorizer , which stores ACLs in the KRaft-based Kafka cluster metadata.
- Managed Service for Apache Kafka only supports ACLs with host ' ' .
- Managed Service for Apache Kafka only supports ACLs with host ' ' .

### "Authentication types for Kafka brokers \_|\_ Google Cloud Managed Service\

- URL: [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/authn-types-kafka](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/authn-types-kafka)
- Source ID: `site-iam-reference`
- Final score: 290
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Workflow for configuring SASL/PLAIN or SASL/OAUTHBEARER Configuring a client to use SASL authentication with Managed Service for Apache Kafka involves granting permissions to the client's identity and then configuring the client application based on the chosen SASL mechanism.
- Workflow for configuring mTLS Configuring mTLS for Managed Service for Apache Kafka involves configuring certificate authorities, the Kafka cluster, and your Kafka clients.
- Managed Service for Apache Kafka supports mTLS authentication with client certificates issued by Certificate Authorities found in the CA Service .
- For more information about how to configure Kafka ACLs, see Create a Managed Service for Apache Kafka ACL .

### "MCP Reference: managedkafka \_|\_ Google Cloud Managed Service for Apache\

- URL: [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/reference/mcp](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/reference/mcp)
- Source ID: `site-docs-reference`
- Final score: 290
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The structure of acl id defines the Resource Pattern (resource type, resource name, pattern type) of the acl. acl id is structured like one of the following: For ACLs on the cluster: cluster For ACLs on a single resource within the cluster: topic/{resource name} , consumerGroup/{resource name} , or transactionalId/{resource name} For ACLs on all resources that match a prefix: topicPrefixed/{resource name} , consumerGroupPrefixed/{resource name} , or transactionalIdPrefixed/{resource name} For ACLs on all resources of a given type (i.e. the wildcard literal " "): allTopics (represents topic/ ), allConsumerGroups (represents consumerGroup/ ), or allTransactionalIds (represents transactionalId/ ) get acl Get the details of an existing Google Cloud Managed Service for Apache Kafka ACL.
- Important Notes: The AI agent should use the get acl tool to retrieve the details of the acl entry to be removed, so that the required fields ( principal , permission type , operation , and host ) can be filled in the RemoveAclEntryRequest . create connect cluster Create a new Google Cloud Managed Service for Apache Kafka Connect cluster.
- For the transactionalId resource type only DESCRIBE, WRITE, and ALL are allowed. remove acl entry Removes an ACL entry from an existing Google Cloud Managed service for Apache Kafka ACL.
- Please provide the Project ID, Location, Cluster ID, and ACL ID. list acls List all ACLs for Google Cloud Managed Service for Apache Kafka for a given project, location, and cluster.

### "Managed Service for Apache Kafka overview \_|\_ Google Cloud Managed Service\

- URL: [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/overview](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 288
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Data analytics Google Cloud Managed Service for Apache Kafka Guides Send feedback Managed Service for Apache Kafka overview Stay organized with collections Save and categorize content based on your preferences.
- These connectors let you connect your Managed Service for Apache Kafka clusters to various systems, including other Kafka deployments and Google Cloud services like BigQuery, Cloud Storage, and Pub/Sub.
- Transparent cost The pricing model for Managed Service for Apache Kafka is similar to the charges you see when you run Apache Kafka yourself on Compute Engine .
- Compatible because we run Apache Kafka Finally, Managed Service for Apache Kafka runs the same open source software you may already run in your environment.

