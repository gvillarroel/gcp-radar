---
title: "Interface AgentAssistantFeedback.KnowledgeAssistFeedbackOrBuilder (4.94.0)\
  \ \_|\_ Java client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.AgentAssistantFeedback.KnowledgeAssistFeedbackOrBuilder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.AgentAssistantFeedback.KnowledgeAssistFeedbackOrBuilder
  title: "Interface AgentAssistantFeedback.KnowledgeAssistFeedbackOrBuilder (4.94.0)\
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
Interface AgentAssistantFeedback.KnowledgeAssistFeedbackOrBuilder (4.94.0)
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
public static interface AgentAssistantFeedback . KnowledgeAssistFeedbackOrBuilder extends MessageOrBuilder
Implements
MessageOrBuilder
Methods
getAnswerCopied()
public abstract boolean getAnswerCopied ()
Whether the suggested answer was copied by the human agent.
If the value is set to be true,
AnswerFeedback.clicked
will be updated to be true.
bool answer_copied = 1;
Returns
Type
Description
boolean
The answerCopied.
getClickedUris(int index)
public abstract String getClickedUris ( int index )
The URIs clicked by the human agent. The value is appended for each
UpdateAnswerRecordRequest.
If the value is not empty,
AnswerFeedback.clicked
will be updated to be true.
repeated string clicked_uris = 2;
Parameter
Name
Description
index
int The index of the element to return.
Returns
Type
Description
String
The clickedUris at the given index.
getClickedUrisBytes(int index)
public abstract ByteString getClickedUrisBytes ( int index )
The URIs clicked by the human agent. The value is appended for each
UpdateAnswerRecordRequest.
If the value is not empty,
AnswerFeedback.clicked
will be updated to be true.
repeated string clicked_uris = 2;
Parameter
Name
Description
index
int The index of the value to return.
Returns
Type
Description
ByteString
The bytes of the clickedUris at the given index.
getClickedUrisCount()
public abstract int getClickedUrisCount ()
The URIs clicked by the human agent. The value is appended for each
UpdateAnswerRecordRequest.
If the value is not empty,
AnswerFeedback.clicked
will be updated to be true.
repeated string clicked_uris = 2;
Returns
Type
Description
int
The count of clickedUris.
getClickedUrisList()
public abstract List<String> getClickedUrisList ()
The URIs clicked by the human agent. The value is appended for each
UpdateAnswerRecordRequest.
If the value is not empty,
AnswerFeedback.clicked
will be updated to be true.
repeated string clicked_uris = 2;
Returns
Type
Description
List < String >
A list containing the clickedUris.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
