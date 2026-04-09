---
title: "Class ApiConfig (2.88.0) \_|\_ Java client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-api-gateway/latest/com.google.cloud.apigateway.v1.ApiConfig
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-api-gateway/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-api-gateway/latest/com.google.cloud.apigateway.v1.ApiConfig
  title: "Class ApiConfig (2.88.0) \_|\_ Java client libraries \_|\_ Google Cloud\
    \ Documentation"
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
Class ApiConfig (2.88.0)
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
public final class ApiConfig extends GeneratedMessage implements ApiConfigOrBuilder
An API Configuration is a combination of settings for both the Managed
Service and Gateways serving this API Config.
Protobuf type google.cloud.apigateway.v1.ApiConfig
Inheritance
Object >
AbstractMessageLite<MessageType,BuilderType> >
AbstractMessage >
GeneratedMessage >
ApiConfig
Implements
ApiConfigOrBuilder
Inherited Members
AbstractMessage.equals(Object)
AbstractMessage.findInitializationErrors()
AbstractMessage.getInitializationErrorString()
AbstractMessage.hashCode()
AbstractMessage.hashFields(int,Map<Descriptors.FieldDescriptor,Object>)
AbstractMessage.newBuilderForType(AbstractMessage.BuilderParent)
AbstractMessage.toString()
AbstractMessageLite.<T>addAll(Iterable<T>,List<? super T>)
AbstractMessageLite.checkByteStringIsUtf8(ByteString)
AbstractMessageLite.toByteArray()
AbstractMessageLite.toByteString()
AbstractMessageLite.writeDelimitedTo(OutputStream)
AbstractMessageLite.writeTo(OutputStream)
com.google.protobuf.GeneratedMessage.<ContainingT,T>newFileScopedGeneratedExtension(java.lang.Class<?>,com.google.protobuf.Message)
com.google.protobuf.GeneratedMessage.<ContainingT,T>newMessageScopedGeneratedExtension(com.google.protobuf.Message,int,java.lang.Class<?>,com.google.protobuf.Message)
com.google.protobuf.GeneratedMessage.<ListT>makeMutableCopy(ListT)
com.google.protobuf.GeneratedMessage.<ListT>makeMutableCopy(ListT,int)
GeneratedMessage.<M>parseDelimitedWithIOException(Parser<M>,InputStream)
GeneratedMessage.<M>parseDelimitedWithIOException(Parser<M>,InputStream,ExtensionRegistryLite)
GeneratedMessage.<M>parseWithIOException(Parser<M>,CodedInputStream)
GeneratedMessage.<M>parseWithIOException(Parser<M>,CodedInputStream,ExtensionRegistryLite)
GeneratedMessage.<M>parseWithIOException(Parser<M>,InputStream)
GeneratedMessage.<M>parseWithIOException(Parser<M>,InputStream,ExtensionRegistryLite)
com.google.protobuf.GeneratedMessage.<T>emptyList(java.lang.Class<T>)
com.google.protobuf.GeneratedMessage.<V>serializeBooleanMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.Boolean,V>,com.google.protobuf.MapEntry<java.lang.Boolean,V>,int)
com.google.protobuf.GeneratedMessage.<V>serializeIntegerMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.Integer,V>,com.google.protobuf.MapEntry<java.lang.Integer,V>,int)
com.google.protobuf.GeneratedMessage.<V>serializeLongMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.Long,V>,com.google.protobuf.MapEntry<java.lang.Long,V>,int)
com.google.protobuf.GeneratedMessage.<V>serializeStringMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.String,V>,com.google.protobuf.MapEntry<java.lang.String,V>,int)
com.google.protobuf.GeneratedMessage.canUseUnsafe()
GeneratedMessage.computeStringSize(int,Object)
GeneratedMessage.computeStringSizeNoTag(Object)
com.google.protobuf.GeneratedMessage.emptyBooleanList()
com.google.protobuf.GeneratedMessage.emptyDoubleList()
com.google.protobuf.GeneratedMessage.emptyFloatList()
com.google.protobuf.GeneratedMessage.emptyIntList()
com.google.protobuf.GeneratedMessage.emptyLongList()
GeneratedMessage.getAllFields()
GeneratedMessage.getDescriptorForType()
GeneratedMessage.getField(Descriptors.FieldDescriptor)
GeneratedMessage.getOneofFieldDescriptor(Descriptors.OneofDescriptor)
GeneratedMessage.getParserForType()
GeneratedMessage.getRepeatedField(Descriptors.FieldDescriptor,int)
GeneratedMessage.getRepeatedFieldCount(Descriptors.FieldDescriptor)
GeneratedMessage.getSerializedSize()
GeneratedMessage.getUnknownFields()
GeneratedMessage.hasField(Descriptors.FieldDescriptor)
GeneratedMessage.hasOneof(Descriptors.OneofDescriptor)
GeneratedMessage.internalGetFieldAccessorTable()
GeneratedMessage.internalGetMapField(int)
com.google.protobuf.GeneratedMessage.internalGetMapFieldReflection(int)
GeneratedMessage.isInitialized()
com.google.protobuf.GeneratedMessage.isStringEmpty(java.lang.Object)
GeneratedMessage.makeExtensionsImmutable()
com.google.protobuf.GeneratedMessage.mergeFromAndMakeImmutableInternal(com.google.protobuf.CodedInputStream,com.google.protobuf.ExtensionRegistryLite)
com.google.protobuf.GeneratedMessage.newInstance(com.google.protobuf.GeneratedMessage.UnusedPrivateParameter)
GeneratedMessage.parseUnknownField(CodedInputStream,UnknownFieldSet.Builder,ExtensionRegistryLite,int)
com.google.protobuf.GeneratedMessage.parseUnknownFieldProto3(com.google.protobuf.CodedInputStream,com.google.protobuf.UnknownFieldSet.Builder,com.google.protobuf.ExtensionRegistryLite,int)
GeneratedMessage.writeReplace()
GeneratedMessage.writeString(CodedOutputStream,int,Object)
GeneratedMessage.writeStringNoTag(CodedOutputStream,Object)
GeneratedMessage.writeTo(CodedOutputStream)
Object.clone()
Object.finalize()
Object.getClass()
Object.notify()
Object.notifyAll()
Object.wait()
Object.wait(long)
Object.wait(long,int)
Static Fields
CREATE_TIME_FIELD_NUMBER
public static final int CREATE_TIME_FIELD_NUMBER
Field Value
Type
Description
int
DISPLAY_NAME_FIELD_NUMBER
public static final int DISPLAY_NAME_FIELD_NUMBER
Field Value
Type
Description
int
GATEWAY_SERVICE_ACCOUNT_FIELD_NUMBER
public static final int GATEWAY_SERVICE_ACCOUNT_FIELD_NUMBER
Field Value
Type
Description
int
GRPC_SERVICES_FIELD_NUMBER
public static final int GRPC_SERVICES_FIELD_NUMBER
Field Value
Type
Description
int
LABELS_FIELD_NUMBER
public static final int LABELS_FIELD_NUMBER
Field Value
Type
Description
int
MANAGED_SERVICE_CONFIGS_FIELD_NUMBER
public static final int MANAGED_SERVICE_CONFIGS_FIELD_NUMBER
Field Value
Type
Description
int
NAME_FIELD_NUMBER
public static final int NAME_FIELD_NUMBER
Field Value
Type
Description
int
OPENAPI_DOCUMENTS_FIELD_NUMBER
public static final int OPENAPI_DOCUMENTS_FIELD_NUMBER
Field Value
Type
Description
int
SERVICE_CONFIG_ID_FIELD_NUMBER
public static final int SERVICE_CONFIG_ID_FIELD_NUMBER
Field Value
Type
Description
int
STATE_FIELD_NUMBER
public static final int STATE_FIELD_NUMBER
Field Value
Type
Description
int
UPDATE_TIME_FIELD_NUMBER
public static final int UPDATE_TIME_FIELD_NUMBER
Field Value
Type
Description
int
Static Methods
getDefaultInstance()
public static ApiConfig getDefaultInstance ()
Returns
Type
Description
ApiConfig
getDescriptor()
public static final Descriptors . Descriptor getDescriptor ()
Returns
Type
Description
Descriptor
newBuilder()
public static ApiConfig . Builder newBuilder ()
Returns
Type
Description
ApiConfig.Builder
newBuilder(ApiConfig prototype)
public static ApiConfig . Builder newBuilder ( ApiConfig prototype )
Parameter
Name
Description
prototype
ApiConfig
Returns
Type
Description
ApiConfig.Builder
parseDelimitedFrom(InputStream input)
public static ApiConfig parseDelimitedFrom ( InputStream input )
Parameter
Name
Description
input
InputStream
Returns
Type
Description
ApiConfig
Exceptions
Type
Description
IOException
parseDelimitedFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
public static ApiConfig parseDelimitedFrom ( InputStream input , ExtensionRegistryLite extensionRegistry )
Parameters
Name
Description
input
InputStream
extensionRegistry
ExtensionRegistryLite
Returns
Type
Description
ApiConfig
Exceptions
Type
Description
IOException
parseFrom(byte[] data)
public static ApiConfig parseFrom ( byte [] data )
Parameter
Name
Description
data
byte []
Returns
Type
Description
ApiConfig
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(byte[] data, ExtensionRegistryLite extensionRegistry)
public static ApiConfig parseFrom ( byte [] data , ExtensionRegistryLite extensionRegistry )
Parameters
Name
Description
data
byte []
extensionRegistry
ExtensionRegistryLite
Returns
Type
Description
ApiConfig
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteString data)
public static ApiConfig parseFrom ( ByteString data )
Parameter
Name
Description
data
ByteString
Returns
Type
Description
ApiConfig
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteString data, ExtensionRegistryLite extensionRegistry)
public static ApiConfig parseFrom ( ByteString data , ExtensionRegistryLite extensionRegistry )
Parameters
Name
Description
data
ByteString
extensionRegistry
ExtensionRegistryLite
Returns
Type
Description
ApiConfig
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(CodedInputStream input)
public static ApiConfig parseFrom ( CodedInputStream input )
Parameter
Name
Description
input
CodedInputStream
Returns
Type
Description
ApiConfig
Exceptions
Type
Description
IOException
parseFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public static ApiConfig parseFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
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
ApiConfig
Exceptions
Type
Description
IOException
parseFrom(InputStream input)
public static ApiConfig parseFrom ( InputStream input )
Parameter
Name
Description
input
InputStream
Returns
Type
Description
ApiConfig
Exceptions
Type
Description
IOException
parseFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
public static ApiConfig parseFrom ( InputStream input , ExtensionRegistryLite extensionRegistry )
Parameters
Name
Description
input
InputStream
extensionRegistry
ExtensionRegistryLite
Returns
Type
Description
ApiConfig
Exceptions
Type
Description
IOException
parseFrom(ByteBuffer data)
public static ApiConfig parseFrom ( ByteBuffer data )
Parameter
Name
Description
data
ByteBuffer
Returns
Type
Description
ApiConfig
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteBuffer data, ExtensionRegistryLite extensionRegistry)
public static ApiConfig parseFrom ( ByteBuffer data , ExtensionRegistryLite extensionRegistry )
Parameters
Name
Description
data
ByteBuffer
extensionRegistry
ExtensionRegistryLite
Returns
Type
Description
ApiConfig
Exceptions
Type
Description
InvalidProtocolBufferException
parser()
public static Parser<ApiConfig> parser ()
Returns
Type
Description
Parser < ApiConfig >
Methods
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
equals(Object obj)
public boolean equals ( Object obj )
Parameter
Name
Description
obj
Object
Returns
Type
Description
boolean
Overrides
AbstractMessage.equals(Object other)
getCreateTime()
public Timestamp getCreateTime ()
Output only. Created time.
.google.protobuf.Timestamp create_time = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
Timestamp
The createTime.
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
getParserForType()
public Parser<ApiConfig> getParserForType ()
Returns
Type
Description
Parser < ApiConfig >
Overrides
GeneratedMessage.getParserForType()
getSerializedSize()
public int getSerializedSize ()
Returns
Type
Description
int
Overrides
GeneratedMessage.getSerializedSize()
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
hashCode()
public int hashCode ()
Returns
Type
Description
int
Overrides
AbstractMessage.hashCode()
internalGetFieldAccessorTable()
protected GeneratedMessage . FieldAccessorTable internalGetFieldAccessorTable ()
Returns
Type
Description
FieldAccessorTable
Overrides
GeneratedMessage.internalGetFieldAccessorTable()
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
com.google.protobuf.GeneratedMessage.internalGetMapFieldReflection(int)
isInitialized()
public final boolean isInitialized ()
Returns
Type
Description
boolean
Overrides
GeneratedMessage.isInitialized()
newBuilderForType()
public ApiConfig . Builder newBuilderForType ()
Returns
Type
Description
ApiConfig.Builder
newBuilderForType(AbstractMessage.BuilderParent parent)
protected ApiConfig . Builder newBuilderForType ( AbstractMessage . BuilderParent parent )
Parameter
Name
Description
parent
BuilderParent
Returns
Type
Description
ApiConfig.Builder
Overrides
AbstractMessage.newBuilderForType(AbstractMessage.BuilderParent parent)
toBuilder()
public ApiConfig . Builder toBuilder ()
Returns
Type
Description
ApiConfig.Builder
writeTo(CodedOutputStream output)
public void writeTo ( CodedOutputStream output )
Parameter
Name
Description
output
CodedOutputStream
Overrides
GeneratedMessage.writeTo(CodedOutputStream output)
Exceptions
Type
Description
IOException
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-29 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-29 UTC."],[],[]]
