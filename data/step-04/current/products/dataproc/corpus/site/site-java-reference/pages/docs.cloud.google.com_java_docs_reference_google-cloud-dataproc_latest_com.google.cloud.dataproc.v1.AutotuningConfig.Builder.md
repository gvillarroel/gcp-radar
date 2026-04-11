---
title: "Class AutotuningConfig.Builder (4.85.0) \_|\_ Java client libraries \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutotuningConfig.Builder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutotuningConfig.Builder
  title: "Class AutotuningConfig.Builder (4.85.0) \_|\_ Java client libraries \_|\_\
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
Class AutotuningConfig.Builder (4.85.0)
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
public static final class AutotuningConfig . Builder extends GeneratedMessage . Builder<AutotuningConfig . Builder > implements AutotuningConfigOrBuilder
Autotuning configuration of the workload.
Protobuf type google.cloud.dataproc.v1.AutotuningConfig
Inheritance
java.lang.Object >
AbstractMessageLite.Builder<MessageType,BuilderType> >
AbstractMessage.Builder<BuilderType> >
GeneratedMessage.Builder >
AutotuningConfig.Builder
Implements
AutotuningConfigOrBuilder
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
addAllScenarios(Iterable<? extends AutotuningConfig.Scenario> values)
public AutotuningConfig . Builder addAllScenarios ( Iterable < ? extends AutotuningConfig . Scenario > values )
Optional. Scenarios for which tunings are applied.
repeated .google.cloud.dataproc.v1.AutotuningConfig.Scenario scenarios = 2 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
values
Iterable < ? extends com.google.cloud.dataproc.v1.AutotuningConfig.Scenario > The scenarios to add.
Returns
Type
Description
AutotuningConfig.Builder
This builder for chaining.
addAllScenariosValue(Iterable<Integer> values)
public AutotuningConfig . Builder addAllScenariosValue ( Iterable<Integer> values )
Optional. Scenarios for which tunings are applied.
repeated .google.cloud.dataproc.v1.AutotuningConfig.Scenario scenarios = 2 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
values
Iterable < Integer > The enum numeric values on the wire for scenarios to add.
Returns
Type
Description
AutotuningConfig.Builder
This builder for chaining.
addScenarios(AutotuningConfig.Scenario value)
public AutotuningConfig . Builder addScenarios ( AutotuningConfig . Scenario value )
Optional. Scenarios for which tunings are applied.
repeated .google.cloud.dataproc.v1.AutotuningConfig.Scenario scenarios = 2 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
value
AutotuningConfig.Scenario The scenarios to add.
Returns
Type
Description
AutotuningConfig.Builder
This builder for chaining.
addScenariosValue(int value)
public AutotuningConfig . Builder addScenariosValue ( int value )
Optional. Scenarios for which tunings are applied.
repeated .google.cloud.dataproc.v1.AutotuningConfig.Scenario scenarios = 2 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
value
int The enum numeric value on the wire for scenarios to add.
Returns
Type
Description
AutotuningConfig.Builder
This builder for chaining.
build()
public AutotuningConfig build ()
Returns
Type
Description
AutotuningConfig
buildPartial()
public AutotuningConfig buildPartial ()
Returns
Type
Description
AutotuningConfig
clear()
public AutotuningConfig . Builder clear ()
Returns
Type
Description
AutotuningConfig.Builder
Overrides
GeneratedMessage.Builder<BuilderType>.clear()
clearScenarios()
public AutotuningConfig . Builder clearScenarios ()
Optional. Scenarios for which tunings are applied.
repeated .google.cloud.dataproc.v1.AutotuningConfig.Scenario scenarios = 2 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
AutotuningConfig.Builder
This builder for chaining.
getDefaultInstanceForType()
public AutotuningConfig getDefaultInstanceForType ()
Returns
Type
Description
AutotuningConfig
getDescriptorForType()
public Descriptors . Descriptor getDescriptorForType ()
Returns
Type
Description
Descriptor
Overrides
GeneratedMessage.Builder<BuilderType>.getDescriptorForType()
getScenarios(int index)
public AutotuningConfig . Scenario getScenarios ( int index )
Optional. Scenarios for which tunings are applied.
repeated .google.cloud.dataproc.v1.AutotuningConfig.Scenario scenarios = 2 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
index
int The index of the element to return.
Returns
Type
Description
AutotuningConfig.Scenario
The scenarios at the given index.
getScenariosCount()
public int getScenariosCount ()
Optional. Scenarios for which tunings are applied.
repeated .google.cloud.dataproc.v1.AutotuningConfig.Scenario scenarios = 2 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
int
The count of scenarios.
getScenariosList()
public List<AutotuningConfig . Scenario > getScenariosList ()
Optional. Scenarios for which tunings are applied.
repeated .google.cloud.dataproc.v1.AutotuningConfig.Scenario scenarios = 2 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
List < Scenario >
A list containing the scenarios.
getScenariosValue(int index)
public int getScenariosValue ( int index )
Optional. Scenarios for which tunings are applied.
repeated .google.cloud.dataproc.v1.AutotuningConfig.Scenario scenarios = 2 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
index
int The index of the value to return.
Returns
Type
Description
int
The enum numeric value on the wire of scenarios at the given index.
getScenariosValueList()
public List<Integer> getScenariosValueList ()
Optional. Scenarios for which tunings are applied.
repeated .google.cloud.dataproc.v1.AutotuningConfig.Scenario scenarios = 2 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
List < Integer >
A list containing the enum numeric values on the wire for scenarios.
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
mergeFrom(AutotuningConfig other)
public AutotuningConfig . Builder mergeFrom ( AutotuningConfig other )
Parameter
Name
Description
other
AutotuningConfig
Returns
Type
Description
AutotuningConfig.Builder
mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public AutotuningConfig . Builder mergeFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
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
AutotuningConfig.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
Exceptions
Type
Description
IOException
mergeFrom(Message other)
public AutotuningConfig . Builder mergeFrom ( Message other )
Parameter
Name
Description
other
Message
Returns
Type
Description
AutotuningConfig.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)
setScenarios(int index, AutotuningConfig.Scenario value)
public AutotuningConfig . Builder setScenarios ( int index , AutotuningConfig . Scenario value )
Optional. Scenarios for which tunings are applied.
repeated .google.cloud.dataproc.v1.AutotuningConfig.Scenario scenarios = 2 [(.google.api.field_behavior) = OPTIONAL];
Parameters
Name
Description
index
int The index to set the value at.
value
AutotuningConfig.Scenario The scenarios to set.
Returns
Type
Description
AutotuningConfig.Builder
This builder for chaining.
setScenariosValue(int index, int value)
public AutotuningConfig . Builder setScenariosValue ( int index , int value )
Optional. Scenarios for which tunings are applied.
repeated .google.cloud.dataproc.v1.AutotuningConfig.Scenario scenarios = 2 [(.google.api.field_behavior) = OPTIONAL];
Parameters
Name
Description
index
int The index to set the value at.
value
int The enum numeric value on the wire for scenarios to set.
Returns
Type
Description
AutotuningConfig.Builder
This builder for chaining.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
