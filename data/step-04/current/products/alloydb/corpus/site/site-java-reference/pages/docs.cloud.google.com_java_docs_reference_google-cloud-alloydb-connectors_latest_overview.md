---
title: "google-cloud-alloydb-connectors overview (0.66.0) \_|\_ Java client libraries\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-alloydb-connectors/latest/overview
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-alloydb-connectors/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-alloydb-connectors/latest/overview
  title: "google-cloud-alloydb-connectors overview (0.66.0) \_|\_ Java client libraries\
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
google-cloud-alloydb-connectors overview (0.66.0)
Stay organized with collections
Save and categorize content based on your preferences.
0.66.0 (latest)
0.65.0
0.63.0
0.61.0
0.60.0
0.59.0
0.58.0
0.56.0
0.54.0
0.53.0
0.52.0
0.51.0
0.50.0
0.48.0
0.46.0
0.45.0
0.42.0
0.41.0
0.40.0
0.38.0
0.37.0
0.36.0
0.35.0
0.34.0
0.33.0
0.32.0
0.31.0
0.30.0
0.29.0
0.27.0
0.26.0
0.25.0
0.24.0
0.23.0
0.22.0
0.21.0
0.20.0
0.19.0
0.18.0
0.17.0
0.15.0
0.14.0
0.13.0
0.12.0
0.11.0
0.10.0
0.9.0
0.8.0
0.7.0
0.6.0
0.5.0
0.2.0
0.1.0
Key Reference Links
AlloyDB connectors Description: AlloyDB is a fully-managed, PostgreSQL-compatible database for demanding transactional workloads. It provides enterprise-grade performance and availability while maintaining 100% compatibility with open-source PostgreSQL.
AlloyDB connectors Product Reference
GitHub Repository
Maven artifact
Getting Started
In order to use this library, you first need to go through the following steps:
Install a JDK (Java Development Kit)
Select or create a Cloud Platform project
Enable billing for your project
Enable the API
Set up authentication
Use the AlloyDB connectors for Java
To ensure that your project uses compatible versions of the libraries
and their component artifacts, import com.google.cloud:libraries-bom and use
the BOM to specify dependency versions. Be sure to remove any versions that you
set previously. For more information about
BOMs, see Google Cloud Platform Libraries BOM .
Maven
Import the BOM in the dependencyManagement section of your pom.xml file.
Include specific artifacts you depend on in the dependencies section, but don't
specify the artifacts' versions in the dependencies section.
The example below demonstrates how you would import the BOM and include the google-cloud-alloydb-connectors artifact.
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
<artifactId>google-cloud-alloydb-connectors</artifactId>
</dependency>
</dependencies>
Gradle
BOMs are supported by default in Gradle 5.x or later. Add a platform
dependency on com.google.cloud:libraries-bom and remove the version from the
dependency declarations in the artifact's build.gradle file.
The example below demonstrates how you would import the BOM and include the google-cloud-alloydb-connectors artifact.
implementation ( platform ( "com.google.cloud:libraries-bom:26.79.0" ))
implementation ( "com.google.cloud:google-cloud-alloydb-connectors" )
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
libraryDependencies += "com.google.cloud" % "google-cloud-alloydb-connectors" % "0.66.0"
Which version ID should I get started with?
For this library, we recommend using com.google.cloud.alloydb.connectors.v1 for new applications.
Understanding Version ID and Library Versions
When using a Cloud client library, it's important to distinguish between two types of versions:
Library Version : The version of the software package (the client library) that helps you interact with the Cloud service. These libraries are
released and updated frequently with bug fixes, improvements, and support for new service features and versions. The version selector at
the top of this page represents the client library version.
Version ID : The version of the Cloud service itself (e.g. AlloyDB connectors). New Version IDs are introduced infrequently, and often involve
changes to the core functionality and structure of the Cloud service itself. The packages in the lefthand navigation represent packages tied
to a specific Version ID of the Cloud service.
Managing Library Versions
We recommend using the com.google.cloud:libraries-bom installation method detailed above to streamline dependency management
across multiple Cloud Java client libraries. This ensures compatibility and simplifies updates.
Choosing the Right Version ID
Each Cloud Java client library may contain packages tied to specific Version IDs (e.g., v1 , v2alpha ). For new production applications, use
the latest stable Version ID. This is identified by the highest version number without a suffix (like "alpha" or "beta"). You can read more about
Cloud API versioning strategy here .
Important : Unstable Version ID releases (those with suffixes) are subject to breaking changes when upgrading. Use them only for testing or if you specifically need their experimental features.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-29 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-29 UTC."],[],[]]
