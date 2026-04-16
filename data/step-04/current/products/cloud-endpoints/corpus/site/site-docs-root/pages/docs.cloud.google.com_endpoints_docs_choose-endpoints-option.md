---
title: "Choosing an Endpoints option \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/endpoints/docs/choose-endpoints-option
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/endpoints/docs
source_metadata:
  url: https://docs.cloud.google.com/endpoints/docs/choose-endpoints-option
  title: "Choosing an Endpoints option \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Endpoints
Send feedback
Choosing an Endpoints option
Stay organized with collections
Save and categorize content based on your preferences.
To have your API managed by Cloud Endpoints, you have three options depending
on where your API is hosted and the type of communications protocol your
API uses:
Cloud Endpoints for OpenAPI
Cloud Endpoints for gRPC
Cloud Endpoints Frameworks for the App Engine standard environment
This page describes the Endpoints options to help you decide
which one is right for you.
Choosing a computing option
Endpoints supports different Google Cloud
computing options that can host your API's backend code. Endpoints works with either the
Extensible Service Proxy (ESP) or the Extensible Service Proxy V2 (ESPv2) to provide API management. The following table
summarizes the supported computing options:
ESP for OpenAPI
ESP for gRPC
ESPv2 for OpenAPI
ESPv2 for gRPC
Endpoints Frameworks
App Engine
standard environment generation 1
Java 8 and Python 2.7 runtimes
App Engine
standard environment generation 2
App Engine
flexible environment
Cloud Run functions
Cloud Run
Knative serving
Compute Engine
GKE
Kubernetes
Other non-Google Cloud
For a comparison of the features provided by App Engine,
GKE, and Compute Engine, see
Choosing a computing option .
If you are thinking of using App Engine, you need to choose either the
standard or flexible environment. For a comparison of the two environments, see
Choosing an App Engine environment .
About the computing option limitations
Endpoints for OpenAPI and Endpoints for gRPC can use
ESP or ESPv2 as a proxy.
For non-serverless platforms, ESP or ESPv2 is deployed as a container in front of your
application or as a sidecar with your application. For serverless platforms, such as Cloud Run, Cloud Run functions, and App Engine, ESPv2 is deployed as a Cloud Run service as a remote proxy to manage your serverless platform applications.
After you deploy your API's
backend code, ESP or ESPv2 intercepts all requests and performs any
necessary checks (such as authentication) before forwarding the request to the
API backend. When the backend responds, ESP gathers and reports
telemetry using Service Infrastructure .
You can view metrics for your API and links to
Google Cloud Observability
logs and traces on the Endpoints Services page in the
Google Cloud console.
App Engine standard generation 1 environment limitations
Endpoints for the App Engine standard generation 1 environment historically used Endpoints Frameworks, which
only supports the Java 8 and Python 2.7 runtime environments .
Because the App Engine standard environment didn't support
multi-container deployments when Endpoints Frameworks was
under development, Endpoints Frameworks doesn't use
ESP. Instead, Endpoints Frameworks includes a built-in
API gateway
that provides API management features that are comparable to the
features that ESP provides for Endpoints for OpenAPI and
Endpoints for gRPC.
Note: Although Endpoints Frameworks does work with the Java 7 runtime
on App Engine standard environment, the
Java 7 runtime was deprecated
and is scheduled to be shutdown.
gRPC APIs aren't supported on App Engine or Cloud Run functions
gRPC
is a remote procedure call (RPC) framework that
can run on any environment. With gRPC, a client application can directly call
methods in a server application on a different machine as if it were a local
object. A core feature of gRPC is bi-directional streaming with
HTTP/2-based transport .
App Engine and Cloud Run functions don't support HTTP/2.
Supported programming languages
The
OpenAPI Specification
is a language-agnostic specification. You can implement your API in any
programming language.
gRPC provides the
protocol buffer compiler ,
protoc , for many major programming languages: C++, C#, Objective-C (for iOS),
Dart, Go, Java (including support for Android), Node.js, Python, and Ruby.
See the
gRPC FAQ
for the most up-to-date list.
Endpoints Frameworks supports only Java 8 and Python 2.7.
Describing your API
The Endpoints options provide different ways to describe your API.
Endpoints for OpenAPI
The
OpenAPI Initiative
is an industry-wide effort to standardize the description of REST APIs.
Endpoints supports APIs that are described using OpenAPI 2.0 and OpenAPI 3.x of
the OpenAPI Specification (formerly the
Swagger Specification ). To learn more, see Supported OpenAPI versions .
You describe the
surface
of your API in a JSON or YAML file (referred to as an OpenAPI document). You can
implement your API using any publicly available REST framework such as
Django
or
Jersey .
If you are unfamiliar with the OpenAPI Specification, see
OpenAPI overview .
For more information, see Endpoints for OpenAPI .
Endpoints for gRPC
With gRPC, you define the structure of the data that you want to serialize in a
proto file : this is an ordinary text file with a .proto extension. You also
define the
surface
of your API in proto files, with RPC method parameters and return types
specified as protocol buffer messages. If you are unfamiliar with gRPC, see
What is gRPC?
in the gRPC documentation.
For more information, see Endpoints for gRPC .
Endpoints Frameworks
Endpoints Frameworks is a
web framework
for the App Engine standard Python 2.7 and Java 8 runtime environments.
You add metadata (using annotations in Java or decorators in Python) to your
source code. The metadata describes the
surface
of the REST APIs for your application.
For more information, see Endpoints Frameworks .
What's next
See Endpoints features in action by doing the
Quickstart for Endpoints ,
which uses scripts to deploy a sample API to the App Engine flexible
environment.
Get familiar with the deployments steps by doing one of the tutorials for
the Endpoints option that you have chosen:
Endpoints for OpenAPI: Tutorials
Endpoints for gRPC: Tutorials
Endpoints Frameworks: Tutorials
Learn more about Endpoints and ESP:
Endpoints for OpenAPI: About Endpoints
Endpoints for gRPC: About Endpoints
Comparing Extensible Service Proxy and Endpoints Frameworks
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
