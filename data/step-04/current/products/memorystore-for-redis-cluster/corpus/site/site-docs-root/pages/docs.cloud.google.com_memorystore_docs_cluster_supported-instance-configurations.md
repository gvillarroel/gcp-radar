---
title: "Supported instance configurations \_|\_ Memorystore for Redis Cluster \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/memorystore/docs/cluster/supported-instance-configurations
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/memorystore/docs/cluster
source_metadata:
  url: https://docs.cloud.google.com/memorystore/docs/cluster/supported-instance-configurations
  title: "Supported instance configurations \_|\_ Memorystore for Redis Cluster \_\
    |\_ Google Cloud Documentation"
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
Supported instance configurations
Stay organized with collections
Save and categorize content based on your preferences.
This page describes maxmemory policies and other Redis configurations available
for Memorystore for Redis Cluster.
For instructions on how to modify the configurations listed on this page, see
Configure an instance .
Maxmemory policies
When your instance memory is full, and a new write comes in, Redis evicts
keys to make room for the write based on your instance's maxmemory policy. The
default maxmemory policy for Memorystore for Redis Cluster is volatile-lru . You
can also use one of the following maxmemory policies:
noeviction : Returns an error when the instance reaches maxmemory.
Does not overwrite or evict any data.
allkeys-lfu : Evicts the
least frequently used (LFU) keys from the entire keyset.
allkeys-lru : Evicts the least recently used (LRU) keys from the entire
keyset.
volatile-lfu : Evicts the
least-frequently-used keys that are set with TTL (time to live) expirations.
volatile-lru : Evicts the least recently used (LRU) keys that are set with
TTL expirations.
allkeys-random : Evicts random keys from the entire keyspace.
volatile-random : Evicts random keys from among those set with TTL
expirations.
volatile-ttl : Evicts the keys with the shortest TTL from among those set
with TTL expirations.
Modifiable configuration parameters
You can modify the following parameters when creating or updating a
Memorystore for Redis Cluster instance.
Parameter
Description
Acceptable values
maxmemory-clients
Redis 7.0, or later. This configuration allows users to
control maximum memory usage of clients. Total memory usage of
normal/pubsub clients. If the limit is hit, the client with most memory
usage will be evicted.
Acceptable values are integer
percent values between 0% and 100% . Represents the
percentage of instance maxmemory to which client storage is limited.
Default value depends on the node type. For more information, see
Node characteristics .
maxmemory
Designates an adjustable limit at which your eviction policy takes
effect. You set the maxmemory limit at the individual node level, but the
setting applies to all nodes. For example, suppose that you have an instance
with 3 nodes, use a 58 GB redis-highmem-xlarge
node type ,
and want to set maxmemory to 90% of your total instance
capacity. To do this, you set maxmemory to 52.2 GB, which is
90% of your node capacity. This applies to all nodes, which sets the total
instance maxmemory limit at 90%. For more information about default reserved
overhead, see
keyspace capacity and reserved overhead .
Maxmemory limit for your instance.
It supports the following units:
b (default)
k
kb
m
mb
g
gb
maxmemory-policy
Specifies the behavior Redis follows when the instance data reaches the
maxmemory limit. For more information about each policy, see
Maxmemory policies
.
For additional information about the open source Redis maxmemory policies,
see the open source Redis
LRU cache page .
noeviction
allkeys-lru
volatile-lru (default)
allkeys-random
volatile-random
volatile-ttl
volatile-lfu (Redis version 4.0 and higher)
allkeys-lfu (Redis version 4.0 and higher)
notify-keyspace-events
Allows clients to subscribe to notifications on certain keyspace events.
For more information, see Redis Keyspace Notifications .
"" No event (default)
K Keyspace events, published with __keyspace@<db>__ prefix.
E Keyevent events, published with __keyevent@<db>__ prefix.
g Generic commands (non-type specific) like DEL, EXPIRE, or RENAME
$ String commands
l List commands
s Set commands
h Hash commands
z Sorted set commands
x Expired events (events generated every time a key expires)
e Evicted events (events generated when a key is evicted for maxmemory)
A Alias for g$lshzxe, so that the "AKE" string means all the events.
slowlog-log-slower-than
Lets you configure the
slow log. Specifies the execution time threshold (in microseconds). Whenever
a command exceeds this threshold, it is added to the slow log.
Default value is 10000.
A value of zero forces the logging of every command. Whereas, a value of -1
disables the slow log. Any other negative value is rejected.
maxclients
Lets you configure the maxclients configuration for your instance. For information about the max clients limit and default for your instance, see Max clients .
Default value depends on the node type. For more information, see
Node characteristics .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
