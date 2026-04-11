---
title: "Class BatchProcessRequest (2.92.0) \_|\_ Java client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-document-ai/latest/com.google.cloud.documentai.v1.BatchProcessRequest
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-document-ai/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-document-ai/latest/com.google.cloud.documentai.v1.BatchProcessRequest
  title: "Class BatchProcessRequest (2.92.0) \_|\_ Java client libraries \_|\_ Google\
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
Class BatchProcessRequest (2.92.0)
Stay organized with collections
Save and categorize content based on your preferences.
2.92.0 (latest)
2.91.0
2.89.0
2.87.0
2.86.0
2.85.0
2.84.0
2.82.0
2.80.0
2.79.0
2.78.0
2.77.0
2.76.0
2.74.0
2.72.0
2.71.0
2.68.0
2.67.0
2.66.0
2.64.0
2.63.0
2.62.0
2.61.0
2.60.0
2.59.0
2.58.0
2.57.0
2.56.0
2.55.0
2.53.0
2.52.0
2.51.0
2.50.0
2.49.0
2.48.0
2.47.0
2.46.0
2.45.0
2.44.0
2.43.0
2.41.0
2.40.0
2.39.0
2.38.0
2.37.0
2.36.0
2.35.0
2.34.0
2.33.0
2.32.0
2.31.0
2.28.0
2.27.0
2.26.0
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
2.13.0
2.12.0
2.11.0
2.10.0
2.9.0
2.8.0
2.7.5
2.6.2
2.5.1
2.4.3
2.3.1
2.2.1
2.1.9
public final class BatchProcessRequest extends GeneratedMessage implements BatchProcessRequestOrBuilder
Request message for
BatchProcessDocuments .
Protobuf type google.cloud.documentai.v1.BatchProcessRequest
Inheritance
Object >
AbstractMessageLite<MessageType,BuilderType> >
AbstractMessage >
GeneratedMessage >
BatchProcessRequest
Implements
BatchProcessRequestOrBuilder
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
DOCUMENT_OUTPUT_CONFIG_FIELD_NUMBER
public static final int DOCUMENT_OUTPUT_CONFIG_FIELD_NUMBER
Field Value
Type
Description
int
INPUT_DOCUMENTS_FIELD_NUMBER
public static final int INPUT_DOCUMENTS_FIELD_NUMBER
Field Value
Type
Description
int
LABELS_FIELD_NUMBER
public static final int LABELS_FIELD_NUMBER
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
PROCESS_OPTIONS_FIELD_NUMBER
public static final int PROCESS_OPTIONS_FIELD_NUMBER
Field Value
Type
Description
int
SKIP_HUMAN_REVIEW_FIELD_NUMBER
public static final int SKIP_HUMAN_REVIEW_FIELD_NUMBER
Field Value
Type
Description
int
Static Methods
getDefaultInstance()
public static BatchProcessRequest getDefaultInstance ()
Returns
Type
Description
BatchProcessRequest
getDescriptor()
public static final Descriptors . Descriptor getDescriptor ()
Returns
Type
Description
Descriptor
newBuilder()
public static BatchProcessRequest . Builder newBuilder ()
Returns
Type
Description
BatchProcessRequest.Builder
newBuilder(BatchProcessRequest prototype)
public static BatchProcessRequest . Builder newBuilder ( BatchProcessRequest prototype )
Parameter
Name
Description
prototype
BatchProcessRequest
Returns
Type
Description
BatchProcessRequest.Builder
parseDelimitedFrom(InputStream input)
public static BatchProcessRequest parseDelimitedFrom ( InputStream input )
Parameter
Name
Description
input
InputStream
Returns
Type
Description
BatchProcessRequest
Exceptions
Type
Description
IOException
parseDelimitedFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
public static BatchProcessRequest parseDelimitedFrom ( InputStream input , ExtensionRegistryLite extensionRegistry )
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
BatchProcessRequest
Exceptions
Type
Description
IOException
parseFrom(byte[] data)
public static BatchProcessRequest parseFrom ( byte [] data )
Parameter
Name
Description
data
byte []
Returns
Type
Description
BatchProcessRequest
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(byte[] data, ExtensionRegistryLite extensionRegistry)
public static BatchProcessRequest parseFrom ( byte [] data , ExtensionRegistryLite extensionRegistry )
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
BatchProcessRequest
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteString data)
public static BatchProcessRequest parseFrom ( ByteString data )
Parameter
Name
Description
data
ByteString
Returns
Type
Description
BatchProcessRequest
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteString data, ExtensionRegistryLite extensionRegistry)
public static BatchProcessRequest parseFrom ( ByteString data , ExtensionRegistryLite extensionRegistry )
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
BatchProcessRequest
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(CodedInputStream input)
public static BatchProcessRequest parseFrom ( CodedInputStream input )
Parameter
Name
Description
input
CodedInputStream
Returns
Type
Description
BatchProcessRequest
Exceptions
Type
Description
IOException
parseFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public static BatchProcessRequest parseFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
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
BatchProcessRequest
Exceptions
Type
Description
IOException
parseFrom(InputStream input)
public static BatchProcessRequest parseFrom ( InputStream input )
Parameter
Name
Description
input
InputStream
Returns
Type
Description
BatchProcessRequest
Exceptions
Type
Description
IOException
parseFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
public static BatchProcessRequest parseFrom ( InputStream input , ExtensionRegistryLite extensionRegistry )
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
BatchProcessRequest
Exceptions
Type
Description
IOException
parseFrom(ByteBuffer data)
public static BatchProcessRequest parseFrom ( ByteBuffer data )
Parameter
Name
Description
data
ByteBuffer
Returns
Type
Description
BatchProcessRequest
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteBuffer data, ExtensionRegistryLite extensionRegistry)
public static BatchProcessRequest parseFrom ( ByteBuffer data , ExtensionRegistryLite extensionRegistry )
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
BatchProcessRequest
Exceptions
Type
Description
InvalidProtocolBufferException
parser()
public static Parser<BatchProcessRequest> parser ()
Returns
Type
Description
Parser < BatchProcessRequest >
Methods
containsLabels(String key)
public boolean containsLabels ( String key )
Optional. The labels with user-defined metadata for the request.
Label keys and values can be no longer than 63 characters
(Unicode codepoints) and can only contain lowercase letters, numeric
characters, underscores, and dashes. International characters are allowed.
Label values are optional. Label keys must start with a letter.
map<string, string> labels = 9 [(.google.api.field_behavior) = OPTIONAL];
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
public BatchProcessRequest getDefaultInstanceForType ()
Returns
Type
Description
BatchProcessRequest
getDocumentOutputConfig()
public DocumentOutputConfig getDocumentOutputConfig ()
The output configuration for the
BatchProcessDocuments
method.
.google.cloud.documentai.v1.DocumentOutputConfig document_output_config = 6;
Returns
Type
Description
DocumentOutputConfig
The documentOutputConfig.
getDocumentOutputConfigOrBuilder()
public DocumentOutputConfigOrBuilder getDocumentOutputConfigOrBuilder ()
The output configuration for the
BatchProcessDocuments
method.
.google.cloud.documentai.v1.DocumentOutputConfig document_output_config = 6;
Returns
Type
Description
DocumentOutputConfigOrBuilder
getInputDocuments()
public BatchDocumentsInputConfig getInputDocuments ()
The input documents for the
BatchProcessDocuments
method.
.google.cloud.documentai.v1.BatchDocumentsInputConfig input_documents = 5;
Returns
Type
Description
BatchDocumentsInputConfig
The inputDocuments.
getInputDocumentsOrBuilder()
public BatchDocumentsInputConfigOrBuilder getInputDocumentsOrBuilder ()
The input documents for the
BatchProcessDocuments
method.
.google.cloud.documentai.v1.BatchDocumentsInputConfig input_documents = 5;
Returns
Type
Description
BatchDocumentsInputConfigOrBuilder
getLabels() (deprecated)
public Map<String , String > getLabels ()
Use #getLabelsMap() instead.
Returns
Type
Description
Map < String , String >
getLabelsCount()
public int getLabelsCount ()
Optional. The labels with user-defined metadata for the request.
Label keys and values can be no longer than 63 characters
(Unicode codepoints) and can only contain lowercase letters, numeric
characters, underscores, and dashes. International characters are allowed.
Label values are optional. Label keys must start with a letter.
map<string, string> labels = 9 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
int
getLabelsMap()
public Map<String , String > getLabelsMap ()
Optional. The labels with user-defined metadata for the request.
Label keys and values can be no longer than 63 characters
(Unicode codepoints) and can only contain lowercase letters, numeric
characters, underscores, and dashes. International characters are allowed.
Label values are optional. Label keys must start with a letter.
map<string, string> labels = 9 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
Map < String , String >
getLabelsOrDefault(String key, String defaultValue)
public String getLabelsOrDefault ( String key , String defaultValue )
Optional. The labels with user-defined metadata for the request.
Label keys and values can be no longer than 63 characters
(Unicode codepoints) and can only contain lowercase letters, numeric
characters, underscores, and dashes. International characters are allowed.
Label values are optional. Label keys must start with a letter.
map<string, string> labels = 9 [(.google.api.field_behavior) = OPTIONAL];
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
getLabelsOrThrow(String key)
public String getLabelsOrThrow ( String key )
Optional. The labels with user-defined metadata for the request.
Label keys and values can be no longer than 63 characters
(Unicode codepoints) and can only contain lowercase letters, numeric
characters, underscores, and dashes. International characters are allowed.
Label values are optional. Label keys must start with a letter.
map<string, string> labels = 9 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
key
String
Returns
Type
Description
String
getName()
public String getName ()
Required. The resource name of
Processor or
ProcessorVersion .
Format: projects/{project}/locations/{location}/processors/{processor} ,
or
projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processorVersion}
string name = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }
Returns
Type
Description
String
The name.
getNameBytes()
public ByteString getNameBytes ()
Required. The resource name of
Processor or
ProcessorVersion .
Format: projects/{project}/locations/{location}/processors/{processor} ,
or
projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processorVersion}
string name = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }
Returns
Type
Description
ByteString
The bytes for name.
getParserForType()
public Parser<BatchProcessRequest> getParserForType ()
Returns
Type
Description
Parser < BatchProcessRequest >
Overrides
GeneratedMessage.getParserForType()
getProcessOptions()
public ProcessOptions getProcessOptions ()
Inference-time options for the process API
.google.cloud.documentai.v1.ProcessOptions process_options = 7;
Returns
Type
Description
ProcessOptions
The processOptions.
getProcessOptionsOrBuilder()
public ProcessOptionsOrBuilder getProcessOptionsOrBuilder ()
Inference-time options for the process API
.google.cloud.documentai.v1.ProcessOptions process_options = 7;
Returns
Type
Description
ProcessOptionsOrBuilder
getSerializedSize()
public int getSerializedSize ()
Returns
Type
Description
int
Overrides
GeneratedMessage.getSerializedSize()
getSkipHumanReview()
public boolean getSkipHumanReview ()
Whether human review should be skipped for this request. Default to
false .
bool skip_human_review = 4;
Returns
Type
Description
boolean
The skipHumanReview.
hasDocumentOutputConfig()
public boolean hasDocumentOutputConfig ()
The output configuration for the
BatchProcessDocuments
method.
.google.cloud.documentai.v1.DocumentOutputConfig document_output_config = 6;
Returns
Type
Description
boolean
Whether the documentOutputConfig field is set.
hasInputDocuments()
public boolean hasInputDocuments ()
The input documents for the
BatchProcessDocuments
method.
.google.cloud.documentai.v1.BatchDocumentsInputConfig input_documents = 5;
Returns
Type
Description
boolean
Whether the inputDocuments field is set.
hasProcessOptions()
public boolean hasProcessOptions ()
Inference-time options for the process API
.google.cloud.documentai.v1.ProcessOptions process_options = 7;
Returns
Type
Description
boolean
Whether the processOptions field is set.
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
public BatchProcessRequest . Builder newBuilderForType ()
Returns
Type
Description
BatchProcessRequest.Builder
newBuilderForType(AbstractMessage.BuilderParent parent)
protected BatchProcessRequest . Builder newBuilderForType ( AbstractMessage . BuilderParent parent )
Parameter
Name
Description
parent
BuilderParent
Returns
Type
Description
BatchProcessRequest.Builder
Overrides
AbstractMessage.newBuilderForType(AbstractMessage.BuilderParent parent)
toBuilder()
public BatchProcessRequest . Builder toBuilder ()
Returns
Type
Description
BatchProcessRequest.Builder
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
