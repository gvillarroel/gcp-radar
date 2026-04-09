---
title: "Class CancelWorkflowInvocationRequest (0.87.0) \_|\_ Java client libraries\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-dataform/latest/com.google.cloud.dataform.v1.CancelWorkflowInvocationRequest
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-dataform/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-dataform/latest/com.google.cloud.dataform.v1.CancelWorkflowInvocationRequest
  title: "Class CancelWorkflowInvocationRequest (0.87.0) \_|\_ Java client libraries\
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
Class CancelWorkflowInvocationRequest (0.87.0)
Stay organized with collections
Save and categorize content based on your preferences.
0.87.0 (latest)
0.86.0
0.84.0
0.82.0
0.81.0
0.80.0
0.79.0
0.77.0
0.75.0
0.74.0
0.73.0
0.72.0
0.71.0
0.69.0
0.67.0
0.66.0
0.63.0
0.62.0
0.61.0
0.59.0
0.58.0
0.57.0
0.56.0
0.55.0
0.54.0
0.53.0
0.52.0
0.51.0
0.50.0
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
0.38.0
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
0.26.0
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
0.10.0
0.8.0
0.7.0
0.6.0
0.5.0
0.4.0
0.3.0
0.2.4
public final class CancelWorkflowInvocationRequest extends GeneratedMessage implements CancelWorkflowInvocationRequestOrBuilder
CancelWorkflowInvocation request message.
Protobuf type google.cloud.dataform.v1.CancelWorkflowInvocationRequest
Inheritance
Object >
AbstractMessageLite<MessageType,BuilderType> >
AbstractMessage >
GeneratedMessage >
CancelWorkflowInvocationRequest
Implements
CancelWorkflowInvocationRequestOrBuilder
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
NAME_FIELD_NUMBER
public static final int NAME_FIELD_NUMBER
Field Value
Type
Description
int
Static Methods
getDefaultInstance()
public static CancelWorkflowInvocationRequest getDefaultInstance ()
Returns
Type
Description
CancelWorkflowInvocationRequest
getDescriptor()
public static final Descriptors . Descriptor getDescriptor ()
Returns
Type
Description
Descriptor
newBuilder()
public static CancelWorkflowInvocationRequest . Builder newBuilder ()
Returns
Type
Description
CancelWorkflowInvocationRequest.Builder
newBuilder(CancelWorkflowInvocationRequest prototype)
public static CancelWorkflowInvocationRequest . Builder newBuilder ( CancelWorkflowInvocationRequest prototype )
Parameter
Name
Description
prototype
CancelWorkflowInvocationRequest
Returns
Type
Description
CancelWorkflowInvocationRequest.Builder
parseDelimitedFrom(InputStream input)
public static CancelWorkflowInvocationRequest parseDelimitedFrom ( InputStream input )
Parameter
Name
Description
input
InputStream
Returns
Type
Description
CancelWorkflowInvocationRequest
Exceptions
Type
Description
IOException
parseDelimitedFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
public static CancelWorkflowInvocationRequest parseDelimitedFrom ( InputStream input , ExtensionRegistryLite extensionRegistry )
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
CancelWorkflowInvocationRequest
Exceptions
Type
Description
IOException
parseFrom(byte[] data)
public static CancelWorkflowInvocationRequest parseFrom ( byte [] data )
Parameter
Name
Description
data
byte []
Returns
Type
Description
CancelWorkflowInvocationRequest
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(byte[] data, ExtensionRegistryLite extensionRegistry)
public static CancelWorkflowInvocationRequest parseFrom ( byte [] data , ExtensionRegistryLite extensionRegistry )
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
CancelWorkflowInvocationRequest
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteString data)
public static CancelWorkflowInvocationRequest parseFrom ( ByteString data )
Parameter
Name
Description
data
ByteString
Returns
Type
Description
CancelWorkflowInvocationRequest
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteString data, ExtensionRegistryLite extensionRegistry)
public static CancelWorkflowInvocationRequest parseFrom ( ByteString data , ExtensionRegistryLite extensionRegistry )
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
CancelWorkflowInvocationRequest
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(CodedInputStream input)
public static CancelWorkflowInvocationRequest parseFrom ( CodedInputStream input )
Parameter
Name
Description
input
CodedInputStream
Returns
Type
Description
CancelWorkflowInvocationRequest
Exceptions
Type
Description
IOException
parseFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public static CancelWorkflowInvocationRequest parseFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
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
CancelWorkflowInvocationRequest
Exceptions
Type
Description
IOException
parseFrom(InputStream input)
public static CancelWorkflowInvocationRequest parseFrom ( InputStream input )
Parameter
Name
Description
input
InputStream
Returns
Type
Description
CancelWorkflowInvocationRequest
Exceptions
Type
Description
IOException
parseFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
public static CancelWorkflowInvocationRequest parseFrom ( InputStream input , ExtensionRegistryLite extensionRegistry )
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
CancelWorkflowInvocationRequest
Exceptions
Type
Description
IOException
parseFrom(ByteBuffer data)
public static CancelWorkflowInvocationRequest parseFrom ( ByteBuffer data )
Parameter
Name
Description
data
ByteBuffer
Returns
Type
Description
CancelWorkflowInvocationRequest
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteBuffer data, ExtensionRegistryLite extensionRegistry)
public static CancelWorkflowInvocationRequest parseFrom ( ByteBuffer data , ExtensionRegistryLite extensionRegistry )
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
CancelWorkflowInvocationRequest
Exceptions
Type
Description
InvalidProtocolBufferException
parser()
public static Parser<CancelWorkflowInvocationRequest> parser ()
Returns
Type
Description
Parser < CancelWorkflowInvocationRequest >
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
public CancelWorkflowInvocationRequest getDefaultInstanceForType ()
Returns
Type
Description
CancelWorkflowInvocationRequest
getName()
public String getName ()
Required. The workflow invocation resource's name.
string name = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }
Returns
Type
Description
String
The name.
getNameBytes()
public ByteString getNameBytes ()
Required. The workflow invocation resource's name.
string name = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }
Returns
Type
Description
ByteString
The bytes for name.
getParserForType()
public Parser<CancelWorkflowInvocationRequest> getParserForType ()
Returns
Type
Description
Parser < CancelWorkflowInvocationRequest >
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
public CancelWorkflowInvocationRequest . Builder newBuilderForType ()
Returns
Type
Description
CancelWorkflowInvocationRequest.Builder
newBuilderForType(AbstractMessage.BuilderParent parent)
protected CancelWorkflowInvocationRequest . Builder newBuilderForType ( AbstractMessage . BuilderParent parent )
Parameter
Name
Description
parent
BuilderParent
Returns
Type
Description
CancelWorkflowInvocationRequest.Builder
Overrides
AbstractMessage.newBuilderForType(AbstractMessage.BuilderParent parent)
toBuilder()
public CancelWorkflowInvocationRequest . Builder toBuilder ()
Returns
Type
Description
CancelWorkflowInvocationRequest.Builder
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
