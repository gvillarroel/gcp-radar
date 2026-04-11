---
title: "Class PublishChannelConnectionEventsRequest (0.88.0) \_|\_ Java client libraries\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-eventarc-publishing/latest/com.google.cloud.eventarc.publishing.v1.PublishChannelConnectionEventsRequest
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-eventarc-publishing/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-eventarc-publishing/latest/com.google.cloud.eventarc.publishing.v1.PublishChannelConnectionEventsRequest
  title: "Class PublishChannelConnectionEventsRequest (0.88.0) \_|\_ Java client libraries\
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
Class PublishChannelConnectionEventsRequest (0.88.0)
Stay organized with collections
Save and categorize content based on your preferences.
0.88.0 (latest)
0.87.0
0.85.0
0.83.0
0.82.0
0.81.0
0.80.0
0.78.0
0.76.0
0.75.0
0.74.0
0.73.0
0.72.0
0.70.0
0.68.0
0.67.0
0.64.0
0.63.0
0.62.0
0.60.0
0.59.0
0.58.0
0.57.0
0.56.0
0.55.0
0.54.0
0.53.0
0.52.0
0.51.0
0.49.0
0.48.0
0.47.0
0.46.0
0.45.0
0.44.0
0.43.0
0.42.0
0.41.0
0.40.0
0.39.0
0.37.0
0.36.0
0.35.0
0.34.0
0.33.0
0.32.0
0.31.0
0.30.0
0.29.0
0.28.0
0.27.0
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
0.14.0
0.13.0
0.12.0
0.11.0
0.9.0
0.8.0
0.7.0
0.6.0
0.5.0
0.4.0
public final class PublishChannelConnectionEventsRequest extends GeneratedMessage implements PublishChannelConnectionEventsRequestOrBuilder
The request message for the PublishChannelConnectionEvents method.
Protobuf type google.cloud.eventarc.publishing.v1.PublishChannelConnectionEventsRequest
Inheritance
Object >
AbstractMessageLite<MessageType,BuilderType> >
AbstractMessage >
GeneratedMessage >
PublishChannelConnectionEventsRequest
Implements
PublishChannelConnectionEventsRequestOrBuilder
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
CHANNEL_CONNECTION_FIELD_NUMBER
public static final int CHANNEL_CONNECTION_FIELD_NUMBER
Field Value
Type
Description
int
EVENTS_FIELD_NUMBER
public static final int EVENTS_FIELD_NUMBER
Field Value
Type
Description
int
TEXT_EVENTS_FIELD_NUMBER
public static final int TEXT_EVENTS_FIELD_NUMBER
Field Value
Type
Description
int
Static Methods
getDefaultInstance()
public static PublishChannelConnectionEventsRequest getDefaultInstance ()
Returns
Type
Description
PublishChannelConnectionEventsRequest
getDescriptor()
public static final Descriptors . Descriptor getDescriptor ()
Returns
Type
Description
Descriptor
newBuilder()
public static PublishChannelConnectionEventsRequest . Builder newBuilder ()
Returns
Type
Description
PublishChannelConnectionEventsRequest.Builder
newBuilder(PublishChannelConnectionEventsRequest prototype)
public static PublishChannelConnectionEventsRequest . Builder newBuilder ( PublishChannelConnectionEventsRequest prototype )
Parameter
Name
Description
prototype
PublishChannelConnectionEventsRequest
Returns
Type
Description
PublishChannelConnectionEventsRequest.Builder
parseDelimitedFrom(InputStream input)
public static PublishChannelConnectionEventsRequest parseDelimitedFrom ( InputStream input )
Parameter
Name
Description
input
InputStream
Returns
Type
Description
PublishChannelConnectionEventsRequest
Exceptions
Type
Description
IOException
parseDelimitedFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
public static PublishChannelConnectionEventsRequest parseDelimitedFrom ( InputStream input , ExtensionRegistryLite extensionRegistry )
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
PublishChannelConnectionEventsRequest
Exceptions
Type
Description
IOException
parseFrom(byte[] data)
public static PublishChannelConnectionEventsRequest parseFrom ( byte [] data )
Parameter
Name
Description
data
byte []
Returns
Type
Description
PublishChannelConnectionEventsRequest
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(byte[] data, ExtensionRegistryLite extensionRegistry)
public static PublishChannelConnectionEventsRequest parseFrom ( byte [] data , ExtensionRegistryLite extensionRegistry )
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
PublishChannelConnectionEventsRequest
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteString data)
public static PublishChannelConnectionEventsRequest parseFrom ( ByteString data )
Parameter
Name
Description
data
ByteString
Returns
Type
Description
PublishChannelConnectionEventsRequest
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteString data, ExtensionRegistryLite extensionRegistry)
public static PublishChannelConnectionEventsRequest parseFrom ( ByteString data , ExtensionRegistryLite extensionRegistry )
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
PublishChannelConnectionEventsRequest
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(CodedInputStream input)
public static PublishChannelConnectionEventsRequest parseFrom ( CodedInputStream input )
Parameter
Name
Description
input
CodedInputStream
Returns
Type
Description
PublishChannelConnectionEventsRequest
Exceptions
Type
Description
IOException
parseFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public static PublishChannelConnectionEventsRequest parseFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
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
PublishChannelConnectionEventsRequest
Exceptions
Type
Description
IOException
parseFrom(InputStream input)
public static PublishChannelConnectionEventsRequest parseFrom ( InputStream input )
Parameter
Name
Description
input
InputStream
Returns
Type
Description
PublishChannelConnectionEventsRequest
Exceptions
Type
Description
IOException
parseFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
public static PublishChannelConnectionEventsRequest parseFrom ( InputStream input , ExtensionRegistryLite extensionRegistry )
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
PublishChannelConnectionEventsRequest
Exceptions
Type
Description
IOException
parseFrom(ByteBuffer data)
public static PublishChannelConnectionEventsRequest parseFrom ( ByteBuffer data )
Parameter
Name
Description
data
ByteBuffer
Returns
Type
Description
PublishChannelConnectionEventsRequest
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteBuffer data, ExtensionRegistryLite extensionRegistry)
public static PublishChannelConnectionEventsRequest parseFrom ( ByteBuffer data , ExtensionRegistryLite extensionRegistry )
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
PublishChannelConnectionEventsRequest
Exceptions
Type
Description
InvalidProtocolBufferException
parser()
public static Parser<PublishChannelConnectionEventsRequest> parser ()
Returns
Type
Description
Parser < PublishChannelConnectionEventsRequest >
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
getChannelConnection()
public String getChannelConnection ()
The channel_connection that the events are published from. For example:
projects/{partner_project_id}/locations/{location}/channelConnections/{channel_connection_id} .
string channel_connection = 1;
Returns
Type
Description
String
The channelConnection.
getChannelConnectionBytes()
public ByteString getChannelConnectionBytes ()
The channel_connection that the events are published from. For example:
projects/{partner_project_id}/locations/{location}/channelConnections/{channel_connection_id} .
string channel_connection = 1;
Returns
Type
Description
ByteString
The bytes for channelConnection.
getDefaultInstanceForType()
public PublishChannelConnectionEventsRequest getDefaultInstanceForType ()
Returns
Type
Description
PublishChannelConnectionEventsRequest
getEvents(int index)
public Any getEvents ( int index )
The CloudEvents v1.0 events to publish. No other types are allowed.
If this field is set, then the text_events fields must not be set.
repeated .google.protobuf.Any events = 2;
Parameter
Name
Description
index
int
Returns
Type
Description
Any
getEventsCount()
public int getEventsCount ()
The CloudEvents v1.0 events to publish. No other types are allowed.
If this field is set, then the text_events fields must not be set.
repeated .google.protobuf.Any events = 2;
Returns
Type
Description
int
getEventsList()
public List<Any> getEventsList ()
The CloudEvents v1.0 events to publish. No other types are allowed.
If this field is set, then the text_events fields must not be set.
repeated .google.protobuf.Any events = 2;
Returns
Type
Description
List < Any >
getEventsOrBuilder(int index)
public AnyOrBuilder getEventsOrBuilder ( int index )
The CloudEvents v1.0 events to publish. No other types are allowed.
If this field is set, then the text_events fields must not be set.
repeated .google.protobuf.Any events = 2;
Parameter
Name
Description
index
int
Returns
Type
Description
AnyOrBuilder
getEventsOrBuilderList()
public List < ? extends AnyOrBuilder > getEventsOrBuilderList ()
The CloudEvents v1.0 events to publish. No other types are allowed.
If this field is set, then the text_events fields must not be set.
repeated .google.protobuf.Any events = 2;
Returns
Type
Description
List < ? extends com.google.protobuf.AnyOrBuilder >
getParserForType()
public Parser<PublishChannelConnectionEventsRequest> getParserForType ()
Returns
Type
Description
Parser < PublishChannelConnectionEventsRequest >
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
getTextEvents(int index)
public String getTextEvents ( int index )
The text representation of events to publish.
CloudEvent v1.0 in JSON format is the only allowed type. Refer to
https://github.com/cloudevents/spec/blob/v1.0.2/cloudevents/formats/json-format.md
for specification.
If this field is set, then the events fields must not be set.
repeated string text_events = 3;
Parameter
Name
Description
index
int The index of the element to return.
Returns
Type
Description
String
The textEvents at the given index.
getTextEventsBytes(int index)
public ByteString getTextEventsBytes ( int index )
The text representation of events to publish.
CloudEvent v1.0 in JSON format is the only allowed type. Refer to
https://github.com/cloudevents/spec/blob/v1.0.2/cloudevents/formats/json-format.md
for specification.
If this field is set, then the events fields must not be set.
repeated string text_events = 3;
Parameter
Name
Description
index
int The index of the value to return.
Returns
Type
Description
ByteString
The bytes of the textEvents at the given index.
getTextEventsCount()
public int getTextEventsCount ()
The text representation of events to publish.
CloudEvent v1.0 in JSON format is the only allowed type. Refer to
https://github.com/cloudevents/spec/blob/v1.0.2/cloudevents/formats/json-format.md
for specification.
If this field is set, then the events fields must not be set.
repeated string text_events = 3;
Returns
Type
Description
int
The count of textEvents.
getTextEventsList()
public ProtocolStringList getTextEventsList ()
The text representation of events to publish.
CloudEvent v1.0 in JSON format is the only allowed type. Refer to
https://github.com/cloudevents/spec/blob/v1.0.2/cloudevents/formats/json-format.md
for specification.
If this field is set, then the events fields must not be set.
repeated string text_events = 3;
Returns
Type
Description
ProtocolStringList
A list containing the textEvents.
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
public PublishChannelConnectionEventsRequest . Builder newBuilderForType ()
Returns
Type
Description
PublishChannelConnectionEventsRequest.Builder
newBuilderForType(AbstractMessage.BuilderParent parent)
protected PublishChannelConnectionEventsRequest . Builder newBuilderForType ( AbstractMessage . BuilderParent parent )
Parameter
Name
Description
parent
BuilderParent
Returns
Type
Description
PublishChannelConnectionEventsRequest.Builder
Overrides
AbstractMessage.newBuilderForType(AbstractMessage.BuilderParent parent)
toBuilder()
public PublishChannelConnectionEventsRequest . Builder toBuilder ()
Returns
Type
Description
PublishChannelConnectionEventsRequest.Builder
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
