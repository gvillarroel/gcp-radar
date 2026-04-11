---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.124Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Worker local SSD scaling"
feature_slug: "worker-local-ssd-scaling"
latest_feature_date: "2016-10-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.autoscalingPolicies"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicy"
keywords:
  - "worker"
  - "local"
  - "ssd"
  - "scaling"
  - "increases"
  - "the"
  - "maximum"
  - "number"
---

# Worker local SSD scaling

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Worker local SSD scaling increases the maximum number of local SSDs that can be attached to worker nodes from 4 to 8.

## Extended Definition

Worker local SSD scaling increases the maximum number of local SSDs that can be attached to worker nodes from 4 to 8.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.autoscalingPolicies](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.autoscalingPolicies)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicy](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicy)

## Supporting Pages

### Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- Fixed Fixed the ability to delete jobs that fast-failed before some cluster and staging directories were created Fixed some remaining errors with vmem settings when using the distcp command Fixed a rare bug in which underlying Compute Engine issues could lead to VM instances failing to be deleted after the Cloud Dataproc cluster had been successfully deleted Hive command has been fixed Fixed error reporting when updating the number of workers (standard and preemptible) in a cluster Fixed some cases when Rate Limit Exceeded errors occurred The maximum cluster name length is now correctly 55 instead of 56 characters GCP Console Cluster list now includes a Created column, and the cluster configuration tab now includes a Created field, telling the creation time of the cluster In the cluster-create screen, cluster memory sizes greater than 999 GB are now displayed in TB Fields that were missing from the PySpark and Hive job configuration tab ( Additional Python Files and Jar Files ) have been added The option to add preemptible nodes when creating a cluster is now in the "expander" at the bottom of the form Machine types with insufficient memory (less than 3.5 GB) are no longer displayed in the list of machine types (previously, selecting one of these small machine types would lead to an error from the backend The placeholder text in the Arguments field of the submit-job form has been corrected October 23, 2015 Feature GCP Console: Added support for adding, editing, and removing preemptible instances in clusters.
- March 10, 2020 Change Added the following flags to gcloud dataproc clusters create and gcloud dataproc workflow-templates set-managed-cluster commands: --num-secondary-workers --num-secondary-worker-local-ssds --secondary-worker-boot-disk-size --secondary-worker-boot-disk-type --secondary-worker-accelerator Deprecated The following flags to gcloud dataproc clusters create and gcloud dataproc workflow-templates set-managed-cluster commands have been deprecated: --num-preemptible-workers --num-preemptible-worker-local-ssds --preemptible-worker-boot-disk-size --preemptible-worker-boot-disk-type --preemptible-worker-accelerator See the related change, above, for the new flags to use in place of these deprecated flags.
- In particular each recommendation now includes 1) the minimum and maximum worker counts configured in the autoscaling policy, 2) the graceful decommission timeout (for SCALE DOWN operations), and 3) additional context into why the autoscaler couldn't add or remove more nodes.
- Fixed Fixed a rare bug that sometimes happened when scaling down the number of secondary workers in a cluster in which the update operation would fail with error 'Resource is not a member of' or 'Cannot delete instance that was already deleted'.

