---
title: "Use Service Extensions for edge compute \_|\_ Cloud CDN \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/cdn/docs/integration-with-service-extensions
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-third-party-storage
source_metadata:
  url: https://docs.cloud.google.com/cdn/docs/integration-with-service-extensions
  title: "Use Service Extensions for edge compute \_|\_ Cloud CDN \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Cloud CDN
Guides
Send feedback
Use Service Extensions for edge compute
Stay organized with collections
Save and categorize content based on your preferences.
You can use Service Extensions
to run your own WebAssembly (Wasm) code in a
fully serverless, Google-managed compute environment. This page describes
extensibility by using Service Extensions.
About Service Extensions edge extensions for Cloud CDN
You build plugins using Wasm and the Proxy-Wasm ABI .
The Proxy-Wasm ABI offers support for Rust, C++, and Go.
Service Extensions plugins
run on a fully serverless, Google-managed infrastructure. They run close to the
data plane, and latency optimization is managed.
Service Extensions plugins are intended for lightweight use
cases with tight limits on CPU and memory.
As the following diagram shows, you attach
Service Extensions plugins to global external Application Load Balancer
by using edge extensions
and traffic extensions
at different stages of the networking data path.
Extensibility in the networking data path (click to enlarge).
Common use cases
Use Service Extensions plugins with global external Application Load Balancers in
the following sample scenarios:
Custom traffic steering
Manipulate request headers to influence backend service selection.
Cache optimization
Influence which content is served from a Cloud CDN cache.
Exception handling
Redirect clients to a custom error page for certain response classes.
Custom logging
Log user-defined headers or custom data into Cloud Logging.
Header addition
Create new headers relevant for your applications or specific customers.
Insert new headers for request.
Header manipulation
Rewrite existing request headers or override client headers on their way
to the backend.
Security
Write custom security policies based on client requests and make enforcement
decisions within your plugin.
Get started
Create a plugin
Configure an edge extension
What's next
Learn more about Service Extensions
concepts.
View Rust, Go, and C++ plugin examples and testing tools in the
Service Extensions GitHub repository for plugins .
Learn how to prepare and upload the files required
to create plugins by using Service Extensions.
Learn how to create a plugin .
Learn how to configure an edge extension .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
