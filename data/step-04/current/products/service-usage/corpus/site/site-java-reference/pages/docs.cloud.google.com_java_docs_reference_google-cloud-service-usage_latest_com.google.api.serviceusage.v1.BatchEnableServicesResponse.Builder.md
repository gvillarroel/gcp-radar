---
title: "Class BatchEnableServicesResponse.Builder (2.88.0) \_|\_ Java client libraries\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-service-usage/latest/com.google.api.serviceusage.v1.BatchEnableServicesResponse.Builder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-service-usage/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-service-usage/latest/com.google.api.serviceusage.v1.BatchEnableServicesResponse.Builder
  title: "Class BatchEnableServicesResponse.Builder (2.88.0) \_|\_ Java client libraries\
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
Class BatchEnableServicesResponse.Builder (2.88.0)
Stay organized with collections
Save and categorize content based on your preferences.
2.88.0 (latest)
2.87.0
2.85.0
2.83.0
2.82.0
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
2.9.0
2.8.0
2.7.0
2.6.0
2.5.0
2.4.0
2.3.7
2.2.8
public static final class BatchEnableServicesResponse . Builder extends GeneratedMessage . Builder<BatchEnableServicesResponse . Builder > implements BatchEnableServicesResponseOrBuilder
Response message for the BatchEnableServices method.
This response message is assigned to the response field of the returned
Operation when that operation is done.
Protobuf type google.api.serviceusage.v1.BatchEnableServicesResponse
Inheritance
java.lang.Object >
AbstractMessageLite.Builder<MessageType,BuilderType> >
AbstractMessage.Builder<BuilderType> >
GeneratedMessage.Builder >
BatchEnableServicesResponse.Builder
Implements
BatchEnableServicesResponseOrBuilder
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
addAllFailures(Iterable<? extends BatchEnableServicesResponse.EnableFailure> values)
public BatchEnableServicesResponse . Builder addAllFailures ( Iterable < ? extends BatchEnableServicesResponse . EnableFailure > values )
If allow_partial_success is true, and one or more services could not be
enabled, this field contains the details about each failure.
repeated .google.api.serviceusage.v1.BatchEnableServicesResponse.EnableFailure failures = 2;
Parameter
Name
Description
values
Iterable < ? extends com.google.api.serviceusage.v1.BatchEnableServicesResponse.EnableFailure >
Returns
Type
Description
BatchEnableServicesResponse.Builder
addAllServices(Iterable<? extends Service> values)
public BatchEnableServicesResponse . Builder addAllServices ( Iterable < ? extends Service > values )
The new state of the services after enabling.
repeated .google.api.serviceusage.v1.Service services = 1;
Parameter
Name
Description
values
Iterable < ? extends com.google.api.serviceusage.v1.Service >
Returns
Type
Description
BatchEnableServicesResponse.Builder
addFailures(BatchEnableServicesResponse.EnableFailure value)
public BatchEnableServicesResponse . Builder addFailures ( BatchEnableServicesResponse . EnableFailure value )
If allow_partial_success is true, and one or more services could not be
enabled, this field contains the details about each failure.
repeated .google.api.serviceusage.v1.BatchEnableServicesResponse.EnableFailure failures = 2;
Parameter
Name
Description
value
BatchEnableServicesResponse.EnableFailure
Returns
Type
Description
BatchEnableServicesResponse.Builder
addFailures(BatchEnableServicesResponse.EnableFailure.Builder builderForValue)
public BatchEnableServicesResponse . Builder addFailures ( BatchEnableServicesResponse . EnableFailure . Builder builderForValue )
If allow_partial_success is true, and one or more services could not be
enabled, this field contains the details about each failure.
repeated .google.api.serviceusage.v1.BatchEnableServicesResponse.EnableFailure failures = 2;
Parameter
Name
Description
builderForValue
BatchEnableServicesResponse.EnableFailure.Builder
Returns
Type
Description
BatchEnableServicesResponse.Builder
addFailures(int index, BatchEnableServicesResponse.EnableFailure value)
public BatchEnableServicesResponse . Builder addFailures ( int index , BatchEnableServicesResponse . EnableFailure value )
If allow_partial_success is true, and one or more services could not be
enabled, this field contains the details about each failure.
repeated .google.api.serviceusage.v1.BatchEnableServicesResponse.EnableFailure failures = 2;
Parameters
Name
Description
index
int
value
BatchEnableServicesResponse.EnableFailure
Returns
Type
Description
BatchEnableServicesResponse.Builder
addFailures(int index, BatchEnableServicesResponse.EnableFailure.Builder builderForValue)
public BatchEnableServicesResponse . Builder addFailures ( int index , BatchEnableServicesResponse . EnableFailure . Builder builderForValue )
If allow_partial_success is true, and one or more services could not be
enabled, this field contains the details about each failure.
repeated .google.api.serviceusage.v1.BatchEnableServicesResponse.EnableFailure failures = 2;
Parameters
Name
Description
index
int
builderForValue
BatchEnableServicesResponse.EnableFailure.Builder
Returns
Type
Description
BatchEnableServicesResponse.Builder
addFailuresBuilder()
public BatchEnableServicesResponse . EnableFailure . Builder addFailuresBuilder ()
If allow_partial_success is true, and one or more services could not be
enabled, this field contains the details about each failure.
repeated .google.api.serviceusage.v1.BatchEnableServicesResponse.EnableFailure failures = 2;
Returns
Type
Description
BatchEnableServicesResponse.EnableFailure.Builder
addFailuresBuilder(int index)
public BatchEnableServicesResponse . EnableFailure . Builder addFailuresBuilder ( int index )
If allow_partial_success is true, and one or more services could not be
enabled, this field contains the details about each failure.
repeated .google.api.serviceusage.v1.BatchEnableServicesResponse.EnableFailure failures = 2;
Parameter
Name
Description
index
int
Returns
Type
Description
BatchEnableServicesResponse.EnableFailure.Builder
addServices(Service value)
public BatchEnableServicesResponse . Builder addServices ( Service value )
The new state of the services after enabling.
repeated .google.api.serviceusage.v1.Service services = 1;
Parameter
Name
Description
value
Service
Returns
Type
Description
BatchEnableServicesResponse.Builder
addServices(Service.Builder builderForValue)
public BatchEnableServicesResponse . Builder addServices ( Service . Builder builderForValue )
The new state of the services after enabling.
repeated .google.api.serviceusage.v1.Service services = 1;
Parameter
Name
Description
builderForValue
Service.Builder
Returns
Type
Description
BatchEnableServicesResponse.Builder
addServices(int index, Service value)
public BatchEnableServicesResponse . Builder addServices ( int index , Service value )
The new state of the services after enabling.
repeated .google.api.serviceusage.v1.Service services = 1;
Parameters
Name
Description
index
int
value
Service
Returns
Type
Description
BatchEnableServicesResponse.Builder
addServices(int index, Service.Builder builderForValue)
public BatchEnableServicesResponse . Builder addServices ( int index , Service . Builder builderForValue )
The new state of the services after enabling.
repeated .google.api.serviceusage.v1.Service services = 1;
Parameters
Name
Description
index
int
builderForValue
Service.Builder
Returns
Type
Description
BatchEnableServicesResponse.Builder
addServicesBuilder()
public Service . Builder addServicesBuilder ()
The new state of the services after enabling.
repeated .google.api.serviceusage.v1.Service services = 1;
Returns
Type
Description
Service.Builder
addServicesBuilder(int index)
public Service . Builder addServicesBuilder ( int index )
The new state of the services after enabling.
repeated .google.api.serviceusage.v1.Service services = 1;
Parameter
Name
Description
index
int
Returns
Type
Description
Service.Builder
build()
public BatchEnableServicesResponse build ()
Returns
Type
Description
BatchEnableServicesResponse
buildPartial()
public BatchEnableServicesResponse buildPartial ()
Returns
Type
Description
BatchEnableServicesResponse
clear()
public BatchEnableServicesResponse . Builder clear ()
Returns
Type
Description
BatchEnableServicesResponse.Builder
Overrides
GeneratedMessage.Builder<BuilderType>.clear()
clearFailures()
public BatchEnableServicesResponse . Builder clearFailures ()
If allow_partial_success is true, and one or more services could not be
enabled, this field contains the details about each failure.
repeated .google.api.serviceusage.v1.BatchEnableServicesResponse.EnableFailure failures = 2;
Returns
Type
Description
BatchEnableServicesResponse.Builder
clearServices()
public BatchEnableServicesResponse . Builder clearServices ()
The new state of the services after enabling.
repeated .google.api.serviceusage.v1.Service services = 1;
Returns
Type
Description
BatchEnableServicesResponse.Builder
getDefaultInstanceForType()
public BatchEnableServicesResponse getDefaultInstanceForType ()
Returns
Type
Description
BatchEnableServicesResponse
getDescriptorForType()
public Descriptors . Descriptor getDescriptorForType ()
Returns
Type
Description
Descriptor
Overrides
GeneratedMessage.Builder<BuilderType>.getDescriptorForType()
getFailures(int index)
public BatchEnableServicesResponse . EnableFailure getFailures ( int index )
If allow_partial_success is true, and one or more services could not be
enabled, this field contains the details about each failure.
repeated .google.api.serviceusage.v1.BatchEnableServicesResponse.EnableFailure failures = 2;
Parameter
Name
Description
index
int
Returns
Type
Description
BatchEnableServicesResponse.EnableFailure
getFailuresBuilder(int index)
public BatchEnableServicesResponse . EnableFailure . Builder getFailuresBuilder ( int index )
If allow_partial_success is true, and one or more services could not be
enabled, this field contains the details about each failure.
repeated .google.api.serviceusage.v1.BatchEnableServicesResponse.EnableFailure failures = 2;
Parameter
Name
Description
index
int
Returns
Type
Description
BatchEnableServicesResponse.EnableFailure.Builder
getFailuresBuilderList()
public List<BatchEnableServicesResponse . EnableFailure . Builder > getFailuresBuilderList ()
If allow_partial_success is true, and one or more services could not be
enabled, this field contains the details about each failure.
repeated .google.api.serviceusage.v1.BatchEnableServicesResponse.EnableFailure failures = 2;
Returns
Type
Description
List < Builder >
getFailuresCount()
public int getFailuresCount ()
If allow_partial_success is true, and one or more services could not be
enabled, this field contains the details about each failure.
repeated .google.api.serviceusage.v1.BatchEnableServicesResponse.EnableFailure failures = 2;
Returns
Type
Description
int
getFailuresList()
public List<BatchEnableServicesResponse . EnableFailure > getFailuresList ()
If allow_partial_success is true, and one or more services could not be
enabled, this field contains the details about each failure.
repeated .google.api.serviceusage.v1.BatchEnableServicesResponse.EnableFailure failures = 2;
Returns
Type
Description
List < EnableFailure >
getFailuresOrBuilder(int index)
public BatchEnableServicesResponse . EnableFailureOrBuilder getFailuresOrBuilder ( int index )
If allow_partial_success is true, and one or more services could not be
enabled, this field contains the details about each failure.
repeated .google.api.serviceusage.v1.BatchEnableServicesResponse.EnableFailure failures = 2;
Parameter
Name
Description
index
int
Returns
Type
Description
BatchEnableServicesResponse.EnableFailureOrBuilder
getFailuresOrBuilderList()
public List < ? extends BatchEnableServicesResponse . EnableFailureOrBuilder > getFailuresOrBuilderList ()
If allow_partial_success is true, and one or more services could not be
enabled, this field contains the details about each failure.
repeated .google.api.serviceusage.v1.BatchEnableServicesResponse.EnableFailure failures = 2;
Returns
Type
Description
List < ? extends com.google.api.serviceusage.v1.BatchEnableServicesResponse.EnableFailureOrBuilder >
getServices(int index)
public Service getServices ( int index )
The new state of the services after enabling.
repeated .google.api.serviceusage.v1.Service services = 1;
Parameter
Name
Description
index
int
Returns
Type
Description
Service
getServicesBuilder(int index)
public Service . Builder getServicesBuilder ( int index )
The new state of the services after enabling.
repeated .google.api.serviceusage.v1.Service services = 1;
Parameter
Name
Description
index
int
Returns
Type
Description
Service.Builder
getServicesBuilderList()
public List<Service . Builder > getServicesBuilderList ()
The new state of the services after enabling.
repeated .google.api.serviceusage.v1.Service services = 1;
Returns
Type
Description
List < Builder >
getServicesCount()
public int getServicesCount ()
The new state of the services after enabling.
repeated .google.api.serviceusage.v1.Service services = 1;
Returns
Type
Description
int
getServicesList()
public List<Service> getServicesList ()
The new state of the services after enabling.
repeated .google.api.serviceusage.v1.Service services = 1;
Returns
Type
Description
List < Service >
getServicesOrBuilder(int index)
public ServiceOrBuilder getServicesOrBuilder ( int index )
The new state of the services after enabling.
repeated .google.api.serviceusage.v1.Service services = 1;
Parameter
Name
Description
index
int
Returns
Type
Description
ServiceOrBuilder
getServicesOrBuilderList()
public List < ? extends ServiceOrBuilder > getServicesOrBuilderList ()
The new state of the services after enabling.
repeated .google.api.serviceusage.v1.Service services = 1;
Returns
Type
Description
List < ? extends com.google.api.serviceusage.v1.ServiceOrBuilder >
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
mergeFrom(BatchEnableServicesResponse other)
public BatchEnableServicesResponse . Builder mergeFrom ( BatchEnableServicesResponse other )
Parameter
Name
Description
other
BatchEnableServicesResponse
Returns
Type
Description
BatchEnableServicesResponse.Builder
mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public BatchEnableServicesResponse . Builder mergeFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
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
BatchEnableServicesResponse.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
Exceptions
Type
Description
IOException
mergeFrom(Message other)
public BatchEnableServicesResponse . Builder mergeFrom ( Message other )
Parameter
Name
Description
other
Message
Returns
Type
Description
BatchEnableServicesResponse.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)
removeFailures(int index)
public BatchEnableServicesResponse . Builder removeFailures ( int index )
If allow_partial_success is true, and one or more services could not be
enabled, this field contains the details about each failure.
repeated .google.api.serviceusage.v1.BatchEnableServicesResponse.EnableFailure failures = 2;
Parameter
Name
Description
index
int
Returns
Type
Description
BatchEnableServicesResponse.Builder
removeServices(int index)
public BatchEnableServicesResponse . Builder removeServices ( int index )
The new state of the services after enabling.
repeated .google.api.serviceusage.v1.Service services = 1;
Parameter
Name
Description
index
int
Returns
Type
Description
BatchEnableServicesResponse.Builder
setFailures(int index, BatchEnableServicesResponse.EnableFailure value)
public BatchEnableServicesResponse . Builder setFailures ( int index , BatchEnableServicesResponse . EnableFailure value )
If allow_partial_success is true, and one or more services could not be
enabled, this field contains the details about each failure.
repeated .google.api.serviceusage.v1.BatchEnableServicesResponse.EnableFailure failures = 2;
Parameters
Name
Description
index
int
value
BatchEnableServicesResponse.EnableFailure
Returns
Type
Description
BatchEnableServicesResponse.Builder
setFailures(int index, BatchEnableServicesResponse.EnableFailure.Builder builderForValue)
public BatchEnableServicesResponse . Builder setFailures ( int index , BatchEnableServicesResponse . EnableFailure . Builder builderForValue )
If allow_partial_success is true, and one or more services could not be
enabled, this field contains the details about each failure.
repeated .google.api.serviceusage.v1.BatchEnableServicesResponse.EnableFailure failures = 2;
Parameters
Name
Description
index
int
builderForValue
BatchEnableServicesResponse.EnableFailure.Builder
Returns
Type
Description
BatchEnableServicesResponse.Builder
setServices(int index, Service value)
public BatchEnableServicesResponse . Builder setServices ( int index , Service value )
The new state of the services after enabling.
repeated .google.api.serviceusage.v1.Service services = 1;
Parameters
Name
Description
index
int
value
Service
Returns
Type
Description
BatchEnableServicesResponse.Builder
setServices(int index, Service.Builder builderForValue)
public BatchEnableServicesResponse . Builder setServices ( int index , Service . Builder builderForValue )
The new state of the services after enabling.
repeated .google.api.serviceusage.v1.Service services = 1;
Parameters
Name
Description
index
int
builderForValue
Service.Builder
Returns
Type
Description
BatchEnableServicesResponse.Builder
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
