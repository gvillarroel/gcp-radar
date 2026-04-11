---
title: "Class BackfillJob (1.87.0) \_|\_ Java client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-datastream/latest/com.google.cloud.datastream.v1.BackfillJob
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-datastream/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-datastream/latest/com.google.cloud.datastream.v1.BackfillJob
  title: "Class BackfillJob (1.87.0) \_|\_ Java client libraries \_|\_ Google Cloud\
    \ Documentation"
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
Class BackfillJob (1.87.0)
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
public final class BackfillJob extends GeneratedMessage implements BackfillJobOrBuilder
Represents a backfill job on a specific stream object.
Protobuf type google.cloud.datastream.v1.BackfillJob
Inheritance
Object >
AbstractMessageLite<MessageType,BuilderType> >
AbstractMessage >
GeneratedMessage >
BackfillJob
Implements
BackfillJobOrBuilder
Inherited Members
AbstractMessage.equals(Object)
AbstractMessage.findInitializationErrors()
AbstractMessage.getInitializationErrorString()
AbstractMessage.hashCode()
AbstractMessage.hashFields(int,Map<Descriptors.FieldDescriptor,Object>)
AbstractMessage.newBuilderForType(AbstractMessage.BuilderParent)
AbstractMessage.toString()
AbstractMessageLite.<T>addAll(Iterable<T>,List<? super T>)
AbstractMessageLite.checkByteStringIsUtf8(ByteString)
AbstractMessageLite.toByteArray()
AbstractMessageLite.toByteString()
AbstractMessageLite.writeDelimitedTo(OutputStream)
AbstractMessageLite.writeTo(OutputStream)
com.google.protobuf.GeneratedMessage.<ContainingT,T>newFileScopedGeneratedExtension(java.lang.Class<?>,com.google.protobuf.Message)
com.google.protobuf.GeneratedMessage.<ContainingT,T>newMessageScopedGeneratedExtension(com.google.protobuf.Message,int,java.lang.Class<?>,com.google.protobuf.Message)
com.google.protobuf.GeneratedMessage.<ListT>makeMutableCopy(ListT)
com.google.protobuf.GeneratedMessage.<ListT>makeMutableCopy(ListT,int)
GeneratedMessage.<M>parseDelimitedWithIOException(Parser<M>,InputStream)
GeneratedMessage.<M>parseDelimitedWithIOException(Parser<M>,InputStream,ExtensionRegistryLite)
GeneratedMessage.<M>parseWithIOException(Parser<M>,CodedInputStream)
GeneratedMessage.<M>parseWithIOException(Parser<M>,CodedInputStream,ExtensionRegistryLite)
GeneratedMessage.<M>parseWithIOException(Parser<M>,InputStream)
GeneratedMessage.<M>parseWithIOException(Parser<M>,InputStream,ExtensionRegistryLite)
com.google.protobuf.GeneratedMessage.<T>emptyList(java.lang.Class<T>)
com.google.protobuf.GeneratedMessage.<V>serializeBooleanMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.Boolean,V>,com.google.protobuf.MapEntry<java.lang.Boolean,V>,int)
com.google.protobuf.GeneratedMessage.<V>serializeIntegerMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.Integer,V>,com.google.protobuf.MapEntry<java.lang.Integer,V>,int)
com.google.protobuf.GeneratedMessage.<V>serializeLongMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.Long,V>,com.google.protobuf.MapEntry<java.lang.Long,V>,int)
com.google.protobuf.GeneratedMessage.<V>serializeStringMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.String,V>,com.google.protobuf.MapEntry<java.lang.String,V>,int)
com.google.protobuf.GeneratedMessage.canUseUnsafe()
GeneratedMessage.computeStringSize(int,Object)
GeneratedMessage.computeStringSizeNoTag(Object)
com.google.protobuf.GeneratedMessage.emptyBooleanList()
com.google.protobuf.GeneratedMessage.emptyDoubleList()
com.google.protobuf.GeneratedMessage.emptyFloatList()
com.google.protobuf.GeneratedMessage.emptyIntList()
com.google.protobuf.GeneratedMessage.emptyLongList()
GeneratedMessage.getAllFields()
GeneratedMessage.getDescriptorForType()
GeneratedMessage.getField(Descriptors.FieldDescriptor)
GeneratedMessage.getOneofFieldDescriptor(Descriptors.OneofDescriptor)
GeneratedMessage.getParserForType()
GeneratedMessage.getRepeatedField(Descriptors.FieldDescriptor,int)
GeneratedMessage.getRepeatedFieldCount(Descriptors.FieldDescriptor)
GeneratedMessage.getSerializedSize()
GeneratedMessage.getUnknownFields()
GeneratedMessage.hasField(Descriptors.FieldDescriptor)
GeneratedMessage.hasOneof(Descriptors.OneofDescriptor)
GeneratedMessage.internalGetFieldAccessorTable()
GeneratedMessage.internalGetMapField(int)
com.google.protobuf.GeneratedMessage.internalGetMapFieldReflection(int)
GeneratedMessage.isInitialized()
com.google.protobuf.GeneratedMessage.isStringEmpty(java.lang.Object)
GeneratedMessage.makeExtensionsImmutable()
com.google.protobuf.GeneratedMessage.mergeFromAndMakeImmutableInternal(com.google.protobuf.CodedInputStream,com.google.protobuf.ExtensionRegistryLite)
com.google.protobuf.GeneratedMessage.newInstance(com.google.protobuf.GeneratedMessage.UnusedPrivateParameter)
GeneratedMessage.parseUnknownField(CodedInputStream,UnknownFieldSet.Builder,ExtensionRegistryLite,int)
com.google.protobuf.GeneratedMessage.parseUnknownFieldProto3(com.google.protobuf.CodedInputStream,com.google.protobuf.UnknownFieldSet.Builder,com.google.protobuf.ExtensionRegistryLite,int)
GeneratedMessage.writeReplace()
GeneratedMessage.writeString(CodedOutputStream,int,Object)
GeneratedMessage.writeStringNoTag(CodedOutputStream,Object)
GeneratedMessage.writeTo(CodedOutputStream)
Object.clone()
Object.finalize()
Object.getClass()
Object.notify()
Object.notifyAll()
Object.wait()
Object.wait(long)
Object.wait(long,int)
Static Fields
ERRORS_FIELD_NUMBER
public static final int ERRORS_FIELD_NUMBER
Field Value
Type
Description
int
LAST_END_TIME_FIELD_NUMBER
public static final int LAST_END_TIME_FIELD_NUMBER
Field Value
Type
Description
int
LAST_START_TIME_FIELD_NUMBER
public static final int LAST_START_TIME_FIELD_NUMBER
Field Value
Type
Description
int
STATE_FIELD_NUMBER
public static final int STATE_FIELD_NUMBER
Field Value
Type
Description
int
TRIGGER_FIELD_NUMBER
public static final int TRIGGER_FIELD_NUMBER
Field Value
Type
Description
int
Static Methods
getDefaultInstance()
public static BackfillJob getDefaultInstance ()
Returns
Type
Description
BackfillJob
getDescriptor()
public static final Descriptors . Descriptor getDescriptor ()
Returns
Type
Description
Descriptor
newBuilder()
public static BackfillJob . Builder newBuilder ()
Returns
Type
Description
BackfillJob.Builder
newBuilder(BackfillJob prototype)
public static BackfillJob . Builder newBuilder ( BackfillJob prototype )
Parameter
Name
Description
prototype
BackfillJob
Returns
Type
Description
BackfillJob.Builder
parseDelimitedFrom(InputStream input)
public static BackfillJob parseDelimitedFrom ( InputStream input )
Parameter
Name
Description
input
InputStream
Returns
Type
Description
BackfillJob
Exceptions
Type
Description
IOException
parseDelimitedFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
public static BackfillJob parseDelimitedFrom ( InputStream input , ExtensionRegistryLite extensionRegistry )
Parameters
Name
Description
input
InputStream
extensionRegistry
ExtensionRegistryLite
Returns
Type
Description
BackfillJob
Exceptions
Type
Description
IOException
parseFrom(byte[] data)
public static BackfillJob parseFrom ( byte [] data )
Parameter
Name
Description
data
byte []
Returns
Type
Description
BackfillJob
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(byte[] data, ExtensionRegistryLite extensionRegistry)
public static BackfillJob parseFrom ( byte [] data , ExtensionRegistryLite extensionRegistry )
Parameters
Name
Description
data
byte []
extensionRegistry
ExtensionRegistryLite
Returns
Type
Description
BackfillJob
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteString data)
public static BackfillJob parseFrom ( ByteString data )
Parameter
Name
Description
data
ByteString
Returns
Type
Description
BackfillJob
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteString data, ExtensionRegistryLite extensionRegistry)
public static BackfillJob parseFrom ( ByteString data , ExtensionRegistryLite extensionRegistry )
Parameters
Name
Description
data
ByteString
extensionRegistry
ExtensionRegistryLite
Returns
Type
Description
BackfillJob
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(CodedInputStream input)
public static BackfillJob parseFrom ( CodedInputStream input )
Parameter
Name
Description
input
CodedInputStream
Returns
Type
Description
BackfillJob
Exceptions
Type
Description
IOException
parseFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public static BackfillJob parseFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
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
BackfillJob
Exceptions
Type
Description
IOException
parseFrom(InputStream input)
public static BackfillJob parseFrom ( InputStream input )
Parameter
Name
Description
input
InputStream
Returns
Type
Description
BackfillJob
Exceptions
Type
Description
IOException
parseFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
public static BackfillJob parseFrom ( InputStream input , ExtensionRegistryLite extensionRegistry )
Parameters
Name
Description
input
InputStream
extensionRegistry
ExtensionRegistryLite
Returns
Type
Description
BackfillJob
Exceptions
Type
Description
IOException
parseFrom(ByteBuffer data)
public static BackfillJob parseFrom ( ByteBuffer data )
Parameter
Name
Description
data
ByteBuffer
Returns
Type
Description
BackfillJob
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteBuffer data, ExtensionRegistryLite extensionRegistry)
public static BackfillJob parseFrom ( ByteBuffer data , ExtensionRegistryLite extensionRegistry )
Parameters
Name
Description
data
ByteBuffer
extensionRegistry
ExtensionRegistryLite
Returns
Type
Description
BackfillJob
Exceptions
Type
Description
InvalidProtocolBufferException
parser()
public static Parser<BackfillJob> parser ()
Returns
Type
Description
Parser < BackfillJob >
Methods
equals(Object obj)
public boolean equals ( Object obj )
Parameter
Name
Description
obj
Object
Returns
Type
Description
boolean
Overrides
AbstractMessage.equals(Object other)
getDefaultInstanceForType()
public BackfillJob getDefaultInstanceForType ()
Returns
Type
Description
BackfillJob
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
getLastStartTimeOrBuilder()
public TimestampOrBuilder getLastStartTimeOrBuilder ()
Output only. Backfill job's start time.
.google.protobuf.Timestamp last_start_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
TimestampOrBuilder
getParserForType()
public Parser<BackfillJob> getParserForType ()
Returns
Type
Description
Parser < BackfillJob >
Overrides
GeneratedMessage.getParserForType()
getSerializedSize()
public int getSerializedSize ()
Returns
Type
Description
int
Overrides
GeneratedMessage.getSerializedSize()
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
hashCode()
public int hashCode ()
Returns
Type
Description
int
Overrides
AbstractMessage.hashCode()
internalGetFieldAccessorTable()
protected GeneratedMessage . FieldAccessorTable internalGetFieldAccessorTable ()
Returns
Type
Description
FieldAccessorTable
Overrides
GeneratedMessage.internalGetFieldAccessorTable()
isInitialized()
public final boolean isInitialized ()
Returns
Type
Description
boolean
Overrides
GeneratedMessage.isInitialized()
newBuilderForType()
public BackfillJob . Builder newBuilderForType ()
Returns
Type
Description
BackfillJob.Builder
newBuilderForType(AbstractMessage.BuilderParent parent)
protected BackfillJob . Builder newBuilderForType ( AbstractMessage . BuilderParent parent )
Parameter
Name
Description
parent
BuilderParent
Returns
Type
Description
BackfillJob.Builder
Overrides
AbstractMessage.newBuilderForType(AbstractMessage.BuilderParent parent)
toBuilder()
public BackfillJob . Builder toBuilder ()
Returns
Type
Description
BackfillJob.Builder
writeTo(CodedOutputStream output)
public void writeTo ( CodedOutputStream output )
Parameter
Name
Description
output
CodedOutputStream
Overrides
GeneratedMessage.writeTo(CodedOutputStream output)
Exceptions
Type
Description
IOException
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
