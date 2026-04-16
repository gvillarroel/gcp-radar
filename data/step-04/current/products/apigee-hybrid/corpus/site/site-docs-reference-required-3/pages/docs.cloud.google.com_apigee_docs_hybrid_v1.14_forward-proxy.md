---
title: "Configure forward proxying for API proxies \_|\_ Apigee \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/forward-proxy
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/forward-proxy
source_metadata:
  url: https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/forward-proxy
  title: "Configure forward proxying for API proxies \_|\_ Apigee \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Apigee
Guides
Send feedback
Configure forward proxying for API proxies
Stay organized with collections
Save and categorize content based on your preferences.
You are currently viewing version 1.14 of the
Apigee hybrid documentation. For more information, see
Supported versions .
Version 1.14 keyboard_arrow_down
Supported versions:
v1.16 (latest)
v1.15
v1.14
List of supported versions
Unsupported versions:
v1.13
v1.12
v1.11
v1.10
v1.9
v1.8
v1.7
v1.6
v1.5
v1.4
v1.3
v1.2
v1.1
Note: Both Apigee and Apigee hybrid support
forward proxy functionality . Use the instructions on this page to configure forward proxies for hybrid rather than the general Apigee functionality.
Forward proxies provide a single point through which multiple machines send requests to an
external server. They can enforce security policies, log and analyze requests, and perform other
actions so that requests adhere to your business rules.
Using a forward proxy in Apigee hybrid,
you can intercept and manage all egress traffic from your Kubernetes cluster. This includes API
proxy requests to Target Endpoints and communication with *.googleapis.com that the hybrid
runtime makes for its debug and analytics pipeline and for policies like MessageLogging .
To use an HTTP forward proxy between hybrid and the TargetEndpoint, you must configure
the outbound proxy settings in your overrides file. These environment-scoped properties
route target requests from hybrid to the HTTP forward proxy. You also need to ensure
use.proxy is set to "true" for any TargetEndpoint that you want to go through an HTTP
forward proxy. See the bottom of the page for instructions.
To configure a hybrid environment for forwarding proxying, add
the envs.httpProxy property to your overrides file and apply it to the
cluster. For example:
envs:
- name: test
httpProxy:
scheme: HTTP
host: 10.12.0.47
port: 3128
...
NOTE: The scheme must be HTTP and must be uppercase.
For details on each of the envs.httpProxy configuration properties refer to the
Configuration property reference .
Forward proxying is configured for an environment; all traffic going from API
proxies in that environment to backend targets goes through the specified HTTP
forward proxy. If the traffic for a
specific target of an API proxy should go directly to the backend target, bypassing the forward
proxy, then set the following property in the TargetEndpoint to override the HTTP forward
proxy:
<Property name="use.proxy">false</Property>
For more information on setting the TargetEndpoint properties, including how to configure
the connection to the target endpoint, see Endpoint properties reference .
Set use.proxy to "true" for any TargetEndpoint that you want to go through
an HTTP forward proxy:
<Property name="use.proxy">true</Property>
If you have a firewall on the backend which is configured to expect Host Header always to include the backend server host name, while the Message Processor is sending the proxy server hostname, perform the following to configure this option:
Set the property use.proxy.host.header.with.target.uri to true in the
TargetEndpoint as shown in the following example:
Sample TargetEndpoint configuration:
<TargetEndpoint name="default">
<HTTPTargetConnection>
<URL>https://mocktarget.apigee.net/json</URL>
<Properties>
<Property name="use.proxy.host.header.with.target.uri">true</Property>
</Properties>
</HTTPTargetConnection>
</TargetEndpoint>
For details on the use.proxy.host.header.with.target.uri property, see Endpoint properties reference .
Important note on external calls:
Configuring non-API proxy forwarding using httpProxy without also setting envs.httpProxy will not apply the proxy configuration to Apigee Runtime's external calls to services like Pub/Sub or other Google Cloud APIs.
If you only specify httpProxy , you must also ensure that *.googleapis.com is allowlisted for your Apigee Runtime pods to enable connectivity to these services.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
