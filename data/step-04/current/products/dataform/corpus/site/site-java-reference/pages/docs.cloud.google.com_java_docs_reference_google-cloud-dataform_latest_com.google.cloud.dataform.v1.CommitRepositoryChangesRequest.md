---
title: "Class CommitRepositoryChangesRequest (0.87.0) \_|\_ Java client libraries\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-dataform/latest/com.google.cloud.dataform.v1.CommitRepositoryChangesRequest
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-dataform/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-dataform/latest/com.google.cloud.dataform.v1.CommitRepositoryChangesRequest
  title: "Class CommitRepositoryChangesRequest (0.87.0) \_|\_ Java client libraries\
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
Class CommitRepositoryChangesRequest (0.87.0)
Stay organized with collections
Save and categorize content based on your preferences.
0.87.0 (latest)
0.86.0
0.84.0
0.82.0
0.81.0
0.80.0
0.79.0
0.77.0
0.75.0
0.74.0
0.73.0
0.72.0
0.71.0
0.69.0
0.67.0
0.66.0
0.63.0
0.62.0
0.61.0
0.59.0
0.58.0
0.57.0
0.56.0
0.55.0
0.54.0
0.53.0
0.52.0
0.51.0
0.50.0
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
0.38.0
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
0.26.0
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
0.10.0
0.8.0
0.7.0
0.6.0
0.5.0
0.4.0
0.3.0
0.2.4
public final class CommitRepositoryChangesRequest extends GeneratedMessage implements CommitRepositoryChangesRequestOrBuilder
CommitRepositoryChanges request message.
Protobuf type google.cloud.dataform.v1.CommitRepositoryChangesRequest
Inheritance
Object >
AbstractMessageLite<MessageType,BuilderType> >
AbstractMessage >
GeneratedMessage >
CommitRepositoryChangesRequest
Implements
CommitRepositoryChangesRequestOrBuilder
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
COMMIT_METADATA_FIELD_NUMBER
public static final int COMMIT_METADATA_FIELD_NUMBER
Field Value
Type
Description
int
FILE_OPERATIONS_FIELD_NUMBER
public static final int FILE_OPERATIONS_FIELD_NUMBER
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
REQUIRED_HEAD_COMMIT_SHA_FIELD_NUMBER
public static final int REQUIRED_HEAD_COMMIT_SHA_FIELD_NUMBER
Field Value
Type
Description
int
Static Methods
getDefaultInstance()
public static CommitRepositoryChangesRequest getDefaultInstance ()
Returns
Type
Description
CommitRepositoryChangesRequest
getDescriptor()
public static final Descriptors . Descriptor getDescriptor ()
Returns
Type
Description
Descriptor
newBuilder()
public static CommitRepositoryChangesRequest . Builder newBuilder ()
Returns
Type
Description
CommitRepositoryChangesRequest.Builder
newBuilder(CommitRepositoryChangesRequest prototype)
public static CommitRepositoryChangesRequest . Builder newBuilder ( CommitRepositoryChangesRequest prototype )
Parameter
Name
Description
prototype
CommitRepositoryChangesRequest
Returns
Type
Description
CommitRepositoryChangesRequest.Builder
parseDelimitedFrom(InputStream input)
public static CommitRepositoryChangesRequest parseDelimitedFrom ( InputStream input )
Parameter
Name
Description
input
InputStream
Returns
Type
Description
CommitRepositoryChangesRequest
Exceptions
Type
Description
IOException
parseDelimitedFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
public static CommitRepositoryChangesRequest parseDelimitedFrom ( InputStream input , ExtensionRegistryLite extensionRegistry )
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
CommitRepositoryChangesRequest
Exceptions
Type
Description
IOException
parseFrom(byte[] data)
public static CommitRepositoryChangesRequest parseFrom ( byte [] data )
Parameter
Name
Description
data
byte []
Returns
Type
Description
CommitRepositoryChangesRequest
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(byte[] data, ExtensionRegistryLite extensionRegistry)
public static CommitRepositoryChangesRequest parseFrom ( byte [] data , ExtensionRegistryLite extensionRegistry )
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
CommitRepositoryChangesRequest
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteString data)
public static CommitRepositoryChangesRequest parseFrom ( ByteString data )
Parameter
Name
Description
data
ByteString
Returns
Type
Description
CommitRepositoryChangesRequest
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteString data, ExtensionRegistryLite extensionRegistry)
public static CommitRepositoryChangesRequest parseFrom ( ByteString data , ExtensionRegistryLite extensionRegistry )
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
CommitRepositoryChangesRequest
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(CodedInputStream input)
public static CommitRepositoryChangesRequest parseFrom ( CodedInputStream input )
Parameter
Name
Description
input
CodedInputStream
Returns
Type
Description
CommitRepositoryChangesRequest
Exceptions
Type
Description
IOException
parseFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public static CommitRepositoryChangesRequest parseFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
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
CommitRepositoryChangesRequest
Exceptions
Type
Description
IOException
parseFrom(InputStream input)
public static CommitRepositoryChangesRequest parseFrom ( InputStream input )
Parameter
Name
Description
input
InputStream
Returns
Type
Description
CommitRepositoryChangesRequest
Exceptions
Type
Description
IOException
parseFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
public static CommitRepositoryChangesRequest parseFrom ( InputStream input , ExtensionRegistryLite extensionRegistry )
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
CommitRepositoryChangesRequest
Exceptions
Type
Description
IOException
parseFrom(ByteBuffer data)
public static CommitRepositoryChangesRequest parseFrom ( ByteBuffer data )
Parameter
Name
Description
data
ByteBuffer
Returns
Type
Description
CommitRepositoryChangesRequest
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteBuffer data, ExtensionRegistryLite extensionRegistry)
public static CommitRepositoryChangesRequest parseFrom ( ByteBuffer data , ExtensionRegistryLite extensionRegistry )
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
CommitRepositoryChangesRequest
Exceptions
Type
Description
InvalidProtocolBufferException
parser()
public static Parser<CommitRepositoryChangesRequest> parser ()
Returns
Type
Description
Parser < CommitRepositoryChangesRequest >
Methods
containsFileOperations(String key)
public boolean containsFileOperations ( String key )
Optional. A map to the path of the file to the operation. The path is the
full file path including filename, from repository root.
map<string, .google.cloud.dataform.v1.CommitRepositoryChangesRequest.FileOperation> file_operations = 3 [(.google.api.field_behavior) = OPTIONAL];
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
getCommitMetadata()
public CommitMetadata getCommitMetadata ()
Required. The changes to commit to the repository.
.google.cloud.dataform.v1.CommitMetadata commit_metadata = 2 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
CommitMetadata
The commitMetadata.
getCommitMetadataOrBuilder()
public CommitMetadataOrBuilder getCommitMetadataOrBuilder ()
Required. The changes to commit to the repository.
.google.cloud.dataform.v1.CommitMetadata commit_metadata = 2 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
CommitMetadataOrBuilder
getDefaultInstanceForType()
public CommitRepositoryChangesRequest getDefaultInstanceForType ()
Returns
Type
Description
CommitRepositoryChangesRequest
getFileOperations() (deprecated)
public Map<String , CommitRepositoryChangesRequest . FileOperation > getFileOperations ()
Use #getFileOperationsMap() instead.
Returns
Type
Description
Map < String , FileOperation >
getFileOperationsCount()
public int getFileOperationsCount ()
Optional. A map to the path of the file to the operation. The path is the
full file path including filename, from repository root.
map<string, .google.cloud.dataform.v1.CommitRepositoryChangesRequest.FileOperation> file_operations = 3 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
int
getFileOperationsMap()
public Map<String , CommitRepositoryChangesRequest . FileOperation > getFileOperationsMap ()
Optional. A map to the path of the file to the operation. The path is the
full file path including filename, from repository root.
map<string, .google.cloud.dataform.v1.CommitRepositoryChangesRequest.FileOperation> file_operations = 3 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
Map < String , FileOperation >
getFileOperationsOrDefault(String key, CommitRepositoryChangesRequest.FileOperation defaultValue)
public CommitRepositoryChangesRequest . FileOperation getFileOperationsOrDefault ( String key , CommitRepositoryChangesRequest . FileOperation defaultValue )
Optional. A map to the path of the file to the operation. The path is the
full file path including filename, from repository root.
map<string, .google.cloud.dataform.v1.CommitRepositoryChangesRequest.FileOperation> file_operations = 3 [(.google.api.field_behavior) = OPTIONAL];
Parameters
Name
Description
key
String
defaultValue
CommitRepositoryChangesRequest.FileOperation
Returns
Type
Description
CommitRepositoryChangesRequest.FileOperation
getFileOperationsOrThrow(String key)
public CommitRepositoryChangesRequest . FileOperation getFileOperationsOrThrow ( String key )
Optional. A map to the path of the file to the operation. The path is the
full file path including filename, from repository root.
map<string, .google.cloud.dataform.v1.CommitRepositoryChangesRequest.FileOperation> file_operations = 3 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
key
String
Returns
Type
Description
CommitRepositoryChangesRequest.FileOperation
getName()
public String getName ()
Required. The repository's name.
string name = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }
Returns
Type
Description
String
The name.
getNameBytes()
public ByteString getNameBytes ()
Required. The repository's name.
string name = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }
Returns
Type
Description
ByteString
The bytes for name.
getParserForType()
public Parser<CommitRepositoryChangesRequest> getParserForType ()
Returns
Type
Description
Parser < CommitRepositoryChangesRequest >
Overrides
GeneratedMessage.getParserForType()
getRequiredHeadCommitSha()
public String getRequiredHeadCommitSha ()
Optional. The commit SHA which must be the repository's current HEAD before
applying this commit; otherwise this request will fail. If unset, no
validation on the current HEAD commit SHA is performed.
string required_head_commit_sha = 4 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
String
The requiredHeadCommitSha.
getRequiredHeadCommitShaBytes()
public ByteString getRequiredHeadCommitShaBytes ()
Optional. The commit SHA which must be the repository's current HEAD before
applying this commit; otherwise this request will fail. If unset, no
validation on the current HEAD commit SHA is performed.
string required_head_commit_sha = 4 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
ByteString
The bytes for requiredHeadCommitSha.
getSerializedSize()
public int getSerializedSize ()
Returns
Type
Description
int
Overrides
GeneratedMessage.getSerializedSize()
hasCommitMetadata()
public boolean hasCommitMetadata ()
Required. The changes to commit to the repository.
.google.cloud.dataform.v1.CommitMetadata commit_metadata = 2 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
boolean
Whether the commitMetadata field is set.
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
public CommitRepositoryChangesRequest . Builder newBuilderForType ()
Returns
Type
Description
CommitRepositoryChangesRequest.Builder
newBuilderForType(AbstractMessage.BuilderParent parent)
protected CommitRepositoryChangesRequest . Builder newBuilderForType ( AbstractMessage . BuilderParent parent )
Parameter
Name
Description
parent
BuilderParent
Returns
Type
Description
CommitRepositoryChangesRequest.Builder
Overrides
AbstractMessage.newBuilderForType(AbstractMessage.BuilderParent parent)
toBuilder()
public CommitRepositoryChangesRequest . Builder toBuilder ()
Returns
Type
Description
CommitRepositoryChangesRequest.Builder
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
