---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:52.279Z"
product_name: "Memorystore for Redis"
product_slug: "memorystore-for-redis"
feature_name: "Redis version 6.x support"
feature_slug: "redis-version-6-x-support"
latest_feature_date: "2021-06-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/redis/about-upgrading-version"
  - "https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance"
  - "https://docs.cloud.google.com/memorystore/docs/redis/about-in-transit-encryption"
  - "https://docs.cloud.google.com/memorystore/docs/redis/supported-versions"
keywords:
  - "redis"
  - "version"
  - "memorystore"
  - "for"
  - "supports"
  - "in"
  - "preview"
---

# Redis version 6.x support

Product: Memorystore for Redis
Coverage: MEDIUM

## Step 02 Summary

Memorystore for Redis supports Redis version 6.x in Preview.

## Extended Definition

Memorystore for Redis supports Redis version 6.x in Preview.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/redis/about-upgrading-version](https://docs.cloud.google.com/memorystore/docs/redis/about-upgrading-version)
- [https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance](https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance)
- [https://docs.cloud.google.com/memorystore/docs/redis/about-in-transit-encryption](https://docs.cloud.google.com/memorystore/docs/redis/about-in-transit-encryption)
- [https://docs.cloud.google.com/memorystore/docs/redis/supported-versions](https://docs.cloud.google.com/memorystore/docs/redis/supported-versions)

## Supporting Pages

### "About upgrading the Redis version of an instance \_|\_ Memorystore for Redis\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/about-upgrading-version](https://docs.cloud.google.com/memorystore/docs/redis/about-upgrading-version)
- Source ID: `site-docs-root-2`
- Final score: 280
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Databases Memorystore Memorystore for Redis Guides Send feedback About upgrading the Redis version of an instance Stay organized with collections Save and categorize content based on your preferences.
- Best practices for upgrading an instance's Redis version We recommend that you upgrade to version 7.0 and later because Certificate Authority rotation no longer drops connections.
- This page describes how your Memorystore instance behaves during a version upgrade operation, how an upgrade operation can affect your application, and when you should run an upgrade operation.
- For Standard Tier instances, to increase the speed and reliability of your version upgrade operation, upgrade your instance during periods of low instance traffic.

### "Connect to a Redis instance \_|\_ Memorystore for Redis \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance](https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance)
- Source ID: `site-docs-root`
- Final score: 267
- Re-rank relevance: N/A

Evidence snippets:
- Make a new file in which to put Stunnel configuration information by running the following command: sudo vim /etc/stunnel/redis-client.conf Paste the following text in the file, replacing redis-instance-ip with the Redis instance's IP address: output=/tmp/stunnel.log CAfile=/tmp/server ca.pem client=yes pid=/var/run/stunnel.pid verifyChain=yes sslVersion=TLSv1.2 [redis] accept=127.0.0.1:6378 connect= redis-instance-ip :6378 Start stunnel by running the following command: sudo stunnel /etc/stunnel/redis-client.conf Verify that stunnel is running: ps aux grep stunnel Restart Stunnel by running the following commands: sudo systemctl restart stunnel4 Note: You can use the ps aux grep stunnel command before and after restarting stunnel to confirm that the restart was successful.
- If your cluster is version 1.7 or lower, or your version 1.8 or higher cluster doesn't have IP aliases enabled, follow these workaround steps before trying to connect to your instance: Workaround Run the following commands, replacing RESERVED IP RANGE with the reserved IP range of your instance: git clone https://github.com/bowei/k8s-custom-iptables.git cd k8s-custom-iptables/ TARGETS=" RESERVED IP RANGE " ./install.sh If you don't know the reserved IP range of your instance, you can find out by entering this command: gcloud redis instances describe INSTANCE ID --region [REGION] For more information about IP aliases, including how to create a cluster with this setting enabled, see Creating a VPC-native cluster .
- If your cluster is version 1.7 or lower, or your version 1.8 or higher cluster doesn't have IP aliases enabled, follow these workaround steps before trying to connect to your instance: Workaround Run the following commands, replacing RESERVED IP RANGE with the reserved IP range of your instance: git clone https://github.com/bowei/k8s-custom-iptables.git cd k8s-custom-iptables/ TARGETS=" RESERVED IP RANGE " ./install.sh If you don't know the reserved IP range of your instance, you can find out by entering this command: gcloud redis instances describe INSTANCE ID --region= REGION For more information about IP aliases, including how to create a cluster with this setting enabled, see Creating a VPC-native cluster .
- Connect to a Redis instance from a Compute Engine VM using telnet You can connect to the Memorystore for Redis instance from any Compute Engine VM that uses the instance's authorized network with a supported RFC 1918 IP address .

### "About in-transit encryption \_|\_ Memorystore for Redis \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/about-in-transit-encryption](https://docs.cloud.google.com/memorystore/docs/redis/about-in-transit-encryption)
- Source ID: `site-docs-root-2`
- Final score: 259
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In-transit encryption prerequisites In order to use in-transit encryption with Memorystore for Redis, you need: A Redis client that supports TLS or a third-party TLS sidecar A Certificate Authority installed on the client machine accessing your Redis instance Native TLS was not supported prior to open source Redis version 6.0.
- Redis version 7.0 performance improvements Using Redis version 7.0 on Memorystore for Redis improves the performance of in-transit encryption.
- By using this version, Memorystore for Redis doesn't drop connections that you use to rotate server certificates or perform update operations.
- Introduction Memorystore for Redis supports encrypting all Redis traffic using the Transport Layer Security (TLS) protocol.

### Supported versions \_|\_ Memorystore for Redis \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/supported-versions](https://docs.cloud.google.com/memorystore/docs/redis/supported-versions)
- Source ID: `site-docs-root`
- Final score: 259
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Yes Redis version 4.0 The following table outlines Memorystore for Redis support of some major features introduced by OSS Redis version 4.0: Feature Description Supported in Memorystore for Redis Cache eviction improvements Supports the Least Frequently Used (LFU) eviction policy.
- Version support policy Memorystore for Redis supports one patch version for every major OSS Redis version that's listed in the Current versions section of this page.
- Current versions This table shows the supported Redis versions, the patch levels for these versions, and when the versions were last updated: Redis major version Patch level Last update 7.2 7.2.0 February 29, 2024 7.0 7.0.12 July 17, 2023 6.x 6.2.13 May 9, 2022 5.0 5.0.14 May 09, 2022 4.0 4.0.14 June 17, 2019 3.2 3.2.13 June 21, 2018 Redis version 7.2 The following table provides information about the vector search feature for Redis version 7.2: Feature Description Supported in Memorystore for Redis Vector search Redis version 7.2 introduces vector data storage and vector data search.
- No Redis version 6.x The following table outlines Memorystore for Redis support of some major features introduced by OSS Redis version 6.x: Feature Description Supported in Memorystore for Redis Threaded I/O With Redis 6.x, if multiple vCPUs are available, then some I/O operations can run in parallel.

