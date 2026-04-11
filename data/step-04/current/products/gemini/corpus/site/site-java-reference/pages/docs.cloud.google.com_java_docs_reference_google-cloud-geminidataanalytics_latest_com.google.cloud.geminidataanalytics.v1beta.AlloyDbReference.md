---
title: "Class AlloyDbReference (0.16.0) \_|\_ Java client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-geminidataanalytics/latest/com.google.cloud.geminidataanalytics.v1beta.AlloyDbReference
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-geminidataanalytics/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-geminidataanalytics/latest/com.google.cloud.geminidataanalytics.v1beta.AlloyDbReference
  title: "Class AlloyDbReference (0.16.0) \_|\_ Java client libraries \_|\_ Google\
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
Class AlloyDbReference (0.16.0)
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
public final class AlloyDbReference extends GeneratedMessage implements AlloyDbReferenceOrBuilder
Message representing reference to an AlloyDB database and agent context.
Only supported for the QueryData method.
Protobuf type google.cloud.geminidataanalytics.v1beta.AlloyDbReference
Inheritance
Object >
AbstractMessageLite<MessageType,BuilderType> >
AbstractMessage >
GeneratedMessage >
AlloyDbReference
Implements
AlloyDbReferenceOrBuilder
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
AGENT_CONTEXT_REFERENCE_FIELD_NUMBER
public static final int AGENT_CONTEXT_REFERENCE_FIELD_NUMBER
Field Value
Type
Description
int
DATABASE_REFERENCE_FIELD_NUMBER
public static final int DATABASE_REFERENCE_FIELD_NUMBER
Field Value
Type
Description
int
Static Methods
getDefaultInstance()
public static AlloyDbReference getDefaultInstance ()
Returns
Type
Description
AlloyDbReference
getDescriptor()
public static final Descriptors . Descriptor getDescriptor ()
Returns
Type
Description
Descriptor
newBuilder()
public static AlloyDbReference . Builder newBuilder ()
Returns
Type
Description
AlloyDbReference.Builder
newBuilder(AlloyDbReference prototype)
public static AlloyDbReference . Builder newBuilder ( AlloyDbReference prototype )
Parameter
Name
Description
prototype
AlloyDbReference
Returns
Type
Description
AlloyDbReference.Builder
parseDelimitedFrom(InputStream input)
public static AlloyDbReference parseDelimitedFrom ( InputStream input )
Parameter
Name
Description
input
InputStream
Returns
Type
Description
AlloyDbReference
Exceptions
Type
Description
IOException
parseDelimitedFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
public static AlloyDbReference parseDelimitedFrom ( InputStream input , ExtensionRegistryLite extensionRegistry )
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
AlloyDbReference
Exceptions
Type
Description
IOException
parseFrom(byte[] data)
public static AlloyDbReference parseFrom ( byte [] data )
Parameter
Name
Description
data
byte []
Returns
Type
Description
AlloyDbReference
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(byte[] data, ExtensionRegistryLite extensionRegistry)
public static AlloyDbReference parseFrom ( byte [] data , ExtensionRegistryLite extensionRegistry )
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
AlloyDbReference
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteString data)
public static AlloyDbReference parseFrom ( ByteString data )
Parameter
Name
Description
data
ByteString
Returns
Type
Description
AlloyDbReference
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteString data, ExtensionRegistryLite extensionRegistry)
public static AlloyDbReference parseFrom ( ByteString data , ExtensionRegistryLite extensionRegistry )
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
AlloyDbReference
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(CodedInputStream input)
public static AlloyDbReference parseFrom ( CodedInputStream input )
Parameter
Name
Description
input
CodedInputStream
Returns
Type
Description
AlloyDbReference
Exceptions
Type
Description
IOException
parseFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public static AlloyDbReference parseFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
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
AlloyDbReference
Exceptions
Type
Description
IOException
parseFrom(InputStream input)
public static AlloyDbReference parseFrom ( InputStream input )
Parameter
Name
Description
input
InputStream
Returns
Type
Description
AlloyDbReference
Exceptions
Type
Description
IOException
parseFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
public static AlloyDbReference parseFrom ( InputStream input , ExtensionRegistryLite extensionRegistry )
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
AlloyDbReference
Exceptions
Type
Description
IOException
parseFrom(ByteBuffer data)
public static AlloyDbReference parseFrom ( ByteBuffer data )
Parameter
Name
Description
data
ByteBuffer
Returns
Type
Description
AlloyDbReference
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteBuffer data, ExtensionRegistryLite extensionRegistry)
public static AlloyDbReference parseFrom ( ByteBuffer data , ExtensionRegistryLite extensionRegistry )
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
AlloyDbReference
Exceptions
Type
Description
InvalidProtocolBufferException
parser()
public static Parser<AlloyDbReference> parser ()
Returns
Type
Description
Parser < AlloyDbReference >
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
getAgentContextReference()
public AgentContextReference getAgentContextReference ()
Optional. Parameters for retrieving data from Agent Context.
.google.cloud.geminidataanalytics.v1beta.AgentContextReference agent_context_reference = 3 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
AgentContextReference
The agentContextReference.
getAgentContextReferenceOrBuilder()
public AgentContextReferenceOrBuilder getAgentContextReferenceOrBuilder ()
Optional. Parameters for retrieving data from Agent Context.
.google.cloud.geminidataanalytics.v1beta.AgentContextReference agent_context_reference = 3 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
AgentContextReferenceOrBuilder
getDatabaseReference()
public AlloyDbDatabaseReference getDatabaseReference ()
Required. Singular proto that supports specifying which database and tables
to include.
.google.cloud.geminidataanalytics.v1beta.AlloyDbDatabaseReference database_reference = 1 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
AlloyDbDatabaseReference
The databaseReference.
getDatabaseReferenceOrBuilder()
public AlloyDbDatabaseReferenceOrBuilder getDatabaseReferenceOrBuilder ()
Required. Singular proto that supports specifying which database and tables
to include.
.google.cloud.geminidataanalytics.v1beta.AlloyDbDatabaseReference database_reference = 1 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
AlloyDbDatabaseReferenceOrBuilder
getDefaultInstanceForType()
public AlloyDbReference getDefaultInstanceForType ()
Returns
Type
Description
AlloyDbReference
getParserForType()
public Parser<AlloyDbReference> getParserForType ()
Returns
Type
Description
Parser < AlloyDbReference >
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
hasAgentContextReference()
public boolean hasAgentContextReference ()
Optional. Parameters for retrieving data from Agent Context.
.google.cloud.geminidataanalytics.v1beta.AgentContextReference agent_context_reference = 3 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
boolean
Whether the agentContextReference field is set.
hasDatabaseReference()
public boolean hasDatabaseReference ()
Required. Singular proto that supports specifying which database and tables
to include.
.google.cloud.geminidataanalytics.v1beta.AlloyDbDatabaseReference database_reference = 1 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
boolean
Whether the databaseReference field is set.
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
public AlloyDbReference . Builder newBuilderForType ()
Returns
Type
Description
AlloyDbReference.Builder
newBuilderForType(AbstractMessage.BuilderParent parent)
protected AlloyDbReference . Builder newBuilderForType ( AbstractMessage . BuilderParent parent )
Parameter
Name
Description
parent
BuilderParent
Returns
Type
Description
AlloyDbReference.Builder
Overrides
AbstractMessage.newBuilderForType(AbstractMessage.BuilderParent parent)
toBuilder()
public AlloyDbReference . Builder toBuilder ()
Returns
Type
Description
AlloyDbReference.Builder
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
