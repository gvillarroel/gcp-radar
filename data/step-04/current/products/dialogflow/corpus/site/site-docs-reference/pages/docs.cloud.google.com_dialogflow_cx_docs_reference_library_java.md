---
title: "Java client library \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/cx/docs/reference/library/java
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/cx/docs/reference
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/cx/docs/reference/library/java
  title: "Java client library \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Some products and features are in the process of being renamed. Generative playbook and flow features are also being migrated to a single consolidated console. See the details .
Home
Documentation
AI and ML
Dialogflow
Dialogflow CX
Reference
Send feedback
Java client library
Stay organized with collections
Save and categorize content based on your preferences.
This page provides reference documentation and related resources for the
Dialogflow CX Java client library.
Resource
Description
Library reference
Dialogflow CX Java library reference
Language guide
General guide for using Java with GCP
GitHub repository
Source code and additional documentation for this library
Quickstart
Introduction to using this library
Stack Overflow
Questions tagged with Dialogflow CX and Java
Installation
To install the client library:
Caution: The Java client library does not support Android.
If you are using Maven , add
the following to your pom.xml file. For more information about
BOMs, see The Google Cloud Platform Libraries BOM .
<dependencyManagement>
<dependencies>
<dependency>
<groupId>com.google.cloud</groupId>
<artifactId>libraries-bom</artifactId>
<version>26.79.0</version>
<type>pom</type>
<scope>import</scope>
</dependency>
</dependencies>
</dependencyManagement>
<dependencies>
<dependency>
<groupId>com.google.cloud</groupId>
<artifactId>google-cloud-dialogflow-cx</artifactId>
</dependency>
</dependencies>
If you are using Gradle ,
add the following to your dependencies:
implementation 'com.google.cloud:google-cloud-dialogflow-cx:0.99.0'
If you are using sbt , add
the following to your dependencies:
libraryDependencies += "com.google.cloud" % "google-cloud-dialogflow-cx" % "0.99.0"
If you're using Visual Studio Code or IntelliJ, you can add client libraries to your
project using the following IDE plugins:
Cloud Code for VS Code
Cloud Code for IntelliJ
The plugins provide additional functionality, such as key management for service accounts. Refer
to each plugin's documentation for details.
Note: Cloud Java client libraries do not currently support Android.
V3Beta1 client library
Beta
The V3Beta1 API might be changed in backward-incompatible ways
and is not subject to any SLA or deprecation policy.
The V3Beta1 API is not intended for real-time usage in critical applications.
Dialogflow's V3Beta1 API offers new features
that are not yet available with the V3 API.
To use the V3Beta1 client library,
specify the V3Beta1 API in your code
by using the following import statement:
import com.google.cloud.dialogflow.cx.v3beta1.* ;
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
