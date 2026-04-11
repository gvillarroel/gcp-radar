---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T06:18:40.388Z"
product_name: "Dataform"
product_slug: "dataform"
feature_name: "Uncommitted changes preview during commit"
feature_slug: "uncommitted-changes-preview-during-commit"
latest_feature_date: "2023-12-04"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataform/latest/com.google.cloud.dataform.v1.CommitRepositoryChangesRequest"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataform/latest/com.google.cloud.dataform.v1.CommitRepositoryChangesRequest.Builder"
  - "https://docs.cloud.google.com/dataform/docs/access-control"
keywords:
  - "uncommitted"
  - "changes"
  - "preview"
  - "during"
  - "commit"
  - "this"
  - "lets"
  - "users"
---

# Uncommitted changes preview during commit

Product: Dataform
Coverage: LOW

## Step 02 Summary

This feature lets users preview uncommitted changes while creating a commit in Dataform.

## Extended Definition

This feature lets users preview uncommitted changes while creating a commit in Dataform.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataform/latest/com.google.cloud.dataform.v1.CommitRepositoryChangesRequest](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataform/latest/com.google.cloud.dataform.v1.CommitRepositoryChangesRequest)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataform/latest/com.google.cloud.dataform.v1.CommitRepositoryChangesRequest.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataform/latest/com.google.cloud.dataform.v1.CommitRepositoryChangesRequest.Builder)
- [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control)

## Supporting Pages

