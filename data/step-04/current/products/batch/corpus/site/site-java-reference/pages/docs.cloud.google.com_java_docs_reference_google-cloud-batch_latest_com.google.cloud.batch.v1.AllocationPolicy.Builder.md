---
title: "Class AllocationPolicy.Builder (0.88.0) \_|\_ Java client libraries \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-batch/latest/com.google.cloud.batch.v1.AllocationPolicy.Builder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-batch/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-batch/latest/com.google.cloud.batch.v1.AllocationPolicy.Builder
  title: "Class AllocationPolicy.Builder (0.88.0) \_|\_ Java client libraries \_|\_\
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
Class AllocationPolicy.Builder (0.88.0)
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
public static final class AllocationPolicy . Builder extends GeneratedMessage . Builder<AllocationPolicy . Builder > implements AllocationPolicyOrBuilder
A Job's resource allocation policy describes when, where, and how compute
resources should be allocated for the Job.
Protobuf type google.cloud.batch.v1.AllocationPolicy
Inheritance
java.lang.Object >
AbstractMessageLite.Builder<MessageType,BuilderType> >
AbstractMessage.Builder<BuilderType> >
GeneratedMessage.Builder >
AllocationPolicy.Builder
Implements
AllocationPolicyOrBuilder
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
addAllInstances(Iterable<? extends AllocationPolicy.InstancePolicyOrTemplate> values)
public AllocationPolicy . Builder addAllInstances ( Iterable < ? extends AllocationPolicy . InstancePolicyOrTemplate > values )
Describe instances that can be created by this AllocationPolicy.
Only instances[0] is supported now.
repeated .google.cloud.batch.v1.AllocationPolicy.InstancePolicyOrTemplate instances = 8;
Parameter
Name
Description
values
Iterable < ? extends com.google.cloud.batch.v1.AllocationPolicy.InstancePolicyOrTemplate >
Returns
Type
Description
AllocationPolicy.Builder
addAllTags(Iterable<String> values)
public AllocationPolicy . Builder addAllTags ( Iterable<String> values )
Optional. Tags applied to the VM instances.
The tags identify valid sources or targets for network firewalls.
Each tag must be 1-63 characters long, and comply with
RFC1035 .
repeated string tags = 11 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
values
Iterable < String > The tags to add.
Returns
Type
Description
AllocationPolicy.Builder
This builder for chaining.
addInstances(AllocationPolicy.InstancePolicyOrTemplate value)
public AllocationPolicy . Builder addInstances ( AllocationPolicy . InstancePolicyOrTemplate value )
Describe instances that can be created by this AllocationPolicy.
Only instances[0] is supported now.
repeated .google.cloud.batch.v1.AllocationPolicy.InstancePolicyOrTemplate instances = 8;
Parameter
Name
Description
value
AllocationPolicy.InstancePolicyOrTemplate
Returns
Type
Description
AllocationPolicy.Builder
addInstances(AllocationPolicy.InstancePolicyOrTemplate.Builder builderForValue)
public AllocationPolicy . Builder addInstances ( AllocationPolicy . InstancePolicyOrTemplate . Builder builderForValue )
Describe instances that can be created by this AllocationPolicy.
Only instances[0] is supported now.
repeated .google.cloud.batch.v1.AllocationPolicy.InstancePolicyOrTemplate instances = 8;
Parameter
Name
Description
builderForValue
AllocationPolicy.InstancePolicyOrTemplate.Builder
Returns
Type
Description
AllocationPolicy.Builder
addInstances(int index, AllocationPolicy.InstancePolicyOrTemplate value)
public AllocationPolicy . Builder addInstances ( int index , AllocationPolicy . InstancePolicyOrTemplate value )
Describe instances that can be created by this AllocationPolicy.
Only instances[0] is supported now.
repeated .google.cloud.batch.v1.AllocationPolicy.InstancePolicyOrTemplate instances = 8;
Parameters
Name
Description
index
int
value
AllocationPolicy.InstancePolicyOrTemplate
Returns
Type
Description
AllocationPolicy.Builder
addInstances(int index, AllocationPolicy.InstancePolicyOrTemplate.Builder builderForValue)
public AllocationPolicy . Builder addInstances ( int index , AllocationPolicy . InstancePolicyOrTemplate . Builder builderForValue )
Describe instances that can be created by this AllocationPolicy.
Only instances[0] is supported now.
repeated .google.cloud.batch.v1.AllocationPolicy.InstancePolicyOrTemplate instances = 8;
Parameters
Name
Description
index
int
builderForValue
AllocationPolicy.InstancePolicyOrTemplate.Builder
Returns
Type
Description
AllocationPolicy.Builder
addInstancesBuilder()
public AllocationPolicy . InstancePolicyOrTemplate . Builder addInstancesBuilder ()
Describe instances that can be created by this AllocationPolicy.
Only instances[0] is supported now.
repeated .google.cloud.batch.v1.AllocationPolicy.InstancePolicyOrTemplate instances = 8;
Returns
Type
Description
AllocationPolicy.InstancePolicyOrTemplate.Builder
addInstancesBuilder(int index)
public AllocationPolicy . InstancePolicyOrTemplate . Builder addInstancesBuilder ( int index )
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
AllocationPolicy.InstancePolicyOrTemplate.Builder
addTags(String value)
public AllocationPolicy . Builder addTags ( String value )
Optional. Tags applied to the VM instances.
The tags identify valid sources or targets for network firewalls.
Each tag must be 1-63 characters long, and comply with
RFC1035 .
repeated string tags = 11 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
value
String The tags to add.
Returns
Type
Description
AllocationPolicy.Builder
This builder for chaining.
addTagsBytes(ByteString value)
public AllocationPolicy . Builder addTagsBytes ( ByteString value )
Optional. Tags applied to the VM instances.
The tags identify valid sources or targets for network firewalls.
Each tag must be 1-63 characters long, and comply with
RFC1035 .
repeated string tags = 11 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
value
ByteString The bytes of the tags to add.
Returns
Type
Description
AllocationPolicy.Builder
This builder for chaining.
build()
public AllocationPolicy build ()
Returns
Type
Description
AllocationPolicy
buildPartial()
public AllocationPolicy buildPartial ()
Returns
Type
Description
AllocationPolicy
clear()
public AllocationPolicy . Builder clear ()
Returns
Type
Description
AllocationPolicy.Builder
Overrides
GeneratedMessage.Builder<BuilderType>.clear()
clearInstances()
public AllocationPolicy . Builder clearInstances ()
Describe instances that can be created by this AllocationPolicy.
Only instances[0] is supported now.
repeated .google.cloud.batch.v1.AllocationPolicy.InstancePolicyOrTemplate instances = 8;
Returns
Type
Description
AllocationPolicy.Builder
clearLabels()
public AllocationPolicy . Builder clearLabels ()
Returns
Type
Description
AllocationPolicy.Builder
clearLocation()
public AllocationPolicy . Builder clearLocation ()
Location where compute resources should be allocated for the Job.
.google.cloud.batch.v1.AllocationPolicy.LocationPolicy location = 1;
Returns
Type
Description
AllocationPolicy.Builder
clearNetwork()
public AllocationPolicy . Builder clearNetwork ()
The network policy.
If you define an instance template in the InstancePolicyOrTemplate field,
Batch will use the network settings in the instance template instead of
this field.
.google.cloud.batch.v1.AllocationPolicy.NetworkPolicy network = 7;
Returns
Type
Description
AllocationPolicy.Builder
clearPlacement()
public AllocationPolicy . Builder clearPlacement ()
The placement policy.
.google.cloud.batch.v1.AllocationPolicy.PlacementPolicy placement = 10;
Returns
Type
Description
AllocationPolicy.Builder
clearServiceAccount()
public AllocationPolicy . Builder clearServiceAccount ()
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
AllocationPolicy.Builder
clearTags()
public AllocationPolicy . Builder clearTags ()
Optional. Tags applied to the VM instances.
The tags identify valid sources or targets for network firewalls.
Each tag must be 1-63 characters long, and comply with
RFC1035 .
repeated string tags = 11 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
AllocationPolicy.Builder
This builder for chaining.
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
getDefaultInstanceForType()
public AllocationPolicy getDefaultInstanceForType ()
Returns
Type
Description
AllocationPolicy
getDescriptorForType()
public Descriptors . Descriptor getDescriptorForType ()
Returns
Type
Description
Descriptor
Overrides
GeneratedMessage.Builder<BuilderType>.getDescriptorForType()
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
getInstancesBuilder(int index)
public AllocationPolicy . InstancePolicyOrTemplate . Builder getInstancesBuilder ( int index )
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
AllocationPolicy.InstancePolicyOrTemplate.Builder
getInstancesBuilderList()
public List<AllocationPolicy . InstancePolicyOrTemplate . Builder > getInstancesBuilderList ()
Describe instances that can be created by this AllocationPolicy.
Only instances[0] is supported now.
repeated .google.cloud.batch.v1.AllocationPolicy.InstancePolicyOrTemplate instances = 8;
Returns
Type
Description
List < Builder >
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
getLocationBuilder()
public AllocationPolicy . LocationPolicy . Builder getLocationBuilder ()
Location where compute resources should be allocated for the Job.
.google.cloud.batch.v1.AllocationPolicy.LocationPolicy location = 1;
Returns
Type
Description
AllocationPolicy.LocationPolicy.Builder
getLocationOrBuilder()
public AllocationPolicy . LocationPolicyOrBuilder getLocationOrBuilder ()
Location where compute resources should be allocated for the Job.
.google.cloud.batch.v1.AllocationPolicy.LocationPolicy location = 1;
Returns
Type
Description
AllocationPolicy.LocationPolicyOrBuilder
getMutableLabels() (deprecated)
public Map<String , String > getMutableLabels ()
Use alternate mutation accessors instead.
Returns
Type
Description
Map < String , String >
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
getNetworkBuilder()
public AllocationPolicy . NetworkPolicy . Builder getNetworkBuilder ()
The network policy.
If you define an instance template in the InstancePolicyOrTemplate field,
Batch will use the network settings in the instance template instead of
this field.
.google.cloud.batch.v1.AllocationPolicy.NetworkPolicy network = 7;
Returns
Type
Description
AllocationPolicy.NetworkPolicy.Builder
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
getPlacement()
public AllocationPolicy . PlacementPolicy getPlacement ()
The placement policy.
.google.cloud.batch.v1.AllocationPolicy.PlacementPolicy placement = 10;
Returns
Type
Description
AllocationPolicy.PlacementPolicy
The placement.
getPlacementBuilder()
public AllocationPolicy . PlacementPolicy . Builder getPlacementBuilder ()
The placement policy.
.google.cloud.batch.v1.AllocationPolicy.PlacementPolicy placement = 10;
Returns
Type
Description
AllocationPolicy.PlacementPolicy.Builder
getPlacementOrBuilder()
public AllocationPolicy . PlacementPolicyOrBuilder getPlacementOrBuilder ()
The placement policy.
.google.cloud.batch.v1.AllocationPolicy.PlacementPolicy placement = 10;
Returns
Type
Description
AllocationPolicy.PlacementPolicyOrBuilder
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
getServiceAccountBuilder()
public ServiceAccount . Builder getServiceAccountBuilder ()
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
ServiceAccount.Builder
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
internalGetFieldAccessorTable()
protected GeneratedMessage . FieldAccessorTable internalGetFieldAccessorTable ()
Returns
Type
Description
FieldAccessorTable
Overrides
GeneratedMessage.Builder<BuilderType>.internalGetFieldAccessorTable()
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
com.google.protobuf.GeneratedMessage.Builder.internalGetMapFieldReflection(int)
internalGetMutableMapFieldReflection(int number)
protected MapFieldReflectionAccessor internalGetMutableMapFieldReflection ( int number )
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
com.google.protobuf.GeneratedMessage.Builder.internalGetMutableMapFieldReflection(int)
isInitialized()
public final boolean isInitialized ()
Returns
Type
Description
boolean
Overrides
GeneratedMessage.Builder<BuilderType>.isInitialized()
mergeFrom(AllocationPolicy other)
public AllocationPolicy . Builder mergeFrom ( AllocationPolicy other )
Parameter
Name
Description
other
AllocationPolicy
Returns
Type
Description
AllocationPolicy.Builder
mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public AllocationPolicy . Builder mergeFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
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
AllocationPolicy.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
Exceptions
Type
Description
IOException
mergeFrom(Message other)
public AllocationPolicy . Builder mergeFrom ( Message other )
Parameter
Name
Description
other
Message
Returns
Type
Description
AllocationPolicy.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)
mergeLocation(AllocationPolicy.LocationPolicy value)
public AllocationPolicy . Builder mergeLocation ( AllocationPolicy . LocationPolicy value )
Location where compute resources should be allocated for the Job.
.google.cloud.batch.v1.AllocationPolicy.LocationPolicy location = 1;
Parameter
Name
Description
value
AllocationPolicy.LocationPolicy
Returns
Type
Description
AllocationPolicy.Builder
mergeNetwork(AllocationPolicy.NetworkPolicy value)
public AllocationPolicy . Builder mergeNetwork ( AllocationPolicy . NetworkPolicy value )
The network policy.
If you define an instance template in the InstancePolicyOrTemplate field,
Batch will use the network settings in the instance template instead of
this field.
.google.cloud.batch.v1.AllocationPolicy.NetworkPolicy network = 7;
Parameter
Name
Description
value
AllocationPolicy.NetworkPolicy
Returns
Type
Description
AllocationPolicy.Builder
mergePlacement(AllocationPolicy.PlacementPolicy value)
public AllocationPolicy . Builder mergePlacement ( AllocationPolicy . PlacementPolicy value )
The placement policy.
.google.cloud.batch.v1.AllocationPolicy.PlacementPolicy placement = 10;
Parameter
Name
Description
value
AllocationPolicy.PlacementPolicy
Returns
Type
Description
AllocationPolicy.Builder
mergeServiceAccount(ServiceAccount value)
public AllocationPolicy . Builder mergeServiceAccount ( ServiceAccount value )
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
Parameter
Name
Description
value
ServiceAccount
Returns
Type
Description
AllocationPolicy.Builder
putAllLabels(Map<String,String> values)
public AllocationPolicy . Builder putAllLabels ( Map<String , String > values )
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
values
Map < String , String >
Returns
Type
Description
AllocationPolicy.Builder
putLabels(String key, String value)
public AllocationPolicy . Builder putLabels ( String key , String value )
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
value
String
Returns
Type
Description
AllocationPolicy.Builder
removeInstances(int index)
public AllocationPolicy . Builder removeInstances ( int index )
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
AllocationPolicy.Builder
removeLabels(String key)
public AllocationPolicy . Builder removeLabels ( String key )
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
AllocationPolicy.Builder
setInstances(int index, AllocationPolicy.InstancePolicyOrTemplate value)
public AllocationPolicy . Builder setInstances ( int index , AllocationPolicy . InstancePolicyOrTemplate value )
Describe instances that can be created by this AllocationPolicy.
Only instances[0] is supported now.
repeated .google.cloud.batch.v1.AllocationPolicy.InstancePolicyOrTemplate instances = 8;
Parameters
Name
Description
index
int
value
AllocationPolicy.InstancePolicyOrTemplate
Returns
Type
Description
AllocationPolicy.Builder
setInstances(int index, AllocationPolicy.InstancePolicyOrTemplate.Builder builderForValue)
public AllocationPolicy . Builder setInstances ( int index , AllocationPolicy . InstancePolicyOrTemplate . Builder builderForValue )
Describe instances that can be created by this AllocationPolicy.
Only instances[0] is supported now.
repeated .google.cloud.batch.v1.AllocationPolicy.InstancePolicyOrTemplate instances = 8;
Parameters
Name
Description
index
int
builderForValue
AllocationPolicy.InstancePolicyOrTemplate.Builder
Returns
Type
Description
AllocationPolicy.Builder
setLocation(AllocationPolicy.LocationPolicy value)
public AllocationPolicy . Builder setLocation ( AllocationPolicy . LocationPolicy value )
Location where compute resources should be allocated for the Job.
.google.cloud.batch.v1.AllocationPolicy.LocationPolicy location = 1;
Parameter
Name
Description
value
AllocationPolicy.LocationPolicy
Returns
Type
Description
AllocationPolicy.Builder
setLocation(AllocationPolicy.LocationPolicy.Builder builderForValue)
public AllocationPolicy . Builder setLocation ( AllocationPolicy . LocationPolicy . Builder builderForValue )
Location where compute resources should be allocated for the Job.
.google.cloud.batch.v1.AllocationPolicy.LocationPolicy location = 1;
Parameter
Name
Description
builderForValue
AllocationPolicy.LocationPolicy.Builder
Returns
Type
Description
AllocationPolicy.Builder
setNetwork(AllocationPolicy.NetworkPolicy value)
public AllocationPolicy . Builder setNetwork ( AllocationPolicy . NetworkPolicy value )
The network policy.
If you define an instance template in the InstancePolicyOrTemplate field,
Batch will use the network settings in the instance template instead of
this field.
.google.cloud.batch.v1.AllocationPolicy.NetworkPolicy network = 7;
Parameter
Name
Description
value
AllocationPolicy.NetworkPolicy
Returns
Type
Description
AllocationPolicy.Builder
setNetwork(AllocationPolicy.NetworkPolicy.Builder builderForValue)
public AllocationPolicy . Builder setNetwork ( AllocationPolicy . NetworkPolicy . Builder builderForValue )
The network policy.
If you define an instance template in the InstancePolicyOrTemplate field,
Batch will use the network settings in the instance template instead of
this field.
.google.cloud.batch.v1.AllocationPolicy.NetworkPolicy network = 7;
Parameter
Name
Description
builderForValue
AllocationPolicy.NetworkPolicy.Builder
Returns
Type
Description
AllocationPolicy.Builder
setPlacement(AllocationPolicy.PlacementPolicy value)
public AllocationPolicy . Builder setPlacement ( AllocationPolicy . PlacementPolicy value )
The placement policy.
.google.cloud.batch.v1.AllocationPolicy.PlacementPolicy placement = 10;
Parameter
Name
Description
value
AllocationPolicy.PlacementPolicy
Returns
Type
Description
AllocationPolicy.Builder
setPlacement(AllocationPolicy.PlacementPolicy.Builder builderForValue)
public AllocationPolicy . Builder setPlacement ( AllocationPolicy . PlacementPolicy . Builder builderForValue )
The placement policy.
.google.cloud.batch.v1.AllocationPolicy.PlacementPolicy placement = 10;
Parameter
Name
Description
builderForValue
AllocationPolicy.PlacementPolicy.Builder
Returns
Type
Description
AllocationPolicy.Builder
setServiceAccount(ServiceAccount value)
public AllocationPolicy . Builder setServiceAccount ( ServiceAccount value )
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
Parameter
Name
Description
value
ServiceAccount
Returns
Type
Description
AllocationPolicy.Builder
setServiceAccount(ServiceAccount.Builder builderForValue)
public AllocationPolicy . Builder setServiceAccount ( ServiceAccount . Builder builderForValue )
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
Parameter
Name
Description
builderForValue
ServiceAccount.Builder
Returns
Type
Description
AllocationPolicy.Builder
setTags(int index, String value)
public AllocationPolicy . Builder setTags ( int index , String value )
Optional. Tags applied to the VM instances.
The tags identify valid sources or targets for network firewalls.
Each tag must be 1-63 characters long, and comply with
RFC1035 .
repeated string tags = 11 [(.google.api.field_behavior) = OPTIONAL];
Parameters
Name
Description
index
int The index to set the value at.
value
String The tags to set.
Returns
Type
Description
AllocationPolicy.Builder
This builder for chaining.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-29 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-29 UTC."],[],[]]
