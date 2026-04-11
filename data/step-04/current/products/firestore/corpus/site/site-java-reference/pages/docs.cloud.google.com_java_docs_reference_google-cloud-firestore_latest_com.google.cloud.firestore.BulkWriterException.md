---
title: "Exception BulkWriterException (3.38.0) \_|\_ Java client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.BulkWriterException
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.BulkWriterException
  title: "Exception BulkWriterException (3.38.0) \_|\_ Java client libraries \_|\_\
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
Exception BulkWriterException (3.38.0)
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
public final class BulkWriterException extends FirestoreException
The error thrown when a BulkWriter operation fails.
Inherited Members
com.google.cloud.BaseServiceException.equals(java.lang.Object)
com.google.cloud.BaseServiceException.getCode()
com.google.cloud.BaseServiceException.getDebugInfo()
com.google.cloud.BaseServiceException.getLocation()
com.google.cloud.BaseServiceException.getReason()
com.google.cloud.BaseServiceException.hashCode()
com.google.cloud.BaseServiceException.isRetryable()
com.google.cloud.BaseServiceException.isRetryable(boolean,java.io.IOException)
com.google.cloud.BaseServiceException.isRetryable(java.lang.Integer,java.lang.String,boolean,java.util.Set<com.google.cloud.BaseServiceException.Error>)
com.google.cloud.BaseServiceException.translate(com.google.cloud.RetryHelper.RetryHelperException)
com.google.cloud.BaseServiceException.translate(java.util.concurrent.ExecutionException)
FirestoreException.forApiException(ApiException)
FirestoreException.forApiException(ApiException,String)
FirestoreException.forIOException(IOException,boolean)
FirestoreException.forInvalidArgument(String,Object)
FirestoreException.forServerRejection(Status,String,Object)
FirestoreException.forServerRejection(Status,Throwable,String,Object)
FirestoreException.getStatus()
Object.clone()
Object.finalize()
Object.getClass()
Object.notify()
Object.notifyAll()
Object.wait()
Object.wait(long)
Object.wait(long,int)
Throwable.addSuppressed(Throwable)
Throwable.fillInStackTrace()
Throwable.getCause()
Throwable.getLocalizedMessage()
Throwable.getMessage()
Throwable.getStackTrace()
Throwable.getSuppressed()
Throwable.initCause(Throwable)
Throwable.printStackTrace()
Throwable.printStackTrace(PrintStream)
Throwable.printStackTrace(PrintWriter)
Throwable.setStackTrace(StackTraceElement[])
Throwable.toString()
Constructors
BulkWriterException(Status status, String message, DocumentReference documentReference, BulkWriter.OperationType operationType, int failedAttempts)
public BulkWriterException ( Status status , String message , DocumentReference documentReference , BulkWriter . OperationType operationType , int failedAttempts )
Parameters
Name
Description
status
io.grpc.Status
message
String
documentReference
DocumentReference
operationType
com.google.cloud.firestore.BulkWriter.OperationType
failedAttempts
int
Methods
getDocumentReference()
public DocumentReference getDocumentReference ()
Returns
Type
Description
DocumentReference
The DocumentReference the operation was performed on.
getFailedAttempts()
public int getFailedAttempts ()
Returns
Type
Description
int
How many times this operation has been attempted unsuccessfully.
getMessage()
public String getMessage ()
Returns
Type
Description
String
The error message of the error.
Overrides
Throwable.getMessage()
getOperationType()
public BulkWriter . OperationType getOperationType ()
Returns
Type
Description
com.google.cloud.firestore.BulkWriter.OperationType
The type of operation performed.
getStatus()
public Status getStatus ()
Returns
Type
Description
io.grpc.Status
The status code of the error.
Overrides
FirestoreException.getStatus()
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-14 UTC."],[],[]]
