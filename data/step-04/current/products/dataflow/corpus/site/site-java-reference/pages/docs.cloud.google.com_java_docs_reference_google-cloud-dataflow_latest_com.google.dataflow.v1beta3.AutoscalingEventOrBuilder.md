---
title: "Interface AutoscalingEventOrBuilder (0.92.0) \_|\_ Java client libraries \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3.AutoscalingEventOrBuilder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3.AutoscalingEventOrBuilder
  title: "Interface AutoscalingEventOrBuilder (0.92.0) \_|\_ Java client libraries\
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
Interface AutoscalingEventOrBuilder (0.92.0)
Stay organized with collections
Save and categorize content based on your preferences.
0.92.0 (latest)
0.91.0
0.89.0
0.87.0
0.86.0
0.85.0
0.84.0
0.82.0
0.80.0
0.79.0
0.78.0
0.77.0
0.76.0
0.74.0
0.72.0
0.71.0
0.68.0
0.67.0
0.66.0
0.64.0
0.63.0
0.62.0
0.61.0
0.60.0
0.59.0
0.58.0
0.57.0
0.56.0
0.55.0
0.53.0
0.52.0
0.51.0
0.50.0
0.49.0
0.48.0
0.47.0
0.46.0
0.45.0
0.44.0
0.43.0
0.41.0
0.40.0
0.39.0
0.38.0
0.37.0
0.36.0
0.35.0
0.34.0
0.33.0
0.32.0
0.31.0
0.28.0
0.27.0
0.26.0
0.25.0
0.24.0
0.23.0
0.22.0
0.21.0
0.20.0
0.19.0
0.18.0
0.17.0
0.16.0
0.15.0
0.13.0
0.12.0
0.11.0
0.10.0
0.9.0
0.8.0
0.5.0
public interface AutoscalingEventOrBuilder extends MessageOrBuilder
Implements
MessageOrBuilder
Methods
getCurrentNumWorkers()
public abstract long getCurrentNumWorkers ()
The current number of workers the job has.
int64 current_num_workers = 1;
Returns
Type
Description
long
The currentNumWorkers.
getDescription()
public abstract StructuredMessage getDescription ()
A message describing why the system decided to adjust the current
number of workers, why it failed, or why the system decided to
not make any changes to the number of workers.
.google.dataflow.v1beta3.StructuredMessage description = 4;
Returns
Type
Description
StructuredMessage
The description.
getDescriptionOrBuilder()
public abstract StructuredMessageOrBuilder getDescriptionOrBuilder ()
A message describing why the system decided to adjust the current
number of workers, why it failed, or why the system decided to
not make any changes to the number of workers.
.google.dataflow.v1beta3.StructuredMessage description = 4;
Returns
Type
Description
StructuredMessageOrBuilder
getEventType()
public abstract AutoscalingEvent . AutoscalingEventType getEventType ()
The type of autoscaling event to report.
.google.dataflow.v1beta3.AutoscalingEvent.AutoscalingEventType event_type = 3;
Returns
Type
Description
AutoscalingEvent.AutoscalingEventType
The eventType.
getEventTypeValue()
public abstract int getEventTypeValue ()
The type of autoscaling event to report.
.google.dataflow.v1beta3.AutoscalingEvent.AutoscalingEventType event_type = 3;
Returns
Type
Description
int
The enum numeric value on the wire for eventType.
getTargetNumWorkers()
public abstract long getTargetNumWorkers ()
The target number of workers the worker pool wants to resize to use.
int64 target_num_workers = 2;
Returns
Type
Description
long
The targetNumWorkers.
getTime()
public abstract Timestamp getTime ()
The time this event was emitted to indicate a new target or current
num_workers value.
.google.protobuf.Timestamp time = 5;
Returns
Type
Description
Timestamp
The time.
getTimeOrBuilder()
public abstract TimestampOrBuilder getTimeOrBuilder ()
The time this event was emitted to indicate a new target or current
num_workers value.
.google.protobuf.Timestamp time = 5;
Returns
Type
Description
TimestampOrBuilder
getWorkerPool()
public abstract String getWorkerPool ()
A short and friendly name for the worker pool this event refers to.
string worker_pool = 7;
Returns
Type
Description
String
The workerPool.
getWorkerPoolBytes()
public abstract ByteString getWorkerPoolBytes ()
A short and friendly name for the worker pool this event refers to.
string worker_pool = 7;
Returns
Type
Description
ByteString
The bytes for workerPool.
hasDescription()
public abstract boolean hasDescription ()
A message describing why the system decided to adjust the current
number of workers, why it failed, or why the system decided to
not make any changes to the number of workers.
.google.dataflow.v1beta3.StructuredMessage description = 4;
Returns
Type
Description
boolean
Whether the description field is set.
hasTime()
public abstract boolean hasTime ()
The time this event was emitted to indicate a new target or current
num_workers value.
.google.protobuf.Timestamp time = 5;
Returns
Type
Description
boolean
Whether the time field is set.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
