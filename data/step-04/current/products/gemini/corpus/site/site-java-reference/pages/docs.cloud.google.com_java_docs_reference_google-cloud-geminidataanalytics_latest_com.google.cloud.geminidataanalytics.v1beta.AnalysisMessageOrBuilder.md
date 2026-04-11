---
title: "Interface AnalysisMessageOrBuilder (0.16.0) \_|\_ Java client libraries \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-geminidataanalytics/latest/com.google.cloud.geminidataanalytics.v1beta.AnalysisMessageOrBuilder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-geminidataanalytics/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-geminidataanalytics/latest/com.google.cloud.geminidataanalytics.v1beta.AnalysisMessageOrBuilder
  title: "Interface AnalysisMessageOrBuilder (0.16.0) \_|\_ Java client libraries\
    \ \_|\_ Google Cloud Documentation"
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
Interface AnalysisMessageOrBuilder (0.16.0)
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
public interface AnalysisMessageOrBuilder extends MessageOrBuilder
Implements
MessageOrBuilder
Methods
getKindCase()
public abstract AnalysisMessage . KindCase getKindCase ()
Returns
Type
Description
AnalysisMessage.KindCase
getProgressEvent()
public abstract AnalysisEvent getProgressEvent ()
An event indicating the progress of the analysis.
.google.cloud.geminidataanalytics.v1beta.AnalysisEvent progress_event = 2;
Returns
Type
Description
AnalysisEvent
The progressEvent.
getProgressEventOrBuilder()
public abstract AnalysisEventOrBuilder getProgressEventOrBuilder ()
An event indicating the progress of the analysis.
.google.cloud.geminidataanalytics.v1beta.AnalysisEvent progress_event = 2;
Returns
Type
Description
AnalysisEventOrBuilder
getQuery()
public abstract AnalysisQuery getQuery ()
An analysis query.
.google.cloud.geminidataanalytics.v1beta.AnalysisQuery query = 1;
Returns
Type
Description
AnalysisQuery
The query.
getQueryOrBuilder()
public abstract AnalysisQueryOrBuilder getQueryOrBuilder ()
An analysis query.
.google.cloud.geminidataanalytics.v1beta.AnalysisQuery query = 1;
Returns
Type
Description
AnalysisQueryOrBuilder
hasProgressEvent()
public abstract boolean hasProgressEvent ()
An event indicating the progress of the analysis.
.google.cloud.geminidataanalytics.v1beta.AnalysisEvent progress_event = 2;
Returns
Type
Description
boolean
Whether the progressEvent field is set.
hasQuery()
public abstract boolean hasQuery ()
An analysis query.
.google.cloud.geminidataanalytics.v1beta.AnalysisQuery query = 1;
Returns
Type
Description
boolean
Whether the query field is set.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
