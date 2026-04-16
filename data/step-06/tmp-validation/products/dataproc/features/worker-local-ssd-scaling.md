---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.206Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Worker local SSD scaling"
feature_slug: "worker-local-ssd-scaling"
latest_feature_date: "2016-10-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig"
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.autoscalingPolicies"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicy"
keywords:
  - "increases"
  - "scaling"
  - "maximum"
  - "ssds"
  - "number"
  - "local"
  - "worker"
---

# Worker local SSD scaling

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Worker local SSD scaling increases the maximum number of local SSDs that can be attached to worker nodes from 4 to 8.

## Extended Definition

Worker local SSD scaling increases the maximum number of local SSDs that can be attached to worker nodes from 4 to 8.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.autoscalingPolicies](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.autoscalingPolicies)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicy](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicy)

## Supporting Pages

### "REST Resource: projects.locations.autoscalingPolicies \_|\_ Managed Service\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.autoscalingPolicies](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.autoscalingPolicies)
- Source ID: `site-docs-reference`
- Final score: 114
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- JSON representation { "id" : string , "name" : string , "workerConfig" : { object ( InstanceGroupAutoscalingPolicyConfig ) } , "secondaryWorkerConfig" : { object ( InstanceGroupAutoscalingPolicyConfig ) } , "clusterType" : enum ( ClusterType ) , // Union field algorithm can be only one of the following: "basicAlgorithm" : { object ( BasicAutoscalingAlgorithm ) } // End of list of possible types for union field algorithm . } Fields id string Required.
- For projects.regions.autoscalingPolicies , the resource name of the policy has the following format: projects/{projectId}/regions/{region}/autoscalingPolicies/{policyId} For projects.locations.autoscalingPolicies , the resource name of the policy has the following format: projects/{projectId}/locations/{location}/autoscalingPolicies/{policyId} workerConfig object ( InstanceGroupAutoscalingPolicyConfig ) Required.
- JSON representation { "gracefulDecommissionTimeout" : string , "scaleUpFactor" : number , "scaleDownFactor" : number , "scaleUpMinWorkerFraction" : number , "scaleDownMinWorkerFraction" : number } Fields gracefulDecommissionTimeout string ( Duration format) Required.
- If weight is not set on any instance group, the cluster will default to equal weight for all groups: the cluster will attempt to maintain an equal number of workers in each group within the configured size bounds for each group.

### "InstanceGroupConfig \_|\_ Managed Service for Apache Spark \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig)
- Source ID: `site-docs-reference`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "bootDiskType" : string , "bootDiskSizeGb" : integer , "numLocalSsds" : integer , "localSsdInterface" : string , "attachedDiskConfigs" : [ { object ( AttachedDiskConfig ) } ] , "bootDiskProvisionedIops" : string , "bootDiskProvisionedThroughput" : string } Fields bootDiskType string Optional.
- If minNumInstances is set, cluster creation will succeed if the number of primary workers created is at least equal to the minNumInstances number.
- Note: Local SSD options may vary by machine type and number of vCPUs selected. localSsdInterface string Optional.
- Size in GB of the boot disk (default is 500GB). numLocalSsds integer Optional.

