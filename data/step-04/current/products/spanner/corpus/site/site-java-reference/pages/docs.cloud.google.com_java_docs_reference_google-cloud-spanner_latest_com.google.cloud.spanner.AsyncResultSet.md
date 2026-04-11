---
title: "Interface AsyncResultSet (6.111.1) \_|\_ Java client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.AsyncResultSet
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.AsyncResultSet
  title: "Interface AsyncResultSet (6.111.1) \_|\_ Java client libraries \_|\_ Google\
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
Interface AsyncResultSet (6.111.1)
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
public interface AsyncResultSet extends ResultSet
Interface for result sets returned by async query methods.
Implements
ResultSet
Methods
<T>toList(Function<StructReader,T> transformer)
public abstract List<T> < T>toList ( Function<StructReader , T > transformer )
Transforms the row cursor into an immutable list using the given transformer function.
transformer will be called once per row, thus the returned list will contain one entry per
row. This method will block until all the rows have been yielded by the cursor.
WARNING: This will result in consuming the entire list so this should be used judiciously
after considering the memory requirements of the returned list.
WARNING: The RowBase object passed to transformer function is not immutable and is
not guaranteed to remain valid after the transformer function returns. The same RowBase
object might be passed multiple times to the transformer with different underlying data each
time. So NEVER keep a reference to the RowBase outside of the transformer.
Specifically do not use com.google.common.base.Functions#identity() function.
Parameter
Name
Description
transformer
com.google.common.base.Function < StructReader , T > function which will be used to transform the row. It should not return null.
Returns
Type
Description
List < T >
Exceptions
Type
Description
SpannerException
<T>toListAsync(Function<StructReader,T> transformer, Executor executor)
public abstract ApiFuture<List<T> > < T>toListAsync ( Function<StructReader , T > transformer , Executor executor )
Transforms the row cursor into an immutable list using the given transformer function.
transformer will be called once per row, thus the returned list will contain one entry per
row. The returned future will throw a SpannerException if the row cursor encountered
any error or if the transformer threw an exception on any row.
The transformer will be run on the supplied executor. The implementation may batch multiple
transformer invocations together into a single Runnable when possible to increase
efficiency. At any point in time, there will be at most one invocation of the transformer in
progress.
WARNING: This will result in materializing the entire list so this should be used
judiciously after considering the memory requirements of the returned list.
WARNING: The RowBase object passed to transformer function is not immutable and is
not guaranteed to remain valid after the transformer function returns. The same RowBase
object might be passed multiple times to the transformer with different underlying data each
time. So NEVER keep a reference to the RowBase outside of the transformer.
Specifically do not use com.google.common.base.Functions#identity() function.
Parameters
Name
Description
transformer
com.google.common.base.Function < StructReader , T > function which will be used to transform the row. It should not return null.
executor
Executor executor on which the transformer will be run. This should ideally not be an
inline executor such as MoreExecutors.directExecutor() ; using such an executor may
degrade the performance of the Spanner library.
Returns
Type
Description
ApiFuture < List < T >>
cancel()
public abstract void cancel ()
Attempt to cancel this operation and free all resources. Non-blocking. This is a no-op for
child row cursors and does not cancel the parent cursor.
resume()
public abstract void resume ()
Resume callbacks from the cursor. If there is more data available, a callback will be
dispatched immediately. This can be called from any thread.
setCallback(Executor exec, AsyncResultSet.ReadyCallback cb)
public abstract ApiFuture<Void> setCallback ( Executor exec , AsyncResultSet . ReadyCallback cb )
Register a callback with the ResultSet to be made aware when more data is available, changing
the usage pattern from sync to async. Details:
The callback will be called at least once.
The callback is run each time more results are available, or when we discover that there
will be no more results. (unless paused, see below). Spurious callbacks are possible, see
below.
Spanner guarantees that one callback is ever outstanding at a time. Also, future
callbacks guarantee the "happens before" property with previous callbacks.
A callback normally consumes all available data in the ResultSet, and then returns CallbackResponse#CONTINUE .
If a callback returns CallbackResponse#CONTINUE with data still in the ResultSet,
the callback is invoked again immediately!
Once a callback has returned CallbackResponse#PAUSE on the cursor no more
callbacks will be run until a corresponding #resume() .
Callback will stop being called once any of the following occurs:
Callback returns CallbackResponse#DONE .
ForwardingAsyncResultSet#tryNext() returns CursorState#DONE .
ForwardingAsyncResultSet#tryNext() throws an exception.
Callback may possibly be invoked after a call to ForwardingAsyncResultSet#cancel() call, but the subsequent call to #tryNext()
will yield a SpannerException.
Spurious callbacks are possible where cursors are not actually ready. Typically callback
should return CallbackResponse#CONTINUE any time it sees CursorState#NOT_READY .
Flow Control
If no flow control is needed (say because result sizes are known in advance to be finite in
size) then async processing is simple. The following is a code example that transfers work from
the cursor to an upstream sink:
@Override
public CallbackResponse cursorReady ( ResultSet cursor ) {
try {
while ( true ) {
switch ( cursor . tryNext ()) {
case OK : upstream . emit ( cursor . getRow ()); break ;
case DONE : upstream . done (); return CallbackResponse . DONE ;
case NOT_READY : return CallbackResponse . CONTINUE ;
}
}
} catch ( SpannerException e ) {
upstream . doneWithError ( e );
return CallbackResponse . DONE ;
}
}
Flow control may be needed if for example the upstream system may not always be ready to handle
more data. In this case the app developer has two main options:
Semi-async: make upstream.emit() a blocking call. This will block the callback
thread until progress is possible. When coding in this way the threads in the Executor
provided to setCallback must be blockable without causing harm to progress in your
system.
Full-async: call cursor.pause() and return from the callback with data still in
the Cursor. Once in this state cursor waits until resume() is called before calling
callback again.
Parameters
Name
Description
exec
Executor executor on which to run all callbacks. Typically use a threadpool. If the executor
is one that runs the work on the submitting thread, you must be very careful not to throw
RuntimeException up the stack, lest you do damage to calling components. For example, it
may cause an event dispatcher thread to crash.
cb
AsyncResultSet.ReadyCallback ready callback
Returns
Type
Description
ApiFuture < Void >
An ApiFuture that returns null when the consumption of the AsyncResultSet has finished successfully. No more calls to the ReadyCallback will
follow and all resources used by the AsyncResultSet have been cleaned up. The
ApiFuture throws an ExecutionException if the consumption of the AsyncResultSet finished with an error.
tryNext()
public abstract AsyncResultSet . CursorState tryNext ()
Non-blocking call that attempts to step the cursor to the next position in the stream. The
cursor may be inspected only if the cursor returns CursorState.OK .
A caller will typically call tryNext in a loop inside the ReadyCallback, consuming all
results available. For more information see #setCallback(Executor, ReadyCallback) .
Currently this method may only be called if a ReadyCallback has been registered. This is for
safety purposes only, and may be relaxed in future.
Returns
Type
Description
AsyncResultSet.CursorState
current cursor readiness state
Exceptions
Type
Description
SpannerException
When an unrecoverable problem downstream occurs. Once this occurs you
will get no further callbacks. You should return CallbackResponse.DONE back from callback.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-14 UTC."],[],[]]
