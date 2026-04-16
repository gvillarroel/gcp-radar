---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:52.726Z"
product_name: "Memorystore for Redis Cluster"
product_slug: "memorystore-for-redis-cluster"
feature_name: "Node-level monitoring metrics"
feature_slug: "node-level-monitoring-metrics"
latest_feature_date: "2024-11-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/cluster/about-rdb-persistence"
  - "https://docs.cloud.google.com/memorystore/docs/cluster/general-best-practices"
  - "https://docs.cloud.google.com/memorystore/docs/cluster/memorystore-for-redis-cluster-overview"
  - "https://docs.cloud.google.com/memorystore/docs/cluster/client-library-connection"
keywords:
  - "node"
  - "level"
  - "monitoring"
  - "metrics"
  - "the"
  - "supports"
  - "memorystore"
  - "for"
---

# Node-level monitoring metrics

Product: Memorystore for Redis Cluster
Coverage: MEDIUM

## Step 02 Summary

The service supports node-level monitoring metrics; Memorystore for Redis Cluster supports node-level monitoring metrics.

## Extended Definition

The service supports node-level monitoring metrics; Memorystore for Redis Cluster supports node-level monitoring metrics.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/cluster/about-rdb-persistence](https://docs.cloud.google.com/memorystore/docs/cluster/about-rdb-persistence)
- [https://docs.cloud.google.com/memorystore/docs/cluster/general-best-practices](https://docs.cloud.google.com/memorystore/docs/cluster/general-best-practices)
- [https://docs.cloud.google.com/memorystore/docs/cluster/memorystore-for-redis-cluster-overview](https://docs.cloud.google.com/memorystore/docs/cluster/memorystore-for-redis-cluster-overview)
- [https://docs.cloud.google.com/memorystore/docs/cluster/client-library-connection](https://docs.cloud.google.com/memorystore/docs/cluster/client-library-connection)

## Supporting Pages

### "About RDB persistence \_|\_ Memorystore for Redis Cluster \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/about-rdb-persistence](https://docs.cloud.google.com/memorystore/docs/cluster/about-rdb-persistence)
- Source ID: `site-docs-root`
- Final score: 201
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Managing performance impact You can monitor the performance impact a snapshot has on your Memorystore instance by viewing the metrics available through Cloud Monitoring such as CPU usage and memory usage.
- Memorystore for Redis Cluster also supports AOF persistence, but you must choose either the AOF or RDB persistence mode, because both can't be enabled at the same time.
- Recovery behavior Memorystore for Redis Cluster nodes failover to replicas as the primary recovery mechanism, rather than loading from a snapshot.
- For a list of metrics available for monitoring snapshots, see Persistence metrics .

### Best practices for Memorystore for Redis Cluster \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/general-best-practices](https://docs.cloud.google.com/memorystore/docs/cluster/general-best-practices)
- Source ID: `site-docs-root`
- Final score: 191
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Using these commands might result in the following performance issues: High latency and client timeouts Memory pressure caused by commands that increase memory usage Data loss during node replication and synchronization because the Redis main thread is blocked Starved health checks, observability, and replication The following table lists examples of Redis commands that are resource-intensive and provides you with alternatives that are resource-efficient.
- Depending on the number of replicas you provision per node, we recommend the following /cluster/cpu/maximum utilization CPU usage targets: For instances with one replica per node, target a /cluster/cpu/maximum utilization value of 0.5 seconds for the primary and 0.5 seconds for the replica.
- RDB persistence and adding replicas For best results of backing up your instance with RDB snapshots or adding replicas to your instance, use the following best practices: Memory management RDB snapshots use a process fork and 'copy-on-write' mechanism to take a snapshot of node data.
- When a MOVED redirection is received from the server, such as in the situation of a failover when all slots served by the former primary node are taken over by the replica, or re-sharding when slots are being moved from the source primary to the target primary node.

### Memorystore for Redis Cluster overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/memorystore-for-redis-cluster-overview](https://docs.cloud.google.com/memorystore/docs/cluster/memorystore-for-redis-cluster-overview)
- Source ID: `site-api-reference`
- Final score: 179
- Re-rank relevance: N/A

Evidence snippets:
- Redis version Memorystore for Redis Cluster is based on open-source Redis version 7.x and supports a subset of the total Redis command library .
- Key concepts and terms Hierarchical resource structure Memorystore for Redis Cluster gathers the various resources used in a Redis deployment into a hierarchical structure that simplifies administration and management.
- When replica nodes are added, Memorystore automatically distributes the nodes of a shard across zones to provide higher availability and throughput.
- Memorystore is based on and is compatible with open-source Redis versions 7.2 and earlier and supports a subset of the total Redis command library.

### "Client library connection code samples \_|\_ Memorystore for Redis Cluster\

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/client-library-connection](https://docs.cloud.google.com/memorystore/docs/cluster/client-library-connection)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- IamCredentialsClient ; import io.lettuce.core.RedisCredentials ; import io.lettuce.core.RedisCredentialsProvider ; import io.lettuce.core.RedisURI ; import io.lettuce.core.SocketOptions ; import io.lettuce.core.SslOptions ; import io.lettuce.core.cluster.ClusterClientOptions ; import io.lettuce.core.cluster.ClusterTopologyRefreshOptions ; import io.lettuce.core.cluster.RedisClusterClient ; import io.lettuce.core.cluster.api.StatefulRedisClusterConnection ; import io.lettuce.core.cluster.api.sync.RedisAdvancedClusterCommands ; import io.lettuce.core.cluster.models.partitions.RedisClusterNode ; import io.lettuce.core.resource.ClientResources ; import io.lettuce.core.resource.DefaultClientResources ; import io.lettuce.core.resource.Delay ; import java.io.Closeable ; import java.io.File ; import java.time.Duration ; import java.time.Instant ; import java.util.ArrayList ; import java.util.Collections ; import java.util.List ; import java.util.concurrent.Executors ; import java.util.concurrent.ScheduledExecutorService ; import java.util.concurrent.TimeUnit ; import java.util.logging.Level ; import java.util.logging.Logger ; import reactor.core.publisher.Mono ; public class IAMAuth { / This thread-safe implementation (excluding the main app below) is intended for production use.
- NOADDR ))) . validateClusterNodeMembership ( false ) . build ()); // Create a connection pool GenericObjectPool<StatefulRedisClusterConnection<String , String > pool = ConnectionPoolSupport . createGenericObjectPool (() -> clusterClient . connect (), new GenericObjectPoolConfig ()); pool . setMaxTotal ( MAX CONNECTIONS IN CONNECTION POOL ); // Get a connection from the connection pool StatefulRedisClusterConnection<String , String > connection = pool . borrowObject (); // Get a cluster sync command and call 'set' RedisAdvancedClusterCommands<String , String > syncCommands = connection . sync (); syncCommands . set ( key , value ); In-transit encryption client library code sample This section gives an example of client code for authenticating with in-transit encryption for your Memorystore cluster with the go-redis client library. go-redis We recommend using go-redis, versions 9.11.0 and later. import ( "context" "crypto/tls" "crypto/x509" "io/ioutil" "log" "time" "github.com/go-redis/redis/v9" ) func example () { // Load CA cert caFilePath := caCert , err := ioutil .
- MILLISECONDS ) // 100 millisecond base ). build (); // Create a cluster client with the URI and resources RedisClusterClient clusterClient = RedisClusterClient . create ( resources , redisUri ); // Configure the topology refreshment options // Enable periodic cluster topology updates so that the client updates the cluster topology in the intervals of // 60 seconds // Enable adaptive topology refresh that uses all triggers: MOVED REDIRECT, ASK REDIRECT, // PERSISTENT RECONNECTS, UNCOVERED SLOT, UNKNOWN NODE // Disable dynamicRefreshSources so that only the initial seed nodes (Memorystore for Redis Cluster // discovery endpoint) will be used as the source for topology discovery // Enable closing stale connections when refreshing the cluster topology.
- IamCredentialsClient ; import java.io.Closeable ; import java.io.FileInputStream ; import java.io.InputStream ; import java.security.KeyStore ; import java.security.cert.CertificateFactory ; import java.security.cert.X509Certificate ; import java.time.Duration ; import java.time.Instant ; import java.util.ArrayList ; import java.util.Collections ; import java.util.List ; import java.util.concurrent.Executors ; import java.util.concurrent.ScheduledExecutorService ; import java.util.concurrent.TimeUnit ; import java.util.logging.Level ; import java.util.logging.Logger ; import javax.net.ssl.SSLContext ; import javax.net.ssl.TrustManagerFactory ; import org.apache.commons.pool2.impl.GenericObjectPoolConfig ; import redis.clients.jedis.Connection ; import redis.clients.jedis.DefaultJedisClientConfig ; import redis.clients.jedis.DefaultRedisCredentials ; import redis.clients.jedis.HostAndPort ; import redis.clients.jedis.JedisCluster ; import redis.clients.jedis.RedisCredentials ; import redis.clients.jedis.RedisCredentialsProvider ; / Customers are free to update/replace code as they see fit. / public class IAMAuth { / This thread-safe implementation (excluding the main app below) is intended for production use.

