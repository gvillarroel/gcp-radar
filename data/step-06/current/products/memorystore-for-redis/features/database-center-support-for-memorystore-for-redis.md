---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:52.268Z"
product_name: "Memorystore for Redis"
product_slug: "memorystore-for-redis"
feature_name: "Database Center support for Memorystore for Redis"
feature_slug: "database-center-support-for-memorystore-for-redis"
latest_feature_date: "2024-12-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/redis/high-availability-for-memorystore-for-redis"
  - "https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview"
  - "https://docs.cloud.google.com/memorystore/docs/redis/redis-tiers"
  - "https://docs.cloud.google.com/memorystore/docs/redis/supported-commands"
keywords:
  - "database"
  - "center"
  - "for"
  - "memorystore"
  - "redis"
  - "supports"
  - "and"
  - "provides"
---

# Database Center support for Memorystore for Redis

Product: Memorystore for Redis
Coverage: MEDIUM

## Step 02 Summary

Database Center supports Memorystore for Redis and provides a centralized view across the database fleet.

## Extended Definition

Database Center supports Memorystore for Redis and provides a centralized view across the database fleet.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/redis/high-availability-for-memorystore-for-redis](https://docs.cloud.google.com/memorystore/docs/redis/high-availability-for-memorystore-for-redis)
- [https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview](https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview)
- [https://docs.cloud.google.com/memorystore/docs/redis/redis-tiers](https://docs.cloud.google.com/memorystore/docs/redis/redis-tiers)
- [https://docs.cloud.google.com/memorystore/docs/redis/supported-commands](https://docs.cloud.google.com/memorystore/docs/redis/supported-commands)

## Supporting Pages

### High availability for Memorystore for Redis \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/high-availability-for-memorystore-for-redis](https://docs.cloud.google.com/memorystore/docs/redis/high-availability-for-memorystore-for-redis)
- Source ID: `site-docs-root`
- Final score: 274
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Databases Memorystore Memorystore for Redis Guides Send feedback High availability for Memorystore for Redis Stay organized with collections Save and categorize content based on your preferences.
- For information about the metrics that Cloud Monitoring provides for Memorystore for Redis, see Monitor Redis Instances and Supported monitoring metrics for Memorystore for Redis .
- After the failover is complete and the new replica is available, Memorystore for Redis redirects connections to the new replica.
- Memorystore for Redis provides high availability by replicating a primary instance to one or more replicas.

### Memorystore for Redis overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview](https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview)
- Source ID: `site-docs-root`
- Final score: 272
- Re-rank relevance: N/A

Evidence snippets:
- Tier capabilities The following table describes the differences between the available Memorystore for Redis service tiers: Specifications Basic Tier Standard Tier (read replicas disabled) Standard Tier (read replicas enabled) Description Provides a cache with no replication Provides redundancy and availability using replication Provides redundancy and availability using replication to backup data, and multiple Read replicas to increase read throughput Max Redis primary size 300 GB 300 GB 300 GB Max network bandwidth 16 Gbps 16 Gbps 16 Gbps total for writes.
- Home Documentation Databases Memorystore Memorystore for Redis Guides Send feedback Memorystore for Redis overview Stay organized with collections Save and categorize content based on your preferences.
- Combined with Dataflow, Memorystore for Redis provides a scalable, fast in-memory store for storing intermediate data that thousands of clients can access with very low latency.
- Memorystore for Redis provides patching, 24x7 threat monitoring, failure detection, and automatic failover, allowing you to spend more time on building your applications.

### Redis tier capabilities \_|\_ Memorystore for Redis \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/redis-tiers](https://docs.cloud.google.com/memorystore/docs/redis/redis-tiers)
- Source ID: `site-docs-root`
- Final score: 264
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Databases Memorystore Memorystore for Redis Guides Send feedback Redis tier capabilities Stay organized with collections Save and categorize content based on your preferences.
- Memorystore for Redis supports Basic and Standard Tiers.
- Basic Tier One Redis node Ephemeral cache Standard Tier Provides High Availability with replication Fails over to replica in the case of primary node failure Standard Tier with read replicas Provides High Availability with replication Read replicas allow for distributed reads Feature comparison Specifications Basic Tier Standard Tier (read replicas disabled) Standard Tier (read replicas enabled) Description Provides a cache with no replication Provides redundancy and availability using replication Provides redundancy and availability using replication to backup data, and multiple Read replicas to increase read throughput Max Redis primary size 300 GB 300 GB 300 GB Max network bandwidth 16 Gbps 16 Gbps 16 Gbps total for writes.
- The Basic Tier is best suited for applications that use Redis as a cache and can withstand a cold restart and full cache flush.

### "Supported and blocked commands \_|\_ Memorystore for Redis \_|\_ Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/supported-commands](https://docs.cloud.google.com/memorystore/docs/redis/supported-commands)
- Source ID: `site-docs-root`
- Final score: 262
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- LCS LINDEX LINSERT LLEN LMOVE LMPOP LOLWUT LPOP LPOS LPUSH LPUSHX LRANGE LREM LSET LTRIM MEMORY DOCTOR MEMORY HELP MEMORY MALLOC-STATS MEMORY PURGE MEMORY STATS MEMORY USAGE MGET MODULE HELP MONITOR MSET MSETNX MULTI PERSIST PEXPIRE PEXPIREAT PEXPIRETIME PFADD PFCOUNT PFMERGE PING PSETEX PSUBSCRIBE PTTL PUBLISH PUBSUB CHANNELS PUBSUB HELP PUBSUB NUMPAT PUBSUB NUMSUB PUBSUB SHARDCHANNELS PUBSUB SHARDNUMSUB PUNSUBSCRIBE QUIT RANDOMKEY READONLY READWRITE RENAME RENAMENX RESET RESTORE ROLE RPOP RPOPLPUSH RPUSH RPUSHX SADD SCAN SCARD SCRIPT DEBUG SCRIPT EXISTS SCRIPT FLUSH SCRIPT HELP SCRIPT KILL SCRIPT LOAD SDIFF SDIFFSTORE SELECT SET SETBIT SETEX SETNX SETRANGE SINTER SINTERCARD SINTERSTORE SISMEMBER SLOWLOG GET SLOWLOG HELP SLOWLOG LEN SLOWLOG RESET SMEMBERS SMISMEMBER SMOVE SORT SORT RO SPOP SPUBLISH SRANDMEMBER SREM SSCAN SSUBSCRIBE STRLEN SUBSCRIBE SUBSTR SUNION SUNIONSTORE SUNSUBSCRIBE TIME TOUCH TTL TYPE UNLINK UNSUBSCRIBE UNWATCH WAIT WATCH XACK XADD XAUTOCLAIM XCLAIM XDEL XGROUP CREATE XGROUP CREATECONSUMER XGROUP DELCONSUMER XGROUP DESTROY XGROUP HELP XGROUP SETID XINFO CONSUMERS XINFO GROUPS XINFO HELP XINFO STREAM XLEN XPENDING XRANGE XREAD XREADGROUP XREVRANGE XTRIM ZADD ZCARD ZCOUNT ZDIFF ZDIFFSTORE ZINCRBY ZINTER ZINTERCARD ZINTERSTORE ZLEXCOUNT ZMPOP ZMSCORE ZPOPMAX ZPOPMIN ZRANDMEMBER ZRANGE ZRANGEBYLEX ZRANGEBYSCORE ZRANGESTORE ZRANK ZREM ZREMRANGEBYLEX ZREMRANGEBYRANK ZREMRANGEBYSCORE ZREVRANGE ZREVRANGEBYLEX ZREVRANGEBYSCORE ZREVRANK ZSCAN ZSCORE ZUNION ZUNIONSTORE Blocked commands Memorystore for Redis supports all Redis 7.2 commands, except for the commands that are listed in this section.
- Supported commands Memorystore for Redis supports the following commands: APPEND ASKING AUTH BITCOUNT BITFIELD BITFIELD RO BITOP BITPOS BLMOVE BLMPOP BLPOP BRPOP BRPOPLPUSH BZMPOP BZPOPMAX BZPOPMIN COPY DBSIZE DECR DECRBY DEL DISCARD DUMP ECHO EVAL EVAL RO EVALSHA EVALSHA RO EXEC EXISTS EXPIRE EXPIREAT EXPIRETIME FCALL FCALL RO FLUSHALL FLUSHDB FUNCTION DELETE FUNCTION DUMP FUNCTION FLUSH FUNCTION HELP FUNCTION KILL FUNCTION LIST FUNCTION LOAD FUNCTION RESTORE FUNCTION STATS GEOADD GEODIST GEOHASH GEOPOS GEORADIUS GEORADIUS RO GEORADIUSBYMEMBER GEORADIUSBYMEMBER RO GEOSEARCH GEOSEARCHSTORE GET GETBIT GETDEL GETEX GETRANGE GETSET HDEL HELLO HEXISTS HGET HGETALL HINCRBY HINCRBYFLOAT HKEYS HLEN HMGET HMSET HRANDFIELD HSCAN HSET HSETNX HSTRLEN HVALS INCR INCRBY INCRBYFLOAT INFO KEYS LATENCY DOCTOR LATENCY GRAPH LATENCY HELP LATENCY HISTOGRAM LATENCY HISTORY LATENCY LATEST LATENCY RESET Note : The LATENCY command group isn't blocked.
- Home Documentation Databases Memorystore Memorystore for Redis Guides Send feedback Supported and blocked commands Stay organized with collections Save and categorize content based on your preferences.
- This page lists the commands from the official Redis command library that Memorystore for Redis supports and the commands that it blocks .

