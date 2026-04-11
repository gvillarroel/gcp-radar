---
title: "Best practices for Memorystore for Redis Cluster \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/memorystore/docs/cluster/general-best-practices
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/memorystore/docs/cluster
source_metadata:
  url: https://docs.cloud.google.com/memorystore/docs/cluster/general-best-practices
  title: "Best practices for Memorystore for Redis Cluster \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Memorystore
Memorystore for Redis Cluster
Guides
Send feedback
Best practices for Memorystore for Redis Cluster
Stay organized with collections
Save and categorize content based on your preferences.
This page provides guidance on optimally using Memorystore for Redis Cluster. This page also
points out potential issues to avoid.
Note: To view Redis cluster client configuration examples, see
Client library code samples .
Memory management best practices
This section describes strategies for managing instance memory so that
Memorystore for Redis Cluster works efficiently for your application.
Memory management concepts
Write load - The volume and speed at which you add or update keys on your
Redis cluster. Your write load can range from normal to very high depending on
your Redis use case and application usage patterns.
Eviction policy - Memorystore for Redis Cluster uses the volatile-lru
eviction policy. You can use commands like EXPIRE command to set evictions for keys.
Monitor a cluster that has a normal write load
View the /cluster/memory/maximum_utilization metric. If /cluster/memory/maximum_utilization is at 100% or lower, your
Redis cluster performs well when you use a normal write load.
However, if your memory usage approaches 100% and you expect data usage to grow,
you should scale up your cluster size to make room for new data.
Monitor a cluster that has a high write load
View the /cluster/memory/maximum_utilization metric. Depending on severity of your high write load, your cluster can
experience performance issues at the following thresholds:
Very high write loads can experience issues if /cluster/memory/maximum_utilization
reaches 65% or higher.
Moderately high write loads can experience issues if /cluster/memory/maximum_utilization
reaches 85% or higher.
In these scenarios you should scale up your cluster size to improve performance.
If you run into issues, or are concerned your instance has a high write load,
reach out to Google Cloud Support .
Scale shards
When you Scale the number of shards
in an instance, you should scale during periods of low writes. Scaling during
periods of high write load can put memory pressure on your instance due to
memory overhead caused by replication or slot migration.
If your Redis use case uses key evictions, scaling to a smaller cluster size can
reduce your cache hit ratio. In this circumstance, however, you don't need to
worry about losing data, since key eviction is expected.
For Redis use cases where you don't want to lose keys, you should only scale
down to a smaller cluster that still has enough room for your data. Your new
target shard count should allow for at least 1.5 times the memory used by data.
In other words, you should provision enough shards for 1.5 times the amount of
data in your cluster. You can use the /cluster/memory/total_used_memory metric to see how much data is stored in
your instance.
CPU usage best practices
If an unexpected zonal outage occurs, this leads to reduced CPU resources for
your cluster due to lost capacity from nodes in the unavailable zone. We
recommend using high available
clusters. Using multiple replicas per shard (as opposed to one replica per
shard) provides additional CPU resources during an outage. You can have up to
five replicas per shard.
Additionally, we recommend managing node CPU usage so that nodes have enough CPU
overhead to handle additional traffic from lost capacity if an unexpected zonal
outage happens. You should monitor CPU usage for primaries and replicas using
the Main Thread CPU Seconds /cluster/cpu/maximum_utilization metric.
Depending on the number of replicas you provision per node, we recommend the
following /cluster/cpu/maximum_utilization CPU usage targets:
For instances with one replica per node, target a /cluster/cpu/maximum_utilization
value of 0.5 seconds for the primary and 0.5 seconds for the replica.
For instances with two replicas per node or greater, target a /cluster/cpu/maximum_utilization
value of 0.9 seconds for the primary and 0.5 seconds for each replica.
If values for the metric exceed these recommendations, then we recommend scaling
up the number of shards in your instance. If you have fewer than five replicas
for your instance, then you can also scale up the number of replicas, up to a
maximum of five replicas.
Resource-intensive Redis commands
We strongly recommend that you avoid using Redis commands that are
resource-intensive. Using these commands might result in the following
performance issues:
High latency and client timeouts
Memory pressure caused by commands that increase memory usage
Data loss during node replication and synchronization because the Redis main
thread is blocked
Starved health checks, observability, and replication
The following table lists examples of Redis commands that are resource-intensive
and provides you with alternatives that are resource-efficient.
Tip : In addition to being resource-intensive, as
your total data size increases, so does the cost of using these commands.
To find which long-running commands you use, use SLOWLOG . This tool provides you with a list of
commands that take the longest to run. As a result, you know the commands that
cause latency issues. To determine resource-efficient alternatives for these
commands, refer to the following table.
Category
Resource-intensive command
Resource-efficient alternative
Run for the entire keyspace
KEYS
SCAN
Run for a variable-length keyset
LRANGE
Limit the size of the range that you use for a query.
ZRANGE
Limit the size of the range that you use for a query.
HGETALL
HSCAN
SMEMBERS
SSCAN
Block the running of a script
EVAL
Ensure that your script doesn't run indefinitely.
EVALSHA
Ensure that your script doesn't run indefinitely.
Remove files and links
DELETE
UNLINK
Publish and subscribe
PUBLISH
SPUBLISH
SUBSCRIBE
SSUBSCRIBE
Redis client best practices
Your application must use a cluster aware Redis client when connecting to a
Memorystore for Redis Cluster instance. For examples of cluster aware clients and
sample configurations, see Client library code samples . Your client must maintain a map of hash slots to
the corresponding nodes in the cluster in order to send requests to the right
nodes and avoid the performance overhead caused by cluster redirections.
Client mapping
Clients must obtain a complete list of slots and the mapped nodes in the
following situations:
When the client is initialized, it must populate the initial slot to nodes
mapping.
When a MOVED redirection is received from the server, such as in the
situation of a failover when all slots served by the former primary node are
taken over by the replica, or re-sharding when slots are being moved from the
source primary to the target primary node.
When a CLUSTERDOWN error is received from the server or connections to a
particular server run into timeouts persistently.
When a READONLY error is received from the server. This can happen when a
primary is demoted to replica.
Additionally, clients should periodically refresh the topology to keep the
clients warmed up for any changes and learn about changes that may not result in
redirections or errors from the server, such as when new replica nodes are
added. Note that any stale connections should also be closed as part of the
topology refresh to reduce the need to handle failed connections during command
runtime.
Client discovery
Client discovery is usually done by issuing a CLUSTER SLOT , CLUSTER NODE , or
CLUSTER SHARDS command to the Redis server. We recommend using the
CLUSTER SHARDS command. CLUSTER SHARDS replaces the CLUSTER SLOTS command
(deprecated), by providing a more efficient and extensible representation of the
cluster.
The size of the response for the cluster client discovery commands can vary
based on the cluster size and topology. Larger clusters with more nodes produce
a larger response. As a result, it's important to ensure that the number of
clients doing the cluster topology discovery doesn't grow unbounded.
These topology refreshes are expensive on the Redis server but are also
important for application availability. Therefore it is important to ensure that
each client makes a single discovery request at any given time (and caches
result in-memory), and the number of clients making the requests be kept bounded
to avoid overloading the server.
For example, when the client application starts up or loses connection from the
server and must perform cluster discovery, one common mistake is that the client
application makes several reconnection and discovery requests without adding
exponential backoff upon retry.
This can render the Redis server unresponsive for a prolonged period of time,
causing very high CPU utilization.
Avoid discovery overload on Redis
To mitigate the impact caused by a sudden influx of connection and discovery
requests, we recommend the following:
Implement a client connection pool with a finite and small size to
bound the number of concurrent incoming connections from the client
application.
When the client disconnects from the server due to timeout, retry with
exponential backoff with jitter. This helps to avoid multiple clients
overwhelming the server at the same time.
Use the Memorystore for Redis Cluster discovery endpoint to perform cluster
discovery. The discovery endpoint is highly available and is load balanced
across all the nodes in the cluster. Moreover, the discovery endpoint attempts
to route the cluster discovery requests to nodes with the most up-to-date
topology view.
Persistence best practices
This section explains best practices for persistence .
RDB persistence and adding replicas
For best results of backing up your instance with RDB snapshots or adding
replicas to your instance, use the following best practices:
Memory management
RDB snapshots use a process fork and 'copy-on-write' mechanism to take a snapshot of node data.
Depending on the pattern of writes to nodes, the used memory of the nodes grows
as pages touched by the writes are copied. The memory footprint can be up to
double the size of the data in the node.
To ensure that nodes have sufficient memory to complete the snapshot, keep or set
maxmemory at 80% of
the node capacity so that 20% is reserved for overhead. This memory overhead,
in addition to monitoring snapshots, helps you manage your workload to have
successful snapshots. Also, when you add replicas, lower write traffic as much
as possible. See Monitor a cluster that has a high write load to learn more.
Note : If you add a replica to a cluster that
uses more than 80% of the cluster's maximum memory, then the operation fails
and you receive an error message.
To resolve this issue, reduce your cluster's memory usage in one of the
following ways:
Lower your cluster's memory footprint to less than 80% of the node's
maximum allowed memory.
Scale
the node type for your cluster so that it has more memory.
After your cluster's memory usage is below the 80% threshold, add the
replica again.
Stale snapshots
Recovering nodes from a stale snapshot can cause performance issues for your
application as it tries to reconcile a significant amount of stale keys or other
changes to your database such as a schema change. If you are concerned about
recovering from a stale snapshot, you can disable the RDB persistence feature.
Once you re-enable persistence, a snapshot is taken at the next scheduled
snapshot interval.
Performance impact of RDB snapshots
Depending on your workload pattern RDB snapshots can impact the performance of
the instance and increase latency for your applications. You can minimize the
performance impact of RDB snapshots by scheduling them to run during periods of
low instance traffic if you are comfortable with less frequent snapshots.
For example, if your instance has low traffic from 1 AM to 4 AM, you can set the
start time to 3 AM and set the interval to 24 hours.
If your system has a constant load and requires frequent snapshots, you should
carefully evaluate the performance impact, and weigh the benefits of using RDB
snapshots for the workload.
Add a replica
Adding a replica requires an RDB snapshot. For more information about RDB
snapshots, see Memory management .
When to use a single-zone cluster
If you configure a cluster so that it doesn't use replicas, then we recommend
that you use a single-zone cluster .
Here's why:
Cost and performance
If minimizing your cost and having peak performance for your clients that are
located in the same region are your primary drivers, then we recommend that you
choose a single-zone cluster.
Minimize your outage impact
When you choose a single-zone cluster, zonal outages are less likely to impact
your cluster. By placing all nodes within a single zone, the chance of a zonal
outage affecting your server drops from 100% to 33%. There's a 33% chance that
the zone where your cluster is located goes down, as opposed to a 100% chance
that nodes, which are located in the unavailable zone, are impacted.
Rapid recovery
If a zonal outage occurs for a single-zone cluster, then Memorystore for Redis Cluster
streamlines the recovery of your data. You can provision a new cluster in a
functioning zone quickly and redirect your application for minimally interrupted
operations.
Lettuce best practices
This section describes best practices for using Lettuce
to connect to a Memorystore for Redis Cluster instance.
Update parameter values
When you use Lettuce, change the validateClusterNodeMembership parameter to
false . Otherwise, when the topology changes, you might get unknownPartition
errors.
Enable Transport Layer Security (TLS)
This section explains the security benefits and performance implications of
using Transport Layer Security (TLS), along with recommendations for its
enablement.
Security benefits
By using TLS, you get the following security benefits:
Identity and Access Management (IAM) authentication :
TLS uses this type of authentication to protect against server spoofing attacks,
such as person-in-the-middle attacks.
In-transit encryption :
Google Cloud's built-in encryption protects traffic within Google's network at
an infrastructure level. However, this involves trusting both Google's host and
network stacks. Although this encryption is transparent and enabled by default,
it's not end-to-end. On the other hand, TLS uses in-transit encryption at the
application layer. This end-to-end encryption gives you more control over your
encryption keys and processes.
Authentication token protection : If you use IAM
authentication, then enabling TLS minimizes the risk of exposing and leaking
your authentication tokens.
Performance implications
TLS impacts performance in the following ways:
Establish connections :
A client and server that have established a TLS session can resume the session
without repeating the resource-intensive process of establishing the connection
between the client and the server. By enabling TLS resumption, you reduce the
overhead of establishing a connection between the client and the server.
If you don't establish TLS resumption, then establishing connections is
resource-intensive. For both new and existing connections, many connections
between the client and the server might lead to connection timeouts. This can
cause a snowball effect because Memorystore for Redis Cluster attempts to re-establish
timed-out connections, which increases the resources it uses to establish
connections.
Encrypt and decrypt data :
Data encryption and decryption involve CPU-intensive operations that impact both
the client and the server. This can reduce your cluster's capacity and increase
the cluster's latency.
Recommendations
When considering whether to enable TLS, we recommend that you evaluate your
security policies while considering the benefits and drawbacks of TLS. If you
choose to enable TLS, then keep the following considerations in mind:
Enabling TLS resumption mitigates overhead for establishing connections. A
connection between the client and the server is required only for the initial
connection. However, a sudden expansion of the client's cluster size might
result in a brief disruption that's caused by each new client host's initial
full handshake.
Although some client libraries might not
offer built-in controls to enable TLS, you can use custom code to integrate
this functionality into your clusters.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