### "REST Resource: projects.locations.autoscalingPolicies \_|\_ Managed Service\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.autoscalingPolicies](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.autoscalingPolicies)
- Source ID: `site-docs-reference`
- Final score: 114
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- JSON representation { "id" : string , "name" : string , "workerConfig" : { object ( InstanceGroupAutoscalingPolicyConfig ) } , "secondaryWorkerConfig" : { object ( InstanceGroupAutoscalingPolicyConfig ) } , "clusterType" : enum ( ClusterType ) , // Union field algorithm can be only one of the following: "basicAlgorithm" : { object ( BasicAutoscalingAlgorithm ) } // End of list of possible types for union field algorithm . } Fields id string Required.
- For projects.regions.autoscalingPolicies , the resource name of the policy has the following format: projects/{projectId}/regions/{region}/autoscalingPolicies/{policyId} For projects.locations.autoscalingPolicies , the resource name of the policy has the following format: projects/{projectId}/locations/{location}/autoscalingPolicies/{policyId} workerConfig object ( InstanceGroupAutoscalingPolicyConfig ) Required.
- If weight is not set on any instance group, the cluster will default to equal weight for all groups: the cluster will attempt to maintain an equal number of workers in each group within the configured size bounds for each group.
- Describes how the autoscaler will operate for primary workers. secondaryWorkerConfig object ( InstanceGroupAutoscalingPolicyConfig ) Optional.

### "Class AutoscalingPolicy (4.85.0) \_|\_ Java client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicy](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicy)
- Source ID: `site-java-reference`
- Final score: 110
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Protobuf type google.cloud.dataproc.v1.AutoscalingPolicy Inheritance Object > AbstractMessageLite<MessageType,BuilderType> > AbstractMessage > GeneratedMessage > AutoscalingPolicy Implements AutoscalingPolicyOrBuilder Inherited Members AbstractMessage.equals(Object) AbstractMessage.findInitializationErrors() AbstractMessage.getInitializationErrorString() AbstractMessage.hashCode() AbstractMessage.hashFields(int,Map<Descriptors.FieldDescriptor,Object>) AbstractMessage.newBuilderForType(AbstractMessage.BuilderParent) AbstractMessage.toString() AbstractMessageLite.<T>addAll(Iterable<T>,List<? super T>) AbstractMessageLite.checkByteStringIsUtf8(ByteString) AbstractMessageLite.toByteArray() AbstractMessageLite.toByteString() AbstractMessageLite.writeDelimitedTo(OutputStream) AbstractMessageLite.writeTo(OutputStream) com.google.protobuf.GeneratedMessage.<ContainingT,T>newFileScopedGeneratedExtension(java.lang.Class<?>,com.google.protobuf.Message) com.google.protobuf.GeneratedMessage.<ContainingT,T>newMessageScopedGeneratedExtension(com.google.protobuf.Message,int,java.lang.Class<?>,com.google.protobuf.Message) com.google.protobuf.GeneratedMessage.<ListT>makeMutableCopy(ListT) com.google.protobuf.GeneratedMessage.<ListT>makeMutableCopy(ListT,int) GeneratedMessage.<M>parseDelimitedWithIOException(Parser<M>,InputStream) GeneratedMessage.<M>parseDelimitedWithIOException(Parser<M>,InputStream,ExtensionRegistryLite) GeneratedMessage.<M>parseWithIOException(Parser<M>,CodedInputStream) GeneratedMessage.<M>parseWithIOException(Parser<M>,CodedInputStream,ExtensionRegistryLite) GeneratedMessage.<M>parseWithIOException(Parser<M>,InputStream) GeneratedMessage.<M>parseWithIOException(Parser<M>,InputStream,ExtensionRegistryLite) com.google.protobuf.GeneratedMessage.<T>emptyList(java.lang.Class<T>) com.google.protobuf.GeneratedMessage.<V>serializeBooleanMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.Boolean,V>,com.google.protobuf.MapEntry<java.lang.Boolean,V>,int) com.google.protobuf.GeneratedMessage.<V>serializeIntegerMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.Integer,V>,com.google.protobuf.MapEntry<java.lang.Integer,V>,int) com.google.protobuf.GeneratedMessage.<V>serializeLongMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.Long,V>,com.google.protobuf.MapEntry<java.lang.Long,V>,int) com.google.protobuf.GeneratedMessage.<V>serializeStringMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.String,V>,com.google.protobuf.MapEntry<java.lang.String,V>,int) com.google.protobuf.GeneratedMessage.canUseUnsafe() GeneratedMessage.computeStringSize(int,Object) GeneratedMessage.computeStringSizeNoTag(Object) com.google.protobuf.GeneratedMessage.emptyBooleanList() com.google.protobuf.GeneratedMessage.emptyDoubleList() com.google.protobuf.GeneratedMessage.emptyFloatList() com.google.protobuf.GeneratedMessage.emptyIntList() com.google.protobuf.GeneratedMessage.emptyLongList() GeneratedMessage.getAllFields() GeneratedMessage.getDescriptorForType() GeneratedMessage.getField(Descriptors.FieldDescriptor) GeneratedMessage.getOneofFieldDescriptor(Descriptors.OneofDescriptor) GeneratedMessage.getParserForType() GeneratedMessage.getRepeatedField(Descriptors.FieldDescriptor,int) GeneratedMessage.getRepeatedFieldCount(Descriptors.FieldDescriptor) GeneratedMessage.getSerializedSize() GeneratedMessage.getUnknownFields() GeneratedMessage.hasField(Descriptors.FieldDescriptor) GeneratedMessage.hasOneof(Descriptors.OneofDescriptor) GeneratedMessage.internalGetFieldAccessorTable() GeneratedMessage.internalGetMapField(int) com.google.protobuf.GeneratedMessage.internalGetMapFieldReflection(int) GeneratedMessage.isInitialized() com.google.protobuf.GeneratedMessage.isStringEmpty(java.lang.Object) GeneratedMessage.makeExtensionsImmutable() com.google.protobuf.GeneratedMessage.mergeFromAndMakeImmutableInternal(com.google.protobuf.CodedInputStream,com.google.protobuf.ExtensionRegistryLite) com.google.protobuf.GeneratedMessage.newInstance(com.google.protobuf.GeneratedMessage.UnusedPrivateParameter) GeneratedMessage.parseUnknownField(CodedInputStream,UnknownFieldSet.Builder,ExtensionRegistryLite,int) com.google.protobuf.GeneratedMessage.parseUnknownFieldProto3(com.google.protobuf.CodedInputStream,com.google.protobuf.UnknownFieldSet.Builder,com.google.protobuf.ExtensionRegistryLite,int) GeneratedMessage.writeReplace() GeneratedMessage.writeString(CodedOutputStream,int,Object) GeneratedMessage.writeStringNoTag(CodedOutputStream,Object) GeneratedMessage.writeTo(CodedOutputStream) Object.clone() Object.finalize() Object.getClass() Object.notify() Object.notifyAll() Object.wait() Object.wait(long) Object.wait(long,int) Static Fields BASIC ALGORITHM FIELD NUMBER public static final int BASIC ALGORITHM FIELD NUMBER Field Value Type Description int CLUSTER TYPE FIELD NUMBER public static final int CLUSTER TYPE FIELD NUMBER Field Value Type Description int ID FIELD NUMBER public static final int ID FIELD NUMBER Field Value Type Description int LABELS FIELD NUMBER public static final int LABELS FIELD NUMBER Field Value Type Description int NAME FIELD NUMBER public static final int NAME FIELD NUMBER Field Value Type Description int SECONDARY WORKER CONFIG FIELD NUMBER public static final int SECONDARY WORKER CONFIG FIELD NUMBER Field Value Type Description int WORKER CONFIG FIELD NUMBER public static final int WORKER CONFIG FIELD NUMBER Field Value Type Description int Static Methods getDefaultInstance() public static AutoscalingPolicy getDefaultInstance () Returns Type Description AutoscalingPolicy getDescriptor() public static final Descriptors .
- For projects.regions.autoscalingPolicies , the resource name of the policy has the following format: projects/{project id}/regions/{region}/autoscalingPolicies/{policy id} For projects.locations.autoscalingPolicies , the resource name of the policy has the following format: projects/{project id}/locations/{location}/autoscalingPolicies/{policy id} string name = 2 [(.google.api.field behavior) = OUTPUT ONLY]; Returns Type Description ByteString The bytes for name. getParserForType() public Parser<AutoscalingPolicy> getParserForType () Returns Type Description Parser < AutoscalingPolicy > Overrides GeneratedMessage.getParserForType() getSecondaryWorkerConfig() public InstanceGroupAutoscalingPolicyConfig getSecondaryWorkerConfig () Optional.
- Describes how the autoscaler will operate for primary workers. .google.cloud.dataproc.v1.InstanceGroupAutoscalingPolicyConfig worker config = 4 [(.google.api.field behavior) = REQUIRED]; Returns Type Description InstanceGroupAutoscalingPolicyConfigOrBuilder hasBasicAlgorithm() public boolean hasBasicAlgorithm () .google.cloud.dataproc.v1.BasicAutoscalingAlgorithm basic algorithm = 3 [(.google.api.field behavior) = REQUIRED]; Returns Type Description boolean Whether the basicAlgorithm field is set. hasSecondaryWorkerConfig() public boolean hasSecondaryWorkerConfig () Optional.
- Describes how the autoscaler will operate for secondary workers. .google.cloud.dataproc.v1.InstanceGroupAutoscalingPolicyConfig secondary worker config = 5 [(.google.api.field behavior) = OPTIONAL]; Returns Type Description InstanceGroupAutoscalingPolicyConfigOrBuilder getSerializedSize() public int getSerializedSize () Returns Type Description int Overrides GeneratedMessage.getSerializedSize() getWorkerConfig() public InstanceGroupAutoscalingPolicyConfig getWorkerConfig () Required.

