---
title: "Specifying dependencies \_|\_ App Engine standard environment \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/appengine/docs/standard/java-gen2/specifying-dependencies
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/standard/java-gen2/configuring-your-app-with-app-yaml
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/standard/java-gen2/specifying-dependencies
  title: "Specifying dependencies \_|\_ App Engine standard environment \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
App Engine
Standard environment
Guides
Send feedback
Specifying dependencies
Stay organized with collections
Save and categorize content based on your preferences.
You can use any Java compatible libraries with the Java runtime on the
App Engine standard environment.
These instructions use Apache Maven to build, run, and deploy a sample app.
For details about installing Maven, see
Using Apache Maven and the App Engine plugin .
Declare and manage dependencies
To manage dependencies using Maven, you need to specify the dependencies in
the <dependencies> section inside the
pom.xml
file of your project.
To manage your project's dependency on Maven itself, you can use the
Maven Wrapper . If you do not use the
Maven Wrapper, App Engine defaults to using a recent version of Maven
when running gcloud app deploy .
Private dependencies with Artifact Registry
If you need to host private dependencies for your Java app, you can use an
Artifact Registry Maven repository .
Connecting to a Maven repository hosted on Artifact Registry requires the
Artifact Registry Maven Tools
plugin for your Maven or Gradle configuration.
Specify the Java servlet library
Eclipse Jetty and Tomcat apps require the Java servlet library. Specify it in
your pom.xml file's <dependencies> entry:
<dependencies>
<dependency>
<groupId>javax.servlet</groupId>
<artifactId>javax.servlet-api</artifactId>
<version>3.1.0</version>
<type>jar</type>
<scope>provided</scope>
</dependency>
</dependencies>
Note that frameworks such as SparkJava
or Spring Boot
won't require the servlet library.
Use the Cloud Client Libraries
Cloud Client Libraries for Java
provide idiomatic access to Google Cloud services. To use a library, declare
it as a dependency.
Typically, you only declare dependencies on the specific libraries that your app
needs. For example, to use the Cloud Storage library:
<!-- Using libraries-bom to manage versions.
See https://github.com/GoogleCloudPlatform/cloud-opensource-java/wiki/The-Google-Cloud-Platform-Libraries-BOM -->
<dependencyManagement>
<dependencies>
<dependency>
<groupId>com.google.cloud</groupId>
<artifactId>libraries-bom</artifactId>
<version>26.28.0</version>
<type>pom</type>
<scope>import</scope>
</dependency>
</dependencies>
</dependencyManagement>
<dependencies>
<dependency>
<groupId>com.google.cloud</groupId>
<artifactId>google-cloud-storage</artifactId>
</dependency>
</dependencies>
You can configure the Cloud Client Libraries for Java to
handle authentication automatically .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
