---
title: "Class Attempt.Builder (2.88.0) \_|\_ Java client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-tasks/latest/com.google.cloud.tasks.v2.Attempt.Builder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-tasks/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-tasks/latest/com.google.cloud.tasks.v2.Attempt.Builder
  title: "Class Attempt.Builder (2.88.0) \_|\_ Java client libraries \_|\_ Google\
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
Class Attempt.Builder (2.88.0)
Stay organized with collections
Save and categorize content based on your preferences.
2.88.0 (latest)
2.87.0
2.85.0
2.83.0
2.82.0
2.80.0
2.78.0
2.76.0
2.75.0
2.74.0
2.73.0
2.72.0
2.70.0
2.68.0
2.67.0
2.64.0
2.63.0
2.62.0
2.60.0
2.59.0
2.58.0
2.57.0
2.56.0
2.55.0
2.54.0
2.53.0
2.52.0
2.51.0
2.49.0
2.48.0
2.47.0
2.46.0
2.45.0
2.44.0
2.43.0
2.42.0
2.41.0
2.40.0
2.39.0
2.37.0
2.36.0
2.35.0
2.34.0
2.33.0
2.32.0
2.31.0
2.30.0
2.29.0
2.28.0
2.27.0
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
2.14.0
2.13.0
2.12.0
2.11.0
2.9.0
2.8.0
2.7.0
2.6.0
2.5.0
2.4.0
2.3.12
2.2.0
2.1.11
public static final class Attempt . Builder extends GeneratedMessage . Builder<Attempt . Builder > implements AttemptOrBuilder
The status of a task attempt.
Protobuf type google.cloud.tasks.v2.Attempt
Inheritance
java.lang.Object >
AbstractMessageLite.Builder<MessageType,BuilderType> >
AbstractMessage.Builder<BuilderType> >
GeneratedMessage.Builder >
Attempt.Builder
Implements
AttemptOrBuilder
Inherited Members
AbstractMessage.Builder.findInitializationErrors()
AbstractMessage.Builder.getInitializationErrorString()
AbstractMessage.Builder.internalMergeFrom(AbstractMessageLite)
AbstractMessage.Builder.mergeFrom(byte[])
AbstractMessage.Builder.mergeFrom(byte[],ExtensionRegistryLite)
AbstractMessage.Builder.mergeFrom(byte[],int,int)
AbstractMessage.Builder.mergeFrom(byte[],int,int,ExtensionRegistryLite)
AbstractMessage.Builder.mergeFrom(ByteString)
AbstractMessage.Builder.mergeFrom(ByteString,ExtensionRegistryLite)
AbstractMessage.Builder.mergeFrom(CodedInputStream)
AbstractMessage.Builder.mergeFrom(CodedInputStream,ExtensionRegistryLite)
AbstractMessage.Builder.mergeFrom(Message)
AbstractMessage.Builder.mergeFrom(InputStream)
AbstractMessage.Builder.mergeFrom(InputStream,ExtensionRegistryLite)
AbstractMessage.Builder.newUninitializedMessageException(Message)
AbstractMessage.Builder.toString()
AbstractMessageLite.Builder.<T>addAll(Iterable<T>,Collection<? super T>)
AbstractMessageLite.Builder.<T>addAll(Iterable<T>,List<? super T>)
AbstractMessageLite.Builder.internalMergeFrom(MessageType)
AbstractMessageLite.Builder.mergeDelimitedFrom(InputStream)
AbstractMessageLite.Builder.mergeDelimitedFrom(InputStream,ExtensionRegistryLite)
AbstractMessageLite.Builder.mergeFrom(MessageLite)
AbstractMessageLite.Builder.newUninitializedMessageException(MessageLite)
GeneratedMessage.Builder.addRepeatedField(Descriptors.FieldDescriptor,Object)
GeneratedMessage.Builder.clear()
GeneratedMessage.Builder.clearField(Descriptors.FieldDescriptor)
GeneratedMessage.Builder.clearOneof(Descriptors.OneofDescriptor)
GeneratedMessage.Builder.clone()
GeneratedMessage.Builder.getAllFields()
GeneratedMessage.Builder.getDescriptorForType()
GeneratedMessage.Builder.getField(Descriptors.FieldDescriptor)
GeneratedMessage.Builder.getFieldBuilder(Descriptors.FieldDescriptor)
GeneratedMessage.Builder.getOneofFieldDescriptor(Descriptors.OneofDescriptor)
GeneratedMessage.Builder.getParentForChildren()
GeneratedMessage.Builder.getRepeatedField(Descriptors.FieldDescriptor,int)
GeneratedMessage.Builder.getRepeatedFieldBuilder(Descriptors.FieldDescriptor,int)
GeneratedMessage.Builder.getRepeatedFieldCount(Descriptors.FieldDescriptor)
com.google.protobuf.GeneratedMessage.Builder.getUnknownFieldSetBuilder()
GeneratedMessage.Builder.getUnknownFields()
GeneratedMessage.Builder.hasField(Descriptors.FieldDescriptor)
GeneratedMessage.Builder.hasOneof(Descriptors.OneofDescriptor)
GeneratedMessage.Builder.internalGetFieldAccessorTable()
GeneratedMessage.Builder.internalGetMapField(int)
com.google.protobuf.GeneratedMessage.Builder.internalGetMapFieldReflection(int)
GeneratedMessage.Builder.internalGetMutableMapField(int)
com.google.protobuf.GeneratedMessage.Builder.internalGetMutableMapFieldReflection(int)
GeneratedMessage.Builder.isClean()
GeneratedMessage.Builder.isInitialized()
GeneratedMessage.Builder.markClean()
GeneratedMessage.Builder.mergeUnknownFields(UnknownFieldSet)
com.google.protobuf.GeneratedMessage.Builder.mergeUnknownLengthDelimitedField(int,com.google.protobuf.ByteString)
com.google.protobuf.GeneratedMessage.Builder.mergeUnknownVarintField(int,int)
GeneratedMessage.Builder.newBuilderForField(Descriptors.FieldDescriptor)
GeneratedMessage.Builder.onBuilt()
GeneratedMessage.Builder.onChanged()
com.google.protobuf.GeneratedMessage.Builder.parseUnknownField(com.google.protobuf.CodedInputStream,com.google.protobuf.ExtensionRegistryLite,int)
GeneratedMessage.Builder.setField(Descriptors.FieldDescriptor,Object)
GeneratedMessage.Builder.setRepeatedField(Descriptors.FieldDescriptor,int,Object)
com.google.protobuf.GeneratedMessage.Builder.setUnknownFieldSetBuilder(com.google.protobuf.UnknownFieldSet.Builder)
GeneratedMessage.Builder.setUnknownFields(UnknownFieldSet)
com.google.protobuf.GeneratedMessage.Builder.setUnknownFieldsProto3(com.google.protobuf.UnknownFieldSet)
Object.equals(Object)
Object.finalize()
Object.getClass()
Object.hashCode()
Object.notify()
Object.notifyAll()
Object.wait()
Object.wait(long)
Object.wait(long,int)
Static Methods
getDescriptor()
public static final Descriptors . Descriptor getDescriptor ()
Returns
Type
Description
Descriptor
Methods
build()
public Attempt build ()
Returns
Type
Description
Attempt
buildPartial()
public Attempt buildPartial ()
Returns
Type
Description
Attempt
clear()
public Attempt . Builder clear ()
Returns
Type
Description
Attempt.Builder
Overrides
GeneratedMessage.Builder<BuilderType>.clear()
clearDispatchTime()
public Attempt . Builder clearDispatchTime ()
Output only. The time that this attempt was dispatched.
dispatch_time will be truncated to the nearest microsecond.
.google.protobuf.Timestamp dispatch_time = 2;
Returns
Type
Description
Attempt.Builder
clearResponseStatus()
public Attempt . Builder clearResponseStatus ()
Output only. The response from the worker for this attempt.
If response_time is unset, then the task has not been attempted or is
currently running and the response_status field is meaningless.
.google.rpc.Status response_status = 4;
Returns
Type
Description
Attempt.Builder
clearResponseTime()
public Attempt . Builder clearResponseTime ()
Output only. The time that this attempt response was received.
response_time will be truncated to the nearest microsecond.
.google.protobuf.Timestamp response_time = 3;
Returns
Type
Description
Attempt.Builder
clearScheduleTime()
public Attempt . Builder clearScheduleTime ()
Output only. The time that this attempt was scheduled.
schedule_time will be truncated to the nearest microsecond.
.google.protobuf.Timestamp schedule_time = 1;
Returns
Type
Description
Attempt.Builder
getDefaultInstanceForType()
public Attempt getDefaultInstanceForType ()
Returns
Type
Description
Attempt
getDescriptorForType()
public Descriptors . Descriptor getDescriptorForType ()
Returns
Type
Description
Descriptor
Overrides
GeneratedMessage.Builder<BuilderType>.getDescriptorForType()
getDispatchTime()
public Timestamp getDispatchTime ()
Output only. The time that this attempt was dispatched.
dispatch_time will be truncated to the nearest microsecond.
.google.protobuf.Timestamp dispatch_time = 2;
Returns
Type
Description
Timestamp
The dispatchTime.
getDispatchTimeBuilder()
public Timestamp . Builder getDispatchTimeBuilder ()
Output only. The time that this attempt was dispatched.
dispatch_time will be truncated to the nearest microsecond.
.google.protobuf.Timestamp dispatch_time = 2;
Returns
Type
Description
Builder
getDispatchTimeOrBuilder()
public TimestampOrBuilder getDispatchTimeOrBuilder ()
Output only. The time that this attempt was dispatched.
dispatch_time will be truncated to the nearest microsecond.
.google.protobuf.Timestamp dispatch_time = 2;
Returns
Type
Description
TimestampOrBuilder
getResponseStatus()
public Status getResponseStatus ()
Output only. The response from the worker for this attempt.
If response_time is unset, then the task has not been attempted or is
currently running and the response_status field is meaningless.
.google.rpc.Status response_status = 4;
Returns
Type
Description
com.google.rpc.Status
The responseStatus.
getResponseStatusBuilder()
public Status . Builder getResponseStatusBuilder ()
Output only. The response from the worker for this attempt.
If response_time is unset, then the task has not been attempted or is
currently running and the response_status field is meaningless.
.google.rpc.Status response_status = 4;
Returns
Type
Description
com.google.rpc.Status.Builder
getResponseStatusOrBuilder()
public StatusOrBuilder getResponseStatusOrBuilder ()
Output only. The response from the worker for this attempt.
If response_time is unset, then the task has not been attempted or is
currently running and the response_status field is meaningless.
.google.rpc.Status response_status = 4;
Returns
Type
Description
com.google.rpc.StatusOrBuilder
getResponseTime()
public Timestamp getResponseTime ()
Output only. The time that this attempt response was received.
response_time will be truncated to the nearest microsecond.
.google.protobuf.Timestamp response_time = 3;
Returns
Type
Description
Timestamp
The responseTime.
getResponseTimeBuilder()
public Timestamp . Builder getResponseTimeBuilder ()
Output only. The time that this attempt response was received.
response_time will be truncated to the nearest microsecond.
.google.protobuf.Timestamp response_time = 3;
Returns
Type
Description
Builder
getResponseTimeOrBuilder()
public TimestampOrBuilder getResponseTimeOrBuilder ()
Output only. The time that this attempt response was received.
response_time will be truncated to the nearest microsecond.
.google.protobuf.Timestamp response_time = 3;
Returns
Type
Description
TimestampOrBuilder
getScheduleTime()
public Timestamp getScheduleTime ()
Output only. The time that this attempt was scheduled.
schedule_time will be truncated to the nearest microsecond.
.google.protobuf.Timestamp schedule_time = 1;
Returns
Type
Description
Timestamp
The scheduleTime.
getScheduleTimeBuilder()
public Timestamp . Builder getScheduleTimeBuilder ()
Output only. The time that this attempt was scheduled.
schedule_time will be truncated to the nearest microsecond.
.google.protobuf.Timestamp schedule_time = 1;
Returns
Type
Description
Builder
getScheduleTimeOrBuilder()
public TimestampOrBuilder getScheduleTimeOrBuilder ()
Output only. The time that this attempt was scheduled.
schedule_time will be truncated to the nearest microsecond.
.google.protobuf.Timestamp schedule_time = 1;
Returns
Type
Description
TimestampOrBuilder
hasDispatchTime()
public boolean hasDispatchTime ()
Output only. The time that this attempt was dispatched.
dispatch_time will be truncated to the nearest microsecond.
.google.protobuf.Timestamp dispatch_time = 2;
Returns
Type
Description
boolean
Whether the dispatchTime field is set.
hasResponseStatus()
public boolean hasResponseStatus ()
Output only. The response from the worker for this attempt.
If response_time is unset, then the task has not been attempted or is
currently running and the response_status field is meaningless.
.google.rpc.Status response_status = 4;
Returns
Type
Description
boolean
Whether the responseStatus field is set.
hasResponseTime()
public boolean hasResponseTime ()
Output only. The time that this attempt response was received.
response_time will be truncated to the nearest microsecond.
.google.protobuf.Timestamp response_time = 3;
Returns
Type
Description
boolean
Whether the responseTime field is set.
hasScheduleTime()
public boolean hasScheduleTime ()
Output only. The time that this attempt was scheduled.
schedule_time will be truncated to the nearest microsecond.
.google.protobuf.Timestamp schedule_time = 1;
Returns
Type
Description
boolean
Whether the scheduleTime field is set.
internalGetFieldAccessorTable()
protected GeneratedMessage . FieldAccessorTable internalGetFieldAccessorTable ()
Returns
Type
Description
FieldAccessorTable
Overrides
GeneratedMessage.Builder<BuilderType>.internalGetFieldAccessorTable()
isInitialized()
public final boolean isInitialized ()
Returns
Type
Description
boolean
Overrides
GeneratedMessage.Builder<BuilderType>.isInitialized()
mergeDispatchTime(Timestamp value)
public Attempt . Builder mergeDispatchTime ( Timestamp value )
Output only. The time that this attempt was dispatched.
dispatch_time will be truncated to the nearest microsecond.
.google.protobuf.Timestamp dispatch_time = 2;
Parameter
Name
Description
value
Timestamp
Returns
Type
Description
Attempt.Builder
mergeFrom(Attempt other)
public Attempt . Builder mergeFrom ( Attempt other )
Parameter
Name
Description
other
Attempt
Returns
Type
Description
Attempt.Builder
mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public Attempt . Builder mergeFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
Parameters
Name
Description
input
CodedInputStream
extensionRegistry
ExtensionRegistryLite
Returns
Type
Description
Attempt.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
Exceptions
Type
Description
IOException
mergeFrom(Message other)
public Attempt . Builder mergeFrom ( Message other )
Parameter
Name
Description
other
Message
Returns
Type
Description
Attempt.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)
mergeResponseStatus(Status value)
public Attempt . Builder mergeResponseStatus ( Status value )
Output only. The response from the worker for this attempt.
If response_time is unset, then the task has not been attempted or is
currently running and the response_status field is meaningless.
.google.rpc.Status response_status = 4;
Parameter
Name
Description
value
com.google.rpc.Status
Returns
Type
Description
Attempt.Builder
mergeResponseTime(Timestamp value)
public Attempt . Builder mergeResponseTime ( Timestamp value )
Output only. The time that this attempt response was received.
response_time will be truncated to the nearest microsecond.
.google.protobuf.Timestamp response_time = 3;
Parameter
Name
Description
value
Timestamp
Returns
Type
Description
Attempt.Builder
mergeScheduleTime(Timestamp value)
public Attempt . Builder mergeScheduleTime ( Timestamp value )
Output only. The time that this attempt was scheduled.
schedule_time will be truncated to the nearest microsecond.
.google.protobuf.Timestamp schedule_time = 1;
Parameter
Name
Description
value
Timestamp
Returns
Type
Description
Attempt.Builder
setDispatchTime(Timestamp value)
public Attempt . Builder setDispatchTime ( Timestamp value )
Output only. The time that this attempt was dispatched.
dispatch_time will be truncated to the nearest microsecond.
.google.protobuf.Timestamp dispatch_time = 2;
Parameter
Name
Description
value
Timestamp
Returns
Type
Description
Attempt.Builder
setDispatchTime(Timestamp.Builder builderForValue)
public Attempt . Builder setDispatchTime ( Timestamp . Builder builderForValue )
Output only. The time that this attempt was dispatched.
dispatch_time will be truncated to the nearest microsecond.
.google.protobuf.Timestamp dispatch_time = 2;
Parameter
Name
Description
builderForValue
Builder
Returns
Type
Description
Attempt.Builder
setResponseStatus(Status value)
public Attempt . Builder setResponseStatus ( Status value )
Output only. The response from the worker for this attempt.
If response_time is unset, then the task has not been attempted or is
currently running and the response_status field is meaningless.
.google.rpc.Status response_status = 4;
Parameter
Name
Description
value
com.google.rpc.Status
Returns
Type
Description
Attempt.Builder
setResponseStatus(Status.Builder builderForValue)
public Attempt . Builder setResponseStatus ( Status . Builder builderForValue )
Output only. The response from the worker for this attempt.
If response_time is unset, then the task has not been attempted or is
currently running and the response_status field is meaningless.
.google.rpc.Status response_status = 4;
Parameter
Name
Description
builderForValue
com.google.rpc.Status.Builder
Returns
Type
Description
Attempt.Builder
setResponseTime(Timestamp value)
public Attempt . Builder setResponseTime ( Timestamp value )
Output only. The time that this attempt response was received.
response_time will be truncated to the nearest microsecond.
.google.protobuf.Timestamp response_time = 3;
Parameter
Name
Description
value
Timestamp
Returns
Type
Description
Attempt.Builder
setResponseTime(Timestamp.Builder builderForValue)
public Attempt . Builder setResponseTime ( Timestamp . Builder builderForValue )
Output only. The time that this attempt response was received.
response_time will be truncated to the nearest microsecond.
.google.protobuf.Timestamp response_time = 3;
Parameter
Name
Description
builderForValue
Builder
Returns
Type
Description
Attempt.Builder
setScheduleTime(Timestamp value)
public Attempt . Builder setScheduleTime ( Timestamp value )
Output only. The time that this attempt was scheduled.
schedule_time will be truncated to the nearest microsecond.
.google.protobuf.Timestamp schedule_time = 1;
Parameter
Name
Description
value
Timestamp
Returns
Type
Description
Attempt.Builder
setScheduleTime(Timestamp.Builder builderForValue)
public Attempt . Builder setScheduleTime ( Timestamp . Builder builderForValue )
Output only. The time that this attempt was scheduled.
schedule_time will be truncated to the nearest microsecond.
.google.protobuf.Timestamp schedule_time = 1;
Parameter
Name
Description
builderForValue
Builder
Returns
Type
Description
Attempt.Builder
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
