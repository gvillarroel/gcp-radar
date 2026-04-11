---
title: "Interface Batch (2.37.0) \_|\_ Java client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/com.google.cloud.datastore.Batch
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/com.google.cloud.datastore.Batch
  title: "Interface Batch (2.37.0) \_|\_ Java client libraries \_|\_ Google Cloud\
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
Interface Batch (2.37.0)
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
public interface Batch extends DatastoreBatchWriter
An interface to represent a batch of write operations. Any write operation that is applied on a
batch will only be sent to the Datastore upon #submit . A usage example:
Entity entity1 = datastore . get ( key1 );
Batch batch = datastore . newBatch ();
Entity entity2 = Entity . newBuilder ( key2 ). set ( "name" , "John" ). build ();
entity1 = Entity . newBuilder ( entity1 ). clear (). setNull ( "bla" ). build ();
Entity entity3 = Entity . newBuilder ( key3 ). set ( "title" , "title" ). build ();
batch . update ( entity1 );
batch . add ( entity2 , entity3 );
batch . submit ();
WARNING: This class maintains an internal state in terms of java.util.LinkedHashMap and java.util.LinkedHashSet which gets updated on every method
call performing CRUD operations to record the mutations. Since java.util.LinkedHashMap is
not thread safe as per its documentation ,
This class too should not be treated as a thread safe class.
Implements
DatastoreBatchWriter
Methods
add(FullEntity<?> entity)
public abstract Entity add ( FullEntity < ? > entity )
Datastore add operation: inserts the provided entity. This method will automatically allocate
an id if necessary. If entity has a complete key and was already marked for deletion in this
writer, the operation will be changed to #put .
If an entity for entity.getKey() does not exist, entity is inserted.
Otherwise, #submit() will throw a DatastoreException with DatastoreException#getReason() equal to "ALREADY_EXISTS" .
Parameter
Name
Description
entity
FullEntity < ? > the entity to be added to the datastore
Returns
Type
Description
Entity
The entity that was added
add(FullEntity<?>[] entities)
public abstract List<Entity> add ( FullEntity < ?>[] entities )
Datastore add operation: inserts the provided entities. This method will automatically allocate
id for any entity with an incomplete key. For entities with complete keys that were marked for deletion in this writer the
operation will be changed to #put .
If none of entities' keys exist, all entities are inserted. If any of entities' keys already
exists, #submit() will throw a DatastoreException with DatastoreException#getReason() equal to "ALREADY_EXISTS" . All entities in
entities whose key did not exist are inserted.
Parameter
Name
Description
entities
FullEntity < ? >[] entities to be added to the datastore
Returns
Type
Description
List < Entity >
A list of entities that have been added
getDatastore()
public abstract Datastore getDatastore ()
Returns the batch associated Datastore .
Returns
Type
Description
Datastore
The batch associated datastore
submit()
public abstract Batch . Response submit ()
Submit the batch to the Datastore.
Returns
Type
Description
Batch.Response
Response of the batch submit operation.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
