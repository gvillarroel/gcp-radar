---
title: "Interface OperationMetadataOrBuilder (1.89.0) \_|\_ Java client libraries\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.common.OperationMetadataOrBuilder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.common.OperationMetadataOrBuilder
  title: "Interface OperationMetadataOrBuilder (1.89.0) \_|\_ Java client libraries\
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
Interface OperationMetadataOrBuilder (1.89.0)
Stay organized with collections
Save and categorize content based on your preferences.
1.89.0 (latest)
1.88.0
1.86.0
1.84.0
1.83.0
1.82.0
1.81.0
1.79.0
1.77.0
1.76.0
1.75.0
1.74.0
1.73.0
1.71.0
1.69.0
1.68.0
1.65.0
1.64.0
1.63.0
1.61.0
1.60.0
1.59.0
1.58.0
1.57.0
1.56.0
1.55.0
1.54.0
1.53.0
1.52.0
1.50.0
1.49.0
1.48.0
1.47.0
1.46.0
1.45.0
1.44.0
1.43.0
1.42.0
1.41.0
1.40.0
1.38.0
1.37.0
1.36.0
1.35.0
1.34.0
1.33.0
1.32.0
1.31.0
1.30.0
1.29.0
1.28.0
1.25.0
1.24.0
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
1.10.0
1.9.0
1.8.0
1.7.0
1.6.0
1.5.0
1.2.0
public interface OperationMetadataOrBuilder extends MessageOrBuilder
Implements
MessageOrBuilder
Methods
getApiVersion()
public abstract String getApiVersion ()
Output only. API version used to start the operation.
string api_version = 7 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
String
The apiVersion.
getApiVersionBytes()
public abstract ByteString getApiVersionBytes ()
Output only. API version used to start the operation.
string api_version = 7 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
ByteString
The bytes for apiVersion.
getCancelRequested()
public abstract boolean getCancelRequested ()
Output only. Identifies whether the user has requested cancellation
of the operation. Operations that have successfully been cancelled
have [Operation.error][] value with a [google.rpc.Status.code][] of 1,
corresponding to Code.CANCELLED .
bool cancel_requested = 6 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
boolean
The cancelRequested.
getCreateTime()
public abstract Timestamp getCreateTime ()
Output only. The time the operation was created.
.google.protobuf.Timestamp create_time = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
Timestamp
The createTime.
getCreateTimeOrBuilder()
public abstract TimestampOrBuilder getCreateTimeOrBuilder ()
Output only. The time the operation was created.
.google.protobuf.Timestamp create_time = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
TimestampOrBuilder
getEndTime()
public abstract Timestamp getEndTime ()
Output only. The time the operation finished running.
.google.protobuf.Timestamp end_time = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
Timestamp
The endTime.
getEndTimeOrBuilder()
public abstract TimestampOrBuilder getEndTimeOrBuilder ()
Output only. The time the operation finished running.
.google.protobuf.Timestamp end_time = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
TimestampOrBuilder
getStatusDetail()
public abstract String getStatusDetail ()
Output only. Human-readable status of the operation, if any.
string status_detail = 5 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
String
The statusDetail.
getStatusDetailBytes()
public abstract ByteString getStatusDetailBytes ()
Output only. Human-readable status of the operation, if any.
string status_detail = 5 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
ByteString
The bytes for statusDetail.
getTarget()
public abstract String getTarget ()
Output only. Server-defined resource path for the target of the operation.
string target = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
String
The target.
getTargetBytes()
public abstract ByteString getTargetBytes ()
Output only. Server-defined resource path for the target of the operation.
string target = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
ByteString
The bytes for target.
getVerb()
public abstract String getVerb ()
Output only. Name of the verb executed by the operation.
string verb = 4 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
String
The verb.
getVerbBytes()
public abstract ByteString getVerbBytes ()
Output only. Name of the verb executed by the operation.
string verb = 4 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
ByteString
The bytes for verb.
hasCreateTime()
public abstract boolean hasCreateTime ()
Output only. The time the operation was created.
.google.protobuf.Timestamp create_time = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
boolean
Whether the createTime field is set.
hasEndTime()
public abstract boolean hasEndTime ()
Output only. The time the operation finished running.
.google.protobuf.Timestamp end_time = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
boolean
Whether the endTime field is set.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
