---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:52.718Z"
product_name: "Memorystore for Redis Cluster"
product_slug: "memorystore-for-redis-cluster"
feature_name: "cross-region replication in Google Cloud console"
feature_slug: "cross-region-replication-in-google-cloud-console"
latest_feature_date: "2025-07-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/cluster/about-cross-region-replication"
  - "https://docs.cloud.google.com/memorystore/docs/cluster/about-maintenance"
  - "https://docs.cloud.google.com/memorystore/docs/cluster/connect-cluster-instance"
  - "https://docs.cloud.google.com/memorystore/docs/cluster/create-instances"
keywords:
  - "cross"
  - "region"
  - "replication"
  - "in"
  - "console"
  - "you"
  - "can"
  - "use"
---

# cross-region replication in Google Cloud console

Product: Memorystore for Redis Cluster
Coverage: MEDIUM

## Step 02 Summary

You can use the Google Cloud console to work with cross-region replication.

## Extended Definition

You can use the Google Cloud console to work with cross-region replication.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/cluster/about-cross-region-replication](https://docs.cloud.google.com/memorystore/docs/cluster/about-cross-region-replication)
- [https://docs.cloud.google.com/memorystore/docs/cluster/about-maintenance](https://docs.cloud.google.com/memorystore/docs/cluster/about-maintenance)
- [https://docs.cloud.google.com/memorystore/docs/cluster/connect-cluster-instance](https://docs.cloud.google.com/memorystore/docs/cluster/connect-cluster-instance)
- [https://docs.cloud.google.com/memorystore/docs/cluster/create-instances](https://docs.cloud.google.com/memorystore/docs/cluster/create-instances)

## Supporting Pages

### "About cross-region replication \_|\_ Memorystore for Redis Cluster \_|\_\

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/about-cross-region-replication](https://docs.cloud.google.com/memorystore/docs/cluster/about-cross-region-replication)
- Source ID: `site-docs-root`
- Final score: 280
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Benefits Benefits of cross-region replication on Memorystore for Redis Cluster include the following: Disaster recovery : If the primary cluster's region becomes unavailable, then you can detach or switch over to a secondary cluster in another region to serve read and write requests.
- How to manage cross-region replication Cross-region replication involves the following tasks: Create a secondary cluster : create a secondary cluster that replicates data from your primary cluster continuously.
- Pricing : Memorystore for Redis Cluster charges customers that use cross-region replication for any secondary clusters that Memorystore for Redis Cluster provisions for cross-region replication.
- Perform maintenance updates : To ensure compatibility with cross-region replication, while creating your secondary cluster, your primary cluster might undergo a maintenance update.

### "About maintenance \_|\_ Memorystore for Redis Cluster \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/about-maintenance](https://docs.cloud.google.com/memorystore/docs/cluster/about-maintenance)
- Source ID: `site-docs-root`
- Final score: 200
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Unless you enable persistence , Memorystore for Redis Cluster doesn't use disks during replication.
- Configure your client application To configure your client application for the best performance and availability possible during maintenance, follow these steps: Use and configure your OSS Redis cluster client according to the guidance at Redis client best practices to make sure that any scheduled maintenance doesn't impact your client application.
- Upcoming maintenance notifications To ensure you stay informed about maintenance events on your cluster, you can set up email notifications regarding upcoming maintenance at least one week before it's scheduled.
- After you schedule maintenance for your cluster, you can either start the update for your cluster immediately or defer the update for up to two weeks from the originally scheduled maintenance date and time.

### Connect to a Memorystore for Redis Cluster instance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/connect-cluster-instance](https://docs.cloud.google.com/memorystore/docs/cluster/connect-cluster-instance)
- Source ID: `site-docs-root`
- Final score: 200
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cross region access You can access a Memorystore for Redis Cluster instance from a client located in a different region than where the Memorystore instance is located.
- Connect from a Compute Engine VM using redis-cli You can connect to the Memorystore for Redis Cluster instance from any Compute Engine VM that uses the Memorystore instance's authorized network.
- You can view the discovery endpoint of a cluster in Memorystore for Redis Cluster by using either the Google Cloud console or the gcloud CLI .
- Redis-py client best practice To connect to your Memorystore for Redis Cluster instance using the redis-py Python client, you must add the skip full coverage check=True when declaring a Redis Cluster: from rediscluster import RedisCluster endpoints = [{"host": "IPADDRESS", "port": "6379"}] rdb = RedisCluster( startup nodes=endpoints, skip full coverage check=True, # Required for Memorystore decode responses = True) print(rdb.set('PYTHON', 'CLUSTER')) print(rdb.get('PYTHON')) print(rdb.unlink('PYTHON')) Allowlist ports on firewall If you don't allowlist the correct ports on your firewall, your instance can encounter connection errors.

### "Create instances \_|\_ Memorystore for Redis Cluster \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/create-instances](https://docs.cloud.google.com/memorystore/docs/cluster/create-instances)
- Source ID: `site-docs-root`
- Final score: 191
- Re-rank relevance: N/A

Evidence snippets:
- In the Set up connection section, select the network that your applications can use to connect to this cluster.
- In the Set up connection section, select the network that your applications can use to connect to this cluster.
- Note: You can only create instances in the supported regions for Memorystore for Redis Cluster.
- Click Create cluster . gcloud To create a single-zone instance, run the create command: gcloud redis clusters create INSTANCE ID \ --region= REGION ID \ --network= NETWORK \ --replica-count= REPLICA COUNT \ --node-type= NODE TYPE \ --shard-count= SHARD COUNT \ --zone-distribution-mode= ZONE DISTRIBUTION MODE \ --zone= ZONE Replace the following: INSTANCE ID is the ID of the Memorystore for Redis Cluster instance you're creating.

