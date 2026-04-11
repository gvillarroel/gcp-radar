---
title: "Class Agent.Builder (4.94.0) \_|\_ Java client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.Agent.Builder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.Agent.Builder
  title: "Class Agent.Builder (4.94.0) \_|\_ Java client libraries \_|\_ Google Cloud\
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
Class Agent.Builder (4.94.0)
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
public static final class Agent . Builder extends GeneratedMessage . Builder<Agent . Builder > implements AgentOrBuilder
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
java.lang.Object >
AbstractMessageLite.Builder<MessageType,BuilderType> >
AbstractMessage.Builder<BuilderType> >
GeneratedMessage.Builder >
Agent.Builder
Implements
AgentOrBuilder
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
addAllSupportedLanguageCodes(Iterable<String> values)
public Agent . Builder addAllSupportedLanguageCodes ( Iterable<String> values )
Optional. The list of all languages supported by this agent (except for the
default_language_code ).
repeated string supported_language_codes = 4 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
values
Iterable < String > The supportedLanguageCodes to add.
Returns
Type
Description
Agent.Builder
This builder for chaining.
addSupportedLanguageCodes(String value)
public Agent . Builder addSupportedLanguageCodes ( String value )
Optional. The list of all languages supported by this agent (except for the
default_language_code ).
repeated string supported_language_codes = 4 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
value
String The supportedLanguageCodes to add.
Returns
Type
Description
Agent.Builder
This builder for chaining.
addSupportedLanguageCodesBytes(ByteString value)
public Agent . Builder addSupportedLanguageCodesBytes ( ByteString value )
Optional. The list of all languages supported by this agent (except for the
default_language_code ).
repeated string supported_language_codes = 4 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
value
ByteString The bytes of the supportedLanguageCodes to add.
Returns
Type
Description
Agent.Builder
This builder for chaining.
build()
public Agent build ()
Returns
Type
Description
Agent
buildPartial()
public Agent buildPartial ()
Returns
Type
Description
Agent
clear()
public Agent . Builder clear ()
Returns
Type
Description
Agent.Builder
Overrides
GeneratedMessage.Builder<BuilderType>.clear()
clearApiVersion()
public Agent . Builder clearApiVersion ()
Optional. API version displayed in Dialogflow console. If not specified,
V2 API is assumed. Clients are free to query different service endpoints
for different API versions. However, bots connectors and webhook calls will
follow the specified API version.
.google.cloud.dialogflow.v2.Agent.ApiVersion api_version = 14 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
Agent.Builder
This builder for chaining.
clearAvatarUri()
public Agent . Builder clearAvatarUri ()
Optional. The URI of the agent's avatar.
Avatars are used throughout the Dialogflow console and in the self-hosted
Web
Demo
integration.
string avatar_uri = 7 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
Agent.Builder
This builder for chaining.
clearClassificationThreshold()
public Agent . Builder clearClassificationThreshold ()
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
Agent.Builder
This builder for chaining.
clearDefaultLanguageCode()
public Agent . Builder clearDefaultLanguageCode ()
Required. The default language of the agent as a language tag. See
Language
Support
for a list of the currently supported language codes. This field cannot be
set by the Update method.
string default_language_code = 3 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
Agent.Builder
This builder for chaining.
clearDescription()
public Agent . Builder clearDescription ()
Optional. The description of this agent.
The maximum length is 500 characters. If exceeded, the request is rejected.
string description = 6 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
Agent.Builder
This builder for chaining.
clearDisplayName()
public Agent . Builder clearDisplayName ()
Required. The name of this agent.
string display_name = 2 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
Agent.Builder
This builder for chaining.
clearEnableLogging()
public Agent . Builder clearEnableLogging ()
Optional. Determines whether this agent should log conversation queries.
bool enable_logging = 8 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
Agent.Builder
This builder for chaining.
clearMatchMode() (deprecated)
public Agent . Builder clearMatchMode ()
Deprecated. google.cloud.dialogflow.v2.Agent.match_mode is deprecated. See
google/cloud/dialogflow/v2/agent.proto;l=353
Optional. Determines how intents are detected from user queries.
.google.cloud.dialogflow.v2.Agent.MatchMode match_mode = 9 [deprecated = true, (.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
Agent.Builder
This builder for chaining.
clearParent()
public Agent . Builder clearParent ()
Required. The project of this agent.
Format: projects/<Project ID> .
string parent = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }
Returns
Type
Description
Agent.Builder
This builder for chaining.
clearSupportedLanguageCodes()
public Agent . Builder clearSupportedLanguageCodes ()
Optional. The list of all languages supported by this agent (except for the
default_language_code ).
repeated string supported_language_codes = 4 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
Agent.Builder
This builder for chaining.
clearTier()
public Agent . Builder clearTier ()
Optional. The agent tier. If not specified, TIER_STANDARD is assumed.
.google.cloud.dialogflow.v2.Agent.Tier tier = 15 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
Agent.Builder
This builder for chaining.
clearTimeZone()
public Agent . Builder clearTimeZone ()
Required. The time zone of this agent from the
time zone database , e.g.,
America/New_York, Europe/Paris.
string time_zone = 5 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
Agent.Builder
This builder for chaining.
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
internalGetFieldAccessorTable()
protected GeneratedMessage . FieldAccessorTable internalGetFieldAccessorTable ()
Returns
Type
Description
FieldAccessorTable
Overrides
GeneratedMessage.Builder<BuilderType>.internalGetFieldAccessorTable()
isInitialized()
public final boolean isInitialized ()
Returns
Type
Description
boolean
Overrides
GeneratedMessage.Builder<BuilderType>.isInitialized()
mergeFrom(Agent other)
public Agent . Builder mergeFrom ( Agent other )
Parameter
Name
Description
other
Agent
Returns
Type
Description
Agent.Builder
mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public Agent . Builder mergeFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
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
Agent.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
Exceptions
Type
Description
IOException
mergeFrom(Message other)
public Agent . Builder mergeFrom ( Message other )
Parameter
Name
Description
other
Message
Returns
Type
Description
Agent.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)
setApiVersion(Agent.ApiVersion value)
public Agent . Builder setApiVersion ( Agent . ApiVersion value )
Optional. API version displayed in Dialogflow console. If not specified,
V2 API is assumed. Clients are free to query different service endpoints
for different API versions. However, bots connectors and webhook calls will
follow the specified API version.
.google.cloud.dialogflow.v2.Agent.ApiVersion api_version = 14 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
value
Agent.ApiVersion The apiVersion to set.
Returns
Type
Description
Agent.Builder
This builder for chaining.
setApiVersionValue(int value)
public Agent . Builder setApiVersionValue ( int value )
Optional. API version displayed in Dialogflow console. If not specified,
V2 API is assumed. Clients are free to query different service endpoints
for different API versions. However, bots connectors and webhook calls will
follow the specified API version.
.google.cloud.dialogflow.v2.Agent.ApiVersion api_version = 14 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
value
int The enum numeric value on the wire for apiVersion to set.
Returns
Type
Description
Agent.Builder
This builder for chaining.
setAvatarUri(String value)
public Agent . Builder setAvatarUri ( String value )
Optional. The URI of the agent's avatar.
Avatars are used throughout the Dialogflow console and in the self-hosted
Web
Demo
integration.
string avatar_uri = 7 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
value
String The avatarUri to set.
Returns
Type
Description
Agent.Builder
This builder for chaining.
setAvatarUriBytes(ByteString value)
public Agent . Builder setAvatarUriBytes ( ByteString value )
Optional. The URI of the agent's avatar.
Avatars are used throughout the Dialogflow console and in the self-hosted
Web
Demo
integration.
string avatar_uri = 7 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
value
ByteString The bytes for avatarUri to set.
Returns
Type
Description
Agent.Builder
This builder for chaining.
setClassificationThreshold(float value)
public Agent . Builder setClassificationThreshold ( float value )
Optional. To filter out false positive results and still get variety in
matched natural language inputs for your agent, you can tune the machine
learning classification threshold. If the returned score value is less than
the threshold value, then a fallback intent will be triggered or, if there
are no fallback intents defined, no intent will be triggered. The score
values range from 0.0 (completely uncertain) to 1.0 (completely certain).
If set to 0.0, the default of 0.3 is used.
float classification_threshold = 10 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
value
float The classificationThreshold to set.
Returns
Type
Description
Agent.Builder
This builder for chaining.
setDefaultLanguageCode(String value)
public Agent . Builder setDefaultLanguageCode ( String value )
Required. The default language of the agent as a language tag. See
Language
Support
for a list of the currently supported language codes. This field cannot be
set by the Update method.
string default_language_code = 3 [(.google.api.field_behavior) = REQUIRED];
Parameter
Name
Description
value
String The defaultLanguageCode to set.
Returns
Type
Description
Agent.Builder
This builder for chaining.
setDefaultLanguageCodeBytes(ByteString value)
public Agent . Builder setDefaultLanguageCodeBytes ( ByteString value )
Required. The default language of the agent as a language tag. See
Language
Support
for a list of the currently supported language codes. This field cannot be
set by the Update method.
string default_language_code = 3 [(.google.api.field_behavior) = REQUIRED];
Parameter
Name
Description
value
ByteString The bytes for defaultLanguageCode to set.
Returns
Type
Description
Agent.Builder
This builder for chaining.
setDescription(String value)
public Agent . Builder setDescription ( String value )
Optional. The description of this agent.
The maximum length is 500 characters. If exceeded, the request is rejected.
string description = 6 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
value
String The description to set.
Returns
Type
Description
Agent.Builder
This builder for chaining.
setDescriptionBytes(ByteString value)
public Agent . Builder setDescriptionBytes ( ByteString value )
Optional. The description of this agent.
The maximum length is 500 characters. If exceeded, the request is rejected.
string description = 6 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
value
ByteString The bytes for description to set.
Returns
Type
Description
Agent.Builder
This builder for chaining.
setDisplayName(String value)
public Agent . Builder setDisplayName ( String value )
Required. The name of this agent.
string display_name = 2 [(.google.api.field_behavior) = REQUIRED];
Parameter
Name
Description
value
String The displayName to set.
Returns
Type
Description
Agent.Builder
This builder for chaining.
setDisplayNameBytes(ByteString value)
public Agent . Builder setDisplayNameBytes ( ByteString value )
Required. The name of this agent.
string display_name = 2 [(.google.api.field_behavior) = REQUIRED];
Parameter
Name
Description
value
ByteString The bytes for displayName to set.
Returns
Type
Description
Agent.Builder
This builder for chaining.
setEnableLogging(boolean value)
public Agent . Builder setEnableLogging ( boolean value )
Optional. Determines whether this agent should log conversation queries.
bool enable_logging = 8 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
value
boolean The enableLogging to set.
Returns
Type
Description
Agent.Builder
This builder for chaining.
setMatchMode(Agent.MatchMode value) (deprecated)
public Agent . Builder setMatchMode ( Agent . MatchMode value )
Deprecated. google.cloud.dialogflow.v2.Agent.match_mode is deprecated. See
google/cloud/dialogflow/v2/agent.proto;l=353
Optional. Determines how intents are detected from user queries.
.google.cloud.dialogflow.v2.Agent.MatchMode match_mode = 9 [deprecated = true, (.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
value
Agent.MatchMode The matchMode to set.
Returns
Type
Description
Agent.Builder
This builder for chaining.
setMatchModeValue(int value) (deprecated)
public Agent . Builder setMatchModeValue ( int value )
Deprecated. google.cloud.dialogflow.v2.Agent.match_mode is deprecated. See
google/cloud/dialogflow/v2/agent.proto;l=353
Optional. Determines how intents are detected from user queries.
.google.cloud.dialogflow.v2.Agent.MatchMode match_mode = 9 [deprecated = true, (.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
value
int The enum numeric value on the wire for matchMode to set.
Returns
Type
Description
Agent.Builder
This builder for chaining.
setParent(String value)
public Agent . Builder setParent ( String value )
Required. The project of this agent.
Format: projects/<Project ID> .
string parent = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }
Parameter
Name
Description
value
String The parent to set.
Returns
Type
Description
Agent.Builder
This builder for chaining.
setParentBytes(ByteString value)
public Agent . Builder setParentBytes ( ByteString value )
Required. The project of this agent.
Format: projects/<Project ID> .
string parent = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }
Parameter
Name
Description
value
ByteString The bytes for parent to set.
Returns
Type
Description
Agent.Builder
This builder for chaining.
setSupportedLanguageCodes(int index, String value)
public Agent . Builder setSupportedLanguageCodes ( int index , String value )
Optional. The list of all languages supported by this agent (except for the
default_language_code ).
repeated string supported_language_codes = 4 [(.google.api.field_behavior) = OPTIONAL];
Parameters
Name
Description
index
int The index to set the value at.
value
String The supportedLanguageCodes to set.
Returns
Type
Description
Agent.Builder
This builder for chaining.
setTier(Agent.Tier value)
public Agent . Builder setTier ( Agent . Tier value )
Optional. The agent tier. If not specified, TIER_STANDARD is assumed.
.google.cloud.dialogflow.v2.Agent.Tier tier = 15 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
value
Agent.Tier The tier to set.
Returns
Type
Description
Agent.Builder
This builder for chaining.
setTierValue(int value)
public Agent . Builder setTierValue ( int value )
Optional. The agent tier. If not specified, TIER_STANDARD is assumed.
.google.cloud.dialogflow.v2.Agent.Tier tier = 15 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
value
int The enum numeric value on the wire for tier to set.
Returns
Type
Description
Agent.Builder
This builder for chaining.
setTimeZone(String value)
public Agent . Builder setTimeZone ( String value )
Required. The time zone of this agent from the
time zone database , e.g.,
America/New_York, Europe/Paris.
string time_zone = 5 [(.google.api.field_behavior) = REQUIRED];
Parameter
Name
Description
value
String The timeZone to set.
Returns
Type
Description
Agent.Builder
This builder for chaining.
setTimeZoneBytes(ByteString value)
public Agent . Builder setTimeZoneBytes ( ByteString value )
Required. The time zone of this agent from the
time zone database , e.g.,
America/New_York, Europe/Paris.
string time_zone = 5 [(.google.api.field_behavior) = REQUIRED];
Parameter
Name
Description
value
ByteString The bytes for timeZone to set.
Returns
Type
Description
Agent.Builder
This builder for chaining.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
