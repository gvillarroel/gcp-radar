---
title: "Function: gke.create_job \_|\_ Workflows \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/workflows/docs/reference/connectors/gke/create_job
knowledge_key: corpus
source_id: site-api-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/workflows/docs/reference/googleapis
source_metadata:
  url: https://docs.cloud.google.com/workflows/docs/reference/connectors/gke/create_job
  title: "Function: gke.create_job \_|\_ Workflows \_|\_ Google Cloud Documentation"
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
Function: gke.create_job
Stay organized with collections
Save and categorize content based on your preferences.
Run a Kubernetes Job in a GKE cluster.
Arguments
Arguments
cluster_id
string
The ID of the cluster.
job
map
A Kubernetes Job definition.
location
string
The location that the cluster is hosted in.
namespace
string
The namespace to run the job in (default: default ).
project
string
The project that the cluster is hosted in. Default value is this workflow's project.
query
Optional query parameters. If present, must be a map of simple types that will be URL-encoded and appended to the URL. For more information, see Kubernetes API reference .
timeout
float
The request timeout, in seconds (default: 300.0 ). If the request takes longer than the timeout, a TimeoutError is raised. The maximum allowed timeout is 1800 seconds.
Returns
The created Kubernetes
Job .
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
