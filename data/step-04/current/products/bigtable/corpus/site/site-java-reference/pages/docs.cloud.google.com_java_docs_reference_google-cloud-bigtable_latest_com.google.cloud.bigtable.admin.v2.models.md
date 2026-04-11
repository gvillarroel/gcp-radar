---
title: "Package com.google.cloud.bigtable.admin.v2.models (2.74.0) \_|\_ Java client\
  \ libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.models
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.models
  title: "Package com.google.cloud.bigtable.admin.v2.models (2.74.0) \_|\_ Java client\
    \ libraries \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Java
Client libraries
Send feedback
Package com.google.cloud.bigtable.admin.v2.models (2.74.0)
Stay organized with collections
Save and categorize content based on your preferences.
2.74.0 (latest)
2.73.0
2.72.0
2.71.0
2.70.0
2.68.0
2.67.1
2.66.0
2.65.1
2.63.0
2.62.0
2.61.0
2.60.0
2.59.0
2.58.2
2.56.0
2.54.0
2.52.0
2.51.2
2.49.0
2.46.0
2.45.1
2.44.1
2.43.0
2.42.0
2.40.0
2.39.5
2.37.0
2.35.1
2.34.0
2.33.0
2.32.0
2.31.0
2.30.0
2.29.1
2.28.0
GitHub Repository
This package is not the recommended entry point to using this client library!
For this library, we recommend using com.google.cloud.bigtable for new applications.
Classes
Class
Description
com. google. cloud. bigtable. admin. v2. models. App Profile
An application profile, or app profile, stores settings that tell your Cloud Bigtable instance
how to handle incoming requests from an application. When one of your applications connects to a
Cloud Bigtable instance, it can specify an app profile, and Cloud Bigtable uses that app profile
for any requests that the application sends over that connection.
com. google. cloud. bigtable. admin. v2. models. App Profile. Data Boost Isolation Read Only Policy
A Data Boost Read Only IsolationPolicy for running high-throughput read traffic on your
Bigtable data without affecting application traffic. Data Boost App Profile needs to be created
with a ComputeBillingOwner which specifies how usage should be accounted when using Data Boost.
com. google. cloud. bigtable. admin. v2. models. App Profile. Multi Cluster Routing Policy
A RoutingPolicy that tells Cloud Bigtable that it can route each request to any
available cluster.
com. google. cloud. bigtable. admin. v2. models. App Profile. Single Cluster Routing Policy
A RoutingPolicy that routes all requests to a specific cluster.
com. google. cloud. bigtable. admin. v2. models. App Profile. Standard Isolation Policy
A standard IsolationPolicy for isolating this app profile's traffic from other use
cases. This accomplished by assigning different priorities to app profiles. A request that uses
an app profile with a StandardIsolationPolicy with a HIGH priority will likely run before a
request with a LOW priority.
com. google. cloud. bigtable. admin. v2. models. Authorized View
A class that wraps the com.google.bigtable.admin.v2.AuthorizedView protocol buffer
object.
An AuthorizedView represents subsets of a particular table based on rules. The access to each
com. google. cloud. bigtable. admin. v2. models. Backup
A backup lets you save a copy of a table's schema and data and restore the backup to a new table
at a later time.
com. google. cloud. bigtable. admin. v2. models. Cluster
A cluster represents the actual Cloud Bigtable service. Each cluster belongs to a single Cloud
Bigtable instance, and an instance can have up to 2 clusters. When your application sends
requests to a Cloud Bigtable instance, those requests are actually handled by one of the clusters
in the instance.
com. google. cloud. bigtable. admin. v2. models. Cluster Autoscaling Config
Model class to create an autoscaling config for creating or updating a cluster. When creating
this config, min nodes, max nodes, and CPU utilization must all be set.
com. google. cloud. bigtable. admin. v2. models. Column Family
Wrapper for ColumnFamily protocol buffer object
com. google. cloud. bigtable. admin. v2. models. Consistency Request
com. google. cloud. bigtable. admin. v2. models. Copy Backup Request
Build CopyBackupRequest for com.google.bigtable.admin.v2.CopyBackupRequest .
com. google. cloud. bigtable. admin. v2. models. Create App Profile Request
Parameters for creating a new Cloud Bigtable app profile.
An application profile, or app profile, stores settings that tell your Cloud Bigtable instance
how to handle incoming requests from an application. When one of your applications connects to a
com. google. cloud. bigtable. admin. v2. models. Create Authorized View Request
Parameters for creating a new Cloud Bigtable AuthorizedView , which represents subsets of
a particular table.
Sample code:
com. google. cloud. bigtable. admin. v2. models. Create Backup Request
Fluent wrapper for com.google.bigtable.admin.v2.CreateBackupRequest
com. google. cloud. bigtable. admin. v2. models. Create Cluster Request
Parameters for creating a new Bigtable cluster.
A cluster represents the actual Cloud Bigtable service. Each cluster belongs to a single Cloud
Bigtable instance. When your application sends requests to a Cloud Bigtable instance, those
com. google. cloud. bigtable. admin. v2. models. Create Instance Request
Parameters for creating a new Bigtable Instance.
A Cloud Bigtable instance is mostly just a container for your clusters and nodes, which do all
of the real work. Instances come in 2 flavors:
com. google. cloud. bigtable. admin. v2. models. Create Logical View Request
Parameters for creating a new Cloud Bigtable logical view.
Sample code:
com. google. cloud. bigtable. admin. v2. models. Create Materialized View Request
Parameters for creating a new Cloud Bigtable materialized view.
Sample code:
com. google. cloud. bigtable. admin. v2. models. Create Schema Bundle Request
Parameters for creating a new Cloud Bigtable SchemaBundle , which represents subsets of a
particular table.
Sample code:
com. google. cloud. bigtable. admin. v2. models. Create Table Request
Fluent wrapper for com.google.bigtable.admin.v2.CreateTableRequest
Allows for creating table with:
com. google. cloud. bigtable. admin. v2. models. Encryption Info
Encryption information for a given resource.
If this resource is protected with customer managed encryption, the in-use Google Cloud Key
Management Service (KMS) key versions will be specified along with their status.
com. google. cloud. bigtable. admin. v2. models. Family Subsets
Represents subsets of a particular column family that are included in this authorized view.
com. google. cloud. bigtable. admin. v2. models.GC Rules
Wraps GcRule protocol buffer object and exposes a friendly API.
Note: Garbage collection executes opportunistically in the background, and so it's possible
for reads to return a cell even if it matches the active GC expression for its family. Please use
com. google. cloud. bigtable. admin. v2. models.GC Rules. Default Rule
Wrapper for building a empty rule
com. google. cloud. bigtable. admin. v2. models.GC Rules. Duration Rule
Wrapper for building max duration rule
com. google. cloud. bigtable. admin. v2. models.GC Rules. Intersection Rule
Fluent wrapper for Intersection rule. Allows far adding an hierarchy of rules with
intersection as the root
com. google. cloud. bigtable. admin. v2. models.GC Rules. Union Rule
Fluent wrapper for Union rule. Allows far adding an hierarchy of rules with union as
the root
com. google. cloud. bigtable. admin. v2. models.GC Rules. Version Rule
Wrapper for building max versions rule
com. google. cloud. bigtable. admin. v2. models. Gc Rule Builder
Factory for creating safe GcRule protos.
Use this class to construct GcRule instances instead of the raw proto builder ( GcRule#newBuilder() ) to avoid common pitfalls with "oneof" fields (e.g. accidentally overwriting
max age with max versions).
com. google. cloud. bigtable. admin. v2. models. Instance
Represents an existing Cloud Bigtable instance.
A Cloud Bigtable instance is mostly just a container for your clusters and nodes, which do all
of the real work.
com. google. cloud. bigtable. admin. v2. models. Intersection Rule Builder
Builder for creating an Intersection (AND) GC Rule.
This class ensures type safety when constructing composite rules, preventing the misuse of the
standard builder's ambiguous setters.
com. google. cloud. bigtable. admin. v2. models. Logical View
A class that wraps the com.google.bigtable.admin.v2.LogicalView protocol buffer object.
A LogicalView represents subsets of a particular table based on rules. The access to each
LogicalView can be configured separately from the Table.
com. google. cloud. bigtable. admin. v2. models. Materialized View
A class that wraps the com.google.bigtable.admin.v2.MaterializedView protocol buffer
object.
A MaterializedView represents subsets of a particular table based on rules. The access to each
com. google. cloud. bigtable. admin. v2. models. Modify Column Families Request
Fluent wrapper for com.google.bigtable.admin.v2.ModifyColumnFamiliesRequest
Allows for the following ColumnFamily modifications:
com. google. cloud. bigtable. admin. v2. models. Optimize Restored Table Operation Token
OptimizeRestoredTableOperationToken is a wrapper for the name of OptimizeRestoredTable operation.
com. google. cloud. bigtable. admin. v2. models. Restore Table Request
Fluent wrapper for com.google.bigtable.admin.v2.RestoreTableRequest
com. google. cloud. bigtable. admin. v2. models. Restored Table Result
A RestoredTableResult holds the restored table object and the OptimizeRestoredTableOperationToken object (if any).
com. google. cloud. bigtable. admin. v2. models. Schema Bundle
A class that wraps the com.google.bigtable.admin.v2.SchemaBundle protocol buffer object.
com. google. cloud. bigtable. admin. v2. models. Static Cluster Size
com. google. cloud. bigtable. admin. v2. models. Subset View
Defines a simple authorized view that is a subset of the underlying Table.
Users can specify the rows in the form of row key prefixes, and specify the column families by
adding the family id along with its familySubsets rule to the family subsets map. The subset is
com. google. cloud. bigtable. admin. v2. models. Table
Wrapper for Table protocol buffer object
com. google. cloud. bigtable. admin. v2. models. Table. Automated Backup Policy
com. google. cloud. bigtable. admin. v2. models. Type. Aggregate
A value that combines incremental updates into a summarized value.
Data is never directly written or read using type Aggregate . Writes will provide either
the input_type or state_type , and reads will always return the state_type .
com. google. cloud. bigtable. admin. v2. models. Type. Aggregate. Aggregator
com. google. cloud. bigtable. admin. v2. models. Type. Aggregate. Aggregator. Hll
com. google. cloud. bigtable. admin. v2. models. Type. Aggregate. Aggregator. Max
com. google. cloud. bigtable. admin. v2. models. Type. Aggregate. Aggregator. Min
com. google. cloud. bigtable. admin. v2. models. Type. Aggregate. Aggregator. Sum
com. google. cloud. bigtable. admin. v2. models. Type. Bytes
Represents a string of bytes with a specific encoding.
com. google. cloud. bigtable. admin. v2. models. Type. Bytes. Encoding
com. google. cloud. bigtable. admin. v2. models. Type. Bytes. Encoding. Raw
com. google. cloud. bigtable. admin. v2. models. Type. Int
Represents a 64-bit integer with a specific encoding.
com. google. cloud. bigtable. admin. v2. models. Type. Int64. Encoding
com. google. cloud. bigtable. admin. v2. models. Type. Int64. Encoding. Big Endian Bytes
com. google. cloud. bigtable. admin. v2. models. Type. Raw
com. google. cloud. bigtable. admin. v2. models. Union Rule Builder
Builder for creating a Union (OR) GC Rule.
This class ensures type safety when constructing composite rules, preventing the misuse of the
standard builder's ambiguous setters.
com. google. cloud. bigtable. admin. v2. models. Update App Profile Request
Parameters for updating an existing Cloud Bigtable app profile.
Examples
com. google. cloud. bigtable. admin. v2. models. Update Authorized View Request
Parameters for updating an existing Cloud Bigtable AuthorizedView .
Sample code:
com. google. cloud. bigtable. admin. v2. models. Update Backup Request
Fluent wrapper for com.google.bigtable.admin.v2.UpdateBackupRequest
com. google. cloud. bigtable. admin. v2. models. Update Instance Request
Parameters for updating an existing Bigtable instance.
Existing instances maybe updated to change their superficial appearance (ie. display name) and
can also be upgraded from a DEVELOPMENT instance to a PRODUCTION instance. Please note that
com. google. cloud. bigtable. admin. v2. models. Update Logical View Request
Parameters for updating an existing Cloud Bigtable LogicalView .
Sample code:
com. google. cloud. bigtable. admin. v2. models. Update Materialized View Request
Parameters for updating an existing Cloud Bigtable MaterializedView .
Sample code:
com. google. cloud. bigtable. admin. v2. models. Update Schema Bundle Request
Parameters for updating an existing Cloud Bigtable SchemaBundle .
Sample code:
com. google. cloud. bigtable. admin. v2. models. Update Table Request
Wrapper for com.google.bigtable.admin.v2.UpdateTableRequest
Allows for updating table:
Interfaces
Interface
Description
com. google. cloud. bigtable. admin. v2. models. App Profile. Isolation Policy
Represents the options for isolating this app profile's traffic from other use cases.
com. google. cloud. bigtable. admin. v2. models. App Profile. Routing Policy
Represents the routing for read/write requests. Please check the implementations of this
interface for more details.
com. google. cloud. bigtable. admin. v2. models. Authorized View. Authorized View Type
Represents a subset of a Table. Please check the implementations of this interface for more
details.
com. google. cloud. bigtable. admin. v2. models.GC Rules.GC Rule
interface for fluent GcRule wrappers
com. google. cloud. bigtable. admin. v2. models. Type
Wrapper class for the com.google.bigtable.admin.v2.Type protobuf message.
See Also: com.google.bigtable.admin.v2.Type
com. google. cloud. bigtable. admin. v2. models. Type. Hll Aggregate Input
com. google. cloud. bigtable. admin. v2. models. Type. Max Aggregate Input
com. google. cloud. bigtable. admin. v2. models. Type. Min Aggregate Input
com. google. cloud. bigtable. admin. v2. models. Type. Sum Aggregate Input
These types are marker types that allow types to be used as the input to aggregate function.
Enums
Enum
Description
com. google. cloud. bigtable. admin. v2. models. App Profile. Compute Billing Owner
Compute Billing Owner specifies how usage should be accounted when using Data Boost.
com. google. cloud. bigtable. admin. v2. models. App Profile. Priority
The possible priorities for an app profile. Note that higher priority writes can sometimes
queue behind lower priority writes to the same tablet, as writes must be strictly sequenced in
the durability log.
com. google. cloud. bigtable. admin. v2. models. Backup. Backup Type
com. google. cloud. bigtable. admin. v2. models. Backup. State
com. google. cloud. bigtable. admin. v2. models. Cluster. State
com. google. cloud. bigtable. admin. v2. models. Encryption Info. Type
com. google. cloud. bigtable. admin. v2. models. Instance. State
com. google. cloud. bigtable. admin. v2. models. Instance. Type
com. google. cloud. bigtable. admin. v2. models. Storage Type
Storage media types for persisting Bigtable data.
com. google. cloud. bigtable. admin. v2. models. Table. Replication State
Exceptions
Exception
Description
com. google. cloud. bigtable. admin. v2. models. Partial List Clusters Exception
Exception thrown when some zones are unavailable and listClusters is unable to return a full
cluster list. This exception can be inspected to get a partial list.
com. google. cloud. bigtable. admin. v2. models. Partial List Instances Exception
Exception thrown when some zones are unavailable and listInstances is unable to return a full
instance list. This exception can be inspected to get a partial list.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-14 UTC."],[],[]]
