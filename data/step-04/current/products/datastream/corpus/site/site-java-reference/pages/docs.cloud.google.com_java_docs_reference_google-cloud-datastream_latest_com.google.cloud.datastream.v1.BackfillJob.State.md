---
title: "Enum BackfillJob.State (1.87.0) \_|\_ Java client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-datastream/latest/com.google.cloud.datastream.v1.BackfillJob.State
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-datastream/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-datastream/latest/com.google.cloud.datastream.v1.BackfillJob.State
  title: "Enum BackfillJob.State (1.87.0) \_|\_ Java client libraries \_|\_ Google\
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
Enum BackfillJob.State (1.87.0)
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
public enum BackfillJob . State extends Enum<BackfillJob . State > implements ProtocolMessageEnum
State of the stream object's backfill job.
Protobuf enum google.cloud.datastream.v1.BackfillJob.State
Implements
ProtocolMessageEnum
Inherited Members
Enum.<T>valueOf(Class<T>,String)
Enum.clone()
Enum.compareTo(E)
Enum.equals(Object)
Enum.finalize()
Enum.getDeclaringClass()
Enum.hashCode()
Enum.name()
Enum.ordinal()
Enum.toString()
Object.getClass()
Object.notify()
Object.notifyAll()
Object.wait()
Object.wait(long)
Object.wait(long,int)
Static Fields
Name
Description
ACTIVE
Backfill job is running.
ACTIVE = 3;
ACTIVE_VALUE
Backfill job is running.
ACTIVE = 3;
COMPLETED
Backfill completed successfully.
COMPLETED = 6;
COMPLETED_VALUE
Backfill completed successfully.
COMPLETED = 6;
FAILED
Backfill job failed (due to an error).
FAILED = 5;
FAILED_VALUE
Backfill job failed (due to an error).
FAILED = 5;
NOT_STARTED
Backfill job was never started for the stream object (stream has backfill
strategy defined as manual or object was explicitly excluded from
automatic backfill).
NOT_STARTED = 1;
NOT_STARTED_VALUE
Backfill job was never started for the stream object (stream has backfill
strategy defined as manual or object was explicitly excluded from
automatic backfill).
NOT_STARTED = 1;
PENDING
Backfill job will start pending available resources.
PENDING = 2;
PENDING_VALUE
Backfill job will start pending available resources.
PENDING = 2;
STATE_UNSPECIFIED
Default value.
STATE_UNSPECIFIED = 0;
STATE_UNSPECIFIED_VALUE
Default value.
STATE_UNSPECIFIED = 0;
STOPPED
Backfill job stopped (next job run will start from beginning).
STOPPED = 4;
STOPPED_VALUE
Backfill job stopped (next job run will start from beginning).
STOPPED = 4;
UNRECOGNIZED
UNSUPPORTED
Backfill job failed since the table structure is currently unsupported
for backfill.
UNSUPPORTED = 7;
UNSUPPORTED_VALUE
Backfill job failed since the table structure is currently unsupported
for backfill.
UNSUPPORTED = 7;
Static Methods
Name
Description
forNumber(int value)
getDescriptor()
internalGetValueMap()
valueOf(Descriptors.EnumValueDescriptor desc)
valueOf(int value)
Deprecated. Use #forNumber(int) instead.
valueOf(String name)
values()
Methods
Name
Description
getDescriptorForType()
getNumber()
getValueDescriptor()
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
