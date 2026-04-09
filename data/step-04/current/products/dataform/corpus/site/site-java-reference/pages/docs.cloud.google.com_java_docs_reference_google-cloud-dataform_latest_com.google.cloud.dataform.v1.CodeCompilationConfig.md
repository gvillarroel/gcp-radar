---
title: "Class CodeCompilationConfig (0.87.0) \_|\_ Java client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-dataform/latest/com.google.cloud.dataform.v1.CodeCompilationConfig
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-dataform/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-dataform/latest/com.google.cloud.dataform.v1.CodeCompilationConfig
  title: "Class CodeCompilationConfig (0.87.0) \_|\_ Java client libraries \_|\_ Google\
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
Class CodeCompilationConfig (0.87.0)
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
public final class CodeCompilationConfig extends GeneratedMessage implements CodeCompilationConfigOrBuilder
Configures various aspects of Dataform code compilation.
Protobuf type google.cloud.dataform.v1.CodeCompilationConfig
Inheritance
Object >
AbstractMessageLite<MessageType,BuilderType> >
AbstractMessage >
GeneratedMessage >
CodeCompilationConfig
Implements
CodeCompilationConfigOrBuilder
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
ASSERTION_SCHEMA_FIELD_NUMBER
public static final int ASSERTION_SCHEMA_FIELD_NUMBER
Field Value
Type
Description
int
BUILTIN_ASSERTION_NAME_PREFIX_FIELD_NUMBER
public static final int BUILTIN_ASSERTION_NAME_PREFIX_FIELD_NUMBER
Field Value
Type
Description
int
DATABASE_SUFFIX_FIELD_NUMBER
public static final int DATABASE_SUFFIX_FIELD_NUMBER
Field Value
Type
Description
int
DEFAULT_DATABASE_FIELD_NUMBER
public static final int DEFAULT_DATABASE_FIELD_NUMBER
Field Value
Type
Description
int
DEFAULT_LOCATION_FIELD_NUMBER
public static final int DEFAULT_LOCATION_FIELD_NUMBER
Field Value
Type
Description
int
DEFAULT_NOTEBOOK_RUNTIME_OPTIONS_FIELD_NUMBER
public static final int DEFAULT_NOTEBOOK_RUNTIME_OPTIONS_FIELD_NUMBER
Field Value
Type
Description
int
DEFAULT_SCHEMA_FIELD_NUMBER
public static final int DEFAULT_SCHEMA_FIELD_NUMBER
Field Value
Type
Description
int
SCHEMA_SUFFIX_FIELD_NUMBER
public static final int SCHEMA_SUFFIX_FIELD_NUMBER
Field Value
Type
Description
int
TABLE_PREFIX_FIELD_NUMBER
public static final int TABLE_PREFIX_FIELD_NUMBER
Field Value
Type
Description
int
VARS_FIELD_NUMBER
public static final int VARS_FIELD_NUMBER
Field Value
Type
Description
int
Static Methods
getDefaultInstance()
public static CodeCompilationConfig getDefaultInstance ()
Returns
Type
Description
CodeCompilationConfig
getDescriptor()
public static final Descriptors . Descriptor getDescriptor ()
Returns
Type
Description
Descriptor
newBuilder()
public static CodeCompilationConfig . Builder newBuilder ()
Returns
Type
Description
CodeCompilationConfig.Builder
newBuilder(CodeCompilationConfig prototype)
public static CodeCompilationConfig . Builder newBuilder ( CodeCompilationConfig prototype )
Parameter
Name
Description
prototype
CodeCompilationConfig
Returns
Type
Description
CodeCompilationConfig.Builder
parseDelimitedFrom(InputStream input)
public static CodeCompilationConfig parseDelimitedFrom ( InputStream input )
Parameter
Name
Description
input
InputStream
Returns
Type
Description
CodeCompilationConfig
Exceptions
Type
Description
IOException
parseDelimitedFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
public static CodeCompilationConfig parseDelimitedFrom ( InputStream input , ExtensionRegistryLite extensionRegistry )
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
CodeCompilationConfig
Exceptions
Type
Description
IOException
parseFrom(byte[] data)
public static CodeCompilationConfig parseFrom ( byte [] data )
Parameter
Name
Description
data
byte []
Returns
Type
Description
CodeCompilationConfig
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(byte[] data, ExtensionRegistryLite extensionRegistry)
public static CodeCompilationConfig parseFrom ( byte [] data , ExtensionRegistryLite extensionRegistry )
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
CodeCompilationConfig
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteString data)
public static CodeCompilationConfig parseFrom ( ByteString data )
Parameter
Name
Description
data
ByteString
Returns
Type
Description
CodeCompilationConfig
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteString data, ExtensionRegistryLite extensionRegistry)
public static CodeCompilationConfig parseFrom ( ByteString data , ExtensionRegistryLite extensionRegistry )
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
CodeCompilationConfig
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(CodedInputStream input)
public static CodeCompilationConfig parseFrom ( CodedInputStream input )
Parameter
Name
Description
input
CodedInputStream
Returns
Type
Description
CodeCompilationConfig
Exceptions
Type
Description
IOException
parseFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public static CodeCompilationConfig parseFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
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
CodeCompilationConfig
Exceptions
Type
Description
IOException
parseFrom(InputStream input)
public static CodeCompilationConfig parseFrom ( InputStream input )
Parameter
Name
Description
input
InputStream
Returns
Type
Description
CodeCompilationConfig
Exceptions
Type
Description
IOException
parseFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
public static CodeCompilationConfig parseFrom ( InputStream input , ExtensionRegistryLite extensionRegistry )
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
CodeCompilationConfig
Exceptions
Type
Description
IOException
parseFrom(ByteBuffer data)
public static CodeCompilationConfig parseFrom ( ByteBuffer data )
Parameter
Name
Description
data
ByteBuffer
Returns
Type
Description
CodeCompilationConfig
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteBuffer data, ExtensionRegistryLite extensionRegistry)
public static CodeCompilationConfig parseFrom ( ByteBuffer data , ExtensionRegistryLite extensionRegistry )
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
CodeCompilationConfig
Exceptions
Type
Description
InvalidProtocolBufferException
parser()
public static Parser<CodeCompilationConfig> parser ()
Returns
Type
Description
Parser < CodeCompilationConfig >
Methods
containsVars(String key)
public boolean containsVars ( String key )
Optional. User-defined variables that are made available to project code
during compilation.
map<string, string> vars = 4 [(.google.api.field_behavior) = OPTIONAL];
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
getAssertionSchema()
public String getAssertionSchema ()
Optional. The default schema (BigQuery dataset ID) for assertions.
string assertion_schema = 3 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
String
The assertionSchema.
getAssertionSchemaBytes()
public ByteString getAssertionSchemaBytes ()
Optional. The default schema (BigQuery dataset ID) for assertions.
string assertion_schema = 3 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
ByteString
The bytes for assertionSchema.
getBuiltinAssertionNamePrefix()
public String getBuiltinAssertionNamePrefix ()
Optional. The prefix to prepend to built-in assertion names.
string builtin_assertion_name_prefix = 10 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
String
The builtinAssertionNamePrefix.
getBuiltinAssertionNamePrefixBytes()
public ByteString getBuiltinAssertionNamePrefixBytes ()
Optional. The prefix to prepend to built-in assertion names.
string builtin_assertion_name_prefix = 10 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
ByteString
The bytes for builtinAssertionNamePrefix.
getDatabaseSuffix()
public String getDatabaseSuffix ()
Optional. The suffix that should be appended to all database (Google Cloud
project ID) names.
string database_suffix = 5 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
String
The databaseSuffix.
getDatabaseSuffixBytes()
public ByteString getDatabaseSuffixBytes ()
Optional. The suffix that should be appended to all database (Google Cloud
project ID) names.
string database_suffix = 5 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
ByteString
The bytes for databaseSuffix.
getDefaultDatabase()
public String getDefaultDatabase ()
Optional. The default database (Google Cloud project ID).
string default_database = 1 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
String
The defaultDatabase.
getDefaultDatabaseBytes()
public ByteString getDefaultDatabaseBytes ()
Optional. The default database (Google Cloud project ID).
string default_database = 1 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
ByteString
The bytes for defaultDatabase.
getDefaultInstanceForType()
public CodeCompilationConfig getDefaultInstanceForType ()
Returns
Type
Description
CodeCompilationConfig
getDefaultLocation()
public String getDefaultLocation ()
Optional. The default BigQuery location to use. Defaults to "US".
See the BigQuery docs for a full list of locations:
https://cloud.google.com/bigquery/docs/locations .
string default_location = 8 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
String
The defaultLocation.
getDefaultLocationBytes()
public ByteString getDefaultLocationBytes ()
Optional. The default BigQuery location to use. Defaults to "US".
See the BigQuery docs for a full list of locations:
https://cloud.google.com/bigquery/docs/locations .
string default_location = 8 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
ByteString
The bytes for defaultLocation.
getDefaultNotebookRuntimeOptions()
public NotebookRuntimeOptions getDefaultNotebookRuntimeOptions ()
Optional. The default notebook runtime options.
.google.cloud.dataform.v1.NotebookRuntimeOptions default_notebook_runtime_options = 9 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
NotebookRuntimeOptions
The defaultNotebookRuntimeOptions.
getDefaultNotebookRuntimeOptionsOrBuilder()
public NotebookRuntimeOptionsOrBuilder getDefaultNotebookRuntimeOptionsOrBuilder ()
Optional. The default notebook runtime options.
.google.cloud.dataform.v1.NotebookRuntimeOptions default_notebook_runtime_options = 9 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
NotebookRuntimeOptionsOrBuilder
getDefaultSchema()
public String getDefaultSchema ()
Optional. The default schema (BigQuery dataset ID).
string default_schema = 2 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
String
The defaultSchema.
getDefaultSchemaBytes()
public ByteString getDefaultSchemaBytes ()
Optional. The default schema (BigQuery dataset ID).
string default_schema = 2 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
ByteString
The bytes for defaultSchema.
getParserForType()
public Parser<CodeCompilationConfig> getParserForType ()
Returns
Type
Description
Parser < CodeCompilationConfig >
Overrides
GeneratedMessage.getParserForType()
getSchemaSuffix()
public String getSchemaSuffix ()
Optional. The suffix that should be appended to all schema (BigQuery
dataset ID) names.
string schema_suffix = 6 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
String
The schemaSuffix.
getSchemaSuffixBytes()
public ByteString getSchemaSuffixBytes ()
Optional. The suffix that should be appended to all schema (BigQuery
dataset ID) names.
string schema_suffix = 6 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
ByteString
The bytes for schemaSuffix.
getSerializedSize()
public int getSerializedSize ()
Returns
Type
Description
int
Overrides
GeneratedMessage.getSerializedSize()
getTablePrefix()
public String getTablePrefix ()
Optional. The prefix that should be prepended to all table names.
string table_prefix = 7 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
String
The tablePrefix.
getTablePrefixBytes()
public ByteString getTablePrefixBytes ()
Optional. The prefix that should be prepended to all table names.
string table_prefix = 7 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
ByteString
The bytes for tablePrefix.
getVars() (deprecated)
public Map<String , String > getVars ()
Use #getVarsMap() instead.
Returns
Type
Description
Map < String , String >
getVarsCount()
public int getVarsCount ()
Optional. User-defined variables that are made available to project code
during compilation.
map<string, string> vars = 4 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
int
getVarsMap()
public Map<String , String > getVarsMap ()
Optional. User-defined variables that are made available to project code
during compilation.
map<string, string> vars = 4 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
Map < String , String >
getVarsOrDefault(String key, String defaultValue)
public String getVarsOrDefault ( String key , String defaultValue )
Optional. User-defined variables that are made available to project code
during compilation.
map<string, string> vars = 4 [(.google.api.field_behavior) = OPTIONAL];
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
getVarsOrThrow(String key)
public String getVarsOrThrow ( String key )
Optional. User-defined variables that are made available to project code
during compilation.
map<string, string> vars = 4 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
key
String
Returns
Type
Description
String
hasDefaultNotebookRuntimeOptions()
public boolean hasDefaultNotebookRuntimeOptions ()
Optional. The default notebook runtime options.
.google.cloud.dataform.v1.NotebookRuntimeOptions default_notebook_runtime_options = 9 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
boolean
Whether the defaultNotebookRuntimeOptions field is set.
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
public CodeCompilationConfig . Builder newBuilderForType ()
Returns
Type
Description
CodeCompilationConfig.Builder
newBuilderForType(AbstractMessage.BuilderParent parent)
protected CodeCompilationConfig . Builder newBuilderForType ( AbstractMessage . BuilderParent parent )
Parameter
Name
Description
parent
BuilderParent
Returns
Type
Description
CodeCompilationConfig.Builder
Overrides
AbstractMessage.newBuilderForType(AbstractMessage.BuilderParent parent)
toBuilder()
public CodeCompilationConfig . Builder toBuilder ()
Returns
Type
Description
CodeCompilationConfig.Builder
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
