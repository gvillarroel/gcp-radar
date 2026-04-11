---
title: "Class AuthenticationConfig.Builder (4.85.0) \_|\_ Java client libraries \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AuthenticationConfig.Builder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AuthenticationConfig.Builder
  title: "Class AuthenticationConfig.Builder (4.85.0) \_|\_ Java client libraries\
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
Class AuthenticationConfig.Builder (4.85.0)
Stay organized with collections
Save and categorize content based on your preferences.
4.85.0 (latest)
4.84.0
4.82.0
4.80.0
4.79.0
4.78.0
4.77.0
4.75.0
4.73.0
4.72.0
4.71.0
4.70.0
4.69.0
4.67.0
4.65.0
4.64.0
4.61.0
4.60.0
4.59.0
4.57.0
4.56.0
4.55.0
4.54.0
4.53.0
4.52.0
4.51.0
4.50.0
4.49.0
4.48.0
4.46.0
4.45.0
4.44.0
4.43.0
4.42.0
4.41.0
4.40.0
4.39.0
4.38.0
4.37.0
4.36.0
4.34.0
4.33.0
4.32.0
4.31.0
4.30.0
4.29.0
4.28.0
4.27.0
4.26.0
4.25.0
4.24.0
4.21.0
4.20.0
4.19.0
4.18.0
4.17.0
4.16.0
4.15.0
4.14.0
4.13.0
4.12.0
4.11.0
4.10.0
4.9.0
4.8.0
4.6.0
4.5.0
4.4.0
4.3.0
4.2.0
4.1.0
4.0.8
3.1.2
3.0.3
2.3.1
public static final class AuthenticationConfig . Builder extends GeneratedMessage . Builder<AuthenticationConfig . Builder > implements AuthenticationConfigOrBuilder
Authentication configuration for a workload is used to set the default
identity for the workload execution.
The config specifies the type of identity (service account or user) that
will be used by workloads to access resources on the project(s).
Protobuf type google.cloud.dataproc.v1.AuthenticationConfig
Inheritance
java.lang.Object >
AbstractMessageLite.Builder<MessageType,BuilderType> >
AbstractMessage.Builder<BuilderType> >
GeneratedMessage.Builder >
AuthenticationConfig.Builder
Implements
AuthenticationConfigOrBuilder
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
public AuthenticationConfig build ()
Returns
Type
Description
AuthenticationConfig
buildPartial()
public AuthenticationConfig buildPartial ()
Returns
Type
Description
AuthenticationConfig
clear()
public AuthenticationConfig . Builder clear ()
Returns
Type
Description
AuthenticationConfig.Builder
Overrides
GeneratedMessage.Builder<BuilderType>.clear()
clearUserWorkloadAuthenticationType()
public AuthenticationConfig . Builder clearUserWorkloadAuthenticationType ()
Optional. Authentication type for the user workload running in containers.
.google.cloud.dataproc.v1.AuthenticationConfig.AuthenticationType user_workload_authentication_type = 1 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
AuthenticationConfig.Builder
This builder for chaining.
getDefaultInstanceForType()
public AuthenticationConfig getDefaultInstanceForType ()
Returns
Type
Description
AuthenticationConfig
getDescriptorForType()
public Descriptors . Descriptor getDescriptorForType ()
Returns
Type
Description
Descriptor
Overrides
GeneratedMessage.Builder<BuilderType>.getDescriptorForType()
getUserWorkloadAuthenticationType()
public AuthenticationConfig . AuthenticationType getUserWorkloadAuthenticationType ()
Optional. Authentication type for the user workload running in containers.
.google.cloud.dataproc.v1.AuthenticationConfig.AuthenticationType user_workload_authentication_type = 1 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
AuthenticationConfig.AuthenticationType
The userWorkloadAuthenticationType.
getUserWorkloadAuthenticationTypeValue()
public int getUserWorkloadAuthenticationTypeValue ()
Optional. Authentication type for the user workload running in containers.
.google.cloud.dataproc.v1.AuthenticationConfig.AuthenticationType user_workload_authentication_type = 1 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
int
The enum numeric value on the wire for userWorkloadAuthenticationType.
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
mergeFrom(AuthenticationConfig other)
public AuthenticationConfig . Builder mergeFrom ( AuthenticationConfig other )
Parameter
Name
Description
other
AuthenticationConfig
Returns
Type
Description
AuthenticationConfig.Builder
mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public AuthenticationConfig . Builder mergeFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
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
AuthenticationConfig.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
Exceptions
Type
Description
IOException
mergeFrom(Message other)
public AuthenticationConfig . Builder mergeFrom ( Message other )
Parameter
Name
Description
other
Message
Returns
Type
Description
AuthenticationConfig.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)
setUserWorkloadAuthenticationType(AuthenticationConfig.AuthenticationType value)
public AuthenticationConfig . Builder setUserWorkloadAuthenticationType ( AuthenticationConfig . AuthenticationType value )
Optional. Authentication type for the user workload running in containers.
.google.cloud.dataproc.v1.AuthenticationConfig.AuthenticationType user_workload_authentication_type = 1 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
value
AuthenticationConfig.AuthenticationType The userWorkloadAuthenticationType to set.
Returns
Type
Description
AuthenticationConfig.Builder
This builder for chaining.
setUserWorkloadAuthenticationTypeValue(int value)
public AuthenticationConfig . Builder setUserWorkloadAuthenticationTypeValue ( int value )
Optional. Authentication type for the user workload running in containers.
.google.cloud.dataproc.v1.AuthenticationConfig.AuthenticationType user_workload_authentication_type = 1 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
value
int The enum numeric value on the wire for userWorkloadAuthenticationType to set.
Returns
Type
Description
AuthenticationConfig.Builder
This builder for chaining.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
