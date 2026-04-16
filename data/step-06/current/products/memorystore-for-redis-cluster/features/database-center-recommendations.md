---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:52.719Z"
product_name: "Memorystore for Redis Cluster"
product_slug: "memorystore-for-redis-cluster"
feature_name: "Database Center recommendations"
feature_slug: "database-center-recommendations"
latest_feature_date: "2025-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/cluster/general-best-practices"
  - "https://docs.cloud.google.com/memorystore/docs/cluster/quotas"
  - "https://docs.cloud.google.com/memorystore/docs/cluster/supported-commands"
  - "https://docs.cloud.google.com/memorystore/docs/cluster/about-maintenance"
keywords:
  - "database"
  - "center"
  - "recommendations"
  - "can"
  - "show"
  - "and"
  - "health"
  - "issues"
---

# Database Center recommendations

Product: Memorystore for Redis Cluster
Coverage: MEDIUM

## Step 02 Summary

Database Center can show recommendations and health issues for Memorystore for Redis Cluster.

## Extended Definition

Database Center can show recommendations and health issues for Memorystore for Redis Cluster.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/cluster/general-best-practices](https://docs.cloud.google.com/memorystore/docs/cluster/general-best-practices)
- [https://docs.cloud.google.com/memorystore/docs/cluster/quotas](https://docs.cloud.google.com/memorystore/docs/cluster/quotas)
- [https://docs.cloud.google.com/memorystore/docs/cluster/supported-commands](https://docs.cloud.google.com/memorystore/docs/cluster/supported-commands)
- [https://docs.cloud.google.com/memorystore/docs/cluster/about-maintenance](https://docs.cloud.google.com/memorystore/docs/cluster/about-maintenance)

## Supporting Pages

### Best practices for Memorystore for Redis Cluster \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/general-best-practices](https://docs.cloud.google.com/memorystore/docs/cluster/general-best-practices)
- Source ID: `site-docs-root`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- Using these commands might result in the following performance issues: High latency and client timeouts Memory pressure caused by commands that increase memory usage Data loss during node replication and synchronization because the Redis main thread is blocked Starved health checks, observability, and replication The following table lists examples of Redis commands that are resource-intensive and provides you with alternatives that are resource-efficient.
- Stale snapshots Recovering nodes from a stale snapshot can cause performance issues for your application as it tries to reconcile a significant amount of stale keys or other changes to your database such as a schema change.
- Performance implications TLS impacts performance in the following ways: Establish connections : A client and server that have established a TLS session can resume the session without repeating the resource-intensive process of establishing the connection between the client and the server.
- Depending on severity of your high write load, your cluster can experience performance issues at the following thresholds: Very high write loads can experience issues if /cluster/memory/maximum utilization reaches 65% or higher.

### "Quotas and limits \_|\_ Memorystore for Redis Cluster \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/quotas](https://docs.cloud.google.com/memorystore/docs/cluster/quotas)
- Source ID: `site-docs-root`
- Final score: 116
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Instance limits Memorystore for Redis Cluster enforces the following usage limits: Limit Value Databases per instance 1 Usage units per instance 250 Max clients Max clients is the maximum number of client connections that you can have for each node of a node type without experiencing performance issues.
- Home Documentation Databases Memorystore Memorystore for Redis Cluster Resources Send feedback Quotas and limits Stay organized with collections Save and categorize content based on your preferences.
- The following table lists the node types that are available for Memorystore for Redis Cluster and the maximum number of client connections that you can have for each node type.
- Per-minute API requests quota Note: You cannot request a quota increase for Memorystore for Redis Cluster API operations, such as instance create , update , and delete .

### "Supported and blocked commands \_|\_ Memorystore for Redis Cluster \_|\_\

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/supported-commands](https://docs.cloud.google.com/memorystore/docs/cluster/supported-commands)
- Source ID: `site-docs-root`
- Final score: 109
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- LCS LINDEX LINSERT LLEN LMOVE LMPOP LOLWUT LPOP LPOS LPUSH LPUSHX LRANGE LREM LSET LTRIM MEMORY DOCTOR MEMORY HELP MEMORY MALLOC-STATS MEMORY PURGE MEMORY STATS MEMORY USAGE MGET MODULE HELP MONITOR MSET MSETNX MULTI OBJECT ENCODING OBJECT FREQ OBJECT HELP OBJECT IDLETIME OBJECT REFCOUNT PERSIST PEXPIRE PEXPIREAT PEXPIRETIME PFADD PFCOUNT PFMERGE PING PSETEX PSUBSCRIBE PTTL PUBLISH PUBSUB CHANNELS PUBSUB HELP PUBSUB NUMPAT PUBSUB NUMSUB PUBSUB SHARDCHANNELS PUBSUB SHARDNUMSUB PUNSUBSCRIBE QUIT RANDOMKEY READONLY READWRITE RENAME RENAMENX RESET RESTORE ROLE RPOP RPOPLPUSH RPUSH RPUSHX SADD SCAN SCARD SCRIPT DEBUG SCRIPT EXISTS SCRIPT FLUSH SCRIPT HELP SCRIPT KILL SCRIPT LOAD SDIFF SDIFFSTORE SELECT SET SETBIT SETEX SETNX SETRANGE SINTER SINTERCARD SINTERSTORE SISMEMBER SLOWLOG GET SLOWLOG HELP SLOWLOG LEN SLOWLOG RESET SMEMBERS SMISMEMBER SMOVE SORT SORT RO SPOP SPUBLISH SRANDMEMBER SREM SSCAN SSUBSCRIBE STRLEN SUBSCRIBE SUBSTR SUNION SUNIONSTORE SUNSUBSCRIBE TIME TOUCH TTL TYPE UNLINK UNSUBSCRIBE UNWATCH WAIT WATCH XACK XADD XAUTOCLAIM XCLAIM XDEL XGROUP CREATE XGROUP CREATECONSUMER XGROUP DELCONSUMER XGROUP DESTROY XGROUP HELP XGROUP SETID XINFO CONSUMERS XINFO GROUPS XINFO HELP XINFO STREAM XLEN XPENDING XRANGE XREAD XREADGROUP XREVRANGE XTRIM ZADD ZCARD ZCOUNT ZDIFF ZDIFFSTORE ZINCRBY ZINTER ZINTERCARD ZINTERSTORE ZLEXCOUNT ZMPOP ZMSCORE ZPOPMAX ZPOPMIN ZRANDMEMBER ZRANGE ZRANGEBYLEX ZRANGEBYSCORE ZRANGESTORE ZRANK ZREM ZREMRANGEBYLEX ZREMRANGEBYRANK ZREMRANGEBYSCORE ZREVRANGE ZREVRANGEBYLEX ZREVRANGEBYSCORE ZREVRANK ZSCAN ZSCORE ZUNION ZUNIONSTORE Blocked commands Memorystore for Redis Cluster supports all Redis 7.2 commands, except for the commands that are listed in this section.
- Supported commands Memorystore for Redis Cluster supports the following commands: APPEND ASKING AUTH BITCOUNT BITFIELD BITFIELD RO BITOP BITPOS BLMOVE BLMPOP BLPOP BRPOP BRPOPLPUSH BZMPOP BZPOPMAX BZPOPMIN CLIENT CACHING CLIENT GETNAME CLIENT GETREDIR CLIENT HELP CLIENT ID CLIENT INFO CLIENT KILL CLIENT LIST CLIENT REPLY CLIENT SETNAME CLIENT TRACKING CLIENT TRACKINGINFO CLUSTER COUNT-FAILURE-REPORTS CLUSTER COUNTKEYSINSLOT CLUSTER GETKEYSINSLOT CLUSTER HELP CLUSTER INFO CLUSTER KEYSLOT CLUSTER LINKS CLUSTER MYID CLUSTER NODES CLUSTER REPLICAS CLUSTER SHARDS CLUSTER SLAVES CLUSTER SLOTS COMMAND COUNT COMMAND DOCS COMMAND GETKEYS COMMAND GETKEYSANDFLAGS COMMAND HELP COMMAND INFO COMMAND LIST CONFIG HELP COPY DBSIZE DECR DECRBY DEL DISCARD DUMP ECHO EVAL EVAL RO EVALSHA EVALSHA RO EXEC EXISTS EXPIRE EXPIREAT EXPIRETIME FCALL FCALL RO FLUSHALL FLUSHDB FUNCTION DELETE FUNCTION DUMP FUNCTION FLUSH FUNCTION HELP FUNCTION KILL FUNCTION LIST FUNCTION LOAD FUNCTION RESTORE FUNCTION STATS GEOADD GEODIST GEOHASH GEOPOS GEORADIUS GEORADIUS RO GEORADIUSBYMEMBER GEORADIUSBYMEMBER RO GEOSEARCH GEOSEARCHSTORE GET GETBIT GETDEL GETEX GETRANGE GETSET HDEL HELLO HEXISTS HGET HGETALL HINCRBY HINCRBYFLOAT HKEYS HLEN HMGET HMSET HRANDFIELD HSCAN HSET HSETNX HSTRLEN HVALS INCR INCRBY INCRBYFLOAT INFO KEYS LATENCY DOCTOR LATENCY GRAPH LATENCY HELP LATENCY HISTOGRAM LATENCY HISTORY LATENCY LATEST LATENCY RESET Note : The LATENCY command group isn't blocked.
- Home Documentation Databases Memorystore Memorystore for Redis Cluster Guides Send feedback Supported and blocked commands Stay organized with collections Save and categorize content based on your preferences.
- ACL DELUSER ACL DRYRUN ACL GETUSER ACL LIST ACL LOAD ACL LOG ACL SAVE ACL SETUSER ACL USERS ACL CAT ACL GENPASS ACL HELP ACL WHOAMI BGREWRITEAOF BGSAVE CLIENT NO-EVICT CLIENT PAUSE CLIENT SETINFO CLIENT UNBLOCK CLIENT UNPAUSE CLUSTER ADDSLOTS CLUSTER ADDSLOTSRANGE CLUSTER BUMPEPOCH CLUSTER DELSLOTS CLUSTER DELSLOTSRANGE CLUSTER FAILOVER CLUSTER FLUSHSLOTS CLUSTER FORGET CLUSTER MEET CLUSTER REPLICATE CLUSTER RESET CLUSTER SAVECONFIG CLUSTER SET-CONFIG-EPOCH CLUSTER SETSLOT CONFIG GET CONFIG RESETSTAT CONFIG REWRITE CONFIG SET DEBUG FAILOVER LASTSAVE MIGRATE MODULE LIST MODULE LOAD MODULE LOADEX MODULE UNLOAD MOVE PFDEBUG PFSELFTEST PSYNC REPLCONF REPLICAOF RESTORE-ASKING SAVE SHUTDOWN SLAVEOF SWAPDB SYNC XSETID Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "About maintenance \_|\_ Memorystore for Redis Cluster \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/about-maintenance](https://docs.cloud.google.com/memorystore/docs/cluster/about-maintenance)
- Source ID: `site-docs-root`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- After you schedule maintenance for your cluster, you can either start the update for your cluster immediately or defer the update for up to two weeks from the originally scheduled maintenance date and time.
- It also provides information and configuration recommendations that your client applications should be aware of to take advantage of Memorystore for Redis Cluster's zero downtime maintenance design.
- Home Documentation Databases Memorystore Memorystore for Redis Cluster Guides Send feedback About maintenance Stay organized with collections Save and categorize content based on your preferences.
- Upon successful rescheduling, an email is sent confirming the cancellation of the previous maintenance, and a new upcoming maintenance notification is sent with the updated schedule.

