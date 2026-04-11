---
title: "Class AlloyDbDatabaseReference.Builder (0.16.0) \_|\_ Java client libraries\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-geminidataanalytics/latest/com.google.cloud.geminidataanalytics.v1beta.AlloyDbDatabaseReference.Builder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-geminidataanalytics/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-geminidataanalytics/latest/com.google.cloud.geminidataanalytics.v1beta.AlloyDbDatabaseReference.Builder
  title: "Class AlloyDbDatabaseReference.Builder (0.16.0) \_|\_ Java client libraries\
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
Class AlloyDbDatabaseReference.Builder (0.16.0)
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
public static final class AlloyDbDatabaseReference . Builder extends GeneratedMessage . Builder<AlloyDbDatabaseReference . Builder > implements AlloyDbDatabaseReferenceOrBuilder
Message representing a reference to a single AlloyDB database.
Protobuf type google.cloud.geminidataanalytics.v1beta.AlloyDbDatabaseReference
Inheritance
java.lang.Object >
AbstractMessageLite.Builder<MessageType,BuilderType> >
AbstractMessage.Builder<BuilderType> >
GeneratedMessage.Builder >
AlloyDbDatabaseReference.Builder
Implements
AlloyDbDatabaseReferenceOrBuilder
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
addAllTableIds(Iterable<String> values)
public AlloyDbDatabaseReference . Builder addAllTableIds ( Iterable<String> values )
Optional. The table ids. Denotes all tables if unset.
repeated string table_ids = 6 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
values
Iterable < String > The tableIds to add.
Returns
Type
Description
AlloyDbDatabaseReference.Builder
This builder for chaining.
addTableIds(String value)
public AlloyDbDatabaseReference . Builder addTableIds ( String value )
Optional. The table ids. Denotes all tables if unset.
repeated string table_ids = 6 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
value
String The tableIds to add.
Returns
Type
Description
AlloyDbDatabaseReference.Builder
This builder for chaining.
addTableIdsBytes(ByteString value)
public AlloyDbDatabaseReference . Builder addTableIdsBytes ( ByteString value )
Optional. The table ids. Denotes all tables if unset.
repeated string table_ids = 6 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
value
ByteString The bytes of the tableIds to add.
Returns
Type
Description
AlloyDbDatabaseReference.Builder
This builder for chaining.
build()
public AlloyDbDatabaseReference build ()
Returns
Type
Description
AlloyDbDatabaseReference
buildPartial()
public AlloyDbDatabaseReference buildPartial ()
Returns
Type
Description
AlloyDbDatabaseReference
clear()
public AlloyDbDatabaseReference . Builder clear ()
Returns
Type
Description
AlloyDbDatabaseReference.Builder
Overrides
GeneratedMessage.Builder<BuilderType>.clear()
clearClusterId()
public AlloyDbDatabaseReference . Builder clearClusterId ()
Required. The cluster id.
string cluster_id = 3 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
AlloyDbDatabaseReference.Builder
This builder for chaining.
clearDatabaseId()
public AlloyDbDatabaseReference . Builder clearDatabaseId ()
Required. The database id.
string database_id = 5 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
AlloyDbDatabaseReference.Builder
This builder for chaining.
clearInstanceId()
public AlloyDbDatabaseReference . Builder clearInstanceId ()
Required. The instance id.
string instance_id = 4 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
AlloyDbDatabaseReference.Builder
This builder for chaining.
clearProjectId()
public AlloyDbDatabaseReference . Builder clearProjectId ()
Required. The project the instance belongs to.
string project_id = 1 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
AlloyDbDatabaseReference.Builder
This builder for chaining.
clearRegion()
public AlloyDbDatabaseReference . Builder clearRegion ()
Required. The region of the instance.
string region = 2 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
AlloyDbDatabaseReference.Builder
This builder for chaining.
clearTableIds()
public AlloyDbDatabaseReference . Builder clearTableIds ()
Optional. The table ids. Denotes all tables if unset.
repeated string table_ids = 6 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
AlloyDbDatabaseReference.Builder
This builder for chaining.
getClusterId()
public String getClusterId ()
Required. The cluster id.
string cluster_id = 3 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
String
The clusterId.
getClusterIdBytes()
public ByteString getClusterIdBytes ()
Required. The cluster id.
string cluster_id = 3 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
ByteString
The bytes for clusterId.
getDatabaseId()
public String getDatabaseId ()
Required. The database id.
string database_id = 5 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
String
The databaseId.
getDatabaseIdBytes()
public ByteString getDatabaseIdBytes ()
Required. The database id.
string database_id = 5 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
ByteString
The bytes for databaseId.
getDefaultInstanceForType()
public AlloyDbDatabaseReference getDefaultInstanceForType ()
Returns
Type
Description
AlloyDbDatabaseReference
getDescriptorForType()
public Descriptors . Descriptor getDescriptorForType ()
Returns
Type
Description
Descriptor
Overrides
GeneratedMessage.Builder<BuilderType>.getDescriptorForType()
getInstanceId()
public String getInstanceId ()
Required. The instance id.
string instance_id = 4 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
String
The instanceId.
getInstanceIdBytes()
public ByteString getInstanceIdBytes ()
Required. The instance id.
string instance_id = 4 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
ByteString
The bytes for instanceId.
getProjectId()
public String getProjectId ()
Required. The project the instance belongs to.
string project_id = 1 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
String
The projectId.
getProjectIdBytes()
public ByteString getProjectIdBytes ()
Required. The project the instance belongs to.
string project_id = 1 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
ByteString
The bytes for projectId.
getRegion()
public String getRegion ()
Required. The region of the instance.
string region = 2 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
String
The region.
getRegionBytes()
public ByteString getRegionBytes ()
Required. The region of the instance.
string region = 2 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
ByteString
The bytes for region.
getTableIds(int index)
public String getTableIds ( int index )
Optional. The table ids. Denotes all tables if unset.
repeated string table_ids = 6 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
index
int The index of the element to return.
Returns
Type
Description
String
The tableIds at the given index.
getTableIdsBytes(int index)
public ByteString getTableIdsBytes ( int index )
Optional. The table ids. Denotes all tables if unset.
repeated string table_ids = 6 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
index
int The index of the value to return.
Returns
Type
Description
ByteString
The bytes of the tableIds at the given index.
getTableIdsCount()
public int getTableIdsCount ()
Optional. The table ids. Denotes all tables if unset.
repeated string table_ids = 6 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
int
The count of tableIds.
getTableIdsList()
public ProtocolStringList getTableIdsList ()
Optional. The table ids. Denotes all tables if unset.
repeated string table_ids = 6 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
ProtocolStringList
A list containing the tableIds.
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
mergeFrom(AlloyDbDatabaseReference other)
public AlloyDbDatabaseReference . Builder mergeFrom ( AlloyDbDatabaseReference other )
Parameter
Name
Description
other
AlloyDbDatabaseReference
Returns
Type
Description
AlloyDbDatabaseReference.Builder
mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public AlloyDbDatabaseReference . Builder mergeFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
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
AlloyDbDatabaseReference.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
Exceptions
Type
Description
IOException
mergeFrom(Message other)
public AlloyDbDatabaseReference . Builder mergeFrom ( Message other )
Parameter
Name
Description
other
Message
Returns
Type
Description
AlloyDbDatabaseReference.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)
setClusterId(String value)
public AlloyDbDatabaseReference . Builder setClusterId ( String value )
Required. The cluster id.
string cluster_id = 3 [(.google.api.field_behavior) = REQUIRED];
Parameter
Name
Description
value
String The clusterId to set.
Returns
Type
Description
AlloyDbDatabaseReference.Builder
This builder for chaining.
setClusterIdBytes(ByteString value)
public AlloyDbDatabaseReference . Builder setClusterIdBytes ( ByteString value )
Required. The cluster id.
string cluster_id = 3 [(.google.api.field_behavior) = REQUIRED];
Parameter
Name
Description
value
ByteString The bytes for clusterId to set.
Returns
Type
Description
AlloyDbDatabaseReference.Builder
This builder for chaining.
setDatabaseId(String value)
public AlloyDbDatabaseReference . Builder setDatabaseId ( String value )
Required. The database id.
string database_id = 5 [(.google.api.field_behavior) = REQUIRED];
Parameter
Name
Description
value
String The databaseId to set.
Returns
Type
Description
AlloyDbDatabaseReference.Builder
This builder for chaining.
setDatabaseIdBytes(ByteString value)
public AlloyDbDatabaseReference . Builder setDatabaseIdBytes ( ByteString value )
Required. The database id.
string database_id = 5 [(.google.api.field_behavior) = REQUIRED];
Parameter
Name
Description
value
ByteString The bytes for databaseId to set.
Returns
Type
Description
AlloyDbDatabaseReference.Builder
This builder for chaining.
setInstanceId(String value)
public AlloyDbDatabaseReference . Builder setInstanceId ( String value )
Required. The instance id.
string instance_id = 4 [(.google.api.field_behavior) = REQUIRED];
Parameter
Name
Description
value
String The instanceId to set.
Returns
Type
Description
AlloyDbDatabaseReference.Builder
This builder for chaining.
setInstanceIdBytes(ByteString value)
public AlloyDbDatabaseReference . Builder setInstanceIdBytes ( ByteString value )
Required. The instance id.
string instance_id = 4 [(.google.api.field_behavior) = REQUIRED];
Parameter
Name
Description
value
ByteString The bytes for instanceId to set.
Returns
Type
Description
AlloyDbDatabaseReference.Builder
This builder for chaining.
setProjectId(String value)
public AlloyDbDatabaseReference . Builder setProjectId ( String value )
Required. The project the instance belongs to.
string project_id = 1 [(.google.api.field_behavior) = REQUIRED];
Parameter
Name
Description
value
String The projectId to set.
Returns
Type
Description
AlloyDbDatabaseReference.Builder
This builder for chaining.
setProjectIdBytes(ByteString value)
public AlloyDbDatabaseReference . Builder setProjectIdBytes ( ByteString value )
Required. The project the instance belongs to.
string project_id = 1 [(.google.api.field_behavior) = REQUIRED];
Parameter
Name
Description
value
ByteString The bytes for projectId to set.
Returns
Type
Description
AlloyDbDatabaseReference.Builder
This builder for chaining.
setRegion(String value)
public AlloyDbDatabaseReference . Builder setRegion ( String value )
Required. The region of the instance.
string region = 2 [(.google.api.field_behavior) = REQUIRED];
Parameter
Name
Description
value
String The region to set.
Returns
Type
Description
AlloyDbDatabaseReference.Builder
This builder for chaining.
setRegionBytes(ByteString value)
public AlloyDbDatabaseReference . Builder setRegionBytes ( ByteString value )
Required. The region of the instance.
string region = 2 [(.google.api.field_behavior) = REQUIRED];
Parameter
Name
Description
value
ByteString The bytes for region to set.
Returns
Type
Description
AlloyDbDatabaseReference.Builder
This builder for chaining.
setTableIds(int index, String value)
public AlloyDbDatabaseReference . Builder setTableIds ( int index , String value )
Optional. The table ids. Denotes all tables if unset.
repeated string table_ids = 6 [(.google.api.field_behavior) = OPTIONAL];
Parameters
Name
Description
index
int The index to set the value at.
value
String The tableIds to set.
Returns
Type
Description
AlloyDbDatabaseReference.Builder
This builder for chaining.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
