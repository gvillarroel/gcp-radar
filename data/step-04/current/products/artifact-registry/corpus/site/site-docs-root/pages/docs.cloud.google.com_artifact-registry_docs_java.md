---
title: "Manage Java packages \_|\_ Artifact Registry \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/artifact-registry/docs/java
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/artifact-registry/docs
source_metadata:
  url: https://docs.cloud.google.com/artifact-registry/docs/java
  title: "Manage Java packages \_|\_ Artifact Registry \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Artifact Registry
Guides
Send feedback
Manage Java packages
Stay organized with collections
Save and categorize content based on your preferences.
Artifact Registry supports Java packages that you build with Maven and Gradle.
Overview
To get familiar with Java packages in Artifact Registry, you can try the
quickstart .
When you are ready to learn more, read the following information:
Create a Java package repository for your packages.
Learn how to create remote and virtual repositories.
Read about how remote and virtual repositories can be used in this
repository usage example .
Grant permissions to the account that
will connect with the repository. Service accounts for common integrations
with Artifact Registry have default permissions for
repositories in the same project.
Configure your tools:
Configure authentication for Maven or Gradle.
If you want to use sbt
as a build tool for Scala and Java instead of using Maven or Gradle, there is a
community-created sbt plugin
available. This documentation does not describe configuration or usage of
Scala clients..
Configure Cloud Build to upload and download packages.
Learn about deploying to Google Cloud runtime environments.
Learn about managing packages .
Maven snapshot and release versions
Maven distinguishes between snapshot and release versions of your
Maven projects.
Snapshots
A snapshot is a pre-release version of a Java project. The version number
for a snapshot includes the suffix -SNAPSHOT in the your Project Object Model
(POM). For example, this setting in the pom.xml file is for a 1.0 version
of project that is in development:
<version>1.0-SNAPSHOT</version>
When you publish a package from this project, Maven 3 automatically appends
a timestamp to the snapshot version number so that each snapshot version is
unique. Maven 2 supports non-unique snapshot versions as a means to overwrite
existing snapshots in a repository. This approach is problematic for
reproducibility of builds, which is why Maven 3 no longer supports non-unique
snapshots.
Snapshots provide a way for you to iteratively publish updated versions of a
pre-release package without incrementing the version number in your Maven
project every time that you publish to the repository. During development,
other projects with dependencies on the package can then obtain the latest
snapshot of version 1.0 from the repository.
Refer to
version order specification for details about Maven version number syntax
and sort order.
Releases
When you are ready to release a package, you remove the -SNAPSHOT suffix
from the version number in the POM file and update any projects that depend on
the package so that they use the release version instead of the snapshot
version.
To list all snapshot dependencies, you can
filter the dependency tree
with the command:
mvn dependency:tree -Dincludes = :::*-SNAPSHOT
Artifact Registry version policy
When you create a Maven repository in Artifact Registry, you can specify a
Maven version policy:
None - Stores both snapshot and release packages. This is the default setting.
Snapshot - Stores snapshot packages only.
Release - Stores release packages only.
If you choose the snapshot version policy, you can also specify whether the
repository allows non-unique snapshot versions that overwrite matching versions
in the repository. We recommend using unique versions since Maven 3 does not
support the non-unique version model.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
