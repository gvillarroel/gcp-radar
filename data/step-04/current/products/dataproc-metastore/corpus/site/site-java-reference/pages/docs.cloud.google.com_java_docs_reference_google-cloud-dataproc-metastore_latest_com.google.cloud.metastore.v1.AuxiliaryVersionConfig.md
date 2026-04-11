---
title: "Class AuxiliaryVersionConfig (2.89.0) \_|\_ Java client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc-metastore/latest/com.google.cloud.metastore.v1.AuxiliaryVersionConfig
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc-metastore/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc-metastore/latest/com.google.cloud.metastore.v1.AuxiliaryVersionConfig
  title: "Class AuxiliaryVersionConfig (2.89.0) \_|\_ Java client libraries \_|\_\
    \ Google Cloud Documentation"
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
Class AuxiliaryVersionConfig (2.89.0)
Stay organized with collections
Save and categorize content based on your preferences.
2.89.0 (latest)
2.88.0
2.86.0
2.84.0
2.83.0
2.82.0
2.81.0
2.79.0
2.77.0
2.76.0
2.75.0
2.74.0
2.73.0
2.71.0
2.69.0
2.68.0
2.65.0
2.64.0
2.63.0
2.61.0
2.60.0
2.59.0
2.58.0
2.57.0
2.56.0
2.55.0
2.54.0
2.53.0
2.52.0
2.50.0
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
2.38.0
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
2.25.0
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
2.10.0
2.9.0
2.8.0
2.7.0
2.6.0
2.5.0
2.4.4
2.3.0
2.2.0
2.1.9
public final class AuxiliaryVersionConfig extends GeneratedMessage implements AuxiliaryVersionConfigOrBuilder
Configuration information for the auxiliary service versions.
Protobuf type google.cloud.metastore.v1.AuxiliaryVersionConfig
Inheritance
Object >
AbstractMessageLite<MessageType,BuilderType> >
AbstractMessage >
GeneratedMessage >
AuxiliaryVersionConfig
Implements
AuxiliaryVersionConfigOrBuilder
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
CONFIG_OVERRIDES_FIELD_NUMBER
public static final int CONFIG_OVERRIDES_FIELD_NUMBER
Field Value
Type
Description
int
NETWORK_CONFIG_FIELD_NUMBER
public static final int NETWORK_CONFIG_FIELD_NUMBER
Field Value
Type
Description
int
VERSION_FIELD_NUMBER
public static final int VERSION_FIELD_NUMBER
Field Value
Type
Description
int
Static Methods
getDefaultInstance()
public static AuxiliaryVersionConfig getDefaultInstance ()
Returns
Type
Description
AuxiliaryVersionConfig
getDescriptor()
public static final Descriptors . Descriptor getDescriptor ()
Returns
Type
Description
Descriptor
newBuilder()
public static AuxiliaryVersionConfig . Builder newBuilder ()
Returns
Type
Description
AuxiliaryVersionConfig.Builder
newBuilder(AuxiliaryVersionConfig prototype)
public static AuxiliaryVersionConfig . Builder newBuilder ( AuxiliaryVersionConfig prototype )
Parameter
Name
Description
prototype
AuxiliaryVersionConfig
Returns
Type
Description
AuxiliaryVersionConfig.Builder
parseDelimitedFrom(InputStream input)
public static AuxiliaryVersionConfig parseDelimitedFrom ( InputStream input )
Parameter
Name
Description
input
InputStream
Returns
Type
Description
AuxiliaryVersionConfig
Exceptions
Type
Description
IOException
parseDelimitedFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
public static AuxiliaryVersionConfig parseDelimitedFrom ( InputStream input , ExtensionRegistryLite extensionRegistry )
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
AuxiliaryVersionConfig
Exceptions
Type
Description
IOException
parseFrom(byte[] data)
public static AuxiliaryVersionConfig parseFrom ( byte [] data )
Parameter
Name
Description
data
byte []
Returns
Type
Description
AuxiliaryVersionConfig
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(byte[] data, ExtensionRegistryLite extensionRegistry)
public static AuxiliaryVersionConfig parseFrom ( byte [] data , ExtensionRegistryLite extensionRegistry )
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
AuxiliaryVersionConfig
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteString data)
public static AuxiliaryVersionConfig parseFrom ( ByteString data )
Parameter
Name
Description
data
ByteString
Returns
Type
Description
AuxiliaryVersionConfig
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteString data, ExtensionRegistryLite extensionRegistry)
public static AuxiliaryVersionConfig parseFrom ( ByteString data , ExtensionRegistryLite extensionRegistry )
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
AuxiliaryVersionConfig
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(CodedInputStream input)
public static AuxiliaryVersionConfig parseFrom ( CodedInputStream input )
Parameter
Name
Description
input
CodedInputStream
Returns
Type
Description
AuxiliaryVersionConfig
Exceptions
Type
Description
IOException
parseFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public static AuxiliaryVersionConfig parseFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
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
AuxiliaryVersionConfig
Exceptions
Type
Description
IOException
parseFrom(InputStream input)
public static AuxiliaryVersionConfig parseFrom ( InputStream input )
Parameter
Name
Description
input
InputStream
Returns
Type
Description
AuxiliaryVersionConfig
Exceptions
Type
Description
IOException
parseFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
public static AuxiliaryVersionConfig parseFrom ( InputStream input , ExtensionRegistryLite extensionRegistry )
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
AuxiliaryVersionConfig
Exceptions
Type
Description
IOException
parseFrom(ByteBuffer data)
public static AuxiliaryVersionConfig parseFrom ( ByteBuffer data )
Parameter
Name
Description
data
ByteBuffer
Returns
Type
Description
AuxiliaryVersionConfig
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteBuffer data, ExtensionRegistryLite extensionRegistry)
public static AuxiliaryVersionConfig parseFrom ( ByteBuffer data , ExtensionRegistryLite extensionRegistry )
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
AuxiliaryVersionConfig
Exceptions
Type
Description
InvalidProtocolBufferException
parser()
public static Parser<AuxiliaryVersionConfig> parser ()
Returns
Type
Description
Parser < AuxiliaryVersionConfig >
Methods
containsConfigOverrides(String key)
public boolean containsConfigOverrides ( String key )
A mapping of Hive metastore configuration key-value pairs to apply to the
auxiliary Hive metastore (configured in hive-site.xml ) in addition to
the primary version's overrides. If keys are present in both the auxiliary
version's overrides and the primary version's overrides, the value from
the auxiliary version's overrides takes precedence.
map<string, string> config_overrides = 2;
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
getConfigOverrides() (deprecated)
public Map<String , String > getConfigOverrides ()
Use #getConfigOverridesMap() instead.
Returns
Type
Description
Map < String , String >
getConfigOverridesCount()
public int getConfigOverridesCount ()
A mapping of Hive metastore configuration key-value pairs to apply to the
auxiliary Hive metastore (configured in hive-site.xml ) in addition to
the primary version's overrides. If keys are present in both the auxiliary
version's overrides and the primary version's overrides, the value from
the auxiliary version's overrides takes precedence.
map<string, string> config_overrides = 2;
Returns
Type
Description
int
getConfigOverridesMap()
public Map<String , String > getConfigOverridesMap ()
A mapping of Hive metastore configuration key-value pairs to apply to the
auxiliary Hive metastore (configured in hive-site.xml ) in addition to
the primary version's overrides. If keys are present in both the auxiliary
version's overrides and the primary version's overrides, the value from
the auxiliary version's overrides takes precedence.
map<string, string> config_overrides = 2;
Returns
Type
Description
Map < String , String >
getConfigOverridesOrDefault(String key, String defaultValue)
public String getConfigOverridesOrDefault ( String key , String defaultValue )
A mapping of Hive metastore configuration key-value pairs to apply to the
auxiliary Hive metastore (configured in hive-site.xml ) in addition to
the primary version's overrides. If keys are present in both the auxiliary
version's overrides and the primary version's overrides, the value from
the auxiliary version's overrides takes precedence.
map<string, string> config_overrides = 2;
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
getConfigOverridesOrThrow(String key)
public String getConfigOverridesOrThrow ( String key )
A mapping of Hive metastore configuration key-value pairs to apply to the
auxiliary Hive metastore (configured in hive-site.xml ) in addition to
the primary version's overrides. If keys are present in both the auxiliary
version's overrides and the primary version's overrides, the value from
the auxiliary version's overrides takes precedence.
map<string, string> config_overrides = 2;
Parameter
Name
Description
key
String
Returns
Type
Description
String
getDefaultInstanceForType()
public AuxiliaryVersionConfig getDefaultInstanceForType ()
Returns
Type
Description
AuxiliaryVersionConfig
getNetworkConfig()
public NetworkConfig getNetworkConfig ()
Output only. The network configuration contains the endpoint URI(s) of the
auxiliary Hive metastore service.
.google.cloud.metastore.v1.NetworkConfig network_config = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
NetworkConfig
The networkConfig.
getNetworkConfigOrBuilder()
public NetworkConfigOrBuilder getNetworkConfigOrBuilder ()
Output only. The network configuration contains the endpoint URI(s) of the
auxiliary Hive metastore service.
.google.cloud.metastore.v1.NetworkConfig network_config = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
NetworkConfigOrBuilder
getParserForType()
public Parser<AuxiliaryVersionConfig> getParserForType ()
Returns
Type
Description
Parser < AuxiliaryVersionConfig >
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
getVersion()
public String getVersion ()
The Hive metastore version of the auxiliary service. It must be less
than the primary Hive metastore service's version.
string version = 1;
Returns
Type
Description
String
The version.
getVersionBytes()
public ByteString getVersionBytes ()
The Hive metastore version of the auxiliary service. It must be less
than the primary Hive metastore service's version.
string version = 1;
Returns
Type
Description
ByteString
The bytes for version.
hasNetworkConfig()
public boolean hasNetworkConfig ()
Output only. The network configuration contains the endpoint URI(s) of the
auxiliary Hive metastore service.
.google.cloud.metastore.v1.NetworkConfig network_config = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
boolean
Whether the networkConfig field is set.
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
public AuxiliaryVersionConfig . Builder newBuilderForType ()
Returns
Type
Description
AuxiliaryVersionConfig.Builder
newBuilderForType(AbstractMessage.BuilderParent parent)
protected AuxiliaryVersionConfig . Builder newBuilderForType ( AbstractMessage . BuilderParent parent )
Parameter
Name
Description
parent
BuilderParent
Returns
Type
Description
AuxiliaryVersionConfig.Builder
Overrides
AbstractMessage.newBuilderForType(AbstractMessage.BuilderParent parent)
toBuilder()
public AuxiliaryVersionConfig . Builder toBuilder ()
Returns
Type
Description
AuxiliaryVersionConfig.Builder
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
