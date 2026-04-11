---
title: "Java client library \_|\_ Cloud Translation \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/translate/docs/reference/libraries/v2/java
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/translate/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/translate/docs/reference/libraries/v2/java
  title: "Java client library \_|\_ Cloud Translation \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Cloud Translation
API and references
Send feedback
Java client library
Stay organized with collections
Save and categorize content based on your preferences.
Note: Google provides the Cloud Translation API client library for Java as a
single artifact for both Cloud Translation - Advanced and
Cloud Translation - Basic. This page describes how to use the client
library for Cloud Translation - Basic. To use the client library for
Cloud Translation - Advanced, see the
installation instructions .
This page provides reference documentation and related resources for the
Cloud Translation Java client library.
Resource
Description
Library reference
Cloud Translation Java library reference
Language guide
General guide for using Java with GCP
GitHub repository
Source code and additional documentation for this library
Quickstart
Introduction to using this library
Stack Overflow
Questions tagged with Cloud Translation and Java
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
<artifactId>google-cloud-translate</artifactId>
</dependency>
</dependencies>
If you are using Gradle ,
add the following to your dependencies:
implementation 'com.google.cloud:google-cloud-translate:2.88.0'
If you are using sbt , add
the following to your dependencies:
libraryDependencies += "com.google.cloud" % "google-cloud-translate" % "2.88.0"
If you're using Visual Studio Code or IntelliJ, you can add client libraries to your
project using the following IDE plugins:
Cloud Code for VS Code
Cloud Code for IntelliJ
The plugins provide additional functionality, such as key management for service accounts. Refer
to each plugin's documentation for details.
Note: Cloud Java client libraries do not currently support Android.
Using the client library
To use the Java client library for Cloud Translation - Basic, you must
use the com.google.cloud.translate.v2 package.
See how to
translate text
for additional usage details.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
