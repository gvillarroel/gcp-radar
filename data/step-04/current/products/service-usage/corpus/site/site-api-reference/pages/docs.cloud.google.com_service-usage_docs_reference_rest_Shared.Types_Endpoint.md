---
title: "Endpoint \_|\_ Service Usage \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-usage/docs/reference/rest/Shared.Types/Endpoint
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/service-usage/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/service-usage/docs/reference/rest/Shared.Types/Endpoint
  title: "Endpoint \_|\_ Service Usage \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Service Usage
Reference
Send feedback
Endpoint
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Endpoint describes a network address of a service that serves a set of APIs. It is commonly known as a service endpoint. A service may expose any number of service endpoints, and all service endpoints share the same service definition, such as quota limits and monitoring metrics.
Example:
type: google.api.Service
name: library-example.googleapis.com
endpoints:
# Declares network address `https://library-example.googleapis.com`
# for service `library-example.googleapis.com`. The `https` scheme
# is implicit for all service endpoints. Other schemes may be
# supported in the future.
- name: library-example.googleapis.com
allowCors: false
- name: content-staging-library-example.googleapis.com
# Allows HTTP OPTIONS calls to be passed to the API frontend, for it
# to decide whether the subsequent cross-origin request is allowed
# to proceed.
allowCors: true
JSON representation
{
"name" : string ,
"aliases" : [
string
] ,
"target" : string ,
"allowCors" : boolean
}
Fields
name
string
The canonical name of this endpoint.
aliases[]
string
Aliases for this endpoint, these will be served by the same UrlMap as the parent endpoint, and will be provisioned in the GCP stack for the Regional Endpoints.
target
string
The specification of an Internet routable address of API frontend that will handle requests to this API Endpoint . It should be either a valid IPv4 address or a fully-qualified domain name. For example, "8.8.8.8" or "myservice.appspot.com".
allowCors
boolean
Allowing CORS , aka cross-domain traffic, would allow the backends served from this endpoint to receive and respond to HTTP OPTIONS requests. The response will be used by the browser to determine whether the subsequent cross-origin request is allowed to proceed.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-11-11 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-11-11 UTC."],[],[]]
