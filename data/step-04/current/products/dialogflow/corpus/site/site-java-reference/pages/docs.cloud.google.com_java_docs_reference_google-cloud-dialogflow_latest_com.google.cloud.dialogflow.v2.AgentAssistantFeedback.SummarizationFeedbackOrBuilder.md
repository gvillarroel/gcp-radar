---
title: "Interface AgentAssistantFeedback.SummarizationFeedbackOrBuilder (4.94.0) \_\
  |\_ Java client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.AgentAssistantFeedback.SummarizationFeedbackOrBuilder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.AgentAssistantFeedback.SummarizationFeedbackOrBuilder
  title: "Interface AgentAssistantFeedback.SummarizationFeedbackOrBuilder (4.94.0)\
    \ \_|\_ Java client libraries \_|\_ Google Cloud Documentation"
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
Interface AgentAssistantFeedback.SummarizationFeedbackOrBuilder (4.94.0)
Stay organized with collections
Save and categorize content based on your preferences.
4.94.0 (latest)
4.93.0
4.91.0
4.89.0
4.88.0
4.87.0
4.86.0
4.84.0
4.82.0
4.81.0
4.80.0
4.79.0
4.78.0
4.76.0
4.74.0
4.73.0
4.70.0
4.69.0
4.68.0
4.66.0
4.65.0
4.64.0
4.63.0
4.62.0
4.61.0
4.60.0
4.59.0
4.58.0
4.57.0
4.55.0
4.54.0
4.53.0
4.52.0
4.51.0
4.50.0
4.49.0
4.48.0
4.47.0
4.46.0
4.45.0
4.43.0
4.42.0
4.41.0
4.40.0
4.39.0
4.38.0
4.37.0
4.36.0
4.35.0
4.34.0
4.33.0
4.30.0
4.29.0
4.28.0
4.27.0
4.26.0
4.25.0
4.24.0
4.23.0
4.22.0
4.21.0
4.20.0
4.19.0
4.18.0
4.17.0
4.15.0
4.14.0
4.13.0
4.12.0
4.11.0
4.10.0
4.9.1
4.8.6
4.7.5
4.6.0
4.5.11
4.4.0
4.3.1
public static interface AgentAssistantFeedback . SummarizationFeedbackOrBuilder extends MessageOrBuilder
Implements
MessageOrBuilder
Methods
containsTextSections(String key)
public abstract boolean containsTextSections ( String key )
Optional. Actual text sections of submitted summary.
map<string, string> text_sections = 4 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
key
String
Returns
Type
Description
boolean
getStartTime()
public abstract Timestamp getStartTime ()
Timestamp when composing of the summary starts.
.google.protobuf.Timestamp start_time = 1;
Returns
Type
Description
Timestamp
The startTime.
getStartTimeOrBuilder()
public abstract TimestampOrBuilder getStartTimeOrBuilder ()
Timestamp when composing of the summary starts.
.google.protobuf.Timestamp start_time = 1;
Returns
Type
Description
TimestampOrBuilder
getSubmitTime()
public abstract Timestamp getSubmitTime ()
Timestamp when the summary was submitted.
.google.protobuf.Timestamp submit_time = 2;
Returns
Type
Description
Timestamp
The submitTime.
getSubmitTimeOrBuilder()
public abstract TimestampOrBuilder getSubmitTimeOrBuilder ()
Timestamp when the summary was submitted.
.google.protobuf.Timestamp submit_time = 2;
Returns
Type
Description
TimestampOrBuilder
getSummaryText()
public abstract String getSummaryText ()
Text of actual submitted summary.
string summary_text = 3;
Returns
Type
Description
String
The summaryText.
getSummaryTextBytes()
public abstract ByteString getSummaryTextBytes ()
Text of actual submitted summary.
string summary_text = 3;
Returns
Type
Description
ByteString
The bytes for summaryText.
getTextSections() (deprecated)
public abstract Map<String , String > getTextSections ()
Use #getTextSectionsMap() instead.
Returns
Type
Description
Map < String , String >
getTextSectionsCount()
public abstract int getTextSectionsCount ()
Optional. Actual text sections of submitted summary.
map<string, string> text_sections = 4 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
int
getTextSectionsMap()
public abstract Map<String , String > getTextSectionsMap ()
Optional. Actual text sections of submitted summary.
map<string, string> text_sections = 4 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
Map < String , String >
getTextSectionsOrDefault(String key, String defaultValue)
public abstract String getTextSectionsOrDefault ( String key , String defaultValue )
Optional. Actual text sections of submitted summary.
map<string, string> text_sections = 4 [(.google.api.field_behavior) = OPTIONAL];
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
getTextSectionsOrThrow(String key)
public abstract String getTextSectionsOrThrow ( String key )
Optional. Actual text sections of submitted summary.
map<string, string> text_sections = 4 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
key
String
Returns
Type
Description
String
hasStartTime()
public abstract boolean hasStartTime ()
Timestamp when composing of the summary starts.
.google.protobuf.Timestamp start_time = 1;
Returns
Type
Description
boolean
Whether the startTime field is set.
hasSubmitTime()
public abstract boolean hasSubmitTime ()
Timestamp when the summary was submitted.
.google.protobuf.Timestamp submit_time = 2;
Returns
Type
Description
boolean
Whether the submitTime field is set.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
