---
title: "Class PublishRequest (0.88.0) \_|\_ Java client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-eventarc-publishing/latest/com.google.cloud.eventarc.publishing.v1.PublishRequest
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-eventarc-publishing/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-eventarc-publishing/latest/com.google.cloud.eventarc.publishing.v1.PublishRequest
  title: "Class PublishRequest (0.88.0) \_|\_ Java client libraries \_|\_ Google Cloud\
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
Class PublishRequest (0.88.0)
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
public final class PublishRequest extends GeneratedMessage implements PublishRequestOrBuilder
The request message for the Publish method.
Protobuf type google.cloud.eventarc.publishing.v1.PublishRequest
Inheritance
Object >
AbstractMessageLite<MessageType,BuilderType> >
AbstractMessage >
GeneratedMessage >
PublishRequest
Implements
PublishRequestOrBuilder
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
AVRO_MESSAGE_FIELD_NUMBER
public static final int AVRO_MESSAGE_FIELD_NUMBER
Field Value
Type
Description
int
JSON_MESSAGE_FIELD_NUMBER
public static final int JSON_MESSAGE_FIELD_NUMBER
Field Value
Type
Description
int
MESSAGE_BUS_FIELD_NUMBER
public static final int MESSAGE_BUS_FIELD_NUMBER
Field Value
Type
Description
int
PROTO_MESSAGE_FIELD_NUMBER
public static final int PROTO_MESSAGE_FIELD_NUMBER
Field Value
Type
Description
int
Static Methods
getDefaultInstance()
public static PublishRequest getDefaultInstance ()
Returns
Type
Description
PublishRequest
getDescriptor()
public static final Descriptors . Descriptor getDescriptor ()
Returns
Type
Description
Descriptor
newBuilder()
public static PublishRequest . Builder newBuilder ()
Returns
Type
Description
PublishRequest.Builder
newBuilder(PublishRequest prototype)
public static PublishRequest . Builder newBuilder ( PublishRequest prototype )
Parameter
Name
Description
prototype
PublishRequest
Returns
Type
Description
PublishRequest.Builder
parseDelimitedFrom(InputStream input)
public static PublishRequest parseDelimitedFrom ( InputStream input )
Parameter
Name
Description
input
InputStream
Returns
Type
Description
PublishRequest
Exceptions
Type
Description
IOException
parseDelimitedFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
public static PublishRequest parseDelimitedFrom ( InputStream input , ExtensionRegistryLite extensionRegistry )
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
PublishRequest
Exceptions
Type
Description
IOException
parseFrom(byte[] data)
public static PublishRequest parseFrom ( byte [] data )
Parameter
Name
Description
data
byte []
Returns
Type
Description
PublishRequest
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(byte[] data, ExtensionRegistryLite extensionRegistry)
public static PublishRequest parseFrom ( byte [] data , ExtensionRegistryLite extensionRegistry )
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
PublishRequest
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteString data)
public static PublishRequest parseFrom ( ByteString data )
Parameter
Name
Description
data
ByteString
Returns
Type
Description
PublishRequest
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteString data, ExtensionRegistryLite extensionRegistry)
public static PublishRequest parseFrom ( ByteString data , ExtensionRegistryLite extensionRegistry )
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
PublishRequest
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(CodedInputStream input)
public static PublishRequest parseFrom ( CodedInputStream input )
Parameter
Name
Description
input
CodedInputStream
Returns
Type
Description
PublishRequest
Exceptions
Type
Description
IOException
parseFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public static PublishRequest parseFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
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
PublishRequest
Exceptions
Type
Description
IOException
parseFrom(InputStream input)
public static PublishRequest parseFrom ( InputStream input )
Parameter
Name
Description
input
InputStream
Returns
Type
Description
PublishRequest
Exceptions
Type
Description
IOException
parseFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
public static PublishRequest parseFrom ( InputStream input , ExtensionRegistryLite extensionRegistry )
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
PublishRequest
Exceptions
Type
Description
IOException
parseFrom(ByteBuffer data)
public static PublishRequest parseFrom ( ByteBuffer data )
Parameter
Name
Description
data
ByteBuffer
Returns
Type
Description
PublishRequest
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteBuffer data, ExtensionRegistryLite extensionRegistry)
public static PublishRequest parseFrom ( ByteBuffer data , ExtensionRegistryLite extensionRegistry )
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
PublishRequest
Exceptions
Type
Description
InvalidProtocolBufferException
parser()
public static Parser<PublishRequest> parser ()
Returns
Type
Description
Parser < PublishRequest >
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
getAvroMessage()
public ByteString getAvroMessage ()
The Avro format of the CloudEvent being published. Specification can
be found here:
https://github.com/cloudevents/spec/blob/v1.0.2/cloudevents/formats/avro-format.md
bytes avro_message = 4;
Returns
Type
Description
ByteString
The avroMessage.
getDefaultInstanceForType()
public PublishRequest getDefaultInstanceForType ()
Returns
Type
Description
PublishRequest
getFormatCase()
public PublishRequest . FormatCase getFormatCase ()
Returns
Type
Description
PublishRequest.FormatCase
getJsonMessage()
public String getJsonMessage ()
The JSON format of the CloudEvent being published. Specification can be
found here:
https://github.com/cloudevents/spec/blob/v1.0.2/cloudevents/formats/json-format.md
string json_message = 3;
Returns
Type
Description
String
The jsonMessage.
getJsonMessageBytes()
public ByteString getJsonMessageBytes ()
The JSON format of the CloudEvent being published. Specification can be
found here:
https://github.com/cloudevents/spec/blob/v1.0.2/cloudevents/formats/json-format.md
string json_message = 3;
Returns
Type
Description
ByteString
The bytes for jsonMessage.
getMessageBus()
public String getMessageBus ()
Required. The full name of the message bus to publish events to. Format:
projects/{project}/locations/{location}/messageBuses/{messageBus} .
string message_bus = 1 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
String
The messageBus.
getMessageBusBytes()
public ByteString getMessageBusBytes ()
Required. The full name of the message bus to publish events to. Format:
projects/{project}/locations/{location}/messageBuses/{messageBus} .
string message_bus = 1 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
ByteString
The bytes for messageBus.
getParserForType()
public Parser<PublishRequest> getParserForType ()
Returns
Type
Description
Parser < PublishRequest >
Overrides
GeneratedMessage.getParserForType()
getProtoMessage()
public CloudEvent getProtoMessage ()
The Protobuf format of the CloudEvent being published. Specification can
be found here:
https://github.com/cloudevents/spec/blob/v1.0.2/cloudevents/formats/protobuf-format.md
.google.cloud.eventarc.publishing.v1.CloudEvent proto_message = 2;
Returns
Type
Description
CloudEvent
The protoMessage.
getProtoMessageOrBuilder()
public CloudEventOrBuilder getProtoMessageOrBuilder ()
The Protobuf format of the CloudEvent being published. Specification can
be found here:
https://github.com/cloudevents/spec/blob/v1.0.2/cloudevents/formats/protobuf-format.md
.google.cloud.eventarc.publishing.v1.CloudEvent proto_message = 2;
Returns
Type
Description
CloudEventOrBuilder
getSerializedSize()
public int getSerializedSize ()
Returns
Type
Description
int
Overrides
GeneratedMessage.getSerializedSize()
hasAvroMessage()
public boolean hasAvroMessage ()
The Avro format of the CloudEvent being published. Specification can
be found here:
https://github.com/cloudevents/spec/blob/v1.0.2/cloudevents/formats/avro-format.md
bytes avro_message = 4;
Returns
Type
Description
boolean
Whether the avroMessage field is set.
hasJsonMessage()
public boolean hasJsonMessage ()
The JSON format of the CloudEvent being published. Specification can be
found here:
https://github.com/cloudevents/spec/blob/v1.0.2/cloudevents/formats/json-format.md
string json_message = 3;
Returns
Type
Description
boolean
Whether the jsonMessage field is set.
hasProtoMessage()
public boolean hasProtoMessage ()
The Protobuf format of the CloudEvent being published. Specification can
be found here:
https://github.com/cloudevents/spec/blob/v1.0.2/cloudevents/formats/protobuf-format.md
.google.cloud.eventarc.publishing.v1.CloudEvent proto_message = 2;
Returns
Type
Description
boolean
Whether the protoMessage field is set.
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
public PublishRequest . Builder newBuilderForType ()
Returns
Type
Description
PublishRequest.Builder
newBuilderForType(AbstractMessage.BuilderParent parent)
protected PublishRequest . Builder newBuilderForType ( AbstractMessage . BuilderParent parent )
Parameter
Name
Description
parent
BuilderParent
Returns
Type
Description
PublishRequest.Builder
Overrides
AbstractMessage.newBuilderForType(AbstractMessage.BuilderParent parent)
toBuilder()
public PublishRequest . Builder toBuilder ()
Returns
Type
Description
PublishRequest.Builder
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
