---
title: "Exception DatastoreException (2.37.0) \_|\_ Java client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/com.google.cloud.datastore.DatastoreException
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/com.google.cloud.datastore.DatastoreException
  title: "Exception DatastoreException (2.37.0) \_|\_ Java client libraries \_|\_\
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
Exception DatastoreException (2.37.0)
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
public final class DatastoreException extends BaseHttpServiceException
Datastore service exception.
See Also: Google Cloud Datastore error codes
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
Static Methods
extractStatusCode(Throwable throwable)
public static String extractStatusCode ( Throwable throwable )
Internal Only : This feature is not stable for application use.
Extracts the status code name from the given throwable. Walks the exception cause chain looking
for a DatastoreException that carries a reason string representing the status code
(e.g. "ABORTED", "UNAVAILABLE"). The reason is set from com.google.api.gax.rpc.StatusCode.Code which is transport-neutral, supporting both gRPC and
HttpJson. Falls back to "UNKNOWN" if the status cannot be determined.
Note: Some DatastoreException instances are constructed without a reason (e.g. via
DatastoreException#DatastoreException(int, String, Throwable) ). If all DatastoreException instances in the cause chain have a null or empty reason, this method
returns "UNKNOWN" even if the underlying error carries a meaningful status.
Parameter
Name
Description
throwable
Throwable the throwable to extract the status code from
Returns
Type
Description
String
the status code name, or "UNKNOWN" if not determinable
Constructors
DatastoreException(int code, String message, String reason)
public DatastoreException ( int code , String message , String reason )
Parameters
Name
Description
code
int
message
String
reason
String
DatastoreException(int code, String message, String reason, boolean idempotent, Throwable cause)
public DatastoreException ( int code , String message , String reason , boolean idempotent , Throwable cause )
Parameters
Name
Description
code
int
message
String
reason
String
idempotent
boolean
cause
Throwable
DatastoreException(int code, String message, String reason, Throwable cause)
public DatastoreException ( int code , String message , String reason , Throwable cause )
Parameters
Name
Description
code
int
message
String
reason
String
cause
Throwable
DatastoreException(int code, String message, Throwable cause)
public DatastoreException ( int code , String message , Throwable cause )
Parameters
Name
Description
code
int
message
String
cause
Throwable
DatastoreException(IOException exception)
public DatastoreException ( IOException exception )
Parameter
Name
Description
exception
IOException
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
