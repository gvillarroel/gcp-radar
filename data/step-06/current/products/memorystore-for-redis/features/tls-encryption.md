---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:52.281Z"
product_name: "Memorystore for Redis"
product_slug: "memorystore-for-redis"
feature_name: "TLS encryption"
feature_slug: "tls-encryption"
latest_feature_date: "2020-12-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/redis/about-in-transit-encryption"
  - "https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance"
  - "https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview"
  - "https://docs.cloud.google.com/memorystore/docs/redis/cmek"
keywords:
  - "tls"
  - "encryption"
  - "memorystore"
  - "for"
  - "redis"
  - "supports"
---

# TLS encryption

Product: Memorystore for Redis
Coverage: MEDIUM

## Step 02 Summary

Memorystore for Redis supports TLS encryption.

## Extended Definition

Memorystore for Redis supports TLS encryption.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/redis/about-in-transit-encryption](https://docs.cloud.google.com/memorystore/docs/redis/about-in-transit-encryption)
- [https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance](https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance)
- [https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview](https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview)
- [https://docs.cloud.google.com/memorystore/docs/redis/cmek](https://docs.cloud.google.com/memorystore/docs/redis/cmek)

## Supporting Pages

### "About in-transit encryption \_|\_ Memorystore for Redis \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/about-in-transit-encryption](https://docs.cloud.google.com/memorystore/docs/redis/about-in-transit-encryption)
- Source ID: `site-docs-root-2`
- Final score: 248
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In-transit encryption prerequisites In order to use in-transit encryption with Memorystore for Redis, you need: A Redis client that supports TLS or a third-party TLS sidecar A Certificate Authority installed on the client machine accessing your Redis instance Native TLS was not supported prior to open source Redis version 6.0.
- Introduction Memorystore for Redis supports encrypting all Redis traffic using the Transport Layer Security (TLS) protocol.
- Memorystore for Redis only supports TLS protocol versions 1.2 or higher.
- Home Documentation Databases Memorystore Memorystore for Redis Guides Send feedback About in-transit encryption Stay organized with collections Save and categorize content based on your preferences.

### "Connect to a Redis instance \_|\_ Memorystore for Redis \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance](https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance)
- Source ID: `site-docs-root`
- Final score: 214
- Re-rank relevance: N/A

Evidence snippets:
- For a list of Google Cloud environments that Memorystore for Redis supports, see Supported environments .
- Make a new file in which to put Stunnel configuration information by running the following command: sudo vim /etc/stunnel/redis-client.conf Paste the following text in the file, replacing redis-instance-ip with the Redis instance's IP address: output=/tmp/stunnel.log CAfile=/tmp/server ca.pem client=yes pid=/var/run/stunnel.pid verifyChain=yes sslVersion=TLSv1.2 [redis] accept=127.0.0.1:6378 connect= redis-instance-ip :6378 Start stunnel by running the following command: sudo stunnel /etc/stunnel/redis-client.conf Verify that stunnel is running: ps aux grep stunnel Restart Stunnel by running the following commands: sudo systemctl restart stunnel4 Note: You can use the ps aux grep stunnel command before and after restarting stunnel to confirm that the restart was successful.
- Connect to a Redis instance from a Compute Engine VM using telnet You can connect to the Memorystore for Redis instance from any Compute Engine VM that uses the instance's authorized network with a supported RFC 1918 IP address .
- Home Documentation Databases Memorystore Memorystore for Redis Guides Send feedback Connect to a Redis instance Stay organized with collections Save and categorize content based on your preferences.

### Memorystore for Redis overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview](https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview)
- Source ID: `site-docs-root`
- Final score: 205
- Re-rank relevance: N/A

Evidence snippets:
- Scale, as needed: Memorystore for Redis enables scaling your instances up to a maximum of 300 GB and supports up to 16 Gbps of network throughput.
- Memorystore for Redis currently supports RDB snapshots and exporting data .
- Tier capabilities The following table describes the differences between the available Memorystore for Redis service tiers: Specifications Basic Tier Standard Tier (read replicas disabled) Standard Tier (read replicas enabled) Description Provides a cache with no replication Provides redundancy and availability using replication Provides redundancy and availability using replication to backup data, and multiple Read replicas to increase read throughput Max Redis primary size 300 GB 300 GB 300 GB Max network bandwidth 16 Gbps 16 Gbps 16 Gbps total for writes.
- Connect to a Memorystore for Redis instance You can use any standard Redis client on the following environments to connect to your Memorystore for Redis instance : App Engine flexible environment App Engine standard environment Compute Engine VM instances Cloud Run functions Cloud Run Google Kubernetes Engine clusters Some serverless environments require a Serverless VPC Access connector as a prerequisite for connectivity with Memorystore for Redis.

### "About customer-managed encryption keys (CMEK) \_|\_ Memorystore for Redis\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/cmek](https://docs.cloud.google.com/memorystore/docs/redis/cmek)
- Source ID: `site-iam-reference`
- Final score: 201
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Databases Memorystore Memorystore for Redis Guides Send feedback About customer-managed encryption keys (CMEK) Stay organized with collections Save and categorize content based on your preferences.
- If you want to control your encryption keys, then you can use customer-managed encryption keys (CMEKs) in Cloud KMS with CMEK-integrated services including Memorystore for Redis.
- Google-managed encryption versus customer-managed encryption The CMEK feature lets you use your own cryptographic keys for data at rest in Memorystore for Redis.
- The following diagrams show how data-at-rest encryption works inside a Memorystore for Redis instance when using default Google-managed encryption versus CMEK.

