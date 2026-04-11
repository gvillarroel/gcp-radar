---
title: "Interface Datastore (2.37.0) \_|\_ Java client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/com.google.cloud.datastore.Datastore
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/com.google.cloud.datastore.Datastore
  title: "Interface Datastore (2.37.0) \_|\_ Java client libraries \_|\_ Google Cloud\
    \ Documentation"
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
Interface Datastore (2.37.0)
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
public interface Datastore extends Service<DatastoreOptions> , DatastoreReaderWriter , AutoCloseable
An interface for Google Cloud Datastore.
Implements
com.google.cloud.Service<com.google.cloud.datastore.DatastoreOptions> ,
DatastoreReaderWriter ,
AutoCloseable
Methods
<T>run(Query<T> query, ReadOption[] options)
public abstract QueryResults<T> < T>run ( Query<T> query , ReadOption [] options )
Submits a Query and returns its result. ReadOption s can be specified if
desired.
Example of running a query to find all entities of one kind.
String kind = "my_kind" ;
StructuredQuery<Entity> query = Query . newEntityQueryBuilder ()
. setKind ( kind )
. build ();
QueryResults<Entity> results = datastore . run ( query );
List<Entity> entities = Lists . newArrayList ();
while ( results . hasNext ()) {
Entity result = results . next ();
// do something with result
entities . add ( result );
}
Example of running a query to find all entities with a matching property value.
String kind = "my_kind" ;
String property = "my_property" ;
String value = "my_value" ;
StructuredQuery<Entity> query = Query . newEntityQueryBuilder ()
. setKind ( kind )
. setFilter ( PropertyFilter . eq ( property , value ))
. build ();
QueryResults<Entity> results = datastore . run ( query );
List<Entity> entities = Lists . newArrayList ();
while ( results . hasNext ()) {
Entity result = results . next ();
// do something with result
entities . add ( result );
}
Parameters
Name
Description
query
Query < T >
options
ReadOption []
Returns
Type
Description
QueryResults < T >
<T>run(Query<T> query, ExplainOptions explainOptions, ReadOption[] options)
public abstract QueryResults<T> < T>run ( Query<T> query , ExplainOptions explainOptions , ReadOption [] options )
Beta
This feature is covered by the Pre-GA Offerings Terms of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the launch stage descriptions.
Submits a Query with specified com.google.cloud.datastore.models.ExplainOptions
and returns its result. ReadOption s can be specified if desired.
Example of running a query to find all entities of one kind.
String kind = "my_kind" ;
StructuredQuery<Entity> query = Query . newEntityQueryBuilder ()
. setKind ( kind )
. build ();
QueryResults<Entity> results = datastore . run ( query , ExplainOptions . newBuilder (). setAnalyze ( true ). build ());
Parameters
Name
Description
query
Query < T >
explainOptions
ExplainOptions
options
ReadOption []
Returns
Type
Description
QueryResults < T >
<T>runInTransaction(Datastore.TransactionCallable<T> callable)
public abstract T < T>runInTransaction ( Datastore . TransactionCallable<T> callable )
Invokes the callback's Datastore.TransactionCallable#run method with a DatastoreReaderWriter that is associated with a new transaction. The transaction will be
committed upon successful invocation. Any thrown exception will cause the transaction to
rollback and will be propagated as a DatastoreException with the original exception as
its root cause.
Example of running in a transaction.
String callableResult = "my_callable_result" ;
TransactionCallable<String> callable = new TransactionCallable<String> () {
public String run ( DatastoreReaderWriter readerWriter ) {
// use readerWriter to run in transaction
return callableResult ;
}
};
String result = datastore . runInTransaction ( callable );
Parameter
Name
Description
callable
TransactionCallable < T > the callback to call with a newly created transactional readerWriter
Returns
Type
Description
T
<T>runInTransaction(Datastore.TransactionCallable<T> callable, TransactionOptions options)
public abstract T < T>runInTransaction ( Datastore . TransactionCallable<T> callable , TransactionOptions options )
Invokes the callback's Datastore.TransactionCallable#run method with a DatastoreReaderWriter that is associated with a new transaction. The transaction will be
committed upon successful invocation. Any thrown exception will cause the transaction to
rollback and will be propagated as a DatastoreException with the original exception as
its root cause. If TransactionOptions is set to read-write mode, previous transaction
Id in the options will be automatically populated each time a transaction is retried.
Example of running in a transaction.
String callableResult = "my_callable_result" ;
TransactionCallable<String> callable = new TransactionCallable<String> () {
public String run ( DatastoreReaderWriter readerWriter ) {
// use readerWriter to run in transaction
return callableResult ;
}
};
TransactionOptions options = TransactionOptions . newBuilder ()
. setReadWrite ( TransactionOptions . ReadWrite
. getDefaultInstance ())
. build ();
String result = datastore . runInTransaction ( callable , options );
Parameters
Name
Description
callable
TransactionCallable < T > the callback to call with a newly created transactional readerWriter
options
TransactionOptions the Transaction options indicating whether the transaction mode is Read-only or
Read-Write
Returns
Type
Description
T
add(FullEntity<?> entity)
public abstract Entity add ( FullEntity < ? > entity )
Datastore add operation: inserts the provided entity. This method will automatically allocate
an id if necessary.
If an entity for entity.getKey() does not exist, entity is inserted.
Otherwise, a DatastoreException is thrown with DatastoreException#getReason()
equal to "ALREADY_EXISTS" .
Example of adding a single entity.
String keyName = "my_key_name" ;
Key key = datastore . newKeyFactory (). setKind ( "MyKind" ). newKey ( keyName );
Entity . Builder entityBuilder = Entity . newBuilder ( key );
entityBuilder . set ( "propertyName" , "value" );
Entity entity = entityBuilder . build ();
try {
datastore . add ( entity );
} catch ( DatastoreException ex ) {
if ( "ALREADY_EXISTS" . equals ( ex . getReason ())) {
// entity.getKey() already exists
}
}
Parameter
Name
Description
entity
FullEntity < ? >
Returns
Type
Description
Entity
add(FullEntity<?>[] entities)
public abstract List<Entity> add ( FullEntity < ?>[] entities )
Datastore add operation: inserts the provided entities. This method will automatically allocate
id for any entity with an incomplete key.
If none of entities' keys exist, all entities are inserted. If any of entities' keys already
exists the method throws a DatastoreException with DatastoreException#getReason() equal to "ALREADY_EXISTS" . All entities in
entities whose key did not exist are inserted. To achieve a transactional behavior, use Transaction .
Example of adding multiple entities.
String keyName1 = "my_key_name1" ;
String keyName2 = "my_key_name2" ;
Key key1 = datastore . newKeyFactory (). setKind ( "MyKind" ). newKey ( keyName1 );
Entity . Builder entityBuilder1 = Entity . newBuilder ( key1 );
entityBuilder1 . set ( "propertyName" , "value1" );
Entity entity1 = entityBuilder1 . build ();
Key key2 = datastore . newKeyFactory (). setKind ( "MyKind" ). newKey ( keyName2 );
Entity . Builder entityBuilder2 = Entity . newBuilder ( key2 );
entityBuilder2 . set ( "propertyName" , "value2" );
Entity entity2 = entityBuilder2 . build ();
try {
datastore . add ( entity1 , entity2 );
} catch ( DatastoreException ex ) {
if ( "ALREADY_EXISTS" . equals ( ex . getReason ())) {
// at least one of entity1.getKey() and entity2.getKey() already exists
}
}
Parameter
Name
Description
entities
FullEntity < ? >[]
Returns
Type
Description
List < Entity >
allocateId(IncompleteKey key)
public abstract Key allocateId ( IncompleteKey key )
Allocate a unique id for the given key. The returned key will have the same information
(projectId, kind, namespace and ancestors) as the given key and will have a newly assigned id.
Example of allocating an id.
KeyFactory keyFactory = datastore . newKeyFactory (). setKind ( "MyKind" );
IncompleteKey incompleteKey = keyFactory . newKey ();
// let cloud datastore automatically assign an id
Key key = datastore . allocateId ( incompleteKey );
Parameter
Name
Description
key
IncompleteKey
Returns
Type
Description
Key
allocateId(IncompleteKey[] keys)
public abstract List<Key> allocateId ( IncompleteKey [] keys )
Returns a list of keys using the allocated ids ordered by the input.
Example of allocating multiple ids in a single batch.
KeyFactory keyFactory = datastore . newKeyFactory (). setKind ( "MyKind" );
IncompleteKey incompleteKey1 = keyFactory . newKey ();
IncompleteKey incompleteKey2 = keyFactory . newKey ();
// let cloud datastore automatically assign the ids
List<Key> keys = datastore . allocateId ( incompleteKey1 , incompleteKey2 );
See Also: #allocateId(IncompleteKey)
Parameter
Name
Description
keys
IncompleteKey []
Returns
Type
Description
List < Key >
close()
public abstract void close ()
Closes the gRPC channels associated with this instance and frees up their resources. This
method blocks until all channels are closed. Once this method is called, this Datastore client
is no longer usable.
Exceptions
Type
Description
Exception
delete(Key[] keys)
public abstract void delete ( Key [] keys )
A datastore delete operation. It is OK to request the deletion of a non-existing key.
Example of deleting multiple entities.
String keyName1 = "my_key_name1" ;
String keyName2 = "my_key_name2" ;
Key key1 = datastore . newKeyFactory (). setKind ( "MyKind" ). newKey ( keyName1 );
Key key2 = datastore . newKeyFactory (). setKind ( "MyKind" ). newKey ( keyName2 );
datastore . delete ( key1 , key2 );
Parameter
Name
Description
keys
Key []
fetch(Iterable<Key> keys, ReadOption[] options)
public abstract List<Entity> fetch ( Iterable<Key> keys , ReadOption [] options )
Returns a list with a value for each given key (ordered by input). null values are
returned for nonexistent keys. When possible prefer using #get(Key...) to avoid eagerly
loading the results. ReadOption s can be specified if desired.
Example of fetching a list of Entity objects.
String firstKeyName = "my_first_key_name" ;
String secondKeyName = "my_second_key_name" ;
KeyFactory keyFactory = datastore . newKeyFactory (). setKind ( "MyKind" );
Key firstKey = keyFactory . newKey ( firstKeyName );
Key secondKey = keyFactory . newKey ( secondKeyName );
List<Entity> entities = datastore . fetch ( Lists . newArrayList ( firstKey , secondKey ));
for ( Entity entity : entities ) {
// do something with the entity
}
Parameters
Name
Description
keys
Iterable < Key >
options
ReadOption []
Returns
Type
Description
List < Entity >
get(Key key, ReadOption[] options)
public abstract Entity get ( Key key , ReadOption [] options )
Returns an Entity for the given Key or null if it doesn't exist. ReadOption s can be specified if desired.
Example of getting an entity.
String keyName = "my_key_name" ;
Key key = datastore . newKeyFactory (). setKind ( "MyKind" ). newKey ( keyName );
Entity entity = datastore . get ( key );
// Do something with the entity
Parameters
Name
Description
key
Key
options
ReadOption []
Returns
Type
Description
Entity
get(Iterable<Key> keys, ReadOption[] options)
public abstract Iterator<Entity> get ( Iterable<Key> keys , ReadOption [] options )
Returns an Entity for each given Key that exists in the Datastore. The order of
the result is unspecified. Results are loaded lazily, so it is possible to get a
DatastoreException from the returned Iterator 's hasNext or
next methods. ReadOption s can be specified if desired.
Example of getting multiple entity objects.
String firstKeyName = "my_first_key_name" ;
String secondKeyName = "my_second_key_name" ;
KeyFactory keyFactory = datastore . newKeyFactory (). setKind ( "MyKind" );
Key firstKey = keyFactory . newKey ( firstKeyName );
Key secondKey = keyFactory . newKey ( secondKeyName );
Iterator<Entity> entitiesIterator = datastore . get ( Lists . newArrayList ( firstKey , secondKey ));
List<Entity> entities = Lists . newArrayList ();
while ( entitiesIterator . hasNext ()) {
Entity entity = entitiesIterator . next ();
// do something with the entity
entities . add ( entity );
}
See Also: #get(Key)
Parameters
Name
Description
keys
Iterable < Key >
options
ReadOption []
Returns
Type
Description
Iterator < Entity >
isClosed()
public abstract boolean isClosed ()
Returns true if this background resource has been shut down.
Returns
Type
Description
boolean
newBatch()
public abstract Batch newBatch ()
Returns a new Batch for processing multiple write operations in one request.
Example of starting a new batch.
String keyName1 = "my_key_name_1" ;
String keyName2 = "my_key_name_2" ;
Key key1 = datastore . newKeyFactory (). setKind ( "MyKind" ). newKey ( keyName1 );
Key key2 = datastore . newKeyFactory (). setKind ( "MyKind" ). newKey ( keyName2 );
Batch batch = datastore . newBatch ();
Entity entity1 = Entity . newBuilder ( key1 ). set ( "name" , "John" ). build ();
Entity entity2 = Entity . newBuilder ( key2 ). set ( "title" , "title" ). build ();
batch . add ( entity1 );
batch . add ( entity2 );
batch . submit ();
Returns
Type
Description
Batch
newKeyFactory()
public abstract KeyFactory newKeyFactory ()
Returns a new KeyFactory for this service
Example of creating a KeyFactory .
KeyFactory keyFactory = datastore . newKeyFactory ();
Returns
Type
Description
KeyFactory
newTransaction()
public abstract Transaction newTransaction ()
Returns a new Datastore transaction.
Returns
Type
Description
Transaction
newTransaction(TransactionOptions options)
public abstract Transaction newTransaction ( TransactionOptions options )
Returns a new Datastore transaction.
Parameter
Name
Description
options
TransactionOptions a transaction option indicating the mode of the transaction (read-only or
read-write)
Returns
Type
Description
Transaction
put(FullEntity<?> entity)
public abstract Entity put ( FullEntity < ? > entity )
A Datastore put (a.k.a upsert) operation: inserts an entity if it does not exist, updates it
otherwise. This method will automatically allocate an id if necessary.
Example of putting a single entity.
String keyName = "my_key_name" ;
Key key = datastore . newKeyFactory (). setKind ( "MyKind" ). newKey ( keyName );
Entity . Builder entityBuilder = Entity . newBuilder ( key );
entityBuilder . set ( "propertyName" , "value" );
Entity entity = entityBuilder . build ();
datastore . put ( entity );
Parameter
Name
Description
entity
FullEntity < ? >
Returns
Type
Description
Entity
put(FullEntity<?>[] entities)
public abstract List<Entity> put ( FullEntity < ?>[] entities )
A Datastore put (a.k.a upsert) operation: creates an entity if it does not exist, updates it
otherwise. This method will automatically allocate id for any entity with an incomplete key.
Example of putting multiple entities.
String keyName1 = "my_key_name1" ;
String keyName2 = "my_key_name2" ;
Key key1 = datastore . newKeyFactory (). setKind ( "MyKind" ). newKey ( keyName1 );
Entity . Builder entityBuilder1 = Entity . newBuilder ( key1 );
entityBuilder1 . set ( "propertyName" , "value1" );
Entity entity1 = entityBuilder1 . build ();
Key key2 = datastore . newKeyFactory (). setKind ( "MyKind" ). newKey ( keyName2 );
Entity . Builder entityBuilder2 = Entity . newBuilder ( key2 );
entityBuilder2 . set ( "propertyName" , "value2" );
Entity entity2 = entityBuilder2 . build ();
datastore . put ( entity1 , entity2 );
Parameter
Name
Description
entities
FullEntity < ? >[]
Returns
Type
Description
List < Entity >
reserveIds(Key[] keys)
public abstract List<Key> reserveIds ( Key [] keys )
Reserve one or more keys, preventing them from being automatically allocated by Datastore.
Example of reserving multiple ids in a single batch.
KeyFactory keyFactory = datastore . newKeyFactory (). setKind ( "MyKind" );
Key key1 = keyFactory . newKey ( 10 );
Key key2 = keyFactory . newKey ( "name" );
List<Key> keys = datastore . reserveIds ( key1 , key2 );
Parameter
Name
Description
keys
Key []
Returns
Type
Description
List < Key >
runAggregation(AggregationQuery query, ReadOption[] options)
public abstract AggregationResults runAggregation ( AggregationQuery query , ReadOption [] options )
Submits a AggregationQuery and returns AggregationResults . ReadOption s
can be specified if desired.
Example of running an AggregationQuery to find the count of entities of one kind.
StructuredQuery example:
EntityQuery selectAllQuery = Query . newEntityQueryBuilder ()
. setKind ( "Task" )
. build ();
AggregationQuery aggregationQuery = Query . newAggregationQueryBuilder ()
. addAggregation ( count (). as ( "total_count" ))
. over ( selectAllQuery )
. build ();
AggregationResults aggregationResults = datastore . runAggregation ( aggregationQuery );
for ( AggregationResult aggregationResult : aggregationResults ) {
System . out . println ( aggregationResult . get ( "total_count" ));
}
GqlQuery example:
GqlQuery selectAllGqlQuery = Query . newGqlQueryBuilder (
"AGGREGATE COUNT(*) AS total_count, COUNT_UP_TO(100) AS count_upto_100 OVER(SELECT * FROM Task)"
)
. setAllowLiteral ( true )
. build ();
AggregationQuery aggregationQuery = Query . newAggregationQueryBuilder ()
. over ( selectAllGqlQuery )
. build ();
AggregationResults aggregationResults = datastore . runAggregation ( aggregationQuery );
for ( AggregationResult aggregationResult : aggregationResults ) {
System . out . println ( aggregationResult . get ( "total_count" ));
System . out . println ( aggregationResult . get ( "count_upto_100" ));
}
Parameters
Name
Description
query
AggregationQuery
options
ReadOption []
Returns
Type
Description
AggregationResults
AggregationResults
runAggregation(AggregationQuery query, ExplainOptions explainOptions, ReadOption[] options)
public abstract AggregationResults runAggregation ( AggregationQuery query , ExplainOptions explainOptions , ReadOption [] options )
Beta
This feature is covered by the Pre-GA Offerings Terms of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the launch stage descriptions.
Submits a AggregationQuery with specified com.google.cloud.datastore.models.ExplainOptions and returns AggregationResults .
ReadOption s can be specified if desired.
Example of running an AggregationQuery to find the count of entities of one kind.
StructuredQuery example:
EntityQuery selectAllQuery = Query . newEntityQueryBuilder ()
. setKind ( "Task" )
. build ();
AggregationQuery aggregationQuery = Query . newAggregationQueryBuilder ()
. addAggregation ( count (). as ( "total_count" ))
. over ( selectAllQuery )
. build ();
AggregationResults aggregationResults = datastore . runAggregation ( aggregationQuery , ExplainOptions . newBuilder (). setAnalyze ( true ). build ());
Parameters
Name
Description
query
AggregationQuery
explainOptions
ExplainOptions
options
ReadOption []
Returns
Type
Description
AggregationResults
AggregationResults
update(Entity[] entities)
public abstract void update ( Entity [] entities )
A Datastore update operation. The operation will fail if an entity with the same key does not
already exist.
Example of updating multiple entities.
String keyName1 = "my_key_name_1" ;
String keyName2 = "my_key_name_2" ;
Key key1 = datastore . newKeyFactory (). setKind ( "MyKind" ). newKey ( keyName1 );
Entity . Builder entityBuilder1 = Entity . newBuilder ( key1 );
entityBuilder1 . set ( "propertyName" , "updatedValue1" );
Entity entity1 = entityBuilder1 . build ();
Key key2 = datastore . newKeyFactory (). setKind ( "MyKind" ). newKey ( keyName2 );
Entity . Builder entityBuilder2 = Entity . newBuilder ( key2 );
entityBuilder2 . set ( "propertyName" , "updatedValue2" );
Entity entity2 = entityBuilder2 . build ();
datastore . update ( entity1 , entity2 );
Parameter
Name
Description
entities
Entity []
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
