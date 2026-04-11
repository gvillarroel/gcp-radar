---
title: "Class BatchProcessRequest.Builder (2.92.0) \_|\_ Java client libraries \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-document-ai/latest/com.google.cloud.documentai.v1.BatchProcessRequest.Builder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-document-ai/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-document-ai/latest/com.google.cloud.documentai.v1.BatchProcessRequest.Builder
  title: "Class BatchProcessRequest.Builder (2.92.0) \_|\_ Java client libraries \_\
    |\_ Google Cloud Documentation"
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
Class BatchProcessRequest.Builder (2.92.0)
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
public static final class BatchProcessRequest . Builder extends GeneratedMessage . Builder<BatchProcessRequest . Builder > implements BatchProcessRequestOrBuilder
Request message for
BatchProcessDocuments .
Protobuf type google.cloud.documentai.v1.BatchProcessRequest
Inheritance
java.lang.Object >
AbstractMessageLite.Builder<MessageType,BuilderType> >
AbstractMessage.Builder<BuilderType> >
GeneratedMessage.Builder >
BatchProcessRequest.Builder
Implements
BatchProcessRequestOrBuilder
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
public BatchProcessRequest build ()
Returns
Type
Description
BatchProcessRequest
buildPartial()
public BatchProcessRequest buildPartial ()
Returns
Type
Description
BatchProcessRequest
clear()
public BatchProcessRequest . Builder clear ()
Returns
Type
Description
BatchProcessRequest.Builder
Overrides
GeneratedMessage.Builder<BuilderType>.clear()
clearDocumentOutputConfig()
public BatchProcessRequest . Builder clearDocumentOutputConfig ()
The output configuration for the
BatchProcessDocuments
method.
.google.cloud.documentai.v1.DocumentOutputConfig document_output_config = 6;
Returns
Type
Description
BatchProcessRequest.Builder
clearInputDocuments()
public BatchProcessRequest . Builder clearInputDocuments ()
The input documents for the
BatchProcessDocuments
method.
.google.cloud.documentai.v1.BatchDocumentsInputConfig input_documents = 5;
Returns
Type
Description
BatchProcessRequest.Builder
clearLabels()
public BatchProcessRequest . Builder clearLabels ()
Returns
Type
Description
BatchProcessRequest.Builder
clearName()
public BatchProcessRequest . Builder clearName ()
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
BatchProcessRequest.Builder
This builder for chaining.
clearProcessOptions()
public BatchProcessRequest . Builder clearProcessOptions ()
Inference-time options for the process API
.google.cloud.documentai.v1.ProcessOptions process_options = 7;
Returns
Type
Description
BatchProcessRequest.Builder
clearSkipHumanReview()
public BatchProcessRequest . Builder clearSkipHumanReview ()
Whether human review should be skipped for this request. Default to
false .
bool skip_human_review = 4;
Returns
Type
Description
BatchProcessRequest.Builder
This builder for chaining.
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
getDefaultInstanceForType()
public BatchProcessRequest getDefaultInstanceForType ()
Returns
Type
Description
BatchProcessRequest
getDescriptorForType()
public Descriptors . Descriptor getDescriptorForType ()
Returns
Type
Description
Descriptor
Overrides
GeneratedMessage.Builder<BuilderType>.getDescriptorForType()
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
getDocumentOutputConfigBuilder()
public DocumentOutputConfig . Builder getDocumentOutputConfigBuilder ()
The output configuration for the
BatchProcessDocuments
method.
.google.cloud.documentai.v1.DocumentOutputConfig document_output_config = 6;
Returns
Type
Description
DocumentOutputConfig.Builder
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
getInputDocumentsBuilder()
public BatchDocumentsInputConfig . Builder getInputDocumentsBuilder ()
The input documents for the
BatchProcessDocuments
method.
.google.cloud.documentai.v1.BatchDocumentsInputConfig input_documents = 5;
Returns
Type
Description
BatchDocumentsInputConfig.Builder
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
getMutableLabels() (deprecated)
public Map<String , String > getMutableLabels ()
Use alternate mutation accessors instead.
Returns
Type
Description
Map < String , String >
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
getProcessOptions()
public ProcessOptions getProcessOptions ()
Inference-time options for the process API
.google.cloud.documentai.v1.ProcessOptions process_options = 7;
Returns
Type
Description
ProcessOptions
The processOptions.
getProcessOptionsBuilder()
public ProcessOptions . Builder getProcessOptionsBuilder ()
Inference-time options for the process API
.google.cloud.documentai.v1.ProcessOptions process_options = 7;
Returns
Type
Description
ProcessOptions.Builder
getProcessOptionsOrBuilder()
public ProcessOptionsOrBuilder getProcessOptionsOrBuilder ()
Inference-time options for the process API
.google.cloud.documentai.v1.ProcessOptions process_options = 7;
Returns
Type
Description
ProcessOptionsOrBuilder
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
mergeDocumentOutputConfig(DocumentOutputConfig value)
public BatchProcessRequest . Builder mergeDocumentOutputConfig ( DocumentOutputConfig value )
The output configuration for the
BatchProcessDocuments
method.
.google.cloud.documentai.v1.DocumentOutputConfig document_output_config = 6;
Parameter
Name
Description
value
DocumentOutputConfig
Returns
Type
Description
BatchProcessRequest.Builder
mergeFrom(BatchProcessRequest other)
public BatchProcessRequest . Builder mergeFrom ( BatchProcessRequest other )
Parameter
Name
Description
other
BatchProcessRequest
Returns
Type
Description
BatchProcessRequest.Builder
mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public BatchProcessRequest . Builder mergeFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
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
BatchProcessRequest.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
Exceptions
Type
Description
IOException
mergeFrom(Message other)
public BatchProcessRequest . Builder mergeFrom ( Message other )
Parameter
Name
Description
other
Message
Returns
Type
Description
BatchProcessRequest.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)
mergeInputDocuments(BatchDocumentsInputConfig value)
public BatchProcessRequest . Builder mergeInputDocuments ( BatchDocumentsInputConfig value )
The input documents for the
BatchProcessDocuments
method.
.google.cloud.documentai.v1.BatchDocumentsInputConfig input_documents = 5;
Parameter
Name
Description
value
BatchDocumentsInputConfig
Returns
Type
Description
BatchProcessRequest.Builder
mergeProcessOptions(ProcessOptions value)
public BatchProcessRequest . Builder mergeProcessOptions ( ProcessOptions value )
Inference-time options for the process API
.google.cloud.documentai.v1.ProcessOptions process_options = 7;
Parameter
Name
Description
value
ProcessOptions
Returns
Type
Description
BatchProcessRequest.Builder
putAllLabels(Map<String,String> values)
public BatchProcessRequest . Builder putAllLabels ( Map<String , String > values )
Optional. The labels with user-defined metadata for the request.
Label keys and values can be no longer than 63 characters
(Unicode codepoints) and can only contain lowercase letters, numeric
characters, underscores, and dashes. International characters are allowed.
Label values are optional. Label keys must start with a letter.
map<string, string> labels = 9 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
values
Map < String , String >
Returns
Type
Description
BatchProcessRequest.Builder
putLabels(String key, String value)
public BatchProcessRequest . Builder putLabels ( String key , String value )
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
value
String
Returns
Type
Description
BatchProcessRequest.Builder
removeLabels(String key)
public BatchProcessRequest . Builder removeLabels ( String key )
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
BatchProcessRequest.Builder
setDocumentOutputConfig(DocumentOutputConfig value)
public BatchProcessRequest . Builder setDocumentOutputConfig ( DocumentOutputConfig value )
The output configuration for the
BatchProcessDocuments
method.
.google.cloud.documentai.v1.DocumentOutputConfig document_output_config = 6;
Parameter
Name
Description
value
DocumentOutputConfig
Returns
Type
Description
BatchProcessRequest.Builder
setDocumentOutputConfig(DocumentOutputConfig.Builder builderForValue)
public BatchProcessRequest . Builder setDocumentOutputConfig ( DocumentOutputConfig . Builder builderForValue )
The output configuration for the
BatchProcessDocuments
method.
.google.cloud.documentai.v1.DocumentOutputConfig document_output_config = 6;
Parameter
Name
Description
builderForValue
DocumentOutputConfig.Builder
Returns
Type
Description
BatchProcessRequest.Builder
setInputDocuments(BatchDocumentsInputConfig value)
public BatchProcessRequest . Builder setInputDocuments ( BatchDocumentsInputConfig value )
The input documents for the
BatchProcessDocuments
method.
.google.cloud.documentai.v1.BatchDocumentsInputConfig input_documents = 5;
Parameter
Name
Description
value
BatchDocumentsInputConfig
Returns
Type
Description
BatchProcessRequest.Builder
setInputDocuments(BatchDocumentsInputConfig.Builder builderForValue)
public BatchProcessRequest . Builder setInputDocuments ( BatchDocumentsInputConfig . Builder builderForValue )
The input documents for the
BatchProcessDocuments
method.
.google.cloud.documentai.v1.BatchDocumentsInputConfig input_documents = 5;
Parameter
Name
Description
builderForValue
BatchDocumentsInputConfig.Builder
Returns
Type
Description
BatchProcessRequest.Builder
setName(String value)
public BatchProcessRequest . Builder setName ( String value )
Required. The resource name of
Processor or
ProcessorVersion .
Format: projects/{project}/locations/{location}/processors/{processor} ,
or
projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processorVersion}
string name = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }
Parameter
Name
Description
value
String The name to set.
Returns
Type
Description
BatchProcessRequest.Builder
This builder for chaining.
setNameBytes(ByteString value)
public BatchProcessRequest . Builder setNameBytes ( ByteString value )
Required. The resource name of
Processor or
ProcessorVersion .
Format: projects/{project}/locations/{location}/processors/{processor} ,
or
projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processorVersion}
string name = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }
Parameter
Name
Description
value
ByteString The bytes for name to set.
Returns
Type
Description
BatchProcessRequest.Builder
This builder for chaining.
setProcessOptions(ProcessOptions value)
public BatchProcessRequest . Builder setProcessOptions ( ProcessOptions value )
Inference-time options for the process API
.google.cloud.documentai.v1.ProcessOptions process_options = 7;
Parameter
Name
Description
value
ProcessOptions
Returns
Type
Description
BatchProcessRequest.Builder
setProcessOptions(ProcessOptions.Builder builderForValue)
public BatchProcessRequest . Builder setProcessOptions ( ProcessOptions . Builder builderForValue )
Inference-time options for the process API
.google.cloud.documentai.v1.ProcessOptions process_options = 7;
Parameter
Name
Description
builderForValue
ProcessOptions.Builder
Returns
Type
Description
BatchProcessRequest.Builder
setSkipHumanReview(boolean value)
public BatchProcessRequest . Builder setSkipHumanReview ( boolean value )
Whether human review should be skipped for this request. Default to
false .
bool skip_human_review = 4;
Parameter
Name
Description
value
boolean The skipHumanReview to set.
Returns
Type
Description
BatchProcessRequest.Builder
This builder for chaining.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
