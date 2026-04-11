---
title: "Class AcceleratorConfig (4.85.0) \_|\_ Java client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AcceleratorConfig
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AcceleratorConfig
  title: "Class AcceleratorConfig (4.85.0) \_|\_ Java client libraries \_|\_ Google\
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
Class AcceleratorConfig (4.85.0)
Stay organized with collections
Save and categorize content based on your preferences.
4.85.0 (latest)
4.84.0
4.82.0
4.80.0
4.79.0
4.78.0
4.77.0
4.75.0
4.73.0
4.72.0
4.71.0
4.70.0
4.69.0
4.67.0
4.65.0
4.64.0
4.61.0
4.60.0
4.59.0
4.57.0
4.56.0
4.55.0
4.54.0
4.53.0
4.52.0
4.51.0
4.50.0
4.49.0
4.48.0
4.46.0
4.45.0
4.44.0
4.43.0
4.42.0
4.41.0
4.40.0
4.39.0
4.38.0
4.37.0
4.36.0
4.34.0
4.33.0
4.32.0
4.31.0
4.30.0
4.29.0
4.28.0
4.27.0
4.26.0
4.25.0
4.24.0
4.21.0
4.20.0
4.19.0
4.18.0
4.17.0
4.16.0
4.15.0
4.14.0
4.13.0
4.12.0
4.11.0
4.10.0
4.9.0
4.8.0
4.6.0
4.5.0
4.4.0
4.3.0
4.2.0
4.1.0
4.0.8
3.1.2
3.0.3
2.3.1
public final class AcceleratorConfig extends GeneratedMessage implements AcceleratorConfigOrBuilder
Specifies the type and number of accelerator cards attached to the instances
of an instance. See GPUs on Compute
Engine .
Protobuf type google.cloud.dataproc.v1.AcceleratorConfig
Inheritance
Object >
AbstractMessageLite<MessageType,BuilderType> >
AbstractMessage >
GeneratedMessage >
AcceleratorConfig
Implements
AcceleratorConfigOrBuilder
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
ACCELERATOR_COUNT_FIELD_NUMBER
public static final int ACCELERATOR_COUNT_FIELD_NUMBER
Field Value
Type
Description
int
ACCELERATOR_TYPE_URI_FIELD_NUMBER
public static final int ACCELERATOR_TYPE_URI_FIELD_NUMBER
Field Value
Type
Description
int
Static Methods
getDefaultInstance()
public static AcceleratorConfig getDefaultInstance ()
Returns
Type
Description
AcceleratorConfig
getDescriptor()
public static final Descriptors . Descriptor getDescriptor ()
Returns
Type
Description
Descriptor
newBuilder()
public static AcceleratorConfig . Builder newBuilder ()
Returns
Type
Description
AcceleratorConfig.Builder
newBuilder(AcceleratorConfig prototype)
public static AcceleratorConfig . Builder newBuilder ( AcceleratorConfig prototype )
Parameter
Name
Description
prototype
AcceleratorConfig
Returns
Type
Description
AcceleratorConfig.Builder
parseDelimitedFrom(InputStream input)
public static AcceleratorConfig parseDelimitedFrom ( InputStream input )
Parameter
Name
Description
input
InputStream
Returns
Type
Description
AcceleratorConfig
Exceptions
Type
Description
IOException
parseDelimitedFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
public static AcceleratorConfig parseDelimitedFrom ( InputStream input , ExtensionRegistryLite extensionRegistry )
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
AcceleratorConfig
Exceptions
Type
Description
IOException
parseFrom(byte[] data)
public static AcceleratorConfig parseFrom ( byte [] data )
Parameter
Name
Description
data
byte []
Returns
Type
Description
AcceleratorConfig
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(byte[] data, ExtensionRegistryLite extensionRegistry)
public static AcceleratorConfig parseFrom ( byte [] data , ExtensionRegistryLite extensionRegistry )
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
AcceleratorConfig
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteString data)
public static AcceleratorConfig parseFrom ( ByteString data )
Parameter
Name
Description
data
ByteString
Returns
Type
Description
AcceleratorConfig
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteString data, ExtensionRegistryLite extensionRegistry)
public static AcceleratorConfig parseFrom ( ByteString data , ExtensionRegistryLite extensionRegistry )
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
AcceleratorConfig
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(CodedInputStream input)
public static AcceleratorConfig parseFrom ( CodedInputStream input )
Parameter
Name
Description
input
CodedInputStream
Returns
Type
Description
AcceleratorConfig
Exceptions
Type
Description
IOException
parseFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public static AcceleratorConfig parseFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
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
AcceleratorConfig
Exceptions
Type
Description
IOException
parseFrom(InputStream input)
public static AcceleratorConfig parseFrom ( InputStream input )
Parameter
Name
Description
input
InputStream
Returns
Type
Description
AcceleratorConfig
Exceptions
Type
Description
IOException
parseFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
public static AcceleratorConfig parseFrom ( InputStream input , ExtensionRegistryLite extensionRegistry )
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
AcceleratorConfig
Exceptions
Type
Description
IOException
parseFrom(ByteBuffer data)
public static AcceleratorConfig parseFrom ( ByteBuffer data )
Parameter
Name
Description
data
ByteBuffer
Returns
Type
Description
AcceleratorConfig
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteBuffer data, ExtensionRegistryLite extensionRegistry)
public static AcceleratorConfig parseFrom ( ByteBuffer data , ExtensionRegistryLite extensionRegistry )
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
AcceleratorConfig
Exceptions
Type
Description
InvalidProtocolBufferException
parser()
public static Parser<AcceleratorConfig> parser ()
Returns
Type
Description
Parser < AcceleratorConfig >
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
getAcceleratorCount()
public int getAcceleratorCount ()
The number of the accelerator cards of this type exposed to this instance.
int32 accelerator_count = 2;
Returns
Type
Description
int
The acceleratorCount.
getAcceleratorTypeUri()
public String getAcceleratorTypeUri ()
Full URL, partial URI, or short name of the accelerator type resource to
expose to this instance. See
Compute Engine
AcceleratorTypes .
Examples:
https://www.googleapis.com/compute/v1/projects/[project_id]/zones/[zone]/acceleratorTypes/nvidia-tesla-t4
projects/[project_id]/zones/[zone]/acceleratorTypes/nvidia-tesla-t4
nvidia-tesla-t4
Auto Zone Exception : If you are using the Dataproc
Auto Zone
Placement
feature, you must use the short name of the accelerator type
resource, for example, nvidia-tesla-t4 .
string accelerator_type_uri = 1;
Returns
Type
Description
String
The acceleratorTypeUri.
getAcceleratorTypeUriBytes()
public ByteString getAcceleratorTypeUriBytes ()
Full URL, partial URI, or short name of the accelerator type resource to
expose to this instance. See
Compute Engine
AcceleratorTypes .
Examples:
https://www.googleapis.com/compute/v1/projects/[project_id]/zones/[zone]/acceleratorTypes/nvidia-tesla-t4
projects/[project_id]/zones/[zone]/acceleratorTypes/nvidia-tesla-t4
nvidia-tesla-t4
Auto Zone Exception : If you are using the Dataproc
Auto Zone
Placement
feature, you must use the short name of the accelerator type
resource, for example, nvidia-tesla-t4 .
string accelerator_type_uri = 1;
Returns
Type
Description
ByteString
The bytes for acceleratorTypeUri.
getDefaultInstanceForType()
public AcceleratorConfig getDefaultInstanceForType ()
Returns
Type
Description
AcceleratorConfig
getParserForType()
public Parser<AcceleratorConfig> getParserForType ()
Returns
Type
Description
Parser < AcceleratorConfig >
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
public AcceleratorConfig . Builder newBuilderForType ()
Returns
Type
Description
AcceleratorConfig.Builder
newBuilderForType(AbstractMessage.BuilderParent parent)
protected AcceleratorConfig . Builder newBuilderForType ( AbstractMessage . BuilderParent parent )
Parameter
Name
Description
parent
BuilderParent
Returns
Type
Description
AcceleratorConfig.Builder
Overrides
AbstractMessage.newBuilderForType(AbstractMessage.BuilderParent parent)
toBuilder()
public AcceleratorConfig . Builder toBuilder ()
Returns
Type
Description
AcceleratorConfig.Builder
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
