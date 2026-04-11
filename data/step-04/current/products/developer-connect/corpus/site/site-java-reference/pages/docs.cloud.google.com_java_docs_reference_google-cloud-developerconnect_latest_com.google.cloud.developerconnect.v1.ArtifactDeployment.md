---
title: "Class ArtifactDeployment (0.45.0) \_|\_ Java client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-developerconnect/latest/com.google.cloud.developerconnect.v1.ArtifactDeployment
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-developerconnect/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-developerconnect/latest/com.google.cloud.developerconnect.v1.ArtifactDeployment
  title: "Class ArtifactDeployment (0.45.0) \_|\_ Java client libraries \_|\_ Google\
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
Class ArtifactDeployment (0.45.0)
Stay organized with collections
Save and categorize content based on your preferences.
0.45.0 (latest)
0.44.0
0.42.0
0.40.0
0.39.0
0.38.0
0.37.0
0.35.0
0.33.0
0.32.0
0.31.0
0.30.0
0.29.0
0.27.0
0.25.0
0.24.0
0.21.0
0.20.0
0.19.0
0.17.0
0.16.0
0.15.0
0.14.0
0.13.0
0.12.0
0.11.0
0.10.0
0.9.0
0.8.0
0.6.0
0.5.0
0.4.0
0.3.0
0.2.0
0.1.0
public final class ArtifactDeployment extends GeneratedMessage implements ArtifactDeploymentOrBuilder
The ArtifactDeployment resource represents the deployment of the artifact
within the InsightsConfig resource.
Protobuf type google.cloud.developerconnect.v1.ArtifactDeployment
Inheritance
Object >
AbstractMessageLite<MessageType,BuilderType> >
AbstractMessage >
GeneratedMessage >
ArtifactDeployment
Implements
ArtifactDeploymentOrBuilder
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
ARTIFACT_ALIAS_FIELD_NUMBER
public static final int ARTIFACT_ALIAS_FIELD_NUMBER
Field Value
Type
Description
int
ARTIFACT_REFERENCE_FIELD_NUMBER
public static final int ARTIFACT_REFERENCE_FIELD_NUMBER
Field Value
Type
Description
int
CONTAINER_STATUS_SUMMARY_FIELD_NUMBER
public static final int CONTAINER_STATUS_SUMMARY_FIELD_NUMBER
Field Value
Type
Description
int
DEPLOY_TIME_FIELD_NUMBER
public static final int DEPLOY_TIME_FIELD_NUMBER
Field Value
Type
Description
int
ID_FIELD_NUMBER
public static final int ID_FIELD_NUMBER
Field Value
Type
Description
int
SOURCE_COMMIT_URIS_FIELD_NUMBER
public static final int SOURCE_COMMIT_URIS_FIELD_NUMBER
Field Value
Type
Description
int
UNDEPLOY_TIME_FIELD_NUMBER
public static final int UNDEPLOY_TIME_FIELD_NUMBER
Field Value
Type
Description
int
Static Methods
getDefaultInstance()
public static ArtifactDeployment getDefaultInstance ()
Returns
Type
Description
ArtifactDeployment
getDescriptor()
public static final Descriptors . Descriptor getDescriptor ()
Returns
Type
Description
Descriptor
newBuilder()
public static ArtifactDeployment . Builder newBuilder ()
Returns
Type
Description
ArtifactDeployment.Builder
newBuilder(ArtifactDeployment prototype)
public static ArtifactDeployment . Builder newBuilder ( ArtifactDeployment prototype )
Parameter
Name
Description
prototype
ArtifactDeployment
Returns
Type
Description
ArtifactDeployment.Builder
parseDelimitedFrom(InputStream input)
public static ArtifactDeployment parseDelimitedFrom ( InputStream input )
Parameter
Name
Description
input
InputStream
Returns
Type
Description
ArtifactDeployment
Exceptions
Type
Description
IOException
parseDelimitedFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
public static ArtifactDeployment parseDelimitedFrom ( InputStream input , ExtensionRegistryLite extensionRegistry )
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
ArtifactDeployment
Exceptions
Type
Description
IOException
parseFrom(byte[] data)
public static ArtifactDeployment parseFrom ( byte [] data )
Parameter
Name
Description
data
byte []
Returns
Type
Description
ArtifactDeployment
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(byte[] data, ExtensionRegistryLite extensionRegistry)
public static ArtifactDeployment parseFrom ( byte [] data , ExtensionRegistryLite extensionRegistry )
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
ArtifactDeployment
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteString data)
public static ArtifactDeployment parseFrom ( ByteString data )
Parameter
Name
Description
data
ByteString
Returns
Type
Description
ArtifactDeployment
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteString data, ExtensionRegistryLite extensionRegistry)
public static ArtifactDeployment parseFrom ( ByteString data , ExtensionRegistryLite extensionRegistry )
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
ArtifactDeployment
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(CodedInputStream input)
public static ArtifactDeployment parseFrom ( CodedInputStream input )
Parameter
Name
Description
input
CodedInputStream
Returns
Type
Description
ArtifactDeployment
Exceptions
Type
Description
IOException
parseFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public static ArtifactDeployment parseFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
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
ArtifactDeployment
Exceptions
Type
Description
IOException
parseFrom(InputStream input)
public static ArtifactDeployment parseFrom ( InputStream input )
Parameter
Name
Description
input
InputStream
Returns
Type
Description
ArtifactDeployment
Exceptions
Type
Description
IOException
parseFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
public static ArtifactDeployment parseFrom ( InputStream input , ExtensionRegistryLite extensionRegistry )
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
ArtifactDeployment
Exceptions
Type
Description
IOException
parseFrom(ByteBuffer data)
public static ArtifactDeployment parseFrom ( ByteBuffer data )
Parameter
Name
Description
data
ByteBuffer
Returns
Type
Description
ArtifactDeployment
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteBuffer data, ExtensionRegistryLite extensionRegistry)
public static ArtifactDeployment parseFrom ( ByteBuffer data , ExtensionRegistryLite extensionRegistry )
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
ArtifactDeployment
Exceptions
Type
Description
InvalidProtocolBufferException
parser()
public static Parser<ArtifactDeployment> parser ()
Returns
Type
Description
Parser < ArtifactDeployment >
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
getArtifactAlias()
public String getArtifactAlias ()
Output only. The artifact alias in the deployment spec, with Tag/SHA.
e.g. us-docker.pkg.dev/my-project/my-repo/image:1.0.0
string artifact_alias = 10 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
String
The artifactAlias.
getArtifactAliasBytes()
public ByteString getArtifactAliasBytes ()
Output only. The artifact alias in the deployment spec, with Tag/SHA.
e.g. us-docker.pkg.dev/my-project/my-repo/image:1.0.0
string artifact_alias = 10 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
ByteString
The bytes for artifactAlias.
getArtifactReference()
public String getArtifactReference ()
Output only. The artifact that is deployed.
string artifact_reference = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
String
The artifactReference.
getArtifactReferenceBytes()
public ByteString getArtifactReferenceBytes ()
Output only. The artifact that is deployed.
string artifact_reference = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
ByteString
The bytes for artifactReference.
getContainerStatusSummary()
public String getContainerStatusSummary ()
Output only. The summary of container status of the artifact deployment.
Format as ContainerStatusState-Reason : restartCount
e.g. "Waiting-ImagePullBackOff : 3"
string container_status_summary = 7 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
String
The containerStatusSummary.
getContainerStatusSummaryBytes()
public ByteString getContainerStatusSummaryBytes ()
Output only. The summary of container status of the artifact deployment.
Format as ContainerStatusState-Reason : restartCount
e.g. "Waiting-ImagePullBackOff : 3"
string container_status_summary = 7 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
ByteString
The bytes for containerStatusSummary.
getDefaultInstanceForType()
public ArtifactDeployment getDefaultInstanceForType ()
Returns
Type
Description
ArtifactDeployment
getDeployTime()
public Timestamp getDeployTime ()
Output only. The time at which the deployment was deployed.
.google.protobuf.Timestamp deploy_time = 4 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
Timestamp
The deployTime.
getDeployTimeOrBuilder()
public TimestampOrBuilder getDeployTimeOrBuilder ()
Output only. The time at which the deployment was deployed.
.google.protobuf.Timestamp deploy_time = 4 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
TimestampOrBuilder
getId()
public String getId ()
Output only. Unique identifier of ArtifactDeployment .
string id = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
String
The id.
getIdBytes()
public ByteString getIdBytes ()
Output only. Unique identifier of ArtifactDeployment .
string id = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
ByteString
The bytes for id.
getParserForType()
public Parser<ArtifactDeployment> getParserForType ()
Returns
Type
Description
Parser < ArtifactDeployment >
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
getSourceCommitUris(int index)
public String getSourceCommitUris ( int index )
Output only. The source commits at which this artifact was built. Extracted
from provenance.
repeated string source_commit_uris = 6 [(.google.api.field_behavior) = OUTPUT_ONLY];
Parameter
Name
Description
index
int The index of the element to return.
Returns
Type
Description
String
The sourceCommitUris at the given index.
getSourceCommitUrisBytes(int index)
public ByteString getSourceCommitUrisBytes ( int index )
Output only. The source commits at which this artifact was built. Extracted
from provenance.
repeated string source_commit_uris = 6 [(.google.api.field_behavior) = OUTPUT_ONLY];
Parameter
Name
Description
index
int The index of the value to return.
Returns
Type
Description
ByteString
The bytes of the sourceCommitUris at the given index.
getSourceCommitUrisCount()
public int getSourceCommitUrisCount ()
Output only. The source commits at which this artifact was built. Extracted
from provenance.
repeated string source_commit_uris = 6 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
int
The count of sourceCommitUris.
getSourceCommitUrisList()
public ProtocolStringList getSourceCommitUrisList ()
Output only. The source commits at which this artifact was built. Extracted
from provenance.
repeated string source_commit_uris = 6 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
ProtocolStringList
A list containing the sourceCommitUris.
getUndeployTime()
public Timestamp getUndeployTime ()
Output only. The time at which the deployment was undeployed, all artifacts
are considered undeployed once this time is set.
.google.protobuf.Timestamp undeploy_time = 5 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
Timestamp
The undeployTime.
getUndeployTimeOrBuilder()
public TimestampOrBuilder getUndeployTimeOrBuilder ()
Output only. The time at which the deployment was undeployed, all artifacts
are considered undeployed once this time is set.
.google.protobuf.Timestamp undeploy_time = 5 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
TimestampOrBuilder
hasDeployTime()
public boolean hasDeployTime ()
Output only. The time at which the deployment was deployed.
.google.protobuf.Timestamp deploy_time = 4 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
boolean
Whether the deployTime field is set.
hasUndeployTime()
public boolean hasUndeployTime ()
Output only. The time at which the deployment was undeployed, all artifacts
are considered undeployed once this time is set.
.google.protobuf.Timestamp undeploy_time = 5 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
boolean
Whether the undeployTime field is set.
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
public ArtifactDeployment . Builder newBuilderForType ()
Returns
Type
Description
ArtifactDeployment.Builder
newBuilderForType(AbstractMessage.BuilderParent parent)
protected ArtifactDeployment . Builder newBuilderForType ( AbstractMessage . BuilderParent parent )
Parameter
Name
Description
parent
BuilderParent
Returns
Type
Description
ArtifactDeployment.Builder
Overrides
AbstractMessage.newBuilderForType(AbstractMessage.BuilderParent parent)
toBuilder()
public ArtifactDeployment . Builder toBuilder ()
Returns
Type
Description
ArtifactDeployment.Builder
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
