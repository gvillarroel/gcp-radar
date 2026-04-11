---
title: "Class AutoscalingPolicy.Builder (4.85.0) \_|\_ Java client libraries \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicy.Builder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicy.Builder
  title: "Class AutoscalingPolicy.Builder (4.85.0) \_|\_ Java client libraries \_\
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
Class AutoscalingPolicy.Builder (4.85.0)
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
public static final class AutoscalingPolicy . Builder extends GeneratedMessage . Builder<AutoscalingPolicy . Builder > implements AutoscalingPolicyOrBuilder
Describes an autoscaling policy for Dataproc cluster autoscaler.
Protobuf type google.cloud.dataproc.v1.AutoscalingPolicy
Inheritance
java.lang.Object >
AbstractMessageLite.Builder<MessageType,BuilderType> >
AbstractMessage.Builder<BuilderType> >
GeneratedMessage.Builder >
AutoscalingPolicy.Builder
Implements
AutoscalingPolicyOrBuilder
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
public AutoscalingPolicy build ()
Returns
Type
Description
AutoscalingPolicy
buildPartial()
public AutoscalingPolicy buildPartial ()
Returns
Type
Description
AutoscalingPolicy
clear()
public AutoscalingPolicy . Builder clear ()
Returns
Type
Description
AutoscalingPolicy.Builder
Overrides
GeneratedMessage.Builder<BuilderType>.clear()
clearAlgorithm()
public AutoscalingPolicy . Builder clearAlgorithm ()
Returns
Type
Description
AutoscalingPolicy.Builder
clearBasicAlgorithm()
public AutoscalingPolicy . Builder clearBasicAlgorithm ()
.google.cloud.dataproc.v1.BasicAutoscalingAlgorithm basic_algorithm = 3 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
AutoscalingPolicy.Builder
clearClusterType()
public AutoscalingPolicy . Builder clearClusterType ()
Optional. The type of the clusters for which this autoscaling policy is to
be configured.
.google.cloud.dataproc.v1.AutoscalingPolicy.ClusterType cluster_type = 7 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
AutoscalingPolicy.Builder
This builder for chaining.
clearId()
public AutoscalingPolicy . Builder clearId ()
Required. The policy id.
The id must contain only letters (a-z, A-Z), numbers (0-9),
underscores (_), and hyphens (-). Cannot begin or end with underscore
or hyphen. Must consist of between 3 and 50 characters.
string id = 1;
Returns
Type
Description
AutoscalingPolicy.Builder
This builder for chaining.
clearLabels()
public AutoscalingPolicy . Builder clearLabels ()
Returns
Type
Description
AutoscalingPolicy.Builder
clearName()
public AutoscalingPolicy . Builder clearName ()
Output only. The "resource name" of the autoscaling policy, as described
in https://cloud.google.com/apis/design/resource_names .
For projects.regions.autoscalingPolicies , the resource name of the
policy has the following format:
projects/{project_id}/regions/{region}/autoscalingPolicies/{policy_id}
For projects.locations.autoscalingPolicies , the resource name of the
policy has the following format:
projects/{project_id}/locations/{location}/autoscalingPolicies/{policy_id}
string name = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
AutoscalingPolicy.Builder
This builder for chaining.
clearSecondaryWorkerConfig()
public AutoscalingPolicy . Builder clearSecondaryWorkerConfig ()
Optional. Describes how the autoscaler will operate for secondary workers.
.google.cloud.dataproc.v1.InstanceGroupAutoscalingPolicyConfig secondary_worker_config = 5 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
AutoscalingPolicy.Builder
clearWorkerConfig()
public AutoscalingPolicy . Builder clearWorkerConfig ()
Required. Describes how the autoscaler will operate for primary workers.
.google.cloud.dataproc.v1.InstanceGroupAutoscalingPolicyConfig worker_config = 4 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
AutoscalingPolicy.Builder
containsLabels(String key)
public boolean containsLabels ( String key )
Optional. The labels to associate with this autoscaling policy.
Label keys must contain 1 to 63 characters, and must conform to
RFC 1035 .
Label values may be empty, but, if present, must contain 1 to 63
characters, and must conform to RFC
1035 . No more than 32 labels can be
associated with an autoscaling policy.
map<string, string> labels = 6 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
key
String
Returns
Type
Description
boolean
getAlgorithmCase()
public AutoscalingPolicy . AlgorithmCase getAlgorithmCase ()
Returns
Type
Description
AutoscalingPolicy.AlgorithmCase
getBasicAlgorithm()
public BasicAutoscalingAlgorithm getBasicAlgorithm ()
.google.cloud.dataproc.v1.BasicAutoscalingAlgorithm basic_algorithm = 3 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
BasicAutoscalingAlgorithm
The basicAlgorithm.
getBasicAlgorithmBuilder()
public BasicAutoscalingAlgorithm . Builder getBasicAlgorithmBuilder ()
.google.cloud.dataproc.v1.BasicAutoscalingAlgorithm basic_algorithm = 3 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
BasicAutoscalingAlgorithm.Builder
getBasicAlgorithmOrBuilder()
public BasicAutoscalingAlgorithmOrBuilder getBasicAlgorithmOrBuilder ()
.google.cloud.dataproc.v1.BasicAutoscalingAlgorithm basic_algorithm = 3 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
BasicAutoscalingAlgorithmOrBuilder
getClusterType()
public AutoscalingPolicy . ClusterType getClusterType ()
Optional. The type of the clusters for which this autoscaling policy is to
be configured.
.google.cloud.dataproc.v1.AutoscalingPolicy.ClusterType cluster_type = 7 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
AutoscalingPolicy.ClusterType
The clusterType.
getClusterTypeValue()
public int getClusterTypeValue ()
Optional. The type of the clusters for which this autoscaling policy is to
be configured.
.google.cloud.dataproc.v1.AutoscalingPolicy.ClusterType cluster_type = 7 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
int
The enum numeric value on the wire for clusterType.
getDefaultInstanceForType()
public AutoscalingPolicy getDefaultInstanceForType ()
Returns
Type
Description
AutoscalingPolicy
getDescriptorForType()
public Descriptors . Descriptor getDescriptorForType ()
Returns
Type
Description
Descriptor
Overrides
GeneratedMessage.Builder<BuilderType>.getDescriptorForType()
getId()
public String getId ()
Required. The policy id.
The id must contain only letters (a-z, A-Z), numbers (0-9),
underscores (_), and hyphens (-). Cannot begin or end with underscore
or hyphen. Must consist of between 3 and 50 characters.
string id = 1;
Returns
Type
Description
String
The id.
getIdBytes()
public ByteString getIdBytes ()
Required. The policy id.
The id must contain only letters (a-z, A-Z), numbers (0-9),
underscores (_), and hyphens (-). Cannot begin or end with underscore
or hyphen. Must consist of between 3 and 50 characters.
string id = 1;
Returns
Type
Description
ByteString
The bytes for id.
getLabels() (deprecated)
public Map<String , String > getLabels ()
Use #getLabelsMap() instead.
Returns
Type
Description
Map < String , String >
getLabelsCount()
public int getLabelsCount ()
Optional. The labels to associate with this autoscaling policy.
Label keys must contain 1 to 63 characters, and must conform to
RFC 1035 .
Label values may be empty, but, if present, must contain 1 to 63
characters, and must conform to RFC
1035 . No more than 32 labels can be
associated with an autoscaling policy.
map<string, string> labels = 6 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
int
getLabelsMap()
public Map<String , String > getLabelsMap ()
Optional. The labels to associate with this autoscaling policy.
Label keys must contain 1 to 63 characters, and must conform to
RFC 1035 .
Label values may be empty, but, if present, must contain 1 to 63
characters, and must conform to RFC
1035 . No more than 32 labels can be
associated with an autoscaling policy.
map<string, string> labels = 6 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
Map < String , String >
getLabelsOrDefault(String key, String defaultValue)
public String getLabelsOrDefault ( String key , String defaultValue )
Optional. The labels to associate with this autoscaling policy.
Label keys must contain 1 to 63 characters, and must conform to
RFC 1035 .
Label values may be empty, but, if present, must contain 1 to 63
characters, and must conform to RFC
1035 . No more than 32 labels can be
associated with an autoscaling policy.
map<string, string> labels = 6 [(.google.api.field_behavior) = OPTIONAL];
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
Optional. The labels to associate with this autoscaling policy.
Label keys must contain 1 to 63 characters, and must conform to
RFC 1035 .
Label values may be empty, but, if present, must contain 1 to 63
characters, and must conform to RFC
1035 . No more than 32 labels can be
associated with an autoscaling policy.
map<string, string> labels = 6 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
key
String
Returns
Type
Description
String
getMutableLabels() (deprecated)
public Map<String , String > getMutableLabels ()
Use alternate mutation accessors instead.
Returns
Type
Description
Map < String , String >
getName()
public String getName ()
Output only. The "resource name" of the autoscaling policy, as described
in https://cloud.google.com/apis/design/resource_names .
For projects.regions.autoscalingPolicies , the resource name of the
policy has the following format:
projects/{project_id}/regions/{region}/autoscalingPolicies/{policy_id}
For projects.locations.autoscalingPolicies , the resource name of the
policy has the following format:
projects/{project_id}/locations/{location}/autoscalingPolicies/{policy_id}
string name = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
String
The name.
getNameBytes()
public ByteString getNameBytes ()
Output only. The "resource name" of the autoscaling policy, as described
in https://cloud.google.com/apis/design/resource_names .
For projects.regions.autoscalingPolicies , the resource name of the
policy has the following format:
projects/{project_id}/regions/{region}/autoscalingPolicies/{policy_id}
For projects.locations.autoscalingPolicies , the resource name of the
policy has the following format:
projects/{project_id}/locations/{location}/autoscalingPolicies/{policy_id}
string name = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
ByteString
The bytes for name.
getSecondaryWorkerConfig()
public InstanceGroupAutoscalingPolicyConfig getSecondaryWorkerConfig ()
Optional. Describes how the autoscaler will operate for secondary workers.
.google.cloud.dataproc.v1.InstanceGroupAutoscalingPolicyConfig secondary_worker_config = 5 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
InstanceGroupAutoscalingPolicyConfig
The secondaryWorkerConfig.
getSecondaryWorkerConfigBuilder()
public InstanceGroupAutoscalingPolicyConfig . Builder getSecondaryWorkerConfigBuilder ()
Optional. Describes how the autoscaler will operate for secondary workers.
.google.cloud.dataproc.v1.InstanceGroupAutoscalingPolicyConfig secondary_worker_config = 5 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
InstanceGroupAutoscalingPolicyConfig.Builder
getSecondaryWorkerConfigOrBuilder()
public InstanceGroupAutoscalingPolicyConfigOrBuilder getSecondaryWorkerConfigOrBuilder ()
Optional. Describes how the autoscaler will operate for secondary workers.
.google.cloud.dataproc.v1.InstanceGroupAutoscalingPolicyConfig secondary_worker_config = 5 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
InstanceGroupAutoscalingPolicyConfigOrBuilder
getWorkerConfig()
public InstanceGroupAutoscalingPolicyConfig getWorkerConfig ()
Required. Describes how the autoscaler will operate for primary workers.
.google.cloud.dataproc.v1.InstanceGroupAutoscalingPolicyConfig worker_config = 4 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
InstanceGroupAutoscalingPolicyConfig
The workerConfig.
getWorkerConfigBuilder()
public InstanceGroupAutoscalingPolicyConfig . Builder getWorkerConfigBuilder ()
Required. Describes how the autoscaler will operate for primary workers.
.google.cloud.dataproc.v1.InstanceGroupAutoscalingPolicyConfig worker_config = 4 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
InstanceGroupAutoscalingPolicyConfig.Builder
getWorkerConfigOrBuilder()
public InstanceGroupAutoscalingPolicyConfigOrBuilder getWorkerConfigOrBuilder ()
Required. Describes how the autoscaler will operate for primary workers.
.google.cloud.dataproc.v1.InstanceGroupAutoscalingPolicyConfig worker_config = 4 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
InstanceGroupAutoscalingPolicyConfigOrBuilder
hasBasicAlgorithm()
public boolean hasBasicAlgorithm ()
.google.cloud.dataproc.v1.BasicAutoscalingAlgorithm basic_algorithm = 3 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
boolean
Whether the basicAlgorithm field is set.
hasSecondaryWorkerConfig()
public boolean hasSecondaryWorkerConfig ()
Optional. Describes how the autoscaler will operate for secondary workers.
.google.cloud.dataproc.v1.InstanceGroupAutoscalingPolicyConfig secondary_worker_config = 5 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
boolean
Whether the secondaryWorkerConfig field is set.
hasWorkerConfig()
public boolean hasWorkerConfig ()
Required. Describes how the autoscaler will operate for primary workers.
.google.cloud.dataproc.v1.InstanceGroupAutoscalingPolicyConfig worker_config = 4 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
boolean
Whether the workerConfig field is set.
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
mergeBasicAlgorithm(BasicAutoscalingAlgorithm value)
public AutoscalingPolicy . Builder mergeBasicAlgorithm ( BasicAutoscalingAlgorithm value )
.google.cloud.dataproc.v1.BasicAutoscalingAlgorithm basic_algorithm = 3 [(.google.api.field_behavior) = REQUIRED];
Parameter
Name
Description
value
BasicAutoscalingAlgorithm
Returns
Type
Description
AutoscalingPolicy.Builder
mergeFrom(AutoscalingPolicy other)
public AutoscalingPolicy . Builder mergeFrom ( AutoscalingPolicy other )
Parameter
Name
Description
other
AutoscalingPolicy
Returns
Type
Description
AutoscalingPolicy.Builder
mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public AutoscalingPolicy . Builder mergeFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
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
AutoscalingPolicy.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
Exceptions
Type
Description
IOException
mergeFrom(Message other)
public AutoscalingPolicy . Builder mergeFrom ( Message other )
Parameter
Name
Description
other
Message
Returns
Type
Description
AutoscalingPolicy.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)
mergeSecondaryWorkerConfig(InstanceGroupAutoscalingPolicyConfig value)
public AutoscalingPolicy . Builder mergeSecondaryWorkerConfig ( InstanceGroupAutoscalingPolicyConfig value )
Optional. Describes how the autoscaler will operate for secondary workers.
.google.cloud.dataproc.v1.InstanceGroupAutoscalingPolicyConfig secondary_worker_config = 5 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
value
InstanceGroupAutoscalingPolicyConfig
Returns
Type
Description
AutoscalingPolicy.Builder
mergeWorkerConfig(InstanceGroupAutoscalingPolicyConfig value)
public AutoscalingPolicy . Builder mergeWorkerConfig ( InstanceGroupAutoscalingPolicyConfig value )
Required. Describes how the autoscaler will operate for primary workers.
.google.cloud.dataproc.v1.InstanceGroupAutoscalingPolicyConfig worker_config = 4 [(.google.api.field_behavior) = REQUIRED];
Parameter
Name
Description
value
InstanceGroupAutoscalingPolicyConfig
Returns
Type
Description
AutoscalingPolicy.Builder
putAllLabels(Map<String,String> values)
public AutoscalingPolicy . Builder putAllLabels ( Map<String , String > values )
Optional. The labels to associate with this autoscaling policy.
Label keys must contain 1 to 63 characters, and must conform to
RFC 1035 .
Label values may be empty, but, if present, must contain 1 to 63
characters, and must conform to RFC
1035 . No more than 32 labels can be
associated with an autoscaling policy.
map<string, string> labels = 6 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
values
Map < String , String >
Returns
Type
Description
AutoscalingPolicy.Builder
putLabels(String key, String value)
public AutoscalingPolicy . Builder putLabels ( String key , String value )
Optional. The labels to associate with this autoscaling policy.
Label keys must contain 1 to 63 characters, and must conform to
RFC 1035 .
Label values may be empty, but, if present, must contain 1 to 63
characters, and must conform to RFC
1035 . No more than 32 labels can be
associated with an autoscaling policy.
map<string, string> labels = 6 [(.google.api.field_behavior) = OPTIONAL];
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
AutoscalingPolicy.Builder
removeLabels(String key)
public AutoscalingPolicy . Builder removeLabels ( String key )
Optional. The labels to associate with this autoscaling policy.
Label keys must contain 1 to 63 characters, and must conform to
RFC 1035 .
Label values may be empty, but, if present, must contain 1 to 63
characters, and must conform to RFC
1035 . No more than 32 labels can be
associated with an autoscaling policy.
map<string, string> labels = 6 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
key
String
Returns
Type
Description
AutoscalingPolicy.Builder
setBasicAlgorithm(BasicAutoscalingAlgorithm value)
public AutoscalingPolicy . Builder setBasicAlgorithm ( BasicAutoscalingAlgorithm value )
.google.cloud.dataproc.v1.BasicAutoscalingAlgorithm basic_algorithm = 3 [(.google.api.field_behavior) = REQUIRED];
Parameter
Name
Description
value
BasicAutoscalingAlgorithm
Returns
Type
Description
AutoscalingPolicy.Builder
setBasicAlgorithm(BasicAutoscalingAlgorithm.Builder builderForValue)
public AutoscalingPolicy . Builder setBasicAlgorithm ( BasicAutoscalingAlgorithm . Builder builderForValue )
.google.cloud.dataproc.v1.BasicAutoscalingAlgorithm basic_algorithm = 3 [(.google.api.field_behavior) = REQUIRED];
Parameter
Name
Description
builderForValue
BasicAutoscalingAlgorithm.Builder
Returns
Type
Description
AutoscalingPolicy.Builder
setClusterType(AutoscalingPolicy.ClusterType value)
public AutoscalingPolicy . Builder setClusterType ( AutoscalingPolicy . ClusterType value )
Optional. The type of the clusters for which this autoscaling policy is to
be configured.
.google.cloud.dataproc.v1.AutoscalingPolicy.ClusterType cluster_type = 7 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
value
AutoscalingPolicy.ClusterType The clusterType to set.
Returns
Type
Description
AutoscalingPolicy.Builder
This builder for chaining.
setClusterTypeValue(int value)
public AutoscalingPolicy . Builder setClusterTypeValue ( int value )
Optional. The type of the clusters for which this autoscaling policy is to
be configured.
.google.cloud.dataproc.v1.AutoscalingPolicy.ClusterType cluster_type = 7 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
value
int The enum numeric value on the wire for clusterType to set.
Returns
Type
Description
AutoscalingPolicy.Builder
This builder for chaining.
setId(String value)
public AutoscalingPolicy . Builder setId ( String value )
Required. The policy id.
The id must contain only letters (a-z, A-Z), numbers (0-9),
underscores (_), and hyphens (-). Cannot begin or end with underscore
or hyphen. Must consist of between 3 and 50 characters.
string id = 1;
Parameter
Name
Description
value
String The id to set.
Returns
Type
Description
AutoscalingPolicy.Builder
This builder for chaining.
setIdBytes(ByteString value)
public AutoscalingPolicy . Builder setIdBytes ( ByteString value )
Required. The policy id.
The id must contain only letters (a-z, A-Z), numbers (0-9),
underscores (_), and hyphens (-). Cannot begin or end with underscore
or hyphen. Must consist of between 3 and 50 characters.
string id = 1;
Parameter
Name
Description
value
ByteString The bytes for id to set.
Returns
Type
Description
AutoscalingPolicy.Builder
This builder for chaining.
setName(String value)
public AutoscalingPolicy . Builder setName ( String value )
Output only. The "resource name" of the autoscaling policy, as described
in https://cloud.google.com/apis/design/resource_names .
For projects.regions.autoscalingPolicies , the resource name of the
policy has the following format:
projects/{project_id}/regions/{region}/autoscalingPolicies/{policy_id}
For projects.locations.autoscalingPolicies , the resource name of the
policy has the following format:
projects/{project_id}/locations/{location}/autoscalingPolicies/{policy_id}
string name = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];
Parameter
Name
Description
value
String The name to set.
Returns
Type
Description
AutoscalingPolicy.Builder
This builder for chaining.
setNameBytes(ByteString value)
public AutoscalingPolicy . Builder setNameBytes ( ByteString value )
Output only. The "resource name" of the autoscaling policy, as described
in https://cloud.google.com/apis/design/resource_names .
For projects.regions.autoscalingPolicies , the resource name of the
policy has the following format:
projects/{project_id}/regions/{region}/autoscalingPolicies/{policy_id}
For projects.locations.autoscalingPolicies , the resource name of the
policy has the following format:
projects/{project_id}/locations/{location}/autoscalingPolicies/{policy_id}
string name = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];
Parameter
Name
Description
value
ByteString The bytes for name to set.
Returns
Type
Description
AutoscalingPolicy.Builder
This builder for chaining.
setSecondaryWorkerConfig(InstanceGroupAutoscalingPolicyConfig value)
public AutoscalingPolicy . Builder setSecondaryWorkerConfig ( InstanceGroupAutoscalingPolicyConfig value )
Optional. Describes how the autoscaler will operate for secondary workers.
.google.cloud.dataproc.v1.InstanceGroupAutoscalingPolicyConfig secondary_worker_config = 5 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
value
InstanceGroupAutoscalingPolicyConfig
Returns
Type
Description
AutoscalingPolicy.Builder
setSecondaryWorkerConfig(InstanceGroupAutoscalingPolicyConfig.Builder builderForValue)
public AutoscalingPolicy . Builder setSecondaryWorkerConfig ( InstanceGroupAutoscalingPolicyConfig . Builder builderForValue )
Optional. Describes how the autoscaler will operate for secondary workers.
.google.cloud.dataproc.v1.InstanceGroupAutoscalingPolicyConfig secondary_worker_config = 5 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
builderForValue
InstanceGroupAutoscalingPolicyConfig.Builder
Returns
Type
Description
AutoscalingPolicy.Builder
setWorkerConfig(InstanceGroupAutoscalingPolicyConfig value)
public AutoscalingPolicy . Builder setWorkerConfig ( InstanceGroupAutoscalingPolicyConfig value )
Required. Describes how the autoscaler will operate for primary workers.
.google.cloud.dataproc.v1.InstanceGroupAutoscalingPolicyConfig worker_config = 4 [(.google.api.field_behavior) = REQUIRED];
Parameter
Name
Description
value
InstanceGroupAutoscalingPolicyConfig
Returns
Type
Description
AutoscalingPolicy.Builder
setWorkerConfig(InstanceGroupAutoscalingPolicyConfig.Builder builderForValue)
public AutoscalingPolicy . Builder setWorkerConfig ( InstanceGroupAutoscalingPolicyConfig . Builder builderForValue )
Required. Describes how the autoscaler will operate for primary workers.
.google.cloud.dataproc.v1.InstanceGroupAutoscalingPolicyConfig worker_config = 4 [(.google.api.field_behavior) = REQUIRED];
Parameter
Name
Description
builderForValue
InstanceGroupAutoscalingPolicyConfig.Builder
Returns
Type
Description
AutoscalingPolicy.Builder
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
