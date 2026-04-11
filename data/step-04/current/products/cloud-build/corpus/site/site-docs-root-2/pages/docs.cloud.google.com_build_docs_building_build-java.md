---
title: "Build and test Java applications \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/build/docs/building/build-java
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/build/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/build/docs/building/build-java
  title: "Build and test Java applications \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Build
Guides
Send feedback
Build and test Java applications
Stay organized with collections
Save and categorize content based on your preferences.
This page explains how to use Cloud Build to build and test
Java-based applications, store built artifacts in a Maven repository in
Artifact Registry, and generate build provenance information.
Before you begin
Be familiar with creating Java-based applications.
Be familiar with Maven
Have your Java project ready.
Be familiar with how to write a Cloud Build configuration file .
Have a Maven repository in Artifact Registry. If you do not have one, create a new repository .
To run the gcloud commands in this page, install the
Google Cloud CLI .
Using the maven image
You can configure Cloud Build to build Java applications using the
maven image from Docker Hub.
To execute your tasks in the maven image, add a step to your build config with the following fields:
name : Set the value of this field to maven or maven:<tag> , where the
tag represents the version. If you don't specify the image tag, Cloud Build
uses the latest image by default.
entrypoint : Setting this field overrides the default entry point of the
image referenced in name . Set the value of this field to mvn to invoke
mvn as the entrypoint of the build step and run mvn commands.
args : The args field of a build step takes a list of arguments and
passes them to the image referenced by the name field.
The following build step specifies the entrypoint for the maven image
tagged as 3.3-jdk-8 and prints the build tool version:
steps :
- name : maven : 3.3 - jdk - 8
entrypoint : mvn
args : [ ' -- version ' ]
Configuring Java builds
In your project root directory, create a build config file named
cloudbuild.yaml .
Run tests : maven provides maven test , which downloads dependencies, builds the applications, and runs any tests specified in your source code. The args field of a build step takes a list of arguments and passes them to the image referenced by the name field.
In your build config file, add test to the args field to invoke test
within maven :
steps :
- name : maven : 3.3 - jdk - 8
entrypoint : mvn
args : [ ' test ' ]
Package application : To package your application into a JAR file
for your maven image, specify the package command in the args field.
The package command builds a JAR file in /workspace/target/ .
The following build step packages your Java application:
steps :
- name : maven : 3.3 - jdk - 8
entrypoint : mvn
args : [ ' package ',' - Dmaven . test . skip = true ' ]
Note: The package command re-runs tests. Adding -Dmaven.test.skip=true to the args field will skip tests.
Upload to Artifact Registry :
In your build config file, use the mavenArtifacts field to specify your
application path and your Maven repository in Artifact Registry:
artifacts :
mavenArtifacts :
- repository : ' https : // location -maven.pkg.dev/ project-id / repository-name '
path : ' app - path '
artifactId : ' build - artifact '
groupId : ' group - id '
version : ' version '
Replace the following values:
location : the location for your repository in Artifact Registry.
project-id : the ID of the Google Cloud project that contains your Artifact Registry repository.
repository-name : the name of your Maven repository in Artifact Registry.
app-path : the path to your packaged application.
build-artifact : the name of your package file created from your build step.
group-id : uniquely identifies your project across all Maven projects, in the format com.mycompany.app . For more information, see the Maven guide to naming conventions .
version : the version number for your application, formatted in numbers and dots like 1.0.1 .
Optional: Enable provenance generation
Cloud Build can generate verifiable
Supply chain Levels for Software Artifacts (SLSA) build
provenance metadata to help secure your continuous integration pipeline.
To enable provenance generation, add
requestedVerifyOption: VERIFIED
to the options section in your config file.
Start your build : manually or
using build triggers .
Once your build completes, you can view repository details
in Artifact Registry.
You can also view build provenance metadata and validate provenance .
What's next
Learn how to view build results .
Learn how to safeguard builds .
Learn how to perform blue/green deployments on Compute Engine .
Learn how to build and containerize Java applications .
Learn how to deploy an application on Cloud Run .
Learn how to deploy an application on GKE .
Learn how to troubleshoot build errors .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
