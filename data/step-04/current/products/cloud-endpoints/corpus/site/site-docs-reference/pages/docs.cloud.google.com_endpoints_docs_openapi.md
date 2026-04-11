---
title: "Cloud Endpoints for OpenAPI \_|\_ Cloud Endpoints with OpenAPI \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/endpoints/docs/openapi
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/endpoints/docs/openapi/openapi-overview
source_metadata:
  url: https://docs.cloud.google.com/endpoints/docs/openapi
  title: "Cloud Endpoints for OpenAPI \_|\_ Cloud Endpoints with OpenAPI \_|\_ Google\
    \ Cloud Documentation"
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
Cloud Endpoints for OpenAPI
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Endpoints is an API management system that helps you secure, monitor,
analyze, and set quotas on your APIs using the same infrastructure Google uses
for its own APIs. Endpoints works with the Extensible Service
Proxy (ESP) and the Extensible Service Proxy V2 (ESPv2) to
provide API management. You can find out more about Endpoints, ESP, and ESPv2 in About
Endpoints .
Endpoints supports APIs that are described using OpenAPI 2.0 and OpenAPI 3.x of
the OpenAPI Specification (formerly the
Swagger Specification
(formerly known as the Swagger spec)—the industry standard for defining REST
APIs.
If you are unfamiliar with the OpenAPI Specification, see
OpenAPI Overview . To learn more about supported versions, see Supported OpenAPI versions .
This documentation set shows you how to use Endpoints with OpenAPI. For
documentation on the other Endpoints options, see
All Endpoints Docs .
To get started, we recommend the following path through the documentation:
To see Endpoints features in action, do the Quickstart for
Cloud Endpoints , which uses scripts to
deploy a sample API to the App Engine flexible environment.
Now you need to decide which compute platform you want to use for your API.
To help you make that decision,
see Choosing a Computing Option ,
and see the Supported compute platforms
section below.
After you have decided on the backend for your API, walk through a
tutorial for your preferred
compute platform.
Supported compute platforms
Endpoints for OpenAPI depends on either ESP or ESPv2 for API management. Both ESP and ESPv2 are Open Source projects and are available to you in the following ways:
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
App Engine flexible environment
Compute Engine
Kubernetes, including Google Kubernetes Engine
A Linux or macOS computer or another platform
You can run the ESPv2 container on the following:
App Engine
Cloud Run functions
Cloud Run
Knative serving
GKE
Compute Engine
Kubernetes
See About Cloud Endpoints for more.
On the App Engine flexible environment , ESP is
automatically deployed for you when you add a few lines to your
app.yaml file. For more
information, see Deploying your API and
ESP . ESPv2 does not support App Engine flexible environment.
For the App Engine standard generation 1 environment ,
you must use Endpoints
Frameworks . If you
instead deploy the container to one of the compute options above, you can proxy
to either generation of App Engine standard runtime.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
