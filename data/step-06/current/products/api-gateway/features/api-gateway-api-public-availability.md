---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:11:52.468Z"
product_name: "API Gateway"
product_slug: "api-gateway"
feature_name: "API Gateway API public availability"
feature_slug: "api-gateway-api-public-availability"
latest_feature_date: "2020-09-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/api-gateway/docs/reference/rest/Shared.Types/Binding"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-api-gateway/latest/com.google.cloud.apigateway.v1.ApiConfig.GrpcServiceDefinition.Builder"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-api-gateway/latest/com.google.cloud.apigateway.v1.ApiConfig.GrpcServiceDefinitionOrBuilder"
keywords:
  - "publicly"
  - "visible"
  - "public"
  - "became"
  - "availability"
---

# API Gateway API public availability

Product: API Gateway
Coverage: MEDIUM

## Step 02 Summary

API Gateway API became publicly visible so it can be viewed and enabled without allowlisting.

## Extended Definition

API Gateway API became publicly visible so it can be viewed and enabled without allowlisting.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/api-gateway/docs/reference/rest/Shared.Types/Binding](https://docs.cloud.google.com/api-gateway/docs/reference/rest/Shared.Types/Binding)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-api-gateway/latest/com.google.cloud.apigateway.v1.ApiConfig.GrpcServiceDefinition.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-api-gateway/latest/com.google.cloud.apigateway.v1.ApiConfig.GrpcServiceDefinition.Builder)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-api-gateway/latest/com.google.cloud.apigateway.v1.ApiConfig.GrpcServiceDefinitionOrBuilder](https://docs.cloud.google.com/java/docs/reference/google-cloud-api-gateway/latest/com.google.cloud.apigateway.v1.ApiConfig.GrpcServiceDefinitionOrBuilder)

## Supporting Pages

### Binding \_|\_ API Gateway \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/api-gateway/docs/reference/rest/Shared.Types/Binding](https://docs.cloud.google.com/api-gateway/docs/reference/rest/Shared.Types/Binding)
- Source ID: `site-docs-reference`
- Final score: 39
- Re-rank relevance: N/A

Evidence snippets:
- Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it.

### "Class ApiConfig.GrpcServiceDefinition.Builder (2.88.0) \_|\_ Java client\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-api-gateway/latest/com.google.cloud.apigateway.v1.ApiConfig.GrpcServiceDefinition.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-api-gateway/latest/com.google.cloud.apigateway.v1.ApiConfig.GrpcServiceDefinition.Builder)
- Source ID: `site-java-reference`
- Final score: 35
- Re-rank relevance: N/A

Evidence snippets:
- Protobuf type google.cloud.apigateway.v1.ApiConfig.GrpcServiceDefinition Inheritance java.lang.Object > AbstractMessageLite.Builder<MessageType,BuilderType> > AbstractMessage.Builder<BuilderType> > GeneratedMessage.Builder > ApiConfig.GrpcServiceDefinition.Builder Implements ApiConfig.GrpcServiceDefinitionOrBuilder Inherited Members AbstractMessage.Builder.findInitializationErrors() AbstractMessage.Builder.getInitializationErrorString() AbstractMessage.Builder.internalMergeFrom(AbstractMessageLite) AbstractMessage.Builder.mergeFrom(byte[]) AbstractMessage.Builder.mergeFrom(byte[],ExtensionRegistryLite) AbstractMessage.Builder.mergeFrom(byte[],int,int) AbstractMessage.Builder.mergeFrom(byte[],int,int,ExtensionRegistryLite) AbstractMessage.Builder.mergeFrom(ByteString) AbstractMessage.Builder.mergeFrom(ByteString,ExtensionRegistryLite) AbstractMessage.Builder.mergeFrom(CodedInputStream) AbstractMessage.Builder.mergeFrom(CodedInputStream,ExtensionRegistryLite) AbstractMessage.Builder.mergeFrom(Message) AbstractMessage.Builder.mergeFrom(InputStream) AbstractMessage.Builder.mergeFrom(InputStream,ExtensionRegistryLite) AbstractMessage.Builder.newUninitializedMessageException(Message) AbstractMessage.Builder.toString() AbstractMessageLite.Builder.<T>addAll(Iterable<T>,Collection<? super T>) AbstractMessageLite.Builder.<T>addAll(Iterable<T>,List<? super T>) AbstractMessageLite.Builder.internalMergeFrom(MessageType) AbstractMessageLite.Builder.mergeDelimitedFrom(InputStream) AbstractMessageLite.Builder.mergeDelimitedFrom(InputStream,ExtensionRegistryLite) AbstractMessageLite.Builder.mergeFrom(MessageLite) AbstractMessageLite.Builder.newUninitializedMessageException(MessageLite) GeneratedMessage.Builder.addRepeatedField(Descriptors.FieldDescriptor,Object) GeneratedMessage.Builder.clear() GeneratedMessage.Builder.clearField(Descriptors.FieldDescriptor) GeneratedMessage.Builder.clearOneof(Descriptors.OneofDescriptor) GeneratedMessage.Builder.clone() GeneratedMessage.Builder.getAllFields() GeneratedMessage.Builder.getDescriptorForType() GeneratedMessage.Builder.getField(Descriptors.FieldDescriptor) GeneratedMessage.Builder.getFieldBuilder(Descriptors.FieldDescriptor) GeneratedMessage.Builder.getOneofFieldDescriptor(Descriptors.OneofDescriptor) GeneratedMessage.Builder.getParentForChildren() GeneratedMessage.Builder.getRepeatedField(Descriptors.FieldDescriptor,int) GeneratedMessage.Builder.getRepeatedFieldBuilder(Descriptors.FieldDescriptor,int) GeneratedMessage.Builder.getRepeatedFieldCount(Descriptors.FieldDescriptor) com.google.protobuf.GeneratedMessage.Builder.getUnknownFieldSetBuilder() GeneratedMessage.Builder.getUnknownFields() GeneratedMessage.Builder.hasField(Descriptors.FieldDescriptor) GeneratedMessage.Builder.hasOneof(Descriptors.OneofDescriptor) GeneratedMessage.Builder.internalGetFieldAccessorTable() GeneratedMessage.Builder.internalGetMapField(int) com.google.protobuf.GeneratedMessage.Builder.internalGetMapFieldReflection(int) GeneratedMessage.Builder.internalGetMutableMapField(int) com.google.protobuf.GeneratedMessage.Builder.internalGetMutableMapFieldReflection(int) GeneratedMessage.Builder.isClean() GeneratedMessage.Builder.isInitialized() GeneratedMessage.Builder.markClean() GeneratedMessage.Builder.mergeUnknownFields(UnknownFieldSet) com.google.protobuf.GeneratedMessage.Builder.mergeUnknownLengthDelimitedField(int,com.google.protobuf.ByteString) com.google.protobuf.GeneratedMessage.Builder.mergeUnknownVarintField(int,int) GeneratedMessage.Builder.newBuilderForField(Descriptors.FieldDescriptor) GeneratedMessage.Builder.onBuilt() GeneratedMessage.Builder.onChanged() com.google.protobuf.GeneratedMessage.Builder.parseUnknownField(com.google.protobuf.CodedInputStream,com.google.protobuf.ExtensionRegistryLite,int) GeneratedMessage.Builder.setField(Descriptors.FieldDescriptor,Object) GeneratedMessage.Builder.setRepeatedField(Descriptors.FieldDescriptor,int,Object) com.google.protobuf.GeneratedMessage.Builder.setUnknownFieldSetBuilder(com.google.protobuf.UnknownFieldSet.Builder) GeneratedMessage.Builder.setUnknownFields(UnknownFieldSet) com.google.protobuf.GeneratedMessage.Builder.setUnknownFieldsProto3(com.google.protobuf.UnknownFieldSet) Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.wait() Object.wait(long) Object.wait(long,int) Static Methods getDescriptor() public static final Descriptors .
- 2.88.0 (latest) 2.87.0 2.85.0 2.83.0 2.82.0 2.81.0 2.80.0 2.78.0 2.76.0 2.75.0 2.74.0 2.73.0 2.72.0 2.70.0 2.68.0 2.67.0 2.64.0 2.63.0 2.62.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.7 2.2.1 2.1.12 public static final class ApiConfig .
- For an example test.proto file, the following command would put the value in a new file named out.pb. $ protoc --include imports --include source info test.proto -o out.pb .google.cloud.apigateway.v1.ApiConfig.File file descriptor set = 1 [(.google.api.field behavior) = INPUT ONLY]; Parameter Name Description value ApiConfig.File Returns Type Description ApiConfig.GrpcServiceDefinition.Builder setFileDescriptorSet(ApiConfig.File.Builder builderForValue) public ApiConfig .
- For an example test.proto file, the following command would put the value in a new file named out.pb. $ protoc --include imports --include source info test.proto -o out.pb .google.cloud.apigateway.v1.ApiConfig.File file descriptor set = 1 [(.google.api.field behavior) = INPUT ONLY]; Parameter Name Description builderForValue ApiConfig.File.Builder Returns Type Description ApiConfig.GrpcServiceDefinition.Builder setSource(int index, ApiConfig.File value) public ApiConfig .

### "Interface ApiConfig.GrpcServiceDefinitionOrBuilder (2.88.0) \_|\_ Java client\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-api-gateway/latest/com.google.cloud.apigateway.v1.ApiConfig.GrpcServiceDefinitionOrBuilder](https://docs.cloud.google.com/java/docs/reference/google-cloud-api-gateway/latest/com.google.cloud.apigateway.v1.ApiConfig.GrpcServiceDefinitionOrBuilder)
- Source ID: `site-java-reference`
- Final score: 35
- Re-rank relevance: N/A

Evidence snippets:
- 2.88.0 (latest) 2.87.0 2.85.0 2.83.0 2.82.0 2.81.0 2.80.0 2.78.0 2.76.0 2.75.0 2.74.0 2.73.0 2.72.0 2.70.0 2.68.0 2.67.0 2.64.0 2.63.0 2.62.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.7 2.2.1 2.1.12 public static interface ApiConfig .
- For an example test.proto file, the following command would put the value in a new file named out.pb. $ protoc --include imports --include source info test.proto -o out.pb .google.cloud.apigateway.v1.ApiConfig.File file descriptor set = 1 [(.google.api.field behavior) = INPUT ONLY]; Returns Type Description ApiConfig.File The fileDescriptorSet. getFileDescriptorSetOrBuilder() public abstract ApiConfig .
- For an example test.proto file, the following command would put the value in a new file named out.pb. $ protoc --include imports --include source info test.proto -o out.pb .google.cloud.apigateway.v1.ApiConfig.File file descriptor set = 1 [(.google.api.field behavior) = INPUT ONLY]; Returns Type Description ApiConfig.FileOrBuilder getSource(int index) public abstract ApiConfig .
- These should match the inputs to 'protoc' command used to generate file descriptor set. repeated .google.cloud.apigateway.v1.ApiConfig.File source = 2 [(.google.api.field behavior) = OPTIONAL]; Returns Type Description List < ? extends com.google.cloud.apigateway.v1.ApiConfig.FileOrBuilder > hasFileDescriptorSet() public abstract boolean hasFileDescriptorSet () Input only.

