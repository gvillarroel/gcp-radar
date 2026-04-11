---
title: "Class AptArtifact.Builder (1.87.0) \_|\_ Java client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1.AptArtifact.Builder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1.AptArtifact.Builder
  title: "Class AptArtifact.Builder (1.87.0) \_|\_ Java client libraries \_|\_ Google\
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
Class AptArtifact.Builder (1.87.0)
Stay organized with collections
Save and categorize content based on your preferences.
1.87.0 (latest)
1.86.0
1.84.0
1.82.0
1.81.0
1.80.0
1.79.0
1.77.0
1.75.0
1.74.0
1.73.0
1.72.0
1.71.0
1.69.0
1.67.0
1.66.0
1.63.0
1.62.0
1.61.0
1.59.0
1.58.0
1.57.0
1.56.0
1.55.0
1.54.0
1.53.0
1.52.0
1.51.0
1.50.0
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
1.38.0
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
1.26.0
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
1.10.0
1.9.0
1.8.0
1.7.0
1.6.0
1.5.0
1.4.0
1.3.0
1.2.9
1.1.1
0.5.0
0.4.0
public static final class AptArtifact . Builder extends GeneratedMessage . Builder<AptArtifact . Builder > implements AptArtifactOrBuilder
A detailed representation of an Apt artifact. Information in the record
is derived from the archive's control file.
See https://www.debian.org/doc/debian-policy/ch-controlfields.html
Protobuf type google.devtools.artifactregistry.v1.AptArtifact
Inheritance
java.lang.Object >
AbstractMessageLite.Builder<MessageType,BuilderType> >
AbstractMessage.Builder<BuilderType> >
GeneratedMessage.Builder >
AptArtifact.Builder
Implements
AptArtifactOrBuilder
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
public AptArtifact build ()
Returns
Type
Description
AptArtifact
buildPartial()
public AptArtifact buildPartial ()
Returns
Type
Description
AptArtifact
clear()
public AptArtifact . Builder clear ()
Returns
Type
Description
AptArtifact.Builder
Overrides
GeneratedMessage.Builder<BuilderType>.clear()
clearArchitecture()
public AptArtifact . Builder clearArchitecture ()
Output only. Operating system architecture of the artifact.
string architecture = 4 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
AptArtifact.Builder
This builder for chaining.
clearComponent()
public AptArtifact . Builder clearComponent ()
Output only. Repository component of the artifact.
string component = 5 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
AptArtifact.Builder
This builder for chaining.
clearControlFile()
public AptArtifact . Builder clearControlFile ()
Output only. Contents of the artifact's control metadata file.
bytes control_file = 6 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
AptArtifact.Builder
This builder for chaining.
clearName()
public AptArtifact . Builder clearName ()
Output only. The Artifact Registry resource name of the artifact.
string name = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
AptArtifact.Builder
This builder for chaining.
clearPackageName()
public AptArtifact . Builder clearPackageName ()
Output only. The Apt package name of the artifact.
string package_name = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
AptArtifact.Builder
This builder for chaining.
clearPackageType()
public AptArtifact . Builder clearPackageType ()
Output only. An artifact is a binary or source package.
.google.devtools.artifactregistry.v1.AptArtifact.PackageType package_type = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
AptArtifact.Builder
This builder for chaining.
getArchitecture()
public String getArchitecture ()
Output only. Operating system architecture of the artifact.
string architecture = 4 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
String
The architecture.
getArchitectureBytes()
public ByteString getArchitectureBytes ()
Output only. Operating system architecture of the artifact.
string architecture = 4 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
ByteString
The bytes for architecture.
getComponent()
public String getComponent ()
Output only. Repository component of the artifact.
string component = 5 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
String
The component.
getComponentBytes()
public ByteString getComponentBytes ()
Output only. Repository component of the artifact.
string component = 5 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
ByteString
The bytes for component.
getControlFile()
public ByteString getControlFile ()
Output only. Contents of the artifact's control metadata file.
bytes control_file = 6 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
ByteString
The controlFile.
getDefaultInstanceForType()
public AptArtifact getDefaultInstanceForType ()
Returns
Type
Description
AptArtifact
getDescriptorForType()
public Descriptors . Descriptor getDescriptorForType ()
Returns
Type
Description
Descriptor
Overrides
GeneratedMessage.Builder<BuilderType>.getDescriptorForType()
getName()
public String getName ()
Output only. The Artifact Registry resource name of the artifact.
string name = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
String
The name.
getNameBytes()
public ByteString getNameBytes ()
Output only. The Artifact Registry resource name of the artifact.
string name = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
ByteString
The bytes for name.
getPackageName()
public String getPackageName ()
Output only. The Apt package name of the artifact.
string package_name = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
String
The packageName.
getPackageNameBytes()
public ByteString getPackageNameBytes ()
Output only. The Apt package name of the artifact.
string package_name = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
ByteString
The bytes for packageName.
getPackageType()
public AptArtifact . PackageType getPackageType ()
Output only. An artifact is a binary or source package.
.google.devtools.artifactregistry.v1.AptArtifact.PackageType package_type = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
AptArtifact.PackageType
The packageType.
getPackageTypeValue()
public int getPackageTypeValue ()
Output only. An artifact is a binary or source package.
.google.devtools.artifactregistry.v1.AptArtifact.PackageType package_type = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
int
The enum numeric value on the wire for packageType.
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
mergeFrom(AptArtifact other)
public AptArtifact . Builder mergeFrom ( AptArtifact other )
Parameter
Name
Description
other
AptArtifact
Returns
Type
Description
AptArtifact.Builder
mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public AptArtifact . Builder mergeFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
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
AptArtifact.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
Exceptions
Type
Description
IOException
mergeFrom(Message other)
public AptArtifact . Builder mergeFrom ( Message other )
Parameter
Name
Description
other
Message
Returns
Type
Description
AptArtifact.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)
setArchitecture(String value)
public AptArtifact . Builder setArchitecture ( String value )
Output only. Operating system architecture of the artifact.
string architecture = 4 [(.google.api.field_behavior) = OUTPUT_ONLY];
Parameter
Name
Description
value
String The architecture to set.
Returns
Type
Description
AptArtifact.Builder
This builder for chaining.
setArchitectureBytes(ByteString value)
public AptArtifact . Builder setArchitectureBytes ( ByteString value )
Output only. Operating system architecture of the artifact.
string architecture = 4 [(.google.api.field_behavior) = OUTPUT_ONLY];
Parameter
Name
Description
value
ByteString The bytes for architecture to set.
Returns
Type
Description
AptArtifact.Builder
This builder for chaining.
setComponent(String value)
public AptArtifact . Builder setComponent ( String value )
Output only. Repository component of the artifact.
string component = 5 [(.google.api.field_behavior) = OUTPUT_ONLY];
Parameter
Name
Description
value
String The component to set.
Returns
Type
Description
AptArtifact.Builder
This builder for chaining.
setComponentBytes(ByteString value)
public AptArtifact . Builder setComponentBytes ( ByteString value )
Output only. Repository component of the artifact.
string component = 5 [(.google.api.field_behavior) = OUTPUT_ONLY];
Parameter
Name
Description
value
ByteString The bytes for component to set.
Returns
Type
Description
AptArtifact.Builder
This builder for chaining.
setControlFile(ByteString value)
public AptArtifact . Builder setControlFile ( ByteString value )
Output only. Contents of the artifact's control metadata file.
bytes control_file = 6 [(.google.api.field_behavior) = OUTPUT_ONLY];
Parameter
Name
Description
value
ByteString The controlFile to set.
Returns
Type
Description
AptArtifact.Builder
This builder for chaining.
setName(String value)
public AptArtifact . Builder setName ( String value )
Output only. The Artifact Registry resource name of the artifact.
string name = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];
Parameter
Name
Description
value
String The name to set.
Returns
Type
Description
AptArtifact.Builder
This builder for chaining.
setNameBytes(ByteString value)
public AptArtifact . Builder setNameBytes ( ByteString value )
Output only. The Artifact Registry resource name of the artifact.
string name = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];
Parameter
Name
Description
value
ByteString The bytes for name to set.
Returns
Type
Description
AptArtifact.Builder
This builder for chaining.
setPackageName(String value)
public AptArtifact . Builder setPackageName ( String value )
Output only. The Apt package name of the artifact.
string package_name = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];
Parameter
Name
Description
value
String The packageName to set.
Returns
Type
Description
AptArtifact.Builder
This builder for chaining.
setPackageNameBytes(ByteString value)
public AptArtifact . Builder setPackageNameBytes ( ByteString value )
Output only. The Apt package name of the artifact.
string package_name = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];
Parameter
Name
Description
value
ByteString The bytes for packageName to set.
Returns
Type
Description
AptArtifact.Builder
This builder for chaining.
setPackageType(AptArtifact.PackageType value)
public AptArtifact . Builder setPackageType ( AptArtifact . PackageType value )
Output only. An artifact is a binary or source package.
.google.devtools.artifactregistry.v1.AptArtifact.PackageType package_type = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];
Parameter
Name
Description
value
AptArtifact.PackageType The packageType to set.
Returns
Type
Description
AptArtifact.Builder
This builder for chaining.
setPackageTypeValue(int value)
public AptArtifact . Builder setPackageTypeValue ( int value )
Output only. An artifact is a binary or source package.
.google.devtools.artifactregistry.v1.AptArtifact.PackageType package_type = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];
Parameter
Name
Description
value
int The enum numeric value on the wire for packageType to set.
Returns
Type
Description
AptArtifact.Builder
This builder for chaining.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-29 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-29 UTC."],[],[]]
