---
title: "Class BulkWriter (3.38.0) \_|\_ Java client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.BulkWriter
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.BulkWriter
  title: "Class BulkWriter (3.38.0) \_|\_ Java client libraries \_|\_ Google Cloud\
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
Class BulkWriter (3.38.0)
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
public final class BulkWriter implements AutoCloseable
A Firestore BulkWriter that can be used to perform a large number of writes in parallel.
Inheritance
Object >
BulkWriter
Implements
AutoCloseable
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
Static Fields
MAX_BATCH_SIZE
public static final int MAX_BATCH_SIZE
The maximum number of writes that can be in a single batch.
Field Value
Type
Description
int
MAX_RETRY_ATTEMPTS
public static final int MAX_RETRY_ATTEMPTS
The maximum number of retries that will be attempted with backoff before stopping all retry
attempts.
Field Value
Type
Description
int
RETRY_MAX_BATCH_SIZE
public static final int RETRY_MAX_BATCH_SIZE
The maximum number of writes that can be in a batch containing retries.
Field Value
Type
Description
int
Methods
addWriteErrorListener(BulkWriter.WriteErrorCallback onError)
public void addWriteErrorListener ( BulkWriter . WriteErrorCallback onError )
Attaches an error handler listener that is run every time a BulkWriter operation fails.
BulkWriter has a default error handler that retries UNAVAILABLE and ABORTED errors up to a
maximum of 10 failed attempts. When an error handler is specified, the default error handler
will be overwritten.
For example, see the sample code:
BulkWriter bulkWriter = firestore . bulkWriter ();
bulkWriter . addWriteErrorListener (
( BulkWriterException error ) - > {
if ( error . getStatus () == Status . UNAVAILABLE
&& error . getFailedAttempts () < max_retry_attempts ) = "" { = "" return = "" true ; = "" } = "" else = "" { = "" system . out . println ( "failed="" write="" at="" document:="" " = "" += "" error . getdocumentreference ()); = "" return = "" false ; = "" } = "" } = "" ); = "" >
Parameter
Name
Description
onError
BulkWriter.WriteErrorCallback A callback to be called every time a BulkWriter operation fails. Returning
true will retry the operation. Returning false will stop the retry loop.
addWriteErrorListener(Executor executor, BulkWriter.WriteErrorCallback onError)
public void addWriteErrorListener ( Executor executor , BulkWriter . WriteErrorCallback onError )
Attaches an error handler listener that is run every time a BulkWriter operation fails.
The executor cannot be changed once writes have been enqueued onto the BulkWriter.
BulkWriter has a default error handler that retries UNAVAILABLE and ABORTED errors up to a
maximum of 10 failed attempts. When an error handler is specified, the default error handler
will be overwritten.
For example, see the sample code:
BulkWriter bulkWriter = firestore . bulkWriter ();
bulkWriter . addWriteErrorListener (
( BulkWriterException error ) - > {
if ( error . getStatus () == Status . UNAVAILABLE
&& error . getFailedAttempts () < max_retry_attempts ) = "" { = "" return = "" true ; = "" } = "" else = "" { = "" system . out . println ( "failed="" write="" at="" document:="" " = "" += "" error . getdocumentreference ()); = "" return = "" false ; = "" } = "" } = "" ); = "" >
Parameters
Name
Description
executor
Executor The executor to run the provided callback on.
onError
BulkWriter.WriteErrorCallback A callback to be called every time a BulkWriter operation fails. Returning
true will retry the operation. Returning false will stop the retry loop.
addWriteResultListener(BulkWriter.WriteResultCallback writeResultCallback)
public void addWriteResultListener ( BulkWriter . WriteResultCallback writeResultCallback )
Attaches a listener that is run every time a BulkWriter operation successfully completes. The
listener will be run before close() completes.
For example, see the sample code:
BulkWriter bulkWriter = firestore.bulkWriter();
bulkWriter.addWriteResultListener(
(DocumentReference documentReference, WriteResult result) -> {
System.out.println(
"Successfully executed write on document: "
documentReference
" at: "
result.getUpdateTime());
}
);
Parameter
Name
Description
writeResultCallback
BulkWriter.WriteResultCallback A callback to be called every time a BulkWriter operation
successfully completes.
addWriteResultListener(Executor executor, BulkWriter.WriteResultCallback writeResultCallback)
public void addWriteResultListener ( Executor executor , BulkWriter . WriteResultCallback writeResultCallback )
Attaches a listener that is run every time a BulkWriter operation successfully completes.
The executor cannot be changed once writes have been enqueued onto the BulkWriter.
For example, see the sample code:
BulkWriter bulkWriter = firestore . bulkWriter ();
bulkWriter . addWriteResultListener (
( DocumentReference documentReference , WriteResult result ) - > {
System . out . println (
"Successfully executed write on document: "
+ documentReference
+ " at: "
+ result . getUpdateTime ());
}
);
Parameters
Name
Description
executor
Executor The executor to run the provided callback on.
writeResultCallback
BulkWriter.WriteResultCallback A callback to be called every time a BulkWriter operation
successfully completes.
close()
public void close ()
Commits all enqueued writes and marks the BulkWriter instance as closed.
After calling close() , calling any method will return an error. Any retries scheduled with
addWriteErrorListener() will be run before close() completes.
This method completes when there are no more pending writes. Calling this method will send
all requests.
Exceptions
Type
Description
InterruptedException
ExecutionException
create(DocumentReference documentReference, Object pojo)
public ApiFuture<WriteResult> create ( DocumentReference documentReference , Object pojo )
Create a document with the provided data. This single operation will fail if a document exists
at its location.
Parameters
Name
Description
documentReference
DocumentReference A reference to the document to be created.
pojo
Object The POJO that will be used to populate the document contents.
Returns
Type
Description
ApiFuture < WriteResult >
An ApiFuture containing the result of the write. Contains a BulkWriterException
if the write fails.
create(DocumentReference documentReference, Map<String,Object> fields)
public ApiFuture<WriteResult> create ( DocumentReference documentReference , Map<String , Object > fields )
Create a document with the provided data. This single operation will fail if a document exists
at its location.
Parameters
Name
Description
documentReference
DocumentReference A reference to the document to be created.
fields
Map < String , Object > A map of the fields and values for the document.
Returns
Type
Description
ApiFuture < WriteResult >
An ApiFuture containing the result of the write. Contains a BulkWriterException
if the write fails.
delete(DocumentReference documentReference)
public ApiFuture<WriteResult> delete ( DocumentReference documentReference )
Delete a document from the database.
Parameter
Name
Description
documentReference
DocumentReference The DocumentReference to delete.
Returns
Type
Description
ApiFuture < WriteResult >
An ApiFuture containing a sentinel value (Timestamp(0)) for the delete operation.
Contains a BulkWriterException if the delete fails.
delete(DocumentReference documentReference, Precondition precondition)
public ApiFuture<WriteResult> delete ( DocumentReference documentReference , Precondition precondition )
Delete a document from the database.
Parameters
Name
Description
documentReference
DocumentReference The DocumentReference to delete.
precondition
Precondition Precondition to enforce for this delete.
Returns
Type
Description
ApiFuture < WriteResult >
An ApiFuture containing a sentinel value (Timestamp(0)) for the delete operation.
Contains a BulkWriterException if the delete fails.
flush()
public ApiFuture<Void> flush ()
Commits all writes that have been enqueued up to this point in parallel.
Returns an ApiFuture that completes when all currently queued operations have been
committed. The ApiFuture will never return an error since the results for each individual
operation are conveyed via their individual ApiFutures.
The ApiFuture completes immediately if there are no pending writes. Otherwise, the ApiFuture
waits for all previously issued writes, but it does not wait for writes that were added after
the method is called. If you want to wait for additional writes, call flush() again.
Returns
Type
Description
ApiFuture < Void >
An ApiFuture that completes when all enqueued writes up to this point have been
committed.
set(DocumentReference documentReference, Object pojo)
public ApiFuture<WriteResult> set ( DocumentReference documentReference , Object pojo )
Write to the document referred to by the provided DocumentReference. If the document does not
exist yet, it will be created.
Parameters
Name
Description
documentReference
DocumentReference A reference to the document to be set.
pojo
Object The POJO that will be used to populate the document contents.
Returns
Type
Description
ApiFuture < WriteResult >
An ApiFuture containing the result of the write. Contains a BulkWriterException
if the write fails.
set(DocumentReference documentReference, Object pojo, SetOptions options)
public ApiFuture<WriteResult> set ( DocumentReference documentReference , Object pojo , SetOptions options )
Write to the document referred to by the provided DocumentReference. If the document does not
exist yet, it will be created. If you pass a SetOptions , the provided data can be
merged into an existing document.
Parameters
Name
Description
documentReference
DocumentReference A reference to the document to be set.
pojo
Object The POJO that will be used to populate the document contents.
options
SetOptions An object to configure the set behavior.
Returns
Type
Description
ApiFuture < WriteResult >
An ApiFuture containing the result of the write. Contains a BulkWriterException
if the write fails.
set(DocumentReference documentReference, Map<String,Object> fields)
public ApiFuture<WriteResult> set ( DocumentReference documentReference , Map<String , Object > fields )
Write to the document referred to by the provided DocumentReference. If the document does not
exist yet, it will be created.
Parameters
Name
Description
documentReference
DocumentReference A reference to the document to be set.
fields
Map < String , Object > A map of the fields and values for the document.
Returns
Type
Description
ApiFuture < WriteResult >
An ApiFuture containing the result of the write. Contains a BulkWriterException
if the write fails.
set(DocumentReference documentReference, Map<String,Object> fields, SetOptions options)
public ApiFuture<WriteResult> set ( DocumentReference documentReference , Map<String , Object > fields , SetOptions options )
Write to the document referred to by the provided DocumentReference. If the document does not
exist yet, it will be created. If you pass a SetOptions , the provided data can be
merged into an existing document.
Parameters
Name
Description
documentReference
DocumentReference A reference to the document to be set.
fields
Map < String , Object > A map of the fields and values for the document.
options
SetOptions An object to configure the set behavior.
Returns
Type
Description
ApiFuture < WriteResult >
An ApiFuture containing the result of the write. Contains a BulkWriterException
if the write fails.
update(DocumentReference documentReference, FieldPath fieldPath, Object value, Object[] moreFieldsAndValues)
public ApiFuture<WriteResult> update ( DocumentReference documentReference , FieldPath fieldPath , Object value , Object [] moreFieldsAndValues )
Update fields of the document referred to by the provided DocumentReference . If the
document doesn't yet exist, the update will fail.
The update() method accepts either an object with field paths encoded as keys and field
values encoded as values, or a variable number of arguments that alternate between field paths
and field values. Nested fields can be updated by providing dot-separated field path strings or
by providing FieldPath objects.
Parameters
Name
Description
documentReference
DocumentReference A reference to the document to be updated.
fieldPath
FieldPath The first field to set.
value
Object The first value to set.
moreFieldsAndValues
Object [] String and Object pairs with more fields to be set.
Returns
Type
Description
ApiFuture < WriteResult >
An ApiFuture containing the result of the write. Contains a BulkWriterException
if the write fails.
update(DocumentReference documentReference, Precondition precondition, FieldPath fieldPath, Object value, Object[] moreFieldsAndValues)
public ApiFuture<WriteResult> update ( DocumentReference documentReference , Precondition precondition , FieldPath fieldPath , Object value , Object [] moreFieldsAndValues )
Update fields of the document referred to by the provided DocumentReference . If the
document doesn't yet exist, the update will fail.
The update() method accepts either an object with field paths encoded as keys and field
values encoded as values, or a variable number of arguments that alternate between field paths
and field values. Nested fields can be updated by providing dot-separated field path strings or
by providing FieldPath objects.
Parameters
Name
Description
documentReference
DocumentReference A reference to the document to be updated.
precondition
Precondition Precondition to enforce on this update.
fieldPath
FieldPath The first field to set.
value
Object The first value to set.
moreFieldsAndValues
Object [] String and Object pairs with more fields to be set.
Returns
Type
Description
ApiFuture < WriteResult >
An ApiFuture containing the result of the write. Contains a BulkWriterException
if the write fails.
update(DocumentReference documentReference, Precondition precondition, String field, Object value, Object[] moreFieldsAndValues)
public ApiFuture<WriteResult> update ( DocumentReference documentReference , Precondition precondition , String field , Object value , Object [] moreFieldsAndValues )
Update fields of the document referred to by the provided DocumentReference . If the
document doesn't yet exist, the update will fail.
The update() method accepts either an object with field paths encoded as keys and field
values encoded as values, or a variable number of arguments that alternate between field paths
and field values. Nested fields can be updated by providing dot-separated field path strings or
by providing FieldPath objects.
Parameters
Name
Description
documentReference
DocumentReference A reference to the document to be updated.
precondition
Precondition
field
String The first field to set.
value
Object The first value to set.
moreFieldsAndValues
Object [] String and Object pairs with more fields to be set.
Returns
Type
Description
ApiFuture < WriteResult >
An ApiFuture containing the result of the write. Contains a BulkWriterException
if the write fails.
update(DocumentReference documentReference, String field, Object value, Object[] moreFieldsAndValues)
public ApiFuture<WriteResult> update ( DocumentReference documentReference , String field , Object value , Object [] moreFieldsAndValues )
Update fields of the document referred to by the provided DocumentReference . If the
document doesn't yet exist, the update will fail.
The update() method accepts either an object with field paths encoded as keys and field
values encoded as values, or a variable number of arguments that alternate between field paths
and field values. Nested fields can be updated by providing dot-separated field path strings or
by providing FieldPath objects.
Parameters
Name
Description
documentReference
DocumentReference A reference to the document to be updated.
field
String The first field to set.
value
Object The first value to set.
moreFieldsAndValues
Object [] String and Object pairs with more fields to be set.
Returns
Type
Description
ApiFuture < WriteResult >
An ApiFuture containing the result of the write. Contains a BulkWriterException
if the write fails.
update(DocumentReference documentReference, Map<String,Object> fields)
public ApiFuture<WriteResult> update ( DocumentReference documentReference , Map<String , Object > fields )
Update fields of the document referred to by the provided DocumentReference . If the
document doesn't yet exist, the update will fail.
The update() method accepts either an object with field paths encoded as keys and field
values encoded as values, or a variable number of arguments that alternate between field paths
and field values. Nested fields can be updated by providing dot-separated field path strings or
by providing FieldPath objects.
Parameters
Name
Description
documentReference
DocumentReference A reference to the document to be updated.
fields
Map < String , Object > A map of the fields and values for the document.
Returns
Type
Description
ApiFuture < WriteResult >
An ApiFuture containing the result of the write. Contains a BulkWriterException
if the write fails.
update(DocumentReference documentReference, Map<String,Object> fields, Precondition precondition)
public ApiFuture<WriteResult> update ( DocumentReference documentReference , Map<String , Object > fields , Precondition precondition )
Update fields of the document referred to by the provided DocumentReference . If the
document doesn't yet exist, the update will fail.
The update() method accepts either an object with field paths encoded as keys and field
values encoded as values, or a variable number of arguments that alternate between field paths
and field values. Nested fields can be updated by providing dot-separated field path strings or
by providing FieldPath objects.
Parameters
Name
Description
documentReference
DocumentReference A reference to the document to be updated.
fields
Map < String , Object > A map of the fields and values for the document.
precondition
Precondition Precondition to enforce on this update.
Returns
Type
Description
ApiFuture < WriteResult >
An ApiFuture containing the result of the write. Contains a BulkWriterException
if the write fails.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-14 UTC."],[],[]]
