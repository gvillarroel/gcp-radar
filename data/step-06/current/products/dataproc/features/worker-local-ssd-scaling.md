---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.690Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Worker local SSD scaling"
feature_slug: "worker-local-ssd-scaling"
latest_feature_date: "2016-10-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.autoscalingPolicies"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicy"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicy.Builder"
keywords:
  - "worker"
  - "local"
  - "ssd"
  - "scaling"
  - "increases"
  - "maximum"
  - "number"
  - "ssds"
---

# Worker local SSD scaling

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Worker local SSD scaling increases the maximum number of local SSDs that can be attached to worker nodes from 4 to 8.

## Extended Definition

Worker local SSD scaling increases the maximum number of local SSDs that can be attached to worker nodes from 4 to 8.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.autoscalingPolicies](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.autoscalingPolicies)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicy](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicy)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicy.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicy.Builder)

## Supporting Pages

### "REST Resource: projects.locations.autoscalingPolicies \_|\_ Managed Service\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.autoscalingPolicies](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.autoscalingPolicies)
- Source ID: `site-docs-reference`
- Final score: 126
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation { "id" : string , "name" : string , "workerConfig" : { object ( InstanceGroupAutoscalingPolicyConfig ) } , "secondaryWorkerConfig" : { object ( InstanceGroupAutoscalingPolicyConfig ) } , "clusterType" : enum ( ClusterType ) , // Union field algorithm can be only one of the following: "basicAlgorithm" : { object ( BasicAutoscalingAlgorithm ) } // End of list of possible types for union field algorithm . } Fields id string Required.
- For projects.regions.autoscalingPolicies , the resource name of the policy has the following format: projects/{projectId}/regions/{region}/autoscalingPolicies/{policyId} For projects.locations.autoscalingPolicies , the resource name of the policy has the following format: projects/{projectId}/locations/{location}/autoscalingPolicies/{policyId} workerConfig object ( InstanceGroupAutoscalingPolicyConfig ) Required.
- JSON representation { "gracefulDecommissionTimeout" : string , "scaleUpFactor" : number , "scaleDownFactor" : number , "scaleUpMinWorkerFraction" : number , "scaleDownMinWorkerFraction" : number } Fields gracefulDecommissionTimeout string ( Duration format) Required.
- If weight is not set on any instance group, the cluster will default to equal weight for all groups: the cluster will attempt to maintain an equal number of workers in each group within the configured size bounds for each group.

### "Class AutoscalingPolicy (4.85.0) \_|\_ Java client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicy](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicy)
- Source ID: `site-java-reference`
- Final score: 118
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Protobuf type google.cloud.dataproc.v1.AutoscalingPolicy Inheritance Object > AbstractMessageLite<MessageType,BuilderType> > AbstractMessage > GeneratedMessage > AutoscalingPolicy Implements AutoscalingPolicyOrBuilder Inherited Members AbstractMessage.equals(Object) AbstractMessage.findInitializationErrors() AbstractMessage.getInitializationErrorString() AbstractMessage.hashCode() AbstractMessage.hashFields(int,Map<Descriptors.FieldDescriptor,Object>) AbstractMessage.newBuilderForType(AbstractMessage.BuilderParent) AbstractMessage.toString() AbstractMessageLite.<T>addAll(Iterable<T>,List<? super T>) AbstractMessageLite.checkByteStringIsUtf8(ByteString) AbstractMessageLite.toByteArray() AbstractMessageLite.toByteString() AbstractMessageLite.writeDelimitedTo(OutputStream) AbstractMessageLite.writeTo(OutputStream) com.google.protobuf.GeneratedMessage.<ContainingT,T>newFileScopedGeneratedExtension(java.lang.Class<?>,com.google.protobuf.Message) com.google.protobuf.GeneratedMessage.<ContainingT,T>newMessageScopedGeneratedExtension(com.google.protobuf.Message,int,java.lang.Class<?>,com.google.protobuf.Message) com.google.protobuf.GeneratedMessage.<ListT>makeMutableCopy(ListT) com.google.protobuf.GeneratedMessage.<ListT>makeMutableCopy(ListT,int) GeneratedMessage.<M>parseDelimitedWithIOException(Parser<M>,InputStream) GeneratedMessage.<M>parseDelimitedWithIOException(Parser<M>,InputStream,ExtensionRegistryLite) GeneratedMessage.<M>parseWithIOException(Parser<M>,CodedInputStream) GeneratedMessage.<M>parseWithIOException(Parser<M>,CodedInputStream,ExtensionRegistryLite) GeneratedMessage.<M>parseWithIOException(Parser<M>,InputStream) GeneratedMessage.<M>parseWithIOException(Parser<M>,InputStream,ExtensionRegistryLite) com.google.protobuf.GeneratedMessage.<T>emptyList(java.lang.Class<T>) com.google.protobuf.GeneratedMessage.<V>serializeBooleanMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.Boolean,V>,com.google.protobuf.MapEntry<java.lang.Boolean,V>,int) com.google.protobuf.GeneratedMessage.<V>serializeIntegerMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.Integer,V>,com.google.protobuf.MapEntry<java.lang.Integer,V>,int) com.google.protobuf.GeneratedMessage.<V>serializeLongMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.Long,V>,com.google.protobuf.MapEntry<java.lang.Long,V>,int) com.google.protobuf.GeneratedMessage.<V>serializeStringMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.String,V>,com.google.protobuf.MapEntry<java.lang.String,V>,int) com.google.protobuf.GeneratedMessage.canUseUnsafe() GeneratedMessage.computeStringSize(int,Object) GeneratedMessage.computeStringSizeNoTag(Object) com.google.protobuf.GeneratedMessage.emptyBooleanList() com.google.protobuf.GeneratedMessage.emptyDoubleList() com.google.protobuf.GeneratedMessage.emptyFloatList() com.google.protobuf.GeneratedMessage.emptyIntList() com.google.protobuf.GeneratedMessage.emptyLongList() GeneratedMessage.getAllFields() GeneratedMessage.getDescriptorForType() GeneratedMessage.getField(Descriptors.FieldDescriptor) GeneratedMessage.getOneofFieldDescriptor(Descriptors.OneofDescriptor) GeneratedMessage.getParserForType() GeneratedMessage.getRepeatedField(Descriptors.FieldDescriptor,int) GeneratedMessage.getRepeatedFieldCount(Descriptors.FieldDescriptor) GeneratedMessage.getSerializedSize() GeneratedMessage.getUnknownFields() GeneratedMessage.hasField(Descriptors.FieldDescriptor) GeneratedMessage.hasOneof(Descriptors.OneofDescriptor) GeneratedMessage.internalGetFieldAccessorTable() GeneratedMessage.internalGetMapField(int) com.google.protobuf.GeneratedMessage.internalGetMapFieldReflection(int) GeneratedMessage.isInitialized() com.google.protobuf.GeneratedMessage.isStringEmpty(java.lang.Object) GeneratedMessage.makeExtensionsImmutable() com.google.protobuf.GeneratedMessage.mergeFromAndMakeImmutableInternal(com.google.protobuf.CodedInputStream,com.google.protobuf.ExtensionRegistryLite) com.google.protobuf.GeneratedMessage.newInstance(com.google.protobuf.GeneratedMessage.UnusedPrivateParameter) GeneratedMessage.parseUnknownField(CodedInputStream,UnknownFieldSet.Builder,ExtensionRegistryLite,int) com.google.protobuf.GeneratedMessage.parseUnknownFieldProto3(com.google.protobuf.CodedInputStream,com.google.protobuf.UnknownFieldSet.Builder,com.google.protobuf.ExtensionRegistryLite,int) GeneratedMessage.writeReplace() GeneratedMessage.writeString(CodedOutputStream,int,Object) GeneratedMessage.writeStringNoTag(CodedOutputStream,Object) GeneratedMessage.writeTo(CodedOutputStream) Object.clone() Object.finalize() Object.getClass() Object.notify() Object.notifyAll() Object.wait() Object.wait(long) Object.wait(long,int) Static Fields BASIC ALGORITHM FIELD NUMBER public static final int BASIC ALGORITHM FIELD NUMBER Field Value Type Description int CLUSTER TYPE FIELD NUMBER public static final int CLUSTER TYPE FIELD NUMBER Field Value Type Description int ID FIELD NUMBER public static final int ID FIELD NUMBER Field Value Type Description int LABELS FIELD NUMBER public static final int LABELS FIELD NUMBER Field Value Type Description int NAME FIELD NUMBER public static final int NAME FIELD NUMBER Field Value Type Description int SECONDARY WORKER CONFIG FIELD NUMBER public static final int SECONDARY WORKER CONFIG FIELD NUMBER Field Value Type Description int WORKER CONFIG FIELD NUMBER public static final int WORKER CONFIG FIELD NUMBER Field Value Type Description int Static Methods getDefaultInstance() public static AutoscalingPolicy getDefaultInstance () Returns Type Description AutoscalingPolicy getDescriptor() public static final Descriptors .
- For projects.regions.autoscalingPolicies , the resource name of the policy has the following format: projects/{project id}/regions/{region}/autoscalingPolicies/{policy id} For projects.locations.autoscalingPolicies , the resource name of the policy has the following format: projects/{project id}/locations/{location}/autoscalingPolicies/{policy id} string name = 2 [(.google.api.field behavior) = OUTPUT ONLY]; Returns Type Description ByteString The bytes for name. getParserForType() public Parser<AutoscalingPolicy> getParserForType () Returns Type Description Parser < AutoscalingPolicy > Overrides GeneratedMessage.getParserForType() getSecondaryWorkerConfig() public InstanceGroupAutoscalingPolicyConfig getSecondaryWorkerConfig () Optional.
- FieldAccessorTable internalGetFieldAccessorTable () Returns Type Description FieldAccessorTable Overrides GeneratedMessage.internalGetFieldAccessorTable() internalGetMapFieldReflection(int number) protected MapFieldReflectionAccessor internalGetMapFieldReflection ( int number ) Parameter Name Description number int Returns Type Description com.google.protobuf.MapFieldReflectionAccessor Overrides com.google.protobuf.GeneratedMessage.internalGetMapFieldReflection(int) isInitialized() public final boolean isInitialized () Returns Type Description boolean Overrides GeneratedMessage.isInitialized() newBuilderForType() public AutoscalingPolicy .
- Describes how the autoscaler will operate for primary workers. .google.cloud.dataproc.v1.InstanceGroupAutoscalingPolicyConfig worker config = 4 [(.google.api.field behavior) = REQUIRED]; Returns Type Description InstanceGroupAutoscalingPolicyConfigOrBuilder hasBasicAlgorithm() public boolean hasBasicAlgorithm () .google.cloud.dataproc.v1.BasicAutoscalingAlgorithm basic algorithm = 3 [(.google.api.field behavior) = REQUIRED]; Returns Type Description boolean Whether the basicAlgorithm field is set. hasSecondaryWorkerConfig() public boolean hasSecondaryWorkerConfig () Optional.

