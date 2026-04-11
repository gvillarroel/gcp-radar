---
title: "Class AnnotateFileResponse (3.86.0) \_|\_ Java client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-vision/latest/com.google.cloud.vision.v1.AnnotateFileResponse
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-vision/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-vision/latest/com.google.cloud.vision.v1.AnnotateFileResponse
  title: "Class AnnotateFileResponse (3.86.0) \_|\_ Java client libraries \_|\_ Google\
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
Class AnnotateFileResponse (3.86.0)
Stay organized with collections
Save and categorize content based on your preferences.
3.86.0 (latest)
3.85.0
3.83.0
3.81.0
3.80.0
3.78.0
3.76.0
3.74.0
3.73.0
3.72.0
3.71.0
3.70.0
3.68.0
3.66.0
3.65.0
3.62.0
3.61.0
3.60.0
3.58.0
3.57.0
3.56.0
3.55.0
3.54.0
3.53.0
3.52.0
3.51.0
3.50.0
3.49.0
3.47.0
3.46.0
3.45.0
3.44.0
3.43.0
3.42.0
3.41.0
3.40.0
3.39.0
3.38.0
3.37.0
3.35.0
3.34.0
3.33.0
3.32.0
3.31.0
3.30.0
3.29.0
3.28.0
3.27.0
3.26.0
3.25.0
3.22.0
3.21.0
3.20.0
3.19.0
3.18.0
3.17.0
3.16.0
3.15.0
3.14.0
3.13.0
3.12.0
3.11.0
3.10.0
3.9.0
3.7.0
3.6.0
3.5.0
3.4.0
3.3.0
3.2.0
3.1.3
2.1.4
2.0.29
public final class AnnotateFileResponse extends GeneratedMessage implements AnnotateFileResponseOrBuilder
Response to a single file annotation request. A file may contain one or more
images, which individually have their own responses.
Protobuf type google.cloud.vision.v1.AnnotateFileResponse
Inheritance
Object >
AbstractMessageLite<MessageType,BuilderType> >
AbstractMessage >
GeneratedMessage >
AnnotateFileResponse
Implements
AnnotateFileResponseOrBuilder
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
INPUT_CONFIG_FIELD_NUMBER
public static final int INPUT_CONFIG_FIELD_NUMBER
Field Value
Type
Description
int
RESPONSES_FIELD_NUMBER
public static final int RESPONSES_FIELD_NUMBER
Field Value
Type
Description
int
TOTAL_PAGES_FIELD_NUMBER
public static final int TOTAL_PAGES_FIELD_NUMBER
Field Value
Type
Description
int
Static Methods
getDefaultInstance()
public static AnnotateFileResponse getDefaultInstance ()
Returns
Type
Description
AnnotateFileResponse
getDescriptor()
public static final Descriptors . Descriptor getDescriptor ()
Returns
Type
Description
Descriptor
newBuilder()
public static AnnotateFileResponse . Builder newBuilder ()
Returns
Type
Description
AnnotateFileResponse.Builder
newBuilder(AnnotateFileResponse prototype)
public static AnnotateFileResponse . Builder newBuilder ( AnnotateFileResponse prototype )
Parameter
Name
Description
prototype
AnnotateFileResponse
Returns
Type
Description
AnnotateFileResponse.Builder
parseDelimitedFrom(InputStream input)
public static AnnotateFileResponse parseDelimitedFrom ( InputStream input )
Parameter
Name
Description
input
InputStream
Returns
Type
Description
AnnotateFileResponse
Exceptions
Type
Description
IOException
parseDelimitedFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
public static AnnotateFileResponse parseDelimitedFrom ( InputStream input , ExtensionRegistryLite extensionRegistry )
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
AnnotateFileResponse
Exceptions
Type
Description
IOException
parseFrom(byte[] data)
public static AnnotateFileResponse parseFrom ( byte [] data )
Parameter
Name
Description
data
byte []
Returns
Type
Description
AnnotateFileResponse
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(byte[] data, ExtensionRegistryLite extensionRegistry)
public static AnnotateFileResponse parseFrom ( byte [] data , ExtensionRegistryLite extensionRegistry )
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
AnnotateFileResponse
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteString data)
public static AnnotateFileResponse parseFrom ( ByteString data )
Parameter
Name
Description
data
ByteString
Returns
Type
Description
AnnotateFileResponse
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteString data, ExtensionRegistryLite extensionRegistry)
public static AnnotateFileResponse parseFrom ( ByteString data , ExtensionRegistryLite extensionRegistry )
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
AnnotateFileResponse
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(CodedInputStream input)
public static AnnotateFileResponse parseFrom ( CodedInputStream input )
Parameter
Name
Description
input
CodedInputStream
Returns
Type
Description
AnnotateFileResponse
Exceptions
Type
Description
IOException
parseFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public static AnnotateFileResponse parseFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
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
AnnotateFileResponse
Exceptions
Type
Description
IOException
parseFrom(InputStream input)
public static AnnotateFileResponse parseFrom ( InputStream input )
Parameter
Name
Description
input
InputStream
Returns
Type
Description
AnnotateFileResponse
Exceptions
Type
Description
IOException
parseFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
public static AnnotateFileResponse parseFrom ( InputStream input , ExtensionRegistryLite extensionRegistry )
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
AnnotateFileResponse
Exceptions
Type
Description
IOException
parseFrom(ByteBuffer data)
public static AnnotateFileResponse parseFrom ( ByteBuffer data )
Parameter
Name
Description
data
ByteBuffer
Returns
Type
Description
AnnotateFileResponse
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteBuffer data, ExtensionRegistryLite extensionRegistry)
public static AnnotateFileResponse parseFrom ( ByteBuffer data , ExtensionRegistryLite extensionRegistry )
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
AnnotateFileResponse
Exceptions
Type
Description
InvalidProtocolBufferException
parser()
public static Parser<AnnotateFileResponse> parser ()
Returns
Type
Description
Parser < AnnotateFileResponse >
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
public AnnotateFileResponse getDefaultInstanceForType ()
Returns
Type
Description
AnnotateFileResponse
getError()
public Status getError ()
If set, represents the error message for the failed request. The
responses field will not be set in this case.
.google.rpc.Status error = 4;
Returns
Type
Description
com.google.rpc.Status
The error.
getErrorOrBuilder()
public StatusOrBuilder getErrorOrBuilder ()
If set, represents the error message for the failed request. The
responses field will not be set in this case.
.google.rpc.Status error = 4;
Returns
Type
Description
com.google.rpc.StatusOrBuilder
getInputConfig()
public InputConfig getInputConfig ()
Information about the file for which this response is generated.
.google.cloud.vision.v1.InputConfig input_config = 1;
Returns
Type
Description
InputConfig
The inputConfig.
getInputConfigOrBuilder()
public InputConfigOrBuilder getInputConfigOrBuilder ()
Information about the file for which this response is generated.
.google.cloud.vision.v1.InputConfig input_config = 1;
Returns
Type
Description
InputConfigOrBuilder
getParserForType()
public Parser<AnnotateFileResponse> getParserForType ()
Returns
Type
Description
Parser < AnnotateFileResponse >
Overrides
GeneratedMessage.getParserForType()
getResponses(int index)
public AnnotateImageResponse getResponses ( int index )
Individual responses to images found within the file. This field will be
empty if the error field is set.
repeated .google.cloud.vision.v1.AnnotateImageResponse responses = 2;
Parameter
Name
Description
index
int
Returns
Type
Description
AnnotateImageResponse
getResponsesCount()
public int getResponsesCount ()
Individual responses to images found within the file. This field will be
empty if the error field is set.
repeated .google.cloud.vision.v1.AnnotateImageResponse responses = 2;
Returns
Type
Description
int
getResponsesList()
public List<AnnotateImageResponse> getResponsesList ()
Individual responses to images found within the file. This field will be
empty if the error field is set.
repeated .google.cloud.vision.v1.AnnotateImageResponse responses = 2;
Returns
Type
Description
List < AnnotateImageResponse >
getResponsesOrBuilder(int index)
public AnnotateImageResponseOrBuilder getResponsesOrBuilder ( int index )
Individual responses to images found within the file. This field will be
empty if the error field is set.
repeated .google.cloud.vision.v1.AnnotateImageResponse responses = 2;
Parameter
Name
Description
index
int
Returns
Type
Description
AnnotateImageResponseOrBuilder
getResponsesOrBuilderList()
public List < ? extends AnnotateImageResponseOrBuilder > getResponsesOrBuilderList ()
Individual responses to images found within the file. This field will be
empty if the error field is set.
repeated .google.cloud.vision.v1.AnnotateImageResponse responses = 2;
Returns
Type
Description
List < ? extends com.google.cloud.vision.v1.AnnotateImageResponseOrBuilder >
getSerializedSize()
public int getSerializedSize ()
Returns
Type
Description
int
Overrides
GeneratedMessage.getSerializedSize()
getTotalPages()
public int getTotalPages ()
This field gives the total number of pages in the file.
int32 total_pages = 3;
Returns
Type
Description
int
The totalPages.
hasError()
public boolean hasError ()
If set, represents the error message for the failed request. The
responses field will not be set in this case.
.google.rpc.Status error = 4;
Returns
Type
Description
boolean
Whether the error field is set.
hasInputConfig()
public boolean hasInputConfig ()
Information about the file for which this response is generated.
.google.cloud.vision.v1.InputConfig input_config = 1;
Returns
Type
Description
boolean
Whether the inputConfig field is set.
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
public AnnotateFileResponse . Builder newBuilderForType ()
Returns
Type
Description
AnnotateFileResponse.Builder
newBuilderForType(AbstractMessage.BuilderParent parent)
protected AnnotateFileResponse . Builder newBuilderForType ( AbstractMessage . BuilderParent parent )
Parameter
Name
Description
parent
BuilderParent
Returns
Type
Description
AnnotateFileResponse.Builder
Overrides
AbstractMessage.newBuilderForType(AbstractMessage.BuilderParent parent)
toBuilder()
public AnnotateFileResponse . Builder toBuilder ()
Returns
Type
Description
AnnotateFileResponse.Builder
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
