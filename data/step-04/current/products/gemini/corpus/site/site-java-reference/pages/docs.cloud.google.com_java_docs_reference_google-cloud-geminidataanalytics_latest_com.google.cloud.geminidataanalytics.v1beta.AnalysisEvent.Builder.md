---
title: "Class AnalysisEvent.Builder (0.16.0) \_|\_ Java client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-geminidataanalytics/latest/com.google.cloud.geminidataanalytics.v1beta.AnalysisEvent.Builder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-geminidataanalytics/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-geminidataanalytics/latest/com.google.cloud.geminidataanalytics.v1beta.AnalysisEvent.Builder
  title: "Class AnalysisEvent.Builder (0.16.0) \_|\_ Java client libraries \_|\_ Google\
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
Class AnalysisEvent.Builder (0.16.0)
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
public static final class AnalysisEvent . Builder extends GeneratedMessage . Builder<AnalysisEvent . Builder > implements AnalysisEventOrBuilder
An event indicating the progress of an analysis.
Protobuf type google.cloud.geminidataanalytics.v1beta.AnalysisEvent
Inheritance
java.lang.Object >
AbstractMessageLite.Builder<MessageType,BuilderType> >
AbstractMessage.Builder<BuilderType> >
GeneratedMessage.Builder >
AnalysisEvent.Builder
Implements
AnalysisEventOrBuilder
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
public AnalysisEvent build ()
Returns
Type
Description
AnalysisEvent
buildPartial()
public AnalysisEvent buildPartial ()
Returns
Type
Description
AnalysisEvent
clear()
public AnalysisEvent . Builder clear ()
Returns
Type
Description
AnalysisEvent.Builder
Overrides
GeneratedMessage.Builder<BuilderType>.clear()
clearCode()
public AnalysisEvent . Builder clearCode ()
Generated code.
string code = 4;
Returns
Type
Description
AnalysisEvent.Builder
This builder for chaining.
clearCoderInstruction()
public AnalysisEvent . Builder clearCoderInstruction ()
Instructions issued for code generation.
string coder_instruction = 3;
Returns
Type
Description
AnalysisEvent.Builder
This builder for chaining.
clearError()
public AnalysisEvent . Builder clearError ()
A generic error message.
string error = 11;
Returns
Type
Description
AnalysisEvent.Builder
This builder for chaining.
clearExecutionError()
public AnalysisEvent . Builder clearExecutionError ()
An error from code execution.
string execution_error = 6;
Returns
Type
Description
AnalysisEvent.Builder
This builder for chaining.
clearExecutionOutput()
public AnalysisEvent . Builder clearExecutionOutput ()
Output from code execution.
string execution_output = 5;
Returns
Type
Description
AnalysisEvent.Builder
This builder for chaining.
clearKind()
public AnalysisEvent . Builder clearKind ()
Returns
Type
Description
AnalysisEvent.Builder
clearPlannerReasoning()
public AnalysisEvent . Builder clearPlannerReasoning ()
Python codegen planner's reasoning.
string planner_reasoning = 2;
Returns
Type
Description
AnalysisEvent.Builder
This builder for chaining.
clearResultCsvData()
public AnalysisEvent . Builder clearResultCsvData ()
Result as CSV string.
string result_csv_data = 9;
Returns
Type
Description
AnalysisEvent.Builder
This builder for chaining.
clearResultNaturalLanguage()
public AnalysisEvent . Builder clearResultNaturalLanguage ()
Result as NL string.
string result_natural_language = 8;
Returns
Type
Description
AnalysisEvent.Builder
This builder for chaining.
clearResultReferenceData()
public AnalysisEvent . Builder clearResultReferenceData ()
Result as a reference to a data source.
string result_reference_data = 10;
Returns
Type
Description
AnalysisEvent.Builder
This builder for chaining.
clearResultVegaChartJson()
public AnalysisEvent . Builder clearResultVegaChartJson ()
Result as Vega chart JSON string.
string result_vega_chart_json = 7;
Returns
Type
Description
AnalysisEvent.Builder
This builder for chaining.
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
getDescriptorForType()
public Descriptors . Descriptor getDescriptorForType ()
Returns
Type
Description
Descriptor
Overrides
GeneratedMessage.Builder<BuilderType>.getDescriptorForType()
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
mergeFrom(AnalysisEvent other)
public AnalysisEvent . Builder mergeFrom ( AnalysisEvent other )
Parameter
Name
Description
other
AnalysisEvent
Returns
Type
Description
AnalysisEvent.Builder
mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public AnalysisEvent . Builder mergeFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
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
AnalysisEvent.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
Exceptions
Type
Description
IOException
mergeFrom(Message other)
public AnalysisEvent . Builder mergeFrom ( Message other )
Parameter
Name
Description
other
Message
Returns
Type
Description
AnalysisEvent.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)
setCode(String value)
public AnalysisEvent . Builder setCode ( String value )
Generated code.
string code = 4;
Parameter
Name
Description
value
String The code to set.
Returns
Type
Description
AnalysisEvent.Builder
This builder for chaining.
setCodeBytes(ByteString value)
public AnalysisEvent . Builder setCodeBytes ( ByteString value )
Generated code.
string code = 4;
Parameter
Name
Description
value
ByteString The bytes for code to set.
Returns
Type
Description
AnalysisEvent.Builder
This builder for chaining.
setCoderInstruction(String value)
public AnalysisEvent . Builder setCoderInstruction ( String value )
Instructions issued for code generation.
string coder_instruction = 3;
Parameter
Name
Description
value
String The coderInstruction to set.
Returns
Type
Description
AnalysisEvent.Builder
This builder for chaining.
setCoderInstructionBytes(ByteString value)
public AnalysisEvent . Builder setCoderInstructionBytes ( ByteString value )
Instructions issued for code generation.
string coder_instruction = 3;
Parameter
Name
Description
value
ByteString The bytes for coderInstruction to set.
Returns
Type
Description
AnalysisEvent.Builder
This builder for chaining.
setError(String value)
public AnalysisEvent . Builder setError ( String value )
A generic error message.
string error = 11;
Parameter
Name
Description
value
String The error to set.
Returns
Type
Description
AnalysisEvent.Builder
This builder for chaining.
setErrorBytes(ByteString value)
public AnalysisEvent . Builder setErrorBytes ( ByteString value )
A generic error message.
string error = 11;
Parameter
Name
Description
value
ByteString The bytes for error to set.
Returns
Type
Description
AnalysisEvent.Builder
This builder for chaining.
setExecutionError(String value)
public AnalysisEvent . Builder setExecutionError ( String value )
An error from code execution.
string execution_error = 6;
Parameter
Name
Description
value
String The executionError to set.
Returns
Type
Description
AnalysisEvent.Builder
This builder for chaining.
setExecutionErrorBytes(ByteString value)
public AnalysisEvent . Builder setExecutionErrorBytes ( ByteString value )
An error from code execution.
string execution_error = 6;
Parameter
Name
Description
value
ByteString The bytes for executionError to set.
Returns
Type
Description
AnalysisEvent.Builder
This builder for chaining.
setExecutionOutput(String value)
public AnalysisEvent . Builder setExecutionOutput ( String value )
Output from code execution.
string execution_output = 5;
Parameter
Name
Description
value
String The executionOutput to set.
Returns
Type
Description
AnalysisEvent.Builder
This builder for chaining.
setExecutionOutputBytes(ByteString value)
public AnalysisEvent . Builder setExecutionOutputBytes ( ByteString value )
Output from code execution.
string execution_output = 5;
Parameter
Name
Description
value
ByteString The bytes for executionOutput to set.
Returns
Type
Description
AnalysisEvent.Builder
This builder for chaining.
setPlannerReasoning(String value)
public AnalysisEvent . Builder setPlannerReasoning ( String value )
Python codegen planner's reasoning.
string planner_reasoning = 2;
Parameter
Name
Description
value
String The plannerReasoning to set.
Returns
Type
Description
AnalysisEvent.Builder
This builder for chaining.
setPlannerReasoningBytes(ByteString value)
public AnalysisEvent . Builder setPlannerReasoningBytes ( ByteString value )
Python codegen planner's reasoning.
string planner_reasoning = 2;
Parameter
Name
Description
value
ByteString The bytes for plannerReasoning to set.
Returns
Type
Description
AnalysisEvent.Builder
This builder for chaining.
setResultCsvData(String value)
public AnalysisEvent . Builder setResultCsvData ( String value )
Result as CSV string.
string result_csv_data = 9;
Parameter
Name
Description
value
String The resultCsvData to set.
Returns
Type
Description
AnalysisEvent.Builder
This builder for chaining.
setResultCsvDataBytes(ByteString value)
public AnalysisEvent . Builder setResultCsvDataBytes ( ByteString value )
Result as CSV string.
string result_csv_data = 9;
Parameter
Name
Description
value
ByteString The bytes for resultCsvData to set.
Returns
Type
Description
AnalysisEvent.Builder
This builder for chaining.
setResultNaturalLanguage(String value)
public AnalysisEvent . Builder setResultNaturalLanguage ( String value )
Result as NL string.
string result_natural_language = 8;
Parameter
Name
Description
value
String The resultNaturalLanguage to set.
Returns
Type
Description
AnalysisEvent.Builder
This builder for chaining.
setResultNaturalLanguageBytes(ByteString value)
public AnalysisEvent . Builder setResultNaturalLanguageBytes ( ByteString value )
Result as NL string.
string result_natural_language = 8;
Parameter
Name
Description
value
ByteString The bytes for resultNaturalLanguage to set.
Returns
Type
Description
AnalysisEvent.Builder
This builder for chaining.
setResultReferenceData(String value)
public AnalysisEvent . Builder setResultReferenceData ( String value )
Result as a reference to a data source.
string result_reference_data = 10;
Parameter
Name
Description
value
String The resultReferenceData to set.
Returns
Type
Description
AnalysisEvent.Builder
This builder for chaining.
setResultReferenceDataBytes(ByteString value)
public AnalysisEvent . Builder setResultReferenceDataBytes ( ByteString value )
Result as a reference to a data source.
string result_reference_data = 10;
Parameter
Name
Description
value
ByteString The bytes for resultReferenceData to set.
Returns
Type
Description
AnalysisEvent.Builder
This builder for chaining.
setResultVegaChartJson(String value)
public AnalysisEvent . Builder setResultVegaChartJson ( String value )
Result as Vega chart JSON string.
string result_vega_chart_json = 7;
Parameter
Name
Description
value
String The resultVegaChartJson to set.
Returns
Type
Description
AnalysisEvent.Builder
This builder for chaining.
setResultVegaChartJsonBytes(ByteString value)
public AnalysisEvent . Builder setResultVegaChartJsonBytes ( ByteString value )
Result as Vega chart JSON string.
string result_vega_chart_json = 7;
Parameter
Name
Description
value
ByteString The bytes for resultVegaChartJson to set.
Returns
Type
Description
AnalysisEvent.Builder
This builder for chaining.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
