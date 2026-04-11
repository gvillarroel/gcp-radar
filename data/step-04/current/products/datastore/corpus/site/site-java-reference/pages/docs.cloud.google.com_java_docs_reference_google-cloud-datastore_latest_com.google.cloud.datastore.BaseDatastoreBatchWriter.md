---
title: "Class BaseDatastoreBatchWriter (2.37.0) \_|\_ Java client libraries \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/com.google.cloud.datastore.BaseDatastoreBatchWriter
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/com.google.cloud.datastore.BaseDatastoreBatchWriter
  title: "Class BaseDatastoreBatchWriter (2.37.0) \_|\_ Java client libraries \_|\_\
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
Class BaseDatastoreBatchWriter (2.37.0)
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
public abstract class BaseDatastoreBatchWriter implements DatastoreBatchWriter
Base class for DatastoreBatchWriter.
Inheritance
java.lang.Object >
BaseDatastoreBatchWriter
Implements
DatastoreBatchWriter
Inherited Members
Object.clone()
Object.equals(Object)
Object.finalize()
Object.getClass()
Object.hashCode()
Object.notify()
Object.notifyAll()
Object.toString()
Object.wait()
Object.wait(long)
Object.wait(long,int)
Methods
add(FullEntity<?> entity)
public final Entity add ( FullEntity < ? > entity )
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
public final List<Entity> add ( FullEntity < ?>[] entities )
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
public final void addWithDeferredIdAllocation ( FullEntity < ?>[] entities )
Datastore add operation. This method will also allocate id for any entity with an incomplete
key. As opposed to #add(FullEntity) and #add(FullEntity...) , this method will
defer any necessary id allocation to submit time.
Parameter
Name
Description
entities
FullEntity < ? >[]
deactivate()
protected void deactivate ()
delete(Key[] keys)
public final void delete ( Key [] keys )
A datastore delete operation. It is OK to request the deletion of a non-existing key. This operation will also remove from this batch any prior writes for entities
with the same keys.
Parameter
Name
Description
keys
Key []
getDatastore()
protected abstract Datastore getDatastore ()
Returns
Type
Description
Datastore
getName()
protected String getName ()
Returns
Type
Description
String
isActive()
public boolean isActive ()
Returns true if still active (write operations were not sent to the Datastore).
Returns
Type
Description
boolean
newInvalidRequest(String msg, Object[] params)
protected DatastoreException newInvalidRequest ( String msg , Object [] params )
Parameters
Name
Description
msg
String
params
Object []
Returns
Type
Description
DatastoreException
put(FullEntity<?> entity)
public final Entity put ( FullEntity < ? > entity )
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
public final List<Entity> put ( FullEntity < ?>[] entities )
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
public final void putWithDeferredIdAllocation ( FullEntity < ?>[] entities )
Datastore put operation. This method will also allocate id for any entity with an incomplete
key. As opposed to #put(FullEntity) and #put(FullEntity...) , this method will
defer any necessary id allocation to submit time.
Parameter
Name
Description
entities
FullEntity < ? >[]
toAdd()
protected Map<Key , FullEntity<Key> > toAdd ()
Returns
Type
Description
Map < Key , FullEntity < Key >>
toAddAutoId()
protected List<FullEntity<IncompleteKey> > toAddAutoId ()
Returns
Type
Description
List < FullEntity < IncompleteKey >>
toDelete()
protected Set<Key> toDelete ()
Returns
Type
Description
Set < Key >
toMutationPbList()
protected List<Mutation> toMutationPbList ()
Returns
Type
Description
List < Mutation >
toPut()
protected Map<Key , FullEntity<Key> > toPut ()
Returns
Type
Description
Map < Key , FullEntity < Key >>
toUpdate()
protected Map<Key , FullEntity<Key> > toUpdate ()
Returns
Type
Description
Map < Key , FullEntity < Key >>
update(Entity[] entities)
public final void update ( Entity [] entities )
A Datastore update operation. The operation will fail if an entity with the same key does not
already exist. This operation will be converted to #put operation for entities that were
already added or put in this writer.
Parameter
Name
Description
entities
Entity []
validateActive()
protected void validateActive ()
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
