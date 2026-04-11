---
title: "Interface BatchProcessMetadataOrBuilder (2.92.0) \_|\_ Java client libraries\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-document-ai/latest/com.google.cloud.documentai.v1.BatchProcessMetadataOrBuilder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-document-ai/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-document-ai/latest/com.google.cloud.documentai.v1.BatchProcessMetadataOrBuilder
  title: "Interface BatchProcessMetadataOrBuilder (2.92.0) \_|\_ Java client libraries\
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
Interface BatchProcessMetadataOrBuilder (2.92.0)
Stay organized with collections
Save and categorize content based on your preferences.
2.92.0 (latest)
2.91.0
2.89.0
2.87.0
2.86.0
2.85.0
2.84.0
2.82.0
2.80.0
2.79.0
2.78.0
2.77.0
2.76.0
2.74.0
2.72.0
2.71.0
2.68.0
2.67.0
2.66.0
2.64.0
2.63.0
2.62.0
2.61.0
2.60.0
2.59.0
2.58.0
2.57.0
2.56.0
2.55.0
2.53.0
2.52.0
2.51.0
2.50.0
2.49.0
2.48.0
2.47.0
2.46.0
2.45.0
2.44.0
2.43.0
2.41.0
2.40.0
2.39.0
2.38.0
2.37.0
2.36.0
2.35.0
2.34.0
2.33.0
2.32.0
2.31.0
2.28.0
2.27.0
2.26.0
2.25.0
2.24.0
2.23.0
2.22.0
2.21.0
2.20.0
2.19.0
2.18.0
2.17.0
2.16.0
2.15.0
2.13.0
2.12.0
2.11.0
2.10.0
2.9.0
2.8.0
2.7.5
2.6.2
2.5.1
2.4.3
2.3.1
2.2.1
2.1.9
public interface BatchProcessMetadataOrBuilder extends MessageOrBuilder
Implements
MessageOrBuilder
Methods
getCreateTime()
public abstract Timestamp getCreateTime ()
The creation time of the operation.
.google.protobuf.Timestamp create_time = 3;
Returns
Type
Description
Timestamp
The createTime.
getCreateTimeOrBuilder()
public abstract TimestampOrBuilder getCreateTimeOrBuilder ()
The creation time of the operation.
.google.protobuf.Timestamp create_time = 3;
Returns
Type
Description
TimestampOrBuilder
getIndividualProcessStatuses(int index)
public abstract BatchProcessMetadata . IndividualProcessStatus getIndividualProcessStatuses ( int index )
The list of response details of each document.
repeated .google.cloud.documentai.v1.BatchProcessMetadata.IndividualProcessStatus individual_process_statuses = 5;
Parameter
Name
Description
index
int
Returns
Type
Description
BatchProcessMetadata.IndividualProcessStatus
getIndividualProcessStatusesCount()
public abstract int getIndividualProcessStatusesCount ()
The list of response details of each document.
repeated .google.cloud.documentai.v1.BatchProcessMetadata.IndividualProcessStatus individual_process_statuses = 5;
Returns
Type
Description
int
getIndividualProcessStatusesList()
public abstract List<BatchProcessMetadata . IndividualProcessStatus > getIndividualProcessStatusesList ()
The list of response details of each document.
repeated .google.cloud.documentai.v1.BatchProcessMetadata.IndividualProcessStatus individual_process_statuses = 5;
Returns
Type
Description
List < IndividualProcessStatus >
getIndividualProcessStatusesOrBuilder(int index)
public abstract BatchProcessMetadata . IndividualProcessStatusOrBuilder getIndividualProcessStatusesOrBuilder ( int index )
The list of response details of each document.
repeated .google.cloud.documentai.v1.BatchProcessMetadata.IndividualProcessStatus individual_process_statuses = 5;
Parameter
Name
Description
index
int
Returns
Type
Description
BatchProcessMetadata.IndividualProcessStatusOrBuilder
getIndividualProcessStatusesOrBuilderList()
public abstract List < ? extends BatchProcessMetadata . IndividualProcessStatusOrBuilder > getIndividualProcessStatusesOrBuilderList ()
The list of response details of each document.
repeated .google.cloud.documentai.v1.BatchProcessMetadata.IndividualProcessStatus individual_process_statuses = 5;
Returns
Type
Description
List < ? extends com.google.cloud.documentai.v1.BatchProcessMetadata.IndividualProcessStatusOrBuilder >
getState()
public abstract BatchProcessMetadata . State getState ()
The state of the current batch processing.
.google.cloud.documentai.v1.BatchProcessMetadata.State state = 1;
Returns
Type
Description
BatchProcessMetadata.State
The state.
getStateMessage()
public abstract String getStateMessage ()
A message providing more details about the current state of processing.
For example, the error message if the operation is failed.
string state_message = 2;
Returns
Type
Description
String
The stateMessage.
getStateMessageBytes()
public abstract ByteString getStateMessageBytes ()
A message providing more details about the current state of processing.
For example, the error message if the operation is failed.
string state_message = 2;
Returns
Type
Description
ByteString
The bytes for stateMessage.
getStateValue()
public abstract int getStateValue ()
The state of the current batch processing.
.google.cloud.documentai.v1.BatchProcessMetadata.State state = 1;
Returns
Type
Description
int
The enum numeric value on the wire for state.
getUpdateTime()
public abstract Timestamp getUpdateTime ()
The last update time of the operation.
.google.protobuf.Timestamp update_time = 4;
Returns
Type
Description
Timestamp
The updateTime.
getUpdateTimeOrBuilder()
public abstract TimestampOrBuilder getUpdateTimeOrBuilder ()
The last update time of the operation.
.google.protobuf.Timestamp update_time = 4;
Returns
Type
Description
TimestampOrBuilder
hasCreateTime()
public abstract boolean hasCreateTime ()
The creation time of the operation.
.google.protobuf.Timestamp create_time = 3;
Returns
Type
Description
boolean
Whether the createTime field is set.
hasUpdateTime()
public abstract boolean hasUpdateTime ()
The last update time of the operation.
.google.protobuf.Timestamp update_time = 4;
Returns
Type
Description
boolean
Whether the updateTime field is set.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
