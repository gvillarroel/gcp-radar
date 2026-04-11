---
title: "Class BuildConfig (0.88.0) \_|\_ Java client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.BuildConfig
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.BuildConfig
  title: "Class BuildConfig (0.88.0) \_|\_ Java client libraries \_|\_ Google Cloud\
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
Class BuildConfig (0.88.0)
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
public final class BuildConfig extends GeneratedMessage implements BuildConfigOrBuilder
Describes the Build step of the function that builds a container from the
given source.
Protobuf type google.cloud.run.v2.BuildConfig
Inheritance
Object >
AbstractMessageLite<MessageType,BuilderType> >
AbstractMessage >
GeneratedMessage >
BuildConfig
Implements
BuildConfigOrBuilder
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
BASE_IMAGE_FIELD_NUMBER
public static final int BASE_IMAGE_FIELD_NUMBER
Field Value
Type
Description
int
ENABLE_AUTOMATIC_UPDATES_FIELD_NUMBER
public static final int ENABLE_AUTOMATIC_UPDATES_FIELD_NUMBER
Field Value
Type
Description
int
ENVIRONMENT_VARIABLES_FIELD_NUMBER
public static final int ENVIRONMENT_VARIABLES_FIELD_NUMBER
Field Value
Type
Description
int
FUNCTION_TARGET_FIELD_NUMBER
public static final int FUNCTION_TARGET_FIELD_NUMBER
Field Value
Type
Description
int
IMAGE_URI_FIELD_NUMBER
public static final int IMAGE_URI_FIELD_NUMBER
Field Value
Type
Description
int
NAME_FIELD_NUMBER
public static final int NAME_FIELD_NUMBER
Field Value
Type
Description
int
SERVICE_ACCOUNT_FIELD_NUMBER
public static final int SERVICE_ACCOUNT_FIELD_NUMBER
Field Value
Type
Description
int
SOURCE_LOCATION_FIELD_NUMBER
public static final int SOURCE_LOCATION_FIELD_NUMBER
Field Value
Type
Description
int
WORKER_POOL_FIELD_NUMBER
public static final int WORKER_POOL_FIELD_NUMBER
Field Value
Type
Description
int
Static Methods
getDefaultInstance()
public static BuildConfig getDefaultInstance ()
Returns
Type
Description
BuildConfig
getDescriptor()
public static final Descriptors . Descriptor getDescriptor ()
Returns
Type
Description
Descriptor
newBuilder()
public static BuildConfig . Builder newBuilder ()
Returns
Type
Description
BuildConfig.Builder
newBuilder(BuildConfig prototype)
public static BuildConfig . Builder newBuilder ( BuildConfig prototype )
Parameter
Name
Description
prototype
BuildConfig
Returns
Type
Description
BuildConfig.Builder
parseDelimitedFrom(InputStream input)
public static BuildConfig parseDelimitedFrom ( InputStream input )
Parameter
Name
Description
input
InputStream
Returns
Type
Description
BuildConfig
Exceptions
Type
Description
IOException
parseDelimitedFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
public static BuildConfig parseDelimitedFrom ( InputStream input , ExtensionRegistryLite extensionRegistry )
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
BuildConfig
Exceptions
Type
Description
IOException
parseFrom(byte[] data)
public static BuildConfig parseFrom ( byte [] data )
Parameter
Name
Description
data
byte []
Returns
Type
Description
BuildConfig
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(byte[] data, ExtensionRegistryLite extensionRegistry)
public static BuildConfig parseFrom ( byte [] data , ExtensionRegistryLite extensionRegistry )
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
BuildConfig
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteString data)
public static BuildConfig parseFrom ( ByteString data )
Parameter
Name
Description
data
ByteString
Returns
Type
Description
BuildConfig
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteString data, ExtensionRegistryLite extensionRegistry)
public static BuildConfig parseFrom ( ByteString data , ExtensionRegistryLite extensionRegistry )
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
BuildConfig
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(CodedInputStream input)
public static BuildConfig parseFrom ( CodedInputStream input )
Parameter
Name
Description
input
CodedInputStream
Returns
Type
Description
BuildConfig
Exceptions
Type
Description
IOException
parseFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public static BuildConfig parseFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
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
BuildConfig
Exceptions
Type
Description
IOException
parseFrom(InputStream input)
public static BuildConfig parseFrom ( InputStream input )
Parameter
Name
Description
input
InputStream
Returns
Type
Description
BuildConfig
Exceptions
Type
Description
IOException
parseFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
public static BuildConfig parseFrom ( InputStream input , ExtensionRegistryLite extensionRegistry )
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
BuildConfig
Exceptions
Type
Description
IOException
parseFrom(ByteBuffer data)
public static BuildConfig parseFrom ( ByteBuffer data )
Parameter
Name
Description
data
ByteBuffer
Returns
Type
Description
BuildConfig
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteBuffer data, ExtensionRegistryLite extensionRegistry)
public static BuildConfig parseFrom ( ByteBuffer data , ExtensionRegistryLite extensionRegistry )
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
BuildConfig
Exceptions
Type
Description
InvalidProtocolBufferException
parser()
public static Parser<BuildConfig> parser ()
Returns
Type
Description
Parser < BuildConfig >
Methods
containsEnvironmentVariables(String key)
public boolean containsEnvironmentVariables ( String key )
Optional. User-provided build-time environment variables for the function
map<string, string> environment_variables = 8 [(.google.api.field_behavior) = OPTIONAL];
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
getBaseImage()
public String getBaseImage ()
Optional. The base image used to build the function.
string base_image = 5 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
String
The baseImage.
getBaseImageBytes()
public ByteString getBaseImageBytes ()
Optional. The base image used to build the function.
string base_image = 5 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
ByteString
The bytes for baseImage.
getDefaultInstanceForType()
public BuildConfig getDefaultInstanceForType ()
Returns
Type
Description
BuildConfig
getEnableAutomaticUpdates()
public boolean getEnableAutomaticUpdates ()
Optional. Sets whether the function will receive automatic base image
updates.
bool enable_automatic_updates = 6 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
boolean
The enableAutomaticUpdates.
getEnvironmentVariables() (deprecated)
public Map<String , String > getEnvironmentVariables ()
Use #getEnvironmentVariablesMap() instead.
Returns
Type
Description
Map < String , String >
getEnvironmentVariablesCount()
public int getEnvironmentVariablesCount ()
Optional. User-provided build-time environment variables for the function
map<string, string> environment_variables = 8 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
int
getEnvironmentVariablesMap()
public Map<String , String > getEnvironmentVariablesMap ()
Optional. User-provided build-time environment variables for the function
map<string, string> environment_variables = 8 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
Map < String , String >
getEnvironmentVariablesOrDefault(String key, String defaultValue)
public String getEnvironmentVariablesOrDefault ( String key , String defaultValue )
Optional. User-provided build-time environment variables for the function
map<string, string> environment_variables = 8 [(.google.api.field_behavior) = OPTIONAL];
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
getEnvironmentVariablesOrThrow(String key)
public String getEnvironmentVariablesOrThrow ( String key )
Optional. User-provided build-time environment variables for the function
map<string, string> environment_variables = 8 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
key
String
Returns
Type
Description
String
getFunctionTarget()
public String getFunctionTarget ()
Optional. The name of the function (as defined in source code) that will be
executed. Defaults to the resource name suffix, if not specified. For
backward compatibility, if function with given name is not found, then the
system will try to use function named "function".
string function_target = 3 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
String
The functionTarget.
getFunctionTargetBytes()
public ByteString getFunctionTargetBytes ()
Optional. The name of the function (as defined in source code) that will be
executed. Defaults to the resource name suffix, if not specified. For
backward compatibility, if function with given name is not found, then the
system will try to use function named "function".
string function_target = 3 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
ByteString
The bytes for functionTarget.
getImageUri()
public String getImageUri ()
Optional. Artifact Registry URI to store the built image.
string image_uri = 4 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
String
The imageUri.
getImageUriBytes()
public ByteString getImageUriBytes ()
Optional. Artifact Registry URI to store the built image.
string image_uri = 4 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
ByteString
The bytes for imageUri.
getName()
public String getName ()
Output only. The Cloud Build name of the latest successful deployment of
the function.
string name = 1 [(.google.api.field_behavior) = OUTPUT_ONLY, (.google.api.resource_reference) = { ... }
Returns
Type
Description
String
The name.
getNameBytes()
public ByteString getNameBytes ()
Output only. The Cloud Build name of the latest successful deployment of
the function.
string name = 1 [(.google.api.field_behavior) = OUTPUT_ONLY, (.google.api.resource_reference) = { ... }
Returns
Type
Description
ByteString
The bytes for name.
getParserForType()
public Parser<BuildConfig> getParserForType ()
Returns
Type
Description
Parser < BuildConfig >
Overrides
GeneratedMessage.getParserForType()
getSerializedSize()
public int getSerializedSize ()
Returns
Type
Description
int
Overrides
GeneratedMessage.getSerializedSize()
getServiceAccount()
public String getServiceAccount ()
Optional. Service account to be used for building the container. The format
of this field is
projects/{projectId}/serviceAccounts/{serviceAccountEmail} .
string service_account = 9 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
String
The serviceAccount.
getServiceAccountBytes()
public ByteString getServiceAccountBytes ()
Optional. Service account to be used for building the container. The format
of this field is
projects/{projectId}/serviceAccounts/{serviceAccountEmail} .
string service_account = 9 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
ByteString
The bytes for serviceAccount.
getSourceLocation()
public String getSourceLocation ()
The Cloud Storage bucket URI where the function source code is located.
string source_location = 2;
Returns
Type
Description
String
The sourceLocation.
getSourceLocationBytes()
public ByteString getSourceLocationBytes ()
The Cloud Storage bucket URI where the function source code is located.
string source_location = 2;
Returns
Type
Description
ByteString
The bytes for sourceLocation.
getWorkerPool()
public String getWorkerPool ()
Optional. Name of the Cloud Build Custom Worker Pool that should be used to
build the Cloud Run function. The format of this field is
projects/{project}/locations/{region}/workerPools/{workerPool} where
{project} and {region} are the project id and region respectively where
the worker pool is defined and {workerPool} is the short name of the
worker pool.
string worker_pool = 7 [(.google.api.field_behavior) = OPTIONAL, (.google.api.resource_reference) = { ... }
Returns
Type
Description
String
The workerPool.
getWorkerPoolBytes()
public ByteString getWorkerPoolBytes ()
Optional. Name of the Cloud Build Custom Worker Pool that should be used to
build the Cloud Run function. The format of this field is
projects/{project}/locations/{region}/workerPools/{workerPool} where
{project} and {region} are the project id and region respectively where
the worker pool is defined and {workerPool} is the short name of the
worker pool.
string worker_pool = 7 [(.google.api.field_behavior) = OPTIONAL, (.google.api.resource_reference) = { ... }
Returns
Type
Description
ByteString
The bytes for workerPool.
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
public BuildConfig . Builder newBuilderForType ()
Returns
Type
Description
BuildConfig.Builder
newBuilderForType(AbstractMessage.BuilderParent parent)
protected BuildConfig . Builder newBuilderForType ( AbstractMessage . BuilderParent parent )
Parameter
Name
Description
parent
BuilderParent
Returns
Type
Description
BuildConfig.Builder
Overrides
AbstractMessage.newBuilderForType(AbstractMessage.BuilderParent parent)
toBuilder()
public BuildConfig . Builder toBuilder ()
Returns
Type
Description
BuildConfig.Builder
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
