---
title: "Class BigQueryJob.Builder (0.16.0) \_|\_ Java client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-geminidataanalytics/latest/com.google.cloud.geminidataanalytics.v1beta.BigQueryJob.Builder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-geminidataanalytics/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-geminidataanalytics/latest/com.google.cloud.geminidataanalytics.v1beta.BigQueryJob.Builder
  title: "Class BigQueryJob.Builder (0.16.0) \_|\_ Java client libraries \_|\_ Google\
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
Class BigQueryJob.Builder (0.16.0)
Stay organized with collections
Save and categorize content based on your preferences.
0.16.0 (latest)
0.15.0
0.13.0
0.11.0
0.10.0
0.9.0
0.8.0
0.6.0
0.4.0
0.3.0
0.2.0
0.1.0
public static final class BigQueryJob . Builder extends GeneratedMessage . Builder<BigQueryJob . Builder > implements BigQueryJobOrBuilder
A BigQuery job executed by the system.
Protobuf type google.cloud.geminidataanalytics.v1beta.BigQueryJob
Inheritance
java.lang.Object >
AbstractMessageLite.Builder<MessageType,BuilderType> >
AbstractMessage.Builder<BuilderType> >
GeneratedMessage.Builder >
BigQueryJob.Builder
Implements
BigQueryJobOrBuilder
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
public BigQueryJob build ()
Returns
Type
Description
BigQueryJob
buildPartial()
public BigQueryJob buildPartial ()
Returns
Type
Description
BigQueryJob
clear()
public BigQueryJob . Builder clear ()
Returns
Type
Description
BigQueryJob.Builder
Overrides
GeneratedMessage.Builder<BuilderType>.clear()
clearDestinationTable()
public BigQueryJob . Builder clearDestinationTable ()
Optional. A reference to the destination table of the job's query results.
See
JobConfigurationQuery .
.google.cloud.geminidataanalytics.v1beta.BigQueryTableReference destination_table = 3 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
BigQueryJob.Builder
clearJobId()
public BigQueryJob . Builder clearJobId ()
Required. The ID of the job.
See
JobReference .
string job_id = 2 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
BigQueryJob.Builder
This builder for chaining.
clearLocation()
public BigQueryJob . Builder clearLocation ()
Optional. The location of the job.
See
JobReference .
string location = 5 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
BigQueryJob.Builder
This builder for chaining.
clearProjectId()
public BigQueryJob . Builder clearProjectId ()
Required. The project that the job belongs to.
See
JobReference .
string project_id = 1 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
BigQueryJob.Builder
This builder for chaining.
clearSchema()
public BigQueryJob . Builder clearSchema ()
Optional. The schema of the job's query results.
See
JobStatistics2 .
.google.cloud.geminidataanalytics.v1beta.Schema schema = 7 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
BigQueryJob.Builder
getDefaultInstanceForType()
public BigQueryJob getDefaultInstanceForType ()
Returns
Type
Description
BigQueryJob
getDescriptorForType()
public Descriptors . Descriptor getDescriptorForType ()
Returns
Type
Description
Descriptor
Overrides
GeneratedMessage.Builder<BuilderType>.getDescriptorForType()
getDestinationTable()
public BigQueryTableReference getDestinationTable ()
Optional. A reference to the destination table of the job's query results.
See
JobConfigurationQuery .
.google.cloud.geminidataanalytics.v1beta.BigQueryTableReference destination_table = 3 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
BigQueryTableReference
The destinationTable.
getDestinationTableBuilder()
public BigQueryTableReference . Builder getDestinationTableBuilder ()
Optional. A reference to the destination table of the job's query results.
See
JobConfigurationQuery .
.google.cloud.geminidataanalytics.v1beta.BigQueryTableReference destination_table = 3 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
BigQueryTableReference.Builder
getDestinationTableOrBuilder()
public BigQueryTableReferenceOrBuilder getDestinationTableOrBuilder ()
Optional. A reference to the destination table of the job's query results.
See
JobConfigurationQuery .
.google.cloud.geminidataanalytics.v1beta.BigQueryTableReference destination_table = 3 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
BigQueryTableReferenceOrBuilder
getJobId()
public String getJobId ()
Required. The ID of the job.
See
JobReference .
string job_id = 2 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
String
The jobId.
getJobIdBytes()
public ByteString getJobIdBytes ()
Required. The ID of the job.
See
JobReference .
string job_id = 2 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
ByteString
The bytes for jobId.
getLocation()
public String getLocation ()
Optional. The location of the job.
See
JobReference .
string location = 5 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
String
The location.
getLocationBytes()
public ByteString getLocationBytes ()
Optional. The location of the job.
See
JobReference .
string location = 5 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
ByteString
The bytes for location.
getProjectId()
public String getProjectId ()
Required. The project that the job belongs to.
See
JobReference .
string project_id = 1 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
String
The projectId.
getProjectIdBytes()
public ByteString getProjectIdBytes ()
Required. The project that the job belongs to.
See
JobReference .
string project_id = 1 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
ByteString
The bytes for projectId.
getSchema()
public Schema getSchema ()
Optional. The schema of the job's query results.
See
JobStatistics2 .
.google.cloud.geminidataanalytics.v1beta.Schema schema = 7 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
Schema
The schema.
getSchemaBuilder()
public Schema . Builder getSchemaBuilder ()
Optional. The schema of the job's query results.
See
JobStatistics2 .
.google.cloud.geminidataanalytics.v1beta.Schema schema = 7 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
Schema.Builder
getSchemaOrBuilder()
public SchemaOrBuilder getSchemaOrBuilder ()
Optional. The schema of the job's query results.
See
JobStatistics2 .
.google.cloud.geminidataanalytics.v1beta.Schema schema = 7 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
SchemaOrBuilder
hasDestinationTable()
public boolean hasDestinationTable ()
Optional. A reference to the destination table of the job's query results.
See
JobConfigurationQuery .
.google.cloud.geminidataanalytics.v1beta.BigQueryTableReference destination_table = 3 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
boolean
Whether the destinationTable field is set.
hasSchema()
public boolean hasSchema ()
Optional. The schema of the job's query results.
See
JobStatistics2 .
.google.cloud.geminidataanalytics.v1beta.Schema schema = 7 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
boolean
Whether the schema field is set.
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
mergeDestinationTable(BigQueryTableReference value)
public BigQueryJob . Builder mergeDestinationTable ( BigQueryTableReference value )
Optional. A reference to the destination table of the job's query results.
See
JobConfigurationQuery .
.google.cloud.geminidataanalytics.v1beta.BigQueryTableReference destination_table = 3 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
value
BigQueryTableReference
Returns
Type
Description
BigQueryJob.Builder
mergeFrom(BigQueryJob other)
public BigQueryJob . Builder mergeFrom ( BigQueryJob other )
Parameter
Name
Description
other
BigQueryJob
Returns
Type
Description
BigQueryJob.Builder
mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public BigQueryJob . Builder mergeFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
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
BigQueryJob.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
Exceptions
Type
Description
IOException
mergeFrom(Message other)
public BigQueryJob . Builder mergeFrom ( Message other )
Parameter
Name
Description
other
Message
Returns
Type
Description
BigQueryJob.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)
mergeSchema(Schema value)
public BigQueryJob . Builder mergeSchema ( Schema value )
Optional. The schema of the job's query results.
See
JobStatistics2 .
.google.cloud.geminidataanalytics.v1beta.Schema schema = 7 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
value
Schema
Returns
Type
Description
BigQueryJob.Builder
setDestinationTable(BigQueryTableReference value)
public BigQueryJob . Builder setDestinationTable ( BigQueryTableReference value )
Optional. A reference to the destination table of the job's query results.
See
JobConfigurationQuery .
.google.cloud.geminidataanalytics.v1beta.BigQueryTableReference destination_table = 3 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
value
BigQueryTableReference
Returns
Type
Description
BigQueryJob.Builder
setDestinationTable(BigQueryTableReference.Builder builderForValue)
public BigQueryJob . Builder setDestinationTable ( BigQueryTableReference . Builder builderForValue )
Optional. A reference to the destination table of the job's query results.
See
JobConfigurationQuery .
.google.cloud.geminidataanalytics.v1beta.BigQueryTableReference destination_table = 3 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
builderForValue
BigQueryTableReference.Builder
Returns
Type
Description
BigQueryJob.Builder
setJobId(String value)
public BigQueryJob . Builder setJobId ( String value )
Required. The ID of the job.
See
JobReference .
string job_id = 2 [(.google.api.field_behavior) = REQUIRED];
Parameter
Name
Description
value
String The jobId to set.
Returns
Type
Description
BigQueryJob.Builder
This builder for chaining.
setJobIdBytes(ByteString value)
public BigQueryJob . Builder setJobIdBytes ( ByteString value )
Required. The ID of the job.
See
JobReference .
string job_id = 2 [(.google.api.field_behavior) = REQUIRED];
Parameter
Name
Description
value
ByteString The bytes for jobId to set.
Returns
Type
Description
BigQueryJob.Builder
This builder for chaining.
setLocation(String value)
public BigQueryJob . Builder setLocation ( String value )
Optional. The location of the job.
See
JobReference .
string location = 5 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
value
String The location to set.
Returns
Type
Description
BigQueryJob.Builder
This builder for chaining.
setLocationBytes(ByteString value)
public BigQueryJob . Builder setLocationBytes ( ByteString value )
Optional. The location of the job.
See
JobReference .
string location = 5 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
value
ByteString The bytes for location to set.
Returns
Type
Description
BigQueryJob.Builder
This builder for chaining.
setProjectId(String value)
public BigQueryJob . Builder setProjectId ( String value )
Required. The project that the job belongs to.
See
JobReference .
string project_id = 1 [(.google.api.field_behavior) = REQUIRED];
Parameter
Name
Description
value
String The projectId to set.
Returns
Type
Description
BigQueryJob.Builder
This builder for chaining.
setProjectIdBytes(ByteString value)
public BigQueryJob . Builder setProjectIdBytes ( ByteString value )
Required. The project that the job belongs to.
See
JobReference .
string project_id = 1 [(.google.api.field_behavior) = REQUIRED];
Parameter
Name
Description
value
ByteString The bytes for projectId to set.
Returns
Type
Description
BigQueryJob.Builder
This builder for chaining.
setSchema(Schema value)
public BigQueryJob . Builder setSchema ( Schema value )
Optional. The schema of the job's query results.
See
JobStatistics2 .
.google.cloud.geminidataanalytics.v1beta.Schema schema = 7 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
value
Schema
Returns
Type
Description
BigQueryJob.Builder
setSchema(Schema.Builder builderForValue)
public BigQueryJob . Builder setSchema ( Schema . Builder builderForValue )
Optional. The schema of the job's query results.
See
JobStatistics2 .
.google.cloud.geminidataanalytics.v1beta.Schema schema = 7 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
builderForValue
Schema.Builder
Returns
Type
Description
BigQueryJob.Builder
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
