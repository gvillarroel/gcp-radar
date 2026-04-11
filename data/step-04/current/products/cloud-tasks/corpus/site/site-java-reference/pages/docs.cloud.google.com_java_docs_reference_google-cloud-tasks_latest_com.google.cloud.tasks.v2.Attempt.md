---
title: "Class Attempt (2.88.0) \_|\_ Java client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-tasks/latest/com.google.cloud.tasks.v2.Attempt
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-tasks/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-tasks/latest/com.google.cloud.tasks.v2.Attempt
  title: "Class Attempt (2.88.0) \_|\_ Java client libraries \_|\_ Google Cloud Documentation"
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
Class Attempt (2.88.0)
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
public final class Attempt extends GeneratedMessage implements AttemptOrBuilder
The status of a task attempt.
Protobuf type google.cloud.tasks.v2.Attempt
Inheritance
Object >
AbstractMessageLite<MessageType,BuilderType> >
AbstractMessage >
GeneratedMessage >
Attempt
Implements
AttemptOrBuilder
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
DISPATCH_TIME_FIELD_NUMBER
public static final int DISPATCH_TIME_FIELD_NUMBER
Field Value
Type
Description
int
RESPONSE_STATUS_FIELD_NUMBER
public static final int RESPONSE_STATUS_FIELD_NUMBER
Field Value
Type
Description
int
RESPONSE_TIME_FIELD_NUMBER
public static final int RESPONSE_TIME_FIELD_NUMBER
Field Value
Type
Description
int
SCHEDULE_TIME_FIELD_NUMBER
public static final int SCHEDULE_TIME_FIELD_NUMBER
Field Value
Type
Description
int
Static Methods
getDefaultInstance()
public static Attempt getDefaultInstance ()
Returns
Type
Description
Attempt
getDescriptor()
public static final Descriptors . Descriptor getDescriptor ()
Returns
Type
Description
Descriptor
newBuilder()
public static Attempt . Builder newBuilder ()
Returns
Type
Description
Attempt.Builder
newBuilder(Attempt prototype)
public static Attempt . Builder newBuilder ( Attempt prototype )
Parameter
Name
Description
prototype
Attempt
Returns
Type
Description
Attempt.Builder
parseDelimitedFrom(InputStream input)
public static Attempt parseDelimitedFrom ( InputStream input )
Parameter
Name
Description
input
InputStream
Returns
Type
Description
Attempt
Exceptions
Type
Description
IOException
parseDelimitedFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
public static Attempt parseDelimitedFrom ( InputStream input , ExtensionRegistryLite extensionRegistry )
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
Attempt
Exceptions
Type
Description
IOException
parseFrom(byte[] data)
public static Attempt parseFrom ( byte [] data )
Parameter
Name
Description
data
byte []
Returns
Type
Description
Attempt
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(byte[] data, ExtensionRegistryLite extensionRegistry)
public static Attempt parseFrom ( byte [] data , ExtensionRegistryLite extensionRegistry )
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
Attempt
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteString data)
public static Attempt parseFrom ( ByteString data )
Parameter
Name
Description
data
ByteString
Returns
Type
Description
Attempt
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteString data, ExtensionRegistryLite extensionRegistry)
public static Attempt parseFrom ( ByteString data , ExtensionRegistryLite extensionRegistry )
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
Attempt
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(CodedInputStream input)
public static Attempt parseFrom ( CodedInputStream input )
Parameter
Name
Description
input
CodedInputStream
Returns
Type
Description
Attempt
Exceptions
Type
Description
IOException
parseFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public static Attempt parseFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
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
Attempt
Exceptions
Type
Description
IOException
parseFrom(InputStream input)
public static Attempt parseFrom ( InputStream input )
Parameter
Name
Description
input
InputStream
Returns
Type
Description
Attempt
Exceptions
Type
Description
IOException
parseFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
public static Attempt parseFrom ( InputStream input , ExtensionRegistryLite extensionRegistry )
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
Attempt
Exceptions
Type
Description
IOException
parseFrom(ByteBuffer data)
public static Attempt parseFrom ( ByteBuffer data )
Parameter
Name
Description
data
ByteBuffer
Returns
Type
Description
Attempt
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteBuffer data, ExtensionRegistryLite extensionRegistry)
public static Attempt parseFrom ( ByteBuffer data , ExtensionRegistryLite extensionRegistry )
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
Attempt
Exceptions
Type
Description
InvalidProtocolBufferException
parser()
public static Parser<Attempt> parser ()
Returns
Type
Description
Parser < Attempt >
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
public Attempt getDefaultInstanceForType ()
Returns
Type
Description
Attempt
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
getDispatchTimeOrBuilder()
public TimestampOrBuilder getDispatchTimeOrBuilder ()
Output only. The time that this attempt was dispatched.
dispatch_time will be truncated to the nearest microsecond.
.google.protobuf.Timestamp dispatch_time = 2;
Returns
Type
Description
TimestampOrBuilder
getParserForType()
public Parser<Attempt> getParserForType ()
Returns
Type
Description
Parser < Attempt >
Overrides
GeneratedMessage.getParserForType()
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
getScheduleTimeOrBuilder()
public TimestampOrBuilder getScheduleTimeOrBuilder ()
Output only. The time that this attempt was scheduled.
schedule_time will be truncated to the nearest microsecond.
.google.protobuf.Timestamp schedule_time = 1;
Returns
Type
Description
TimestampOrBuilder
getSerializedSize()
public int getSerializedSize ()
Returns
Type
Description
int
Overrides
GeneratedMessage.getSerializedSize()
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
public Attempt . Builder newBuilderForType ()
Returns
Type
Description
Attempt.Builder
newBuilderForType(AbstractMessage.BuilderParent parent)
protected Attempt . Builder newBuilderForType ( AbstractMessage . BuilderParent parent )
Parameter
Name
Description
parent
BuilderParent
Returns
Type
Description
Attempt.Builder
Overrides
AbstractMessage.newBuilderForType(AbstractMessage.BuilderParent parent)
toBuilder()
public Attempt . Builder toBuilder ()
Returns
Type
Description
Attempt.Builder
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
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