### "Class AutoscalingPolicy (4.85.0) \_|\_ Java client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicy](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicy)
- Source ID: `site-java-reference`
- Final score: 106
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Protobuf type google.cloud.dataproc.v1.AutoscalingPolicy Inheritance Object > AbstractMessageLite<MessageType,BuilderType> > AbstractMessage > GeneratedMessage > AutoscalingPolicy Implements AutoscalingPolicyOrBuilder Inherited Members AbstractMessage.equals(Object) AbstractMessage.findInitializationErrors() AbstractMessage.getInitializationErrorString() AbstractMessage.hashCode() AbstractMessage.hashFields(int,Map<Descriptors.FieldDescriptor,Object>) AbstractMessage.newBuilderForType(AbstractMessage.BuilderParent) AbstractMessage.toString() AbstractMessageLite.<T>addAll(Iterable<T>,List<? super T>) AbstractMessageLite.checkByteStringIsUtf8(ByteString) AbstractMessageLite.toByteArray() AbstractMessageLite.toByteString() AbstractMessageLite.writeDelimitedTo(OutputStream) AbstractMessageLite.writeTo(OutputStream) com.google.protobuf.GeneratedMessage.<ContainingT,T>newFileScopedGeneratedExtension(java.lang.Class<?>,com.google.protobuf.Message) com.google.protobuf.GeneratedMessage.<ContainingT,T>newMessageScopedGeneratedExtension(com.google.protobuf.Message,int,java.lang.Class<?>,com.google.protobuf.Message) com.google.protobuf.GeneratedMessage.<ListT>makeMutableCopy(ListT) com.google.protobuf.GeneratedMessage.<ListT>makeMutableCopy(ListT,int) GeneratedMessage.<M>parseDelimitedWithIOException(Parser<M>,InputStream) GeneratedMessage.<M>parseDelimitedWithIOException(Parser<M>,InputStream,ExtensionRegistryLite) GeneratedMessage.<M>parseWithIOException(Parser<M>,CodedInputStream) GeneratedMessage.<M>parseWithIOException(Parser<M>,CodedInputStream,ExtensionRegistryLite) GeneratedMessage.<M>parseWithIOException(Parser<M>,InputStream) GeneratedMessage.<M>parseWithIOException(Parser<M>,InputStream,ExtensionRegistryLite) com.google.protobuf.GeneratedMessage.<T>emptyList(java.lang.Class<T>) com.google.protobuf.GeneratedMessage.<V>serializeBooleanMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.Boolean,V>,com.google.protobuf.MapEntry<java.lang.Boolean,V>,int) com.google.protobuf.GeneratedMessage.<V>serializeIntegerMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.Integer,V>,com.google.protobuf.MapEntry<java.lang.Integer,V>,int) com.google.protobuf.GeneratedMessage.<V>serializeLongMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.Long,V>,com.google.protobuf.MapEntry<java.lang.Long,V>,int) com.google.protobuf.GeneratedMessage.<V>serializeStringMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.String,V>,com.google.protobuf.MapEntry<java.lang.String,V>,int) com.google.protobuf.GeneratedMessage.canUseUnsafe() GeneratedMessage.computeStringSize(int,Object) GeneratedMessage.computeStringSizeNoTag(Object) com.google.protobuf.GeneratedMessage.emptyBooleanList() com.google.protobuf.GeneratedMessage.emptyDoubleList() com.google.protobuf.GeneratedMessage.emptyFloatList() com.google.protobuf.GeneratedMessage.emptyIntList() com.google.protobuf.GeneratedMessage.emptyLongList() GeneratedMessage.getAllFields() GeneratedMessage.getDescriptorForType() GeneratedMessage.getField(Descriptors.FieldDescriptor) GeneratedMessage.getOneofFieldDescriptor(Descriptors.OneofDescriptor) GeneratedMessage.getParserForType() GeneratedMessage.getRepeatedField(Descriptors.FieldDescriptor,int) GeneratedMessage.getRepeatedFieldCount(Descriptors.FieldDescriptor) GeneratedMessage.getSerializedSize() GeneratedMessage.getUnknownFields() GeneratedMessage.hasField(Descriptors.FieldDescriptor) GeneratedMessage.hasOneof(Descriptors.OneofDescriptor) GeneratedMessage.internalGetFieldAccessorTable() GeneratedMessage.internalGetMapField(int) com.google.protobuf.GeneratedMessage.internalGetMapFieldReflection(int) GeneratedMessage.isInitialized() com.google.protobuf.GeneratedMessage.isStringEmpty(java.lang.Object) GeneratedMessage.makeExtensionsImmutable() com.google.protobuf.GeneratedMessage.mergeFromAndMakeImmutableInternal(com.google.protobuf.CodedInputStream,com.google.protobuf.ExtensionRegistryLite) com.google.protobuf.GeneratedMessage.newInstance(com.google.protobuf.GeneratedMessage.UnusedPrivateParameter) GeneratedMessage.parseUnknownField(CodedInputStream,UnknownFieldSet.Builder,ExtensionRegistryLite,int) com.google.protobuf.GeneratedMessage.parseUnknownFieldProto3(com.google.protobuf.CodedInputStream,com.google.protobuf.UnknownFieldSet.Builder,com.google.protobuf.ExtensionRegistryLite,int) GeneratedMessage.writeReplace() GeneratedMessage.writeString(CodedOutputStream,int,Object) GeneratedMessage.writeStringNoTag(CodedOutputStream,Object) GeneratedMessage.writeTo(CodedOutputStream) Object.clone() Object.finalize() Object.getClass() Object.notify() Object.notifyAll() Object.wait() Object.wait(long) Object.wait(long,int) Static Fields BASIC ALGORITHM FIELD NUMBER public static final int BASIC ALGORITHM FIELD NUMBER Field Value Type Description int CLUSTER TYPE FIELD NUMBER public static final int CLUSTER TYPE FIELD NUMBER Field Value Type Description int ID FIELD NUMBER public static final int ID FIELD NUMBER Field Value Type Description int LABELS FIELD NUMBER public static final int LABELS FIELD NUMBER Field Value Type Description int NAME FIELD NUMBER public static final int NAME FIELD NUMBER Field Value Type Description int SECONDARY WORKER CONFIG FIELD NUMBER public static final int SECONDARY WORKER CONFIG FIELD NUMBER Field Value Type Description int WORKER CONFIG FIELD NUMBER public static final int WORKER CONFIG FIELD NUMBER Field Value Type Description int Static Methods getDefaultInstance() public static AutoscalingPolicy getDefaultInstance () Returns Type Description AutoscalingPolicy getDescriptor() public static final Descriptors .
- For projects.regions.autoscalingPolicies , the resource name of the policy has the following format: projects/{project id}/regions/{region}/autoscalingPolicies/{policy id} For projects.locations.autoscalingPolicies , the resource name of the policy has the following format: projects/{project id}/locations/{location}/autoscalingPolicies/{policy id} string name = 2 [(.google.api.field behavior) = OUTPUT ONLY]; Returns Type Description ByteString The bytes for name. getParserForType() public Parser<AutoscalingPolicy> getParserForType () Returns Type Description Parser < AutoscalingPolicy > Overrides GeneratedMessage.getParserForType() getSecondaryWorkerConfig() public InstanceGroupAutoscalingPolicyConfig getSecondaryWorkerConfig () Optional.
- FieldAccessorTable internalGetFieldAccessorTable () Returns Type Description FieldAccessorTable Overrides GeneratedMessage.internalGetFieldAccessorTable() internalGetMapFieldReflection(int number) protected MapFieldReflectionAccessor internalGetMapFieldReflection ( int number ) Parameter Name Description number int Returns Type Description com.google.protobuf.MapFieldReflectionAccessor Overrides com.google.protobuf.GeneratedMessage.internalGetMapFieldReflection(int) isInitialized() public final boolean isInitialized () Returns Type Description boolean Overrides GeneratedMessage.isInitialized() newBuilderForType() public AutoscalingPolicy .
- Describes how the autoscaler will operate for primary workers. .google.cloud.dataproc.v1.InstanceGroupAutoscalingPolicyConfig worker config = 4 [(.google.api.field behavior) = REQUIRED]; Returns Type Description InstanceGroupAutoscalingPolicyConfigOrBuilder hasBasicAlgorithm() public boolean hasBasicAlgorithm () .google.cloud.dataproc.v1.BasicAutoscalingAlgorithm basic algorithm = 3 [(.google.api.field behavior) = REQUIRED]; Returns Type Description boolean Whether the basicAlgorithm field is set. hasSecondaryWorkerConfig() public boolean hasSecondaryWorkerConfig () Optional.

