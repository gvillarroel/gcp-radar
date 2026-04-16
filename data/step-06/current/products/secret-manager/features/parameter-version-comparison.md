---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:16.876Z"
product_name: "Secret Manager"
product_slug: "secret-manager"
feature_name: "Parameter version comparison"
feature_slug: "parameter-version-comparison"
latest_feature_date: "2026-02-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.pagers.ListSecretVersionsAsyncPager"
  - "https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.pagers.ListSecretVersionsPager"
  - "https://docs.cloud.google.com/secret-manager/docs/overview"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-secretmanager/latest/com.google.cloud.secretmanager.v1.AccessSecretVersionRequest"
keywords:
  - "parameter"
  - "version"
  - "comparison"
  - "you"
  - "can"
  - "compare"
  - "two"
  - "versions"
---

# Parameter version comparison

Product: Secret Manager
Coverage: MEDIUM

## Step 02 Summary

You can compare two parameter versions to inspect payload changes over time.

## Extended Definition

You can compare two parameter versions to inspect payload changes over time.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.pagers.ListSecretVersionsAsyncPager](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.pagers.ListSecretVersionsAsyncPager)
- [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.pagers.ListSecretVersionsPager](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.pagers.ListSecretVersionsPager)
- [https://docs.cloud.google.com/secret-manager/docs/overview](https://docs.cloud.google.com/secret-manager/docs/overview)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-secretmanager/latest/com.google.cloud.secretmanager.v1.AccessSecretVersionRequest](https://docs.cloud.google.com/java/docs/reference/google-cloud-secretmanager/latest/com.google.cloud.secretmanager.v1.AccessSecretVersionRequest)

## Supporting Pages

### "Class ListSecretVersionsAsyncPager (2.27.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.pagers.ListSecretVersionsAsyncPager](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.pagers.ListSecretVersionsAsyncPager)
- Source ID: `site-python-reference`
- Final score: 136
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.secretmanager v1.types.ListSecretVersionsRequest The initial request object. response google.cloud.secretmanager v1.types.ListSecretVersionsResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Home Documentation Developer tools Python Client libraries Send feedback Class ListSecretVersionsAsyncPager (2.27.0) Stay organized with collections Save and categorize content based on your preferences.
- 2.27.0 (latest) 2.26.0 2.25.0 2.23.3 2.22.1 2.21.1 2.20.2 2.19.0 2.18.3 2.17.0 2.16.3 2.15.1 2.14.0 2.13.0 2.12.6 2.11.1 2.10.0 2.9.2 2.8.0 2.7.3 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.0.2 0.2.0 0.1.1 ListSecretVersionsAsyncPager ( method : typing .
- If there are more pages, the aiter method will make additional ListSecretVersions requests and continue to iterate through the versions field on the corresponding responses.

### "Class ListSecretVersionsPager (2.27.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.pagers.ListSecretVersionsPager](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.pagers.ListSecretVersionsPager)
- Source ID: `site-python-reference`
- Final score: 136
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.secretmanager v1.types.ListSecretVersionsRequest The initial request object. response google.cloud.secretmanager v1.types.ListSecretVersionsResponse The initial response object. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Home Documentation Developer tools Python Client libraries Send feedback Class ListSecretVersionsPager (2.27.0) Stay organized with collections Save and categorize content based on your preferences.
- 2.27.0 (latest) 2.26.0 2.25.0 2.23.3 2.22.1 2.21.1 2.20.2 2.19.0 2.18.3 2.17.0 2.16.3 2.15.1 2.14.0 2.13.0 2.12.6 2.11.1 2.10.0 2.9.2 2.8.0 2.7.3 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.0.2 0.2.0 0.1.1 ListSecretVersionsPager ( method : typing .
- If there are more pages, the iter method will make additional ListSecretVersions requests and continue to iterate through the versions field on the corresponding responses.

### Secret Manager overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secret-manager/docs/overview](https://docs.cloud.google.com/secret-manager/docs/overview)
- Source ID: `site-api-reference`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- Using Secret Manager, you can do the following: Manage rollback, recovery, and auditing using versions : Versions help you manage gradual rollouts and emergency rollback, If a secret is accidentally changed or compromised, you can revert to a previous, known-good version.
- You can pin secret versions to specific workloads and add aliases for easier access to secret data.
- You can also disable or destroy secret versions that you don't require.
- Manage operational parameters for your applications using Parameter Manager : Parameter Manager is an extension to the Secret Manager service that you can use to store and manage application configurations such as database connection strings, feature flags, environment names, port numbers to listen on, and settings for application features.

### "Class AccessSecretVersionRequest (2.88.0) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-secretmanager/latest/com.google.cloud.secretmanager.v1.AccessSecretVersionRequest](https://docs.cloud.google.com/java/docs/reference/google-cloud-secretmanager/latest/com.google.cloud.secretmanager.v1.AccessSecretVersionRequest)
- Source ID: `site-java-reference`
- Final score: 134
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Protobuf type google.cloud.secretmanager.v1.AccessSecretVersionRequest Inheritance Object > AbstractMessageLite<MessageType,BuilderType> > AbstractMessage > GeneratedMessage > AccessSecretVersionRequest Implements AccessSecretVersionRequestOrBuilder Inherited Members AbstractMessage.equals(Object) AbstractMessage.findInitializationErrors() AbstractMessage.getInitializationErrorString() AbstractMessage.hashCode() AbstractMessage.hashFields(int,Map<Descriptors.FieldDescriptor,Object>) AbstractMessage.newBuilderForType(AbstractMessage.BuilderParent) AbstractMessage.toString() AbstractMessageLite.<T>addAll(Iterable<T>,List<? super T>) AbstractMessageLite.checkByteStringIsUtf8(ByteString) AbstractMessageLite.toByteArray() AbstractMessageLite.toByteString() AbstractMessageLite.writeDelimitedTo(OutputStream) AbstractMessageLite.writeTo(OutputStream) com.google.protobuf.GeneratedMessage.<ContainingT,T>newFileScopedGeneratedExtension(java.lang.Class<?>,com.google.protobuf.Message) com.google.protobuf.GeneratedMessage.<ContainingT,T>newMessageScopedGeneratedExtension(com.google.protobuf.Message,int,java.lang.Class<?>,com.google.protobuf.Message) com.google.protobuf.GeneratedMessage.<ListT>makeMutableCopy(ListT) com.google.protobuf.GeneratedMessage.<ListT>makeMutableCopy(ListT,int) GeneratedMessage.<M>parseDelimitedWithIOException(Parser<M>,InputStream) GeneratedMessage.<M>parseDelimitedWithIOException(Parser<M>,InputStream,ExtensionRegistryLite) GeneratedMessage.<M>parseWithIOException(Parser<M>,CodedInputStream) GeneratedMessage.<M>parseWithIOException(Parser<M>,CodedInputStream,ExtensionRegistryLite) GeneratedMessage.<M>parseWithIOException(Parser<M>,InputStream) GeneratedMessage.<M>parseWithIOException(Parser<M>,InputStream,ExtensionRegistryLite) com.google.protobuf.GeneratedMessage.<T>emptyList(java.lang.Class<T>) com.google.protobuf.GeneratedMessage.<V>serializeBooleanMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.Boolean,V>,com.google.protobuf.MapEntry<java.lang.Boolean,V>,int) com.google.protobuf.GeneratedMessage.<V>serializeIntegerMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.Integer,V>,com.google.protobuf.MapEntry<java.lang.Integer,V>,int) com.google.protobuf.GeneratedMessage.<V>serializeLongMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.Long,V>,com.google.protobuf.MapEntry<java.lang.Long,V>,int) com.google.protobuf.GeneratedMessage.<V>serializeStringMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.String,V>,com.google.protobuf.MapEntry<java.lang.String,V>,int) com.google.protobuf.GeneratedMessage.canUseUnsafe() GeneratedMessage.computeStringSize(int,Object) GeneratedMessage.computeStringSizeNoTag(Object) com.google.protobuf.GeneratedMessage.emptyBooleanList() com.google.protobuf.GeneratedMessage.emptyDoubleList() com.google.protobuf.GeneratedMessage.emptyFloatList() com.google.protobuf.GeneratedMessage.emptyIntList() com.google.protobuf.GeneratedMessage.emptyLongList() GeneratedMessage.getAllFields() GeneratedMessage.getDescriptorForType() GeneratedMessage.getField(Descriptors.FieldDescriptor) GeneratedMessage.getOneofFieldDescriptor(Descriptors.OneofDescriptor) GeneratedMessage.getParserForType() GeneratedMessage.getRepeatedField(Descriptors.FieldDescriptor,int) GeneratedMessage.getRepeatedFieldCount(Descriptors.FieldDescriptor) GeneratedMessage.getSerializedSize() GeneratedMessage.getUnknownFields() GeneratedMessage.hasField(Descriptors.FieldDescriptor) GeneratedMessage.hasOneof(Descriptors.OneofDescriptor) GeneratedMessage.internalGetFieldAccessorTable() GeneratedMessage.internalGetMapField(int) com.google.protobuf.GeneratedMessage.internalGetMapFieldReflection(int) GeneratedMessage.isInitialized() com.google.protobuf.GeneratedMessage.isStringEmpty(java.lang.Object) GeneratedMessage.makeExtensionsImmutable() com.google.protobuf.GeneratedMessage.mergeFromAndMakeImmutableInternal(com.google.protobuf.CodedInputStream,com.google.protobuf.ExtensionRegistryLite) com.google.protobuf.GeneratedMessage.newInstance(com.google.protobuf.GeneratedMessage.UnusedPrivateParameter) GeneratedMessage.parseUnknownField(CodedInputStream,UnknownFieldSet.Builder,ExtensionRegistryLite,int) com.google.protobuf.GeneratedMessage.parseUnknownFieldProto3(com.google.protobuf.CodedInputStream,com.google.protobuf.UnknownFieldSet.Builder,com.google.protobuf.ExtensionRegistryLite,int) GeneratedMessage.writeReplace() GeneratedMessage.writeString(CodedOutputStream,int,Object) GeneratedMessage.writeStringNoTag(CodedOutputStream,Object) GeneratedMessage.writeTo(CodedOutputStream) Object.clone() Object.finalize() Object.getClass() Object.notify() Object.notifyAll() Object.wait() Object.wait(long) Object.wait(long,int) Static Fields NAME FIELD NUMBER public static final int NAME FIELD NUMBER Field Value Type Description int Static Methods getDefaultInstance() public static AccessSecretVersionRequest getDefaultInstance () Returns Type Description AccessSecretVersionRequest getDescriptor() public static final Descriptors .
- Builder newBuilder ( AccessSecretVersionRequest prototype ) Parameter Name Description prototype AccessSecretVersionRequest Returns Type Description AccessSecretVersionRequest.Builder parseDelimitedFrom(InputStream input) public static AccessSecretVersionRequest parseDelimitedFrom ( InputStream input ) Parameter Name Description input InputStream Returns Type Description AccessSecretVersionRequest Exceptions Type Description IOException parseDelimitedFrom(InputStream input, ExtensionRegistryLite extensionRegistry) public static AccessSecretVersionRequest parseDelimitedFrom ( InputStream input , ExtensionRegistryLite extensionRegistry ) Parameters Name Description input InputStream extensionRegistry ExtensionRegistryLite Returns Type Description AccessSecretVersionRequest Exceptions Type Description IOException parseFrom(byte[] data) public static AccessSecretVersionRequest parseFrom ( byte [] data ) Parameter Name Description data byte [] Returns Type Description AccessSecretVersionRequest Exceptions Type Description InvalidProtocolBufferException parseFrom(byte[] data, ExtensionRegistryLite extensionRegistry) public static AccessSecretVersionRequest parseFrom ( byte [] data , ExtensionRegistryLite extensionRegistry ) Parameters Name Description data byte [] extensionRegistry ExtensionRegistryLite Returns Type Description AccessSecretVersionRequest Exceptions Type Description InvalidProtocolBufferException parseFrom(ByteString data) public static AccessSecretVersionRequest parseFrom ( ByteString data ) Parameter Name Description data ByteString Returns Type Description AccessSecretVersionRequest Exceptions Type Description InvalidProtocolBufferException parseFrom(ByteString data, ExtensionRegistryLite extensionRegistry) public static AccessSecretVersionRequest parseFrom ( ByteString data , ExtensionRegistryLite extensionRegistry ) Parameters Name Description data ByteString extensionRegistry ExtensionRegistryLite Returns Type Description AccessSecretVersionRequest Exceptions Type Description InvalidProtocolBufferException parseFrom(CodedInputStream input) public static AccessSecretVersionRequest parseFrom ( CodedInputStream input ) Parameter Name Description input CodedInputStream Returns Type Description AccessSecretVersionRequest Exceptions Type Description IOException parseFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry) public static AccessSecretVersionRequest parseFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry ) Parameters Name Description input CodedInputStream extensionRegistry ExtensionRegistryLite Returns Type Description AccessSecretVersionRequest Exceptions Type Description IOException parseFrom(InputStream input) public static AccessSecretVersionRequest parseFrom ( InputStream input ) Parameter Name Description input InputStream Returns Type Description AccessSecretVersionRequest Exceptions Type Description IOException parseFrom(InputStream input, ExtensionRegistryLite extensionRegistry) public static AccessSecretVersionRequest parseFrom ( InputStream input , ExtensionRegistryLite extensionRegistry ) Parameters Name Description input InputStream extensionRegistry ExtensionRegistryLite Returns Type Description AccessSecretVersionRequest Exceptions Type Description IOException parseFrom(ByteBuffer data) public static AccessSecretVersionRequest parseFrom ( ByteBuffer data ) Parameter Name Description data ByteBuffer Returns Type Description AccessSecretVersionRequest Exceptions Type Description InvalidProtocolBufferException parseFrom(ByteBuffer data, ExtensionRegistryLite extensionRegistry) public static AccessSecretVersionRequest parseFrom ( ByteBuffer data , ExtensionRegistryLite extensionRegistry ) Parameters Name Description data ByteBuffer extensionRegistry ExtensionRegistryLite Returns Type Description AccessSecretVersionRequest Exceptions Type Description InvalidProtocolBufferException parser() public static Parser<AccessSecretVersionRequest> parser () Returns Type Description Parser < AccessSecretVersionRequest > Methods equals(Object obj) public boolean equals ( Object obj ) Parameter Name Description obj Object Returns Type Description boolean Overrides AbstractMessage.equals(Object other) getDefaultInstanceForType() public AccessSecretVersionRequest getDefaultInstanceForType () Returns Type Description AccessSecretVersionRequest getName() public String getName () Required.
- The resource name of the SecretVersion in the format projects/ /secrets/ /versions/ or projects/ /locations/ /secrets/ /versions/ . projects/ /secrets/ /versions/latest or projects/ /locations/ /secrets/ /versions/latest is an alias to the most recently created SecretVersion . string name = 1 [(.google.api.field behavior) = REQUIRED, (.google.api.resource reference) = { ... } Returns Type Description ByteString The bytes for name. getParserForType() public Parser<AccessSecretVersionRequest> getParserForType () Returns Type Description Parser < AccessSecretVersionRequest > Overrides GeneratedMessage.getParserForType() getSerializedSize() public int getSerializedSize () Returns Type Description int Overrides GeneratedMessage.getSerializedSize() hashCode() public int hashCode () Returns Type Description int Overrides AbstractMessage.hashCode() internalGetFieldAccessorTable() protected GeneratedMessage .
- Builder toBuilder () Returns Type Description AccessSecretVersionRequest.Builder writeTo(CodedOutputStream output) public void writeTo ( CodedOutputStream output ) Parameter Name Description output CodedOutputStream Overrides GeneratedMessage.writeTo(CodedOutputStream output) Exceptions Type Description IOException Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

