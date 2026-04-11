---
title: "Interface AnalysisEventOrBuilder (0.16.0) \_|\_ Java client libraries \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-geminidataanalytics/latest/com.google.cloud.geminidataanalytics.v1beta.AnalysisEventOrBuilder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-geminidataanalytics/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-geminidataanalytics/latest/com.google.cloud.geminidataanalytics.v1beta.AnalysisEventOrBuilder
  title: "Interface AnalysisEventOrBuilder (0.16.0) \_|\_ Java client libraries \_\
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
Interface AnalysisEventOrBuilder (0.16.0)
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
public interface AnalysisEventOrBuilder extends MessageOrBuilder
Implements
MessageOrBuilder
Methods
getCode()
public abstract String getCode ()
Generated code.
string code = 4;
Returns
Type
Description
String
The code.
getCodeBytes()
public abstract ByteString getCodeBytes ()
Generated code.
string code = 4;
Returns
Type
Description
ByteString
The bytes for code.
getCoderInstruction()
public abstract String getCoderInstruction ()
Instructions issued for code generation.
string coder_instruction = 3;
Returns
Type
Description
String
The coderInstruction.
getCoderInstructionBytes()
public abstract ByteString getCoderInstructionBytes ()
Instructions issued for code generation.
string coder_instruction = 3;
Returns
Type
Description
ByteString
The bytes for coderInstruction.
getError()
public abstract String getError ()
A generic error message.
string error = 11;
Returns
Type
Description
String
The error.
getErrorBytes()
public abstract ByteString getErrorBytes ()
A generic error message.
string error = 11;
Returns
Type
Description
ByteString
The bytes for error.
getExecutionError()
public abstract String getExecutionError ()
An error from code execution.
string execution_error = 6;
Returns
Type
Description
String
The executionError.
getExecutionErrorBytes()
public abstract ByteString getExecutionErrorBytes ()
An error from code execution.
string execution_error = 6;
Returns
Type
Description
ByteString
The bytes for executionError.
getExecutionOutput()
public abstract String getExecutionOutput ()
Output from code execution.
string execution_output = 5;
Returns
Type
Description
String
The executionOutput.
getExecutionOutputBytes()
public abstract ByteString getExecutionOutputBytes ()
Output from code execution.
string execution_output = 5;
Returns
Type
Description
ByteString
The bytes for executionOutput.
getKindCase()
public abstract AnalysisEvent . KindCase getKindCase ()
Returns
Type
Description
AnalysisEvent.KindCase
getPlannerReasoning()
public abstract String getPlannerReasoning ()
Python codegen planner's reasoning.
string planner_reasoning = 2;
Returns
Type
Description
String
The plannerReasoning.
getPlannerReasoningBytes()
public abstract ByteString getPlannerReasoningBytes ()
Python codegen planner's reasoning.
string planner_reasoning = 2;
Returns
Type
Description
ByteString
The bytes for plannerReasoning.
getResultCsvData()
public abstract String getResultCsvData ()
Result as CSV string.
string result_csv_data = 9;
Returns
Type
Description
String
The resultCsvData.
getResultCsvDataBytes()
public abstract ByteString getResultCsvDataBytes ()
Result as CSV string.
string result_csv_data = 9;
Returns
Type
Description
ByteString
The bytes for resultCsvData.
getResultNaturalLanguage()
public abstract String getResultNaturalLanguage ()
Result as NL string.
string result_natural_language = 8;
Returns
Type
Description
String
The resultNaturalLanguage.
getResultNaturalLanguageBytes()
public abstract ByteString getResultNaturalLanguageBytes ()
Result as NL string.
string result_natural_language = 8;
Returns
Type
Description
ByteString
The bytes for resultNaturalLanguage.
getResultReferenceData()
public abstract String getResultReferenceData ()
Result as a reference to a data source.
string result_reference_data = 10;
Returns
Type
Description
String
The resultReferenceData.
getResultReferenceDataBytes()
public abstract ByteString getResultReferenceDataBytes ()
Result as a reference to a data source.
string result_reference_data = 10;
Returns
Type
Description
ByteString
The bytes for resultReferenceData.
getResultVegaChartJson()
public abstract String getResultVegaChartJson ()
Result as Vega chart JSON string.
string result_vega_chart_json = 7;
Returns
Type
Description
String
The resultVegaChartJson.
getResultVegaChartJsonBytes()
public abstract ByteString getResultVegaChartJsonBytes ()
Result as Vega chart JSON string.
string result_vega_chart_json = 7;
Returns
Type
Description
ByteString
The bytes for resultVegaChartJson.
hasCode()
public abstract boolean hasCode ()
Generated code.
string code = 4;
Returns
Type
Description
boolean
Whether the code field is set.
hasCoderInstruction()
public abstract boolean hasCoderInstruction ()
Instructions issued for code generation.
string coder_instruction = 3;
Returns
Type
Description
boolean
Whether the coderInstruction field is set.
hasError()
public abstract boolean hasError ()
A generic error message.
string error = 11;
Returns
Type
Description
boolean
Whether the error field is set.
hasExecutionError()
public abstract boolean hasExecutionError ()
An error from code execution.
string execution_error = 6;
Returns
Type
Description
boolean
Whether the executionError field is set.
hasExecutionOutput()
public abstract boolean hasExecutionOutput ()
Output from code execution.
string execution_output = 5;
Returns
Type
Description
boolean
Whether the executionOutput field is set.
hasPlannerReasoning()
public abstract boolean hasPlannerReasoning ()
Python codegen planner's reasoning.
string planner_reasoning = 2;
Returns
Type
Description
boolean
Whether the plannerReasoning field is set.
hasResultCsvData()
public abstract boolean hasResultCsvData ()
Result as CSV string.
string result_csv_data = 9;
Returns
Type
Description
boolean
Whether the resultCsvData field is set.
hasResultNaturalLanguage()
public abstract boolean hasResultNaturalLanguage ()
Result as NL string.
string result_natural_language = 8;
Returns
Type
Description
boolean
Whether the resultNaturalLanguage field is set.
hasResultReferenceData()
public abstract boolean hasResultReferenceData ()
Result as a reference to a data source.
string result_reference_data = 10;
Returns
Type
Description
boolean
Whether the resultReferenceData field is set.
hasResultVegaChartJson()
public abstract boolean hasResultVegaChartJson ()
Result as Vega chart JSON string.
string result_vega_chart_json = 7;
Returns
Type
Description
boolean
Whether the resultVegaChartJson field is set.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
