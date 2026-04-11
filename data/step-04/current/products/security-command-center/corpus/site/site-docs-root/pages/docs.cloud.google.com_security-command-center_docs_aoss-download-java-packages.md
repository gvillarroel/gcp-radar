---
title: "Download Java packages using direct repository access \_|\_ Security Command\
  \ Center \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/security-command-center/docs/aoss-download-java-packages
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/security-command-center/docs
source_metadata:
  url: https://docs.cloud.google.com/security-command-center/docs/aoss-download-java-packages
  title: "Download Java packages using direct repository access \_|\_ Security Command\
    \ Center \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Security Command Center
Guides
Send feedback
Download Java packages using direct repository access
Stay organized with collections
Save and categorize content based on your preferences.
Enterprise service tier
After you integrate Assured OSS with
Security Command Center , Assured Open Source Software packages are hosted in an Artifact Registry
repository that is created in a project that you control.
This page explains how you can connect to the Artifact Registry repository for
Assured OSS to directly access and download the Java packages.
This document applies to the Assured OSS premium tier only. For
the free tier, see Download Java packages using direct repository access for
the free tier .
Before you begin
Request your administrator to grant you the Service Account Key Admin ( roles/iam.serviceAccountKeyAdmin ) IAM role on your organization. You need this permission to get the base64-encoded string of the service account key. For more information about granting roles, see Manage access to projects, folders, and organizations .
Integrate Assured OSS with
Security Command Center .
Validate connectivity
to Assured OSS for the requested service accounts.
Install the latest version of the Google Cloud CLI . If you have installed the Google Cloud CLI previously, make sure you have the latest version by running this command:
gcloud components update
Set up authentication
Artifact Registry supports the following authentication methods:
Authentication with a credential helper
Authentication with a password
The following sections describe how to set up these authentication methods.
Authenticate with a credential helper
Artifact Registry provides a
Maven wagon
and a
Gradle plugin
to use as
credential helpers .
This option provides the most flexibility.
To set up Application Default Credentials , see
Set up authentication .
Set up your credential helpers
If you're using a credential helper to set up authentication, make the following
changes based on the build tool.
Maven
<project>
<build>
<extensions>
<extension>
<groupId>com.google.cloud.artifactregistry</groupId>
<artifactId>artifactregistry-maven-wagon</artifactId>
<version>2.2.0</version>
</extension>
</extensions>
</build>
</project>
Gradle
plugins {
id "com.google.cloud.artifactregistry.gradle-plugin" version "2.2.0"
}
Authenticate using password
Authenticate using
password when your
Java application requires authentication with a specified username and password.
Change the settings based on your build tool:
Maven
Add the following authentication settings in the settings section of the
~/.m2/settings.xml file. If the file doesn't already exist, create it. For more information, see the Maven Settings reference.
<settings>
<servers>
<server>
<id>artifact-registry</id>
<configuration>
<httpConfiguration>
<get>
<usePreemptive>true</usePreemptive>
</get>
<head>
<usePreemptive>true</usePreemptive>
</head>
<put>
<params>
<property>
<name>http.protocol.expect-continue</name>
<value>false</value>
</property>
</params>
</put>
</httpConfiguration>
</configuration>
<username>_json_key_base64</username>
<password> KEY </password>
</server>
</servers>
</settings>
Replace KEY with the base64-encoding of the entire service
account JSON key file. To do this, run the following command:
cat KEY_FILE_LOCATION | base64
Replace KEY_FILE_LOCATION with the location of the service account JSON key
file.
Gradle
Add the following line to your ~/.gradle/gradle.properties file so that
the key is not visible in your builds or your source control repository.
artifactRegistryMavenSecret = KEY
Replace KEY with the private key from your service account JSON
key file. For json_key_base64 , the artifactRegistryMavenSecret contains the
base64 encrypted password. For example, base64 -w 0 KEY .
In the build.gradle file, specify the repository settings using the following example:
repositories {
maven {
url "artifactregistry://us-maven.pkg.dev/ PROJECT_ID /assuredoss-java"
credentials {
username = "_json_key_base64"
password = "$artifactRegistryMavenSecret"
}
authentication {
basic(BasicAuthentication)
}
}
}
Replace PROJECT_ID with the ID of the project that you selected when you set up Assured Open Source Software.
Update the project configuration file to point to the repository
Maven
Add the following settings to the appropriate section in the pom.xml file for
your Maven project. Don't replace the authentication settings.
<project>
<repositories>
<repository>
<id>artifact-registry</id>
<url>artifactregistry://us-maven.pkg.dev/ PROJECT_ID /assuredoss-java</url>
<releases>
<enabled>true</enabled>
</releases>
<snapshots>
<enabled>false</enabled>
</snapshots>
</repository>
</repositories>
</project>
Replace PROJECT_ID with the ID of the project that you selected when you set up Assured Open Source Software.
See the Maven POM reference for
details about the structure of the file.
Gradle
Specify the following repository settings in your build.gradle file. Don't
replace the authentication settings.
repositories {
maven {
url "artifactregistry://us-maven.pkg.dev/ PROJECT_ID /assuredoss-java"
}
}
Replace PROJECT_ID with the ID of the project that you selected when you set up Assured Open Source Software.
Update the project configuration file to add dependencies
To download an artifact as a part of your build, the artifact must be declared
as a dependency.
Maven
Declare the packages that you want to download in the pom.xml file for your
Maven project.
<dependency>
<groupId>org.apache.logging.log4j</groupId>
<artifactId>log4j-api</artifactId>
<version>2.17.1</version>
</dependency>
Gradle
Declare the packages that you want to download in your build.gradle file.
dependencies {
compile group: 'org.apache.logging.log4j', name: 'log4j-api', version: '2.17.1'
}
List all Java packages available in Assured OSS
To use an
API
to get a list of all the Java packages available in the Artifact Registry
repository, see
List all Java packages available in Security Command Center .
What's next
Download Python packages using direct repository access in the premium tier
Access security metadata and verify packages in the premium tier
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
