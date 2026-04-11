---
title: "Package com.google.cloud.datastore (2.37.0) \_|\_ Java client libraries \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/com.google.cloud.datastore
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/com.google.cloud.datastore
  title: "Package com.google.cloud.datastore (2.37.0) \_|\_ Java client libraries\
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
Package com.google.cloud.datastore (2.37.0)
Stay organized with collections
Save and categorize content based on your preferences.
2.37.0 (latest)
2.36.0
2.34.0
2.33.3
2.32.3
2.31.4
2.30.0
2.29.1
2.28.2
2.27.1
2.26.4
2.25.2
2.24.3
2.23.0
2.22.0
2.21.3
2.20.2
2.19.2
2.18.5
2.17.6
GitHub Repository
Classes
Class
Description
com. google. cloud. datastore. Aggregation Query
An implementation of a Google Cloud Datastore Query that returns AggregationResults , It
can be constructed by providing a nested query ( StructuredQuery or GqlQuery ) to
run the aggregations on and a set of Aggregation .
com. google. cloud. datastore. Aggregation Query. Builder
com. google. cloud. datastore. Aggregation Result
Represents a result of an AggregationQuery query submission.
com. google. cloud. datastore. Aggregation Results
The result of an AggregationQuery query submission. Contains a List< AggregationResult > and readTime Timestamp in it.
This can be used to iterate over an underlying List< AggregationResult > directly.
com. google. cloud. datastore. Base Datastore Batch Writer
Base class for DatastoreBatchWriter.
com. google. cloud. datastore. Base Entity
A base class for entities (key and properties). An entity is a Google Cloud Datastore persistent
data object. An entity holds one or more properties, represented by a name (as String )
and a value (as com.google.cloud.datastore.Value ), and may be associated with a key. For
a list of possible values see ValueType .
com. google. cloud. datastore. Base Entity. Builder
com. google. cloud. datastore. Base Key
Base class for keys.
com. google. cloud. datastore. Base Key. Builder
Base class for key builders.
com. google. cloud. datastore. Blob
A Google Cloud Datastore Blob. This class is immutable.
See Also: Google Cloud Datastore Entities, Properties, and Keys
com. google. cloud. datastore. Blob Value
com. google. cloud. datastore. Blob Value. Builder
com. google. cloud. datastore. Boolean Value
com. google. cloud. datastore. Boolean Value. Builder
com. google. cloud. datastore. Cursor
A Google Cloud Datastore cursor. The cursor can be used to as a starting point or an ending point
for a Query
com. google. cloud. datastore. Datastore Open Telemetry Options
com. google. cloud. datastore. Datastore Open Telemetry Options. Builder
com. google. cloud. datastore. Datastore Options
com. google. cloud. datastore. Datastore Options. Builder
com. google. cloud. datastore. Datastore Options. Default Datastore Factory
com. google. cloud. datastore. Datastore Options. Default Datastore Rpc Factory
com. google. cloud. datastore. Datastore Utils
com. google. cloud. datastore. Double Value
com. google. cloud. datastore. Double Value. Builder
com. google. cloud. datastore. Entity
An entity is the Google Cloud Datastore persistent data object for a specific key. An entity will
always have a complete Key .
com. google. cloud. datastore. Entity. Builder
com. google. cloud. datastore. Entity Query
An implementation of a Google Cloud Datastore entity query that can be constructed by providing
all the specific query elements.
See Also: Datastore queries
com. google. cloud. datastore. Entity Query. Builder
A EntityQuery builder for queries that return Entity results.
com. google. cloud. datastore. Entity Value
com. google. cloud. datastore. Entity Value. Builder
com. google. cloud. datastore. Full Entity
A full entity is a BaseEntity that holds all the properties associated with a Datastore
entity (as opposed to ProjectionEntity ).
com. google. cloud. datastore. Full Entity. Builder
com. google. cloud. datastore. Gql Query
A Google Cloud Datastore GQL query.
A usage example:
com. google. cloud. datastore. Gql Query. Builder
A GQL query builder.
com. google. cloud. datastore. Gql Query Proto Preparer
com. google. cloud. datastore. Incomplete Key
An incomplete key (without a name or id). This class is immutable.
com. google. cloud. datastore. Incomplete Key. Builder
com. google. cloud. datastore. Key
A key that is guaranteed to be complete and could be used to reference a Google Cloud Datastore
Entity . This class is immutable.
See Also: Google Cloud Datastore Entities, Properties, and Keys
com. google. cloud. datastore. Key. Builder
com. google. cloud. datastore. Key Factory
A helper for creating keys for a specific Datastore , using its associated projectId and
namespace.
com. google. cloud. datastore. Key Query
An implementation of a Google Cloud Datastore key-only query that can be constructed by providing
all the specific query elements.
See Also: Datastore queries
com. google. cloud. datastore. Key Query. Builder
A KeyQuery builder for queries that return Key results.
com. google. cloud. datastore. Key Value
com. google. cloud. datastore. Key Value. Builder
com. google. cloud. datastore. Lat Lng
A Google Cloud Datastore LatLng (represented by latitude and longitude in degrees). This class is
immutable.
See Also: Google Cloud Datastore Entities, Properties, and Keys
com. google. cloud. datastore. Lat Lng Value
com. google. cloud. datastore. Lat Lng Value. Builder
com. google. cloud. datastore. List Value
A Google Cloud Datastore list value. A list value is a list of Value objects.
com. google. cloud. datastore. List Value. Builder
com. google. cloud. datastore. Long Value
com. google. cloud. datastore. Long Value. Builder
com. google. cloud. datastore. Null Value
com. google. cloud. datastore. Null Value. Builder
com. google. cloud. datastore. Path Element
Represents a single element in a key's path.
com. google. cloud. datastore. Projection Entity
A projection entity is a result of a Google Cloud Datastore projection query. A projection entity
holds one or more properties, represented by a name (as String ) and a value (as Value ), and may have a Key .
See Also: Google Cloud Datastore Entities, Properties, and Keys , Google Cloud Datastore projection queries
com. google. cloud. datastore. Projection Entity. Builder
com. google. cloud. datastore. Projection Entity Query
An implementation of a Google Cloud Datastore projection entity query that can be constructed by
providing all the specific query elements.
See Also: Datastore queries
com. google. cloud. datastore. Projection Entity Query. Builder
A ProjectionEntityQuery builder for queries that return ProjectionEntity
results.
com. google. cloud. datastore. Query
A Google Cloud Datastore query. For usage examples see GqlQuery , StructuredQuery
and AggregationQuery .
Note that queries require proper indexing. See Cloud Datastore Index
com. google. cloud. datastore. Query. Result Type
This class represents the expected type of the result. ENTITY: A full entity represented by
Entity . PROJECTION_ENTITY: A projection entity, represented by ProjectionEntity . KEY: An entity's Key .
com. google. cloud. datastore. Raw Value
com. google. cloud. datastore. Raw Value. Builder
com. google. cloud. datastore. Read Option
Specifies options for read operations in Datastore, namely getting/fetching entities and running
queries.
com. google. cloud. datastore. Read Option. Eventual Consistency
Specifies eventual consistency for reads from Datastore. Lookups and ancestor queries using
this option permit Datastore to return stale results.
com. google. cloud. datastore. Read Option. Query Config
com. google. cloud. datastore. Read Option. Read Time
Reads entities as they were at the given time. This may not be older than 270 seconds. This
value is only supported for Cloud Firestore in Datastore mode.
com. google. cloud. datastore. Read Option Proto Preparer
com. google. cloud. datastore. Retry And Trace Datastore Rpc Decorator
An implementation of DatastoreRpc which acts as a Decorator and decorates the underlying
DatastoreRpc with the logic of retry and Traceability.
com. google. cloud. datastore. Retry And Trace Datastore Rpc Decorator. Builder
com. google. cloud. datastore. String Value
com. google. cloud. datastore. String Value. Builder
com. google. cloud. datastore. Structured Query
An implementation of a Google Cloud Datastore Query that can be constructed by providing all the
specific query elements.
A usage example:
com. google. cloud. datastore. Structured Query. Composite Filter
A class representing a filter composed of a combination of other filters.
com. google. cloud. datastore. Structured Query. Filter
com. google. cloud. datastore. Structured Query. Order By
com. google. cloud. datastore. Structured Query. Order By. Direction
com. google. cloud. datastore. Structured Query. Property Filter
A class representing a filter based on a single property or ancestor.
com. google. cloud. datastore. Structured Query Proto Preparer
com. google. cloud. datastore. Timestamp Value
com. google. cloud. datastore. Timestamp Value. Builder
com. google. cloud. datastore. Transaction Exception Handler
com. google. cloud. datastore. Transaction Operation Exception Handler
com. google. cloud. datastore. Value
Base class for all Google Cloud Datastore value types. All values must be associated with a
non-null content (except NullValue ). All values are immutable (including their content).
To edit (a copy) use #toBuilder() . Unsupported value (deprecated or unrecognized) would
be represented by RawValue .
Interfaces
Interface
Description
com. google. cloud. datastore. Batch
An interface to represent a batch of write operations. Any write operation that is applied on a
batch will only be sent to the Datastore upon #submit . A usage example:
com. google. cloud. datastore. Batch. Response
com. google. cloud. datastore. Datastore
An interface for Google Cloud Datastore.
com. google. cloud. datastore. Datastore. Transaction Callable
A callback for running with a transactional com.google.cloud.datastore.DatastoreReaderWriter . The associated transaction will be committed
after a successful return from the run method. Any propagated exception will cause the
transaction to be rolled-back.
com. google. cloud. datastore. Datastore Batch Writer
An interface to represent a batch of write operations. All write operation for a batch writer
will be applied to the Datastore in one RPC call.
WARNING: This class maintains an internal state in terms of java.util.LinkedHashMap and java.util.LinkedHashSet which gets updated on every method
com. google. cloud. datastore. Datastore Factory
An interface for Datastore factories.
com. google. cloud. datastore. Datastore Reader
An interface to represent Google Cloud Datastore read operations.
com. google. cloud. datastore. Datastore Reader Writer
An interface that combines both Google Cloud Datastore read and write operations.
com. google. cloud. datastore. Datastore Writer
An interface to represent Google Cloud Datastore write operations.
com. google. cloud. datastore. Query Results
The result of a Google Cloud Datastore query submission. When the result is not typed it is
possible to cast it to its appropriate type according to the #getResultClass value.
Results are loaded lazily in batches, where batch size is set by Cloud Datastore. As a result, it
is possible to get a DatastoreException upon hasNext or next calls.
com. google. cloud. datastore. Record Query
An internal marker interface to represent Query that returns the entity records.
com. google. cloud. datastore. Structured Query. Builder
Interface for StructuredQuery builders.
com. google. cloud. datastore. Transaction
A Google cloud datastore transaction. Similar to Batch any write operation that is
applied on a transaction will only be sent to the Datastore upon #commit . A call to
#rollback will invalidate the transaction and discard the changes. Any read operation
that is done by a transaction will be part of it and therefore a commit is guaranteed to
com. google. cloud. datastore. Transaction. Response
com. google. cloud. datastore. Value Builder
A common interface for Value builders.
Enums
Enum
Description
com. google. cloud. datastore. Aggregation Query. Mode
com. google. cloud. datastore. Value Type
The type of a Datastore property.
See Also: Google Cloud Datastore types
Exceptions
Exception
Description
com. google. cloud. datastore. Datastore Exception
Datastore service exception.
See Also: Google Cloud Datastore error codes
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
