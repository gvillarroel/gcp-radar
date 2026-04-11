---
title: "Set up client libraries \_|\_ Memorystore for Memcached \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/memorystore/docs/memcached/libraries
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/memorystore/docs/memcached
source_metadata:
  url: https://docs.cloud.google.com/memorystore/docs/memcached/libraries
  title: "Set up client libraries \_|\_ Memorystore for Memcached \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Memorystore for Memcached is being deprecated and will be shut down on January 31, 2029. After February 1, 2027, you can't create Memorystore for Memcached instances in new projects unless these instances already exist in these projects. We recommend that you migrate your workloads to Memorystore for Valkey , which offers superior performance and features.
Learn more about the deprecation | Read the migration guide
Home
Documentation
Databases
Memorystore
Memorystore for Memcached
Reference
Send feedback
Set up client libraries
Stay organized with collections
Save and categorize content based on your preferences.
This page shows how to install client libraries for the Memorystore for Memcached API
so you can connect to the API with the language of your choice.
Installing the client library
C++
See Setting up a C++ development environment
for details about this client library's requirements and install dependencies.
C#
Install the Google.Cloud.Memcache.V1 package in Visual Studio. See the Google Cloud .NET Memcached Installation documentation for more details.
Go
go get cloud.google.com/go/memcache/apiv1
Java
If you are using Maven with BOM, add this to your pom.xml file
< dependencyManagement >
< dependencies >
< dependency >
< groupId>com . google . cloud < / groupId >
< artifactId>libraries - bom < / artifactId >
< version > 20.8.0 < / version >
< type>pom < / type >
< scope>import < / scope >
< / dependency >
< / dependencies >
< / dependencyManagement >
< dependencies >
< dependency >
< groupId>com . google . cloud < / groupId >
< artifactId>google - cloud - memcache < / artifactId >
< / dependency >
If you are using Maven without BOM, add this to your dependencies:
< dependency >
< groupId>com . google . cloud < / groupId >
< artifactId>google - cloud - memcache < / artifactId >
< version>0 .2.1 < / version >
< / dependency >
If you are using Gradle, add this to your dependencies:
compile ' com . google . cloud : google - cloud - memcache : 0.2.1 '
If you are using SBT, add this to your dependencies:
libraryDependencies += "com.google.cloud" % "google-cloud-memcache" % "0.2.1"
Node.js
npm install @google-cloud/memcache
Python
For more on setting up your Python development environment, refer to Python Development Environment Setup Guide .
Mac/Linux
pip install virtualenv
virtualenv < your - env >
source < your - env > / bin / activate
< your - env > / bin / pip install google - cloud - memcache
Windows
pip install virtualenv
virtualenv < your - env >
< your - env >\ Scripts \ activate
< your - env >\ Scripts \ pip . exe install google - cloud - memcache
Setting up authentication
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
Additional Resources
C++
API Reference Documentation
Source Code
GitHub Issue Tracker
Stack Overflow
C#
API Reference Documentation
Source Code
GitHub Issue Tracker
Stack Overflow
Go
API Reference Documentation
Source Code
GitHub Issue Tracker
Stack Overflow
Java
API Reference Documentation
Source Code
GitHub Issue Tracker
Stack Overflow
Node.js
API Reference Documentation
Source Code
GitHub Issue Tracker
Stack Overflow
Python
API Reference Documentation
Source Code
GitHub Issue Tracker
Stack Overflow
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
