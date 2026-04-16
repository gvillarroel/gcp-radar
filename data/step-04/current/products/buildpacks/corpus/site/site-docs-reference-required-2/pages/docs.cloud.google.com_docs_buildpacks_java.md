---
title: "Building a Java application \_|\_ Buildpacks \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/docs/buildpacks/java
knowledge_key: corpus
source_id: site-docs-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/docs/buildpacks/go
source_metadata:
  url: https://docs.cloud.google.com/docs/buildpacks/java
  title: "Building a Java application \_|\_ Buildpacks \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Buildpacks
Guides
Send feedback
Building a Java application
Stay organized with collections
Save and categorize content based on your preferences.
Specify a Java version
By default, buildpacks use the latest supported version of Java unless you specify a version. If your
application requires a specific version, you can use the
GOOGLE_RUNTIME_VERSION environment variable to specify a JDK version:
pack build sample - java -- builder = gcr . io / buildpacks / builder \
-- env GOOGLE_RUNTIME_VERSION = 21
You can also use a project.toml project descriptor to encode
the environment variable alongside your project files. See instructions on
building the application with environment variables .
Manage dependencies
Dependency configuration is supported for projects that use
Maven or Gradle.
Configure Maven
Maven configurations can be applied using the MAVEN_OPTS environment variable.
See documentation for
additional instructions.
Examples:
MAVEN_OPTS=-Xms256m -Xmx512m passes these flags to the JVM
running Maven.
MAVEN_OPTS=--add-opens java.base/java.lang=ALL-UNNAMED to
suppress "illegal reflective access" warnings from Maven.
To manage your project's dependency on Maven itself, you can use the
Maven Wrapper . If you do not use the
Maven Wrapper, buildpacks defaults to using a recent version of Maven
when running pack build .
Configure Gradle
Gradle configurations can be applied using the GRADLE_OPTS environment
variable. See
documentation
for additional instructions.
Example:
GRADLE_OPTS=-Xms256m -Xmx512m passes these flags to the JVM running Gradle.
Google Cloud hosted Maven Central mirror
You can use the hosted mirror of Maven Central by specifying the
available URLs .
Mirror repositories in Maven
To configure a mirror, follow the
Using Mirrors for Repositories
instructions in the Maven project documentation.
Create a copy of the settings.xml from the default location of
~/.m2/settings.xml to inside your application source directory and specify
GOOGLE_BUILD_ARGS=--settings <path/to/settings> .
Note: is relative to the source directory.
Example settings.xml file:
<settings>
<mirrors>
<mirror>
<id>google-maven-central</id>
<name>Cloud Storage Maven Central mirror</name>
<url>https://maven-central.storage-download.googleapis.com/maven2/</url>
<mirrorOf>central</mirrorOf>
</mirror>
</mirrors>
</settings>
Mirror repositories in Gradle
To configure a mirror, follow the
Declaring Repositories
instructions in the Gradle project documentation.
Example build.gradle entry:
reposi t ories {
mave n {
url "https://maven-central.storage-download.googleapis.com/maven2/"
}
}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
