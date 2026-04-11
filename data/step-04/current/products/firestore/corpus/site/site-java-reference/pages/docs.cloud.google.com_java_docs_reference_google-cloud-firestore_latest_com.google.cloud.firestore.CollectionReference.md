---
title: "Class CollectionReference (3.38.0) \_|\_ Java client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.CollectionReference
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.CollectionReference
  title: "Class CollectionReference (3.38.0) \_|\_ Java client libraries \_|\_ Google\
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
Class CollectionReference (3.38.0)
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
public class CollectionReference extends Query
A CollectionReference can be used for adding documents, getting document references, and querying
for documents (using the methods inherited from Query).
Subclassing Note : Firestore classes are not meant to be subclassed except for use in
test mocks. Subclassing is not supported in production code and new SDK releases may break code
that does so.
Inheritance
Object >
StreamableQuery<SnapshotType> >
Query >
CollectionReference
Inherited Members
Query.addSnapshotListener(EventListener<QuerySnapshot>)
Query.addSnapshotListener(Executor,EventListener<QuerySnapshot>)
Query.aggregate(AggregateField,AggregateField)
Query.count()
Query.endAt(DocumentSnapshot)
Query.endAt(Object)
Query.endBefore(DocumentSnapshot)
Query.endBefore(Object)
Query.equals(Object)
Query.explain(ExplainOptions)
Query.explainStream(ExplainOptions,ApiStreamObserver<DocumentSnapshot>)
Query.findNearest(FieldPath,VectorValue,int,VectorQuery.DistanceMeasure)
Query.findNearest(FieldPath,VectorValue,int,VectorQuery.DistanceMeasure,VectorQueryOptions)
Query.findNearest(String,double[],int,VectorQuery.DistanceMeasure)
Query.findNearest(String,double[],int,VectorQuery.DistanceMeasure,VectorQueryOptions)
Query.fromProto(Firestore,RunQueryRequest)
Query.get()
Query.hashCode()
Query.limit(int)
Query.limitToLast(int)
Query.offset(int)
Query.orderBy(FieldPath)
Query.orderBy(FieldPath,Query.Direction)
Query.orderBy(String)
Query.orderBy(String,Query.Direction)
Query.select(FieldPath)
Query.select(String)
Query.startAfter(DocumentSnapshot)
Query.startAfter(Object)
Query.startAt(DocumentSnapshot)
Query.startAt(Object)
Query.stream(ApiStreamObserver<DocumentSnapshot>)
Query.toProto()
Query.toRunQueryRequestBuilder(ByteString,Timestamp,ExplainOptions)
Query.where(Filter)
Query.whereArrayContains(FieldPath,Object)
Query.whereArrayContains(String,Object)
Query.whereArrayContainsAny(FieldPath,List<? extends Object>)
Query.whereArrayContainsAny(String,List<? extends Object>)
Query.whereEqualTo(FieldPath,Object)
Query.whereEqualTo(String,Object)
Query.whereGreaterThan(FieldPath,Object)
Query.whereGreaterThan(String,Object)
Query.whereGreaterThanOrEqualTo(FieldPath,Object)
Query.whereGreaterThanOrEqualTo(String,Object)
Query.whereIn(FieldPath,List<? extends Object>)
Query.whereIn(String,List<? extends Object>)
Query.whereLessThan(FieldPath,Object)
Query.whereLessThan(String,Object)
Query.whereLessThanOrEqualTo(FieldPath,Object)
Query.whereLessThanOrEqualTo(String,Object)
Query.whereNotEqualTo(FieldPath,Object)
Query.whereNotEqualTo(String,Object)
Query.whereNotIn(FieldPath,List<? extends Object>)
Query.whereNotIn(String,List<? extends Object>)
StreamableQuery.getFirestore()
StreamableQuery.toString()
Object.clone()
Object.finalize()
Object.getClass()
Object.notify()
Object.notifyAll()
Object.wait()
Object.wait(long)
Object.wait(long,int)
Methods
add(Object pojo)
public ApiFuture<DocumentReference> add ( Object pojo )
Adds a new document to this collection with the specified POJO as contents, assigning it a
document ID automatically.
See Also: #document()
Parameter
Name
Description
pojo
Object The POJO that will be used to populate the contents of the document
Returns
Type
Description
ApiFuture < DocumentReference >
An ApiFuture that will be resolved with the DocumentReference of the newly created
document.
add(Map<String,Object> fields)
public ApiFuture<DocumentReference> add ( Map<String , Object > fields )
Adds a new document to this collection with the specified data, assigning it a document ID
automatically.
See Also: #document()
Parameter
Name
Description
fields
Map < String , Object > A Map containing the data for the new document.
Returns
Type
Description
ApiFuture < DocumentReference >
An ApiFuture that will be resolved with the DocumentReference of the newly created
document.
document()
public DocumentReference document ()
Returns a DocumentReference pointing to a new document with an auto-generated ID within this
collection.
Returns
Type
Description
DocumentReference
A DocumentReference pointing to a new document with an auto-generated ID.
document(String childPath)
public DocumentReference document ( String childPath )
Gets a DocumentReference instance that refers to the document that is a child of this
Collection.
Parameter
Name
Description
childPath
String A relative and slash-separated path to a document.
Returns
Type
Description
DocumentReference
The DocumentReference instance.
getId()
public String getId ()
The id of a collection refers to the last component of path pointing to a collection, for
example "collection-id" in "projects/project-id/databases/database-id/documents/collection-id".
Returns
Type
Description
String
The ID of the collection.
getParent()
public DocumentReference getParent ()
Returns a DocumentReference to the containing Document if this is a subcollection, else null.
Returns
Type
Description
DocumentReference
A DocumentReference pointing to the parent document.
getPath()
public String getPath ()
A string representing the path of the referenced collection (relative to the root of the
database).
Returns
Type
Description
String
The slash-separated path relative to the root of the database.
listDocuments()
public Iterable<DocumentReference> listDocuments ()
Retrieves the list of documents in this collection.
The document references returned may include references to "missing documents", specifically
document locations that have no document present but which contain subcollections with
documents. Attempting to read such a document reference (for example via get() or
onSnapshot() ) will return a DocumentSnapshot whose exists() method returns false.
Returns
Type
Description
Iterable < DocumentReference >
The list of documents in this collection.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-14 UTC."],[],[]]
