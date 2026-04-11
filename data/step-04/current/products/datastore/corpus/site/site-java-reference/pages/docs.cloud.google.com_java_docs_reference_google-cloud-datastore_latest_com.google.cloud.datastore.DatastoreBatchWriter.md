---
title: "Interface DatastoreBatchWriter (2.37.0) \_|\_ Java client libraries \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/com.google.cloud.datastore.DatastoreBatchWriter
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/com.google.cloud.datastore.DatastoreBatchWriter
  title: "Interface DatastoreBatchWriter (2.37.0) \_|\_ Java client libraries \_|\_\
    \ Google Cloud Documentation"
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
Interface DatastoreBatchWriter (2.37.0)
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
public interface DatastoreBatchWriter extends DatastoreWriter
An interface to represent a batch of write operations. All write operation for a batch writer
will be applied to the Datastore in one RPC call.
WARNING: This class maintains an internal state in terms of java.util.LinkedHashMap and java.util.LinkedHashSet which gets updated on every method
call performing CRUD operations to record the mutations. Since java.util.LinkedHashMap is
not thread safe as per its documentation ,
This class too should not be treated as a thread safe class.
Implements
DatastoreWriter
Methods
add(FullEntity<?> entity)
public abstract Entity add ( FullEntity < ? > entity )
Datastore add operation: inserts the provided entity. This method will automatically allocate
an id if necessary. If entity has a complete key and was already marked for deletion in this
writer, the operation will be changed to #put .
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
id for any entity with an incomplete key. For entities with complete keys that were marked for deletion in this writer the
operation will be changed to #put .
Parameter
Name
Description
entities
FullEntity < ? >[]
Returns
Type
Description
List < Entity >
addWithDeferredIdAllocation(FullEntity<?>[] entities)
public abstract void addWithDeferredIdAllocation ( FullEntity < ?>[] entities )
Datastore add operation. This method will also allocate id for any entity with an incomplete
key. As opposed to #add(FullEntity) and #add(FullEntity...) , this method will
defer any necessary id allocation to submit time.
Parameter
Name
Description
entities
FullEntity < ? >[]
delete(Key[] keys)
public abstract void delete ( Key [] keys )
A datastore delete operation. It is OK to request the deletion of a non-existing key. This operation will also remove from this batch any prior writes for entities
with the same keys.
Parameter
Name
Description
keys
Key []
isActive()
public abstract boolean isActive ()
Returns true if still active (write operations were not sent to the Datastore).
Returns
Type
Description
boolean
put(FullEntity<?> entity)
public abstract Entity put ( FullEntity < ? > entity )
A Datastore put (a.k.a upsert) operation: inserts an entity if it does not exist, updates it
otherwise. This method will automatically allocate an id if necessary. This operation will also remove from this writer any prior writes for the same
entity.
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
otherwise. This method will automatically allocate id for any entity with an incomplete key. This operation will also remove from this writer any prior writes for the same
entities.
Parameter
Name
Description
entities
FullEntity < ? >[]
Returns
Type
Description
List < Entity >
putWithDeferredIdAllocation(FullEntity<?>[] entities)
public abstract void putWithDeferredIdAllocation ( FullEntity < ?>[] entities )
Datastore put operation. This method will also allocate id for any entity with an incomplete
key. As opposed to #put(FullEntity) and #put(FullEntity...) , this method will
defer any necessary id allocation to submit time.
Parameter
Name
Description
entities
FullEntity < ? >[]
update(Entity[] entities)
public abstract void update ( Entity [] entities )
A Datastore update operation. The operation will fail if an entity with the same key does not
already exist. This operation will be converted to #put operation for entities that were
already added or put in this writer.
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
