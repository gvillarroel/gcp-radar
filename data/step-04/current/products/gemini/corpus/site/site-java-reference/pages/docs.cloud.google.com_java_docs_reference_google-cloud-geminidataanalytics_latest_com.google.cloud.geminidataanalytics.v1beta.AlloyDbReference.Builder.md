---
title: "Class AlloyDbReference.Builder (0.16.0) \_|\_ Java client libraries \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-geminidataanalytics/latest/com.google.cloud.geminidataanalytics.v1beta.AlloyDbReference.Builder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-geminidataanalytics/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-geminidataanalytics/latest/com.google.cloud.geminidataanalytics.v1beta.AlloyDbReference.Builder
  title: "Class AlloyDbReference.Builder (0.16.0) \_|\_ Java client libraries \_|\_\
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
Class AlloyDbReference.Builder (0.16.0)
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
public static final class AlloyDbReference . Builder extends GeneratedMessage . Builder<AlloyDbReference . Builder > implements AlloyDbReferenceOrBuilder
Message representing reference to an AlloyDB database and agent context.
Only supported for the QueryData method.
Protobuf type google.cloud.geminidataanalytics.v1beta.AlloyDbReference
Inheritance
java.lang.Object >
AbstractMessageLite.Builder<MessageType,BuilderType> >
AbstractMessage.Builder<BuilderType> >
GeneratedMessage.Builder >
AlloyDbReference.Builder
Implements
AlloyDbReferenceOrBuilder
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
public AlloyDbReference build ()
Returns
Type
Description
AlloyDbReference
buildPartial()
public AlloyDbReference buildPartial ()
Returns
Type
Description
AlloyDbReference
clear()
public AlloyDbReference . Builder clear ()
Returns
Type
Description
AlloyDbReference.Builder
Overrides
GeneratedMessage.Builder<BuilderType>.clear()
clearAgentContextReference()
public AlloyDbReference . Builder clearAgentContextReference ()
Optional. Parameters for retrieving data from Agent Context.
.google.cloud.geminidataanalytics.v1beta.AgentContextReference agent_context_reference = 3 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
AlloyDbReference.Builder
clearDatabaseReference()
public AlloyDbReference . Builder clearDatabaseReference ()
Required. Singular proto that supports specifying which database and tables
to include.
.google.cloud.geminidataanalytics.v1beta.AlloyDbDatabaseReference database_reference = 1 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
AlloyDbReference.Builder
getAgentContextReference()
public AgentContextReference getAgentContextReference ()
Optional. Parameters for retrieving data from Agent Context.
.google.cloud.geminidataanalytics.v1beta.AgentContextReference agent_context_reference = 3 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
AgentContextReference
The agentContextReference.
getAgentContextReferenceBuilder()
public AgentContextReference . Builder getAgentContextReferenceBuilder ()
Optional. Parameters for retrieving data from Agent Context.
.google.cloud.geminidataanalytics.v1beta.AgentContextReference agent_context_reference = 3 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
AgentContextReference.Builder
getAgentContextReferenceOrBuilder()
public AgentContextReferenceOrBuilder getAgentContextReferenceOrBuilder ()
Optional. Parameters for retrieving data from Agent Context.
.google.cloud.geminidataanalytics.v1beta.AgentContextReference agent_context_reference = 3 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
AgentContextReferenceOrBuilder
getDatabaseReference()
public AlloyDbDatabaseReference getDatabaseReference ()
Required. Singular proto that supports specifying which database and tables
to include.
.google.cloud.geminidataanalytics.v1beta.AlloyDbDatabaseReference database_reference = 1 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
AlloyDbDatabaseReference
The databaseReference.
getDatabaseReferenceBuilder()
public AlloyDbDatabaseReference . Builder getDatabaseReferenceBuilder ()
Required. Singular proto that supports specifying which database and tables
to include.
.google.cloud.geminidataanalytics.v1beta.AlloyDbDatabaseReference database_reference = 1 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
AlloyDbDatabaseReference.Builder
getDatabaseReferenceOrBuilder()
public AlloyDbDatabaseReferenceOrBuilder getDatabaseReferenceOrBuilder ()
Required. Singular proto that supports specifying which database and tables
to include.
.google.cloud.geminidataanalytics.v1beta.AlloyDbDatabaseReference database_reference = 1 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
AlloyDbDatabaseReferenceOrBuilder
getDefaultInstanceForType()
public AlloyDbReference getDefaultInstanceForType ()
Returns
Type
Description
AlloyDbReference
getDescriptorForType()
public Descriptors . Descriptor getDescriptorForType ()
Returns
Type
Description
Descriptor
Overrides
GeneratedMessage.Builder<BuilderType>.getDescriptorForType()
hasAgentContextReference()
public boolean hasAgentContextReference ()
Optional. Parameters for retrieving data from Agent Context.
.google.cloud.geminidataanalytics.v1beta.AgentContextReference agent_context_reference = 3 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
boolean
Whether the agentContextReference field is set.
hasDatabaseReference()
public boolean hasDatabaseReference ()
Required. Singular proto that supports specifying which database and tables
to include.
.google.cloud.geminidataanalytics.v1beta.AlloyDbDatabaseReference database_reference = 1 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
boolean
Whether the databaseReference field is set.
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
mergeAgentContextReference(AgentContextReference value)
public AlloyDbReference . Builder mergeAgentContextReference ( AgentContextReference value )
Optional. Parameters for retrieving data from Agent Context.
.google.cloud.geminidataanalytics.v1beta.AgentContextReference agent_context_reference = 3 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
value
AgentContextReference
Returns
Type
Description
AlloyDbReference.Builder
mergeDatabaseReference(AlloyDbDatabaseReference value)
public AlloyDbReference . Builder mergeDatabaseReference ( AlloyDbDatabaseReference value )
Required. Singular proto that supports specifying which database and tables
to include.
.google.cloud.geminidataanalytics.v1beta.AlloyDbDatabaseReference database_reference = 1 [(.google.api.field_behavior) = REQUIRED];
Parameter
Name
Description
value
AlloyDbDatabaseReference
Returns
Type
Description
AlloyDbReference.Builder
mergeFrom(AlloyDbReference other)
public AlloyDbReference . Builder mergeFrom ( AlloyDbReference other )
Parameter
Name
Description
other
AlloyDbReference
Returns
Type
Description
AlloyDbReference.Builder
mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public AlloyDbReference . Builder mergeFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
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
AlloyDbReference.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
Exceptions
Type
Description
IOException
mergeFrom(Message other)
public AlloyDbReference . Builder mergeFrom ( Message other )
Parameter
Name
Description
other
Message
Returns
Type
Description
AlloyDbReference.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)
setAgentContextReference(AgentContextReference value)
public AlloyDbReference . Builder setAgentContextReference ( AgentContextReference value )
Optional. Parameters for retrieving data from Agent Context.
.google.cloud.geminidataanalytics.v1beta.AgentContextReference agent_context_reference = 3 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
value
AgentContextReference
Returns
Type
Description
AlloyDbReference.Builder
setAgentContextReference(AgentContextReference.Builder builderForValue)
public AlloyDbReference . Builder setAgentContextReference ( AgentContextReference . Builder builderForValue )
Optional. Parameters for retrieving data from Agent Context.
.google.cloud.geminidataanalytics.v1beta.AgentContextReference agent_context_reference = 3 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
builderForValue
AgentContextReference.Builder
Returns
Type
Description
AlloyDbReference.Builder
setDatabaseReference(AlloyDbDatabaseReference value)
public AlloyDbReference . Builder setDatabaseReference ( AlloyDbDatabaseReference value )
Required. Singular proto that supports specifying which database and tables
to include.
.google.cloud.geminidataanalytics.v1beta.AlloyDbDatabaseReference database_reference = 1 [(.google.api.field_behavior) = REQUIRED];
Parameter
Name
Description
value
AlloyDbDatabaseReference
Returns
Type
Description
AlloyDbReference.Builder
setDatabaseReference(AlloyDbDatabaseReference.Builder builderForValue)
public AlloyDbReference . Builder setDatabaseReference ( AlloyDbDatabaseReference . Builder builderForValue )
Required. Singular proto that supports specifying which database and tables
to include.
.google.cloud.geminidataanalytics.v1beta.AlloyDbDatabaseReference database_reference = 1 [(.google.api.field_behavior) = REQUIRED];
Parameter
Name
Description
builderForValue
AlloyDbDatabaseReference.Builder
Returns
Type
Description
AlloyDbReference.Builder
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
