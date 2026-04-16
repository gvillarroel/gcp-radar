---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:52.717Z"
product_name: "Memorystore for Redis Cluster"
product_slug: "memorystore-for-redis-cluster"
feature_name: "System insights dashboard"
feature_slug: "system-insights-dashboard"
latest_feature_date: "2025-08-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/cluster/audit-logs"
  - "https://docs.cloud.google.com/memorystore/docs/cluster/client-library-connection"
  - "https://docs.cloud.google.com/memorystore/docs/cluster/cluster-node-specification"
  - "https://docs.cloud.google.com/memorystore/docs/cluster/supported-commands"
keywords:
  - "system"
  - "insights"
  - "dashboard"
  - "the"
  - "shows"
  - "cluster"
  - "level"
  - "and"
---

# System insights dashboard

Product: Memorystore for Redis Cluster
Coverage: MEDIUM

## Step 02 Summary

The System insights dashboard shows cluster-level and node-level monitoring metrics for your clusters.

## Extended Definition

The System insights dashboard shows cluster-level and node-level monitoring metrics for your clusters.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/cluster/audit-logs](https://docs.cloud.google.com/memorystore/docs/cluster/audit-logs)
- [https://docs.cloud.google.com/memorystore/docs/cluster/client-library-connection](https://docs.cloud.google.com/memorystore/docs/cluster/client-library-connection)
- [https://docs.cloud.google.com/memorystore/docs/cluster/cluster-node-specification](https://docs.cloud.google.com/memorystore/docs/cluster/cluster-node-specification)
- [https://docs.cloud.google.com/memorystore/docs/cluster/supported-commands](https://docs.cloud.google.com/memorystore/docs/cluster/supported-commands)

## Supporting Pages

### "Monitor access using audit logs \_|\_ Memorystore for Redis Cluster \_|\_\

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/audit-logs](https://docs.cloud.google.com/memorystore/docs/cluster/audit-logs)
- Source ID: `site-iam-reference`
- Final score: 176
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To read your Google Cloud project-level audit log entries, run the following command: gcloud logging read "logName : projects/ PROJECT ID /logs/cloudaudit.googleapis.com" \ --project= PROJECT ID To read your folder-level audit log entries, run the following command: gcloud logging read "logName : folders/ FOLDER ID /logs/cloudaudit.googleapis.com" \ --folder= FOLDER ID To read your organization-level audit log entries, run the following command: gcloud logging read "logName : organizations/ ORGANIZATION ID /logs/cloudaudit.googleapis.com" \ --organization= ORGANIZATION ID To read your Cloud Billing account-level audit log entries, run the following command: gcloud logging read "logName : billingAccounts/ BILLING ACCOUNT ID /logs/cloudaudit.googleapis.com" \ --billing-account= BILLING ACCOUNT ID Add the --freshness flag to your command to read logs that are more than 1 day old.
- Log name Cloud Audit Logs log names include resource identifiers indicating the Google Cloud project or other Google Cloud entity that owns the audit logs, and whether the log contains Admin Activity, Data Access, Policy Denied, or System Event audit logging data.
- When deciding which Logging-specific permissions and roles apply to your use case, consider the following: The Logs Viewer role ( roles/logging.viewer ) gives you read-only access to Admin Activity, Policy Denied, and System Event audit logs.
- The following are the audit log names, including variables for the resource identifiers: projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Factivity projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Fdata access projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Fsystem event projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Fpolicy folders/ FOLDER ID /logs/cloudaudit.googleapis.com%2Factivity folders/ FOLDER ID /logs/cloudaudit.googleapis.com%2Fdata access folders/ FOLDER ID /logs/cloudaudit.googleapis.com%2Fsystem event folders/ FOLDER ID /logs/cloudaudit.googleapis.com%2Fpolicy billingAccounts/ BILLING ACCOUNT ID /logs/cloudaudit.googleapis.com%2Factivity billingAccounts/ BILLING ACCOUNT ID /logs/cloudaudit.googleapis.com%2Fdata access billingAccounts/ BILLING ACCOUNT ID /logs/cloudaudit.googleapis.com%2Fsystem event billingAccounts/ BILLING ACCOUNT ID /logs/cloudaudit.googleapis.com%2Fpolicy organizations/ ORGANIZATION ID /logs/cloudaudit.googleapis.com%2Factivity organizations/ ORGANIZATION ID /logs/cloudaudit.googleapis.com%2Fdata access organizations/ ORGANIZATION ID /logs/cloudaudit.googleapis.com%2Fsystem event organizations/ ORGANIZATION ID /logs/cloudaudit.googleapis.com%2Fpolicy Note: The part of the log name following /logs/ must be URL-encoded.

### "Client library connection code samples \_|\_ Memorystore for Redis Cluster\

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/client-library-connection](https://docs.cloud.google.com/memorystore/docs/cluster/client-library-connection)
- Source ID: `site-docs-root`
- Final score: 165
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CertificateFactory cf = CertificateFactory . getInstance ( "X.509" ); X509Certificate caCert = ( X509Certificate ) cf . generateCertificate ( is ); TrustManagerFactory tmf = TrustManagerFactory . getInstance ( TrustManagerFactory . getDefaultAlgorithm ()); KeyStore ks = KeyStore . getInstance ( KeyStore . getDefaultType ()); ks . load ( null ); // You don't need the KeyStore cluster to come from a file. ks . setCertificateEntry ( "caCert" , caCert ); tmf . init ( ks ); SSLContext sslContext = SSLContext . getInstance ( "TLS" ); sslContext . init ( null , tmf . getTrustManagers (), null ); JedisCluster jedisCluster = new JedisCluster ( discovery , DefaultJedisClientConfig . builder () . connectionTimeoutMillis ( timeout ) . socketTimeoutMillis ( timeout ) . credentialsProvider ( credentialsProvider ) . ssl ( true ) . sslSocketFactory ( sslContext . getSocketFactory ()) . build (), maxAttempts , config ); // Perform operations on the cluster jedisCluster . set ( "myKey" , "Hello, Redis Cluster!" ); String value = jedisCluster . get ( "myKey" ); System . out . println ( "Value for myKey: " + value ); int count = 0 ; for ( int i = 0 ; i 1000 ; i ++ ) { String k = "jediskey" + String . valueOf ( i ); String v = "jedisvalue" + String . valueOf ( i ); jedisCluster . set ( k , v ); String got = jedisCluster . get ( k ); if ( got . equals ( v )) { count ++ ; } else { System . out . println ( "unexpected value" ); } } System . out . println ( "Successfully got " + String . valueOf ( count ) + " keys" ); // Disconnect from the cluster jedisCluster . close (); // Cleanup the resources used by the provider (( Closeable ) credentialsProvider ). close (); } } Go We recommend using Go , versions 1.24.5 and later. package main import ( "context" "crypto/tls" "crypto/x509" "flag" "fmt" "io/ioutil" "log" "sync" "time" credentials "google.golang.org/genproto/googleapis/iam/credentials/v1" "github.com/golang/protobuf/ptypes" "github.com/redis/go-redis/v9" "google.golang.org/api/option" gtransport "google.golang.org/api/transport/grpc" ) var ( svcAccount = flag .
- IamCredentialsClient ; import io.lettuce.core.RedisCredentials ; import io.lettuce.core.RedisCredentialsProvider ; import io.lettuce.core.RedisURI ; import io.lettuce.core.SocketOptions ; import io.lettuce.core.SslOptions ; import io.lettuce.core.cluster.ClusterClientOptions ; import io.lettuce.core.cluster.ClusterTopologyRefreshOptions ; import io.lettuce.core.cluster.RedisClusterClient ; import io.lettuce.core.cluster.api.StatefulRedisClusterConnection ; import io.lettuce.core.cluster.api.sync.RedisAdvancedClusterCommands ; import io.lettuce.core.cluster.models.partitions.RedisClusterNode ; import io.lettuce.core.resource.ClientResources ; import io.lettuce.core.resource.DefaultClientResources ; import io.lettuce.core.resource.Delay ; import java.io.Closeable ; import java.io.File ; import java.time.Duration ; import java.time.Instant ; import java.util.ArrayList ; import java.util.Collections ; import java.util.List ; import java.util.concurrent.Executors ; import java.util.concurrent.ScheduledExecutorService ; import java.util.concurrent.TimeUnit ; import java.util.logging.Level ; import java.util.logging.Logger ; import reactor.core.publisher.Mono ; public class IAMAuth { / This thread-safe implementation (excluding the main app below) is intended for production use.
- IamCredentialsClient ; import java.io.Closeable ; import java.io.FileInputStream ; import java.io.InputStream ; import java.security.KeyStore ; import java.security.cert.CertificateFactory ; import java.security.cert.X509Certificate ; import java.time.Duration ; import java.time.Instant ; import java.util.ArrayList ; import java.util.Collections ; import java.util.List ; import java.util.concurrent.Executors ; import java.util.concurrent.ScheduledExecutorService ; import java.util.concurrent.TimeUnit ; import java.util.logging.Level ; import java.util.logging.Logger ; import javax.net.ssl.SSLContext ; import javax.net.ssl.TrustManagerFactory ; import org.apache.commons.pool2.impl.GenericObjectPoolConfig ; import redis.clients.jedis.Connection ; import redis.clients.jedis.DefaultJedisClientConfig ; import redis.clients.jedis.DefaultRedisCredentials ; import redis.clients.jedis.HostAndPort ; import redis.clients.jedis.JedisCluster ; import redis.clients.jedis.RedisCredentials ; import redis.clients.jedis.RedisCredentialsProvider ; / Customers are free to update/replace code as they see fit. / public class IAMAuth { / This thread-safe implementation (excluding the main app below) is intended for production use.
- NOADDR ))) . validateClusterNodeMembership ( false ) . build ()); // Establish connection to Redis Cluster StatefulRedisClusterConnection String , String > connection = clusterClient . connect (); // Retrieve synchronous Redis Cluster commands RedisAdvancedClusterCommands String , String > syncCommands = connection . sync (); // Perform Redis operations syncCommands . set ( "key1" , "value1" ); String value = syncCommands . get ( "key1" ); System . out . println ( "Retrieved value: " + value ); int count = 0 ; for ( int i = 0 ; i 1000 ; i ++ ) { String k = "lettucekey" + String . valueOf ( i ); String v = "lettucevalue" + String . valueOf ( i ); syncCommands . set ( k , v ); String got = syncCommands . get ( k ); if ( got . equals ( v )) { count ++ ; } else { System . out . println ( "unexpected value" ); } } System . out . println ( "Successfully got " + String . valueOf ( count ) + " keys" ); // Close the connection and shutdown the client connection . close (); clusterClient . shutdown (); (( Closeable ) credentialsProvider ). close (); } } Jedis We recommend using Jedis , versions 4.4.0 and later. import com.google.cloud.iam.credentials.v1.

### "Cluster and node specification \_|\_ Memorystore for Redis Cluster \_|\_\

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/cluster-node-specification](https://docs.cloud.google.com/memorystore/docs/cluster/cluster-node-specification)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- Cluster specification This section shows minimum and maximum cluster capacities given the cluster shape, node type, and replica count.
- Maximum writable capacity Node type and size Max capacity given cluster shape of 250 primary nodes and 0 replicas per node Max capacity given cluster shape of 125 primary nodes and 1 replicas per node Max capacity given cluster shape of 83 primary nodes and 2 replicas per node Max capacity given cluster shape of 62 primary nodes and 3 replicas per node Max capacity given cluster shape of 50 primary nodes and 4 replicas per node Max capacity given cluster shape of 41 primary nodes and 5 replicas per node redis-shared-core-nano - 1.4 GB 350 GB 175 GB 116.2 GB 86.8 GB 70 GB 57.4 GB redis-standard-small - 6.5 GB 1,625 GB 812.5 GB 539.5 GB 403 GB 325 GB 266.5 GB redis-highmem-medium - 13 GB 3,250 GB 1,625 GB 1,079 GB 806 GB 650 GB 533 GB redis-highmem-xlarge - 58 GB 14,500 GB 7,250 GB 4,814 GB 3,596 GB 2,900 GB 2,378 GB Performance Using the OSS memtier benchmarking tool in the us-central1 region yielded 120,000 - 130,000 operations per second per 2 vCPU node ( redis-standard-small and redis-highmem-medium ) with microseconds latency and 1KiB data size.
- The redis-standard-small node type lets you provision small clusters, and grow your cluster by smaller increments at potentially lower costs than other node types. redis-standard-small also offers the advantage of distributing your keyspace across more nodes with a higher total vCPU count.
- If you run Memorystore for Redis Cluster in a production environment, then we recommend using the redis-standard-small , redis-highmem-medium , or redis-highmem-xlarge node types.

### "Supported and blocked commands \_|\_ Memorystore for Redis Cluster \_|\_\

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/supported-commands](https://docs.cloud.google.com/memorystore/docs/cluster/supported-commands)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- LCS LINDEX LINSERT LLEN LMOVE LMPOP LOLWUT LPOP LPOS LPUSH LPUSHX LRANGE LREM LSET LTRIM MEMORY DOCTOR MEMORY HELP MEMORY MALLOC-STATS MEMORY PURGE MEMORY STATS MEMORY USAGE MGET MODULE HELP MONITOR MSET MSETNX MULTI OBJECT ENCODING OBJECT FREQ OBJECT HELP OBJECT IDLETIME OBJECT REFCOUNT PERSIST PEXPIRE PEXPIREAT PEXPIRETIME PFADD PFCOUNT PFMERGE PING PSETEX PSUBSCRIBE PTTL PUBLISH PUBSUB CHANNELS PUBSUB HELP PUBSUB NUMPAT PUBSUB NUMSUB PUBSUB SHARDCHANNELS PUBSUB SHARDNUMSUB PUNSUBSCRIBE QUIT RANDOMKEY READONLY READWRITE RENAME RENAMENX RESET RESTORE ROLE RPOP RPOPLPUSH RPUSH RPUSHX SADD SCAN SCARD SCRIPT DEBUG SCRIPT EXISTS SCRIPT FLUSH SCRIPT HELP SCRIPT KILL SCRIPT LOAD SDIFF SDIFFSTORE SELECT SET SETBIT SETEX SETNX SETRANGE SINTER SINTERCARD SINTERSTORE SISMEMBER SLOWLOG GET SLOWLOG HELP SLOWLOG LEN SLOWLOG RESET SMEMBERS SMISMEMBER SMOVE SORT SORT RO SPOP SPUBLISH SRANDMEMBER SREM SSCAN SSUBSCRIBE STRLEN SUBSCRIBE SUBSTR SUNION SUNIONSTORE SUNSUBSCRIBE TIME TOUCH TTL TYPE UNLINK UNSUBSCRIBE UNWATCH WAIT WATCH XACK XADD XAUTOCLAIM XCLAIM XDEL XGROUP CREATE XGROUP CREATECONSUMER XGROUP DELCONSUMER XGROUP DESTROY XGROUP HELP XGROUP SETID XINFO CONSUMERS XINFO GROUPS XINFO HELP XINFO STREAM XLEN XPENDING XRANGE XREAD XREADGROUP XREVRANGE XTRIM ZADD ZCARD ZCOUNT ZDIFF ZDIFFSTORE ZINCRBY ZINTER ZINTERCARD ZINTERSTORE ZLEXCOUNT ZMPOP ZMSCORE ZPOPMAX ZPOPMIN ZRANDMEMBER ZRANGE ZRANGEBYLEX ZRANGEBYSCORE ZRANGESTORE ZRANK ZREM ZREMRANGEBYLEX ZREMRANGEBYRANK ZREMRANGEBYSCORE ZREVRANGE ZREVRANGEBYLEX ZREVRANGEBYSCORE ZREVRANK ZSCAN ZSCORE ZUNION ZUNIONSTORE Blocked commands Memorystore for Redis Cluster supports all Redis 7.2 commands, except for the commands that are listed in this section.
- Supported commands Memorystore for Redis Cluster supports the following commands: APPEND ASKING AUTH BITCOUNT BITFIELD BITFIELD RO BITOP BITPOS BLMOVE BLMPOP BLPOP BRPOP BRPOPLPUSH BZMPOP BZPOPMAX BZPOPMIN CLIENT CACHING CLIENT GETNAME CLIENT GETREDIR CLIENT HELP CLIENT ID CLIENT INFO CLIENT KILL CLIENT LIST CLIENT REPLY CLIENT SETNAME CLIENT TRACKING CLIENT TRACKINGINFO CLUSTER COUNT-FAILURE-REPORTS CLUSTER COUNTKEYSINSLOT CLUSTER GETKEYSINSLOT CLUSTER HELP CLUSTER INFO CLUSTER KEYSLOT CLUSTER LINKS CLUSTER MYID CLUSTER NODES CLUSTER REPLICAS CLUSTER SHARDS CLUSTER SLAVES CLUSTER SLOTS COMMAND COUNT COMMAND DOCS COMMAND GETKEYS COMMAND GETKEYSANDFLAGS COMMAND HELP COMMAND INFO COMMAND LIST CONFIG HELP COPY DBSIZE DECR DECRBY DEL DISCARD DUMP ECHO EVAL EVAL RO EVALSHA EVALSHA RO EXEC EXISTS EXPIRE EXPIREAT EXPIRETIME FCALL FCALL RO FLUSHALL FLUSHDB FUNCTION DELETE FUNCTION DUMP FUNCTION FLUSH FUNCTION HELP FUNCTION KILL FUNCTION LIST FUNCTION LOAD FUNCTION RESTORE FUNCTION STATS GEOADD GEODIST GEOHASH GEOPOS GEORADIUS GEORADIUS RO GEORADIUSBYMEMBER GEORADIUSBYMEMBER RO GEOSEARCH GEOSEARCHSTORE GET GETBIT GETDEL GETEX GETRANGE GETSET HDEL HELLO HEXISTS HGET HGETALL HINCRBY HINCRBYFLOAT HKEYS HLEN HMGET HMSET HRANDFIELD HSCAN HSET HSETNX HSTRLEN HVALS INCR INCRBY INCRBYFLOAT INFO KEYS LATENCY DOCTOR LATENCY GRAPH LATENCY HELP LATENCY HISTOGRAM LATENCY HISTORY LATENCY LATEST LATENCY RESET Note : The LATENCY command group isn't blocked.
- ACL DELUSER ACL DRYRUN ACL GETUSER ACL LIST ACL LOAD ACL LOG ACL SAVE ACL SETUSER ACL USERS ACL CAT ACL GENPASS ACL HELP ACL WHOAMI BGREWRITEAOF BGSAVE CLIENT NO-EVICT CLIENT PAUSE CLIENT SETINFO CLIENT UNBLOCK CLIENT UNPAUSE CLUSTER ADDSLOTS CLUSTER ADDSLOTSRANGE CLUSTER BUMPEPOCH CLUSTER DELSLOTS CLUSTER DELSLOTSRANGE CLUSTER FAILOVER CLUSTER FLUSHSLOTS CLUSTER FORGET CLUSTER MEET CLUSTER REPLICATE CLUSTER RESET CLUSTER SAVECONFIG CLUSTER SET-CONFIG-EPOCH CLUSTER SETSLOT CONFIG GET CONFIG RESETSTAT CONFIG REWRITE CONFIG SET DEBUG FAILOVER LASTSAVE MIGRATE MODULE LIST MODULE LOAD MODULE LOADEX MODULE UNLOAD MOVE PFDEBUG PFSELFTEST PSYNC REPLCONF REPLICAOF RESTORE-ASKING SAVE SHUTDOWN SLAVEOF SWAPDB SYNC XSETID Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- This page lists the commands from the official Redis command library that Memorystore for Redis Cluster supports and the commands that it blocks .