### "Class AutoscalingPolicy.Builder (4.85.0) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicy.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicy.Builder)
- Source ID: `site-java-reference`
- Final score: 118
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- FieldAccessorTable internalGetFieldAccessorTable () Returns Type Description FieldAccessorTable Overrides GeneratedMessage.Builder<BuilderType>.internalGetFieldAccessorTable() internalGetMapFieldReflection(int number) protected MapFieldReflectionAccessor internalGetMapFieldReflection ( int number ) Parameter Name Description number int Returns Type Description com.google.protobuf.MapFieldReflectionAccessor Overrides com.google.protobuf.GeneratedMessage.Builder.internalGetMapFieldReflection(int) internalGetMutableMapFieldReflection(int number) protected MapFieldReflectionAccessor internalGetMutableMapFieldReflection ( int number ) Parameter Name Description number int Returns Type Description com.google.protobuf.MapFieldReflectionAccessor Overrides com.google.protobuf.GeneratedMessage.Builder.internalGetMutableMapFieldReflection(int) isInitialized() public final boolean isInitialized () Returns Type Description boolean Overrides GeneratedMessage.Builder<BuilderType>.isInitialized() mergeBasicAlgorithm(BasicAutoscalingAlgorithm value) public AutoscalingPolicy .
- Describes how the autoscaler will operate for primary workers. .google.cloud.dataproc.v1.InstanceGroupAutoscalingPolicyConfig worker config = 4 [(.google.api.field behavior) = REQUIRED]; Returns Type Description InstanceGroupAutoscalingPolicyConfigOrBuilder hasBasicAlgorithm() public boolean hasBasicAlgorithm () .google.cloud.dataproc.v1.BasicAutoscalingAlgorithm basic algorithm = 3 [(.google.api.field behavior) = REQUIRED]; Returns Type Description boolean Whether the basicAlgorithm field is set. hasSecondaryWorkerConfig() public boolean hasSecondaryWorkerConfig () Optional.
- For projects.regions.autoscalingPolicies , the resource name of the policy has the following format: projects/{project id}/regions/{region}/autoscalingPolicies/{policy id} For projects.locations.autoscalingPolicies , the resource name of the policy has the following format: projects/{project id}/locations/{location}/autoscalingPolicies/{policy id} string name = 2 [(.google.api.field behavior) = OUTPUT ONLY]; Returns Type Description ByteString The bytes for name. getSecondaryWorkerConfig() public InstanceGroupAutoscalingPolicyConfig getSecondaryWorkerConfig () Optional.
- For projects.regions.autoscalingPolicies , the resource name of the policy has the following format: projects/{project id}/regions/{region}/autoscalingPolicies/{policy id} For projects.locations.autoscalingPolicies , the resource name of the policy has the following format: projects/{project id}/locations/{location}/autoscalingPolicies/{policy id} string name = 2 [(.google.api.field behavior) = OUTPUT ONLY]; Returns Type Description AutoscalingPolicy.Builder This builder for chaining. clearSecondaryWorkerConfig() public AutoscalingPolicy .

