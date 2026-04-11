---
title: "Service APIs overview \_|\_ Bigtable \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigtable/docs/reference/service-apis-overview
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/bigtable/docs
source_metadata:
  url: https://docs.cloud.google.com/bigtable/docs/reference/service-apis-overview
  title: "Service APIs overview \_|\_ Bigtable \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Bigtable
Reference
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Service APIs overview
Bigtable provides REST/HTTP and gRPC interfaces.
We strongly recommend that you use our
Cloud Bigtable client libraries instead of writing your
own . Our client libraries include many important features that can be
challenging to implement correctly, such as authentication and retries.
If the Cloud Bigtable client library for your preferred
language does not meet your needs, open a GitHub issue
for it instead of writing your own client library.
Supported languages include C#, C++, Java, Go, Node.js, Python, PHP, and Ruby.
You should write your own client library only when you use a programming
language that is not supported.
gRPC API
You can use the .proto service definition for Bigtable to generate
your own gRPC client library in any language that gRPC supports. Use these
resources to generate a client library:
Cloud Bigtable Data API service definition
Cloud Bigtable Instance Admin API service
definition
Cloud Bigtable Table Admin API service
definition
gRPC documentation : Everything you need to generate and use your
own gRPC client code
RPC Data API reference : Language-independent overview of the
RPC surface of Cloud Bigtable API (the Data API)
RPC Admin API reference : Language-independent overview of the
RPC surface of the Cloud Bigtable Admin API
REST/HTTP API
Bigtable provides a REST interface for the Admin API. We don't
recommend using REST to access the Data API.
There are many different ways to access the REST interface for
Bigtable. To create your own clients, use the following resources:
REST Admin API reference
Guidelines for working with Google HTTP APIs
API Discovery Service : Exposes machine-readable metadata about
the REST/HTTP API surface to help you create client libraries, tools, and
plugins
Client samples : Built with REST/HTTP APIs and the Google API
Discovery Service.
Note: Bigtable resource names can contain special characters. Be
sure to URI-encode and URI-decode these characters
when you send them over HTTP.
What's next
Learn about the client libraries for Cloud Bigtable .
Complete a quickstart for creating a gRPC client library .
Read reference documentation for the Cloud Bigtable RPC Data
API and RPC Admin API .
Read reference documentation for the REST Admin API .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
