---
title: "Class Execution.StackTrace.Builder (2.88.0) \_|\_ Java client libraries \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-workflow-executions/latest/com.google.cloud.workflows.executions.v1.Execution.StackTrace.Builder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-workflow-executions/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-workflow-executions/latest/com.google.cloud.workflows.executions.v1.Execution.StackTrace.Builder
  title: "Class Execution.StackTrace.Builder (2.88.0) \_|\_ Java client libraries\
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
Class Execution.StackTrace.Builder (2.88.0)
Stay organized with collections
Save and categorize content based on your preferences.
2.88.0 (latest)
2.87.0
2.85.0
2.83.0
2.82.0
2.80.0
2.78.0
2.76.0
2.75.0
2.74.0
2.73.0
2.72.0
2.70.0
2.68.0
2.67.0
2.64.0
2.63.0
2.62.0
2.60.0
2.59.0
2.58.0
2.57.0
2.56.0
2.55.0
2.54.0
2.53.0
2.52.0
2.51.0
2.49.0
2.48.0
2.47.0
2.46.0
2.45.0
2.44.0
2.43.0
2.42.0
2.41.0
2.40.0
2.39.0
2.37.0
2.36.0
2.35.0
2.34.0
2.33.0
2.32.0
2.31.0
2.30.0
2.29.0
2.28.0
2.27.0
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
2.14.0
2.13.0
2.12.0
2.11.0
2.9.0
2.8.0
2.7.0
2.6.0
2.5.0
2.4.0
2.3.6
2.2.1
2.1.7
public static final class Execution . StackTrace . Builder extends GeneratedMessage . Builder<Execution . StackTrace . Builder > implements Execution . StackTraceOrBuilder
A collection of stack elements (frames) where an error occurred.
Protobuf type google.cloud.workflows.executions.v1.Execution.StackTrace
Inheritance
java.lang.Object >
AbstractMessageLite.Builder<MessageType,BuilderType> >
AbstractMessage.Builder<BuilderType> >
GeneratedMessage.Builder >
Execution.StackTrace.Builder
Implements
Execution.StackTraceOrBuilder
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
addAllElements(Iterable<? extends Execution.StackTraceElement> values)
public Execution . StackTrace . Builder addAllElements ( Iterable < ? extends Execution . StackTraceElement > values )
An array of stack elements.
repeated .google.cloud.workflows.executions.v1.Execution.StackTraceElement elements = 1;
Parameter
Name
Description
values
Iterable < ? extends com.google.cloud.workflows.executions.v1.Execution.StackTraceElement >
Returns
Type
Description
Execution.StackTrace.Builder
addElements(Execution.StackTraceElement value)
public Execution . StackTrace . Builder addElements ( Execution . StackTraceElement value )
An array of stack elements.
repeated .google.cloud.workflows.executions.v1.Execution.StackTraceElement elements = 1;
Parameter
Name
Description
value
Execution.StackTraceElement
Returns
Type
Description
Execution.StackTrace.Builder
addElements(Execution.StackTraceElement.Builder builderForValue)
public Execution . StackTrace . Builder addElements ( Execution . StackTraceElement . Builder builderForValue )
An array of stack elements.
repeated .google.cloud.workflows.executions.v1.Execution.StackTraceElement elements = 1;
Parameter
Name
Description
builderForValue
Execution.StackTraceElement.Builder
Returns
Type
Description
Execution.StackTrace.Builder
addElements(int index, Execution.StackTraceElement value)
public Execution . StackTrace . Builder addElements ( int index , Execution . StackTraceElement value )
An array of stack elements.
repeated .google.cloud.workflows.executions.v1.Execution.StackTraceElement elements = 1;
Parameters
Name
Description
index
int
value
Execution.StackTraceElement
Returns
Type
Description
Execution.StackTrace.Builder
addElements(int index, Execution.StackTraceElement.Builder builderForValue)
public Execution . StackTrace . Builder addElements ( int index , Execution . StackTraceElement . Builder builderForValue )
An array of stack elements.
repeated .google.cloud.workflows.executions.v1.Execution.StackTraceElement elements = 1;
Parameters
Name
Description
index
int
builderForValue
Execution.StackTraceElement.Builder
Returns
Type
Description
Execution.StackTrace.Builder
addElementsBuilder()
public Execution . StackTraceElement . Builder addElementsBuilder ()
An array of stack elements.
repeated .google.cloud.workflows.executions.v1.Execution.StackTraceElement elements = 1;
Returns
Type
Description
Execution.StackTraceElement.Builder
addElementsBuilder(int index)
public Execution . StackTraceElement . Builder addElementsBuilder ( int index )
An array of stack elements.
repeated .google.cloud.workflows.executions.v1.Execution.StackTraceElement elements = 1;
Parameter
Name
Description
index
int
Returns
Type
Description
Execution.StackTraceElement.Builder
build()
public Execution . StackTrace build ()
Returns
Type
Description
Execution.StackTrace
buildPartial()
public Execution . StackTrace buildPartial ()
Returns
Type
Description
Execution.StackTrace
clear()
public Execution . StackTrace . Builder clear ()
Returns
Type
Description
Execution.StackTrace.Builder
Overrides
GeneratedMessage.Builder<BuilderType>.clear()
clearElements()
public Execution . StackTrace . Builder clearElements ()
An array of stack elements.
repeated .google.cloud.workflows.executions.v1.Execution.StackTraceElement elements = 1;
Returns
Type
Description
Execution.StackTrace.Builder
getDefaultInstanceForType()
public Execution . StackTrace getDefaultInstanceForType ()
Returns
Type
Description
Execution.StackTrace
getDescriptorForType()
public Descriptors . Descriptor getDescriptorForType ()
Returns
Type
Description
Descriptor
Overrides
GeneratedMessage.Builder<BuilderType>.getDescriptorForType()
getElements(int index)
public Execution . StackTraceElement getElements ( int index )
An array of stack elements.
repeated .google.cloud.workflows.executions.v1.Execution.StackTraceElement elements = 1;
Parameter
Name
Description
index
int
Returns
Type
Description
Execution.StackTraceElement
getElementsBuilder(int index)
public Execution . StackTraceElement . Builder getElementsBuilder ( int index )
An array of stack elements.
repeated .google.cloud.workflows.executions.v1.Execution.StackTraceElement elements = 1;
Parameter
Name
Description
index
int
Returns
Type
Description
Execution.StackTraceElement.Builder
getElementsBuilderList()
public List<Execution . StackTraceElement . Builder > getElementsBuilderList ()
An array of stack elements.
repeated .google.cloud.workflows.executions.v1.Execution.StackTraceElement elements = 1;
Returns
Type
Description
List < Builder >
getElementsCount()
public int getElementsCount ()
An array of stack elements.
repeated .google.cloud.workflows.executions.v1.Execution.StackTraceElement elements = 1;
Returns
Type
Description
int
getElementsList()
public List<Execution . StackTraceElement > getElementsList ()
An array of stack elements.
repeated .google.cloud.workflows.executions.v1.Execution.StackTraceElement elements = 1;
Returns
Type
Description
List < StackTraceElement >
getElementsOrBuilder(int index)
public Execution . StackTraceElementOrBuilder getElementsOrBuilder ( int index )
An array of stack elements.
repeated .google.cloud.workflows.executions.v1.Execution.StackTraceElement elements = 1;
Parameter
Name
Description
index
int
Returns
Type
Description
Execution.StackTraceElementOrBuilder
getElementsOrBuilderList()
public List < ? extends Execution . StackTraceElementOrBuilder > getElementsOrBuilderList ()
An array of stack elements.
repeated .google.cloud.workflows.executions.v1.Execution.StackTraceElement elements = 1;
Returns
Type
Description
List < ? extends com.google.cloud.workflows.executions.v1.Execution.StackTraceElementOrBuilder >
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
mergeFrom(Execution.StackTrace other)
public Execution . StackTrace . Builder mergeFrom ( Execution . StackTrace other )
Parameter
Name
Description
other
Execution.StackTrace
Returns
Type
Description
Execution.StackTrace.Builder
mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public Execution . StackTrace . Builder mergeFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
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
Execution.StackTrace.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
Exceptions
Type
Description
IOException
mergeFrom(Message other)
public Execution . StackTrace . Builder mergeFrom ( Message other )
Parameter
Name
Description
other
Message
Returns
Type
Description
Execution.StackTrace.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)
removeElements(int index)
public Execution . StackTrace . Builder removeElements ( int index )
An array of stack elements.
repeated .google.cloud.workflows.executions.v1.Execution.StackTraceElement elements = 1;
Parameter
Name
Description
index
int
Returns
Type
Description
Execution.StackTrace.Builder
setElements(int index, Execution.StackTraceElement value)
public Execution . StackTrace . Builder setElements ( int index , Execution . StackTraceElement value )
An array of stack elements.
repeated .google.cloud.workflows.executions.v1.Execution.StackTraceElement elements = 1;
Parameters
Name
Description
index
int
value
Execution.StackTraceElement
Returns
Type
Description
Execution.StackTrace.Builder
setElements(int index, Execution.StackTraceElement.Builder builderForValue)
public Execution . StackTrace . Builder setElements ( int index , Execution . StackTraceElement . Builder builderForValue )
An array of stack elements.
repeated .google.cloud.workflows.executions.v1.Execution.StackTraceElement elements = 1;
Parameters
Name
Description
index
int
builderForValue
Execution.StackTraceElement.Builder
Returns
Type
Description
Execution.StackTrace.Builder
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
