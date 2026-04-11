---
title: "Class BackfillJob.Builder (1.87.0) \_|\_ Java client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-datastream/latest/com.google.cloud.datastream.v1.BackfillJob.Builder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-datastream/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-datastream/latest/com.google.cloud.datastream.v1.BackfillJob.Builder
  title: "Class BackfillJob.Builder (1.87.0) \_|\_ Java client libraries \_|\_ Google\
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
Class BackfillJob.Builder (1.87.0)
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
public static final class BackfillJob . Builder extends GeneratedMessage . Builder<BackfillJob . Builder > implements BackfillJobOrBuilder
Represents a backfill job on a specific stream object.
Protobuf type google.cloud.datastream.v1.BackfillJob
Inheritance
java.lang.Object >
AbstractMessageLite.Builder<MessageType,BuilderType> >
AbstractMessage.Builder<BuilderType> >
GeneratedMessage.Builder >
BackfillJob.Builder
Implements
BackfillJobOrBuilder
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
addAllErrors(Iterable<? extends Error> values)
public BackfillJob . Builder addAllErrors ( Iterable < ? extends Error > values )
Output only. Errors which caused the backfill job to fail.
repeated .google.cloud.datastream.v1.Error errors = 5 [(.google.api.field_behavior) = OUTPUT_ONLY];
Parameter
Name
Description
values
Iterable < ? extends com.google.cloud.datastream.v1.Error >
Returns
Type
Description
BackfillJob.Builder
addErrors(Error value)
public BackfillJob . Builder addErrors ( Error value )
Output only. Errors which caused the backfill job to fail.
repeated .google.cloud.datastream.v1.Error errors = 5 [(.google.api.field_behavior) = OUTPUT_ONLY];
Parameter
Name
Description
value
Error
Returns
Type
Description
BackfillJob.Builder
addErrors(Error.Builder builderForValue)
public BackfillJob . Builder addErrors ( Error . Builder builderForValue )
Output only. Errors which caused the backfill job to fail.
repeated .google.cloud.datastream.v1.Error errors = 5 [(.google.api.field_behavior) = OUTPUT_ONLY];
Parameter
Name
Description
builderForValue
Error.Builder
Returns
Type
Description
BackfillJob.Builder
addErrors(int index, Error value)
public BackfillJob . Builder addErrors ( int index , Error value )
Output only. Errors which caused the backfill job to fail.
repeated .google.cloud.datastream.v1.Error errors = 5 [(.google.api.field_behavior) = OUTPUT_ONLY];
Parameters
Name
Description
index
int
value
Error
Returns
Type
Description
BackfillJob.Builder
addErrors(int index, Error.Builder builderForValue)
public BackfillJob . Builder addErrors ( int index , Error . Builder builderForValue )
Output only. Errors which caused the backfill job to fail.
repeated .google.cloud.datastream.v1.Error errors = 5 [(.google.api.field_behavior) = OUTPUT_ONLY];
Parameters
Name
Description
index
int
builderForValue
Error.Builder
Returns
Type
Description
BackfillJob.Builder
addErrorsBuilder()
public Error . Builder addErrorsBuilder ()
Output only. Errors which caused the backfill job to fail.
repeated .google.cloud.datastream.v1.Error errors = 5 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
Error.Builder
addErrorsBuilder(int index)
public Error . Builder addErrorsBuilder ( int index )
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
Error.Builder
build()
public BackfillJob build ()
Returns
Type
Description
BackfillJob
buildPartial()
public BackfillJob buildPartial ()
Returns
Type
Description
BackfillJob
clear()
public BackfillJob . Builder clear ()
Returns
Type
Description
BackfillJob.Builder
Overrides
GeneratedMessage.Builder<BuilderType>.clear()
clearErrors()
public BackfillJob . Builder clearErrors ()
Output only. Errors which caused the backfill job to fail.
repeated .google.cloud.datastream.v1.Error errors = 5 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
BackfillJob.Builder
clearLastEndTime()
public BackfillJob . Builder clearLastEndTime ()
Output only. Backfill job's end time.
.google.protobuf.Timestamp last_end_time = 4 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
BackfillJob.Builder
clearLastStartTime()
public BackfillJob . Builder clearLastStartTime ()
Output only. Backfill job's start time.
.google.protobuf.Timestamp last_start_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
BackfillJob.Builder
clearState()
public BackfillJob . Builder clearState ()
Output only. Backfill job state.
.google.cloud.datastream.v1.BackfillJob.State state = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
BackfillJob.Builder
This builder for chaining.
clearTrigger()
public BackfillJob . Builder clearTrigger ()
Backfill job's triggering reason.
.google.cloud.datastream.v1.BackfillJob.Trigger trigger = 2;
Returns
Type
Description
BackfillJob.Builder
This builder for chaining.
getDefaultInstanceForType()
public BackfillJob getDefaultInstanceForType ()
Returns
Type
Description
BackfillJob
getDescriptorForType()
public Descriptors . Descriptor getDescriptorForType ()
Returns
Type
Description
Descriptor
Overrides
GeneratedMessage.Builder<BuilderType>.getDescriptorForType()
getErrors(int index)
public Error getErrors ( int index )
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
getErrorsBuilder(int index)
public Error . Builder getErrorsBuilder ( int index )
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
Error.Builder
getErrorsBuilderList()
public List<Error . Builder > getErrorsBuilderList ()
Output only. Errors which caused the backfill job to fail.
repeated .google.cloud.datastream.v1.Error errors = 5 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
List < Builder >
getErrorsCount()
public int getErrorsCount ()
Output only. Errors which caused the backfill job to fail.
repeated .google.cloud.datastream.v1.Error errors = 5 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
int
getErrorsList()
public List<Error> getErrorsList ()
Output only. Errors which caused the backfill job to fail.
repeated .google.cloud.datastream.v1.Error errors = 5 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
List < Error >
getErrorsOrBuilder(int index)
public ErrorOrBuilder getErrorsOrBuilder ( int index )
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
public List < ? extends ErrorOrBuilder > getErrorsOrBuilderList ()
Output only. Errors which caused the backfill job to fail.
repeated .google.cloud.datastream.v1.Error errors = 5 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
List < ? extends com.google.cloud.datastream.v1.ErrorOrBuilder >
getLastEndTime()
public Timestamp getLastEndTime ()
Output only. Backfill job's end time.
.google.protobuf.Timestamp last_end_time = 4 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
Timestamp
The lastEndTime.
getLastEndTimeBuilder()
public Timestamp . Builder getLastEndTimeBuilder ()
Output only. Backfill job's end time.
.google.protobuf.Timestamp last_end_time = 4 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
Builder
getLastEndTimeOrBuilder()
public TimestampOrBuilder getLastEndTimeOrBuilder ()
Output only. Backfill job's end time.
.google.protobuf.Timestamp last_end_time = 4 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
TimestampOrBuilder
getLastStartTime()
public Timestamp getLastStartTime ()
Output only. Backfill job's start time.
.google.protobuf.Timestamp last_start_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
Timestamp
The lastStartTime.
getLastStartTimeBuilder()
public Timestamp . Builder getLastStartTimeBuilder ()
Output only. Backfill job's start time.
.google.protobuf.Timestamp last_start_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
Builder
getLastStartTimeOrBuilder()
public TimestampOrBuilder getLastStartTimeOrBuilder ()
Output only. Backfill job's start time.
.google.protobuf.Timestamp last_start_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
TimestampOrBuilder
getState()
public BackfillJob . State getState ()
Output only. Backfill job state.
.google.cloud.datastream.v1.BackfillJob.State state = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
BackfillJob.State
The state.
getStateValue()
public int getStateValue ()
Output only. Backfill job state.
.google.cloud.datastream.v1.BackfillJob.State state = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
int
The enum numeric value on the wire for state.
getTrigger()
public BackfillJob . Trigger getTrigger ()
Backfill job's triggering reason.
.google.cloud.datastream.v1.BackfillJob.Trigger trigger = 2;
Returns
Type
Description
BackfillJob.Trigger
The trigger.
getTriggerValue()
public int getTriggerValue ()
Backfill job's triggering reason.
.google.cloud.datastream.v1.BackfillJob.Trigger trigger = 2;
Returns
Type
Description
int
The enum numeric value on the wire for trigger.
hasLastEndTime()
public boolean hasLastEndTime ()
Output only. Backfill job's end time.
.google.protobuf.Timestamp last_end_time = 4 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
boolean
Whether the lastEndTime field is set.
hasLastStartTime()
public boolean hasLastStartTime ()
Output only. Backfill job's start time.
.google.protobuf.Timestamp last_start_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
boolean
Whether the lastStartTime field is set.
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
mergeFrom(BackfillJob other)
public BackfillJob . Builder mergeFrom ( BackfillJob other )
Parameter
Name
Description
other
BackfillJob
Returns
Type
Description
BackfillJob.Builder
mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public BackfillJob . Builder mergeFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
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
BackfillJob.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
Exceptions
Type
Description
IOException
mergeFrom(Message other)
public BackfillJob . Builder mergeFrom ( Message other )
Parameter
Name
Description
other
Message
Returns
Type
Description
BackfillJob.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)
mergeLastEndTime(Timestamp value)
public BackfillJob . Builder mergeLastEndTime ( Timestamp value )
Output only. Backfill job's end time.
.google.protobuf.Timestamp last_end_time = 4 [(.google.api.field_behavior) = OUTPUT_ONLY];
Parameter
Name
Description
value
Timestamp
Returns
Type
Description
BackfillJob.Builder
mergeLastStartTime(Timestamp value)
public BackfillJob . Builder mergeLastStartTime ( Timestamp value )
Output only. Backfill job's start time.
.google.protobuf.Timestamp last_start_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];
Parameter
Name
Description
value
Timestamp
Returns
Type
Description
BackfillJob.Builder
removeErrors(int index)
public BackfillJob . Builder removeErrors ( int index )
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
BackfillJob.Builder
setErrors(int index, Error value)
public BackfillJob . Builder setErrors ( int index , Error value )
Output only. Errors which caused the backfill job to fail.
repeated .google.cloud.datastream.v1.Error errors = 5 [(.google.api.field_behavior) = OUTPUT_ONLY];
Parameters
Name
Description
index
int
value
Error
Returns
Type
Description
BackfillJob.Builder
setErrors(int index, Error.Builder builderForValue)
public BackfillJob . Builder setErrors ( int index , Error . Builder builderForValue )
Output only. Errors which caused the backfill job to fail.
repeated .google.cloud.datastream.v1.Error errors = 5 [(.google.api.field_behavior) = OUTPUT_ONLY];
Parameters
Name
Description
index
int
builderForValue
Error.Builder
Returns
Type
Description
BackfillJob.Builder
setLastEndTime(Timestamp value)
public BackfillJob . Builder setLastEndTime ( Timestamp value )
Output only. Backfill job's end time.
.google.protobuf.Timestamp last_end_time = 4 [(.google.api.field_behavior) = OUTPUT_ONLY];
Parameter
Name
Description
value
Timestamp
Returns
Type
Description
BackfillJob.Builder
setLastEndTime(Timestamp.Builder builderForValue)
public BackfillJob . Builder setLastEndTime ( Timestamp . Builder builderForValue )
Output only. Backfill job's end time.
.google.protobuf.Timestamp last_end_time = 4 [(.google.api.field_behavior) = OUTPUT_ONLY];
Parameter
Name
Description
builderForValue
Builder
Returns
Type
Description
BackfillJob.Builder
setLastStartTime(Timestamp value)
public BackfillJob . Builder setLastStartTime ( Timestamp value )
Output only. Backfill job's start time.
.google.protobuf.Timestamp last_start_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];
Parameter
Name
Description
value
Timestamp
Returns
Type
Description
BackfillJob.Builder
setLastStartTime(Timestamp.Builder builderForValue)
public BackfillJob . Builder setLastStartTime ( Timestamp . Builder builderForValue )
Output only. Backfill job's start time.
.google.protobuf.Timestamp last_start_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];
Parameter
Name
Description
builderForValue
Builder
Returns
Type
Description
BackfillJob.Builder
setState(BackfillJob.State value)
public BackfillJob . Builder setState ( BackfillJob . State value )
Output only. Backfill job state.
.google.cloud.datastream.v1.BackfillJob.State state = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];
Parameter
Name
Description
value
BackfillJob.State The state to set.
Returns
Type
Description
BackfillJob.Builder
This builder for chaining.
setStateValue(int value)
public BackfillJob . Builder setStateValue ( int value )
Output only. Backfill job state.
.google.cloud.datastream.v1.BackfillJob.State state = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];
Parameter
Name
Description
value
int The enum numeric value on the wire for state to set.
Returns
Type
Description
BackfillJob.Builder
This builder for chaining.
setTrigger(BackfillJob.Trigger value)
public BackfillJob . Builder setTrigger ( BackfillJob . Trigger value )
Backfill job's triggering reason.
.google.cloud.datastream.v1.BackfillJob.Trigger trigger = 2;
Parameter
Name
Description
value
BackfillJob.Trigger The trigger to set.
Returns
Type
Description
BackfillJob.Builder
This builder for chaining.
setTriggerValue(int value)
public BackfillJob . Builder setTriggerValue ( int value )
Backfill job's triggering reason.
.google.cloud.datastream.v1.BackfillJob.Trigger trigger = 2;
Parameter
Name
Description
value
int The enum numeric value on the wire for trigger to set.
Returns
Type
Description
BackfillJob.Builder
This builder for chaining.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
