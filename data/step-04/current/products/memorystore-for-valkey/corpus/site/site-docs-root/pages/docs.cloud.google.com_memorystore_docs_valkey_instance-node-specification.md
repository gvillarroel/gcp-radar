---
title: "Instance and node specification \_|\_ Memorystore for Valkey \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/memorystore/docs/valkey/instance-node-specification
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/memorystore/docs/valkey
source_metadata:
  url: https://docs.cloud.google.com/memorystore/docs/valkey/instance-node-specification
  title: "Instance and node specification \_|\_ Memorystore for Valkey \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Memorystore
Memorystore for Valkey
Guides
Send feedback
Instance and node specification
Stay organized with collections
Save and categorize content based on your preferences.
This page describes the instance and node specifications for Memorystore for Valkey
instances. For instructions on how to create an instance, see
Create instances .
Choose a node type
The nodes in your instance all use the same node type of your choosing. The best
node type for your instance depends on your requirements for price, performance,
and keyspace capacity.
The shared-core-nano node type is for small workloads. This node type provides
variable performance
and doesn't have an SLA, making it unsuitable for production workloads.
The standard-small node type lets you provision small instances, and grow your
instance by smaller increments at potentially lower costs than other node types.
standard-small also offers the advantage of distributing your keyspace across
more nodes with a higher total vCPU count. This offers improved price
performance compared to highmem-medium , as long as the total keyspace capacity
of the smaller nodes is sufficient for your data needs.
We only recommend choosing the highmem-xlarge node type if you need
more instance capacity than what highmem-medium provides. Although the
highmem-xlarge node type is four times greater than the
highmem-medium type in size, the performance is not four times greater,
as Valkey 7.2 performance does not scale linearly when vCPUs are added to
increasingly larger nodes (scaling up). Instead, to get better price
performance, you should scale out by adding more nodes to an instance.
Caution : We recommend that you use the
shared-core-nano node type for development or testing purposes
only because this node type has no SLA. If you run Memorystore for Valkey in a
production environment, then we recommend using the standard-small , highmem-medium , or highmem-xlarge node types.
Node type specification
The node capacity and characteristics depend on which of the four available
node types you choose:
Keyspace capacity and reserved overhead
Node type
Default writable keyspace capacity
Total node capacity
shared-core-nano
1.12 GB
1.4 GB
standard-small
5.2 GB
6.5 GB
highmem-medium
10.4 GB
13 GB
highmem-xlarge
46.4 GB
58 GB
Memorystore automatically sets aside a portion of your instance
capacity to help prevent Out Of Memory (OOM) errors. This ensures a smooth
experience reading and writing keys. Memory limits and storage details are as
follows:
Customizing your storage: While we recommend using the default settings,
you have the option to adjust the amount of reserved storage using the
maxmemory configuration. For information about maxmemory ,
see Supported instance configurations .
How much storage do you get? Refer to the previous table's
Default writable keyspace capacity column. This shows how much storage is
available for your keys by default.
Maximizing storage If you want the maximum possible storage, the
total node capacity column shows the storage limit when you set the
maxmemory config to 100%. However, don't recommend choosing a maxmemory
value higher than the default setting.
The shared-core-nano node type has a hard limit of 1.12 GB, and can't
be changed with the maxmemory configuration.
Node characteristics
Node type
vCPU count
SLA offered
Max clients
Max memory for clients (maxmemory-clients configuration )
shared-core-nano
0.5
No
5,000
12%
standard-small
2
Yes
16,000 (default). Max value is 32,000
7%
highmem-medium
2
Yes
32,000 (default). Max value is 64,000
7%
highmem-xlarge
8
Yes
64,000
4%
The more virtual CPUs (vCPUs) that you select for your instance, the better the
performance. If your instance runs resource-intensive workloads, then select a
node type with a higher vCPU (for example, highmem-xlarge ). If your instance
performs less-demanding tasks, then select a node type with a lower vCPU (for
example, highmem-medium ).
Scale an instance
As part of creating a Memorystore for Valkey instance, you choose a
node type for the instance and specify the number of shards for the instance.
After you create the instance, and as the capacity needs for your instance
change, you might need to scale the instance in the following ways:
Change the number of shards for your instance. This is horizontal scaling .
You scale an instance horizontally by performing one of the following actions:
Add shards to the instance. This is scaling the instance out .
Remove shards from the instance. This is scaling the instance in .
Change the node type for your instance. This is vertical scaling . To scale
an instance vertically, change the node type of the instance to one of the
following node types:
Change to a larger node type. This is scaling the instance up .
Change to a smaller node type. This is scaling the instance down .
Note: For more information about horizontal and
vertical scaling, see About scaling instance capacity . For more
information about changing the capacity of your instance by scaling the node
type or the shard count, see Scale instance capacity .
Instance specification
This section shows minimum and maximum instance capacities given the instance
shape, node type, and replica count.
Minimum writable capacity
Writable capacity is the amount of storage available for writing keys. It is
equal to the size of one instance node. Therefore, depending on the node type,
the minimum writable capacity is 1.4 GB, 6.5 GB, 13 GB, or 58 GB. The minimum
writable capacity isn't affected by the number of replicas you choose.
Maximum writable capacity
This section lists the maximum writable capacity for Cluster Mode Enabled and
Cluster Mode Disabled instances.
Cluster Mode Enabled instances
The following table lists the maximum writable capacity for Cluster Mode Enabled
instances that have 0-5 replicas per node.
Node type and size
Maximum capacity, given an instance shape of 250 primary nodes and 0 replicas per node
Maximum capacity, given an instance shape of 125 primary nodes and 1 replica per node
Maximum capacity, given an instance shape of 83 primary nodes and 2 replicas per node
Maximum capacity, given an instance shape of 62 primary nodes and 3 replicas per node
Maximum capacity, given an instance shape of 50 primary nodes and 4 replicas per node
Maximum capacity, given an instance shape of 41 primary nodes and 5 replicas per node
shared-core-nano - 1.4 GB
350 GB
175 GB
116.2 GB
86.8 GB
70 GB
57.4 GB
standard-small - 6.5 GB
1,625 GB
812.5 GB
539.5 GB
403 GB
325 GB
266.5 GB
highmem-medium - 13 GB
3,250 GB
1,625 GB
1,079 GB
806 GB
650 GB
533 GB
highmem-xlarge - 58 GB
14,500 GB
7,250 GB
4,814 GB
3,596 GB
2,900 GB
2,378 GB
Cluster Mode Disabled instances
The following table lists the maximum writable capacity for Cluster Mode
Disabled instances.
Node type and size
Maximum capacity
shared-core-nano - 1.4 GB
1.12 GB
standard-small - 6.5 GB
5.2 GB
highmem-medium - 13 GB
10.4 GB
highmem-xlarge - 58 GB
46.4 GB
Performance
Using the OSS memtier benchmarking tool in the us-central1 region yielded 120,000 - 130,000
operations per second per 2 vCPU node ( standard-small and highmem-medium )
with microseconds latency and 1KiB data size.
We recommend that you perform your own benchmarking with real workloads or
synthetic workloads that resemble your production traffic. In addition, we
recommend that you size your instances with a buffer (or "headroom") for
workload spikes or unexpected traffic. For more guidance, see
best practices .
Instance endpoints for Cluster Mode Enabled
This section explains the discovery and data endpoints that Cluster Mode Enabled
instance has.
Discovery endpoint
Each instance has a discovery endpoint to which your client connects. It is
a combination of an IP address and port number. For instructions on how to
find your instance's discovery endpoint, see View your instance's discovery endpoint .
Your client also uses it for node discovery. Your client uses the discovery
endpoint to retrieve your instance's node topology to bootstrap third-party
clients, and keep them updated in steady state. The resulting node topology
provides node endpoints (IP and port combinations) to be cached in-memory by
your third-party client. Your client then takes care of the updates and
redirections automatically with no other application change required. For
information on client discovery behavior and best practices, see
Client discovery .
The discovery endpoint is highly available because it is backed by multiple
nodes across multiple-zones to serve the node topology. Serving topology through
the endpoint is robust even when faced with backend node failures or node
updates.
Your discovery endpoint has the following behavior:
Your instance's discovery endpoint remains unchanged throughout the
lifecycle of the instance, even during maintenance, or by any other action you
take such as scaling in or out or changing replica counts.
Node endpoints can change and can be recycled as nodes are added and removed
over time. Ideally, you should use a third-party client that can handle these
changes automatically through topology refreshes and redirections. Examples of
third-party clients can be found at Client library code samples . Your application shouldn't have dependencies or
assumptions that node endpoints will remain unchanged for a given instance.
Data endpoint
In addition to the discovery endpoint, each Cluster Mode Enabled instance has a
data endpoint. This endpoint is reserved for Memorystore for Valkey to use to
connect your client to nodes in the instance. Therefore, don't connect to this
endpoint directly.
Instance endpoints for Cluster Mode Disabled
This section explains the primary and reader endpoints that each Cluster Mode
Disabled instance has.
Primary endpoint
The primary endpoint is an IP address to which your application connects. This
endpoint directs traffic to the current primary node. Connections to the primary
endpoint can send both write and read queries.
Your primary endpoint has the following behavior:
Your primary endpoint IP address remains unchanged throughout the lifecycle
of the instance. If the underlying node fails or undergoes an automatic
failover, then Memorystore for Valkey adjusts the IP address automatically.
Clients require no changes with the endpoint. However, if unplanned events
result in connection failures, then the clients try to re-establish a
connection.
If a primary node becomes the replica, then connections to this replica node
end and Memorystore for Valkey redirects new connections to the new primary node
through an automatic failover. Clients are expected to retry connections by
using exponential backoff .
If the instance has 1 replica, then the primary endpoint has a higher
availability than the reader endpoint. If the instance has 2 replicas
provisioned, then both the primary endpoint and reader endpoint have high
availability.
Reader endpoint
The reader endpoint is an IP address to which your application connects. This
endpoint load balances connections across the replicas in the instance evenly.
Connections to the read replica can send read queries, but not write queries.
The reader endpoint increases throughput and provides traffic isolation from the
primary node. For applications that require operational access, such as risky
scripts and offline jobs, we recommend that you isolate traffic from the primary
node by using the reader endpoint.
Note: Memorystore for Valkey maintains read replicas by using asynchronous
replication. If applications require "read your write" consistency, then
querying from read replicas can return inconsistent data because the replica can
lag by a few seconds. However, if you require "read your write" consistency,
then query using the primary endpoint. Even in this case it is possible to have
stale reads after a failover.
Your reader endpoint has the following behavior:
Even when an instance has no read replicas provisioned, Memorystore for Valkey
provisions the reader endpoint IP address to allow for the dynamic addition of
read replicas.
If the system has no available read replicas to which to route traffic, a
connection to the reader endpoint would be terminated. However, it won't route
connections made to the reader endpoint to the primary node.
If a replica node becomes the primary node, then connections to this primary
node end and Memorystore for Valkey redirects new connections to the new replica node.
Clients retry these connections by using exponential backoff .
To learn about handling common errors while connecting to Cluster Mode Disabled
endpoints see Handling errors in Cluster Mode Disabled .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
