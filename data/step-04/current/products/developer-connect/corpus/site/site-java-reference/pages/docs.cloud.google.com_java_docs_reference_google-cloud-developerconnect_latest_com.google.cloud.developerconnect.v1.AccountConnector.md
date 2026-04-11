---
title: "Class AccountConnector (0.45.0) \_|\_ Java client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-developerconnect/latest/com.google.cloud.developerconnect.v1.AccountConnector
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-developerconnect/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-developerconnect/latest/com.google.cloud.developerconnect.v1.AccountConnector
  title: "Class AccountConnector (0.45.0) \_|\_ Java client libraries \_|\_ Google\
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
Class AccountConnector (0.45.0)
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
public final class AccountConnector extends GeneratedMessage implements AccountConnectorOrBuilder
AccountConnector encapsulates what a platform administrator needs to
configure for users to connect to the service providers, which includes,
among other fields, the OAuth client ID, client secret, and authorization and
token endpoints.
Protobuf type google.cloud.developerconnect.v1.AccountConnector
Inheritance
Object >
AbstractMessageLite<MessageType,BuilderType> >
AbstractMessage >
GeneratedMessage >
AccountConnector
Implements
AccountConnectorOrBuilder
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
ANNOTATIONS_FIELD_NUMBER
public static final int ANNOTATIONS_FIELD_NUMBER
Field Value
Type
Description
int
CREATE_TIME_FIELD_NUMBER
public static final int CREATE_TIME_FIELD_NUMBER
Field Value
Type
Description
int
ETAG_FIELD_NUMBER
public static final int ETAG_FIELD_NUMBER
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
NAME_FIELD_NUMBER
public static final int NAME_FIELD_NUMBER
Field Value
Type
Description
int
OAUTH_START_URI_FIELD_NUMBER
public static final int OAUTH_START_URI_FIELD_NUMBER
Field Value
Type
Description
int
PROVIDER_OAUTH_CONFIG_FIELD_NUMBER
public static final int PROVIDER_OAUTH_CONFIG_FIELD_NUMBER
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
public static AccountConnector getDefaultInstance ()
Returns
Type
Description
AccountConnector
getDescriptor()
public static final Descriptors . Descriptor getDescriptor ()
Returns
Type
Description
Descriptor
newBuilder()
public static AccountConnector . Builder newBuilder ()
Returns
Type
Description
AccountConnector.Builder
newBuilder(AccountConnector prototype)
public static AccountConnector . Builder newBuilder ( AccountConnector prototype )
Parameter
Name
Description
prototype
AccountConnector
Returns
Type
Description
AccountConnector.Builder
parseDelimitedFrom(InputStream input)
public static AccountConnector parseDelimitedFrom ( InputStream input )
Parameter
Name
Description
input
InputStream
Returns
Type
Description
AccountConnector
Exceptions
Type
Description
IOException
parseDelimitedFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
public static AccountConnector parseDelimitedFrom ( InputStream input , ExtensionRegistryLite extensionRegistry )
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
AccountConnector
Exceptions
Type
Description
IOException
parseFrom(byte[] data)
public static AccountConnector parseFrom ( byte [] data )
Parameter
Name
Description
data
byte []
Returns
Type
Description
AccountConnector
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(byte[] data, ExtensionRegistryLite extensionRegistry)
public static AccountConnector parseFrom ( byte [] data , ExtensionRegistryLite extensionRegistry )
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
AccountConnector
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteString data)
public static AccountConnector parseFrom ( ByteString data )
Parameter
Name
Description
data
ByteString
Returns
Type
Description
AccountConnector
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteString data, ExtensionRegistryLite extensionRegistry)
public static AccountConnector parseFrom ( ByteString data , ExtensionRegistryLite extensionRegistry )
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
AccountConnector
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(CodedInputStream input)
public static AccountConnector parseFrom ( CodedInputStream input )
Parameter
Name
Description
input
CodedInputStream
Returns
Type
Description
AccountConnector
Exceptions
Type
Description
IOException
parseFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public static AccountConnector parseFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
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
AccountConnector
Exceptions
Type
Description
IOException
parseFrom(InputStream input)
public static AccountConnector parseFrom ( InputStream input )
Parameter
Name
Description
input
InputStream
Returns
Type
Description
AccountConnector
Exceptions
Type
Description
IOException
parseFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
public static AccountConnector parseFrom ( InputStream input , ExtensionRegistryLite extensionRegistry )
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
AccountConnector
Exceptions
Type
Description
IOException
parseFrom(ByteBuffer data)
public static AccountConnector parseFrom ( ByteBuffer data )
Parameter
Name
Description
data
ByteBuffer
Returns
Type
Description
AccountConnector
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteBuffer data, ExtensionRegistryLite extensionRegistry)
public static AccountConnector parseFrom ( ByteBuffer data , ExtensionRegistryLite extensionRegistry )
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
AccountConnector
Exceptions
Type
Description
InvalidProtocolBufferException
parser()
public static Parser<AccountConnector> parser ()
Returns
Type
Description
Parser < AccountConnector >
Methods
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
getParserForType()
public Parser<AccountConnector> getParserForType ()
Returns
Type
Description
Parser < AccountConnector >
Overrides
GeneratedMessage.getParserForType()
getProviderOauthConfig()
public ProviderOAuthConfig getProviderOauthConfig ()
Optional. Provider OAuth config.
.google.cloud.developerconnect.v1.ProviderOAuthConfig provider_oauth_config = 5 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
ProviderOAuthConfig
The providerOauthConfig.
getProviderOauthConfigOrBuilder()
public ProviderOAuthConfigOrBuilder getProviderOauthConfigOrBuilder ()
Optional. Provider OAuth config.
.google.cloud.developerconnect.v1.ProviderOAuthConfig provider_oauth_config = 5 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
ProviderOAuthConfigOrBuilder
getSerializedSize()
public int getSerializedSize ()
Returns
Type
Description
int
Overrides
GeneratedMessage.getSerializedSize()
getUpdateTime()
public Timestamp getUpdateTime ()
Output only. The timestamp when the accountConnector was updated.
.google.protobuf.Timestamp update_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
Timestamp
The updateTime.
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
public AccountConnector . Builder newBuilderForType ()
Returns
Type
Description
AccountConnector.Builder
newBuilderForType(AbstractMessage.BuilderParent parent)
protected AccountConnector . Builder newBuilderForType ( AbstractMessage . BuilderParent parent )
Parameter
Name
Description
parent
BuilderParent
Returns
Type
Description
AccountConnector.Builder
Overrides
AbstractMessage.newBuilderForType(AbstractMessage.BuilderParent parent)
toBuilder()
public AccountConnector . Builder toBuilder ()
Returns
Type
Description
AccountConnector.Builder
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
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
