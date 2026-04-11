---
title: "Class BuildConfig.Builder (0.88.0) \_|\_ Java client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.BuildConfig.Builder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.BuildConfig.Builder
  title: "Class BuildConfig.Builder (0.88.0) \_|\_ Java client libraries \_|\_ Google\
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
Class BuildConfig.Builder (0.88.0)
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
public static final class BuildConfig . Builder extends GeneratedMessage . Builder<BuildConfig . Builder > implements BuildConfigOrBuilder
Describes the Build step of the function that builds a container from the
given source.
Protobuf type google.cloud.run.v2.BuildConfig
Inheritance
java.lang.Object >
AbstractMessageLite.Builder<MessageType,BuilderType> >
AbstractMessage.Builder<BuilderType> >
GeneratedMessage.Builder >
BuildConfig.Builder
Implements
BuildConfigOrBuilder
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
public BuildConfig build ()
Returns
Type
Description
BuildConfig
buildPartial()
public BuildConfig buildPartial ()
Returns
Type
Description
BuildConfig
clear()
public BuildConfig . Builder clear ()
Returns
Type
Description
BuildConfig.Builder
Overrides
GeneratedMessage.Builder<BuilderType>.clear()
clearBaseImage()
public BuildConfig . Builder clearBaseImage ()
Optional. The base image used to build the function.
string base_image = 5 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
BuildConfig.Builder
This builder for chaining.
clearEnableAutomaticUpdates()
public BuildConfig . Builder clearEnableAutomaticUpdates ()
Optional. Sets whether the function will receive automatic base image
updates.
bool enable_automatic_updates = 6 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
BuildConfig.Builder
This builder for chaining.
clearEnvironmentVariables()
public BuildConfig . Builder clearEnvironmentVariables ()
Returns
Type
Description
BuildConfig.Builder
clearFunctionTarget()
public BuildConfig . Builder clearFunctionTarget ()
Optional. The name of the function (as defined in source code) that will be
executed. Defaults to the resource name suffix, if not specified. For
backward compatibility, if function with given name is not found, then the
system will try to use function named "function".
string function_target = 3 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
BuildConfig.Builder
This builder for chaining.
clearImageUri()
public BuildConfig . Builder clearImageUri ()
Optional. Artifact Registry URI to store the built image.
string image_uri = 4 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
BuildConfig.Builder
This builder for chaining.
clearName()
public BuildConfig . Builder clearName ()
Output only. The Cloud Build name of the latest successful deployment of
the function.
string name = 1 [(.google.api.field_behavior) = OUTPUT_ONLY, (.google.api.resource_reference) = { ... }
Returns
Type
Description
BuildConfig.Builder
This builder for chaining.
clearServiceAccount()
public BuildConfig . Builder clearServiceAccount ()
Optional. Service account to be used for building the container. The format
of this field is
projects/{projectId}/serviceAccounts/{serviceAccountEmail} .
string service_account = 9 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
BuildConfig.Builder
This builder for chaining.
clearSourceLocation()
public BuildConfig . Builder clearSourceLocation ()
The Cloud Storage bucket URI where the function source code is located.
string source_location = 2;
Returns
Type
Description
BuildConfig.Builder
This builder for chaining.
clearWorkerPool()
public BuildConfig . Builder clearWorkerPool ()
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
BuildConfig.Builder
This builder for chaining.
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
getDescriptorForType()
public Descriptors . Descriptor getDescriptorForType ()
Returns
Type
Description
Descriptor
Overrides
GeneratedMessage.Builder<BuilderType>.getDescriptorForType()
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
getMutableEnvironmentVariables() (deprecated)
public Map<String , String > getMutableEnvironmentVariables ()
Use alternate mutation accessors instead.
Returns
Type
Description
Map < String , String >
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
internalGetFieldAccessorTable()
protected GeneratedMessage . FieldAccessorTable internalGetFieldAccessorTable ()
Returns
Type
Description
FieldAccessorTable
Overrides
GeneratedMessage.Builder<BuilderType>.internalGetFieldAccessorTable()
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
com.google.protobuf.GeneratedMessage.Builder.internalGetMapFieldReflection(int)
internalGetMutableMapFieldReflection(int number)
protected MapFieldReflectionAccessor internalGetMutableMapFieldReflection ( int number )
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
com.google.protobuf.GeneratedMessage.Builder.internalGetMutableMapFieldReflection(int)
isInitialized()
public final boolean isInitialized ()
Returns
Type
Description
boolean
Overrides
GeneratedMessage.Builder<BuilderType>.isInitialized()
mergeFrom(BuildConfig other)
public BuildConfig . Builder mergeFrom ( BuildConfig other )
Parameter
Name
Description
other
BuildConfig
Returns
Type
Description
BuildConfig.Builder
mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public BuildConfig . Builder mergeFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
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
BuildConfig.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
Exceptions
Type
Description
IOException
mergeFrom(Message other)
public BuildConfig . Builder mergeFrom ( Message other )
Parameter
Name
Description
other
Message
Returns
Type
Description
BuildConfig.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)
putAllEnvironmentVariables(Map<String,String> values)
public BuildConfig . Builder putAllEnvironmentVariables ( Map<String , String > values )
Optional. User-provided build-time environment variables for the function
map<string, string> environment_variables = 8 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
values
Map < String , String >
Returns
Type
Description
BuildConfig.Builder
putEnvironmentVariables(String key, String value)
public BuildConfig . Builder putEnvironmentVariables ( String key , String value )
Optional. User-provided build-time environment variables for the function
map<string, string> environment_variables = 8 [(.google.api.field_behavior) = OPTIONAL];
Parameters
Name
Description
key
String
value
String
Returns
Type
Description
BuildConfig.Builder
removeEnvironmentVariables(String key)
public BuildConfig . Builder removeEnvironmentVariables ( String key )
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
BuildConfig.Builder
setBaseImage(String value)
public BuildConfig . Builder setBaseImage ( String value )
Optional. The base image used to build the function.
string base_image = 5 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
value
String The baseImage to set.
Returns
Type
Description
BuildConfig.Builder
This builder for chaining.
setBaseImageBytes(ByteString value)
public BuildConfig . Builder setBaseImageBytes ( ByteString value )
Optional. The base image used to build the function.
string base_image = 5 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
value
ByteString The bytes for baseImage to set.
Returns
Type
Description
BuildConfig.Builder
This builder for chaining.
setEnableAutomaticUpdates(boolean value)
public BuildConfig . Builder setEnableAutomaticUpdates ( boolean value )
Optional. Sets whether the function will receive automatic base image
updates.
bool enable_automatic_updates = 6 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
value
boolean The enableAutomaticUpdates to set.
Returns
Type
Description
BuildConfig.Builder
This builder for chaining.
setFunctionTarget(String value)
public BuildConfig . Builder setFunctionTarget ( String value )
Optional. The name of the function (as defined in source code) that will be
executed. Defaults to the resource name suffix, if not specified. For
backward compatibility, if function with given name is not found, then the
system will try to use function named "function".
string function_target = 3 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
value
String The functionTarget to set.
Returns
Type
Description
BuildConfig.Builder
This builder for chaining.
setFunctionTargetBytes(ByteString value)
public BuildConfig . Builder setFunctionTargetBytes ( ByteString value )
Optional. The name of the function (as defined in source code) that will be
executed. Defaults to the resource name suffix, if not specified. For
backward compatibility, if function with given name is not found, then the
system will try to use function named "function".
string function_target = 3 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
value
ByteString The bytes for functionTarget to set.
Returns
Type
Description
BuildConfig.Builder
This builder for chaining.
setImageUri(String value)
public BuildConfig . Builder setImageUri ( String value )
Optional. Artifact Registry URI to store the built image.
string image_uri = 4 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
value
String The imageUri to set.
Returns
Type
Description
BuildConfig.Builder
This builder for chaining.
setImageUriBytes(ByteString value)
public BuildConfig . Builder setImageUriBytes ( ByteString value )
Optional. Artifact Registry URI to store the built image.
string image_uri = 4 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
value
ByteString The bytes for imageUri to set.
Returns
Type
Description
BuildConfig.Builder
This builder for chaining.
setName(String value)
public BuildConfig . Builder setName ( String value )
Output only. The Cloud Build name of the latest successful deployment of
the function.
string name = 1 [(.google.api.field_behavior) = OUTPUT_ONLY, (.google.api.resource_reference) = { ... }
Parameter
Name
Description
value
String The name to set.
Returns
Type
Description
BuildConfig.Builder
This builder for chaining.
setNameBytes(ByteString value)
public BuildConfig . Builder setNameBytes ( ByteString value )
Output only. The Cloud Build name of the latest successful deployment of
the function.
string name = 1 [(.google.api.field_behavior) = OUTPUT_ONLY, (.google.api.resource_reference) = { ... }
Parameter
Name
Description
value
ByteString The bytes for name to set.
Returns
Type
Description
BuildConfig.Builder
This builder for chaining.
setServiceAccount(String value)
public BuildConfig . Builder setServiceAccount ( String value )
Optional. Service account to be used for building the container. The format
of this field is
projects/{projectId}/serviceAccounts/{serviceAccountEmail} .
string service_account = 9 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
value
String The serviceAccount to set.
Returns
Type
Description
BuildConfig.Builder
This builder for chaining.
setServiceAccountBytes(ByteString value)
public BuildConfig . Builder setServiceAccountBytes ( ByteString value )
Optional. Service account to be used for building the container. The format
of this field is
projects/{projectId}/serviceAccounts/{serviceAccountEmail} .
string service_account = 9 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
value
ByteString The bytes for serviceAccount to set.
Returns
Type
Description
BuildConfig.Builder
This builder for chaining.
setSourceLocation(String value)
public BuildConfig . Builder setSourceLocation ( String value )
The Cloud Storage bucket URI where the function source code is located.
string source_location = 2;
Parameter
Name
Description
value
String The sourceLocation to set.
Returns
Type
Description
BuildConfig.Builder
This builder for chaining.
setSourceLocationBytes(ByteString value)
public BuildConfig . Builder setSourceLocationBytes ( ByteString value )
The Cloud Storage bucket URI where the function source code is located.
string source_location = 2;
Parameter
Name
Description
value
ByteString The bytes for sourceLocation to set.
Returns
Type
Description
BuildConfig.Builder
This builder for chaining.
setWorkerPool(String value)
public BuildConfig . Builder setWorkerPool ( String value )
Optional. Name of the Cloud Build Custom Worker Pool that should be used to
build the Cloud Run function. The format of this field is
projects/{project}/locations/{region}/workerPools/{workerPool} where
{project} and {region} are the project id and region respectively where
the worker pool is defined and {workerPool} is the short name of the
worker pool.
string worker_pool = 7 [(.google.api.field_behavior) = OPTIONAL, (.google.api.resource_reference) = { ... }
Parameter
Name
Description
value
String The workerPool to set.
Returns
Type
Description
BuildConfig.Builder
This builder for chaining.
setWorkerPoolBytes(ByteString value)
public BuildConfig . Builder setWorkerPoolBytes ( ByteString value )
Optional. Name of the Cloud Build Custom Worker Pool that should be used to
build the Cloud Run function. The format of this field is
projects/{project}/locations/{region}/workerPools/{workerPool} where
{project} and {region} are the project id and region respectively where
the worker pool is defined and {workerPool} is the short name of the
worker pool.
string worker_pool = 7 [(.google.api.field_behavior) = OPTIONAL, (.google.api.resource_reference) = { ... }
Parameter
Name
Description
value
ByteString The bytes for workerPool to set.
Returns
Type
Description
BuildConfig.Builder
This builder for chaining.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
