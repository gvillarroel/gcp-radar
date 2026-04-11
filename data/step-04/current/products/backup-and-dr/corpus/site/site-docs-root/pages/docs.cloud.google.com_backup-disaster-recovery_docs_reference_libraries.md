---
title: "Backup and DR Service client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/backup-disaster-recovery/docs/reference/libraries
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/backup-disaster-recovery/docs
source_metadata:
  url: https://docs.cloud.google.com/backup-disaster-recovery/docs/reference/libraries
  title: "Backup and DR Service client libraries \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Backup and DR Service client libraries
Stay organized with collections
Save and categorize content based on your preferences.
This page shows how to get started with the Cloud Client Libraries for the
Backup and DR API. Client libraries make it easier to access
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
If you are using Visual Studio 2017 or later, open the NuGet package manager window and type the following:
Install-Package Google.Apis
If you are using .NET Core command-line interface tools to install your dependencies, run the following command:
dotnet add package Google.Apis
For more information, see Setting Up a C# Development Environment .
Go
go get -d google.golang.org/api/...
For more information, see Setting Up a Go Development Environment .
Java
Note that the Google API Client Library for Java does not currently support Android.
If you are using Maven, add this to your
pom . xml file:
< dependency >
< groupId>com . google . api - client < / groupId >
< artifactId>google - api - client < / artifactId >
< version>1 .22.0 < / version >
< / dependency >
If you are using Gradle, add this to your dependencies:
compile ' com . google . api - client : google - api - client : 1.22.0 '
If you are using SBT, add this to your dependencies:
libraryDependencies += "com.google.api-client" % "google-api-client" % "1.22.0"
For more information, see Setting Up a Java Development Environment .
Node.js
npm install googleapis
For more information, see Setting Up a Node.js Development Environment .
PHP
composer require google/apiclient
For more information, see Using PHP on Google Cloud .
Python
pip install --upgrade google-api-python-client
For more information, see Setting Up a Python Development Environment .
Ruby
gem install google-api-client
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
Backup and DR Service Client Libraries
Refer to the following information on Backup and DR Service specific client libraries:
Cloud Client Libraries
C++ Client Libraries
C# Client Libraries
Go Client Libraries
Java Client Libraries
Node.js Client Libraries
PHP Client Libraries
Python Client Libraries
Ruby Client Libraries
Additional resources
C++
The following list contains links to more resources related to the Backup and DR Service
client library for C++:
API reference
Client libraries best practices
Issue tracker
Source code
C#
The following list contains links to more resources related to the Backup and DR Service
client library for C#:
API reference
Client libraries best practices
Issue tracker
Source code
Go
The following list contains links to more resources related to the Backup and DR Service
client library for Go:
API reference
Client libraries best practices
Issue tracker
Source code
Java
The following list contains links to more resources related to the Backup and DR Service
client library for Java:
API reference
Client libraries best practices
Issue tracker
Source code
Node.js
The following list contains links to more resources related to the Backup and DR Service
client library for Node.js:
API reference
Client libraries best practices
Issue tracker
Source code
PHP
The following list contains links to more resources related to the Backup and DR Service
client library for PHP:
API reference
Client libraries best practices
Issue tracker
Source code
Python
The following list contains links to more resources related to the Backup and DR Service
client library for Python:
API reference
Client libraries best practices
Issue tracker
Source code
Ruby
The following list contains links to more resources related to the Backup and DR Service
client library for Ruby:
API reference
Client libraries best practices
Issue tracker
Source code
C++,
Python,
Java,
Node.js,
Ruby,
Go,
PHP,
C#
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
