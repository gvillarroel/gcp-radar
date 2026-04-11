---
title: "Plugins overview \_|\_ Service Extensions \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-extensions/docs/plugins-overview
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/service-extensions/docs/plugins-overview
source_metadata:
  url: https://docs.cloud.google.com/service-extensions/docs/plugins-overview
  title: "Plugins overview \_|\_ Service Extensions \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Service Extensions
Guides
Send feedback
Plugins overview
Stay organized with collections
Save and categorize content based on your preferences.
This page provides overview information about the integration of
plugins with Cloud Load Balancing Application Load Balancers and
Media CDN.
This feature is in Preview for Media CDN.
Plugins are built using WebAssembly (Wasm) format and use Proxy-Wasm APIs.
Wasm is an open and
standardized binary instruction format that enables a host to load and run
Wasm modules with customer-provided code. Wasm has a number of benefits for
executing customer code, including sandboxing for security, support for
multiple languages, portability, broad and growing support within the
industry, and improved performance relative to other VM-based options such
as JavaScript.
Proxy-Wasm is an open
source project started by Google. It defines APIs that let you
customize the behavior of network proxies by implementing callbacks to be
executed during HTTP request and response processing.
How plugins work
You can use Service Extensions with Application Load Balancers
and Media CDN as follows:
Prepare plugin code as follows:
Create custom code by using one of the Proxy-Wasm SDKs:
Rust
Go
C++
Compile your code into a Wasm module.
Upload your compiled plugin code to an Artifact Registry repository.
Create a plugin that contains the
uploaded plugin code.
Configure the plugin in Cloud Load Balancing extensions
or Media CDN extensions .
Plugin resources
Service Extensions helps you create the following key resources
that help you add custom code in the processing path:
Plugins , which contain the custom code that you want to deploy.
Plugin versions , which are versions of your Wasm module. You can indicate
which version of your Wasm module that a plugin is to use as its main (active) one.
Limitations
This section lists some limitations with plugins.
Limitations on resources
Plugins are strictly constrained in how many resources they can use:
A plugin can use up to 1 msec of normalized vCPU per invocation. A
CPU millisecond is platform dependent, but the normalized platform is
approximately equal to a processor with a 4 GHz clock speed. An
invocation is an independently billed phase of execution, which can be
request headers, request body, response headers, or response body.
A plugin can use up to 16 MiB of memory per VM instance. An instance
must be able to serve up to 1000 concurrent requests, which means that a
plugin can hold up to 16 KiB of memory per stream. Keep in mind that
the total memory use includes global state and stack allocations.
Use the plugin tester to
benchmark a plugin's CPU and memory characteristics.
Limitations on APIs
Plugins can use a subset of the Proxy-Wasm ABI. Plugins don't support
timers, custom metrics, shared data, shared queues, or outbound network
calls.
HTTP trailer events aren't supported.
Limitations with header manipulation
The maximum size of any mutation (headers or body chunks) is 128 KiB.
Plugins can't override the processing mode of the ext_proc stream.
Header manipulation through plugins is not supported for some headers. The
processor ignores any modifications in these headers, and continues to
process the request.
For Media CDN plugins, the following are not supported:
Headers: CDN-Loop , connection , keep-alive , proxy-authenticate ,
proxy-authorization , proxy-connection , te , trailers ,
transfer-encoding , upgrade , or X-user-IP .
Headers starting with: x-forwarded , x-goog- , x-google , x-gfe , or
x-amz- .
For Cloud Load Balancing plugins, the following are not supported:
Headers: connection , keep-alive , proxy-authenticate ,
proxy-authorization , proxy-connection , sec-user-ip , te ,
trailer , transfer-encoding , upgrade , x-dont-count-ads ,
x-dont-show-ads , x-gr , x-proxyuser-ip , or x-user-ip .
Additionally, for LbTrafficExtension , these headers are also not
supported: method , authority , scheme , or host headers.
Headers starting with: sec-gfe- , sec-google- , x-amz- ,
x-forwarded- , x-gfe- , x-goog- , x-google- , or x-gproxy- .
Limitations with HTTP/1.1 clients and backends
When you configure either REQUEST_BODY or RESPONSE_BODY for an
extension, if the load balancer receives a matching request, it removes the
Content-Length header from the response and switches to
chunked body encoding.
What's next
Prepare the plugin code
Create a plugin
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
