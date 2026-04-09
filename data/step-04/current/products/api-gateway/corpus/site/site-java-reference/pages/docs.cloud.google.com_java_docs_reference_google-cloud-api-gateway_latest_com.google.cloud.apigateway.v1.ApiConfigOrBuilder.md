---
title: "Interface ApiConfigOrBuilder (2.88.0) \_|\_ Java client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-api-gateway/latest/com.google.cloud.apigateway.v1.ApiConfigOrBuilder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-api-gateway/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-api-gateway/latest/com.google.cloud.apigateway.v1.ApiConfigOrBuilder
  title: "Interface ApiConfigOrBuilder (2.88.0) \_|\_ Java client libraries \_|\_\
    \ Google Cloud Documentation"
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
Interface ApiConfigOrBuilder (2.88.0)
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
public interface ApiConfigOrBuilder extends MessageOrBuilder
Implements
MessageOrBuilder
Methods
containsLabels(String key)
public abstract boolean containsLabels ( String key )
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
public abstract Timestamp getCreateTime ()
Output only. Created time.
.google.protobuf.Timestamp create_time = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
Timestamp
The createTime.
getCreateTimeOrBuilder()
public abstract TimestampOrBuilder getCreateTimeOrBuilder ()
Output only. Created time.
.google.protobuf.Timestamp create_time = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
TimestampOrBuilder
getDisplayName()
public abstract String getDisplayName ()
Optional. Display name.
string display_name = 5 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
String
The displayName.
getDisplayNameBytes()
public abstract ByteString getDisplayNameBytes ()
Optional. Display name.
string display_name = 5 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
ByteString
The bytes for displayName.
getGatewayServiceAccount()
public abstract String getGatewayServiceAccount ()
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
public abstract ByteString getGatewayServiceAccountBytes ()
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
public abstract ApiConfig . GrpcServiceDefinition getGrpcServices ( int index )
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
getGrpcServicesCount()
public abstract int getGrpcServicesCount ()
Optional. gRPC service definition files. If specified, openapi_documents must
not be included.
repeated .google.cloud.apigateway.v1.ApiConfig.GrpcServiceDefinition grpc_services = 10 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
int
getGrpcServicesList()
public abstract List<ApiConfig . GrpcServiceDefinition > getGrpcServicesList ()
Optional. gRPC service definition files. If specified, openapi_documents must
not be included.
repeated .google.cloud.apigateway.v1.ApiConfig.GrpcServiceDefinition grpc_services = 10 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
List < GrpcServiceDefinition >
getGrpcServicesOrBuilder(int index)
public abstract ApiConfig . GrpcServiceDefinitionOrBuilder getGrpcServicesOrBuilder ( int index )
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
public abstract List < ? extends ApiConfig . GrpcServiceDefinitionOrBuilder > getGrpcServicesOrBuilderList ()
Optional. gRPC service definition files. If specified, openapi_documents must
not be included.
repeated .google.cloud.apigateway.v1.ApiConfig.GrpcServiceDefinition grpc_services = 10 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
List < ? extends com.google.cloud.apigateway.v1.ApiConfig.GrpcServiceDefinitionOrBuilder >
getLabels() (deprecated)
public abstract Map<String , String > getLabels ()
Use #getLabelsMap() instead.
Returns
Type
Description
Map < String , String >
getLabelsCount()
public abstract int getLabelsCount ()
Optional. Resource labels to represent user-provided metadata.
Refer to cloud documentation on labels for more details.
https://cloud.google.com/compute/docs/labeling-resources
map<string, string> labels = 4 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
int
getLabelsMap()
public abstract Map<String , String > getLabelsMap ()
Optional. Resource labels to represent user-provided metadata.
Refer to cloud documentation on labels for more details.
https://cloud.google.com/compute/docs/labeling-resources
map<string, string> labels = 4 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
Map < String , String >
getLabelsOrDefault(String key, String defaultValue)
public abstract String getLabelsOrDefault ( String key , String defaultValue )
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
public abstract String getLabelsOrThrow ( String key )
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
public abstract ApiConfig . File getManagedServiceConfigs ( int index )
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
getManagedServiceConfigsCount()
public abstract int getManagedServiceConfigsCount ()
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
public abstract List<ApiConfig . File > getManagedServiceConfigsList ()
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
public abstract ApiConfig . FileOrBuilder getManagedServiceConfigsOrBuilder ( int index )
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
public abstract List < ? extends ApiConfig . FileOrBuilder > getManagedServiceConfigsOrBuilderList ()
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
getName()
public abstract String getName ()
Output only. Resource name of the API Config.
Format: projects/{project}/locations/global/apis/{api}/configs/{api_config}
string name = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
String
The name.
getNameBytes()
public abstract ByteString getNameBytes ()
Output only. Resource name of the API Config.
Format: projects/{project}/locations/global/apis/{api}/configs/{api_config}
string name = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
ByteString
The bytes for name.
getOpenapiDocuments(int index)
public abstract ApiConfig . OpenApiDocument getOpenapiDocuments ( int index )
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
getOpenapiDocumentsCount()
public abstract int getOpenapiDocumentsCount ()
Optional. OpenAPI specification documents. If specified, grpc_services and
managed_service_configs must not be included.
repeated .google.cloud.apigateway.v1.ApiConfig.OpenApiDocument openapi_documents = 9 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
int
getOpenapiDocumentsList()
public abstract List<ApiConfig . OpenApiDocument > getOpenapiDocumentsList ()
Optional. OpenAPI specification documents. If specified, grpc_services and
managed_service_configs must not be included.
repeated .google.cloud.apigateway.v1.ApiConfig.OpenApiDocument openapi_documents = 9 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
List < OpenApiDocument >
getOpenapiDocumentsOrBuilder(int index)
public abstract ApiConfig . OpenApiDocumentOrBuilder getOpenapiDocumentsOrBuilder ( int index )
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
public abstract List < ? extends ApiConfig . OpenApiDocumentOrBuilder > getOpenapiDocumentsOrBuilderList ()
Optional. OpenAPI specification documents. If specified, grpc_services and
managed_service_configs must not be included.
repeated .google.cloud.apigateway.v1.ApiConfig.OpenApiDocument openapi_documents = 9 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
List < ? extends com.google.cloud.apigateway.v1.ApiConfig.OpenApiDocumentOrBuilder >
getServiceConfigId()
public abstract String getServiceConfigId ()
Output only. The ID of the associated Service Config (
https://cloud.google.com/service-infrastructure/docs/glossary#config ).
string service_config_id = 12 [(.google.api.field_behavior) = OUTPUT_ONLY, (.google.api.resource_reference) = { ... }
Returns
Type
Description
String
The serviceConfigId.
getServiceConfigIdBytes()
public abstract ByteString getServiceConfigIdBytes ()
Output only. The ID of the associated Service Config (
https://cloud.google.com/service-infrastructure/docs/glossary#config ).
string service_config_id = 12 [(.google.api.field_behavior) = OUTPUT_ONLY, (.google.api.resource_reference) = { ... }
Returns
Type
Description
ByteString
The bytes for serviceConfigId.
getState()
public abstract ApiConfig . State getState ()
Output only. State of the API Config.
.google.cloud.apigateway.v1.ApiConfig.State state = 8 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
ApiConfig.State
The state.
getStateValue()
public abstract int getStateValue ()
Output only. State of the API Config.
.google.cloud.apigateway.v1.ApiConfig.State state = 8 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
int
The enum numeric value on the wire for state.
getUpdateTime()
public abstract Timestamp getUpdateTime ()
Output only. Updated time.
.google.protobuf.Timestamp update_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
Timestamp
The updateTime.
getUpdateTimeOrBuilder()
public abstract TimestampOrBuilder getUpdateTimeOrBuilder ()
Output only. Updated time.
.google.protobuf.Timestamp update_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
TimestampOrBuilder
hasCreateTime()
public abstract boolean hasCreateTime ()
Output only. Created time.
.google.protobuf.Timestamp create_time = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
boolean
Whether the createTime field is set.
hasUpdateTime()
public abstract boolean hasUpdateTime ()
Output only. Updated time.
.google.protobuf.Timestamp update_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
boolean
Whether the updateTime field is set.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-29 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-29 UTC."],[],[]]