### "Class CommitRepositoryChangesRequest (0.87.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataform/latest/com.google.cloud.dataform.v1.CommitRepositoryChangesRequest](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataform/latest/com.google.cloud.dataform.v1.CommitRepositoryChangesRequest)
- Source ID: `site-java-reference`
- Final score: 112
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Builder toBuilder () Returns Type Description CommitRepositoryChangesRequest.Builder writeTo(CodedOutputStream output) public void writeTo ( CodedOutputStream output ) Parameter Name Description output CodedOutputStream Overrides GeneratedMessage.writeTo(CodedOutputStream output) Exceptions Type Description IOException Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Protobuf type google.cloud.dataform.v1.CommitRepositoryChangesRequest Inheritance Object > AbstractMessageLite<MessageType,BuilderType> > AbstractMessage > GeneratedMessage > CommitRepositoryChangesRequest Implements CommitRepositoryChangesRequestOrBuilder Inherited Members AbstractMessage.equals(Object) AbstractMessage.findInitializationErrors() AbstractMessage.getInitializationErrorString() AbstractMessage.hashCode() AbstractMessage.hashFields(int,Map<Descriptors.FieldDescriptor,Object>) AbstractMessage.newBuilderForType(AbstractMessage.BuilderParent) AbstractMessage.toString() AbstractMessageLite.<T>addAll(Iterable<T>,List<? super T>) AbstractMessageLite.checkByteStringIsUtf8(ByteString) AbstractMessageLite.toByteArray() AbstractMessageLite.toByteString() AbstractMessageLite.writeDelimitedTo(OutputStream) AbstractMessageLite.writeTo(OutputStream) com.google.protobuf.GeneratedMessage.<ContainingT,T>newFileScopedGeneratedExtension(java.lang.Class<?>,com.google.protobuf.Message) com.google.protobuf.GeneratedMessage.<ContainingT,T>newMessageScopedGeneratedExtension(com.google.protobuf.Message,int,java.lang.Class<?>,com.google.protobuf.Message) com.google.protobuf.GeneratedMessage.<ListT>makeMutableCopy(ListT) com.google.protobuf.GeneratedMessage.<ListT>makeMutableCopy(ListT,int) GeneratedMessage.<M>parseDelimitedWithIOException(Parser<M>,InputStream) GeneratedMessage.<M>parseDelimitedWithIOException(Parser<M>,InputStream,ExtensionRegistryLite) GeneratedMessage.<M>parseWithIOException(Parser<M>,CodedInputStream) GeneratedMessage.<M>parseWithIOException(Parser<M>,CodedInputStream,ExtensionRegistryLite) GeneratedMessage.<M>parseWithIOException(Parser<M>,InputStream) GeneratedMessage.<M>parseWithIOException(Parser<M>,InputStream,ExtensionRegistryLite) com.google.protobuf.GeneratedMessage.<T>emptyList(java.lang.Class<T>) com.google.protobuf.GeneratedMessage.<V>serializeBooleanMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.Boolean,V>,com.google.protobuf.MapEntry<java.lang.Boolean,V>,int) com.google.protobuf.GeneratedMessage.<V>serializeIntegerMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.Integer,V>,com.google.protobuf.MapEntry<java.lang.Integer,V>,int) com.google.protobuf.GeneratedMessage.<V>serializeLongMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.Long,V>,com.google.protobuf.MapEntry<java.lang.Long,V>,int) com.google.protobuf.GeneratedMessage.<V>serializeStringMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.String,V>,com.google.protobuf.MapEntry<java.lang.String,V>,int) com.google.protobuf.GeneratedMessage.canUseUnsafe() GeneratedMessage.computeStringSize(int,Object) GeneratedMessage.computeStringSizeNoTag(Object) com.google.protobuf.GeneratedMessage.emptyBooleanList() com.google.protobuf.GeneratedMessage.emptyDoubleList() com.google.protobuf.GeneratedMessage.emptyFloatList() com.google.protobuf.GeneratedMessage.emptyIntList() com.google.protobuf.GeneratedMessage.emptyLongList() GeneratedMessage.getAllFields() GeneratedMessage.getDescriptorForType() GeneratedMessage.getField(Descriptors.FieldDescriptor) GeneratedMessage.getOneofFieldDescriptor(Descriptors.OneofDescriptor) GeneratedMessage.getParserForType() GeneratedMessage.getRepeatedField(Descriptors.FieldDescriptor,int) GeneratedMessage.getRepeatedFieldCount(Descriptors.FieldDescriptor) GeneratedMessage.getSerializedSize() GeneratedMessage.getUnknownFields() GeneratedMessage.hasField(Descriptors.FieldDescriptor) GeneratedMessage.hasOneof(Descriptors.OneofDescriptor) GeneratedMessage.internalGetFieldAccessorTable() GeneratedMessage.internalGetMapField(int) com.google.protobuf.GeneratedMessage.internalGetMapFieldReflection(int) GeneratedMessage.isInitialized() com.google.protobuf.GeneratedMessage.isStringEmpty(java.lang.Object) GeneratedMessage.makeExtensionsImmutable() com.google.protobuf.GeneratedMessage.mergeFromAndMakeImmutableInternal(com.google.protobuf.CodedInputStream,com.google.protobuf.ExtensionRegistryLite) com.google.protobuf.GeneratedMessage.newInstance(com.google.protobuf.GeneratedMessage.UnusedPrivateParameter) GeneratedMessage.parseUnknownField(CodedInputStream,UnknownFieldSet.Builder,ExtensionRegistryLite,int) com.google.protobuf.GeneratedMessage.parseUnknownFieldProto3(com.google.protobuf.CodedInputStream,com.google.protobuf.UnknownFieldSet.Builder,com.google.protobuf.ExtensionRegistryLite,int) GeneratedMessage.writeReplace() GeneratedMessage.writeString(CodedOutputStream,int,Object) GeneratedMessage.writeStringNoTag(CodedOutputStream,Object) GeneratedMessage.writeTo(CodedOutputStream) Object.clone() Object.finalize() Object.getClass() Object.notify() Object.notifyAll() Object.wait() Object.wait(long) Object.wait(long,int) Static Fields COMMIT METADATA FIELD NUMBER public static final int COMMIT METADATA FIELD NUMBER Field Value Type Description int FILE OPERATIONS FIELD NUMBER public static final int FILE OPERATIONS FIELD NUMBER Field Value Type Description int NAME FIELD NUMBER public static final int NAME FIELD NUMBER Field Value Type Description int REQUIRED HEAD COMMIT SHA FIELD NUMBER public static final int REQUIRED HEAD COMMIT SHA FIELD NUMBER Field Value Type Description int Static Methods getDefaultInstance() public static CommitRepositoryChangesRequest getDefaultInstance () Returns Type Description CommitRepositoryChangesRequest getDescriptor() public static final Descriptors .
- Builder newBuilder ( CommitRepositoryChangesRequest prototype ) Parameter Name Description prototype CommitRepositoryChangesRequest Returns Type Description CommitRepositoryChangesRequest.Builder parseDelimitedFrom(InputStream input) public static CommitRepositoryChangesRequest parseDelimitedFrom ( InputStream input ) Parameter Name Description input InputStream Returns Type Description CommitRepositoryChangesRequest Exceptions Type Description IOException parseDelimitedFrom(InputStream input, ExtensionRegistryLite extensionRegistry) public static CommitRepositoryChangesRequest parseDelimitedFrom ( InputStream input , ExtensionRegistryLite extensionRegistry ) Parameters Name Description input InputStream extensionRegistry ExtensionRegistryLite Returns Type Description CommitRepositoryChangesRequest Exceptions Type Description IOException parseFrom(byte[] data) public static CommitRepositoryChangesRequest parseFrom ( byte [] data ) Parameter Name Description data byte [] Returns Type Description CommitRepositoryChangesRequest Exceptions Type Description InvalidProtocolBufferException parseFrom(byte[] data, ExtensionRegistryLite extensionRegistry) public static CommitRepositoryChangesRequest parseFrom ( byte [] data , ExtensionRegistryLite extensionRegistry ) Parameters Name Description data byte [] extensionRegistry ExtensionRegistryLite Returns Type Description CommitRepositoryChangesRequest Exceptions Type Description InvalidProtocolBufferException parseFrom(ByteString data) public static CommitRepositoryChangesRequest parseFrom ( ByteString data ) Parameter Name Description data ByteString Returns Type Description CommitRepositoryChangesRequest Exceptions Type Description InvalidProtocolBufferException parseFrom(ByteString data, ExtensionRegistryLite extensionRegistry) public static CommitRepositoryChangesRequest parseFrom ( ByteString data , ExtensionRegistryLite extensionRegistry ) Parameters Name Description data ByteString extensionRegistry ExtensionRegistryLite Returns Type Description CommitRepositoryChangesRequest Exceptions Type Description InvalidProtocolBufferException parseFrom(CodedInputStream input) public static CommitRepositoryChangesRequest parseFrom ( CodedInputStream input ) Parameter Name Description input CodedInputStream Returns Type Description CommitRepositoryChangesRequest Exceptions Type Description IOException parseFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry) public static CommitRepositoryChangesRequest parseFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry ) Parameters Name Description input CodedInputStream extensionRegistry ExtensionRegistryLite Returns Type Description CommitRepositoryChangesRequest Exceptions Type Description IOException parseFrom(InputStream input) public static CommitRepositoryChangesRequest parseFrom ( InputStream input ) Parameter Name Description input InputStream Returns Type Description CommitRepositoryChangesRequest Exceptions Type Description IOException parseFrom(InputStream input, ExtensionRegistryLite extensionRegistry) public static CommitRepositoryChangesRequest parseFrom ( InputStream input , ExtensionRegistryLite extensionRegistry ) Parameters Name Description input InputStream extensionRegistry ExtensionRegistryLite Returns Type Description CommitRepositoryChangesRequest Exceptions Type Description IOException parseFrom(ByteBuffer data) public static CommitRepositoryChangesRequest parseFrom ( ByteBuffer data ) Parameter Name Description data ByteBuffer Returns Type Description CommitRepositoryChangesRequest Exceptions Type Description InvalidProtocolBufferException parseFrom(ByteBuffer data, ExtensionRegistryLite extensionRegistry) public static CommitRepositoryChangesRequest parseFrom ( ByteBuffer data , ExtensionRegistryLite extensionRegistry ) Parameters Name Description data ByteBuffer extensionRegistry ExtensionRegistryLite Returns Type Description CommitRepositoryChangesRequest Exceptions Type Description InvalidProtocolBufferException parser() public static Parser<CommitRepositoryChangesRequest> parser () Returns Type Description Parser < CommitRepositoryChangesRequest > Methods containsFileOperations(String key) public boolean containsFileOperations ( String key ) Optional.
- 0.87.0 (latest) 0.86.0 0.84.0 0.82.0 0.81.0 0.80.0 0.79.0 0.77.0 0.75.0 0.74.0 0.73.0 0.72.0 0.71.0 0.69.0 0.67.0 0.66.0 0.63.0 0.62.0 0.61.0 0.59.0 0.58.0 0.57.0 0.56.0 0.55.0 0.54.0 0.53.0 0.52.0 0.51.0 0.50.0 0.48.0 0.47.0 0.46.0 0.45.0 0.44.0 0.43.0 0.42.0 0.41.0 0.40.0 0.39.0 0.38.0 0.36.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.26.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.0 0.3.0 0.2.4 public final class CommitRepositoryChangesRequest extends GeneratedMessage implements CommitRepositoryChangesRequestOrBuilder CommitRepositoryChanges request message.

