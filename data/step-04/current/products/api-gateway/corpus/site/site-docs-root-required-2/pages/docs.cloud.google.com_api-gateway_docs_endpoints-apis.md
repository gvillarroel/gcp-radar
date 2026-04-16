---
title: "Deploy Cloud Endpoints APIs on API Gateway \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/api-gateway/docs/endpoints-apis
knowledge_key: corpus
source_id: site-docs-root-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/api-gateway/docs/about-api-gateway
source_metadata:
  url: https://docs.cloud.google.com/api-gateway/docs/endpoints-apis
  title: "Deploy Cloud Endpoints APIs on API Gateway \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
API Gateway
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Deploy Cloud Endpoints APIs on API Gateway
Cloud Endpoints is an
API management system that helps you secure, monitor, analyze, and set quotas
on your APIs.
Endpoints uses the Extensible Service Proxy (ESP) or Extensible Service Proxy V2 (ESPv2) to host your APIs.
When using Endpoints, you have three options for how you define your API:
Cloud Endpoints for OpenAPI
Cloud Endpoints for gRPC
Cloud Endpoints Frameworks for the App Engine standard environment
Develop APIs with API Gateway
Both Endpoints and API Gateway supports API that are described using the OpenAPI specification, OpenAPI 2.0 or OpenAPI 3.x . If you have used OpenAPI to define your Endpoints APIs, this means that you can also deploy your Endpoints APIs on API Gateway.
Note: API Gateway also supports Cloud Run APIs described with gRPC service definitions and configurations.
Deploy Endpoints OpenAPI specs on API Gateway
API Gateway supports the same OpenAPI spec definition format and options
as supported by Cloud Endpoints for OpenAPI .
That means you can use the same security, quota, and other definitions from your
Endpoints OpenAPI specs to define an API in API Gateway.
The only difference between Endpoints and API Gateway is how they process the host property in the OpenAPI spec definition:
In Endpoints , set the host property to the hostname portion of the URL created when you deployed ESP or ESPv2, where ESP or ESPv2 is the service used to host your Endpoints API.
In API Gateway , omit the host
or set it to the DNS name of the deployed API. API providers often set it to the DNS name
when sharing the OpenAPI spec with their API consumers. However, API Gateway does not enforce the value of the host
property.
For example, the following is a portion of an OpenAPI definition used by Endpoints
to define an API to access a backend service deployed on Cloud Run functions:
OpenAPI 2.0
swagger : '2.0'
info :
title : Cloud Endpoints + GCF
description : Sample API on Cloud Endpoints with a Google Cloud Functions backend
version : 1.0.0
host : HOST
schemes :
- https
...
OpenAPI 3.x
openapi : 3.0.4
info :
title : Cloud Endpoints + GCF
description : Sample API on Cloud Endpoints with a Google Cloud Functions backend
version : 1.0.0
servers :
- url : https:// HOST
x-google-endpoint : {}
...
For more on creating the OpenAPI spec for your API definition, see OpenAPI overview .
What's next
API Gateway Deployment Model
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
