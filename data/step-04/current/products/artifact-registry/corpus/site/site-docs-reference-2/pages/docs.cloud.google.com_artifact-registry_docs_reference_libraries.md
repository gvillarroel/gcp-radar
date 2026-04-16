---
title: "Artifact Registry client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/artifact-registry/docs/reference/libraries
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/artifact-registry/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/artifact-registry/docs/reference/libraries
  title: "Artifact Registry client libraries \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Artifact Registry
Reference
Send feedback
Artifact Registry client libraries
Stay organized with collections
Save and categorize content based on your preferences.
This page shows how to get started with the Cloud Client Libraries for the
Artifact Registry API. Client libraries make it easier to access
Google Cloud APIs from a supported language. Although you can use
Google Cloud APIs directly by making raw requests to the server, client
libraries provide simplifications that significantly reduce the amount of code
you need to write.
Read more about the Cloud Client Libraries
and the older Google API Client Libraries in
Client libraries explained .
Artifact Registry client libraries only support control plane actions, not data plane actions. Control plane actions include repository management actions such as creating repositories, editing repository descriptions, and deleting repositories, and artifact management actions such as listing artifacts, tagging artifacts, and deleting artifacts. Data plane actions include actions such as pushing and pulling artifacts from Artifact Registry repositories.
Install the client library
Go
go get cloud.google.com/go/artifactregistry
For more information, see Setting Up a Go Development Environment .
Java
If you are using Maven, add this to your pom.xml file:
<dependency>
<groupId>com.google.cloud</groupId>
<artifactId>google-cloud-artifact-registry</artifactId>
<version>1.31.0</version>
</dependency>
If you are using Gradle, add this to your dependencies:
compile group: 'com.google.cloud', name: 'google-cloud-artifact-registry', version: '1.31.0'
For more information, see Setting Up a Java Development Environment .
Node.js
npm install @google-cloud/artifact-registry
For more information, see Setting Up a Node.js Development Environment .
PHP
composer require google/cloud-artifact-registry
For more information, see Using PHP on Google Cloud .
Ruby
gem install google-cloud-artifact_registry-v1
For more information, see Setting Up a Ruby Development Environment .
Set up authentication
To authenticate calls to Google Cloud APIs, client libraries support
Application Default Credentials (ADC) ;
the libraries look for credentials in a set of defined locations and use those credentials
to authenticate requests to the API. With ADC, you can make
credentials available to your application in a variety of environments, such as local
development or production, without needing to modify your application code.
For production environments, the way you set up ADC depends on the service
and context. For more information, see Set up Application Default Credentials .
For a local development environment, you can set up ADC with the credentials
that are associated with your Google Account:
Install the Google Cloud CLI.
After installation,
initialize the Google Cloud CLI by running the following command:
gcloud init
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
If you're using a local shell, then create local authentication credentials for your user
account:
gcloud auth application-default login
You don't need to do this if you're using Cloud Shell.
If an authentication error is returned, and you are using an external identity provider
(IdP), confirm that you have
signed in to the gcloud CLI with your federated identity .
A sign-in screen appears. After you sign in, your credentials are stored in the
local credential file used by ADC .
Additional resources
Go
The following list contains links to more resources related to the
client library for Go:
API reference
Client libraries best practices
Issue tracker
google-artifact-registry on Stack Overflow
Source code
Java
The following list contains links to more resources related to the
client library for Java:
API reference
Client libraries best practices
Issue tracker
google-artifact-registry on Stack Overflow
Source code
Node.js
The following list contains links to more resources related to the
client library for Node.js:
API reference
Client libraries best practices
Issue tracker
google-artifact-registry on Stack Overflow
Source code
PHP
The following list contains links to more resources related to the
client library for PHP:
API reference
Client libraries best practices
Issue tracker
google-artifact-registry on Stack Overflow
Source code
Ruby
The following list contains links to more resources related to the
client library for Ruby:
API reference
Client libraries best practices
Issue tracker
google-artifact-registry on Stack Overflow
Source code
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
