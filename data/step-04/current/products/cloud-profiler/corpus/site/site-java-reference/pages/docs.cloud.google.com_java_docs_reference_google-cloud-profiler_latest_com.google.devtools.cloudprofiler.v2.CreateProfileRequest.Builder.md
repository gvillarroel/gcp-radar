---
title: "Class CreateProfileRequest.Builder (2.88.0) \_|\_ Java client libraries \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-profiler/latest/com.google.devtools.cloudprofiler.v2.CreateProfileRequest.Builder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-profiler/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-profiler/latest/com.google.devtools.cloudprofiler.v2.CreateProfileRequest.Builder
  title: "Class CreateProfileRequest.Builder (2.88.0) \_|\_ Java client libraries\
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
Class CreateProfileRequest.Builder (2.88.0)
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
2.3.5
2.2.0
2.1.10
public static final class CreateProfileRequest . Builder extends GeneratedMessage . Builder<CreateProfileRequest . Builder > implements CreateProfileRequestOrBuilder
CreateProfileRequest describes a profile resource online creation request.
The deployment field must be populated. The profile_type specifies the list
of profile types supported by the agent. The creation call will hang until a
profile of one of these types needs to be collected.
Protobuf type google.devtools.cloudprofiler.v2.CreateProfileRequest
Inheritance
java.lang.Object >
AbstractMessageLite.Builder<MessageType,BuilderType> >
AbstractMessage.Builder<BuilderType> >
GeneratedMessage.Builder >
CreateProfileRequest.Builder
Implements
CreateProfileRequestOrBuilder
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
addAllProfileType(Iterable<? extends ProfileType> values)
public CreateProfileRequest . Builder addAllProfileType ( Iterable < ? extends ProfileType > values )
One or more profile types that the agent is capable of providing.
repeated .google.devtools.cloudprofiler.v2.ProfileType profile_type = 2;
Parameter
Name
Description
values
Iterable < ? extends com.google.devtools.cloudprofiler.v2.ProfileType > The profileType to add.
Returns
Type
Description
CreateProfileRequest.Builder
This builder for chaining.
addAllProfileTypeValue(Iterable<Integer> values)
public CreateProfileRequest . Builder addAllProfileTypeValue ( Iterable<Integer> values )
One or more profile types that the agent is capable of providing.
repeated .google.devtools.cloudprofiler.v2.ProfileType profile_type = 2;
Parameter
Name
Description
values
Iterable < Integer > The enum numeric values on the wire for profileType to add.
Returns
Type
Description
CreateProfileRequest.Builder
This builder for chaining.
addProfileType(ProfileType value)
public CreateProfileRequest . Builder addProfileType ( ProfileType value )
One or more profile types that the agent is capable of providing.
repeated .google.devtools.cloudprofiler.v2.ProfileType profile_type = 2;
Parameter
Name
Description
value
ProfileType The profileType to add.
Returns
Type
Description
CreateProfileRequest.Builder
This builder for chaining.
addProfileTypeValue(int value)
public CreateProfileRequest . Builder addProfileTypeValue ( int value )
One or more profile types that the agent is capable of providing.
repeated .google.devtools.cloudprofiler.v2.ProfileType profile_type = 2;
Parameter
Name
Description
value
int The enum numeric value on the wire for profileType to add.
Returns
Type
Description
CreateProfileRequest.Builder
This builder for chaining.
build()
public CreateProfileRequest build ()
Returns
Type
Description
CreateProfileRequest
buildPartial()
public CreateProfileRequest buildPartial ()
Returns
Type
Description
CreateProfileRequest
clear()
public CreateProfileRequest . Builder clear ()
Returns
Type
Description
CreateProfileRequest.Builder
Overrides
GeneratedMessage.Builder<BuilderType>.clear()
clearDeployment()
public CreateProfileRequest . Builder clearDeployment ()
Deployment details.
.google.devtools.cloudprofiler.v2.Deployment deployment = 1;
Returns
Type
Description
CreateProfileRequest.Builder
clearParent()
public CreateProfileRequest . Builder clearParent ()
Parent project to create the profile in.
string parent = 4 [(.google.api.resource_reference) = { ... }
Returns
Type
Description
CreateProfileRequest.Builder
This builder for chaining.
clearProfileType()
public CreateProfileRequest . Builder clearProfileType ()
One or more profile types that the agent is capable of providing.
repeated .google.devtools.cloudprofiler.v2.ProfileType profile_type = 2;
Returns
Type
Description
CreateProfileRequest.Builder
This builder for chaining.
getDefaultInstanceForType()
public CreateProfileRequest getDefaultInstanceForType ()
Returns
Type
Description
CreateProfileRequest
getDeployment()
public Deployment getDeployment ()
Deployment details.
.google.devtools.cloudprofiler.v2.Deployment deployment = 1;
Returns
Type
Description
Deployment
The deployment.
getDeploymentBuilder()
public Deployment . Builder getDeploymentBuilder ()
Deployment details.
.google.devtools.cloudprofiler.v2.Deployment deployment = 1;
Returns
Type
Description
Deployment.Builder
getDeploymentOrBuilder()
public DeploymentOrBuilder getDeploymentOrBuilder ()
Deployment details.
.google.devtools.cloudprofiler.v2.Deployment deployment = 1;
Returns
Type
Description
DeploymentOrBuilder
getDescriptorForType()
public Descriptors . Descriptor getDescriptorForType ()
Returns
Type
Description
Descriptor
Overrides
GeneratedMessage.Builder<BuilderType>.getDescriptorForType()
getParent()
public String getParent ()
Parent project to create the profile in.
string parent = 4 [(.google.api.resource_reference) = { ... }
Returns
Type
Description
String
The parent.
getParentBytes()
public ByteString getParentBytes ()
Parent project to create the profile in.
string parent = 4 [(.google.api.resource_reference) = { ... }
Returns
Type
Description
ByteString
The bytes for parent.
getProfileType(int index)
public ProfileType getProfileType ( int index )
One or more profile types that the agent is capable of providing.
repeated .google.devtools.cloudprofiler.v2.ProfileType profile_type = 2;
Parameter
Name
Description
index
int The index of the element to return.
Returns
Type
Description
ProfileType
The profileType at the given index.
getProfileTypeCount()
public int getProfileTypeCount ()
One or more profile types that the agent is capable of providing.
repeated .google.devtools.cloudprofiler.v2.ProfileType profile_type = 2;
Returns
Type
Description
int
The count of profileType.
getProfileTypeList()
public List<ProfileType> getProfileTypeList ()
One or more profile types that the agent is capable of providing.
repeated .google.devtools.cloudprofiler.v2.ProfileType profile_type = 2;
Returns
Type
Description
List < ProfileType >
A list containing the profileType.
getProfileTypeValue(int index)
public int getProfileTypeValue ( int index )
One or more profile types that the agent is capable of providing.
repeated .google.devtools.cloudprofiler.v2.ProfileType profile_type = 2;
Parameter
Name
Description
index
int The index of the value to return.
Returns
Type
Description
int
The enum numeric value on the wire of profileType at the given index.
getProfileTypeValueList()
public List<Integer> getProfileTypeValueList ()
One or more profile types that the agent is capable of providing.
repeated .google.devtools.cloudprofiler.v2.ProfileType profile_type = 2;
Returns
Type
Description
List < Integer >
A list containing the enum numeric values on the wire for profileType.
hasDeployment()
public boolean hasDeployment ()
Deployment details.
.google.devtools.cloudprofiler.v2.Deployment deployment = 1;
Returns
Type
Description
boolean
Whether the deployment field is set.
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
mergeDeployment(Deployment value)
public CreateProfileRequest . Builder mergeDeployment ( Deployment value )
Deployment details.
.google.devtools.cloudprofiler.v2.Deployment deployment = 1;
Parameter
Name
Description
value
Deployment
Returns
Type
Description
CreateProfileRequest.Builder
mergeFrom(CreateProfileRequest other)
public CreateProfileRequest . Builder mergeFrom ( CreateProfileRequest other )
Parameter
Name
Description
other
CreateProfileRequest
Returns
Type
Description
CreateProfileRequest.Builder
mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public CreateProfileRequest . Builder mergeFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
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
CreateProfileRequest.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
Exceptions
Type
Description
IOException
mergeFrom(Message other)
public CreateProfileRequest . Builder mergeFrom ( Message other )
Parameter
Name
Description
other
Message
Returns
Type
Description
CreateProfileRequest.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)
setDeployment(Deployment value)
public CreateProfileRequest . Builder setDeployment ( Deployment value )
Deployment details.
.google.devtools.cloudprofiler.v2.Deployment deployment = 1;
Parameter
Name
Description
value
Deployment
Returns
Type
Description
CreateProfileRequest.Builder
setDeployment(Deployment.Builder builderForValue)
public CreateProfileRequest . Builder setDeployment ( Deployment . Builder builderForValue )
Deployment details.
.google.devtools.cloudprofiler.v2.Deployment deployment = 1;
Parameter
Name
Description
builderForValue
Deployment.Builder
Returns
Type
Description
CreateProfileRequest.Builder
setParent(String value)
public CreateProfileRequest . Builder setParent ( String value )
Parent project to create the profile in.
string parent = 4 [(.google.api.resource_reference) = { ... }
Parameter
Name
Description
value
String The parent to set.
Returns
Type
Description
CreateProfileRequest.Builder
This builder for chaining.
setParentBytes(ByteString value)
public CreateProfileRequest . Builder setParentBytes ( ByteString value )
Parent project to create the profile in.
string parent = 4 [(.google.api.resource_reference) = { ... }
Parameter
Name
Description
value
ByteString The bytes for parent to set.
Returns
Type
Description
CreateProfileRequest.Builder
This builder for chaining.
setProfileType(int index, ProfileType value)
public CreateProfileRequest . Builder setProfileType ( int index , ProfileType value )
One or more profile types that the agent is capable of providing.
repeated .google.devtools.cloudprofiler.v2.ProfileType profile_type = 2;
Parameters
Name
Description
index
int The index to set the value at.
value
ProfileType The profileType to set.
Returns
Type
Description
CreateProfileRequest.Builder
This builder for chaining.
setProfileTypeValue(int index, int value)
public CreateProfileRequest . Builder setProfileTypeValue ( int index , int value )
One or more profile types that the agent is capable of providing.
repeated .google.devtools.cloudprofiler.v2.ProfileType profile_type = 2;
Parameters
Name
Description
index
int The index to set the value at.
value
int The enum numeric value on the wire for profileType to set.
Returns
Type
Description
CreateProfileRequest.Builder
This builder for chaining.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