### "Class CommitRepositoryChangesRequest.Builder (0.87.0) \_|\_ Java client\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataform/latest/com.google.cloud.dataform.v1.CommitRepositoryChangesRequest.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataform/latest/com.google.cloud.dataform.v1.CommitRepositoryChangesRequest.Builder)
- Source ID: `site-java-reference`
- Final score: 112
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If unset, no validation on the current HEAD commit SHA is performed. string required head commit sha = 4 [(.google.api.field behavior) = OPTIONAL]; Returns Type Description CommitRepositoryChangesRequest.Builder This builder for chaining. containsFileOperations(String key) public boolean containsFileOperations ( String key ) Optional.
- The repository's name. string name = 1 [(.google.api.field behavior) = REQUIRED, (.google.api.resource reference) = { ... } Returns Type Description CommitRepositoryChangesRequest.Builder This builder for chaining. clearRequiredHeadCommitSha() public CommitRepositoryChangesRequest .
- Returns Type Description CommitRepositoryChangesRequest.Builder This builder for chaining. setRequiredHeadCommitShaBytes(ByteString value) public CommitRepositoryChangesRequest .
- Returns Type Description CommitRepositoryChangesRequest.Builder This builder for chaining. setRequiredHeadCommitSha(String value) public CommitRepositoryChangesRequest .

### Control access with IAM \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control)
- Source ID: `site-docs-root-2`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- Workforce Identity Federation in Dataform Workforce Identity Federation lets you use an external identity provider (IdP) to authenticate and authorize users to Google Cloud services with IAM.
- Implement enhanced scheduling permissions Preview This product or feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- This role grants the iam.serviceAccounts.actAs permission, which lets scheduled runs, initiated by the default Dataform service agent, impersonate the custom service account.
- Enable private workspaces Preview This product or feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .

