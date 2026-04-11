---
title: "Class AllocationPolicy (0.88.0) \_|\_ Java client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-batch/latest/com.google.cloud.batch.v1.AllocationPolicy
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-batch/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-batch/latest/com.google.cloud.batch.v1.AllocationPolicy
  title: "Class AllocationPolicy (0.88.0) \_|\_ Java client libraries \_|\_ Google\
    \ Cloud Documentation"
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
Class AllocationPolicy (0.88.0)
Stay organized with collections
Save and categorize content based on your preferences.
0.88.0 (latest)
0.87.0
0.85.0
0.83.0
0.82.0
0.81.0
0.80.0
0.78.0
0.76.0
0.75.0
0.74.0
0.73.0
0.72.0
0.70.0
0.68.0
0.67.0
0.64.0
0.63.0
0.62.0
0.60.0
0.59.0
0.58.0
0.57.0
0.56.0
0.55.0
0.54.0
0.53.0
0.52.0
0.51.0
0.49.0
0.48.0
0.47.0
0.46.0
0.45.0
0.44.0
0.43.0
0.42.0
0.41.0
0.40.0
0.39.0
0.37.0
0.36.0
0.35.0
0.34.0
0.33.0
0.32.0
0.31.0
0.30.0
0.29.0
0.28.0
0.27.0
0.24.0
0.23.0
0.22.0
0.21.0
0.20.0
0.19.0
0.18.0
0.17.0
0.16.0
0.15.0
0.14.0
0.13.0
0.12.0
0.11.0
0.10.0
0.9.0
0.8.0
0.7.0
0.6.0
0.5.0
0.4.0
0.3.2
0.2.2
0.1.1
public final class AllocationPolicy extends GeneratedMessage implements AllocationPolicyOrBuilder
A Job's resource allocation policy describes when, where, and how compute
resources should be allocated for the Job.
Protobuf type google.cloud.batch.v1.AllocationPolicy
Inheritance
Object >
AbstractMessageLite<MessageType,BuilderType> >
AbstractMessage >
GeneratedMessage >
AllocationPolicy
Implements
AllocationPolicyOrBuilder
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
INSTANCES_FIELD_NUMBER
public static final int INSTANCES_FIELD_NUMBER
Field Value
Type
Description
int
LABELS_FIELD_NUMBER
public static final int LABELS_FIELD_NUMBER
Field Value
Type
Description
int
LOCATION_FIELD_NUMBER
public static final int LOCATION_FIELD_NUMBER
Field Value
Type
Description
int
NETWORK_FIELD_NUMBER
public static final int NETWORK_FIELD_NUMBER
Field Value
Type
Description
int
PLACEMENT_FIELD_NUMBER
public static final int PLACEMENT_FIELD_NUMBER
Field Value
Type
Description
int
SERVICE_ACCOUNT_FIELD_NUMBER
public static final int SERVICE_ACCOUNT_FIELD_NUMBER
Field Value
Type
Description
int
TAGS_FIELD_NUMBER
public static final int TAGS_FIELD_NUMBER
Field Value
Type
Description
int
Static Methods
getDefaultInstance()
public static AllocationPolicy getDefaultInstance ()
Returns
Type
Description
AllocationPolicy
getDescriptor()
public static final Descriptors . Descriptor getDescriptor ()
Returns
Type
Description
Descriptor
newBuilder()
public static AllocationPolicy . Builder newBuilder ()
Returns
Type
Description
AllocationPolicy.Builder
newBuilder(AllocationPolicy prototype)
public static AllocationPolicy . Builder newBuilder ( AllocationPolicy prototype )
Parameter
Name
Description
prototype
AllocationPolicy
Returns
Type
Description
AllocationPolicy.Builder
parseDelimitedFrom(InputStream input)
public static AllocationPolicy parseDelimitedFrom ( InputStream input )
Parameter
Name
Description
input
InputStream
Returns
Type
Description
AllocationPolicy
Exceptions
Type
Description
IOException
parseDelimitedFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
public static AllocationPolicy parseDelimitedFrom ( InputStream input , ExtensionRegistryLite extensionRegistry )
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
AllocationPolicy
Exceptions
Type
Description
IOException
parseFrom(byte[] data)
public static AllocationPolicy parseFrom ( byte [] data )
Parameter
Name
Description
data
byte []
Returns
Type
Description
AllocationPolicy
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(byte[] data, ExtensionRegistryLite extensionRegistry)
public static AllocationPolicy parseFrom ( byte [] data , ExtensionRegistryLite extensionRegistry )
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
AllocationPolicy
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteString data)
public static AllocationPolicy parseFrom ( ByteString data )
Parameter
Name
Description
data
ByteString
Returns
Type
Description
AllocationPolicy
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteString data, ExtensionRegistryLite extensionRegistry)
public static AllocationPolicy parseFrom ( ByteString data , ExtensionRegistryLite extensionRegistry )
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
AllocationPolicy
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(CodedInputStream input)
public static AllocationPolicy parseFrom ( CodedInputStream input )
Parameter
Name
Description
input
CodedInputStream
Returns
Type
Description
AllocationPolicy
Exceptions
Type
Description
IOException
parseFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public static AllocationPolicy parseFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
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
AllocationPolicy
Exceptions
Type
Description
IOException
parseFrom(InputStream input)
public static AllocationPolicy parseFrom ( InputStream input )
Parameter
Name
Description
input
InputStream
Returns
Type
Description
AllocationPolicy
Exceptions
Type
Description
IOException
parseFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
public static AllocationPolicy parseFrom ( InputStream input , ExtensionRegistryLite extensionRegistry )
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
AllocationPolicy
Exceptions
Type
Description
IOException
parseFrom(ByteBuffer data)
public static AllocationPolicy parseFrom ( ByteBuffer data )
Parameter
Name
Description
data
ByteBuffer
Returns
Type
Description
AllocationPolicy
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteBuffer data, ExtensionRegistryLite extensionRegistry)
public static AllocationPolicy parseFrom ( ByteBuffer data , ExtensionRegistryLite extensionRegistry )
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
AllocationPolicy
Exceptions
Type
Description
InvalidProtocolBufferException
parser()
public static Parser<AllocationPolicy> parser ()
Returns
Type
Description
Parser < AllocationPolicy >
Methods
containsLabels(String key)
public boolean containsLabels ( String key )
Custom labels to apply to the job and all the Compute Engine resources
that both are created by this allocation policy and support labels.
Use labels to group and describe the resources they are applied to. Batch
automatically applies predefined labels and supports multiple labels
fields for each job, which each let you apply custom labels to various
resources. Label names that start with "goog-" or "google-" are
reserved for predefined labels. For more information about labels with
Batch, see
Organize resources using
labels .
map<string, string> labels = 6;
Parameter
Name
Description
key
String
Returns
Type
Description
boolean
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
getDefaultInstanceForType()
public AllocationPolicy getDefaultInstanceForType ()
Returns
Type
Description
AllocationPolicy
getInstances(int index)
public AllocationPolicy . InstancePolicyOrTemplate getInstances ( int index )
Describe instances that can be created by this AllocationPolicy.
Only instances[0] is supported now.
repeated .google.cloud.batch.v1.AllocationPolicy.InstancePolicyOrTemplate instances = 8;
Parameter
Name
Description
index
int
Returns
Type
Description
AllocationPolicy.InstancePolicyOrTemplate
getInstancesCount()
public int getInstancesCount ()
Describe instances that can be created by this AllocationPolicy.
Only instances[0] is supported now.
repeated .google.cloud.batch.v1.AllocationPolicy.InstancePolicyOrTemplate instances = 8;
Returns
Type
Description
int
getInstancesList()
public List<AllocationPolicy . InstancePolicyOrTemplate > getInstancesList ()
Describe instances that can be created by this AllocationPolicy.
Only instances[0] is supported now.
repeated .google.cloud.batch.v1.AllocationPolicy.InstancePolicyOrTemplate instances = 8;
Returns
Type
Description
List < InstancePolicyOrTemplate >
getInstancesOrBuilder(int index)
public AllocationPolicy . InstancePolicyOrTemplateOrBuilder getInstancesOrBuilder ( int index )
Describe instances that can be created by this AllocationPolicy.
Only instances[0] is supported now.
repeated .google.cloud.batch.v1.AllocationPolicy.InstancePolicyOrTemplate instances = 8;
Parameter
Name
Description
index
int
Returns
Type
Description
AllocationPolicy.InstancePolicyOrTemplateOrBuilder
getInstancesOrBuilderList()
public List < ? extends AllocationPolicy . InstancePolicyOrTemplateOrBuilder > getInstancesOrBuilderList ()
Describe instances that can be created by this AllocationPolicy.
Only instances[0] is supported now.
repeated .google.cloud.batch.v1.AllocationPolicy.InstancePolicyOrTemplate instances = 8;
Returns
Type
Description
List < ? extends com.google.cloud.batch.v1.AllocationPolicy.InstancePolicyOrTemplateOrBuilder >
getLabels() (deprecated)
public Map<String , String > getLabels ()
Use #getLabelsMap() instead.
Returns
Type
Description
Map < String , String >
getLabelsCount()
public int getLabelsCount ()
Custom labels to apply to the job and all the Compute Engine resources
that both are created by this allocation policy and support labels.
Use labels to group and describe the resources they are applied to. Batch
automatically applies predefined labels and supports multiple labels
fields for each job, which each let you apply custom labels to various
resources. Label names that start with "goog-" or "google-" are
reserved for predefined labels. For more information about labels with
Batch, see
Organize resources using
labels .
map<string, string> labels = 6;
Returns
Type
Description
int
getLabelsMap()
public Map<String , String > getLabelsMap ()
Custom labels to apply to the job and all the Compute Engine resources
that both are created by this allocation policy and support labels.
Use labels to group and describe the resources they are applied to. Batch
automatically applies predefined labels and supports multiple labels
fields for each job, which each let you apply custom labels to various
resources. Label names that start with "goog-" or "google-" are
reserved for predefined labels. For more information about labels with
Batch, see
Organize resources using
labels .
map<string, string> labels = 6;
Returns
Type
Description
Map < String , String >
getLabelsOrDefault(String key, String defaultValue)
public String getLabelsOrDefault ( String key , String defaultValue )
Custom labels to apply to the job and all the Compute Engine resources
that both are created by this allocation policy and support labels.
Use labels to group and describe the resources they are applied to. Batch
automatically applies predefined labels and supports multiple labels
fields for each job, which each let you apply custom labels to various
resources. Label names that start with "goog-" or "google-" are
reserved for predefined labels. For more information about labels with
Batch, see
Organize resources using
labels .
map<string, string> labels = 6;
Parameters
Name
Description
key
String
defaultValue
String
Returns
Type
Description
String
getLabelsOrThrow(String key)
public String getLabelsOrThrow ( String key )
Custom labels to apply to the job and all the Compute Engine resources
that both are created by this allocation policy and support labels.
Use labels to group and describe the resources they are applied to. Batch
automatically applies predefined labels and supports multiple labels
fields for each job, which each let you apply custom labels to various
resources. Label names that start with "goog-" or "google-" are
reserved for predefined labels. For more information about labels with
Batch, see
Organize resources using
labels .
map<string, string> labels = 6;
Parameter
Name
Description
key
String
Returns
Type
Description
String
getLocation()
public AllocationPolicy . LocationPolicy getLocation ()
Location where compute resources should be allocated for the Job.
.google.cloud.batch.v1.AllocationPolicy.LocationPolicy location = 1;
Returns
Type
Description
AllocationPolicy.LocationPolicy
The location.
getLocationOrBuilder()
public AllocationPolicy . LocationPolicyOrBuilder getLocationOrBuilder ()
Location where compute resources should be allocated for the Job.
.google.cloud.batch.v1.AllocationPolicy.LocationPolicy location = 1;
Returns
Type
Description
AllocationPolicy.LocationPolicyOrBuilder
getNetwork()
public AllocationPolicy . NetworkPolicy getNetwork ()
The network policy.
If you define an instance template in the InstancePolicyOrTemplate field,
Batch will use the network settings in the instance template instead of
this field.
.google.cloud.batch.v1.AllocationPolicy.NetworkPolicy network = 7;
Returns
Type
Description
AllocationPolicy.NetworkPolicy
The network.
getNetworkOrBuilder()
public AllocationPolicy . NetworkPolicyOrBuilder getNetworkOrBuilder ()
The network policy.
If you define an instance template in the InstancePolicyOrTemplate field,
Batch will use the network settings in the instance template instead of
this field.
.google.cloud.batch.v1.AllocationPolicy.NetworkPolicy network = 7;
Returns
Type
Description
AllocationPolicy.NetworkPolicyOrBuilder
getParserForType()
public Parser<AllocationPolicy> getParserForType ()
Returns
Type
Description
Parser < AllocationPolicy >
Overrides
GeneratedMessage.getParserForType()
getPlacement()
public AllocationPolicy . PlacementPolicy getPlacement ()
The placement policy.
.google.cloud.batch.v1.AllocationPolicy.PlacementPolicy placement = 10;
Returns
Type
Description
AllocationPolicy.PlacementPolicy
The placement.
getPlacementOrBuilder()
public AllocationPolicy . PlacementPolicyOrBuilder getPlacementOrBuilder ()
The placement policy.
.google.cloud.batch.v1.AllocationPolicy.PlacementPolicy placement = 10;
Returns
Type
Description
AllocationPolicy.PlacementPolicyOrBuilder
getSerializedSize()
public int getSerializedSize ()
Returns
Type
Description
int
Overrides
GeneratedMessage.getSerializedSize()
getServiceAccount()
public ServiceAccount getServiceAccount ()
Defines the service account for Batch-created VMs. If omitted, the default
Compute Engine service
account
is used. Must match the service account specified in any used instance
template configured in the Batch job.
Includes the following fields:
email: The service account's email address. If not set, the default
Compute Engine service account is used.
scopes: Additional OAuth scopes to grant the service account, beyond the
default cloud-platform scope. (list of strings)
.google.cloud.batch.v1.ServiceAccount service_account = 9;
Returns
Type
Description
ServiceAccount
The serviceAccount.
getServiceAccountOrBuilder()
public ServiceAccountOrBuilder getServiceAccountOrBuilder ()
Defines the service account for Batch-created VMs. If omitted, the default
Compute Engine service
account
is used. Must match the service account specified in any used instance
template configured in the Batch job.
Includes the following fields:
email: The service account's email address. If not set, the default
Compute Engine service account is used.
scopes: Additional OAuth scopes to grant the service account, beyond the
default cloud-platform scope. (list of strings)
.google.cloud.batch.v1.ServiceAccount service_account = 9;
Returns
Type
Description
ServiceAccountOrBuilder
getTags(int index)
public String getTags ( int index )
Optional. Tags applied to the VM instances.
The tags identify valid sources or targets for network firewalls.
Each tag must be 1-63 characters long, and comply with
RFC1035 .
repeated string tags = 11 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
index
int The index of the element to return.
Returns
Type
Description
String
The tags at the given index.
getTagsBytes(int index)
public ByteString getTagsBytes ( int index )
Optional. Tags applied to the VM instances.
The tags identify valid sources or targets for network firewalls.
Each tag must be 1-63 characters long, and comply with
RFC1035 .
repeated string tags = 11 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
index
int The index of the value to return.
Returns
Type
Description
ByteString
The bytes of the tags at the given index.
getTagsCount()
public int getTagsCount ()
Optional. Tags applied to the VM instances.
The tags identify valid sources or targets for network firewalls.
Each tag must be 1-63 characters long, and comply with
RFC1035 .
repeated string tags = 11 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
int
The count of tags.
getTagsList()
public ProtocolStringList getTagsList ()
Optional. Tags applied to the VM instances.
The tags identify valid sources or targets for network firewalls.
Each tag must be 1-63 characters long, and comply with
RFC1035 .
repeated string tags = 11 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
ProtocolStringList
A list containing the tags.
hasLocation()
public boolean hasLocation ()
Location where compute resources should be allocated for the Job.
.google.cloud.batch.v1.AllocationPolicy.LocationPolicy location = 1;
Returns
Type
Description
boolean
Whether the location field is set.
hasNetwork()
public boolean hasNetwork ()
The network policy.
If you define an instance template in the InstancePolicyOrTemplate field,
Batch will use the network settings in the instance template instead of
this field.
.google.cloud.batch.v1.AllocationPolicy.NetworkPolicy network = 7;
Returns
Type
Description
boolean
Whether the network field is set.
hasPlacement()
public boolean hasPlacement ()
The placement policy.
.google.cloud.batch.v1.AllocationPolicy.PlacementPolicy placement = 10;
Returns
Type
Description
boolean
Whether the placement field is set.
hasServiceAccount()
public boolean hasServiceAccount ()
Defines the service account for Batch-created VMs. If omitted, the default
Compute Engine service
account
is used. Must match the service account specified in any used instance
template configured in the Batch job.
Includes the following fields:
email: The service account's email address. If not set, the default
Compute Engine service account is used.
scopes: Additional OAuth scopes to grant the service account, beyond the
default cloud-platform scope. (list of strings)
.google.cloud.batch.v1.ServiceAccount service_account = 9;
Returns
Type
Description
boolean
Whether the serviceAccount field is set.
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
internalGetMapFieldReflection(int number)
protected MapFieldReflectionAccessor internalGetMapFieldReflection ( int number )
Parameter
Name
Description
number
int
Returns
Type
Description
com.google.protobuf.MapFieldReflectionAccessor
Overrides
com.google.protobuf.GeneratedMessage.internalGetMapFieldReflection(int)
isInitialized()
public final boolean isInitialized ()
Returns
Type
Description
boolean
Overrides
GeneratedMessage.isInitialized()
newBuilderForType()
public AllocationPolicy . Builder newBuilderForType ()
Returns
Type
Description
AllocationPolicy.Builder
newBuilderForType(AbstractMessage.BuilderParent parent)
protected AllocationPolicy . Builder newBuilderForType ( AbstractMessage . BuilderParent parent )
Parameter
Name
Description
parent
BuilderParent
Returns
Type
Description
AllocationPolicy.Builder
Overrides
AbstractMessage.newBuilderForType(AbstractMessage.BuilderParent parent)
toBuilder()
public AllocationPolicy . Builder toBuilder ()
Returns
Type
Description
AllocationPolicy.Builder
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
Last updated 2026-03-29 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-29 UTC."],[],[]]
