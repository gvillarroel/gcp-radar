---
title: "Class BigQueryDateShardedSpec.Builder (1.94.0) \_|\_ Java client libraries\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-datacatalog/latest/com.google.cloud.datacatalog.v1.BigQueryDateShardedSpec.Builder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-datacatalog/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-datacatalog/latest/com.google.cloud.datacatalog.v1.BigQueryDateShardedSpec.Builder
  title: "Class BigQueryDateShardedSpec.Builder (1.94.0) \_|\_ Java client libraries\
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
Class BigQueryDateShardedSpec.Builder (1.94.0)
Stay organized with collections
Save and categorize content based on your preferences.
1.94.0 (latest)
1.93.0
1.91.0
1.89.0
1.88.0
1.87.0
1.86.0
1.84.0
1.82.0
1.81.0
1.80.0
1.79.0
1.78.0
1.76.0
1.74.0
1.73.0
1.70.0
1.69.0
1.68.0
1.66.0
1.65.0
1.64.0
1.63.0
1.62.0
1.61.0
1.60.0
1.59.0
1.58.0
1.57.0
1.55.0
1.54.0
1.53.0
1.52.0
1.51.0
1.50.0
1.49.0
1.48.0
1.47.0
1.46.0
1.45.0
1.43.0
1.42.0
1.41.0
1.40.0
1.39.0
1.38.0
1.37.0
1.36.0
1.35.0
1.34.0
1.33.0
1.30.0
1.29.0
1.28.0
1.27.0
1.26.0
1.25.0
1.24.0
1.23.0
1.22.0
1.21.0
1.20.0
1.19.0
1.18.0
1.17.0
1.15.0
1.14.0
1.13.0
1.12.0
1.11.0
1.10.0
1.9.5
1.8.4
1.7.2
1.6.2
1.5.4
public static final class BigQueryDateShardedSpec . Builder extends GeneratedMessage . Builder<BigQueryDateShardedSpec . Builder > implements BigQueryDateShardedSpecOrBuilder
Specification for a group of BigQuery tables with the [prefix]YYYYMMDD name
pattern.
For more information, see Introduction to partitioned tables .
Protobuf type google.cloud.datacatalog.v1.BigQueryDateShardedSpec
Inheritance
java.lang.Object >
AbstractMessageLite.Builder<MessageType,BuilderType> >
AbstractMessage.Builder<BuilderType> >
GeneratedMessage.Builder >
BigQueryDateShardedSpec.Builder
Implements
BigQueryDateShardedSpecOrBuilder
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
public BigQueryDateShardedSpec build ()
Returns
Type
Description
BigQueryDateShardedSpec
buildPartial()
public BigQueryDateShardedSpec buildPartial ()
Returns
Type
Description
BigQueryDateShardedSpec
clear()
public BigQueryDateShardedSpec . Builder clear ()
Returns
Type
Description
BigQueryDateShardedSpec.Builder
Overrides
GeneratedMessage.Builder<BuilderType>.clear()
clearDataset()
public BigQueryDateShardedSpec . Builder clearDataset ()
Output only. The Data Catalog resource name of the dataset entry the
current table belongs to. For example:
projects/{PROJECT_ID}/locations/{LOCATION}/entrygroups/{ENTRY_GROUP_ID}/entries/{ENTRY_ID} .
string dataset = 1 [(.google.api.field_behavior) = OUTPUT_ONLY, (.google.api.resource_reference) = { ... }
Returns
Type
Description
BigQueryDateShardedSpec.Builder
This builder for chaining.
clearLatestShardResource()
public BigQueryDateShardedSpec . Builder clearLatestShardResource ()
Output only. BigQuery resource name of the latest shard.
string latest_shard_resource = 4 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
BigQueryDateShardedSpec.Builder
This builder for chaining.
clearShardCount()
public BigQueryDateShardedSpec . Builder clearShardCount ()
Output only. Total number of shards.
int64 shard_count = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
BigQueryDateShardedSpec.Builder
This builder for chaining.
clearTablePrefix()
public BigQueryDateShardedSpec . Builder clearTablePrefix ()
Output only. The table name prefix of the shards.
The name of any given shard is [table_prefix]YYYYMMDD .
For example, for the MyTable20180101 shard, the
table_prefix is MyTable .
string table_prefix = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
BigQueryDateShardedSpec.Builder
This builder for chaining.
getDataset()
public String getDataset ()
Output only. The Data Catalog resource name of the dataset entry the
current table belongs to. For example:
projects/{PROJECT_ID}/locations/{LOCATION}/entrygroups/{ENTRY_GROUP_ID}/entries/{ENTRY_ID} .
string dataset = 1 [(.google.api.field_behavior) = OUTPUT_ONLY, (.google.api.resource_reference) = { ... }
Returns
Type
Description
String
The dataset.
getDatasetBytes()
public ByteString getDatasetBytes ()
Output only. The Data Catalog resource name of the dataset entry the
current table belongs to. For example:
projects/{PROJECT_ID}/locations/{LOCATION}/entrygroups/{ENTRY_GROUP_ID}/entries/{ENTRY_ID} .
string dataset = 1 [(.google.api.field_behavior) = OUTPUT_ONLY, (.google.api.resource_reference) = { ... }
Returns
Type
Description
ByteString
The bytes for dataset.
getDefaultInstanceForType()
public BigQueryDateShardedSpec getDefaultInstanceForType ()
Returns
Type
Description
BigQueryDateShardedSpec
getDescriptorForType()
public Descriptors . Descriptor getDescriptorForType ()
Returns
Type
Description
Descriptor
Overrides
GeneratedMessage.Builder<BuilderType>.getDescriptorForType()
getLatestShardResource()
public String getLatestShardResource ()
Output only. BigQuery resource name of the latest shard.
string latest_shard_resource = 4 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
String
The latestShardResource.
getLatestShardResourceBytes()
public ByteString getLatestShardResourceBytes ()
Output only. BigQuery resource name of the latest shard.
string latest_shard_resource = 4 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
ByteString
The bytes for latestShardResource.
getShardCount()
public long getShardCount ()
Output only. Total number of shards.
int64 shard_count = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
long
The shardCount.
getTablePrefix()
public String getTablePrefix ()
Output only. The table name prefix of the shards.
The name of any given shard is [table_prefix]YYYYMMDD .
For example, for the MyTable20180101 shard, the
table_prefix is MyTable .
string table_prefix = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
String
The tablePrefix.
getTablePrefixBytes()
public ByteString getTablePrefixBytes ()
Output only. The table name prefix of the shards.
The name of any given shard is [table_prefix]YYYYMMDD .
For example, for the MyTable20180101 shard, the
table_prefix is MyTable .
string table_prefix = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
ByteString
The bytes for tablePrefix.
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
mergeFrom(BigQueryDateShardedSpec other)
public BigQueryDateShardedSpec . Builder mergeFrom ( BigQueryDateShardedSpec other )
Parameter
Name
Description
other
BigQueryDateShardedSpec
Returns
Type
Description
BigQueryDateShardedSpec.Builder
mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public BigQueryDateShardedSpec . Builder mergeFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
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
BigQueryDateShardedSpec.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
Exceptions
Type
Description
IOException
mergeFrom(Message other)
public BigQueryDateShardedSpec . Builder mergeFrom ( Message other )
Parameter
Name
Description
other
Message
Returns
Type
Description
BigQueryDateShardedSpec.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)
setDataset(String value)
public BigQueryDateShardedSpec . Builder setDataset ( String value )
Output only. The Data Catalog resource name of the dataset entry the
current table belongs to. For example:
projects/{PROJECT_ID}/locations/{LOCATION}/entrygroups/{ENTRY_GROUP_ID}/entries/{ENTRY_ID} .
string dataset = 1 [(.google.api.field_behavior) = OUTPUT_ONLY, (.google.api.resource_reference) = { ... }
Parameter
Name
Description
value
String The dataset to set.
Returns
Type
Description
BigQueryDateShardedSpec.Builder
This builder for chaining.
setDatasetBytes(ByteString value)
public BigQueryDateShardedSpec . Builder setDatasetBytes ( ByteString value )
Output only. The Data Catalog resource name of the dataset entry the
current table belongs to. For example:
projects/{PROJECT_ID}/locations/{LOCATION}/entrygroups/{ENTRY_GROUP_ID}/entries/{ENTRY_ID} .
string dataset = 1 [(.google.api.field_behavior) = OUTPUT_ONLY, (.google.api.resource_reference) = { ... }
Parameter
Name
Description
value
ByteString The bytes for dataset to set.
Returns
Type
Description
BigQueryDateShardedSpec.Builder
This builder for chaining.
setLatestShardResource(String value)
public BigQueryDateShardedSpec . Builder setLatestShardResource ( String value )
Output only. BigQuery resource name of the latest shard.
string latest_shard_resource = 4 [(.google.api.field_behavior) = OUTPUT_ONLY];
Parameter
Name
Description
value
String The latestShardResource to set.
Returns
Type
Description
BigQueryDateShardedSpec.Builder
This builder for chaining.
setLatestShardResourceBytes(ByteString value)
public BigQueryDateShardedSpec . Builder setLatestShardResourceBytes ( ByteString value )
Output only. BigQuery resource name of the latest shard.
string latest_shard_resource = 4 [(.google.api.field_behavior) = OUTPUT_ONLY];
Parameter
Name
Description
value
ByteString The bytes for latestShardResource to set.
Returns
Type
Description
BigQueryDateShardedSpec.Builder
This builder for chaining.
setShardCount(long value)
public BigQueryDateShardedSpec . Builder setShardCount ( long value )
Output only. Total number of shards.
int64 shard_count = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];
Parameter
Name
Description
value
long The shardCount to set.
Returns
Type
Description
BigQueryDateShardedSpec.Builder
This builder for chaining.
setTablePrefix(String value)
public BigQueryDateShardedSpec . Builder setTablePrefix ( String value )
Output only. The table name prefix of the shards.
The name of any given shard is [table_prefix]YYYYMMDD .
For example, for the MyTable20180101 shard, the
table_prefix is MyTable .
string table_prefix = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];
Parameter
Name
Description
value
String The tablePrefix to set.
Returns
Type
Description
BigQueryDateShardedSpec.Builder
This builder for chaining.
setTablePrefixBytes(ByteString value)
public BigQueryDateShardedSpec . Builder setTablePrefixBytes ( ByteString value )
Output only. The table name prefix of the shards.
The name of any given shard is [table_prefix]YYYYMMDD .
For example, for the MyTable20180101 shard, the
table_prefix is MyTable .
string table_prefix = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];
Parameter
Name
Description
value
ByteString The bytes for tablePrefix to set.
Returns
Type
Description
BigQueryDateShardedSpec.Builder
This builder for chaining.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
