---
title: "Class CloudEvent (0.88.0) \_|\_ Java client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-eventarc-publishing/latest/com.google.cloud.eventarc.publishing.v1.CloudEvent
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-eventarc-publishing/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-eventarc-publishing/latest/com.google.cloud.eventarc.publishing.v1.CloudEvent
  title: "Class CloudEvent (0.88.0) \_|\_ Java client libraries \_|\_ Google Cloud\
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
Class CloudEvent (0.88.0)
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
public final class CloudEvent extends GeneratedMessage implements CloudEventOrBuilder
CloudEvent represents a vendor-neutral specification for defining the format
of event data.
Protobuf type google.cloud.eventarc.publishing.v1.CloudEvent
Inheritance
Object >
AbstractMessageLite<MessageType,BuilderType> >
AbstractMessage >
GeneratedMessage >
CloudEvent
Implements
CloudEventOrBuilder
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
ATTRIBUTES_FIELD_NUMBER
public static final int ATTRIBUTES_FIELD_NUMBER
Field Value
Type
Description
int
BINARY_DATA_FIELD_NUMBER
public static final int BINARY_DATA_FIELD_NUMBER
Field Value
Type
Description
int
ID_FIELD_NUMBER
public static final int ID_FIELD_NUMBER
Field Value
Type
Description
int
PROTO_DATA_FIELD_NUMBER
public static final int PROTO_DATA_FIELD_NUMBER
Field Value
Type
Description
int
SOURCE_FIELD_NUMBER
public static final int SOURCE_FIELD_NUMBER
Field Value
Type
Description
int
SPEC_VERSION_FIELD_NUMBER
public static final int SPEC_VERSION_FIELD_NUMBER
Field Value
Type
Description
int
TEXT_DATA_FIELD_NUMBER
public static final int TEXT_DATA_FIELD_NUMBER
Field Value
Type
Description
int
TYPE_FIELD_NUMBER
public static final int TYPE_FIELD_NUMBER
Field Value
Type
Description
int
Static Methods
getDefaultInstance()
public static CloudEvent getDefaultInstance ()
Returns
Type
Description
CloudEvent
getDescriptor()
public static final Descriptors . Descriptor getDescriptor ()
Returns
Type
Description
Descriptor
newBuilder()
public static CloudEvent . Builder newBuilder ()
Returns
Type
Description
CloudEvent.Builder
newBuilder(CloudEvent prototype)
public static CloudEvent . Builder newBuilder ( CloudEvent prototype )
Parameter
Name
Description
prototype
CloudEvent
Returns
Type
Description
CloudEvent.Builder
parseDelimitedFrom(InputStream input)
public static CloudEvent parseDelimitedFrom ( InputStream input )
Parameter
Name
Description
input
InputStream
Returns
Type
Description
CloudEvent
Exceptions
Type
Description
IOException
parseDelimitedFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
public static CloudEvent parseDelimitedFrom ( InputStream input , ExtensionRegistryLite extensionRegistry )
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
CloudEvent
Exceptions
Type
Description
IOException
parseFrom(byte[] data)
public static CloudEvent parseFrom ( byte [] data )
Parameter
Name
Description
data
byte []
Returns
Type
Description
CloudEvent
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(byte[] data, ExtensionRegistryLite extensionRegistry)
public static CloudEvent parseFrom ( byte [] data , ExtensionRegistryLite extensionRegistry )
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
CloudEvent
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteString data)
public static CloudEvent parseFrom ( ByteString data )
Parameter
Name
Description
data
ByteString
Returns
Type
Description
CloudEvent
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteString data, ExtensionRegistryLite extensionRegistry)
public static CloudEvent parseFrom ( ByteString data , ExtensionRegistryLite extensionRegistry )
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
CloudEvent
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(CodedInputStream input)
public static CloudEvent parseFrom ( CodedInputStream input )
Parameter
Name
Description
input
CodedInputStream
Returns
Type
Description
CloudEvent
Exceptions
Type
Description
IOException
parseFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public static CloudEvent parseFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
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
CloudEvent
Exceptions
Type
Description
IOException
parseFrom(InputStream input)
public static CloudEvent parseFrom ( InputStream input )
Parameter
Name
Description
input
InputStream
Returns
Type
Description
CloudEvent
Exceptions
Type
Description
IOException
parseFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
public static CloudEvent parseFrom ( InputStream input , ExtensionRegistryLite extensionRegistry )
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
CloudEvent
Exceptions
Type
Description
IOException
parseFrom(ByteBuffer data)
public static CloudEvent parseFrom ( ByteBuffer data )
Parameter
Name
Description
data
ByteBuffer
Returns
Type
Description
CloudEvent
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteBuffer data, ExtensionRegistryLite extensionRegistry)
public static CloudEvent parseFrom ( ByteBuffer data , ExtensionRegistryLite extensionRegistry )
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
CloudEvent
Exceptions
Type
Description
InvalidProtocolBufferException
parser()
public static Parser<CloudEvent> parser ()
Returns
Type
Description
Parser < CloudEvent >
Methods
containsAttributes(String key)
public boolean containsAttributes ( String key )
Optional. Used for Optional & Extension Attributes
map<string, .google.cloud.eventarc.publishing.v1.CloudEvent.CloudEventAttributeValue> attributes = 5 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
key
String
Returns
Type
Description
boolean
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
getAttributes() (deprecated)
public Map<String , CloudEvent . CloudEventAttributeValue > getAttributes ()
Use #getAttributesMap() instead.
Returns
Type
Description
Map < String , CloudEventAttributeValue >
getAttributesCount()
public int getAttributesCount ()
Optional. Used for Optional & Extension Attributes
map<string, .google.cloud.eventarc.publishing.v1.CloudEvent.CloudEventAttributeValue> attributes = 5 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
int
getAttributesMap()
public Map<String , CloudEvent . CloudEventAttributeValue > getAttributesMap ()
Optional. Used for Optional & Extension Attributes
map<string, .google.cloud.eventarc.publishing.v1.CloudEvent.CloudEventAttributeValue> attributes = 5 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
Map < String , CloudEventAttributeValue >
getAttributesOrDefault(String key, CloudEvent.CloudEventAttributeValue defaultValue)
public CloudEvent . CloudEventAttributeValue getAttributesOrDefault ( String key , CloudEvent . CloudEventAttributeValue defaultValue )
Optional. Used for Optional & Extension Attributes
map<string, .google.cloud.eventarc.publishing.v1.CloudEvent.CloudEventAttributeValue> attributes = 5 [(.google.api.field_behavior) = OPTIONAL];
Parameters
Name
Description
key
String
defaultValue
CloudEvent.CloudEventAttributeValue
Returns
Type
Description
CloudEvent.CloudEventAttributeValue
getAttributesOrThrow(String key)
public CloudEvent . CloudEventAttributeValue getAttributesOrThrow ( String key )
Optional. Used for Optional & Extension Attributes
map<string, .google.cloud.eventarc.publishing.v1.CloudEvent.CloudEventAttributeValue> attributes = 5 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
key
String
Returns
Type
Description
CloudEvent.CloudEventAttributeValue
getBinaryData()
public ByteString getBinaryData ()
Optional. Binary data.
bytes binary_data = 6 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
ByteString
The binaryData.
getDataCase()
public CloudEvent . DataCase getDataCase ()
Returns
Type
Description
CloudEvent.DataCase
getDefaultInstanceForType()
public CloudEvent getDefaultInstanceForType ()
Returns
Type
Description
CloudEvent
getId()
public String getId ()
Required. Identifies the event. Producers MUST ensure that source + id is
unique for each distinct event.
string id = 1 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
String
The id.
getIdBytes()
public ByteString getIdBytes ()
Required. Identifies the event. Producers MUST ensure that source + id is
unique for each distinct event.
string id = 1 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
ByteString
The bytes for id.
getParserForType()
public Parser<CloudEvent> getParserForType ()
Returns
Type
Description
Parser < CloudEvent >
Overrides
GeneratedMessage.getParserForType()
getProtoData()
public Any getProtoData ()
Optional. Proto data.
NOTE: The protoData field only functions as expected when the payload
is specifically a CloudEvent message type, and can't be used for
arbitrary protocol buffer messages. For any other protocol buffer type,
you must serialize your proto message into bytes, and use the
binaryData field instead.
.google.protobuf.Any proto_data = 8 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
Any
The protoData.
getProtoDataOrBuilder()
public AnyOrBuilder getProtoDataOrBuilder ()
Optional. Proto data.
NOTE: The protoData field only functions as expected when the payload
is specifically a CloudEvent message type, and can't be used for
arbitrary protocol buffer messages. For any other protocol buffer type,
you must serialize your proto message into bytes, and use the
binaryData field instead.
.google.protobuf.Any proto_data = 8 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
AnyOrBuilder
getSerializedSize()
public int getSerializedSize ()
Returns
Type
Description
int
Overrides
GeneratedMessage.getSerializedSize()
getSource()
public String getSource ()
Required. Identifies the context in which an event happened.
URI-reference
string source = 2 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
String
The source.
getSourceBytes()
public ByteString getSourceBytes ()
Required. Identifies the context in which an event happened.
URI-reference
string source = 2 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
ByteString
The bytes for source.
getSpecVersion()
public String getSpecVersion ()
Required. The version of the CloudEvents specification which the event
uses.
string spec_version = 3 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
String
The specVersion.
getSpecVersionBytes()
public ByteString getSpecVersionBytes ()
Required. The version of the CloudEvents specification which the event
uses.
string spec_version = 3 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
ByteString
The bytes for specVersion.
getTextData()
public String getTextData ()
Optional. Text data.
string text_data = 7 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
String
The textData.
getTextDataBytes()
public ByteString getTextDataBytes ()
Optional. Text data.
string text_data = 7 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
ByteString
The bytes for textData.
getType()
public String getType ()
Required. This attribute contains a value describing the type of event
related to the originating occurrence.
string type = 4 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
String
The type.
getTypeBytes()
public ByteString getTypeBytes ()
Required. This attribute contains a value describing the type of event
related to the originating occurrence.
string type = 4 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
ByteString
The bytes for type.
hasBinaryData()
public boolean hasBinaryData ()
Optional. Binary data.
bytes binary_data = 6 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
boolean
Whether the binaryData field is set.
hasProtoData()
public boolean hasProtoData ()
Optional. Proto data.
NOTE: The protoData field only functions as expected when the payload
is specifically a CloudEvent message type, and can't be used for
arbitrary protocol buffer messages. For any other protocol buffer type,
you must serialize your proto message into bytes, and use the
binaryData field instead.
.google.protobuf.Any proto_data = 8 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
boolean
Whether the protoData field is set.
hasTextData()
public boolean hasTextData ()
Optional. Text data.
string text_data = 7 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
boolean
Whether the textData field is set.
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
internalGetMapFieldReflection(int number)
protected MapFieldReflectionAccessor internalGetMapFieldReflection ( int number )
Parameter
Name
Description
number
int
Returns
Type
Description
com.google.protobuf.MapFieldReflectionAccessor
Overrides
com.google.protobuf.GeneratedMessage.internalGetMapFieldReflection(int)
isInitialized()
public final boolean isInitialized ()
Returns
Type
Description
boolean
Overrides
GeneratedMessage.isInitialized()
newBuilderForType()
public CloudEvent . Builder newBuilderForType ()
Returns
Type
Description
CloudEvent.Builder
newBuilderForType(AbstractMessage.BuilderParent parent)
protected CloudEvent . Builder newBuilderForType ( AbstractMessage . BuilderParent parent )
Parameter
Name
Description
parent
BuilderParent
Returns
Type
Description
CloudEvent.Builder
Overrides
AbstractMessage.newBuilderForType(AbstractMessage.BuilderParent parent)
toBuilder()
public CloudEvent . Builder toBuilder ()
Returns
Type
Description
CloudEvent.Builder
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
