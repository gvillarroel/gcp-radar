---
title: "Class CloudSqlInstance.Builder (0.88.0) \_|\_ Java client libraries \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.CloudSqlInstance.Builder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.CloudSqlInstance.Builder
  title: "Class CloudSqlInstance.Builder (0.88.0) \_|\_ Java client libraries \_|\_\
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
Class CloudSqlInstance.Builder (0.88.0)
Stay organized with collections
Save and categorize content based on your preferences.
0.88.0 (latest)
0.87.0
0.85.0
0.83.0
0.82.0
0.80.0
0.78.0
0.76.0
0.75.0
0.74.0
0.73.0
0.72.0
0.70.0
0.68.0
0.67.0
0.64.0
0.63.0
0.62.0
0.60.0
0.59.0
0.58.0
0.57.0
0.56.0
0.55.0
0.54.0
0.53.0
0.52.0
0.51.0
0.49.0
0.48.0
0.47.0
0.46.0
0.45.0
0.44.0
0.43.0
0.42.0
0.41.0
0.40.0
0.39.0
0.37.0
0.36.0
0.35.0
0.34.0
0.33.0
0.32.0
0.31.0
0.30.0
0.29.0
0.28.0
0.27.0
0.24.0
0.23.0
0.22.0
0.21.0
0.20.0
0.19.0
0.18.0
0.17.0
0.16.0
0.15.0
0.14.0
0.13.0
0.12.0
0.11.0
0.9.0
0.8.0
0.7.0
0.6.0
0.5.0
0.4.0
0.3.5
0.2.1
0.1.2
public static final class CloudSqlInstance . Builder extends GeneratedMessage . Builder<CloudSqlInstance . Builder > implements CloudSqlInstanceOrBuilder
Represents a set of Cloud SQL instances. Each one will be available under
/cloudsql/[instance]. Visit
https://cloud.google.com/sql/docs/mysql/connect-run for more information on
how to connect Cloud SQL and Cloud Run.
Protobuf type google.cloud.run.v2.CloudSqlInstance
Inheritance
java.lang.Object >
AbstractMessageLite.Builder<MessageType,BuilderType> >
AbstractMessage.Builder<BuilderType> >
GeneratedMessage.Builder >
CloudSqlInstance.Builder
Implements
CloudSqlInstanceOrBuilder
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
addAllInstances(Iterable<String> values)
public CloudSqlInstance . Builder addAllInstances ( Iterable<String> values )
The Cloud SQL instance connection names, as can be found in
https://console.cloud.google.com/sql/instances . Visit
https://cloud.google.com/sql/docs/mysql/connect-run for more information on
how to connect Cloud SQL and Cloud Run. Format:
{project}:{location}:{instance}
repeated string instances = 1;
Parameter
Name
Description
values
Iterable < String > The instances to add.
Returns
Type
Description
CloudSqlInstance.Builder
This builder for chaining.
addInstances(String value)
public CloudSqlInstance . Builder addInstances ( String value )
The Cloud SQL instance connection names, as can be found in
https://console.cloud.google.com/sql/instances . Visit
https://cloud.google.com/sql/docs/mysql/connect-run for more information on
how to connect Cloud SQL and Cloud Run. Format:
{project}:{location}:{instance}
repeated string instances = 1;
Parameter
Name
Description
value
String The instances to add.
Returns
Type
Description
CloudSqlInstance.Builder
This builder for chaining.
addInstancesBytes(ByteString value)
public CloudSqlInstance . Builder addInstancesBytes ( ByteString value )
The Cloud SQL instance connection names, as can be found in
https://console.cloud.google.com/sql/instances . Visit
https://cloud.google.com/sql/docs/mysql/connect-run for more information on
how to connect Cloud SQL and Cloud Run. Format:
{project}:{location}:{instance}
repeated string instances = 1;
Parameter
Name
Description
value
ByteString The bytes of the instances to add.
Returns
Type
Description
CloudSqlInstance.Builder
This builder for chaining.
build()
public CloudSqlInstance build ()
Returns
Type
Description
CloudSqlInstance
buildPartial()
public CloudSqlInstance buildPartial ()
Returns
Type
Description
CloudSqlInstance
clear()
public CloudSqlInstance . Builder clear ()
Returns
Type
Description
CloudSqlInstance.Builder
Overrides
GeneratedMessage.Builder<BuilderType>.clear()
clearInstances()
public CloudSqlInstance . Builder clearInstances ()
The Cloud SQL instance connection names, as can be found in
https://console.cloud.google.com/sql/instances . Visit
https://cloud.google.com/sql/docs/mysql/connect-run for more information on
how to connect Cloud SQL and Cloud Run. Format:
{project}:{location}:{instance}
repeated string instances = 1;
Returns
Type
Description
CloudSqlInstance.Builder
This builder for chaining.
getDefaultInstanceForType()
public CloudSqlInstance getDefaultInstanceForType ()
Returns
Type
Description
CloudSqlInstance
getDescriptorForType()
public Descriptors . Descriptor getDescriptorForType ()
Returns
Type
Description
Descriptor
Overrides
GeneratedMessage.Builder<BuilderType>.getDescriptorForType()
getInstances(int index)
public String getInstances ( int index )
The Cloud SQL instance connection names, as can be found in
https://console.cloud.google.com/sql/instances . Visit
https://cloud.google.com/sql/docs/mysql/connect-run for more information on
how to connect Cloud SQL and Cloud Run. Format:
{project}:{location}:{instance}
repeated string instances = 1;
Parameter
Name
Description
index
int The index of the element to return.
Returns
Type
Description
String
The instances at the given index.
getInstancesBytes(int index)
public ByteString getInstancesBytes ( int index )
The Cloud SQL instance connection names, as can be found in
https://console.cloud.google.com/sql/instances . Visit
https://cloud.google.com/sql/docs/mysql/connect-run for more information on
how to connect Cloud SQL and Cloud Run. Format:
{project}:{location}:{instance}
repeated string instances = 1;
Parameter
Name
Description
index
int The index of the value to return.
Returns
Type
Description
ByteString
The bytes of the instances at the given index.
getInstancesCount()
public int getInstancesCount ()
The Cloud SQL instance connection names, as can be found in
https://console.cloud.google.com/sql/instances . Visit
https://cloud.google.com/sql/docs/mysql/connect-run for more information on
how to connect Cloud SQL and Cloud Run. Format:
{project}:{location}:{instance}
repeated string instances = 1;
Returns
Type
Description
int
The count of instances.
getInstancesList()
public ProtocolStringList getInstancesList ()
The Cloud SQL instance connection names, as can be found in
https://console.cloud.google.com/sql/instances . Visit
https://cloud.google.com/sql/docs/mysql/connect-run for more information on
how to connect Cloud SQL and Cloud Run. Format:
{project}:{location}:{instance}
repeated string instances = 1;
Returns
Type
Description
ProtocolStringList
A list containing the instances.
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
mergeFrom(CloudSqlInstance other)
public CloudSqlInstance . Builder mergeFrom ( CloudSqlInstance other )
Parameter
Name
Description
other
CloudSqlInstance
Returns
Type
Description
CloudSqlInstance.Builder
mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public CloudSqlInstance . Builder mergeFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
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
CloudSqlInstance.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
Exceptions
Type
Description
IOException
mergeFrom(Message other)
public CloudSqlInstance . Builder mergeFrom ( Message other )
Parameter
Name
Description
other
Message
Returns
Type
Description
CloudSqlInstance.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)
setInstances(int index, String value)
public CloudSqlInstance . Builder setInstances ( int index , String value )
The Cloud SQL instance connection names, as can be found in
https://console.cloud.google.com/sql/instances . Visit
https://cloud.google.com/sql/docs/mysql/connect-run for more information on
how to connect Cloud SQL and Cloud Run. Format:
{project}:{location}:{instance}
repeated string instances = 1;
Parameters
Name
Description
index
int The index to set the value at.
value
String The instances to set.
Returns
Type
Description
CloudSqlInstance.Builder
This builder for chaining.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
