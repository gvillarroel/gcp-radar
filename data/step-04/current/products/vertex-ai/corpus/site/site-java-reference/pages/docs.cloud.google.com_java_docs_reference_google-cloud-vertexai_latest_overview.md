---
title: "google-cloud-vertexai overview (1.48.0) \_|\_ Java client libraries \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-vertexai/latest/overview
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-vertexai/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-vertexai/latest/overview
  title: "google-cloud-vertexai overview (1.48.0) \_|\_ Java client libraries \_|\_\
    \ Google Cloud Documentation"
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
google-cloud-vertexai overview (1.48.0)
Stay organized with collections
Save and categorize content based on your preferences.
1.48.0 (latest)
1.47.0
1.45.0
1.43.0
1.42.0
1.40.0
1.38.0
1.36.0
1.35.0
1.34.0
1.33.0
1.32.0
1.30.0
1.28.0
1.27.0
1.24.0
1.23.0
1.22.0
1.20.1
1.19.0
1.18.0
1.17.0
1.16.0
1.15.0
1.14.0
1.13.0
1.12.0
1.11.0
1.9.0
1.8.0
1.7.0
1.6.0
1.5.0
1.4.0
1.3.0
1.2.0
1.1.0
1.0.0
0.8.0
0.6.0
0.5.0
0.4.0
0.3.0
0.2.0
0.1.0
Key Reference Links
VertexAI API Description: Vertex AI is an integrated suite of machine learning tools and services for building and using ML models with AutoML or custom code. It offers both novices and experts the best workbench for the entire machine learning development lifecycle.
VertexAI API Product Reference
GitHub Repository
Maven artifact
Getting Started
In order to use this library, you first need to go through the following steps:
Install a JDK (Java Development Kit)
Select or create a Cloud Platform project
Enable billing for your project
Enable the API
Set up authentication
Use the VertexAI API for Java
To ensure that your project uses compatible versions of the libraries
and their component artifacts, import com.google.cloud:libraries-bom and use
the BOM to specify dependency versions. Be sure to remove any versions that you
set previously. For more information about
BOMs, see Google Cloud Platform Libraries BOM .
Maven
Import the BOM in the dependencyManagement section of your pom.xml file.
Include specific artifacts you depend on in the dependencies section, but don't
specify the artifacts' versions in the dependencies section.
The example below demonstrates how you would import the BOM and include the google-cloud-vertexai artifact.
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
<artifactId>google-cloud-vertexai</artifactId>
</dependency>
</dependencies>
Gradle
BOMs are supported by default in Gradle 5.x or later. Add a platform
dependency on com.google.cloud:libraries-bom and remove the version from the
dependency declarations in the artifact's build.gradle file.
The example below demonstrates how you would import the BOM and include the google-cloud-vertexai artifact.
implementation ( platform ( "com.google.cloud:libraries-bom:26.79.0" ))
implementation ( "com.google.cloud:google-cloud-vertexai" )
The platform and enforcedPlatform keywords supply dependency versions
declared in a BOM. The enforcedPlatform keyword enforces the dependency
versions declared in the BOM and thus overrides what you specified.
For more details of the platform and enforcedPlatform keywords Gradle 5.x or higher, see
Gradle: Importing Maven BOMs .
If you're using Gradle 4.6 or later, add
enableFeaturePreview('IMPROVED_POM_SUPPORT') to your settings.gradle file. For details, see
Gradle 4.6 Release Notes: BOM import .
Versions of Gradle earlier than 4.6 don't support BOMs.
SBT
SBT doesn't support BOMs . You can find
recommended versions of libraries from a particular BOM version on the
dashboard
and set the versions manually.
To use the latest version of this library, add this to your dependencies:
libraryDependencies += "com.google.cloud" % "google-cloud-vertexai" % "1.48.0"
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
