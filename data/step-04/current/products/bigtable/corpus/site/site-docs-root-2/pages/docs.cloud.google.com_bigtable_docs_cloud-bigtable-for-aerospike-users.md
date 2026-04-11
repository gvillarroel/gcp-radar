---
title: "Bigtable for Aerospike users \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/bigtable/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users
  title: "Bigtable for Aerospike users \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Bigtable
Guides
Send feedback
Bigtable for Aerospike users
Stay organized with collections
Save and categorize content based on your preferences.
This document helps software developers and database administrators migrate
existing Aerospike applications with
Bigtable as a database. It uses your knowledge of Aerospike to describe concepts that you need to understand before migrating to Bigtable.
To help you start working with Bigtable and Aerospike, this document does the following:
Compares the terminology between Aerospike and Bigtable.
Provides an overview of Bigtable operations and describes the data layout within Bigtable.
Explains data modeling and key design considerations.
Clarifies how replication is accomplished and what its impact is.
For information about the migration process and open-source tools that you can use to complete your migration, see Migrating from Aerospike to Bigtable .
Terminology comparison
Aerospike and Bigtable are both distributed NoSQL databases, but they differ significantly in their design, operation, and terminology.
In Aerospike, data is stored in records. Each record contains one or more named bins, along with metadata such as record size (in bytes), time to live (TTL), and the last update time (LUT).
Bigtable stores data in scalable tables, each of which is a sorted key-value map. The table is composed of rows indexed by row keys and columns identified by a column qualifier. If related to one another, columns can form a column family. This structure lets you store multiple versions of a value under the same key. Each version is identified by a unique timestamp. Earlier versions can be filtered during read operations or removed through garbage collection based on the configured policies.
For more information, see Bigtable storage model .
The following table outlines and describes shared concepts and the corresponding terminology that each product uses:
Aerospike
Bigtable
No directly corresponding item.
instance : a managed group of clusters in different Google Cloud zones or regions between which replication and connection routing occur.
cluster : an Aerospike deployment consisting of a collection of nodes.
cluster : a group of nodes in the same geographic Google Cloud zones.
node : a server providing compute and owning its storage.
node : a server providing compute only. Storage is handled by Colossus , a separate distributed file system.
namespace : stores parameters like TTL or storage type. Within a namespace, data is subdivided into sets and records.
table : the closest equivalent to an Aerospike namespace. Some parameters are set for all tables at cluster level. Finer control is possible at table or column family level.
set : used for logical division of records and parameters like TTL and capping size. Keys have to be unique within a set.
No directly corresponding item.
No directly corresponding item.
table : an instance-level resource that is automatically replicated to every cluster. A table contains a set of values identified by unique row keys. Tables are sparse, which means they don't use extra space to store columns that don't contain any values.
No directly corresponding item.
tablet : a continuous range of rows stored together. Bigtable uses tablets for load balancing by assigning them to nodes. Tablet boundaries are dynamic—they can split or merge over time.
record : a set of named bins used to store data. It can be at most 8 MB.
row : a set of values identified by column family, column qualifier, timestamp. All operations are atomic at the row level.
No directly corresponding item.
column family : a group of columns sorted in lexicographic order. Garbage collection is set at this level.
bin : a key-value pair where the bin name is the identifier of a value within a record.
column qualifier : a label for a value stored in a table.
No directly corresponding item.
cell : a label for a timestamped value stored in a table.
(record) digest : a hash of a three-tuple identifying a record: namespace, set, and key.
No directly corresponding item.
key : a record identifier unique within a set.
row key : a row identifier, unique within a table.
AQL :a command-line tool for browsing data and developing user-defined functions for Aerospike database.
GoogleSQL : a query language used by multiple Google Cloud services, including Spanner, BigQuery, and Bigtable.
Data types limits
The following table compares the limits for data types used by Aerospike and Bigtable:
Aerospike
Bigtable
namespace : The maximum number of namespaces for the Enterprise Edition is 32.
table : An instance can have up to 1,000 tables. A table name can't exceed 50 characters.
set : A cluster can have up to 4,095 sets. A set name can't exceed 63 bytes.
No directly corresponding item.
record : The maximum record size is 8 MB.
row : The maximum row size is 256 MB.
No directly corresponding item.
column family : The number of column families is unlimited, however more than 100 can cause performance degradation.
bin : The number of bins is unlimited, however, each bin can
hold not more than 1 MB of data. The bin name can't exceed 15 bytes.
column qualifier : The limit is
100 MB, but it is recommended not to exceed 10 MB. The number of columns is unlimited.
key : The maximum key size is 8 KB.
row key : The maximum row key size is 4 KB.
For more information on Bigtable and Aerospike limits, see Quotas and Limits and Aerospike system limits and thresholds respectively.
Architecture
The following sections provide an architectural overview of Bigtable and Aerospike.
Bigtable
Bigtable nodes are separate from the storage layer, which means nodes don't affect data durability.
Bigtable table clients are not aware of the underlying data distribution. An additional routing layer distributes requests to the correct node. Each node handles a subset of the requests to the cluster. A Bigtable table is sharded into blocks of contiguous rows, called tablets, which are stored on Colossus, a distributed file system that provides high durability. Each tablet is associated with a specific Bigtable node.
Bigtable's architecture provides the following benefits:
Bigtable clients don't need to be aware of the data distribution and load balancing. Such complexities are handled by the routing layer.
Rebalancing happens very quickly and the recovery from failure is fast because the actual data is not copied between nodes.
When a Bigtable node fails, no data is lost.
Aerospike
Contrary to Bigtable, Aerospike's storage is located on the nodes which serve it. Every node (a server) in the Aerospike cluster is identical. The data in each namespace is divided into exactly 4,096 partitions by hashing record names. These partitions are evenly distributed between nodes.
The nodes are aware of each other and rebalance stored partitions when the cluster changes. Each time a cluster change happens, replicas elect a primary replica which coordinates the rebalancing. The client libraries are expected to track which replica stores the primary partition and send write requests to the right replicas. If a client sends a request to the wrong node (this can happen during rebalancing) the request is rerouted by the nodes.
Replication
This section compares the replication process for Aerospike and Bigtable.
Bigtable
A Bigtable instance can consist of a single cluster or multiple replicated clusters . A table is always replicated to all clusters within an instance. Clusters can be added or removed from an instance with minimal impact to other clusters.
Bigtable provides read-your-writes consistency within a single cluster. Writes are performed on a single cluster and become eventually consistent across other clusters in the instance. Unlike Aerospike, Bigtable doesn't lose intermediate updates because individual cells are internally versioned, ensuring no writes are lost. Each cluster serves the cells that have the most current timestamps available.
The Bigtable API offers a table-level consistency token, which can be used to verify whether all changes made prior to the token creation were replicated completely.
Aerospike
Aerospike handles replication within a cluster at the partition level. A namespace is split into partitions that are evenly distributed between nodes. Strong consistency is ensured within a cluster. A write operation is confirmed only after all replicas within the cluster have acknowledged it.
Cross data center replication (XDR) can be configured for data synchronization between different clusters. Aerospike's bin convergence ensures that the data is eventually the same in all the data centers at the end of replication, however intermediate updates can be lost .
For durability, Aerospike's roster-based consistency algorithm requires N+1 copies to handle N failures.
Data model
This section compares the data models used by Bigtable and Aerospike.
Flexible schema
Aerospike doesn't enforce schema constraints, allowing each record to have different bins with varying value types. Similarly, Bigtable supports sparse columns, so no storage is consumed for columns without values. While there is no strict limit on the number of columns or column families, it is best to keep the number of column families under 100 for performance reasons.
Row key design
Bigtable identifies rows by row keys which must be unique within a table. They are sorted lexicographically and kept together in tablets. This differs from Aerospike, where records are distributed across nodes based on their hash. Row keys should be designed to ensure that rows frequently accessed together are also stored together.
Data types
Aerospike supports advanced data types, including scalars, GeoJSON, HyperLogLogs, lists, and nested objects. These types can be indexed and queried with support of secondary indexes. In addition, Aerospike provides server-side APIs that allow complex operation on these data types, such as filtering by geolocation or manipulating list contents.
Bigtable API focuses primarily on handling raw bytes with some exceptions. It also natively uses INT64 for timestamps and counters which can be incremented as an atomic operation. Query language also supports many complex types like scalars, JSON objects and HLL bins. Advanced types might be increasingly supported in the future, but at the time of writing this document there is no way to put such types into Bigtable, everything is serialized client side. You can use the adapter library from the aerospike-migration-tools to serialize your datatypes.
Column family
In Bigtable, column families define which columns in a table are stored and retrieved together, and at least one column family must exist for each table. Related columns should be grouped into the same family. Data with different retention requirements should be separated into distinct column families, since garbage collection policies apply at the column family level.
Column qualifiers
In Bigtable, column qualifiers are used within a column family to define individual columns. Tables can support millions of columns, however, best practice is to limit the number of columns in a single row. Optionally, column qualifiers can be treated as data, allowing values to be embedded directly in the column name to save space.
Cells
In Bigtable, a cell is the intersection of the row key and column name (a column family combined with a column qualifier). Each cell contains one or more timestamped values that can be supplied by the client or automatically applied by the service.
Secondary indexes
Continuous materialized views can act as asynchronous secondary indexes, enabling tables to be queried using different lookup patterns or attributes. For more information, see Create an asynchronous secondary index .
Transactions
Bigtable and Aerospike both lack support for multi-row transactions but differ in their single-row capabilities.
Bigtable provides fully consistent single-row writes within a cluster and supports single-row transactions through mutate-row requests. They allow multiple operations on a single row, all executed atomically and either all succeed or all fail. Additionally, there are read-modify-write and check-and-mutate operations, though these are not available with multi-cluster routing profiles. In contrast, Aerospike extends single-row transactions with server-side data manipulation and execution of client defined functions.
Load balancing and failover
Aerospike uses Smart Client to handle load balancing on the client side. A process running client side which is aware of cluster state and data distribution. This client is responsible for routing the request.
If a node fails or a new node is added, the cluster must be rebalanced. A temporary primary is chosen to orchestrate the act of rebalancing and redistributing the partitions between the nodes. While that happens, the cluster remains operational, but the client has to track the changes for request routing. If a request reaches the wrong node, it is routed internally to the correct one.
Bigtable client is a thin client , hiding all complexities like cluster state and data distribution from the user. Routing the request is handled by the next layer, a thick client inside the Google CloudBigtable infrastructure.
Another difference is the routing policy which is not available in Aerospike. Bigtable uses application profiles to manage request routing, with configurable priorities to control the order in which requests are served. There are two types of routing policies: single-cluster and multi-cluster. A multi-cluster profile routes operations to the closest available cluster. Clusters in the same region are considered to be equidistant from the perspective of the operation router. If the node that's responsible for the requested key range is overloaded or temporarily unavailable in a cluster, this profile provides automatic failover. In contrast, Aerospike doesn't provide automatic failover in the event of a complete cluster failure.
Backup and restore
Aerospike provides external backup and restore tools called asbackup and asrestore that create logical backups client side and are analogous to performing a scan. Backup management can also be handled through the Aerospike Backup Service or Aerospike Kubernetes Operator, both of which use asbackup and asrestore internally, and provide scheduling and multi-process coordination. Backups are not atomic, meaning write operations occurring during the backup may not be captured.
Bigtable provides two methods to cover common backup needs: Bigtable backups and managed data exports. Backups create restorable copies of a table which are stored as member objects of a cluster. You can restore backups as a new table in the cluster that initiated the backup. The backups are designed to create restore points if application-level corruption occurs. Bigtable backups are also not atomic. Changes might be made in a section of the table that the backup has already copied.
Key differences in backup handling
Aerospike backups are created client-side. They don't require any additional space server side but are slower. In Bigtable a backup shares physical storage with the source table and other backups of the table.
Aerospike's user needs to handle exporting, storing, and removing stale backups. Since backups in Bigtable are fully integrated, all these actions are taken care of automatically by the Bigtable service.
Performance considerations
Because Aerospike and Bigtable treat read and write operations differently, they have performance differences which are important to consider. The following table includes several examples of performance differences between the two databases. For more information, see the Bigtable performance guidelines .
Consideration
Bigtable
Aerospike
Hot rows
Distributes tablets and operations to equalize resource usage. A
frequently accessed row can be isolated to a single-row tablet on one
node, limiting impact on other rows.
Distributes rows based on hashes across all nodes, regardless of
traffic. A hot row can affect the performance of an entire partition.
Scans over sorted keys
Stores data lexicographically, making it highly effective for
streaming sorted data.
Distributes records based on hashes, so scanning many consecutive
keys requires querying multiple nodes and aggregating results, which can
be slower. Supports secondary indexes, including advanced types, which
might reduce the need for scans.
Inserting many consecutive keys
Stores data lexicographically, meaning a single node handles many
consecutive key write operations. As a result, a read or write pattern can end up on the node holding the tablet responsible for the end of the row key space, effectively overloading it.
Distributes keys based on hash, distributing the load among multiple
nodes when writing consecutive keys.
Rows with a very large number of columns
While Bigtable can support rows up to 256 MB, processing large rows can impact performance. Bigtable is optimized for smaller rows, that is why cell organization and access to data should be considered during schema design to avoid spreading data across many cells if unnecessary.
Performs suboptimally when
encountering a row or record with a very large number of columns or bins.
Cold starts
Performs best with large tables that are frequently accessed. If you start sending requests after a period of no usage (a cold start), you might observe high latency. This happens because the split into tablets and their distribution between nodes might not be optimal and because the caches are cold. The distribution between nodes might not be fully optimal until a few minutes during cold start and during rebalancing.
Performance doesn't change over time as data distribution is not
load-based. While caches need warming, indexes are kept in memory,
minimizing disk search time and reducing caching importance.
Many small tables
Avoid creating many small tables. Separate tables are justified for
different use cases or schemas, but not for similar data, as it doesn't
improve load balancing and increases management overhead.
Most records reside in one namespace, grouped into sets. Sets don't
have specific schemas, but secondary indexes or scan operations can be
set per set. Splitting data into sets doesn't affect performance.
Large dataset
Capable of storing exabyte-scale datasets. Performance is unaffected
by total dataset size due to its architecture and dynamic tablet
splitting.
Technically, Aerospike databases don't have a size limit, however, Aerospike stores indexes and records separately. Both kinds of data can be stored on different types of storage devices to increase performance. Storing indexes in RAM is essential for low latencies, but it might not be feasible for very large datasets. For example,
with 4 billion objects and a replication factor of 2 (RF2), the memory consumed in association with the primary index across the cluster in All Flash is 2.5 GiB. Using the same example in a Hybrid Memory configuration, where the primary index is in memory, 476.8 GiB of memory would be used.
Scaling
Processing and storage are decoupled and can be scaled
independently. A single node can handle data chunks of several hundred
terabytes or even petabytes.
Storing indexes in RAM is essential for low latencies. In such a
case, machines have to be scaled vertically together with storage capacity to account for the primary index.
What's next
Read about
Bigtable schema design .
Find out more about Aerospike .
Learn about the
Bigtable emulator .
Explore reference architectures, diagrams, and best practices about Google Cloud.
Take a look at our
Cloud Architecture Center .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
