---
title: "Download Assured OSS packages using a remote repository \_|\_ Security Command\
  \ Center \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/security-command-center/docs/aoss-remote-repository-access
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/security-command-center/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/security-command-center/docs/aoss-remote-repository-access
  title: "Download Assured OSS packages using a remote repository \_|\_ Security Command\
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
Download Assured OSS packages using a remote repository
Stay organized with collections
Save and categorize content based on your preferences.
Enterprise service tier
This page explains how you can set up a remote repository to access and download
Assured OSS packages. You have two options for setting up a
remote repository: JFrog Artifactory or Sonatype Nexus. For more information
about repository options, see Assured OSS repository
options .
This document applies to the Assured OSS premium tier only. For
the free tier, see Download
Assured OSS packages using a remote
repository .
Before you begin
Integrate Assured OSS with
Security Command Center .
Validate connectivity
to Security Command Center for the requested service accounts.
Set up a remote repository using JFrog Artifactory
Sign in to the JFrog Artifactory repository manager. Ensure that you
have the required privileges to create a new remote repository.
Select the option to create a new remote repository in your repository manager.
Select the appropriate repository type (for example, select Maven for Java,
PyPi for Python, or Go for Go).
Optionally, test the connection to the repository
using the following steps:
In the Repository Key field, enter a unique name or identifier for the
remote repository.
In the URL field, enter one of the following:
Java:
https://us-maven.pkg.dev
Python:
https://us-python.pkg.dev
Javascript:
https://us-npm.pkg.dev
Go:
https://us-go.pkg.dev
Don't enter the complete domain name because this action might return an
HTTP 404 or HTTP 405 status code.
Leave the remaining fields blank.
Click Test .
The connection is successful when you see the following output:
Successfully connected to server
To create a new remote repository, enter the following information:
In the Repository Key field, enter a unique name or identifier for
the remote repository. For example, assured-oss-java-repo .
In the URL field, enter one of the following:
Java:
https://us-maven.pkg.dev/ PROJECT_ID /assuredoss-java
Python:
https://us-python.pkg.dev/
JavaScript:
https://us-npm.pkg.dev/ PROJECT_ID /assuredoss-npm
Go:
https://us-go.pkg.dev/ PROJECT_ID /assuredoss-go
Replace PROJECT_ID with the ID
of the project that you selected when you set up
Assured OSS.
In the User Name field, enter _json_key_base64 .
In the Password field, provide the base64-encoded string of the
service account JSON key file. Use the entire base64-encoded string
in a single line as password. To get the base64-encoded string, run the
command cat key-filename.json | base64 -w 0 .
For Python only, in the Registry URL field, enter the following:
https://us-python.pkg.dev/ PROJECT_ID /assuredoss-python
For Go only, in the Advanced Settings tab, select Bypass HEAD
Requests .
Click Create Remote Repository .
For Python packages, append the obtained URL with /simple . Use the URL as
the index-url in the pip install command to download the required Python
packages. For example, if the obtained URL of the repository is
https://a0a87smb7hcda.jfrog.io/artifactory/api/pypi/assured-oss-python-repo ,
then the corresponding index-url is
https://a0a87smb7hcda.jfrog.io/artifactory/api/pypi/assured-oss-python-repo/simple .
After the new remote repository is set up, configure your build tools (for
example, Apache Maven, Gradle Build Tool, or pip) to use this new remote
repository.
Known issues
Testing the connection using the Test button can return an error even if the
connection is configured correctly. We recommend that you create the remote
repository irrespective of the test button behavior. For another way of
confirming a connection, see Validate your connection .
Set up a remote repository using Sonatype Nexus
Sign in to your Sonatype Nexus repository manager. Ensure that you have the
required privileges to create a new remote repository.
Select the option to create a new repository.
Select the appropriate repository type (for example, select Maven for Java,
PyPi for Python, or Go for Go).
Enter the following details for the new repository:
In the Name field, enter a unique name or identifier for the remote
repository.
In the Remote Storage field, choose from the following:
Java:
https://us-maven.pkg.dev/ PROJECT_ID /assuredoss-java
Python:
https://us-python.pkg.dev/ PROJECT_ID /assuredoss-python
JavaScript:
https://us-npm.pkg.dev/ PROJECT_ID /assuredoss-npm
Go:
https://us-go.pkg.dev/ PROJECT_ID /assuredoss-go
Replace PROJECT_ID with the ID
of the project that you selected when you set up
Assured OSS.
Under HTTP , select Authentication .
Specify the following:
In the Authentication type field, enter Username .
In the Username field, enter _json_key_base64 .
In the Password field, provide the base64-encoded string of the
service account JSON key file. Use the entire base64 encoded-string
in a single line as password. To get the base64-encoded string, run the
command cat key-filename.json | base64 .
Click Create Repository .
After the new remote repository is set up, point your build tools (for example,
Apache Maven, Gradle Build Tool, or pip) to use this new remote repository.
What's next
Download Java packages using direct repository access
Download Python packages using direct repository access
Download Go packages using direct repository access
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
