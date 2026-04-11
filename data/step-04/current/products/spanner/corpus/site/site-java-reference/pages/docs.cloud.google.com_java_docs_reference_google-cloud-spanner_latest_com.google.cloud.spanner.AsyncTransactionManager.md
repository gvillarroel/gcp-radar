---
title: "Interface AsyncTransactionManager (6.111.1) \_|\_ Java client libraries \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.AsyncTransactionManager
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.AsyncTransactionManager
  title: "Interface AsyncTransactionManager (6.111.1) \_|\_ Java client libraries\
    \ \_|\_ Google Cloud Documentation"
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
Interface AsyncTransactionManager (6.111.1)
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
public interface AsyncTransactionManager extends AutoCloseable
An interface for managing the life cycle of a read write transaction including all its retries.
See TransactionContext for a description of transaction semantics.
At any point in time there can be at most one active transaction in this manager. When that
transaction is committed, if it fails with an ABORTED error, calling #resetForRetryAsync() would create a new TransactionContextFuture . The newly created
transaction would use the same session thus increasing its lock priority. If the transaction is
committed successfully, or is rolled back or commit fails with any error other than
ABORTED , the manager is considered complete and no further transactions are allowed to be
created in it.
Every AsyncTransactionManager should either be committed or rolled back. Failure to do
so can cause resources to be leaked and deadlocks. Easiest way to guarantee this is by calling
#close() in a finally block.
See Also: DatabaseClient#transactionManagerAsync(TransactionOption...)
Implements
AutoCloseable
Methods
beginAsync()
public abstract AsyncTransactionManager . TransactionContextFuture beginAsync ()
Creates a new read write transaction. This must be called before doing any other operation and
can only be called once. To create a new transaction for subsequent retries, see #resetForRetryAsync() .
Returns
Type
Description
AsyncTransactionManager.TransactionContextFuture
beginAsync(AbortedException exception)
public abstract AsyncTransactionManager . TransactionContextFuture beginAsync ( AbortedException exception )
Initializes a new read-write transaction that is a retry of a previously aborted transaction.
This method must be called before performing any operations, and it can only be invoked once
per transaction lifecycle.
This method should only be used when multiplexed sessions are enabled to create a retry for
a previously aborted transaction. This method can be used instead of #resetForRetryAsync() to create a retry. Using this method or #resetForRetryAsync()
will have the same effect. You must pass in the AbortedException from the previous
attempt to preserve the transaction's priority.
For regular sessions, this behaves the same as #beginAsync() .
Parameter
Name
Description
exception
AbortedException
Returns
Type
Description
AsyncTransactionManager.TransactionContextFuture
close()
public abstract void close ()
Closes the manager. If there is an active transaction, it will be rolled back. Underlying
session will be released back to the session pool.
closeAsync()
public abstract ApiFuture<Void> closeAsync ()
Closes the transaction manager. If there is an active transaction, it will be rolled back. The
underlying session will be released back to the session pool. The returned ApiFuture is
done when the transaction (if any) has been rolled back.
Returns
Type
Description
ApiFuture < Void >
getCommitResponse()
public abstract ApiFuture<CommitResponse> getCommitResponse ()
Returns the CommitResponse of this transaction. This method may only be called after
committing the transaction.
Returns
Type
Description
ApiFuture < CommitResponse >
getState()
public abstract TransactionManager . TransactionState getState ()
Returns the state of the transaction.
Returns
Type
Description
TransactionManager.TransactionState
resetForRetryAsync()
public abstract AsyncTransactionManager . TransactionContextFuture resetForRetryAsync ()
Creates a new transaction for retry. This should only be called if the previous transaction
failed with ABORTED . In all other cases, this will throw an IllegalStateException . Users should backoff before calling this method. Backoff delay is
specified by SpannerException#getRetryDelayInMillis() on the SpannerException
throw by the previous commit call.
Returns
Type
Description
AsyncTransactionManager.TransactionContextFuture
rollbackAsync()
public abstract ApiFuture<Void> rollbackAsync ()
Rolls back the currently active transaction. In most cases there should be no need to call this
explicitly since #close() would automatically roll back any active transaction.
Returns
Type
Description
ApiFuture < Void >
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-14 UTC."],[],[]]
