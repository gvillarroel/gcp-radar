---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:52.280Z"
product_name: "Memorystore for Redis"
product_slug: "memorystore-for-redis"
feature_name: "In-transit encryption"
feature_slug: "in-transit-encryption"
latest_feature_date: "2021-03-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/redis/about-in-transit-encryption"
  - "https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance"
  - "https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances"
  - "https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview"
keywords:
  - "in"
  - "transit"
  - "encryption"
  - "memorystore"
  - "for"
  - "redis"
  - "supports"
---

# In-transit encryption

Product: Memorystore for Redis
Coverage: MEDIUM

## Step 02 Summary

Memorystore for Redis supports in-transit encryption.

## Extended Definition

Memorystore for Redis supports in-transit encryption.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/redis/about-in-transit-encryption](https://docs.cloud.google.com/memorystore/docs/redis/about-in-transit-encryption)
- [https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance](https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance)
- [https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances](https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances)
- [https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview](https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview)

## Supporting Pages

### "About in-transit encryption \_|\_ Memorystore for Redis \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/about-in-transit-encryption](https://docs.cloud.google.com/memorystore/docs/redis/about-in-transit-encryption)
- Source ID: `site-docs-root-2`
- Final score: 391
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In-transit encryption prerequisites In order to use in-transit encryption with Memorystore for Redis, you need: A Redis client that supports TLS or a third-party TLS sidecar A Certificate Authority installed on the client machine accessing your Redis instance Native TLS was not supported prior to open source Redis version 6.0.
- Home Documentation Databases Memorystore Memorystore for Redis Guides Send feedback About in-transit encryption Stay organized with collections Save and categorize content based on your preferences.
- Redis version 7.0 performance improvements Using Redis version 7.0 on Memorystore for Redis improves the performance of in-transit encryption.
- Note: If you are looking for the Memorystore for Redis Cluster documentation, see About in-transit encryption .

### "Connect to a Redis instance \_|\_ Memorystore for Redis \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance](https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance)
- Source ID: `site-docs-root`
- Final score: 333
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- From the terminal, telnet to the read endpoint IP address of the Redis instance, replacing variables with appropriate values. telnet read-endpoint-ip 6379 If successful, the command will return this result: Trying read-endpoint-ip … Connected to read-endpoint-ip In the telnet session, enter some Redis commands: Enter: PING Result: PONG Connect to a Redis instance securely by using Stunnel and telnet This section provides an example of how to connect to a Redis instance that has in-transit encryption enabled using Stunnel .
- Connect to a Redis instance from a Compute Engine VM using telnet You can connect to the Memorystore for Redis instance from any Compute Engine VM that uses the instance's authorized network with a supported RFC 1918 IP address .
- Home Documentation Databases Memorystore Memorystore for Redis Guides Send feedback Connect to a Redis instance Stay organized with collections Save and categorize content based on your preferences.
- If you don't already have a Redis instance that has in-transit encryption enabled, create one by following Creating a Redis instance with in-transit encryption .

### "Create and manage Redis instances \_|\_ Memorystore for Redis \_|\_ Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances](https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances)
- Source ID: `site-docs-root`
- Final score: 319
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a Redis instance that uses customer managed encryption keys For instructions on how to create a Redis instance that uses customer managed encryption keys (CMEK), see Creating a Memorystore for Redis instance that uses CMEK .
- Memorystore for Redis Click the ID of an instance about which you want to view summary information. gcloud To view summary information about an instance, use the gcloud redis instances describe command: gcloud redis instances describe INSTANCE ID \ --region= REGION ID Make the following replacements: INSTANCE ID : the ID of the instance about which you want to view summary information REGION ID : the region where the instance is located For example: gcloud redis instances describe my-instance \ --region=us-central1 Edit instances To edit an instance: Console Go to the Memorystore for Redis page in the Google Cloud console.
- To choose one of the available OSS Redis versions for Memorystore for Redis, use the --redis-version flag with one of the following values: redis 7 2 redis 7 0 (Default) redis 6 X redis 5 0 redis 4 0 redis 3 2 For example: gcloud redis instances create myinstance --size=5 --region=us-central1 \ --zone=us-central1-a --redis-version=redis 6 X Networking You can create Redis instances using one of two connection modes : --connect-mode=PRIVATE SERVICE ACCESS or --connect-mode=DIRECT PEERING .
- The following command creates a Standard Tier instance: gcloud redis instances create INSTANCE ID --size= SIZE --zone= ZONE --alternative-zone= ALTERNATIVE ZONE --tier= STANDARD For example: gcloud redis instances create myinstance --size=5 --region=us-central1 --tier=standard For more information about using gcloud with Memorystore for Redis, see the Google Cloud CLI reference page .

### Memorystore for Redis overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview](https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview)
- Source ID: `site-docs-root`
- Final score: 283
- Re-rank relevance: N/A

Evidence snippets:
- Scale, as needed: Memorystore for Redis enables scaling your instances up to a maximum of 300 GB and supports up to 16 Gbps of network throughput.
- Memorystore for Redis currently supports RDB snapshots and exporting data .
- Tier capabilities The following table describes the differences between the available Memorystore for Redis service tiers: Specifications Basic Tier Standard Tier (read replicas disabled) Standard Tier (read replicas enabled) Description Provides a cache with no replication Provides redundancy and availability using replication Provides redundancy and availability using replication to backup data, and multiple Read replicas to increase read throughput Max Redis primary size 300 GB 300 GB 300 GB Max network bandwidth 16 Gbps 16 Gbps 16 Gbps total for writes.
- Connect to a Memorystore for Redis instance You can use any standard Redis client on the following environments to connect to your Memorystore for Redis instance : App Engine flexible environment App Engine standard environment Compute Engine VM instances Cloud Run functions Cloud Run Google Kubernetes Engine clusters Some serverless environments require a Serverless VPC Access connector as a prerequisite for connectivity with Memorystore for Redis.

