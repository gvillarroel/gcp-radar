---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:53.267Z"
product_name: "Memorystore for Valkey"
product_slug: "memorystore-for-valkey"
feature_name: "Vector search"
feature_slug: "vector-search"
latest_feature_date: "2025-04-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/valkey/about-vector-search"
  - "https://docs.cloud.google.com/memorystore/docs/valkey/supported-commands"
  - "https://docs.cloud.google.com/memorystore/docs/valkey/audit-logging"
  - "https://docs.cloud.google.com/memorystore/docs/valkey/about-scaling-instance-capacity"
keywords:
  - "vector"
  - "search"
  - "allows"
  - "storing"
  - "and"
  - "querying"
  - "in"
  - "memorystore"
---

# Vector search

Product: Memorystore for Valkey
Coverage: MEDIUM

## Step 02 Summary

Allows storing and querying vector data in Memorystore for Valkey.

## Extended Definition

Allows storing and querying vector data in Memorystore for Valkey.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/valkey/about-vector-search](https://docs.cloud.google.com/memorystore/docs/valkey/about-vector-search)
- [https://docs.cloud.google.com/memorystore/docs/valkey/supported-commands](https://docs.cloud.google.com/memorystore/docs/valkey/supported-commands)
- [https://docs.cloud.google.com/memorystore/docs/valkey/audit-logging](https://docs.cloud.google.com/memorystore/docs/valkey/audit-logging)
- [https://docs.cloud.google.com/memorystore/docs/valkey/about-scaling-instance-capacity](https://docs.cloud.google.com/memorystore/docs/valkey/about-scaling-instance-capacity)

## Supporting Pages

### "Vector search for generative AI applications \_|\_ Memorystore for Valkey\

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/about-vector-search](https://docs.cloud.google.com/memorystore/docs/valkey/about-vector-search)
- Source ID: `site-docs-root`
- Final score: 286
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This page describes how Memorystore for Valkey supports storing and querying vector data for generative AI applications, such as Retrieval Augmented Generation (RAG) and LangChain, by using vector search capabilities.
- Approaches to using vector search for generative AI in Memorystore for Valkey Memorystore also provides two distinct search approaches to help you find the right balance between speed and accuracy.
- Using vector search with LangChain lets you build solutions for the following use cases: RAG LLM cache Recommendation engine Semantic search Image similarity search Benefits of vector search for generative AI in Memorystore for Valkey The advantage of using Memorystore to store your generative AI data, compared to other Google Cloud databases is its speed.
- Home Documentation Databases Memorystore Memorystore for Valkey Guides Send feedback Vector search for generative AI applications Stay organized with collections Save and categorize content based on your preferences.

### "Supported and blocked commands \_|\_ Memorystore for Valkey \_|\_ Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/supported-commands](https://docs.cloud.google.com/memorystore/docs/valkey/supported-commands)
- Source ID: `site-docs-root`
- Final score: 165
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported commands Commands supported for Cluster Mode Enabled and Cluster Mode Disabled instances Memorystore for Valkey supports the following commands for Cluster Mode Enabled and Cluster Mode Disabled instances: APPEND AUTH BITCOUNT BITFIELD BITFIELD RO BITOP BITPOS BLMOVE BLMPOP BLPOP BRPOP BRPOPLPUSH BZMPOP BZPOPMAX BZPOPMIN CLIENT CACHING CLIENT GETNAME CLIENT GETREDIR CLIENT HELP CLIENT ID CLIENT INFO CLIENT KILL CLIENT LIST CLIENT REPLY CLIENT SETNAME CLIENT TRACKING CLIENT TRACKINGINFO COMMAND COUNT COMMAND DOCS COMMAND GETKEYS COMMAND GETKEYSANDFLAGS COMMAND HELP COMMAND INFO COMMAND LIST CONFIG HELP COPY DBSIZE DECR DECRBY DEL DISCARD DUMP ECHO EVAL EVAL RO EVALSHA EVALSHA RO EXEC EXISTS EXPIRE EXPIREAT EXPIRETIME FCALL FCALL RO FLUSHALL FLUSHDB FUNCTION DELETE FUNCTION DUMP FUNCTION FLUSH FUNCTION HELP FUNCTION KILL FUNCTION LIST FUNCTION LOAD FUNCTION RESTORE FUNCTION STATS GEOADD GEODIST GEOHASH GEOPOS GEORADIUS GEORADIUS RO GEORADIUSBYMEMBER GEORADIUSBYMEMBER RO GEOSEARCH GEOSEARCHSTORE GET GETBIT GETDEL GETEX GETRANGE GETSET HDEL HELLO HEXISTS HGET HGETALL HINCRBY HINCRBYFLOAT HKEYS HLEN HMGET HMSET HRANDFIELD HSCAN HSET HSETNX HSTRLEN HVALS INCR INCRBY INCRBYFLOAT INFO KEYS LATENCY DOCTOR LATENCY GRAPH LATENCY HELP LATENCY HISTOGRAM LATENCY HISTORY LATENCY LATEST LATENCY RESET LCS LINDEX LINSERT LLEN LMOVE LMPOP LOLWUT LPOP LPOS LPUSH LPUSHX LRANGE LREM LSET LTRIM MEMORY DOCTOR MEMORY HELP MEMORY MALLOC-STATS MEMORY PURGE MEMORY STATS MEMORY USAGE MGET MODULE HELP MONITOR MSET MSETNX MULTI OBJECT ENCODING OBJECT FREQ OBJECT HELP OBJECT IDLETIME OBJECT REFCOUNT PERSIST PEXPIRE PEXPIREAT PEXPIRETIME PFADD PFCOUNT PFMERGE PING PSETEX PSUBSCRIBE PTTL PUBLISH PUBSUB CHANNELS PUBSUB HELP PUBSUB NUMPAT PUBSUB NUMSUB PUBSUB SHARDCHANNELS PUBSUB SHARDNUMSUB PUNSUBSCRIBE QUIT RANDOMKEY RENAME RENAMENX RESET RESTORE ROLE RPOP RPOPLPUSH RPUSH RPUSHX SADD SCAN SCARD SCRIPT DEBUG SCRIPT EXISTS SCRIPT FLUSH SCRIPT HELP SCRIPT KILL SCRIPT LOAD SDIFF SDIFFSTORE SELECT SET SETBIT SETEX SETNX SETRANGE SINTER SINTERCARD SINTERSTORE SISMEMBER SLOWLOG HELP SMEMBERS SMISMEMBER SMOVE SORT SORT RO SPOP SPUBLISH SRANDMEMBER SREM SSCAN SSUBSCRIBE STRLEN SUBSCRIBE SUBSTR SUNION SUNIONSTORE SUNSUBSCRIBE TIME TOUCH TTL TYPE UNLINK UNSUBSCRIBE UNWATCH WAIT WATCH XACK XADD XAUTOCLAIM XCLAIM XDEL XGROUP CREATE XGROUP CREATECONSUMER XGROUP DELCONSUMER XGROUP DESTROY XGROUP HELP XGROUP SETID XINFO CONSUMERS XINFO GROUPS XINFO HELP XINFO STREAM XLEN XPENDING XRANGE XREAD XREADGROUP XREVRANGE XTRIM ZADD ZCARD ZCOUNT ZDIFF ZDIFFSTORE ZINCRBY ZINTER ZINTERCARD ZINTERSTORE ZLEXCOUNT ZMPOP ZMSCORE ZPOPMAX ZPOPMIN ZRANDMEMBER ZRANGE ZRANGEBYLEX ZRANGEBYSCORE ZRANGESTORE ZRANK ZREM ZREMRANGEBYLEX ZREMRANGEBYRANK ZREMRANGEBYSCORE ZREVRANGE ZREVRANGEBYLEX ZREVRANGEBYSCORE ZREVRANK ZSCAN ZSCORE ZUNION ZUNIONSTORE Additional commands supported for Cluster Mode Enabled instances Memorystore for Valkey also supports the following commands for Cluster Mode Enabled instances: ASKING CLUSTER COUNT-FAILURE-REPORTS CLUSTER COUNTKEYSINSLOT CLUSTER GETKEYSINSLOT CLUSTER HELP CLUSTER INFO CLUSTER KEYSLOT CLUSTER LINKS CLUSTER MYID CLUSTER NODES CLUSTER REPLICAS CLUSTER SHARDS CLUSTER SLOTS READONLY READWRITE Blocked commands Memorystore for Valkey supports all Valkey 7.2 commands, except for the commands that are listed in this section.
- ACL DELUSER ACL DRYRUN ACL GETUSER ACL LIST ACL LOAD ACL LOG ACL SAVE ACL SETUSER ACL USERS ACL CAT ACL GENPASS ACL HELP ACL WHOAMI BGREWRITEAOF BGSAVE CLIENT NO-EVICT CLIENT PAUSE CLIENT UNBLOCK CLIENT UNPAUSE CLUSTER ADDSLOTS CLUSTER ADDSLOTSRANGE CLUSTER BUMPEPOCH CLUSTER DELSLOTS CLUSTER DELSLOTSRANGE CLUSTER FAILOVER CLUSTER FLUSHSLOTS CLUSTER FORGET CLUSTER MEET CLUSTER REPLICATE CLUSTER RESET CLUSTER SAVECONFIG CLUSTER SET-CONFIG-EPOCH CLUSTER SETSLOT CONFIG GET CONFIG RESETSTAT CONFIG REWRITE CONFIG SET DEBUG FAILOVER LASTSAVE MIGRATE MODULE LIST MODULE LOAD MODULE LOADEX MODULE UNLOAD MOVE PFDEBUG PFSELFTEST PSYNC REPLCONF REPLICAOF RESTORE-ASKING SAVE SHUTDOWN SLAVEOF SLOWLOG GET SLOWLOG LEN SLOWLOG RESET SWAPDB SYNC XSETID Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- Home Documentation Databases Memorystore Memorystore for Valkey Guides Send feedback Supported and blocked commands Stay organized with collections Save and categorize content based on your preferences.

### "Monitor access using audit logs \_|\_ Memorystore for Valkey \_|\_ Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/audit-logging](https://docs.cloud.google.com/memorystore/docs/valkey/audit-logging)
- Source ID: `site-iam-reference`
- Final score: 163
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Databases Memorystore Memorystore for Valkey Guides Send feedback Monitor access using audit logs Stay organized with collections Save and categorize content based on your preferences.
- For more information about querying by using the Logs Explorer, see Build queries in the Logs Explorer . gcloud The Google Cloud CLI provides a command-line interface to the Logging API.
- To read your Google Cloud project-level audit log entries, run the following command: gcloud logging read "logName : projects/ PROJECT ID /logs/cloudaudit.googleapis.com" \ --project= PROJECT ID To read your folder-level audit log entries, run the following command: gcloud logging read "logName : folders/ FOLDER ID /logs/cloudaudit.googleapis.com" \ --folder= FOLDER ID To read your organization-level audit log entries, run the following command: gcloud logging read "logName : organizations/ ORGANIZATION ID /logs/cloudaudit.googleapis.com" \ --organization= ORGANIZATION ID To read your Cloud Billing account-level audit log entries, run the following command: gcloud logging read "logName : billingAccounts/ BILLING ACCOUNT ID /logs/cloudaudit.googleapis.com" \ --billing-account= BILLING ACCOUNT ID Add the --freshness flag to your command to read logs that are more than 1 day old.
- Audited operations The following table summarizes which API operations correspond to each audit log type in Memorystore for Valkey: Audit logs category Memorystore for Valkey operations Admin Activity Instance operations: CreateInstance DeleteInstance UpdateInstance Token-Based Authentication Operations: AddTokenAuthUser DeleteTokenAuthUser AddAuthToken DeleteAuthToken Data Access (ADMIN READ) Instance operations: GetInstance ListInstances Token-Based Authentication Operations: ListTokenAuthUsers GetTokenAuthUser ListAuthTokens GetAuthToken Audit log format Audit log entries include the following objects: The log entry itself, which is an object of type LogEntry .

### "About scaling instance capacity \_|\_ Memorystore for Valkey \_|\_ Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/about-scaling-instance-capacity](https://docs.cloud.google.com/memorystore/docs/valkey/about-scaling-instance-capacity)
- Source ID: `site-iam-reference`
- Final score: 162
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Important: If you want to scale the node type for your instance down, and you haven't overwritten the default settings for the original node type, then Memorystore for Valkey modifies the default settings to those of the scaled node type.
- Home Documentation Databases Memorystore Memorystore for Valkey Guides Send feedback About scaling instance capacity Stay organized with collections Save and categorize content based on your preferences.
- If you run Memorystore for Valkey in a production environment, then we recommend using the standard-small , highmem-medium , or highmem-xlarge node types.
- To get details about the instance, including the IP address and port number, use the gcloud memorystore instances describe command.

