---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:53.271Z"
product_name: "Memorystore for Valkey"
product_slug: "memorystore-for-valkey"
feature_name: "and 4-shard instance shapes"
feature_slug: "and-4-shard-instance-shapes"
latest_feature_date: "2024-09-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/valkey/ha-and-replicas"
  - "https://docs.cloud.google.com/memorystore/docs/valkey/supported-commands"
  - "https://docs.cloud.google.com/memorystore/docs/valkey/instance-node-specification"
  - "https://docs.cloud.google.com/memorystore/docs/valkey/about-scaling-instance-capacity"
keywords:
  - "and"
  - "shard"
  - "instance"
  - "shapes"
  - "memorystore"
  - "for"
  - "valkey"
  - "supports"
---

# and 4-shard instance shapes

Product: Memorystore for Valkey
Coverage: MEDIUM

## Step 02 Summary

Memorystore for Valkey supports instance shapes with 1, 2, or 4 shards in Preview.

## Extended Definition

Memorystore for Valkey supports instance shapes with 1, 2, or 4 shards in Preview.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/valkey/ha-and-replicas](https://docs.cloud.google.com/memorystore/docs/valkey/ha-and-replicas)
- [https://docs.cloud.google.com/memorystore/docs/valkey/supported-commands](https://docs.cloud.google.com/memorystore/docs/valkey/supported-commands)
- [https://docs.cloud.google.com/memorystore/docs/valkey/instance-node-specification](https://docs.cloud.google.com/memorystore/docs/valkey/instance-node-specification)
- [https://docs.cloud.google.com/memorystore/docs/valkey/about-scaling-instance-capacity](https://docs.cloud.google.com/memorystore/docs/valkey/about-scaling-instance-capacity)

## Supporting Pages

### "High availability and replicas \_|\_ Memorystore for Valkey \_|\_ Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/ha-and-replicas](https://docs.cloud.google.com/memorystore/docs/valkey/ha-and-replicas)
- Source ID: `site-docs-root`
- Final score: 292
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cluster Mode Enabled Instance shapes The following diagrams illustrate shapes for Cluster Mode Enabled instances: Instance shape with three shards and zero replicas per node Instance shape with three shards and one replica per node Instance shape with three shards and multiple replicas per node Cluster Mode Disabled Instance shapes The following diagram illustrates a shape for Cluster Mode Disabled instances: Instance shape with multiple replicas Automatic failover Automatic failovers within a shard can occur due to maintenance or an unexpected failure of the primary node.
- Using recommended best practices allows your client to handle the following items for your instance automatically and without any downtime: The role (automatic failovers) The endpoint (node replacement) Cluster Mode Enabled-related slot assignment changes (consumer scale out and in) Replicas A highly available Memorystore for Valkey instance is a regional resource.
- Memorystore for Valkey distributes the primary and replica VMs of shards across multiple zones to safeguard against a zonal outage.
- This page explains how Memorystore for Valkey's architecture supports and provides high availability (HA).

### "Supported and blocked commands \_|\_ Memorystore for Valkey \_|\_ Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/supported-commands](https://docs.cloud.google.com/memorystore/docs/valkey/supported-commands)
- Source ID: `site-docs-root`
- Final score: 281
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported commands Commands supported for Cluster Mode Enabled and Cluster Mode Disabled instances Memorystore for Valkey supports the following commands for Cluster Mode Enabled and Cluster Mode Disabled instances: APPEND AUTH BITCOUNT BITFIELD BITFIELD RO BITOP BITPOS BLMOVE BLMPOP BLPOP BRPOP BRPOPLPUSH BZMPOP BZPOPMAX BZPOPMIN CLIENT CACHING CLIENT GETNAME CLIENT GETREDIR CLIENT HELP CLIENT ID CLIENT INFO CLIENT KILL CLIENT LIST CLIENT REPLY CLIENT SETNAME CLIENT TRACKING CLIENT TRACKINGINFO COMMAND COUNT COMMAND DOCS COMMAND GETKEYS COMMAND GETKEYSANDFLAGS COMMAND HELP COMMAND INFO COMMAND LIST CONFIG HELP COPY DBSIZE DECR DECRBY DEL DISCARD DUMP ECHO EVAL EVAL RO EVALSHA EVALSHA RO EXEC EXISTS EXPIRE EXPIREAT EXPIRETIME FCALL FCALL RO FLUSHALL FLUSHDB FUNCTION DELETE FUNCTION DUMP FUNCTION FLUSH FUNCTION HELP FUNCTION KILL FUNCTION LIST FUNCTION LOAD FUNCTION RESTORE FUNCTION STATS GEOADD GEODIST GEOHASH GEOPOS GEORADIUS GEORADIUS RO GEORADIUSBYMEMBER GEORADIUSBYMEMBER RO GEOSEARCH GEOSEARCHSTORE GET GETBIT GETDEL GETEX GETRANGE GETSET HDEL HELLO HEXISTS HGET HGETALL HINCRBY HINCRBYFLOAT HKEYS HLEN HMGET HMSET HRANDFIELD HSCAN HSET HSETNX HSTRLEN HVALS INCR INCRBY INCRBYFLOAT INFO KEYS LATENCY DOCTOR LATENCY GRAPH LATENCY HELP LATENCY HISTOGRAM LATENCY HISTORY LATENCY LATEST LATENCY RESET LCS LINDEX LINSERT LLEN LMOVE LMPOP LOLWUT LPOP LPOS LPUSH LPUSHX LRANGE LREM LSET LTRIM MEMORY DOCTOR MEMORY HELP MEMORY MALLOC-STATS MEMORY PURGE MEMORY STATS MEMORY USAGE MGET MODULE HELP MONITOR MSET MSETNX MULTI OBJECT ENCODING OBJECT FREQ OBJECT HELP OBJECT IDLETIME OBJECT REFCOUNT PERSIST PEXPIRE PEXPIREAT PEXPIRETIME PFADD PFCOUNT PFMERGE PING PSETEX PSUBSCRIBE PTTL PUBLISH PUBSUB CHANNELS PUBSUB HELP PUBSUB NUMPAT PUBSUB NUMSUB PUBSUB SHARDCHANNELS PUBSUB SHARDNUMSUB PUNSUBSCRIBE QUIT RANDOMKEY RENAME RENAMENX RESET RESTORE ROLE RPOP RPOPLPUSH RPUSH RPUSHX SADD SCAN SCARD SCRIPT DEBUG SCRIPT EXISTS SCRIPT FLUSH SCRIPT HELP SCRIPT KILL SCRIPT LOAD SDIFF SDIFFSTORE SELECT SET SETBIT SETEX SETNX SETRANGE SINTER SINTERCARD SINTERSTORE SISMEMBER SLOWLOG HELP SMEMBERS SMISMEMBER SMOVE SORT SORT RO SPOP SPUBLISH SRANDMEMBER SREM SSCAN SSUBSCRIBE STRLEN SUBSCRIBE SUBSTR SUNION SUNIONSTORE SUNSUBSCRIBE TIME TOUCH TTL TYPE UNLINK UNSUBSCRIBE UNWATCH WAIT WATCH XACK XADD XAUTOCLAIM XCLAIM XDEL XGROUP CREATE XGROUP CREATECONSUMER XGROUP DELCONSUMER XGROUP DESTROY XGROUP HELP XGROUP SETID XINFO CONSUMERS XINFO GROUPS XINFO HELP XINFO STREAM XLEN XPENDING XRANGE XREAD XREADGROUP XREVRANGE XTRIM ZADD ZCARD ZCOUNT ZDIFF ZDIFFSTORE ZINCRBY ZINTER ZINTERCARD ZINTERSTORE ZLEXCOUNT ZMPOP ZMSCORE ZPOPMAX ZPOPMIN ZRANDMEMBER ZRANGE ZRANGEBYLEX ZRANGEBYSCORE ZRANGESTORE ZRANK ZREM ZREMRANGEBYLEX ZREMRANGEBYRANK ZREMRANGEBYSCORE ZREVRANGE ZREVRANGEBYLEX ZREVRANGEBYSCORE ZREVRANK ZSCAN ZSCORE ZUNION ZUNIONSTORE Additional commands supported for Cluster Mode Enabled instances Memorystore for Valkey also supports the following commands for Cluster Mode Enabled instances: ASKING CLUSTER COUNT-FAILURE-REPORTS CLUSTER COUNTKEYSINSLOT CLUSTER GETKEYSINSLOT CLUSTER HELP CLUSTER INFO CLUSTER KEYSLOT CLUSTER LINKS CLUSTER MYID CLUSTER NODES CLUSTER REPLICAS CLUSTER SHARDS CLUSTER SLOTS READONLY READWRITE Blocked commands Memorystore for Valkey supports all Valkey 7.2 commands, except for the commands that are listed in this section.
- This page lists the commands from the official Valkey command library that Memorystore for Valkey supports and the commands that it blocks .
- Home Documentation Databases Memorystore Memorystore for Valkey Guides Send feedback Supported and blocked commands Stay organized with collections Save and categorize content based on your preferences.
- For these blocked commands, Memorystore for Valkey returns a NOPERM error.

### "Instance and node specification \_|\_ Memorystore for Valkey \_|\_ Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/instance-node-specification](https://docs.cloud.google.com/memorystore/docs/valkey/instance-node-specification)
- Source ID: `site-docs-root`
- Final score: 275
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Scale an instance As part of creating a Memorystore for Valkey instance, you choose a node type for the instance and specify the number of shards for the instance.
- Home Documentation Databases Memorystore Memorystore for Valkey Guides Send feedback Instance and node specification Stay organized with collections Save and categorize content based on your preferences.
- This page describes the instance and node specifications for Memorystore for Valkey instances.
- Your reader endpoint has the following behavior: Even when an instance has no read replicas provisioned, Memorystore for Valkey provisions the reader endpoint IP address to allow for the dynamic addition of read replicas.

### "About scaling instance capacity \_|\_ Memorystore for Valkey \_|\_ Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/about-scaling-instance-capacity](https://docs.cloud.google.com/memorystore/docs/valkey/about-scaling-instance-capacity)
- Source ID: `site-iam-reference`
- Final score: 259
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Important: If you want to scale the node type for your instance down, and you haven't overwritten the default settings for the original node type, then Memorystore for Valkey modifies the default settings to those of the scaled node type.
- Home Documentation Databases Memorystore Memorystore for Valkey Guides Send feedback About scaling instance capacity Stay organized with collections Save and categorize content based on your preferences.
- Note: If you specify Cluster Mode Disabled when you create an instance , then Memorystore for Valkey doesn't partition the instance, but hosts it on a single shard.
- You scaled to a smaller shard count that doesn't have the capacity to hold all of the keys that Memorystore for Valkey stores in the original instance.

