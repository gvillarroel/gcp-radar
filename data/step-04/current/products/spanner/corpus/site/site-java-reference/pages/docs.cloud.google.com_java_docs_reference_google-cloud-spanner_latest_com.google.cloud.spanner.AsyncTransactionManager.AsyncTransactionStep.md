---
title: "Interface AsyncTransactionManager.AsyncTransactionStep<I,O> (6.111.1) \_|\_\
  \ Java client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.AsyncTransactionManager.AsyncTransactionStep
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.AsyncTransactionManager.AsyncTransactionStep
  title: "Interface AsyncTransactionManager.AsyncTransactionStep<I,O> (6.111.1) \_\
    |\_ Java client libraries \_|\_ Google Cloud Documentation"
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
Interface AsyncTransactionManager.AsyncTransactionStep<I,O> (6.111.1)
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
public static interface AsyncTransactionManager . AsyncTransactionStep<I , O > extends ApiFuture<O>
AsyncTransactionStep is returned by TransactionContextFuture#then(AsyncTransactionFunction, Executor) and AsyncTransactionStep#then(AsyncTransactionFunction, Executor) and allows transaction steps
that should be executed serially to be chained together. Each step can contain one or more
statements that may execute in parallel.
Example usage:
final String column = "FirstName" ;
final long singerId = 1L ;
AsyncTransactionManager manager = client . transactionManagerAsync ();
TransactionContextFuture txnFuture = manager . beginAsync ();
txnFuture
. then (( transaction , ignored ) - >
transaction . readRowAsync ( "Singers" , Key . of ( singerId ), Collections . singleton ( column )),
executor )
. then (( transaction , row ) - >
transaction . bufferAsync (
Mutation . newUpdateBuilder ( "Singers" )
. set ( column ). to ( row . getString ( column ). toUpperCase ())
. build ()),
executor )
. commitAsync ();
Implements
com.google.api.core.ApiFuture<O>
Type Parameters
Name
Description
I
O
Methods
<RES>then(AsyncTransactionManager.AsyncTransactionFunction<O,RES> next, Executor executor)
public abstract AsyncTransactionManager . AsyncTransactionStep<O , RES > < RES>then ( AsyncTransactionManager . AsyncTransactionFunction<O , RES > next , Executor executor )
Adds a step to the transaction chain that should be executed using the specified executor.
This step is guaranteed to be executed only after the previous step executed successfully.
MoreExecutors#directExecutor() can be be used for lightweight functions, but should
be avoided for heavy or blocking operations. See also ListenableFuture#addListener(Runnable, Executor) for further information.
Parameters
Name
Description
next
AsyncTransactionFunction < O , RES >
executor
Executor
Returns
Type
Description
AsyncTransactionStep < O , RES >
commitAsync()
public abstract AsyncTransactionManager . CommitTimestampFuture commitAsync ()
Commits the transaction and returns a CommitTimestampFuture that will return the
commit timestamp of the transaction, or throw the first uncaught exception in the transaction
chain as an ExecutionException .
Returns
Type
Description
AsyncTransactionManager.CommitTimestampFuture
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-14 UTC."],[],[]]
