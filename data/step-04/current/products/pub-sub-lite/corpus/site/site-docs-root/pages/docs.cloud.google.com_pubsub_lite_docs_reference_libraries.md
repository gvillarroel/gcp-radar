---
title: Google Cloud Documentation
url: https://docs.cloud.google.com/pubsub/lite/docs/reference/libraries
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/pubsub/lite/docs
source_metadata:
  url: https://docs.cloud.google.com/pubsub/lite/docs/reference/libraries
  title: Google Cloud Documentation
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Stay organized with collections
Save and categorize content based on your preferences.
Note: Pub/Sub Lite is deprecated. Effective June 30, 2026,
Pub/Sub Lite will be turned down.
Current customers: Pub/Sub Lite remains functional until June 30, 2026.
If you have not used Pub/Sub Lite within the 90-day period preceding July 15, 2025
(April 15, 2025 - July 15, 2025), you won't be able to access Pub/Sub Lite starting on
July 15, 2025.
New customers: Pub/Sub Lite is no longer available for new customers after September 24, 2024.
You can migrate your Pub/Sub Lite service to
Google Cloud Managed Service for Apache Kafka
or Pub/Sub .
Pub/Sub Lite client libraries
This page shows how to get started with the Cloud Client Libraries for the
Pub/Sub Lite API. Client libraries make it easier to access
Google Cloud APIs from a supported language. Although you can use
Google Cloud APIs directly by making raw requests to the server, client
libraries provide simplifications that significantly reduce the amount of code
you need to write.
Read more about the Cloud Client Libraries
and the older Google API Client Libraries in
Client libraries explained .
Install the client library
Go
go get cloud.google.com/go/pubsublite
For more information, see Setting Up a Go Development Environment .
Java
If you are using Maven , add
the following to your pom.xml file. For more information about
BOMs, see The Google Cloud Platform Libraries BOM .
< dependency >
< groupId>com . google . cloud < / groupId >
< artifactId>google - cloud - pubsublite < / artifactId >
< version>1 .15.6 < / version >
< / dependency >
< dependency >
< groupId>com . google . cloud < / groupId >
< artifactId>google - cloud - pubsub < / artifactId >
< version>1 .150.0 < / version >
< / dependency >
If you are using Gradle ,
add the following to your dependencies:
implementation ' com . google . cloud : google - cloud - pubsublite : 1.16.3 '
If you are using sbt , add
the following to your dependencies:
libraryDependencies += "com.google.cloud" % "google-cloud-pubsublite" % "1.16.3"
If you're using Visual Studio Code or IntelliJ, you can add client libraries to your
project using the following IDE plugins:
Cloud Code for VS Code
Cloud Code for IntelliJ
The plugins provide additional functionality, such as key management for service accounts. Refer
to each plugin's documentation for details.
Note: Cloud Java client libraries do not currently support Android.
For more information, see Setting Up a Java Development Environment .
Python
pip install --upgrade google-cloud-pubsublite
For more information, see Setting Up a Python Development Environment .
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
Install the Google Cloud CLI, and then
sign in to the gcloud CLI with your federated identity .
After signing in,
initialize the Google Cloud CLI by running the following command:
gcloud init
Create local authentication credentials for your user account:
gcloud auth application-default login
If an authentication error is returned, and you are using an external identity provider
(IdP), confirm that you have
signed in to the gcloud CLI with your federated identity .
A sign-in screen appears. After you sign in, your credentials are stored in the
local credential file used by ADC .
Additional resources
Go
API Reference Documentation
Source Code
GitHub Issue Tracker
Stack Overflow
Java
The following list contains links to more resources related to the
client library for Java:
API reference
Client libraries best practices
Issue tracker
google-cloud-pubsublite on Stack Overflow
Source code
Python
API Reference Documentation
Source Code
GitHub Issue Tracker
Stack Overflow
Additional Pub/Sub Lite API libraries
Language
Library
Java
java-pubsublite-kafka
Java
java-pubsublite-spark
Java
java-pubsub-group-kafka-connector
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-03 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-03 UTC."],[],[]]
