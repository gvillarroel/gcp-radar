---
title: "Class BigQueryDestinationConfig (1.87.0) \_|\_ Java client libraries \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-datastream/latest/com.google.cloud.datastream.v1.BigQueryDestinationConfig
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-datastream/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-datastream/latest/com.google.cloud.datastream.v1.BigQueryDestinationConfig
  title: "Class BigQueryDestinationConfig (1.87.0) \_|\_ Java client libraries \_\
    |\_ Google Cloud Documentation"
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
Class BigQueryDestinationConfig (1.87.0)
Stay organized with collections
Save and categorize content based on your preferences.
1.87.0 (latest)
1.86.0
1.84.0
1.82.0
1.81.0
1.80.0
1.79.0
1.77.0
1.75.0
1.74.0
1.73.0
1.72.0
1.71.0
1.69.0
1.67.0
1.66.0
1.63.0
1.62.0
1.61.0
1.59.0
1.58.0
1.57.0
1.56.0
1.55.0
1.54.0
1.53.0
1.52.0
1.51.0
1.50.0
1.48.0
1.47.0
1.46.0
1.45.0
1.44.0
1.43.0
1.42.0
1.41.0
1.40.0
1.39.0
1.38.0
1.36.0
1.35.0
1.34.0
1.33.0
1.32.0
1.31.0
1.30.0
1.29.0
1.28.0
1.27.0
1.26.0
1.23.0
1.22.0
1.21.0
1.20.0
1.19.0
1.18.0
1.17.0
1.16.0
1.15.0
1.14.0
1.13.0
1.12.0
1.11.0
1.10.0
1.8.0
1.7.0
1.6.0
1.5.0
1.4.0
1.3.0
1.2.2
1.1.1
1.0.0
0.4.2
public final class BigQueryDestinationConfig extends GeneratedMessage implements BigQueryDestinationConfigOrBuilder
BigQuery destination configuration
Protobuf type google.cloud.datastream.v1.BigQueryDestinationConfig
Inheritance
Object >
AbstractMessageLite<MessageType,BuilderType> >
AbstractMessage >
GeneratedMessage >
BigQueryDestinationConfig
Implements
BigQueryDestinationConfigOrBuilder
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
APPEND_ONLY_FIELD_NUMBER
public static final int APPEND_ONLY_FIELD_NUMBER
Field Value
Type
Description
int
BLMT_CONFIG_FIELD_NUMBER
public static final int BLMT_CONFIG_FIELD_NUMBER
Field Value
Type
Description
int
DATA_FRESHNESS_FIELD_NUMBER
public static final int DATA_FRESHNESS_FIELD_NUMBER
Field Value
Type
Description
int
MERGE_FIELD_NUMBER
public static final int MERGE_FIELD_NUMBER
Field Value
Type
Description
int
SINGLE_TARGET_DATASET_FIELD_NUMBER
public static final int SINGLE_TARGET_DATASET_FIELD_NUMBER
Field Value
Type
Description
int
SOURCE_HIERARCHY_DATASETS_FIELD_NUMBER
public static final int SOURCE_HIERARCHY_DATASETS_FIELD_NUMBER
Field Value
Type
Description
int
Static Methods
getDefaultInstance()
public static BigQueryDestinationConfig getDefaultInstance ()
Returns
Type
Description
BigQueryDestinationConfig
getDescriptor()
public static final Descriptors . Descriptor getDescriptor ()
Returns
Type
Description
Descriptor
newBuilder()
public static BigQueryDestinationConfig . Builder newBuilder ()
Returns
Type
Description
BigQueryDestinationConfig.Builder
newBuilder(BigQueryDestinationConfig prototype)
public static BigQueryDestinationConfig . Builder newBuilder ( BigQueryDestinationConfig prototype )
Parameter
Name
Description
prototype
BigQueryDestinationConfig
Returns
Type
Description
BigQueryDestinationConfig.Builder
parseDelimitedFrom(InputStream input)
public static BigQueryDestinationConfig parseDelimitedFrom ( InputStream input )
Parameter
Name
Description
input
InputStream
Returns
Type
Description
BigQueryDestinationConfig
Exceptions
Type
Description
IOException
parseDelimitedFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
public static BigQueryDestinationConfig parseDelimitedFrom ( InputStream input , ExtensionRegistryLite extensionRegistry )
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
BigQueryDestinationConfig
Exceptions
Type
Description
IOException
parseFrom(byte[] data)
public static BigQueryDestinationConfig parseFrom ( byte [] data )
Parameter
Name
Description
data
byte []
Returns
Type
Description
BigQueryDestinationConfig
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(byte[] data, ExtensionRegistryLite extensionRegistry)
public static BigQueryDestinationConfig parseFrom ( byte [] data , ExtensionRegistryLite extensionRegistry )
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
BigQueryDestinationConfig
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteString data)
public static BigQueryDestinationConfig parseFrom ( ByteString data )
Parameter
Name
Description
data
ByteString
Returns
Type
Description
BigQueryDestinationConfig
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteString data, ExtensionRegistryLite extensionRegistry)
public static BigQueryDestinationConfig parseFrom ( ByteString data , ExtensionRegistryLite extensionRegistry )
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
BigQueryDestinationConfig
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(CodedInputStream input)
public static BigQueryDestinationConfig parseFrom ( CodedInputStream input )
Parameter
Name
Description
input
CodedInputStream
Returns
Type
Description
BigQueryDestinationConfig
Exceptions
Type
Description
IOException
parseFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public static BigQueryDestinationConfig parseFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
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
BigQueryDestinationConfig
Exceptions
Type
Description
IOException
parseFrom(InputStream input)
public static BigQueryDestinationConfig parseFrom ( InputStream input )
Parameter
Name
Description
input
InputStream
Returns
Type
Description
BigQueryDestinationConfig
Exceptions
Type
Description
IOException
parseFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
public static BigQueryDestinationConfig parseFrom ( InputStream input , ExtensionRegistryLite extensionRegistry )
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
BigQueryDestinationConfig
Exceptions
Type
Description
IOException
parseFrom(ByteBuffer data)
public static BigQueryDestinationConfig parseFrom ( ByteBuffer data )
Parameter
Name
Description
data
ByteBuffer
Returns
Type
Description
BigQueryDestinationConfig
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteBuffer data, ExtensionRegistryLite extensionRegistry)
public static BigQueryDestinationConfig parseFrom ( ByteBuffer data , ExtensionRegistryLite extensionRegistry )
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
BigQueryDestinationConfig
Exceptions
Type
Description
InvalidProtocolBufferException
parser()
public static Parser<BigQueryDestinationConfig> parser ()
Returns
Type
Description
Parser < BigQueryDestinationConfig >
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
getAppendOnly()
public BigQueryDestinationConfig . AppendOnly getAppendOnly ()
Append only mode
.google.cloud.datastream.v1.BigQueryDestinationConfig.AppendOnly append_only = 302;
Returns
Type
Description
BigQueryDestinationConfig.AppendOnly
The appendOnly.
getAppendOnlyOrBuilder()
public BigQueryDestinationConfig . AppendOnlyOrBuilder getAppendOnlyOrBuilder ()
Append only mode
.google.cloud.datastream.v1.BigQueryDestinationConfig.AppendOnly append_only = 302;
Returns
Type
Description
BigQueryDestinationConfig.AppendOnlyOrBuilder
getBlmtConfig()
public BigQueryDestinationConfig . BlmtConfig getBlmtConfig ()
Optional. Big Lake Managed Tables (BLMT) configuration.
.google.cloud.datastream.v1.BigQueryDestinationConfig.BlmtConfig blmt_config = 1 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
BigQueryDestinationConfig.BlmtConfig
The blmtConfig.
getBlmtConfigOrBuilder()
public BigQueryDestinationConfig . BlmtConfigOrBuilder getBlmtConfigOrBuilder ()
Optional. Big Lake Managed Tables (BLMT) configuration.
.google.cloud.datastream.v1.BigQueryDestinationConfig.BlmtConfig blmt_config = 1 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
BigQueryDestinationConfig.BlmtConfigOrBuilder
getDataFreshness()
public Duration getDataFreshness ()
The guaranteed data freshness (in seconds) when querying tables created by
the stream. Editing this field will only affect new tables created in the
future, but existing tables will not be impacted. Lower values mean that
queries will return fresher data, but may result in higher cost.
.google.protobuf.Duration data_freshness = 300;
Returns
Type
Description
Duration
The dataFreshness.
getDataFreshnessOrBuilder()
public DurationOrBuilder getDataFreshnessOrBuilder ()
The guaranteed data freshness (in seconds) when querying tables created by
the stream. Editing this field will only affect new tables created in the
future, but existing tables will not be impacted. Lower values mean that
queries will return fresher data, but may result in higher cost.
.google.protobuf.Duration data_freshness = 300;
Returns
Type
Description
DurationOrBuilder
getDatasetConfigCase()
public BigQueryDestinationConfig . DatasetConfigCase getDatasetConfigCase ()
Returns
Type
Description
BigQueryDestinationConfig.DatasetConfigCase
getDefaultInstanceForType()
public BigQueryDestinationConfig getDefaultInstanceForType ()
Returns
Type
Description
BigQueryDestinationConfig
getMerge()
public BigQueryDestinationConfig . Merge getMerge ()
The standard mode
.google.cloud.datastream.v1.BigQueryDestinationConfig.Merge merge = 301;
Returns
Type
Description
BigQueryDestinationConfig.Merge
The merge.
getMergeOrBuilder()
public BigQueryDestinationConfig . MergeOrBuilder getMergeOrBuilder ()
The standard mode
.google.cloud.datastream.v1.BigQueryDestinationConfig.Merge merge = 301;
Returns
Type
Description
BigQueryDestinationConfig.MergeOrBuilder
getParserForType()
public Parser<BigQueryDestinationConfig> getParserForType ()
Returns
Type
Description
Parser < BigQueryDestinationConfig >
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
getSingleTargetDataset()
public BigQueryDestinationConfig . SingleTargetDataset getSingleTargetDataset ()
Single destination dataset.
.google.cloud.datastream.v1.BigQueryDestinationConfig.SingleTargetDataset single_target_dataset = 201;
Returns
Type
Description
BigQueryDestinationConfig.SingleTargetDataset
The singleTargetDataset.
getSingleTargetDatasetOrBuilder()
public BigQueryDestinationConfig . SingleTargetDatasetOrBuilder getSingleTargetDatasetOrBuilder ()
Single destination dataset.
.google.cloud.datastream.v1.BigQueryDestinationConfig.SingleTargetDataset single_target_dataset = 201;
Returns
Type
Description
BigQueryDestinationConfig.SingleTargetDatasetOrBuilder
getSourceHierarchyDatasets()
public BigQueryDestinationConfig . SourceHierarchyDatasets getSourceHierarchyDatasets ()
Source hierarchy datasets.
.google.cloud.datastream.v1.BigQueryDestinationConfig.SourceHierarchyDatasets source_hierarchy_datasets = 202;
Returns
Type
Description
BigQueryDestinationConfig.SourceHierarchyDatasets
The sourceHierarchyDatasets.
getSourceHierarchyDatasetsOrBuilder()
public BigQueryDestinationConfig . SourceHierarchyDatasetsOrBuilder getSourceHierarchyDatasetsOrBuilder ()
Source hierarchy datasets.
.google.cloud.datastream.v1.BigQueryDestinationConfig.SourceHierarchyDatasets source_hierarchy_datasets = 202;
Returns
Type
Description
BigQueryDestinationConfig.SourceHierarchyDatasetsOrBuilder
getWriteModeCase()
public BigQueryDestinationConfig . WriteModeCase getWriteModeCase ()
Returns
Type
Description
BigQueryDestinationConfig.WriteModeCase
hasAppendOnly()
public boolean hasAppendOnly ()
Append only mode
.google.cloud.datastream.v1.BigQueryDestinationConfig.AppendOnly append_only = 302;
Returns
Type
Description
boolean
Whether the appendOnly field is set.
hasBlmtConfig()
public boolean hasBlmtConfig ()
Optional. Big Lake Managed Tables (BLMT) configuration.
.google.cloud.datastream.v1.BigQueryDestinationConfig.BlmtConfig blmt_config = 1 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
boolean
Whether the blmtConfig field is set.
hasDataFreshness()
public boolean hasDataFreshness ()
The guaranteed data freshness (in seconds) when querying tables created by
the stream. Editing this field will only affect new tables created in the
future, but existing tables will not be impacted. Lower values mean that
queries will return fresher data, but may result in higher cost.
.google.protobuf.Duration data_freshness = 300;
Returns
Type
Description
boolean
Whether the dataFreshness field is set.
hasMerge()
public boolean hasMerge ()
The standard mode
.google.cloud.datastream.v1.BigQueryDestinationConfig.Merge merge = 301;
Returns
Type
Description
boolean
Whether the merge field is set.
hasSingleTargetDataset()
public boolean hasSingleTargetDataset ()
Single destination dataset.
.google.cloud.datastream.v1.BigQueryDestinationConfig.SingleTargetDataset single_target_dataset = 201;
Returns
Type
Description
boolean
Whether the singleTargetDataset field is set.
hasSourceHierarchyDatasets()
public boolean hasSourceHierarchyDatasets ()
Source hierarchy datasets.
.google.cloud.datastream.v1.BigQueryDestinationConfig.SourceHierarchyDatasets source_hierarchy_datasets = 202;
Returns
Type
Description
boolean
Whether the sourceHierarchyDatasets field is set.
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
public BigQueryDestinationConfig . Builder newBuilderForType ()
Returns
Type
Description
BigQueryDestinationConfig.Builder
newBuilderForType(AbstractMessage.BuilderParent parent)
protected BigQueryDestinationConfig . Builder newBuilderForType ( AbstractMessage . BuilderParent parent )
Parameter
Name
Description
parent
BuilderParent
Returns
Type
Description
BigQueryDestinationConfig.Builder
Overrides
AbstractMessage.newBuilderForType(AbstractMessage.BuilderParent parent)
toBuilder()
public BigQueryDestinationConfig . Builder toBuilder ()
Returns
Type
Description
BigQueryDestinationConfig.Builder
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
