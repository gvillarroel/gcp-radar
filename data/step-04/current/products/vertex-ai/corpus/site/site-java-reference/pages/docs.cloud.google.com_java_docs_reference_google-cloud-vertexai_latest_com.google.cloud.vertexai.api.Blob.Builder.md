---
title: "Class Blob.Builder (1.48.0) \_|\_ Java client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-vertexai/latest/com.google.cloud.vertexai.api.Blob.Builder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-vertexai/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-vertexai/latest/com.google.cloud.vertexai.api.Blob.Builder
  title: "Class Blob.Builder (1.48.0) \_|\_ Java client libraries \_|\_ Google Cloud\
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
Class Blob.Builder (1.48.0)
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
public static final class Blob . Builder extends GeneratedMessage . Builder<Blob . Builder > implements BlobOrBuilder
Content blob.
It's preferred to send as text
directly rather than raw bytes.
Protobuf type google.cloud.vertexai.v1.Blob
Inheritance
java.lang.Object >
AbstractMessageLite.Builder<MessageType,BuilderType> >
AbstractMessage.Builder<BuilderType> >
GeneratedMessage.Builder >
Blob.Builder
Implements
BlobOrBuilder
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
public Blob build ()
Returns
Type
Description
Blob
buildPartial()
public Blob buildPartial ()
Returns
Type
Description
Blob
clear()
public Blob . Builder clear ()
Returns
Type
Description
Blob.Builder
Overrides
GeneratedMessage.Builder<BuilderType>.clear()
clearData()
public Blob . Builder clearData ()
Required. Raw bytes.
bytes data = 2 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
Blob.Builder
This builder for chaining.
clearMimeType()
public Blob . Builder clearMimeType ()
Required. The IANA standard MIME type of the source data.
string mime_type = 1 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
Blob.Builder
This builder for chaining.
getData()
public ByteString getData ()
Required. Raw bytes.
bytes data = 2 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
ByteString
The data.
getDefaultInstanceForType()
public Blob getDefaultInstanceForType ()
Returns
Type
Description
Blob
getDescriptorForType()
public Descriptors . Descriptor getDescriptorForType ()
Returns
Type
Description
Descriptor
Overrides
GeneratedMessage.Builder<BuilderType>.getDescriptorForType()
getMimeType()
public String getMimeType ()
Required. The IANA standard MIME type of the source data.
string mime_type = 1 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
String
The mimeType.
getMimeTypeBytes()
public ByteString getMimeTypeBytes ()
Required. The IANA standard MIME type of the source data.
string mime_type = 1 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
ByteString
The bytes for mimeType.
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
mergeFrom(Blob other)
public Blob . Builder mergeFrom ( Blob other )
Parameter
Name
Description
other
Blob
Returns
Type
Description
Blob.Builder
mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public Blob . Builder mergeFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
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
Blob.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
Exceptions
Type
Description
IOException
mergeFrom(Message other)
public Blob . Builder mergeFrom ( Message other )
Parameter
Name
Description
other
Message
Returns
Type
Description
Blob.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)
setData(ByteString value)
public Blob . Builder setData ( ByteString value )
Required. Raw bytes.
bytes data = 2 [(.google.api.field_behavior) = REQUIRED];
Parameter
Name
Description
value
ByteString The data to set.
Returns
Type
Description
Blob.Builder
This builder for chaining.
setMimeType(String value)
public Blob . Builder setMimeType ( String value )
Required. The IANA standard MIME type of the source data.
string mime_type = 1 [(.google.api.field_behavior) = REQUIRED];
Parameter
Name
Description
value
String The mimeType to set.
Returns
Type
Description
Blob.Builder
This builder for chaining.
setMimeTypeBytes(ByteString value)
public Blob . Builder setMimeTypeBytes ( ByteString value )
Required. The IANA standard MIME type of the source data.
string mime_type = 1 [(.google.api.field_behavior) = REQUIRED];
Parameter
Name
Description
value
ByteString The bytes for mimeType to set.
Returns
Type
Description
Blob.Builder
This builder for chaining.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
