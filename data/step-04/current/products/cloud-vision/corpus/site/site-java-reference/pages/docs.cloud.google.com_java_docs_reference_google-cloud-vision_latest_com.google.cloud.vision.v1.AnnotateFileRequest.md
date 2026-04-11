---
title: "Class AnnotateFileRequest (3.86.0) \_|\_ Java client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-vision/latest/com.google.cloud.vision.v1.AnnotateFileRequest
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-vision/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-vision/latest/com.google.cloud.vision.v1.AnnotateFileRequest
  title: "Class AnnotateFileRequest (3.86.0) \_|\_ Java client libraries \_|\_ Google\
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
Class AnnotateFileRequest (3.86.0)
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
public final class AnnotateFileRequest extends GeneratedMessage implements AnnotateFileRequestOrBuilder
A request to annotate one single file, e.g. a PDF, TIFF or GIF file.
Protobuf type google.cloud.vision.v1.AnnotateFileRequest
Inheritance
Object >
AbstractMessageLite<MessageType,BuilderType> >
AbstractMessage >
GeneratedMessage >
AnnotateFileRequest
Implements
AnnotateFileRequestOrBuilder
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
FEATURES_FIELD_NUMBER
public static final int FEATURES_FIELD_NUMBER
Field Value
Type
Description
int
IMAGE_CONTEXT_FIELD_NUMBER
public static final int IMAGE_CONTEXT_FIELD_NUMBER
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
PAGES_FIELD_NUMBER
public static final int PAGES_FIELD_NUMBER
Field Value
Type
Description
int
Static Methods
getDefaultInstance()
public static AnnotateFileRequest getDefaultInstance ()
Returns
Type
Description
AnnotateFileRequest
getDescriptor()
public static final Descriptors . Descriptor getDescriptor ()
Returns
Type
Description
Descriptor
newBuilder()
public static AnnotateFileRequest . Builder newBuilder ()
Returns
Type
Description
AnnotateFileRequest.Builder
newBuilder(AnnotateFileRequest prototype)
public static AnnotateFileRequest . Builder newBuilder ( AnnotateFileRequest prototype )
Parameter
Name
Description
prototype
AnnotateFileRequest
Returns
Type
Description
AnnotateFileRequest.Builder
parseDelimitedFrom(InputStream input)
public static AnnotateFileRequest parseDelimitedFrom ( InputStream input )
Parameter
Name
Description
input
InputStream
Returns
Type
Description
AnnotateFileRequest
Exceptions
Type
Description
IOException
parseDelimitedFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
public static AnnotateFileRequest parseDelimitedFrom ( InputStream input , ExtensionRegistryLite extensionRegistry )
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
AnnotateFileRequest
Exceptions
Type
Description
IOException
parseFrom(byte[] data)
public static AnnotateFileRequest parseFrom ( byte [] data )
Parameter
Name
Description
data
byte []
Returns
Type
Description
AnnotateFileRequest
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(byte[] data, ExtensionRegistryLite extensionRegistry)
public static AnnotateFileRequest parseFrom ( byte [] data , ExtensionRegistryLite extensionRegistry )
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
AnnotateFileRequest
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteString data)
public static AnnotateFileRequest parseFrom ( ByteString data )
Parameter
Name
Description
data
ByteString
Returns
Type
Description
AnnotateFileRequest
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteString data, ExtensionRegistryLite extensionRegistry)
public static AnnotateFileRequest parseFrom ( ByteString data , ExtensionRegistryLite extensionRegistry )
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
AnnotateFileRequest
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(CodedInputStream input)
public static AnnotateFileRequest parseFrom ( CodedInputStream input )
Parameter
Name
Description
input
CodedInputStream
Returns
Type
Description
AnnotateFileRequest
Exceptions
Type
Description
IOException
parseFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public static AnnotateFileRequest parseFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
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
AnnotateFileRequest
Exceptions
Type
Description
IOException
parseFrom(InputStream input)
public static AnnotateFileRequest parseFrom ( InputStream input )
Parameter
Name
Description
input
InputStream
Returns
Type
Description
AnnotateFileRequest
Exceptions
Type
Description
IOException
parseFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
public static AnnotateFileRequest parseFrom ( InputStream input , ExtensionRegistryLite extensionRegistry )
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
AnnotateFileRequest
Exceptions
Type
Description
IOException
parseFrom(ByteBuffer data)
public static AnnotateFileRequest parseFrom ( ByteBuffer data )
Parameter
Name
Description
data
ByteBuffer
Returns
Type
Description
AnnotateFileRequest
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteBuffer data, ExtensionRegistryLite extensionRegistry)
public static AnnotateFileRequest parseFrom ( ByteBuffer data , ExtensionRegistryLite extensionRegistry )
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
AnnotateFileRequest
Exceptions
Type
Description
InvalidProtocolBufferException
parser()
public static Parser<AnnotateFileRequest> parser ()
Returns
Type
Description
Parser < AnnotateFileRequest >
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
public AnnotateFileRequest getDefaultInstanceForType ()
Returns
Type
Description
AnnotateFileRequest
getFeatures(int index)
public Feature getFeatures ( int index )
Required. Requested features.
repeated .google.cloud.vision.v1.Feature features = 2;
Parameter
Name
Description
index
int
Returns
Type
Description
Feature
getFeaturesCount()
public int getFeaturesCount ()
Required. Requested features.
repeated .google.cloud.vision.v1.Feature features = 2;
Returns
Type
Description
int
getFeaturesList()
public List<Feature> getFeaturesList ()
Required. Requested features.
repeated .google.cloud.vision.v1.Feature features = 2;
Returns
Type
Description
List < Feature >
getFeaturesOrBuilder(int index)
public FeatureOrBuilder getFeaturesOrBuilder ( int index )
Required. Requested features.
repeated .google.cloud.vision.v1.Feature features = 2;
Parameter
Name
Description
index
int
Returns
Type
Description
FeatureOrBuilder
getFeaturesOrBuilderList()
public List < ? extends FeatureOrBuilder > getFeaturesOrBuilderList ()
Required. Requested features.
repeated .google.cloud.vision.v1.Feature features = 2;
Returns
Type
Description
List < ? extends com.google.cloud.vision.v1.FeatureOrBuilder >
getImageContext()
public ImageContext getImageContext ()
Additional context that may accompany the image(s) in the file.
.google.cloud.vision.v1.ImageContext image_context = 3;
Returns
Type
Description
ImageContext
The imageContext.
getImageContextOrBuilder()
public ImageContextOrBuilder getImageContextOrBuilder ()
Additional context that may accompany the image(s) in the file.
.google.cloud.vision.v1.ImageContext image_context = 3;
Returns
Type
Description
ImageContextOrBuilder
getInputConfig()
public InputConfig getInputConfig ()
Required. Information about the input file.
.google.cloud.vision.v1.InputConfig input_config = 1;
Returns
Type
Description
InputConfig
The inputConfig.
getInputConfigOrBuilder()
public InputConfigOrBuilder getInputConfigOrBuilder ()
Required. Information about the input file.
.google.cloud.vision.v1.InputConfig input_config = 1;
Returns
Type
Description
InputConfigOrBuilder
getPages(int index)
public int getPages ( int index )
Pages of the file to perform image annotation.
Pages starts from 1, we assume the first page of the file is page 1.
At most 5 pages are supported per request. Pages can be negative.
Page 1 means the first page.
Page 2 means the second page.
Page -1 means the last page.
Page -2 means the second to the last page.
If the file is GIF instead of PDF or TIFF, page refers to GIF frames.
If this field is empty, by default the service performs image annotation
for the first 5 pages of the file.
repeated int32 pages = 4;
Parameter
Name
Description
index
int The index of the element to return.
Returns
Type
Description
int
The pages at the given index.
getPagesCount()
public int getPagesCount ()
Pages of the file to perform image annotation.
Pages starts from 1, we assume the first page of the file is page 1.
At most 5 pages are supported per request. Pages can be negative.
Page 1 means the first page.
Page 2 means the second page.
Page -1 means the last page.
Page -2 means the second to the last page.
If the file is GIF instead of PDF or TIFF, page refers to GIF frames.
If this field is empty, by default the service performs image annotation
for the first 5 pages of the file.
repeated int32 pages = 4;
Returns
Type
Description
int
The count of pages.
getPagesList()
public List<Integer> getPagesList ()
Pages of the file to perform image annotation.
Pages starts from 1, we assume the first page of the file is page 1.
At most 5 pages are supported per request. Pages can be negative.
Page 1 means the first page.
Page 2 means the second page.
Page -1 means the last page.
Page -2 means the second to the last page.
If the file is GIF instead of PDF or TIFF, page refers to GIF frames.
If this field is empty, by default the service performs image annotation
for the first 5 pages of the file.
repeated int32 pages = 4;
Returns
Type
Description
List < Integer >
A list containing the pages.
getParserForType()
public Parser<AnnotateFileRequest> getParserForType ()
Returns
Type
Description
Parser < AnnotateFileRequest >
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
hasImageContext()
public boolean hasImageContext ()
Additional context that may accompany the image(s) in the file.
.google.cloud.vision.v1.ImageContext image_context = 3;
Returns
Type
Description
boolean
Whether the imageContext field is set.
hasInputConfig()
public boolean hasInputConfig ()
Required. Information about the input file.
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
public AnnotateFileRequest . Builder newBuilderForType ()
Returns
Type
Description
AnnotateFileRequest.Builder
newBuilderForType(AbstractMessage.BuilderParent parent)
protected AnnotateFileRequest . Builder newBuilderForType ( AbstractMessage . BuilderParent parent )
Parameter
Name
Description
parent
BuilderParent
Returns
Type
Description
AnnotateFileRequest.Builder
Overrides
AbstractMessage.newBuilderForType(AbstractMessage.BuilderParent parent)
toBuilder()
public AnnotateFileRequest . Builder toBuilder ()
Returns
Type
Description
AnnotateFileRequest.Builder
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
