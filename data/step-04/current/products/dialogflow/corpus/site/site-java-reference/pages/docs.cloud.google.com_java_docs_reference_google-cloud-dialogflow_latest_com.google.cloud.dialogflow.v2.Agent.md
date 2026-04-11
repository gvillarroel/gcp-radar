---
title: "Class Agent (4.94.0) \_|\_ Java client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.Agent
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.Agent
  title: "Class Agent (4.94.0) \_|\_ Java client libraries \_|\_ Google Cloud Documentation"
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
Class Agent (4.94.0)
Stay organized with collections
Save and categorize content based on your preferences.
4.94.0 (latest)
4.93.0
4.91.0
4.89.0
4.88.0
4.87.0
4.86.0
4.84.0
4.82.0
4.81.0
4.80.0
4.79.0
4.78.0
4.76.0
4.74.0
4.73.0
4.70.0
4.69.0
4.68.0
4.66.0
4.65.0
4.64.0
4.63.0
4.62.0
4.61.0
4.60.0
4.59.0
4.58.0
4.57.0
4.55.0
4.54.0
4.53.0
4.52.0
4.51.0
4.50.0
4.49.0
4.48.0
4.47.0
4.46.0
4.45.0
4.43.0
4.42.0
4.41.0
4.40.0
4.39.0
4.38.0
4.37.0
4.36.0
4.35.0
4.34.0
4.33.0
4.30.0
4.29.0
4.28.0
4.27.0
4.26.0
4.25.0
4.24.0
4.23.0
4.22.0
4.21.0
4.20.0
4.19.0
4.18.0
4.17.0
4.15.0
4.14.0
4.13.0
4.12.0
4.11.0
4.10.0
4.9.1
4.8.6
4.7.5
4.6.0
4.5.11
4.4.0
4.3.1
public final class Agent extends GeneratedMessage implements AgentOrBuilder
A Dialogflow agent is a virtual agent that handles conversations with your
end-users. It is a natural language understanding module that understands the
nuances of human language. Dialogflow translates end-user text or audio
during a conversation to structured data that your apps and services can
understand. You design and build a Dialogflow agent to handle the types of
conversations required for your system.
For more information about agents, see the
Agent guide .
Protobuf type google.cloud.dialogflow.v2.Agent
Inheritance
Object >
AbstractMessageLite<MessageType,BuilderType> >
AbstractMessage >
GeneratedMessage >
Agent
Implements
AgentOrBuilder
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
API_VERSION_FIELD_NUMBER
public static final int API_VERSION_FIELD_NUMBER
Field Value
Type
Description
int
AVATAR_URI_FIELD_NUMBER
public static final int AVATAR_URI_FIELD_NUMBER
Field Value
Type
Description
int
CLASSIFICATION_THRESHOLD_FIELD_NUMBER
public static final int CLASSIFICATION_THRESHOLD_FIELD_NUMBER
Field Value
Type
Description
int
DEFAULT_LANGUAGE_CODE_FIELD_NUMBER
public static final int DEFAULT_LANGUAGE_CODE_FIELD_NUMBER
Field Value
Type
Description
int
DESCRIPTION_FIELD_NUMBER
public static final int DESCRIPTION_FIELD_NUMBER
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
ENABLE_LOGGING_FIELD_NUMBER
public static final int ENABLE_LOGGING_FIELD_NUMBER
Field Value
Type
Description
int
MATCH_MODE_FIELD_NUMBER
public static final int MATCH_MODE_FIELD_NUMBER
Field Value
Type
Description
int
PARENT_FIELD_NUMBER
public static final int PARENT_FIELD_NUMBER
Field Value
Type
Description
int
SUPPORTED_LANGUAGE_CODES_FIELD_NUMBER
public static final int SUPPORTED_LANGUAGE_CODES_FIELD_NUMBER
Field Value
Type
Description
int
TIER_FIELD_NUMBER
public static final int TIER_FIELD_NUMBER
Field Value
Type
Description
int
TIME_ZONE_FIELD_NUMBER
public static final int TIME_ZONE_FIELD_NUMBER
Field Value
Type
Description
int
Static Methods
getDefaultInstance()
public static Agent getDefaultInstance ()
Returns
Type
Description
Agent
getDescriptor()
public static final Descriptors . Descriptor getDescriptor ()
Returns
Type
Description
Descriptor
newBuilder()
public static Agent . Builder newBuilder ()
Returns
Type
Description
Agent.Builder
newBuilder(Agent prototype)
public static Agent . Builder newBuilder ( Agent prototype )
Parameter
Name
Description
prototype
Agent
Returns
Type
Description
Agent.Builder
parseDelimitedFrom(InputStream input)
public static Agent parseDelimitedFrom ( InputStream input )
Parameter
Name
Description
input
InputStream
Returns
Type
Description
Agent
Exceptions
Type
Description
IOException
parseDelimitedFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
public static Agent parseDelimitedFrom ( InputStream input , ExtensionRegistryLite extensionRegistry )
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
Agent
Exceptions
Type
Description
IOException
parseFrom(byte[] data)
public static Agent parseFrom ( byte [] data )
Parameter
Name
Description
data
byte []
Returns
Type
Description
Agent
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(byte[] data, ExtensionRegistryLite extensionRegistry)
public static Agent parseFrom ( byte [] data , ExtensionRegistryLite extensionRegistry )
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
Agent
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteString data)
public static Agent parseFrom ( ByteString data )
Parameter
Name
Description
data
ByteString
Returns
Type
Description
Agent
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteString data, ExtensionRegistryLite extensionRegistry)
public static Agent parseFrom ( ByteString data , ExtensionRegistryLite extensionRegistry )
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
Agent
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(CodedInputStream input)
public static Agent parseFrom ( CodedInputStream input )
Parameter
Name
Description
input
CodedInputStream
Returns
Type
Description
Agent
Exceptions
Type
Description
IOException
parseFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public static Agent parseFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
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
Agent
Exceptions
Type
Description
IOException
parseFrom(InputStream input)
public static Agent parseFrom ( InputStream input )
Parameter
Name
Description
input
InputStream
Returns
Type
Description
Agent
Exceptions
Type
Description
IOException
parseFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
public static Agent parseFrom ( InputStream input , ExtensionRegistryLite extensionRegistry )
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
Agent
Exceptions
Type
Description
IOException
parseFrom(ByteBuffer data)
public static Agent parseFrom ( ByteBuffer data )
Parameter
Name
Description
data
ByteBuffer
Returns
Type
Description
Agent
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteBuffer data, ExtensionRegistryLite extensionRegistry)
public static Agent parseFrom ( ByteBuffer data , ExtensionRegistryLite extensionRegistry )
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
Agent
Exceptions
Type
Description
InvalidProtocolBufferException
parser()
public static Parser<Agent> parser ()
Returns
Type
Description
Parser < Agent >
Methods
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
getApiVersion()
public Agent . ApiVersion getApiVersion ()
Optional. API version displayed in Dialogflow console. If not specified,
V2 API is assumed. Clients are free to query different service endpoints
for different API versions. However, bots connectors and webhook calls will
follow the specified API version.
.google.cloud.dialogflow.v2.Agent.ApiVersion api_version = 14 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
Agent.ApiVersion
The apiVersion.
getApiVersionValue()
public int getApiVersionValue ()
Optional. API version displayed in Dialogflow console. If not specified,
V2 API is assumed. Clients are free to query different service endpoints
for different API versions. However, bots connectors and webhook calls will
follow the specified API version.
.google.cloud.dialogflow.v2.Agent.ApiVersion api_version = 14 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
int
The enum numeric value on the wire for apiVersion.
getAvatarUri()
public String getAvatarUri ()
Optional. The URI of the agent's avatar.
Avatars are used throughout the Dialogflow console and in the self-hosted
Web
Demo
integration.
string avatar_uri = 7 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
String
The avatarUri.
getAvatarUriBytes()
public ByteString getAvatarUriBytes ()
Optional. The URI of the agent's avatar.
Avatars are used throughout the Dialogflow console and in the self-hosted
Web
Demo
integration.
string avatar_uri = 7 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
ByteString
The bytes for avatarUri.
getClassificationThreshold()
public float getClassificationThreshold ()
Optional. To filter out false positive results and still get variety in
matched natural language inputs for your agent, you can tune the machine
learning classification threshold. If the returned score value is less than
the threshold value, then a fallback intent will be triggered or, if there
are no fallback intents defined, no intent will be triggered. The score
values range from 0.0 (completely uncertain) to 1.0 (completely certain).
If set to 0.0, the default of 0.3 is used.
float classification_threshold = 10 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
float
The classificationThreshold.
getDefaultInstanceForType()
public Agent getDefaultInstanceForType ()
Returns
Type
Description
Agent
getDefaultLanguageCode()
public String getDefaultLanguageCode ()
Required. The default language of the agent as a language tag. See
Language
Support
for a list of the currently supported language codes. This field cannot be
set by the Update method.
string default_language_code = 3 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
String
The defaultLanguageCode.
getDefaultLanguageCodeBytes()
public ByteString getDefaultLanguageCodeBytes ()
Required. The default language of the agent as a language tag. See
Language
Support
for a list of the currently supported language codes. This field cannot be
set by the Update method.
string default_language_code = 3 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
ByteString
The bytes for defaultLanguageCode.
getDescription()
public String getDescription ()
Optional. The description of this agent.
The maximum length is 500 characters. If exceeded, the request is rejected.
string description = 6 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
String
The description.
getDescriptionBytes()
public ByteString getDescriptionBytes ()
Optional. The description of this agent.
The maximum length is 500 characters. If exceeded, the request is rejected.
string description = 6 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
ByteString
The bytes for description.
getDisplayName()
public String getDisplayName ()
Required. The name of this agent.
string display_name = 2 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
String
The displayName.
getDisplayNameBytes()
public ByteString getDisplayNameBytes ()
Required. The name of this agent.
string display_name = 2 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
ByteString
The bytes for displayName.
getEnableLogging()
public boolean getEnableLogging ()
Optional. Determines whether this agent should log conversation queries.
bool enable_logging = 8 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
boolean
The enableLogging.
getMatchMode() (deprecated)
public Agent . MatchMode getMatchMode ()
Deprecated. google.cloud.dialogflow.v2.Agent.match_mode is deprecated. See
google/cloud/dialogflow/v2/agent.proto;l=353
Optional. Determines how intents are detected from user queries.
.google.cloud.dialogflow.v2.Agent.MatchMode match_mode = 9 [deprecated = true, (.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
Agent.MatchMode
The matchMode.
getMatchModeValue() (deprecated)
public int getMatchModeValue ()
Deprecated. google.cloud.dialogflow.v2.Agent.match_mode is deprecated. See
google/cloud/dialogflow/v2/agent.proto;l=353
Optional. Determines how intents are detected from user queries.
.google.cloud.dialogflow.v2.Agent.MatchMode match_mode = 9 [deprecated = true, (.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
int
The enum numeric value on the wire for matchMode.
getParent()
public String getParent ()
Required. The project of this agent.
Format: projects/<Project ID> .
string parent = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }
Returns
Type
Description
String
The parent.
getParentBytes()
public ByteString getParentBytes ()
Required. The project of this agent.
Format: projects/<Project ID> .
string parent = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }
Returns
Type
Description
ByteString
The bytes for parent.
getParserForType()
public Parser<Agent> getParserForType ()
Returns
Type
Description
Parser < Agent >
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
getSupportedLanguageCodes(int index)
public String getSupportedLanguageCodes ( int index )
Optional. The list of all languages supported by this agent (except for the
default_language_code ).
repeated string supported_language_codes = 4 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
index
int The index of the element to return.
Returns
Type
Description
String
The supportedLanguageCodes at the given index.
getSupportedLanguageCodesBytes(int index)
public ByteString getSupportedLanguageCodesBytes ( int index )
Optional. The list of all languages supported by this agent (except for the
default_language_code ).
repeated string supported_language_codes = 4 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
index
int The index of the value to return.
Returns
Type
Description
ByteString
The bytes of the supportedLanguageCodes at the given index.
getSupportedLanguageCodesCount()
public int getSupportedLanguageCodesCount ()
Optional. The list of all languages supported by this agent (except for the
default_language_code ).
repeated string supported_language_codes = 4 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
int
The count of supportedLanguageCodes.
getSupportedLanguageCodesList()
public ProtocolStringList getSupportedLanguageCodesList ()
Optional. The list of all languages supported by this agent (except for the
default_language_code ).
repeated string supported_language_codes = 4 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
ProtocolStringList
A list containing the supportedLanguageCodes.
getTier()
public Agent . Tier getTier ()
Optional. The agent tier. If not specified, TIER_STANDARD is assumed.
.google.cloud.dialogflow.v2.Agent.Tier tier = 15 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
Agent.Tier
The tier.
getTierValue()
public int getTierValue ()
Optional. The agent tier. If not specified, TIER_STANDARD is assumed.
.google.cloud.dialogflow.v2.Agent.Tier tier = 15 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
int
The enum numeric value on the wire for tier.
getTimeZone()
public String getTimeZone ()
Required. The time zone of this agent from the
time zone database , e.g.,
America/New_York, Europe/Paris.
string time_zone = 5 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
String
The timeZone.
getTimeZoneBytes()
public ByteString getTimeZoneBytes ()
Required. The time zone of this agent from the
time zone database , e.g.,
America/New_York, Europe/Paris.
string time_zone = 5 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
ByteString
The bytes for timeZone.
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
isInitialized()
public final boolean isInitialized ()
Returns
Type
Description
boolean
Overrides
GeneratedMessage.isInitialized()
newBuilderForType()
public Agent . Builder newBuilderForType ()
Returns
Type
Description
Agent.Builder
newBuilderForType(AbstractMessage.BuilderParent parent)
protected Agent . Builder newBuilderForType ( AbstractMessage . BuilderParent parent )
Parameter
Name
Description
parent
BuilderParent
Returns
Type
Description
Agent.Builder
Overrides
AbstractMessage.newBuilderForType(AbstractMessage.BuilderParent parent)
toBuilder()
public Agent . Builder toBuilder ()
Returns
Type
Description
Agent.Builder
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
