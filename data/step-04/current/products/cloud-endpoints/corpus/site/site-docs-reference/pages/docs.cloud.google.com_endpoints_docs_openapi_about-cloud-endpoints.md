---
title: "About Cloud Endpoints \_|\_ Cloud Endpoints with OpenAPI \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/endpoints/docs/openapi/about-cloud-endpoints
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/endpoints/docs/openapi/openapi-overview
source_metadata:
  url: https://docs.cloud.google.com/endpoints/docs/openapi/about-cloud-endpoints
  title: "About Cloud Endpoints \_|\_ Cloud Endpoints with OpenAPI \_|\_ Google Cloud\
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
OpenAPI
Send feedback
About Cloud Endpoints
Stay organized with collections
Save and categorize content based on your preferences.
OpenAPI
| gRPC
Endpoints is a distributed API management system. It provides an
API console, hosting, logging, monitoring, and other features to help you
create, share, maintain, and secure your APIs.
This page provides an overview of
Cloud Endpoints for OpenAPI .
For information on other types of API frameworks supported by
Endpoints, see
All Endpoints docs .
Endpoints is available for use with the distributed Extensible Service Proxy (ESP) or the Extensible Service Proxy V2 (ESPv2). Each proxy provides support to the platforms described below:
App Engine flexible (ESP only)
Google Kubernetes Engine (ESP or ESPv2)
Compute Engine (ESP or ESPv2)
Kubernetes (ESP or ESPv2)
App Engine standard (ESPv2 only)
Cloud Run functions (ESPv2 only)
Cloud Run (ESPv2 only)
Knative serving (ESPv2 only)
Warning: ESP is maintained for preexisting users.
New users are encouraged to follow the tutorials for ESPv2.
Both products are generally available and production-ready.
Endpoints with ESP
Endpoints uses the distributed Extensible Service Proxy (ESP)
to provide low latency and high performance for serving even the most demanding
APIs. ESP is a service proxy based on
NGINX , so you can be confident that it
scales as needed to handle simultaneous requests to your API. ESP
runs in its own Docker container for better isolation and scalability and is
distributed in the Container Registry. You can use it
with:
App Engine flexible environment
Compute Engine
Google Kubernetes Engine
Kubernetes
Endpoints with ESPv2
ESPv2 is an Envoy -based
high-performance, scalable proxy that runs in front of an OpenAPI or gRPC API backend.
ESPv2 supports version 2 of the
OpenAPI Specification and gRPC Specifications. You can use it
with:
App Engine standard environment
Compute Engine
Google Kubernetes Engine
Kubernetes
Cloud Run
Knative serving
Cloud Run functions
Endpoints API management features
Whether you use Endpoints with ESP or ESPv2, it provides a number of significant API management features to enable you to develop, monitor, and control access to your APIs.
Logs and metrics
Endpoints uses
Service Infrastructure
to manage APIs and report logs and metrics. Most
Google Cloud APIs
use this same infrastructure. You can manage and monitor your APIs on the
Endpoints Services page in the Google Cloud console .
API hosting
Endpoints is optimized for the Docker container environment. You
can host your API anywhere Docker is supported so long as it has internet access to
Google Cloud.
Developing a REST API with Endpoints for OpenAPI
Endpoints is language independent. You build your API in any
language and REST framework that supports API description using an
OpenAPI configuration file .
To use Endpoints for OpenAPI, you:
Configure Endpoints : You describe the API
surface
and configure Endpoints features, such as API keys or
authentication rules, in an OpenAPI configuration file.
Deploy the Endpoints configuration : After you define your
API in an OpenAPI configuration file, you use the Google Cloud CLI to deploy it
to Service Management, which Endpoints uses to manage your
API. Now Endpoints knows all about your API and how to secure
it.
Deploy the API Backend : You deploy ESP or ESPv2 and your API
backend to a supported Google Cloud backend, such as Compute Engine.
ESP coordinates with Endpoints backend
services to secure and monitor your API at runtime.
Controlling API access
Endpoints lets you configure your API to require an API key for
any call and validates the API key. You can also use the Google Cloud console to
share your API with other developers so they
can enable your API and generate API keys to call it.
Authenticating API users
For most API calls, there is a user on the other end of each call. While
API keys
indicate which app is making a call to your API, the
authentication
process determines which user is using that app.
Note that your API server still needs to decide what the authenticated user
can do with your API. For more information, see the
Google Cloud Auth guide .
What's next
Get familiar with the deployment steps and see Endpoints
features in action by doing the
Quickstart for Endpoints ,
which uses scripts to deploy a sample API to a App Engine flexible
backend.
Learn more about using Endpoints by walking through one of the
Tutorials .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
