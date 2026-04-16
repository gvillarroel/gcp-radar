---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:11:52.470Z"
product_name: "API Gateway"
product_slug: "api-gateway"
feature_name: "Removal of deprecated fields in API Gateway Alpha API"
feature_slug: "removal-of-deprecated-fields-in-api-gateway-alpha-api"
latest_feature_date: "2020-09-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/api-gateway/docs/api-hub-view-apis"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-api-gateway/latest/com.google.cloud.apigateway.v1.Api.Builder"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-api-gateway/latest/overview"
keywords:
  - "removal"
  - "removed"
  - "fields"
  - "were"
  - "deprecated"
  - "versions"
  - "alpha"
---

# Removal of deprecated fields in API Gateway Alpha API

Product: API Gateway
Coverage: MEDIUM

## Step 02 Summary

Deprecated fields were removed from alpha versions of the API Gateway API.

## Extended Definition

Deprecated fields were removed from alpha versions of the API Gateway API.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/api-gateway/docs/api-hub-view-apis](https://docs.cloud.google.com/api-gateway/docs/api-hub-view-apis)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-api-gateway/latest/com.google.cloud.apigateway.v1.Api.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-api-gateway/latest/com.google.cloud.apigateway.v1.Api.Builder)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-api-gateway/latest/overview](https://docs.cloud.google.com/java/docs/reference/google-cloud-api-gateway/latest/overview)

## Supporting Pages

### View API Gateway APIs in API hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/api-gateway/docs/api-hub-view-apis](https://docs.cloud.google.com/api-gateway/docs/api-hub-view-apis)
- Source ID: `site-docs-reference-required-2`
- Final score: 52
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following provides an example of the response. { "apis": [ { "name": "projects/myproject/locations/us-west1/apis/4fc95784-16b0-4b6e-8b7f-a08607febf78", "displayName": "test-api-1", "versions": [ "projects/myproject/locations/us-west1/apis/4fc95784-16b0-4b6e-8b7f-a08607febf78/versions/843a7e72-c5d2-4af8-95b0-162fa5d5ea10", "projects/myproject/locations/us-west1/apis/4fc95784-16b0-4b6e-8b7f-a08607febf78/versions/b6af2674-4a0e-410e-990d-d90ccbe6867e" ], "createTime": "2025-12-12T18:55:54.445487Z", "updateTime": "2025-12-12T18:55:54.445487Z", "apiStyle": { "attribute": "projects/myproject/locations/us-west1/attributes/system-api-style", "enumValues": { "values": [ { "id": "rest", "displayName": "REST", "description": "REST", "immutable": true } ] } }, "fingerprint": "test-api-1", "sourceMetadata": [ { "pluginInstanceActionSource": { "pluginInstance": "projects/myproject/locations/us-west1/plugins/system-api-gateway/instances/90b21a65-38b4-4159-8e9d-07a8b6cecab0", "actionId": "sync-metadata" }, "sourceType": "PLUGIN", "originalResourceId": "projects/runtimeproject/locations/global/apis/test-api-1", "originalResourceCreateTime": "2025-12-11T01:57:54.841944920Z", "originalResourceUpdateTime": "0001-01-01T00:00:00Z" } ] } ] } The following table describes the fields that are populated with API metadata from API Gateway in the response.
- API Gateway details ingested include: Path Specification file Method Deprecated flag Last modified timestamp Versions> Specification file Configs> Full resource location Specification file associated with the API configuration.
- Versions> Last modified Configs> Updated Timestamp when the API configuration was last modified.
- The following table describes the API hub fields and maps them to the API Gateway equivalents.

### "Class Api.Builder (2.88.0) \_|\_ Java client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-api-gateway/latest/com.google.cloud.apigateway.v1.Api.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-api-gateway/latest/com.google.cloud.apigateway.v1.Api.Builder)
- Source ID: `site-java-reference`
- Final score: 46
- Re-rank relevance: N/A

Evidence snippets:
- Protobuf type google.cloud.apigateway.v1.Api Inheritance java.lang.Object > AbstractMessageLite.Builder<MessageType,BuilderType> > AbstractMessage.Builder<BuilderType> > GeneratedMessage.Builder > Api.Builder Implements ApiOrBuilder Inherited Members AbstractMessage.Builder.findInitializationErrors() AbstractMessage.Builder.getInitializationErrorString() AbstractMessage.Builder.internalMergeFrom(AbstractMessageLite) AbstractMessage.Builder.mergeFrom(byte[]) AbstractMessage.Builder.mergeFrom(byte[],ExtensionRegistryLite) AbstractMessage.Builder.mergeFrom(byte[],int,int) AbstractMessage.Builder.mergeFrom(byte[],int,int,ExtensionRegistryLite) AbstractMessage.Builder.mergeFrom(ByteString) AbstractMessage.Builder.mergeFrom(ByteString,ExtensionRegistryLite) AbstractMessage.Builder.mergeFrom(CodedInputStream) AbstractMessage.Builder.mergeFrom(CodedInputStream,ExtensionRegistryLite) AbstractMessage.Builder.mergeFrom(Message) AbstractMessage.Builder.mergeFrom(InputStream) AbstractMessage.Builder.mergeFrom(InputStream,ExtensionRegistryLite) AbstractMessage.Builder.newUninitializedMessageException(Message) AbstractMessage.Builder.toString() AbstractMessageLite.Builder.<T>addAll(Iterable<T>,Collection<? super T>) AbstractMessageLite.Builder.<T>addAll(Iterable<T>,List<? super T>) AbstractMessageLite.Builder.internalMergeFrom(MessageType) AbstractMessageLite.Builder.mergeDelimitedFrom(InputStream) AbstractMessageLite.Builder.mergeDelimitedFrom(InputStream,ExtensionRegistryLite) AbstractMessageLite.Builder.mergeFrom(MessageLite) AbstractMessageLite.Builder.newUninitializedMessageException(MessageLite) GeneratedMessage.Builder.addRepeatedField(Descriptors.FieldDescriptor,Object) GeneratedMessage.Builder.clear() GeneratedMessage.Builder.clearField(Descriptors.FieldDescriptor) GeneratedMessage.Builder.clearOneof(Descriptors.OneofDescriptor) GeneratedMessage.Builder.clone() GeneratedMessage.Builder.getAllFields() GeneratedMessage.Builder.getDescriptorForType() GeneratedMessage.Builder.getField(Descriptors.FieldDescriptor) GeneratedMessage.Builder.getFieldBuilder(Descriptors.FieldDescriptor) GeneratedMessage.Builder.getOneofFieldDescriptor(Descriptors.OneofDescriptor) GeneratedMessage.Builder.getParentForChildren() GeneratedMessage.Builder.getRepeatedField(Descriptors.FieldDescriptor,int) GeneratedMessage.Builder.getRepeatedFieldBuilder(Descriptors.FieldDescriptor,int) GeneratedMessage.Builder.getRepeatedFieldCount(Descriptors.FieldDescriptor) com.google.protobuf.GeneratedMessage.Builder.getUnknownFieldSetBuilder() GeneratedMessage.Builder.getUnknownFields() GeneratedMessage.Builder.hasField(Descriptors.FieldDescriptor) GeneratedMessage.Builder.hasOneof(Descriptors.OneofDescriptor) GeneratedMessage.Builder.internalGetFieldAccessorTable() GeneratedMessage.Builder.internalGetMapField(int) com.google.protobuf.GeneratedMessage.Builder.internalGetMapFieldReflection(int) GeneratedMessage.Builder.internalGetMutableMapField(int) com.google.protobuf.GeneratedMessage.Builder.internalGetMutableMapFieldReflection(int) GeneratedMessage.Builder.isClean() GeneratedMessage.Builder.isInitialized() GeneratedMessage.Builder.markClean() GeneratedMessage.Builder.mergeUnknownFields(UnknownFieldSet) com.google.protobuf.GeneratedMessage.Builder.mergeUnknownLengthDelimitedField(int,com.google.protobuf.ByteString) com.google.protobuf.GeneratedMessage.Builder.mergeUnknownVarintField(int,int) GeneratedMessage.Builder.newBuilderForField(Descriptors.FieldDescriptor) GeneratedMessage.Builder.onBuilt() GeneratedMessage.Builder.onChanged() com.google.protobuf.GeneratedMessage.Builder.parseUnknownField(com.google.protobuf.CodedInputStream,com.google.protobuf.ExtensionRegistryLite,int) GeneratedMessage.Builder.setField(Descriptors.FieldDescriptor,Object) GeneratedMessage.Builder.setRepeatedField(Descriptors.FieldDescriptor,int,Object) com.google.protobuf.GeneratedMessage.Builder.setUnknownFieldSetBuilder(com.google.protobuf.UnknownFieldSet.Builder) GeneratedMessage.Builder.setUnknownFields(UnknownFieldSet) com.google.protobuf.GeneratedMessage.Builder.setUnknownFieldsProto3(com.google.protobuf.UnknownFieldSet) Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.wait() Object.wait(long) Object.wait(long,int) Static Methods getDescriptor() public static final Descriptors .
- If not specified, a new Service will automatically be created in the same project as this API. string managed service = 7 [(.google.api.field behavior) = IMMUTABLE, (.google.api.field behavior) = OPTIONAL, (.google.api.resource reference) = { ... } Returns Type Description ByteString The bytes for managedService. getMutableLabels() (deprecated) public Map<String , String > getMutableLabels () Use alternate mutation accessors instead.
- Display name. string display name = 5 [(.google.api.field behavior) = OPTIONAL]; Returns Type Description ByteString The bytes for displayName. getLabels() (deprecated) public Map<String , String > getLabels () Use #getLabelsMap() instead.

### "google-cloud-api-gateway overview (2.88.0) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-api-gateway/latest/overview](https://docs.cloud.google.com/java/docs/reference/google-cloud-api-gateway/latest/overview)
- Source ID: `site-java-reference`
- Final score: 45
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- API Gateway Product Reference GitHub Repository Maven artifact Getting Started In order to use this library, you first need to go through the following steps: Install a JDK (Java Development Kit) Select or create a Cloud Platform project Enable billing for your project Enable the API Set up authentication Use the API Gateway for Java To ensure that your project uses compatible versions of the libraries and their component artifacts, import com.google.cloud:libraries-bom and use the BOM to specify dependency versions.
- The example below demonstrates how you would import the BOM and include the google-cloud-api-gateway artifact. implementation ( platform ( "com.google.cloud:libraries-bom:26.79.0" )) implementation ( "com.google.cloud:google-cloud-api-gateway" ) The platform and enforcedPlatform keywords supply dependency versions declared in a BOM.
- Understanding Version ID and Library Versions When using a Cloud client library, it's important to distinguish between two types of versions: Library Version : The version of the software package (the client library) that helps you interact with the Cloud service.
- Managing Library Versions We recommend using the com.google.cloud:libraries-bom installation method detailed above to streamline dependency management across multiple Cloud Java client libraries.

