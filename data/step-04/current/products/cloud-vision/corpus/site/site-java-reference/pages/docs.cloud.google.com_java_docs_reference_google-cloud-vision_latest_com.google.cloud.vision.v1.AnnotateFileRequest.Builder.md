---
title: "Class AnnotateFileRequest.Builder (3.86.0) \_|\_ Java client libraries \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-vision/latest/com.google.cloud.vision.v1.AnnotateFileRequest.Builder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-vision/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-vision/latest/com.google.cloud.vision.v1.AnnotateFileRequest.Builder
  title: "Class AnnotateFileRequest.Builder (3.86.0) \_|\_ Java client libraries \_\
    |\_ Google Cloud Documentation"
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
Class AnnotateFileRequest.Builder (3.86.0)
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
public static final class AnnotateFileRequest . Builder extends GeneratedMessage . Builder<AnnotateFileRequest . Builder > implements AnnotateFileRequestOrBuilder
A request to annotate one single file, e.g. a PDF, TIFF or GIF file.
Protobuf type google.cloud.vision.v1.AnnotateFileRequest
Inheritance
java.lang.Object >
AbstractMessageLite.Builder<MessageType,BuilderType> >
AbstractMessage.Builder<BuilderType> >
GeneratedMessage.Builder >
AnnotateFileRequest.Builder
Implements
AnnotateFileRequestOrBuilder
Inherited Members
AbstractMessage.Builder.findInitializationErrors()
AbstractMessage.Builder.getInitializationErrorString()
AbstractMessage.Builder.internalMergeFrom(AbstractMessageLite)
AbstractMessage.Builder.mergeFrom(byte[])
AbstractMessage.Builder.mergeFrom(byte[],ExtensionRegistryLite)
AbstractMessage.Builder.mergeFrom(byte[],int,int)
AbstractMessage.Builder.mergeFrom(byte[],int,int,ExtensionRegistryLite)
AbstractMessage.Builder.mergeFrom(ByteString)
AbstractMessage.Builder.mergeFrom(ByteString,ExtensionRegistryLite)
AbstractMessage.Builder.mergeFrom(CodedInputStream)
AbstractMessage.Builder.mergeFrom(CodedInputStream,ExtensionRegistryLite)
AbstractMessage.Builder.mergeFrom(Message)
AbstractMessage.Builder.mergeFrom(InputStream)
AbstractMessage.Builder.mergeFrom(InputStream,ExtensionRegistryLite)
AbstractMessage.Builder.newUninitializedMessageException(Message)
AbstractMessage.Builder.toString()
AbstractMessageLite.Builder.<T>addAll(Iterable<T>,Collection<? super T>)
AbstractMessageLite.Builder.<T>addAll(Iterable<T>,List<? super T>)
AbstractMessageLite.Builder.internalMergeFrom(MessageType)
AbstractMessageLite.Builder.mergeDelimitedFrom(InputStream)
AbstractMessageLite.Builder.mergeDelimitedFrom(InputStream,ExtensionRegistryLite)
AbstractMessageLite.Builder.mergeFrom(MessageLite)
AbstractMessageLite.Builder.newUninitializedMessageException(MessageLite)
GeneratedMessage.Builder.addRepeatedField(Descriptors.FieldDescriptor,Object)
GeneratedMessage.Builder.clear()
GeneratedMessage.Builder.clearField(Descriptors.FieldDescriptor)
GeneratedMessage.Builder.clearOneof(Descriptors.OneofDescriptor)
GeneratedMessage.Builder.clone()
GeneratedMessage.Builder.getAllFields()
GeneratedMessage.Builder.getDescriptorForType()
GeneratedMessage.Builder.getField(Descriptors.FieldDescriptor)
GeneratedMessage.Builder.getFieldBuilder(Descriptors.FieldDescriptor)
GeneratedMessage.Builder.getOneofFieldDescriptor(Descriptors.OneofDescriptor)
GeneratedMessage.Builder.getParentForChildren()
GeneratedMessage.Builder.getRepeatedField(Descriptors.FieldDescriptor,int)
GeneratedMessage.Builder.getRepeatedFieldBuilder(Descriptors.FieldDescriptor,int)
GeneratedMessage.Builder.getRepeatedFieldCount(Descriptors.FieldDescriptor)
com.google.protobuf.GeneratedMessage.Builder.getUnknownFieldSetBuilder()
GeneratedMessage.Builder.getUnknownFields()
GeneratedMessage.Builder.hasField(Descriptors.FieldDescriptor)
GeneratedMessage.Builder.hasOneof(Descriptors.OneofDescriptor)
GeneratedMessage.Builder.internalGetFieldAccessorTable()
GeneratedMessage.Builder.internalGetMapField(int)
com.google.protobuf.GeneratedMessage.Builder.internalGetMapFieldReflection(int)
GeneratedMessage.Builder.internalGetMutableMapField(int)
com.google.protobuf.GeneratedMessage.Builder.internalGetMutableMapFieldReflection(int)
GeneratedMessage.Builder.isClean()
GeneratedMessage.Builder.isInitialized()
GeneratedMessage.Builder.markClean()
GeneratedMessage.Builder.mergeUnknownFields(UnknownFieldSet)
com.google.protobuf.GeneratedMessage.Builder.mergeUnknownLengthDelimitedField(int,com.google.protobuf.ByteString)
com.google.protobuf.GeneratedMessage.Builder.mergeUnknownVarintField(int,int)
GeneratedMessage.Builder.newBuilderForField(Descriptors.FieldDescriptor)
GeneratedMessage.Builder.onBuilt()
GeneratedMessage.Builder.onChanged()
com.google.protobuf.GeneratedMessage.Builder.parseUnknownField(com.google.protobuf.CodedInputStream,com.google.protobuf.ExtensionRegistryLite,int)
GeneratedMessage.Builder.setField(Descriptors.FieldDescriptor,Object)
GeneratedMessage.Builder.setRepeatedField(Descriptors.FieldDescriptor,int,Object)
com.google.protobuf.GeneratedMessage.Builder.setUnknownFieldSetBuilder(com.google.protobuf.UnknownFieldSet.Builder)
GeneratedMessage.Builder.setUnknownFields(UnknownFieldSet)
com.google.protobuf.GeneratedMessage.Builder.setUnknownFieldsProto3(com.google.protobuf.UnknownFieldSet)
Object.equals(Object)
Object.finalize()
Object.getClass()
Object.hashCode()
Object.notify()
Object.notifyAll()
Object.wait()
Object.wait(long)
Object.wait(long,int)
Static Methods
getDescriptor()
public static final Descriptors . Descriptor getDescriptor ()
Returns
Type
Description
Descriptor
Methods
addAllFeatures(Iterable<? extends Feature> values)
public AnnotateFileRequest . Builder addAllFeatures ( Iterable < ? extends Feature > values )
Required. Requested features.
repeated .google.cloud.vision.v1.Feature features = 2;
Parameter
Name
Description
values
Iterable < ? extends com.google.cloud.vision.v1.Feature >
Returns
Type
Description
AnnotateFileRequest.Builder
addAllPages(Iterable<? extends Integer> values)
public AnnotateFileRequest . Builder addAllPages ( Iterable < ? extends Integer > values )
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
values
Iterable < ? extends java.lang.Integer > The pages to add.
Returns
Type
Description
AnnotateFileRequest.Builder
This builder for chaining.
addFeatures(Feature value)
public AnnotateFileRequest . Builder addFeatures ( Feature value )
Required. Requested features.
repeated .google.cloud.vision.v1.Feature features = 2;
Parameter
Name
Description
value
Feature
Returns
Type
Description
AnnotateFileRequest.Builder
addFeatures(Feature.Builder builderForValue)
public AnnotateFileRequest . Builder addFeatures ( Feature . Builder builderForValue )
Required. Requested features.
repeated .google.cloud.vision.v1.Feature features = 2;
Parameter
Name
Description
builderForValue
Feature.Builder
Returns
Type
Description
AnnotateFileRequest.Builder
addFeatures(int index, Feature value)
public AnnotateFileRequest . Builder addFeatures ( int index , Feature value )
Required. Requested features.
repeated .google.cloud.vision.v1.Feature features = 2;
Parameters
Name
Description
index
int
value
Feature
Returns
Type
Description
AnnotateFileRequest.Builder
addFeatures(int index, Feature.Builder builderForValue)
public AnnotateFileRequest . Builder addFeatures ( int index , Feature . Builder builderForValue )
Required. Requested features.
repeated .google.cloud.vision.v1.Feature features = 2;
Parameters
Name
Description
index
int
builderForValue
Feature.Builder
Returns
Type
Description
AnnotateFileRequest.Builder
addFeaturesBuilder()
public Feature . Builder addFeaturesBuilder ()
Required. Requested features.
repeated .google.cloud.vision.v1.Feature features = 2;
Returns
Type
Description
Feature.Builder
addFeaturesBuilder(int index)
public Feature . Builder addFeaturesBuilder ( int index )
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
Feature.Builder
addPages(int value)
public AnnotateFileRequest . Builder addPages ( int value )
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
value
int The pages to add.
Returns
Type
Description
AnnotateFileRequest.Builder
This builder for chaining.
build()
public AnnotateFileRequest build ()
Returns
Type
Description
AnnotateFileRequest
buildPartial()
public AnnotateFileRequest buildPartial ()
Returns
Type
Description
AnnotateFileRequest
clear()
public AnnotateFileRequest . Builder clear ()
Returns
Type
Description
AnnotateFileRequest.Builder
Overrides
GeneratedMessage.Builder<BuilderType>.clear()
clearFeatures()
public AnnotateFileRequest . Builder clearFeatures ()
Required. Requested features.
repeated .google.cloud.vision.v1.Feature features = 2;
Returns
Type
Description
AnnotateFileRequest.Builder
clearImageContext()
public AnnotateFileRequest . Builder clearImageContext ()
Additional context that may accompany the image(s) in the file.
.google.cloud.vision.v1.ImageContext image_context = 3;
Returns
Type
Description
AnnotateFileRequest.Builder
clearInputConfig()
public AnnotateFileRequest . Builder clearInputConfig ()
Required. Information about the input file.
.google.cloud.vision.v1.InputConfig input_config = 1;
Returns
Type
Description
AnnotateFileRequest.Builder
clearPages()
public AnnotateFileRequest . Builder clearPages ()
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
AnnotateFileRequest.Builder
This builder for chaining.
getDefaultInstanceForType()
public AnnotateFileRequest getDefaultInstanceForType ()
Returns
Type
Description
AnnotateFileRequest
getDescriptorForType()
public Descriptors . Descriptor getDescriptorForType ()
Returns
Type
Description
Descriptor
Overrides
GeneratedMessage.Builder<BuilderType>.getDescriptorForType()
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
getFeaturesBuilder(int index)
public Feature . Builder getFeaturesBuilder ( int index )
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
Feature.Builder
getFeaturesBuilderList()
public List<Feature . Builder > getFeaturesBuilderList ()
Required. Requested features.
repeated .google.cloud.vision.v1.Feature features = 2;
Returns
Type
Description
List < Builder >
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
getImageContextBuilder()
public ImageContext . Builder getImageContextBuilder ()
Additional context that may accompany the image(s) in the file.
.google.cloud.vision.v1.ImageContext image_context = 3;
Returns
Type
Description
ImageContext.Builder
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
getInputConfigBuilder()
public InputConfig . Builder getInputConfigBuilder ()
Required. Information about the input file.
.google.cloud.vision.v1.InputConfig input_config = 1;
Returns
Type
Description
InputConfig.Builder
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
internalGetFieldAccessorTable()
protected GeneratedMessage . FieldAccessorTable internalGetFieldAccessorTable ()
Returns
Type
Description
FieldAccessorTable
Overrides
GeneratedMessage.Builder<BuilderType>.internalGetFieldAccessorTable()
isInitialized()
public final boolean isInitialized ()
Returns
Type
Description
boolean
Overrides
GeneratedMessage.Builder<BuilderType>.isInitialized()
mergeFrom(AnnotateFileRequest other)
public AnnotateFileRequest . Builder mergeFrom ( AnnotateFileRequest other )
Parameter
Name
Description
other
AnnotateFileRequest
Returns
Type
Description
AnnotateFileRequest.Builder
mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public AnnotateFileRequest . Builder mergeFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
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
AnnotateFileRequest.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
Exceptions
Type
Description
IOException
mergeFrom(Message other)
public AnnotateFileRequest . Builder mergeFrom ( Message other )
Parameter
Name
Description
other
Message
Returns
Type
Description
AnnotateFileRequest.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)
mergeImageContext(ImageContext value)
public AnnotateFileRequest . Builder mergeImageContext ( ImageContext value )
Additional context that may accompany the image(s) in the file.
.google.cloud.vision.v1.ImageContext image_context = 3;
Parameter
Name
Description
value
ImageContext
Returns
Type
Description
AnnotateFileRequest.Builder
mergeInputConfig(InputConfig value)
public AnnotateFileRequest . Builder mergeInputConfig ( InputConfig value )
Required. Information about the input file.
.google.cloud.vision.v1.InputConfig input_config = 1;
Parameter
Name
Description
value
InputConfig
Returns
Type
Description
AnnotateFileRequest.Builder
removeFeatures(int index)
public AnnotateFileRequest . Builder removeFeatures ( int index )
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
AnnotateFileRequest.Builder
setFeatures(int index, Feature value)
public AnnotateFileRequest . Builder setFeatures ( int index , Feature value )
Required. Requested features.
repeated .google.cloud.vision.v1.Feature features = 2;
Parameters
Name
Description
index
int
value
Feature
Returns
Type
Description
AnnotateFileRequest.Builder
setFeatures(int index, Feature.Builder builderForValue)
public AnnotateFileRequest . Builder setFeatures ( int index , Feature . Builder builderForValue )
Required. Requested features.
repeated .google.cloud.vision.v1.Feature features = 2;
Parameters
Name
Description
index
int
builderForValue
Feature.Builder
Returns
Type
Description
AnnotateFileRequest.Builder
setImageContext(ImageContext value)
public AnnotateFileRequest . Builder setImageContext ( ImageContext value )
Additional context that may accompany the image(s) in the file.
.google.cloud.vision.v1.ImageContext image_context = 3;
Parameter
Name
Description
value
ImageContext
Returns
Type
Description
AnnotateFileRequest.Builder
setImageContext(ImageContext.Builder builderForValue)
public AnnotateFileRequest . Builder setImageContext ( ImageContext . Builder builderForValue )
Additional context that may accompany the image(s) in the file.
.google.cloud.vision.v1.ImageContext image_context = 3;
Parameter
Name
Description
builderForValue
ImageContext.Builder
Returns
Type
Description
AnnotateFileRequest.Builder
setInputConfig(InputConfig value)
public AnnotateFileRequest . Builder setInputConfig ( InputConfig value )
Required. Information about the input file.
.google.cloud.vision.v1.InputConfig input_config = 1;
Parameter
Name
Description
value
InputConfig
Returns
Type
Description
AnnotateFileRequest.Builder
setInputConfig(InputConfig.Builder builderForValue)
public AnnotateFileRequest . Builder setInputConfig ( InputConfig . Builder builderForValue )
Required. Information about the input file.
.google.cloud.vision.v1.InputConfig input_config = 1;
Parameter
Name
Description
builderForValue
InputConfig.Builder
Returns
Type
Description
AnnotateFileRequest.Builder
setPages(int index, int value)
public AnnotateFileRequest . Builder setPages ( int index , int value )
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
Parameters
Name
Description
index
int The index to set the value at.
value
int The pages to set.
Returns
Type
Description
AnnotateFileRequest.Builder
This builder for chaining.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
