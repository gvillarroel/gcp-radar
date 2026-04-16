---
title: "Function: gke.request \_|\_ Workflows \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/workflows/docs/reference/connectors/gke/request
knowledge_key: corpus
source_id: site-docs-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/workflows/docs/reference/syntax/expressions
source_metadata:
  url: https://docs.cloud.google.com/workflows/docs/reference/connectors/gke/request
  title: "Function: gke.request \_|\_ Workflows \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Workflows
Reference
Send feedback
Function: gke.request
Stay organized with collections
Save and categorize content based on your preferences.
Send an HTTP request to a GKE cluster's control plane.
Arguments
Arguments
cluster_id
string
The ID of the cluster.
path
string
Path to the API endpoint (for example, /api/v1/namespaces/default/pods ). For more information, see Kubernetes API reference .
method
string
The HTTP request method. One of: GET , HEAD , POST , PUT , DELETE , OPTIONS , PATCH .
location
string
The location that the cluster is hosted in.
project
string
The project that the cluster is hosted in. Default value is this workflow's project.
timeout
float
The request timeout, in seconds (default: 300.0 ). If the request takes longer than the timeout, a TimeoutError is raised. The maximum allowed timeout is 1800 seconds.
body
The request body. If a Content-Type header is not specified and if the body value is bytes, the header is set to Content-Type: application/octet-stream ; otherwise, the body is JSON-encoded and the header is set to Content-type: application/json; charset=utf-8 .
headers
The HTTP request headers. If present, must be a map of simple types. If a Content-Type header is specified, the request body is encoded as prescribed. For example, it might be JSON or URL-encoded.
query
Optional query parameters. If present, must be a map of simple types that will be URL-encoded and appended to the URL.
Returns
The HTTP response as a map with body , code (status code), and headers
attributes.
Raised exceptions
Exceptions
ConnectionError
In case of a network problem (DNS failure, refused connection, etc.).
TimeoutError
When the specified timeout is reached before the response is received.
HttpError
If the response status is >= 400.
ValueError
If timeout is > 1800, or if the cluster does not have status RUNNING .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
