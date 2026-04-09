---
title: "Class ApiConfig.Builder (2.88.0) \_|\_ Java client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-api-gateway/latest/com.google.cloud.apigateway.v1.ApiConfig.Builder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-api-gateway/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-api-gateway/latest/com.google.cloud.apigateway.v1.ApiConfig.Builder
  title: "Class ApiConfig.Builder (2.88.0) \_|\_ Java client libraries \_|\_ Google\
    \ Cloud Documentation"
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
Class ApiConfig.Builder (2.88.0)
Stay organized with collections
Save and categorize content based on your preferences.
2.88.0 (latest)
2.87.0
2.85.0
2.83.0
2.82.0
2.81.0
2.80.0
2.78.0
2.76.0
2.75.0
2.74.0
2.73.0
2.72.0
2.70.0
2.68.0
2.67.0
2.64.0
2.63.0
2.62.0
2.60.0
2.59.0
2.58.0
2.57.0
2.56.0
2.55.0
2.54.0
2.53.0
2.52.0
2.51.0
2.49.0
2.48.0
2.47.0
2.46.0
2.45.0
2.44.0
2.43.0
2.42.0
2.41.0
2.40.0
2.39.0
2.37.0
2.36.0
2.35.0
2.34.0
2.33.0
2.32.0
2.31.0
2.30.0
2.29.0
2.28.0
2.27.0
2.24.0
2.23.0
2.22.0
2.21.0
2.20.0
2.19.0
2.18.0
2.17.0
2.16.0
2.15.0
2.14.0
2.13.0
2.12.0
2.11.0
2.10.0
2.9.0
2.8.0
2.7.0
2.6.0
2.5.0
2.4.0
2.3.7
2.2.1
2.1.12
public static final class ApiConfig . Builder extends GeneratedMessage . Builder<ApiConfig . Builder > implements ApiConfigOrBuilder
An API Configuration is a combination of settings for both the Managed
Service and Gateways serving this API Config.
Protobuf type google.cloud.apigateway.v1.ApiConfig
Inheritance
java.lang.Object >
AbstractMessageLite.Builder<MessageType,BuilderType> >
AbstractMessage.Builder<BuilderType> >
GeneratedMessage.Builder >
ApiConfig.Builder
Implements
ApiConfigOrBuilder
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
addAllGrpcServices(Iterable<? extends ApiConfig.GrpcServiceDefinition> values)
public ApiConfig . Builder addAllGrpcServices ( Iterable < ? extends ApiConfig . GrpcServiceDefinition > values )
Optional. gRPC service definition files. If specified, openapi_documents must
not be included.
repeated .google.cloud.apigateway.v1.ApiConfig.GrpcServiceDefinition grpc_services = 10 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
values
Iterable < ? extends com.google.cloud.apigateway.v1.ApiConfig.GrpcServiceDefinition >
Returns
Type
Description
ApiConfig.Builder
addAllManagedServiceConfigs(Iterable<? extends ApiConfig.File> values)
public ApiConfig . Builder addAllManagedServiceConfigs ( Iterable < ? extends ApiConfig . File > values )
Optional. Service Configuration files. At least one must be included when using gRPC
service definitions. See
https://cloud.google.com/endpoints/docs/grpc/grpc-service-config#service_configuration_overview
for the expected file contents.
If multiple files are specified, the files are merged with the following
rules:
All singular scalar fields are merged using "last one wins" semantics in
the order of the files uploaded.
Repeated fields are concatenated.
Singular embedded messages are merged using these rules for nested
fields.
repeated .google.cloud.apigateway.v1.ApiConfig.File managed_service_configs = 11 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
values
Iterable < ? extends com.google.cloud.apigateway.v1.ApiConfig.File >
Returns
Type
Description
ApiConfig.Builder
addAllOpenapiDocuments(Iterable<? extends ApiConfig.OpenApiDocument> values)
public ApiConfig . Builder addAllOpenapiDocuments ( Iterable < ? extends ApiConfig . OpenApiDocument > values )
Optional. OpenAPI specification documents. If specified, grpc_services and
managed_service_configs must not be included.
repeated .google.cloud.apigateway.v1.ApiConfig.OpenApiDocument openapi_documents = 9 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
values
Iterable < ? extends com.google.cloud.apigateway.v1.ApiConfig.OpenApiDocument >
Returns
Type
Description
ApiConfig.Builder
addGrpcServices(ApiConfig.GrpcServiceDefinition value)
public ApiConfig . Builder addGrpcServices ( ApiConfig . GrpcServiceDefinition value )
Optional. gRPC service definition files. If specified, openapi_documents must
not be included.
repeated .google.cloud.apigateway.v1.ApiConfig.GrpcServiceDefinition grpc_services = 10 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
value
ApiConfig.GrpcServiceDefinition
Returns
Type
Description
ApiConfig.Builder
addGrpcServices(ApiConfig.GrpcServiceDefinition.Builder builderForValue)
public ApiConfig . Builder addGrpcServices ( ApiConfig . GrpcServiceDefinition . Builder builderForValue )
Optional. gRPC service definition files. If specified, openapi_documents must
not be included.
repeated .google.cloud.apigateway.v1.ApiConfig.GrpcServiceDefinition grpc_services = 10 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
builderForValue
ApiConfig.GrpcServiceDefinition.Builder
Returns
Type
Description
ApiConfig.Builder
addGrpcServices(int index, ApiConfig.GrpcServiceDefinition value)
public ApiConfig . Builder addGrpcServices ( int index , ApiConfig . GrpcServiceDefinition value )
Optional. gRPC service definition files. If specified, openapi_documents must
not be included.
repeated .google.cloud.apigateway.v1.ApiConfig.GrpcServiceDefinition grpc_services = 10 [(.google.api.field_behavior) = OPTIONAL];
Parameters
Name
Description
index
int
value
ApiConfig.GrpcServiceDefinition
Returns
Type
Description
ApiConfig.Builder
addGrpcServices(int index, ApiConfig.GrpcServiceDefinition.Builder builderForValue)
public ApiConfig . Builder addGrpcServices ( int index , ApiConfig . GrpcServiceDefinition . Builder builderForValue )
Optional. gRPC service definition files. If specified, openapi_documents must
not be included.
repeated .google.cloud.apigateway.v1.ApiConfig.GrpcServiceDefinition grpc_services = 10 [(.google.api.field_behavior) = OPTIONAL];
Parameters
Name
Description
index
int
builderForValue
ApiConfig.GrpcServiceDefinition.Builder
Returns
Type
Description
ApiConfig.Builder
addGrpcServicesBuilder()
public ApiConfig . GrpcServiceDefinition . Builder addGrpcServicesBuilder ()
Optional. gRPC service definition files. If specified, openapi_documents must
not be included.
repeated .google.cloud.apigateway.v1.ApiConfig.GrpcServiceDefinition grpc_services = 10 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
ApiConfig.GrpcServiceDefinition.Builder
addGrpcServicesBuilder(int index)
public ApiConfig . GrpcServiceDefinition . Builder addGrpcServicesBuilder ( int index )
Optional. gRPC service definition files. If specified, openapi_documents must
not be included.
repeated .google.cloud.apigateway.v1.ApiConfig.GrpcServiceDefinition grpc_services = 10 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
index
int
Returns
Type
Description
ApiConfig.GrpcServiceDefinition.Builder
addManagedServiceConfigs(ApiConfig.File value)
public ApiConfig . Builder addManagedServiceConfigs ( ApiConfig . File value )
Optional. Service Configuration files. At least one must be included when using gRPC
service definitions. See
https://cloud.google.com/endpoints/docs/grpc/grpc-service-config#service_configuration_overview
for the expected file contents.
If multiple files are specified, the files are merged with the following
rules:
All singular scalar fields are merged using "last one wins" semantics in
the order of the files uploaded.
Repeated fields are concatenated.
Singular embedded messages are merged using these rules for nested
fields.
repeated .google.cloud.apigateway.v1.ApiConfig.File managed_service_configs = 11 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
value
ApiConfig.File
Returns
Type
Description
ApiConfig.Builder
addManagedServiceConfigs(ApiConfig.File.Builder builderForValue)
public ApiConfig . Builder addManagedServiceConfigs ( ApiConfig . File . Builder builderForValue )
Optional. Service Configuration files. At least one must be included when using gRPC
service definitions. See
https://cloud.google.com/endpoints/docs/grpc/grpc-service-config#service_configuration_overview
for the expected file contents.
If multiple files are specified, the files are merged with the following
rules:
All singular scalar fields are merged using "last one wins" semantics in
the order of the files uploaded.
Repeated fields are concatenated.
Singular embedded messages are merged using these rules for nested
fields.
repeated .google.cloud.apigateway.v1.ApiConfig.File managed_service_configs = 11 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
builderForValue
ApiConfig.File.Builder
Returns
Type
Description
ApiConfig.Builder
addManagedServiceConfigs(int index, ApiConfig.File value)
public ApiConfig . Builder addManagedServiceConfigs ( int index , ApiConfig . File value )
Optional. Service Configuration files. At least one must be included when using gRPC
service definitions. See
https://cloud.google.com/endpoints/docs/grpc/grpc-service-config#service_configuration_overview
for the expected file contents.
If multiple files are specified, the files are merged with the following
rules:
All singular scalar fields are merged using "last one wins" semantics in
the order of the files uploaded.
Repeated fields are concatenated.
Singular embedded messages are merged using these rules for nested
fields.
repeated .google.cloud.apigateway.v1.ApiConfig.File managed_service_configs = 11 [(.google.api.field_behavior) = OPTIONAL];
Parameters
Name
Description
index
int
value
ApiConfig.File
Returns
Type
Description
ApiConfig.Builder
addManagedServiceConfigs(int index, ApiConfig.File.Builder builderForValue)
public ApiConfig . Builder addManagedServiceConfigs ( int index , ApiConfig . File . Builder builderForValue )
Optional. Service Configuration files. At least one must be included when using gRPC
service definitions. See
https://cloud.google.com/endpoints/docs/grpc/grpc-service-config#service_configuration_overview
for the expected file contents.
If multiple files are specified, the files are merged with the following
rules:
All singular scalar fields are merged using "last one wins" semantics in
the order of the files uploaded.
Repeated fields are concatenated.
Singular embedded messages are merged using these rules for nested
fields.
repeated .google.cloud.apigateway.v1.ApiConfig.File managed_service_configs = 11 [(.google.api.field_behavior) = OPTIONAL];
Parameters
Name
Description
index
int
builderForValue
ApiConfig.File.Builder
Returns
Type
Description
ApiConfig.Builder
addManagedServiceConfigsBuilder()
public ApiConfig . File . Builder addManagedServiceConfigsBuilder ()
Optional. Service Configuration files. At least one must be included when using gRPC
service definitions. See
https://cloud.google.com/endpoints/docs/grpc/grpc-service-config#service_configuration_overview
for the expected file contents.
If multiple files are specified, the files are merged with the following
rules:
All singular scalar fields are merged using "last one wins" semantics in
the order of the files uploaded.
Repeated fields are concatenated.
Singular embedded messages are merged using these rules for nested
fields.
repeated .google.cloud.apigateway.v1.ApiConfig.File managed_service_configs = 11 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
ApiConfig.File.Builder
addManagedServiceConfigsBuilder(int index)
public ApiConfig . File . Builder addManagedServiceConfigsBuilder ( int index )
Optional. Service Configuration files. At least one must be included when using gRPC
service definitions. See
https://cloud.google.com/endpoints/docs/grpc/grpc-service-config#service_configuration_overview
for the expected file contents.
If multiple files are specified, the files are merged with the following
rules:
All singular scalar fields are merged using "last one wins" semantics in
the order of the files uploaded.
Repeated fields are concatenated.
Singular embedded messages are merged using these rules for nested
fields.
repeated .google.cloud.apigateway.v1.ApiConfig.File managed_service_configs = 11 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
index
int
Returns
Type
Description
ApiConfig.File.Builder
addOpenapiDocuments(ApiConfig.OpenApiDocument value)
public ApiConfig . Builder addOpenapiDocuments ( ApiConfig . OpenApiDocument value )
Optional. OpenAPI specification documents. If specified, grpc_services and
managed_service_configs must not be included.
repeated .google.cloud.apigateway.v1.ApiConfig.OpenApiDocument openapi_documents = 9 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
value
ApiConfig.OpenApiDocument
Returns
Type
Description
ApiConfig.Builder
addOpenapiDocuments(ApiConfig.OpenApiDocument.Builder builderForValue)
public ApiConfig . Builder addOpenapiDocuments ( ApiConfig . OpenApiDocument . Builder builderForValue )
Optional. OpenAPI specification documents. If specified, grpc_services and
managed_service_configs must not be included.
repeated .google.cloud.apigateway.v1.ApiConfig.OpenApiDocument openapi_documents = 9 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
builderForValue
ApiConfig.OpenApiDocument.Builder
Returns
Type
Description
ApiConfig.Builder
addOpenapiDocuments(int index, ApiConfig.OpenApiDocument value)
public ApiConfig . Builder addOpenapiDocuments ( int index , ApiConfig . OpenApiDocument value )
Optional. OpenAPI specification documents. If specified, grpc_services and
managed_service_configs must not be included.
repeated .google.cloud.apigateway.v1.ApiConfig.OpenApiDocument openapi_documents = 9 [(.google.api.field_behavior) = OPTIONAL];
Parameters
Name
Description
index
int
value
ApiConfig.OpenApiDocument
Returns
Type
Description
ApiConfig.Builder
addOpenapiDocuments(int index, ApiConfig.OpenApiDocument.Builder builderForValue)
public ApiConfig . Builder addOpenapiDocuments ( int index , ApiConfig . OpenApiDocument . Builder builderForValue )
Optional. OpenAPI specification documents. If specified, grpc_services and
managed_service_configs must not be included.
repeated .google.cloud.apigateway.v1.ApiConfig.OpenApiDocument openapi_documents = 9 [(.google.api.field_behavior) = OPTIONAL];
Parameters
Name
Description
index
int
builderForValue
ApiConfig.OpenApiDocument.Builder
Returns
Type
Description
ApiConfig.Builder
addOpenapiDocumentsBuilder()
public ApiConfig . OpenApiDocument . Builder addOpenapiDocumentsBuilder ()
Optional. OpenAPI specification documents. If specified, grpc_services and
managed_service_configs must not be included.
repeated .google.cloud.apigateway.v1.ApiConfig.OpenApiDocument openapi_documents = 9 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
ApiConfig.OpenApiDocument.Builder
addOpenapiDocumentsBuilder(int index)
public ApiConfig . OpenApiDocument . Builder addOpenapiDocumentsBuilder ( int index )
Optional. OpenAPI specification documents. If specified, grpc_services and
managed_service_configs must not be included.
repeated .google.cloud.apigateway.v1.ApiConfig.OpenApiDocument openapi_documents = 9 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
index
int
Returns
Type
Description
ApiConfig.OpenApiDocument.Builder
build()
public ApiConfig build ()
Returns
Type
Description
ApiConfig
buildPartial()
public ApiConfig buildPartial ()
Returns
Type
Description
ApiConfig
clear()
public ApiConfig . Builder clear ()
Returns
Type
Description
ApiConfig.Builder
Overrides
GeneratedMessage.Builder<BuilderType>.clear()
clearCreateTime()
public ApiConfig . Builder clearCreateTime ()
Output only. Created time.
.google.protobuf.Timestamp create_time = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
ApiConfig.Builder
clearDisplayName()
public ApiConfig . Builder clearDisplayName ()
Optional. Display name.
string display_name = 5 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
ApiConfig.Builder
This builder for chaining.
clearGatewayServiceAccount()
public ApiConfig . Builder clearGatewayServiceAccount ()
Immutable. The Google Cloud IAM Service Account that Gateways serving this config
should use to authenticate to other services. This may either be the
Service Account's email
( {ACCOUNT_ID}@{PROJECT}.iam.gserviceaccount.com ) or its full resource
name ( projects/{PROJECT}/accounts/{UNIQUE_ID} ). This is most often used
when the service is a GCP resource such as a Cloud Run Service or an
IAP-secured service.
string gateway_service_account = 14 [(.google.api.field_behavior) = IMMUTABLE, (.google.api.resource_reference) = { ... }
Returns
Type
Description
ApiConfig.Builder
This builder for chaining.
clearGrpcServices()
public ApiConfig . Builder clearGrpcServices ()
Optional. gRPC service definition files. If specified, openapi_documents must
not be included.
repeated .google.cloud.apigateway.v1.ApiConfig.GrpcServiceDefinition grpc_services = 10 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
ApiConfig.Builder
clearLabels()
public ApiConfig . Builder clearLabels ()
Returns
Type
Description
ApiConfig.Builder
clearManagedServiceConfigs()
public ApiConfig . Builder clearManagedServiceConfigs ()
Optional. Service Configuration files. At least one must be included when using gRPC
service definitions. See
https://cloud.google.com/endpoints/docs/grpc/grpc-service-config#service_configuration_overview
for the expected file contents.
If multiple files are specified, the files are merged with the following
rules:
All singular scalar fields are merged using "last one wins" semantics in
the order of the files uploaded.
Repeated fields are concatenated.
Singular embedded messages are merged using these rules for nested
fields.
repeated .google.cloud.apigateway.v1.ApiConfig.File managed_service_configs = 11 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
ApiConfig.Builder
clearName()
public ApiConfig . Builder clearName ()
Output only. Resource name of the API Config.
Format: projects/{project}/locations/global/apis/{api}/configs/{api_config}
string name = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
ApiConfig.Builder
This builder for chaining.
clearOpenapiDocuments()
public ApiConfig . Builder clearOpenapiDocuments ()
Optional. OpenAPI specification documents. If specified, grpc_services and
managed_service_configs must not be included.
repeated .google.cloud.apigateway.v1.ApiConfig.OpenApiDocument openapi_documents = 9 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
ApiConfig.Builder
clearServiceConfigId()
public ApiConfig . Builder clearServiceConfigId ()
Output only. The ID of the associated Service Config (
https://cloud.google.com/service-infrastructure/docs/glossary#config ).
string service_config_id = 12 [(.google.api.field_behavior) = OUTPUT_ONLY, (.google.api.resource_reference) = { ... }
Returns
Type
Description
ApiConfig.Builder
This builder for chaining.
clearState()
public ApiConfig . Builder clearState ()
Output only. State of the API Config.
.google.cloud.apigateway.v1.ApiConfig.State state = 8 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
ApiConfig.Builder
This builder for chaining.
clearUpdateTime()
public ApiConfig . Builder clearUpdateTime ()
Output only. Updated time.
.google.protobuf.Timestamp update_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
ApiConfig.Builder
containsLabels(String key)
public boolean containsLabels ( String key )
Optional. Resource labels to represent user-provided metadata.
Refer to cloud documentation on labels for more details.
https://cloud.google.com/compute/docs/labeling-resources
map<string, string> labels = 4 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
key
String
Returns
Type
Description
boolean
getCreateTime()
public Timestamp getCreateTime ()
Output only. Created time.
.google.protobuf.Timestamp create_time = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
Timestamp
The createTime.
getCreateTimeBuilder()
public Timestamp . Builder getCreateTimeBuilder ()
Output only. Created time.
.google.protobuf.Timestamp create_time = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
Builder
getCreateTimeOrBuilder()
public TimestampOrBuilder getCreateTimeOrBuilder ()
Output only. Created time.
.google.protobuf.Timestamp create_time = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
TimestampOrBuilder
getDefaultInstanceForType()
public ApiConfig getDefaultInstanceForType ()
Returns
Type
Description
ApiConfig
getDescriptorForType()
public Descriptors . Descriptor getDescriptorForType ()
Returns
Type
Description
Descriptor
Overrides
GeneratedMessage.Builder<BuilderType>.getDescriptorForType()
getDisplayName()
public String getDisplayName ()
Optional. Display name.
string display_name = 5 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
String
The displayName.
getDisplayNameBytes()
public ByteString getDisplayNameBytes ()
Optional. Display name.
string display_name = 5 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
ByteString
The bytes for displayName.
getGatewayServiceAccount()
public String getGatewayServiceAccount ()
Immutable. The Google Cloud IAM Service Account that Gateways serving this config
should use to authenticate to other services. This may either be the
Service Account's email
( {ACCOUNT_ID}@{PROJECT}.iam.gserviceaccount.com ) or its full resource
name ( projects/{PROJECT}/accounts/{UNIQUE_ID} ). This is most often used
when the service is a GCP resource such as a Cloud Run Service or an
IAP-secured service.
string gateway_service_account = 14 [(.google.api.field_behavior) = IMMUTABLE, (.google.api.resource_reference) = { ... }
Returns
Type
Description
String
The gatewayServiceAccount.
getGatewayServiceAccountBytes()
public ByteString getGatewayServiceAccountBytes ()
Immutable. The Google Cloud IAM Service Account that Gateways serving this config
should use to authenticate to other services. This may either be the
Service Account's email
( {ACCOUNT_ID}@{PROJECT}.iam.gserviceaccount.com ) or its full resource
name ( projects/{PROJECT}/accounts/{UNIQUE_ID} ). This is most often used
when the service is a GCP resource such as a Cloud Run Service or an
IAP-secured service.
string gateway_service_account = 14 [(.google.api.field_behavior) = IMMUTABLE, (.google.api.resource_reference) = { ... }
Returns
Type
Description
ByteString
The bytes for gatewayServiceAccount.
getGrpcServices(int index)
public ApiConfig . GrpcServiceDefinition getGrpcServices ( int index )
Optional. gRPC service definition files. If specified, openapi_documents must
not be included.
repeated .google.cloud.apigateway.v1.ApiConfig.GrpcServiceDefinition grpc_services = 10 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
index
int
Returns
Type
Description
ApiConfig.GrpcServiceDefinition
getGrpcServicesBuilder(int index)
public ApiConfig . GrpcServiceDefinition . Builder getGrpcServicesBuilder ( int index )
Optional. gRPC service definition files. If specified, openapi_documents must
not be included.
repeated .google.cloud.apigateway.v1.ApiConfig.GrpcServiceDefinition grpc_services = 10 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
index
int
Returns
Type
Description
ApiConfig.GrpcServiceDefinition.Builder
getGrpcServicesBuilderList()
public List<ApiConfig . GrpcServiceDefinition . Builder > getGrpcServicesBuilderList ()
Optional. gRPC service definition files. If specified, openapi_documents must
not be included.
repeated .google.cloud.apigateway.v1.ApiConfig.GrpcServiceDefinition grpc_services = 10 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
List < Builder >
getGrpcServicesCount()
public int getGrpcServicesCount ()
Optional. gRPC service definition files. If specified, openapi_documents must
not be included.
repeated .google.cloud.apigateway.v1.ApiConfig.GrpcServiceDefinition grpc_services = 10 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
int
getGrpcServicesList()
public List<ApiConfig . GrpcServiceDefinition > getGrpcServicesList ()
Optional. gRPC service definition files. If specified, openapi_documents must
not be included.
repeated .google.cloud.apigateway.v1.ApiConfig.GrpcServiceDefinition grpc_services = 10 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
List < GrpcServiceDefinition >
getGrpcServicesOrBuilder(int index)
public ApiConfig . GrpcServiceDefinitionOrBuilder getGrpcServicesOrBuilder ( int index )
Optional. gRPC service definition files. If specified, openapi_documents must
not be included.
repeated .google.cloud.apigateway.v1.ApiConfig.GrpcServiceDefinition grpc_services = 10 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
index
int
Returns
Type
Description
ApiConfig.GrpcServiceDefinitionOrBuilder
getGrpcServicesOrBuilderList()
public List < ? extends ApiConfig . GrpcServiceDefinitionOrBuilder > getGrpcServicesOrBuilderList ()
Optional. gRPC service definition files. If specified, openapi_documents must
not be included.
repeated .google.cloud.apigateway.v1.ApiConfig.GrpcServiceDefinition grpc_services = 10 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
List < ? extends com.google.cloud.apigateway.v1.ApiConfig.GrpcServiceDefinitionOrBuilder >
getLabels() (deprecated)
public Map<String , String > getLabels ()
Use #getLabelsMap() instead.
Returns
Type
Description
Map < String , String >
getLabelsCount()
public int getLabelsCount ()
Optional. Resource labels to represent user-provided metadata.
Refer to cloud documentation on labels for more details.
https://cloud.google.com/compute/docs/labeling-resources
map<string, string> labels = 4 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
int
getLabelsMap()
public Map<String , String > getLabelsMap ()
Optional. Resource labels to represent user-provided metadata.
Refer to cloud documentation on labels for more details.
https://cloud.google.com/compute/docs/labeling-resources
map<string, string> labels = 4 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
Map < String , String >
getLabelsOrDefault(String key, String defaultValue)
public String getLabelsOrDefault ( String key , String defaultValue )
Optional. Resource labels to represent user-provided metadata.
Refer to cloud documentation on labels for more details.
https://cloud.google.com/compute/docs/labeling-resources
map<string, string> labels = 4 [(.google.api.field_behavior) = OPTIONAL];
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
Optional. Resource labels to represent user-provided metadata.
Refer to cloud documentation on labels for more details.
https://cloud.google.com/compute/docs/labeling-resources
map<string, string> labels = 4 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
key
String
Returns
Type
Description
String
getManagedServiceConfigs(int index)
public ApiConfig . File getManagedServiceConfigs ( int index )
Optional. Service Configuration files. At least one must be included when using gRPC
service definitions. See
https://cloud.google.com/endpoints/docs/grpc/grpc-service-config#service_configuration_overview
for the expected file contents.
If multiple files are specified, the files are merged with the following
rules:
All singular scalar fields are merged using "last one wins" semantics in
the order of the files uploaded.
Repeated fields are concatenated.
Singular embedded messages are merged using these rules for nested
fields.
repeated .google.cloud.apigateway.v1.ApiConfig.File managed_service_configs = 11 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
index
int
Returns
Type
Description
ApiConfig.File
getManagedServiceConfigsBuilder(int index)
public ApiConfig . File . Builder getManagedServiceConfigsBuilder ( int index )
Optional. Service Configuration files. At least one must be included when using gRPC
service definitions. See
https://cloud.google.com/endpoints/docs/grpc/grpc-service-config#service_configuration_overview
for the expected file contents.
If multiple files are specified, the files are merged with the following
rules:
All singular scalar fields are merged using "last one wins" semantics in
the order of the files uploaded.
Repeated fields are concatenated.
Singular embedded messages are merged using these rules for nested
fields.
repeated .google.cloud.apigateway.v1.ApiConfig.File managed_service_configs = 11 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
index
int
Returns
Type
Description
ApiConfig.File.Builder
getManagedServiceConfigsBuilderList()
public List<ApiConfig . File . Builder > getManagedServiceConfigsBuilderList ()
Optional. Service Configuration files. At least one must be included when using gRPC
service definitions. See
https://cloud.google.com/endpoints/docs/grpc/grpc-service-config#service_configuration_overview
for the expected file contents.
If multiple files are specified, the files are merged with the following
rules:
All singular scalar fields are merged using "last one wins" semantics in
the order of the files uploaded.
Repeated fields are concatenated.
Singular embedded messages are merged using these rules for nested
fields.
repeated .google.cloud.apigateway.v1.ApiConfig.File managed_service_configs = 11 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
List < Builder >
getManagedServiceConfigsCount()
public int getManagedServiceConfigsCount ()
Optional. Service Configuration files. At least one must be included when using gRPC
service definitions. See
https://cloud.google.com/endpoints/docs/grpc/grpc-service-config#service_configuration_overview
for the expected file contents.
If multiple files are specified, the files are merged with the following
rules:
All singular scalar fields are merged using "last one wins" semantics in
the order of the files uploaded.
Repeated fields are concatenated.
Singular embedded messages are merged using these rules for nested
fields.
repeated .google.cloud.apigateway.v1.ApiConfig.File managed_service_configs = 11 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
int
getManagedServiceConfigsList()
public List<ApiConfig . File > getManagedServiceConfigsList ()
Optional. Service Configuration files. At least one must be included when using gRPC
service definitions. See
https://cloud.google.com/endpoints/docs/grpc/grpc-service-config#service_configuration_overview
for the expected file contents.
If multiple files are specified, the files are merged with the following
rules:
All singular scalar fields are merged using "last one wins" semantics in
the order of the files uploaded.
Repeated fields are concatenated.
Singular embedded messages are merged using these rules for nested
fields.
repeated .google.cloud.apigateway.v1.ApiConfig.File managed_service_configs = 11 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
List < File >
getManagedServiceConfigsOrBuilder(int index)
public ApiConfig . FileOrBuilder getManagedServiceConfigsOrBuilder ( int index )
Optional. Service Configuration files. At least one must be included when using gRPC
service definitions. See
https://cloud.google.com/endpoints/docs/grpc/grpc-service-config#service_configuration_overview
for the expected file contents.
If multiple files are specified, the files are merged with the following
rules:
All singular scalar fields are merged using "last one wins" semantics in
the order of the files uploaded.
Repeated fields are concatenated.
Singular embedded messages are merged using these rules for nested
fields.
repeated .google.cloud.apigateway.v1.ApiConfig.File managed_service_configs = 11 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
index
int
Returns
Type
Description
ApiConfig.FileOrBuilder
getManagedServiceConfigsOrBuilderList()
public List < ? extends ApiConfig . FileOrBuilder > getManagedServiceConfigsOrBuilderList ()
Optional. Service Configuration files. At least one must be included when using gRPC
service definitions. See
https://cloud.google.com/endpoints/docs/grpc/grpc-service-config#service_configuration_overview
for the expected file contents.
If multiple files are specified, the files are merged with the following
rules:
All singular scalar fields are merged using "last one wins" semantics in
the order of the files uploaded.
Repeated fields are concatenated.
Singular embedded messages are merged using these rules for nested
fields.
repeated .google.cloud.apigateway.v1.ApiConfig.File managed_service_configs = 11 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
List < ? extends com.google.cloud.apigateway.v1.ApiConfig.FileOrBuilder >
getMutableLabels() (deprecated)
public Map<String , String > getMutableLabels ()
Use alternate mutation accessors instead.
Returns
Type
Description
Map < String , String >
getName()
public String getName ()
Output only. Resource name of the API Config.
Format: projects/{project}/locations/global/apis/{api}/configs/{api_config}
string name = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
String
The name.
getNameBytes()
public ByteString getNameBytes ()
Output only. Resource name of the API Config.
Format: projects/{project}/locations/global/apis/{api}/configs/{api_config}
string name = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
ByteString
The bytes for name.
getOpenapiDocuments(int index)
public ApiConfig . OpenApiDocument getOpenapiDocuments ( int index )
Optional. OpenAPI specification documents. If specified, grpc_services and
managed_service_configs must not be included.
repeated .google.cloud.apigateway.v1.ApiConfig.OpenApiDocument openapi_documents = 9 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
index
int
Returns
Type
Description
ApiConfig.OpenApiDocument
getOpenapiDocumentsBuilder(int index)
public ApiConfig . OpenApiDocument . Builder getOpenapiDocumentsBuilder ( int index )
Optional. OpenAPI specification documents. If specified, grpc_services and
managed_service_configs must not be included.
repeated .google.cloud.apigateway.v1.ApiConfig.OpenApiDocument openapi_documents = 9 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
index
int
Returns
Type
Description
ApiConfig.OpenApiDocument.Builder
getOpenapiDocumentsBuilderList()
public List<ApiConfig . OpenApiDocument . Builder > getOpenapiDocumentsBuilderList ()
Optional. OpenAPI specification documents. If specified, grpc_services and
managed_service_configs must not be included.
repeated .google.cloud.apigateway.v1.ApiConfig.OpenApiDocument openapi_documents = 9 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
List < Builder >
getOpenapiDocumentsCount()
public int getOpenapiDocumentsCount ()
Optional. OpenAPI specification documents. If specified, grpc_services and
managed_service_configs must not be included.
repeated .google.cloud.apigateway.v1.ApiConfig.OpenApiDocument openapi_documents = 9 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
int
getOpenapiDocumentsList()
public List<ApiConfig . OpenApiDocument > getOpenapiDocumentsList ()
Optional. OpenAPI specification documents. If specified, grpc_services and
managed_service_configs must not be included.
repeated .google.cloud.apigateway.v1.ApiConfig.OpenApiDocument openapi_documents = 9 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
List < OpenApiDocument >
getOpenapiDocumentsOrBuilder(int index)
public ApiConfig . OpenApiDocumentOrBuilder getOpenapiDocumentsOrBuilder ( int index )
Optional. OpenAPI specification documents. If specified, grpc_services and
managed_service_configs must not be included.
repeated .google.cloud.apigateway.v1.ApiConfig.OpenApiDocument openapi_documents = 9 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
index
int
Returns
Type
Description
ApiConfig.OpenApiDocumentOrBuilder
getOpenapiDocumentsOrBuilderList()
public List < ? extends ApiConfig . OpenApiDocumentOrBuilder > getOpenapiDocumentsOrBuilderList ()
Optional. OpenAPI specification documents. If specified, grpc_services and
managed_service_configs must not be included.
repeated .google.cloud.apigateway.v1.ApiConfig.OpenApiDocument openapi_documents = 9 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
List < ? extends com.google.cloud.apigateway.v1.ApiConfig.OpenApiDocumentOrBuilder >
getServiceConfigId()
public String getServiceConfigId ()
Output only. The ID of the associated Service Config (
https://cloud.google.com/service-infrastructure/docs/glossary#config ).
string service_config_id = 12 [(.google.api.field_behavior) = OUTPUT_ONLY, (.google.api.resource_reference) = { ... }
Returns
Type
Description
String
The serviceConfigId.
getServiceConfigIdBytes()
public ByteString getServiceConfigIdBytes ()
Output only. The ID of the associated Service Config (
https://cloud.google.com/service-infrastructure/docs/glossary#config ).
string service_config_id = 12 [(.google.api.field_behavior) = OUTPUT_ONLY, (.google.api.resource_reference) = { ... }
Returns
Type
Description
ByteString
The bytes for serviceConfigId.
getState()
public ApiConfig . State getState ()
Output only. State of the API Config.
.google.cloud.apigateway.v1.ApiConfig.State state = 8 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
ApiConfig.State
The state.
getStateValue()
public int getStateValue ()
Output only. State of the API Config.
.google.cloud.apigateway.v1.ApiConfig.State state = 8 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
int
The enum numeric value on the wire for state.
getUpdateTime()
public Timestamp getUpdateTime ()
Output only. Updated time.
.google.protobuf.Timestamp update_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
Timestamp
The updateTime.
getUpdateTimeBuilder()
public Timestamp . Builder getUpdateTimeBuilder ()
Output only. Updated time.
.google.protobuf.Timestamp update_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
Builder
getUpdateTimeOrBuilder()
public TimestampOrBuilder getUpdateTimeOrBuilder ()
Output only. Updated time.
.google.protobuf.Timestamp update_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
TimestampOrBuilder
hasCreateTime()
public boolean hasCreateTime ()
Output only. Created time.
.google.protobuf.Timestamp create_time = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
boolean
Whether the createTime field is set.
hasUpdateTime()
public boolean hasUpdateTime ()
Output only. Updated time.
.google.protobuf.Timestamp update_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
boolean
Whether the updateTime field is set.
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
mergeCreateTime(Timestamp value)
public ApiConfig . Builder mergeCreateTime ( Timestamp value )
Output only. Created time.
.google.protobuf.Timestamp create_time = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];
Parameter
Name
Description
value
Timestamp
Returns
Type
Description
ApiConfig.Builder
mergeFrom(ApiConfig other)
public ApiConfig . Builder mergeFrom ( ApiConfig other )
Parameter
Name
Description
other
ApiConfig
Returns
Type
Description
ApiConfig.Builder
mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public ApiConfig . Builder mergeFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
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
ApiConfig.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
Exceptions
Type
Description
IOException
mergeFrom(Message other)
public ApiConfig . Builder mergeFrom ( Message other )
Parameter
Name
Description
other
Message
Returns
Type
Description
ApiConfig.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)
mergeUpdateTime(Timestamp value)
public ApiConfig . Builder mergeUpdateTime ( Timestamp value )
Output only. Updated time.
.google.protobuf.Timestamp update_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];
Parameter
Name
Description
value
Timestamp
Returns
Type
Description
ApiConfig.Builder
putAllLabels(Map<String,String> values)
public ApiConfig . Builder putAllLabels ( Map<String , String > values )
Optional. Resource labels to represent user-provided metadata.
Refer to cloud documentation on labels for more details.
https://cloud.google.com/compute/docs/labeling-resources
map<string, string> labels = 4 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
values
Map < String , String >
Returns
Type
Description
ApiConfig.Builder
putLabels(String key, String value)
public ApiConfig . Builder putLabels ( String key , String value )
Optional. Resource labels to represent user-provided metadata.
Refer to cloud documentation on labels for more details.
https://cloud.google.com/compute/docs/labeling-resources
map<string, string> labels = 4 [(.google.api.field_behavior) = OPTIONAL];
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
ApiConfig.Builder
removeGrpcServices(int index)
public ApiConfig . Builder removeGrpcServices ( int index )
Optional. gRPC service definition files. If specified, openapi_documents must
not be included.
repeated .google.cloud.apigateway.v1.ApiConfig.GrpcServiceDefinition grpc_services = 10 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
index
int
Returns
Type
Description
ApiConfig.Builder
removeLabels(String key)
public ApiConfig . Builder removeLabels ( String key )
Optional. Resource labels to represent user-provided metadata.
Refer to cloud documentation on labels for more details.
https://cloud.google.com/compute/docs/labeling-resources
map<string, string> labels = 4 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
key
String
Returns
Type
Description
ApiConfig.Builder
removeManagedServiceConfigs(int index)
public ApiConfig . Builder removeManagedServiceConfigs ( int index )
Optional. Service Configuration files. At least one must be included when using gRPC
service definitions. See
https://cloud.google.com/endpoints/docs/grpc/grpc-service-config#service_configuration_overview
for the expected file contents.
If multiple files are specified, the files are merged with the following
rules:
All singular scalar fields are merged using "last one wins" semantics in
the order of the files uploaded.
Repeated fields are concatenated.
Singular embedded messages are merged using these rules for nested
fields.
repeated .google.cloud.apigateway.v1.ApiConfig.File managed_service_configs = 11 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
index
int
Returns
Type
Description
ApiConfig.Builder
removeOpenapiDocuments(int index)
public ApiConfig . Builder removeOpenapiDocuments ( int index )
Optional. OpenAPI specification documents. If specified, grpc_services and
managed_service_configs must not be included.
repeated .google.cloud.apigateway.v1.ApiConfig.OpenApiDocument openapi_documents = 9 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
index
int
Returns
Type
Description
ApiConfig.Builder
setCreateTime(Timestamp value)
public ApiConfig . Builder setCreateTime ( Timestamp value )
Output only. Created time.
.google.protobuf.Timestamp create_time = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];
Parameter
Name
Description
value
Timestamp
Returns
Type
Description
ApiConfig.Builder
setCreateTime(Timestamp.Builder builderForValue)
public ApiConfig . Builder setCreateTime ( Timestamp . Builder builderForValue )
Output only. Created time.
.google.protobuf.Timestamp create_time = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];
Parameter
Name
Description
builderForValue
Builder
Returns
Type
Description
ApiConfig.Builder
setDisplayName(String value)
public ApiConfig . Builder setDisplayName ( String value )
Optional. Display name.
string display_name = 5 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
value
String The displayName to set.
Returns
Type
Description
ApiConfig.Builder
This builder for chaining.
setDisplayNameBytes(ByteString value)
public ApiConfig . Builder setDisplayNameBytes ( ByteString value )
Optional. Display name.
string display_name = 5 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
value
ByteString The bytes for displayName to set.
Returns
Type
Description
ApiConfig.Builder
This builder for chaining.
setGatewayServiceAccount(String value)
public ApiConfig . Builder setGatewayServiceAccount ( String value )
Immutable. The Google Cloud IAM Service Account that Gateways serving this config
should use to authenticate to other services. This may either be the
Service Account's email
( {ACCOUNT_ID}@{PROJECT}.iam.gserviceaccount.com ) or its full resource
name ( projects/{PROJECT}/accounts/{UNIQUE_ID} ). This is most often used
when the service is a GCP resource such as a Cloud Run Service or an
IAP-secured service.
string gateway_service_account = 14 [(.google.api.field_behavior) = IMMUTABLE, (.google.api.resource_reference) = { ... }
Parameter
Name
Description
value
String The gatewayServiceAccount to set.
Returns
Type
Description
ApiConfig.Builder
This builder for chaining.
setGatewayServiceAccountBytes(ByteString value)
public ApiConfig . Builder setGatewayServiceAccountBytes ( ByteString value )
Immutable. The Google Cloud IAM Service Account that Gateways serving this config
should use to authenticate to other services. This may either be the
Service Account's email
( {ACCOUNT_ID}@{PROJECT}.iam.gserviceaccount.com ) or its full resource
name ( projects/{PROJECT}/accounts/{UNIQUE_ID} ). This is most often used
when the service is a GCP resource such as a Cloud Run Service or an
IAP-secured service.
string gateway_service_account = 14 [(.google.api.field_behavior) = IMMUTABLE, (.google.api.resource_reference) = { ... }
Parameter
Name
Description
value
ByteString The bytes for gatewayServiceAccount to set.
Returns
Type
Description
ApiConfig.Builder
This builder for chaining.
setGrpcServices(int index, ApiConfig.GrpcServiceDefinition value)
public ApiConfig . Builder setGrpcServices ( int index , ApiConfig . GrpcServiceDefinition value )
Optional. gRPC service definition files. If specified, openapi_documents must
not be included.
repeated .google.cloud.apigateway.v1.ApiConfig.GrpcServiceDefinition grpc_services = 10 [(.google.api.field_behavior) = OPTIONAL];
Parameters
Name
Description
index
int
value
ApiConfig.GrpcServiceDefinition
Returns
Type
Description
ApiConfig.Builder
setGrpcServices(int index, ApiConfig.GrpcServiceDefinition.Builder builderForValue)
public ApiConfig . Builder setGrpcServices ( int index , ApiConfig . GrpcServiceDefinition . Builder builderForValue )
Optional. gRPC service definition files. If specified, openapi_documents must
not be included.
repeated .google.cloud.apigateway.v1.ApiConfig.GrpcServiceDefinition grpc_services = 10 [(.google.api.field_behavior) = OPTIONAL];
Parameters
Name
Description
index
int
builderForValue
ApiConfig.GrpcServiceDefinition.Builder
Returns
Type
Description
ApiConfig.Builder
setManagedServiceConfigs(int index, ApiConfig.File value)
public ApiConfig . Builder setManagedServiceConfigs ( int index , ApiConfig . File value )
Optional. Service Configuration files. At least one must be included when using gRPC
service definitions. See
https://cloud.google.com/endpoints/docs/grpc/grpc-service-config#service_configuration_overview
for the expected file contents.
If multiple files are specified, the files are merged with the following
rules:
All singular scalar fields are merged using "last one wins" semantics in
the order of the files uploaded.
Repeated fields are concatenated.
Singular embedded messages are merged using these rules for nested
fields.
repeated .google.cloud.apigateway.v1.ApiConfig.File managed_service_configs = 11 [(.google.api.field_behavior) = OPTIONAL];
Parameters
Name
Description
index
int
value
ApiConfig.File
Returns
Type
Description
ApiConfig.Builder
setManagedServiceConfigs(int index, ApiConfig.File.Builder builderForValue)
public ApiConfig . Builder setManagedServiceConfigs ( int index , ApiConfig . File . Builder builderForValue )
Optional. Service Configuration files. At least one must be included when using gRPC
service definitions. See
https://cloud.google.com/endpoints/docs/grpc/grpc-service-config#service_configuration_overview
for the expected file contents.
If multiple files are specified, the files are merged with the following
rules:
All singular scalar fields are merged using "last one wins" semantics in
the order of the files uploaded.
Repeated fields are concatenated.
Singular embedded messages are merged using these rules for nested
fields.
repeated .google.cloud.apigateway.v1.ApiConfig.File managed_service_configs = 11 [(.google.api.field_behavior) = OPTIONAL];
Parameters
Name
Description
index
int
builderForValue
ApiConfig.File.Builder
Returns
Type
Description
ApiConfig.Builder
setName(String value)
public ApiConfig . Builder setName ( String value )
Output only. Resource name of the API Config.
Format: projects/{project}/locations/global/apis/{api}/configs/{api_config}
string name = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];
Parameter
Name
Description
value
String The name to set.
Returns
Type
Description
ApiConfig.Builder
This builder for chaining.
setNameBytes(ByteString value)
public ApiConfig . Builder setNameBytes ( ByteString value )
Output only. Resource name of the API Config.
Format: projects/{project}/locations/global/apis/{api}/configs/{api_config}
string name = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];
Parameter
Name
Description
value
ByteString The bytes for name to set.
Returns
Type
Description
ApiConfig.Builder
This builder for chaining.
setOpenapiDocuments(int index, ApiConfig.OpenApiDocument value)
public ApiConfig . Builder setOpenapiDocuments ( int index , ApiConfig . OpenApiDocument value )
Optional. OpenAPI specification documents. If specified, grpc_services and
managed_service_configs must not be included.
repeated .google.cloud.apigateway.v1.ApiConfig.OpenApiDocument openapi_documents = 9 [(.google.api.field_behavior) = OPTIONAL];
Parameters
Name
Description
index
int
value
ApiConfig.OpenApiDocument
Returns
Type
Description
ApiConfig.Builder
setOpenapiDocuments(int index, ApiConfig.OpenApiDocument.Builder builderForValue)
public ApiConfig . Builder setOpenapiDocuments ( int index , ApiConfig . OpenApiDocument . Builder builderForValue )
Optional. OpenAPI specification documents. If specified, grpc_services and
managed_service_configs must not be included.
repeated .google.cloud.apigateway.v1.ApiConfig.OpenApiDocument openapi_documents = 9 [(.google.api.field_behavior) = OPTIONAL];
Parameters
Name
Description
index
int
builderForValue
ApiConfig.OpenApiDocument.Builder
Returns
Type
Description
ApiConfig.Builder
setServiceConfigId(String value)
public ApiConfig . Builder setServiceConfigId ( String value )
Output only. The ID of the associated Service Config (
https://cloud.google.com/service-infrastructure/docs/glossary#config ).
string service_config_id = 12 [(.google.api.field_behavior) = OUTPUT_ONLY, (.google.api.resource_reference) = { ... }
Parameter
Name
Description
value
String The serviceConfigId to set.
Returns
Type
Description
ApiConfig.Builder
This builder for chaining.
setServiceConfigIdBytes(ByteString value)
public ApiConfig . Builder setServiceConfigIdBytes ( ByteString value )
Output only. The ID of the associated Service Config (
https://cloud.google.com/service-infrastructure/docs/glossary#config ).
string service_config_id = 12 [(.google.api.field_behavior) = OUTPUT_ONLY, (.google.api.resource_reference) = { ... }
Parameter
Name
Description
value
ByteString The bytes for serviceConfigId to set.
Returns
Type
Description
ApiConfig.Builder
This builder for chaining.
setState(ApiConfig.State value)
public ApiConfig . Builder setState ( ApiConfig . State value )
Output only. State of the API Config.
.google.cloud.apigateway.v1.ApiConfig.State state = 8 [(.google.api.field_behavior) = OUTPUT_ONLY];
Parameter
Name
Description
value
ApiConfig.State The state to set.
Returns
Type
Description
ApiConfig.Builder
This builder for chaining.
setStateValue(int value)
public ApiConfig . Builder setStateValue ( int value )
Output only. State of the API Config.
.google.cloud.apigateway.v1.ApiConfig.State state = 8 [(.google.api.field_behavior) = OUTPUT_ONLY];
Parameter
Name
Description
value
int The enum numeric value on the wire for state to set.
Returns
Type
Description
ApiConfig.Builder
This builder for chaining.
setUpdateTime(Timestamp value)
public ApiConfig . Builder setUpdateTime ( Timestamp value )
Output only. Updated time.
.google.protobuf.Timestamp update_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];
Parameter
Name
Description
value
Timestamp
Returns
Type
Description
ApiConfig.Builder
setUpdateTime(Timestamp.Builder builderForValue)
public ApiConfig . Builder setUpdateTime ( Timestamp . Builder builderForValue )
Output only. Updated time.
.google.protobuf.Timestamp update_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];
Parameter
Name
Description
builderForValue
Builder
Returns
Type
Description
ApiConfig.Builder
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-29 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-29 UTC."],[],[]]
