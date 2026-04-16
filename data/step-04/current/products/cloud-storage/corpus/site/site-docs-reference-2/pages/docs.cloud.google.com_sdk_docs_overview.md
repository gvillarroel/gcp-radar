---
title: "Google Cloud SDK overview \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sdk/docs/overview
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/sdk/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/sdk/docs/overview
  title: "Google Cloud SDK overview \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Google Cloud SDK
Guides
Send feedback
Google Cloud SDK overview
Stay organized with collections
Save and categorize content based on your preferences.
Google Cloud SDK is a suite of libraries and tools for interacting with
Google Cloud services. It includes command-line tools,
language-specific client libraries, IDE extensions, and emulators that help you
manage resources and automate tasks on Google Cloud.
With Google Cloud SDK, you can:
Manage Google Cloud resources: Use the
Google Cloud CLI to control virtual machines, applications,
databases, and other services from the command line.
Integrate with Google Cloud APIs: Build applications using
Cloud Client Libraries available in
languages like Java , C++ ,
Python , Node.js , Ruby ,
Go , .NET , PHP , and
Rust .
Develop and test locally: Accelerate development cycles with local
emulators for services including Pub/Sub ,
Spanner , Bigtable , and
Firestore in Datastore mode (Datastore) .
Work within your IDE: Use Cloud Code extensions to
interact with Google Cloud services directly from Visual Studio Code
and IntelliJ.
Core components
The gcloud CLI
The gcloud CLI is the primary command-line tool for
Google Cloud. Use it to perform administrative tasks from your
terminal.
For more information, see the gcloud CLI overview .
Cloud Client Libraries for API access
To programmatically interact with Google Cloud services from your
applications, use the Cloud Client Libraries .
These libraries provide idiomatic access to Google Cloud APIs,
simplifying integration and reducing boilerplate code.
Cloud Client Libraries are available for the following languages:
C++
.NET
Go
Java
Node.js
PHP
Python
Ruby
Rust
SAP developers can also use the
ABAP SDK for Google Cloud ,
which provides a comprehensive set of client libraries for ABAP environments.
For a complete list and overview of available APIs, see
Google Cloud APIs .
Development and testing tools
IDE integration
Google Cloud SDK provides IDE extensions that bring Google Cloud services
directly into your development workflow. With these extensions, you can build,
deploy, and debug applications without leaving your favorite editor.
Cloud Code extensions are available for:
Visual Studio Code
IntelliJ
For more information, see the Cloud Code documentation .
Emulators
Emulators let you develop and test your applications by simulating the
behavior of Google Cloud services. Use emulators to help you save
costs, avoid impacting production services, and iterate faster during
development.
The Google Cloud SDK provides emulators for several services, including:
Bigtable :
Test applications using a local NoSQL wide-column database.
Datastore :
Develop against a local NoSQL document database.
Firestore : Build and test mobile,
web, and server applications with a local document database.
Pub/Sub : Validate asynchronous
messaging workflows locally.
Spanner : Test applications requiring
a globally-distributed relational database locally.
These emulators provide a high-fidelity environment for debugging issues and
verifying your application's behavior before deployment.
For more details on using these tools, see
Using Google Cloud SDK emulators .
Work with other frameworks and tools
The Google Cloud SDK is designed to work with a wide range of popular
frameworks and tools, helping you streamline application development and
deployment on Google Cloud. While not part of the core SDK components,
these tools often use the gcloud CLI or Cloud Client Libraries
for seamless interaction with Google Cloud services.
Examples include:
Spring Framework : Utilize Google Cloud
integrations for Spring Boot applications.
Kubernetes : Manage deployments on
Google Kubernetes Engine (GKE) using kubectl , often installed alongside the
gcloud CLI.
Google Cloud's daptic to Prometheus :
Collect and analyze metrics from your applications.
Terraform : Provision and manage your
Google Cloud infrastructure as code using the Google Cloud provider.
What's next
Install the gcloud CLI and learn useful
commands with the gcloud CLI cheat sheet .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
