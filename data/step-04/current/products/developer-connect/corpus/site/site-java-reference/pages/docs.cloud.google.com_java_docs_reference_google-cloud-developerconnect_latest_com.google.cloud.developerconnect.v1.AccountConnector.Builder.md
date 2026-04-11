---
title: "Class AccountConnector.Builder (0.45.0) \_|\_ Java client libraries \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-developerconnect/latest/com.google.cloud.developerconnect.v1.AccountConnector.Builder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-developerconnect/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-developerconnect/latest/com.google.cloud.developerconnect.v1.AccountConnector.Builder
  title: "Class AccountConnector.Builder (0.45.0) \_|\_ Java client libraries \_|\_\
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
Class AccountConnector.Builder (0.45.0)
Stay organized with collections
Save and categorize content based on your preferences.
0.45.0 (latest)
0.44.0
0.42.0
0.40.0
0.39.0
0.38.0
0.37.0
0.35.0
0.33.0
0.32.0
0.31.0
0.30.0
0.29.0
0.27.0
0.25.0
0.24.0
0.21.0
0.20.0
0.19.0
0.17.0
0.16.0
0.15.0
0.14.0
0.13.0
0.12.0
0.11.0
0.10.0
0.9.0
0.8.0
0.6.0
0.5.0
0.4.0
0.3.0
0.2.0
0.1.0
public static final class AccountConnector . Builder extends GeneratedMessage . Builder<AccountConnector . Builder > implements AccountConnectorOrBuilder
AccountConnector encapsulates what a platform administrator needs to
configure for users to connect to the service providers, which includes,
among other fields, the OAuth client ID, client secret, and authorization and
token endpoints.
Protobuf type google.cloud.developerconnect.v1.AccountConnector
Inheritance
java.lang.Object >
AbstractMessageLite.Builder<MessageType,BuilderType> >
AbstractMessage.Builder<BuilderType> >
GeneratedMessage.Builder >
AccountConnector.Builder
Implements
AccountConnectorOrBuilder
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
build()
public AccountConnector build ()
Returns
Type
Description
AccountConnector
buildPartial()
public AccountConnector buildPartial ()
Returns
Type
Description
AccountConnector
clear()
public AccountConnector . Builder clear ()
Returns
Type
Description
AccountConnector.Builder
Overrides
GeneratedMessage.Builder<BuilderType>.clear()
clearAccountConnectorConfig()
public AccountConnector . Builder clearAccountConnectorConfig ()
Returns
Type
Description
AccountConnector.Builder
clearAnnotations()
public AccountConnector . Builder clearAnnotations ()
Returns
Type
Description
AccountConnector.Builder
clearCreateTime()
public AccountConnector . Builder clearCreateTime ()
Output only. The timestamp when the accountConnector was created.
.google.protobuf.Timestamp create_time = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
AccountConnector.Builder
clearEtag()
public AccountConnector . Builder clearEtag ()
Optional. This checksum is computed by the server based on the value of
other fields, and may be sent on update and delete requests to ensure the
client has an up-to-date value before proceeding.
string etag = 7 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
AccountConnector.Builder
This builder for chaining.
clearLabels()
public AccountConnector . Builder clearLabels ()
Returns
Type
Description
AccountConnector.Builder
clearName()
public AccountConnector . Builder clearName ()
Identifier. The resource name of the accountConnector, in the format
projects/{project}/locations/{location}/accountConnectors/{account_connector_id} .
string name = 1 [(.google.api.field_behavior) = IDENTIFIER];
Returns
Type
Description
AccountConnector.Builder
This builder for chaining.
clearOauthStartUri()
public AccountConnector . Builder clearOauthStartUri ()
Output only. Start OAuth flow by clicking on this URL.
string oauth_start_uri = 10 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
AccountConnector.Builder
This builder for chaining.
clearProviderOauthConfig()
public AccountConnector . Builder clearProviderOauthConfig ()
Optional. Provider OAuth config.
.google.cloud.developerconnect.v1.ProviderOAuthConfig provider_oauth_config = 5 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
AccountConnector.Builder
clearUpdateTime()
public AccountConnector . Builder clearUpdateTime ()
Output only. The timestamp when the accountConnector was updated.
.google.protobuf.Timestamp update_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
AccountConnector.Builder
containsAnnotations(String key)
public boolean containsAnnotations ( String key )
Optional. Allows users to store small amounts of arbitrary data.
map<string, string> annotations = 6 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
key
String
Returns
Type
Description
boolean
containsLabels(String key)
public boolean containsLabels ( String key )
Optional. Labels as key value pairs
map<string, string> labels = 8 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
key
String
Returns
Type
Description
boolean
getAccountConnectorConfigCase()
public AccountConnector . AccountConnectorConfigCase getAccountConnectorConfigCase ()
Returns
Type
Description
AccountConnector.AccountConnectorConfigCase
getAnnotations() (deprecated)
public Map<String , String > getAnnotations ()
Use #getAnnotationsMap() instead.
Returns
Type
Description
Map < String , String >
getAnnotationsCount()
public int getAnnotationsCount ()
Optional. Allows users to store small amounts of arbitrary data.
map<string, string> annotations = 6 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
int
getAnnotationsMap()
public Map<String , String > getAnnotationsMap ()
Optional. Allows users to store small amounts of arbitrary data.
map<string, string> annotations = 6 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
Map < String , String >
getAnnotationsOrDefault(String key, String defaultValue)
public String getAnnotationsOrDefault ( String key , String defaultValue )
Optional. Allows users to store small amounts of arbitrary data.
map<string, string> annotations = 6 [(.google.api.field_behavior) = OPTIONAL];
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
getAnnotationsOrThrow(String key)
public String getAnnotationsOrThrow ( String key )
Optional. Allows users to store small amounts of arbitrary data.
map<string, string> annotations = 6 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
key
String
Returns
Type
Description
String
getCreateTime()
public Timestamp getCreateTime ()
Output only. The timestamp when the accountConnector was created.
.google.protobuf.Timestamp create_time = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
Timestamp
The createTime.
getCreateTimeBuilder()
public Timestamp . Builder getCreateTimeBuilder ()
Output only. The timestamp when the accountConnector was created.
.google.protobuf.Timestamp create_time = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
Builder
getCreateTimeOrBuilder()
public TimestampOrBuilder getCreateTimeOrBuilder ()
Output only. The timestamp when the accountConnector was created.
.google.protobuf.Timestamp create_time = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
TimestampOrBuilder
getDefaultInstanceForType()
public AccountConnector getDefaultInstanceForType ()
Returns
Type
Description
AccountConnector
getDescriptorForType()
public Descriptors . Descriptor getDescriptorForType ()
Returns
Type
Description
Descriptor
Overrides
GeneratedMessage.Builder<BuilderType>.getDescriptorForType()
getEtag()
public String getEtag ()
Optional. This checksum is computed by the server based on the value of
other fields, and may be sent on update and delete requests to ensure the
client has an up-to-date value before proceeding.
string etag = 7 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
String
The etag.
getEtagBytes()
public ByteString getEtagBytes ()
Optional. This checksum is computed by the server based on the value of
other fields, and may be sent on update and delete requests to ensure the
client has an up-to-date value before proceeding.
string etag = 7 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
ByteString
The bytes for etag.
getLabels() (deprecated)
public Map<String , String > getLabels ()
Use #getLabelsMap() instead.
Returns
Type
Description
Map < String , String >
getLabelsCount()
public int getLabelsCount ()
Optional. Labels as key value pairs
map<string, string> labels = 8 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
int
getLabelsMap()
public Map<String , String > getLabelsMap ()
Optional. Labels as key value pairs
map<string, string> labels = 8 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
Map < String , String >
getLabelsOrDefault(String key, String defaultValue)
public String getLabelsOrDefault ( String key , String defaultValue )
Optional. Labels as key value pairs
map<string, string> labels = 8 [(.google.api.field_behavior) = OPTIONAL];
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
Optional. Labels as key value pairs
map<string, string> labels = 8 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
key
String
Returns
Type
Description
String
getMutableAnnotations() (deprecated)
public Map<String , String > getMutableAnnotations ()
Use alternate mutation accessors instead.
Returns
Type
Description
Map < String , String >
getMutableLabels() (deprecated)
public Map<String , String > getMutableLabels ()
Use alternate mutation accessors instead.
Returns
Type
Description
Map < String , String >
getName()
public String getName ()
Identifier. The resource name of the accountConnector, in the format
projects/{project}/locations/{location}/accountConnectors/{account_connector_id} .
string name = 1 [(.google.api.field_behavior) = IDENTIFIER];
Returns
Type
Description
String
The name.
getNameBytes()
public ByteString getNameBytes ()
Identifier. The resource name of the accountConnector, in the format
projects/{project}/locations/{location}/accountConnectors/{account_connector_id} .
string name = 1 [(.google.api.field_behavior) = IDENTIFIER];
Returns
Type
Description
ByteString
The bytes for name.
getOauthStartUri()
public String getOauthStartUri ()
Output only. Start OAuth flow by clicking on this URL.
string oauth_start_uri = 10 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
String
The oauthStartUri.
getOauthStartUriBytes()
public ByteString getOauthStartUriBytes ()
Output only. Start OAuth flow by clicking on this URL.
string oauth_start_uri = 10 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
ByteString
The bytes for oauthStartUri.
getProviderOauthConfig()
public ProviderOAuthConfig getProviderOauthConfig ()
Optional. Provider OAuth config.
.google.cloud.developerconnect.v1.ProviderOAuthConfig provider_oauth_config = 5 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
ProviderOAuthConfig
The providerOauthConfig.
getProviderOauthConfigBuilder()
public ProviderOAuthConfig . Builder getProviderOauthConfigBuilder ()
Optional. Provider OAuth config.
.google.cloud.developerconnect.v1.ProviderOAuthConfig provider_oauth_config = 5 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
ProviderOAuthConfig.Builder
getProviderOauthConfigOrBuilder()
public ProviderOAuthConfigOrBuilder getProviderOauthConfigOrBuilder ()
Optional. Provider OAuth config.
.google.cloud.developerconnect.v1.ProviderOAuthConfig provider_oauth_config = 5 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
ProviderOAuthConfigOrBuilder
getUpdateTime()
public Timestamp getUpdateTime ()
Output only. The timestamp when the accountConnector was updated.
.google.protobuf.Timestamp update_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
Timestamp
The updateTime.
getUpdateTimeBuilder()
public Timestamp . Builder getUpdateTimeBuilder ()
Output only. The timestamp when the accountConnector was updated.
.google.protobuf.Timestamp update_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
Builder
getUpdateTimeOrBuilder()
public TimestampOrBuilder getUpdateTimeOrBuilder ()
Output only. The timestamp when the accountConnector was updated.
.google.protobuf.Timestamp update_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
TimestampOrBuilder
hasCreateTime()
public boolean hasCreateTime ()
Output only. The timestamp when the accountConnector was created.
.google.protobuf.Timestamp create_time = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
boolean
Whether the createTime field is set.
hasProviderOauthConfig()
public boolean hasProviderOauthConfig ()
Optional. Provider OAuth config.
.google.cloud.developerconnect.v1.ProviderOAuthConfig provider_oauth_config = 5 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
boolean
Whether the providerOauthConfig field is set.
hasUpdateTime()
public boolean hasUpdateTime ()
Output only. The timestamp when the accountConnector was updated.
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
public AccountConnector . Builder mergeCreateTime ( Timestamp value )
Output only. The timestamp when the accountConnector was created.
.google.protobuf.Timestamp create_time = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];
Parameter
Name
Description
value
Timestamp
Returns
Type
Description
AccountConnector.Builder
mergeFrom(AccountConnector other)
public AccountConnector . Builder mergeFrom ( AccountConnector other )
Parameter
Name
Description
other
AccountConnector
Returns
Type
Description
AccountConnector.Builder
mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public AccountConnector . Builder mergeFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
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
AccountConnector.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
Exceptions
Type
Description
IOException
mergeFrom(Message other)
public AccountConnector . Builder mergeFrom ( Message other )
Parameter
Name
Description
other
Message
Returns
Type
Description
AccountConnector.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)
mergeProviderOauthConfig(ProviderOAuthConfig value)
public AccountConnector . Builder mergeProviderOauthConfig ( ProviderOAuthConfig value )
Optional. Provider OAuth config.
.google.cloud.developerconnect.v1.ProviderOAuthConfig provider_oauth_config = 5 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
value
ProviderOAuthConfig
Returns
Type
Description
AccountConnector.Builder
mergeUpdateTime(Timestamp value)
public AccountConnector . Builder mergeUpdateTime ( Timestamp value )
Output only. The timestamp when the accountConnector was updated.
.google.protobuf.Timestamp update_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];
Parameter
Name
Description
value
Timestamp
Returns
Type
Description
AccountConnector.Builder
putAllAnnotations(Map<String,String> values)
public AccountConnector . Builder putAllAnnotations ( Map<String , String > values )
Optional. Allows users to store small amounts of arbitrary data.
map<string, string> annotations = 6 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
values
Map < String , String >
Returns
Type
Description
AccountConnector.Builder
putAllLabels(Map<String,String> values)
public AccountConnector . Builder putAllLabels ( Map<String , String > values )
Optional. Labels as key value pairs
map<string, string> labels = 8 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
values
Map < String , String >
Returns
Type
Description
AccountConnector.Builder
putAnnotations(String key, String value)
public AccountConnector . Builder putAnnotations ( String key , String value )
Optional. Allows users to store small amounts of arbitrary data.
map<string, string> annotations = 6 [(.google.api.field_behavior) = OPTIONAL];
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
AccountConnector.Builder
putLabels(String key, String value)
public AccountConnector . Builder putLabels ( String key , String value )
Optional. Labels as key value pairs
map<string, string> labels = 8 [(.google.api.field_behavior) = OPTIONAL];
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
AccountConnector.Builder
removeAnnotations(String key)
public AccountConnector . Builder removeAnnotations ( String key )
Optional. Allows users to store small amounts of arbitrary data.
map<string, string> annotations = 6 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
key
String
Returns
Type
Description
AccountConnector.Builder
removeLabels(String key)
public AccountConnector . Builder removeLabels ( String key )
Optional. Labels as key value pairs
map<string, string> labels = 8 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
key
String
Returns
Type
Description
AccountConnector.Builder
setCreateTime(Timestamp value)
public AccountConnector . Builder setCreateTime ( Timestamp value )
Output only. The timestamp when the accountConnector was created.
.google.protobuf.Timestamp create_time = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];
Parameter
Name
Description
value
Timestamp
Returns
Type
Description
AccountConnector.Builder
setCreateTime(Timestamp.Builder builderForValue)
public AccountConnector . Builder setCreateTime ( Timestamp . Builder builderForValue )
Output only. The timestamp when the accountConnector was created.
.google.protobuf.Timestamp create_time = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];
Parameter
Name
Description
builderForValue
Builder
Returns
Type
Description
AccountConnector.Builder
setEtag(String value)
public AccountConnector . Builder setEtag ( String value )
Optional. This checksum is computed by the server based on the value of
other fields, and may be sent on update and delete requests to ensure the
client has an up-to-date value before proceeding.
string etag = 7 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
value
String The etag to set.
Returns
Type
Description
AccountConnector.Builder
This builder for chaining.
setEtagBytes(ByteString value)
public AccountConnector . Builder setEtagBytes ( ByteString value )
Optional. This checksum is computed by the server based on the value of
other fields, and may be sent on update and delete requests to ensure the
client has an up-to-date value before proceeding.
string etag = 7 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
value
ByteString The bytes for etag to set.
Returns
Type
Description
AccountConnector.Builder
This builder for chaining.
setName(String value)
public AccountConnector . Builder setName ( String value )
Identifier. The resource name of the accountConnector, in the format
projects/{project}/locations/{location}/accountConnectors/{account_connector_id} .
string name = 1 [(.google.api.field_behavior) = IDENTIFIER];
Parameter
Name
Description
value
String The name to set.
Returns
Type
Description
AccountConnector.Builder
This builder for chaining.
setNameBytes(ByteString value)
public AccountConnector . Builder setNameBytes ( ByteString value )
Identifier. The resource name of the accountConnector, in the format
projects/{project}/locations/{location}/accountConnectors/{account_connector_id} .
string name = 1 [(.google.api.field_behavior) = IDENTIFIER];
Parameter
Name
Description
value
ByteString The bytes for name to set.
Returns
Type
Description
AccountConnector.Builder
This builder for chaining.
setOauthStartUri(String value)
public AccountConnector . Builder setOauthStartUri ( String value )
Output only. Start OAuth flow by clicking on this URL.
string oauth_start_uri = 10 [(.google.api.field_behavior) = OUTPUT_ONLY];
Parameter
Name
Description
value
String The oauthStartUri to set.
Returns
Type
Description
AccountConnector.Builder
This builder for chaining.
setOauthStartUriBytes(ByteString value)
public AccountConnector . Builder setOauthStartUriBytes ( ByteString value )
Output only. Start OAuth flow by clicking on this URL.
string oauth_start_uri = 10 [(.google.api.field_behavior) = OUTPUT_ONLY];
Parameter
Name
Description
value
ByteString The bytes for oauthStartUri to set.
Returns
Type
Description
AccountConnector.Builder
This builder for chaining.
setProviderOauthConfig(ProviderOAuthConfig value)
public AccountConnector . Builder setProviderOauthConfig ( ProviderOAuthConfig value )
Optional. Provider OAuth config.
.google.cloud.developerconnect.v1.ProviderOAuthConfig provider_oauth_config = 5 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
value
ProviderOAuthConfig
Returns
Type
Description
AccountConnector.Builder
setProviderOauthConfig(ProviderOAuthConfig.Builder builderForValue)
public AccountConnector . Builder setProviderOauthConfig ( ProviderOAuthConfig . Builder builderForValue )
Optional. Provider OAuth config.
.google.cloud.developerconnect.v1.ProviderOAuthConfig provider_oauth_config = 5 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
builderForValue
ProviderOAuthConfig.Builder
Returns
Type
Description
AccountConnector.Builder
setUpdateTime(Timestamp value)
public AccountConnector . Builder setUpdateTime ( Timestamp value )
Output only. The timestamp when the accountConnector was updated.
.google.protobuf.Timestamp update_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];
Parameter
Name
Description
value
Timestamp
Returns
Type
Description
AccountConnector.Builder
setUpdateTime(Timestamp.Builder builderForValue)
public AccountConnector . Builder setUpdateTime ( Timestamp . Builder builderForValue )
Output only. The timestamp when the accountConnector was updated.
.google.protobuf.Timestamp update_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];
Parameter
Name
Description
builderForValue
Builder
Returns
Type
Description
AccountConnector.Builder
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
