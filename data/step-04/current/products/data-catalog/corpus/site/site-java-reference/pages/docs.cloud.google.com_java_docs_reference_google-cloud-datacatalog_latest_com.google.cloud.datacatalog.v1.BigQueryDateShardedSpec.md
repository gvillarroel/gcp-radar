---
title: "Class BigQueryDateShardedSpec (1.94.0) \_|\_ Java client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-datacatalog/latest/com.google.cloud.datacatalog.v1.BigQueryDateShardedSpec
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-datacatalog/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-datacatalog/latest/com.google.cloud.datacatalog.v1.BigQueryDateShardedSpec
  title: "Class BigQueryDateShardedSpec (1.94.0) \_|\_ Java client libraries \_|\_\
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
Class BigQueryDateShardedSpec (1.94.0)
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
public final class BigQueryDateShardedSpec extends GeneratedMessage implements BigQueryDateShardedSpecOrBuilder
Specification for a group of BigQuery tables with the [prefix]YYYYMMDD name
pattern.
For more information, see Introduction to partitioned tables .
Protobuf type google.cloud.datacatalog.v1.BigQueryDateShardedSpec
Inheritance
Object >
AbstractMessageLite<MessageType,BuilderType> >
AbstractMessage >
GeneratedMessage >
BigQueryDateShardedSpec
Implements
BigQueryDateShardedSpecOrBuilder
Inherited Members
AbstractMessage.equals(Object)
AbstractMessage.findInitializationErrors()
AbstractMessage.getInitializationErrorString()
AbstractMessage.hashCode()
AbstractMessage.hashFields(int,Map<Descriptors.FieldDescriptor,Object>)
AbstractMessage.newBuilderForType(AbstractMessage.BuilderParent)
AbstractMessage.toString()
AbstractMessageLite.<T>addAll(Iterable<T>,List<? super T>)
AbstractMessageLite.checkByteStringIsUtf8(ByteString)
AbstractMessageLite.toByteArray()
AbstractMessageLite.toByteString()
AbstractMessageLite.writeDelimitedTo(OutputStream)
AbstractMessageLite.writeTo(OutputStream)
com.google.protobuf.GeneratedMessage.<ContainingT,T>newFileScopedGeneratedExtension(java.lang.Class<?>,com.google.protobuf.Message)
com.google.protobuf.GeneratedMessage.<ContainingT,T>newMessageScopedGeneratedExtension(com.google.protobuf.Message,int,java.lang.Class<?>,com.google.protobuf.Message)
com.google.protobuf.GeneratedMessage.<ListT>makeMutableCopy(ListT)
com.google.protobuf.GeneratedMessage.<ListT>makeMutableCopy(ListT,int)
GeneratedMessage.<M>parseDelimitedWithIOException(Parser<M>,InputStream)
GeneratedMessage.<M>parseDelimitedWithIOException(Parser<M>,InputStream,ExtensionRegistryLite)
GeneratedMessage.<M>parseWithIOException(Parser<M>,CodedInputStream)
GeneratedMessage.<M>parseWithIOException(Parser<M>,CodedInputStream,ExtensionRegistryLite)
GeneratedMessage.<M>parseWithIOException(Parser<M>,InputStream)
GeneratedMessage.<M>parseWithIOException(Parser<M>,InputStream,ExtensionRegistryLite)
com.google.protobuf.GeneratedMessage.<T>emptyList(java.lang.Class<T>)
com.google.protobuf.GeneratedMessage.<V>serializeBooleanMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.Boolean,V>,com.google.protobuf.MapEntry<java.lang.Boolean,V>,int)
com.google.protobuf.GeneratedMessage.<V>serializeIntegerMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.Integer,V>,com.google.protobuf.MapEntry<java.lang.Integer,V>,int)
com.google.protobuf.GeneratedMessage.<V>serializeLongMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.Long,V>,com.google.protobuf.MapEntry<java.lang.Long,V>,int)
com.google.protobuf.GeneratedMessage.<V>serializeStringMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.String,V>,com.google.protobuf.MapEntry<java.lang.String,V>,int)
com.google.protobuf.GeneratedMessage.canUseUnsafe()
GeneratedMessage.computeStringSize(int,Object)
GeneratedMessage.computeStringSizeNoTag(Object)
com.google.protobuf.GeneratedMessage.emptyBooleanList()
com.google.protobuf.GeneratedMessage.emptyDoubleList()
com.google.protobuf.GeneratedMessage.emptyFloatList()
com.google.protobuf.GeneratedMessage.emptyIntList()
com.google.protobuf.GeneratedMessage.emptyLongList()
GeneratedMessage.getAllFields()
GeneratedMessage.getDescriptorForType()
GeneratedMessage.getField(Descriptors.FieldDescriptor)
GeneratedMessage.getOneofFieldDescriptor(Descriptors.OneofDescriptor)
GeneratedMessage.getParserForType()
GeneratedMessage.getRepeatedField(Descriptors.FieldDescriptor,int)
GeneratedMessage.getRepeatedFieldCount(Descriptors.FieldDescriptor)
GeneratedMessage.getSerializedSize()
GeneratedMessage.getUnknownFields()
GeneratedMessage.hasField(Descriptors.FieldDescriptor)
GeneratedMessage.hasOneof(Descriptors.OneofDescriptor)
GeneratedMessage.internalGetFieldAccessorTable()
GeneratedMessage.internalGetMapField(int)
com.google.protobuf.GeneratedMessage.internalGetMapFieldReflection(int)
GeneratedMessage.isInitialized()
com.google.protobuf.GeneratedMessage.isStringEmpty(java.lang.Object)
GeneratedMessage.makeExtensionsImmutable()
com.google.protobuf.GeneratedMessage.mergeFromAndMakeImmutableInternal(com.google.protobuf.CodedInputStream,com.google.protobuf.ExtensionRegistryLite)
com.google.protobuf.GeneratedMessage.newInstance(com.google.protobuf.GeneratedMessage.UnusedPrivateParameter)
GeneratedMessage.parseUnknownField(CodedInputStream,UnknownFieldSet.Builder,ExtensionRegistryLite,int)
com.google.protobuf.GeneratedMessage.parseUnknownFieldProto3(com.google.protobuf.CodedInputStream,com.google.protobuf.UnknownFieldSet.Builder,com.google.protobuf.ExtensionRegistryLite,int)
GeneratedMessage.writeReplace()
GeneratedMessage.writeString(CodedOutputStream,int,Object)
GeneratedMessage.writeStringNoTag(CodedOutputStream,Object)
GeneratedMessage.writeTo(CodedOutputStream)
Object.clone()
Object.finalize()
Object.getClass()
Object.notify()
Object.notifyAll()
Object.wait()
Object.wait(long)
Object.wait(long,int)
Static Fields
DATASET_FIELD_NUMBER
public static final int DATASET_FIELD_NUMBER
Field Value
Type
Description
int
LATEST_SHARD_RESOURCE_FIELD_NUMBER
public static final int LATEST_SHARD_RESOURCE_FIELD_NUMBER
Field Value
Type
Description
int
SHARD_COUNT_FIELD_NUMBER
public static final int SHARD_COUNT_FIELD_NUMBER
Field Value
Type
Description
int
TABLE_PREFIX_FIELD_NUMBER
public static final int TABLE_PREFIX_FIELD_NUMBER
Field Value
Type
Description
int
Static Methods
getDefaultInstance()
public static BigQueryDateShardedSpec getDefaultInstance ()
Returns
Type
Description
BigQueryDateShardedSpec
getDescriptor()
public static final Descriptors . Descriptor getDescriptor ()
Returns
Type
Description
Descriptor
newBuilder()
public static BigQueryDateShardedSpec . Builder newBuilder ()
Returns
Type
Description
BigQueryDateShardedSpec.Builder
newBuilder(BigQueryDateShardedSpec prototype)
public static BigQueryDateShardedSpec . Builder newBuilder ( BigQueryDateShardedSpec prototype )
Parameter
Name
Description
prototype
BigQueryDateShardedSpec
Returns
Type
Description
BigQueryDateShardedSpec.Builder
parseDelimitedFrom(InputStream input)
public static BigQueryDateShardedSpec parseDelimitedFrom ( InputStream input )
Parameter
Name
Description
input
InputStream
Returns
Type
Description
BigQueryDateShardedSpec
Exceptions
Type
Description
IOException
parseDelimitedFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
public static BigQueryDateShardedSpec parseDelimitedFrom ( InputStream input , ExtensionRegistryLite extensionRegistry )
Parameters
Name
Description
input
InputStream
extensionRegistry
ExtensionRegistryLite
Returns
Type
Description
BigQueryDateShardedSpec
Exceptions
Type
Description
IOException
parseFrom(byte[] data)
public static BigQueryDateShardedSpec parseFrom ( byte [] data )
Parameter
Name
Description
data
byte []
Returns
Type
Description
BigQueryDateShardedSpec
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(byte[] data, ExtensionRegistryLite extensionRegistry)
public static BigQueryDateShardedSpec parseFrom ( byte [] data , ExtensionRegistryLite extensionRegistry )
Parameters
Name
Description
data
byte []
extensionRegistry
ExtensionRegistryLite
Returns
Type
Description
BigQueryDateShardedSpec
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteString data)
public static BigQueryDateShardedSpec parseFrom ( ByteString data )
Parameter
Name
Description
data
ByteString
Returns
Type
Description
BigQueryDateShardedSpec
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteString data, ExtensionRegistryLite extensionRegistry)
public static BigQueryDateShardedSpec parseFrom ( ByteString data , ExtensionRegistryLite extensionRegistry )
Parameters
Name
Description
data
ByteString
extensionRegistry
ExtensionRegistryLite
Returns
Type
Description
BigQueryDateShardedSpec
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(CodedInputStream input)
public static BigQueryDateShardedSpec parseFrom ( CodedInputStream input )
Parameter
Name
Description
input
CodedInputStream
Returns
Type
Description
BigQueryDateShardedSpec
Exceptions
Type
Description
IOException
parseFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public static BigQueryDateShardedSpec parseFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
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
BigQueryDateShardedSpec
Exceptions
Type
Description
IOException
parseFrom(InputStream input)
public static BigQueryDateShardedSpec parseFrom ( InputStream input )
Parameter
Name
Description
input
InputStream
Returns
Type
Description
BigQueryDateShardedSpec
Exceptions
Type
Description
IOException
parseFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
public static BigQueryDateShardedSpec parseFrom ( InputStream input , ExtensionRegistryLite extensionRegistry )
Parameters
Name
Description
input
InputStream
extensionRegistry
ExtensionRegistryLite
Returns
Type
Description
BigQueryDateShardedSpec
Exceptions
Type
Description
IOException
parseFrom(ByteBuffer data)
public static BigQueryDateShardedSpec parseFrom ( ByteBuffer data )
Parameter
Name
Description
data
ByteBuffer
Returns
Type
Description
BigQueryDateShardedSpec
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteBuffer data, ExtensionRegistryLite extensionRegistry)
public static BigQueryDateShardedSpec parseFrom ( ByteBuffer data , ExtensionRegistryLite extensionRegistry )
Parameters
Name
Description
data
ByteBuffer
extensionRegistry
ExtensionRegistryLite
Returns
Type
Description
BigQueryDateShardedSpec
Exceptions
Type
Description
InvalidProtocolBufferException
parser()
public static Parser<BigQueryDateShardedSpec> parser ()
Returns
Type
Description
Parser < BigQueryDateShardedSpec >
Methods
equals(Object obj)
public boolean equals ( Object obj )
Parameter
Name
Description
obj
Object
Returns
Type
Description
boolean
Overrides
AbstractMessage.equals(Object other)
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
getParserForType()
public Parser<BigQueryDateShardedSpec> getParserForType ()
Returns
Type
Description
Parser < BigQueryDateShardedSpec >
Overrides
GeneratedMessage.getParserForType()
getSerializedSize()
public int getSerializedSize ()
Returns
Type
Description
int
Overrides
GeneratedMessage.getSerializedSize()
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
hashCode()
public int hashCode ()
Returns
Type
Description
int
Overrides
AbstractMessage.hashCode()
internalGetFieldAccessorTable()
protected GeneratedMessage . FieldAccessorTable internalGetFieldAccessorTable ()
Returns
Type
Description
FieldAccessorTable
Overrides
GeneratedMessage.internalGetFieldAccessorTable()
isInitialized()
public final boolean isInitialized ()
Returns
Type
Description
boolean
Overrides
GeneratedMessage.isInitialized()
newBuilderForType()
public BigQueryDateShardedSpec . Builder newBuilderForType ()
Returns
Type
Description
BigQueryDateShardedSpec.Builder
newBuilderForType(AbstractMessage.BuilderParent parent)
protected BigQueryDateShardedSpec . Builder newBuilderForType ( AbstractMessage . BuilderParent parent )
Parameter
Name
Description
parent
BuilderParent
Returns
Type
Description
BigQueryDateShardedSpec.Builder
Overrides
AbstractMessage.newBuilderForType(AbstractMessage.BuilderParent parent)
toBuilder()
public BigQueryDateShardedSpec . Builder toBuilder ()
Returns
Type
Description
BigQueryDateShardedSpec.Builder
writeTo(CodedOutputStream output)
public void writeTo ( CodedOutputStream output )
Parameter
Name
Description
output
CodedOutputStream
Overrides
GeneratedMessage.writeTo(CodedOutputStream output)
Exceptions
Type
Description
IOException
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
