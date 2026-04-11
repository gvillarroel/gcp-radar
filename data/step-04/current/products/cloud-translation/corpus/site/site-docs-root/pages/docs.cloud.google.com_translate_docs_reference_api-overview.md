---
title: "API usage overview \_|\_ Cloud Translation \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/translate/docs/reference/api-overview
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/translate/docs
source_metadata:
  url: https://docs.cloud.google.com/translate/docs/reference/api-overview
  title: "API usage overview \_|\_ Cloud Translation \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Cloud Translation
API and references
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
API usage overview
This guide provides an overview of using the Cloud Translation API and its
reference documentation.
Client libraries, REST, and gRPC
You can access the API through client libraries, REST, or gRPC
(Cloud Translation - Advanced only).
Client libraries
Google provides client libraries for many popular languages to access the APIs.
If your desired programming language is supported by the client libraries, we
recommend that you use this option.
Cloud Translation - Basic client
libraries
Cloud Translation - Advanced client
libraries
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
The Cloud Translation API supports REST .
Cloud Translation - Basic translate text method
Cloud Translation - Advanced overview .
Pros
Cons
Simple JSON interface.
Well supported by many Google and third-party tools and libraries.
You must build your own client.
You must
implement authentication .
You must implement retries.
Less efficient JSON HTTP request body.
gRPC
Cloud Translation - Advanced supports
gRPC . For more
information, see the RPC reference ,
which provides a generic description of the types, methods, and fields generated
for a gRPC library.
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
Depending on whether you are using client libraries, REST, or gRPC, the type,
method, and field names for the API vary:
REST is arranged by resource hierarchies and their methods.
Client libraries and gRPC are arranged by services and their methods.
REST field names use camel case, though the API service will accept either
camel case or snake case.
gRPC field names use snake case.
Client library field names use either title case, camel case or snake case,
depending on which name is idiomatic for the language.
API editions
Cloud Translation offers two editions: Basic (v2) and Advanced (v3). Each edition
has its own set of APIs and capabilities. For more information, see the
Editions page.
What's next
For more information about using client libraries or REST, see get started
translating text with v3 or
v2 .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
