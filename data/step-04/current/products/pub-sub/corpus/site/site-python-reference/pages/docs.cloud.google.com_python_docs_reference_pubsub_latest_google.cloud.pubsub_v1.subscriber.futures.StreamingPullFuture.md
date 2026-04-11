---
title: "Class StreamingPullFuture (2.35.0) \_|\_ Python client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/pubsub/latest/google.cloud.pubsub_v1.subscriber.futures.StreamingPullFuture
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/pubsub/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/pubsub/latest/google.cloud.pubsub_v1.subscriber.futures.StreamingPullFuture
  title: "Class StreamingPullFuture (2.35.0) \_|\_ Python client libraries \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Python
Client libraries
Send feedback
Class StreamingPullFuture (2.35.0)
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
2.35.0 (latest)
2.34.0
2.33.0
2.32.0
2.31.0
2.30.0
2.29.1
2.28.0
2.27.3
2.26.1
2.25.2
2.23.1
2.22.0
2.21.5
2.20.3
2.19.8
2.18.4
2.17.1
2.16.1
2.15.2
2.14.1
2.13.12
2.12.1
2.11.1
2.10.0
2.9.0
2.8.0
2.7.1
2.6.1
2.5.0
2.4.2
2.3.0
2.2.0
2.1.0
2.0.0
1.7.2
1.6.1
1.5.0
1.4.3
1.3.1
1.2.0
1.1.0
1.0.2
0.45.0
0.44.0
0.43.0
StreamingPullFuture ( manager : StreamingPullManager )
Represents a process that asynchronously performs streaming pull and
schedules messages to be processed.
This future is resolved when the process is stopped (via cancel ) or
if it encounters an unrecoverable error. Calling .result() will cause
the calling thread to block indefinitely.
Methods
StreamingPullFuture
StreamingPullFuture ( manager : StreamingPullManager )
Initializes the future. Should not be called by clients.
add_done_callback
add_done_callback ( fn )
Attaches a callable that will be called when the future finishes.
cancel
cancel () - > bool
Stops pulling messages and shutdowns the background thread consuming
messages.
The method always returns True , as the shutdown is always initiated.
However, if the background stream is already being shut down or the shutdown
has completed, this method is a no-op.
.. versionchanged:: 2.4.1
The method does not block anymore, it just triggers the shutdown and returns
immediately. To block until the background stream is terminated, call
result() after cancelling the future.
.. versionchanged:: 2.10.0
The method always returns True instead of None .
cancelled
cancelled () - > bool
done
done ()
Return True if the future was cancelled or finished executing.
exception
exception ( timeout = None )
Return the exception raised by the call that the future represents.
Exceptions
Type
Description
CancelledError
If the future was cancelled.
TimeoutError
If the future didn't finish executing before the given timeout.
result
result ( timeout = None )
Return the result of the call that the future represents.
Exceptions
Type
Description
CancelledError
If the future was cancelled.
TimeoutError
If the future didn't finish executing before the given timeout.
Exception
If the call raised then that exception will be raised.
running
running () - > bool
Return True if the associated Pub/Sub action has not yet completed.
set_exception
set_exception ( exception : typing . Optional [ BaseException ])
Set the result of the future as being the given exception.
Do not use this method, it should only be used internally by the library and its
unit tests.
set_result
set_result ( result : typing . Any )
Set the return value of work associated with the future.
Do not use this method, it should only be used internally by the library and its
unit tests.
set_running_or_notify_cancel
set_running_or_notify_cancel () - > typing . NoReturn
Mark the future as running or process any cancel notifications.
Should only be used by Executor implementations and unit tests.
If the future has been cancelled (cancel() was called and returned
True) then any threads waiting on the future completing (though calls
to as_completed() or wait()) are notified and False is returned.
If the future was not cancelled then it is put in the running state
(future calls to running() will return True) and True is returned.
This method should be called by Executor implementations before
executing the work associated with this future. If this method returns
False then the work should not be executed.
Exceptions
Type
Description
RuntimeError
if this method was already called or if set_result() or set_exception() was called.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
