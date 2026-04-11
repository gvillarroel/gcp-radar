---
title: "Class AnalysisOptions.Builder (0.16.0) \_|\_ Java client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-geminidataanalytics/latest/com.google.cloud.geminidataanalytics.v1beta.AnalysisOptions.Builder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-geminidataanalytics/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-geminidataanalytics/latest/com.google.cloud.geminidataanalytics.v1beta.AnalysisOptions.Builder
  title: "Class AnalysisOptions.Builder (0.16.0) \_|\_ Java client libraries \_|\_\
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
Class AnalysisOptions.Builder (0.16.0)
Stay organized with collections
Save and categorize content based on your preferences.
0.16.0 (latest)
0.15.0
0.13.0
0.11.0
0.10.0
0.9.0
0.8.0
0.6.0
0.4.0
0.3.0
0.2.0
0.1.0
public static final class AnalysisOptions . Builder extends GeneratedMessage . Builder<AnalysisOptions . Builder > implements AnalysisOptionsOrBuilder
Options for analysis.
Protobuf type google.cloud.geminidataanalytics.v1beta.AnalysisOptions
Inheritance
java.lang.Object >
AbstractMessageLite.Builder<MessageType,BuilderType> >
AbstractMessage.Builder<BuilderType> >
GeneratedMessage.Builder >
AnalysisOptions.Builder
Implements
AnalysisOptionsOrBuilder
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
public AnalysisOptions build ()
Returns
Type
Description
AnalysisOptions
buildPartial()
public AnalysisOptions buildPartial ()
Returns
Type
Description
AnalysisOptions
clear()
public AnalysisOptions . Builder clear ()
Returns
Type
Description
AnalysisOptions.Builder
Overrides
GeneratedMessage.Builder<BuilderType>.clear()
clearPython()
public AnalysisOptions . Builder clearPython ()
Optional. Options for Python analysis.
.google.cloud.geminidataanalytics.v1beta.AnalysisOptions.Python python = 1 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
AnalysisOptions.Builder
getDefaultInstanceForType()
public AnalysisOptions getDefaultInstanceForType ()
Returns
Type
Description
AnalysisOptions
getDescriptorForType()
public Descriptors . Descriptor getDescriptorForType ()
Returns
Type
Description
Descriptor
Overrides
GeneratedMessage.Builder<BuilderType>.getDescriptorForType()
getPython()
public AnalysisOptions . Python getPython ()
Optional. Options for Python analysis.
.google.cloud.geminidataanalytics.v1beta.AnalysisOptions.Python python = 1 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
AnalysisOptions.Python
The python.
getPythonBuilder()
public AnalysisOptions . Python . Builder getPythonBuilder ()
Optional. Options for Python analysis.
.google.cloud.geminidataanalytics.v1beta.AnalysisOptions.Python python = 1 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
AnalysisOptions.Python.Builder
getPythonOrBuilder()
public AnalysisOptions . PythonOrBuilder getPythonOrBuilder ()
Optional. Options for Python analysis.
.google.cloud.geminidataanalytics.v1beta.AnalysisOptions.Python python = 1 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
AnalysisOptions.PythonOrBuilder
hasPython()
public boolean hasPython ()
Optional. Options for Python analysis.
.google.cloud.geminidataanalytics.v1beta.AnalysisOptions.Python python = 1 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
boolean
Whether the python field is set.
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
mergeFrom(AnalysisOptions other)
public AnalysisOptions . Builder mergeFrom ( AnalysisOptions other )
Parameter
Name
Description
other
AnalysisOptions
Returns
Type
Description
AnalysisOptions.Builder
mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public AnalysisOptions . Builder mergeFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
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
AnalysisOptions.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
Exceptions
Type
Description
IOException
mergeFrom(Message other)
public AnalysisOptions . Builder mergeFrom ( Message other )
Parameter
Name
Description
other
Message
Returns
Type
Description
AnalysisOptions.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)
mergePython(AnalysisOptions.Python value)
public AnalysisOptions . Builder mergePython ( AnalysisOptions . Python value )
Optional. Options for Python analysis.
.google.cloud.geminidataanalytics.v1beta.AnalysisOptions.Python python = 1 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
value
AnalysisOptions.Python
Returns
Type
Description
AnalysisOptions.Builder
setPython(AnalysisOptions.Python value)
public AnalysisOptions . Builder setPython ( AnalysisOptions . Python value )
Optional. Options for Python analysis.
.google.cloud.geminidataanalytics.v1beta.AnalysisOptions.Python python = 1 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
value
AnalysisOptions.Python
Returns
Type
Description
AnalysisOptions.Builder
setPython(AnalysisOptions.Python.Builder builderForValue)
public AnalysisOptions . Builder setPython ( AnalysisOptions . Python . Builder builderForValue )
Optional. Options for Python analysis.
.google.cloud.geminidataanalytics.v1beta.AnalysisOptions.Python python = 1 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
builderForValue
AnalysisOptions.Python.Builder
Returns
Type
Description
AnalysisOptions.Builder
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
