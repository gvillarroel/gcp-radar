---
title: "Class CreateProcessorRequest.Builder (2.92.0) \_|\_ Java client libraries\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-document-ai/latest/com.google.cloud.documentai.v1.CreateProcessorRequest.Builder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-document-ai/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-document-ai/latest/com.google.cloud.documentai.v1.CreateProcessorRequest.Builder
  title: "Class CreateProcessorRequest.Builder (2.92.0) \_|\_ Java client libraries\
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
Class CreateProcessorRequest.Builder (2.92.0)
Stay organized with collections
Save and categorize content based on your preferences.
2.92.0 (latest)
2.91.0
2.89.0
2.87.0
2.86.0
2.85.0
2.84.0
2.82.0
2.80.0
2.79.0
2.78.0
2.77.0
2.76.0
2.74.0
2.72.0
2.71.0
2.68.0
2.67.0
2.66.0
2.64.0
2.63.0
2.62.0
2.61.0
2.60.0
2.59.0
2.58.0
2.57.0
2.56.0
2.55.0
2.53.0
2.52.0
2.51.0
2.50.0
2.49.0
2.48.0
2.47.0
2.46.0
2.45.0
2.44.0
2.43.0
2.41.0
2.40.0
2.39.0
2.38.0
2.37.0
2.36.0
2.35.0
2.34.0
2.33.0
2.32.0
2.31.0
2.28.0
2.27.0
2.26.0
2.25.0
2.24.0
2.23.0
2.22.0
2.21.0
2.20.0
2.19.0
2.18.0
2.17.0
2.16.0
2.15.0
2.13.0
2.12.0
2.11.0
2.10.0
2.9.0
2.8.0
2.7.5
2.6.2
2.5.1
2.4.3
2.3.1
2.2.1
2.1.9
public static final class CreateProcessorRequest . Builder extends GeneratedMessage . Builder<CreateProcessorRequest . Builder > implements CreateProcessorRequestOrBuilder
Request message for the
CreateProcessor
method. Notice this request is sent to a regionalized backend service. If the
ProcessorType isn't available in
that region, the creation fails.
Protobuf type google.cloud.documentai.v1.CreateProcessorRequest
Inheritance
java.lang.Object >
AbstractMessageLite.Builder<MessageType,BuilderType> >
AbstractMessage.Builder<BuilderType> >
GeneratedMessage.Builder >
CreateProcessorRequest.Builder
Implements
CreateProcessorRequestOrBuilder
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
public CreateProcessorRequest build ()
Returns
Type
Description
CreateProcessorRequest
buildPartial()
public CreateProcessorRequest buildPartial ()
Returns
Type
Description
CreateProcessorRequest
clear()
public CreateProcessorRequest . Builder clear ()
Returns
Type
Description
CreateProcessorRequest.Builder
Overrides
GeneratedMessage.Builder<BuilderType>.clear()
clearParent()
public CreateProcessorRequest . Builder clearParent ()
Required. The parent (project and location) under which to create the
processor. Format: projects/{project}/locations/{location}
string parent = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }
Returns
Type
Description
CreateProcessorRequest.Builder
This builder for chaining.
clearProcessor()
public CreateProcessorRequest . Builder clearProcessor ()
Required. The processor to be created, requires
Processor.type and
Processor.display_name
to be set. Also, the
Processor.kms_key_name
field must be set if the processor is under CMEK.
.google.cloud.documentai.v1.Processor processor = 2 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
CreateProcessorRequest.Builder
getDefaultInstanceForType()
public CreateProcessorRequest getDefaultInstanceForType ()
Returns
Type
Description
CreateProcessorRequest
getDescriptorForType()
public Descriptors . Descriptor getDescriptorForType ()
Returns
Type
Description
Descriptor
Overrides
GeneratedMessage.Builder<BuilderType>.getDescriptorForType()
getParent()
public String getParent ()
Required. The parent (project and location) under which to create the
processor. Format: projects/{project}/locations/{location}
string parent = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }
Returns
Type
Description
String
The parent.
getParentBytes()
public ByteString getParentBytes ()
Required. The parent (project and location) under which to create the
processor. Format: projects/{project}/locations/{location}
string parent = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }
Returns
Type
Description
ByteString
The bytes for parent.
getProcessor()
public Processor getProcessor ()
Required. The processor to be created, requires
Processor.type and
Processor.display_name
to be set. Also, the
Processor.kms_key_name
field must be set if the processor is under CMEK.
.google.cloud.documentai.v1.Processor processor = 2 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
Processor
The processor.
getProcessorBuilder()
public Processor . Builder getProcessorBuilder ()
Required. The processor to be created, requires
Processor.type and
Processor.display_name
to be set. Also, the
Processor.kms_key_name
field must be set if the processor is under CMEK.
.google.cloud.documentai.v1.Processor processor = 2 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
Processor.Builder
getProcessorOrBuilder()
public ProcessorOrBuilder getProcessorOrBuilder ()
Required. The processor to be created, requires
Processor.type and
Processor.display_name
to be set. Also, the
Processor.kms_key_name
field must be set if the processor is under CMEK.
.google.cloud.documentai.v1.Processor processor = 2 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
ProcessorOrBuilder
hasProcessor()
public boolean hasProcessor ()
Required. The processor to be created, requires
Processor.type and
Processor.display_name
to be set. Also, the
Processor.kms_key_name
field must be set if the processor is under CMEK.
.google.cloud.documentai.v1.Processor processor = 2 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
boolean
Whether the processor field is set.
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
mergeFrom(CreateProcessorRequest other)
public CreateProcessorRequest . Builder mergeFrom ( CreateProcessorRequest other )
Parameter
Name
Description
other
CreateProcessorRequest
Returns
Type
Description
CreateProcessorRequest.Builder
mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public CreateProcessorRequest . Builder mergeFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
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
CreateProcessorRequest.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
Exceptions
Type
Description
IOException
mergeFrom(Message other)
public CreateProcessorRequest . Builder mergeFrom ( Message other )
Parameter
Name
Description
other
Message
Returns
Type
Description
CreateProcessorRequest.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)
mergeProcessor(Processor value)
public CreateProcessorRequest . Builder mergeProcessor ( Processor value )
Required. The processor to be created, requires
Processor.type and
Processor.display_name
to be set. Also, the
Processor.kms_key_name
field must be set if the processor is under CMEK.
.google.cloud.documentai.v1.Processor processor = 2 [(.google.api.field_behavior) = REQUIRED];
Parameter
Name
Description
value
Processor
Returns
Type
Description
CreateProcessorRequest.Builder
setParent(String value)
public CreateProcessorRequest . Builder setParent ( String value )
Required. The parent (project and location) under which to create the
processor. Format: projects/{project}/locations/{location}
string parent = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }
Parameter
Name
Description
value
String The parent to set.
Returns
Type
Description
CreateProcessorRequest.Builder
This builder for chaining.
setParentBytes(ByteString value)
public CreateProcessorRequest . Builder setParentBytes ( ByteString value )
Required. The parent (project and location) under which to create the
processor. Format: projects/{project}/locations/{location}
string parent = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }
Parameter
Name
Description
value
ByteString The bytes for parent to set.
Returns
Type
Description
CreateProcessorRequest.Builder
This builder for chaining.
setProcessor(Processor value)
public CreateProcessorRequest . Builder setProcessor ( Processor value )
Required. The processor to be created, requires
Processor.type and
Processor.display_name
to be set. Also, the
Processor.kms_key_name
field must be set if the processor is under CMEK.
.google.cloud.documentai.v1.Processor processor = 2 [(.google.api.field_behavior) = REQUIRED];
Parameter
Name
Description
value
Processor
Returns
Type
Description
CreateProcessorRequest.Builder
setProcessor(Processor.Builder builderForValue)
public CreateProcessorRequest . Builder setProcessor ( Processor . Builder builderForValue )
Required. The processor to be created, requires
Processor.type and
Processor.display_name
to be set. Also, the
Processor.kms_key_name
field must be set if the processor is under CMEK.
.google.cloud.documentai.v1.Processor processor = 2 [(.google.api.field_behavior) = REQUIRED];
Parameter
Name
Description
builderForValue
Processor.Builder
Returns
Type
Description
CreateProcessorRequest.Builder
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
