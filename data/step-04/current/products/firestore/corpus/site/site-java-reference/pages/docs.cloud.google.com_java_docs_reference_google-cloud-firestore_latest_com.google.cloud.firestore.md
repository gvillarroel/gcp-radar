---
title: "Package com.google.cloud.firestore (3.38.0) \_|\_ Java client libraries \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore
  title: "Package com.google.cloud.firestore (3.38.0) \_|\_ Java client libraries\
    \ \_|\_ Google Cloud Documentation"
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
Package com.google.cloud.firestore (3.38.0)
Stay organized with collections
Save and categorize content based on your preferences.
3.38.0 (latest)
3.37.0
3.36.0
3.35.1
3.33.4
3.32.2
3.31.9
3.30.11
3.28.0
3.27.2
3.26.5
3.25.1
3.24.3
3.22.0
3.21.4
3.20.0
3.17.0
3.16.3
3.15.7
3.14.4
3.13.2
3.12.1
3.11.0
3.10.0
3.9.6
3.8.2
3.7.10
3.6.0
3.5.0
3.4.2
3.3.0
3.2.0
3.1.0
3.0.21
GitHub Repository
Classes
Class
Description
com. google. cloud. firestore. Aggregate Field
Represents an aggregation that can be performed by Firestore.
com. google. cloud. firestore. Aggregate Field. Average Aggregate Field
Represents an "average" aggregation that can be performed by Firestore.
com. google. cloud. firestore. Aggregate Field. Count Aggregate Field
Represents a "count" aggregation that can be performed by Firestore.
com. google. cloud. firestore. Aggregate Field. Sum Aggregate Field
Represents a "sum" aggregation that can be performed by Firestore.
com. google. cloud. firestore. Aggregate Query
A query that calculates aggregations over an underlying query.
com. google. cloud. firestore. Aggregate Query Snapshot
The results of executing an AggregateQuery .
com. google. cloud. firestore. Base Path
BasePath represents a path sequence in the Firestore database. It is composed of an ordered
sequence of string segments.
com. google. cloud. firestore. Blob
Immutable class representing an array of bytes in Firestore.
com. google. cloud. firestore. Bulk Writer
A Firestore BulkWriter that can be used to perform a large number of writes in parallel.
com. google. cloud. firestore. Bulk Writer Options
Options used to configure request throttling in BulkWriter.
com. google. cloud. firestore. Bulk Writer Options. Builder
com. google. cloud. firestore. Collection Group
A Collection Group query matches all documents that are contained in a collection or
subcollection with a specific collection ID.
com. google. cloud. firestore. Collection Reference
A CollectionReference can be used for adding documents, getting document references, and querying
for documents (using the methods inherited from Query).
Subclassing Note : Firestore classes are not meant to be subclassed except for use in
com. google. cloud. firestore. Document Change
A DocumentChange represents a change to the documents matching a query. It contains the document
affected and a the type of change that occurred (added, modifed, or removed).
com. google. cloud. firestore. Document Reference
A DocumentReference refers to a document location in a Firestore database and can be used to
write, read, or listen to the location. There may or may not exist a document at the referenced
location. A DocumentReference can also be used to create a CollectionReference to a
subcollection.
com. google. cloud. firestore. Document Snapshot
A DocumentSnapshot contains data read from a document in a Firestore database. The data can be
extracted with the #getData() or #get(String) methods.
If the DocumentSnapshot points to a non-existing document, getData() and its corresponding
com. google. cloud. firestore. Execution Stats
A ExecutionStats contains information about the execution of a query.
com. google. cloud. firestore. Explain Metrics
ExplainMetrics contains information about planning and execution of a query.
com. google. cloud. firestore. Explain Options
Options used to configure explain queries.
com. google. cloud. firestore. Explain Options. Builder
com. google. cloud. firestore. Explain Results
ExplainResults contains information about planning, execution, and results of a query.
com. google. cloud. firestore. Explain Stats
A wrapper object to access explain stats if explain or analyze was enabled for the Pipeline query
execution.
com. google. cloud. firestore. Field Mask
A FieldMask can be used to limit the number of fields returned by a getAll() call.
com. google. cloud. firestore. Field Path
A FieldPath refers to a field in a document. The path may consist of a single field name
(referring to a top level field in the document), or a list of field names (referring to a nested
field in the document).
com. google. cloud. firestore. Field Value
Sentinel values that can be used when writing document fields with set() or update().
com. google. cloud. firestore. Filter
com. google. cloud. firestore. Firestore Bundle
Represents a Firestore data bundle with results from the given document and query snapshots.
com. google. cloud. firestore. Firestore Bundle. Builder
Builds a Firestore data bundle with results from the given document and query snapshots.
com. google. cloud. firestore. Firestore Open Telemetry Options
Represents the options that are used to configure the use of OpenTelemetry for telemetry
collection in the Firestore SDK.
com. google. cloud. firestore. Firestore Open Telemetry Options. Builder
com. google. cloud. firestore. Firestore Options
A Factory class to create new Firestore instances.
com. google. cloud. firestore. Firestore Options. Builder
com. google. cloud. firestore. Firestore Options. Default Firestore Factory
com. google. cloud. firestore. Firestore Options. Default Firestore Rpc Factory
com. google. cloud. firestore. Firestore Options. Emulator Credentials
com. google. cloud. firestore. Generic Query Snapshot
Abstract. A GenericQuerySnapshot represents the results of a query that returns documents. It can
contain zero or more DocumentSnapshot objects.
com. google. cloud. firestore. Geo Point
Immutable class representing a geographic location in Firestore
com. google. cloud. firestore. Internal
com. google. cloud. firestore. Pipeline
The Pipeline class provides a flexible and expressive framework for building complex data
transformation and query pipelines for Firestore.
A pipeline takes data sources, such as Firestore collections or collection groups, and applies
com. google. cloud. firestore. Pipeline. Snapshot
A Snapshot contains the results of a pipeline execution. It can be used to access the
documents, execution time, and explain stats.
com. google. cloud. firestore. Pipeline Result
A PipelineResult contains data read from a Firestore Pipeline. The data can be extracted with the
#getData() or #get(String) methods.
If the PipelineResult represents a non-document result, getReference() will return a null
com. google. cloud. firestore. Pipeline Source
A factory for creating Pipeline instances, which provide a framework for building data
transformation and query pipelines for Firestore.
Start by calling Firestore#pipeline() to obtain an instance of PipelineSource .
com. google. cloud. firestore. Pipeline Utils
com. google. cloud. firestore. Plan Summary
A Plan contains information about the planning stage of a query.
com. google. cloud. firestore. Precondition
Preconditions that can be used to restrict update() calls.
com. google. cloud. firestore. Query
A Query which you can read or listen to. You can also construct refined Query objects by adding
filters and ordering.
com. google. cloud. firestore. Query Document Snapshot
A QueryDocumentSnapshot contains data read from a document in a Firestore database as part of a
query. The document is guaranteed to exist and its data can be extracted using the #getData() or #get(String) methods.
QueryDocumentSnapshot offers the same API surface as DocumentSnapshot . Since query
com. google. cloud. firestore. Query Partition
A split point that can be used in a query as a starting and/or end point for the query results.
The cursors returned by #getStartAt() and #getEndBefore() can only be used in a
query that matches the constraint of query that produced this partition.
com. google. cloud. firestore. Query Snapshot
A QuerySnapshot contains the results of a query. It can contain zero or more DocumentSnapshot
objects.
com. google. cloud. firestore. Recursive Delete
Class used to store state required for running a recursive delete operation. Each recursive
delete call should use a new instance of the class.
com. google. cloud. firestore. Set Options
An options object that configures the behavior of set() calls. By providing one of the SetOptions
objects returned by #merge , #mergeFields and #mergeFieldPaths , the set()
calls in DocumentReference , WriteBatch and Transaction can be configured
to perform granular merges instead of overwriting the target documents in their entirety.
com. google. cloud. firestore. Streamable Query
Represents a query whose results can be streamed. If the stream fails with a retryable error,
implementations of StreamableQuery can optionally support retries with a cursor, as indicated by
isRetryableWithCursor . Retrying with a cursor means that the StreamableQuery can be resumed
where it failed by first calling startAfter(lastDocumentReceived) .
com. google. cloud. firestore. Transaction
A Transaction is passed to a Function to provide the methods to read and write data within the
transaction context.
See Also: Firestore#runTransaction(Function)
com. google. cloud. firestore. Transaction Options
Options specifying the behavior of Firestore Transactions.
A transaction in Firestore can be either read-write or read-only.
com. google. cloud. firestore. Transaction Options. Builder
com. google. cloud. firestore. Transaction Options. Read Only Options Builder
A typesafe builder class representing those options that are applicable when configuring a
transaction to be read-only. All methods function as "set" rather than returning a new copy
with a value set on it.
com. google. cloud. firestore. Transaction Options. Read Write Options Builder
A typesafe builder class representing those options that are applicable when configuring a
transaction to be read-write. All methods function as "set" rather than returning a new copy
with a value set on it. By default, a read-write transaction will be attempted a max of 5
times.
com. google. cloud. firestore. Update Builder
Abstract class that collects and bundles all write operations for Transaction and WriteBatch .
com. google. cloud. firestore. Vector Query
A query that finds the documents whose vector fields are closest to a certain query vector.
Create an instance of VectorQuery with Query#findNearest .
com. google. cloud. firestore. Vector Query Options
Specifies the behavior of the VectorQuery generated by a call to Query#findNearest .
com. google. cloud. firestore. Vector Query Options. Builder
com. google. cloud. firestore. Vector Query Snapshot
A VectorQuerySnapshot contains the results of a VectorQuery. It can contain zero or more
DocumentSnapshot objects.
com. google. cloud. firestore. Vector Value
Represents a vector in Firestore documents. Create an instance with FieldValue#vector .
com. google. cloud. firestore. Write Batch
A Firestore WriteBatch that can be used to atomically commit multiple write operations at once.
See Also: Firestore#batch()
com. google. cloud. firestore. Write Result
A WriteResult exposes the update time set by the server.
Interfaces
Interface
Description
com. google. cloud. firestore. Bulk Writer. Write Error Callback
A callback set by addWriteErrorListener() to be run every time an operation fails and
determines if an operation should be retried.
com. google. cloud. firestore. Bulk Writer. Write Result Callback
A callback set by addWriteResultListener() to be run every time an operation successfully
completes.
com. google. cloud. firestore. Event Listener
An interface for event listeners.
com. google. cloud. firestore. Firestore
Represents a Firestore Database and is the entry point for all Firestore operations
com. google. cloud. firestore. Firestore Factory
An interface for Firestore factories.
com. google. cloud. firestore. Firestore Rpc Factory
An interface for Firestore RPC factory. Implementation will be loaded via java.util.ServiceLoader .
com. google. cloud. firestore. Listener Registration
Represents a listener that can be removed by calling remove().
com. google. cloud. firestore. Transaction. Async Function
User callback that takes a Firestore Async Transaction.
com. google. cloud. firestore. Transaction. Function
User callback that takes a Firestore Transaction.
Enums
Enum
Description
com. google. cloud. firestore. Document Change. Type
An enumeration of snapshot diff types.
com. google. cloud. firestore. Query. Direction
The direction of a sort.
com. google. cloud. firestore. Transaction Options. Transaction Options Type
com. google. cloud. firestore. Vector Query. Distance Measure
The distance measure to use when comparing vectors in a VectorQuery .
See Also: com.google.cloud.firestore.Query#findNearest
Exceptions
Exception
Description
com. google. cloud. firestore. Bulk Writer Exception
The error thrown when a BulkWriter operation fails.
com. google. cloud. firestore. Firestore Exception
A Firestore Service exception.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-14 UTC."],[],[]]
