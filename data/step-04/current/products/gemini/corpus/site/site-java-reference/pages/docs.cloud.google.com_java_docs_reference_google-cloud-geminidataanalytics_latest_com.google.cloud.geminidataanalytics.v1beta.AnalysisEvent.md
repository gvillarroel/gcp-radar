---
title: "Class AnalysisEvent (0.16.0) \_|\_ Java client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-geminidataanalytics/latest/com.google.cloud.geminidataanalytics.v1beta.AnalysisEvent
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-geminidataanalytics/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-geminidataanalytics/latest/com.google.cloud.geminidataanalytics.v1beta.AnalysisEvent
  title: "Class AnalysisEvent (0.16.0) \_|\_ Java client libraries \_|\_ Google Cloud\
    \ Documentation"
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
Class AnalysisEvent (0.16.0)
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
public final class AnalysisEvent extends GeneratedMessage implements AnalysisEventOrBuilder
An event indicating the progress of an analysis.
Protobuf type google.cloud.geminidataanalytics.v1beta.AnalysisEvent
Inheritance
Object >
AbstractMessageLite<MessageType,BuilderType> >
AbstractMessage >
GeneratedMessage >
AnalysisEvent
Implements
AnalysisEventOrBuilder
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
CODER_INSTRUCTION_FIELD_NUMBER
public static final int CODER_INSTRUCTION_FIELD_NUMBER
Field Value
Type
Description
int
CODE_FIELD_NUMBER
public static final int CODE_FIELD_NUMBER
Field Value
Type
Description
int
ERROR_FIELD_NUMBER
public static final int ERROR_FIELD_NUMBER
Field Value
Type
Description
int
EXECUTION_ERROR_FIELD_NUMBER
public static final int EXECUTION_ERROR_FIELD_NUMBER
Field Value
Type
Description
int
EXECUTION_OUTPUT_FIELD_NUMBER
public static final int EXECUTION_OUTPUT_FIELD_NUMBER
Field Value
Type
Description
int
PLANNER_REASONING_FIELD_NUMBER
public static final int PLANNER_REASONING_FIELD_NUMBER
Field Value
Type
Description
int
RESULT_CSV_DATA_FIELD_NUMBER
public static final int RESULT_CSV_DATA_FIELD_NUMBER
Field Value
Type
Description
int
RESULT_NATURAL_LANGUAGE_FIELD_NUMBER
public static final int RESULT_NATURAL_LANGUAGE_FIELD_NUMBER
Field Value
Type
Description
int
RESULT_REFERENCE_DATA_FIELD_NUMBER
public static final int RESULT_REFERENCE_DATA_FIELD_NUMBER
Field Value
Type
Description
int
RESULT_VEGA_CHART_JSON_FIELD_NUMBER
public static final int RESULT_VEGA_CHART_JSON_FIELD_NUMBER
Field Value
Type
Description
int
Static Methods
getDefaultInstance()
public static AnalysisEvent getDefaultInstance ()
Returns
Type
Description
AnalysisEvent
getDescriptor()
public static final Descriptors . Descriptor getDescriptor ()
Returns
Type
Description
Descriptor
newBuilder()
public static AnalysisEvent . Builder newBuilder ()
Returns
Type
Description
AnalysisEvent.Builder
newBuilder(AnalysisEvent prototype)
public static AnalysisEvent . Builder newBuilder ( AnalysisEvent prototype )
Parameter
Name
Description
prototype
AnalysisEvent
Returns
Type
Description
AnalysisEvent.Builder
parseDelimitedFrom(InputStream input)
public static AnalysisEvent parseDelimitedFrom ( InputStream input )
Parameter
Name
Description
input
InputStream
Returns
Type
Description
AnalysisEvent
Exceptions
Type
Description
IOException
parseDelimitedFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
public static AnalysisEvent parseDelimitedFrom ( InputStream input , ExtensionRegistryLite extensionRegistry )
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
AnalysisEvent
Exceptions
Type
Description
IOException
parseFrom(byte[] data)
public static AnalysisEvent parseFrom ( byte [] data )
Parameter
Name
Description
data
byte []
Returns
Type
Description
AnalysisEvent
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(byte[] data, ExtensionRegistryLite extensionRegistry)
public static AnalysisEvent parseFrom ( byte [] data , ExtensionRegistryLite extensionRegistry )
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
AnalysisEvent
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteString data)
public static AnalysisEvent parseFrom ( ByteString data )
Parameter
Name
Description
data
ByteString
Returns
Type
Description
AnalysisEvent
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteString data, ExtensionRegistryLite extensionRegistry)
public static AnalysisEvent parseFrom ( ByteString data , ExtensionRegistryLite extensionRegistry )
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
AnalysisEvent
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(CodedInputStream input)
public static AnalysisEvent parseFrom ( CodedInputStream input )
Parameter
Name
Description
input
CodedInputStream
Returns
Type
Description
AnalysisEvent
Exceptions
Type
Description
IOException
parseFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public static AnalysisEvent parseFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
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
AnalysisEvent
Exceptions
Type
Description
IOException
parseFrom(InputStream input)
public static AnalysisEvent parseFrom ( InputStream input )
Parameter
Name
Description
input
InputStream
Returns
Type
Description
AnalysisEvent
Exceptions
Type
Description
IOException
parseFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
public static AnalysisEvent parseFrom ( InputStream input , ExtensionRegistryLite extensionRegistry )
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
AnalysisEvent
Exceptions
Type
Description
IOException
parseFrom(ByteBuffer data)
public static AnalysisEvent parseFrom ( ByteBuffer data )
Parameter
Name
Description
data
ByteBuffer
Returns
Type
Description
AnalysisEvent
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteBuffer data, ExtensionRegistryLite extensionRegistry)
public static AnalysisEvent parseFrom ( ByteBuffer data , ExtensionRegistryLite extensionRegistry )
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
AnalysisEvent
Exceptions
Type
Description
InvalidProtocolBufferException
parser()
public static Parser<AnalysisEvent> parser ()
Returns
Type
Description
Parser < AnalysisEvent >
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
getCode()
public String getCode ()
Generated code.
string code = 4;
Returns
Type
Description
String
The code.
getCodeBytes()
public ByteString getCodeBytes ()
Generated code.
string code = 4;
Returns
Type
Description
ByteString
The bytes for code.
getCoderInstruction()
public String getCoderInstruction ()
Instructions issued for code generation.
string coder_instruction = 3;
Returns
Type
Description
String
The coderInstruction.
getCoderInstructionBytes()
public ByteString getCoderInstructionBytes ()
Instructions issued for code generation.
string coder_instruction = 3;
Returns
Type
Description
ByteString
The bytes for coderInstruction.
getDefaultInstanceForType()
public AnalysisEvent getDefaultInstanceForType ()
Returns
Type
Description
AnalysisEvent
getError()
public String getError ()
A generic error message.
string error = 11;
Returns
Type
Description
String
The error.
getErrorBytes()
public ByteString getErrorBytes ()
A generic error message.
string error = 11;
Returns
Type
Description
ByteString
The bytes for error.
getExecutionError()
public String getExecutionError ()
An error from code execution.
string execution_error = 6;
Returns
Type
Description
String
The executionError.
getExecutionErrorBytes()
public ByteString getExecutionErrorBytes ()
An error from code execution.
string execution_error = 6;
Returns
Type
Description
ByteString
The bytes for executionError.
getExecutionOutput()
public String getExecutionOutput ()
Output from code execution.
string execution_output = 5;
Returns
Type
Description
String
The executionOutput.
getExecutionOutputBytes()
public ByteString getExecutionOutputBytes ()
Output from code execution.
string execution_output = 5;
Returns
Type
Description
ByteString
The bytes for executionOutput.
getKindCase()
public AnalysisEvent . KindCase getKindCase ()
Returns
Type
Description
AnalysisEvent.KindCase
getParserForType()
public Parser<AnalysisEvent> getParserForType ()
Returns
Type
Description
Parser < AnalysisEvent >
Overrides
GeneratedMessage.getParserForType()
getPlannerReasoning()
public String getPlannerReasoning ()
Python codegen planner's reasoning.
string planner_reasoning = 2;
Returns
Type
Description
String
The plannerReasoning.
getPlannerReasoningBytes()
public ByteString getPlannerReasoningBytes ()
Python codegen planner's reasoning.
string planner_reasoning = 2;
Returns
Type
Description
ByteString
The bytes for plannerReasoning.
getResultCsvData()
public String getResultCsvData ()
Result as CSV string.
string result_csv_data = 9;
Returns
Type
Description
String
The resultCsvData.
getResultCsvDataBytes()
public ByteString getResultCsvDataBytes ()
Result as CSV string.
string result_csv_data = 9;
Returns
Type
Description
ByteString
The bytes for resultCsvData.
getResultNaturalLanguage()
public String getResultNaturalLanguage ()
Result as NL string.
string result_natural_language = 8;
Returns
Type
Description
String
The resultNaturalLanguage.
getResultNaturalLanguageBytes()
public ByteString getResultNaturalLanguageBytes ()
Result as NL string.
string result_natural_language = 8;
Returns
Type
Description
ByteString
The bytes for resultNaturalLanguage.
getResultReferenceData()
public String getResultReferenceData ()
Result as a reference to a data source.
string result_reference_data = 10;
Returns
Type
Description
String
The resultReferenceData.
getResultReferenceDataBytes()
public ByteString getResultReferenceDataBytes ()
Result as a reference to a data source.
string result_reference_data = 10;
Returns
Type
Description
ByteString
The bytes for resultReferenceData.
getResultVegaChartJson()
public String getResultVegaChartJson ()
Result as Vega chart JSON string.
string result_vega_chart_json = 7;
Returns
Type
Description
String
The resultVegaChartJson.
getResultVegaChartJsonBytes()
public ByteString getResultVegaChartJsonBytes ()
Result as Vega chart JSON string.
string result_vega_chart_json = 7;
Returns
Type
Description
ByteString
The bytes for resultVegaChartJson.
getSerializedSize()
public int getSerializedSize ()
Returns
Type
Description
int
Overrides
GeneratedMessage.getSerializedSize()
hasCode()
public boolean hasCode ()
Generated code.
string code = 4;
Returns
Type
Description
boolean
Whether the code field is set.
hasCoderInstruction()
public boolean hasCoderInstruction ()
Instructions issued for code generation.
string coder_instruction = 3;
Returns
Type
Description
boolean
Whether the coderInstruction field is set.
hasError()
public boolean hasError ()
A generic error message.
string error = 11;
Returns
Type
Description
boolean
Whether the error field is set.
hasExecutionError()
public boolean hasExecutionError ()
An error from code execution.
string execution_error = 6;
Returns
Type
Description
boolean
Whether the executionError field is set.
hasExecutionOutput()
public boolean hasExecutionOutput ()
Output from code execution.
string execution_output = 5;
Returns
Type
Description
boolean
Whether the executionOutput field is set.
hasPlannerReasoning()
public boolean hasPlannerReasoning ()
Python codegen planner's reasoning.
string planner_reasoning = 2;
Returns
Type
Description
boolean
Whether the plannerReasoning field is set.
hasResultCsvData()
public boolean hasResultCsvData ()
Result as CSV string.
string result_csv_data = 9;
Returns
Type
Description
boolean
Whether the resultCsvData field is set.
hasResultNaturalLanguage()
public boolean hasResultNaturalLanguage ()
Result as NL string.
string result_natural_language = 8;
Returns
Type
Description
boolean
Whether the resultNaturalLanguage field is set.
hasResultReferenceData()
public boolean hasResultReferenceData ()
Result as a reference to a data source.
string result_reference_data = 10;
Returns
Type
Description
boolean
Whether the resultReferenceData field is set.
hasResultVegaChartJson()
public boolean hasResultVegaChartJson ()
Result as Vega chart JSON string.
string result_vega_chart_json = 7;
Returns
Type
Description
boolean
Whether the resultVegaChartJson field is set.
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
public AnalysisEvent . Builder newBuilderForType ()
Returns
Type
Description
AnalysisEvent.Builder
newBuilderForType(AbstractMessage.BuilderParent parent)
protected AnalysisEvent . Builder newBuilderForType ( AbstractMessage . BuilderParent parent )
Parameter
Name
Description
parent
BuilderParent
Returns
Type
Description
AnalysisEvent.Builder
Overrides
AbstractMessage.newBuilderForType(AbstractMessage.BuilderParent parent)
toBuilder()
public AnalysisEvent . Builder toBuilder ()
Returns
Type
Description
AnalysisEvent.Builder
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
