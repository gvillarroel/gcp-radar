---
title: "Class CreateJobFromTemplateRequest (0.92.0) \_|\_ Java client libraries \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3.CreateJobFromTemplateRequest
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3.CreateJobFromTemplateRequest
  title: "Class CreateJobFromTemplateRequest (0.92.0) \_|\_ Java client libraries\
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
Class CreateJobFromTemplateRequest (0.92.0)
Stay organized with collections
Save and categorize content based on your preferences.
0.92.0 (latest)
0.91.0
0.89.0
0.87.0
0.86.0
0.85.0
0.84.0
0.82.0
0.80.0
0.79.0
0.78.0
0.77.0
0.76.0
0.74.0
0.72.0
0.71.0
0.68.0
0.67.0
0.66.0
0.64.0
0.63.0
0.62.0
0.61.0
0.60.0
0.59.0
0.58.0
0.57.0
0.56.0
0.55.0
0.53.0
0.52.0
0.51.0
0.50.0
0.49.0
0.48.0
0.47.0
0.46.0
0.45.0
0.44.0
0.43.0
0.41.0
0.40.0
0.39.0
0.38.0
0.37.0
0.36.0
0.35.0
0.34.0
0.33.0
0.32.0
0.31.0
0.28.0
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
0.16.0
0.15.0
0.13.0
0.12.0
0.11.0
0.10.0
0.9.0
0.8.0
0.5.0
public final class CreateJobFromTemplateRequest extends GeneratedMessage implements CreateJobFromTemplateRequestOrBuilder
A request to create a Cloud Dataflow job from a template.
Protobuf type google.dataflow.v1beta3.CreateJobFromTemplateRequest
Inheritance
Object >
AbstractMessageLite<MessageType,BuilderType> >
AbstractMessage >
GeneratedMessage >
CreateJobFromTemplateRequest
Implements
CreateJobFromTemplateRequestOrBuilder
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
ENVIRONMENT_FIELD_NUMBER
public static final int ENVIRONMENT_FIELD_NUMBER
Field Value
Type
Description
int
GCS_PATH_FIELD_NUMBER
public static final int GCS_PATH_FIELD_NUMBER
Field Value
Type
Description
int
JOB_NAME_FIELD_NUMBER
public static final int JOB_NAME_FIELD_NUMBER
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
PARAMETERS_FIELD_NUMBER
public static final int PARAMETERS_FIELD_NUMBER
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
Static Methods
getDefaultInstance()
public static CreateJobFromTemplateRequest getDefaultInstance ()
Returns
Type
Description
CreateJobFromTemplateRequest
getDescriptor()
public static final Descriptors . Descriptor getDescriptor ()
Returns
Type
Description
Descriptor
newBuilder()
public static CreateJobFromTemplateRequest . Builder newBuilder ()
Returns
Type
Description
CreateJobFromTemplateRequest.Builder
newBuilder(CreateJobFromTemplateRequest prototype)
public static CreateJobFromTemplateRequest . Builder newBuilder ( CreateJobFromTemplateRequest prototype )
Parameter
Name
Description
prototype
CreateJobFromTemplateRequest
Returns
Type
Description
CreateJobFromTemplateRequest.Builder
parseDelimitedFrom(InputStream input)
public static CreateJobFromTemplateRequest parseDelimitedFrom ( InputStream input )
Parameter
Name
Description
input
InputStream
Returns
Type
Description
CreateJobFromTemplateRequest
Exceptions
Type
Description
IOException
parseDelimitedFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
public static CreateJobFromTemplateRequest parseDelimitedFrom ( InputStream input , ExtensionRegistryLite extensionRegistry )
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
CreateJobFromTemplateRequest
Exceptions
Type
Description
IOException
parseFrom(byte[] data)
public static CreateJobFromTemplateRequest parseFrom ( byte [] data )
Parameter
Name
Description
data
byte []
Returns
Type
Description
CreateJobFromTemplateRequest
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(byte[] data, ExtensionRegistryLite extensionRegistry)
public static CreateJobFromTemplateRequest parseFrom ( byte [] data , ExtensionRegistryLite extensionRegistry )
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
CreateJobFromTemplateRequest
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteString data)
public static CreateJobFromTemplateRequest parseFrom ( ByteString data )
Parameter
Name
Description
data
ByteString
Returns
Type
Description
CreateJobFromTemplateRequest
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteString data, ExtensionRegistryLite extensionRegistry)
public static CreateJobFromTemplateRequest parseFrom ( ByteString data , ExtensionRegistryLite extensionRegistry )
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
CreateJobFromTemplateRequest
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(CodedInputStream input)
public static CreateJobFromTemplateRequest parseFrom ( CodedInputStream input )
Parameter
Name
Description
input
CodedInputStream
Returns
Type
Description
CreateJobFromTemplateRequest
Exceptions
Type
Description
IOException
parseFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public static CreateJobFromTemplateRequest parseFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
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
CreateJobFromTemplateRequest
Exceptions
Type
Description
IOException
parseFrom(InputStream input)
public static CreateJobFromTemplateRequest parseFrom ( InputStream input )
Parameter
Name
Description
input
InputStream
Returns
Type
Description
CreateJobFromTemplateRequest
Exceptions
Type
Description
IOException
parseFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
public static CreateJobFromTemplateRequest parseFrom ( InputStream input , ExtensionRegistryLite extensionRegistry )
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
CreateJobFromTemplateRequest
Exceptions
Type
Description
IOException
parseFrom(ByteBuffer data)
public static CreateJobFromTemplateRequest parseFrom ( ByteBuffer data )
Parameter
Name
Description
data
ByteBuffer
Returns
Type
Description
CreateJobFromTemplateRequest
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteBuffer data, ExtensionRegistryLite extensionRegistry)
public static CreateJobFromTemplateRequest parseFrom ( ByteBuffer data , ExtensionRegistryLite extensionRegistry )
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
CreateJobFromTemplateRequest
Exceptions
Type
Description
InvalidProtocolBufferException
parser()
public static Parser<CreateJobFromTemplateRequest> parser ()
Returns
Type
Description
Parser < CreateJobFromTemplateRequest >
Methods
containsParameters(String key)
public boolean containsParameters ( String key )
The runtime parameters to pass to the job.
map<string, string> parameters = 3;
Parameter
Name
Description
key
String
Returns
Type
Description
boolean
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
public CreateJobFromTemplateRequest getDefaultInstanceForType ()
Returns
Type
Description
CreateJobFromTemplateRequest
getEnvironment()
public RuntimeEnvironment getEnvironment ()
The runtime environment for the job.
.google.dataflow.v1beta3.RuntimeEnvironment environment = 5;
Returns
Type
Description
RuntimeEnvironment
The environment.
getEnvironmentOrBuilder()
public RuntimeEnvironmentOrBuilder getEnvironmentOrBuilder ()
The runtime environment for the job.
.google.dataflow.v1beta3.RuntimeEnvironment environment = 5;
Returns
Type
Description
RuntimeEnvironmentOrBuilder
getGcsPath()
public String getGcsPath ()
Required. A Cloud Storage path to the template from which to
create the job.
Must be a valid Cloud Storage URL, beginning with gs:// .
string gcs_path = 2;
Returns
Type
Description
String
The gcsPath.
getGcsPathBytes()
public ByteString getGcsPathBytes ()
Required. A Cloud Storage path to the template from which to
create the job.
Must be a valid Cloud Storage URL, beginning with gs:// .
string gcs_path = 2;
Returns
Type
Description
ByteString
The bytes for gcsPath.
getJobName()
public String getJobName ()
Required. The job name to use for the created job.
string job_name = 4;
Returns
Type
Description
String
The jobName.
getJobNameBytes()
public ByteString getJobNameBytes ()
Required. The job name to use for the created job.
string job_name = 4;
Returns
Type
Description
ByteString
The bytes for jobName.
getLocation()
public String getLocation ()
The regional endpoint to
which to direct the request.
string location = 6;
Returns
Type
Description
String
The location.
getLocationBytes()
public ByteString getLocationBytes ()
The regional endpoint to
which to direct the request.
string location = 6;
Returns
Type
Description
ByteString
The bytes for location.
getParameters() (deprecated)
public Map<String , String > getParameters ()
Use #getParametersMap() instead.
Returns
Type
Description
Map < String , String >
getParametersCount()
public int getParametersCount ()
The runtime parameters to pass to the job.
map<string, string> parameters = 3;
Returns
Type
Description
int
getParametersMap()
public Map<String , String > getParametersMap ()
The runtime parameters to pass to the job.
map<string, string> parameters = 3;
Returns
Type
Description
Map < String , String >
getParametersOrDefault(String key, String defaultValue)
public String getParametersOrDefault ( String key , String defaultValue )
The runtime parameters to pass to the job.
map<string, string> parameters = 3;
Parameters
Name
Description
key
String
defaultValue
String
Returns
Type
Description
String
getParametersOrThrow(String key)
public String getParametersOrThrow ( String key )
The runtime parameters to pass to the job.
map<string, string> parameters = 3;
Parameter
Name
Description
key
String
Returns
Type
Description
String
getParserForType()
public Parser<CreateJobFromTemplateRequest> getParserForType ()
Returns
Type
Description
Parser < CreateJobFromTemplateRequest >
Overrides
GeneratedMessage.getParserForType()
getProjectId()
public String getProjectId ()
Required. The ID of the Cloud Platform project that the job belongs to.
string project_id = 1;
Returns
Type
Description
String
The projectId.
getProjectIdBytes()
public ByteString getProjectIdBytes ()
Required. The ID of the Cloud Platform project that the job belongs to.
string project_id = 1;
Returns
Type
Description
ByteString
The bytes for projectId.
getSerializedSize()
public int getSerializedSize ()
Returns
Type
Description
int
Overrides
GeneratedMessage.getSerializedSize()
getTemplateCase()
public CreateJobFromTemplateRequest . TemplateCase getTemplateCase ()
Returns
Type
Description
CreateJobFromTemplateRequest.TemplateCase
hasEnvironment()
public boolean hasEnvironment ()
The runtime environment for the job.
.google.dataflow.v1beta3.RuntimeEnvironment environment = 5;
Returns
Type
Description
boolean
Whether the environment field is set.
hasGcsPath()
public boolean hasGcsPath ()
Required. A Cloud Storage path to the template from which to
create the job.
Must be a valid Cloud Storage URL, beginning with gs:// .
string gcs_path = 2;
Returns
Type
Description
boolean
Whether the gcsPath field is set.
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
internalGetMapFieldReflection(int number)
protected MapFieldReflectionAccessor internalGetMapFieldReflection ( int number )
Parameter
Name
Description
number
int
Returns
Type
Description
com.google.protobuf.MapFieldReflectionAccessor
Overrides
com.google.protobuf.GeneratedMessage.internalGetMapFieldReflection(int)
isInitialized()
public final boolean isInitialized ()
Returns
Type
Description
boolean
Overrides
GeneratedMessage.isInitialized()
newBuilderForType()
public CreateJobFromTemplateRequest . Builder newBuilderForType ()
Returns
Type
Description
CreateJobFromTemplateRequest.Builder
newBuilderForType(AbstractMessage.BuilderParent parent)
protected CreateJobFromTemplateRequest . Builder newBuilderForType ( AbstractMessage . BuilderParent parent )
Parameter
Name
Description
parent
BuilderParent
Returns
Type
Description
CreateJobFromTemplateRequest.Builder
Overrides
AbstractMessage.newBuilderForType(AbstractMessage.BuilderParent parent)
toBuilder()
public CreateJobFromTemplateRequest . Builder toBuilder ()
Returns
Type
Description
CreateJobFromTemplateRequest.Builder
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
