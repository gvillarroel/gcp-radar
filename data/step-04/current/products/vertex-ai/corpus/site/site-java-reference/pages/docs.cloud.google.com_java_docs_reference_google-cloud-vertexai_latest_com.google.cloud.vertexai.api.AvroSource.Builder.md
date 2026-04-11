---
title: "Class AvroSource.Builder (1.48.0) \_|\_ Java client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-vertexai/latest/com.google.cloud.vertexai.api.AvroSource.Builder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-vertexai/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-vertexai/latest/com.google.cloud.vertexai.api.AvroSource.Builder
  title: "Class AvroSource.Builder (1.48.0) \_|\_ Java client libraries \_|\_ Google\
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
Class AvroSource.Builder (1.48.0)
Stay organized with collections
Save and categorize content based on your preferences.
1.48.0 (latest)
1.47.0
1.45.0
1.43.0
1.42.0
1.40.0
1.38.0
1.36.0
1.35.0
1.34.0
1.33.0
1.32.0
1.30.0
1.28.0
1.27.0
1.24.0
1.23.0
1.22.0
1.20.1
1.19.0
1.18.0
1.17.0
1.16.0
1.15.0
1.14.0
1.13.0
1.12.0
1.11.0
1.9.0
1.8.0
1.7.0
1.6.0
1.5.0
1.4.0
1.3.0
1.2.0
1.1.0
1.0.0
0.8.0
0.6.0
0.5.0
0.4.0
0.3.0
0.2.0
0.1.0
public static final class AvroSource . Builder extends GeneratedMessage . Builder<AvroSource . Builder > implements AvroSourceOrBuilder
The storage details for Avro input content.
Protobuf type google.cloud.vertexai.v1.AvroSource
Inheritance
java.lang.Object >
AbstractMessageLite.Builder<MessageType,BuilderType> >
AbstractMessage.Builder<BuilderType> >
GeneratedMessage.Builder >
AvroSource.Builder
Implements
AvroSourceOrBuilder
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
build()
public AvroSource build ()
Returns
Type
Description
AvroSource
buildPartial()
public AvroSource buildPartial ()
Returns
Type
Description
AvroSource
clear()
public AvroSource . Builder clear ()
Returns
Type
Description
AvroSource.Builder
Overrides
GeneratedMessage.Builder<BuilderType>.clear()
clearGcsSource()
public AvroSource . Builder clearGcsSource ()
Required. Google Cloud Storage location.
.google.cloud.vertexai.v1.GcsSource gcs_source = 1 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
AvroSource.Builder
getDefaultInstanceForType()
public AvroSource getDefaultInstanceForType ()
Returns
Type
Description
AvroSource
getDescriptorForType()
public Descriptors . Descriptor getDescriptorForType ()
Returns
Type
Description
Descriptor
Overrides
GeneratedMessage.Builder<BuilderType>.getDescriptorForType()
getGcsSource()
public GcsSource getGcsSource ()
Required. Google Cloud Storage location.
.google.cloud.vertexai.v1.GcsSource gcs_source = 1 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
GcsSource
The gcsSource.
getGcsSourceBuilder()
public GcsSource . Builder getGcsSourceBuilder ()
Required. Google Cloud Storage location.
.google.cloud.vertexai.v1.GcsSource gcs_source = 1 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
GcsSource.Builder
getGcsSourceOrBuilder()
public GcsSourceOrBuilder getGcsSourceOrBuilder ()
Required. Google Cloud Storage location.
.google.cloud.vertexai.v1.GcsSource gcs_source = 1 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
GcsSourceOrBuilder
hasGcsSource()
public boolean hasGcsSource ()
Required. Google Cloud Storage location.
.google.cloud.vertexai.v1.GcsSource gcs_source = 1 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
boolean
Whether the gcsSource field is set.
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
mergeFrom(AvroSource other)
public AvroSource . Builder mergeFrom ( AvroSource other )
Parameter
Name
Description
other
AvroSource
Returns
Type
Description
AvroSource.Builder
mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public AvroSource . Builder mergeFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
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
AvroSource.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
Exceptions
Type
Description
IOException
mergeFrom(Message other)
public AvroSource . Builder mergeFrom ( Message other )
Parameter
Name
Description
other
Message
Returns
Type
Description
AvroSource.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)
mergeGcsSource(GcsSource value)
public AvroSource . Builder mergeGcsSource ( GcsSource value )
Required. Google Cloud Storage location.
.google.cloud.vertexai.v1.GcsSource gcs_source = 1 [(.google.api.field_behavior) = REQUIRED];
Parameter
Name
Description
value
GcsSource
Returns
Type
Description
AvroSource.Builder
setGcsSource(GcsSource value)
public AvroSource . Builder setGcsSource ( GcsSource value )
Required. Google Cloud Storage location.
.google.cloud.vertexai.v1.GcsSource gcs_source = 1 [(.google.api.field_behavior) = REQUIRED];
Parameter
Name
Description
value
GcsSource
Returns
Type
Description
AvroSource.Builder
setGcsSource(GcsSource.Builder builderForValue)
public AvroSource . Builder setGcsSource ( GcsSource . Builder builderForValue )
Required. Google Cloud Storage location.
.google.cloud.vertexai.v1.GcsSource gcs_source = 1 [(.google.api.field_behavior) = REQUIRED];
Parameter
Name
Description
builderForValue
GcsSource.Builder
Returns
Type
Description
AvroSource.Builder
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
