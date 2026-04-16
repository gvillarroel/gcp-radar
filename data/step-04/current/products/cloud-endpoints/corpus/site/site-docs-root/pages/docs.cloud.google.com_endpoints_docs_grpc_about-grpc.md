---
title: "Cloud Endpoints for gRPC \_|\_ Cloud Endpoints with gRPC \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/endpoints/docs/grpc/about-grpc
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/endpoints/docs
source_metadata:
  url: https://docs.cloud.google.com/endpoints/docs/grpc/about-grpc
  title: "Cloud Endpoints for gRPC \_|\_ Cloud Endpoints with gRPC \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Endpoints
gRPC
Send feedback
Cloud Endpoints for gRPC
Stay organized with collections
Save and categorize content based on your preferences.
gRPC is a high performance, open-source universal RPC
framework, developed by Google. In gRPC, a client application can directly call
methods on a server application on a different machine as if it was a local
object, making it easier to create distributed applications and services.
API management
Endpoints works with either the
Extensible Service Proxy (ESP) or the Extensible Service Proxy V2 (ESPv2) to provide API management.
With Endpoints for gRPC, you can use the API management
capabilities of Endpoints to add an API console, monitoring,
hosting, tracing, authentication, and more to your gRPC services. In addition,
once you specify special mapping rules, ESP and ESPv2 translate RESTful JSON over HTTP
into gRPC requests. This means that you can deploy a gRPC server managed by
Endpoints and call its API using a gRPC or JSON/HTTP client,
giving you much more flexibility and ease of integration with other systems.
You can create gRPC services for Endpoints in any
gRPC-supported language. You can find out much more about gRPC,
including quickstarts and tutorials for creating servers and clients, on the
gRPC site .
Supported compute platforms
ESP and ESPv2 are Open Source projects and are available to you in the following ways:
A container in Artifact Registry.
See the ESP release notes for the
current ESP Docker image.
See the ESPv2 release notes for the
current ESPv2 Docker image.
Source code in GitHub.
See the ESP README for
details on building ESP.
See the ESPv2 README for
details on building ESPv2.
You can run the ESP container on the following:
Compute Engine with Docker
Kubernetes, including Google Kubernetes Engine
A Linux or macOS computer or another cloud provider
You can run the ESPv2 container on the following:
Cloud Run
Knative serving
GKE
Compute Engine
Kubernetes
See About Cloud Endpoints for more.
See Deploying the API Backend for
information on deploying your API and Extensible Service Proxy on Google Cloud compute platforms.
Service definition and configuration
gRPC is based around the idea of defining a service , specifying the methods
that can be called remotely with their parameters and return types. By default,
gRPC uses protocol buffers
as the Interface Definition Language (IDL) for describing both the service
interface and the structure of the payload messages.
// The greeting service definition.
service Greeter {
// Sends a greeting
rpc SayHello ( HelloRequest ) returns ( HelloReply ) {}
}
// The request message containing the user's name.
message HelloRequest {
string name = 1 ;
}
// The response message containing the greetings
message HelloReply {
string message = 1 ;
}
To use gRPC with Endpoints, you must provide a
service configuration
along with the service definition. This configures the runtime
behavior of your service, including authentication, the API(s) included in the
service, mappings from HTTP requests to gRPC methods, and special Cloud
Endpoints settings.
Transcoding
Endpoints provides protocol translation for your gRPC services
allowing clients to use HTTP/JSON to communicate with a gRPC service through the ESP or ESPv2.
The most common use case is allowing browser clients to talk to gRPC servers
without special support from gRPC client libraries. Endpoints
provides a mechanism for mapping HTTP requests to gRPC methods as part of
service configuration .
You can find out more about this in Transcoding HTTP/JSON to gRPC .
Limitations
The following gRPC features are not yet supported in Endpoints:
Payload compression
Any IDL other than protocol buffers
In addition, Endpoints only supports gRPC services for GKE, Compute Engine, and Cloud Run (Beta). Endpoints does not support gRPC services for App Engine environments.
What's next?
Follow one of our tutorials to get a simple gRPC service up and running with Cloud Endpoints in your environment of choice
Find out how to configure a gRPC service for Cloud Endpoints
Explore samples. The getting-started-grpc sample is available on GitHub in the following languages:
Java
Python
Ruby
Go
Node.js
The Bookstore sample is available in the following languages:
Python
Java
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
