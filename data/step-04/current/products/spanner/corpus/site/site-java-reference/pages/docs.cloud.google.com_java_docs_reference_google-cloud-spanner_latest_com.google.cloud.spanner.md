---
title: "Package com.google.cloud.spanner (6.111.1) \_|\_ Java client libraries \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner
  title: "Package com.google.cloud.spanner (6.111.1) \_|\_ Java client libraries \_\
    |\_ Google Cloud Documentation"
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
Package com.google.cloud.spanner (6.111.1)
Stay organized with collections
Save and categorize content based on your preferences.
6.111.1 (latest)
6.111.0
6.108.0
6.107.0
6.103.0
6.102.1
6.101.1
6.100.0
6.99.0
6.98.1
6.97.1
6.96.1
6.95.1
6.94.0
6.93.0
6.89.0
6.88.0
6.87.0
6.86.0
6.85.0
6.83.0
6.82.0
6.80.1
6.79.0
6.77.0
6.74.1
6.72.0
6.71.0
6.69.0
6.68.0
6.66.0
6.65.1
6.62.0
6.60.0
6.58.0
6.57.0
6.56.0
6.55.0
6.54.0
6.53.0
6.52.1
6.51.0
6.50.1
6.49.0
6.25.1
6.24.0
6.23.4
6.22.0
6.21.2
6.20.0
6.19.1
6.18.0
6.17.4
6.14.1
GitHub Repository
Client Classes
Client classes are the main entry point to using a package.
They contain several variations of Java methods for each of the API's methods.
Client
Description
com. google. cloud. spanner. Batch Client
Interface for the Batch Client that is used to read data from a Cloud Spanner database. An
instance of this is tied to a specific database.
BatchClient is useful when one wants to read or query a large amount of data from
com. google. cloud. spanner. Database Admin Client
Client to do admin operations on a Cloud Spanner Database.
com. google. cloud. spanner. Database Client
Interface for all the APIs that are used to read/write data into a Cloud Spanner database. An
instance of this is tied to a specific database.
com. google. cloud. spanner. Instance Admin Client
Client to do admin operations on Cloud Spanner Instance and Instance Configs.
Classes
Class
Description
com. google. cloud. spanner. Abstract Lazy Initializer
Generic AbstractLazyInitializer for any heavy-weight object that might throw an exception
during initialization. The underlying object is initialized at most once.
com. google. cloud. spanner. Abstract Struct Reader
Base class for assisting StructReader implementations.
This class implements the majority of the StructReader interface, leaving subclasses
to implement core data access via the getTypeNameInternal() methods.
com. google. cloud. spanner. Backup
Represents a Cloud Spanner database backup. Backup adds a layer of service related
functionality over BackupInfo .
com. google. cloud. spanner. Backup. Builder
com. google. cloud. spanner. Backup Id
Represents an id of a Cloud Spanner backup resource.
com. google. cloud. spanner. Backup Info
Represents a Cloud Spanner database backup.
com. google. cloud. spanner. Backup Info. Builder
com. google. cloud. spanner. Batch Client Impl
Default implementation for Batch Client interface.
com. google. cloud. spanner. Batch Transaction Id
BatchTransactionId is unique identifier for BatchReadOnlyTransaction . It can be
used to re-initialize a BatchReadOnlyTransaction on different machine or process by calling
BatchClient#batchReadOnlyTransaction(BatchTransactionId) .
com. google. cloud. spanner. Built In Metrics Constant
com. google. cloud. spanner. Commit Response
Represents a response from a commit operation.
com. google. cloud. spanner. Commit Stats
Commit statistics are returned by a read/write transaction if specifically requested by passing
in Options#commitStats() to the transaction.
com. google. cloud. spanner. Composite Tracer
com. google. cloud. spanner. Composite Tracer Factory
com. google. cloud. spanner. Database
Represents a Cloud Spanner database. Database adds a layer of service related
functionality over DatabaseInfo .
com. google. cloud. spanner. Database. Builder
com. google. cloud. spanner. Database Id
Represents an id of a Cloud Spanner database resource.
com. google. cloud. spanner. Database Info
Represents a Cloud Spanner database.
com. google. cloud. spanner. Database Info. Builder
com. google. cloud. spanner. Database Role
A Cloud Spanner database role.
com. google. cloud. spanner. Database Role. Builder
com. google. cloud. spanner. Delayed Async Runner
Represents a AsyncRunner using a multiplexed session that is not yet ready. The execution
will be delayed until the multiplexed session has been created and is ready. This class is only
used during the startup of the client and the multiplexed session has not yet been created.
com. google. cloud. spanner. Delayed Async Transaction Manager
Represents a AsyncTransactionManager using a multiplexed session that is not yet ready.
The execution will be delayed until the multiplexed session has been created and is ready. This
class is only used during the startup of the client and the multiplexed session has not yet been
created.
com. google. cloud. spanner. Forwarding Async Result Set
Forwarding implementation of AsyncResultSet that forwards all calls to a delegate.
com. google. cloud. spanner. Forwarding Result Set
Forwarding implementation of ResultSet that forwards all calls to a delegate.
com. google. cloud. spanner. Forwarding Struct Reader
Forwarding implements of StructReader
com. google. cloud. spanner. Instance
Represents a Cloud Spanner Instance. Instance adds a layer of service related
functionality over InstanceInfo .
com. google. cloud. spanner. Instance. Builder
Builder of Instance .
com. google. cloud. spanner. Instance Config
Represents a Cloud Spanner instance config. InstanceConfig adds a layer of service related
functionality over InstanceConfigInfo .
com. google. cloud. spanner. Instance Config. Builder
Builder of InstanceConfig .
com. google. cloud. spanner. Instance Config Id
Returns id of a Cloud Spanner instance config.
com. google. cloud. spanner. Instance Config Info
Represents a Cloud Spanner instance config resource.
com. google. cloud. spanner. Instance Config Info. Builder
Builder for InstanceConfigInfo .
com. google. cloud. spanner. Instance Id
Represents the resource name of a Cloud Spanner Instance.
com. google. cloud. spanner. Instance Info
Represents a Cloud Spanner Instance.
com. google. cloud. spanner. Instance Info. Builder
Builder for InstanceInfo .
com. google. cloud. spanner. Interval
Represents the time duration as a combination of months, days and nanoseconds. Nanoseconds are
broken into two components microseconds and nanoFractions, where nanoFractions can range from
[-999, 999]. Internally, Spanner supports Interval value with the following range of individual
fields: months: [-120000, 120000] days: [-3660000, 3660000] nanoseconds: [-316224000000000000000,
com. google. cloud. spanner. Interval. Builder
com. google. cloud. spanner. Is Retryable Internal Error
com. google. cloud. spanner. Key
Represents a row key in a Cloud Spanner table or index. A key is a tuple of values constrained to
the scalar Cloud Spanner types: currently these are BOOLEAN , INT64 ,
FLOAT64 , STRING , BYTES and TIMESTAMP . Values may be null where the table
definition permits it.
com. google. cloud. spanner. Key. Builder
Builder for Key instances.
com. google. cloud. spanner. Key Range
Represents a range of rows in a table or index.
A range has a start key and an end key. These keys can be open or closed, indicating if the
range includes rows with that key.
com. google. cloud. spanner. Key Range. Builder
Builder for KeyRange instances.
com. google. cloud. spanner. Key Set
Defines a collection of Cloud Spanner keys and/or key ranges. All the keys are expected to be in
the same table or index. The keys need not be sorted in any particular way.
If the same key is specified multiple times in the set (for example if two ranges, two keys,
com. google. cloud. spanner. Key Set. Builder
Builder for KeySet instances.
com. google. cloud. spanner. Lazy Spanner Initializer
Default implementation of AbstractLazyInitializer for a Spanner instance.
com. google. cloud. spanner. Mutation
Represents an individual table modification to be applied to Cloud Spanner.
The types of mutation that can be created are defined by Op . To construct a mutation,
use one of the builder methods. For example, to create a mutation that will insert a value of "x"
com. google. cloud. spanner. Mutation. Ack Builder
Builder for Op#ACK mutation.
com. google. cloud. spanner. Mutation. Send Builder
Builder for Op#SEND mutation.
com. google. cloud. spanner. Mutation. Write Builder
Builder for Op#INSERT , Op#INSERT_OR_UPDATE , Op#UPDATE , and Op#REPLACE mutations.
com. google. cloud. spanner. Mutation Group
Represents a group of Cloud Spanner mutations to be committed together.
com. google. cloud. spanner. Open Census Span
com. google. cloud. spanner. Open Telemetry Context Keys
Keys for OpenTelemetry context variables that are used by the Spanner client library. Only
intended for internal use.
com. google. cloud. spanner. Operation
Represents a long-running operation.
com. google. cloud. spanner. Options
Specifies options for various spanner operations
com. google. cloud. spanner. Partition
Defines the segments of data to be read in a batch read/query context. They can be serialized and
processed across several different machines or processes.
com. google. cloud. spanner. Partition Options
Defines the configuration for the number and size of partitions returned from BatchReadOnlyTransaction#partitionRead , BatchReadOnlyTransaction#partitionReadUsingIndex
and BatchReadOnlyTransaction#partitionQuery
Note: these options may not be honored based on the other parameters in the request.
com. google. cloud. spanner. Partition Options. Builder
Builder for PartitionOptions instance.
com. google. cloud. spanner. Partitioned Dml Transaction
com. google. cloud. spanner. Replica Info
Represents a Cloud Spanner replica information.
com. google. cloud. spanner. Replica Info. Builder Impl
com. google. cloud. spanner. Restore
Represents a restore operation of a Cloud Spanner backup.
com. google. cloud. spanner. Restore. Builder
com. google. cloud. spanner. Restore Info
Represents the restore information of a Cloud Spanner database.
com. google. cloud. spanner. Result Sets
Utility methods for working with com.google.cloud.spanner.ResultSet .
com. google. cloud. spanner. Session Pool Options
Deprecated. The Spanner Java client uses a single multiplexed session. All options related to the
session pool are no longer functional and will be removed in a future version.
com. google. cloud. spanner. Session Pool Options. Builder
Builder for creating SessionPoolOptions.
com. google. cloud. spanner. Session Pool Options Helper
Simple helper class to get access to a package-private method in the com.google.cloud.spanner.SessionPoolOptions .
com. google. cloud. spanner. Spanner Api Futures
com. google. cloud. spanner. Spanner Exception Factory
A factory for creating instances of SpannerException and its subtypes. All creation of
these exceptions is directed through the factory. This ensures that particular types of errors
are always expressed as the same concrete exception type. For example, exceptions of type ErrorCode#ABORTED are always represented by AbortedException .
com. google. cloud. spanner. Spanner Options
Options for the Cloud Spanner service.
com. google. cloud. spanner. Spanner Options. Builder
Builder for SpannerOptions instances.
com. google. cloud. spanner. Spanner Options. Builder. Default Read Write Transaction Options
Provides the default read-write transaction options for all databases. These defaults are
overridden by any explicit com.google.cloud.spanner.Options.TransactionOption
provided through DatabaseClient .
com. google. cloud. spanner. Spanner Options. Builder. Default Read Write Transaction Options. Default Read Write Transaction Options Builder
com. google. cloud. spanner. Spanner Options. Fixed Closeable Executor Provider
Implementation of CloseableExecutorProvider that uses a fixed single ScheduledExecutorService .
com. google. cloud. spanner. Spanner Options. Spanner Call Context Timeout Configurator
Helper class to configure timeouts for specific Spanner RPCs. The SpannerCallContextTimeoutConfigurator must be set as a value on the Context using the
SpannerOptions#CALL_CONTEXT_CONFIGURATOR_KEY key.
Example usage:
com. google. cloud. spanner. Spanner Rpc Metrics
com. google. cloud. spanner. Statement
A SQL statement and optional bound parameters that can be executed in a ReadContext .
The SQL query string can contain parameter placeholders. A parameter placeholder consists of
@ followed by the parameter name. Parameter names consist of any combination of
com. google. cloud. spanner. Statement. Builder
Builder for Statement .
com. google. cloud. spanner. Statement. Statement Factory
Factory for creating Statement s with unnamed parameters.
This class is primarily intended for framework developers who want to integrate the Spanner
client with a framework that uses unnamed parameters. Developers who want to use the Spanner
com. google. cloud. spanner. Struct
Represents a non- NULL value of Type.Code#STRUCT . Such values are a tuple of named
and typed columns, where individual columns may be null. Individual rows from a read or query
operation can be considered as structs; ResultSet#getCurrentRowAsStruct() allows an
immutable struct to be created from the row that the result set is currently positioned over.
com. google. cloud. spanner. Struct. Builder
Builder for constructing non- NULL Struct instances.
com. google. cloud. spanner. Thread Factory Util
Utility class for creating a thread factory for daemon or virtual threads.
com. google. cloud. spanner. Timestamp Bound
Defines how Cloud Spanner will choose a timestamp for a read-only transaction or a single
read/query.
The types of timestamp bound are:
com. google. cloud. spanner. Type
Describes a type in the Cloud Spanner type system. Types can either be primitive (for example,
INT64 and STRING ) or composite (for example, ARRAY<INT64> or
STRUCT<INT64,STRING> ).
com. google. cloud. spanner. Type. Struct Field
Describes an individual field in a STRUCT type .
com. google. cloud. spanner. Value
Represents a value to be consumed by the Cloud Spanner API. A value can be NULL or
non- NULL ; regardless, values always have an associated type.
The Value API is optimized for construction, since this is the majority use-case when
com. google. cloud. spanner. Value Binder
An interface for binding a Value in some context. Users of the Cloud Spanner client
library never create a ValueBinder directly; instead this interface is returned from
other parts of the library involved in Value construction. For example, Mutation.WriteBuilder#set(String) returns a binder to bind a column value, and
Statement#bind(String) returns a binder to bind a parameter to a value.
com. google. cloud. spanner.X Goog Spanner Request Id
Interfaces
Interface
Description
com. google. cloud. spanner. Async Result Set
Interface for result sets returned by async query methods.
com. google. cloud. spanner. Async Result Set. Ready Callback
Interface for receiving asynchronous callbacks when new data is ready. See AsyncResultSet#setCallback(Executor, ReadyCallback) .
com. google. cloud. spanner. Async Result Set. Stream Message Listener
An interface to register the listener for streaming gRPC request. It will be called when a
chunk is received from gRPC streaming call.
com. google. cloud. spanner. Async Runner
com. google. cloud. spanner. Async Runner. Async Work
Functional interface for executing a read/write transaction asynchronously that returns a
result of type R.
com. google. cloud. spanner. Async Transaction Manager
An interface for managing the life cycle of a read write transaction including all its retries.
See TransactionContext for a description of transaction semantics.
At any point in time there can be at most one active transaction in this manager. When that
com. google. cloud. spanner. Async Transaction Manager. Async Transaction Function
Each step in a transaction chain is defined by an AsyncTransactionFunction . It receives
a TransactionContext and the output value of the previous transaction step as its input
parameters. The method should return an ApiFuture that will return the result of this
step.
com. google. cloud. spanner. Async Transaction Manager. Async Transaction Step
AsyncTransactionStep is returned by TransactionContextFuture#then(AsyncTransactionFunction, Executor) and AsyncTransactionStep#then(AsyncTransactionFunction, Executor) and allows transaction steps
that should be executed serially to be chained together. Each step can contain one or more
statements that may execute in parallel.
com. google. cloud. spanner. Async Transaction Manager. Commit Timestamp Future
ApiFuture that returns the commit Timestamp of a Cloud Spanner transaction that
is executed using an AsyncTransactionManager . This future is returned by the call to
AsyncTransactionStep#commitAsync() of the last step in the transaction.
com. google. cloud. spanner. Async Transaction Manager. Transaction Context Future
ApiFuture that returns a TransactionContext and that supports chaining of
multiple TransactionContextFuture s to form a transaction.
com. google. cloud. spanner. Batch Read Only Transaction
BatchReadOnlyTransaction can be configured to read at timestamps in the past and allows
for exporting arbitrarily large amounts of data from Cloud Spanner databases. This is a read only
transaction which additionally allows to partition a read or query request. Read/query request
can then be executed independently over each partition while observing the same snapshot of the
com. google. cloud. spanner. Options. Admin Api Option
Marker interface to mark options applicable to operations in admin API.
com. google. cloud. spanner. Options. Create Admin Api Option
Marker interface to mark options applicable to Create operations in admin API.
com. google. cloud. spanner. Options. Create Update Delete Admin Api Option
Marker interface to mark options applicable to Create, Update and Delete operations in admin
API.
com. google. cloud. spanner. Options. Delete Admin Api Option
Marker interface to mark options applicable to Delete operations in admin API.
com. google. cloud. spanner. Options. List Option
Marker interface to mark options applicable to list operations in admin API.
com. google. cloud. spanner. Options. Query Option
Marker interface to mark options applicable to query operation.
com. google. cloud. spanner. Options. Query Update Option
Marker interface for options that can be used with both executeQuery and executeUpdate.
com. google. cloud. spanner. Options. Read And Query Option
Marker interface to mark options applicable to both Read and Query operations
com. google. cloud. spanner. Options. Read Option
Marker interface to mark options applicable to read operation
com. google. cloud. spanner. Options. Read Query Update Transaction Option
Marker interface to mark options applicable to Read, Query, Update and Write operations
com. google. cloud. spanner. Options. Transaction Option
Marker interface to mark options applicable to write operations
com. google. cloud. spanner. Options. Update Admin Api Option
Marker interface to mark options applicable to Update operations in admin API.
com. google. cloud. spanner. Options. Update Option
Marker interface to mark options applicable to update operation.
com. google. cloud. spanner. Options. Update Transaction Option
Marker interface to mark options applicable to Update and Write operations
com. google. cloud. spanner. Protobuf Result Set
Interface for ResultSet s that can return a protobuf value.
com. google. cloud. spanner. Read Context
A concurrency context in which to run a read or SQL statement. All ReadContext s are
implicitly bound to a Session and therefore a particular Database .
com. google. cloud. spanner. Read Only Transaction
A transaction type that provides guaranteed consistency across several reads, but does not allow
writes. Snapshot read-only transactions can be configured to read at timestamps in the past.
Snapshot read-only transactions do not need to be committed.
com. google. cloud. spanner. Result Set
Provides access to the data returned by a Cloud Spanner read or query. ResultSet allows a
single row to be inspected at a time through the methods from the StructReader interface,
in the order that the rows were returned by the read or query. The result set can be positioned
over the next row, if one exists, by calling #next() ; this method returns false
com. google. cloud. spanner. Session
A Session can be used to perform transactions that read and/or modify data in a Cloud
Spanner database.
Sessions can only execute one transaction at a time. To execute multiple concurrent
com. google. cloud. spanner. Spanner
An interface for Cloud Spanner. Typically, there would only be one instance of this for the
lifetime of the application which must be closed by invoking #close() when it is no
longer needed. Failure to do so may result in leaking session resources and exhausting session
quota.
com. google. cloud. spanner. Spanner Factory
Factory to create instance of Spanner .
com. google. cloud. spanner. Spanner Options. Call Context Configurator
CallContextConfigurator can be used to modify the ApiCallContext for one or
more specific RPCs. This can be used to set specific timeout value for RPCs or use specific
CallCredentials for an RPC. The CallContextConfigurator must be set as a value
on the Context using the SpannerOptions#CALL_CONTEXT_CONFIGURATOR_KEY key.
com. google. cloud. spanner. Spanner Options. Call Credentials Provider
Interface that can be used to provide CallCredentials to SpannerOptions .
com. google. cloud. spanner. Spanner Options. Closeable Executor Provider
ExecutorProvider that is used for AsyncResultSet .
com. google. cloud. spanner. Spanner Options. Spanner Environment
The environment to read configuration values from. The default implementation uses environment
variables.
com. google. cloud. spanner. Struct Reader
A base interface for reading the fields of a STRUCT . The Cloud Spanner yields
StructReader instances as one of the subclasses ResultSet or Struct , most
commonly as the result of a read or query operation. At any point in time, a StructReader
provides access to a single tuple of data comprising multiple typed columns. Each column may have
com. google. cloud. spanner. Transaction Context
Context for a single attempt of a locking read-write transaction. This type of transaction is the
only way to write data into Cloud Spanner; Session#write(Iterable) and Session#writeAtLeastOnce(Iterable) use transactions internally. These transactions rely on
pessimistic locking and, if necessary, two-phase commit. Locking read-write transactions may
abort, requiring the application to retry. However, the interface exposed by TransactionRunner eliminates the need for applications to write retry loops explicitly.
com. google. cloud. spanner. Transaction Manager
An interface for managing the life cycle of a read write transaction including all its retries.
See TransactionContext for a description of transaction semantics.
At any point in time there can be at most one active transaction in this manager. When that
com. google. cloud. spanner. Transaction Runner
An interface for executing a body of work in the context of a read-write transaction, with
retries for transaction aborts. See TransactionContext for a description of transaction
semantics. TransactionRunner instances are obtained by calling DatabaseClient#readWriteTransaction(TransactionOption...) .
com. google. cloud. spanner. Transaction Runner. Transaction Callable
A unit of work to be performed in the context of a transaction.
com. google. cloud. spanner.X Goog Spanner Request Id. Request Id Creator
Enums
Enum
Description
com. google. cloud. spanner. Async Result Set. Callback Response
com. google. cloud. spanner. Async Result Set. Cursor State
Response code from tryNext() .
com. google. cloud. spanner. Backup Info. State
State of the backup.
com. google. cloud. spanner. Database Info. Database Field
Represent an updatable field in a Cloud Spanner database.
com. google. cloud. spanner. Database Info. State
State of the database.
com. google. cloud. spanner. Decode Mode
Specifies how and when to decode a value from protobuf to a plain Java object.
com. google. cloud. spanner. Dialect
com. google. cloud. spanner. Error Code
Enumerates the major types of error that the Cloud Spanner service can produce. These codes are
accessible via SpannerException#getErrorCode() .
com. google. cloud. spanner. Instance Config Info. Instance Config Field
Represent an updatable field in Cloud Spanner InstanceConfig.
com. google. cloud. spanner. Instance Config Info. State
Type of the Instance config.
com. google. cloud. spanner. Instance Config Info. Type
Type of the Instance config.
com. google. cloud. spanner. Instance Info. Instance Field
Represent an updatable field in Cloud Spanner instance.
com. google. cloud. spanner. Instance Info. State
State of the Instance.
com. google. cloud. spanner. Key Range. Endpoint
Defines whether a range includes or excludes its endpoint keys.
com. google. cloud. spanner. Mutation. Op
Enumerates the types of mutation that can be applied.
com. google. cloud. spanner. Options. Rpc Lock Hint
com. google. cloud. spanner. Options. Rpc Order By
OrderBy for an RPC invocation. The default orderby is #PRIMARY_KEY . This enum can be
used to control the order in which rows are returned from a read.
com. google. cloud. spanner. Options. Rpc Priority
Priority for an RPC invocation. The default priority is #HIGH . This enum can be used to
set a lower priority for a specific RPC invocation.
com. google. cloud. spanner. Read Context. Query Analyze Mode
Used to specify the mode in which the query should be analyzed by ReadContext#analyzeQuery(Statement,QueryAnalyzeMode) .
com. google. cloud. spanner. Replica Info. Replica Type
Indicates the type of the replica. See the replica types documentation at
https://cloud.google.com/spanner/docs/replication#replica_types for more details.
com. google. cloud. spanner. Restore Info. Restore Source Type
Source of the restore information.
com. google. cloud. spanner. Timestamp Bound. Mode
The type of timestamp bound. See the class documentation of TimestampBound for a
detailed discussion of the various modes.
com. google. cloud. spanner. Transaction Manager. Transaction State
State of the transaction manager.
com. google. cloud. spanner. Type. Code
Enumerates the categories of types.
Exceptions
Exception
Description
com. google. cloud. spanner. Aborted Due To Concurrent Modification Exception
Exception thrown by a Connection when a database operation detects that a transaction has
aborted and an internal retry failed because of a concurrent modification. This type of error has
its own subclass since it is often necessary to handle this specific kind of aborted exceptions
differently to other types of errors.
com. google. cloud. spanner. Aborted Exception
Exception thrown by Cloud Spanner when an operation detects that a transaction has aborted. This
type of error has its own subclass since it is often necessary to handle aborted differently to
other types of errors, most typically by retrying the transaction.
com. google. cloud. spanner. Admin Requests Per Minute Exceeded Exception
Exception thrown by Cloud Spanner the number of administrative requests per minute has been
exceeded.
com. google. cloud. spanner. Database Not Found Exception
Exception thrown by Cloud Spanner when an operation detects that the database that is being used
no longer exists. This type of error has its own subclass as it is a condition that should cause
the client library to stop trying to send RPCs to the backend until the user has taken action.
com. google. cloud. spanner. Dml Batch Update Count Verification Failed Exception
Exception thrown by a Connection when an automatic DML batch detects that one or more of
the update counts that it returned during the buffering of DML statements does not match with the
actual update counts that were returned after execution.
com. google. cloud. spanner. Instance Not Found Exception
Exception thrown by Cloud Spanner when an operation detects that the instance that is being used
no longer exists. This type of error has its own subclass as it is a condition that should cause
the client library to stop trying to send RPCs to the backend until the user has taken action.
com. google. cloud. spanner. Is Ssl Handshake Exception
com. google. cloud. spanner. Missing Default Sequence Kind Exception
Exception thrown by Spanner when a DDL statement failed because no default sequence kind has been
configured for a database.
com. google. cloud. spanner. Session Not Found Exception
Exception thrown by Cloud Spanner when an operation detects that the session that is being used
is no longer valid. This type of error has its own subclass as it is a condition that should
normally be hidden from the user, and the client library should try to fix this internally.
com. google. cloud. spanner. Spanner Batch Update Exception
com. google. cloud. spanner. Spanner Exception
Base exception type for all exceptions produced by the Cloud Spanner service.
com. google. cloud. spanner. Spanner Exception. Resource Not Found Exception
Base exception type for NOT_FOUND exceptions for known resource types.
com. google. cloud. spanner. Transaction Mutation Limit Exceeded Exception
Exception thrown by Spanner when the transaction mutation limit has been exceeded.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-14 UTC."],[],[]]
