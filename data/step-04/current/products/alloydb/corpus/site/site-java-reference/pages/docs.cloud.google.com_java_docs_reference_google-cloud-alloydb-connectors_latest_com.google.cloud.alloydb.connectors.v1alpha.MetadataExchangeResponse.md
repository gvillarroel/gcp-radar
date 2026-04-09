---
title: "Class MetadataExchangeResponse (0.66.0) \_|\_ Java client libraries \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-alloydb-connectors/latest/com.google.cloud.alloydb.connectors.v1alpha.MetadataExchangeResponse
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-alloydb-connectors/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-alloydb-connectors/latest/com.google.cloud.alloydb.connectors.v1alpha.MetadataExchangeResponse
  title: "Class MetadataExchangeResponse (0.66.0) \_|\_ Java client libraries \_|\_\
    \ Google Cloud Documentation"
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
Class MetadataExchangeResponse (0.66.0)
Stay organized with collections
Save and categorize content based on your preferences.
0.66.0 (latest)
0.65.0
0.63.0
0.61.0
0.60.0
0.59.0
0.58.0
0.56.0
0.54.0
0.53.0
0.52.0
0.51.0
0.50.0
0.48.0
0.46.0
0.45.0
0.42.0
0.41.0
0.40.0
0.38.0
0.37.0
0.36.0
0.35.0
0.34.0
0.33.0
0.32.0
0.31.0
0.30.0
0.29.0
0.27.0
0.26.0
0.25.0
0.24.0
0.23.0
0.22.0
0.21.0
0.20.0
0.19.0
0.18.0
0.17.0
0.15.0
0.14.0
0.13.0
0.12.0
0.11.0
0.10.0
0.9.0
0.8.0
0.7.0
0.6.0
0.5.0
0.2.0
0.1.0
public final class MetadataExchangeResponse extends GeneratedMessage implements MetadataExchangeResponseOrBuilder
Message for response to metadata exchange request. The sole purpose of this
message is for the use of AlloyDB connectors. Clients should not rely on this
message directly as there can be breaking changes in the future.
Protobuf type google.cloud.alloydb.connectors.v1alpha.MetadataExchangeResponse
Inheritance
Object >
AbstractMessageLite<MessageType,BuilderType> >
AbstractMessage >
GeneratedMessage >
MetadataExchangeResponse
Implements
MetadataExchangeResponseOrBuilder
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
ERROR_FIELD_NUMBER
public static final int ERROR_FIELD_NUMBER
Field Value
Type
Description
int
RESPONSE_CODE_FIELD_NUMBER
public static final int RESPONSE_CODE_FIELD_NUMBER
Field Value
Type
Description
int
Static Methods
getDefaultInstance()
public static MetadataExchangeResponse getDefaultInstance ()
Returns
Type
Description
MetadataExchangeResponse
getDescriptor()
public static final Descriptors . Descriptor getDescriptor ()
Returns
Type
Description
Descriptor
newBuilder()
public static MetadataExchangeResponse . Builder newBuilder ()
Returns
Type
Description
MetadataExchangeResponse.Builder
newBuilder(MetadataExchangeResponse prototype)
public static MetadataExchangeResponse . Builder newBuilder ( MetadataExchangeResponse prototype )
Parameter
Name
Description
prototype
MetadataExchangeResponse
Returns
Type
Description
MetadataExchangeResponse.Builder
parseDelimitedFrom(InputStream input)
public static MetadataExchangeResponse parseDelimitedFrom ( InputStream input )
Parameter
Name
Description
input
InputStream
Returns
Type
Description
MetadataExchangeResponse
Exceptions
Type
Description
IOException
parseDelimitedFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
public static MetadataExchangeResponse parseDelimitedFrom ( InputStream input , ExtensionRegistryLite extensionRegistry )
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
MetadataExchangeResponse
Exceptions
Type
Description
IOException
parseFrom(byte[] data)
public static MetadataExchangeResponse parseFrom ( byte [] data )
Parameter
Name
Description
data
byte []
Returns
Type
Description
MetadataExchangeResponse
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(byte[] data, ExtensionRegistryLite extensionRegistry)
public static MetadataExchangeResponse parseFrom ( byte [] data , ExtensionRegistryLite extensionRegistry )
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
MetadataExchangeResponse
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteString data)
public static MetadataExchangeResponse parseFrom ( ByteString data )
Parameter
Name
Description
data
ByteString
Returns
Type
Description
MetadataExchangeResponse
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteString data, ExtensionRegistryLite extensionRegistry)
public static MetadataExchangeResponse parseFrom ( ByteString data , ExtensionRegistryLite extensionRegistry )
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
MetadataExchangeResponse
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(CodedInputStream input)
public static MetadataExchangeResponse parseFrom ( CodedInputStream input )
Parameter
Name
Description
input
CodedInputStream
Returns
Type
Description
MetadataExchangeResponse
Exceptions
Type
Description
IOException
parseFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public static MetadataExchangeResponse parseFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
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
MetadataExchangeResponse
Exceptions
Type
Description
IOException
parseFrom(InputStream input)
public static MetadataExchangeResponse parseFrom ( InputStream input )
Parameter
Name
Description
input
InputStream
Returns
Type
Description
MetadataExchangeResponse
Exceptions
Type
Description
IOException
parseFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
public static MetadataExchangeResponse parseFrom ( InputStream input , ExtensionRegistryLite extensionRegistry )
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
MetadataExchangeResponse
Exceptions
Type
Description
IOException
parseFrom(ByteBuffer data)
public static MetadataExchangeResponse parseFrom ( ByteBuffer data )
Parameter
Name
Description
data
ByteBuffer
Returns
Type
Description
MetadataExchangeResponse
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteBuffer data, ExtensionRegistryLite extensionRegistry)
public static MetadataExchangeResponse parseFrom ( ByteBuffer data , ExtensionRegistryLite extensionRegistry )
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
MetadataExchangeResponse
Exceptions
Type
Description
InvalidProtocolBufferException
parser()
public static Parser<MetadataExchangeResponse> parser ()
Returns
Type
Description
Parser < MetadataExchangeResponse >
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
public MetadataExchangeResponse getDefaultInstanceForType ()
Returns
Type
Description
MetadataExchangeResponse
getError()
public String getError ()
Optional. Error message.
string error = 2 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
String
The error.
getErrorBytes()
public ByteString getErrorBytes ()
Optional. Error message.
string error = 2 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
ByteString
The bytes for error.
getParserForType()
public Parser<MetadataExchangeResponse> getParserForType ()
Returns
Type
Description
Parser < MetadataExchangeResponse >
Overrides
GeneratedMessage.getParserForType()
getResponseCode()
public MetadataExchangeResponse . ResponseCode getResponseCode ()
Response code.
.google.cloud.alloydb.connectors.v1alpha.MetadataExchangeResponse.ResponseCode response_code = 1;
Returns
Type
Description
MetadataExchangeResponse.ResponseCode
The responseCode.
getResponseCodeValue()
public int getResponseCodeValue ()
Response code.
.google.cloud.alloydb.connectors.v1alpha.MetadataExchangeResponse.ResponseCode response_code = 1;
Returns
Type
Description
int
The enum numeric value on the wire for responseCode.
getSerializedSize()
public int getSerializedSize ()
Returns
Type
Description
int
Overrides
GeneratedMessage.getSerializedSize()
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
public MetadataExchangeResponse . Builder newBuilderForType ()
Returns
Type
Description
MetadataExchangeResponse.Builder
newBuilderForType(AbstractMessage.BuilderParent parent)
protected MetadataExchangeResponse . Builder newBuilderForType ( AbstractMessage . BuilderParent parent )
Parameter
Name
Description
parent
BuilderParent
Returns
Type
Description
MetadataExchangeResponse.Builder
Overrides
AbstractMessage.newBuilderForType(AbstractMessage.BuilderParent parent)
toBuilder()
public MetadataExchangeResponse . Builder toBuilder ()
Returns
Type
Description
MetadataExchangeResponse.Builder
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
Last updated 2026-03-29 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-29 UTC."],[],[]]
