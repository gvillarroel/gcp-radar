---
title: "Class BigQueryJob (0.16.0) \_|\_ Java client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-geminidataanalytics/latest/com.google.cloud.geminidataanalytics.v1beta.BigQueryJob
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-geminidataanalytics/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-geminidataanalytics/latest/com.google.cloud.geminidataanalytics.v1beta.BigQueryJob
  title: "Class BigQueryJob (0.16.0) \_|\_ Java client libraries \_|\_ Google Cloud\
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
Class BigQueryJob (0.16.0)
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
public final class BigQueryJob extends GeneratedMessage implements BigQueryJobOrBuilder
A BigQuery job executed by the system.
Protobuf type google.cloud.geminidataanalytics.v1beta.BigQueryJob
Inheritance
Object >
AbstractMessageLite<MessageType,BuilderType> >
AbstractMessage >
GeneratedMessage >
BigQueryJob
Implements
BigQueryJobOrBuilder
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
DESTINATION_TABLE_FIELD_NUMBER
public static final int DESTINATION_TABLE_FIELD_NUMBER
Field Value
Type
Description
int
JOB_ID_FIELD_NUMBER
public static final int JOB_ID_FIELD_NUMBER
Field Value
Type
Description
int
LOCATION_FIELD_NUMBER
public static final int LOCATION_FIELD_NUMBER
Field Value
Type
Description
int
PROJECT_ID_FIELD_NUMBER
public static final int PROJECT_ID_FIELD_NUMBER
Field Value
Type
Description
int
SCHEMA_FIELD_NUMBER
public static final int SCHEMA_FIELD_NUMBER
Field Value
Type
Description
int
Static Methods
getDefaultInstance()
public static BigQueryJob getDefaultInstance ()
Returns
Type
Description
BigQueryJob
getDescriptor()
public static final Descriptors . Descriptor getDescriptor ()
Returns
Type
Description
Descriptor
newBuilder()
public static BigQueryJob . Builder newBuilder ()
Returns
Type
Description
BigQueryJob.Builder
newBuilder(BigQueryJob prototype)
public static BigQueryJob . Builder newBuilder ( BigQueryJob prototype )
Parameter
Name
Description
prototype
BigQueryJob
Returns
Type
Description
BigQueryJob.Builder
parseDelimitedFrom(InputStream input)
public static BigQueryJob parseDelimitedFrom ( InputStream input )
Parameter
Name
Description
input
InputStream
Returns
Type
Description
BigQueryJob
Exceptions
Type
Description
IOException
parseDelimitedFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
public static BigQueryJob parseDelimitedFrom ( InputStream input , ExtensionRegistryLite extensionRegistry )
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
BigQueryJob
Exceptions
Type
Description
IOException
parseFrom(byte[] data)
public static BigQueryJob parseFrom ( byte [] data )
Parameter
Name
Description
data
byte []
Returns
Type
Description
BigQueryJob
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(byte[] data, ExtensionRegistryLite extensionRegistry)
public static BigQueryJob parseFrom ( byte [] data , ExtensionRegistryLite extensionRegistry )
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
BigQueryJob
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteString data)
public static BigQueryJob parseFrom ( ByteString data )
Parameter
Name
Description
data
ByteString
Returns
Type
Description
BigQueryJob
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteString data, ExtensionRegistryLite extensionRegistry)
public static BigQueryJob parseFrom ( ByteString data , ExtensionRegistryLite extensionRegistry )
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
BigQueryJob
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(CodedInputStream input)
public static BigQueryJob parseFrom ( CodedInputStream input )
Parameter
Name
Description
input
CodedInputStream
Returns
Type
Description
BigQueryJob
Exceptions
Type
Description
IOException
parseFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public static BigQueryJob parseFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
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
BigQueryJob
Exceptions
Type
Description
IOException
parseFrom(InputStream input)
public static BigQueryJob parseFrom ( InputStream input )
Parameter
Name
Description
input
InputStream
Returns
Type
Description
BigQueryJob
Exceptions
Type
Description
IOException
parseFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
public static BigQueryJob parseFrom ( InputStream input , ExtensionRegistryLite extensionRegistry )
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
BigQueryJob
Exceptions
Type
Description
IOException
parseFrom(ByteBuffer data)
public static BigQueryJob parseFrom ( ByteBuffer data )
Parameter
Name
Description
data
ByteBuffer
Returns
Type
Description
BigQueryJob
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteBuffer data, ExtensionRegistryLite extensionRegistry)
public static BigQueryJob parseFrom ( ByteBuffer data , ExtensionRegistryLite extensionRegistry )
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
BigQueryJob
Exceptions
Type
Description
InvalidProtocolBufferException
parser()
public static Parser<BigQueryJob> parser ()
Returns
Type
Description
Parser < BigQueryJob >
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
getDefaultInstanceForType()
public BigQueryJob getDefaultInstanceForType ()
Returns
Type
Description
BigQueryJob
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
getParserForType()
public Parser<BigQueryJob> getParserForType ()
Returns
Type
Description
Parser < BigQueryJob >
Overrides
GeneratedMessage.getParserForType()
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
getSerializedSize()
public int getSerializedSize ()
Returns
Type
Description
int
Overrides
GeneratedMessage.getSerializedSize()
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
public BigQueryJob . Builder newBuilderForType ()
Returns
Type
Description
BigQueryJob.Builder
newBuilderForType(AbstractMessage.BuilderParent parent)
protected BigQueryJob . Builder newBuilderForType ( AbstractMessage . BuilderParent parent )
Parameter
Name
Description
parent
BuilderParent
Returns
Type
Description
BigQueryJob.Builder
Overrides
AbstractMessage.newBuilderForType(AbstractMessage.BuilderParent parent)
toBuilder()
public BigQueryJob . Builder toBuilder ()
Returns
Type
Description
BigQueryJob.Builder
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
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
