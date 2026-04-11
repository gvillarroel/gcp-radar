---
title: "Class DocumentReference (3.38.0) \_|\_ Java client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.DocumentReference
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.DocumentReference
  title: "Class DocumentReference (3.38.0) \_|\_ Java client libraries \_|\_ Google\
    \ Cloud Documentation"
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
Class DocumentReference (3.38.0)
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
public class DocumentReference
A DocumentReference refers to a document location in a Firestore database and can be used to
write, read, or listen to the location. There may or may not exist a document at the referenced
location. A DocumentReference can also be used to create a CollectionReference to a
subcollection.
Subclassing Note : Firestore classes are not meant to be subclassed except for use in
test mocks. Subclassing is not supported in production code and new SDK releases may break code
that does so.
Inheritance
Object >
DocumentReference
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
addSnapshotListener(EventListener<DocumentSnapshot> listener)
public ListenerRegistration addSnapshotListener ( EventListener<DocumentSnapshot> listener )
Starts listening to the document referenced by this DocumentReference.
Parameter
Name
Description
listener
EventListener < DocumentSnapshot > The event listener that will be called with the snapshots.
Returns
Type
Description
ListenerRegistration
A registration object that can be used to remove the listener.
addSnapshotListener(Executor executor, EventListener<DocumentSnapshot> listener)
public ListenerRegistration addSnapshotListener ( Executor executor , EventListener<DocumentSnapshot> listener )
Starts listening to the document referenced by this DocumentReference.
Parameters
Name
Description
executor
Executor The executor to use to call the listener.
listener
EventListener < DocumentSnapshot > The event listener that will be called with the snapshots.
Returns
Type
Description
ListenerRegistration
A registration object that can be used to remove the listener.
collection(String collectionPath)
public CollectionReference collection ( String collectionPath )
Gets a CollectionReference instance that refers to the collection that is a child of this
document.
Parameter
Name
Description
collectionPath
String A relative and slash-separated path to a collection.
Returns
Type
Description
CollectionReference
The CollectionReference instance.
create(Object pojo)
public ApiFuture<WriteResult> create ( Object pojo )
Creates a new Document at the DocumentReference location. It fails the write if the document
exists.
Parameter
Name
Description
pojo
Object The POJO that will be used to populate the document contents.
Returns
Type
Description
ApiFuture < WriteResult >
An ApiFuture that will be resolved when the write finishes.
create(Map<String,Object> fields)
public ApiFuture<WriteResult> create ( Map<String , Object > fields )
Creates a new Document at the DocumentReference's Location. It fails the write if the document
exists.
Parameter
Name
Description
fields
Map < String , Object > A map of the fields and values for the document.
Returns
Type
Description
ApiFuture < WriteResult >
An ApiFuture that will be resolved when the write finishes.
delete()
public ApiFuture<WriteResult> delete ()
Deletes the document referred to by this DocumentReference.
Returns
Type
Description
ApiFuture < WriteResult >
An ApiFuture that will be resolved when the delete completes.
delete(Precondition options)
public ApiFuture<WriteResult> delete ( Precondition options )
Deletes the document referred to by this DocumentReference.
Parameter
Name
Description
options
Precondition Preconditions to enforce for this delete.
Returns
Type
Description
ApiFuture < WriteResult >
An ApiFuture that will be resolved when the delete completes.
equals(Object obj)
public boolean equals ( Object obj )
Returns true if this DocumentReference is equal to the provided object.
Parameter
Name
Description
obj
Object The object to compare against.
Returns
Type
Description
boolean
Whether this DocumentReference is equal to the provided object.
Overrides
Object.equals(Object)
get()
public ApiFuture<DocumentSnapshot> get ()
Reads the document referenced by this DocumentReference. If the document doesn't exist, the
get() will return an empty DocumentSnapshot.
Returns
Type
Description
ApiFuture < DocumentSnapshot >
An ApiFuture that will be resolved with the contents of the Document at this
DocumentReference, or a failure if the document does not exist.
get(FieldMask fieldMask)
public ApiFuture<DocumentSnapshot> get ( FieldMask fieldMask )
Reads the document referenced by this DocumentReference. If the document doesn't exist, the
get(FieldMask fieldMask) will return an empty DocumentSnapshot.
Parameter
Name
Description
fieldMask
FieldMask A FieldMask object to retrieve the field value
Returns
Type
Description
ApiFuture < DocumentSnapshot >
An ApiFuture that will be resolved with the contents of the Document at this
DocumentReference, or a failure if the document does not exist
getFirestore()
public Firestore getFirestore ()
Returns
Type
Description
Firestore
getId()
public String getId ()
The id of a document refers to the last component of path pointing to a document, for example
"document-id" in "projects/project-id/databases/database-id/document-id".
Returns
Type
Description
String
The ID of the document.
getParent()
public CollectionReference getParent ()
A reference to the Collection to which this DocumentReference belongs to.
Returns
Type
Description
CollectionReference
The parent Collection.
getPath()
public String getPath ()
A string representing the path of the referenced document (relative to the root of the
database).
Returns
Type
Description
String
The slash-separated path relative to the root of the database.
hashCode()
public int hashCode ()
Returns
Type
Description
int
Overrides
Object.hashCode()
listCollections()
public Iterable<CollectionReference> listCollections ()
Fetches the subcollections that are direct children of this document.
Returns
Type
Description
Iterable < CollectionReference >
An Iterable that can be used to fetch all subcollections.
set(Object pojo)
public ApiFuture<WriteResult> set ( Object pojo )
Overwrites the document referred to by this DocumentReference. If no document exists yet, it
will be created. If a document already exists, it will be overwritten.
Parameter
Name
Description
pojo
Object The POJO that will be used to populate the document contents.
Returns
Type
Description
ApiFuture < WriteResult >
An ApiFuture that will be resolved when the write finishes.
set(Object pojo, SetOptions options)
public ApiFuture<WriteResult> set ( Object pojo , SetOptions options )
Writes to the document referred to by this DocumentReference. If the document does not yet
exist, it will be created. If you pass SetOptions , the provided data can be merged into
an existing document.
Parameters
Name
Description
pojo
Object The POJO that will be used to populate the document contents.
options
SetOptions An object to configure the set behavior.
Returns
Type
Description
ApiFuture < WriteResult >
An ApiFuture that will be resolved when the write finishes.
set(Map<String,Object> fields)
public ApiFuture<WriteResult> set ( Map<String , Object > fields )
Overwrites the document referred to by this DocumentReference. If no document exists yet, it
will be created. If a document already exists, it will be overwritten.
Parameter
Name
Description
fields
Map < String , Object > A map of the fields and values for the document.
Returns
Type
Description
ApiFuture < WriteResult >
An ApiFuture that will be resolved when the write finishes.
set(Map<String,Object> fields, SetOptions options)
public ApiFuture<WriteResult> set ( Map<String , Object > fields , SetOptions options )
Writes to the document referred to by this DocumentReference. If the document does not yet
exist, it will be created. If you pass SetOptions , the provided data can be merged into
an existing document.
Parameters
Name
Description
fields
Map < String , Object > A map of the fields and values for the document.
options
SetOptions An object to configure the set behavior.
Returns
Type
Description
ApiFuture < WriteResult >
An ApiFuture that will be resolved when the write finishes.
toString()
public String toString ()
Returns
Type
Description
String
Overrides
Object.toString()
update(FieldPath fieldPath, Object value, Object[] moreFieldsAndValues)
public ApiFuture<WriteResult> update ( FieldPath fieldPath , Object value , Object [] moreFieldsAndValues )
Updates the fields in the document referred to by this DocumentReference. If the document
doesn't exist yet, the update will fail.
Parameters
Name
Description
fieldPath
FieldPath The first field to set
value
Object The first value to set
moreFieldsAndValues
Object [] String and Object pairs with more fields to be set.
Returns
Type
Description
ApiFuture < WriteResult >
A ApiFuture that will be resolved when the write finishes.
update(Precondition options, FieldPath fieldPath, Object value, Object[] moreFieldsAndValues)
public ApiFuture<WriteResult> update ( Precondition options , FieldPath fieldPath , Object value , Object [] moreFieldsAndValues )
Updates the fields in the document referred to by this DocumentReference. If the document
doesn't exist yet, the update will fail.
Parameters
Name
Description
options
Precondition Preconditions to enforce on this update.
fieldPath
FieldPath The first field to set
value
Object The first value to set
moreFieldsAndValues
Object [] String and Object pairs with more fields to be set.
Returns
Type
Description
ApiFuture < WriteResult >
A ApiFuture that will be resolved when the write finishes.
update(Precondition options, String field, Object value, Object[] moreFieldsAndValues)
public ApiFuture<WriteResult> update ( Precondition options , String field , Object value , Object [] moreFieldsAndValues )
Updates the fields in the document referred to by this DocumentReference. If the document
doesn't exist yet, the update will fail.
Parameters
Name
Description
options
Precondition Preconditions to enforce on this update.
field
String The first field to set
value
Object The first value to set
moreFieldsAndValues
Object [] String and Object pairs with more fields to be set.
Returns
Type
Description
ApiFuture < WriteResult >
A ApiFuture that will be resolved when the write finishes.
update(String field, Object value, Object[] moreFieldsAndValues)
public ApiFuture<WriteResult> update ( String field , Object value , Object [] moreFieldsAndValues )
Updates the fields in the document referred to by this DocumentReference. If the document
doesn't exist yet, the update will fail.
Parameters
Name
Description
field
String The first field to set
value
Object The first value to set
moreFieldsAndValues
Object [] String and Object pairs with more fields to be set.
Returns
Type
Description
ApiFuture < WriteResult >
An ApiFuture that will be resolved when the write finishes.
update(Map<String,Object> fields)
public ApiFuture<WriteResult> update ( Map<String , Object > fields )
Updates fields in the document referred to by this DocumentReference. If the document doesn't
exist yet, the update will fail.
Parameter
Name
Description
fields
Map < String , Object > A Map containing the fields and values with which to update the document.
Returns
Type
Description
ApiFuture < WriteResult >
An ApiFuture that will be resolved when the write finishes.
update(Map<String,Object> fields, Precondition options)
public ApiFuture<WriteResult> update ( Map<String , Object > fields , Precondition options )
Updates fields in the document referred to by this DocumentReference. If the document doesn't
exist yet, the update will fail.
Parameters
Name
Description
fields
Map < String , Object > A map containing the fields and values with which to update the document.
options
Precondition Preconditions to enforce on this update.
Returns
Type
Description
ApiFuture < WriteResult >
An ApiFuture that will be resolved when the write finishes.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-14 UTC."],[],[]]
