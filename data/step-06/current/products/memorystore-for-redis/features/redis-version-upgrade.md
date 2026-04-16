---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:52.277Z"
product_name: "Memorystore for Redis"
product_slug: "memorystore-for-redis"
feature_name: "Redis version upgrade"
feature_slug: "redis-version-upgrade"
latest_feature_date: "2022-02-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/redis/about-upgrading-version"
  - "https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances"
  - "https://docs.cloud.google.com/memorystore/docs/redis/supported-versions"
  - "https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance"
keywords:
  - "redis"
  - "version"
  - "upgrade"
  - "you"
  - "can"
  - "memorystore"
  - "for"
  - "instance"
---

# Redis version upgrade

Product: Memorystore for Redis
Coverage: MEDIUM

## Step 02 Summary

You can upgrade a Memorystore for Redis instance to any higher supported Redis version; Lets you upgrade the Redis version used by an instance.

## Extended Definition

You can upgrade a Memorystore for Redis instance to any higher supported Redis version; Lets you upgrade the Redis version used by an instance.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/redis/about-upgrading-version](https://docs.cloud.google.com/memorystore/docs/redis/about-upgrading-version)
- [https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances](https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances)
- [https://docs.cloud.google.com/memorystore/docs/redis/supported-versions](https://docs.cloud.google.com/memorystore/docs/redis/supported-versions)
- [https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance](https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance)

## Supporting Pages

### "About upgrading the Redis version of an instance \_|\_ Memorystore for Redis\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/about-upgrading-version](https://docs.cloud.google.com/memorystore/docs/redis/about-upgrading-version)
- Source ID: `site-docs-root-2`
- Final score: 333
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Databases Memorystore Memorystore for Redis Guides Send feedback About upgrading the Redis version of an instance Stay organized with collections Save and categorize content based on your preferences.
- This page describes how your Memorystore instance behaves during a version upgrade operation, how an upgrade operation can affect your application, and when you should run an upgrade operation.
- Best practices for upgrading an instance's Redis version We recommend that you upgrade to version 7.0 and later because Certificate Authority rotation no longer drops connections.
- Depending on the instance's tier , running a version upgrade operation can have performance and storage implications for your application.

### "Create and manage Redis instances \_|\_ Memorystore for Redis \_|\_ Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances](https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances)
- Source ID: `site-docs-root`
- Final score: 309
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To choose one of the available OSS Redis versions for Memorystore for Redis, use the --redis-version flag with one of the following values: redis 7 2 redis 7 0 (Default) redis 6 X redis 5 0 redis 4 0 redis 3 2 For example: gcloud redis instances create myinstance --size=5 --region=us-central1 \ --zone=us-central1-a --redis-version=redis 6 X Networking You can create Redis instances using one of two connection modes : --connect-mode=PRIVATE SERVICE ACCESS or --connect-mode=DIRECT PEERING .
- You can view summary information about a Memorystore for Redis instance by using either the Google Cloud console or the gcloud CLI .
- After a manual or automatic failover , you can confirm that Memorystore for Redis switches the instance to the alternate zone.
- Optional flags Redis version Important: You can also upgrade an existing Redis instance to a more recent OSS Redis version.

### Supported versions \_|\_ Memorystore for Redis \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/supported-versions](https://docs.cloud.google.com/memorystore/docs/redis/supported-versions)
- Source ID: `site-docs-root`
- Final score: 301
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- No Redis version 6.x The following table outlines Memorystore for Redis support of some major features introduced by OSS Redis version 6.x: Feature Description Supported in Memorystore for Redis Threaded I/O With Redis 6.x, if multiple vCPUs are available, then some I/O operations can run in parallel.
- Home Documentation Databases Memorystore Memorystore for Redis Guides Send feedback Supported versions Stay organized with collections Save and categorize content based on your preferences.
- Memorystore for Redis monitors for any critical patches that it needs to apply to your instance.
- You can also upgrade the version of an instance to any newer version.

### "Connect to a Redis instance \_|\_ Memorystore for Redis \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance](https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance)
- Source ID: `site-docs-root`
- Final score: 298
- Re-rank relevance: N/A

Evidence snippets:
- Make a new file in which to put Stunnel configuration information by running the following command: sudo vim /etc/stunnel/redis-client.conf Paste the following text in the file, replacing redis-instance-ip with the Redis instance's IP address: output=/tmp/stunnel.log CAfile=/tmp/server ca.pem client=yes pid=/var/run/stunnel.pid verifyChain=yes sslVersion=TLSv1.2 [redis] accept=127.0.0.1:6378 connect= redis-instance-ip :6378 Start stunnel by running the following command: sudo stunnel /etc/stunnel/redis-client.conf Verify that stunnel is running: ps aux grep stunnel Restart Stunnel by running the following commands: sudo systemctl restart stunnel4 Note: You can use the ps aux grep stunnel command before and after restarting stunnel to confirm that the restart was successful.
- If your cluster is version 1.7 or lower, or your version 1.8 or higher cluster doesn't have IP aliases enabled, follow these workaround steps before trying to connect to your instance: Workaround Run the following commands, replacing RESERVED IP RANGE with the reserved IP range of your instance: git clone https://github.com/bowei/k8s-custom-iptables.git cd k8s-custom-iptables/ TARGETS=" RESERVED IP RANGE " ./install.sh If you don't know the reserved IP range of your instance, you can find out by entering this command: gcloud redis instances describe INSTANCE ID --region [REGION] For more information about IP aliases, including how to create a cluster with this setting enabled, see Creating a VPC-native cluster .
- If your cluster is version 1.7 or lower, or your version 1.8 or higher cluster doesn't have IP aliases enabled, follow these workaround steps before trying to connect to your instance: Workaround Run the following commands, replacing RESERVED IP RANGE with the reserved IP range of your instance: git clone https://github.com/bowei/k8s-custom-iptables.git cd k8s-custom-iptables/ TARGETS=" RESERVED IP RANGE " ./install.sh If you don't know the reserved IP range of your instance, you can find out by entering this command: gcloud redis instances describe INSTANCE ID --region= REGION For more information about IP aliases, including how to create a cluster with this setting enabled, see Creating a VPC-native cluster .
- Connect to a Redis instance from a Compute Engine VM using telnet You can connect to the Memorystore for Redis instance from any Compute Engine VM that uses the instance's authorized network with a supported RFC 1918 IP address .

