---
title: "Interface AppHubWorkloadOrBuilder (0.45.0) \_|\_ Java client libraries \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-developerconnect/latest/com.google.cloud.developerconnect.v1.AppHubWorkloadOrBuilder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-developerconnect/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-developerconnect/latest/com.google.cloud.developerconnect.v1.AppHubWorkloadOrBuilder
  title: "Interface AppHubWorkloadOrBuilder (0.45.0) \_|\_ Java client libraries \_\
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
Interface AppHubWorkloadOrBuilder (0.45.0)
Stay organized with collections
Save and categorize content based on your preferences.
0.45.0 (latest)
0.44.0
0.42.0
0.40.0
0.39.0
0.38.0
0.37.0
0.35.0
0.33.0
0.32.0
0.31.0
0.30.0
0.29.0
0.27.0
0.25.0
0.24.0
0.21.0
0.20.0
0.19.0
0.17.0
0.16.0
0.15.0
0.14.0
0.13.0
0.12.0
0.11.0
0.10.0
0.9.0
0.8.0
0.6.0
0.5.0
0.4.0
0.3.0
0.2.0
0.1.0
public interface AppHubWorkloadOrBuilder extends MessageOrBuilder
Implements
MessageOrBuilder
Methods
getCriticality()
public abstract String getCriticality ()
Output only. The criticality of the App Hub Workload.
string criticality = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
String
The criticality.
getCriticalityBytes()
public abstract ByteString getCriticalityBytes ()
Output only. The criticality of the App Hub Workload.
string criticality = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
ByteString
The bytes for criticality.
getEnvironment()
public abstract String getEnvironment ()
Output only. The environment of the App Hub Workload.
string environment = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
String
The environment.
getEnvironmentBytes()
public abstract ByteString getEnvironmentBytes ()
Output only. The environment of the App Hub Workload.
string environment = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
ByteString
The bytes for environment.
getWorkload()
public abstract String getWorkload ()
Required. Output only. Immutable. The name of the App Hub Workload.
Format:
projects/{project}/locations/{location}/applications/{application}/workloads/{workload} .
string workload = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.field_behavior) = IMMUTABLE, (.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
String
The workload.
getWorkloadBytes()
public abstract ByteString getWorkloadBytes ()
Required. Output only. Immutable. The name of the App Hub Workload.
Format:
projects/{project}/locations/{location}/applications/{application}/workloads/{workload} .
string workload = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.field_behavior) = IMMUTABLE, (.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
ByteString
The bytes for workload.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
