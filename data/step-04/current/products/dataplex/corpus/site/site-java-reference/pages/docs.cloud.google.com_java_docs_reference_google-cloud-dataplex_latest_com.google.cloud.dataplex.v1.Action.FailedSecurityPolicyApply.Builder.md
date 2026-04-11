---
title: "Class Action.FailedSecurityPolicyApply.Builder (1.86.0) \_|\_ Java client\
  \ libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1.Action.FailedSecurityPolicyApply.Builder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1.Action.FailedSecurityPolicyApply.Builder
  title: "Class Action.FailedSecurityPolicyApply.Builder (1.86.0) \_|\_ Java client\
    \ libraries \_|\_ Google Cloud Documentation"
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
Class Action.FailedSecurityPolicyApply.Builder (1.86.0)
Stay organized with collections
Save and categorize content based on your preferences.
1.86.0 (latest)
1.85.0
1.83.0
1.81.0
1.80.0
1.79.0
1.78.0
1.76.0
1.74.0
1.73.0
1.72.0
1.71.0
1.70.0
1.68.0
1.66.0
1.65.0
1.62.0
1.61.0
1.60.0
1.58.0
1.57.0
1.56.0
1.55.0
1.54.0
1.53.0
1.52.0
1.51.0
1.50.0
1.49.0
1.47.0
1.46.0
1.45.0
1.44.0
1.43.0
1.42.0
1.41.0
1.40.0
1.39.0
1.38.0
1.37.0
1.35.0
1.34.0
1.33.0
1.32.0
1.31.0
1.30.0
1.29.0
1.28.0
1.27.0
1.26.0
1.25.0
1.22.0
1.21.0
1.20.0
1.19.0
1.18.0
1.17.0
1.16.0
1.15.0
1.14.0
1.13.0
1.12.0
1.11.0
1.10.0
1.9.0
1.7.0
1.6.0
1.5.0
1.4.0
1.3.0
1.2.0
1.1.2
1.0.1
0.2.2
public static final class Action . FailedSecurityPolicyApply . Builder extends GeneratedMessage . Builder<Action . FailedSecurityPolicyApply . Builder > implements Action . FailedSecurityPolicyApplyOrBuilder
Failed to apply security policy to the managed resource(s) under a
lake, zone or an asset. For a lake or zone resource, one or more underlying
assets has a failure applying security policy to the associated managed
resource.
Protobuf type google.cloud.dataplex.v1.Action.FailedSecurityPolicyApply
Inheritance
java.lang.Object >
AbstractMessageLite.Builder<MessageType,BuilderType> >
AbstractMessage.Builder<BuilderType> >
GeneratedMessage.Builder >
Action.FailedSecurityPolicyApply.Builder
Implements
Action.FailedSecurityPolicyApplyOrBuilder
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
public Action . FailedSecurityPolicyApply build ()
Returns
Type
Description
Action.FailedSecurityPolicyApply
buildPartial()
public Action . FailedSecurityPolicyApply buildPartial ()
Returns
Type
Description
Action.FailedSecurityPolicyApply
clear()
public Action . FailedSecurityPolicyApply . Builder clear ()
Returns
Type
Description
Action.FailedSecurityPolicyApply.Builder
Overrides
GeneratedMessage.Builder<BuilderType>.clear()
clearAsset()
public Action . FailedSecurityPolicyApply . Builder clearAsset ()
Resource name of one of the assets with failing security policy
application. Populated for a lake or zone resource only.
string asset = 1;
Returns
Type
Description
Action.FailedSecurityPolicyApply.Builder
This builder for chaining.
getAsset()
public String getAsset ()
Resource name of one of the assets with failing security policy
application. Populated for a lake or zone resource only.
string asset = 1;
Returns
Type
Description
String
The asset.
getAssetBytes()
public ByteString getAssetBytes ()
Resource name of one of the assets with failing security policy
application. Populated for a lake or zone resource only.
string asset = 1;
Returns
Type
Description
ByteString
The bytes for asset.
getDefaultInstanceForType()
public Action . FailedSecurityPolicyApply getDefaultInstanceForType ()
Returns
Type
Description
Action.FailedSecurityPolicyApply
getDescriptorForType()
public Descriptors . Descriptor getDescriptorForType ()
Returns
Type
Description
Descriptor
Overrides
GeneratedMessage.Builder<BuilderType>.getDescriptorForType()
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
mergeFrom(Action.FailedSecurityPolicyApply other)
public Action . FailedSecurityPolicyApply . Builder mergeFrom ( Action . FailedSecurityPolicyApply other )
Parameter
Name
Description
other
Action.FailedSecurityPolicyApply
Returns
Type
Description
Action.FailedSecurityPolicyApply.Builder
mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public Action . FailedSecurityPolicyApply . Builder mergeFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
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
Action.FailedSecurityPolicyApply.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
Exceptions
Type
Description
IOException
mergeFrom(Message other)
public Action . FailedSecurityPolicyApply . Builder mergeFrom ( Message other )
Parameter
Name
Description
other
Message
Returns
Type
Description
Action.FailedSecurityPolicyApply.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)
setAsset(String value)
public Action . FailedSecurityPolicyApply . Builder setAsset ( String value )
Resource name of one of the assets with failing security policy
application. Populated for a lake or zone resource only.
string asset = 1;
Parameter
Name
Description
value
String The asset to set.
Returns
Type
Description
Action.FailedSecurityPolicyApply.Builder
This builder for chaining.
setAssetBytes(ByteString value)
public Action . FailedSecurityPolicyApply . Builder setAssetBytes ( ByteString value )
Resource name of one of the assets with failing security policy
application. Populated for a lake or zone resource only.
string asset = 1;
Parameter
Name
Description
value
ByteString The bytes for asset to set.
Returns
Type
Description
Action.FailedSecurityPolicyApply.Builder
This builder for chaining.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
