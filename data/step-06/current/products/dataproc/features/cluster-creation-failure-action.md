---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.617Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Cluster creation failure action"
feature_slug: "cluster-creation-failure-action"
latest_feature_date: "2021-09-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicyServiceSettings.Builder"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AuthenticationConfig"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AuthenticationConfig.Builder"
keywords:
  - "cluster"
  - "creation"
  - "failure"
  - "action"
  - "dataproc"
  - "supports"
  - "feature"
  - "handling"
---

# Cluster creation failure action

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Dataproc supports a cluster creation failure action feature for handling failed primary workers during cluster provisioning; Dataproc can automatically delete failed primary workers during cluster creation through the actionOnFailedPrimaryWorkers setting.

## Extended Definition

Dataproc supports a cluster creation failure action feature for handling failed primary workers during cluster provisioning; Dataproc can automatically delete failed primary workers during cluster creation through the actionOnFailedPrimaryWorkers setting.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicyServiceSettings.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicyServiceSettings.Builder)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AuthenticationConfig](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AuthenticationConfig)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AuthenticationConfig.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AuthenticationConfig.Builder)

## Supporting Pages

### "Class AutoscalingPolicyServiceSettings.Builder (4.85.0) \_|\_ Java client\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicyServiceSettings.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicyServiceSettings.Builder)
- Source ID: `site-java-reference`
- Final score: 50
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### "Class AuthenticationConfig (4.85.0) \_|\_ Java client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AuthenticationConfig](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AuthenticationConfig)
- Source ID: `site-java-reference`
- Final score: 46
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Protobuf type google.cloud.dataproc.v1.AuthenticationConfig Inheritance Object > AbstractMessageLite<MessageType,BuilderType> > AbstractMessage > GeneratedMessage > AuthenticationConfig Implements AuthenticationConfigOrBuilder Inherited Members AbstractMessage.equals(Object) AbstractMessage.findInitializationErrors() AbstractMessage.getInitializationErrorString() AbstractMessage.hashCode() AbstractMessage.hashFields(int,Map<Descriptors.FieldDescriptor,Object>) AbstractMessage.newBuilderForType(AbstractMessage.BuilderParent) AbstractMessage.toString() AbstractMessageLite.<T>addAll(Iterable<T>,List<? super T>) AbstractMessageLite.checkByteStringIsUtf8(ByteString) AbstractMessageLite.toByteArray() AbstractMessageLite.toByteString() AbstractMessageLite.writeDelimitedTo(OutputStream) AbstractMessageLite.writeTo(OutputStream) com.google.protobuf.GeneratedMessage.<ContainingT,T>newFileScopedGeneratedExtension(java.lang.Class<?>,com.google.protobuf.Message) com.google.protobuf.GeneratedMessage.<ContainingT,T>newMessageScopedGeneratedExtension(com.google.protobuf.Message,int,java.lang.Class<?>,com.google.protobuf.Message) com.google.protobuf.GeneratedMessage.<ListT>makeMutableCopy(ListT) com.google.protobuf.GeneratedMessage.<ListT>makeMutableCopy(ListT,int) GeneratedMessage.<M>parseDelimitedWithIOException(Parser<M>,InputStream) GeneratedMessage.<M>parseDelimitedWithIOException(Parser<M>,InputStream,ExtensionRegistryLite) GeneratedMessage.<M>parseWithIOException(Parser<M>,CodedInputStream) GeneratedMessage.<M>parseWithIOException(Parser<M>,CodedInputStream,ExtensionRegistryLite) GeneratedMessage.<M>parseWithIOException(Parser<M>,InputStream) GeneratedMessage.<M>parseWithIOException(Parser<M>,InputStream,ExtensionRegistryLite) com.google.protobuf.GeneratedMessage.<T>emptyList(java.lang.Class<T>) com.google.protobuf.GeneratedMessage.<V>serializeBooleanMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.Boolean,V>,com.google.protobuf.MapEntry<java.lang.Boolean,V>,int) com.google.protobuf.GeneratedMessage.<V>serializeIntegerMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.Integer,V>,com.google.protobuf.MapEntry<java.lang.Integer,V>,int) com.google.protobuf.GeneratedMessage.<V>serializeLongMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.Long,V>,com.google.protobuf.MapEntry<java.lang.Long,V>,int) com.google.protobuf.GeneratedMessage.<V>serializeStringMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.String,V>,com.google.protobuf.MapEntry<java.lang.String,V>,int) com.google.protobuf.GeneratedMessage.canUseUnsafe() GeneratedMessage.computeStringSize(int,Object) GeneratedMessage.computeStringSizeNoTag(Object) com.google.protobuf.GeneratedMessage.emptyBooleanList() com.google.protobuf.GeneratedMessage.emptyDoubleList() com.google.protobuf.GeneratedMessage.emptyFloatList() com.google.protobuf.GeneratedMessage.emptyIntList() com.google.protobuf.GeneratedMessage.emptyLongList() GeneratedMessage.getAllFields() GeneratedMessage.getDescriptorForType() GeneratedMessage.getField(Descriptors.FieldDescriptor) GeneratedMessage.getOneofFieldDescriptor(Descriptors.OneofDescriptor) GeneratedMessage.getParserForType() GeneratedMessage.getRepeatedField(Descriptors.FieldDescriptor,int) GeneratedMessage.getRepeatedFieldCount(Descriptors.FieldDescriptor) GeneratedMessage.getSerializedSize() GeneratedMessage.getUnknownFields() GeneratedMessage.hasField(Descriptors.FieldDescriptor) GeneratedMessage.hasOneof(Descriptors.OneofDescriptor) GeneratedMessage.internalGetFieldAccessorTable() GeneratedMessage.internalGetMapField(int) com.google.protobuf.GeneratedMessage.internalGetMapFieldReflection(int) GeneratedMessage.isInitialized() com.google.protobuf.GeneratedMessage.isStringEmpty(java.lang.Object) GeneratedMessage.makeExtensionsImmutable() com.google.protobuf.GeneratedMessage.mergeFromAndMakeImmutableInternal(com.google.protobuf.CodedInputStream,com.google.protobuf.ExtensionRegistryLite) com.google.protobuf.GeneratedMessage.newInstance(com.google.protobuf.GeneratedMessage.UnusedPrivateParameter) GeneratedMessage.parseUnknownField(CodedInputStream,UnknownFieldSet.Builder,ExtensionRegistryLite,int) com.google.protobuf.GeneratedMessage.parseUnknownFieldProto3(com.google.protobuf.CodedInputStream,com.google.protobuf.UnknownFieldSet.Builder,com.google.protobuf.ExtensionRegistryLite,int) GeneratedMessage.writeReplace() GeneratedMessage.writeString(CodedOutputStream,int,Object) GeneratedMessage.writeStringNoTag(CodedOutputStream,Object) GeneratedMessage.writeTo(CodedOutputStream) Object.clone() Object.finalize() Object.getClass() Object.notify() Object.notifyAll() Object.wait() Object.wait(long) Object.wait(long,int) Static Fields USER WORKLOAD AUTHENTICATION TYPE FIELD NUMBER public static final int USER WORKLOAD AUTHENTICATION TYPE FIELD NUMBER Field Value Type Description int Static Methods getDefaultInstance() public static AuthenticationConfig getDefaultInstance () Returns Type Description AuthenticationConfig getDescriptor() public static final Descriptors .
- Authentication type for the user workload running in containers. .google.cloud.dataproc.v1.AuthenticationConfig.AuthenticationType user workload authentication type = 1 [(.google.api.field behavior) = OPTIONAL]; Returns Type Description int The enum numeric value on the wire for userWorkloadAuthenticationType. hashCode() public int hashCode () Returns Type Description int Overrides AbstractMessage.hashCode() internalGetFieldAccessorTable() protected GeneratedMessage .
- Authentication type for the user workload running in containers. .google.cloud.dataproc.v1.AuthenticationConfig.AuthenticationType user workload authentication type = 1 [(.google.api.field behavior) = OPTIONAL]; Returns Type Description AuthenticationConfig.AuthenticationType The userWorkloadAuthenticationType. getUserWorkloadAuthenticationTypeValue() public int getUserWorkloadAuthenticationTypeValue () Optional.

