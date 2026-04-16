---
title: "Cloud Tasks client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/tasks/docs/reference/libraries
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/tasks/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/tasks/docs/reference/libraries
  title: "Cloud Tasks client libraries \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Tasks
Reference
Send feedback
Cloud Tasks client libraries
Stay organized with collections
Save and categorize content based on your preferences.
This page shows how to get started with the Cloud Client Libraries for the
Cloud Tasks API. Client libraries make it easier to access
Google Cloud APIs from a supported language. Although you can use
Google Cloud APIs directly by making raw requests to the server, client
libraries provide simplifications that significantly reduce the amount of code
you need to write.
Read more about the Cloud Client Libraries
and the older Google API Client Libraries in
Client libraries explained .
Install the client library
C++
See Setting up a C++ development environment
for details about this client library's requirements and install dependencies.
C#
Install-Package Google.Cloud.Tasks.V2 -Version 1.0.0
For more information, see Setting Up a C# Development Environment .
Go
go get cloud.google.com/go/cloudtasks
For more information, see Setting Up a Go Development Environment .
Java
If you are using Maven, add this to your pom.xml file:
< dependency >
< groupId>com . google . cloud < / groupId >
< artifactId>google - cloud - tasks < / artifactId >
< version>2 .85.0 < / version >
< / dependency >
If you are using Gradle, add this to your dependencies:
compile group : ' com . google . cloud ' , name : ' google - cloud - tasks ' , version : ' 2.85.0 '
If you are using SBT, add this to your dependencies:
libraryDependencies += "com.google.cloud" % "google-cloud-tasks" % "2.85.0"
If you are using VS Code, IntelliJ or Eclipse, you can add client libraries
to your project using the following IDE plugins:
Cloud Code for VS Code
Cloud Code for IntelliJ
The plugins provide additional functionality, such as key management for
service accounts. Refer to each plugin's documentation for details.
Note: Cloud Java client libraries do not
currently support Android.
For more information, see Setting Up a Java Development Environment .
Node.js
Alpha: This is
an alpha release of the Node.js Cloud Client Library for the Cloud Tasks API.
This library might be changed in backward-incompatible ways and is not subject
to any SLA or deprecation policy.
npm install @google-cloud/tasks
For more information, see Setting Up a Node.js Development Environment .
PHP
composer require google/cloud-tasks
For more information, see Using PHP on Google Cloud .
Python
pip install --upgrade google-cloud-tasks
For more information, see Setting Up a Python Development Environment .
Ruby
Alpha: This is an
alpha release of the Ruby Cloud Client Library for the Cloud Tasks API. This
library might be changed in backward-incompatible ways and is not subject to any
SLA or deprecation policy.
gem install google-cloud-tasks
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
Use the client library
The following example shows how to use the client library.
C#
For examples of using the client library, see Creating HTTP Target Tasks and Creating App Engine Tasks .
Go
For examples of using the client library, see Creating HTTP Target Tasks and Creating App Engine Tasks .
Java
For examples of using the client library, see Creating HTTP Target Tasks and Creating App Engine Tasks .
Node.js
For examples of using the client library, see Creating HTTP Target Tasks and Creating App Engine Tasks .
PHP
For examples of using the client library, see Creating HTTP Target Tasks and Creating App Engine Tasks .
Python
For examples of using the client library, see Creating HTTP Target Tasks and Creating App Engine Tasks .
Ruby
For examples of using the client library, see Creating HTTP Target Tasks and Creating App Engine Tasks .
Additional resources
C++
The following list contains links to more resources related to the
client library for C++:
API reference
Client libraries best practices
Issue tracker
google-cloud-tasks on Stack Overflow
Source code
C#
The following list contains links to more resources related to the
client library for C#:
API reference
Client libraries best practices
Issue tracker
google-cloud-tasks on Stack Overflow
Source code
Go
The following list contains links to more resources related to the
client library for Go:
API reference
Client libraries best practices
Issue tracker
google-cloud-tasks on Stack Overflow
Source code
Java
The following list contains links to more resources related to the
client library for Java:
API reference
Client libraries best practices
Issue tracker
google-cloud-tasks on Stack Overflow
Source code
Node.js
The following list contains links to more resources related to the
client library for Node.js:
API reference
Client libraries best practices
Issue tracker
google-cloud-tasks on Stack Overflow
Source code
PHP
The following list contains links to more resources related to the
client library for PHP:
API reference
Client libraries best practices
Issue tracker
google-cloud-tasks on Stack Overflow
Source code
Python
The following list contains links to more resources related to the
client library for Python:
API reference
Client libraries best practices
Issue tracker
google-cloud-tasks on Stack Overflow
Source code
Ruby
The following list contains links to more resources related to the
client library for Ruby:
API reference
Client libraries best practices
Issue tracker
google-cloud-tasks on Stack Overflow
Source code
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
