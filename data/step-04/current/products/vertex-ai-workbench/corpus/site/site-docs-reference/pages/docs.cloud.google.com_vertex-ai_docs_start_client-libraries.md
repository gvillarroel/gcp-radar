---
title: "Install the Vertex AI client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/docs/start/client-libraries
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/docs/workbench/reference
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/docs/start/client-libraries
  title: "Install the Vertex AI client libraries \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI
Reference
Send feedback
Install the Vertex AI client libraries
Stay organized with collections
Save and categorize content based on your preferences.
Client libraries provide an optimized developer experience for calling the
Vertex AI API. The client libraries use each supported language's natural
conventions and reduce boilerplate code that you have to write. The following
guide explains how to install the libraries and set up authentication for
using them in a local development environment.
Before you begin
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Enable the Vertex AI API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Enable the Vertex AI API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
If you're using a local shell, then create local authentication credentials for your user
account:
gcloud auth application-default login
You don't need to do this if you're using Cloud Shell.
If an authentication error is returned, and you are using an external identity provider
(IdP), confirm that you have
signed in to the gcloud CLI with your federated identity .
Client libraries
Vertex AI provides client libraries for the following languages.
Select the language that you want to use.
C#
Run the following command to add the Google.Cloud.AIPlatform.V1 package
reference to your project file:
dotnet add package Google.Cloud.AIPlatform.V1
Try code samples
To view or get individual code samples, go to the
dotnet-aiplatform
GitHub repository.
Client library documentation
For more information, view the
Vertex AI .NET client library documentation .
Java
If you are using Maven, add the following to your dependencies:
< dependency >
< groupId>com . google . cloud < / groupId >
< artifactId>google - cloud - aiplatform < / artifactId >
< version>3 .35.0 < / version >
< / dependency >
If you are using Gradle ,
add the following to your dependencies:
compile 'com.google.cloud:google-cloud-aiplatform:3.35.0'
If you are using sbt ,
add the following to your dependencies:
libraryDependencies += "com.google.cloud" % "google-cloud-aiplatform" % "3.35.0"
Try code samples
To view or get individual code samples, go to the
java-aiplatform
GitHub repository.
Client library documentation
For more information, view the
Vertex AI client library for Java
documentation .
Node.js
Before installing the library, prepare your environment for Node.js
development .
Run the following command in your environment to install the client library:
npm install @google-cloud/aiplatform
Client library documentation
For more information, view the Vertex AI client library for
Node.js
documentation .
Python
The Vertex AI Python client library is installed when you install the
Vertex AI SDK for Python.
For more information, see
Install the Vertex AI SDK for Python .
Go
Before installing the library,
prepare your environment for Go development .
Review available packages
Review the available Vertex AI API Go packages to determine which
package best meets your project's needs:
Package
cloud.google.com/go/vertexai
( recommended )
vertexai is a human authored package that provides access to common
capabilities and features.
This package is recommended as the starting point for most developers
building with the Vertex AI API. To access capabilities and
features not yet covered by this package, use the auto-generated
aiplatform instead.
Package
cloud.google.com/go/aiplatform
aiplatform is an auto-generated package.
This package is intended for projects that require access to
Vertex AI API capabilities and features not yet provided by the
human authored vertexai package.
Installation
Package
cloud.google.com/go/vertexai
( recommended )
Run the following command to install this package in your environment:
go get cloud.google.com/go/vertexai
Package
cloud.google.com/go/aiplatform
Run the following command to install this package in your environment:
go get cloud.google.com/go/aiplatform
Samples
Package
cloud.google.com/go/vertexai
( recommended )
Samples for using this package are available, in the golang-samples
GitHub repository in the top-level vertexai directory:
github.com/GoogleCloudPlatform/golang-samples
>
vertexai
Package
cloud.google.com/go/aiplatform
Samples for using this package are available, in the golang-samples
GitHub repository in the top-level aiplatform directory:
github.com/GoogleCloudPlatform/golang-samples
>
aiplatform
Client library documentation
For more information about the library, see the Vertex AI
client library for Go documentation:
Package
cloud.google.com/go/vertexai
( recommended )
Vertex AI cloud.google.com/go/vertexai
API reference
Package
cloud.google.com/go/aiplatform
Vertex AI cloud.google.com/go/aiplatform v1
API reference
Vertex AI cloud.google.com/go/aiplatform v1beta1
API reference
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
