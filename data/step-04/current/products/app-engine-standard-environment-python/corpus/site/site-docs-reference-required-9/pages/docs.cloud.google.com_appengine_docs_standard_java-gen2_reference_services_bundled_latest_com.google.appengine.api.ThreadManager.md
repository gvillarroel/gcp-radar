---
title: "Class ThreadManager (5.0.0) \_|\_ App Engine standard environment \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.ThreadManager
knowledge_key: corpus
source_id: site-docs-reference-required-9
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/legacy/standard/python/apis
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.ThreadManager
  title: "Class ThreadManager (5.0.0) \_|\_ App Engine standard environment \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
App Engine
Standard environment
Reference
Send feedback
Class ThreadManager (5.0.0)
Stay organized with collections
Save and categorize content based on your preferences.
public final class ThreadManager
ThreadManager exposes a ThreadFactory that allows
App Engine applications to spawn new threads.
Refer to
this discussion of threads for drawbacks of thread usage and possible
alternatives.
Inheritance
java.lang.Object >
ThreadManager
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
Static Methods
backgroundThreadFactory()
public static ThreadFactory backgroundThreadFactory ()
Returns a ThreadFactory that will create threads that are
independent of the current request.
This ThreadFactory can currently only be used by backends.
Note that calling ThreadFactory#newThread on the
returned instance may throw any of the unchecked exceptions
mentioned by #createBackgroundThread .
Returns
Type
Description
ThreadFactory
createBackgroundThread(Runnable runnable)
public static Thread createBackgroundThread ( Runnable runnable )
Create a new Thread that executes runnable
independent of the current request. Calling this method is
equivalent to invoking ThreadFactory#newThread on the
ThreadFactory returned from #backgroundThreadFactory .
This method can currently only be used by backends.
Parameter
Name
Description
runnable
Runnable
Returns
Type
Description
Thread
createThreadForCurrentRequest(Runnable runnable)
public static Thread createThreadForCurrentRequest ( Runnable runnable )
Create a new Thread that executes runnable for
the duration of the current request. Calling this method is
equivalent to invoking ThreadFactory#newThread on the
ThreadFactory returned from #currentRequestThreadFactory .
This thread will be interrupted at the end of the current request
and must complete within the request deadline. If it fails to,
the instance containing it may be terminated.
Parameter
Name
Description
runnable
Runnable
Returns
Type
Description
Thread
currentRequestThreadFactory()
public static ThreadFactory currentRequestThreadFactory ()
Returns a ThreadFactory which will create threads scoped to the current request. These
threads will be interrupted at the end of the current request and must complete within the
request deadline. If they fail to, the instance containing them may be terminated.
The principal reason to use this method is so that the created threads can make App Engine
API calls ( com.google.appengine.api.* ). In general, threads not associated with a
request cannot make these API calls.
The returned factory is typically used with a call like java.util.concurrent.Executors#newCachedThreadPool(ThreadFactory) . Do not use the ExecutorService returned by this call after the request
that created it has completed.
Note that calling ThreadFactory#newThread on the returned instance may throw any of
the unchecked exceptions mentioned by #createBackgroundThread .
Returns
Type
Description
ThreadFactory
currentRequestThreadFactoryOptional()
public static Optional<ThreadFactory> currentRequestThreadFactoryOptional ()
Returns an Optional ThreadFactory which will create threads scoped to the current
request. These threads will be interrupted at the end of the current request and must complete
within the request deadline. If they fail to, the instance containing them may be terminated.
If this method is not called from an App Engine request thread, returns an empty Optional
instance.
The principal reason to use this method is so that the created threads can make App Engine
API calls ( com.google.appengine.api.* ). In general, threads not associated with a
request cannot make these API calls.
The returned factory is typically used with a call like java.util.concurrent.Executors#newCachedThreadPool(ThreadFactory) . Do not use the ExecutorService returned by this call after the request
that created it has completed.
Note that calling ThreadFactory#newThread on the returned instance may throw any of
the unchecked exceptions mentioned by #createBackgroundThread .
Returns
Type
Description
Optional < ThreadFactory >
Constructors
ThreadManager()
public ThreadManager ()
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-28 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-28 UTC."],[],[]]
