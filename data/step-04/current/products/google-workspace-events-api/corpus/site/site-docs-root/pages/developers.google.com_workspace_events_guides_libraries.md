---
title: "Install client libraries \_|\_ Google Workspace \_|\_ Google for Developers"
url: https://developers.google.com/workspace/events/guides/libraries
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/workspace/events
source_metadata:
  url: https://developers.google.com/workspace/events/guides/libraries
  title: "Install client libraries \_|\_ Google Workspace \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Guides
Send feedback
Install client libraries
Stay organized with collections
Save and categorize content based on your preferences.
The Google Workspace Events API is built on HTTP and JSON, so any standard HTTP client
can send requests to it and parse the responses. However, the Google API client
libraries provide better language integration, improved security, and support
for making calls that require user authorization. The client libraries are
available in a number of programming languages; by using them you can avoid the
need to manually set up HTTP requests and parse the responses.
To get started, select the programming language that you are using for
development to call the Google Workspace Events API:
Go
Get the latest Google Workspace Events API client library for Go . Read the
client library's developer's guide .
Java
This page contains information about getting started with the Google Workspace Events API by using
the Google API Client Library for Java. For more information, see the following documentation:
Browse the Javadoc reference for the Google Workspace Events API .
Read the Developer's Guide for the Google API Client Library for Java .
Add the client library to your project
Select your build environment (Maven or Gradle) from the following tabs:
Maven
Add the following to your pom.xml file:
See all versions available on the Maven Central Repository .
Gradle
Add the following to your build.gradle file:
See all versions available on the Maven Central Repository .
JavaScript
Read the client library's developer's guide .
.NET
This page contains information about getting started with the Google Workspace Events API by using
the Google API Client Library for .NET. For more information, see the following documentation:
Browse the .NET reference documentation for the Google Workspace Events API .
Read the Developer's guide for the Google API Client Library for .NET .
Downloading the library
Install the NuGet package:
Google.Apis .
Node.js
Get the latest Google Workspace Events API client library for Node.js . Read the
client library's developer's guide .
Obj-C
Get the latest Google Workspace Events API client library for Objective-C . Read the
client library's developer's guide .
PHP
Get the latest Google Workspace Events API client library for PHP . Read the
client library's developer's guide .
Python
This page contains information about getting started with the Google Workspace Events API by using
the Google API Client Library for Python (v1/v2). For more information, see the following documentation:
Browse the PyDoc reference for the Google Workspace Events API .
Read the Developer's guide for the Google API Client Library for Python (v1/v2) .
System requirements
Operating systems:
Linux
macOS X
Windows
The v1 client library requires Python 2.7 or higher. The v2 client library requires 3.7 or higher.
Install the client library
You can either use a package manager or manually download and install the Python client library:
Managed install
Use pip or setuptools to manage your installation. You might
need to run sudo first.
pip (preferred):
pip install --upgrade google-api-python-client
Setuptools :
easy_install --upgrade google-api-python-client
Manual install
Download the latest client
library for Python .
Unpack the code.
Install:
python setup.py install
App Engine
Because the Python client libraries aren't installed in the
App Engine Python runtime environment ,
you must
copy them into your application just like third-party libraries.
Ruby
This page contains information about getting started with the Google Workspace Events API by using
the Google API Client Library for Ruby. For more information, see the following documentation:
Read the Get started guide for the Google API Client Library for Ruby .
Install the google-api-client gem
Depending on your system, you might need to prepend these commands with sudo .
If you haven't installed the Google API Client Library for Ruby before, install by using RubyGems :
gem install google-api-client
If you already have the gem installed, update to the latest version:
gem update -y google-api-client
Get started with the Google API Client Library for Ruby
To learn how to make your first request, see the
Get started guide .
Access the discovery document
Discovery documents are available for specific versions of most API. Each
discovery document describes the surface of the API, how to access the API, and
how API requests and responses are structured. The information provided by the
discovery document includes API-level properties such as an API description,
resource schemas, authentication scopes, and methods.
View the
discovery document for the Google Workspace Events API .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
