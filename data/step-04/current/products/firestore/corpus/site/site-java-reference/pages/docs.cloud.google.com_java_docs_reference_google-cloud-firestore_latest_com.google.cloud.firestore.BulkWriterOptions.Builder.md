---
title: "Class BulkWriterOptions.Builder (3.38.0) \_|\_ Java client libraries \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.BulkWriterOptions.Builder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.BulkWriterOptions.Builder
  title: "Class BulkWriterOptions.Builder (3.38.0) \_|\_ Java client libraries \_\
    |\_ Google Cloud Documentation"
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
Class BulkWriterOptions.Builder (3.38.0)
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
public abstract static class BulkWriterOptions . Builder
Inheritance
java.lang.Object >
BulkWriterOptions.Builder
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
Constructors
Builder()
public Builder ()
Methods
autoBuild()
public abstract BulkWriterOptions autoBuild ()
Returns
Type
Description
BulkWriterOptions
build()
public BulkWriterOptions build ()
Returns
Type
Description
BulkWriterOptions
setExecutor(ScheduledExecutorService executor)
public abstract BulkWriterOptions . Builder setExecutor ( ScheduledExecutorService executor )
Set the executor that the BulkWriter instance schedules operations on.
Parameter
Name
Description
executor
ScheduledExecutorService The executor to schedule BulkWriter operations on.
Returns
Type
Description
BulkWriterOptions.Builder
setInitialOpsPerSecond(int initialOpsPerSecond)
public BulkWriterOptions . Builder setInitialOpsPerSecond ( int initialOpsPerSecond )
Set the initial maximum number of operations per second allowed by the throttler.
Parameter
Name
Description
initialOpsPerSecond
int The initial maximum number of operations per second allowed by the
throttler.
Returns
Type
Description
BulkWriterOptions.Builder
setMaxOpsPerSecond(int maxOpsPerSecond)
public BulkWriterOptions . Builder setMaxOpsPerSecond ( int maxOpsPerSecond )
Set the maximum number of operations per second allowed by the throttler.
Parameter
Name
Description
maxOpsPerSecond
int The maximum number of operations per second allowed by the throttler.
The throttler's allowed operations per second does not ramp up past the specified
operations per second.
Returns
Type
Description
BulkWriterOptions.Builder
setThrottlingEnabled(boolean enabled)
public abstract BulkWriterOptions . Builder setThrottlingEnabled ( boolean enabled )
Sets whether throttling should be enabled. By default, throttling is enabled.
Parameter
Name
Description
enabled
boolean Whether throttling should be enabled.
Returns
Type
Description
BulkWriterOptions.Builder
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-14 UTC."],[],[]]