### "Class AuthenticationConfig.Builder (4.85.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AuthenticationConfig.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AuthenticationConfig.Builder)
- Source ID: `site-java-reference`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Protobuf type google.cloud.dataproc.v1.AuthenticationConfig Inheritance java.lang.Object > AbstractMessageLite.Builder<MessageType,BuilderType> > AbstractMessage.Builder<BuilderType> > GeneratedMessage.Builder > AuthenticationConfig.Builder Implements AuthenticationConfigOrBuilder Inherited Members AbstractMessage.Builder.findInitializationErrors() AbstractMessage.Builder.getInitializationErrorString() AbstractMessage.Builder.internalMergeFrom(AbstractMessageLite) AbstractMessage.Builder.mergeFrom(byte[]) AbstractMessage.Builder.mergeFrom(byte[],ExtensionRegistryLite) AbstractMessage.Builder.mergeFrom(byte[],int,int) AbstractMessage.Builder.mergeFrom(byte[],int,int,ExtensionRegistryLite) AbstractMessage.Builder.mergeFrom(ByteString) AbstractMessage.Builder.mergeFrom(ByteString,ExtensionRegistryLite) AbstractMessage.Builder.mergeFrom(CodedInputStream) AbstractMessage.Builder.mergeFrom(CodedInputStream,ExtensionRegistryLite) AbstractMessage.Builder.mergeFrom(Message) AbstractMessage.Builder.mergeFrom(InputStream) AbstractMessage.Builder.mergeFrom(InputStream,ExtensionRegistryLite) AbstractMessage.Builder.newUninitializedMessageException(Message) AbstractMessage.Builder.toString() AbstractMessageLite.Builder.<T>addAll(Iterable<T>,Collection<? super T>) AbstractMessageLite.Builder.<T>addAll(Iterable<T>,List<? super T>) AbstractMessageLite.Builder.internalMergeFrom(MessageType) AbstractMessageLite.Builder.mergeDelimitedFrom(InputStream) AbstractMessageLite.Builder.mergeDelimitedFrom(InputStream,ExtensionRegistryLite) AbstractMessageLite.Builder.mergeFrom(MessageLite) AbstractMessageLite.Builder.newUninitializedMessageException(MessageLite) GeneratedMessage.Builder.addRepeatedField(Descriptors.FieldDescriptor,Object) GeneratedMessage.Builder.clear() GeneratedMessage.Builder.clearField(Descriptors.FieldDescriptor) GeneratedMessage.Builder.clearOneof(Descriptors.OneofDescriptor) GeneratedMessage.Builder.clone() GeneratedMessage.Builder.getAllFields() GeneratedMessage.Builder.getDescriptorForType() GeneratedMessage.Builder.getField(Descriptors.FieldDescriptor) GeneratedMessage.Builder.getFieldBuilder(Descriptors.FieldDescriptor) GeneratedMessage.Builder.getOneofFieldDescriptor(Descriptors.OneofDescriptor) GeneratedMessage.Builder.getParentForChildren() GeneratedMessage.Builder.getRepeatedField(Descriptors.FieldDescriptor,int) GeneratedMessage.Builder.getRepeatedFieldBuilder(Descriptors.FieldDescriptor,int) GeneratedMessage.Builder.getRepeatedFieldCount(Descriptors.FieldDescriptor) com.google.protobuf.GeneratedMessage.Builder.getUnknownFieldSetBuilder() GeneratedMessage.Builder.getUnknownFields() GeneratedMessage.Builder.hasField(Descriptors.FieldDescriptor) GeneratedMessage.Builder.hasOneof(Descriptors.OneofDescriptor) GeneratedMessage.Builder.internalGetFieldAccessorTable() GeneratedMessage.Builder.internalGetMapField(int) com.google.protobuf.GeneratedMessage.Builder.internalGetMapFieldReflection(int) GeneratedMessage.Builder.internalGetMutableMapField(int) com.google.protobuf.GeneratedMessage.Builder.internalGetMutableMapFieldReflection(int) GeneratedMessage.Builder.isClean() GeneratedMessage.Builder.isInitialized() GeneratedMessage.Builder.markClean() GeneratedMessage.Builder.mergeUnknownFields(UnknownFieldSet) com.google.protobuf.GeneratedMessage.Builder.mergeUnknownLengthDelimitedField(int,com.google.protobuf.ByteString) com.google.protobuf.GeneratedMessage.Builder.mergeUnknownVarintField(int,int) GeneratedMessage.Builder.newBuilderForField(Descriptors.FieldDescriptor) GeneratedMessage.Builder.onBuilt() GeneratedMessage.Builder.onChanged() com.google.protobuf.GeneratedMessage.Builder.parseUnknownField(com.google.protobuf.CodedInputStream,com.google.protobuf.ExtensionRegistryLite,int) GeneratedMessage.Builder.setField(Descriptors.FieldDescriptor,Object) GeneratedMessage.Builder.setRepeatedField(Descriptors.FieldDescriptor,int,Object) com.google.protobuf.GeneratedMessage.Builder.setUnknownFieldSetBuilder(com.google.protobuf.UnknownFieldSet.Builder) GeneratedMessage.Builder.setUnknownFields(UnknownFieldSet) com.google.protobuf.GeneratedMessage.Builder.setUnknownFieldsProto3(com.google.protobuf.UnknownFieldSet) Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.wait() Object.wait(long) Object.wait(long,int) Static Methods getDescriptor() public static final Descriptors .
- Authentication type for the user workload running in containers. .google.cloud.dataproc.v1.AuthenticationConfig.AuthenticationType user workload authentication type = 1 [(.google.api.field behavior) = OPTIONAL]; Returns Type Description AuthenticationConfig.Builder This builder for chaining. getDefaultInstanceForType() public AuthenticationConfig getDefaultInstanceForType () Returns Type Description AuthenticationConfig getDescriptorForType() public Descriptors .
- Authentication type for the user workload running in containers. .google.cloud.dataproc.v1.AuthenticationConfig.AuthenticationType user workload authentication type = 1 [(.google.api.field behavior) = OPTIONAL]; Returns Type Description AuthenticationConfig.AuthenticationType The userWorkloadAuthenticationType. getUserWorkloadAuthenticationTypeValue() public int getUserWorkloadAuthenticationTypeValue () Optional.
- Authentication type for the user workload running in containers. .google.cloud.dataproc.v1.AuthenticationConfig.AuthenticationType user workload authentication type = 1 [(.google.api.field behavior) = OPTIONAL]; Returns Type Description int The enum numeric value on the wire for userWorkloadAuthenticationType. internalGetFieldAccessorTable() protected GeneratedMessage .

