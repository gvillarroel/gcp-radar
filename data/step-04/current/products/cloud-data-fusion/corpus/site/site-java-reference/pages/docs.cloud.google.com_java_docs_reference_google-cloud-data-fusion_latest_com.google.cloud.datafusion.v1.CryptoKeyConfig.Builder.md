---
title: "Class CryptoKeyConfig.Builder (1.88.0) \_|\_ Java client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/com.google.cloud.datafusion.v1.CryptoKeyConfig.Builder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/com.google.cloud.datafusion.v1.CryptoKeyConfig.Builder
  title: "Class CryptoKeyConfig.Builder (1.88.0) \_|\_ Java client libraries \_|\_\
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
Class CryptoKeyConfig.Builder (1.88.0)
Stay organized with collections
Save and categorize content based on your preferences.
1.88.0 (latest)
1.87.0
1.85.0
1.83.0
1.82.0
1.81.0
1.80.0
1.78.0
1.76.0
1.75.0
1.74.0
1.73.0
1.72.0
1.70.0
1.68.0
1.67.0
1.64.0
1.63.0
1.62.0
1.60.0
1.59.0
1.58.0
1.57.0
1.56.0
1.55.0
1.54.0
1.53.0
1.52.0
1.51.0
1.49.0
1.48.0
1.47.0
1.46.0
1.45.0
1.44.0
1.43.0
1.42.0
1.41.0
1.40.0
1.39.0
1.37.0
1.36.0
1.35.0
1.34.0
1.33.0
1.32.0
1.31.0
1.30.0
1.29.0
1.28.0
1.27.0
1.24.0
1.23.0
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
1.9.0
1.8.0
1.7.0
1.6.0
1.5.0
1.4.0
1.1.1
public static final class CryptoKeyConfig . Builder extends GeneratedMessage . Builder<CryptoKeyConfig . Builder > implements CryptoKeyConfigOrBuilder
The crypto key configuration. This field is used by the Customer-managed
encryption keys (CMEK) feature.
Protobuf type google.cloud.datafusion.v1.CryptoKeyConfig
Inheritance
java.lang.Object >
AbstractMessageLite.Builder<MessageType,BuilderType> >
AbstractMessage.Builder<BuilderType> >
GeneratedMessage.Builder >
CryptoKeyConfig.Builder
Implements
CryptoKeyConfigOrBuilder
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
public CryptoKeyConfig build ()
Returns
Type
Description
CryptoKeyConfig
buildPartial()
public CryptoKeyConfig buildPartial ()
Returns
Type
Description
CryptoKeyConfig
clear()
public CryptoKeyConfig . Builder clear ()
Returns
Type
Description
CryptoKeyConfig.Builder
Overrides
GeneratedMessage.Builder<BuilderType>.clear()
clearKeyReference()
public CryptoKeyConfig . Builder clearKeyReference ()
The name of the key which is used to encrypt/decrypt customer data. For key
in Cloud KMS, the key should be in the format of
projects/*/locations/*/keyRings/*/cryptoKeys/* .
string key_reference = 1 [(.google.api.resource_reference) = { ... }
Returns
Type
Description
CryptoKeyConfig.Builder
This builder for chaining.
getDefaultInstanceForType()
public CryptoKeyConfig getDefaultInstanceForType ()
Returns
Type
Description
CryptoKeyConfig
getDescriptorForType()
public Descriptors . Descriptor getDescriptorForType ()
Returns
Type
Description
Descriptor
Overrides
GeneratedMessage.Builder<BuilderType>.getDescriptorForType()
getKeyReference()
public String getKeyReference ()
The name of the key which is used to encrypt/decrypt customer data. For key
in Cloud KMS, the key should be in the format of
projects/*/locations/*/keyRings/*/cryptoKeys/* .
string key_reference = 1 [(.google.api.resource_reference) = { ... }
Returns
Type
Description
String
The keyReference.
getKeyReferenceBytes()
public ByteString getKeyReferenceBytes ()
The name of the key which is used to encrypt/decrypt customer data. For key
in Cloud KMS, the key should be in the format of
projects/*/locations/*/keyRings/*/cryptoKeys/* .
string key_reference = 1 [(.google.api.resource_reference) = { ... }
Returns
Type
Description
ByteString
The bytes for keyReference.
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
mergeFrom(CryptoKeyConfig other)
public CryptoKeyConfig . Builder mergeFrom ( CryptoKeyConfig other )
Parameter
Name
Description
other
CryptoKeyConfig
Returns
Type
Description
CryptoKeyConfig.Builder
mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public CryptoKeyConfig . Builder mergeFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
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
CryptoKeyConfig.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
Exceptions
Type
Description
IOException
mergeFrom(Message other)
public CryptoKeyConfig . Builder mergeFrom ( Message other )
Parameter
Name
Description
other
Message
Returns
Type
Description
CryptoKeyConfig.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)
setKeyReference(String value)
public CryptoKeyConfig . Builder setKeyReference ( String value )
The name of the key which is used to encrypt/decrypt customer data. For key
in Cloud KMS, the key should be in the format of
projects/*/locations/*/keyRings/*/cryptoKeys/* .
string key_reference = 1 [(.google.api.resource_reference) = { ... }
Parameter
Name
Description
value
String The keyReference to set.
Returns
Type
Description
CryptoKeyConfig.Builder
This builder for chaining.
setKeyReferenceBytes(ByteString value)
public CryptoKeyConfig . Builder setKeyReferenceBytes ( ByteString value )
The name of the key which is used to encrypt/decrypt customer data. For key
in Cloud KMS, the key should be in the format of
projects/*/locations/*/keyRings/*/cryptoKeys/* .
string key_reference = 1 [(.google.api.resource_reference) = { ... }
Parameter
Name
Description
value
ByteString The bytes for keyReference to set.
Returns
Type
Description
CryptoKeyConfig.Builder
This builder for chaining.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-29 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-29 UTC."],[],[]]
