---
title: "API usage overview \_|\_ Vertex AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/docs/reference
knowledge_key: corpus
source_id: site-docs-reference-required-4
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/docs/python-sdk/use-vertex-ai-python-sdk-ref
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/docs/reference
  title: "API usage overview \_|\_ Vertex AI \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI
Reference
Send feedback
API usage overview
Stay organized with collections
Save and categorize content based on your preferences.
This guide provides an overview of using the Vertex AI API
and its reference documentation.
REST, gRPC, and client libraries
You can access the API via
REST, gRPC, or one of the provided client libraries (built on gRPC).
Client libraries
Google provides
client libraries
for many popular languages to access this API.
If your desired programming language is supported by the client libraries,
you should use this option.
Pros
Cons
Maintained by Google.
Built-in
authentication .
Built-in retries.
Idiomatic for each language.
Efficient
protocol buffer
HTTP request body.
Not available for all programming languages.
REST
This API supports
REST .
See the
REST reference for this API.
Also see
How to call Google APIs: REST edition .
Pros
Cons
Simple JSON interface.
Well supported by many Google and third-party tools and libraries.
You must build your own client.
You must
implement authentication .
You must implement retries.
Less efficient JSON HTTP request body.
REST streaming is not supported by this API.
gRPC
This API supports
gRPC .
See the
RPC reference for this API,
which provides a generic description of the types, methods,
and fields generated for a gRPC library.
Also see
How to call Google APIs: RPC edition .
Pros
Cons
Supports
many programming languages .
Efficient
protocol buffer
HTTP request body.
You must generate your own client from Google-supplied protocol buffers.
You must
implement authentication .
You must implement retries.
Type, method, and field names
Depending on whether you are using
client libraries, REST, or gRPC,
the type, method, and field names for the API vary somewhat:
REST is arranged by resource hierarchies and their methods.
Client libraries and gRPC are
arranged by services and their methods.
REST field names use camel case,
though the API service will accept either camel case or snake case.
gRPC field names use snake case.
Client library field names use either title case, camel case or snake case,
depending on which name is idiomatic for the language.
Protocol buffers
Whether you are using
client libraries, REST, or gRPC,
the underlying service is defined using
protocol buffers .
In particular, the service uses
proto3 .
When calling the API,
some request or response fields can require a basic understanding of
protocol buffer well-known types .
In addition, when calling the REST API, the
default value
behavior for protocol buffers may result in missing fields in a JSON response.
These fields are simply set to the default value,
so they are not included in the response.
API versions
The following API versions are available:
v1 : Stable.
v1beta1 : Supports latest preview features.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
