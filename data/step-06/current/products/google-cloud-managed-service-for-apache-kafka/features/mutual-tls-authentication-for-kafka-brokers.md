---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:28.703Z"
product_name: "Google Cloud Managed Service for Apache Kafka"
product_slug: "google-cloud-managed-service-for-apache-kafka"
feature_name: "mutual TLS authentication for Kafka brokers"
feature_slug: "mutual-tls-authentication-for-kafka-brokers"
latest_feature_date: "2025-09-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/authn-types-kafka"
  - "https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/authentication-kafka-mtls"
  - "https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/overview"
  - "https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/limitations"
keywords:
  - "mutual"
  - "tls"
  - "authentication"
  - "for"
  - "kafka"
  - "brokers"
  - "lets"
  - "you"
---

# mutual TLS authentication for Kafka brokers

Product: Google Cloud Managed Service for Apache Kafka
Coverage: MEDIUM

## Step 02 Summary

Mutual TLS lets you use certificate-based authentication with Managed Service for Apache Kafka brokers.

## Extended Definition

Mutual TLS lets you use certificate-based authentication with Managed Service for Apache Kafka brokers.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/authn-types-kafka](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/authn-types-kafka)
- [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/authentication-kafka-mtls](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/authentication-kafka-mtls)
- [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/overview](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/overview)
- [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/limitations](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/limitations)

## Supporting Pages

### "Authentication types for Kafka brokers \_|\_ Google Cloud Managed Service\

- URL: [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/authn-types-kafka](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/authn-types-kafka)
- Source ID: `site-iam-reference`
- Final score: 267
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Data analytics Google Cloud Managed Service for Apache Kafka Guides Send feedback Authentication types for Kafka brokers Stay organized with collections Save and categorize content based on your preferences.
- Client configuration JAAS config with specialized login handler class (Java) or a local auth server (non-Java) JAAS config with standard PlainLoginModule (Java) Keystore and truststore properties (For example— security.protocol=SSL ) Cluster availability All clusters All clusters Clusters created after June 24, 2025 Choose SASL versus mTLS Your choice of authentication method is guided by your organization's security policies and existing infrastructure.
- For Google Cloud Managed Service for Apache Kafka client applications running on Google Cloud services like Google Kubernetes Engine, Compute Engine, Cloud Run, or Cloud Run functions, you have the following authentication options: SASL/OAUTHBEARER (recommended) : this is the most seamless and secure method for clients within Google Cloud.
- The client then uses this token for authentication, which significantly reduces the security risk associated with static credential files. mTLS : this method is provider-agnostic and is a good fit if your organization already uses a Public Key Infrastructure (PKI) to manage TLS certificates for service identity.

### "Configure mTLS authentication \_|\_ Google Cloud Managed Service for Apache\

- URL: [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/authentication-kafka-mtls](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/authentication-kafka-mtls)
- Source ID: `site-iam-reference`
- Final score: 259
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For foundational concepts, see the following documents: CA Service overview Authentication for Kafka clients Access control with IAM and Kafka ACLs Before you begin Before you configure mTLS authentication, complete the following: Confirm cluster eligibility.
- Home Documentation Data analytics Google Cloud Managed Service for Apache Kafka Guides Send feedback Configure mTLS authentication Stay organized with collections Save and categorize content based on your preferences.
- You can configure your Managed Service for Apache Kafka cluster to authenticate Kafka clients using mutual TLS (mTLS).
- Required roles and permissions To configure mTLS, you need to ensure both you (the user) and the Managed Service for Apache Kafka service agent have the necessary IAM permissions.

### "Managed Service for Apache Kafka overview \_|\_ Google Cloud Managed Service\

- URL: [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/overview](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 232
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Configure SASL authentication . mTLS : Principals authenticating with mTLS are authorized through Kafka ACLs.
- For example, if you configure a cluster with 70 vCPUs and 130 GiB RAM, along with a replication factor of 3, the following calculation determines the number of brokers: Calculate the number of brokers required to account for vCPUs: ceiling(70 vCPUs / 15 vCPUs) = 5 brokers Calculate the number of brokers required to account for memory: ceiling(130 GiB / 120 GiB) = 2 brokers In this scenario, the cluster has 5 brokers, because the number of brokers is determined by the number of vCPUs.
- Home Documentation Data analytics Google Cloud Managed Service for Apache Kafka Guides Send feedback Managed Service for Apache Kafka overview Stay organized with collections Save and categorize content based on your preferences.
- Authentication The service supports two authentication methods: Simple Authentication and Security Layer (SASL) and mutual TLS (mTLS). mTLS authentication is available on clusters created after June 24, 2025.

### "Managed Service for Apache Kafka overview \_|\_ Google Cloud Managed Service\

- URL: [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/limitations](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/limitations)
- Source ID: `site-docs-root`
- Final score: 232
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Configure SASL authentication . mTLS : Principals authenticating with mTLS are authorized through Kafka ACLs.
- For example, if you configure a cluster with 70 vCPUs and 130 GiB RAM, along with a replication factor of 3, the following calculation determines the number of brokers: Calculate the number of brokers required to account for vCPUs: ceiling(70 vCPUs / 15 vCPUs) = 5 brokers Calculate the number of brokers required to account for memory: ceiling(130 GiB / 120 GiB) = 2 brokers In this scenario, the cluster has 5 brokers, because the number of brokers is determined by the number of vCPUs.
- Home Documentation Data analytics Google Cloud Managed Service for Apache Kafka Guides Send feedback Managed Service for Apache Kafka overview Stay organized with collections Save and categorize content based on your preferences.
- Authentication The service supports two authentication methods: Simple Authentication and Security Layer (SASL) and mutual TLS (mTLS). mTLS authentication is available on clusters created after June 24, 2025.

