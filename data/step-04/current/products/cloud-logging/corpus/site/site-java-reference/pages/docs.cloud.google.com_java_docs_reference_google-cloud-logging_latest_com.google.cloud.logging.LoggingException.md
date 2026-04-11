---
title: "Exception LoggingException (3.29.0) \_|\_ Java client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LoggingException
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LoggingException
  title: "Exception LoggingException (3.29.0) \_|\_ Java client libraries \_|\_ Google\
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
Exception LoggingException (3.29.0)
Stay organized with collections
Save and categorize content based on your preferences.
3.29.0 (latest)
3.28.0
3.26.0
3.24.0
3.23.10
3.22.6
3.21.4
3.20.7
3.19.0
3.18.0
3.17.2
3.16.2
3.15.17
3.14.9
3.13.7
3.12.1
3.11.10
3.10.7
3.9.0
3.8.0
3.7.6
3.6.4
3.5.3
public final class LoggingException extends BaseGrpcServiceException
Logging service exception.
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
Constructors
LoggingException(ApiException apiException)
public LoggingException ( ApiException apiException )
Beta
This feature is covered by the Pre-GA Offerings Terms of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the launch stage descriptions.
Parameter
Name
Description
apiException
ApiException
LoggingException(IOException ex, boolean idempotent)
public LoggingException ( IOException ex , boolean idempotent )
Parameters
Name
Description
ex
IOException
idempotent
boolean
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
