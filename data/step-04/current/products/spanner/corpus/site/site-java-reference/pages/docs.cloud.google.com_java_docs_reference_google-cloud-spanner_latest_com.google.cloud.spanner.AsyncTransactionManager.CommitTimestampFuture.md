---
title: "Interface AsyncTransactionManager.CommitTimestampFuture (6.111.1) \_|\_ Java\
  \ client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.AsyncTransactionManager.CommitTimestampFuture
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.AsyncTransactionManager.CommitTimestampFuture
  title: "Interface AsyncTransactionManager.CommitTimestampFuture (6.111.1) \_|\_\
    \ Java client libraries \_|\_ Google Cloud Documentation"
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
Interface AsyncTransactionManager.CommitTimestampFuture (6.111.1)
Stay organized with collections
Save and categorize content based on your preferences.
6.111.1 (latest)
6.111.0
6.108.0
6.107.0
6.103.0
6.102.1
6.101.1
6.100.0
6.99.0
6.98.1
6.97.1
6.96.1
6.95.1
6.94.0
6.93.0
6.89.0
6.88.0
6.87.0
6.86.0
6.85.0
6.83.0
6.82.0
6.80.1
6.79.0
6.77.0
6.74.1
6.72.0
6.71.0
6.69.0
6.68.0
6.66.0
6.65.1
6.62.0
6.60.0
6.58.0
6.57.0
6.56.0
6.55.0
6.54.0
6.53.0
6.52.1
6.51.0
6.50.1
6.49.0
6.25.1
6.24.0
6.23.4
6.22.0
6.21.2
6.20.0
6.19.1
6.18.0
6.17.4
6.14.1
public static interface AsyncTransactionManager . CommitTimestampFuture extends ApiFuture<Timestamp>
ApiFuture that returns the commit Timestamp of a Cloud Spanner transaction that
is executed using an AsyncTransactionManager . This future is returned by the call to
AsyncTransactionStep#commitAsync() of the last step in the transaction.
Implements
com.google.api.core.ApiFuture<com.google.cloud.Timestamp>
Methods
get()
public abstract Timestamp get ()
Returns the commit timestamp of the transaction. Getting this value should always be done in
order to ensure that the transaction succeeded. If any of the steps in the transaction fails
with an uncaught exception, this method will automatically stop the transaction at that point
and the exception will be returned as the cause of the ExecutionException that is
thrown by this method.
Returns
Type
Description
com.google.cloud.Timestamp
Exceptions
Type
Description
AbortedException
if the transaction was aborted by Cloud Spanner and needs to be
retried.
InterruptedException
if the transaction was aborted by Cloud Spanner and needs to be
retried.
ExecutionException
if the transaction was aborted by Cloud Spanner and needs to be
retried.
get(long timeout, TimeUnit unit)
public abstract Timestamp get ( long timeout , TimeUnit unit )
Same as #get() , but will throw a TimeoutException if the transaction does not
finish within the timeout.
Parameters
Name
Description
timeout
long
unit
TimeUnit
Returns
Type
Description
com.google.cloud.Timestamp
Exceptions
Type
Description
AbortedException
InterruptedException
ExecutionException
TimeoutException
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-14 UTC."],[],[]]
