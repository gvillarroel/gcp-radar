---
title: "Service APIs Overview \_|\_ Cloud Key Management Service \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/kms/docs/reference/service-apis-overview
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/reference/service-apis-overview
  title: "Service APIs Overview \_|\_ Cloud Key Management Service \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Cloud KMS
Reference
Send feedback
Service APIs Overview
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Key Management Service has both traditional REST/HTTP and
gRPC interfaces. If you don't want to use our
client libraries to access the
Cloud Key Management Service API, you have the option of writing your own client libraries that
use its REST/HTTP or gRPC API surface. We recommend this approach only if your
programming language or other needs are not met by the provided client
libraries.
gRPC API
You can generate your own gRPC client libraries in any gRPC-supported language
for the Cloud Key Management Service API from its .proto service definition using these resources:
Using gRPC with Cloud KMS
Cloud KMS service definition
gRPC documentation : Everything you
need to generate and use your own gRPC client code.
RPC API Reference : Language-independent overview
of the RPC surface.
REST/HTTP API
There are a number of options for interacting with a service's REST interface.
To create your own clients, use the following resources:
REST API Reference
Guidelines for working with Google HTTP APIs
API Discovery Service :
Exposes machine readable metadata about the REST/HTTP API surface, useful for
creating client libraries, tools, and plugins.
Directory of client samples
built with REST/HTTP APIs and the Google API Discovery Service.
Service Endpoints
Cloud KMS has global and locational service endpoints. The global
REST/HTTP endpoint is https://cloudkms.googleapis.com and the
global gRPC endpoint is cloudkms.googleapis.com . The global
endpoint routes requests to a locational service in the
location specified by the resource name.
The locational REST/HTTP endpoints are
https:// <region> -cloudkms.googleapis.com and the
locational gRPC endpoints are
<region> -cloudkms.googleapis.com , substituting
<region> for any of the supported regional,
dual-regional, or multi-regional
Cloud KMS locations . These endpoints are isolated by
location, meaning each endpoint routes requests to a locational service in the
location specified by the endpoint name. If the location specified by the
resource name doesn't match the location specified by the endpoint, the request
will fail.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
