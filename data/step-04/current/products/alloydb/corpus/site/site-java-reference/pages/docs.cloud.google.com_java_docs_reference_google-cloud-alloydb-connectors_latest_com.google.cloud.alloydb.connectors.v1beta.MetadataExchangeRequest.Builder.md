---
title: "Class MetadataExchangeRequest.Builder (0.66.0) \_|\_ Java client libraries\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-alloydb-connectors/latest/com.google.cloud.alloydb.connectors.v1beta.MetadataExchangeRequest.Builder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-alloydb-connectors/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-alloydb-connectors/latest/com.google.cloud.alloydb.connectors.v1beta.MetadataExchangeRequest.Builder
  title: "Class MetadataExchangeRequest.Builder (0.66.0) \_|\_ Java client libraries\
    \ \_|\_ Google Cloud Documentation"
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
Class MetadataExchangeRequest.Builder (0.66.0)
Stay organized with collections
Save and categorize content based on your preferences.
0.66.0 (latest)
0.65.0
0.63.0
0.61.0
0.60.0
0.59.0
0.58.0
0.56.0
0.54.0
0.53.0
0.52.0
0.51.0
0.50.0
0.48.0
0.46.0
0.45.0
0.42.0
0.41.0
0.40.0
0.38.0
0.37.0
0.36.0
0.35.0
0.34.0
0.33.0
0.32.0
0.31.0
0.30.0
0.29.0
0.27.0
0.26.0
0.25.0
0.24.0
0.23.0
0.22.0
0.21.0
0.20.0
0.19.0
0.18.0
0.17.0
0.15.0
0.14.0
0.13.0
0.12.0
0.11.0
0.10.0
0.9.0
0.8.0
0.7.0
0.6.0
0.5.0
0.2.0
0.1.0
public static final class MetadataExchangeRequest . Builder extends GeneratedMessage . Builder<MetadataExchangeRequest . Builder > implements MetadataExchangeRequestOrBuilder
Message used by AlloyDB connectors to exchange client and connection metadata
with the server after a successful TLS handshake. This metadata includes an
IAM token, which is used to authenticate users based on their IAM identity.
The sole purpose of this message is for the use of AlloyDB connectors.
Clients should not rely on this message directly as there can be breaking
changes in the future.
Protobuf type google.cloud.alloydb.connectors.v1beta.MetadataExchangeRequest
Inheritance
java.lang.Object >
AbstractMessageLite.Builder<MessageType,BuilderType> >
AbstractMessage.Builder<BuilderType> >
GeneratedMessage.Builder >
MetadataExchangeRequest.Builder
Implements
MetadataExchangeRequestOrBuilder
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
public MetadataExchangeRequest build ()
Returns
Type
Description
MetadataExchangeRequest
buildPartial()
public MetadataExchangeRequest buildPartial ()
Returns
Type
Description
MetadataExchangeRequest
clear()
public MetadataExchangeRequest . Builder clear ()
Returns
Type
Description
MetadataExchangeRequest.Builder
Overrides
GeneratedMessage.Builder<BuilderType>.clear()
clearAuthType()
public MetadataExchangeRequest . Builder clearAuthType ()
Authentication type.
.google.cloud.alloydb.connectors.v1beta.MetadataExchangeRequest.AuthType auth_type = 2;
Returns
Type
Description
MetadataExchangeRequest.Builder
This builder for chaining.
clearOauth2Token()
public MetadataExchangeRequest . Builder clearOauth2Token ()
IAM token used for both IAM user authentiation and
alloydb.instances.connect permission check.
string oauth2_token = 3;
Returns
Type
Description
MetadataExchangeRequest.Builder
This builder for chaining.
clearUserAgent()
public MetadataExchangeRequest . Builder clearUserAgent ()
Optional. Connector information.
string user_agent = 1 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
MetadataExchangeRequest.Builder
This builder for chaining.
getAuthType()
public MetadataExchangeRequest . AuthType getAuthType ()
Authentication type.
.google.cloud.alloydb.connectors.v1beta.MetadataExchangeRequest.AuthType auth_type = 2;
Returns
Type
Description
MetadataExchangeRequest.AuthType
The authType.
getAuthTypeValue()
public int getAuthTypeValue ()
Authentication type.
.google.cloud.alloydb.connectors.v1beta.MetadataExchangeRequest.AuthType auth_type = 2;
Returns
Type
Description
int
The enum numeric value on the wire for authType.
getDefaultInstanceForType()
public MetadataExchangeRequest getDefaultInstanceForType ()
Returns
Type
Description
MetadataExchangeRequest
getDescriptorForType()
public Descriptors . Descriptor getDescriptorForType ()
Returns
Type
Description
Descriptor
Overrides
GeneratedMessage.Builder<BuilderType>.getDescriptorForType()
getOauth2Token()
public String getOauth2Token ()
IAM token used for both IAM user authentiation and
alloydb.instances.connect permission check.
string oauth2_token = 3;
Returns
Type
Description
String
The oauth2Token.
getOauth2TokenBytes()
public ByteString getOauth2TokenBytes ()
IAM token used for both IAM user authentiation and
alloydb.instances.connect permission check.
string oauth2_token = 3;
Returns
Type
Description
ByteString
The bytes for oauth2Token.
getUserAgent()
public String getUserAgent ()
Optional. Connector information.
string user_agent = 1 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
String
The userAgent.
getUserAgentBytes()
public ByteString getUserAgentBytes ()
Optional. Connector information.
string user_agent = 1 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
ByteString
The bytes for userAgent.
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
mergeFrom(MetadataExchangeRequest other)
public MetadataExchangeRequest . Builder mergeFrom ( MetadataExchangeRequest other )
Parameter
Name
Description
other
MetadataExchangeRequest
Returns
Type
Description
MetadataExchangeRequest.Builder
mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public MetadataExchangeRequest . Builder mergeFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
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
MetadataExchangeRequest.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
Exceptions
Type
Description
IOException
mergeFrom(Message other)
public MetadataExchangeRequest . Builder mergeFrom ( Message other )
Parameter
Name
Description
other
Message
Returns
Type
Description
MetadataExchangeRequest.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)
setAuthType(MetadataExchangeRequest.AuthType value)
public MetadataExchangeRequest . Builder setAuthType ( MetadataExchangeRequest . AuthType value )
Authentication type.
.google.cloud.alloydb.connectors.v1beta.MetadataExchangeRequest.AuthType auth_type = 2;
Parameter
Name
Description
value
MetadataExchangeRequest.AuthType The authType to set.
Returns
Type
Description
MetadataExchangeRequest.Builder
This builder for chaining.
setAuthTypeValue(int value)
public MetadataExchangeRequest . Builder setAuthTypeValue ( int value )
Authentication type.
.google.cloud.alloydb.connectors.v1beta.MetadataExchangeRequest.AuthType auth_type = 2;
Parameter
Name
Description
value
int The enum numeric value on the wire for authType to set.
Returns
Type
Description
MetadataExchangeRequest.Builder
This builder for chaining.
setOauth2Token(String value)
public MetadataExchangeRequest . Builder setOauth2Token ( String value )
IAM token used for both IAM user authentiation and
alloydb.instances.connect permission check.
string oauth2_token = 3;
Parameter
Name
Description
value
String The oauth2Token to set.
Returns
Type
Description
MetadataExchangeRequest.Builder
This builder for chaining.
setOauth2TokenBytes(ByteString value)
public MetadataExchangeRequest . Builder setOauth2TokenBytes ( ByteString value )
IAM token used for both IAM user authentiation and
alloydb.instances.connect permission check.
string oauth2_token = 3;
Parameter
Name
Description
value
ByteString The bytes for oauth2Token to set.
Returns
Type
Description
MetadataExchangeRequest.Builder
This builder for chaining.
setUserAgent(String value)
public MetadataExchangeRequest . Builder setUserAgent ( String value )
Optional. Connector information.
string user_agent = 1 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
value
String The userAgent to set.
Returns
Type
Description
MetadataExchangeRequest.Builder
This builder for chaining.
setUserAgentBytes(ByteString value)
public MetadataExchangeRequest . Builder setUserAgentBytes ( ByteString value )
Optional. Connector information.
string user_agent = 1 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
value
ByteString The bytes for userAgent to set.
Returns
Type
Description
MetadataExchangeRequest.Builder
This builder for chaining.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-29 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-29 UTC."],[],[]]
