---
title: "Interface BackfillJobOrBuilder (1.87.0) \_|\_ Java client libraries \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-datastream/latest/com.google.cloud.datastream.v1.BackfillJobOrBuilder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-datastream/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-datastream/latest/com.google.cloud.datastream.v1.BackfillJobOrBuilder
  title: "Interface BackfillJobOrBuilder (1.87.0) \_|\_ Java client libraries \_|\_\
    \ Google Cloud Documentation"
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
Interface BackfillJobOrBuilder (1.87.0)
Stay organized with collections
Save and categorize content based on your preferences.
1.87.0 (latest)
1.86.0
1.84.0
1.82.0
1.81.0
1.80.0
1.79.0
1.77.0
1.75.0
1.74.0
1.73.0
1.72.0
1.71.0
1.69.0
1.67.0
1.66.0
1.63.0
1.62.0
1.61.0
1.59.0
1.58.0
1.57.0
1.56.0
1.55.0
1.54.0
1.53.0
1.52.0
1.51.0
1.50.0
1.48.0
1.47.0
1.46.0
1.45.0
1.44.0
1.43.0
1.42.0
1.41.0
1.40.0
1.39.0
1.38.0
1.36.0
1.35.0
1.34.0
1.33.0
1.32.0
1.31.0
1.30.0
1.29.0
1.28.0
1.27.0
1.26.0
1.23.0
1.22.0
1.21.0
1.20.0
1.19.0
1.18.0
1.17.0
1.16.0
1.15.0
1.14.0
1.13.0
1.12.0
1.11.0
1.10.0
1.8.0
1.7.0
1.6.0
1.5.0
1.4.0
1.3.0
1.2.2
1.1.1
1.0.0
0.4.2
public interface BackfillJobOrBuilder extends MessageOrBuilder
Implements
MessageOrBuilder
Methods
getErrors(int index)
public abstract Error getErrors ( int index )
Output only. Errors which caused the backfill job to fail.
repeated .google.cloud.datastream.v1.Error errors = 5 [(.google.api.field_behavior) = OUTPUT_ONLY];
Parameter
Name
Description
index
int
Returns
Type
Description
Error
getErrorsCount()
public abstract int getErrorsCount ()
Output only. Errors which caused the backfill job to fail.
repeated .google.cloud.datastream.v1.Error errors = 5 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
int
getErrorsList()
public abstract List<Error> getErrorsList ()
Output only. Errors which caused the backfill job to fail.
repeated .google.cloud.datastream.v1.Error errors = 5 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
List < Error >
getErrorsOrBuilder(int index)
public abstract ErrorOrBuilder getErrorsOrBuilder ( int index )
Output only. Errors which caused the backfill job to fail.
repeated .google.cloud.datastream.v1.Error errors = 5 [(.google.api.field_behavior) = OUTPUT_ONLY];
Parameter
Name
Description
index
int
Returns
Type
Description
ErrorOrBuilder
getErrorsOrBuilderList()
public abstract List < ? extends ErrorOrBuilder > getErrorsOrBuilderList ()
Output only. Errors which caused the backfill job to fail.
repeated .google.cloud.datastream.v1.Error errors = 5 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
List < ? extends com.google.cloud.datastream.v1.ErrorOrBuilder >
getLastEndTime()
public abstract Timestamp getLastEndTime ()
Output only. Backfill job's end time.
.google.protobuf.Timestamp last_end_time = 4 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
Timestamp
The lastEndTime.
getLastEndTimeOrBuilder()
public abstract TimestampOrBuilder getLastEndTimeOrBuilder ()
Output only. Backfill job's end time.
.google.protobuf.Timestamp last_end_time = 4 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
TimestampOrBuilder
getLastStartTime()
public abstract Timestamp getLastStartTime ()
Output only. Backfill job's start time.
.google.protobuf.Timestamp last_start_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
Timestamp
The lastStartTime.
getLastStartTimeOrBuilder()
public abstract TimestampOrBuilder getLastStartTimeOrBuilder ()
Output only. Backfill job's start time.
.google.protobuf.Timestamp last_start_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
TimestampOrBuilder
getState()
public abstract BackfillJob . State getState ()
Output only. Backfill job state.
.google.cloud.datastream.v1.BackfillJob.State state = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
BackfillJob.State
The state.
getStateValue()
public abstract int getStateValue ()
Output only. Backfill job state.
.google.cloud.datastream.v1.BackfillJob.State state = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
int
The enum numeric value on the wire for state.
getTrigger()
public abstract BackfillJob . Trigger getTrigger ()
Backfill job's triggering reason.
.google.cloud.datastream.v1.BackfillJob.Trigger trigger = 2;
Returns
Type
Description
BackfillJob.Trigger
The trigger.
getTriggerValue()
public abstract int getTriggerValue ()
Backfill job's triggering reason.
.google.cloud.datastream.v1.BackfillJob.Trigger trigger = 2;
Returns
Type
Description
int
The enum numeric value on the wire for trigger.
hasLastEndTime()
public abstract boolean hasLastEndTime ()
Output only. Backfill job's end time.
.google.protobuf.Timestamp last_end_time = 4 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
boolean
Whether the lastEndTime field is set.
hasLastStartTime()
public abstract boolean hasLastStartTime ()
Output only. Backfill job's start time.
.google.protobuf.Timestamp last_start_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
boolean
Whether the lastStartTime field is set.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
