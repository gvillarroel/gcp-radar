---
title: "google-cloud-bigtable overview (2.74.0) \_|\_ Java client libraries \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/overview
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/overview
  title: "google-cloud-bigtable overview (2.74.0) \_|\_ Java client libraries \_|\_\
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
google-cloud-bigtable overview (2.74.0)
Stay organized with collections
Save and categorize content based on your preferences.
2.74.0 (latest)
2.73.0
2.72.0
2.71.0
2.70.0
2.68.0
2.67.1
2.66.0
2.65.1
2.63.0
2.62.0
2.61.0
2.60.0
2.59.0
2.58.2
2.56.0
2.54.0
2.52.0
2.51.2
2.49.0
2.46.0
2.45.1
2.44.1
2.43.0
2.42.0
2.40.0
2.39.5
2.37.0
2.35.1
2.34.0
2.33.0
2.32.0
2.31.0
2.30.0
2.29.1
2.28.0
Key Reference Links
Cloud Bigtable Description: API for reading and writing the contents of Bigtables associated with a cloud project.
Cloud Bigtable Product Reference
GitHub Repository
Maven artifact
Getting Started
In order to use this library, you first need to go through the following steps:
Install a JDK (Java Development Kit)
Select or create a Cloud Platform project
Enable billing for your project
Enable the API
Set up authentication
Use the Cloud Bigtable for Java
To ensure that your project uses compatible versions of the libraries
and their component artifacts, import com.google.cloud:libraries-bom and use
the BOM to specify dependency versions. Be sure to remove any versions that you
set previously. For more information about
BOMs, see Google Cloud Platform Libraries BOM .
Maven
Import the BOM in the dependencyManagement section of your pom.xml file.
Include specific artifacts you depend on in the dependencies section, but don't
specify the artifacts' versions in the dependencies section.
The example below demonstrates how you would import the BOM and include the google-cloud-bigtable artifact.
<dependencyManagement>
<dependencies>
<dependency>
<groupId>com.google.cloud</groupId>
<artifactId>libraries-bom</artifactId>
<version>26.78.0</version>
<type>pom</type>
<scope>import</scope>
</dependency>
</dependencies>
</dependencyManagement>
<dependencies>
<dependency>
<groupId>com.google.cloud</groupId>
<artifactId>google-cloud-bigtable</artifactId>
</dependency>
</dependencies>
Gradle
BOMs are supported by default in Gradle 5.x or later. Add a platform
dependency on com.google.cloud:libraries-bom and remove the version from the
dependency declarations in the artifact's build.gradle file.
The example below demonstrates how you would import the BOM and include the google-cloud-bigtable artifact.
implementation ( platform ( "com.google.cloud:libraries-bom:26.78.0" ))
implementation ( "com.google.cloud:google-cloud-bigtable" )
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
libraryDependencies += "com.google.cloud" % "google-cloud-bigtable" % "2.74.0"
Which version ID should I get started with?
For this library, we recommend using com.google.cloud.bigtable for new applications.
Understanding Version ID and Library Versions
When using a Cloud client library, it's important to distinguish between two types of versions:
Library Version : The version of the software package (the client library) that helps you interact with the Cloud service. These libraries are
released and updated frequently with bug fixes, improvements, and support for new service features and versions. The version selector at
the top of this page represents the client library version.
Version ID : The version of the Cloud service itself (e.g. Cloud Bigtable). New Version IDs are introduced infrequently, and often involve
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
Last updated 2026-03-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-14 UTC."],[],[]]
