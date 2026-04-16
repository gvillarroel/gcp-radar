---
title: "Memory management best practices \_|\_ Navigation SDK for Android \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/maps/documentation/navigation/android-sdk/memory-best-practices
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/android-sdk/release-notes
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/android-sdk/memory-best-practices
  title: "Memory management best practices \_|\_ Navigation SDK for Android \_|\_\
    \ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Google Maps Platform
Documentation
Android
Navigation SDK for Android
Resources
Send feedback
Memory management best practices
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This guide provides best practices for preventing, detecting, and resolving memory leaks in Android apps, particularly when using Google SDKs.
Developers should focus on releasing unused resources, unregistering listeners, and cancelling tasks to proactively avoid memory leaks.
Android Studio Profiler, heap dumps, and adb tools can help pinpoint memory leak sources by examining object retention and memory usage patterns.
If memory leaks persist and are suspected to originate from Google SDKs, detailed debugging information should be reported to Google Support.
While stack traces are helpful, providing comprehensive debugging data like heap dumps and allocation tracking output is crucial for effective leak analysis and resolution.
This doc assumes you have followed best-practice guidance for Android apps
under memory management, such as
Manage your app's memory .
Introduction
A memory leak is a type of resource leak that occurs when a computer
program does not release allocated memory that is no longer needed. A leak
can lead to the application requesting more memory from the OS than it has
available, and thus crashing the application. A number of improper practices
can cause memory leaks in Android apps, such as not properly disposing of
resources or not unregistering listeners when no longer needed.
This document provides you with some best practices to help prevent, detect,
and resolve memory leaks in your code. If you have tried the methods in this
document and suspect a memory leak in our SDKs, see
How to report issues with Google SDKs .
Before you contact support
Before you report a memory leak to the Google support team, follow the
best practices along with the debugging steps provided in this document to
ensure the error is not in your code. These steps may resolve your issue, and if
they don't, they generate the information the Google support team needs to
help you.
Prevent memory leaks
Follow these best practices to help avoid some of the most common causes for
memory leaks in code that uses Google SDKs.
Best practices for Android apps
Check that you have done all of the following in your Android application:
Release unused resources .
Unregister listeners when no longer needed .
Cancel tasks when not needed .
Forward lifecycle methods to release resources .
Use the latest versions of the SDKs .
Avoid blocking main thread during initialization to prevent
ANRs .
For specific details for each of these practices, see the following sections.
Release unused resources
When your Android app uses a resource, be sure to release the resource when
it is no longer needed. If you don't, the resource continues to take up memory
even after your application finishes with them. For more information, review
The activity lifecycle
in the Android documentation.
Release stale GoogleMap references in GeoSDKs
A common mistake is that a GoogleMap can cause a memory leak if cached using
NavigationView or MapView. A GoogleMap has a 1 to 1 relationship with the
NavigationView or MapView from which it is retrieved. You
must either ensure that a GoogleMap is not cached, or that the reference is
released when NavigationView#onDestroy or MapView#onDestroy is called. If
using the NavigationSupportFragment, MapSupportFragment, or your own fragment
wrapping these views, then the reference must be released in
Fragment#onDestroyView.
class NavFragment : SupportNavigationFragment () {
var googleMap : GoogleMap?
override fun onCreateView (
inflater : LayoutInflater ,
parent : ViewGroup?,
savedInstanceState : Bundle?,
): View {
super . onCreateView ( inflater , parent , savedInstanceState )
getMapAsync { map - > googleMap = map }
}
override fun onDestroyView () {
googleMap = null
}
}
Unregister listeners when no longer needed
When your Android app registers a listener for an event, such as a button
click or a change in the state of a view, be sure to unregister the listener
when the application no longer needs to monitor the event. If you don't,
the listeners continue to take up memory even after your application finishes
with them.
For example, suppose your application uses the Navigation SDK and it calls
the following listener to listen for arrival events:
addArrivalListener
method to listen for arrival events, it should also call
removeArrivalListener
when it no longer needs to monitor the arrival events.
var arrivalListener : Navigator . ArrivalListener ? = null
fun registerNavigationListeners () {
arrivalListener =
Navigator . ArrivalListener {
...
}
navigator . addArrivalListener ( arrivalListener )
}
override fun onDestroy () {
navView . onDestroy ()
if ( arrivalListener != null ) {
navigator . removeArrivalListener ( arrivalListener )
}
...
super . onDestroy ()
}
Cancel tasks when not needed
When an Android app starts an asynchronous task, such as a download or a
network request, make sure you cancel the task when it finishes. If the task
is not canceled, it continues to run in the background even after the app
has finished with it.
For more details on the best practices, see
Manage your app's memory
in the Android documentation.
Forward lifecycle methods to release resources
If your app uses the Navigation or Maps SDK, make sure to release the
resources by forwarding lifecycle methods (shown in bold) to navView . You can
do this using NavigationView in the Navigation SDK or MapView in the Maps or
Navigation SDK. You may also use SupportNavigationFragment or
SupportMapFragment instead of directly using NavigationView and MapView ,
respectively. The support fragments handle the forwarding of the lifecycle
methods.
Note: NavViewActivity in the following code refers to a customer-defined
activity you may create.
class NavViewActivity : AppCompatActivity () {
override fun onCreate ( savedInstanceState : Bundle?) {
super . onCreate ( savedInstanceState )
...
navView = ...
navView . onCreate ( savedInstanceState )
...
}
override fun onSaveInstanceState ( savedInstanceState : Bundle ) {
super . onSaveInstanceState ( savedInstanceState )
navView . onSaveInstanceState ( savedInstanceState )
}
override fun onTrimMemory ( level : Int ) {
super . onTrimMemory ( level )
navView . onTrimMemory ( level )
}
/* Same with
override fun onStart()
override fun onResume()
override fun onPause()
override fun onConfigurationChanged(...)
override fun onStop()
override fun onDestroy()
*/
}
Use the latest versions of the SDKs
Google SDKs are constantly being updated with new features, bug fixes, and
performance improvements. Keep the SDKs in your app up-to-date to receive these
fixes.
Avoid blocking main thread during initialization to prevent ANRs
When an app blocks the main thread for too long, it can cause an
"Application Not Responding" (ANR) error. To prevent ANRs, keep lifecycle
methods like onCreate() as lightweight as possible by deferring long-running
tasks or running them off the main thread.
To avoid ANRs related to SDK initialization:
Only create one map instance at a time.
Minimize work on the UI thread as much as possible while instantiating the
map.
Debug memory leaks
If you still see memory leaks after implementing all the applicable
suggestions earlier in this document, follow this process to debug.
Before you get started , you should be familiar with how Android manages
memory. For information, read the Android
Overview of memory management .
To debug memory leaks, follow this process:
Recreate the issue . This step is essential to debugging it.
Check if the memory usage is expected . Check that the
increased usage that appears to be a leak is not actually the memory
required to run your application.
Debug at a high-level . There are several utilities you can
use to debug. Three different standard tool sets help debug memory issues
in Android: Android Studio, Perfetto, and the Android Debug Bridge (adb)
command line utilities.
Check your app's memory use . Get a heap dump and
allocation tracking and then analyze it.
Fix memory leaks .
The following sections cover these steps in detail.
Step 1: Recreate the issue
If you have not been able to recreate the problem, first consider the scenarios
that could lead to the memory leak. Jumping straight into looking at a
heap dump might work, if you know the issue has been recreated. However,
if you just get a heap dump on app startup or another random point in time,
then you might not have activated the conditions to trigger a leak. Consider
working through various scenarios when trying to recreate the issue:
What set of features are activated?
What specific sequence of user actions triggers the leak?
Have you tried multiple iterations of activating this sequence?
Which lifecycle states has the app cycled through?
Have you tried multiple iterations through different lifecycle states?
Make sure that you can recreate the issue in the latest version of the SDKs. The
issue from a previous version may have already been fixed.
Step 2: Check if the memory usage for the app is expected
Every feature requires additional memory. When you debug different scenarios,
consider whether or not this could be expected usage or if it actually is a
memory leak. For example, for different features or user tasks, consider the
following possibilities:
Likely a leak: Activating the scenario through multiple iterations
results in an increase of memory usage over time.
Likely expected memory usage : Memory is reclaimed after the scenario
is stopped.
Possibly expected memory usage : Memory usage increases for a period of
time then tapers off. This could be due to a bounded cache or other expected
memory usage.
If the app behavior is likely expected memory usage, the issue can be
addressed by managing your app's memory. For help, see
Manage your app's memory .
Step 3: Debug at a high level
When you debug a memory leak, start at a high level, and then drill down
once you've narrowed down the possibilities. Use one of these high-level
debugging tools to first analyze if there is a leak over time:
Android Studio Memory Profiler (Recommended)
Perfetto Memory Counters
Android Debug Bridge (adb) command line utilities
Allocation tracking
Android Studio Memory Profiler
This tool gives you a visual histogram of the memory consumed. Heap dumps
and allocation tracking can also be triggered from this same interface. This
tool is the default recommendation. For more information, see
Android Studio Memory Profiler .
Perfetto Memory Counters
Perfetto gives you precise control
over tracking several metrics and presents it all in a single histogram. For
more information, see
Perfetto Memory Counters .
Android debug bridge (adb) command line utilities
Much of what you can track with Perfetto is also available as an adb
command line utility that you can query directly. A couple of important
examples are:
Meminfo lets you
see detailed memory information at a point in time.
Procstats provides
some important aggregated stats over time.
A crucial statistic to look at here is the maximum physical memory footprint
(maxRSS) that the app requires over time. MaxPSS may not be as accurate. For
a way to increase accuracy, see the
adb shell dumpsys procstats --help –start-testing flag.
Allocation tracking
Allocation tracking identifies the stack trace where memory was allocated and
if it was not freed. This step is especially useful when tracking down leaks in
native code. Since this tool identifies the stack trace, it can be a great
means to quickly debug the root cause or to figure out how to recreate the
problem. For steps to use allocation tracking, see
Debug memory in native code with allocation tracking .
Step 4: Check your app's memory use with a heap dump
One way to detect a memory leak is to get a heap dump of your app and
then inspect it for leaks. A heap dump is a snapshot of all the objects
in an app's memory. It can be used to diagnose memory leaks and other
memory-related problems.
Note : Android apps written in Java or Kotlin use a
garbage collector (GC) to manage the memory used by the apps.
The GC automatically identifies and removes objects no
longer being used (that is, objects that are not
reachable from any root). This frees up memory that can be used by others.
Since Java and Kotlin apps use a garbage collector, you may wonder how there
can be memory leaks. Shouldn't the GC reclaim all unreachable objects? In
Android, memory leaks usually refer to reachable objects that are no longer
useful. For example, if your app maintains a reference to an Android activity
that has been destroyed, it's considered a leak, because the activity can't be
displayed again, but GC cannot reclaim it because it is still owned by your
app. An activity is often expensive to keep in memory.
Android Studio can detect memory leaks not fixable by the GC. When you capture
a heap dump, Android Studio checks whether there is an activity or fragment
that is still reachable but has already been destroyed.
Capture a heap dump .
Analyze the heap dump to find memory leaks .
Fix memory leaks .
For details, see the following sections.
Capture a heap dump
To capture a heap dump, you can use the Android Debug Bridge (adb) or the
Android Studio Memory Profiler.
Use adb to capture a heap dump
To capture a heap dump using
adb , follow these steps:
Connect your Android device to your computer.
Open a command prompt and navigate to the directory where the adb tools are.
To capture a heap dump, run this command :
adb shell am dumpheap my.app.name $PHONE_FILE_OUT
To retrieve the heap dump, run this command:
adb pull $PHONE_FILE_OUT $LOCAL_FILE.
Use Android Studio to capture a heap dump
To capture a heap dump using the Android Studio Memory Profiler, follow these
steps in the Android
Capture a heapdump
section.
Analyze the heap dump to find memory leaks
Once you have captured a heap dump, you can use the Android Studio Memory
Profiler to analyze it. To do this, follow these steps:
Open your Android project in Android Studio.
Select Run , and then select the Debug configuration.
Open the Android Profiler tab.
Select Memory .
Select Open heap dump and select the heap dump file that you generated.
The memory profiler displays a graph of your app's memory usage.
Use the graph to analyze the heap dump:
Identify objects that are no longer being used.
Identify objects that use a lot of memory.
See how much memory each object is using.
Use this information to narrow down or find the source of the memory leak
and fix it.
Note: A known issue
in Android Studio results in inaccurate reported retained sizes. The sizes
may be vastly underestimated or overestimated depending on the version of
Android Studio. Google recommends using shallow sizes for memory analysis.
Step 5: Fix memory leaks
Once you have identified the source of the memory leak, you can fix it.
Fixing memory leaks in your Android apps helps improve the performance
and stability of your apps. Depending on the scenario, the details vary.
However, the following suggestions can help:
Make sure your app allocates and deallocates memory as recommended by
the Android topic
Manage your app's memory .
Remove unused code or resources from your app. For details for Android apps,
see Best practices for Android apps .
Other debugging tools
After these steps are complete, if you have still not found and fixed the
memory leak, try these tools:
Debug memory in native code with allocation tracking .
Identify leaks with LeakCanary .
Debug memory in native code with allocation tracking
Even if you are not directly using native code, several common Android libraries
do, including Google SDKs. If you think your memory leak is in native code,
then there are
several tools
you can use to debug it. Allocation tracking with either
Android Studio
or
heapprofd
(also compatible with Perfetto) is a great way to identify potential causes of
a memory leak and is often the quickest way to debug.
Allocation tracking also has the distinct advantage of letting you share the
results without including sensitive information that can be found in a heap.
Identify leaks with LeakCanary
LeakCanary is a powerful tool for identifying memory leaks in Android apps.
To learn more about how to use LeakCanary in your app, visit
LeakCanary .
Note: About LeakCanary and the Google Maps or Navigation SDKs . After an
activity or a fragment with a MapView is destroyed, the Maps SDK or the
Navigation SDK may hold onto it for up to a minute for logging purposes.
Since LeakCanary detects leaks immediately after an activity or fragment
is destroyed, it may report the activity or fragment as a leak. Google
recommends that you wait for a minute and then capture a heap dump to see
if the destroyed activity or fragment is still in the memory.
How to report issues with Google SDKs
If you have tried the methods in this document and suspect a memory leak
in our SDKs, contact customer support with as much of the following information
as possible:
Steps to recreate the memory leak . If the steps require complex coding,
it may help to copy the code that replicates the issue into our sample app
and provide additional steps that need to be taken in the UI to trigger the
leak.
Heap dumps captured from your app with the issue recreated . Capture heap
dumps at two different points in time that show that the memory usage has
increased by a substantial amount.
If a native memory leak is expected , share the allocation
tracking output from
heapprofd .
A bug report taken after you have recreated the leak condition.
Stack traces of any memory-related crashes .
Important note : Stack traces are usually not enough by themselves to
debug a memory issue, so make sure you also provide one of the other forms
of information.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
